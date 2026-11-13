import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{A as t,B as n,C as r,D as i,E as a,F as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,S as m,T as h,U as g,V as _,_ as v,a as y,b,c as x,d as S,f as C,g as w,h as T,i as E,j as ee,k as D,l as te,m as O,n as k,o as ne,p as A,r as j,s as re,u as ie,v as ae,w as M,x as oe,y as N,z as P}from"./format-TfnlO4m3.js";async function se(){return c.available?await c.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function F(e){c.available?await c.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function ce(){c.available&&await L(`update.openLogs`)}async function le(e){c.available?await L(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function ue(){return c.available?await c.request(`update.status`)??null:null}async function de(){return c.available?await c.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function I(){return c.available?await c.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function fe(){await L(`update.cancel`)}async function pe(){return c.available?await c.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function me(e){return c.on(t=>{t.type===`update.progress`&&e(t.data)})}function he(e){return c.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function L(e,t,n=3e4){let r=await c.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var R=e(g(),1),ge=_(),_e=null;function ve(e){_e=e}function ye(e){return _e?_e(e):Promise.resolve(!1)}var z={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},be={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function xe(e,t){return c.available?await c.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Se(e){return c.available?(await c.request(`fs.open`,{path:e})).ok:!1}async function Ce(e,t=!0,n=!1,r=0,i){return await c.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function we(e,t,n=0,r){let i=await c.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await ye({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await c.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function Te(e,t=0,n){return await c.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Ee(e){c.available&&e.length!==0&&await c.request(`fs.archive.release`,{paths:e})}async function De(e){return c.available?await c.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Oe(e,t){return c.available?(await c.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function ke(e,t,n,r){return c.available?(await c.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function B(e,t=!1){return c.available?await c.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ae(){return(await c.request(`fs.places`)).places}async function je(){return(await c.request(`fs.drives`)).drives}async function Me(e=!1){return(await c.request(`fs.recycle`,{includeOrphans:e})).entries}async function V(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await ye({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await c.request(e,{...t,confirm:r.token})}return r}async function Ne(e=!1){let t=await c.request(`fs.recycle.empty`,{includeOrphans:e});await V(`fs.recycle.empty`,{includeOrphans:e},t)}async function Pe(e){return!c.available||e.length===0?{ok:!1,done:0}:await c.request(`fs.recycle.restoreMany`,{ids:e})}async function Fe(e){if(!c.available||e.length===0)return{ok:!1,done:0};let t=await c.request(`fs.recycle.deleteMany`,{ids:e}),n=await V(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ie(e){c.available&&e&&await c.request(`fs.recycle.properties`,{id:e})}async function Le(){if(!c.available)return{entries:[],cancelled:!0,failed:!1};let e=await c.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function H(){return c.available?(await c.request(`fs.recycle.admin.purge`)).ok:!1}async function Re(e=0,t=150,n=!1){return c.available?await c.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function ze(){return c.available?(await c.request(`fs.recent`)).entries:[]}async function Be(){return c.available?(await c.request(`fs.frequent`)).entries:[]}async function Ve(e){c.available&&await c.request(`fs.frequent.record`,{path:e})}async function He(){await c.request(`fs.recent.clear`)}async function Ue(){await c.request(`fs.frequent.clear`)}async function We(){return await c.request(`fs.visibility`)}async function Ge(){return await c.request(`fs.hidden.toggle`)}async function Ke(){return c.available?await c.request(`fs.index.tasks`):{count:0,directories:[]}}var qe={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showHidden:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,themeMode:`system`,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function Je(){if(!c.available)return qe;let e=await c.request(`settings.get`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showHidden:e?.showHidden??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,themeMode:h(e?.themeMode),backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Ye(){return c.available?(await c.request(`app.protection.defaults`)).paths??[]:[]}var Xe={registered:!1,pathMatches:!1,registeredPath:null},Ze={registered:!1,pathMatches:!1,registeredPath:null};async function Qe(){return c.available?await c.request(`app.defaultManager.status`):Ze}async function $e(e){return c.available?await c.request(`app.defaultManager.set`,{enabled:e}):Ze}async function et(){return c.available?await c.request(`app.archive.status`):Xe}async function tt(){return c.available?await c.request(`app.archive.register`):Xe}async function nt(){return c.available?await c.request(`app.archive.unregister`):Xe}async function rt(e){if(!c.available)return e;let t=await c.request(`settings.save`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showHidden:t?.showHidden??e.showHidden,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,themeMode:h(t?.themeMode??e.themeMode),backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function it(e,t){c.available&&await c.request(`app.tabs.set`,{tabs:e,active:t})}async function at(e,t,n){return c.available?(await c.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var ot={managed:0,private:0,workingSet:0,available:0};async function st(){return c.available?await c.request(`app.memory`):ot}async function ct(){return c.available?await c.request(`app.memory.trim`):ot}var lt={registered:!1,pathMatches:!1,registeredPath:null};async function ut(){return c.available?await c.request(`app.scheme`):lt}async function dt(e){return c.available?await c.request(`app.scheme.set`,{enabled:e}):lt}var U={supported:!1,mode:`none`,active:!1,error:null};async function ft(){return c.available?await c.request(`app.startup`):U}async function pt(e){return c.available?await c.request(`app.startup.set`,{mode:e}):U}async function mt(e,t=!1){return!c.available||e.length===0?!1:(await c.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function ht(){return c.available?(await c.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function gt(){return c.available?await c.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function _t(e,t,n){return!c.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await vt({action:n?`move`:`write`},r=>c.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:r}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function vt(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await ye({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function yt(e){return!c.available||e.length===0?[]:(await c.request(`fs.paths.info`,{paths:e})).entries}async function bt(e,t=!1){return c.available?await vt({action:t?`move`:`write`},t=>c.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function xt(e,t=!1){if(!c.available||e.length===0)return{ok:!1,error:null};let n=await c.request(`fs.operation.delete`,{paths:e,permanent:t}),r=!1;for(let i=0;i<2&&n.required&&n.token&&n.protected?.length;i++){if(!await ye({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){r=!0;break}n=await c.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return r?{...n,ok:!1,cancelled:!0}:n}async function St(e,t){return c.available?await vt({action:`rename`},n=>c.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Ct(e,t=!1){return c.available?await c.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function wt(e){return c.available?(await c.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Tt(e,t){return c.available?await c.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Et(e,t,n){return c.available?await c.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Dt(e,t){return c.available?await c.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Ot(e){c.available&&e.length!==0&&await c.request(`fs.operation.properties`,{paths:e})}async function kt(e){c.available&&await c.request(`fs.operation.openWith`,{path:e})}async function At(e){c.available&&await c.request(`fs.operation.terminal`,{path:e})}async function jt(e){return c.available?await c.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Mt(e,t){return c.available?(await c.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Nt(){return c.available?await c.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Pt(){return c.available?await c.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Ft(e){c.available&&await c.request(`fs.operation.showInExplorer`,{path:e})}async function It(e){return!c.available||e.length===0?{verbs:[],safe:!0}:await c.request(`shell.verbs`,{paths:e})}async function Lt(e,t,n,r){c.available&&e.length!==0&&await c.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Rt(e,t){return!c.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await c.request(`fs.operation.compress`,{...t,paths:e})}async function zt(){return c.available?(await c.request(`app.tasks`)).tasks:[]}async function Bt(){c.available&&await c.request(`app.tasks.clear`)}var Vt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Ht=Vt.openInNewTab;function Ut(e){Ht=e.trim()||Vt.openInNewTab}function Wt(e){let t=Ht.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Gt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Kt(e){return e.split(`+`).filter(Boolean).map(e=>qt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var qt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Jt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Yt=new Map;function Xt(e){return w(C(e)?E(e):e)}function Zt(e){return Yt.get(Xt(e))}function Qt(e,t){Yt.set(Xt(e),t)}function $t(e){Yt.delete(Xt(e))}function en(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var tn=new Map,nn=new Map,W=new Set,rn=0;function an(){tn.clear(),nn.clear(),rn+=1,W.forEach(e=>e())}function on(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...tn.keys()])e.toLowerCase().includes(t)&&(tn.delete(e),n=!0);n&&(rn+=1,W.forEach(e=>e()))}function sn(){let[e,t]=(0,R.useState)(rn);return(0,R.useEffect)(()=>{let e=()=>t(rn);return W.add(e),()=>{W.delete(e)}},[]),e}var cn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function ln(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return cn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function un(e,t,n=!1){let r=sn(),i=e===null?``:ln(e,t,n),[a,o]=(0,R.useState)(()=>tn.get(i)??null);return(0,R.useEffect)(()=>{if(e===null){o(null);return}if(!c.available)return;if(tn.has(i)){o(tn.get(i)??null);return}let r=!0;return c.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?tn.set(i,e.dataUrl):tn.delete(i),r&&o(e.dataUrl)},()=>{tn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function dn(e){let[t,n]=(0,R.useState)(e);return(0,R.useEffect)(()=>{if(!e){n(null);return}if(!C(e)){n(e);return}let t=!0;return Te(e,0,Zt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function G(e){let t=sn(),[n,r]=(0,R.useState)(()=>e?nn.get(e)??null:null);return(0,R.useEffect)(()=>{if(!e||!c.available){r(null);return}if(nn.has(e)){r(nn.get(e)??null);return}let t=!0;return c.request(`fs.iconFile`,{path:e}).then(n=>{nn.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{nn.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var K=null,q=null;function fn(){return K===null?c.available?(q??=c.request(`app.thumbnails`).then(e=>(K=e.base??``,K),()=>(K=``,``)),q):Promise.resolve(``):Promise.resolve(K)}function pn(e,t=128,n=0){let[r,i]=(0,R.useState)(K);return(0,R.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return fn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${mn}`}var mn=2;function hn(e,t=0,n=``){let[r,i]=(0,R.useState)(K);if((0,R.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return fn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function gn(e,t=0){let[n,r]=(0,R.useState)(K);return(0,R.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return fn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var _n={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},vn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function yn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Sn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Tn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var bn=`\0`,xn=``;function Sn(e){return e.query!==bn&&(bn=e.query,xn=e.query.toLowerCase()),xn}var Cn=`\0`,wn=null;function Tn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Cn)return wn;Cn=t;try{wn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{wn=null}return wn}function En(e,t){return yn(e,t)!==null}var Dn=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],On={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function kn(e){let t=jn(e);for(let{kind:e}of Dn)if(On[e].has(t))return e;return null}function An(e){return kn(e)!==null}function jn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Mn=(0,R.createContext)({places:{},useIcons:!1}),Nn=Mn.Provider;function Pn(){return(0,R.useContext)(Mn)}function Fn(e,t){return e.places[w(t)]}function In(e,t,n){return Fn(e,t)?.name||n}var Ln=new Map,Rn=new Map,zn=0;function Bn(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&Ln.set(e,t)}catch{}}function Vn(e){return c.available?Ln.get(e)??null:localStorage.getItem(e)}function Hn(e,t){c.available?(Ln.set(e,t),Rn.set(e,t),window.clearTimeout(zn),zn=window.setTimeout(Un,200)):localStorage.setItem(e,t)}function Un(){if(zn=0,Rn.size===0)return;let e=Object.fromEntries(Rn);Rn.clear(),c.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Wn(){if(Rn.size===0)return;let e=Object.fromEntries(Rn);Rn.clear(),c.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Gn(e,t){let n=Vn(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function Kn(e,t){Hn(e,String(t))}function qn(e){try{return JSON.parse(Vn(e)??`null`)}catch{return null}}function Jn(e,t){Hn(e,JSON.stringify(t))}var J=o(),Yn=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,J.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,J.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Xn=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Zn=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M14 3v4h4`})]}),Qn=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,J.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,J.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),$n=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,J.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),er=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 19V5`}),(0,J.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),tr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,J.jsx)(`path`,{d:`M20 4v7h-7`})]}),nr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 5v14`}),(0,J.jsx)(`path`,{d:`M5 12h14`})]}),rr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M19 12H5`}),(0,J.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),ir=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M5 12h14`}),(0,J.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),ar=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,J.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),or=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,J.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),sr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,J.jsx)(`path`,{d:`M12 12v8`})]}),cr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,J.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),lr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),ur=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,J.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),dr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),fr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 7h16`}),(0,J.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,J.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,J.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),pr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),mr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),hr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,J.jsxs)(`defs`,{children:[(0,J.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,J.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,J.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,J.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,J.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,J.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,J.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,J.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,J.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,J.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),gr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),_r=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,J.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,J.jsx)(`path`,{d:`m13 5-2 14`})]}),vr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,J.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,J.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),yr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,J.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),br=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,J.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,J.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),xr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Sr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Cr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),wr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,J.jsx)(`path`,{d:`M8.5 14h7`})]}),Tr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,J.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,J.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Er=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Dr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Or=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),kr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Ar=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),jr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,J.jsx)(`path`,{d:`m14 6 4 4`})]}),Mr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,J.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Nr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,J.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Pr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 4v10`}),(0,J.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,J.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Fr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,J.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,J.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Ir=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,J.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,J.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Lr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,J.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Rr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),zr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,J.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Br=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,J.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,J.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Vr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Hr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,J.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,J.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,J.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Ur=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,J.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Wr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,J.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Gr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,J.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,J.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Kr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,J.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),qr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,J.jsx)(`path`,{d:`M3.5 12h17`}),(0,J.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Jr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Yr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,J.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Xr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,J.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,J.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),Zr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,J.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Qr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,J.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,J.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),$r=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),ei=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 16V4`}),(0,J.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,J.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),ti=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),ni=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,J.jsx)(`path`,{d:`M12 4v16`})]}),ri=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,J.jsx)(`path`,{d:`M15 4v16`})]}),ii=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,J.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,J.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,J.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),ai=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,J.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,J.jsx)(`path`,{d:`M12 14v2`})]}),oi=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,J.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),si=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,J.jsx)(`circle`,{cx:12,cy:12,r:3})]}),ci=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,J.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,J.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,J.jsx)(`path`,{d:`m3 3 18 18`})]});function Y(e,t){return({size:n=t,...r})=>(0,J.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var li=Y(Yn,18),ui=Y(Xn,18),di=Y(Zn,18),fi=Y(Qn,18),pi=Y($n,16),mi=Y(er,16),hi=Y(tr,16),gi=Y(nr,16),_i=Y(rr,16),vi=Y(ir,16),yi=Y(ar,12),bi=Y(or,18),xi=Y(sr,14),Si=Y(cr,14),Ci=Y(lr,14),wi=Y(ur,18),Ti=Y(dr,18),Ei=Y(fr,18),Di=Y(pr,14),Oi=Y(mr,14),ki=Y(si,14),Ai=Y(ci,14),ji=Y(hr,18),Mi=Y(gr,18),Ni=Y(_r,18),Pi=Y(vr,18),Fi=Y(yr,18),Ii=Y(br,18),Li=Y(xr,18),Ri=Y(Sr,18),zi=Y(Cr,18),Bi=Y(wr,18),Vi=Y(Tr,18),Hi=Y(Er,18),Ui=Y(Dr,18),Wi=Y(Or,18),Gi=Y(kr,18),Ki=Y(Ar,18),qi=Y(jr,16),Ji=Y(Mr,18),Yi=Y(Nr,18),Xi=Y(Pr,18),Zi=Y(Fr,18),Qi=Y(Ir,18),$i=Y(Lr,18),ea=Y(Rr,18),ta=Y(zr,18),na=Y(Br,18),ra=Y(Vr,18),ia=Y(Hr,18),aa=Y(Ur,18),oa=Y(Wr,18),sa=Y(Gr,18),ca=Y(Kr,18),la=Y(qr,18),ua=Y(Jr,18),da=Y(Yr,14),fa=Y(Xr,14),pa=Y(Zr,16),ma=Y(Qr,16),ha=Y($r,16),ga=Y(ei,16),_a=Y(ti,16),va=Y(ni,16),ya=Y(ri,16),ba=Y(ii,16),xa=Y(ai,14),Sa=Y(oi,14);async function Ca(e,t,n){return c.available?(await c.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function wa(e){return Ca(`folder`,[],e??``)}function Ta(e){return Ca(`file`,e??[],``)}var Ea=null,Da=null;function Oa(e){Ea=e}function ka(e){return Ea?Ea(e):Promise.resolve()}function Aa(e){Da=e}function ja(e,t=!1){return Da?Da(e,t):Promise.resolve(null)}var Ma=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],Na=null,Pa=0,Fa=new Set;function Ia(){Pa+=1;for(let e of Fa)e()}function La(e){return Fa.add(e),()=>Fa.delete(e)}function Ra(){return Pa}function za(e){Na=e,Ia()}function Ba(){return(0,R.useSyncExternalStore)(La,Ra,Ra),Na}var Va=s(),Ha=P`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Ua=l`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Wa=l`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ga=l`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ka=l`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,qa=l`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ja=l`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ya=l`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Xa=l`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,Za=P`animation: ${Ua} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Qa=P`animation: ${Wa} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,$a=P`animation: ${Ga} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;P`animation: ${Ka} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var eo=P`animation: ${qa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,to=P`animation: ${Ja} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,no=P`animation: ${Ya} 140ms ease-out;`,ro=P`animation: ${Xa} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function io({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,R.useState)([]),s=(0,R.useRef)(void 0);if((0,R.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,R.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,J.jsx)(ho,{},`group-rule-${i}`)),n.push((0,J.jsx)(mo,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,J.jsx)(ho,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,J.jsxs)(uo,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,J.jsx)(fo,{children:e.loading?(0,J.jsx)(go,{}):e.icon}),(0,J.jsx)(po,{children:e.label}),a?(0,J.jsx)(yi,{size:12}):e.checked&&(0,J.jsx)(Di,{size:12})]},`${e.label}-${i}`))}),n};return(0,Va.createPortal)((0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(ao,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(oo,{children:r.map((e,t)=>(0,J.jsxs)(so,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,J.jsx)(co,{children:e.icon}),(0,J.jsx)(lo,{children:e.label})]},`${e.label}-${t}`))}),(0,J.jsx)(ho,{})]}),m(n,0)]}),a.map((e,t)=>(0,J.jsx)(ao,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var ao=n.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Ha}
    ${Qa}
    transform-origin: top left;
`,oo=n.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,so=n.button`
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
`,co=n.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,lo=n.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uo=n.button`
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
`,fo=n.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,po=n.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,mo=n.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,ho=n.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,go=n.span`
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
`;function _o({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:c,onDelete:l,onCopy:u,onPaste:d,onCreateFolder:f,onCreateFile:m,creationOnly:h=!1,onRefresh:g,onAddToTray:_,onAddFavorite:v,onRemoveFavorite:b,favoritePaths:x,onExtractArchive:S,allowCompression:T=!1,onCompressTo:E,onArchiveCreated:ee}){let D=p(),te=Ba(),O=C(t),[k,ne]=(0,R.useState)({verbs:[],safe:!0,loading:!1}),[j,re]=(0,R.useState)({recommended:[],other:[],loading:!1}),[ie,ae]=(0,R.useState)(null),M=(0,R.useRef)(0),oe=(0,R.useRef)(0),N=e?.paths.length===1,P=e?.background?t?[t]:[]:e?.paths??[],se=e?.background?t||null:N&&n?.isDirectory?n.path:null;if((0,R.useEffect)(()=>{if(!e){ne({verbs:[],safe:!0,loading:!1}),re({recommended:[],other:[],loading:!1});return}let t=++M.current;ne({verbs:[],safe:!0,loading:P.length>0&&!O}),P.length>0&&!O&&It(P).then(e=>{M.current===t&&ne({...e,loading:!1})},()=>{M.current===t&&ne({verbs:[],safe:!0,loading:!1})});let r=++oe.current;!O&&N&&n?(re({recommended:[],other:[],loading:!0}),jt(n.path).then(e=>{oe.current===r&&re({...e,loading:!1})},()=>{oe.current===r&&re({recommended:[],other:[],loading:!1})})):re({recommended:[],other:[],loading:!1})},[e,N,n?.path,n?.isDirectory,P.length,O]),(0,R.useEffect)(()=>{if(!e||O||!se){ae(null);return}let t=!0;return wt(se).then(e=>{t&&ae(e)},()=>{t&&ae(null)}),()=>{t=!1}},[e,se,O]),!e)return null;let F=[],ce=[],le=new Set((x??[]).map(w)),ue=e.background?t?[t]:[]:e.paths,de=ue.length>0&&ue.every(e=>le.has(w(e))),I=()=>n?fe(n.path,n.isDirectory):`Archive`,fe=(e,t)=>{let n=y(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},pe=async(e,n=I())=>{let r=await Rt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?ee?.(r.path,!0):ka(r.error??D(`could_not_create_the_archive`))},me=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},he=async()=>{if(!se||ie===null)return;let e=await Tt(se,!ie);e.ok?(ae(e.enabled),g?.()):ka(e.error??D(`could_not_change_the_case_sensitivity`))},L=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Et(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Et(e,t,`${a}\\${yo(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?g?.():ka(o.error??D(`could_not_create_the_link`))},ge=async e=>{if(!n)return;let r=await wa(t);r&&await L(e,n.path,r,y(n.path),e.endsWith(`-copy`))},_e=async e=>{let n=te?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=w(a)===w(t);await L(n,r.path,t,y(r.path),i&&!o)}},ve=async()=>{let t=(await yt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&za({paths:t})},ye=()=>{let e=te?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:D(`cancel_selected_link`),icon:(0,J.jsx)(Oi,{size:14}),onSelect:()=>za(null)},...t?[{label:D(`hard_link`),icon:(0,J.jsx)(di,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard`)}]:[],{label:D(`symbolic_link`),icon:(0,J.jsx)(di,{size:14}),separatorBefore:!t,onSelect:()=>void _e(`symbolic-file`)},...n?[{label:D(`directory_junction`),icon:(0,J.jsx)(ui,{size:14}),onSelect:()=>void _e(`junction`)},{label:D(`smart_copy`),icon:(0,J.jsx)(pa,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:D(`smart_mirror`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:D(`multi_version_smart_copy`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:D(`hardlink_copy`),icon:(0,J.jsx)(pa,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:D(`symbolic_link_copy`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[]]};if(e.background){if(f&&ce.push({label:D(`new_folder`),icon:(0,J.jsx)(gi,{size:16}),shortcut:Kt(r.newFolder),onSelect:f}),m||f){let e=[];f&&(e.push({label:D(`folder`),icon:(0,J.jsx)(ui,{size:14}),onSelect:()=>f(!1)}),O||e.push({label:D(`case_sensitive_folder`),icon:(0,J.jsx)(fa,{size:14}),onSelect:()=>f(!0)})),m&&e.push(...Ma.map((e,t)=>({label:`${D(e.label)} (${e.extension})`,icon:(0,J.jsx)(di,{size:14}),separatorBefore:t===0,onSelect:()=>m(e.extension)}))),F.push({label:D(`new`),icon:(0,J.jsx)(gi,{size:14}),children:e,onSelect:()=>void 0})}if(O||F.push({label:D(`create_link`),icon:(0,J.jsx)(ga,{size:14}),disabled:!te,children:ye(),onSelect:()=>void 0}),h)return(0,J.jsx)(io,{items:F,onClose:a,quick:ce,x:e.x,y:e.y});!O&&o&&F.push({label:D(`open_in_new_tab`),icon:(0,J.jsx)(gi,{size:14}),onSelect:()=>o(t,!0)}),F.push({label:D(`copy_as_path`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void me([t])}),_&&F.push({label:D(`add_to_file_tray`),icon:(0,J.jsx)(ca,{size:14}),onSelect:()=>_([t])}),!O&&(de?b:v)&&F.push({label:D(de?`remove_from_favorites`:`add_to_favorites`),icon:de?(0,J.jsx)(da,{size:14}):(0,J.jsx)(ua,{size:14}),onSelect:()=>de?b?.([t]):v?.([t])}),!O&&ie!==null&&F.push({label:D(`case_sensitive_names`),icon:(0,J.jsx)(fa,{size:14}),checked:ie,onSelect:()=>void he()}),!O&&T&&(F.push({label:D(`open_in_terminal`),icon:(0,J.jsx)(oa,{size:14}),onSelect:()=>void At(t)}),F.push({label:D(`show_in_explorer`),icon:(0,J.jsx)(ui,{size:14}),separatorBefore:!0,onSelect:()=>void Ft(t)})),d&&ce.push({label:D(`paste`),icon:(0,J.jsx)(ha,{size:16}),disabled:!i,shortcut:Kt(r.paste),onSelect:()=>d(t)}),O||ce.push({label:D(`properties`),icon:(0,J.jsx)(bi,{size:16}),shortcut:Kt(r.properties),onSelect:()=>void Ot([t])})}else{if(o&&F.push({label:D(`open`),icon:(0,J.jsx)(vi,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&F.push({label:D(`open_in_new_tab`),icon:(0,J.jsx)(gi,{size:14}),onSelect:()=>o(n.path,!0)}),d&&F.push({label:D(`paste_into_folder`),icon:(0,J.jsx)(ha,{size:14}),disabled:!i,onSelect:()=>d(n.path)}),O||F.push({label:D(`open_in_terminal`),icon:(0,J.jsx)(oa,{size:14}),onSelect:()=>void At(n.path)})),!O&&N&&n&&!n.isDirectory&&A(n.path)&&S&&F.push({label:D(`extract_archive`),icon:(0,J.jsx)(Li,{size:14}),separatorBefore:!0,children:[{label:D(`extract_here`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>S(n.path,`here`)},{label:D(`extract_to_a_folder_named_after_the_archive`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>S(n.path,`named`)},{label:D(`auto_extract_to_the_current_folder`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>S(n.path,`auto`)},{label:D(`extract_to`),icon:(0,J.jsx)(ui,{size:14}),separatorBefore:!0,onSelect:()=>S(n.path,`choose`)}],onSelect:()=>void 0}),!O&&N&&n){let e=[];if(j.loading)e.push({label:D(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of j.recommended)e.push({label:t.name,group:D(`suggested_apps`),icon:t.icon?(0,J.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,J.jsx)(zi,{size:14}),onSelect:()=>void Mt(n.path,t.path).then(e=>{e||kt(n.path)})});for(let t of j.other)e.push({label:t.name,group:D(`other_apps`),icon:t.icon?(0,J.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,J.jsx)(zi,{size:14}),onSelect:()=>void Mt(n.path,t.path).then(e=>{e||kt(n.path)})})}e.push({label:D(`choose_another_app`),icon:(0,J.jsx)(zi,{size:14}),separatorBefore:!0,onSelect:()=>void kt(n.path)}),F.push({label:D(`open_with_2`),icon:(0,J.jsx)(zi,{size:14}),children:e,onSelect:()=>void kt(n.path)})}if(O||F.push({label:D(`compress`),icon:(0,J.jsx)(Li,{size:14}),separatorBefore:!0,children:[{label:D(`compress_to_zip`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>void pe(e.paths)},{label:D(`compress_to`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>E?.(e.paths,I())}],onSelect:()=>void 0}),!O&&(e?.paths.length??0)>0){let e=[{label:D(`select_link_source`),icon:(0,J.jsx)(ga,{size:14}),onSelect:()=>void ve()},...te?[{label:D(`cancel_selected_link`),icon:(0,J.jsx)(Oi,{size:14}),onSelect:()=>za(null)}]:[],...N&&n?n.isDirectory?[{label:D(`symbolic_link`),icon:(0,J.jsx)(ui,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-folder`)},{label:D(`directory_junction`),icon:(0,J.jsx)(ui,{size:14}),onSelect:()=>void ge(`junction`)},{label:D(`smart_copy`),icon:(0,J.jsx)(pa,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`smart-copy`)},{label:D(`smart_mirror`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void ge(`smart-mirror`)},{label:D(`multi_version_smart_copy`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void ge(`multi-version-smart-copy`)},{label:D(`hardlink_copy`),icon:(0,J.jsx)(pa,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`hard-copy`)},{label:D(`symbolic_link_copy`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void ge(`symbolic-copy`)}]:[{label:D(`symbolic_link`),icon:(0,J.jsx)(di,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-file`)},{label:D(`hard_link`),icon:(0,J.jsx)(di,{size:14}),onSelect:()=>void ge(`hard`)}]:[]];F.push({label:D(`create_link`),icon:(0,J.jsx)(ga,{size:14}),children:e,onSelect:()=>void 0})}!O&&n?.isDirectory&&ie!==null&&F.push({label:D(`case_sensitive_names`),icon:(0,J.jsx)(fa,{size:14}),checked:ie,onSelect:()=>void he()}),F.push({label:D(`copy_as_path`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void me(e.paths)}),_&&F.push({label:D(`add_to_file_tray`),icon:(0,J.jsx)(ca,{size:14}),onSelect:()=>_(e.paths)}),!O&&(de?b:v)&&F.push({label:D(de?`remove_from_favorites`:`add_to_favorites`),icon:de?(0,J.jsx)(da,{size:14}):(0,J.jsx)(ua,{size:14}),onSelect:()=>de?b?.(ue):v?.(ue)}),O||F.push({label:D(`show_in_explorer`),icon:(0,J.jsx)(ui,{size:14}),separatorBefore:!0,onSelect:()=>void Ft(ue[0])}),u&&ce.push({label:D(`cut`),icon:(0,J.jsx)(ma,{size:16}),shortcut:Kt(r.cut),onSelect:()=>u(e.paths,!0)},{label:D(`copy`),icon:(0,J.jsx)(pa,{size:16}),shortcut:Kt(r.copy),onSelect:()=>u(e.paths,!1)}),N&&n&&c&&ce.push({label:D(`rename`),icon:(0,J.jsx)(qi,{size:16}),shortcut:Kt(r.rename),onSelect:()=>c(n.path)}),l&&ce.push({label:D(`delete`),icon:(0,J.jsx)(Ei,{size:16}),danger:!0,shortcut:Kt(r.delete),onSelect:()=>l(e.paths)}),O||ce.push({label:D(`properties`),icon:(0,J.jsx)(bi,{size:16}),shortcut:Kt(r.properties),onSelect:()=>void Ot(e.paths)})}if(k.loading)F.push({label:D(`more_actions`),icon:(0,J.jsx)(zi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(k.verbs.length>0){let e={items:[],children:new Map};for(let t of k.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,J.jsx)(vo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Lt(P,k.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];F.push({label:D(k.safe?`more_actions`:`more_actions_extensions`),icon:(0,J.jsx)(zi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,J.jsx)(io,{items:F,onClose:a,quick:ce,x:e.x,y:e.y})}function vo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,J.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,J.jsx)(vi,{size:14});case`document`:return(0,J.jsx)(Gi,{size:14});case`cut`:return(0,J.jsx)(ma,{size:14});case`copy`:return(0,J.jsx)(pa,{size:14});case`paste`:return(0,J.jsx)(ha,{size:14});case`trash`:return(0,J.jsx)(Ei,{size:14});case`pencil`:return(0,J.jsx)(qi,{size:14});case`gear`:return(0,J.jsx)(bi,{size:14});case`star`:return(0,J.jsx)(ea,{size:14});case`pin`:return(0,J.jsx)(xi,{size:14});case`executable`:return(0,J.jsx)(zi,{size:14});case`share`:return(0,J.jsx)(ga,{size:14});case`arrow`:return(0,J.jsx)(vi,{size:14});default:return(0,J.jsx)(ji,{size:14})}}function yo(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function bo({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=p(),[l,u]=(0,R.useState)(null),d=(0,R.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,R.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(xo,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,J.jsx)(So,{children:f?.label??``}):(0,J.jsx)(Co,{children:a}),a===void 0&&(0,J.jsx)(wo,{children:(0,J.jsx)(yi,{size:11})})]}),l&&(0,Va.createPortal)((0,J.jsx)(To,{"aria-label":c(`options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,J.jsxs)(Eo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,J.jsx)(Do,{children:t.label}),t.value===e&&(0,J.jsx)(Di,{size:11})]},t.value))}),document.body)]})}var xo=n.button`
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
`,So=n.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Co=n.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,wo=n.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,To=n.div`
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
    box-shadow: var(--shadow-menu);
    ${Qa}
`,Eo=n.button`
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
`,Do=n.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Oo=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],ko=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],Ao=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],jo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Mo=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function No({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=p(),a=(0,R.useRef)(null),[o,s]=(0,R.useState)(e),[c,l]=(0,R.useState)(t),[u,d]=(0,R.useState)(`zip`),[f,m]=(0,R.useState)(`5`),[h,g]=(0,R.useState)(`default`),[_,v]=(0,R.useState)(`none`),[y,b]=(0,R.useState)(``),[x,S]=(0,R.useState)(`0`),[C,w]=(0,R.useState)(!1);(0,R.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=Oo.find(e=>e.value===u)??Oo[0],E=u===`zip`||u===`zipx`,ee=_!==`none`,D=E||u===`7z`,te=u===`zip`||u===`7z`,O=async()=>{if(C||!c.trim()||!o||ee&&y.length===0)return;w(!0);let e=await r({directory:o,name:c.trim(),format:u,level:T.level?Number(f):0,method:E?h:null,encryption:D?_:`none`,password:ee?y:void 0,splitSize:te?Number(x):0});w(!1),e&&n()};return(0,Va.createPortal)((0,J.jsx)(Po,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,J.jsxs)(Fo,{"aria-modal":`true`,role:`dialog`,children:[(0,J.jsx)(Io,{children:i(`compress_to`)}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`archive_name`)}),(0,J.jsx)(zo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&O()}}),(0,J.jsx)(Bo,{children:T.extension})]}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`format`)}),(0,J.jsx)(bo,{onChange:e=>d(e),options:Oo.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`method`)}),(0,J.jsx)(bo,{disabled:!E,onChange:g,options:ko.map(e=>({...e,label:i(e.label)})),value:E?h:`default`,width:236,zIndex:3700})]}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`encryption`)}),(0,J.jsx)(bo,{disabled:!D,onChange:e=>{v(e),e===`none`&&b(``)},options:Ao.map(e=>({...e,label:i(e.label)})),value:D?_:`none`,width:236,zIndex:3700})]}),ee&&(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`password`)}),(0,J.jsx)(zo,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`split_volumes`)}),(0,J.jsx)(bo,{disabled:!te,onChange:S,options:jo.map(e=>({...e,label:i(e.label)})),value:te?x:`0`,width:236,zIndex:3700})]}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`compression_level`)}),(0,J.jsx)(bo,{disabled:!T.level,onChange:m,options:Mo.map(e=>({...e,label:i(e.label)})),value:T.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,J.jsxs)(Lo,{$stack:!0,children:[(0,J.jsx)(Ro,{children:i(`destination`)}),(0,J.jsxs)(Vo,{children:[(0,J.jsx)(Ho,{title:o,children:o}),(0,J.jsx)(Wo,{disabled:C,onClick:()=>void wa(o).then(e=>{e&&s(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,J.jsxs)(Uo,{children:[(0,J.jsx)(Wo,{disabled:C,onClick:n,type:`button`,children:i(`cancel`)}),(0,J.jsx)(Go,{disabled:C||!c.trim()||ee&&y.length===0,onClick:()=>void O(),type:`button`,children:i(C?`compressing`:`compress`)})]})]})}),document.body)}var Po=n.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${no}
`,Fo=n.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Za}
`,Io=n.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Lo=n.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Ro=n.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,zo=n.input`
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
`,Bo=n.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Vo=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Ho=n.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uo=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Wo=n.button`
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
`,Go=n(Wo)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Ko({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=p(),c=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Va.createPortal)((0,J.jsx)(qo,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,J.jsxs)(Jo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(Yo,{children:t}),(0,J.jsx)(Xo,{children:n}),(0,J.jsxs)(Zo,{children:[(0,J.jsx)(Qo,{onClick:o,type:`button`,children:s(`cancel`)}),(0,J.jsx)(Qo,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var qo=n.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${no}
`,Jo=n.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Za}
`,Yo=n.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Xo=n.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Zo=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Qo=n.button`
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
`,$o=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),es=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),ts=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),ns=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function rs({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=p(),[l,u]=(0,R.useState)(!1),[d,f]=(0,R.useState)(!1),[m,h]=(0,R.useState)(!1),[g,_]=(0,R.useState)(0),[v,y]=(0,R.useState)(0),[b,x]=(0,R.useState)(null),[S,C]=(0,R.useState)(!1),[w,T]=(0,R.useState)(!1),E=(0,R.useRef)(null),ee=(0,R.useRef)(null),D=(0,R.useRef)(null),te=(0,R.useRef)(null),[O,k]=(0,R.useState)(()=>{let e=Gn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ne=e?.path??null,A=dn(ne),j=e?is(e.name):``,re=!!e&&!e.isDirectory&&$o.has(j),ie=!!e&&!e.isDirectory&&es.has(j),ae=!!e&&!e.isDirectory&&ts.has(j),M=!!e&&!e.isDirectory&&ns.has(j),oe=!!e&&!e.isDirectory&&j===`pdf`,N=pn(re?A:null,512,e?.modified??0),P=hn(ae?A:null,e?.modified??0,j),se=hn(re||ie?A:null,e?.modified??0,j),F=gn(oe?A:null,e?.modified??0),ce=un(!re&&!ie&&!ae&&!M&&!oe?A:null,e?.isDirectory??!1);if((0,R.useEffect)(()=>{u(!1),f(!1),h(!1),_(0),y(0),T(!1)},[ne]),(0,R.useEffect)(()=>{if(!A||!M){x(null),C(!1);return}let e=!0;return C(!0),x(null),De(A).then(t=>{e&&(x(t),C(!1))},()=>{e&&(x({text:null,truncated:!1,error:c(`could_not_read_this_file`)}),C(!1))}),()=>{e=!1}},[A,M]),!e&&!s)return null;let le=e=>{D.current={x:e.clientX,width:ee.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},ue=e=>{let t=D.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},de=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},I=e=>{te.current={y:e.clientY,height:O},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=te.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);k(n),Kn(`yafm.preview.media.height`,n)},pe=e=>{te.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,J.jsxs)(os,{$open:r,children:[r&&(0,J.jsx)(ss,{onPointerDown:le,onPointerMove:ue,onPointerUp:de,onDoubleClick:()=>n(320),title:c(`drag_to_resize_double_click_to_reset`)}),(0,J.jsx)(cs,{ref:ee,style:{width:r?t:0},children:(0,J.jsxs)(ls,{children:[(0,J.jsx)(ui,{size:56}),(0,J.jsx)(`span`,{children:s})]})})]});let me=()=>{let e=E.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,J.jsxs)(os,{$open:r,children:[r&&(0,J.jsx)(ss,{onPointerDown:le,onPointerMove:ue,onPointerUp:de,onDoubleClick:()=>n(320),title:c(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(cs,{ref:ee,style:{width:r?t:0},children:[(0,J.jsx)(us,{style:{height:O},children:re&&se&&!l?(0,J.jsxs)(fs,{onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),children:[(0,J.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:me,onDurationChange:e=>_(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{_(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:N??void 0,preload:`metadata`,ref:E,src:se}),(0,J.jsx)(ps,{$visible:!d,onClick:me,title:c(`play`),type:`button`,children:(0,J.jsx)(_a,{size:28})}),(0,J.jsxs)(ms,{$visible:m,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(hs,{children:[(0,J.jsx)(`span`,{children:as(v)}),(0,J.jsx)(`span`,{children:as(g)})]}),(0,J.jsx)(gs,{"aria-label":c(`seek`),max:g||0,min:0,onChange:e=>{let t=E.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,g||0)})]})]}):ie&&se?(0,J.jsx)(`audio`,{controls:!0,src:se}):ae&&P?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:P}):oe&&F&&!w?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:F}):oe?(0,J.jsx)(di,{size:64}):M?(0,J.jsx)(_s,{children:S||!b?(0,J.jsx)(ys,{children:c(`loading`)}):b.error?(0,J.jsx)(ys,{children:b.error}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(vs,{children:b.text}),b.truncated&&(0,J.jsx)(ys,{children:c(`showing_the_first_256_kb`)})]})}):re&&N?(0,J.jsx)(`img`,{alt:``,src:N}):ce?(0,J.jsx)(`img`,{alt:``,src:ce}):e.isDirectory?(0,J.jsx)(ui,{size:64}):(0,J.jsx)(di,{size:64})}),(0,J.jsx)(ds,{onDoubleClick:()=>{k(210),Kn(`yafm.preview.media.height`,210)},onPointerDown:I,onPointerMove:fe,onPointerUp:pe,title:c(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(bs,{children:[(0,J.jsx)(xs,{title:e.path,children:e.name}),o&&(0,J.jsx)(Ss,{children:o}),(0,J.jsx)(Cs,{children:e.fields.map(e=>(0,J.jsxs)(ws,{children:[(0,J.jsx)(Ts,{children:e.label}),(0,J.jsx)(Es,{title:e.value,children:e.value})]},e.label))})]})]})]})}function is(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function as(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var os=n.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,ss=n.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,cs=n.aside`
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
`,ls=n.div`
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
`,us=n.div`
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
`,ds=n.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,fs=n.div`
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
`,ps=n.button`
    position: absolute;
    display: grid;
    place-items: center;
    width: 52px;
    height: 52px;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.35);
    border-radius: 50%;
    /* A media control stays dark in both palettes: the picture behind it is either way. */
    background: rgba(8, 10, 18, 0.62);
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
`,ms=n.div`
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
`,hs=n.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,gs=n.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,_s=n.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,vs=n.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,ys=n.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,bs=n.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,xs=n.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Ss=n.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Cs=n.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,ws=n.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Ts=n.span`
    color: var(--text-muted);
`,Es=n.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Ds=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Os=[...Ds],ks={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},As={folder:e=>(0,J.jsx)(ui,{size:e}),home:e=>(0,J.jsx)(li,{size:e}),desktop:e=>(0,J.jsx)(Ji,{size:e}),documents:e=>(0,J.jsx)(Yi,{size:e}),downloads:e=>(0,J.jsx)(Xi,{size:e}),pictures:e=>(0,J.jsx)(Zi,{size:e}),music:e=>(0,J.jsx)(Qi,{size:e}),videos:e=>(0,J.jsx)($i,{size:e}),drive:e=>(0,J.jsx)(fi,{size:e}),image:e=>(0,J.jsx)(Pi,{size:e}),video:e=>(0,J.jsx)(Fi,{size:e}),audio:e=>(0,J.jsx)(Ii,{size:e}),text:e=>(0,J.jsx)(Mi,{size:e}),code:e=>(0,J.jsx)(Ni,{size:e}),clock:e=>(0,J.jsx)(wi,{size:e}),star:e=>(0,J.jsx)(ea,{size:e}),file:e=>(0,J.jsx)(di,{size:e}),archive:e=>(0,J.jsx)(Li,{size:e}),pdf:e=>(0,J.jsx)(Ri,{size:e}),executable:e=>(0,J.jsx)(zi,{size:e}),font:e=>(0,J.jsx)(Bi,{size:e}),database:e=>(0,J.jsx)(Vi,{size:e}),config:e=>(0,J.jsx)(Hi,{size:e}),spreadsheet:e=>(0,J.jsx)(Ui,{size:e}),presentation:e=>(0,J.jsx)(Wi,{size:e}),document:e=>(0,J.jsx)(Gi,{size:e}),app:e=>(0,J.jsx)(ji,{size:e}),gear:e=>(0,J.jsx)(bi,{size:e}),pin:e=>(0,J.jsx)(xi,{size:e}),trash:e=>(0,J.jsx)(Ei,{size:e}),overview:e=>(0,J.jsx)(Ki,{size:e}),book:e=>(0,J.jsx)(ta,{size:e}),briefcase:e=>(0,J.jsx)(na,{size:e}),cloud:e=>(0,J.jsx)(ra,{size:e}),gamepad:e=>(0,J.jsx)(ia,{size:e}),camera:e=>(0,J.jsx)(aa,{size:e}),terminal:e=>(0,J.jsx)(oa,{size:e}),server:e=>(0,J.jsx)(sa,{size:e}),package:e=>(0,J.jsx)(ca,{size:e}),globe:e=>(0,J.jsx)(la,{size:e}),heart:e=>(0,J.jsx)(ua,{size:e}),share:e=>(0,J.jsx)(sa,{size:e}),favorites:e=>(0,J.jsx)(ua,{size:e})};function js(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ms(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Ds)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Os.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=js(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${ks[n]??n}${Ns(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Ns(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ps({panel:e,size:t=16}){let n=G(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,J.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?As[e.icon]:void 0;if(r)return(0,J.jsx)(J.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,J.jsx)(ui,{size:t});case`recent`:return(0,J.jsx)(wi,{size:t});case`frequent`:return(0,J.jsx)(ea,{size:t});case`drives`:return(0,J.jsx)(fi,{size:t});case`home`:return(0,J.jsx)(li,{size:t});case`share`:return(0,J.jsx)(sa,{size:t});case`favorites`:return(0,J.jsx)(ua,{size:t});default:return(0,J.jsx)(ui,{size:t})}}function Fs({place:e,size:t=18}){let n=G(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,J.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&As[e.icon]?(0,J.jsx)(J.Fragment,{children:As[e.icon](t)}):(0,J.jsx)(ui,{size:t})}var Is=`#64748b`;function Ls(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Rs({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=p(),[c,l]=(0,R.useState)(``),[u,d]=(0,R.useState)(`#2dd4bf`),f=(0,R.useRef)(null);(0,R.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,o),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,o)}},[o]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Va.createPortal)((0,J.jsxs)(zs,{"data-tag-menu":`true`,ref:f,style:{left:y,top:b},children:[(0,J.jsxs)(Bs,{children:[(0,J.jsx)(`span`,{children:s(`tags`)}),(0,J.jsx)(Vs,{onClick:o,title:s(`close`),type:`button`,children:(0,J.jsx)(Oi,{size:11})})]}),(0,J.jsxs)(Hs,{children:[m.length===0&&(0,J.jsx)(Ks,{children:s(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,J.jsxs)(Us,{children:[(0,J.jsx)(Ws,{"aria-label":s(`color_of_tag`,{tag:e}),onChange:t=>_(e,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:t}),(0,J.jsxs)(Gs,{$color:t,$ink:Ls(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,J.jsx)(Di,{size:11}),(0,J.jsx)(`span`,{children:e})]})]},e)})]}),(0,J.jsxs)(qs,{children:[(0,J.jsx)(Ws,{"aria-label":s(`color_of_the_new_tag`),onChange:e=>d(e.target.value),title:s(`color_of_the_new_tag`),type:`color`,value:u}),(0,J.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:s(`new_tag`),spellCheck:!1,value:c}),(0,J.jsx)(Js,{onClick:v,type:`button`,children:s(`add`)})]})]}),document.body)}var zs=n.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${Za}
`,Bs=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Vs=n.button`
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
`,Hs=n.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Us=n.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ws=n.input`
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
`,Gs=n.button`
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
`,Ks=n.span`
    font-size: 11px;
    color: var(--text-muted);
`,qs=n.div`
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
`,Js=n.button`
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
`,Ys={file:di,folder:ui,text:Mi,code:Ni,image:Pi,video:Fi,audio:Ii,archive:Li,pdf:Ri,executable:zi,font:Bi,database:Vi,config:Hi,spreadsheet:Ui,presentation:Wi,document:Gi},Xs={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Zs(e){let t=e.lastIndexOf(`.`);return t>0?Xs[e.slice(t).toLowerCase()]??`file`:`file`}function Qs({name:e,size:t}){let n=Ys[e??`file`]??di;return(0,J.jsx)(n,{size:t})}function $s({path:e,name:t,isDirectory:n,size:r=18}){let i=un(e,n);return i?(0,J.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,J.jsx)(ui,{size:r}):(0,J.jsx)(Qs,{name:Zs(t),size:r})}var ec=`application/x-yafm-paths`,tc=[ec,`text/uri-list`];function nc(e){return e?.types.some(e=>tc.includes(e.toLowerCase()))??!1}function rc(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(ec);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(ac).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var ic=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function ac(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return ic?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function oc(e,t,n=!0){e.dataTransfer.setData(ec,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function sc({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let m=p(),[h,g]=(0,R.useState)(()=>new Set),[_,y]=(0,R.useState)(!1),b=(0,R.useRef)(null),x=(0,R.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),S=(0,R.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),C=(0,R.useRef)(null);if((0,R.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=C.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&nc(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=rc(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let w=new Set([...e,...t].map(e=>e.path)),T=w.size>0&&[...w].every(e=>h.has(e)),E=w.size,ee=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{g(T?new Set:w)},te=e=>{b.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),y(!0)},O=e=>{let t=b.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},k=e=>{b.current&&(b.current=null,y(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ne=()=>{let e=x.map(e=>e.path);e.length!==0&&(c(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},A=()=>{let e=x.map(e=>e.path);e.length!==0&&d(e)},j=()=>{let e=new Map;for(let t of x)e.set(t.path,!0);for(let t of S)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),g(new Set)},re=(e,t)=>{let n=h.has(e.path);return(0,J.jsxs)(yc,{$checked:n,draggable:!0,onClick:()=>ee(e.path),onDragStart:r=>{oc(r,n&&h.size>0?[...new Set([...x,...S].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,J.jsx)(bc,{$checked:n,onClick:t=>{t.stopPropagation(),ee(e.path)},type:`button`,children:n&&(0,J.jsx)(Di,{size:8})}),(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,J.jsxs)(xc,{children:[(0,J.jsx)(Sc,{children:e.name}),(0,J.jsx)(Cc,{children:v(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},ie=e=>{nc(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,J.jsxs)(cc,{$dragging:_,"data-tray":`true`,ref:C,style:{left:i.x,top:i.y},onDragEnter:ie,onDragOver:ie,onDrop:e=>{let{paths:t}=rc(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,J.jsxs)(lc,{onPointerDown:te,onPointerMove:O,onPointerUp:k,children:[(0,J.jsxs)(uc,{children:[(0,J.jsx)(ca,{size:13}),m(`tray`),(0,J.jsx)(dc,{children:E})]}),(0,J.jsxs)(fc,{onPointerDown:e=>e.stopPropagation(),children:[(0,J.jsx)(pc,{onClick:D,title:m(T?`select_none`:`select_all`),type:`button`,children:m(T?`none`:`all`)}),(0,J.jsx)(pc,{onClick:l,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,J.jsx)(mc,{onClick:u,title:m(`hide_the_tray`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]})]}),(0,J.jsxs)(hc,{children:[(0,J.jsxs)(_c,{children:[m(`in_this_app`),(0,J.jsx)(dc,{children:e.length})]}),e.length===0&&(0,J.jsx)(gc,{children:m(`drag_files_or_folders_here`)}),e.map(e=>re(e,!0)),t.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(_c,{$clipboard:!0,children:[m(`clipboard`),(0,J.jsx)(dc,{children:t.length}),n&&(0,J.jsx)(vc,{children:m(`cut`)})]}),t.map(e=>re(e,n))]})]}),(0,J.jsxs)(wc,{children:[(0,J.jsx)(Tc,{$plain:!0,disabled:x.length===0,onClick:A,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,J.jsx)(Tc,{disabled:h.size===0||!a,onClick:j,type:`button`,children:m(`move_here`)}),(0,J.jsx)(Tc,{$danger:!0,disabled:x.length===0,onClick:ne,type:`button`,children:m(`remove`)})]})]})}var cc=n.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Ha}
    ${Za}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,lc=n.div`
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
`,uc=n.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,dc=n.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,fc=n.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,pc=n.button`
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
`,mc=n.button`
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
`,hc=n.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,gc=n.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,_c=n.div`
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
`,vc=n.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,yc=n.div`
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
`,bc=n.button`
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
`,xc=n.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Sc=n.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cc=n.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wc=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Tc=n.button`
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
`,Ec={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Dc(){return c.available?await c.request(`share.list`):Ec}async function Oc(e,t){return c.available?await c.request(`share.add`,{path:e,mode:t}):Ec}async function kc(e){return c.available?await c.request(`share.remove`,{id:e}):Ec}async function Ac(e,t){return c.available?await c.request(`share.mode`,{id:e,mode:t}):Ec}async function jc(){return c.available?(await c.request(`share.peers`)).peers??[]:[]}async function Mc(){return c.available?(await c.request(`share.peers.refresh`)).peers??[]:[]}async function Nc(e,t){c.available&&await c.request(`share.pair.start`,{host:e,port:t})}async function Pc(e,t){c.available&&await c.request(`share.pair.respond`,{requestId:e,accept:t})}async function Fc(e,t){c.available&&await c.request(`share.port`,{mode:t,port:e})}var Ic=`yafm://share/`;function Lc(e){return e.toLowerCase().startsWith(Ic)}function Rc(e){if(!Lc(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function zc(e,t,n=``){let r=`${Ic}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Bc(e){let t=Rc(e);if(!t||!c.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await c.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:zc(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:zc(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Vc(e){let t=Rc(e);if(!t||!c.available)throw Error(`This shared file is only available in the desktop app.`);let n=await c.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Hc(e){await Se(await Vc(e))}var Uc=new Map,Wc=new Set,Gc=0;function Kc(){Gc+=1;for(let e of Wc)e()}function qc(e,t){t?Uc.set(e,t):Uc.delete(e),Kc()}function Jc(e){return Uc.has(e)}function Yc(e,t,n){Uc.get(e)?.(t,n)}function Xc(e){return Wc.add(e),()=>Wc.delete(e)}function Zc(){return Gc}function Qc(e){return(0,R.useSyncExternalStore)(Xc,Zc,Zc),{available:Jc(e),open:(t,n)=>Yc(e,t,n)}}function $c(e){return[...Uc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function el(e){return(0,R.useSyncExternalStore)(Xc,Zc,Zc),{available:$c(e).length>0,open:(t,n)=>{let r=$c(e).at(-1);r&&Yc(r,t,n)}}}var tl=60,nl=300,rl=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],il=new Set,al=`yafm.columnWidths`,ol=`yafm.reset-column-widths`,sl=64,cl=720,ll=160,ul=190,dl=120;function fl({listing:e,loading:t,error:n,find:r=vn,view:i,showImages:a,imageStripHeight:o=ul,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d,showCheckboxes:f=!0,openOnSingleClick:m=!1,shortcuts:h=Vt,enableShortcuts:g=!0,refreshToken:_=0,onRefresh:v,onRename:b,onClipboardChanged:S,cutPaths:C=il,onTransfer:w,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:te,onPaste:O,confirmDelete:k=!1,previewVideoAudio:ne=!1,previewVideoAutoplay:A=!1,showDetails:j=!0,onPreviewInfo:re,onActivate:M,groupOf:oe,onGridScroll:P,gridFooter:se,allowBackgroundMenu:F=!0,readOnly:ce=!1,onSelectionChange:le,onSelectionCountChange:ue,selectionMenuRequest:de,selectionMenuId:I,singleSelect:fe=!1,pendingRename:pe=null,pendingRenameToken:me=0,selectMatchesToken:he=0}){let L=p(),ge=Pn(),_e=(0,R.useRef)(null),ve=(0,R.useRef)(null),ye=(0,R.useRef)(null),z=(0,R.useRef)(null),[be,xe]=(0,R.useState)(nl),[Se,Ce]=(0,R.useState)({top:0,height:640}),we=(0,R.useRef)(null),Te=(0,R.useRef)(null),[Ee,De]=(0,R.useState)(null),[Oe,ke]=(0,R.useState)(o),[B,Ae]=(0,R.useState)(()=>new Set),[je,Me]=(0,R.useState)(()=>qn(al)??{}),V=(0,R.useRef)(B),Ne=(0,R.useRef)([]);V.current=B,(0,R.useEffect)(()=>le?.([...B]),[B,le]),(0,R.useEffect)(()=>ue?.(B.size),[B,ue]),(0,R.useEffect)(()=>{let e=de;if(!e||e.token===Ie.current)return;Ie.current=e.token;let t=[...V.current];t.length!==0&&(Fe({x:e.x,y:e.y,paths:t,background:!1}),ht().then(Ye,()=>Ye(!1)))},[de]);let[Pe,Fe]=(0,R.useState)(null),Ie=(0,R.useRef)(0),[Le,H]=(0,R.useState)(null),[Re,ze]=(0,R.useState)(null),[Be,Ve]=(0,R.useState)(null),He=(0,R.useRef)(Be);He.current=Be;let Ue=(0,R.useRef)(0),We=(0,R.useRef)(M);We.current=M;let[Ge,Ke]=(0,R.useState)(()=>{let e=Gn(`yafm.preview.width`,320);return e>=220?e:320}),qe=(0,R.useCallback)(e=>{Ke(e),Kn(`yafm.preview.width`,e)},[]),[Je,Ye]=(0,R.useState)(!1),Xe=(0,R.useCallback)((e,t)=>{let n=[...V.current];n.length!==0&&(Fe({x:e,y:t,paths:n,background:!1}),ht().then(Ye,()=>Ye(!1)))},[]);(0,R.useEffect)(()=>{if(I)return qc(I,B.size>0?Xe:null),()=>qc(I,null)},[I,B,Xe]),(0,R.useEffect)(()=>{Ae(new Set),Ve(null),Fe(null),Te.current=null},[e?.path]),(0,R.useEffect)(()=>{ke(o)},[o]),(0,R.useEffect)(()=>{Ae(new Set),Ve(null),Te.current=null},[_]);let Ze=e=>{we.current={y:e.clientY,height:Oe},e.currentTarget.setPointerCapture(e.pointerId)},Qe=e=>{let t=we.current;if(!t)return;let n=Math.max(dl,Math.round(window.innerHeight*.7));ke(Math.min(n,Math.max(dl,t.height+t.y-e.clientY)))},$e=e=>{we.current&&(we.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(Oe))},et=()=>{ke(ul),s?.(ul)},tt=r.query.length>0,nt=(0,R.useMemo)(()=>rl.filter(e=>i.columns?.includes(e.id)),[i.columns]),rt=i.columns?.includes(`linkTarget`)??!1,it=(0,R.useCallback)(e=>Math.min(cl,Math.max(sl,je[e.id]??e.width)),[je]),at=(0,R.useMemo)(()=>`minmax(160px, 1fr) ${nt.map(e=>`${it(e)}px`).join(` `)}`.trim(),[nt,it]),ot=(0,R.useRef)(null),st=(0,R.useRef)(null),ct=()=>Math.floor(st.current?.getBoundingClientRect().width??ll),lt=e=>{let t=nt[0];t&&(e.preventDefault(),e.stopPropagation(),ot.current={left:{id:t.id,start:it(t)},startX:e.clientX,nameStart:ct()})},ut=(e,t)=>{let n=nt[t],r=nt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),ot.current={left:{id:n.id,start:it(n)},right:{id:r.id,start:it(r)},startX:e.clientX,nameStart:0})},dt=e=>Me(t=>{let n={...t};return delete n[e],Jn(al,n),n});(0,R.useEffect)(()=>{let e=e=>{let t=ot.current;if(!t)return;let n=e.clientX-t.startX;Me(e=>{if(!t.right){let r=Math.max(0,t.nameStart-ll),i=Math.min(Math.min(cl,t.left.start+r),Math.max(sl,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(cl,Math.max(sl,t.left.start+n)),a=Math.min(Math.min(cl,r-sl),Math.max(Math.max(sl,r-cl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{ot.current&&(ot.current=null,Me(e=>(Jn(al,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,R.useEffect)(()=>{let e=()=>Me(()=>(Jn(al,{}),{}));return window.addEventListener(ol,e),()=>window.removeEventListener(ol,e)},[]);let U=(0,R.useMemo)(()=>e?hl(e.entries.map(t=>{let n=t.isDirectory?Fn(ge,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:tt?yn(i,r):null,tags:e.tags[t.name]??[],cut:C.has(t.fullPath)}}).filter(e=>!tt||r.mode===`dim`||e.ranges!==null),i,e,L):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,tt,r,ge,i.sort,i.sortDescending,L,C]);Ne.current=U,(0,R.useEffect)(()=>{he!==0&&Ae(new Set(Ne.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[he]);let ft=Math.max(40,i.iconSize+20),pt=Math.max(0,Math.floor(Se.top/ft)-4),gt=Math.min(U.length,pt+Math.ceil(Se.height/ft)+10),_t=(0,R.useMemo)(()=>U.slice(pt,gt),[U,pt,gt]);(0,R.useEffect)(()=>{let e=z.current;if(!e||i.mode!==`list`)return;let t=()=>Ce(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,R.useEffect)(()=>{Ce(e=>({...e,top:0})),z.current&&(z.current.scrollTop=0)},[e?.path]),(0,R.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=U.findIndex(e=>e.entry.fullPath===r.currentPath),t=z.current;if(e<0||!t)return;let n=e*ft;(n<t.scrollTop||n+ft>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else _e.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,U,ft]);let vt=(0,R.useMemo)(()=>U.slice(0,be),[U,be]);(0,R.useEffect)(()=>{let e=ve.current;if(!e||e.length===0)return;let t=e.filter(e=>U.some(t=>N(t.entry.fullPath,e)));if(t.length===0)return;ve.current=null;let n=t[0],r=U.findIndex(e=>N(e.entry.fullPath,n));r>=0&&xe(e=>Math.max(e,r+nl)),Ae(new Set(t)),Te.current=n,i.mode===`list`&&z.current&&r>=0?z.current.scrollTop=Math.max(0,r*ft-z.current.clientHeight/2):requestAnimationFrame(()=>_e.current?.scrollIntoView({block:`nearest`}))},[U,ft,i.mode]),(0,R.useEffect)(()=>{xe(nl)},[e?.path]),(0,R.useEffect)(()=>{if(!r.currentPath)return;let e=U.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&xe(t=>Math.max(t,e+nl))},[r.currentPath,U]);let yt=(0,R.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&xe(e=>Math.min(U.length,e+nl))},[U.length]),wt=i.mode===`grid`,Tt=(0,R.useMemo)(()=>{if(!wt)return[];if(!oe)return vl(vt,_l);let e=[],t=new Map;for(let n of vt){let r=oe(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[vt,wt,oe]),Et=(0,R.useMemo)(()=>a?U.filter(e=>!e.entry.isDirectory&&An(e.entry.name)):[],[U,a]),kt=Et.length,jt=(0,R.useMemo)(()=>Et.slice(0,tl),[Et]),Mt=(0,R.useMemo)(()=>a?vl(jt,gl):[],[jt,a]),Nt=(0,R.useMemo)(()=>U.map(e=>e.entry.fullPath),[U]),Pt=U.length>0&&B.size>=U.length,Ft=B.size>0&&!Pt,It=()=>{fe||(Pt?Ht():Ae(new Set(Nt)))},Lt=e?.path??``,zt=(0,R.useCallback)((e,t)=>{if(fe){Te.current=t,Ae(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Ae(r=>{if(e.shiftKey&&Te.current!==null){let e=Nt.indexOf(Te.current),i=Nt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Nt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),Te.current=t,e}return Te.current=t,new Set([t])})},[Nt,fe]),Bt=(0,R.useCallback)(e=>{fe?(Te.current=e,Ae(new Set([e]))):(Te.current=e,Ae(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[fe]),Ht=(0,R.useCallback)(()=>{Te.current=null,Ae(new Set)},[]);(0,R.useEffect)(()=>{if(me===0||!pe||Ue.current===me||!e?.entries.some(e=>e.fullPath===pe))return;Ue.current=me,Te.current=pe,Ae(new Set([pe])),Ve({path:pe,value:y(pe)});let t=U.findIndex(e=>e.entry.fullPath===pe),n=z.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*ft;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(pe)}"]`)?.scrollIntoView({block:`nearest`})})}},[z,e,pe,me,ft,U,i.mode]),(0,R.useEffect)(()=>{if(!Be)return;let e=U.findIndex(e=>e.entry.fullPath===Be.path),t=z.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*ft;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Be.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[z,Be,ft,U,i.mode]);let Ut=(0,R.useCallback)(()=>Fe(null),[]),Kt=(0,R.useCallback)((e,t)=>{e.isDirectory?u(e.fullPath,Wt(t)):d?.(e.fullPath,Wt(t))},[u,d]),qt=(0,R.useCallback)((e,t,n)=>{De({entry:e,x:t,y:n})},[]),Yt=(0,R.useRef)(null),Xt=(0,R.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;oc(e,B.has(n)?[...B]:[n])},[B]),Zt=(0,R.useCallback)(e=>{if(!nc(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Yt.current=t?.dataset.directory===`true`?t.dataset.path??Lt:Lt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Lt]),Qt=(0,R.useCallback)(e=>{if(ce)return;let{paths:t,move:n}=rc(e),r=Yt.current??Lt;Yt.current=null,t.length!==0&&w&&(e.preventDefault(),w(t,r,!e.ctrlKey&&n))},[Lt,w,ce]),$t=(0,R.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),ce||!t&&!F)return;let n=V.current;t&&!n.has(t)&&Ae(new Set([t])),t&&(Te.current=t);let r=t?n.has(t)?[...n]:[t]:[];Fe({x:e.clientX,y:e.clientY,paths:r,background:!t}),ht().then(Ye,()=>Ye(!1))},[F,Lt]),en=(0,R.useCallback)(()=>v?.(),[v]),tn=(e,t)=>{Te.current=e,Ae(new Set([e])),t&&Ve({path:e,value:y(e)}),en()},nn=Le&&(0,J.jsx)(No,{initialDirectory:Lt,initialName:Le.name,onCancel:()=>H(null),onCompress:async e=>{let t=await Rt(Le.paths,e);return!t.ok||!t.path?(ka(t.error??L(`could_not_create_the_archive`)),!1):(tn(t.path,!1),!0)}}),W=async(e,t=!1)=>{let n=e,r=t;if(e.some(Lc)){let t=[];for(let n of e)if(!Lc(n))t.push(n);else{if(Ne.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){ka(L(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await Vc(n))}catch(e){ka(e instanceof Error?e.message:L(`the_file_could_not_be_copied`));return}}n=t,r=!1}await mt(n,r)&&(Ye(!0),S?.())},rn=async e=>{if(!e)return;let t=await bt(e);t.cancelled||(t.ok?(ve.current=t.created,en(),O?.()):ka(L(`nothing_on_the_clipboard_could_be_pasted_here`)))},an=async(e,t=!1)=>{if(!Lt)return;let n=e===null?await Ct(Lt,t):await Dt(Lt,e);!n.ok||n.path===null?ka(n.error??L(`could_not_create_the_item`)):(Te.current=n.path,Ae(new Set([n.path])),Ve({path:n.path,value:y(n.path)}),en())},on=e=>{Ae(new Set([e.fullPath])),Te.current=e.fullPath,Ve({path:e.fullPath,value:e.name})},sn=(0,R.useCallback)(e=>Ve(t=>t&&{...t,value:e}),[]),cn=(0,R.useCallback)(()=>Ve(null),[]),ln=(0,R.useCallback)(async()=>{let e=He.current;if(Ve(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Ne.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await St(e.path,t);r.ok?(Ht(),r.path&&b?.(e.path,r.path),en(),window.setTimeout(()=>en(),250)):ka(r.error??L(`could_not_rename_the_entry`))},[Ht,b,en,L]),un=async(e,t=!1)=>{if((t||k)&&!await dn(e,t))return;let n=await xt(e,t);if(!n.ok&&n.needsPermanent){if(!await dn(e,!0))return;n=await xt(e,!0)}if(n.ok)Ht(),en();else{if(n.cancelled)return;ka(n.error??L(t?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},dn=(0,R.useCallback)((e,t)=>new Promise(n=>ze({paths:e,permanent:t,resolve:n})),[]),G=(0,R.useCallback)(e=>{ze(t=>(t?.resolve(e),null))},[]);(0,R.useEffect)(()=>{if(!g||Pe)return;let e=e=>{if(Jt(e.target))return;We.current?.();let t=Gt(e),n=[...B],r=n.length===1?U.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Nt.length===0)return;e.preventDefault();let n=Te.current&&Nt.includes(Te.current)?Te.current:B.size===1?[...B][0]:null,r=n?Nt.indexOf(n):-1,i=t===`home`?0:t===`end`?Nt.length-1:Math.max(0,Math.min(Nt.length-1,r+(t===`arrowdown`?1:-1))),a=Nt[i];Ae(new Set([a])),Te.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===h.copy?i(()=>{n.length>0&&W(n)}):t===h.cut?i(()=>{n.length>0&&W(n,!0)}):t===h.paste?i(()=>void rn(Lt)):t===h.delete?i(()=>{n.length>0&&un(n)}):t===h.deletePermanently?i(()=>{n.length>0&&un(n,!0)}):t===h.selectAll?i(()=>{Ae(new Set(Nt)),Te.current=Nt[0]??null}):t===h.invertSelection?i(()=>{Ae(new Set(Nt.filter(e=>!B.has(e)))),Te.current=Nt[0]??null}):t===h.rename&&r?i(()=>void on(r)):t===h.open&&r?i(()=>{r.isDirectory?u(r.fullPath):d?.(r.fullPath)}):t===h.newFolder||t===`f10`?i(()=>void an(null)):t===h.terminal?i(()=>void At(Lt)):t===h.properties&&i(()=>void Ot(n.length>0?n:Lt?[Lt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Nt,W,an,Lt,g,Pe,u,d,rn,un,on,U,B,h]);let K=Re&&(0,J.jsx)(Ko,{confirmLabel:Re.permanent?L(`delete`):L(`move`),danger:Re.permanent,message:Re.permanent?L(`permanently_delete_target_this_cannot_be_undone`,{target:Re.paths.length===1?L(`this_item`):L(`count_items`,{count:Re.paths.length})}):L(`move_target_to_the_recycle_bin`,{target:Re.paths.length===1?L(`this_item`):L(`count_items`,{count:Re.paths.length})}),onCancel:()=>G(!1),onConfirm:()=>G(!0),open:!0,title:Re.permanent?L(`delete_permanently`):L(`move_to_the_recycle_bin`)}),q=(0,R.useMemo)(()=>{if(!e||B.size===0)return null;let t=Nt.find(e=>B.has(e));return t?U.find(e=>e.entry.fullPath===t)?.entry??null:null},[Nt,e,U,B]),fn=(0,R.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:y(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:L(`type`),value:L(`folder`)},{label:L(`location`),value:e.parent??`—`},{label:L(`path`),value:e.path},{label:L(`size`),value:x(t)},{label:L(`items`),value:ae(L,n,`k_1_item`,`count_items`)},{label:L(`modified`),value:`—`},{label:L(`created`),value:`—`},{label:L(`attributes`),value:`—`}]}},[e,L]),pn=(0,R.useMemo)(()=>{if(!q||!e)return null;let t=q.isDirectory?e.folderSizes[q.name]:void 0,n=e.tags[q.name]??[],r=q.name.lastIndexOf(`.`),i=r>0&&r<q.name.length-1?q.name.slice(r+1).toUpperCase():`—`;return{name:q.name,path:q.fullPath,isDirectory:q.isDirectory,size:q.size,modified:q.modified,created:q.created,fields:[{label:L(`type`),value:xl(q,L)},...q.isEncrypted?[{label:L(`encryption`),value:L(`password_required`)}]:[],{label:L(`extension`),value:q.isDirectory?`—`:i},{label:L(`location`),value:e.path},{label:L(`full_path`),value:q.fullPath},{label:L(`size`),value:q.isDirectory?t===void 0?`—`:x(t):x(q.size)},...q.isDirectory?[{label:L(`items`),value:`${e.counts[q.name]??`—`}`}]:[],{label:L(`modified`),value:ie(q.modified)},{label:L(`created`),value:ie(q.created)},{label:L(`link_status`),value:q.linkTarget==null?q.linkCount>1?L(`hard_link`):`—`:q.linkValid?`ok`:L(`broken`)},...q.linkTarget?[{label:L(`target`),value:q.linkTarget}]:[],...q.linkCount>1?[{label:L(`links`),value:String(q.linkCount)}]:[],{label:L(`attributes`),value:[q.isHidden?L(`hidden`):``,q.isSystem?L(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:L(`tags`),value:n.join(`, `)}]:[]]}},[e,q,L]),mn=Pe?.paths.length===1?Pe.paths[0]:null,hn=mn?U.find(e=>e.entry.fullPath===mn)?.entry:void 0,gn=hn?{path:hn.fullPath,isDirectory:hn.isDirectory}:null,_n=pn??fn,bn=(0,R.useRef)(re);bn.current=re,(0,R.useEffect)(()=>{bn.current?.(_n)},[re,_n]);let xn=j&&_n&&(0,J.jsx)(rs,{info:_n,onWidth:qe,selectionNote:B.size>1?ae(L,B.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:ne,videoAutoplay:A,width:Ge});return n&&!e?(0,J.jsx)(Tu,{children:(0,J.jsx)(Du,{children:n})}):!e&&!t?(0,J.jsx)(Tu,{children:(0,J.jsx)(Eu,{children:L(`nothing_selected`)})}):i.mode===`grid`?(0,J.jsxs)(Hl,{onPointerDown:M,children:[(0,J.jsxs)(Ul,{children:[(0,J.jsxs)(Zl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Ht()},onContextMenu:e=>$t(e),onDragOver:Zt,onDragStart:Xt,onDrop:Qt,onScroll:e=>{P?.(e.currentTarget),yt(e.currentTarget)},children:[f&&U.length>0&&(0,J.jsxs)(zl,{children:[(0,J.jsx)(Ll,{$checked:!fe&&Pt,$partial:!fe&&Ft,"aria-label":L(Pt?`select_none`:`select_all`),disabled:fe,onClick:It,title:L(Pt?`select_none`:`select_all`),type:`button`,children:Pt?(0,J.jsx)(Di,{size:10}):Ft?(0,J.jsx)(Rl,{}):null}),(0,J.jsx)(`span`,{children:L(Pt?`select_none`:`select_all`)})]}),t&&!e?(0,J.jsx)(nu,{$size:i.gridSize,children:(0,J.jsx)(Dl,{size:i.gridSize})}):(0,J.jsx)(kl,{counts:e?.counts,currentPath:tt?r.currentPath:null,groups:Tt,gridSize:i.gridSize,innerRef:_e,onContextMenu:$t,onOpen:u,onOpenFile:d,onRenameCancel:cn,onRenameChange:sn,onRenameCommit:ln,onSelect:zt,onToggle:Bt,openOnSingleClick:m,renaming:Be,searching:tt,selected:B,showCheckboxes:f,showTarget:rt}),!t&&e&&U.length===0&&(0,J.jsx)(wu,{children:(0,J.jsx)(Eu,{children:n??(tt&&r.mode===`hide`?L(`no_entries_match_the_search`):L(`this_folder_is_empty`))})}),se]}),Pe&&(0,J.jsx)(_o,{canPaste:Je,directory:Lt,allowCompression:!0,menu:Pe,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:te,onArchiveCreated:tn,onClose:Ut,onCompressTo:(e,t)=>H({paths:e,name:t}),onCopy:W,onCreateFile:e=>void an(e),onCreateFolder:e=>void an(null,e),onDelete:un,onOpen:u,onOpenFile:d,onPaste:rn,onRefresh:en,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&on(t)},shortcuts:h,target:gn}),nn,K]}),xn]}):(0,J.jsxs)(Hl,{onPointerDown:M,children:[(0,J.jsxs)(Ul,{children:[(0,J.jsxs)(Wl,{onScroll:e=>{z.current&&z.current.scrollLeft!==e.currentTarget.scrollLeft&&(z.current.scrollLeft=e.currentTarget.scrollLeft)},ref:ye,style:{gridTemplateColumns:at},children:[(0,J.jsxs)(Pl,{ref:st,children:[f&&(0,J.jsx)(Ll,{$checked:!fe&&Pt,$partial:!fe&&Ft,"aria-label":L(Pt?`select_none`:`select_all`),disabled:fe,onClick:e=>{e.stopPropagation(),It()},title:L(Pt?`select_none`:`select_all`),type:`button`,children:Pt?(0,J.jsx)(Di,{size:10}):Ft?(0,J.jsx)(Rl,{}):null}),(0,J.jsxs)(Gl,{onClick:()=>c(`name`),type:`button`,children:[L(`name`),pl(i,`name`)]}),(0,J.jsx)(Il,{"aria-label":L(`resize_column`),onDoubleClick:()=>nt[0]&&dt(nt[0].id),onPointerDown:lt,role:`separator`})]}),nt.map((e,t)=>(0,J.jsxs)(Fl,{children:[(0,J.jsxs)(Gl,{onClick:()=>c(e.id),type:`button`,children:[L(e.label),pl(i,e.id)]}),t<nt.length-1&&(0,J.jsx)(Il,{"aria-label":L(`resize_column`),onDoubleClick:()=>dt(e.id),onPointerDown:e=>ut(e,t),role:`separator`})]},e.id))]}),(0,J.jsxs)(Kl,{onClick:e=>{e.target===e.currentTarget&&Ht()},onContextMenu:e=>$t(e),onDragOver:Zt,onDragStart:Xt,onDrop:Qt,onScroll:e=>{ye.current&&ye.current.scrollLeft!==e.currentTarget.scrollLeft&&(ye.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;Ce(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:z,children:[t&&!e?(0,J.jsx)(El,{template:at,columns:nt.length}):(0,J.jsxs)(J.Fragment,{children:[pt>0&&(0,J.jsx)(`div`,{style:{height:pt*ft}}),_t.map(t=>{let n=t.entry.fullPath;return(0,J.jsx)(jl,{current:tt&&n===r.currentPath,dim:tt&&t.ranges===null,height:ft,iconSize:i.iconSize,innerRef:_e,listing:e,onContextMenu:$t,onOpen:Kt,onRenameCancel:cn,onRenameChange:sn,onRenameCommit:ln,onSelect:zt,onTagEdit:qt,onToggle:Bt,openOnSingleClick:m,renaming:Be?.path===n?{value:Be.value}:null,row:t,selected:B.has(n),showCheckboxes:f,showTarget:rt,template:at,visible:nt},n)}),gt<U.length&&(0,J.jsx)(`div`,{style:{height:(U.length-gt)*ft}})]}),!t&&e&&U.length===0&&(0,J.jsx)(Tu,{children:(0,J.jsx)(Eu,{children:n??(tt&&r.mode===`hide`?L(`no_entries_match_the_search`):L(`this_folder_is_empty`))})})]}),a&&Et.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(ql,{onDoubleClick:et,onPointerDown:Ze,onPointerMove:Qe,onPointerUp:$e,title:L(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(Jl,{style:{height:Oe},children:[(0,J.jsxs)(Yl,{children:[L(`preview`),(0,J.jsx)(Xl,{children:kt>tl?`${jt.length} / ${kt}`:kt})]}),(0,J.jsx)(Zl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Ht()},onContextMenu:e=>$t(e),children:(0,J.jsx)(kl,{counts:e?.counts,currentPath:tt?r.currentPath:null,groups:Mt,gridSize:i.gridSize,onContextMenu:$t,onOpen:u,onOpenFile:d,onSelect:zt,onToggle:Bt,openOnSingleClick:m,searching:tt,selected:B,showCheckboxes:f,showTarget:rt})})]})]}),Ee&&e&&(0,J.jsx)(Rs,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(Ee.entry.name,e,t),onClose:()=>De(null),tags:e.tags[Ee.entry.name]??[],x:Ee.x,y:Ee.y}),Pe&&(0,J.jsx)(_o,{canPaste:Je,directory:Lt,allowCompression:!0,menu:Pe,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:te,onArchiveCreated:tn,onClose:Ut,onCompressTo:(e,t)=>H({paths:e,name:t}),onCopy:W,onCreateFile:e=>void an(e),onCreateFolder:e=>void an(null,e),onDelete:un,onOpen:u,onOpenFile:d,onPaste:rn,onRefresh:en,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&on(t)},shortcuts:h,target:gn}),nn,K]}),xn]})}function pl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var ml=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function hl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return xl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:ml.compare(String(r),String(i));return t.sortDescending?-o:o})}var gl=Dn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&kn(t.entry.name)===e})),_l=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...gl.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function vl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function yl(e){return Math.max(24,Math.min(e-56,160))}var bl={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function xl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`internet_shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`folder_link`):t(`symbolic_link`);if(e.isDirectory)return t(`folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(bl[Zs(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`file`)}function Sl(e,t,n,r){switch(e){case`type`:return xl(t,r);case`size`:return wl(t,n.folderSizes);case`modified`:return ie(t.modified);case`created`:return ie(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:r(`broken`);default:return``}}function Cl({name:e,ranges:t}){if(!t||t.length===0)return(0,J.jsx)(J.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,J.jsx)(Cu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,J.jsx)(J.Fragment,{children:n})}function wl(e,t){if(!e.isDirectory)return x(e.size);let n=t[e.name];return n===void 0?`—`:x(n)}function Tl({entry:e,size:t=18}){let n=p(),r=(0,R.useRef)(null),[i,a]=(0,R.useState)(!1);(0,R.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=un(i?e.fullPath:null,e.isDirectory,t>32),s=G(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,J.jsxs)(Ml,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,J.jsx)(Qs,{name:e.iconSource.slice(5),size:t}):s?(0,J.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,J.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,J.jsx)(ui,{size:t}):(0,J.jsx)(Qs,{name:Zs(e.name),size:t}),e.isEncrypted&&(0,J.jsx)(Nl,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,J.jsx)(xa,{size:Math.max(8,Math.round(t*.52))})})]})}function El({template:e,columns:t}){return(0,J.jsx)(J.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,J.jsxs)(ru,{style:{gridTemplateColumns:e},children:[(0,J.jsxs)(ou,{children:[(0,J.jsx)(iu,{style:{flexShrink:0,height:18,width:18}}),(0,J.jsx)(iu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,J.jsx)(iu,{style:{width:t%2==0?44:92}},t))]},r))})}function Dl({size:e}){return(0,J.jsx)(J.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,J.jsxs)(_u,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,J.jsx)(vu,{children:(0,J.jsx)(iu,{style:{height:e,width:e}})}),(0,J.jsx)(bu,{children:(0,J.jsx)(iu,{style:{height:9,width:`${t}%`}})})]},n))})}var Ol=(0,R.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=p(),S=Pn(),C=!e.entry.isDirectory&&An(e.entry.name),w=(0,R.useRef)(null),[T,E]=(0,R.useState)(!1);(0,R.useEffect)(()=>{if(!C||T)return;let e=w.current;if(!e)return;if(!(`IntersectionObserver`in window)){E(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(E(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[C,T]);let ee=pn(C&&T?e.entry.fullPath:null,192,e.entry.modified),[D,te]=(0,R.useState)(!1),O=C&&ee!==null&&!D,k=e.entry.fullPath,ne=t=>{e.entry.isDirectory?v(k,Wt(t)):y?.(k,Wt(t))};return(0,J.jsxs)(_u,{$current:t,$dim:n,$image:O,$selected:s,onClick:e=>{h(e,k),l&&ne(e)},onContextMenu:e=>_(e,k),onDoubleClick:e=>{l||ne(e)},ref:e=>{w.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":k,draggable:!u,children:[c&&(0,J.jsx)(Vl,{$checked:s,onClick:e=>{e.stopPropagation(),g(k)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`deselect`:`select`),type:`button`,children:s&&(0,J.jsx)(Di,{size:10})}),(0,J.jsx)(vu,{children:O?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>te(!0),src:ee}):(0,J.jsx)(yu,{children:e.place&&S.useIcons?(0,J.jsx)(Fs,{place:e.place,size:r}):(0,J.jsx)(Tl,{entry:e.entry,size:r})})}),(0,J.jsxs)(bu,{children:[u?(0,J.jsx)(Al,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,J.jsx)(xu,{$broken:e.entry.linkValid===!1,children:(0,J.jsx)(Cl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,J.jsxs)(cu,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,J.jsx)(xa,{size:9}),b(`encrypted`)]}),e.cut&&(0,J.jsxs)(lu,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,J.jsx)(ma,{size:9}),b(`cut`)]}),(0,J.jsx)(Su,{children:e.entry.isDirectory?i===void 0?xl(e.entry,b):b(`type_count_items`,{type:xl(e.entry,b),count:i}):b(`type_size`,{type:xl(e.entry,b),size:x(e.entry.size)})}),a&&e.entry.linkTarget&&(0,J.jsxs)(du,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,J.jsx)(Sa,{size:9}),(0,J.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function kl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:_,onRenameCommit:v,onRenameCancel:y}){let b=p();return(0,J.jsx)(J.Fragment,{children:e.map(e=>(0,J.jsxs)(Ql,{children:[(0,J.jsxs)($l,{children:[b(e.label),(0,J.jsx)(eu,{children:e.rows.length}),(0,J.jsx)(tu,{})]}),(0,J.jsx)(nu,{$size:t,children:e.rows.map(e=>(0,J.jsx)(Ol,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:yl(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:y,onRenameChange:_,onRenameCommit:v,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Al({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,R.useRef)(null);return(0,R.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,J.jsx)(uu,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var jl=(0,R.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onTagEdit:y,onRenameChange:b,onRenameCommit:x,onRenameCancel:S}){let C=p(),w=Pn(),T=e.entry.fullPath;return(0,J.jsxs)(au,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{h(t,T),o&&v(e.entry,t)},onContextMenu:e=>_(e,T),onDoubleClick:t=>{o||v(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!m,children:[(0,J.jsxs)(ou,{children:[i&&(0,J.jsx)(Bl,{$checked:r,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:C(r?`deselect`:`select`),type:`button`,children:r&&(0,J.jsx)(Di,{size:10})}),e.place&&w.useIcons?(0,J.jsx)(Ml,{children:(0,J.jsx)(Fs,{place:e.place,size:s})}):(0,J.jsx)(Tl,{entry:e.entry,size:s}),m?(0,J.jsx)(Al,{onCancel:S,onChange:b,onCommit:x,value:m.value}):(0,J.jsx)(su,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,J.jsx)(Cl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,J.jsxs)(cu,{title:C(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,J.jsx)(xa,{size:9}),C(`encrypted`)]}),e.cut&&(0,J.jsxs)(lu,{title:C(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,J.jsx)(ma,{size:9}),C(`cut`)]}),a&&e.entry.linkTarget&&(0,J.jsxs)(du,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,J.jsx)(Sa,{size:9}),(0,J.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,J.jsx)(fu,{children:t.id===`tags`?(0,J.jsx)(pu,{onClick:t=>{t.stopPropagation(),y(e.entry,t.clientX,t.clientY)},title:C(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,J.jsx)(mu,{$color:t,$ink:Ls(t),children:e},e)}):(0,J.jsx)(hu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,J.jsx)(gu,{children:C(`broken`)}):Sl(t.id,e.entry,d,C)},t.id))]})}),Ml=n.span`
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
`,Nl=n.span`
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
`,Pl=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Fl=n.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Il=n.span`
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
`,Ll=n.button`
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
`,Rl=n.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,zl=n.div`
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
`,Bl=n.button`
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
`,Vl=n(Bl)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Hl=n.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Ul=n.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Wl=n.div`
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
`,Gl=n.button`
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
`,Kl=n.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,ql=n.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Jl=n.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Yl=n.div`
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
`,Xl=n.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Zl=n.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Ql=n.section`
    & + & {
        margin-top: 22px;
    }
`,$l=n.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,eu=n.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,tu=n.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,nu=n.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,ru=n.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,iu=n.span`
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
`,au=n.div`
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
`,ou=n.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,su=n.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,cu=n.span`
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
`,lu=n.span`
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
`,uu=n.input`
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
`,du=n.span`
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
`,fu=n.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,pu=n.button`
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
`,mu=n.span`
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
`,hu=n.span`
    color: var(--text-muted);
    font-size: 11px;
`,gu=n.span`
    color: #fca5a5;
`,_u=n.div`
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
`,vu=n.div`
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
`,yu=n.span`
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
`,bu=n.div`
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
`,xu=n.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Su=n.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Cu=n.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,wu=n.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Tu=n.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Eu=n.p`
    font-size: 13px;
    color: var(--text-muted);
`,Du=n.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Ou=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,ku=`/assets/bloom-BpfZWiaG.mp4`,Au=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,ju=`/assets/drift-BRBSQL2_.mp4`,Mu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Nu=`/assets/ember-CtSz0YxR.mp4`,Pu=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],Fu=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],Iu=[{id:`builtin:video:drift`,name:`drift`,url:ju,poster:Au},{id:`builtin:video:ember`,name:`ember`,url:Nu,poster:Mu},{id:`builtin:video:bloom`,name:`bloom`,url:ku,poster:Ou}],Lu=Fu.map(e=>({...e,variants:Pu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Uu(Wu(e.id,t,!1)),lightUrl:Uu(Wu(e.id,t,!0))}))})),Ru=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>Pu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Uu(Gu(e.id,t,!1)),lightUrl:Uu(Gu(e.id,t,!0))}))),zu=new Map([...Lu.flatMap(e=>e.variants),...Ru].map(e=>[e.id,e])),Bu=new Map(Iu.map(e=>[e.id,e]));function Vu(e,t=`dark`){if(Bu.has(e))return Bu.get(e).url;let n=zu.get(e)??zu.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function Hu(e){return Bu.has(e)}function Uu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Wu(e,t,n){return e===`dunes`?Qu(t,n):e===`tide`?$u(t,n):Zu(t,n)}function Gu(e,t,n){return e===`skyline`?qu(t,n):e===`orbit`?Ju(t,n):Ku(t,n)}function Ku({accent:e,secondary:t},n){let r=Xu(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=Xu(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=Xu(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=Xu(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=Xu(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${r}"/>
            <stop offset="0.62" stop-color="${i}"/>
            <stop offset="1" stop-color="${s}"/>
        </linearGradient>
        <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stop-color="${t}" stop-opacity="0.95"/>
            <stop offset="0.4" stop-color="${e}" stop-opacity="0.45"/>
            <stop offset="1" stop-color="${e}" stop-opacity="0"/>
        </radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1450" cy="330" r="360" fill="url(#sun)"/>
    <circle cx="1450" cy="330" r="120" fill="${Xu(t,`#ffffff`,n?.45:.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${a}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${o}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${c}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function qu({accent:e,secondary:t},n){let r=Xu(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=Xu(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=Xu(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=Xu(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${r}"/>
            <stop offset="0.7" stop-color="${i}"/>
            <stop offset="1" stop-color="${n?`#e6ebf8`:`#05030a`}"/>
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
    ${s}
    <rect x="0" y="720" width="1920" height="360" fill="${Xu(e,n?`#d5deea`:`#040208`,n?.7:.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function Ju({accent:e,secondary:t},n){let r=Xu(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=Xu(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=Xu(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${Xu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${r}"/>
            <stop offset="1" stop-color="${i}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${Xu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${Xu(e,n?`#cfd9e6`:`#08050f`,n?.55:.7)}"/>
        </radialGradient>
    </defs>
    <rect width="1920" height="1080" fill="url(#space)"/>
    ${o}
    <g transform="rotate(-18 960 540)">
        <ellipse cx="960" cy="540" rx="610" ry="210" fill="none" stroke="${a}" stroke-width="3" opacity="0.55"/>
        <ellipse cx="960" cy="540" rx="480" ry="150" fill="none" stroke="${e}" stroke-width="1.6" opacity="0.4"/>
        <ellipse cx="960" cy="540" rx="760" ry="280" fill="none" stroke="${t}" stroke-width="1.2" opacity="0.25"/>
    </g>
    <circle cx="960" cy="540" r="170" fill="url(#planet)"/>
    <circle cx="960" cy="540" r="220" fill="none" stroke="${e}" stroke-width="2" opacity="0.5"/>
    <circle cx="1450" cy="300" r="18" fill="${Xu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function Yu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function Xu(e,t,n){let[r,i,a]=Yu(e),[o,s,c]=Yu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Zu({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Xu(e,n?`#f2f6ff`:`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${Xu(t,n?`#eef2ff`:`#070b1c`,n?.86:.85)}"/>
            <stop offset="1" stop-color="${Xu(e,n?`#e8f0fb`:`#04060c`,n?.9:.94)}"/>
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
    <ellipse cx="420" cy="260" rx="540" ry="300" fill="${e}" opacity="${n?.45:.7}" filter="url(#soft)"/>
    <ellipse cx="1450" cy="220" rx="460" ry="260" fill="${t}" opacity="${n?.4:.66}" filter="url(#soft)"/>
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${Xu(e,t,.5)}" opacity="${n?.26:.42}" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="${n?.32:.5}" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="${n?.3:.42}" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="${n?.26:.36}" filter="url(#soft2)"/>
</svg>`}function Qu({accent:e,secondary:t},n){let r=Xu(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=Xu(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=Xu(e,t,.25),o=Xu(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=Xu(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=Xu(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${r}"/>
            <stop offset="0.5" stop-color="${i}"/>
            <stop offset="1" stop-color="${n?`#f6ecdd`:`#0d0703`}"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${a}" stop-opacity="${n?.5:.65}"/>
            <stop offset="1" stop-color="${o}" stop-opacity="${n?.16:.2}"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="${n?.34:.4}"/>
            <stop offset="1" stop-color="${s}" stop-opacity="0.15"/>
        </linearGradient>
        <filter id="haze" x="-160%" y="-160%" width="420%" height="420%">
            <feGaussianBlur stdDeviation="90"/>
        </filter>
    </defs>
    <rect width="1920" height="1080" fill="url(#sky)"/>
    <circle cx="1480" cy="250" r="170" fill="${t}" opacity="0.42" filter="url(#haze)"/>
    <circle cx="1480" cy="250" r="110" fill="${Xu(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${c}" opacity="${n?.5:.75}"/>
</svg>`}function $u({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Xu(e,n?`#e6f7fb`:`#02070a`,n?.88:.9)}"/>
            <stop offset="0.5" stop-color="${Xu(t,n?`#eefaf8`:`#03100f`,n?.85:.82)}"/>
            <stop offset="1" stop-color="${Xu(e,n?`#dff2f7`:`#020609`,n?.9:.94)}"/>
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
    <ellipse cx="350" cy="840" rx="620" ry="280" fill="${e}" opacity="${n?.3:.45}" filter="url(#blur)"/>
    <ellipse cx="1550" cy="240" rx="520" ry="260" fill="${t}" opacity="${n?.26:.38}" filter="url(#blur)"/>
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${Xu(e,t,.4)}" opacity="${n?.34:.5}" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var ed=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function td(e){return ed.test(e)}function nd({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):O(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=hn(i),o=n?.startsWith(`builtin:`)?Vu(n,t):r??a,s=r===null?i===null?n!==null&&Hu(n):td(i):td(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,J.jsxs)(rd,{"aria-hidden":!0,children:[s?(0,J.jsx)(ad,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,J.jsx)(id,{src:o,style:{filter:c}}),(0,J.jsx)(od,{})]})}var rd=n.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,id=n.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,ad=n.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,od=n.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function sd({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=p(),s=(0,R.useRef)(null),[c,l]=(0,R.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,R.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,Va.createPortal)((0,J.jsx)(dd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,J.jsxs)(fd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(pd,{children:o(`protected_folder`)}),(0,J.jsx)(md,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,J.jsx)(hd,{children:t.map(e=>(0,J.jsxs)(gd,{children:[(0,J.jsx)(_d,{children:e.path}),(0,J.jsx)(vd,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,J.jsx)(yd,{children:cd(o,u,r??!1)}),(0,J.jsx)(bd,{children:ld(o,u)}),(0,J.jsx)(xd,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,J.jsxs)(Sd,{children:[(0,J.jsx)(Cd,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,J.jsx)(wd,{disabled:c>0,onClick:a,type:`button`,children:c>0?ud(o,u,c):ud(o,u,0)})]})]})}),document.body)}function cd(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function ld(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function ud(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var dd=n.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${no}
`,fd=n.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Za}
`,pd=n.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,md=n.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,hd=n.div`
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
`,gd=n.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,_d=n.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,vd=n.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,yd=n.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,bd=n.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,xd=n.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Sd=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Cd=n.button`
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
`,wd=n.button`
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
`;function Td(){let e=p(),[t,n]=(0,R.useState)(null),r=(0,R.useRef)(null),i=(0,R.useRef)(null);(0,R.useEffect)(()=>(Oa(e=>new Promise(t=>{r.current=t,n(e)})),()=>Oa(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,R.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Va.createPortal)((0,J.jsx)(Ed,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,J.jsxs)(Dd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(Od,{children:e(`notice`)}),(0,J.jsx)(kd,{children:t}),(0,J.jsx)(Ad,{children:(0,J.jsx)(jd,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Ed=n.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${no}
`,Dd=n.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Za}
`,Od=n.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,kd=n.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Ad=n.div`
    display: flex;
    justify-content: flex-end;
`,jd=n.button`
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
`;function Md(){let e=p(),[t,n]=(0,R.useState)(null),[r,i]=(0,R.useState)(``),a=(0,R.useRef)(null),o=(0,R.useRef)(null);(0,R.useEffect)(()=>(Aa((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Aa(null)),[]),(0,R.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Va.createPortal)((0,J.jsx)(Nd,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,J.jsxs)(Pd,{role:`dialog`,"aria-modal":`true`,children:[(0,J.jsx)(Fd,{children:e(`archive_password`)}),(0,J.jsx)(Id,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,J.jsx)(Ld,{title:t.archive,children:t.archive}),(0,J.jsx)(Rd,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,J.jsxs)(zd,{children:[(0,J.jsx)(Bd,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,J.jsx)(Vd,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Nd=n.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${no}
`,Pd=n.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${Za}
`,Fd=n.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Id=n.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ld=n.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rd=n.input`
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
`,zd=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Bd=n.button`
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
`,Vd=n(Bd)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Hd({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:m,onMode:h,onClose:g,onSelectMatches:_}){let v=p(),y=(0,R.useRef)(null),b=c??v(`search_this_folder`);(0,R.useEffect)(()=>{let e=y.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let x=e=>{e(),y.current?.focus()};return(0,J.jsxs)(Ud,{children:[(0,J.jsx)(pi,{}),(0,J.jsx)(Wd,{"aria-label":b,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),g())},placeholder:b,ref:y,spellCheck:!1,value:e}),!s&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Gd,{children:i===0?`0/0`:`${a+1}/${i}`}),_&&(0,J.jsx)(Kd,{disabled:i===0,onClick:_,title:v(`select_all_matches`),type:`button`,children:(0,J.jsx)(Di,{size:12})}),(0,J.jsx)(Kd,{$chevron:!0,onClick:()=>x(u),title:v(`previous_match_shift_enter`),type:`button`,children:(0,J.jsx)(yi,{size:12})}),(0,J.jsx)(Kd,{$chevron:!0,$down:!0,onClick:()=>x(d),title:v(`next_match_enter`),type:`button`,children:(0,J.jsx)(yi,{size:12})})]}),(0,J.jsx)(qd,{$on:n,onClick:()=>x(f),title:v(`match_case`),type:`button`,children:`Aa`}),(0,J.jsx)(qd,{$on:r,onClick:()=>x(m),title:v(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,J.jsx)(Jd,{$on:t===`hide`,onClick:()=>x(h),title:v(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,J.jsx)(Ai,{size:12}):(0,J.jsx)(ki,{size:12})}),(0,J.jsx)(Kd,{onClick:g,title:v(`close_search_esc`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]})}var Ud=n.div`
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
    box-shadow: var(--shadow-float);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-muted);
    ${eo}
`,Wd=n.input`
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
`,Gd=n.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Kd=n.button`
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
`,qd=n.button`
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
`,Jd=n(qd)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function Yd(e,t,n,r,i=[]){(0,R.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=yn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function Xd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=p(),a=(0,R.useRef)(null),o=(0,R.useRef)(null),[s,c]=(0,R.useState)(null);return(0,R.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,R.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,R.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Va.createPortal)((0,J.jsxs)(Zd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(As).map(n=>(0,J.jsx)(Qd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:As[n](16)},n)),(0,J.jsx)(Qd,{onClick:async()=>{let e=await Ta([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,J.jsx)(gi,{size:13})}),r&&(0,J.jsx)(Qd,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]}),document.body)]})}var Zd=n.div`
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
    box-shadow: var(--shadow-float);
    ${Qa}
    transform-origin: top left;
`,Qd=n.button`
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
`;function $d({source:e,poster:t,theme:n}){let r=O(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=hn(e.startsWith(`builtin:`)||r?null:e,0,i?`.${i}`:``),o=t??Vu(e,n)??(r?e:a),s=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return o?s?(0,J.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o}):(0,J.jsx)(`img`,{alt:``,src:o}):null}function ef({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=p(),s=(0,R.useRef)(null),c=(0,R.useRef)(null),l=(0,R.useRef)(!1),[u,d]=(0,R.useState)(null),[f,m]=(0,R.useState)(null),[h,g]=(0,R.useState)(0),_=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},v=f&&u?Math.min(f.height,n*(f.width/u.width)):0,y=Math.max(0,(f?.height??0)-v);(0,R.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,g(Math.min(y,Math.max(0,r*y))))},[f,u,y,r]),(0,R.useEffect)(()=>{let e=()=>_();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,R.useEffect)(()=>{let e=window.requestAnimationFrame(_);return()=>window.cancelAnimationFrame(e)},[e,t]);let b=e=>{c.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},x=e=>{let t=c.current;t&&g(Math.min(y,Math.max(0,t.top+e.clientY-t.y)))},S=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,J.jsx)(Sf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,J.jsxs)(Cf,{children:[(0,J.jsxs)(wf,{children:[(0,J.jsx)(`span`,{children:o(`adjust_banner_framing`)}),(0,J.jsx)(jf,{onClick:i,title:o(`cancel`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]}),(0,J.jsx)(Tf,{children:o(`drag_the_frame_to_choose_the_visible_part`)}),(0,J.jsxs)(Ef,{children:[t?(0,J.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{_(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,J.jsx)(`img`,{alt:``,draggable:!1,onLoad:_,ref:e=>{s.current=e},src:e}),v>0&&(0,J.jsx)(Df,{onPointerCancel:S,onPointerDown:b,onPointerMove:x,onPointerUp:S,style:{height:v,top:h},children:(0,J.jsx)(Of,{})})]}),(0,J.jsxs)(kf,{children:[(0,J.jsx)(Af,{onClick:i,type:`button`,children:o(`cancel`)}),(0,J.jsx)(Af,{$primary:!0,onClick:()=>a(y>0?h/y:r),type:`button`,children:o(`save`)})]})]})})}var tf=150,nf=120,rf=200,af=n.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,of=n.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,sf=n.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${rf}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${rf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(rf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(rf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(rf*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${rf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(rf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(rf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(rf*.18)}px),
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
`,cf=n.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${tf}px);
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
`,lf=n.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,uf=n.section`
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
`,df=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,ff=n.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,pf=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,mf=n.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,hf=n.input`
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
`,gf=n.button`
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
`,_f=n.div`
    position: relative;
    width: 132px;
    height: 72px;
`,vf=n.button`
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
`,yf=n.button`
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
`,bf=n.span`
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
`,xf=n.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Sf=n.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Cf=n.div`
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
`,wf=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Tf=n.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Ef=n.div`
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
`,Df=n.div`
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
`,Of=n.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,kf=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Af=n.button`
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
`,jf=n.button`
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
`,Mf=n.button`
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
`,Nf=n.div`
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
`,Pf=n.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Ff=n.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,If=n.button`
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
`,Lf=n.div`
    position: relative;
    display: inline-flex;
`,Rf=n.div`
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
    box-shadow: var(--shadow-float);
`,zf=n.button`
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
`,Bf=n.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Vf=n.section`
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
`,Hf=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Uf=n.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Wf=n.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Gf=n.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,Kf=n.input`
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
`,qf=n.button`
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
`,Jf=n.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Yf=n.div`
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
`,Xf=n.span`
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
`,Zf=n.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Qf=n.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,$f=n.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,ep=n.button`
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
`,tp=n.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,np=n.button`
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
`,rp=n.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,ip=n.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,ap=n.div`
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
`,op=n.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,sp=n.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,cp=n.button`
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
`,lp=n.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,up=n.button`
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
`,dp=n.button`
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
`,fp=n.button`
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
`,pp=n.span`
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
`,mp=n.button`
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
`,hp=n.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,gp=n.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,_p=n.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,vp=n.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,yp=n.input`
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
`,bp=n.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,xp=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Sp=n.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cp=n.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,wp=n.button`
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
`;function Tp({theme:e,places:t,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:o,onOpen:s,onPlacesChanged:l,onRecentCleared:u,onLayoutChanged:d,onHistoryChanged:f,onDrivesChanged:m,visibilityVersion:h=0,find:g,onSearchMatches:_,readOnly:v=!1,onPick:S,onSelectionChange:C,onAddToTray:w,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ee,onExtractArchive:D,settingsVersion:te=0}){let k=p(),A=Pn(),[j,ie]=(0,R.useState)(!1),[M,oe]=(0,R.useState)(null),P=M?.overviewBanner??null,se=P?.startsWith(`builtin:`)??!1,F=P?.startsWith(`url:`)?P.slice(4):O(P)?P:null,ce=se||F?``:P??``,le=se?``:F?F.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:ce.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,ue=se?Hu(P):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(le),de=hn(ce.length>0?ce:null,0,le?`.${le}`:``),I=P?Vu(P,e)??F??de:null,[fe,pe]=(0,R.useState)(``),[me,he]=(0,R.useState)(null),[L,ge]=(0,R.useState)(!1),[_e,ve]=(0,R.useState)(null),[ye,z]=(0,R.useState)(null),[be,Ce]=(0,R.useState)(null),[we,Te]=(0,R.useState)([]),[Ee,De]=(0,R.useState)(null),[Oe,ke]=(0,R.useState)(``),[B,je]=(0,R.useState)(null),[Me,V]=(0,R.useState)(null),Ne=el(`overview`),[Pe,Fe]=(0,R.useState)(null),[Ie,Le]=(0,R.useState)(null),H=(0,R.useRef)(null),Re=(0,R.useRef)(null),ze=(0,R.useRef)(null),Be=(0,R.useRef)(null),Ve=(0,R.useRef)(null),We=Ie??M?.overviewBannerHeight??220,[Ge,Ke]=(0,R.useState)(0),[qe,Ye]=(0,R.useState)(null),Xe=Math.min(1,Math.max(0,M?.overviewBannerOffset??.3)),Ze=We+rf,Qe=qe&&Ge>0?qe.height*(Ge/qe.width):Ze,$e=Qe>0&&Qe<Ze+240?(Ze+240)/Qe:1,et=Math.max(1,Math.round(Ge*$e)),tt=Math.max(0,Qe*$e-Ze),nt=Math.min(nf,tt/2,Math.max(20,We*.42)),it=nt+Xe*Math.max(0,tt-nt*2),[at,ot]=(0,R.useState)(!1),st=(e,t=!1)=>S?(je(e),V({path:e,isDirectory:t}),C?.([e]),!0):!1,ct=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),je(t),V({path:t,isDirectory:n}),Fe({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,R.useEffect)(()=>(qc(`overview`,Me?(e,t)=>Fe({x:e,y:t,target:Me}):null),()=>qc(`overview`,null)),[Me]);let lt=(e,t)=>s(e,t);(0,R.useEffect)(()=>{Je().then(oe,()=>oe(null))},[te]),(0,R.useEffect)(()=>{if(c.available)return Mc().then(Te,()=>void 0),c.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Te(t.data.peers)})},[]),(0,R.useEffect)(()=>{let e=ze.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,R.useEffect)(()=>{if(se&&!ue){Ye({width:1920,height:1080});return}Ye(null);let e=Ve.current;e?.complete&&e.naturalWidth>0&&Ye({width:e.naturalWidth,height:e.naturalHeight})},[P,se,ue]),(0,R.useEffect)(()=>{let e=Be.current;if(!e)return;let t=()=>Ke(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[M?.overviewBanner]),(0,R.useEffect)(()=>{if(!me)return;let e=()=>he(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||he(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[me]),(0,R.useEffect)(()=>{if(!L)return;let e=()=>ge(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[L]);let ut=Ms(M),dt=ut.map(e=>e.id),U=(0,R.useRef)(null),ft=e=>me?.kind===`panel`&&me.id===e,pt=e=>me?.kind===`place`&&me.id===e;(0,R.useEffect)(()=>{if(!c.available)return;let e=ut.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return c.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>c.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[ut.map(e=>e.path??e.id).join(`|`),a]),Yd(U,g??null,`section`,_??(()=>void 0),[r.length,t.length,n.length,h]);let ht=async(e,t)=>{let n={...M?.placeIcons};t?n[e]=t:delete n[e],he(null),await bt({placeIcons:n}),l(await Ae())},gt=async(e,t)=>{let n={...M?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],z(null),await bt({placeNames:n}),l(await Ae())},_t=e=>{Ce(null),ve({drive:e,label:e.label||`Local Disk`})},vt=async()=>{if(!_e)return;let{drive:e,label:t}=_e;ve(null);let n=await xe(e.name,t.trim());n.ok?(Ce(null),m?.()):Ce(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},yt=M?.overviewColumns??1,bt=async e=>{if(!M)return;let t={...M,...e,overviewPanels:e.overviewPanels??dt,overviewHidden:[]};oe(await rt(t)),d?.()},xt=async()=>{await bt({overviewPanels:[...Ds],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),l(await Ae()),ie(!1)},St=async()=>{let e=await Ta([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=M?.overviewBanners??[];await bt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},Ct=async()=>{let e=fe.trim();if(!M||!O(e))return;let t=M.overviewBanners??[];pe(``),await bt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},wt=()=>void bt({overviewBanner:null}),Tt=e=>void bt({overviewBanners:(M?.overviewBanners??[]).filter(t=>t!==e),...M?.overviewBanner===e||M?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Et=e=>{H.current={y:e.clientY,height:We},e.currentTarget.setPointerCapture(e.pointerId)},Dt=e=>{let t=H.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Re.current=n,Le(n)},Ot=e=>{H.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Re.current!==null&&(bt({overviewBannerHeight:Re.current}),Re.current=null)},kt=(e,t)=>{let n=dt.indexOf(e),r=n+t;if(n<0||r<0||r>=dt.length)return;let i=[...dt];[i[n],i[r]]=[i[r],i[n]],bt({overviewPanels:i})},At=(e,t)=>{let n={...M?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],bt({overviewTitles:n})},jt=(e,t)=>void bt({overviewViews:{...M?.overviewViews,[e]:t}}),Mt=e=>{let t=M?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);bt({overviewPinned:ut.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Nt=e=>{he(null);let t=t=>{let n={...t};return delete n[e],n},n=M?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);bt({overviewPanels:dt.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(M?.overviewTitles),overviewViews:t(M?.overviewViews),overviewIcons:t(M?.overviewIcons),panelPlaces:t(M?.panelPlaces)})},Pt=(e,t)=>{let n={...M?.overviewIcons};t?n[e]=t:delete n[e],he(null),bt({overviewIcons:n})},Ft=async e=>{if(!M)return;if(e===`folder`){let e=await wa();if(!e)return;let t=`folder:${e}`;dt.includes(t)||await bt({overviewPanels:[...dt,t]});return}if(e===`quick`){let e=2;for(;dt.includes(`quick:${e}`);)e+=1;await bt({overviewPanels:[...dt,`quick:${e}`]});return}let t=e;for(let n=2;dt.includes(t);n+=1)t=`${e}:${n}`;await bt({overviewPanels:[...dt,t]})},It=async e=>{let n=await wa();if(!n)return;if(e.id===`quick`){await bt({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),l(await Ae());return}let r=e.places??[];r.some(e=>N(e,n))||await bt({panelPlaces:{...M?.panelPlaces,[e.id]:[...r,n]}})},Lt=async(e,n)=>{he(null),e.id===`quick`?(await bt({quickAccess:t.filter(e=>!N(e.path,n)).map(e=>e.path)}),l(await Ae())):await bt({panelPlaces:{...M?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!N(e,n))}})},Rt=async(e,n,r)=>{if(N(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>N(e,n)),o=i.findIndex(e=>N(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await bt({quickAccess:s}),l(await Ae())):await bt({panelPlaces:{...M?.panelPlaces,[e.id]:s}})},zt=(e,t)=>({draggable:j,onDragOver:e=>{j&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{j&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{j&&(n.preventDefault(),Rt(e,n.dataTransfer.getData(`text/plain`),t))}}),Bt=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>N(t.path,e));return{name:M?.placeNames?.[e]??n?.name??(y(e)||e),path:e,kind:`folder`,icon:n?.icon??M?.placeIcons?.[e]??null}}),Ht=e=>{if(r.length===0)return(0,J.jsx)(gp,{children:k(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,i);return e.view===`grid`?(0,J.jsx)(Jf,{children:t.map(e=>{let t=Fn(A,e.path);return(0,J.jsxs)(Yf,{$plain:!1,$selected:B===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?s(e.path,Wt(t)):Se(e.path))},onDoubleClick:()=>S?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,children:[(0,J.jsx)(Xf,{children:t&&A.useIcons?(0,J.jsx)(Fs,{place:t,size:18}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(Qf,{children:e.path})]})]},e.path)})}):(0,J.jsx)($f,{children:t.map(e=>{let t=Fn(A,e.path);return(0,J.jsxs)(ep,{$selected:B===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?s(e.path,Wt(t)):Se(e.path))},onDoubleClick:()=>S?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&A.useIcons?(0,J.jsx)(Fs,{place:t,size:15}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(Qf,{children:e.path})]})]},e.path)})})},Ut=e=>{let t=M?.favorites??[],n=async e=>{await bt({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>N(t.path,e))&&await bt({favorites:[...t,{path:e,name:y(e)||e,isDirectory:n}]})},i=(e,t,n)=>{j||st(t,n)||(n?s(t,Wt(e)):Se(t))},a=j?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(np,{$row:e.view===`list`,onClick:()=>void Ta().then(e=>r(e,!1)),title:k(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,J.jsx)(gi,{size:15}):(0,J.jsx)(Xf,{children:(0,J.jsx)(gi,{size:15})}),e.view===`list`?(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:k(`add_file`)}),(0,J.jsx)(Qf,{children:k(`pin_any_file_here`)})]}):(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:k(`add_file`)}),(0,J.jsx)(Qf,{children:k(`pin_any_file_here`)})]})]}),(0,J.jsxs)(np,{$row:e.view===`list`,onClick:()=>void wa().then(e=>r(e,!0)),title:k(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,J.jsx)(gi,{size:15}):(0,J.jsx)(Xf,{children:(0,J.jsx)(gi,{size:15})}),e.view===`list`?(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:k(`add_folder`)}),(0,J.jsx)(Qf,{children:k(`pin_any_folder_here`)})]}):(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:k(`add_folder`)}),(0,J.jsx)(Qf,{children:k(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!j?(0,J.jsx)(gp,{children:k(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,J.jsxs)(Jf,{children:[t.map(e=>{let t=Fn(A,e.path);return(0,J.jsxs)(Yf,{$plain:j,$selected:B===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!j&&S?.(e.path),onContextMenu:t=>!j&&ct(t,e.path,e.isDirectory),title:e.path,children:[j&&(0,J.jsx)(dp,{onClick:t=>{t.stopPropagation(),n(e.path)},title:k(`remove_from_favorites`),type:`button`,children:(0,J.jsx)(Oi,{size:11})}),(0,J.jsx)(Xf,{children:t&&A.useIcons?(0,J.jsx)(Fs,{place:t,size:18}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(Qf,{children:e.path})]})]},e.path)}),a]}):(0,J.jsxs)($f,{children:[t.map(e=>{let t=Fn(A,e.path);return(0,J.jsxs)(ep,{$selected:B===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!j&&S?.(e.path),onContextMenu:t=>!j&&ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&A.useIcons?(0,J.jsx)(Fs,{place:t,size:15}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(Qf,{children:e.path})]}),j&&(0,J.jsx)(dp,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:k(`remove_from_favorites`),type:`button`,children:(0,J.jsx)(Oi,{size:11})})]},e.path)}),a]})},Gt=e=>{if(n.length===0)return(0,J.jsx)(gp,{children:k(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=_e?.drive.name===t.name,i=r?(0,J.jsx)(Ep,{maxLength:32,onCancel:()=>ve(null),onChange:e=>ve({..._e,label:e}),onCommit:()=>void vt(),value:_e?.label??``}):(0,J.jsx)(J.Fragment,{children:re(t)}),a=!r&&j&&(0,J.jsx)(fp,{onClick:e=>{e.stopPropagation(),_t(t)},title:k(`rename_volume`),type:`button`,children:(0,J.jsx)(qi,{size:11})}),o=(0,J.jsx)(Qf,{children:k(`free_free_of_total`,{free:x(t.freeSpace),total:x(t.totalSize)})});return e.view===`grid`?(0,J.jsxs)(Yf,{$plain:!1,$selected:B===t.name,onClick:e=>{!r&&st(t.name,!0)||r||s(t.name,Wt(e))},onDoubleClick:()=>!r&&S?.(t.name),onContextMenu:e=>!r&&ct(e,t.name,!0),title:t.name,children:[(0,J.jsx)(Xf,{children:(0,J.jsx)(fi,{size:18})}),(0,J.jsxs)(Zf,{children:[(0,J.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]})]},t.name):(0,J.jsxs)(ep,{as:r?`div`:`button`,$selected:B===t.name,onClick:r?void 0:e=>{st(t.name,!0)||s(t.name,Wt(e))},onDoubleClick:r?void 0:()=>S?.(t.name),onContextMenu:r?void 0:e=>ct(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,J.jsx)(fi,{size:18}),(0,J.jsxs)(tp,{children:[(0,J.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]}),(0,J.jsx)(rp,{children:(0,J.jsx)(ip,{$used:n,$tone:b(n)})})]},t.name)});return e.view===`grid`?(0,J.jsx)(Jf,{children:t}):(0,J.jsx)($f,{children:t})},Kt=()=>{let e=async e=>{De(e.id);try{await Nc(e.host,e.port)}finally{De(null)}},t=async()=>{let e=Oe.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){De(`manual`);try{await Nc(n,r)}finally{De(null)}}};return(0,J.jsxs)(_p,{children:[(0,J.jsxs)(vp,{children:[(0,J.jsx)(yp,{onChange:e=>ke(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:k(`address_e_g_192_168_1_20_45701`),value:Oe}),(0,J.jsx)(wp,{disabled:Ee!==null||!Oe.includes(`:`),onClick:()=>void t(),type:`button`,children:k(Ee===`manual`?`pairing`:`pair_by_address`)})]}),we.length===0&&(0,J.jsx)(gp,{children:k(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),we.map(t=>(0,J.jsxs)(bp,{children:[(0,J.jsxs)(xp,{children:[(0,J.jsx)(sa,{size:14}),(0,J.jsx)(Sp,{title:t.host,children:t.name}),(0,J.jsx)(Cp,{$online:t.online,children:t.paired?t.online?k(`paired`):k(`offline`):k(`not_paired`)}),!t.paired&&t.online&&(0,J.jsx)(wp,{disabled:Ee===t.id,onClick:()=>void e(t),type:`button`,children:Ee===t.id?k(`pairing`):k(`pair`)})]}),t.paired&&t.shares.length===0&&(0,J.jsx)(Qf,{children:k(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,J.jsxs)(ep,{onClick:n=>s(zc(t.id,e.id),Wt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,J.jsx)(sa,{size:14}),(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:e.name}),(0,J.jsx)(Qf,{children:t.name})]}),(0,J.jsx)(la,{size:12})]},e.id))]},t.id))]})},qt=e=>{switch(e.kind){case`share`:return Kt();case`favorites`:return Ut(e);case`quick`:{let t=Bt(e);return!j&&t.length===0?(0,J.jsx)(gp,{children:k(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,J.jsxs)(Jf,{children:[t.map(t=>(0,J.jsxs)(Yf,{$plain:j,$selected:B===t.path,...zt(e,t.path),onClick:e=>{!j&&!st(t.path,!0)&&s(t.path,Wt(e))},onDoubleClick:()=>!j&&S?.(t.path),onContextMenu:e=>!j&&ct(e,t.path,!0),title:t.path,children:[j&&(0,J.jsx)(dp,{onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:k(`remove_from_quick_access`),type:`button`,children:(0,J.jsx)(Oi,{size:11})}),(0,J.jsxs)(lp,{children:[j?(0,J.jsx)(up,{onClick:e=>{e.stopPropagation(),he(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:k(`change_icon`),type:`button`,children:(0,J.jsx)(Xf,{children:(0,J.jsx)(Fs,{place:t})})}):(0,J.jsx)(Xf,{children:(0,J.jsx)(Fs,{place:t})}),pt(t.path)&&(0,J.jsx)(Xd,{onPick:e=>void ht(t.path,e),value:M?.placeIcons?.[t.path]??t.icon})]}),(0,J.jsxs)(Zf,{children:[ye?.path===t.path?(0,J.jsx)(`strong`,{children:(0,J.jsx)(Ep,{onCancel:()=>z(null),onChange:e=>z({path:t.path,name:e}),onCommit:()=>void gt(t.path,ye?.name??``),value:ye?.name??``})}):(0,J.jsxs)(`strong`,{children:[t.name,j&&(0,J.jsx)(fp,{onClick:e=>{e.stopPropagation(),he(null),z({path:t.path,name:t.name})},title:k(`rename_folder`),type:`button`,children:(0,J.jsx)(qi,{size:11})})]}),(0,J.jsx)(Qf,{children:t.path})]})]},t.path)),j&&(0,J.jsxs)(np,{onClick:()=>void It(e),title:k(`pin_a_folder_here`),type:`button`,children:[(0,J.jsx)(Xf,{children:(0,J.jsx)(gi,{size:15})}),(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:k(`add_folder`)}),(0,J.jsx)(Qf,{children:k(`pin_a_directory_here`)})]})]})]}):(0,J.jsxs)($f,{children:[t.map(t=>(0,J.jsxs)(ep,{$selected:B===t.path,...zt(e,t.path),onClick:e=>{!j&&!st(t.path,!0)&&s(t.path,Wt(e))},onDoubleClick:()=>!j&&S?.(t.path),onContextMenu:e=>!j&&ct(e,t.path,!0),title:t.path,type:`button`,children:[(0,J.jsxs)(lp,{children:[j?(0,J.jsx)(up,{onClick:e=>{e.stopPropagation(),he(pt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:k(`change_icon`),type:`button`,children:(0,J.jsx)(Fs,{place:t,size:15})}):(0,J.jsx)(Fs,{place:t,size:15}),pt(t.path)&&(0,J.jsx)(Xd,{onPick:e=>void ht(t.path,e),value:M?.placeIcons?.[t.path]??t.icon})]}),(0,J.jsxs)(tp,{children:[ye?.path===t.path?(0,J.jsx)(`strong`,{children:(0,J.jsx)(Ep,{onCancel:()=>z(null),onChange:e=>z({path:t.path,name:e}),onCommit:()=>void gt(t.path,ye?.name??``),value:ye?.name??``})}):(0,J.jsxs)(`strong`,{children:[t.name,j&&(0,J.jsx)(fp,{onClick:e=>{e.stopPropagation(),he(null),z({path:t.path,name:t.name})},title:k(`rename_folder`),type:`button`,children:(0,J.jsx)(qi,{size:11})})]}),(0,J.jsx)(Qf,{children:t.path})]}),j&&(0,J.jsx)(dp,{$inline:!0,onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:k(`remove_from_quick_access`),type:`button`,children:(0,J.jsx)(Oi,{size:11})})]},t.path)),j&&(0,J.jsxs)(np,{$row:!0,onClick:()=>void It(e),title:k(`pin_a_folder_here`),type:`button`,children:[(0,J.jsx)(gi,{size:15}),(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:k(`add_folder`)}),(0,J.jsx)(Qf,{children:k(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,J.jsx)(Dp,{mode:e.view,onContextMenu:ct,onOpen:s,onPick:S,onSelectionChange:C,version:o});case`recent`:return Ht(e);case`drives`:return Gt(e);default:return(0,J.jsx)(Op,{mode:e.view,onContextMenu:ct,onOpen:s,onPick:S,onSelectionChange:C,openOnSingleClick:M?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:M?.showCheckboxes??!0,visibilityVersion:h})}};return(0,J.jsxs)(af,{$flush:!!M?.overviewBanner,ref:ze,children:[!v&&(0,J.jsxs)(Nf,{$overlay:!!M?.overviewBanner,children:[(0,J.jsx)(Pf,{role:`group`,title:k(`columns`),children:[1,2,3,4,5].map(e=>(0,J.jsx)(Ff,{$active:yt===e,onClick:()=>void bt({overviewColumns:e}),title:ae(k,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),j&&(0,J.jsxs)(Lf,{children:[(0,J.jsxs)(If,{onClick:()=>ge(e=>!e),onPointerDown:e=>e.stopPropagation(),title:k(`add_a_panel`),type:`button`,children:[(0,J.jsx)(gi,{size:12}),k(`add_panel`)]}),L&&(0,J.jsx)(Rf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,J.jsx)(zf,{onClick:()=>{ge(!1),Ft(e)},type:`button`,children:k(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),j&&(0,J.jsxs)(If,{onClick:()=>void xt(),title:k(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,J.jsx)(hi,{size:12}),k(`restore_default_panels`)]}),Ne.available&&(0,J.jsx)(qf,{onClick:e=>Ne.open(e.clientX,e.clientY),title:k(`selection_menu`),type:`button`,children:(0,J.jsx)(ba,{size:14})}),(0,J.jsxs)(If,{onClick:()=>{ie(e=>!e),ge(!1),he(null),z(null),ve(null)},title:k(j?`done`:`edit`),type:`button`,children:[j?(0,J.jsx)(Di,{size:13}):(0,J.jsx)(qi,{size:13}),k(j?`done`:`edit`)]})]}),be&&(0,J.jsx)(hp,{children:be}),M?.overviewBanner&&(0,J.jsxs)(of,{ref:Be,style:{height:`${We}px`,"--banner-image-width":`${et}px`,"--banner-image-shift":`${it}px`,"--banner-travel":`${nt}px`,"--banner-overlap":`0px`},children:[(0,J.jsx)(sf,{children:ue?(0,J.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Ye({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:I??void 0}):(0,J.jsx)(`img`,{alt:``,onLoad:e=>{let t=se?1920:e.currentTarget.naturalWidth||1920,n=se?1080:e.currentTarget.naturalHeight||1080;Ye({width:t,height:n})},ref:Ve,src:I??void 0})}),j&&(0,J.jsx)(cf,{onDoubleClick:()=>{Re.current=null,Le(null),bt({overviewBannerHeight:220})},onPointerCancel:Ot,onPointerDown:Et,onPointerMove:Dt,onPointerUp:Ot,title:k(`drag_to_resize_double_click_to_reset`)})]}),(0,J.jsxs)(lf,{$offset:M?.overviewBanner?100:0,children:[j&&(0,J.jsxs)(uf,{children:[(0,J.jsxs)(df,{children:[(0,J.jsx)(ff,{children:k(`banners`)}),M?.overviewBanner&&(0,J.jsxs)(If,{onClick:()=>ot(!0),title:k(`adjust_framing`),type:`button`,children:[(0,J.jsx)(qi,{size:12}),k(`adjust_framing`)]})]}),(0,J.jsxs)(pf,{children:[(0,J.jsx)(_f,{children:(0,J.jsx)(vf,{$active:!M?.overviewBanner,onClick:wt,title:k(`no_banner`),type:`button`,children:(0,J.jsxs)(xf,{children:[(0,J.jsx)(Oi,{size:16}),(0,J.jsx)(`span`,{children:k(`no_banner`)})]})})}),Ru.map(t=>(0,J.jsx)(_f,{children:(0,J.jsx)(vf,{$active:M?.overviewBanner===t.id,onClick:()=>void bt({overviewBanner:t.id}),title:`${k(t.concept)} · ${k(t.preset)}`,type:`button`,children:(0,J.jsx)($d,{source:t.id,theme:e})})},t.id)),Iu.map(t=>(0,J.jsx)(_f,{children:(0,J.jsxs)(vf,{$active:M?.overviewBanner===t.id,onClick:()=>void bt({overviewBanner:t.id}),title:k(t.name),type:`button`,children:[(0,J.jsx)($d,{poster:t.poster,source:t.id,theme:e}),(0,J.jsx)(bf,{children:(0,J.jsx)(Fi,{size:11})})]})},t.id)),(M?.overviewBanners??[]).map(t=>(0,J.jsxs)(_f,{children:[(0,J.jsx)(vf,{$active:M?.overviewBanner===t||M?.overviewBanner===`url:${t}`,onClick:()=>void bt({overviewBanner:O(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,J.jsx)($d,{source:t,theme:e})}),(0,J.jsx)(yf,{onClick:()=>Tt(t),title:k(`remove`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]},t)),(0,J.jsxs)(Mf,{onClick:()=>void St(),title:k(`add_banner`),type:`button`,children:[(0,J.jsx)(gi,{size:18}),(0,J.jsx)(`span`,{children:k(`add_banner`)})]})]}),(0,J.jsxs)(mf,{children:[(0,J.jsx)(hf,{onChange:e=>pe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ct()},placeholder:`https://…`,value:fe}),(0,J.jsx)(gf,{disabled:!O(fe),onClick:()=>void Ct(),type:`button`,children:k(`add_url`)})]})]}),(0,J.jsx)(Bf,{ref:U,$columns:yt,children:ut.map(e=>{let t=dt.indexOf(e.id);return(0,J.jsxs)(Vf,{children:[(0,J.jsxs)(Hf,{children:[(0,J.jsxs)(Uf,{children:[(0,J.jsxs)(lp,{children:[j?(0,J.jsx)(up,{onClick:()=>he(ft(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:k(`change_icon`),type:`button`,children:(0,J.jsx)(Ps,{panel:e,size:15})}):(0,J.jsx)(Ps,{panel:e,size:15}),ft(e.id)&&(0,J.jsx)(Xd,{onPick:t=>Pt(e.id,t),value:e.icon})]}),j?(0,J.jsx)(Kf,{defaultValue:e.title,onBlur:t=>At(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,J.jsx)(Gf,{children:k(e.title)})]}),(0,J.jsxs)(Wf,{children:[!j&&e.kind===`recent`&&(0,J.jsx)(If,{onClick:()=>void He().then(u),title:k(`clear`),type:`button`,children:k(`clear`)}),!j&&e.kind===`frequent`&&(0,J.jsx)(If,{onClick:()=>void Ue().then(()=>f?.()),title:k(`clear_the_frequent_list`),type:`button`,children:k(`clear`)}),!j&&(e.kind===`home`||e.kind===`folder`)&&(0,J.jsx)(If,{onClick:()=>s(e.path??a),title:k(`open_folder`),type:`button`,children:k(`open`)}),j&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(qf,{$active:e.pinned,onClick:()=>Mt(e.id),title:e.pinned?k(`unpin_from_the_sidebar`):k(`pin_to_the_sidebar`),type:`button`,children:(0,J.jsx)(xi,{size:12})}),(0,J.jsx)(qf,{$active:e.view===`list`,onClick:()=>jt(e.id,`list`),title:k(`list`),type:`button`,children:(0,J.jsx)(Si,{size:13})}),(0,J.jsx)(qf,{$active:e.view===`grid`,onClick:()=>jt(e.id,`grid`),title:k(`grid`),type:`button`,children:(0,J.jsx)(Ci,{size:13})}),(0,J.jsx)(qf,{disabled:t===0,onClick:()=>kt(e.id,-1),title:k(`move_up`),type:`button`,children:(0,J.jsx)(mi,{size:12})}),(0,J.jsx)(qf,{disabled:t===dt.length-1,onClick:()=>kt(e.id,1),title:k(`move_down`),type:`button`,children:(0,J.jsx)(mi,{size:12})}),(0,J.jsx)(qf,{onClick:()=>Nt(e.id),title:k(`remove_panel`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?qt(e):(0,J.jsx)(op,{children:qt(e)})]},e.id)})})]}),at&&I&&(0,J.jsx)(ef,{height:We,offset:Xe,onCancel:()=>ot(!1),onSave:e=>{bt({overviewBannerOffset:e}),ot(!1)},source:I,video:ue}),Pe&&(0,J.jsx)(_o,{directory:a,menu:{x:Pe.x,y:Pe.y,paths:[Pe.target.path]},onClose:()=>Fe(null),onCopy:(e,t)=>void mt(e,t),onAddToTray:w,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ee,onExtractArchive:D,onOpen:lt,onOpenFile:e=>S?S(e):void Se(e),shortcuts:Vt,target:Pe.target})]})}function Ep({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=p();return(0,J.jsxs)(pp,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,J.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,J.jsx)(mp,{onClick:r,title:a(`cancel`),type:`button`,children:(0,J.jsx)(Oi,{size:11})}),(0,J.jsx)(mp,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,J.jsx)(Di,{size:12})})]})}function Dp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let o=p(),[s,c]=(0,R.useState)(null),[l,u]=(0,R.useState)(null),d=Pn(),f=e=>r?(u(e),i?.([e]),!0):!1;if((0,R.useEffect)(()=>{Be().then(c,()=>c([]))},[a]),!s)return(0,J.jsx)(gp,{children:o(`reading`)});if(s.length===0)return(0,J.jsx)(gp,{children:o(`folders_you_open_often_show_up_here`)});let m=e=>ae(o,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,J.jsx)(Jf,{children:s.map(e=>{let i=Fn(d,e.path);return(0,J.jsxs)(Yf,{$plain:!1,$selected:l===e.path,onClick:n=>{f(e.path)||t(e.path,Wt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,J.jsx)(Xf,{children:i&&d.useIcons?(0,J.jsx)(Fs,{place:i,size:18}):(0,J.jsx)($s,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:i?.name||e.name}),(0,J.jsx)(Qf,{children:m(e)})]})]},e.path)})}):(0,J.jsx)($f,{children:s.map(e=>{let i=Fn(d,e.path);return(0,J.jsxs)(ep,{$selected:l===e.path,onClick:n=>{f(e.path)||t(e.path,Wt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&d.useIcons?(0,J.jsx)(Fs,{place:i,size:15}):(0,J.jsx)($s,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:i?.name||e.name}),(0,J.jsx)(Qf,{children:m(e)})]})]},e.path)})})}function Op({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:o,showCheckboxes:s,openOnSingleClick:l,visibilityVersion:u}){let d=p(),[f,m]=(0,R.useState)(null),[h,g]=(0,R.useState)(null),_=Pn();return(0,R.useEffect)(()=>{e&&(m(null),Ce(e).then(m,()=>m(null)))},[e,u]),(0,R.useEffect)(()=>{if(c.available)return c.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&N(n.data.path,e)&&Ce(e,!1).then(m,()=>void 0)})},[e]),f?t===`list`?(0,J.jsx)(ap,{children:(0,J.jsx)(fl,{error:null,listing:f,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void Se(e)),onRefresh:()=>void Ce(e,!1).then(m,()=>void 0),onRename:(e,t)=>m(n=>n&&{...n,entries:n.entries.map(n=>N(n.fullPath,e)?{...n,name:y(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:o,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:s,showDetails:!1,showImages:!1,view:{...z,columns:be.columns??[]}})}):(0,J.jsx)(op,{children:f.entries.length===0?(0,J.jsx)(gp,{children:d(`this_folder_is_empty`)}):(0,J.jsx)(sp,{children:f.entries.map(e=>{let t=Fn(_,e.fullPath);return(0,J.jsxs)(cp,{$selected:h===e.fullPath,onClick:t=>{i?(g(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Wt(t)):Se(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&_.useIcons?(0,J.jsx)(Fs,{place:t,size:16}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,J.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,J.jsx)(gp,{children:d(`reading`)})}var kp=`yafm://`,Ap={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function jp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Mp(e){return`${kp}${e===`home`?`overview`:e}`}function Np(e){return jp(e)?Ap[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Pp(e){let t=e.trim();if(t.length===0)return null;if(!jp(t))return t;let n=Ap[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Mp(n):null}function Fp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=p(),s=Pn(),[c,l]=(0,R.useState)(!1),[u,d]=(0,R.useState)(``),[f,m]=(0,R.useState)([]),[h,g]=(0,R.useState)(0),[_,v]=(0,R.useState)(null),[y,b]=(0,R.useState)(null),[x,S]=(0,R.useState)(null),C=(0,R.useRef)(null),w=(0,R.useRef)(null),T=(0,R.useRef)(0);(0,R.useEffect)(()=>{if(!Lc(e)){S(null);return}let t=Rc(e);if(!t){S(null);return}let n=!0;return jc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);S({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&S(null)),()=>{n=!1}},[e]),(0,R.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,R.useEffect)(()=>{r&&r!==T.current&&(T.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,R.useEffect)(()=>{c&&C.current?.select()},[c]),(0,R.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let E=()=>{d(e.replace(/\\/g,`/`)),l(!0)},ee=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,R.useEffect)(()=>{if(!c){m([]);return}let e=zp(u);if(!e){m([]);return}let t=!1,n=window.setTimeout(()=>{Ce(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));m(i),g(0)},()=>{t||m([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let D=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,R.useLayoutEffect)(()=>{if(!c){v(null);return}let e=()=>{let e=w.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);v({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,J.jsxs)(Gp,{onPointerDown:e=>e.stopPropagation(),ref:w,children:[(0,J.jsxs)(Yp,{children:[(0,J.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),g(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),g(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(h,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?D(f[Math.min(h,f.length-1)],e.ctrlKey||e.metaKey):ee(e):e.key===`Escape`&&(f.length>0?m([]):l(!1))},ref:C,spellCheck:!1,value:u}),(0,J.jsx)(Xp,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,J.jsx)(Oi,{size:12})}),(0,J.jsx)(Xp,{$apply:!0,onClick:ee,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,J.jsx)(Di,{size:14})})]}),f.length>0&&_&&(0,Va.createPortal)((0,J.jsx)(Kp,{onPointerDown:e=>e.stopPropagation(),style:{left:_.left,top:_.top,width:_.width},children:f.map((e,t)=>(0,J.jsxs)(qp,{$active:t===h,onClick:t=>D(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>g(t),type:`button`,children:[(0,J.jsx)($s,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,J.jsx)(Jp,{children:e.name})]},e.path))}),document.body)]});let te=t?[{label:t,path:e,icon:n}]:Ip(e,x)??Rp(e,s.places);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Bp,{onClick:E,title:o(`click_to_type_a_path`),children:te.map((t,n)=>(0,J.jsxs)(Vp,{$last:n===te.length-1,children:[n>0&&(0,J.jsx)(Up,{children:(0,J.jsx)(yi,{size:9})}),(0,J.jsxs)(Wp,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):b({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,J.jsx)(Hp,{children:(0,J.jsx)(Fs,{place:t.place,size:13})}):t.icon&&(0,J.jsx)(Hp,{children:t.icon}),t.label]})]},t.path))}),y&&(0,J.jsx)(io,{items:[{label:o(`open`),icon:(0,J.jsx)(vi,{size:14}),onSelect:()=>i(y.path)},{label:o(`open_in_new_tab`),icon:(0,J.jsx)(gi,{size:14}),onSelect:()=>i(y.path,!0)},{label:o(`copy_as_path`),icon:(0,J.jsx)(pa,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(y.path)},...jp(y.path)?[{label:o(`open_with`),icon:(0,J.jsx)(zi,{size:14}),onSelect:()=>void kt(y.path)},{label:o(`properties`),icon:(0,J.jsx)(bi,{size:14}),onSelect:()=>void Ot([y.path])}]:[]],onClose:()=>b(null),x:y.x,y:y.y})]})}function Ip(e,t){let n=Rc(e);if(!n)return null;let r=zc(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,J.jsx)(sa,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Lp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Rp(e,t){let n=Lp(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>N(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function zp(e){if(jp(e)||Lc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Bp=n.div`
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
`,Vp=n.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Hp=n.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Up=n.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Wp=n.button`
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
`,Gp=n.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,Kp=n.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Ha}
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
`,qp=n.button`
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
`,Jp=n.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yp=n.div`
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
`,Xp=n.button`
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
`,Zp=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,J.jsx)(`path`,{d:`M4 4v6h6`})]});function Qp({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,showDetails:i=!0,onShowDetails:a,videoAudio:o=!1,videoAutoplay:s=!1,platform:c}){let l=p(),u=Qc(`recycle`),d=c===`windows`,[f,m]=(0,R.useState)([]),[h,g]=(0,R.useState)([]),[_,v]=(0,R.useState)(!1),[y,b]=(0,R.useState)(null),[S,C]=(0,R.useState)(!0),[w,T]=(0,R.useState)(!1),[E,ee]=(0,R.useState)(null),[D,te]=(0,R.useState)(!1),[O,k]=(0,R.useState)(()=>new Set),[ne,A]=(0,R.useState)(null),[j,re]=(0,R.useState)(()=>{let e=qn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[M,oe]=(0,R.useState)(null),[N,P]=(0,R.useState)(null),[se,F]=(0,R.useState)(()=>{let e=Gn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),ce=(0,R.useRef)(null),le=e=>{F(e),Kn(`yafm.recycle.preview.width`,e)},ue=(0,R.useCallback)(async()=>{C(!0),ee(null);try{m(await Me(D))}catch(e){ee(e instanceof Error?e.message:String(e))}finally{C(!1)}},[D]),de=(0,R.useCallback)(async()=>{try{m(await Me(D))}catch{}},[D]);(0,R.useEffect)(()=>{ue()},[ue]),(0,R.useEffect)(()=>{let e=window.setInterval(()=>void de(),1e4);return()=>window.clearInterval(e)},[de]),(0,R.useEffect)(()=>{D||(g([]),v(!1),b(null))},[D]),(0,R.useEffect)(()=>{k(e=>{let t=new Set(f.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[f]);let I=(0,R.useMemo)(()=>{let e=new Set(f.map(e=>e.id));return[...f,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=$p(e,t,j.column);return j.descending?-n:n})},[f,h,j]),fe=(0,R.useMemo)(()=>!t?.open||t.query.trim().length===0?I:I.filter(e=>En(e.name,t)||En(e.originalPath,t)),[I,t?.open,t?.query,t?.matchCase,t?.regex]),pe=t?.open&&t.query.trim().length>0?fe.length===0:I.length===0,me=(0,R.useRef)(null);Yd(me,t??null,`[data-search-block]`,n??(()=>void 0),[I]),(0,R.useEffect)(()=>{k(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,R.useEffect)(()=>{r&&k(new Set(fe.map(e=>e.id)))},[r]);let he=(0,R.useMemo)(()=>I.filter(e=>O.has(e.id)),[I,O]),L=he.filter(e=>e.removable&&!e.isOrphan),ge=he.filter(e=>e.removable),_e=(e,t)=>{let n=t.ctrlKey||t.metaKey;k(r=>{if(t.shiftKey&&ne){let t=I.findIndex(e=>e.id===ne),i=I.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(I[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),A(e.id)},ve=(0,R.useCallback)(()=>k(new Set(fe.map(e=>e.id))),[fe]),ye=fe.length>0&&fe.every(e=>O.has(e.id)),z=(0,R.useCallback)(async()=>{let e=L.map(e=>e.id);if(e.length!==0){T(!0);try{let t=await Pe(e);t.ok||await ka(ae(l,e.length,`restored_done_of_1_item`,`restored_done_of_total_items`,{done:t.done,total:e.length})),k(new Set),await ue()}finally{T(!1)}}},[ue,L,l]),be=(0,R.useCallback)(async()=>{let e=ge.map(e=>e.id);if(P(null),e.length!==0){T(!0);try{let t=await Fe(e);!t.ok&&!t.cancelled&&await ka(ae(l,e.length,`deleted_done_of_1_item`,`deleted_done_of_total_items`,{done:t.done,total:e.length})),k(new Set),await ue()}finally{T(!1)}}},[ge,ue,l]),xe=async()=>{P(null),T(!0);try{await Ne(D),k(new Set),await ue()}finally{T(!1)}},Se=async()=>{T(!0),b(null);try{let e=await Le();if(e.cancelled){b(`Elevation was declined — nothing was read.`);return}if(e.failed){b(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),v(!0)}finally{T(!1)}},Ce=async()=>{T(!0),P(null);try{await H(),g([]),v(!1),b(null),await ue()}finally{T(!1)}},we=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},Te=e=>{navigator.clipboard.writeText(e.originalPath)},Ee=(e,t)=>{e.preventDefault(),t&&!O.has(t.id)&&k(new Set([t.id])),oe({x:e.clientX,y:e.clientY})};(0,R.useEffect)(()=>(qc(`recycle`,O.size>0?(e,t)=>oe({x:e,y:t}):null),()=>qc(`recycle`,null)),[O]),(0,R.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ve()):e.key===`delete`?(e.preventDefault(),ge.length>0&&P(`delete`)):e.key===`Enter`&&L.length>0?(e.preventDefault(),z()):e.key===`Escape`&&(k(new Set),oe(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[ge.length,L.length,z,ve]);let De=[{label:l(`restore`),icon:(0,J.jsx)(Zp,{width:14,height:14}),disabled:L.length===0,onSelect:()=>void z()},{label:l(`delete_permanently`),icon:(0,J.jsx)(Ei,{size:14}),danger:!0,disabled:ge.length===0,onSelect:()=>P(`delete`)},{label:l(`properties`),icon:(0,J.jsx)(bi,{size:14}),disabled:he.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=he;e&&Ie(e.id)}},{label:l(`open_original_location`),icon:(0,J.jsx)(ui,{size:14}),disabled:he.length!==1,onSelect:()=>{let[e]=he;e&&we(e)}},{label:l(`copy_original_path`),icon:(0,J.jsx)(pa,{size:14}),disabled:he.length!==1,onSelect:()=>{let[e]=he;e&&Te(e)}},{label:l(`select_all`),separatorBefore:!0,onSelect:ve},{label:l(`refresh`),icon:(0,J.jsx)(hi,{size:14}),onSelect:()=>void ue()}],Oe=he.length>0?he[0]:null,ke=Oe?{name:Oe.name,path:Oe.contentPath||Oe.originalPath,isDirectory:Oe.isDirectory,size:Oe.size,modified:Oe.deleted,fields:[{label:l(`type`),value:l(tm(Oe))},{label:l(`original_location`),value:Oe.originalPath},{label:l(`date_deleted`),value:ie(Oe.deleted)},{label:l(`size`),value:Oe.isDirectory?`—`:x(Oe.size)},...Oe.owner?[{label:l(`owner`),value:Oe.owner}]:[],{label:l(`status`),value:Oe.isOrphan?l(`metadata_only`):Oe.removable?l(`restorable`):l(`other_profile`)}]}:null;return(0,J.jsxs)(rm,{ref:ce,onContextMenu:e=>Ee(e),children:[(0,J.jsxs)(im,{children:[(0,J.jsxs)(am,{children:[(0,J.jsx)(Ei,{size:16}),(0,J.jsx)(`span`,{children:l(`recycle_bin`)}),(0,J.jsxs)(om,{children:[S?`…`:ae(l,I.length,`k_1_item`,`count_items`),O.size>0&&` · ${l(`count_selected`,{count:O.size})}`]})]}),(0,J.jsxs)(sm,{children:[(0,J.jsx)(lm,{$on:D,onClick:()=>te(e=>!e),title:l(`show_metadata_records_whose_content_is_already_gone`),type:`button`,children:l(`orphans`)}),D&&d&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(cm,{disabled:w||_,onClick:()=>void Se(),title:l(_?`the_administrator_view_is_already_loaded`:`ask_for_administrator_rights_and_list_every_profile_s_leftovers`),type:`button`,children:l(w?`working`:_?`admin_view_loaded`:`show_all_admin`)}),_&&h.length>0&&(0,J.jsx)(cm,{disabled:w,onClick:()=>P(`purge`),type:`button`,children:l(`delete_every_orphan`)})]}),(0,J.jsx)(cm,{disabled:w||L.length===0,onClick:()=>void z(),type:`button`,children:l(`restore`)}),(0,J.jsx)(cm,{$danger:!0,disabled:w||ge.length===0,onClick:()=>P(`delete`),type:`button`,children:l(`delete`)}),(0,J.jsx)(cm,{disabled:w||I.length===0,onClick:()=>P(`empty`),type:`button`,children:l(`empty`)}),(0,J.jsx)(um,{onClick:()=>void ue(),title:l(`refresh`),type:`button`,children:(0,J.jsx)(hi,{size:14})}),u.available&&(0,J.jsx)(um,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`selection_menu`),type:`button`,children:(0,J.jsx)(ba,{size:14})})]})]}),y&&(0,J.jsx)(jm,{children:y}),E&&(0,J.jsx)(Mm,{children:E}),!E&&(0,J.jsxs)(Am,{children:[(0,J.jsxs)(dm,{ref:me,children:[(0,J.jsxs)(pm,{children:[(0,J.jsx)(ym,{$checked:ye,$partial:!ye&&O.size>0,onClick:()=>ye?k(new Set):ve(),title:l(ye?`select_none`:`select_all`),type:`button`,children:ye?(0,J.jsx)(Di,{size:9}):O.size>0&&(0,J.jsx)(bm,{})}),(0,J.jsxs)(mm,{onClick:()=>B(`name`),type:`button`,children:[l(`name`),em(j,`name`)]}),(0,J.jsxs)(mm,{onClick:()=>B(`original`),type:`button`,children:[l(`original_location`),em(j,`original`)]}),(0,J.jsxs)(mm,{onClick:()=>B(`deleted`),type:`button`,children:[l(`date_deleted`),em(j,`deleted`)]}),(0,J.jsxs)(mm,{onClick:()=>B(`size`),type:`button`,children:[l(`size`),em(j,`size`)]}),(0,J.jsxs)(mm,{onClick:()=>B(`type`),type:`button`,children:[l(`type`),em(j,`type`)]}),(0,J.jsx)(`span`,{})]}),(0,J.jsxs)(hm,{onClick:e=>{e.target===e.currentTarget&&k(new Set)},children:[!S&&pe&&(0,J.jsx)(Mm,{children:t?.open&&t.query.trim().length>0?l(`no_matching_items`):l(`the_recycle_bin_is_empty`)}),I.map(e=>(0,J.jsxs)(gm,{$checked:O.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>_e(e,t),onContextMenu:t=>Ee(t,e),onDoubleClick:()=>{k(new Set([e.id])),A(e.id),a?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,J.jsx)(vm,{$checked:O.has(e.id),children:O.has(e.id)&&(0,J.jsx)(Di,{size:9})}),(0,J.jsxs)(xm,{children:[(0,J.jsx)(nm,{entry:e}),(0,J.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,J.jsx)(km,{children:l(`metadata_only`)}),e.owner&&(0,J.jsx)(km,{$other:!0,children:l(`other_profile`)})]}),(0,J.jsx)(Cm,{children:e.originalPath}),(0,J.jsx)(wm,{children:ie(e.deleted)}),(0,J.jsx)(Tm,{children:e.isDirectory?`—`:x(e.size)}),(0,J.jsx)(Em,{children:l(tm(e))}),(0,J.jsxs)(Dm,{children:[e.removable&&!e.isOrphan&&(0,J.jsx)(Om,{onClick:t=>{t.stopPropagation(),Pe([e.id]).then(ue)},title:l(`restore_to_its_original_folder`),type:`button`,children:(0,J.jsx)(Zp,{})}),e.removable&&(0,J.jsx)(Om,{$danger:!0,onClick:t=>{t.stopPropagation(),k(new Set([e.id])),P(`delete`)},title:e.isOrphan?l(`remove_the_leftover_record`):l(`delete_permanently`),type:`button`,children:(0,J.jsx)(Ei,{size:13})})]})]},e.id))]})]}),i&&(0,J.jsx)(rs,{emptyNote:l(`nothing_selected`),info:ke,onWidth:le,selectionNote:he.length>1?ae(l,he.length,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:o,videoAutoplay:s,width:se})]}),M&&(0,J.jsx)(io,{items:De,onClose:()=>oe(null),x:M.x,y:M.y}),(0,J.jsx)(Ko,{confirmLabel:l(N===`empty`?`empty_the_bin`:N===`purge`?`delete_every_orphan`:`delete`),danger:!0,message:N===`empty`?ae(l,I.length,`permanently_delete_1_item_this_cannot_be_undone`,`permanently_delete_count_items_this_cannot_be_undone`):N===`purge`?l(`permanently_delete_every_leftover_record_including_the_ones_owned_by_other_profiles_this_cannot_be_undone`):ae(l,ge.length,`permanently_delete_1_selected_item_this_cannot_be_undone`,`permanently_delete_count_selected_items_this_cannot_be_undone`),onCancel:()=>P(null),onConfirm:()=>{N===`empty`?xe():N===`purge`?Ce():be()},open:N!==null,title:l(N===`empty`?`empty_the_recycle_bin`:N===`purge`?`delete_every_orphan`:`delete_permanently`)})]});function B(e){re(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Jn(`yafm.recycle.sort`,n),n})}}function $p(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return tm(e).localeCompare(tm(t),void 0,{sensitivity:`base`})}}function em(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function tm(e){if(e.isDirectory)return`folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`file`}function nm({entry:e}){let t=un(e.originalPath,e.isDirectory);return(0,J.jsx)(Sm,{children:t?(0,J.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,J.jsx)(ui,{}):(0,J.jsx)(di,{})})}var rm=n.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,im=n.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,am=n.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,om=n.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,sm=n.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,cm=n.button`
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
`,lm=n(cm)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,um=n.button`
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
`,dm=n.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,fm=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,pm=n.div`
    display: grid;
    grid-template-columns: ${fm};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,mm=n.button`
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
`,hm=n.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,gm=n.div`
    display: grid;
    grid-template-columns: ${fm};
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
`,_m=n.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vm=n.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,ym=n.button`
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
`,bm=n.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,xm=n(_m)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Sm=n.span`
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
`,Cm=n(_m)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,wm=n(_m)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Tm=n(_m)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Em=n(_m)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Dm=n.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Om=n.button`
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
`,km=n.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Am=n.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,jm=n.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Mm=n.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Nm(){return c.available?(await c.request(`app.tags`)).tags:[]}async function Pm(e){return!c.available||!e?!1:(await c.request(`app.tags.delete`,{name:e})).ok}async function Fm(e,t){return!c.available||!e?[]:(await c.request(`app.tags.create`,{name:e,color:t})).tags}async function Im(e,t){return!c.available||!e?!1:(await c.request(`app.tags.color`,{name:e,color:t})).ok}async function Lm(e,t){return!c.available||!e||!t?!1:(await c.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Rm(){let e=p();return(0,J.jsx)(zm,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var zm=n.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Bm=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function Vm(e){return`"${e.replaceAll(`"`,``)}"`}function Hm(e){let t=document.documentElement.style;for(let n of Bm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Vm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Um(){return c.available?(await c.request(`app.fonts`)).fonts??[]:[]}function Wm({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=p(),[s,c]=(0,R.useState)(null),[l,u]=(0,R.useState)(``),d=(0,R.useRef)(null),f=(0,R.useRef)(null),m=(0,R.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,R.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[s]);let h=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},g=e=>{a(e),c(null)};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Gm,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:h,ref:d,type:`button`,children:[(0,J.jsx)(Km,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,J.jsx)(qm,{children:`▾`})]}),s&&(0,Va.createPortal)((0,J.jsxs)(Jm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,J.jsxs)(Ym,{children:[(0,J.jsx)(pi,{size:12}),(0,J.jsx)(Xm,{onChange:e=>u(e.target.value),placeholder:o(`filter_fonts`),ref:f,value:l})]}),(0,J.jsxs)(Zm,{children:[(0,J.jsxs)(Qm,{$active:!e,"aria-selected":!e,onClick:()=>g(null),role:`option`,type:`button`,children:[(0,J.jsxs)(eh,{children:[n,` `,(0,J.jsx)(nh,{children:o(`default_2`)})]}),!e&&(0,J.jsx)(Di,{size:11})]}),m.map(t=>(0,J.jsxs)(Qm,{$active:e===t,"aria-selected":e===t,onClick:()=>g(t),role:`option`,type:`button`,children:[(0,J.jsxs)($m,{children:[(0,J.jsx)(eh,{children:t}),(0,J.jsx)(th,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,J.jsx)(Di,{size:11})]},t)),m.length===0&&(0,J.jsx)(rh,{children:o(`no_matching_font`)})]})]}),document.body)]})}var Gm=n.button`
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
`,Km=n.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,qm=n.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,Jm=n.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${Qa}
`,Ym=n.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,Xm=n.input`
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
`,Zm=n.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,Qm=n.button`
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
`,$m=n.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,eh=n.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,th=n.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nh=n.span`
    color: var(--text-muted);
    font-size: 10px;
`,rh=n.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,ih=[{id:`goBack`,label:`back`,note:`the_previous_folder_in_this_tab_the_mouse_back_button_and_the_browser_back_key_always_work`},{id:`goForward`,label:`forward`,note:`the_next_folder_in_this_tab_the_mouse_forward_button_and_the_browser_forward_key_always_work`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder_like_alt_home_in_dolphin`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path_ctrl_l_in_dolphin`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`ctrl_d_copies_too_following_kde_s_file_manager`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`delete_is_del_by_default_not_ctrl_d`},{id:`deletePermanently`,label:`delete_permanently`,note:`bypasses_the_recycle_bin_dolphin_uses_shift_delete`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected_dolphin_uses_ctrl_shift_a`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory_f10_also_works`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_windows_terminal_in_the_current_folder_dolphin_uses_f4_for_its_terminal_panel`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one_f3_in_dolphin`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],ah=`en`,oh=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],sh=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],ch=new Date(2026,10,5,16,8).getTime(),lh=`system`,uh={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},dh=[{id:`application`,label:`application`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],fh=`yafm.colors.recent`;function ph(){let e=qn(fh);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function mh({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:a}){let o=p(),[s,c]=(0,R.useState)([]),[l,u]=(0,R.useState)(null),[f,g]=(0,R.useState)(null),_=i(h(f?.themeMode)),[v,C]=(0,R.useState)(null),[w,T]=(0,R.useState)(``),[E,ee]=(0,R.useState)(`file`),[D,te]=(0,R.useState)(!1),[k,ne]=(0,R.useState)(!1),[A,j]=(0,R.useState)(null),[re,ie]=(0,R.useState)(lt),[N,P]=(0,R.useState)(!1),[se,L]=(0,R.useState)(null),[ge,_e]=(0,R.useState)(null),[ve,ye]=(0,R.useState)(null),[z,xe]=(0,R.useState)(!1),[Se,Ce]=(0,R.useState)(null),[we,Te]=(0,R.useState)(!1),[Ee,De]=(0,R.useState)(null),[Oe,ke]=(0,R.useState)(null),[B,Ae]=(0,R.useState)(!1),[je,Me]=(0,R.useState)([]),[V,Ne]=(0,R.useState)(null),[Pe,Fe]=(0,R.useState)(!1),[Ie,Le]=(0,R.useState)(null),[H,Re]=(0,R.useState)(``),[ze,Be]=(0,R.useState)(Is),[Ve,He]=(0,R.useState)(null),[Ue,Ge]=(0,R.useState)(null),[Ke,qe]=(0,R.useState)(``),[Xe,Ze]=(0,R.useState)(``),[it,ot]=(0,R.useState)(null),[U,mt]=(0,R.useState)(ph),[ht,gt]=(0,R.useState)({}),[_t,vt]=(0,R.useState)(null),[yt,bt]=(0,R.useState)(null),[xt,St]=(0,R.useState)(!1),[Ct,wt]=(0,R.useState)(null),[Tt,Et]=(0,R.useState)(null),[Dt,Ot]=(0,R.useState)(null),[kt,At]=(0,R.useState)(dh[0].id),[jt,Mt]=(0,R.useState)([]),[Nt,Pt]=(0,R.useState)(null),[Ft,It]=(0,R.useState)(null),[Lt,Rt]=(0,R.useState)(null),[zt,Bt]=(0,R.useState)(!1),[Ht,Ut]=(0,R.useState)(``),Wt=(0,R.useRef)(null),qt=(0,R.useRef)({}),Jt=f?.defaultView??be,Yt=f?.themePresets??[],Xt=e?.platform===`windows`,Zt=Xt?ge?ge.registered&&ge.pathMatches:!1:f?.archiveHandler??!1,Qt=ge?.registered??f?.archiveHandler??!1,$t=Xt?ve?ve.registered&&ve.pathMatches:!1:f?.defaultFileManager??!1,en=Xt?re.registered&&re.pathMatches:f?.linksEnabled??!1;Yd(Wt,r??null,`section`,a??(()=>void 0),[f]),(0,R.useEffect)(()=>{let e=Wt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){At(dh[dh.length-1].id);return}let n=t+110,r=dh[0].id;for(let{id:e}of dh){let t=qt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}At(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let tn=e=>t=>{qt.current[e]=t},nn=e=>{qt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),At(e)};(0,R.useEffect)(()=>{t&&nn(t)},[t]),(0,R.useEffect)(()=>{d().then(e=>c(e.available),()=>c([]))},[]),(0,R.useEffect)(()=>{Um().then(Mt,()=>Mt([]))},[]),(0,R.useEffect)(()=>{ft().then(It,()=>It(null))},[]),(0,R.useEffect)(()=>{ue().then(bt,()=>void 0)},[]),(0,R.useEffect)(()=>{We().then(u,()=>u(null)),Je().then(g,()=>g(null)),ut().then(ie,()=>ie(lt)),et().then(_e,()=>_e(null)),Qe().then(ye,()=>ye(null)),Nm().then(Me,()=>Me([]))},[]),(0,R.useEffect)(()=>{let e=()=>void st().then(j,()=>j(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let W=async e=>{if(!f)return;let t={...f,...e};Object.keys(e).every(e=>t[e]===f[e])||(g(t),an(),g(await rt(t)),n())},rn=async e=>{let t=await Ta(e);if(!t)return;let n=f?.backgroundCustom??[];await W({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},on=async()=>{let e=Ht.trim();if(!f||!O(e))return;let t=f.backgroundCustom??[];Ut(``),await W({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},sn=e=>{if(!f)return;let t=f.backgroundSource;W({backgroundCustom:f.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},cn=async()=>{if(!f)return;let t=await wa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;f.protectedPaths.includes(r)||await W({protectedPaths:[...f.protectedPaths,r]})},ln=()=>{let e=Ke.trim();f&&e&&!f.protectedPaths.includes(e)&&(qe(``),W({protectedPaths:[...f.protectedPaths,e]}))},un=()=>{if(!f||!Ve)return;let e=Ve.value.trim(),t=Ve.from;He(null),e.length!==0&&e!==t&&W({protectedPaths:f.protectedPaths.map(n=>n===t?e:n)})},dn=e=>{f&&W({protectedPaths:f.protectedPaths.filter(t=>t!==e)})},G=async()=>{let e=await Ye();e.length>0&&await W({protectedPaths:e})},K=()=>{if(!f||!Ue)return;let e=Ue.value.trim(),t=Ue.from;Ge(null),e&&e!==t&&W({directoryIndexBlacklist:f.directoryIndexBlacklist.map(n=>n===t?e:n)})},q=()=>{let e=Xe.trim();f&&e&&!f.directoryIndexBlacklist.includes(e)&&(Ze(``),W({directoryIndexBlacklist:[...f.directoryIndexBlacklist,e]}))},fn=async()=>{if(!f)return;let t=await wa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;f.directoryIndexBlacklist.includes(r)||await W({directoryIndexBlacklist:[...f.directoryIndexBlacklist,r]})},pn=e=>{f&&W({directoryIndexBlacklist:f.directoryIndexBlacklist.filter(t=>t!==e)})},mn=()=>{W({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},hn=()=>{if(!f||it===null)return;let e=it.trim()||`yyyy/MM/dd HH:mm`;ot(null),e!==f.timeFormatPattern&&W({timeFormatPattern:e})},gn=(e,t)=>{mt(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Jn(fh,i),i})},_n=M(f?.accentColor,oe),vn=M(f?.secondaryColor,m),yn=(e,t)=>{f&&(gn(`accent`,_n),gn(`secondary`,vn),W({accentColor:e,secondaryColor:t}))},bn=(e,t)=>{f&&(gn(e,e===`accent`?_n:vn),W(e===`accent`?{accentColor:t}:{secondaryColor:t}))},xn=async()=>{St(!0),wt(null);try{bt(await de())}catch{wt(o(`could_not_check_for_updates`))}finally{St(!1)}},Sn=async()=>{wt(null),Et({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await I();e.ok||Cn(e.error??``)}catch(e){Cn(e instanceof Error?e.message:String(e))}},Cn=e=>Et(t=>t&&{...t,phase:`error`,error:e}),wn=async()=>{try{await fe()}catch(e){wt(e instanceof Error?e.message:String(e))}},Tn=async()=>{Et(e=>e&&{...e,phase:`installing`});try{let e=await pe();e.ok||Cn(e.error??o(`the_update_failed`))}catch(e){Cn(e instanceof Error?e.message:String(e))}};(0,R.useEffect)(()=>me(e=>Et(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,R.useEffect)(()=>he(e=>Et(t=>t&&{...t,changelog:e.text})),[]);let En=async()=>{if(!f||!_t)return;let e=_t.name.trim()||`${_t.accent.toUpperCase()} / ${_t.secondary.toUpperCase()}`,t=[...f.themePresets,{name:e,accent:_t.accent,secondary:_t.secondary}];vt(null),await W({themePresets:t})},Dn=async e=>{f&&await W({themePresets:f.themePresets.filter((t,n)=>n!==e)})},On=e=>{let t=Dt;Ot(null),t&&t.role===e&&(e===`accent`?_n:vn).toLowerCase()!==t.color.toLowerCase()&&gn(e,t.color)},kn=async()=>{let e=H.trim();if(e&&!Pe){Fe(!0),Le(null);try{Me(await Fm(e,ze)),Re(``)}catch{Le(o(`could_not_add_the_tag`))}finally{Fe(!1)}}},An=async(e,t)=>{Me(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Im(e,t)||Le(o(`could_not_change_the_tag_s_color`))},jn=async e=>{if(Pe)return;Fe(!0),Le(null);let t=await Pm(e);Me(await Nm()),t||Le(`"${e}" is still used by a folder whose index could not be updated.`),Fe(!1)},Mn=async()=>{let e=V;if(!e||Pe)return;let t=e.value.trim();t.length===0||t===e.name?Ne(null):(Fe(!0),Le(null),await Lm(e.name,t)?(Me(await Nm()),Ne(null)):Le(`Could not rename "${e.name}".`),Fe(!1))},Nn=async e=>{let t=new Set(Jt.columns??be.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=rl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await W({defaultView:{...Jt,columns:n}})},Pn=async()=>{if(N)return;let e=!en;P(!0),L(null);try{let t=await dt(e),r=t.registered&&t.pathMatches;ie(t),g(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&L(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{L(`The request to Windows failed. Try again.`)}finally{P(!1)}},Fn=async()=>{if(we||!f)return;let e=!$t;Te(!0),De(null);try{let t=await $e(e);ye(t);let r=Xt?t.registered&&t.pathMatches:e;g(e=>e&&{...e,defaultFileManager:r}),n(),Xt&&r!==e&&De(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{De(`The request to Windows failed. Try again.`)}finally{Te(!1)}},In=async()=>{if(!z){xe(!0),Ce(null);try{let e=await tt();_e(e);let t=e.registered&&e.pathMatches;g(e=>e&&{...e,archiveHandler:t}),n(),t||Ce(`Windows did not accept the archive registration. Try again.`)}catch{Ce(`The request to Windows failed. Try again.`)}finally{xe(!1)}}},Ln=async()=>{if(!z){xe(!0),Ce(null);try{let e=await nt();_e(e),g(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&Ce(`The registration is still there. Try turning it off again.`)}catch{Ce(`The request to Windows failed. Try again.`)}finally{xe(!1)}}},Rn=async(e,t)=>{if(!f)return;let n={...f.extensionIcons};t===null?delete n[e]:n[e]=t,await W({extensionIcons:n})},zn={...Vt,...f?.shortcuts};(0,R.useEffect)(()=>{if(!Oe)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){ke(null);return}let t=Gt(e);t&&(ke(null),W({shortcuts:{...zn,[Oe]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[Oe,f]),(0,R.useEffect)(()=>{if(!B)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Ae(!1);return}let t=Gt(e);t&&(Ae(!1),W({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[B,f]);let Bn=async e=>{await W({recentLimit:Math.min(Math.max(e,0),50)})},Vn=(e,t)=>{let n=t??ht[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};gt(t=>({...t,[e]:void 0})),W(i)},Hn=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Pt(null),await W({sharePortMode:`custom`,sharePort:n}),await Fc(n,`custom`)},Un=async e=>{let t=e===`custom`,n=t?f?.sharePort??8080:null;await W({sharePortMode:t?`custom`:`random`,sharePort:n}),await Fc(n,t?`custom`:`random`)},Wn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;Bt(!0),Rt(null);try{let e=await pt(t);It(e),Rt(e.error),e.error||await W({startupMode:t})}finally{Bt(!1)}},Gn=async e=>{await W({galleryRoots:e.length>0?e:null})},Kn=async()=>{let e=await wa(),t=f?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await Gn([...t,e])},qn=async()=>{let e=w.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Rn(e,E),T(``))},Yn=async()=>{ne(!0);try{let e=await wa();if(!e)return;let t=await Ta([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await at(e.replace(/[\\/][^\\/]+$/,``),y(e),`file:${t}`)&&(an(),C({folder:e,icon:t}))}finally{ne(!1)}},Xn=async(e,t)=>{let n={...f?.fonts};t?n[e]=t:delete n[e],await W({fonts:n})};return(0,J.jsxs)(Eh,{children:[(0,J.jsxs)(Dh,{ref:Wt,children:[(0,J.jsxs)(Oh,{ref:tn(`application`),children:[(0,J.jsx)(Th,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:o(`version`)}),(0,J.jsx)(hg,{children:e?`v${e.version}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:o(`platform`)}),(0,J.jsx)(hg,{children:e?.platform??`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`language`)}),(0,J.jsx)($,{children:o(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(Sh,{disabled:!f,onChange:e=>void W({language:e}),options:[lh,...s.length>0?s:[ah]],value:f?.language??ah})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`picker_window_size`)}),(0,J.jsx)($,{children:o(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Tg,{inputMode:`numeric`,onBlur:e=>Vn(`width`,e.currentTarget.value),onChange:e=>gt(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:ht.width??String(f?.pickerWindowWidth??1200)}),(0,J.jsx)(hg,{children:`×`}),(0,J.jsx)(Tg,{inputMode:`numeric`,onBlur:e=>Vn(`height`,e.currentTarget.value),onChange:e=>gt(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:ht.height??String(f?.pickerWindowHeight??800)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`web_server_port`)}),(0,J.jsx)($,{children:o(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(bo,{disabled:!f,onChange:e=>void Un(e),options:[{value:`random`,label:o(`random`)},{value:`custom`,label:o(`custom_port`)}],value:f?.sharePortMode??`random`,width:160})})]}),f?.sharePortMode===`custom`&&(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`custom_port`)}),(0,J.jsx)($,{children:o(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(Tg,{inputMode:`numeric`,onBlur:e=>void Hn(e.currentTarget.value),onChange:e=>Pt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Nt??(f?.sharePort?String(f.sharePort):``)})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`link_paths`)}),(0,J.jsx)($,{children:o(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(bo,{disabled:!f,onChange:e=>void W({linkPathMode:e}),options:[{value:`relative`,label:o(`relative`)},{value:`absolute`,label:o(`absolute`)}],value:f?.linkPathMode??`relative`,width:160})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`global_hotkey`)}),(0,J.jsx)($,{children:o(`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(r_,{$listening:B,disabled:!f,onClick:()=>Ae(!0),type:`button`,children:B?o(`press_a_key`):f?.globalHotkey?Kt(f.globalHotkey):o(`none`)}),f?.globalHotkey&&(0,J.jsx)(vg,{onClick:()=>void W({globalHotkey:null}),type:`button`,children:o(`clear`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`open_yafm_links`)}),(0,J.jsx)($,{children:o(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),re.registered&&!re.pathMatches&&(0,J.jsx)(mg,{children:o(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:re.registeredPath??`?`})}),se&&(0,J.jsx)(mg,{children:se})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Sg,{$on:en,children:o(en?`active`:`off`)}),(0,J.jsx)(Cg,{$on:en,disabled:N,onClick:()=>void Pn(),title:o(en?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,J.jsx)(wg,{})})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`use_as_the_default_file_manager`)}),(0,J.jsx)($,{children:o(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),ve?.registered&&!ve.pathMatches&&(0,J.jsx)(mg,{children:o(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ve.registeredPath??`?`})}),Ee&&(0,J.jsx)(mg,{children:Ee})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Sg,{$on:$t,children:o($t?`active`:`off`)}),(0,J.jsx)(Cg,{$on:$t,disabled:!f||we,onClick:()=>void Fn(),title:o($t?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,J.jsx)(wg,{})})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`open_archives_with_this_app`)}),(0,J.jsx)($,{children:o(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,J.jsx)($,{children:o(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),ge?.registered&&!ge.pathMatches&&(0,J.jsx)(mg,{children:o(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ge.registeredPath??`?`})}),Se&&(0,J.jsx)(mg,{children:Se})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Sg,{$on:Zt,children:o(Zt?`active`:`off`)}),(0,J.jsx)(i_,{disabled:!f||z||Zt,onClick:()=>void In(),type:`button`,children:o(`register`)}),e?.platform===`windows`&&(0,J.jsx)(i_,{onClick:()=>void F(`ms-settings:defaultapps`),type:`button`,children:o(`default_apps`)}),(0,J.jsx)(xg,{disabled:!f||z||!Qt,onClick:()=>void Ln(),type:`button`,children:o(`unregister`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`reopen_the_tabs_that_were_open`)}),(0,J.jsx)($,{children:o(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,J.jsx)(Cg,{$on:f?.restoreTabs??!0,disabled:!f,onClick:()=>void W({restoreTabs:!f?.restoreTabs}),type:`button`,children:(0,J.jsx)(wg,{})})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`startup`),children:[(0,J.jsx)(Th,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`start_with_the_computer`)}),(0,J.jsx)($,{children:o(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),Lt&&(0,J.jsx)(mg,{children:Lt}),Ft&&!Ft.supported&&(0,J.jsx)(mg,{children:o(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(bo,{disabled:!f||zt||Ft!==null&&!Ft.supported,onChange:e=>void Wn(e),options:[{value:`none`,label:o(`none`)},{value:`shortcut`,label:o(`shortcut`)},{value:`task`,label:o(`scheduled_task`)}],value:Ft?.mode??f?.startupMode??`none`,width:170})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`start_hidden_in_the_tray`)}),(0,J.jsx)($,{children:o(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(Cg,{$on:f?.startHidden??!1,disabled:!f,onClick:()=>void W({startHidden:!f?.startHidden}),type:`button`,children:(0,J.jsx)(wg,{})})})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`fonts`),children:[(0,J.jsx)(Th,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`}),(0,J.jsxs)(Ah,{children:[Bm.map(e=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(e.label)}),(0,J.jsx)($,{children:o(`falls_back_to_font_until_another_family_is_chosen`,{font:o(e.fallback)})})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(Wm,{defaultLabel:o(e.fallback),disabled:!f,fonts:jt,onChange:t=>void Xn(e.id,t),sample:e.sample,value:f?.fonts?.[e.id]??null})})]},e.id)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`reset`)}),(0,J.jsx)($,{children:o(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(i_,{onClick:()=>void W({fonts:{}}),type:`button`,children:o(`reset`)})})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`time`),children:[(0,J.jsx)(Th,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`}),(0,J.jsx)(Ah,{children:(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:o(`format`)}),(0,J.jsx)($,{children:o(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,J.jsx)(Zg,{children:sh.map(e=>(0,J.jsx)(Qg,{$active:(f?.timeFormat??`24`)===e.id,onClick:()=>void W({timeFormat:e.id}),type:`button`,children:o(e.label)},e.id))}),(f?.timeFormat??`24`)===`custom`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)($g,{"aria-label":o(`pattern`),onBlur:hn,onChange:e=>ot(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),hn()):e.key===`Escape`&&ot(null)},spellCheck:!1,value:it??f?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,J.jsx)($,{children:o(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,J.jsxs)(e_,{children:[(0,J.jsx)(`span`,{children:o(`preview`)}),(0,J.jsx)(`code`,{children:S(ch,f?.timeFormat,it??f?.timeFormatPattern)})]})]})})]}),(0,J.jsxs)(Oh,{ref:tn(`updates`),children:[(0,J.jsx)(Th,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:o(`current_version`)}),(0,J.jsx)(hg,{children:e?`v${e.version}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:o(`latest_version`)}),(0,J.jsx)(hg,{children:yt?`v${yt.latest}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:yt?yt.available?o(`version_version_is_available`,{version:yt.latest}):o(`you_are_on_the_latest_version`):o(`not_checked_yet`)}),(0,J.jsx)($,{children:yt?.available?o(`the_installer_downloads_installs_itself_and_closes_the_app`):o(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,J.jsx)(fg,{children:yt?.available?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(i_,{onClick:()=>void le(),type:`button`,children:o(`open_release_page`)}),Xt&&(0,J.jsx)(i_,{disabled:Tt!==null,onClick:()=>void Sn(),type:`button`,children:o(`download_and_install`)})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(i_,{disabled:xt,onClick:()=>void xn(),type:`button`,children:o(xt?`checking`:`check_for_updates`)}),(0,J.jsx)(i_,{onClick:()=>void ce(),type:`button`,children:o(`open_log_folder`)})]})})]}),Ct&&(0,J.jsx)(X,{children:(0,J.jsx)(mg,{children:Ct})})]})]}),(0,J.jsxs)(Oh,{ref:tn(`colors`),children:[(0,J.jsx)(Th,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:o(`theme`)}),(0,J.jsx)($,{children:o(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,J.jsx)(Zg,{children:oh.map(e=>(0,J.jsx)(Qg,{$active:(f?.themeMode??`system`)===e.id,onClick:()=>void W({themeMode:e.id}),type:`button`,children:o(e.label)},e.id))})]}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:o(`presets`)}),(0,J.jsx)($,{children:o(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,J.jsxs)(Nh,{children:[Pu.map(e=>(0,J.jsxs)(Ph,{$on:_n.toLowerCase()===e.accent&&vn.toLowerCase()===e.secondary,onClick:()=>yn(e.accent,e.secondary),title:`${o(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,J.jsxs)(Vh,{children:[(0,J.jsx)(`i`,{style:{background:e.accent}}),(0,J.jsx)(`i`,{style:{background:e.secondary}})]}),(0,J.jsx)(Fh,{children:o(e.name)})]},e.name)),Yt.map((e,t)=>(0,J.jsxs)(Ih,{children:[(0,J.jsxs)(Ph,{$on:_n.toLowerCase()===e.accent.toLowerCase()&&vn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>yn(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,J.jsxs)(Vh,{children:[(0,J.jsx)(`i`,{style:{background:e.accent}}),(0,J.jsx)(`i`,{style:{background:e.secondary}})]}),(0,J.jsx)(Fh,{children:e.name})]}),(0,J.jsx)(Lh,{onClick:()=>void Dn(t),title:o(`remove_preset`),type:`button`,children:(0,J.jsx)(Oi,{size:9})})]},`${e.name}-${t}`)),_t?(0,J.jsxs)(zh,{children:[(0,J.jsxs)(Vh,{children:[(0,J.jsx)(`i`,{style:{background:_t.accent}}),(0,J.jsx)(`i`,{style:{background:_t.secondary}})]}),(0,J.jsx)(Bh,{autoFocus:!0,maxLength:24,onChange:e=>vt({..._t,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),En()):e.key===`Escape`&&(e.preventDefault(),vt(null))},placeholder:o(`preset_name`),spellCheck:!1,value:_t.name}),(0,J.jsx)(vg,{onClick:()=>void En(),type:`button`,children:o(`save`)}),(0,J.jsx)(vg,{onClick:()=>vt(null),type:`button`,children:o(`cancel`)})]}):(0,J.jsxs)(Rh,{disabled:!f,onClick:()=>vt({name:``,accent:_n,secondary:vn}),title:o(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,J.jsx)(gi,{size:12}),o(`add_preset`)]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`accent_color`)}),(0,J.jsx)($,{children:o(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(wh,{colors:U.accent,current:_n,onApply:e=>bn(`accent`,e)}),(0,J.jsx)(yg,{"aria-label":o(`accent_color`),disabled:!f,onBlur:()=>On(`accent`),onChange:e=>void W({accentColor:e.target.value}),onFocus:()=>Ot({role:`accent`,color:_n}),type:`color`,value:_n}),(0,J.jsx)(bg,{children:_n.toUpperCase()})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`secondary_color`)}),(0,J.jsx)($,{children:o(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(wh,{colors:U.secondary,current:vn,onApply:e=>bn(`secondary`,e)}),(0,J.jsx)(yg,{"aria-label":o(`secondary_color`),disabled:!f,onBlur:()=>On(`secondary`),onChange:e=>void W({secondaryColor:e.target.value}),onFocus:()=>Ot({role:`secondary`,color:vn}),type:`color`,value:vn}),(0,J.jsx)(bg,{children:vn.toUpperCase()})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`reset_colors`)}),(0,J.jsx)($,{children:o(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(vg,{disabled:!f,onClick:()=>{gn(`accent`,_n),gn(`secondary`,vn),W({accentColor:null,secondaryColor:null})},type:`button`,children:o(`reset`)})})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`background`),children:[(0,J.jsx)(Th,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:o(`wallpaper`)}),(0,J.jsx)($,{children:o(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,J.jsx)(Lg,{children:(0,J.jsx)(Rg,{$active:!f?.backgroundSource,onClick:()=>void W({backgroundSource:null}),title:o(`none`),type:`button`,children:(0,J.jsx)(Ug,{children:o(`none`)})})}),(0,J.jsxs)(Pg,{children:[Lu.map(e=>(0,J.jsxs)(Fg,{children:[(0,J.jsx)(Ig,{children:o(e.name)}),(0,J.jsx)(Lg,{children:e.variants.map(t=>(0,J.jsx)(Rg,{$active:f?.backgroundSource===t.id,onClick:()=>void W({backgroundSource:t.id}),title:`${o(e.name)} · ${o(t.preset)}`,type:`button`,children:(0,J.jsx)(`img`,{alt:``,src:_===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,J.jsxs)(Fg,{children:[(0,J.jsx)(Ig,{children:o(`motion`)}),(0,J.jsx)(Lg,{children:Iu.map(e=>(0,J.jsxs)(Rg,{$active:f?.backgroundSource===e.id,onClick:()=>void W({backgroundSource:e.id}),title:o(e.name),type:`button`,children:[(0,J.jsx)(`img`,{alt:``,src:e.poster}),(0,J.jsx)(Vg,{children:(0,J.jsx)(Fi,{size:11})})]},e.id))})]}),(0,J.jsxs)(Fg,{children:[(0,J.jsx)(Ig,{children:o(`custom`)}),(0,J.jsxs)(Lg,{children:[(f?.backgroundCustom??[]).map(e=>(0,J.jsx)(xh,{active:f?.backgroundSource===`file:${e}`||f?.backgroundSource===`url:${e}`||f?.backgroundSource===e,onRemove:()=>sn(e),onSelect:()=>void W({backgroundSource:O(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,J.jsxs)(Hg,{onClick:()=>void rn([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,J.jsx)(gi,{size:12}),o(`image_2`)]}),(0,J.jsxs)(Hg,{onClick:()=>void rn([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,J.jsx)(gi,{size:12}),o(`video`)]})]})]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`image_or_video_url`)}),(0,J.jsx)($,{children:o(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Tg,{onChange:e=>Ut(e.target.value),onKeyDown:e=>{e.key===`Enter`&&on()},placeholder:`https://…`,value:Ht}),(0,J.jsx)(vg,{disabled:!O(Ht),onClick:()=>void on(),type:`button`,children:o(`add`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:o(`blur`)}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:40,min:0,onChange:e=>void W({backgroundBlur:Number(e.target.value)}),type:`range`,value:f?.backgroundBlur??0}),(0,J.jsxs)(hg,{children:[f?.backgroundBlur??0,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:o(`saturation`)}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:200,min:0,onChange:e=>void W({backgroundSaturation:Number(e.target.value)}),type:`range`,value:f?.backgroundSaturation??100}),(0,J.jsxs)(hg,{children:[f?.backgroundSaturation??100,`%`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:o(`brightness`)}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:150,min:40,onChange:e=>void W({backgroundBrightness:Number(e.target.value)}),type:`range`,value:f?.backgroundBrightness??100}),(0,J.jsxs)(hg,{children:[f?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`safety`),children:[(0,J.jsx)(Th,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:o(`protected_folders`)}),(0,J.jsx)($,{children:o(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,J.jsx)(Wg,{children:(f?.protectedPaths??[]).map(e=>(0,J.jsxs)(Gg,{children:[(0,J.jsx)(Kg,{"aria-label":o(`protected_path`),onBlur:un,onChange:t=>He({from:e,value:t.target.value}),onFocus:()=>He({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),un()):e.key===`Escape`&&He(null)},spellCheck:!1,value:Ve?.from===e?Ve.value:e}),(0,J.jsx)(qg,{onClick:()=>dn(e),title:o(`remove`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]},e))}),(0,J.jsxs)(Yg,{children:[(0,J.jsx)(Xg,{"aria-label":o(`new_protected_rule`),onChange:e=>qe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),ln())},placeholder:`*.log`,spellCheck:!1,value:Ke}),(0,J.jsx)(vg,{onClick:ln,type:`button`,children:o(`add_the_rule`)})]}),(0,J.jsxs)(Jg,{children:[(0,J.jsx)(vg,{onClick:()=>void G(),type:`button`,children:o(`restore_defaults`)}),(0,J.jsx)(vg,{onClick:()=>void cn(),type:`button`,children:o(`add_folder_2`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`confirmation_delay`)}),(0,J.jsx)($,{children:o(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:30,min:2,onChange:e=>void W({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:f?.deleteDelaySeconds??5}),(0,J.jsxs)(hg,{children:[f?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`tags`),children:[(0,J.jsx)(Th,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(gg,{"aria-label":o(`color_of_the_new_tag`),onChange:e=>Be(e.target.value),type:`color`,value:ze}),(0,J.jsx)(Tg,{onChange:e=>Re(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),kn())},placeholder:o(`new_tag`),spellCheck:!1,value:H})]}),(0,J.jsx)($,{children:o(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(vg,{disabled:Pe||H.trim().length===0,onClick:()=>void kn(),type:`button`,children:o(`add`)})})]}),Ie&&(0,J.jsx)(X,{children:(0,J.jsx)(mg,{children:Ie})}),je.length===0&&(0,J.jsx)(X,{children:(0,J.jsx)($,{children:o(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),je.map(e=>(0,J.jsx)(X,{children:V?.name===e.name?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(gg,{"aria-label":o(`color_of_tag`,{tag:e.name}),onChange:t=>void An(e.name,t.target.value),title:o(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,J.jsx)(_g,{autoFocus:!0,disabled:Pe,onChange:t=>Ne({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Mn()):e.key===`Escape`&&(e.preventDefault(),Ne(null))},value:V.value})]}),(0,J.jsx)($,{children:o(`press_enter_to_save_escape_to_cancel`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(vg,{disabled:Pe,onClick:()=>void Mn(),type:`button`,children:o(`save`)}),(0,J.jsx)(vg,{disabled:Pe,onClick:()=>Ne(null),type:`button`,children:o(`cancel`)})]})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(gg,{"aria-label":o(`color_of_tag`,{tag:e.name}),onChange:t=>void An(e.name,t.target.value),title:o(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,J.jsx)(Q,{children:e.name})]}),(0,J.jsx)($,{children:ae(o,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(vg,{disabled:Pe,onClick:()=>Ne({name:e.name,value:e.name}),type:`button`,children:o(`edit`)}),(0,J.jsxs)(xg,{disabled:Pe,onClick:()=>void jn(e.name),type:`button`,children:[(0,J.jsx)(Ei,{size:13}),o(`remove`)]})]})]})},e.name))]})]}),(0,J.jsxs)(Oh,{ref:tn(`files-view`),children:[(0,J.jsx)(Th,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`default_view`)}),(0,J.jsx)($,{children:o(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,J.jsx)(fg,{children:(0,J.jsxs)(jg,{children:[(0,J.jsx)(Mg,{$on:Jt.mode===`list`,onClick:()=>void W({defaultView:{...Jt,mode:`list`}}),type:`button`,children:o(`list`)}),(0,J.jsx)(Mg,{$on:Jt.mode===`grid`,onClick:()=>void W({defaultView:{...Jt,mode:`grid`}}),type:`button`,children:o(`grid`)})]})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`list_icon_size`)}),(0,J.jsx)($,{children:o(`the_icon_in_the_list_rows`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:48,min:16,onChange:e=>void W({defaultView:{...Jt,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Jt.iconSize}),(0,J.jsxs)(hg,{children:[Jt.iconSize,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`grid_size`)}),(0,J.jsx)($,{children:o(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:260,min:100,onChange:e=>void W({defaultView:{...Jt,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Jt.gridSize}),(0,J.jsxs)(hg,{children:[Jt.gridSize,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:o(`selection_checkboxes`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:o(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,J.jsx)(Cg,{$on:f?.showCheckboxes??!0,disabled:!f,onClick:()=>void W({showCheckboxes:!(f?.showCheckboxes??!0)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:o(`open_with_a_single_click`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:o(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,J.jsx)(Cg,{$on:f?.openOnSingleClick??!1,disabled:!f,onClick:()=>void W({openOnSingleClick:!(f?.openOnSingleClick??!1)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:o(`open_the_file_tray_while_dragging`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:o(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,J.jsx)(Cg,{$on:f?.trayAutoShow??!0,disabled:!f,onClick:()=>void W({trayAutoShow:!(f?.trayAutoShow??!0)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:o(`confirm_before_deleting`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:o(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,J.jsx)(Cg,{$on:f?.confirmDelete??!1,disabled:!f,onClick:()=>void W({confirmDelete:!(f?.confirmDelete??!1)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:o(`play_audio_in_video_previews`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:o(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,J.jsx)(Cg,{$on:f?.previewVideoAudio??!1,disabled:!f,onClick:()=>void W({previewVideoAudio:!(f?.previewVideoAudio??!1)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:o(`autoplay_video_previews`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:o(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,J.jsx)(Cg,{$on:f?.previewVideoAutoplay??!1,disabled:!f,onClick:()=>void W({previewVideoAutoplay:!(f?.previewVideoAutoplay??!1)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:o(`preview_panel_under_the_list`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:o(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,J.jsx)(Cg,{$on:Jt.showImages??!0,onClick:()=>void W({defaultView:{...Jt,showImages:!(Jt.showImages??!0)}}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsx)(X,{children:(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:o(`columns`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:o(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,J.jsx)(X,{children:(0,J.jsxs)(t_,{children:[rl.map(e=>(0,J.jsxs)(n_,{children:[(0,J.jsx)(`input`,{checked:(Jt.columns??[]).includes(e.id),onChange:()=>void Nn(e.id),type:`checkbox`}),(0,J.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,J.jsxs)(n_,{children:[(0,J.jsx)(`input`,{checked:(Jt.columns??[]).includes(`linkTarget`),onChange:()=>void Nn(`linkTarget`),type:`checkbox`}),(0,J.jsx)(`span`,{children:o(`link_target_after_the_name`)})]})]})})]}),(0,J.jsxs)(c_,{children:[o(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,J.jsx)(Rm,{}),` `,o(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,J.jsxs)(Oh,{ref:tn(`shortcuts`),children:[(0,J.jsx)(Th,{note:`the_keys_this_window_listens_for_click_a_combination_to_record_a_new_one`,title:`shortcuts`}),(0,J.jsxs)(Ah,{children:[ih.map(({id:e,label:t,note:n})=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(t)}),(0,J.jsx)($,{children:o(n)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(r_,{$listening:Oe===e,onClick:()=>ke(e),type:`button`,children:Oe===e?o(`press_a_key`):Kt(zn[e])})})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`reset`)}),(0,J.jsx)($,{children:o(`back_to_the_default_combination_for_every_action`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(i_,{onClick:()=>void W({shortcuts:{...Vt}}),type:`button`,children:o(`reset`)})})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`memory`),children:[(0,J.jsx)(Th,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(cg,{children:[(0,J.jsxs)(lg,{children:[(0,J.jsx)(Q,{children:o(`process_memory`)}),(0,J.jsx)(hg,{children:A?`${x(A.private)} · ${Xh(A.private,A.available)}`:`—`})]}),(0,J.jsx)(ug,{children:(0,J.jsx)(dg,{$ratio:A?A.private/Math.max(A.available,1):0,$tone:b(A?A.private/Math.max(A.available,1):0)})}),(0,J.jsx)($,{children:A?o(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:x(A.available),resident:x(A.workingSet)}):o(`reading_the_current_usage`)})]}),(0,J.jsxs)(cg,{children:[(0,J.jsxs)(lg,{children:[(0,J.jsx)(Q,{children:o(`managed_heap`)}),(0,J.jsx)(hg,{children:A?`${x(A.managed)} · ${Xh(A.managed,A.private)}`:`—`})]}),(0,J.jsx)(ug,{children:(0,J.jsx)(dg,{$ratio:A?A.managed/Math.max(A.private,1):0,$tone:`var(--accent-secondary)`})}),(0,J.jsx)($,{children:o(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,J.jsxs)(cg,{children:[(0,J.jsxs)(lg,{children:[(0,J.jsx)(Q,{children:o(`native_and_runtime`)}),(0,J.jsx)(hg,{children:A?`${x(Math.max(0,A.private-A.managed))} · ${Xh(Math.max(0,A.private-A.managed),A.private)}`:`—`})]}),(0,J.jsx)(ug,{children:(0,J.jsx)(dg,{$ratio:A?Math.max(0,A.private-A.managed)/Math.max(A.private,1):0,$tone:`var(--accent-primary)`})}),(0,J.jsx)($,{children:o(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`free_memory`)}),(0,J.jsx)($,{children:o(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(i_,{onClick:()=>void ct().then(j),type:`button`,children:o(`trim_now`)})})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`overview`),children:[(0,J.jsx)(Th,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`}),(0,J.jsx)(Ah,{children:(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`recent_items`)}),(0,J.jsx)($,{children:o(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(Tg,{max:50,min:0,onChange:e=>void Bn(Number(e.target.value)),type:`number`,value:f?.recentLimit??10})})]})})]}),(0,J.jsxs)(Oh,{ref:tn(`gallery`),children:[(0,J.jsx)(Th,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`}),(0,J.jsxs)(Ah,{children:[(f?.galleryRoots??[]).map(e=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:y(e)}),(0,J.jsx)($,{children:e})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(a_,{onClick:()=>void Gn((f?.galleryRoots??[]).filter(t=>t!==e)),title:o(`stop_scanning_this_folder`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`scan_folders`)}),(0,J.jsx)($,{children:(f?.galleryRoots??[]).length===0?o(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):o(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(i_,{onClick:()=>void Kn(),type:`button`,children:o(`choose_folder`)})})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`icons`),children:[(0,J.jsx)(Th,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`use_system_file_icons`)}),(0,J.jsx)($,{children:o(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,J.jsx)(Cg,{$on:f?.systemIcons??!1,disabled:!f,onClick:()=>void W({systemIcons:!f?.systemIcons}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`use_custom_folder_icons`)}),(0,J.jsx)($,{children:o(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,J.jsx)(Cg,{$on:f?.customFolderIcons??!1,disabled:!f,onClick:()=>void W({customFolderIcons:!f?.customFolderIcons}),type:`button`,children:(0,J.jsx)(wg,{})})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`extension-icons`),children:[(0,J.jsx)(Th,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`}),(0,J.jsxs)(Ah,{children:[Object.entries(f?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:e}),(0,J.jsx)($,{children:vh(o,t)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(yh,{source:t}),(0,J.jsx)(a_,{onClick:()=>void Rn(e,null),title:o(`remove_this_rule`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`add_a_rule`)}),(0,J.jsx)($,{children:o(`extension_and_the_icon_to_draw_for_it`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Tg,{onChange:e=>T(e.target.value),placeholder:`.psd`,spellCheck:!1,value:w}),(0,J.jsxs)(Ag,{children:[(0,J.jsx)(a_,{onClick:()=>te(e=>!e),title:o(`choose_the_icon`),type:`button`,children:(0,J.jsx)(yh,{source:E})}),D&&(0,J.jsx)(Xd,{allowDefault:!1,onClose:()=>te(!1),onPick:e=>{ee(e??`file`),te(!1)},value:E})]}),(0,J.jsx)(a_,{onClick:()=>void qn(),title:o(`add_the_rule`),type:`button`,children:(0,J.jsx)(gi,{size:13})})]})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`folder-icons`),children:[(0,J.jsx)(Th,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`give_a_folder_its_own_icon`)}),(0,J.jsx)($,{children:o(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,J.jsxs)(fg,{children:[v&&(0,J.jsx)(bh,{src:v.icon}),(0,J.jsx)(i_,{disabled:k,onClick:()=>void Yn(),type:`button`,children:o(k?`choosing`:`choose_folder_and_icon`)})]})]}),v&&(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:y(v.folder)}),(0,J.jsx)($,{children:v.folder})]}),(0,J.jsx)(fg,{children:(0,J.jsxs)(s_,{children:[(0,J.jsx)(Di,{size:11}),` `,o(`saved`)]})})]})]})]}),(0,J.jsxs)(Oh,{ref:tn(`folder-index`),children:[(0,J.jsx)(Th,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:o(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,J.jsx)($,{children:o(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,J.jsx)(Cg,{$on:f?.writeDirectoryIndex??!0,disabled:!f,onClick:()=>void W({writeDirectoryIndex:!f?.writeDirectoryIndex}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:o(`directory_index_blacklist`)}),(0,J.jsx)($,{children:o(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,J.jsx)(Wg,{children:(f?.directoryIndexBlacklist??[]).map(e=>(0,J.jsxs)(Gg,{children:[(0,J.jsx)(Kg,{"aria-label":o(`directory_index_blacklist_rule`),onBlur:K,onChange:t=>Ge({from:e,value:t.target.value}),onFocus:()=>Ge({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),K()):e.key===`Escape`&&Ge(null)},spellCheck:!1,value:Ue?.from===e?Ue.value:e}),(0,J.jsx)(qg,{onClick:()=>pn(e),title:o(`remove`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]},e))}),(0,J.jsxs)(Yg,{children:[(0,J.jsx)(Xg,{"aria-label":o(`directory_index_blacklist_rule`),onChange:e=>Ze(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),q())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:Xe}),(0,J.jsx)(vg,{onClick:q,type:`button`,children:o(`add_the_rule`)})]}),(0,J.jsxs)(Jg,{children:[(0,J.jsx)(vg,{onClick:mn,type:`button`,children:o(`restore_defaults`)}),(0,J.jsx)(vg,{onClick:()=>void fn(),type:`button`,children:o(`add_folder_2`)})]})]})]}),!(f?.writeDirectoryIndex??!0)&&(0,J.jsx)(l_,{children:_h(o,e?.platform)})]}),(0,J.jsxs)(Oh,{ref:tn(`indexing`),children:[(0,J.jsx)(Th,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,J.jsx)(gh,{})]}),(0,J.jsxs)(Oh,{ref:tn(`files`),children:[(0,J.jsx)(Th,{note:`what_the_listings_include`,title:`files`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:o(`hidden_items`)}),(0,J.jsx)(hg,{children:hh(o,l?.showHidden)})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:o(`protected_operating_system_files`)}),(0,J.jsx)(hg,{children:hh(o,l?.showSystem)})]})]}),(0,J.jsx)(c_,{children:o(`listings_follow_the_file_manager_s_own_settings_hidden_and_protected_items_are_only_shown_when_the_operating_system_is_set_to_show_them`)})]})]}),(0,J.jsxs)(Gh,{"aria-label":o(`settings_sections`),children:[(0,J.jsx)(Kh,{children:o(`sections`)}),(0,J.jsx)(qh,{children:dh.map(({id:e,label:t})=>(0,J.jsx)(Jh,{$active:kt===e,onClick:()=>nn(e),type:`button`,children:(0,J.jsx)(`span`,{children:o(t)})},e))}),(0,J.jsx)(Yh,{children:o(`changes_are_saved_as_you_make_them`)})]}),Tt&&(0,Va.createPortal)((0,J.jsx)($h,{children:(0,J.jsxs)(eg,{"aria-modal":`true`,role:`dialog`,children:[(0,J.jsxs)(tg,{children:[(0,J.jsx)(`h2`,{children:o(`software_update`)}),(0,J.jsx)(`p`,{children:yt?.latest?o(`version_version`,{version:yt.latest}):o(`preparing_the_update`)})]}),(0,J.jsx)(ng,{children:o(`changelog`)}),(0,J.jsx)(rg,{children:Tt.changelog||(Tt.phase===`changelog`?o(`loading_the_changelog`):o(`the_changelog_could_not_be_loaded`))}),(0,J.jsxs)(ig,{children:[(0,J.jsx)(`span`,{children:Zh(Tt,o)}),(0,J.jsx)(`span`,{children:Qh(Tt)})]}),(0,J.jsx)(ag,{children:(0,J.jsx)(og,{$percent:Math.max(0,Math.min(100,Tt.percent))})}),Tt.error&&(0,J.jsx)(mg,{children:Tt.error}),(0,J.jsxs)(sg,{children:[(Tt.phase===`changelog`||Tt.phase===`downloading`)&&(0,J.jsx)(i_,{onClick:()=>void wn(),type:`button`,children:o(`cancel`)}),Tt.phase===`ready`&&(0,J.jsx)(i_,{onClick:()=>void Tn(),type:`button`,children:o(`install_update`)}),Tt.phase===`installing`&&(0,J.jsx)(i_,{disabled:!0,type:`button`,children:o(`installing`)}),(Tt.phase===`ready`||Tt.phase===`error`||Tt.phase===`cancelled`||Tt.phase===`installing`)&&(0,J.jsx)(i_,{onClick:()=>Et(null),type:`button`,children:o(`close`)})]})]})}),document.body)]})}function hh(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function gh(){let e=p(),[t,n]=(0,R.useState)(null);return(0,R.useEffect)(()=>{let e=!0,t=()=>Ke().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,J.jsx)(l_,{children:e(`no_indexing_tasks_are_running`)}):(0,J.jsxs)(Ah,{children:[(0,J.jsx)(X,{children:(0,J.jsx)(Q,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,J.jsx)(X,{children:(0,J.jsx)(hg,{title:e,children:e})},e))]}):(0,J.jsx)(l_,{children:e(`index_task_information_is_unavailable`)})}function _h(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function vh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function yh({source:e}){let t=G(e.startsWith(`file:`)?e.slice(5):null);return(0,J.jsx)(o_,{children:t?(0,J.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,J.jsx)(Qs,{name:e,size:16})})}function bh({src:e}){let t=G(e);return(0,J.jsx)(o_,{children:t&&(0,J.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function xh({path:e,active:t,onSelect:n,onRemove:r}){let i=p(),a=O(e),o=hn(a?null:e),s=a?e:o,c=td(e.split(/[?#]/)[0]);return(0,J.jsxs)(zg,{children:[(0,J.jsxs)(Rg,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,J.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,J.jsx)(`img`,{alt:``,src:s})),c&&(0,J.jsx)(Vg,{children:(0,J.jsx)(Fi,{size:11})})]}),(0,J.jsx)(Bg,{onClick:r,title:i(`remove`),type:`button`,children:(0,J.jsx)(Oi,{size:9})})]})}function Sh({value:e,options:t,onChange:n,disabled:r}){let i=p(),[a,o]=(0,R.useState)(null),s=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Eg,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,J.jsx)(`span`,{children:Ch(i,e)}),(0,J.jsx)(Dg,{children:(0,J.jsx)(yi,{size:11})})]}),a&&(0,Va.createPortal)((0,J.jsx)(Og,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,J.jsxs)(kg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,J.jsx)(`span`,{children:Ch(i,t)}),t===e&&(0,J.jsx)(Di,{size:11})]},t))}),document.body)]})}function Ch(e,t){return t===lh?e(`system_default`):uh[t]??t}function wh({colors:e,current:t,onApply:n}){let r=p();if(e.length===0)return null;let[i,...a]=e;return(0,J.jsxs)(Hh,{children:[(0,J.jsxs)(Wh,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,J.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,J.jsx)(Uh,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,J.jsx)(Di,{size:9})},e))]})}function Th({title:e,note:t,global:n=!1}){let r=p();return(0,J.jsxs)(kh,{children:[(0,J.jsxs)(`h2`,{children:[r(e),n&&(0,J.jsx)(Rm,{})]}),(0,J.jsx)(`p`,{children:r(t)})]})}var Eh=n.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Dh=n.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Oh=n.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,kh=n.header`
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
`,Ah=n.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,jh=n.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Mh=n.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Nh=n.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Ph=n.button`
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
`,Fh=n.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ih=n.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Lh=n.button`
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
`,Rh=n.button`
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
`,zh=n.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Bh=n.input`
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
`,Vh=n.span`
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
`,Hh=n.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Uh=n.button`
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
`,Wh=n.button`
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
`,Gh=n.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,Kh=n.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,qh=n.div`
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
`,Jh=n.button`
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

    ${({$active:e})=>e&&P`
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
`,Yh=n.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Xh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function Zh(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function Qh(e){return e.total>0?`${x(e.downloaded)} / ${x(e.total)}`:e.downloaded>0?x(e.downloaded):``}var $h=n.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,eg=n.div`
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
    box-shadow: var(--shadow-dialog);
`,tg=n.div`
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
`,ng=n.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,rg=n.pre`
    margin: 0;
    max-height: 260px;
    overflow: auto;
    font-family: var(--font-mono);
    font-size: 11px;
    line-height: 1.6;
    white-space: pre-wrap;
    color: var(--text-secondary);
`,ig=n.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,ag=n.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,og=n.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,sg=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,cg=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,lg=n.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,ug=n.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,dg=n.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,X=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Z=n.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,fg=n.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=n.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,pg=n.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=n.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,mg=n.span`
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
`,hg=n.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,gg=n.input`
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
`,_g=n.input`
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
`,vg=n.button`
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
`,yg=n.input`
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
`,bg=n.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,xg=n.button`
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
`,Sg=n.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Cg=n.button`
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
`,wg=n.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Tg=n.input`
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
`,Eg=n.button`
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
`,Dg=n.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Og=n.div`
    position: fixed;
    z-index: 2600;
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
`,kg=n.button`
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
`,Ag=n.span`
    position: relative;
    display: inline-flex;
`,jg=n.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Mg=n.button`
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
`,Ng=n.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Pg=n.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Fg=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Ig=n.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Lg=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Rg=n.button`
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
`,zg=n.div`
    position: relative;
    width: 102px;
    height: 58px;
`,Bg=n.button`
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
`,Vg=n.span`
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
`,Hg=n.button`
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
`,Ug=n.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,Wg=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,Gg=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Kg=n.input`
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
`,qg=n.button`
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
`,Jg=n.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,Yg=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,Xg=n.input`
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
`,Zg=n.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,Qg=n.button`
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
`,$g=n.input`
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
`,e_=n.div`
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
`,t_=n.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,n_=n.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,r_=n.button`
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
`,i_=n.button`
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
`,a_=n.button`
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
`,o_=n.span`
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
`,s_=n.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,c_=n.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,l_=n.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,u_=150,d_=2500,f_=3,p_=600;function m_({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:o,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:f,favoritePaths:m,onExtractArchive:h,showDetails:g=!0,videoAudio:_=!1,videoAutoplay:v=!1}){let y=p(),b=Qc(`gallery`),[S,C]=(0,R.useState)([]),[w,T]=(0,R.useState)(0),[E,ee]=(0,R.useState)(!0),[D,te]=(0,R.useState)(null),[O,k]=(0,R.useState)(!1),[ne,A]=(0,R.useState)([]),[j,re]=(0,R.useState)(()=>{let e=Gn(`yafm.preview.width`,320);return e>=220?e:320}),M=(0,R.useRef)([]),oe=(0,R.useRef)(0),N=(0,R.useRef)(!1),P=(0,R.useRef)(!0),se=(0,R.useRef)(0),F=(0,R.useRef)(null),ce=(0,R.useRef)(0),le=(0,R.useCallback)(async e=>{let t=++se.current;ee(!0),P.current=!0,te(null);try{let n=await Re(0,u_,e);if(t!==se.current)return;M.current=n.entries,oe.current=n.total,C(n.entries),T(n.total)}catch(e){t===se.current&&te(e instanceof Error?e.message:String(e))}finally{t===se.current&&(P.current=!1,ee(!1))}},[]);(0,R.useEffect)(()=>{le(!1)},[le]);let ue=(0,R.useCallback)(async()=>{if(P.current||N.current||M.current.length>=oe.current)return;let e=se.current;N.current=!0;try{let t=M.current,n=oe.current;for(let r=0;r<f_&&t.length<n;r++){let r=await Re(t.length,u_,!1);if(e!==se.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<u_)break}if(e!==se.current)return;M.current=t,oe.current=n,(0,R.startTransition)(()=>{C(t),T(n)})}catch{}finally{N.current=!1}},[]),de=(0,R.useCallback)(e=>{ce.current||=window.requestAnimationFrame(()=>{ce.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<d_&&ue()})},[ue]);(0,R.useEffect)(()=>{let e=F.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&ue()},{root:e.parentElement,rootMargin:`${d_}px 0px`});return t.observe(e),()=>t.disconnect()},[ue]),(0,R.useEffect)(()=>{if(S.length>=w)return;let e=window.setTimeout(()=>{let e=F.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<d_&&ue()},200);return()=>window.clearTimeout(e)},[S.length,w,ue]);let I=(0,R.useMemo)(()=>({path:``,parent:null,entries:S.map(h_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[S]),fe=(0,R.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),pe=(0,R.useCallback)(e=>{c?c(e):Se(e)},[c]),me=(0,R.useCallback)(e=>{let t=g_(e.modified);return{id:t,label:t}},[]),he=()=>{k(!0),le(!0).finally(()=>k(!1))},L=S.length<w,ge=(0,R.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:S.filter(e=>En(e.name,a)||En(e.path,a)),[S,a?.open,a?.query,a?.matchCase,a?.regex]),_e=(0,R.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:ge[Math.min(a.index,Math.max(0,ge.length-1))]?.path??null}:vn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,ge]);(0,R.useEffect)(()=>{s?.(ge.length)},[ge.length,s]);let ve=(0,R.useCallback)(e=>{A(e),l?.(e)},[l]),ye=e=>{re(e),Kn(`yafm.preview.width`,e)},z=ne.length>0?S.find(e=>e.path===ne[0])??null:null,be=z?.name.includes(`.`)?z.name.slice(z.name.lastIndexOf(`.`)+1).toUpperCase():`—`,xe=z&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(z.name)?y(`video_2`):y(`picture`),Ce=z?z.path.slice(0,Math.max(z.path.lastIndexOf(`\\`),z.path.lastIndexOf(`/`))):``,we=z?{name:z.name,path:z.path,isDirectory:!1,size:z.size,modified:z.modified,fields:[{label:y(`type`),value:xe},{label:y(`extension`),value:be},{label:y(`location`),value:Ce},{label:y(`full_path`),value:z.path},{label:y(`size`),value:x(z.size)},{label:y(`modified`),value:ie(z.modified)},{label:y(`created`),value:`—`}]}:null;return(0,J.jsxs)(__,{children:[(0,J.jsxs)(b_,{children:[(0,J.jsxs)(S_,{children:[(0,J.jsx)(`span`,{children:y(`gallery`)}),(0,J.jsx)(C_,{children:E?y(`scanning`):y(`shown_of_total_pictures`,{shown:S.length,total:w})})]}),(0,J.jsxs)(x_,{children:[(0,J.jsx)(w_,{onClick:he,title:y(`scan_the_folders_again`),type:`button`,children:(0,J.jsx)(T_,{$spinning:O,children:(0,J.jsx)(hi,{size:14})})}),b.available&&(0,J.jsx)(w_,{onClick:e=>b.open(e.clientX,e.clientY),title:y(`selection_menu`),type:`button`,children:(0,J.jsx)(ba,{size:14})})]})]}),D&&(0,J.jsx)(D_,{children:D}),!D&&!E&&w===0&&(0,J.jsx)(D_,{children:y(`no_pictures_found`)}),!D&&(E||w>0)&&(0,J.jsxs)(v_,{children:[(0,J.jsx)(y_,{children:(0,J.jsx)(fl,{confirmDelete:n,find:_e,selectMatchesToken:o,listing:E&&S.length===0?null:I,loading:E,error:null,view:fe,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ve,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:pe,onOpenFile:pe,onRefresh:he,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:f,favoritePaths:m,onExtractArchive:h,groupOf:me,onGridScroll:de,gridFooter:(0,J.jsx)(E_,{$space:L?p_:1,ref:F}),allowBackgroundMenu:!1})}),g&&(0,J.jsx)(rs,{emptyNote:y(`nothing_selected`),info:we,onWidth:ye,selectionNote:ne.length>1?ae(y,ne.length,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:_,videoAutoplay:v,width:j})]})]})}function h_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function g_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(k(),{weekday:`long`}):t.toLocaleDateString(k(),{year:`numeric`,month:`long`,day:`numeric`})}var __=n.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,v_=n.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,y_=n.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,b_=n.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,x_=n.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,S_=n.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,C_=n.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,w_=n.button`
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
`,T_=n.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,E_=n.div`
    height: ${({$space:e})=>e}px;
`,D_=n.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function O_({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:d,onOpenView:f}){let[m,h]=(0,R.useState)([]),g=p(),[_,v]=(0,R.useState)(null),S=Pn();(0,R.useEffect)(()=>{Je().then(e=>{v(e),h(Ms(e).filter(e=>e.pinned))},()=>{v(null),h([])})},[s]),(0,R.useEffect)(()=>{if(!c.available)return;let e=m.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||o).filter(e=>e.length>0);return c.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>c.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[m,o]);let C=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>N(e.path,t));return{name:_?.placeNames?.[t]??n?.name??(y(t)||t),path:t,kind:`folder`,icon:n?.icon??_?.placeIcons?.[t]??null}}),w=a===`files`;return(0,J.jsxs)(P_,{children:[(0,J.jsxs)(F_,{children:[!u.includes(`home`)&&(0,J.jsxs)(B_,{$active:a===`home`,onClick:e=>f(`home`,Wt(e)),title:g(`overview`),type:`button`,children:[(0,J.jsx)(Ki,{}),(0,J.jsx)(H_,{children:g(`overview`)})]}),!u.includes(`recycle`)&&(0,J.jsxs)(B_,{$active:a===`recycle`,onClick:e=>f(`recycle`,Wt(e)),title:g(`recycle_bin`),type:`button`,children:[(0,J.jsx)(Ei,{}),(0,J.jsx)(H_,{children:g(`recycle_bin`)})]}),!u.includes(`gallery`)&&(0,J.jsxs)(B_,{$active:a===`gallery`,onClick:e=>f(`gallery`,Wt(e)),title:g(`gallery`),type:`button`,children:[(0,J.jsx)(Pi,{}),(0,J.jsx)(H_,{children:g(`gallery`)})]})]}),m.map(e=>(0,J.jsxs)(L_,{children:[(0,J.jsxs)(B_,{as:`div`,$active:!1,children:[(0,J.jsx)(V_,{children:(0,J.jsx)(Ps,{panel:e,size:16})}),(0,J.jsx)(H_,{children:g(e.title)})]}),(0,J.jsx)(R_,{children:(0,J.jsxs)(z_,{children:[e.kind===`quick`&&C(e).map(e=>(0,J.jsxs)(B_,{$active:w&&N(i,e.path),onClick:t=>d(e.path,Wt(t)),title:e.path,type:`button`,children:[(0,J.jsx)(Fs,{place:e}),(0,J.jsx)(H_,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=Fn(S,e.path);return(0,J.jsxs)(B_,{$active:w&&N(i,e.path),onClick:t=>e.isDirectory?d(e.path,Wt(t)):void Se(e.path),title:e.path,type:`button`,children:[t&&S.useIcons?(0,J.jsx)(Fs,{place:t}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,J.jsx)(H_,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,J.jsx)(j_,{historyVersion:l,onNavigate:d}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,J.jsxs)(B_,{$active:w&&N(i,e.name),onClick:t=>d(e.name,Wt(t)),title:e.name,type:`button`,children:[(0,J.jsx)(fi,{}),(0,J.jsxs)(H_,{children:[re(e),(0,J.jsxs)(U_,{children:[x(e.freeSpace),` free`]}),(0,J.jsx)(W_,{children:(0,J.jsx)(G_,{$used:t,$tone:b(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,J.jsx)(M_,{onNavigate:d,path:e.path||o})]})})]},e.id)),!u.includes(`settings`)&&(0,J.jsx)(I_,{children:(0,J.jsxs)(B_,{$active:a===`settings`,onClick:e=>f(`settings`,Wt(e)),title:g(`settings`),type:`button`,children:[(0,J.jsx)(bi,{}),(0,J.jsx)(H_,{children:g(`settings`)})]})})]})}var k_=10,A_=40;function j_({historyVersion:e=0,onNavigate:t}){let n=p(),[r,i]=(0,R.useState)(null),a=Pn();return(0,R.useEffect)(()=>{Be().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Fn(a,e.path);return(0,J.jsxs)(B_,{$active:!1,onClick:n=>t(e.path,Wt(n)),title:ae(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,J.jsx)(Fs,{place:r}):(0,J.jsx)($s,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,J.jsx)(H_,{children:r?.name||e.name})]},e.path)})}function M_({path:e,onNavigate:t}){let[n,r]=(0,R.useState)(null);(0,R.useEffect)(()=>{e&&(r(null),Ce(e,!1).then(r,()=>r(null)))},[e]),(0,R.useEffect)(()=>{if(e&&c.available)return c.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&N(n.data.path,e)&&Ce(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,k_),o=i.filter(e=>!e.isDirectory).slice(0,A_);return(0,J.jsxs)(J.Fragment,{children:[a.map(e=>(0,J.jsx)(N_,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,J.jsx)(N_,{entry:e,onNavigate:t},e.fullPath))]})}function N_({entry:e,onNavigate:t}){let n=Pn(),r=Fn(n,e.fullPath);return(0,J.jsxs)(B_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Wt(n)):void Se(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,J.jsx)(Fs,{place:r}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,J.jsx)(H_,{children:r?.name||e.name})]})}var P_=n.aside`
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
        box-shadow: 14px 0 36px var(--shadow-menu), 0 0 28px rgba(var(--accent-secondary-rgb), 0.06);
        overflow-y: auto;
        scrollbar-width: none;
    }

    &:not(:hover) ${()=>U_},
    &:not(:hover) ${()=>W_} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,F_=n.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,I_=n(F_)`
    margin-top: auto;
`,L_=n.div`
    display: flex;
    flex-direction: column;
`,R_=n.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${P_}:hover ${L_}:hover > & {
        grid-template-rows: 1fr;
    }
`,z_=n.div`
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
`,B_=n.button`
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
`,V_=n.span`
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
`,H_=n.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,U_=n.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,W_=n.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,G_=n.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,K_=n.span`
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
`;function q_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=p(),a=(0,R.useRef)(null),o=e.filter(e=>e.state===`running`).length,s=e.length;return(0,R.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,J.jsxs)(Y_,{ref:a,children:[(0,J.jsxs)(X_,{$active:n,onClick:()=>r(!n),title:o>0?ae(i,o,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,J.jsx)(Ti,{size:13}),s>0&&(0,J.jsx)(K_,{children:s>9?`9+`:s})]}),n&&(0,J.jsxs)(Z_,{children:[(0,J.jsxs)(Q_,{children:[(0,J.jsx)($_,{children:i(`status_center`)}),(0,J.jsxs)(ev,{children:[(0,J.jsx)(tv,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,J.jsx)(nv,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]})]}),e.length===0?(0,J.jsx)(iv,{children:i(`no_operations_yet`)}):(0,J.jsx)(rv,{children:e.map(e=>(0,J.jsx)(J_,{task:e},e.id))})]})]})}function J_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,J.jsxs)(av,{children:[(0,J.jsxs)(ov,{children:[(0,J.jsx)(sv,{$state:e.state,children:e.state===`done`?(0,J.jsx)(Di,{size:10}):e.state===`failed`?(0,J.jsx)(Oi,{size:10}):(0,J.jsx)(cv,{})}),(0,J.jsx)(lv,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,J.jsxs)(uv,{children:[x(e.bytesDone),` / `,x(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,J.jsxs)(uv,{children:[e.done,` / `,e.total]})]}),i&&(0,J.jsx)(dv,{children:(0,J.jsx)(fv,{$percent:r,$indeterminate:t===0})}),e.error&&(0,J.jsx)(pv,{children:e.error})]})}var Y_=n.div`
    position: relative;
    display: flex;
`,X_=n.button`
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
`,Z_=n.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Ha}
    ${to}
`,Q_=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,$_=n.span`
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
`,ev=n.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,tv=n.button`
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
`,nv=n.button`
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
`,rv=n.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,iv=n.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,av=n.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${no}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,ov=n.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,sv=n.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,cv=n.span`
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
`,lv=n.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uv=n.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,dv=n.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,fv=n.div`
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
`,pv=n.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function mv(){return c.available?(await c.request(`fs.history.list`)).entries:[]}async function hv(e){return c.available?(await c.request(`fs.history.undoTo`,{id:e})).ok:!1}function gv(){let e=p(),[t,n]=(0,R.useState)(!1),[r,i]=(0,R.useState)([]),[a,o]=(0,R.useState)(!1),s=(0,R.useRef)(null),c=()=>void mv().then(i,()=>i([]));(0,R.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await hv(e),c()}finally{o(!1)}};return(0,J.jsxs)(yv,{ref:s,children:[(0,J.jsx)(bv,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,J.jsx)(wi,{size:14})}),t&&(0,J.jsxs)(xv,{children:[(0,J.jsxs)(Sv,{children:[(0,J.jsx)(Cv,{children:e(`history`)}),(0,J.jsx)(wv,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]}),r.length===0?(0,J.jsx)(Nv,{children:e(`no_operations_yet`)}):(0,J.jsx)(Tv,{children:r.map(t=>(0,J.jsxs)(Ev,{children:[(0,J.jsxs)(Dv,{children:[(0,J.jsxs)(Ov,{children:[(0,J.jsx)(vv,{label:t.label}),_v(e,t.label)]}),(0,J.jsx)(kv,{children:te(t.at)})]}),t.paths.length>0&&(0,J.jsxs)(Av,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,J.jsx)(jv,{children:(0,J.jsx)(Mv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function _v(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function vv({label:e}){return e.startsWith(`delete`)?(0,J.jsx)(Ei,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,J.jsx)(pa,{size:13}):e.startsWith(`rename`)?(0,J.jsx)(qi,{size:13}):e.startsWith(`compress`)?(0,J.jsx)(Li,{size:13}):e.startsWith(`new`)?(0,J.jsx)(gi,{size:13}):(0,J.jsx)(vi,{size:13})}var yv=n.div`
    position: relative;
    display: flex;
`,bv=n.button`
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
`,xv=n.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Ha}
    ${to}
`,Sv=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Cv=n.span`
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
`,wv=n.button`
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
`,Tv=n.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Ev=n.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Dv=n.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Ov=n.span`
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
`,kv=n.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Av=n.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,jv=n.div`
    display: flex;
    justify-content: flex-end;
`,Mv=n.button`
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
`,Nv=n.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function Pv({currentFolder:e}){let t=p(),[n,r]=(0,R.useState)(!1),[i,a]=(0,R.useState)(null),[o,s]=(0,R.useState)(!1),c=(0,R.useRef)(null);(0,R.useEffect)(()=>{if(!n)return;let e=()=>void Dc().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{c.current?.contains(e.target)||r(!1)},o=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,o),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,o)}},[n]),(0,R.useEffect)(()=>{let e=()=>void Dc().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let l=async e=>{s(!0);try{a(await e())}finally{s(!1)}},u=i?.shares.some(t=>N(t.path,e))??!1;return(0,J.jsxs)(Fv,{ref:c,children:[(0,J.jsxs)(Iv,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,J.jsx)(sa,{size:15}),i&&i.shares.length>0&&(0,J.jsx)(K_,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,J.jsxs)(Lv,{children:[(0,J.jsxs)(Rv,{children:[(0,J.jsx)(zv,{children:t(`share`)}),(0,J.jsx)(Bv,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]}),(0,J.jsxs)(Vv,{children:[(0,J.jsxs)(Hv,{children:[(0,J.jsx)(ji,{size:15}),(0,J.jsxs)(`span`,{children:[(0,J.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,J.jsx)(Uv,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,J.jsx)(Wv,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,J.jsxs)(Gv,{children:[(0,J.jsxs)(Kv,{children:[(0,J.jsx)(qv,{title:e.path,children:e.name}),(0,J.jsx)(Yv,{disabled:o,onClick:()=>void l(()=>kc(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]}),(0,J.jsx)(Jv,{title:e.path,children:e.path}),(0,J.jsxs)(Xv,{children:[(0,J.jsxs)(Zv,{$active:e.mode===`client`,onClick:()=>void l(()=>Ac(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,J.jsx)(ji,{size:11}),t(`app`)]}),(0,J.jsxs)(Zv,{$active:e.mode===`web`,onClick:()=>void l(()=>Ac(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,J.jsx)(la,{size:11}),t(`web`)]})]})]},e.id)),(0,J.jsxs)(Qv,{disabled:o||e.length===0||u,onClick:()=>void l(()=>Oc(e,`client`)),title:u?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,J.jsx)(gi,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,J.jsxs)($v,{children:[(0,J.jsxs)(ey,{children:[(0,J.jsx)(la,{size:12}),t(`browser_access`)]}),i.urls.map(e=>(0,J.jsx)(ty,{onClick:()=>void F(e),type:`button`,children:e},e)),(0,J.jsx)(Uv,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Fv=n.div`
    position: relative;
    display: flex;
`,Iv=n.button`
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
`,Lv=n.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Ha}
    ${to}
`,Rv=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,zv=n.span`
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
`,Bv=n.button`
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
`,Vv=n.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,Hv=n.div`
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
`,Uv=n.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,Wv=n.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Gv=n.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Kv=n.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,qv=n.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jv=n.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yv=n.button`
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
`,Xv=n.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Zv=n.button`
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
`,Qv=n.button`
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
`,$v=n.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,ey=n.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,ty=n.button`
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
`;function ny({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=p(),[s,c]=(0,R.useState)(!1),l=(0,R.useRef)(null);(0,R.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,R.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=rl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,J.jsxs)(ry,{ref:l,children:[(0,J.jsx)(iy,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,J.jsx)(Ci,{size:14}):(0,J.jsx)(Si,{size:14})}),s&&(0,J.jsxs)(ay,{children:[(0,J.jsx)(oy,{children:o(`view`)}),(0,J.jsxs)(cy,{children:[(0,J.jsxs)(ly,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,J.jsx)(Si,{size:12}),` `,o(`list`)]}),(0,J.jsxs)(ly,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,J.jsx)(Ci,{size:12}),` `,o(`grid`)]})]}),(0,J.jsx)(oy,{children:o(`list_icon_size`)}),(0,J.jsxs)(uy,{children:[(0,J.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,J.jsxs)(dy,{children:[e.iconSize,`px`]})]}),(0,J.jsx)(oy,{children:o(`grid_size`)}),(0,J.jsxs)(uy,{children:[(0,J.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,J.jsxs)(dy,{children:[e.gridSize,`px`]})]}),(0,J.jsxs)(oy,{children:[o(`columns`),(0,J.jsx)(Rm,{}),(0,J.jsx)(sy,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),rl.map(e=>(0,J.jsxs)(fy,{children:[(0,J.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,J.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,J.jsxs)(fy,{children:[(0,J.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,J.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,J.jsxs)(oy,{children:[o(`preview_panel`),(0,J.jsx)(Rm,{})]}),(0,J.jsxs)(fy,{children:[(0,J.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,J.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var ry=n.div`
    position: relative;
    display: flex;
    height: 100%;
`,iy=n.button`
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
`,ay=n.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Ha}
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
`,oy=n.div`
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
`,sy=n.button`
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
`,cy=n.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,ly=n.button`
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
`,uy=n.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,dy=n.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,fy=n.label`
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
`,py=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),my=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),hy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),gy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,J.jsx)(`path`,{d:`M2 5h6`})}),_y=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,J.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),vy=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,J.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,J.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function yy({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:m,activityOpen:h,onActivityOpenChange:g,trayCount:_,trayVisible:v,onToggleTray:y,split:b,canSplit:x,onToggleSplit:S,details:C,canDetails:w,onToggleDetails:T,shortcuts:E,currentFolder:te}){let O=p(),k=D(),ne=ee(),[A,j]=(0,R.useState)({left:!1,right:!1}),[re,ie]=(0,R.useState)(null),[ae,M]=(0,R.useState)(null),oe=(0,R.useRef)(null),N=(0,R.useRef)(null),P=(0,R.useRef)(null),se=(0,R.useCallback)(()=>{let e=N.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;j(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,R.useEffect)(()=>{se();let e=N.current;if(!e)return;let t=new ResizeObserver(se);return t.observe(e),()=>t.disconnect()},[se,e.length]),(0,R.useEffect)(()=>()=>{oe.current&&window.clearTimeout(oe.current.timer)},[]),(0,R.useEffect)(()=>{P.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let F=e=>N.current?.scrollBy({left:e,behavior:`smooth`}),ce=()=>{oe.current&&window.clearTimeout(oe.current.timer),oe.current=null,M(null)};return(0,J.jsxs)(Cy,{children:[(0,J.jsx)(wy,{children:(0,J.jsx)(ji,{size:19})}),(0,J.jsxs)(Ty,{children:[A.left&&(0,J.jsx)(Dy,{onClick:()=>F(-180),title:O(`scroll_tabs_left`),type:`button`,children:(0,J.jsx)(py,{})}),(0,J.jsx)(Ey,{onScroll:se,onWheel:e=>{let t=N.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:N,children:e.map(e=>(0,J.jsxs)(Oy,{$active:e.id===t,$dragging:re===e.id,$dropTarget:ae===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!nc(t.dataTransfer)||!by(e)||(t.preventDefault(),oe.current?.id===e.id))return;ce(),M(e.id);let r=window.setTimeout(()=>{n(e.id),oe.current=null},500);oe.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(oe.current?.id===e.id||ae===e.id)&&ce()},onDragEnd:()=>{ie(null),ce()},onDragOver:t=>{(re||nc(t.dataTransfer)&&by(e))&&(t.preventDefault(),nc(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>ie(e.id),onDrop:t=>{if(t.preventDefault(),re)a(re,e.id);else if(by(e)&&nc(t.dataTransfer)){let{paths:r,move:i}=rc(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}ie(null),ce()},onClick:()=>n(e.id),ref:e.id===t?P:void 0,title:e.path||e.title,type:`button`,children:[(0,J.jsx)(xy,{tab:e}),(0,J.jsx)(ky,{children:e.title}),e.partner&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ay,{children:`|`}),(0,J.jsx)(Sy,{place:e.partner.place}),(0,J.jsx)(ky,{children:e.partner.title})]}),(0,J.jsx)(jy,{"data-shortcut":Kt(E.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:O(`close_tab`),children:(0,J.jsx)(hy,{})})]},e.id))}),A.right&&(0,J.jsx)(Dy,{onClick:()=>F(180),title:O(`scroll_tabs_right`),type:`button`,children:(0,J.jsx)(my,{})}),(0,J.jsx)(My,{"data-shortcut":Kt(E.newTab),onClick:i,title:O(`new_tab`),type:`button`,children:(0,J.jsx)(gi,{size:13})})]}),(0,J.jsx)(Ny,{...ne}),(0,J.jsxs)(Py,{children:[(0,J.jsx)(Iy,{$active:b,"data-shortcut":Kt(E.splitView),disabled:!x,onClick:S,title:O(b?`close_split_view`:`split_view`),type:`button`,children:(0,J.jsx)(va,{size:15})}),(0,J.jsx)(Iy,{$active:C,disabled:!w,onClick:T,title:O(C?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,J.jsx)(ya,{size:15})}),(0,J.jsxs)(Fy,{$active:v,onClick:y,title:O(v?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,J.jsx)(ca,{size:14}),_>0&&(0,J.jsx)(K_,{children:_>9?`9+`:_})]}),(0,J.jsx)(gv,{}),(0,J.jsx)(Pv,{currentFolder:te}),(0,J.jsx)(q_,{tasks:f,onClear:m,open:h,onOpenChange:g}),(0,J.jsx)(ny,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,J.jsx)(Ly,{onClick:k.minimize,title:O(`minimize`),type:`button`,children:(0,J.jsx)(gy,{})}),(0,J.jsx)(Ly,{onClick:k.toggleMaximize,title:k.maximized?O(`restore`):O(`maximize`),type:`button`,children:k.maximized?(0,J.jsx)(vy,{}):(0,J.jsx)(_y,{})}),(0,J.jsx)(Ry,{onClick:k.close,title:O(`close`),type:`button`,children:(0,J.jsx)(hy,{})})]})]})}function by(e){return e.kind===`files`&&(!C(e.path)||T(e.path))}function xy({tab:e}){switch(e.kind){case`home`:return(0,J.jsx)(li,{size:13});case`settings`:return(0,J.jsx)(bi,{size:13});case`recycle`:return(0,J.jsx)(Ei,{size:13});default:return e.archive?(0,J.jsx)(Li,{size:13}):(0,J.jsx)(Sy,{place:e.place})}}function Sy({place:e}){return e?(0,J.jsx)(Fs,{place:e,size:13}):(0,J.jsx)(ui,{size:13})}var Cy=n.header`
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
`,wy=n.span`
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
`,Ty=n.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Ey=n.div`
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
`,Dy=n.button`
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
`,Oy=n.button`
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
`,ky=n.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ay=n.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,jy=n.span`
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
`,My=n.button`
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
`,Ny=n.div`
    flex: 1;
    min-width: 28px;
`,Py=n.div`
    display: flex;
    flex-shrink: 0;
`,Fy=n.button`
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
`,Iy=n.button`
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
`,Ly=n.button`
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
`,Ry=n(Ly)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function zy(){let[e,t]=(0,R.useState)(null),n=(0,R.useRef)(null),r=(0,R.useRef)(void 0);return(0,R.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Va.createPortal)((0,J.jsx)(By,{tooltip:e}),document.body):null}function By({tooltip:e}){let t=(0,R.useRef)(null),[n,r]=(0,R.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,R.useState)(()=>e.bottom+6);return(0,R.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,J.jsxs)(Vy,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,J.jsx)(Hy,{children:e.text}),e.shortcut&&(0,J.jsx)(Uy,{children:e.shortcut})]})}var Vy=n.div`
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
    box-shadow: var(--shadow-float);
    pointer-events: none;
    ${no}
`,Hy=n.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Uy=n.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Wy={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`};function Gy({deviceName:e,code:t,onAccept:n,onReject:r}){let i=p(),a=(0,R.useRef)(null);return(0,R.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Va.createPortal)((0,J.jsx)(Ky,{children:(0,J.jsxs)(qy,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsxs)(Jy,{children:[(0,J.jsx)(sa,{size:15}),i(`pair_for_sharing`)]}),(0,J.jsx)(Yy,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,J.jsx)(Xy,{children:t}),(0,J.jsx)(Zy,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,J.jsxs)(Qy,{children:[(0,J.jsx)($y,{onClick:r,type:`button`,children:i(`reject`)}),(0,J.jsx)(eb,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var Ky=n.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${no}
`,qy=n.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${Za}
`,Jy=n.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Yy=n.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,Xy=n.div`
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
`,Zy=n.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Qy=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,$y=n.button`
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
`,eb=n($y)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,tb=0,nb=new Set;function rb(e){nb.add(e),c.send({type:`app.navigate.done`,payload:{path:e}})}var ib=20,ab=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function ob(e){return e.history[e.index]??Mp(`home`)}function sb(e){return Np(ob(e))??`files`}function cb(e){let t=ob(e);return Np(t)?``:e.listing?.path||t}function lb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||sb(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function ub(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function db(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||z.iconSize,gridSize:e.view?.gridSize||t.gridSize||z.gridSize,sort:e.view?.sort??z.sort,sortDescending:e.view?.sortDescending??z.sortDescending,columns:t.columns??be.columns??[]}}function fb(e=Mp(`home`)){return tb+=1,{id:`tab-${tb}`,listing:null,loading:!Np(e),error:null,history:[e],index:0,fresh:!0,view:null}}function pb(e){return e instanceof Error?e.message:String(e)}function mb(e){let t=Rc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return zc(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function hb(e){let t=y(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function gb(e){return C(e)?Zt(e):void 0}function _b(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return ae(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:x(n)})}function vb(){let e=p(),[n,a]=(0,R.useState)(()=>[fb()]),[o,s]=(0,R.useState)(()=>n[0].id),[l,u]=(0,R.useState)(null),[d,m]=(0,R.useState)(()=>{let e=Gn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[g,_]=(0,R.useState)([]),[v,b]=(0,R.useState)([]),[x,S]=(0,R.useState)(null),[ee,D]=(0,R.useState)(null),[te,O]=(0,R.useState)(null),k=t(),[ne,re]=(0,R.useState)(_n),[ie,ae]=(0,R.useState)(0),[M,oe]=(0,R.useState)(0),[P,F]=(0,R.useState)(0),[ce,le]=(0,R.useState)(_n),[de,I]=(0,R.useState)(0),[fe,pe]=(0,R.useState)(0),[me,he]=(0,R.useState)(0),[L,ge]=(0,R.useState)(0),_e=(0,R.useRef)(L);_e.current=L;let[ye,xe]=(0,R.useState)([]),[De,Me]=(0,R.useState)(10),[V,Ne]=(0,R.useState)(null),Pe=i(h(V?.themeMode)),Fe=(0,R.useMemo)(()=>(V?.favorites??[]).map(e=>w(e.path)),[V?.favorites]),[Ie,Le]=(0,R.useState)(0),[H,Re]=(0,R.useState)(Vt),[Be,He]=(0,R.useState)(0),[Ue,We]=(0,R.useState)(0),[Ke,qe]=(0,R.useState)(0),[Ye,Xe]=(0,R.useState)(!0),[Ze,Qe]=(0,R.useState)(()=>{let e=Gn(`yafm.preview.width`,320);return e>=220?e:320}),[$e,et]=(0,R.useState)(null),[tt,nt]=(0,R.useState)(null),[at,ot]=(0,R.useState)(`primary`),[st,ct]=(0,R.useState)(null),[lt,ut]=(0,R.useState)(null),[dt,U]=(0,R.useState)(null),[ft,pt]=(0,R.useState)(null),[ht,vt]=(0,R.useState)({primary:0,secondary:0}),[St,wt]=(0,R.useState)({primary:null,secondary:null}),[Tt,Et]=(0,R.useState)(null),[Ot,kt]=(0,R.useState)([]),[At,jt]=(0,R.useState)(!1),Mt=(0,R.useRef)([]),Ft=(0,R.useRef)([]),[It,Lt]=(0,R.useState)([]),[Ht,qt]=(0,R.useState)(!1),Yt=(0,R.useMemo)(()=>Ht?new Set(It.map(e=>e.path)):new Set,[It,Ht]),[Xt,tn]=(0,R.useState)(!1),[nn,W]=(0,R.useState)([]),[rn,sn]=(0,R.useState)(null),cn=(0,R.useRef)(0),[ln,un]=(0,R.useState)(()=>{let e=qn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?ub({x:e.x,y:e.y}):ub({x:Math.max(20,window.innerWidth-340),y:110})}),dn=(0,R.useCallback)(()=>{un(e=>ub(e)),tn(!0)},[]),G=n.find(e=>e.id===o)??n[0],K=sb(G),q=ob(G),fn=cb(G),pn=K===`files`?G.listing?.parent??mb(fn):null,mn=G.splitWith?n.find(e=>e.id===G.splitWith):void 0,hn=K===`files`&&mn!==void 0,gn=mn?cb(mn):``,vn=mn?mn.listing?.parent??mb(gn):null,yn=hn&&mn&&at===`secondary`?mn:G,bn=V?.defaultView??be,xn=db(yn,bn);(0,R.useEffect)(()=>{r(V?.accentColor,V?.secondaryColor,Pe)},[V?.accentColor,V?.secondaryColor,Pe]),(0,R.useEffect)(()=>{Hm(V?.fonts)},[V?.fonts]),(0,R.useEffect)(()=>{j(V?.timeFormat,V?.timeFormatPattern)},[V?.timeFormat,V?.timeFormatPattern]),(0,R.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!V?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[V?.backgroundSource]),(0,R.useEffect)(()=>(ve(e=>new Promise(t=>{sn({id:++cn.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,R.useEffect)(()=>{ot(`primary`)},[o]),(0,R.useEffect)(()=>{le(_n),pe(0),he(0)},[K]),(0,R.useEffect)(()=>{pe(0)},[ce.query,ce.matchCase,ce.regex]),(0,R.useEffect)(()=>{pe(e=>me===0?0:Math.min(e,me-1))},[me]);let Sn=xn.columns.includes(`linkCount`),Cn=(0,R.useMemo)(()=>{let e={},t=Ms(V),n={};for(let[e,t]of Object.entries(V?.placeNames??{}))n[w(e)]=t;for(let t of g)e[w(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=w(t),i=g.find(e=>w(e.path)===r);e[r]={name:n[r]??i?.name??(y(t)||t),path:t,kind:`folder`,icon:i?.icon??V?.placeIcons?.[t]??null}}return e},[g,V]),wn=(0,R.useMemo)(()=>({places:Cn,useIcons:V?.systemIcons===!1}),[Cn,V?.systemIcons]),Tn=V?.defaultView?.showImages??!0,Dn=V?.defaultView?.imageStripHeight??be.imageStripHeight,On=K===`home`?(0,J.jsx)(Ki,{size:13}):K===`settings`?(0,J.jsx)(bi,{size:13}):K===`recycle`?(0,J.jsx)(Ei,{size:13}):K===`gallery`?(0,J.jsx)(Pi,{size:13}):void 0,kn=ne.open&&ne.query.length>0,An=(0,R.useMemo)(()=>kn&&yn.listing?yn.listing.entries.filter(e=>En(e.isDirectory?In(wn,e.fullPath,e.name):e.name,ne)).map(e=>e.fullPath):[],[kn,ne,yn.listing,wn]);(0,R.useEffect)(()=>{ae(0)},[ne.query,ne.matchCase,ne.regex,yn.listing?.path]);let jn=An.length===0?-1:Math.min(ie,An.length-1),Mn=(0,R.useCallback)(()=>{re(e=>({...e,open:!1,query:``})),ae(0)},[]),Pn=(0,R.useCallback)(()=>{re(e=>({...e,open:!0})),oe(e=>e+1)},[]),Ln=(0,R.useCallback)(()=>{le(e=>({...e,open:!0})),I(e=>e+1)},[]),Rn=(0,R.useCallback)(()=>{le(_n),pe(0),he(0)},[]),zn=(0,R.useCallback)(e=>{pe(t=>me===0?0:(Math.min(t,me-1)+e+me)%me)},[me]),Bn=(0,R.useCallback)(e=>{re(t=>({...t,open:!0,query:t.open?t.query+e:e})),oe(e=>e+1)},[]),Vn=(0,R.useCallback)(e=>{ae(t=>An.length===0?0:(Math.min(t,An.length-1)+e+An.length)%An.length)},[An.length]),Hn=(0,R.useRef)({tabs:n,activeId:o,activePane:at});Hn.current={tabs:n,activeId:o,activePane:at};let Un=(0,R.useRef)(V);Un.current=V;let Wn=(0,R.useRef)(!1),Yn=(0,R.useRef)([]),Xn=(0,R.useCallback)((e,t)=>{a(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Zn=(0,R.useRef)(new Map),Qn=(0,R.useCallback)(e=>{let t=(Zn.current.get(e)??0)+1;return Zn.current.set(e,t),()=>Zn.current.get(e)===t},[]),$n=(0,R.useCallback)((e,t)=>{c.available&&t&&e===lb(Hn.current)&&c.send({type:`fs.focus`,payload:{path:t}})},[]),er=(0,R.useCallback)(async(e,t,n)=>{if(!(t&&Lc(t)))try{let r=await B(t,Sn);if(!n()||!r.listing)return;Xn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[Sn,Xn]),tr=(0,R.useCallback)(async(e,t,n=!1)=>{let r=Qn(e);Mn(),$n(e,t);let i=!n||!Hn.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Xn(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&N(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&er(e,t,r);let o=t&&Lc(t)?await Bc(t):await Ce(t,!0,Sn,_e.current,t?gb(t):void 0);if(!r())return;Xn(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!Lc(o.path)&&Ve(o.path).then(()=>Le(e=>e+1))}catch(i){if(!r())return;let a=Hn.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?cb(a):``,s=mb(o),c=pb(i);if(o&&en(c)){let i=E(o),a=await ja(i,!!Zt(i));if(a){Qt(i,a),r()&&tr(e,t,n);return}}Xn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Qn,Sn,Xn,$n,Mn,er]),nr=(0,R.useCallback)((e,t)=>{let n=Pp(t);n&&(Np(n)?(Mn(),Qn(e),Xn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):tr(e,n))},[Qn,tr,Xn,Mn]),rr=(0,R.useCallback)(async(e,t,n)=>{if(Mn(),Np(t)){Qn(e),Xn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Qn(e);$n(e,t),Xn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Lc(t)||er(e,t,r);let n=Lc(t)?await Bc(t):await Ce(t,!0,Sn,_e.current,gb(t));if(!r())return;Xn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(en(pb(i))){let i=E(t),a=await ja(i,!!Zt(i));if(a){Qt(i,a),r()&&rr(e,t,n);return}}Xn(e,()=>({listing:{path:t,parent:mb(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:pb(i)}))}},[Qn,Sn,Xn,$n,Mn,er]),ir=(0,R.useCallback)((e,t=!0)=>{let n=fb(e??Mp(`home`));return a(e=>[...e,n]),t&&s(n.id),e&&!Np(e)&&tr(n.id,e),n.id},[tr]),ar=(0,R.useCallback)(e=>{for(let t of Hn.current.tabs)sb(t)===`files`&&N(cb(t),e)&&tr(t.id,e,!0)},[tr]),or=(0,R.useCallback)((e,t)=>{let n=y(t);for(let r of Hn.current.tabs)r.listing?.entries.some(t=>N(t.fullPath,e))&&Xn(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>N(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[Xn]),sr=(0,R.useRef)([]);(0,R.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&C(n)&&e.add(w(E(n)))}let t=sr.current.filter(t=>!e.has(t));sr.current=[...e],t.length>0&&Ee(t)},[n]);let cr=(0,R.useCallback)((e,t=!1)=>{t?ir(Mp(e)):nr(Hn.current.activeId,Mp(e))},[ir,nr]),lr=(0,R.useCallback)(e=>{let{tabs:t,activeId:n}=Hn.current,r=t.find(t=>t.id===e),i=t.filter(t=>t.id!==e&&t.id!==r?.splitWith);if(r&&!r.hidden&&(Ft.current.push(ob(r)),Ft.current.length>ib&&Ft.current.shift()),i.length===0){let e=fb();a([e]),s(e.id);return}let o=t.findIndex(t=>t.id===e);a(i),n===e&&s(i[Math.min(o,i.length-1)].id)},[]),ur=(0,R.useCallback)(()=>{let e=Ft.current.pop();if(!e)return;let t={...fb(e),fresh:!1};a(e=>[...e,t]),s(t.id),sb(t)===`files`&&tr(t.id,cb(t))},[tr]),dr=(0,R.useCallback)((e,t=!1)=>{t?ir(e):nr(lb(Hn.current),e??Mp(`home`))},[nr,ir]),fr=(0,R.useCallback)(e=>{let{tabs:t,activeId:n}=Hn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;s(r[i].id)},[]),pr=(0,R.useCallback)(()=>{let{tabs:e,activeId:t}=Hn.current,n=e.find(e=>e.id===t);if(!n||sb(n)!==`files`)return;let r=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(r){a(e=>e.filter(e=>e.id!==r.id)),Xn(t,()=>({splitWith:void 0})),ot(`primary`);return}let i=cb(n),o={...fb(i),hidden:!0};a(e=>[...e,o]),Xn(t,()=>({splitWith:o.id})),tr(o.id,i),ot(`primary`)},[tr,Xn]),mr=(0,R.useCallback)(e=>{Qe(e),Kn(`yafm.preview.width`,e)},[]),hr=hn?at===`secondary`?tt??$e:$e??tt:$e,gr=(0,R.useRef)(null),_r=e=>{e.preventDefault();let t=gr.current?.getBoundingClientRect();if(!t)return;let n=Ye?Ze:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);m(n),Kn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},vr=(e,t,n)=>{t&&ct({x:e.clientX,y:e.clientY,directory:t,refresh:n})},yr=(0,R.useCallback)((e,t)=>{vt(n=>n[e]===t?n:{...n,[e]:t})},[]),br=(0,R.useCallback)(e=>yr(`primary`,e),[yr]),xr=(0,R.useCallback)(e=>yr(`secondary`,e),[yr]),Sr=(e,t)=>{ht[e]!==0&&wt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Cr=async(e,t=!1)=>{let n=st;if(ct(null),!n)return;let r=e===null?await Ct(n.directory,t):await Dt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Mn(),Et(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},wr=(0,R.useCallback)(()=>{let{tabs:e}=Hn.current,t=e.find(e=>e.id===lb(Hn.current));t&&t.index>0&&rr(t.id,t.history[t.index-1],t.index-1)},[rr]),Tr=(0,R.useCallback)(()=>{let{tabs:e}=Hn.current,t=e.find(e=>e.id===lb(Hn.current));t&&t.index<t.history.length-1&&rr(t.id,t.history[t.index+1],t.index+1)},[rr]),Er=(0,R.useCallback)(()=>{let{tabs:e}=Hn.current,t=e.find(e=>e.id===lb(Hn.current));t&&sb(t)===`files`&&t.listing?.parent&&dr(t.listing.parent)},[dr]),Dr=(0,R.useRef)(null),Or=(0,R.useCallback)(()=>{for(let e of Hn.current.tabs)e.listing&&tr(e.id,e.listing.path,!0)},[tr]),kr=(0,R.useCallback)(e=>{e.length!==0&&(W(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),dn())},[dn]),Ar=(0,R.useCallback)(async e=>{let t=await yt(e);t.length!==0&&kr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[kr]),jr=(0,R.useCallback)(e=>{let t=new Set(e);W(e=>e.filter(e=>!t.has(e.path)))},[]),Mr=(0,R.useCallback)(async e=>{let t=Un.current;if(!t)return;let n=await yt(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>w(e.path))),i=n.filter(e=>!r.has(w(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};Ne(a),await rt(a),He(e=>e+1)},[]),Nr=(0,R.useCallback)(async e=>{let t=Un.current;if(!t)return;let n=new Set(e.map(w)),r=(t.favorites??[]).filter(e=>!n.has(w(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};Ne(i),await rt(i),He(e=>e+1)},[]),Pr=(0,R.useCallback)(()=>W([]),[]),Fr=(0,R.useRef)(-1),Ir=(0,R.useCallback)(e=>{Lt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),qt(e.move),e.entries.length>0&&dn()},[dn]),Lr=(0,R.useCallback)(async()=>{if(c.available)try{let e=await gt();Fr.current=e.sequence,Ir(e)}catch{}},[Ir]),Rr=(0,R.useCallback)(async e=>{e.length!==0&&await mt(e,!1)&&await Lr()},[Lr]),zr=(0,R.useRef)(nn);zr.current=nn;let Br=(0,R.useRef)(Xt);Br.current=Xt;let Vr=(0,R.useRef)(!1);(0,R.useEffect)(()=>{let e=V?.trayAutoShow??!0,t=t=>{e&&nc(t)&&(Br.current||(Vr.current=!0),dn())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Vr.current&&window.setTimeout(()=>{Vr.current&&zr.current.length===0&&tn(!1),Vr.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[dn,V?.trayAutoShow]),(0,R.useEffect)(()=>{let e=()=>un(e=>ub(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Hr=(0,R.useCallback)(async()=>{let e=zr.current;if(e.length>0){let t=await yt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));W(e=>e.filter(e=>n.has(e.path)))}await Lr()},[Lr]),Ur=(0,R.useCallback)(()=>{Hr(),qe(e=>e+1),Or()},[Hr,Or]),Wr=(0,R.useCallback)(e=>{let t=ub(e);un(t),Jn(`yafm.tray.position`,t)},[]),Gr=(0,R.useCallback)(()=>{Vr.current=!1,Xt?tn(!1):dn()},[dn,Xt]),Kr=(0,R.useCallback)(async(t,n,r)=>{let i=await _t(t,n,r);i.cancelled||(i.ok?(r&&jr(t),qe(e=>e+1),Or(),Lr()):ka(i.error??e(`the_files_could_not_be_transferred`)))},[Or,Lr,jr]);(0,R.useEffect)(()=>{if(c.available)return zt().then(e=>{Mt.current=e,kt(e)},()=>void 0),c.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Mt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Mt.current=n,kt(n),r&&jt(!0)})},[]);let qr=(0,R.useCallback)(()=>{Bt().then(()=>zt().then(e=>{Mt.current=e,kt(e)},()=>void 0))},[]);(0,R.useEffect)(()=>{if(!c.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await gt();if(!e||t.sequence===Fr.current)return;Fr.current=t.sequence,Ir(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Ir]);let Jr=(0,R.useCallback)(async e=>{let t=e?await Nt():await Pt();t.ok?(qe(e=>e+1),Or()):t.error&&!t.error.startsWith(`Nothing to`)&&ka(t.error)},[Or]),Yr=(0,R.useRef)(Sn);(0,R.useEffect)(()=>{Yr.current!==Sn&&(Yr.current=Sn,Or())},[Sn,Or]);let Xr=(0,R.useCallback)((e,t)=>{let{tabs:n}=Hn.current,r=n.find(t=>t.id===e);if(!r||sb(r)!==`files`)return;let i=cb(r),a=Un.current?.defaultView??be,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||z.iconSize,gridSize:r.view?.gridSize||a.gridSize||z.gridSize,sort:r.view?.sort??z.sort,sortDescending:r.view?.sortDescending??z.sortDescending,...t};Xn(e,()=>({view:o})),Dr.current!==null&&window.clearTimeout(Dr.current),Dr.current=window.setTimeout(()=>{Dr.current=null,Oe(i,o)},250)},[Xn]),Zr=(0,R.useCallback)(e=>{Xr(lb(Hn.current),e)},[Xr]),Qr=(0,R.useCallback)(e=>{let t=Un.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,columns:e}};Ne(n),rt(n)},[]),$r=(0,R.useCallback)(e=>{let t=Un.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,showImages:e}};Ne(n),rt(n)},[]),ei=(0,R.useCallback)(e=>{let t=Un.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,imageStripHeight:e}};Ne(n),rt(n)},[]),ti=(0,R.useCallback)((e,t,n,r)=>{let i=Hn.current.tabs.find(t=>t.id===e);if(!i||sb(i)!==`files`||!i.listing)return;let a=cb(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Xn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),ke(a,t,n,r)},[Xn]),ni=(0,R.useCallback)((e,t)=>{let n=Hn.current.tabs.find(t=>t.id===e);if(!n)return;let r=db(n,Un.current?.defaultView??be);Xr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Xr]),ri=(0,R.useCallback)((e,t)=>{a(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ii=(0,R.useCallback)(()=>{Ae().then(_,()=>_([]))},[]),ai=(0,R.useCallback)(e=>{let t=(e.openTabs??[]).map(Pp).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...fb(e),fresh:!1})),r=Math.min(Math.max(e.activeTab??0,0),n.length-1);a(n),s(n[r].id);for(let e of n)sb(e)===`files`&&tr(e.id,cb(e),!0);return!0},[tr]),oi=(0,R.useCallback)(e=>{let t=Yn.current;if(Yn.current=[],t.length===0)return;let n=t.filter(e=>!nb.has(e));for(let e of t)n.includes(e)||rb(e);if(n.length===0)return;let{tabs:r}=Hn.current;if(!e&&r.length===1&&r[0].fresh){nr(r[0].id,n[0]),rb(n[0]);for(let e of n.slice(1))ir(e),rb(e);return}let i=n.map(e=>{let t=ir(e);return rb(e),t}).at(-1);i&&setTimeout(()=>s(i),0)},[ir,nr]),si=(0,R.useCallback)(()=>{Je().then(e=>{Ne(e),Me(e.recentLimit);let t={...Vt,...e.shortcuts};Re(t),Ut(t.openInNewTab),He(e=>e+1),Wn.current||(Wn.current=!0,oi(e.restoreTabs&&ai(e)))},()=>{Me(10),Wn.current=!0,oi(!1)})},[oi,ai]),ci=(0,R.useCallback)(()=>{ze().then(xe,()=>xe([]))},[]),Y=(0,R.useCallback)(()=>{je().then(b,()=>b([]))},[]),li=n.filter(e=>!e.hidden),ui=li.map(ob),di=ui.join(`
`),fi=Math.max(li.findIndex(e=>e.id===o),0);(0,R.useEffect)(()=>{if(!V?.restoreTabs)return;let e=setTimeout(()=>void it(ui,fi),700);return()=>clearTimeout(e)},[di,fi,V?.restoreTabs]),(0,R.useEffect)(()=>{let{tabs:e,activeId:t}=Hn.current,n=e.find(e=>e.id===t);n&&n.fresh&&sb(n)===`files`&&tr(n.id,cb(n),!0),ii(),si(),Y(),se().then(S,()=>S(null))},[tr,ii,si,Y]),(0,R.useEffect)(()=>{if(ue().then(D,()=>D(null)),c.available)return c.on(e=>{let t=e;t.type===`update.checked`&&t.data&&D(t.data)})},[]),(0,R.useEffect)(()=>{if(c.available)return c.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&u({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&ka(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&ka(n.data.error??e(`pairing_failed`))}})},[e]),(0,R.useEffect)(()=>{let e=setInterval(Y,3e4);return()=>clearInterval(e)},[Y]),(0,R.useEffect)(()=>{K===`home`&&(ci(),Y())},[K,G.id,ci,Y]),(0,R.useEffect)(()=>{if(!c.available)return;let e=c.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Hn.current,i=t.data.startup===!0;i&&nb.has(n)?rb(n):i&&!Wn.current?Yn.current.includes(n)||Yn.current.push(n):(i&&r.length===1&&r[0].fresh?nr(r[0].id,n):Np(n)?nr(lb(Hn.current),n):ir(n),i&&rb(n))});return c.send({type:`app.ready`}),e},[nr,ir]),(0,R.useEffect)(()=>{if(c.available)return c.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:r}=t.data;a(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...r}}},i})})},[]),(0,R.useEffect)(()=>{if(c.available)return c.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:r}=t.data;a(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...r}}},i})})},[]),(0,R.useEffect)(()=>{let e=e=>{if(Jt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),wr();return}if(e.key===`BrowserForward`){e.preventDefault(),Tr();return}if(e.key===`Escape`&&ne.open){e.preventDefault(),Mn();return}let t=Gt(e);if(t===H.closeTab)e.preventDefault(),lr(lb(Hn.current));else if(t===H.newTab)e.preventDefault(),ir();else if(t===H.reopenTab)e.preventDefault(),ur();else if(t===H.goBack)e.preventDefault(),wr();else if(t===H.goForward)e.preventDefault(),Tr();else if(t===H.goUp)e.preventDefault(),Er();else if(t===H.find)e.preventDefault(),K===`files`?Pn():Ln();else if(t===H.location)e.preventDefault(),We(e=>e+1);else if(t===H.home){e.preventDefault();let t=g.find(e=>e.kind===`home`)?.path;t&&dr(t)}else t===H.iconsView?(e.preventDefault(),K===`files`&&Zr({mode:`grid`})):t===H.detailsView?(e.preventDefault(),K===`files`&&Zr({mode:`list`})):t===H.nextTab?(e.preventDefault(),fr(1)):t===H.previousTab?(e.preventDefault(),fr(-1)):t===H.hidden||t===`alt+.`?(e.preventDefault(),Ge().then(()=>{qe(e=>e+1),Or()})):t===H.undo?(e.preventDefault(),Jr(!0)):t===H.redo?(e.preventDefault(),Jr(!1)):t===H.splitView?(e.preventDefault(),pr()):K!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Bn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[H,K,ne.open,lr,ur,ir,wr,Tr,Er,Pn,Ln,Mn,Bn,Zr,fr,dr,g,Or,Jr,pr]),(0,R.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),wr()):e.button===4&&(e.preventDefault(),Tr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[wr,Tr]);let hi=(0,R.useMemo)(()=>{let e=new Set;for(let t of n){if(sb(t)!==`files`)continue;let n=cb(t);if(n&&!Lc(n)){if(C(n)){let t=mb(E(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),yi=hi.join(`\0`);(0,R.useEffect)(()=>{c.available&&c.send({type:`fs.watch`,payload:{paths:hi,owner:`app`}})},[yi,o]);let xi=sb(yn)===`files`?cb(yn):``;(0,R.useEffect)(()=>{c.available&&c.send({type:`fs.focus`,payload:{path:xi||null}})},[xi]),(0,R.useEffect)(()=>{if(c.available)return c.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=Hn.current.tabs.filter(e=>sb(e)===`files`&&N(cb(e),n)),i=Hn.current.tabs.filter(e=>{let t=cb(e);return sb(e)===`files`&&t.length>0&&C(t)&&N(E(t),n)});if(r.length!==0||i.length!==0){on(n);for(let e of i){let t=Hn.current.tabs.find(t=>t.id===e.id),r=t?cb(t):``;t&&sb(t)===`files`&&!t.loading&&C(r)&&N(E(r),n)&&tr(e.id,r,!0)}r.length!==0&&Ce(n,!1,Sn).then(e=>{for(let t of r){let n=Hn.current.tabs.find(e=>e.id===t.id);n&&sb(n)===`files`&&N(cb(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=Hn.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&sb(n)===`files`&&N(cb(n),e.path)&&Xn(t.id,()=>({listing:e}))},300):Xn(t.id,()=>({listing:e})))}},()=>void 0)}})},[Sn,tr,Xn]);let Si=G.index>0,Ci=G.index<G.history.length-1,wi=(e,t)=>{let n=db(e,bn),r=e.listing?.path??e.history[e.index]??``,i=C(r),a=i&&T(r);return(0,J.jsx)(fl,{confirmDelete:V?.confirmDelete??!1,cutPaths:Yt,previewVideoAudio:V?.previewVideoAudio??!1,previewVideoAutoplay:V?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?et:nt,onActivate:()=>ot(t?`primary`:`secondary`),enableShortcuts:(!hn||(t?at===`primary`:at===`secondary`))&&(!i||a),error:e.error,find:e.id===yn.id?{...ne,currentPath:jn<0?null:An[jn]}:void 0,selectMatchesToken:e.id===yn.id?P:0,imageStripHeight:Dn,listing:e.listing,loading:e.loading,onImageStripHeight:ei,readOnly:i&&!a||Lc(e.listing?.path??``),onOpen:(t,n)=>{n?ir(t):tr(e.id,t)},onOpenFile:(t,n)=>{Lc(t)?Hc(t).catch(e=>void ka(pb(e))):A(t)?V?.archiveHandler??!1?n?ir(t):tr(e.id,t):Se(t):C(t)?(async()=>{let e=await Te(t,_e.current,gb(t));if(!e.path&&en(e.error)){let n=E(t),r=Zt(n);r&&$t(n);let i=await ja(n,!!r);i&&(Qt(n,i),e=await Te(t,_e.current,i))}e.path?Se(e.path):e.error&&ka(e.error)})():Se(t)},onRefresh:()=>{let t=e.listing?.path;t&&ar(t)},onRename:or,onSelectionCountChange:t?br:xr,onSetTags:(t,n,r)=>ti(e.id,t,n,r),selectionMenuRequest:t?St.primary:St.secondary,onSort:t=>ni(e.id,t),onPaste:Ur,onClipboardChanged:()=>void Lr(),onTransfer:Kr,onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Fe,onExtractArchive:(e,t)=>void ji(e,t),openOnSingleClick:V?.openOnSingleClick??!1,pendingRename:Tt&&t===(at===`primary`)&&N(Tt.directory,e.listing?.path??``)?Tt.path:null,pendingRenameToken:Tt?.token??0,refreshToken:Ke,shortcuts:H,showCheckboxes:V?.showCheckboxes??!0,showImages:Tn,view:n})},Ti=ne.open&&(0,J.jsx)(Hd,{current:jn,focusToken:M,matchCase:ne.matchCase,mode:ne.mode,onClose:Mn,onMatchCase:()=>re(e=>({...e,matchCase:!e.matchCase})),onMode:()=>re(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Vn(1),onPrevious:()=>Vn(-1),onQuery:e=>re(t=>({...t,query:e})),onRegex:()=>re(e=>({...e,regex:!e.regex})),query:ne.query,regex:ne.regex,total:An.length,onSelectMatches:An.length>0?()=>F(e=>e+1):void 0}),Di=K===`files`&&C(fn),Oi=Di&&T(fn),ki=Di&&G.listing?.archiveEncrypted===!0,Ai=async(t,n)=>{let r=E(t),i=await we(r,n,_e.current,gb(r));if(!i.ok&&en(i.error)){let e=Zt(r);e&&$t(r);let t=await ja(r,!!e);t&&(Qt(r,t),i=await we(r,n,_e.current,t))}i.ok?(ar(n),an(),tr(G.id,n,!0)):ka(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},ji=async(e,t)=>{let n=E(e),r=mb(n);if(!r)return;if(t===`choose`){let e=await wa(r);e&&await Ai(n,e);return}let i=t===`named`;if(t===`auto`){let e=N(n,fn)?G.listing?.entries??[]:(await Ce(n,!1,!1,_e.current,gb(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${hb(n)}`:r;await Ai(n,o)},Mi=async e=>{Di&&await ji(fn,e)},Ni=async()=>{Di&&await ji(fn,`choose`)},Fi=(0,J.jsxs)(Cb,{children:[(0,J.jsx)(wb,{"data-shortcut":Kt(H.goBack),disabled:!Si,onClick:e=>{G.index>0&&Wt(e)?ir(G.history[G.index-1]):wr()},title:e(`back`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(wb,{"data-shortcut":Kt(H.goForward),disabled:!Ci,onClick:e=>{G.index<G.history.length-1&&Wt(e)?ir(G.history[G.index+1]):Tr()},title:e(`forward`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(wb,{"data-shortcut":Kt(H.goUp),disabled:K!==`files`||!pn,onClick:e=>{pn&&(Wt(e)?ir(pn):dr(pn))},title:e(`up_one_level`),type:`button`,children:(0,J.jsx)(mi,{})}),(0,J.jsx)(Fp,{focusToken:Ue,icon:On,label:K===`files`?void 0:e(Wy[K]),onContextMenu:K===`files`?(e,t,n)=>U({x:t,y:n,path:e}):void 0,onNavigate:dr,path:K===`files`?fn:q}),K===`files`&&(!Di||Oi)&&(0,J.jsx)(wb,{onClick:e=>vr(e,fn,()=>void tr(G.id,fn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(gi,{})}),(0,J.jsx)(wb,{"data-shortcut":Kt(H.find),onClick:()=>K===`files`?Pn():Ln(),title:e(`search`),type:`button`,children:(0,J.jsx)(pi,{})}),ht.primary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Db,{}),(0,J.jsx)(wb,{onClick:e=>Sr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,J.jsx)(ba,{})})]}),Di&&(0,J.jsxs)(Tb,{children:[(0,J.jsx)(Db,{}),ki&&(0,J.jsxs)(Eb,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,J.jsx)(xa,{size:12}),e(`encrypted`)]}),(0,J.jsx)(wb,{onClick:()=>void Ni(),onContextMenu:e=>{e.preventDefault(),ut({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,J.jsx)(Li,{})}),(0,J.jsx)(bo,{icon:(0,J.jsx)(la,{size:15}),onChange:e=>{let t=Number(e);ge(t),_e.current=t,Di&&tr(G.id,fn,!0)},options:ab.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(ab.find(e=>e.value===String(L))?.label??`auto`)}`,value:String(L)})]})]}),Ii=ce.open?{...ce,index:fe}:null;return(0,J.jsx)(Nn,{value:wn,children:(0,J.jsxs)(yb,{$rounded:k,children:[(0,J.jsx)(nd,{settings:V,theme:Pe}),(0,J.jsx)(yy,{activeId:G.id,onClose:lr,onNewTab:()=>ir(),onReorder:ri,onTransferToTab:Kr,onSelect:s,onViewChange:Zr,onColumns:Qr,onShowImages:$r,showImages:Tn,tasks:Ot,onClearTasks:qr,activityOpen:At,onActivityOpenChange:jt,trayCount:nn.length+It.length,trayVisible:Xt,onToggleTray:Gr,split:hn,canSplit:K===`files`,onToggleSplit:pr,details:Ye,canDetails:K===`files`||K===`recycle`||K===`gallery`,onToggleDetails:()=>Xe(e=>!e),currentFolder:K===`files`&&!Lc(fn)?fn:``,shortcuts:H,view:xn,tabs:n.filter(e=>!e.hidden).map(t=>{let r=sb(t),i=cb(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?cb(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Fn(wn,i):void 0,archive:r===`files`&&C(i),split:!!a,title:r===`files`?In(wn,i,y(i)||e(`files`)):e(Wy[r]),partner:a?{title:In(wn,o,y(o)||e(`files`)),place:Fn(wn,o)}:void 0}})}),(0,J.jsxs)(bb,{children:[(0,J.jsx)(O_,{activeKind:K,currentPath:K===`files`?q:``,drives:v,historyVersion:Ie,onNavigate:dr,onOpenView:cr,homePath:g.find(e=>e.kind===`home`)?.path??``,places:g,recent:ye,recentLimit:De,version:Be}),(0,J.jsxs)(xb,{children:[K!==`files`&&Fi,(0,J.jsxs)(Sb,{children:[K!==`files`&&ce.open&&(0,J.jsx)(Hd,{current:fe,focusToken:de,matchCase:ce.matchCase,mode:ce.mode,onClose:Rn,onMatchCase:()=>le(e=>({...e,matchCase:!e.matchCase})),onMode:()=>le(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>zn(1),onPrevious:()=>zn(-1),onQuery:e=>le(t=>({...t,query:e})),onRegex:()=>le(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:ce.query,regex:ce.regex,total:me,onSelectMatches:K===`gallery`||K===`recycle`?()=>F(e=>e+1):void 0}),K===`files`?hn&&mn?(0,J.jsxs)(kb,{ref:gr,children:[(0,J.jsxs)(Ab,{style:{flex:d},children:[(0,J.jsxs)(Ob,{$active:at===`primary`,onPointerDown:()=>ot(`primary`),children:[(0,J.jsx)(wb,{"data-shortcut":Kt(H.goBack),disabled:!Si,onClick:e=>{let t=G.index-1;t<0||(Wt(e)?ir(G.history[t]):rr(G.id,G.history[t],t))},title:e(`back`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(wb,{"data-shortcut":Kt(H.goForward),disabled:!Ci,onClick:e=>{let t=G.index+1;t>=G.history.length||(Wt(e)?ir(G.history[t]):rr(G.id,G.history[t],t))},title:e(`forward`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(wb,{"data-shortcut":Kt(H.goUp),disabled:!pn,onClick:e=>{pn&&(Wt(e)?ir(pn):tr(G.id,pn))},title:e(`up_one_level`),type:`button`,children:(0,J.jsx)(mi,{})}),(0,J.jsx)(Fp,{focusToken:at===`primary`?Ue:void 0,onContextMenu:(e,t,n)=>U({x:t,y:n,path:e}),onNavigate:(e,t)=>t?ir(e):void tr(G.id,e),path:fn}),(0,J.jsx)(wb,{onClick:e=>vr(e,fn,()=>void tr(G.id,fn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(gi,{})}),(0,J.jsx)(wb,{"data-shortcut":Kt(H.find),onClick:Pn,title:e(`search`),type:`button`,children:(0,J.jsx)(pi,{})}),ht.primary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Db,{}),(0,J.jsx)(wb,{onClick:e=>Sr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,J.jsx)(ba,{})})]})]}),wi(G,!0),at===`primary`&&Ti]}),(0,J.jsx)(jb,{onDoubleClick:()=>m(.5),onPointerDown:_r,title:e(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(Ab,{$enter:!0,style:{flex:1-d},children:[(0,J.jsxs)(Ob,{$active:at===`secondary`,onPointerDown:()=>ot(`secondary`),children:[(0,J.jsx)(wb,{"data-shortcut":Kt(H.goBack),disabled:mn.index<=0,onClick:e=>{let t=mn.index-1;t<0||(Wt(e)?ir(mn.history[t]):rr(mn.id,mn.history[t],t))},title:e(`back`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(wb,{"data-shortcut":Kt(H.goForward),disabled:mn.index>=mn.history.length-1,onClick:e=>{let t=mn.index+1;t>=mn.history.length||(Wt(e)?ir(mn.history[t]):rr(mn.id,mn.history[t],t))},title:e(`forward`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(wb,{"data-shortcut":Kt(H.goUp),disabled:!vn,onClick:e=>{vn&&(Wt(e)?ir(vn):tr(mn.id,vn))},title:e(`up_one_level`),type:`button`,children:(0,J.jsx)(mi,{})}),(0,J.jsx)(Fp,{focusToken:at===`secondary`?Ue:void 0,onContextMenu:(e,t,n)=>U({x:t,y:n,path:e}),onNavigate:(e,t)=>t?ir(e):void tr(mn.id,e),path:gn}),(0,J.jsx)(wb,{onClick:e=>vr(e,gn,()=>void tr(mn.id,gn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(gi,{})}),(0,J.jsx)(wb,{"data-shortcut":Kt(H.find),onClick:Pn,title:e(`search`),type:`button`,children:(0,J.jsx)(pi,{})}),ht.secondary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Db,{}),(0,J.jsx)(wb,{onClick:e=>Sr(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,J.jsx)(ba,{})})]})]}),wi(mn,!1),at===`secondary`&&Ti]}),(0,J.jsx)(rs,{info:hr,onWidth:mr,open:Ye,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,width:Ze})]}):(0,J.jsxs)(Nb,{children:[(0,J.jsxs)(Pb,{children:[Fi,(0,J.jsxs)(Mb,{children:[wi(G,!0),Ti]})]}),(0,J.jsx)(rs,{info:$e,onWidth:mr,open:Ye,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,width:Ze})]}):K===`home`?(0,J.jsx)(Tp,{drives:v,find:Ii,historyVersion:Ie,onSearchMatches:he,homePath:g.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Y,onHistoryChanged:()=>Le(e=>e+1),onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Fe,onExtractArchive:(e,t)=>void ji(e,t),settingsVersion:Be,theme:Pe,onOpen:dr,onLayoutChanged:si,onPlacesChanged:_,onRecentCleared:ci,places:g,recent:ye,recentLimit:De,visibilityVersion:Ke}):K===`settings`?(0,J.jsx)(mh,{appInfo:x,find:Ii,focusSection:te,onSearchMatches:he,onSettingsChanged:si}):K===`gallery`?(0,J.jsx)(m_,{confirmDelete:V?.confirmDelete??!1,find:Ii,onSearchMatches:he,openOnSingleClick:V?.openOnSingleClick??!1,onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Fe,onExtractArchive:(e,t)=>void ji(e,t),shortcuts:H,showCheckboxes:V?.showCheckboxes??!0,selectMatchesToken:P,showDetails:Ye,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,view:xn}):(0,J.jsx)(Qp,{find:Ii,onOpenLocation:dr,onShowDetails:()=>Xe(!0),platform:x?.platform,selectMatchesToken:P,showDetails:Ye,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1})]},K),(0,J.jsxs)(zb,{children:[(0,J.jsx)(`span`,{children:K===`files`&&G.listing?_b(e,G.listing):``}),x?(0,J.jsxs)(Fb,{children:[(0,J.jsxs)(`span`,{children:[`v`,x.version,` · `,x.platform]}),x.debug&&(0,J.jsx)(Rb,{children:`debug`}),ee?.available&&(0,J.jsxs)(Ib,{onClick:()=>{O(`updates`),cr(`settings`)},title:e(`version_version_is_available`,{version:ee.latest}),type:`button`,children:[(0,J.jsx)(Lb,{}),e(`update_available`)]})]}):(0,J.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,J.jsx)(sc,{clipboardItems:It,clipboardMove:Ht,currentDirectory:K===`files`?q:``,items:nn,onAdd:e=>void Ar(e),onClear:Pr,onClose:()=>tn(!1),onCopyToClipboard:e=>void Rr(e),onPosition:Wr,onRemove:jr,onTransfer:Kr,position:ln,visible:Xt}),st&&(0,J.jsx)(_o,{creationOnly:!0,directory:st.directory,menu:{x:st.x,y:st.y,paths:[],background:!0},onClose:()=>ct(null),onCreateFile:e=>void Cr(e),onCreateFolder:e=>void Cr(null,e),shortcuts:H}),dt&&(0,J.jsx)(_o,{allowCompression:!0,directory:mb(dt.path)??dt.path,menu:{x:dt.x,y:dt.y,paths:[dt.path]},onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Fe,onExtractArchive:(e,t)=>void ji(e,t),onArchiveCreated:e=>{e&&ar(mb(dt.path)??dt.path)},onClose:()=>U(null),onCompressTo:(e,t)=>pt({paths:e,name:t}),onCopy:(e,t)=>void mt(e,t),onDelete:e=>void xt(e,!1).then(()=>ar(mb(dt.path)??dt.path)),onOpen:(e,t)=>t?ir(e):void tr(G.id,e),onOpenFile:e=>void Se(e),onPaste:e=>void bt(e).then(t=>{t.ok&&ar(e)}),onRefresh:()=>ar(dt.path),shortcuts:H,target:{path:dt.path,isDirectory:!0}}),ft&&(0,J.jsx)(No,{initialDirectory:mb(dt?.path??fn)??fn,initialName:ft.name,onCancel:()=>pt(null),onCompress:async e=>{let t=await Rt(ft.paths,e);return!t.ok&&t.error&&ka(t.error),t.ok}}),lt&&(0,J.jsx)(io,{items:[{label:e(`extract_here`),onSelect:()=>void Mi(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Mi(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Mi(`auto`)}],onClose:()=>ut(null),x:lt.x,y:lt.y}),rn&&(0,J.jsx)(sd,{action:rn.prompt.action,delaySeconds:rn.prompt.delaySeconds,hits:rn.prompt.hits,onCancel:()=>{rn.resolve(!1),sn(null)},onConfirm:()=>{rn.resolve(!0),sn(null)},permanent:rn.prompt.permanent},rn.id),(0,J.jsx)(Td,{}),(0,J.jsx)(Md,{}),l&&(0,J.jsx)(Gy,{code:l.code,deviceName:l.deviceName,onAccept:()=>{Pc(l.requestId,!0),u(null)},onReject:()=>{Pc(l.requestId,!1),u(null)}}),(0,J.jsx)(zy,{}),(0,J.jsx)(f,{})]})})}var yb=n.div`
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
`,bb=n.div`
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

        /* The light artwork needs no veil: its own colours are pale enough for dark text. */
        html[data-theme="light"] & {
            background: transparent;
        }
    }
`,xb=n.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Sb=n.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${$a}
`,Cb=n.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,wb=n.button`
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
`,Tb=n.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Eb=n.span`
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
`,Db=n.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Ob=n.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,kb=n.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Ab=n.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?no:``}
`,jb=n.div`
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
        ${ro}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Mb=n.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Nb=n.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Pb=n.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Fb=n.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Ib=n.button`
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
`,Lb=n.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Rb=n.span`
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
`,zb=n.footer`
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
`;function Bb({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,theme:l,onCancel:u,onSelect:d}){let f=p(),m=Qc(`picker`),h=t===`file`,g=r??[],[_,b]=(0,R.useState)(e),[x,S]=(0,R.useState)(null),[C,T]=(0,R.useState)(!0),[E,ee]=(0,R.useState)(null),[D,te]=(0,R.useState)(()=>new Set),[O,k]=(0,R.useState)(a??[]),[ne,A]=(0,R.useState)([]),[j,re]=(0,R.useState)([]),[ie,ae]=(0,R.useState)([]),[M,oe]=(0,R.useState)([]),[N,P]=(0,R.useState)(``),[se,F]=(0,R.useState)(g.length===0),[ce,le]=(0,R.useState)(`files`),[ue,de]=(0,R.useState)(0),[I,fe]=(0,R.useState)(_n),[pe,me]=(0,R.useState)(0),[he,L]=(0,R.useState)(0),[ge,_e]=(0,R.useState)(0),[ve,ye]=(0,R.useState)(null),[xe,Se]=(0,R.useState)(null),[we,Te]=(0,R.useState)(0),[Ee,De]=(0,R.useState)(null),[Oe,ke]=(0,R.useState)(be.imageStripHeight);(0,R.useEffect)(()=>{Je().then(De,()=>De(null))},[]),(0,R.useEffect)(()=>{a?k(a):Ae().then(k,()=>k([]))},[a]),(0,R.useEffect)(()=>{je().then(A,()=>A([])),ze().then(re,()=>re([]))},[]),(0,R.useEffect)(()=>{let e=!0;return T(!0),ee(null),te(new Set),P(h?``:y(_)),Ce(_||void 0,!1).then(t=>{e&&(S(t),b(t.path),P(h?``:y(t.path)),T(!1))},t=>{e&&(ee(t instanceof Error?t.message:String(t)),T(!1))}),()=>{e=!1}},[_,ue,h]),(0,R.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),fe(e=>({...e,open:!0})),me(e=>e+1);return}if(e.key===`Escape`){I.open?(fe(e=>({...e,open:!1,query:``})),L(0)):u();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Me();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),V();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),fe(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),me(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ke()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,R.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Me()):e.button===4&&(e.preventDefault(),V())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let B=e=>{let t=e.trim();t.length!==0&&w(t)!==w(_)&&(ae(e=>[...e,_]),oe([]),le(`files`),b(t))},Me=()=>{let e=ie.at(-1);e!==void 0&&(ae(e=>e.slice(0,-1)),oe(e=>[_,...e]),b(e))},V=()=>{let e=M[0];e!==void 0&&(oe(e=>e.slice(1)),ae(e=>[...e,_]),b(e))},Ne=x?.path??_,Pe=x?.parent??(_?v(_):null);(0,R.useEffect)(()=>{c.available&&Ne&&c.send({type:`fs.watch`,payload:{paths:[Ne],owner:`picker`}})},[Ne]),(0,R.useEffect)(()=>{if(c.available&&Ne)return c.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&w(t.data.path)===w(Ne)&&Ce(Ne,!1).then(e=>{S(e);let t=new Set(e.entries.map(e=>e.fullPath));te(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Ne]);let Fe=(x?.entries??[]).filter(e=>e.isDirectory||h&&(se||g.length===0||g.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Ie=x?{...x,entries:Fe}:null,Le=I.open&&I.query.length>0,H=(0,R.useMemo)(()=>Le?Fe.filter(e=>En(e.name,I)).map(e=>e.fullPath):[],[Le,Fe,I]);(0,R.useEffect)(()=>{L(0)},[I.query,I.matchCase,I.regex,x?.path]);let Re=H.length===0?-1:Math.min(he,H.length-1),Be=(0,R.useMemo)(()=>({...I,currentPath:Re>=0?H[Re]:null}),[I,Re,H]),Ve=Ee?.defaultView??be,He=o??{mode:Ve.mode,iconSize:Ve.iconSize,gridSize:Ve.gridSize,sort:`name`,sortDescending:!1,columns:Ve.columns??[`type`,`size`,`modified`]},Ue=(s??Ve.showImages)&&He.mode===`list`,We=N.trim(),Ge=We.length>0?Hb(We)?We:Vb(Ne,We):null,Ke=()=>{if(C||E)return;let e=n?[...D]:[...D].slice(0,1);e.length>0?d(e):Ge!==null&&We!==y(Ne)?d([Ge]):!h&&Ne&&d([Ne])},qe=(0,R.useCallback)(e=>{te(new Set(e)),P(e.length===1?y(e[0]):e.length===0&&!h?y(Ne):``)},[Ne,h]),Ye=e=>{x?.entries.find(t=>t.fullPath===e)?.isDirectory?B(e):h&&d([e])},Xe=e=>P(e),Ze=async e=>{let t=ve;if(ye(null),!t||!Ne)return;let n=e===null?await Ct(Ne):await Dt(Ne,e);n.ok&&n.path!==null&&(fe(e=>({...e,open:!1,query:``})),e!==null&&F(!0),de(e=>e+1),window.setTimeout(()=>{Se(n.path),Te(e=>e+1)},120))},Qe=()=>{fe(e=>({...e,open:!0})),me(e=>e+1)},$e=e=>{L(t=>H.length===0?0:(t+e+H.length)%H.length)},et=e=>(0,J.jsxs)(Qb,{children:[(0,J.jsxs)($b,{children:[(0,J.jsx)(ex,{children:f(h?`file_name`:`folder_3`)}),(0,J.jsx)(tx,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ke())},spellCheck:!1,value:N}),h&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(ex,{children:f(`files_of_type`)}),(0,J.jsx)(bo,{onChange:e=>F(e===`all`),options:[...g.length>0?[{value:`supported`,label:`${f(`supported_files`)} (${g.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${f(`all_files`)} (*.*)`}],value:se?`all`:`supported`})]})]}),(0,J.jsxs)(nx,{children:[(0,J.jsx)(rx,{onClick:u,type:`button`,children:f(`cancel`)}),(0,J.jsxs)(rx,{$primary:!0,disabled:C||E!==null||h&&D.size===0&&We.length===0,onClick:Ke,type:`button`,children:[(0,J.jsx)(Di,{size:12}),f(h?`select_this_file`:`select_this_folder`)]})]})]}),tt=(0,J.jsxs)(Wb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,J.jsxs)(Gb,{children:[(0,J.jsxs)(Kb,{children:[(0,J.jsx)(ui,{size:16}),f(h?`choose_a_file`:`choose_a_folder`)]}),(0,J.jsx)(qb,{onClick:u,title:f(`cancel`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]}),(0,J.jsxs)(Jb,{children:[(0,J.jsx)(O_,{activeKind:ce===`overview`?`home`:ce===`gallery`?`gallery`:`files`,currentPath:Ne,drives:ne,hiddenViews:h?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:O.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>B(e),onOpenView:e=>{e===`home`?(te(new Set),P(h?``:y(Ne)),le(`overview`)):e===`gallery`&&h&&(te(new Set),P(``),le(`gallery`))},places:O,recent:j,recentLimit:10}),(0,J.jsx)(Yb,{children:ce===`overview`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Tp,{drives:ne,theme:l,historyVersion:0,homePath:O.find(e=>e.kind===`home`)?.path??``,onOpen:e=>B(e),onPick:h?e=>d([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:qe,places:O,readOnly:!0,recent:j,recentLimit:10,visibilityVersion:0}),et(P)]}):ce===`gallery`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(m_,{onPick:e=>d([e]),onSelectionChange:qe,showCheckboxes:Ee?.showCheckboxes??!0,view:{...z,columns:[]}}),et(P)]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Xb,{children:[(0,J.jsx)(Zb,{disabled:ie.length===0,onClick:Me,title:f(`back`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(Zb,{disabled:M.length===0,onClick:V,title:f(`forward`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(Zb,{disabled:!Pe,onClick:()=>Pe&&B(Pe),title:f(`up_one_level`),type:`button`,children:(0,J.jsx)(mi,{})}),(0,J.jsx)(Fp,{onNavigate:B,path:Ne}),(0,J.jsx)(Zb,{onClick:e=>ye({x:e.clientX,y:e.clientY}),title:f(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(gi,{})}),(0,J.jsx)(Zb,{onClick:Qe,title:f(`search`),type:`button`,children:(0,J.jsx)(pi,{})}),m.available&&(0,J.jsx)(Zb,{onClick:e=>m.open(e.clientX,e.clientY),title:f(`selection_menu`),type:`button`,children:(0,J.jsx)(ba,{})})]}),I.open&&(0,J.jsx)(Hd,{current:Re,focusToken:pe,matchCase:I.matchCase,mode:I.mode,onClose:()=>{fe(e=>({...e,open:!1,query:``})),L(0)},onMatchCase:()=>fe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>fe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>$e(1),onPrevious:()=>$e(-1),onQuery:e=>fe(t=>({...t,query:e})),onRegex:()=>fe(e=>({...e,regex:!e.regex})),query:I.query,regex:I.regex,total:H.length,onSelectMatches:()=>_e(e=>e+1)}),(0,J.jsx)(fl,{allowBackgroundMenu:!0,confirmDelete:Ee?.confirmDelete??!1,enableShortcuts:!0,error:E,find:Be,selectMatchesToken:ge,imageStripHeight:Oe,loading:C,listing:Ie,onImageStripHeight:ke,onOpen:Ye,onOpenFile:Ye,onRefresh:()=>de(e=>e+1),onSelectionChange:qe,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:Ee?.openOnSingleClick??!1,refreshToken:ue,pendingRename:xe,pendingRenameToken:we,showCheckboxes:Ee?.showCheckboxes??!0,showDetails:!1,showImages:Ue,singleSelect:!n,view:He}),et(Xe)]})})]}),ve&&(0,J.jsx)(_o,{creationOnly:!0,directory:Ne,menu:{x:ve.x,y:ve.y,paths:[],background:!0},onClose:()=>ye(null),onCreateFile:h?e=>void Ze(e):void 0,onCreateFolder:()=>void Ze(null),shortcuts:Vt})]});return i?tt:(0,Va.createPortal)((0,J.jsx)(Ub,{onPointerDown:e=>{e.target===e.currentTarget&&u()},children:tt}),document.body)}function Vb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Hb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ub=n.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${no}
`,Wb=n.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Ha}
    ${({$inline:e})=>e?``:Za}
`,Gb=n.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Kb=n.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,qb=n.button`
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
`,Jb=n.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Yb=n.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Xb=n.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Zb=n.button`
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
`,Qb=n.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,$b=n.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,ex=n.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,tx=n.input`
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
`,nx=n.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,rx=n.button`
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
`;function ix({mode:e,multiple:t,extensions:n,initial:a}){let o=p(),s=ee(),[l,u]=(0,R.useState)(null),d=i(h(l?.themeMode)),[m,g]=(0,R.useState)({}),[_,v]=(0,R.useState)(null),[y,b]=(0,R.useState)(null),[x,S]=(0,R.useState)(null),C=(0,R.useRef)(0);(0,R.useEffect)(()=>{c.send({type:`app.ready`})},[]),(0,R.useEffect)(()=>(ve(e=>new Promise(t=>{S({id:++C.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,R.useEffect)(()=>{Je().then(u,()=>void 0)},[]),(0,R.useEffect)(()=>{r(l?.accentColor,l?.secondaryColor,d)},[l?.accentColor,l?.secondaryColor,d]);let w=l?.defaultView??be,T={mode:m.mode??w.mode,iconSize:m.iconSize??w.iconSize,gridSize:m.gridSize??w.gridSize,sort:`name`,sortDescending:!1,columns:_??w.columns??[`type`,`size`,`modified`]},E=e=>g(t=>({...t,...e}));return(0,J.jsxs)(ax,{children:[(0,J.jsxs)(ox,{children:[(0,J.jsx)(sx,{children:(0,J.jsx)(ji,{size:17})}),(0,J.jsx)(cx,{...s,children:o(e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,J.jsx)(ny,{onChange:E,onColumns:v,onShowImages:b,showImages:y??w.showImages,view:T}),(0,J.jsx)(lx,{children:(0,J.jsx)(ux,{onClick:()=>c.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:o(`cancel`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})})]}),(0,J.jsx)(dx,{children:(0,J.jsx)(Bb,{extensions:n,initial:a,inline:!0,mode:e,multiple:t,onCancel:()=>c.send({type:`pick.cancel`}),onSelect:e=>c.send({type:`pick.submit`,payload:{paths:e}}),showImages:y??w.showImages,fileView:T,theme:d})}),x&&(0,J.jsx)(sd,{action:x.prompt.action,delaySeconds:x.prompt.delaySeconds,hits:x.prompt.hits,onCancel:()=>{x.resolve(!1),S(null)},onConfirm:()=>{x.resolve(!0),S(null)},permanent:x.prompt.permanent},x.id),(0,J.jsx)(Td,{}),(0,J.jsx)(f,{})]})}var ax=n.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,ox=n.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,sx=n.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,cx=n.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lx=n.div`
    display: flex;
    flex-shrink: 0;
`,ux=n.button`
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
`,dx=n.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;document.documentElement.dataset.theme=a()?`dark`:`light`;var fx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,fx),window.addEventListener(`pagehide`,Wn);var px=document.getElementById(`root`),mx=new URLSearchParams(window.location.search),hx=mx.get(`picker`),gx=mx.get(`filter`)??``;px&&(Bn(),(0,ge.createRoot)(px).render((0,J.jsx)(R.StrictMode,{children:(0,J.jsx)(u,{children:hx===`folder`||hx===`file`?(0,J.jsx)(ix,{extensions:gx?gx.split(`;`).filter(Boolean):[],initial:mx.get(`initial`)??``,mode:hx,multiple:mx.get(`multiple`)===`1`}):(0,J.jsx)(vb,{})})})));