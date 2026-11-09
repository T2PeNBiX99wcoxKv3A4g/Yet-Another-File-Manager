import{A as e,C as t,D as n,M as r,O as i,S as a,T as o,_ as s,b as c,c as l,d as u,f as d,g as f,h as p,i as m,j as h,k as g,l as _,m as v,n as y,o as b,p as x,r as S,s as ee,t as te,u as C,v as w,w as T,x as E,y as D}from"./theme-GtEFL-tp.js";var O=r(h(),1),k=g(),A=15e3,ne=new Set,j=new Map,M=!1,N=0,re;function ie(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function P(){M||(M=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>F(e)))}function F(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?j.get(n):void 0;n&&r&&(j.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),ne.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function ae(){if(re!==void 0)return;let e=()=>{if(!ie())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),re=setInterval(e,5e3)}var I={get available(){return ie()},send(e){ie()?(P(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&ae()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=A){if(!ie())return Promise.reject(Error(`Native bridge is not available.`));P();let r=`req-${++N}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{j.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);j.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return P(),ne.add(e),()=>ne.delete(e)}},L=T();function oe(e){return(t,n)=>{let r=e[t]??t;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function se(e){return I.available?await I.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var ce=(0,O.createContext)(oe({})),R=(0,O.createContext)(`en`);function z(){return(0,O.useContext)(ce)}var B=({children:e})=>{let[t,n]=(0,O.useState)(()=>oe({})),[r,i]=(0,O.useState)(`en`);return(0,O.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await se();if(e)return;n(()=>oe(t.strings)),i(t.locale)}catch{}};t();let r=I.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,O.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,L.jsx)(ce.Provider,{value:t,children:(0,L.jsx)(R.Provider,{value:r,children:e})})},V=e=>I.send({type:e});function le(){let[e,t]=(0,O.useState)(!1);return(0,O.useEffect)(()=>{if(I.available)return I.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>V(`window.minimize`),toggleMaximize:()=>V(`window.toggleMaximize`),close:()=>V(`window.close`)}}function ue(){return{onMouseDown:()=>V(`window.drag`),onDoubleClick:()=>V(`window.toggleMaximize`)}}function de(){let[e,t]=(0,O.useState)(!1),{maximized:n}=le();return(0,O.useEffect)(()=>{if(!I.available)return;let e=!1;return I.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,O.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var H=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function fe(){return(0,L.jsx)(L.Fragment,{children:H.map(([e,t])=>(0,L.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),I.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}var pe=null;function me(e){pe=e}function he(e){return pe?pe(e):Promise.resolve(!1)}var ge={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},_e={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function ve(e,t){return I.available?await I.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function ye(e){return I.available?(await I.request(`fs.open`,{path:e})).ok:!1}async function be(e,t=!0,n=!1,r=0,i){return await I.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function xe(e,t,n=0,r){return await I.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r})}async function Se(e,t=0,n){return await I.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Ce(e){I.available&&e.length!==0&&await I.request(`fs.archive.release`,{paths:e})}async function U(e){return I.available?await I.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function we(e,t){return I.available?(await I.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Te(e,t,n,r){return I.available?(await I.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Ee(e,t=!1){return I.available?await I.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function De(){return(await I.request(`fs.places`)).places}async function Oe(){return(await I.request(`fs.drives`)).drives}async function ke(e=!1){return(await I.request(`fs.recycle`,{includeOrphans:e})).entries}async function Ae(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await he({hits:r.protected,delaySeconds:r.delaySeconds??5,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await I.request(e,{...t,confirm:r.token})}return r}async function je(e=!1){let t=await I.request(`fs.recycle.empty`,{includeOrphans:e});await Ae(`fs.recycle.empty`,{includeOrphans:e},t)}async function Me(e){return!I.available||e.length===0?{ok:!1,done:0}:await I.request(`fs.recycle.restoreMany`,{ids:e})}async function Ne(e){if(!I.available||e.length===0)return{ok:!1,done:0};let t=await I.request(`fs.recycle.deleteMany`,{ids:e}),n=await Ae(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Pe(e){I.available&&e&&await I.request(`fs.recycle.properties`,{id:e})}async function Fe(){if(!I.available)return{entries:[],cancelled:!0,failed:!1};let e=await I.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Ie(){return I.available?(await I.request(`fs.recycle.admin.purge`)).ok:!1}async function Le(e=0,t=150,n=!1){return I.available?await I.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Re(){return I.available?(await I.request(`fs.recent`)).entries:[]}async function ze(){return I.available?(await I.request(`fs.frequent`)).entries:[]}async function Be(e){I.available&&await I.request(`fs.frequent.record`,{path:e})}async function Ve(){await I.request(`fs.recent.clear`)}async function He(){await I.request(`fs.frequent.clear`)}async function Ue(){return await I.request(`fs.visibility`)}async function We(){return await I.request(`fs.hidden.toggle`)}async function Ge(){return I.available?await I.request(`fs.index.tasks`):{count:0,directories:[]}}var Ke={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function qe(){if(!I.available)return Ke;let e=await I.request(`app.settings`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Je(){return I.available?(await I.request(`app.protection.defaults`)).paths??[]:[]}var Ye={registered:!1,pathMatches:!1,registeredPath:null};async function Xe(){return I.available?await I.request(`app.defaultManager.status`):{registered:!1,pathMatches:!1,registeredPath:null}}async function W(){return I.available?await I.request(`app.archive.status`):Ye}async function Ze(){return I.available?await I.request(`app.archive.register`):Ye}async function Qe(){return I.available?await I.request(`app.archive.unregister`):Ye}async function $e(e){if(!I.available)return e;let t=await I.request(`app.settings.set`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function et(e,t){I.available&&await I.request(`app.tabs.set`,{tabs:e,active:t})}async function tt(e,t,n){return I.available?(await I.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var nt={managed:0,private:0,workingSet:0,available:0};async function rt(){return I.available?await I.request(`app.info`):{version:`dev`,platform:`web`,rounded:!1}}async function it(){return I.available?await I.request(`app.updateStatus`)??null:null}async function at(){return I.available?await I.request(`app.checkUpdate`):{current:`dev`,latest:`dev`,available:!1}}async function ot(e){return!I.available||!e?!1:(await I.request(`app.openUrl`,{url:e})).ok}async function st(){return I.available?await I.request(`app.memory`):nt}async function ct(){return I.available?await I.request(`app.memory.trim`):nt}async function lt(){return I.available?(await I.request(`app.scheme`)).registered:!1}async function ut(e){return I.available?(await I.request(`app.scheme.set`,{enabled:e})).registered:!1}var dt={supported:!1,mode:`none`,active:!1,error:null};async function ft(){return I.available?await I.request(`app.startup`):dt}async function pt(e){return I.available?await I.request(`app.startup.set`,{mode:e}):dt}async function mt(e,t=!1){return!I.available||e.length===0?!1:(await I.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function ht(){return I.available?(await I.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function gt(){return I.available?await I.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function _t(e,t,n){return!I.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await I.request(`fs.operation.transfer`,{paths:e,target:t,move:n})}async function vt(e){return!I.available||e.length===0?[]:(await I.request(`fs.paths.info`,{paths:e})).entries}async function yt(e){return I.available?(await I.request(`fs.clipboard.paste`,{directory:e})).ok:!1}async function bt(e,t=!1){if(!I.available||e.length===0)return{ok:!1,error:null};let n=await I.request(`fs.operation.delete`,{paths:e,permanent:t});for(let r=0;r<2&&n.required&&n.token&&n.protected?.length;r++){if(!await he({hits:n.protected,delaySeconds:n.delaySeconds??5,permanent:t}))return{ok:!1,error:null,cancelled:!0};n=await I.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return n}async function xt(e,t){return I.available?await I.request(`fs.operation.rename`,{path:e,name:t}):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function St(e,t=!1){return I.available?await I.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Ct(e){return I.available?(await I.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function wt(e,t){return I.available?await I.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Tt(e,t,n){return I.available?await I.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Et(e,t){return I.available?await I.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Dt(e){I.available&&e.length!==0&&await I.request(`fs.operation.properties`,{paths:e})}async function Ot(e){I.available&&await I.request(`fs.operation.openWith`,{path:e})}async function kt(e){I.available&&await I.request(`fs.operation.terminal`,{path:e})}async function At(e){return I.available?await I.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function jt(e,t){return I.available?(await I.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Mt(){return I.available?await I.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Nt(){return I.available?await I.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function G(e){I.available&&await I.request(`fs.operation.showInExplorer`,{path:e})}async function Pt(e){return!I.available||e.length===0?{verbs:[],safe:!0}:await I.request(`shell.verbs`,{paths:e})}async function Ft(e,t,n,r){I.available&&e.length!==0&&await I.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function It(e,t){return!I.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await I.request(`fs.operation.compress`,{...t,paths:e})}async function Lt(){return I.available?(await I.request(`app.tasks`)).tasks:[]}async function Rt(){I.available&&await I.request(`app.tasks.clear`)}var zt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,refresh:`f5`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Bt=zt.openInNewTab;function Vt(e){Bt=e.trim()||zt.openInNewTab}function Ht(e){let t=Bt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Ut(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Wt(e){return e.split(`+`).filter(Boolean).map(e=>Gt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Gt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Kt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var qt=new Map;function Jt(e){return c(f(e)?l(e):e)}function Yt(e){return qt.get(Jt(e))}function Xt(e,t){qt.set(Jt(e),t)}function Zt(e){qt.delete(Jt(e))}function K(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var Qt=new Map,$t=new Map,q=new Set,J=0;function en(){Qt.clear(),$t.clear(),J+=1,q.forEach(e=>e())}function tn(){let[e,t]=(0,O.useState)(J);return(0,O.useEffect)(()=>{let e=()=>t(J);return q.add(e),()=>{q.delete(e)}},[]),e}var nn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function rn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return nn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function an(e,t,n=!1){let r=tn(),i=e===null?``:rn(e,t,n),[a,o]=(0,O.useState)(()=>Qt.get(i)??null);return(0,O.useEffect)(()=>{if(e===null){o(null);return}if(!I.available)return;if(Qt.has(i)){o(Qt.get(i)??null);return}let r=!0;return I.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?Qt.set(i,e.dataUrl):Qt.delete(i),r&&o(e.dataUrl)},()=>{Qt.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function on(e){let[t,n]=(0,O.useState)(e);return(0,O.useEffect)(()=>{if(!e){n(null);return}if(!f(e)){n(e);return}let t=!0;return Se(e,0,Yt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function sn(e){let t=tn(),[n,r]=(0,O.useState)(()=>e?$t.get(e)??null:null);return(0,O.useEffect)(()=>{if(!e||!I.available){r(null);return}if($t.has(e)){r($t.get(e)??null);return}let t=!0;return I.request(`fs.iconFile`,{path:e}).then(n=>{$t.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{$t.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var cn=null,ln=null;function un(){return cn===null?I.available?(ln??=I.request(`app.thumbnails`).then(e=>(cn=e.base??``,cn),()=>(cn=``,``)),ln):Promise.resolve(``):Promise.resolve(cn)}function dn(e,t=128,n=0){let[r,i]=(0,O.useState)(cn);return(0,O.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return un().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}`}function fn(e,t=0,n=``){let[r,i]=(0,O.useState)(cn);if((0,O.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return un().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function pn(e,t=0){let[n,r]=(0,O.useState)(cn);return(0,O.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return un().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var mn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},hn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function gn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=yn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Sn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var _n=`\0`,vn=``;function yn(e){return e.query!==_n&&(_n=e.query,vn=e.query.toLowerCase()),vn}var bn=`\0`,xn=null;function Sn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===bn)return xn;bn=t;try{xn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{xn=null}return xn}function Cn(e,t){return gn(e,t)!==null}var wn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Tn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function En(e){let t=On(e);for(let{kind:e}of wn)if(Tn[e].has(t))return e;return null}function Dn(e){return En(e)!==null}function On(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var kn=(0,O.createContext)({places:{},useIcons:!1}),An=kn.Provider;function jn(){return(0,O.useContext)(kn)}function Mn(e,t){return e.places[c(t)]}function Nn(e,t,n){return Mn(e,t)?.name||n}function Pn(e,t){try{let n=Number(localStorage.getItem(e));return Number.isFinite(n)?n:t}catch{return t}}function Fn(e,t){try{localStorage.setItem(e,String(t))}catch{}}function In(e){try{return JSON.parse(localStorage.getItem(e)??`null`)}catch{return null}}function Ln(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch{}}var Rn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,L.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,L.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),zn=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Bn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,L.jsx)(`path`,{d:`M14 3v4h4`})]}),Vn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,L.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,L.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),Hn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,L.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),Un=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M12 19V5`}),(0,L.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),Wn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,L.jsx)(`path`,{d:`M20 4v7h-7`})]}),Gn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M12 5v14`}),(0,L.jsx)(`path`,{d:`M5 12h14`})]}),Kn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M19 12H5`}),(0,L.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),qn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M5 12h14`}),(0,L.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),Jn=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,L.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),Yn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,L.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),Xn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,L.jsx)(`path`,{d:`M12 12v8`})]}),Zn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,L.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Qn=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,L.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,L.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,L.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),$n=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,L.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),er=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),tr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M4 7h16`}),(0,L.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,L.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,L.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),nr=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),rr=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),ir=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,L.jsxs)(`defs`,{children:[(0,L.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,L.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,L.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,L.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,L.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,L.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,L.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,L.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,L.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,L.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),ar=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,L.jsx)(`path`,{d:`M15 3v4h4`}),(0,L.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),or=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,L.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,L.jsx)(`path`,{d:`m13 5-2 14`})]}),sr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,L.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,L.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),cr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,L.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),lr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,L.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,L.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),ur=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,L.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),dr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,L.jsx)(`path`,{d:`M15 3v4h4`}),(0,L.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),fr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,L.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),pr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,L.jsx)(`path`,{d:`M8.5 14h7`})]}),mr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,L.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,L.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),hr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,L.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),gr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,L.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),_r=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,L.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),vr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,L.jsx)(`path`,{d:`M15 3v4h4`}),(0,L.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),yr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,L.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,L.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,L.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),br=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,L.jsx)(`path`,{d:`m14 6 4 4`})]}),xr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,L.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Sr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,L.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Cr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M12 4v10`}),(0,L.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,L.jsx)(`path`,{d:`M4.5 19.5h15`})]}),wr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,L.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,L.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Tr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,L.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,L.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Er=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,L.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Dr=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Or=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,L.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),kr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,L.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,L.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Ar=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),jr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,L.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,L.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,L.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Mr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,L.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Nr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,L.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Pr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,L.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,L.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Fr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,L.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Ir=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,L.jsx)(`path`,{d:`M3.5 12h17`}),(0,L.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Lr=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Rr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,L.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),zr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,L.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,L.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),Br=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,L.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),Vr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M12 16V4`}),(0,L.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,L.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),Hr=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),Ur=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,L.jsx)(`path`,{d:`M12 4v16`})]}),Wr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,L.jsx)(`path`,{d:`M15 4v16`})]}),Gr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,L.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,L.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,L.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),Kr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,L.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,L.jsx)(`path`,{d:`M12 14v2`})]}),qr=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,L.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]});function Y(e,t){return({size:n=t,...r})=>(0,L.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var Jr=Y(Rn,18),Yr=Y(zn,18),Xr=Y(Bn,18),Zr=Y(Vn,18),Qr=Y(Hn,16),$r=Y(Un,16),ei=Y(Wn,16),ti=Y(Gn,16),ni=Y(Kn,16),ri=Y(qn,16),ii=Y(Jn,12),ai=Y(Yn,18),oi=Y(Xn,14),si=Y(Zn,14),ci=Y(Qn,14),li=Y($n,18),ui=Y(er,18),di=Y(tr,18),fi=Y(nr,14),pi=Y(rr,14),mi=Y(ir,18),hi=Y(ar,18),gi=Y(or,18),_i=Y(sr,18),vi=Y(cr,18),yi=Y(lr,18),bi=Y(ur,18),xi=Y(dr,18),Si=Y(fr,18),Ci=Y(pr,18),wi=Y(mr,18),Ti=Y(hr,18),Ei=Y(gr,18),Di=Y(_r,18),Oi=Y(vr,18),ki=Y(yr,18),Ai=Y(br,16),ji=Y(xr,18),Mi=Y(Sr,18),Ni=Y(Cr,18),Pi=Y(wr,18),Fi=Y(Tr,18),Ii=Y(Er,18),Li=Y(Dr,18),Ri=Y(Or,18),zi=Y(kr,18),Bi=Y(Ar,18),Vi=Y(jr,18),Hi=Y(Mr,18),Ui=Y(Nr,18),Wi=Y(Pr,18),Gi=Y(Fr,18),Ki=Y(Ir,18),qi=Y(Lr,18),Ji=Y(Rr,16),Yi=Y(zr,16),Xi=Y(Br,16),Zi=Y(Vr,16),Qi=Y(Hr,16),$i=Y(Ur,16),ea=Y(Wr,16),ta=Y(Gr,16),na=Y(Kr,14),ra=Y(qr,14);async function ia(e,t,n){return I.available?(await I.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function aa(e){return ia(`folder`,[],e??``)}function oa(e){return ia(`file`,e??[],``)}var sa=null,ca=null;function la(e){sa=e}function ua(e){return sa?sa(e):Promise.resolve()}function da(e){ca=e}function fa(e,t=!1){return ca?ca(e,t):Promise.resolve(null)}var pa=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],ma=null,ha=0,ga=new Set;function _a(){ha+=1;for(let e of ga)e()}function va(e){return ga.add(e),()=>ga.delete(e)}function ya(){return ha}function ba(e){ma=e,_a()}function xa(){return(0,O.useSyncExternalStore)(va,ya,ya),ma}var Sa=e(),Ca=n`
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
`,Ma=n`animation: ${wa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Na=n`animation: ${Ta} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Pa=n`animation: ${Ea} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${Da} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var Fa=n`animation: ${Oa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Ia=n`animation: ${ka} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,La=n`animation: ${Aa} 140ms ease-out;`,Ra=n`animation: ${ja} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function za({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,O.useState)([]),s=(0,O.useRef)(void 0);if((0,O.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,O.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,L.jsx)(Ya,{},`group-rule-${i}`)),n.push((0,L.jsx)(Ja,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,L.jsx)(Ya,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,L.jsxs)(Ga,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,L.jsx)(Ka,{children:e.loading?(0,L.jsx)(Xa,{}):e.icon}),(0,L.jsx)(qa,{children:e.label}),a?(0,L.jsx)(ii,{size:12}):e.checked&&(0,L.jsx)(fi,{size:12})]},`${e.label}-${i}`))}),n};return(0,Sa.createPortal)((0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Ba,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Va,{children:r.map((e,t)=>(0,L.jsxs)(Ha,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,L.jsx)(Ua,{children:e.icon}),(0,L.jsx)(Wa,{children:e.label})]},`${e.label}-${t}`))}),(0,L.jsx)(Ya,{})]}),m(n,0)]}),a.map((e,t)=>(0,L.jsx)(Ba,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var Ba=i.div`
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
`;function Za({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:l,onRename:u,onDelete:d,onCopy:p,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:v=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onExtractArchive:S,allowCompression:ee=!1,onCompressTo:te,onArchiveCreated:C}){let w=z(),T=xa(),E=f(t),[D,k]=(0,O.useState)({verbs:[],safe:!0,loading:!1}),[A,ne]=(0,O.useState)({recommended:[],other:[],loading:!1}),[j,M]=(0,O.useState)(null),N=(0,O.useRef)(0),re=(0,O.useRef)(0),ie=e?.paths.length===1,P=e?.background?t?[t]:[]:e?.paths??[];if((0,O.useEffect)(()=>{if(!e){k({verbs:[],safe:!0,loading:!1}),ne({recommended:[],other:[],loading:!1});return}let t=++N.current;k({verbs:[],safe:!0,loading:P.length>0&&!E}),P.length>0&&!E&&Pt(P).then(e=>{N.current===t&&k({...e,loading:!1})},()=>{N.current===t&&k({verbs:[],safe:!0,loading:!1})});let r=++re.current;!E&&ie&&n?(ne({recommended:[],other:[],loading:!0}),At(n.path).then(e=>{re.current===r&&ne({...e,loading:!1})},()=>{re.current===r&&ne({recommended:[],other:[],loading:!1})})):ne({recommended:[],other:[],loading:!1})},[e,ie,n?.path,n?.isDirectory,P.length,E]),(0,O.useEffect)(()=>{if(!e||e.background||!ie||!n?.isDirectory){M(null);return}let t=!0;return Ct(n.path).then(e=>{t&&M(e)},()=>{t&&M(null)}),()=>{t=!1}},[e,ie,n?.path,n?.isDirectory]),!e)return null;let F=[],ae=[],I=()=>{if(!ie||!n)return`Archive`;let e=_(n.path);if(n.isDirectory)return e;let t=e.lastIndexOf(`.`);return t>0?e.slice(0,t):e},oe=async e=>{let n=await It(e,{directory:t,name:I(),format:`zip`,level:5});n.ok&&n.path?C?.(n.path,!0):ua(n.error??w(`Could not create the archive.`))},se=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ce=async()=>{if(!n||j===null)return;let e=await wt(n.path,!j);e.ok?(M(e.enabled),y?.()):ua(e.error??w(`Could not change the case sensitivity.`))},R=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Tt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Tt(e,t,`${a}\\${$a(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():ua(o.error??w(`Could not create the link.`))},B=async e=>{if(!n)return;let r=await aa(t);r&&await R(e,n.path,r,_(n.path),e.endsWith(`-copy`))},V=async e=>{let n=T?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=c(a)===c(t);await R(n,r.path,t,_(r.path),i&&!o)}},le=async()=>{let t=(await vt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&ba({paths:t})},ue=()=>{let e=T?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:w(`Cancel selected link`),icon:(0,L.jsx)(pi,{size:14}),onSelect:()=>ba(null)},...t?[{label:w(`Hard link`),icon:(0,L.jsx)(Xr,{size:14}),separatorBefore:!0,onSelect:()=>void V(`hard`)}]:[],{label:w(`Symbolic link`),icon:(0,L.jsx)(Xr,{size:14}),separatorBefore:!t,onSelect:()=>void V(`symbolic-file`)},...n?[{label:w(`Directory junction`),icon:(0,L.jsx)(Yr,{size:14}),onSelect:()=>void V(`junction`)},{label:w(`Smart copy`),icon:(0,L.jsx)(Ji,{size:14}),separatorBefore:!0,onSelect:()=>void V(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,L.jsx)(Ji,{size:14}),onSelect:()=>void V(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,L.jsx)(Ji,{size:14}),onSelect:()=>void V(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,L.jsx)(Ji,{size:14}),separatorBefore:!0,onSelect:()=>void V(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,L.jsx)(Ji,{size:14}),onSelect:()=>void V(`symbolic-copy`)}]:[]]};if(e.background){if(h&&ae.push({label:w(`New folder`),icon:(0,L.jsx)(ti,{size:16}),shortcut:Wt(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:w(`Folder`),icon:(0,L.jsx)(Yr,{size:14}),onSelect:()=>h(!1)}),E||e.push({label:w(`Case-sensitive folder`),icon:(0,L.jsx)(Yr,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...pa.map((e,t)=>({label:`${w(e.label)} (${e.extension})`,icon:(0,L.jsx)(Xr,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),F.push({label:w(`New`),icon:(0,L.jsx)(ti,{size:14}),children:e,onSelect:()=>void 0})}if(E||F.push({label:w(`Create link`),icon:(0,L.jsx)(Zi,{size:14}),disabled:!T,children:ue(),onSelect:()=>void 0}),v)return(0,L.jsx)(za,{items:F,onClose:a,quick:ae,x:e.x,y:e.y});!E&&ee&&(F.push({label:w(`Open in Terminal`),icon:(0,L.jsx)(Ui,{size:14}),onSelect:()=>void kt(t)}),F.push({label:w(`Show in Explorer`),icon:(0,L.jsx)(Yr,{size:14}),separatorBefore:!0,onSelect:()=>void G(t)})),m&&ae.push({label:w(`Paste`),icon:(0,L.jsx)(Xi,{size:16}),disabled:!i,shortcut:Wt(r.paste),onSelect:()=>m(t)}),y&&ae.push({label:w(`Refresh`),icon:(0,L.jsx)(ei,{size:16}),shortcut:Wt(r.refresh),onSelect:y}),E||ae.push({label:w(`Properties`),icon:(0,L.jsx)(ai,{size:16}),shortcut:Wt(r.properties),onSelect:()=>void Dt([t])})}else{if(o&&F.push({label:w(`Open`),icon:(0,L.jsx)(ri,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&l?.(n.path)}}),n?.isDirectory&&(o&&F.push({label:w(`Open in new tab`),icon:(0,L.jsx)(ti,{size:14}),onSelect:()=>o(n.path,!0)}),m&&F.push({label:w(`Paste into folder`),icon:(0,L.jsx)(Xi,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),E||F.push({label:w(`Open in Terminal`),icon:(0,L.jsx)(Ui,{size:14}),onSelect:()=>void kt(n.path)})),!E&&ie&&n&&!n.isDirectory&&s(n.path)&&S&&F.push({label:w(`Extract archive`),icon:(0,L.jsx)(bi,{size:14}),separatorBefore:!0,children:[{label:w(`Extract here`),icon:(0,L.jsx)(bi,{size:14}),onSelect:()=>S(n.path,`here`)},{label:w(`Extract to a folder named after the archive`),icon:(0,L.jsx)(bi,{size:14}),onSelect:()=>S(n.path,`named`)},{label:w(`Auto extract to the current folder`),icon:(0,L.jsx)(bi,{size:14}),onSelect:()=>S(n.path,`auto`)},{label:w(`Extract to…`),icon:(0,L.jsx)(Yr,{size:14}),separatorBefore:!0,onSelect:()=>S(n.path,`choose`)}],onSelect:()=>void 0}),!E&&ie&&n){let e=[];if(A.loading)e.push({label:w(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of A.recommended)e.push({label:t.name,group:w(`Suggested apps`),icon:t.icon?(0,L.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,L.jsx)(Si,{size:14}),onSelect:()=>void jt(n.path,t.path).then(e=>{e||Ot(n.path)})});for(let t of A.other)e.push({label:t.name,group:w(`Other apps`),icon:t.icon?(0,L.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,L.jsx)(Si,{size:14}),onSelect:()=>void jt(n.path,t.path).then(e=>{e||Ot(n.path)})})}e.push({label:w(`Choose another app…`),icon:(0,L.jsx)(Si,{size:14}),separatorBefore:!0,onSelect:()=>void Ot(n.path)}),F.push({label:w(`Open with`),icon:(0,L.jsx)(Si,{size:14}),children:e,onSelect:()=>void Ot(n.path)})}if(E||F.push({label:w(`Compress`),icon:(0,L.jsx)(bi,{size:14}),separatorBefore:!0,children:[{label:w(`Compress to ZIP`),icon:(0,L.jsx)(bi,{size:14}),onSelect:()=>void oe(e.paths)},{label:w(`Compress to…`),icon:(0,L.jsx)(bi,{size:14}),onSelect:()=>te?.(e.paths,I())}],onSelect:()=>void 0}),!E&&(e?.paths.length??0)>0){let e=[{label:w(`Select link source`),icon:(0,L.jsx)(Zi,{size:14}),onSelect:()=>void le()},...T?[{label:w(`Cancel selected link`),icon:(0,L.jsx)(pi,{size:14}),onSelect:()=>ba(null)}]:[],...ie&&n?n.isDirectory?[{label:w(`Symbolic link`),icon:(0,L.jsx)(Yr,{size:14}),separatorBefore:!0,onSelect:()=>void B(`symbolic-folder`)},{label:w(`Directory junction`),icon:(0,L.jsx)(Yr,{size:14}),onSelect:()=>void B(`junction`)},{label:w(`Smart copy`),icon:(0,L.jsx)(Ji,{size:14}),separatorBefore:!0,onSelect:()=>void B(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,L.jsx)(Ji,{size:14}),onSelect:()=>void B(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,L.jsx)(Ji,{size:14}),onSelect:()=>void B(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,L.jsx)(Ji,{size:14}),separatorBefore:!0,onSelect:()=>void B(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,L.jsx)(Ji,{size:14}),onSelect:()=>void B(`symbolic-copy`)}]:[{label:w(`Symbolic link`),icon:(0,L.jsx)(Xr,{size:14}),separatorBefore:!0,onSelect:()=>void B(`symbolic-file`)},{label:w(`Hard link`),icon:(0,L.jsx)(Xr,{size:14}),onSelect:()=>void B(`hard`)}]:[]];F.push({label:w(`Create link`),icon:(0,L.jsx)(Zi,{size:14}),children:e,onSelect:()=>void 0})}!E&&n?.isDirectory&&j!==null&&F.push({label:w(`Case-sensitive names`),icon:(0,L.jsx)(Yr,{size:14}),checked:j,onSelect:()=>void ce()}),F.push({label:w(`Copy as path`),icon:(0,L.jsx)(Ji,{size:14}),onSelect:()=>void se(e.paths)}),b&&F.push({label:w(`Add to file tray`),icon:(0,L.jsx)(Gi,{size:14}),onSelect:()=>b(e.paths)}),x&&!E&&F.push({label:w(`Add to favorites`),icon:(0,L.jsx)(qi,{size:14}),onSelect:()=>x(e.paths)}),E||F.push({label:w(`Show in Explorer`),icon:(0,L.jsx)(Yr,{size:14}),separatorBefore:!0,onSelect:()=>void G(e.paths[0])}),p&&ae.push({label:w(`Cut`),icon:(0,L.jsx)(Yi,{size:16}),shortcut:Wt(r.cut),onSelect:()=>p(e.paths,!0)},{label:w(`Copy`),icon:(0,L.jsx)(Ji,{size:16}),shortcut:Wt(r.copy),onSelect:()=>p(e.paths,!1)}),ie&&n&&u&&ae.push({label:w(`Rename`),icon:(0,L.jsx)(Ai,{size:16}),shortcut:Wt(r.rename),onSelect:()=>u(n.path)}),d&&ae.push({label:w(`Delete`),icon:(0,L.jsx)(di,{size:16}),danger:!0,shortcut:Wt(r.delete),onSelect:()=>d(e.paths)}),E||ae.push({label:w(`Properties`),icon:(0,L.jsx)(ai,{size:16}),shortcut:Wt(r.properties),onSelect:()=>void Dt(e.paths)})}if(D.loading)F.push({label:w(`More actions`),icon:(0,L.jsx)(Si,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(D.verbs.length>0){let e={items:[],children:new Map};for(let t of D.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,L.jsx)(Qa,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Ft(P,D.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];F.push({label:w(D.safe?`More actions`:`More actions (extensions)`),icon:(0,L.jsx)(Si,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,L.jsx)(za,{items:F,onClose:a,quick:ae,x:e.x,y:e.y})}function Qa({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,L.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,L.jsx)(ri,{size:14});case`document`:return(0,L.jsx)(Oi,{size:14});case`cut`:return(0,L.jsx)(Yi,{size:14});case`copy`:return(0,L.jsx)(Ji,{size:14});case`paste`:return(0,L.jsx)(Xi,{size:14});case`trash`:return(0,L.jsx)(di,{size:14});case`pencil`:return(0,L.jsx)(Ai,{size:14});case`gear`:return(0,L.jsx)(ai,{size:14});case`star`:return(0,L.jsx)(Li,{size:14});case`pin`:return(0,L.jsx)(oi,{size:14});case`executable`:return(0,L.jsx)(Si,{size:14});case`share`:return(0,L.jsx)(Zi,{size:14});case`arrow`:return(0,L.jsx)(ri,{size:14});default:return(0,L.jsx)(mi,{size:14})}}function $a(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function eo({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let[c,l]=(0,O.useState)(null),u=(0,O.useRef)(null),d=t.find(t=>t.value===e)??t[0];return(0,O.useEffect)(()=>{if(!c)return;let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&u.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[c]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(to,{$icon:a!==void 0,"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(c){l(null);return}let e=u.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;l({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:u,style:i&&!a?{width:i}:void 0,title:o??d?.title,type:`button`,children:[a===void 0?(0,L.jsx)(no,{children:d?.label??``}):(0,L.jsx)(ro,{children:a}),a===void 0&&(0,L.jsx)(io,{children:(0,L.jsx)(ii,{size:11})})]}),c&&(0,Sa.createPortal)((0,L.jsx)(ao,{"aria-label":`options`,"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:c.bottom,left:c.left,minWidth:c.width,top:c.top},children:t.map(t=>(0,L.jsxs)(oo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),l(null)},role:`option`,title:t.title,type:`button`,children:[(0,L.jsx)(so,{children:t.label}),t.value===e&&(0,L.jsx)(fi,{size:11})]},t.value))}),document.body)]})}var to=i.button`
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
`,co=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],lo=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],uo=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],fo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],po=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function mo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=z(),a=(0,O.useRef)(null),[o,s]=(0,O.useState)(e),[c,l]=(0,O.useState)(t),[u,d]=(0,O.useState)(`zip`),[f,p]=(0,O.useState)(`5`),[m,h]=(0,O.useState)(`default`),[g,_]=(0,O.useState)(`none`),[v,y]=(0,O.useState)(``),[b,x]=(0,O.useState)(`0`),[S,ee]=(0,O.useState)(!1);(0,O.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let te=co.find(e=>e.value===u)??co[0],C=u===`zip`||u===`zipx`,w=g!==`none`,T=C||u===`7z`,E=u===`zip`||u===`7z`,D=async()=>{if(S||!c.trim()||!o||w&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:te.level?Number(f):0,method:C?m:null,encryption:T?g:`none`,password:w?v:void 0,splitSize:E?Number(b):0});ee(!1),e&&n()};return(0,Sa.createPortal)((0,L.jsx)(ho,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,L.jsxs)(go,{"aria-modal":`true`,role:`dialog`,children:[(0,L.jsx)(_o,{children:i(`Compress to…`)}),(0,L.jsxs)(vo,{children:[(0,L.jsx)(yo,{children:i(`Archive name`)}),(0,L.jsx)(bo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&D()}}),(0,L.jsx)(xo,{children:te.extension})]}),(0,L.jsxs)(vo,{children:[(0,L.jsx)(yo,{children:i(`Format`)}),(0,L.jsx)(eo,{onChange:e=>d(e),options:co.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,L.jsxs)(vo,{children:[(0,L.jsx)(yo,{children:i(`Method`)}),(0,L.jsx)(eo,{disabled:!C,onChange:h,options:lo.map(e=>({...e,label:i(e.label)})),value:C?m:`default`,width:236,zIndex:3700})]}),(0,L.jsxs)(vo,{children:[(0,L.jsx)(yo,{children:i(`Encryption`)}),(0,L.jsx)(eo,{disabled:!T,onChange:e=>{_(e),e===`none`&&y(``)},options:uo.map(e=>({...e,label:i(e.label)})),value:T?g:`none`,width:236,zIndex:3700})]}),w&&(0,L.jsxs)(vo,{children:[(0,L.jsx)(yo,{children:i(`Password`)}),(0,L.jsx)(bo,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,L.jsxs)(vo,{children:[(0,L.jsx)(yo,{children:i(`Split volumes`)}),(0,L.jsx)(eo,{disabled:!E,onChange:x,options:fo.map(e=>({...e,label:i(e.label)})),value:E?b:`0`,width:236,zIndex:3700})]}),(0,L.jsxs)(vo,{children:[(0,L.jsx)(yo,{children:i(`Compression level`)}),(0,L.jsx)(eo,{disabled:!te.level,onChange:p,options:po.map(e=>({...e,label:i(e.label)})),value:te.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,L.jsxs)(vo,{$stack:!0,children:[(0,L.jsx)(yo,{children:i(`Destination`)}),(0,L.jsxs)(So,{children:[(0,L.jsx)(Co,{title:o,children:o}),(0,L.jsx)(To,{disabled:S,onClick:()=>void aa(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,L.jsxs)(wo,{children:[(0,L.jsx)(To,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,L.jsx)(Eo,{disabled:S||!c.trim()||w&&v.length===0,onClick:()=>void D(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var ho=i.div`
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
`;function Do({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=z(),c=(0,O.useRef)(null);return(0,O.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Sa.createPortal)((0,L.jsx)(Oo,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,L.jsxs)(ko,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsx)(Ao,{children:t}),(0,L.jsx)(jo,{children:n}),(0,L.jsxs)(Mo,{children:[(0,L.jsx)(No,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,L.jsx)(No,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var Oo=i.div`
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
`,Po=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Fo=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Io=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Lo=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Ro({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=z(),[l,u]=(0,O.useState)(!1),[d,f]=(0,O.useState)(!1),[p,m]=(0,O.useState)(!1),[h,g]=(0,O.useState)(0),[_,v]=(0,O.useState)(0),[y,b]=(0,O.useState)(null),[x,S]=(0,O.useState)(!1),[ee,te]=(0,O.useState)(!1),C=(0,O.useRef)(null),w=(0,O.useRef)(null),T=(0,O.useRef)(null),E=(0,O.useRef)(null),[D,k]=(0,O.useState)(()=>{let e=Pn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),A=e?.path??null,ne=on(A),j=e?zo(e.name):``,M=!!e&&!e.isDirectory&&Po.has(j),N=!!e&&!e.isDirectory&&Fo.has(j),re=!!e&&!e.isDirectory&&Io.has(j),ie=!!e&&!e.isDirectory&&Lo.has(j),P=!!e&&!e.isDirectory&&j===`pdf`,F=dn(M?ne:null,512,e?.modified??0),ae=fn(re?ne:null,e?.modified??0,j),I=fn(M||N?ne:null,e?.modified??0,j),oe=pn(P?ne:null,e?.modified??0),se=an(!M&&!N&&!re&&!ie&&!P?ne:null,e?.isDirectory??!1);if((0,O.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),te(!1)},[A]),(0,O.useEffect)(()=>{if(!ne||!ie){b(null),S(!1);return}let e=!0;return S(!0),b(null),U(ne).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:`Could not read this file.`}),S(!1))}),()=>{e=!1}},[ne,ie]),!e&&!s)return null;let ce=e=>{T.current={x:e.clientX,width:w.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},R=e=>{let t=T.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},B=e=>{T.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},V=e=>{E.current={y:e.clientY,height:D},e.currentTarget.setPointerCapture(e.pointerId)},le=e=>{let t=E.current;if(!t)return;let n=Math.max(80,Math.min(560,t.height+e.clientY-t.y));k(n),Fn(`yafm.preview.media.height`,n)},ue=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,L.jsxs)(Vo,{children:[r&&(0,L.jsx)(Ho,{onPointerDown:ce,onPointerMove:R,onPointerUp:B,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,L.jsx)(Uo,{ref:w,style:{width:r?t:0},children:(0,L.jsxs)(Wo,{children:[(0,L.jsx)(Yr,{size:56}),(0,L.jsx)(`span`,{children:s})]})})]});let de=()=>{let e=C.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,L.jsxs)(Vo,{children:[r&&(0,L.jsx)(Ho,{onPointerDown:ce,onPointerMove:R,onPointerUp:B,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,L.jsxs)(Uo,{ref:w,style:{width:r?t:0},children:[(0,L.jsx)(Go,{style:{height:D},children:M&&I&&!l?(0,L.jsxs)(qo,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,L.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:de,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:F??void 0,preload:`metadata`,ref:C,src:I}),(0,L.jsx)(Jo,{$visible:!d,onClick:de,title:c(`Play`),type:`button`,children:(0,L.jsx)(Qi,{size:28})}),(0,L.jsxs)(Yo,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,L.jsxs)(Xo,{children:[(0,L.jsx)(`span`,{children:Bo(_)}),(0,L.jsx)(`span`,{children:Bo(h)})]}),(0,L.jsx)(Zo,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=C.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):N&&I?(0,L.jsx)(`audio`,{controls:!0,src:I}):re&&ae?(0,L.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:ae}):P&&oe&&!ee?(0,L.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>te(!0),src:oe}):P?(0,L.jsx)(Xr,{size:64}):ie?(0,L.jsx)(Qo,{children:x||!y?(0,L.jsx)(es,{children:c(`Loading…`)}):y.error?(0,L.jsx)(es,{children:y.error}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)($o,{children:y.text}),y.truncated&&(0,L.jsx)(es,{children:c(`Showing the first 256 KB.`)})]})}):M&&F?(0,L.jsx)(`img`,{alt:``,src:F}):se?(0,L.jsx)(`img`,{alt:``,src:se}):e.isDirectory?(0,L.jsx)(Yr,{size:64}):(0,L.jsx)(Xr,{size:64})}),(0,L.jsx)(Ko,{onDoubleClick:()=>{k(210),Fn(`yafm.preview.media.height`,210)},onPointerDown:V,onPointerMove:le,onPointerUp:ue,title:c(`Drag to resize; double-click to reset`)}),(0,L.jsxs)(ts,{children:[(0,L.jsx)(ns,{title:e.path,children:e.name}),o&&(0,L.jsx)(rs,{children:o}),(0,L.jsx)(is,{children:e.fields.map(e=>(0,L.jsxs)(as,{children:[(0,L.jsx)(os,{children:e.label}),(0,L.jsx)(ss,{title:e.value,children:e.value})]},e.label))})]})]})]})}function zo(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Bo(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Vo=i.div`
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
`,cs=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],ls=[...cs],us={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},ds={folder:e=>(0,L.jsx)(Yr,{size:e}),home:e=>(0,L.jsx)(Jr,{size:e}),desktop:e=>(0,L.jsx)(ji,{size:e}),documents:e=>(0,L.jsx)(Mi,{size:e}),downloads:e=>(0,L.jsx)(Ni,{size:e}),pictures:e=>(0,L.jsx)(Pi,{size:e}),music:e=>(0,L.jsx)(Fi,{size:e}),videos:e=>(0,L.jsx)(Ii,{size:e}),drive:e=>(0,L.jsx)(Zr,{size:e}),image:e=>(0,L.jsx)(_i,{size:e}),video:e=>(0,L.jsx)(vi,{size:e}),audio:e=>(0,L.jsx)(yi,{size:e}),text:e=>(0,L.jsx)(hi,{size:e}),code:e=>(0,L.jsx)(gi,{size:e}),clock:e=>(0,L.jsx)(li,{size:e}),star:e=>(0,L.jsx)(Li,{size:e}),file:e=>(0,L.jsx)(Xr,{size:e}),archive:e=>(0,L.jsx)(bi,{size:e}),pdf:e=>(0,L.jsx)(xi,{size:e}),executable:e=>(0,L.jsx)(Si,{size:e}),font:e=>(0,L.jsx)(Ci,{size:e}),database:e=>(0,L.jsx)(wi,{size:e}),config:e=>(0,L.jsx)(Ti,{size:e}),spreadsheet:e=>(0,L.jsx)(Ei,{size:e}),presentation:e=>(0,L.jsx)(Di,{size:e}),document:e=>(0,L.jsx)(Oi,{size:e}),app:e=>(0,L.jsx)(mi,{size:e}),gear:e=>(0,L.jsx)(ai,{size:e}),pin:e=>(0,L.jsx)(oi,{size:e}),trash:e=>(0,L.jsx)(di,{size:e}),overview:e=>(0,L.jsx)(ki,{size:e}),book:e=>(0,L.jsx)(Ri,{size:e}),briefcase:e=>(0,L.jsx)(zi,{size:e}),cloud:e=>(0,L.jsx)(Bi,{size:e}),gamepad:e=>(0,L.jsx)(Vi,{size:e}),camera:e=>(0,L.jsx)(Hi,{size:e}),terminal:e=>(0,L.jsx)(Ui,{size:e}),server:e=>(0,L.jsx)(Wi,{size:e}),package:e=>(0,L.jsx)(Gi,{size:e}),globe:e=>(0,L.jsx)(Ki,{size:e}),heart:e=>(0,L.jsx)(qi,{size:e}),share:e=>(0,L.jsx)(Wi,{size:e}),favorites:e=>(0,L.jsx)(qi,{size:e})};function fs(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function ps(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??cs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||ls.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=fs(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${us[n]??n}${ms(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function ms(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function hs({panel:e,size:t=16}){let n=sn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,L.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?ds[e.icon]:void 0;if(r)return(0,L.jsx)(L.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,L.jsx)(Yr,{size:t});case`recent`:return(0,L.jsx)(li,{size:t});case`frequent`:return(0,L.jsx)(Li,{size:t});case`drives`:return(0,L.jsx)(Zr,{size:t});case`home`:return(0,L.jsx)(Jr,{size:t});case`share`:return(0,L.jsx)(Wi,{size:t});case`favorites`:return(0,L.jsx)(qi,{size:t});default:return(0,L.jsx)(Yr,{size:t})}}function gs({place:e,size:t=18}){let n=sn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,L.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&ds[e.icon]?(0,L.jsx)(L.Fragment,{children:ds[e.icon](t)}):(0,L.jsx)(Yr,{size:t})}var _s=`#64748b`;function vs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function ys({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=z(),[c,l]=(0,O.useState)(``),[u,d]=(0,O.useState)(`#2dd4bf`),f=(0,O.useRef)(null);(0,O.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Sa.createPortal)((0,L.jsxs)(bs,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,L.jsxs)(xs,{children:[(0,L.jsx)(`span`,{children:s(`Tags`)}),(0,L.jsx)(Ss,{onClick:o,title:s(`Close`),type:`button`,children:(0,L.jsx)(pi,{size:11})})]}),(0,L.jsxs)(Cs,{children:[p.length===0&&(0,L.jsx)(Ds,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,L.jsxs)(ws,{children:[(0,L.jsx)(Ts,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,L.jsxs)(Es,{$color:t,$ink:vs(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,L.jsx)(fi,{size:11}),(0,L.jsx)(`span`,{children:e})]})]},e)})]}),(0,L.jsxs)(Os,{children:[(0,L.jsx)(Ts,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,L.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,L.jsx)(ks,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var bs=i.div`
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
`,As={file:Xr,folder:Yr,text:hi,code:gi,image:_i,video:vi,audio:yi,archive:bi,pdf:xi,executable:Si,font:Ci,database:wi,config:Ti,spreadsheet:Ei,presentation:Di,document:Oi},js={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Ms(e){let t=e.lastIndexOf(`.`);return t>0?js[e.slice(t).toLowerCase()]??`file`:`file`}function Ns({name:e,size:t}){let n=As[e??`file`]??Xr;return(0,L.jsx)(n,{size:t})}function Ps({path:e,name:t,isDirectory:n,size:r=18}){let i=an(e,n);return i?(0,L.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,L.jsx)(Yr,{size:r}):(0,L.jsx)(Ns,{name:Ms(t),size:r})}var Fs=`application/x-yafm-paths`,Is=[Fs,`text/uri-list`];function Ls(e){return e?.types.some(e=>Is.includes(e.toLowerCase()))??!1}function Rs(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Fs);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Bs).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var zs=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Bs(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return zs?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Vs(e,t,n=!0){e.dataTransfer.setData(Fs,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Hs({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=z(),[m,h]=(0,O.useState)(()=>new Set),[g,_]=(0,O.useState)(!1),v=(0,O.useRef)(null),y=(0,O.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,O.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,O.useRef)(null);if((0,O.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Ls(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Rs(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),te=S.size,C=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},w=()=>{h(ee?new Set:S)},T=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},D=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},k=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},A=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},ne=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},j=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},M=(e,t)=>{let n=m.has(e.path);return(0,L.jsxs)(ec,{$checked:n,draggable:!0,onClick:()=>C(e.path),onDragStart:r=>{Vs(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,L.jsx)(tc,{$checked:n,onClick:t=>{t.stopPropagation(),C(e.path)},type:`button`,children:n&&(0,L.jsx)(fi,{size:8})}),(0,L.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,L.jsxs)(nc,{children:[(0,L.jsx)(rc,{children:e.name}),(0,L.jsx)(ic,{children:E(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},N=e=>{Ls(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,L.jsxs)(Us,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:N,onDragOver:N,onDrop:e=>{let{paths:t}=Rs(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,L.jsxs)(Ws,{onPointerDown:T,onPointerMove:D,onPointerUp:k,children:[(0,L.jsxs)(Gs,{children:[(0,L.jsx)(Gi,{size:13}),p(`Tray`),(0,L.jsx)(Ks,{children:te})]}),(0,L.jsxs)(qs,{onPointerDown:e=>e.stopPropagation(),children:[(0,L.jsx)(Js,{onClick:w,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,L.jsx)(Js,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,L.jsx)(Ys,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,L.jsx)(pi,{size:10})})]})]}),(0,L.jsxs)(Xs,{children:[(0,L.jsxs)(Qs,{children:[p(`In this app`),(0,L.jsx)(Ks,{children:e.length})]}),e.length===0&&(0,L.jsx)(Zs,{children:p(`Drag files or folders here`)}),e.map(e=>M(e,!0)),t.length>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Qs,{$clipboard:!0,children:[p(`Clipboard`),(0,L.jsx)(Ks,{children:t.length}),n&&(0,L.jsx)($s,{children:p(`cut`)})]}),t.map(e=>M(e,n))]})]}),(0,L.jsxs)(ac,{children:[(0,L.jsx)(oc,{$plain:!0,disabled:y.length===0,onClick:ne,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,L.jsx)(oc,{disabled:m.size===0||!a,onClick:j,type:`button`,children:p(`Move here`)}),(0,L.jsx)(oc,{$danger:!0,disabled:y.length===0,onClick:A,type:`button`,children:p(`Remove`)})]})]})}var Us=i.div`
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
`,sc=new Map,cc=new Set,lc=0;function uc(){lc+=1;for(let e of cc)e()}function dc(e,t){t?sc.set(e,t):sc.delete(e),uc()}function fc(e){return sc.has(e)}function pc(e,t,n){sc.get(e)?.(t,n)}function mc(e){return cc.add(e),()=>cc.delete(e)}function hc(){return lc}function gc(e){return(0,O.useSyncExternalStore)(mc,hc,hc),{available:fc(e),open:(t,n)=>pc(e,t,n)}}function _c(e){return[...sc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function vc(e){return(0,O.useSyncExternalStore)(mc,hc,hc),{available:_c(e).length>0,open:(t,n)=>{let r=_c(e).at(-1);r&&pc(r,t,n)}}}var yc=60,bc=300,xc=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],Sc=190,Cc=120;function wc({listing:e,loading:t,error:n,find:r=hn,view:i,showImages:o,imageStripHeight:s=Sc,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:f,onOpenFile:p,showCheckboxes:m=!0,openOnSingleClick:h=!1,shortcuts:g=zt,enableShortcuts:y=!0,refreshToken:b=0,onRefresh:x,onRename:S,onClipboardChanged:ee,onTransfer:te,onAddToTray:C,onAddFavorite:w,onExtractArchive:T,onPaste:E,confirmDelete:D=!1,previewVideoAudio:k=!1,previewVideoAutoplay:A=!1,showDetails:ne=!0,onPreviewInfo:j,onActivate:M,groupOf:N,onGridScroll:re,gridFooter:ie,allowBackgroundMenu:P=!0,readOnly:F=!1,onSelectionChange:ae,onSelectionCountChange:I,selectionMenuRequest:oe,selectionMenuId:se,singleSelect:ce=!1,pendingRename:R=null,pendingRenameToken:B=0}){let V=z(),le=jn(),ue=(0,O.useRef)(null),de=(0,O.useRef)(null),H=(0,O.useRef)(null),[fe,pe]=(0,O.useState)(bc),[me,he]=(0,O.useState)({top:0,height:640}),ge=(0,O.useRef)(null),_e=(0,O.useRef)(null),[ve,ye]=(0,O.useState)(null),[be,xe]=(0,O.useState)(s),[Se,Ce]=(0,O.useState)(()=>new Set),U=(0,O.useRef)(Se),we=(0,O.useRef)([]);U.current=Se,(0,O.useEffect)(()=>ae?.([...Se]),[Se,ae]),(0,O.useEffect)(()=>I?.(Se.size),[Se,I]),(0,O.useEffect)(()=>{let e=oe;if(!e||e.token===De.current)return;De.current=e.token;let t=[...U.current];t.length!==0&&(Ee({x:e.x,y:e.y,paths:t,background:!1}),ht().then(Ve,()=>Ve(!1)))},[oe]);let[Te,Ee]=(0,O.useState)(null),De=(0,O.useRef)(0),[Oe,ke]=(0,O.useState)(null),[Ae,je]=(0,O.useState)(null),[Me,Ne]=(0,O.useState)(null),Pe=(0,O.useRef)(Me);Pe.current=Me;let Fe=(0,O.useRef)(0),Ie=(0,O.useRef)(M);Ie.current=M;let[Le,Re]=(0,O.useState)(()=>{let e=Pn(`yafm.preview.width`,320);return e>=220?e:320}),ze=(0,O.useCallback)(e=>{Re(e),Fn(`yafm.preview.width`,e)},[]),[Be,Ve]=(0,O.useState)(!1),He=(0,O.useCallback)((e,t)=>{let n=[...U.current];n.length!==0&&(Ee({x:e,y:t,paths:n,background:!1}),ht().then(Ve,()=>Ve(!1)))},[]);(0,O.useEffect)(()=>{if(se)return dc(se,Se.size>0?He:null),()=>dc(se,null)},[se,Se,He]),(0,O.useEffect)(()=>{Ce(new Set),Ne(null),Ee(null),_e.current=null},[e?.path]),(0,O.useEffect)(()=>{xe(s)},[s]),(0,O.useEffect)(()=>{Ce(new Set),Ne(null),_e.current=null},[b]);let Ue=e=>{ge.current={y:e.clientY,height:be},e.currentTarget.setPointerCapture(e.pointerId)},We=e=>{let t=ge.current;if(!t)return;let n=Math.max(Cc,Math.round(window.innerHeight*.7));xe(Math.min(n,Math.max(Cc,t.height+t.y-e.clientY)))},Ge=e=>{ge.current&&(ge.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(be))},Ke=()=>{xe(Sc),c?.(Sc)},qe=r.query.length>0,Je=(0,O.useMemo)(()=>xc.filter(e=>i.columns?.includes(e.id)),[i.columns]),Ye=i.columns?.includes(`linkTarget`)??!1,Xe=(0,O.useMemo)(()=>`minmax(160px, 1fr) ${Je.map(e=>`${e.width}px`).join(` `)}`.trim(),[Je]),W=(0,O.useMemo)(()=>e?Dc(e.entries.map(t=>{let n=t.isDirectory?Mn(le,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:qe?gn(i,r):null,tags:e.tags[t.name]??[]}}).filter(e=>!qe||r.mode===`dim`||e.ranges!==null),i,e,V):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,qe,r,le,i.sort,i.sortDescending,V]);we.current=W;let Ze=Math.max(40,i.iconSize+20),Qe=Math.max(0,Math.floor(me.top/Ze)-4),$e=Math.min(W.length,Qe+Math.ceil(me.height/Ze)+10),et=(0,O.useMemo)(()=>W.slice(Qe,$e),[W,Qe,$e]);(0,O.useEffect)(()=>{let e=H.current;if(!e||i.mode!==`list`)return;let t=()=>he(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,O.useEffect)(()=>{he(e=>({...e,top:0})),H.current&&(H.current.scrollTop=0)},[e?.path]),(0,O.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=W.findIndex(e=>e.entry.fullPath===r.currentPath),t=H.current;if(e<0||!t)return;let n=e*Ze;(n<t.scrollTop||n+Ze>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ue.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,W,Ze]);let tt=(0,O.useMemo)(()=>W.slice(0,fe),[W,fe]);(0,O.useEffect)(()=>{pe(bc)},[e?.path]),(0,O.useEffect)(()=>{if(!r.currentPath)return;let e=W.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&pe(t=>Math.max(t,e+bc))},[r.currentPath,W]);let nt=(0,O.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&pe(e=>Math.min(W.length,e+bc))},[W.length]),rt=i.mode===`grid`,it=(0,O.useMemo)(()=>{if(!rt)return[];if(!N)return Ac(tt,kc);let e=[],t=new Map;for(let n of tt){let r=N(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[tt,rt,N]),at=(0,O.useMemo)(()=>o?W.filter(e=>!e.entry.isDirectory&&Dn(e.entry.name)):[],[W,o]),ot=at.length,st=(0,O.useMemo)(()=>at.slice(0,yc),[at]),ct=(0,O.useMemo)(()=>o?Ac(st,Oc):[],[st,o]),lt=(0,O.useMemo)(()=>W.map(e=>e.entry.fullPath),[W]),ut=W.length>0&&Se.size>=W.length,dt=Se.size>0&&!ut,ft=()=>{ce||(ut?vt():Ce(new Set(lt)))},pt=e?.path??``,gt=(0,O.useCallback)((e,t)=>{if(ce){_e.current=t,Ce(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Ce(r=>{if(e.shiftKey&&_e.current!==null){let e=lt.indexOf(_e.current),i=lt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(lt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),_e.current=t,e}return _e.current=t,new Set([t])})},[lt,ce]),_t=(0,O.useCallback)(e=>{ce?(_e.current=e,Ce(new Set([e]))):(_e.current=e,Ce(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[ce]),vt=(0,O.useCallback)(()=>{_e.current=null,Ce(new Set)},[]);(0,O.useEffect)(()=>{if(B===0||!R||Fe.current===B||!e?.entries.some(e=>e.fullPath===R))return;Fe.current=B,_e.current=R,Ce(new Set([R])),Ne({path:R,value:_(R)});let t=W.findIndex(e=>e.entry.fullPath===R),n=H.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*Ze;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(R)}"]`)?.scrollIntoView({block:`nearest`})})}},[H,e,R,B,Ze,W,i.mode]),(0,O.useEffect)(()=>{if(!Me)return;let e=W.findIndex(e=>e.entry.fullPath===Me.path),t=H.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*Ze;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Me.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[H,Me,Ze,W,i.mode]);let Ct=(0,O.useCallback)(()=>Ee(null),[]),wt=(0,O.useCallback)((e,t)=>{e.isDirectory?f(e.fullPath,Ht(t)):p?.(e.fullPath,Ht(t))},[f,p]),Tt=(0,O.useCallback)((e,t,n)=>{ye({entry:e,x:t,y:n})},[]),Ot=(0,O.useRef)(null),At=(0,O.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Vs(e,Se.has(n)?[...Se]:[n])},[Se]),jt=(0,O.useCallback)(e=>{if(!Ls(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Ot.current=t?.dataset.directory===`true`?t.dataset.path??pt:pt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[pt]),Mt=(0,O.useCallback)(e=>{if(F)return;let{paths:t,move:n}=Rs(e),r=Ot.current??pt;Ot.current=null,t.length!==0&&te&&(e.preventDefault(),te(t,r,!e.ctrlKey&&n))},[pt,te,F]),Nt=(0,O.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),F||!t&&!P)return;let n=U.current;t&&!n.has(t)&&Ce(new Set([t])),t&&(_e.current=t);let r=t?n.has(t)?[...n]:[t]:[];Ee({x:e.clientX,y:e.clientY,paths:r,background:!t}),ht().then(Ve,()=>Ve(!1))},[P,pt]),G=(0,O.useCallback)(()=>x?.(),[x]),Pt=(e,t)=>{_e.current=e,Ce(new Set([e])),t&&Ne({path:e,value:_(e)}),G()},Ft=Oe&&(0,L.jsx)(mo,{initialDirectory:pt,initialName:Oe.name,onCancel:()=>ke(null),onCompress:async e=>{let t=await It(Oe.paths,e);return!t.ok||!t.path?(ua(t.error??V(`Could not create the archive.`)),!1):(Pt(t.path,!1),!0)}}),Lt=async(e,t=!1)=>{await mt(e,t)&&(Ve(!0),ee?.())},Rt=async e=>{e&&(await yt(e)?(G(),E?.()):ua(V(`Nothing on the clipboard could be pasted here.`)))},Bt=async(e,t=!1)=>{if(!pt)return;let n=e===null?await St(pt,t):await Et(pt,e);!n.ok||n.path===null?ua(n.error??V(`Could not create the item.`)):(_e.current=n.path,Ce(new Set([n.path])),Ne({path:n.path,value:_(n.path)}),G())},Vt=e=>{Ce(new Set([e.fullPath])),_e.current=e.fullPath,Ne({path:e.fullPath,value:e.name})},Wt=(0,O.useCallback)(e=>Ne(t=>t&&{...t,value:e}),[]),Gt=(0,O.useCallback)(()=>Ne(null),[]),qt=(0,O.useCallback)(async()=>{let e=Pe.current;if(Ne(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=we.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await xt(e.path,t);r.ok?(vt(),r.path&&S?.(e.path,r.path),G(),window.setTimeout(()=>G(),250)):ua(r.error??V(`Could not rename the entry.`))},[vt,S,G,V]),Jt=async(e,t=!1)=>{if((t||D)&&!await Yt(e,t))return;let n=await bt(e,t);if(!n.ok&&n.needsPermanent){if(!await Yt(e,!0))return;n=await bt(e,!0)}if(n.ok)vt(),G();else{if(n.cancelled)return;ua(n.error??V(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},Yt=(0,O.useCallback)((e,t)=>new Promise(n=>je({paths:e,permanent:t,resolve:n})),[]),Xt=(0,O.useCallback)(e=>{je(t=>(t?.resolve(e),null))},[]);(0,O.useEffect)(()=>{if(!y||Te)return;let e=e=>{if(Kt(e.target))return;Ie.current?.();let t=Ut(e),n=[...Se],r=n.length===1?W.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(lt.length===0)return;e.preventDefault();let n=_e.current&&lt.includes(_e.current)?_e.current:Se.size===1?[...Se][0]:null,r=n?lt.indexOf(n):-1,i=t===`home`?0:t===`end`?lt.length-1:Math.max(0,Math.min(lt.length-1,r+(t===`arrowdown`?1:-1))),a=lt[i];Ce(new Set([a])),_e.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===g.copy?i(()=>{n.length>0&&Lt(n)}):t===g.cut?i(()=>{n.length>0&&Lt(n,!0)}):t===g.paste?i(()=>void Rt(pt)):t===g.delete?i(()=>{n.length>0&&Jt(n)}):t===g.deletePermanently?i(()=>{n.length>0&&Jt(n,!0)}):t===g.selectAll?i(()=>{Ce(new Set(lt)),_e.current=lt[0]??null}):t===g.invertSelection?i(()=>{Ce(new Set(lt.filter(e=>!Se.has(e)))),_e.current=lt[0]??null}):t===g.rename&&r?i(()=>void Vt(r)):t===g.open&&r?i(()=>{r.isDirectory?f(r.fullPath):p?.(r.fullPath)}):t===g.newFolder||t===`f10`?i(()=>void Bt(null)):t===g.terminal?i(()=>void kt(pt)):t===g.properties?i(()=>void Dt(n.length>0?n:pt?[pt]:[])):t===g.refresh&&i(G)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[lt,Lt,Bt,pt,y,Te,f,p,Rt,G,Jt,Vt,W,Se,g]);let Zt=Ae&&(0,L.jsx)(Do,{confirmLabel:Ae.permanent?V(`Delete`):V(`Move`),danger:Ae.permanent,message:Ae.permanent?V(`Permanently delete {target}? This cannot be undone.`,{target:Ae.paths.length===1?V(`this item`):V(`{count} items`,{count:Ae.paths.length})}):V(`Move {target} to the recycle bin?`,{target:Ae.paths.length===1?V(`this item`):V(`{count} items`,{count:Ae.paths.length})}),onCancel:()=>Xt(!1),onConfirm:()=>Xt(!0),open:!0,title:Ae.permanent?V(`Delete permanently`):V(`Move to the recycle bin`)}),K=(0,O.useMemo)(()=>{if(!e||Se.size===0)return null;let t=lt.find(e=>Se.has(e));return t?W.find(e=>e.entry.fullPath===t)?.entry??null:null},[lt,e,W,Se]),Qt=(0,O.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:_(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:V(`Type`),value:V(`Folder`)},{label:V(`Location`),value:e.parent??`—`},{label:V(`Path`),value:e.path},{label:V(`Size`),value:d(t)},{label:V(`Items`),value:a(V,n,`1 item`,`{count} items`)},{label:V(`Modified`),value:`—`},{label:V(`Created`),value:`—`},{label:V(`Attributes`),value:`—`}]}},[e,V]),$t=(0,O.useMemo)(()=>{if(!K||!e)return null;let t=K.isDirectory?e.folderSizes[K.name]:void 0,n=e.tags[K.name]??[],r=K.name.lastIndexOf(`.`),i=r>0&&r<K.name.length-1?K.name.slice(r+1).toUpperCase():`—`;return{name:K.name,path:K.fullPath,isDirectory:K.isDirectory,size:K.size,modified:K.modified,created:K.created,fields:[{label:V(`Type`),value:Nc(K,V)},...K.isEncrypted?[{label:V(`Encryption`),value:V(`Password required`)}]:[],{label:V(`Extension`),value:K.isDirectory?`—`:i},{label:V(`Location`),value:e.path},{label:V(`Full path`),value:K.fullPath},{label:V(`Size`),value:K.isDirectory?t===void 0?`—`:d(t):d(K.size)},...K.isDirectory?[{label:V(`Items`),value:`${e.counts[K.name]??`—`}`}]:[],{label:V(`Modified`),value:v(K.modified)},{label:V(`Created`),value:v(K.created)},{label:V(`Link status`),value:K.linkTarget==null?K.linkCount>1?V(`Hard link`):`—`:K.linkValid?`OK`:V(`Broken`)},...K.linkTarget?[{label:V(`Target`),value:K.linkTarget}]:[],...K.linkCount>1?[{label:V(`Links`),value:String(K.linkCount)}]:[],{label:V(`Attributes`),value:[K.isHidden?V(`Hidden`):``,K.isSystem?V(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:V(`Tags`),value:n.join(`, `)}]:[]]}},[e,K,V]),q=Te?.paths.length===1?Te.paths[0]:null,J=q?W.find(e=>e.entry.fullPath===q)?.entry:void 0,en=J?{path:J.fullPath,isDirectory:J.isDirectory}:null,tn=$t??Qt,nn=(0,O.useRef)(j);nn.current=j,(0,O.useEffect)(()=>{nn.current?.(tn)},[j,tn]);let rn=ne&&tn&&(0,L.jsx)(Ro,{info:tn,onWidth:ze,selectionNote:Se.size>1?a(V,Se.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:k,videoAutoplay:A,width:Le});return n&&!e?(0,L.jsx)(Pl,{children:(0,L.jsx)(Il,{children:n})}):!e&&!t?(0,L.jsx)(Pl,{children:(0,L.jsx)(Fl,{children:V(`Nothing selected.`)})}):i.mode===`grid`?(0,L.jsxs)(Qc,{onPointerDown:M,children:[(0,L.jsxs)($c,{children:[(0,L.jsxs)(sl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||vt()},onContextMenu:e=>Nt(e),onDragOver:jt,onDragStart:At,onDrop:Mt,onScroll:e=>{re?.(e.currentTarget),nt(e.currentTarget)},children:[m&&W.length>0&&(0,L.jsxs)(Yc,{children:[(0,L.jsx)(qc,{$checked:!ce&&ut,$partial:!ce&&dt,"aria-label":V(ut?`Select none`:`Select all`),disabled:ce,onClick:ft,title:V(ut?`Select none`:`Select all`),type:`button`,children:ut?(0,L.jsx)(fi,{size:10}):dt?(0,L.jsx)(Jc,{}):null}),(0,L.jsx)(`span`,{children:V(ut?`Select none`:`Select all`)})]}),t&&!e?(0,L.jsx)(fl,{$size:i.gridSize,children:(0,L.jsx)(zc,{size:i.gridSize})}):(0,L.jsx)(Vc,{counts:e?.counts,currentPath:qe?r.currentPath:null,groups:it,gridSize:i.gridSize,innerRef:ue,onContextMenu:Nt,onOpen:f,onOpenFile:p,onRenameCancel:Gt,onRenameChange:Wt,onRenameCommit:qt,onSelect:gt,onToggle:_t,openOnSingleClick:h,renaming:Me,searching:qe,selected:Se,showCheckboxes:m,showTarget:Ye}),!t&&e&&W.length===0&&(0,L.jsx)(Nl,{children:(0,L.jsx)(Fl,{children:n??(qe&&r.mode===`hide`?V(`No entries match the search.`):V(`This folder is empty.`))})}),ie]}),Te&&(0,L.jsx)(Za,{canPaste:Be,directory:pt,allowCompression:!0,menu:Te,onAddToTray:C,onAddFavorite:w,onExtractArchive:T,onArchiveCreated:Pt,onClose:Ct,onCompressTo:(e,t)=>ke({paths:e,name:t}),onCopy:Lt,onCreateFile:e=>void Bt(e),onCreateFolder:e=>void Bt(null,e),onDelete:Jt,onOpen:f,onOpenFile:p,onPaste:Rt,onRefresh:G,onRename:e=>{let t=W.find(t=>t.entry.fullPath===e)?.entry;t&&Vt(t)},shortcuts:g,target:en}),Ft,Zt]}),rn]}):(0,L.jsxs)(Qc,{onPointerDown:M,children:[(0,L.jsxs)($c,{children:[(0,L.jsxs)(el,{onScroll:e=>{H.current&&H.current.scrollLeft!==e.currentTarget.scrollLeft&&(H.current.scrollLeft=e.currentTarget.scrollLeft)},ref:de,style:{gridTemplateColumns:Xe},children:[(0,L.jsxs)(Kc,{children:[m&&(0,L.jsx)(qc,{$checked:!ce&&ut,$partial:!ce&&dt,"aria-label":V(ut?`Select none`:`Select all`),disabled:ce,onClick:e=>{e.stopPropagation(),ft()},title:V(ut?`Select none`:`Select all`),type:`button`,children:ut?(0,L.jsx)(fi,{size:10}):dt?(0,L.jsx)(Jc,{}):null}),(0,L.jsxs)(tl,{onClick:()=>l(`name`),type:`button`,children:[V(`Name`),Tc(i,`name`)]})]}),Je.map(e=>(0,L.jsxs)(tl,{onClick:()=>l(e.id),type:`button`,children:[V(e.label),Tc(i,e.id)]},e.id))]}),(0,L.jsxs)(nl,{onClick:e=>{e.target===e.currentTarget&&vt()},onContextMenu:e=>Nt(e),onDragOver:jt,onDragStart:At,onDrop:Mt,onScroll:e=>{de.current&&de.current.scrollLeft!==e.currentTarget.scrollLeft&&(de.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;he(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:H,children:[t&&!e?(0,L.jsx)(Rc,{template:Xe,columns:Je.length}):(0,L.jsxs)(L.Fragment,{children:[Qe>0&&(0,L.jsx)(`div`,{style:{height:Qe*Ze}}),et.map(t=>{let n=t.entry.fullPath;return(0,L.jsx)(Uc,{current:qe&&n===r.currentPath,dim:qe&&t.ranges===null,height:Ze,iconSize:i.iconSize,innerRef:ue,listing:e,onContextMenu:Nt,onOpen:wt,onRenameCancel:Gt,onRenameChange:Wt,onRenameCommit:qt,onSelect:gt,onTagEdit:Tt,onToggle:_t,openOnSingleClick:h,renaming:Me?.path===n?{value:Me.value}:null,row:t,selected:Se.has(n),showCheckboxes:m,showTarget:Ye,template:Xe,visible:Je},n)}),$e<W.length&&(0,L.jsx)(`div`,{style:{height:(W.length-$e)*Ze}})]}),!t&&e&&W.length===0&&(0,L.jsx)(Pl,{children:(0,L.jsx)(Fl,{children:n??(qe&&r.mode===`hide`?V(`No entries match the search.`):V(`This folder is empty.`))})})]}),o&&at.length>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(rl,{onDoubleClick:Ke,onPointerDown:Ue,onPointerMove:We,onPointerUp:Ge,title:V(`Drag to resize; double-click to reset`)}),(0,L.jsxs)(il,{style:{height:be},children:[(0,L.jsxs)(al,{children:[V(`Preview`),(0,L.jsx)(ol,{children:ot>yc?`${st.length} / ${ot}`:ot})]}),(0,L.jsx)(sl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||vt()},onContextMenu:e=>Nt(e),children:(0,L.jsx)(Vc,{counts:e?.counts,currentPath:qe?r.currentPath:null,groups:ct,gridSize:i.gridSize,onContextMenu:Nt,onOpen:f,onOpenFile:p,onSelect:gt,onToggle:_t,openOnSingleClick:h,searching:qe,selected:Se,showCheckboxes:m,showTarget:Ye})})]})]}),ve&&e&&(0,L.jsx)(ys,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(ve.entry.name,e,t),onClose:()=>ye(null),tags:e.tags[ve.entry.name]??[],x:ve.x,y:ve.y}),Te&&(0,L.jsx)(Za,{canPaste:Be,directory:pt,allowCompression:!0,menu:Te,onAddToTray:C,onAddFavorite:w,onExtractArchive:T,onArchiveCreated:Pt,onClose:Ct,onCompressTo:(e,t)=>ke({paths:e,name:t}),onCopy:Lt,onCreateFile:e=>void Bt(e),onCreateFolder:e=>void Bt(null,e),onDelete:Jt,onOpen:f,onOpenFile:p,onPaste:Rt,onRefresh:G,onRename:e=>{let t=W.find(t=>t.entry.fullPath===e)?.entry;t&&Vt(t)},shortcuts:g,target:en}),Ft,Zt]}),rn]})}function Tc(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Ec=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Dc(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Nc(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Ec.compare(String(r),String(i));return t.sortDescending?-o:o})}var Oc=wn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&En(t.entry.name)===e})),kc=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Oc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Ac(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function jc(e){return Math.max(24,Math.min(e-56,160))}var Mc={file:`file`,folder:`folder`,text:`text file`,code:`source file`,image:`image`,video:`video`,audio:`audio`,archive:`archive`,pdf:`PDF`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Nc(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Mc[Ms(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Pc(e,t,n,r){switch(e){case`type`:return Nc(t,r);case`size`:return Ic(t,n.folderSizes);case`modified`:return v(t.modified);case`created`:return v(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Fc({name:e,ranges:t}){if(!t||t.length===0)return(0,L.jsx)(L.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,L.jsx)(Ml,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,L.jsx)(L.Fragment,{children:n})}function Ic(e,t){if(!e.isDirectory)return d(e.size);let n=t[e.name];return n===void 0?`—`:d(n)}function Lc({entry:e,size:t=18}){let n=z(),r=(0,O.useRef)(null),[i,a]=(0,O.useState)(!1);(0,O.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=an(i?e.fullPath:null,e.isDirectory,t>32),s=sn(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,L.jsxs)(Wc,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,L.jsx)(Ns,{name:e.iconSource.slice(5),size:t}):s?(0,L.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,L.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,L.jsx)(Yr,{size:t}):(0,L.jsx)(Ns,{name:Ms(e.name),size:t}),e.isEncrypted&&(0,L.jsx)(Gc,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,L.jsx)(na,{size:Math.max(8,Math.round(t*.52))})})]})}function Rc({template:e,columns:t}){return(0,L.jsx)(L.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,L.jsxs)(pl,{style:{gridTemplateColumns:e},children:[(0,L.jsxs)(gl,{children:[(0,L.jsx)(ml,{style:{flexShrink:0,height:18,width:18}}),(0,L.jsx)(ml,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,L.jsx)(ml,{style:{width:t%2==0?44:92}},t))]},r))})}function zc({size:e}){return(0,L.jsx)(L.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,L.jsxs)(El,{$dim:!1,$current:!1,$selected:!1,children:[(0,L.jsx)(Dl,{children:(0,L.jsx)(ml,{style:{height:e,width:e}})}),(0,L.jsx)(kl,{children:(0,L.jsx)(ml,{style:{height:9,width:`${t}%`}})})]},n))})}var Bc=(0,O.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=z(),x=jn(),S=!e.entry.isDirectory&&Dn(e.entry.name),ee=(0,O.useRef)(null),[te,C]=(0,O.useState)(!1);(0,O.useEffect)(()=>{if(!S||te)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){C(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(C(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,te]);let w=dn(S&&te?e.entry.fullPath:null,192,e.entry.modified),[T,E]=(0,O.useState)(!1),D=e.entry.fullPath,k=t=>{e.entry.isDirectory?v(D,Ht(t)):y?.(D,Ht(t))};return(0,L.jsxs)(El,{$current:t,$dim:n,$selected:s,onClick:e=>{h(e,D),l&&k(e)},onContextMenu:e=>_(e,D),onDoubleClick:e=>{l||k(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":D,draggable:!u,children:[c&&(0,L.jsx)(Zc,{$checked:s,onClick:e=>{e.stopPropagation(),g(D)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,L.jsx)(fi,{size:10})}),(0,L.jsx)(Dl,{children:S&&w&&!T?(0,L.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>E(!0),src:w}):(0,L.jsx)(Ol,{children:e.place&&x.useIcons?(0,L.jsx)(gs,{place:e.place,size:r}):(0,L.jsx)(Lc,{entry:e.entry,size:r})})}),(0,L.jsxs)(kl,{children:[u?(0,L.jsx)(Hc,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:u.value}):(0,L.jsx)(Al,{$broken:e.entry.linkValid===!1,children:(0,L.jsx)(Fc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,L.jsxs)(vl,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,L.jsx)(na,{size:9}),b(`Encrypted`)]}),(0,L.jsx)(jl,{children:e.entry.isDirectory?i===void 0?Nc(e.entry,b):b(`{type} · {count} items`,{type:Nc(e.entry,b),count:i}):b(`{type} · {size}`,{type:Nc(e.entry,b),size:d(e.entry.size)})}),a&&e.entry.linkTarget&&(0,L.jsxs)(bl,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,L.jsx)(ra,{size:9}),(0,L.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Vc({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=z();return(0,L.jsx)(L.Fragment,{children:e.map(e=>(0,L.jsxs)(cl,{children:[(0,L.jsxs)(ll,{children:[y(e.label),(0,L.jsx)(ul,{children:e.rows.length}),(0,L.jsx)(dl,{})]}),(0,L.jsx)(fl,{$size:t,children:e.rows.map(e=>(0,L.jsx)(Bc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:jc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Hc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,O.useRef)(null);return(0,O.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,L.jsx)(yl,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Uc=(0,O.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=z(),ee=jn(),te=e.entry.fullPath;return(0,L.jsxs)(hl,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,te),o&&_(e.entry,t)},onContextMenu:e=>g(e,te),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":te,draggable:!p,children:[(0,L.jsxs)(gl,{children:[i&&(0,L.jsx)(Xc,{$checked:r,onClick:e=>{e.stopPropagation(),h(te)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,L.jsx)(fi,{size:10})}),e.place&&ee.useIcons?(0,L.jsx)(Wc,{children:(0,L.jsx)(gs,{place:e.place,size:s})}):(0,L.jsx)(Lc,{entry:e.entry,size:s}),p?(0,L.jsx)(Hc,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,L.jsx)(_l,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,L.jsx)(Fc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,L.jsxs)(vl,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,L.jsx)(na,{size:9}),S(`Encrypted`)]}),a&&e.entry.linkTarget&&(0,L.jsxs)(bl,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,L.jsx)(ra,{size:9}),(0,L.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,L.jsx)(xl,{children:t.id===`tags`?(0,L.jsx)(Sl,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,L.jsx)(Cl,{$color:t,$ink:vs(t),children:e},e)}):(0,L.jsx)(wl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,L.jsx)(Tl,{children:S(`Broken`)}):Pc(t.id,e.entry,d,S)},t.id))]})}),Wc=i.span`
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
</svg>`}var lu=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function uu(e){return lu.test(e)}function du({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):w(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=fn(r),a=t?.startsWith(`builtin:`)?Xl(t):n??i,o=n===null?r===null?t!==null&&Zl(t):uu(r):uu(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,L.jsxs)(fu,{"aria-hidden":!0,children:[o?(0,L.jsx)(mu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,L.jsx)(pu,{src:a,style:{filter:s}}),(0,L.jsx)(hu,{})]})}var fu=i.div`
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
`;function gu({hits:e,delaySeconds:t,permanent:n,onCancel:r,onConfirm:i}){let a=z(),o=(0,O.useRef)(null),[s,c]=(0,O.useState)(()=>Math.max(1,Math.ceil(t)));return(0,O.useEffect)(()=>{o.current?.focus();let e=Date.now(),n=window.setInterval(()=>{let r=Math.max(0,Math.ceil(t-(Date.now()-e)/1e3));c(r),r===0&&window.clearInterval(n)},200),i=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,i,!0),()=>{window.clearInterval(n),window.removeEventListener(`keydown`,i,!0)}},[t,r]),(0,Sa.createPortal)((0,L.jsx)(_u,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,L.jsxs)(vu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsx)(yu,{children:a(`Protected folder`)}),(0,L.jsx)(bu,{children:a(`These paths are protected by the safety settings:`)}),(0,L.jsx)(xu,{children:e.map(e=>(0,L.jsxs)(Su,{children:[(0,L.jsx)(Cu,{children:e.path}),(0,L.jsx)(wu,{children:a(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,L.jsx)(Tu,{children:a(n?`Deletes permanently`:`Moves to the recycle bin`)}),(0,L.jsx)(Eu,{children:a(`Nothing has been deleted.`)}),(0,L.jsx)(Du,{children:a(`This waits {seconds}s before the delete button works.`,{seconds:t})}),(0,L.jsxs)(Ou,{children:[(0,L.jsx)(ku,{onClick:r,ref:o,type:`button`,children:a(`Cancel`)}),(0,L.jsx)(Au,{disabled:s>0,onClick:i,type:`button`,children:s>0?a(`Delete anyway ({seconds}s)`,{seconds:s}):a(`Delete anyway`)})]})]})}),document.body)}var _u=i.div`
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
`;function ju(){let e=z(),[t,n]=(0,O.useState)(null),r=(0,O.useRef)(null),i=(0,O.useRef)(null);(0,O.useEffect)(()=>(la(e=>new Promise(t=>{r.current=t,n(e)})),()=>la(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,O.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Sa.createPortal)((0,L.jsx)(Mu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,L.jsxs)(Nu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsx)(Pu,{children:e(`Notice`)}),(0,L.jsx)(Fu,{children:t}),(0,L.jsx)(Iu,{children:(0,L.jsx)(Lu,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Mu=i.div`
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
`;function Ru(){let e=z(),[t,n]=(0,O.useState)(null),[r,i]=(0,O.useState)(``),a=(0,O.useRef)(null),o=(0,O.useRef)(null);(0,O.useEffect)(()=>(da((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>da(null)),[]),(0,O.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Sa.createPortal)((0,L.jsx)(zu,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,L.jsxs)(Bu,{role:`dialog`,"aria-modal":`true`,children:[(0,L.jsx)(Vu,{children:e(`Archive password`)}),(0,L.jsx)(Hu,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,L.jsx)(Uu,{title:t.archive,children:t.archive}),(0,L.jsx)(Wu,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,L.jsxs)(Gu,{children:[(0,L.jsx)(Ku,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,L.jsx)(qu,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var zu=i.div`
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
`;function Ju({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h}){let g=z(),_=(0,O.useRef)(null),v=c??g(`Search this folder`);(0,O.useEffect)(()=>{let e=_.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let y=e=>{e(),_.current?.focus()};return(0,L.jsxs)(Yu,{children:[(0,L.jsx)(Qr,{}),(0,L.jsx)(Xu,{"aria-label":v,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:v,ref:_,spellCheck:!1,value:e}),!s&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Zu,{children:i===0?`0/0`:`${a+1}/${i}`}),(0,L.jsx)(Qu,{onClick:()=>y(u),title:g(`Previous match (Shift+Enter)`),type:`button`,children:(0,L.jsx)(ii,{size:12})}),(0,L.jsx)(Qu,{$down:!0,onClick:()=>y(d),title:g(`Next match (Enter)`),type:`button`,children:(0,L.jsx)(ii,{size:12})})]}),(0,L.jsx)($u,{$on:n,onClick:()=>y(f),title:g(`Match case`),type:`button`,children:`Aa`}),(0,L.jsx)($u,{$on:r,onClick:()=>y(p),title:g(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,L.jsx)(ed,{$on:t===`hide`,onClick:()=>y(m),title:g(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:g(t===`hide`?`Hide`:`Dim`)}),(0,L.jsx)(Qu,{onClick:h,title:g(`Close search (Esc)`),type:`button`,children:(0,L.jsx)(pi,{size:12})})]})}var Yu=i.div`
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
`;function td(e,t,n,r,i=[]){(0,O.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=gn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function nd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=z(),a=(0,O.useRef)(null),o=(0,O.useRef)(null),[s,c]=(0,O.useState)(null);return(0,O.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,O.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,O.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Sa.createPortal)((0,L.jsxs)(rd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(ds).map(n=>(0,L.jsx)(id,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:ds[n](16)},n)),(0,L.jsx)(id,{onClick:async()=>{let e=await oa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,L.jsx)(ti,{size:13})}),r&&(0,L.jsx)(id,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,L.jsx)(pi,{size:12})})]}),document.body)]})}var rd=i.div`
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
`,ad={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function od(){return I.available?await I.request(`share.list`):ad}async function sd(e,t){return I.available?await I.request(`share.add`,{path:e,mode:t}):ad}async function cd(e){return I.available?await I.request(`share.remove`,{id:e}):ad}async function ld(e,t){return I.available?await I.request(`share.mode`,{id:e,mode:t}):ad}async function ud(){return I.available?(await I.request(`share.peers.refresh`)).peers??[]:[]}async function dd(e,t){I.available&&await I.request(`share.pair.start`,{host:e,port:t})}async function fd(e,t){I.available&&await I.request(`share.pair.respond`,{requestId:e,accept:t})}async function pd(e,t){I.available&&await I.request(`share.port`,{mode:t,port:e})}var md=`share://`;function hd(e){return e.toLowerCase().startsWith(md)}function gd(e){if(!hd(e))return null;let[t,n,...r]=e.slice(8).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function _d(e,t,n=``){let r=`${md}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function vd(e){let t=gd(e);if(!t||!I.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await I.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:_d(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:_d(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function yd(e){let t=gd(e);if(!t||!I.available)throw Error(`This shared file is only available in the desktop app.`);let n=await I.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function bd(e){await ye(await yd(e))}function xd({source:e,poster:t}){let n=w(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=fn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??Xl(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,L.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,L.jsx)(`img`,{alt:``,src:a}):null}function Sd({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=z(),s=(0,O.useRef)(null),c=(0,O.useRef)(null),l=(0,O.useRef)(!1),[u,d]=(0,O.useState)(null),[f,p]=(0,O.useState)(null),[m,h]=(0,O.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,O.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,O.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,O.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,L.jsx)(Ud,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,L.jsxs)(Wd,{children:[(0,L.jsxs)(Gd,{children:[(0,L.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,L.jsx)(Qd,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,L.jsx)(pi,{size:12})})]}),(0,L.jsx)(Kd,{children:o(`Drag the frame to choose the visible part.`)}),(0,L.jsxs)(qd,{children:[t?(0,L.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,L.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,L.jsx)(Jd,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,L.jsx)(Yd,{})})]}),(0,L.jsxs)(Xd,{children:[(0,L.jsx)(Zd,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,L.jsx)(Zd,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var Cd=150,wd=120,Td=200,Ed=i.div`
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
`;function qf({places:e,drives:n,recent:r,recentLimit:i,homePath:o,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:f,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:v,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:te,onExtractArchive:T,settingsVersion:E=0}){let D=z(),k=jn(),[A,ne]=(0,O.useState)(!1),[j,M]=(0,O.useState)(null),N=j?.overviewBanner??null,re=N?.startsWith(`builtin:`)??!1,ie=N?.startsWith(`url:`)?N.slice(4):w(N)?N:null,P=re||ie?``:N??``,F=re?``:ie?ie.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:P.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,ae=re?Zl(N):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(F),oe=fn(P.length>0?P:null,0,F?`.${F}`:``),se=N?Xl(N)??ie??oe:null,[ce,R]=(0,O.useState)(``),[B,V]=(0,O.useState)(null),[le,ue]=(0,O.useState)(!1),[de,H]=(0,O.useState)(null),[fe,pe]=(0,O.useState)(null),[me,he]=(0,O.useState)(null),[ge,_e]=(0,O.useState)([]),[be,xe]=(0,O.useState)(null),[Se,Ce]=(0,O.useState)(``),[U,we]=(0,O.useState)(null),[Te,Ee]=(0,O.useState)(null),Oe=vc(`overview`),[ke,Ae]=(0,O.useState)(null),[je,Me]=(0,O.useState)(null),Ne=(0,O.useRef)(null),Pe=(0,O.useRef)(null),Fe=(0,O.useRef)(null),Ie=(0,O.useRef)(null),Le=(0,O.useRef)(null),Re=je??j?.overviewBannerHeight??220,[ze,Be]=(0,O.useState)(0),[Ue,We]=(0,O.useState)(null),Ge=Math.min(1,Math.max(0,j?.overviewBannerOffset??.3)),Ke=Re+Td,Je=Ue&&ze>0?Ue.height*(ze/Ue.width):Ke,Ye=Je>0&&Je<Ke+240?(Ke+240)/Je:1,Xe=Math.max(1,Math.round(ze*Ye)),W=Math.max(0,Je*Ye-Ke),Ze=Math.min(wd,W/2,Math.max(20,Re*.42)),Qe=Ze+Ge*Math.max(0,W-Ze*2),[et,tt]=(0,O.useState)(!1),nt=(e,t=!1)=>x?(we(e),Ee({path:e,isDirectory:t}),S?.([e]),!0):!1,rt=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),we(t),Ee({path:t,isDirectory:n}),Ae({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,O.useEffect)(()=>(dc(`overview`,Te?(e,t)=>Ae({x:e,y:t,target:Te}):null),()=>dc(`overview`,null)),[Te]);let it=(e,t)=>c(e,t);(0,O.useEffect)(()=>{qe().then(M,()=>M(null))},[E]),(0,O.useEffect)(()=>{if(I.available)return ud().then(_e,()=>void 0),I.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&_e(t.data.peers)})},[]),(0,O.useEffect)(()=>{let e=Fe.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,O.useEffect)(()=>{if(re&&!ae){We({width:1920,height:1080});return}We(null);let e=Le.current;e?.complete&&e.naturalWidth>0&&We({width:e.naturalWidth,height:e.naturalHeight})},[N,re,ae]),(0,O.useEffect)(()=>{let e=Ie.current;if(!e)return;let t=()=>Be(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[j?.overviewBanner]),(0,O.useEffect)(()=>{if(!B)return;let e=()=>V(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||V(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[B]),(0,O.useEffect)(()=>{if(!le)return;let e=()=>ue(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[le]);let at=ps(j),ot=at.map(e=>e.id),st=(0,O.useRef)(null),ct=e=>B?.kind===`panel`&&B.id===e,lt=e=>B?.kind===`place`&&B.id===e;(0,O.useEffect)(()=>{if(!I.available)return;let e=at.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??o).filter(e=>e.length>0);I.send({type:`fs.watch`,payload:{paths:e}})},[at.map(e=>e.path??e.id).join(`|`),o]),td(st,v??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let ut=async(e,t)=>{let n={...j?.placeIcons};t?n[e]=t:delete n[e],V(null),await gt({placeIcons:n}),l(await De())},dt=async(e,t)=>{let n={...j?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],pe(null),await gt({placeNames:n}),l(await De())},ft=e=>{he(null),H({drive:e,label:e.label||`Local Disk`})},pt=async()=>{if(!de)return;let{drive:e,label:t}=de;H(null);let n=await ve(e.name,t.trim());n.ok?(he(null),h?.()):he(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},ht=j?.overviewColumns??1,gt=async e=>{if(!j)return;let t={...j,...e,overviewPanels:e.overviewPanels??ot,overviewHidden:[]};M(await $e(t)),p?.()},_t=async()=>{let e=await oa([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=j?.overviewBanners??[];await gt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},vt=async()=>{let e=ce.trim();if(!j||!w(e))return;let t=j.overviewBanners??[];R(``),await gt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},yt=()=>void gt({overviewBanner:null}),bt=e=>void gt({overviewBanners:(j?.overviewBanners??[]).filter(t=>t!==e),...j?.overviewBanner===e||j?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),xt=e=>{Ne.current={y:e.clientY,height:Re},e.currentTarget.setPointerCapture(e.pointerId)},St=e=>{let t=Ne.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Pe.current=n,Me(n)},Ct=e=>{Ne.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Pe.current!==null&&(gt({overviewBannerHeight:Pe.current}),Pe.current=null)},wt=(e,t)=>{let n=ot.indexOf(e),r=n+t;if(n<0||r<0||r>=ot.length)return;let i=[...ot];[i[n],i[r]]=[i[r],i[n]],gt({overviewPanels:i})},Tt=(e,t)=>{let n={...j?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],gt({overviewTitles:n})},Et=(e,t)=>void gt({overviewViews:{...j?.overviewViews,[e]:t}}),Dt=e=>{let t=j?.overviewPinned??at.filter(e=>e.pinned).map(e=>e.id);gt({overviewPinned:at.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Ot=e=>{V(null);let t=t=>{let n={...t};return delete n[e],n},n=j?.overviewPinned??at.filter(e=>e.pinned).map(e=>e.id);gt({overviewPanels:ot.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(j?.overviewTitles),overviewViews:t(j?.overviewViews),overviewIcons:t(j?.overviewIcons),panelPlaces:t(j?.panelPlaces)})},kt=(e,t)=>{let n={...j?.overviewIcons};t?n[e]=t:delete n[e],V(null),gt({overviewIcons:n})},At=async e=>{if(!j)return;if(e===`folder`){let e=await aa();if(!e)return;let t=`folder:${e}`;ot.includes(t)||await gt({overviewPanels:[...ot,t]});return}if(e===`quick`){let e=2;for(;ot.includes(`quick:${e}`);)e+=1;await gt({overviewPanels:[...ot,`quick:${e}`]});return}let t=e;for(let n=2;ot.includes(t);n+=1)t=`${e}:${n}`;await gt({overviewPanels:[...ot,t]})},jt=async t=>{let n=await aa();if(!n)return;if(t.id===`quick`){await gt({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),l(await De());return}let r=t.places??[];r.some(e=>Yf(e,n))||await gt({panelPlaces:{...j?.panelPlaces,[t.id]:[...r,n]}})},Mt=async(t,n)=>{V(null),t.id===`quick`?(await gt({quickAccess:e.filter(e=>!Yf(e.path,n)).map(e=>e.path)}),l(await De())):await gt({panelPlaces:{...j?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!Yf(e,n))}})},Nt=async(t,n,r)=>{if(Yf(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>Yf(e,n)),o=i.findIndex(e=>Yf(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),t.id===`quick`?(await gt({quickAccess:s}),l(await De())):await gt({panelPlaces:{...j?.panelPlaces,[t.id]:s}})},G=(e,t)=>({draggable:A,onDragOver:e=>{A&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{A&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{A&&(n.preventDefault(),Nt(e,n.dataTransfer.getData(`text/plain`),t))}}),Pt=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>Yf(e.path,t));return{name:j?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??j?.placeIcons?.[t]??null}}),Ft=e=>{if(r.length===0)return(0,L.jsx)(Rf,{children:D(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,L.jsx)(gf,{children:t.map(e=>{let t=Mn(k,e.path);return(0,L.jsxs)(_f,{$plain:!1,$selected:U===e.path,onClick:t=>{nt(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Ht(t)):ye(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>rt(t,e.path,e.isDirectory),title:e.path,children:[(0,L.jsx)(vf,{children:t&&k.useIcons?(0,L.jsx)(gs,{place:t,size:18}):(0,L.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,L.jsxs)(yf,{children:[(0,L.jsx)(`strong`,{children:t?.name||e.name}),(0,L.jsx)(bf,{children:e.path})]})]},e.path)})}):(0,L.jsx)(xf,{children:t.map(e=>{let t=Mn(k,e.path);return(0,L.jsxs)(Sf,{$selected:U===e.path,onClick:t=>{nt(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Ht(t)):ye(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>rt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&k.useIcons?(0,L.jsx)(gs,{place:t,size:15}):(0,L.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,L.jsxs)(Cf,{children:[(0,L.jsx)(`strong`,{children:t?.name||e.name}),(0,L.jsx)(bf,{children:e.path})]})]},e.path)})})},It=e=>{let t=j?.favorites??[],n=async e=>{await gt({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>t.path.toLowerCase()===e.toLowerCase())&&await gt({favorites:[...t,{path:e,name:_(e)||e,isDirectory:n}]})},i=(e,t,n)=>{A||nt(t,n)||(n?c(t,Ht(e)):ye(t))},a=A?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(wf,{$row:e.view===`list`,onClick:()=>void oa().then(e=>r(e,!1)),title:D(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,L.jsx)(ti,{size:15}):(0,L.jsx)(vf,{children:(0,L.jsx)(ti,{size:15})}),e.view===`list`?(0,L.jsxs)(Cf,{children:[(0,L.jsx)(`strong`,{children:D(`Add file`)}),(0,L.jsx)(bf,{children:D(`Pin any file here`)})]}):(0,L.jsxs)(yf,{children:[(0,L.jsx)(`strong`,{children:D(`Add file`)}),(0,L.jsx)(bf,{children:D(`Pin any file here`)})]})]}),(0,L.jsxs)(wf,{$row:e.view===`list`,onClick:()=>void aa().then(e=>r(e,!0)),title:D(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,L.jsx)(ti,{size:15}):(0,L.jsx)(vf,{children:(0,L.jsx)(ti,{size:15})}),e.view===`list`?(0,L.jsxs)(Cf,{children:[(0,L.jsx)(`strong`,{children:D(`Add folder`)}),(0,L.jsx)(bf,{children:D(`Pin any folder here`)})]}):(0,L.jsxs)(yf,{children:[(0,L.jsx)(`strong`,{children:D(`Add folder`)}),(0,L.jsx)(bf,{children:D(`Pin any folder here`)})]})]})]}):null;return t.length===0&&!A?(0,L.jsx)(Rf,{children:D(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,L.jsxs)(gf,{children:[t.map(e=>{let t=Mn(k,e.path);return(0,L.jsxs)(_f,{$plain:A,$selected:U===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!A&&x?.(e.path),onContextMenu:t=>!A&&rt(t,e.path,e.isDirectory),title:e.path,children:[A&&(0,L.jsx)(Nf,{onClick:t=>{t.stopPropagation(),n(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,L.jsx)(pi,{size:11})}),(0,L.jsx)(vf,{children:t&&k.useIcons?(0,L.jsx)(gs,{place:t,size:18}):(0,L.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,L.jsxs)(yf,{children:[(0,L.jsx)(`strong`,{children:t?.name||e.name}),(0,L.jsx)(bf,{children:e.path})]})]},e.path)}),a]}):(0,L.jsxs)(xf,{children:[t.map(e=>{let t=Mn(k,e.path);return(0,L.jsxs)(Sf,{$selected:U===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!A&&x?.(e.path),onContextMenu:t=>!A&&rt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&k.useIcons?(0,L.jsx)(gs,{place:t,size:15}):(0,L.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,L.jsxs)(Cf,{children:[(0,L.jsx)(`strong`,{children:t?.name||e.name}),(0,L.jsx)(bf,{children:e.path})]}),A&&(0,L.jsx)(Nf,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:D(`Remove from favorites`),type:`button`,children:(0,L.jsx)(pi,{size:11})})]},e.path)}),a]})},Lt=e=>{if(n.length===0)return(0,L.jsx)(Rf,{children:D(`No drives are available.`)});let r=n.map(n=>{let r=n.totalSize>0?1-n.freeSpace/n.totalSize:0,i=de?.drive.name===n.name,a=i?(0,L.jsx)(Jf,{maxLength:32,onCancel:()=>H(null),onChange:e=>H({...de,label:e}),onCommit:()=>void pt(),value:de?.label??``}):(0,L.jsx)(L.Fragment,{children:u(n)}),o=!i&&A&&(0,L.jsx)(Pf,{onClick:e=>{e.stopPropagation(),ft(n)},title:D(`Rename volume`),type:`button`,children:(0,L.jsx)(Ai,{size:11})}),s=(0,L.jsx)(bf,{children:D(`{free} free of {total}`,{free:d(n.freeSpace),total:d(n.totalSize)})});return e.view===`grid`?(0,L.jsxs)(_f,{$plain:!1,$selected:U===n.name,onClick:e=>{!i&&nt(n.name,!0)||i||c(n.name,Ht(e))},onDoubleClick:()=>!i&&x?.(n.name),onContextMenu:e=>!i&&rt(e,n.name,!0),title:n.name,children:[(0,L.jsx)(vf,{children:(0,L.jsx)(Zr,{size:18})}),(0,L.jsxs)(yf,{children:[(0,L.jsxs)(`strong`,{children:[a,i&&C(n),o]}),s]})]},n.name):(0,L.jsxs)(Sf,{as:i?`div`:`button`,$selected:U===n.name,onClick:i?void 0:e=>{nt(n.name,!0)||c(n.name,Ht(e))},onDoubleClick:i?void 0:()=>x?.(n.name),onContextMenu:i?void 0:e=>rt(e,n.name,!0),title:n.name,type:i?void 0:`button`,children:[(0,L.jsx)(Zr,{size:18}),(0,L.jsxs)(Cf,{children:[(0,L.jsxs)(`strong`,{children:[a,i&&C(n),o]}),s]}),(0,L.jsx)(Tf,{children:(0,L.jsx)(Ef,{$used:r,$tone:t(r)})})]},n.name)});return e.view===`grid`?(0,L.jsx)(gf,{children:r}):(0,L.jsx)(xf,{children:r})},Rt=()=>{let e=async e=>{xe(e.id);try{await dd(e.host,e.port)}finally{xe(null)}},t=async()=>{let e=Se.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){xe(`manual`);try{await dd(n,r)}finally{xe(null)}}};return(0,L.jsxs)(zf,{children:[(0,L.jsxs)(Bf,{children:[(0,L.jsx)(Vf,{onChange:e=>Ce(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:D(`Address, e.g. 192.168.1.20:45701`),value:Se}),(0,L.jsx)(Kf,{disabled:be!==null||!Se.includes(`:`),onClick:()=>void t(),type:`button`,children:D(be===`manual`?`Pairing…`:`Pair by address`)})]}),ge.length===0&&(0,L.jsx)(Rf,{children:D(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),ge.map(t=>(0,L.jsxs)(Hf,{children:[(0,L.jsxs)(Uf,{children:[(0,L.jsx)(Wi,{size:14}),(0,L.jsx)(Wf,{title:t.host,children:t.name}),(0,L.jsx)(Gf,{$online:t.online,children:t.paired?t.online?D(`Paired`):D(`Offline`):D(`Not paired`)}),!t.paired&&t.online&&(0,L.jsx)(Kf,{disabled:be===t.id,onClick:()=>void e(t),type:`button`,children:be===t.id?D(`Pairing…`):D(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,L.jsx)(bf,{children:D(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,L.jsxs)(Sf,{onClick:n=>c(_d(t.id,e.id),Ht(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,L.jsx)(Wi,{size:14}),(0,L.jsxs)(Cf,{children:[(0,L.jsx)(`strong`,{children:e.name}),(0,L.jsx)(bf,{children:t.name})]}),(0,L.jsx)(Ki,{size:12})]},e.id))]},t.id))]})},Bt=e=>{switch(e.kind){case`share`:return Rt();case`favorites`:return It(e);case`quick`:{let t=Pt(e);return!A&&t.length===0?(0,L.jsx)(Rf,{children:D(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,L.jsxs)(gf,{children:[t.map(t=>(0,L.jsxs)(_f,{$plain:A,$selected:U===t.path,...G(e,t.path),onClick:e=>{!A&&!nt(t.path,!0)&&c(t.path,Ht(e))},onDoubleClick:()=>!A&&x?.(t.path),onContextMenu:e=>!A&&rt(e,t.path,!0),title:t.path,children:[A&&(0,L.jsx)(Nf,{onClick:n=>{n.stopPropagation(),Mt(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,L.jsx)(pi,{size:11})}),(0,L.jsxs)(jf,{children:[A?(0,L.jsx)(Mf,{onClick:e=>{e.stopPropagation(),V(lt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,L.jsx)(vf,{children:(0,L.jsx)(gs,{place:t})})}):(0,L.jsx)(vf,{children:(0,L.jsx)(gs,{place:t})}),lt(t.path)&&(0,L.jsx)(nd,{onPick:e=>void ut(t.path,e),value:j?.placeIcons?.[t.path]??t.icon})]}),(0,L.jsxs)(yf,{children:[fe?.path===t.path?(0,L.jsx)(`strong`,{children:(0,L.jsx)(Jf,{onCancel:()=>pe(null),onChange:e=>pe({path:t.path,name:e}),onCommit:()=>void dt(t.path,fe?.name??``),value:fe?.name??``})}):(0,L.jsxs)(`strong`,{children:[t.name,A&&(0,L.jsx)(Pf,{onClick:e=>{e.stopPropagation(),V(null),pe({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,L.jsx)(Ai,{size:11})})]}),(0,L.jsx)(bf,{children:t.path})]})]},t.path)),A&&(0,L.jsxs)(wf,{onClick:()=>void jt(e),title:D(`Pin a folder here`),type:`button`,children:[(0,L.jsx)(vf,{children:(0,L.jsx)(ti,{size:15})}),(0,L.jsxs)(yf,{children:[(0,L.jsx)(`strong`,{children:D(`Add folder`)}),(0,L.jsx)(bf,{children:D(`Pin a directory here`)})]})]})]}):(0,L.jsxs)(xf,{children:[t.map(t=>(0,L.jsxs)(Sf,{$selected:U===t.path,...G(e,t.path),onClick:e=>{!A&&!nt(t.path,!0)&&c(t.path,Ht(e))},onDoubleClick:()=>!A&&x?.(t.path),onContextMenu:e=>!A&&rt(e,t.path,!0),title:t.path,type:`button`,children:[(0,L.jsxs)(jf,{children:[A?(0,L.jsx)(Mf,{onClick:e=>{e.stopPropagation(),V(lt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,L.jsx)(gs,{place:t,size:15})}):(0,L.jsx)(gs,{place:t,size:15}),lt(t.path)&&(0,L.jsx)(nd,{onPick:e=>void ut(t.path,e),value:j?.placeIcons?.[t.path]??t.icon})]}),(0,L.jsxs)(Cf,{children:[fe?.path===t.path?(0,L.jsx)(`strong`,{children:(0,L.jsx)(Jf,{onCancel:()=>pe(null),onChange:e=>pe({path:t.path,name:e}),onCommit:()=>void dt(t.path,fe?.name??``),value:fe?.name??``})}):(0,L.jsxs)(`strong`,{children:[t.name,A&&(0,L.jsx)(Pf,{onClick:e=>{e.stopPropagation(),V(null),pe({path:t.path,name:t.name})},title:D(`Rename folder`),type:`button`,children:(0,L.jsx)(Ai,{size:11})})]}),(0,L.jsx)(bf,{children:t.path})]}),A&&(0,L.jsx)(Nf,{$inline:!0,onClick:n=>{n.stopPropagation(),Mt(e,t.path)},title:D(`Remove from Quick access`),type:`button`,children:(0,L.jsx)(pi,{size:11})})]},t.path)),A&&(0,L.jsxs)(wf,{$row:!0,onClick:()=>void jt(e),title:D(`Pin a folder here`),type:`button`,children:[(0,L.jsx)(ti,{size:15}),(0,L.jsxs)(Cf,{children:[(0,L.jsx)(`strong`,{children:D(`Add folder`)}),(0,L.jsx)(bf,{children:D(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,L.jsx)(Xf,{mode:e.view,onContextMenu:rt,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return Ft(e);case`drives`:return Lt(e);default:return(0,L.jsx)(Zf,{mode:e.view,onContextMenu:rt,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:j?.openOnSingleClick??!1,path:e.path??o,selectionMenuId:`overview:${e.id}`,showCheckboxes:j?.showCheckboxes??!0,visibilityVersion:g})}};return(0,L.jsxs)(Ed,{$flush:!!j?.overviewBanner,ref:Fe,children:[!b&&(0,L.jsxs)(ef,{$overlay:!!j?.overviewBanner,children:[(0,L.jsx)(tf,{role:`group`,title:D(`Columns`),children:[1,2,3,4,5].map(e=>(0,L.jsx)(nf,{$active:ht===e,onClick:()=>void gt({overviewColumns:e}),title:a(D,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),A&&(0,L.jsxs)(af,{children:[(0,L.jsxs)(rf,{onClick:()=>ue(e=>!e),onPointerDown:e=>e.stopPropagation(),title:D(`Add a panel`),type:`button`,children:[(0,L.jsx)(ti,{size:12}),D(`Add panel ▾`)]}),le&&(0,L.jsx)(of,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,L.jsx)(sf,{onClick:()=>{ue(!1),At(e)},type:`button`,children:D(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),Oe.available&&(0,L.jsx)(hf,{onClick:e=>Oe.open(e.clientX,e.clientY),title:D(`Selection menu`),type:`button`,children:(0,L.jsx)(ta,{size:14})}),(0,L.jsxs)(rf,{onClick:()=>{ne(e=>!e),ue(!1),V(null),pe(null),H(null)},title:D(A?`Done`:`Edit`),type:`button`,children:[A?(0,L.jsx)(fi,{size:13}):(0,L.jsx)(Ai,{size:13}),D(A?`Done`:`Edit`)]})]}),me&&(0,L.jsx)(Lf,{children:me}),j?.overviewBanner&&(0,L.jsxs)(Dd,{ref:Ie,style:{height:`${Re}px`,"--banner-image-width":`${Xe}px`,"--banner-image-shift":`${Qe}px`,"--banner-travel":`${Ze}px`,"--banner-overlap":`0px`},children:[(0,L.jsx)(Od,{children:ae?(0,L.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&We({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:se??void 0}):(0,L.jsx)(`img`,{alt:``,onLoad:e=>{let t=re?1920:e.currentTarget.naturalWidth||1920,n=re?1080:e.currentTarget.naturalHeight||1080;We({width:t,height:n})},ref:Le,src:se??void 0})}),A&&(0,L.jsx)(kd,{onDoubleClick:()=>{Pe.current=null,Me(null),gt({overviewBannerHeight:220})},onPointerCancel:Ct,onPointerDown:xt,onPointerMove:St,onPointerUp:Ct,title:D(`Drag to resize; double-click to reset`)})]}),(0,L.jsxs)(Ad,{$offset:j?.overviewBanner?100:0,children:[A&&(0,L.jsxs)(jd,{children:[(0,L.jsxs)(Md,{children:[(0,L.jsx)(Nd,{children:D(`Banners`)}),j?.overviewBanner&&(0,L.jsxs)(rf,{onClick:()=>tt(!0),title:D(`Adjust framing…`),type:`button`,children:[(0,L.jsx)(Ai,{size:12}),D(`Adjust framing…`)]})]}),(0,L.jsxs)(Pd,{children:[(0,L.jsx)(Rd,{children:(0,L.jsx)(zd,{$active:!j?.overviewBanner,onClick:yt,title:D(`No banner`),type:`button`,children:(0,L.jsxs)(Hd,{children:[(0,L.jsx)(pi,{size:16}),(0,L.jsx)(`span`,{children:D(`No banner`)})]})})}),ql.map(e=>(0,L.jsx)(Rd,{children:(0,L.jsx)(zd,{$active:j?.overviewBanner===e.id,onClick:()=>void gt({overviewBanner:e.id}),title:`${D(e.concept)} · ${D(e.preset)}`,type:`button`,children:(0,L.jsx)(xd,{poster:e.url,source:e.id})})},e.id)),Gl.map(e=>(0,L.jsx)(Rd,{children:(0,L.jsxs)(zd,{$active:j?.overviewBanner===e.id,onClick:()=>void gt({overviewBanner:e.id}),title:D(e.name),type:`button`,children:[(0,L.jsx)(xd,{poster:e.poster,source:e.id}),(0,L.jsx)(Vd,{children:(0,L.jsx)(vi,{size:11})})]})},e.id)),(j?.overviewBanners??[]).map(e=>(0,L.jsxs)(Rd,{children:[(0,L.jsx)(zd,{$active:j?.overviewBanner===e||j?.overviewBanner===`url:${e}`,onClick:()=>void gt({overviewBanner:w(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,L.jsx)(xd,{source:e})}),(0,L.jsx)(Bd,{onClick:()=>bt(e),title:D(`Remove`),type:`button`,children:(0,L.jsx)(pi,{size:10})})]},e)),(0,L.jsxs)($d,{onClick:()=>void _t(),title:D(`Add banner…`),type:`button`,children:[(0,L.jsx)(ti,{size:18}),(0,L.jsx)(`span`,{children:D(`Add banner…`)})]})]}),(0,L.jsxs)(Fd,{children:[(0,L.jsx)(Id,{onChange:e=>R(e.target.value),onKeyDown:e=>{e.key===`Enter`&&vt()},placeholder:`https://…`,value:ce}),(0,L.jsx)(Ld,{disabled:!w(ce),onClick:()=>void vt(),type:`button`,children:D(`Add URL`)})]})]}),(0,L.jsx)(cf,{ref:st,$columns:ht,children:at.map(e=>{let t=ot.indexOf(e.id);return(0,L.jsxs)(lf,{children:[(0,L.jsxs)(uf,{children:[(0,L.jsxs)(df,{children:[(0,L.jsxs)(jf,{children:[A?(0,L.jsx)(Mf,{onClick:()=>V(ct(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:D(`Change icon`),type:`button`,children:(0,L.jsx)(hs,{panel:e,size:15})}):(0,L.jsx)(hs,{panel:e,size:15}),ct(e.id)&&(0,L.jsx)(nd,{onPick:t=>kt(e.id,t),value:e.icon})]}),A?(0,L.jsx)(mf,{defaultValue:e.title,onBlur:t=>Tt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,L.jsx)(pf,{children:D(e.title)})]}),(0,L.jsxs)(ff,{children:[!A&&e.kind===`recent`&&(0,L.jsx)(rf,{onClick:()=>void Ve().then(f),title:D(`Clear`),type:`button`,children:D(`Clear`)}),!A&&e.kind===`frequent`&&(0,L.jsx)(rf,{onClick:()=>void He().then(()=>m?.()),title:D(`Clear the frequent list`),type:`button`,children:D(`Clear`)}),!A&&(e.kind===`home`||e.kind===`folder`)&&(0,L.jsx)(rf,{onClick:()=>c(e.path??o),title:D(`Open folder`),type:`button`,children:D(`Open`)}),A&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(hf,{$active:e.pinned,onClick:()=>Dt(e.id),title:e.pinned?D(`Unpin from the sidebar`):D(`Pin to the sidebar`),type:`button`,children:(0,L.jsx)(oi,{size:12})}),(0,L.jsx)(hf,{$active:e.view===`list`,onClick:()=>Et(e.id,`list`),title:D(`List`),type:`button`,children:(0,L.jsx)(si,{size:13})}),(0,L.jsx)(hf,{$active:e.view===`grid`,onClick:()=>Et(e.id,`grid`),title:D(`Grid`),type:`button`,children:(0,L.jsx)(ci,{size:13})}),(0,L.jsx)(hf,{disabled:t===0,onClick:()=>wt(e.id,-1),title:D(`Move up`),type:`button`,children:(0,L.jsx)($r,{size:12})}),(0,L.jsx)(hf,{disabled:t===ot.length-1,onClick:()=>wt(e.id,1),title:D(`Move down`),type:`button`,children:(0,L.jsx)($r,{size:12})}),(0,L.jsx)(hf,{onClick:()=>Ot(e.id),title:D(`Remove panel`),type:`button`,children:(0,L.jsx)(pi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Bt(e):(0,L.jsx)(Of,{children:Bt(e)})]},e.id)})})]}),et&&se&&(0,L.jsx)(Sd,{height:Re,offset:Ge,onCancel:()=>tt(!1),onSave:e=>{gt({overviewBannerOffset:e}),tt(!1)},source:se,video:ae}),ke&&(0,L.jsx)(Za,{directory:o,menu:{x:ke.x,y:ke.y,paths:[ke.target.path]},onClose:()=>Ae(null),onCopy:(e,t)=>void mt(e,t),onAddToTray:ee,onAddFavorite:te,onExtractArchive:T,onOpen:it,onOpenFile:e=>x?x(e):void ye(e),shortcuts:zt,target:ke.target})]})}function Jf({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=z();return(0,L.jsxs)(Ff,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,L.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,L.jsx)(If,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,L.jsx)(pi,{size:11})}),(0,L.jsx)(If,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,L.jsx)(fi,{size:12})})]})}function Yf(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}function Xf({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:o}){let s=z(),[c,l]=(0,O.useState)(null),[u,d]=(0,O.useState)(null),f=jn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,O.useEffect)(()=>{ze().then(l,()=>l([]))},[o]),!c)return(0,L.jsx)(Rf,{children:s(`Reading…`)});if(c.length===0)return(0,L.jsx)(Rf,{children:s(`Folders you open often show up here.`)});let m=e=>a(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,L.jsx)(gf,{children:c.map(e=>{let i=Mn(f,e.path);return(0,L.jsxs)(_f,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Ht(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,L.jsx)(vf,{children:i&&f.useIcons?(0,L.jsx)(gs,{place:i,size:18}):(0,L.jsx)(Ps,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,L.jsxs)(yf,{children:[(0,L.jsx)(`strong`,{children:i?.name||e.name}),(0,L.jsx)(bf,{children:m(e)})]})]},e.path)})}):(0,L.jsx)(xf,{children:c.map(e=>{let i=Mn(f,e.path);return(0,L.jsxs)(Sf,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Ht(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,L.jsx)(gs,{place:i,size:15}):(0,L.jsx)(Ps,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,L.jsxs)(Cf,{children:[(0,L.jsx)(`strong`,{children:i?.name||e.name}),(0,L.jsx)(bf,{children:m(e)})]})]},e.path)})})}function Zf({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:o,showCheckboxes:s,openOnSingleClick:c,visibilityVersion:l}){let u=z(),[d,f]=(0,O.useState)(null),[p,m]=(0,O.useState)(null),h=jn();return(0,O.useEffect)(()=>{e&&(f(null),be(e).then(f,()=>f(null)))},[e,l]),(0,O.useEffect)(()=>{if(I.available)return I.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&n.data.path.replace(/[\\\\/]+$/,``).toLowerCase()===e.replace(/[\\\\/]+$/,``).toLowerCase()&&be(e,!1).then(f,()=>void 0)})},[e]),d?t===`list`?(0,L.jsx)(Df,{children:(0,L.jsx)(wc,{error:null,listing:d,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void ye(e)),onRefresh:()=>void be(e,!1).then(f,()=>void 0),onRename:(e,t)=>f(n=>n&&{...n,entries:n.entries.map(n=>n.fullPath.toLowerCase()===e.toLowerCase()?{...n,name:_(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:o,onSort:()=>void 0,openOnSingleClick:c,enableShortcuts:!1,showCheckboxes:s,showDetails:!1,showImages:!1,view:{...ge,columns:_e.columns??[]}})}):(0,L.jsx)(Of,{children:d.entries.length===0?(0,L.jsx)(Rf,{children:u(`This folder is empty.`)}):(0,L.jsx)(kf,{children:d.entries.map(e=>{let t=Mn(h,e.fullPath);return(0,L.jsxs)(Af,{$selected:p===e.fullPath,onClick:t=>{i?(m(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Ht(t)):ye(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&h.useIcons?(0,L.jsx)(gs,{place:t,size:16}):(0,L.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,L.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,L.jsx)(Rf,{children:u(`Reading…`)})}function Qf({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=z(),s=jn(),[c,l]=(0,O.useState)(!1),[u,d]=(0,O.useState)(``),[f,p]=(0,O.useState)([]),[m,h]=(0,O.useState)(0),[g,_]=(0,O.useState)(null),[v,y]=(0,O.useState)(null),b=(0,O.useRef)(null),x=(0,O.useRef)(null),S=(0,O.useRef)(0);(0,O.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,O.useEffect)(()=>{r&&r!==S.current&&(S.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,O.useEffect)(()=>{c&&b.current?.select()},[c]),(0,O.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ee=()=>{d(e.replace(/\\/g,`/`)),l(!0)},te=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,O.useEffect)(()=>{if(!c){p([]);return}let e=tp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{be(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,O.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=x.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,L.jsxs)(sp,{onPointerDown:e=>e.stopPropagation(),ref:x,children:[(0,L.jsxs)(dp,{children:[(0,L.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):te(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:b,spellCheck:!1,value:u}),(0,L.jsx)(fp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,L.jsx)(pi,{size:12})}),(0,L.jsx)(fp,{$apply:!0,onClick:te,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,L.jsx)(fi,{size:14})})]}),f.length>0&&g&&(0,Sa.createPortal)((0,L.jsx)(cp,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,L.jsxs)(lp,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,L.jsx)(Ps,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,L.jsx)(up,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:ep(e,s.places);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(np,{onClick:ee,title:o(`Click to type a path`),children:w.map((t,n)=>(0,L.jsxs)(rp,{$last:n===w.length-1,children:[n>0&&(0,L.jsx)(ap,{children:(0,L.jsx)(ii,{size:9})}),(0,L.jsxs)(op,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,L.jsx)(ip,{children:(0,L.jsx)(gs,{place:t.place,size:13})}):t.icon&&(0,L.jsx)(ip,{children:t.icon}),t.label]})]},t.path))}),v&&(0,L.jsx)(za,{items:[{label:o(`Open`),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),onSelect:()=>i(v.path,!0)},{label:o(`Open with…`),onSelect:()=>void Ot(v.path)},{label:o(`Copy path`),onSelect:()=>void navigator.clipboard.writeText(v.path)},{label:o(`Properties`),onSelect:()=>void Dt([v.path])}],onClose:()=>y(null),x:v.x,y:v.y})]})}function $f(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function ep(e,t){let n=$f(e),r=e=>e.replace(/[\\/]+$/,``).toLowerCase(),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>r(t.path)===r(e.path));t>i&&(i=t,a=e)}return a&&i>=0&&n.splice(0,i+1,{label:a.name,path:n[i].path,place:a}),n}function tp(e){if(e.toLowerCase().startsWith(`yafm://`))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var np=i.div`
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
`,pp=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,L.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,L.jsx)(`path`,{d:`M4 4v6h6`})]});function mp({onOpenLocation:e,find:t,onSearchMatches:n,showDetails:r=!0,onShowDetails:i,videoAudio:o=!1,videoAutoplay:s=!1,platform:c}){let l=z(),u=gc(`recycle`),f=c===`windows`,[p,m]=(0,O.useState)([]),[h,g]=(0,O.useState)([]),[_,y]=(0,O.useState)(!1),[b,x]=(0,O.useState)(null),[S,ee]=(0,O.useState)(!0),[te,C]=(0,O.useState)(!1),[w,T]=(0,O.useState)(null),[E,D]=(0,O.useState)(!1),[k,A]=(0,O.useState)(()=>new Set),[ne,j]=(0,O.useState)(null),[M,N]=(0,O.useState)(()=>{let e=In(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[re,ie]=(0,O.useState)(null),[P,F]=(0,O.useState)(null),[ae,I]=(0,O.useState)(()=>{let e=Pn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),oe=(0,O.useRef)(null),se=e=>{I(e),Fn(`yafm.recycle.preview.width`,e)},ce=(0,O.useCallback)(async()=>{ee(!0),T(null);try{m(await ke(E))}catch(e){T(e instanceof Error?e.message:String(e))}finally{ee(!1)}},[E]);(0,O.useEffect)(()=>{ce()},[ce]),(0,O.useEffect)(()=>{E||(g([]),y(!1),x(null))},[E]),(0,O.useEffect)(()=>{A(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let R=(0,O.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=hp(e,t,M.column);return M.descending?-n:n})},[p,h,M]),B=(0,O.useMemo)(()=>!t?.open||t.query.trim().length===0?R:R.filter(e=>Cn(e.name,t)||Cn(e.originalPath,t)),[R,t?.open,t?.query,t?.matchCase,t?.regex]),V=(0,O.useRef)(null);td(V,t??null,`[data-search-block]`,n??(()=>void 0),[R]),(0,O.useEffect)(()=>{A(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]);let le=(0,O.useMemo)(()=>R.filter(e=>k.has(e.id)),[R,k]),ue=le.filter(e=>e.removable&&!e.isOrphan),de=le.filter(e=>e.removable),H=(e,t)=>{let n=t.ctrlKey||t.metaKey;A(r=>{if(t.shiftKey&&ne){let t=R.findIndex(e=>e.id===ne),i=R.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(R[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),j(e.id)},fe=(0,O.useCallback)(()=>A(new Set(B.map(e=>e.id))),[B]),pe=B.length>0&&B.every(e=>k.has(e.id)),me=(0,O.useCallback)(async()=>{let e=ue.map(e=>e.id);if(e.length!==0){C(!0);try{let t=await Me(e);t.ok||await ua(a(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),A(new Set),await ce()}finally{C(!1)}}},[ce,ue,l]),he=(0,O.useCallback)(async()=>{let e=de.map(e=>e.id);if(F(null),e.length!==0){C(!0);try{let t=await Ne(e);!t.ok&&!t.cancelled&&await ua(a(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),A(new Set),await ce()}finally{C(!1)}}},[de,ce,l]),ge=async()=>{F(null),C(!0);try{await je(E),A(new Set),await ce()}finally{C(!1)}},_e=async()=>{C(!0),x(null);try{let e=await Fe();if(e.cancelled){x(`Elevation was declined — nothing was read.`);return}if(e.failed){x(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),y(!0)}finally{C(!1)}},ve=async()=>{C(!0),F(null);try{await Ie(),g([]),y(!1),x(null),await ce()}finally{C(!1)}},ye=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},be=e=>{navigator.clipboard.writeText(e.originalPath)},xe=(e,t)=>{e.preventDefault(),t&&!k.has(t.id)&&A(new Set([t.id])),ie({x:e.clientX,y:e.clientY})};(0,O.useEffect)(()=>(dc(`recycle`,k.size>0?(e,t)=>ie({x:e,y:t}):null),()=>dc(`recycle`,null)),[k]),(0,O.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),fe()):e.key===`Delete`?(e.preventDefault(),de.length>0&&F(`delete`)):e.key===`Enter`&&ue.length>0?(e.preventDefault(),me()):e.key===`Escape`&&(A(new Set),ie(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[de.length,ue.length,me,fe]);let Se=[{label:l(`Restore`),icon:(0,L.jsx)(pp,{width:14,height:14}),disabled:ue.length===0,onSelect:()=>void me()},{label:l(`Delete permanently`),icon:(0,L.jsx)(di,{size:14}),danger:!0,disabled:de.length===0,onSelect:()=>F(`delete`)},{label:l(`Properties`),icon:(0,L.jsx)(ai,{size:14}),disabled:le.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=le;e&&Pe(e.id)}},{label:l(`Open original location`),icon:(0,L.jsx)(Yr,{size:14}),disabled:le.length!==1,onSelect:()=>{let[e]=le;e&&ye(e)}},{label:l(`Copy original path`),icon:(0,L.jsx)(Ji,{size:14}),disabled:le.length!==1,onSelect:()=>{let[e]=le;e&&be(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:fe},{label:l(`Refresh`),icon:(0,L.jsx)(ei,{size:14}),onSelect:()=>void ce()}],Ce=le.length>0?le[0]:null,U=Ce?{name:Ce.name,path:Ce.contentPath||Ce.originalPath,isDirectory:Ce.isDirectory,size:Ce.size,modified:Ce.deleted,fields:[{label:l(`Type`),value:l(_p(Ce))},{label:l(`Original location`),value:Ce.originalPath},{label:l(`Date deleted`),value:v(Ce.deleted)},{label:l(`Size`),value:Ce.isDirectory?`—`:d(Ce.size)},...Ce.owner?[{label:l(`Owner`),value:Ce.owner}]:[],{label:l(`Status`),value:Ce.isOrphan?l(`Metadata only`):Ce.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,L.jsxs)(yp,{ref:oe,onContextMenu:e=>xe(e),children:[(0,L.jsxs)(bp,{children:[(0,L.jsxs)(xp,{children:[(0,L.jsx)(di,{size:16}),(0,L.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,L.jsxs)(Sp,{children:[S?`…`:a(l,R.length,`1 item`,`{count} items`),k.size>0&&` · ${l(`{count} selected`,{count:k.size})}`]})]}),(0,L.jsxs)(Cp,{children:[(0,L.jsx)(Tp,{$on:E,onClick:()=>D(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),E&&f&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(wp,{disabled:te||_,onClick:()=>void _e(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(te?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,L.jsx)(wp,{disabled:te,onClick:()=>F(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,L.jsx)(wp,{disabled:te||ue.length===0,onClick:()=>void me(),type:`button`,children:l(`Restore`)}),(0,L.jsx)(wp,{$danger:!0,disabled:te||de.length===0,onClick:()=>F(`delete`),type:`button`,children:l(`Delete`)}),(0,L.jsx)(wp,{disabled:te||R.length===0,onClick:()=>F(`empty`),type:`button`,children:l(`Empty`)}),(0,L.jsx)(Ep,{onClick:()=>void ce(),title:l(`Refresh`),type:`button`,children:(0,L.jsx)(ei,{size:14})}),u.available&&(0,L.jsx)(Ep,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,L.jsx)(ta,{size:14})})]})]}),b&&(0,L.jsx)(qp,{children:b}),w&&(0,L.jsx)(Jp,{children:w}),!w&&!S&&(t?.open&&t.query.trim().length>0?B.length===0:R.length===0)&&(0,L.jsx)(Jp,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),R.length>0&&(0,L.jsxs)(Kp,{children:[(0,L.jsxs)(Dp,{ref:V,children:[(0,L.jsxs)(kp,{children:[(0,L.jsx)(Fp,{$checked:pe,$partial:!pe&&k.size>0,onClick:()=>pe?A(new Set):fe(),title:l(pe?`Select none`:`Select all`),type:`button`,children:pe?(0,L.jsx)(fi,{size:9}):k.size>0&&(0,L.jsx)(Ip,{})}),(0,L.jsxs)(Ap,{onClick:()=>we(`name`),type:`button`,children:[l(`Name`),gp(M,`name`)]}),(0,L.jsxs)(Ap,{onClick:()=>we(`original`),type:`button`,children:[l(`Original location`),gp(M,`original`)]}),(0,L.jsxs)(Ap,{onClick:()=>we(`deleted`),type:`button`,children:[l(`Date deleted`),gp(M,`deleted`)]}),(0,L.jsxs)(Ap,{onClick:()=>we(`size`),type:`button`,children:[l(`Size`),gp(M,`size`)]}),(0,L.jsxs)(Ap,{onClick:()=>we(`type`),type:`button`,children:[l(`Type`),gp(M,`type`)]}),(0,L.jsx)(`span`,{})]}),(0,L.jsx)(jp,{onClick:e=>{e.target===e.currentTarget&&A(new Set)},children:R.map(e=>(0,L.jsxs)(Mp,{$checked:k.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>H(e,t),onContextMenu:t=>xe(t,e),onDoubleClick:()=>{A(new Set([e.id])),j(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,L.jsx)(Pp,{$checked:k.has(e.id),children:k.has(e.id)&&(0,L.jsx)(fi,{size:9})}),(0,L.jsxs)(Lp,{children:[(0,L.jsx)(vp,{entry:e}),(0,L.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,L.jsx)(Gp,{children:l(`metadata only`)}),e.owner&&(0,L.jsx)(Gp,{$other:!0,children:l(`other profile`)})]}),(0,L.jsx)(zp,{children:e.originalPath}),(0,L.jsx)(Bp,{children:v(e.deleted)}),(0,L.jsx)(Vp,{children:e.isDirectory?`—`:d(e.size)}),(0,L.jsx)(Hp,{children:l(_p(e))}),(0,L.jsxs)(Up,{children:[e.removable&&!e.isOrphan&&(0,L.jsx)(Wp,{onClick:t=>{t.stopPropagation(),Me([e.id]).then(ce)},title:l(`Restore to its original folder`),type:`button`,children:(0,L.jsx)(pp,{})}),e.removable&&(0,L.jsx)(Wp,{$danger:!0,onClick:t=>{t.stopPropagation(),A(new Set([e.id])),F(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,L.jsx)(di,{size:13})})]})]},e.id))})]}),r&&(0,L.jsx)(Ro,{emptyNote:l(`Nothing selected.`),info:U,onWidth:se,selectionNote:le.length>1?a(l,le.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:o,videoAutoplay:s,width:ae})]}),re&&(0,L.jsx)(za,{items:Se,onClose:()=>ie(null),x:re.x,y:re.y}),(0,L.jsx)(Do,{confirmLabel:l(P===`empty`?`Empty the bin`:P===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:P===`empty`?a(l,R.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):P===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):a(l,de.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>F(null),onConfirm:()=>{P===`empty`?ge():P===`purge`?ve():he()},open:P!==null,title:l(P===`empty`?`Empty the recycle bin`:P===`purge`?`Delete every orphan`:`Delete permanently`)})]});function we(e){N(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Ln(`yafm.recycle.sort`,n),n})}}function hp(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return _p(e).localeCompare(_p(t),void 0,{sensitivity:`base`})}}function gp(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function _p(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function vp({entry:e}){let t=an(e.originalPath,e.isDirectory);return(0,L.jsx)(Rp,{children:t?(0,L.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,L.jsx)(Yr,{}):(0,L.jsx)(Xr,{})})}var yp=i.div`
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
`;async function Yp(){return I.available?(await I.request(`app.tags`)).tags:[]}async function Xp(e){return!I.available||!e?!1:(await I.request(`app.tags.delete`,{name:e})).ok}async function Zp(e,t){return!I.available||!e?[]:(await I.request(`app.tags.create`,{name:e,color:t})).tags}async function Qp(e,t){return!I.available||!e?!1:(await I.request(`app.tags.color`,{name:e,color:t})).ok}async function $p(e,t){return!I.available||!e||!t?!1:(await I.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function em(){let e=z();return(0,L.jsx)(tm,{title:e(`Always applies to every folder`),children:e(`Global`)})}var tm=i.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,nm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function rm(e){return`"${e.replaceAll(`"`,``)}"`}function im(e){let t=document.documentElement.style;for(let n of nm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${rm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function am(){return I.available?(await I.request(`app.fonts`)).fonts??[]:[]}function om({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=z(),[s,c]=(0,O.useState)(null),[l,u]=(0,O.useState)(``),d=(0,O.useRef)(null),f=(0,O.useRef)(null),p=(0,O.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,O.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(sm,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,L.jsx)(cm,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,L.jsx)(lm,{children:`▾`})]}),s&&(0,Sa.createPortal)((0,L.jsxs)(um,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,L.jsxs)(dm,{children:[(0,L.jsx)(Qr,{size:12}),(0,L.jsx)(fm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,L.jsxs)(pm,{children:[(0,L.jsxs)(mm,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,L.jsxs)(gm,{children:[n,` `,(0,L.jsx)(vm,{children:o(`(default)`)})]}),!e&&(0,L.jsx)(fi,{size:11})]}),p.map(t=>(0,L.jsxs)(mm,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,L.jsxs)(hm,{children:[(0,L.jsx)(gm,{children:t}),(0,L.jsx)(_m,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,L.jsx)(fi,{size:11})]},t)),p.length===0&&(0,L.jsx)(ym,{children:o(`No matching font.`)})]})]}),document.body)]})}var sm=i.button`
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
`,bm=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`refresh`,label:`Refresh`,note:`Reads the current folder again.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],xm=`https://github.com/T2PeNBiX99wcoxKv3A4g/Yet-Another-File-Manager/releases/latest`,Sm=`en`,Cm=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],wm=new Date(2026,10,5,16,8).getTime(),Tm=`system`,Em={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Dm=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Om=`yafm.colors.recent`;function km(){let e=In(Om);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Am({appInfo:e,focusSection:n,onSettingsChanged:r,find:i,onSearchMatches:o}){let s=z(),[c,l]=(0,O.useState)([]),[u,f]=(0,O.useState)(null),[h,g]=(0,O.useState)(null),[v,b]=(0,O.useState)(null),[x,S]=(0,O.useState)(``),[ee,C]=(0,O.useState)(`file`),[T,E]=(0,O.useState)(!1),[D,k]=(0,O.useState)(!1),[A,ne]=(0,O.useState)(null),[j,M]=(0,O.useState)(!1),[N,re]=(0,O.useState)(!1),[ie,P]=(0,O.useState)(null),[F,ae]=(0,O.useState)(null),[I,oe]=(0,O.useState)(null),[ce,R]=(0,O.useState)(!1),[B,V]=(0,O.useState)(null),[le,ue]=(0,O.useState)(null),[de,H]=(0,O.useState)(!1),[fe,pe]=(0,O.useState)([]),[me,he]=(0,O.useState)(null),[ge,ve]=(0,O.useState)(!1),[ye,be]=(0,O.useState)(null),[xe,Se]=(0,O.useState)(``),[Ce,U]=(0,O.useState)(_s),[we,Te]=(0,O.useState)(null),[Ee,De]=(0,O.useState)(null),[Oe,ke]=(0,O.useState)(``),[Ae,je]=(0,O.useState)(``),[Me,Ne]=(0,O.useState)(null),[Pe,Fe]=(0,O.useState)(km),[Ie,Le]=(0,O.useState)({}),[Re,ze]=(0,O.useState)(null),[Be,Ve]=(0,O.useState)(null),[He,We]=(0,O.useState)(!1),[Ge,Ke]=(0,O.useState)(!1),[Ye,et]=(0,O.useState)(null),[nt,rt]=(0,O.useState)(Dm[0].id),[dt,mt]=(0,O.useState)([]),[ht,gt]=(0,O.useState)(null),[_t,vt]=(0,O.useState)(null),[yt,bt]=(0,O.useState)(null),[xt,St]=(0,O.useState)(!1),[Ct,wt]=(0,O.useState)(``),Tt=(0,O.useRef)(null),Et=(0,O.useRef)({}),Dt=h?.defaultView??_e,Ot=h?.themePresets??[],kt=F?F.registered&&F.pathMatches:h?.archiveHandler??!1,At=F?.registered??h?.archiveHandler??!1,jt=I?I.registered&&I.pathMatches:h?.defaultFileManager??!1;td(Tt,i??null,`section`,o??(()=>void 0),[h]),(0,O.useEffect)(()=>{let e=Tt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){rt(Dm[Dm.length-1].id);return}let n=t+110,r=Dm[0].id;for(let{id:e}of Dm){let t=Et.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}rt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Mt=e=>t=>{Et.current[e]=t},Nt=e=>{Et.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),rt(e)};(0,O.useEffect)(()=>{n&&Nt(n)},[n]),(0,O.useEffect)(()=>{se().then(e=>l(e.available),()=>l([]))},[]),(0,O.useEffect)(()=>{am().then(mt,()=>mt([]))},[]),(0,O.useEffect)(()=>{ft().then(vt,()=>vt(null))},[]),(0,O.useEffect)(()=>{it().then(Ve,()=>void 0)},[]),(0,O.useEffect)(()=>{Ue().then(f,()=>f(null)),qe().then(g,()=>g(null)),lt().then(M,()=>M(!1)),W().then(ae,()=>ae(null)),Xe().then(oe,()=>oe(null)),Yp().then(pe,()=>pe([]))},[]),(0,O.useEffect)(()=>{let e=()=>void st().then(ne,()=>ne(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!h)return;let t={...h,...e};Object.keys(e).every(e=>t[e]===h[e])||(g(t),en(),g(await $e(t)),r())},Pt=async e=>{let t=await oa(e);if(!t)return;let n=h?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Ft=async()=>{let e=Ct.trim();if(!h||!w(e))return;let t=h.backgroundCustom??[];wt(``),await G({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},It=e=>{if(!h)return;let t=h.backgroundSource;G({backgroundCustom:h.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Lt=async()=>{if(!h)return;let t=await aa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.protectedPaths.includes(r)||await G({protectedPaths:[...h.protectedPaths,r]})},Rt=()=>{let e=Oe.trim();h&&e&&!h.protectedPaths.includes(e)&&(ke(``),G({protectedPaths:[...h.protectedPaths,e]}))},Bt=()=>{if(!h||!we)return;let e=we.value.trim(),t=we.from;Te(null),e.length!==0&&e!==t&&G({protectedPaths:h.protectedPaths.map(n=>n===t?e:n)})},Vt=e=>{h&&G({protectedPaths:h.protectedPaths.filter(t=>t!==e)})},Ht=async()=>{let e=await Je();e.length>0&&await G({protectedPaths:e})},Gt=()=>{if(!h||!Ee)return;let e=Ee.value.trim(),t=Ee.from;De(null),e&&e!==t&&G({directoryIndexBlacklist:h.directoryIndexBlacklist.map(n=>n===t?e:n)})},Kt=()=>{let e=Ae.trim();h&&e&&!h.directoryIndexBlacklist.includes(e)&&(je(``),G({directoryIndexBlacklist:[...h.directoryIndexBlacklist,e]}))},qt=async()=>{if(!h)return;let t=await aa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;h.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[...h.directoryIndexBlacklist,r]})},Jt=e=>{h&&G({directoryIndexBlacklist:h.directoryIndexBlacklist.filter(t=>t!==e)})},Yt=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Xt=()=>{if(!h||Me===null)return;let e=Me.trim()||`yyyy/MM/dd HH:mm`;Ne(null),e!==h.timeFormatPattern&&G({timeFormatPattern:e})},Zt=(e,t)=>{Fe(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Ln(Om,i),i})},K=m(h?.accentColor,te),Qt=m(h?.secondaryColor,y),$t=(e,t)=>{h&&(Zt(`accent`,K),Zt(`secondary`,Qt),G({accentColor:e,secondaryColor:t}))},q=(e,t)=>{h&&(Zt(e,e===`accent`?K:Qt),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},J=async()=>{We(!0),Ke(!1);try{Ve(await at())}catch{Ke(!0)}finally{We(!1)}},tn=async()=>{if(!h||!Re)return;let e=Re.name.trim()||`${Re.accent.toUpperCase()} / ${Re.secondary.toUpperCase()}`,t=[...h.themePresets,{name:e,accent:Re.accent,secondary:Re.secondary}];ze(null),await G({themePresets:t})},nn=async e=>{h&&await G({themePresets:h.themePresets.filter((t,n)=>n!==e)})},rn=e=>{let t=Ye;et(null),t&&t.role===e&&(e===`accent`?K:Qt).toLowerCase()!==t.color.toLowerCase()&&Zt(e,t.color)},an=async()=>{let e=xe.trim();if(e&&!ge){ve(!0),be(null);try{pe(await Zp(e,Ce)),Se(``)}catch{be(s(`Could not add the tag.`))}finally{ve(!1)}}},on=async(e,t)=>{pe(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Qp(e,t)||be(s(`Could not change the tag's color.`))},sn=async e=>{if(ge)return;ve(!0),be(null);let t=await Xp(e);pe(await Yp()),t||be(`"${e}" is still used by a folder whose index could not be updated.`),ve(!1)},cn=async()=>{let e=me;if(!e||ge)return;let t=e.value.trim();t.length===0||t===e.name?he(null):(ve(!0),be(null),await $p(e.name,t)?(pe(await Yp()),he(null)):be(`Could not rename "${e.name}".`),ve(!1))},ln=async e=>{let t=new Set(Dt.columns??_e.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=xc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...Dt,columns:n}})},un=async()=>{if(N)return;let e=!j;re(!0),P(null);try{let t=await ut(e);M(t),g(e=>e&&{...e,linksEnabled:t}),r(),t!==e&&P(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{P(`The request to Windows failed. Try again.`)}finally{re(!1)}},dn=async()=>{if(!ce){R(!0),V(null);try{let e=await Ze();ae(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),r(),t||V(`Windows did not accept the archive registration. Try again.`)}catch{V(`The request to Windows failed. Try again.`)}finally{R(!1)}}},fn=async()=>{if(!ce){R(!0),V(null);try{let e=await Qe();ae(e),g(e=>e&&{...e,archiveHandler:!1}),r(),e.registered&&V(`The registration is still there. Try turning it off again.`)}catch{V(`The request to Windows failed. Try again.`)}finally{R(!1)}}},pn=async(e,t)=>{if(!h)return;let n={...h.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},mn={...zt,...h?.shortcuts};(0,O.useEffect)(()=>{if(!le)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ue(null);return}let t=Ut(e);t&&(ue(null),G({shortcuts:{...mn,[le]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[le,h]),(0,O.useEffect)(()=>{if(!de)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){H(!1);return}let t=Ut(e);t&&(H(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[de,h]);let hn=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},gn=(e,t)=>{let n=t??Ie[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Le(t=>({...t,[e]:void 0})),G(i)},_n=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;gt(null),await G({sharePortMode:`custom`,sharePort:n}),await pd(n,`custom`)},vn=async e=>{let t=e===`custom`,n=t?h?.sharePort??8080:null;await G({sharePortMode:t?`custom`:`random`,sharePort:n}),await pd(n,t?`custom`:`random`)},yn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;St(!0),bt(null);try{let e=await pt(t);vt(e),bt(e.error),e.error||await G({startupMode:t})}finally{St(!1)}},bn=async e=>{await G({galleryRoots:e.length>0?e:null})},xn=async()=>{let e=await aa(),t=h?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await bn([...t,e])},Sn=async()=>{let e=x.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await pn(e,ee),S(``))},Cn=async()=>{k(!0);try{let e=await aa();if(!e)return;let t=await oa([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await tt(e.replace(/[\\/][^\\/]+$/,``),_(e),`file:${t}`)&&(en(),b({folder:e,icon:t}))}finally{k(!1)}},wn=async(e,t)=>{let n={...h?.fonts};t?n[e]=t:delete n[e],await G({fonts:n})};return(0,L.jsxs)(Hm,{children:[(0,L.jsxs)(Um,{ref:Tt,children:[(0,L.jsxs)(Wm,{ref:Mt(`application`),children:[(0,L.jsx)(Vm,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Version`)}),(0,L.jsx)(bh,{children:e?`v${e.version}`:`—`})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Platform`)}),(0,L.jsx)(bh,{children:e?.platform??`—`})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Language`)}),(0,L.jsx)($,{children:s(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(Rm,{disabled:!h,onChange:e=>void G({language:e}),options:[Tm,...c.length>0?c:[Sm]],value:h?.language??Sm})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Picker window size`)}),(0,L.jsx)($,{children:s(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Ah,{inputMode:`numeric`,onBlur:e=>gn(`width`,e.currentTarget.value),onChange:e=>Le(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ie.width??String(h?.pickerWindowWidth??1200)}),(0,L.jsx)(bh,{children:`×`}),(0,L.jsx)(Ah,{inputMode:`numeric`,onBlur:e=>gn(`height`,e.currentTarget.value),onChange:e=>Le(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ie.height??String(h?.pickerWindowHeight??800)})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Web server port`)}),(0,L.jsx)($,{children:s(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(eo,{disabled:!h,onChange:e=>void vn(e),options:[{value:`random`,label:s(`Random`)},{value:`custom`,label:s(`Custom port`)}],value:h?.sharePortMode??`random`,width:160})})]}),h?.sharePortMode===`custom`&&(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Custom port`)}),(0,L.jsx)($,{children:s(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(Ah,{inputMode:`numeric`,onBlur:e=>void _n(e.currentTarget.value),onChange:e=>gt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:ht??(h?.sharePort?String(h.sharePort):``)})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Link paths`)}),(0,L.jsx)($,{children:s(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(eo,{disabled:!h,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:s(`Relative`)},{value:`absolute`,label:s(`Absolute`)}],value:h?.linkPathMode??`relative`,width:160})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Global hotkey`)}),(0,L.jsx)($,{children:s(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(cg,{$listening:de,disabled:!h,onClick:()=>H(!0),type:`button`,children:de?s(`Press a key…`):h?.globalHotkey?Wt(h.globalHotkey):s(`None`)}),h?.globalHotkey&&(0,L.jsx)(Ch,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:s(`Clear`)})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Open yafm:// links`)}),(0,L.jsx)($,{children:s(`Registers this app for yafm:// links, for the current user only. While this is on, the app repairs the entry at every launch.`)}),ie&&(0,L.jsx)(yh,{children:ie})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Dh,{$on:j,children:s(j?`Active`:`Off`)}),(0,L.jsx)(Oh,{$on:j,disabled:N,onClick:()=>void un(),title:s(j?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,L.jsx)(kh,{})})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Use as the default file manager`)}),(0,L.jsx)($,{children:s(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),I?.registered&&!I.pathMatches&&(0,L.jsx)(yh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:I.registeredPath??`?`})})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Dh,{$on:jt,children:s(jt?`Active`:`Off`)}),(0,L.jsx)(Oh,{$on:jt,disabled:!h,onClick:()=>void(async()=>{let e=I?.registered&&!I.pathMatches?!0:!h?.defaultFileManager;await G({defaultFileManager:e}),oe(await Xe().catch(()=>null))})(),title:s(jt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,L.jsx)(kh,{})})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Open archives with this app`)}),(0,L.jsx)($,{children:s(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,L.jsx)($,{children:s(`When this is off, opening an archive uses the system's default application instead.`)}),F?.registered&&!F.pathMatches&&(0,L.jsx)(yh,{children:s(`The registered path points to {path}. Register again to use this build.`,{path:F.registeredPath??`?`})}),B&&(0,L.jsx)(yh,{children:B})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Dh,{$on:kt,children:s(kt?`Active`:`Off`)}),(0,L.jsx)(lg,{disabled:!h||ce||kt,onClick:()=>void dn(),type:`button`,children:s(`Register`)}),e?.platform===`windows`&&(0,L.jsx)(lg,{onClick:()=>void ot(`ms-settings:defaultapps`),type:`button`,children:s(`Default apps…`)}),(0,L.jsx)(Eh,{disabled:!h||ce||!At,onClick:()=>void fn(),type:`button`,children:s(`Unregister`)})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Reopen the tabs that were open`)}),(0,L.jsx)($,{children:s(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,L.jsx)(Oh,{$on:h?.restoreTabs??!0,disabled:!h,onClick:()=>void G({restoreTabs:!h?.restoreTabs}),type:`button`,children:(0,L.jsx)(kh,{})})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`startup`),children:[(0,L.jsx)(Vm,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Start with the computer`)}),(0,L.jsx)($,{children:s(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),yt&&(0,L.jsx)(yh,{children:yt}),_t&&!_t.supported&&(0,L.jsx)(yh,{children:s(`This platform cannot create a per-user startup entry.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(eo,{disabled:!h||xt||_t!==null&&!_t.supported,onChange:e=>void yn(e),options:[{value:`none`,label:s(`None`)},{value:`shortcut`,label:s(`Shortcut`)},{value:`task`,label:s(`Scheduled task`)}],value:_t?.mode??h?.startupMode??`none`,width:170})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Start hidden in the tray`)}),(0,L.jsx)($,{children:s(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(Oh,{$on:h?.startHidden??!1,disabled:!h,onClick:()=>void G({startHidden:!h?.startHidden}),type:`button`,children:(0,L.jsx)(kh,{})})})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`fonts`),children:[(0,L.jsx)(Vm,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,L.jsxs)(Km,{children:[nm.map(e=>(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(e.label)}),(0,L.jsx)($,{children:s(`Falls back to {font} until another family is chosen.`,{font:s(e.fallback)})})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(om,{defaultLabel:s(e.fallback),disabled:!h,fonts:dt,onChange:t=>void wn(e.id,t),sample:e.sample,value:h?.fonts?.[e.id]??null})})]},e.id)),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Reset`)}),(0,L.jsx)($,{children:s(`Back to the app's built-in font for every role.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(lg,{onClick:()=>void G({fonts:{}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`time`),children:[(0,L.jsx)(Vm,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,L.jsx)(Km,{children:(0,L.jsxs)(qm,{children:[(0,L.jsxs)(Jm,{children:[(0,L.jsx)(Q,{children:s(`Format`)}),(0,L.jsx)($,{children:s(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,L.jsx)(ng,{children:Cm.map(e=>(0,L.jsx)(rg,{$active:(h?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(h?.timeFormat??`24`)===`custom`&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(ig,{"aria-label":s(`Pattern`),onBlur:Xt,onChange:e=>Ne(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Xt()):e.key===`Escape`&&Ne(null)},spellCheck:!1,value:Me??h?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,L.jsx)($,{children:s(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,L.jsxs)(ag,{children:[(0,L.jsx)(`span`,{children:s(`Preview`)}),(0,L.jsx)(`code`,{children:p(wm,h?.timeFormat,Me??h?.timeFormatPattern)})]})]})})]}),(0,L.jsxs)(Wm,{ref:Mt(`updates`),children:[(0,L.jsx)(Vm,{note:`The running build and the newest one published.`,title:`Updates`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Current version`)}),(0,L.jsx)(bh,{children:e?`v${e.version}`:`—`})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Latest version`)}),(0,L.jsx)(bh,{children:Be?`v${Be.latest}`:`—`})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Check for updates`)}),(0,L.jsx)($,{children:Be&&!Be.available?s(`You are on the latest version.`):s(`Reads the version file the release workflow publishes.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(lg,{disabled:He,onClick:()=>void J(),type:`button`,children:s(He?`Checking…`:`Check now`)})})]}),Be?.available&&(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Version {version} is available.`,{version:Be.latest})}),(0,L.jsx)($,{children:s(`Download the new build from the releases page.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(lg,{onClick:()=>void ot(xm),type:`button`,children:s(`Open release page`)})})]}),Ge&&(0,L.jsx)(X,{children:(0,L.jsx)(yh,{children:s(`Could not check for updates.`)})})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`colors`),children:[(0,L.jsx)(Vm,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(qm,{children:[(0,L.jsxs)(Jm,{children:[(0,L.jsx)(Q,{children:s(`Presets`)}),(0,L.jsx)($,{children:s(`One click changes the accent and the highlight together.`)})]}),(0,L.jsxs)(Ym,{children:[Ul.map(e=>(0,L.jsxs)(Xm,{$on:K.toLowerCase()===e.accent&&Qt.toLowerCase()===e.secondary,onClick:()=>$t(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,L.jsxs)(rh,{children:[(0,L.jsx)(`i`,{style:{background:e.accent}}),(0,L.jsx)(`i`,{style:{background:e.secondary}})]}),(0,L.jsx)(Zm,{children:s(e.name)})]},e.name)),Ot.map((e,t)=>(0,L.jsxs)(Qm,{children:[(0,L.jsxs)(Xm,{$on:K.toLowerCase()===e.accent.toLowerCase()&&Qt.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>$t(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,L.jsxs)(rh,{children:[(0,L.jsx)(`i`,{style:{background:e.accent}}),(0,L.jsx)(`i`,{style:{background:e.secondary}})]}),(0,L.jsx)(Zm,{children:e.name})]}),(0,L.jsx)($m,{onClick:()=>void nn(t),title:s(`Remove preset`),type:`button`,children:(0,L.jsx)(pi,{size:9})})]},`${e.name}-${t}`)),Re?(0,L.jsxs)(th,{children:[(0,L.jsxs)(rh,{children:[(0,L.jsx)(`i`,{style:{background:Re.accent}}),(0,L.jsx)(`i`,{style:{background:Re.secondary}})]}),(0,L.jsx)(nh,{autoFocus:!0,maxLength:24,onChange:e=>ze({...Re,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),tn()):e.key===`Escape`&&(e.preventDefault(),ze(null))},placeholder:s(`Preset name`),spellCheck:!1,value:Re.name}),(0,L.jsx)(Ch,{onClick:()=>void tn(),type:`button`,children:s(`Save`)}),(0,L.jsx)(Ch,{onClick:()=>ze(null),type:`button`,children:s(`Cancel`)})]}):(0,L.jsxs)(eh,{disabled:!h,onClick:()=>ze({name:``,accent:K,secondary:Qt}),title:s(`Save the current colours as a preset`),type:`button`,children:[(0,L.jsx)(ti,{size:12}),s(`Add preset`)]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Accent color`)}),(0,L.jsx)($,{children:s(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Bm,{colors:Pe.accent,current:K,onApply:e=>q(`accent`,e)}),(0,L.jsx)(wh,{"aria-label":s(`Accent color`),disabled:!h,onBlur:()=>rn(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>et({role:`accent`,color:K}),type:`color`,value:K}),(0,L.jsx)(Th,{children:K.toUpperCase()})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Secondary color`)}),(0,L.jsx)($,{children:s(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Bm,{colors:Pe.secondary,current:Qt,onApply:e=>q(`secondary`,e)}),(0,L.jsx)(wh,{"aria-label":s(`Secondary color`),disabled:!h,onBlur:()=>rn(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>et({role:`secondary`,color:Qt}),type:`color`,value:Qt}),(0,L.jsx)(Th,{children:Qt.toUpperCase()})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Reset colors`)}),(0,L.jsx)($,{children:s(`Returns the interface to the default blue and indigo theme.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(Ch,{disabled:!h,onClick:()=>{Zt(`accent`,K),Zt(`secondary`,Qt),G({accentColor:null,secondaryColor:null})},type:`button`,children:s(`Reset`)})})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`background`),children:[(0,L.jsx)(Vm,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(qm,{children:[(0,L.jsxs)(Jm,{children:[(0,L.jsx)(Q,{children:s(`Wallpaper`)}),(0,L.jsx)($,{children:s(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,L.jsx)(Hh,{children:(0,L.jsx)(Uh,{$active:!h?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:s(`None`),type:`button`,children:(0,L.jsx)(Jh,{children:s(`None`)})})}),(0,L.jsxs)(zh,{children:[Kl.map(e=>(0,L.jsxs)(Bh,{children:[(0,L.jsx)(Vh,{children:s(e.name)}),(0,L.jsx)(Hh,{children:e.variants.map(t=>(0,L.jsx)(Uh,{$active:h?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,L.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,L.jsxs)(Bh,{children:[(0,L.jsx)(Vh,{children:s(`Motion`)}),(0,L.jsx)(Hh,{children:Gl.map(e=>(0,L.jsxs)(Uh,{$active:h?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,L.jsx)(`img`,{alt:``,src:e.poster}),(0,L.jsx)(Kh,{children:(0,L.jsx)(vi,{size:11})})]},e.id))})]}),(0,L.jsxs)(Bh,{children:[(0,L.jsx)(Vh,{children:s(`Custom`)}),(0,L.jsxs)(Hh,{children:[(h?.backgroundCustom??[]).map(e=>(0,L.jsx)(Lm,{active:h?.backgroundSource===`file:${e}`||h?.backgroundSource===`url:${e}`||h?.backgroundSource===e,onRemove:()=>It(e),onSelect:()=>void G({backgroundSource:w(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,L.jsxs)(qh,{onClick:()=>void Pt([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,L.jsx)(ti,{size:12}),s(`Image…`)]}),(0,L.jsxs)(qh,{onClick:()=>void Pt([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,L.jsx)(ti,{size:12}),s(`Video…`)]})]})]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Image or video URL`)}),(0,L.jsx)($,{children:s(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Ah,{onChange:e=>wt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ft()},placeholder:`https://…`,value:Ct}),(0,L.jsx)(Ch,{disabled:!w(Ct),onClick:()=>void Ft(),type:`button`,children:s(`Add`)})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Blur`)}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Rh,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:h?.backgroundBlur??0}),(0,L.jsxs)(bh,{children:[h?.backgroundBlur??0,`px`]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Saturation`)}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Rh,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:h?.backgroundSaturation??100}),(0,L.jsxs)(bh,{children:[h?.backgroundSaturation??100,`%`]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Brightness`)}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Rh,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:h?.backgroundBrightness??100}),(0,L.jsxs)(bh,{children:[h?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`safety`),children:[(0,L.jsx)(Vm,{note:`Deleting a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(qm,{children:[(0,L.jsxs)(Jm,{children:[(0,L.jsx)(Q,{children:s(`Protected folders`)}),(0,L.jsx)($,{children:s(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,L.jsx)(Yh,{children:(h?.protectedPaths??[]).map(e=>(0,L.jsxs)(Xh,{children:[(0,L.jsx)(Zh,{"aria-label":s(`Protected path`),onBlur:Bt,onChange:t=>Te({from:e,value:t.target.value}),onFocus:()=>Te({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Bt()):e.key===`Escape`&&Te(null)},spellCheck:!1,value:we?.from===e?we.value:e}),(0,L.jsx)(Qh,{onClick:()=>Vt(e),title:s(`Remove`),type:`button`,children:(0,L.jsx)(pi,{size:10})})]},e))}),(0,L.jsxs)(eg,{children:[(0,L.jsx)(tg,{"aria-label":s(`New protected rule`),onChange:e=>ke(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Rt())},placeholder:`*.log`,spellCheck:!1,value:Oe}),(0,L.jsx)(Ch,{onClick:Rt,type:`button`,children:s(`Add the rule`)})]}),(0,L.jsxs)($h,{children:[(0,L.jsx)(Ch,{onClick:()=>void Ht(),type:`button`,children:s(`Restore defaults`)}),(0,L.jsx)(Ch,{onClick:()=>void Lt(),type:`button`,children:s(`Add folder…`)})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Confirmation delay`)}),(0,L.jsx)($,{children:s(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Rh,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:h?.deleteDelaySeconds??5}),(0,L.jsxs)(bh,{children:[h?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`tags`),children:[(0,L.jsx)(Vm,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(vh,{children:[(0,L.jsx)(xh,{"aria-label":s(`Color of the new tag`),onChange:e=>U(e.target.value),type:`color`,value:Ce}),(0,L.jsx)(Ah,{onChange:e=>Se(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),an())},placeholder:s(`New tag`),spellCheck:!1,value:xe})]}),(0,L.jsx)($,{children:s(`Add a tag here; it is available in every folder.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(Ch,{disabled:ge||xe.trim().length===0,onClick:()=>void an(),type:`button`,children:s(`Add`)})})]}),ye&&(0,L.jsx)(X,{children:(0,L.jsx)(yh,{children:ye})}),fe.length===0&&(0,L.jsx)(X,{children:(0,L.jsx)($,{children:s(`No tags yet. Add one below; it is available in every folder.`)})}),fe.map(e=>(0,L.jsx)(X,{children:me?.name===e.name?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(vh,{children:[(0,L.jsx)(xh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void on(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,L.jsx)(Sh,{autoFocus:!0,disabled:ge,onChange:t=>he({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),cn()):e.key===`Escape`&&(e.preventDefault(),he(null))},value:me.value})]}),(0,L.jsx)($,{children:s(`Press Enter to save, Escape to cancel.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Ch,{disabled:ge,onClick:()=>void cn(),type:`button`,children:s(`Save`)}),(0,L.jsx)(Ch,{disabled:ge,onClick:()=>he(null),type:`button`,children:s(`Cancel`)})]})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(vh,{children:[(0,L.jsx)(xh,{"aria-label":s(`Color of {tag}`,{tag:e.name}),onChange:t=>void on(e.name,t.target.value),title:s(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,L.jsx)(Q,{children:e.name})]}),(0,L.jsx)($,{children:a(s,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Ch,{disabled:ge,onClick:()=>he({name:e.name,value:e.name}),type:`button`,children:s(`Edit`)}),(0,L.jsxs)(Eh,{disabled:ge,onClick:()=>void sn(e.name),type:`button`,children:[(0,L.jsx)(di,{size:13}),s(`Remove`)]})]})]})},e.name))]})]}),(0,L.jsxs)(Wm,{ref:Mt(`files-view`),children:[(0,L.jsx)(Vm,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Default view`)}),(0,L.jsx)($,{children:s(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsxs)(Ih,{children:[(0,L.jsx)(Lh,{$on:Dt.mode===`list`,onClick:()=>void G({defaultView:{...Dt,mode:`list`}}),type:`button`,children:s(`List`)}),(0,L.jsx)(Lh,{$on:Dt.mode===`grid`,onClick:()=>void G({defaultView:{...Dt,mode:`grid`}}),type:`button`,children:s(`Grid`)})]})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`List icon size`)}),(0,L.jsx)($,{children:s(`The icon in the list rows.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Rh,{max:48,min:16,onChange:e=>void G({defaultView:{...Dt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Dt.iconSize}),(0,L.jsxs)(bh,{children:[Dt.iconSize,`px`]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Grid size`)}),(0,L.jsx)($,{children:s(`The height of a grid tile; the icon inside follows it.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Rh,{max:260,min:100,onChange:e=>void G({defaultView:{...Dt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Dt.gridSize}),(0,L.jsxs)(bh,{children:[Dt.gridSize,`px`]})]})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(vh,{children:[(0,L.jsx)(Q,{children:s(`Selection checkboxes`)}),(0,L.jsx)(em,{})]}),(0,L.jsx)($,{children:s(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,L.jsx)(Oh,{$on:h?.showCheckboxes??!0,disabled:!h,onClick:()=>void G({showCheckboxes:!(h?.showCheckboxes??!0)}),type:`button`,children:(0,L.jsx)(kh,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(vh,{children:[(0,L.jsx)(Q,{children:s(`Open with a single click`)}),(0,L.jsx)(em,{})]}),(0,L.jsx)($,{children:s(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,L.jsx)(Oh,{$on:h?.openOnSingleClick??!1,disabled:!h,onClick:()=>void G({openOnSingleClick:!(h?.openOnSingleClick??!1)}),type:`button`,children:(0,L.jsx)(kh,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(vh,{children:[(0,L.jsx)(Q,{children:s(`Confirm before deleting`)}),(0,L.jsx)(em,{})]}),(0,L.jsx)($,{children:s(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,L.jsx)(Oh,{$on:h?.confirmDelete??!1,disabled:!h,onClick:()=>void G({confirmDelete:!(h?.confirmDelete??!1)}),type:`button`,children:(0,L.jsx)(kh,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(vh,{children:[(0,L.jsx)(Q,{children:s(`Play audio in video previews`)}),(0,L.jsx)(em,{})]}),(0,L.jsx)($,{children:s(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,L.jsx)(Oh,{$on:h?.previewVideoAudio??!1,disabled:!h,onClick:()=>void G({previewVideoAudio:!(h?.previewVideoAudio??!1)}),type:`button`,children:(0,L.jsx)(kh,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(vh,{children:[(0,L.jsx)(Q,{children:s(`Autoplay video previews`)}),(0,L.jsx)(em,{})]}),(0,L.jsx)($,{children:s(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,L.jsx)(Oh,{$on:h?.previewVideoAutoplay??!1,disabled:!h,onClick:()=>void G({previewVideoAutoplay:!(h?.previewVideoAutoplay??!1)}),type:`button`,children:(0,L.jsx)(kh,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsxs)(vh,{children:[(0,L.jsx)(Q,{children:s(`Preview panel under the list`)}),(0,L.jsx)(em,{})]}),(0,L.jsx)($,{children:s(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,L.jsx)(Oh,{$on:Dt.showImages??!0,onClick:()=>void G({defaultView:{...Dt,showImages:!(Dt.showImages??!0)}}),type:`button`,children:(0,L.jsx)(kh,{})})]}),(0,L.jsx)(X,{children:(0,L.jsxs)(Z,{children:[(0,L.jsxs)(vh,{children:[(0,L.jsx)(Q,{children:s(`Columns`)}),(0,L.jsx)(em,{})]}),(0,L.jsx)($,{children:s(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,L.jsx)(X,{children:(0,L.jsxs)(og,{children:[xc.map(e=>(0,L.jsxs)(sg,{children:[(0,L.jsx)(`input`,{checked:(Dt.columns??[]).includes(e.id),onChange:()=>void ln(e.id),type:`checkbox`}),(0,L.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,L.jsxs)(sg,{children:[(0,L.jsx)(`input`,{checked:(Dt.columns??[]).includes(`linkTarget`),onChange:()=>void ln(`linkTarget`),type:`checkbox`}),(0,L.jsx)(`span`,{children:s(`Link target after the name`)})]})]})})]}),(0,L.jsxs)(pg,{children:[s(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,L.jsx)(em,{}),` `,s(`Anything marked as global always applies to every folder.`)]})]}),(0,L.jsxs)(Wm,{ref:Mt(`shortcuts`),children:[(0,L.jsx)(Vm,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,L.jsxs)(Km,{children:[bm.map(({id:e,label:t,note:n})=>(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(t)}),(0,L.jsx)($,{children:s(n)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(cg,{$listening:le===e,onClick:()=>ue(e),type:`button`,children:le===e?s(`Press a key…`):Wt(mn[e])})})]},e)),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Reset`)}),(0,L.jsx)($,{children:s(`Back to the default combination for every action.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(lg,{onClick:()=>void G({shortcuts:{...zt}}),type:`button`,children:s(`Reset`)})})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`memory`),children:[(0,L.jsx)(Vm,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(ph,{children:[(0,L.jsxs)(mh,{children:[(0,L.jsx)(Q,{children:s(`Process memory`)}),(0,L.jsx)(bh,{children:A?`${d(A.private)} · ${fh(A.private,A.available)}`:`—`})]}),(0,L.jsx)(hh,{children:(0,L.jsx)(gh,{$ratio:A?A.private/Math.max(A.available,1):0,$tone:t(A?A.private/Math.max(A.available,1):0)})}),(0,L.jsx)($,{children:A?s(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:d(A.available),resident:d(A.workingSet)}):s(`Reading the current usage…`)})]}),(0,L.jsxs)(ph,{children:[(0,L.jsxs)(mh,{children:[(0,L.jsx)(Q,{children:s(`Managed heap`)}),(0,L.jsx)(bh,{children:A?`${d(A.managed)} · ${fh(A.managed,A.private)}`:`—`})]}),(0,L.jsx)(hh,{children:(0,L.jsx)(gh,{$ratio:A?A.managed/Math.max(A.private,1):0,$tone:`var(--accent-secondary)`})}),(0,L.jsx)($,{children:s(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,L.jsxs)(ph,{children:[(0,L.jsxs)(mh,{children:[(0,L.jsx)(Q,{children:s(`Native and runtime`)}),(0,L.jsx)(bh,{children:A?`${d(Math.max(0,A.private-A.managed))} · ${fh(Math.max(0,A.private-A.managed),A.private)}`:`—`})]}),(0,L.jsx)(hh,{children:(0,L.jsx)(gh,{$ratio:A?Math.max(0,A.private-A.managed)/Math.max(A.private,1):0,$tone:`var(--accent-primary)`})}),(0,L.jsx)($,{children:s(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Free memory`)}),(0,L.jsx)($,{children:s(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(lg,{onClick:()=>void ct().then(ne),type:`button`,children:s(`Trim now`)})})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`overview`),children:[(0,L.jsx)(Vm,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,L.jsx)(Km,{children:(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Recent items`)}),(0,L.jsx)($,{children:s(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(Ah,{max:50,min:0,onChange:e=>void hn(Number(e.target.value)),type:`number`,value:h?.recentLimit??10})})]})})]}),(0,L.jsxs)(Wm,{ref:Mt(`gallery`),children:[(0,L.jsx)(Vm,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,L.jsxs)(Km,{children:[(h?.galleryRoots??[]).map(e=>(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:_(e)}),(0,L.jsx)($,{children:e})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(ug,{onClick:()=>void bn((h?.galleryRoots??[]).filter(t=>t!==e)),title:s(`Stop scanning this folder`),type:`button`,children:(0,L.jsx)(pi,{size:12})})})]},e)),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Scan folders`)}),(0,L.jsx)($,{children:(h?.galleryRoots??[]).length===0?s(`Nothing added yet, so the gallery reads the Pictures folder.`):s(`Only these folders are scanned, three levels deep.`)})]}),(0,L.jsx)(_h,{children:(0,L.jsx)(lg,{onClick:()=>void xn(),type:`button`,children:s(`Choose folder…`)})})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`icons`),children:[(0,L.jsx)(Vm,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Use system file icons`)}),(0,L.jsx)($,{children:s(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,L.jsx)(Oh,{$on:h?.systemIcons??!1,disabled:!h,onClick:()=>void G({systemIcons:!h?.systemIcons}),type:`button`,children:(0,L.jsx)(kh,{})})]}),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Use custom folder icons`)}),(0,L.jsx)($,{children:s(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,L.jsx)(Oh,{$on:h?.customFolderIcons??!1,disabled:!h,onClick:()=>void G({customFolderIcons:!h?.customFolderIcons}),type:`button`,children:(0,L.jsx)(kh,{})})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`extension-icons`),children:[(0,L.jsx)(Vm,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,L.jsxs)(Km,{children:[Object.entries(h?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:e}),(0,L.jsx)($,{children:Pm(s,t)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Fm,{source:t}),(0,L.jsx)(ug,{onClick:()=>void pn(e,null),title:s(`Remove this rule`),type:`button`,children:(0,L.jsx)(pi,{size:12})})]})]},e)),(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Add a rule`)}),(0,L.jsx)($,{children:s(`Extension and the icon to draw for it.`)})]}),(0,L.jsxs)(_h,{children:[(0,L.jsx)(Ah,{onChange:e=>S(e.target.value),placeholder:`.psd`,spellCheck:!1,value:x}),(0,L.jsxs)(Fh,{children:[(0,L.jsx)(ug,{onClick:()=>E(e=>!e),title:s(`Choose the icon`),type:`button`,children:(0,L.jsx)(Fm,{source:ee})}),T&&(0,L.jsx)(nd,{allowDefault:!1,onClose:()=>E(!1),onPick:e=>{C(e??`file`),E(!1)},value:ee})]}),(0,L.jsx)(ug,{onClick:()=>void Sn(),title:s(`Add the rule`),type:`button`,children:(0,L.jsx)(ti,{size:13})})]})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`folder-icons`),children:[(0,L.jsx)(Vm,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Give a folder its own icon`)}),(0,L.jsx)($,{children:s(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,L.jsxs)(_h,{children:[v&&(0,L.jsx)(Im,{src:v.icon}),(0,L.jsx)(lg,{disabled:D,onClick:()=>void Cn(),type:`button`,children:s(D?`Choosing…`:`Choose folder and icon…`)})]})]}),v&&(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:_(v.folder)}),(0,L.jsx)($,{children:v.folder})]}),(0,L.jsx)(_h,{children:(0,L.jsxs)(fg,{children:[(0,L.jsx)(fi,{size:11}),` `,s(`Saved`)]})})]})]})]}),(0,L.jsxs)(Wm,{ref:Mt(`folder-index`),children:[(0,L.jsx)(Vm,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(X,{children:[(0,L.jsxs)(Z,{children:[(0,L.jsx)(Q,{children:s(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,L.jsx)($,{children:s(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,L.jsx)(Oh,{$on:h?.writeDirectoryIndex??!0,disabled:!h,onClick:()=>void G({writeDirectoryIndex:!h?.writeDirectoryIndex}),type:`button`,children:(0,L.jsx)(kh,{})})]}),(0,L.jsxs)(qm,{children:[(0,L.jsxs)(Jm,{children:[(0,L.jsx)(Q,{children:s(`Directory index blacklist`)}),(0,L.jsx)($,{children:s(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,L.jsx)(Yh,{children:(h?.directoryIndexBlacklist??[]).map(e=>(0,L.jsxs)(Xh,{children:[(0,L.jsx)(Zh,{"aria-label":s(`Directory index blacklist rule`),onBlur:Gt,onChange:t=>De({from:e,value:t.target.value}),onFocus:()=>De({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Gt()):e.key===`Escape`&&De(null)},spellCheck:!1,value:Ee?.from===e?Ee.value:e}),(0,L.jsx)(Qh,{onClick:()=>Jt(e),title:s(`Remove`),type:`button`,children:(0,L.jsx)(pi,{size:10})})]},e))}),(0,L.jsxs)(eg,{children:[(0,L.jsx)(tg,{"aria-label":s(`Directory index blacklist rule`),onChange:e=>je(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Kt())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Ae}),(0,L.jsx)(Ch,{onClick:Kt,type:`button`,children:s(`Add the rule`)})]}),(0,L.jsxs)($h,{children:[(0,L.jsx)(Ch,{onClick:Yt,type:`button`,children:s(`Restore defaults`)}),(0,L.jsx)(Ch,{onClick:()=>void qt(),type:`button`,children:s(`Add folder…`)})]})]})]}),!(h?.writeDirectoryIndex??!0)&&(0,L.jsx)(mg,{children:Nm(s,e?.platform)})]}),(0,L.jsxs)(Wm,{ref:Mt(`indexing`),children:[(0,L.jsx)(Vm,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,L.jsx)(Mm,{})]}),(0,L.jsxs)(Wm,{ref:Mt(`files`),children:[(0,L.jsx)(Vm,{note:`What the listings include.`,title:`Files`}),(0,L.jsxs)(Km,{children:[(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Hidden items`)}),(0,L.jsx)(bh,{children:jm(s,u?.showHidden)})]}),(0,L.jsxs)(X,{children:[(0,L.jsx)(Q,{children:s(`Protected operating system files`)}),(0,L.jsx)(bh,{children:jm(s,u?.showSystem)})]})]}),(0,L.jsx)(pg,{children:s(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,L.jsxs)(sh,{"aria-label":s(`Settings sections`),children:[(0,L.jsx)(ch,{children:s(`Sections`)}),(0,L.jsx)(lh,{children:Dm.map(({id:e,label:t})=>(0,L.jsx)(uh,{$active:nt===e,onClick:()=>Nt(e),type:`button`,children:(0,L.jsx)(`span`,{children:s(t)})},e))}),(0,L.jsx)(dh,{children:s(`Changes are saved as you make them.`)})]})]})}function jm(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function Mm(){let e=z(),[t,n]=(0,O.useState)(null);return(0,O.useEffect)(()=>{let e=!0,t=()=>Ge().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,L.jsx)(mg,{children:e(`No indexing tasks are running.`)}):(0,L.jsxs)(Km,{children:[(0,L.jsx)(X,{children:(0,L.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,L.jsx)(X,{children:(0,L.jsx)(bh,{title:e,children:e})},e))]}):(0,L.jsx)(mg,{children:e(`Index task information is unavailable.`)})}function Nm(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function Pm(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function Fm({source:e}){let t=sn(e.startsWith(`file:`)?e.slice(5):null);return(0,L.jsx)(dg,{children:t?(0,L.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,L.jsx)(Ns,{name:e,size:16})})}function Im({src:e}){let t=sn(e);return(0,L.jsx)(dg,{children:t&&(0,L.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Lm({path:e,active:t,onSelect:n,onRemove:r}){let i=z(),a=w(e),o=fn(a?null:e),s=a?e:o,c=uu(e.split(/[?#]/)[0]);return(0,L.jsxs)(Wh,{children:[(0,L.jsxs)(Uh,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,L.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,L.jsx)(`img`,{alt:``,src:s})),c&&(0,L.jsx)(Kh,{children:(0,L.jsx)(vi,{size:11})})]}),(0,L.jsx)(Gh,{onClick:r,title:i(`Remove`),type:`button`,children:(0,L.jsx)(pi,{size:9})})]})}function Rm({value:e,options:t,onChange:n,disabled:r}){let i=z(),[a,o]=(0,O.useState)(null),s=(0,O.useRef)(null);return(0,O.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(jh,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,L.jsx)(`span`,{children:zm(i,e)}),(0,L.jsx)(Mh,{children:(0,L.jsx)(ii,{size:11})})]}),a&&(0,Sa.createPortal)((0,L.jsx)(Nh,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,L.jsxs)(Ph,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,L.jsx)(`span`,{children:zm(i,t)}),t===e&&(0,L.jsx)(fi,{size:11})]},t))}),document.body)]})}function zm(e,t){return t===Tm?e(`System default`):Em[t]??t}function Bm({colors:e,current:t,onApply:n}){let r=z();if(e.length===0)return null;let[i,...a]=e;return(0,L.jsxs)(ih,{children:[(0,L.jsxs)(oh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,L.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,L.jsx)(ah,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,L.jsx)(fi,{size:9})},e))]})}function Vm({title:e,note:t,global:n=!1}){let r=z();return(0,L.jsxs)(Gm,{children:[(0,L.jsxs)(`h2`,{children:[r(e),n&&(0,L.jsx)(em,{})]}),(0,L.jsx)(`p`,{children:r(t)})]})}var Hm=i.div`
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
`,hg=150,gg=2500,_g=3,vg=600;function yg({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:o,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:f,onExtractArchive:p,showDetails:m=!0,videoAudio:h=!1,videoAutoplay:g=!1}){let _=z(),y=gc(`gallery`),[b,x]=(0,O.useState)([]),[S,ee]=(0,O.useState)(0),[te,C]=(0,O.useState)(!0),[w,T]=(0,O.useState)(null),[E,D]=(0,O.useState)(!1),[k,A]=(0,O.useState)([]),[ne,j]=(0,O.useState)(()=>{let e=Pn(`yafm.preview.width`,320);return e>=220?e:320}),M=(0,O.useRef)([]),N=(0,O.useRef)(0),re=(0,O.useRef)(!1),ie=(0,O.useRef)(!0),P=(0,O.useRef)(0),F=(0,O.useRef)(null),ae=(0,O.useRef)(0),I=(0,O.useCallback)(async e=>{let t=++P.current;C(!0),ie.current=!0,T(null);try{let n=await Le(0,hg,e);if(t!==P.current)return;M.current=n.entries,N.current=n.total,x(n.entries),ee(n.total)}catch(e){t===P.current&&T(e instanceof Error?e.message:String(e))}finally{t===P.current&&(ie.current=!1,C(!1))}},[]);(0,O.useEffect)(()=>{I(!1)},[I]);let oe=(0,O.useCallback)(async()=>{if(ie.current||re.current||M.current.length>=N.current)return;let e=P.current;re.current=!0;try{let t=M.current,n=N.current;for(let r=0;r<_g&&t.length<n;r++){let r=await Le(t.length,hg,!1);if(e!==P.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<hg)break}if(e!==P.current)return;M.current=t,N.current=n,(0,O.startTransition)(()=>{x(t),ee(n)})}catch{}finally{re.current=!1}},[]),se=(0,O.useCallback)(e=>{ae.current||=window.requestAnimationFrame(()=>{ae.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<gg&&oe()})},[oe]);(0,O.useEffect)(()=>{let e=F.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&oe()},{root:e.parentElement,rootMargin:`${gg}px 0px`});return t.observe(e),()=>t.disconnect()},[oe]),(0,O.useEffect)(()=>{if(b.length>=S)return;let e=window.setTimeout(()=>{let e=F.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<gg&&oe()},200);return()=>window.clearTimeout(e)},[b.length,S,oe]);let ce=(0,O.useMemo)(()=>({path:``,parent:null,entries:b.map(bg),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[b]),R=(0,O.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),B=(0,O.useCallback)(e=>{c?c(e):ye(e)},[c]),V=(0,O.useCallback)(e=>{let t=xg(e.modified);return{id:t,label:t}},[]),le=()=>{D(!0),I(!0).finally(()=>D(!1))},ue=b.length<S,de=(0,O.useMemo)(()=>!o?.open||o.query.trim().length===0?[]:b.filter(e=>Cn(e.name,o)||Cn(e.path,o)),[b,o?.open,o?.query,o?.matchCase,o?.regex]),H=(0,O.useMemo)(()=>o?.open?{query:o.query,matchCase:o.matchCase,regex:o.regex,mode:o.mode,currentPath:de[Math.min(o.index,Math.max(0,de.length-1))]?.path??null}:hn,[o?.open,o?.query,o?.matchCase,o?.regex,o?.mode,o?.index,de]);(0,O.useEffect)(()=>{s?.(de.length)},[de.length,s]);let fe=(0,O.useCallback)(e=>{A(e),l?.(e)},[l]),pe=e=>{j(e),Fn(`yafm.preview.width`,e)},me=k.length>0?b.find(e=>e.path===k[0])??null:null,he=me?.name.includes(`.`)?me.name.slice(me.name.lastIndexOf(`.`)+1).toUpperCase():`—`,ge=me&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(me.name)?_(`Video`):_(`Picture`),_e=me?me.path.slice(0,Math.max(me.path.lastIndexOf(`\\`),me.path.lastIndexOf(`/`))):``,ve=me?{name:me.name,path:me.path,isDirectory:!1,size:me.size,modified:me.modified,fields:[{label:_(`Type`),value:ge},{label:_(`Extension`),value:he},{label:_(`Location`),value:_e},{label:_(`Full path`),value:me.path},{label:_(`Size`),value:d(me.size)},{label:_(`Modified`),value:v(me.modified)},{label:_(`Created`),value:`—`}]}:null;return(0,L.jsxs)(Sg,{children:[(0,L.jsxs)(Tg,{children:[(0,L.jsxs)(Dg,{children:[(0,L.jsx)(`span`,{children:_(`Gallery`)}),(0,L.jsx)(Og,{children:te?_(`scanning…`):_(`{shown} of {total} pictures`,{shown:b.length,total:S})})]}),(0,L.jsxs)(Eg,{children:[(0,L.jsx)(kg,{onClick:le,title:_(`Scan the folders again`),type:`button`,children:(0,L.jsx)(Ag,{$spinning:E,children:(0,L.jsx)(ei,{size:14})})}),y.available&&(0,L.jsx)(kg,{onClick:e=>y.open(e.clientX,e.clientY),title:_(`Selection menu`),type:`button`,children:(0,L.jsx)(ta,{size:14})})]})]}),w&&(0,L.jsx)(Mg,{children:w}),!w&&!te&&S===0&&(0,L.jsx)(Mg,{children:_(`No pictures found.`)}),!w&&(te||S>0)&&(0,L.jsxs)(Cg,{children:[(0,L.jsx)(wg,{children:(0,L.jsx)(wc,{confirmDelete:n,find:H,listing:te&&b.length===0?null:ce,loading:te,error:null,view:R,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:fe,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:B,onOpenFile:B,onRefresh:le,onAddToTray:u,onAddFavorite:f,onExtractArchive:p,groupOf:V,onGridScroll:se,gridFooter:(0,L.jsx)(jg,{$space:ue?vg:1,ref:F}),allowBackgroundMenu:!1})}),m&&(0,L.jsx)(Ro,{emptyNote:_(`Nothing selected.`),info:ve,onWidth:pe,selectionNote:k.length>1?a(_,k.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:h,videoAutoplay:g,width:ne})]})]})}function bg(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function xg(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(b(),{weekday:`long`}):t.toLocaleDateString(b(),{year:`numeric`,month:`long`,day:`numeric`})}var Sg=i.div`
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
`;function Ng({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:f=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,O.useState)([]),v=z(),[y,b]=(0,O.useState)(null),x=jn();(0,O.useEffect)(()=>{qe().then(e=>{b(e),g(ps(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]);let S=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>zg(e.path,t));return{name:y?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??y?.placeIcons?.[t]??null}}),ee=o===`files`;return(0,L.jsxs)(Bg,{children:[(0,L.jsxs)(Vg,{children:[!f.includes(`home`)&&(0,L.jsxs)(Kg,{$active:o===`home`,onClick:e=>m(`home`,Ht(e)),title:v(`Overview`),type:`button`,children:[(0,L.jsx)(ki,{}),(0,L.jsx)(Jg,{children:v(`Overview`)})]}),!f.includes(`recycle`)&&(0,L.jsxs)(Kg,{$active:o===`recycle`,onClick:e=>m(`recycle`,Ht(e)),title:v(`Recycle Bin`),type:`button`,children:[(0,L.jsx)(di,{}),(0,L.jsx)(Jg,{children:v(`Recycle Bin`)})]}),!f.includes(`gallery`)&&(0,L.jsxs)(Kg,{$active:o===`gallery`,onClick:e=>m(`gallery`,Ht(e)),title:v(`Gallery`),type:`button`,children:[(0,L.jsx)(_i,{}),(0,L.jsx)(Jg,{children:v(`Gallery`)})]})]}),h.map(e=>(0,L.jsxs)(Ug,{children:[(0,L.jsxs)(Kg,{as:`div`,$active:!1,children:[(0,L.jsx)(qg,{children:(0,L.jsx)(hs,{panel:e,size:16})}),(0,L.jsx)(Jg,{children:v(e.title)})]}),(0,L.jsx)(Wg,{children:(0,L.jsxs)(Gg,{children:[e.kind===`quick`&&S(e).map(e=>(0,L.jsxs)(Kg,{$active:ee&&zg(a,e.path),onClick:t=>p(e.path,Ht(t)),title:e.path,type:`button`,children:[(0,L.jsx)(gs,{place:e}),(0,L.jsx)(Jg,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let t=Mn(x,e.path);return(0,L.jsxs)(Kg,{$active:ee&&zg(a,e.path),onClick:t=>e.isDirectory?p(e.path,Ht(t)):void ye(e.path),title:e.path,type:`button`,children:[t&&x.useIcons?(0,L.jsx)(gs,{place:t}):(0,L.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,L.jsx)(Jg,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,L.jsx)(Ig,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,L.jsxs)(Kg,{$active:ee&&zg(a,e.name),onClick:t=>p(e.name,Ht(t)),title:e.name,type:`button`,children:[(0,L.jsx)(Zr,{}),(0,L.jsxs)(Jg,{children:[u(e),(0,L.jsxs)(Yg,{children:[d(e.freeSpace),` free`]}),(0,L.jsx)(Xg,{children:(0,L.jsx)(Zg,{$used:n,$tone:t(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,L.jsx)(Lg,{onNavigate:p,path:e.path||s})]})})]},e.id)),!f.includes(`settings`)&&(0,L.jsx)(Hg,{children:(0,L.jsxs)(Kg,{$active:o===`settings`,onClick:e=>m(`settings`,Ht(e)),title:v(`Settings`),type:`button`,children:[(0,L.jsx)(ai,{}),(0,L.jsx)(Jg,{children:v(`Settings`)})]})})]})}var Pg=10,Fg=40;function Ig({historyVersion:e=0,onNavigate:t}){let n=z(),[r,i]=(0,O.useState)(null),o=jn();return(0,O.useEffect)(()=>{ze().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Mn(o,e.path);return(0,L.jsxs)(Kg,{$active:!1,onClick:n=>t(e.path,Ht(n)),title:a(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&o.useIcons?(0,L.jsx)(gs,{place:r}):(0,L.jsx)(Ps,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,L.jsx)(Jg,{children:r?.name||e.name})]},e.path)})}function Lg({path:e,onNavigate:t}){let[n,r]=(0,O.useState)(null);(0,O.useEffect)(()=>{e&&(r(null),be(e,!1).then(r,()=>r(null)))},[e]),(0,O.useEffect)(()=>{if(e&&I.available)return I.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&zg(n.data.path,e)&&be(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Pg),o=i.filter(e=>!e.isDirectory).slice(0,Fg);return(0,L.jsxs)(L.Fragment,{children:[a.map(e=>(0,L.jsx)(Rg,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,L.jsx)(Rg,{entry:e,onNavigate:t},e.fullPath))]})}function Rg({entry:e,onNavigate:t}){let n=jn(),r=Mn(n,e.fullPath);return(0,L.jsxs)(Kg,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Ht(n)):void ye(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,L.jsx)(gs,{place:r}):(0,L.jsx)(Ps,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,L.jsx)(Jg,{children:r?.name||e.name})]})}function zg(e,t){let n=e=>e.replace(/[\\/]+$/,``).toLowerCase();return n(e)===n(t)}var Bg=i.aside`
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
`;function $g({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=z(),o=(0,O.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,O.useEffect)(()=>{if(!n)return;let e=e=>{o.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,L.jsxs)(t_,{ref:o,children:[(0,L.jsxs)(n_,{$active:n,onClick:()=>r(!n),title:s>0?a(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,L.jsx)(ui,{size:13}),c>0&&(0,L.jsx)(Qg,{children:c>9?`9+`:c})]}),n&&(0,L.jsxs)(r_,{children:[(0,L.jsxs)(i_,{children:[(0,L.jsx)(a_,{children:i(`Status center`)}),(0,L.jsxs)(o_,{children:[(0,L.jsx)(s_,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,L.jsx)(c_,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,L.jsx)(pi,{size:10})})]})]}),e.length===0?(0,L.jsx)(u_,{children:i(`No operations yet.`)}):(0,L.jsx)(l_,{children:e.map(e=>(0,L.jsx)(e_,{task:e},e.id))})]})]})}function e_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,L.jsxs)(d_,{children:[(0,L.jsxs)(f_,{children:[(0,L.jsx)(p_,{$state:e.state,children:e.state===`done`?(0,L.jsx)(fi,{size:10}):e.state===`failed`?(0,L.jsx)(pi,{size:10}):(0,L.jsx)(m_,{})}),(0,L.jsx)(h_,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,L.jsxs)(g_,{children:[d(e.bytesDone),` / `,d(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,L.jsxs)(g_,{children:[e.done,` / `,e.total]})]}),i&&(0,L.jsx)(__,{children:(0,L.jsx)(v_,{$percent:r,$indeterminate:t===0})}),e.error&&(0,L.jsx)(y_,{children:e.error})]})}var t_=i.div`
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
`;async function b_(){return I.available?(await I.request(`fs.history.list`)).entries:[]}async function x_(e){return I.available?(await I.request(`fs.history.undoTo`,{id:e})).ok:!1}function S_(){let e=z(),[t,n]=(0,O.useState)(!1),[r,i]=(0,O.useState)([]),[a,o]=(0,O.useState)(!1),s=(0,O.useRef)(null),c=()=>void b_().then(i,()=>i([]));(0,O.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await x_(e),c()}finally{o(!1)}};return(0,L.jsxs)(T_,{ref:s,children:[(0,L.jsx)(E_,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,L.jsx)(li,{size:14})}),t&&(0,L.jsxs)(D_,{children:[(0,L.jsxs)(O_,{children:[(0,L.jsx)(k_,{children:e(`History`)}),(0,L.jsx)(A_,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,L.jsx)(pi,{size:10})})]}),r.length===0?(0,L.jsx)(z_,{children:e(`No operations yet.`)}):(0,L.jsx)(j_,{children:r.map(t=>(0,L.jsxs)(M_,{children:[(0,L.jsxs)(N_,{children:[(0,L.jsxs)(P_,{children:[(0,L.jsx)(w_,{label:t.label}),C_(e,t.label)]}),(0,L.jsx)(F_,{children:x(t.at)})]}),t.paths.length>0&&(0,L.jsxs)(I_,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,L.jsx)(L_,{children:(0,L.jsx)(R_,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function C_(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function w_({label:e}){return e.startsWith(`Delete`)?(0,L.jsx)(di,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,L.jsx)(Ji,{size:13}):e.startsWith(`Rename`)?(0,L.jsx)(Ai,{size:13}):e.startsWith(`Compress`)?(0,L.jsx)(bi,{size:13}):e.startsWith(`New`)?(0,L.jsx)(ti,{size:13}):(0,L.jsx)(ri,{size:13})}var T_=i.div`
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
`;function B_({currentFolder:e}){let t=z(),[n,r]=(0,O.useState)(!1),[i,a]=(0,O.useState)(null),[o,s]=(0,O.useState)(!1),c=(0,O.useRef)(null);(0,O.useEffect)(()=>{if(!n)return;let e=()=>void od().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{c.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,i),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i)}},[n]),(0,O.useEffect)(()=>{let e=()=>void od().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let l=async e=>{s(!0);try{a(await e())}finally{s(!1)}},u=i?.shares.some(t=>t.path.replace(/[\\/]+$/,``).toLowerCase()===e.replace(/[\\/]+$/,``).toLowerCase())??!1;return(0,L.jsxs)(V_,{ref:c,children:[(0,L.jsxs)(H_,{$active:n,onClick:()=>r(e=>!e),title:t(`Share folders`),type:`button`,children:[(0,L.jsx)(Wi,{size:15}),i&&i.shares.length>0&&(0,L.jsx)(Qg,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,L.jsxs)(U_,{children:[(0,L.jsxs)(W_,{children:[(0,L.jsx)(G_,{children:t(`Share`)}),(0,L.jsx)(K_,{onClick:()=>r(!1),title:t(`Close`),type:`button`,children:(0,L.jsx)(pi,{size:10})})]}),(0,L.jsxs)(q_,{children:[(0,L.jsxs)(J_,{children:[(0,L.jsx)(mi,{size:15}),(0,L.jsxs)(`span`,{children:[(0,L.jsx)(`strong`,{children:i?.deviceName||t(`This device`)}),(0,L.jsx)(Y_,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,L.jsx)(X_,{children:t(`No folders are shared yet.`)}),i?.shares.map(e=>(0,L.jsxs)(Z_,{children:[(0,L.jsxs)(Q_,{children:[(0,L.jsx)($_,{title:e.path,children:e.name}),(0,L.jsx)(tv,{disabled:o,onClick:()=>void l(()=>cd(e.id)),title:t(`Stop sharing`),type:`button`,children:(0,L.jsx)(pi,{size:10})})]}),(0,L.jsx)(ev,{title:e.path,children:e.path}),(0,L.jsxs)(nv,{children:[(0,L.jsxs)(rv,{$active:e.mode===`client`,onClick:()=>void l(()=>ld(e.id,`client`)),title:t(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,L.jsx)(mi,{size:11}),t(`App`)]}),(0,L.jsxs)(rv,{$active:e.mode===`web`,onClick:()=>void l(()=>ld(e.id,`web`)),title:t(`Any device with a browser can open this folder.`),type:`button`,children:[(0,L.jsx)(Ki,{size:11}),t(`Web`)]})]})]},e.id)),(0,L.jsxs)(iv,{disabled:o||e.length===0||u,onClick:()=>void l(()=>sd(e,`client`)),title:u?t(`This folder is already shared.`):e,type:`button`,children:[(0,L.jsx)(ti,{size:12}),t(`Share this folder`)]}),i?.webRunning&&(0,L.jsxs)(av,{children:[(0,L.jsxs)(ov,{children:[(0,L.jsx)(Ki,{size:12}),t(`Browser access`)]}),i.urls.map(e=>(0,L.jsx)(sv,{onClick:()=>void ot(e),type:`button`,children:e},e)),(0,L.jsx)(Y_,{children:t(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var V_=i.div`
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
`;function cv({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=z(),[s,c]=(0,O.useState)(!1),l=(0,O.useRef)(null);(0,O.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,O.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=xc.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,L.jsxs)(lv,{ref:l,children:[(0,L.jsx)(uv,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,L.jsx)(ci,{size:14}):(0,L.jsx)(si,{size:14})}),s&&(0,L.jsxs)(dv,{children:[(0,L.jsx)(fv,{children:o(`View`)}),(0,L.jsxs)(pv,{children:[(0,L.jsxs)(mv,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,L.jsx)(si,{size:12}),` `,o(`List`)]}),(0,L.jsxs)(mv,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,L.jsx)(ci,{size:12}),` `,o(`Grid`)]})]}),(0,L.jsx)(fv,{children:o(`List icon size`)}),(0,L.jsxs)(hv,{children:[(0,L.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,L.jsxs)(gv,{children:[e.iconSize,`px`]})]}),(0,L.jsx)(fv,{children:o(`Grid size`)}),(0,L.jsxs)(hv,{children:[(0,L.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,L.jsxs)(gv,{children:[e.gridSize,`px`]})]}),(0,L.jsxs)(fv,{children:[o(`Columns`),(0,L.jsx)(em,{})]}),xc.map(e=>(0,L.jsxs)(_v,{children:[(0,L.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,L.jsxs)(_v,{children:[(0,L.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,L.jsxs)(fv,{children:[o(`Preview panel`),(0,L.jsx)(em,{})]}),(0,L.jsxs)(_v,{children:[(0,L.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,L.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var lv=i.div`
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
`,vv=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),yv=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),bv=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,L.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),xv=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,L.jsx)(`path`,{d:`M2 5h6`})}),Sv=e=>(0,L.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,L.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Cv=e=>(0,L.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,L.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,L.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function wv({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:te,shortcuts:C,currentFolder:w}){let T=z(),E=le(),D=ue(),[k,A]=(0,O.useState)({left:!1,right:!1}),[ne,j]=(0,O.useState)(null),[M,N]=(0,O.useState)(null),re=(0,O.useRef)(null),ie=(0,O.useRef)(null),P=(0,O.useRef)(null),F=(0,O.useCallback)(()=>{let e=ie.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;A(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,O.useEffect)(()=>{F();let e=ie.current;if(!e)return;let t=new ResizeObserver(F);return t.observe(e),()=>t.disconnect()},[F,e.length]),(0,O.useEffect)(()=>()=>{re.current&&window.clearTimeout(re.current.timer)},[]),(0,O.useEffect)(()=>{P.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ae=e=>ie.current?.scrollBy({left:e,behavior:`smooth`}),I=()=>{re.current&&window.clearTimeout(re.current.timer),re.current=null,N(null)};return(0,L.jsxs)(Ov,{children:[(0,L.jsx)(kv,{children:(0,L.jsx)(mi,{size:19})}),(0,L.jsxs)(Av,{children:[k.left&&(0,L.jsx)(Mv,{onClick:()=>ae(-180),title:T(`Scroll tabs left`),type:`button`,children:(0,L.jsx)(vv,{})}),(0,L.jsx)(jv,{onScroll:F,onWheel:e=>{let t=ie.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:ie,children:e.map(e=>(0,L.jsxs)(Nv,{$active:e.id===t,$dragging:ne===e.id,$dropTarget:M===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Ls(t.dataTransfer)||!Tv(e)||(t.preventDefault(),re.current?.id===e.id))return;I(),N(e.id);let r=window.setTimeout(()=>{n(e.id),re.current=null},500);re.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(re.current?.id===e.id||M===e.id)&&I()},onDragEnd:()=>{j(null),I()},onDragOver:t=>{(ne||Ls(t.dataTransfer)&&Tv(e))&&(t.preventDefault(),Ls(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>j(e.id),onDrop:t=>{if(t.preventDefault(),ne)a(ne,e.id);else if(Tv(e)&&Ls(t.dataTransfer)){let{paths:r,move:i}=Rs(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}j(null),I()},onClick:()=>n(e.id),ref:e.id===t?P:void 0,title:e.path||e.title,type:`button`,children:[(0,L.jsx)(Ev,{tab:e}),(0,L.jsx)(Pv,{children:e.title}),e.partner&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Fv,{children:`|`}),(0,L.jsx)(Dv,{place:e.partner.place}),(0,L.jsx)(Pv,{children:e.partner.title})]}),(0,L.jsx)(Iv,{"data-shortcut":Wt(C.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:T(`Close tab`),children:(0,L.jsx)(bv,{})})]},e.id))}),k.right&&(0,L.jsx)(Mv,{onClick:()=>ae(180),title:T(`Scroll tabs right`),type:`button`,children:(0,L.jsx)(yv,{})}),(0,L.jsx)(Lv,{"data-shortcut":Wt(C.newTab),onClick:i,title:T(`New tab`),type:`button`,children:(0,L.jsx)(ti,{size:13})})]}),(0,L.jsx)(Rv,{...D}),(0,L.jsxs)(zv,{children:[(0,L.jsx)(Vv,{$active:y,"data-shortcut":Wt(C.splitView),disabled:!b,onClick:x,title:T(y?`Close split view`:`Split view`),type:`button`,children:(0,L.jsx)($i,{size:15})}),(0,L.jsx)(Vv,{$active:S,disabled:!ee,onClick:te,title:T(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,L.jsx)(ea,{size:15})}),(0,L.jsxs)(Bv,{$active:_,onClick:v,title:T(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,L.jsx)(Gi,{size:14}),g>0&&(0,L.jsx)(Qg,{children:g>9?`9+`:g})]}),(0,L.jsx)(S_,{}),(0,L.jsx)(B_,{currentFolder:w}),(0,L.jsx)($g,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,L.jsx)(cv,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,L.jsx)(Hv,{onClick:E.minimize,title:T(`Minimize`),type:`button`,children:(0,L.jsx)(xv,{})}),(0,L.jsx)(Hv,{onClick:E.toggleMaximize,title:E.maximized?T(`Restore`):T(`Maximize`),type:`button`,children:E.maximized?(0,L.jsx)(Cv,{}):(0,L.jsx)(Sv,{})}),(0,L.jsx)(Uv,{onClick:E.close,title:T(`Close`),type:`button`,children:(0,L.jsx)(bv,{})})]})]})}function Tv(e){return e.kind===`files`&&(!f(e.path)||D(e.path))}function Ev({tab:e}){switch(e.kind){case`home`:return(0,L.jsx)(Jr,{size:13});case`settings`:return(0,L.jsx)(ai,{size:13});case`recycle`:return(0,L.jsx)(di,{size:13});default:return e.archive?(0,L.jsx)(bi,{size:13}):(0,L.jsx)(Dv,{place:e.place})}}function Dv({place:e}){return e?(0,L.jsx)(gs,{place:e,size:13}):(0,L.jsx)(Yr,{size:13})}var Ov=i.header`
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
`;function Wv(){let[e,t]=(0,O.useState)(null),n=(0,O.useRef)(null),r=(0,O.useRef)(void 0);return(0,O.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Sa.createPortal)((0,L.jsx)(Gv,{tooltip:e}),document.body):null}function Gv({tooltip:e}){let t=(0,O.useRef)(null),[n,r]=(0,O.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,O.useState)(()=>e.bottom+6);return(0,O.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,L.jsxs)(Kv,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,L.jsx)(qv,{children:e.text}),e.shortcut&&(0,L.jsx)(Jv,{children:e.shortcut})]})}var Kv=i.div`
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
`,Yv={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function Xv({deviceName:e,code:t,onAccept:n,onReject:r}){let i=z(),a=(0,O.useRef)(null);return(0,O.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Sa.createPortal)((0,L.jsx)(Zv,{children:(0,L.jsxs)(Qv,{role:`alertdialog`,"aria-modal":`true`,children:[(0,L.jsxs)($v,{children:[(0,L.jsx)(Wi,{size:15}),i(`Pair for sharing`)]}),(0,L.jsx)(ey,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,L.jsx)(ty,{children:t}),(0,L.jsx)(ny,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,L.jsxs)(ry,{children:[(0,L.jsx)(iy,{onClick:r,type:`button`,children:i(`Reject`)}),(0,L.jsx)(ay,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var Zv=i.div`
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
`,oy=`yafm://`,sy={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`},cy=0,ly=new Set;function uy(e){ly.add(e),I.send({type:`app.navigate.done`,payload:{path:e}})}var dy=20,fy=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function py(e){return`${oy}${e===`home`?`overview`:e}`}function my(e){return e.toLowerCase().startsWith(oy)?sy[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function hy(e){let t=e.trim();if(t.length===0)return null;if(!t.toLowerCase().startsWith(oy))return t;let n=sy[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?py(n):null}function gy(e){return e.history[e.index]??py(`home`)}function _y(e){return my(gy(e))??`files`}function vy(e){let t=gy(e);return my(t)?``:e.listing?.path||t}function yy(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||_y(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function by(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function xy(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||ge.iconSize,gridSize:e.view?.gridSize||t.gridSize||ge.gridSize,sort:e.view?.sort??ge.sort,sortDescending:e.view?.sortDescending??ge.sortDescending,columns:t.columns??_e.columns??[]}}function Sy(e=py(`home`)){return cy+=1,{id:`tab-${cy}`,listing:null,loading:!my(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Cy(e){return e instanceof Error?e.message:String(e)}function wy(e,t){let n=e=>e.replace(/[\\/]+/g,`\\`).replace(/\\$/,``).toLowerCase();return n(e)===n(t)}function Ty(e){let t=gd(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return _d(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Ey(e){let t=_(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Dy(e){return f(e)?Yt(e):void 0}function Oy(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return a(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:d(n)})}function ky(){let e=z(),[t,n]=(0,O.useState)(()=>[Sy()]),[r,i]=(0,O.useState)(()=>t[0].id),[a,o]=(0,O.useState)(null),[u,d]=(0,O.useState)(()=>{let e=Pn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,O.useState)([]),[h,g]=(0,O.useState)([]),[v,y]=(0,O.useState)(null),[b,x]=(0,O.useState)(null),[te,C]=(0,O.useState)(null),w=de(),[T,E]=(0,O.useState)(mn),[k,A]=(0,O.useState)(0),[ne,j]=(0,O.useState)(0),[M,N]=(0,O.useState)(mn),[re,ie]=(0,O.useState)(0),[P,F]=(0,O.useState)(0),[ae,oe]=(0,O.useState)(0),[se,ce]=(0,O.useState)(0),R=(0,O.useRef)(se);R.current=se;let[B,V]=(0,O.useState)([]),[le,ue]=(0,O.useState)(10),[H,pe]=(0,O.useState)(null),[he,ve]=(0,O.useState)(0),[U,ke]=(0,O.useState)(zt),[Ae,je]=(0,O.useState)(0),[Me,Ne]=(0,O.useState)(0),[Pe,Fe]=(0,O.useState)(0),[Ie,Le]=(0,O.useState)(!0),[ze,Ve]=(0,O.useState)(()=>{let e=Pn(`yafm.preview.width`,320);return e>=220?e:320}),[He,Ue]=(0,O.useState)(null),[Ge,Ke]=(0,O.useState)(null),[Je,Ye]=(0,O.useState)(`primary`),[Xe,W]=(0,O.useState)(null),[Ze,Qe]=(0,O.useState)(null),[tt,nt]=(0,O.useState)(null),[at,ot]=(0,O.useState)(null),[st,ct]=(0,O.useState)({primary:0,secondary:0}),[lt,ut]=(0,O.useState)({primary:null,secondary:null}),[dt,ft]=(0,O.useState)(null),[pt,ht]=(0,O.useState)([]),[xt,Ct]=(0,O.useState)(!1),wt=(0,O.useRef)([]),Tt=(0,O.useRef)([]),[Dt,Ot]=(0,O.useState)([]),[kt,At]=(0,O.useState)(!1),[jt,G]=(0,O.useState)(!1),[Pt,Ft]=(0,O.useState)([]),[Bt,Gt]=(0,O.useState)(null),qt=(0,O.useRef)(0),[Jt,Qt]=(0,O.useState)(()=>{let e=In(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?by({x:e.x,y:e.y}):by({x:Math.max(20,window.innerWidth-340),y:110})}),$t=(0,O.useCallback)(()=>{Qt(e=>by(e)),G(!0)},[]),q=t.find(e=>e.id===r)??t[0],J=_y(q),tn=gy(q),nn=vy(q),rn=J===`files`?q.listing?.parent??Ty(nn):null,an=q.splitWith?t.find(e=>e.id===q.splitWith):void 0,on=J===`files`&&an!==void 0,sn=an?vy(an):``,cn=an?an.listing?.parent??Ty(sn):null,ln=on&&an&&Je===`secondary`?an:q,un=H?.defaultView??_e,dn=xy(ln,un);(0,O.useEffect)(()=>{S(H?.accentColor,H?.secondaryColor)},[H?.accentColor,H?.secondaryColor]),(0,O.useEffect)(()=>{im(H?.fonts)},[H?.fonts]),(0,O.useEffect)(()=>{ee(H?.timeFormat,H?.timeFormatPattern)},[H?.timeFormat,H?.timeFormatPattern]),(0,O.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!H?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[H?.backgroundSource]),(0,O.useEffect)(()=>(me(e=>new Promise(t=>{Gt({id:++qt.current,prompt:e,resolve:t})})),()=>me(null)),[]),(0,O.useEffect)(()=>{Ye(`primary`)},[r]),(0,O.useEffect)(()=>{N(mn),F(0),oe(0)},[J]),(0,O.useEffect)(()=>{F(0)},[M.query,M.matchCase,M.regex]),(0,O.useEffect)(()=>{F(e=>ae===0?0:Math.min(e,ae-1))},[ae]);let fn=dn.columns.includes(`linkCount`),pn=(0,O.useMemo)(()=>{let e={},t=ps(H),n={};for(let[e,t]of Object.entries(H?.placeNames??{}))n[c(e)]=t;for(let t of p)e[c(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=c(t),i=p.find(e=>c(e.path)===r);e[r]={name:n[r]??i?.name??(_(t)||t),path:t,kind:`folder`,icon:i?.icon??H?.placeIcons?.[t]??null}}return e},[p,H]),hn=(0,O.useMemo)(()=>({places:pn,useIcons:H?.systemIcons===!1}),[pn,H?.systemIcons]),gn=H?.defaultView?.showImages??!0,_n=H?.defaultView?.imageStripHeight??_e.imageStripHeight,vn=J===`home`?(0,L.jsx)(ki,{size:13}):J===`settings`?(0,L.jsx)(ai,{size:13}):J===`recycle`?(0,L.jsx)(di,{size:13}):J===`gallery`?(0,L.jsx)(_i,{size:13}):void 0,yn=T.open&&T.query.length>0,bn=(0,O.useMemo)(()=>yn&&ln.listing?ln.listing.entries.filter(e=>Cn(e.isDirectory?Nn(hn,e.fullPath,e.name):e.name,T)).map(e=>e.fullPath):[],[yn,T,ln.listing,hn]);(0,O.useEffect)(()=>{A(0)},[T.query,T.matchCase,T.regex,ln.listing?.path]);let xn=bn.length===0?-1:Math.min(k,bn.length-1),Sn=(0,O.useCallback)(()=>{E(e=>({...e,open:!1,query:``})),A(0)},[]),wn=(0,O.useCallback)(()=>{E(e=>({...e,open:!0})),j(e=>e+1)},[]),Tn=(0,O.useCallback)(()=>{N(e=>({...e,open:!0})),ie(e=>e+1)},[]),En=(0,O.useCallback)(()=>{N(mn),F(0),oe(0)},[]),Dn=(0,O.useCallback)(e=>{F(t=>ae===0?0:(Math.min(t,ae-1)+e+ae)%ae)},[ae]),On=(0,O.useCallback)(e=>{E(t=>({...t,open:!0,query:t.open?t.query+e:e})),j(e=>e+1)},[]),kn=(0,O.useCallback)(e=>{A(t=>bn.length===0?0:(Math.min(t,bn.length-1)+e+bn.length)%bn.length)},[bn.length]),jn=(0,O.useRef)({tabs:t,activeId:r,activePane:Je});jn.current={tabs:t,activeId:r,activePane:Je};let Rn=(0,O.useRef)(H);Rn.current=H;let zn=(0,O.useRef)(!1),Bn=(0,O.useRef)([]),Vn=(0,O.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Hn=(0,O.useRef)(new Map),Un=(0,O.useCallback)(e=>{let t=(Hn.current.get(e)??0)+1;return Hn.current.set(e,t),()=>Hn.current.get(e)===t},[]),Wn=(0,O.useCallback)(async(e,t,n)=>{if(!(t&&hd(t)))try{let r=await Ee(t,fn);if(!n()||!r.listing)return;Vn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[fn,Vn]),Gn=(0,O.useCallback)(async(e,t,n=!1)=>{let r=Un(e);Sn();let i=!n||!jn.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Vn(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&wy(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&Wn(e,t,r);let o=t&&hd(t)?await vd(t):await be(t,!0,fn,R.current,t?Dy(t):void 0);if(!r())return;Vn(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!hd(o.path)&&Be(o.path).then(()=>ve(e=>e+1))}catch(i){if(!r())return;let a=jn.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?vy(a):``,s=Ty(o),c=Cy(i);if(o&&K(c)){let i=l(o),a=await fa(i,!!Yt(i));if(a){Xt(i,a),r()&&Gn(e,t,n);return}}Vn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Un,fn,Vn,Sn,Wn]),Kn=(0,O.useCallback)((e,t)=>{let n=hy(t);n&&(my(n)?(Sn(),Un(e),Vn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Gn(e,n))},[Un,Gn,Vn,Sn]),qn=(0,O.useCallback)(async(e,t,n)=>{if(Sn(),my(t)){Un(e),Vn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Un(e);Vn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{if(hd(t)||await Wn(e,t,r),!r())return;let n=hd(t)?await vd(t):await be(t,!0,fn,R.current,Dy(t));if(!r())return;Vn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(K(Cy(i))){let i=l(t),a=await fa(i,!!Yt(i));if(a){Xt(i,a),r()&&qn(e,t,n);return}}Vn(e,()=>({listing:{path:t,parent:Ty(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Cy(i)}))}},[Un,fn,Vn,Sn,Wn]),Jn=(0,O.useCallback)((e,t=!0)=>{let r=Sy(e??py(`home`));return n(e=>[...e,r]),t&&i(r.id),e&&!my(e)&&Gn(r.id,e),r.id},[Gn]),Yn=(0,O.useCallback)(e=>{for(let t of jn.current.tabs)_y(t)===`files`&&wy(vy(t),e)&&Gn(t.id,e,!0)},[Gn]),Xn=(0,O.useCallback)((e,t)=>{let n=_(t);for(let r of jn.current.tabs)r.listing?.entries.some(t=>wy(t.fullPath,e))&&Vn(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>wy(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[Vn]),Zn=(0,O.useRef)([]);(0,O.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&f(t)&&e.add(c(l(t)))}let n=Zn.current.filter(t=>!e.has(t));Zn.current=[...e],n.length>0&&Ce(n)},[t]);let Qn=(0,O.useCallback)((e,t=!1)=>{t?Jn(py(e)):Kn(jn.current.activeId,py(e))},[Jn,Kn]),$n=(0,O.useCallback)(e=>{let{tabs:t,activeId:r}=jn.current,a=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==a?.splitWith);if(a&&!a.hidden&&(Tt.current.push(gy(a)),Tt.current.length>dy&&Tt.current.shift()),o.length===0){let e=Sy();n([e]),i(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&i(o[Math.min(s,o.length-1)].id)},[]),er=(0,O.useCallback)(()=>{let e=Tt.current.pop();if(!e)return;let t={...Sy(e),fresh:!1};n(e=>[...e,t]),i(t.id),_y(t)===`files`&&Gn(t.id,vy(t))},[Gn]),tr=(0,O.useCallback)((e,t=!1)=>{t?Jn(e):Kn(yy(jn.current),e??py(`home`))},[Kn,Jn]),nr=(0,O.useCallback)(e=>{let{tabs:t,activeId:n}=jn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let a=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;i(r[a].id)},[]),rr=(0,O.useCallback)(()=>{let{tabs:e,activeId:t}=jn.current,r=e.find(e=>e.id===t);if(!r||_y(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),Vn(t,()=>({splitWith:void 0})),Ye(`primary`);return}let a=vy(r),o={...Sy(a),hidden:!0};n(e=>[...e,o]),Vn(t,()=>({splitWith:o.id})),Gn(o.id,a),Ye(`primary`)},[Gn,Vn]),ir=(0,O.useCallback)(e=>{Ve(e),Fn(`yafm.preview.width`,e)},[]),ar=on?Je===`secondary`?Ge??He:He??Ge:He,or=(0,O.useRef)(null),sr=e=>{e.preventDefault();let t=or.current?.getBoundingClientRect();if(!t)return;let n=Ie?ze:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);d(n),Fn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},cr=(e,t,n)=>{t&&W({x:e.clientX,y:e.clientY,directory:t,refresh:n})},lr=(0,O.useCallback)((e,t)=>{ct(n=>n[e]===t?n:{...n,[e]:t})},[]),ur=(0,O.useCallback)(e=>lr(`primary`,e),[lr]),dr=(0,O.useCallback)(e=>lr(`secondary`,e),[lr]),fr=(e,t)=>{st[e]!==0&&ut(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},pr=async(e,t=!1)=>{let n=Xe;if(W(null),!n)return;let r=e===null?await St(n.directory,t):await Et(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Sn(),ft(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},mr=(0,O.useCallback)(()=>{let{tabs:e}=jn.current,t=e.find(e=>e.id===yy(jn.current));t&&t.index>0&&qn(t.id,t.history[t.index-1],t.index-1)},[qn]),hr=(0,O.useCallback)(()=>{let{tabs:e}=jn.current,t=e.find(e=>e.id===yy(jn.current));t&&t.index<t.history.length-1&&qn(t.id,t.history[t.index+1],t.index+1)},[qn]),gr=(0,O.useCallback)(()=>{let{tabs:e}=jn.current,t=e.find(e=>e.id===yy(jn.current));t&&_y(t)===`files`&&t.listing?.parent&&tr(t.listing.parent)},[tr]),_r=(0,O.useRef)(null),vr=(0,O.useCallback)(()=>{for(let e of jn.current.tabs)e.listing&&Gn(e.id,e.listing.path,!0)},[Gn]),yr=(0,O.useCallback)(e=>{e.length!==0&&(Ft(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),$t())},[$t]),br=(0,O.useCallback)(async e=>{let t=await vt(e);t.length!==0&&yr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[yr]),xr=(0,O.useCallback)(e=>{let t=new Set(e);Ft(e=>e.filter(e=>!t.has(e.path)))},[]),Sr=(0,O.useCallback)(async e=>{let t=Rn.current;if(!t)return;let n=await vt(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>c(e.path))),i=n.filter(e=>!r.has(c(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};pe(a),await $e(a),je(e=>e+1)},[]),Cr=(0,O.useCallback)(()=>Ft([]),[]),wr=(0,O.useRef)(-1),Tr=(0,O.useCallback)(e=>{Ot(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),At(e.move),e.entries.length>0&&$t()},[$t]),Er=(0,O.useCallback)(async()=>{if(I.available)try{let e=await gt();wr.current=e.sequence,Tr(e)}catch{}},[Tr]),Dr=(0,O.useCallback)(async e=>{e.length!==0&&await mt(e,!1)&&await Er()},[Er]),Or=(0,O.useRef)(Pt);Or.current=Pt,(0,O.useEffect)(()=>{let e=e=>{Ls(e.dataTransfer)&&$t()},t=e=>{Ls(e.dataTransfer)&&$t()};return window.addEventListener(`dragstart`,e),window.addEventListener(`dragenter`,t),()=>{window.removeEventListener(`dragstart`,e),window.removeEventListener(`dragenter`,t)}},[$t]),(0,O.useEffect)(()=>{let e=()=>Qt(e=>by(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let kr=(0,O.useCallback)(async()=>{let e=Or.current;if(e.length>0){let t=await vt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Ft(e=>e.filter(e=>n.has(e.path)))}await Er()},[Er]),Ar=(0,O.useCallback)(()=>{kr(),Fe(e=>e+1),vr()},[kr,vr]),jr=(0,O.useCallback)(e=>{let t=by(e);Qt(t),Ln(`yafm.tray.position`,t)},[]),Mr=(0,O.useCallback)(()=>{jt?G(!1):$t()},[$t,jt]),Nr=(0,O.useCallback)(async(t,n,r)=>{let i=await _t(t,n,r);i.ok?(r&&xr(t),Fe(e=>e+1),vr(),Er()):ua(i.error??e(`The files could not be transferred.`))},[vr,Er,xr]);(0,O.useEffect)(()=>{if(I.available)return Lt().then(e=>{wt.current=e,ht(e)},()=>void 0),I.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=wt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});wt.current=n,ht(n),r&&Ct(!0)})},[]);let Pr=(0,O.useCallback)(()=>{Rt().then(()=>Lt().then(e=>{wt.current=e,ht(e)},()=>void 0))},[]);(0,O.useEffect)(()=>{if(!I.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await gt();if(!e||t.sequence===wr.current)return;wr.current=t.sequence,Tr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Tr]);let Fr=(0,O.useCallback)(async e=>{let t=e?await Mt():await Nt();t.ok?(Fe(e=>e+1),vr()):t.error&&!t.error.startsWith(`Nothing to`)&&ua(t.error)},[vr]),Ir=(0,O.useRef)(fn);(0,O.useEffect)(()=>{Ir.current!==fn&&(Ir.current=fn,vr())},[fn,vr]);let Lr=(0,O.useCallback)((e,t)=>{let{tabs:n}=jn.current,r=n.find(t=>t.id===e);if(!r||_y(r)!==`files`)return;let i=vy(r),a=Rn.current?.defaultView??_e,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||ge.iconSize,gridSize:r.view?.gridSize||a.gridSize||ge.gridSize,sort:r.view?.sort??ge.sort,sortDescending:r.view?.sortDescending??ge.sortDescending,...t};Vn(e,()=>({view:o})),_r.current!==null&&window.clearTimeout(_r.current),_r.current=window.setTimeout(()=>{_r.current=null,we(i,o)},250)},[Vn]),Rr=(0,O.useCallback)(e=>{Lr(yy(jn.current),e)},[Lr]),zr=(0,O.useCallback)(e=>{let t=Rn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,columns:e}};pe(n),$e(n)},[]),Br=(0,O.useCallback)(e=>{let t=Rn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,showImages:e}};pe(n),$e(n)},[]),Vr=(0,O.useCallback)(e=>{let t=Rn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??_e,imageStripHeight:e}};pe(n),$e(n)},[]),Hr=(0,O.useCallback)((e,t,n,r)=>{let i=jn.current.tabs.find(t=>t.id===e);if(!i||_y(i)!==`files`||!i.listing)return;let a=vy(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Vn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Te(a,t,n,r)},[Vn]),Ur=(0,O.useCallback)((e,t)=>{let n=jn.current.tabs.find(t=>t.id===e);if(!n)return;let r=xy(n,Rn.current?.defaultView??_e);Lr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Lr]),Wr=(0,O.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),Gr=(0,O.useCallback)(()=>{De().then(m,()=>m([]))},[]),Kr=(0,O.useCallback)(e=>{let t=(e.openTabs??[]).map(hy).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...Sy(e),fresh:!1})),a=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),i(r[a].id);for(let e of r)_y(e)===`files`&&Gn(e.id,vy(e),!0);return!0},[Gn]),qr=(0,O.useCallback)(e=>{let t=Bn.current;if(Bn.current=[],t.length===0)return;let n=t.filter(e=>!ly.has(e));for(let e of t)n.includes(e)||uy(e);if(n.length===0)return;let{tabs:r}=jn.current;if(!e&&r.length===1&&r[0].fresh){Kn(r[0].id,n[0]),uy(n[0]);for(let e of n.slice(1))Jn(e),uy(e);return}let a=n.map(e=>{let t=Jn(e);return uy(e),t}).at(-1);a&&setTimeout(()=>i(a),0)},[Jn,Kn]),Y=(0,O.useCallback)(()=>{qe().then(e=>{pe(e),ue(e.recentLimit);let t={...zt,...e.shortcuts};ke(t),Vt(t.openInNewTab),je(e=>e+1),zn.current||(zn.current=!0,qr(e.restoreTabs&&Kr(e)))},()=>{ue(10),zn.current=!0,qr(!1)})},[qr,Kr]),Jr=(0,O.useCallback)(()=>{Re().then(V,()=>V([]))},[]),Yr=(0,O.useCallback)(()=>{Oe().then(g,()=>g([]))},[]),Xr=t.filter(e=>!e.hidden),Zr=Xr.map(gy),ei=Zr.join(`
`),ii=Math.max(Xr.findIndex(e=>e.id===r),0);(0,O.useEffect)(()=>{if(!H?.restoreTabs)return;let e=setTimeout(()=>void et(Zr,ii),700);return()=>clearTimeout(e)},[ei,ii,H?.restoreTabs]),(0,O.useEffect)(()=>{let{tabs:e,activeId:t}=jn.current,n=e.find(e=>e.id===t);n&&n.fresh&&_y(n)===`files`&&Gn(n.id,vy(n),!0),Gr(),Y(),Yr(),rt().then(y,()=>y(null))},[Gn,Gr,Y,Yr]),(0,O.useEffect)(()=>{if(it().then(x,()=>x(null)),I.available)return I.on(e=>{let t=e;t.type===`app.update`&&t.data&&x(t.data)})},[]),(0,O.useEffect)(()=>{if(I.available)return I.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&o({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&ua(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&ua(n.data.error??e(`Pairing failed.`))}})},[e]),(0,O.useEffect)(()=>{let e=setInterval(Yr,3e4);return()=>clearInterval(e)},[Yr]),(0,O.useEffect)(()=>{J===`home`&&(Jr(),Yr())},[J,q.id,Jr,Yr]),(0,O.useEffect)(()=>{if(!I.available)return;let e=I.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=jn.current,i=t.data.startup===!0;i&&ly.has(n)?uy(n):i&&!zn.current?Bn.current.includes(n)||Bn.current.push(n):(i&&r.length===1&&r[0].fresh?Kn(r[0].id,n):my(n)?Kn(yy(jn.current),n):Jn(n),i&&uy(n))});return I.send({type:`app.ready`}),e},[Kn,Jn]),(0,O.useEffect)(()=>{if(I.available)return I.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,O.useEffect)(()=>{if(I.available)return I.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,O.useEffect)(()=>{let e=e=>{if(Kt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),mr();return}if(e.key===`BrowserForward`){e.preventDefault(),hr();return}if(e.key===`Escape`&&T.open){e.preventDefault(),Sn();return}let t=Ut(e);if(t===U.closeTab)e.preventDefault(),$n(yy(jn.current));else if(t===U.newTab)e.preventDefault(),Jn();else if(t===U.reopenTab)e.preventDefault(),er();else if(t===U.goBack)e.preventDefault(),mr();else if(t===U.goForward)e.preventDefault(),hr();else if(t===U.goUp)e.preventDefault(),gr();else if(t===U.find)e.preventDefault(),J===`files`?wn():Tn();else if(t===U.location)e.preventDefault(),Ne(e=>e+1);else if(t===U.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&tr(t)}else t===U.iconsView?(e.preventDefault(),J===`files`&&Rr({mode:`grid`})):t===U.detailsView?(e.preventDefault(),J===`files`&&Rr({mode:`list`})):t===U.nextTab?(e.preventDefault(),nr(1)):t===U.previousTab?(e.preventDefault(),nr(-1)):t===U.hidden||t===`alt+.`?(e.preventDefault(),We().then(()=>{Fe(e=>e+1),vr()})):t===U.undo?(e.preventDefault(),Fr(!0)):t===U.redo?(e.preventDefault(),Fr(!1)):t===U.splitView?(e.preventDefault(),rr()):J!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),On(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[U,J,T.open,$n,er,Jn,mr,hr,gr,wn,Tn,Sn,On,Rr,nr,tr,p,vr,Fr,rr]),(0,O.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),mr()):e.button===4&&(e.preventDefault(),hr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[mr,hr]),(0,O.useEffect)(()=>{if(!I.available||J!==`files`)return;let e=new Set;for(let n of t){if(_y(n)!==`files`)continue;let t=vy(n);if(t&&!hd(t)){if(f(t)){let n=Ty(l(t));n&&e.add(n)}else e.add(t)}}e.size>0&&I.send({type:`fs.watch`,payload:{paths:[...e]}})},[J,tn,t]),(0,O.useEffect)(()=>{if(I.available)return I.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=jn.current.tabs.filter(e=>_y(e)===`files`&&wy(vy(e),n));r.length!==0&&(en(),be(n,!1,fn).then(e=>{for(let t of r){let n=jn.current.tabs.find(e=>e.id===t.id);n&&_y(n)===`files`&&!n.loading&&wy(vy(n),e.path)&&Vn(t.id,()=>({listing:e}))}},()=>void 0))})},[fn,Vn]);let oi=q.index>0,si=q.index<q.history.length-1,ci=(e,t)=>{let n=xy(e,un),r=e.listing?.path??e.history[e.index]??``,i=f(r),a=i&&D(r);return(0,L.jsx)(wc,{confirmDelete:H?.confirmDelete??!1,previewVideoAudio:H?.previewVideoAudio??!1,previewVideoAutoplay:H?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?Ue:Ke,onActivate:()=>Ye(t?`primary`:`secondary`),enableShortcuts:(!on||(t?Je===`primary`:Je===`secondary`))&&(!i||a),error:e.error,find:e.id===ln.id?{...T,currentPath:xn<0?null:bn[xn]}:void 0,imageStripHeight:_n,listing:e.listing,loading:e.loading,onImageStripHeight:Vr,readOnly:i&&!a||hd(e.listing?.path??``),onOpen:(t,n)=>{n?Jn(t):Gn(e.id,t)},onOpenFile:(t,n)=>{hd(t)?bd(t).catch(e=>void ua(Cy(e))):s(t)?H?.archiveHandler??!1?n?Jn(t):Gn(e.id,t):ye(t):f(t)?(async()=>{let e=await Se(t,R.current,Dy(t));if(!e.path&&K(e.error)){let n=l(t),r=Yt(n);r&&Zt(n);let i=await fa(n,!!r);i&&(Xt(n,i),e=await Se(t,R.current,i))}e.path?ye(e.path):e.error&&ua(e.error)})():ye(t)},onRefresh:()=>{let t=e.listing?.path;t&&Yn(t)},onRename:Xn,onSelectionCountChange:t?ur:dr,onSetTags:(t,n,r)=>Hr(e.id,t,n,r),selectionMenuRequest:t?lt.primary:lt.secondary,onSort:t=>Ur(e.id,t),onPaste:Ar,onClipboardChanged:()=>void Er(),onTransfer:Nr,onAddToTray:e=>void br(e),onAddFavorite:e=>void Sr(e),onExtractArchive:(e,t)=>void hi(e,t),openOnSingleClick:H?.openOnSingleClick??!1,pendingRename:dt&&t===(Je===`primary`)&&wy(dt.directory,e.listing?.path??``)?dt.path:null,pendingRenameToken:dt?.token??0,refreshToken:Pe,shortcuts:U,showCheckboxes:H?.showCheckboxes??!0,showImages:gn,view:n})},li=T.open&&(0,L.jsx)(Ju,{current:xn,focusToken:ne,matchCase:T.matchCase,mode:T.mode,onClose:Sn,onMatchCase:()=>E(e=>({...e,matchCase:!e.matchCase})),onMode:()=>E(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>kn(1),onPrevious:()=>kn(-1),onQuery:e=>E(t=>({...t,query:e})),onRegex:()=>E(e=>({...e,regex:!e.regex})),query:T.query,regex:T.regex,total:bn.length}),ui=J===`files`&&f(nn),fi=ui&&D(nn),pi=ui&&q.listing?.archiveEncrypted===!0,mi=async(t,n)=>{let r=l(t),i=await xe(r,n,R.current,Dy(r));if(!i.ok&&K(i.error)){let e=Yt(r);e&&Zt(r);let t=await fa(r,!!e);t&&(Xt(r,t),i=await xe(r,n,R.current,t))}i.ok?(Yn(n),en(),Gn(q.id,n,!0)):ua(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},hi=async(e,t)=>{let n=l(e),r=Ty(n);if(!r)return;if(t===`choose`){let e=await aa(r);e&&await mi(n,e);return}let i=t===`named`;if(t===`auto`){let e=wy(n,nn)?q.listing?.entries??[]:(await be(n,!1,!1,R.current,Dy(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${Ey(n)}`:r;await mi(n,o)},gi=async e=>{ui&&await hi(nn,e)},vi=async()=>{ui&&await hi(nn,`choose`)},yi=(0,L.jsxs)(Py,{children:[(0,L.jsx)(Fy,{"data-shortcut":Wt(U.goBack),disabled:!oi,onClick:e=>{q.index>0&&Ht(e)?Jn(q.history[q.index-1]):mr()},title:e(`Back`),type:`button`,children:(0,L.jsx)(ni,{})}),(0,L.jsx)(Fy,{"data-shortcut":Wt(U.goForward),disabled:!si,onClick:e=>{q.index<q.history.length-1&&Ht(e)?Jn(q.history[q.index+1]):hr()},title:e(`Forward`),type:`button`,children:(0,L.jsx)(ri,{})}),(0,L.jsx)(Fy,{"data-shortcut":Wt(U.goUp),disabled:J!==`files`||!rn,onClick:e=>{rn&&(Ht(e)?Jn(rn):tr(rn))},title:e(`Up one level`),type:`button`,children:(0,L.jsx)($r,{})}),(0,L.jsx)(Qf,{focusToken:Me,icon:vn,label:J===`files`?void 0:e(Yv[J]),onContextMenu:J===`files`?(e,t,n)=>nt({x:t,y:n,path:e}):void 0,onNavigate:tr,path:J===`files`?nn:tn}),J===`files`&&(!ui||fi)&&(0,L.jsx)(Fy,{onClick:e=>cr(e,nn,()=>void Gn(q.id,nn,!0)),title:e(`New folder or file`),type:`button`,children:(0,L.jsx)(ti,{})}),(0,L.jsx)(Fy,{"data-shortcut":Wt(U.find),onClick:Tn,title:e(`Search`),type:`button`,children:(0,L.jsx)(Qr,{})}),st.primary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ry,{}),(0,L.jsx)(Fy,{onClick:e=>fr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,L.jsx)(ta,{})})]}),ui&&(0,L.jsxs)(Iy,{children:[(0,L.jsx)(Ry,{}),pi&&(0,L.jsxs)(Ly,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,L.jsx)(na,{size:12}),e(`Encrypted archive`)]}),(0,L.jsx)(Fy,{onClick:()=>void vi(),onContextMenu:e=>{e.preventDefault(),Qe({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,L.jsx)(bi,{})}),(0,L.jsx)(eo,{icon:(0,L.jsx)(Ki,{size:15}),onChange:e=>{let t=Number(e);ce(t),R.current=t,ui&&Gn(q.id,nn,!0)},options:fy.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(fy.find(e=>e.value===String(se))?.label??`Auto`)}`,value:String(se)})]})]}),xi=M.open?{...M,index:P}:null;return(0,L.jsx)(An,{value:hn,children:(0,L.jsxs)(Ay,{$rounded:w,children:[(0,L.jsx)(du,{settings:H}),(0,L.jsx)(wv,{activeId:q.id,onClose:$n,onNewTab:()=>Jn(),onReorder:Wr,onTransferToTab:Nr,onSelect:i,onViewChange:Rr,onColumns:zr,onShowImages:Br,showImages:gn,tasks:pt,onClearTasks:Pr,activityOpen:xt,onActivityOpenChange:Ct,trayCount:Pt.length+Dt.length,trayVisible:jt,onToggleTray:Mr,split:on,canSplit:J===`files`,onToggleSplit:rr,details:Ie,canDetails:J===`files`||J===`recycle`||J===`gallery`,onToggleDetails:()=>Le(e=>!e),currentFolder:J===`files`&&!hd(nn)?nn:``,shortcuts:U,view:dn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=_y(n),i=vy(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?vy(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Mn(hn,i):void 0,archive:r===`files`&&f(i),split:!!a,title:r===`files`?Nn(hn,i,_(i)||e(`Files`)):e(Yv[r]),partner:a?{title:Nn(hn,o,_(o)||e(`Files`)),place:Mn(hn,o)}:void 0}})}),(0,L.jsxs)(jy,{children:[(0,L.jsx)(Ng,{activeKind:J,currentPath:J===`files`?tn:``,drives:h,historyVersion:he,onNavigate:tr,onOpenView:Qn,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:B,recentLimit:le,version:Ae}),(0,L.jsxs)(My,{children:[J!==`files`&&yi,(0,L.jsxs)(Ny,{children:[J!==`files`&&M.open&&(0,L.jsx)(Ju,{current:P,focusToken:re,matchCase:M.matchCase,mode:M.mode,onClose:En,onMatchCase:()=>N(e=>({...e,matchCase:!e.matchCase})),onMode:()=>N(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Dn(1),onPrevious:()=>Dn(-1),onQuery:e=>N(t=>({...t,query:e})),onRegex:()=>N(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:M.query,regex:M.regex,total:ae}),J===`files`?on&&an?(0,L.jsxs)(By,{ref:or,children:[(0,L.jsxs)(Vy,{style:{flex:u},children:[(0,L.jsxs)(zy,{$active:Je===`primary`,onPointerDown:()=>Ye(`primary`),children:[(0,L.jsx)(Fy,{"data-shortcut":Wt(U.goBack),disabled:!oi,onClick:e=>{let t=q.index-1;t<0||(Ht(e)?Jn(q.history[t]):qn(q.id,q.history[t],t))},title:e(`Back`),type:`button`,children:(0,L.jsx)(ni,{})}),(0,L.jsx)(Fy,{"data-shortcut":Wt(U.goForward),disabled:!si,onClick:e=>{let t=q.index+1;t>=q.history.length||(Ht(e)?Jn(q.history[t]):qn(q.id,q.history[t],t))},title:e(`Forward`),type:`button`,children:(0,L.jsx)(ri,{})}),(0,L.jsx)(Fy,{"data-shortcut":Wt(U.goUp),disabled:!rn,onClick:e=>{rn&&(Ht(e)?Jn(rn):Gn(q.id,rn))},title:e(`Up one level`),type:`button`,children:(0,L.jsx)($r,{})}),(0,L.jsx)(Qf,{focusToken:Je===`primary`?Me:void 0,onContextMenu:(e,t,n)=>nt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Jn(e):void Gn(q.id,e),path:nn}),(0,L.jsx)(Fy,{onClick:e=>cr(e,nn,()=>void Gn(q.id,nn,!0)),title:e(`New folder or file`),type:`button`,children:(0,L.jsx)(ti,{})}),(0,L.jsx)(Fy,{"data-shortcut":Wt(U.find),onClick:wn,title:e(`Search`),type:`button`,children:(0,L.jsx)(Qr,{})}),st.primary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ry,{}),(0,L.jsx)(Fy,{onClick:e=>fr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,L.jsx)(ta,{})})]})]}),ci(q,!0),Je===`primary`&&li]}),(0,L.jsx)(Hy,{onDoubleClick:()=>d(.5),onPointerDown:sr,title:e(`Drag to resize; double-click to reset`)}),(0,L.jsxs)(Vy,{$enter:!0,style:{flex:1-u},children:[(0,L.jsxs)(zy,{$active:Je===`secondary`,onPointerDown:()=>Ye(`secondary`),children:[(0,L.jsx)(Fy,{"data-shortcut":Wt(U.goBack),disabled:an.index<=0,onClick:e=>{let t=an.index-1;t<0||(Ht(e)?Jn(an.history[t]):qn(an.id,an.history[t],t))},title:e(`Back`),type:`button`,children:(0,L.jsx)(ni,{})}),(0,L.jsx)(Fy,{"data-shortcut":Wt(U.goForward),disabled:an.index>=an.history.length-1,onClick:e=>{let t=an.index+1;t>=an.history.length||(Ht(e)?Jn(an.history[t]):qn(an.id,an.history[t],t))},title:e(`Forward`),type:`button`,children:(0,L.jsx)(ri,{})}),(0,L.jsx)(Fy,{"data-shortcut":Wt(U.goUp),disabled:!cn,onClick:e=>{cn&&(Ht(e)?Jn(cn):Gn(an.id,cn))},title:e(`Up one level`),type:`button`,children:(0,L.jsx)($r,{})}),(0,L.jsx)(Qf,{focusToken:Je===`secondary`?Me:void 0,onContextMenu:(e,t,n)=>nt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Jn(e):void Gn(an.id,e),path:sn}),(0,L.jsx)(Fy,{onClick:e=>cr(e,sn,()=>void Gn(an.id,sn,!0)),title:e(`New folder or file`),type:`button`,children:(0,L.jsx)(ti,{})}),(0,L.jsx)(Fy,{"data-shortcut":Wt(U.find),onClick:wn,title:e(`Search`),type:`button`,children:(0,L.jsx)(Qr,{})}),st.secondary>0&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Ry,{}),(0,L.jsx)(Fy,{onClick:e=>fr(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,L.jsx)(ta,{})})]})]}),ci(an,!1),Je===`secondary`&&li]}),(0,L.jsx)(Ro,{info:ar,onWidth:ir,open:Ie,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1,width:ze})]}):(0,L.jsxs)(Wy,{children:[(0,L.jsxs)(Gy,{children:[yi,(0,L.jsxs)(Uy,{children:[ci(q,!0),li]})]}),(0,L.jsx)(Ro,{info:He,onWidth:ir,open:Ie,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1,width:ze})]}):J===`home`?(0,L.jsx)(qf,{drives:h,find:xi,historyVersion:he,onSearchMatches:oe,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Yr,onHistoryChanged:()=>ve(e=>e+1),onAddToTray:e=>void br(e),onAddFavorite:e=>void Sr(e),onExtractArchive:(e,t)=>void hi(e,t),settingsVersion:Ae,onOpen:tr,onLayoutChanged:Y,onPlacesChanged:m,onRecentCleared:Jr,places:p,recent:B,recentLimit:le,visibilityVersion:Pe}):J===`settings`?(0,L.jsx)(Am,{appInfo:v,find:xi,focusSection:te,onSearchMatches:oe,onSettingsChanged:Y}):J===`gallery`?(0,L.jsx)(yg,{confirmDelete:H?.confirmDelete??!1,find:xi,onSearchMatches:oe,openOnSingleClick:H?.openOnSingleClick??!1,onAddToTray:e=>void br(e),onAddFavorite:e=>void Sr(e),onExtractArchive:(e,t)=>void hi(e,t),shortcuts:U,showCheckboxes:H?.showCheckboxes??!0,showDetails:Ie,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1,view:dn}):(0,L.jsx)(mp,{find:xi,onOpenLocation:tr,onShowDetails:()=>Le(!0),platform:v?.platform,showDetails:Ie,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1})]},J),(0,L.jsxs)(Yy,{children:[(0,L.jsx)(`span`,{children:J===`files`&&q.listing?Oy(e,q.listing):``}),v?(0,L.jsxs)(Ky,{children:[(0,L.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),b?.available&&(0,L.jsxs)(qy,{onClick:()=>{C(`updates`),Qn(`settings`)},title:e(`Version {version} is available.`,{version:b.latest}),type:`button`,children:[(0,L.jsx)(Jy,{}),e(`Update available`)]})]}):(0,L.jsx)(`span`,{children:`browser preview`})]})]})]}),(0,L.jsx)(Hs,{clipboardItems:Dt,clipboardMove:kt,currentDirectory:J===`files`?tn:``,items:Pt,onAdd:e=>void br(e),onClear:Cr,onClose:()=>G(!1),onCopyToClipboard:e=>void Dr(e),onPosition:jr,onRemove:xr,onTransfer:Nr,position:Jt,visible:jt}),Xe&&(0,L.jsx)(Za,{creationOnly:!0,directory:Xe.directory,menu:{x:Xe.x,y:Xe.y,paths:[],background:!0},onClose:()=>W(null),onCreateFile:e=>void pr(e),onCreateFolder:e=>void pr(null,e),shortcuts:U}),tt&&(0,L.jsx)(Za,{allowCompression:!0,directory:Ty(tt.path)??tt.path,menu:{x:tt.x,y:tt.y,paths:[tt.path]},onAddToTray:e=>void br(e),onAddFavorite:e=>void Sr(e),onExtractArchive:(e,t)=>void hi(e,t),onArchiveCreated:e=>{e&&Yn(Ty(tt.path)??tt.path)},onClose:()=>nt(null),onCompressTo:(e,t)=>ot({paths:e,name:t}),onCopy:(e,t)=>void mt(e,t),onDelete:e=>void bt(e,!1).then(()=>Yn(Ty(tt.path)??tt.path)),onOpen:(e,t)=>t?Jn(e):void Gn(q.id,e),onOpenFile:e=>void ye(e),onPaste:e=>void yt(e).then(t=>{t&&Yn(e)}),onRefresh:()=>Yn(tt.path),shortcuts:U,target:{path:tt.path,isDirectory:!0}}),at&&(0,L.jsx)(mo,{initialDirectory:Ty(tt?.path??nn)??nn,initialName:at.name,onCancel:()=>ot(null),onCompress:async e=>{let t=await It(at.paths,e);return!t.ok&&t.error&&ua(t.error),t.ok}}),Ze&&(0,L.jsx)(za,{items:[{label:e(`Extract here`),onSelect:()=>void gi(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void gi(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void gi(`auto`)}],onClose:()=>Qe(null),x:Ze.x,y:Ze.y}),Bt&&(0,L.jsx)(gu,{delaySeconds:Bt.prompt.delaySeconds,hits:Bt.prompt.hits,onCancel:()=>{Bt.resolve(!1),Gt(null)},onConfirm:()=>{Bt.resolve(!0),Gt(null)},permanent:Bt.prompt.permanent},Bt.id),(0,L.jsx)(ju,{}),(0,L.jsx)(Ru,{}),a&&(0,L.jsx)(Xv,{code:a.code,deviceName:a.deviceName,onAccept:()=>{fd(a.requestId,!0),o(null)},onReject:()=>{fd(a.requestId,!1),o(null)}}),(0,L.jsx)(Wv,{}),(0,L.jsx)(fe,{})]})})}var Ay=i.div`
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
`;function Xy({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:l,onSelect:u}){let d=z(),f=gc(`picker`),p=t===`file`,m=r??[],[h,g]=(0,O.useState)(e),[v,y]=(0,O.useState)(null),[b,x]=(0,O.useState)(!0),[S,ee]=(0,O.useState)(null),[te,C]=(0,O.useState)(()=>new Set),[w,T]=(0,O.useState)(a??[]),[D,k]=(0,O.useState)([]),[A,ne]=(0,O.useState)([]),[j,M]=(0,O.useState)([]),[N,re]=(0,O.useState)([]),[ie,P]=(0,O.useState)(``),[F,ae]=(0,O.useState)(m.length===0),[oe,se]=(0,O.useState)(`files`),[ce,R]=(0,O.useState)(0),[B,V]=(0,O.useState)(mn),[le,ue]=(0,O.useState)(0),[de,H]=(0,O.useState)(0),[fe,pe]=(0,O.useState)(null),[me,he]=(0,O.useState)(null),[ve,ye]=(0,O.useState)(0),[xe,Se]=(0,O.useState)(null),[Ce,U]=(0,O.useState)(_e.imageStripHeight);(0,O.useEffect)(()=>{qe().then(Se,()=>Se(null))},[]),(0,O.useEffect)(()=>{a?T(a):De().then(T,()=>T([]))},[a]),(0,O.useEffect)(()=>{Oe().then(k,()=>k([])),Re().then(ne,()=>ne([]))},[]),(0,O.useEffect)(()=>{let e=!0;return x(!0),ee(null),C(new Set),P(p?``:_(h)),be(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),P(p?``:_(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,ce,p]),(0,O.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),V(e=>({...e,open:!0})),ue(e=>e+1);return}if(e.key===`Escape`){B.open?(V(e=>({...e,open:!1,query:``})),H(0)):l();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Te();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Ee();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),V(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),ue(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ue()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,O.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Te()):e.button===4&&(e.preventDefault(),Ee())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let we=e=>{let t=e.trim();t.length!==0&&c(t)!==c(h)&&(M(e=>[...e,h]),re([]),se(`files`),g(t))},Te=()=>{let e=j.at(-1);e!==void 0&&(M(e=>e.slice(0,-1)),re(e=>[h,...e]),g(e))},Ee=()=>{let e=N[0];e!==void 0&&(re(e=>e.slice(1)),M(e=>[...e,h]),g(e))},ke=v?.path??h,Ae=v?.parent??(h?E(h):null);(0,O.useEffect)(()=>{I.available&&ke&&I.send({type:`fs.watch`,payload:{paths:[ke]}})},[ke]),(0,O.useEffect)(()=>{if(I.available&&ke)return I.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&c(t.data.path)===c(ke)&&be(ke,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));C(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[ke]);let je=(v?.entries??[]).filter(e=>e.isDirectory||p&&(F||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Me=v?{...v,entries:je}:null,Ne=B.open&&B.query.length>0,Pe=(0,O.useMemo)(()=>Ne?je.filter(e=>Cn(e.name,B)).map(e=>e.fullPath):[],[Ne,je,B]);(0,O.useEffect)(()=>{H(0)},[B.query,B.matchCase,B.regex,v?.path]);let Fe=Pe.length===0?-1:Math.min(de,Pe.length-1),Ie=(0,O.useMemo)(()=>({...B,currentPath:Fe>=0?Pe[Fe]:null}),[B,Fe,Pe]),Le=xe?.defaultView??_e,ze=o??{mode:Le.mode,iconSize:Le.iconSize,gridSize:Le.gridSize,sort:`name`,sortDescending:!1,columns:Le.columns??[`type`,`size`,`modified`]},Be=(s??Le.showImages)&&ze.mode===`list`,Ve=ie.trim(),He=Ve.length>0?Qy(Ve)?Ve:Zy(ke,Ve):null,Ue=()=>{if(b||S)return;let e=n?[...te]:[...te].slice(0,1);e.length>0?u(e):He!==null&&Ve!==_(ke)?u([He]):!p&&ke&&u([ke])},We=(0,O.useCallback)(e=>{C(new Set(e)),P(e.length===1?_(e[0]):e.length===0&&!p?_(ke):``)},[ke,p]),Ge=e=>{v?.entries.find(t=>t.fullPath===e)?.isDirectory?we(e):p&&u([e])},Ke=e=>P(e),Je=async e=>{let t=fe;if(pe(null),!t||!ke)return;let n=e===null?await St(ke):await Et(ke,e);n.ok&&n.path!==null&&(V(e=>({...e,open:!1,query:``})),e!==null&&ae(!0),R(e=>e+1),window.setTimeout(()=>{he(n.path),ye(e=>e+1)},120))},Ye=()=>{V(e=>({...e,open:!0})),ue(e=>e+1)},Xe=e=>{H(t=>Pe.length===0?0:(t+e+Pe.length)%Pe.length)},W=e=>(0,L.jsxs)(cb,{children:[(0,L.jsxs)(lb,{children:[(0,L.jsx)(ub,{children:d(p?`File name:`:`Folder:`)}),(0,L.jsx)(db,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ue())},spellCheck:!1,value:ie}),p&&(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(ub,{children:d(`Files of type:`)}),(0,L.jsx)(eo,{onChange:e=>ae(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:F?`all`:`supported`,width:220})]})]}),(0,L.jsxs)(fb,{children:[(0,L.jsx)(pb,{onClick:l,type:`button`,children:d(`Cancel`)}),(0,L.jsxs)(pb,{$primary:!0,disabled:b||S!==null||p&&te.size===0&&Ve.length===0,onClick:Ue,type:`button`,children:[(0,L.jsx)(fi,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),Ze=(0,L.jsxs)(eb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,L.jsxs)(tb,{children:[(0,L.jsxs)(nb,{children:[(0,L.jsx)(Yr,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,L.jsx)(rb,{onClick:l,title:d(`Cancel`),type:`button`,children:(0,L.jsx)(pi,{size:12})})]}),(0,L.jsxs)(ib,{children:[(0,L.jsx)(Ng,{activeKind:oe===`overview`?`home`:oe===`gallery`?`gallery`:`files`,currentPath:ke,drives:D,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:w.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>we(e),onOpenView:e=>{e===`home`?(C(new Set),P(p?``:_(ke)),se(`overview`)):e===`gallery`&&p&&(C(new Set),P(``),se(`gallery`))},places:w,recent:A,recentLimit:10}),(0,L.jsx)(ab,{children:oe===`overview`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(qf,{drives:D,historyVersion:0,homePath:w.find(e=>e.kind===`home`)?.path??``,onOpen:e=>we(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:We,places:w,readOnly:!0,recent:A,recentLimit:10,visibilityVersion:0}),W(P)]}):oe===`gallery`?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(yg,{onPick:e=>u([e]),onSelectionChange:We,showCheckboxes:xe?.showCheckboxes??!0,view:{...ge,columns:[]}}),W(P)]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(ob,{children:[(0,L.jsx)(sb,{disabled:j.length===0,onClick:Te,title:d(`Back`),type:`button`,children:(0,L.jsx)(ni,{})}),(0,L.jsx)(sb,{disabled:N.length===0,onClick:Ee,title:d(`Forward`),type:`button`,children:(0,L.jsx)(ri,{})}),(0,L.jsx)(sb,{disabled:!Ae,onClick:()=>Ae&&we(Ae),title:d(`Up one level`),type:`button`,children:(0,L.jsx)($r,{})}),(0,L.jsx)(Qf,{onNavigate:we,path:ke}),(0,L.jsx)(sb,{onClick:e=>pe({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,L.jsx)(ti,{})}),(0,L.jsx)(sb,{onClick:Ye,title:d(`Search`),type:`button`,children:(0,L.jsx)(Qr,{})}),f.available&&(0,L.jsx)(sb,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,L.jsx)(ta,{})})]}),B.open&&(0,L.jsx)(Ju,{current:Fe,focusToken:le,matchCase:B.matchCase,mode:B.mode,onClose:()=>{V(e=>({...e,open:!1,query:``})),H(0)},onMatchCase:()=>V(e=>({...e,matchCase:!e.matchCase})),onMode:()=>V(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Xe(1),onPrevious:()=>Xe(-1),onQuery:e=>V(t=>({...t,query:e})),onRegex:()=>V(e=>({...e,regex:!e.regex})),query:B.query,regex:B.regex,total:Pe.length}),(0,L.jsx)(wc,{allowBackgroundMenu:!0,confirmDelete:xe?.confirmDelete??!1,enableShortcuts:!0,error:S,find:Ie,imageStripHeight:Ce,loading:b,listing:Me,onImageStripHeight:U,onOpen:Ge,onOpenFile:Ge,onRefresh:()=>R(e=>e+1),onSelectionChange:We,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:xe?.openOnSingleClick??!1,refreshToken:ce,pendingRename:me,pendingRenameToken:ve,showCheckboxes:xe?.showCheckboxes??!0,showDetails:!1,showImages:Be,singleSelect:!n,view:ze}),W(Ke)]})})]}),fe&&(0,L.jsx)(Za,{creationOnly:!0,directory:ke,menu:{x:fe.x,y:fe.y,paths:[],background:!0},onClose:()=>pe(null),onCreateFile:p?e=>void Je(e):void 0,onCreateFolder:()=>void Je(null),shortcuts:zt})]});return i?Ze:(0,Sa.createPortal)((0,L.jsx)($y,{onPointerDown:e=>{e.target===e.currentTarget&&l()},children:Ze}),document.body)}function Zy(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Qy(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var $y=i.div`
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
`;function mb({mode:e,multiple:t,extensions:n,initial:r}){let i=z(),a=ue(),[o,s]=(0,O.useState)(null),[c,l]=(0,O.useState)({}),[u,d]=(0,O.useState)(null),[f,p]=(0,O.useState)(null),[m,h]=(0,O.useState)(null),g=(0,O.useRef)(0);(0,O.useEffect)(()=>{I.send({type:`app.ready`})},[]),(0,O.useEffect)(()=>(me(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>me(null)),[]),(0,O.useEffect)(()=>{qe().then(e=>{s(e),S(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??_e,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,L.jsxs)(hb,{children:[(0,L.jsxs)(gb,{children:[(0,L.jsx)(_b,{children:(0,L.jsx)(mi,{size:17})}),(0,L.jsx)(vb,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,L.jsx)(cv,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,L.jsx)(yb,{children:(0,L.jsx)(bb,{onClick:()=>I.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,L.jsx)(pi,{size:12})})})]}),(0,L.jsx)(xb,{children:(0,L.jsx)(Xy,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>I.send({type:`pick.cancel`}),onSelect:e=>I.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,L.jsx)(gu,{delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,L.jsx)(ju,{}),(0,L.jsx)(fe,{})]})}var hb=i.div`
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
`,Sb=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Sb);var Cb=document.getElementById(`root`),wb=new URLSearchParams(window.location.search),Tb=wb.get(`picker`),Eb=wb.get(`filter`)??``;Cb&&(0,k.createRoot)(Cb).render((0,L.jsx)(O.StrictMode,{children:(0,L.jsx)(B,{children:Tb===`folder`||Tb===`file`?(0,L.jsx)(mb,{extensions:Eb?Eb.split(`;`).filter(Boolean):[],initial:wb.get(`initial`)??``,mode:Tb,multiple:wb.get(`multiple`)===`1`}):(0,L.jsx)(ky,{})})}));