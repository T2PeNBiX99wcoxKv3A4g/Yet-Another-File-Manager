import{A as e,C as t,E as n,M as r,N as i,O as a,S as o,T as s,_ as c,b as l,c as u,d,f,g as p,h as m,i as h,j as g,k as _,l as v,m as y,n as b,o as x,p as S,r as ee,s as te,t as ne,u as re,v as C,w,x as ie,y as T}from"./theme-BMX5jShW.js";var E=i(r(),1),D=e(),O=15e3,ae=new Set,k=new Map,oe=!1,A=0,se;function j(){return typeof window<`u`&&typeof window.external?.sendMessage==`function`}function M(){oe||(oe=!0,typeof window<`u`&&typeof window.external?.receiveMessage==`function`&&window.external.receiveMessage(e=>ce(e)))}function ce(e){let t;try{t=JSON.parse(e)}catch(t){console.warn(`[Native] Received a non-JSON message:`,e,t);return}let n=typeof t.id==`string`?t.id:void 0,r=n?k.get(n):void 0;n&&r&&(k.delete(n),clearTimeout(r.timeoutId),t.ok===!1?r.reject(Error(typeof t.error==`string`?t.error:`Native request failed.`)):r.resolve(t.data)),ae.forEach(e=>{try{e(t)}catch(e){console.error(`[Native] Message handler threw:`,e)}})}function le(){if(se!==void 0)return;let e=()=>{if(!j())return;let e=document.getElementById(`root`),t=e!==null&&e.childElementCount===0;window.external.sendMessage(JSON.stringify({type:`webview.heartbeat`,payload:{blank:t}}))};e(),se=setInterval(e,5e3)}var N={get available(){return j()},send(e){j()?(M(),window.external.sendMessage(JSON.stringify(e)),e.type===`app.ready`&&le()):console.debug(`[Native] Bridge unavailable, dropping message:`,e)},request(e,t,n=O){if(!j())return Promise.reject(Error(`Native bridge is not available.`));M();let r=`req-${++A}-${Date.now()}`;return new Promise((i,a)=>{let o=setTimeout(()=>{k.delete(r),a(Error(`Native request '${e}' timed out after ${n}ms.`))},n);k.set(r,{resolve:i,reject:a,timeoutId:o}),window.external.sendMessage(JSON.stringify({type:e,id:r,payload:t}))})},on(e){return M(),ae.add(e),()=>ae.delete(e)}},P=s();function ue(e){let t=new Map;for(let[n,r]of Object.entries(e)){let e=n.toLowerCase();t.has(e)||t.set(e,r)}return(e,n)=>{let r=t.get(e.toLowerCase())??e;return n?r.replace(/\{(\w+)}/g,(e,t)=>t in n?String(n[t]):e):r}}async function de(e){return N.available?await N.request(`i18n.get`,e?{locale:e}:void 0):{locale:`en`,strings:{},available:[`en`]}}var fe=(0,E.createContext)(ue({})),F=(0,E.createContext)(`en`);function I(){return(0,E.useContext)(fe)}var pe=({children:e})=>{let[t,n]=(0,E.useState)(()=>ue({})),[r,i]=(0,E.useState)(`en`);return(0,E.useEffect)(()=>{let e=!1,t=async()=>{try{let t=await de();if(e)return;n(()=>ue(t.strings)),i(t.locale)}catch{}};t();let r=N.on(e=>{e.type===`settings.changed`&&t()});return()=>{e=!0,r()}},[]),(0,E.useEffect)(()=>{document.documentElement.lang=r},[r]),(0,P.jsx)(fe.Provider,{value:t,children:(0,P.jsx)(F.Provider,{value:r,children:e})})},me=e=>N.send({type:e});function he(){let[e,t]=(0,E.useState)(!1);return(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{if(e.type!==`window.state`)return;let n=e.data;typeof n?.maximized==`boolean`&&t(n.maximized)})},[]),{maximized:e,minimize:()=>me(`window.minimize`),toggleMaximize:()=>me(`window.toggleMaximize`),close:()=>me(`window.close`)}}function ge(){return{onMouseDown:()=>me(`window.drag`),onDoubleClick:()=>me(`window.toggleMaximize`)}}function L(){let[e,t]=(0,E.useState)(!1),{maximized:n}=he();return(0,E.useEffect)(()=>{if(!N.available)return;let e=!1;return N.request(`app.info`).then(n=>{e||t(n.rounded===!0)}).catch(()=>void 0),()=>{e=!0}},[]),(0,E.useEffect)(()=>{document.documentElement.classList.toggle(`window-rounded`,e)},[e]),e&&!n}var _e=[[`top`,{top:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`bottom`,{bottom:0,left:8,right:8,height:5,cursor:`ns-resize`}],[`left`,{top:8,bottom:8,left:0,width:5,cursor:`ew-resize`}],[`right`,{top:8,bottom:8,right:0,width:5,cursor:`ew-resize`}],[`topleft`,{top:0,left:0,width:10,height:10,cursor:`nwse-resize`}],[`topright`,{top:0,right:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomleft`,{bottom:0,left:0,width:10,height:10,cursor:`nesw-resize`}],[`bottomright`,{bottom:0,right:0,width:10,height:10,cursor:`nwse-resize`}]];function ve(){return(0,P.jsx)(P.Fragment,{children:_e.map(([e,t])=>(0,P.jsx)(`div`,{onMouseDown:t=>{t.preventDefault(),N.send({type:`window.resize`,payload:{direction:e}})},style:{position:`fixed`,zIndex:1e3,...t}},e))})}async function ye(){return N.available?await N.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function R(e){N.available?await N.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function z(){N.available&&await De(`update.openLogs`)}async function be(e){N.available?await De(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function xe(){return N.available?await N.request(`update.status`)??null:null}async function Se(){return N.available?await N.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function Ce(){return N.available?await N.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function B(){await De(`update.cancel`)}async function we(){return N.available?await N.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function Te(e){return N.on(t=>{t.type===`update.progress`&&e(t.data)})}function Ee(e){return N.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function De(e,t,n=3e4){let r=await N.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var V=null;function Oe(e){V=e}function ke(e){return V?V(e):Promise.resolve(!1)}var Ae={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},je={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function Me(e,t){return N.available?await N.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Ne(e){return N.available?(await N.request(`fs.open`,{path:e})).ok:!1}async function Pe(e,t=!0,n=!1,r=0,i){return await N.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function Fe(e,t,n=0,r){let i=await N.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await ke({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await N.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function Ie(e,t=0,n){return await N.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Le(e){N.available&&e.length!==0&&await N.request(`fs.archive.release`,{paths:e})}async function Re(e){return N.available?await N.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function ze(e,t){return N.available?(await N.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Be(e,t,n,r){return N.available?(await N.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Ve(e,t=!1){return N.available?await N.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function He(){return(await N.request(`fs.places`)).places}async function Ue(){return(await N.request(`fs.drives`)).drives}async function We(e=!1){return(await N.request(`fs.recycle`,{includeOrphans:e})).entries}async function Ge(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await ke({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await N.request(e,{...t,confirm:r.token})}return r}async function Ke(e=!1){let t=await N.request(`fs.recycle.empty`,{includeOrphans:e});await Ge(`fs.recycle.empty`,{includeOrphans:e},t)}async function qe(e){return!N.available||e.length===0?{ok:!1,done:0}:await N.request(`fs.recycle.restoreMany`,{ids:e})}async function Je(e){if(!N.available||e.length===0)return{ok:!1,done:0};let t=await N.request(`fs.recycle.deleteMany`,{ids:e}),n=await Ge(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ye(e){N.available&&e&&await N.request(`fs.recycle.properties`,{id:e})}async function Xe(){if(!N.available)return{entries:[],cancelled:!0,failed:!1};let e=await N.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function Ze(){return N.available?(await N.request(`fs.recycle.admin.purge`)).ok:!1}async function Qe(e=0,t=150,n=!1){return N.available?await N.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function $e(){return N.available?(await N.request(`fs.recent`)).entries:[]}async function et(){return N.available?(await N.request(`fs.frequent`)).entries:[]}async function tt(e){N.available&&await N.request(`fs.frequent.record`,{path:e})}async function nt(){await N.request(`fs.recent.clear`)}async function rt(){await N.request(`fs.frequent.clear`)}async function it(){return await N.request(`fs.visibility`)}async function at(){return await N.request(`fs.hidden.toggle`)}async function ot(){return N.available?await N.request(`fs.index.tasks`):{count:0,directories:[]}}var st={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showHidden:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function ct(){if(!N.available)return st;let e=await N.request(`settings.get`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showHidden:e?.showHidden??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function lt(){return N.available?(await N.request(`app.protection.defaults`)).paths??[]:[]}var ut={registered:!1,pathMatches:!1,registeredPath:null},dt={registered:!1,pathMatches:!1,registeredPath:null};async function ft(){return N.available?await N.request(`app.defaultManager.status`):dt}async function H(e){return N.available?await N.request(`app.defaultManager.set`,{enabled:e}):dt}async function pt(){return N.available?await N.request(`app.archive.status`):ut}async function mt(){return N.available?await N.request(`app.archive.register`):ut}async function ht(){return N.available?await N.request(`app.archive.unregister`):ut}async function gt(e){if(!N.available)return e;let t=await N.request(`settings.save`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showHidden:t?.showHidden??e.showHidden,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function _t(e,t){N.available&&await N.request(`app.tabs.set`,{tabs:e,active:t})}async function vt(e,t,n){return N.available?(await N.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var U={managed:0,private:0,workingSet:0,available:0};async function yt(){return N.available?await N.request(`app.memory`):U}async function bt(){return N.available?await N.request(`app.memory.trim`):U}var xt={registered:!1,pathMatches:!1,registeredPath:null};async function St(){return N.available?await N.request(`app.scheme`):xt}async function Ct(e){return N.available?await N.request(`app.scheme.set`,{enabled:e}):xt}var wt={supported:!1,mode:`none`,active:!1,error:null};async function Tt(){return N.available?await N.request(`app.startup`):wt}async function Et(e){return N.available?await N.request(`app.startup.set`,{mode:e}):wt}async function Dt(e,t=!1){return!N.available||e.length===0?!1:(await N.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Ot(){return N.available?(await N.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function kt(){return N.available?await N.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function At(e,t,n){return!N.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await jt({action:n?`move`:`write`},r=>N.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:r}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function jt(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await ke({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function Mt(e){return!N.available||e.length===0?[]:(await N.request(`fs.paths.info`,{paths:e})).entries}async function Nt(e,t=!1){return N.available?await jt({action:t?`move`:`write`},t=>N.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function Pt(e,t=!1){if(!N.available||e.length===0)return{ok:!1,error:null};let n=await N.request(`fs.operation.delete`,{paths:e,permanent:t}),r=!1;for(let i=0;i<2&&n.required&&n.token&&n.protected?.length;i++){if(!await ke({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){r=!0;break}n=await N.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return r?{...n,ok:!1,cancelled:!0}:n}async function Ft(e,t){return N.available?await jt({action:`rename`},n=>N.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function It(e,t=!1){return N.available?await N.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Lt(e){return N.available?(await N.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Rt(e,t){return N.available?await N.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function zt(e,t,n){return N.available?await N.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Bt(e,t){return N.available?await N.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Vt(e){N.available&&e.length!==0&&await N.request(`fs.operation.properties`,{paths:e})}async function Ht(e){N.available&&await N.request(`fs.operation.openWith`,{path:e})}async function Ut(e){N.available&&await N.request(`fs.operation.terminal`,{path:e})}async function Wt(e){return N.available?await N.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Gt(e,t){return N.available?(await N.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Kt(){return N.available?await N.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function qt(){return N.available?await N.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function W(e){N.available&&await N.request(`fs.operation.showInExplorer`,{path:e})}async function G(e){return!N.available||e.length===0?{verbs:[],safe:!0}:await N.request(`shell.verbs`,{paths:e})}async function Jt(e,t,n,r){N.available&&e.length!==0&&await N.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function K(e,t){return!N.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await N.request(`fs.operation.compress`,{...t,paths:e})}async function Yt(){return N.available?(await N.request(`app.tasks`)).tasks:[]}async function Xt(){N.available&&await N.request(`app.tasks.clear`)}var Zt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Qt=Zt.openInNewTab;function $t(e){Qt=e.trim()||Zt.openInNewTab}function en(e){let t=Qt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function tn(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function nn(e){return e.split(`+`).filter(Boolean).map(e=>rn[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var rn={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function an(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var on=new Map;function sn(e){return l(p(e)?u(e):e)}function cn(e){return on.get(sn(e))}function ln(e,t){on.set(sn(e),t)}function un(e){on.delete(sn(e))}function dn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var q=new Map,fn=new Map,pn=new Set,mn=0;function hn(){q.clear(),fn.clear(),mn+=1,pn.forEach(e=>e())}function gn(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...q.keys()])e.toLowerCase().includes(t)&&(q.delete(e),n=!0);n&&(mn+=1,pn.forEach(e=>e()))}function _n(){let[e,t]=(0,E.useState)(mn);return(0,E.useEffect)(()=>{let e=()=>t(mn);return pn.add(e),()=>{pn.delete(e)}},[]),e}var vn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function yn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return vn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function bn(e,t,n=!1){let r=_n(),i=e===null?``:yn(e,t,n),[a,o]=(0,E.useState)(()=>q.get(i)??null);return(0,E.useEffect)(()=>{if(e===null){o(null);return}if(!N.available)return;if(q.has(i)){o(q.get(i)??null);return}let r=!0;return N.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?q.set(i,e.dataUrl):q.delete(i),r&&o(e.dataUrl)},()=>{q.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function xn(e){let[t,n]=(0,E.useState)(e);return(0,E.useEffect)(()=>{if(!e){n(null);return}if(!p(e)){n(e);return}let t=!0;return Ie(e,0,cn(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function Sn(e){let t=_n(),[n,r]=(0,E.useState)(()=>e?fn.get(e)??null:null);return(0,E.useEffect)(()=>{if(!e||!N.available){r(null);return}if(fn.has(e)){r(fn.get(e)??null);return}let t=!0;return N.request(`fs.iconFile`,{path:e}).then(n=>{fn.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{fn.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var Cn=null,wn=null;function Tn(){return Cn===null?N.available?(wn??=N.request(`app.thumbnails`).then(e=>(Cn=e.base??``,Cn),()=>(Cn=``,``)),wn):Promise.resolve(``):Promise.resolve(Cn)}function En(e,t=128,n=0){let[r,i]=(0,E.useState)(Cn);return(0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Tn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${Dn}`}var Dn=2;function On(e,t=0,n=``){let[r,i]=(0,E.useState)(Cn);if((0,E.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Tn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function kn(e,t=0){let[n,r]=(0,E.useState)(Cn);return(0,E.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return Tn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var An={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},jn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Mn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Fn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Rn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Nn=`\0`,Pn=``;function Fn(e){return e.query!==Nn&&(Nn=e.query,Pn=e.query.toLowerCase()),Pn}var In=`\0`,Ln=null;function Rn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===In)return Ln;In=t;try{Ln=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Ln=null}return Ln}function zn(e,t){return Mn(e,t)!==null}var Bn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],Vn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Hn(e){let t=Wn(e);for(let{kind:e}of Bn)if(Vn[e].has(t))return e;return null}function Un(e){return Hn(e)!==null}function Wn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Gn=(0,E.createContext)({places:{},useIcons:!1}),Kn=Gn.Provider;function qn(){return(0,E.useContext)(Gn)}function Jn(e,t){return e.places[l(t)]}function Yn(e,t,n){return Jn(e,t)?.name||n}var Xn=new Map,Zn=new Map,Qn=0;function $n(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&Xn.set(e,t)}catch{}}function er(e){return N.available?Xn.get(e)??null:localStorage.getItem(e)}function tr(e,t){N.available?(Xn.set(e,t),Zn.set(e,t),window.clearTimeout(Qn),Qn=window.setTimeout(nr,200)):localStorage.setItem(e,t)}function nr(){if(Qn=0,Zn.size===0)return;let e=Object.fromEntries(Zn);Zn.clear(),N.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function rr(){if(Zn.size===0)return;let e=Object.fromEntries(Zn);Zn.clear(),N.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function ir(e,t){let n=er(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function ar(e,t){tr(e,String(t))}function or(e){try{return JSON.parse(er(e)??`null`)}catch{return null}}function sr(e,t){tr(e,JSON.stringify(t))}var J=I;function cr(e){return e}var lr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,P.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,P.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),ur=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),dr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M14 3v4h4`})]}),fr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,P.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,P.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),pr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,P.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),mr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 19V5`}),(0,P.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),hr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,P.jsx)(`path`,{d:`M20 4v7h-7`})]}),gr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 5v14`}),(0,P.jsx)(`path`,{d:`M5 12h14`})]}),_r=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M19 12H5`}),(0,P.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),vr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M5 12h14`}),(0,P.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),yr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,P.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),br=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,P.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),xr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,P.jsx)(`path`,{d:`M12 12v8`})]}),Sr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,P.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),Cr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,P.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),wr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,P.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),Tr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),Er=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 7h16`}),(0,P.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,P.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,P.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),Dr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),Or=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),kr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,P.jsxs)(`defs`,{children:[(0,P.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,P.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,P.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,P.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,P.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,P.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,P.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,P.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,P.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,P.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),Ar=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),jr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,P.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,P.jsx)(`path`,{d:`m13 5-2 14`})]}),Mr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,P.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,P.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Nr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,P.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Pr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,P.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,P.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Fr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Ir=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Lr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Rr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,P.jsx)(`path`,{d:`M8.5 14h7`})]}),zr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,P.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,P.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Br=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Vr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Hr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,P.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Ur=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,P.jsx)(`path`,{d:`M15 3v4h4`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Wr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,P.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Gr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,P.jsx)(`path`,{d:`m14 6 4 4`})]}),Kr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,P.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),qr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,P.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Jr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 4v10`}),(0,P.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,P.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Yr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,P.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,P.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Xr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,P.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,P.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Zr=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,P.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Qr=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),$r=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,P.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),ei=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,P.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,P.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),ti=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),ni=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,P.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,P.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,P.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),ri=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,P.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),ii=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,P.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),ai=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,P.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,P.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),oi=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,P.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),si=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,P.jsx)(`path`,{d:`M3.5 12h17`}),(0,P.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),ci=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),li=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,P.jsx)(`path`,{d:`M8.5 10.5h7`})]}),ui=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,P.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,P.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),di=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,P.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),fi=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,P.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,P.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),pi=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,P.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),mi=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M12 16V4`}),(0,P.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,P.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),hi=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),gi=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,P.jsx)(`path`,{d:`M12 4v16`})]}),_i=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,P.jsx)(`path`,{d:`M15 4v16`})]}),vi=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,P.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,P.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,P.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),yi=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,P.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,P.jsx)(`path`,{d:`M12 14v2`})]}),bi=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,P.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),xi=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,P.jsx)(`circle`,{cx:12,cy:12,r:3})]}),Si=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,P.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,P.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,P.jsx)(`path`,{d:`m3 3 18 18`})]});function Y(e,t){return({size:n=t,...r})=>(0,P.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var Ci=Y(lr,18),wi=Y(ur,18),Ti=Y(dr,18),Ei=Y(fr,18),Di=Y(pr,16),Oi=Y(mr,16),ki=Y(hr,16),Ai=Y(gr,16),ji=Y(_r,16),Mi=Y(vr,16),Ni=Y(yr,12),Pi=Y(br,18),Fi=Y(xr,14),Ii=Y(Sr,14),Li=Y(Cr,14),Ri=Y(wr,18),zi=Y(Tr,18),Bi=Y(Er,18),Vi=Y(Dr,14),Hi=Y(Or,14),Ui=Y(xi,14),Wi=Y(Si,14),Gi=Y(kr,18),Ki=Y(Ar,18),qi=Y(jr,18),Ji=Y(Mr,18),Yi=Y(Nr,18),Xi=Y(Pr,18),Zi=Y(Fr,18),Qi=Y(Ir,18),$i=Y(Lr,18),ea=Y(Rr,18),ta=Y(zr,18),na=Y(Br,18),ra=Y(Vr,18),ia=Y(Hr,18),aa=Y(Ur,18),oa=Y(Wr,18),sa=Y(Gr,16),ca=Y(Kr,18),la=Y(qr,18),ua=Y(Jr,18),da=Y(Yr,18),fa=Y(Xr,18),pa=Y(Zr,18),ma=Y(Qr,18),ha=Y($r,18),ga=Y(ei,18),_a=Y(ti,18),va=Y(ni,18),ya=Y(ri,18),ba=Y(ii,18),xa=Y(ai,18),Sa=Y(oi,18),Ca=Y(si,18),wa=Y(ci,18),Ta=Y(li,14),Ea=Y(ui,14),Da=Y(di,16),Oa=Y(fi,16),ka=Y(pi,16),Aa=Y(mi,16),ja=Y(hi,16),Ma=Y(gi,16),Na=Y(_i,16),Pa=Y(vi,16),Fa=Y(yi,14),Ia=Y(bi,14);async function La(e,t,n){return N.available?(await N.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function Ra(e){return La(`folder`,[],e??``)}function za(e){return La(`file`,e??[],``)}var Ba=null,Va=null;function Ha(e){Ba=e}function Ua(e){return Ba?Ba(e):Promise.resolve()}function Wa(e){Va=e}function Ga(e,t=!1){return Va?Va(e,t):Promise.resolve(null)}var Ka=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],qa=null,Ja=0,Ya=new Set;function Xa(){Ja+=1;for(let e of Ya)e()}function Za(e){return Ya.add(e),()=>Ya.delete(e)}function Qa(){return Ja}function $a(e){qa=e,Xa()}function eo(){return(0,E.useSyncExternalStore)(Za,Qa,Qa),qa}var to=g(),no=a`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,ro=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,io=n`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ao=n`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,oo=n`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,so=n`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,co=n`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,lo=n`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,uo=n`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,fo=a`animation: ${ro} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,po=a`animation: ${io} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,mo=a`animation: ${ao} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;a`animation: ${oo} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var ho=a`animation: ${so} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,go=a`animation: ${co} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,_o=a`animation: ${lo} 140ms ease-out;`,vo=a`animation: ${uo} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function yo({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,E.useState)([]),s=(0,E.useRef)(void 0);if((0,E.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,E.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,P.jsx)(ko,{},`group-rule-${i}`)),n.push((0,P.jsx)(Oo,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,P.jsx)(ko,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,P.jsxs)(To,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,P.jsx)(Eo,{children:e.loading?(0,P.jsx)(Ao,{}):e.icon}),(0,P.jsx)(Do,{children:e.label}),a?(0,P.jsx)(Ni,{size:12}):e.checked&&(0,P.jsx)(Vi,{size:12})]},`${e.label}-${i}`))}),n};return(0,to.createPortal)((0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(bo,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(xo,{children:r.map((e,t)=>(0,P.jsxs)(So,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,P.jsx)(Co,{children:e.icon}),(0,P.jsx)(wo,{children:e.label})]},`${e.label}-${t}`))}),(0,P.jsx)(ko,{})]}),m(n,0)]}),a.map((e,t)=>(0,P.jsx)(bo,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var bo=_.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${no}
    ${po}
    transform-origin: top left;
`,xo=_.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,So=_.button`
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
`,Co=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,wo=_.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,To=_.button`
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
`,Eo=_.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Do=_.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Oo=_.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ko=_.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Ao=_.span`
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
`;function jo({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:u,onDelete:d,onCopy:f,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:y,onAddToTray:b,onAddFavorite:x,onRemoveFavorite:S,favoritePaths:ee,onExtractArchive:te,allowCompression:ne=!1,onCompressTo:re,onArchiveCreated:C}){let w=J(),ie=eo(),T=p(t),[D,O]=(0,E.useState)({verbs:[],safe:!0,loading:!1}),[ae,k]=(0,E.useState)({recommended:[],other:[],loading:!1}),[oe,A]=(0,E.useState)(null),se=(0,E.useRef)(0),j=(0,E.useRef)(0),M=e?.paths.length===1,ce=e?.background?t?[t]:[]:e?.paths??[],le=e?.background?t||null:M&&n?.isDirectory?n.path:null;if((0,E.useEffect)(()=>{if(!e){O({verbs:[],safe:!0,loading:!1}),k({recommended:[],other:[],loading:!1});return}let t=++se.current;O({verbs:[],safe:!0,loading:ce.length>0&&!T}),ce.length>0&&!T&&G(ce).then(e=>{se.current===t&&O({...e,loading:!1})},()=>{se.current===t&&O({verbs:[],safe:!0,loading:!1})});let r=++j.current;!T&&M&&n?(k({recommended:[],other:[],loading:!0}),Wt(n.path).then(e=>{j.current===r&&k({...e,loading:!1})},()=>{j.current===r&&k({recommended:[],other:[],loading:!1})})):k({recommended:[],other:[],loading:!1})},[e,M,n?.path,n?.isDirectory,ce.length,T]),(0,E.useEffect)(()=>{if(!e||T||!le){A(null);return}let t=!0;return Lt(le).then(e=>{t&&A(e)},()=>{t&&A(null)}),()=>{t=!1}},[e,le,T]),!e)return null;let N=[],ue=[],de=new Set((ee??[]).map(l)),fe=e.background?t?[t]:[]:e.paths,F=fe.length>0&&fe.every(e=>de.has(l(e))),I=()=>n?pe(n.path,n.isDirectory):`Archive`,pe=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},me=async(e,n=I())=>{let r=await K(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?C?.(r.path,!0):Ua(r.error??w(`Could not create the archive.`))},he=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ge=async()=>{if(!le||oe===null)return;let e=await Rt(le,!oe);e.ok?(A(e.enabled),y?.()):Ua(e.error??w(`Could not change the case sensitivity.`))},L=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await zt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await zt(e,t,`${a}\\${No(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?y?.():Ua(o.error??w(`Could not create the link.`))},_e=async e=>{if(!n)return;let r=await Ra(t);r&&await L(e,n.path,r,v(n.path),e.endsWith(`-copy`))},ve=async e=>{let n=ie?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=l(a)===l(t);await L(n,r.path,t,v(r.path),i&&!o)}},ye=async()=>{let t=(await Mt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&$a({paths:t})},R=()=>{let e=ie?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:w(`Cancel selected link`),icon:(0,P.jsx)(Hi,{size:14}),onSelect:()=>$a(null)},...t?[{label:w(`Hard link`),icon:(0,P.jsx)(Ti,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard`)}]:[],{label:w(`Symbolic link`),icon:(0,P.jsx)(Ti,{size:14}),separatorBefore:!t,onSelect:()=>void ve(`symbolic-file`)},...n?[{label:w(`Directory junction`),icon:(0,P.jsx)(wi,{size:14}),onSelect:()=>void ve(`junction`)},{label:w(`Smart copy`),icon:(0,P.jsx)(Da,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,P.jsx)(Da,{size:14}),onSelect:()=>void ve(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,P.jsx)(Da,{size:14}),onSelect:()=>void ve(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,P.jsx)(Da,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,P.jsx)(Da,{size:14}),onSelect:()=>void ve(`symbolic-copy`)}]:[]]};if(e.background){if(h&&ue.push({label:w(`New folder`),icon:(0,P.jsx)(Ai,{size:16}),shortcut:nn(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:w(`Folder`),icon:(0,P.jsx)(wi,{size:14}),onSelect:()=>h(!1)}),T||e.push({label:w(`Case-sensitive folder`),icon:(0,P.jsx)(Ea,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...Ka.map((e,t)=>({label:`${w(e.label)} (${e.extension})`,icon:(0,P.jsx)(Ti,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),N.push({label:w(`New`),icon:(0,P.jsx)(Ai,{size:14}),children:e,onSelect:()=>void 0})}if(T||N.push({label:w(`Create link`),icon:(0,P.jsx)(Aa,{size:14}),disabled:!ie,children:R(),onSelect:()=>void 0}),_)return(0,P.jsx)(yo,{items:N,onClose:a,quick:ue,x:e.x,y:e.y});!T&&o&&N.push({label:w(`Open in new tab`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>o(t,!0)}),N.push({label:w(`Copy as path`),icon:(0,P.jsx)(Da,{size:14}),onSelect:()=>void he([t])}),b&&N.push({label:w(`Add to file tray`),icon:(0,P.jsx)(Sa,{size:14}),onSelect:()=>b([t])}),!T&&(F?S:x)&&N.push({label:w(F?`Remove from favorites`:`Add to favorites`),icon:F?(0,P.jsx)(Ta,{size:14}):(0,P.jsx)(wa,{size:14}),onSelect:()=>F?S?.([t]):x?.([t])}),!T&&oe!==null&&N.push({label:w(`Case-sensitive names`),icon:(0,P.jsx)(Ea,{size:14}),checked:oe,onSelect:()=>void ge()}),!T&&ne&&(N.push({label:w(`Open in Terminal`),icon:(0,P.jsx)(ba,{size:14}),onSelect:()=>void Ut(t)}),N.push({label:w(`Show in Explorer`),icon:(0,P.jsx)(wi,{size:14}),separatorBefore:!0,onSelect:()=>void W(t)})),m&&ue.push({label:w(`Paste`),icon:(0,P.jsx)(ka,{size:16}),disabled:!i,shortcut:nn(r.paste),onSelect:()=>m(t)}),T||ue.push({label:w(`Properties`),icon:(0,P.jsx)(Pi,{size:16}),shortcut:nn(r.properties),onSelect:()=>void Vt([t])})}else{if(o&&N.push({label:w(`Open`),icon:(0,P.jsx)(Mi,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&N.push({label:w(`Open in new tab`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>o(n.path,!0)}),m&&N.push({label:w(`Paste into folder`),icon:(0,P.jsx)(ka,{size:14}),disabled:!i,onSelect:()=>m(n.path)}),T||N.push({label:w(`Open in Terminal`),icon:(0,P.jsx)(ba,{size:14}),onSelect:()=>void Ut(n.path)})),!T&&M&&n&&!n.isDirectory&&c(n.path)&&te&&N.push({label:w(`Extract archive`),icon:(0,P.jsx)(Zi,{size:14}),separatorBefore:!0,children:[{label:w(`Extract here`),icon:(0,P.jsx)(Zi,{size:14}),onSelect:()=>te(n.path,`here`)},{label:w(`Extract to a folder named after the archive`),icon:(0,P.jsx)(Zi,{size:14}),onSelect:()=>te(n.path,`named`)},{label:w(`Auto extract to the current folder`),icon:(0,P.jsx)(Zi,{size:14}),onSelect:()=>te(n.path,`auto`)},{label:w(`Extract to…`),icon:(0,P.jsx)(wi,{size:14}),separatorBefore:!0,onSelect:()=>te(n.path,`choose`)}],onSelect:()=>void 0}),!T&&M&&n){let e=[];if(ae.loading)e.push({label:w(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ae.recommended)e.push({label:t.name,group:w(`Suggested apps`),icon:t.icon?(0,P.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,P.jsx)($i,{size:14}),onSelect:()=>void Gt(n.path,t.path).then(e=>{e||Ht(n.path)})});for(let t of ae.other)e.push({label:t.name,group:w(`Other apps`),icon:t.icon?(0,P.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,P.jsx)($i,{size:14}),onSelect:()=>void Gt(n.path,t.path).then(e=>{e||Ht(n.path)})})}e.push({label:w(`Choose another app…`),icon:(0,P.jsx)($i,{size:14}),separatorBefore:!0,onSelect:()=>void Ht(n.path)}),N.push({label:w(`Open with`),icon:(0,P.jsx)($i,{size:14}),children:e,onSelect:()=>void Ht(n.path)})}if(T||N.push({label:w(`Compress`),icon:(0,P.jsx)(Zi,{size:14}),separatorBefore:!0,children:[{label:w(`Compress to ZIP`),icon:(0,P.jsx)(Zi,{size:14}),onSelect:()=>void me(e.paths)},{label:w(`Compress to…`),icon:(0,P.jsx)(Zi,{size:14}),onSelect:()=>re?.(e.paths,I())}],onSelect:()=>void 0}),!T&&(e?.paths.length??0)>0){let e=[{label:w(`Select link source`),icon:(0,P.jsx)(Aa,{size:14}),onSelect:()=>void ye()},...ie?[{label:w(`Cancel selected link`),icon:(0,P.jsx)(Hi,{size:14}),onSelect:()=>$a(null)}]:[],...M&&n?n.isDirectory?[{label:w(`Symbolic link`),icon:(0,P.jsx)(wi,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-folder`)},{label:w(`Directory junction`),icon:(0,P.jsx)(wi,{size:14}),onSelect:()=>void _e(`junction`)},{label:w(`Smart copy`),icon:(0,P.jsx)(Da,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:w(`Smart mirror`),icon:(0,P.jsx)(Da,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:w(`Multi-version smart copy`),icon:(0,P.jsx)(Da,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:w(`Hardlink copy`),icon:(0,P.jsx)(Da,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:w(`Symbolic link copy`),icon:(0,P.jsx)(Da,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[{label:w(`Symbolic link`),icon:(0,P.jsx)(Ti,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-file`)},{label:w(`Hard link`),icon:(0,P.jsx)(Ti,{size:14}),onSelect:()=>void _e(`hard`)}]:[]];N.push({label:w(`Create link`),icon:(0,P.jsx)(Aa,{size:14}),children:e,onSelect:()=>void 0})}!T&&n?.isDirectory&&oe!==null&&N.push({label:w(`Case-sensitive names`),icon:(0,P.jsx)(Ea,{size:14}),checked:oe,onSelect:()=>void ge()}),N.push({label:w(`Copy as path`),icon:(0,P.jsx)(Da,{size:14}),onSelect:()=>void he(e.paths)}),b&&N.push({label:w(`Add to file tray`),icon:(0,P.jsx)(Sa,{size:14}),onSelect:()=>b(e.paths)}),!T&&(F?S:x)&&N.push({label:w(F?`Remove from favorites`:`Add to favorites`),icon:F?(0,P.jsx)(Ta,{size:14}):(0,P.jsx)(wa,{size:14}),onSelect:()=>F?S?.(fe):x?.(fe)}),T||N.push({label:w(`Show in Explorer`),icon:(0,P.jsx)(wi,{size:14}),separatorBefore:!0,onSelect:()=>void W(fe[0])}),f&&ue.push({label:w(`Cut`),icon:(0,P.jsx)(Oa,{size:16}),shortcut:nn(r.cut),onSelect:()=>f(e.paths,!0)},{label:w(`Copy`),icon:(0,P.jsx)(Da,{size:16}),shortcut:nn(r.copy),onSelect:()=>f(e.paths,!1)}),M&&n&&u&&ue.push({label:w(`Rename`),icon:(0,P.jsx)(sa,{size:16}),shortcut:nn(r.rename),onSelect:()=>u(n.path)}),d&&ue.push({label:w(`Delete`),icon:(0,P.jsx)(Bi,{size:16}),danger:!0,shortcut:nn(r.delete),onSelect:()=>d(e.paths)}),T||ue.push({label:w(`Properties`),icon:(0,P.jsx)(Pi,{size:16}),shortcut:nn(r.properties),onSelect:()=>void Vt(e.paths)})}if(D.loading)N.push({label:w(`More actions`),icon:(0,P.jsx)($i,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(D.verbs.length>0){let e={items:[],children:new Map};for(let t of D.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,P.jsx)(Mo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Jt(ce,D.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];N.push({label:w(D.safe?`More actions`:`More actions (extensions)`),icon:(0,P.jsx)($i,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,P.jsx)(yo,{items:N,onClose:a,quick:ue,x:e.x,y:e.y})}function Mo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,P.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,P.jsx)(Mi,{size:14});case`document`:return(0,P.jsx)(aa,{size:14});case`cut`:return(0,P.jsx)(Oa,{size:14});case`copy`:return(0,P.jsx)(Da,{size:14});case`paste`:return(0,P.jsx)(ka,{size:14});case`trash`:return(0,P.jsx)(Bi,{size:14});case`pencil`:return(0,P.jsx)(sa,{size:14});case`gear`:return(0,P.jsx)(Pi,{size:14});case`star`:return(0,P.jsx)(ma,{size:14});case`pin`:return(0,P.jsx)(Fi,{size:14});case`executable`:return(0,P.jsx)($i,{size:14});case`share`:return(0,P.jsx)(Aa,{size:14});case`arrow`:return(0,P.jsx)(Mi,{size:14});default:return(0,P.jsx)(Gi,{size:14})}}function No(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function Po({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=J(),[l,u]=(0,E.useState)(null),d=(0,E.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,E.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Fo,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,P.jsx)(Io,{children:f?.label??``}):(0,P.jsx)(Lo,{children:a}),a===void 0&&(0,P.jsx)(Ro,{children:(0,P.jsx)(Ni,{size:11})})]}),l&&(0,to.createPortal)((0,P.jsx)(zo,{"aria-label":c(`Options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,P.jsxs)(Bo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,P.jsx)(Vo,{children:t.label}),t.value===e&&(0,P.jsx)(Vi,{size:11})]},t.value))}),document.body)]})}var Fo=_.button`
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
`,Io=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lo=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,Ro=_.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,zo=_.div`
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
    ${po}
`,Bo=_.button`
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
`,Vo=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ho=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],Uo=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],Wo=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],Go=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Ko=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function qo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=J(),a=(0,E.useRef)(null),[o,s]=(0,E.useState)(e),[c,l]=(0,E.useState)(t),[u,d]=(0,E.useState)(`zip`),[f,p]=(0,E.useState)(`5`),[m,h]=(0,E.useState)(`default`),[g,_]=(0,E.useState)(`none`),[v,y]=(0,E.useState)(``),[b,x]=(0,E.useState)(`0`),[S,ee]=(0,E.useState)(!1);(0,E.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let te=Ho.find(e=>e.value===u)??Ho[0],ne=u===`zip`||u===`zipx`,re=g!==`none`,C=ne||u===`7z`,w=u===`zip`||u===`7z`,ie=async()=>{if(S||!c.trim()||!o||re&&v.length===0)return;ee(!0);let e=await r({directory:o,name:c.trim(),format:u,level:te.level?Number(f):0,method:ne?m:null,encryption:C?g:`none`,password:re?v:void 0,splitSize:w?Number(b):0});ee(!1),e&&n()};return(0,to.createPortal)((0,P.jsx)(Jo,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,P.jsxs)(Yo,{"aria-modal":`true`,role:`dialog`,children:[(0,P.jsx)(Xo,{children:i(`Compress to…`)}),(0,P.jsxs)(Zo,{children:[(0,P.jsx)(Qo,{children:i(`Archive name`)}),(0,P.jsx)($o,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ie()}}),(0,P.jsx)(es,{children:te.extension})]}),(0,P.jsxs)(Zo,{children:[(0,P.jsx)(Qo,{children:i(`Format`)}),(0,P.jsx)(Po,{onChange:e=>d(e),options:Ho.map(e=>({value:e.value,label:i(cr(e.label))})),value:u,width:236,zIndex:3700})]}),(0,P.jsxs)(Zo,{children:[(0,P.jsx)(Qo,{children:i(`Method`)}),(0,P.jsx)(Po,{disabled:!ne,onChange:h,options:Uo.map(e=>({...e,label:i(cr(e.label))})),value:ne?m:`default`,width:236,zIndex:3700})]}),(0,P.jsxs)(Zo,{children:[(0,P.jsx)(Qo,{children:i(`Encryption`)}),(0,P.jsx)(Po,{disabled:!C,onChange:e=>{_(e),e===`none`&&y(``)},options:Wo.map(e=>({...e,label:i(cr(e.label))})),value:C?g:`none`,width:236,zIndex:3700})]}),re&&(0,P.jsxs)(Zo,{children:[(0,P.jsx)(Qo,{children:i(`Password`)}),(0,P.jsx)($o,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,P.jsxs)(Zo,{children:[(0,P.jsx)(Qo,{children:i(`Split volumes`)}),(0,P.jsx)(Po,{disabled:!w,onChange:x,options:Go.map(e=>({...e,label:i(cr(e.label))})),value:w?b:`0`,width:236,zIndex:3700})]}),(0,P.jsxs)(Zo,{children:[(0,P.jsx)(Qo,{children:i(`Compression level`)}),(0,P.jsx)(Po,{disabled:!te.level,onChange:p,options:Ko.map(e=>({...e,label:i(cr(e.label))})),value:te.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,P.jsxs)(Zo,{$stack:!0,children:[(0,P.jsx)(Qo,{children:i(`Destination`)}),(0,P.jsxs)(ts,{children:[(0,P.jsx)(ns,{title:o,children:o}),(0,P.jsx)(is,{disabled:S,onClick:()=>void Ra(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,P.jsxs)(rs,{children:[(0,P.jsx)(is,{disabled:S,onClick:n,type:`button`,children:i(`Cancel`)}),(0,P.jsx)(as,{disabled:S||!c.trim()||re&&v.length===0,onClick:()=>void ie(),type:`button`,children:i(S?`Compressing…`:`Compress`)})]})]})}),document.body)}var Jo=_.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${_o}
`,Yo=_.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${fo}
`,Xo=_.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Zo=_.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Qo=_.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,$o=_.input`
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
`,es=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,ts=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,ns=_.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rs=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,is=_.button`
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
`,as=_(is)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function os({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=J(),c=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,to.createPortal)((0,P.jsx)(ss,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,P.jsxs)(cs,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(ls,{children:t}),(0,P.jsx)(us,{children:n}),(0,P.jsxs)(ds,{children:[(0,P.jsx)(fs,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,P.jsx)(fs,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var ss=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${_o}
`,cs=_.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${fo}
`,ls=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,us=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,ds=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,fs=_.button`
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
`,ps=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),ms=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),hs=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),gs=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function _s({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=J(),[l,u]=(0,E.useState)(!1),[d,f]=(0,E.useState)(!1),[p,m]=(0,E.useState)(!1),[h,g]=(0,E.useState)(0),[_,v]=(0,E.useState)(0),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(!1),[ee,te]=(0,E.useState)(!1),ne=(0,E.useRef)(null),re=(0,E.useRef)(null),C=(0,E.useRef)(null),w=(0,E.useRef)(null),[ie,T]=(0,E.useState)(()=>{let e=ir(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),D=e?.path??null,O=xn(D),ae=e?vs(e.name):``,k=!!e&&!e.isDirectory&&ps.has(ae),oe=!!e&&!e.isDirectory&&ms.has(ae),A=!!e&&!e.isDirectory&&hs.has(ae),se=!!e&&!e.isDirectory&&gs.has(ae),j=!!e&&!e.isDirectory&&ae===`pdf`,M=En(k?O:null,512,e?.modified??0),ce=On(A?O:null,e?.modified??0,ae),le=On(k||oe?O:null,e?.modified??0,ae),N=kn(j?O:null,e?.modified??0),ue=bn(!k&&!oe&&!A&&!se&&!j?O:null,e?.isDirectory??!1);if((0,E.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),te(!1)},[D]),(0,E.useEffect)(()=>{if(!O||!se){b(null),S(!1);return}let e=!0;return S(!0),b(null),Re(O).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`Could not read this file.`)}),S(!1))}),()=>{e=!1}},[O,se]),!e&&!s)return null;let de=e=>{C.current={x:e.clientX,width:re.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=C.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},F=e=>{C.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},I=e=>{w.current={y:e.clientY,height:ie},e.currentTarget.setPointerCapture(e.pointerId)},pe=e=>{let t=w.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);T(n),ar(`yafm.preview.media.height`,n)},me=e=>{w.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,P.jsxs)(bs,{$open:r,children:[r&&(0,P.jsx)(xs,{onPointerDown:de,onPointerMove:fe,onPointerUp:F,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,P.jsx)(Ss,{ref:re,style:{width:r?t:0},children:(0,P.jsxs)(Cs,{children:[(0,P.jsx)(wi,{size:56}),(0,P.jsx)(`span`,{children:s})]})})]});let he=()=>{let e=ne.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,P.jsxs)(bs,{$open:r,children:[r&&(0,P.jsx)(xs,{onPointerDown:de,onPointerMove:fe,onPointerUp:F,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(Ss,{ref:re,style:{width:r?t:0},children:[(0,P.jsx)(ws,{style:{height:ie},children:k&&le&&!l?(0,P.jsxs)(Es,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,P.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:he,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:M??void 0,preload:`metadata`,ref:ne,src:le}),(0,P.jsx)(Ds,{$visible:!d,onClick:he,title:c(`Play`),type:`button`,children:(0,P.jsx)(ja,{size:28})}),(0,P.jsxs)(Os,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,P.jsxs)(ks,{children:[(0,P.jsx)(`span`,{children:ys(_)}),(0,P.jsx)(`span`,{children:ys(h)})]}),(0,P.jsx)(As,{"aria-label":c(`Seek`),max:h||0,min:0,onChange:e=>{let t=ne.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):oe&&le?(0,P.jsx)(`audio`,{controls:!0,src:le}):A&&ce?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:ce}):j&&N&&!ee?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>te(!0),src:N}):j?(0,P.jsx)(Ti,{size:64}):se?(0,P.jsx)(js,{children:x||!y?(0,P.jsx)(Ns,{children:c(`Loading…`)}):y.error?(0,P.jsx)(Ns,{children:y.error}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Ms,{children:y.text}),y.truncated&&(0,P.jsx)(Ns,{children:c(`Showing the first 256 KB.`)})]})}):k&&M?(0,P.jsx)(`img`,{alt:``,src:M}):ue?(0,P.jsx)(`img`,{alt:``,src:ue}):e.isDirectory?(0,P.jsx)(wi,{size:64}):(0,P.jsx)(Ti,{size:64})}),(0,P.jsx)(Ts,{onDoubleClick:()=>{T(210),ar(`yafm.preview.media.height`,210)},onPointerDown:I,onPointerMove:pe,onPointerUp:me,title:c(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(Ps,{children:[(0,P.jsx)(Fs,{title:e.path,children:e.name}),o&&(0,P.jsx)(Is,{children:o}),(0,P.jsx)(Ls,{children:e.fields.map(e=>(0,P.jsxs)(Rs,{children:[(0,P.jsx)(zs,{children:e.label}),(0,P.jsx)(Bs,{title:e.value,children:e.value})]},e.label))})]})]})]})}function vs(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function ys(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var bs=_.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,xs=_.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Ss=_.aside`
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
`,Cs=_.div`
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
`,ws=_.div`
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
`,Ts=_.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Es=_.div`
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
`,Ds=_.button`
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
`,Os=_.div`
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
`,ks=_.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,As=_.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,js=_.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Ms=_.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Ns=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Ps=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Fs=_.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Is=_.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Ls=_.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Rs=_.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,zs=_.span`
    color: var(--text-muted);
`,Bs=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Vs=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Hs=[...Vs],Us={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},Ws={folder:e=>(0,P.jsx)(wi,{size:e}),home:e=>(0,P.jsx)(Ci,{size:e}),desktop:e=>(0,P.jsx)(ca,{size:e}),documents:e=>(0,P.jsx)(la,{size:e}),downloads:e=>(0,P.jsx)(ua,{size:e}),pictures:e=>(0,P.jsx)(da,{size:e}),music:e=>(0,P.jsx)(fa,{size:e}),videos:e=>(0,P.jsx)(pa,{size:e}),drive:e=>(0,P.jsx)(Ei,{size:e}),image:e=>(0,P.jsx)(Ji,{size:e}),video:e=>(0,P.jsx)(Yi,{size:e}),audio:e=>(0,P.jsx)(Xi,{size:e}),text:e=>(0,P.jsx)(Ki,{size:e}),code:e=>(0,P.jsx)(qi,{size:e}),clock:e=>(0,P.jsx)(Ri,{size:e}),star:e=>(0,P.jsx)(ma,{size:e}),file:e=>(0,P.jsx)(Ti,{size:e}),archive:e=>(0,P.jsx)(Zi,{size:e}),pdf:e=>(0,P.jsx)(Qi,{size:e}),executable:e=>(0,P.jsx)($i,{size:e}),font:e=>(0,P.jsx)(ea,{size:e}),database:e=>(0,P.jsx)(ta,{size:e}),config:e=>(0,P.jsx)(na,{size:e}),spreadsheet:e=>(0,P.jsx)(ra,{size:e}),presentation:e=>(0,P.jsx)(ia,{size:e}),document:e=>(0,P.jsx)(aa,{size:e}),app:e=>(0,P.jsx)(Gi,{size:e}),gear:e=>(0,P.jsx)(Pi,{size:e}),pin:e=>(0,P.jsx)(Fi,{size:e}),trash:e=>(0,P.jsx)(Bi,{size:e}),overview:e=>(0,P.jsx)(oa,{size:e}),book:e=>(0,P.jsx)(ha,{size:e}),briefcase:e=>(0,P.jsx)(ga,{size:e}),cloud:e=>(0,P.jsx)(_a,{size:e}),gamepad:e=>(0,P.jsx)(va,{size:e}),camera:e=>(0,P.jsx)(ya,{size:e}),terminal:e=>(0,P.jsx)(ba,{size:e}),server:e=>(0,P.jsx)(xa,{size:e}),package:e=>(0,P.jsx)(Sa,{size:e}),globe:e=>(0,P.jsx)(Ca,{size:e}),heart:e=>(0,P.jsx)(wa,{size:e}),share:e=>(0,P.jsx)(xa,{size:e}),favorites:e=>(0,P.jsx)(wa,{size:e})};function Gs(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ks(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Vs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Hs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Gs(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${Us[n]??n}${qs(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function qs(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Js({panel:e,size:t=16}){let n=Sn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,P.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Ws[e.icon]:void 0;if(r)return(0,P.jsx)(P.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,P.jsx)(wi,{size:t});case`recent`:return(0,P.jsx)(Ri,{size:t});case`frequent`:return(0,P.jsx)(ma,{size:t});case`drives`:return(0,P.jsx)(Ei,{size:t});case`home`:return(0,P.jsx)(Ci,{size:t});case`share`:return(0,P.jsx)(xa,{size:t});case`favorites`:return(0,P.jsx)(wa,{size:t});default:return(0,P.jsx)(wi,{size:t})}}function Ys({place:e,size:t=18}){let n=Sn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,P.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Ws[e.icon]?(0,P.jsx)(P.Fragment,{children:Ws[e.icon](t)}):(0,P.jsx)(wi,{size:t})}var Xs=`#64748b`;function Zs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Qs({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=J(),[c,l]=(0,E.useState)(``),[u,d]=(0,E.useState)(`#2dd4bf`),f=(0,E.useRef)(null);(0,E.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,to.createPortal)((0,P.jsxs)($s,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,P.jsxs)(ec,{children:[(0,P.jsx)(`span`,{children:s(`Tags`)}),(0,P.jsx)(tc,{onClick:o,title:s(`Close`),type:`button`,children:(0,P.jsx)(Hi,{size:11})})]}),(0,P.jsxs)(nc,{children:[p.length===0&&(0,P.jsx)(oc,{children:s(`No tags yet.`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,P.jsxs)(rc,{children:[(0,P.jsx)(ic,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>g(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,P.jsxs)(ac,{$color:t,$ink:Zs(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,P.jsx)(Vi,{size:11}),(0,P.jsx)(`span`,{children:e})]})]},e)})]}),(0,P.jsxs)(sc,{children:[(0,P.jsx)(ic,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,P.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,P.jsx)(cc,{onClick:_,type:`button`,children:s(`Add`)})]})]}),document.body)}var $s=_.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.55);
    ${fo}
`,ec=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,tc=_.button`
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
`,nc=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,rc=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,ic=_.input`
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
`,ac=_.button`
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
`,oc=_.span`
    font-size: 11px;
    color: var(--text-muted);
`,sc=_.div`
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
`,cc=_.button`
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
`,lc={file:Ti,folder:wi,text:Ki,code:qi,image:Ji,video:Yi,audio:Xi,archive:Zi,pdf:Qi,executable:$i,font:ea,database:ta,config:na,spreadsheet:ra,presentation:ia,document:aa},uc={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function dc(e){let t=e.lastIndexOf(`.`);return t>0?uc[e.slice(t).toLowerCase()]??`file`:`file`}function fc({name:e,size:t}){let n=lc[e??`file`]??Ti;return(0,P.jsx)(n,{size:t})}function pc({path:e,name:t,isDirectory:n,size:r=18}){let i=bn(e,n);return i?(0,P.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,P.jsx)(wi,{size:r}):(0,P.jsx)(fc,{name:dc(t),size:r})}var mc=`application/x-yafm-paths`,hc=[mc,`text/uri-list`];function gc(e){return e?.types.some(e=>hc.includes(e.toLowerCase()))??!1}function _c(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(mc);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(yc).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var vc=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function yc(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return vc?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function bc(e,t,n=!0){e.dataTransfer.setData(mc,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function xc({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let p=J(),[m,h]=(0,E.useState)(()=>new Set),[g,_]=(0,E.useState)(!1),v=(0,E.useRef)(null),y=(0,E.useMemo)(()=>e.filter(e=>m.has(e.path)),[e,m]),b=(0,E.useMemo)(()=>t.filter(e=>m.has(e.path)),[t,m]),x=(0,E.useRef)(null);if((0,E.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=x.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&gc(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=_c(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let S=new Set([...e,...t].map(e=>e.path)),ee=S.size>0&&[...S].every(e=>m.has(e)),te=S.size,ne=e=>{h(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},re=()=>{h(ee?new Set:S)},C=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},w=e=>{let t=v.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},T=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},D=()=>{let e=y.map(e=>e.path);e.length!==0&&(c(e),h(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},O=()=>{let e=y.map(e=>e.path);e.length!==0&&d(e)},ae=()=>{let e=new Map;for(let t of y)e.set(t.path,!0);for(let t of b)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),h(new Set)},k=(e,t)=>{let n=m.has(e.path);return(0,P.jsxs)(Nc,{$checked:n,draggable:!0,onClick:()=>ne(e.path),onDragStart:r=>{bc(r,n&&m.size>0?[...new Set([...y,...b].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,P.jsx)(Pc,{$checked:n,onClick:t=>{t.stopPropagation(),ne(e.path)},type:`button`,children:n&&(0,P.jsx)(Vi,{size:8})}),(0,P.jsx)(pc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,P.jsxs)(Fc,{children:[(0,P.jsx)(Ic,{children:e.name}),(0,P.jsx)(Lc,{children:ie(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},oe=e=>{gc(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,P.jsxs)(Sc,{$dragging:g,"data-tray":`true`,ref:x,style:{left:i.x,top:i.y},onDragEnter:oe,onDragOver:oe,onDrop:e=>{let{paths:t}=_c(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,P.jsxs)(Cc,{onPointerDown:C,onPointerMove:w,onPointerUp:T,children:[(0,P.jsxs)(wc,{children:[(0,P.jsx)(Sa,{size:13}),p(`Tray`),(0,P.jsx)(Tc,{children:te})]}),(0,P.jsxs)(Ec,{onPointerDown:e=>e.stopPropagation(),children:[(0,P.jsx)(Dc,{onClick:re,title:p(ee?`Select none`:`Select all`),type:`button`,children:p(ee?`None`:`All`)}),(0,P.jsx)(Dc,{onClick:l,title:p(`Remove everything from the tray`),type:`button`,children:p(`Clear`)}),(0,P.jsx)(Oc,{onClick:u,title:p(`Hide the tray`),type:`button`,children:(0,P.jsx)(Hi,{size:10})})]})]}),(0,P.jsxs)(kc,{children:[(0,P.jsxs)(jc,{children:[p(`In this app`),(0,P.jsx)(Tc,{children:e.length})]}),e.length===0&&(0,P.jsx)(Ac,{children:p(`Drag files or folders here`)}),e.map(e=>k(e,!0)),t.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(jc,{$clipboard:!0,children:[p(`Clipboard`),(0,P.jsx)(Tc,{children:t.length}),n&&(0,P.jsx)(Mc,{children:p(`Cut`)})]}),t.map(e=>k(e,n))]})]}),(0,P.jsxs)(Rc,{children:[(0,P.jsx)(zc,{$plain:!0,disabled:y.length===0,onClick:O,title:p(`Write the selected tray entries to the system clipboard`),type:`button`,children:p(`To clipboard`)}),(0,P.jsx)(zc,{disabled:m.size===0||!a,onClick:ae,type:`button`,children:p(`Move here`)}),(0,P.jsx)(zc,{$danger:!0,disabled:y.length===0,onClick:D,type:`button`,children:p(`Remove`)})]})]})}var Sc=_.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${no}
    ${fo}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Cc=_.div`
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
`,wc=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,Tc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Ec=_.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Dc=_.button`
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
`,Oc=_.button`
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
`,kc=_.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Ac=_.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,jc=_.div`
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
`,Mc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Nc=_.div`
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
`,Pc=_.button`
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
`,Fc=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Ic=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lc=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rc=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,zc=_.button`
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
`,Bc={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Vc(){return N.available?await N.request(`share.list`):Bc}async function Hc(e,t){return N.available?await N.request(`share.add`,{path:e,mode:t}):Bc}async function Uc(e){return N.available?await N.request(`share.remove`,{id:e}):Bc}async function Wc(e,t){return N.available?await N.request(`share.mode`,{id:e,mode:t}):Bc}async function Gc(){return N.available?(await N.request(`share.peers`)).peers??[]:[]}async function Kc(){return N.available?(await N.request(`share.peers.refresh`)).peers??[]:[]}async function qc(e,t){N.available&&await N.request(`share.pair.start`,{host:e,port:t})}async function Jc(e,t){N.available&&await N.request(`share.pair.respond`,{requestId:e,accept:t})}async function Yc(e,t){N.available&&await N.request(`share.port`,{mode:t,port:e})}var Xc=`yafm://share/`;function Zc(e){return e.toLowerCase().startsWith(Xc)}function Qc(e){if(!Zc(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function $c(e,t,n=``){let r=`${Xc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function el(e){let t=Qc(e);if(!t||!N.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await N.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:$c(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:$c(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function tl(e){let t=Qc(e);if(!t||!N.available)throw Error(`This shared file is only available in the desktop app.`);let n=await N.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function nl(e){await Ne(await tl(e))}var rl=new Map,il=new Set,al=0;function ol(){al+=1;for(let e of il)e()}function sl(e,t){t?rl.set(e,t):rl.delete(e),ol()}function cl(e){return rl.has(e)}function ll(e,t,n){rl.get(e)?.(t,n)}function ul(e){return il.add(e),()=>il.delete(e)}function dl(){return al}function fl(e){return(0,E.useSyncExternalStore)(ul,dl,dl),{available:cl(e),open:(t,n)=>ll(e,t,n)}}function pl(e){return[...rl.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function ml(e){return(0,E.useSyncExternalStore)(ul,dl,dl),{available:pl(e).length>0,open:(t,n)=>{let r=pl(e).at(-1);r&&ll(r,t,n)}}}var hl=60,gl=300,_l=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],vl=new Set,yl=`yafm.columnWidths`,bl=`yafm.reset-column-widths`,xl=64,Sl=720,Cl=160,wl=190,Tl=120;function El({listing:e,loading:n,error:r,find:i=jn,view:a,showImages:s,imageStripHeight:c=wl,onImageStripHeight:l,onSort:u,onSetTags:d,onOpen:p,onOpenFile:m,showCheckboxes:h=!0,openOnSingleClick:g=!1,shortcuts:_=Zt,enableShortcuts:b=!0,refreshToken:x=0,onRefresh:S,onRename:ee,onClipboardChanged:te,cutPaths:ne=vl,onTransfer:re,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:D,onPaste:O,confirmDelete:ae=!1,previewVideoAudio:k=!1,previewVideoAutoplay:oe=!1,showDetails:A=!0,onPreviewInfo:se,onActivate:j,groupOf:M,onGridScroll:ce,gridFooter:le,allowBackgroundMenu:N=!0,readOnly:ue=!1,onSelectionChange:de,onSelectionCountChange:fe,selectionMenuRequest:F,selectionMenuId:I,singleSelect:pe=!1,pendingRename:me=null,pendingRenameToken:he=0,selectMatchesToken:ge=0}){let L=J(),_e=qn(),ve=(0,E.useRef)(null),ye=(0,E.useRef)(null),R=(0,E.useRef)(null),z=(0,E.useRef)(null),[be,xe]=(0,E.useState)(gl),[Se,Ce]=(0,E.useState)({top:0,height:640}),B=(0,E.useRef)(null),we=(0,E.useRef)(null),[Te,Ee]=(0,E.useState)(null),[De,V]=(0,E.useState)(c),[Oe,ke]=(0,E.useState)(()=>new Set),[Ae,je]=(0,E.useState)(()=>or(yl)??{}),Me=(0,E.useRef)(Oe),Ne=(0,E.useRef)([]);Me.current=Oe,(0,E.useEffect)(()=>de?.([...Oe]),[Oe,de]),(0,E.useEffect)(()=>fe?.(Oe.size),[Oe,fe]),(0,E.useEffect)(()=>{let e=F;if(!e||e.token===Ie.current)return;Ie.current=e.token;let t=[...Me.current];t.length!==0&&(Fe({x:e.x,y:e.y,paths:t,background:!1}),Ot().then(Xe,()=>Xe(!1)))},[F]);let[Pe,Fe]=(0,E.useState)(null),Ie=(0,E.useRef)(0),[Le,Re]=(0,E.useState)(null),[ze,Be]=(0,E.useState)(null),[Ve,He]=(0,E.useState)(null),Ue=(0,E.useRef)(Ve);Ue.current=Ve;let We=(0,E.useRef)(0),Ge=(0,E.useRef)(j);Ge.current=j;let[Ke,qe]=(0,E.useState)(()=>{let e=ir(`yafm.preview.width`,320);return e>=220?e:320}),Je=(0,E.useCallback)(e=>{qe(e),ar(`yafm.preview.width`,e)},[]),[Ye,Xe]=(0,E.useState)(!1),Ze=(0,E.useCallback)((e,t)=>{let n=[...Me.current];n.length!==0&&(Fe({x:e,y:t,paths:n,background:!1}),Ot().then(Xe,()=>Xe(!1)))},[]);(0,E.useEffect)(()=>{if(I)return sl(I,Oe.size>0?Ze:null),()=>sl(I,null)},[I,Oe,Ze]),(0,E.useEffect)(()=>{ke(new Set),He(null),Fe(null),we.current=null},[e?.path]),(0,E.useEffect)(()=>{V(c)},[c]),(0,E.useEffect)(()=>{ke(new Set),He(null),we.current=null},[x]);let Qe=e=>{B.current={y:e.clientY,height:De},e.currentTarget.setPointerCapture(e.pointerId)},$e=e=>{let t=B.current;if(!t)return;let n=Math.max(Tl,Math.round(window.innerHeight*.7));V(Math.min(n,Math.max(Tl,t.height+t.y-e.clientY)))},et=e=>{B.current&&(B.current=null,e.currentTarget.releasePointerCapture(e.pointerId),l?.(De))},tt=()=>{V(wl),l?.(wl)},nt=i.query.length>0,rt=(0,E.useMemo)(()=>_l.filter(e=>a.columns?.includes(e.id)),[a.columns]),it=a.columns?.includes(`linkTarget`)??!1,at=(0,E.useCallback)(e=>Math.min(Sl,Math.max(xl,Ae[e.id]??e.width)),[Ae]),ot=(0,E.useMemo)(()=>`minmax(160px, 1fr) ${rt.map(e=>`${at(e)}px`).join(` `)}`.trim(),[rt,at]),st=(0,E.useRef)(null),ct=(0,E.useRef)(null),lt=()=>Math.floor(ct.current?.getBoundingClientRect().width??Cl),ut=e=>{let t=rt[0];t&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:t.id,start:at(t)},startX:e.clientX,nameStart:lt()})},dt=(e,t)=>{let n=rt[t],r=rt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),st.current={left:{id:n.id,start:at(n)},right:{id:r.id,start:at(r)},startX:e.clientX,nameStart:0})},ft=e=>je(t=>{let n={...t};return delete n[e],sr(yl,n),n});(0,E.useEffect)(()=>{let e=e=>{let t=st.current;if(!t)return;let n=e.clientX-t.startX;je(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Cl),i=Math.min(Math.min(Sl,t.left.start+r),Math.max(xl,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Sl,Math.max(xl,t.left.start+n)),a=Math.min(Math.min(Sl,r-xl),Math.max(Math.max(xl,r-Sl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{st.current&&(st.current=null,je(e=>(sr(yl,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,E.useEffect)(()=>{let e=()=>je(()=>(sr(yl,{}),{}));return window.addEventListener(bl,e),()=>window.removeEventListener(bl,e)},[]);let H=(0,E.useMemo)(()=>e?kl(e.entries.map(t=>{let n=t.isDirectory?Jn(_e,t.fullPath):void 0,r=n?.name||t.name;return{entry:t,place:n,label:r,ranges:nt?Mn(r,i):null,tags:e.tags[t.name]??[],cut:ne.has(t.fullPath)}}).filter(e=>!nt||i.mode===`dim`||e.ranges!==null),a,e,L):[],[e?.entries,e?.tags,a.sort===`size`||a.sort===`items`?e?.folderSizes:null,a.sort===`size`||a.sort===`items`?e?.counts:null,nt,i,_e,a.sort,a.sortDescending,L,ne]);Ne.current=H,(0,E.useEffect)(()=>{ge!==0&&ke(new Set(Ne.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[ge]);let pt=Math.max(40,a.iconSize+20),mt=Math.max(0,Math.floor(Se.top/pt)-4),ht=Math.min(H.length,mt+Math.ceil(Se.height/pt)+10),gt=(0,E.useMemo)(()=>H.slice(mt,ht),[H,mt,ht]);(0,E.useEffect)(()=>{let e=z.current;if(!e||a.mode!==`list`)return;let t=()=>Ce(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[a.mode]),(0,E.useEffect)(()=>{Ce(e=>({...e,top:0})),z.current&&(z.current.scrollTop=0)},[e?.path]),(0,E.useEffect)(()=>{if(i.currentPath){if(a.mode===`list`){let e=H.findIndex(e=>e.entry.fullPath===i.currentPath),t=z.current;if(e<0||!t)return;let n=e*pt;(n<t.scrollTop||n+pt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ve.current?.scrollIntoView({block:`nearest`})}},[i.currentPath,a.mode,H,pt]);let _t=(0,E.useMemo)(()=>H.slice(0,be),[H,be]);(0,E.useEffect)(()=>{let e=ye.current;if(!e||e.length===0)return;let n=e.filter(e=>H.some(n=>t(n.entry.fullPath,e)));if(n.length===0)return;ye.current=null;let r=n[0],i=H.findIndex(e=>t(e.entry.fullPath,r));i>=0&&xe(e=>Math.max(e,i+gl)),ke(new Set(n)),we.current=r,a.mode===`list`&&z.current&&i>=0?z.current.scrollTop=Math.max(0,i*pt-z.current.clientHeight/2):requestAnimationFrame(()=>ve.current?.scrollIntoView({block:`nearest`}))},[H,pt,a.mode]),(0,E.useEffect)(()=>{xe(gl)},[e?.path]),(0,E.useEffect)(()=>{if(!i.currentPath)return;let e=H.findIndex(e=>e.entry.fullPath===i.currentPath);e>=0&&xe(t=>Math.max(t,e+gl))},[i.currentPath,H]);let vt=(0,E.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&xe(e=>Math.min(H.length,e+gl))},[H.length]),U=a.mode===`grid`,yt=(0,E.useMemo)(()=>{if(!U)return[];if(!M)return Ml(_t,jl);let e=[],t=new Map;for(let n of _t){let r=M(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[_t,U,M]),bt=(0,E.useMemo)(()=>s?H.filter(e=>!e.entry.isDirectory&&Un(e.entry.name)):[],[H,s]),xt=bt.length,St=(0,E.useMemo)(()=>bt.slice(0,hl),[bt]),Ct=(0,E.useMemo)(()=>s?Ml(St,Al):[],[St,s]),wt=(0,E.useMemo)(()=>H.map(e=>e.entry.fullPath),[H]),Tt=H.length>0&&Oe.size>=H.length,Et=Oe.size>0&&!Tt,kt=()=>{pe||(Tt?Lt():ke(new Set(wt)))},At=e?.path??``,jt=(0,E.useCallback)((e,t)=>{if(pe){we.current=t,ke(new Set([t]));return}let n=e.ctrlKey||e.metaKey;ke(r=>{if(e.shiftKey&&we.current!==null){let e=wt.indexOf(we.current),i=wt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(wt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),we.current=t,e}return we.current=t,new Set([t])})},[wt,pe]),Mt=(0,E.useCallback)(e=>{pe?(we.current=e,ke(new Set([e]))):(we.current=e,ke(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[pe]),Lt=(0,E.useCallback)(()=>{we.current=null,ke(new Set)},[]);(0,E.useEffect)(()=>{if(he===0||!me||We.current===he||!e?.entries.some(e=>e.fullPath===me))return;We.current=he,we.current=me,ke(new Set([me])),He({path:me,value:v(me)});let t=H.findIndex(e=>e.entry.fullPath===me),n=z.current;if(!(t<0||!n)){if(a.mode===`list`){let e=t*pt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(me)}"]`)?.scrollIntoView({block:`nearest`})})}},[z,e,me,he,pt,H,a.mode]),(0,E.useEffect)(()=>{if(!Ve)return;let e=H.findIndex(e=>e.entry.fullPath===Ve.path),t=z.current;if(!(e<0||!t)){if(a.mode===`list`){let n=e*pt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ve.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[z,Ve,pt,H,a.mode]);let Rt=(0,E.useCallback)(()=>Fe(null),[]),zt=(0,E.useCallback)((e,t)=>{e.isDirectory?p(e.fullPath,en(t)):m?.(e.fullPath,en(t))},[p,m]),Ht=(0,E.useCallback)((e,t,n)=>{Ee({entry:e,x:t,y:n})},[]),Wt=(0,E.useRef)(null),Gt=(0,E.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;bc(e,Oe.has(n)?[...Oe]:[n])},[Oe]),Kt=(0,E.useCallback)(e=>{if(!gc(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Wt.current=t?.dataset.directory===`true`?t.dataset.path??At:At,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[At]),qt=(0,E.useCallback)(e=>{if(ue)return;let{paths:t,move:n}=_c(e),r=Wt.current??At;Wt.current=null,t.length!==0&&re&&(e.preventDefault(),re(t,r,!e.ctrlKey&&n))},[At,re,ue]),W=(0,E.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),ue||!t&&!N)return;let n=Me.current;t&&!n.has(t)&&ke(new Set([t])),t&&(we.current=t);let r=t?n.has(t)?[...n]:[t]:[];Fe({x:e.clientX,y:e.clientY,paths:r,background:!t}),Ot().then(Xe,()=>Xe(!1))},[N,At]),G=(0,E.useCallback)(()=>S?.(),[S]),Jt=(e,t)=>{we.current=e,ke(new Set([e])),t&&He({path:e,value:v(e)}),G()},Yt=Le&&(0,P.jsx)(qo,{initialDirectory:At,initialName:Le.name,onCancel:()=>Re(null),onCompress:async e=>{let t=await K(Le.paths,e);return!t.ok||!t.path?(Ua(t.error??L(`Could not create the archive.`)),!1):(Jt(t.path,!1),!0)}}),Xt=async(e,t=!1)=>{let n=e,r=t;if(e.some(Zc)){let t=[];for(let n of e)if(!Zc(n))t.push(n);else{if(Ne.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){Ua(L(`Folders on a shared device cannot be copied yet.`));return}try{t.push(await tl(n))}catch(e){Ua(e instanceof Error?e.message:L(`The file could not be copied.`));return}}n=t,r=!1}await Dt(n,r)&&(Xe(!0),te?.())},Qt=async e=>{if(!e)return;let t=await Nt(e);t.cancelled||(t.ok?(ye.current=t.created,G(),O?.()):Ua(L(`Nothing on the clipboard could be pasted here.`)))},$t=async(e,t=!1)=>{if(!At)return;let n=e===null?await It(At,t):await Bt(At,e);!n.ok||n.path===null?Ua(n.error??L(`Could not create the item.`)):(we.current=n.path,ke(new Set([n.path])),He({path:n.path,value:v(n.path)}),G())},nn=e=>{ke(new Set([e.fullPath])),we.current=e.fullPath,He({path:e.fullPath,value:e.name})},rn=(0,E.useCallback)(e=>He(t=>t&&{...t,value:e}),[]),on=(0,E.useCallback)(()=>He(null),[]),sn=(0,E.useCallback)(async()=>{let e=Ue.current;if(He(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Ne.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Ft(e.path,t);r.ok?(Lt(),r.path&&ee?.(e.path,r.path),G(),window.setTimeout(()=>G(),250)):Ua(r.error??L(`Could not rename the entry.`))},[Lt,ee,G,L]),cn=async(e,t=!1)=>{if((t||ae)&&!await ln(e,t))return;let n=await Pt(e,t);if(!n.ok&&n.needsPermanent){if(!await ln(e,!0))return;n=await Pt(e,!0)}if(n.ok)Lt(),G();else{if(n.cancelled)return;Ua(n.error??L(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},ln=(0,E.useCallback)((e,t)=>new Promise(n=>Be({paths:e,permanent:t,resolve:n})),[]),un=(0,E.useCallback)(e=>{Be(t=>(t?.resolve(e),null))},[]);(0,E.useEffect)(()=>{if(!b||Pe)return;let e=e=>{if(an(e.target))return;Ge.current?.();let t=tn(e),n=[...Oe],r=n.length===1?H.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(wt.length===0)return;e.preventDefault();let n=we.current&&wt.includes(we.current)?we.current:Oe.size===1?[...Oe][0]:null,r=n?wt.indexOf(n):-1,i=t===`home`?0:t===`end`?wt.length-1:Math.max(0,Math.min(wt.length-1,r+(t===`arrowdown`?1:-1))),a=wt[i];ke(new Set([a])),we.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===_.copy?i(()=>{n.length>0&&Xt(n)}):t===_.cut?i(()=>{n.length>0&&Xt(n,!0)}):t===_.paste?i(()=>void Qt(At)):t===_.delete?i(()=>{n.length>0&&cn(n)}):t===_.deletePermanently?i(()=>{n.length>0&&cn(n,!0)}):t===_.selectAll?i(()=>{ke(new Set(wt)),we.current=wt[0]??null}):t===_.invertSelection?i(()=>{ke(new Set(wt.filter(e=>!Oe.has(e)))),we.current=wt[0]??null}):t===_.rename&&r?i(()=>void nn(r)):t===_.open&&r?i(()=>{r.isDirectory?p(r.fullPath):m?.(r.fullPath)}):t===_.newFolder||t===`f10`?i(()=>void $t(null)):t===_.terminal?i(()=>void Ut(At)):t===_.properties&&i(()=>void Vt(n.length>0?n:At?[At]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[wt,Xt,$t,At,b,Pe,p,m,Qt,cn,nn,H,Oe,_]);let dn=ze&&(0,P.jsx)(os,{confirmLabel:ze.permanent?L(`Delete`):L(`Move`),danger:ze.permanent,message:ze.permanent?L(`Permanently delete {target}? This cannot be undone.`,{target:ze.paths.length===1?L(`this item`):L(`{count} items`,{count:ze.paths.length})}):L(`Move {target} to the recycle bin?`,{target:ze.paths.length===1?L(`this item`):L(`{count} items`,{count:ze.paths.length})}),onCancel:()=>un(!1),onConfirm:()=>un(!0),open:!0,title:ze.permanent?L(`Delete permanently`):L(`Move to the recycle bin`)}),q=(0,E.useMemo)(()=>{if(!e||Oe.size===0)return null;let t=wt.find(e=>Oe.has(e));return t?H.find(e=>e.entry.fullPath===t)?.entry??null:null},[wt,e,H,Oe]),fn=(0,E.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:L(`Type`),value:L(`Folder`)},{label:L(`Location`),value:e.parent??`—`},{label:L(`Path`),value:e.path},{label:L(`Size`),value:f(t)},{label:L(`Items`),value:o(L,n,`1 item`,`{count} items`)},{label:L(`Modified`),value:`—`},{label:L(`Created`),value:`—`},{label:L(`Attributes`),value:`—`}]}},[e,L]),pn=(0,E.useMemo)(()=>{if(!q||!e)return null;let t=q.isDirectory?e.folderSizes[q.name]:void 0,n=e.tags[q.name]??[],r=q.name.lastIndexOf(`.`),i=r>0&&r<q.name.length-1?q.name.slice(r+1).toUpperCase():`—`;return{name:q.name,path:q.fullPath,isDirectory:q.isDirectory,size:q.size,modified:q.modified,created:q.created,fields:[{label:L(`Type`),value:Fl(q,L)},...q.isEncrypted?[{label:L(`Encryption`),value:L(`Password required`)}]:[],{label:L(`Extension`),value:q.isDirectory?`—`:i},{label:L(`Location`),value:e.path},{label:L(`Full path`),value:q.fullPath},{label:L(`Size`),value:q.isDirectory?t===void 0?`—`:f(t):f(q.size)},...q.isDirectory?[{label:L(`Items`),value:`${e.counts[q.name]??`—`}`}]:[],{label:L(`Modified`),value:y(q.modified)},{label:L(`Created`),value:y(q.created)},{label:L(`Link status`),value:q.linkTarget==null?q.linkCount>1?L(`Hard link`):`—`:q.linkValid?`OK`:L(`Broken`)},...q.linkTarget?[{label:L(`Target`),value:q.linkTarget}]:[],...q.linkCount>1?[{label:L(`Links`),value:String(q.linkCount)}]:[],{label:L(`Attributes`),value:[q.isHidden?L(`Hidden`):``,q.isSystem?L(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:L(`Tags`),value:n.join(`, `)}]:[]]}},[e,q,L]),mn=Pe?.paths.length===1?Pe.paths[0]:null,hn=mn?H.find(e=>e.entry.fullPath===mn)?.entry:void 0,gn=hn?{path:hn.fullPath,isDirectory:hn.isDirectory}:null,_n=pn??fn,vn=(0,E.useRef)(se);vn.current=se,(0,E.useEffect)(()=>{vn.current?.(_n)},[se,_n]);let yn=A&&_n&&(0,P.jsx)(_s,{info:_n,onWidth:Je,selectionNote:Oe.size>1?o(L,Oe.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:k,videoAutoplay:oe,width:Ke});return r&&!e?(0,P.jsx)(zu,{children:(0,P.jsx)(Vu,{children:r})}):!e&&!n?(0,P.jsx)(zu,{children:(0,P.jsx)(Bu,{children:L(`Nothing selected.`)})}):a.mode===`grid`?(0,P.jsxs)(nu,{onPointerDown:j,children:[(0,P.jsxs)(ru,{children:[(0,P.jsxs)(du,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Lt()},onContextMenu:e=>W(e),onDragOver:Kt,onDragStart:Gt,onDrop:qt,onScroll:e=>{ce?.(e.currentTarget),vt(e.currentTarget)},children:[h&&H.length>0&&(0,P.jsxs)($l,{children:[(0,P.jsx)(Zl,{$checked:!pe&&Tt,$partial:!pe&&Et,"aria-label":L(Tt?`Select none`:`Select all`),disabled:pe,onClick:kt,title:L(Tt?`Select none`:`Select all`),type:`button`,children:Tt?(0,P.jsx)(Vi,{size:10}):Et?(0,P.jsx)(Ql,{}):null}),(0,P.jsx)(`span`,{children:L(Tt?`Select none`:`Select all`)})]}),n&&!e?(0,P.jsx)(gu,{$size:a.gridSize,children:(0,P.jsx)(Vl,{size:a.gridSize})}):(0,P.jsx)(Ul,{counts:e?.counts,currentPath:nt?i.currentPath:null,groups:yt,gridSize:a.gridSize,innerRef:ve,onContextMenu:W,onOpen:p,onOpenFile:m,onRenameCancel:on,onRenameChange:rn,onRenameCommit:sn,onSelect:jt,onToggle:Mt,openOnSingleClick:g,renaming:Ve,searching:nt,selected:Oe,showCheckboxes:h,showTarget:it}),!n&&e&&H.length===0&&(0,P.jsx)(Ru,{children:(0,P.jsx)(Bu,{children:r??(nt&&i.mode===`hide`?L(`No entries match the search.`):L(`This folder is empty.`))})}),le]}),Pe&&(0,P.jsx)(jo,{canPaste:Ye,directory:At,allowCompression:!0,menu:Pe,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:D,onArchiveCreated:Jt,onClose:Rt,onCompressTo:(e,t)=>Re({paths:e,name:t}),onCopy:Xt,onCreateFile:e=>void $t(e),onCreateFolder:e=>void $t(null,e),onDelete:cn,onOpen:p,onOpenFile:m,onPaste:Qt,onRefresh:G,onRename:e=>{let t=H.find(t=>t.entry.fullPath===e)?.entry;t&&nn(t)},shortcuts:_,target:gn}),Yt,dn]}),yn]}):(0,P.jsxs)(nu,{onPointerDown:j,children:[(0,P.jsxs)(ru,{children:[(0,P.jsxs)(iu,{onScroll:e=>{z.current&&z.current.scrollLeft!==e.currentTarget.scrollLeft&&(z.current.scrollLeft=e.currentTarget.scrollLeft)},ref:R,style:{gridTemplateColumns:ot},children:[(0,P.jsxs)(Jl,{ref:ct,children:[h&&(0,P.jsx)(Zl,{$checked:!pe&&Tt,$partial:!pe&&Et,"aria-label":L(Tt?`Select none`:`Select all`),disabled:pe,onClick:e=>{e.stopPropagation(),kt()},title:L(Tt?`Select none`:`Select all`),type:`button`,children:Tt?(0,P.jsx)(Vi,{size:10}):Et?(0,P.jsx)(Ql,{}):null}),(0,P.jsxs)(au,{onClick:()=>u(`name`),type:`button`,children:[L(`Name`),Dl(a,`name`)]}),(0,P.jsx)(Xl,{"aria-label":L(`Resize column`),onDoubleClick:()=>rt[0]&&ft(rt[0].id),onPointerDown:ut,role:`separator`})]}),rt.map((e,t)=>(0,P.jsxs)(Yl,{children:[(0,P.jsxs)(au,{onClick:()=>u(e.id),type:`button`,children:[L(e.label),Dl(a,e.id)]}),t<rt.length-1&&(0,P.jsx)(Xl,{"aria-label":L(`Resize column`),onDoubleClick:()=>ft(e.id),onPointerDown:e=>dt(e,t),role:`separator`})]},e.id))]}),(0,P.jsxs)(ou,{onClick:e=>{e.target===e.currentTarget&&Lt()},onContextMenu:e=>W(e),onDragOver:Kt,onDragStart:Gt,onDrop:qt,onScroll:e=>{R.current&&R.current.scrollLeft!==e.currentTarget.scrollLeft&&(R.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;Ce(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:z,children:[n&&!e?(0,P.jsx)(Bl,{template:ot,columns:rt.length}):(0,P.jsxs)(P.Fragment,{children:[mt>0&&(0,P.jsx)(`div`,{style:{height:mt*pt}}),gt.map(t=>{let n=t.entry.fullPath;return(0,P.jsx)(Gl,{current:nt&&n===i.currentPath,dim:nt&&t.ranges===null,height:pt,iconSize:a.iconSize,innerRef:ve,listing:e,onContextMenu:W,onOpen:zt,onRenameCancel:on,onRenameChange:rn,onRenameCommit:sn,onSelect:jt,onTagEdit:Ht,onToggle:Mt,openOnSingleClick:g,renaming:Ve?.path===n?{value:Ve.value}:null,row:t,selected:Oe.has(n),showCheckboxes:h,showTarget:it,template:ot,visible:rt},n)}),ht<H.length&&(0,P.jsx)(`div`,{style:{height:(H.length-ht)*pt}})]}),!n&&e&&H.length===0&&(0,P.jsx)(zu,{children:(0,P.jsx)(Bu,{children:r??(nt&&i.mode===`hide`?L(`No entries match the search.`):L(`This folder is empty.`))})})]}),s&&bt.length>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(su,{onDoubleClick:tt,onPointerDown:Qe,onPointerMove:$e,onPointerUp:et,title:L(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(cu,{style:{height:De},children:[(0,P.jsxs)(lu,{children:[L(`Preview`),(0,P.jsx)(uu,{children:xt>hl?`${St.length} / ${xt}`:xt})]}),(0,P.jsx)(du,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Lt()},onContextMenu:e=>W(e),children:(0,P.jsx)(Ul,{counts:e?.counts,currentPath:nt?i.currentPath:null,groups:Ct,gridSize:a.gridSize,onContextMenu:W,onOpen:p,onOpenFile:m,onSelect:jt,onToggle:Mt,openOnSingleClick:g,searching:nt,selected:Oe,showCheckboxes:h,showTarget:it})})]})]}),Te&&e&&(0,P.jsx)(Qs,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>d?.(Te.entry.name,e,t),onClose:()=>Ee(null),tags:e.tags[Te.entry.name]??[],x:Te.x,y:Te.y}),Pe&&(0,P.jsx)(jo,{canPaste:Ye,directory:At,allowCompression:!0,menu:Pe,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:ie,favoritePaths:T,onExtractArchive:D,onArchiveCreated:Jt,onClose:Rt,onCompressTo:(e,t)=>Re({paths:e,name:t}),onCopy:Xt,onCreateFile:e=>void $t(e),onCreateFolder:e=>void $t(null,e),onDelete:cn,onOpen:p,onOpenFile:m,onPaste:Qt,onRefresh:G,onRename:e=>{let t=H.find(t=>t.entry.fullPath===e)?.entry;t&&nn(t)},shortcuts:_,target:gn}),Yt,dn]}),yn]})}function Dl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Ol=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function kl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Fl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Ol.compare(String(r),String(i));return t.sortDescending?-o:o})}var Al=Bn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Hn(t.entry.name)===e})),jl=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...Al.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function Ml(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Nl(e){return Math.max(24,Math.min(e-56,160))}var Pl={file:`File`,folder:`Folder`,text:`Text file`,code:`source file`,image:`image`,video:`Video`,audio:`Audio`,archive:`archive`,pdf:`PDF`,executable:`Application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Fl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Pl[dc(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Il(e,t,n,r){switch(e){case`type`:return Fl(t,r);case`size`:return Rl(t,n.folderSizes);case`modified`:return y(t.modified);case`created`:return y(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Ll({name:e,ranges:t}){if(!t||t.length===0)return(0,P.jsx)(P.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,P.jsx)(Lu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,P.jsx)(P.Fragment,{children:n})}function Rl(e,t){if(!e.isDirectory)return f(e.size);let n=t[e.name];return n===void 0?`—`:f(n)}function zl({entry:e,size:t=18}){let n=J(),r=(0,E.useRef)(null),[i,a]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=bn(i?e.fullPath:null,e.isDirectory,t>32),s=Sn(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,P.jsxs)(Kl,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,P.jsx)(fc,{name:e.iconSource.slice(5),size:t}):s?(0,P.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,P.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,P.jsx)(wi,{size:t}):(0,P.jsx)(fc,{name:dc(e.name),size:t}),e.isEncrypted&&(0,P.jsx)(ql,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,P.jsx)(Fa,{size:Math.max(8,Math.round(t*.52))})})]})}function Bl({template:e,columns:t}){return(0,P.jsx)(P.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,P.jsxs)(_u,{style:{gridTemplateColumns:e},children:[(0,P.jsxs)(bu,{children:[(0,P.jsx)(vu,{style:{flexShrink:0,height:18,width:18}}),(0,P.jsx)(vu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,P.jsx)(vu,{style:{width:t%2==0?44:92}},t))]},r))})}function Vl({size:e}){return(0,P.jsx)(P.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,P.jsxs)(ju,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,P.jsx)(Mu,{children:(0,P.jsx)(vu,{style:{height:e,width:e}})}),(0,P.jsx)(Pu,{children:(0,P.jsx)(vu,{style:{height:9,width:`${t}%`}})})]},n))})}var Hl=(0,E.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=J(),x=qn(),S=!e.entry.isDirectory&&Un(e.entry.name),ee=(0,E.useRef)(null),[te,ne]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(!S||te)return;let e=ee.current;if(!e)return;if(!(`IntersectionObserver`in window)){ne(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(ne(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,te]);let re=En(S&&te?e.entry.fullPath:null,192,e.entry.modified),[C,w]=(0,E.useState)(!1),ie=S&&re!==null&&!C,T=e.entry.fullPath,D=t=>{e.entry.isDirectory?v(T,en(t)):y?.(T,en(t))};return(0,P.jsxs)(ju,{$current:t,$dim:n,$image:ie,$selected:s,onClick:e=>{h(e,T),l&&D(e)},onContextMenu:e=>_(e,T),onDoubleClick:e=>{l||D(e)},ref:e=>{ee.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!u,children:[c&&(0,P.jsx)(tu,{$checked:s,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,P.jsx)(Vi,{size:10})}),(0,P.jsx)(Mu,{children:ie?(0,P.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:re}):(0,P.jsx)(Nu,{children:e.place&&x.useIcons?(0,P.jsx)(Ys,{place:e.place,size:r}):(0,P.jsx)(zl,{entry:e.entry,size:r})})}),(0,P.jsxs)(Pu,{children:[u?(0,P.jsx)(Wl,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>p?.(),value:u.value}):(0,P.jsx)(Fu,{$broken:e.entry.linkValid===!1,children:(0,P.jsx)(Ll,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,P.jsxs)(Su,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(Fa,{size:9}),b(`Encrypted`)]}),e.cut&&(0,P.jsxs)(Cu,{title:b(`This item is cut and will move when something is pasted.`),children:[(0,P.jsx)(Oa,{size:9}),b(`Cut`)]}),(0,P.jsx)(Iu,{children:e.entry.isDirectory?i===void 0?Fl(e.entry,b):b(`{type} · {count} items`,{type:Fl(e.entry,b),count:i}):b(`{type} · {size}`,{type:Fl(e.entry,b),size:f(e.entry.size)})}),a&&e.entry.linkTarget&&(0,P.jsxs)(Tu,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,P.jsx)(Ia,{size:9}),(0,P.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Ul({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:p,onOpen:m,onOpenFile:h,onRenameChange:g,onRenameCommit:_,onRenameCancel:v}){let y=J();return(0,P.jsx)(P.Fragment,{children:e.map(e=>(0,P.jsxs)(fu,{children:[(0,P.jsxs)(pu,{children:[y(cr(e.label)),(0,P.jsx)(mu,{children:e.rows.length}),(0,P.jsx)(hu,{})]}),(0,P.jsx)(gu,{$size:t,children:e.rows.map(e=>(0,P.jsx)(Hl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Nl(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:p,onOpen:m,onOpenFile:h,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:v,onRenameChange:g,onRenameCommit:_,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Wl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,E.useRef)(null);return(0,E.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,P.jsx)(wu,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Gl=(0,E.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:p,onSelect:m,onToggle:h,onContextMenu:g,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=J(),ee=qn(),te=e.entry.fullPath;return(0,P.jsxs)(yu,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{m(t,te),o&&_(e.entry,t)},onContextMenu:e=>g(e,te),onDoubleClick:t=>{o||_(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":te,draggable:!p,children:[(0,P.jsxs)(bu,{children:[i&&(0,P.jsx)(eu,{$checked:r,onClick:e=>{e.stopPropagation(),h(te)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`Deselect`:`Select`),type:`button`,children:r&&(0,P.jsx)(Vi,{size:10})}),e.place&&ee.useIcons?(0,P.jsx)(Kl,{children:(0,P.jsx)(Ys,{place:e.place,size:s})}):(0,P.jsx)(zl,{entry:e.entry,size:s}),p?(0,P.jsx)(Wl,{onCancel:x,onChange:y,onCommit:b,value:p.value}):(0,P.jsx)(xu,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,P.jsx)(Ll,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,P.jsxs)(Su,{title:S(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(Fa,{size:9}),S(`Encrypted`)]}),e.cut&&(0,P.jsxs)(Cu,{title:S(`This item is cut and will move when something is pasted.`),children:[(0,P.jsx)(Oa,{size:9}),S(`Cut`)]}),a&&e.entry.linkTarget&&(0,P.jsxs)(Tu,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,P.jsx)(Ia,{size:9}),(0,P.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,P.jsx)(Eu,{children:t.id===`tags`?(0,P.jsx)(Du,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,P.jsx)(Ou,{$color:t,$ink:Zs(t),children:e},e)}):(0,P.jsx)(ku,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,P.jsx)(Au,{children:S(`Broken`)}):Il(t.id,e.entry,d,S)},t.id))]})}),Kl=_.span`
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
`,ql=_.span`
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
`,Jl=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Yl=_.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Xl=_.span`
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
`,Zl=_.button`
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
`,Ql=_.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,$l=_.div`
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
`,eu=_.button`
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
`,tu=_(eu)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,nu=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ru=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,iu=_.div`
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
`,au=_.button`
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
`,ou=_.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,su=_.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,cu=_.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,lu=_.div`
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
`,uu=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,du=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,fu=_.section`
    & + & {
        margin-top: 22px;
    }
`,pu=_.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,mu=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,hu=_.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,gu=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,_u=_.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,vu=_.span`
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
`,yu=_.div`
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
`,bu=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,xu=_.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Su=_.span`
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
`,Cu=_.span`
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
`,wu=_.input`
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
`,Tu=_.span`
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
`,Eu=_.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Du=_.button`
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
`,Ou=_.span`
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
`,ku=_.span`
    color: var(--text-muted);
    font-size: 11px;
`,Au=_.span`
    color: #fca5a5;
`,ju=_.div`
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
`,Mu=_.div`
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
`,Nu=_.span`
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
`,Pu=_.div`
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
`,Fu=_.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Iu=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Lu=_.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Ru=_.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,zu=_.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Bu=_.p`
    font-size: 13px;
    color: var(--text-muted);
`,Vu=_.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Hu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Uu=`/assets/bloom-BpfZWiaG.mp4`,Wu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Gu=`/assets/drift-BRBSQL2_.mp4`,Ku=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,qu=`/assets/ember-CtSz0YxR.mp4`,Ju=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Yu=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],Xu=[{id:`builtin:video:drift`,name:`Drift`,url:Gu,poster:Wu},{id:`builtin:video:ember`,name:`Ember`,url:qu,poster:Ku},{id:`builtin:video:bloom`,name:`Bloom`,url:Uu,poster:Hu}],Zu=Yu.map(e=>({...e,variants:Ju.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:rd(id(e.id,t))}))})),Qu=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>Ju.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:rd(ad(e.id,t))}))),$u=new Map([...Zu.flatMap(e=>e.variants),...Qu].map(e=>[e.id,e])),ed=new Map(Xu.map(e=>[e.id,e]));function td(e){if($u.has(e))return $u.get(e).url;if(ed.has(e))return ed.get(e).url;let t=e.split(`:`)[1];return t?$u.get(`builtin:${t}:indigo`)?.url??null:null}function nd(e){return ed.has(e)}function rd(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function id(e,t){return e===`dunes`?fd(t):e===`tide`?pd(t):dd(t)}function ad(e,t){return e===`skyline`?sd(t):e===`orbit`?cd(t):od(t)}function od({accent:e,secondary:t}){let n=ud(t,`#05070f`,.86),r=ud(e,`#0b1020`,.72),i=ud(t,`#0a0f1d`,.66),a=ud(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${ud(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${ud(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function sd({accent:e,secondary:t}){let n=ud(t,`#07040d`,.84),r=ud(e,`#100716`,.7),i=ud(e,`#08050e`,.82),a=ud(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${ud(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function cd({accent:e,secondary:t}){let n=ud(e,`#03050d`,.9),r=ud(t,`#05030c`,.94),i=ud(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${ud(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${ud(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${ud(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${ud(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function ld(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function ud(e,t,n){let[r,i,a]=ld(e),[o,s,c]=ld(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function dd({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${ud(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${ud(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${ud(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${ud(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function fd({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${ud(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${ud(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${ud(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${ud(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${ud(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${ud(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${ud(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function pd({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${ud(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${ud(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${ud(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${ud(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var md=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function hd(e){return md.test(e)}function gd({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):C(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=On(r),a=t?.startsWith(`builtin:`)?td(t):n??i,o=n===null?r===null?t!==null&&nd(t):hd(r):hd(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,P.jsxs)(_d,{"aria-hidden":!0,children:[o?(0,P.jsx)(yd,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,P.jsx)(vd,{src:a,style:{filter:s}}),(0,P.jsx)(bd,{})]})}var _d=_.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,vd=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,yd=_.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,bd=_.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);
`;function xd({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=J(),s=(0,E.useRef)(null),[c,l]=(0,E.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,E.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,to.createPortal)((0,P.jsx)(Td,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,P.jsxs)(Ed,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(Dd,{children:o(`Protected folder`)}),(0,P.jsx)(Od,{children:o(`These paths are protected by the safety settings:`)}),(0,P.jsx)(kd,{children:t.map(e=>(0,P.jsxs)(Ad,{children:[(0,P.jsx)(jd,{children:e.path}),(0,P.jsx)(Md,{children:o(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,P.jsx)(Nd,{children:Sd(o,u,r??!1)}),(0,P.jsx)(Pd,{children:Cd(o,u)}),(0,P.jsx)(Fd,{children:o(`This waits {seconds}s before the button works.`,{seconds:n})}),(0,P.jsxs)(Id,{children:[(0,P.jsx)(Ld,{onClick:i,ref:s,type:`button`,children:o(`Cancel`)}),(0,P.jsx)(Rd,{disabled:c>0,onClick:a,type:`button`,children:c>0?wd(o,u,c):wd(o,u,0)})]})]})}),document.body)}function Sd(e,t,n){switch(t){case`delete`:return e(n?`Deletes permanently`:`Moves to the recycle bin`);case`move`:return e(`Moves the entries`);case`rename`:return e(`Renames the entry`);case`write`:return e(`Writes into this folder`)}}function Cd(e,t){switch(t){case`delete`:return e(`Nothing has been deleted.`);case`move`:return e(`Nothing has been moved.`);case`rename`:return e(`Nothing has been renamed.`);case`write`:return e(`Nothing has been written.`)}}function wd(e,t,n){let r=n>0?t===`delete`?`Delete anyway ({seconds}s)`:t===`move`?`Move anyway ({seconds}s)`:t===`rename`?`Rename anyway ({seconds}s)`:`Write anyway ({seconds}s)`:t===`delete`?`Delete anyway`:t===`move`?`Move anyway`:t===`rename`?`Rename anyway`:`Write anyway`;return n>0?e(r,{seconds:n}):e(r)}var Td=_.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${_o}
`,Ed=_.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${fo}
`,Dd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Od=_.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,kd=_.div`
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
`,Ad=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,jd=_.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Md=_.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Nd=_.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Pd=_.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Fd=_.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Id=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Ld=_.button`
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
`,Rd=_.button`
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
`;function zd(){let e=J(),[t,n]=(0,E.useState)(null),r=(0,E.useRef)(null),i=(0,E.useRef)(null);(0,E.useEffect)(()=>(Ha(e=>new Promise(t=>{r.current=t,n(e)})),()=>Ha(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,E.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,to.createPortal)((0,P.jsx)(Bd,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,P.jsxs)(Vd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsx)(Hd,{children:e(`Notice`)}),(0,P.jsx)(Ud,{children:t}),(0,P.jsx)(Wd,{children:(0,P.jsx)(Gd,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Bd=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${_o}
`,Vd=_.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${fo}
`,Hd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ud=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Wd=_.div`
    display: flex;
    justify-content: flex-end;
`,Gd=_.button`
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
`;function Kd(){let e=J(),[t,n]=(0,E.useState)(null),[r,i]=(0,E.useState)(``),a=(0,E.useRef)(null),o=(0,E.useRef)(null);(0,E.useEffect)(()=>(Wa((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Wa(null)),[]),(0,E.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,to.createPortal)((0,P.jsx)(qd,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,P.jsxs)(Jd,{role:`dialog`,"aria-modal":`true`,children:[(0,P.jsx)(Yd,{children:e(`Archive password`)}),(0,P.jsx)(Xd,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,P.jsx)(Zd,{title:t.archive,children:t.archive}),(0,P.jsx)(Qd,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,P.jsxs)($d,{children:[(0,P.jsx)(ef,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,P.jsx)(tf,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var qd=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${_o}
`,Jd=_.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(2, 6, 23, 0.6);
    ${fo}
`,Yd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Xd=_.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Zd=_.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qd=_.input`
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
`,$d=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,ef=_.button`
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
`,tf=_(ef)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function nf({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=J(),v=(0,E.useRef)(null),y=c??_(`Search this folder`);(0,E.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,P.jsxs)(rf,{children:[(0,P.jsx)(Di,{}),(0,P.jsx)(af,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(of,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&(0,P.jsx)(sf,{disabled:i===0,onClick:g,title:_(`Select all matches`),type:`button`,children:(0,P.jsx)(Vi,{size:12})}),(0,P.jsx)(sf,{$chevron:!0,onClick:()=>b(u),title:_(`Previous match (Shift+Enter)`),type:`button`,children:(0,P.jsx)(Ni,{size:12})}),(0,P.jsx)(sf,{$chevron:!0,$down:!0,onClick:()=>b(d),title:_(`Next match (Enter)`),type:`button`,children:(0,P.jsx)(Ni,{size:12})})]}),(0,P.jsx)(cf,{$on:n,onClick:()=>b(f),title:_(`Match case`),type:`button`,children:`Aa`}),(0,P.jsx)(cf,{$on:r,onClick:()=>b(p),title:_(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,P.jsx)(lf,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:t===`hide`?(0,P.jsx)(Wi,{size:12}):(0,P.jsx)(Ui,{size:12})}),(0,P.jsx)(sf,{onClick:h,title:_(`Close search (Esc)`),type:`button`,children:(0,P.jsx)(Hi,{size:12})})]})}var rf=_.div`
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
    ${ho}
`,af=_.input`
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
`,of=_.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,sf=_.button`
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
`,cf=_.button`
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
`,lf=_(cf)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function uf(e,t,n,r,i=[]){(0,E.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=Mn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function df({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=J(),a=(0,E.useRef)(null),o=(0,E.useRef)(null),[s,c]=(0,E.useState)(null);return(0,E.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,E.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,E.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,to.createPortal)((0,P.jsxs)(ff,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Ws).map(n=>(0,P.jsx)(pf,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Ws[n](16)},n)),(0,P.jsx)(pf,{onClick:async()=>{let e=await za([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,P.jsx)(Ai,{size:13})}),r&&(0,P.jsx)(pf,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,P.jsx)(Hi,{size:12})})]}),document.body)]})}var ff=_.div`
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
    ${po}
    transform-origin: top left;
`,pf=_.button`
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
`;function mf({source:e,poster:t}){let n=C(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=On(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??td(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,P.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,P.jsx)(`img`,{alt:``,src:a}):null}function hf({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=J(),s=(0,E.useRef)(null),c=(0,E.useRef)(null),l=(0,E.useRef)(!1),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(0),g=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&p({width:i.width,height:i.height})},_=f&&u?Math.min(f.height,n*(f.width/u.width)):0,v=Math.max(0,(f?.height??0)-_);(0,E.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,h(Math.min(v,Math.max(0,r*v))))},[f,u,v,r]),(0,E.useEffect)(()=>{let e=()=>g();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,E.useEffect)(()=>{let e=window.requestAnimationFrame(g);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{c.current={y:e.clientY,top:m},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=c.current;t&&h(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,P.jsx)(If,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,P.jsxs)(Lf,{children:[(0,P.jsxs)(Rf,{children:[(0,P.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,P.jsx)(Gf,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,P.jsx)(Hi,{size:12})})]}),(0,P.jsx)(zf,{children:o(`Drag the frame to choose the visible part.`)}),(0,P.jsxs)(Bf,{children:[t?(0,P.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{g(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,P.jsx)(`img`,{alt:``,draggable:!1,onLoad:g,ref:e=>{s.current=e},src:e}),_>0&&(0,P.jsx)(Vf,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:m},children:(0,P.jsx)(Hf,{})})]}),(0,P.jsxs)(Uf,{children:[(0,P.jsx)(Wf,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,P.jsx)(Wf,{$primary:!0,onClick:()=>a(v>0?m/v:r),type:`button`,children:o(`Save`)})]})]})})}var gf=150,_f=120,vf=200,yf=_.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,bf=_.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,xf=_.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${vf}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${vf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(vf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(vf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(vf*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${vf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(vf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(vf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(vf*.18)}px),
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
`,Sf=_.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${gf}px);
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
`,Cf=_.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,wf=_.section`
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
`,Tf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Ef=_.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Df=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Of=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,kf=_.input`
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
`,Af=_.button`
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
`,jf=_.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Mf=_.button`
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
`,Nf=_.button`
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
`,Pf=_.span`
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
`,Ff=_.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,If=_.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Lf=_.div`
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
`,Rf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,zf=_.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Bf=_.div`
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
`,Vf=_.div`
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
`,Hf=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,Uf=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Wf=_.button`
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
`,Gf=_.button`
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
`,Kf=_.button`
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
`,qf=_.div`
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
`,Jf=_.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Yf=_.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Xf=_.button`
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
`,Zf=_.div`
    position: relative;
    display: inline-flex;
`,Qf=_.div`
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
`,$f=_.button`
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
`,ep=_.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,tp=_.section`
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
`,np=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,rp=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,ip=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,ap=_.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,op=_.input`
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
`,sp=_.button`
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
`,cp=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,lp=_.div`
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
`,up=_.span`
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
`,dp=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,fp=_.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,pp=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,mp=_.button`
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
`,hp=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,gp=_.button`
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
`,_p=_.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,vp=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,yp=_.div`
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
`,bp=_.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,xp=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Sp=_.button`
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
`,Cp=_.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,wp=_.button`
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
`,Tp=_.button`
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
`,Ep=_.button`
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
`,Dp=_.span`
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
`,Op=_.button`
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
`,kp=_.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Ap=_.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,jp=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Mp=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Np=_.input`
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
`,Pp=_.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Fp=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Ip=_.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lp=_.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Rp=_.button`
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
`;function zp({places:e,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:l,onRecentCleared:u,onLayoutChanged:p,onHistoryChanged:m,onDrivesChanged:h,visibilityVersion:g=0,find:_,onSearchMatches:y,readOnly:b=!1,onPick:x,onSelectionChange:S,onAddToTray:ee,onAddFavorite:te,onRemoveFavorite:ne,favoritePaths:ie,onExtractArchive:T,settingsVersion:D=0}){let O=J(),ae=qn(),[k,oe]=(0,E.useState)(!1),[A,se]=(0,E.useState)(null),j=A?.overviewBanner??null,M=j?.startsWith(`builtin:`)??!1,ce=j?.startsWith(`url:`)?j.slice(4):C(j)?j:null,le=M||ce?``:j??``,ue=M?``:ce?ce.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:le.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,de=M?nd(j):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(ue),fe=On(le.length>0?le:null,0,ue?`.${ue}`:``),F=j?td(j)??ce??fe:null,[I,pe]=(0,E.useState)(``),[me,he]=(0,E.useState)(null),[ge,L]=(0,E.useState)(!1),[_e,ve]=(0,E.useState)(null),[ye,R]=(0,E.useState)(null),[z,be]=(0,E.useState)(null),[xe,Se]=(0,E.useState)([]),[Ce,B]=(0,E.useState)(null),[we,Te]=(0,E.useState)(``),[Ee,De]=(0,E.useState)(null),[V,Oe]=(0,E.useState)(null),ke=ml(`overview`),[Ae,je]=(0,E.useState)(null),[Pe,Fe]=(0,E.useState)(null),Ie=(0,E.useRef)(null),Le=(0,E.useRef)(null),Re=(0,E.useRef)(null),ze=(0,E.useRef)(null),Be=(0,E.useRef)(null),Ve=Pe??A?.overviewBannerHeight??220,[Ue,We]=(0,E.useState)(0),[Ge,Ke]=(0,E.useState)(null),qe=Math.min(1,Math.max(0,A?.overviewBannerOffset??.3)),Je=Ve+vf,Ye=Ge&&Ue>0?Ge.height*(Ue/Ge.width):Je,Xe=Ye>0&&Ye<Je+240?(Je+240)/Ye:1,Ze=Math.max(1,Math.round(Ue*Xe)),Qe=Math.max(0,Ye*Xe-Je),$e=Math.min(_f,Qe/2,Math.max(20,Ve*.42)),et=$e+qe*Math.max(0,Qe-$e*2),[tt,it]=(0,E.useState)(!1),at=(e,t=!1)=>x?(De(e),Oe({path:e,isDirectory:t}),S?.([e]),!0):!1,ot=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),De(t),Oe({path:t,isDirectory:n}),je({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,E.useEffect)(()=>(sl(`overview`,V?(e,t)=>je({x:e,y:t,target:V}):null),()=>sl(`overview`,null)),[V]);let st=(e,t)=>c(e,t);(0,E.useEffect)(()=>{ct().then(se,()=>se(null))},[D]),(0,E.useEffect)(()=>{if(N.available)return Kc().then(Se,()=>void 0),N.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Se(t.data.peers)})},[]),(0,E.useEffect)(()=>{let e=Re.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,E.useEffect)(()=>{if(M&&!de){Ke({width:1920,height:1080});return}Ke(null);let e=Be.current;e?.complete&&e.naturalWidth>0&&Ke({width:e.naturalWidth,height:e.naturalHeight})},[j,M,de]),(0,E.useEffect)(()=>{let e=ze.current;if(!e)return;let t=()=>We(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[A?.overviewBanner]),(0,E.useEffect)(()=>{if(!me)return;let e=()=>he(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||he(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[me]),(0,E.useEffect)(()=>{if(!ge)return;let e=()=>L(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[ge]);let lt=Ks(A),ut=lt.map(e=>e.id),dt=(0,E.useRef)(null),ft=e=>me?.kind===`panel`&&me.id===e,H=e=>me?.kind===`place`&&me.id===e;(0,E.useEffect)(()=>{if(!N.available)return;let e=lt.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return N.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>N.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[lt.map(e=>e.path??e.id).join(`|`),a]),uf(dt,_??null,`section`,y??(()=>void 0),[r.length,e.length,n.length,g]);let pt=async(e,t)=>{let n={...A?.placeIcons};t?n[e]=t:delete n[e],he(null),await U({placeIcons:n}),l(await He())},mt=async(e,t)=>{let n={...A?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],R(null),await U({placeNames:n}),l(await He())},ht=e=>{be(null),ve({drive:e,label:e.label||`Local Disk`})},_t=async()=>{if(!_e)return;let{drive:e,label:t}=_e;ve(null);let n=await Me(e.name,t.trim());n.ok?(be(null),h?.()):be(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},vt=A?.overviewColumns??1,U=async e=>{if(!A)return;let t={...A,...e,overviewPanels:e.overviewPanels??ut,overviewHidden:[]};se(await gt(t)),p?.()},yt=async()=>{await U({overviewPanels:[...Vs],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),l(await He()),oe(!1)},bt=async()=>{let e=await za([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=A?.overviewBanners??[];await U({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},xt=async()=>{let e=I.trim();if(!A||!C(e))return;let t=A.overviewBanners??[];pe(``),await U({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},St=()=>void U({overviewBanner:null}),Ct=e=>void U({overviewBanners:(A?.overviewBanners??[]).filter(t=>t!==e),...A?.overviewBanner===e||A?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),wt=e=>{Ie.current={y:e.clientY,height:Ve},e.currentTarget.setPointerCapture(e.pointerId)},Tt=e=>{let t=Ie.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Le.current=n,Fe(n)},Et=e=>{Ie.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Le.current!==null&&(U({overviewBannerHeight:Le.current}),Le.current=null)},Ot=(e,t)=>{let n=ut.indexOf(e),r=n+t;if(n<0||r<0||r>=ut.length)return;let i=[...ut];[i[n],i[r]]=[i[r],i[n]],U({overviewPanels:i})},kt=(e,t)=>{let n={...A?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],U({overviewTitles:n})},At=(e,t)=>void U({overviewViews:{...A?.overviewViews,[e]:t}}),jt=e=>{let t=A?.overviewPinned??lt.filter(e=>e.pinned).map(e=>e.id);U({overviewPinned:lt.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Mt=e=>{he(null);let t=t=>{let n={...t};return delete n[e],n},n=A?.overviewPinned??lt.filter(e=>e.pinned).map(e=>e.id);U({overviewPanels:ut.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(A?.overviewTitles),overviewViews:t(A?.overviewViews),overviewIcons:t(A?.overviewIcons),panelPlaces:t(A?.panelPlaces)})},Nt=(e,t)=>{let n={...A?.overviewIcons};t?n[e]=t:delete n[e],he(null),U({overviewIcons:n})},Pt=async e=>{if(!A)return;if(e===`folder`){let e=await Ra();if(!e)return;let t=`folder:${e}`;ut.includes(t)||await U({overviewPanels:[...ut,t]});return}if(e===`quick`){let e=2;for(;ut.includes(`quick:${e}`);)e+=1;await U({overviewPanels:[...ut,`quick:${e}`]});return}let t=e;for(let n=2;ut.includes(t);n+=1)t=`${e}:${n}`;await U({overviewPanels:[...ut,t]})},Ft=async n=>{let r=await Ra();if(!r)return;if(n.id===`quick`){await U({quickAccess:[...new Set([...e.map(e=>e.path),r])]}),l(await He());return}let i=n.places??[];i.some(e=>t(e,r))||await U({panelPlaces:{...A?.panelPlaces,[n.id]:[...i,r]}})},It=async(n,r)=>{he(null),n.id===`quick`?(await U({quickAccess:e.filter(e=>!t(e.path,r)).map(e=>e.path)}),l(await He())):await U({panelPlaces:{...A?.panelPlaces,[n.id]:(n.places??[]).filter(e=>!t(e,r))}})},Lt=async(n,r,i)=>{if(t(r,i))return;let a=n.id===`quick`?e.map(e=>e.path):n.places??[],o=a.findIndex(e=>t(e,r)),s=a.findIndex(e=>t(e,i));if(o<0||s<0)return;let c=[...a],[u]=c.splice(o,1);c.splice(s,0,u),n.id===`quick`?(await U({quickAccess:c}),l(await He())):await U({panelPlaces:{...A?.panelPlaces,[n.id]:c}})},Rt=(e,t)=>({draggable:k,onDragOver:e=>{k&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{k&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{k&&(n.preventDefault(),Lt(e,n.dataTransfer.getData(`text/plain`),t))}}),zt=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:A?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??A?.placeIcons?.[n]??null}}),Bt=e=>{if(r.length===0)return(0,P.jsx)(Ap,{children:O(`Files and folders you open show up here.`)});let t=r.slice(0,i);return e.view===`grid`?(0,P.jsx)(cp,{children:t.map(e=>{let t=Jn(ae,e.path);return(0,P.jsxs)(lp,{$plain:!1,$selected:Ee===e.path,onClick:t=>{at(e.path,e.isDirectory)||(e.isDirectory?c(e.path,en(t)):Ne(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ot(t,e.path,e.isDirectory),title:e.path,children:[(0,P.jsx)(up,{children:t&&ae.useIcons?(0,P.jsx)(Ys,{place:t,size:18}):(0,P.jsx)(pc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(dp,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(fp,{children:e.path})]})]},e.path)})}):(0,P.jsx)(pp,{children:t.map(e=>{let t=Jn(ae,e.path);return(0,P.jsxs)(mp,{$selected:Ee===e.path,onClick:t=>{at(e.path,e.isDirectory)||(e.isDirectory?c(e.path,en(t)):Ne(e.path))},onDoubleClick:()=>x?.(e.path),onContextMenu:t=>ot(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ae.useIcons?(0,P.jsx)(Ys,{place:t,size:15}):(0,P.jsx)(pc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,P.jsxs)(hp,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(fp,{children:e.path})]})]},e.path)})})},Vt=e=>{let n=A?.favorites??[],r=async e=>{await U({favorites:n.filter(t=>t.path!==e)})},i=async(e,r)=>{e&&!n.some(n=>t(n.path,e))&&await U({favorites:[...n,{path:e,name:v(e)||e,isDirectory:r}]})},a=(e,t,n)=>{k||at(t,n)||(n?c(t,en(e)):Ne(t))},o=k?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(gp,{$row:e.view===`list`,onClick:()=>void za().then(e=>i(e,!1)),title:O(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,P.jsx)(Ai,{size:15}):(0,P.jsx)(up,{children:(0,P.jsx)(Ai,{size:15})}),e.view===`list`?(0,P.jsxs)(hp,{children:[(0,P.jsx)(`strong`,{children:O(`Add file`)}),(0,P.jsx)(fp,{children:O(`Pin any file here`)})]}):(0,P.jsxs)(dp,{children:[(0,P.jsx)(`strong`,{children:O(`Add file`)}),(0,P.jsx)(fp,{children:O(`Pin any file here`)})]})]}),(0,P.jsxs)(gp,{$row:e.view===`list`,onClick:()=>void Ra().then(e=>i(e,!0)),title:O(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,P.jsx)(Ai,{size:15}):(0,P.jsx)(up,{children:(0,P.jsx)(Ai,{size:15})}),e.view===`list`?(0,P.jsxs)(hp,{children:[(0,P.jsx)(`strong`,{children:O(`Add folder`)}),(0,P.jsx)(fp,{children:O(`Pin any folder here`)})]}):(0,P.jsxs)(dp,{children:[(0,P.jsx)(`strong`,{children:O(`Add folder`)}),(0,P.jsx)(fp,{children:O(`Pin any folder here`)})]})]})]}):null;return n.length===0&&!k?(0,P.jsx)(Ap,{children:O(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,P.jsxs)(cp,{children:[n.map(e=>{let t=Jn(ae,e.path);return(0,P.jsxs)(lp,{$plain:k,$selected:Ee===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!k&&x?.(e.path),onContextMenu:t=>!k&&ot(t,e.path,e.isDirectory),title:e.path,children:[k&&(0,P.jsx)(Tp,{onClick:t=>{t.stopPropagation(),r(e.path)},title:O(`Remove from favorites`),type:`button`,children:(0,P.jsx)(Hi,{size:11})}),(0,P.jsx)(up,{children:t&&ae.useIcons?(0,P.jsx)(Ys,{place:t,size:18}):(0,P.jsx)(pc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(dp,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(fp,{children:e.path})]})]},e.path)}),o]}):(0,P.jsxs)(pp,{children:[n.map(e=>{let t=Jn(ae,e.path);return(0,P.jsxs)(mp,{$selected:Ee===e.path,onClick:t=>a(t,e.path,e.isDirectory),onDoubleClick:()=>!k&&x?.(e.path),onContextMenu:t=>!k&&ot(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ae.useIcons?(0,P.jsx)(Ys,{place:t,size:15}):(0,P.jsx)(pc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,P.jsxs)(hp,{children:[(0,P.jsx)(`strong`,{children:t?.name||e.name}),(0,P.jsx)(fp,{children:e.path})]}),k&&(0,P.jsx)(Tp,{$inline:!0,onClick:t=>{t.stopPropagation(),r(e.path)},title:O(`Remove from favorites`),type:`button`,children:(0,P.jsx)(Hi,{size:11})})]},e.path)}),o]})},Ht=e=>{if(n.length===0)return(0,P.jsx)(Ap,{children:O(`No drives are available.`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=_e?.drive.name===t.name,i=r?(0,P.jsx)(Bp,{maxLength:32,onCancel:()=>ve(null),onChange:e=>ve({..._e,label:e}),onCommit:()=>void _t(),value:_e?.label??``}):(0,P.jsx)(P.Fragment,{children:d(t)}),a=!r&&k&&(0,P.jsx)(Ep,{onClick:e=>{e.stopPropagation(),ht(t)},title:O(`Rename volume`),type:`button`,children:(0,P.jsx)(sa,{size:11})}),o=(0,P.jsx)(fp,{children:O(`{free} free of {total}`,{free:f(t.freeSpace),total:f(t.totalSize)})});return e.view===`grid`?(0,P.jsxs)(lp,{$plain:!1,$selected:Ee===t.name,onClick:e=>{!r&&at(t.name,!0)||r||c(t.name,en(e))},onDoubleClick:()=>!r&&x?.(t.name),onContextMenu:e=>!r&&ot(e,t.name,!0),title:t.name,children:[(0,P.jsx)(up,{children:(0,P.jsx)(Ei,{size:18})}),(0,P.jsxs)(dp,{children:[(0,P.jsxs)(`strong`,{children:[i,r&&re(t),a]}),o]})]},t.name):(0,P.jsxs)(mp,{as:r?`div`:`button`,$selected:Ee===t.name,onClick:r?void 0:e=>{at(t.name,!0)||c(t.name,en(e))},onDoubleClick:r?void 0:()=>x?.(t.name),onContextMenu:r?void 0:e=>ot(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,P.jsx)(Ei,{size:18}),(0,P.jsxs)(hp,{children:[(0,P.jsxs)(`strong`,{children:[i,r&&re(t),a]}),o]}),(0,P.jsx)(_p,{children:(0,P.jsx)(vp,{$used:n,$tone:w(n)})})]},t.name)});return e.view===`grid`?(0,P.jsx)(cp,{children:t}):(0,P.jsx)(pp,{children:t})},Ut=()=>{let e=async e=>{B(e.id);try{await qc(e.host,e.port)}finally{B(null)}},t=async()=>{let e=we.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){B(`manual`);try{await qc(n,r)}finally{B(null)}}};return(0,P.jsxs)(jp,{children:[(0,P.jsxs)(Mp,{children:[(0,P.jsx)(Np,{onChange:e=>Te(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:O(`Address, e.g. 192.168.1.20:45701`),value:we}),(0,P.jsx)(Rp,{disabled:Ce!==null||!we.includes(`:`),onClick:()=>void t(),type:`button`,children:O(Ce===`manual`?`Pairing…`:`Pair by address`)})]}),xe.length===0&&(0,P.jsx)(Ap,{children:O(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),xe.map(t=>(0,P.jsxs)(Pp,{children:[(0,P.jsxs)(Fp,{children:[(0,P.jsx)(xa,{size:14}),(0,P.jsx)(Ip,{title:t.host,children:t.name}),(0,P.jsx)(Lp,{$online:t.online,children:t.paired?t.online?O(`Paired`):O(`Offline`):O(`Not paired`)}),!t.paired&&t.online&&(0,P.jsx)(Rp,{disabled:Ce===t.id,onClick:()=>void e(t),type:`button`,children:Ce===t.id?O(`Pairing…`):O(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,P.jsx)(fp,{children:O(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,P.jsxs)(mp,{onClick:n=>c($c(t.id,e.id),en(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,P.jsx)(xa,{size:14}),(0,P.jsxs)(hp,{children:[(0,P.jsx)(`strong`,{children:e.name}),(0,P.jsx)(fp,{children:t.name})]}),(0,P.jsx)(Ca,{size:12})]},e.id))]},t.id))]})},Wt=e=>{switch(e.kind){case`share`:return Ut();case`favorites`:return Vt(e);case`quick`:{let t=zt(e);return!k&&t.length===0?(0,P.jsx)(Ap,{children:O(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,P.jsxs)(cp,{children:[t.map(t=>(0,P.jsxs)(lp,{$plain:k,$selected:Ee===t.path,...Rt(e,t.path),onClick:e=>{!k&&!at(t.path,!0)&&c(t.path,en(e))},onDoubleClick:()=>!k&&x?.(t.path),onContextMenu:e=>!k&&ot(e,t.path,!0),title:t.path,children:[k&&(0,P.jsx)(Tp,{onClick:n=>{n.stopPropagation(),It(e,t.path)},title:O(`Remove from Quick access`),type:`button`,children:(0,P.jsx)(Hi,{size:11})}),(0,P.jsxs)(Cp,{children:[k?(0,P.jsx)(wp,{onClick:e=>{e.stopPropagation(),he(H(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,P.jsx)(up,{children:(0,P.jsx)(Ys,{place:t})})}):(0,P.jsx)(up,{children:(0,P.jsx)(Ys,{place:t})}),H(t.path)&&(0,P.jsx)(df,{onPick:e=>void pt(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,P.jsxs)(dp,{children:[ye?.path===t.path?(0,P.jsx)(`strong`,{children:(0,P.jsx)(Bp,{onCancel:()=>R(null),onChange:e=>R({path:t.path,name:e}),onCommit:()=>void mt(t.path,ye?.name??``),value:ye?.name??``})}):(0,P.jsxs)(`strong`,{children:[t.name,k&&(0,P.jsx)(Ep,{onClick:e=>{e.stopPropagation(),he(null),R({path:t.path,name:t.name})},title:O(`Rename folder`),type:`button`,children:(0,P.jsx)(sa,{size:11})})]}),(0,P.jsx)(fp,{children:t.path})]})]},t.path)),k&&(0,P.jsxs)(gp,{onClick:()=>void Ft(e),title:O(`Pin a folder here`),type:`button`,children:[(0,P.jsx)(up,{children:(0,P.jsx)(Ai,{size:15})}),(0,P.jsxs)(dp,{children:[(0,P.jsx)(`strong`,{children:O(`Add folder`)}),(0,P.jsx)(fp,{children:O(`Pin a directory here`)})]})]})]}):(0,P.jsxs)(pp,{children:[t.map(t=>(0,P.jsxs)(mp,{$selected:Ee===t.path,...Rt(e,t.path),onClick:e=>{!k&&!at(t.path,!0)&&c(t.path,en(e))},onDoubleClick:()=>!k&&x?.(t.path),onContextMenu:e=>!k&&ot(e,t.path,!0),title:t.path,type:`button`,children:[(0,P.jsxs)(Cp,{children:[k?(0,P.jsx)(wp,{onClick:e=>{e.stopPropagation(),he(H(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,P.jsx)(Ys,{place:t,size:15})}):(0,P.jsx)(Ys,{place:t,size:15}),H(t.path)&&(0,P.jsx)(df,{onPick:e=>void pt(t.path,e),value:A?.placeIcons?.[t.path]??t.icon})]}),(0,P.jsxs)(hp,{children:[ye?.path===t.path?(0,P.jsx)(`strong`,{children:(0,P.jsx)(Bp,{onCancel:()=>R(null),onChange:e=>R({path:t.path,name:e}),onCommit:()=>void mt(t.path,ye?.name??``),value:ye?.name??``})}):(0,P.jsxs)(`strong`,{children:[t.name,k&&(0,P.jsx)(Ep,{onClick:e=>{e.stopPropagation(),he(null),R({path:t.path,name:t.name})},title:O(`Rename folder`),type:`button`,children:(0,P.jsx)(sa,{size:11})})]}),(0,P.jsx)(fp,{children:t.path})]}),k&&(0,P.jsx)(Tp,{$inline:!0,onClick:n=>{n.stopPropagation(),It(e,t.path)},title:O(`Remove from Quick access`),type:`button`,children:(0,P.jsx)(Hi,{size:11})})]},t.path)),k&&(0,P.jsxs)(gp,{$row:!0,onClick:()=>void Ft(e),title:O(`Pin a folder here`),type:`button`,children:[(0,P.jsx)(Ai,{size:15}),(0,P.jsxs)(hp,{children:[(0,P.jsx)(`strong`,{children:O(`Add folder`)}),(0,P.jsx)(fp,{children:O(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,P.jsx)(Vp,{mode:e.view,onContextMenu:ot,onOpen:c,onPick:x,onSelectionChange:S,version:s});case`recent`:return Bt(e);case`drives`:return Ht(e);default:return(0,P.jsx)(Hp,{mode:e.view,onContextMenu:ot,onOpen:c,onPick:x,onSelectionChange:S,openOnSingleClick:A?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:A?.showCheckboxes??!0,visibilityVersion:g})}};return(0,P.jsxs)(yf,{$flush:!!A?.overviewBanner,ref:Re,children:[!b&&(0,P.jsxs)(qf,{$overlay:!!A?.overviewBanner,children:[(0,P.jsx)(Jf,{role:`group`,title:O(`Columns`),children:[1,2,3,4,5].map(e=>(0,P.jsx)(Yf,{$active:vt===e,onClick:()=>void U({overviewColumns:e}),title:o(O,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),k&&(0,P.jsxs)(Zf,{children:[(0,P.jsxs)(Xf,{onClick:()=>L(e=>!e),onPointerDown:e=>e.stopPropagation(),title:O(`Add a panel`),type:`button`,children:[(0,P.jsx)(Ai,{size:12}),O(`Add panel ▾`)]}),ge&&(0,P.jsx)(Qf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,P.jsx)($f,{onClick:()=>{L(!1),Pt(e)},type:`button`,children:O(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),k&&(0,P.jsxs)(Xf,{onClick:()=>void yt(),title:O(`Put every panel back the way the app ships it`),type:`button`,children:[(0,P.jsx)(ki,{size:12}),O(`Restore default panels`)]}),ke.available&&(0,P.jsx)(sp,{onClick:e=>ke.open(e.clientX,e.clientY),title:O(`Selection menu`),type:`button`,children:(0,P.jsx)(Pa,{size:14})}),(0,P.jsxs)(Xf,{onClick:()=>{oe(e=>!e),L(!1),he(null),R(null),ve(null)},title:O(k?`Done`:`Edit`),type:`button`,children:[k?(0,P.jsx)(Vi,{size:13}):(0,P.jsx)(sa,{size:13}),O(k?`Done`:`Edit`)]})]}),z&&(0,P.jsx)(kp,{children:z}),A?.overviewBanner&&(0,P.jsxs)(bf,{ref:ze,style:{height:`${Ve}px`,"--banner-image-width":`${Ze}px`,"--banner-image-shift":`${et}px`,"--banner-travel":`${$e}px`,"--banner-overlap":`0px`},children:[(0,P.jsx)(xf,{children:de?(0,P.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Ke({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:F??void 0}):(0,P.jsx)(`img`,{alt:``,onLoad:e=>{let t=M?1920:e.currentTarget.naturalWidth||1920,n=M?1080:e.currentTarget.naturalHeight||1080;Ke({width:t,height:n})},ref:Be,src:F??void 0})}),k&&(0,P.jsx)(Sf,{onDoubleClick:()=>{Le.current=null,Fe(null),U({overviewBannerHeight:220})},onPointerCancel:Et,onPointerDown:wt,onPointerMove:Tt,onPointerUp:Et,title:O(`Drag to resize; double-click to reset`)})]}),(0,P.jsxs)(Cf,{$offset:A?.overviewBanner?100:0,children:[k&&(0,P.jsxs)(wf,{children:[(0,P.jsxs)(Tf,{children:[(0,P.jsx)(Ef,{children:O(`Banners`)}),A?.overviewBanner&&(0,P.jsxs)(Xf,{onClick:()=>it(!0),title:O(`Adjust framing…`),type:`button`,children:[(0,P.jsx)(sa,{size:12}),O(`Adjust framing…`)]})]}),(0,P.jsxs)(Df,{children:[(0,P.jsx)(jf,{children:(0,P.jsx)(Mf,{$active:!A?.overviewBanner,onClick:St,title:O(`No banner`),type:`button`,children:(0,P.jsxs)(Ff,{children:[(0,P.jsx)(Hi,{size:16}),(0,P.jsx)(`span`,{children:O(`No banner`)})]})})}),Qu.map(e=>(0,P.jsx)(jf,{children:(0,P.jsx)(Mf,{$active:A?.overviewBanner===e.id,onClick:()=>void U({overviewBanner:e.id}),title:`${O(e.concept)} · ${O(e.preset)}`,type:`button`,children:(0,P.jsx)(mf,{poster:e.url,source:e.id})})},e.id)),Xu.map(e=>(0,P.jsx)(jf,{children:(0,P.jsxs)(Mf,{$active:A?.overviewBanner===e.id,onClick:()=>void U({overviewBanner:e.id}),title:O(e.name),type:`button`,children:[(0,P.jsx)(mf,{poster:e.poster,source:e.id}),(0,P.jsx)(Pf,{children:(0,P.jsx)(Yi,{size:11})})]})},e.id)),(A?.overviewBanners??[]).map(e=>(0,P.jsxs)(jf,{children:[(0,P.jsx)(Mf,{$active:A?.overviewBanner===e||A?.overviewBanner===`url:${e}`,onClick:()=>void U({overviewBanner:C(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,P.jsx)(mf,{source:e})}),(0,P.jsx)(Nf,{onClick:()=>Ct(e),title:O(`Remove`),type:`button`,children:(0,P.jsx)(Hi,{size:10})})]},e)),(0,P.jsxs)(Kf,{onClick:()=>void bt(),title:O(`Add banner…`),type:`button`,children:[(0,P.jsx)(Ai,{size:18}),(0,P.jsx)(`span`,{children:O(`Add banner…`)})]})]}),(0,P.jsxs)(Of,{children:[(0,P.jsx)(kf,{onChange:e=>pe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&xt()},placeholder:`https://…`,value:I}),(0,P.jsx)(Af,{disabled:!C(I),onClick:()=>void xt(),type:`button`,children:O(`Add URL`)})]})]}),(0,P.jsx)(ep,{ref:dt,$columns:vt,children:lt.map(e=>{let t=ut.indexOf(e.id);return(0,P.jsxs)(tp,{children:[(0,P.jsxs)(np,{children:[(0,P.jsxs)(rp,{children:[(0,P.jsxs)(Cp,{children:[k?(0,P.jsx)(wp,{onClick:()=>he(ft(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,P.jsx)(Js,{panel:e,size:15})}):(0,P.jsx)(Js,{panel:e,size:15}),ft(e.id)&&(0,P.jsx)(df,{onPick:t=>Nt(e.id,t),value:e.icon})]}),k?(0,P.jsx)(op,{defaultValue:e.title,onBlur:t=>kt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,P.jsx)(ap,{children:O(cr(e.title))})]}),(0,P.jsxs)(ip,{children:[!k&&e.kind===`recent`&&(0,P.jsx)(Xf,{onClick:()=>void nt().then(u),title:O(`Clear`),type:`button`,children:O(`Clear`)}),!k&&e.kind===`frequent`&&(0,P.jsx)(Xf,{onClick:()=>void rt().then(()=>m?.()),title:O(`Clear the frequent list`),type:`button`,children:O(`Clear`)}),!k&&(e.kind===`home`||e.kind===`folder`)&&(0,P.jsx)(Xf,{onClick:()=>c(e.path??a),title:O(`Open folder`),type:`button`,children:O(`Open`)}),k&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(sp,{$active:e.pinned,onClick:()=>jt(e.id),title:e.pinned?O(`Unpin from the sidebar`):O(`Pin to the sidebar`),type:`button`,children:(0,P.jsx)(Fi,{size:12})}),(0,P.jsx)(sp,{$active:e.view===`list`,onClick:()=>At(e.id,`list`),title:O(`List`),type:`button`,children:(0,P.jsx)(Ii,{size:13})}),(0,P.jsx)(sp,{$active:e.view===`grid`,onClick:()=>At(e.id,`grid`),title:O(`Grid`),type:`button`,children:(0,P.jsx)(Li,{size:13})}),(0,P.jsx)(sp,{disabled:t===0,onClick:()=>Ot(e.id,-1),title:O(`Move up`),type:`button`,children:(0,P.jsx)(Oi,{size:12})}),(0,P.jsx)(sp,{disabled:t===ut.length-1,onClick:()=>Ot(e.id,1),title:O(`Move down`),type:`button`,children:(0,P.jsx)(Oi,{size:12})}),(0,P.jsx)(sp,{onClick:()=>Mt(e.id),title:O(`Remove panel`),type:`button`,children:(0,P.jsx)(Hi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Wt(e):(0,P.jsx)(bp,{children:Wt(e)})]},e.id)})})]}),tt&&F&&(0,P.jsx)(hf,{height:Ve,offset:qe,onCancel:()=>it(!1),onSave:e=>{U({overviewBannerOffset:e}),it(!1)},source:F,video:de}),Ae&&(0,P.jsx)(jo,{directory:a,menu:{x:Ae.x,y:Ae.y,paths:[Ae.target.path]},onClose:()=>je(null),onCopy:(e,t)=>void Dt(e,t),onAddToTray:ee,onAddFavorite:te,onRemoveFavorite:ne,favoritePaths:ie,onExtractArchive:T,onOpen:st,onOpenFile:e=>x?x(e):void Ne(e),shortcuts:Zt,target:Ae.target})]})}function Bp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=J();return(0,P.jsxs)(Dp,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,P.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,P.jsx)(Op,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,P.jsx)(Hi,{size:11})}),(0,P.jsx)(Op,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,P.jsx)(Vi,{size:12})})]})}function Vp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=J(),[c,l]=(0,E.useState)(null),[u,d]=(0,E.useState)(null),f=qn(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,E.useEffect)(()=>{et().then(l,()=>l([]))},[a]),!c)return(0,P.jsx)(Ap,{children:s(`Reading…`)});if(c.length===0)return(0,P.jsx)(Ap,{children:s(`Folders you open often show up here.`)});let m=e=>o(s,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,P.jsx)(cp,{children:c.map(e=>{let i=Jn(f,e.path);return(0,P.jsxs)(lp,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,en(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,P.jsx)(up,{children:i&&f.useIcons?(0,P.jsx)(Ys,{place:i,size:18}):(0,P.jsx)(pc,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,P.jsxs)(dp,{children:[(0,P.jsx)(`strong`,{children:i?.name||e.name}),(0,P.jsx)(fp,{children:m(e)})]})]},e.path)})}):(0,P.jsx)(pp,{children:c.map(e=>{let i=Jn(f,e.path);return(0,P.jsxs)(mp,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,en(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,P.jsx)(Ys,{place:i,size:15}):(0,P.jsx)(pc,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,P.jsxs)(hp,{children:[(0,P.jsx)(`strong`,{children:i?.name||e.name}),(0,P.jsx)(fp,{children:m(e)})]})]},e.path)})})}function Hp({path:e,mode:n,onOpen:r,onContextMenu:i,onPick:a,onSelectionChange:o,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:l,visibilityVersion:u}){let d=J(),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=qn();return(0,E.useEffect)(()=>{e&&(p(null),Pe(e).then(p,()=>p(null)))},[e,u]),(0,E.useEffect)(()=>{if(N.available)return N.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Pe(e,!1).then(p,()=>void 0)})},[e]),f?n===`list`?(0,P.jsx)(yp,{children:(0,P.jsx)(El,{error:null,listing:f,loading:!1,onOpen:a??r,onOpenFile:a??(e=>void Ne(e)),onRefresh:()=>void Pe(e,!1).then(p,()=>void 0),onRename:(e,n)=>p(r=>r&&{...r,entries:r.entries.map(r=>t(r.fullPath,e)?{...r,name:v(n),fullPath:n}:r)}),onSelectionChange:o,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...Ae,columns:je.columns??[]}})}):(0,P.jsx)(bp,{children:f.entries.length===0?(0,P.jsx)(Ap,{children:d(`This folder is empty.`)}):(0,P.jsx)(xp,{children:f.entries.map(e=>{let t=Jn(g,e.fullPath);return(0,P.jsxs)(Sp,{$selected:m===e.fullPath,onClick:t=>{a?(h(e.fullPath),o?.([e.fullPath])):e.isDirectory?r(e.fullPath,en(t)):Ne(e.fullPath)},onDoubleClick:()=>a?.(e.fullPath),onContextMenu:t=>i?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&g.useIcons?(0,P.jsx)(Ys,{place:t,size:16}):(0,P.jsx)(pc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,P.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,P.jsx)(Ap,{children:d(`Reading…`)})}var Up=`yafm://`,Wp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Gp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Kp(e){return`${Up}${e===`home`?`overview`:e}`}function qp(e){return Gp(e)?Wp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Jp(e){let t=e.trim();if(t.length===0)return null;if(!Gp(t))return t;let n=Wp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Kp(n):null}function Yp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=J(),s=qn(),[c,l]=(0,E.useState)(!1),[u,d]=(0,E.useState)(``),[f,p]=(0,E.useState)([]),[m,h]=(0,E.useState)(0),[g,_]=(0,E.useState)(null),[v,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(null),S=(0,E.useRef)(null),ee=(0,E.useRef)(null),te=(0,E.useRef)(0);(0,E.useEffect)(()=>{if(!Zc(e)){x(null);return}let t=Qc(e);if(!t){x(null);return}let n=!0;return Gc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,E.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,E.useEffect)(()=>{r&&r!==te.current&&(te.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,E.useEffect)(()=>{c&&S.current?.select()},[c]),(0,E.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let ne=()=>{d(e.replace(/\\/g,`/`)),l(!0)},re=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,E.useEffect)(()=>{if(!c){p([]);return}let e=$p(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{Pe(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let C=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,E.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=ee.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,P.jsxs)(am,{onPointerDown:e=>e.stopPropagation(),ref:ee,children:[(0,P.jsxs)(lm,{children:[(0,P.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?C(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):re(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:S,spellCheck:!1,value:u}),(0,P.jsx)(um,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,P.jsx)(Hi,{size:12})}),(0,P.jsx)(um,{$apply:!0,onClick:re,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,P.jsx)(Vi,{size:14})})]}),f.length>0&&g&&(0,to.createPortal)((0,P.jsx)(om,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,P.jsxs)(sm,{$active:t===m,onClick:t=>C(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,P.jsx)(pc,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,P.jsx)(cm,{children:e.name})]},e.path))}),document.body)]});let w=t?[{label:t,path:e,icon:n}]:Xp(e,b)??Qp(e,s.places);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(em,{onClick:ne,title:o(`Click to type a path`),children:w.map((t,n)=>(0,P.jsxs)(tm,{$last:n===w.length-1,children:[n>0&&(0,P.jsx)(rm,{children:(0,P.jsx)(Ni,{size:9})}),(0,P.jsxs)(im,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,P.jsx)(nm,{children:(0,P.jsx)(Ys,{place:t.place,size:13})}):t.icon&&(0,P.jsx)(nm,{children:t.icon}),t.label]})]},t.path))}),v&&(0,P.jsx)(yo,{items:[{label:o(`Open`),icon:(0,P.jsx)(Mi,{size:14}),onSelect:()=>i(v.path)},{label:o(`Open in new tab`),icon:(0,P.jsx)(Ai,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`Copy as path`),icon:(0,P.jsx)(Da,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...Gp(v.path)?[{label:o(`Open with…`),icon:(0,P.jsx)($i,{size:14}),onSelect:()=>void Ht(v.path)},{label:o(`Properties`),icon:(0,P.jsx)(Pi,{size:14}),onSelect:()=>void Vt([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function Xp(e,t){let n=Qc(e);if(!n)return null;let r=$c(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,P.jsx)(xa,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Zp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Qp(e,n){let r=Zp(e),i=-1,a=null;for(let e of Object.values(n)){if(e.name.trim().length===0)continue;let n=r.findIndex(n=>t(n.path,e.path));n>i&&(i=n,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function $p(e){if(Gp(e)||Zc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var em=_.div`
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
`,tm=_.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,nm=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,rm=_.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,im=_.button`
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
`,am=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,om=_.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${no}
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
`,sm=_.button`
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
`,cm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lm=_.div`
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
`,um=_.button`
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
`,dm=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,P.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,P.jsx)(`path`,{d:`M4 4v6h6`})]});function fm({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,showDetails:i=!0,onShowDetails:a,videoAudio:s=!1,videoAutoplay:c=!1,platform:l}){let u=J(),d=fl(`recycle`),p=l===`windows`,[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[v,b]=(0,E.useState)(!1),[x,S]=(0,E.useState)(null),[ee,te]=(0,E.useState)(!0),[ne,re]=(0,E.useState)(!1),[C,w]=(0,E.useState)(null),[ie,T]=(0,E.useState)(!1),[D,O]=(0,E.useState)(()=>new Set),[ae,k]=(0,E.useState)(null),[oe,A]=(0,E.useState)(()=>{let e=or(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[se,j]=(0,E.useState)(null),[M,ce]=(0,E.useState)(null),[le,N]=(0,E.useState)(()=>{let e=ir(`yafm.recycle.preview.width`,320);return e>=220?e:320}),ue=(0,E.useRef)(null),de=e=>{N(e),ar(`yafm.recycle.preview.width`,e)},fe=(0,E.useCallback)(async()=>{te(!0),w(null);try{h(await We(ie))}catch(e){w(e instanceof Error?e.message:String(e))}finally{te(!1)}},[ie]),F=(0,E.useCallback)(async()=>{try{h(await We(ie))}catch{}},[ie]);(0,E.useEffect)(()=>{fe()},[fe]),(0,E.useEffect)(()=>{let e=window.setInterval(()=>void F(),1e4);return()=>window.clearInterval(e)},[F]),(0,E.useEffect)(()=>{ie||(_([]),b(!1),S(null))},[ie]),(0,E.useEffect)(()=>{O(e=>{let t=new Set(m.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[m]);let I=(0,E.useMemo)(()=>{let e=new Set(m.map(e=>e.id));return[...m,...g.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=pm(e,t,oe.column);return oe.descending?-n:n})},[m,g,oe]),pe=(0,E.useMemo)(()=>!t?.open||t.query.trim().length===0?I:I.filter(e=>zn(e.name,t)||zn(e.originalPath,t)),[I,t?.open,t?.query,t?.matchCase,t?.regex]),me=(0,E.useRef)(null);uf(me,t??null,`[data-search-block]`,n??(()=>void 0),[I]),(0,E.useEffect)(()=>{O(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,E.useEffect)(()=>{r&&O(new Set(pe.map(e=>e.id)))},[r]);let he=(0,E.useMemo)(()=>I.filter(e=>D.has(e.id)),[I,D]),ge=he.filter(e=>e.removable&&!e.isOrphan),L=he.filter(e=>e.removable),_e=(e,t)=>{let n=t.ctrlKey||t.metaKey;O(r=>{if(t.shiftKey&&ae){let t=I.findIndex(e=>e.id===ae),i=I.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(I[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),k(e.id)},ve=(0,E.useCallback)(()=>O(new Set(pe.map(e=>e.id))),[pe]),ye=pe.length>0&&pe.every(e=>D.has(e.id)),R=(0,E.useCallback)(async()=>{let e=ge.map(e=>e.id);if(e.length!==0){re(!0);try{let t=await qe(e);t.ok||await Ua(o(u,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),O(new Set),await fe()}finally{re(!1)}}},[fe,ge,u]),z=(0,E.useCallback)(async()=>{let e=L.map(e=>e.id);if(ce(null),e.length!==0){re(!0);try{let t=await Je(e);!t.ok&&!t.cancelled&&await Ua(o(u,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),O(new Set),await fe()}finally{re(!1)}}},[L,fe,u]),be=async()=>{ce(null),re(!0);try{await Ke(ie),O(new Set),await fe()}finally{re(!1)}},xe=async()=>{re(!0),S(null);try{let e=await Xe();if(e.cancelled){S(`Elevation was declined — nothing was read.`);return}if(e.failed){S(`The elevated helper could not produce a report. Try again.`);return}_(e.entries),b(!0)}finally{re(!1)}},Se=async()=>{re(!0),ce(null);try{await Ze(),_([]),b(!1),S(null),await fe()}finally{re(!1)}},Ce=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},B=e=>{navigator.clipboard.writeText(e.originalPath)},we=(e,t)=>{e.preventDefault(),t&&!D.has(t.id)&&O(new Set([t.id])),j({x:e.clientX,y:e.clientY})};(0,E.useEffect)(()=>(sl(`recycle`,D.size>0?(e,t)=>j({x:e,y:t}):null),()=>sl(`recycle`,null)),[D]),(0,E.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ve()):e.key===`Delete`?(e.preventDefault(),L.length>0&&ce(`delete`)):e.key===`Enter`&&ge.length>0?(e.preventDefault(),R()):e.key===`Escape`&&(O(new Set),j(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[L.length,ge.length,R,ve]);let Te=[{label:u(`Restore`),icon:(0,P.jsx)(dm,{width:14,height:14}),disabled:ge.length===0,onSelect:()=>void R()},{label:u(`Delete permanently`),icon:(0,P.jsx)(Bi,{size:14}),danger:!0,disabled:L.length===0,onSelect:()=>ce(`delete`)},{label:u(`Properties`),icon:(0,P.jsx)(Pi,{size:14}),disabled:he.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=he;e&&Ye(e.id)}},{label:u(`Open original location`),icon:(0,P.jsx)(wi,{size:14}),disabled:he.length!==1,onSelect:()=>{let[e]=he;e&&Ce(e)}},{label:u(`Copy original path`),icon:(0,P.jsx)(Da,{size:14}),disabled:he.length!==1,onSelect:()=>{let[e]=he;e&&B(e)}},{label:u(`Select all`),separatorBefore:!0,onSelect:ve},{label:u(`Refresh`),icon:(0,P.jsx)(ki,{size:14}),onSelect:()=>void fe()}],Ee=he.length>0?he[0]:null,De=Ee?{name:Ee.name,path:Ee.contentPath||Ee.originalPath,isDirectory:Ee.isDirectory,size:Ee.size,modified:Ee.deleted,fields:[{label:u(`Type`),value:u(cr(hm(Ee)))},{label:u(`Original location`),value:Ee.originalPath},{label:u(`Date deleted`),value:y(Ee.deleted)},{label:u(`Size`),value:Ee.isDirectory?`—`:f(Ee.size)},...Ee.owner?[{label:u(`Owner`),value:Ee.owner}]:[],{label:u(`Status`),value:Ee.isOrphan?u(`Metadata only`):Ee.removable?u(`Restorable`):u(`Other profile`)}]}:null;return(0,P.jsxs)(_m,{ref:ue,onContextMenu:e=>we(e),children:[(0,P.jsxs)(vm,{children:[(0,P.jsxs)(ym,{children:[(0,P.jsx)(Bi,{size:16}),(0,P.jsx)(`span`,{children:u(`Recycle Bin`)}),(0,P.jsxs)(bm,{children:[ee?`…`:o(u,I.length,`1 item`,`{count} items`),D.size>0&&` · ${u(`{count} selected`,{count:D.size})}`]})]}),(0,P.jsxs)(xm,{children:[(0,P.jsx)(Cm,{$on:ie,onClick:()=>T(e=>!e),title:u(`Show metadata records whose content is already gone`),type:`button`,children:u(`Orphans`)}),ie&&p&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Sm,{disabled:ne||v,onClick:()=>void xe(),title:u(v?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:u(ne?`Working…`:v?`Admin view loaded`:`Show all (admin)…`)}),v&&g.length>0&&(0,P.jsx)(Sm,{disabled:ne,onClick:()=>ce(`purge`),type:`button`,children:u(`Delete every orphan`)})]}),(0,P.jsx)(Sm,{disabled:ne||ge.length===0,onClick:()=>void R(),type:`button`,children:u(`Restore`)}),(0,P.jsx)(Sm,{$danger:!0,disabled:ne||L.length===0,onClick:()=>ce(`delete`),type:`button`,children:u(`Delete`)}),(0,P.jsx)(Sm,{disabled:ne||I.length===0,onClick:()=>ce(`empty`),type:`button`,children:u(`Empty`)}),(0,P.jsx)(wm,{onClick:()=>void fe(),title:u(`Refresh`),type:`button`,children:(0,P.jsx)(ki,{size:14})}),d.available&&(0,P.jsx)(wm,{onClick:e=>d.open(e.clientX,e.clientY),title:u(`Selection menu`),type:`button`,children:(0,P.jsx)(Pa,{size:14})})]})]}),x&&(0,P.jsx)(Gm,{children:x}),C&&(0,P.jsx)(Km,{children:C}),!C&&!ee&&(t?.open&&t.query.trim().length>0?pe.length===0:I.length===0)&&(0,P.jsx)(Km,{children:t?.open&&t.query.trim().length>0?u(`No matching items.`):u(`The recycle bin is empty.`)}),I.length>0&&(0,P.jsxs)(Wm,{children:[(0,P.jsxs)(Tm,{ref:me,children:[(0,P.jsxs)(Dm,{children:[(0,P.jsx)(Nm,{$checked:ye,$partial:!ye&&D.size>0,onClick:()=>ye?O(new Set):ve(),title:u(ye?`Select none`:`Select all`),type:`button`,children:ye?(0,P.jsx)(Vi,{size:9}):D.size>0&&(0,P.jsx)(Pm,{})}),(0,P.jsxs)(Om,{onClick:()=>V(`name`),type:`button`,children:[u(`Name`),mm(oe,`name`)]}),(0,P.jsxs)(Om,{onClick:()=>V(`original`),type:`button`,children:[u(`Original location`),mm(oe,`original`)]}),(0,P.jsxs)(Om,{onClick:()=>V(`deleted`),type:`button`,children:[u(`Date deleted`),mm(oe,`deleted`)]}),(0,P.jsxs)(Om,{onClick:()=>V(`size`),type:`button`,children:[u(`Size`),mm(oe,`size`)]}),(0,P.jsxs)(Om,{onClick:()=>V(`type`),type:`button`,children:[u(`Type`),mm(oe,`type`)]}),(0,P.jsx)(`span`,{})]}),(0,P.jsx)(km,{onClick:e=>{e.target===e.currentTarget&&O(new Set)},children:I.map(e=>(0,P.jsxs)(Am,{$checked:D.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>_e(e,t),onContextMenu:t=>we(t,e),onDoubleClick:()=>{O(new Set([e.id])),k(e.id),a?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,P.jsx)(Mm,{$checked:D.has(e.id),children:D.has(e.id)&&(0,P.jsx)(Vi,{size:9})}),(0,P.jsxs)(Fm,{children:[(0,P.jsx)(gm,{entry:e}),(0,P.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,P.jsx)(Um,{children:u(`Metadata only`)}),e.owner&&(0,P.jsx)(Um,{$other:!0,children:u(`Other profile`)})]}),(0,P.jsx)(Lm,{children:e.originalPath}),(0,P.jsx)(Rm,{children:y(e.deleted)}),(0,P.jsx)(zm,{children:e.isDirectory?`—`:f(e.size)}),(0,P.jsx)(Bm,{children:u(cr(hm(e)))}),(0,P.jsxs)(Vm,{children:[e.removable&&!e.isOrphan&&(0,P.jsx)(Hm,{onClick:t=>{t.stopPropagation(),qe([e.id]).then(fe)},title:u(`Restore to its original folder`),type:`button`,children:(0,P.jsx)(dm,{})}),e.removable&&(0,P.jsx)(Hm,{$danger:!0,onClick:t=>{t.stopPropagation(),O(new Set([e.id])),ce(`delete`)},title:e.isOrphan?u(`Remove the leftover record`):u(`Delete permanently`),type:`button`,children:(0,P.jsx)(Bi,{size:13})})]})]},e.id))})]}),i&&(0,P.jsx)(_s,{emptyNote:u(`Nothing selected.`),info:De,onWidth:de,selectionNote:he.length>1?o(u,he.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:s,videoAutoplay:c,width:le})]}),se&&(0,P.jsx)(yo,{items:Te,onClose:()=>j(null),x:se.x,y:se.y}),(0,P.jsx)(os,{confirmLabel:u(M===`empty`?`Empty the bin`:M===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:M===`empty`?o(u,I.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):M===`purge`?u(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):o(u,L.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>ce(null),onConfirm:()=>{M===`empty`?be():M===`purge`?Se():z()},open:M!==null,title:u(M===`empty`?`Empty the recycle bin`:M===`purge`?`Delete every orphan`:`Delete permanently`)})]});function V(e){A(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return sr(`yafm.recycle.sort`,n),n})}}function pm(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return hm(e).localeCompare(hm(t),void 0,{sensitivity:`base`})}}function mm(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function hm(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function gm({entry:e}){let t=bn(e.originalPath,e.isDirectory);return(0,P.jsx)(Im,{children:t?(0,P.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,P.jsx)(wi,{}):(0,P.jsx)(Ti,{})})}var _m=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,vm=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,ym=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,bm=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,xm=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Sm=_.button`
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
`,Cm=_(Sm)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,wm=_.button`
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
`,Tm=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Em=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Dm=_.div`
    display: grid;
    grid-template-columns: ${Em};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Om=_.button`
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
`,km=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Am=_.div`
    display: grid;
    grid-template-columns: ${Em};
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
`,jm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Mm=_.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Nm=_.button`
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
`,Pm=_.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Fm=_(jm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Im=_.span`
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
`,Lm=_(jm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Rm=_(jm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,zm=_(jm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Bm=_(jm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Vm=_.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Hm=_.button`
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
`,Um=_.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Wm=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Gm=_.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Km=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function qm(){return N.available?(await N.request(`app.tags`)).tags:[]}async function Jm(e){return!N.available||!e?!1:(await N.request(`app.tags.delete`,{name:e})).ok}async function Ym(e,t){return!N.available||!e?[]:(await N.request(`app.tags.create`,{name:e,color:t})).tags}async function Xm(e,t){return!N.available||!e?!1:(await N.request(`app.tags.color`,{name:e,color:t})).ok}async function Zm(e,t){return!N.available||!e||!t?!1:(await N.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Qm(){let e=J();return(0,P.jsx)($m,{title:e(`Always applies to every folder`),children:e(`Global`)})}var $m=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,eh=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function th(e){return`"${e.replaceAll(`"`,``)}"`}function nh(e){let t=document.documentElement.style;for(let n of eh){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${th(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function rh(){return N.available?(await N.request(`app.fonts`)).fonts??[]:[]}function ih({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=J(),[s,c]=(0,E.useState)(null),[l,u]=(0,E.useState)(``),d=(0,E.useRef)(null),f=(0,E.useRef)(null),p=(0,E.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,E.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let m=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},h=e=>{a(e),c(null)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(ah,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:m,ref:d,type:`button`,children:[(0,P.jsx)(oh,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,P.jsx)(sh,{children:`▾`})]}),s&&(0,to.createPortal)((0,P.jsxs)(ch,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,P.jsxs)(lh,{children:[(0,P.jsx)(Di,{size:12}),(0,P.jsx)(uh,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,P.jsxs)(dh,{children:[(0,P.jsxs)(fh,{$active:!e,"aria-selected":!e,onClick:()=>h(null),role:`option`,type:`button`,children:[(0,P.jsxs)(mh,{children:[n,` `,(0,P.jsx)(gh,{children:o(`(default)`)})]}),!e&&(0,P.jsx)(Vi,{size:11})]}),p.map(t=>(0,P.jsxs)(fh,{$active:e===t,"aria-selected":e===t,onClick:()=>h(t),role:`option`,type:`button`,children:[(0,P.jsxs)(ph,{children:[(0,P.jsx)(mh,{children:t}),(0,P.jsx)(hh,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,P.jsx)(Vi,{size:11})]},t)),p.length===0&&(0,P.jsx)(_h,{children:o(`No matching font.`)})]})]}),document.body)]})}var ah=_.button`
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
`,oh=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,sh=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,ch=_.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: 0 18px 44px rgba(2, 6, 23, 0.55);
    ${po}
`,lh=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,uh=_.input`
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
`,dh=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,fh=_.button`
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
`,ph=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,mh=_.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hh=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gh=_.span`
    color: var(--text-muted);
    font-size: 10px;
`,_h=_.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,vh=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to the recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],yh=`en`,bh=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],xh=new Date(2026,10,5,16,8).getTime(),Sh=`system`,Ch={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},wh=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],Th=`yafm.colors.recent`;function Eh(){let e=or(Th);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Dh({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let a=J(),[s,c]=(0,E.useState)([]),[l,u]=(0,E.useState)(null),[d,p]=(0,E.useState)(null),[g,_]=(0,E.useState)(null),[y,x]=(0,E.useState)(``),[S,ee]=(0,E.useState)(`file`),[te,re]=(0,E.useState)(!1),[ie,T]=(0,E.useState)(!1),[D,O]=(0,E.useState)(null),[ae,k]=(0,E.useState)(xt),[oe,A]=(0,E.useState)(!1),[se,j]=(0,E.useState)(null),[M,ce]=(0,E.useState)(null),[le,N]=(0,E.useState)(null),[ue,fe]=(0,E.useState)(!1),[F,I]=(0,E.useState)(null),[pe,me]=(0,E.useState)(!1),[he,ge]=(0,E.useState)(null),[L,_e]=(0,E.useState)(null),[ve,ye]=(0,E.useState)(!1),[De,V]=(0,E.useState)([]),[Oe,ke]=(0,E.useState)(null),[Ae,Me]=(0,E.useState)(!1),[Ne,Pe]=(0,E.useState)(null),[Fe,Ie]=(0,E.useState)(``),[Le,Re]=(0,E.useState)(Xs),[ze,Be]=(0,E.useState)(null),[Ve,He]=(0,E.useState)(null),[Ue,We]=(0,E.useState)(``),[Ge,Ke]=(0,E.useState)(``),[qe,Je]=(0,E.useState)(null),[Ye,Xe]=(0,E.useState)(Eh),[Ze,Qe]=(0,E.useState)({}),[$e,et]=(0,E.useState)(null),[tt,nt]=(0,E.useState)(null),[rt,at]=(0,E.useState)(!1),[ot,st]=(0,E.useState)(null),[ut,dt]=(0,E.useState)(null),[_t,U]=(0,E.useState)(null),[wt,Dt]=(0,E.useState)(wh[0].id),[Ot,kt]=(0,E.useState)([]),[At,jt]=(0,E.useState)(null),[Mt,Nt]=(0,E.useState)(null),[Pt,Ft]=(0,E.useState)(null),[It,Lt]=(0,E.useState)(!1),[Rt,zt]=(0,E.useState)(``),Bt=(0,E.useRef)(null),Vt=(0,E.useRef)({}),Ht=d?.defaultView??je,Ut=d?.themePresets??[],Wt=e?.platform===`windows`,Gt=Wt?M?M.registered&&M.pathMatches:!1:d?.archiveHandler??!1,Kt=M?.registered??d?.archiveHandler??!1,qt=Wt?le?le.registered&&le.pathMatches:!1:d?.defaultFileManager??!1,W=Wt?ae.registered&&ae.pathMatches:d?.linksEnabled??!1;uf(Bt,r??null,`section`,i??(()=>void 0),[d]),(0,E.useEffect)(()=>{let e=Bt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Dt(wh[wh.length-1].id);return}let n=t+110,r=wh[0].id;for(let{id:e}of wh){let t=Vt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Dt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let G=e=>t=>{Vt.current[e]=t},Jt=e=>{Vt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),Dt(e)};(0,E.useEffect)(()=>{t&&Jt(t)},[t]),(0,E.useEffect)(()=>{de().then(e=>c(e.available),()=>c([]))},[]),(0,E.useEffect)(()=>{rh().then(kt,()=>kt([]))},[]),(0,E.useEffect)(()=>{Tt().then(Nt,()=>Nt(null))},[]),(0,E.useEffect)(()=>{xe().then(nt,()=>void 0)},[]),(0,E.useEffect)(()=>{it().then(u,()=>u(null)),ct().then(p,()=>p(null)),St().then(k,()=>k(xt)),pt().then(ce,()=>ce(null)),ft().then(N,()=>N(null)),qm().then(V,()=>V([]))},[]),(0,E.useEffect)(()=>{let e=()=>void yt().then(O,()=>O(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let K=async e=>{if(!d)return;let t={...d,...e};Object.keys(e).every(e=>t[e]===d[e])||(p(t),hn(),p(await gt(t)),n())},Yt=async e=>{let t=await za(e);if(!t)return;let n=d?.backgroundCustom??[];await K({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},Xt=async()=>{let e=Rt.trim();if(!d||!C(e))return;let t=d.backgroundCustom??[];zt(``),await K({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},Qt=e=>{if(!d)return;let t=d.backgroundSource;K({backgroundCustom:d.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},$t=async()=>{if(!d)return;let t=await Ra();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;d.protectedPaths.includes(r)||await K({protectedPaths:[...d.protectedPaths,r]})},en=()=>{let e=Ue.trim();d&&e&&!d.protectedPaths.includes(e)&&(We(``),K({protectedPaths:[...d.protectedPaths,e]}))},rn=()=>{if(!d||!ze)return;let e=ze.value.trim(),t=ze.from;Be(null),e.length!==0&&e!==t&&K({protectedPaths:d.protectedPaths.map(n=>n===t?e:n)})},an=e=>{d&&K({protectedPaths:d.protectedPaths.filter(t=>t!==e)})},on=async()=>{let e=await lt();e.length>0&&await K({protectedPaths:e})},sn=()=>{if(!d||!Ve)return;let e=Ve.value.trim(),t=Ve.from;He(null),e&&e!==t&&K({directoryIndexBlacklist:d.directoryIndexBlacklist.map(n=>n===t?e:n)})},cn=()=>{let e=Ge.trim();d&&e&&!d.directoryIndexBlacklist.includes(e)&&(Ke(``),K({directoryIndexBlacklist:[...d.directoryIndexBlacklist,e]}))},ln=async()=>{if(!d)return;let t=await Ra();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;d.directoryIndexBlacklist.includes(r)||await K({directoryIndexBlacklist:[...d.directoryIndexBlacklist,r]})},un=e=>{d&&K({directoryIndexBlacklist:d.directoryIndexBlacklist.filter(t=>t!==e)})},dn=()=>{K({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},q=()=>{if(!d||qe===null)return;let e=qe.trim()||`yyyy/MM/dd HH:mm`;Je(null),e!==d.timeFormatPattern&&K({timeFormatPattern:e})},fn=(e,t)=>{Xe(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return sr(Th,i),i})},pn=h(d?.accentColor,ne),mn=h(d?.secondaryColor,b),gn=(e,t)=>{d&&(fn(`accent`,pn),fn(`secondary`,mn),K({accentColor:e,secondaryColor:t}))},_n=(e,t)=>{d&&(fn(e,e===`accent`?pn:mn),K(e===`accent`?{accentColor:t}:{secondaryColor:t}))},vn=async()=>{at(!0),st(null);try{nt(await Se())}catch{st(a(`Could not check for updates.`))}finally{at(!1)}},yn=async()=>{st(null),dt({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await Ce();e.ok||bn(e.error??``)}catch(e){bn(e instanceof Error?e.message:String(e))}},bn=e=>dt(t=>t&&{...t,phase:`error`,error:e}),xn=async()=>{try{await B()}catch(e){st(e instanceof Error?e.message:String(e))}},Sn=async()=>{dt(e=>e&&{...e,phase:`installing`});try{let e=await we();e.ok||bn(e.error??a(`The update failed.`))}catch(e){bn(e instanceof Error?e.message:String(e))}};(0,E.useEffect)(()=>Te(e=>dt(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,E.useEffect)(()=>Ee(e=>dt(t=>t&&{...t,changelog:e.text})),[]);let Cn=async()=>{if(!d||!$e)return;let e=$e.name.trim()||`${$e.accent.toUpperCase()} / ${$e.secondary.toUpperCase()}`,t=[...d.themePresets,{name:e,accent:$e.accent,secondary:$e.secondary}];et(null),await K({themePresets:t})},wn=async e=>{d&&await K({themePresets:d.themePresets.filter((t,n)=>n!==e)})},Tn=e=>{let t=_t;U(null),t&&t.role===e&&(e===`accent`?pn:mn).toLowerCase()!==t.color.toLowerCase()&&fn(e,t.color)},En=async()=>{let e=Fe.trim();if(e&&!Ae){Me(!0),Pe(null);try{V(await Ym(e,Le)),Ie(``)}catch{Pe(a(`Could not add the tag.`))}finally{Me(!1)}}},Dn=async(e,t)=>{V(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Xm(e,t)||Pe(a(`Could not change the tag's color.`))},On=async e=>{if(Ae)return;Me(!0),Pe(null);let t=await Jm(e);V(await qm()),t||Pe(`"${e}" is still used by a folder whose index could not be updated.`),Me(!1)},kn=async()=>{let e=Oe;if(!e||Ae)return;let t=e.value.trim();t.length===0||t===e.name?ke(null):(Me(!0),Pe(null),await Zm(e.name,t)?(V(await qm()),ke(null)):Pe(`Could not rename "${e.name}".`),Me(!1))},An=async e=>{let t=new Set(Ht.columns??je.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=_l.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await K({defaultView:{...Ht,columns:n}})},jn=async()=>{if(oe)return;let e=!W;A(!0),j(null);try{let t=await Ct(e),r=t.registered&&t.pathMatches;k(t),p(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&j(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{j(`The request to Windows failed. Try again.`)}finally{A(!1)}},Mn=async()=>{if(pe||!d)return;let e=!qt;me(!0),ge(null);try{let t=await H(e);N(t);let r=Wt?t.registered&&t.pathMatches:e;p(e=>e&&{...e,defaultFileManager:r}),n(),Wt&&r!==e&&ge(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ge(`The request to Windows failed. Try again.`)}finally{me(!1)}},Nn=async()=>{if(!ue){fe(!0),I(null);try{let e=await mt();ce(e);let t=e.registered&&e.pathMatches;p(e=>e&&{...e,archiveHandler:t}),n(),t||I(`Windows did not accept the archive registration. Try again.`)}catch{I(`The request to Windows failed. Try again.`)}finally{fe(!1)}}},Pn=async()=>{if(!ue){fe(!0),I(null);try{let e=await ht();ce(e),p(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&I(`The registration is still there. Try turning it off again.`)}catch{I(`The request to Windows failed. Try again.`)}finally{fe(!1)}}},Fn=async(e,t)=>{if(!d)return;let n={...d.extensionIcons};t===null?delete n[e]:n[e]=t,await K({extensionIcons:n})},In={...Zt,...d?.shortcuts};(0,E.useEffect)(()=>{if(!L)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){_e(null);return}let t=tn(e);t&&(_e(null),K({shortcuts:{...In,[L]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[L,d]),(0,E.useEffect)(()=>{if(!ve)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ye(!1);return}let t=tn(e);t&&(ye(!1),K({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[ve,d]);let Ln=async e=>{await K({recentLimit:Math.min(Math.max(e,0),50)})},Rn=(e,t)=>{let n=t??Ze[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};Qe(t=>({...t,[e]:void 0})),K(i)},zn=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;jt(null),await K({sharePortMode:`custom`,sharePort:n}),await Yc(n,`custom`)},Bn=async e=>{let t=e===`custom`,n=t?d?.sharePort??8080:null;await K({sharePortMode:t?`custom`:`random`,sharePort:n}),await Yc(n,t?`custom`:`random`)},Vn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;Lt(!0),Ft(null);try{let e=await Et(t);Nt(e),Ft(e.error),e.error||await K({startupMode:t})}finally{Lt(!1)}},Hn=async e=>{await K({galleryRoots:e.length>0?e:null})},Un=async()=>{let e=await Ra(),t=d?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await Hn([...t,e])},Wn=async()=>{let e=y.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Fn(e,S),x(``))},Gn=async()=>{T(!0);try{let e=await Ra();if(!e)return;let t=await za([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await vt(e.replace(/[\\/][^\\/]+$/,``),v(e),`file:${t}`)&&(hn(),_({folder:e,icon:t}))}finally{T(!1)}},Kn=async(e,t)=>{let n={...d?.fonts};t?n[e]=t:delete n[e],await K({fonts:n})};return(0,P.jsxs)(zh,{children:[(0,P.jsxs)(Bh,{ref:Bt,children:[(0,P.jsxs)(Vh,{ref:G(`application`),children:[(0,P.jsx)(Rh,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:a(`Version`)}),(0,P.jsx)(Og,{children:e?`v${e.version}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:a(`Platform`)}),(0,P.jsx)(Og,{children:e?.platform??`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Language`)}),(0,P.jsx)($,{children:a(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(Fh,{disabled:!d,onChange:e=>void K({language:e}),options:[Sh,...s.length>0?s:[yh]],value:d?.language??yh})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Picker window size`)}),(0,P.jsx)($,{children:a(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Rg,{inputMode:`numeric`,onBlur:e=>Rn(`width`,e.currentTarget.value),onChange:e=>Qe(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ze.width??String(d?.pickerWindowWidth??1200)}),(0,P.jsx)(Og,{children:`×`}),(0,P.jsx)(Rg,{inputMode:`numeric`,onBlur:e=>Rn(`height`,e.currentTarget.value),onChange:e=>Qe(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:Ze.height??String(d?.pickerWindowHeight??800)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Web server port`)}),(0,P.jsx)($,{children:a(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(Po,{disabled:!d,onChange:e=>void Bn(e),options:[{value:`random`,label:a(`Random`)},{value:`custom`,label:a(`Custom port`)}],value:d?.sharePortMode??`random`,width:160})})]}),d?.sharePortMode===`custom`&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Custom port`)}),(0,P.jsx)($,{children:a(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(Rg,{inputMode:`numeric`,onBlur:e=>void zn(e.currentTarget.value),onChange:e=>jt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:At??(d?.sharePort?String(d.sharePort):``)})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Link paths`)}),(0,P.jsx)($,{children:a(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(Po,{disabled:!d,onChange:e=>void K({linkPathMode:e}),options:[{value:`relative`,label:a(`Relative`)},{value:`absolute`,label:a(`Absolute`)}],value:d?.linkPathMode??`relative`,width:160})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Global hotkey`)}),(0,P.jsx)($,{children:a(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(g_,{$listening:ve,disabled:!d,onClick:()=>ye(!0),type:`button`,children:ve?a(`Press a key…`):d?.globalHotkey?nn(d.globalHotkey):a(`None`)}),d?.globalHotkey&&(0,P.jsx)(jg,{onClick:()=>void K({globalHotkey:null}),type:`button`,children:a(`Clear`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Open yafm:// links`)}),(0,P.jsx)($,{children:a(`Registers this app for yafm:// links, for the current user only. Turning it on writes this copy's path; starting the app never touches the registry.`)}),ae.registered&&!ae.pathMatches&&(0,P.jsx)(Dg,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:ae.registeredPath??`?`})}),se&&(0,P.jsx)(Dg,{children:se})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Fg,{$on:W,children:a(W?`Active`:`Off`)}),(0,P.jsx)(Ig,{$on:W,disabled:oe,onClick:()=>void jn(),title:a(W?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,P.jsx)(Lg,{})})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Use as the default file manager`)}),(0,P.jsx)($,{children:a(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),le?.registered&&!le.pathMatches&&(0,P.jsx)(Dg,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:le.registeredPath??`?`})}),he&&(0,P.jsx)(Dg,{children:he})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Fg,{$on:qt,children:a(qt?`Active`:`Off`)}),(0,P.jsx)(Ig,{$on:qt,disabled:!d||pe,onClick:()=>void Mn(),title:a(qt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,P.jsx)(Lg,{})})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Open archives with this app`)}),(0,P.jsx)($,{children:a(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,P.jsx)($,{children:a(`When this is off, opening an archive uses the system's default application instead.`)}),M?.registered&&!M.pathMatches&&(0,P.jsx)(Dg,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:M.registeredPath??`?`})}),F&&(0,P.jsx)(Dg,{children:F})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Fg,{$on:Gt,children:a(Gt?`Active`:`Off`)}),(0,P.jsx)(__,{disabled:!d||ue||Gt,onClick:()=>void Nn(),type:`button`,children:a(`Register`)}),e?.platform===`windows`&&(0,P.jsx)(__,{onClick:()=>void R(`ms-settings:defaultapps`),type:`button`,children:a(`Default apps…`)}),(0,P.jsx)(Pg,{disabled:!d||ue||!Kt,onClick:()=>void Pn(),type:`button`,children:a(`Unregister`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Reopen the tabs that were open`)}),(0,P.jsx)($,{children:a(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,P.jsx)(Ig,{$on:d?.restoreTabs??!0,disabled:!d,onClick:()=>void K({restoreTabs:!d?.restoreTabs}),type:`button`,children:(0,P.jsx)(Lg,{})})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`startup`),children:[(0,P.jsx)(Rh,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Start with the computer`)}),(0,P.jsx)($,{children:a(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),Pt&&(0,P.jsx)(Dg,{children:Pt}),Mt&&!Mt.supported&&(0,P.jsx)(Dg,{children:a(`This platform cannot create a per-user startup entry.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(Po,{disabled:!d||It||Mt!==null&&!Mt.supported,onChange:e=>void Vn(e),options:[{value:`none`,label:a(`None`)},{value:`shortcut`,label:a(`Shortcut`)},{value:`task`,label:a(`Scheduled task`)}],value:Mt?.mode??d?.startupMode??`none`,width:170})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Start hidden in the tray`)}),(0,P.jsx)($,{children:a(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(Ig,{$on:d?.startHidden??!1,disabled:!d,onClick:()=>void K({startHidden:!d?.startHidden}),type:`button`,children:(0,P.jsx)(Lg,{})})})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`fonts`),children:[(0,P.jsx)(Rh,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,P.jsxs)(Uh,{children:[eh.map(e=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(e.label)}),(0,P.jsx)($,{children:a(`Falls back to {font} until another family is chosen.`,{font:a(cr(e.fallback))})})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(ih,{defaultLabel:a(cr(e.fallback)),disabled:!d,fonts:Ot,onChange:t=>void Kn(e.id,t),sample:e.sample,value:d?.fonts?.[e.id]??null})})]},e.id)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Reset`)}),(0,P.jsx)($,{children:a(`Back to the app's built-in font for every role.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(__,{onClick:()=>void K({fonts:{}}),type:`button`,children:a(`Reset`)})})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`time`),children:[(0,P.jsx)(Rh,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,P.jsx)(Uh,{children:(0,P.jsxs)(Wh,{children:[(0,P.jsxs)(Gh,{children:[(0,P.jsx)(Q,{children:a(`Format`)}),(0,P.jsx)($,{children:a(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,P.jsx)(u_,{children:bh.map(e=>(0,P.jsx)(d_,{$active:(d?.timeFormat??`24`)===e.id,onClick:()=>void K({timeFormat:e.id}),type:`button`,children:a(e.label)},e.id))}),(d?.timeFormat??`24`)===`custom`&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(f_,{"aria-label":a(`Pattern`),onBlur:q,onChange:e=>Je(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),q()):e.key===`Escape`&&Je(null)},spellCheck:!1,value:qe??d?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,P.jsx)($,{children:a(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,P.jsxs)(p_,{children:[(0,P.jsx)(`span`,{children:a(`Preview`)}),(0,P.jsx)(`code`,{children:m(xh,d?.timeFormat,qe??d?.timeFormatPattern)})]})]})})]}),(0,P.jsxs)(Vh,{ref:G(`updates`),children:[(0,P.jsx)(Rh,{note:`The running build and the newest one published.`,title:`Updates`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:a(`Current version`)}),(0,P.jsx)(Og,{children:e?`v${e.version}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:a(`Latest version`)}),(0,P.jsx)(Og,{children:tt?`v${tt.latest}`:`—`})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:tt?tt.available?a(`Version {version} is available.`,{version:tt.latest}):a(`You are on the latest version.`):a(`Not checked yet`)}),(0,P.jsx)($,{children:tt?.available?a(`The installer downloads, installs itself, and closes the app.`):a(`Reads the version file the release workflow publishes.`)})]}),(0,P.jsx)(Tg,{children:tt?.available?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(__,{onClick:()=>void be(),type:`button`,children:a(`Open release page`)}),Wt&&(0,P.jsx)(__,{disabled:ut!==null,onClick:()=>void yn(),type:`button`,children:a(`Download and install`)})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(__,{disabled:rt,onClick:()=>void vn(),type:`button`,children:a(rt?`Checking…`:`Check for updates`)}),(0,P.jsx)(__,{onClick:()=>void z(),type:`button`,children:a(`Open log folder`)})]})})]}),ot&&(0,P.jsx)(X,{children:(0,P.jsx)(Dg,{children:ot})})]})]}),(0,P.jsxs)(Vh,{ref:G(`colors`),children:[(0,P.jsx)(Rh,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(Wh,{children:[(0,P.jsxs)(Gh,{children:[(0,P.jsx)(Q,{children:a(`Presets`)}),(0,P.jsx)($,{children:a(`One click changes the accent and the highlight together.`)})]}),(0,P.jsxs)(Kh,{children:[Ju.map(e=>(0,P.jsxs)(qh,{$on:pn.toLowerCase()===e.accent&&mn.toLowerCase()===e.secondary,onClick:()=>gn(e.accent,e.secondary),title:`${a(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,P.jsxs)(eg,{children:[(0,P.jsx)(`i`,{style:{background:e.accent}}),(0,P.jsx)(`i`,{style:{background:e.secondary}})]}),(0,P.jsx)(Jh,{children:a(e.name)})]},e.name)),Ut.map((e,t)=>(0,P.jsxs)(Yh,{children:[(0,P.jsxs)(qh,{$on:pn.toLowerCase()===e.accent.toLowerCase()&&mn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>gn(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,P.jsxs)(eg,{children:[(0,P.jsx)(`i`,{style:{background:e.accent}}),(0,P.jsx)(`i`,{style:{background:e.secondary}})]}),(0,P.jsx)(Jh,{children:e.name})]}),(0,P.jsx)(Xh,{onClick:()=>void wn(t),title:a(`Remove preset`),type:`button`,children:(0,P.jsx)(Hi,{size:9})})]},`${e.name}-${t}`)),$e?(0,P.jsxs)(Qh,{children:[(0,P.jsxs)(eg,{children:[(0,P.jsx)(`i`,{style:{background:$e.accent}}),(0,P.jsx)(`i`,{style:{background:$e.secondary}})]}),(0,P.jsx)($h,{autoFocus:!0,maxLength:24,onChange:e=>et({...$e,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Cn()):e.key===`Escape`&&(e.preventDefault(),et(null))},placeholder:a(`Preset name`),spellCheck:!1,value:$e.name}),(0,P.jsx)(jg,{onClick:()=>void Cn(),type:`button`,children:a(`Save`)}),(0,P.jsx)(jg,{onClick:()=>et(null),type:`button`,children:a(`Cancel`)})]}):(0,P.jsxs)(Zh,{disabled:!d,onClick:()=>et({name:``,accent:pn,secondary:mn}),title:a(`Save the current colours as a preset`),type:`button`,children:[(0,P.jsx)(Ai,{size:12}),a(`Add preset`)]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Accent color`)}),(0,P.jsx)($,{children:a(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Lh,{colors:Ye.accent,current:pn,onApply:e=>_n(`accent`,e)}),(0,P.jsx)(Mg,{"aria-label":a(`Accent color`),disabled:!d,onBlur:()=>Tn(`accent`),onChange:e=>void K({accentColor:e.target.value}),onFocus:()=>U({role:`accent`,color:pn}),type:`color`,value:pn}),(0,P.jsx)(Ng,{children:pn.toUpperCase()})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Secondary color`)}),(0,P.jsx)($,{children:a(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Lh,{colors:Ye.secondary,current:mn,onApply:e=>_n(`secondary`,e)}),(0,P.jsx)(Mg,{"aria-label":a(`Secondary color`),disabled:!d,onBlur:()=>Tn(`secondary`),onChange:e=>void K({secondaryColor:e.target.value}),onFocus:()=>U({role:`secondary`,color:mn}),type:`color`,value:mn}),(0,P.jsx)(Ng,{children:mn.toUpperCase()})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Reset colors`)}),(0,P.jsx)($,{children:a(`Returns the interface to the default blue and indigo theme.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(jg,{disabled:!d,onClick:()=>{fn(`accent`,pn),fn(`secondary`,mn),K({accentColor:null,secondaryColor:null})},type:`button`,children:a(`Reset`)})})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`background`),children:[(0,P.jsx)(Rh,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(Wh,{children:[(0,P.jsxs)(Gh,{children:[(0,P.jsx)(Q,{children:a(`Wallpaper`)}),(0,P.jsx)($,{children:a(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,P.jsx)(Xg,{children:(0,P.jsx)(Zg,{$active:!d?.backgroundSource,onClick:()=>void K({backgroundSource:null}),title:a(`None`),type:`button`,children:(0,P.jsx)(n_,{children:a(`None`)})})}),(0,P.jsxs)(qg,{children:[Zu.map(e=>(0,P.jsxs)(Jg,{children:[(0,P.jsx)(Yg,{children:a(e.name)}),(0,P.jsx)(Xg,{children:e.variants.map(t=>(0,P.jsx)(Zg,{$active:d?.backgroundSource===t.id,onClick:()=>void K({backgroundSource:t.id}),title:`${a(e.name)} · ${a(t.preset)}`,type:`button`,children:(0,P.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,P.jsxs)(Jg,{children:[(0,P.jsx)(Yg,{children:a(`Motion`)}),(0,P.jsx)(Xg,{children:Xu.map(e=>(0,P.jsxs)(Zg,{$active:d?.backgroundSource===e.id,onClick:()=>void K({backgroundSource:e.id}),title:a(e.name),type:`button`,children:[(0,P.jsx)(`img`,{alt:``,src:e.poster}),(0,P.jsx)(e_,{children:(0,P.jsx)(Yi,{size:11})})]},e.id))})]}),(0,P.jsxs)(Jg,{children:[(0,P.jsx)(Yg,{children:a(`Custom`)}),(0,P.jsxs)(Xg,{children:[(d?.backgroundCustom??[]).map(e=>(0,P.jsx)(Ph,{active:d?.backgroundSource===`file:${e}`||d?.backgroundSource===`url:${e}`||d?.backgroundSource===e,onRemove:()=>Qt(e),onSelect:()=>void K({backgroundSource:C(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,P.jsxs)(t_,{onClick:()=>void Yt([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,P.jsx)(Ai,{size:12}),a(`Image…`)]}),(0,P.jsxs)(t_,{onClick:()=>void Yt([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,P.jsx)(Ai,{size:12}),a(`Video…`)]})]})]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Image or video URL`)}),(0,P.jsx)($,{children:a(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Rg,{onChange:e=>zt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Xt()},placeholder:`https://…`,value:Rt}),(0,P.jsx)(jg,{disabled:!C(Rt),onClick:()=>void Xt(),type:`button`,children:a(`Add`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:a(`Blur`)}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Kg,{max:40,min:0,onChange:e=>void K({backgroundBlur:Number(e.target.value)}),type:`range`,value:d?.backgroundBlur??0}),(0,P.jsxs)(Og,{children:[d?.backgroundBlur??0,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:a(`Saturation`)}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Kg,{max:200,min:0,onChange:e=>void K({backgroundSaturation:Number(e.target.value)}),type:`range`,value:d?.backgroundSaturation??100}),(0,P.jsxs)(Og,{children:[d?.backgroundSaturation??100,`%`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:a(`Brightness`)}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Kg,{max:150,min:40,onChange:e=>void K({backgroundBrightness:Number(e.target.value)}),type:`range`,value:d?.backgroundBrightness??100}),(0,P.jsxs)(Og,{children:[d?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`safety`),children:[(0,P.jsx)(Rh,{note:`Deleting, moving, renaming or writing to a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(Wh,{children:[(0,P.jsxs)(Gh,{children:[(0,P.jsx)(Q,{children:a(`Protected folders`)}),(0,P.jsx)($,{children:a(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,P.jsx)(r_,{children:(d?.protectedPaths??[]).map(e=>(0,P.jsxs)(i_,{children:[(0,P.jsx)(a_,{"aria-label":a(`Protected path`),onBlur:rn,onChange:t=>Be({from:e,value:t.target.value}),onFocus:()=>Be({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),rn()):e.key===`Escape`&&Be(null)},spellCheck:!1,value:ze?.from===e?ze.value:e}),(0,P.jsx)(o_,{onClick:()=>an(e),title:a(`Remove`),type:`button`,children:(0,P.jsx)(Hi,{size:10})})]},e))}),(0,P.jsxs)(c_,{children:[(0,P.jsx)(l_,{"aria-label":a(`New protected rule`),onChange:e=>We(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),en())},placeholder:`*.log`,spellCheck:!1,value:Ue}),(0,P.jsx)(jg,{onClick:en,type:`button`,children:a(`Add the rule`)})]}),(0,P.jsxs)(s_,{children:[(0,P.jsx)(jg,{onClick:()=>void on(),type:`button`,children:a(`Restore defaults`)}),(0,P.jsx)(jg,{onClick:()=>void $t(),type:`button`,children:a(`Add folder…`)})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Confirmation delay`)}),(0,P.jsx)($,{children:a(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Kg,{max:30,min:2,onChange:e=>void K({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:d?.deleteDelaySeconds??5}),(0,P.jsxs)(Og,{children:[d?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`tags`),children:[(0,P.jsx)(Rh,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(kg,{"aria-label":a(`Color of the new tag`),onChange:e=>Re(e.target.value),type:`color`,value:Le}),(0,P.jsx)(Rg,{onChange:e=>Ie(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),En())},placeholder:a(`New tag`),spellCheck:!1,value:Fe})]}),(0,P.jsx)($,{children:a(`Add a tag here; it is available in every folder.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(jg,{disabled:Ae||Fe.trim().length===0,onClick:()=>void En(),type:`button`,children:a(`Add`)})})]}),Ne&&(0,P.jsx)(X,{children:(0,P.jsx)(Dg,{children:Ne})}),De.length===0&&(0,P.jsx)(X,{children:(0,P.jsx)($,{children:a(`No tags yet. Add one below; it is available in every folder.`)})}),De.map(e=>(0,P.jsx)(X,{children:Oe?.name===e.name?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(kg,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void Dn(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,P.jsx)(Ag,{autoFocus:!0,disabled:Ae,onChange:t=>ke({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),kn()):e.key===`Escape`&&(e.preventDefault(),ke(null))},value:Oe.value})]}),(0,P.jsx)($,{children:a(`Press Enter to save, Escape to cancel.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(jg,{disabled:Ae,onClick:()=>void kn(),type:`button`,children:a(`Save`)}),(0,P.jsx)(jg,{disabled:Ae,onClick:()=>ke(null),type:`button`,children:a(`Cancel`)})]})]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(kg,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void Dn(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,P.jsx)(Q,{children:e.name})]}),(0,P.jsx)($,{children:o(a,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(jg,{disabled:Ae,onClick:()=>ke({name:e.name,value:e.name}),type:`button`,children:a(`Edit`)}),(0,P.jsxs)(Pg,{disabled:Ae,onClick:()=>void On(e.name),type:`button`,children:[(0,P.jsx)(Bi,{size:13}),a(`Remove`)]})]})]})},e.name))]})]}),(0,P.jsxs)(Vh,{ref:G(`files-view`),children:[(0,P.jsx)(Rh,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Default view`)}),(0,P.jsx)($,{children:a(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsxs)(Wg,{children:[(0,P.jsx)(Gg,{$on:Ht.mode===`list`,onClick:()=>void K({defaultView:{...Ht,mode:`list`}}),type:`button`,children:a(`List`)}),(0,P.jsx)(Gg,{$on:Ht.mode===`grid`,onClick:()=>void K({defaultView:{...Ht,mode:`grid`}}),type:`button`,children:a(`Grid`)})]})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`List icon size`)}),(0,P.jsx)($,{children:a(`The icon in the list rows.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Kg,{max:48,min:16,onChange:e=>void K({defaultView:{...Ht,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Ht.iconSize}),(0,P.jsxs)(Og,{children:[Ht.iconSize,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Grid size`)}),(0,P.jsx)($,{children:a(`The height of a grid tile; the icon inside follows it.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Kg,{max:260,min:100,onChange:e=>void K({defaultView:{...Ht,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Ht.gridSize}),(0,P.jsxs)(Og,{children:[Ht.gridSize,`px`]})]})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(Q,{children:a(`Selection checkboxes`)}),(0,P.jsx)(Qm,{})]}),(0,P.jsx)($,{children:a(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,P.jsx)(Ig,{$on:d?.showCheckboxes??!0,disabled:!d,onClick:()=>void K({showCheckboxes:!(d?.showCheckboxes??!0)}),type:`button`,children:(0,P.jsx)(Lg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(Q,{children:a(`Open with a single click`)}),(0,P.jsx)(Qm,{})]}),(0,P.jsx)($,{children:a(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,P.jsx)(Ig,{$on:d?.openOnSingleClick??!1,disabled:!d,onClick:()=>void K({openOnSingleClick:!(d?.openOnSingleClick??!1)}),type:`button`,children:(0,P.jsx)(Lg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(Q,{children:a(`Open the file tray while dragging`)}),(0,P.jsx)(Qm,{})]}),(0,P.jsx)($,{children:a(`The tray appears when a drag starts and closes again if it is still empty. Off leaves it to the title bar button.`)})]}),(0,P.jsx)(Ig,{$on:d?.trayAutoShow??!0,disabled:!d,onClick:()=>void K({trayAutoShow:!(d?.trayAutoShow??!0)}),type:`button`,children:(0,P.jsx)(Lg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(Q,{children:a(`Confirm before deleting`)}),(0,P.jsx)(Qm,{})]}),(0,P.jsx)($,{children:a(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,P.jsx)(Ig,{$on:d?.confirmDelete??!1,disabled:!d,onClick:()=>void K({confirmDelete:!(d?.confirmDelete??!1)}),type:`button`,children:(0,P.jsx)(Lg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(Q,{children:a(`Play audio in video previews`)}),(0,P.jsx)(Qm,{})]}),(0,P.jsx)($,{children:a(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,P.jsx)(Ig,{$on:d?.previewVideoAudio??!1,disabled:!d,onClick:()=>void K({previewVideoAudio:!(d?.previewVideoAudio??!1)}),type:`button`,children:(0,P.jsx)(Lg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(Q,{children:a(`Autoplay video previews`)}),(0,P.jsx)(Qm,{})]}),(0,P.jsx)($,{children:a(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,P.jsx)(Ig,{$on:d?.previewVideoAutoplay??!1,disabled:!d,onClick:()=>void K({previewVideoAutoplay:!(d?.previewVideoAutoplay??!1)}),type:`button`,children:(0,P.jsx)(Lg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(Q,{children:a(`Preview panel under the list`)}),(0,P.jsx)(Qm,{})]}),(0,P.jsx)($,{children:a(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,P.jsx)(Ig,{$on:Ht.showImages??!0,onClick:()=>void K({defaultView:{...Ht,showImages:!(Ht.showImages??!0)}}),type:`button`,children:(0,P.jsx)(Lg,{})})]}),(0,P.jsx)(X,{children:(0,P.jsxs)(Z,{children:[(0,P.jsxs)(Eg,{children:[(0,P.jsx)(Q,{children:a(`Columns`)}),(0,P.jsx)(Qm,{})]}),(0,P.jsx)($,{children:a(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,P.jsx)(X,{children:(0,P.jsxs)(m_,{children:[_l.map(e=>(0,P.jsxs)(h_,{children:[(0,P.jsx)(`input`,{checked:(Ht.columns??[]).includes(e.id),onChange:()=>void An(e.id),type:`checkbox`}),(0,P.jsx)(`span`,{children:a(e.label)})]},e.id)),(0,P.jsxs)(h_,{children:[(0,P.jsx)(`input`,{checked:(Ht.columns??[]).includes(`linkTarget`),onChange:()=>void An(`linkTarget`),type:`checkbox`}),(0,P.jsx)(`span`,{children:a(`Link target after the name`)})]})]})})]}),(0,P.jsxs)(x_,{children:[a(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,P.jsx)(Qm,{}),` `,a(`Anything marked as global always applies to every folder.`)]})]}),(0,P.jsxs)(Vh,{ref:G(`shortcuts`),children:[(0,P.jsx)(Rh,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,P.jsxs)(Uh,{children:[vh.map(({id:e,label:t,note:n})=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(t)}),(0,P.jsx)($,{children:a(n)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(g_,{$listening:L===e,onClick:()=>_e(e),type:`button`,children:L===e?a(`Press a key…`):nn(In[e])})})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Reset`)}),(0,P.jsx)($,{children:a(`Back to the default combination for every action.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(__,{onClick:()=>void K({shortcuts:{...Zt}}),type:`button`,children:a(`Reset`)})})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`memory`),children:[(0,P.jsx)(Rh,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(xg,{children:[(0,P.jsxs)(Sg,{children:[(0,P.jsx)(Q,{children:a(`Process memory`)}),(0,P.jsx)(Og,{children:D?`${f(D.private)} · ${lg(D.private,D.available)}`:`—`})]}),(0,P.jsx)(Cg,{children:(0,P.jsx)(wg,{$ratio:D?D.private/Math.max(D.available,1):0,$tone:w(D?D.private/Math.max(D.available,1):0)})}),(0,P.jsx)($,{children:D?a(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:f(D.available),resident:f(D.workingSet)}):a(`Reading the current usage…`)})]}),(0,P.jsxs)(xg,{children:[(0,P.jsxs)(Sg,{children:[(0,P.jsx)(Q,{children:a(`Managed heap`)}),(0,P.jsx)(Og,{children:D?`${f(D.managed)} · ${lg(D.managed,D.private)}`:`—`})]}),(0,P.jsx)(Cg,{children:(0,P.jsx)(wg,{$ratio:D?D.managed/Math.max(D.private,1):0,$tone:`var(--accent-secondary)`})}),(0,P.jsx)($,{children:a(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,P.jsxs)(xg,{children:[(0,P.jsxs)(Sg,{children:[(0,P.jsx)(Q,{children:a(`Native and runtime`)}),(0,P.jsx)(Og,{children:D?`${f(Math.max(0,D.private-D.managed))} · ${lg(Math.max(0,D.private-D.managed),D.private)}`:`—`})]}),(0,P.jsx)(Cg,{children:(0,P.jsx)(wg,{$ratio:D?Math.max(0,D.private-D.managed)/Math.max(D.private,1):0,$tone:`var(--accent-primary)`})}),(0,P.jsx)($,{children:a(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Free memory`)}),(0,P.jsx)($,{children:a(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(__,{onClick:()=>void bt().then(O),type:`button`,children:a(`Trim now`)})})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`overview`),children:[(0,P.jsx)(Rh,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,P.jsx)(Uh,{children:(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Recent items`)}),(0,P.jsx)($,{children:a(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(Rg,{max:50,min:0,onChange:e=>void Ln(Number(e.target.value)),type:`number`,value:d?.recentLimit??10})})]})})]}),(0,P.jsxs)(Vh,{ref:G(`gallery`),children:[(0,P.jsx)(Rh,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,P.jsxs)(Uh,{children:[(d?.galleryRoots??[]).map(e=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:v(e)}),(0,P.jsx)($,{children:e})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(v_,{onClick:()=>void Hn((d?.galleryRoots??[]).filter(t=>t!==e)),title:a(`Stop scanning this folder`),type:`button`,children:(0,P.jsx)(Hi,{size:12})})})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Scan folders`)}),(0,P.jsx)($,{children:(d?.galleryRoots??[]).length===0?a(`Nothing added yet, so the gallery reads the Pictures folder.`):a(`Only these folders are scanned, three levels deep.`)})]}),(0,P.jsx)(Tg,{children:(0,P.jsx)(__,{onClick:()=>void Un(),type:`button`,children:a(`Choose folder…`)})})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`icons`),children:[(0,P.jsx)(Rh,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Use system file icons`)}),(0,P.jsx)($,{children:a(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,P.jsx)(Ig,{$on:d?.systemIcons??!1,disabled:!d,onClick:()=>void K({systemIcons:!d?.systemIcons}),type:`button`,children:(0,P.jsx)(Lg,{})})]}),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Use custom folder icons`)}),(0,P.jsx)($,{children:a(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,P.jsx)(Ig,{$on:d?.customFolderIcons??!1,disabled:!d,onClick:()=>void K({customFolderIcons:!d?.customFolderIcons}),type:`button`,children:(0,P.jsx)(Lg,{})})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`extension-icons`),children:[(0,P.jsx)(Rh,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,P.jsxs)(Uh,{children:[Object.entries(d?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:e}),(0,P.jsx)($,{children:jh(a,t)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Mh,{source:t}),(0,P.jsx)(v_,{onClick:()=>void Fn(e,null),title:a(`Remove this rule`),type:`button`,children:(0,P.jsx)(Hi,{size:12})})]})]},e)),(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Add a rule`)}),(0,P.jsx)($,{children:a(`Extension and the icon to draw for it.`)})]}),(0,P.jsxs)(Tg,{children:[(0,P.jsx)(Rg,{onChange:e=>x(e.target.value),placeholder:`.psd`,spellCheck:!1,value:y}),(0,P.jsxs)(Ug,{children:[(0,P.jsx)(v_,{onClick:()=>re(e=>!e),title:a(`Choose the icon`),type:`button`,children:(0,P.jsx)(Mh,{source:S})}),te&&(0,P.jsx)(df,{allowDefault:!1,onClose:()=>re(!1),onPick:e=>{ee(e??`file`),re(!1)},value:S})]}),(0,P.jsx)(v_,{onClick:()=>void Wn(),title:a(`Add the rule`),type:`button`,children:(0,P.jsx)(Ai,{size:13})})]})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`folder-icons`),children:[(0,P.jsx)(Rh,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Give a folder its own icon`)}),(0,P.jsx)($,{children:a(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,P.jsxs)(Tg,{children:[g&&(0,P.jsx)(Nh,{src:g.icon}),(0,P.jsx)(__,{disabled:ie,onClick:()=>void Gn(),type:`button`,children:a(ie?`Choosing…`:`Choose folder and icon…`)})]})]}),g&&(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:v(g.folder)}),(0,P.jsx)($,{children:g.folder})]}),(0,P.jsx)(Tg,{children:(0,P.jsxs)(b_,{children:[(0,P.jsx)(Vi,{size:11}),` `,a(`Saved`)]})})]})]})]}),(0,P.jsxs)(Vh,{ref:G(`folder-index`),children:[(0,P.jsx)(Rh,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsxs)(Z,{children:[(0,P.jsx)(Q,{children:a(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,P.jsx)($,{children:a(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,P.jsx)(Ig,{$on:d?.writeDirectoryIndex??!0,disabled:!d,onClick:()=>void K({writeDirectoryIndex:!d?.writeDirectoryIndex}),type:`button`,children:(0,P.jsx)(Lg,{})})]}),(0,P.jsxs)(Wh,{children:[(0,P.jsxs)(Gh,{children:[(0,P.jsx)(Q,{children:a(`Directory index blacklist`)}),(0,P.jsx)($,{children:a(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,P.jsx)(r_,{children:(d?.directoryIndexBlacklist??[]).map(e=>(0,P.jsxs)(i_,{children:[(0,P.jsx)(a_,{"aria-label":a(`Directory index blacklist rule`),onBlur:sn,onChange:t=>He({from:e,value:t.target.value}),onFocus:()=>He({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),sn()):e.key===`Escape`&&He(null)},spellCheck:!1,value:Ve?.from===e?Ve.value:e}),(0,P.jsx)(o_,{onClick:()=>un(e),title:a(`Remove`),type:`button`,children:(0,P.jsx)(Hi,{size:10})})]},e))}),(0,P.jsxs)(c_,{children:[(0,P.jsx)(l_,{"aria-label":a(`Directory index blacklist rule`),onChange:e=>Ke(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),cn())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Ge}),(0,P.jsx)(jg,{onClick:cn,type:`button`,children:a(`Add the rule`)})]}),(0,P.jsxs)(s_,{children:[(0,P.jsx)(jg,{onClick:dn,type:`button`,children:a(`Restore defaults`)}),(0,P.jsx)(jg,{onClick:()=>void ln(),type:`button`,children:a(`Add folder…`)})]})]})]}),!(d?.writeDirectoryIndex??!0)&&(0,P.jsx)(S_,{children:Ah(a,e?.platform)})]}),(0,P.jsxs)(Vh,{ref:G(`indexing`),children:[(0,P.jsx)(Rh,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,P.jsx)(kh,{})]}),(0,P.jsxs)(Vh,{ref:G(`files`),children:[(0,P.jsx)(Rh,{note:`What the listings include.`,title:`Files`}),(0,P.jsxs)(Uh,{children:[(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:a(`Hidden items`)}),(0,P.jsx)(Og,{children:Oh(a,l?.showHidden)})]}),(0,P.jsxs)(X,{children:[(0,P.jsx)(Q,{children:a(`Protected operating system files`)}),(0,P.jsx)(Og,{children:Oh(a,l?.showSystem)})]})]}),(0,P.jsx)(x_,{children:a(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,P.jsxs)(ig,{"aria-label":a(`Settings sections`),children:[(0,P.jsx)(ag,{children:a(`Sections`)}),(0,P.jsx)(og,{children:wh.map(({id:e,label:t})=>(0,P.jsx)(sg,{$active:wt===e,onClick:()=>Jt(e),type:`button`,children:(0,P.jsx)(`span`,{children:a(t)})},e))}),(0,P.jsx)(cg,{children:a(`Changes are saved as you make them.`)})]}),ut&&(0,to.createPortal)((0,P.jsx)(fg,{children:(0,P.jsxs)(pg,{"aria-modal":`true`,role:`dialog`,children:[(0,P.jsxs)(mg,{children:[(0,P.jsx)(`h2`,{children:a(`Software update`)}),(0,P.jsx)(`p`,{children:tt?.latest?a(`Version {version}`,{version:tt.latest}):a(`Preparing the update…`)})]}),(0,P.jsx)(hg,{children:a(`Changelog`)}),(0,P.jsx)(gg,{children:ut.changelog||(ut.phase===`changelog`?a(`Loading the changelog…`):a(`The changelog could not be loaded.`))}),(0,P.jsxs)(_g,{children:[(0,P.jsx)(`span`,{children:ug(ut,a)}),(0,P.jsx)(`span`,{children:dg(ut)})]}),(0,P.jsx)(vg,{children:(0,P.jsx)(yg,{$percent:Math.max(0,Math.min(100,ut.percent))})}),ut.error&&(0,P.jsx)(Dg,{children:ut.error}),(0,P.jsxs)(bg,{children:[(ut.phase===`changelog`||ut.phase===`downloading`)&&(0,P.jsx)(__,{onClick:()=>void xn(),type:`button`,children:a(`Cancel`)}),ut.phase===`ready`&&(0,P.jsx)(__,{onClick:()=>void Sn(),type:`button`,children:a(`Install update`)}),ut.phase===`installing`&&(0,P.jsx)(__,{disabled:!0,type:`button`,children:a(`Installing…`)}),(ut.phase===`ready`||ut.phase===`error`||ut.phase===`cancelled`||ut.phase===`installing`)&&(0,P.jsx)(__,{onClick:()=>dt(null),type:`button`,children:a(`Close`)})]})]})}),document.body)]})}function Oh(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function kh(){let e=J(),[t,n]=(0,E.useState)(null);return(0,E.useEffect)(()=>{let e=!0,t=()=>ot().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,P.jsx)(S_,{children:e(`No indexing tasks are running.`)}):(0,P.jsxs)(Uh,{children:[(0,P.jsx)(X,{children:(0,P.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,P.jsx)(X,{children:(0,P.jsx)(Og,{title:e,children:e})},e))]}):(0,P.jsx)(S_,{children:e(`Index task information is unavailable.`)})}function Ah(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function jh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function Mh({source:e}){let t=Sn(e.startsWith(`file:`)?e.slice(5):null);return(0,P.jsx)(y_,{children:t?(0,P.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,P.jsx)(fc,{name:e,size:16})})}function Nh({src:e}){let t=Sn(e);return(0,P.jsx)(y_,{children:t&&(0,P.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Ph({path:e,active:t,onSelect:n,onRemove:r}){let i=J(),a=C(e),o=On(a?null:e),s=a?e:o,c=hd(e.split(/[?#]/)[0]);return(0,P.jsxs)(Qg,{children:[(0,P.jsxs)(Zg,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,P.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,P.jsx)(`img`,{alt:``,src:s})),c&&(0,P.jsx)(e_,{children:(0,P.jsx)(Yi,{size:11})})]}),(0,P.jsx)($g,{onClick:r,title:i(`Remove`),type:`button`,children:(0,P.jsx)(Hi,{size:9})})]})}function Fh({value:e,options:t,onChange:n,disabled:r}){let i=J(),[a,o]=(0,E.useState)(null),s=(0,E.useRef)(null);return(0,E.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(zg,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,P.jsx)(`span`,{children:Ih(i,e)}),(0,P.jsx)(Bg,{children:(0,P.jsx)(Ni,{size:11})})]}),a&&(0,to.createPortal)((0,P.jsx)(Vg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,P.jsxs)(Hg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,P.jsx)(`span`,{children:Ih(i,t)}),t===e&&(0,P.jsx)(Vi,{size:11})]},t))}),document.body)]})}function Ih(e,t){return t===Sh?e(`System default`):Ch[t]??t}function Lh({colors:e,current:t,onApply:n}){let r=J();if(e.length===0)return null;let[i,...a]=e;return(0,P.jsxs)(tg,{children:[(0,P.jsxs)(rg,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,P.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,P.jsx)(ng,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,P.jsx)(Vi,{size:9})},e))]})}function Rh({title:e,note:t,global:n=!1}){let r=J();return(0,P.jsxs)(Hh,{children:[(0,P.jsxs)(`h2`,{children:[r(e),n&&(0,P.jsx)(Qm,{})]}),(0,P.jsx)(`p`,{children:r(t)})]})}var zh=_.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Bh=_.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Vh=_.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Hh=_.header`
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
`,Uh=_.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Wh=_.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Gh=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Kh=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,qh=_.button`
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
`,Jh=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yh=_.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Xh=_.button`
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
`,Zh=_.button`
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
`,Qh=_.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,$h=_.input`
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
`,eg=_.span`
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
`,tg=_.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,ng=_.button`
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
`,rg=_.button`
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
`,ig=_.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,ag=_.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,og=_.div`
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
`,sg=_.button`
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
`,cg=_.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function lg(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function ug(e,t){switch(e.phase){case`changelog`:return t(`Preparing the update…`);case`downloading`:return t(`Downloading the update…`);case`ready`:return t(`Download complete.`);case`cancelled`:return t(`Update cancelled.`);case`error`:return t(`The update failed.`);case`installing`:return t(`Installing…`);default:return``}}function dg(e){return e.total>0?`${f(e.downloaded)} / ${f(e.total)}`:e.downloaded>0?f(e.downloaded):``}var fg=_.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,pg=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(560px, 100%);
    max-height: min(620px, 100%);
    padding: 18px 20px 16px;
    overflow: auto;
    border: 1px solid var(--border-color);
    border-radius: 14px;
    background: var(--bg-secondary);
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
`,mg=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;

    h2 {
        margin: 0;
        font-size: 15px;
        font-weight: 600;
        color: var(--text-primary);
    }

    p {
        margin: 0;
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--text-muted);
    }
`,hg=_.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,gg=_.pre`
    margin: 0;
    max-height: 260px;
    overflow: auto;
    font-family: var(--font-mono);
    font-size: 11px;
    line-height: 1.6;
    white-space: pre-wrap;
    color: var(--text-secondary);
`,_g=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,vg=_.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,yg=_.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,bg=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,xg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Sg=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Cg=_.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,wg=_.div`
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
`,Tg=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=_.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,Eg=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=_.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Dg=_.span`
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
`,Og=_.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,kg=_.input`
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
`,Ag=_.input`
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
`,jg=_.button`
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
`,Mg=_.input`
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
`,Ng=_.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Pg=_.button`
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
`,Fg=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Ig=_.button`
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
`,Lg=_.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Rg=_.input`
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
`,zg=_.button`
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
`,Bg=_.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Vg=_.div`
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
`,Hg=_.button`
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
`,Ug=_.span`
    position: relative;
    display: inline-flex;
`,Wg=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Gg=_.button`
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
`,Kg=_.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,qg=_.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Jg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Yg=_.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Xg=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Zg=_.button`
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
`,Qg=_.div`
    position: relative;
    width: 102px;
    height: 58px;
`,$g=_.button`
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
`,e_=_.span`
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
`,t_=_.button`
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
`,n_=_.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,r_=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,i_=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,a_=_.input`
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
`,o_=_.button`
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
`,s_=_.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,c_=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,l_=_.input`
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
`,u_=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,d_=_.button`
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
`,f_=_.input`
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
`,p_=_.div`
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
`,m_=_.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,h_=_.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,g_=_.button`
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
`,__=_.button`
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
`,v_=_.button`
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
`,y_=_.span`
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
`,b_=_.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,x_=_.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,S_=_.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,C_=150,w_=2500,T_=3,E_=600;function D_({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:p,onRemoveFavorite:m,favoritePaths:h,onExtractArchive:g,showDetails:_=!0,videoAudio:v=!1,videoAutoplay:b=!1}){let x=J(),S=fl(`gallery`),[ee,te]=(0,E.useState)([]),[ne,re]=(0,E.useState)(0),[C,w]=(0,E.useState)(!0),[ie,T]=(0,E.useState)(null),[D,O]=(0,E.useState)(!1),[ae,k]=(0,E.useState)([]),[oe,A]=(0,E.useState)(()=>{let e=ir(`yafm.preview.width`,320);return e>=220?e:320}),se=(0,E.useRef)([]),j=(0,E.useRef)(0),M=(0,E.useRef)(!1),ce=(0,E.useRef)(!0),le=(0,E.useRef)(0),N=(0,E.useRef)(null),ue=(0,E.useRef)(0),de=(0,E.useCallback)(async e=>{let t=++le.current;w(!0),ce.current=!0,T(null);try{let n=await Qe(0,C_,e);if(t!==le.current)return;se.current=n.entries,j.current=n.total,te(n.entries),re(n.total)}catch(e){t===le.current&&T(e instanceof Error?e.message:String(e))}finally{t===le.current&&(ce.current=!1,w(!1))}},[]);(0,E.useEffect)(()=>{de(!1)},[de]);let fe=(0,E.useCallback)(async()=>{if(ce.current||M.current||se.current.length>=j.current)return;let e=le.current;M.current=!0;try{let t=se.current,n=j.current;for(let r=0;r<T_&&t.length<n;r++){let r=await Qe(t.length,C_,!1);if(e!==le.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<C_)break}if(e!==le.current)return;se.current=t,j.current=n,(0,E.startTransition)(()=>{te(t),re(n)})}catch{}finally{M.current=!1}},[]),F=(0,E.useCallback)(e=>{ue.current||=window.requestAnimationFrame(()=>{ue.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<w_&&fe()})},[fe]);(0,E.useEffect)(()=>{let e=N.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&fe()},{root:e.parentElement,rootMargin:`${w_}px 0px`});return t.observe(e),()=>t.disconnect()},[fe]),(0,E.useEffect)(()=>{if(ee.length>=ne)return;let e=window.setTimeout(()=>{let e=N.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<w_&&fe()},200);return()=>window.clearTimeout(e)},[ee.length,ne,fe]);let I=(0,E.useMemo)(()=>({path:``,parent:null,entries:ee.map(O_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[ee]),pe=(0,E.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),me=(0,E.useCallback)(e=>{l?l(e):Ne(e)},[l]),he=(0,E.useCallback)(e=>{let t=k_(e.modified);return{id:t,label:t}},[]),ge=()=>{O(!0),de(!0).finally(()=>O(!1))},L=ee.length<ne,_e=(0,E.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:ee.filter(e=>zn(e.name,a)||zn(e.path,a)),[ee,a?.open,a?.query,a?.matchCase,a?.regex]),ve=(0,E.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:_e[Math.min(a.index,Math.max(0,_e.length-1))]?.path??null}:jn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,_e]);(0,E.useEffect)(()=>{c?.(_e.length)},[_e.length,c]);let ye=(0,E.useCallback)(e=>{k(e),u?.(e)},[u]),R=e=>{A(e),ar(`yafm.preview.width`,e)},z=ae.length>0?ee.find(e=>e.path===ae[0])??null:null,be=z?.name.includes(`.`)?z.name.slice(z.name.lastIndexOf(`.`)+1).toUpperCase():`—`,xe=z&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(z.name)?x(`Video`):x(`Picture`),Se=z?z.path.slice(0,Math.max(z.path.lastIndexOf(`\\`),z.path.lastIndexOf(`/`))):``,Ce=z?{name:z.name,path:z.path,isDirectory:!1,size:z.size,modified:z.modified,fields:[{label:x(`Type`),value:xe},{label:x(`Extension`),value:be},{label:x(`Location`),value:Se},{label:x(`Full path`),value:z.path},{label:x(`Size`),value:f(z.size)},{label:x(`Modified`),value:y(z.modified)},{label:x(`Created`),value:`—`}]}:null;return(0,P.jsxs)(A_,{children:[(0,P.jsxs)(N_,{children:[(0,P.jsxs)(F_,{children:[(0,P.jsx)(`span`,{children:x(`Gallery`)}),(0,P.jsx)(I_,{children:C?x(`scanning…`):x(`{shown} of {total} pictures`,{shown:ee.length,total:ne})})]}),(0,P.jsxs)(P_,{children:[(0,P.jsx)(L_,{onClick:ge,title:x(`Scan the folders again`),type:`button`,children:(0,P.jsx)(R_,{$spinning:D,children:(0,P.jsx)(ki,{size:14})})}),S.available&&(0,P.jsx)(L_,{onClick:e=>S.open(e.clientX,e.clientY),title:x(`Selection menu`),type:`button`,children:(0,P.jsx)(Pa,{size:14})})]})]}),ie&&(0,P.jsx)(B_,{children:ie}),!ie&&!C&&ne===0&&(0,P.jsx)(B_,{children:x(`No pictures found.`)}),!ie&&(C||ne>0)&&(0,P.jsxs)(j_,{children:[(0,P.jsx)(M_,{children:(0,P.jsx)(El,{confirmDelete:n,find:ve,selectMatchesToken:s,listing:C&&ee.length===0?null:I,loading:C,error:null,view:pe,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ye,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:me,onOpenFile:me,onRefresh:ge,onAddToTray:d,onAddFavorite:p,onRemoveFavorite:m,favoritePaths:h,onExtractArchive:g,groupOf:he,onGridScroll:F,gridFooter:(0,P.jsx)(z_,{$space:L?E_:1,ref:N}),allowBackgroundMenu:!1})}),_&&(0,P.jsx)(_s,{emptyNote:x(`Nothing selected.`),info:Ce,onWidth:R,selectionNote:ae.length>1?o(x,ae.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:v,videoAutoplay:b,width:oe})]})]})}function O_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function k_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(x(),{weekday:`long`}):t.toLocaleDateString(x(),{year:`numeric`,month:`long`,day:`numeric`})}var A_=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,j_=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,M_=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,N_=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,P_=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,F_=_.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,I_=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,L_=_.button`
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
`,R_=_.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,z_=_.div`
    height: ${({$space:e})=>e}px;
`,B_=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function V_({places:e,drives:n,recent:r,recentLimit:i,currentPath:a,activeKind:o,homePath:s=``,version:c=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:p,onOpenView:m}){let[h,g]=(0,E.useState)([]),_=J(),[y,b]=(0,E.useState)(null),x=qn();(0,E.useEffect)(()=>{ct().then(e=>{b(e),g(Ks(e).filter(e=>e.pinned))},()=>{b(null),g([])})},[c]),(0,E.useEffect)(()=>{if(!N.available)return;let e=h.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return N.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>N.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[h,s]);let S=n=>n.id===`quick`?e:(n.places??[]).map(n=>{let r=e.find(e=>t(e.path,n));return{name:y?.placeNames?.[n]??r?.name??(v(n)||n),path:n,kind:`folder`,icon:r?.icon??y?.placeIcons?.[n]??null}}),ee=o===`files`;return(0,P.jsxs)(q_,{children:[(0,P.jsxs)(J_,{children:[!u.includes(`home`)&&(0,P.jsxs)($_,{$active:o===`home`,onClick:e=>m(`home`,en(e)),title:_(`Overview`),type:`button`,children:[(0,P.jsx)(oa,{}),(0,P.jsx)(tv,{children:_(`Overview`)})]}),!u.includes(`recycle`)&&(0,P.jsxs)($_,{$active:o===`recycle`,onClick:e=>m(`recycle`,en(e)),title:_(`Recycle Bin`),type:`button`,children:[(0,P.jsx)(Bi,{}),(0,P.jsx)(tv,{children:_(`Recycle Bin`)})]}),!u.includes(`gallery`)&&(0,P.jsxs)($_,{$active:o===`gallery`,onClick:e=>m(`gallery`,en(e)),title:_(`Gallery`),type:`button`,children:[(0,P.jsx)(Ji,{}),(0,P.jsx)(tv,{children:_(`Gallery`)})]})]}),h.map(e=>(0,P.jsxs)(X_,{children:[(0,P.jsxs)($_,{as:`div`,$active:!1,children:[(0,P.jsx)(ev,{children:(0,P.jsx)(Js,{panel:e,size:16})}),(0,P.jsx)(tv,{children:_(cr(e.title))})]}),(0,P.jsx)(Z_,{children:(0,P.jsxs)(Q_,{children:[e.kind===`quick`&&S(e).map(e=>(0,P.jsxs)($_,{$active:ee&&t(a,e.path),onClick:t=>p(e.path,en(t)),title:e.path,type:`button`,children:[(0,P.jsx)(Ys,{place:e}),(0,P.jsx)(tv,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let n=Jn(x,e.path);return(0,P.jsxs)($_,{$active:ee&&t(a,e.path),onClick:t=>e.isDirectory?p(e.path,en(t)):void Ne(e.path),title:e.path,type:`button`,children:[n&&x.useIcons?(0,P.jsx)(Ys,{place:n}):(0,P.jsx)(pc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,P.jsx)(tv,{children:n?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,P.jsx)(W_,{historyVersion:l,onNavigate:p}),e.kind===`drives`&&n.map(e=>{let n=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,P.jsxs)($_,{$active:ee&&t(a,e.name),onClick:t=>p(e.name,en(t)),title:e.name,type:`button`,children:[(0,P.jsx)(Ei,{}),(0,P.jsxs)(tv,{children:[d(e),(0,P.jsxs)(nv,{children:[f(e.freeSpace),` free`]}),(0,P.jsx)(rv,{children:(0,P.jsx)(iv,{$used:n,$tone:w(n)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,P.jsx)(G_,{onNavigate:p,path:e.path||s})]})})]},e.id)),!u.includes(`settings`)&&(0,P.jsx)(Y_,{children:(0,P.jsxs)($_,{$active:o===`settings`,onClick:e=>m(`settings`,en(e)),title:_(`Settings`),type:`button`,children:[(0,P.jsx)(Pi,{}),(0,P.jsx)(tv,{children:_(`Settings`)})]})})]})}var H_=10,U_=40;function W_({historyVersion:e=0,onNavigate:t}){let n=J(),[r,i]=(0,E.useState)(null),a=qn();return(0,E.useEffect)(()=>{et().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Jn(a,e.path);return(0,P.jsxs)($_,{$active:!1,onClick:n=>t(e.path,en(n)),title:o(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,P.jsx)(Ys,{place:r}):(0,P.jsx)(pc,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,P.jsx)(tv,{children:r?.name||e.name})]},e.path)})}function G_({path:e,onNavigate:n}){let[r,i]=(0,E.useState)(null);(0,E.useEffect)(()=>{e&&(i(null),Pe(e,!1).then(i,()=>i(null)))},[e]),(0,E.useEffect)(()=>{if(e&&N.available)return N.on(n=>{let r=n;r.type===`fs.changed`&&typeof r.data?.path==`string`&&t(r.data.path,e)&&Pe(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,H_),s=a.filter(e=>!e.isDirectory).slice(0,U_);return(0,P.jsxs)(P.Fragment,{children:[o.map(e=>(0,P.jsx)(K_,{entry:e,onNavigate:n},e.fullPath)),s.map(e=>(0,P.jsx)(K_,{entry:e,onNavigate:n},e.fullPath))]})}function K_({entry:e,onNavigate:t}){let n=qn(),r=Jn(n,e.fullPath);return(0,P.jsxs)($_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,en(n)):void Ne(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,P.jsx)(Ys,{place:r}):(0,P.jsx)(pc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,P.jsx)(tv,{children:r?.name||e.name})]})}var q_=_.aside`
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

    &:not(:hover) ${()=>nv},
    &:not(:hover) ${()=>rv} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,J_=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Y_=_(J_)`
    margin-top: auto;
`,X_=_.div`
    display: flex;
    flex-direction: column;
`,Z_=_.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${q_}:hover ${X_}:hover > & {
        grid-template-rows: 1fr;
    }
`,Q_=_.div`
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
`,$_=_.button`
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
`,ev=_.span`
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
`,tv=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nv=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,rv=_.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,iv=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,av=_.span`
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
`;function ov({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=J(),a=(0,E.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,E.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,P.jsxs)(cv,{ref:a,children:[(0,P.jsxs)(lv,{$active:n,onClick:()=>r(!n),title:s>0?o(i,s,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,P.jsx)(zi,{size:13}),c>0&&(0,P.jsx)(av,{children:c>9?`9+`:c})]}),n&&(0,P.jsxs)(uv,{children:[(0,P.jsxs)(dv,{children:[(0,P.jsx)(fv,{children:i(`Status center`)}),(0,P.jsxs)(pv,{children:[(0,P.jsx)(mv,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,P.jsx)(hv,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,P.jsx)(Hi,{size:10})})]})]}),e.length===0?(0,P.jsx)(_v,{children:i(`No operations yet.`)}):(0,P.jsx)(gv,{children:e.map(e=>(0,P.jsx)(sv,{task:e},e.id))})]})]})}function sv({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,P.jsxs)(vv,{children:[(0,P.jsxs)(yv,{children:[(0,P.jsx)(bv,{$state:e.state,children:e.state===`done`?(0,P.jsx)(Vi,{size:10}):e.state===`failed`?(0,P.jsx)(Hi,{size:10}):(0,P.jsx)(xv,{})}),(0,P.jsx)(Sv,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,P.jsxs)(Cv,{children:[f(e.bytesDone),` / `,f(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,P.jsxs)(Cv,{children:[e.done,` / `,e.total]})]}),i&&(0,P.jsx)(wv,{children:(0,P.jsx)(Tv,{$percent:r,$indeterminate:t===0})}),e.error&&(0,P.jsx)(Ev,{children:e.error})]})}var cv=_.div`
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
    transition: background 130ms ease, color 130ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.10);
        color: var(--text-primary);
    }
`,uv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${no}
    ${go}
`,dv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,fv=_.span`
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
`,pv=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,mv=_.button`
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
`,hv=_.button`
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
`,gv=_.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,_v=_.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,vv=_.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${_o}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,yv=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,bv=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,xv=_.span`
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
`,Sv=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cv=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,wv=_.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Tv=_.div`
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
`,Ev=_.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Dv(){return N.available?(await N.request(`fs.history.list`)).entries:[]}async function Ov(e){return N.available?(await N.request(`fs.history.undoTo`,{id:e})).ok:!1}function kv(){let e=J(),[t,n]=(0,E.useState)(!1),[r,i]=(0,E.useState)([]),[a,o]=(0,E.useState)(!1),s=(0,E.useRef)(null),c=()=>void Dv().then(i,()=>i([]));(0,E.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await Ov(e),c()}finally{o(!1)}};return(0,P.jsxs)(Mv,{ref:s,children:[(0,P.jsx)(Nv,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,P.jsx)(Ri,{size:14})}),t&&(0,P.jsxs)(Pv,{children:[(0,P.jsxs)(Fv,{children:[(0,P.jsx)(Iv,{children:e(`History`)}),(0,P.jsx)(Lv,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,P.jsx)(Hi,{size:10})})]}),r.length===0?(0,P.jsx)(Kv,{children:e(`No operations yet.`)}):(0,P.jsx)(Rv,{children:r.map(t=>(0,P.jsxs)(zv,{children:[(0,P.jsxs)(Bv,{children:[(0,P.jsxs)(Vv,{children:[(0,P.jsx)(jv,{label:t.label}),Av(e,t.label)]}),(0,P.jsx)(Hv,{children:S(t.at)})]}),t.paths.length>0&&(0,P.jsxs)(Uv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,P.jsx)(Wv,{children:(0,P.jsx)(Gv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function Av(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);if(t===`Paste text`)return e(`Paste text`);if(t===`Paste image`)return e(`Paste image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function jv({label:e}){return e.startsWith(`Delete`)?(0,P.jsx)(Bi,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,P.jsx)(Da,{size:13}):e.startsWith(`Rename`)?(0,P.jsx)(sa,{size:13}):e.startsWith(`Compress`)?(0,P.jsx)(Zi,{size:13}):e.startsWith(`New`)?(0,P.jsx)(Ai,{size:13}):(0,P.jsx)(Mi,{size:13})}var Mv=_.div`
    position: relative;
    display: flex;
`,Nv=_.button`
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
`,Pv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${no}
    ${go}
`,Fv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Iv=_.span`
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
`,Lv=_.button`
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
`,Rv=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,zv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Bv=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Vv=_.span`
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
`,Hv=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Uv=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wv=_.div`
    display: flex;
    justify-content: flex-end;
`,Gv=_.button`
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
`,Kv=_.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function qv({currentFolder:e}){let n=J(),[r,i]=(0,E.useState)(!1),[a,o]=(0,E.useState)(null),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!r)return;let e=()=>void Vc().then(o,()=>void 0);e();let t=window.setInterval(e,2500),n=e=>{l.current?.contains(e.target)||i(!1)};return window.addEventListener(`pointerdown`,n),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n)}},[r]),(0,E.useEffect)(()=>{let e=()=>void Vc().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(n=>t(n.path,e))??!1;return(0,P.jsxs)(Jv,{ref:l,children:[(0,P.jsxs)(Yv,{$active:r,onClick:()=>i(e=>!e),title:n(`Share folders`),type:`button`,children:[(0,P.jsx)(xa,{size:15}),a&&a.shares.length>0&&(0,P.jsx)(av,{children:a.shares.length>9?`9+`:a.shares.length})]}),r&&(0,P.jsxs)(Xv,{children:[(0,P.jsxs)(Zv,{children:[(0,P.jsx)(Qv,{children:n(`Share`)}),(0,P.jsx)($v,{onClick:()=>i(!1),title:n(`Close`),type:`button`,children:(0,P.jsx)(Hi,{size:10})})]}),(0,P.jsxs)(ey,{children:[(0,P.jsxs)(ty,{children:[(0,P.jsx)(Gi,{size:15}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`strong`,{children:a?.deviceName||n(`This device`)}),(0,P.jsx)(ny,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,P.jsx)(ry,{children:n(`No folders are shared yet.`)}),a?.shares.map(e=>(0,P.jsxs)(iy,{children:[(0,P.jsxs)(ay,{children:[(0,P.jsx)(oy,{title:e.path,children:e.name}),(0,P.jsx)(cy,{disabled:s,onClick:()=>void u(()=>Uc(e.id)),title:n(`Stop sharing`),type:`button`,children:(0,P.jsx)(Hi,{size:10})})]}),(0,P.jsx)(sy,{title:e.path,children:e.path}),(0,P.jsxs)(ly,{children:[(0,P.jsxs)(uy,{$active:e.mode===`client`,onClick:()=>void u(()=>Wc(e.id,`client`)),title:n(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,P.jsx)(Gi,{size:11}),n(`App`)]}),(0,P.jsxs)(uy,{$active:e.mode===`web`,onClick:()=>void u(()=>Wc(e.id,`web`)),title:n(`Any device with a browser can open this folder.`),type:`button`,children:[(0,P.jsx)(Ca,{size:11}),n(`Web`)]})]})]},e.id)),(0,P.jsxs)(dy,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Hc(e,`client`)),title:d?n(`This folder is already shared.`):e,type:`button`,children:[(0,P.jsx)(Ai,{size:12}),n(`Share this folder`)]}),a?.webRunning&&(0,P.jsxs)(fy,{children:[(0,P.jsxs)(py,{children:[(0,P.jsx)(Ca,{size:12}),n(`Browser access`)]}),a.urls.map(e=>(0,P.jsx)(my,{onClick:()=>void R(e),type:`button`,children:e},e)),(0,P.jsx)(ny,{children:n(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var Jv=_.div`
    position: relative;
    display: flex;
`,Yv=_.button`
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
`,Xv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${no}
    ${go}
`,Zv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Qv=_.span`
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
`,$v=_.button`
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
`,ey=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,ty=_.div`
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
`,ny=_.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,ry=_.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,iy=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,ay=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,oy=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,sy=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cy=_.button`
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
`,ly=_.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,uy=_.button`
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
`,dy=_.button`
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
`,fy=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,py=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,my=_.button`
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
`;function hy({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=J(),[s,c]=(0,E.useState)(!1),l=(0,E.useRef)(null);(0,E.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,E.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=_l.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,P.jsxs)(gy,{ref:l,children:[(0,P.jsx)(_y,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,P.jsx)(Li,{size:14}):(0,P.jsx)(Ii,{size:14})}),s&&(0,P.jsxs)(vy,{children:[(0,P.jsx)(yy,{children:o(`View`)}),(0,P.jsxs)(xy,{children:[(0,P.jsxs)(Sy,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,P.jsx)(Ii,{size:12}),` `,o(`List`)]}),(0,P.jsxs)(Sy,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,P.jsx)(Li,{size:12}),` `,o(`Grid`)]})]}),(0,P.jsx)(yy,{children:o(`List icon size`)}),(0,P.jsxs)(Cy,{children:[(0,P.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,P.jsxs)(wy,{children:[e.iconSize,`px`]})]}),(0,P.jsx)(yy,{children:o(`Grid size`)}),(0,P.jsxs)(Cy,{children:[(0,P.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,P.jsxs)(wy,{children:[e.gridSize,`px`]})]}),(0,P.jsxs)(yy,{children:[o(`Columns`),(0,P.jsx)(Qm,{}),(0,P.jsx)(by,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`Reset column widths`),type:`button`,children:o(`Reset widths`)})]}),_l.map(e=>(0,P.jsxs)(Ty,{children:[(0,P.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,P.jsxs)(Ty,{children:[(0,P.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,P.jsxs)(yy,{children:[o(`Preview panel`),(0,P.jsx)(Qm,{})]}),(0,P.jsxs)(Ty,{children:[(0,P.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,P.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var gy=_.div`
    position: relative;
    display: flex;
    height: 100%;
`,_y=_.button`
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
`,vy=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${no}
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
`,yy=_.div`
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
`,by=_.button`
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
`,xy=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Sy=_.button`
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
`,Cy=_.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,wy=_.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Ty=_.label`
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
`,Ey=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Dy=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Oy=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,P.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),ky=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,P.jsx)(`path`,{d:`M2 5h6`})}),Ay=e=>(0,P.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,P.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),jy=e=>(0,P.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,P.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,P.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function My({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:p,activityOpen:m,onActivityOpenChange:h,trayCount:g,trayVisible:_,onToggleTray:v,split:y,canSplit:b,onToggleSplit:x,details:S,canDetails:ee,onToggleDetails:te,shortcuts:ne,currentFolder:re}){let C=J(),w=he(),ie=ge(),[T,D]=(0,E.useState)({left:!1,right:!1}),[O,ae]=(0,E.useState)(null),[k,oe]=(0,E.useState)(null),A=(0,E.useRef)(null),se=(0,E.useRef)(null),j=(0,E.useRef)(null),M=(0,E.useCallback)(()=>{let e=se.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;D(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,E.useEffect)(()=>{M();let e=se.current;if(!e)return;let t=new ResizeObserver(M);return t.observe(e),()=>t.disconnect()},[M,e.length]),(0,E.useEffect)(()=>()=>{A.current&&window.clearTimeout(A.current.timer)},[]),(0,E.useEffect)(()=>{j.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let ce=e=>se.current?.scrollBy({left:e,behavior:`smooth`}),le=()=>{A.current&&window.clearTimeout(A.current.timer),A.current=null,oe(null)};return(0,P.jsxs)(Iy,{children:[(0,P.jsx)(Ly,{children:(0,P.jsx)(Gi,{size:19})}),(0,P.jsxs)(Ry,{children:[T.left&&(0,P.jsx)(By,{onClick:()=>ce(-180),title:C(`Scroll tabs left`),type:`button`,children:(0,P.jsx)(Ey,{})}),(0,P.jsx)(zy,{onScroll:M,onWheel:e=>{let t=se.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:se,children:e.map(e=>(0,P.jsxs)(Vy,{$active:e.id===t,$dragging:O===e.id,$dropTarget:k===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!gc(t.dataTransfer)||!Ny(e)||(t.preventDefault(),A.current?.id===e.id))return;le(),oe(e.id);let r=window.setTimeout(()=>{n(e.id),A.current=null},500);A.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(A.current?.id===e.id||k===e.id)&&le()},onDragEnd:()=>{ae(null),le()},onDragOver:t=>{(O||gc(t.dataTransfer)&&Ny(e))&&(t.preventDefault(),gc(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>ae(e.id),onDrop:t=>{if(t.preventDefault(),O)a(O,e.id);else if(Ny(e)&&gc(t.dataTransfer)){let{paths:r,move:i}=_c(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}ae(null),le()},onClick:()=>n(e.id),ref:e.id===t?j:void 0,title:e.path||e.title,type:`button`,children:[(0,P.jsx)(Py,{tab:e}),(0,P.jsx)(Hy,{children:e.title}),e.partner&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Uy,{children:`|`}),(0,P.jsx)(Fy,{place:e.partner.place}),(0,P.jsx)(Hy,{children:e.partner.title})]}),(0,P.jsx)(Wy,{"data-shortcut":nn(ne.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:C(`Close tab`),children:(0,P.jsx)(Oy,{})})]},e.id))}),T.right&&(0,P.jsx)(By,{onClick:()=>ce(180),title:C(`Scroll tabs right`),type:`button`,children:(0,P.jsx)(Dy,{})}),(0,P.jsx)(Gy,{"data-shortcut":nn(ne.newTab),onClick:i,title:C(`New tab`),type:`button`,children:(0,P.jsx)(Ai,{size:13})})]}),(0,P.jsx)(Ky,{...ie}),(0,P.jsxs)(qy,{children:[(0,P.jsx)(Yy,{$active:y,"data-shortcut":nn(ne.splitView),disabled:!b,onClick:x,title:C(y?`Close split view`:`Split view`),type:`button`,children:(0,P.jsx)(Ma,{size:15})}),(0,P.jsx)(Yy,{$active:S,disabled:!ee,onClick:te,title:C(S?`Hide details panel`:`Show details panel`),type:`button`,children:(0,P.jsx)(Na,{size:15})}),(0,P.jsxs)(Jy,{$active:_,onClick:v,title:C(_?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,P.jsx)(Sa,{size:14}),g>0&&(0,P.jsx)(av,{children:g>9?`9+`:g})]}),(0,P.jsx)(kv,{}),(0,P.jsx)(qv,{currentFolder:re}),(0,P.jsx)(ov,{tasks:f,onClear:p,open:m,onOpenChange:h}),(0,P.jsx)(hy,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,P.jsx)(Xy,{onClick:w.minimize,title:C(`Minimize`),type:`button`,children:(0,P.jsx)(ky,{})}),(0,P.jsx)(Xy,{onClick:w.toggleMaximize,title:w.maximized?C(`Restore`):C(`Maximize`),type:`button`,children:w.maximized?(0,P.jsx)(jy,{}):(0,P.jsx)(Ay,{})}),(0,P.jsx)(Zy,{onClick:w.close,title:C(`Close`),type:`button`,children:(0,P.jsx)(Oy,{})})]})]})}function Ny(e){return e.kind===`files`&&(!p(e.path)||T(e.path))}function Py({tab:e}){switch(e.kind){case`home`:return(0,P.jsx)(Ci,{size:13});case`settings`:return(0,P.jsx)(Pi,{size:13});case`recycle`:return(0,P.jsx)(Bi,{size:13});default:return e.archive?(0,P.jsx)(Zi,{size:13}):(0,P.jsx)(Fy,{place:e.place})}}function Fy({place:e}){return e?(0,P.jsx)(Ys,{place:e,size:13}):(0,P.jsx)(wi,{size:13})}var Iy=_.header`
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
`,Ly=_.span`
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
`,Ry=_.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,zy=_.div`
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
`,By=_.button`
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
`,Vy=_.button`
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
`,Hy=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uy=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Wy=_.span`
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
`,Gy=_.button`
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
`,Ky=_.div`
    flex: 1;
    min-width: 28px;
`,qy=_.div`
    display: flex;
    flex-shrink: 0;
`,Jy=_.button`
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
`,Yy=_.button`
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
`,Xy=_.button`
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
`,Zy=_(Xy)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Qy(){let[e,t]=(0,E.useState)(null),n=(0,E.useRef)(null),r=(0,E.useRef)(void 0);return(0,E.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,to.createPortal)((0,P.jsx)($y,{tooltip:e}),document.body):null}function $y({tooltip:e}){let t=(0,E.useRef)(null),[n,r]=(0,E.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,E.useState)(()=>e.bottom+6);return(0,E.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,P.jsxs)(eb,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,P.jsx)(tb,{children:e.text}),e.shortcut&&(0,P.jsx)(nb,{children:e.shortcut})]})}var eb=_.div`
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
    ${_o}
`,tb=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,nb=_.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,rb={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function ib({deviceName:e,code:t,onAccept:n,onReject:r}){let i=J(),a=(0,E.useRef)(null);return(0,E.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,to.createPortal)((0,P.jsx)(ab,{children:(0,P.jsxs)(ob,{role:`alertdialog`,"aria-modal":`true`,children:[(0,P.jsxs)(sb,{children:[(0,P.jsx)(xa,{size:15}),i(`Pair for sharing`)]}),(0,P.jsx)(cb,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,P.jsx)(lb,{children:t}),(0,P.jsx)(ub,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,P.jsxs)(db,{children:[(0,P.jsx)(fb,{onClick:r,type:`button`,children:i(`Reject`)}),(0,P.jsx)(pb,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var ab=_.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${_o}
`,ob=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${fo}
`,sb=_.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,cb=_.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,lb=_.div`
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
`,ub=_.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,db=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,fb=_.button`
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
`,pb=_(fb)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,mb=0,hb=new Set;function gb(e){hb.add(e),N.send({type:`app.navigate.done`,payload:{path:e}})}var _b=20,vb=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function yb(e){return e.history[e.index]??Kp(`home`)}function bb(e){return qp(yb(e))??`files`}function xb(e){let t=yb(e);return qp(t)?``:e.listing?.path||t}function Sb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||bb(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Cb(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function wb(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Ae.iconSize,gridSize:e.view?.gridSize||t.gridSize||Ae.gridSize,sort:e.view?.sort??Ae.sort,sortDescending:e.view?.sortDescending??Ae.sortDescending,columns:t.columns??je.columns??[]}}function Tb(e=Kp(`home`)){return mb+=1,{id:`tab-${mb}`,listing:null,loading:!qp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Eb(e){return e instanceof Error?e.message:String(e)}function Db(e){let t=Qc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return $c(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Ob(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function kb(e){return p(e)?cn(e):void 0}function Ab(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return o(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:f(n)})}function jb(){let e=J(),[n,r]=(0,E.useState)(()=>[Tb()]),[i,a]=(0,E.useState)(()=>n[0].id),[o,s]=(0,E.useState)(null),[d,f]=(0,E.useState)(()=>{let e=ir(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[m,h]=(0,E.useState)([]),[g,_]=(0,E.useState)([]),[y,b]=(0,E.useState)(null),[x,S]=(0,E.useState)(null),[ne,re]=(0,E.useState)(null),C=L(),[w,ie]=(0,E.useState)(An),[D,O]=(0,E.useState)(0),[ae,k]=(0,E.useState)(0),[oe,A]=(0,E.useState)(0),[se,j]=(0,E.useState)(An),[M,ce]=(0,E.useState)(0),[le,ue]=(0,E.useState)(0),[de,fe]=(0,E.useState)(0),[F,I]=(0,E.useState)(0),pe=(0,E.useRef)(F);pe.current=F;let[me,he]=(0,E.useState)([]),[ge,_e]=(0,E.useState)(10),[R,z]=(0,E.useState)(null),be=(0,E.useMemo)(()=>(R?.favorites??[]).map(e=>l(e.path)),[R?.favorites]),[Se,Ce]=(0,E.useState)(0),[B,we]=(0,E.useState)(Zt),[Te,Ee]=(0,E.useState)(0),[De,V]=(0,E.useState)(0),[ke,Me]=(0,E.useState)(0),[Re,We]=(0,E.useState)(!0),[Ge,Ke]=(0,E.useState)(()=>{let e=ir(`yafm.preview.width`,320);return e>=220?e:320}),[qe,Je]=(0,E.useState)(null),[Ye,Xe]=(0,E.useState)(null),[Ze,Qe]=(0,E.useState)(`primary`),[et,nt]=(0,E.useState)(null),[rt,it]=(0,E.useState)(null),[ot,st]=(0,E.useState)(null),[lt,ut]=(0,E.useState)(null),[dt,ft]=(0,E.useState)({primary:0,secondary:0}),[H,pt]=(0,E.useState)({primary:null,secondary:null}),[mt,ht]=(0,E.useState)(null),[vt,U]=(0,E.useState)([]),[yt,bt]=(0,E.useState)(!1),xt=(0,E.useRef)([]),St=(0,E.useRef)([]),[Ct,wt]=(0,E.useState)([]),[Tt,Et]=(0,E.useState)(!1),Ot=(0,E.useMemo)(()=>Tt?new Set(Ct.map(e=>e.path)):new Set,[Ct,Tt]),[jt,Ft]=(0,E.useState)(!1),[Lt,Rt]=(0,E.useState)([]),[zt,Vt]=(0,E.useState)(null),Ht=(0,E.useRef)(0),[Ut,Wt]=(0,E.useState)(()=>{let e=or(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Cb({x:e.x,y:e.y}):Cb({x:Math.max(20,window.innerWidth-340),y:110})}),Gt=(0,E.useCallback)(()=>{Wt(e=>Cb(e)),Ft(!0)},[]),W=n.find(e=>e.id===i)??n[0],G=bb(W),Jt=yb(W),Qt=xb(W),rn=G===`files`?W.listing?.parent??Db(Qt):null,on=W.splitWith?n.find(e=>e.id===W.splitWith):void 0,sn=G===`files`&&on!==void 0,q=on?xb(on):``,fn=on?on.listing?.parent??Db(q):null,pn=sn&&on&&Ze===`secondary`?on:W,mn=R?.defaultView??je,_n=wb(pn,mn);(0,E.useEffect)(()=>{ee(R?.accentColor,R?.secondaryColor)},[R?.accentColor,R?.secondaryColor]),(0,E.useEffect)(()=>{nh(R?.fonts)},[R?.fonts]),(0,E.useEffect)(()=>{te(R?.timeFormat,R?.timeFormatPattern)},[R?.timeFormat,R?.timeFormatPattern]),(0,E.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!R?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[R?.backgroundSource]),(0,E.useEffect)(()=>(Oe(e=>new Promise(t=>{Vt({id:++Ht.current,prompt:e,resolve:t})})),()=>Oe(null)),[]),(0,E.useEffect)(()=>{Qe(`primary`)},[i]),(0,E.useEffect)(()=>{j(An),ue(0),fe(0)},[G]),(0,E.useEffect)(()=>{ue(0)},[se.query,se.matchCase,se.regex]),(0,E.useEffect)(()=>{ue(e=>de===0?0:Math.min(e,de-1))},[de]);let vn=_n.columns.includes(`linkCount`),yn=(0,E.useMemo)(()=>{let e={},t=Ks(R),n={};for(let[e,t]of Object.entries(R?.placeNames??{}))n[l(e)]=t;for(let t of m)e[l(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=l(t),i=m.find(e=>l(e.path)===r);e[r]={name:n[r]??i?.name??(v(t)||t),path:t,kind:`folder`,icon:i?.icon??R?.placeIcons?.[t]??null}}return e},[m,R]),bn=(0,E.useMemo)(()=>({places:yn,useIcons:R?.systemIcons===!1}),[yn,R?.systemIcons]),xn=R?.defaultView?.showImages??!0,Sn=R?.defaultView?.imageStripHeight??je.imageStripHeight,Cn=G===`home`?(0,P.jsx)(oa,{size:13}):G===`settings`?(0,P.jsx)(Pi,{size:13}):G===`recycle`?(0,P.jsx)(Bi,{size:13}):G===`gallery`?(0,P.jsx)(Ji,{size:13}):void 0,wn=w.open&&w.query.length>0,Tn=(0,E.useMemo)(()=>wn&&pn.listing?pn.listing.entries.filter(e=>zn(e.isDirectory?Yn(bn,e.fullPath,e.name):e.name,w)).map(e=>e.fullPath):[],[wn,w,pn.listing,bn]);(0,E.useEffect)(()=>{O(0)},[w.query,w.matchCase,w.regex,pn.listing?.path]);let En=Tn.length===0?-1:Math.min(D,Tn.length-1),Dn=(0,E.useCallback)(()=>{ie(e=>({...e,open:!1,query:``})),O(0)},[]),On=(0,E.useCallback)(()=>{ie(e=>({...e,open:!0})),k(e=>e+1)},[]),kn=(0,E.useCallback)(()=>{j(e=>({...e,open:!0})),ce(e=>e+1)},[]),jn=(0,E.useCallback)(()=>{j(An),ue(0),fe(0)},[]),Mn=(0,E.useCallback)(e=>{ue(t=>de===0?0:(Math.min(t,de-1)+e+de)%de)},[de]),Nn=(0,E.useCallback)(e=>{ie(t=>({...t,open:!0,query:t.open?t.query+e:e})),k(e=>e+1)},[]),Pn=(0,E.useCallback)(e=>{O(t=>Tn.length===0?0:(Math.min(t,Tn.length-1)+e+Tn.length)%Tn.length)},[Tn.length]),Fn=(0,E.useRef)({tabs:n,activeId:i,activePane:Ze});Fn.current={tabs:n,activeId:i,activePane:Ze};let In=(0,E.useRef)(R);In.current=R;let Ln=(0,E.useRef)(!1),Rn=(0,E.useRef)([]),Bn=(0,E.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Vn=(0,E.useRef)(new Map),Hn=(0,E.useCallback)(e=>{let t=(Vn.current.get(e)??0)+1;return Vn.current.set(e,t),()=>Vn.current.get(e)===t},[]),Un=(0,E.useCallback)((e,t)=>{N.available&&t&&e===Sb(Fn.current)&&N.send({type:`fs.focus`,payload:{path:t}})},[]),Wn=(0,E.useCallback)(async(e,t,n)=>{if(!(t&&Zc(t)))try{let r=await Ve(t,vn);if(!n()||!r.listing)return;Bn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[vn,Bn]),Gn=(0,E.useCallback)(async(e,n,r=!1)=>{let i=Hn(e);Dn(),Un(e,n);let a=!r||!Fn.current.tabs.find(t=>t.id===e)?.listing,o=!r&&n!==void 0;Bn(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&t(i,n);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),n],index:a?e.index:e.index+1}});try{a&&Wn(e,n,i);let t=n&&Zc(n)?await el(n):await Pe(n,!0,vn,pe.current,n?kb(n):void 0);if(!i())return;Bn(e,e=>({listing:t,view:t.view??null,loading:!1,fresh:!1,history:o?e.history.map((n,r)=>r===e.index?t.path:n):e.history,index:e.index})),!r&&!Zc(t.path)&&tt(t.path).then(()=>Ce(e=>e+1))}catch(t){if(!i())return;let a=Fn.current.tabs.find(t=>t.id===e),o=n&&n.length>0?n:a?xb(a):``,s=Db(o),c=Eb(t);if(o&&dn(c)){let t=u(o),a=await Ga(t,!!cn(t));if(a){ln(t,a),i()&&Gn(e,n,r);return}}Bn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Hn,vn,Bn,Un,Dn,Wn]),qn=(0,E.useCallback)((e,t)=>{let n=Jp(t);n&&(qp(n)?(Dn(),Hn(e),Bn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Gn(e,n))},[Hn,Gn,Bn,Dn]),Xn=(0,E.useCallback)(async(e,t,n)=>{if(Dn(),qp(t)){Hn(e),Bn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Hn(e);Un(e,t),Bn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Zc(t)||Wn(e,t,r);let n=Zc(t)?await el(t):await Pe(t,!0,vn,pe.current,kb(t));if(!r())return;Bn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(dn(Eb(i))){let i=u(t),a=await Ga(i,!!cn(i));if(a){ln(i,a),r()&&Xn(e,t,n);return}}Bn(e,()=>({listing:{path:t,parent:Db(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Eb(i)}))}},[Hn,vn,Bn,Un,Dn,Wn]),Zn=(0,E.useCallback)((e,t=!0)=>{let n=Tb(e??Kp(`home`));return r(e=>[...e,n]),t&&a(n.id),e&&!qp(e)&&Gn(n.id,e),n.id},[Gn]),Qn=(0,E.useCallback)(e=>{for(let n of Fn.current.tabs)bb(n)===`files`&&t(xb(n),e)&&Gn(n.id,e,!0)},[Gn]),$n=(0,E.useCallback)((e,n)=>{let r=v(n);for(let i of Fn.current.tabs)i.listing?.entries.some(n=>t(n.fullPath,e))&&Bn(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>t(i.fullPath,e)?{...i,name:r,fullPath:n}:i);return{listing:{...a,entries:o}}})},[Bn]),er=(0,E.useRef)([]);(0,E.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&p(n)&&e.add(l(u(n)))}let t=er.current.filter(t=>!e.has(t));er.current=[...e],t.length>0&&Le(t)},[n]);let tr=(0,E.useCallback)((e,t=!1)=>{t?Zn(Kp(e)):qn(Fn.current.activeId,Kp(e))},[Zn,qn]),nr=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Fn.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(St.current.push(yb(i)),St.current.length>_b&&St.current.shift()),o.length===0){let e=Tb();r([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);r(o),n===e&&a(o[Math.min(s,o.length-1)].id)},[]),rr=(0,E.useCallback)(()=>{let e=St.current.pop();if(!e)return;let t={...Tb(e),fresh:!1};r(e=>[...e,t]),a(t.id),bb(t)===`files`&&Gn(t.id,xb(t))},[Gn]),cr=(0,E.useCallback)((e,t=!1)=>{t?Zn(e):qn(Sb(Fn.current),e??Kp(`home`))},[qn,Zn]),lr=(0,E.useCallback)(e=>{let{tabs:t,activeId:n}=Fn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),ur=(0,E.useCallback)(()=>{let{tabs:e,activeId:t}=Fn.current,n=e.find(e=>e.id===t);if(!n||bb(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),Bn(t,()=>({splitWith:void 0})),Qe(`primary`);return}let a=xb(n),o={...Tb(a),hidden:!0};r(e=>[...e,o]),Bn(t,()=>({splitWith:o.id})),Gn(o.id,a),Qe(`primary`)},[Gn,Bn]),dr=(0,E.useCallback)(e=>{Ke(e),ar(`yafm.preview.width`,e)},[]),fr=sn?Ze===`secondary`?Ye??qe:qe??Ye:qe,pr=(0,E.useRef)(null),mr=e=>{e.preventDefault();let t=pr.current?.getBoundingClientRect();if(!t)return;let n=Re?Ge:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);f(n),ar(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},hr=(e,t,n)=>{t&&nt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},gr=(0,E.useCallback)((e,t)=>{ft(n=>n[e]===t?n:{...n,[e]:t})},[]),_r=(0,E.useCallback)(e=>gr(`primary`,e),[gr]),vr=(0,E.useCallback)(e=>gr(`secondary`,e),[gr]),yr=(e,t)=>{dt[e]!==0&&pt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},br=async(e,t=!1)=>{let n=et;if(nt(null),!n)return;let r=e===null?await It(n.directory,t):await Bt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Dn(),ht(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},xr=(0,E.useCallback)(()=>{let{tabs:e}=Fn.current,t=e.find(e=>e.id===Sb(Fn.current));t&&t.index>0&&Xn(t.id,t.history[t.index-1],t.index-1)},[Xn]),Sr=(0,E.useCallback)(()=>{let{tabs:e}=Fn.current,t=e.find(e=>e.id===Sb(Fn.current));t&&t.index<t.history.length-1&&Xn(t.id,t.history[t.index+1],t.index+1)},[Xn]),Cr=(0,E.useCallback)(()=>{let{tabs:e}=Fn.current,t=e.find(e=>e.id===Sb(Fn.current));t&&bb(t)===`files`&&t.listing?.parent&&cr(t.listing.parent)},[cr]),wr=(0,E.useRef)(null),Tr=(0,E.useCallback)(()=>{for(let e of Fn.current.tabs)e.listing&&Gn(e.id,e.listing.path,!0)},[Gn]),Er=(0,E.useCallback)(e=>{e.length!==0&&(Rt(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Gt())},[Gt]),Dr=(0,E.useCallback)(async e=>{let t=await Mt(e);t.length!==0&&Er(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Er]),Or=(0,E.useCallback)(e=>{let t=new Set(e);Rt(e=>e.filter(e=>!t.has(e.path)))},[]),kr=(0,E.useCallback)(async e=>{let t=In.current;if(!t)return;let n=await Mt(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>l(e.path))),i=n.filter(e=>!r.has(l(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};z(a),await gt(a),Ee(e=>e+1)},[]),Ar=(0,E.useCallback)(async e=>{let t=In.current;if(!t)return;let n=new Set(e.map(l)),r=(t.favorites??[]).filter(e=>!n.has(l(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};z(i),await gt(i),Ee(e=>e+1)},[]),jr=(0,E.useCallback)(()=>Rt([]),[]),Mr=(0,E.useRef)(-1),Nr=(0,E.useCallback)(e=>{wt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Et(e.move),e.entries.length>0&&Gt()},[Gt]),Pr=(0,E.useCallback)(async()=>{if(N.available)try{let e=await kt();Mr.current=e.sequence,Nr(e)}catch{}},[Nr]),Fr=(0,E.useCallback)(async e=>{e.length!==0&&await Dt(e,!1)&&await Pr()},[Pr]),Ir=(0,E.useRef)(Lt);Ir.current=Lt;let Lr=(0,E.useRef)(jt);Lr.current=jt;let Rr=(0,E.useRef)(!1);(0,E.useEffect)(()=>{let e=R?.trayAutoShow??!0,t=t=>{e&&gc(t)&&(Lr.current||(Rr.current=!0),Gt())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Rr.current&&window.setTimeout(()=>{Rr.current&&Ir.current.length===0&&Ft(!1),Rr.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[Gt,R?.trayAutoShow]),(0,E.useEffect)(()=>{let e=()=>Wt(e=>Cb(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let zr=(0,E.useCallback)(async()=>{let e=Ir.current;if(e.length>0){let t=await Mt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Rt(e=>e.filter(e=>n.has(e.path)))}await Pr()},[Pr]),Br=(0,E.useCallback)(()=>{zr(),Me(e=>e+1),Tr()},[zr,Tr]),Vr=(0,E.useCallback)(e=>{let t=Cb(e);Wt(t),sr(`yafm.tray.position`,t)},[]),Hr=(0,E.useCallback)(()=>{Rr.current=!1,jt?Ft(!1):Gt()},[Gt,jt]),Ur=(0,E.useCallback)(async(t,n,r)=>{let i=await At(t,n,r);i.cancelled||(i.ok?(r&&Or(t),Me(e=>e+1),Tr(),Pr()):Ua(i.error??e(`The files could not be transferred.`)))},[Tr,Pr,Or]);(0,E.useEffect)(()=>{if(N.available)return Yt().then(e=>{xt.current=e,U(e)},()=>void 0),N.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=xt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});xt.current=n,U(n),r&&bt(!0)})},[]);let Wr=(0,E.useCallback)(()=>{Xt().then(()=>Yt().then(e=>{xt.current=e,U(e)},()=>void 0))},[]);(0,E.useEffect)(()=>{if(!N.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await kt();if(!e||t.sequence===Mr.current)return;Mr.current=t.sequence,Nr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Nr]);let Gr=(0,E.useCallback)(async e=>{let t=e?await Kt():await qt();t.ok?(Me(e=>e+1),Tr()):t.error&&!t.error.startsWith(`Nothing to`)&&Ua(t.error)},[Tr]),Kr=(0,E.useRef)(vn);(0,E.useEffect)(()=>{Kr.current!==vn&&(Kr.current=vn,Tr())},[vn,Tr]);let qr=(0,E.useCallback)((e,t)=>{let{tabs:n}=Fn.current,r=n.find(t=>t.id===e);if(!r||bb(r)!==`files`)return;let i=xb(r),a=In.current?.defaultView??je,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Ae.iconSize,gridSize:r.view?.gridSize||a.gridSize||Ae.gridSize,sort:r.view?.sort??Ae.sort,sortDescending:r.view?.sortDescending??Ae.sortDescending,...t};Bn(e,()=>({view:o})),wr.current!==null&&window.clearTimeout(wr.current),wr.current=window.setTimeout(()=>{wr.current=null,ze(i,o)},250)},[Bn]),Jr=(0,E.useCallback)(e=>{qr(Sb(Fn.current),e)},[qr]),Yr=(0,E.useCallback)(e=>{let t=In.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??je,columns:e}};z(n),gt(n)},[]),Xr=(0,E.useCallback)(e=>{let t=In.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??je,showImages:e}};z(n),gt(n)},[]),Zr=(0,E.useCallback)(e=>{let t=In.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??je,imageStripHeight:e}};z(n),gt(n)},[]),Qr=(0,E.useCallback)((e,t,n,r)=>{let i=Fn.current.tabs.find(t=>t.id===e);if(!i||bb(i)!==`files`||!i.listing)return;let a=xb(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Bn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Be(a,t,n,r)},[Bn]),$r=(0,E.useCallback)((e,t)=>{let n=Fn.current.tabs.find(t=>t.id===e);if(!n)return;let r=wb(n,In.current?.defaultView??je);qr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[qr]),ei=(0,E.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ti=(0,E.useCallback)(()=>{He().then(h,()=>h([]))},[]),ni=(0,E.useCallback)(e=>{let t=(e.openTabs??[]).map(Jp).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Tb(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),a(n[i].id);for(let e of n)bb(e)===`files`&&Gn(e.id,xb(e),!0);return!0},[Gn]),ri=(0,E.useCallback)(e=>{let t=Rn.current;if(Rn.current=[],t.length===0)return;let n=t.filter(e=>!hb.has(e));for(let e of t)n.includes(e)||gb(e);if(n.length===0)return;let{tabs:r}=Fn.current;if(!e&&r.length===1&&r[0].fresh){qn(r[0].id,n[0]),gb(n[0]);for(let e of n.slice(1))Zn(e),gb(e);return}let i=n.map(e=>{let t=Zn(e);return gb(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[Zn,qn]),ii=(0,E.useCallback)(()=>{ct().then(e=>{z(e),_e(e.recentLimit);let t={...Zt,...e.shortcuts};we(t),$t(t.openInNewTab),Ee(e=>e+1),Ln.current||(Ln.current=!0,ri(e.restoreTabs&&ni(e)))},()=>{_e(10),Ln.current=!0,ri(!1)})},[ri,ni]),ai=(0,E.useCallback)(()=>{$e().then(he,()=>he([]))},[]),oi=(0,E.useCallback)(()=>{Ue().then(_,()=>_([]))},[]),si=n.filter(e=>!e.hidden),ci=si.map(yb),li=ci.join(`
`),ui=Math.max(si.findIndex(e=>e.id===i),0);(0,E.useEffect)(()=>{if(!R?.restoreTabs)return;let e=setTimeout(()=>void _t(ci,ui),700);return()=>clearTimeout(e)},[li,ui,R?.restoreTabs]),(0,E.useEffect)(()=>{let{tabs:e,activeId:t}=Fn.current,n=e.find(e=>e.id===t);n&&n.fresh&&bb(n)===`files`&&Gn(n.id,xb(n),!0),ti(),ii(),oi(),ye().then(b,()=>b(null))},[Gn,ti,ii,oi]),(0,E.useEffect)(()=>{if(xe().then(S,()=>S(null)),N.available)return N.on(e=>{let t=e;t.type===`update.checked`&&t.data&&S(t.data)})},[]),(0,E.useEffect)(()=>{if(N.available)return N.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&s({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Ua(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Ua(n.data.error??e(`Pairing failed.`))}})},[e]),(0,E.useEffect)(()=>{let e=setInterval(oi,3e4);return()=>clearInterval(e)},[oi]),(0,E.useEffect)(()=>{G===`home`&&(ai(),oi())},[G,W.id,ai,oi]),(0,E.useEffect)(()=>{if(!N.available)return;let e=N.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Fn.current,i=t.data.startup===!0;i&&hb.has(n)?gb(n):i&&!Ln.current?Rn.current.includes(n)||Rn.current.push(n):(i&&r.length===1&&r[0].fresh?qn(r[0].id,n):qp(n)?qn(Sb(Fn.current),n):Zn(n),i&&gb(n))});return N.send({type:`app.ready`}),e},[qn,Zn]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},r})})},[]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let r=e.slice(),a=e[t];return r[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},r})})},[]),(0,E.useEffect)(()=>{let e=e=>{if(an(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),xr();return}if(e.key===`BrowserForward`){e.preventDefault(),Sr();return}if(e.key===`Escape`&&w.open){e.preventDefault(),Dn();return}let t=tn(e);if(t===B.closeTab)e.preventDefault(),nr(Sb(Fn.current));else if(t===B.newTab)e.preventDefault(),Zn();else if(t===B.reopenTab)e.preventDefault(),rr();else if(t===B.goBack)e.preventDefault(),xr();else if(t===B.goForward)e.preventDefault(),Sr();else if(t===B.goUp)e.preventDefault(),Cr();else if(t===B.find)e.preventDefault(),G===`files`?On():kn();else if(t===B.location)e.preventDefault(),V(e=>e+1);else if(t===B.home){e.preventDefault();let t=m.find(e=>e.kind===`home`)?.path;t&&cr(t)}else t===B.iconsView?(e.preventDefault(),G===`files`&&Jr({mode:`grid`})):t===B.detailsView?(e.preventDefault(),G===`files`&&Jr({mode:`list`})):t===B.nextTab?(e.preventDefault(),lr(1)):t===B.previousTab?(e.preventDefault(),lr(-1)):t===B.hidden||t===`alt+.`?(e.preventDefault(),at().then(()=>{Me(e=>e+1),Tr()})):t===B.undo?(e.preventDefault(),Gr(!0)):t===B.redo?(e.preventDefault(),Gr(!1)):t===B.splitView?(e.preventDefault(),ur()):G!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Nn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[B,G,w.open,nr,rr,Zn,xr,Sr,Cr,On,kn,Dn,Nn,Jr,lr,cr,m,Tr,Gr,ur]),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),xr()):e.button===4&&(e.preventDefault(),Sr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[xr,Sr]);let di=(0,E.useMemo)(()=>{let e=new Set;for(let t of n){if(bb(t)!==`files`)continue;let n=xb(t);if(n&&!Zc(n)){if(p(n)){let t=Db(u(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),fi=di.join(`\0`);(0,E.useEffect)(()=>{N.available&&N.send({type:`fs.watch`,payload:{paths:di,owner:`app`}})},[fi,i]);let pi=bb(pn)===`files`?xb(pn):``;(0,E.useEffect)(()=>{N.available&&N.send({type:`fs.focus`,payload:{path:pi||null}})},[pi]),(0,E.useEffect)(()=>{if(N.available)return N.on(e=>{let n=e;if(n.type!==`fs.changed`||typeof n.data?.path!=`string`)return;let r=n.data.path,i=Fn.current.tabs.filter(e=>bb(e)===`files`&&t(xb(e),r)),a=Fn.current.tabs.filter(e=>{let n=xb(e);return bb(e)===`files`&&n.length>0&&p(n)&&t(u(n),r)});if(i.length!==0||a.length!==0){gn(r);for(let e of a){let n=Fn.current.tabs.find(t=>t.id===e.id),i=n?xb(n):``;n&&bb(n)===`files`&&!n.loading&&p(i)&&t(u(i),r)&&Gn(e.id,i,!0)}i.length!==0&&Pe(r,!1,vn).then(e=>{for(let n of i){let r=Fn.current.tabs.find(e=>e.id===n.id);r&&bb(r)===`files`&&t(xb(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=Fn.current.tabs.find(e=>e.id===n.id);r&&!r.loading&&bb(r)===`files`&&t(xb(r),e.path)&&Bn(n.id,()=>({listing:e}))},300):Bn(n.id,()=>({listing:e})))}},()=>void 0)}})},[vn,Gn,Bn]);let mi=W.index>0,hi=W.index<W.history.length-1,gi=(e,n)=>{let r=wb(e,mn),i=e.listing?.path??e.history[e.index]??``,a=p(i),o=a&&T(i);return(0,P.jsx)(El,{confirmDelete:R?.confirmDelete??!1,cutPaths:Ot,previewVideoAudio:R?.previewVideoAudio??!1,previewVideoAutoplay:R?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:n?Je:Xe,onActivate:()=>Qe(n?`primary`:`secondary`),enableShortcuts:(!sn||(n?Ze===`primary`:Ze===`secondary`))&&(!a||o),error:e.error,find:e.id===pn.id?{...w,currentPath:En<0?null:Tn[En]}:void 0,selectMatchesToken:e.id===pn.id?oe:0,imageStripHeight:Sn,listing:e.listing,loading:e.loading,onImageStripHeight:Zr,readOnly:a&&!o||Zc(e.listing?.path??``),onOpen:(t,n)=>{n?Zn(t):Gn(e.id,t)},onOpenFile:(t,n)=>{Zc(t)?nl(t).catch(e=>void Ua(Eb(e))):c(t)?R?.archiveHandler??!1?n?Zn(t):Gn(e.id,t):Ne(t):p(t)?(async()=>{let e=await Ie(t,pe.current,kb(t));if(!e.path&&dn(e.error)){let n=u(t),r=cn(n);r&&un(n);let i=await Ga(n,!!r);i&&(ln(n,i),e=await Ie(t,pe.current,i))}e.path?Ne(e.path):e.error&&Ua(e.error)})():Ne(t)},onRefresh:()=>{let t=e.listing?.path;t&&Qn(t)},onRename:$n,onSelectionCountChange:n?_r:vr,onSetTags:(t,n,r)=>Qr(e.id,t,n,r),selectionMenuRequest:n?H.primary:H.secondary,onSort:t=>$r(e.id,t),onPaste:Br,onClipboardChanged:()=>void Pr(),onTransfer:Ur,onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:be,onExtractArchive:(e,t)=>void Si(e,t),openOnSingleClick:R?.openOnSingleClick??!1,pendingRename:mt&&n===(Ze===`primary`)&&t(mt.directory,e.listing?.path??``)?mt.path:null,pendingRenameToken:mt?.token??0,refreshToken:ke,shortcuts:B,showCheckboxes:R?.showCheckboxes??!0,showImages:xn,view:r})},_i=w.open&&(0,P.jsx)(nf,{current:En,focusToken:ae,matchCase:w.matchCase,mode:w.mode,onClose:Dn,onMatchCase:()=>ie(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ie(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Pn(1),onPrevious:()=>Pn(-1),onQuery:e=>ie(t=>({...t,query:e})),onRegex:()=>ie(e=>({...e,regex:!e.regex})),query:w.query,regex:w.regex,total:Tn.length,onSelectMatches:Tn.length>0?()=>A(e=>e+1):void 0}),vi=G===`files`&&p(Qt),yi=vi&&T(Qt),bi=vi&&W.listing?.archiveEncrypted===!0,xi=async(t,n)=>{let r=u(t),i=await Fe(r,n,pe.current,kb(r));if(!i.ok&&dn(i.error)){let e=cn(r);e&&un(r);let t=await Ga(r,!!e);t&&(ln(r,t),i=await Fe(r,n,pe.current,t))}i.ok?(Qn(n),hn(),Gn(W.id,n,!0)):Ua(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},Si=async(e,n)=>{let r=u(e),i=Db(r);if(!i)return;if(n===`choose`){let e=await Ra(i);e&&await xi(r,e);return}let a=n===`named`;if(n===`auto`){let e=t(r,Qt)?W.listing?.entries??[]:(await Pe(r,!1,!1,pe.current,kb(r))).entries;a=!(e.length===1&&e[0].isDirectory)}let o=i.includes(`\\`)?`\\`:`/`,s=a?`${i.replace(/[\\/]+$/,``)}${o}${Ob(r)}`:i;await xi(r,s)},Y=async e=>{vi&&await Si(Qt,e)},Ci=async()=>{vi&&await Si(Qt,`choose`)},wi=(0,P.jsxs)(Ib,{children:[(0,P.jsx)(Lb,{"data-shortcut":nn(B.goBack),disabled:!mi,onClick:e=>{W.index>0&&en(e)?Zn(W.history[W.index-1]):xr()},title:e(`Back`),type:`button`,children:(0,P.jsx)(ji,{})}),(0,P.jsx)(Lb,{"data-shortcut":nn(B.goForward),disabled:!hi,onClick:e=>{W.index<W.history.length-1&&en(e)?Zn(W.history[W.index+1]):Sr()},title:e(`Forward`),type:`button`,children:(0,P.jsx)(Mi,{})}),(0,P.jsx)(Lb,{"data-shortcut":nn(B.goUp),disabled:G!==`files`||!rn,onClick:e=>{rn&&(en(e)?Zn(rn):cr(rn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(Oi,{})}),(0,P.jsx)(Yp,{focusToken:De,icon:Cn,label:G===`files`?void 0:e(rb[G]),onContextMenu:G===`files`?(e,t,n)=>st({x:t,y:n,path:e}):void 0,onNavigate:cr,path:G===`files`?Qt:Jt}),G===`files`&&(!vi||yi)&&(0,P.jsx)(Lb,{onClick:e=>hr(e,Qt,()=>void Gn(W.id,Qt,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(Ai,{})}),(0,P.jsx)(Lb,{"data-shortcut":nn(B.find),onClick:()=>G===`files`?On():kn(),title:e(`Search`),type:`button`,children:(0,P.jsx)(Di,{})}),dt.primary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Bb,{}),(0,P.jsx)(Lb,{onClick:e=>yr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(Pa,{})})]}),vi&&(0,P.jsxs)(Rb,{children:[(0,P.jsx)(Bb,{}),bi&&(0,P.jsxs)(zb,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,P.jsx)(Fa,{size:12}),e(`Encrypted`)]}),(0,P.jsx)(Lb,{onClick:()=>void Ci(),onContextMenu:e=>{e.preventDefault(),it({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,P.jsx)(Zi,{})}),(0,P.jsx)(Po,{icon:(0,P.jsx)(Ca,{size:15}),onChange:e=>{let t=Number(e);I(t),pe.current=t,vi&&Gn(W.id,Qt,!0)},options:vb.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(vb.find(e=>e.value===String(F))?.label??`Auto`)}`,value:String(F)})]})]}),Ti=se.open?{...se,index:le}:null;return(0,P.jsx)(Kn,{value:bn,children:(0,P.jsxs)(Mb,{$rounded:C,children:[(0,P.jsx)(gd,{settings:R}),(0,P.jsx)(My,{activeId:W.id,onClose:nr,onNewTab:()=>Zn(),onReorder:ei,onTransferToTab:Ur,onSelect:a,onViewChange:Jr,onColumns:Yr,onShowImages:Xr,showImages:xn,tasks:vt,onClearTasks:Wr,activityOpen:yt,onActivityOpenChange:bt,trayCount:Lt.length+Ct.length,trayVisible:jt,onToggleTray:Hr,split:sn,canSplit:G===`files`,onToggleSplit:ur,details:Re,canDetails:G===`files`||G===`recycle`||G===`gallery`,onToggleDetails:()=>We(e=>!e),currentFolder:G===`files`&&!Zc(Qt)?Qt:``,shortcuts:B,view:_n,tabs:n.filter(e=>!e.hidden).map(t=>{let r=bb(t),i=xb(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?xb(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Jn(bn,i):void 0,archive:r===`files`&&p(i),split:!!a,title:r===`files`?Yn(bn,i,v(i)||e(`Files`)):e(rb[r]),partner:a?{title:Yn(bn,o,v(o)||e(`Files`)),place:Jn(bn,o)}:void 0}})}),(0,P.jsxs)(Nb,{children:[(0,P.jsx)(V_,{activeKind:G,currentPath:G===`files`?Jt:``,drives:g,historyVersion:Se,onNavigate:cr,onOpenView:tr,homePath:m.find(e=>e.kind===`home`)?.path??``,places:m,recent:me,recentLimit:ge,version:Te}),(0,P.jsxs)(Pb,{children:[G!==`files`&&wi,(0,P.jsxs)(Fb,{children:[G!==`files`&&se.open&&(0,P.jsx)(nf,{current:le,focusToken:M,matchCase:se.matchCase,mode:se.mode,onClose:jn,onMatchCase:()=>j(e=>({...e,matchCase:!e.matchCase})),onMode:()=>j(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Mn(1),onPrevious:()=>Mn(-1),onQuery:e=>j(t=>({...t,query:e})),onRegex:()=>j(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:se.query,regex:se.regex,total:de,onSelectMatches:G===`gallery`||G===`recycle`?()=>A(e=>e+1):void 0}),G===`files`?sn&&on?(0,P.jsxs)(Hb,{ref:pr,children:[(0,P.jsxs)(Ub,{style:{flex:d},children:[(0,P.jsxs)(Vb,{$active:Ze===`primary`,onPointerDown:()=>Qe(`primary`),children:[(0,P.jsx)(Lb,{"data-shortcut":nn(B.goBack),disabled:!mi,onClick:e=>{let t=W.index-1;t<0||(en(e)?Zn(W.history[t]):Xn(W.id,W.history[t],t))},title:e(`Back`),type:`button`,children:(0,P.jsx)(ji,{})}),(0,P.jsx)(Lb,{"data-shortcut":nn(B.goForward),disabled:!hi,onClick:e=>{let t=W.index+1;t>=W.history.length||(en(e)?Zn(W.history[t]):Xn(W.id,W.history[t],t))},title:e(`Forward`),type:`button`,children:(0,P.jsx)(Mi,{})}),(0,P.jsx)(Lb,{"data-shortcut":nn(B.goUp),disabled:!rn,onClick:e=>{rn&&(en(e)?Zn(rn):Gn(W.id,rn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(Oi,{})}),(0,P.jsx)(Yp,{focusToken:Ze===`primary`?De:void 0,onContextMenu:(e,t,n)=>st({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Zn(e):void Gn(W.id,e),path:Qt}),(0,P.jsx)(Lb,{onClick:e=>hr(e,Qt,()=>void Gn(W.id,Qt,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(Ai,{})}),(0,P.jsx)(Lb,{"data-shortcut":nn(B.find),onClick:On,title:e(`Search`),type:`button`,children:(0,P.jsx)(Di,{})}),dt.primary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Bb,{}),(0,P.jsx)(Lb,{onClick:e=>yr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(Pa,{})})]})]}),gi(W,!0),Ze===`primary`&&_i]}),(0,P.jsx)(Wb,{onDoubleClick:()=>f(.5),onPointerDown:mr,title:e(`Drag to resize; double-click to reset`)}),(0,P.jsxs)(Ub,{$enter:!0,style:{flex:1-d},children:[(0,P.jsxs)(Vb,{$active:Ze===`secondary`,onPointerDown:()=>Qe(`secondary`),children:[(0,P.jsx)(Lb,{"data-shortcut":nn(B.goBack),disabled:on.index<=0,onClick:e=>{let t=on.index-1;t<0||(en(e)?Zn(on.history[t]):Xn(on.id,on.history[t],t))},title:e(`Back`),type:`button`,children:(0,P.jsx)(ji,{})}),(0,P.jsx)(Lb,{"data-shortcut":nn(B.goForward),disabled:on.index>=on.history.length-1,onClick:e=>{let t=on.index+1;t>=on.history.length||(en(e)?Zn(on.history[t]):Xn(on.id,on.history[t],t))},title:e(`Forward`),type:`button`,children:(0,P.jsx)(Mi,{})}),(0,P.jsx)(Lb,{"data-shortcut":nn(B.goUp),disabled:!fn,onClick:e=>{fn&&(en(e)?Zn(fn):Gn(on.id,fn))},title:e(`Up one level`),type:`button`,children:(0,P.jsx)(Oi,{})}),(0,P.jsx)(Yp,{focusToken:Ze===`secondary`?De:void 0,onContextMenu:(e,t,n)=>st({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Zn(e):void Gn(on.id,e),path:q}),(0,P.jsx)(Lb,{onClick:e=>hr(e,q,()=>void Gn(on.id,q,!0)),title:e(`New folder or file`),type:`button`,children:(0,P.jsx)(Ai,{})}),(0,P.jsx)(Lb,{"data-shortcut":nn(B.find),onClick:On,title:e(`Search`),type:`button`,children:(0,P.jsx)(Di,{})}),dt.secondary>0&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(Bb,{}),(0,P.jsx)(Lb,{onClick:e=>yr(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,P.jsx)(Pa,{})})]})]}),gi(on,!1),Ze===`secondary`&&_i]}),(0,P.jsx)(_s,{info:fr,onWidth:dr,open:Re,videoAudio:R?.previewVideoAudio??!1,videoAutoplay:R?.previewVideoAutoplay??!1,width:Ge})]}):(0,P.jsxs)(Kb,{children:[(0,P.jsxs)(qb,{children:[wi,(0,P.jsxs)(Gb,{children:[gi(W,!0),_i]})]}),(0,P.jsx)(_s,{info:qe,onWidth:dr,open:Re,videoAudio:R?.previewVideoAudio??!1,videoAutoplay:R?.previewVideoAutoplay??!1,width:Ge})]}):G===`home`?(0,P.jsx)(zp,{drives:g,find:Ti,historyVersion:Se,onSearchMatches:fe,homePath:m.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:oi,onHistoryChanged:()=>Ce(e=>e+1),onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:be,onExtractArchive:(e,t)=>void Si(e,t),settingsVersion:Te,onOpen:cr,onLayoutChanged:ii,onPlacesChanged:h,onRecentCleared:ai,places:m,recent:me,recentLimit:ge,visibilityVersion:ke}):G===`settings`?(0,P.jsx)(Dh,{appInfo:y,find:Ti,focusSection:ne,onSearchMatches:fe,onSettingsChanged:ii}):G===`gallery`?(0,P.jsx)(D_,{confirmDelete:R?.confirmDelete??!1,find:Ti,onSearchMatches:fe,openOnSingleClick:R?.openOnSingleClick??!1,onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:be,onExtractArchive:(e,t)=>void Si(e,t),shortcuts:B,showCheckboxes:R?.showCheckboxes??!0,selectMatchesToken:oe,showDetails:Re,videoAudio:R?.previewVideoAudio??!1,videoAutoplay:R?.previewVideoAutoplay??!1,view:_n}):(0,P.jsx)(fm,{find:Ti,onOpenLocation:cr,onShowDetails:()=>We(!0),platform:y?.platform,selectMatchesToken:oe,showDetails:Re,videoAudio:R?.previewVideoAudio??!1,videoAutoplay:R?.previewVideoAutoplay??!1})]},G),(0,P.jsxs)(Qb,{children:[(0,P.jsx)(`span`,{children:G===`files`&&W.listing?Ab(e,W.listing):``}),y?(0,P.jsxs)(Jb,{children:[(0,P.jsxs)(`span`,{children:[`v`,y.version,` · `,y.platform]}),y.debug&&(0,P.jsx)(Zb,{children:`debug`}),x?.available&&(0,P.jsxs)(Yb,{onClick:()=>{re(`updates`),tr(`settings`)},title:e(`Version {version} is available.`,{version:x.latest}),type:`button`,children:[(0,P.jsx)(Xb,{}),e(`Update available`)]})]}):(0,P.jsx)(`span`,{children:e(`browser preview`)})]})]})]}),(0,P.jsx)(xc,{clipboardItems:Ct,clipboardMove:Tt,currentDirectory:G===`files`?Jt:``,items:Lt,onAdd:e=>void Dr(e),onClear:jr,onClose:()=>Ft(!1),onCopyToClipboard:e=>void Fr(e),onPosition:Vr,onRemove:Or,onTransfer:Ur,position:Ut,visible:jt}),et&&(0,P.jsx)(jo,{creationOnly:!0,directory:et.directory,menu:{x:et.x,y:et.y,paths:[],background:!0},onClose:()=>nt(null),onCreateFile:e=>void br(e),onCreateFolder:e=>void br(null,e),shortcuts:B}),ot&&(0,P.jsx)(jo,{allowCompression:!0,directory:Db(ot.path)??ot.path,menu:{x:ot.x,y:ot.y,paths:[ot.path]},onAddToTray:e=>void Dr(e),onAddFavorite:e=>void kr(e),onRemoveFavorite:e=>void Ar(e),favoritePaths:be,onExtractArchive:(e,t)=>void Si(e,t),onArchiveCreated:e=>{e&&Qn(Db(ot.path)??ot.path)},onClose:()=>st(null),onCompressTo:(e,t)=>ut({paths:e,name:t}),onCopy:(e,t)=>void Dt(e,t),onDelete:e=>void Pt(e,!1).then(()=>Qn(Db(ot.path)??ot.path)),onOpen:(e,t)=>t?Zn(e):void Gn(W.id,e),onOpenFile:e=>void Ne(e),onPaste:e=>void Nt(e).then(t=>{t.ok&&Qn(e)}),onRefresh:()=>Qn(ot.path),shortcuts:B,target:{path:ot.path,isDirectory:!0}}),lt&&(0,P.jsx)(qo,{initialDirectory:Db(ot?.path??Qt)??Qt,initialName:lt.name,onCancel:()=>ut(null),onCompress:async e=>{let t=await K(lt.paths,e);return!t.ok&&t.error&&Ua(t.error),t.ok}}),rt&&(0,P.jsx)(yo,{items:[{label:e(`Extract here`),onSelect:()=>void Y(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Y(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Y(`auto`)}],onClose:()=>it(null),x:rt.x,y:rt.y}),zt&&(0,P.jsx)(xd,{action:zt.prompt.action,delaySeconds:zt.prompt.delaySeconds,hits:zt.prompt.hits,onCancel:()=>{zt.resolve(!1),Vt(null)},onConfirm:()=>{zt.resolve(!0),Vt(null)},permanent:zt.prompt.permanent},zt.id),(0,P.jsx)(zd,{}),(0,P.jsx)(Kd,{}),o&&(0,P.jsx)(ib,{code:o.code,deviceName:o.deviceName,onAccept:()=>{Jc(o.requestId,!0),s(null)},onReject:()=>{Jc(o.requestId,!1),s(null)}}),(0,P.jsx)(Qy,{}),(0,P.jsx)(ve,{})]})})}var Mb=_.div`
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
`,Nb=_.div`
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
`,Pb=_.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Fb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${mo}
`,Ib=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Lb=_.button`
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
`,Rb=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,zb=_.span`
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
`,Bb=_.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Vb=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Hb=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Ub=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?_o:``}
`,Wb=_.div`
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
        ${vo}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Gb=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Kb=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,qb=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Jb=_.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Yb=_.button`
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
`,Xb=_.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Zb=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(251, 191, 36, 0.5);
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.14);
    color: #fbbf24;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Qb=_.footer`
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
`;function $b({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:c,onSelect:u}){let d=J(),f=fl(`picker`),p=t===`file`,m=r??[],[h,g]=(0,E.useState)(e),[_,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(!0),[S,ee]=(0,E.useState)(null),[te,ne]=(0,E.useState)(()=>new Set),[re,C]=(0,E.useState)(a??[]),[w,T]=(0,E.useState)([]),[D,O]=(0,E.useState)([]),[ae,k]=(0,E.useState)([]),[oe,A]=(0,E.useState)([]),[se,j]=(0,E.useState)(``),[M,ce]=(0,E.useState)(m.length===0),[le,ue]=(0,E.useState)(`files`),[de,fe]=(0,E.useState)(0),[F,I]=(0,E.useState)(An),[pe,me]=(0,E.useState)(0),[he,ge]=(0,E.useState)(0),[L,_e]=(0,E.useState)(0),[ve,ye]=(0,E.useState)(null),[R,z]=(0,E.useState)(null),[be,xe]=(0,E.useState)(0),[Se,Ce]=(0,E.useState)(null),[B,we]=(0,E.useState)(je.imageStripHeight);(0,E.useEffect)(()=>{ct().then(Ce,()=>Ce(null))},[]),(0,E.useEffect)(()=>{a?C(a):He().then(C,()=>C([]))},[a]),(0,E.useEffect)(()=>{Ue().then(T,()=>T([])),$e().then(O,()=>O([]))},[]),(0,E.useEffect)(()=>{let e=!0;return x(!0),ee(null),ne(new Set),j(p?``:v(h)),Pe(h||void 0,!1).then(t=>{e&&(y(t),g(t.path),j(p?``:v(t.path)),x(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),x(!1))}),()=>{e=!1}},[h,de,p]),(0,E.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),I(e=>({...e,open:!0})),me(e=>e+1);return}if(e.key===`Escape`){F.open?(I(e=>({...e,open:!1,query:``})),ge(0)):c();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Ee();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),De();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),I(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),me(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ge()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,E.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Ee()):e.button===4&&(e.preventDefault(),De())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Te=e=>{let t=e.trim();t.length!==0&&l(t)!==l(h)&&(k(e=>[...e,h]),A([]),ue(`files`),g(t))},Ee=()=>{let e=ae.at(-1);e!==void 0&&(k(e=>e.slice(0,-1)),A(e=>[h,...e]),g(e))},De=()=>{let e=oe[0];e!==void 0&&(A(e=>e.slice(1)),k(e=>[...e,h]),g(e))},V=_?.path??h,Oe=_?.parent??(h?ie(h):null);(0,E.useEffect)(()=>{N.available&&V&&N.send({type:`fs.watch`,payload:{paths:[V],owner:`picker`}})},[V]),(0,E.useEffect)(()=>{if(N.available&&V)return N.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&l(t.data.path)===l(V)&&Pe(V,!1).then(e=>{y(e);let t=new Set(e.entries.map(e=>e.fullPath));ne(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[V]);let ke=(_?.entries??[]).filter(e=>e.isDirectory||p&&(M||m.length===0||m.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Me=_?{..._,entries:ke}:null,Ne=F.open&&F.query.length>0,Fe=(0,E.useMemo)(()=>Ne?ke.filter(e=>zn(e.name,F)).map(e=>e.fullPath):[],[Ne,ke,F]);(0,E.useEffect)(()=>{ge(0)},[F.query,F.matchCase,F.regex,_?.path]);let Ie=Fe.length===0?-1:Math.min(he,Fe.length-1),Le=(0,E.useMemo)(()=>({...F,currentPath:Ie>=0?Fe[Ie]:null}),[F,Ie,Fe]),Re=Se?.defaultView??je,ze=o??{mode:Re.mode,iconSize:Re.iconSize,gridSize:Re.gridSize,sort:`name`,sortDescending:!1,columns:Re.columns??[`type`,`size`,`modified`]},Be=(s??Re.showImages)&&ze.mode===`list`,Ve=se.trim(),We=Ve.length>0?tx(Ve)?Ve:ex(V,Ve):null,Ge=()=>{if(b||S)return;let e=n?[...te]:[...te].slice(0,1);e.length>0?u(e):We!==null&&Ve!==v(V)?u([We]):!p&&V&&u([V])},Ke=(0,E.useCallback)(e=>{ne(new Set(e)),j(e.length===1?v(e[0]):e.length===0&&!p?v(V):``)},[V,p]),qe=e=>{_?.entries.find(t=>t.fullPath===e)?.isDirectory?Te(e):p&&u([e])},Je=e=>j(e),Ye=async e=>{let t=ve;if(ye(null),!t||!V)return;let n=e===null?await It(V):await Bt(V,e);n.ok&&n.path!==null&&(I(e=>({...e,open:!1,query:``})),e!==null&&ce(!0),fe(e=>e+1),window.setTimeout(()=>{z(n.path),xe(e=>e+1)},120))},Xe=()=>{I(e=>({...e,open:!0})),me(e=>e+1)},Ze=e=>{ge(t=>Fe.length===0?0:(t+e+Fe.length)%Fe.length)},Qe=e=>(0,P.jsxs)(dx,{children:[(0,P.jsxs)(fx,{children:[(0,P.jsx)(px,{children:d(p?`File name:`:`Folder:`)}),(0,P.jsx)(mx,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ge())},spellCheck:!1,value:se}),p&&(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(px,{children:d(`Files of type:`)}),(0,P.jsx)(Po,{onChange:e=>ce(e===`all`),options:[...m.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${m.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:M?`all`:`supported`})]})]}),(0,P.jsxs)(hx,{children:[(0,P.jsx)(gx,{onClick:c,type:`button`,children:d(`Cancel`)}),(0,P.jsxs)(gx,{$primary:!0,disabled:b||S!==null||p&&te.size===0&&Ve.length===0,onClick:Ge,type:`button`,children:[(0,P.jsx)(Vi,{size:12}),d(p?`Select this file`:`Select this folder`)]})]})]}),et=(0,P.jsxs)(rx,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,P.jsxs)(ix,{children:[(0,P.jsxs)(ax,{children:[(0,P.jsx)(wi,{size:16}),d(p?`Choose a file`:`Choose a folder`)]}),(0,P.jsx)(ox,{onClick:c,title:d(`Cancel`),type:`button`,children:(0,P.jsx)(Hi,{size:12})})]}),(0,P.jsxs)(sx,{children:[(0,P.jsx)(V_,{activeKind:le===`overview`?`home`:le===`gallery`?`gallery`:`files`,currentPath:V,drives:w,hiddenViews:p?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:re.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Te(e),onOpenView:e=>{e===`home`?(ne(new Set),j(p?``:v(V)),ue(`overview`)):e===`gallery`&&p&&(ne(new Set),j(``),ue(`gallery`))},places:re,recent:D,recentLimit:10}),(0,P.jsx)(cx,{children:le===`overview`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(zp,{drives:w,historyVersion:0,homePath:re.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Te(e),onPick:p?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ke,places:re,readOnly:!0,recent:D,recentLimit:10,visibilityVersion:0}),Qe(j)]}):le===`gallery`?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(D_,{onPick:e=>u([e]),onSelectionChange:Ke,showCheckboxes:Se?.showCheckboxes??!0,view:{...Ae,columns:[]}}),Qe(j)]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(lx,{children:[(0,P.jsx)(ux,{disabled:ae.length===0,onClick:Ee,title:d(`Back`),type:`button`,children:(0,P.jsx)(ji,{})}),(0,P.jsx)(ux,{disabled:oe.length===0,onClick:De,title:d(`Forward`),type:`button`,children:(0,P.jsx)(Mi,{})}),(0,P.jsx)(ux,{disabled:!Oe,onClick:()=>Oe&&Te(Oe),title:d(`Up one level`),type:`button`,children:(0,P.jsx)(Oi,{})}),(0,P.jsx)(Yp,{onNavigate:Te,path:V}),(0,P.jsx)(ux,{onClick:e=>ye({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,P.jsx)(Ai,{})}),(0,P.jsx)(ux,{onClick:Xe,title:d(`Search`),type:`button`,children:(0,P.jsx)(Di,{})}),f.available&&(0,P.jsx)(ux,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,P.jsx)(Pa,{})})]}),F.open&&(0,P.jsx)(nf,{current:Ie,focusToken:pe,matchCase:F.matchCase,mode:F.mode,onClose:()=>{I(e=>({...e,open:!1,query:``})),ge(0)},onMatchCase:()=>I(e=>({...e,matchCase:!e.matchCase})),onMode:()=>I(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ze(1),onPrevious:()=>Ze(-1),onQuery:e=>I(t=>({...t,query:e})),onRegex:()=>I(e=>({...e,regex:!e.regex})),query:F.query,regex:F.regex,total:Fe.length,onSelectMatches:()=>_e(e=>e+1)}),(0,P.jsx)(El,{allowBackgroundMenu:!0,confirmDelete:Se?.confirmDelete??!1,enableShortcuts:!0,error:S,find:Le,selectMatchesToken:L,imageStripHeight:B,loading:b,listing:Me,onImageStripHeight:we,onOpen:qe,onOpenFile:qe,onRefresh:()=>fe(e=>e+1),onSelectionChange:Ke,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:Se?.openOnSingleClick??!1,refreshToken:de,pendingRename:R,pendingRenameToken:be,showCheckboxes:Se?.showCheckboxes??!0,showDetails:!1,showImages:Be,singleSelect:!n,view:ze}),Qe(Je)]})})]}),ve&&(0,P.jsx)(jo,{creationOnly:!0,directory:V,menu:{x:ve.x,y:ve.y,paths:[],background:!0},onClose:()=>ye(null),onCreateFile:p?e=>void Ye(e):void 0,onCreateFolder:()=>void Ye(null),shortcuts:Zt})]});return i?et:(0,to.createPortal)((0,P.jsx)(nx,{onPointerDown:e=>{e.target===e.currentTarget&&c()},children:et}),document.body)}function ex(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function tx(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var nx=_.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${_o}
`,rx=_.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:no}
    ${({$inline:e})=>e?``:fo}
`,ix=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,ax=_.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,ox=_.button`
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
`,sx=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,cx=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,lx=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,ux=_.button`
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
`,dx=_.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,fx=_.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,px=_.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,mx=_.input`
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
`,hx=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,gx=_.button`
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
`;function _x({mode:e,multiple:t,extensions:n,initial:r}){let i=J(),a=ge(),[o,s]=(0,E.useState)(null),[c,l]=(0,E.useState)({}),[u,d]=(0,E.useState)(null),[f,p]=(0,E.useState)(null),[m,h]=(0,E.useState)(null),g=(0,E.useRef)(0);(0,E.useEffect)(()=>{N.send({type:`app.ready`})},[]),(0,E.useEffect)(()=>(Oe(e=>new Promise(t=>{h({id:++g.current,prompt:e,resolve:t})})),()=>Oe(null)),[]),(0,E.useEffect)(()=>{ct().then(e=>{s(e),ee(e.accentColor,e.secondaryColor)},()=>void 0)},[]);let _=o?.defaultView??je,v={mode:c.mode??_.mode,iconSize:c.iconSize??_.iconSize,gridSize:c.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:u??_.columns??[`type`,`size`,`modified`]},y=e=>l(t=>({...t,...e}));return(0,P.jsxs)(vx,{children:[(0,P.jsxs)(yx,{children:[(0,P.jsx)(bx,{children:(0,P.jsx)(Gi,{size:17})}),(0,P.jsx)(xx,{...a,children:i(e===`file`?`Choose a file`:`Choose a folder`)}),(0,P.jsx)(hy,{onChange:y,onColumns:d,onShowImages:p,showImages:f??_.showImages,view:v}),(0,P.jsx)(Sx,{children:(0,P.jsx)(Cx,{onClick:()=>N.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:i(`Cancel`),type:`button`,children:(0,P.jsx)(Hi,{size:12})})})]}),(0,P.jsx)(wx,{children:(0,P.jsx)($b,{extensions:n,initial:r,inline:!0,mode:e,multiple:t,onCancel:()=>N.send({type:`pick.cancel`}),onSelect:e=>N.send({type:`pick.submit`,payload:{paths:e}}),showImages:f??_.showImages,fileView:v})}),m&&(0,P.jsx)(xd,{action:m.prompt.action,delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,P.jsx)(zd,{}),(0,P.jsx)(ve,{})]})}var vx=_.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,yx=_.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,bx=_.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,xx=_.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sx=_.div`
    display: flex;
    flex-shrink: 0;
`,Cx=_.button`
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
`,wx=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Tx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Tx),window.addEventListener(`pagehide`,rr);var Ex=document.getElementById(`root`),Dx=new URLSearchParams(window.location.search),Ox=Dx.get(`picker`),kx=Dx.get(`filter`)??``;Ex&&($n(),(0,D.createRoot)(Ex).render((0,P.jsx)(E.StrictMode,{children:(0,P.jsx)(pe,{children:Ox===`folder`||Ox===`file`?(0,P.jsx)(_x,{extensions:kx?kx.split(`;`).filter(Boolean):[],initial:Dx.get(`initial`)??``,mode:Ox,multiple:Dx.get(`multiple`)===`1`}):(0,P.jsx)(jb,{})})})));