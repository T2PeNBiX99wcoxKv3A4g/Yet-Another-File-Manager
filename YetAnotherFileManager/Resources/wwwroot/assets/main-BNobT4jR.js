import{A as e,C as t,D as n,M as r,O as i,S as a,T as o,_ as s,b as c,c as l,d as u,f as d,g as f,h as p,i as m,j as h,k as g,l as _,m as v,n as y,o as b,p as x,r as S,s as C,t as w,u as T,v as ee,w as E,x as D,y as te}from"./theme-GtEFL-tp.js";var O=r(h(),1),k=g(),A=15e3,j=new Set,ne=new Map,M=!1,re=0,N;function P(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function ie(){M||(M=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>F(e)))}function F(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?ne.get(n):void 0;n&&r&&(ne.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),j.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function ae(){if(N!==void 0)return;let e=()=>{if(!P())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),N=setInterval(e,5e3)}var I={get available(){return P()},send(e){P()?(ie(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&ae()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=A){if(!P())return Promise.reject(Error(`Native bridge is not available.`));ie();let r=`req-${++re}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{ne.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);ne.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return ie(),j.add(e),()=>j.delete(e)}},L=E();function oe(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function se(e){return I.available?await I.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var R=(0,O.createContext)(oe({})),z=(0,O.createContext)(`en`);function B(){return(0,O.useContext)(R)}var ce=({children:e})=>{let[t,n]=(0,O.useState)(()=>oe({})),[r,i]=(0,O.useState)(`en`);return(0,O.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await se();if(e)return;n(()=>oe(t.strings)),i(t.locale)}catch{}};t();let r=I.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,O.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,L.jsx)(R.Provider,{value:t,children:(0,L.jsx)(z.Provider,{value:r,children:e})})},le=e=>I.send({type:e});function V(){let[e,t]=(0,O.useState)(!1);return(0,O.useEffect)(()=>{if(I.available)return I.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>le(`window.minimize`),toggleMaximize:()=>le(`window.toggleMaximize`),close:()=>le(`window.close`)}}function ue(){return{onMouseDown:()=>le(`window.drag`),onDoubleClick:()=>le(`window.toggleMaximize`)}}function de(){let[e,t]=(0,O.useState)(!1),{maximized:n}=V();return(0,O.useEffect)(()=>{if(!I.available)return;let e=!1;return I.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,O.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var H=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function fe(){return(0,L.jsx)(L.Fragment,{children:H.map(([e,t])=>(0,L.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),I.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var pe=null;function me(e){pe=e}function he(e){return pe?pe(e):Promise.resolve(!1)}var ge={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},_e={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function ve(e,t){return I.available?await I.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function U(e){return I.available?(await I.request(`fs.open`,{path:e})).ok:!1}async function ye(e,t=!0,n=!1,r=0,i){return await I.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function be(e,t,n=0,r){return await I.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function xe(e,t=0,n){return await I.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function W(e){return I.available?await I.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Se(e,t){return I.available?(await I.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Ce(e,t,n,r){return I.available?(await I.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function we(e,t=!1){return I.available?await I.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Te(){return(await I.request(`fs.places`)).places}async function Ee(){return(await I.request(`fs.drives`)).drives}async function De(e=!1){return(await I.request(`fs.recycle`,{includeOrphans:e})).entries}async function Oe(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await he({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await I.request(e,{...t,confirm:r.token})}return r}async function ke(e=!1){let t=await I.request(`fs.recycle.empty`,{includeOrphans:e});await Oe(`fs.recycle.empty`,{includeOrphans:e},t)}async function Ae(e){return!I.available||e.length===0?{ok:!1,done:0}:await I.request(`fs.recycle.restoreMany`,{ids:e})}async function je(e){if(!I.available||e.length===0)return{ok:!1,done:0};let t=await I.request(`fs.recycle.deleteMany`,{ids:e}),n=await Oe(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Me(e){I.available&&e&&await I.request(`fs.recycle.properties`,{id:e})}async function Ne(){if(!I.available)return{entries:[],cancelled:!0,failed:!1};let e=await I.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Pe(){return I.available?(await I.request(`fs.recycle.admin.purge`)).ok:!1}async function Fe(e=0,t=150,n=!1){return I.available?await I.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Ie(){return I.available?(await I.request(`fs.recent`)).entries:[]}async function Le(){return I.available?(await I.request(`fs.frequent`)).entries:[]}async function Re(e){I.available&&await I.request(`fs.frequent.record`,{path:e})}async function ze(){await I.request(`fs.recent.clear`)}async function Be(){await I.request(`fs.frequent.clear`)}async function Ve(){return await I.request(`fs.visibility`)}async function He(){return await I.request(`fs.hidden.toggle`)}async function Ue(){return I.available?await I.request(`fs.index.tasks`):{count:0,directories:[]}}var We={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1};async function Ge(){if(!I.available)return We;let e=await I.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1}}async function Ke(){return I.available?(await I.request(`app.protection.defaults`)).paths??[]:[]}var G={registered:!1,pathMatches:!1,registeredPath:null};async function qe(){return I.available?await I.request(`app.defaultManager.status`):{registered:!1,pathMatches:!1,registeredPath:null}}async function Je(){return I.available?await I.request(`app.archive.status`):G}async function Ye(){return I.available?await I.request(`app.archive.register`):G}async function Xe(){return I.available?await I.request(`app.archive.unregister`):G}async function Ze(e){if(!I.available)return e;let t=await I.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden}}async function Qe(e,t){I.available&&await I.request(`app.tabs.set`,{tabs:e,active:t})}async function $e(e,t,n){return I.available?(await I.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var et={managed:0,private:0,workingSet:0,available:0};async function tt(){return I.available?await I.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function nt(){return I.available?await I.request(`app.updateStatus`)??null:null}async function rt(){return I.available?await I.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function it(e){return!I.available||!e?!1:(await I.request(`app.openUrl`,{url:e})).ok}async function at(){return I.available?await I.request(`app.memory`):et}async function ot(){return I.available?await I.request(`app.memory.trim`):et}async function st(){return I.available?(await I.request(`app.scheme`)).registered:!1}async function ct(e){return I.available?(await I.request(`app.scheme.set`,{enabled:e})).registered:!1}var lt={supported:!1,mode:`none`,active:!1,error:null};async function ut(){return I.available?await I.request(`app.startup`):lt}async function dt(e){return I.available?await I.request(`app.startup.set`,{mode:e}):lt}async function ft(e,t=!1){return!I.available||e.length===0?!1:(await I.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function pt(){return I.available?(await I.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function mt(){return I.available?await I.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function ht(e,t,n){return!I.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await I.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function gt(e){return!I.available||e.length===0?[]:(await I.request(`fs.paths.info`,{paths:e})).entries}async function _t(e){return I.available?(await I.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function vt(e,t=!1){if(!I.available||e.length===0)return{ok:!1,error:null};let n=await I.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await he({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await I.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function yt(e,t){return I.available?await I.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function bt(e,t=!1){return I.available?await I.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function xt(e){return I.available?(await I.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function St(e,t){return I.available?await I.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Ct(e,t,n){return I.available?await I.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function wt(e,t){return I.available?await I.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Tt(e){I.available&&e.length!==0&&await I.request(`fs.operation.properties`,{paths:e})}async function Et(e){I.available&&await I.request(`fs.operation.openWith`,{path:e})}async function Dt(e){I.available&&await I.request(`fs.operation.terminal`,{path:e})}async function Ot(e){return I.available?await I.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function kt(e,t){return I.available?(await I.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function At(){return I.available?await I.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function jt(){return I.available?await I.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Mt(e){I.available&&await I.request(`fs.operation.showInExplorer`,{path:e})}async function K(e){return!I.available||e.length===0?{verbs:[],safe:!0}:await I.request(`shell.verbs`,{paths:e})}async function Nt(e,t,n,r){I.available&&e.length!==0&&await I.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Pt(e,t){return!I.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await I.request(`fs.operation.compress`,{...t,paths:e})}async function Ft(){return I.available?(await I.request(`app.tasks`)).tasks:[]}async function It(){I.available&&await I.request(`app.tasks.clear`)}var Lt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Rt=Lt.openInNewTab;function zt(e){Rt=e.trim()||Lt.openInNewTab}function Bt(e){let t=Rt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Vt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Ht(e){return e.split(`+`).filter(Boolean).map(e=>Ut[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Ut={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Wt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Gt=new Map;function Kt(e){return c(f(e)?l(e):e)}function qt(e){return Gt.get(Kt(e))}function Jt(e,t){Gt.set(Kt(e),t)}function Yt(e){Gt.delete(Kt(e))}function Xt(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var Zt=new Map,Qt=new Map,q=new Set,J=0;function $t(){Zt.clear(),Qt.clear(),J+=1,q.forEach(e=>e())}function en(){let[e,t]=(0,O.useState)(J);return(0,O.useEffect)(()=>{let e=()=>t(J);return q.add(e),()=>{q.delete(e)}},[]),e}var tn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function nn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return tn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function rn(e,t,n=!1){let r=en(),i=e===null?``:nn(e,t,n),[a,o]=(0,O.useState)(()=>Zt.get(i)??null);return(0,O.useEffect)(()=>{if(e===null){o(null);return}if(!I.available)return;if(Zt.has(i)){o(Zt.get(i)??null);return}let r=!0;return I.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?Zt.set(i,e.dataUrl):Zt.delete(i),r&&o(e.dataUrl)},()=>{Zt.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function an(e){let[t,n]=(0,O.useState)(e);return(0,O.useEffect)(()=>{if(!e){n(null);return}if(!f(e)){n(e);return}let t=!0;return xe(e,0,qt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function on(e){let t=en(),[n,r]=(0,O.useState)(()=>e?Qt.get(e)??null:null);return(0,O.useEffect)(()=>{if(!e||!I.available){r(null);return}if(Qt.has(e)){r(Qt.get(e)??null);return}let t=!0;return I.request(`fs.iconFile`,{path:e}).then(n=>{Qt.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{Qt.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var sn=null,cn=null;function ln(){return sn===null?I.available?(cn??=I.request(`app.thumbnails`).then(e=>(sn=e.base??``,sn),()=>(sn=``,``)),cn):Promise.resolve(``):Promise.resolve(sn)}function un(e,t=128,n=0){let[r,i]=(0,O.useState)(sn);return(0,O.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return ln().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function dn(e,t=0,n=``){let[r,i]=(0,O.useState)(sn);if((0,O.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return ln().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function fn(e,t=0){let[n,r]=(0,O.useState)(sn);return(0,O.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return ln().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var pn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},mn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function hn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=vn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=xn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var gn=`\0`,_n=``;function vn(e){return e.query!==gn&&(gn=e.query,_n=e.query.toLowerCase()),_n}var yn=`\0`,bn=null;function xn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===yn)return bn;yn=t;try{bn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{bn=null}return bn}function Sn(e,t){return hn(e,t)!==null}var Cn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],wn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Tn(e){let t=Dn(e);for(let{kind:e}of Cn)if(wn[e].has(t))return e;return null}function En(e){return Tn(e)!==null}function Dn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var On=(0,O.createContext)({places:{},useIcons:!1}),kn=On.Provider;function An(){return(0,O.useContext)(On)}function jn(e,t){return e.places[c(t)]}function Mn(e,t,n){return jn(e,t)?.name||n}function Nn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Pn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function Fn(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function In(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Ln=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,L.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,L.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Rn=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),zn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,L.jsx)(`path`,{d:`M14 3v4h4`})]}),Bn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,L.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,L.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Vn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,L.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Hn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M12 19V5`}),(0,L.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Un=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,L.jsx)(`path`,{d:`M20 4v7h-7`})]}),Wn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M12 5v14`}),(0,L.jsx)(`path`,{d:`M5 12h14`})]}),Gn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M19 12H5`}),(0,L.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),Kn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M5 12h14`}),(0,L.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),qn=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,L.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Jn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,L.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Yn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,L.jsx)(`path`,{d:`M12 12v8`})]}),Xn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,L.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Zn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,L.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,L.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,L.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),Qn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,L.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),$n=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),er=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M4 7h16`}),(0,L.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,L.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,L.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),tr=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),nr=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),rr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,L.jsxs)(`defs`,{children:[(0,L.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,L.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,L.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,L.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,L.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,L.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,L.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,L.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,L.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,L.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),ir=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,L.jsx)(`path`,{d:`M15 3v4h4`}),(0,L.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),ar=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,L.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,L.jsx)(`path`,{d:`m13 5-2 14`})]}),or=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,L.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,L.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),sr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,L.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),cr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,L.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,L.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),lr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,L.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),ur=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,L.jsx)(`path`,{d:`M15 3v4h4`}),(0,L.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),dr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,L.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),fr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,L.jsx)(`path`,{d:`M8.5 14h7`})]}),pr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,L.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,L.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),mr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,L.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),hr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,L.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),gr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,L.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),_r=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,L.jsx)(`path`,{d:`M15 3v4h4`}),(0,L.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),vr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,L.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,L.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,L.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),yr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,L.jsx)(`path`,{d:`m14 6 4 4`})]}),br=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,L.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),xr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,L.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Sr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M12 4v10`}),(0,L.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,L.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Cr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,L.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,L.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),wr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,L.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,L.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Tr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,L.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Er=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Dr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,L.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Or=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,L.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,L.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),kr=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Ar=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,L.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,L.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,L.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),jr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,L.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Mr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,L.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Nr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,L.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,L.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Pr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,L.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Fr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,L.jsx)(`path`,{d:`M3.5 12h17`}),(0,L.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Ir=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Lr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,L.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Rr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,L.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,L.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),zr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,L.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Br=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M12 16V4`}),(0,L.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,L.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Vr=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Hr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,L.jsx)(`path`,{d:`M12 4v16`})]}),Ur=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,L.jsx)(`path`,{d:`M15 4v16`})]}),Wr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,L.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,L.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,L.jsx)(`circle`,{cx:19,cy:12,r:1.6})]});function Y(e,t){return({size:n=t,...r})=>(0,L.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var Gr=Y(Ln,18),Kr=Y(Rn,18),qr=Y(zn,18),Jr=Y(Bn,18),Yr=Y(Vn,16),Xr=Y(Hn,16),Zr=Y(Un,16),Qr=Y(Wn,16),$r=Y(Gn,16),ei=Y(Kn,16),ti=Y(qn,12),ni=Y(Jn,18),ri=Y(Yn,14),ii=Y(Xn,14),ai=Y(Zn,14),oi=Y(Qn,18),si=Y($n,18),ci=Y(er,18),li=Y(tr,14),ui=Y(nr,14),di=Y(rr,18),fi=Y(ir,18),pi=Y(ar,18),mi=Y(or,18),hi=Y(sr,18),gi=Y(cr,18),_i=Y(lr,18),vi=Y(ur,18),yi=Y(dr,18),bi=Y(fr,18),xi=Y(pr,18),Si=Y(mr,18),Ci=Y(hr,18),wi=Y(gr,18),Ti=Y(_r,18),Ei=Y(vr,18),Di=Y(yr,16),Oi=Y(br,18),ki=Y(xr,18),Ai=Y(Sr,18),ji=Y(Cr,18),Mi=Y(wr,18),Ni=Y(Tr,18),Pi=Y(Er,18),Fi=Y(Dr,18),Ii=Y(Or,18),Li=Y(kr,18),Ri=Y(Ar,18),zi=Y(jr,18),Bi=Y(Mr,18),Vi=Y(Nr,18),Hi=Y(Pr,18),Ui=Y(Fr,18),Wi=Y(Ir,18),Gi=Y(Lr,16),Ki=Y(Rr,16),qi=Y(zr,16),Ji=Y(Br,16),Yi=Y(Vr,16),Xi=Y(Hr,16),Zi=Y(Ur,16),Qi=Y(Wr,16);async function $i(e,t,n){return I.available?(await I.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function ea(e){return $i(`folder`,[],e??``)}function ta(e){return $i(`file`,e??[],``)}var na=null,ra=null;function ia(e){na=e}function aa(e){return na?na(e):Promise.resolve()}function oa(e){ra=e}function sa(e,t=!1){return ra?ra(e,t):Promise.resolve(null)}var ca=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],la=null,ua=0,da=new Set;function fa(){ua+=1;for(let e of da)e()}function pa(e){return da.add(e),()=>da.delete(e)}function ma(){return ua}function ha(e){la=e,fa()}function ga(){return(0,O.useSyncExternalStore)(pa,ma,ma),la}var _a=e(),va=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,ya=o`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ba=o`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,xa=o`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Sa=o`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Ca=o`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,wa=o`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ta=o`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Ea=o`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Da=n`animation: ${ya} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Oa=n`animation: ${ba} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,ka=n`animation: ${xa} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${Sa} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Aa=n`animation: ${Ca} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,ja=n`animation: ${wa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ma=n`animation: ${Ta} 140ms ease-out;`,Na=n`animation: ${Ea} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Pa({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,O.useState)([]),s=(0,O.useRef)(void 0);if((0,O.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,O.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,L.jsx)(Wa,{},`group-rule-${i}`)),n.push((0,L.jsx)(Ua,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,L.jsx)(Wa,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,L.jsxs)(Ba,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,L.jsx)(Va,{children:e.loading?(0,L.jsx)(Ga,{}):e.icon}),(0,L.jsx)(Ha,{children:e.label}),a?(0,L.jsx)(ti,{size:12}):e.checked&&(0,L.jsx)(li,{size:12})]},`${e.label}-${i}`))}),n};return(0,_a.createPortal)((0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Fa,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ia,{children:r.map((e,t)=>(0,L.jsxs)(La,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,L.jsx)(Ra,{children:e.icon}),(0,L.jsx)(za,{children:e.label})]},`${e.label}-${t}`))}),(0,L.jsx)(Wa,{})]}),m(n,0)]}),a.map((e,t)=>(0,L.jsx)(Fa,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Fa=i.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${va}
    ${Oa}
    transform-origin: top left;
`,Ia=i.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,La=i.button`
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
`,Ra=i.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,za=i.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ba=i.button`
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
`,Va=i.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Ha=i.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ua=i.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Wa=i.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Ga=i.span`
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
`;function Ka({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:l,onDelete:u,onCopy:d,onPaste:p,onCreateFolder:m,onCreateFile:h,creationOnly:g=!1,onRefresh:v,onAddToTray:y,allowCompression:b=!1,onCompressTo:x,onArchiveCreated:S}){let C=B(),w=ga(),T=f(t),[ee,E]=(0,O.useState)({verbs:[],safe:!0,loading:!1}),[D,te]=(0,O.useState)({recommended:[],other:[],loading:!1}),[k,A]=(0,O.useState)(null),j=(0,O.useRef)(0),ne=(0,O.useRef)(0),M=e?.paths.length===1,re=e?.background?t?[t]:[]:e?.paths??[];if((0,O.useEffect)(()=>{if(!e){E({verbs:[],safe:!0,loading:!1}),te({recommended:[],other:[],loading:!1});return}let t=++j.current;E({verbs:[],safe:!0,loading:re.length>0&&!T}),re.length>0&&!T&&K(re).then(e=>{j.current===t&&E({...e,loading:!1})},()=>{j.current===t&&E({verbs:[],safe:!0,loading:!1})});let r=++ne.current;!T&&M&&n?(te({recommended:[],other:[],loading:!0}),Ot(n.path).then(e=>{ne.current===r&&te({...e,loading:!1})},()=>{ne.current===r&&te({recommended:[],other:[],loading:!1})})):te({recommended:[],other:[],loading:!1})},[e,M,n?.path,n?.isDirectory,re.length,T]),(0,O.useEffect)(()=>{if(!e||e.background||!M||!n?.isDirectory){A(null);return}let t=!0;return xt(n.path).then(e=>{t&&A(e)},()=>{t&&A(null)}),()=>{t=!1}},[e,M,n?.path,n?.isDirectory]),!e)return null;let N=[],P=[],ie=()=>{if(!M||!n)return`Archive`;let e=_(n.path);if(n.isDirectory)return e;let t=e.lastIndexOf(`.`);return t>0?e.slice(0,t):e},F=async e=>{let n=await Pt(e,{directory:t,name:ie(),format:`zip`,level:5});n.ok&&n.path?S?.(n.path,!0):aa(n.error??C(`Could not create the archive.`))},ae=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},I=async()=>{if(!n||k===null)return;let e=await St(n.path,!k);e.ok?(A(e.enabled),v?.()):aa(e.error??C(`Could not change the case sensitivity.`))},oe=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Ct(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Ct(e,t,`${a}\\${Ja(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?v?.():aa(o.error??C(`Could not create the link.`))},se=async e=>{if(!n)return;let r=await ea(t);r&&await oe(e,n.path,r,_(n.path),e.endsWith(`-copy`))},R=async e=>{let n=w?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=c(a)===c(t);await oe(n,r.path,t,_(r.path),i&&!o)}},z=async()=>{let t=(await gt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&ha({paths:t})},ce=()=>{let e=w?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:C(`Cancel selected link`),icon:(0,L.jsx)(ui,{size:14}),onSelect:()=>ha(null)},...t?[{label:C(`Hard link`),icon:(0,L.jsx)(qr,{size:14}),separatorBefore:!0,onSelect:()=>void R(`hard`)}]:[],{label:C(`Symbolic link`),icon:(0,L.jsx)(qr,{size:14}),separatorBefore:!t,onSelect:()=>void R(`symbolic-file`)},...n?[{label:C(`Directory junction`),icon:(0,L.jsx)(Kr,{size:14}),onSelect:()=>void R(`junction`)},{label:C(`Smart copy`),icon:(0,L.jsx)(Gi,{size:14}),separatorBefore:!0,onSelect:()=>void R(`smart-copy`)},{label:C(`Smart mirror`),icon:(0,L.jsx)(Gi,{size:14}),onSelect:()=>void R(`smart-mirror`)},{label:C(`Multi-version smart copy`),icon:(0,L.jsx)(Gi,{size:14}),onSelect:()=>void R(`multi-version-smart-copy`)},{label:C(`Hardlink copy`),icon:(0,L.jsx)(Gi,{size:14}),separatorBefore:!0,onSelect:()=>void R(`hard-copy`)},{label:C(`Symbolic link copy`),icon:(0,L.jsx)(Gi,{size:14}),onSelect:()=>void R(`symbolic-copy`)}]:[]]};if(e.background){if(m&&P.push({label:C(`New folder`),icon:(0,L.jsx)(Qr,{size:16}),shortcut:Ht(r.newFolder),onSelect:m}),h||m){let e=[];m&&(e.push({label:C(`Folder`),icon:(0,L.jsx)(Kr,{size:14}),onSelect:()=>m(!1)}),T||e.push({label:C(`Case-sensitive folder`),icon:(0,L.jsx)(Kr,{size:14}),onSelect:()=>m(!0)})),h&&e.push(...ca.map((e,t)=>({label:`${C(e.label)} (${e.extension})`,icon:(0,L.jsx)(qr,{size:14}),separatorBefore:t===0,onSelect:()=>h(e.extension)}))),N.push({label:C(`New`),icon:(0,L.jsx)(Qr,{size:14}),children:e,onSelect:()=>void 0})}if(T||N.push({label:C(`Create link`),icon:(0,L.jsx)(Ji,{size:14}),disabled:!w,children:ce(),onSelect:()=>void 0}),g)return(0,L.jsx)(Pa,{items:N,onClose:a,quick:P,x:e.x,y:e.y});!T&&b&&(N.push({label:C(`Open in Terminal`),icon:(0,L.jsx)(Bi,{size:14}),onSelect:()=>void Dt(t)}),N.push({label:C(`Show in Explorer`),icon:(0,L.jsx)(Kr,{size:14}),separatorBefore:!0,onSelect:()=>void Mt(t)})),p&&P.push({label:C(`Paste`),icon:(0,L.jsx)(qi,{size:16}),disabled:!i,shortcut:Ht(r.paste),onSelect:()=>p(t)}),v&&P.push({label:C(`Refresh`),icon:(0,L.jsx)(Zr,{size:16}),shortcut:Ht(r.refresh),onSelect:v}),T||P.push({label:C(`Properties`),icon:(0,L.jsx)(ni,{size:16}),shortcut:Ht(r.properties),onSelect:()=>void Tt([t])})}else{if(o&&N.push({label:C(`Open`),icon:(0,L.jsx)(ei,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&N.push({label:C(`Open in new tab`),icon:(0,L.jsx)(Qr,{size:14}),onSelect:()=>o(n.path,!0)}),p&&N.push({label:C(`Paste into folder`),icon:(0,L.jsx)(qi,{size:14}),disabled:!i,onSelect:()=>p(n.path)}),T||N.push({label:C(`Open in Terminal`),icon:(0,L.jsx)(Bi,{size:14}),onSelect:()=>void Dt(n.path)})),!T&&M&&n){let e=[];if(D.loading)e.push({label:C(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of D.recommended)e.push({label:t.name,group:C(`Suggested apps`),icon:t.icon?(0,L.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,L.jsx)(yi,{size:14}),onSelect:()=>void kt(n.path,t.path).then(e=>{e||Et(n.path)})});for(let t of D.other)e.push({label:t.name,group:C(`Other apps`),icon:t.icon?(0,L.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,L.jsx)(yi,{size:14}),onSelect:()=>void kt(n.path,t.path).then(e=>{e||Et(n.path)})})}e.push({label:C(`Choose another app…`),icon:(0,L.jsx)(yi,{size:14}),separatorBefore:!0,onSelect:()=>void Et(n.path)}),N.push({label:C(`Open with`),icon:(0,L.jsx)(yi,{size:14}),children:e,onSelect:()=>void Et(n.path)})}if(T||N.push({label:C(`Compress`),icon:(0,L.jsx)(_i,{size:14}),separatorBefore:!0,children:[{label:C(`Compress to ZIP`),icon:(0,L.jsx)(_i,{size:14}),onSelect:()=>void F(e.paths)},{label:C(`Compress to…`),icon:(0,L.jsx)(_i,{size:14}),onSelect:()=>x?.(e.paths,ie())}],onSelect:()=>void 0}),!T&&(e?.paths.length??0)>0){let e=[{label:C(`Select link source`),icon:(0,L.jsx)(Ji,{size:14}),onSelect:()=>void z()},...w?[{label:C(`Cancel selected link`),icon:(0,L.jsx)(ui,{size:14}),onSelect:()=>ha(null)}]:[],...M&&n?n.isDirectory?[{label:C(`Symbolic link`),icon:(0,L.jsx)(Kr,{size:14}),separatorBefore:!0,onSelect:()=>void se(`symbolic-folder`)},{label:C(`Directory junction`),icon:(0,L.jsx)(Kr,{size:14}),onSelect:()=>void se(`junction`)},{label:C(`Smart copy`),icon:(0,L.jsx)(Gi,{size:14}),separatorBefore:!0,onSelect:()=>void se(`smart-copy`)},{label:C(`Smart mirror`),icon:(0,L.jsx)(Gi,{size:14}),onSelect:()=>void se(`smart-mirror`)},{label:C(`Multi-version smart copy`),icon:(0,L.jsx)(Gi,{size:14}),onSelect:()=>void se(`multi-version-smart-copy`)},{label:C(`Hardlink copy`),icon:(0,L.jsx)(Gi,{size:14}),separatorBefore:!0,onSelect:()=>void se(`hard-copy`)},{label:C(`Symbolic link copy`),icon:(0,L.jsx)(Gi,{size:14}),onSelect:()=>void se(`symbolic-copy`)}]:[{label:C(`Symbolic link`),icon:(0,L.jsx)(qr,{size:14}),separatorBefore:!0,onSelect:()=>void se(`symbolic-file`)},{label:C(`Hard link`),icon:(0,L.jsx)(qr,{size:14}),onSelect:()=>void se(`hard`)}]:[]];N.push({label:C(`Create link`),icon:(0,L.jsx)(Ji,{size:14}),children:e,onSelect:()=>void 0})}!T&&n?.isDirectory&&k!==null&&N.push({label:C(`Case-sensitive names`),icon:(0,L.jsx)(Kr,{size:14}),checked:k,onSelect:()=>void I()}),N.push({label:C(`Copy as path`),icon:(0,L.jsx)(Gi,{size:14}),onSelect:()=>void ae(e.paths)}),y&&N.push({label:C(`Add to file tray`),icon:(0,L.jsx)(Hi,{size:14}),onSelect:()=>y(e.paths)}),T||N.push({label:C(`Show in Explorer`),icon:(0,L.jsx)(Kr,{size:14}),separatorBefore:!0,onSelect:()=>void Mt(e.paths[0])}),d&&P.push({label:C(`Cut`),icon:(0,L.jsx)(Ki,{size:16}),shortcut:Ht(r.cut),onSelect:()=>d(e.paths,!0)},{label:C(`Copy`),icon:(0,L.jsx)(Gi,{size:16}),shortcut:Ht(r.copy),onSelect:()=>d(e.paths,!1)}),M&&n&&l&&P.push({label:C(`Rename`),icon:(0,L.jsx)(Di,{size:16}),shortcut:Ht(r.rename),onSelect:()=>l(n.path)}),u&&P.push({label:C(`Delete`),icon:(0,L.jsx)(ci,{size:16}),danger:!0,shortcut:Ht(r.delete),onSelect:()=>u(e.paths)}),T||P.push({label:C(`Properties`),icon:(0,L.jsx)(ni,{size:16}),shortcut:Ht(r.properties),onSelect:()=>void Tt(e.paths)})}if(ee.loading)N.push({label:C(`More actions`),icon:(0,L.jsx)(yi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(ee.verbs.length>0){let e={items:[],children:new Map};for(let t of ee.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,L.jsx)(qa,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Nt(re,ee.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];N.push({label:C(ee.safe?`More actions`:`More actions (extensions)`),icon:(0,L.jsx)(yi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,L.jsx)(Pa,{items:N,onClose:a,quick:P,x:e.x,y:e.y})}function qa({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,L.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,L.jsx)(ei,{size:14});case`document`:return(0,L.jsx)(Ti,{size:14});case`cut`:return(0,L.jsx)(Ki,{size:14});case`copy`:return(0,L.jsx)(Gi,{size:14});case`paste`:return(0,L.jsx)(qi,{size:14});case`trash`:return(0,L.jsx)(ci,{size:14});case`pencil`:return(0,L.jsx)(Di,{size:14});case`gear`:return(0,L.jsx)(ni,{size:14});case`star`:return(0,L.jsx)(Pi,{size:14});case`pin`:return(0,L.jsx)(ri,{size:14});case`executable`:return(0,L.jsx)(yi,{size:14});case`share`:return(0,L.jsx)(Ji,{size:14});case`arrow`:return(0,L.jsx)(ei,{size:14});default:return(0,L.jsx)(di,{size:14})}}function Ja(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function Ya({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let[c,l]=(0,O.useState)(null),u=(0,O.useRef)(null),d=t.find(t=>t.value===e)??t[0];return(0,O.useEffect)(()=>{if(!c)return;let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&u.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[c]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Xa,{$icon:a!==void 0,"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(c){l(null);return}let e=u.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;l({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:u,style:i&&!a?{width:i}:void 0,title:o??d?.title,type:`button`,children:[a===void 0?(0,L.jsx)(Za,{children:d?.label??``}):(0,L.jsx)(Qa,{children:a}),a===void 0&&(0,L.jsx)($a,{children:(0,L.jsx)(ti,{size:11})})]}),c&&(0,_a.createPortal)((0,L.jsx)(eo,{"aria-label":`options`,"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:c.bottom,left:c.left,minWidth:c.width,top:c.top},children:t.map(t=>(0,L.jsxs)(to,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),l(null)},role:`option`,title:t.title,type:`button`,children:[(0,L.jsx)(no,{children:t.label}),t.value===e&&(0,L.jsx)(li,{size:11})]},t.value))}),document.body)]})}var Xa=i.button`
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
`,Za=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qa=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,$a=i.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,eo=i.div`
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
    ${Oa}
`,to=i.button`
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
`,no=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ro=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],io=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],ao=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],oo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],so=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function co({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=B(),a=(0,O.useRef)(null),[o,s]=(0,O.useState)(e),[c,l]=(0,O.useState)(t),[u,d]=(0,O.useState)(`zip`),[f,p]=(0,O.useState)(`5`),[m,h]=(0,O.useState)(`default`),[g,_]=(0,O.useState)(`none`),[v,y]=(0,O.useState)(``),[b,x]=(0,O.useState)(`0`),[S,C]=(0,O.useState)(!1);(0,O.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let w=ro.find(e=>e.value===u)??ro[0],T=u===`zip`||u===`zipx`,ee=g!==`none`,E=T||u===`7z`,D=u===`zip`||u===`7z`,te=async()=>{if(S||!c.trim()||!o||ee&&v.length===0)return;C(!0);let e=await r({directory:o,name:c.trim(),format:u,level:w.level?Number(f):0,method:T?m:null,encryption:E?g:`none`,password:ee?v:void 0,splitSize:D?Number(b):0});C(!1),e&&n()};return(0,_a.createPortal)((0,L.jsx)(lo,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,L.jsxs)(uo,{"aria-modal":`true`,role:`dialog`,children:[(0,L.jsx)(fo,{children:i(`Compress to…`)}),(0,L.jsxs)(po,{children:[(0,L.jsx)(mo,{children:i(`Archive name`)}),(0,L.jsx)(ho,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&te()}}),(0,L.jsx)(go,{children:w.extension})]}),(0,L.jsxs)(po,{children:[(0,L.jsx)(mo,{children:i(`Format`)}),(0,L.jsx)(Ya,{onChange:e=>d(e),options:ro.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,L.jsxs)(po,{children:[(0,L.jsx)(mo,{children:i(`Method`)}),(0,L.jsx)(Ya,{disabled:!T,onChange:h,options:io.map(e=>({...e,label:i(e.label)})),value:T?m:`default`,width:236,zIndex:3700})]}),(0,L.jsxs)(po,{children:[(0,L.jsx)(mo,{children:i(`Encryption`)}),(0,L.jsx)(Ya,{disabled:!E,onChange:e=>{_(e),e===`none`&&y(``)},options:ao.map(e=>({...e,label:i(e.label)})),value:E?g:`none`,width:236,zIndex:3700})]}),ee&&(0,L.jsxs)(po,{children:[(0,L.jsx)(mo,{children:i(`Password`)}),(0,L.jsx)(ho,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,L.jsxs)(po,{children:[(0,L.jsx)(mo,{children:i(`Split volumes`)}),(0,L.jsx)(Ya,{disabled:!D,onChange:x,options:oo.map(e=>({...e,label:i(e.label)})),value:D?b:`0`,width:236,zIndex:3700})]}),(0,L.jsxs)(po,{children:[(0,L.jsx)(mo,{children:i(`Compression level`)}),(0,L.jsx)(Ya,{disabled:!w.level,onChange:p,options:so.map(e=>({...e,label:i(e.label)})),value:w.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,L.jsxs)(po,{$stack:!0,children:[(0,L.jsx)(mo,{children:i(`Destination`)}),(0,L.jsxs)(_o,{children:[(0,L.jsx)(vo,{title:o,children:o}),(0,L.jsx)(bo,{disabled:S,onClick:()=>void ea(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,L.jsxs)(yo,{children:[(0,L.jsx)(bo,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,L.jsx)(xo,{disabled:S||!c.trim()||ee&&v.length===0,onClick:()=>void te(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var lo=i.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ma}
`,uo=i.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Da}
`,fo=i.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,po=i.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,mo=i.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,ho=i.input`
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
`,go=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,_o=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,vo=i.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yo=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,bo=i.button`
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
`,xo=i(bo)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function So({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=B(),c=(0,O.useRef)(null);return(0,O.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,_a.createPortal)((0,L.jsx)(Co,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,L.jsxs)(wo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsx)(To,{children:t}),(0,L.jsx)(Eo,{children:n}),(0,L.jsxs)(Do,{children:[(0,L.jsx)(Oo,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,L.jsx)(Oo,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Co=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ma}
`,wo=i.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Da}
`,To=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Eo=i.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Do=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Oo=i.button`
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
`,ko=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Ao=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),jo=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Mo=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function No({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=B(),[l,u]=(0,O.useState)(!1),[d,f]=(0,O.useState)(!1),[p,m]=(0,O.useState)(!1),[h,g]=(0,O.useState)(0),[_,v]=(0,O.useState)(0),[y,b]=(0,O.useState)(null),[x,S]=(0,O.useState)(!1),[C,w]=(0,O.useState)(!1),T=(0,O.useRef)(null),ee=(0,O.useRef)(null),E=(0,O.useRef)(null),[D,te]=(0,O.useState)(()=>{let e=Nn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),k=e?.path??null,A=an(k),j=e?Po(e.name):``,ne=!!e&&!e.isDirectory&&ko.has(j),M=!!e&&!e.isDirectory&&Ao.has(j),re=!!e&&!e.isDirectory&&jo.has(j),N=!!e&&!e.isDirectory&&Mo.has(j),P=!!e&&!e.isDirectory&&j===`pdf`,ie=un(ne?A:null,512,e?.modified??0),F=dn(re?A:null,e?.modified??0,j),ae=dn(ne||M?A:null,e?.modified??0,j),I=fn(P?A:null,e?.modified??0),oe=rn(!ne&&!M&&!re&&!N&&!P?A:null,e?.isDirectory??!1);if((0,O.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),w(!1)},[k]),(0,O.useEffect)(()=>{if(!A||!N){b(null),S(!1);return}let e=!0;return S(!0),b(null),W(A).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:`Could not read this file.`}),S(!1))}),()=>{e=!1}},[A,N]),!e&&!s)return null;let se=e=>{ee.current={x:e.clientX,width:t},e.currentTarget.setPointerCapture(e.pointerId)},R=e=>{let t=ee.current;t&&n(Math.max(220,Math.min(560,t.width+t.x-e.clientX)))},z=e=>{ee.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},ce=e=>{E.current={y:e.clientY,height:D},e.currentTarget.setPointerCapture(e.pointerId)},le=e=>{let t=E.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));te(n),Pn(`yafm.preview.media.height`,n)},V=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,L.jsxs)(Io,{children:[r&&(0,L.jsx)(Lo,{onPointerDown:se,onPointerMove:R,onPointerUp:z,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,L.jsx)(Ro,{style:{width:r?t:0},children:(0,L.jsxs)(zo,{children:[(0,L.jsx)(Kr,{size:56}),(0,L.jsx)(`span`,{children:s})]})})]});let ue=()=>{let e=T.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,L.jsxs)(Io,{children:[r&&(0,L.jsx)(Lo,{onPointerDown:se,onPointerMove:R,onPointerUp:z,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,L.jsxs)(Ro,{style:{width:r?t:0},children:[(0,L.jsx)(Bo,{style:{height:D},children:ne&&ae&&!l?(0,L.jsxs)(Ho,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,L.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:ue,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:ie??void 0,preload:`metadata`,ref:T,src:ae}),!d&&(0,L.jsx)(Uo,{onClick:ue,title:c(`Play`),type:`button`,children:(0,L.jsx)(Yi,{size:28})}),p&&(0,L.jsxs)(Wo,{onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(Go,{children:[(0,L.jsx)(`span`,{children:Fo(_)}),(0,L.jsx)(`span`,{children:Fo(h)})]}),(0,L.jsx)(Ko,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=T.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):M&&ae?(0,L.jsx)(`audio`,{controls:!0,src:ae}):re&&F?(0,L.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:F}):P&&I&&!C?(0,L.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:I}):P?(0,L.jsx)(qr,{size:64}):N?(0,L.jsx)(qo,{children:x||!y?(0,L.jsx)(Yo,{children:c(`Loading…`)}):y.error?(0,L.jsx)(Yo,{children:y.error}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Jo,{children:y.text}),y.truncated&&(0,L.jsx)(Yo,{children:c(`Showing the first 256 KB.`)})]})}):ne&&ie?(0,L.jsx)(`img`,{alt:``,src:ie}):oe?(0,L.jsx)(`img`,{alt:``,src:oe}):e.isDirectory?(0,L.jsx)(Kr,{size:64}):(0,L.jsx)(qr,{size:64})}),(0,L.jsx)(Vo,{onDoubleClick:()=>{te(210),Pn(`yafm.preview.media.height`,210)},onPointerDown:ce,onPointerMove:le,onPointerUp:V,title:c(`Drag to resize; double-click to reset`)}),(0,L.jsxs)(Xo,{children:[(0,L.jsx)(Zo,{title:e.path,children:e.name}),o&&(0,L.jsx)(Qo,{children:o}),(0,L.jsx)($o,{children:e.fields.map(e=>(0,L.jsxs)(es,{children:[(0,L.jsx)(ts,{children:e.label}),(0,L.jsx)(ns,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Po(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Fo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Io=i.div`
    display: flex;
    flex-shrink: 0;
    align-self: stretch;
    min-height: 0;
`,Lo=i.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Ro=i.aside`
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
    background: var(--bg-secondary);
    font-family: var(--font-details), var(--font-cjk);
    transition: width 180ms cubic-bezier(0.22, 1, 0.36, 1);
`,zo=i.div`
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
`,Bo=i.div`
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
`,Vo=i.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Ho=i.div`
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
`,Uo=i.button`
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

    svg {
        margin-left: 3px;
        fill: currentColor;
        stroke: currentColor;
    }

    &:hover {
        border-color: var(--border-color-focus);
        background: rgba(var(--bg-rgb), 0.86);
    }
`,Wo=i.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 24px 10px 8px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
`,Go=i.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Ko=i.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,qo=i.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: var(--bg-secondary);
`,Jo=i.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Yo=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Xo=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Zo=i.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Qo=i.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,$o=i.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,es=i.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,ts=i.span`
    color: var(--text-muted);
`,ns=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,rs=[`quick`,`frequent`,`recent`,`home`,`drives`],is=[...rs,`share`],as={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`},os={folder:e=>(0,L.jsx)(Kr,{size:e}),home:e=>(0,L.jsx)(Gr,{size:e}),desktop:e=>(0,L.jsx)(Oi,{size:e}),documents:e=>(0,L.jsx)(ki,{size:e}),downloads:e=>(0,L.jsx)(Ai,{size:e}),pictures:e=>(0,L.jsx)(ji,{size:e}),music:e=>(0,L.jsx)(Mi,{size:e}),videos:e=>(0,L.jsx)(Ni,{size:e}),drive:e=>(0,L.jsx)(Jr,{size:e}),image:e=>(0,L.jsx)(mi,{size:e}),video:e=>(0,L.jsx)(hi,{size:e}),audio:e=>(0,L.jsx)(gi,{size:e}),text:e=>(0,L.jsx)(fi,{size:e}),code:e=>(0,L.jsx)(pi,{size:e}),clock:e=>(0,L.jsx)(oi,{size:e}),star:e=>(0,L.jsx)(Pi,{size:e}),file:e=>(0,L.jsx)(qr,{size:e}),archive:e=>(0,L.jsx)(_i,{size:e}),pdf:e=>(0,L.jsx)(vi,{size:e}),executable:e=>(0,L.jsx)(yi,{size:e}),font:e=>(0,L.jsx)(bi,{size:e}),database:e=>(0,L.jsx)(xi,{size:e}),config:e=>(0,L.jsx)(Si,{size:e}),spreadsheet:e=>(0,L.jsx)(Ci,{size:e}),presentation:e=>(0,L.jsx)(wi,{size:e}),document:e=>(0,L.jsx)(Ti,{size:e}),app:e=>(0,L.jsx)(di,{size:e}),gear:e=>(0,L.jsx)(ni,{size:e}),pin:e=>(0,L.jsx)(ri,{size:e}),trash:e=>(0,L.jsx)(ci,{size:e}),overview:e=>(0,L.jsx)(Ei,{size:e}),book:e=>(0,L.jsx)(Fi,{size:e}),briefcase:e=>(0,L.jsx)(Ii,{size:e}),cloud:e=>(0,L.jsx)(Li,{size:e}),gamepad:e=>(0,L.jsx)(Ri,{size:e}),camera:e=>(0,L.jsx)(zi,{size:e}),terminal:e=>(0,L.jsx)(Bi,{size:e}),server:e=>(0,L.jsx)(Vi,{size:e}),package:e=>(0,L.jsx)(Hi,{size:e}),globe:e=>(0,L.jsx)(Ui,{size:e}),heart:e=>(0,L.jsx)(Wi,{size:e}),share:e=>(0,L.jsx)(Vi,{size:e})};function ss(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function cs(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??rs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||is.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=ss(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${as[n]??n}${ls(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function ls(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function us({panel:e,size:t=16}){let n=on(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,L.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?os[e.icon]:void 0;if(r)return(0,L.jsx)(L.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,L.jsx)(Kr,{size:t});case`recent`:return(0,L.jsx)(oi,{size:t});case`frequent`:return(0,L.jsx)(Pi,{size:t});case`drives`:return(0,L.jsx)(Jr,{size:t});case`home`:return(0,L.jsx)(Gr,{size:t});case`share`:return(0,L.jsx)(Vi,{size:t});default:return(0,L.jsx)(Kr,{size:t})}}function ds({place:e,size:t=18}){let n=on(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,L.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&os[e.icon]?(0,L.jsx)(L.Fragment,{children:os[e.icon](t)}):(0,L.jsx)(Kr,{size:t})}var fs=`#64748b`;function ps(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function ms({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=B(),[c,l]=(0,O.useState)(``),[u,d]=(0,O.useState)(`#2dd4bf`),f=(0,O.useRef)(null);(0,O.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,_a.createPortal)((0,L.jsxs)(hs,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,L.jsxs)(gs,{children:[(0,L.jsx)(`span`,{children:s(`Tags`)}),(0,L.jsx)(_s,{onClick:o,title:s(`Close`),type:`button`,children:(0,L.jsx)(ui,{size:11})})]}),(0,L.jsxs)(vs,{children:[p.length===0&&(0,L.jsx)(Ss,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,L.jsxs)(ys,{children:[(0,L.jsx)(bs,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,L.jsxs)(xs,{$color:t,$ink:ps(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,L.jsx)(li,{size:11}),(0,L.jsx)(`span`,{children:e})]})]},e)})]}),(0,L.jsxs)(Cs,{children:[(0,L.jsx)(bs,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,L.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,L.jsx)(ws,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var hs=i.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${Da}
`,gs=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,_s=i.button`
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
`,vs=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,ys=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,bs=i.input`
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
`,xs=i.button`
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
`,Ss=i.span`
    font-size: 11px;
    color: var(--text-muted);
`,Cs=i.div`
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
`,ws=i.button`
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
`,Ts={file:qr,folder:Kr,text:fi,code:pi,image:mi,video:hi,audio:gi,archive:_i,pdf:vi,executable:yi,font:bi,database:xi,config:Si,spreadsheet:Ci,presentation:wi,document:Ti},Es={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Ds(e){let t=e.lastIndexOf(`.`);return t>0?Es[e.slice(t).toLowerCase()]??`file`:`file`}function Os({name:e,size:t}){let n=Ts[e??`file`]??qr;return(0,L.jsx)(n,{size:t})}function ks({path:e,name:t,isDirectory:n,size:r=18}){let i=rn(e,n);return i?(0,L.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,L.jsx)(Kr,{size:r}):(0,L.jsx)(Os,{name:Ds(t),size:r})}var As=`application/x-yafm-paths`,js=[As,`text/uri-list`];function Ms(e){return e?.types.some(e=>js.includes(e.toLowerCase()))??!1}function Ns(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(As);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Fs).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Ps=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Fs(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Ps?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Is(e,t,n=!0){e.dataTransfer.setData(As,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Ls({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=B(),[m,h]=(0,O.useState)(()=>new Set),[g,_]=(0,O.useState)(!1),v=(0,O.useRef)(null),y=(0,O.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,O.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,O.useRef)(null);if((0,O.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Ms(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Ns(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),C=S.size>0&&[...S].every(e=>m.has(e)),w=S.size,T=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},ee=()=>{h(C?new Set:S)},E=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},te=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},k=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},A=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},j=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},ne=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},M=(e,t)=>{let n=m.has(e.path);return(0,L.jsxs)(Ys,{$checked:n,draggable:!0,onClick:()=>T(e.path),onDragStart:r=>{Is(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,L.jsx)(Xs,{$checked:n,onClick:t=>{t.stopPropagation(),T(e.path)},type:`button`,children:n&&(0,L.jsx)(li,{size:8})}),(0,L.jsx)(ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,L.jsxs)(Zs,{children:[(0,L.jsx)(Qs,{children:e.name}),(0,L.jsx)($s,{children:D(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},re=e=>{Ms(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,L.jsxs)(Rs,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:re,onDragOver:re,onDrop:e=>{let{paths:t}=Ns(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,L.jsxs)(zs,{onPointerDown:E,onPointerMove:te,onPointerUp:k,children:[(0,L.jsxs)(Bs,{children:[(0,L.jsx)(Hi,{size:13}),p(`Tray`),(0,L.jsx)(Vs,{children:w})]}),(0,L.jsxs)(Hs,{onPointerDown:e=>e.stopPropagation(),children:[(0,L.jsx)(Us,{onClick:ee,title:p(C?`Select none`:`Select all`),type:`button`,children:p(C?`None`:`All`)}),(0,L.jsx)(Us,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,L.jsx)(Ws,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,L.jsx)(ui,{size:10})})]})]}),(0,L.jsxs)(Gs,{children:[(0,L.jsxs)(qs,{children:[p(`In this app`),(0,L.jsx)(Vs,{children:e.length})]}),e.length===0&&(0,L.jsx)(Ks,{children:p(`Drag files or folders here`)}),e.map(e=>M(e,!0)),t.length>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(qs,{$clipboard:!0,children:[p(`Clipboard`),(0,L.jsx)(Vs,{children:t.length}),n&&(0,L.jsx)(Js,{children:p(`cut`)})]}),t.map(e=>M(e,n))]})]}),(0,L.jsxs)(ec,{children:[(0,L.jsx)(tc,{$plain:!0,disabled:y.length===0,onClick:j,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,L.jsx)(tc,{disabled:m.size===0||!a,onClick:ne,type:`button`,children:p(`Move here`)}),(0,L.jsx)(tc,{$danger:!0,disabled:y.length===0,onClick:A,type:`button`,children:p(`Remove`)})]})]})}var Rs=i.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${va}
    ${Da}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,zs=i.div`
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
`,Bs=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,Vs=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Hs=i.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Us=i.button`
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
`,Ws=i.button`
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
`,Gs=i.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Ks=i.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,qs=i.div`
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
`,Js=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Ys=i.div`
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
`,Xs=i.button`
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
`,Zs=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Qs=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$s=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ec=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,tc=i.button`
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
`,nc=new Map,rc=new Set,ic=0;function ac(){ic+=1;for(let e of rc)e()}function oc(e,t){t?nc.set(e,t):nc.delete(e),ac()}function sc(e){return nc.has(e)}function cc(e,t,n){nc.get(e)?.(t,n)}function lc(e){return rc.add(e),()=>rc.delete(e)}function uc(){return ic}function dc(e){return(0,O.useSyncExternalStore)(lc,uc,uc),{available:sc(e),open:(t,n)=>cc(e,t,n)}}function fc(e){return[...nc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function pc(e){return(0,O.useSyncExternalStore)(lc,uc,uc),{available:fc(e).length>0,open:(t,n)=>{let r=fc(e).at(-1);r&&cc(r,t,n)}}}var mc=60,hc=300,gc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],_c=190,vc=120;function yc({listing:e,loading:t,error:n,find:r=mn,view:i,showImages:o,imageStripHeight:s=_c,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:f,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=Lt,enableShortcuts:y=!0,refreshToken:b=0,onRefresh:x,onClipboardChanged:S,onTransfer:C,onAddToTray:w,onPaste:T,confirmDelete:ee=!1,previewVideoAudio:E=!1,previewVideoAutoplay:D=!1,showDetails:te=!0,onPreviewInfo:k,onActivate:A,groupOf:j,onGridScroll:ne,gridFooter:M,allowBackgroundMenu:re=!0,readOnly:N=!1,onSelectionChange:P,onSelectionCountChange:ie,selectionMenuRequest:F,selectionMenuId:ae,singleSelect:I=!1,pendingRename:oe=null,pendingRenameToken:se=0}){let R=B(),z=An(),ce=(0,O.useRef)(null),le=(0,O.useRef)(null),V=(0,O.useRef)(null),[ue,de]=(0,O.useState)(hc),[H,fe]=(0,O.useState)({top:0,height:640}),pe=(0,O.useRef)(null),me=(0,O.useRef)(null),[he,ge]=(0,O.useState)(null),[_e,ve]=(0,O.useState)(s),[U,ye]=(0,O.useState)(()=>new Set),be=(0,O.useRef)(U),xe=(0,O.useRef)([]);be.current=U,(0,O.useEffect)(()=>P?.([...U]),[U,P]),(0,O.useEffect)(()=>ie?.(U.size),[U,ie]),(0,O.useEffect)(()=>{let e=F;if(!e||e.token===Ce.current)return;Ce.current=e.token;let t=[...be.current];t.length!==0&&(Se({x:e.x,y:e.y,paths:t,background:!1}),pt().then(Le,()=>Le(!1)))},[F]);let[W,Se]=(0,O.useState)(null),Ce=(0,O.useRef)(0),[we,Te]=(0,O.useState)(null),[Ee,De]=(0,O.useState)(null),[Oe,ke]=(0,O.useState)(null),Ae=(0,O.useRef)(Oe);Ae.current=Oe;let je=(0,O.useRef)(0),Me=(0,O.useRef)(A);Me.current=A;let[Ne,Pe]=(0,O.useState)(()=>{let e=Nn(`yafm.preview.width`,320);return e>=220?e:320}),Fe=(0,O.useCallback)(e=>{Pe(e),Pn(`yafm.preview.width`,e)},[]),[Ie,Le]=(0,O.useState)(!1),Re=(0,O.useCallback)((e,t)=>{let n=[...be.current];n.length!==0&&(Se({x:e,y:t,paths:n,background:!1}),pt().then(Le,()=>Le(!1)))},[]);(0,O.useEffect)(()=>{if(ae)return oc(ae,U.size>0?Re:null),()=>oc(ae,null)},[ae,U,Re]),(0,O.useEffect)(()=>{ye(new Set),ke(null),Se(null),me.current=null},[e?.path]),(0,O.useEffect)(()=>{ve(s)},[s]),(0,O.useEffect)(()=>{ye(new Set),ke(null),me.current=null},[b]);let ze=e=>{pe.current={y:e.clientY,height:_e},e.currentTarget.setPointerCapture(e.pointerId)},Be=e=>{let t=pe.current;if(!t)return;let n=Math.max(vc,Math.round(window.innerHeight*.7));ve(Math.min(n,Math.max(vc,t.height+t.y-e.clientY)))},Ve=e=>{pe.current&&(pe.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(_e))},He=()=>{ve(_c),c?.(_c)},Ue=r.query.length>0,We=(0,O.useMemo)(()=>gc.filter(e=>i.columns?.includes(e.id)),[i.columns]),Ge=i.columns?.includes(`linkTarget`)??!1,Ke=(0,O.useMemo)(()=>`minmax(160px, 1fr) ${We.map(e=>`${e.width}px`).join(` `)}`.trim(),[We]),G=(0,O.useMemo)(()=>e?Sc(e.entries.map(t=>{let n=t.isDirectory?jn(z,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:Ue?hn(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!Ue||r.mode===`dim`||e.ranges!==null),i,e,R):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Ue,r,z,i.sort,i.sortDescending,R]);xe.current=G;let qe=Math.max(40,i.iconSize+20),Je=Math.max(0,Math.floor(H.top/qe)-4),Ye=Math.min(G.length,Je+Math.ceil(H.height/qe)+10),Xe=(0,O.useMemo)(()=>G.slice(Je,Ye),[G,Je,Ye]);(0,O.useEffect)(()=>{let e=V.current;if(!e||i.mode!==`list`)return;let t=()=>fe(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,O.useEffect)(()=>{fe(e=>({...e,top:0})),V.current&&(V.current.scrollTop=0)},[e?.path]),(0,O.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=G.findIndex(e=>e.entry.fullPath===r.currentPath),t=V.current;if(e<0||!t)return;let n=e*qe;(n<t.scrollTop||n+qe>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ce.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,G,qe]);let Ze=(0,O.useMemo)(()=>G.slice(0,ue),[G,ue]);(0,O.useEffect)(()=>{de(hc)},[e?.path]),(0,O.useEffect)(()=>{if(!r.currentPath)return;let e=G.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&de(t=>Math.max(t,e+hc))},[r.currentPath,G]);let Qe=(0,O.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&de(e=>Math.min(G.length,e+hc))},[G.length]),$e=i.mode===`grid`,et=(0,O.useMemo)(()=>{if(!$e)return[];if(!j)return Tc(Ze,wc);let e=[],t=new Map;for(let n of Ze){let r=j(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[Ze,$e,j]),tt=(0,O.useMemo)(()=>o?G.filter(e=>!e.entry.isDirectory&&En(e.entry.name)):[],[G,o]),nt=tt.length,rt=(0,O.useMemo)(()=>tt.slice(0,mc),[tt]),it=(0,O.useMemo)(()=>o?Tc(rt,Cc):[],[rt,o]),at=(0,O.useMemo)(()=>G.map(e=>e.entry.fullPath),[G]),ot=G.length>0&&U.size>=G.length,st=U.size>0&&!ot,ct=()=>{I||(ot?mt():ye(new Set(at)))},lt=e?.path??``,ut=(0,O.useCallback)((e,t)=>{if(I){me.current=t,ye(new Set([t]));return}let n=e.ctrlKey||e.metaKey;ye(r=>{if(e.shiftKey&&me.current!==null){let e=at.indexOf(me.current),i=at.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(at[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),me.current=t,e}return me.current=t,new Set([t])})},[at,I]),dt=(0,O.useCallback)(e=>{I?(me.current=e,ye(new Set([e]))):(me.current=e,ye(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[I]),mt=(0,O.useCallback)(()=>{me.current=null,ye(new Set)},[]);(0,O.useEffect)(()=>{if(se===0||!oe||je.current===se||!e?.entries.some(e=>e.fullPath===oe))return;je.current=se,me.current=oe,ye(new Set([oe])),ke({path:oe,value:_(oe)});let t=G.findIndex(e=>e.entry.fullPath===oe),n=V.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*qe;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(oe)}"]`)?.scrollIntoView({block:`nearest`})})}},[V,e,oe,se,qe,G,i.mode]),(0,O.useEffect)(()=>{if(!Oe)return;let e=G.findIndex(e=>e.entry.fullPath===Oe.path),t=V.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*qe;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Oe.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[V,Oe,qe,G,i.mode]);let ht=(0,O.useCallback)(()=>Se(null),[]),gt=(0,O.useCallback)((e,t)=>{e.isDirectory?f(e.fullPath,Bt(t)):p?.(e.fullPath,Bt(t))},[f,p]),xt=(0,O.useCallback)((e,t,n)=>{ge({entry:e,x:t,y:n})},[]),St=(0,O.useRef)(null),Ct=(0,O.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Is(e,U.has(n)?[...U]:[n])},[U]),Et=(0,O.useCallback)(e=>{if(!Ms(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);St.current=t?.dataset.directory===`true`?t.dataset.path??lt:lt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[lt]),Ot=(0,O.useCallback)(e=>{if(N)return;let{paths:t,move:n}=Ns(e),r=St.current??lt;St.current=null,t.length!==0&&C&&(e.preventDefault(),C(t,r,!e.ctrlKey&&n))},[lt,C,N]),kt=(0,O.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),N||!t&&!re)return;let n=be.current;t&&!n.has(t)&&ye(new Set([t])),t&&(me.current=t);let r=t?n.has(t)?[...n]:[t]:[];Se({x:e.clientX,y:e.clientY,paths:r,background:!t}),pt().then(Le,()=>Le(!1))},[re,lt]),At=(0,O.useCallback)(()=>x?.(),[x]),jt=(e,t)=>{me.current=e,ye(new Set([e])),t&&ke({path:e,value:_(e)}),At()},Mt=we&&(0,L.jsx)(co,{initialDirectory:lt,initialName:we.name,onCancel:()=>Te(null),onCompress:async e=>{let t=await Pt(we.paths,e);return!t.ok||!t.path?(aa(t.error??R(`Could not create the archive.`)),!1):(jt(t.path,!1),!0)}}),K=async(e,t=!1)=>{await ft(e,t)&&(Le(!0),S?.())},Nt=async e=>{e&&(await _t(e)?(At(),T?.()):aa(R(`Nothing on the clipboard could be pasted here.`)))},Ft=async(e,t=!1)=>{if(!lt)return;let n=e===null?await bt(lt,t):await wt(lt,e);!n.ok||n.path===null?aa(n.error??R(`Could not create the item.`)):(me.current=n.path,ye(new Set([n.path])),ke({path:n.path,value:_(n.path)}),At())},It=e=>{ye(new Set([e.fullPath])),me.current=e.fullPath,ke({path:e.fullPath,value:e.name})},Rt=(0,O.useCallback)(e=>ke(t=>t&&{...t,value:e}),[]),zt=(0,O.useCallback)(()=>ke(null),[]),Ht=(0,O.useCallback)(async()=>{let e=Ae.current;if(ke(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=xe.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await yt(e.path,t);r.ok?(mt(),At()):aa(r.error??R(`Could not rename the entry.`))},[mt,At,R]),Ut=async(e,t=!1)=>{if((t||ee)&&!await Gt(e,t))return;let n=await vt(e,t);if(!n.ok&&n.needsPermanent){if(!await Gt(e,!0))return;n=await vt(e,!0)}if(n.ok)mt(),At();else{if(n.cancelled)return;aa(n.error??R(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},Gt=(0,O.useCallback)((e,t)=>new Promise(n=>De({paths:e,permanent:t,resolve:n})),[]),Kt=(0,O.useCallback)(e=>{De(t=>(t?.resolve(e),null))},[]);(0,O.useEffect)(()=>{if(!y||W)return;let e=e=>{if(Wt(e.target))return;Me.current?.();let t=Vt(e),n=[...U],r=n.length===1?G.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(at.length===0)return;e.preventDefault();let n=me.current&&at.includes(me.current)?me.current:U.size===1?[...U][0]:null,r=n?at.indexOf(n):-1,i=t===`home`?0:t===`end`?at.length-1:Math.max(0,Math.min(at.length-1,r+(t===`arrowdown`?1:-1))),a=at[i];ye(new Set([a])),me.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&K(n)}):t===g.cut?i(()=>{n.length>0&&K(n,!0)}):t===g.paste?i(()=>void Nt(lt)):t===g.delete?i(()=>{n.length>0&&Ut(n)}):t===g.deletePermanently?i(()=>{n.length>0&&Ut(n,!0)}):t===g.selectAll?i(()=>{ye(new Set(at)),me.current=at[0]??null}):t===g.invertSelection?i(()=>{ye(new Set(at.filter(e=>!U.has(e)))),me.current=at[0]??null}):t===g.rename&&r?i(()=>void It(r)):t===g.open&&r?i(()=>{r.isDirectory?f(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void Ft(null)):t===g.terminal?i(()=>void Dt(lt)):t===g.properties?i(()=>void Tt(n.length>0?n:lt?[lt]:[])):t===g.refresh&&i(At)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[at,K,Ft,lt,y,W,f,p,Nt,At,Ut,It,G,U,g]);let qt=Ee&&(0,L.jsx)(So,{confirmLabel:Ee.permanent?R(`Delete`):R(`Move`),danger:Ee.permanent,message:Ee.permanent?R(`Permanently delete {target}? This cannot be undone.`,{target:Ee.paths.length===1?R(`this item`):R(`{count} items`,{count:Ee.paths.length})}):R(`Move {target} to the recycle bin?`,{target:Ee.paths.length===1?R(`this item`):R(`{count} items`,{count:Ee.paths.length})}),onCancel:()=>Kt(!1),onConfirm:()=>Kt(!0),open:!0,title:Ee.permanent?R(`Delete permanently`):R(`Move to the recycle bin`)}),Jt=(0,O.useMemo)(()=>{if(!e||U.size===0)return null;let t=at.find(e=>U.has(e));return t?G.find(e=>e.entry.fullPath===t)?.entry??null:null},[at,e,G,U]),Yt=(0,O.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:_(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:R(`Type`),value:R(`Folder`)},{label:R(`Location`),value:e.parent??`—`},{label:R(`Path`),value:e.path},{label:R(`Size`),value:d(t)},{label:R(`Items`),value:a(R,n,`1 item`,`{count} items`)},{label:R(`Modified`),value:`—`},{label:R(`Created`),value:`—`},{label:R(`Attributes`),value:`—`}]}},[e,R]),Xt=(0,O.useMemo)(()=>{if(!Jt||!e)return null;let t=Jt.isDirectory?e.folderSizes[Jt.name]:void 0,n=e.tags[Jt.name]??[],r=Jt.name.lastIndexOf(`.`),i=r>0&&r<Jt.name.length-1?Jt.name.slice(r+1).toUpperCase():`—`;return{name:Jt.name,path:Jt.fullPath,isDirectory:Jt.isDirectory,size:Jt.size,modified:Jt.modified,created:Jt.created,fields:[{label:R(`Type`),value:Oc(Jt,R)},{label:R(`Extension`),value:Jt.isDirectory?`—`:i},{label:R(`Location`),value:e.path},{label:R(`Full path`),value:Jt.fullPath},{label:R(`Size`),value:Jt.isDirectory?t===void 0?`—`:d(t):d(Jt.size)},...Jt.isDirectory?[{label:R(`Items`),value:`${e.counts[Jt.name]??`—`}`}]:[],{label:R(`Modified`),value:v(Jt.modified)},{label:R(`Created`),value:v(Jt.created)},{label:R(`Link status`),value:Jt.linkTarget==null?Jt.linkCount>1?R(`Hard link`):`—`:Jt.linkValid?`OK`:R(`Broken`)},...Jt.linkTarget?[{label:R(`Target`),value:Jt.linkTarget}]:[],...Jt.linkCount>1?[{label:R(`Links`),value:String(Jt.linkCount)}]:[],{label:R(`Attributes`),value:[Jt.isHidden?R(`Hidden`):``,Jt.isSystem?R(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:R(`Tags`),value:n.join(`, `)}]:[]]}},[e,Jt,R]),Zt=W?.paths.length===1?W.paths[0]:null,Qt=Zt?G.find(e=>e.entry.fullPath===Zt)?.entry:void 0,q=Qt?{path:Qt.fullPath,isDirectory:Qt.isDirectory}:null,J=Xt??Yt,$t=(0,O.useRef)(k);$t.current=k,(0,O.useEffect)(()=>{$t.current?.(J)},[k,J]);let en=te&&J&&(0,L.jsx)(No,{info:J,onWidth:Fe,selectionNote:U.size>1?a(R,U.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:E,videoAutoplay:D,width:Ne});return n&&!e?(0,L.jsx)(Ol,{children:(0,L.jsx)(Al,{children:n})}):!e&&!t?(0,L.jsx)(Ol,{children:(0,L.jsx)(kl,{children:R(`Nothing selected.`)})}):i.mode===`grid`?(0,L.jsxs)(Kc,{onPointerDown:A,children:[(0,L.jsxs)(qc,{children:[(0,L.jsxs)(tl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||mt()},onContextMenu:e=>kt(e),onDragOver:Et,onDragStart:Ct,onDrop:Ot,onScroll:e=>{ne?.(e.currentTarget),Qe(e.currentTarget)},children:[m&&G.length>0&&(0,L.jsxs)(Uc,{children:[(0,L.jsx)(Vc,{$checked:!I&&ot,$partial:!I&&st,"aria-label":R(ot?`Select none`:`Select all`),disabled:I,onClick:ct,title:R(ot?`Select none`:`Select all`),type:`button`,children:ot?(0,L.jsx)(li,{size:10}):st?(0,L.jsx)(Hc,{}):null}),(0,L.jsx)(`span`,{children:R(ot?`Select none`:`Select all`)})]}),t&&!e?(0,L.jsx)(ol,{$size:i.gridSize,children:(0,L.jsx)(Pc,{size:i.gridSize})}):(0,L.jsx)(Ic,{counts:e?.counts,currentPath:Ue?r.currentPath:null,groups:et,gridSize:i.gridSize,innerRef:ce,onContextMenu:kt,onOpen:f,onOpenFile:p,onRenameCancel:zt,onRenameChange:Rt,onRenameCommit:Ht,onSelect:ut,onToggle:dt,openOnSingleClick:h,renaming:Oe,searching:Ue,selected:U,showCheckboxes:m,showTarget:Ge}),!t&&e&&G.length===0&&(0,L.jsx)(Dl,{children:(0,L.jsx)(kl,{children:n??(Ue&&r.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})}),M]}),W&&(0,L.jsx)(Ka,{canPaste:Ie,directory:lt,allowCompression:!0,menu:W,onAddToTray:w,onArchiveCreated:jt,onClose:ht,onCompressTo:(e,t)=>Te({paths:e,name:t}),onCopy:K,onCreateFile:e=>void Ft(e),onCreateFolder:e=>void Ft(null,e),onDelete:Ut,onOpen:f,onOpenFile:p,onPaste:Nt,onRefresh:At,onRename:e=>{let t=G.find(t=>t.entry.fullPath===e)?.entry;t&&It(t)},shortcuts:g,target:q}),Mt,qt]}),en]}):(0,L.jsxs)(Kc,{onPointerDown:A,children:[(0,L.jsxs)(qc,{children:[(0,L.jsxs)(Jc,{onScroll:e=>{V.current&&V.current.scrollLeft!==e.currentTarget.scrollLeft&&(V.current.scrollLeft=e.currentTarget.scrollLeft)},ref:le,style:{gridTemplateColumns:Ke},children:[(0,L.jsxs)(Bc,{children:[m&&(0,L.jsx)(Vc,{$checked:!I&&ot,$partial:!I&&st,"aria-label":R(ot?`Select none`:`Select all`),disabled:I,onClick:e=>{e.stopPropagation(),ct()},title:R(ot?`Select none`:`Select all`),type:`button`,children:ot?(0,L.jsx)(li,{size:10}):st?(0,L.jsx)(Hc,{}):null}),(0,L.jsxs)(Yc,{onClick:()=>l(`name`),type:`button`,children:[R(`Name`),bc(i,`name`)]})]}),We.map(e=>(0,L.jsxs)(Yc,{onClick:()=>l(e.id),type:`button`,children:[R(e.label),bc(i,e.id)]},e.id))]}),(0,L.jsxs)(Xc,{onClick:e=>{e.target===e.currentTarget&&mt()},onContextMenu:e=>kt(e),onDragOver:Et,onDragStart:Ct,onDrop:Ot,onScroll:e=>{le.current&&le.current.scrollLeft!==e.currentTarget.scrollLeft&&(le.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;fe(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:V,children:[t&&!e?(0,L.jsx)(Nc,{template:Ke,columns:We.length}):(0,L.jsxs)(L.Fragment,{children:[Je>0&&(0,L.jsx)(`div`,{style:{height:Je*qe}}),Xe.map(t=>{let n=t.entry.fullPath;return(0,L.jsx)(Rc,{current:Ue&&n===r.currentPath,dim:Ue&&t.ranges===null,height:qe,iconSize:i.iconSize,innerRef:ce,listing:e,onContextMenu:kt,onOpen:gt,onRenameCancel:zt,onRenameChange:Rt,onRenameCommit:Ht,onSelect:ut,onTagEdit:xt,onToggle:dt,openOnSingleClick:h,renaming:Oe?.path===n?{value:Oe.value}:null,row:t,selected:U.has(n),showCheckboxes:m,showTarget:Ge,template:Ke,visible:We},n)}),Ye<G.length&&(0,L.jsx)(`div`,{style:{height:(G.length-Ye)*qe}})]}),!t&&e&&G.length===0&&(0,L.jsx)(Ol,{children:(0,L.jsx)(kl,{children:n??(Ue&&r.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})})]}),o&&tt.length>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Zc,{onDoubleClick:He,onPointerDown:ze,onPointerMove:Be,onPointerUp:Ve,title:R(`Drag to resize; double-click to reset`)}),(0,L.jsxs)(Qc,{style:{height:_e},children:[(0,L.jsxs)($c,{children:[R(`Preview`),(0,L.jsx)(el,{children:nt>mc?`${rt.length} / ${nt}`:nt})]}),(0,L.jsx)(tl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||mt()},onContextMenu:e=>kt(e),children:(0,L.jsx)(Ic,{counts:e?.counts,currentPath:Ue?r.currentPath:null,groups:it,gridSize:i.gridSize,onContextMenu:kt,onOpen:f,onOpenFile:p,onSelect:ut,onToggle:dt,openOnSingleClick:h,searching:Ue,selected:U,showCheckboxes:m,showTarget:Ge})})]})]}),he&&e&&(0,L.jsx)(ms,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(he.entry.name,e,t),onClose:()=>ge(null),tags:e.tags[he.entry.name]??[],x:he.x,y:he.y}),W&&(0,L.jsx)(Ka,{canPaste:Ie,directory:lt,allowCompression:!0,menu:W,onAddToTray:w,onArchiveCreated:jt,onClose:ht,onCompressTo:(e,t)=>Te({paths:e,name:t}),onCopy:K,onCreateFile:e=>void Ft(e),onCreateFolder:e=>void Ft(null,e),onDelete:Ut,onOpen:f,onOpenFile:p,onPaste:Nt,onRefresh:At,onRename:e=>{let t=G.find(t=>t.entry.fullPath===e)?.entry;t&&It(t)},shortcuts:g,target:q}),Mt,qt]}),en]})}function bc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var xc=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Sc(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Oc(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:xc.compare(String(r),String(i));return t.sortDescending?-o:o})}var Cc=Cn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Tn(t.entry.name)===e})),wc=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Cc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Tc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Ec(e){return Math.max(24,Math.min(e-56,160))}var Dc={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Oc(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Dc[Ds(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function kc(e,t,n,r){switch(e){case`type`:return Oc(t,r);case`size`:return jc(t,n.folderSizes);case`modified`:return v(t.modified);case`created`:return v(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Ac({name:e,ranges:t}){if(!t||t.length===0)return(0,L.jsx)(L.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,L.jsx)(El,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,L.jsx)(L.Fragment,{children:n})}function jc(e,t){if(!e.isDirectory)return d(e.size);let n=t[e.name];return n===void 0?`—`:d(n)}function Mc({entry:e,size:t=18}){let n=(0,O.useRef)(null),[r,i]=(0,O.useState)(!1);(0,O.useEffect)(()=>{if(r)return;let e=n.current;if(!e)return;if(!(`IntersectionObserver`in window)){i(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(i(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[r]);let a=rn(r?e.fullPath:null,e.isDirectory,t>32),o=on(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,L.jsx)(zc,{$size:t,ref:n,children:e.iconSource?.startsWith(`icon:`)?(0,L.jsx)(Os,{name:e.iconSource.slice(5),size:t}):o?(0,L.jsx)(`img`,{alt:``,height:t,src:o,width:t}):a?(0,L.jsx)(`img`,{alt:``,height:t,src:a,width:t}):e.isDirectory?(0,L.jsx)(Kr,{size:t}):(0,L.jsx)(Os,{name:Ds(e.name),size:t})})}function Nc({template:e,columns:t}){return(0,L.jsx)(L.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,L.jsxs)(sl,{style:{gridTemplateColumns:e},children:[(0,L.jsxs)(ul,{children:[(0,L.jsx)(cl,{style:{flexShrink:0,height:18,width:18}}),(0,L.jsx)(cl,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,L.jsx)(cl,{style:{width:t%2==0?44:92}},t))]},r))})}function Pc({size:e}){return(0,L.jsx)(L.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,L.jsxs)(yl,{$dim:!1,$current:!1,$selected:!1,children:[(0,L.jsx)(bl,{children:(0,L.jsx)(cl,{style:{height:e,width:e}})}),(0,L.jsx)(Sl,{children:(0,L.jsx)(cl,{style:{height:9,width:`${t}%`}})})]},n))})}var Fc=(0,O.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=B(),x=An(),S=!e.entry.isDirectory&&En(e.entry.name),C=(0,O.useRef)(null),[w,T]=(0,O.useState)(!1);(0,O.useEffect)(()=>{if(!S||w)return;let e=C.current;if(!e)return;if(!(`IntersectionObserver`in window)){T(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(T(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,w]);let ee=un(S&&w?e.entry.fullPath:null,192,e.entry.modified),[E,D]=(0,O.useState)(!1),te=e.entry.fullPath,k=t=>{e.entry.isDirectory?v(te,Bt(t)):y?.(te,Bt(t))};return(0,L.jsxs)(yl,{$current:t,$dim:n,$selected:s,onClick:e=>{h(e,te),l&&k(e)},onContextMenu:e=>_(e,te),onDoubleClick:e=>{l||k(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":te,draggable:!u,children:[c&&(0,L.jsx)(Gc,{$checked:s,onClick:e=>{e.stopPropagation(),g(te)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,L.jsx)(li,{size:10})}),(0,L.jsx)(bl,{children:S&&ee&&!E?(0,L.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>D(!0),src:ee}):(0,L.jsx)(xl,{children:e.place&&x.useIcons?(0,L.jsx)(ds,{place:e.place,size:r}):(0,L.jsx)(Mc,{entry:e.entry,size:r})})}),(0,L.jsxs)(Sl,{children:[u?(0,L.jsx)(Lc,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:u.value}):(0,L.jsx)(Cl,{$broken:e.entry.linkValid===!1,children:(0,L.jsx)(Ac,{name:e.label,ranges:e.ranges})}),(0,L.jsx)(wl,{children:e.entry.isDirectory?i===void 0?Oc(e.entry,b):b(`{type} · {count} items`,{type:Oc(e.entry,b),count:i}):b(`{type} · {size}`,{type:Oc(e.entry,b),size:d(e.entry.size)})}),a&&e.entry.linkTarget&&(0,L.jsxs)(Tl,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]})]})});function Ic({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=B();return(0,L.jsx)(L.Fragment,{children:e.map(e=>(0,L.jsxs)(nl,{children:[(0,L.jsxs)(rl,{children:[y(e.label),(0,L.jsx)(il,{children:e.rows.length}),(0,L.jsx)(al,{})]}),(0,L.jsx)(ol,{$size:t,children:e.rows.map(e=>(0,L.jsx)(Fc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Ec(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Lc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,O.useRef)(null);return(0,O.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,L.jsx)(fl,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Rc=(0,O.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=B(),C=An(),w=e.entry.fullPath;return(0,L.jsxs)(ll,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,w),o&&_(e.entry,t)},onContextMenu:e=>g(e,w),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":w,draggable:!p,children:[(0,L.jsxs)(ul,{children:[i&&(0,L.jsx)(Wc,{$checked:r,onClick:e=>{e.stopPropagation(),h(w)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,L.jsx)(li,{size:10})}),e.place&&C.useIcons?(0,L.jsx)(zc,{children:(0,L.jsx)(ds,{place:e.place,size:s})}):(0,L.jsx)(Mc,{entry:e.entry,size:s}),p?(0,L.jsx)(Lc,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,L.jsx)(dl,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,L.jsx)(Ac,{name:e.label,ranges:e.ranges})}),a&&e.entry.linkTarget&&(0,L.jsxs)(pl,{title:e.entry.linkTarget,children:[`→ `,e.entry.linkTarget]})]}),u.map(t=>(0,L.jsx)(ml,{children:t.id===`tags`?(0,L.jsx)(hl,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,L.jsx)(gl,{$color:t,$ink:ps(t),children:e},e)}):(0,L.jsx)(_l,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,L.jsx)(vl,{children:S(`Broken`)}):kc(t.id,e.entry,d,S)},t.id))]})}),zc=i.span`
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
`,Bc=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Vc=i.button`
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
`,Hc=i.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Uc=i.div`
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
`,Wc=i.button`
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
`,Gc=i(Wc)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Kc=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,qc=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Jc=i.div`
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
`,Yc=i.button`
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
`,Xc=i.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Zc=i.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Qc=i.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: var(--bg-secondary);
`,$c=i.div`
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
`,el=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,tl=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,nl=i.section`
    & + & {
        margin-top: 22px;
    }
`,rl=i.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,il=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,al=i.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,ol=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,sl=i.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,cl=i.span`
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
`,ll=i.div`
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
`,ul=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,dl=i.span`
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,fl=i.input`
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
`,pl=i.span`
    overflow: hidden;
    min-width: 0;
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--accent-primary);
    text-overflow: ellipsis;
    white-space: nowrap;
`,ml=i.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,hl=i.button`
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
`,gl=i.span`
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
`,_l=i.span`
    color: var(--text-muted);
    font-size: 11px;
`,vl=i.span`
    color: #fca5a5;
`,yl=i.div`
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
`,bl=i.div`
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
`,xl=i.span`
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
`,Sl=i.div`
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
`,Cl=i.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,wl=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Tl=i.span`
    width: 100%;
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--accent-primary);
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,El=i.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Dl=i.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Ol=i.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,kl=i.p`
    font-size: 13px;
    color: var(--text-muted);
`,Al=i.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,jl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Ml=`/assets/bloom-BpfZWiaG.mp4`,Nl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Pl=`/assets/drift-BRBSQL2_.mp4`,Fl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Il=`/assets/ember-CtSz0YxR.mp4`,Ll=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Rl=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],zl=[{id:`builtin:video:drift`,name:`Drift`,url:Pl,poster:Nl},{id:`builtin:video:ember`,name:`Ember`,url:Il,poster:Fl},{id:`builtin:video:bloom`,name:`Bloom`,url:Ml,poster:jl}],Bl=Rl.map(e=>({...e,variants:Ll.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Kl(ql(e.id,t))}))})),Vl=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>Ll.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Kl(Jl(e.id,t))}))),Hl=new Map([...Bl.flatMap(e=>e.variants),...Vl].map(e=>[e.id,e])),Ul=new Map(zl.map(e=>[e.id,e]));function Wl(e){if(Hl.has(e))return Hl.get(e).url;if(Ul.has(e))return Ul.get(e).url;let t=e.split(`:`)[1];return t?Hl.get(`builtin:${t}:indigo`)?.url??null:null}function Gl(e){return Ul.has(e)}function Kl(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function ql(e,t){return e===`dunes`?tu(t):e===`tide`?nu(t):eu(t)}function Jl(e,t){return e===`skyline`?Xl(t):e===`orbit`?Zl(t):Yl(t)}function Yl({accent:e,secondary:t}){let n=$l(t,`#05070f`,.86),r=$l(e,`#0b1020`,.72),i=$l(t,`#0a0f1d`,.66),a=$l(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${$l(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${$l(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function Xl({accent:e,secondary:t}){let n=$l(t,`#07040d`,.84),r=$l(e,`#100716`,.7),i=$l(e,`#08050e`,.82),a=$l(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${$l(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function Zl({accent:e,secondary:t}){let n=$l(e,`#03050d`,.9),r=$l(t,`#05030c`,.94),i=$l(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${$l(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${$l(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${$l(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${$l(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function Ql(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function $l(e,t,n){let[r,i,a]=Ql(e),[o,s,c]=Ql(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function eu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${$l(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${$l(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${$l(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${$l(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function tu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${$l(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${$l(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${$l(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${$l(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${$l(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${$l(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${$l(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function nu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${$l(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${$l(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${$l(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${$l(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var ru=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function iu(e){return ru.test(e)}function au({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):ee(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=dn(r),a=t?.startsWith(`builtin:`)?Wl(t):n??i,o=n===null?r===null?t!==null&&Gl(t):iu(r):iu(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,L.jsxs)(ou,{"aria-hidden":!0,children:[o?(0,L.jsx)(cu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,L.jsx)(su,{src:a,style:{filter:s}}),(0,L.jsx)(lu,{})]})}var ou=i.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,su=i.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,cu=i.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,lu=i.div`
    position: absolute;
    inset: 0;
    background:
        linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function uu({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=B(),o=(0,O.useRef)(null),[s,c]=(0,O.useState)(()=>Math.max(1,Math.ceil(t)));return(0,O.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,_a.createPortal)((0,L.jsx)(du,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,L.jsxs)(fu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsx)(pu,{children:a(`Protected folder`)}),(0,L.jsx)(mu,{children:a(`These paths are protected by the safety settings:`)}),(0,L.jsx)(hu,{children:e.map(e=>(0,L.jsxs)(gu,{children:[(0,L.jsx)(_u,{children:e.path}),(0,L.jsx)(vu,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,L.jsx)(yu,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,L.jsx)(bu,{children:a(`Nothing has been deleted.`)}),(0,L.jsx)(xu,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,L.jsxs)(Su,{children:[(0,L.jsx)(Cu,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,L.jsx)(wu,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var du=i.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Ma}
`,fu=i.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Da}
`,pu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,mu=i.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,hu=i.div`
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
`,gu=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,_u=i.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,vu=i.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,yu=i.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,bu=i.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,xu=i.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Su=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Cu=i.button`
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
`,wu=i.button`
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
`;function Tu(){let e=B(),[t,n]=(0,O.useState)(null),r=(0,O.useRef)(null),i=(0,O.useRef)(null);(0,O.useEffect)(()=>(ia(e=>new Promise(t=>{r.current=t,n(e)})),()=>ia(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,O.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,_a.createPortal)((0,L.jsx)(Eu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,L.jsxs)(Du,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsx)(Ou,{children:e(`Notice`)}),(0,L.jsx)(ku,{children:t}),(0,L.jsx)(Au,{children:(0,L.jsx)(ju,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Eu=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ma}
`,Du=i.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Da}
`,Ou=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,ku=i.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Au=i.div`
    display: flex;
    justify-content: flex-end;
`,ju=i.button`
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
`;function Mu(){let e=B(),[t,n]=(0,O.useState)(null),[r,i]=(0,O.useState)(``),a=(0,O.useRef)(null),o=(0,O.useRef)(null);(0,O.useEffect)(()=>(oa((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>oa(null)),[]),(0,O.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,_a.createPortal)((0,L.jsx)(Nu,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,L.jsxs)(Pu,{role:`dialog`,"aria-modal":`true`,children:[(0,L.jsx)(Fu,{children:e(`Archive password`)}),(0,L.jsx)(Iu,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,L.jsx)(Lu,{title:t.archive,children:t.archive}),(0,L.jsx)(Ru,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,L.jsxs)(zu,{children:[(0,L.jsx)(Bu,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,L.jsx)(Vu,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Nu=i.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Ma}
`,Pu=i.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${Da}
`,Fu=i.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Iu=i.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Lu=i.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ru=i.input`
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
`,zu=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Bu=i.button`
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
`,Vu=i(Bu)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Hu({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=B(),_=(0,O.useRef)(null),v=c??g(`Search this folder`);(0,O.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,L.jsxs)(Uu,{children:[(0,L.jsx)(Yr,{}),(0,L.jsx)(Wu,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Gu,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,L.jsx)(Ku,{onClick:()=>y(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,L.jsx)(ti,{size:12})}),(0,L.jsx)(Ku,{$down:!0,onClick:()=>y(d),title:g(`Next match (Enter)`),type:`button`,children:(0,L.jsx)(ti,{size:12})})]}),(0,L.jsx)(qu,{$on:n,onClick:()=>y(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,L.jsx)(qu,{$on:r,onClick:()=>y(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,L.jsx)(Ju,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,L.jsx)(Ku,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,L.jsx)(ui,{size:12})})]})}var Uu=i.div`
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
    ${Aa}
`,Wu=i.input`
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
`,Gu=i.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Ku=i.button`
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
`,qu=i.button`
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
`,Ju=i(qu)`
    min-width: 34px;
    font-family: var(--font-sans);
    font-size: 10px;
`;function Yu(e,t,n,r,i=[]){(0,O.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=hn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function Xu({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=B(),a=(0,O.useRef)(null),o=(0,O.useRef)(null),[s,c]=(0,O.useState)(null);return(0,O.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,O.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,O.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,_a.createPortal)((0,L.jsxs)(Zu,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(os).map(n=>(0,L.jsx)(Qu,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:os[n](16)},n)),(0,L.jsx)(Qu,{onClick:async()=>{let e=await ta([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,L.jsx)(Qr,{size:13})}),r&&(0,L.jsx)(Qu,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,L.jsx)(ui,{size:12})})]}),document.body)]})}var Zu=i.div`
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
    ${Oa}
    transform-origin: top left;
`,Qu=i.button`
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
`,$u={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function ed(){return I.available?await I.request(`share.list`):$u}async function td(e,t){return I.available?await I.request(`share.add`,{path:e,mode:t}):$u}async function nd(e){return I.available?await I.request(`share.remove`,{id:e}):$u}async function rd(e,t){return I.available?await I.request(`share.mode`,{id:e,mode:t}):$u}async function id(){return I.available?(await I.request(`share.peers.refresh`)).peers??[]:[]}async function ad(e,t){I.available&&await I.request(`share.pair.start`,{host:e,port:t})}async function od(e,t){I.available&&await I.request(`share.pair.respond`,{requestId:e,accept:t})}async function sd(e,t){I.available&&await I.request(`share.port`,{mode:t,port:e})}var cd=`share://`;function ld(e){return e.toLowerCase().startsWith(cd)}function ud(e){if(!ld(e))return null;let[t,n,...r]=e.slice(8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function dd(e,t,n=``){let r=`${cd}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function fd(e){let t=ud(e);if(!t||!I.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await I.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:dd(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:dd(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function pd(e){let t=ud(e);if(!t||!I.available)throw Error(`This shared file is only available in the desktop app.`);let n=await I.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function md(e){await U(await pd(e))}function hd({source:e,poster:t}){let n=ee(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=dn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??Wl(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,L.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,L.jsx)(`img`,{alt:``,src:a}):null}function gd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=B(),s=(0,O.useRef)(null),c=(0,O.useRef)(null),l=(0,O.useRef)(!1),[u,d]=(0,O.useState)(null),[f,p]=(0,O.useState)(null),[m,h]=(0,O.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,O.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,O.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,O.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,L.jsx)(Ld,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,L.jsxs)(Rd,{children:[(0,L.jsxs)(zd,{children:[(0,L.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,L.jsx)(Kd,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,L.jsx)(ui,{size:12})})]}),(0,L.jsx)(Bd,{children:o(`Drag the frame to choose the visible part.`)}),(0,L.jsxs)(Vd,{children:[t?(0,L.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,L.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,L.jsx)(Hd,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,L.jsx)(Ud,{})})]}),(0,L.jsxs)(Wd,{children:[(0,L.jsx)(Gd,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,L.jsx)(Gd,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var _d=150,vd=120,yd=200,bd=i.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,xd=i.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Sd=i.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${yd}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${yd}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(yd*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(yd*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(yd*.18)}px),
        transparent 100%);
    mask-image: linear-gradient(to bottom,
        #000 0,
        #000 calc(100% - ${yd}px),
        rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(yd*.72)}px),
        rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(yd*.44)}px),
        rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(yd*.18)}px),
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
`,Cd=i.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${_d}px);
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
`,wd=i.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$overlap:e})=>e?`-${e}px`:`0`};
`,Td=i.section`
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
`,Ed=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Dd=i.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Od=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,kd=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Ad=i.input`
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
`,jd=i.button`
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
`,Md=i.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Nd=i.button`
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
`,Pd=i.button`
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
`,Fd=i.span`
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
`,Id=i.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Ld=i.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Rd=i.div`
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
`,zd=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Bd=i.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Vd=i.div`
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
`,Hd=i.div`
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
`,Ud=i.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,Wd=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Gd=i.button`
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
`,Kd=i.button`
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
`,qd=i.button`
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
`,Jd=i.div`
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
`,Yd=i.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Xd=i.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Zd=i.button`
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
`,Qd=i.div`
    position: relative;
    display: inline-flex;
`,$d=i.div`
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
`,ef=i.button`
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
`,tf=i.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,nf=i.section`
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
`,rf=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,af=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,of=i.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,sf=i.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,cf=i.input`
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
`,lf=i.button`
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
`,uf=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,df=i.div`
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
`,ff=i.span`
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
`,pf=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,mf=i.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,hf=i.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,gf=i.button`
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
`,_f=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,vf=i.button`
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
`,yf=i.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,bf=i.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,xf=i.div`
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
`,Sf=i.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Cf=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,wf=i.button`
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
`,Tf=i.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Ef=i.button`
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
`,Df=i.button`
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
`,Of=i.button`
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
`,kf=i.span`
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
`,Af=i.button`
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
`,jf=i.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Mf=i.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Nf=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Pf=i.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Ff=i.input`
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
`,If=i.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Lf=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Rf=i.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zf=i.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Bf=i.button`
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
`;function Vf({places:e,drives:n,recent:r,recentLimit:i,homePath:o,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:f,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:v,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:C}){let w=B(),E=An(),[D,te]=(0,O.useState)(!1),[k,A]=(0,O.useState)(null),j=k?.overviewBanner??null,ne=j?.startsWith(`builtin:`)??!1,M=j?.startsWith(`url:`)?j.slice(4):ee(j)?j:null,re=ne||M?``:j??``,N=ne?``:M?M.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:re.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,P=ne?Gl(j):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(N),ie=dn(re.length>0?re:null,0,N?`.${N}`:``),F=j?Wl(j)??M??ie:null,[ae,oe]=(0,O.useState)(``),[se,R]=(0,O.useState)(null),[z,ce]=(0,O.useState)(!1),[le,V]=(0,O.useState)(null),[ue,de]=(0,O.useState)(null),[H,fe]=(0,O.useState)(null),[pe,me]=(0,O.useState)([]),[he,ge]=(0,O.useState)(null),[_e,ye]=(0,O.useState)(``),[be,xe]=(0,O.useState)(null),[W,Se]=(0,O.useState)(null),Ce=pc(`overview`),[we,Ee]=(0,O.useState)(null),[De,Oe]=(0,O.useState)(null),ke=(0,O.useRef)(null),Ae=(0,O.useRef)(null),je=(0,O.useRef)(null),Me=(0,O.useRef)(null),Ne=(0,O.useRef)(null),Pe=De??k?.overviewBannerHeight??220,Fe=(0,O.useRef)(Pe);Fe.current=Pe;let[Ie,Le]=(0,O.useState)(0),[Re,Ve]=(0,O.useState)(null),He=Math.min(1,Math.max(0,k?.overviewBannerOffset??.3)),Ue=Pe+yd,We=Re&&Ie>0?Re.height*(Ie/Re.width):Ue,Ke=We>0&&We<Ue+240?(Ue+240)/We:1,G=Math.max(1,Math.round(Ie*Ke)),qe=Math.max(0,We*Ke-Ue),Je=Math.min(vd,qe/2,Math.max(20,Pe*.42)),Ye=Je+He*Math.max(0,qe-Je*2),Xe=Math.round(Math.min(88,Pe*.12)),[Qe,$e]=(0,O.useState)(!1),et=(e,t=!1)=>x?(xe(e),Se({path:e,isDirectory:t}),S?.([e]),!0):!1,tt=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),xe(t),Se({path:t,isDirectory:n}),Ee({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,O.useEffect)(()=>(oc(`overview`,W?(e,t)=>Ee({x:e,y:t,target:W}):null),()=>oc(`overview`,null)),[W]);let nt=(e,t)=>c(e,t);(0,O.useEffect)(()=>{Ge().then(A,()=>A(null))},[]),(0,O.useEffect)(()=>{if(I.available)return id().then(me,()=>void 0),I.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&me(t.data.peers)})},[]),(0,O.useEffect)(()=>{let e=je.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.min(e.scrollTop/Math.max(Fe.current,1),1);e.style.setProperty(`--banner-progress`,`${n}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,O.useEffect)(()=>{if(ne&&!P){Ve({width:1920,height:1080});return}Ve(null);let e=Ne.current;e?.complete&&e.naturalWidth>0&&Ve({width:e.naturalWidth,height:e.naturalHeight})},[j,ne,P]),(0,O.useEffect)(()=>{let e=Me.current;if(!e)return;let t=()=>Le(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[k?.overviewBanner]),(0,O.useEffect)(()=>{if(!se)return;let e=()=>R(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||R(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[se]),(0,O.useEffect)(()=>{if(!z)return;let e=()=>ce(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[z]);let rt=cs(k),it=rt.map(e=>e.id),at=(0,O.useRef)(null),ot=e=>se?.kind===`panel`&&se.id===e,st=e=>se?.kind===`place`&&se.id===e;(0,O.useEffect)(()=>{if(!I.available)return;let e=rt.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??o).filter(e=>e.length>0);I.send({type:`fs.watch`,payload:{paths:e}})},[rt.map(e=>e.path??e.id).join(`|`),o]),Yu(at,v??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let ct=async(e,t)=>{let n={...k?.placeIcons};t?n[e]=t:delete n[e],R(null),await mt({placeIcons:n}),l(await Te())},lt=async(e,t)=>{let n={...k?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],de(null),await mt({placeNames:n}),l(await Te())},ut=e=>{fe(null),V({drive:e,label:e.label||`Local Disk`})},dt=async()=>{if(!le)return;let{drive:e,label:t}=le;V(null);let n=await ve(e.name,t.trim());n.ok?(fe(null),h?.()):fe(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},pt=k?.overviewColumns??1,mt=async e=>{if(!k)return;let t={...k,...e,overviewPanels:e.overviewPanels??it,overviewHidden:[]};A(await Ze(t)),p?.()},ht=async()=>{let e=await ta([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=k?.overviewBanners??[];await mt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},gt=async()=>{let e=ae.trim();if(!k||!ee(e))return;let t=k.overviewBanners??[];oe(``),await mt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},_t=()=>void mt({overviewBanner:null}),vt=e=>void mt({overviewBanners:(k?.overviewBanners??[]).filter(t=>t!==e),...k?.overviewBanner===e||k?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),yt=e=>{ke.current={y:e.clientY,height:Pe},e.currentTarget.setPointerCapture(e.pointerId)},bt=e=>{let t=ke.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Ae.current=n,Oe(n)},xt=e=>{ke.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Ae.current!==null&&(mt({overviewBannerHeight:Ae.current}),Ae.current=null)},St=(e,t)=>{let n=it.indexOf(e),r=n+t;if(n<0||r<0||r>=it.length)return;let i=[...it];[i[n],i[r]]=[i[r],i[n]],mt({overviewPanels:i})},Ct=(e,t)=>{let n={...k?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],mt({overviewTitles:n})},wt=(e,t)=>void mt({overviewViews:{...k?.overviewViews,[e]:t}}),Tt=e=>{let t=k?.overviewPinned??rt.filter(e=>e.pinned).map(e=>e.id);mt({overviewPinned:rt.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Et=e=>{R(null);let t=t=>{let n={...t};return delete n[e],n},n=k?.overviewPinned??rt.filter(e=>e.pinned).map(e=>e.id);mt({overviewPanels:it.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(k?.overviewTitles),overviewViews:t(k?.overviewViews),overviewIcons:t(k?.overviewIcons),panelPlaces:t(k?.panelPlaces)})},Dt=(e,t)=>{let n={...k?.overviewIcons};t?n[e]=t:delete n[e],R(null),mt({overviewIcons:n})},Ot=async e=>{if(!k)return;if(e===`folder`){let e=await ea();if(!e)return;let t=`folder:${e}`;it.includes(t)||await mt({overviewPanels:[...it,t]});return}if(e===`quick`){let e=2;for(;it.includes(`quick:${e}`);)e+=1;await mt({overviewPanels:[...it,`quick:${e}`]});return}let t=e;for(let n=2;it.includes(t);n+=1)t=`${e}:${n}`;await mt({overviewPanels:[...it,t]})},kt=async t=>{let n=await ea();if(!n)return;if(t.id===`quick`){await mt({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),l(await Te());return}let r=t.places??[];r.some(e=>Uf(e,n))||await mt({panelPlaces:{...k?.panelPlaces,[t.id]:[...r,n]}})},At=async(t,n)=>{R(null),t.id===`quick`?(await mt({quickAccess:e.filter(e=>!Uf(e.path,n)).map(e=>e.path)}),l(await Te())):await mt({panelPlaces:{...k?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!Uf(e,n))}})},jt=async(t,n,r)=>{if(Uf(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>Uf(e,n)),o=i.findIndex(e=>Uf(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),t.id===`quick`?(await mt({quickAccess:s}),l(await Te())):await mt({panelPlaces:{...k?.panelPlaces,[t.id]:s}})},Mt=(e,t)=>({draggable:D,onDragOver:e=>{D&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{D&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{D&&(n.preventDefault(),jt(e,n.dataTransfer.getData(`text/plain`),t))}}),K=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Uf(e.path,t));return{name:k?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??k?.placeIcons?.[t]??null}}),Nt=e=>{if(r.length===0)return(0,L.jsx)(Mf,{children:w(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,L.jsx)(uf,{children:t.map(e=>{let t=jn(E,e.path);return(0,L.jsxs)(df,{$plain:!1,$selected:be===e.path,onClick:t=>{et(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Bt(t)):U(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>tt(t,e.path,e.isDirectory),title:e.path,children:[(0,L.jsx)(ff,{children:t&&E.useIcons?(0,L.jsx)(ds,{place:t,size:18}):(0,L.jsx)(ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,L.jsxs)(pf,{children:[(0,L.jsx)(`strong`,{children:t?.name||e.name}),(0,L.jsx)(mf,{children:e.path})]})]},e.path)})}):(0,L.jsx)(hf,{children:t.map(e=>{let t=jn(E,e.path);return(0,L.jsxs)(gf,{$selected:be===e.path,onClick:t=>{et(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Bt(t)):U(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>tt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&E.useIcons?(0,L.jsx)(ds,{place:t,size:15}):(0,L.jsx)(ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,L.jsxs)(_f,{children:[(0,L.jsx)(`strong`,{children:t?.name||e.name}),(0,L.jsx)(mf,{children:e.path})]})]},e.path)})})},Pt=e=>{if(n.length===0)return(0,L.jsx)(Mf,{children:w(`No drives are available.`)});let r=n.map(n=>{let r=n.totalSize>0?1-n.freeSpace/n.totalSize:0,i=le?.drive.name===n.name,a=i?(0,L.jsx)(Hf,{maxLength:32,onCancel:()=>V(null),onChange:e=>V({...le,label:e}),onCommit:()=>void dt(),value:le?.label??``}):(0,L.jsx)(L.Fragment,{children:u(n)}),o=!i&&D&&(0,L.jsx)(Of,{onClick:e=>{e.stopPropagation(),ut(n)},title:w(`Rename volume`),type:`button`,children:(0,L.jsx)(Di,{size:11})}),s=(0,L.jsx)(mf,{children:w(`{free} free of {total}`,{free:d(n.freeSpace),total:d(n.totalSize)})});return e.view===`grid`?(0,L.jsxs)(df,{$plain:!1,$selected:be===n.name,onClick:e=>{!i&&et(n.name,!0)||i||c(n.name,Bt(e))},onDoubleClick:()=>!i&&x?.(n.name),onContextMenu:e=>!i&&tt(e,n.name,!0),title:n.name,children:[(0,L.jsx)(ff,{children:(0,L.jsx)(Jr,{size:18})}),(0,L.jsxs)(pf,{children:[(0,L.jsxs)(`strong`,{children:[a,i&&T(n),o]}),s]})]},n.name):(0,L.jsxs)(gf,{as:i?`div`:`button`,$selected:be===n.name,onClick:i?void 0:e=>{et(n.name,!0)||c(n.name,Bt(e))},onDoubleClick:i?void 0:()=>x?.(n.name),onContextMenu:i?void 0:e=>tt(e,n.name,!0),title:n.name,type:i?void 0:`button`,children:[(0,L.jsx)(Jr,{size:18}),(0,L.jsxs)(_f,{children:[(0,L.jsxs)(`strong`,{children:[a,i&&T(n),o]}),s]}),(0,L.jsx)(yf,{children:(0,L.jsx)(bf,{$used:r,$tone:t(r)})})]},n.name)});return e.view===`grid`?(0,L.jsx)(uf,{children:r}):(0,L.jsx)(hf,{children:r})},Ft=()=>{let e=async e=>{ge(e.id);try{await ad(e.host,e.port)}finally{ge(null)}},t=async()=>{let e=_e.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){ge(`manual`);try{await ad(n,r)}finally{ge(null)}}};return(0,L.jsxs)(Nf,{children:[(0,L.jsxs)(Pf,{children:[(0,L.jsx)(Ff,{onChange:e=>ye(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:w(`Address, e.g. 192.168.1.20:45701`),value:_e}),(0,L.jsx)(Bf,{disabled:he!==null||!_e.includes(`:`),onClick:()=>void t(),type:`button`,children:w(he===`manual`?`Pairing…`:`Pair by address`)})]}),pe.length===0&&(0,L.jsx)(Mf,{children:w(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),pe.map(t=>(0,L.jsxs)(If,{children:[(0,L.jsxs)(Lf,{children:[(0,L.jsx)(Vi,{size:14}),(0,L.jsx)(Rf,{title:t.host,children:t.name}),(0,L.jsx)(zf,{$online:t.online,children:t.paired?t.online?w(`Paired`):w(`Offline`):w(`Not paired`)}),!t.paired&&t.online&&(0,L.jsx)(Bf,{disabled:he===t.id,onClick:()=>void e(t),type:`button`,children:he===t.id?w(`Pairing…`):w(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,L.jsx)(mf,{children:w(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,L.jsxs)(gf,{onClick:n=>c(dd(t.id,e.id),Bt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,L.jsx)(Vi,{size:14}),(0,L.jsxs)(_f,{children:[(0,L.jsx)(`strong`,{children:e.name}),(0,L.jsx)(mf,{children:t.name})]}),(0,L.jsx)(Ui,{size:12})]},e.id))]},t.id))]})},It=e=>{switch(e.kind){case`share`:return Ft();case`quick`:{let t=K(e);return!D&&t.length===0?(0,L.jsx)(Mf,{children:w(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,L.jsxs)(uf,{children:[t.map(t=>(0,L.jsxs)(df,{$plain:D,$selected:be===t.path,...Mt(e,t.path),onClick:e=>{!D&&!et(t.path,!0)&&c(t.path,Bt(e))},onDoubleClick:()=>!D&&x?.(t.path),onContextMenu:e=>!D&&tt(e,t.path,!0),title:t.path,children:[D&&(0,L.jsx)(Df,{onClick:n=>{n.stopPropagation(),At(e,t.path)},title:w(`Remove from Quick access`),type:`button`,children:(0,L.jsx)(ui,{size:11})}),(0,L.jsxs)(Tf,{children:[D?(0,L.jsx)(Ef,{onClick:e=>{e.stopPropagation(),R(st(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:w(`Change icon`),type:`button`,children:(0,L.jsx)(ff,{children:(0,L.jsx)(ds,{place:t})})}):(0,L.jsx)(ff,{children:(0,L.jsx)(ds,{place:t})}),st(t.path)&&(0,L.jsx)(Xu,{onPick:e=>void ct(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,L.jsxs)(pf,{children:[ue?.path===t.path?(0,L.jsx)(`strong`,{children:(0,L.jsx)(Hf,{onCancel:()=>de(null),onChange:e=>de({path:t.path,name:e}),onCommit:()=>void lt(t.path,ue?.name??``),value:ue?.name??``})}):(0,L.jsxs)(`strong`,{children:[t.name,D&&(0,L.jsx)(Of,{onClick:e=>{e.stopPropagation(),R(null),de({path:t.path,name:t.name})},title:w(`Rename folder`),type:`button`,children:(0,L.jsx)(Di,{size:11})})]}),(0,L.jsx)(mf,{children:t.path})]})]},t.path)),D&&(0,L.jsxs)(vf,{onClick:()=>void kt(e),title:w(`Pin a folder here`),type:`button`,children:[(0,L.jsx)(ff,{children:(0,L.jsx)(Qr,{size:15})}),(0,L.jsxs)(pf,{children:[(0,L.jsx)(`strong`,{children:w(`Add folder`)}),(0,L.jsx)(mf,{children:w(`Pin a directory here`)})]})]})]}):(0,L.jsxs)(hf,{children:[t.map(t=>(0,L.jsxs)(gf,{$selected:be===t.path,...Mt(e,t.path),onClick:e=>{!D&&!et(t.path,!0)&&c(t.path,Bt(e))},onDoubleClick:()=>!D&&x?.(t.path),onContextMenu:e=>!D&&tt(e,t.path,!0),title:t.path,type:`button`,children:[(0,L.jsxs)(Tf,{children:[D?(0,L.jsx)(Ef,{onClick:e=>{e.stopPropagation(),R(st(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:w(`Change icon`),type:`button`,children:(0,L.jsx)(ds,{place:t,size:15})}):(0,L.jsx)(ds,{place:t,size:15}),st(t.path)&&(0,L.jsx)(Xu,{onPick:e=>void ct(t.path,e),value:k?.placeIcons?.[t.path]??t.icon})]}),(0,L.jsxs)(_f,{children:[ue?.path===t.path?(0,L.jsx)(`strong`,{children:(0,L.jsx)(Hf,{onCancel:()=>de(null),onChange:e=>de({path:t.path,name:e}),onCommit:()=>void lt(t.path,ue?.name??``),value:ue?.name??``})}):(0,L.jsxs)(`strong`,{children:[t.name,D&&(0,L.jsx)(Of,{onClick:e=>{e.stopPropagation(),R(null),de({path:t.path,name:t.name})},title:w(`Rename folder`),type:`button`,children:(0,L.jsx)(Di,{size:11})})]}),(0,L.jsx)(mf,{children:t.path})]}),D&&(0,L.jsx)(Df,{$inline:!0,onClick:n=>{n.stopPropagation(),At(e,t.path)},title:w(`Remove from Quick access`),type:`button`,children:(0,L.jsx)(ui,{size:11})})]},t.path)),D&&(0,L.jsxs)(vf,{$row:!0,onClick:()=>void kt(e),title:w(`Pin a folder here`),type:`button`,children:[(0,L.jsx)(Qr,{size:15}),(0,L.jsxs)(_f,{children:[(0,L.jsx)(`strong`,{children:w(`Add folder`)}),(0,L.jsx)(mf,{children:w(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,L.jsx)(Wf,{mode:e.view,onContextMenu:tt,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return Nt(e);case`drives`:return Pt(e);default:return(0,L.jsx)(Gf,{mode:e.view,onContextMenu:tt,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:k?.openOnSingleClick??!1,path:e.path??o,selectionMenuId:`overview:${e.id}`,showCheckboxes:k?.showCheckboxes??!0,visibilityVersion:g})}};return(0,L.jsxs)(bd,{$flush:!!k?.overviewBanner,ref:je,children:[!b&&(0,L.jsxs)(Jd,{$overlay:!!k?.overviewBanner,children:[(0,L.jsx)(Yd,{role:`group`,title:w(`Columns`),children:[1,2,3,4,5].map(e=>(0,L.jsx)(Xd,{$active:pt===e,onClick:()=>void mt({overviewColumns:e}),title:a(w,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),D&&(0,L.jsxs)(Qd,{children:[(0,L.jsxs)(Zd,{onClick:()=>ce(e=>!e),onPointerDown:e=>e.stopPropagation(),title:w(`Add a panel`),type:`button`,children:[(0,L.jsx)(Qr,{size:12}),w(`Add panel ▾`)]}),z&&(0,L.jsx)($d,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`folder`].map(e=>(0,L.jsx)(ef,{onClick:()=>{ce(!1),Ot(e)},type:`button`,children:w(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:`Folder…`)},e))})]}),Ce.available&&(0,L.jsx)(lf,{onClick:e=>Ce.open(e.clientX,e.clientY),title:w(`Selection menu`),type:`button`,children:(0,L.jsx)(Qi,{size:14})}),(0,L.jsxs)(Zd,{onClick:()=>{te(e=>!e),ce(!1),R(null),de(null),V(null)},title:w(D?`Done`:`Edit`),type:`button`,children:[D?(0,L.jsx)(li,{size:13}):(0,L.jsx)(Di,{size:13}),w(D?`Done`:`Edit`)]})]}),H&&(0,L.jsx)(jf,{children:H}),k?.overviewBanner&&(0,L.jsxs)(xd,{ref:Me,style:{height:`${Pe}px`,"--banner-image-width":`${G}px`,"--banner-image-shift":`${Ye}px`,"--banner-travel":`${Je}px`,"--banner-overlap":`${Xe}px`},children:[(0,L.jsx)(Sd,{children:P?(0,L.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Ve({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:F??void 0}):(0,L.jsx)(`img`,{alt:``,onLoad:e=>{let t=ne?1920:e.currentTarget.naturalWidth||1920,n=ne?1080:e.currentTarget.naturalHeight||1080;Ve({width:t,height:n})},ref:Ne,src:F??void 0})}),D&&(0,L.jsx)(Cd,{onDoubleClick:()=>{Ae.current=null,Oe(null),mt({overviewBannerHeight:220})},onPointerCancel:xt,onPointerDown:yt,onPointerMove:bt,onPointerUp:xt,title:w(`Drag to resize; double-click to reset`)})]}),(0,L.jsxs)(wd,{$overlap:k?.overviewBanner?Xe:0,children:[D&&(0,L.jsxs)(Td,{children:[(0,L.jsxs)(Ed,{children:[(0,L.jsx)(Dd,{children:w(`Banners`)}),k?.overviewBanner&&(0,L.jsxs)(Zd,{onClick:()=>$e(!0),title:w(`Adjust framing…`),type:`button`,children:[(0,L.jsx)(Di,{size:12}),w(`Adjust framing…`)]})]}),(0,L.jsxs)(Od,{children:[(0,L.jsx)(Md,{children:(0,L.jsx)(Nd,{$active:!k?.overviewBanner,onClick:_t,title:w(`No banner`),type:`button`,children:(0,L.jsxs)(Id,{children:[(0,L.jsx)(ui,{size:16}),(0,L.jsx)(`span`,{children:w(`No banner`)})]})})}),Vl.map(e=>(0,L.jsx)(Md,{children:(0,L.jsx)(Nd,{$active:k?.overviewBanner===e.id,onClick:()=>void mt({overviewBanner:e.id}),title:`${w(e.concept)} · ${w(e.preset)}`,type:`button`,children:(0,L.jsx)(hd,{poster:e.url,source:e.id})})},e.id)),zl.map(e=>(0,L.jsx)(Md,{children:(0,L.jsxs)(Nd,{$active:k?.overviewBanner===e.id,onClick:()=>void mt({overviewBanner:e.id}),title:w(e.name),type:`button`,children:[(0,L.jsx)(hd,{poster:e.poster,source:e.id}),(0,L.jsx)(Fd,{children:(0,L.jsx)(hi,{size:11})})]})},e.id)),(k?.overviewBanners??[]).map(e=>(0,L.jsxs)(Md,{children:[(0,L.jsx)(Nd,{$active:k?.overviewBanner===e||k?.overviewBanner===`url:${e}`,onClick:()=>void mt({overviewBanner:ee(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,L.jsx)(hd,{source:e})}),(0,L.jsx)(Pd,{onClick:()=>vt(e),title:w(`Remove`),type:`button`,children:(0,L.jsx)(ui,{size:10})})]},e)),(0,L.jsxs)(qd,{onClick:()=>void ht(),title:w(`Add banner…`),type:`button`,children:[(0,L.jsx)(Qr,{size:18}),(0,L.jsx)(`span`,{children:w(`Add banner…`)})]})]}),(0,L.jsxs)(kd,{children:[(0,L.jsx)(Ad,{onChange:e=>oe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&gt()},placeholder:`https://…`,value:ae}),(0,L.jsx)(jd,{disabled:!ee(ae),onClick:()=>void gt(),type:`button`,children:w(`Add URL`)})]})]}),(0,L.jsx)(tf,{ref:at,$columns:pt,children:rt.map(e=>{let t=it.indexOf(e.id);return(0,L.jsxs)(nf,{children:[(0,L.jsxs)(rf,{children:[(0,L.jsxs)(af,{children:[(0,L.jsxs)(Tf,{children:[D?(0,L.jsx)(Ef,{onClick:()=>R(ot(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:w(`Change icon`),type:`button`,children:(0,L.jsx)(us,{panel:e,size:15})}):(0,L.jsx)(us,{panel:e,size:15}),ot(e.id)&&(0,L.jsx)(Xu,{onPick:t=>Dt(e.id,t),value:e.icon})]}),D?(0,L.jsx)(cf,{defaultValue:e.title,onBlur:t=>Ct(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,L.jsx)(sf,{children:w(e.title)})]}),(0,L.jsxs)(of,{children:[!D&&e.kind===`recent`&&(0,L.jsx)(Zd,{onClick:()=>void ze().then(f),title:w(`Clear`),type:`button`,children:w(`Clear`)}),!D&&e.kind===`frequent`&&(0,L.jsx)(Zd,{onClick:()=>void Be().then(()=>m?.()),title:w(`Clear the frequent list`),type:`button`,children:w(`Clear`)}),!D&&(e.kind===`home`||e.kind===`folder`)&&(0,L.jsx)(Zd,{onClick:()=>c(e.path??o),title:w(`Open folder`),type:`button`,children:w(`Open`)}),D&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(lf,{$active:e.pinned,onClick:()=>Tt(e.id),title:e.pinned?w(`Unpin from the sidebar`):w(`Pin to the sidebar`),type:`button`,children:(0,L.jsx)(ri,{size:12})}),(0,L.jsx)(lf,{$active:e.view===`list`,onClick:()=>wt(e.id,`list`),title:w(`List`),type:`button`,children:(0,L.jsx)(ii,{size:13})}),(0,L.jsx)(lf,{$active:e.view===`grid`,onClick:()=>wt(e.id,`grid`),title:w(`Grid`),type:`button`,children:(0,L.jsx)(ai,{size:13})}),(0,L.jsx)(lf,{disabled:t===0,onClick:()=>St(e.id,-1),title:w(`Move up`),type:`button`,children:(0,L.jsx)(Xr,{size:12})}),(0,L.jsx)(lf,{disabled:t===it.length-1,onClick:()=>St(e.id,1),title:w(`Move down`),type:`button`,children:(0,L.jsx)(Xr,{size:12})}),(0,L.jsx)(lf,{onClick:()=>Et(e.id),title:w(`Remove panel`),type:`button`,children:(0,L.jsx)(ui,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?It(e):(0,L.jsx)(Sf,{children:It(e)})]},e.id)})})]}),Qe&&F&&(0,L.jsx)(gd,{height:Pe,offset:He,onCancel:()=>$e(!1),onSave:e=>{mt({overviewBannerOffset:e}),$e(!1)},source:F,video:P}),we&&(0,L.jsx)(Ka,{directory:o,menu:{x:we.x,y:we.y,paths:[we.target.path]},onClose:()=>Ee(null),onCopy:(e,t)=>void ft(e,t),onAddToTray:C,onOpen:nt,onOpenFile:e=>x?x(e):void U(e),shortcuts:Lt,target:we.target})]})}function Hf({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=B();return(0,L.jsxs)(kf,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,L.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,L.jsx)(Af,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,L.jsx)(ui,{size:11})}),(0,L.jsx)(Af,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,L.jsx)(li,{size:12})})]})}function Uf(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function Wf({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:o}){let s=B(),[c,l]=(0,O.useState)(null),[u,d]=(0,O.useState)(null),f=An(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,O.useEffect)(()=>{Le().then(l,()=>l([]))},[o]),!c)return(0,L.jsx)(Mf,{children:s(`Reading…`)});if(c.length===0)return(0,L.jsx)(Mf,{children:s(`Folders you open often show up here.`)});let m=e=>a(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,L.jsx)(uf,{children:c.map(e=>{let i=jn(f,e.path);return(0,L.jsxs)(df,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Bt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,L.jsx)(ff,{children:i&&f.useIcons?(0,L.jsx)(ds,{place:i,size:18}):(0,L.jsx)(ks,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,L.jsxs)(pf,{children:[(0,L.jsx)(`strong`,{children:i?.name||e.name}),(0,L.jsx)(mf,{children:m(e)})]})]},e.path)})}):(0,L.jsx)(hf,{children:c.map(e=>{let i=jn(f,e.path);return(0,L.jsxs)(gf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Bt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,L.jsx)(ds,{place:i,size:15}):(0,L.jsx)(ks,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,L.jsxs)(_f,{children:[(0,L.jsx)(`strong`,{children:i?.name||e.name}),(0,L.jsx)(mf,{children:m(e)})]})]},e.path)})})}function Gf({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:o,showCheckboxes:s,openOnSingleClick:c,visibilityVersion:l}){let u=B(),[d,f]=(0,O.useState)(null),[p,m]=(0,O.useState)(null),h=An();return(0,O.useEffect)(()=>{e&&(f(null),ye(e).then(f,()=>f(null)))},[e,l]),(0,O.useEffect)(()=>{if(I.available)return I.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&ye(e,!1).then(f,()=>void 0)})},[e]),d?t===`list`?(0,L.jsx)(xf,{children:(0,L.jsx)(yc,{error:null,listing:d,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void U(e)),onSelectionChange:a,selectionMenuId:o,onSort:()=>void 0,openOnSingleClick:c,enableShortcuts:!1,showCheckboxes:s,showDetails:!1,showImages:!1,view:{...ge,columns:_e.columns??[]}})}):(0,L.jsx)(Sf,{children:d.entries.length===0?(0,L.jsx)(Mf,{children:u(`This folder is empty.`)}):(0,L.jsx)(Cf,{children:d.entries.map(e=>{let t=jn(h,e.fullPath);return(0,L.jsxs)(wf,{$selected:p===e.fullPath,onClick:t=>{i?(m(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Bt(t)):U(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&h.useIcons?(0,L.jsx)(ds,{place:t,size:16}):(0,L.jsx)(ks,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,L.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,L.jsx)(Mf,{children:u(`Reading…`)})}function Kf({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=B(),s=An(),[c,l]=(0,O.useState)(!1),[u,d]=(0,O.useState)(``),[f,p]=(0,O.useState)([]),[m,h]=(0,O.useState)(0),[g,_]=(0,O.useState)(null),[v,y]=(0,O.useState)(null),b=(0,O.useRef)(null),x=(0,O.useRef)(null),S=(0,O.useRef)(0);(0,O.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,O.useEffect)(()=>{r&&r!==S.current&&(S.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,O.useEffect)(()=>{c&&b.current?.select()},[c]),(0,O.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let C=()=>{d(e.replace(/\\/g,`/`)),l(!0)},w=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,O.useEffect)(()=>{if(!c){p([]);return}let e=Yf(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{ye(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let T=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,O.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=x.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,L.jsxs)(tp,{onPointerDown:e=>e.stopPropagation(),ref:x,children:[(0,L.jsxs)(ap,{children:[(0,L.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?T(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):w(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:b,spellCheck:!1,value:u}),(0,L.jsx)(op,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,L.jsx)(ui,{size:12})}),(0,L.jsx)(op,{$apply:!0,onClick:w,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,L.jsx)(li,{size:14})})]}),f.length>0&&g&&(0,_a.createPortal)((0,L.jsx)(np,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,L.jsxs)(rp,{$active:t===m,onClick:t=>T(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,L.jsx)(ks,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,L.jsx)(ip,{children:e.name})]},e.path))}),document.body)]});let ee=t?[{label:t,path:e,icon:n}]:Jf(e,s.places);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Xf,{onClick:C,title:o(`Click to type a path`),children:ee.map((t,n)=>(0,L.jsxs)(Zf,{$last:n===ee.length-1,children:[n>0&&(0,L.jsx)($f,{children:(0,L.jsx)(ti,{size:9})}),(0,L.jsxs)(ep,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,L.jsx)(Qf,{children:(0,L.jsx)(ds,{place:t.place,size:13})}):t.icon&&(0,L.jsx)(Qf,{children:t.icon}),t.label]})]},t.path))}),v&&(0,L.jsx)(Pa,{items:[{label:o(`Open`),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),onSelect:()=>i(v.path,!0)},{label:o(`Open with…`),onSelect:()=>void Et(v.path)},{label:o(`Copy path`),onSelect:()=>void navigator.clipboard.writeText(v.path)},{label:o(`Properties`),onSelect:()=>void Tt([v.path])}],onClose:()=>y(null),x:v.x,y:v.y})]})}function qf(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Jf(e,t){let n=qf(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function Yf(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Xf=i.div`
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
`,Zf=i.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Qf=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,$f=i.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,ep=i.button`
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
`,tp=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,np=i.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${va}
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
`,rp=i.button`
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
`,ip=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ap=i.div`
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
`,op=i.button`
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
`,sp=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,L.jsx)(`path`,{d:`M4 4v6h6`})]});function cp({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:o=!1,videoAutoplay:s=!1,platform:c}){let l=B(),u=dc(`recycle`),f=c===`windows`,[p,m]=(0,O.useState)([]),[h,g]=(0,O.useState)([]),[_,y]=(0,O.useState)(!1),[b,x]=(0,O.useState)(null),[S,C]=(0,O.useState)(!0),[w,T]=(0,O.useState)(!1),[ee,E]=(0,O.useState)(null),[D,te]=(0,O.useState)(!1),[k,A]=(0,O.useState)(()=>new Set),[j,ne]=(0,O.useState)(null),[M,re]=(0,O.useState)(()=>{let e=Fn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[N,P]=(0,O.useState)(null),[ie,F]=(0,O.useState)(null),[ae,I]=(0,O.useState)(()=>{let e=Nn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),oe=(0,O.useRef)(null),se=e=>{I(e),Pn(`yafm.recycle.preview.width`,e)},R=(0,O.useCallback)(async()=>{C(!0),E(null);try{m(await De(D))}catch(e){E(e instanceof Error?e.message:String(e))}finally{C(!1)}},[D]);(0,O.useEffect)(()=>{R()},[R]),(0,O.useEffect)(()=>{D||(g([]),y(!1),x(null))},[D]),(0,O.useEffect)(()=>{A(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let z=(0,O.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=lp(e,t,M.column);return M.descending?-n:n})},[p,h,M]),ce=(0,O.useMemo)(()=>!t?.open||t.query.trim().length===0?z:z.filter(e=>Sn(e.name,t)||Sn(e.originalPath,t)),[z,t?.open,t?.query,t?.matchCase,t?.regex]),le=(0,O.useRef)(null);Yu(le,t??null,`[data-search-block]`,n??(()=>void 0),[z]),(0,O.useEffect)(()=>{A(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let V=(0,O.useMemo)(()=>z.filter(e=>k.has(e.id)),[z,k]),ue=V.filter(e=>e.removable&&!e.isOrphan),de=V.filter(e=>e.removable),H=(e,t)=>{let n=t.ctrlKey||t.metaKey;A(r=>{if(t.shiftKey&&j){let t=z.findIndex(e=>e.id===j),i=z.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(z[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),ne(e.id)},fe=(0,O.useCallback)(()=>A(new Set(ce.map(e=>e.id))),[ce]),pe=ce.length>0&&ce.every(e=>k.has(e.id)),me=(0,O.useCallback)(async()=>{let e=ue.map(e=>e.id);if(e.length!==0){T(!0);try{let t=await Ae(e);t.ok||await aa(a(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),A(new Set),await R()}finally{T(!1)}}},[R,ue,l]),he=(0,O.useCallback)(async()=>{let e=de.map(e=>e.id);if(F(null),e.length!==0){T(!0);try{let t=await je(e);!t.ok&&!t.cancelled&&await aa(a(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),A(new Set),await R()}finally{T(!1)}}},[de,R,l]),ge=async()=>{F(null),T(!0);try{await ke(D),A(new Set),await R()}finally{T(!1)}},_e=async()=>{T(!0),x(null);try{let e=await Ne();if(e.cancelled){x(`Elevation was declined — nothing was read.`);return}if(e.failed){x(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),y(!0)}finally{T(!1)}},ve=async()=>{T(!0),F(null);try{await Pe(),g([]),y(!1),x(null),await R()}finally{T(!1)}},U=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},ye=e=>{navigator.clipboard.writeText(e.originalPath)},be=(e,t)=>{e.preventDefault(),t&&!k.has(t.id)&&A(new Set([t.id])),P({x:e.clientX,y:e.clientY})};(0,O.useEffect)(()=>(oc(`recycle`,k.size>0?(e,t)=>P({x:e,y:t}):null),()=>oc(`recycle`,null)),[k]),(0,O.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),fe()):e.key===`Delete`?(e.preventDefault(),de.length>0&&F(`delete`)):e.key===`Enter`&&ue.length>0?(e.preventDefault(),me()):e.key===`Escape`&&(A(new Set),P(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[de.length,ue.length,me,fe]);let xe=[{label:l(`Restore`),icon:(0,L.jsx)(sp,{width:14,height:14}),disabled:ue.length===0,onSelect:()=>void me()},{label:l(`Delete permanently`),icon:(0,L.jsx)(ci,{size:14}),danger:!0,disabled:de.length===0,onSelect:()=>F(`delete`)},{label:l(`Properties`),icon:(0,L.jsx)(ni,{size:14}),disabled:V.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=V;e&&Me(e.id)}},{label:l(`Open original location`),icon:(0,L.jsx)(Kr,{size:14}),disabled:V.length!==1,onSelect:()=>{let[e]=V;e&&U(e)}},{label:l(`Copy original path`),icon:(0,L.jsx)(Gi,{size:14}),disabled:V.length!==1,onSelect:()=>{let[e]=V;e&&ye(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:fe},{label:l(`Refresh`),icon:(0,L.jsx)(Zr,{size:14}),onSelect:()=>void R()}],W=V.length>0?V[0]:null,Se=W?{name:W.name,path:W.contentPath||W.originalPath,isDirectory:W.isDirectory,size:W.size,modified:W.deleted,fields:[{label:l(`Type`),value:l(dp(W))},{label:l(`Original location`),value:W.originalPath},{label:l(`Date deleted`),value:v(W.deleted)},{label:l(`Size`),value:W.isDirectory?`—`:d(W.size)},...W.owner?[{label:l(`Owner`),value:W.owner}]:[],{label:l(`Status`),value:W.isOrphan?l(`Metadata only`):W.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,L.jsxs)(pp,{ref:oe,onContextMenu:e=>be(e),children:[(0,L.jsxs)(mp,{children:[(0,L.jsxs)(hp,{children:[(0,L.jsx)(ci,{size:16}),(0,L.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,L.jsxs)(gp,{children:[S?`…`:a(l,z.length,`1 item`,`{count} items`),k.size>0&&` · ${l(`{count} selected`,{count:k.size})}`]})]}),(0,L.jsxs)(_p,{children:[(0,L.jsx)(yp,{$on:D,onClick:()=>te(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),D&&f&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(vp,{disabled:w||_,onClick:()=>void _e(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(w?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,L.jsx)(vp,{disabled:w,onClick:()=>F(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,L.jsx)(vp,{disabled:w||ue.length===0,onClick:()=>void me(),type:`button`,children:l(`Restore`)}),(0,L.jsx)(vp,{$danger:!0,disabled:w||de.length===0,onClick:()=>F(`delete`),type:`button`,children:l(`Delete`)}),(0,L.jsx)(vp,{disabled:w||z.length===0,onClick:()=>F(`empty`),type:`button`,children:l(`Empty`)}),(0,L.jsx)(bp,{onClick:()=>void R(),title:l(`Refresh`),type:`button`,children:(0,L.jsx)(Zr,{size:14})}),u.available&&(0,L.jsx)(bp,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,L.jsx)(Qi,{size:14})})]})]}),b&&(0,L.jsx)(Vp,{children:b}),ee&&(0,L.jsx)(Hp,{children:ee}),!ee&&!S&&(t?.open&&t.query.trim().length>0?ce.length===0:z.length===0)&&(0,L.jsx)(Hp,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),z.length>0&&(0,L.jsxs)(Bp,{children:[(0,L.jsxs)(xp,{ref:le,children:[(0,L.jsxs)(Cp,{children:[(0,L.jsx)(kp,{$checked:pe,$partial:!pe&&k.size>0,onClick:()=>pe?A(new Set):fe(),title:l(pe?`Select none`:`Select all`),type:`button`,children:pe?(0,L.jsx)(li,{size:9}):k.size>0&&(0,L.jsx)(Ap,{})}),(0,L.jsxs)(wp,{onClick:()=>Ce(`name`),type:`button`,children:[l(`Name`),up(M,`name`)]}),(0,L.jsxs)(wp,{onClick:()=>Ce(`original`),type:`button`,children:[l(`Original location`),up(M,`original`)]}),(0,L.jsxs)(wp,{onClick:()=>Ce(`deleted`),type:`button`,children:[l(`Date deleted`),up(M,`deleted`)]}),(0,L.jsxs)(wp,{onClick:()=>Ce(`size`),type:`button`,children:[l(`Size`),up(M,`size`)]}),(0,L.jsxs)(wp,{onClick:()=>Ce(`type`),type:`button`,children:[l(`Type`),up(M,`type`)]}),(0,L.jsx)(`span`,{})]}),(0,L.jsx)(Tp,{onClick:e=>{e.target===e.currentTarget&&A(new Set)},children:z.map(e=>(0,L.jsxs)(Ep,{$checked:k.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>H(e,t),onContextMenu:t=>be(t,e),onDoubleClick:()=>{A(new Set([e.id])),ne(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,L.jsx)(Op,{$checked:k.has(e.id),children:k.has(e.id)&&(0,L.jsx)(li,{size:9})}),(0,L.jsxs)(jp,{children:[(0,L.jsx)(fp,{entry:e}),(0,L.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,L.jsx)(zp,{children:l(`metadata only`)}),e.owner&&(0,L.jsx)(zp,{$other:!0,children:l(`other profile`)})]}),(0,L.jsx)(Np,{children:e.originalPath}),(0,L.jsx)(Pp,{children:v(e.deleted)}),(0,L.jsx)(Fp,{children:e.isDirectory?`—`:d(e.size)}),(0,L.jsx)(Ip,{children:l(dp(e))}),(0,L.jsxs)(Lp,{children:[e.removable&&!e.isOrphan&&(0,L.jsx)(Rp,{onClick:t=>{t.stopPropagation(),Ae([e.id]).then(R)},title:l(`Restore to its original folder`),type:`button`,children:(0,L.jsx)(sp,{})}),e.removable&&(0,L.jsx)(Rp,{$danger:!0,onClick:t=>{t.stopPropagation(),A(new Set([e.id])),F(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,L.jsx)(ci,{size:13})})]})]},e.id))})]}),r&&(0,L.jsx)(No,{emptyNote:l(`Nothing selected.`),info:Se,onWidth:se,selectionNote:V.length>1?a(l,V.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:o,videoAutoplay:s,width:ae})]}),N&&(0,L.jsx)(Pa,{items:xe,onClose:()=>P(null),x:N.x,y:N.y}),(0,L.jsx)(So,{confirmLabel:l(ie===`empty`?`Empty the bin`:ie===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:ie===`empty`?a(l,z.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):ie===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):a(l,de.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>F(null),onConfirm:()=>{ie===`empty`?ge():ie===`purge`?ve():he()},open:ie!==null,title:l(ie===`empty`?`Empty the recycle bin`:ie===`purge`?`Delete every orphan`:`Delete permanently`)})]});function Ce(e){re(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return In(`yafm.recycle.sort`,n),n})}}function lp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return dp(e).localeCompare(dp(t),void 0,{sensitivity:`base`})}}function up(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function dp(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function fp({entry:e}){let t=rn(e.originalPath,e.isDirectory);return(0,L.jsx)(Mp,{children:t?(0,L.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,L.jsx)(Kr,{}):(0,L.jsx)(qr,{})})}var pp=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,mp=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,hp=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,gp=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,_p=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,vp=i.button`
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
`,yp=i(vp)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,bp=i.button`
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
`,xp=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Sp=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Cp=i.div`
    display: grid;
    grid-template-columns: ${Sp};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,wp=i.button`
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
`,Tp=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Ep=i.div`
    display: grid;
    grid-template-columns: ${Sp};
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
`,Dp=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Op=i.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,kp=i.button`
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
`,Ap=i.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,jp=i(Dp)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Mp=i.span`
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
`,Np=i(Dp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Pp=i(Dp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Fp=i(Dp)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Ip=i(Dp)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Lp=i.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Rp=i.button`
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
`,zp=i.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Bp=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Vp=i.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Hp=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Up(){return I.available?(await I.request(`app.tags`)).tags:[]}async function Wp(e){return!I.available||!e?!1:(await I.request(`app.tags.delete`,{name:e})).ok}async function Gp(e,t){return!I.available||!e?[]:(await I.request(`app.tags.create`,{name:e,color:t})).tags}async function Kp(e,t){return!I.available||!e?!1:(await I.request(`app.tags.color`,{name:e,color:t})).ok}async function qp(e,t){return!I.available||!e||!t?!1:(await I.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Jp(){let e=B();return(0,L.jsx)(Yp,{title:e(`Always applies to every folder`),children:e(`Global`)})}var Yp=i.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Xp=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function Zp(e){return`"${e.replaceAll(`"`,``)}"`}function Qp(e){let t=document.documentElement.style;for(let n of Xp){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Zp(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function $p(){return I.available?(await I.request(`app.fonts`)).fonts??[]:[]}function em({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=B(),[s,c]=(0,O.useState)(null),[l,u]=(0,O.useState)(``),d=(0,O.useRef)(null),f=(0,O.useRef)(null),p=(0,O.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,O.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(tm,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,L.jsx)(nm,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,L.jsx)(rm,{children:`▾`})]}),s&&(0,_a.createPortal)((0,L.jsxs)(im,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,L.jsxs)(am,{children:[(0,L.jsx)(Yr,{size:12}),(0,L.jsx)(om,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,L.jsxs)(sm,{children:[(0,L.jsxs)(cm,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,L.jsxs)(um,{children:[n,` `,(0,L.jsx)(fm,{children:o(`(default)`)})]}),!e&&(0,L.jsx)(li,{size:11})]}),p.map(t=>(0,L.jsxs)(cm,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,L.jsxs)(lm,{children:[(0,L.jsx)(um,{children:t}),(0,L.jsx)(dm,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,L.jsx)(li,{size:11})]},t)),p.length===0&&(0,L.jsx)(pm,{children:o(`No matching font.`)})]})]}),document.body)]})}var tm=i.button`
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
`,nm=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rm=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,im=i.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${Oa}
`,am=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,om=i.input`
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
`,sm=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,cm=i.button`
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
`,lm=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,um=i.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dm=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fm=i.span`
    color: var(--text-muted);
    font-size: 10px;
`,pm=i.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,mm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],hm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,gm=`en`,_m=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],vm=new Date(2026,10,5,16,8).getTime(),ym=`system`,bm={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},xm=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Sm=`yafm.colors.recent`;function Cm(){let e=Fn(Sm);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function wm({appInfo:e,focusSection:n,onSettingsChanged:r,find:i,onSearchMatches:o}){let s=B(),[c,l]=(0,O.useState)([]),[u,f]=(0,O.useState)(null),[h,g]=(0,O.useState)(null),[v,b]=(0,O.useState)(null),[x,S]=(0,O.useState)(``),[C,T]=(0,O.useState)(`file`),[E,D]=(0,O.useState)(!1),[te,k]=(0,O.useState)(!1),[A,j]=(0,O.useState)(null),[ne,M]=(0,O.useState)(!1),[re,N]=(0,O.useState)(!1),[P,ie]=(0,O.useState)(null),[F,ae]=(0,O.useState)(null),[I,oe]=(0,O.useState)(null),[R,z]=(0,O.useState)(!1),[ce,le]=(0,O.useState)(null),[V,ue]=(0,O.useState)(null),[de,H]=(0,O.useState)(!1),[fe,pe]=(0,O.useState)([]),[me,he]=(0,O.useState)(null),[ge,ve]=(0,O.useState)(!1),[U,ye]=(0,O.useState)(null),[be,xe]=(0,O.useState)(``),[W,Se]=(0,O.useState)(fs),[Ce,we]=(0,O.useState)(null),[Te,Ee]=(0,O.useState)(null),[De,Oe]=(0,O.useState)(``),[ke,Ae]=(0,O.useState)(``),[je,Me]=(0,O.useState)(null),[Ne,Pe]=(0,O.useState)(Cm),[Fe,Ie]=(0,O.useState)({}),[Le,Re]=(0,O.useState)(null),[ze,Be]=(0,O.useState)(null),[He,Ue]=(0,O.useState)(!1),[We,G]=(0,O.useState)(!1),[Qe,et]=(0,O.useState)(null),[tt,lt]=(0,O.useState)(xm[0].id),[ft,pt]=(0,O.useState)([]),[mt,ht]=(0,O.useState)(null),[gt,_t]=(0,O.useState)(null),[vt,yt]=(0,O.useState)(null),[bt,xt]=(0,O.useState)(!1),[St,Ct]=(0,O.useState)(``),wt=(0,O.useRef)(null),Tt=(0,O.useRef)({}),Et=h?.defaultView??_e,Dt=h?.themePresets??[],Ot=F?F.registered&&F.pathMatches:h?.archiveHandler??!1,kt=F?.registered??h?.archiveHandler??!1,At=I?I.registered&&I.pathMatches:h?.defaultFileManager??!1;Yu(wt,i??null,`section`,o??(()=>void 0),[h]),(0,O.useEffect)(()=>{let e=wt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){lt(xm[xm.length-1].id);return}let n=t+110,r=xm[0].id;for(let{id:e}of xm){let t=Tt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}lt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let jt=e=>t=>{Tt.current[e]=t},Mt=e=>{Tt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),lt(e)};(0,O.useEffect)(()=>{n&&Mt(n)},[n]),(0,O.useEffect)(()=>{se().then(e=>l(e.available),()=>l([]))},[]),(0,O.useEffect)(()=>{$p().then(pt,()=>pt([]))},[]),(0,O.useEffect)(()=>{ut().then(_t,()=>_t(null))},[]),(0,O.useEffect)(()=>{nt().then(Be,()=>void 0)},[]),(0,O.useEffect)(()=>{Ve().then(f,()=>f(null)),Ge().then(g,()=>g(null)),st().then(M,()=>M(!1)),Je().then(ae,()=>ae(null)),qe().then(oe,()=>oe(null)),Up().then(pe,()=>pe([]))},[]),(0,O.useEffect)(()=>{let e=()=>void at().then(j,()=>j(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let K=async e=>{if(!h)return;let t={...h,...e};Object.keys(e).every(e=>t[e]===h[e])||(g(t),$t(),g(await Ze(t)),r())},Nt=async e=>{let t=await ta(e);if(!t)return;let n=h?.backgroundCustom??[];await K({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Pt=async()=>{let e=St.trim();if(!h||!ee(e))return;let t=h.backgroundCustom??[];Ct(``),await K({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Ft=e=>{if(!h)return;let t=h.backgroundSource;K({backgroundCustom:h.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},It=async()=>{if(!h)return;let t=await ea();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.protectedPaths.includes(r)||await K({protectedPaths:[...h.protectedPaths,r]})},Rt=()=>{let e=De.trim();h&&e&&!h.protectedPaths.includes(e)&&(Oe(``),K({protectedPaths:[...h.protectedPaths,e]}))},zt=()=>{if(!h||!Ce)return;let e=Ce.value.trim(),t=Ce.from;we(null),e.length!==0&&e!==t&&K({protectedPaths:h.protectedPaths.map(n=>n===t?e:n)})},Bt=e=>{h&&K({protectedPaths:h.protectedPaths.filter(t=>t!==e)})},Ut=async()=>{let e=await Ke();e.length>0&&await K({protectedPaths:e})},Wt=()=>{if(!h||!Te)return;let e=Te.value.trim(),t=Te.from;Ee(null),e&&e!==t&&K({directoryIndexBlacklist:h.directoryIndexBlacklist.map(n=>n===t?e:n)})},Gt=()=>{let e=ke.trim();h&&e&&!h.directoryIndexBlacklist.includes(e)&&(Ae(``),K({directoryIndexBlacklist:[...h.directoryIndexBlacklist,e]}))},Kt=async()=>{if(!h)return;let t=await ea();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.directoryIndexBlacklist.includes(r)||await K({directoryIndexBlacklist:[...h.directoryIndexBlacklist,r]})},qt=e=>{h&&K({directoryIndexBlacklist:h.directoryIndexBlacklist.filter(t=>t!==e)})},Jt=()=>{K({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Yt=()=>{if(!h||je===null)return;let e=je.trim()||`yyyy/MM/dd HH:mm`;Me(null),e!==h.timeFormatPattern&&K({timeFormatPattern:e})},Xt=(e,t)=>{Pe(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return In(Sm,i),i})},Zt=m(h?.accentColor,w),Qt=m(h?.secondaryColor,y),q=(e,t)=>{h&&(Xt(`accent`,Zt),Xt(`secondary`,Qt),K({accentColor:e,secondaryColor:t}))},J=(e,t)=>{h&&(Xt(e,e===`accent`?Zt:Qt),K(e===`accent`?{accentColor:t}:{secondaryColor:t}))},en=async()=>{Ue(!0),G(!1);try{Be(await rt())}catch{G(!0)}finally{Ue(!1)}},tn=async()=>{if(!h||!Le)return;let e=Le.name.trim()||`${Le.accent.toUpperCase()} / ${Le.secondary.toUpperCase()}`,t=[...h.themePresets,{name:e,accent:Le.accent,secondary:Le.secondary}];Re(null),await K({themePresets:t})},nn=async e=>{h&&await K({themePresets:h.themePresets.filter((t,n)=>n!==e)})},rn=e=>{let t=Qe;et(null),t&&t.role===e&&(e===`accent`?Zt:Qt).toLowerCase()!==t.color.toLowerCase()&&Xt(e,t.color)},an=async()=>{let e=be.trim();if(e&&!ge){ve(!0),ye(null);try{pe(await Gp(e,W)),xe(``)}catch{ye(s(`Could not add the tag.`))}finally{ve(!1)}}},on=async(e,t)=>{pe(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Kp(e,t)||ye(s(`Could not change the tag's color.`))},sn=async e=>{if(ge)return;ve(!0),ye(null);let t=await Wp(e);pe(await Up()),t||ye(`"${e}" is still used by a folder whose index could not be updated.`),ve(!1)},cn=async()=>{let e=me;if(!e||ge)return;let t=e.value.trim();t.length===0||t===e.name?he(null):(ve(!0),ye(null),await qp(e.name,t)?(pe(await Up()),he(null)):ye(`Could not rename "${e.name}".`),ve(!1))},ln=async e=>{let t=new Set(Et.columns??_e.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=gc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await K({defaultView:{...Et,columns:n}})},un=async()=>{if(re)return;let e=!ne;N(!0),ie(null);try{let t=await ct(e);M(t),g(e=>e&&{...e,linksEnabled:t}),r(),t!==e&&ie(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ie(`The request to Windows failed. Try again.`)}finally{N(!1)}},dn=async()=>{if(!R){z(!0),le(null);try{let e=await Ye();ae(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),r(),t||le(`Windows did not accept the archive registration. Try again.`)}catch{le(`The request to Windows failed. Try again.`)}finally{z(!1)}}},fn=async()=>{if(!R){z(!0),le(null);try{let e=await Xe();ae(e),g(e=>e&&{...e,archiveHandler:!1}),r(),e.registered&&le(`The registration is still there. Try turning it off again.`)}catch{le(`The request to Windows failed. Try again.`)}finally{z(!1)}}},pn=async(e,t)=>{if(!h)return;let n={...h.extensionIcons};t===null?delete n[e]:n[e]=t,await K({extensionIcons:n})},mn={...Lt,...h?.shortcuts};(0,O.useEffect)(()=>{if(!V)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ue(null);return}let t=Vt(e);t&&(ue(null),K({shortcuts:{...mn,[V]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[V,h]),(0,O.useEffect)(()=>{if(!de)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){H(!1);return}let t=Vt(e);t&&(H(!1),K({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[de,h]);let hn=async e=>{await K({recentLimit:Math.min(Math.max(e,0),50)})},gn=(e,t)=>{let n=t??Fe[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Ie(t=>({...t,[e]:void 0})),K(i)},_n=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;ht(null),await K({sharePortMode:`custom`,sharePort:n}),await sd(n,`custom`)},vn=async e=>{let t=e===`custom`,n=t?h?.sharePort??8080:null;await K({sharePortMode:t?`custom`:`random`,sharePort:n}),await sd(n,t?`custom`:`random`)},yn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;xt(!0),yt(null);try{let e=await dt(t);_t(e),yt(e.error),e.error||await K({startupMode:t})}finally{xt(!1)}},bn=async e=>{await K({galleryRoots:e.length>0?e:null})},xn=async()=>{let e=await ea(),t=h?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await bn([...t,e])},Sn=async()=>{let e=x.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await pn(e,C),S(``))},Cn=async()=>{k(!0);try{let e=await ea();if(!e)return;let t=await ta([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await $e(e.replace(/[\\/][^\\/]+$/,``),_(e),`file:${t}`)&&($t(),b({folder:e,icon:t}))}finally{k(!1)}},wn=async(e,t)=>{let n={...h?.fonts};t?n[e]=t:delete n[e],await K({fonts:n})};return(0,L.jsxs)(Im,{children:[(0,L.jsxs)(Lm,{ref:wt,children:[(0,L.jsxs)(Rm,{ref:jt(`application`),children:[(0,L.jsx)(Fm,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Version`)}),(0,L.jsx)(mh,{children:e?`v${e.version}`:`—`})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Platform`)}),(0,L.jsx)(mh,{children:e?.platform??`—`})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Language`)}),(0,L.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(Mm,{disabled:!h,onChange:e=>void K({language:e}),options:[ym,...c.length>0?c:[gm]],value:h?.language??gm})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Picker window size`)}),(0,L.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(wh,{inputMode:`numeric`,onBlur:e=>gn(`width`,e.currentTarget.value),onChange:e=>Ie(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Fe.width??String(h?.pickerWindowWidth??1200)}),(0,L.jsx)(mh,{children:`×`}),(0,L.jsx)(wh,{inputMode:`numeric`,onBlur:e=>gn(`height`,e.currentTarget.value),onChange:e=>Ie(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Fe.height??String(h?.pickerWindowHeight??800)})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Web server port`)}),(0,L.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(Ya,{disabled:!h,onChange:e=>void vn(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:h?.sharePortMode??`random`,width:160})})]}),h?.sharePortMode===`custom`&&(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Custom port`)}),(0,L.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(wh,{inputMode:`numeric`,onBlur:e=>void _n(e.currentTarget.value),onChange:e=>ht(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:mt??(h?.sharePort?String(h.sharePort):``)})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Link paths`)}),(0,L.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(Ya,{disabled:!h,onChange:e=>void K({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:h?.linkPathMode??`relative`,width:160})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Global hotkey`)}),(0,L.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(ng,{$listening:de,disabled:!h,onClick:()=>H(!0),type:`button`,children:de?s(`Press a key…`):h?.globalHotkey?Ht(h.globalHotkey):s(`None`)}),h?.globalHotkey&&(0,L.jsx)(_h,{onClick:()=>void K({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,L.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),P&&(0,L.jsx)(ph,{children:P})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(xh,{$on:ne,children:s(ne?`Active`:`Off`)}),(0,L.jsx)(Sh,{$on:ne,disabled:re,onClick:()=>void un(),title:s(ne?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,L.jsx)(Ch,{})})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,L.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),I?.registered&&!I.pathMatches&&(0,L.jsx)(ph,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:I.registeredPath??`?`})})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(xh,{$on:At,children:s(At?`Active`:`Off`)}),(0,L.jsx)(Sh,{$on:At,disabled:!h,onClick:()=>void(async()=>{let e=I?.registered&&!I.pathMatches?!0:!h?.defaultFileManager;await K({defaultFileManager:e}),oe(await qe().catch(()=>null))})(),title:s(At?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,L.jsx)(Ch,{})})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Open archives with this app`)}),(0,L.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,L.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),F?.registered&&!F.pathMatches&&(0,L.jsx)(ph,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:F.registeredPath??`?`})}),ce&&(0,L.jsx)(ph,{children:ce})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(xh,{$on:Ot,children:s(Ot?`Active`:`Off`)}),(0,L.jsx)(rg,{disabled:!h||R||Ot,onClick:()=>void dn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,L.jsx)(rg,{onClick:()=>void it(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,L.jsx)(bh,{disabled:!h||R||!kt,onClick:()=>void fn(),type:`button`,children:s(`Unregister`)})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,L.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,L.jsx)(Sh,{$on:h?.restoreTabs??!0,disabled:!h,onClick:()=>void K({restoreTabs:!h?.restoreTabs}),type:`button`,children:(0,L.jsx)(Ch,{})})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`startup`),children:[(0,L.jsx)(Fm,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Start with the computer`)}),(0,L.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),vt&&(0,L.jsx)(ph,{children:vt}),gt&&!gt.supported&&(0,L.jsx)(ph,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(Ya,{disabled:!h||bt||gt!==null&&!gt.supported,onChange:e=>void yn(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:gt?.mode??h?.startupMode??`none`,width:170})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,L.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(Sh,{$on:h?.startHidden??!1,disabled:!h,onClick:()=>void K({startHidden:!h?.startHidden}),type:`button`,children:(0,L.jsx)(Ch,{})})})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`fonts`),children:[(0,L.jsx)(Fm,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,L.jsxs)(Bm,{children:[Xp.map(e=>(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(e.label)}),(0,L.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(em,{defaultLabel:s(e.fallback),disabled:!h,fonts:ft,onChange:t=>void wn(e.id,t),sample:e.sample,value:h?.fonts?.[e.id]??null})})]},e.id)),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Reset`)}),(0,L.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(rg,{onClick:()=>void K({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`time`),children:[(0,L.jsx)(Fm,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,L.jsx)(Bm,{children:(0,L.jsxs)(Vm,{children:[(0,L.jsxs)(Hm,{children:[(0,L.jsx)(Q,{children:s(`Format`)}),(0,L.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,L.jsx)(Xh,{children:_m.map(e=>(0,L.jsx)(Zh,{$active:(h?.timeFormat??`24`)===e.id,onClick:()=>void K({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(h?.timeFormat??`24`)===`custom`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Qh,{"aria-label":s(`Pattern`),onBlur:Yt,onChange:e=>Me(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Yt()):e.key===`Escape`&&Me(null)},spellCheck:!1,value:je??h?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,L.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,L.jsxs)($h,{children:[(0,L.jsx)(`span`,{children:s(`Preview`)}),(0,L.jsx)(`code`,{children:p(vm,h?.timeFormat,je??h?.timeFormatPattern)})]})]})})]}),(0,L.jsxs)(Rm,{ref:jt(`updates`),children:[(0,L.jsx)(Fm,{note:`The running build and the newest one published.`,title:`Updates`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Current version`)}),(0,L.jsx)(mh,{children:e?`v${e.version}`:`—`})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Latest version`)}),(0,L.jsx)(mh,{children:ze?`v${ze.latest}`:`—`})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Check for updates`)}),(0,L.jsx)($,{children:ze&&!ze.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(rg,{disabled:He,onClick:()=>void en(),type:`button`,children:s(He?`Checking…`:`Check now`)})})]}),ze?.available&&(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Version {version} is available.`,{version:ze.latest})}),(0,L.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(rg,{onClick:()=>void it(hm),type:`button`,children:s(`Open release page`)})})]}),We&&(0,L.jsx)(X,{children:(0,L.jsx)(ph,{children:s(`Could not check for updates.`)})})]})]}),(0,L.jsxs)(Rm,{ref:jt(`colors`),children:[(0,L.jsx)(Fm,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(Vm,{children:[(0,L.jsxs)(Hm,{children:[(0,L.jsx)(Q,{children:s(`Presets`)}),(0,L.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,L.jsxs)(Um,{children:[Ll.map(e=>(0,L.jsxs)(Wm,{$on:Zt.toLowerCase()===e.accent&&Qt.toLowerCase()===e.secondary,onClick:()=>q(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,L.jsxs)(Zm,{children:[(0,L.jsx)(`i`,{style:{background:e.accent}}),(0,L.jsx)(`i`,{style:{background:e.secondary}})]}),(0,L.jsx)(Gm,{children:s(e.name)})]},e.name)),Dt.map((e,t)=>(0,L.jsxs)(Km,{children:[(0,L.jsxs)(Wm,{$on:Zt.toLowerCase()===e.accent.toLowerCase()&&Qt.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>q(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,L.jsxs)(Zm,{children:[(0,L.jsx)(`i`,{style:{background:e.accent}}),(0,L.jsx)(`i`,{style:{background:e.secondary}})]}),(0,L.jsx)(Gm,{children:e.name})]}),(0,L.jsx)(qm,{onClick:()=>void nn(t),title:s(`Remove preset`),type:`button`,children:(0,L.jsx)(ui,{size:9})})]},`${e.name}-${t}`)),Le?(0,L.jsxs)(Ym,{children:[(0,L.jsxs)(Zm,{children:[(0,L.jsx)(`i`,{style:{background:Le.accent}}),(0,L.jsx)(`i`,{style:{background:Le.secondary}})]}),(0,L.jsx)(Xm,{autoFocus:!0,maxLength:24,onChange:e=>Re({...Le,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),tn()):e.key===`Escape`&&(e.preventDefault(),Re(null))},placeholder:s(`Preset name`),spellCheck:!1,value:Le.name}),(0,L.jsx)(_h,{onClick:()=>void tn(),type:`button`,children:s(`Save`)}),(0,L.jsx)(_h,{onClick:()=>Re(null),type:`button`,children:s(`Cancel`)})]}):(0,L.jsxs)(Jm,{disabled:!h,onClick:()=>Re({name:``,accent:Zt,secondary:Qt}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,L.jsx)(Qr,{size:12}),s(`Add preset`)]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Accent color`)}),(0,L.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(Pm,{colors:Ne.accent,current:Zt,onApply:e=>J(`accent`,e)}),(0,L.jsx)(vh,{"aria-label":s(`Accent color`),disabled:!h,onBlur:()=>rn(`accent`),onChange:e=>void K({accentColor:e.target.value}),onFocus:()=>et({role:`accent`,color:Zt}),type:`color`,value:Zt}),(0,L.jsx)(yh,{children:Zt.toUpperCase()})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Secondary color`)}),(0,L.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(Pm,{colors:Ne.secondary,current:Qt,onApply:e=>J(`secondary`,e)}),(0,L.jsx)(vh,{"aria-label":s(`Secondary color`),disabled:!h,onBlur:()=>rn(`secondary`),onChange:e=>void K({secondaryColor:e.target.value}),onFocus:()=>et({role:`secondary`,color:Qt}),type:`color`,value:Qt}),(0,L.jsx)(yh,{children:Qt.toUpperCase()})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Reset colors`)}),(0,L.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(_h,{disabled:!h,onClick:()=>{Xt(`accent`,Zt),Xt(`secondary`,Qt),K({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`background`),children:[(0,L.jsx)(Fm,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(Vm,{children:[(0,L.jsxs)(Hm,{children:[(0,L.jsx)(Q,{children:s(`Wallpaper`)}),(0,L.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,L.jsx)(Ih,{children:(0,L.jsx)(Lh,{$active:!h?.backgroundSource,onClick:()=>void K({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,L.jsx)(Hh,{children:s(`None`)})})}),(0,L.jsxs)(Nh,{children:[Bl.map(e=>(0,L.jsxs)(Ph,{children:[(0,L.jsx)(Fh,{children:s(e.name)}),(0,L.jsx)(Ih,{children:e.variants.map(t=>(0,L.jsx)(Lh,{$active:h?.backgroundSource===t.id,onClick:()=>void K({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,L.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,L.jsxs)(Ph,{children:[(0,L.jsx)(Fh,{children:s(`Motion`)}),(0,L.jsx)(Ih,{children:zl.map(e=>(0,L.jsxs)(Lh,{$active:h?.backgroundSource===e.id,onClick:()=>void K({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,L.jsx)(`img`,{alt:``,src:e.poster}),(0,L.jsx)(Bh,{children:(0,L.jsx)(hi,{size:11})})]},e.id))})]}),(0,L.jsxs)(Ph,{children:[(0,L.jsx)(Fh,{children:s(`Custom`)}),(0,L.jsxs)(Ih,{children:[(h?.backgroundCustom??[]).map(e=>(0,L.jsx)(jm,{active:h?.backgroundSource===`file:${e}`||h?.backgroundSource===`url:${e}`||h?.backgroundSource===e,onRemove:()=>Ft(e),onSelect:()=>void K({backgroundSource:ee(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,L.jsxs)(Vh,{onClick:()=>void Nt([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,L.jsx)(Qr,{size:12}),s(`Image…`)]}),(0,L.jsxs)(Vh,{onClick:()=>void Nt([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,L.jsx)(Qr,{size:12}),s(`Video…`)]})]})]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Image or video URL`)}),(0,L.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(wh,{onChange:e=>Ct(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Pt()},placeholder:`https://…`,value:St}),(0,L.jsx)(_h,{disabled:!ee(St),onClick:()=>void Pt(),type:`button`,children:s(`Add`)})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Blur`)}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(Mh,{max:40,min:0,onChange:e=>void K({backgroundBlur:Number(e.target.value)}),type:`range`,value:h?.backgroundBlur??0}),(0,L.jsxs)(mh,{children:[h?.backgroundBlur??0,`px`]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Saturation`)}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(Mh,{max:200,min:0,onChange:e=>void K({backgroundSaturation:Number(e.target.value)}),type:`range`,value:h?.backgroundSaturation??100}),(0,L.jsxs)(mh,{children:[h?.backgroundSaturation??100,`%`]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Brightness`)}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(Mh,{max:150,min:40,onChange:e=>void K({backgroundBrightness:Number(e.target.value)}),type:`range`,value:h?.backgroundBrightness??100}),(0,L.jsxs)(mh,{children:[h?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`safety`),children:[(0,L.jsx)(Fm,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(Vm,{children:[(0,L.jsxs)(Hm,{children:[(0,L.jsx)(Q,{children:s(`Protected folders`)}),(0,L.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,L.jsx)(Uh,{children:(h?.protectedPaths??[]).map(e=>(0,L.jsxs)(Wh,{children:[(0,L.jsx)(Gh,{"aria-label":s(`Protected path`),onBlur:zt,onChange:t=>we({from:e,value:t.target.value}),onFocus:()=>we({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),zt()):e.key===`Escape`&&we(null)},spellCheck:!1,value:Ce?.from===e?Ce.value:e}),(0,L.jsx)(Kh,{onClick:()=>Bt(e),title:s(`Remove`),type:`button`,children:(0,L.jsx)(ui,{size:10})})]},e))}),(0,L.jsxs)(Jh,{children:[(0,L.jsx)(Yh,{"aria-label":s(`New protected rule`),onChange:e=>Oe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Rt())},placeholder:`*.log`,spellCheck:!1,value:De}),(0,L.jsx)(_h,{onClick:Rt,type:`button`,children:s(`Add the rule`)})]}),(0,L.jsxs)(qh,{children:[(0,L.jsx)(_h,{onClick:()=>void Ut(),type:`button`,children:s(`Restore defaults`)}),(0,L.jsx)(_h,{onClick:()=>void It(),type:`button`,children:s(`Add folder…`)})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Confirmation delay`)}),(0,L.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(Mh,{max:30,min:2,onChange:e=>void K({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:h?.deleteDelaySeconds??5}),(0,L.jsxs)(mh,{children:[h?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`tags`),children:[(0,L.jsx)(Fm,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(fh,{children:[(0,L.jsx)(hh,{"aria-label":s(`Color of the new tag`),onChange:e=>Se(e.target.value),type:`color`,value:W}),(0,L.jsx)(wh,{onChange:e=>xe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),an())},placeholder:s(`New tag`),spellCheck:!1,value:be})]}),(0,L.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(_h,{disabled:ge||be.trim().length===0,onClick:()=>void an(),type:`button`,children:s(`Add`)})})]}),U&&(0,L.jsx)(X,{children:(0,L.jsx)(ph,{children:U})}),fe.length===0&&(0,L.jsx)(X,{children:(0,L.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),fe.map(e=>(0,L.jsx)(X,{children:me?.name===e.name?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(fh,{children:[(0,L.jsx)(hh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void on(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,L.jsx)(gh,{autoFocus:!0,disabled:ge,onChange:t=>he({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),cn()):e.key===`Escape`&&(e.preventDefault(),he(null))},value:me.value})]}),(0,L.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(_h,{disabled:ge,onClick:()=>void cn(),type:`button`,children:s(`Save`)}),(0,L.jsx)(_h,{disabled:ge,onClick:()=>he(null),type:`button`,children:s(`Cancel`)})]})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(fh,{children:[(0,L.jsx)(hh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void on(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,L.jsx)(Q,{children:e.name})]}),(0,L.jsx)($,{children:a(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(_h,{disabled:ge,onClick:()=>he({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,L.jsxs)(bh,{disabled:ge,onClick:()=>void sn(e.name),type:`button`,children:[(0,L.jsx)(ci,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,L.jsxs)(Rm,{ref:jt(`files-view`),children:[(0,L.jsx)(Fm,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Default view`)}),(0,L.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsxs)(Ah,{children:[(0,L.jsx)(jh,{$on:Et.mode===`list`,onClick:()=>void K({defaultView:{...Et,mode:`list`}}),type:`button`,children:s(`List`)}),(0,L.jsx)(jh,{$on:Et.mode===`grid`,onClick:()=>void K({defaultView:{...Et,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`List icon size`)}),(0,L.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(Mh,{max:48,min:16,onChange:e=>void K({defaultView:{...Et,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Et.iconSize}),(0,L.jsxs)(mh,{children:[Et.iconSize,`px`]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Grid size`)}),(0,L.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(Mh,{max:260,min:100,onChange:e=>void K({defaultView:{...Et,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Et.gridSize}),(0,L.jsxs)(mh,{children:[Et.gridSize,`px`]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(fh,{children:[(0,L.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,L.jsx)(Jp,{})]}),(0,L.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,L.jsx)(Sh,{$on:h?.showCheckboxes??!0,disabled:!h,onClick:()=>void K({showCheckboxes:!(h?.showCheckboxes??!0)}),type:`button`,children:(0,L.jsx)(Ch,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(fh,{children:[(0,L.jsx)(Q,{children:s(`Open with a single click`)}),(0,L.jsx)(Jp,{})]}),(0,L.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,L.jsx)(Sh,{$on:h?.openOnSingleClick??!1,disabled:!h,onClick:()=>void K({openOnSingleClick:!(h?.openOnSingleClick??!1)}),type:`button`,children:(0,L.jsx)(Ch,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(fh,{children:[(0,L.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,L.jsx)(Jp,{})]}),(0,L.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,L.jsx)(Sh,{$on:h?.confirmDelete??!1,disabled:!h,onClick:()=>void K({confirmDelete:!(h?.confirmDelete??!1)}),type:`button`,children:(0,L.jsx)(Ch,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(fh,{children:[(0,L.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,L.jsx)(Jp,{})]}),(0,L.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,L.jsx)(Sh,{$on:h?.previewVideoAudio??!1,disabled:!h,onClick:()=>void K({previewVideoAudio:!(h?.previewVideoAudio??!1)}),type:`button`,children:(0,L.jsx)(Ch,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(fh,{children:[(0,L.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,L.jsx)(Jp,{})]}),(0,L.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,L.jsx)(Sh,{$on:h?.previewVideoAutoplay??!1,disabled:!h,onClick:()=>void K({previewVideoAutoplay:!(h?.previewVideoAutoplay??!1)}),type:`button`,children:(0,L.jsx)(Ch,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(fh,{children:[(0,L.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,L.jsx)(Jp,{})]}),(0,L.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,L.jsx)(Sh,{$on:Et.showImages??!0,onClick:()=>void K({defaultView:{...Et,showImages:!(Et.showImages??!0)}}),type:`button`,children:(0,L.jsx)(Ch,{})})]}),(0,L.jsx)(X,{children:(0,L.jsxs)(Z,{children:[(0,L.jsxs)(fh,{children:[(0,L.jsx)(Q,{children:s(`Columns`)}),(0,L.jsx)(Jp,{})]}),(0,L.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,L.jsx)(X,{children:(0,L.jsxs)(eg,{children:[gc.map(e=>(0,L.jsxs)(tg,{children:[(0,L.jsx)(`input`,{checked:(Et.columns??[]).includes(e.id),onChange:()=>void ln(e.id),type:`checkbox`}),(0,L.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,L.jsxs)(tg,{children:[(0,L.jsx)(`input`,{checked:(Et.columns??[]).includes(`linkTarget`),onChange:()=>void ln(`linkTarget`),type:`checkbox`}),(0,L.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,L.jsxs)(sg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,L.jsx)(Jp,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,L.jsxs)(Rm,{ref:jt(`shortcuts`),children:[(0,L.jsx)(Fm,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,L.jsxs)(Bm,{children:[mm.map(({id:e,label:t,note:n})=>(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(t)}),(0,L.jsx)($,{children:s(n)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(ng,{$listening:V===e,onClick:()=>ue(e),type:`button`,children:V===e?s(`Press a key…`):Ht(mn[e])})})]},e)),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Reset`)}),(0,L.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(rg,{onClick:()=>void K({shortcuts:{...Lt}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`memory`),children:[(0,L.jsx)(Fm,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(sh,{children:[(0,L.jsxs)(ch,{children:[(0,L.jsx)(Q,{children:s(`Process memory`)}),(0,L.jsx)(mh,{children:A?`${d(A.private)} · ${oh(A.private,A.available)}`:`—`})]}),(0,L.jsx)(lh,{children:(0,L.jsx)(uh,{$ratio:A?A.private/Math.max(A.available,1):0,$tone:t(A?A.private/Math.max(A.available,1):0)})}),(0,L.jsx)($,{children:A?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:d(A.available),resident:d(A.workingSet)}):s(`Reading the current usage…`)})]}),(0,L.jsxs)(sh,{children:[(0,L.jsxs)(ch,{children:[(0,L.jsx)(Q,{children:s(`Managed heap`)}),(0,L.jsx)(mh,{children:A?`${d(A.managed)} · ${oh(A.managed,A.private)}`:`—`})]}),(0,L.jsx)(lh,{children:(0,L.jsx)(uh,{$ratio:A?A.managed/Math.max(A.private,1):0,$tone:`var(--accent-secondary)`})}),(0,L.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,L.jsxs)(sh,{children:[(0,L.jsxs)(ch,{children:[(0,L.jsx)(Q,{children:s(`Native and runtime`)}),(0,L.jsx)(mh,{children:A?`${d(Math.max(0,A.private-A.managed))} · ${oh(Math.max(0,A.private-A.managed),A.private)}`:`—`})]}),(0,L.jsx)(lh,{children:(0,L.jsx)(uh,{$ratio:A?Math.max(0,A.private-A.managed)/Math.max(A.private,1):0,$tone:`var(--accent-primary)`})}),(0,L.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Free memory`)}),(0,L.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(rg,{onClick:()=>void ot().then(j),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`overview`),children:[(0,L.jsx)(Fm,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,L.jsx)(Bm,{children:(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Recent items`)}),(0,L.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(wh,{max:50,min:0,onChange:e=>void hn(Number(e.target.value)),type:`number`,value:h?.recentLimit??10})})]})})]}),(0,L.jsxs)(Rm,{ref:jt(`gallery`),children:[(0,L.jsx)(Fm,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,L.jsxs)(Bm,{children:[(h?.galleryRoots??[]).map(e=>(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:_(e)}),(0,L.jsx)($,{children:e})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(ig,{onClick:()=>void bn((h?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,L.jsx)(ui,{size:12})})})]},e)),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Scan folders`)}),(0,L.jsx)($,{children:(h?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,L.jsx)(dh,{children:(0,L.jsx)(rg,{onClick:()=>void xn(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`icons`),children:[(0,L.jsx)(Fm,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Use system file icons`)}),(0,L.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,L.jsx)(Sh,{$on:h?.systemIcons??!1,disabled:!h,onClick:()=>void K({systemIcons:!h?.systemIcons}),type:`button`,children:(0,L.jsx)(Ch,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,L.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,L.jsx)(Sh,{$on:h?.customFolderIcons??!1,disabled:!h,onClick:()=>void K({customFolderIcons:!h?.customFolderIcons}),type:`button`,children:(0,L.jsx)(Ch,{})})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`extension-icons`),children:[(0,L.jsx)(Fm,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,L.jsxs)(Bm,{children:[Object.entries(h?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:e}),(0,L.jsx)($,{children:Om(s,t)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(km,{source:t}),(0,L.jsx)(ig,{onClick:()=>void pn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,L.jsx)(ui,{size:12})})]})]},e)),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Add a rule`)}),(0,L.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,L.jsxs)(dh,{children:[(0,L.jsx)(wh,{onChange:e=>S(e.target.value),placeholder:`.psd`,spellCheck:!1,value:x}),(0,L.jsxs)(kh,{children:[(0,L.jsx)(ig,{onClick:()=>D(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,L.jsx)(km,{source:C})}),E&&(0,L.jsx)(Xu,{allowDefault:!1,onClose:()=>D(!1),onPick:e=>{T(e??`file`),D(!1)},value:C})]}),(0,L.jsx)(ig,{onClick:()=>void Sn(),title:s(`Add the rule`),type:`button`,children:(0,L.jsx)(Qr,{size:13})})]})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`folder-icons`),children:[(0,L.jsx)(Fm,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,L.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,L.jsxs)(dh,{children:[v&&(0,L.jsx)(Am,{src:v.icon}),(0,L.jsx)(rg,{disabled:te,onClick:()=>void Cn(),type:`button`,children:s(te?`Choosing…`:`Choose folder and icon…`)})]})]}),v&&(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:_(v.folder)}),(0,L.jsx)($,{children:v.folder})]}),(0,L.jsx)(dh,{children:(0,L.jsxs)(og,{children:[(0,L.jsx)(li,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,L.jsxs)(Rm,{ref:jt(`folder-index`),children:[(0,L.jsx)(Fm,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,L.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,L.jsx)(Sh,{$on:h?.writeDirectoryIndex??!0,disabled:!h,onClick:()=>void K({writeDirectoryIndex:!h?.writeDirectoryIndex}),type:`button`,children:(0,L.jsx)(Ch,{})})]}),(0,L.jsxs)(Vm,{children:[(0,L.jsxs)(Hm,{children:[(0,L.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,L.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,L.jsx)(Uh,{children:(h?.directoryIndexBlacklist??[]).map(e=>(0,L.jsxs)(Wh,{children:[(0,L.jsx)(Gh,{"aria-label":s(`Directory index blacklist rule`),onBlur:Wt,onChange:t=>Ee({from:e,value:t.target.value}),onFocus:()=>Ee({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Wt()):e.key===`Escape`&&Ee(null)},spellCheck:!1,value:Te?.from===e?Te.value:e}),(0,L.jsx)(Kh,{onClick:()=>qt(e),title:s(`Remove`),type:`button`,children:(0,L.jsx)(ui,{size:10})})]},e))}),(0,L.jsxs)(Jh,{children:[(0,L.jsx)(Yh,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>Ae(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Gt())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:ke}),(0,L.jsx)(_h,{onClick:Gt,type:`button`,children:s(`Add the rule`)})]}),(0,L.jsxs)(qh,{children:[(0,L.jsx)(_h,{onClick:Jt,type:`button`,children:s(`Restore defaults`)}),(0,L.jsx)(_h,{onClick:()=>void Kt(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(h?.writeDirectoryIndex??!0)&&(0,L.jsx)(cg,{children:Dm(s,e?.platform)})]}),(0,L.jsxs)(Rm,{ref:jt(`indexing`),children:[(0,L.jsx)(Fm,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,L.jsx)(Em,{})]}),(0,L.jsxs)(Rm,{ref:jt(`files`),children:[(0,L.jsx)(Fm,{note:`What the listings include.`,title:`Files`}),(0,L.jsxs)(Bm,{children:[(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Hidden items`)}),(0,L.jsx)(mh,{children:Tm(s,u?.showHidden)})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Protected operating system files`)}),(0,L.jsx)(mh,{children:Tm(s,u?.showSystem)})]})]}),(0,L.jsx)(sg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,L.jsxs)(th,{"aria-label":s(`Settings sections`),children:[(0,L.jsx)(nh,{children:s(`Sections`)}),(0,L.jsx)(rh,{children:xm.map(({id:e,label:t})=>(0,L.jsx)(ih,{$active:tt===e,onClick:()=>Mt(e),type:`button`,children:(0,L.jsx)(`span`,{children:s(t)})},e))}),(0,L.jsx)(ah,{children:s(`Changes are saved as you make them.`)})]})]})}function Tm(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Em(){let e=B(),[t,n]=(0,O.useState)(null);return(0,O.useEffect)(()=>{let e=!0,t=()=>Ue().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,L.jsx)(cg,{children:e(`No indexing tasks are running.`)}):(0,L.jsxs)(Bm,{children:[(0,L.jsx)(X,{children:(0,L.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,L.jsx)(X,{children:(0,L.jsx)(mh,{title:e,children:e})},e))]}):(0,L.jsx)(cg,{children:e(`Index task information is unavailable.`)})}function Dm(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Om(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function km({source:e}){let t=on(e.startsWith(`file:`)?e.slice(5):null);return(0,L.jsx)(ag,{children:t?(0,L.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,L.jsx)(Os,{name:e,size:16})})}function Am({src:e}){let t=on(e);return(0,L.jsx)(ag,{children:t&&(0,L.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function jm({path:e,active:t,onSelect:n,onRemove:r}){let i=B(),a=ee(e),o=dn(a?null:e),s=a?e:o,c=iu(e.split(/[?#]/)[0]);return(0,L.jsxs)(Rh,{children:[(0,L.jsxs)(Lh,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,L.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,L.jsx)(`img`,{alt:``,src:s})),c&&(0,L.jsx)(Bh,{children:(0,L.jsx)(hi,{size:11})})]}),(0,L.jsx)(zh,{onClick:r,title:i(`Remove`),type:`button`,children:(0,L.jsx)(ui,{size:9})})]})}function Mm({value:e,options:t,onChange:n,disabled:r}){let i=B(),[a,o]=(0,O.useState)(null),s=(0,O.useRef)(null);return(0,O.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Th,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,L.jsx)(`span`,{children:Nm(i,e)}),(0,L.jsx)(Eh,{children:(0,L.jsx)(ti,{size:11})})]}),a&&(0,_a.createPortal)((0,L.jsx)(Dh,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,L.jsxs)(Oh,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,L.jsx)(`span`,{children:Nm(i,t)}),t===e&&(0,L.jsx)(li,{size:11})]},t))}),document.body)]})}function Nm(e,t){return t===ym?e(`System default`):bm[t]??t}function Pm({colors:e,current:t,onApply:n}){let r=B();if(e.length===0)return null;let[i,...a]=e;return(0,L.jsxs)(Qm,{children:[(0,L.jsxs)(eh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,L.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,L.jsx)($m,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,L.jsx)(li,{size:9})},e))]})}function Fm({title:e,note:t,global:n=!1}){let r=B();return(0,L.jsxs)(zm,{children:[(0,L.jsxs)(`h2`,{children:[r(e),n&&(0,L.jsx)(Jp,{})]}),(0,L.jsx)(`p`,{children:r(t)})]})}var Im=i.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Lm=i.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Rm=i.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,zm=i.header`
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
`,Bm=i.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Vm=i.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Hm=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Um=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Wm=i.button`
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
`,Gm=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Km=i.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,qm=i.button`
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
`,Jm=i.button`
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
`,Ym=i.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Xm=i.input`
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
`,Zm=i.span`
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
`,Qm=i.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,$m=i.button`
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
`,eh=i.button`
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
`,th=i.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,nh=i.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,rh=i.div`
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
`,ih=i.button`
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
`,ah=i.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function oh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}var sh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,ch=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,lh=i.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,uh=i.div`
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
`,dh=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=i.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,fh=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=i.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,ph=i.span`
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
`,mh=i.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,hh=i.input`
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
`,gh=i.input`
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
`,_h=i.button`
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
`,vh=i.input`
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
`,yh=i.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,bh=i.button`
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
`,xh=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Sh=i.button`
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
`,Ch=i.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,wh=i.input`
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
`,Th=i.button`
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
`,Eh=i.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Dh=i.div`
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
`,Oh=i.button`
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
`,kh=i.span`
    position: relative;
    display: inline-flex;
`,Ah=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,jh=i.button`
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
`,Mh=i.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Nh=i.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Ph=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Fh=i.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Ih=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Lh=i.button`
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
`,Rh=i.div`
    position: relative;
    width: 102px;
    height: 58px;
`,zh=i.button`
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
`,Bh=i.span`
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
`,Vh=i.button`
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
`,Hh=i.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,Uh=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Wh=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Gh=i.input`
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
`,Kh=i.button`
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
`,qh=i.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,Jh=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,Yh=i.input`
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
`,Xh=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Zh=i.button`
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
`,Qh=i.input`
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
`,$h=i.div`
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
`,eg=i.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,tg=i.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,ng=i.button`
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
`,rg=i.button`
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
`,ig=i.button`
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
`,ag=i.span`
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
`,og=i.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,sg=i.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,cg=i.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,lg=150,ug=2500,dg=3,fg=600;function pg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:o,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,showDetails:f=!0,videoAudio:p=!1,videoAutoplay:m=!1}){let h=B(),g=dc(`gallery`),[_,y]=(0,O.useState)([]),[b,x]=(0,O.useState)(0),[S,C]=(0,O.useState)(!0),[w,T]=(0,O.useState)(null),[ee,E]=(0,O.useState)(!1),[D,te]=(0,O.useState)([]),[k,A]=(0,O.useState)(()=>{let e=Nn(`yafm.preview.width`,320);return e>=220?e:320}),j=(0,O.useRef)([]),ne=(0,O.useRef)(0),M=(0,O.useRef)(!1),re=(0,O.useRef)(!0),N=(0,O.useRef)(0),P=(0,O.useRef)(null),ie=(0,O.useRef)(0),F=(0,O.useCallback)(async e=>{let t=++N.current;C(!0),re.current=!0,T(null);try{let n=await Fe(0,lg,e);if(t!==N.current)return;j.current=n.entries,ne.current=n.total,y(n.entries),x(n.total)}catch(e){t===N.current&&T(e instanceof Error?e.message:String(e))}finally{t===N.current&&(re.current=!1,C(!1))}},[]);(0,O.useEffect)(()=>{F(!1)},[F]);let ae=(0,O.useCallback)(async()=>{if(re.current||M.current||j.current.length>=ne.current)return;let e=N.current;M.current=!0;try{let t=j.current,n=ne.current;for(let r=0;r<dg&&t.length<n;r++){let r=await Fe(t.length,lg,!1);if(e!==N.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<lg)break}if(e!==N.current)return;j.current=t,ne.current=n,(0,O.startTransition)(()=>{y(t),x(n)})}catch{}finally{M.current=!1}},[]),I=(0,O.useCallback)(e=>{ie.current||=window.requestAnimationFrame(()=>{ie.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<ug&&ae()})},[ae]);(0,O.useEffect)(()=>{let e=P.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&ae()},{root:e.parentElement,rootMargin:`${ug}px 0px`});return t.observe(e),()=>t.disconnect()},[ae]),(0,O.useEffect)(()=>{if(_.length>=b)return;let e=window.setTimeout(()=>{let e=P.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<ug&&ae()},200);return()=>window.clearTimeout(e)},[_.length,b,ae]);let oe=(0,O.useMemo)(()=>({path:``,parent:null,entries:_.map(mg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[_]),se=(0,O.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),R=(0,O.useCallback)(e=>{c?c(e):U(e)},[c]),z=(0,O.useCallback)(e=>{let t=hg(e.modified);return{id:t,label:t}},[]),ce=()=>{E(!0),F(!0).finally(()=>E(!1))},le=_.length<b,V=(0,O.useMemo)(()=>!o?.open||o.query.trim().length===0?[]:_.filter(e=>Sn(e.name,o)||Sn(e.path,o)),[_,o?.open,o?.query,o?.matchCase,o?.regex]),ue=(0,O.useMemo)(()=>o?.open?{query:o.query,matchCase:o.matchCase,regex:o.regex,mode:o.mode,currentPath:V[Math.min(o.index,Math.max(0,V.length-1))]?.path??null}:mn,[o?.open,o?.query,o?.matchCase,o?.regex,o?.mode,o?.index,V]);(0,O.useEffect)(()=>{s?.(V.length)},[V.length,s]);let de=(0,O.useCallback)(e=>{te(e),l?.(e)},[l]),H=e=>{A(e),Pn(`yafm.preview.width`,e)},fe=D.length>0?_.find(e=>e.path===D[0])??null:null,pe=fe?.name.includes(`.`)?fe.name.slice(fe.name.lastIndexOf(`.`)+1).toUpperCase():`—`,me=fe&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(fe.name)?h(`Video`):h(`Picture`),he=fe?fe.path.slice(0,Math.max(fe.path.lastIndexOf(`\\`),fe.path.lastIndexOf(`/`))):``,ge=fe?{name:fe.name,path:fe.path,isDirectory:!1,size:fe.size,modified:fe.modified,fields:[{label:h(`Type`),value:me},{label:h(`Extension`),value:pe},{label:h(`Location`),value:he},{label:h(`Full path`),value:fe.path},{label:h(`Size`),value:d(fe.size)},{label:h(`Modified`),value:v(fe.modified)},{label:h(`Created`),value:`—`}]}:null;return(0,L.jsxs)(gg,{children:[(0,L.jsxs)(yg,{children:[(0,L.jsxs)(xg,{children:[(0,L.jsx)(`span`,{children:h(`Gallery`)}),(0,L.jsx)(Sg,{children:S?h(`scanning…`):h(`{shown} of {total} pictures`,{shown:_.length,total:b})})]}),(0,L.jsxs)(bg,{children:[(0,L.jsx)(Cg,{onClick:ce,title:h(`Scan the folders again`),type:`button`,children:(0,L.jsx)(wg,{$spinning:ee,children:(0,L.jsx)(Zr,{size:14})})}),g.available&&(0,L.jsx)(Cg,{onClick:e=>g.open(e.clientX,e.clientY),title:h(`Selection menu`),type:`button`,children:(0,L.jsx)(Qi,{size:14})})]})]}),w&&(0,L.jsx)(Eg,{children:w}),!w&&!S&&b===0&&(0,L.jsx)(Eg,{children:h(`No pictures found.`)}),!w&&(S||b>0)&&(0,L.jsxs)(_g,{children:[(0,L.jsx)(vg,{children:(0,L.jsx)(yc,{confirmDelete:n,find:ue,listing:S&&_.length===0?null:oe,loading:S,error:null,view:se,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:de,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:R,onOpenFile:R,onRefresh:ce,onAddToTray:u,groupOf:z,onGridScroll:I,gridFooter:(0,L.jsx)(Tg,{$space:le?fg:1,ref:P}),allowBackgroundMenu:!1})}),f&&(0,L.jsx)(No,{emptyNote:h(`Nothing selected.`),info:ge,onWidth:H,selectionNote:D.length>1?a(h,D.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:p,videoAutoplay:m,width:k})]})]})}function mg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function hg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(b(),{weekday:`long`}):t.toLocaleDateString(b(),{year:`numeric`,month:`long`,day:`numeric`})}var gg=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,_g=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,vg=i.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,yg=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,bg=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,xg=i.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,Sg=i.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,Cg=i.button`
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
`,wg=i.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Tg=i.div`
    height: ${({$space:e})=>e}px;
`,Eg=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Dg({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:f=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,O.useState)([]),v=B(),[y,b]=(0,O.useState)(null),x=An();(0,O.useEffect)(()=>{Ge().then(e=>{b(e),g(cs(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]);let S=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Ng(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),C=o===`files`;return(0,L.jsxs)(Pg,{children:[(0,L.jsxs)(Fg,{children:[!f.includes(`home`)&&(0,L.jsxs)(Bg,{$active:o===`home`,onClick:e=>m(`home`,Bt(e)),title:v(`Overview`),type:`button`,children:[(0,L.jsx)(Ei,{}),(0,L.jsx)(Hg,{children:v(`Overview`)})]}),!f.includes(`recycle`)&&(0,L.jsxs)(Bg,{$active:o===`recycle`,onClick:e=>m(`recycle`,Bt(e)),title:v(`Recycle Bin`),type:`button`,children:[(0,L.jsx)(ci,{}),(0,L.jsx)(Hg,{children:v(`Recycle Bin`)})]}),!f.includes(`gallery`)&&(0,L.jsxs)(Bg,{$active:o===`gallery`,onClick:e=>m(`gallery`,Bt(e)),title:v(`Gallery`),type:`button`,children:[(0,L.jsx)(mi,{}),(0,L.jsx)(Hg,{children:v(`Gallery`)})]})]}),h.map(e=>(0,L.jsxs)(Lg,{children:[(0,L.jsxs)(Bg,{as:`div`,$active:!1,children:[(0,L.jsx)(Vg,{children:(0,L.jsx)(us,{panel:e,size:16})}),(0,L.jsx)(Hg,{children:v(e.title)})]}),(0,L.jsx)(Rg,{children:(0,L.jsxs)(zg,{children:[e.kind===`quick`&&S(e).map(e=>(0,L.jsxs)(Bg,{$active:C&&Ng(a,e.path),onClick:t=>p(e.path,Bt(t)),title:e.path,type:`button`,children:[(0,L.jsx)(ds,{place:e}),(0,L.jsx)(Hg,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let t=jn(x,e.path);return(0,L.jsxs)(Bg,{$active:C&&Ng(a,e.path),onClick:t=>e.isDirectory?p(e.path,Bt(t)):void U(e.path),title:e.path,type:`button`,children:[t&&x.useIcons?(0,L.jsx)(ds,{place:t}):(0,L.jsx)(ks,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,L.jsx)(Hg,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,L.jsx)(Ag,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,L.jsxs)(Bg,{$active:C&&Ng(a,e.name),onClick:t=>p(e.name,Bt(t)),title:e.name,type:`button`,children:[(0,L.jsx)(Jr,{}),(0,L.jsxs)(Hg,{children:[u(e),(0,L.jsxs)(Ug,{children:[d(e.freeSpace),` free`]}),(0,L.jsx)(Wg,{children:(0,L.jsx)(Gg,{$used:n,$tone:t(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,L.jsx)(jg,{onNavigate:p,path:e.path||s})]})})]},e.id)),!f.includes(`settings`)&&(0,L.jsx)(Ig,{children:(0,L.jsxs)(Bg,{$active:o===`settings`,onClick:e=>m(`settings`,Bt(e)),title:v(`Settings`),type:`button`,children:[(0,L.jsx)(ni,{}),(0,L.jsx)(Hg,{children:v(`Settings`)})]})})]})}var Og=10,kg=40;function Ag({historyVersion:e=0,onNavigate:t}){let n=B(),[r,i]=(0,O.useState)(null),o=An();return(0,O.useEffect)(()=>{Le().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=jn(o,e.path);return(0,L.jsxs)(Bg,{$active:!1,onClick:n=>t(e.path,Bt(n)),title:a(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&o.useIcons?(0,L.jsx)(ds,{place:r}):(0,L.jsx)(ks,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,L.jsx)(Hg,{children:r?.name||e.name})]},e.path)})}function jg({path:e,onNavigate:t}){let[n,r]=(0,O.useState)(null);(0,O.useEffect)(()=>{e&&(r(null),ye(e,!1).then(r,()=>r(null)))},[e]),(0,O.useEffect)(()=>{if(e&&I.available)return I.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&Ng(n.data.path,e)&&ye(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Og),o=i.filter(e=>!e.isDirectory).slice(0,kg);return(0,L.jsxs)(L.Fragment,{children:[a.map(e=>(0,L.jsx)(Mg,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,L.jsx)(Mg,{entry:e,onNavigate:t},e.fullPath))]})}function Mg({entry:e,onNavigate:t}){let n=An(),r=jn(n,e.fullPath);return(0,L.jsxs)(Bg,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Bt(n)):void U(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,L.jsx)(ds,{place:r}):(0,L.jsx)(ks,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,L.jsx)(Hg,{children:r?.name||e.name})]})}function Ng(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var Pg=i.aside`
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

    &:not(:hover) ${()=>Ug},
    &:not(:hover) ${()=>Wg} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Fg=i.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Ig=i(Fg)`
    margin-top: auto;
`,Lg=i.div`
    display: flex;
    flex-direction: column;
`,Rg=i.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Pg}:hover ${Lg}:hover > & {
        grid-template-rows: 1fr;
    }
`,zg=i.div`
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
`,Bg=i.button`
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
`,Vg=i.span`
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
`,Hg=i.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ug=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Wg=i.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Gg=i.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,Kg=i.span`
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
`;function qg({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=B(),o=(0,O.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,O.useEffect)(()=>{if(!n)return;let e=e=>{o.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,L.jsxs)(Yg,{ref:o,children:[(0,L.jsxs)(Xg,{$active:n,onClick:()=>r(!n),title:s>0?a(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,L.jsx)(si,{size:13}),c>0&&(0,L.jsx)(Kg,{children:c>9?`9+`:c})]}),n&&(0,L.jsxs)(Zg,{children:[(0,L.jsxs)(Qg,{children:[(0,L.jsx)($g,{children:i(`Status center`)}),(0,L.jsxs)(e_,{children:[(0,L.jsx)(t_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,L.jsx)(n_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,L.jsx)(ui,{size:10})})]})]}),e.length===0?(0,L.jsx)(i_,{children:i(`No operations yet.`)}):(0,L.jsx)(r_,{children:e.map(e=>(0,L.jsx)(Jg,{task:e},e.id))})]})]})}function Jg({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,L.jsxs)(a_,{children:[(0,L.jsxs)(o_,{children:[(0,L.jsx)(s_,{$state:e.state,children:e.state===`done`?(0,L.jsx)(li,{size:10}):e.state===`failed`?(0,L.jsx)(ui,{size:10}):(0,L.jsx)(c_,{})}),(0,L.jsx)(l_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,L.jsxs)(u_,{children:[d(e.bytesDone),` / `,d(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,L.jsxs)(u_,{children:[e.done,` / `,e.total]})]}),i&&(0,L.jsx)(d_,{children:(0,L.jsx)(f_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,L.jsx)(p_,{children:e.error})]})}var Yg=i.div`
    position: relative;
    display: flex;
`,Xg=i.button`
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
`,Zg=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${va}
    ${ja}
`,Qg=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,$g=i.span`
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
`,e_=i.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,t_=i.button`
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
`,n_=i.button`
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
`,r_=i.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,i_=i.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,a_=i.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;
    ${Ma}

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,o_=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,s_=i.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,c_=i.span`
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
`,l_=i.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,u_=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,d_=i.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,f_=i.div`
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
`,p_=i.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function m_(){return I.available?(await I.request(`fs.history.list`)).entries:[]}async function h_(e){return I.available?(await I.request(`fs.history.undoTo`,{id:e})).ok:!1}function g_(){let e=B(),[t,n]=(0,O.useState)(!1),[r,i]=(0,O.useState)([]),[a,o]=(0,O.useState)(!1),s=(0,O.useRef)(null),c=()=>void m_().then(i,()=>i([]));(0,O.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await h_(e),c()}finally{o(!1)}};return(0,L.jsxs)(y_,{ref:s,children:[(0,L.jsx)(b_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,L.jsx)(oi,{size:14})}),t&&(0,L.jsxs)(x_,{children:[(0,L.jsxs)(S_,{children:[(0,L.jsx)(C_,{children:e(`History`)}),(0,L.jsx)(w_,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,L.jsx)(ui,{size:10})})]}),r.length===0?(0,L.jsx)(N_,{children:e(`No operations yet.`)}):(0,L.jsx)(T_,{children:r.map(t=>(0,L.jsxs)(E_,{children:[(0,L.jsxs)(D_,{children:[(0,L.jsxs)(O_,{children:[(0,L.jsx)(v_,{label:t.label}),__(e,t.label)]}),(0,L.jsx)(k_,{children:x(t.at)})]}),t.paths.length>0&&(0,L.jsxs)(A_,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,L.jsx)(j_,{children:(0,L.jsx)(M_,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function __(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function v_({label:e}){return e.startsWith(`Delete`)?(0,L.jsx)(ci,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,L.jsx)(Gi,{size:13}):e.startsWith(`Rename`)?(0,L.jsx)(Di,{size:13}):e.startsWith(`Compress`)?(0,L.jsx)(_i,{size:13}):e.startsWith(`New`)?(0,L.jsx)(Qr,{size:13}):(0,L.jsx)(ei,{size:13})}var y_=i.div`
    position: relative;
    display: flex;
`,b_=i.button`
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
`,x_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${va}
    ${ja}
`,S_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,C_=i.span`
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
`,w_=i.button`
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
`,T_=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,E_=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,D_=i.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,O_=i.span`
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
`,k_=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,A_=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,j_=i.div`
    display: flex;
    justify-content: flex-end;
`,M_=i.button`
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
`,N_=i.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function P_({currentFolder:e}){let t=B(),[n,r]=(0,O.useState)(!1),[i,a]=(0,O.useState)(null),[o,s]=(0,O.useState)(!1),c=(0,O.useRef)(null);(0,O.useEffect)(()=>{if(!n)return;let e=()=>void ed().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{c.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,i),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i)}},[n]),(0,O.useEffect)(()=>{let e=()=>void ed().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let l=async e=>{s(!0);try{a(await e())}finally{s(!1)}},u=i?.shares.some(t=>t.path.replace(/[\\/]+$/,``).toLowerCase()===e.replace(/[\\/]+$/,``).toLowerCase())??!1;return(0,L.jsxs)(F_,{ref:c,children:[(0,L.jsxs)(I_,{$active:n,onClick:()=>r(e=>!e),title:t(`Share folders`),type:`button`,children:[(0,L.jsx)(Vi,{size:15}),i&&i.shares.length>0&&(0,L.jsx)(Kg,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,L.jsxs)(L_,{children:[(0,L.jsxs)(R_,{children:[(0,L.jsx)(z_,{children:t(`Share`)}),(0,L.jsx)(B_,{onClick:()=>r(!1),title:t(`Close`),type:`button`,children:(0,L.jsx)(ui,{size:10})})]}),(0,L.jsxs)(V_,{children:[(0,L.jsxs)(H_,{children:[(0,L.jsx)(di,{size:15}),(0,L.jsxs)(`span`,{children:[(0,L.jsx)(`strong`,{children:i?.deviceName||t(`This device`)}),(0,L.jsx)(U_,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,L.jsx)(W_,{children:t(`No folders are shared yet.`)}),i?.shares.map(e=>(0,L.jsxs)(G_,{children:[(0,L.jsxs)(K_,{children:[(0,L.jsx)(q_,{title:e.path,children:e.name}),(0,L.jsx)(Y_,{disabled:o,onClick:()=>void l(()=>nd(e.id)),title:t(`Stop sharing`),type:`button`,children:(0,L.jsx)(ui,{size:10})})]}),(0,L.jsx)(J_,{title:e.path,children:e.path}),(0,L.jsxs)(X_,{children:[(0,L.jsxs)(Z_,{$active:e.mode===`client`,onClick:()=>void l(()=>rd(e.id,`client`)),title:t(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,L.jsx)(di,{size:11}),t(`App`)]}),(0,L.jsxs)(Z_,{$active:e.mode===`web`,onClick:()=>void l(()=>rd(e.id,`web`)),title:t(`Any device with a browser can open this folder.`),type:`button`,children:[(0,L.jsx)(Ui,{size:11}),t(`Web`)]})]})]},e.id)),(0,L.jsxs)(Q_,{disabled:o||e.length===0||u,onClick:()=>void l(()=>td(e,`client`)),title:u?t(`This folder is already shared.`):e,type:`button`,children:[(0,L.jsx)(Qr,{size:12}),t(`Share this folder`)]}),i?.webRunning&&(0,L.jsxs)($_,{children:[(0,L.jsxs)(ev,{children:[(0,L.jsx)(Ui,{size:12}),t(`Browser access`)]}),i.urls.map(e=>(0,L.jsx)(tv,{onClick:()=>void it(e),type:`button`,children:e},e)),(0,L.jsx)(U_,{children:t(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var F_=i.div`
    position: relative;
    display: flex;
`,I_=i.button`
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
`,L_=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${va}
    ${ja}
`,R_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,z_=i.span`
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
`,B_=i.button`
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
`,V_=i.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,H_=i.div`
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
`,U_=i.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,W_=i.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,G_=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,K_=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,q_=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,J_=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Y_=i.button`
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
`,X_=i.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Z_=i.button`
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
`,Q_=i.button`
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
`,$_=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,ev=i.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,tv=i.button`
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
`;function nv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=B(),[s,c]=(0,O.useState)(!1),l=(0,O.useRef)(null);(0,O.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,O.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=gc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,L.jsxs)(rv,{ref:l,children:[(0,L.jsx)(iv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,L.jsx)(ai,{size:14}):(0,L.jsx)(ii,{size:14})}),s&&(0,L.jsxs)(av,{children:[(0,L.jsx)(ov,{children:o(`View`)}),(0,L.jsxs)(sv,{children:[(0,L.jsxs)(cv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,L.jsx)(ii,{size:12}),` `,o(`List`)]}),(0,L.jsxs)(cv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,L.jsx)(ai,{size:12}),` `,o(`Grid`)]})]}),(0,L.jsx)(ov,{children:o(`List icon size`)}),(0,L.jsxs)(lv,{children:[(0,L.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,L.jsxs)(uv,{children:[e.iconSize,`px`]})]}),(0,L.jsx)(ov,{children:o(`Grid size`)}),(0,L.jsxs)(lv,{children:[(0,L.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,L.jsxs)(uv,{children:[e.gridSize,`px`]})]}),(0,L.jsxs)(ov,{children:[o(`Columns`),(0,L.jsx)(Jp,{})]}),gc.map(e=>(0,L.jsxs)(dv,{children:[(0,L.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,L.jsxs)(dv,{children:[(0,L.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,L.jsxs)(ov,{children:[o(`Preview panel`),(0,L.jsx)(Jp,{})]}),(0,L.jsxs)(dv,{children:[(0,L.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var rv=i.div`
    position: relative;
    display: flex;
    height: 100%;
`,iv=i.button`
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
`,av=i.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${va}
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
`,ov=i.div`
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
`,sv=i.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,cv=i.button`
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
`,lv=i.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,uv=i.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,dv=i.label`
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
`,fv=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),pv=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),mv=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),hv=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,L.jsx)(`path`,{d:`M2 5h6`})}),gv=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,L.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),_v=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,L.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,L.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function vv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:C,onToggleDetails:w,shortcuts:T,currentFolder:ee}){let E=B(),D=V(),te=ue(),[k,A]=(0,O.useState)({left:!1,right:!1}),[j,ne]=(0,O.useState)(null),[M,re]=(0,O.useState)(null),N=(0,O.useRef)(null),P=(0,O.useRef)(null),ie=(0,O.useRef)(null),F=(0,O.useCallback)(()=>{let e=P.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;A(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,O.useEffect)(()=>{F();let e=P.current;if(!e)return;let t=new ResizeObserver(F);return t.observe(e),()=>t.disconnect()},[F,e.length]),(0,O.useEffect)(()=>()=>{N.current&&window.clearTimeout(N.current.timer)},[]),(0,O.useEffect)(()=>{ie.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ae=e=>P.current?.scrollBy({left:e,behavior:`smooth`}),I=()=>{N.current&&window.clearTimeout(N.current.timer),N.current=null,re(null)};return(0,L.jsxs)(Sv,{children:[(0,L.jsx)(Cv,{children:(0,L.jsx)(di,{size:19})}),(0,L.jsxs)(wv,{children:[k.left&&(0,L.jsx)(Ev,{onClick:()=>ae(-180),title:E(`Scroll tabs left`),type:`button`,children:(0,L.jsx)(fv,{})}),(0,L.jsx)(Tv,{onScroll:F,onWheel:e=>{let t=P.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:P,children:e.map(e=>(0,L.jsxs)(Dv,{$active:e.id===t,$dragging:j===e.id,$dropTarget:M===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Ms(t.dataTransfer)||!yv(e)||(t.preventDefault(),N.current?.id===e.id))return;I(),re(e.id);let r=window.setTimeout(()=>{n(e.id),N.current=null},500);N.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(N.current?.id===e.id||M===e.id)&&I()},onDragEnd:()=>{ne(null),I()},onDragOver:t=>{(j||Ms(t.dataTransfer)&&yv(e))&&(t.preventDefault(),Ms(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>ne(e.id),onDrop:t=>{if(t.preventDefault(),j)a(j,e.id);else if(yv(e)&&Ms(t.dataTransfer)){let{paths:r,move:i}=Ns(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}ne(null),I()},onClick:()=>n(e.id),ref:e.id===t?ie:void 0,title:e.path||e.title,type:`button`,children:[(0,L.jsx)(bv,{tab:e}),(0,L.jsx)(Ov,{children:e.title}),e.partner&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(kv,{children:`|`}),(0,L.jsx)(xv,{place:e.partner.place}),(0,L.jsx)(Ov,{children:e.partner.title})]}),(0,L.jsx)(Av,{"data-shortcut":Ht(T.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:E(`Close tab`),children:(0,L.jsx)(mv,{})})]},e.id))}),k.right&&(0,L.jsx)(Ev,{onClick:()=>ae(180),title:E(`Scroll tabs right`),type:`button`,children:(0,L.jsx)(pv,{})}),(0,L.jsx)(jv,{"data-shortcut":Ht(T.newTab),onClick:i,title:E(`New tab`),type:`button`,children:(0,L.jsx)(Qr,{size:13})})]}),(0,L.jsx)(Mv,{...te}),(0,L.jsxs)(Nv,{children:[(0,L.jsx)(Fv,{$active:y,"data-shortcut":Ht(T.splitView),disabled:!b,onClick:x,title:E(y?`Close split view`:`Split view`),type:`button`,children:(0,L.jsx)(Xi,{size:15})}),(0,L.jsx)(Fv,{$active:S,disabled:!C,onClick:w,title:E(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,L.jsx)(Zi,{size:15})}),(0,L.jsxs)(Pv,{$active:_,onClick:v,title:E(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,L.jsx)(Hi,{size:14}),g>0&&(0,L.jsx)(Kg,{children:g>9?`9+`:g})]}),(0,L.jsx)(g_,{}),(0,L.jsx)(P_,{currentFolder:ee}),(0,L.jsx)(qg,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,L.jsx)(nv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,L.jsx)(Iv,{onClick:D.minimize,title:E(`Minimize`),type:`button`,children:(0,L.jsx)(hv,{})}),(0,L.jsx)(Iv,{onClick:D.toggleMaximize,title:D.maximized?E(`Restore`):E(`Maximize`),type:`button`,children:D.maximized?(0,L.jsx)(_v,{}):(0,L.jsx)(gv,{})}),(0,L.jsx)(Lv,{onClick:D.close,title:E(`Close`),type:`button`,children:(0,L.jsx)(mv,{})})]})]})}function yv(e){return e.kind===`files`&&(!f(e.path)||te(e.path))}function bv({tab:e}){switch(e.kind){case`home`:return(0,L.jsx)(Gr,{size:13});case`settings`:return(0,L.jsx)(ni,{size:13});case`recycle`:return(0,L.jsx)(ci,{size:13});default:return(0,L.jsx)(xv,{place:e.place})}}function xv({place:e}){return e?(0,L.jsx)(ds,{place:e,size:13}):(0,L.jsx)(Kr,{size:13})}var Sv=i.header`
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
`,Cv=i.span`
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
`,wv=i.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Tv=i.div`
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
`,Ev=i.button`
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
`,Dv=i.button`
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
`,Ov=i.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,kv=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Av=i.span`
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
`,jv=i.button`
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
`,Mv=i.div`
    flex: 1;
    min-width: 28px;
`,Nv=i.div`
    display: flex;
    flex-shrink: 0;
`,Pv=i.button`
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
`,Fv=i.button`
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
`,Iv=i.button`
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
`,Lv=i(Iv)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Rv(){let[e,t]=(0,O.useState)(null),n=(0,O.useRef)(null),r=(0,O.useRef)(void 0);return(0,O.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,_a.createPortal)((0,L.jsx)(zv,{tooltip:e}),document.body):null}function zv({tooltip:e}){let t=(0,O.useRef)(null),[n,r]=(0,O.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,O.useState)(()=>e.bottom+6);return(0,O.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,L.jsxs)(Bv,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,L.jsx)(Vv,{children:e.text}),e.shortcut&&(0,L.jsx)(Hv,{children:e.shortcut})]})}var Bv=i.div`
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
    ${Ma}
`,Vv=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Hv=i.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Uv={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function Wv({deviceName:e,code:t,onAccept:n,onReject:r}){let i=B(),a=(0,O.useRef)(null);return(0,O.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,_a.createPortal)((0,L.jsx)(Gv,{children:(0,L.jsxs)(Kv,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsxs)(qv,{children:[(0,L.jsx)(Vi,{size:15}),i(`Pair for sharing`)]}),(0,L.jsx)(Jv,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,L.jsx)(Yv,{children:t}),(0,L.jsx)(Xv,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,L.jsxs)(Zv,{children:[(0,L.jsx)(Qv,{onClick:r,type:`button`,children:i(`Reject`)}),(0,L.jsx)($v,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var Gv=i.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Ma}
`,Kv=i.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Da}
`,qv=i.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Jv=i.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,Yv=i.div`
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
`,Xv=i.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Zv=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Qv=i.button`
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
`,$v=i(Qv)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,ey=`yafm://`,ty={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},ny=0,ry=new Set;function iy(e){ry.add(e),I.send({type:`app.navigate.done`,payload:{path:e}})}var ay=20,oy=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function sy(e){return`${ey}${e===`home`?`overview`:e}`}function cy(e){return e.toLowerCase().startsWith(ey)?ty[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function ly(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(ey))return t;let n=ty[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?sy(n):null}function uy(e){return e.history[e.index]??sy(`home`)}function dy(e){return cy(uy(e))??`files`}function fy(e){let t=uy(e);return cy(t)?``:e.listing?.path||t}function py(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||dy(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function my(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function hy(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||ge.iconSize,gridSize:e.view?.gridSize||t.gridSize||ge.gridSize,sort:e.view?.sort??ge.sort,sortDescending:e.view?.sortDescending??ge.sortDescending,columns:t.columns??_e.columns??[]}}function gy(e=sy(`home`)){return ny+=1,{id:`tab-${ny}`,listing:null,loading:!cy(e),error:null,history:[e],index:0,fresh:!0,view:null}}function _y(e){return e instanceof Error?e.message:String(e)}function vy(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function yy(e){let t=ud(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return dd(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function by(e){let t=_(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function xy(e){return f(e)?qt(e):void 0}function Sy(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return a(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:d(n)})}function Cy(){let e=B(),[t,n]=(0,O.useState)(()=>[gy()]),[r,i]=(0,O.useState)(()=>t[0].id),[a,o]=(0,O.useState)(null),[u,d]=(0,O.useState)(()=>{let e=Nn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,O.useState)([]),[h,g]=(0,O.useState)([]),[v,y]=(0,O.useState)(null),[b,x]=(0,O.useState)(null),[w,T]=(0,O.useState)(null),ee=de(),[E,D]=(0,O.useState)(pn),[k,A]=(0,O.useState)(0),[j,ne]=(0,O.useState)(0),[M,re]=(0,O.useState)(pn),[N,P]=(0,O.useState)(0),[ie,F]=(0,O.useState)(0),[ae,oe]=(0,O.useState)(0),[se,R]=(0,O.useState)(0),z=(0,O.useRef)(se);z.current=se;let[ce,le]=(0,O.useState)([]),[V,ue]=(0,O.useState)(10),[H,pe]=(0,O.useState)(null),[he,ve]=(0,O.useState)(0),[W,De]=(0,O.useState)(Lt),[Oe,ke]=(0,O.useState)(0),[Ae,je]=(0,O.useState)(0),[Me,Ne]=(0,O.useState)(0),[Pe,Fe]=(0,O.useState)(!0),[Le,ze]=(0,O.useState)(()=>{let e=Nn(`yafm.preview.width`,320);return e>=220?e:320}),[Be,Ve]=(0,O.useState)(null),[Ue,We]=(0,O.useState)(null),[Ke,G]=(0,O.useState)(`primary`),[qe,Je]=(0,O.useState)(null),[Ye,Xe]=(0,O.useState)(null),[$e,et]=(0,O.useState)(null),[rt,it]=(0,O.useState)(null),[at,ot]=(0,O.useState)({primary:0,secondary:0}),[st,ct]=(0,O.useState)({primary:null,secondary:null}),[lt,ut]=(0,O.useState)(null),[dt,pt]=(0,O.useState)([]),[yt,xt]=(0,O.useState)(!1),St=(0,O.useRef)([]),Ct=(0,O.useRef)([]),[Tt,Et]=(0,O.useState)([]),[Dt,Ot]=(0,O.useState)(!1),[kt,Mt]=(0,O.useState)(!1),[K,Nt]=(0,O.useState)([]),[Rt,Ut]=(0,O.useState)(null),Gt=(0,O.useRef)(0),[Kt,Zt]=(0,O.useState)(()=>{let e=Fn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?my({x:e.x,y:e.y}):my({x:Math.max(20,window.innerWidth-340),y:110})}),Qt=(0,O.useCallback)(()=>{Zt(e=>my(e)),Mt(!0)},[]),q=t.find(e=>e.id===r)??t[0],J=dy(q),en=uy(q),tn=fy(q),nn=J===`files`?q.listing?.parent??yy(tn):null,rn=q.splitWith?t.find(e=>e.id===q.splitWith):void 0,an=J===`files`&&rn!==void 0,on=rn?fy(rn):``,sn=rn?rn.listing?.parent??yy(on):null,cn=an&&rn&&Ke===`secondary`?rn:q,ln=H?.defaultView??_e,un=hy(cn,ln);(0,O.useEffect)(()=>{S(H?.accentColor,H?.secondaryColor)},[H?.accentColor,H?.secondaryColor]),(0,O.useEffect)(()=>{Qp(H?.fonts)},[H?.fonts]),(0,O.useEffect)(()=>{C(H?.timeFormat,H?.timeFormatPattern)},[H?.timeFormat,H?.timeFormatPattern]),(0,O.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!H?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[H?.backgroundSource]),(0,O.useEffect)(()=>(me(e=>new Promise(t=>{Ut({id:++Gt.current,prompt:e,resolve:t})})),()=>me(null)),[]),(0,O.useEffect)(()=>{G(`primary`)},[r]),(0,O.useEffect)(()=>{re(pn),F(0),oe(0)},[J]),(0,O.useEffect)(()=>{F(0)},[M.query,M.matchCase,M.regex]),(0,O.useEffect)(()=>{F(e=>ae===0?0:Math.min(e,ae-1))},[ae]);let dn=un.columns.includes(`linkCount`),fn=(0,O.useMemo)(()=>{let e={},t=cs(H),n={};for(let[e,t]of Object.entries(H?.placeNames??{}))n[c(e)]=t;for(let t of p)e[c(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=c(t),i=p.find(e=>c(e.path)===r);e[r]={name:n[r]??i?.name??(_(t)||t),path:t,kind:`folder`,icon:i?.icon??H?.placeIcons?.[t]??null}}return e},[p,H]),mn=(0,O.useMemo)(()=>({places:fn,useIcons:H?.systemIcons===!1}),[fn,H?.systemIcons]),hn=H?.defaultView?.showImages??!0,gn=H?.defaultView?.imageStripHeight??_e.imageStripHeight,_n=J===`home`?(0,L.jsx)(Ei,{size:13}):J===`settings`?(0,L.jsx)(ni,{size:13}):J===`recycle`?(0,L.jsx)(ci,{size:13}):J===`gallery`?(0,L.jsx)(mi,{size:13}):void 0,vn=E.open&&E.query.length>0,yn=(0,O.useMemo)(()=>vn&&cn.listing?cn.listing.entries.filter(e=>Sn(e.isDirectory?Mn(mn,e.fullPath,e.name):e.name,E)).map(e=>e.fullPath):[],[vn,E,cn.listing,mn]);(0,O.useEffect)(()=>{A(0)},[E.query,E.matchCase,E.regex,cn.listing?.path]);let bn=yn.length===0?-1:Math.min(k,yn.length-1),xn=(0,O.useCallback)(()=>{D(e=>({...e,open:!1,query:``})),A(0)},[]),Cn=(0,O.useCallback)(()=>{D(e=>({...e,open:!0})),ne(e=>e+1)},[]),wn=(0,O.useCallback)(()=>{re(e=>({...e,open:!0})),P(e=>e+1)},[]),Tn=(0,O.useCallback)(()=>{re(pn),F(0),oe(0)},[]),En=(0,O.useCallback)(e=>{F(t=>ae===0?0:(Math.min(t,ae-1)+e+ae)%ae)},[ae]),Dn=(0,O.useCallback)(e=>{D(t=>({...t,open:!0,query:t.open?t.query+e:e})),ne(e=>e+1)},[]),On=(0,O.useCallback)(e=>{A(t=>yn.length===0?0:(Math.min(t,yn.length-1)+e+yn.length)%yn.length)},[yn.length]),An=(0,O.useRef)({tabs:t,activeId:r,activePane:Ke});An.current={tabs:t,activeId:r,activePane:Ke};let Ln=(0,O.useRef)(H);Ln.current=H;let Rn=(0,O.useRef)(!1),zn=(0,O.useRef)([]),Bn=(0,O.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Vn=(0,O.useRef)(new Map),Hn=(0,O.useCallback)(e=>{let t=(Vn.current.get(e)??0)+1;return Vn.current.set(e,t),()=>Vn.current.get(e)===t},[]),Un=(0,O.useCallback)(async(e,t,n)=>{if(!(t&&ld(t)))try{let r=await we(t,dn);if(!n()||!r.listing)return;Bn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[dn,Bn]),Wn=(0,O.useCallback)(async(e,t,n=!1)=>{let r=Hn(e);xn();let i=!n||!An.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Bn(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&vy(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&Un(e,t,r);let o=t&&ld(t)?await fd(t):await ye(t,!0,dn,z.current,t?xy(t):void 0);if(!r())return;Bn(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!ld(o.path)&&Re(o.path).then(()=>ve(e=>e+1))}catch(i){if(!r())return;let a=An.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?fy(a):``,s=yy(o),c=_y(i);if(o&&Xt(c)){let i=l(o),a=await sa(i,!!qt(i));if(a){Jt(i,a),r()&&Wn(e,t,n);return}}Bn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Hn,dn,Bn,xn,Un]),Gn=(0,O.useCallback)((e,t)=>{let n=ly(t);n&&(cy(n)?(xn(),Hn(e),Bn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Wn(e,n))},[Hn,Wn,Bn,xn]),Kn=(0,O.useCallback)(async(e,t,n)=>{if(xn(),cy(t)){Hn(e),Bn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Hn(e);Bn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(ld(t)||await Un(e,t,r),!r())return;let n=ld(t)?await fd(t):await ye(t,!0,dn,z.current,xy(t));if(!r())return;Bn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(Xt(_y(i))){let i=l(t),a=await sa(i,!!qt(i));if(a){Jt(i,a),r()&&Kn(e,t,n);return}}Bn(e,()=>({listing:{path:t,parent:yy(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:_y(i)}))}},[Hn,dn,Bn,xn,Un]),qn=(0,O.useCallback)((e,t=!0)=>{let r=gy(e??sy(`home`));return n(e=>[...e,r]),t&&i(r.id),e&&!cy(e)&&Wn(r.id,e),r.id},[Wn]),Jn=(0,O.useCallback)(e=>{for(let t of An.current.tabs)dy(t)===`files`&&vy(fy(t),e)&&Wn(t.id,e,!0)},[Wn]),Yn=(0,O.useCallback)((e,t=!1)=>{t?qn(sy(e)):Gn(An.current.activeId,sy(e))},[qn,Gn]),Xn=(0,O.useCallback)(e=>{let{tabs:t,activeId:r}=An.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(Ct.current.push(uy(a)),Ct.current.length>ay&&Ct.current.shift()),o.length===0){let e=gy();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),Zn=(0,O.useCallback)(()=>{let e=Ct.current.pop();if(!e)return;let t={...gy(e),fresh:!1};n(e=>[...e,t]),i(t.id),dy(t)===`files`&&Wn(t.id,fy(t))},[Wn]),Qn=(0,O.useCallback)((e,t=!1)=>{t?qn(e):Gn(py(An.current),e??sy(`home`))},[Gn,qn]),$n=(0,O.useCallback)(e=>{let{tabs:t,activeId:n}=An.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),er=(0,O.useCallback)(()=>{let{tabs:e,activeId:t}=An.current,r=e.find(e=>e.id===t);if(!r||dy(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),Bn(t,()=>({splitWith:void 0})),G(`primary`);return}let a=fy(r),o={...gy(a),hidden:!0};n(e=>[...e,o]),Bn(t,()=>({splitWith:o.id})),Wn(o.id,a),G(`primary`)},[Wn,Bn]),tr=(0,O.useCallback)(e=>{ze(e),Pn(`yafm.preview.width`,e)},[]),nr=an?Ke===`secondary`?Ue??Be:Be??Ue:Be,rr=(0,O.useRef)(null),ir=e=>{e.preventDefault();let t=rr.current?.getBoundingClientRect();if(!t)return;let n=Pe?Le:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);d(n),Pn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},ar=(e,t,n)=>{t&&Je({x:e.clientX,y:e.clientY,directory:t,refresh:n})},or=(0,O.useCallback)((e,t)=>{ot(n=>n[e]===t?n:{...n,[e]:t})},[]),sr=(0,O.useCallback)(e=>or(`primary`,e),[or]),cr=(0,O.useCallback)(e=>or(`secondary`,e),[or]),lr=(e,t)=>{at[e]!==0&&ct(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},ur=async(e,t=!1)=>{let n=qe;if(Je(null),!n)return;let r=e===null?await bt(n.directory,t):await wt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;xn(),ut(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},dr=(0,O.useCallback)(()=>{let{tabs:e}=An.current,t=e.find(e=>e.id===py(An.current));t&&t.index>0&&Kn(t.id,t.history[t.index-1],t.index-1)},[Kn]),fr=(0,O.useCallback)(()=>{let{tabs:e}=An.current,t=e.find(e=>e.id===py(An.current));t&&t.index<t.history.length-1&&Kn(t.id,t.history[t.index+1],t.index+1)},[Kn]),pr=(0,O.useCallback)(()=>{let{tabs:e}=An.current,t=e.find(e=>e.id===py(An.current));t&&dy(t)===`files`&&t.listing?.parent&&Qn(t.listing.parent)},[Qn]),mr=(0,O.useRef)(null),hr=(0,O.useCallback)(()=>{for(let e of An.current.tabs)e.listing&&Wn(e.id,e.listing.path,!0)},[Wn]),gr=(0,O.useCallback)(e=>{e.length!==0&&(Nt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Qt())},[Qt]),_r=(0,O.useCallback)(async e=>{let t=await gt(e);t.length!==0&&gr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[gr]),vr=(0,O.useCallback)(e=>{let t=new Set(e);Nt(e=>e.filter(e=>!t.has(e.path)))},[]),yr=(0,O.useCallback)(()=>Nt([]),[]),br=(0,O.useRef)(-1),xr=(0,O.useCallback)(e=>{Et(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Ot(e.move),e.entries.length>0&&Qt()},[Qt]),Sr=(0,O.useCallback)(async()=>{if(I.available)try{let e=await mt();br.current=e.sequence,xr(e)}catch{}},[xr]),Cr=(0,O.useCallback)(async e=>{e.length!==0&&await ft(e,!1)&&await Sr()},[Sr]),wr=(0,O.useRef)(K);wr.current=K,(0,O.useEffect)(()=>{let e=e=>{Ms(e.dataTransfer)&&Qt()},t=e=>{Ms(e.dataTransfer)&&Qt()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[Qt]),(0,O.useEffect)(()=>{let e=()=>Zt(e=>my(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Tr=(0,O.useCallback)(async()=>{let e=wr.current;if(e.length>0){let t=await gt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Nt(e=>e.filter(e=>n.has(e.path)))}await Sr()},[Sr]),Er=(0,O.useCallback)(()=>{Tr(),Ne(e=>e+1),hr()},[Tr,hr]),Dr=(0,O.useCallback)(e=>{let t=my(e);Zt(t),In(`yafm.tray.position`,t)},[]),Or=(0,O.useCallback)(()=>{kt?Mt(!1):Qt()},[Qt,kt]),kr=(0,O.useCallback)(async(t,n,r)=>{let i=await ht(t,n,r);i.ok?(r&&vr(t),Ne(e=>e+1),hr(),Sr()):aa(i.error??e(`The files could not be transferred.`))},[hr,Sr,vr]);(0,O.useEffect)(()=>{if(I.available)return Ft().then(e=>{St.current=e,pt(e)},()=>void 0),I.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>e.kind===`delete`&&!St.current.some(t=>t.id===e.id));St.current=n,pt(n),r&&xt(!0)})},[]);let Ar=(0,O.useCallback)(()=>{It().then(()=>Ft().then(e=>{St.current=e,pt(e)},()=>void 0))},[]);(0,O.useEffect)(()=>{if(!I.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await mt();if(!e||t.sequence===br.current)return;br.current=t.sequence,xr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[xr]);let jr=(0,O.useCallback)(async e=>{let t=e?await At():await jt();t.ok?(Ne(e=>e+1),hr()):t.error&&!t.error.startsWith(`Nothing to`)&&aa(t.error)},[hr]),Mr=(0,O.useRef)(dn);(0,O.useEffect)(()=>{Mr.current!==dn&&(Mr.current=dn,hr())},[dn,hr]);let Nr=(0,O.useCallback)((e,t)=>{let{tabs:n}=An.current,r=n.find(t=>t.id===e);if(!r||dy(r)!==`files`)return;let i=fy(r),a=Ln.current?.defaultView??_e,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||ge.iconSize,gridSize:r.view?.gridSize||a.gridSize||ge.gridSize,sort:r.view?.sort??ge.sort,sortDescending:r.view?.sortDescending??ge.sortDescending,...t};Bn(e,()=>({view:o})),mr.current!==null&&window.clearTimeout(mr.current),mr.current=window.setTimeout(()=>{mr.current=null,Se(i,o)},250)},[Bn]),Pr=(0,O.useCallback)(e=>{Nr(py(An.current),e)},[Nr]),Fr=(0,O.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,columns:e}};pe(n),Ze(n)},[]),Ir=(0,O.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,showImages:e}};pe(n),Ze(n)},[]),Lr=(0,O.useCallback)(e=>{let t=Ln.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,imageStripHeight:e}};pe(n),Ze(n)},[]),Rr=(0,O.useCallback)((e,t,n,r)=>{let i=An.current.tabs.find(t=>t.id===e);if(!i||dy(i)!==`files`||!i.listing)return;let a=fy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Bn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Ce(a,t,n,r)},[Bn]),zr=(0,O.useCallback)((e,t)=>{let n=An.current.tabs.find(t=>t.id===e);if(!n)return;let r=hy(n,Ln.current?.defaultView??_e);Nr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Nr]),Br=(0,O.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Vr=(0,O.useCallback)(()=>{Te().then(m,()=>m([]))},[]),Hr=(0,O.useCallback)(e=>{let t=(e.openTabs??[]).map(ly).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...gy(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)dy(e)===`files`&&Wn(e.id,fy(e),!0);return!0},[Wn]),Ur=(0,O.useCallback)(e=>{let t=zn.current;if(zn.current=[],t.length===0)return;let n=t.filter(e=>!ry.has(e));for(let e of t)n.includes(e)||iy(e);if(n.length===0)return;let{tabs:r}=An.current;if(!e&&r.length===1&&r[0].fresh){Gn(r[0].id,n[0]),iy(n[0]);for(let e of n.slice(1))qn(e),iy(e);return}let a=n.map(e=>{let t=qn(e);return iy(e),t}).at(-1);a&&setTimeout(()=>i(a),0)},[qn,Gn]),Wr=(0,O.useCallback)(()=>{Ge().then(e=>{pe(e),ue(e.recentLimit);let t={...Lt,...e.shortcuts};De(t),zt(t.openInNewTab),ke(e=>e+1),Rn.current||(Rn.current=!0,Ur(e.restoreTabs&&Hr(e)))},()=>{ue(10),Rn.current=!0,Ur(!1)})},[Ur,Hr]),Y=(0,O.useCallback)(()=>{Ie().then(le,()=>le([]))},[]),Gr=(0,O.useCallback)(()=>{Ee().then(g,()=>g([]))},[]),Kr=t.filter(e=>!e.hidden),qr=Kr.map(uy),Jr=qr.join(`
`),Zr=Math.max(Kr.findIndex(e=>e.id===r),0);(0,O.useEffect)(()=>{if(!H?.restoreTabs)return;let e=setTimeout(()=>void Qe(qr,Zr),700);return()=>clearTimeout(e)},[Jr,Zr,H?.restoreTabs]),(0,O.useEffect)(()=>{let{tabs:e,activeId:t}=An.current,n=e.find(e=>e.id===t);n&&n.fresh&&dy(n)===`files`&&Wn(n.id,fy(n),!0),Vr(),Wr(),Gr(),tt().then(y,()=>y(null))},[Wn,Vr,Wr,Gr]),(0,O.useEffect)(()=>{if(nt().then(x,()=>x(null)),I.available)return I.on(e=>{let t=e;t.type===`app.update`&&t.data&&x(t.data)})},[]),(0,O.useEffect)(()=>{if(I.available)return I.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&o({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&aa(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&aa(n.data.error??e(`Pairing failed.`))}})},[e]),(0,O.useEffect)(()=>{let e=setInterval(Gr,3e4);return()=>clearInterval(e)},[Gr]),(0,O.useEffect)(()=>{J===`home`&&(Y(),Gr())},[J,q.id,Y,Gr]),(0,O.useEffect)(()=>{if(!I.available)return;let e=I.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=An.current,i=t.data.startup===!0;i&&ry.has(n)?iy(n):i&&!Rn.current?zn.current.includes(n)||zn.current.push(n):(i&&r.length===1&&r[0].fresh?Gn(r[0].id,n):cy(n)?Gn(py(An.current),n):qn(n),i&&iy(n))});return I.send({type:`app.ready`}),e},[Gn,qn]),(0,O.useEffect)(()=>{if(I.available)return I.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,O.useEffect)(()=>{if(I.available)return I.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,O.useEffect)(()=>{let e=e=>{if(Wt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),dr();return}if(e.key===`BrowserForward`){e.preventDefault(),fr();return}if(e.key===`Escape`&&E.open){e.preventDefault(),xn();return}let t=Vt(e);if(t===W.closeTab)e.preventDefault(),Xn(py(An.current));else if(t===W.newTab)e.preventDefault(),qn();else if(t===W.reopenTab)e.preventDefault(),Zn();else if(t===W.goBack)e.preventDefault(),dr();else if(t===W.goForward)e.preventDefault(),fr();else if(t===W.goUp)e.preventDefault(),pr();else if(t===W.find)e.preventDefault(),J===`files`?Cn():wn();else if(t===W.location)e.preventDefault(),je(e=>e+1);else if(t===W.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&Qn(t)}else t===W.iconsView?(e.preventDefault(),J===`files`&&Pr({mode:`grid`})):t===W.detailsView?(e.preventDefault(),J===`files`&&Pr({mode:`list`})):t===W.nextTab?(e.preventDefault(),$n(1)):t===W.previousTab?(e.preventDefault(),$n(-1)):t===W.hidden||t===`alt+.`?(e.preventDefault(),He().then(()=>{Ne(e=>e+1),hr()})):t===W.undo?(e.preventDefault(),jr(!0)):t===W.redo?(e.preventDefault(),jr(!1)):t===W.splitView?(e.preventDefault(),er()):J!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Dn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[W,J,E.open,Xn,Zn,qn,dr,fr,pr,Cn,wn,xn,Dn,Pr,$n,Qn,p,hr,jr,er]),(0,O.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),dr()):e.button===4&&(e.preventDefault(),fr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[dr,fr]),(0,O.useEffect)(()=>{if(!I.available||J!==`files`)return;let e=new Set;for(let n of t){if(dy(n)!==`files`)continue;let t=fy(n);if(t&&!ld(t)){if(f(t)){let n=yy(l(t));n&&e.add(n)}else e.add(t)}}e.size>0&&I.send({type:`fs.watch`,payload:{paths:[...e]}})},[J,en,t]),(0,O.useEffect)(()=>{if(I.available)return I.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=An.current.tabs.filter(e=>dy(e)===`files`&&vy(fy(e),n));r.length!==0&&($t(),ye(n,!1,dn).then(e=>{for(let t of r){let n=An.current.tabs.find(e=>e.id===t.id);n&&dy(n)===`files`&&!n.loading&&vy(fy(n),e.path)&&Bn(t.id,()=>({listing:e}))}},()=>void 0))})},[dn,Bn]);let ti=q.index>0,ri=q.index<q.history.length-1,ii=(e,t)=>{let n=hy(e,ln),r=e.listing?.path??e.history[e.index]??``,i=f(r),a=i&&te(r);return(0,L.jsx)(yc,{confirmDelete:H?.confirmDelete??!1,previewVideoAudio:H?.previewVideoAudio??!1,previewVideoAutoplay:H?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?Ve:We,onActivate:()=>G(t?`primary`:`secondary`),enableShortcuts:(!an||(t?Ke===`primary`:Ke===`secondary`))&&(!i||a),error:e.error,find:e.id===cn.id?{...E,currentPath:bn<0?null:yn[bn]}:void 0,imageStripHeight:gn,listing:e.listing,loading:e.loading,onImageStripHeight:Lr,readOnly:i&&!a||ld(e.listing?.path??``),onOpen:(t,n)=>{n?qn(t):Wn(e.id,t)},onOpenFile:(t,n)=>{ld(t)?md(t).catch(e=>void aa(_y(e))):s(t)?H?.archiveHandler??!1?n?qn(t):Wn(e.id,t):U(t):f(t)?(async()=>{let e=await xe(t,z.current,xy(t));if(!e.path&&Xt(e.error)){let n=l(t),r=qt(n);r&&Yt(n);let i=await sa(n,!!r);i&&(Jt(n,i),e=await xe(t,z.current,i))}e.path?U(e.path):e.error&&aa(e.error)})():U(t)},onRefresh:()=>{let t=e.listing?.path;t&&Jn(t)},onSelectionCountChange:t?sr:cr,onSetTags:(t,n,r)=>Rr(e.id,t,n,r),selectionMenuRequest:t?st.primary:st.secondary,onSort:t=>zr(e.id,t),onPaste:Er,onClipboardChanged:()=>void Sr(),onTransfer:kr,onAddToTray:e=>void _r(e),openOnSingleClick:H?.openOnSingleClick??!1,pendingRename:lt&&t===(Ke===`primary`)&&vy(lt.directory,e.listing?.path??``)?lt.path:null,pendingRenameToken:lt?.token??0,refreshToken:Me,shortcuts:W,showCheckboxes:H?.showCheckboxes??!0,showImages:hn,view:n})},ai=E.open&&(0,L.jsx)(Hu,{current:bn,focusToken:j,matchCase:E.matchCase,mode:E.mode,onClose:xn,onMatchCase:()=>D(e=>({...e,matchCase:!e.matchCase})),onMode:()=>D(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>On(1),onPrevious:()=>On(-1),onQuery:e=>D(t=>({...t,query:e})),onRegex:()=>D(e=>({...e,regex:!e.regex})),query:E.query,regex:E.regex,total:yn.length}),oi=J===`files`&&f(tn),si=oi&&te(tn),li=async e=>{if(!oi)return;let t=l(tn),n=yy(t);if(!n)return;let r=e===`named`;if(e===`auto`){let e=vy(tn,t)?q.listing?.entries??[]:(await ye(t,!1,!1,z.current,xy(t))).entries;r=!(e.length===1&&e[0].isDirectory)}let i=n.includes(`\\`)?`\\`:`/`,a=r?`${n.replace(/[\\/]+$/,``)}${i}${by(t)}`:n;await ui(a)},ui=async t=>{let n=await be(tn,t,z.current,xy(tn));if(!n.ok&&Xt(n.error)){let e=l(tn),r=qt(e);r&&Yt(e);let i=await sa(e,!!r);i&&(Jt(e,i),n=await be(tn,t,z.current,i))}n.ok?(Jn(t),$t(),Wn(q.id,t,!0)):aa(`${e(`Could not extract the archive.`)}${n.error?`\n${n.error}`:``}`)},di=async()=>{if(!oi)return;let e=await ea(yy(l(tn))??void 0);e&&await ui(e)},fi=(0,L.jsxs)(Oy,{children:[(0,L.jsx)(ky,{"data-shortcut":Ht(W.goBack),disabled:!ti,onClick:e=>{q.index>0&&Bt(e)?qn(q.history[q.index-1]):dr()},title:e(`Back`),type:`button`,children:(0,L.jsx)($r,{})}),(0,L.jsx)(ky,{"data-shortcut":Ht(W.goForward),disabled:!ri,onClick:e=>{q.index<q.history.length-1&&Bt(e)?qn(q.history[q.index+1]):fr()},title:e(`Forward`),type:`button`,children:(0,L.jsx)(ei,{})}),(0,L.jsx)(ky,{"data-shortcut":Ht(W.goUp),disabled:J!==`files`||!nn,onClick:e=>{nn&&(Bt(e)?qn(nn):Qn(nn))},title:e(`Up one level`),type:`button`,children:(0,L.jsx)(Xr,{})}),(0,L.jsx)(Kf,{focusToken:Ae,icon:_n,label:J===`files`?void 0:e(Uv[J]),onContextMenu:J===`files`?(e,t,n)=>et({x:t,y:n,path:e}):void 0,onNavigate:Qn,path:J===`files`?tn:en}),J===`files`&&(!oi||si)&&(0,L.jsx)(ky,{onClick:e=>ar(e,tn,()=>void Wn(q.id,tn,!0)),title:e(`New folder or file`),type:`button`,children:(0,L.jsx)(Qr,{})}),(0,L.jsx)(ky,{"data-shortcut":Ht(W.find),onClick:wn,title:e(`Search`),type:`button`,children:(0,L.jsx)(Yr,{})}),at.primary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(jy,{}),(0,L.jsx)(ky,{onClick:e=>lr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,L.jsx)(Qi,{})})]}),oi&&(0,L.jsxs)(Ay,{children:[(0,L.jsx)(jy,{}),(0,L.jsx)(ky,{onClick:()=>void di(),onContextMenu:e=>{e.preventDefault(),Xe({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,L.jsx)(_i,{})}),(0,L.jsx)(Ya,{icon:(0,L.jsx)(Ui,{size:15}),onChange:e=>{let t=Number(e);R(t),z.current=t,oi&&Wn(q.id,tn,!0)},options:oy.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(oy.find(e=>e.value===String(se))?.label??`Auto`)}`,value:String(se)})]})]}),pi=M.open?{...M,index:ie}:null;return(0,L.jsx)(kn,{value:mn,children:(0,L.jsxs)(wy,{$rounded:ee,children:[(0,L.jsx)(au,{settings:H}),(0,L.jsx)(vv,{activeId:q.id,onClose:Xn,onNewTab:()=>qn(),onReorder:Br,onTransferToTab:kr,onSelect:i,onViewChange:Pr,onColumns:Fr,onShowImages:Ir,showImages:hn,tasks:dt,onClearTasks:Ar,activityOpen:yt,onActivityOpenChange:xt,trayCount:K.length+Tt.length,trayVisible:kt,onToggleTray:Or,split:an,canSplit:J===`files`,onToggleSplit:er,details:Pe,canDetails:J===`files`||J===`recycle`||J===`gallery`,onToggleDetails:()=>Fe(e=>!e),currentFolder:J===`files`&&!ld(tn)?tn:``,shortcuts:W,view:un,tabs:t.filter(e=>!e.hidden).map(n=>{let r=dy(n),i=fy(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?fy(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?jn(mn,i):void 0,split:!!a,title:r===`files`?Mn(mn,i,_(i)||e(`Files`)):e(Uv[r]),partner:a?{title:Mn(mn,o,_(o)||e(`Files`)),place:jn(mn,o)}:void 0}})}),(0,L.jsxs)(Ty,{children:[(0,L.jsx)(Dg,{activeKind:J,currentPath:J===`files`?en:``,drives:h,historyVersion:he,onNavigate:Qn,onOpenView:Yn,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:ce,recentLimit:V,version:Oe}),(0,L.jsxs)(Ey,{children:[J!==`files`&&fi,(0,L.jsxs)(Dy,{children:[J!==`files`&&M.open&&(0,L.jsx)(Hu,{current:ie,focusToken:N,matchCase:M.matchCase,mode:M.mode,onClose:Tn,onMatchCase:()=>re(e=>({...e,matchCase:!e.matchCase})),onMode:()=>re(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>En(1),onPrevious:()=>En(-1),onQuery:e=>re(t=>({...t,query:e})),onRegex:()=>re(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:M.query,regex:M.regex,total:ae}),J===`files`?an&&rn?(0,L.jsxs)(Ny,{ref:rr,children:[(0,L.jsxs)(Py,{style:{flex:u},children:[(0,L.jsxs)(My,{$active:Ke===`primary`,onPointerDown:()=>G(`primary`),children:[(0,L.jsx)(ky,{"data-shortcut":Ht(W.goBack),disabled:!ti,onClick:e=>{let t=q.index-1;t<0||(Bt(e)?qn(q.history[t]):Kn(q.id,q.history[t],t))},title:e(`Back`),type:`button`,children:(0,L.jsx)($r,{})}),(0,L.jsx)(ky,{"data-shortcut":Ht(W.goForward),disabled:!ri,onClick:e=>{let t=q.index+1;t>=q.history.length||(Bt(e)?qn(q.history[t]):Kn(q.id,q.history[t],t))},title:e(`Forward`),type:`button`,children:(0,L.jsx)(ei,{})}),(0,L.jsx)(ky,{"data-shortcut":Ht(W.goUp),disabled:!nn,onClick:e=>{nn&&(Bt(e)?qn(nn):Wn(q.id,nn))},title:e(`Up one level`),type:`button`,children:(0,L.jsx)(Xr,{})}),(0,L.jsx)(Kf,{focusToken:Ke===`primary`?Ae:void 0,onContextMenu:(e,t,n)=>et({x:t,y:n,path:e}),onNavigate:(e,t)=>t?qn(e):void Wn(q.id,e),path:tn}),(0,L.jsx)(ky,{onClick:e=>ar(e,tn,()=>void Wn(q.id,tn,!0)),title:e(`New folder or file`),type:`button`,children:(0,L.jsx)(Qr,{})}),(0,L.jsx)(ky,{"data-shortcut":Ht(W.find),onClick:Cn,title:e(`Search`),type:`button`,children:(0,L.jsx)(Yr,{})}),at.primary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(jy,{}),(0,L.jsx)(ky,{onClick:e=>lr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,L.jsx)(Qi,{})})]})]}),ii(q,!0),Ke===`primary`&&ai]}),(0,L.jsx)(Fy,{onDoubleClick:()=>d(.5),onPointerDown:ir,title:e(`Drag to resize; double-click to reset`)}),(0,L.jsxs)(Py,{$enter:!0,style:{flex:1-u},children:[(0,L.jsxs)(My,{$active:Ke===`secondary`,onPointerDown:()=>G(`secondary`),children:[(0,L.jsx)(ky,{"data-shortcut":Ht(W.goBack),disabled:rn.index<=0,onClick:e=>{let t=rn.index-1;t<0||(Bt(e)?qn(rn.history[t]):Kn(rn.id,rn.history[t],t))},title:e(`Back`),type:`button`,children:(0,L.jsx)($r,{})}),(0,L.jsx)(ky,{"data-shortcut":Ht(W.goForward),disabled:rn.index>=rn.history.length-1,onClick:e=>{let t=rn.index+1;t>=rn.history.length||(Bt(e)?qn(rn.history[t]):Kn(rn.id,rn.history[t],t))},title:e(`Forward`),type:`button`,children:(0,L.jsx)(ei,{})}),(0,L.jsx)(ky,{"data-shortcut":Ht(W.goUp),disabled:!sn,onClick:e=>{sn&&(Bt(e)?qn(sn):Wn(rn.id,sn))},title:e(`Up one level`),type:`button`,children:(0,L.jsx)(Xr,{})}),(0,L.jsx)(Kf,{focusToken:Ke===`secondary`?Ae:void 0,onContextMenu:(e,t,n)=>et({x:t,y:n,path:e}),onNavigate:(e,t)=>t?qn(e):void Wn(rn.id,e),path:on}),(0,L.jsx)(ky,{onClick:e=>ar(e,on,()=>void Wn(rn.id,on,!0)),title:e(`New folder or file`),type:`button`,children:(0,L.jsx)(Qr,{})}),(0,L.jsx)(ky,{"data-shortcut":Ht(W.find),onClick:Cn,title:e(`Search`),type:`button`,children:(0,L.jsx)(Yr,{})}),at.secondary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(jy,{}),(0,L.jsx)(ky,{onClick:e=>lr(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,L.jsx)(Qi,{})})]})]}),ii(rn,!1),Ke===`secondary`&&ai]}),(0,L.jsx)(No,{info:nr,onWidth:tr,open:Pe,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1,width:Le})]}):(0,L.jsxs)(Ly,{children:[(0,L.jsxs)(Ry,{children:[fi,(0,L.jsxs)(Iy,{children:[ii(q,!0),ai]})]}),(0,L.jsx)(No,{info:Be,onWidth:tr,open:Pe,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1,width:Le})]}):J===`home`?(0,L.jsx)(Vf,{drives:h,find:pi,historyVersion:he,onSearchMatches:oe,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Gr,onHistoryChanged:()=>ve(e=>e+1),onAddToTray:e=>void _r(e),onOpen:Qn,onLayoutChanged:Wr,onPlacesChanged:m,onRecentCleared:Y,places:p,recent:ce,recentLimit:V,visibilityVersion:Me}):J===`settings`?(0,L.jsx)(wm,{appInfo:v,find:pi,focusSection:w,onSearchMatches:oe,onSettingsChanged:Wr}):J===`gallery`?(0,L.jsx)(pg,{confirmDelete:H?.confirmDelete??!1,find:pi,onSearchMatches:oe,openOnSingleClick:H?.openOnSingleClick??!1,onAddToTray:e=>void _r(e),shortcuts:W,showCheckboxes:H?.showCheckboxes??!0,showDetails:Pe,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1,view:un}):(0,L.jsx)(cp,{find:pi,onOpenLocation:Qn,onShowDetails:()=>Fe(!0),platform:v?.platform,showDetails:Pe,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1})]},J),(0,L.jsxs)(Hy,{children:[(0,L.jsx)(`span`,{children:J===`files`&&q.listing?Sy(e,q.listing):``}),v?(0,L.jsxs)(zy,{children:[(0,L.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),b?.available&&(0,L.jsxs)(By,{onClick:()=>{T(`updates`),Yn(`settings`)},title:e(`Version {version} is available.`,{version:b.latest}),type:`button`,children:[(0,L.jsx)(Vy,{}),e(`Update available`)]})]}):(0,L.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,L.jsx)(Ls,{clipboardItems:Tt,clipboardMove:Dt,currentDirectory:J===`files`?en:``,items:K,onAdd:e=>void _r(e),onClear:yr,onClose:()=>Mt(!1),onCopyToClipboard:e=>void Cr(e),onPosition:Dr,onRemove:vr,onTransfer:kr,position:Kt,visible:kt}),qe&&(0,L.jsx)(Ka,{creationOnly:!0,directory:qe.directory,menu:{x:qe.x,y:qe.y,paths:[],background:!0},onClose:()=>Je(null),onCreateFile:e=>void ur(e),onCreateFolder:e=>void ur(null,e),shortcuts:W}),$e&&(0,L.jsx)(Ka,{allowCompression:!0,directory:yy($e.path)??$e.path,menu:{x:$e.x,y:$e.y,paths:[$e.path]},onAddToTray:e=>void _r(e),onArchiveCreated:e=>{e&&Jn(yy($e.path)??$e.path)},onClose:()=>et(null),onCompressTo:(e,t)=>it({paths:e,name:t}),onCopy:(e,t)=>void ft(e,t),onDelete:e=>void vt(e,!1).then(()=>Jn(yy($e.path)??$e.path)),onOpen:(e,t)=>t?qn(e):void Wn(q.id,e),onOpenFile:e=>void U(e),onPaste:e=>void _t(e).then(t=>{t&&Jn(e)}),onRefresh:()=>Jn($e.path),shortcuts:W,target:{path:$e.path,isDirectory:!0}}),rt&&(0,L.jsx)(co,{initialDirectory:yy($e?.path??tn)??tn,initialName:rt.name,onCancel:()=>it(null),onCompress:async e=>{let t=await Pt(rt.paths,e);return!t.ok&&t.error&&aa(t.error),t.ok}}),Ye&&(0,L.jsx)(Pa,{items:[{label:e(`Extract here`),onSelect:()=>void li(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void li(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void li(`auto`)}],onClose:()=>Xe(null),x:Ye.x,y:Ye.y}),Rt&&(0,L.jsx)(uu,{delaySeconds:Rt.prompt.delaySeconds,hits:Rt.prompt.hits,onCancel:()=>{Rt.resolve(!1),Ut(null)},onConfirm:()=>{Rt.resolve(!0),Ut(null)},permanent:Rt.prompt.permanent},Rt.id),(0,L.jsx)(Tu,{}),(0,L.jsx)(Mu,{}),a&&(0,L.jsx)(Wv,{code:a.code,deviceName:a.deviceName,onAccept:()=>{od(a.requestId,!0),o(null)},onReject:()=>{od(a.requestId,!1),o(null)}}),(0,L.jsx)(Rv,{}),(0,L.jsx)(fe,{})]})})}var wy=i.div`
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
`,Ty=i.div`
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
`,Ey=i.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Dy=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${ka}
`,Oy=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,ky=i.button`
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
`,Ay=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,jy=i.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,My=i.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Ny=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Py=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Ma:``}
`,Fy=i.div`
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
        ${Na}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Iy=i.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Ly=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Ry=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,zy=i.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,By=i.button`
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
`,Vy=i.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Hy=i.footer`
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
`;function Uy({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:l,onSelect:u}){let d=B(),f=dc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,O.useState)(e),[v,y]=(0,O.useState)(null),[b,x]=(0,O.useState)(!0),[S,C]=(0,O.useState)(null),[w,T]=(0,O.useState)(()=>new Set),[ee,E]=(0,O.useState)(a??[]),[te,k]=(0,O.useState)([]),[A,j]=(0,O.useState)([]),[ne,M]=(0,O.useState)([]),[re,N]=(0,O.useState)([]),[P,ie]=(0,O.useState)(``),[F,ae]=(0,O.useState)(m.length===0),[oe,se]=(0,O.useState)(`files`),[R,z]=(0,O.useState)(0),[ce,le]=(0,O.useState)(pn),[V,ue]=(0,O.useState)(0),[de,H]=(0,O.useState)(0),[fe,pe]=(0,O.useState)(null),[me,he]=(0,O.useState)(null),[ve,U]=(0,O.useState)(0),[be,xe]=(0,O.useState)(null),[W,Se]=(0,O.useState)(_e.imageStripHeight);(0,O.useEffect)(()=>{Ge().then(xe,()=>xe(null))},[]),(0,O.useEffect)(()=>{a?E(a):Te().then(E,()=>E([]))},[a]),(0,O.useEffect)(()=>{Ee().then(k,()=>k([])),Ie().then(j,()=>j([]))},[]),(0,O.useEffect)(()=>{let e=!0;return x(!0),C(null),T(new Set),ie(p?``:_(h)),ye(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),ie(p?``:_(t.path)),x(!1))},t=>{e&&(C(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,R,p]),(0,O.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),le(e=>({...e,open:!0})),ue(e=>e+1);return}if(e.key===`Escape`){ce.open?(le(e=>({...e,open:!1,query:``})),H(0)):l();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),we();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),De();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),le(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),ue(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||He()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,O.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),we()):e.button===4&&(e.preventDefault(),De())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Ce=e=>{let t=e.trim();t.length!==0&&c(t)!==c(h)&&(M(e=>[...e,h]),N([]),se(`files`),g(t))},we=()=>{let e=ne.at(-1);e!==void 0&&(M(e=>e.slice(0,-1)),N(e=>[h,...e]),g(e))},De=()=>{let e=re[0];e!==void 0&&(N(e=>e.slice(1)),M(e=>[...e,h]),g(e))},Oe=v?.path??h,ke=v?.parent??(h?D(h):null);(0,O.useEffect)(()=>{I.available&&Oe&&I.send({type:`fs.watch`,payload:{paths:[Oe]}})},[Oe]),(0,O.useEffect)(()=>{if(I.available&&Oe)return I.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&c(t.data.path)===c(Oe)&&ye(Oe,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));T(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Oe]);let Ae=(v?.entries??[]).filter(e=>e.isDirectory||p&&(F||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),je=v?{...v,entries:Ae}:null,Me=ce.open&&ce.query.length>0,Ne=(0,O.useMemo)(()=>Me?Ae.filter(e=>Sn(e.name,ce)).map(e=>e.fullPath):[],[Me,Ae,ce]);(0,O.useEffect)(()=>{H(0)},[ce.query,ce.matchCase,ce.regex,v?.path]);let Pe=Ne.length===0?-1:Math.min(de,Ne.length-1),Fe=(0,O.useMemo)(()=>({...ce,currentPath:Pe>=0?Ne[Pe]:null}),[ce,Pe,Ne]),Le=be?.defaultView??_e,Re=o??{mode:Le.mode,iconSize:Le.iconSize,gridSize:Le.gridSize,sort:`name`,sortDescending:!1,columns:Le.columns??[`type`,`size`,`modified`]},ze=(s??Le.showImages)&&Re.mode===`list`,Be=P.trim(),Ve=Be.length>0?Gy(Be)?Be:Wy(Oe,Be):null,He=()=>{if(b||S)return;let e=n?[...w]:[...w].slice(0,1);e.length>0?u(e):Ve!==null&&Be!==_(Oe)?u([Ve]):!p&&Oe&&u([Oe])},Ue=(0,O.useCallback)(e=>{T(new Set(e)),ie(e.length===1?_(e[0]):e.length===0&&!p?_(Oe):``)},[Oe,p]),We=e=>{v?.entries.find(t=>t.fullPath===e)?.isDirectory?Ce(e):p&&u([e])},Ke=e=>ie(e),G=async e=>{let t=fe;if(pe(null),!t||!Oe)return;let n=e===null?await bt(Oe):await wt(Oe,e);n.ok&&n.path!==null&&(le(e=>({...e,open:!1,query:``})),e!==null&&ae(!0),z(e=>e+1),window.setTimeout(()=>{he(n.path),U(e=>e+1)},120))},qe=()=>{le(e=>({...e,open:!0})),ue(e=>e+1)},Je=e=>{H(t=>Ne.length===0?0:(t+e+Ne.length)%Ne.length)},Ye=e=>(0,L.jsxs)(tb,{children:[(0,L.jsxs)(nb,{children:[(0,L.jsx)(rb,{children:d(p?`File name:`:`Folder:`)}),(0,L.jsx)(ib,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),He())},spellCheck:!1,value:P}),p&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(rb,{children:d(`Files of type:`)}),(0,L.jsx)(Ya,{onChange:e=>ae(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:F?`all`:`supported`,width:220})]})]}),(0,L.jsxs)(ab,{children:[(0,L.jsx)(ob,{onClick:l,type:`button`,children:d(`Cancel`)}),(0,L.jsxs)(ob,{$primary:!0,disabled:b||S!==null||p&&w.size===0&&Be.length===0,onClick:He,type:`button`,children:[(0,L.jsx)(li,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),Xe=(0,L.jsxs)(qy,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,L.jsxs)(Jy,{children:[(0,L.jsxs)(Yy,{children:[(0,L.jsx)(Kr,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,L.jsx)(Xy,{onClick:l,title:d(`Cancel`),type:`button`,children:(0,L.jsx)(ui,{size:12})})]}),(0,L.jsxs)(Zy,{children:[(0,L.jsx)(Dg,{activeKind:oe===`overview`?`home`:oe===`gallery`?`gallery`:`files`,currentPath:Oe,drives:te,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:ee.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Ce(e),onOpenView:e=>{e===`home`?(T(new Set),ie(p?``:_(Oe)),se(`overview`)):e===`gallery`&&p&&(T(new Set),ie(``),se(`gallery`))},places:ee,recent:A,recentLimit:10}),(0,L.jsx)(Qy,{children:oe===`overview`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Vf,{drives:te,historyVersion:0,homePath:ee.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Ce(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ue,places:ee,readOnly:!0,recent:A,recentLimit:10,visibilityVersion:0}),Ye(ie)]}):oe===`gallery`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(pg,{onPick:e=>u([e]),onSelectionChange:Ue,showCheckboxes:be?.showCheckboxes??!0,view:{...ge,columns:[]}}),Ye(ie)]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)($y,{children:[(0,L.jsx)(eb,{disabled:ne.length===0,onClick:we,title:d(`Back`),type:`button`,children:(0,L.jsx)($r,{})}),(0,L.jsx)(eb,{disabled:re.length===0,onClick:De,title:d(`Forward`),type:`button`,children:(0,L.jsx)(ei,{})}),(0,L.jsx)(eb,{disabled:!ke,onClick:()=>ke&&Ce(ke),title:d(`Up one level`),type:`button`,children:(0,L.jsx)(Xr,{})}),(0,L.jsx)(Kf,{onNavigate:Ce,path:Oe}),(0,L.jsx)(eb,{onClick:e=>pe({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,L.jsx)(Qr,{})}),(0,L.jsx)(eb,{onClick:qe,title:d(`Search`),type:`button`,children:(0,L.jsx)(Yr,{})}),f.available&&(0,L.jsx)(eb,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,L.jsx)(Qi,{})})]}),ce.open&&(0,L.jsx)(Hu,{current:Pe,focusToken:V,matchCase:ce.matchCase,mode:ce.mode,onClose:()=>{le(e=>({...e,open:!1,query:``})),H(0)},onMatchCase:()=>le(e=>({...e,matchCase:!e.matchCase})),onMode:()=>le(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Je(1),onPrevious:()=>Je(-1),onQuery:e=>le(t=>({...t,query:e})),onRegex:()=>le(e=>({...e,regex:!e.regex})),query:ce.query,regex:ce.regex,total:Ne.length}),(0,L.jsx)(yc,{allowBackgroundMenu:!0,confirmDelete:be?.confirmDelete??!1,enableShortcuts:!0,error:S,find:Fe,imageStripHeight:W,loading:b,listing:je,onImageStripHeight:Se,onOpen:We,onOpenFile:We,onRefresh:()=>z(e=>e+1),onSelectionChange:Ue,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:be?.openOnSingleClick??!1,refreshToken:R,pendingRename:me,pendingRenameToken:ve,showCheckboxes:be?.showCheckboxes??!0,showDetails:!1,showImages:ze,singleSelect:!n,view:Re}),Ye(Ke)]})})]}),fe&&(0,L.jsx)(Ka,{creationOnly:!0,directory:Oe,menu:{x:fe.x,y:fe.y,paths:[],background:!0},onClose:()=>pe(null),onCreateFile:p?e=>void G(e):void 0,onCreateFolder:()=>void G(null),shortcuts:Lt})]});return i?Xe:(0,_a.createPortal)((0,L.jsx)(Ky,{onPointerDown:e=>{e.target===e.currentTarget&&l()},children:Xe}),document.body)}function Wy(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Gy(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ky=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Ma}
`,qy=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:va}
    ${({$inline:e})=>e?``:Da}
`,Jy=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Yy=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Xy=i.button`
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
`,Zy=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Qy=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,$y=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,eb=i.button`
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
`,tb=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,nb=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,rb=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,ib=i.input`
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
`,ab=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,ob=i.button`
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
`;function sb({mode:e,multiple:t,extensions:n,initial:r}){let i=B(),a=ue(),[o,s]=(0,O.useState)(null),[c,l]=(0,O.useState)({}),[u,d]=(0,O.useState)(null),[f,p]=(0,O.useState)(null),[m,h]=(0,O.useState)(null),g=(0,O.useRef)(0);(0,O.useEffect)(()=>{I.send({type:`app.ready`})},[]),(0,O.useEffect)(()=>(me(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>me(null)),[]),(0,O.useEffect)(()=>{Ge().then(e=>{s(e),S(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??_e,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,L.jsxs)(cb,{children:[(0,L.jsxs)(lb,{children:[(0,L.jsx)(ub,{children:(0,L.jsx)(di,{size:17})}),(0,L.jsx)(db,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,L.jsx)(nv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,L.jsx)(fb,{children:(0,L.jsx)(pb,{onClick:()=>I.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,L.jsx)(ui,{size:12})})})]}),(0,L.jsx)(mb,{children:(0,L.jsx)(Uy,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>I.send({type:`pick.cancel`}),onSelect:e=>I.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,L.jsx)(uu,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,L.jsx)(Tu,{}),(0,L.jsx)(fe,{})]})}var cb=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,lb=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,ub=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,db=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fb=i.div`
    display: flex;
    flex-shrink: 0;
`,pb=i.button`
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
`,mb=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,hb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,hb);var gb=document.getElementById(`root`),_b=new URLSearchParams(window.location.search),vb=_b.get(`picker`),yb=_b.get(`filter`)??``;gb&&(0,k.createRoot)(gb).render((0,L.jsx)(O.StrictMode,{children:(0,L.jsx)(ce,{children:vb===`folder`||vb===`file`?(0,L.jsx)(sb,{extensions:yb?yb.split(`;`).filter(Boolean):[],initial:_b.get(`initial`)??``,mode:vb,multiple:_b.get(`multiple`)===`1`}):(0,L.jsx)(Cy,{})})}));