import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{A as t,B as n,C as r,D as i,E as a,F as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,S as m,T as h,U as g,V as _,_ as v,a as y,b,c as x,d as S,f as C,g as w,h as T,i as E,j as ee,k as D,l as O,m as k,n as A,o as te,p as j,r as ne,s as re,u as M,v as ie,w as ae,x as N,y as P,z as F}from"./format-DzQJIS45.js";async function oe(){return c.available?await c.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function I(e){c.available?await c.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function se(){c.available&&await R(`update.openLogs`)}async function ce(e){c.available?await R(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function le(){return c.available?await c.request(`update.status`)??null:null}async function ue(){return c.available?await c.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function de(){return c.available?await c.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function fe(){await R(`update.cancel`)}async function pe(){return c.available?await c.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function L(e){return c.on(t=>{t.type===`update.progress`&&e(t.data)})}function me(e){return c.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function R(e,t,n=3e4){let r=await c.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var z=e(g(),1),he=_(),B=null;function ge(e){B=e}function _e(e){return B?B(e):Promise.resolve(!1)}var V={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},ve={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function ye(e,t){return c.available?await c.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function be(e){return c.available?(await c.request(`fs.open`,{path:e})).ok:!1}async function xe(e,t=!0,n=!1,r=0,i){return await c.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function Se(e,t,n=0,r){let i=await c.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await _e({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await c.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function Ce(e,t=0,n){return await c.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function we(e){c.available&&e.length!==0&&await c.request(`fs.archive.release`,{paths:e})}async function Te(e){return c.available?await c.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Ee(e,t){return c.available?(await c.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function De(e,t,n,r){return c.available?(await c.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Oe(e,t=!1){return c.available?await c.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function ke(){return(await c.request(`fs.places`)).places}async function Ae(){return(await c.request(`fs.drives`)).drives}async function je(e=!1){return(await c.request(`fs.recycle`,{includeOrphans:e})).entries}async function H(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await _e({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await c.request(e,{...t,confirm:r.token})}return r}async function Me(e=!1){let t=await c.request(`fs.recycle.empty`,{includeOrphans:e});await H(`fs.recycle.empty`,{includeOrphans:e},t)}async function Ne(e){return!c.available||e.length===0?{ok:!1,done:0}:await c.request(`fs.recycle.restoreMany`,{ids:e})}async function Pe(e){if(!c.available||e.length===0)return{ok:!1,done:0};let t=await c.request(`fs.recycle.deleteMany`,{ids:e}),n=await H(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Fe(e){c.available&&e&&await c.request(`fs.recycle.properties`,{id:e})}async function Ie(){if(!c.available)return{entries:[],cancelled:!0,failed:!1};let e=await c.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function U(){return c.available?(await c.request(`fs.recycle.admin.purge`)).ok:!1}async function Le(e=0,t=150,n=!1){return c.available?await c.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Re(){return c.available?(await c.request(`fs.recent`)).entries:[]}async function ze(){return c.available?(await c.request(`fs.frequent`)).entries:[]}async function Be(e){c.available&&await c.request(`fs.frequent.record`,{path:e})}async function Ve(){await c.request(`fs.recent.clear`)}async function He(){await c.request(`fs.frequent.clear`)}async function Ue(){return await c.request(`fs.visibility`)}async function We(){return await c.request(`fs.hidden.toggle`)}async function Ge(){return c.available?await c.request(`fs.index.tasks`):{count:0,directories:[]}}var Ke={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showHidden:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,themeMode:`system`,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[]};async function qe(){if(!c.available)return Ke;let e=await c.request(`settings.get`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showHidden:e?.showHidden??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,themeMode:h(e?.themeMode),backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[]}}async function Je(){return c.available?(await c.request(`app.protection.defaults`)).paths??[]:[]}var Ye={registered:!1,pathMatches:!1,registeredPath:null},Xe={registered:!1,pathMatches:!1,registeredPath:null};async function Ze(){return c.available?await c.request(`app.defaultManager.status`):Xe}async function Qe(e){return c.available?await c.request(`app.defaultManager.set`,{enabled:e}):Xe}async function $e(){return c.available?await c.request(`app.archive.status`):Ye}async function et(){return c.available?await c.request(`app.archive.register`):Ye}async function tt(){return c.available?await c.request(`app.archive.unregister`):Ye}async function nt(e){if(!c.available)return e;let t=await c.request(`settings.save`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showHidden:t?.showHidden??e.showHidden,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,themeMode:h(t?.themeMode??e.themeMode),backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites}}async function rt(e,t){c.available&&await c.request(`app.tabs.set`,{tabs:e,active:t})}async function it(e,t,n){return c.available?(await c.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var at={managed:0,private:0,workingSet:0,available:0};async function ot(){return c.available?await c.request(`app.memory`):at}async function st(){return c.available?await c.request(`app.memory.trim`):at}var ct={registered:!1,pathMatches:!1,registeredPath:null};async function lt(){return c.available?await c.request(`app.scheme`):ct}async function ut(e){return c.available?await c.request(`app.scheme.set`,{enabled:e}):ct}var W={supported:!1,mode:`none`,active:!1,error:null};async function dt(){return c.available?await c.request(`app.startup`):W}async function ft(e){return c.available?await c.request(`app.startup.set`,{mode:e}):W}async function pt(e,t=!1){return!c.available||e.length===0?!1:(await c.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function mt(){return c.available?(await c.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function ht(){return c.available?await c.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function gt(e,t,n){return!c.available||e.length===0?{ok:!1,error:`Nothing to transfer.`,created:[]}:await _t({action:n?`move`:`write`},r=>c.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:r}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function _t(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await _e({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function vt(e){return!c.available||e.length===0?[]:(await c.request(`fs.paths.info`,{paths:e})).entries}async function yt(e,t=!1){return c.available?await _t({action:t?`move`:`write`},t=>c.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function bt(e,t=!1){if(!c.available||e.length===0)return{ok:!1,error:null};let n=await c.request(`fs.operation.delete`,{paths:e,permanent:t}),r=!1;for(let i=0;i<2&&n.required&&n.token&&n.protected?.length;i++){if(!await _e({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){r=!0;break}n=await c.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return r?{...n,ok:!1,cancelled:!0}:n}async function xt(e,t){return c.available?await _t({action:`rename`},n=>c.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function St(e,t=!1){return c.available?await c.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Ct(e){return c.available?(await c.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function wt(e,t){return c.available?await c.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Tt(e,t,n){return c.available?await c.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Et(e,t){return c.available?await c.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function Dt(e){c.available&&e.length!==0&&await c.request(`fs.operation.properties`,{paths:e})}async function Ot(e){c.available&&await c.request(`fs.operation.openWith`,{path:e})}async function kt(e){c.available&&await c.request(`fs.operation.terminal`,{path:e})}async function At(e){return c.available?await c.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function jt(e,t){return c.available?(await c.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Mt(){return c.available?await c.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Nt(){return c.available?await c.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Pt(e){c.available&&await c.request(`fs.operation.showInExplorer`,{path:e})}async function Ft(e){return!c.available||e.length===0?{verbs:[],safe:!0}:await c.request(`shell.verbs`,{paths:e})}async function It(e,t,n,r){c.available&&e.length!==0&&await c.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Lt(e,t){return!c.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await c.request(`fs.operation.compress`,{...t,paths:e})}async function Rt(){return c.available?(await c.request(`app.tasks`)).tasks:[]}async function zt(){c.available&&await c.request(`app.tasks.clear`)}var Bt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Vt=Bt.openInNewTab;function Ht(e){Vt=e.trim()||Bt.openInNewTab}function Ut(e){let t=Vt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Wt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Gt(e){return e.split(`+`).filter(Boolean).map(e=>Kt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Kt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`Delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function qt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Jt=new Map;function Yt(e){return w(C(e)?E(e):e)}function Xt(e){return Jt.get(Yt(e))}function Zt(e,t){Jt.set(Yt(e),t)}function Qt(e){Jt.delete(Yt(e))}function G(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var $t=new Map,en=new Map,tn=new Set,nn=0;function rn(){$t.clear(),en.clear(),nn+=1,tn.forEach(e=>e())}function an(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...$t.keys()])e.toLowerCase().includes(t)&&($t.delete(e),n=!0);n&&(nn+=1,tn.forEach(e=>e()))}function on(){let[e,t]=(0,z.useState)(nn);return(0,z.useEffect)(()=>{let e=()=>t(nn);return tn.add(e),()=>{tn.delete(e)}},[]),e}var sn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function cn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return sn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function ln(e,t,n=!1){let r=on(),i=e===null?``:cn(e,t,n),[a,o]=(0,z.useState)(()=>$t.get(i)??null);return(0,z.useEffect)(()=>{if(e===null){o(null);return}if(!c.available)return;if($t.has(i)){o($t.get(i)??null);return}let r=!0;return c.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?$t.set(i,e.dataUrl):$t.delete(i),r&&o(e.dataUrl)},()=>{$t.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function un(e){let[t,n]=(0,z.useState)(e);return(0,z.useEffect)(()=>{if(!e){n(null);return}if(!C(e)){n(e);return}let t=!0;return Ce(e,0,Xt(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function K(e){let t=on(),[n,r]=(0,z.useState)(()=>e?en.get(e)??null:null);return(0,z.useEffect)(()=>{if(!e||!c.available){r(null);return}if(en.has(e)){r(en.get(e)??null);return}let t=!0;return c.request(`fs.iconFile`,{path:e}).then(n=>{en.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{en.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var q=null,dn=null;function fn(){return q===null?c.available?(dn??=c.request(`app.thumbnails`).then(e=>(q=e.base??``,q),()=>(q=``,``)),dn):Promise.resolve(``):Promise.resolve(q)}function pn(e,t=128,n=0){let[r,i]=(0,z.useState)(q);return(0,z.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return fn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${mn}`}var mn=2;function hn(e,t=0,n=``){let[r,i]=(0,z.useState)(q);if((0,z.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return fn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function gn(e,t=0){let[n,r]=(0,z.useState)(q);return(0,z.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return fn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var _n={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},vn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function yn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Sn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Tn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var bn=`\0`,xn=``;function Sn(e){return e.query!==bn&&(bn=e.query,xn=e.query.toLowerCase()),xn}var Cn=`\0`,wn=null;function Tn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Cn)return wn;Cn=t;try{wn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{wn=null}return wn}function En(e,t){return yn(e,t)!==null}var Dn=[{kind:`image`,label:`Images`},{kind:`video`,label:`Videos`},{kind:`document`,label:`Documents`},{kind:`audio`,label:`Audio`},{kind:`design`,label:`Design files`}],On={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function kn(e){let t=jn(e);for(let{kind:e}of Dn)if(On[e].has(t))return e;return null}function An(e){return kn(e)!==null}function jn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Mn=(0,z.createContext)({places:{},useIcons:!1}),Nn=Mn.Provider;function Pn(){return(0,z.useContext)(Mn)}function Fn(e,t){return e.places[w(t)]}function In(e,t,n){return Fn(e,t)?.name||n}var Ln=new Map,Rn=new Map,zn=0;function Bn(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&Ln.set(e,t)}catch{}}function Vn(e){return c.available?Ln.get(e)??null:localStorage.getItem(e)}function Hn(e,t){c.available?(Ln.set(e,t),Rn.set(e,t),window.clearTimeout(zn),zn=window.setTimeout(Un,200)):localStorage.setItem(e,t)}function Un(){if(zn=0,Rn.size===0)return;let e=Object.fromEntries(Rn);Rn.clear(),c.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Wn(){if(Rn.size===0)return;let e=Object.fromEntries(Rn);Rn.clear(),c.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Gn(e,t){let n=Vn(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function Kn(e,t){Hn(e,String(t))}function qn(e){try{return JSON.parse(Vn(e)??`null`)}catch{return null}}function Jn(e,t){Hn(e,JSON.stringify(t))}var J=o(),Yn=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,J.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,J.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Xn=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),Zn=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M14 3v4h4`})]}),Qn=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,J.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,J.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),$n=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,J.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),er=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 19V5`}),(0,J.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),tr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,J.jsx)(`path`,{d:`M20 4v7h-7`})]}),nr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 5v14`}),(0,J.jsx)(`path`,{d:`M5 12h14`})]}),rr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M19 12H5`}),(0,J.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),ir=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M5 12h14`}),(0,J.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),ar=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,J.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),or=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,J.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),sr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,J.jsx)(`path`,{d:`M12 12v8`})]}),cr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,J.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),lr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),ur=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,J.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),dr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),fr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 7h16`}),(0,J.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,J.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,J.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),pr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),mr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),hr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,J.jsxs)(`defs`,{children:[(0,J.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,J.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,J.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,J.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,J.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,J.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,J.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,J.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,J.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,J.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),gr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),_r=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,J.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,J.jsx)(`path`,{d:`m13 5-2 14`})]}),vr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,J.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,J.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),yr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,J.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),br=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,J.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,J.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),xr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Sr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Cr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),wr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,J.jsx)(`path`,{d:`M8.5 14h7`})]}),Tr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,J.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,J.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Er=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Dr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Or=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),kr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Ar=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),jr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,J.jsx)(`path`,{d:`m14 6 4 4`})]}),Mr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,J.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Nr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,J.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Pr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 4v10`}),(0,J.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,J.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Fr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,J.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,J.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Ir=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,J.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,J.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Lr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,J.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Rr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),zr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,J.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Br=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,J.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,J.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Vr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Hr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,J.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,J.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,J.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Ur=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,J.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Wr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,J.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Gr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,J.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,J.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Kr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,J.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),qr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,J.jsx)(`path`,{d:`M3.5 12h17`}),(0,J.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Jr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Yr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,J.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Xr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,J.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,J.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),Zr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,J.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),Qr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,J.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,J.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),$r=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),ei=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 16V4`}),(0,J.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,J.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),ti=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),ni=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,J.jsx)(`path`,{d:`M12 4v16`})]}),ri=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,J.jsx)(`path`,{d:`M15 4v16`})]}),ii=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,J.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,J.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,J.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),ai=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,J.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,J.jsx)(`path`,{d:`M12 14v2`})]}),oi=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,J.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),si=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,J.jsx)(`circle`,{cx:12,cy:12,r:3})]}),ci=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,J.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,J.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,J.jsx)(`path`,{d:`m3 3 18 18`})]});function Y(e,t){return({size:n=t,...r})=>(0,J.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var li=Y(Yn,18),ui=Y(Xn,18),di=Y(Zn,18),fi=Y(Qn,18),pi=Y($n,16),mi=Y(er,16),hi=Y(tr,16),gi=Y(nr,16),_i=Y(rr,16),vi=Y(ir,16),yi=Y(ar,12),bi=Y(or,18),xi=Y(sr,14),Si=Y(cr,14),Ci=Y(lr,14),wi=Y(ur,18),Ti=Y(dr,18),Ei=Y(fr,18),Di=Y(pr,14),Oi=Y(mr,14),ki=Y(si,14),Ai=Y(ci,14),ji=Y(hr,18),Mi=Y(gr,18),Ni=Y(_r,18),Pi=Y(vr,18),Fi=Y(yr,18),Ii=Y(br,18),Li=Y(xr,18),Ri=Y(Sr,18),zi=Y(Cr,18),Bi=Y(wr,18),Vi=Y(Tr,18),Hi=Y(Er,18),Ui=Y(Dr,18),Wi=Y(Or,18),Gi=Y(kr,18),Ki=Y(Ar,18),qi=Y(jr,16),Ji=Y(Mr,18),Yi=Y(Nr,18),Xi=Y(Pr,18),Zi=Y(Fr,18),Qi=Y(Ir,18),$i=Y(Lr,18),ea=Y(Rr,18),ta=Y(zr,18),na=Y(Br,18),ra=Y(Vr,18),ia=Y(Hr,18),aa=Y(Ur,18),oa=Y(Wr,18),sa=Y(Gr,18),ca=Y(Kr,18),la=Y(qr,18),ua=Y(Jr,18),da=Y(Yr,14),fa=Y(Xr,14),pa=Y(Zr,16),ma=Y(Qr,16),ha=Y($r,16),ga=Y(ei,16),_a=Y(ti,16),va=Y(ni,16),ya=Y(ri,16),ba=Y(ii,16),xa=Y(ai,14),Sa=Y(oi,14);async function Ca(e,t,n){return c.available?(await c.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function wa(e){return Ca(`folder`,[],e??``)}function Ta(e){return Ca(`file`,e??[],``)}var Ea=null,Da=null;function Oa(e){Ea=e}function ka(e){return Ea?Ea(e):Promise.resolve()}function Aa(e){Da=e}function ja(e,t=!1){return Da?Da(e,t):Promise.resolve(null)}var Ma=[{extension:`.txt`,label:`Text file`},{extension:`.md`,label:`Markdown file`},{extension:`.json`,label:`JSON file`},{extension:`.html`,label:`HTML file`},{extension:`.css`,label:`CSS file`},{extension:`.js`,label:`JavaScript file`},{extension:`.ts`,label:`TypeScript file`},{extension:`.cs`,label:`C# file`},{extension:`.py`,label:`Python file`},{extension:`.bat`,label:`Batch file`},{extension:`.ps1`,label:`PowerShell file`},{extension:`.csv`,label:`CSV file`},{extension:`.xml`,label:`XML file`},{extension:`.yml`,label:`YAML file`}],Na=null,Pa=0,Fa=new Set;function Ia(){Pa+=1;for(let e of Fa)e()}function La(e){return Fa.add(e),()=>Fa.delete(e)}function Ra(){return Pa}function za(e){Na=e,Ia()}function Ba(){return(0,z.useSyncExternalStore)(La,Ra,Ra),Na}var Va=s(),Ha=F`
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
`,Za=F`animation: ${Ua} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Qa=F`animation: ${Wa} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,$a=F`animation: ${Ga} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;F`animation: ${Ka} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var eo=F`animation: ${qa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,to=F`animation: ${Ja} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,no=F`animation: ${Ya} 140ms ease-out;`,ro=F`animation: ${Xa} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function io({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,z.useState)([]),s=(0,z.useRef)(void 0);if((0,z.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,z.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,J.jsx)(ho,{},`group-rule-${i}`)),n.push((0,J.jsx)(mo,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,J.jsx)(ho,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,J.jsxs)(uo,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,J.jsx)(fo,{children:e.loading?(0,J.jsx)(go,{}):e.icon}),(0,J.jsx)(po,{children:e.label}),a?(0,J.jsx)(yi,{size:12}):e.checked&&(0,J.jsx)(Di,{size:12})]},`${e.label}-${i}`))}),n};return(0,Va.createPortal)((0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(ao,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(oo,{children:r.map((e,t)=>(0,J.jsxs)(so,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,J.jsx)(co,{children:e.icon}),(0,J.jsx)(lo,{children:e.label})]},`${e.label}-${t}`))}),(0,J.jsx)(ho,{})]}),m(n,0)]}),a.map((e,t)=>(0,J.jsx)(ao,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var ao=n.div`
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
`;function _o({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:o,onOpenFile:s,onRename:c,onDelete:l,onCopy:u,onPaste:d,onCreateFolder:f,onCreateFile:m,creationOnly:h=!1,onRefresh:g,onAddToTray:_,onAddFavorite:v,onRemoveFavorite:b,favoritePaths:x,onExtractArchive:S,allowCompression:T=!1,onCompressTo:E,onArchiveCreated:ee}){let D=p(),O=Ba(),k=C(t),[A,te]=(0,z.useState)({verbs:[],safe:!0,loading:!1}),[ne,re]=(0,z.useState)({recommended:[],other:[],loading:!1}),[M,ie]=(0,z.useState)(null),ae=(0,z.useRef)(0),N=(0,z.useRef)(0),P=e?.paths.length===1,F=e?.background?t?[t]:[]:e?.paths??[],oe=e?.background?t||null:P&&n?.isDirectory?n.path:null;if((0,z.useEffect)(()=>{if(!e){te({verbs:[],safe:!0,loading:!1}),re({recommended:[],other:[],loading:!1});return}let t=++ae.current;te({verbs:[],safe:!0,loading:F.length>0&&!k}),F.length>0&&!k&&Ft(F).then(e=>{ae.current===t&&te({...e,loading:!1})},()=>{ae.current===t&&te({verbs:[],safe:!0,loading:!1})});let r=++N.current;!k&&P&&n?(re({recommended:[],other:[],loading:!0}),At(n.path).then(e=>{N.current===r&&re({...e,loading:!1})},()=>{N.current===r&&re({recommended:[],other:[],loading:!1})})):re({recommended:[],other:[],loading:!1})},[e,P,n?.path,n?.isDirectory,F.length,k]),(0,z.useEffect)(()=>{if(!e||k||!oe){ie(null);return}let t=!0;return Ct(oe).then(e=>{t&&ie(e)},()=>{t&&ie(null)}),()=>{t=!1}},[e,oe,k]),!e)return null;let I=[],se=[],ce=new Set((x??[]).map(w)),le=e.background?t?[t]:[]:e.paths,ue=le.length>0&&le.every(e=>ce.has(w(e))),de=()=>n?fe(n.path,n.isDirectory):`Archive`,fe=(e,t)=>{let n=y(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},pe=async(e,n=de())=>{let r=await Lt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?ee?.(r.path,!0):ka(r.error??D(`Could not create the archive.`))},L=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},me=async()=>{if(!oe||M===null)return;let e=await wt(oe,!M);e.ok?(ie(e.enabled),g?.()):ka(e.error??D(`Could not change the case sensitivity.`))},R=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Tt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Tt(e,t,`${a}\\${yo(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?g?.():ka(o.error??D(`Could not create the link.`))},he=async e=>{if(!n)return;let r=await wa(t);r&&await R(e,n.path,r,y(n.path),e.endsWith(`-copy`))},B=async e=>{let n=O?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=w(a)===w(t);await R(n,r.path,t,y(r.path),i&&!o)}},ge=async()=>{let t=(await vt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&za({paths:t})},_e=()=>{let e=O?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:D(`Cancel selected link`),icon:(0,J.jsx)(Oi,{size:14}),onSelect:()=>za(null)},...t?[{label:D(`Hard link`),icon:(0,J.jsx)(di,{size:14}),separatorBefore:!0,onSelect:()=>void B(`hard`)}]:[],{label:D(`Symbolic link`),icon:(0,J.jsx)(di,{size:14}),separatorBefore:!t,onSelect:()=>void B(`symbolic-file`)},...n?[{label:D(`Directory junction`),icon:(0,J.jsx)(ui,{size:14}),onSelect:()=>void B(`junction`)},{label:D(`Smart copy`),icon:(0,J.jsx)(pa,{size:14}),separatorBefore:!0,onSelect:()=>void B(`smart-copy`)},{label:D(`Smart mirror`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void B(`smart-mirror`)},{label:D(`Multi-version smart copy`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void B(`multi-version-smart-copy`)},{label:D(`Hardlink copy`),icon:(0,J.jsx)(pa,{size:14}),separatorBefore:!0,onSelect:()=>void B(`hard-copy`)},{label:D(`Symbolic link copy`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void B(`symbolic-copy`)}]:[]]};if(e.background){if(f&&se.push({label:D(`New folder`),icon:(0,J.jsx)(gi,{size:16}),shortcut:Gt(r.newFolder),onSelect:f}),m||f){let e=[];f&&(e.push({label:D(`Folder`),icon:(0,J.jsx)(ui,{size:14}),onSelect:()=>f(!1)}),k||e.push({label:D(`Case-sensitive folder`),icon:(0,J.jsx)(fa,{size:14}),onSelect:()=>f(!0)})),m&&e.push(...Ma.map((e,t)=>({label:`${D(e.label)} (${e.extension})`,icon:(0,J.jsx)(di,{size:14}),separatorBefore:t===0,onSelect:()=>m(e.extension)}))),I.push({label:D(`New`),icon:(0,J.jsx)(gi,{size:14}),children:e,onSelect:()=>void 0})}if(k||I.push({label:D(`Create link`),icon:(0,J.jsx)(ga,{size:14}),disabled:!O,children:_e(),onSelect:()=>void 0}),h)return(0,J.jsx)(io,{items:I,onClose:a,quick:se,x:e.x,y:e.y});!k&&o&&I.push({label:D(`Open in new tab`),icon:(0,J.jsx)(gi,{size:14}),onSelect:()=>o(t,!0)}),I.push({label:D(`Copy as path`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void L([t])}),_&&I.push({label:D(`Add to file tray`),icon:(0,J.jsx)(ca,{size:14}),onSelect:()=>_([t])}),!k&&(ue?b:v)&&I.push({label:D(ue?`Remove from favorites`:`Add to favorites`),icon:ue?(0,J.jsx)(da,{size:14}):(0,J.jsx)(ua,{size:14}),onSelect:()=>ue?b?.([t]):v?.([t])}),!k&&M!==null&&I.push({label:D(`Case-sensitive names`),icon:(0,J.jsx)(fa,{size:14}),checked:M,onSelect:()=>void me()}),!k&&T&&(I.push({label:D(`Open in Terminal`),icon:(0,J.jsx)(oa,{size:14}),onSelect:()=>void kt(t)}),I.push({label:D(`Show in Explorer`),icon:(0,J.jsx)(ui,{size:14}),separatorBefore:!0,onSelect:()=>void Pt(t)})),d&&se.push({label:D(`Paste`),icon:(0,J.jsx)(ha,{size:16}),disabled:!i,shortcut:Gt(r.paste),onSelect:()=>d(t)}),k||se.push({label:D(`Properties`),icon:(0,J.jsx)(bi,{size:16}),shortcut:Gt(r.properties),onSelect:()=>void Dt([t])})}else{if(o&&I.push({label:D(`Open`),icon:(0,J.jsx)(vi,{size:14}),onSelect:()=>{n?.isDirectory?o(n.path):n&&s?.(n.path)}}),n?.isDirectory&&(o&&I.push({label:D(`Open in new tab`),icon:(0,J.jsx)(gi,{size:14}),onSelect:()=>o(n.path,!0)}),d&&I.push({label:D(`Paste into folder`),icon:(0,J.jsx)(ha,{size:14}),disabled:!i,onSelect:()=>d(n.path)}),k||I.push({label:D(`Open in Terminal`),icon:(0,J.jsx)(oa,{size:14}),onSelect:()=>void kt(n.path)})),!k&&P&&n&&!n.isDirectory&&j(n.path)&&S&&I.push({label:D(`Extract archive`),icon:(0,J.jsx)(Li,{size:14}),separatorBefore:!0,children:[{label:D(`Extract here`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>S(n.path,`here`)},{label:D(`Extract to a folder named after the archive`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>S(n.path,`named`)},{label:D(`Auto extract to the current folder`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>S(n.path,`auto`)},{label:D(`Extract to…`),icon:(0,J.jsx)(ui,{size:14}),separatorBefore:!0,onSelect:()=>S(n.path,`choose`)}],onSelect:()=>void 0}),!k&&P&&n){let e=[];if(ne.loading)e.push({label:D(`Loading apps…`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ne.recommended)e.push({label:t.name,group:D(`Suggested apps`),icon:t.icon?(0,J.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,J.jsx)(zi,{size:14}),onSelect:()=>void jt(n.path,t.path).then(e=>{e||Ot(n.path)})});for(let t of ne.other)e.push({label:t.name,group:D(`Other apps`),icon:t.icon?(0,J.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,J.jsx)(zi,{size:14}),onSelect:()=>void jt(n.path,t.path).then(e=>{e||Ot(n.path)})})}e.push({label:D(`Choose another app…`),icon:(0,J.jsx)(zi,{size:14}),separatorBefore:!0,onSelect:()=>void Ot(n.path)}),I.push({label:D(`Open with`),icon:(0,J.jsx)(zi,{size:14}),children:e,onSelect:()=>void Ot(n.path)})}if(k||I.push({label:D(`Compress`),icon:(0,J.jsx)(Li,{size:14}),separatorBefore:!0,children:[{label:D(`Compress to ZIP`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>void pe(e.paths)},{label:D(`Compress to…`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>E?.(e.paths,de())}],onSelect:()=>void 0}),!k&&(e?.paths.length??0)>0){let e=[{label:D(`Select link source`),icon:(0,J.jsx)(ga,{size:14}),onSelect:()=>void ge()},...O?[{label:D(`Cancel selected link`),icon:(0,J.jsx)(Oi,{size:14}),onSelect:()=>za(null)}]:[],...P&&n?n.isDirectory?[{label:D(`Symbolic link`),icon:(0,J.jsx)(ui,{size:14}),separatorBefore:!0,onSelect:()=>void he(`symbolic-folder`)},{label:D(`Directory junction`),icon:(0,J.jsx)(ui,{size:14}),onSelect:()=>void he(`junction`)},{label:D(`Smart copy`),icon:(0,J.jsx)(pa,{size:14}),separatorBefore:!0,onSelect:()=>void he(`smart-copy`)},{label:D(`Smart mirror`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void he(`smart-mirror`)},{label:D(`Multi-version smart copy`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void he(`multi-version-smart-copy`)},{label:D(`Hardlink copy`),icon:(0,J.jsx)(pa,{size:14}),separatorBefore:!0,onSelect:()=>void he(`hard-copy`)},{label:D(`Symbolic link copy`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void he(`symbolic-copy`)}]:[{label:D(`Symbolic link`),icon:(0,J.jsx)(di,{size:14}),separatorBefore:!0,onSelect:()=>void he(`symbolic-file`)},{label:D(`Hard link`),icon:(0,J.jsx)(di,{size:14}),onSelect:()=>void he(`hard`)}]:[]];I.push({label:D(`Create link`),icon:(0,J.jsx)(ga,{size:14}),children:e,onSelect:()=>void 0})}!k&&n?.isDirectory&&M!==null&&I.push({label:D(`Case-sensitive names`),icon:(0,J.jsx)(fa,{size:14}),checked:M,onSelect:()=>void me()}),I.push({label:D(`Copy as path`),icon:(0,J.jsx)(pa,{size:14}),onSelect:()=>void L(e.paths)}),_&&I.push({label:D(`Add to file tray`),icon:(0,J.jsx)(ca,{size:14}),onSelect:()=>_(e.paths)}),!k&&(ue?b:v)&&I.push({label:D(ue?`Remove from favorites`:`Add to favorites`),icon:ue?(0,J.jsx)(da,{size:14}):(0,J.jsx)(ua,{size:14}),onSelect:()=>ue?b?.(le):v?.(le)}),k||I.push({label:D(`Show in Explorer`),icon:(0,J.jsx)(ui,{size:14}),separatorBefore:!0,onSelect:()=>void Pt(le[0])}),u&&se.push({label:D(`Cut`),icon:(0,J.jsx)(ma,{size:16}),shortcut:Gt(r.cut),onSelect:()=>u(e.paths,!0)},{label:D(`Copy`),icon:(0,J.jsx)(pa,{size:16}),shortcut:Gt(r.copy),onSelect:()=>u(e.paths,!1)}),P&&n&&c&&se.push({label:D(`Rename`),icon:(0,J.jsx)(qi,{size:16}),shortcut:Gt(r.rename),onSelect:()=>c(n.path)}),l&&se.push({label:D(`Delete`),icon:(0,J.jsx)(Ei,{size:16}),danger:!0,shortcut:Gt(r.delete),onSelect:()=>l(e.paths)}),k||se.push({label:D(`Properties`),icon:(0,J.jsx)(bi,{size:16}),shortcut:Gt(r.properties),onSelect:()=>void Dt(e.paths)})}if(A.loading)I.push({label:D(`More actions`),icon:(0,J.jsx)(zi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(A.verbs.length>0){let e={items:[],children:new Map};for(let t of A.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,J.jsx)(vo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void It(F,A.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];I.push({label:D(A.safe?`More actions`:`More actions (extensions)`),icon:(0,J.jsx)(zi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,J.jsx)(io,{items:I,onClose:a,quick:se,x:e.x,y:e.y})}function vo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,J.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,J.jsx)(vi,{size:14});case`document`:return(0,J.jsx)(Gi,{size:14});case`cut`:return(0,J.jsx)(ma,{size:14});case`copy`:return(0,J.jsx)(pa,{size:14});case`paste`:return(0,J.jsx)(ha,{size:14});case`trash`:return(0,J.jsx)(Ei,{size:14});case`pencil`:return(0,J.jsx)(qi,{size:14});case`gear`:return(0,J.jsx)(bi,{size:14});case`star`:return(0,J.jsx)(ea,{size:14});case`pin`:return(0,J.jsx)(xi,{size:14});case`executable`:return(0,J.jsx)(zi,{size:14});case`share`:return(0,J.jsx)(ga,{size:14});case`arrow`:return(0,J.jsx)(vi,{size:14});default:return(0,J.jsx)(ji,{size:14})}}function yo(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function bo({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=p(),[l,u]=(0,z.useState)(null),d=(0,z.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,z.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(xo,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,J.jsx)(So,{children:f?.label??``}):(0,J.jsx)(Co,{children:a}),a===void 0&&(0,J.jsx)(wo,{children:(0,J.jsx)(yi,{size:11})})]}),l&&(0,Va.createPortal)((0,J.jsx)(To,{"aria-label":c(`Options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,J.jsxs)(Eo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,J.jsx)(Do,{children:t.label}),t.value===e&&(0,J.jsx)(Di,{size:11})]},t.value))}),document.body)]})}var xo=n.button`
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
`,Oo=[{value:`zip`,label:`ZIP archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`ZIPX archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`7z archive (LZMA2)`,extension:`.7z`,level:!1},{value:`tar`,label:`TAR archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`TAR + GZip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`TAR + BZip2`,extension:`.tar.bz2`,level:!1}],ko=[{value:`default`,label:`Automatic`},{value:`store`,label:`Store (no compression)`},{value:`deflate`,label:`Deflate`},{value:`deflate64`,label:`Deflate64`},{value:`bzip2`,label:`BZip2`},{value:`lzma`,label:`LZMA`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`PPMd`}],Ao=[{value:`none`,label:`None`},{value:`zipcrypto`,label:`ZipCrypto`},{value:`aes128`,label:`AES-128`},{value:`aes192`,label:`AES-192`},{value:`aes256`,label:`AES-256`}],jo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Mo=[{value:`0`,label:`Store (no compression)`},{value:`1`,label:`Fastest`},{value:`5`,label:`Normal`},{value:`9`,label:`Maximum`},{value:`-1`,label:`Automatic`}];function No({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=p(),a=(0,z.useRef)(null),[o,s]=(0,z.useState)(e),[c,l]=(0,z.useState)(t),[u,d]=(0,z.useState)(`zip`),[f,m]=(0,z.useState)(`5`),[h,g]=(0,z.useState)(`default`),[_,v]=(0,z.useState)(`none`),[y,b]=(0,z.useState)(``),[x,S]=(0,z.useState)(`0`),[C,w]=(0,z.useState)(!1);(0,z.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=Oo.find(e=>e.value===u)??Oo[0],E=u===`zip`||u===`zipx`,ee=_!==`none`,D=E||u===`7z`,O=u===`zip`||u===`7z`,k=async()=>{if(C||!c.trim()||!o||ee&&y.length===0)return;w(!0);let e=await r({directory:o,name:c.trim(),format:u,level:T.level?Number(f):0,method:E?h:null,encryption:D?_:`none`,password:ee?y:void 0,splitSize:O?Number(x):0});w(!1),e&&n()};return(0,Va.createPortal)((0,J.jsx)(Po,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,J.jsxs)(Fo,{"aria-modal":`true`,role:`dialog`,children:[(0,J.jsx)(Io,{children:i(`Compress to…`)}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`Archive name`)}),(0,J.jsx)(zo,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&k()}}),(0,J.jsx)(Bo,{children:T.extension})]}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`Format`)}),(0,J.jsx)(bo,{onChange:e=>d(e),options:Oo.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`Method`)}),(0,J.jsx)(bo,{disabled:!E,onChange:g,options:ko.map(e=>({...e,label:i(e.label)})),value:E?h:`default`,width:236,zIndex:3700})]}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`Encryption`)}),(0,J.jsx)(bo,{disabled:!D,onChange:e=>{v(e),e===`none`&&b(``)},options:Ao.map(e=>({...e,label:i(e.label)})),value:D?_:`none`,width:236,zIndex:3700})]}),ee&&(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`Password`)}),(0,J.jsx)(zo,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`Split volumes`)}),(0,J.jsx)(bo,{disabled:!O,onChange:S,options:jo.map(e=>({...e,label:i(e.label)})),value:O?x:`0`,width:236,zIndex:3700})]}),(0,J.jsxs)(Lo,{children:[(0,J.jsx)(Ro,{children:i(`Compression level`)}),(0,J.jsx)(bo,{disabled:!T.level,onChange:m,options:Mo.map(e=>({...e,label:i(e.label)})),value:T.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,J.jsxs)(Lo,{$stack:!0,children:[(0,J.jsx)(Ro,{children:i(`Destination`)}),(0,J.jsxs)(Vo,{children:[(0,J.jsx)(Ho,{title:o,children:o}),(0,J.jsx)(Wo,{disabled:C,onClick:()=>void wa(o).then(e=>{e&&s(e)}),type:`button`,children:i(`Choose folder…`)})]})]}),(0,J.jsxs)(Uo,{children:[(0,J.jsx)(Wo,{disabled:C,onClick:n,type:`button`,children:i(`Cancel`)}),(0,J.jsx)(Go,{disabled:C||!c.trim()||ee&&y.length===0,onClick:()=>void k(),type:`button`,children:i(C?`Compressing…`:`Compress`)})]})]})}),document.body)}var Po=n.div`
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
`;function Ko({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:o}){let s=p(),c=(0,z.useRef)(null);return(0,z.useEffect)(()=>{if(!e)return;c.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),o()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,o]),e?(0,Va.createPortal)((0,J.jsx)(qo,{onPointerDown:e=>{e.target===e.currentTarget&&o()},children:(0,J.jsxs)(Jo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(Yo,{children:t}),(0,J.jsx)(Xo,{children:n}),(0,J.jsxs)(Zo,{children:[(0,J.jsx)(Qo,{onClick:o,type:`button`,children:s(`Cancel`)}),(0,J.jsx)(Qo,{$danger:i,onClick:a,ref:c,type:`button`,children:r})]})]})}),document.body):null}var qo=n.div`
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
`,$o=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),es=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),ts=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),ns=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function rs({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=p(),[l,u]=(0,z.useState)(!1),[d,f]=(0,z.useState)(!1),[m,h]=(0,z.useState)(!1),[g,_]=(0,z.useState)(0),[v,y]=(0,z.useState)(0),[b,x]=(0,z.useState)(null),[S,C]=(0,z.useState)(!1),[w,T]=(0,z.useState)(!1),E=(0,z.useRef)(null),ee=(0,z.useRef)(null),D=(0,z.useRef)(null),O=(0,z.useRef)(null),[k,A]=(0,z.useState)(()=>{let e=Gn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),te=e?.path??null,j=un(te),ne=e?is(e.name):``,re=!!e&&!e.isDirectory&&$o.has(ne),M=!!e&&!e.isDirectory&&es.has(ne),ie=!!e&&!e.isDirectory&&ts.has(ne),ae=!!e&&!e.isDirectory&&ns.has(ne),N=!!e&&!e.isDirectory&&ne===`pdf`,P=pn(re?j:null,512,e?.modified??0),F=hn(ie?j:null,e?.modified??0,ne),oe=hn(re||M?j:null,e?.modified??0,ne),I=gn(N?j:null,e?.modified??0),se=ln(!re&&!M&&!ie&&!ae&&!N?j:null,e?.isDirectory??!1);if((0,z.useEffect)(()=>{u(!1),f(!1),h(!1),_(0),y(0),T(!1)},[te]),(0,z.useEffect)(()=>{if(!j||!ae){x(null),C(!1);return}let e=!0;return C(!0),x(null),Te(j).then(t=>{e&&(x(t),C(!1))},()=>{e&&(x({text:null,truncated:!1,error:c(`Could not read this file.`)}),C(!1))}),()=>{e=!1}},[j,ae]),!e&&!s)return null;let ce=e=>{D.current={x:e.clientX,width:ee.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},le=e=>{let t=D.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},ue=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},de=e=>{O.current={y:e.clientY,height:k},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=O.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);A(n),Kn(`yafm.preview.media.height`,n)},pe=e=>{O.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,J.jsxs)(os,{$open:r,children:[r&&(0,J.jsx)(ss,{onPointerDown:ce,onPointerMove:le,onPointerUp:ue,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,J.jsx)(cs,{ref:ee,style:{width:r?t:0},children:(0,J.jsxs)(ls,{children:[(0,J.jsx)(ui,{size:56}),(0,J.jsx)(`span`,{children:s})]})})]});let L=()=>{let e=E.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,J.jsxs)(os,{$open:r,children:[r&&(0,J.jsx)(ss,{onPointerDown:ce,onPointerMove:le,onPointerUp:ue,onDoubleClick:()=>n(320),title:c(`Drag to resize; double-click to reset`)}),(0,J.jsxs)(cs,{ref:ee,style:{width:r?t:0},children:[(0,J.jsx)(us,{style:{height:k},children:re&&oe&&!l?(0,J.jsxs)(fs,{onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),children:[(0,J.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:L,onDurationChange:e=>_(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{_(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:P??void 0,preload:`metadata`,ref:E,src:oe}),(0,J.jsx)(ps,{$visible:!d,onClick:L,title:c(`Play`),type:`button`,children:(0,J.jsx)(_a,{size:28})}),(0,J.jsxs)(ms,{$visible:m,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(hs,{children:[(0,J.jsx)(`span`,{children:as(v)}),(0,J.jsx)(`span`,{children:as(g)})]}),(0,J.jsx)(gs,{"aria-label":c(`Seek`),max:g||0,min:0,onChange:e=>{let t=E.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,g||0)})]})]}):M&&oe?(0,J.jsx)(`audio`,{controls:!0,src:oe}):ie&&F?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:F}):N&&I&&!w?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:I}):N?(0,J.jsx)(di,{size:64}):ae?(0,J.jsx)(_s,{children:S||!b?(0,J.jsx)(ys,{children:c(`Loading…`)}):b.error?(0,J.jsx)(ys,{children:b.error}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(vs,{children:b.text}),b.truncated&&(0,J.jsx)(ys,{children:c(`Showing the first 256 KB.`)})]})}):re&&P?(0,J.jsx)(`img`,{alt:``,src:P}):se?(0,J.jsx)(`img`,{alt:``,src:se}):e.isDirectory?(0,J.jsx)(ui,{size:64}):(0,J.jsx)(di,{size:64})}),(0,J.jsx)(ds,{onDoubleClick:()=>{A(210),Kn(`yafm.preview.media.height`,210)},onPointerDown:de,onPointerMove:fe,onPointerUp:pe,title:c(`Drag to resize; double-click to reset`)}),(0,J.jsxs)(bs,{children:[(0,J.jsx)(xs,{title:e.path,children:e.name}),o&&(0,J.jsx)(Ss,{children:o}),(0,J.jsx)(Cs,{children:e.fields.map(e=>(0,J.jsxs)(ws,{children:[(0,J.jsx)(Ts,{children:e.label}),(0,J.jsx)(Es,{title:e.value,children:e.value})]},e.label))})]})]})]})}function is(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function as(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var os=n.div`
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
`,Ds=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Os=[...Ds],ks={quick:`Quick access`,recent:`Recent`,frequent:`Frequent`,home:`Home`,drives:`Drives`,share:`Shared`,favorites:`Favorites`},As={folder:e=>(0,J.jsx)(ui,{size:e}),home:e=>(0,J.jsx)(li,{size:e}),desktop:e=>(0,J.jsx)(Ji,{size:e}),documents:e=>(0,J.jsx)(Yi,{size:e}),downloads:e=>(0,J.jsx)(Xi,{size:e}),pictures:e=>(0,J.jsx)(Zi,{size:e}),music:e=>(0,J.jsx)(Qi,{size:e}),videos:e=>(0,J.jsx)($i,{size:e}),drive:e=>(0,J.jsx)(fi,{size:e}),image:e=>(0,J.jsx)(Pi,{size:e}),video:e=>(0,J.jsx)(Fi,{size:e}),audio:e=>(0,J.jsx)(Ii,{size:e}),text:e=>(0,J.jsx)(Mi,{size:e}),code:e=>(0,J.jsx)(Ni,{size:e}),clock:e=>(0,J.jsx)(wi,{size:e}),star:e=>(0,J.jsx)(ea,{size:e}),file:e=>(0,J.jsx)(di,{size:e}),archive:e=>(0,J.jsx)(Li,{size:e}),pdf:e=>(0,J.jsx)(Ri,{size:e}),executable:e=>(0,J.jsx)(zi,{size:e}),font:e=>(0,J.jsx)(Bi,{size:e}),database:e=>(0,J.jsx)(Vi,{size:e}),config:e=>(0,J.jsx)(Hi,{size:e}),spreadsheet:e=>(0,J.jsx)(Ui,{size:e}),presentation:e=>(0,J.jsx)(Wi,{size:e}),document:e=>(0,J.jsx)(Gi,{size:e}),app:e=>(0,J.jsx)(ji,{size:e}),gear:e=>(0,J.jsx)(bi,{size:e}),pin:e=>(0,J.jsx)(xi,{size:e}),trash:e=>(0,J.jsx)(Ei,{size:e}),overview:e=>(0,J.jsx)(Ki,{size:e}),book:e=>(0,J.jsx)(ta,{size:e}),briefcase:e=>(0,J.jsx)(na,{size:e}),cloud:e=>(0,J.jsx)(ra,{size:e}),gamepad:e=>(0,J.jsx)(ia,{size:e}),camera:e=>(0,J.jsx)(aa,{size:e}),terminal:e=>(0,J.jsx)(oa,{size:e}),server:e=>(0,J.jsx)(sa,{size:e}),package:e=>(0,J.jsx)(ca,{size:e}),globe:e=>(0,J.jsx)(la,{size:e}),heart:e=>(0,J.jsx)(ua,{size:e}),share:e=>(0,J.jsx)(sa,{size:e}),favorites:e=>(0,J.jsx)(ua,{size:e})};function js(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ms(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Ds)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Os.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=js(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`Home`:`${ks[n]??n}${Ns(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Ns(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ps({panel:e,size:t=16}){let n=K(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,J.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?As[e.icon]:void 0;if(r)return(0,J.jsx)(J.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,J.jsx)(ui,{size:t});case`recent`:return(0,J.jsx)(wi,{size:t});case`frequent`:return(0,J.jsx)(ea,{size:t});case`drives`:return(0,J.jsx)(fi,{size:t});case`home`:return(0,J.jsx)(li,{size:t});case`share`:return(0,J.jsx)(sa,{size:t});case`favorites`:return(0,J.jsx)(ua,{size:t});default:return(0,J.jsx)(ui,{size:t})}}function Fs({place:e,size:t=18}){let n=K(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,J.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&As[e.icon]?(0,J.jsx)(J.Fragment,{children:As[e.icon](t)}):(0,J.jsx)(ui,{size:t})}var Is=`#64748b`;function Ls(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Rs({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=p(),[c,l]=(0,z.useState)(``),[u,d]=(0,z.useState)(`#2dd4bf`),f=(0,z.useRef)(null);(0,z.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[o]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Va.createPortal)((0,J.jsxs)(zs,{"data-tag-menu":`true`,ref:f,style:{left:y,top:b},children:[(0,J.jsxs)(Bs,{children:[(0,J.jsx)(`span`,{children:s(`Tags`)}),(0,J.jsx)(Vs,{onClick:o,title:s(`Close`),type:`button`,children:(0,J.jsx)(Oi,{size:11})})]}),(0,J.jsxs)(Hs,{children:[m.length===0&&(0,J.jsx)(Ks,{children:s(`No tags yet.`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,J.jsxs)(Us,{children:[(0,J.jsx)(Ws,{"aria-label":s(`Color of {tag}`,{tag:e}),onChange:t=>_(e,t.target.value),title:s(`Change this tag's color`),type:`color`,value:t}),(0,J.jsxs)(Gs,{$color:t,$ink:Ls(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,J.jsx)(Di,{size:11}),(0,J.jsx)(`span`,{children:e})]})]},e)})]}),(0,J.jsxs)(qs,{children:[(0,J.jsx)(Ws,{"aria-label":s(`Color of the new tag`),onChange:e=>d(e.target.value),title:s(`Color of the new tag`),type:`color`,value:u}),(0,J.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:s(`New tag`),spellCheck:!1,value:c}),(0,J.jsx)(Js,{onClick:v,type:`button`,children:s(`Add`)})]})]}),document.body)}var zs=n.div`
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
`,Ys={file:di,folder:ui,text:Mi,code:Ni,image:Pi,video:Fi,audio:Ii,archive:Li,pdf:Ri,executable:zi,font:Bi,database:Vi,config:Hi,spreadsheet:Ui,presentation:Wi,document:Gi},Xs={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Zs(e){let t=e.lastIndexOf(`.`);return t>0?Xs[e.slice(t).toLowerCase()]??`file`:`file`}function Qs({name:e,size:t}){let n=Ys[e??`file`]??di;return(0,J.jsx)(n,{size:t})}function $s({path:e,name:t,isDirectory:n,size:r=18}){let i=ln(e,n);return i?(0,J.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,J.jsx)(ui,{size:r}):(0,J.jsx)(Qs,{name:Zs(t),size:r})}var ec=`application/x-yafm-paths`,tc=[ec,`text/uri-list`];function nc(e){return e?.types.some(e=>tc.includes(e.toLowerCase()))??!1}function rc(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(ec);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(ac).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var ic=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function ac(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return ic?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function oc(e,t,n=!0){e.dataTransfer.setData(ec,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function sc({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:o,onAdd:s,onRemove:c,onClear:l,onClose:u,onCopyToClipboard:d,onTransfer:f}){let m=p(),[h,g]=(0,z.useState)(()=>new Set),[_,y]=(0,z.useState)(!1),b=(0,z.useRef)(null),x=(0,z.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),S=(0,z.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),C=(0,z.useRef)(null);if((0,z.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=C.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&nc(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=rc(t);n.length!==0&&(t.preventDefault(),s(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,s]),!r)return null;let w=new Set([...e,...t].map(e=>e.path)),T=w.size>0&&[...w].every(e=>h.has(e)),E=w.size,ee=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{g(T?new Set:w)},O=e=>{b.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),y(!0)},k=e=>{let t=b.current;t&&o({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},A=e=>{b.current&&(b.current=null,y(!1),e.currentTarget.releasePointerCapture(e.pointerId))},te=()=>{let e=x.map(e=>e.path);e.length!==0&&(c(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},j=()=>{let e=x.map(e=>e.path);e.length!==0&&d(e)},ne=()=>{let e=new Map;for(let t of x)e.set(t.path,!0);for(let t of S)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&f(t,a,!0),r.length>0&&f(r,a,!1),g(new Set)},re=(e,t)=>{let n=h.has(e.path);return(0,J.jsxs)(yc,{$checked:n,draggable:!0,onClick:()=>ee(e.path),onDragStart:r=>{oc(r,n&&h.size>0?[...new Set([...x,...S].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,J.jsx)(bc,{$checked:n,onClick:t=>{t.stopPropagation(),ee(e.path)},type:`button`,children:n&&(0,J.jsx)(Di,{size:8})}),(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,J.jsxs)(xc,{children:[(0,J.jsx)(Sc,{children:e.name}),(0,J.jsx)(Cc,{children:v(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},M=e=>{nc(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,J.jsxs)(cc,{$dragging:_,"data-tray":`true`,ref:C,style:{left:i.x,top:i.y},onDragEnter:M,onDragOver:M,onDrop:e=>{let{paths:t}=rc(e);t.length>0&&(e.preventDefault(),s(t))},children:[(0,J.jsxs)(lc,{onPointerDown:O,onPointerMove:k,onPointerUp:A,children:[(0,J.jsxs)(uc,{children:[(0,J.jsx)(ca,{size:13}),m(`Tray`),(0,J.jsx)(dc,{children:E})]}),(0,J.jsxs)(fc,{onPointerDown:e=>e.stopPropagation(),children:[(0,J.jsx)(pc,{onClick:D,title:m(T?`Select none`:`Select all`),type:`button`,children:m(T?`None`:`All`)}),(0,J.jsx)(pc,{onClick:l,title:m(`Remove everything from the tray`),type:`button`,children:m(`Clear`)}),(0,J.jsx)(mc,{onClick:u,title:m(`Hide the tray`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]})]}),(0,J.jsxs)(hc,{children:[(0,J.jsxs)(_c,{children:[m(`In this app`),(0,J.jsx)(dc,{children:e.length})]}),e.length===0&&(0,J.jsx)(gc,{children:m(`Drag files or folders here`)}),e.map(e=>re(e,!0)),t.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(_c,{$clipboard:!0,children:[m(`Clipboard`),(0,J.jsx)(dc,{children:t.length}),n&&(0,J.jsx)(vc,{children:m(`Cut`)})]}),t.map(e=>re(e,n))]})]}),(0,J.jsxs)(wc,{children:[(0,J.jsx)(Tc,{$plain:!0,disabled:x.length===0,onClick:j,title:m(`Write the selected tray entries to the system clipboard`),type:`button`,children:m(`To clipboard`)}),(0,J.jsx)(Tc,{disabled:h.size===0||!a,onClick:ne,type:`button`,children:m(`Move here`)}),(0,J.jsx)(Tc,{$danger:!0,disabled:x.length===0,onClick:te,type:`button`,children:m(`Remove`)})]})]})}var cc=n.div`
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
`,Ec={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Dc(){return c.available?await c.request(`share.list`):Ec}async function Oc(e,t){return c.available?await c.request(`share.add`,{path:e,mode:t}):Ec}async function kc(e){return c.available?await c.request(`share.remove`,{id:e}):Ec}async function Ac(e,t){return c.available?await c.request(`share.mode`,{id:e,mode:t}):Ec}async function jc(){return c.available?(await c.request(`share.peers`)).peers??[]:[]}async function Mc(){return c.available?(await c.request(`share.peers.refresh`)).peers??[]:[]}async function Nc(e,t){c.available&&await c.request(`share.pair.start`,{host:e,port:t})}async function Pc(e,t){c.available&&await c.request(`share.pair.respond`,{requestId:e,accept:t})}async function Fc(e,t){c.available&&await c.request(`share.port`,{mode:t,port:e})}var Ic=`yafm://share/`;function Lc(e){return e.toLowerCase().startsWith(Ic)}function Rc(e){if(!Lc(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function zc(e,t,n=``){let r=`${Ic}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Bc(e){let t=Rc(e);if(!t||!c.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await c.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:zc(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:zc(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Vc(e){let t=Rc(e);if(!t||!c.available)throw Error(`This shared file is only available in the desktop app.`);let n=await c.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Hc(e){await be(await Vc(e))}var Uc=new Map,Wc=new Set,Gc=0;function Kc(){Gc+=1;for(let e of Wc)e()}function qc(e,t){t?Uc.set(e,t):Uc.delete(e),Kc()}function Jc(e){return Uc.has(e)}function Yc(e,t,n){Uc.get(e)?.(t,n)}function Xc(e){return Wc.add(e),()=>Wc.delete(e)}function Zc(){return Gc}function Qc(e){return(0,z.useSyncExternalStore)(Xc,Zc,Zc),{available:Jc(e),open:(t,n)=>Yc(e,t,n)}}function $c(e){return[...Uc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function el(e){return(0,z.useSyncExternalStore)(Xc,Zc,Zc),{available:$c(e).length>0,open:(t,n)=>{let r=$c(e).at(-1);r&&Yc(r,t,n)}}}var tl=60,nl=300,rl=[{id:`type`,label:`Type`,width:150},{id:`size`,label:`Size`,width:100},{id:`modified`,label:`Modified`,width:150},{id:`created`,label:`Created`,width:150},{id:`items`,label:`Items`,width:70},{id:`linkCount`,label:`Links`,width:70},{id:`linkStatus`,label:`Link`,width:90},{id:`tags`,label:`Tags`,width:150}],il=new Set,al=`yafm.columnWidths`,ol=`yafm.reset-column-widths`,sl=64,cl=720,ll=160,ul=190,dl=120;function fl({listing:e,loading:t,error:n,find:r=vn,view:i,showImages:a,imageStripHeight:o=ul,onImageStripHeight:s,onSort:c,onSetTags:l,onOpen:u,onOpenFile:d,showCheckboxes:f=!0,openOnSingleClick:m=!1,shortcuts:h=Bt,enableShortcuts:g=!0,refreshToken:_=0,onRefresh:v,onRename:b,onClipboardChanged:S,cutPaths:C=il,onTransfer:w,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:O,onPaste:k,confirmDelete:A=!1,previewVideoAudio:te=!1,previewVideoAutoplay:j=!1,showDetails:ne=!0,onPreviewInfo:re,onActivate:ae,groupOf:N,onGridScroll:F,gridFooter:oe,allowBackgroundMenu:I=!0,readOnly:se=!1,onSelectionChange:ce,onSelectionCountChange:le,selectionMenuRequest:ue,selectionMenuId:de,singleSelect:fe=!1,pendingRename:pe=null,pendingRenameToken:L=0,selectMatchesToken:me=0}){let R=p(),he=Pn(),B=(0,z.useRef)(null),ge=(0,z.useRef)(null),_e=(0,z.useRef)(null),V=(0,z.useRef)(null),[ve,ye]=(0,z.useState)(nl),[be,xe]=(0,z.useState)({top:0,height:640}),Se=(0,z.useRef)(null),Ce=(0,z.useRef)(null),[we,Te]=(0,z.useState)(null),[Ee,De]=(0,z.useState)(o),[Oe,ke]=(0,z.useState)(()=>new Set),[Ae,je]=(0,z.useState)(()=>qn(al)??{}),H=(0,z.useRef)(Oe),Me=(0,z.useRef)([]);H.current=Oe,(0,z.useEffect)(()=>ce?.([...Oe]),[Oe,ce]),(0,z.useEffect)(()=>le?.(Oe.size),[Oe,le]),(0,z.useEffect)(()=>{let e=ue;if(!e||e.token===Fe.current)return;Fe.current=e.token;let t=[...H.current];t.length!==0&&(Pe({x:e.x,y:e.y,paths:t,background:!1}),mt().then(Je,()=>Je(!1)))},[ue]);let[Ne,Pe]=(0,z.useState)(null),Fe=(0,z.useRef)(0),[Ie,U]=(0,z.useState)(null),[Le,Re]=(0,z.useState)(null),[ze,Be]=(0,z.useState)(null),Ve=(0,z.useRef)(ze);Ve.current=ze;let He=(0,z.useRef)(0),Ue=(0,z.useRef)(ae);Ue.current=ae;let[We,Ge]=(0,z.useState)(()=>{let e=Gn(`yafm.preview.width`,320);return e>=220?e:320}),Ke=(0,z.useCallback)(e=>{Ge(e),Kn(`yafm.preview.width`,e)},[]),[qe,Je]=(0,z.useState)(!1),Ye=(0,z.useCallback)((e,t)=>{let n=[...H.current];n.length!==0&&(Pe({x:e,y:t,paths:n,background:!1}),mt().then(Je,()=>Je(!1)))},[]);(0,z.useEffect)(()=>{if(de)return qc(de,Oe.size>0?Ye:null),()=>qc(de,null)},[de,Oe,Ye]),(0,z.useEffect)(()=>{ke(new Set),Be(null),Pe(null),Ce.current=null},[e?.path]),(0,z.useEffect)(()=>{De(o)},[o]),(0,z.useEffect)(()=>{ke(new Set),Be(null),Ce.current=null},[_]);let Xe=e=>{Se.current={y:e.clientY,height:Ee},e.currentTarget.setPointerCapture(e.pointerId)},Ze=e=>{let t=Se.current;if(!t)return;let n=Math.max(dl,Math.round(window.innerHeight*.7));De(Math.min(n,Math.max(dl,t.height+t.y-e.clientY)))},Qe=e=>{Se.current&&(Se.current=null,e.currentTarget.releasePointerCapture(e.pointerId),s?.(Ee))},$e=()=>{De(ul),s?.(ul)},et=r.query.length>0,tt=(0,z.useMemo)(()=>rl.filter(e=>i.columns?.includes(e.id)),[i.columns]),nt=i.columns?.includes(`linkTarget`)??!1,rt=(0,z.useCallback)(e=>Math.min(cl,Math.max(sl,Ae[e.id]??e.width)),[Ae]),it=(0,z.useMemo)(()=>`minmax(160px, 1fr) ${tt.map(e=>`${rt(e)}px`).join(` `)}`.trim(),[tt,rt]),at=(0,z.useRef)(null),ot=(0,z.useRef)(null),st=()=>Math.floor(ot.current?.getBoundingClientRect().width??ll),ct=e=>{let t=tt[0];t&&(e.preventDefault(),e.stopPropagation(),at.current={left:{id:t.id,start:rt(t)},startX:e.clientX,nameStart:st()})},lt=(e,t)=>{let n=tt[t],r=tt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),at.current={left:{id:n.id,start:rt(n)},right:{id:r.id,start:rt(r)},startX:e.clientX,nameStart:0})},ut=e=>je(t=>{let n={...t};return delete n[e],Jn(al,n),n});(0,z.useEffect)(()=>{let e=e=>{let t=at.current;if(!t)return;let n=e.clientX-t.startX;je(e=>{if(!t.right){let r=Math.max(0,t.nameStart-ll),i=Math.min(Math.min(cl,t.left.start+r),Math.max(sl,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(cl,Math.max(sl,t.left.start+n)),a=Math.min(Math.min(cl,r-sl),Math.max(Math.max(sl,r-cl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{at.current&&(at.current=null,je(e=>(Jn(al,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,z.useEffect)(()=>{let e=()=>je(()=>(Jn(al,{}),{}));return window.addEventListener(ol,e),()=>window.removeEventListener(ol,e)},[]);let W=(0,z.useMemo)(()=>e?hl(e.entries.map(t=>{let n=t.isDirectory?Fn(he,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:et?yn(i,r):null,tags:e.tags[t.name]??[],cut:C.has(t.fullPath)}}).filter(e=>!et||r.mode===`dim`||e.ranges!==null),i,e,R):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,et,r,he,i.sort,i.sortDescending,R,C]);Me.current=W,(0,z.useEffect)(()=>{me!==0&&ke(new Set(Me.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[me]);let dt=Math.max(40,i.iconSize+20),ft=Math.max(0,Math.floor(be.top/dt)-4),ht=Math.min(W.length,ft+Math.ceil(be.height/dt)+10),gt=(0,z.useMemo)(()=>W.slice(ft,ht),[W,ft,ht]);(0,z.useEffect)(()=>{let e=V.current;if(!e||i.mode!==`list`)return;let t=()=>xe(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,z.useEffect)(()=>{xe(e=>({...e,top:0})),V.current&&(V.current.scrollTop=0)},[e?.path]),(0,z.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=W.findIndex(e=>e.entry.fullPath===r.currentPath),t=V.current;if(e<0||!t)return;let n=e*dt;(n<t.scrollTop||n+dt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else B.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,W,dt]);let _t=(0,z.useMemo)(()=>W.slice(0,ve),[W,ve]);(0,z.useEffect)(()=>{let e=ge.current;if(!e||e.length===0)return;let t=e.filter(e=>W.some(t=>P(t.entry.fullPath,e)));if(t.length===0)return;ge.current=null;let n=t[0],r=W.findIndex(e=>P(e.entry.fullPath,n));r>=0&&ye(e=>Math.max(e,r+nl)),ke(new Set(t)),Ce.current=n,i.mode===`list`&&V.current&&r>=0?V.current.scrollTop=Math.max(0,r*dt-V.current.clientHeight/2):requestAnimationFrame(()=>B.current?.scrollIntoView({block:`nearest`}))},[W,dt,i.mode]),(0,z.useEffect)(()=>{ye(nl)},[e?.path]),(0,z.useEffect)(()=>{if(!r.currentPath)return;let e=W.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&ye(t=>Math.max(t,e+nl))},[r.currentPath,W]);let vt=(0,z.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&ye(e=>Math.min(W.length,e+nl))},[W.length]),Ct=i.mode===`grid`,wt=(0,z.useMemo)(()=>{if(!Ct)return[];if(!N)return vl(_t,_l);let e=[],t=new Map;for(let n of _t){let r=N(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[_t,Ct,N]),Tt=(0,z.useMemo)(()=>a?W.filter(e=>!e.entry.isDirectory&&An(e.entry.name)):[],[W,a]),Ot=Tt.length,At=(0,z.useMemo)(()=>Tt.slice(0,tl),[Tt]),jt=(0,z.useMemo)(()=>a?vl(At,gl):[],[At,a]),Mt=(0,z.useMemo)(()=>W.map(e=>e.entry.fullPath),[W]),Nt=W.length>0&&Oe.size>=W.length,Pt=Oe.size>0&&!Nt,Ft=()=>{fe||(Nt?Vt():ke(new Set(Mt)))},It=e?.path??``,Rt=(0,z.useCallback)((e,t)=>{if(fe){Ce.current=t,ke(new Set([t]));return}let n=e.ctrlKey||e.metaKey;ke(r=>{if(e.shiftKey&&Ce.current!==null){let e=Mt.indexOf(Ce.current),i=Mt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Mt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),Ce.current=t,e}return Ce.current=t,new Set([t])})},[Mt,fe]),zt=(0,z.useCallback)(e=>{fe?(Ce.current=e,ke(new Set([e]))):(Ce.current=e,ke(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[fe]),Vt=(0,z.useCallback)(()=>{Ce.current=null,ke(new Set)},[]);(0,z.useEffect)(()=>{if(L===0||!pe||He.current===L||!e?.entries.some(e=>e.fullPath===pe))return;He.current=L,Ce.current=pe,ke(new Set([pe])),Be({path:pe,value:y(pe)});let t=W.findIndex(e=>e.entry.fullPath===pe),n=V.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*dt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(pe)}"]`)?.scrollIntoView({block:`nearest`})})}},[V,e,pe,L,dt,W,i.mode]),(0,z.useEffect)(()=>{if(!ze)return;let e=W.findIndex(e=>e.entry.fullPath===ze.path),t=V.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*dt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(ze.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[V,ze,dt,W,i.mode]);let Ht=(0,z.useCallback)(()=>Pe(null),[]),Gt=(0,z.useCallback)((e,t)=>{e.isDirectory?u(e.fullPath,Ut(t)):d?.(e.fullPath,Ut(t))},[u,d]),Kt=(0,z.useCallback)((e,t,n)=>{Te({entry:e,x:t,y:n})},[]),Jt=(0,z.useRef)(null),Yt=(0,z.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;oc(e,Oe.has(n)?[...Oe]:[n])},[Oe]),Xt=(0,z.useCallback)(e=>{if(!nc(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Jt.current=t?.dataset.directory===`true`?t.dataset.path??It:It,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[It]),Zt=(0,z.useCallback)(e=>{if(se)return;let{paths:t,move:n}=rc(e),r=Jt.current??It;Jt.current=null,t.length!==0&&w&&(e.preventDefault(),w(t,r,!e.ctrlKey&&n))},[It,w,se]),Qt=(0,z.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),se||!t&&!I)return;let n=H.current;t&&!n.has(t)&&ke(new Set([t])),t&&(Ce.current=t);let r=t?n.has(t)?[...n]:[t]:[];Pe({x:e.clientX,y:e.clientY,paths:r,background:!t}),mt().then(Je,()=>Je(!1))},[I,It]),G=(0,z.useCallback)(()=>v?.(),[v]),$t=(e,t)=>{Ce.current=e,ke(new Set([e])),t&&Be({path:e,value:y(e)}),G()},en=Ie&&(0,J.jsx)(No,{initialDirectory:It,initialName:Ie.name,onCancel:()=>U(null),onCompress:async e=>{let t=await Lt(Ie.paths,e);return!t.ok||!t.path?(ka(t.error??R(`Could not create the archive.`)),!1):($t(t.path,!1),!0)}}),tn=async(e,t=!1)=>{let n=e,r=t;if(e.some(Lc)){let t=[];for(let n of e)if(!Lc(n))t.push(n);else{if(Me.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){ka(R(`Folders on a shared device cannot be copied yet.`));return}try{t.push(await Vc(n))}catch(e){ka(e instanceof Error?e.message:R(`The file could not be copied.`));return}}n=t,r=!1}await pt(n,r)&&(Je(!0),S?.())},nn=async e=>{if(!e)return;let t=await yt(e);t.cancelled||(t.ok?(ge.current=t.created,G(),k?.()):ka(R(`Nothing on the clipboard could be pasted here.`)))},rn=async(e,t=!1)=>{if(!It)return;let n=e===null?await St(It,t):await Et(It,e);!n.ok||n.path===null?ka(n.error??R(`Could not create the item.`)):(Ce.current=n.path,ke(new Set([n.path])),Be({path:n.path,value:y(n.path)}),G())},an=e=>{ke(new Set([e.fullPath])),Ce.current=e.fullPath,Be({path:e.fullPath,value:e.name})},on=(0,z.useCallback)(e=>Be(t=>t&&{...t,value:e}),[]),sn=(0,z.useCallback)(()=>Be(null),[]),cn=(0,z.useCallback)(async()=>{let e=Ve.current;if(Be(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Me.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await xt(e.path,t);r.ok?(Vt(),r.path&&b?.(e.path,r.path),G(),window.setTimeout(()=>G(),250)):ka(r.error??R(`Could not rename the entry.`))},[Vt,b,G,R]),ln=async(e,t=!1)=>{if((t||A)&&!await un(e,t))return;let n=await bt(e,t);if(!n.ok&&n.needsPermanent){if(!await un(e,!0))return;n=await bt(e,!0)}if(n.ok)Vt(),G();else{if(n.cancelled)return;ka(n.error??R(t?`Could not delete the selection.`:`Could not move the selection to the recycle bin.`))}},un=(0,z.useCallback)((e,t)=>new Promise(n=>Re({paths:e,permanent:t,resolve:n})),[]),K=(0,z.useCallback)(e=>{Re(t=>(t?.resolve(e),null))},[]);(0,z.useEffect)(()=>{if(!g||Ne)return;let e=e=>{if(qt(e.target))return;Ue.current?.();let t=Wt(e),n=[...Oe],r=n.length===1?W.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Mt.length===0)return;e.preventDefault();let n=Ce.current&&Mt.includes(Ce.current)?Ce.current:Oe.size===1?[...Oe][0]:null,r=n?Mt.indexOf(n):-1,i=t===`home`?0:t===`end`?Mt.length-1:Math.max(0,Math.min(Mt.length-1,r+(t===`arrowdown`?1:-1))),a=Mt[i];ke(new Set([a])),Ce.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===h.copy?i(()=>{n.length>0&&tn(n)}):t===h.cut?i(()=>{n.length>0&&tn(n,!0)}):t===h.paste?i(()=>void nn(It)):t===h.delete?i(()=>{n.length>0&&ln(n)}):t===h.deletePermanently?i(()=>{n.length>0&&ln(n,!0)}):t===h.selectAll?i(()=>{ke(new Set(Mt)),Ce.current=Mt[0]??null}):t===h.invertSelection?i(()=>{ke(new Set(Mt.filter(e=>!Oe.has(e)))),Ce.current=Mt[0]??null}):t===h.rename&&r?i(()=>void an(r)):t===h.open&&r?i(()=>{r.isDirectory?u(r.fullPath):d?.(r.fullPath)}):t===h.newFolder||t===`f10`?i(()=>void rn(null)):t===h.terminal?i(()=>void kt(It)):t===h.properties&&i(()=>void Dt(n.length>0?n:It?[It]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Mt,tn,rn,It,g,Ne,u,d,nn,ln,an,W,Oe,h]);let q=Le&&(0,J.jsx)(Ko,{confirmLabel:Le.permanent?R(`Delete`):R(`Move`),danger:Le.permanent,message:Le.permanent?R(`Permanently delete {target}? This cannot be undone.`,{target:Le.paths.length===1?R(`this item`):R(`{count} items`,{count:Le.paths.length})}):R(`Move {target} to the recycle bin?`,{target:Le.paths.length===1?R(`this item`):R(`{count} items`,{count:Le.paths.length})}),onCancel:()=>K(!1),onConfirm:()=>K(!0),open:!0,title:Le.permanent?R(`Delete permanently`):R(`Move to the recycle bin`)}),dn=(0,z.useMemo)(()=>{if(!e||Oe.size===0)return null;let t=Mt.find(e=>Oe.has(e));return t?W.find(e=>e.entry.fullPath===t)?.entry??null:null},[Mt,e,W,Oe]),fn=(0,z.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:y(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:R(`Type`),value:R(`Folder`)},{label:R(`Location`),value:e.parent??`—`},{label:R(`Path`),value:e.path},{label:R(`Size`),value:x(t)},{label:R(`Items`),value:ie(R,n,`1 item`,`{count} items`)},{label:R(`Modified`),value:`—`},{label:R(`Created`),value:`—`},{label:R(`Attributes`),value:`—`}]}},[e,R]),pn=(0,z.useMemo)(()=>{if(!dn||!e)return null;let t=dn.isDirectory?e.folderSizes[dn.name]:void 0,n=e.tags[dn.name]??[],r=dn.name.lastIndexOf(`.`),i=r>0&&r<dn.name.length-1?dn.name.slice(r+1).toUpperCase():`—`;return{name:dn.name,path:dn.fullPath,isDirectory:dn.isDirectory,size:dn.size,modified:dn.modified,created:dn.created,fields:[{label:R(`Type`),value:xl(dn,R)},...dn.isEncrypted?[{label:R(`Encryption`),value:R(`Password required`)}]:[],{label:R(`Extension`),value:dn.isDirectory?`—`:i},{label:R(`Location`),value:e.path},{label:R(`Full path`),value:dn.fullPath},{label:R(`Size`),value:dn.isDirectory?t===void 0?`—`:x(t):x(dn.size)},...dn.isDirectory?[{label:R(`Items`),value:`${e.counts[dn.name]??`—`}`}]:[],{label:R(`Modified`),value:M(dn.modified)},{label:R(`Created`),value:M(dn.created)},{label:R(`Link status`),value:dn.linkTarget==null?dn.linkCount>1?R(`Hard link`):`—`:dn.linkValid?`OK`:R(`Broken`)},...dn.linkTarget?[{label:R(`Target`),value:dn.linkTarget}]:[],...dn.linkCount>1?[{label:R(`Links`),value:String(dn.linkCount)}]:[],{label:R(`Attributes`),value:[dn.isHidden?R(`Hidden`):``,dn.isSystem?R(`System`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:R(`Tags`),value:n.join(`, `)}]:[]]}},[e,dn,R]),mn=Ne?.paths.length===1?Ne.paths[0]:null,hn=mn?W.find(e=>e.entry.fullPath===mn)?.entry:void 0,gn=hn?{path:hn.fullPath,isDirectory:hn.isDirectory}:null,_n=pn??fn,bn=(0,z.useRef)(re);bn.current=re,(0,z.useEffect)(()=>{bn.current?.(_n)},[re,_n]);let xn=ne&&_n&&(0,J.jsx)(rs,{info:_n,onWidth:Ke,selectionNote:Oe.size>1?ie(R,Oe.size,`1 item selected`,`{count} items selected`):void 0,videoAudio:te,videoAutoplay:j,width:We});return n&&!e?(0,J.jsx)(Tu,{children:(0,J.jsx)(Du,{children:n})}):!e&&!t?(0,J.jsx)(Tu,{children:(0,J.jsx)(Eu,{children:R(`Nothing selected.`)})}):i.mode===`grid`?(0,J.jsxs)(Hl,{onPointerDown:ae,children:[(0,J.jsxs)(Ul,{children:[(0,J.jsxs)(Zl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Vt()},onContextMenu:e=>Qt(e),onDragOver:Xt,onDragStart:Yt,onDrop:Zt,onScroll:e=>{F?.(e.currentTarget),vt(e.currentTarget)},children:[f&&W.length>0&&(0,J.jsxs)(zl,{children:[(0,J.jsx)(Ll,{$checked:!fe&&Nt,$partial:!fe&&Pt,"aria-label":R(Nt?`Select none`:`Select all`),disabled:fe,onClick:Ft,title:R(Nt?`Select none`:`Select all`),type:`button`,children:Nt?(0,J.jsx)(Di,{size:10}):Pt?(0,J.jsx)(Rl,{}):null}),(0,J.jsx)(`span`,{children:R(Nt?`Select none`:`Select all`)})]}),t&&!e?(0,J.jsx)(nu,{$size:i.gridSize,children:(0,J.jsx)(Dl,{size:i.gridSize})}):(0,J.jsx)(kl,{counts:e?.counts,currentPath:et?r.currentPath:null,groups:wt,gridSize:i.gridSize,innerRef:B,onContextMenu:Qt,onOpen:u,onOpenFile:d,onRenameCancel:sn,onRenameChange:on,onRenameCommit:cn,onSelect:Rt,onToggle:zt,openOnSingleClick:m,renaming:ze,searching:et,selected:Oe,showCheckboxes:f,showTarget:nt}),!t&&e&&W.length===0&&(0,J.jsx)(wu,{children:(0,J.jsx)(Eu,{children:n??(et&&r.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})}),oe]}),Ne&&(0,J.jsx)(_o,{canPaste:qe,directory:It,allowCompression:!0,menu:Ne,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:O,onArchiveCreated:$t,onClose:Ht,onCompressTo:(e,t)=>U({paths:e,name:t}),onCopy:tn,onCreateFile:e=>void rn(e),onCreateFolder:e=>void rn(null,e),onDelete:ln,onOpen:u,onOpenFile:d,onPaste:nn,onRefresh:G,onRename:e=>{let t=W.find(t=>t.entry.fullPath===e)?.entry;t&&an(t)},shortcuts:h,target:gn}),en,q]}),xn]}):(0,J.jsxs)(Hl,{onPointerDown:ae,children:[(0,J.jsxs)(Ul,{children:[(0,J.jsxs)(Wl,{onScroll:e=>{V.current&&V.current.scrollLeft!==e.currentTarget.scrollLeft&&(V.current.scrollLeft=e.currentTarget.scrollLeft)},ref:_e,style:{gridTemplateColumns:it},children:[(0,J.jsxs)(Pl,{ref:ot,children:[f&&(0,J.jsx)(Ll,{$checked:!fe&&Nt,$partial:!fe&&Pt,"aria-label":R(Nt?`Select none`:`Select all`),disabled:fe,onClick:e=>{e.stopPropagation(),Ft()},title:R(Nt?`Select none`:`Select all`),type:`button`,children:Nt?(0,J.jsx)(Di,{size:10}):Pt?(0,J.jsx)(Rl,{}):null}),(0,J.jsxs)(Gl,{onClick:()=>c(`name`),type:`button`,children:[R(`Name`),pl(i,`name`)]}),(0,J.jsx)(Il,{"aria-label":R(`Resize column`),onDoubleClick:()=>tt[0]&&ut(tt[0].id),onPointerDown:ct,role:`separator`})]}),tt.map((e,t)=>(0,J.jsxs)(Fl,{children:[(0,J.jsxs)(Gl,{onClick:()=>c(e.id),type:`button`,children:[R(e.label),pl(i,e.id)]}),t<tt.length-1&&(0,J.jsx)(Il,{"aria-label":R(`Resize column`),onDoubleClick:()=>ut(e.id),onPointerDown:e=>lt(e,t),role:`separator`})]},e.id))]}),(0,J.jsxs)(Kl,{onClick:e=>{e.target===e.currentTarget&&Vt()},onContextMenu:e=>Qt(e),onDragOver:Xt,onDragStart:Yt,onDrop:Zt,onScroll:e=>{_e.current&&_e.current.scrollLeft!==e.currentTarget.scrollLeft&&(_e.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;xe(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:V,children:[t&&!e?(0,J.jsx)(El,{template:it,columns:tt.length}):(0,J.jsxs)(J.Fragment,{children:[ft>0&&(0,J.jsx)(`div`,{style:{height:ft*dt}}),gt.map(t=>{let n=t.entry.fullPath;return(0,J.jsx)(jl,{current:et&&n===r.currentPath,dim:et&&t.ranges===null,height:dt,iconSize:i.iconSize,innerRef:B,listing:e,onContextMenu:Qt,onOpen:Gt,onRenameCancel:sn,onRenameChange:on,onRenameCommit:cn,onSelect:Rt,onTagEdit:Kt,onToggle:zt,openOnSingleClick:m,renaming:ze?.path===n?{value:ze.value}:null,row:t,selected:Oe.has(n),showCheckboxes:f,showTarget:nt,template:it,visible:tt},n)}),ht<W.length&&(0,J.jsx)(`div`,{style:{height:(W.length-ht)*dt}})]}),!t&&e&&W.length===0&&(0,J.jsx)(Tu,{children:(0,J.jsx)(Eu,{children:n??(et&&r.mode===`hide`?R(`No entries match the search.`):R(`This folder is empty.`))})})]}),a&&Tt.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(ql,{onDoubleClick:$e,onPointerDown:Xe,onPointerMove:Ze,onPointerUp:Qe,title:R(`Drag to resize; double-click to reset`)}),(0,J.jsxs)(Jl,{style:{height:Ee},children:[(0,J.jsxs)(Yl,{children:[R(`Preview`),(0,J.jsx)(Xl,{children:Ot>tl?`${At.length} / ${Ot}`:Ot})]}),(0,J.jsx)(Zl,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Vt()},onContextMenu:e=>Qt(e),children:(0,J.jsx)(kl,{counts:e?.counts,currentPath:et?r.currentPath:null,groups:jt,gridSize:i.gridSize,onContextMenu:Qt,onOpen:u,onOpenFile:d,onSelect:Rt,onToggle:zt,openOnSingleClick:m,searching:et,selected:Oe,showCheckboxes:f,showTarget:nt})})]})]}),we&&e&&(0,J.jsx)(Rs,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>l?.(we.entry.name,e,t),onClose:()=>Te(null),tags:e.tags[we.entry.name]??[],x:we.x,y:we.y}),Ne&&(0,J.jsx)(_o,{canPaste:qe,directory:It,allowCompression:!0,menu:Ne,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:O,onArchiveCreated:$t,onClose:Ht,onCompressTo:(e,t)=>U({paths:e,name:t}),onCopy:tn,onCreateFile:e=>void rn(e),onCreateFolder:e=>void rn(null,e),onDelete:ln,onOpen:u,onOpenFile:d,onPaste:nn,onRefresh:G,onRename:e=>{let t=W.find(t=>t.entry.fullPath===e)?.entry;t&&an(t)},shortcuts:h,target:gn}),en,q]}),xn]})}function pl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var ml=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function hl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return xl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:ml.compare(String(r),String(i));return t.sortDescending?-o:o})}var gl=Dn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&kn(t.entry.name)===e})),_l=[{id:`folders`,label:`Folders`,match:e=>e.entry.isDirectory},...gl.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`Other files`,match:()=>!0}];function vl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function yl(e){return Math.max(24,Math.min(e-56,160))}var bl={file:`File`,folder:`Folder`,text:`Text file`,code:`source file`,image:`image`,video:`Video`,audio:`Audio`,archive:`archive`,pdf:`PDF`,executable:`Application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function xl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`Shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`Internet shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`Folder link`):t(`Symbolic link`);if(e.isDirectory)return t(`Folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(bl[Zs(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`File`)}function Sl(e,t,n,r){switch(e){case`type`:return xl(t,r);case`size`:return wl(t,n.folderSizes);case`modified`:return M(t.modified);case`created`:return M(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`OK`:`—`:t.linkValid?`OK`:r(`Broken`);default:return``}}function Cl({name:e,ranges:t}){if(!t||t.length===0)return(0,J.jsx)(J.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,J.jsx)(Cu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,J.jsx)(J.Fragment,{children:n})}function wl(e,t){if(!e.isDirectory)return x(e.size);let n=t[e.name];return n===void 0?`—`:x(n)}function Tl({entry:e,size:t=18}){let n=p(),r=(0,z.useRef)(null),[i,a]=(0,z.useState)(!1);(0,z.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let o=ln(i?e.fullPath:null,e.isDirectory,t>32),s=K(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,J.jsxs)(Ml,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,J.jsx)(Qs,{name:e.iconSource.slice(5),size:t}):s?(0,J.jsx)(`img`,{alt:``,height:t,src:s,width:t}):o?(0,J.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,J.jsx)(ui,{size:t}):(0,J.jsx)(Qs,{name:Zs(e.name),size:t}),e.isEncrypted&&(0,J.jsx)(Nl,{title:n(`This archive is encrypted and asks for a password when opened.`),children:(0,J.jsx)(xa,{size:Math.max(8,Math.round(t*.52))})})]})}function El({template:e,columns:t}){return(0,J.jsx)(J.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,J.jsxs)(ru,{style:{gridTemplateColumns:e},children:[(0,J.jsxs)(ou,{children:[(0,J.jsx)(iu,{style:{flexShrink:0,height:18,width:18}}),(0,J.jsx)(iu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,J.jsx)(iu,{style:{width:t%2==0?44:92}},t))]},r))})}function Dl({size:e}){return(0,J.jsx)(J.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,J.jsxs)(_u,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,J.jsx)(vu,{children:(0,J.jsx)(iu,{style:{height:e,width:e}})}),(0,J.jsx)(bu,{children:(0,J.jsx)(iu,{style:{height:9,width:`${t}%`}})})]},n))})}var Ol=(0,z.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=p(),S=Pn(),C=!e.entry.isDirectory&&An(e.entry.name),w=(0,z.useRef)(null),[T,E]=(0,z.useState)(!1);(0,z.useEffect)(()=>{if(!C||T)return;let e=w.current;if(!e)return;if(!(`IntersectionObserver`in window)){E(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(E(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[C,T]);let ee=pn(C&&T?e.entry.fullPath:null,192,e.entry.modified),[D,O]=(0,z.useState)(!1),k=C&&ee!==null&&!D,A=e.entry.fullPath,te=t=>{e.entry.isDirectory?v(A,Ut(t)):y?.(A,Ut(t))};return(0,J.jsxs)(_u,{$current:t,$dim:n,$image:k,$selected:s,onClick:e=>{h(e,A),l&&te(e)},onContextMenu:e=>_(e,A),onDoubleClick:e=>{l||te(e)},ref:e=>{w.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":A,draggable:!u,children:[c&&(0,J.jsx)(Vl,{$checked:s,onClick:e=>{e.stopPropagation(),g(A)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`Deselect`:`Select`),type:`button`,children:s&&(0,J.jsx)(Di,{size:10})}),(0,J.jsx)(vu,{children:k?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>O(!0),src:ee}):(0,J.jsx)(yu,{children:e.place&&S.useIcons?(0,J.jsx)(Fs,{place:e.place,size:r}):(0,J.jsx)(Tl,{entry:e.entry,size:r})})}),(0,J.jsxs)(bu,{children:[u?(0,J.jsx)(Al,{onCancel:()=>m?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,J.jsx)(xu,{$broken:e.entry.linkValid===!1,children:(0,J.jsx)(Cl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,J.jsxs)(cu,{title:b(`This archive is encrypted and asks for a password when opened.`),children:[(0,J.jsx)(xa,{size:9}),b(`Encrypted`)]}),e.cut&&(0,J.jsxs)(lu,{title:b(`This item is cut and will move when something is pasted.`),children:[(0,J.jsx)(ma,{size:9}),b(`Cut`)]}),(0,J.jsx)(Su,{children:e.entry.isDirectory?i===void 0?xl(e.entry,b):b(`{type} · {count} items`,{type:xl(e.entry,b),count:i}):b(`{type} · {size}`,{type:xl(e.entry,b),size:x(e.entry.size)})}),a&&e.entry.linkTarget&&(0,J.jsxs)(du,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,J.jsx)(Sa,{size:9}),(0,J.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function kl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:_,onRenameCommit:v,onRenameCancel:y}){let b=p();return(0,J.jsx)(J.Fragment,{children:e.map(e=>(0,J.jsxs)(Ql,{children:[(0,J.jsxs)($l,{children:[b(e.label),(0,J.jsx)(eu,{children:e.rows.length}),(0,J.jsx)(tu,{})]}),(0,J.jsx)(nu,{$size:t,children:e.rows.map(e=>(0,J.jsx)(Ol,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:yl(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:y,onRenameChange:_,onRenameCommit:v,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id))})}function Al({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,z.useRef)(null);return(0,z.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,J.jsx)(uu,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var jl=(0,z.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,listing:d,innerRef:f,renaming:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onTagEdit:y,onRenameChange:b,onRenameCommit:x,onRenameCancel:S}){let C=p(),w=Pn(),T=e.entry.fullPath;return(0,J.jsxs)(au,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{h(t,T),o&&v(e.entry,t)},onContextMenu:e=>_(e,T),onDoubleClick:t=>{o||v(e.entry,t)},ref:t?f:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!m,children:[(0,J.jsxs)(ou,{children:[i&&(0,J.jsx)(Bl,{$checked:r,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:C(r?`Deselect`:`Select`),type:`button`,children:r&&(0,J.jsx)(Di,{size:10})}),e.place&&w.useIcons?(0,J.jsx)(Ml,{children:(0,J.jsx)(Fs,{place:e.place,size:s})}):(0,J.jsx)(Tl,{entry:e.entry,size:s}),m?(0,J.jsx)(Al,{onCancel:S,onChange:b,onCommit:x,value:m.value}):(0,J.jsx)(su,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,J.jsx)(Cl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,J.jsxs)(cu,{title:C(`This archive is encrypted and asks for a password when opened.`),children:[(0,J.jsx)(xa,{size:9}),C(`Encrypted`)]}),e.cut&&(0,J.jsxs)(lu,{title:C(`This item is cut and will move when something is pasted.`),children:[(0,J.jsx)(ma,{size:9}),C(`Cut`)]}),a&&e.entry.linkTarget&&(0,J.jsxs)(du,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,J.jsx)(Sa,{size:9}),(0,J.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,J.jsx)(fu,{children:t.id===`tags`?(0,J.jsx)(pu,{onClick:t=>{t.stopPropagation(),y(e.entry,t.clientX,t.clientY)},title:C(`Edit tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=d.tagColors?.[e]??`#64748b`;return(0,J.jsx)(mu,{$color:t,$ink:Ls(t),children:e},e)}):(0,J.jsx)(hu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,J.jsx)(gu,{children:C(`Broken`)}):Sl(t.id,e.entry,d,C)},t.id))]})}),Ml=n.span`
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
`,Ou=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,ku=`/assets/bloom-BpfZWiaG.mp4`,Au=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,ju=`/assets/drift-BRBSQL2_.mp4`,Mu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Nu=`/assets/ember-CtSz0YxR.mp4`,Pu=[{name:`Blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`Indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`Violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`Teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`Green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`Amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`Rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`Slate`,accent:`#64748b`,secondary:`#94a3b8`}],Fu=[{id:`aurora`,name:`Aurora`},{id:`dunes`,name:`Dunes`},{id:`tide`,name:`Tide`}],Iu=[{id:`builtin:video:drift`,name:`Drift`,url:ju,poster:Au},{id:`builtin:video:ember`,name:`Ember`,url:Nu,poster:Mu},{id:`builtin:video:bloom`,name:`Bloom`,url:ku,poster:Ou}],Lu=Fu.map(e=>({...e,variants:Pu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Uu(Wu(e.id,t))}))})),Ru=[{id:`ridgeline`,name:`Ridgeline`},{id:`skyline`,name:`Skyline`},{id:`orbit`,name:`Orbit`}].flatMap(e=>Pu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Uu(Gu(e.id,t))}))),zu=new Map([...Lu.flatMap(e=>e.variants),...Ru].map(e=>[e.id,e])),Bu=new Map(Iu.map(e=>[e.id,e]));function Vu(e){if(zu.has(e))return zu.get(e).url;if(Bu.has(e))return Bu.get(e).url;let t=e.split(`:`)[1];return t?zu.get(`builtin:${t}:indigo`)?.url??null:null}function Hu(e){return Bu.has(e)}function Uu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Wu(e,t){return e===`dunes`?Qu(t):e===`tide`?$u(t):Zu(t)}function Gu(e,t){return e===`skyline`?qu(t):e===`orbit`?Ju(t):Ku(t)}function Ku({accent:e,secondary:t}){let n=Xu(t,`#05070f`,.86),r=Xu(e,`#0b1020`,.72),i=Xu(t,`#0a0f1d`,.66),a=Xu(e,`#060a14`,.74);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${Xu(t,`#ffffff`,.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${i}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${a}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${Xu(e,`#03050a`,.9)}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function qu({accent:e,secondary:t}){let n=Xu(t,`#07040d`,.84),r=Xu(e,`#100716`,.7),i=Xu(e,`#08050e`,.82),a=Xu(t,`#0b0613`,.78);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${Xu(e,`#040208`,.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function Ju({accent:e,secondary:t}){let n=Xu(e,`#03050d`,.9),r=Xu(t,`#05030c`,.94),i=Xu(t,e,.35),a=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="#ffffff" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${Xu(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${n}"/>
            <stop offset="1" stop-color="${r}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${Xu(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${Xu(e,`#08050f`,.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${Xu(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function Yu(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function Xu(e,t,n){let[r,i,a]=Yu(e),[o,s,c]=Yu(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Zu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Xu(e,`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${Xu(t,`#070b1c`,.85)}"/>
            <stop offset="1" stop-color="${Xu(e,`#04060c`,.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${Xu(e,t,.5)}" opacity="0.42" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="0.5" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="0.42" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="0.36" filter="url(#soft2)"/>
</svg>`}function Qu({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Xu(t,`#120a05`,.84)}"/>
            <stop offset="0.5" stop-color="${Xu(t,`#1c0f07`,.7)}"/>
            <stop offset="1" stop-color="#0d0703"/>
        </linearGradient>
        <linearGradient id="dune1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${Xu(e,t,.25)}" stop-opacity="0.65"/>
            <stop offset="1" stop-color="${Xu(e,`#160b04`,.55)}" stop-opacity="0.2"/>
        </linearGradient>
        <linearGradient id="dune2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="${t}" stop-opacity="0.4"/>
            <stop offset="1" stop-color="${Xu(e,`#1a0d05`,.7)}" stop-opacity="0.15"/>
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
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${Xu(e,`#0b0603`,.82)}" opacity="0.75"/>
</svg>`}function $u({accent:e,secondary:t}){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${Xu(e,`#02070a`,.9)}"/>
            <stop offset="0.5" stop-color="${Xu(t,`#03100f`,.82)}"/>
            <stop offset="1" stop-color="${Xu(e,`#020609`,.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${Xu(e,t,.4)}" opacity="0.5" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var ed=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function td(e){return ed.test(e)}function nd({settings:e}){let t=e?.backgroundSource??null,n=t?.startsWith(`url:`)?t.slice(4):k(t)?t:null,r=t?.startsWith(`file:`)?t.slice(5):null,i=hn(r),a=t?.startsWith(`builtin:`)?Vu(t):n??i,o=n===null?r===null?t!==null&&Hu(t):td(r):td(n.split(/[?#]/)[0]);if(!t||!a)return null;let s=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,J.jsxs)(rd,{"aria-hidden":!0,children:[o?(0,J.jsx)(ad,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a,style:{filter:s}}):(0,J.jsx)(id,{src:a,style:{filter:s}}),(0,J.jsx)(od,{})]})}var rd=n.div`
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

    /* In the light palette the picture is washed towards the surface colour instead of darkened. */
    html[data-theme="light"] & {
        background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.66), rgba(var(--bg-rgb), 0.86)),
        radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.10), transparent 60%);
    }
`;function sd({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=p(),s=(0,z.useRef)(null),[c,l]=(0,z.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,z.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,Va.createPortal)((0,J.jsx)(dd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,J.jsxs)(fd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(pd,{children:o(`Protected folder`)}),(0,J.jsx)(md,{children:o(`These paths are protected by the safety settings:`)}),(0,J.jsx)(hd,{children:t.map(e=>(0,J.jsxs)(gd,{children:[(0,J.jsx)(_d,{children:e.path}),(0,J.jsx)(vd,{children:o(`Protected by {pattern}`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,J.jsx)(yd,{children:cd(o,u,r??!1)}),(0,J.jsx)(bd,{children:ld(o,u)}),(0,J.jsx)(xd,{children:o(`This waits {seconds}s before the button works.`,{seconds:n})}),(0,J.jsxs)(Sd,{children:[(0,J.jsx)(Cd,{onClick:i,ref:s,type:`button`,children:o(`Cancel`)}),(0,J.jsx)(wd,{disabled:c>0,onClick:a,type:`button`,children:c>0?ud(o,u,c):ud(o,u,0)})]})]})}),document.body)}function cd(e,t,n){switch(t){case`delete`:return e(n?`Deletes permanently`:`Moves to the recycle bin`);case`move`:return e(`Moves the entries`);case`rename`:return e(`Renames the entry`);case`write`:return e(`Writes into this folder`)}}function ld(e,t){switch(t){case`delete`:return e(`Nothing has been deleted.`);case`move`:return e(`Nothing has been moved.`);case`rename`:return e(`Nothing has been renamed.`);case`write`:return e(`Nothing has been written.`)}}function ud(e,t,n){let r=n>0?t===`delete`?`Delete anyway ({seconds}s)`:t===`move`?`Move anyway ({seconds}s)`:t===`rename`?`Rename anyway ({seconds}s)`:`Write anyway ({seconds}s)`:t===`delete`?`Delete anyway`:t===`move`?`Move anyway`:t===`rename`?`Rename anyway`:`Write anyway`;return n>0?e(r,{seconds:n}):e(r)}var dd=n.div`
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
`;function Td(){let e=p(),[t,n]=(0,z.useState)(null),r=(0,z.useRef)(null),i=(0,z.useRef)(null);(0,z.useEffect)(()=>(Oa(e=>new Promise(t=>{r.current=t,n(e)})),()=>Oa(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,z.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Va.createPortal)((0,J.jsx)(Ed,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,J.jsxs)(Dd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(Od,{children:e(`Notice`)}),(0,J.jsx)(kd,{children:t}),(0,J.jsx)(Ad,{children:(0,J.jsx)(jd,{onClick:a,ref:i,type:`button`,children:e(`OK`)})})]})}),document.body)}var Ed=n.div`
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
`;function Md(){let e=p(),[t,n]=(0,z.useState)(null),[r,i]=(0,z.useState)(``),a=(0,z.useRef)(null),o=(0,z.useRef)(null);(0,z.useEffect)(()=>(Aa((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Aa(null)),[]),(0,z.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,Va.createPortal)((0,J.jsx)(Nd,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,J.jsxs)(Pd,{role:`dialog`,"aria-modal":`true`,children:[(0,J.jsx)(Fd,{children:e(`Archive password`)}),(0,J.jsx)(Id,{children:t.wrong?e(`That password did not open the archive. Try again.`):e(`This archive is encrypted. Enter its password.`)}),(0,J.jsx)(Ld,{title:t.archive,children:t.archive}),(0,J.jsx)(Rd,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,J.jsxs)(zd,{children:[(0,J.jsx)(Bd,{onClick:()=>s(null),type:`button`,children:e(`Cancel`)}),(0,J.jsx)(Vd,{disabled:r.length===0,onClick:c,type:`button`,children:e(`OK`)})]})]})}),document.body)}var Nd=n.div`
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
`;function Hd({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:m,onMode:h,onClose:g,onSelectMatches:_}){let v=p(),y=(0,z.useRef)(null),b=c??v(`Search this folder`);(0,z.useEffect)(()=>{let e=y.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let x=e=>{e(),y.current?.focus()};return(0,J.jsxs)(Ud,{children:[(0,J.jsx)(pi,{}),(0,J.jsx)(Wd,{"aria-label":b,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),g())},placeholder:b,ref:y,spellCheck:!1,value:e}),!s&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Gd,{children:i===0?`0/0`:`${a+1}/${i}`}),_&&(0,J.jsx)(Kd,{disabled:i===0,onClick:_,title:v(`Select all matches`),type:`button`,children:(0,J.jsx)(Di,{size:12})}),(0,J.jsx)(Kd,{$chevron:!0,onClick:()=>x(u),title:v(`Previous match (Shift+Enter)`),type:`button`,children:(0,J.jsx)(yi,{size:12})}),(0,J.jsx)(Kd,{$chevron:!0,$down:!0,onClick:()=>x(d),title:v(`Next match (Enter)`),type:`button`,children:(0,J.jsx)(yi,{size:12})})]}),(0,J.jsx)(qd,{$on:n,onClick:()=>x(f),title:v(`Match case`),type:`button`,children:`Aa`}),(0,J.jsx)(qd,{$on:r,onClick:()=>x(m),title:v(`Regular expression`),type:`button`,children:`.*`}),!s&&(0,J.jsx)(Jd,{$on:t===`hide`,onClick:()=>x(h),title:v(t===`hide`?`Non-matching entries are hidden`:`Non-matching entries are dimmed`),type:`button`,children:t===`hide`?(0,J.jsx)(Ai,{size:12}):(0,J.jsx)(ki,{size:12})}),(0,J.jsx)(Kd,{onClick:g,title:v(`Close search (Esc)`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]})}var Ud=n.div`
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
`;function Yd(e,t,n,r,i=[]){(0,z.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=yn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function Xd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=p(),a=(0,z.useRef)(null),o=(0,z.useRef)(null),[s,c]=(0,z.useState)(null);return(0,z.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,z.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,z.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,Va.createPortal)((0,J.jsxs)(Zd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(As).map(n=>(0,J.jsx)(Qd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:As[n](16)},n)),(0,J.jsx)(Qd,{onClick:async()=>{let e=await Ta([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`Choose an image`),type:`button`,children:(0,J.jsx)(gi,{size:13})}),r&&(0,J.jsx)(Qd,{$active:!e,onClick:()=>t(null),title:i(`Default`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]}),document.body)]})}var Zd=n.div`
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
`;function $d({source:e,poster:t}){let n=k(e),r=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,i=hn(e.startsWith(`builtin:`)||n?null:e,0,r?`.${r}`:``),a=t??Vu(e)??(n?e:i),o=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(r);return a?o?(0,J.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:a}):(0,J.jsx)(`img`,{alt:``,src:a}):null}function ef({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let o=p(),s=(0,z.useRef)(null),c=(0,z.useRef)(null),l=(0,z.useRef)(!1),[u,d]=(0,z.useState)(null),[f,m]=(0,z.useState)(null),[h,g]=(0,z.useState)(0),_=()=>{let t=s.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?d({width:1920,height:1080}):n>0&&r>0&&d({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},v=f&&u?Math.min(f.height,n*(f.width/u.width)):0,y=Math.max(0,(f?.height??0)-v);(0,z.useEffect)(()=>{f&&u&&!l.current&&(l.current=!0,g(Math.min(y,Math.max(0,r*y))))},[f,u,y,r]),(0,z.useEffect)(()=>{let e=()=>_();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,z.useEffect)(()=>{let e=window.requestAnimationFrame(_);return()=>window.cancelAnimationFrame(e)},[e,t]);let b=e=>{c.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},x=e=>{let t=c.current;t&&g(Math.min(y,Math.max(0,t.top+e.clientY-t.y)))},S=e=>{c.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,J.jsx)(Sf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,J.jsxs)(Cf,{children:[(0,J.jsxs)(wf,{children:[(0,J.jsx)(`span`,{children:o(`Adjust banner framing`)}),(0,J.jsx)(jf,{onClick:i,title:o(`Cancel`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]}),(0,J.jsx)(Tf,{children:o(`Drag the frame to choose the visible part.`)}),(0,J.jsxs)(Ef,{children:[t?(0,J.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{_(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{s.current=e},src:e}):(0,J.jsx)(`img`,{alt:``,draggable:!1,onLoad:_,ref:e=>{s.current=e},src:e}),v>0&&(0,J.jsx)(Df,{onPointerCancel:S,onPointerDown:b,onPointerMove:x,onPointerUp:S,style:{height:v,top:h},children:(0,J.jsx)(Of,{})})]}),(0,J.jsxs)(kf,{children:[(0,J.jsx)(Af,{onClick:i,type:`button`,children:o(`Cancel`)}),(0,J.jsx)(Af,{$primary:!0,onClick:()=>a(y>0?h/y:r),type:`button`,children:o(`Save`)})]})]})})}var tf=150,nf=120,rf=200,af=n.div`
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
`;function Tp({places:e,drives:t,recent:n,recentLimit:r,homePath:i,historyVersion:a,onOpen:o,onPlacesChanged:s,onRecentCleared:l,onLayoutChanged:u,onHistoryChanged:d,onDrivesChanged:f,visibilityVersion:m=0,find:h,onSearchMatches:g,readOnly:_=!1,onPick:v,onSelectionChange:S,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:T,favoritePaths:E,onExtractArchive:ee,settingsVersion:D=0}){let O=p(),A=Pn(),[j,ne]=(0,z.useState)(!1),[M,ae]=(0,z.useState)(null),N=M?.overviewBanner??null,F=N?.startsWith(`builtin:`)??!1,oe=N?.startsWith(`url:`)?N.slice(4):k(N)?N:null,I=F||oe?``:N??``,se=F?``:oe?oe.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:I.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,ce=F?Hu(N):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(se),le=hn(I.length>0?I:null,0,se?`.${se}`:``),ue=N?Vu(N)??oe??le:null,[de,fe]=(0,z.useState)(``),[pe,L]=(0,z.useState)(null),[me,R]=(0,z.useState)(!1),[he,B]=(0,z.useState)(null),[ge,_e]=(0,z.useState)(null),[V,ve]=(0,z.useState)(null),[xe,Se]=(0,z.useState)([]),[Ce,we]=(0,z.useState)(null),[Te,Ee]=(0,z.useState)(``),[De,Oe]=(0,z.useState)(null),[Ae,je]=(0,z.useState)(null),H=el(`overview`),[Me,Ne]=(0,z.useState)(null),[Pe,Fe]=(0,z.useState)(null),Ie=(0,z.useRef)(null),U=(0,z.useRef)(null),Le=(0,z.useRef)(null),Re=(0,z.useRef)(null),ze=(0,z.useRef)(null),Be=Pe??M?.overviewBannerHeight??220,[Ue,We]=(0,z.useState)(0),[Ge,Ke]=(0,z.useState)(null),Je=Math.min(1,Math.max(0,M?.overviewBannerOffset??.3)),Ye=Be+rf,Xe=Ge&&Ue>0?Ge.height*(Ue/Ge.width):Ye,Ze=Xe>0&&Xe<Ye+240?(Ye+240)/Xe:1,Qe=Math.max(1,Math.round(Ue*Ze)),$e=Math.max(0,Xe*Ze-Ye),et=Math.min(nf,$e/2,Math.max(20,Be*.42)),tt=et+Je*Math.max(0,$e-et*2),[rt,it]=(0,z.useState)(!1),at=(e,t=!1)=>v?(Oe(e),je({path:e,isDirectory:t}),S?.([e]),!0):!1,ot=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),Oe(t),je({path:t,isDirectory:n}),Ne({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,z.useEffect)(()=>(qc(`overview`,Ae?(e,t)=>Ne({x:e,y:t,target:Ae}):null),()=>qc(`overview`,null)),[Ae]);let st=(e,t)=>o(e,t);(0,z.useEffect)(()=>{qe().then(ae,()=>ae(null))},[D]),(0,z.useEffect)(()=>{if(c.available)return Mc().then(Se,()=>void 0),c.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Se(t.data.peers)})},[]),(0,z.useEffect)(()=>{let e=Le.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,z.useEffect)(()=>{if(F&&!ce){Ke({width:1920,height:1080});return}Ke(null);let e=ze.current;e?.complete&&e.naturalWidth>0&&Ke({width:e.naturalWidth,height:e.naturalHeight})},[N,F,ce]),(0,z.useEffect)(()=>{let e=Re.current;if(!e)return;let t=()=>We(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[M?.overviewBanner]),(0,z.useEffect)(()=>{if(!pe)return;let e=()=>L(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||L(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[pe]),(0,z.useEffect)(()=>{if(!me)return;let e=()=>R(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[me]);let ct=Ms(M),lt=ct.map(e=>e.id),ut=(0,z.useRef)(null),W=e=>pe?.kind===`panel`&&pe.id===e,dt=e=>pe?.kind===`place`&&pe.id===e;(0,z.useEffect)(()=>{if(!c.available)return;let e=ct.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??i).filter(e=>e.length>0);return c.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>c.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[ct.map(e=>e.path??e.id).join(`|`),i]),Yd(ut,h??null,`section`,g??(()=>void 0),[n.length,e.length,t.length,m]);let ft=async(e,t)=>{let n={...M?.placeIcons};t?n[e]=t:delete n[e],L(null),await vt({placeIcons:n}),s(await ke())},mt=async(e,t)=>{let n={...M?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],_e(null),await vt({placeNames:n}),s(await ke())},ht=e=>{ve(null),B({drive:e,label:e.label||`Local Disk`})},gt=async()=>{if(!he)return;let{drive:e,label:t}=he;B(null);let n=await ye(e.name,t.trim());n.ok?(ve(null),f?.()):ve(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},_t=M?.overviewColumns??1,vt=async e=>{if(!M)return;let t={...M,...e,overviewPanels:e.overviewPanels??lt,overviewHidden:[]};ae(await nt(t)),u?.()},yt=async()=>{await vt({overviewPanels:[...Ds],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),s(await ke()),ne(!1)},bt=async()=>{let e=await Ta([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=M?.overviewBanners??[];await vt({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},xt=async()=>{let e=de.trim();if(!M||!k(e))return;let t=M.overviewBanners??[];fe(``),await vt({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},St=()=>void vt({overviewBanner:null}),Ct=e=>void vt({overviewBanners:(M?.overviewBanners??[]).filter(t=>t!==e),...M?.overviewBanner===e||M?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),wt=e=>{Ie.current={y:e.clientY,height:Be},e.currentTarget.setPointerCapture(e.pointerId)},Tt=e=>{let t=Ie.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));U.current=n,Fe(n)},Et=e=>{Ie.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),U.current!==null&&(vt({overviewBannerHeight:U.current}),U.current=null)},Dt=(e,t)=>{let n=lt.indexOf(e),r=n+t;if(n<0||r<0||r>=lt.length)return;let i=[...lt];[i[n],i[r]]=[i[r],i[n]],vt({overviewPanels:i})},Ot=(e,t)=>{let n={...M?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],vt({overviewTitles:n})},kt=(e,t)=>void vt({overviewViews:{...M?.overviewViews,[e]:t}}),At=e=>{let t=M?.overviewPinned??ct.filter(e=>e.pinned).map(e=>e.id);vt({overviewPinned:ct.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},jt=e=>{L(null);let t=t=>{let n={...t};return delete n[e],n},n=M?.overviewPinned??ct.filter(e=>e.pinned).map(e=>e.id);vt({overviewPanels:lt.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(M?.overviewTitles),overviewViews:t(M?.overviewViews),overviewIcons:t(M?.overviewIcons),panelPlaces:t(M?.panelPlaces)})},Mt=(e,t)=>{let n={...M?.overviewIcons};t?n[e]=t:delete n[e],L(null),vt({overviewIcons:n})},Nt=async e=>{if(!M)return;if(e===`folder`){let e=await wa();if(!e)return;let t=`folder:${e}`;lt.includes(t)||await vt({overviewPanels:[...lt,t]});return}if(e===`quick`){let e=2;for(;lt.includes(`quick:${e}`);)e+=1;await vt({overviewPanels:[...lt,`quick:${e}`]});return}let t=e;for(let n=2;lt.includes(t);n+=1)t=`${e}:${n}`;await vt({overviewPanels:[...lt,t]})},Pt=async t=>{let n=await wa();if(!n)return;if(t.id===`quick`){await vt({quickAccess:[...new Set([...e.map(e=>e.path),n])]}),s(await ke());return}let r=t.places??[];r.some(e=>P(e,n))||await vt({panelPlaces:{...M?.panelPlaces,[t.id]:[...r,n]}})},Ft=async(t,n)=>{L(null),t.id===`quick`?(await vt({quickAccess:e.filter(e=>!P(e.path,n)).map(e=>e.path)}),s(await ke())):await vt({panelPlaces:{...M?.panelPlaces,[t.id]:(t.places??[]).filter(e=>!P(e,n))}})},It=async(t,n,r)=>{if(P(n,r))return;let i=t.id===`quick`?e.map(e=>e.path):t.places??[],a=i.findIndex(e=>P(e,n)),o=i.findIndex(e=>P(e,r));if(a<0||o<0)return;let c=[...i],[l]=c.splice(a,1);c.splice(o,0,l),t.id===`quick`?(await vt({quickAccess:c}),s(await ke())):await vt({panelPlaces:{...M?.panelPlaces,[t.id]:c}})},Lt=(e,t)=>({draggable:j,onDragOver:e=>{j&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{j&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{j&&(n.preventDefault(),It(e,n.dataTransfer.getData(`text/plain`),t))}}),Rt=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>P(e.path,t));return{name:M?.placeNames?.[t]??n?.name??(y(t)||t),path:t,kind:`folder`,icon:n?.icon??M?.placeIcons?.[t]??null}}),zt=e=>{if(n.length===0)return(0,J.jsx)(gp,{children:O(`Files and folders you open show up here.`)});let t=n.slice(0,r);return e.view===`grid`?(0,J.jsx)(Jf,{children:t.map(e=>{let t=Fn(A,e.path);return(0,J.jsxs)(Yf,{$plain:!1,$selected:De===e.path,onClick:t=>{at(e.path,e.isDirectory)||(e.isDirectory?o(e.path,Ut(t)):be(e.path))},onDoubleClick:()=>v?.(e.path),onContextMenu:t=>ot(t,e.path,e.isDirectory),title:e.path,children:[(0,J.jsx)(Xf,{children:t&&A.useIcons?(0,J.jsx)(Fs,{place:t,size:18}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(Qf,{children:e.path})]})]},e.path)})}):(0,J.jsx)($f,{children:t.map(e=>{let t=Fn(A,e.path);return(0,J.jsxs)(ep,{$selected:De===e.path,onClick:t=>{at(e.path,e.isDirectory)||(e.isDirectory?o(e.path,Ut(t)):be(e.path))},onDoubleClick:()=>v?.(e.path),onContextMenu:t=>ot(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&A.useIcons?(0,J.jsx)(Fs,{place:t,size:15}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(Qf,{children:e.path})]})]},e.path)})})},Vt=e=>{let t=M?.favorites??[],n=async e=>{await vt({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>P(t.path,e))&&await vt({favorites:[...t,{path:e,name:y(e)||e,isDirectory:n}]})},i=(e,t,n)=>{j||at(t,n)||(n?o(t,Ut(e)):be(t))},a=j?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(np,{$row:e.view===`list`,onClick:()=>void Ta().then(e=>r(e,!1)),title:O(`Pin any file here`),type:`button`,children:[e.view===`list`?(0,J.jsx)(gi,{size:15}):(0,J.jsx)(Xf,{children:(0,J.jsx)(gi,{size:15})}),e.view===`list`?(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:O(`Add file`)}),(0,J.jsx)(Qf,{children:O(`Pin any file here`)})]}):(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:O(`Add file`)}),(0,J.jsx)(Qf,{children:O(`Pin any file here`)})]})]}),(0,J.jsxs)(np,{$row:e.view===`list`,onClick:()=>void wa().then(e=>r(e,!0)),title:O(`Pin any folder here`),type:`button`,children:[e.view===`list`?(0,J.jsx)(gi,{size:15}):(0,J.jsx)(Xf,{children:(0,J.jsx)(gi,{size:15})}),e.view===`list`?(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:O(`Add folder`)}),(0,J.jsx)(Qf,{children:O(`Pin any folder here`)})]}):(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:O(`Add folder`)}),(0,J.jsx)(Qf,{children:O(`Pin any folder here`)})]})]})]}):null;return t.length===0&&!j?(0,J.jsx)(gp,{children:O(`No favorites yet. Right-click any file or folder and add it here.`)}):e.view===`grid`?(0,J.jsxs)(Jf,{children:[t.map(e=>{let t=Fn(A,e.path);return(0,J.jsxs)(Yf,{$plain:j,$selected:De===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!j&&v?.(e.path),onContextMenu:t=>!j&&ot(t,e.path,e.isDirectory),title:e.path,children:[j&&(0,J.jsx)(dp,{onClick:t=>{t.stopPropagation(),n(e.path)},title:O(`Remove from favorites`),type:`button`,children:(0,J.jsx)(Oi,{size:11})}),(0,J.jsx)(Xf,{children:t&&A.useIcons?(0,J.jsx)(Fs,{place:t,size:18}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(Qf,{children:e.path})]})]},e.path)}),a]}):(0,J.jsxs)($f,{children:[t.map(e=>{let t=Fn(A,e.path);return(0,J.jsxs)(ep,{$selected:De===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!j&&v?.(e.path),onContextMenu:t=>!j&&ot(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&A.useIcons?(0,J.jsx)(Fs,{place:t,size:15}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(Qf,{children:e.path})]}),j&&(0,J.jsx)(dp,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:O(`Remove from favorites`),type:`button`,children:(0,J.jsx)(Oi,{size:11})})]},e.path)}),a]})},Ht=e=>{if(t.length===0)return(0,J.jsx)(gp,{children:O(`No drives are available.`)});let n=t.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=he?.drive.name===t.name,i=r?(0,J.jsx)(Ep,{maxLength:32,onCancel:()=>B(null),onChange:e=>B({...he,label:e}),onCommit:()=>void gt(),value:he?.label??``}):(0,J.jsx)(J.Fragment,{children:re(t)}),a=!r&&j&&(0,J.jsx)(fp,{onClick:e=>{e.stopPropagation(),ht(t)},title:O(`Rename volume`),type:`button`,children:(0,J.jsx)(qi,{size:11})}),s=(0,J.jsx)(Qf,{children:O(`{free} free of {total}`,{free:x(t.freeSpace),total:x(t.totalSize)})});return e.view===`grid`?(0,J.jsxs)(Yf,{$plain:!1,$selected:De===t.name,onClick:e=>{!r&&at(t.name,!0)||r||o(t.name,Ut(e))},onDoubleClick:()=>!r&&v?.(t.name),onContextMenu:e=>!r&&ot(e,t.name,!0),title:t.name,children:[(0,J.jsx)(Xf,{children:(0,J.jsx)(fi,{size:18})}),(0,J.jsxs)(Zf,{children:[(0,J.jsxs)(`strong`,{children:[i,r&&te(t),a]}),s]})]},t.name):(0,J.jsxs)(ep,{as:r?`div`:`button`,$selected:De===t.name,onClick:r?void 0:e=>{at(t.name,!0)||o(t.name,Ut(e))},onDoubleClick:r?void 0:()=>v?.(t.name),onContextMenu:r?void 0:e=>ot(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,J.jsx)(fi,{size:18}),(0,J.jsxs)(tp,{children:[(0,J.jsxs)(`strong`,{children:[i,r&&te(t),a]}),s]}),(0,J.jsx)(rp,{children:(0,J.jsx)(ip,{$used:n,$tone:b(n)})})]},t.name)});return e.view===`grid`?(0,J.jsx)(Jf,{children:n}):(0,J.jsx)($f,{children:n})},Wt=()=>{let e=async e=>{we(e.id);try{await Nc(e.host,e.port)}finally{we(null)}},t=async()=>{let e=Te.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){we(`manual`);try{await Nc(n,r)}finally{we(null)}}};return(0,J.jsxs)(_p,{children:[(0,J.jsxs)(vp,{children:[(0,J.jsx)(yp,{onChange:e=>Ee(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:O(`Address, e.g. 192.168.1.20:45701`),value:Te}),(0,J.jsx)(wp,{disabled:Ce!==null||!Te.includes(`:`),onClick:()=>void t(),type:`button`,children:O(Ce===`manual`?`Pairing…`:`Pair by address`)})]}),xe.length===0&&(0,J.jsx)(gp,{children:O(`No sharing devices on this network yet. Pair one by address or share a folder from the title bar.`)}),xe.map(t=>(0,J.jsxs)(bp,{children:[(0,J.jsxs)(xp,{children:[(0,J.jsx)(sa,{size:14}),(0,J.jsx)(Sp,{title:t.host,children:t.name}),(0,J.jsx)(Cp,{$online:t.online,children:t.paired?t.online?O(`Paired`):O(`Offline`):O(`Not paired`)}),!t.paired&&t.online&&(0,J.jsx)(wp,{disabled:Ce===t.id,onClick:()=>void e(t),type:`button`,children:Ce===t.id?O(`Pairing…`):O(`Pair`)})]}),t.paired&&t.shares.length===0&&(0,J.jsx)(Qf,{children:O(`No folders are shared with the app on this device.`)}),t.shares.map(e=>(0,J.jsxs)(ep,{onClick:n=>o(zc(t.id,e.id),Ut(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,J.jsx)(sa,{size:14}),(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:e.name}),(0,J.jsx)(Qf,{children:t.name})]}),(0,J.jsx)(la,{size:12})]},e.id))]},t.id))]})},Gt=e=>{switch(e.kind){case`share`:return Wt();case`favorites`:return Vt(e);case`quick`:{let t=Rt(e);return!j&&t.length===0?(0,J.jsx)(gp,{children:O(`No folders in this Quick access panel yet.`)}):e.view===`grid`?(0,J.jsxs)(Jf,{children:[t.map(t=>(0,J.jsxs)(Yf,{$plain:j,$selected:De===t.path,...Lt(e,t.path),onClick:e=>{!j&&!at(t.path,!0)&&o(t.path,Ut(e))},onDoubleClick:()=>!j&&v?.(t.path),onContextMenu:e=>!j&&ot(e,t.path,!0),title:t.path,children:[j&&(0,J.jsx)(dp,{onClick:n=>{n.stopPropagation(),Ft(e,t.path)},title:O(`Remove from Quick access`),type:`button`,children:(0,J.jsx)(Oi,{size:11})}),(0,J.jsxs)(lp,{children:[j?(0,J.jsx)(up,{onClick:e=>{e.stopPropagation(),L(dt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,J.jsx)(Xf,{children:(0,J.jsx)(Fs,{place:t})})}):(0,J.jsx)(Xf,{children:(0,J.jsx)(Fs,{place:t})}),dt(t.path)&&(0,J.jsx)(Xd,{onPick:e=>void ft(t.path,e),value:M?.placeIcons?.[t.path]??t.icon})]}),(0,J.jsxs)(Zf,{children:[ge?.path===t.path?(0,J.jsx)(`strong`,{children:(0,J.jsx)(Ep,{onCancel:()=>_e(null),onChange:e=>_e({path:t.path,name:e}),onCommit:()=>void mt(t.path,ge?.name??``),value:ge?.name??``})}):(0,J.jsxs)(`strong`,{children:[t.name,j&&(0,J.jsx)(fp,{onClick:e=>{e.stopPropagation(),L(null),_e({path:t.path,name:t.name})},title:O(`Rename folder`),type:`button`,children:(0,J.jsx)(qi,{size:11})})]}),(0,J.jsx)(Qf,{children:t.path})]})]},t.path)),j&&(0,J.jsxs)(np,{onClick:()=>void Pt(e),title:O(`Pin a folder here`),type:`button`,children:[(0,J.jsx)(Xf,{children:(0,J.jsx)(gi,{size:15})}),(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:O(`Add folder`)}),(0,J.jsx)(Qf,{children:O(`Pin a directory here`)})]})]})]}):(0,J.jsxs)($f,{children:[t.map(t=>(0,J.jsxs)(ep,{$selected:De===t.path,...Lt(e,t.path),onClick:e=>{!j&&!at(t.path,!0)&&o(t.path,Ut(e))},onDoubleClick:()=>!j&&v?.(t.path),onContextMenu:e=>!j&&ot(e,t.path,!0),title:t.path,type:`button`,children:[(0,J.jsxs)(lp,{children:[j?(0,J.jsx)(up,{onClick:e=>{e.stopPropagation(),L(dt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,J.jsx)(Fs,{place:t,size:15})}):(0,J.jsx)(Fs,{place:t,size:15}),dt(t.path)&&(0,J.jsx)(Xd,{onPick:e=>void ft(t.path,e),value:M?.placeIcons?.[t.path]??t.icon})]}),(0,J.jsxs)(tp,{children:[ge?.path===t.path?(0,J.jsx)(`strong`,{children:(0,J.jsx)(Ep,{onCancel:()=>_e(null),onChange:e=>_e({path:t.path,name:e}),onCommit:()=>void mt(t.path,ge?.name??``),value:ge?.name??``})}):(0,J.jsxs)(`strong`,{children:[t.name,j&&(0,J.jsx)(fp,{onClick:e=>{e.stopPropagation(),L(null),_e({path:t.path,name:t.name})},title:O(`Rename folder`),type:`button`,children:(0,J.jsx)(qi,{size:11})})]}),(0,J.jsx)(Qf,{children:t.path})]}),j&&(0,J.jsx)(dp,{$inline:!0,onClick:n=>{n.stopPropagation(),Ft(e,t.path)},title:O(`Remove from Quick access`),type:`button`,children:(0,J.jsx)(Oi,{size:11})})]},t.path)),j&&(0,J.jsxs)(np,{$row:!0,onClick:()=>void Pt(e),title:O(`Pin a folder here`),type:`button`,children:[(0,J.jsx)(gi,{size:15}),(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:O(`Add folder`)}),(0,J.jsx)(Qf,{children:O(`Pin a directory here`)})]})]})]})}case`frequent`:return(0,J.jsx)(Dp,{mode:e.view,onContextMenu:ot,onOpen:o,onPick:v,onSelectionChange:S,version:a});case`recent`:return zt(e);case`drives`:return Ht(e);default:return(0,J.jsx)(Op,{mode:e.view,onContextMenu:ot,onOpen:o,onPick:v,onSelectionChange:S,openOnSingleClick:M?.openOnSingleClick??!1,path:e.path??i,selectionMenuId:`overview:${e.id}`,showCheckboxes:M?.showCheckboxes??!0,visibilityVersion:m})}};return(0,J.jsxs)(af,{$flush:!!M?.overviewBanner,ref:Le,children:[!_&&(0,J.jsxs)(Nf,{$overlay:!!M?.overviewBanner,children:[(0,J.jsx)(Pf,{role:`group`,title:O(`Columns`),children:[1,2,3,4,5].map(e=>(0,J.jsx)(Ff,{$active:_t===e,onClick:()=>void vt({overviewColumns:e}),title:ie(O,e,`1 column`,`{count} columns`),type:`button`,children:e},e))}),j&&(0,J.jsxs)(Lf,{children:[(0,J.jsxs)(If,{onClick:()=>R(e=>!e),onPointerDown:e=>e.stopPropagation(),title:O(`Add a panel`),type:`button`,children:[(0,J.jsx)(gi,{size:12}),O(`Add panel ▾`)]}),me&&(0,J.jsx)(Rf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,J.jsx)(zf,{onClick:()=>{R(!1),Nt(e)},type:`button`,children:O(e===`quick`?`Quick access`:e===`recent`?`Recent`:e===`frequent`?`Frequent`:e===`home`?`Home`:e===`drives`?`This PC`:e===`share`?`Shared`:e===`favorites`?`Favorites`:`Folder…`)},e))})]}),j&&(0,J.jsxs)(If,{onClick:()=>void yt(),title:O(`Put every panel back the way the app ships it`),type:`button`,children:[(0,J.jsx)(hi,{size:12}),O(`Restore default panels`)]}),H.available&&(0,J.jsx)(qf,{onClick:e=>H.open(e.clientX,e.clientY),title:O(`Selection menu`),type:`button`,children:(0,J.jsx)(ba,{size:14})}),(0,J.jsxs)(If,{onClick:()=>{ne(e=>!e),R(!1),L(null),_e(null),B(null)},title:O(j?`Done`:`Edit`),type:`button`,children:[j?(0,J.jsx)(Di,{size:13}):(0,J.jsx)(qi,{size:13}),O(j?`Done`:`Edit`)]})]}),V&&(0,J.jsx)(hp,{children:V}),M?.overviewBanner&&(0,J.jsxs)(of,{ref:Re,style:{height:`${Be}px`,"--banner-image-width":`${Qe}px`,"--banner-image-shift":`${tt}px`,"--banner-travel":`${et}px`,"--banner-overlap":`0px`},children:[(0,J.jsx)(sf,{children:ce?(0,J.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Ke({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:ue??void 0}):(0,J.jsx)(`img`,{alt:``,onLoad:e=>{let t=F?1920:e.currentTarget.naturalWidth||1920,n=F?1080:e.currentTarget.naturalHeight||1080;Ke({width:t,height:n})},ref:ze,src:ue??void 0})}),j&&(0,J.jsx)(cf,{onDoubleClick:()=>{U.current=null,Fe(null),vt({overviewBannerHeight:220})},onPointerCancel:Et,onPointerDown:wt,onPointerMove:Tt,onPointerUp:Et,title:O(`Drag to resize; double-click to reset`)})]}),(0,J.jsxs)(lf,{$offset:M?.overviewBanner?100:0,children:[j&&(0,J.jsxs)(uf,{children:[(0,J.jsxs)(df,{children:[(0,J.jsx)(ff,{children:O(`Banners`)}),M?.overviewBanner&&(0,J.jsxs)(If,{onClick:()=>it(!0),title:O(`Adjust framing…`),type:`button`,children:[(0,J.jsx)(qi,{size:12}),O(`Adjust framing…`)]})]}),(0,J.jsxs)(pf,{children:[(0,J.jsx)(_f,{children:(0,J.jsx)(vf,{$active:!M?.overviewBanner,onClick:St,title:O(`No banner`),type:`button`,children:(0,J.jsxs)(xf,{children:[(0,J.jsx)(Oi,{size:16}),(0,J.jsx)(`span`,{children:O(`No banner`)})]})})}),Ru.map(e=>(0,J.jsx)(_f,{children:(0,J.jsx)(vf,{$active:M?.overviewBanner===e.id,onClick:()=>void vt({overviewBanner:e.id}),title:`${O(e.concept)} · ${O(e.preset)}`,type:`button`,children:(0,J.jsx)($d,{poster:e.url,source:e.id})})},e.id)),Iu.map(e=>(0,J.jsx)(_f,{children:(0,J.jsxs)(vf,{$active:M?.overviewBanner===e.id,onClick:()=>void vt({overviewBanner:e.id}),title:O(e.name),type:`button`,children:[(0,J.jsx)($d,{poster:e.poster,source:e.id}),(0,J.jsx)(bf,{children:(0,J.jsx)(Fi,{size:11})})]})},e.id)),(M?.overviewBanners??[]).map(e=>(0,J.jsxs)(_f,{children:[(0,J.jsx)(vf,{$active:M?.overviewBanner===e||M?.overviewBanner===`url:${e}`,onClick:()=>void vt({overviewBanner:k(e)?`url:${e}`:e}),title:e,type:`button`,children:(0,J.jsx)($d,{source:e})}),(0,J.jsx)(yf,{onClick:()=>Ct(e),title:O(`Remove`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]},e)),(0,J.jsxs)(Mf,{onClick:()=>void bt(),title:O(`Add banner…`),type:`button`,children:[(0,J.jsx)(gi,{size:18}),(0,J.jsx)(`span`,{children:O(`Add banner…`)})]})]}),(0,J.jsxs)(mf,{children:[(0,J.jsx)(hf,{onChange:e=>fe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&xt()},placeholder:`https://…`,value:de}),(0,J.jsx)(gf,{disabled:!k(de),onClick:()=>void xt(),type:`button`,children:O(`Add URL`)})]})]}),(0,J.jsx)(Bf,{ref:ut,$columns:_t,children:ct.map(e=>{let t=lt.indexOf(e.id);return(0,J.jsxs)(Vf,{children:[(0,J.jsxs)(Hf,{children:[(0,J.jsxs)(Uf,{children:[(0,J.jsxs)(lp,{children:[j?(0,J.jsx)(up,{onClick:()=>L(W(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:O(`Change icon`),type:`button`,children:(0,J.jsx)(Ps,{panel:e,size:15})}):(0,J.jsx)(Ps,{panel:e,size:15}),W(e.id)&&(0,J.jsx)(Xd,{onPick:t=>Mt(e.id,t),value:e.icon})]}),j?(0,J.jsx)(Kf,{defaultValue:e.title,onBlur:t=>Ot(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,J.jsx)(Gf,{children:O(e.title)})]}),(0,J.jsxs)(Wf,{children:[!j&&e.kind===`recent`&&(0,J.jsx)(If,{onClick:()=>void Ve().then(l),title:O(`Clear`),type:`button`,children:O(`Clear`)}),!j&&e.kind===`frequent`&&(0,J.jsx)(If,{onClick:()=>void He().then(()=>d?.()),title:O(`Clear the frequent list`),type:`button`,children:O(`Clear`)}),!j&&(e.kind===`home`||e.kind===`folder`)&&(0,J.jsx)(If,{onClick:()=>o(e.path??i),title:O(`Open folder`),type:`button`,children:O(`Open`)}),j&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(qf,{$active:e.pinned,onClick:()=>At(e.id),title:e.pinned?O(`Unpin from the sidebar`):O(`Pin to the sidebar`),type:`button`,children:(0,J.jsx)(xi,{size:12})}),(0,J.jsx)(qf,{$active:e.view===`list`,onClick:()=>kt(e.id,`list`),title:O(`List`),type:`button`,children:(0,J.jsx)(Si,{size:13})}),(0,J.jsx)(qf,{$active:e.view===`grid`,onClick:()=>kt(e.id,`grid`),title:O(`Grid`),type:`button`,children:(0,J.jsx)(Ci,{size:13})}),(0,J.jsx)(qf,{disabled:t===0,onClick:()=>Dt(e.id,-1),title:O(`Move up`),type:`button`,children:(0,J.jsx)(mi,{size:12})}),(0,J.jsx)(qf,{disabled:t===lt.length-1,onClick:()=>Dt(e.id,1),title:O(`Move down`),type:`button`,children:(0,J.jsx)(mi,{size:12})}),(0,J.jsx)(qf,{onClick:()=>jt(e.id),title:O(`Remove panel`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Gt(e):(0,J.jsx)(op,{children:Gt(e)})]},e.id)})})]}),rt&&ue&&(0,J.jsx)(ef,{height:Be,offset:Je,onCancel:()=>it(!1),onSave:e=>{vt({overviewBannerOffset:e}),it(!1)},source:ue,video:ce}),Me&&(0,J.jsx)(_o,{directory:i,menu:{x:Me.x,y:Me.y,paths:[Me.target.path]},onClose:()=>Ne(null),onCopy:(e,t)=>void pt(e,t),onAddToTray:C,onAddFavorite:w,onRemoveFavorite:T,favoritePaths:E,onExtractArchive:ee,onOpen:st,onOpenFile:e=>v?v(e):void be(e),shortcuts:Bt,target:Me.target})]})}function Ep({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=p();return(0,J.jsxs)(pp,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,J.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,J.jsx)(mp,{onClick:r,title:a(`Cancel`),type:`button`,children:(0,J.jsx)(Oi,{size:11})}),(0,J.jsx)(mp,{$apply:!0,onClick:n,title:a(`Rename volume`),type:`button`,children:(0,J.jsx)(Di,{size:12})})]})}function Dp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let o=p(),[s,c]=(0,z.useState)(null),[l,u]=(0,z.useState)(null),d=Pn(),f=e=>r?(u(e),i?.([e]),!0):!1;if((0,z.useEffect)(()=>{ze().then(c,()=>c([]))},[a]),!s)return(0,J.jsx)(gp,{children:o(`Reading…`)});if(s.length===0)return(0,J.jsx)(gp,{children:o(`Folders you open often show up here.`)});let m=e=>ie(o,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path});return e===`grid`?(0,J.jsx)(Jf,{children:s.map(e=>{let i=Fn(d,e.path);return(0,J.jsxs)(Yf,{$plain:!1,$selected:l===e.path,onClick:n=>{f(e.path)||t(e.path,Ut(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,J.jsx)(Xf,{children:i&&d.useIcons?(0,J.jsx)(Fs,{place:i,size:18}):(0,J.jsx)($s,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(Zf,{children:[(0,J.jsx)(`strong`,{children:i?.name||e.name}),(0,J.jsx)(Qf,{children:m(e)})]})]},e.path)})}):(0,J.jsx)($f,{children:s.map(e=>{let i=Fn(d,e.path);return(0,J.jsxs)(ep,{$selected:l===e.path,onClick:n=>{f(e.path)||t(e.path,Ut(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&d.useIcons?(0,J.jsx)(Fs,{place:i,size:15}):(0,J.jsx)($s,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,J.jsxs)(tp,{children:[(0,J.jsx)(`strong`,{children:i?.name||e.name}),(0,J.jsx)(Qf,{children:m(e)})]})]},e.path)})})}function Op({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:o,showCheckboxes:s,openOnSingleClick:l,visibilityVersion:u}){let d=p(),[f,m]=(0,z.useState)(null),[h,g]=(0,z.useState)(null),_=Pn();return(0,z.useEffect)(()=>{e&&(m(null),xe(e).then(m,()=>m(null)))},[e,u]),(0,z.useEffect)(()=>{if(c.available)return c.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&P(n.data.path,e)&&xe(e,!1).then(m,()=>void 0)})},[e]),f?t===`list`?(0,J.jsx)(ap,{children:(0,J.jsx)(fl,{error:null,listing:f,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void be(e)),onRefresh:()=>void xe(e,!1).then(m,()=>void 0),onRename:(e,t)=>m(n=>n&&{...n,entries:n.entries.map(n=>P(n.fullPath,e)?{...n,name:y(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:o,onSort:()=>void 0,openOnSingleClick:l,enableShortcuts:!1,showCheckboxes:s,showDetails:!1,showImages:!1,view:{...V,columns:ve.columns??[]}})}):(0,J.jsx)(op,{children:f.entries.length===0?(0,J.jsx)(gp,{children:d(`This folder is empty.`)}):(0,J.jsx)(sp,{children:f.entries.map(e=>{let t=Fn(_,e.fullPath);return(0,J.jsxs)(cp,{$selected:h===e.fullPath,onClick:t=>{i?(g(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Ut(t)):be(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&_.useIcons?(0,J.jsx)(Fs,{place:t,size:16}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,J.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,J.jsx)(gp,{children:d(`Reading…`)})}var kp=`yafm://`,Ap={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function jp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Mp(e){return`${kp}${e===`home`?`overview`:e}`}function Np(e){return jp(e)?Ap[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Pp(e){let t=e.trim();if(t.length===0)return null;if(!jp(t))return t;let n=Ap[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Mp(n):null}function Fp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=p(),s=Pn(),[c,l]=(0,z.useState)(!1),[u,d]=(0,z.useState)(``),[f,m]=(0,z.useState)([]),[h,g]=(0,z.useState)(0),[_,v]=(0,z.useState)(null),[y,b]=(0,z.useState)(null),[x,S]=(0,z.useState)(null),C=(0,z.useRef)(null),w=(0,z.useRef)(null),T=(0,z.useRef)(0);(0,z.useEffect)(()=>{if(!Lc(e)){S(null);return}let t=Rc(e);if(!t){S(null);return}let n=!0;return jc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);S({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&S(null)),()=>{n=!1}},[e]),(0,z.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,z.useEffect)(()=>{r&&r!==T.current&&(T.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,z.useEffect)(()=>{c&&C.current?.select()},[c]),(0,z.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[c]);let E=()=>{d(e.replace(/\\/g,`/`)),l(!0)},ee=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,z.useEffect)(()=>{if(!c){m([]);return}let e=zp(u);if(!e){m([]);return}let t=!1,n=window.setTimeout(()=>{xe(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));m(i),g(0)},()=>{t||m([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let D=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,z.useLayoutEffect)(()=>{if(!c){v(null);return}let e=()=>{let e=w.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);v({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,J.jsxs)(Gp,{onPointerDown:e=>e.stopPropagation(),ref:w,children:[(0,J.jsxs)(Yp,{children:[(0,J.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),g(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),g(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(h,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?D(f[Math.min(h,f.length-1)],e.ctrlKey||e.metaKey):ee(e):e.key===`Escape`&&(f.length>0?m([]):l(!1))},ref:C,spellCheck:!1,value:u}),(0,J.jsx)(Xp,{onClick:()=>l(!1),title:o(`Cancel`),type:`button`,children:(0,J.jsx)(Oi,{size:12})}),(0,J.jsx)(Xp,{$apply:!0,onClick:ee,onPointerDown:e=>e.stopPropagation(),title:o(`Open this path`),type:`button`,children:(0,J.jsx)(Di,{size:14})})]}),f.length>0&&_&&(0,Va.createPortal)((0,J.jsx)(Kp,{onPointerDown:e=>e.stopPropagation(),style:{left:_.left,top:_.top,width:_.width},children:f.map((e,t)=>(0,J.jsxs)(qp,{$active:t===h,onClick:t=>D(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>g(t),type:`button`,children:[(0,J.jsx)($s,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,J.jsx)(Jp,{children:e.name})]},e.path))}),document.body)]});let O=t?[{label:t,path:e,icon:n}]:Ip(e,x)??Rp(e,s.places);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Bp,{onClick:E,title:o(`Click to type a path`),children:O.map((t,n)=>(0,J.jsxs)(Vp,{$last:n===O.length-1,children:[n>0&&(0,J.jsx)(Up,{children:(0,J.jsx)(yi,{size:9})}),(0,J.jsxs)(Wp,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):b({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,J.jsx)(Hp,{children:(0,J.jsx)(Fs,{place:t.place,size:13})}):t.icon&&(0,J.jsx)(Hp,{children:t.icon}),t.label]})]},t.path))}),y&&(0,J.jsx)(io,{items:[{label:o(`Open`),icon:(0,J.jsx)(vi,{size:14}),onSelect:()=>i(y.path)},{label:o(`Open in new tab`),icon:(0,J.jsx)(gi,{size:14}),onSelect:()=>i(y.path,!0)},{label:o(`Copy as path`),icon:(0,J.jsx)(pa,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(y.path)},...jp(y.path)?[{label:o(`Open with…`),icon:(0,J.jsx)(zi,{size:14}),onSelect:()=>void Ot(y.path)},{label:o(`Properties`),icon:(0,J.jsx)(bi,{size:14}),onSelect:()=>void Dt([y.path])}]:[]],onClose:()=>b(null),x:y.x,y:y.y})]})}function Ip(e,t){let n=Rc(e);if(!n)return null;let r=zc(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,J.jsx)(sa,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Lp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Rp(e,t){let n=Lp(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>P(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function zp(e){if(jp(e)||Lc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Bp=n.div`
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
`,Zp=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,J.jsx)(`path`,{d:`M4 4v6h6`})]});function Qp({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,showDetails:i=!0,onShowDetails:a,videoAudio:o=!1,videoAutoplay:s=!1,platform:c}){let l=p(),u=Qc(`recycle`),d=c===`windows`,[f,m]=(0,z.useState)([]),[h,g]=(0,z.useState)([]),[_,v]=(0,z.useState)(!1),[y,b]=(0,z.useState)(null),[S,C]=(0,z.useState)(!0),[w,T]=(0,z.useState)(!1),[E,ee]=(0,z.useState)(null),[D,O]=(0,z.useState)(!1),[k,A]=(0,z.useState)(()=>new Set),[te,j]=(0,z.useState)(null),[ne,re]=(0,z.useState)(()=>{let e=qn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[ae,N]=(0,z.useState)(null),[P,F]=(0,z.useState)(null),[oe,I]=(0,z.useState)(()=>{let e=Gn(`yafm.recycle.preview.width`,320);return e>=220?e:320}),se=(0,z.useRef)(null),ce=e=>{I(e),Kn(`yafm.recycle.preview.width`,e)},le=(0,z.useCallback)(async()=>{C(!0),ee(null);try{m(await je(D))}catch(e){ee(e instanceof Error?e.message:String(e))}finally{C(!1)}},[D]),ue=(0,z.useCallback)(async()=>{try{m(await je(D))}catch{}},[D]);(0,z.useEffect)(()=>{le()},[le]),(0,z.useEffect)(()=>{let e=window.setInterval(()=>void ue(),1e4);return()=>window.clearInterval(e)},[ue]),(0,z.useEffect)(()=>{D||(g([]),v(!1),b(null))},[D]),(0,z.useEffect)(()=>{A(e=>{let t=new Set(f.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[f]);let de=(0,z.useMemo)(()=>{let e=new Set(f.map(e=>e.id));return[...f,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=$p(e,t,ne.column);return ne.descending?-n:n})},[f,h,ne]),fe=(0,z.useMemo)(()=>!t?.open||t.query.trim().length===0?de:de.filter(e=>En(e.name,t)||En(e.originalPath,t)),[de,t?.open,t?.query,t?.matchCase,t?.regex]),pe=(0,z.useRef)(null);Yd(pe,t??null,`[data-search-block]`,n??(()=>void 0),[de]),(0,z.useEffect)(()=>{A(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,z.useEffect)(()=>{r&&A(new Set(fe.map(e=>e.id)))},[r]);let L=(0,z.useMemo)(()=>de.filter(e=>k.has(e.id)),[de,k]),me=L.filter(e=>e.removable&&!e.isOrphan),R=L.filter(e=>e.removable),he=(e,t)=>{let n=t.ctrlKey||t.metaKey;A(r=>{if(t.shiftKey&&te){let t=de.findIndex(e=>e.id===te),i=de.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(de[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),j(e.id)},B=(0,z.useCallback)(()=>A(new Set(fe.map(e=>e.id))),[fe]),ge=fe.length>0&&fe.every(e=>k.has(e.id)),_e=(0,z.useCallback)(async()=>{let e=me.map(e=>e.id);if(e.length!==0){T(!0);try{let t=await Ne(e);t.ok||await ka(ie(l,e.length,`Restored {done} of 1 item.`,`Restored {done} of {total} items.`,{done:t.done,total:e.length})),A(new Set),await le()}finally{T(!1)}}},[le,me,l]),V=(0,z.useCallback)(async()=>{let e=R.map(e=>e.id);if(F(null),e.length!==0){T(!0);try{let t=await Pe(e);!t.ok&&!t.cancelled&&await ka(ie(l,e.length,`Deleted {done} of 1 item.`,`Deleted {done} of {total} items.`,{done:t.done,total:e.length})),A(new Set),await le()}finally{T(!1)}}},[R,le,l]),ve=async()=>{F(null),T(!0);try{await Me(D),A(new Set),await le()}finally{T(!1)}},ye=async()=>{T(!0),b(null);try{let e=await Ie();if(e.cancelled){b(`Elevation was declined — nothing was read.`);return}if(e.failed){b(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),v(!0)}finally{T(!1)}},be=async()=>{T(!0),F(null);try{await U(),g([]),v(!1),b(null),await le()}finally{T(!1)}},xe=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},Se=e=>{navigator.clipboard.writeText(e.originalPath)},Ce=(e,t)=>{e.preventDefault(),t&&!k.has(t.id)&&A(new Set([t.id])),N({x:e.clientX,y:e.clientY})};(0,z.useEffect)(()=>(qc(`recycle`,k.size>0?(e,t)=>N({x:e,y:t}):null),()=>qc(`recycle`,null)),[k]),(0,z.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),B()):e.key===`Delete`?(e.preventDefault(),R.length>0&&F(`delete`)):e.key===`Enter`&&me.length>0?(e.preventDefault(),_e()):e.key===`Escape`&&(A(new Set),N(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[R.length,me.length,_e,B]);let we=[{label:l(`Restore`),icon:(0,J.jsx)(Zp,{width:14,height:14}),disabled:me.length===0,onSelect:()=>void _e()},{label:l(`Delete permanently`),icon:(0,J.jsx)(Ei,{size:14}),danger:!0,disabled:R.length===0,onSelect:()=>F(`delete`)},{label:l(`Properties`),icon:(0,J.jsx)(bi,{size:14}),disabled:L.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=L;e&&Fe(e.id)}},{label:l(`Open original location`),icon:(0,J.jsx)(ui,{size:14}),disabled:L.length!==1,onSelect:()=>{let[e]=L;e&&xe(e)}},{label:l(`Copy original path`),icon:(0,J.jsx)(pa,{size:14}),disabled:L.length!==1,onSelect:()=>{let[e]=L;e&&Se(e)}},{label:l(`Select all`),separatorBefore:!0,onSelect:B},{label:l(`Refresh`),icon:(0,J.jsx)(hi,{size:14}),onSelect:()=>void le()}],Te=L.length>0?L[0]:null,Ee=Te?{name:Te.name,path:Te.contentPath||Te.originalPath,isDirectory:Te.isDirectory,size:Te.size,modified:Te.deleted,fields:[{label:l(`Type`),value:l(tm(Te))},{label:l(`Original location`),value:Te.originalPath},{label:l(`Date deleted`),value:M(Te.deleted)},{label:l(`Size`),value:Te.isDirectory?`—`:x(Te.size)},...Te.owner?[{label:l(`Owner`),value:Te.owner}]:[],{label:l(`Status`),value:Te.isOrphan?l(`Metadata only`):Te.removable?l(`Restorable`):l(`Other profile`)}]}:null;return(0,J.jsxs)(rm,{ref:se,onContextMenu:e=>Ce(e),children:[(0,J.jsxs)(im,{children:[(0,J.jsxs)(am,{children:[(0,J.jsx)(Ei,{size:16}),(0,J.jsx)(`span`,{children:l(`Recycle Bin`)}),(0,J.jsxs)(om,{children:[S?`…`:ie(l,de.length,`1 item`,`{count} items`),k.size>0&&` · ${l(`{count} selected`,{count:k.size})}`]})]}),(0,J.jsxs)(sm,{children:[(0,J.jsx)(lm,{$on:D,onClick:()=>O(e=>!e),title:l(`Show metadata records whose content is already gone`),type:`button`,children:l(`Orphans`)}),D&&d&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(cm,{disabled:w||_,onClick:()=>void ye(),title:l(_?`The administrator view is already loaded`:`Ask for administrator rights and list every profile's leftovers`),type:`button`,children:l(w?`Working…`:_?`Admin view loaded`:`Show all (admin)…`)}),_&&h.length>0&&(0,J.jsx)(cm,{disabled:w,onClick:()=>F(`purge`),type:`button`,children:l(`Delete every orphan`)})]}),(0,J.jsx)(cm,{disabled:w||me.length===0,onClick:()=>void _e(),type:`button`,children:l(`Restore`)}),(0,J.jsx)(cm,{$danger:!0,disabled:w||R.length===0,onClick:()=>F(`delete`),type:`button`,children:l(`Delete`)}),(0,J.jsx)(cm,{disabled:w||de.length===0,onClick:()=>F(`empty`),type:`button`,children:l(`Empty`)}),(0,J.jsx)(um,{onClick:()=>void le(),title:l(`Refresh`),type:`button`,children:(0,J.jsx)(hi,{size:14})}),u.available&&(0,J.jsx)(um,{onClick:e=>u.open(e.clientX,e.clientY),title:l(`Selection menu`),type:`button`,children:(0,J.jsx)(ba,{size:14})})]})]}),y&&(0,J.jsx)(jm,{children:y}),E&&(0,J.jsx)(Mm,{children:E}),!E&&!S&&(t?.open&&t.query.trim().length>0?fe.length===0:de.length===0)&&(0,J.jsx)(Mm,{children:t?.open&&t.query.trim().length>0?l(`No matching items.`):l(`The recycle bin is empty.`)}),de.length>0&&(0,J.jsxs)(Am,{children:[(0,J.jsxs)(dm,{ref:pe,children:[(0,J.jsxs)(pm,{children:[(0,J.jsx)(ym,{$checked:ge,$partial:!ge&&k.size>0,onClick:()=>ge?A(new Set):B(),title:l(ge?`Select none`:`Select all`),type:`button`,children:ge?(0,J.jsx)(Di,{size:9}):k.size>0&&(0,J.jsx)(bm,{})}),(0,J.jsxs)(mm,{onClick:()=>De(`name`),type:`button`,children:[l(`Name`),em(ne,`name`)]}),(0,J.jsxs)(mm,{onClick:()=>De(`original`),type:`button`,children:[l(`Original location`),em(ne,`original`)]}),(0,J.jsxs)(mm,{onClick:()=>De(`deleted`),type:`button`,children:[l(`Date deleted`),em(ne,`deleted`)]}),(0,J.jsxs)(mm,{onClick:()=>De(`size`),type:`button`,children:[l(`Size`),em(ne,`size`)]}),(0,J.jsxs)(mm,{onClick:()=>De(`type`),type:`button`,children:[l(`Type`),em(ne,`type`)]}),(0,J.jsx)(`span`,{})]}),(0,J.jsx)(hm,{onClick:e=>{e.target===e.currentTarget&&A(new Set)},children:de.map(e=>(0,J.jsxs)(gm,{$checked:k.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>he(e,t),onContextMenu:t=>Ce(t,e),onDoubleClick:()=>{A(new Set([e.id])),j(e.id),a?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,J.jsx)(vm,{$checked:k.has(e.id),children:k.has(e.id)&&(0,J.jsx)(Di,{size:9})}),(0,J.jsxs)(xm,{children:[(0,J.jsx)(nm,{entry:e}),(0,J.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,J.jsx)(km,{children:l(`Metadata only`)}),e.owner&&(0,J.jsx)(km,{$other:!0,children:l(`Other profile`)})]}),(0,J.jsx)(Cm,{children:e.originalPath}),(0,J.jsx)(wm,{children:M(e.deleted)}),(0,J.jsx)(Tm,{children:e.isDirectory?`—`:x(e.size)}),(0,J.jsx)(Em,{children:l(tm(e))}),(0,J.jsxs)(Dm,{children:[e.removable&&!e.isOrphan&&(0,J.jsx)(Om,{onClick:t=>{t.stopPropagation(),Ne([e.id]).then(le)},title:l(`Restore to its original folder`),type:`button`,children:(0,J.jsx)(Zp,{})}),e.removable&&(0,J.jsx)(Om,{$danger:!0,onClick:t=>{t.stopPropagation(),A(new Set([e.id])),F(`delete`)},title:e.isOrphan?l(`Remove the leftover record`):l(`Delete permanently`),type:`button`,children:(0,J.jsx)(Ei,{size:13})})]})]},e.id))})]}),i&&(0,J.jsx)(rs,{emptyNote:l(`Nothing selected.`),info:Ee,onWidth:ce,selectionNote:L.length>1?ie(l,L.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:o,videoAutoplay:s,width:oe})]}),ae&&(0,J.jsx)(io,{items:we,onClose:()=>N(null),x:ae.x,y:ae.y}),(0,J.jsx)(Ko,{confirmLabel:l(P===`empty`?`Empty the bin`:P===`purge`?`Delete every orphan`:`Delete`),danger:!0,message:P===`empty`?ie(l,de.length,`Permanently delete 1 item? This cannot be undone.`,`Permanently delete {count} items? This cannot be undone.`):P===`purge`?l(`Permanently delete every leftover record, including the ones owned by other profiles? This cannot be undone.`):ie(l,R.length,`Permanently delete 1 selected item? This cannot be undone.`,`Permanently delete {count} selected items? This cannot be undone.`),onCancel:()=>F(null),onConfirm:()=>{P===`empty`?ve():P===`purge`?be():V()},open:P!==null,title:l(P===`empty`?`Empty the recycle bin`:P===`purge`?`Delete every orphan`:`Delete permanently`)})]});function De(e){re(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Jn(`yafm.recycle.sort`,n),n})}}function $p(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return tm(e).localeCompare(tm(t),void 0,{sensitivity:`base`})}}function em(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function tm(e){if(e.isDirectory)return`Folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`File`}function nm({entry:e}){let t=ln(e.originalPath,e.isDirectory);return(0,J.jsx)(Sm,{children:t?(0,J.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,J.jsx)(ui,{}):(0,J.jsx)(di,{})})}var rm=n.div`
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
`;async function Nm(){return c.available?(await c.request(`app.tags`)).tags:[]}async function Pm(e){return!c.available||!e?!1:(await c.request(`app.tags.delete`,{name:e})).ok}async function Fm(e,t){return!c.available||!e?[]:(await c.request(`app.tags.create`,{name:e,color:t})).tags}async function Im(e,t){return!c.available||!e?!1:(await c.request(`app.tags.color`,{name:e,color:t})).ok}async function Lm(e,t){return!c.available||!e||!t?!1:(await c.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Rm(){let e=p();return(0,J.jsx)(zm,{title:e(`Always applies to every folder`),children:e(`Global`)})}var zm=n.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,Bm=[{id:`ui`,label:`Interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`Titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`Interface`},{id:`names`,label:`File names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`Interface`},{id:`details`,label:`Details panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`Interface`},{id:`path`,label:`Address bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`Monospace`},{id:`mono`,label:`Monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`Text preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`Monospace`}];function Vm(e){return`"${e.replaceAll(`"`,``)}"`}function Hm(e){let t=document.documentElement.style;for(let n of Bm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Vm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Um(){return c.available?(await c.request(`app.fonts`)).fonts??[]:[]}function Wm({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let o=p(),[s,c]=(0,z.useState)(null),[l,u]=(0,z.useState)(``),d=(0,z.useRef)(null),f=(0,z.useRef)(null),m=(0,z.useMemo)(()=>{let e=l.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,l]);(0,z.useEffect)(()=>{if(!s)return;f.current?.focus();let e=()=>c(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`resize`,e)}},[s]);let h=()=>{if(s){c(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;u(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;c({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},g=e=>{a(e),c(null)};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Gm,{"aria-expanded":s!==null,"aria-haspopup":`listbox`,disabled:i,onClick:h,ref:d,type:`button`,children:[(0,J.jsx)(Km,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,J.jsx)(qm,{children:`▾`})]}),s&&(0,Va.createPortal)((0,J.jsxs)(Jm,{"data-font-menu":`true`,role:`listbox`,style:{left:s.left,maxHeight:s.maxHeight,top:s.top,width:s.width},children:[(0,J.jsxs)(Ym,{children:[(0,J.jsx)(pi,{size:12}),(0,J.jsx)(Xm,{onChange:e=>u(e.target.value),placeholder:o(`Filter fonts…`),ref:f,value:l})]}),(0,J.jsxs)(Zm,{children:[(0,J.jsxs)(Qm,{$active:!e,"aria-selected":!e,onClick:()=>g(null),role:`option`,type:`button`,children:[(0,J.jsxs)(eh,{children:[n,` `,(0,J.jsx)(nh,{children:o(`(default)`)})]}),!e&&(0,J.jsx)(Di,{size:11})]}),m.map(t=>(0,J.jsxs)(Qm,{$active:e===t,"aria-selected":e===t,onClick:()=>g(t),role:`option`,type:`button`,children:[(0,J.jsxs)($m,{children:[(0,J.jsx)(eh,{children:t}),(0,J.jsx)(th,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,J.jsx)(Di,{size:11})]},t)),m.length===0&&(0,J.jsx)(rh,{children:o(`No matching font.`)})]})]}),document.body)]})}var Gm=n.button`
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
`,ih=[{id:`goBack`,label:`Back`,note:`The previous folder in this tab. The mouse back button and the browser back key always work.`},{id:`goForward`,label:`Forward`,note:`The next folder in this tab. The mouse forward button and the browser forward key always work.`},{id:`goUp`,label:`Up one level`,note:`Opens the folder that contains the current one.`},{id:`home`,label:`Home folder`,note:`Jumps to the user's home folder, like Alt+Home in Dolphin.`},{id:`find`,label:`Search`,note:`Opens the floating search box. Typing a letter in a folder opens it too.`},{id:`location`,label:`Edit location`,note:`Turns the breadcrumbs into an editable path; Ctrl+L in Dolphin.`},{id:`closeTab`,label:`Close tab`,note:`Closes the tab that is open.`},{id:`newTab`,label:`New tab`,note:`Opens the overview in a new tab.`},{id:`reopenTab`,label:`Reopen closed tab`,note:`Brings back the tab you closed last, folder and all.`},{id:`nextTab`,label:`Next tab`,note:`Cycles to the next tab.`},{id:`previousTab`,label:`Previous tab`,note:`Cycles to the previous tab.`},{id:`copy`,label:`Copy`,note:`Ctrl+D copies too, following KDE's file manager.`},{id:`cut`,label:`Cut`,note:`Moves the selection on the next paste.`},{id:`paste`,label:`Paste`,note:`Copies or moves the clipboard's files into the current folder.`},{id:`undo`,label:`Undo`,note:`Undoes the last file operation in this session.`},{id:`redo`,label:`Redo`,note:`Repeats the operation that was just undone.`},{id:`delete`,label:`Move to the recycle bin`,note:`Delete is Del by default, not Ctrl+D.`},{id:`deletePermanently`,label:`Delete permanently`,note:`Bypasses the recycle bin; Dolphin uses Shift+Delete.`},{id:`rename`,label:`Rename`,note:`Renames the single selected entry.`},{id:`selectAll`,label:`Select all`,note:`Selects every entry in the current folder.`},{id:`invertSelection`,label:`Invert selection`,note:`Selects everything that is not selected; Dolphin uses Ctrl+Shift+A.`},{id:`open`,label:`Open`,note:`Opens the selected folder or file.`},{id:`newFolder`,label:`New folder`,note:`Creates a folder in the current directory. F10 also works.`},{id:`properties`,label:`Properties`,note:`Opens the shell properties sheet.`},{id:`iconsView`,label:`Icons view`,note:`Switches the folder to the grid view.`},{id:`detailsView`,label:`Details view`,note:`Switches the folder to the list view.`},{id:`terminal`,label:`Open terminal`,note:`Opens Windows Terminal in the current folder; Dolphin uses F4 for its terminal panel.`},{id:`hidden`,label:`Show hidden files`,note:`Toggles ordinary hidden files for this session. Alt+. also works; system files still follow Explorer.`},{id:`splitView`,label:`Split view`,note:`Shows the next file tab beside the current one; F3 in Dolphin.`},{id:`openInNewTab`,label:`Open in a new tab`,note:`Hold this while clicking a folder.`}],ah=`en`,oh=[{id:`system`,label:`Follow system`},{id:`light`,label:`Light`},{id:`dark`,label:`Dark`}],sh=[{id:`system`,label:`System`},{id:`24`,label:`24-hour`},{id:`12`,label:`12-hour`},{id:`custom`,label:`Custom`}],ch=new Date(2026,10,5,16,8).getTime(),lh=`system`,uh={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},dh=[{id:`application`,label:`Application`},{id:`startup`,label:`Startup`},{id:`fonts`,label:`Fonts`},{id:`time`,label:`Time format`},{id:`updates`,label:`Updates`},{id:`colors`,label:`Colors`},{id:`background`,label:`Background`},{id:`safety`,label:`Safety`},{id:`tags`,label:`Tags`},{id:`files-view`,label:`Files view`},{id:`shortcuts`,label:`Shortcuts`},{id:`memory`,label:`Memory`},{id:`overview`,label:`Overview`},{id:`gallery`,label:`Gallery`},{id:`icons`,label:`Icons`},{id:`extension-icons`,label:`Icons by extension`},{id:`folder-icons`,label:`Folder icons`},{id:`folder-index`,label:`Folder index`},{id:`indexing`,label:`Index tasks`},{id:`files`,label:`Files`}],fh=`yafm.colors.recent`;function ph(){let e=qn(fh);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function mh({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let a=p(),[o,s]=(0,z.useState)([]),[c,l]=(0,z.useState)(null),[u,f]=(0,z.useState)(null),[h,g]=(0,z.useState)(null),[_,v]=(0,z.useState)(``),[C,w]=(0,z.useState)(`file`),[T,E]=(0,z.useState)(!1),[ee,D]=(0,z.useState)(!1),[O,A]=(0,z.useState)(null),[te,j]=(0,z.useState)(ct),[ne,re]=(0,z.useState)(!1),[M,P]=(0,z.useState)(null),[F,oe]=(0,z.useState)(null),[R,he]=(0,z.useState)(null),[B,ge]=(0,z.useState)(!1),[_e,V]=(0,z.useState)(null),[ye,be]=(0,z.useState)(!1),[xe,Se]=(0,z.useState)(null),[Ce,we]=(0,z.useState)(null),[Te,Ee]=(0,z.useState)(!1),[De,Oe]=(0,z.useState)([]),[ke,Ae]=(0,z.useState)(null),[je,H]=(0,z.useState)(!1),[Me,Ne]=(0,z.useState)(null),[Pe,Fe]=(0,z.useState)(``),[Ie,U]=(0,z.useState)(Is),[Le,Re]=(0,z.useState)(null),[ze,Be]=(0,z.useState)(null),[Ve,He]=(0,z.useState)(``),[We,Ge]=(0,z.useState)(``),[Ke,Ye]=(0,z.useState)(null),[Xe,rt]=(0,z.useState)(ph),[at,W]=(0,z.useState)({}),[pt,mt]=(0,z.useState)(null),[ht,gt]=(0,z.useState)(null),[_t,vt]=(0,z.useState)(!1),[yt,bt]=(0,z.useState)(null),[xt,St]=(0,z.useState)(null),[Ct,wt]=(0,z.useState)(null),[Tt,Et]=(0,z.useState)(dh[0].id),[Dt,Ot]=(0,z.useState)([]),[kt,At]=(0,z.useState)(null),[jt,Mt]=(0,z.useState)(null),[Nt,Pt]=(0,z.useState)(null),[Ft,It]=(0,z.useState)(!1),[Lt,Rt]=(0,z.useState)(``),zt=(0,z.useRef)(null),Vt=(0,z.useRef)({}),Ht=u?.defaultView??ve,Ut=u?.themePresets??[],Kt=e?.platform===`windows`,qt=Kt?F?F.registered&&F.pathMatches:!1:u?.archiveHandler??!1,Jt=F?.registered??u?.archiveHandler??!1,Yt=Kt?R?R.registered&&R.pathMatches:!1:u?.defaultFileManager??!1,Xt=Kt?te.registered&&te.pathMatches:u?.linksEnabled??!1;Yd(zt,r??null,`section`,i??(()=>void 0),[u]),(0,z.useEffect)(()=>{let e=zt.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Et(dh[dh.length-1].id);return}let n=t+110,r=dh[0].id;for(let{id:e}of dh){let t=Vt.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Et(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let Zt=e=>t=>{Vt.current[e]=t},Qt=e=>{Vt.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),Et(e)};(0,z.useEffect)(()=>{t&&Qt(t)},[t]),(0,z.useEffect)(()=>{d().then(e=>s(e.available),()=>s([]))},[]),(0,z.useEffect)(()=>{Um().then(Ot,()=>Ot([]))},[]),(0,z.useEffect)(()=>{dt().then(Mt,()=>Mt(null))},[]),(0,z.useEffect)(()=>{le().then(gt,()=>void 0)},[]),(0,z.useEffect)(()=>{Ue().then(l,()=>l(null)),qe().then(f,()=>f(null)),lt().then(j,()=>j(ct)),$e().then(oe,()=>oe(null)),Ze().then(he,()=>he(null)),Nm().then(Oe,()=>Oe([]))},[]),(0,z.useEffect)(()=>{let e=()=>void ot().then(A,()=>A(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!u)return;let t={...u,...e};Object.keys(e).every(e=>t[e]===u[e])||(f(t),rn(),f(await nt(t)),n())},$t=async e=>{let t=await Ta(e);if(!t)return;let n=u?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},en=async()=>{let e=Lt.trim();if(!u||!k(e))return;let t=u.backgroundCustom??[];Rt(``),await G({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},tn=e=>{if(!u)return;let t=u.backgroundSource;G({backgroundCustom:u.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},nn=async()=>{if(!u)return;let t=await wa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;u.protectedPaths.includes(r)||await G({protectedPaths:[...u.protectedPaths,r]})},an=()=>{let e=Ve.trim();u&&e&&!u.protectedPaths.includes(e)&&(He(``),G({protectedPaths:[...u.protectedPaths,e]}))},on=()=>{if(!u||!Le)return;let e=Le.value.trim(),t=Le.from;Re(null),e.length!==0&&e!==t&&G({protectedPaths:u.protectedPaths.map(n=>n===t?e:n)})},sn=e=>{u&&G({protectedPaths:u.protectedPaths.filter(t=>t!==e)})},cn=async()=>{let e=await Je();e.length>0&&await G({protectedPaths:e})},ln=()=>{if(!u||!ze)return;let e=ze.value.trim(),t=ze.from;Be(null),e&&e!==t&&G({directoryIndexBlacklist:u.directoryIndexBlacklist.map(n=>n===t?e:n)})},un=()=>{let e=We.trim();u&&e&&!u.directoryIndexBlacklist.includes(e)&&(Ge(``),G({directoryIndexBlacklist:[...u.directoryIndexBlacklist,e]}))},K=async()=>{if(!u)return;let t=await wa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;u.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[...u.directoryIndexBlacklist,r]})},q=e=>{u&&G({directoryIndexBlacklist:u.directoryIndexBlacklist.filter(t=>t!==e)})},dn=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},fn=()=>{if(!u||Ke===null)return;let e=Ke.trim()||`yyyy/MM/dd HH:mm`;Ye(null),e!==u.timeFormatPattern&&G({timeFormatPattern:e})},pn=(e,t)=>{rt(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Jn(fh,i),i})},mn=ae(u?.accentColor,N),hn=ae(u?.secondaryColor,m),gn=(e,t)=>{u&&(pn(`accent`,mn),pn(`secondary`,hn),G({accentColor:e,secondaryColor:t}))},_n=(e,t)=>{u&&(pn(e,e===`accent`?mn:hn),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},vn=async()=>{vt(!0),bt(null);try{gt(await ue())}catch{bt(a(`Could not check for updates.`))}finally{vt(!1)}},yn=async()=>{bt(null),St({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await de();e.ok||bn(e.error??``)}catch(e){bn(e instanceof Error?e.message:String(e))}},bn=e=>St(t=>t&&{...t,phase:`error`,error:e}),xn=async()=>{try{await fe()}catch(e){bt(e instanceof Error?e.message:String(e))}},Sn=async()=>{St(e=>e&&{...e,phase:`installing`});try{let e=await pe();e.ok||bn(e.error??a(`The update failed.`))}catch(e){bn(e instanceof Error?e.message:String(e))}};(0,z.useEffect)(()=>L(e=>St(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,z.useEffect)(()=>me(e=>St(t=>t&&{...t,changelog:e.text})),[]);let Cn=async()=>{if(!u||!pt)return;let e=pt.name.trim()||`${pt.accent.toUpperCase()} / ${pt.secondary.toUpperCase()}`,t=[...u.themePresets,{name:e,accent:pt.accent,secondary:pt.secondary}];mt(null),await G({themePresets:t})},wn=async e=>{u&&await G({themePresets:u.themePresets.filter((t,n)=>n!==e)})},Tn=e=>{let t=Ct;wt(null),t&&t.role===e&&(e===`accent`?mn:hn).toLowerCase()!==t.color.toLowerCase()&&pn(e,t.color)},En=async()=>{let e=Pe.trim();if(e&&!je){H(!0),Ne(null);try{Oe(await Fm(e,Ie)),Fe(``)}catch{Ne(a(`Could not add the tag.`))}finally{H(!1)}}},Dn=async(e,t)=>{Oe(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Im(e,t)||Ne(a(`Could not change the tag's color.`))},On=async e=>{if(je)return;H(!0),Ne(null);let t=await Pm(e);Oe(await Nm()),t||Ne(`"${e}" is still used by a folder whose index could not be updated.`),H(!1)},kn=async()=>{let e=ke;if(!e||je)return;let t=e.value.trim();t.length===0||t===e.name?Ae(null):(H(!0),Ne(null),await Lm(e.name,t)?(Oe(await Nm()),Ae(null)):Ne(`Could not rename "${e.name}".`),H(!1))},An=async e=>{let t=new Set(Ht.columns??ve.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=rl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...Ht,columns:n}})},jn=async()=>{if(ne)return;let e=!Xt;re(!0),P(null);try{let t=await ut(e),r=t.registered&&t.pathMatches;j(t),f(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&P(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{P(`The request to Windows failed. Try again.`)}finally{re(!1)}},Mn=async()=>{if(ye||!u)return;let e=!Yt;be(!0),Se(null);try{let t=await Qe(e);he(t);let r=Kt?t.registered&&t.pathMatches:e;f(e=>e&&{...e,defaultFileManager:r}),n(),Kt&&r!==e&&Se(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{Se(`The request to Windows failed. Try again.`)}finally{be(!1)}},Nn=async()=>{if(!B){ge(!0),V(null);try{let e=await et();oe(e);let t=e.registered&&e.pathMatches;f(e=>e&&{...e,archiveHandler:t}),n(),t||V(`Windows did not accept the archive registration. Try again.`)}catch{V(`The request to Windows failed. Try again.`)}finally{ge(!1)}}},Pn=async()=>{if(!B){ge(!0),V(null);try{let e=await tt();oe(e),f(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&V(`The registration is still there. Try turning it off again.`)}catch{V(`The request to Windows failed. Try again.`)}finally{ge(!1)}}},Fn=async(e,t)=>{if(!u)return;let n={...u.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},In={...Bt,...u?.shortcuts};(0,z.useEffect)(()=>{if(!Ce)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){we(null);return}let t=Wt(e);t&&(we(null),G({shortcuts:{...In,[Ce]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[Ce,u]),(0,z.useEffect)(()=>{if(!Te)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Ee(!1);return}let t=Wt(e);t&&(Ee(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[Te,u]);let Ln=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},Rn=(e,t)=>{let n=t??at[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};W(t=>({...t,[e]:void 0})),G(i)},zn=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;At(null),await G({sharePortMode:`custom`,sharePort:n}),await Fc(n,`custom`)},Bn=async e=>{let t=e===`custom`,n=t?u?.sharePort??8080:null;await G({sharePortMode:t?`custom`:`random`,sharePort:n}),await Fc(n,t?`custom`:`random`)},Vn=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;It(!0),Pt(null);try{let e=await ft(t);Mt(e),Pt(e.error),e.error||await G({startupMode:t})}finally{It(!1)}},Hn=async e=>{await G({galleryRoots:e.length>0?e:null})},Un=async()=>{let e=await wa(),t=u?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await Hn([...t,e])},Wn=async()=>{let e=_.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Fn(e,C),v(``))},Gn=async()=>{D(!0);try{let e=await wa();if(!e)return;let t=await Ta([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await it(e.replace(/[\\/][^\\/]+$/,``),y(e),`file:${t}`)&&(rn(),g({folder:e,icon:t}))}finally{D(!1)}},Kn=async(e,t)=>{let n={...u?.fonts};t?n[e]=t:delete n[e],await G({fonts:n})};return(0,J.jsxs)(Eh,{children:[(0,J.jsxs)(Dh,{ref:zt,children:[(0,J.jsxs)(Oh,{ref:Zt(`application`),children:[(0,J.jsx)(Th,{note:`The build, its yafm:// links, and what reopens at launch.`,title:`Application`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:a(`Version`)}),(0,J.jsx)(hg,{children:e?`v${e.version}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:a(`Platform`)}),(0,J.jsx)(hg,{children:e?.platform??`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Language`)}),(0,J.jsx)($,{children:a(`The language the interface uses. English is the default; the system option follows the operating system.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(Sh,{disabled:!u,onChange:e=>void G({language:e}),options:[lh,...o.length>0?o:[ah]],value:u?.language??ah})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Picker window size`)}),(0,J.jsx)($,{children:a(`The size the folder and file picker opens at. Width and height are in pixels.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Tg,{inputMode:`numeric`,onBlur:e=>Rn(`width`,e.currentTarget.value),onChange:e=>W(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:at.width??String(u?.pickerWindowWidth??1200)}),(0,J.jsx)(hg,{children:`×`}),(0,J.jsx)(Tg,{inputMode:`numeric`,onBlur:e=>Rn(`height`,e.currentTarget.value),onChange:e=>W(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:at.height??String(u?.pickerWindowHeight??800)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Web server port`)}),(0,J.jsx)($,{children:a(`Random asks the operating system for one free port when the first web share starts, and every web share keeps using it. Custom always tries the port below.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(bo,{disabled:!u,onChange:e=>void Bn(e),options:[{value:`random`,label:a(`Random`)},{value:`custom`,label:a(`Custom port`)}],value:u?.sharePortMode??`random`,width:160})})]}),u?.sharePortMode===`custom`&&(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Custom port`)}),(0,J.jsx)($,{children:a(`A number from 1 to 65535. If it is already in use the app asks for a free port instead.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(Tg,{inputMode:`numeric`,onBlur:e=>void zn(e.currentTarget.value),onChange:e=>At(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:kt??(u?.sharePort?String(u.sharePort):``)})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Link paths`)}),(0,J.jsx)($,{children:a(`Relative links keep working when the link and its target move together. Absolute links always store the full target path.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(bo,{disabled:!u,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:a(`Relative`)},{value:`absolute`,label:a(`Absolute`)}],value:u?.linkPathMode??`relative`,width:160})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Global hotkey`)}),(0,J.jsx)($,{children:a(`Brings the window forward from anywhere while the app is running. Empty means no global shortcut.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(r_,{$listening:Te,disabled:!u,onClick:()=>Ee(!0),type:`button`,children:Te?a(`Press a key…`):u?.globalHotkey?Gt(u.globalHotkey):a(`None`)}),u?.globalHotkey&&(0,J.jsx)(vg,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:a(`Clear`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Open yafm:// links`)}),(0,J.jsx)($,{children:a(`Registers this app for yafm:// links, for the current user only. Turning it on writes this copy's path; starting the app never touches the registry.`)}),te.registered&&!te.pathMatches&&(0,J.jsx)(mg,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:te.registeredPath??`?`})}),M&&(0,J.jsx)(mg,{children:M})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Sg,{$on:Xt,children:a(Xt?`Active`:`Off`)}),(0,J.jsx)(Cg,{$on:Xt,disabled:ne,onClick:()=>void jn(),title:a(Xt?`Stop opening yafm:// links`:`Open yafm:// links with this app`),type:`button`,children:(0,J.jsx)(wg,{})})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Use as the default file manager`)}),(0,J.jsx)($,{children:a(`Registers this app for folder opens on this account. Explorer stays available from the context menu; on Linux this sets the inode/directory default.`)}),R?.registered&&!R.pathMatches&&(0,J.jsx)(mg,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:R.registeredPath??`?`})}),xe&&(0,J.jsx)(mg,{children:xe})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Sg,{$on:Yt,children:a(Yt?`Active`:`Off`)}),(0,J.jsx)(Cg,{$on:Yt,disabled:!u||ye,onClick:()=>void Mn(),title:a(Yt?`Stop using this app for folders`:`Use this app for folders`),type:`button`,children:(0,J.jsx)(wg,{})})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Open archives with this app`)}),(0,J.jsx)($,{children:a(`Registers this app for ZIP, 7z, RAR, TAR and the other archive types on this account, so double-clicking one shows it as a folder here. Windows may still ask once which app to use.`)}),(0,J.jsx)($,{children:a(`When this is off, opening an archive uses the system's default application instead.`)}),F?.registered&&!F.pathMatches&&(0,J.jsx)(mg,{children:a(`The registered path points to {path}. Register again to use this build.`,{path:F.registeredPath??`?`})}),_e&&(0,J.jsx)(mg,{children:_e})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Sg,{$on:qt,children:a(qt?`Active`:`Off`)}),(0,J.jsx)(i_,{disabled:!u||B||qt,onClick:()=>void Nn(),type:`button`,children:a(`Register`)}),e?.platform===`windows`&&(0,J.jsx)(i_,{onClick:()=>void I(`ms-settings:defaultapps`),type:`button`,children:a(`Default apps…`)}),(0,J.jsx)(xg,{disabled:!u||B||!Jt,onClick:()=>void Pn(),type:`button`,children:a(`Unregister`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Reopen the tabs that were open`)}),(0,J.jsx)($,{children:a(`Keeps the tabs and the folder each one shows, so they come back after a restart. A folder passed on the command line takes over instead.`)})]}),(0,J.jsx)(Cg,{$on:u?.restoreTabs??!0,disabled:!u,onClick:()=>void G({restoreTabs:!u?.restoreTabs}),type:`button`,children:(0,J.jsx)(wg,{})})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`startup`),children:[(0,J.jsx)(Th,{note:`How the app joins your login session, and whether it opens quietly in the tray.`,title:`Startup`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Start with the computer`)}),(0,J.jsx)($,{children:a(`A shortcut uses the Startup folder (or XDG autostart). A task uses Task Scheduler (or a systemd user service), which starts earlier and is usually faster.`)}),Nt&&(0,J.jsx)(mg,{children:Nt}),jt&&!jt.supported&&(0,J.jsx)(mg,{children:a(`This platform cannot create a per-user startup entry.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(bo,{disabled:!u||Ft||jt!==null&&!jt.supported,onChange:e=>void Vn(e),options:[{value:`none`,label:a(`None`)},{value:`shortcut`,label:a(`Shortcut`)},{value:`task`,label:a(`Scheduled task`)}],value:jt?.mode??u?.startupMode??`none`,width:170})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Start hidden in the tray`)}),(0,J.jsx)($,{children:a(`Launch straight to the tray icon instead of showing the window. The tray menu opens it again.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(Cg,{$on:u?.startHidden??!1,disabled:!u,onClick:()=>void G({startHidden:!u?.startHidden}),type:`button`,children:(0,J.jsx)(wg,{})})})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`fonts`),children:[(0,J.jsx)(Th,{note:`Choose the font each part of the interface uses. Every font installed on this system is listed, each one drawn in its own face.`,title:`Fonts`}),(0,J.jsxs)(Ah,{children:[Bm.map(e=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(e.label)}),(0,J.jsx)($,{children:a(`Falls back to {font} until another family is chosen.`,{font:a(e.fallback)})})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(Wm,{defaultLabel:a(e.fallback),disabled:!u,fonts:Dt,onChange:t=>void Kn(e.id,t),sample:e.sample,value:u?.fonts?.[e.id]??null})})]},e.id)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Reset`)}),(0,J.jsx)($,{children:a(`Back to the app's built-in font for every role.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(i_,{onClick:()=>void G({fonts:{}}),type:`button`,children:a(`Reset`)})})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`time`),children:[(0,J.jsx)(Th,{note:`Every timestamp in the interface uses this format: follow the system, force 24-hour or 12-hour time, or define your own pattern.`,title:`Time format`}),(0,J.jsx)(Ah,{children:(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:a(`Format`)}),(0,J.jsx)($,{children:a(`Follow the system, force 24-hour or 12-hour time, or define your own pattern.`)})]}),(0,J.jsx)(Zg,{children:sh.map(e=>(0,J.jsx)(Qg,{$active:(u?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:a(e.label)},e.id))}),(u?.timeFormat??`24`)===`custom`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)($g,{"aria-label":a(`Pattern`),onBlur:fn,onChange:e=>Ye(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),fn()):e.key===`Escape`&&Ye(null)},spellCheck:!1,value:Ke??u?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,J.jsx)($,{children:a(`Tokens: yyyy year, MM month, dd day, HH 24-hour, mm minute, ss second, hh 12-hour and a AM/PM. Other characters are copied.`)})]}),(0,J.jsxs)(e_,{children:[(0,J.jsx)(`span`,{children:a(`Preview`)}),(0,J.jsx)(`code`,{children:S(ch,u?.timeFormat,Ke??u?.timeFormatPattern)})]})]})})]}),(0,J.jsxs)(Oh,{ref:Zt(`updates`),children:[(0,J.jsx)(Th,{note:`The running build and the newest one published.`,title:`Updates`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:a(`Current version`)}),(0,J.jsx)(hg,{children:e?`v${e.version}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:a(`Latest version`)}),(0,J.jsx)(hg,{children:ht?`v${ht.latest}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:ht?ht.available?a(`Version {version} is available.`,{version:ht.latest}):a(`You are on the latest version.`):a(`Not checked yet`)}),(0,J.jsx)($,{children:ht?.available?a(`The installer downloads, installs itself, and closes the app.`):a(`Reads the version file the release workflow publishes.`)})]}),(0,J.jsx)(fg,{children:ht?.available?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(i_,{onClick:()=>void ce(),type:`button`,children:a(`Open release page`)}),Kt&&(0,J.jsx)(i_,{disabled:xt!==null,onClick:()=>void yn(),type:`button`,children:a(`Download and install`)})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(i_,{disabled:_t,onClick:()=>void vn(),type:`button`,children:a(_t?`Checking…`:`Check for updates`)}),(0,J.jsx)(i_,{onClick:()=>void se(),type:`button`,children:a(`Open log folder`)})]})})]}),yt&&(0,J.jsx)(X,{children:(0,J.jsx)(mg,{children:yt})})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`colors`),children:[(0,J.jsx)(Th,{note:`The accent and highlight colours the whole window uses.`,title:`Colors`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:a(`Theme`)}),(0,J.jsx)($,{children:a(`Follow the operating system, or always use the light or dark palette.`)})]}),(0,J.jsx)(Zg,{children:oh.map(e=>(0,J.jsx)(Qg,{$active:(u?.themeMode??`system`)===e.id,onClick:()=>void G({themeMode:e.id}),type:`button`,children:a(e.label)},e.id))})]}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:a(`Presets`)}),(0,J.jsx)($,{children:a(`One click changes the accent and the highlight together.`)})]}),(0,J.jsxs)(Nh,{children:[Pu.map(e=>(0,J.jsxs)(Ph,{$on:mn.toLowerCase()===e.accent&&hn.toLowerCase()===e.secondary,onClick:()=>gn(e.accent,e.secondary),title:`${a(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,J.jsxs)(Vh,{children:[(0,J.jsx)(`i`,{style:{background:e.accent}}),(0,J.jsx)(`i`,{style:{background:e.secondary}})]}),(0,J.jsx)(Fh,{children:a(e.name)})]},e.name)),Ut.map((e,t)=>(0,J.jsxs)(Ih,{children:[(0,J.jsxs)(Ph,{$on:mn.toLowerCase()===e.accent.toLowerCase()&&hn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>gn(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,J.jsxs)(Vh,{children:[(0,J.jsx)(`i`,{style:{background:e.accent}}),(0,J.jsx)(`i`,{style:{background:e.secondary}})]}),(0,J.jsx)(Fh,{children:e.name})]}),(0,J.jsx)(Lh,{onClick:()=>void wn(t),title:a(`Remove preset`),type:`button`,children:(0,J.jsx)(Oi,{size:9})})]},`${e.name}-${t}`)),pt?(0,J.jsxs)(zh,{children:[(0,J.jsxs)(Vh,{children:[(0,J.jsx)(`i`,{style:{background:pt.accent}}),(0,J.jsx)(`i`,{style:{background:pt.secondary}})]}),(0,J.jsx)(Bh,{autoFocus:!0,maxLength:24,onChange:e=>mt({...pt,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Cn()):e.key===`Escape`&&(e.preventDefault(),mt(null))},placeholder:a(`Preset name`),spellCheck:!1,value:pt.name}),(0,J.jsx)(vg,{onClick:()=>void Cn(),type:`button`,children:a(`Save`)}),(0,J.jsx)(vg,{onClick:()=>mt(null),type:`button`,children:a(`Cancel`)})]}):(0,J.jsxs)(Rh,{disabled:!u,onClick:()=>mt({name:``,accent:mn,secondary:hn}),title:a(`Save the current colours as a preset`),type:`button`,children:[(0,J.jsx)(gi,{size:12}),a(`Add preset`)]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Accent color`)}),(0,J.jsx)($,{children:a(`Buttons, selections, focus rings, and active navigation.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(wh,{colors:Xe.accent,current:mn,onApply:e=>_n(`accent`,e)}),(0,J.jsx)(yg,{"aria-label":a(`Accent color`),disabled:!u,onBlur:()=>Tn(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>wt({role:`accent`,color:mn}),type:`color`,value:mn}),(0,J.jsx)(bg,{children:mn.toUpperCase()})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Secondary color`)}),(0,J.jsx)($,{children:a(`Gradients, highlights, and the second end of the accent ramp.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(wh,{colors:Xe.secondary,current:hn,onApply:e=>_n(`secondary`,e)}),(0,J.jsx)(yg,{"aria-label":a(`Secondary color`),disabled:!u,onBlur:()=>Tn(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>wt({role:`secondary`,color:hn}),type:`color`,value:hn}),(0,J.jsx)(bg,{children:hn.toUpperCase()})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Reset colors`)}),(0,J.jsx)($,{children:a(`Returns the interface to the default blue and indigo theme.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(vg,{disabled:!u,onClick:()=>{pn(`accent`,mn),pn(`secondary`,hn),G({accentColor:null,secondaryColor:null})},type:`button`,children:a(`Reset`)})})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`background`),children:[(0,J.jsx)(Th,{note:`A picture or video behind the whole window, from the title bar to the bottom.`,title:`Background`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:a(`Wallpaper`)}),(0,J.jsx)($,{children:a(`None keeps the normal dark surface. Every built-in concept comes in the app's colour presets; your own pictures, SVGs and videos are kept in the gallery.`)})]}),(0,J.jsx)(Lg,{children:(0,J.jsx)(Rg,{$active:!u?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:a(`None`),type:`button`,children:(0,J.jsx)(Ug,{children:a(`None`)})})}),(0,J.jsxs)(Pg,{children:[Lu.map(e=>(0,J.jsxs)(Fg,{children:[(0,J.jsx)(Ig,{children:a(e.name)}),(0,J.jsx)(Lg,{children:e.variants.map(t=>(0,J.jsx)(Rg,{$active:u?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${a(e.name)} · ${a(t.preset)}`,type:`button`,children:(0,J.jsx)(`img`,{alt:``,src:t.url})},t.id))})]},e.id)),(0,J.jsxs)(Fg,{children:[(0,J.jsx)(Ig,{children:a(`Motion`)}),(0,J.jsx)(Lg,{children:Iu.map(e=>(0,J.jsxs)(Rg,{$active:u?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:a(e.name),type:`button`,children:[(0,J.jsx)(`img`,{alt:``,src:e.poster}),(0,J.jsx)(Vg,{children:(0,J.jsx)(Fi,{size:11})})]},e.id))})]}),(0,J.jsxs)(Fg,{children:[(0,J.jsx)(Ig,{children:a(`Custom`)}),(0,J.jsxs)(Lg,{children:[(u?.backgroundCustom??[]).map(e=>(0,J.jsx)(xh,{active:u?.backgroundSource===`file:${e}`||u?.backgroundSource===`url:${e}`||u?.backgroundSource===e,onRemove:()=>tn(e),onSelect:()=>void G({backgroundSource:k(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,J.jsxs)(Hg,{onClick:()=>void $t([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,J.jsx)(gi,{size:12}),a(`Image…`)]}),(0,J.jsxs)(Hg,{onClick:()=>void $t([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,J.jsx)(gi,{size:12}),a(`Video…`)]})]})]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Image or video URL`)}),(0,J.jsx)($,{children:a(`Paste a direct http(s) link. The picture or video is loaded from the network each time the window starts.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Tg,{onChange:e=>Rt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&en()},placeholder:`https://…`,value:Lt}),(0,J.jsx)(vg,{disabled:!k(Lt),onClick:()=>void en(),type:`button`,children:a(`Add`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:a(`Blur`)}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:u?.backgroundBlur??0}),(0,J.jsxs)(hg,{children:[u?.backgroundBlur??0,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:a(`Saturation`)}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:u?.backgroundSaturation??100}),(0,J.jsxs)(hg,{children:[u?.backgroundSaturation??100,`%`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:a(`Brightness`)}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:u?.backgroundBrightness??100}),(0,J.jsxs)(hg,{children:[u?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`safety`),children:[(0,J.jsx)(Th,{note:`Deleting, moving, renaming or writing to a protected folder, anything inside a recursive entry, or a folder that contains one always waits for an explicit confirmation.`,title:`Safety`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:a(`Protected folders`)}),(0,J.jsx)($,{children:a(`Rules are full-path globs: * stays inside one name, ** crosses folders, and ? matches one character. A rule without a folder part, such as *.log, applies to that name at any depth. %VARS%, $VARS and ~ are expanded first.`)})]}),(0,J.jsx)(Wg,{children:(u?.protectedPaths??[]).map(e=>(0,J.jsxs)(Gg,{children:[(0,J.jsx)(Kg,{"aria-label":a(`Protected path`),onBlur:on,onChange:t=>Re({from:e,value:t.target.value}),onFocus:()=>Re({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),on()):e.key===`Escape`&&Re(null)},spellCheck:!1,value:Le?.from===e?Le.value:e}),(0,J.jsx)(qg,{onClick:()=>sn(e),title:a(`Remove`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]},e))}),(0,J.jsxs)(Yg,{children:[(0,J.jsx)(Xg,{"aria-label":a(`New protected rule`),onChange:e=>He(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),an())},placeholder:`*.log`,spellCheck:!1,value:Ve}),(0,J.jsx)(vg,{onClick:an,type:`button`,children:a(`Add the rule`)})]}),(0,J.jsxs)(Jg,{children:[(0,J.jsx)(vg,{onClick:()=>void cn(),type:`button`,children:a(`Restore defaults`)}),(0,J.jsx)(vg,{onClick:()=>void nn(),type:`button`,children:a(`Add folder…`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Confirmation delay`)}),(0,J.jsx)($,{children:a(`The delete button in the protected-folder dialog stays disabled for this many seconds. At least 2.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:u?.deleteDelaySeconds??5}),(0,J.jsxs)(hg,{children:[u?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`tags`),children:[(0,J.jsx)(Th,{note:`Every tag in the catalogue; add, rename, recolour or remove them here.`,title:`Tags`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(gg,{"aria-label":a(`Color of the new tag`),onChange:e=>U(e.target.value),type:`color`,value:Ie}),(0,J.jsx)(Tg,{onChange:e=>Fe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),En())},placeholder:a(`New tag`),spellCheck:!1,value:Pe})]}),(0,J.jsx)($,{children:a(`Add a tag here; it is available in every folder.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(vg,{disabled:je||Pe.trim().length===0,onClick:()=>void En(),type:`button`,children:a(`Add`)})})]}),Me&&(0,J.jsx)(X,{children:(0,J.jsx)(mg,{children:Me})}),De.length===0&&(0,J.jsx)(X,{children:(0,J.jsx)($,{children:a(`No tags yet. Add one below; it is available in every folder.`)})}),De.map(e=>(0,J.jsx)(X,{children:ke?.name===e.name?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(gg,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void Dn(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,J.jsx)(_g,{autoFocus:!0,disabled:je,onChange:t=>Ae({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),kn()):e.key===`Escape`&&(e.preventDefault(),Ae(null))},value:ke.value})]}),(0,J.jsx)($,{children:a(`Press Enter to save, Escape to cancel.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(vg,{disabled:je,onClick:()=>void kn(),type:`button`,children:a(`Save`)}),(0,J.jsx)(vg,{disabled:je,onClick:()=>Ae(null),type:`button`,children:a(`Cancel`)})]})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(gg,{"aria-label":a(`Color of {tag}`,{tag:e.name}),onChange:t=>void Dn(e.name,t.target.value),title:a(`Change this tag's color`),type:`color`,value:e.color??`#64748b`}),(0,J.jsx)(Q,{children:e.name})]}),(0,J.jsx)($,{children:ie(a,e.folders,`Used in 1 folder. Renaming or removing it updates that folder's index.`,`Used in {count} folders. Renaming or removing it updates those folders' indexes.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(vg,{disabled:je,onClick:()=>Ae({name:e.name,value:e.name}),type:`button`,children:a(`Edit`)}),(0,J.jsxs)(xg,{disabled:je,onClick:()=>void On(e.name),type:`button`,children:[(0,J.jsx)(Ei,{size:13}),a(`Remove`)]})]})]})},e.name))]})]}),(0,J.jsxs)(Oh,{ref:Zt(`files-view`),children:[(0,J.jsx)(Th,{note:`The defaults every folder starts with; a folder can still override them.`,title:`Files view`,global:!0}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Default view`)}),(0,J.jsx)($,{children:a(`The mode every folder starts with. A folder can still remember its own list or grid mode from the title bar.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsxs)(jg,{children:[(0,J.jsx)(Mg,{$on:Ht.mode===`list`,onClick:()=>void G({defaultView:{...Ht,mode:`list`}}),type:`button`,children:a(`List`)}),(0,J.jsx)(Mg,{$on:Ht.mode===`grid`,onClick:()=>void G({defaultView:{...Ht,mode:`grid`}}),type:`button`,children:a(`Grid`)})]})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`List icon size`)}),(0,J.jsx)($,{children:a(`The icon in the list rows.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:48,min:16,onChange:e=>void G({defaultView:{...Ht,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:Ht.iconSize}),(0,J.jsxs)(hg,{children:[Ht.iconSize,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Grid size`)}),(0,J.jsx)($,{children:a(`The height of a grid tile; the icon inside follows it.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Ng,{max:260,min:100,onChange:e=>void G({defaultView:{...Ht,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:Ht.gridSize}),(0,J.jsxs)(hg,{children:[Ht.gridSize,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:a(`Selection checkboxes`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:a(`Show a checkbox before every name, the way Explorer does. Checked entries can be copied, cut or deleted together.`)})]}),(0,J.jsx)(Cg,{$on:u?.showCheckboxes??!0,disabled:!u,onClick:()=>void G({showCheckboxes:!(u?.showCheckboxes??!0)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:a(`Open with a single click`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:a(`Off means double-click, like Explorer's default. The checkbox still only selects, so a click on it never opens the entry.`)})]}),(0,J.jsx)(Cg,{$on:u?.openOnSingleClick??!1,disabled:!u,onClick:()=>void G({openOnSingleClick:!(u?.openOnSingleClick??!1)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:a(`Open the file tray while dragging`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:a(`The tray appears when a drag starts and closes again if it is still empty. Off leaves it to the title bar button.`)})]}),(0,J.jsx)(Cg,{$on:u?.trayAutoShow??!0,disabled:!u,onClick:()=>void G({trayAutoShow:!(u?.trayAutoShow??!0)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:a(`Confirm before deleting`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:a(`Asks before moving items to the recycle bin. Shift+Del always asks, because that deletes permanently.`)})]}),(0,J.jsx)(Cg,{$on:u?.confirmDelete??!1,disabled:!u,onClick:()=>void G({confirmDelete:!(u?.confirmDelete??!1)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:a(`Play audio in video previews`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:a(`Video previews play muted by default. Turn this on to hear their audio while the details panel is open.`)})]}),(0,J.jsx)(Cg,{$on:u?.previewVideoAudio??!1,disabled:!u,onClick:()=>void G({previewVideoAudio:!(u?.previewVideoAudio??!1)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:a(`Autoplay video previews`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:a(`Off by default. Turn this on to start a video as soon as its details panel opens; the play button still works when it is off.`)})]}),(0,J.jsx)(Cg,{$on:u?.previewVideoAutoplay??!1,disabled:!u,onClick:()=>void G({previewVideoAutoplay:!(u?.previewVideoAutoplay??!1)}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:a(`Preview panel under the list`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:a(`Shows the pictures, videos and documents the shell can preview as grid tiles below the list. The tiles follow the grid size, and the panel only appears in list mode.`)})]}),(0,J.jsx)(Cg,{$on:Ht.showImages??!0,onClick:()=>void G({defaultView:{...Ht,showImages:!(Ht.showImages??!0)}}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsx)(X,{children:(0,J.jsxs)(Z,{children:[(0,J.jsxs)(pg,{children:[(0,J.jsx)(Q,{children:a(`Columns`)}),(0,J.jsx)(Rm,{})]}),(0,J.jsx)($,{children:a(`Shown in every folder; changing them changes all folders at once.`)})]})}),(0,J.jsx)(X,{children:(0,J.jsxs)(t_,{children:[rl.map(e=>(0,J.jsxs)(n_,{children:[(0,J.jsx)(`input`,{checked:(Ht.columns??[]).includes(e.id),onChange:()=>void An(e.id),type:`checkbox`}),(0,J.jsx)(`span`,{children:a(e.label)})]},e.id)),(0,J.jsxs)(n_,{children:[(0,J.jsx)(`input`,{checked:(Ht.columns??[]).includes(`linkTarget`),onChange:()=>void An(`linkTarget`),type:`checkbox`}),(0,J.jsx)(`span`,{children:a(`Link target after the name`)})]})]})})]}),(0,J.jsxs)(c_,{children:[a(`The default view, list icon size and grid size are only defaults: a folder can still remember its own from the title bar.`),` `,(0,J.jsx)(Rm,{}),` `,a(`Anything marked as global always applies to every folder.`)]})]}),(0,J.jsxs)(Oh,{ref:Zt(`shortcuts`),children:[(0,J.jsx)(Th,{note:`The keys this window listens for. Click a combination to record a new one.`,title:`Shortcuts`}),(0,J.jsxs)(Ah,{children:[ih.map(({id:e,label:t,note:n})=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(t)}),(0,J.jsx)($,{children:a(n)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(r_,{$listening:Ce===e,onClick:()=>we(e),type:`button`,children:Ce===e?a(`Press a key…`):Gt(In[e])})})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Reset`)}),(0,J.jsx)($,{children:a(`Back to the default combination for every action.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(i_,{onClick:()=>void G({shortcuts:{...Bt}}),type:`button`,children:a(`Reset`)})})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`memory`),children:[(0,J.jsx)(Th,{note:`What the process holds and how to give it back.`,title:`Memory`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(cg,{children:[(0,J.jsxs)(lg,{children:[(0,J.jsx)(Q,{children:a(`Process memory`)}),(0,J.jsx)(hg,{children:O?`${x(O.private)} · ${Xh(O.private,O.available)}`:`—`})]}),(0,J.jsx)(ug,{children:(0,J.jsx)(dg,{$ratio:O?O.private/Math.max(O.available,1):0,$tone:b(O?O.private/Math.max(O.available,1):0)})}),(0,J.jsx)($,{children:O?a(`Committed of {available} the runtime can use; {resident} is resident. The webview runs in its own process.`,{available:x(O.available),resident:x(O.workingSet)}):a(`Reading the current usage…`)})]}),(0,J.jsxs)(cg,{children:[(0,J.jsxs)(lg,{children:[(0,J.jsx)(Q,{children:a(`Managed heap`)}),(0,J.jsx)(hg,{children:O?`${x(O.managed)} · ${Xh(O.managed,O.private)}`:`—`})]}),(0,J.jsx)(ug,{children:(0,J.jsx)(dg,{$ratio:O?O.managed/Math.max(O.private,1):0,$tone:`var(--accent-secondary)`})}),(0,J.jsx)($,{children:a(`Share of this process that the .NET heap holds; thumbnails and folder size walks live here. The runtime grows it on demand and gives it back after a collection.`)})]}),(0,J.jsxs)(cg,{children:[(0,J.jsxs)(lg,{children:[(0,J.jsx)(Q,{children:a(`Native and runtime`)}),(0,J.jsx)(hg,{children:O?`${x(Math.max(0,O.private-O.managed))} · ${Xh(Math.max(0,O.private-O.managed),O.private)}`:`—`})]}),(0,J.jsx)(ug,{children:(0,J.jsx)(dg,{$ratio:O?Math.max(0,O.private-O.managed)/Math.max(O.private,1):0,$tone:`var(--accent-primary)`})}),(0,J.jsx)($,{children:a(`The runtime, loaded libraries and the Rust helper share this part. Rust runs inside the process, so it has no separate figure.`)})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Free memory`)}),(0,J.jsx)($,{children:a(`Compacts the heap and returns unused pages to the system. Always safe.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(i_,{onClick:()=>void st().then(A),type:`button`,children:a(`Trim now`)})})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`overview`),children:[(0,J.jsx)(Th,{note:`The home tab's history and how much of it it shows.`,title:`Overview`}),(0,J.jsx)(Ah,{children:(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Recent items`)}),(0,J.jsx)($,{children:a(`How many recently opened folders the overview lists. 0 hides the section.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(Tg,{max:50,min:0,onChange:e=>void Ln(Number(e.target.value)),type:`number`,value:u?.recentLimit??10})})]})})]}),(0,J.jsxs)(Oh,{ref:Zt(`gallery`),children:[(0,J.jsx)(Th,{note:`The folders the gallery scans for pictures and videos.`,title:`Gallery`}),(0,J.jsxs)(Ah,{children:[(u?.galleryRoots??[]).map(e=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:y(e)}),(0,J.jsx)($,{children:e})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(a_,{onClick:()=>void Hn((u?.galleryRoots??[]).filter(t=>t!==e)),title:a(`Stop scanning this folder`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Scan folders`)}),(0,J.jsx)($,{children:(u?.galleryRoots??[]).length===0?a(`Nothing added yet, so the gallery reads the Pictures folder.`):a(`Only these folders are scanned, three levels deep.`)})]}),(0,J.jsx)(fg,{children:(0,J.jsx)(i_,{onClick:()=>void Un(),type:`button`,children:a(`Choose folder…`)})})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`icons`),children:[(0,J.jsx)(Th,{note:`Where the shell's own icons and the built-in glyphs come from.`,title:`Icons`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Use system file icons`)}),(0,J.jsx)($,{children:a(`Ask the shell for the icon of each file type instead of the built-in glyphs.`)})]}),(0,J.jsx)(Cg,{$on:u?.systemIcons??!1,disabled:!u,onClick:()=>void G({systemIcons:!u?.systemIcons}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Use custom folder icons`)}),(0,J.jsx)($,{children:a(`Folders that define an icon (desktop.ini) keep showing it even when system icons are off.`)})]}),(0,J.jsx)(Cg,{$on:u?.customFolderIcons??!1,disabled:!u,onClick:()=>void G({customFolderIcons:!u?.customFolderIcons}),type:`button`,children:(0,J.jsx)(wg,{})})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`extension-icons`),children:[(0,J.jsx)(Th,{note:`A custom glyph for one file extension.`,title:`Icons by extension`}),(0,J.jsxs)(Ah,{children:[Object.entries(u?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:e}),(0,J.jsx)($,{children:vh(a,t)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(yh,{source:t}),(0,J.jsx)(a_,{onClick:()=>void Fn(e,null),title:a(`Remove this rule`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Add a rule`)}),(0,J.jsx)($,{children:a(`Extension and the icon to draw for it.`)})]}),(0,J.jsxs)(fg,{children:[(0,J.jsx)(Tg,{onChange:e=>v(e.target.value),placeholder:`.psd`,spellCheck:!1,value:_}),(0,J.jsxs)(Ag,{children:[(0,J.jsx)(a_,{onClick:()=>E(e=>!e),title:a(`Choose the icon`),type:`button`,children:(0,J.jsx)(yh,{source:C})}),T&&(0,J.jsx)(Xd,{allowDefault:!1,onClose:()=>E(!1),onPick:e=>{w(e??`file`),E(!1)},value:C})]}),(0,J.jsx)(a_,{onClick:()=>void Wn(),title:a(`Add the rule`),type:`button`,children:(0,J.jsx)(gi,{size:13})})]})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`folder-icons`),children:[(0,J.jsx)(Th,{note:`A single folder can carry an icon of its own.`,title:`Folder icons`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Give a folder its own icon`)}),(0,J.jsx)($,{children:a(`Stored in the folder's parent {index}, so it stays with the files.`,{index:`.yafm-index.db`})})]}),(0,J.jsxs)(fg,{children:[h&&(0,J.jsx)(bh,{src:h.icon}),(0,J.jsx)(i_,{disabled:ee,onClick:()=>void Gn(),type:`button`,children:a(ee?`Choosing…`:`Choose folder and icon…`)})]})]}),h&&(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:y(h.folder)}),(0,J.jsx)($,{children:h.folder})]}),(0,J.jsx)(fg,{children:(0,J.jsxs)(s_,{children:[(0,J.jsx)(Di,{size:11}),` `,a(`Saved`)]})})]})]})]}),(0,J.jsxs)(Oh,{ref:Zt(`folder-index`),children:[(0,J.jsx)(Th,{note:`The hidden cache that makes a folder open instantly next time.`,title:`Folder index`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:a(`Keep a {index} in every folder`,{index:`.yafm-index.db`})}),(0,J.jsx)($,{children:a(`Holds icons, cached folder sizes and the folder's last listing, so it opens instantly next time. Hidden and marked as a system file on Windows; skipped where the folder is read-only.`)})]}),(0,J.jsx)(Cg,{$on:u?.writeDirectoryIndex??!0,disabled:!u,onClick:()=>void G({writeDirectoryIndex:!u?.writeDirectoryIndex}),type:`button`,children:(0,J.jsx)(wg,{})})]}),(0,J.jsxs)(jh,{children:[(0,J.jsxs)(Mh,{children:[(0,J.jsx)(Q,{children:a(`Directory index blacklist`)}),(0,J.jsx)($,{children:a(`Rules are full-path globs: * matches within one path segment and ** crosses folders. Matching folders use the central database instead of creating .yafm-index.db files.`)})]}),(0,J.jsx)(Wg,{children:(u?.directoryIndexBlacklist??[]).map(e=>(0,J.jsxs)(Gg,{children:[(0,J.jsx)(Kg,{"aria-label":a(`Directory index blacklist rule`),onBlur:ln,onChange:t=>Be({from:e,value:t.target.value}),onFocus:()=>Be({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),ln()):e.key===`Escape`&&Be(null)},spellCheck:!1,value:ze?.from===e?ze.value:e}),(0,J.jsx)(qg,{onClick:()=>q(e),title:a(`Remove`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]},e))}),(0,J.jsxs)(Yg,{children:[(0,J.jsx)(Xg,{"aria-label":a(`Directory index blacklist rule`),onChange:e=>Ge(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),un())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:We}),(0,J.jsx)(vg,{onClick:un,type:`button`,children:a(`Add the rule`)})]}),(0,J.jsxs)(Jg,{children:[(0,J.jsx)(vg,{onClick:dn,type:`button`,children:a(`Restore defaults`)}),(0,J.jsx)(vg,{onClick:()=>void K(),type:`button`,children:a(`Add folder…`)})]})]})]}),!(u?.writeDirectoryIndex??!0)&&(0,J.jsx)(l_,{children:_h(a,e?.platform)})]}),(0,J.jsxs)(Oh,{ref:Zt(`indexing`),children:[(0,J.jsx)(Th,{note:`Background folder size and item-count walks.`,title:`Index tasks`}),(0,J.jsx)(gh,{})]}),(0,J.jsxs)(Oh,{ref:Zt(`files`),children:[(0,J.jsx)(Th,{note:`What the listings include.`,title:`Files`}),(0,J.jsxs)(Ah,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:a(`Hidden items`)}),(0,J.jsx)(hg,{children:hh(a,c?.showHidden)})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:a(`Protected operating system files`)}),(0,J.jsx)(hg,{children:hh(a,c?.showSystem)})]})]}),(0,J.jsx)(c_,{children:a(`Listings follow the file manager's own settings: hidden and protected items are only shown when the operating system is set to show them.`)})]})]}),(0,J.jsxs)(Gh,{"aria-label":a(`Settings sections`),children:[(0,J.jsx)(Kh,{children:a(`Sections`)}),(0,J.jsx)(qh,{children:dh.map(({id:e,label:t})=>(0,J.jsx)(Jh,{$active:Tt===e,onClick:()=>Qt(e),type:`button`,children:(0,J.jsx)(`span`,{children:a(t)})},e))}),(0,J.jsx)(Yh,{children:a(`Changes are saved as you make them.`)})]}),xt&&(0,Va.createPortal)((0,J.jsx)($h,{children:(0,J.jsxs)(eg,{"aria-modal":`true`,role:`dialog`,children:[(0,J.jsxs)(tg,{children:[(0,J.jsx)(`h2`,{children:a(`Software update`)}),(0,J.jsx)(`p`,{children:ht?.latest?a(`Version {version}`,{version:ht.latest}):a(`Preparing the update…`)})]}),(0,J.jsx)(ng,{children:a(`Changelog`)}),(0,J.jsx)(rg,{children:xt.changelog||(xt.phase===`changelog`?a(`Loading the changelog…`):a(`The changelog could not be loaded.`))}),(0,J.jsxs)(ig,{children:[(0,J.jsx)(`span`,{children:Zh(xt,a)}),(0,J.jsx)(`span`,{children:Qh(xt)})]}),(0,J.jsx)(ag,{children:(0,J.jsx)(og,{$percent:Math.max(0,Math.min(100,xt.percent))})}),xt.error&&(0,J.jsx)(mg,{children:xt.error}),(0,J.jsxs)(sg,{children:[(xt.phase===`changelog`||xt.phase===`downloading`)&&(0,J.jsx)(i_,{onClick:()=>void xn(),type:`button`,children:a(`Cancel`)}),xt.phase===`ready`&&(0,J.jsx)(i_,{onClick:()=>void Sn(),type:`button`,children:a(`Install update`)}),xt.phase===`installing`&&(0,J.jsx)(i_,{disabled:!0,type:`button`,children:a(`Installing…`)}),(xt.phase===`ready`||xt.phase===`error`||xt.phase===`cancelled`||xt.phase===`installing`)&&(0,J.jsx)(i_,{onClick:()=>St(null),type:`button`,children:a(`Close`)})]})]})}),document.body)]})}function hh(e,t){return e(t===void 0?`Reading…`:t?`Shown`:`Hidden`)}function gh(){let e=p(),[t,n]=(0,z.useState)(null);return(0,z.useEffect)(()=>{let e=!0,t=()=>Ge().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,J.jsx)(l_,{children:e(`No indexing tasks are running.`)}):(0,J.jsxs)(Ah,{children:[(0,J.jsx)(X,{children:(0,J.jsx)(Q,{children:e(`{count} indexing tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,J.jsx)(X,{children:(0,J.jsx)(hg,{title:e,children:e})},e))]}):(0,J.jsx)(l_,{children:e(`Index task information is unavailable.`)})}function _h(e,t){return e(`Indexes are off. Every folder's icons, sizes and cached listing now live in one database in {place}, so that drive grows with every folder you open — that is the cost of keeping folders free of extra files.`,{place:e(t===`windows`?`%APPDATA%, which sits on the system drive (usually C:)`:t===`linux`?`your home folder, which often shares a partition with the system`:`the app's settings folder, which usually sits on the system drive`)})}function vh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built-in: {source}`,{source:t})}function yh({source:e}){let t=K(e.startsWith(`file:`)?e.slice(5):null);return(0,J.jsx)(o_,{children:t?(0,J.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,J.jsx)(Qs,{name:e,size:16})})}function bh({src:e}){let t=K(e);return(0,J.jsx)(o_,{children:t&&(0,J.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function xh({path:e,active:t,onSelect:n,onRemove:r}){let i=p(),a=k(e),o=hn(a?null:e),s=a?e:o,c=td(e.split(/[?#]/)[0]);return(0,J.jsxs)(zg,{children:[(0,J.jsxs)(Rg,{$active:t,onClick:n,title:e,type:`button`,children:[s&&(c?(0,J.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${s}#t=0.5`}):(0,J.jsx)(`img`,{alt:``,src:s})),c&&(0,J.jsx)(Vg,{children:(0,J.jsx)(Fi,{size:11})})]}),(0,J.jsx)(Bg,{onClick:r,title:i(`Remove`),type:`button`,children:(0,J.jsx)(Oi,{size:9})})]})}function Sh({value:e,options:t,onChange:n,disabled:r}){let i=p(),[a,o]=(0,z.useState)(null),s=(0,z.useRef)(null);return(0,z.useEffect)(()=>{if(!a)return;let e=()=>o(null),t=t=>{let n=t.target;n instanceof Node&&s.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Eg,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){o(null);return}let e=s.current?.getBoundingClientRect();e&&o({left:e.left,top:e.bottom+4,width:e.width})},ref:s,type:`button`,children:[(0,J.jsx)(`span`,{children:Ch(i,e)}),(0,J.jsx)(Dg,{children:(0,J.jsx)(yi,{size:11})})]}),a&&(0,Va.createPortal)((0,J.jsx)(Og,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,J.jsxs)(kg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),o(null)},role:`option`,type:`button`,children:[(0,J.jsx)(`span`,{children:Ch(i,t)}),t===e&&(0,J.jsx)(Di,{size:11})]},t))}),document.body)]})}function Ch(e,t){return t===lh?e(`System default`):uh[t]??t}function wh({colors:e,current:t,onApply:n}){let r=p();if(e.length===0)return null;let[i,...a]=e;return(0,J.jsxs)(Hh,{children:[(0,J.jsxs)(Wh,{$color:i,onClick:()=>n(i),title:r(`Previous colour · {colour}`,{colour:i}),type:`button`,children:[(0,J.jsx)(`i`,{}),r(`Previous`)]}),a.map(e=>(0,J.jsx)(Uh,{$color:e,onClick:()=>n(e),title:r(`Use {colour}`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,J.jsx)(Di,{size:9})},e))]})}function Th({title:e,note:t,global:n=!1}){let r=p();return(0,J.jsxs)(kh,{children:[(0,J.jsxs)(`h2`,{children:[r(e),n&&(0,J.jsx)(Rm,{})]}),(0,J.jsx)(`p`,{children:r(t)})]})}var Eh=n.div`
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

    ${({$active:e})=>e&&F`
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
`;function Xh(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function Zh(e,t){switch(e.phase){case`changelog`:return t(`Preparing the update…`);case`downloading`:return t(`Downloading the update…`);case`ready`:return t(`Download complete.`);case`cancelled`:return t(`Update cancelled.`);case`error`:return t(`The update failed.`);case`installing`:return t(`Installing…`);default:return``}}function Qh(e){return e.total>0?`${x(e.downloaded)} / ${x(e.total)}`:e.downloaded>0?x(e.downloaded):``}var $h=n.div`
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
`,u_=150,d_=2500,f_=3,p_=600;function m_({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:o,onSearchMatches:s,onPick:c,onSelectionChange:l,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:f,favoritePaths:m,onExtractArchive:h,showDetails:g=!0,videoAudio:_=!1,videoAutoplay:v=!1}){let y=p(),b=Qc(`gallery`),[S,C]=(0,z.useState)([]),[w,T]=(0,z.useState)(0),[E,ee]=(0,z.useState)(!0),[D,O]=(0,z.useState)(null),[k,A]=(0,z.useState)(!1),[te,j]=(0,z.useState)([]),[ne,re]=(0,z.useState)(()=>{let e=Gn(`yafm.preview.width`,320);return e>=220?e:320}),ae=(0,z.useRef)([]),N=(0,z.useRef)(0),P=(0,z.useRef)(!1),F=(0,z.useRef)(!0),oe=(0,z.useRef)(0),I=(0,z.useRef)(null),se=(0,z.useRef)(0),ce=(0,z.useCallback)(async e=>{let t=++oe.current;ee(!0),F.current=!0,O(null);try{let n=await Le(0,u_,e);if(t!==oe.current)return;ae.current=n.entries,N.current=n.total,C(n.entries),T(n.total)}catch(e){t===oe.current&&O(e instanceof Error?e.message:String(e))}finally{t===oe.current&&(F.current=!1,ee(!1))}},[]);(0,z.useEffect)(()=>{ce(!1)},[ce]);let le=(0,z.useCallback)(async()=>{if(F.current||P.current||ae.current.length>=N.current)return;let e=oe.current;P.current=!0;try{let t=ae.current,n=N.current;for(let r=0;r<f_&&t.length<n;r++){let r=await Le(t.length,u_,!1);if(e!==oe.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<u_)break}if(e!==oe.current)return;ae.current=t,N.current=n,(0,z.startTransition)(()=>{C(t),T(n)})}catch{}finally{P.current=!1}},[]),ue=(0,z.useCallback)(e=>{se.current||=window.requestAnimationFrame(()=>{se.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<d_&&le()})},[le]);(0,z.useEffect)(()=>{let e=I.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&le()},{root:e.parentElement,rootMargin:`${d_}px 0px`});return t.observe(e),()=>t.disconnect()},[le]),(0,z.useEffect)(()=>{if(S.length>=w)return;let e=window.setTimeout(()=>{let e=I.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<d_&&le()},200);return()=>window.clearTimeout(e)},[S.length,w,le]);let de=(0,z.useMemo)(()=>({path:``,parent:null,entries:S.map(h_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[S]),fe=(0,z.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),pe=(0,z.useCallback)(e=>{c?c(e):be(e)},[c]),L=(0,z.useCallback)(e=>{let t=g_(e.modified);return{id:t,label:t}},[]),me=()=>{A(!0),ce(!0).finally(()=>A(!1))},R=S.length<w,he=(0,z.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:S.filter(e=>En(e.name,a)||En(e.path,a)),[S,a?.open,a?.query,a?.matchCase,a?.regex]),B=(0,z.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:he[Math.min(a.index,Math.max(0,he.length-1))]?.path??null}:vn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,he]);(0,z.useEffect)(()=>{s?.(he.length)},[he.length,s]);let ge=(0,z.useCallback)(e=>{j(e),l?.(e)},[l]),_e=e=>{re(e),Kn(`yafm.preview.width`,e)},V=te.length>0?S.find(e=>e.path===te[0])??null:null,ve=V?.name.includes(`.`)?V.name.slice(V.name.lastIndexOf(`.`)+1).toUpperCase():`—`,ye=V&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(V.name)?y(`Video`):y(`Picture`),xe=V?V.path.slice(0,Math.max(V.path.lastIndexOf(`\\`),V.path.lastIndexOf(`/`))):``,Se=V?{name:V.name,path:V.path,isDirectory:!1,size:V.size,modified:V.modified,fields:[{label:y(`Type`),value:ye},{label:y(`Extension`),value:ve},{label:y(`Location`),value:xe},{label:y(`Full path`),value:V.path},{label:y(`Size`),value:x(V.size)},{label:y(`Modified`),value:M(V.modified)},{label:y(`Created`),value:`—`}]}:null;return(0,J.jsxs)(__,{children:[(0,J.jsxs)(b_,{children:[(0,J.jsxs)(S_,{children:[(0,J.jsx)(`span`,{children:y(`Gallery`)}),(0,J.jsx)(C_,{children:E?y(`scanning…`):y(`{shown} of {total} pictures`,{shown:S.length,total:w})})]}),(0,J.jsxs)(x_,{children:[(0,J.jsx)(w_,{onClick:me,title:y(`Scan the folders again`),type:`button`,children:(0,J.jsx)(T_,{$spinning:k,children:(0,J.jsx)(hi,{size:14})})}),b.available&&(0,J.jsx)(w_,{onClick:e=>b.open(e.clientX,e.clientY),title:y(`Selection menu`),type:`button`,children:(0,J.jsx)(ba,{size:14})})]})]}),D&&(0,J.jsx)(D_,{children:D}),!D&&!E&&w===0&&(0,J.jsx)(D_,{children:y(`No pictures found.`)}),!D&&(E||w>0)&&(0,J.jsxs)(v_,{children:[(0,J.jsx)(y_,{children:(0,J.jsx)(fl,{confirmDelete:n,find:B,selectMatchesToken:o,listing:E&&S.length===0?null:de,loading:E,error:null,view:fe,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ge,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:pe,onOpenFile:pe,onRefresh:me,onAddToTray:u,onAddFavorite:d,onRemoveFavorite:f,favoritePaths:m,onExtractArchive:h,groupOf:L,onGridScroll:ue,gridFooter:(0,J.jsx)(E_,{$space:R?p_:1,ref:I}),allowBackgroundMenu:!1})}),g&&(0,J.jsx)(rs,{emptyNote:y(`Nothing selected.`),info:Se,onWidth:_e,selectionNote:te.length>1?ie(y,te.length,`1 item selected`,`{count} items selected`):void 0,videoAudio:_,videoAutoplay:v,width:ne})]})]})}function h_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function g_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(A(),{weekday:`long`}):t.toLocaleDateString(A(),{year:`numeric`,month:`long`,day:`numeric`})}var __=n.div`
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
`;function O_({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:o=``,version:s=0,historyVersion:l=0,hiddenViews:u=[],onNavigate:d,onOpenView:f}){let[m,h]=(0,z.useState)([]),g=p(),[_,v]=(0,z.useState)(null),S=Pn();(0,z.useEffect)(()=>{qe().then(e=>{v(e),h(Ms(e).filter(e=>e.pinned))},()=>{v(null),h([])})},[s]),(0,z.useEffect)(()=>{if(!c.available)return;let e=m.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||o).filter(e=>e.length>0);return c.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>c.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[m,o]);let C=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>P(e.path,t));return{name:_?.placeNames?.[t]??n?.name??(y(t)||t),path:t,kind:`folder`,icon:n?.icon??_?.placeIcons?.[t]??null}}),w=a===`files`;return(0,J.jsxs)(P_,{children:[(0,J.jsxs)(F_,{children:[!u.includes(`home`)&&(0,J.jsxs)(B_,{$active:a===`home`,onClick:e=>f(`home`,Ut(e)),title:g(`Overview`),type:`button`,children:[(0,J.jsx)(Ki,{}),(0,J.jsx)(H_,{children:g(`Overview`)})]}),!u.includes(`recycle`)&&(0,J.jsxs)(B_,{$active:a===`recycle`,onClick:e=>f(`recycle`,Ut(e)),title:g(`Recycle Bin`),type:`button`,children:[(0,J.jsx)(Ei,{}),(0,J.jsx)(H_,{children:g(`Recycle Bin`)})]}),!u.includes(`gallery`)&&(0,J.jsxs)(B_,{$active:a===`gallery`,onClick:e=>f(`gallery`,Ut(e)),title:g(`Gallery`),type:`button`,children:[(0,J.jsx)(Pi,{}),(0,J.jsx)(H_,{children:g(`Gallery`)})]})]}),m.map(e=>(0,J.jsxs)(L_,{children:[(0,J.jsxs)(B_,{as:`div`,$active:!1,children:[(0,J.jsx)(V_,{children:(0,J.jsx)(Ps,{panel:e,size:16})}),(0,J.jsx)(H_,{children:g(e.title)})]}),(0,J.jsx)(R_,{children:(0,J.jsxs)(z_,{children:[e.kind===`quick`&&C(e).map(e=>(0,J.jsxs)(B_,{$active:w&&P(i,e.path),onClick:t=>d(e.path,Ut(t)),title:e.path,type:`button`,children:[(0,J.jsx)(Fs,{place:e}),(0,J.jsx)(H_,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=Fn(S,e.path);return(0,J.jsxs)(B_,{$active:w&&P(i,e.path),onClick:t=>e.isDirectory?d(e.path,Ut(t)):void be(e.path),title:e.path,type:`button`,children:[t&&S.useIcons?(0,J.jsx)(Fs,{place:t}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,J.jsx)(H_,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,J.jsx)(j_,{historyVersion:l,onNavigate:d}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,J.jsxs)(B_,{$active:w&&P(i,e.name),onClick:t=>d(e.name,Ut(t)),title:e.name,type:`button`,children:[(0,J.jsx)(fi,{}),(0,J.jsxs)(H_,{children:[re(e),(0,J.jsxs)(U_,{children:[x(e.freeSpace),` free`]}),(0,J.jsx)(W_,{children:(0,J.jsx)(G_,{$used:t,$tone:b(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,J.jsx)(M_,{onNavigate:d,path:e.path||o})]})})]},e.id)),!u.includes(`settings`)&&(0,J.jsx)(I_,{children:(0,J.jsxs)(B_,{$active:a===`settings`,onClick:e=>f(`settings`,Ut(e)),title:g(`Settings`),type:`button`,children:[(0,J.jsx)(bi,{}),(0,J.jsx)(H_,{children:g(`Settings`)})]})})]})}var k_=10,A_=40;function j_({historyVersion:e=0,onNavigate:t}){let n=p(),[r,i]=(0,z.useState)(null),a=Pn();return(0,z.useEffect)(()=>{ze().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Fn(a,e.path);return(0,J.jsxs)(B_,{$active:!1,onClick:n=>t(e.path,Ut(n)),title:ie(n,e.count,`1 visit · {path}`,`{count} visits · {path}`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,J.jsx)(Fs,{place:r}):(0,J.jsx)($s,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,J.jsx)(H_,{children:r?.name||e.name})]},e.path)})}function M_({path:e,onNavigate:t}){let[n,r]=(0,z.useState)(null);(0,z.useEffect)(()=>{e&&(r(null),xe(e,!1).then(r,()=>r(null)))},[e]),(0,z.useEffect)(()=>{if(e&&c.available)return c.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&P(n.data.path,e)&&xe(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,k_),o=i.filter(e=>!e.isDirectory).slice(0,A_);return(0,J.jsxs)(J.Fragment,{children:[a.map(e=>(0,J.jsx)(N_,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,J.jsx)(N_,{entry:e,onNavigate:t},e.fullPath))]})}function N_({entry:e,onNavigate:t}){let n=Pn(),r=Fn(n,e.fullPath);return(0,J.jsxs)(B_,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Ut(n)):void be(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,J.jsx)(Fs,{place:r}):(0,J.jsx)($s,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,J.jsx)(H_,{children:r?.name||e.name})]})}var P_=n.aside`
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
`;function q_({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=p(),a=(0,z.useRef)(null),o=e.filter(e=>e.state===`running`).length,s=e.length;return(0,z.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,e),()=>window.removeEventListener(`pointerdown`,e)},[n,r]),(0,J.jsxs)(Y_,{ref:a,children:[(0,J.jsxs)(X_,{$active:n,onClick:()=>r(!n),title:o>0?ie(i,o,`1 operation running`,`{count} operations running`):i(`Status center`),type:`button`,children:[(0,J.jsx)(Ti,{size:13}),s>0&&(0,J.jsx)(K_,{children:s>9?`9+`:s})]}),n&&(0,J.jsxs)(Z_,{children:[(0,J.jsxs)(Q_,{children:[(0,J.jsx)($_,{children:i(`Status center`)}),(0,J.jsxs)(ev,{children:[(0,J.jsx)(tv,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`Clear finished`)}),(0,J.jsx)(nv,{onClick:()=>r(!1),title:i(`Close`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]})]}),e.length===0?(0,J.jsx)(iv,{children:i(`No operations yet.`)}):(0,J.jsx)(rv,{children:e.map(e=>(0,J.jsx)(J_,{task:e},e.id))})]})]})}function J_({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,J.jsxs)(av,{children:[(0,J.jsxs)(ov,{children:[(0,J.jsx)(sv,{$state:e.state,children:e.state===`done`?(0,J.jsx)(Di,{size:10}):e.state===`failed`?(0,J.jsx)(Oi,{size:10}):(0,J.jsx)(cv,{})}),(0,J.jsx)(lv,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,J.jsxs)(uv,{children:[x(e.bytesDone),` / `,x(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,J.jsxs)(uv,{children:[e.done,` / `,e.total]})]}),i&&(0,J.jsx)(dv,{children:(0,J.jsx)(fv,{$percent:r,$indeterminate:t===0})}),e.error&&(0,J.jsx)(pv,{children:e.error})]})}var Y_=n.div`
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
`;async function mv(){return c.available?(await c.request(`fs.history.list`)).entries:[]}async function hv(e){return c.available?(await c.request(`fs.history.undoTo`,{id:e})).ok:!1}function gv(){let e=p(),[t,n]=(0,z.useState)(!1),[r,i]=(0,z.useState)([]),[a,o]=(0,z.useState)(!1),s=(0,z.useRef)(null),c=()=>void mv().then(i,()=>i([]));(0,z.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)};return window.addEventListener(`pointerdown`,r),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r)}},[t]);let l=async e=>{o(!0);try{await hv(e),c()}finally{o(!1)}};return(0,J.jsxs)(yv,{ref:s,children:[(0,J.jsx)(bv,{$active:t,onClick:()=>n(e=>!e),title:e(`History`),type:`button`,children:(0,J.jsx)(wi,{size:14})}),t&&(0,J.jsxs)(xv,{children:[(0,J.jsxs)(Sv,{children:[(0,J.jsx)(Cv,{children:e(`History`)}),(0,J.jsx)(wv,{onClick:()=>n(!1),title:e(`Close`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]}),r.length===0?(0,J.jsx)(Nv,{children:e(`No operations yet.`)}):(0,J.jsx)(Tv,{children:r.map(t=>(0,J.jsxs)(Ev,{children:[(0,J.jsxs)(Dv,{children:[(0,J.jsxs)(Ov,{children:[(0,J.jsx)(vv,{label:t.label}),_v(e,t.label)]}),(0,J.jsx)(kv,{children:O(t.at)})]}),t.paths.length>0&&(0,J.jsxs)(Av,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,J.jsx)(jv,{children:(0,J.jsx)(Mv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`Undo`)})})]},t.id))})]})]})}function _v(e,t){if(t===`New folder`)return e(`New folder`);if(t===`New file`)return e(`New file`);if(t===`Paste text`)return e(`Paste text`);if(t===`Paste image`)return e(`Paste image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`Move`?`Move {count} items`:t===`Copy`?`Copy {count} items`:`Delete {count} items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`Compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`Rename`)} ${i[1]}`:t}function vv({label:e}){return e.startsWith(`Delete`)?(0,J.jsx)(Ei,{size:13}):e.startsWith(`Move`)||e.startsWith(`Copy`)?(0,J.jsx)(pa,{size:13}):e.startsWith(`Rename`)?(0,J.jsx)(qi,{size:13}):e.startsWith(`Compress`)?(0,J.jsx)(Li,{size:13}):e.startsWith(`New`)?(0,J.jsx)(gi,{size:13}):(0,J.jsx)(vi,{size:13})}var yv=n.div`
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
`;function Pv({currentFolder:e}){let t=p(),[n,r]=(0,z.useState)(!1),[i,a]=(0,z.useState)(null),[o,s]=(0,z.useState)(!1),c=(0,z.useRef)(null);(0,z.useEffect)(()=>{if(!n)return;let e=()=>void Dc().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{c.current?.contains(e.target)||r(!1)};return window.addEventListener(`pointerdown`,i),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i)}},[n]),(0,z.useEffect)(()=>{let e=()=>void Dc().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let l=async e=>{s(!0);try{a(await e())}finally{s(!1)}},u=i?.shares.some(t=>P(t.path,e))??!1;return(0,J.jsxs)(Fv,{ref:c,children:[(0,J.jsxs)(Iv,{$active:n,onClick:()=>r(e=>!e),title:t(`Share folders`),type:`button`,children:[(0,J.jsx)(sa,{size:15}),i&&i.shares.length>0&&(0,J.jsx)(K_,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,J.jsxs)(Lv,{children:[(0,J.jsxs)(Rv,{children:[(0,J.jsx)(zv,{children:t(`Share`)}),(0,J.jsx)(Bv,{onClick:()=>r(!1),title:t(`Close`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]}),(0,J.jsxs)(Vv,{children:[(0,J.jsxs)(Hv,{children:[(0,J.jsx)(ji,{size:15}),(0,J.jsxs)(`span`,{children:[(0,J.jsx)(`strong`,{children:i?.deviceName||t(`This device`)}),(0,J.jsx)(Uv,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,J.jsx)(Wv,{children:t(`No folders are shared yet.`)}),i?.shares.map(e=>(0,J.jsxs)(Gv,{children:[(0,J.jsxs)(Kv,{children:[(0,J.jsx)(qv,{title:e.path,children:e.name}),(0,J.jsx)(Yv,{disabled:o,onClick:()=>void l(()=>kc(e.id)),title:t(`Stop sharing`),type:`button`,children:(0,J.jsx)(Oi,{size:10})})]}),(0,J.jsx)(Jv,{title:e.path,children:e.path}),(0,J.jsxs)(Xv,{children:[(0,J.jsxs)(Zv,{$active:e.mode===`client`,onClick:()=>void l(()=>Ac(e.id,`client`)),title:t(`Only paired devices can open this folder in the app.`),type:`button`,children:[(0,J.jsx)(ji,{size:11}),t(`App`)]}),(0,J.jsxs)(Zv,{$active:e.mode===`web`,onClick:()=>void l(()=>Ac(e.id,`web`)),title:t(`Any device with a browser can open this folder.`),type:`button`,children:[(0,J.jsx)(la,{size:11}),t(`Web`)]})]})]},e.id)),(0,J.jsxs)(Qv,{disabled:o||e.length===0||u,onClick:()=>void l(()=>Oc(e,`client`)),title:u?t(`This folder is already shared.`):e,type:`button`,children:[(0,J.jsx)(gi,{size:12}),t(`Share this folder`)]}),i?.webRunning&&(0,J.jsxs)($v,{children:[(0,J.jsxs)(ey,{children:[(0,J.jsx)(la,{size:12}),t(`Browser access`)]}),i.urls.map(e=>(0,J.jsx)(ty,{onClick:()=>void I(e),type:`button`,children:e},e)),(0,J.jsx)(Uv,{children:t(`Open one of these addresses on any device on the same network.`)})]})]})]})]})}var Fv=n.div`
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
`;function ny({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=p(),[s,c]=(0,z.useState)(!1),l=(0,z.useRef)(null);(0,z.useEffect)(()=>{if(!s)return;let e=e=>{l.current?.contains(e.target)||c(!1)},t=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t)}},[s]),(0,z.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=rl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,J.jsxs)(ry,{ref:l,children:[(0,J.jsx)(iy,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`View`),type:`button`,children:e.mode===`grid`?(0,J.jsx)(Ci,{size:14}):(0,J.jsx)(Si,{size:14})}),s&&(0,J.jsxs)(ay,{children:[(0,J.jsx)(oy,{children:o(`View`)}),(0,J.jsxs)(cy,{children:[(0,J.jsxs)(ly,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,J.jsx)(Si,{size:12}),` `,o(`List`)]}),(0,J.jsxs)(ly,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,J.jsx)(Ci,{size:12}),` `,o(`Grid`)]})]}),(0,J.jsx)(oy,{children:o(`List icon size`)}),(0,J.jsxs)(uy,{children:[(0,J.jsx)(`input`,{"aria-label":o(`List icon size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,J.jsxs)(dy,{children:[e.iconSize,`px`]})]}),(0,J.jsx)(oy,{children:o(`Grid size`)}),(0,J.jsxs)(uy,{children:[(0,J.jsx)(`input`,{"aria-label":o(`Grid size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,J.jsxs)(dy,{children:[e.gridSize,`px`]})]}),(0,J.jsxs)(oy,{children:[o(`Columns`),(0,J.jsx)(Rm,{}),(0,J.jsx)(sy,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`Reset column widths`),type:`button`,children:o(`Reset widths`)})]}),rl.map(e=>(0,J.jsxs)(fy,{children:[(0,J.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,J.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,J.jsxs)(fy,{children:[(0,J.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,J.jsx)(`span`,{children:o(`Link target after the name`)})]}),(0,J.jsxs)(oy,{children:[o(`Preview panel`),(0,J.jsx)(Rm,{})]}),(0,J.jsxs)(fy,{children:[(0,J.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,J.jsx)(`span`,{children:o(`Preview under the list`)})]})]})]})}var ry=n.div`
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
`,py=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),my=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),hy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),gy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,J.jsx)(`path`,{d:`M2 5h6`})}),_y=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,J.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),vy=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,J.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,J.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function yy({tabs:e,activeId:t,onSelect:n,onClose:r,onNewTab:i,onReorder:a,onTransferToTab:o,view:s,onViewChange:c,onColumns:l,showImages:u,onShowImages:d,tasks:f,onClearTasks:m,activityOpen:h,onActivityOpenChange:g,trayCount:_,trayVisible:v,onToggleTray:y,split:b,canSplit:x,onToggleSplit:S,details:C,canDetails:w,onToggleDetails:T,shortcuts:E,currentFolder:O}){let k=p(),A=D(),te=ee(),[j,ne]=(0,z.useState)({left:!1,right:!1}),[re,M]=(0,z.useState)(null),[ie,ae]=(0,z.useState)(null),N=(0,z.useRef)(null),P=(0,z.useRef)(null),F=(0,z.useRef)(null),oe=(0,z.useCallback)(()=>{let e=P.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ne(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,z.useEffect)(()=>{oe();let e=P.current;if(!e)return;let t=new ResizeObserver(oe);return t.observe(e),()=>t.disconnect()},[oe,e.length]),(0,z.useEffect)(()=>()=>{N.current&&window.clearTimeout(N.current.timer)},[]),(0,z.useEffect)(()=>{F.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let I=e=>P.current?.scrollBy({left:e,behavior:`smooth`}),se=()=>{N.current&&window.clearTimeout(N.current.timer),N.current=null,ae(null)};return(0,J.jsxs)(Cy,{children:[(0,J.jsx)(wy,{children:(0,J.jsx)(ji,{size:19})}),(0,J.jsxs)(Ty,{children:[j.left&&(0,J.jsx)(Dy,{onClick:()=>I(-180),title:k(`Scroll tabs left`),type:`button`,children:(0,J.jsx)(py,{})}),(0,J.jsx)(Ey,{onScroll:oe,onWheel:e=>{let t=P.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:P,children:e.map(e=>(0,J.jsxs)(Oy,{$active:e.id===t,$dragging:re===e.id,$dropTarget:ie===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!nc(t.dataTransfer)||!by(e)||(t.preventDefault(),N.current?.id===e.id))return;se(),ae(e.id);let r=window.setTimeout(()=>{n(e.id),N.current=null},500);N.current={id:e.id,timer:r}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(N.current?.id===e.id||ie===e.id)&&se()},onDragEnd:()=>{M(null),se()},onDragOver:t=>{(re||nc(t.dataTransfer)&&by(e))&&(t.preventDefault(),nc(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>M(e.id),onDrop:t=>{if(t.preventDefault(),re)a(re,e.id);else if(by(e)&&nc(t.dataTransfer)){let{paths:r,move:i}=rc(t);r.length>0&&(n(e.id),o(r,e.path,!t.ctrlKey&&i))}M(null),se()},onClick:()=>n(e.id),ref:e.id===t?F:void 0,title:e.path||e.title,type:`button`,children:[(0,J.jsx)(xy,{tab:e}),(0,J.jsx)(ky,{children:e.title}),e.partner&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ay,{children:`|`}),(0,J.jsx)(Sy,{place:e.partner.place}),(0,J.jsx)(ky,{children:e.partner.title})]}),(0,J.jsx)(jy,{"data-shortcut":Gt(E.closeTab),onClick:t=>{t.stopPropagation(),r(e.id)},title:k(`Close tab`),children:(0,J.jsx)(hy,{})})]},e.id))}),j.right&&(0,J.jsx)(Dy,{onClick:()=>I(180),title:k(`Scroll tabs right`),type:`button`,children:(0,J.jsx)(my,{})}),(0,J.jsx)(My,{"data-shortcut":Gt(E.newTab),onClick:i,title:k(`New tab`),type:`button`,children:(0,J.jsx)(gi,{size:13})})]}),(0,J.jsx)(Ny,{...te}),(0,J.jsxs)(Py,{children:[(0,J.jsx)(Iy,{$active:b,"data-shortcut":Gt(E.splitView),disabled:!x,onClick:S,title:k(b?`Close split view`:`Split view`),type:`button`,children:(0,J.jsx)(va,{size:15})}),(0,J.jsx)(Iy,{$active:C,disabled:!w,onClick:T,title:k(C?`Hide details panel`:`Show details panel`),type:`button`,children:(0,J.jsx)(ya,{size:15})}),(0,J.jsxs)(Fy,{$active:v,onClick:y,title:k(v?`Hide file tray`:`Show file tray`),type:`button`,children:[(0,J.jsx)(ca,{size:14}),_>0&&(0,J.jsx)(K_,{children:_>9?`9+`:_})]}),(0,J.jsx)(gv,{}),(0,J.jsx)(Pv,{currentFolder:O}),(0,J.jsx)(q_,{tasks:f,onClear:m,open:h,onOpenChange:g}),(0,J.jsx)(ny,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:c,onColumns:l,onShowImages:d,showImages:u,view:s}),(0,J.jsx)(Ly,{onClick:A.minimize,title:k(`Minimize`),type:`button`,children:(0,J.jsx)(gy,{})}),(0,J.jsx)(Ly,{onClick:A.toggleMaximize,title:A.maximized?k(`Restore`):k(`Maximize`),type:`button`,children:A.maximized?(0,J.jsx)(vy,{}):(0,J.jsx)(_y,{})}),(0,J.jsx)(Ry,{onClick:A.close,title:k(`Close`),type:`button`,children:(0,J.jsx)(hy,{})})]})]})}function by(e){return e.kind===`files`&&(!C(e.path)||T(e.path))}function xy({tab:e}){switch(e.kind){case`home`:return(0,J.jsx)(li,{size:13});case`settings`:return(0,J.jsx)(bi,{size:13});case`recycle`:return(0,J.jsx)(Ei,{size:13});default:return e.archive?(0,J.jsx)(Li,{size:13}):(0,J.jsx)(Sy,{place:e.place})}}function Sy({place:e}){return e?(0,J.jsx)(Fs,{place:e,size:13}):(0,J.jsx)(ui,{size:13})}var Cy=n.header`
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
`;function zy(){let[e,t]=(0,z.useState)(null),n=(0,z.useRef)(null),r=(0,z.useRef)(void 0);return(0,z.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Va.createPortal)((0,J.jsx)(By,{tooltip:e}),document.body):null}function By({tooltip:e}){let t=(0,z.useRef)(null),[n,r]=(0,z.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,z.useState)(()=>e.bottom+6);return(0,z.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,J.jsxs)(Vy,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,J.jsx)(Hy,{children:e.text}),e.shortcut&&(0,J.jsx)(Uy,{children:e.shortcut})]})}var Vy=n.div`
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
`,Wy={home:`Overview`,settings:`Settings`,recycle:`Recycle Bin`,gallery:`Gallery`};function Gy({deviceName:e,code:t,onAccept:n,onReject:r}){let i=p(),a=(0,z.useRef)(null);return(0,z.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Va.createPortal)((0,J.jsx)(Ky,{children:(0,J.jsxs)(qy,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsxs)(Jy,{children:[(0,J.jsx)(sa,{size:15}),i(`Pair for sharing`)]}),(0,J.jsx)(Yy,{children:i(`{device} wants to pair with this device for sharing folders.`,{device:e})}),(0,J.jsx)(Xy,{children:t}),(0,J.jsx)(Zy,{children:i(`Check that the other device shows the same code before accepting.`)}),(0,J.jsxs)(Qy,{children:[(0,J.jsx)($y,{onClick:r,type:`button`,children:i(`Reject`)}),(0,J.jsx)(eb,{onClick:n,ref:a,type:`button`,children:i(`Accept`)})]})]})}),document.body)}var Ky=n.div`
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
`,tb=0,nb=new Set;function rb(e){nb.add(e),c.send({type:`app.navigate.done`,payload:{path:e}})}var ib=20,ab=[{value:`0`,label:`Auto`},{value:`932`,label:`Japanese (CP932)`},{value:`936`,label:`Simplified Chinese (CP936)`},{value:`950`,label:`Traditional Chinese (CP950)`},{value:`949`,label:`Korean (CP949)`},{value:`1252`,label:`Western (CP1252)`},{value:`1250`,label:`Central European (CP1250)`},{value:`1251`,label:`Cyrillic (CP1251)`},{value:`1254`,label:`Turkish (CP1254)`},{value:`1253`,label:`Greek (CP1253)`},{value:`1256`,label:`Arabic (CP1256)`},{value:`1255`,label:`Hebrew (CP1255)`},{value:`1257`,label:`Baltic (CP1257)`},{value:`874`,label:`Thai (CP874)`},{value:`65001`,label:`UTF-8`}];function ob(e){return e.history[e.index]??Mp(`home`)}function sb(e){return Np(ob(e))??`files`}function cb(e){let t=ob(e);return Np(t)?``:e.listing?.path||t}function lb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||sb(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function ub(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function db(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||V.iconSize,gridSize:e.view?.gridSize||t.gridSize||V.gridSize,sort:e.view?.sort??V.sort,sortDescending:e.view?.sortDescending??V.sortDescending,columns:t.columns??ve.columns??[]}}function fb(e=Mp(`home`)){return tb+=1,{id:`tab-${tb}`,listing:null,loading:!Np(e),error:null,history:[e],index:0,fresh:!0,view:null}}function pb(e){return e instanceof Error?e.message:String(e)}function mb(e){let t=Rc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return zc(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function hb(e){let t=y(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function gb(e){return C(e)?Xt(e):void 0}function _b(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return ie(e,t.entries.length,`1 item · {size}`,`{count} items · {size}`,{size:x(n)})}function vb(){let e=p(),[n,a]=(0,z.useState)(()=>[fb()]),[o,s]=(0,z.useState)(()=>n[0].id),[l,u]=(0,z.useState)(null),[d,m]=(0,z.useState)(()=>{let e=Gn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[g,_]=(0,z.useState)([]),[v,b]=(0,z.useState)([]),[x,S]=(0,z.useState)(null),[ee,D]=(0,z.useState)(null),[O,k]=(0,z.useState)(null),A=t(),[te,re]=(0,z.useState)(_n),[M,ie]=(0,z.useState)(0),[ae,N]=(0,z.useState)(0),[F,I]=(0,z.useState)(0),[se,ce]=(0,z.useState)(_n),[ue,de]=(0,z.useState)(0),[fe,pe]=(0,z.useState)(0),[L,me]=(0,z.useState)(0),[R,he]=(0,z.useState)(0),B=(0,z.useRef)(R);B.current=R;let[_e,ye]=(0,z.useState)([]),[Te,je]=(0,z.useState)(10),[H,Me]=(0,z.useState)(null),Ne=i(h(H?.themeMode)),Pe=(0,z.useMemo)(()=>(H?.favorites??[]).map(e=>w(e.path)),[H?.favorites]),[Fe,Ie]=(0,z.useState)(0),[U,Le]=(0,z.useState)(Bt),[ze,Ve]=(0,z.useState)(0),[He,Ue]=(0,z.useState)(0),[Ge,Ke]=(0,z.useState)(0),[Je,Ye]=(0,z.useState)(!0),[Xe,Ze]=(0,z.useState)(()=>{let e=Gn(`yafm.preview.width`,320);return e>=220?e:320}),[Qe,$e]=(0,z.useState)(null),[et,tt]=(0,z.useState)(null),[it,at]=(0,z.useState)(`primary`),[ot,st]=(0,z.useState)(null),[ct,lt]=(0,z.useState)(null),[ut,W]=(0,z.useState)(null),[dt,ft]=(0,z.useState)(null),[mt,_t]=(0,z.useState)({primary:0,secondary:0}),[xt,Ct]=(0,z.useState)({primary:null,secondary:null}),[wt,Tt]=(0,z.useState)(null),[Dt,Ot]=(0,z.useState)([]),[kt,At]=(0,z.useState)(!1),jt=(0,z.useRef)([]),Pt=(0,z.useRef)([]),[Ft,It]=(0,z.useState)([]),[Vt,Kt]=(0,z.useState)(!1),Jt=(0,z.useMemo)(()=>Vt?new Set(Ft.map(e=>e.path)):new Set,[Ft,Vt]),[Yt,$t]=(0,z.useState)(!1),[en,tn]=(0,z.useState)([]),[nn,on]=(0,z.useState)(null),sn=(0,z.useRef)(0),[cn,ln]=(0,z.useState)(()=>{let e=qn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?ub({x:e.x,y:e.y}):ub({x:Math.max(20,window.innerWidth-340),y:110})}),un=(0,z.useCallback)(()=>{ln(e=>ub(e)),$t(!0)},[]),K=n.find(e=>e.id===o)??n[0],q=sb(K),dn=ob(K),fn=cb(K),pn=q===`files`?K.listing?.parent??mb(fn):null,mn=K.splitWith?n.find(e=>e.id===K.splitWith):void 0,hn=q===`files`&&mn!==void 0,gn=mn?cb(mn):``,vn=mn?mn.listing?.parent??mb(gn):null,yn=hn&&mn&&it===`secondary`?mn:K,bn=H?.defaultView??ve,xn=db(yn,bn);(0,z.useEffect)(()=>{r(H?.accentColor,H?.secondaryColor,Ne)},[H?.accentColor,H?.secondaryColor,Ne]),(0,z.useEffect)(()=>{Hm(H?.fonts)},[H?.fonts]),(0,z.useEffect)(()=>{ne(H?.timeFormat,H?.timeFormatPattern)},[H?.timeFormat,H?.timeFormatPattern]),(0,z.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!H?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[H?.backgroundSource]),(0,z.useEffect)(()=>(ge(e=>new Promise(t=>{on({id:++sn.current,prompt:e,resolve:t})})),()=>ge(null)),[]),(0,z.useEffect)(()=>{at(`primary`)},[o]),(0,z.useEffect)(()=>{ce(_n),pe(0),me(0)},[q]),(0,z.useEffect)(()=>{pe(0)},[se.query,se.matchCase,se.regex]),(0,z.useEffect)(()=>{pe(e=>L===0?0:Math.min(e,L-1))},[L]);let Sn=xn.columns.includes(`linkCount`),Cn=(0,z.useMemo)(()=>{let e={},t=Ms(H),n={};for(let[e,t]of Object.entries(H?.placeNames??{}))n[w(e)]=t;for(let t of g)e[w(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=w(t),i=g.find(e=>w(e.path)===r);e[r]={name:n[r]??i?.name??(y(t)||t),path:t,kind:`folder`,icon:i?.icon??H?.placeIcons?.[t]??null}}return e},[g,H]),wn=(0,z.useMemo)(()=>({places:Cn,useIcons:H?.systemIcons===!1}),[Cn,H?.systemIcons]),Tn=H?.defaultView?.showImages??!0,Dn=H?.defaultView?.imageStripHeight??ve.imageStripHeight,On=q===`home`?(0,J.jsx)(Ki,{size:13}):q===`settings`?(0,J.jsx)(bi,{size:13}):q===`recycle`?(0,J.jsx)(Ei,{size:13}):q===`gallery`?(0,J.jsx)(Pi,{size:13}):void 0,kn=te.open&&te.query.length>0,An=(0,z.useMemo)(()=>kn&&yn.listing?yn.listing.entries.filter(e=>En(e.isDirectory?In(wn,e.fullPath,e.name):e.name,te)).map(e=>e.fullPath):[],[kn,te,yn.listing,wn]);(0,z.useEffect)(()=>{ie(0)},[te.query,te.matchCase,te.regex,yn.listing?.path]);let jn=An.length===0?-1:Math.min(M,An.length-1),Mn=(0,z.useCallback)(()=>{re(e=>({...e,open:!1,query:``})),ie(0)},[]),Pn=(0,z.useCallback)(()=>{re(e=>({...e,open:!0})),N(e=>e+1)},[]),Ln=(0,z.useCallback)(()=>{ce(e=>({...e,open:!0})),de(e=>e+1)},[]),Rn=(0,z.useCallback)(()=>{ce(_n),pe(0),me(0)},[]),zn=(0,z.useCallback)(e=>{pe(t=>L===0?0:(Math.min(t,L-1)+e+L)%L)},[L]),Bn=(0,z.useCallback)(e=>{re(t=>({...t,open:!0,query:t.open?t.query+e:e})),N(e=>e+1)},[]),Vn=(0,z.useCallback)(e=>{ie(t=>An.length===0?0:(Math.min(t,An.length-1)+e+An.length)%An.length)},[An.length]),Hn=(0,z.useRef)({tabs:n,activeId:o,activePane:it});Hn.current={tabs:n,activeId:o,activePane:it};let Un=(0,z.useRef)(H);Un.current=H;let Wn=(0,z.useRef)(!1),Yn=(0,z.useRef)([]),Xn=(0,z.useCallback)((e,t)=>{a(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Zn=(0,z.useRef)(new Map),Qn=(0,z.useCallback)(e=>{let t=(Zn.current.get(e)??0)+1;return Zn.current.set(e,t),()=>Zn.current.get(e)===t},[]),$n=(0,z.useCallback)((e,t)=>{c.available&&t&&e===lb(Hn.current)&&c.send({type:`fs.focus`,payload:{path:t}})},[]),er=(0,z.useCallback)(async(e,t,n)=>{if(!(t&&Lc(t)))try{let r=await Oe(t,Sn);if(!n()||!r.listing)return;Xn(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[Sn,Xn]),tr=(0,z.useCallback)(async(e,t,n=!1)=>{let r=Qn(e);Mn(),$n(e,t);let i=!n||!Hn.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;Xn(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&P(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&er(e,t,r);let o=t&&Lc(t)?await Bc(t):await xe(t,!0,Sn,B.current,t?gb(t):void 0);if(!r())return;Xn(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!Lc(o.path)&&Be(o.path).then(()=>Ie(e=>e+1))}catch(i){if(!r())return;let a=Hn.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?cb(a):``,s=mb(o),c=pb(i);if(o&&G(c)){let i=E(o),a=await ja(i,!!Xt(i));if(a){Zt(i,a),r()&&tr(e,t,n);return}}Xn(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Qn,Sn,Xn,$n,Mn,er]),nr=(0,z.useCallback)((e,t)=>{let n=Pp(t);n&&(Np(n)?(Mn(),Qn(e),Xn(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):tr(e,n))},[Qn,tr,Xn,Mn]),rr=(0,z.useCallback)(async(e,t,n)=>{if(Mn(),Np(t)){Qn(e),Xn(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Qn(e);$n(e,t),Xn(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Lc(t)||er(e,t,r);let n=Lc(t)?await Bc(t):await xe(t,!0,Sn,B.current,gb(t));if(!r())return;Xn(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(G(pb(i))){let i=E(t),a=await ja(i,!!Xt(i));if(a){Zt(i,a),r()&&rr(e,t,n);return}}Xn(e,()=>({listing:{path:t,parent:mb(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:pb(i)}))}},[Qn,Sn,Xn,$n,Mn,er]),ir=(0,z.useCallback)((e,t=!0)=>{let n=fb(e??Mp(`home`));return a(e=>[...e,n]),t&&s(n.id),e&&!Np(e)&&tr(n.id,e),n.id},[tr]),ar=(0,z.useCallback)(e=>{for(let t of Hn.current.tabs)sb(t)===`files`&&P(cb(t),e)&&tr(t.id,e,!0)},[tr]),or=(0,z.useCallback)((e,t)=>{let n=y(t);for(let r of Hn.current.tabs)r.listing?.entries.some(t=>P(t.fullPath,e))&&Xn(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>P(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[Xn]),sr=(0,z.useRef)([]);(0,z.useEffect)(()=>{let e=new Set;for(let t of n){let n=t.listing?.path??t.history[t.index]??``;n&&C(n)&&e.add(w(E(n)))}let t=sr.current.filter(t=>!e.has(t));sr.current=[...e],t.length>0&&we(t)},[n]);let cr=(0,z.useCallback)((e,t=!1)=>{t?ir(Mp(e)):nr(Hn.current.activeId,Mp(e))},[ir,nr]),lr=(0,z.useCallback)(e=>{let{tabs:t,activeId:n}=Hn.current,r=t.find(t=>t.id===e),i=t.filter(t=>t.id!==e&&t.id!==r?.splitWith);if(r&&!r.hidden&&(Pt.current.push(ob(r)),Pt.current.length>ib&&Pt.current.shift()),i.length===0){let e=fb();a([e]),s(e.id);return}let o=t.findIndex(t=>t.id===e);a(i),n===e&&s(i[Math.min(o,i.length-1)].id)},[]),ur=(0,z.useCallback)(()=>{let e=Pt.current.pop();if(!e)return;let t={...fb(e),fresh:!1};a(e=>[...e,t]),s(t.id),sb(t)===`files`&&tr(t.id,cb(t))},[tr]),dr=(0,z.useCallback)((e,t=!1)=>{t?ir(e):nr(lb(Hn.current),e??Mp(`home`))},[nr,ir]),fr=(0,z.useCallback)(e=>{let{tabs:t,activeId:n}=Hn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;s(r[i].id)},[]),pr=(0,z.useCallback)(()=>{let{tabs:e,activeId:t}=Hn.current,n=e.find(e=>e.id===t);if(!n||sb(n)!==`files`)return;let r=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(r){a(e=>e.filter(e=>e.id!==r.id)),Xn(t,()=>({splitWith:void 0})),at(`primary`);return}let i=cb(n),o={...fb(i),hidden:!0};a(e=>[...e,o]),Xn(t,()=>({splitWith:o.id})),tr(o.id,i),at(`primary`)},[tr,Xn]),mr=(0,z.useCallback)(e=>{Ze(e),Kn(`yafm.preview.width`,e)},[]),hr=hn?it===`secondary`?et??Qe:Qe??et:Qe,gr=(0,z.useRef)(null),_r=e=>{e.preventDefault();let t=gr.current?.getBoundingClientRect();if(!t)return;let n=Je?Xe:0,r=Math.max(t.width-n-7,1),i=e=>{let n=Math.min(Math.max((e.clientX-t.left)/r,.2),.8);m(n),Kn(`yafm.split.ratio`,n)},a=()=>{window.removeEventListener(`pointermove`,i),window.removeEventListener(`pointerup`,a)};window.addEventListener(`pointermove`,i),window.addEventListener(`pointerup`,a)},vr=(e,t,n)=>{t&&st({x:e.clientX,y:e.clientY,directory:t,refresh:n})},yr=(0,z.useCallback)((e,t)=>{_t(n=>n[e]===t?n:{...n,[e]:t})},[]),br=(0,z.useCallback)(e=>yr(`primary`,e),[yr]),xr=(0,z.useCallback)(e=>yr(`secondary`,e),[yr]),Sr=(e,t)=>{mt[e]!==0&&Ct(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Cr=async(e,t=!1)=>{let n=ot;if(st(null),!n)return;let r=e===null?await St(n.directory,t):await Et(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Mn(),Tt(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},wr=(0,z.useCallback)(()=>{let{tabs:e}=Hn.current,t=e.find(e=>e.id===lb(Hn.current));t&&t.index>0&&rr(t.id,t.history[t.index-1],t.index-1)},[rr]),Tr=(0,z.useCallback)(()=>{let{tabs:e}=Hn.current,t=e.find(e=>e.id===lb(Hn.current));t&&t.index<t.history.length-1&&rr(t.id,t.history[t.index+1],t.index+1)},[rr]),Er=(0,z.useCallback)(()=>{let{tabs:e}=Hn.current,t=e.find(e=>e.id===lb(Hn.current));t&&sb(t)===`files`&&t.listing?.parent&&dr(t.listing.parent)},[dr]),Dr=(0,z.useRef)(null),Or=(0,z.useCallback)(()=>{for(let e of Hn.current.tabs)e.listing&&tr(e.id,e.listing.path,!0)},[tr]),kr=(0,z.useCallback)(e=>{e.length!==0&&(tn(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),un())},[un]),Ar=(0,z.useCallback)(async e=>{let t=await vt(e);t.length!==0&&kr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[kr]),jr=(0,z.useCallback)(e=>{let t=new Set(e);tn(e=>e.filter(e=>!t.has(e.path)))},[]),Mr=(0,z.useCallback)(async e=>{let t=Un.current;if(!t)return;let n=await vt(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>w(e.path))),i=n.filter(e=>!r.has(w(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};Me(a),await nt(a),Ve(e=>e+1)},[]),Nr=(0,z.useCallback)(async e=>{let t=Un.current;if(!t)return;let n=new Set(e.map(w)),r=(t.favorites??[]).filter(e=>!n.has(w(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};Me(i),await nt(i),Ve(e=>e+1)},[]),Pr=(0,z.useCallback)(()=>tn([]),[]),Fr=(0,z.useRef)(-1),Ir=(0,z.useCallback)(e=>{It(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Kt(e.move),e.entries.length>0&&un()},[un]),Lr=(0,z.useCallback)(async()=>{if(c.available)try{let e=await ht();Fr.current=e.sequence,Ir(e)}catch{}},[Ir]),Rr=(0,z.useCallback)(async e=>{e.length!==0&&await pt(e,!1)&&await Lr()},[Lr]),zr=(0,z.useRef)(en);zr.current=en;let Br=(0,z.useRef)(Yt);Br.current=Yt;let Vr=(0,z.useRef)(!1);(0,z.useEffect)(()=>{let e=H?.trayAutoShow??!0,t=t=>{e&&nc(t)&&(Br.current||(Vr.current=!0),un())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Vr.current&&window.setTimeout(()=>{Vr.current&&zr.current.length===0&&$t(!1),Vr.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[un,H?.trayAutoShow]),(0,z.useEffect)(()=>{let e=()=>ln(e=>ub(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Hr=(0,z.useCallback)(async()=>{let e=zr.current;if(e.length>0){let t=await vt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));tn(e=>e.filter(e=>n.has(e.path)))}await Lr()},[Lr]),Ur=(0,z.useCallback)(()=>{Hr(),Ke(e=>e+1),Or()},[Hr,Or]),Wr=(0,z.useCallback)(e=>{let t=ub(e);ln(t),Jn(`yafm.tray.position`,t)},[]),Gr=(0,z.useCallback)(()=>{Vr.current=!1,Yt?$t(!1):un()},[un,Yt]),Kr=(0,z.useCallback)(async(t,n,r)=>{let i=await gt(t,n,r);i.cancelled||(i.ok?(r&&jr(t),Ke(e=>e+1),Or(),Lr()):ka(i.error??e(`The files could not be transferred.`)))},[Or,Lr,jr]);(0,z.useEffect)(()=>{if(c.available)return Rt().then(e=>{jt.current=e,Ot(e)},()=>void 0),c.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=jt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});jt.current=n,Ot(n),r&&At(!0)})},[]);let qr=(0,z.useCallback)(()=>{zt().then(()=>Rt().then(e=>{jt.current=e,Ot(e)},()=>void 0))},[]);(0,z.useEffect)(()=>{if(!c.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await ht();if(!e||t.sequence===Fr.current)return;Fr.current=t.sequence,Ir(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Ir]);let Jr=(0,z.useCallback)(async e=>{let t=e?await Mt():await Nt();t.ok?(Ke(e=>e+1),Or()):t.error&&!t.error.startsWith(`Nothing to`)&&ka(t.error)},[Or]),Yr=(0,z.useRef)(Sn);(0,z.useEffect)(()=>{Yr.current!==Sn&&(Yr.current=Sn,Or())},[Sn,Or]);let Xr=(0,z.useCallback)((e,t)=>{let{tabs:n}=Hn.current,r=n.find(t=>t.id===e);if(!r||sb(r)!==`files`)return;let i=cb(r),a=Un.current?.defaultView??ve,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||V.iconSize,gridSize:r.view?.gridSize||a.gridSize||V.gridSize,sort:r.view?.sort??V.sort,sortDescending:r.view?.sortDescending??V.sortDescending,...t};Xn(e,()=>({view:o})),Dr.current!==null&&window.clearTimeout(Dr.current),Dr.current=window.setTimeout(()=>{Dr.current=null,Ee(i,o)},250)},[Xn]),Zr=(0,z.useCallback)(e=>{Xr(lb(Hn.current),e)},[Xr]),Qr=(0,z.useCallback)(e=>{let t=Un.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ve,columns:e}};Me(n),nt(n)},[]),$r=(0,z.useCallback)(e=>{let t=Un.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ve,showImages:e}};Me(n),nt(n)},[]),ei=(0,z.useCallback)(e=>{let t=Un.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??ve,imageStripHeight:e}};Me(n),nt(n)},[]),ti=(0,z.useCallback)((e,t,n,r)=>{let i=Hn.current.tabs.find(t=>t.id===e);if(!i||sb(i)!==`files`||!i.listing)return;let a=cb(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Xn(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),De(a,t,n,r)},[Xn]),ni=(0,z.useCallback)((e,t)=>{let n=Hn.current.tabs.find(t=>t.id===e);if(!n)return;let r=db(n,Un.current?.defaultView??ve);Xr(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[Xr]),ri=(0,z.useCallback)((e,t)=>{a(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ii=(0,z.useCallback)(()=>{ke().then(_,()=>_([]))},[]),ai=(0,z.useCallback)(e=>{let t=(e.openTabs??[]).map(Pp).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...fb(e),fresh:!1})),r=Math.min(Math.max(e.activeTab??0,0),n.length-1);a(n),s(n[r].id);for(let e of n)sb(e)===`files`&&tr(e.id,cb(e),!0);return!0},[tr]),oi=(0,z.useCallback)(e=>{let t=Yn.current;if(Yn.current=[],t.length===0)return;let n=t.filter(e=>!nb.has(e));for(let e of t)n.includes(e)||rb(e);if(n.length===0)return;let{tabs:r}=Hn.current;if(!e&&r.length===1&&r[0].fresh){nr(r[0].id,n[0]),rb(n[0]);for(let e of n.slice(1))ir(e),rb(e);return}let i=n.map(e=>{let t=ir(e);return rb(e),t}).at(-1);i&&setTimeout(()=>s(i),0)},[ir,nr]),si=(0,z.useCallback)(()=>{qe().then(e=>{Me(e),je(e.recentLimit);let t={...Bt,...e.shortcuts};Le(t),Ht(t.openInNewTab),Ve(e=>e+1),Wn.current||(Wn.current=!0,oi(e.restoreTabs&&ai(e)))},()=>{je(10),Wn.current=!0,oi(!1)})},[oi,ai]),ci=(0,z.useCallback)(()=>{Re().then(ye,()=>ye([]))},[]),Y=(0,z.useCallback)(()=>{Ae().then(b,()=>b([]))},[]),li=n.filter(e=>!e.hidden),ui=li.map(ob),di=ui.join(`
`),fi=Math.max(li.findIndex(e=>e.id===o),0);(0,z.useEffect)(()=>{if(!H?.restoreTabs)return;let e=setTimeout(()=>void rt(ui,fi),700);return()=>clearTimeout(e)},[di,fi,H?.restoreTabs]),(0,z.useEffect)(()=>{let{tabs:e,activeId:t}=Hn.current,n=e.find(e=>e.id===t);n&&n.fresh&&sb(n)===`files`&&tr(n.id,cb(n),!0),ii(),si(),Y(),oe().then(S,()=>S(null))},[tr,ii,si,Y]),(0,z.useEffect)(()=>{if(le().then(D,()=>D(null)),c.available)return c.on(e=>{let t=e;t.type===`update.checked`&&t.data&&D(t.data)})},[]),(0,z.useEffect)(()=>{if(c.available)return c.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&u({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&ka(e(`Pairing code: {code}`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&ka(n.data.error??e(`Pairing failed.`))}})},[e]),(0,z.useEffect)(()=>{let e=setInterval(Y,3e4);return()=>clearInterval(e)},[Y]),(0,z.useEffect)(()=>{q===`home`&&(ci(),Y())},[q,K.id,ci,Y]),(0,z.useEffect)(()=>{if(!c.available)return;let e=c.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Hn.current,i=t.data.startup===!0;i&&nb.has(n)?rb(n):i&&!Wn.current?Yn.current.includes(n)||Yn.current.push(n):(i&&r.length===1&&r[0].fresh?nr(r[0].id,n):Np(n)?nr(lb(Hn.current),n):ir(n),i&&rb(n))});return c.send({type:`app.ready`}),e},[nr,ir]),(0,z.useEffect)(()=>{if(c.available)return c.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:r}=t.data;a(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...r}}},i})})},[]),(0,z.useEffect)(()=>{if(c.available)return c.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:r}=t.data;a(e=>{let t=e.findIndex(e=>e.listing?.path===n);if(t<0)return e;let i=e.slice(),a=e[t];return i[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...r}}},i})})},[]),(0,z.useEffect)(()=>{let e=e=>{if(qt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),wr();return}if(e.key===`BrowserForward`){e.preventDefault(),Tr();return}if(e.key===`Escape`&&te.open){e.preventDefault(),Mn();return}let t=Wt(e);if(t===U.closeTab)e.preventDefault(),lr(lb(Hn.current));else if(t===U.newTab)e.preventDefault(),ir();else if(t===U.reopenTab)e.preventDefault(),ur();else if(t===U.goBack)e.preventDefault(),wr();else if(t===U.goForward)e.preventDefault(),Tr();else if(t===U.goUp)e.preventDefault(),Er();else if(t===U.find)e.preventDefault(),q===`files`?Pn():Ln();else if(t===U.location)e.preventDefault(),Ue(e=>e+1);else if(t===U.home){e.preventDefault();let t=g.find(e=>e.kind===`home`)?.path;t&&dr(t)}else t===U.iconsView?(e.preventDefault(),q===`files`&&Zr({mode:`grid`})):t===U.detailsView?(e.preventDefault(),q===`files`&&Zr({mode:`list`})):t===U.nextTab?(e.preventDefault(),fr(1)):t===U.previousTab?(e.preventDefault(),fr(-1)):t===U.hidden||t===`alt+.`?(e.preventDefault(),We().then(()=>{Ke(e=>e+1),Or()})):t===U.undo?(e.preventDefault(),Jr(!0)):t===U.redo?(e.preventDefault(),Jr(!1)):t===U.splitView?(e.preventDefault(),pr()):q!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Bn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[U,q,te.open,lr,ur,ir,wr,Tr,Er,Pn,Ln,Mn,Bn,Zr,fr,dr,g,Or,Jr,pr]),(0,z.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),wr()):e.button===4&&(e.preventDefault(),Tr())},t=e=>{(e.button===3||e.button===4)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[wr,Tr]);let hi=(0,z.useMemo)(()=>{let e=new Set;for(let t of n){if(sb(t)!==`files`)continue;let n=cb(t);if(n&&!Lc(n)){if(C(n)){let t=mb(E(n));t&&e.add(t)}else e.add(n)}}return[...e]},[n]),yi=hi.join(`\0`);(0,z.useEffect)(()=>{c.available&&c.send({type:`fs.watch`,payload:{paths:hi,owner:`app`}})},[yi,o]);let xi=sb(yn)===`files`?cb(yn):``;(0,z.useEffect)(()=>{c.available&&c.send({type:`fs.focus`,payload:{path:xi||null}})},[xi]),(0,z.useEffect)(()=>{if(c.available)return c.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=Hn.current.tabs.filter(e=>sb(e)===`files`&&P(cb(e),n)),i=Hn.current.tabs.filter(e=>{let t=cb(e);return sb(e)===`files`&&t.length>0&&C(t)&&P(E(t),n)});if(r.length!==0||i.length!==0){an(n);for(let e of i){let t=Hn.current.tabs.find(t=>t.id===e.id),r=t?cb(t):``;t&&sb(t)===`files`&&!t.loading&&C(r)&&P(E(r),n)&&tr(e.id,r,!0)}r.length!==0&&xe(n,!1,Sn).then(e=>{for(let t of r){let n=Hn.current.tabs.find(e=>e.id===t.id);n&&sb(n)===`files`&&P(cb(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=Hn.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&sb(n)===`files`&&P(cb(n),e.path)&&Xn(t.id,()=>({listing:e}))},300):Xn(t.id,()=>({listing:e})))}},()=>void 0)}})},[Sn,tr,Xn]);let Si=K.index>0,Ci=K.index<K.history.length-1,wi=(e,t)=>{let n=db(e,bn),r=e.listing?.path??e.history[e.index]??``,i=C(r),a=i&&T(r);return(0,J.jsx)(fl,{confirmDelete:H?.confirmDelete??!1,cutPaths:Jt,previewVideoAudio:H?.previewVideoAudio??!1,previewVideoAutoplay:H?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?$e:tt,onActivate:()=>at(t?`primary`:`secondary`),enableShortcuts:(!hn||(t?it===`primary`:it===`secondary`))&&(!i||a),error:e.error,find:e.id===yn.id?{...te,currentPath:jn<0?null:An[jn]}:void 0,selectMatchesToken:e.id===yn.id?F:0,imageStripHeight:Dn,listing:e.listing,loading:e.loading,onImageStripHeight:ei,readOnly:i&&!a||Lc(e.listing?.path??``),onOpen:(t,n)=>{n?ir(t):tr(e.id,t)},onOpenFile:(t,n)=>{Lc(t)?Hc(t).catch(e=>void ka(pb(e))):j(t)?H?.archiveHandler??!1?n?ir(t):tr(e.id,t):be(t):C(t)?(async()=>{let e=await Ce(t,B.current,gb(t));if(!e.path&&G(e.error)){let n=E(t),r=Xt(n);r&&Qt(n);let i=await ja(n,!!r);i&&(Zt(n,i),e=await Ce(t,B.current,i))}e.path?be(e.path):e.error&&ka(e.error)})():be(t)},onRefresh:()=>{let t=e.listing?.path;t&&ar(t)},onRename:or,onSelectionCountChange:t?br:xr,onSetTags:(t,n,r)=>ti(e.id,t,n,r),selectionMenuRequest:t?xt.primary:xt.secondary,onSort:t=>ni(e.id,t),onPaste:Ur,onClipboardChanged:()=>void Lr(),onTransfer:Kr,onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Pe,onExtractArchive:(e,t)=>void ji(e,t),openOnSingleClick:H?.openOnSingleClick??!1,pendingRename:wt&&t===(it===`primary`)&&P(wt.directory,e.listing?.path??``)?wt.path:null,pendingRenameToken:wt?.token??0,refreshToken:Ge,shortcuts:U,showCheckboxes:H?.showCheckboxes??!0,showImages:Tn,view:n})},Ti=te.open&&(0,J.jsx)(Hd,{current:jn,focusToken:ae,matchCase:te.matchCase,mode:te.mode,onClose:Mn,onMatchCase:()=>re(e=>({...e,matchCase:!e.matchCase})),onMode:()=>re(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Vn(1),onPrevious:()=>Vn(-1),onQuery:e=>re(t=>({...t,query:e})),onRegex:()=>re(e=>({...e,regex:!e.regex})),query:te.query,regex:te.regex,total:An.length,onSelectMatches:An.length>0?()=>I(e=>e+1):void 0}),Di=q===`files`&&C(fn),Oi=Di&&T(fn),ki=Di&&K.listing?.archiveEncrypted===!0,Ai=async(t,n)=>{let r=E(t),i=await Se(r,n,B.current,gb(r));if(!i.ok&&G(i.error)){let e=Xt(r);e&&Qt(r);let t=await ja(r,!!e);t&&(Zt(r,t),i=await Se(r,n,B.current,t))}i.ok?(ar(n),rn(),tr(K.id,n,!0)):ka(`${e(`Could not extract the archive.`)}${i.error?`\n${i.error}`:``}`)},ji=async(e,t)=>{let n=E(e),r=mb(n);if(!r)return;if(t===`choose`){let e=await wa(r);e&&await Ai(n,e);return}let i=t===`named`;if(t===`auto`){let e=P(n,fn)?K.listing?.entries??[]:(await xe(n,!1,!1,B.current,gb(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${hb(n)}`:r;await Ai(n,o)},Mi=async e=>{Di&&await ji(fn,e)},Ni=async()=>{Di&&await ji(fn,`choose`)},Fi=(0,J.jsxs)(Cb,{children:[(0,J.jsx)(wb,{"data-shortcut":Gt(U.goBack),disabled:!Si,onClick:e=>{K.index>0&&Ut(e)?ir(K.history[K.index-1]):wr()},title:e(`Back`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(wb,{"data-shortcut":Gt(U.goForward),disabled:!Ci,onClick:e=>{K.index<K.history.length-1&&Ut(e)?ir(K.history[K.index+1]):Tr()},title:e(`Forward`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(wb,{"data-shortcut":Gt(U.goUp),disabled:q!==`files`||!pn,onClick:e=>{pn&&(Ut(e)?ir(pn):dr(pn))},title:e(`Up one level`),type:`button`,children:(0,J.jsx)(mi,{})}),(0,J.jsx)(Fp,{focusToken:He,icon:On,label:q===`files`?void 0:e(Wy[q]),onContextMenu:q===`files`?(e,t,n)=>W({x:t,y:n,path:e}):void 0,onNavigate:dr,path:q===`files`?fn:dn}),q===`files`&&(!Di||Oi)&&(0,J.jsx)(wb,{onClick:e=>vr(e,fn,()=>void tr(K.id,fn,!0)),title:e(`New folder or file`),type:`button`,children:(0,J.jsx)(gi,{})}),(0,J.jsx)(wb,{"data-shortcut":Gt(U.find),onClick:()=>q===`files`?Pn():Ln(),title:e(`Search`),type:`button`,children:(0,J.jsx)(pi,{})}),mt.primary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Db,{}),(0,J.jsx)(wb,{onClick:e=>Sr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,J.jsx)(ba,{})})]}),Di&&(0,J.jsxs)(Tb,{children:[(0,J.jsx)(Db,{}),ki&&(0,J.jsxs)(Eb,{title:e(`This archive is encrypted and asks for a password when opened.`),children:[(0,J.jsx)(xa,{size:12}),e(`Encrypted`)]}),(0,J.jsx)(wb,{onClick:()=>void Ni(),onContextMenu:e=>{e.preventDefault(),lt({x:e.clientX,y:e.clientY})},title:e(`Extract archive`),type:`button`,children:(0,J.jsx)(Li,{})}),(0,J.jsx)(bo,{icon:(0,J.jsx)(la,{size:15}),onChange:e=>{let t=Number(e);he(t),B.current=t,Di&&tr(K.id,fn,!0)},options:ab.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`Archive encoding`)}: ${e(ab.find(e=>e.value===String(R))?.label??`Auto`)}`,value:String(R)})]})]}),Ii=se.open?{...se,index:fe}:null;return(0,J.jsx)(Nn,{value:wn,children:(0,J.jsxs)(yb,{$rounded:A,children:[(0,J.jsx)(nd,{settings:H}),(0,J.jsx)(yy,{activeId:K.id,onClose:lr,onNewTab:()=>ir(),onReorder:ri,onTransferToTab:Kr,onSelect:s,onViewChange:Zr,onColumns:Qr,onShowImages:$r,showImages:Tn,tasks:Dt,onClearTasks:qr,activityOpen:kt,onActivityOpenChange:At,trayCount:en.length+Ft.length,trayVisible:Yt,onToggleTray:Gr,split:hn,canSplit:q===`files`,onToggleSplit:pr,details:Je,canDetails:q===`files`||q===`recycle`||q===`gallery`,onToggleDetails:()=>Ye(e=>!e),currentFolder:q===`files`&&!Lc(fn)?fn:``,shortcuts:U,view:xn,tabs:n.filter(e=>!e.hidden).map(t=>{let r=sb(t),i=cb(t),a=t.splitWith?n.find(e=>e.id===t.splitWith):void 0,o=a?cb(a):``;return{id:t.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Fn(wn,i):void 0,archive:r===`files`&&C(i),split:!!a,title:r===`files`?In(wn,i,y(i)||e(`Files`)):e(Wy[r]),partner:a?{title:In(wn,o,y(o)||e(`Files`)),place:Fn(wn,o)}:void 0}})}),(0,J.jsxs)(bb,{children:[(0,J.jsx)(O_,{activeKind:q,currentPath:q===`files`?dn:``,drives:v,historyVersion:Fe,onNavigate:dr,onOpenView:cr,homePath:g.find(e=>e.kind===`home`)?.path??``,places:g,recent:_e,recentLimit:Te,version:ze}),(0,J.jsxs)(xb,{children:[q!==`files`&&Fi,(0,J.jsxs)(Sb,{children:[q!==`files`&&se.open&&(0,J.jsx)(Hd,{current:fe,focusToken:ue,matchCase:se.matchCase,mode:se.mode,onClose:Rn,onMatchCase:()=>ce(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ce(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>zn(1),onPrevious:()=>zn(-1),onQuery:e=>ce(t=>({...t,query:e})),onRegex:()=>ce(e=>({...e,regex:!e.regex})),placeholder:e(`Search`),query:se.query,regex:se.regex,total:L,onSelectMatches:q===`gallery`||q===`recycle`?()=>I(e=>e+1):void 0}),q===`files`?hn&&mn?(0,J.jsxs)(kb,{ref:gr,children:[(0,J.jsxs)(Ab,{style:{flex:d},children:[(0,J.jsxs)(Ob,{$active:it===`primary`,onPointerDown:()=>at(`primary`),children:[(0,J.jsx)(wb,{"data-shortcut":Gt(U.goBack),disabled:!Si,onClick:e=>{let t=K.index-1;t<0||(Ut(e)?ir(K.history[t]):rr(K.id,K.history[t],t))},title:e(`Back`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(wb,{"data-shortcut":Gt(U.goForward),disabled:!Ci,onClick:e=>{let t=K.index+1;t>=K.history.length||(Ut(e)?ir(K.history[t]):rr(K.id,K.history[t],t))},title:e(`Forward`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(wb,{"data-shortcut":Gt(U.goUp),disabled:!pn,onClick:e=>{pn&&(Ut(e)?ir(pn):tr(K.id,pn))},title:e(`Up one level`),type:`button`,children:(0,J.jsx)(mi,{})}),(0,J.jsx)(Fp,{focusToken:it===`primary`?He:void 0,onContextMenu:(e,t,n)=>W({x:t,y:n,path:e}),onNavigate:(e,t)=>t?ir(e):void tr(K.id,e),path:fn}),(0,J.jsx)(wb,{onClick:e=>vr(e,fn,()=>void tr(K.id,fn,!0)),title:e(`New folder or file`),type:`button`,children:(0,J.jsx)(gi,{})}),(0,J.jsx)(wb,{"data-shortcut":Gt(U.find),onClick:Pn,title:e(`Search`),type:`button`,children:(0,J.jsx)(pi,{})}),mt.primary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Db,{}),(0,J.jsx)(wb,{onClick:e=>Sr(`primary`,e),title:e(`Selection menu`),type:`button`,children:(0,J.jsx)(ba,{})})]})]}),wi(K,!0),it===`primary`&&Ti]}),(0,J.jsx)(jb,{onDoubleClick:()=>m(.5),onPointerDown:_r,title:e(`Drag to resize; double-click to reset`)}),(0,J.jsxs)(Ab,{$enter:!0,style:{flex:1-d},children:[(0,J.jsxs)(Ob,{$active:it===`secondary`,onPointerDown:()=>at(`secondary`),children:[(0,J.jsx)(wb,{"data-shortcut":Gt(U.goBack),disabled:mn.index<=0,onClick:e=>{let t=mn.index-1;t<0||(Ut(e)?ir(mn.history[t]):rr(mn.id,mn.history[t],t))},title:e(`Back`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(wb,{"data-shortcut":Gt(U.goForward),disabled:mn.index>=mn.history.length-1,onClick:e=>{let t=mn.index+1;t>=mn.history.length||(Ut(e)?ir(mn.history[t]):rr(mn.id,mn.history[t],t))},title:e(`Forward`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(wb,{"data-shortcut":Gt(U.goUp),disabled:!vn,onClick:e=>{vn&&(Ut(e)?ir(vn):tr(mn.id,vn))},title:e(`Up one level`),type:`button`,children:(0,J.jsx)(mi,{})}),(0,J.jsx)(Fp,{focusToken:it===`secondary`?He:void 0,onContextMenu:(e,t,n)=>W({x:t,y:n,path:e}),onNavigate:(e,t)=>t?ir(e):void tr(mn.id,e),path:gn}),(0,J.jsx)(wb,{onClick:e=>vr(e,gn,()=>void tr(mn.id,gn,!0)),title:e(`New folder or file`),type:`button`,children:(0,J.jsx)(gi,{})}),(0,J.jsx)(wb,{"data-shortcut":Gt(U.find),onClick:Pn,title:e(`Search`),type:`button`,children:(0,J.jsx)(pi,{})}),mt.secondary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Db,{}),(0,J.jsx)(wb,{onClick:e=>Sr(`secondary`,e),title:e(`Selection menu`),type:`button`,children:(0,J.jsx)(ba,{})})]})]}),wi(mn,!1),it===`secondary`&&Ti]}),(0,J.jsx)(rs,{info:hr,onWidth:mr,open:Je,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1,width:Xe})]}):(0,J.jsxs)(Nb,{children:[(0,J.jsxs)(Pb,{children:[Fi,(0,J.jsxs)(Mb,{children:[wi(K,!0),Ti]})]}),(0,J.jsx)(rs,{info:Qe,onWidth:mr,open:Je,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1,width:Xe})]}):q===`home`?(0,J.jsx)(Tp,{drives:v,find:Ii,historyVersion:Fe,onSearchMatches:me,homePath:g.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Y,onHistoryChanged:()=>Ie(e=>e+1),onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Pe,onExtractArchive:(e,t)=>void ji(e,t),settingsVersion:ze,onOpen:dr,onLayoutChanged:si,onPlacesChanged:_,onRecentCleared:ci,places:g,recent:_e,recentLimit:Te,visibilityVersion:Ge}):q===`settings`?(0,J.jsx)(mh,{appInfo:x,find:Ii,focusSection:O,onSearchMatches:me,onSettingsChanged:si}):q===`gallery`?(0,J.jsx)(m_,{confirmDelete:H?.confirmDelete??!1,find:Ii,onSearchMatches:me,openOnSingleClick:H?.openOnSingleClick??!1,onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Pe,onExtractArchive:(e,t)=>void ji(e,t),shortcuts:U,showCheckboxes:H?.showCheckboxes??!0,selectMatchesToken:F,showDetails:Je,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1,view:xn}):(0,J.jsx)(Qp,{find:Ii,onOpenLocation:dr,onShowDetails:()=>Ye(!0),platform:x?.platform,selectMatchesToken:F,showDetails:Je,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1})]},q),(0,J.jsxs)(zb,{children:[(0,J.jsx)(`span`,{children:q===`files`&&K.listing?_b(e,K.listing):``}),x?(0,J.jsxs)(Fb,{children:[(0,J.jsxs)(`span`,{children:[`v`,x.version,` · `,x.platform]}),x.debug&&(0,J.jsx)(Rb,{children:`debug`}),ee?.available&&(0,J.jsxs)(Ib,{onClick:()=>{k(`updates`),cr(`settings`)},title:e(`Version {version} is available.`,{version:ee.latest}),type:`button`,children:[(0,J.jsx)(Lb,{}),e(`Update available`)]})]}):(0,J.jsx)(`span`,{children:e(`browser preview`)})]})]})]}),(0,J.jsx)(sc,{clipboardItems:Ft,clipboardMove:Vt,currentDirectory:q===`files`?dn:``,items:en,onAdd:e=>void Ar(e),onClear:Pr,onClose:()=>$t(!1),onCopyToClipboard:e=>void Rr(e),onPosition:Wr,onRemove:jr,onTransfer:Kr,position:cn,visible:Yt}),ot&&(0,J.jsx)(_o,{creationOnly:!0,directory:ot.directory,menu:{x:ot.x,y:ot.y,paths:[],background:!0},onClose:()=>st(null),onCreateFile:e=>void Cr(e),onCreateFolder:e=>void Cr(null,e),shortcuts:U}),ut&&(0,J.jsx)(_o,{allowCompression:!0,directory:mb(ut.path)??ut.path,menu:{x:ut.x,y:ut.y,paths:[ut.path]},onAddToTray:e=>void Ar(e),onAddFavorite:e=>void Mr(e),onRemoveFavorite:e=>void Nr(e),favoritePaths:Pe,onExtractArchive:(e,t)=>void ji(e,t),onArchiveCreated:e=>{e&&ar(mb(ut.path)??ut.path)},onClose:()=>W(null),onCompressTo:(e,t)=>ft({paths:e,name:t}),onCopy:(e,t)=>void pt(e,t),onDelete:e=>void bt(e,!1).then(()=>ar(mb(ut.path)??ut.path)),onOpen:(e,t)=>t?ir(e):void tr(K.id,e),onOpenFile:e=>void be(e),onPaste:e=>void yt(e).then(t=>{t.ok&&ar(e)}),onRefresh:()=>ar(ut.path),shortcuts:U,target:{path:ut.path,isDirectory:!0}}),dt&&(0,J.jsx)(No,{initialDirectory:mb(ut?.path??fn)??fn,initialName:dt.name,onCancel:()=>ft(null),onCompress:async e=>{let t=await Lt(dt.paths,e);return!t.ok&&t.error&&ka(t.error),t.ok}}),ct&&(0,J.jsx)(io,{items:[{label:e(`Extract here`),onSelect:()=>void Mi(`here`)},{label:e(`Extract to a folder named after the archive`),onSelect:()=>void Mi(`named`)},{label:e(`Auto extract to the current folder`),onSelect:()=>void Mi(`auto`)}],onClose:()=>lt(null),x:ct.x,y:ct.y}),nn&&(0,J.jsx)(sd,{action:nn.prompt.action,delaySeconds:nn.prompt.delaySeconds,hits:nn.prompt.hits,onCancel:()=>{nn.resolve(!1),on(null)},onConfirm:()=>{nn.resolve(!0),on(null)},permanent:nn.prompt.permanent},nn.id),(0,J.jsx)(Td,{}),(0,J.jsx)(Md,{}),l&&(0,J.jsx)(Gy,{code:l.code,deviceName:l.deviceName,onAccept:()=>{Pc(l.requestId,!0),u(null)},onReject:()=>{Pc(l.requestId,!1),u(null)}}),(0,J.jsx)(zy,{}),(0,J.jsx)(f,{})]})})}var yb=n.div`
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

        /* Over a picture the light palette needs a stronger veil to keep dark text readable. */
        html[data-theme="light"] & {
            background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.45), rgba(var(--bg-rgb), 0.68));
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
`;function Bb({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:o,showImages:s,onCancel:l,onSelect:u}){let d=p(),f=Qc(`picker`),m=t===`file`,h=r??[],[g,_]=(0,z.useState)(e),[b,x]=(0,z.useState)(null),[S,C]=(0,z.useState)(!0),[T,E]=(0,z.useState)(null),[ee,D]=(0,z.useState)(()=>new Set),[O,k]=(0,z.useState)(a??[]),[A,te]=(0,z.useState)([]),[j,ne]=(0,z.useState)([]),[re,M]=(0,z.useState)([]),[ie,ae]=(0,z.useState)([]),[N,P]=(0,z.useState)(``),[F,oe]=(0,z.useState)(h.length===0),[I,se]=(0,z.useState)(`files`),[ce,le]=(0,z.useState)(0),[ue,de]=(0,z.useState)(_n),[fe,pe]=(0,z.useState)(0),[L,me]=(0,z.useState)(0),[R,he]=(0,z.useState)(0),[B,ge]=(0,z.useState)(null),[_e,ye]=(0,z.useState)(null),[be,Se]=(0,z.useState)(0),[Ce,we]=(0,z.useState)(null),[Te,Ee]=(0,z.useState)(ve.imageStripHeight);(0,z.useEffect)(()=>{qe().then(we,()=>we(null))},[]),(0,z.useEffect)(()=>{a?k(a):ke().then(k,()=>k([]))},[a]),(0,z.useEffect)(()=>{Ae().then(te,()=>te([])),Re().then(ne,()=>ne([]))},[]),(0,z.useEffect)(()=>{let e=!0;return C(!0),E(null),D(new Set),P(m?``:y(g)),xe(g||void 0,!1).then(t=>{e&&(x(t),_(t.path),P(m?``:y(t.path)),C(!1))},t=>{e&&(E(t instanceof Error?t.message:String(t)),C(!1))}),()=>{e=!1}},[g,ce,m]),(0,z.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),de(e=>({...e,open:!0})),pe(e=>e+1);return}if(e.key===`Escape`){ue.open?(de(e=>({...e,open:!1,query:``})),me(0)):l();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Oe();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),je();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),de(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),pe(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||We()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,z.useEffect)(()=>{let e=e=>{e.button===3?(e.preventDefault(),Oe()):e.button===4&&(e.preventDefault(),je())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let De=e=>{let t=e.trim();t.length!==0&&w(t)!==w(g)&&(M(e=>[...e,g]),ae([]),se(`files`),_(t))},Oe=()=>{let e=re.at(-1);e!==void 0&&(M(e=>e.slice(0,-1)),ae(e=>[g,...e]),_(e))},je=()=>{let e=ie[0];e!==void 0&&(ae(e=>e.slice(1)),M(e=>[...e,g]),_(e))},H=b?.path??g,Me=b?.parent??(g?v(g):null);(0,z.useEffect)(()=>{c.available&&H&&c.send({type:`fs.watch`,payload:{paths:[H],owner:`picker`}})},[H]),(0,z.useEffect)(()=>{if(c.available&&H)return c.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&w(t.data.path)===w(H)&&xe(H,!1).then(e=>{x(e);let t=new Set(e.entries.map(e=>e.fullPath));D(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[H]);let Ne=(b?.entries??[]).filter(e=>e.isDirectory||m&&(F||h.length===0||h.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Pe=b?{...b,entries:Ne}:null,Fe=ue.open&&ue.query.length>0,Ie=(0,z.useMemo)(()=>Fe?Ne.filter(e=>En(e.name,ue)).map(e=>e.fullPath):[],[Fe,Ne,ue]);(0,z.useEffect)(()=>{me(0)},[ue.query,ue.matchCase,ue.regex,b?.path]);let U=Ie.length===0?-1:Math.min(L,Ie.length-1),Le=(0,z.useMemo)(()=>({...ue,currentPath:U>=0?Ie[U]:null}),[ue,U,Ie]),ze=Ce?.defaultView??ve,Be=o??{mode:ze.mode,iconSize:ze.iconSize,gridSize:ze.gridSize,sort:`name`,sortDescending:!1,columns:ze.columns??[`type`,`size`,`modified`]},Ve=(s??ze.showImages)&&Be.mode===`list`,He=N.trim(),Ue=He.length>0?Hb(He)?He:Vb(H,He):null,We=()=>{if(S||T)return;let e=n?[...ee]:[...ee].slice(0,1);e.length>0?u(e):Ue!==null&&He!==y(H)?u([Ue]):!m&&H&&u([H])},Ge=(0,z.useCallback)(e=>{D(new Set(e)),P(e.length===1?y(e[0]):e.length===0&&!m?y(H):``)},[H,m]),Ke=e=>{b?.entries.find(t=>t.fullPath===e)?.isDirectory?De(e):m&&u([e])},Je=e=>P(e),Ye=async e=>{let t=B;if(ge(null),!t||!H)return;let n=e===null?await St(H):await Et(H,e);n.ok&&n.path!==null&&(de(e=>({...e,open:!1,query:``})),e!==null&&oe(!0),le(e=>e+1),window.setTimeout(()=>{ye(n.path),Se(e=>e+1)},120))},Xe=()=>{de(e=>({...e,open:!0})),pe(e=>e+1)},Ze=e=>{me(t=>Ie.length===0?0:(t+e+Ie.length)%Ie.length)},Qe=e=>(0,J.jsxs)(Qb,{children:[(0,J.jsxs)($b,{children:[(0,J.jsx)(ex,{children:d(m?`File name:`:`Folder:`)}),(0,J.jsx)(tx,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),We())},spellCheck:!1,value:N}),m&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(ex,{children:d(`Files of type:`)}),(0,J.jsx)(bo,{onChange:e=>oe(e===`all`),options:[...h.length>0?[{value:`supported`,label:`${d(`Supported files`)} (${h.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${d(`All files`)} (*.*)`}],value:F?`all`:`supported`})]})]}),(0,J.jsxs)(nx,{children:[(0,J.jsx)(rx,{onClick:l,type:`button`,children:d(`Cancel`)}),(0,J.jsxs)(rx,{$primary:!0,disabled:S||T!==null||m&&ee.size===0&&He.length===0,onClick:We,type:`button`,children:[(0,J.jsx)(Di,{size:12}),d(m?`Select this file`:`Select this folder`)]})]})]}),$e=(0,J.jsxs)(Wb,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,J.jsxs)(Gb,{children:[(0,J.jsxs)(Kb,{children:[(0,J.jsx)(ui,{size:16}),d(m?`Choose a file`:`Choose a folder`)]}),(0,J.jsx)(qb,{onClick:l,title:d(`Cancel`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]}),(0,J.jsxs)(Jb,{children:[(0,J.jsx)(O_,{activeKind:I===`overview`?`home`:I===`gallery`?`gallery`:`files`,currentPath:H,drives:A,hiddenViews:m?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:O.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>De(e),onOpenView:e=>{e===`home`?(D(new Set),P(m?``:y(H)),se(`overview`)):e===`gallery`&&m&&(D(new Set),P(``),se(`gallery`))},places:O,recent:j,recentLimit:10}),(0,J.jsx)(Yb,{children:I===`overview`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Tp,{drives:A,historyVersion:0,homePath:O.find(e=>e.kind===`home`)?.path??``,onOpen:e=>De(e),onPick:m?e=>u([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Ge,places:O,readOnly:!0,recent:j,recentLimit:10,visibilityVersion:0}),Qe(P)]}):I===`gallery`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(m_,{onPick:e=>u([e]),onSelectionChange:Ge,showCheckboxes:Ce?.showCheckboxes??!0,view:{...V,columns:[]}}),Qe(P)]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Xb,{children:[(0,J.jsx)(Zb,{disabled:re.length===0,onClick:Oe,title:d(`Back`),type:`button`,children:(0,J.jsx)(_i,{})}),(0,J.jsx)(Zb,{disabled:ie.length===0,onClick:je,title:d(`Forward`),type:`button`,children:(0,J.jsx)(vi,{})}),(0,J.jsx)(Zb,{disabled:!Me,onClick:()=>Me&&De(Me),title:d(`Up one level`),type:`button`,children:(0,J.jsx)(mi,{})}),(0,J.jsx)(Fp,{onNavigate:De,path:H}),(0,J.jsx)(Zb,{onClick:e=>ge({x:e.clientX,y:e.clientY}),title:d(`New folder or file`),type:`button`,children:(0,J.jsx)(gi,{})}),(0,J.jsx)(Zb,{onClick:Xe,title:d(`Search`),type:`button`,children:(0,J.jsx)(pi,{})}),f.available&&(0,J.jsx)(Zb,{onClick:e=>f.open(e.clientX,e.clientY),title:d(`Selection menu`),type:`button`,children:(0,J.jsx)(ba,{})})]}),ue.open&&(0,J.jsx)(Hd,{current:U,focusToken:fe,matchCase:ue.matchCase,mode:ue.mode,onClose:()=>{de(e=>({...e,open:!1,query:``})),me(0)},onMatchCase:()=>de(e=>({...e,matchCase:!e.matchCase})),onMode:()=>de(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Ze(1),onPrevious:()=>Ze(-1),onQuery:e=>de(t=>({...t,query:e})),onRegex:()=>de(e=>({...e,regex:!e.regex})),query:ue.query,regex:ue.regex,total:Ie.length,onSelectMatches:()=>he(e=>e+1)}),(0,J.jsx)(fl,{allowBackgroundMenu:!0,confirmDelete:Ce?.confirmDelete??!1,enableShortcuts:!0,error:T,find:Le,selectMatchesToken:R,imageStripHeight:Te,loading:S,listing:Pe,onImageStripHeight:Ee,onOpen:Ke,onOpenFile:Ke,onRefresh:()=>le(e=>e+1),onSelectionChange:Ge,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:Ce?.openOnSingleClick??!1,refreshToken:ce,pendingRename:_e,pendingRenameToken:be,showCheckboxes:Ce?.showCheckboxes??!0,showDetails:!1,showImages:Ve,singleSelect:!n,view:Be}),Qe(Je)]})})]}),B&&(0,J.jsx)(_o,{creationOnly:!0,directory:H,menu:{x:B.x,y:B.y,paths:[],background:!0},onClose:()=>ge(null),onCreateFile:m?e=>void Ye(e):void 0,onCreateFolder:()=>void Ye(null),shortcuts:Bt})]});return i?$e:(0,Va.createPortal)((0,J.jsx)(Ub,{onPointerDown:e=>{e.target===e.currentTarget&&l()},children:$e}),document.body)}function Vb(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Hb(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ub=n.div`
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
`;function ix({mode:e,multiple:t,extensions:n,initial:a}){let o=p(),s=ee(),[l,u]=(0,z.useState)(null),d=i(h(l?.themeMode)),[m,g]=(0,z.useState)({}),[_,v]=(0,z.useState)(null),[y,b]=(0,z.useState)(null),[x,S]=(0,z.useState)(null),C=(0,z.useRef)(0);(0,z.useEffect)(()=>{c.send({type:`app.ready`})},[]),(0,z.useEffect)(()=>(ge(e=>new Promise(t=>{S({id:++C.current,prompt:e,resolve:t})})),()=>ge(null)),[]),(0,z.useEffect)(()=>{qe().then(u,()=>void 0)},[]),(0,z.useEffect)(()=>{r(l?.accentColor,l?.secondaryColor,d)},[l?.accentColor,l?.secondaryColor,d]);let w=l?.defaultView??ve,T={mode:m.mode??w.mode,iconSize:m.iconSize??w.iconSize,gridSize:m.gridSize??w.gridSize,sort:`name`,sortDescending:!1,columns:_??w.columns??[`type`,`size`,`modified`]},E=e=>g(t=>({...t,...e}));return(0,J.jsxs)(ax,{children:[(0,J.jsxs)(ox,{children:[(0,J.jsx)(sx,{children:(0,J.jsx)(ji,{size:17})}),(0,J.jsx)(cx,{...s,children:o(e===`file`?`Choose a file`:`Choose a folder`)}),(0,J.jsx)(ny,{onChange:E,onColumns:v,onShowImages:b,showImages:y??w.showImages,view:T}),(0,J.jsx)(lx,{children:(0,J.jsx)(ux,{onClick:()=>c.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:o(`Cancel`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})})]}),(0,J.jsx)(dx,{children:(0,J.jsx)(Bb,{extensions:n,initial:a,inline:!0,mode:e,multiple:t,onCancel:()=>c.send({type:`pick.cancel`}),onSelect:e=>c.send({type:`pick.submit`,payload:{paths:e}}),showImages:y??w.showImages,fileView:T})}),x&&(0,J.jsx)(sd,{action:x.prompt.action,delaySeconds:x.prompt.delaySeconds,hits:x.prompt.hits,onCancel:()=>{x.resolve(!1),S(null)},onConfirm:()=>{x.resolve(!0),S(null)},permanent:x.prompt.permanent},x.id),(0,J.jsx)(Td,{}),(0,J.jsx)(f,{})]})}var ax=n.div`
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
`;document.documentElement.dataset.theme=a()?`dark`:`light`;var fx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,fx),window.addEventListener(`pagehide`,Wn);var px=document.getElementById(`root`),mx=new URLSearchParams(window.location.search),hx=mx.get(`picker`),gx=mx.get(`filter`)??``;px&&(Bn(),(0,he.createRoot)(px).render((0,J.jsx)(z.StrictMode,{children:(0,J.jsx)(u,{children:hx===`folder`||hx===`file`?(0,J.jsx)(ix,{extensions:gx?gx.split(`;`).filter(Boolean):[],initial:mx.get(`initial`)??``,mode:hx,multiple:mx.get(`multiple`)===`1`}):(0,J.jsx)(vb,{})})})));