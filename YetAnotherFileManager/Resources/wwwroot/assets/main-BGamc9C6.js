import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{A as t,B as n,C as r,D as i,E as a,F as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,R as m,S as h,T as g,U as _,V as v,W as y,_ as b,a as x,b as S,c as C,d as w,f as T,g as E,h as ee,i as D,j as te,k as O,l as ne,m as k,n as A,o as j,p as re,r as M,s as ie,u as ae,v as oe,w as se,x as ce,y as N}from"./format-DDANH-1L.js";async function P(){return l.available?await l.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function F(e){l.available?await l.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function le(){l.available&&await _e(`update.openLogs`)}async function ue(e){l.available?await _e(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function de(){return l.available?await l.request(`update.status`)??null:null}async function fe(){return l.available?await l.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function pe(){return l.available?await l.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function me(){await _e(`update.cancel`)}async function he(){return l.available?await l.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function ge(e){return l.on(t=>{t.type===`update.progress`&&e(t.data)})}function I(e){return l.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function _e(e,t,n=3e4){let r=await l.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var L=e(y(),1),ve=s(),ye=null;function be(e){ye=e}function R(e){return ye?ye(e):Promise.resolve(!1)}var xe={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},Se={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function Ce(e,t){return l.available?await l.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function we(e){return l.available?(await l.request(`fs.open`,{path:e})).ok:!1}async function Te(e,t=!0,n=!1,r=0,i){return await l.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function Ee(e,t,n=0,r){let i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await R({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function De(e,t=0,n){return await l.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Oe(e){l.available&&e.length!==0&&await l.request(`fs.archive.release`,{paths:e})}async function ke(e){return l.available?await l.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Ae(e,t){return l.available?(await l.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function je(e,t,n,r){return l.available?(await l.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Me(e,t=!1){return l.available?await l.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ne(){return(await l.request(`fs.places`)).places}async function Pe(){return(await l.request(`fs.drives`)).drives}async function Fe(e=!1){return(await l.request(`fs.recycle`,{includeOrphans:e})).entries}async function z(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await R({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await l.request(e,{...t,confirm:r.token})}return r}async function Ie(e=!1){let t=await l.request(`fs.recycle.empty`,{includeOrphans:e});await z(`fs.recycle.empty`,{includeOrphans:e},t)}async function Le(e){return!l.available||e.length===0?{ok:!1,done:0}:await l.request(`fs.recycle.restoreMany`,{ids:e})}async function Re(e){if(!l.available||e.length===0)return{ok:!1,done:0};let t=await l.request(`fs.recycle.deleteMany`,{ids:e}),n=await z(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function ze(e){l.available&&e&&await l.request(`fs.recycle.properties`,{id:e})}async function Be(){if(!l.available)return{entries:[],cancelled:!0,failed:!1};let e=await l.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function B(){return l.available?(await l.request(`fs.recycle.admin.purge`)).ok:!1}async function Ve(e=0,t=150,n=!1){return l.available?await l.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function He(){return l.available?(await l.request(`fs.recent`)).entries:[]}async function Ue(){return l.available?(await l.request(`fs.frequent`)).entries:[]}async function We(e){l.available&&await l.request(`fs.frequent.record`,{path:e})}async function Ge(){await l.request(`fs.recent.clear`)}async function Ke(){await l.request(`fs.frequent.clear`)}async function qe(){return await l.request(`fs.visibility`)}async function Je(){return await l.request(`fs.hidden.toggle`)}async function Ye(){return l.available?await l.request(`fs.index.tasks`):{count:0,directories:[]}}var Xe={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showHidden:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,themeMode:`system`,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[],conflictNameStyle:`space_parentheses`,shareAccessEnabled:!0,shareApprovalMinutes:60,shareDenialSeconds:10};async function Ze(){if(!l.available)return Xe;let e=await l.request(`settings.get`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showHidden:e?.showHidden??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,themeMode:g(e?.themeMode),backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[],conflictNameStyle:e?.conflictNameStyle??`space_parentheses`,shareAccessEnabled:e?.shareAccessEnabled??!0,shareApprovalMinutes:e?.shareApprovalMinutes??60,shareDenialSeconds:e?.shareDenialSeconds??10}}async function Qe(){return l.available?(await l.request(`app.protection.defaults`)).paths??[]:[]}var $e={registered:!1,pathMatches:!1,registeredPath:null},et={registered:!1,pathMatches:!1,registeredPath:null};async function tt(){return l.available?await l.request(`app.defaultManager.status`):et}async function nt(e){return l.available?await l.request(`app.defaultManager.set`,{enabled:e}):et}async function rt(){return l.available?await l.request(`app.archive.status`):$e}async function it(){return l.available?await l.request(`app.archive.register`):$e}async function at(){return l.available?await l.request(`app.archive.unregister`):$e}async function ot(e){if(!l.available)return e;let t=await l.request(`settings.save`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showHidden:t?.showHidden??e.showHidden,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,themeMode:g(t?.themeMode??e.themeMode),backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites,conflictNameStyle:t?.conflictNameStyle??e.conflictNameStyle,shareAccessEnabled:t?.shareAccessEnabled??e.shareAccessEnabled,shareApprovalMinutes:t?.shareApprovalMinutes??e.shareApprovalMinutes,shareDenialSeconds:t?.shareDenialSeconds??e.shareDenialSeconds}}async function st(e,t){l.available&&await l.request(`app.tabs.set`,{tabs:e,active:t})}async function ct(e,t,n){return l.available?(await l.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var lt={managed:0,private:0,workingSet:0,available:0};async function ut(){return l.available?await l.request(`app.memory`):lt}async function dt(){return l.available?await l.request(`app.memory.trim`):lt}var ft={registered:!1,pathMatches:!1,registeredPath:null};async function pt(){return l.available?await l.request(`app.scheme`):ft}async function V(e){return l.available?await l.request(`app.scheme.set`,{enabled:e}):ft}var mt={supported:!1,mode:`none`,active:!1,error:null};async function ht(){return l.available?await l.request(`app.startup`):mt}async function gt(e){return l.available?await l.request(`app.startup.set`,{mode:e}):mt}async function _t(e,t=!1){return!l.available||e.length===0?!1:(await l.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function vt(){return l.available?(await l.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function yt(){return l.available?await l.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function bt(e,t,n){return!l.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await xt({action:n?`move`:`write`},r=>l.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:r}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function xt(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await R({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function H(e){return!l.available||e.length===0?[]:(await l.request(`fs.paths.info`,{paths:e})).entries}async function St(e,t=!1){return l.available?await xt({action:t?`move`:`write`},t=>l.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function Ct(e,t=!1){if(!l.available||e.length===0)return{ok:!1,error:null};let n=await l.request(`fs.operation.delete`,{paths:e,permanent:t}),r=!1;for(let i=0;i<2&&n.required&&n.token&&n.protected?.length;i++){if(!await R({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){r=!0;break}n=await l.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return r?{...n,ok:!1,cancelled:!0}:n}async function wt(e,t){return l.available?await xt({action:`rename`},n=>l.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Tt(e,t=!1){return l.available?await l.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Et(e){return l.available?(await l.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Dt(e,t){return l.available?await l.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Ot(e,t,n){return l.available?await l.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function kt(e,t){return l.available?await l.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function At(e){l.available&&e.length!==0&&await l.request(`fs.operation.properties`,{paths:e})}async function jt(e){l.available&&await l.request(`fs.operation.openWith`,{path:e})}async function Mt(e){l.available&&await l.request(`fs.operation.terminal`,{path:e})}async function Nt(e){return l.available?await l.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Pt(e,t){return l.available?(await l.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Ft(){return l.available?await l.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function It(){return l.available?await l.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Lt(e){l.available&&await l.request(`fs.operation.showInExplorer`,{path:e})}async function Rt(e){return!l.available||e.length===0?{verbs:[],safe:!0}:await l.request(`shell.verbs`,{paths:e})}async function zt(e,t,n,r){l.available&&e.length!==0&&await l.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Bt(e,t){return!l.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await l.request(`fs.operation.compress`,{...t,paths:e})}async function Vt(){return l.available?(await l.request(`app.tasks`)).tasks:[]}async function Ht(){l.available&&await l.request(`app.tasks.clear`)}var Ut={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Wt=Ut.openInNewTab;function Gt(e){Wt=e.trim()||Ut.openInNewTab}function Kt(e){let t=Wt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function qt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Jt(e){return e.split(`+`).filter(Boolean).map(e=>Yt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Yt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Xt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Zt=new Map;function Qt(e){return E(T(e)?D(e):e)}function $t(e){return Zt.get(Qt(e))}function en(e,t){Zt.set(Qt(e),t)}function tn(e){Zt.delete(Qt(e))}function nn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var rn=new Map,an=new Map,on=new Set,sn=0;function cn(){rn.clear(),an.clear(),sn+=1,on.forEach(e=>e())}function ln(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...rn.keys()])e.toLowerCase().includes(t)&&(rn.delete(e),n=!0);n&&(sn+=1,on.forEach(e=>e()))}function un(){let[e,t]=(0,L.useState)(sn);return(0,L.useEffect)(()=>{let e=()=>t(sn);return on.add(e),()=>{on.delete(e)}},[]),e}var dn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function U(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return dn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function fn(e,t,n=!1){let r=un(),i=e===null?``:U(e,t,n),[a,o]=(0,L.useState)(()=>rn.get(i)??null);return(0,L.useEffect)(()=>{if(e===null){o(null);return}if(!l.available)return;if(rn.has(i)){o(rn.get(i)??null);return}let r=!0;return l.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?rn.set(i,e.dataUrl):rn.delete(i),r&&o(e.dataUrl)},()=>{rn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function pn(e){let[t,n]=(0,L.useState)(e);return(0,L.useEffect)(()=>{if(!e){n(null);return}if(!T(e)){n(e);return}let t=!0;return De(e,0,$t(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function mn(e){let t=un(),[n,r]=(0,L.useState)(()=>e?an.get(e)??null:null);return(0,L.useEffect)(()=>{if(!e||!l.available){r(null);return}if(an.has(e)){r(an.get(e)??null);return}let t=!0;return l.request(`fs.iconFile`,{path:e}).then(n=>{an.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{an.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var W=null,G=null;function K(){return W===null?l.available?(G??=l.request(`app.thumbnails`).then(e=>(W=e.base??``,W),()=>(W=``,``)),G):Promise.resolve(``):Promise.resolve(W)}function hn(e,t=128,n=0){let[r,i]=(0,L.useState)(W);return(0,L.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return K().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${gn}`}var gn=2;function _n(e,t=0,n=``){let[r,i]=(0,L.useState)(W);if((0,L.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return K().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function vn(e,t=0){let[n,r]=(0,L.useState)(W);return(0,L.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return K().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var yn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},bn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function xn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=wn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=Dn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Sn=`\0`,Cn=``;function wn(e){return e.query!==Sn&&(Sn=e.query,Cn=e.query.toLowerCase()),Cn}var Tn=`\0`,En=null;function Dn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Tn)return En;Tn=t;try{En=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{En=null}return En}function On(e,t){return xn(e,t)!==null}var kn=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],An={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function jn(e){let t=Nn(e);for(let{kind:e}of kn)if(An[e].has(t))return e;return null}function Mn(e){return jn(e)!==null}function Nn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Pn=(0,L.createContext)({places:{},useIcons:!1}),Fn=Pn.Provider;function In(){return(0,L.useContext)(Pn)}function Ln(e,t){return e.places[E(t)]}function Rn(e,t,n){return Ln(e,t)?.name||n}var zn=new Map,Bn=new Map,Vn=0;function Hn(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&zn.set(e,t)}catch{}}function Un(e){return l.available?zn.get(e)??null:localStorage.getItem(e)}function Wn(e,t){l.available?(zn.set(e,t),Bn.set(e,t),window.clearTimeout(Vn),Vn=window.setTimeout(Gn,200)):localStorage.setItem(e,t)}function Gn(){if(Vn=0,Bn.size===0)return;let e=Object.fromEntries(Bn);Bn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Kn(){if(Bn.size===0)return;let e=Object.fromEntries(Bn);Bn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function qn(e,t){let n=Un(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function Jn(e,t){Wn(e,String(t))}function Yn(e){try{return JSON.parse(Un(e)??`null`)}catch{return null}}function Xn(e,t){Wn(e,JSON.stringify(t))}var q=c(),Zn=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,q.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,q.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),Qn=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),$n=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M14 3v4h4`})]}),er=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,q.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),tr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,q.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),nr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 19V5`}),(0,q.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),rr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,q.jsx)(`path`,{d:`M20 4v7h-7`})]}),ir=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 5v14`}),(0,q.jsx)(`path`,{d:`M5 12h14`})]}),ar=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 12H5`}),(0,q.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),or=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M5 12h14`}),(0,q.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),sr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,q.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),cr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,q.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),lr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,q.jsx)(`path`,{d:`M12 12v8`})]}),ur=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,q.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),dr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),fr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),pr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),mr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 7h16`}),(0,q.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,q.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,q.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),hr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),gr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),_r=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,q.jsxs)(`defs`,{children:[(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,q.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,q.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),vr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),yr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,q.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,q.jsx)(`path`,{d:`m13 5-2 14`})]}),br=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),xr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Sr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Cr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),wr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Tr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Er=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,q.jsx)(`path`,{d:`M8.5 14h7`})]}),Dr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,q.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,q.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Or=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),kr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Ar=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),jr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Mr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Nr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,q.jsx)(`path`,{d:`m14 6 4 4`})]}),Pr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,q.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Fr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,q.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Ir=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 4v10`}),(0,q.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,q.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Lr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Rr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),zr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Br=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Vr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,q.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Hr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,q.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Ur=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Wr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,q.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,q.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,q.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Gr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,q.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Kr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,q.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),qr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Jr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,q.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Yr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M3.5 12h17`}),(0,q.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Xr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Zr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,q.jsx)(`path`,{d:`M8.5 10.5h7`})]}),Qr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,q.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,q.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),$r=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),ei=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,q.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,q.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),ti=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),ni=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 16V4`}),(0,q.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,q.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),ri=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),ii=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M12 4v16`})]}),ai=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M15 4v16`})]}),oi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,q.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,q.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,q.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),si=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,q.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,q.jsx)(`path`,{d:`M12 14v2`})]}),ci=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,q.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),li=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,q.jsx)(`circle`,{cx:12,cy:12,r:3})]}),ui=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,q.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,q.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,q.jsx)(`path`,{d:`m3 3 18 18`})]});function J(e,t){return({size:n=t,...r})=>(0,q.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var di=J(Zn,18),fi=J(Qn,18),pi=J($n,18),mi=J(er,18),hi=J(tr,16),gi=J(nr,16),_i=J(rr,16),vi=J(ir,16),yi=J(ar,16),bi=J(or,16),xi=J(sr,12),Si=J(cr,18),Ci=J(lr,14),wi=J(ur,14),Ti=J(dr,14),Ei=J(fr,18),Di=J(pr,18),Oi=J(mr,18),ki=J(hr,14),Ai=J(gr,14),ji=J(li,14),Mi=J(ui,14),Ni=J(_r,18),Pi=J(vr,18),Fi=J(yr,18),Ii=J(br,18),Li=J(xr,18),Ri=J(Sr,18),zi=J(Cr,18),Bi=J(wr,18),Vi=J(Tr,18),Hi=J(Er,18),Ui=J(Dr,18),Wi=J(Or,18),Gi=J(kr,18),Ki=J(Ar,18),qi=J(jr,18),Ji=J(Mr,18),Yi=J(Nr,16),Xi=J(Pr,18),Zi=J(Fr,18),Qi=J(Ir,18),$i=J(Lr,18),ea=J(Rr,18),ta=J(zr,18),na=J(Br,18),ra=J(Vr,18),ia=J(Hr,18),aa=J(Ur,18),oa=J(Wr,18),sa=J(Gr,18),ca=J(Kr,18),la=J(qr,18),ua=J(Jr,18),da=J(Yr,18),fa=J(Xr,18),pa=J(Zr,14),ma=J(Qr,14),ha=J($r,16),ga=J(ei,16),_a=J(ti,16),va=J(ni,16),ya=J(ri,16),ba=J(ii,16),xa=J(ai,16),Sa=J(oi,16),Ca=J(si,14),wa=J(ci,14);async function Ta(e,t,n){return l.available?(await l.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function Ea(e){return Ta(`folder`,[],e??``)}function Da(e){return Ta(`file`,e??[],``)}var Oa=null,ka=null;function Aa(e){Oa=e}function ja(e){return Oa?Oa(e):Promise.resolve()}function Ma(e){ka=e}function Na(e,t=!1){return ka?ka(e,t):Promise.resolve(null)}var Pa=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],Fa=null,Ia=0,La=new Set;function Ra(){Ia+=1;for(let e of La)e()}function za(e){return La.add(e),()=>La.delete(e)}function Ba(){return Ia}function Va(e){Fa=e,Ra()}function Ha(){return(0,L.useSyncExternalStore)(za,Ba,Ba),Fa}var Ua=_(),Wa=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,Ga=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Ka=m`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,qa=m`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Ja=m`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,Ya=m`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,Xa=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,Za=m`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,Qa=m`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,$a=n`animation: ${Ga} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,eo=n`animation: ${Ka} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,to=n`animation: ${qa} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${Ja} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var no=n`animation: ${Ya} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,ro=n`animation: ${Xa} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,io=n`animation: ${Za} 140ms ease-out;`,ao=n`animation: ${Qa} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function oo({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,L.useState)([]),s=(0,L.useRef)(void 0);if((0,L.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,L.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,q.jsx)(_o,{},`group-rule-${i}`)),n.push((0,q.jsx)(go,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,q.jsx)(_o,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,q.jsxs)(po,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,q.jsx)(mo,{children:e.loading?(0,q.jsx)(vo,{}):e.icon}),(0,q.jsx)(ho,{children:e.label}),a?(0,q.jsx)(xi,{size:12}):e.checked&&(0,q.jsx)(ki,{size:12})]},`${e.label}-${i}`))}),n};return(0,Ua.createPortal)((0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(so,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(co,{children:r.map((e,t)=>(0,q.jsxs)(lo,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,q.jsx)(uo,{children:e.icon}),(0,q.jsx)(fo,{children:e.label})]},`${e.label}-${t}`))}),(0,q.jsx)(_o,{})]}),m(n,0)]}),a.map((e,t)=>(0,q.jsx)(so,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var so=v.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${Wa}
    ${eo}
    transform-origin: top left;
`,co=v.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,lo=v.button`
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
`,uo=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,fo=v.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,po=v.button`
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
`,mo=v.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,ho=v.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,go=v.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,_o=v.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,vo=v.span`
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
`;function yo({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:s,onOpenFile:c,onRename:l,onDelete:u,onCopy:d,onPaste:f,onCreateFolder:p,onCreateFile:m,creationOnly:h=!1,onRefresh:g,onAddToTray:_,onAddFavorite:v,onRemoveFavorite:y,favoritePaths:b,onExtractArchive:S,allowCompression:C=!1,onCompressTo:w,onArchiveCreated:ee}){let D=o(),te=Ha(),O=T(t),[ne,k]=(0,L.useState)({verbs:[],safe:!0,loading:!1}),[A,j]=(0,L.useState)({recommended:[],other:[],loading:!1}),[M,ie]=(0,L.useState)(null),ae=(0,L.useRef)(0),oe=(0,L.useRef)(0),se=e?.paths.length===1,ce=e?.background?t?[t]:[]:e?.paths??[],N=e?.background?t||null:se&&n?.isDirectory?n.path:null;if((0,L.useEffect)(()=>{if(!e){k({verbs:[],safe:!0,loading:!1}),j({recommended:[],other:[],loading:!1});return}let t=++ae.current;k({verbs:[],safe:!0,loading:ce.length>0&&!O}),ce.length>0&&!O&&Rt(ce).then(e=>{ae.current===t&&k({...e,loading:!1})},()=>{ae.current===t&&k({verbs:[],safe:!0,loading:!1})});let r=++oe.current;!O&&se&&n?(j({recommended:[],other:[],loading:!0}),Nt(n.path).then(e=>{oe.current===r&&j({...e,loading:!1})},()=>{oe.current===r&&j({recommended:[],other:[],loading:!1})})):j({recommended:[],other:[],loading:!1})},[e,se,n?.path,n?.isDirectory,ce.length,O]),(0,L.useEffect)(()=>{if(!e||O||!N){ie(null);return}let t=!0;return Et(N).then(e=>{t&&ie(e)},()=>{t&&ie(null)}),()=>{t=!1}},[e,N,O]),!e)return null;let P=[],F=[],le=new Set((b??[]).map(E)),ue=e.background?t?[t]:[]:e.paths,de=ue.length>0&&ue.every(e=>le.has(E(e))),fe=()=>n?pe(n.path,n.isDirectory):`Archive`,pe=(e,t)=>{let n=x(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},me=async(e,n=fe())=>{let r=await Bt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?ee?.(r.path,!0):ja(r.error??D(`could_not_create_the_archive`))},he=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ge=async()=>{if(!N||M===null)return;let e=await Dt(N,!M);e.ok?(ie(e.enabled),g?.()):ja(e.error??D(`could_not_change_the_case_sensitivity`))},I=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Ot(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Ot(e,t,`${a}\\${xo(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?g?.():ja(o.error??D(`could_not_create_the_link`))},_e=async e=>{if(!n)return;let r=await Ea(t);r&&await I(e,n.path,r,x(n.path),e.endsWith(`-copy`))},ve=async e=>{let n=te?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=E(a)===E(t);await I(n,r.path,t,x(r.path),i&&!o)}},ye=async()=>{let t=(await H(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&Va({paths:t})},be=()=>{let e=te?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:D(`cancel_selected_link`),icon:(0,q.jsx)(Ai,{size:14}),onSelect:()=>Va(null)},...t?[{label:D(`hard_link`),icon:(0,q.jsx)(pi,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard`)}]:[],{label:D(`symbolic_link`),icon:(0,q.jsx)(pi,{size:14}),separatorBefore:!t,onSelect:()=>void ve(`symbolic-file`)},...n?[{label:D(`directory_junction`),icon:(0,q.jsx)(fi,{size:14}),onSelect:()=>void ve(`junction`)},{label:D(`smart_copy`),icon:(0,q.jsx)(ha,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`smart-copy`)},{label:D(`smart_mirror`),icon:(0,q.jsx)(ha,{size:14}),onSelect:()=>void ve(`smart-mirror`)},{label:D(`multi_version_smart_copy`),icon:(0,q.jsx)(ha,{size:14}),onSelect:()=>void ve(`multi-version-smart-copy`)},{label:D(`hardlink_copy`),icon:(0,q.jsx)(ha,{size:14}),separatorBefore:!0,onSelect:()=>void ve(`hard-copy`)},{label:D(`symbolic_link_copy`),icon:(0,q.jsx)(ha,{size:14}),onSelect:()=>void ve(`symbolic-copy`)}]:[]]};if(e.background){if(p&&F.push({label:D(`new_folder`),icon:(0,q.jsx)(vi,{size:16}),shortcut:Jt(r.newFolder),onSelect:p}),m||p){let e=[];p&&(e.push({label:D(`folder`),icon:(0,q.jsx)(fi,{size:14}),onSelect:()=>p(!1)}),O||e.push({label:D(`case_sensitive_folder`),icon:(0,q.jsx)(ma,{size:14}),onSelect:()=>p(!0)})),m&&e.push(...Pa.map((e,t)=>({label:`${D(e.label)} (${e.extension})`,icon:(0,q.jsx)(pi,{size:14}),separatorBefore:t===0,onSelect:()=>m(e.extension)}))),P.push({label:D(`new`),icon:(0,q.jsx)(vi,{size:14}),children:e,onSelect:()=>void 0})}if(O||P.push({label:D(`create_link`),icon:(0,q.jsx)(va,{size:14}),disabled:!te,children:be(),onSelect:()=>void 0}),h)return(0,q.jsx)(oo,{items:P,onClose:a,quick:F,x:e.x,y:e.y});!O&&s&&P.push({label:D(`open_in_new_tab`),icon:(0,q.jsx)(vi,{size:14}),onSelect:()=>s(t,!0)}),P.push({label:D(`copy_as_path`),icon:(0,q.jsx)(ha,{size:14}),onSelect:()=>void he([t])}),_&&P.push({label:D(`add_to_file_tray`),icon:(0,q.jsx)(ua,{size:14}),onSelect:()=>_([t])}),!O&&(de?y:v)&&P.push({label:D(de?`remove_from_favorites`:`add_to_favorites`),icon:de?(0,q.jsx)(pa,{size:14}):(0,q.jsx)(fa,{size:14}),onSelect:()=>de?y?.([t]):v?.([t])}),!O&&M!==null&&P.push({label:D(`case_sensitive_names`),icon:(0,q.jsx)(ma,{size:14}),checked:M,onSelect:()=>void ge()}),!O&&C&&(P.push({label:D(`open_in_terminal`),icon:(0,q.jsx)(ca,{size:14}),onSelect:()=>void Mt(t)}),P.push({label:D(`show_in_explorer`),icon:(0,q.jsx)(fi,{size:14}),separatorBefore:!0,onSelect:()=>void Lt(t)})),f&&F.push({label:D(`paste`),icon:(0,q.jsx)(_a,{size:16}),disabled:!i,shortcut:Jt(r.paste),onSelect:()=>f(t)}),O||F.push({label:D(`properties`),icon:(0,q.jsx)(Si,{size:16}),shortcut:Jt(r.properties),onSelect:()=>void At([t])})}else{if(s&&P.push({label:D(`open`),icon:(0,q.jsx)(bi,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&c?.(n.path)}}),n?.isDirectory&&(s&&P.push({label:D(`open_in_new_tab`),icon:(0,q.jsx)(vi,{size:14}),onSelect:()=>s(n.path,!0)}),f&&P.push({label:D(`paste_into_folder`),icon:(0,q.jsx)(_a,{size:14}),disabled:!i,onSelect:()=>f(n.path)}),O||P.push({label:D(`open_in_terminal`),icon:(0,q.jsx)(ca,{size:14}),onSelect:()=>void Mt(n.path)})),!O&&se&&n&&!n.isDirectory&&re(n.path)&&S&&P.push({label:D(`extract_archive`),icon:(0,q.jsx)(zi,{size:14}),separatorBefore:!0,children:[{label:D(`extract_here`),icon:(0,q.jsx)(zi,{size:14}),onSelect:()=>S(n.path,`here`)},{label:D(`extract_to_a_folder_named_after_the_archive`),icon:(0,q.jsx)(zi,{size:14}),onSelect:()=>S(n.path,`named`)},{label:D(`auto_extract_to_the_current_folder`),icon:(0,q.jsx)(zi,{size:14}),onSelect:()=>S(n.path,`auto`)},{label:D(`extract_to`),icon:(0,q.jsx)(fi,{size:14}),separatorBefore:!0,onSelect:()=>S(n.path,`choose`)}],onSelect:()=>void 0}),!O&&se&&n){let e=[];if(A.loading)e.push({label:D(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of A.recommended)e.push({label:t.name,group:D(`suggested_apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(Vi,{size:14}),onSelect:()=>void Pt(n.path,t.path).then(e=>{e||jt(n.path)})});for(let t of A.other)e.push({label:t.name,group:D(`other_apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(Vi,{size:14}),onSelect:()=>void Pt(n.path,t.path).then(e=>{e||jt(n.path)})})}e.push({label:D(`choose_another_app`),icon:(0,q.jsx)(Vi,{size:14}),separatorBefore:!0,onSelect:()=>void jt(n.path)}),P.push({label:D(`open_with_2`),icon:(0,q.jsx)(Vi,{size:14}),children:e,onSelect:()=>void jt(n.path)})}if(O||P.push({label:D(`compress`),icon:(0,q.jsx)(zi,{size:14}),separatorBefore:!0,children:[{label:D(`compress_to_zip`),icon:(0,q.jsx)(zi,{size:14}),onSelect:()=>void me(e.paths)},{label:D(`compress_to`),icon:(0,q.jsx)(zi,{size:14}),onSelect:()=>w?.(e.paths,fe())}],onSelect:()=>void 0}),!O&&(e?.paths.length??0)>0){let e=[{label:D(`select_link_source`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>void ye()},...te?[{label:D(`cancel_selected_link`),icon:(0,q.jsx)(Ai,{size:14}),onSelect:()=>Va(null)}]:[],...se&&n?n.isDirectory?[{label:D(`symbolic_link`),icon:(0,q.jsx)(fi,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-folder`)},{label:D(`directory_junction`),icon:(0,q.jsx)(fi,{size:14}),onSelect:()=>void _e(`junction`)},{label:D(`smart_copy`),icon:(0,q.jsx)(ha,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:D(`smart_mirror`),icon:(0,q.jsx)(ha,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:D(`multi_version_smart_copy`),icon:(0,q.jsx)(ha,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:D(`hardlink_copy`),icon:(0,q.jsx)(ha,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:D(`symbolic_link_copy`),icon:(0,q.jsx)(ha,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[{label:D(`symbolic_link`),icon:(0,q.jsx)(pi,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-file`)},{label:D(`hard_link`),icon:(0,q.jsx)(pi,{size:14}),onSelect:()=>void _e(`hard`)}]:[]];P.push({label:D(`create_link`),icon:(0,q.jsx)(va,{size:14}),children:e,onSelect:()=>void 0})}!O&&n?.isDirectory&&M!==null&&P.push({label:D(`case_sensitive_names`),icon:(0,q.jsx)(ma,{size:14}),checked:M,onSelect:()=>void ge()}),P.push({label:D(`copy_as_path`),icon:(0,q.jsx)(ha,{size:14}),onSelect:()=>void he(e.paths)}),_&&P.push({label:D(`add_to_file_tray`),icon:(0,q.jsx)(ua,{size:14}),onSelect:()=>_(e.paths)}),!O&&(de?y:v)&&P.push({label:D(de?`remove_from_favorites`:`add_to_favorites`),icon:de?(0,q.jsx)(pa,{size:14}):(0,q.jsx)(fa,{size:14}),onSelect:()=>de?y?.(ue):v?.(ue)}),O||P.push({label:D(`show_in_explorer`),icon:(0,q.jsx)(fi,{size:14}),separatorBefore:!0,onSelect:()=>void Lt(ue[0])}),d&&F.push({label:D(`cut`),icon:(0,q.jsx)(ga,{size:16}),shortcut:Jt(r.cut),onSelect:()=>d(e.paths,!0)},{label:D(`copy`),icon:(0,q.jsx)(ha,{size:16}),shortcut:Jt(r.copy),onSelect:()=>d(e.paths,!1)}),se&&n&&l&&F.push({label:D(`rename`),icon:(0,q.jsx)(Yi,{size:16}),shortcut:Jt(r.rename),onSelect:()=>l(n.path)}),u&&F.push({label:D(`delete`),icon:(0,q.jsx)(Oi,{size:16}),danger:!0,shortcut:Jt(r.delete),onSelect:()=>u(e.paths)}),O||F.push({label:D(`properties`),icon:(0,q.jsx)(Si,{size:16}),shortcut:Jt(r.properties),onSelect:()=>void At(e.paths)})}if(ne.loading)P.push({label:D(`more_actions`),icon:(0,q.jsx)(Vi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(ne.verbs.length>0){let e={items:[],children:new Map};for(let t of ne.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>[...e.items.map(e=>({label:e.label,icon:(0,q.jsx)(bo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void zt(ce,ne.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,n])=>({label:e,children:t(n),onSelect:()=>void 0}))];P.push({label:D(ne.safe?`more_actions`:`more_actions_extensions`),icon:(0,q.jsx)(Vi,{size:14}),separatorBefore:!0,children:t(e),onSelect:()=>void 0})}return(0,q.jsx)(oo,{items:P,onClose:a,quick:F,x:e.x,y:e.y})}function bo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,q.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,q.jsx)(bi,{size:14});case`document`:return(0,q.jsx)(qi,{size:14});case`cut`:return(0,q.jsx)(ga,{size:14});case`copy`:return(0,q.jsx)(ha,{size:14});case`paste`:return(0,q.jsx)(_a,{size:14});case`trash`:return(0,q.jsx)(Oi,{size:14});case`pencil`:return(0,q.jsx)(Yi,{size:14});case`gear`:return(0,q.jsx)(Si,{size:14});case`star`:return(0,q.jsx)(na,{size:14});case`pin`:return(0,q.jsx)(Ci,{size:14});case`executable`:return(0,q.jsx)(Vi,{size:14});case`share`:return(0,q.jsx)(va,{size:14});case`arrow`:return(0,q.jsx)(bi,{size:14});default:return(0,q.jsx)(Ni,{size:14})}}function xo(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function So({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:s,zIndex:c=3200}){let l=o(),[u,d]=(0,L.useState)(null),f=(0,L.useRef)(null),p=t.find(t=>t.value===e)??t[0];return(0,L.useEffect)(()=>{if(!u)return;let e=()=>d(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[u]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Co,{$icon:a!==void 0,"aria-expanded":u!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(u){d(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;d({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:f,style:i&&!a?{width:i}:void 0,title:s??p?.title,type:`button`,children:[a===void 0?(0,q.jsx)(wo,{children:p?.label??``}):(0,q.jsx)(To,{children:a}),a===void 0&&(0,q.jsx)(Eo,{children:(0,q.jsx)(xi,{size:11})})]}),u&&(0,Ua.createPortal)((0,q.jsx)(Do,{"aria-label":l(`options`),"data-select-menu":`true`,$menuZIndex:c,role:`listbox`,style:{bottom:u.bottom,left:u.left,minWidth:u.width,top:u.top},children:t.map(t=>(0,q.jsxs)(Oo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),d(null)},role:`option`,title:t.title,type:`button`,children:[(0,q.jsx)(ko,{children:t.label}),t.value===e&&(0,q.jsx)(ki,{size:11})]},t.value))}),document.body)]})}var Co=v.button`
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
`,wo=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,To=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,Eo=v.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Do=v.div`
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
    ${eo}
`,Oo=v.button`
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
`,ko=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ao=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],jo=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],Mo=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],No=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Po=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function Fo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=o(),a=(0,L.useRef)(null),[s,c]=(0,L.useState)(e),[l,u]=(0,L.useState)(t),[d,f]=(0,L.useState)(`zip`),[p,m]=(0,L.useState)(`5`),[h,g]=(0,L.useState)(`default`),[_,v]=(0,L.useState)(`none`),[y,b]=(0,L.useState)(``),[x,S]=(0,L.useState)(`0`),[C,w]=(0,L.useState)(!1);(0,L.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=Ao.find(e=>e.value===d)??Ao[0],E=d===`zip`||d===`zipx`,ee=_!==`none`,D=E||d===`7z`,te=d===`zip`||d===`7z`,O=async()=>{if(C||!l.trim()||!s||ee&&y.length===0)return;w(!0);let e=await r({directory:s,name:l.trim(),format:d,level:T.level?Number(p):0,method:E?h:null,encryption:D?_:`none`,password:ee?y:void 0,splitSize:te?Number(x):0});w(!1),e&&n()};return(0,Ua.createPortal)((0,q.jsx)(Io,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,q.jsxs)(Lo,{"aria-modal":`true`,role:`dialog`,children:[(0,q.jsx)(Ro,{children:i(`compress_to`)}),(0,q.jsxs)(zo,{children:[(0,q.jsx)(Bo,{children:i(`archive_name`)}),(0,q.jsx)(Vo,{onChange:e=>u(e.target.value),ref:a,value:l,onKeyDown:e=>{e.key===`Enter`&&O()}}),(0,q.jsx)(Ho,{children:T.extension})]}),(0,q.jsxs)(zo,{children:[(0,q.jsx)(Bo,{children:i(`format`)}),(0,q.jsx)(So,{onChange:e=>f(e),options:Ao.map(e=>({value:e.value,label:i(e.label)})),value:d,width:236,zIndex:3700})]}),(0,q.jsxs)(zo,{children:[(0,q.jsx)(Bo,{children:i(`method`)}),(0,q.jsx)(So,{disabled:!E,onChange:g,options:jo.map(e=>({...e,label:i(e.label)})),value:E?h:`default`,width:236,zIndex:3700})]}),(0,q.jsxs)(zo,{children:[(0,q.jsx)(Bo,{children:i(`encryption`)}),(0,q.jsx)(So,{disabled:!D,onChange:e=>{v(e),e===`none`&&b(``)},options:Mo.map(e=>({...e,label:i(e.label)})),value:D?_:`none`,width:236,zIndex:3700})]}),ee&&(0,q.jsxs)(zo,{children:[(0,q.jsx)(Bo,{children:i(`password`)}),(0,q.jsx)(Vo,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,q.jsxs)(zo,{children:[(0,q.jsx)(Bo,{children:i(`split_volumes`)}),(0,q.jsx)(So,{disabled:!te,onChange:S,options:No.map(e=>({...e,label:i(e.label)})),value:te?x:`0`,width:236,zIndex:3700})]}),(0,q.jsxs)(zo,{children:[(0,q.jsx)(Bo,{children:i(`compression_level`)}),(0,q.jsx)(So,{disabled:!T.level,onChange:m,options:Po.map(e=>({...e,label:i(e.label)})),value:T.level?p:d===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,q.jsxs)(zo,{$stack:!0,children:[(0,q.jsx)(Bo,{children:i(`destination`)}),(0,q.jsxs)(Uo,{children:[(0,q.jsx)(Wo,{title:s,children:s}),(0,q.jsx)(Ko,{disabled:C,onClick:()=>void Ea(s).then(e=>{e&&c(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,q.jsxs)(Go,{children:[(0,q.jsx)(Ko,{disabled:C,onClick:n,type:`button`,children:i(`cancel`)}),(0,q.jsx)(qo,{disabled:C||!l.trim()||ee&&y.length===0,onClick:()=>void O(),type:`button`,children:i(C?`compressing`:`compress`)})]})]})}),document.body)}var Io=v.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${io}
`,Lo=v.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${$a}
`,Ro=v.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,zo=v.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Bo=v.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Vo=v.input`
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
`,Ho=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Uo=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Wo=v.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Go=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Ko=v.button`
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
`,qo=v(Ko)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Jo({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:s}){let c=o(),l=(0,L.useRef)(null);return(0,L.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),s()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,s]),e?(0,Ua.createPortal)((0,q.jsx)(Yo,{onPointerDown:e=>{e.target===e.currentTarget&&s()},children:(0,q.jsxs)(Xo,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(Zo,{children:t}),(0,q.jsx)(Qo,{children:n}),(0,q.jsxs)($o,{children:[(0,q.jsx)(es,{onClick:s,type:`button`,children:c(`cancel`)}),(0,q.jsx)(es,{$danger:i,onClick:a,ref:l,type:`button`,children:r})]})]})}),document.body):null}var Yo=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${io}
`,Xo=v.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${$a}
`,Zo=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Qo=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,$o=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,es=v.button`
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
`,ts=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),ns=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),rs=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),is=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function as({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:s,emptyNote:c}){let l=o(),[u,d]=(0,L.useState)(!1),[f,p]=(0,L.useState)(!1),[m,h]=(0,L.useState)(!1),[g,_]=(0,L.useState)(0),[v,y]=(0,L.useState)(0),[b,x]=(0,L.useState)(null),[S,C]=(0,L.useState)(!1),[w,T]=(0,L.useState)(!1),E=(0,L.useRef)(null),ee=(0,L.useRef)(null),D=(0,L.useRef)(null),te=(0,L.useRef)(null),[O,ne]=(0,L.useState)(()=>{let e=qn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),k=e?.path??null,A=pn(k),j=e?os(e.name):``,re=!!e&&!e.isDirectory&&ts.has(j),M=!!e&&!e.isDirectory&&ns.has(j),ie=!!e&&!e.isDirectory&&rs.has(j),ae=!!e&&!e.isDirectory&&is.has(j),oe=!!e&&!e.isDirectory&&j===`pdf`,se=hn(re?A:null,512,e?.modified??0),ce=_n(ie?A:null,e?.modified??0,j),N=_n(re||M?A:null,e?.modified??0,j),P=vn(oe?A:null,e?.modified??0),F=fn(!re&&!M&&!ie&&!ae&&!oe?A:null,e?.isDirectory??!1);if((0,L.useEffect)(()=>{d(!1),p(!1),h(!1),_(0),y(0),T(!1)},[k]),(0,L.useEffect)(()=>{if(!A||!ae){x(null),C(!1);return}let e=!0;return C(!0),x(null),ke(A).then(t=>{e&&(x(t),C(!1))},()=>{e&&(x({text:null,truncated:!1,error:l(`could_not_read_this_file`)}),C(!1))}),()=>{e=!1}},[A,ae]),!e&&!c)return null;let le=e=>{D.current={x:e.clientX,width:ee.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},ue=e=>{let t=D.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},de=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},fe=e=>{te.current={y:e.clientY,height:O},e.currentTarget.setPointerCapture(e.pointerId)},pe=e=>{let t=te.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);ne(n),Jn(`yafm.preview.media.height`,n)},me=e=>{te.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,q.jsxs)(cs,{$open:r,children:[r&&(0,q.jsx)(ls,{onPointerDown:le,onPointerMove:ue,onPointerUp:de,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsx)(us,{ref:ee,style:{width:r?t:0},children:(0,q.jsxs)(ds,{children:[(0,q.jsx)(fi,{size:56}),(0,q.jsx)(`span`,{children:c})]})})]});let he=()=>{let e=E.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,q.jsxs)(cs,{$open:r,children:[r&&(0,q.jsx)(ls,{onPointerDown:le,onPointerMove:ue,onPointerUp:de,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(us,{ref:ee,style:{width:r?t:0},children:[(0,q.jsx)(fs,{style:{height:O},children:re&&N&&!u?(0,q.jsxs)(ms,{onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),children:[(0,q.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:he,onDurationChange:e=>_(e.currentTarget.duration||0),onError:()=>d(!0),onLoadedMetadata:e=>{_(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>p(!1),onPlay:()=>p(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:se??void 0,preload:`metadata`,ref:E,src:N}),(0,q.jsx)(hs,{$visible:!f,onClick:he,title:l(`play`),type:`button`,children:(0,q.jsx)(ya,{size:28})}),(0,q.jsxs)(gs,{$visible:m,onClick:e=>e.stopPropagation(),children:[(0,q.jsxs)(_s,{children:[(0,q.jsx)(`span`,{children:ss(v)}),(0,q.jsx)(`span`,{children:ss(g)})]}),(0,q.jsx)(vs,{"aria-label":l(`seek`),max:g||0,min:0,onChange:e=>{let t=E.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,g||0)})]})]}):M&&N?(0,q.jsx)(`audio`,{controls:!0,src:N}):ie&&ce?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:ce}):oe&&P&&!w?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:P}):oe?(0,q.jsx)(pi,{size:64}):ae?(0,q.jsx)(ys,{children:S||!b?(0,q.jsx)(xs,{children:l(`loading`)}):b.error?(0,q.jsx)(xs,{children:b.error}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(bs,{children:b.text}),b.truncated&&(0,q.jsx)(xs,{children:l(`showing_the_first_256_kb`)})]})}):re&&se?(0,q.jsx)(`img`,{alt:``,src:se}):F?(0,q.jsx)(`img`,{alt:``,src:F}):e.isDirectory?(0,q.jsx)(fi,{size:64}):(0,q.jsx)(pi,{size:64})}),(0,q.jsx)(ps,{onDoubleClick:()=>{ne(210),Jn(`yafm.preview.media.height`,210)},onPointerDown:fe,onPointerMove:pe,onPointerUp:me,title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(Ss,{children:[(0,q.jsx)(Cs,{title:e.path,children:e.name}),s&&(0,q.jsx)(ws,{children:s}),(0,q.jsx)(Ts,{children:e.fields.map(e=>(0,q.jsxs)(Es,{children:[(0,q.jsx)(Ds,{children:e.label}),(0,q.jsx)(Os,{title:e.value,children:e.value})]},e.label))})]})]})]})}function os(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function ss(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var cs=v.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,ls=v.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,us=v.aside`
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
`,ds=v.div`
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
`,fs=v.div`
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
`,ps=v.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ms=v.div`
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
`,hs=v.button`
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
`,gs=v.div`
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
`,_s=v.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,vs=v.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,ys=v.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,bs=v.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,xs=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Ss=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Cs=v.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,ws=v.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Ts=v.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Es=v.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Ds=v.span`
    color: var(--text-muted);
`,Os=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,ks=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],As=[...ks],js={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},Ms={folder:e=>(0,q.jsx)(fi,{size:e}),home:e=>(0,q.jsx)(di,{size:e}),desktop:e=>(0,q.jsx)(Xi,{size:e}),documents:e=>(0,q.jsx)(Zi,{size:e}),downloads:e=>(0,q.jsx)(Qi,{size:e}),pictures:e=>(0,q.jsx)($i,{size:e}),music:e=>(0,q.jsx)(ea,{size:e}),videos:e=>(0,q.jsx)(ta,{size:e}),drive:e=>(0,q.jsx)(mi,{size:e}),image:e=>(0,q.jsx)(Ii,{size:e}),video:e=>(0,q.jsx)(Li,{size:e}),audio:e=>(0,q.jsx)(Ri,{size:e}),text:e=>(0,q.jsx)(Pi,{size:e}),code:e=>(0,q.jsx)(Fi,{size:e}),clock:e=>(0,q.jsx)(Ei,{size:e}),star:e=>(0,q.jsx)(na,{size:e}),file:e=>(0,q.jsx)(pi,{size:e}),archive:e=>(0,q.jsx)(zi,{size:e}),pdf:e=>(0,q.jsx)(Bi,{size:e}),executable:e=>(0,q.jsx)(Vi,{size:e}),font:e=>(0,q.jsx)(Hi,{size:e}),database:e=>(0,q.jsx)(Ui,{size:e}),config:e=>(0,q.jsx)(Wi,{size:e}),spreadsheet:e=>(0,q.jsx)(Gi,{size:e}),presentation:e=>(0,q.jsx)(Ki,{size:e}),document:e=>(0,q.jsx)(qi,{size:e}),app:e=>(0,q.jsx)(Ni,{size:e}),gear:e=>(0,q.jsx)(Si,{size:e}),pin:e=>(0,q.jsx)(Ci,{size:e}),trash:e=>(0,q.jsx)(Oi,{size:e}),overview:e=>(0,q.jsx)(Ji,{size:e}),book:e=>(0,q.jsx)(ra,{size:e}),briefcase:e=>(0,q.jsx)(ia,{size:e}),cloud:e=>(0,q.jsx)(aa,{size:e}),gamepad:e=>(0,q.jsx)(oa,{size:e}),camera:e=>(0,q.jsx)(sa,{size:e}),terminal:e=>(0,q.jsx)(ca,{size:e}),server:e=>(0,q.jsx)(la,{size:e}),package:e=>(0,q.jsx)(ua,{size:e}),globe:e=>(0,q.jsx)(da,{size:e}),heart:e=>(0,q.jsx)(fa,{size:e}),share:e=>(0,q.jsx)(la,{size:e}),favorites:e=>(0,q.jsx)(fa,{size:e})};function Ns(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ps(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??ks)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||As.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Ns(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${js[n]??n}${Fs(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Fs(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Is({panel:e,size:t=16}){let n=mn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,q.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Ms[e.icon]:void 0;if(r)return(0,q.jsx)(q.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,q.jsx)(fi,{size:t});case`recent`:return(0,q.jsx)(Ei,{size:t});case`frequent`:return(0,q.jsx)(na,{size:t});case`drives`:return(0,q.jsx)(mi,{size:t});case`home`:return(0,q.jsx)(di,{size:t});case`share`:return(0,q.jsx)(la,{size:t});case`favorites`:return(0,q.jsx)(fa,{size:t});default:return(0,q.jsx)(fi,{size:t})}}function Ls({place:e,size:t=18}){let n=mn(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,q.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Ms[e.icon]?(0,q.jsx)(q.Fragment,{children:Ms[e.icon](t)}):(0,q.jsx)(fi,{size:t})}var Rs=`#64748b`;function zs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Bs({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:s}){let c=o(),[l,u]=(0,L.useState)(``),[d,f]=(0,L.useState)(`#2dd4bf`),p=(0,L.useRef)(null);(0,L.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||s()},t=e=>{e.key===`Escape`&&s()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,s),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,s)}},[s]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=l.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:d}),u(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,Ua.createPortal)((0,q.jsxs)(Vs,{"data-tag-menu":`true`,ref:p,style:{left:y,top:b},children:[(0,q.jsxs)(Hs,{children:[(0,q.jsx)(`span`,{children:c(`tags`)}),(0,q.jsx)(Us,{onClick:s,title:c(`close`),type:`button`,children:(0,q.jsx)(Ai,{size:11})})]}),(0,q.jsxs)(Ws,{children:[m.length===0&&(0,q.jsx)(Js,{children:c(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,q.jsxs)(Gs,{children:[(0,q.jsx)(Ks,{"aria-label":c(`color_of_tag`,{tag:e}),onChange:t=>_(e,t.target.value),title:c(`change_this_tag_s_color`),type:`color`,value:t}),(0,q.jsxs)(qs,{$color:t,$ink:zs(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,q.jsx)(ki,{size:11}),(0,q.jsx)(`span`,{children:e})]})]},e)})]}),(0,q.jsxs)(Ys,{children:[(0,q.jsx)(Ks,{"aria-label":c(`color_of_the_new_tag`),onChange:e=>f(e.target.value),title:c(`color_of_the_new_tag`),type:`color`,value:d}),(0,q.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:c(`new_tag`),spellCheck:!1,value:l}),(0,q.jsx)(Xs,{onClick:v,type:`button`,children:c(`add`)})]})]}),document.body)}var Vs=v.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${$a}
`,Hs=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Us=v.button`
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
`,Ws=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Gs=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ks=v.input`
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
`,qs=v.button`
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
`,Js=v.span`
    font-size: 11px;
    color: var(--text-muted);
`,Ys=v.div`
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
`,Xs=v.button`
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
`,Zs={file:pi,folder:fi,text:Pi,code:Fi,image:Ii,video:Li,audio:Ri,archive:zi,pdf:Bi,executable:Vi,font:Hi,database:Ui,config:Wi,spreadsheet:Gi,presentation:Ki,document:qi},Qs={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function $s(e){let t=e.lastIndexOf(`.`);return t>0?Qs[e.slice(t).toLowerCase()]??`file`:`file`}function ec({name:e,size:t}){let n=Zs[e??`file`]??pi;return(0,q.jsx)(n,{size:t})}function tc({path:e,name:t,isDirectory:n,size:r=18}){let i=fn(e,n);return i?(0,q.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,q.jsx)(fi,{size:r}):(0,q.jsx)(ec,{name:$s(t),size:r})}var nc=`application/x-yafm-paths`,rc=[nc,`text/uri-list`];function ic(e){return e?.types.some(e=>rc.includes(e.toLowerCase()))??!1}function ac(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(nc);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(sc).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var oc=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function sc(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return oc?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function cc(e,t,n=!0){e.dataTransfer.setData(nc,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function lc({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=o(),[h,g]=(0,L.useState)(()=>new Set),[_,v]=(0,L.useState)(!1),y=(0,L.useRef)(null),x=(0,L.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),S=(0,L.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),C=(0,L.useRef)(null);if((0,L.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=C.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&ic(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=ac(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,c]),!r)return null;let w=new Set([...e,...t].map(e=>e.path)),T=w.size>0&&[...w].every(e=>h.has(e)),E=w.size,ee=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{g(T?new Set:w)},te=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},O=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},ne=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},k=()=>{let e=x.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},A=()=>{let e=x.map(e=>e.path);e.length!==0&&f(e)},j=()=>{let e=new Map;for(let t of x)e.set(t.path,!0);for(let t of S)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,a,!0),r.length>0&&p(r,a,!1),g(new Set)},re=(e,t)=>{let n=h.has(e.path);return(0,q.jsxs)(xc,{$checked:n,draggable:!0,onClick:()=>ee(e.path),onDragStart:r=>{cc(r,n&&h.size>0?[...new Set([...x,...S].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,q.jsx)(Sc,{$checked:n,onClick:t=>{t.stopPropagation(),ee(e.path)},type:`button`,children:n&&(0,q.jsx)(ki,{size:8})}),(0,q.jsx)(tc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,q.jsxs)(Cc,{children:[(0,q.jsx)(wc,{children:e.name}),(0,q.jsx)(Tc,{children:b(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},M=e=>{ic(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,q.jsxs)(uc,{$dragging:_,"data-tray":`true`,ref:C,style:{left:i.x,top:i.y},onDragEnter:M,onDragOver:M,onDrop:e=>{let{paths:t}=ac(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,q.jsxs)(dc,{onPointerDown:te,onPointerMove:O,onPointerUp:ne,children:[(0,q.jsxs)(fc,{children:[(0,q.jsx)(ua,{size:13}),m(`tray`),(0,q.jsx)(pc,{children:E})]}),(0,q.jsxs)(mc,{onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(hc,{onClick:D,title:m(T?`select_none`:`select_all`),type:`button`,children:m(T?`none`:`all`)}),(0,q.jsx)(hc,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,q.jsx)(gc,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,q.jsx)(Ai,{size:10})})]})]}),(0,q.jsxs)(_c,{children:[(0,q.jsxs)(yc,{children:[m(`in_this_app`),(0,q.jsx)(pc,{children:e.length})]}),e.length===0&&(0,q.jsx)(vc,{children:m(`drag_files_or_folders_here`)}),e.map(e=>re(e,!0)),t.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(yc,{$clipboard:!0,children:[m(`clipboard`),(0,q.jsx)(pc,{children:t.length}),n&&(0,q.jsx)(bc,{children:m(`cut`)})]}),t.map(e=>re(e,n))]})]}),(0,q.jsxs)(Ec,{children:[(0,q.jsx)(Dc,{$plain:!0,disabled:x.length===0,onClick:A,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,q.jsx)(Dc,{disabled:h.size===0||!a,onClick:j,type:`button`,children:m(`move_here`)}),(0,q.jsx)(Dc,{$danger:!0,disabled:x.length===0,onClick:k,type:`button`,children:m(`remove`)})]})]})}var uc=v.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Wa}
    ${$a}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,dc=v.div`
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
`,fc=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    color: var(--text-primary);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
`,pc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,mc=v.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,hc=v.button`
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
`,gc=v.button`
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
`,_c=v.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,vc=v.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,yc=v.div`
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
`,bc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,xc=v.div`
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
`,Sc=v.button`
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
`,Cc=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,wc=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Tc=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ec=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Dc=v.button`
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
`,Oc={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function kc(){return l.available?await l.request(`share.list`):Oc}async function Ac(e,t){return l.available?await l.request(`share.add`,{path:e,mode:t}):Oc}async function jc(e){return l.available?await l.request(`share.remove`,{id:e}):Oc}async function Mc(e,t){return l.available?await l.request(`share.mode`,{id:e,mode:t}):Oc}async function Nc(){return l.available?(await l.request(`share.peers`)).peers??[]:[]}async function Pc(){return l.available?(await l.request(`share.peers.refresh`)).peers??[]:[]}async function Fc(e,t){l.available&&await l.request(`share.pair.start`,{host:e,port:t})}async function Ic(e,t){l.available&&await l.request(`share.pair.respond`,{requestId:e,accept:t})}async function Lc(e,t){l.available&&await l.request(`share.port`,{mode:t,port:e})}var Rc=`yafm://share/`;function zc(e){return e.toLowerCase().startsWith(Rc)}function Bc(e){if(!zc(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Vc(e,t,n=``){let r=`${Rc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Hc(e){let t=Bc(e);if(!t||!l.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await l.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Vc(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Vc(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Uc(e){let t=Bc(e);if(!t||!l.available)throw Error(`This shared file is only available in the desktop app.`);let n=await l.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Wc(e){await we(await Uc(e))}async function Gc(){return l.available?(await l.request(`share.devices.list`)).devices??[]:[]}async function Kc(e,t,n){return l.available?(await l.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function qc(e){return l.available?(await l.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function Jc(){return l.available?(await l.request(`share.access.status`)).hasPassword:!1}async function Yc(e){return l.available?(await l.request(`share.access.password`,{password:e})).hasPassword:!1}var Xc=new Map,Zc=new Set,Qc=0;function $c(){Qc+=1;for(let e of Zc)e()}function el(e,t){t?Xc.set(e,t):Xc.delete(e),$c()}function tl(e){return Xc.has(e)}function nl(e,t,n){Xc.get(e)?.(t,n)}function rl(e){return Zc.add(e),()=>Zc.delete(e)}function il(){return Qc}function al(e){return(0,L.useSyncExternalStore)(rl,il,il),{available:tl(e),open:(t,n)=>nl(e,t,n)}}function ol(e){return[...Xc.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function sl(e){return(0,L.useSyncExternalStore)(rl,il,il),{available:ol(e).length>0,open:(t,n)=>{let r=ol(e).at(-1);r&&nl(r,t,n)}}}var cl=60,ll=300,ul=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],dl=new Set,fl=`yafm.columnWidths`,pl=`yafm.reset-column-widths`,ml=64,hl=720,gl=160,_l=190,vl=120;function yl({listing:e,loading:t,error:n,find:r=bn,view:i,showImages:a,imageStripHeight:s=_l,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:f,showCheckboxes:p=!0,openOnSingleClick:m=!1,shortcuts:h=Ut,enableShortcuts:g=!0,refreshToken:_=0,onRefresh:v,onRename:y,onClipboardChanged:b,cutPaths:S=dl,onTransfer:w,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:te,onPaste:O,confirmDelete:ne=!1,previewVideoAudio:k=!1,previewVideoAutoplay:A=!1,showDetails:j=!0,onPreviewInfo:re,onActivate:M,groupOf:ie,onGridScroll:se,gridFooter:ce,allowBackgroundMenu:P=!0,readOnly:F=!1,onSelectionChange:le,onSelectionCountChange:ue,selectionMenuRequest:de,selectionMenuId:fe,singleSelect:pe=!1,pendingRename:me=null,pendingRenameToken:he=0,selectMatchesToken:ge=0}){let I=o(),_e=In(),ve=(0,L.useRef)(null),ye=(0,L.useRef)(null),be=(0,L.useRef)(null),R=(0,L.useRef)(null),[xe,Se]=(0,L.useState)(ll),[Ce,we]=(0,L.useState)({top:0,height:640}),Te=(0,L.useRef)(null),Ee=(0,L.useRef)(null),[De,Oe]=(0,L.useState)(null),[ke,Ae]=(0,L.useState)(s),[je,Me]=(0,L.useState)(()=>new Set),[Ne,Pe]=(0,L.useState)(()=>Yn(fl)??{}),Fe=(0,L.useRef)(je),z=(0,L.useRef)([]);Fe.current=je,(0,L.useEffect)(()=>le?.([...je]),[je,le]),(0,L.useEffect)(()=>ue?.(je.size),[je,ue]),(0,L.useEffect)(()=>{let e=de;if(!e||e.token===Re.current)return;Re.current=e.token;let t=[...Fe.current];t.length!==0&&(Le({x:e.x,y:e.y,paths:t,background:!1}),vt().then(Ze,()=>Ze(!1)))},[de]);let[Ie,Le]=(0,L.useState)(null),Re=(0,L.useRef)(0),[ze,Be]=(0,L.useState)(null),[B,Ve]=(0,L.useState)(null),[He,Ue]=(0,L.useState)(null),We=(0,L.useRef)(He);We.current=He;let Ge=(0,L.useRef)(0),Ke=(0,L.useRef)(M);Ke.current=M;let[qe,Je]=(0,L.useState)(()=>{let e=qn(`yafm.preview.width`,320);return e>=220?e:320}),Ye=(0,L.useCallback)(e=>{Je(e),Jn(`yafm.preview.width`,e)},[]),[Xe,Ze]=(0,L.useState)(!1),Qe=(0,L.useCallback)((e,t)=>{let n=[...Fe.current];n.length!==0&&(Le({x:e,y:t,paths:n,background:!1}),vt().then(Ze,()=>Ze(!1)))},[]);(0,L.useEffect)(()=>{if(fe)return el(fe,je.size>0?Qe:null),()=>el(fe,null)},[fe,je,Qe]),(0,L.useEffect)(()=>{Me(new Set),Ue(null),Le(null),Ee.current=null},[e?.path]),(0,L.useEffect)(()=>{Ae(s)},[s]),(0,L.useEffect)(()=>{Me(new Set),Ue(null),Ee.current=null},[_]);let $e=e=>{Te.current={y:e.clientY,height:ke},e.currentTarget.setPointerCapture(e.pointerId)},et=e=>{let t=Te.current;if(!t)return;let n=Math.max(vl,Math.round(window.innerHeight*.7));Ae(Math.min(n,Math.max(vl,t.height+t.y-e.clientY)))},tt=e=>{Te.current&&(Te.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(ke))},nt=()=>{Ae(_l),c?.(_l)},rt=r.query.length>0,it=(0,L.useMemo)(()=>ul.filter(e=>i.columns?.includes(e.id)),[i.columns]),at=i.columns?.includes(`linkTarget`)??!1,ot=(0,L.useCallback)(e=>Math.min(hl,Math.max(ml,Ne[e.id]??e.width)),[Ne]),st=(0,L.useMemo)(()=>`minmax(160px, 1fr) ${it.map(e=>`${ot(e)}px`).join(` `)}`.trim(),[it,ot]),ct=(0,L.useRef)(null),lt=(0,L.useRef)(null),ut=()=>Math.floor(lt.current?.getBoundingClientRect().width??gl),dt=e=>{let t=it[0];t&&(e.preventDefault(),e.stopPropagation(),ct.current={left:{id:t.id,start:ot(t)},startX:e.clientX,nameStart:ut()})},ft=(e,t)=>{let n=it[t],r=it[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),ct.current={left:{id:n.id,start:ot(n)},right:{id:r.id,start:ot(r)},startX:e.clientX,nameStart:0})},pt=e=>Pe(t=>{let n={...t};return delete n[e],Xn(fl,n),n});(0,L.useEffect)(()=>{let e=e=>{let t=ct.current;if(!t)return;let n=e.clientX-t.startX;Pe(e=>{if(!t.right){let r=Math.max(0,t.nameStart-gl),i=Math.min(Math.min(hl,t.left.start+r),Math.max(ml,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(hl,Math.max(ml,t.left.start+n)),a=Math.min(Math.min(hl,r-ml),Math.max(Math.max(ml,r-hl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{ct.current&&(ct.current=null,Pe(e=>(Xn(fl,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,L.useEffect)(()=>{let e=()=>Pe(()=>(Xn(fl,{}),{}));return window.addEventListener(pl,e),()=>window.removeEventListener(pl,e)},[]);let V=(0,L.useMemo)(()=>e?Sl(e.entries.map(t=>{let n=t.isDirectory?Ln(_e,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:rt?xn(i,r):null,tags:e.tags[t.name]??[],cut:S.has(t.fullPath)}}).filter(e=>!rt||r.mode===`dim`||e.ranges!==null),i,e,I):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,rt,r,_e,i.sort,i.sortDescending,I,S]);z.current=V,(0,L.useEffect)(()=>{ge!==0&&Me(new Set(z.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[ge]);let mt=Math.max(40,i.iconSize+20),ht=Math.max(0,Math.floor(Ce.top/mt)-4),gt=Math.min(V.length,ht+Math.ceil(Ce.height/mt)+10),yt=(0,L.useMemo)(()=>V.slice(ht,gt),[V,ht,gt]);(0,L.useEffect)(()=>{let e=R.current;if(!e||i.mode!==`list`)return;let t=()=>we(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,L.useEffect)(()=>{we(e=>({...e,top:0})),R.current&&(R.current.scrollTop=0)},[e?.path]),(0,L.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=V.findIndex(e=>e.entry.fullPath===r.currentPath),t=R.current;if(e<0||!t)return;let n=e*mt;(n<t.scrollTop||n+mt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ve.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,V,mt]);let bt=(0,L.useMemo)(()=>V.slice(0,xe),[V,xe]);(0,L.useEffect)(()=>{let e=ye.current;if(!e||e.length===0)return;let t=e.filter(e=>V.some(t=>N(t.entry.fullPath,e)));if(t.length===0)return;ye.current=null;let n=t[0],r=V.findIndex(e=>N(e.entry.fullPath,n));r>=0&&Se(e=>Math.max(e,r+ll)),Me(new Set(t)),Ee.current=n,i.mode===`list`&&R.current&&r>=0?R.current.scrollTop=Math.max(0,r*mt-R.current.clientHeight/2):requestAnimationFrame(()=>ve.current?.scrollIntoView({block:`nearest`}))},[V,mt,i.mode]),(0,L.useEffect)(()=>{Se(ll)},[e?.path]),(0,L.useEffect)(()=>{if(!r.currentPath)return;let e=V.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&Se(t=>Math.max(t,e+ll))},[r.currentPath,V]);let xt=(0,L.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&Se(e=>Math.min(V.length,e+ll))},[V.length]),H=i.mode===`grid`,Et=(0,L.useMemo)(()=>{if(!H)return[];if(!ie)return Tl(bt,wl);let e=[],t=new Map;for(let n of bt){let r=ie(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[bt,H,ie]),Dt=(0,L.useMemo)(()=>a?V.filter(e=>!e.entry.isDirectory&&Mn(e.entry.name)):[],[V,a]),Ot=Dt.length,jt=(0,L.useMemo)(()=>Dt.slice(0,cl),[Dt]),Nt=(0,L.useMemo)(()=>a?Tl(jt,Cl):[],[jt,a]),Pt=(0,L.useMemo)(()=>V.map(e=>e.entry.fullPath),[V]),Ft=V.length>0&&je.size>=V.length,It=je.size>0&&!Ft,Lt=()=>{pe||(Ft?Ht():Me(new Set(Pt)))},Rt=e?.path??``,zt=(0,L.useCallback)((e,t)=>{if(pe){Ee.current=t,Me(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Me(r=>{if(e.shiftKey&&Ee.current!==null){let e=Pt.indexOf(Ee.current),i=Pt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Pt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),Ee.current=t,e}return Ee.current=t,new Set([t])})},[Pt,pe]),Vt=(0,L.useCallback)(e=>{pe?(Ee.current=e,Me(new Set([e]))):(Ee.current=e,Me(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[pe]),Ht=(0,L.useCallback)(()=>{Ee.current=null,Me(new Set)},[]);(0,L.useEffect)(()=>{if(he===0||!me||Ge.current===he||!e?.entries.some(e=>e.fullPath===me))return;Ge.current=he,Ee.current=me,Me(new Set([me])),Ue({path:me,value:x(me)});let t=V.findIndex(e=>e.entry.fullPath===me),n=R.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*mt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(me)}"]`)?.scrollIntoView({block:`nearest`})})}},[R,e,me,he,mt,V,i.mode]),(0,L.useEffect)(()=>{if(!He)return;let e=V.findIndex(e=>e.entry.fullPath===He.path),t=R.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*mt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(He.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[R,He,mt,V,i.mode]);let Wt=(0,L.useCallback)(()=>Le(null),[]),Gt=(0,L.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,Kt(t)):f?.(e.fullPath,Kt(t))},[d,f]),Jt=(0,L.useCallback)((e,t,n)=>{Oe({entry:e,x:t,y:n})},[]),Yt=(0,L.useRef)(null),Zt=(0,L.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;cc(e,je.has(n)?[...je]:[n])},[je]),Qt=(0,L.useCallback)(e=>{if(!ic(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Yt.current=t?.dataset.directory===`true`?t.dataset.path??Rt:Rt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Rt]),$t=(0,L.useCallback)(e=>{if(F)return;let{paths:t,move:n}=ac(e),r=Yt.current??Rt;Yt.current=null,t.length!==0&&w&&(e.preventDefault(),w(t,r,!e.ctrlKey&&n))},[Rt,w,F]),en=(0,L.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),F||!t&&!P)return;let n=Fe.current;t&&!n.has(t)&&Me(new Set([t])),t&&(Ee.current=t);let r=t?n.has(t)?[...n]:[t]:[];Le({x:e.clientX,y:e.clientY,paths:r,background:!t}),vt().then(Ze,()=>Ze(!1))},[P,Rt]),tn=(0,L.useCallback)(()=>v?.(),[v]),nn=(e,t)=>{Ee.current=e,Me(new Set([e])),t&&Ue({path:e,value:x(e)}),tn()},rn=ze&&(0,q.jsx)(Fo,{initialDirectory:Rt,initialName:ze.name,onCancel:()=>Be(null),onCompress:async e=>{let t=await Bt(ze.paths,e);return!t.ok||!t.path?(ja(t.error??I(`could_not_create_the_archive`)),!1):(nn(t.path,!1),!0)}}),an=async(e,t=!1)=>{let n=e,r=t;if(e.some(zc)){let t=[];for(let n of e)if(!zc(n))t.push(n);else{if(z.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){ja(I(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await Uc(n))}catch(e){ja(e instanceof Error?e.message:I(`the_file_could_not_be_copied`));return}}n=t,r=!1}await _t(n,r)&&(Ze(!0),b?.())},on=async e=>{if(!e)return;let t=await St(e);t.cancelled||(t.ok?(ye.current=t.created,tn(),O?.()):ja(I(`nothing_on_the_clipboard_could_be_pasted_here`)))},sn=async(e,t=!1)=>{if(!Rt)return;let n=e===null?await Tt(Rt,t):await kt(Rt,e);!n.ok||n.path===null?ja(n.error??I(`could_not_create_the_item`)):(Ee.current=n.path,Me(new Set([n.path])),Ue({path:n.path,value:x(n.path)}),tn())},cn=e=>{Me(new Set([e.fullPath])),Ee.current=e.fullPath,Ue({path:e.fullPath,value:e.name})},ln=(0,L.useCallback)(e=>Ue(t=>t&&{...t,value:e}),[]),un=(0,L.useCallback)(()=>Ue(null),[]),dn=(0,L.useCallback)(async()=>{let e=We.current;if(Ue(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=z.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await wt(e.path,t);r.ok?(Ht(),r.path&&y?.(e.path,r.path),tn(),window.setTimeout(()=>tn(),250)):ja(r.error??I(`could_not_rename_the_entry`))},[Ht,y,tn,I]),U=async(e,t=!1)=>{if((t||ne)&&!await fn(e,t))return;let n=await Ct(e,t);if(!n.ok&&n.needsPermanent){if(!await fn(e,!0))return;n=await Ct(e,!0)}if(n.ok)Ht(),tn();else{if(n.cancelled)return;ja(n.error??I(t?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},fn=(0,L.useCallback)((e,t)=>new Promise(n=>Ve({paths:e,permanent:t,resolve:n})),[]),pn=(0,L.useCallback)(e=>{Ve(t=>(t?.resolve(e),null))},[]);(0,L.useEffect)(()=>{if(!g||Ie)return;let e=e=>{if(Xt(e.target))return;Ke.current?.();let t=qt(e),n=[...je],r=n.length===1?V.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Pt.length===0)return;e.preventDefault();let n=Ee.current&&Pt.includes(Ee.current)?Ee.current:je.size===1?[...je][0]:null,r=n?Pt.indexOf(n):-1,i=t===`home`?0:t===`end`?Pt.length-1:Math.max(0,Math.min(Pt.length-1,r+(t===`arrowdown`?1:-1))),a=Pt[i];Me(new Set([a])),Ee.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===h.copy?i(()=>{n.length>0&&an(n)}):t===h.cut?i(()=>{n.length>0&&an(n,!0)}):t===h.paste?i(()=>void on(Rt)):t===h.delete?i(()=>{n.length>0&&U(n)}):t===h.deletePermanently?i(()=>{n.length>0&&U(n,!0)}):t===h.selectAll?i(()=>{Me(new Set(Pt)),Ee.current=Pt[0]??null}):t===h.invertSelection?i(()=>{Me(new Set(Pt.filter(e=>!je.has(e)))),Ee.current=Pt[0]??null}):t===h.rename&&r?i(()=>void cn(r)):t===h.open&&r?i(()=>{r.isDirectory?d(r.fullPath):f?.(r.fullPath)}):t===h.newFolder||t===`f10`?i(()=>void sn(null)):t===h.terminal?i(()=>void Mt(Rt)):t===h.properties&&i(()=>void At(n.length>0?n:Rt?[Rt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Pt,an,sn,Rt,g,Ie,d,f,on,U,cn,V,je,h]);let mn=B&&(0,q.jsx)(Jo,{confirmLabel:B.permanent?I(`delete`):I(`move`),danger:B.permanent,message:B.permanent?I(`permanently_delete_target_this_cannot_be_undone`,{target:B.paths.length===1?I(`this_item`):I(`count_items`,{count:B.paths.length})}):I(`move_target_to_the_recycle_bin`,{target:B.paths.length===1?I(`this_item`):I(`count_items`,{count:B.paths.length})}),onCancel:()=>pn(!1),onConfirm:()=>pn(!0),open:!0,title:B.permanent?I(`delete_permanently`):I(`move_to_the_recycle_bin`)}),W=(0,L.useMemo)(()=>{if(!e||je.size===0)return null;let t=Pt.find(e=>je.has(e));return t?V.find(e=>e.entry.fullPath===t)?.entry??null:null},[Pt,e,V,je]),G=(0,L.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:x(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:I(`type`),value:I(`folder`)},{label:I(`location`),value:e.parent??`—`},{label:I(`path`),value:e.path},{label:I(`size`),value:C(t)},{label:I(`items`),value:oe(I,n,`k_1_item`,`count_items`)},{label:I(`modified`),value:`—`},{label:I(`created`),value:`—`},{label:I(`attributes`),value:`—`}]}},[e,I]),K=(0,L.useMemo)(()=>{if(!W||!e)return null;let t=W.isDirectory?e.folderSizes[W.name]:void 0,n=e.tags[W.name]??[],r=W.name.lastIndexOf(`.`),i=r>0&&r<W.name.length-1?W.name.slice(r+1).toUpperCase():`—`;return{name:W.name,path:W.fullPath,isDirectory:W.isDirectory,size:W.size,modified:W.modified,created:W.created,fields:[{label:I(`type`),value:Ol(W,I)},...W.isEncrypted?[{label:I(`encryption`),value:I(`password_required`)}]:[],{label:I(`extension`),value:W.isDirectory?`—`:i},{label:I(`location`),value:e.path},{label:I(`full_path`),value:W.fullPath},{label:I(`size`),value:W.isDirectory?t===void 0?`—`:C(t):C(W.size)},...W.isDirectory?[{label:I(`items`),value:`${e.counts[W.name]??`—`}`}]:[],{label:I(`modified`),value:ae(W.modified)},{label:I(`created`),value:ae(W.created)},{label:I(`link_status`),value:W.linkTarget==null?W.linkCount>1?I(`hard_link`):`—`:W.linkValid?`ok`:I(`broken`)},...W.linkTarget?[{label:I(`target`),value:W.linkTarget}]:[],...W.linkCount>1?[{label:I(`links`),value:String(W.linkCount)}]:[],{label:I(`attributes`),value:[W.isHidden?I(`hidden`):``,W.isSystem?I(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:I(`tags`),value:n.join(`, `)}]:[]]}},[e,W,I]),hn=Ie?.paths.length===1?Ie.paths[0]:null,gn=hn?V.find(e=>e.entry.fullPath===hn)?.entry:void 0,_n=gn?{path:gn.fullPath,isDirectory:gn.isDirectory}:null,vn=K??G,yn=(0,L.useRef)(re);yn.current=re,(0,L.useEffect)(()=>{yn.current?.(vn)},[re,vn]);let Sn=j&&vn&&(0,q.jsx)(as,{info:vn,onWidth:Ye,selectionNote:je.size>1?oe(I,je.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:k,videoAutoplay:A,width:qe});return n&&!e?(0,q.jsx)(Mu,{children:(0,q.jsx)(Pu,{children:n})}):!e&&!t?(0,q.jsx)(Mu,{children:(0,q.jsx)(Nu,{children:I(`nothing_selected`)})}):i.mode===`grid`?(0,q.jsxs)(Yl,{onPointerDown:M,children:[(0,q.jsxs)(Xl,{children:[(0,q.jsxs)(iu,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Ht()},onContextMenu:e=>en(e),onDragOver:Qt,onDragStart:Zt,onDrop:$t,onScroll:e=>{se?.(e.currentTarget),xt(e.currentTarget)},children:[p&&V.length>0&&(0,q.jsxs)(Kl,{children:[(0,q.jsx)(Wl,{$checked:!pe&&Ft,$partial:!pe&&It,"aria-label":I(Ft?`select_none`:`select_all`),disabled:pe,onClick:e=>{e.stopPropagation(),Lt()},title:I(Ft?`select_none`:`select_all`),type:`button`,children:Ft?(0,q.jsx)(ki,{size:10}):It?(0,q.jsx)(Gl,{}):null}),(0,q.jsx)(`span`,{children:I(Ft?`select_none`:`select_all`)})]}),t&&!e?(0,q.jsx)(lu,{$size:i.gridSize,children:(0,q.jsx)(Pl,{size:i.gridSize})}):(0,q.jsx)(Il,{counts:e?.counts,currentPath:rt?r.currentPath:null,groups:Et,gridSize:i.gridSize,innerRef:ve,onContextMenu:en,onOpen:d,onOpenFile:f,onRenameCancel:un,onRenameChange:ln,onRenameCommit:dn,onSelect:zt,onToggle:Vt,openOnSingleClick:m,renaming:He,searching:rt,selected:je,showCheckboxes:p,showTarget:at}),!t&&e&&V.length===0&&(0,q.jsx)(ju,{children:(0,q.jsx)(Nu,{children:n??(rt&&r.mode===`hide`?I(`no_entries_match_the_search`):I(`this_folder_is_empty`))})}),ce]}),Ie&&(0,q.jsx)(yo,{canPaste:Xe,directory:Rt,allowCompression:!0,menu:Ie,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:te,onArchiveCreated:nn,onClose:Wt,onCompressTo:(e,t)=>Be({paths:e,name:t}),onCopy:an,onCreateFile:e=>void sn(e),onCreateFolder:e=>void sn(null,e),onDelete:U,onOpen:d,onOpenFile:f,onPaste:on,onRefresh:tn,onRename:e=>{let t=V.find(t=>t.entry.fullPath===e)?.entry;t&&cn(t)},shortcuts:h,target:_n}),rn,mn]}),Sn]}):(0,q.jsxs)(Yl,{onPointerDown:M,children:[(0,q.jsxs)(Xl,{children:[(0,q.jsxs)(Zl,{onScroll:e=>{R.current&&R.current.scrollLeft!==e.currentTarget.scrollLeft&&(R.current.scrollLeft=e.currentTarget.scrollLeft)},ref:be,style:{gridTemplateColumns:st},children:[(0,q.jsxs)(Vl,{ref:lt,children:[p&&(0,q.jsx)(Wl,{$checked:!pe&&Ft,$partial:!pe&&It,"aria-label":I(Ft?`select_none`:`select_all`),disabled:pe,onClick:e=>{e.stopPropagation(),Lt()},title:I(Ft?`select_none`:`select_all`),type:`button`,children:Ft?(0,q.jsx)(ki,{size:10}):It?(0,q.jsx)(Gl,{}):null}),(0,q.jsxs)(Ql,{onClick:()=>l(`name`),type:`button`,children:[I(`name`),bl(i,`name`)]}),(0,q.jsx)(Ul,{"aria-label":I(`resize_column`),onDoubleClick:()=>it[0]&&pt(it[0].id),onPointerDown:dt,role:`separator`})]}),it.map((e,t)=>(0,q.jsxs)(Hl,{children:[(0,q.jsxs)(Ql,{onClick:()=>l(e.id),type:`button`,children:[I(e.label),bl(i,e.id)]}),t<it.length-1&&(0,q.jsx)(Ul,{"aria-label":I(`resize_column`),onDoubleClick:()=>pt(e.id),onPointerDown:e=>ft(e,t),role:`separator`})]},e.id))]}),(0,q.jsxs)($l,{onClick:e=>{e.target===e.currentTarget&&Ht()},onContextMenu:e=>en(e),onDragOver:Qt,onDragStart:Zt,onDrop:$t,onScroll:e=>{be.current&&be.current.scrollLeft!==e.currentTarget.scrollLeft&&(be.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;we(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:R,children:[t&&!e?(0,q.jsx)(Nl,{template:st,columns:it.length}):(0,q.jsxs)(q.Fragment,{children:[ht>0&&(0,q.jsx)(`div`,{style:{height:ht*mt}}),yt.map(t=>{let n=t.entry.fullPath;return(0,q.jsx)(Rl,{current:rt&&n===r.currentPath,dim:rt&&t.ranges===null,height:mt,iconSize:i.iconSize,innerRef:ve,listing:e,onContextMenu:en,onOpen:Gt,onRenameCancel:un,onRenameChange:ln,onRenameCommit:dn,onSelect:zt,onTagEdit:Jt,onToggle:Vt,openOnSingleClick:m,renaming:He?.path===n?{value:He.value}:null,row:t,selected:je.has(n),showCheckboxes:p,showTarget:at,template:st,visible:it},n)}),gt<V.length&&(0,q.jsx)(`div`,{style:{height:(V.length-gt)*mt}})]}),!t&&e&&V.length===0&&(0,q.jsx)(Mu,{children:(0,q.jsx)(Nu,{children:n??(rt&&r.mode===`hide`?I(`no_entries_match_the_search`):I(`this_folder_is_empty`))})})]}),a&&Dt.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(eu,{onDoubleClick:nt,onPointerDown:$e,onPointerMove:et,onPointerUp:tt,title:I(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(tu,{style:{height:ke},children:[(0,q.jsxs)(nu,{children:[I(`preview`),(0,q.jsx)(ru,{children:Ot>cl?`${jt.length} / ${Ot}`:Ot})]}),(0,q.jsx)(iu,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Ht()},onContextMenu:e=>en(e),children:(0,q.jsx)(Il,{counts:e?.counts,currentPath:rt?r.currentPath:null,groups:Nt,gridSize:i.gridSize,onContextMenu:en,onOpen:d,onOpenFile:f,onSelect:zt,onToggle:Vt,openOnSingleClick:m,searching:rt,selected:je,showCheckboxes:p,showTarget:at})})]})]}),De&&e&&(0,q.jsx)(Bs,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(De.entry.name,e,t),onClose:()=>Oe(null),tags:e.tags[De.entry.name]??[],x:De.x,y:De.y}),Ie&&(0,q.jsx)(yo,{canPaste:Xe,directory:Rt,allowCompression:!0,menu:Ie,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:te,onArchiveCreated:nn,onClose:Wt,onCompressTo:(e,t)=>Be({paths:e,name:t}),onCopy:an,onCreateFile:e=>void sn(e),onCreateFolder:e=>void sn(null,e),onDelete:U,onOpen:d,onOpenFile:f,onPaste:on,onRefresh:tn,onRename:e=>{let t=V.find(t=>t.entry.fullPath===e)?.entry;t&&cn(t)},shortcuts:h,target:_n}),rn,mn]}),Sn]})}function bl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var xl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Sl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Ol(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:xl.compare(String(r),String(i));return t.sortDescending?-o:o})}var Cl=kn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&jn(t.entry.name)===e})),wl=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...Cl.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function Tl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function El(e){return Math.max(24,Math.min(e-56,160))}var Dl={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Ol(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`internet_shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`folder_link`):t(`symbolic_link`);if(e.isDirectory)return t(`folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Dl[$s(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`file`)}function kl(e,t,n,r){switch(e){case`type`:return Ol(t,r);case`size`:return jl(t,n.folderSizes);case`modified`:return ae(t.modified);case`created`:return ae(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:r(`broken`);default:return``}}function Al({name:e,ranges:t}){if(!t||t.length===0)return(0,q.jsx)(q.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,q.jsx)(Au,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,q.jsx)(q.Fragment,{children:n})}function jl(e,t){if(!e.isDirectory)return C(e.size);let n=t[e.name];return n===void 0?`—`:C(n)}function Ml({entry:e,size:t=18}){let n=o(),r=(0,L.useRef)(null),[i,a]=(0,L.useState)(!1);(0,L.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let s=fn(i?e.fullPath:null,e.isDirectory,t>32),c=mn(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,q.jsxs)(zl,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,q.jsx)(ec,{name:e.iconSource.slice(5),size:t}):c?(0,q.jsx)(`img`,{alt:``,height:t,src:c,width:t}):s?(0,q.jsx)(`img`,{alt:``,height:t,src:s,width:t}):e.isDirectory?(0,q.jsx)(fi,{size:t}):(0,q.jsx)(ec,{name:$s(e.name),size:t}),e.isEncrypted&&(0,q.jsx)(Bl,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,q.jsx)(Ca,{size:Math.max(8,Math.round(t*.52))})})]})}function Nl({template:e,columns:t}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,q.jsxs)(uu,{style:{gridTemplateColumns:e},children:[(0,q.jsxs)(pu,{children:[(0,q.jsx)(du,{style:{flexShrink:0,height:18,width:18}}),(0,q.jsx)(du,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,q.jsx)(du,{style:{width:t%2==0?44:92}},t))]},r))})}function Pl({size:e}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,q.jsxs)(wu,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,q.jsx)(Tu,{children:(0,q.jsx)(du,{style:{height:e,width:e}})}),(0,q.jsx)(Du,{children:(0,q.jsx)(du,{style:{height:9,width:`${t}%`}})})]},n))})}var Fl=(0,L.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=o(),x=In(),S=!e.entry.isDirectory&&Mn(e.entry.name),w=(0,L.useRef)(null),[T,E]=(0,L.useState)(!1);(0,L.useEffect)(()=>{if(!S||T)return;let e=w.current;if(!e)return;if(!(`IntersectionObserver`in window)){E(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(E(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,T]);let ee=hn(S&&T?e.entry.fullPath:null,192,e.entry.modified),[D,te]=(0,L.useState)(!1),O=S&&ee!==null&&!D,ne=e.entry.fullPath,k=t=>{e.entry.isDirectory?v(ne,Kt(t)):y?.(ne,Kt(t))};return(0,q.jsxs)(wu,{$current:t,$dim:n,$image:O,$selected:c,onClick:e=>{h(e,ne),u&&k(e)},onContextMenu:e=>_(e,ne),onDoubleClick:e=>{u||k(e)},ref:e=>{w.current=e,t&&s&&(s.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":ne,draggable:!d,children:[l&&(0,q.jsx)(Jl,{$checked:c,onClick:e=>{e.stopPropagation(),g(ne)},onDoubleClick:e=>e.stopPropagation(),title:b(c?`deselect`:`select`),type:`button`,children:c&&(0,q.jsx)(ki,{size:10})}),(0,q.jsx)(Tu,{children:O?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>te(!0),src:ee}):(0,q.jsx)(Eu,{children:e.place&&x.useIcons?(0,q.jsx)(Ls,{place:e.place,size:r}):(0,q.jsx)(Ml,{entry:e.entry,size:r})})}),(0,q.jsxs)(Du,{children:[d?(0,q.jsx)(Ll,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:d.value}):(0,q.jsx)(Ou,{$broken:e.entry.linkValid===!1,children:(0,q.jsx)(Al,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,q.jsxs)(hu,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Ca,{size:9}),b(`encrypted`)]}),e.cut&&(0,q.jsxs)(gu,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,q.jsx)(ga,{size:9}),b(`cut`)]}),(0,q.jsx)(ku,{children:e.entry.isDirectory?i===void 0?Ol(e.entry,b):b(`type_count_items`,{type:Ol(e.entry,b),count:i}):b(`type_size`,{type:Ol(e.entry,b),size:C(e.entry.size)})}),a&&e.entry.linkTarget&&(0,q.jsxs)(vu,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,q.jsx)(wa,{size:9}),(0,q.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Il({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onSelect:f,onToggle:p,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:_,onRenameCommit:v,onRenameCancel:y}){let b=o();return(0,q.jsx)(q.Fragment,{children:e.map(e=>(0,q.jsxs)(au,{children:[(0,q.jsxs)(ou,{children:[b(e.label),(0,q.jsx)(su,{children:e.rows.length}),(0,q.jsx)(cu,{})]}),(0,q.jsx)(lu,{$size:t,children:e.rows.map(e=>(0,q.jsx)(Fl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:El(t),innerRef:s,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:f,onToggle:p,openOnSingleClick:u,onRenameCancel:y,onRenameChange:_,onRenameCommit:v,renaming:d?.path===e.entry.fullPath?d:null,row:e,selected:c.has(e.entry.fullPath),showCheckboxes:l,showTarget:r},e.entry.fullPath))})]},e.id))})}function Ll({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,L.useRef)(null);return(0,L.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,q.jsx)(_u,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Rl=(0,L.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:s,iconSize:c,height:l,template:u,visible:d,listing:f,innerRef:p,renaming:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onTagEdit:y,onRenameChange:b,onRenameCommit:x,onRenameCancel:S}){let C=o(),w=In(),T=e.entry.fullPath;return(0,q.jsxs)(fu,{$current:t,$dim:n,$height:l,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{h(t,T),s&&v(e.entry,t)},onContextMenu:e=>_(e,T),onDoubleClick:t=>{s||v(e.entry,t)},ref:t?p:void 0,style:{gridTemplateColumns:u},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!m,children:[(0,q.jsxs)(pu,{children:[i&&(0,q.jsx)(ql,{$checked:r,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:C(r?`deselect`:`select`),type:`button`,children:r&&(0,q.jsx)(ki,{size:10})}),e.place&&w.useIcons?(0,q.jsx)(zl,{children:(0,q.jsx)(Ls,{place:e.place,size:c})}):(0,q.jsx)(Ml,{entry:e.entry,size:c}),m?(0,q.jsx)(Ll,{onCancel:S,onChange:b,onCommit:x,value:m.value}):(0,q.jsx)(mu,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,q.jsx)(Al,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,q.jsxs)(hu,{title:C(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Ca,{size:9}),C(`encrypted`)]}),e.cut&&(0,q.jsxs)(gu,{title:C(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,q.jsx)(ga,{size:9}),C(`cut`)]}),a&&e.entry.linkTarget&&(0,q.jsxs)(vu,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,q.jsx)(wa,{size:9}),(0,q.jsx)(`span`,{children:e.entry.linkTarget})]})]}),d.map(t=>(0,q.jsx)(yu,{children:t.id===`tags`?(0,q.jsx)(bu,{onClick:t=>{t.stopPropagation(),y(e.entry,t.clientX,t.clientY)},title:C(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=f.tagColors?.[e]??`#64748b`;return(0,q.jsx)(xu,{$color:t,$ink:zs(t),children:e},e)}):(0,q.jsx)(Su,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,q.jsx)(Cu,{children:C(`broken`)}):kl(t.id,e.entry,f,C)},t.id))]})}),zl=v.span`
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
`,Bl=v.span`
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
`,Vl=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Hl=v.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Ul=v.span`
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
`,Wl=v.button`
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
`,Gl=v.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Kl=v.div`
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
`,ql=v.button`
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
`,Jl=v(ql)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Yl=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Xl=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Zl=v.div`
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
`,Ql=v.button`
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
`,$l=v.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,eu=v.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,tu=v.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,nu=v.div`
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
`,ru=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,iu=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,au=v.section`
    & + & {
        margin-top: 22px;
    }
`,ou=v.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,su=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,cu=v.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,lu=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,uu=v.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,du=v.span`
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
`,fu=v.div`
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
`,pu=v.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,mu=v.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,hu=v.span`
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
`,gu=v.span`
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
`,_u=v.input`
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
`,vu=v.span`
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
`,yu=v.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,bu=v.button`
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
`,xu=v.span`
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
`,Su=v.span`
    color: var(--text-muted);
    font-size: 11px;
`,Cu=v.span`
    color: #fca5a5;
`,wu=v.div`
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
`,Tu=v.div`
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
`,Eu=v.span`
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
`,Du=v.div`
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
`,Ou=v.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,ku=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Au=v.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,ju=v.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Mu=v.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Nu=v.p`
    font-size: 13px;
    color: var(--text-muted);
`,Pu=v.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Fu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Iu=`/assets/bloom-BpfZWiaG.mp4`,Lu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Ru=`/assets/drift-BRBSQL2_.mp4`,zu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Bu=`/assets/ember-CtSz0YxR.mp4`,Vu=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],Hu=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],Uu=[{id:`builtin:video:drift`,name:`drift`,url:Ru,poster:Lu},{id:`builtin:video:ember`,name:`ember`,url:Bu,poster:zu},{id:`builtin:video:bloom`,name:`bloom`,url:Iu,poster:Fu}],Wu=Hu.map(e=>({...e,variants:Vu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Xu(Zu(e.id,t,!1)),lightUrl:Xu(Zu(e.id,t,!0))}))})),Gu=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>Vu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Xu(Qu(e.id,t,!1)),lightUrl:Xu(Qu(e.id,t,!0))}))),Ku=new Map([...Wu.flatMap(e=>e.variants),...Gu].map(e=>[e.id,e])),qu=new Map(Uu.map(e=>[e.id,e]));function Ju(e,t=`dark`){if(qu.has(e))return qu.get(e).url;let n=Ku.get(e)??Ku.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function Yu(e){return qu.has(e)}function Xu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Zu(e,t,n){return e===`dunes`?ad(t,n):e===`tide`?od(t,n):id(t,n)}function Qu(e,t,n){return e===`skyline`?ed(t,n):e===`orbit`?td(t,n):$u(t,n)}function $u({accent:e,secondary:t},n){let r=rd(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=rd(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=rd(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=rd(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=rd(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${rd(t,`#ffffff`,n?.45:.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${a}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${o}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${c}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function ed({accent:e,secondary:t},n){let r=rd(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=rd(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=rd(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=rd(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${rd(e,n?`#d5deea`:`#040208`,n?.7:.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function td({accent:e,secondary:t},n){let r=rd(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=rd(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=rd(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${rd(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${r}"/>
            <stop offset="1" stop-color="${i}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${rd(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${rd(e,n?`#cfd9e6`:`#08050f`,n?.55:.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${rd(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function nd(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function rd(e,t,n){let[r,i,a]=nd(e),[o,s,c]=nd(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function id({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${rd(e,n?`#f2f6ff`:`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${rd(t,n?`#eef2ff`:`#070b1c`,n?.86:.85)}"/>
            <stop offset="1" stop-color="${rd(e,n?`#e8f0fb`:`#04060c`,n?.9:.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${rd(e,t,.5)}" opacity="${n?.26:.42}" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="${n?.32:.5}" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="${n?.3:.42}" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="${n?.26:.36}" filter="url(#soft2)"/>
</svg>`}function ad({accent:e,secondary:t},n){let r=rd(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=rd(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=rd(e,t,.25),o=rd(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=rd(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=rd(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1480" cy="250" r="110" fill="${rd(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${c}" opacity="${n?.5:.75}"/>
</svg>`}function od({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${rd(e,n?`#e6f7fb`:`#02070a`,n?.88:.9)}"/>
            <stop offset="0.5" stop-color="${rd(t,n?`#eefaf8`:`#03100f`,n?.85:.82)}"/>
            <stop offset="1" stop-color="${rd(e,n?`#dff2f7`:`#020609`,n?.9:.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${rd(e,t,.4)}" opacity="${n?.34:.5}" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var sd=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function cd(e){return sd.test(e)}function ld({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):k(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=_n(i),o=n?.startsWith(`builtin:`)?Ju(n,t):r??a,s=r===null?i===null?n!==null&&Yu(n):cd(i):cd(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,q.jsxs)(ud,{"aria-hidden":!0,children:[s?(0,q.jsx)(fd,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,q.jsx)(dd,{src:o,style:{filter:c}}),(0,q.jsx)(pd,{})]})}var ud=v.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,dd=v.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,fd=v.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,pd=v.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function md({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let s=o(),c=(0,L.useRef)(null),[l,u]=(0,L.useState)(()=>Math.max(1,Math.ceil(n))),d=e??`delete`;return(0,L.useEffect)(()=>{c.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));u(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,Ua.createPortal)((0,q.jsx)(vd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,q.jsxs)(yd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(bd,{children:s(`protected_folder`)}),(0,q.jsx)(xd,{children:s(`these_paths_are_protected_by_the_safety_settings`)}),(0,q.jsx)(Sd,{children:t.map(e=>(0,q.jsxs)(Cd,{children:[(0,q.jsx)(wd,{children:e.path}),(0,q.jsx)(Td,{children:s(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,q.jsx)(Ed,{children:hd(s,d,r??!1)}),(0,q.jsx)(Dd,{children:gd(s,d)}),(0,q.jsx)(Od,{children:s(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,q.jsxs)(kd,{children:[(0,q.jsx)(Ad,{onClick:i,ref:c,type:`button`,children:s(`cancel`)}),(0,q.jsx)(jd,{disabled:l>0,onClick:a,type:`button`,children:l>0?_d(s,d,l):_d(s,d,0)})]})]})}),document.body)}function hd(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function gd(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function _d(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var vd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${io}
`,yd=v.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${$a}
`,bd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,xd=v.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Sd=v.div`
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
`,Cd=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,wd=v.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Td=v.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Ed=v.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Dd=v.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Od=v.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,kd=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Ad=v.button`
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
`,jd=v.button`
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
`;function Md(){let e=o(),[t,n]=(0,L.useState)(null),r=(0,L.useRef)(null),i=(0,L.useRef)(null);(0,L.useEffect)(()=>(Aa(e=>new Promise(t=>{r.current=t,n(e)})),()=>Aa(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,L.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,Ua.createPortal)((0,q.jsx)(Nd,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,q.jsxs)(Pd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(Fd,{children:e(`notice`)}),(0,q.jsx)(Id,{children:t}),(0,q.jsx)(Ld,{children:(0,q.jsx)(Rd,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Nd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${io}
`,Pd=v.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${$a}
`,Fd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Id=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Ld=v.div`
    display: flex;
    justify-content: flex-end;
`,Rd=v.button`
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
`;function zd(){let e=o(),[t,n]=(0,L.useState)(null),[r,i]=(0,L.useState)(``),a=(0,L.useRef)(null),s=(0,L.useRef)(null);(0,L.useEffect)(()=>(Ma((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ma(null)),[]),(0,L.useEffect)(()=>{t&&window.setTimeout(()=>s.current?.focus(),0)},[t]);let c=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let l=()=>{r.length>0&&c(r)};return(0,Ua.createPortal)((0,q.jsx)(Bd,{onPointerDown:e=>{e.target===e.currentTarget&&c(null)},children:(0,q.jsxs)(Vd,{role:`dialog`,"aria-modal":`true`,children:[(0,q.jsx)(Hd,{children:e(`archive_password`)}),(0,q.jsx)(Ud,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,q.jsx)(Wd,{title:t.archive,children:t.archive}),(0,q.jsx)(Gd,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),l()):e.key===`Escape`&&(e.preventDefault(),c(null))},ref:s,spellCheck:!1,type:`password`,value:r}),(0,q.jsxs)(Kd,{children:[(0,q.jsx)(qd,{onClick:()=>c(null),type:`button`,children:e(`cancel`)}),(0,q.jsx)(Jd,{disabled:r.length===0,onClick:l,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Bd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${io}
`,Vd=v.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${$a}
`,Hd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ud=v.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Wd=v.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gd=v.input`
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
`,Kd=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,qd=v.button`
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
`,Jd=v(qd)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Yd({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:s,compact:c=!1,placeholder:l,onQuery:u,onPrevious:d,onNext:f,onMatchCase:p,onRegex:m,onMode:h,onClose:g,onSelectMatches:_}){let v=o(),y=(0,L.useRef)(null),b=l??v(`search_this_folder`);(0,L.useEffect)(()=>{let e=y.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[s]);let x=e=>{e(),y.current?.focus()};return(0,q.jsxs)(Xd,{children:[(0,q.jsx)(hi,{}),(0,q.jsx)(Zd,{"aria-label":b,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?d():f()),e.key===`Escape`&&(e.preventDefault(),g())},placeholder:b,ref:y,spellCheck:!1,value:e}),!c&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Qd,{children:i===0?`0/0`:`${a+1}/${i}`}),_&&(0,q.jsx)($d,{disabled:i===0,onClick:_,title:v(`select_all_matches`),type:`button`,children:(0,q.jsx)(ki,{size:12})}),(0,q.jsx)($d,{$chevron:!0,onClick:()=>x(d),title:v(`previous_match_shift_enter`),type:`button`,children:(0,q.jsx)(xi,{size:12})}),(0,q.jsx)($d,{$chevron:!0,$down:!0,onClick:()=>x(f),title:v(`next_match_enter`),type:`button`,children:(0,q.jsx)(xi,{size:12})})]}),(0,q.jsx)(ef,{$on:n,onClick:()=>x(p),title:v(`match_case`),type:`button`,children:`Aa`}),(0,q.jsx)(ef,{$on:r,onClick:()=>x(m),title:v(`regular_expression`),type:`button`,children:`.*`}),!c&&(0,q.jsx)(tf,{$on:t===`hide`,onClick:()=>x(h),title:v(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,q.jsx)(Mi,{size:12}):(0,q.jsx)(ji,{size:12})}),(0,q.jsx)($d,{onClick:g,title:v(`close_search_esc`),type:`button`,children:(0,q.jsx)(Ai,{size:12})})]})}var Xd=v.div`
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
    ${no}
`,Zd=v.input`
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
`,Qd=v.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,$d=v.button`
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
`,ef=v.button`
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
`,tf=v(ef)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function nf(e,t,n,r,i=[]){(0,L.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=xn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function rf({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=o(),a=(0,L.useRef)(null),s=(0,L.useRef)(null),[c,l]=(0,L.useState)(null);return(0,L.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();l({top:t.bottom+6,left:t.left})},[]),(0,L.useLayoutEffect)(()=>{if(!c||!s.current)return;let e=s.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,c.top-e.height-12):c.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):c.left;(t!==c.top||n!==c.left)&&l({top:t,left:n})},[c]),(0,L.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{ref:a,style:{display:`none`}}),c&&(0,Ua.createPortal)((0,q.jsxs)(af,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:s,style:{position:`fixed`,top:c.top,left:c.left},children:[Object.keys(Ms).map(n=>(0,q.jsx)(of,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Ms[n](16)},n)),(0,q.jsx)(of,{onClick:async()=>{let e=await Da([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,q.jsx)(vi,{size:13})}),r&&(0,q.jsx)(of,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,q.jsx)(Ai,{size:12})})]}),document.body)]})}var af=v.div`
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
    ${eo}
    transform-origin: top left;
`,of=v.button`
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
`;function sf({source:e,poster:t,theme:n}){let r=k(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=_n(e.startsWith(`builtin:`)||r?null:e,0,i?`.${i}`:``),o=t??Ju(e,n)??(r?e:a),s=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return o?s?(0,q.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o}):(0,q.jsx)(`img`,{alt:``,src:o}):null}function cf({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,L.useRef)(null),l=(0,L.useRef)(null),u=(0,L.useRef)(!1),[d,f]=(0,L.useState)(null),[p,m]=(0,L.useState)(null),[h,g]=(0,L.useState)(0),_=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?f({width:1920,height:1080}):n>0&&r>0&&f({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},v=p&&d?Math.min(p.height,n*(p.width/d.width)):0,y=Math.max(0,(p?.height??0)-v);(0,L.useEffect)(()=>{p&&d&&!u.current&&(u.current=!0,g(Math.min(y,Math.max(0,r*y))))},[p,d,y,r]),(0,L.useEffect)(()=>{let e=()=>_();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,L.useEffect)(()=>{let e=window.requestAnimationFrame(_);return()=>window.cancelAnimationFrame(e)},[e,t]);let b=e=>{l.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},x=e=>{let t=l.current;t&&g(Math.min(y,Math.max(0,t.top+e.clientY-t.y)))},S=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,q.jsx)(kf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,q.jsxs)(Af,{children:[(0,q.jsxs)(jf,{children:[(0,q.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,q.jsx)(Rf,{onClick:i,title:s(`cancel`),type:`button`,children:(0,q.jsx)(Ai,{size:12})})]}),(0,q.jsx)(Mf,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,q.jsxs)(Nf,{children:[t?(0,q.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{_(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,q.jsx)(`img`,{alt:``,draggable:!1,onLoad:_,ref:e=>{c.current=e},src:e}),v>0&&(0,q.jsx)(Pf,{onPointerCancel:S,onPointerDown:b,onPointerMove:x,onPointerUp:S,style:{height:v,top:h},children:(0,q.jsx)(Ff,{})})]}),(0,q.jsxs)(If,{children:[(0,q.jsx)(Lf,{onClick:i,type:`button`,children:s(`cancel`)}),(0,q.jsx)(Lf,{$primary:!0,onClick:()=>a(y>0?h/y:r),type:`button`,children:s(`save`)})]})]})})}var lf=150,uf=120,df=200,ff=v.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,pf=v.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,mf=v.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${df}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${df}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(df*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(df*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(df*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${df}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(df*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(df*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(df*.18)}px),
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
`,hf=v.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${lf}px);
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
`,gf=v.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,_f=v.section`
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
`,vf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,yf=v.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,bf=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,xf=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Sf=v.input`
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
`,Cf=v.button`
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
`,wf=v.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Tf=v.button`
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
`,Ef=v.button`
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
`,Df=v.span`
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
`,Of=v.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,kf=v.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Af=v.div`
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
`,jf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Mf=v.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Nf=v.div`
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
`,Pf=v.div`
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
`,Ff=v.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,If=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Lf=v.button`
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
`,Rf=v.button`
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
`,zf=v.button`
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
`,Bf=v.div`
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
`,Vf=v.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Hf=v.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,Uf=v.button`
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
`,Wf=v.div`
    position: relative;
    display: inline-flex;
`,Gf=v.div`
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
`,Kf=v.button`
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
`,qf=v.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,Jf=v.section`
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
`,Yf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Xf=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Zf=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Qf=v.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,$f=v.input`
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
`,ep=v.button`
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
`,tp=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,np=v.div`
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
`,rp=v.span`
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
`,ip=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,ap=v.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,op=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,sp=v.button`
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
`,cp=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,lp=v.button`
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
`,up=v.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,dp=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,fp=v.div`
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
`,pp=v.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,mp=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,hp=v.button`
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
`,gp=v.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,_p=v.button`
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
`,vp=v.button`
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
`,yp=v.button`
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
`,bp=v.span`
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
`,xp=v.button`
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
`,Sp=v.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Cp=v.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,wp=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Tp=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Ep=v.input`
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
`,Dp=v.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Op=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,kp=v.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ap=v.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,jp=v.button`
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
`;function Mp({theme:e,places:t,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:u,onRecentCleared:d,onLayoutChanged:f,onHistoryChanged:p,onDrivesChanged:m,visibilityVersion:h=0,find:g,onSearchMatches:_,readOnly:v=!1,onPick:y,onSelectionChange:b,onAddToTray:w,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ee,onExtractArchive:D,settingsVersion:te=0}){let O=o(),ne=In(),[A,re]=(0,L.useState)(!1),[M,ae]=(0,L.useState)(null),se=M?.overviewBanner??null,ce=se?.startsWith(`builtin:`)??!1,P=se?.startsWith(`url:`)?se.slice(4):k(se)?se:null,F=ce||P?``:se??``,le=ce?``:P?P.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:F.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,ue=ce?Yu(se):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(le),de=_n(F.length>0?F:null,0,le?`.${le}`:``),fe=se?Ju(se,e)??P??de:null,[pe,me]=(0,L.useState)(``),[he,ge]=(0,L.useState)(null),[I,_e]=(0,L.useState)(!1),[ve,ye]=(0,L.useState)(null),[be,R]=(0,L.useState)(null),[xe,Se]=(0,L.useState)(null),[Te,Ee]=(0,L.useState)([]),[De,Oe]=(0,L.useState)(null),[ke,Ae]=(0,L.useState)(``),[je,Me]=(0,L.useState)(null),[Pe,Fe]=(0,L.useState)(null),z=sl(`overview`),[Ie,Le]=(0,L.useState)(null),[Re,ze]=(0,L.useState)(null),Be=(0,L.useRef)(null),B=(0,L.useRef)(null),Ve=(0,L.useRef)(null),He=(0,L.useRef)(null),Ue=(0,L.useRef)(null),We=Re??M?.overviewBannerHeight??220,[qe,Je]=(0,L.useState)(0),[Ye,Xe]=(0,L.useState)(null),Qe=Math.min(1,Math.max(0,M?.overviewBannerOffset??.3)),$e=We+df,et=Ye&&qe>0?Ye.height*(qe/Ye.width):$e,tt=et>0&&et<$e+240?($e+240)/et:1,nt=Math.max(1,Math.round(qe*tt)),rt=Math.max(0,et*tt-$e),it=Math.min(uf,rt/2,Math.max(20,We*.42)),at=it+Qe*Math.max(0,rt-it*2),[st,ct]=(0,L.useState)(!1),lt=(e,t=!1)=>y?(Me(e),Fe({path:e,isDirectory:t}),b?.([e]),!0):!1,ut=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),Me(t),Fe({path:t,isDirectory:n}),Le({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,L.useEffect)(()=>(el(`overview`,Pe?(e,t)=>Le({x:e,y:t,target:Pe}):null),()=>el(`overview`,null)),[Pe]);let dt=(e,t)=>c(e,t);(0,L.useEffect)(()=>{Ze().then(ae,()=>ae(null))},[te]),(0,L.useEffect)(()=>{if(l.available)return Pc().then(Ee,()=>void 0),l.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Ee(t.data.peers)})},[]),(0,L.useEffect)(()=>{let e=Ve.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,L.useEffect)(()=>{if(ce&&!ue){Xe({width:1920,height:1080});return}Xe(null);let e=Ue.current;e?.complete&&e.naturalWidth>0&&Xe({width:e.naturalWidth,height:e.naturalHeight})},[se,ce,ue]),(0,L.useEffect)(()=>{let e=He.current;if(!e)return;let t=()=>Je(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[M?.overviewBanner]),(0,L.useEffect)(()=>{if(!he)return;let e=()=>ge(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||ge(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[he]),(0,L.useEffect)(()=>{if(!I)return;let e=()=>_e(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[I]);let ft=Ps(M),pt=ft.map(e=>e.id),V=(0,L.useRef)(null),mt=e=>he?.kind===`panel`&&he.id===e,ht=e=>he?.kind===`place`&&he.id===e;(0,L.useEffect)(()=>{if(!l.available)return;let e=ft.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[ft.map(e=>e.path??e.id).join(`|`),a]),nf(V,g??null,`section`,_??(()=>void 0),[r.length,t.length,n.length,h]);let gt=async(e,t)=>{let n={...M?.placeIcons};t?n[e]=t:delete n[e],ge(null),await H({placeIcons:n}),u(await Ne())},vt=async(e,t)=>{let n={...M?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],R(null),await H({placeNames:n}),u(await Ne())},yt=e=>{Se(null),ye({drive:e,label:e.label||`Local Disk`})},bt=async()=>{if(!ve)return;let{drive:e,label:t}=ve;ye(null);let n=await Ce(e.name,t.trim());n.ok?(Se(null),m?.()):Se(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},xt=M?.overviewColumns??1,H=async e=>{if(!M)return;let t={...M,...e,overviewPanels:e.overviewPanels??pt,overviewHidden:[]};ae(await ot(t)),f?.()},St=async()=>{await H({overviewPanels:[...ks],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),u(await Ne()),re(!1)},Ct=async()=>{let e=await Da([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=M?.overviewBanners??[];await H({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},wt=async()=>{let e=pe.trim();if(!M||!k(e))return;let t=M.overviewBanners??[];me(``),await H({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},Tt=()=>void H({overviewBanner:null}),Et=e=>void H({overviewBanners:(M?.overviewBanners??[]).filter(t=>t!==e),...M?.overviewBanner===e||M?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Dt=e=>{Be.current={y:e.clientY,height:We},e.currentTarget.setPointerCapture(e.pointerId)},Ot=e=>{let t=Be.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));B.current=n,ze(n)},kt=e=>{Be.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),B.current!==null&&(H({overviewBannerHeight:B.current}),B.current=null)},At=(e,t)=>{let n=pt.indexOf(e),r=n+t;if(n<0||r<0||r>=pt.length)return;let i=[...pt];[i[n],i[r]]=[i[r],i[n]],H({overviewPanels:i})},jt=(e,t)=>{let n={...M?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],H({overviewTitles:n})},Mt=(e,t)=>void H({overviewViews:{...M?.overviewViews,[e]:t}}),Nt=e=>{let t=M?.overviewPinned??ft.filter(e=>e.pinned).map(e=>e.id);H({overviewPinned:ft.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Pt=e=>{ge(null);let t=t=>{let n={...t};return delete n[e],n},n=M?.overviewPinned??ft.filter(e=>e.pinned).map(e=>e.id);H({overviewPanels:pt.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(M?.overviewTitles),overviewViews:t(M?.overviewViews),overviewIcons:t(M?.overviewIcons),panelPlaces:t(M?.panelPlaces)})},Ft=(e,t)=>{let n={...M?.overviewIcons};t?n[e]=t:delete n[e],ge(null),H({overviewIcons:n})},It=async e=>{if(!M)return;if(e===`folder`){let e=await Ea();if(!e)return;let t=`folder:${e}`;pt.includes(t)||await H({overviewPanels:[...pt,t]});return}if(e===`quick`){let e=2;for(;pt.includes(`quick:${e}`);)e+=1;await H({overviewPanels:[...pt,`quick:${e}`]});return}let t=e;for(let n=2;pt.includes(t);n+=1)t=`${e}:${n}`;await H({overviewPanels:[...pt,t]})},Lt=async e=>{let n=await Ea();if(!n)return;if(e.id===`quick`){await H({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),u(await Ne());return}let r=e.places??[];r.some(e=>N(e,n))||await H({panelPlaces:{...M?.panelPlaces,[e.id]:[...r,n]}})},Rt=async(e,n)=>{ge(null),e.id===`quick`?(await H({quickAccess:t.filter(e=>!N(e.path,n)).map(e=>e.path)}),u(await Ne())):await H({panelPlaces:{...M?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!N(e,n))}})},zt=async(e,n,r)=>{if(N(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>N(e,n)),o=i.findIndex(e=>N(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await H({quickAccess:s}),u(await Ne())):await H({panelPlaces:{...M?.panelPlaces,[e.id]:s}})},Bt=(e,t)=>({draggable:A,onDragOver:e=>{A&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{A&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{A&&(n.preventDefault(),zt(e,n.dataTransfer.getData(`text/plain`),t))}}),Vt=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>N(t.path,e));return{name:M?.placeNames?.[e]??n?.name??(x(e)||e),path:e,kind:`folder`,icon:n?.icon??M?.placeIcons?.[e]??null}}),Ht=e=>{if(r.length===0)return(0,q.jsx)(Cp,{children:O(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,i);return e.view===`grid`?(0,q.jsx)(tp,{children:t.map(e=>{let t=Ln(ne,e.path);return(0,q.jsxs)(np,{$plain:!1,$selected:je===e.path,onClick:t=>{lt(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Kt(t)):we(e.path))},onDoubleClick:()=>y?.(e.path),onContextMenu:t=>ut(t,e.path,e.isDirectory),title:e.path,children:[(0,q.jsx)(rp,{children:t&&ne.useIcons?(0,q.jsx)(Ls,{place:t,size:18}):(0,q.jsx)(tc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(ip,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(ap,{children:e.path})]})]},e.path)})}):(0,q.jsx)(op,{children:t.map(e=>{let t=Ln(ne,e.path);return(0,q.jsxs)(sp,{$selected:je===e.path,onClick:t=>{lt(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Kt(t)):we(e.path))},onDoubleClick:()=>y?.(e.path),onContextMenu:t=>ut(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,q.jsx)(Ls,{place:t,size:15}):(0,q.jsx)(tc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(cp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(ap,{children:e.path})]})]},e.path)})})},Wt=e=>{let t=M?.favorites??[],n=async e=>{await H({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>N(t.path,e))&&await H({favorites:[...t,{path:e,name:x(e)||e,isDirectory:n}]})},i=(e,t,n)=>{A||lt(t,n)||(n?c(t,Kt(e)):we(t))},a=A?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(lp,{$row:e.view===`list`,onClick:()=>void Da().then(e=>r(e,!1)),title:O(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,q.jsx)(vi,{size:15}):(0,q.jsx)(rp,{children:(0,q.jsx)(vi,{size:15})}),e.view===`list`?(0,q.jsxs)(cp,{children:[(0,q.jsx)(`strong`,{children:O(`add_file`)}),(0,q.jsx)(ap,{children:O(`pin_any_file_here`)})]}):(0,q.jsxs)(ip,{children:[(0,q.jsx)(`strong`,{children:O(`add_file`)}),(0,q.jsx)(ap,{children:O(`pin_any_file_here`)})]})]}),(0,q.jsxs)(lp,{$row:e.view===`list`,onClick:()=>void Ea().then(e=>r(e,!0)),title:O(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,q.jsx)(vi,{size:15}):(0,q.jsx)(rp,{children:(0,q.jsx)(vi,{size:15})}),e.view===`list`?(0,q.jsxs)(cp,{children:[(0,q.jsx)(`strong`,{children:O(`add_folder`)}),(0,q.jsx)(ap,{children:O(`pin_any_folder_here`)})]}):(0,q.jsxs)(ip,{children:[(0,q.jsx)(`strong`,{children:O(`add_folder`)}),(0,q.jsx)(ap,{children:O(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!A?(0,q.jsx)(Cp,{children:O(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,q.jsxs)(tp,{children:[t.map(e=>{let t=Ln(ne,e.path);return(0,q.jsxs)(np,{$plain:A,$selected:je===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!A&&y?.(e.path),onContextMenu:t=>!A&&ut(t,e.path,e.isDirectory),title:e.path,children:[A&&(0,q.jsx)(vp,{onClick:t=>{t.stopPropagation(),n(e.path)},title:O(`remove_from_favorites`),type:`button`,children:(0,q.jsx)(Ai,{size:11})}),(0,q.jsx)(rp,{children:t&&ne.useIcons?(0,q.jsx)(Ls,{place:t,size:18}):(0,q.jsx)(tc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(ip,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(ap,{children:e.path})]})]},e.path)}),a]}):(0,q.jsxs)(op,{children:[t.map(e=>{let t=Ln(ne,e.path);return(0,q.jsxs)(sp,{$selected:je===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!A&&y?.(e.path),onContextMenu:t=>!A&&ut(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,q.jsx)(Ls,{place:t,size:15}):(0,q.jsx)(tc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(cp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(ap,{children:e.path})]}),A&&(0,q.jsx)(vp,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:O(`remove_from_favorites`),type:`button`,children:(0,q.jsx)(Ai,{size:11})})]},e.path)}),a]})},Gt=e=>{if(n.length===0)return(0,q.jsx)(Cp,{children:O(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=ve?.drive.name===t.name,i=r?(0,q.jsx)(Np,{maxLength:32,onCancel:()=>ye(null),onChange:e=>ye({...ve,label:e}),onCommit:()=>void bt(),value:ve?.label??``}):(0,q.jsx)(q.Fragment,{children:ie(t)}),a=!r&&A&&(0,q.jsx)(yp,{onClick:e=>{e.stopPropagation(),yt(t)},title:O(`rename_volume`),type:`button`,children:(0,q.jsx)(Yi,{size:11})}),o=(0,q.jsx)(ap,{children:O(`free_free_of_total`,{free:C(t.freeSpace),total:C(t.totalSize)})});return e.view===`grid`?(0,q.jsxs)(np,{$plain:!1,$selected:je===t.name,onClick:e=>{!r&&lt(t.name,!0)||r||c(t.name,Kt(e))},onDoubleClick:()=>!r&&y?.(t.name),onContextMenu:e=>!r&&ut(e,t.name,!0),title:t.name,children:[(0,q.jsx)(rp,{children:(0,q.jsx)(mi,{size:18})}),(0,q.jsxs)(ip,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&j(t),a]}),o]})]},t.name):(0,q.jsxs)(sp,{as:r?`div`:`button`,$selected:je===t.name,onClick:r?void 0:e=>{lt(t.name,!0)||c(t.name,Kt(e))},onDoubleClick:r?void 0:()=>y?.(t.name),onContextMenu:r?void 0:e=>ut(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,q.jsx)(mi,{size:18}),(0,q.jsxs)(cp,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&j(t),a]}),o]}),(0,q.jsx)(up,{children:(0,q.jsx)(dp,{$used:n,$tone:S(n)})})]},t.name)});return e.view===`grid`?(0,q.jsx)(tp,{children:t}):(0,q.jsx)(op,{children:t})},qt=()=>{let e=async e=>{Oe(e.id);try{await Fc(e.host,e.port)}finally{Oe(null)}},t=async()=>{let e=ke.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Oe(`manual`);try{await Fc(n,r)}finally{Oe(null)}}};return(0,q.jsxs)(wp,{children:[(0,q.jsxs)(Tp,{children:[(0,q.jsx)(Ep,{onChange:e=>Ae(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:O(`address_e_g_192_168_1_20_45701`),value:ke}),(0,q.jsx)(jp,{disabled:De!==null||!ke.includes(`:`),onClick:()=>void t(),type:`button`,children:O(De===`manual`?`pairing`:`pair_by_address`)})]}),Te.length===0&&(0,q.jsx)(Cp,{children:O(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),Te.map(t=>(0,q.jsxs)(Dp,{children:[(0,q.jsxs)(Op,{children:[(0,q.jsx)(la,{size:14}),(0,q.jsx)(kp,{title:t.host,children:t.name}),(0,q.jsx)(Ap,{$online:t.online,children:t.paired?t.online?O(`paired`):O(`offline`):O(`not_paired`)}),!t.paired&&t.online&&(0,q.jsx)(jp,{disabled:De===t.id,onClick:()=>void e(t),type:`button`,children:De===t.id?O(`pairing`):O(`pair`)})]}),t.paired&&t.shares.length===0&&(0,q.jsx)(ap,{children:O(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,q.jsxs)(sp,{onClick:n=>c(Vc(t.id,e.id),Kt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,q.jsx)(la,{size:14}),(0,q.jsxs)(cp,{children:[(0,q.jsx)(`strong`,{children:e.name}),(0,q.jsx)(ap,{children:t.name})]}),(0,q.jsx)(da,{size:12})]},e.id))]},t.id))]})},Jt=e=>{switch(e.kind){case`share`:return qt();case`favorites`:return Wt(e);case`quick`:{let t=Vt(e);return!A&&t.length===0?(0,q.jsx)(Cp,{children:O(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,q.jsxs)(tp,{children:[t.map(t=>(0,q.jsxs)(np,{$plain:A,$selected:je===t.path,...Bt(e,t.path),onClick:e=>{!A&&!lt(t.path,!0)&&c(t.path,Kt(e))},onDoubleClick:()=>!A&&y?.(t.path),onContextMenu:e=>!A&&ut(e,t.path,!0),title:t.path,children:[A&&(0,q.jsx)(vp,{onClick:n=>{n.stopPropagation(),Rt(e,t.path)},title:O(`remove_from_quick_access`),type:`button`,children:(0,q.jsx)(Ai,{size:11})}),(0,q.jsxs)(gp,{children:[A?(0,q.jsx)(_p,{onClick:e=>{e.stopPropagation(),ge(ht(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`change_icon`),type:`button`,children:(0,q.jsx)(rp,{children:(0,q.jsx)(Ls,{place:t})})}):(0,q.jsx)(rp,{children:(0,q.jsx)(Ls,{place:t})}),ht(t.path)&&(0,q.jsx)(rf,{onPick:e=>void gt(t.path,e),value:M?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(ip,{children:[be?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(Np,{onCancel:()=>R(null),onChange:e=>R({path:t.path,name:e}),onCommit:()=>void vt(t.path,be?.name??``),value:be?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,A&&(0,q.jsx)(yp,{onClick:e=>{e.stopPropagation(),ge(null),R({path:t.path,name:t.name})},title:O(`rename_folder`),type:`button`,children:(0,q.jsx)(Yi,{size:11})})]}),(0,q.jsx)(ap,{children:t.path})]})]},t.path)),A&&(0,q.jsxs)(lp,{onClick:()=>void Lt(e),title:O(`pin_a_folder_here`),type:`button`,children:[(0,q.jsx)(rp,{children:(0,q.jsx)(vi,{size:15})}),(0,q.jsxs)(ip,{children:[(0,q.jsx)(`strong`,{children:O(`add_folder`)}),(0,q.jsx)(ap,{children:O(`pin_a_directory_here`)})]})]})]}):(0,q.jsxs)(op,{children:[t.map(t=>(0,q.jsxs)(sp,{$selected:je===t.path,...Bt(e,t.path),onClick:e=>{!A&&!lt(t.path,!0)&&c(t.path,Kt(e))},onDoubleClick:()=>!A&&y?.(t.path),onContextMenu:e=>!A&&ut(e,t.path,!0),title:t.path,type:`button`,children:[(0,q.jsxs)(gp,{children:[A?(0,q.jsx)(_p,{onClick:e=>{e.stopPropagation(),ge(ht(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:O(`change_icon`),type:`button`,children:(0,q.jsx)(Ls,{place:t,size:15})}):(0,q.jsx)(Ls,{place:t,size:15}),ht(t.path)&&(0,q.jsx)(rf,{onPick:e=>void gt(t.path,e),value:M?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(cp,{children:[be?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(Np,{onCancel:()=>R(null),onChange:e=>R({path:t.path,name:e}),onCommit:()=>void vt(t.path,be?.name??``),value:be?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,A&&(0,q.jsx)(yp,{onClick:e=>{e.stopPropagation(),ge(null),R({path:t.path,name:t.name})},title:O(`rename_folder`),type:`button`,children:(0,q.jsx)(Yi,{size:11})})]}),(0,q.jsx)(ap,{children:t.path})]}),A&&(0,q.jsx)(vp,{$inline:!0,onClick:n=>{n.stopPropagation(),Rt(e,t.path)},title:O(`remove_from_quick_access`),type:`button`,children:(0,q.jsx)(Ai,{size:11})})]},t.path)),A&&(0,q.jsxs)(lp,{$row:!0,onClick:()=>void Lt(e),title:O(`pin_a_folder_here`),type:`button`,children:[(0,q.jsx)(vi,{size:15}),(0,q.jsxs)(cp,{children:[(0,q.jsx)(`strong`,{children:O(`add_folder`)}),(0,q.jsx)(ap,{children:O(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,q.jsx)(Pp,{mode:e.view,onContextMenu:ut,onOpen:c,onPick:y,onSelectionChange:b,version:s});case`recent`:return Ht(e);case`drives`:return Gt(e);default:return(0,q.jsx)(Fp,{mode:e.view,onContextMenu:ut,onOpen:c,onPick:y,onSelectionChange:b,openOnSingleClick:M?.openOnSingleClick??!1,path:e.path??a,selectionMenuId:`overview:${e.id}`,showCheckboxes:M?.showCheckboxes??!0,visibilityVersion:h})}};return(0,q.jsxs)(ff,{$flush:!!M?.overviewBanner,ref:Ve,children:[!v&&(0,q.jsxs)(Bf,{$overlay:!!M?.overviewBanner,children:[(0,q.jsx)(Vf,{role:`group`,title:O(`columns`),children:[1,2,3,4,5].map(e=>(0,q.jsx)(Hf,{$active:xt===e,onClick:()=>void H({overviewColumns:e}),title:oe(O,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),A&&(0,q.jsxs)(Wf,{children:[(0,q.jsxs)(Uf,{onClick:()=>_e(e=>!e),onPointerDown:e=>e.stopPropagation(),title:O(`add_a_panel`),type:`button`,children:[(0,q.jsx)(vi,{size:12}),O(`add_panel`)]}),I&&(0,q.jsx)(Gf,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,q.jsx)(Kf,{onClick:()=>{_e(!1),It(e)},type:`button`,children:O(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),A&&(0,q.jsxs)(Uf,{onClick:()=>void St(),title:O(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,q.jsx)(_i,{size:12}),O(`restore_default_panels`)]}),z.available&&(0,q.jsx)(ep,{onClick:e=>z.open(e.clientX,e.clientY),title:O(`selection_menu`),type:`button`,children:(0,q.jsx)(Sa,{size:14})}),(0,q.jsxs)(Uf,{onClick:()=>{re(e=>!e),_e(!1),ge(null),R(null),ye(null)},title:O(A?`done`:`edit`),type:`button`,children:[A?(0,q.jsx)(ki,{size:13}):(0,q.jsx)(Yi,{size:13}),O(A?`done`:`edit`)]})]}),xe&&(0,q.jsx)(Sp,{children:xe}),M?.overviewBanner&&(0,q.jsxs)(pf,{ref:He,style:{height:`${We}px`,"--banner-image-width":`${nt}px`,"--banner-image-shift":`${at}px`,"--banner-travel":`${it}px`,"--banner-overlap":`0px`},children:[(0,q.jsx)(mf,{children:ue?(0,q.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Xe({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:fe??void 0}):(0,q.jsx)(`img`,{alt:``,onLoad:e=>{let t=ce?1920:e.currentTarget.naturalWidth||1920,n=ce?1080:e.currentTarget.naturalHeight||1080;Xe({width:t,height:n})},ref:Ue,src:fe??void 0})}),A&&(0,q.jsx)(hf,{onDoubleClick:()=>{B.current=null,ze(null),H({overviewBannerHeight:220})},onPointerCancel:kt,onPointerDown:Dt,onPointerMove:Ot,onPointerUp:kt,title:O(`drag_to_resize_double_click_to_reset`)})]}),(0,q.jsxs)(gf,{$offset:M?.overviewBanner?100:0,children:[A&&(0,q.jsxs)(_f,{children:[(0,q.jsxs)(vf,{children:[(0,q.jsx)(yf,{children:O(`banners`)}),M?.overviewBanner&&(0,q.jsxs)(Uf,{onClick:()=>ct(!0),title:O(`adjust_framing`),type:`button`,children:[(0,q.jsx)(Yi,{size:12}),O(`adjust_framing`)]})]}),(0,q.jsxs)(bf,{children:[(0,q.jsx)(wf,{children:(0,q.jsx)(Tf,{$active:!M?.overviewBanner,onClick:Tt,title:O(`no_banner`),type:`button`,children:(0,q.jsxs)(Of,{children:[(0,q.jsx)(Ai,{size:16}),(0,q.jsx)(`span`,{children:O(`no_banner`)})]})})}),Gu.map(t=>(0,q.jsx)(wf,{children:(0,q.jsx)(Tf,{$active:M?.overviewBanner===t.id,onClick:()=>void H({overviewBanner:t.id}),title:`${O(t.concept)} · ${O(t.preset)}`,type:`button`,children:(0,q.jsx)(sf,{source:t.id,theme:e})})},t.id)),Uu.map(t=>(0,q.jsx)(wf,{children:(0,q.jsxs)(Tf,{$active:M?.overviewBanner===t.id,onClick:()=>void H({overviewBanner:t.id}),title:O(t.name),type:`button`,children:[(0,q.jsx)(sf,{poster:t.poster,source:t.id,theme:e}),(0,q.jsx)(Df,{children:(0,q.jsx)(Li,{size:11})})]})},t.id)),(M?.overviewBanners??[]).map(t=>(0,q.jsxs)(wf,{children:[(0,q.jsx)(Tf,{$active:M?.overviewBanner===t||M?.overviewBanner===`url:${t}`,onClick:()=>void H({overviewBanner:k(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,q.jsx)(sf,{source:t,theme:e})}),(0,q.jsx)(Ef,{onClick:()=>Et(t),title:O(`remove`),type:`button`,children:(0,q.jsx)(Ai,{size:10})})]},t)),(0,q.jsxs)(zf,{onClick:()=>void Ct(),title:O(`add_banner`),type:`button`,children:[(0,q.jsx)(vi,{size:18}),(0,q.jsx)(`span`,{children:O(`add_banner`)})]})]}),(0,q.jsxs)(xf,{children:[(0,q.jsx)(Sf,{onChange:e=>me(e.target.value),onKeyDown:e=>{e.key===`Enter`&&wt()},placeholder:`https://…`,value:pe}),(0,q.jsx)(Cf,{disabled:!k(pe),onClick:()=>void wt(),type:`button`,children:O(`add_url`)})]})]}),(0,q.jsx)(qf,{ref:V,$columns:xt,children:ft.map(e=>{let t=pt.indexOf(e.id);return(0,q.jsxs)(Jf,{children:[(0,q.jsxs)(Yf,{children:[(0,q.jsxs)(Xf,{children:[(0,q.jsxs)(gp,{children:[A?(0,q.jsx)(_p,{onClick:()=>ge(mt(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:O(`change_icon`),type:`button`,children:(0,q.jsx)(Is,{panel:e,size:15})}):(0,q.jsx)(Is,{panel:e,size:15}),mt(e.id)&&(0,q.jsx)(rf,{onPick:t=>Ft(e.id,t),value:e.icon})]}),A?(0,q.jsx)($f,{defaultValue:e.title,onBlur:t=>jt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,q.jsx)(Qf,{children:O(e.title)})]}),(0,q.jsxs)(Zf,{children:[!A&&e.kind===`recent`&&(0,q.jsx)(Uf,{onClick:()=>void Ge().then(d),title:O(`clear`),type:`button`,children:O(`clear`)}),!A&&e.kind===`frequent`&&(0,q.jsx)(Uf,{onClick:()=>void Ke().then(()=>p?.()),title:O(`clear_the_frequent_list`),type:`button`,children:O(`clear`)}),!A&&(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(Uf,{onClick:()=>c(e.path??a),title:O(`open_folder`),type:`button`,children:O(`open`)}),A&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ep,{$active:e.pinned,onClick:()=>Nt(e.id),title:e.pinned?O(`unpin_from_the_sidebar`):O(`pin_to_the_sidebar`),type:`button`,children:(0,q.jsx)(Ci,{size:12})}),(0,q.jsx)(ep,{$active:e.view===`list`,onClick:()=>Mt(e.id,`list`),title:O(`list`),type:`button`,children:(0,q.jsx)(wi,{size:13})}),(0,q.jsx)(ep,{$active:e.view===`grid`,onClick:()=>Mt(e.id,`grid`),title:O(`grid`),type:`button`,children:(0,q.jsx)(Ti,{size:13})}),(0,q.jsx)(ep,{disabled:t===0,onClick:()=>At(e.id,-1),title:O(`move_up`),type:`button`,children:(0,q.jsx)(gi,{size:12})}),(0,q.jsx)(ep,{disabled:t===pt.length-1,onClick:()=>At(e.id,1),title:O(`move_down`),type:`button`,children:(0,q.jsx)(gi,{size:12})}),(0,q.jsx)(ep,{onClick:()=>Pt(e.id),title:O(`remove_panel`),type:`button`,children:(0,q.jsx)(Ai,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Jt(e):(0,q.jsx)(pp,{children:Jt(e)})]},e.id)})})]}),st&&fe&&(0,q.jsx)(cf,{height:We,offset:Qe,onCancel:()=>ct(!1),onSave:e=>{H({overviewBannerOffset:e}),ct(!1)},source:fe,video:ue}),Ie&&(0,q.jsx)(yo,{directory:a,menu:{x:Ie.x,y:Ie.y,paths:[Ie.target.path]},onClose:()=>Le(null),onCopy:(e,t)=>void _t(e,t),onAddToTray:w,onAddFavorite:T,onRemoveFavorite:E,favoritePaths:ee,onExtractArchive:D,onOpen:dt,onOpenFile:e=>y?y(e):void we(e),shortcuts:Ut,target:Ie.target})]})}function Np({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,q.jsxs)(bp,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,q.jsx)(xp,{onClick:r,title:a(`cancel`),type:`button`,children:(0,q.jsx)(Ai,{size:11})}),(0,q.jsx)(xp,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,q.jsx)(ki,{size:12})})]})}function Pp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=o(),[c,l]=(0,L.useState)(null),[u,d]=(0,L.useState)(null),f=In(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,L.useEffect)(()=>{Ue().then(l,()=>l([]))},[a]),!c)return(0,q.jsx)(Cp,{children:s(`reading`)});if(c.length===0)return(0,q.jsx)(Cp,{children:s(`folders_you_open_often_show_up_here`)});let m=e=>oe(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,q.jsx)(tp,{children:c.map(e=>{let i=Ln(f,e.path);return(0,q.jsxs)(np,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Kt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,q.jsx)(rp,{children:i&&f.useIcons?(0,q.jsx)(Ls,{place:i,size:18}):(0,q.jsx)(tc,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(ip,{children:[(0,q.jsx)(`strong`,{children:i?.name||e.name}),(0,q.jsx)(ap,{children:m(e)})]})]},e.path)})}):(0,q.jsx)(op,{children:c.map(e=>{let i=Ln(f,e.path);return(0,q.jsxs)(sp,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Kt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,q.jsx)(Ls,{place:i,size:15}):(0,q.jsx)(tc,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,q.jsxs)(cp,{children:[(0,q.jsx)(`strong`,{children:i?.name||e.name}),(0,q.jsx)(ap,{children:m(e)})]})]},e.path)})})}function Fp({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:u,visibilityVersion:d}){let f=o(),[p,m]=(0,L.useState)(null),[h,g]=(0,L.useState)(null),_=In();return(0,L.useEffect)(()=>{e&&(m(null),Te(e).then(m,()=>m(null)))},[e,d]),(0,L.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&N(n.data.path,e)&&Te(e,!1).then(m,()=>void 0)})},[e]),p?t===`list`?(0,q.jsx)(fp,{children:(0,q.jsx)(yl,{error:null,listing:p,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void we(e)),onRefresh:()=>void Te(e,!1).then(m,()=>void 0),onRename:(e,t)=>m(n=>n&&{...n,entries:n.entries.map(n=>N(n.fullPath,e)?{...n,name:x(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:u,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...xe,columns:Se.columns??[]}})}):(0,q.jsx)(pp,{children:p.entries.length===0?(0,q.jsx)(Cp,{children:f(`this_folder_is_empty`)}):(0,q.jsx)(mp,{children:p.entries.map(e=>{let t=Ln(_,e.fullPath);return(0,q.jsxs)(hp,{$selected:h===e.fullPath,onClick:t=>{i?(g(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Kt(t)):we(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&_.useIcons?(0,q.jsx)(Ls,{place:t,size:16}):(0,q.jsx)(tc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,q.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,q.jsx)(Cp,{children:f(`reading`)})}var Ip=`yafm://`,Lp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Rp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function zp(e){return`${Ip}${e===`home`?`overview`:e}`}function Bp(e){return Rp(e)?Lp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Vp(e){let t=e.trim();if(t.length===0)return null;if(!Rp(t))return t;let n=Lp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?zp(n):null}function Hp({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let s=o(),c=In(),[l,u]=(0,L.useState)(!1),[d,f]=(0,L.useState)(``),[p,m]=(0,L.useState)([]),[h,g]=(0,L.useState)(0),[_,v]=(0,L.useState)(null),[y,b]=(0,L.useState)(null),[x,S]=(0,L.useState)(null),C=(0,L.useRef)(null),w=(0,L.useRef)(null),T=(0,L.useRef)(0);(0,L.useEffect)(()=>{if(!zc(e)){S(null);return}let t=Bc(e);if(!t){S(null);return}let n=!0;return Nc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);S({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&S(null)),()=>{n=!1}},[e]),(0,L.useEffect)(()=>{l||f(e.replace(/\\/g,`/`))},[e,l]),(0,L.useEffect)(()=>{r&&r!==T.current&&(T.current=r,f(e.replace(/\\/g,`/`)),u(!0))},[r,e]),(0,L.useEffect)(()=>{l&&C.current?.select()},[l]),(0,L.useEffect)(()=>{if(!l)return;let e=()=>u(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[l]);let E=()=>{f(e.replace(/\\/g,`/`)),u(!0)},ee=t=>{let n=d.trim(),r=!!(t?.ctrlKey||t?.metaKey);u(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,L.useEffect)(()=>{if(!l){m([]);return}let e=Kp(d);if(!e){m([]);return}let t=!1,n=window.setTimeout(()=>{Te(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));m(i),g(0)},()=>{t||m([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[d,l]);let D=(e,t=!1)=>{u(!1),i(e.path,t)};if((0,L.useLayoutEffect)(()=>{if(!l){v(null);return}let e=()=>{let e=w.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);v({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[l]),l)return(0,q.jsxs)(Qp,{onPointerDown:e=>e.stopPropagation(),ref:w,children:[(0,q.jsxs)(nm,{children:[(0,q.jsx)(`input`,{onChange:e=>f(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&p.length>0)e.preventDefault(),g(e=>(e+1)%p.length);else if(e.key===`ArrowUp`&&p.length>0)e.preventDefault(),g(e=>(e-1+p.length)%p.length);else if(e.key===`Tab`&&p.length>0){e.preventDefault();let t=p[Math.min(h,p.length-1)];f(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?p.length>0?D(p[Math.min(h,p.length-1)],e.ctrlKey||e.metaKey):ee(e):e.key===`Escape`&&(p.length>0?m([]):u(!1))},ref:C,spellCheck:!1,value:d}),(0,q.jsx)(rm,{onClick:()=>u(!1),title:s(`cancel`),type:`button`,children:(0,q.jsx)(Ai,{size:12})}),(0,q.jsx)(rm,{$apply:!0,onClick:ee,onPointerDown:e=>e.stopPropagation(),title:s(`open_this_path`),type:`button`,children:(0,q.jsx)(ki,{size:14})})]}),p.length>0&&_&&(0,Ua.createPortal)((0,q.jsx)($p,{onPointerDown:e=>e.stopPropagation(),style:{left:_.left,top:_.top,width:_.width},children:p.map((e,t)=>(0,q.jsxs)(em,{$active:t===h,onClick:t=>D(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>g(t),type:`button`,children:[(0,q.jsx)(tc,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,q.jsx)(tm,{children:e.name})]},e.path))}),document.body)]});let te=t?[{label:t,path:e,icon:n}]:Up(e,x)??Gp(e,c.places);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(qp,{onClick:E,title:s(`click_to_type_a_path`),children:te.map((t,n)=>(0,q.jsxs)(Jp,{$last:n===te.length-1,children:[n>0&&(0,q.jsx)(Xp,{children:(0,q.jsx)(xi,{size:9})}),(0,q.jsxs)(Zp,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):b({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,q.jsx)(Yp,{children:(0,q.jsx)(Ls,{place:t.place,size:13})}):t.icon&&(0,q.jsx)(Yp,{children:t.icon}),t.label]})]},t.path))}),y&&(0,q.jsx)(oo,{items:[{label:s(`open`),icon:(0,q.jsx)(bi,{size:14}),onSelect:()=>i(y.path)},{label:s(`open_in_new_tab`),icon:(0,q.jsx)(vi,{size:14}),onSelect:()=>i(y.path,!0)},{label:s(`copy_as_path`),icon:(0,q.jsx)(ha,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(y.path)},...Rp(y.path)?[{label:s(`open_with`),icon:(0,q.jsx)(Vi,{size:14}),onSelect:()=>void jt(y.path)},{label:s(`properties`),icon:(0,q.jsx)(Si,{size:14}),onSelect:()=>void At([y.path])}]:[]],onClose:()=>b(null),x:y.x,y:y.y})]})}function Up(e,t){let n=Bc(e);if(!n)return null;let r=Vc(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,q.jsx)(la,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function Wp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Gp(e,t){let n=Wp(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>N(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function Kp(e){if(Rp(e)||zc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var qp=v.div`
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
`,Jp=v.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Yp=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Xp=v.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,Zp=v.button`
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
`,Qp=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,$p=v.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Wa}
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
`,em=v.button`
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
`,tm=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nm=v.div`
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
`,rm=v.button`
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
`,im=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,q.jsx)(`path`,{d:`M4 4v6h6`})]});function am({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,onShowDetails:i,onPreviewChange:a,platform:s}){let c=o(),l=al(`recycle`),u=s===`windows`,[d,f]=(0,L.useState)([]),[p,m]=(0,L.useState)([]),[h,g]=(0,L.useState)(!1),[_,v]=(0,L.useState)(null),[y,b]=(0,L.useState)(!0),[x,S]=(0,L.useState)(!1),[w,T]=(0,L.useState)(null),[E,ee]=(0,L.useState)(!1),[D,te]=(0,L.useState)(()=>new Set),[O,ne]=(0,L.useState)(null),[k,A]=(0,L.useState)(()=>{let e=Yn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[j,re]=(0,L.useState)(null),[M,ie]=(0,L.useState)(null),se=(0,L.useRef)(null),ce=(0,L.useCallback)(async()=>{b(!0),T(null);try{f(await Fe(E))}catch(e){T(e instanceof Error?e.message:String(e))}finally{b(!1)}},[E]),N=(0,L.useCallback)(async()=>{try{f(await Fe(E))}catch{}},[E]);(0,L.useEffect)(()=>{ce()},[ce]),(0,L.useEffect)(()=>{let e=window.setInterval(()=>void N(),1e4);return()=>window.clearInterval(e)},[N]),(0,L.useEffect)(()=>{E||(m([]),g(!1),v(null))},[E]),(0,L.useEffect)(()=>{te(e=>{let t=new Set(d.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[d]);let P=(0,L.useMemo)(()=>{let e=new Set(d.map(e=>e.id));return[...d,...p.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=om(e,t,k.column);return k.descending?-n:n})},[d,p,k]),F=(0,L.useMemo)(()=>!t?.open||t.query.trim().length===0?P:P.filter(e=>On(e.name,t)||On(e.originalPath,t)),[P,t?.open,t?.query,t?.matchCase,t?.regex]),le=t?.open&&t.query.trim().length>0?F.length===0:P.length===0,ue=(0,L.useRef)(null);nf(ue,t??null,`[data-search-block]`,n??(()=>void 0),[P]),(0,L.useEffect)(()=>{te(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,L.useEffect)(()=>{r&&te(new Set(F.map(e=>e.id)))},[r]);let de=(0,L.useMemo)(()=>P.filter(e=>D.has(e.id)),[P,D]),fe=de.filter(e=>e.removable&&!e.isOrphan),pe=de.filter(e=>e.removable),me=(e,t)=>{let n=t.ctrlKey||t.metaKey;te(r=>{if(t.shiftKey&&O){let t=P.findIndex(e=>e.id===O),i=P.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(P[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),ne(e.id)},he=(0,L.useCallback)(()=>te(new Set(F.map(e=>e.id))),[F]),ge=F.length>0&&F.every(e=>D.has(e.id)),I=(0,L.useCallback)(async()=>{let e=fe.map(e=>e.id);if(e.length!==0){S(!0);try{let t=await Le(e);t.ok||await ja(oe(c,e.length,`restored_done_of_1_item`,`restored_done_of_total_items`,{done:t.done,total:e.length})),te(new Set),await ce()}finally{S(!1)}}},[ce,fe,c]),_e=(0,L.useCallback)(async()=>{let e=pe.map(e=>e.id);if(ie(null),e.length!==0){S(!0);try{let t=await Re(e);!t.ok&&!t.cancelled&&await ja(oe(c,e.length,`deleted_done_of_1_item`,`deleted_done_of_total_items`,{done:t.done,total:e.length})),te(new Set),await ce()}finally{S(!1)}}},[pe,ce,c]),ve=async()=>{ie(null),S(!0);try{await Ie(E),te(new Set),await ce()}finally{S(!1)}},ye=async()=>{S(!0),v(null);try{let e=await Be();if(e.cancelled){v(`Elevation was declined — nothing was read.`);return}if(e.failed){v(`The elevated helper could not produce a report. Try again.`);return}m(e.entries),g(!0)}finally{S(!1)}},be=async()=>{S(!0),ie(null);try{await B(),m([]),g(!1),v(null),await ce()}finally{S(!1)}},R=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},xe=e=>{navigator.clipboard.writeText(e.originalPath)},Se=(e,t)=>{e.preventDefault(),t&&!D.has(t.id)&&te(new Set([t.id])),re({x:e.clientX,y:e.clientY})};(0,L.useEffect)(()=>(el(`recycle`,D.size>0?(e,t)=>re({x:e,y:t}):null),()=>el(`recycle`,null)),[D]),(0,L.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),he()):e.key===`delete`?(e.preventDefault(),pe.length>0&&ie(`delete`)):e.key===`Enter`&&fe.length>0?(e.preventDefault(),I()):e.key===`Escape`&&(te(new Set),re(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[pe.length,fe.length,I,he]);let Ce=[{label:c(`restore`),icon:(0,q.jsx)(im,{width:14,height:14}),disabled:fe.length===0,onSelect:()=>void I()},{label:c(`delete_permanently`),icon:(0,q.jsx)(Oi,{size:14}),danger:!0,disabled:pe.length===0,onSelect:()=>ie(`delete`)},{label:c(`properties`),icon:(0,q.jsx)(Si,{size:14}),disabled:de.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=de;e&&ze(e.id)}},{label:c(`open_original_location`),icon:(0,q.jsx)(fi,{size:14}),disabled:de.length!==1,onSelect:()=>{let[e]=de;e&&R(e)}},{label:c(`copy_original_path`),icon:(0,q.jsx)(ha,{size:14}),disabled:de.length!==1,onSelect:()=>{let[e]=de;e&&xe(e)}},{label:c(`select_all`),separatorBefore:!0,onSelect:he},{label:c(`refresh`),icon:(0,q.jsx)(_i,{size:14}),onSelect:()=>void ce()}],we=de.length>0?de[0]:null,Te=we?{name:we.name,path:we.contentPath||we.originalPath,isDirectory:we.isDirectory,size:we.size,modified:we.deleted,fields:[{label:c(`type`),value:c(cm(we))},{label:c(`original_location`),value:we.originalPath},{label:c(`date_deleted`),value:ae(we.deleted)},{label:c(`size`),value:we.isDirectory?`—`:C(we.size)},...we.owner?[{label:c(`owner`),value:we.owner}]:[],{label:c(`status`),value:we.isOrphan?c(`metadata_only`):we.removable?c(`restorable`):c(`other_profile`)}]}:null,Ee=de.length>1?oe(c,de.length,`k_1_item_selected`,`count_items_selected`):void 0,De=(0,L.useRef)(``);return(0,L.useEffect)(()=>{let e=`${Te?.path??``}|${Te?.modified??0}|${Ee??``}`;De.current!==e&&(De.current=e,a?.(Te,Ee))},[Te,Ee,a]),(0,q.jsxs)(um,{ref:se,onContextMenu:e=>Se(e),children:[(0,q.jsxs)(dm,{children:[(0,q.jsxs)(fm,{children:[(0,q.jsx)(Oi,{size:16}),(0,q.jsx)(`span`,{children:c(`recycle_bin`)}),(0,q.jsxs)(pm,{children:[y?`…`:oe(c,P.length,`k_1_item`,`count_items`),D.size>0&&` · ${c(`count_selected`,{count:D.size})}`]})]}),(0,q.jsxs)(mm,{children:[(0,q.jsx)(gm,{$on:E,onClick:()=>ee(e=>!e),title:c(`show_metadata_records_whose_content_is_already_gone`),type:`button`,children:c(`orphans`)}),E&&u&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(hm,{disabled:x||h,onClick:()=>void ye(),title:c(h?`the_administrator_view_is_already_loaded`:`ask_for_administrator_rights_and_list_every_profile_s_leftovers`),type:`button`,children:c(x?`working`:h?`admin_view_loaded`:`show_all_admin`)}),h&&p.length>0&&(0,q.jsx)(hm,{disabled:x,onClick:()=>ie(`purge`),type:`button`,children:c(`delete_every_orphan`)})]}),(0,q.jsx)(hm,{disabled:x||fe.length===0,onClick:()=>void I(),type:`button`,children:c(`restore`)}),(0,q.jsx)(hm,{$danger:!0,disabled:x||pe.length===0,onClick:()=>ie(`delete`),type:`button`,children:c(`delete`)}),(0,q.jsx)(hm,{disabled:x||P.length===0,onClick:()=>ie(`empty`),type:`button`,children:c(`empty`)}),(0,q.jsx)(_m,{onClick:()=>void ce(),title:c(`refresh`),type:`button`,children:(0,q.jsx)(_i,{size:14})}),l.available&&(0,q.jsx)(_m,{onClick:e=>l.open(e.clientX,e.clientY),title:c(`selection_menu`),type:`button`,children:(0,q.jsx)(Sa,{size:14})})]})]}),_&&(0,q.jsx)(Rm,{children:_}),w&&(0,q.jsx)(zm,{children:w}),!w&&(0,q.jsx)(Lm,{children:(0,q.jsxs)(vm,{ref:ue,children:[(0,q.jsxs)(bm,{children:[(0,q.jsx)(Em,{$checked:ge,$partial:!ge&&D.size>0,onClick:()=>ge?te(new Set):he(),title:c(ge?`select_none`:`select_all`),type:`button`,children:ge?(0,q.jsx)(ki,{size:9}):D.size>0&&(0,q.jsx)(Dm,{})}),(0,q.jsxs)(xm,{onClick:()=>Oe(`name`),type:`button`,children:[c(`name`),sm(k,`name`)]}),(0,q.jsxs)(xm,{onClick:()=>Oe(`original`),type:`button`,children:[c(`original_location`),sm(k,`original`)]}),(0,q.jsxs)(xm,{onClick:()=>Oe(`deleted`),type:`button`,children:[c(`date_deleted`),sm(k,`deleted`)]}),(0,q.jsxs)(xm,{onClick:()=>Oe(`size`),type:`button`,children:[c(`size`),sm(k,`size`)]}),(0,q.jsxs)(xm,{onClick:()=>Oe(`type`),type:`button`,children:[c(`type`),sm(k,`type`)]}),(0,q.jsx)(`span`,{})]}),(0,q.jsxs)(Sm,{onClick:e=>{e.target===e.currentTarget&&te(new Set)},children:[!y&&le&&(0,q.jsx)(zm,{children:t?.open&&t.query.trim().length>0?c(`no_matching_items`):c(`the_recycle_bin_is_empty`)}),P.map(e=>(0,q.jsxs)(Cm,{$checked:D.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>me(e,t),onContextMenu:t=>Se(t,e),onDoubleClick:()=>{te(new Set([e.id])),ne(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,q.jsx)(Tm,{$checked:D.has(e.id),children:D.has(e.id)&&(0,q.jsx)(ki,{size:9})}),(0,q.jsxs)(Om,{children:[(0,q.jsx)(lm,{entry:e}),(0,q.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,q.jsx)(Im,{children:c(`metadata_only`)}),e.owner&&(0,q.jsx)(Im,{$other:!0,children:c(`other_profile`)})]}),(0,q.jsx)(Am,{children:e.originalPath}),(0,q.jsx)(jm,{children:ae(e.deleted)}),(0,q.jsx)(Mm,{children:e.isDirectory?`—`:C(e.size)}),(0,q.jsx)(Nm,{children:c(cm(e))}),(0,q.jsxs)(Pm,{children:[e.removable&&!e.isOrphan&&(0,q.jsx)(Fm,{onClick:t=>{t.stopPropagation(),Le([e.id]).then(ce)},title:c(`restore_to_its_original_folder`),type:`button`,children:(0,q.jsx)(im,{})}),e.removable&&(0,q.jsx)(Fm,{$danger:!0,onClick:t=>{t.stopPropagation(),te(new Set([e.id])),ie(`delete`)},title:e.isOrphan?c(`remove_the_leftover_record`):c(`delete_permanently`),type:`button`,children:(0,q.jsx)(Oi,{size:13})})]})]},e.id))]})]})}),j&&(0,q.jsx)(oo,{items:Ce,onClose:()=>re(null),x:j.x,y:j.y}),(0,q.jsx)(Jo,{confirmLabel:c(M===`empty`?`empty_the_bin`:M===`purge`?`delete_every_orphan`:`delete`),danger:!0,message:M===`empty`?oe(c,P.length,`permanently_delete_1_item_this_cannot_be_undone`,`permanently_delete_count_items_this_cannot_be_undone`):M===`purge`?c(`permanently_delete_every_leftover_record_including_the_ones_owned_by_other_profiles_this_cannot_be_undone`):oe(c,pe.length,`permanently_delete_1_selected_item_this_cannot_be_undone`,`permanently_delete_count_selected_items_this_cannot_be_undone`),onCancel:()=>ie(null),onConfirm:()=>{M===`empty`?ve():M===`purge`?be():_e()},open:M!==null,title:c(M===`empty`?`empty_the_recycle_bin`:M===`purge`?`delete_every_orphan`:`delete_permanently`)})]});function Oe(e){A(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Xn(`yafm.recycle.sort`,n),n})}}function om(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return cm(e).localeCompare(cm(t),void 0,{sensitivity:`base`})}}function sm(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function cm(e){if(e.isDirectory)return`folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`file`}function lm({entry:e}){let t=fn(e.originalPath,e.isDirectory);return(0,q.jsx)(km,{children:t?(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,q.jsx)(fi,{}):(0,q.jsx)(pi,{})})}var um=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,dm=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 16px 22px 10px;
    border-bottom: 1px solid var(--border-color);
`,fm=v.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);

    svg {
        color: var(--text-muted);
    }
`,pm=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,mm=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,hm=v.button`
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
`,gm=v(hm)`
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`var(--border-color)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`var(--bg-input)`};
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,_m=v.button`
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
`,vm=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,ym=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,bm=v.div`
    display: grid;
    grid-template-columns: ${ym};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,xm=v.button`
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
`,Sm=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Cm=v.div`
    display: grid;
    grid-template-columns: ${ym};
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
`,wm=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Tm=v.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Em=v.button`
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
`,Dm=v.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Om=v(wm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,km=v.span`
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
`,Am=v(wm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,jm=v(wm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Mm=v(wm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Nm=v(wm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Pm=v.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Fm=v.button`
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
`,Im=v.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Lm=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Rm=v.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,zm=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Bm(){return l.available?(await l.request(`app.tags`)).tags:[]}async function Vm(e){return!l.available||!e?!1:(await l.request(`app.tags.delete`,{name:e})).ok}async function Hm(e,t){return!l.available||!e?[]:(await l.request(`app.tags.create`,{name:e,color:t})).tags}async function Um(e,t){return!l.available||!e?!1:(await l.request(`app.tags.color`,{name:e,color:t})).ok}async function Wm(e,t){return!l.available||!e||!t?!1:(await l.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function Gm(){let e=o();return(0,q.jsx)(Km,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var Km=v.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,qm=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function Jm(e){return`"${e.replaceAll(`"`,``)}"`}function Ym(e){let t=document.documentElement.style;for(let n of qm){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Jm(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Xm(){return l.available?(await l.request(`app.fonts`)).fonts??[]:[]}function Zm({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let s=o(),[c,l]=(0,L.useState)(null),[u,d]=(0,L.useState)(``),f=(0,L.useRef)(null),p=(0,L.useRef)(null),m=(0,L.useMemo)(()=>{let e=u.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,u]);(0,L.useEffect)(()=>{if(!c)return;p.current?.focus();let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[c]);let h=()=>{if(c){l(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;d(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;l({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},g=e=>{a(e),l(null)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Qm,{"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:i,onClick:h,ref:f,type:`button`,children:[(0,q.jsx)($m,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,q.jsx)(eh,{children:`▾`})]}),c&&(0,Ua.createPortal)((0,q.jsxs)(th,{"data-font-menu":`true`,role:`listbox`,style:{left:c.left,maxHeight:c.maxHeight,top:c.top,width:c.width},children:[(0,q.jsxs)(nh,{children:[(0,q.jsx)(hi,{size:12}),(0,q.jsx)(rh,{onChange:e=>d(e.target.value),placeholder:s(`filter_fonts`),ref:p,value:u})]}),(0,q.jsxs)(ih,{children:[(0,q.jsxs)(ah,{$active:!e,"aria-selected":!e,onClick:()=>g(null),role:`option`,type:`button`,children:[(0,q.jsxs)(sh,{children:[n,` `,(0,q.jsx)(lh,{children:s(`default_2`)})]}),!e&&(0,q.jsx)(ki,{size:11})]}),m.map(t=>(0,q.jsxs)(ah,{$active:e===t,"aria-selected":e===t,onClick:()=>g(t),role:`option`,type:`button`,children:[(0,q.jsxs)(oh,{children:[(0,q.jsx)(sh,{children:t}),(0,q.jsx)(ch,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,q.jsx)(ki,{size:11})]},t)),m.length===0&&(0,q.jsx)(uh,{children:s(`no_matching_font`)})]})]}),document.body)]})}var Qm=v.button`
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
`,$m=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,eh=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,th=v.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${eo}
`,nh=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,rh=v.input`
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
`,ih=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,ah=v.button`
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
`,oh=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,sh=v.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ch=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lh=v.span`
    color: var(--text-muted);
    font-size: 10px;
`,uh=v.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,dh=[{id:`goBack`,label:`back`,note:`the_previous_folder_in_this_tab_the_mouse_back_button_and_the_browser_back_key_always_work`},{id:`goForward`,label:`forward`,note:`the_next_folder_in_this_tab_the_mouse_forward_button_and_the_browser_forward_key_always_work`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder_like_alt_home_in_dolphin`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path_ctrl_l_in_dolphin`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`ctrl_d_copies_too_following_kde_s_file_manager`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`delete_is_del_by_default_not_ctrl_d`},{id:`deletePermanently`,label:`delete_permanently`,note:`bypasses_the_recycle_bin_dolphin_uses_shift_delete`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected_dolphin_uses_ctrl_shift_a`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory_f10_also_works`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_windows_terminal_in_the_current_folder_dolphin_uses_f4_for_its_terminal_panel`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one_f3_in_dolphin`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],fh=`en`,ph=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],mh=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],hh=new Date(2026,10,5,16,8).getTime(),gh=`system`,_h={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},vh=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],yh=`yafm.colors.recent`;function bh(){let e=Yn(yh);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function xh({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let s=o(),[c,l]=(0,L.useState)([]),[u,d]=(0,L.useState)(null),[m,_]=(0,L.useState)(null),v=f(g(m?.themeMode)),[y,b]=(0,L.useState)(null),[T,E]=(0,L.useState)(``),[ee,D]=(0,L.useState)(`file`),[te,O]=(0,L.useState)(!1),[ne,A]=(0,L.useState)(!1),[j,re]=(0,L.useState)(null),[M,ie]=(0,L.useState)(ft),[ae,N]=(0,L.useState)(!1),[P,_e]=(0,L.useState)(null),[ve,ye]=(0,L.useState)(null),[be,R]=(0,L.useState)(null),[xe,Ce]=(0,L.useState)(!1),[we,Te]=(0,L.useState)(null),[Ee,De]=(0,L.useState)(!1),[Oe,ke]=(0,L.useState)(null),[Ae,je]=(0,L.useState)(null),[Me,Ne]=(0,L.useState)(!1),[Pe,Fe]=(0,L.useState)([]),[z,Ie]=(0,L.useState)(null),[Le,Re]=(0,L.useState)(!1),[ze,Be]=(0,L.useState)(null),[B,Ve]=(0,L.useState)(``),[He,Ue]=(0,L.useState)(Rs),[We,Ge]=(0,L.useState)(null),[Ke,Je]=(0,L.useState)(null),[Ye,Xe]=(0,L.useState)(``),[$e,et]=(0,L.useState)(``),[st,lt]=(0,L.useState)(null),[mt,_t]=(0,L.useState)(bh),[vt,yt]=(0,L.useState)({}),[bt,xt]=(0,L.useState)(null),[H,St]=(0,L.useState)(null),[Ct,wt]=(0,L.useState)(!1),[Tt,Et]=(0,L.useState)(null),[Dt,Ot]=(0,L.useState)(null),kt=(0,L.useRef)(!1),[At,jt]=(0,L.useState)(null),[Mt,Nt]=(0,L.useState)(vh[0].id),[Pt,Ft]=(0,L.useState)([]),[It,Lt]=(0,L.useState)(null),[Rt,zt]=(0,L.useState)(``),[Bt,Vt]=(0,L.useState)(!1),[Ht,Wt]=(0,L.useState)(null),[Gt,Kt]=(0,L.useState)(null),[Yt,Xt]=(0,L.useState)(!1),[Zt,Qt]=(0,L.useState)(``),$t=(0,L.useRef)(null),en=(0,L.useRef)({}),tn=m?.defaultView??Se,nn=m?.themePresets??[],rn=e?.platform===`windows`,an=rn?ve?ve.registered&&ve.pathMatches:!1:m?.archiveHandler??!1,on=ve?.registered??m?.archiveHandler??!1,sn=rn?be?be.registered&&be.pathMatches:!1:m?.defaultFileManager??!1,ln=rn?M.registered&&M.pathMatches:m?.linksEnabled??!1;nf($t,r??null,`section`,i??(()=>void 0),[m]),(0,L.useEffect)(()=>{let e=$t.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Nt(vh[vh.length-1].id);return}let n=t+110,r=vh[0].id;for(let{id:e}of vh){let t=en.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Nt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let un=e=>t=>{en.current[e]=t},dn=e=>{en.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),Nt(e)};(0,L.useEffect)(()=>{t&&dn(t)},[t]),(0,L.useEffect)(()=>{p().then(e=>l(e.available),()=>l([]))},[]),(0,L.useEffect)(()=>{Xm().then(Ft,()=>Ft([]))},[]),(0,L.useEffect)(()=>{ht().then(Wt,()=>Wt(null))},[]),(0,L.useEffect)(()=>{de().then(St,()=>void 0)},[]),(0,L.useEffect)(()=>{qe().then(d,()=>d(null)),Ze().then(_,()=>_(null)),pt().then(ie,()=>ie(ft)),rt().then(ye,()=>ye(null)),tt().then(R,()=>R(null)),Bm().then(Fe,()=>Fe([]))},[]),(0,L.useEffect)(()=>{let e=()=>void ut().then(re,()=>re(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let U=async e=>{if(!m)return;let t={...m,...e};Object.keys(e).every(e=>t[e]===m[e])||(_(t),cn(),_(await ot(t)),n())},fn=async e=>{let t=await Da(e);if(!t)return;let n=m?.backgroundCustom??[];await U({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},pn=async()=>{let e=Zt.trim();if(!m||!k(e))return;let t=m.backgroundCustom??[];Qt(``),await U({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},mn=e=>{if(!m)return;let t=m.backgroundSource;U({backgroundCustom:m.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},W=async()=>{if(!m)return;let t=await Ea();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;m.protectedPaths.includes(r)||await U({protectedPaths:[...m.protectedPaths,r]})},G=()=>{let e=Ye.trim();m&&e&&!m.protectedPaths.includes(e)&&(Xe(``),U({protectedPaths:[...m.protectedPaths,e]}))},K=()=>{if(!m||!We)return;let e=We.value.trim(),t=We.from;Ge(null),e.length!==0&&e!==t&&U({protectedPaths:m.protectedPaths.map(n=>n===t?e:n)})},hn=e=>{m&&U({protectedPaths:m.protectedPaths.filter(t=>t!==e)})},gn=async()=>{let e=await Qe();e.length>0&&await U({protectedPaths:e})},_n=()=>{if(!m||!Ke)return;let e=Ke.value.trim(),t=Ke.from;Je(null),e&&e!==t&&U({directoryIndexBlacklist:m.directoryIndexBlacklist.map(n=>n===t?e:n)})},vn=()=>{let e=$e.trim();m&&e&&!m.directoryIndexBlacklist.includes(e)&&(et(``),U({directoryIndexBlacklist:[...m.directoryIndexBlacklist,e]}))},yn=async()=>{if(!m)return;let t=await Ea();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;m.directoryIndexBlacklist.includes(r)||await U({directoryIndexBlacklist:[...m.directoryIndexBlacklist,r]})},bn=e=>{m&&U({directoryIndexBlacklist:m.directoryIndexBlacklist.filter(t=>t!==e)})},xn=()=>{U({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Sn=()=>{if(!m||st===null)return;let e=st.trim()||`yyyy/MM/dd HH:mm`;lt(null),e!==m.timeFormatPattern&&U({timeFormatPattern:e})},Cn=(e,t)=>{_t(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Xn(yh,i),i})},wn=se(m?.accentColor,ce),Tn=se(m?.secondaryColor,h),En=(e,t)=>{m&&(Cn(`accent`,wn),Cn(`secondary`,Tn),U({accentColor:e,secondaryColor:t}))},Dn=(e,t)=>{m&&(Cn(e,e===`accent`?wn:Tn),U(e===`accent`?{accentColor:t}:{secondaryColor:t}))},On=async()=>{wt(!0),Et(null);try{St(await fe())}catch{Et(s(`could_not_check_for_updates`))}finally{wt(!1)}},kn=async()=>{kt.current=!1,Et(null),Ot({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await pe();e.ok||An(e.error??``)}catch(e){An(e instanceof Error?e.message:String(e))}},An=e=>Ot(t=>t&&{...t,phase:`error`,error:e}),jn=()=>{Ot(null),me().catch(e=>Et(e instanceof Error?e.message:String(e)))},Mn=async()=>{Ot(e=>e&&{...e,phase:`installing`});try{let e=await he();e.ok||An(e.error??s(`the_update_failed`))}catch(e){An(e instanceof Error?e.message:String(e))}};(0,L.useEffect)(()=>ge(e=>Ot(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,L.useEffect)(()=>I(e=>Ot(t=>t&&{...t,changelog:e.text})),[]),(0,L.useEffect)(()=>{Dt?.phase!==`ready`||kt.current||(kt.current=!0,Mn())},[Dt?.phase]);let Nn=async()=>{if(!m||!bt)return;let e=bt.name.trim()||`${bt.accent.toUpperCase()} / ${bt.secondary.toUpperCase()}`,t=[...m.themePresets,{name:e,accent:bt.accent,secondary:bt.secondary}];xt(null),await U({themePresets:t})},Pn=async e=>{m&&await U({themePresets:m.themePresets.filter((t,n)=>n!==e)})},Fn=e=>{let t=At;jt(null),t&&t.role===e&&(e===`accent`?wn:Tn).toLowerCase()!==t.color.toLowerCase()&&Cn(e,t.color)},In=async()=>{let e=B.trim();if(e&&!Le){Re(!0),Be(null);try{Fe(await Hm(e,He)),Ve(``)}catch{Be(s(`could_not_add_the_tag`))}finally{Re(!1)}}},Ln=async(e,t)=>{Fe(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await Um(e,t)||Be(s(`could_not_change_the_tag_s_color`))},Rn=async e=>{if(Le)return;Re(!0),Be(null);let t=await Vm(e);Fe(await Bm()),t||Be(`"${e}" is still used by a folder whose index could not be updated.`),Re(!1)},zn=async()=>{let e=z;if(!e||Le)return;let t=e.value.trim();t.length===0||t===e.name?Ie(null):(Re(!0),Be(null),await Wm(e.name,t)?(Fe(await Bm()),Ie(null)):Be(`Could not rename "${e.name}".`),Re(!1))},Bn=async e=>{let t=new Set(tn.columns??Se.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=ul.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await U({defaultView:{...tn,columns:n}})},Vn=async()=>{if(ae)return;let e=!ln;N(!0),_e(null);try{let t=await V(e),r=t.registered&&t.pathMatches;ie(t),_(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&_e(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{_e(`The request to Windows failed. Try again.`)}finally{N(!1)}},Hn=async()=>{if(Ee||!m)return;let e=!sn;De(!0),ke(null);try{let t=await nt(e);R(t);let r=rn?t.registered&&t.pathMatches:e;_(e=>e&&{...e,defaultFileManager:r}),n(),rn&&r!==e&&ke(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ke(`The request to Windows failed. Try again.`)}finally{De(!1)}},Un=async()=>{if(!xe){Ce(!0),Te(null);try{let e=await it();ye(e);let t=e.registered&&e.pathMatches;_(e=>e&&{...e,archiveHandler:t}),n(),t||Te(`Windows did not accept the archive registration. Try again.`)}catch{Te(`The request to Windows failed. Try again.`)}finally{Ce(!1)}}},Wn=async()=>{if(!xe){Ce(!0),Te(null);try{let e=await at();ye(e),_(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&Te(`The registration is still there. Try turning it off again.`)}catch{Te(`The request to Windows failed. Try again.`)}finally{Ce(!1)}}},Gn=async(e,t)=>{if(!m)return;let n={...m.extensionIcons};t===null?delete n[e]:n[e]=t,await U({extensionIcons:n})},Kn={...Ut,...m?.shortcuts};(0,L.useEffect)(()=>{if(!Ae)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){je(null);return}let t=qt(e);t&&(je(null),U({shortcuts:{...Kn,[Ae]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[Ae,m]),(0,L.useEffect)(()=>{if(!Me)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Ne(!1);return}let t=qt(e);t&&(Ne(!1),U({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[Me,m]);let qn=async e=>{await U({recentLimit:Math.min(Math.max(e,0),50)})},Jn=(e,t)=>{let n=t??vt[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};yt(t=>({...t,[e]:void 0})),U(i)},Yn=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Lt(null),await U({sharePortMode:`custom`,sharePort:n}),await Lc(n,`custom`)},Zn=async e=>{let t=e===`custom`,n=t?m?.sharePort??8080:null;await U({sharePortMode:t?`custom`:`random`,sharePort:n}),await Lc(n,t?`custom`:`random`)};(0,L.useEffect)(()=>{Jc().then(Vt,()=>void 0)},[]);let Qn=async()=>{Rt.length!==0&&(Vt(await Yc(Rt)),zt(``))},$n=async()=>{Vt(await Yc(null))},er=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;Xt(!0),Kt(null);try{let e=await gt(t);Wt(e),Kt(e.error),e.error||await U({startupMode:t})}finally{Xt(!1)}},tr=async e=>{await U({galleryRoots:e.length>0?e:null})},nr=async()=>{let e=await Ea(),t=m?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await tr([...t,e])},rr=async()=>{let e=T.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Gn(e,ee),E(``))},ir=async()=>{A(!0);try{let e=await Ea();if(!e)return;let t=await Da([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await ct(e.replace(/[\\/][^\\/]+$/,``),x(e),`file:${t}`)&&(cn(),b({folder:e,icon:t}))}finally{A(!1)}},ar=async(e,t)=>{let n={...m?.fonts};t?n[e]=t:delete n[e],await U({fonts:n})};return(0,q.jsxs)(Ph,{children:[(0,q.jsxs)(Fh,{ref:$t,children:[(0,q.jsxs)(Ih,{ref:un(`application`),children:[(0,q.jsx)(Nh,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`version`)}),(0,q.jsx)(Mg,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`platform`)}),(0,q.jsx)(Mg,{children:e?.platform??`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`language`)}),(0,q.jsx)($,{children:s(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Ah,{disabled:!m,onChange:e=>void U({language:e}),options:[gh,...c.length>0?c:[fh]],value:m?.language??fh})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`picker_window_size`)}),(0,q.jsx)($,{children:s(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Hg,{inputMode:`numeric`,onBlur:e=>Jn(`width`,e.currentTarget.value),onChange:e=>yt(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:vt.width??String(m?.pickerWindowWidth??1200)}),(0,q.jsx)(Mg,{children:`×`}),(0,q.jsx)(Hg,{inputMode:`numeric`,onBlur:e=>Jn(`height`,e.currentTarget.value),onChange:e=>yt(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:vt.height??String(m?.pickerWindowHeight??800)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`web_server_port`)}),(0,q.jsx)($,{children:s(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(So,{disabled:!m,onChange:e=>void Zn(e),options:[{value:`random`,label:s(`random`)},{value:`custom`,label:s(`custom_port`)}],value:m?.sharePortMode??`random`,width:160})})]}),m?.sharePortMode===`custom`&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`custom_port`)}),(0,q.jsx)($,{children:s(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Hg,{inputMode:`numeric`,onBlur:e=>void Yn(e.currentTarget.value),onChange:e=>Lt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:It??(m?.sharePort?String(m.sharePort):``)})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`link_paths`)}),(0,q.jsx)($,{children:s(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(So,{disabled:!m,onChange:e=>void U({linkPathMode:e}),options:[{value:`relative`,label:s(`relative`)},{value:`absolute`,label:s(`absolute`)}],value:m?.linkPathMode??`relative`,width:160})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`global_hotkey`)}),(0,q.jsx)($,{children:s(`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(b_,{$listening:Me,disabled:!m,onClick:()=>Ne(!0),type:`button`,children:Me?s(`press_a_key`):m?.globalHotkey?Jt(m.globalHotkey):s(`none`)}),m?.globalHotkey&&(0,q.jsx)(Fg,{onClick:()=>void U({globalHotkey:null}),type:`button`,children:s(`clear`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`open_yafm_links`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),M.registered&&!M.pathMatches&&(0,q.jsx)(jg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:M.registeredPath??`?`})}),P&&(0,q.jsx)(jg,{children:P})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(zg,{$on:ln,children:s(ln?`active`:`off`)}),(0,q.jsx)(Bg,{$on:ln,disabled:ae,onClick:()=>void Vn(),title:s(ln?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,q.jsx)(Vg,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_as_the_default_file_manager`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),be?.registered&&!be.pathMatches&&(0,q.jsx)(jg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:be.registeredPath??`?`})}),Oe&&(0,q.jsx)(jg,{children:Oe})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(zg,{$on:sn,children:s(sn?`active`:`off`)}),(0,q.jsx)(Bg,{$on:sn,disabled:!m||Ee,onClick:()=>void Hn(),title:s(sn?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,q.jsx)(Vg,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`open_archives_with_this_app`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,q.jsx)($,{children:s(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),ve?.registered&&!ve.pathMatches&&(0,q.jsx)(jg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ve.registeredPath??`?`})}),we&&(0,q.jsx)(jg,{children:we})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(zg,{$on:an,children:s(an?`active`:`off`)}),(0,q.jsx)(x_,{disabled:!m||xe||an,onClick:()=>void Un(),type:`button`,children:s(`register`)}),e?.platform===`windows`&&(0,q.jsx)(x_,{onClick:()=>void F(`ms-settings:defaultapps`),type:`button`,children:s(`default_apps`)}),(0,q.jsx)(Rg,{disabled:!m||xe||!on,onClick:()=>void Wn(),type:`button`,children:s(`unregister`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reopen_the_tabs_that_were_open`)}),(0,q.jsx)($,{children:s(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,q.jsx)(Bg,{$on:m?.restoreTabs??!0,disabled:!m,onClick:()=>void U({restoreTabs:!m?.restoreTabs}),type:`button`,children:(0,q.jsx)(Vg,{})})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`share-access`),children:[(0,q.jsx)(Nh,{note:`share_access_note`,title:`share_access`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Q,{children:s(`share_access_require_approval`)}),(0,q.jsx)(Gm,{})]}),(0,q.jsx)($,{children:s(`share_access_note`)})]}),(0,q.jsx)(Bg,{$on:m?.shareAccessEnabled??!0,disabled:!m,onClick:()=>void U({shareAccessEnabled:!(m?.shareAccessEnabled??!0)}),type:`button`,children:(0,q.jsx)(Vg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Q,{children:s(`share_access_approval_minutes`)})}),(0,q.jsx)(Z,{children:(0,q.jsx)(Og,{max:1440,min:1,onChange:e=>void U({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:m?.shareApprovalMinutes??60})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Q,{children:s(`share_access_denial_seconds`)})}),(0,q.jsx)(Z,{children:(0,q.jsx)(Og,{max:3600,min:1,onChange:e=>void U({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:m?.shareDenialSeconds??10})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Ag,{children:(0,q.jsx)(Q,{children:s(`password`)})}),(0,q.jsx)($,{children:s(`share_access_password_note`)}),Bt&&(0,q.jsx)($,{children:s(`share_access_password_is_set`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(kg,{autoComplete:`new-password`,onChange:e=>zt(e.target.value),placeholder:s(`password`),type:`password`,value:Rt}),(0,q.jsx)(x_,{disabled:Rt.length===0,onClick:()=>void Qn(),type:`button`,children:s(`save`)}),Bt&&(0,q.jsx)(Rg,{onClick:()=>void $n(),type:`button`,children:s(`clear`)})]})]}),(0,q.jsx)(Y,{children:(0,q.jsxs)(X,{children:[(0,q.jsx)(Ag,{children:(0,q.jsx)(Q,{children:s(`devices`)})}),(0,q.jsx)($,{children:s(`share_access_no_devices`)})]})}),(0,q.jsx)(Sh,{approvalMinutes:m?.shareApprovalMinutes??60,denialSeconds:m?.shareDenialSeconds??10})]})]}),(0,q.jsxs)(Ih,{ref:un(`startup`),children:[(0,q.jsx)(Nh,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`start_with_the_computer`)}),(0,q.jsx)($,{children:s(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),Gt&&(0,q.jsx)(jg,{children:Gt}),Ht&&!Ht.supported&&(0,q.jsx)(jg,{children:s(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(So,{disabled:!m||Yt||Ht!==null&&!Ht.supported,onChange:e=>void er(e),options:[{value:`none`,label:s(`none`)},{value:`shortcut`,label:s(`shortcut`)},{value:`task`,label:s(`scheduled_task`)}],value:Ht?.mode??m?.startupMode??`none`,width:170})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`start_hidden_in_the_tray`)}),(0,q.jsx)($,{children:s(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Bg,{$on:m?.startHidden??!1,disabled:!m,onClick:()=>void U({startHidden:!m?.startHidden}),type:`button`,children:(0,q.jsx)(Vg,{})})})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`fonts`),children:[(0,q.jsx)(Nh,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`}),(0,q.jsxs)(Rh,{children:[qm.map(e=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(e.label)}),(0,q.jsx)($,{children:s(`falls_back_to_font_until_another_family_is_chosen`,{font:s(e.fallback)})})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Zm,{defaultLabel:s(e.fallback),disabled:!m,fonts:Pt,onChange:t=>void ar(e.id,t),sample:e.sample,value:m?.fonts?.[e.id]??null})})]},e.id)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset`)}),(0,q.jsx)($,{children:s(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(x_,{onClick:()=>void U({fonts:{}}),type:`button`,children:s(`reset`)})})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`time`),children:[(0,q.jsx)(Nh,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`}),(0,q.jsx)(Rh,{children:(0,q.jsxs)(zh,{children:[(0,q.jsxs)(Bh,{children:[(0,q.jsx)(Q,{children:s(`format`)}),(0,q.jsx)($,{children:s(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,q.jsx)(m_,{children:mh.map(e=>(0,q.jsx)(h_,{$active:(m?.timeFormat??`24`)===e.id,onClick:()=>void U({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(m?.timeFormat??`24`)===`custom`&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(g_,{"aria-label":s(`pattern`),onBlur:Sn,onChange:e=>lt(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Sn()):e.key===`Escape`&&lt(null)},spellCheck:!1,value:st??m?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,q.jsx)($,{children:s(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,q.jsxs)(__,{children:[(0,q.jsx)(`span`,{children:s(`preview`)}),(0,q.jsx)(`code`,{children:w(hh,m?.timeFormat,st??m?.timeFormatPattern)})]})]})})]}),(0,q.jsxs)(Ih,{ref:un(`updates`),children:[(0,q.jsx)(Nh,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`current_version`)}),(0,q.jsx)(Mg,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`latest_version`)}),(0,q.jsx)(Mg,{children:H?`v${H.latest}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:H?H.available?s(`version_version_is_available`,{version:H.latest}):s(`you_are_on_the_latest_version`):s(`not_checked_yet`)}),(0,q.jsx)($,{children:H?.available?s(`the_installer_downloads_installs_itself_and_closes_the_app`):s(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,q.jsx)(Z,{children:H?.available?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(x_,{onClick:()=>void ue(),type:`button`,children:s(`open_release_page`)}),rn&&(0,q.jsx)(x_,{disabled:Dt!==null,onClick:()=>void kn(),type:`button`,children:s(`download_and_install`)})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(x_,{disabled:Ct,onClick:()=>void On(),type:`button`,children:s(Ct?`checking`:`check_for_updates`)}),(0,q.jsx)(x_,{onClick:()=>void le(),type:`button`,children:s(`open_log_folder`)})]})})]}),Tt&&(0,q.jsx)(Y,{children:(0,q.jsx)(jg,{children:Tt})})]})]}),(0,q.jsxs)(Ih,{ref:un(`colors`),children:[(0,q.jsx)(Nh,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(zh,{children:[(0,q.jsxs)(Bh,{children:[(0,q.jsx)(Q,{children:s(`theme`)}),(0,q.jsx)($,{children:s(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,q.jsx)(m_,{children:ph.map(e=>(0,q.jsx)(h_,{$active:(m?.themeMode??`system`)===e.id,onClick:()=>void U({themeMode:e.id}),type:`button`,children:s(e.label)},e.id))})]}),(0,q.jsxs)(zh,{children:[(0,q.jsxs)(Bh,{children:[(0,q.jsx)(Q,{children:s(`presets`)}),(0,q.jsx)($,{children:s(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,q.jsxs)(Vh,{children:[Vu.map(e=>(0,q.jsxs)(Hh,{$on:wn.toLowerCase()===e.accent&&Tn.toLowerCase()===e.secondary,onClick:()=>En(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(Yh,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)(Uh,{children:s(e.name)})]},e.name)),nn.map((e,t)=>(0,q.jsxs)(Wh,{children:[(0,q.jsxs)(Hh,{$on:wn.toLowerCase()===e.accent.toLowerCase()&&Tn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>En(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(Yh,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)(Uh,{children:e.name})]}),(0,q.jsx)(Gh,{onClick:()=>void Pn(t),title:s(`remove_preset`),type:`button`,children:(0,q.jsx)(Ai,{size:9})})]},`${e.name}-${t}`)),bt?(0,q.jsxs)(qh,{children:[(0,q.jsxs)(Yh,{children:[(0,q.jsx)(`i`,{style:{background:bt.accent}}),(0,q.jsx)(`i`,{style:{background:bt.secondary}})]}),(0,q.jsx)(Jh,{autoFocus:!0,maxLength:24,onChange:e=>xt({...bt,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Nn()):e.key===`Escape`&&(e.preventDefault(),xt(null))},placeholder:s(`preset_name`),spellCheck:!1,value:bt.name}),(0,q.jsx)(Fg,{onClick:()=>void Nn(),type:`button`,children:s(`save`)}),(0,q.jsx)(Fg,{onClick:()=>xt(null),type:`button`,children:s(`cancel`)})]}):(0,q.jsxs)(Kh,{disabled:!m,onClick:()=>xt({name:``,accent:wn,secondary:Tn}),title:s(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,q.jsx)(vi,{size:12}),s(`add_preset`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`accent_color`)}),(0,q.jsx)($,{children:s(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Mh,{colors:mt.accent,current:wn,onApply:e=>Dn(`accent`,e)}),(0,q.jsx)(Ig,{"aria-label":s(`accent_color`),disabled:!m,onBlur:()=>Fn(`accent`),onChange:e=>void U({accentColor:e.target.value}),onFocus:()=>jt({role:`accent`,color:wn}),type:`color`,value:wn}),(0,q.jsx)(Lg,{children:wn.toUpperCase()})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`secondary_color`)}),(0,q.jsx)($,{children:s(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Mh,{colors:mt.secondary,current:Tn,onApply:e=>Dn(`secondary`,e)}),(0,q.jsx)(Ig,{"aria-label":s(`secondary_color`),disabled:!m,onBlur:()=>Fn(`secondary`),onChange:e=>void U({secondaryColor:e.target.value}),onFocus:()=>jt({role:`secondary`,color:Tn}),type:`color`,value:Tn}),(0,q.jsx)(Lg,{children:Tn.toUpperCase()})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset_colors`)}),(0,q.jsx)($,{children:s(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Fg,{disabled:!m,onClick:()=>{Cn(`accent`,wn),Cn(`secondary`,Tn),U({accentColor:null,secondaryColor:null})},type:`button`,children:s(`reset`)})})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`background`),children:[(0,q.jsx)(Nh,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(zh,{children:[(0,q.jsxs)(Bh,{children:[(0,q.jsx)(Q,{children:s(`wallpaper`)}),(0,q.jsx)($,{children:s(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,q.jsx)(e_,{children:(0,q.jsx)(t_,{$active:!m?.backgroundSource,onClick:()=>void U({backgroundSource:null}),title:s(`none`),type:`button`,children:(0,q.jsx)(o_,{children:s(`none`)})})}),(0,q.jsxs)(Zg,{children:[Wu.map(e=>(0,q.jsxs)(Qg,{children:[(0,q.jsx)($g,{children:s(e.name)}),(0,q.jsx)(e_,{children:e.variants.map(t=>(0,q.jsx)(t_,{$active:m?.backgroundSource===t.id,onClick:()=>void U({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,q.jsx)(`img`,{alt:``,src:v===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,q.jsxs)(Qg,{children:[(0,q.jsx)($g,{children:s(`motion`)}),(0,q.jsx)(e_,{children:Uu.map(e=>(0,q.jsxs)(t_,{$active:m?.backgroundSource===e.id,onClick:()=>void U({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,q.jsx)(`img`,{alt:``,src:e.poster}),(0,q.jsx)(i_,{children:(0,q.jsx)(Li,{size:11})})]},e.id))})]}),(0,q.jsxs)(Qg,{children:[(0,q.jsx)($g,{children:s(`custom`)}),(0,q.jsxs)(e_,{children:[(m?.backgroundCustom??[]).map(e=>(0,q.jsx)(kh,{active:m?.backgroundSource===`file:${e}`||m?.backgroundSource===`url:${e}`||m?.backgroundSource===e,onRemove:()=>mn(e),onSelect:()=>void U({backgroundSource:k(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,q.jsxs)(a_,{onClick:()=>void fn([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,q.jsx)(vi,{size:12}),s(`image_2`)]}),(0,q.jsxs)(a_,{onClick:()=>void fn([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,q.jsx)(vi,{size:12}),s(`video`)]})]})]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`image_or_video_url`)}),(0,q.jsx)($,{children:s(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Hg,{onChange:e=>Qt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&pn()},placeholder:`https://…`,value:Zt}),(0,q.jsx)(Fg,{disabled:!k(Zt),onClick:()=>void pn(),type:`button`,children:s(`add`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`blur`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Xg,{max:40,min:0,onChange:e=>void U({backgroundBlur:Number(e.target.value)}),type:`range`,value:m?.backgroundBlur??0}),(0,q.jsxs)(Mg,{children:[m?.backgroundBlur??0,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`saturation`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Xg,{max:200,min:0,onChange:e=>void U({backgroundSaturation:Number(e.target.value)}),type:`range`,value:m?.backgroundSaturation??100}),(0,q.jsxs)(Mg,{children:[m?.backgroundSaturation??100,`%`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`brightness`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Xg,{max:150,min:40,onChange:e=>void U({backgroundBrightness:Number(e.target.value)}),type:`range`,value:m?.backgroundBrightness??100}),(0,q.jsxs)(Mg,{children:[m?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`safety`),children:[(0,q.jsx)(Nh,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(zh,{children:[(0,q.jsxs)(Bh,{children:[(0,q.jsx)(Q,{children:s(`protected_folders`)}),(0,q.jsx)($,{children:s(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,q.jsx)(s_,{children:(m?.protectedPaths??[]).map(e=>(0,q.jsxs)(c_,{children:[(0,q.jsx)(l_,{"aria-label":s(`protected_path`),onBlur:K,onChange:t=>Ge({from:e,value:t.target.value}),onFocus:()=>Ge({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),K()):e.key===`Escape`&&Ge(null)},spellCheck:!1,value:We?.from===e?We.value:e}),(0,q.jsx)(u_,{onClick:()=>hn(e),title:s(`remove`),type:`button`,children:(0,q.jsx)(Ai,{size:10})})]},e))}),(0,q.jsxs)(f_,{children:[(0,q.jsx)(p_,{"aria-label":s(`new_protected_rule`),onChange:e=>Xe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),G())},placeholder:`*.log`,spellCheck:!1,value:Ye}),(0,q.jsx)(Fg,{onClick:G,type:`button`,children:s(`add_the_rule`)})]}),(0,q.jsxs)(d_,{children:[(0,q.jsx)(Fg,{onClick:()=>void gn(),type:`button`,children:s(`restore_defaults`)}),(0,q.jsx)(Fg,{onClick:()=>void W(),type:`button`,children:s(`add_folder_2`)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`confirmation_delay`)}),(0,q.jsx)($,{children:s(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Xg,{max:30,min:2,onChange:e=>void U({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:m?.deleteDelaySeconds??5}),(0,q.jsxs)(Mg,{children:[m?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`tags`),children:[(0,q.jsx)(Nh,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Ng,{"aria-label":s(`color_of_the_new_tag`),onChange:e=>Ue(e.target.value),type:`color`,value:He}),(0,q.jsx)(Hg,{onChange:e=>Ve(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),In())},placeholder:s(`new_tag`),spellCheck:!1,value:B})]}),(0,q.jsx)($,{children:s(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Fg,{disabled:Le||B.trim().length===0,onClick:()=>void In(),type:`button`,children:s(`add`)})})]}),ze&&(0,q.jsx)(Y,{children:(0,q.jsx)(jg,{children:ze})}),Pe.length===0&&(0,q.jsx)(Y,{children:(0,q.jsx)($,{children:s(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),Pe.map(e=>(0,q.jsx)(Y,{children:z?.name===e.name?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Ng,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void Ln(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(Pg,{autoFocus:!0,disabled:Le,onChange:t=>Ie({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),zn()):e.key===`Escape`&&(e.preventDefault(),Ie(null))},value:z.value})]}),(0,q.jsx)($,{children:s(`press_enter_to_save_escape_to_cancel`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Fg,{disabled:Le,onClick:()=>void zn(),type:`button`,children:s(`save`)}),(0,q.jsx)(Fg,{disabled:Le,onClick:()=>Ie(null),type:`button`,children:s(`cancel`)})]})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Ng,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void Ln(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(Q,{children:e.name})]}),(0,q.jsx)($,{children:oe(s,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Fg,{disabled:Le,onClick:()=>Ie({name:e.name,value:e.name}),type:`button`,children:s(`edit`)}),(0,q.jsxs)(Rg,{disabled:Le,onClick:()=>void Rn(e.name),type:`button`,children:[(0,q.jsx)(Oi,{size:13}),s(`remove`)]})]})]})},e.name))]})]}),(0,q.jsxs)(Ih,{ref:un(`files-view`),children:[(0,q.jsx)(Nh,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`default_view`)}),(0,q.jsx)($,{children:s(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(Jg,{children:[(0,q.jsx)(Yg,{$on:tn.mode===`list`,onClick:()=>void U({defaultView:{...tn,mode:`list`}}),type:`button`,children:s(`list`)}),(0,q.jsx)(Yg,{$on:tn.mode===`grid`,onClick:()=>void U({defaultView:{...tn,mode:`grid`}}),type:`button`,children:s(`grid`)})]})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`list_icon_size`)}),(0,q.jsx)($,{children:s(`the_icon_in_the_list_rows`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Xg,{max:48,min:16,onChange:e=>void U({defaultView:{...tn,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:tn.iconSize}),(0,q.jsxs)(Mg,{children:[tn.iconSize,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`grid_size`)}),(0,q.jsx)($,{children:s(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Xg,{max:260,min:100,onChange:e=>void U({defaultView:{...tn,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:tn.gridSize}),(0,q.jsxs)(Mg,{children:[tn.gridSize,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Q,{children:s(`selection_checkboxes`)}),(0,q.jsx)(Gm,{})]}),(0,q.jsx)($,{children:s(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,q.jsx)(Bg,{$on:m?.showCheckboxes??!0,disabled:!m,onClick:()=>void U({showCheckboxes:!(m?.showCheckboxes??!0)}),type:`button`,children:(0,q.jsx)(Vg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Q,{children:s(`open_with_a_single_click`)}),(0,q.jsx)(Gm,{})]}),(0,q.jsx)($,{children:s(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,q.jsx)(Bg,{$on:m?.openOnSingleClick??!1,disabled:!m,onClick:()=>void U({openOnSingleClick:!(m?.openOnSingleClick??!1)}),type:`button`,children:(0,q.jsx)(Vg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Q,{children:s(`open_the_file_tray_while_dragging`)}),(0,q.jsx)(Gm,{})]}),(0,q.jsx)($,{children:s(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,q.jsx)(Bg,{$on:m?.trayAutoShow??!0,disabled:!m,onClick:()=>void U({trayAutoShow:!(m?.trayAutoShow??!0)}),type:`button`,children:(0,q.jsx)(Vg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Q,{children:s(`confirm_before_deleting`)}),(0,q.jsx)(Gm,{})]}),(0,q.jsx)($,{children:s(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,q.jsx)(Bg,{$on:m?.confirmDelete??!1,disabled:!m,onClick:()=>void U({confirmDelete:!(m?.confirmDelete??!1)}),type:`button`,children:(0,q.jsx)(Vg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Q,{children:s(`automatic_rename_suffix`)}),(0,q.jsx)(Gm,{})]}),(0,q.jsx)($,{children:s(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(So,{disabled:!m,onChange:e=>void U({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:m?.conflictNameStyle??`space_parentheses`,width:160})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Q,{children:s(`play_audio_in_video_previews`)}),(0,q.jsx)(Gm,{})]}),(0,q.jsx)($,{children:s(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,q.jsx)(Bg,{$on:m?.previewVideoAudio??!1,disabled:!m,onClick:()=>void U({previewVideoAudio:!(m?.previewVideoAudio??!1)}),type:`button`,children:(0,q.jsx)(Vg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Q,{children:s(`autoplay_video_previews`)}),(0,q.jsx)(Gm,{})]}),(0,q.jsx)($,{children:s(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,q.jsx)(Bg,{$on:m?.previewVideoAutoplay??!1,disabled:!m,onClick:()=>void U({previewVideoAutoplay:!(m?.previewVideoAutoplay??!1)}),type:`button`,children:(0,q.jsx)(Vg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Q,{children:s(`preview_panel_under_the_list`)}),(0,q.jsx)(Gm,{})]}),(0,q.jsx)($,{children:s(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,q.jsx)(Bg,{$on:tn.showImages??!0,onClick:()=>void U({defaultView:{...tn,showImages:!(tn.showImages??!0)}}),type:`button`,children:(0,q.jsx)(Vg,{})})]}),(0,q.jsx)(Y,{children:(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ag,{children:[(0,q.jsx)(Q,{children:s(`columns`)}),(0,q.jsx)(Gm,{})]}),(0,q.jsx)($,{children:s(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,q.jsx)(Y,{children:(0,q.jsxs)(v_,{children:[ul.map(e=>(0,q.jsxs)(y_,{children:[(0,q.jsx)(`input`,{checked:(tn.columns??[]).includes(e.id),onChange:()=>void Bn(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,q.jsxs)(y_,{children:[(0,q.jsx)(`input`,{checked:(tn.columns??[]).includes(`linkTarget`),onChange:()=>void Bn(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`link_target_after_the_name`)})]})]})})]}),(0,q.jsxs)(T_,{children:[s(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,q.jsx)(Gm,{}),` `,s(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,q.jsxs)(Ih,{ref:un(`shortcuts`),children:[(0,q.jsx)(Nh,{note:`the_keys_this_window_listens_for_click_a_combination_to_record_a_new_one`,title:`shortcuts`}),(0,q.jsxs)(Rh,{children:[dh.map(({id:e,label:t,note:n})=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(t)}),(0,q.jsx)($,{children:s(n)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(b_,{$listening:Ae===e,onClick:()=>je(e),type:`button`,children:Ae===e?s(`press_a_key`):Jt(Kn[e])})})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset`)}),(0,q.jsx)($,{children:s(`back_to_the_default_combination_for_every_action`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(x_,{onClick:()=>void U({shortcuts:{...Ut}}),type:`button`,children:s(`reset`)})})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`memory`),children:[(0,q.jsx)(Nh,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(vg,{children:[(0,q.jsxs)(yg,{children:[(0,q.jsx)(Q,{children:s(`process_memory`)}),(0,q.jsx)(Mg,{children:j?`${C(j.private)} · ${ig(j.private,j.available)}`:`—`})]}),(0,q.jsx)(bg,{children:(0,q.jsx)(xg,{$ratio:j?j.private/Math.max(j.available,1):0,$tone:S(j?j.private/Math.max(j.available,1):0)})}),(0,q.jsx)($,{children:j?s(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:C(j.available),resident:C(j.workingSet)}):s(`reading_the_current_usage`)})]}),(0,q.jsxs)(vg,{children:[(0,q.jsxs)(yg,{children:[(0,q.jsx)(Q,{children:s(`managed_heap`)}),(0,q.jsx)(Mg,{children:j?`${C(j.managed)} · ${ig(j.managed,j.private)}`:`—`})]}),(0,q.jsx)(bg,{children:(0,q.jsx)(xg,{$ratio:j?j.managed/Math.max(j.private,1):0,$tone:`var(--accent-secondary)`})}),(0,q.jsx)($,{children:s(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,q.jsxs)(vg,{children:[(0,q.jsxs)(yg,{children:[(0,q.jsx)(Q,{children:s(`native_and_runtime`)}),(0,q.jsx)(Mg,{children:j?`${C(Math.max(0,j.private-j.managed))} · ${ig(Math.max(0,j.private-j.managed),j.private)}`:`—`})]}),(0,q.jsx)(bg,{children:(0,q.jsx)(xg,{$ratio:j?Math.max(0,j.private-j.managed)/Math.max(j.private,1):0,$tone:`var(--accent-primary)`})}),(0,q.jsx)($,{children:s(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`free_memory`)}),(0,q.jsx)($,{children:s(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(x_,{onClick:()=>void dt().then(re),type:`button`,children:s(`trim_now`)})})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`overview`),children:[(0,q.jsx)(Nh,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`}),(0,q.jsx)(Rh,{children:(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`recent_items`)}),(0,q.jsx)($,{children:s(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Hg,{max:50,min:0,onChange:e=>void qn(Number(e.target.value)),type:`number`,value:m?.recentLimit??10})})]})})]}),(0,q.jsxs)(Ih,{ref:un(`gallery`),children:[(0,q.jsx)(Nh,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`}),(0,q.jsxs)(Rh,{children:[(m?.galleryRoots??[]).map(e=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:x(e)}),(0,q.jsx)($,{children:e})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(S_,{onClick:()=>void tr((m?.galleryRoots??[]).filter(t=>t!==e)),title:s(`stop_scanning_this_folder`),type:`button`,children:(0,q.jsx)(Ai,{size:12})})})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`scan_folders`)}),(0,q.jsx)($,{children:(m?.galleryRoots??[]).length===0?s(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):s(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(x_,{onClick:()=>void nr(),type:`button`,children:s(`choose_folder`)})})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`icons`),children:[(0,q.jsx)(Nh,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_system_file_icons`)}),(0,q.jsx)($,{children:s(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,q.jsx)(Bg,{$on:m?.systemIcons??!1,disabled:!m,onClick:()=>void U({systemIcons:!m?.systemIcons}),type:`button`,children:(0,q.jsx)(Vg,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_custom_folder_icons`)}),(0,q.jsx)($,{children:s(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,q.jsx)(Bg,{$on:m?.customFolderIcons??!1,disabled:!m,onClick:()=>void U({customFolderIcons:!m?.customFolderIcons}),type:`button`,children:(0,q.jsx)(Vg,{})})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`extension-icons`),children:[(0,q.jsx)(Nh,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`}),(0,q.jsxs)(Rh,{children:[Object.entries(m?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:e}),(0,q.jsx)($,{children:Eh(s,t)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Dh,{source:t}),(0,q.jsx)(S_,{onClick:()=>void Gn(e,null),title:s(`remove_this_rule`),type:`button`,children:(0,q.jsx)(Ai,{size:12})})]})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`add_a_rule`)}),(0,q.jsx)($,{children:s(`extension_and_the_icon_to_draw_for_it`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Hg,{onChange:e=>E(e.target.value),placeholder:`.psd`,spellCheck:!1,value:T}),(0,q.jsxs)(qg,{children:[(0,q.jsx)(S_,{onClick:()=>O(e=>!e),title:s(`choose_the_icon`),type:`button`,children:(0,q.jsx)(Dh,{source:ee})}),te&&(0,q.jsx)(rf,{allowDefault:!1,onClose:()=>O(!1),onPick:e=>{D(e??`file`),O(!1)},value:ee})]}),(0,q.jsx)(S_,{onClick:()=>void rr(),title:s(`add_the_rule`),type:`button`,children:(0,q.jsx)(vi,{size:13})})]})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`folder-icons`),children:[(0,q.jsx)(Nh,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`give_a_folder_its_own_icon`)}),(0,q.jsx)($,{children:s(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,q.jsxs)(Z,{children:[y&&(0,q.jsx)(Oh,{src:y.icon}),(0,q.jsx)(x_,{disabled:ne,onClick:()=>void ir(),type:`button`,children:s(ne?`choosing`:`choose_folder_and_icon`)})]})]}),y&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:x(y.folder)}),(0,q.jsx)($,{children:y.folder})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(w_,{children:[(0,q.jsx)(ki,{size:11}),` `,s(`saved`)]})})]})]})]}),(0,q.jsxs)(Ih,{ref:un(`folder-index`),children:[(0,q.jsx)(Nh,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,q.jsx)($,{children:s(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,q.jsx)(Bg,{$on:m?.writeDirectoryIndex??!0,disabled:!m,onClick:()=>void U({writeDirectoryIndex:!m?.writeDirectoryIndex}),type:`button`,children:(0,q.jsx)(Vg,{})})]}),(0,q.jsxs)(zh,{children:[(0,q.jsxs)(Bh,{children:[(0,q.jsx)(Q,{children:s(`directory_index_blacklist`)}),(0,q.jsx)($,{children:s(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,q.jsx)(s_,{children:(m?.directoryIndexBlacklist??[]).map(e=>(0,q.jsxs)(c_,{children:[(0,q.jsx)(l_,{"aria-label":s(`directory_index_blacklist_rule`),onBlur:_n,onChange:t=>Je({from:e,value:t.target.value}),onFocus:()=>Je({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),_n()):e.key===`Escape`&&Je(null)},spellCheck:!1,value:Ke?.from===e?Ke.value:e}),(0,q.jsx)(u_,{onClick:()=>bn(e),title:s(`remove`),type:`button`,children:(0,q.jsx)(Ai,{size:10})})]},e))}),(0,q.jsxs)(f_,{children:[(0,q.jsx)(p_,{"aria-label":s(`directory_index_blacklist_rule`),onChange:e=>et(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),vn())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:$e}),(0,q.jsx)(Fg,{onClick:vn,type:`button`,children:s(`add_the_rule`)})]}),(0,q.jsxs)(d_,{children:[(0,q.jsx)(Fg,{onClick:xn,type:`button`,children:s(`restore_defaults`)}),(0,q.jsx)(Fg,{onClick:()=>void yn(),type:`button`,children:s(`add_folder_2`)})]})]})]}),!(m?.writeDirectoryIndex??!0)&&(0,q.jsx)(E_,{children:Th(s,e?.platform)})]}),(0,q.jsxs)(Ih,{ref:un(`indexing`),children:[(0,q.jsx)(Nh,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,q.jsx)(wh,{})]}),(0,q.jsxs)(Ih,{ref:un(`files`),children:[(0,q.jsx)(Nh,{note:`what_the_listings_include`,title:`files`}),(0,q.jsxs)(Rh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`hidden_items`)}),(0,q.jsx)(Mg,{children:Ch(s,u?.showHidden)})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`protected_operating_system_files`)}),(0,q.jsx)(Mg,{children:Ch(s,u?.showSystem)})]})]}),(0,q.jsx)(T_,{children:s(`listings_follow_the_file_manager_s_own_settings_hidden_and_protected_items_are_only_shown_when_the_operating_system_is_set_to_show_them`)})]})]}),(0,q.jsxs)($h,{"aria-label":s(`settings_sections`),children:[(0,q.jsx)(eg,{children:s(`sections`)}),(0,q.jsx)(tg,{children:vh.map(({id:e,label:t})=>(0,q.jsx)(ng,{$active:Mt===e,onClick:()=>dn(e),type:`button`,children:(0,q.jsx)(`span`,{children:s(t)})},e))}),(0,q.jsx)(rg,{children:s(`changes_are_saved_as_you_make_them`)})]}),Dt&&(0,Ua.createPortal)((0,q.jsx)(sg,{children:(0,q.jsxs)(cg,{"aria-modal":`true`,role:`dialog`,children:[(0,q.jsxs)(lg,{children:[(0,q.jsx)(`h2`,{children:s(`software_update`)}),(0,q.jsx)(`p`,{children:H?.latest?s(`version_version`,{version:H.latest}):s(`preparing_the_update`)})]}),(0,q.jsx)(ug,{children:s(`changelog`)}),Dt.changelog?(0,q.jsx)(dg,{onClick:pg,children:(0,q.jsx)(a,{source:Dt.changelog})}):(0,q.jsx)(fg,{children:Dt.phase===`changelog`?s(`loading_the_changelog`):s(`the_changelog_could_not_be_loaded`)}),(0,q.jsxs)(mg,{children:[(0,q.jsx)(`span`,{children:ag(Dt,s)}),(0,q.jsx)(`span`,{children:og(Dt)})]}),(0,q.jsx)(hg,{children:(0,q.jsx)(gg,{$percent:Math.max(0,Math.min(100,Dt.percent))})}),Dt.error&&(0,q.jsx)(jg,{children:Dt.error}),(0,q.jsxs)(_g,{children:[(Dt.phase===`changelog`||Dt.phase===`downloading`)&&(0,q.jsx)(x_,{onClick:()=>void jn(),type:`button`,children:s(`cancel`)}),Dt.phase===`ready`&&(0,q.jsx)(x_,{onClick:()=>void Mn(),type:`button`,children:s(`install_update`)}),Dt.phase===`installing`&&(0,q.jsx)(x_,{disabled:!0,type:`button`,children:s(`installing`)}),(Dt.phase===`ready`||Dt.phase===`error`||Dt.phase===`cancelled`||Dt.phase===`installing`)&&(0,q.jsx)(x_,{onClick:()=>Ot(null),type:`button`,children:s(`close`)})]})]})}),document.body)]})}function Sh({approvalMinutes:e,denialSeconds:t}){let n=o(),[r,i]=(0,L.useState)([]),[a,s]=(0,L.useState)(!1);(0,L.useEffect)(()=>{let e=()=>void Gc().then(i,()=>i([]));if(e(),l.available)return l.on(t=>{t.type===`share.devices.changed`&&e()})},[]);let c=async(e,t,n)=>{s(!0);try{i(await Kc(e,t,n))}finally{s(!1)}},u=async e=>{s(!0);try{i(await qc(e))}finally{s(!1)}},d=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.state===`denied`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`):n(`share_access_not_decided`),f=e=>e.expiresAt===0?n(`share_access_forever`):new Date(e.expiresAt).toLocaleString();return(0,q.jsxs)(Sg,{children:[r.length===0&&(0,q.jsx)(Cg,{children:n(`share_access_no_devices`)}),r.map(r=>(0,q.jsxs)(wg,{children:[(0,q.jsxs)(Tg,{children:[(0,q.jsx)(Eg,{children:r.name||n(`share_access_not_decided`)}),(0,q.jsxs)(Dg,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,q.jsxs)(Dg,{children:[d(r),` · `,n(`share_access_expires`),`: `,f(r)]})]}),(0,q.jsx)(So,{disabled:a,onChange:e=>{let[t,n]=e.split(`:`);t===`remove`?u(r.id):t!==`none`&&c(r.id,t,n===`forever`)},options:[{value:`none:`,label:n(`share_access_not_decided`)},{value:`allowed:timed`,label:`${n(`share_access_allowed`)} (${e}m)`},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:`${n(`share_access_denied`)} (${t}s)`},{value:`denied:forever`,label:n(`share_access_block_forever`)},{value:`remove:`,label:n(`remove`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.state===`denied`?r.expiresAt===0?`denied:forever`:`denied:timed`:`none:`,width:190})]},r.id))]})}function Ch(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function wh(){let e=o(),[t,n]=(0,L.useState)(null);return(0,L.useEffect)(()=>{let e=!0,t=()=>Ye().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,q.jsx)(E_,{children:e(`no_indexing_tasks_are_running`)}):(0,q.jsxs)(Rh,{children:[(0,q.jsx)(Y,{children:(0,q.jsx)(Q,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,q.jsx)(Y,{children:(0,q.jsx)(Mg,{title:e,children:e})},e))]}):(0,q.jsx)(E_,{children:e(`index_task_information_is_unavailable`)})}function Th(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function Eh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function Dh({source:e}){let t=mn(e.startsWith(`file:`)?e.slice(5):null);return(0,q.jsx)(C_,{children:t?(0,q.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,q.jsx)(ec,{name:e,size:16})})}function Oh({src:e}){let t=mn(e);return(0,q.jsx)(C_,{children:t&&(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function kh({path:e,active:t,onSelect:n,onRemove:r}){let i=o(),a=k(e),s=_n(a?null:e),c=a?e:s,l=cd(e.split(/[?#]/)[0]);return(0,q.jsxs)(n_,{children:[(0,q.jsxs)(t_,{$active:t,onClick:n,title:e,type:`button`,children:[c&&(l?(0,q.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${c}#t=0.5`}):(0,q.jsx)(`img`,{alt:``,src:c})),l&&(0,q.jsx)(i_,{children:(0,q.jsx)(Li,{size:11})})]}),(0,q.jsx)(r_,{onClick:r,title:i(`remove`),type:`button`,children:(0,q.jsx)(Ai,{size:9})})]})}function Ah({value:e,options:t,onChange:n,disabled:r}){let i=o(),[a,s]=(0,L.useState)(null),c=(0,L.useRef)(null);return(0,L.useEffect)(()=>{if(!a)return;let e=()=>s(null),t=t=>{let n=t.target;n instanceof Node&&c.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Ug,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){s(null);return}let e=c.current?.getBoundingClientRect();e&&s({left:e.left,top:e.bottom+4,width:e.width})},ref:c,type:`button`,children:[(0,q.jsx)(`span`,{children:jh(i,e)}),(0,q.jsx)(Wg,{children:(0,q.jsx)(xi,{size:11})})]}),a&&(0,Ua.createPortal)((0,q.jsx)(Gg,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,q.jsxs)(Kg,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),s(null)},role:`option`,type:`button`,children:[(0,q.jsx)(`span`,{children:jh(i,t)}),t===e&&(0,q.jsx)(ki,{size:11})]},t))}),document.body)]})}function jh(e,t){return t===gh?e(`system_default`):_h[t]??t}function Mh({colors:e,current:t,onApply:n}){let r=o();if(e.length===0)return null;let[i,...a]=e;return(0,q.jsxs)(Xh,{children:[(0,q.jsxs)(Qh,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,q.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,q.jsx)(Zh,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,q.jsx)(ki,{size:9})},e))]})}function Nh({title:e,note:t,global:n=!1}){let r=o();return(0,q.jsxs)(Lh,{children:[(0,q.jsxs)(`h2`,{children:[r(e),n&&(0,q.jsx)(Gm,{})]}),(0,q.jsx)(`p`,{children:r(t)})]})}var Ph=v.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Fh=v.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Ih=v.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Lh=v.header`
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
`,Rh=v.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,zh=v.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Bh=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Vh=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Hh=v.button`
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
`,Uh=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wh=v.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,Gh=v.button`
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
`,Kh=v.button`
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
`,qh=v.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Jh=v.input`
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
`,Yh=v.span`
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
`,Xh=v.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Zh=v.button`
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
`,Qh=v.button`
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
`,$h=v.nav`
    align-self: flex-start;
    flex-shrink: 0;
    width: 150px;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
`,eg=v.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,tg=v.div`
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
`,ng=v.button`
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
`,rg=v.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function ig(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function ag(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function og(e){return e.total>0?`${C(e.downloaded)} / ${C(e.total)}`:e.downloaded>0?C(e.downloaded):``}var sg=v.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,cg=v.div`
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
`,lg=v.div`
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
`,ug=v.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,dg=v.div`
    max-height: 260px;
    overflow: auto;
    font-size: 12px;
    line-height: 1.55;
    color: var(--text-secondary);

    > :first-child {
        margin-top: 0;
    }

    h1,
    h2,
    h3 {
        margin: 10px 0 4px;
        font-family: var(--font-title), var(--font-cjk);
        font-size: 12px;
        color: var(--text-primary);
    }

    p {
        margin: 4px 0;
    }

    ul,
    ol {
        margin: 4px 0;
        padding-left: 18px;
    }

    li {
        margin: 2px 0;
    }

    a {
        color: var(--accent-primary);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    code {
        padding: 1px 4px;
        border-radius: 4px;
        background: rgba(var(--accent-rgb), 0.14);
        font-family: var(--font-mono);
        font-size: 11px;
    }

    pre {
        margin: 6px 0;
        padding: 8px 10px;
        border-radius: var(--radius-sm);
        background: var(--bg-input);
        overflow: auto;

        code {
            padding: 0;
            background: none;
        }
    }

    blockquote {
        margin: 6px 0;
        padding-left: 10px;
        border-left: 2px solid var(--border-color-hover);
        color: var(--text-muted);
    }

    hr {
        margin: 8px 0;
        border: 0;
        border-top: 1px solid var(--border-color);
    }
`,fg=v.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function pg(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),F(t.href))}var mg=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,hg=v.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,gg=v.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,_g=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,vg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,yg=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,bg=v.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,xg=v.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Sg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,Cg=v.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,wg=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Tg=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Eg=v.span`
    color: var(--text-primary);
    font-size: 12px;
`,Dg=v.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,Og=v.input`
    width: 92px;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,kg=v.input`
    width: 190px;
    height: 32px;
    padding: 0 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;
    outline: 0;

    &:focus {
        border-color: var(--border-color-focus);
    }
`,Y=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,X=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Z=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=v.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,Ag=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=v.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,jg=v.span`
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
`,Mg=v.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Ng=v.input`
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
`,Pg=v.input`
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
`,Fg=v.button`
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
`,Ig=v.input`
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
`,Lg=v.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Rg=v.button`
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
`,zg=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,Bg=v.button`
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
`,Vg=v.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,Hg=v.input`
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
`,Ug=v.button`
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
`,Wg=v.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Gg=v.div`
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
`,Kg=v.button`
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
`,qg=v.span`
    position: relative;
    display: inline-flex;
`,Jg=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Yg=v.button`
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
`,Xg=v.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,Zg=v.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,Qg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,$g=v.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,e_=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,t_=v.button`
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
`,n_=v.div`
    position: relative;
    width: 102px;
    height: 58px;
`,r_=v.button`
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
`,i_=v.span`
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
`,a_=v.button`
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
`,o_=v.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,s_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,c_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,l_=v.input`
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
`,u_=v.button`
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
`,d_=v.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,f_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,p_=v.input`
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
`,m_=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,h_=v.button`
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
`,g_=v.input`
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
`,__=v.div`
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
`,v_=v.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,y_=v.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,b_=v.button`
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
`,x_=v.button`
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
`,S_=v.button`
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
`,C_=v.span`
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
`,w_=v.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,T_=v.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,E_=v.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,D_=150,O_=2500,k_=3,A_=600;function j_({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,onPreviewChange:g}){let _=o(),v=al(`gallery`),[y,b]=(0,L.useState)([]),[x,S]=(0,L.useState)(0),[w,T]=(0,L.useState)(!0),[E,ee]=(0,L.useState)(null),[D,te]=(0,L.useState)(!1),[O,ne]=(0,L.useState)([]),k=(0,L.useRef)([]),A=(0,L.useRef)(0),j=(0,L.useRef)(!1),re=(0,L.useRef)(!0),M=(0,L.useRef)(0),ie=(0,L.useRef)(null),se=(0,L.useRef)(0),ce=(0,L.useCallback)(async e=>{let t=++M.current;T(!0),re.current=!0,ee(null);try{let n=await Ve(0,D_,e);if(t!==M.current)return;k.current=n.entries,A.current=n.total,b(n.entries),S(n.total)}catch(e){t===M.current&&ee(e instanceof Error?e.message:String(e))}finally{t===M.current&&(re.current=!1,T(!1))}},[]);(0,L.useEffect)(()=>{ce(!1)},[ce]);let N=(0,L.useCallback)(async()=>{if(re.current||j.current||k.current.length>=A.current)return;let e=M.current;j.current=!0;try{let t=k.current,n=A.current;for(let r=0;r<k_&&t.length<n;r++){let r=await Ve(t.length,D_,!1);if(e!==M.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<D_)break}if(e!==M.current)return;k.current=t,A.current=n,(0,L.startTransition)(()=>{b(t),S(n)})}catch{}finally{j.current=!1}},[]),P=(0,L.useCallback)(e=>{se.current||=window.requestAnimationFrame(()=>{se.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<O_&&N()})},[N]);(0,L.useEffect)(()=>{let e=ie.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&N()},{root:e.parentElement,rootMargin:`${O_}px 0px`});return t.observe(e),()=>t.disconnect()},[N]),(0,L.useEffect)(()=>{if(y.length>=x)return;let e=window.setTimeout(()=>{let e=ie.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<O_&&N()},200);return()=>window.clearTimeout(e)},[y.length,x,N]);let F=(0,L.useMemo)(()=>({path:``,parent:null,entries:y.map(M_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[y]),le=(0,L.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),ue=(0,L.useCallback)(e=>{l?l(e):we(e)},[l]),de=(0,L.useCallback)(e=>{let t=N_(e.modified);return{id:t,label:t}},[]),fe=()=>{te(!0),ce(!0).finally(()=>te(!1))},pe=y.length<x,me=(0,L.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:y.filter(e=>On(e.name,a)||On(e.path,a)),[y,a?.open,a?.query,a?.matchCase,a?.regex]),he=(0,L.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:me[Math.min(a.index,Math.max(0,me.length-1))]?.path??null}:bn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,me]);(0,L.useEffect)(()=>{c?.(me.length)},[me.length,c]);let ge=(0,L.useCallback)(e=>{ne(e),u?.(e)},[u]),I=O.length>0?y.find(e=>e.path===O[0])??null:null,_e=I?.name.includes(`.`)?I.name.slice(I.name.lastIndexOf(`.`)+1).toUpperCase():`—`,ve=I&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(I.name)?_(`video_2`):_(`picture`),ye=I?I.path.slice(0,Math.max(I.path.lastIndexOf(`\\`),I.path.lastIndexOf(`/`))):``,be=I?{name:I.name,path:I.path,isDirectory:!1,size:I.size,modified:I.modified,fields:[{label:_(`type`),value:ve},{label:_(`extension`),value:_e},{label:_(`location`),value:ye},{label:_(`full_path`),value:I.path},{label:_(`size`),value:C(I.size)},{label:_(`modified`),value:ae(I.modified)},{label:_(`created`),value:`—`}]}:null,R=O.length>1?oe(_,O.length,`k_1_item_selected`,`count_items_selected`):void 0,xe=(0,L.useRef)(``);return(0,L.useEffect)(()=>{let e=`${be?.path??``}|${be?.modified??0}|${R??``}`;xe.current!==e&&(xe.current=e,g?.(be,R))},[be,R,g]),(0,q.jsxs)(P_,{children:[(0,q.jsxs)(L_,{children:[(0,q.jsxs)(z_,{children:[(0,q.jsx)(`span`,{children:_(`gallery`)}),(0,q.jsx)(B_,{children:w?_(`scanning`):_(`shown_of_total_pictures`,{shown:y.length,total:x})})]}),(0,q.jsxs)(R_,{children:[(0,q.jsx)(V_,{onClick:fe,title:_(`scan_the_folders_again`),type:`button`,children:(0,q.jsx)(H_,{$spinning:D,children:(0,q.jsx)(_i,{size:14})})}),v.available&&(0,q.jsx)(V_,{onClick:e=>v.open(e.clientX,e.clientY),title:_(`selection_menu`),type:`button`,children:(0,q.jsx)(Sa,{size:14})})]})]}),E&&(0,q.jsx)(W_,{children:E}),!E&&!w&&x===0&&(0,q.jsx)(W_,{children:_(`no_pictures_found`)}),!E&&(w||x>0)&&(0,q.jsx)(F_,{children:(0,q.jsx)(I_,{children:(0,q.jsx)(yl,{confirmDelete:n,find:he,selectMatchesToken:s,listing:w&&y.length===0?null:F,loading:w,error:null,view:le,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ge,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:ue,onOpenFile:ue,onRefresh:fe,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:de,onGridScroll:P,gridFooter:(0,q.jsx)(U_,{$space:pe?A_:1,ref:ie}),allowBackgroundMenu:!1})})})]})}function M_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function N_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(A(),{weekday:`long`}):t.toLocaleDateString(A(),{year:`numeric`,month:`long`,day:`numeric`})}var P_=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,F_=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,I_=v.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,L_=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 22px 9px;
    border-bottom: 1px solid var(--border-color);
`,R_=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,z_=v.div`
    display: flex;
    align-items: baseline;
    gap: 10px;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,B_=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    font-weight: 400;
    color: var(--text-muted);
`,V_=v.button`
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
`,H_=v.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,U_=v.div`
    height: ${({$space:e})=>e}px;
`,W_=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function G_({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:s=``,version:c=0,historyVersion:u=0,hiddenViews:d=[],onNavigate:f,onOpenView:p}){let[m,h]=(0,L.useState)([]),g=o(),[_,v]=(0,L.useState)(null),y=In();(0,L.useEffect)(()=>{Ze().then(e=>{v(e),h(Ps(e).filter(e=>e.pinned))},()=>{v(null),h([])})},[c]),(0,L.useEffect)(()=>{if(!l.available)return;let e=m.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[m,s]);let b=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>N(e.path,t));return{name:_?.placeNames?.[t]??n?.name??(x(t)||t),path:t,kind:`folder`,icon:n?.icon??_?.placeIcons?.[t]??null}}),w=a===`files`;return(0,q.jsxs)(Z_,{children:[(0,q.jsxs)(Q_,{children:[!d.includes(`home`)&&(0,q.jsxs)(rv,{$active:a===`home`,onClick:e=>p(`home`,Kt(e)),title:g(`overview`),type:`button`,children:[(0,q.jsx)(Ji,{}),(0,q.jsx)(av,{children:g(`overview`)})]}),!d.includes(`recycle`)&&(0,q.jsxs)(rv,{$active:a===`recycle`,onClick:e=>p(`recycle`,Kt(e)),title:g(`recycle_bin`),type:`button`,children:[(0,q.jsx)(Oi,{}),(0,q.jsx)(av,{children:g(`recycle_bin`)})]}),!d.includes(`gallery`)&&(0,q.jsxs)(rv,{$active:a===`gallery`,onClick:e=>p(`gallery`,Kt(e)),title:g(`gallery`),type:`button`,children:[(0,q.jsx)(Ii,{}),(0,q.jsx)(av,{children:g(`gallery`)})]})]}),m.map(e=>(0,q.jsxs)(ev,{children:[(0,q.jsxs)(rv,{as:`div`,$active:!1,children:[(0,q.jsx)(iv,{children:(0,q.jsx)(Is,{panel:e,size:16})}),(0,q.jsx)(av,{children:g(e.title)})]}),(0,q.jsx)(tv,{children:(0,q.jsxs)(nv,{children:[e.kind===`quick`&&b(e).map(e=>(0,q.jsxs)(rv,{$active:w&&N(i,e.path),onClick:t=>f(e.path,Kt(t)),title:e.path,type:`button`,children:[(0,q.jsx)(Ls,{place:e}),(0,q.jsx)(av,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=Ln(y,e.path);return(0,q.jsxs)(rv,{$active:w&&N(i,e.path),onClick:t=>e.isDirectory?f(e.path,Kt(t)):void we(e.path),title:e.path,type:`button`,children:[t&&y.useIcons?(0,q.jsx)(Ls,{place:t}):(0,q.jsx)(tc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,q.jsx)(av,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,q.jsx)(J_,{historyVersion:u,onNavigate:f}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,q.jsxs)(rv,{$active:w&&N(i,e.name),onClick:t=>f(e.name,Kt(t)),title:e.name,type:`button`,children:[(0,q.jsx)(mi,{}),(0,q.jsxs)(av,{children:[ie(e),(0,q.jsxs)(ov,{children:[C(e.freeSpace),` free`]}),(0,q.jsx)(sv,{children:(0,q.jsx)(cv,{$used:t,$tone:S(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(Y_,{onNavigate:f,path:e.path||s})]})})]},e.id)),!d.includes(`settings`)&&(0,q.jsx)($_,{children:(0,q.jsxs)(rv,{$active:a===`settings`,onClick:e=>p(`settings`,Kt(e)),title:g(`settings`),type:`button`,children:[(0,q.jsx)(Si,{}),(0,q.jsx)(av,{children:g(`settings`)})]})})]})}var K_=10,q_=40;function J_({historyVersion:e=0,onNavigate:t}){let n=o(),[r,i]=(0,L.useState)(null),a=In();return(0,L.useEffect)(()=>{Ue().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Ln(a,e.path);return(0,q.jsxs)(rv,{$active:!1,onClick:n=>t(e.path,Kt(n)),title:oe(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,q.jsx)(Ls,{place:r}):(0,q.jsx)(tc,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,q.jsx)(av,{children:r?.name||e.name})]},e.path)})}function Y_({path:e,onNavigate:t}){let[n,r]=(0,L.useState)(null);(0,L.useEffect)(()=>{e&&(r(null),Te(e,!1).then(r,()=>r(null)))},[e]),(0,L.useEffect)(()=>{if(e&&l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&N(n.data.path,e)&&Te(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,K_),o=i.filter(e=>!e.isDirectory).slice(0,q_);return(0,q.jsxs)(q.Fragment,{children:[a.map(e=>(0,q.jsx)(X_,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,q.jsx)(X_,{entry:e,onNavigate:t},e.fullPath))]})}function X_({entry:e,onNavigate:t}){let n=In(),r=Ln(n,e.fullPath);return(0,q.jsxs)(rv,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Kt(n)):void we(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,q.jsx)(Ls,{place:r}):(0,q.jsx)(tc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,q.jsx)(av,{children:r?.name||e.name})]})}var Z_=v.aside`
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

    &:not(:hover) ${()=>ov},
    &:not(:hover) ${()=>sv} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Q_=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,$_=v(Q_)`
    margin-top: auto;
`,ev=v.div`
    display: flex;
    flex-direction: column;
`,tv=v.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Z_}:hover ${ev}:hover > & {
        grid-template-rows: 1fr;
    }
`,nv=v.div`
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
`,rv=v.button`
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
`,iv=v.span`
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
`,av=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ov=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,sv=v.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,cv=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,lv=v.span`
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
`;function uv({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=o(),a=(0,L.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,L.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,q.jsxs)(fv,{ref:a,children:[(0,q.jsxs)(pv,{$active:n,onClick:()=>r(!n),title:s>0?oe(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,q.jsx)(Di,{size:13}),c>0&&(0,q.jsx)(lv,{children:c>9?`9+`:c})]}),n&&(0,q.jsxs)(mv,{children:[(0,q.jsxs)(hv,{children:[(0,q.jsx)(gv,{children:i(`status_center`)}),(0,q.jsxs)(_v,{children:[(0,q.jsx)(vv,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,q.jsx)(yv,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,q.jsx)(Ai,{size:10})})]})]}),e.length===0?(0,q.jsx)(xv,{children:i(`no_operations_yet`)}):(0,q.jsx)(bv,{children:e.map(e=>(0,q.jsx)(dv,{task:e},e.id))})]})]})}function dv({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,q.jsxs)(Sv,{children:[(0,q.jsxs)(Cv,{children:[(0,q.jsx)(wv,{$state:e.state,children:e.state===`done`?(0,q.jsx)(ki,{size:10}):e.state===`failed`?(0,q.jsx)(Ai,{size:10}):(0,q.jsx)(Tv,{})}),(0,q.jsx)(Ev,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,q.jsxs)(Dv,{children:[C(e.bytesDone),` / `,C(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,q.jsxs)(Dv,{children:[e.done,` / `,e.total]})]}),i&&(0,q.jsx)(Ov,{children:(0,q.jsx)(kv,{$percent:r,$indeterminate:t===0})}),e.error&&(0,q.jsx)(Av,{children:e.error})]})}var fv=v.div`
    position: relative;
    display: flex;
`,pv=v.button`
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
`,mv=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Wa}
    ${ro}
`,hv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,gv=v.span`
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
`,_v=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,vv=v.button`
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
`,yv=v.button`
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
`,bv=v.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,xv=v.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Sv=v.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${io}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Cv=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,wv=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Tv=v.span`
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
`,Ev=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dv=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Ov=v.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,kv=v.div`
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
`,Av=v.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function jv(){return l.available?(await l.request(`fs.history.list`)).entries:[]}async function Mv(e){return l.available?(await l.request(`fs.history.undoTo`,{id:e})).ok:!1}function Nv(){let e=o(),[t,n]=(0,L.useState)(!1),[r,i]=(0,L.useState)([]),[a,s]=(0,L.useState)(!1),c=(0,L.useRef)(null),l=()=>void jv().then(i,()=>i([]));(0,L.useEffect)(()=>{if(!t)return;l();let e=window.setInterval(l,1e3),r=e=>{c.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let u=async e=>{s(!0);try{await Mv(e),l()}finally{s(!1)}};return(0,q.jsxs)(Iv,{ref:c,children:[(0,q.jsx)(Lv,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,q.jsx)(Ei,{size:14})}),t&&(0,q.jsxs)(Rv,{children:[(0,q.jsxs)(zv,{children:[(0,q.jsx)(Bv,{children:e(`history`)}),(0,q.jsx)(Vv,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,q.jsx)(Ai,{size:10})})]}),r.length===0?(0,q.jsx)(Xv,{children:e(`no_operations_yet`)}):(0,q.jsx)(Hv,{children:r.map(t=>(0,q.jsxs)(Uv,{children:[(0,q.jsxs)(Wv,{children:[(0,q.jsxs)(Gv,{children:[(0,q.jsx)(Fv,{label:t.label}),Pv(e,t.label)]}),(0,q.jsx)(Kv,{children:ne(t.at)})]}),t.paths.length>0&&(0,q.jsxs)(qv,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,q.jsx)(Jv,{children:(0,q.jsx)(Yv,{disabled:!t.applied||!t.restorable||a,onClick:()=>void u(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Pv(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Fv({label:e}){return e.startsWith(`delete`)?(0,q.jsx)(Oi,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,q.jsx)(ha,{size:13}):e.startsWith(`rename`)?(0,q.jsx)(Yi,{size:13}):e.startsWith(`compress`)?(0,q.jsx)(zi,{size:13}):e.startsWith(`new`)?(0,q.jsx)(vi,{size:13}):(0,q.jsx)(bi,{size:13})}var Iv=v.div`
    position: relative;
    display: flex;
`,Lv=v.button`
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
`,Rv=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Wa}
    ${ro}
`,zv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Bv=v.span`
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
`,Vv=v.button`
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
`,Hv=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Uv=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Wv=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Gv=v.span`
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
`,Kv=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,qv=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jv=v.div`
    display: flex;
    justify-content: flex-end;
`,Yv=v.button`
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
`,Xv=v.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function Zv({currentFolder:e}){let t=o(),[n,r]=(0,L.useState)(!1),[i,a]=(0,L.useState)(null),[s,c]=(0,L.useState)(!1),l=(0,L.useRef)(null);(0,L.useEffect)(()=>{if(!n)return;let e=()=>void kc().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{l.current?.contains(e.target)||r(!1)},o=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,o),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,o)}},[n]),(0,L.useEffect)(()=>{let e=()=>void kc().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{a(await e())}finally{c(!1)}},d=i?.shares.some(t=>N(t.path,e))??!1;return(0,q.jsxs)(Qv,{ref:l,children:[(0,q.jsxs)($v,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,q.jsx)(la,{size:15}),i&&i.shares.length>0&&(0,q.jsx)(lv,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,q.jsxs)(ey,{children:[(0,q.jsxs)(ty,{children:[(0,q.jsx)(ny,{children:t(`share`)}),(0,q.jsx)(ry,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,q.jsx)(Ai,{size:10})})]}),(0,q.jsxs)(iy,{children:[(0,q.jsxs)(ay,{children:[(0,q.jsx)(Ni,{size:15}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,q.jsx)(oy,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,q.jsx)(sy,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,q.jsxs)(cy,{children:[(0,q.jsxs)(ly,{children:[(0,q.jsx)(uy,{title:e.path,children:e.name}),(0,q.jsx)(fy,{disabled:s,onClick:()=>void u(()=>jc(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,q.jsx)(Ai,{size:10})})]}),(0,q.jsx)(dy,{title:e.path,children:e.path}),(0,q.jsxs)(py,{children:[(0,q.jsxs)(my,{$active:e.mode===`client`,onClick:()=>void u(()=>Mc(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,q.jsx)(Ni,{size:11}),t(`app`)]}),(0,q.jsxs)(my,{$active:e.mode===`web`,onClick:()=>void u(()=>Mc(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,q.jsx)(da,{size:11}),t(`web`)]})]})]},e.id)),(0,q.jsxs)(hy,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Ac(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,q.jsx)(vi,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,q.jsxs)(gy,{children:[(0,q.jsxs)(_y,{children:[(0,q.jsx)(da,{size:12}),t(`browser_access`)]}),i.urls.map(e=>(0,q.jsx)(vy,{onClick:()=>void F(e),type:`button`,children:e},e)),(0,q.jsx)(oy,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Qv=v.div`
    position: relative;
    display: flex;
`,$v=v.button`
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
`,ey=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Wa}
    ${ro}
`,ty=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,ny=v.span`
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
`,ry=v.button`
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
`,iy=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,ay=v.div`
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
`,oy=v.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,sy=v.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,cy=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,ly=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,uy=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dy=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fy=v.button`
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
`,py=v.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,my=v.button`
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
`,hy=v.button`
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
`,gy=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,_y=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,vy=v.button`
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
`;function yy({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let s=o(),[c,l]=(0,L.useState)(!1),u=(0,L.useRef)(null);(0,L.useEffect)(()=>{if(!c)return;let e=()=>l(!1),t=e=>{u.current?.contains(e.target)||l(!1)},n=e=>{e.key===`Escape`&&l(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[c]),(0,L.useEffect)(()=>{a&&l(!1)},[a]);let d=e.columns,f=e=>{let t=new Set(d);t.has(e)?t.delete(e):t.add(e);let r=ul.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,q.jsxs)(by,{ref:u,children:[(0,q.jsx)(xy,{$active:c,disabled:a,onClick:()=>l(e=>!e),title:s(`view`),type:`button`,children:e.mode===`grid`?(0,q.jsx)(Ti,{size:14}):(0,q.jsx)(wi,{size:14})}),c&&(0,q.jsxs)(Sy,{children:[(0,q.jsx)(Cy,{children:s(`view`)}),(0,q.jsxs)(Ty,{children:[(0,q.jsxs)(Ey,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,q.jsx)(wi,{size:12}),` `,s(`list`)]}),(0,q.jsxs)(Ey,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,q.jsx)(Ti,{size:12}),` `,s(`grid`)]})]}),(0,q.jsx)(Cy,{children:s(`list_icon_size`)}),(0,q.jsxs)(Dy,{children:[(0,q.jsx)(`input`,{"aria-label":s(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,q.jsxs)(Oy,{children:[e.iconSize,`px`]})]}),(0,q.jsx)(Cy,{children:s(`grid_size`)}),(0,q.jsxs)(Dy,{children:[(0,q.jsx)(`input`,{"aria-label":s(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,q.jsxs)(Oy,{children:[e.gridSize,`px`]})]}),(0,q.jsxs)(Cy,{children:[s(`columns`),(0,q.jsx)(Gm,{}),(0,q.jsx)(wy,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:s(`reset_column_widths`),type:`button`,children:s(`reset_widths`)})]}),ul.map(e=>(0,q.jsxs)(ky,{children:[(0,q.jsx)(`input`,{checked:d.includes(e.id),onChange:()=>f(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,q.jsxs)(ky,{children:[(0,q.jsx)(`input`,{checked:d.includes(`linkTarget`),onChange:()=>f(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`link_target_after_the_name`)})]}),(0,q.jsxs)(Cy,{children:[s(`preview_panel`),(0,q.jsx)(Gm,{})]}),(0,q.jsxs)(ky,{children:[(0,q.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`preview_under_the_list`)})]})]})]})}var by=v.div`
    position: relative;
    display: flex;
    height: 100%;
`,xy=v.button`
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
`,Sy=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Wa}
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
`,Cy=v.div`
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
`,wy=v.button`
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
`,Ty=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Ey=v.button`
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
`,Dy=v.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Oy=v.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,ky=v.label`
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
`,Ay=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),jy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),My=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Ny=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,q.jsx)(`path`,{d:`M2 5h6`})}),Py=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,q.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Fy=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,q.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,q.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Iy({tabs:e,activeId:n,onSelect:r,onClose:i,onNewTab:a,onReorder:s,onTransferToTab:c,view:l,onViewChange:d,onColumns:f,showImages:p,onShowImages:m,tasks:h,onClearTasks:g,activityOpen:_,onActivityOpenChange:v,trayCount:y,trayVisible:b,onToggleTray:x,split:S,canSplit:C,onToggleSplit:w,details:T,canDetails:E,onToggleDetails:ee,shortcuts:D,currentFolder:te}){let O=o(),ne=t(),k=u(),[A,j]=(0,L.useState)({left:!1,right:!1}),[re,M]=(0,L.useState)(null),[ie,ae]=(0,L.useState)(null),oe=(0,L.useRef)(null),se=(0,L.useRef)(null),ce=(0,L.useRef)(null),N=(0,L.useCallback)(()=>{let e=se.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;j(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,L.useEffect)(()=>{N();let e=se.current;if(!e)return;let t=new ResizeObserver(N);return t.observe(e),()=>t.disconnect()},[N,e.length]),(0,L.useEffect)(()=>()=>{oe.current&&window.clearTimeout(oe.current.timer)},[]),(0,L.useEffect)(()=>{ce.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[n]);let P=e=>se.current?.scrollBy({left:e,behavior:`smooth`}),F=()=>{oe.current&&window.clearTimeout(oe.current.timer),oe.current=null,ae(null)};return(0,q.jsxs)(By,{children:[(0,q.jsx)(Vy,{children:(0,q.jsx)(Ni,{size:19})}),(0,q.jsxs)(Hy,{children:[A.left&&(0,q.jsx)(Wy,{onClick:()=>P(-180),title:O(`scroll_tabs_left`),type:`button`,children:(0,q.jsx)(Ay,{})}),(0,q.jsx)(Uy,{onScroll:N,onWheel:e=>{let t=se.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:se,children:e.map(e=>(0,q.jsxs)(Gy,{$active:e.id===n,$dragging:re===e.id,$dropTarget:ie===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!ic(t.dataTransfer)||!Ly(e)||(t.preventDefault(),oe.current?.id===e.id))return;F(),ae(e.id);let n=window.setTimeout(()=>{r(e.id),oe.current=null},500);oe.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(oe.current?.id===e.id||ie===e.id)&&F()},onDragEnd:()=>{M(null),F()},onDragOver:t=>{(re||ic(t.dataTransfer)&&Ly(e))&&(t.preventDefault(),ic(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>M(e.id),onDrop:t=>{if(t.preventDefault(),re)s(re,e.id);else if(Ly(e)&&ic(t.dataTransfer)){let{paths:n,move:i}=ac(t);n.length>0&&(r(e.id),c(n,e.path,!t.ctrlKey&&i))}M(null),F()},onClick:()=>r(e.id),ref:e.id===n?ce:void 0,title:e.path||e.title,type:`button`,children:[(0,q.jsx)(Ry,{tab:e}),(0,q.jsx)(Ky,{children:e.title}),e.partner&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(qy,{children:`|`}),(0,q.jsx)(zy,{place:e.partner.place}),(0,q.jsx)(Ky,{children:e.partner.title})]}),(0,q.jsx)(Jy,{"data-shortcut":Jt(D.closeTab),onClick:t=>{t.stopPropagation(),i(e.id)},title:O(`close_tab`),children:(0,q.jsx)(My,{})})]},e.id))}),A.right&&(0,q.jsx)(Wy,{onClick:()=>P(180),title:O(`scroll_tabs_right`),type:`button`,children:(0,q.jsx)(jy,{})}),(0,q.jsx)(Yy,{"data-shortcut":Jt(D.newTab),onClick:a,title:O(`new_tab`),type:`button`,children:(0,q.jsx)(vi,{size:13})})]}),(0,q.jsx)(Xy,{...k}),(0,q.jsxs)(Zy,{children:[(0,q.jsx)($y,{$active:S,"data-shortcut":Jt(D.splitView),disabled:!C,onClick:w,title:O(S?`close_split_view`:`split_view`),type:`button`,children:(0,q.jsx)(ba,{size:15})}),(0,q.jsx)($y,{$active:T,disabled:!E,onClick:ee,title:O(T?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,q.jsx)(xa,{size:15})}),(0,q.jsxs)(Qy,{$active:b,onClick:x,title:O(b?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,q.jsx)(ua,{size:14}),y>0&&(0,q.jsx)(lv,{children:y>9?`9+`:y})]}),(0,q.jsx)(Nv,{}),(0,q.jsx)(Zv,{currentFolder:te}),(0,q.jsx)(uv,{tasks:h,onClear:g,open:_,onOpenChange:v}),(0,q.jsx)(yy,{disabled:e.find(e=>e.id===n)?.kind!==`files`,onChange:d,onColumns:f,onShowImages:m,showImages:p,view:l}),(0,q.jsx)(eb,{onClick:ne.minimize,title:O(`minimize`),type:`button`,children:(0,q.jsx)(Ny,{})}),(0,q.jsx)(eb,{onClick:ne.toggleMaximize,title:ne.maximized?O(`restore`):O(`maximize`),type:`button`,children:ne.maximized?(0,q.jsx)(Fy,{}):(0,q.jsx)(Py,{})}),(0,q.jsx)(tb,{onClick:ne.close,title:O(`close`),type:`button`,children:(0,q.jsx)(My,{})})]})]})}function Ly(e){return e.kind===`files`&&(!T(e.path)||ee(e.path))}function Ry({tab:e}){switch(e.kind){case`home`:return(0,q.jsx)(di,{size:13});case`settings`:return(0,q.jsx)(Si,{size:13});case`recycle`:return(0,q.jsx)(Oi,{size:13});default:return e.archive?(0,q.jsx)(zi,{size:13}):(0,q.jsx)(zy,{place:e.place})}}function zy({place:e}){return e?(0,q.jsx)(Ls,{place:e,size:13}):(0,q.jsx)(fi,{size:13})}var By=v.header`
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
`,Vy=v.span`
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
`,Hy=v.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Uy=v.div`
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
`,Wy=v.button`
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
`,Gy=v.button`
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
`,Ky=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,qy=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Jy=v.span`
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
`,Yy=v.button`
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
`,Xy=v.div`
    flex: 1;
    min-width: 28px;
`,Zy=v.div`
    display: flex;
    flex-shrink: 0;
`,Qy=v.button`
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
`,$y=v.button`
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
`,eb=v.button`
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
`,tb=v(eb)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function nb(){let[e,t]=(0,L.useState)(null),n=(0,L.useRef)(null),r=(0,L.useRef)(void 0);return(0,L.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,Ua.createPortal)((0,q.jsx)(rb,{tooltip:e}),document.body):null}function rb({tooltip:e}){let t=(0,L.useRef)(null),[n,r]=(0,L.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,L.useState)(()=>e.bottom+6);return(0,L.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,q.jsxs)(ib,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,q.jsx)(ab,{children:e.text}),e.shortcut&&(0,q.jsx)(ob,{children:e.shortcut})]})}var ib=v.div`
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
    ${io}
`,ab=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,ob=v.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,sb={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`};function cb({deviceName:e,code:t,onAccept:n,onReject:r}){let i=o(),a=(0,L.useRef)(null);return(0,L.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,Ua.createPortal)((0,q.jsx)(lb,{children:(0,q.jsxs)(ub,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsxs)(db,{children:[(0,q.jsx)(la,{size:15}),i(`pair_for_sharing`)]}),(0,q.jsx)(fb,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,q.jsx)(pb,{children:t}),(0,q.jsx)(mb,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,q.jsxs)(hb,{children:[(0,q.jsx)(gb,{onClick:r,type:`button`,children:i(`reject`)}),(0,q.jsx)(_b,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var lb=v.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${io}
`,ub=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${$a}
`,db=v.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,fb=v.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,pb=v.div`
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
`,mb=v.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,hb=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,gb=v.button`
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
`,_b=v(gb)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,vb=0,yb=new Set;function bb(e){yb.add(e),l.send({type:`app.navigate.done`,payload:{path:e}})}var xb=20,Sb=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Cb(e){return e.history[e.index]??zp(`home`)}function wb(e){return Bp(Cb(e))??`files`}function Tb(e){let t=Cb(e);return Bp(t)?``:e.listing?.path||t}function Eb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||wb(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Db(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Ob(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||xe.iconSize,gridSize:e.view?.gridSize||t.gridSize||xe.gridSize,sort:e.view?.sort??xe.sort,sortDescending:e.view?.sortDescending??xe.sortDescending,columns:t.columns??Se.columns??[]}}function kb(e=zp(`home`)){return vb+=1,{id:`tab-${vb}`,listing:null,loading:!Bp(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Ab(e){return e instanceof Error?e.message:String(e)}function jb(e){let t=Bc(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Vc(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Mb(e){let t=x(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Nb(e){return T(e)?$t(e):void 0}function Pb(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return oe(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:C(n)})}function Fb(){let e=o(),[t,n]=(0,L.useState)(()=>[kb()]),[i,a]=(0,L.useState)(()=>t[0].id),[s,c]=(0,L.useState)(null),[u,d]=(0,L.useState)(()=>{let e=qn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,L.useState)([]),[h,_]=(0,L.useState)([]),[v,y]=(0,L.useState)(null),[b,S]=(0,L.useState)(null),[C,w]=(0,L.useState)(null),ne=te(),[k,A]=(0,L.useState)(yn),[j,ie]=(0,L.useState)(0),[ae,se]=(0,L.useState)(0),[ce,F]=(0,L.useState)(0),[le,ue]=(0,L.useState)(yn),[fe,pe]=(0,L.useState)(0),[me,he]=(0,L.useState)(0),[ge,I]=(0,L.useState)(0),[_e,ve]=(0,L.useState)(0),ye=(0,L.useRef)(_e);ye.current=_e;let[R,Ce]=(0,L.useState)([]),[ke,Fe]=(0,L.useState)(10),[z,Ie]=(0,L.useState)(null),Le=f(g(z?.themeMode)),Re=(0,L.useMemo)(()=>(z?.favorites??[]).map(e=>E(e.path)),[z?.favorites]),[ze,Be]=(0,L.useState)(0),[B,Ve]=(0,L.useState)(Ut),[Ue,Ge]=(0,L.useState)(0),[Ke,qe]=(0,L.useState)(0),[Ye,Xe]=(0,L.useState)(0),[Qe,$e]=(0,L.useState)(!0),[et,tt]=(0,L.useState)(()=>{let e=qn(`yafm.preview.width`,320);return e>=220?e:320}),[nt,rt]=(0,L.useState)(null),[it,at]=(0,L.useState)(null),[ct,lt]=(0,L.useState)({kind:null,info:null}),[ut,dt]=(0,L.useState)(`primary`),[ft,pt]=(0,L.useState)(null),[V,mt]=(0,L.useState)(null),[ht,gt]=(0,L.useState)(null),[vt,xt]=(0,L.useState)(null),[wt,Et]=(0,L.useState)({primary:0,secondary:0}),[Dt,Ot]=(0,L.useState)({primary:null,secondary:null}),[At,jt]=(0,L.useState)(null),[Mt,Nt]=(0,L.useState)([]),[Pt,Lt]=(0,L.useState)(!1),Rt=(0,L.useRef)([]),zt=(0,L.useRef)([]),[Wt,Yt]=(0,L.useState)([]),[Zt,Qt]=(0,L.useState)(!1),rn=(0,L.useMemo)(()=>Zt?new Set(Wt.map(e=>e.path)):new Set,[Wt,Zt]),[an,on]=(0,L.useState)(!1),[sn,un]=(0,L.useState)([]),[dn,U]=(0,L.useState)(null),fn=(0,L.useRef)(0),[pn,mn]=(0,L.useState)(()=>{let e=Yn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Db({x:e.x,y:e.y}):Db({x:Math.max(20,window.innerWidth-340),y:110})}),W=(0,L.useCallback)(()=>{mn(e=>Db(e)),on(!0)},[]),G=t.find(e=>e.id===i)??t[0],K=wb(G),hn=Cb(G),gn=Tb(G),_n=K===`files`?G.listing?.parent??jb(gn):null,vn=G.splitWith?t.find(e=>e.id===G.splitWith):void 0,bn=K===`files`&&vn!==void 0,xn=vn?Tb(vn):``,Sn=vn?vn.listing?.parent??jb(xn):null,Cn=bn&&vn&&ut===`secondary`?vn:G,wn=z?.defaultView??Se,Tn=Ob(Cn,wn);(0,L.useEffect)(()=>{r(z?.accentColor,z?.secondaryColor,Le)},[z?.accentColor,z?.secondaryColor,Le]),(0,L.useEffect)(()=>{Ym(z?.fonts)},[z?.fonts]),(0,L.useEffect)(()=>{M(z?.timeFormat,z?.timeFormatPattern)},[z?.timeFormat,z?.timeFormatPattern]),(0,L.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!z?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[z?.backgroundSource]),(0,L.useEffect)(()=>(be(e=>new Promise(t=>{U({id:++fn.current,prompt:e,resolve:t})})),()=>be(null)),[]),(0,L.useEffect)(()=>{dt(`primary`)},[i]),(0,L.useEffect)(()=>{ue(yn),he(0),I(0)},[K]),(0,L.useEffect)(()=>{he(0)},[le.query,le.matchCase,le.regex]),(0,L.useEffect)(()=>{he(e=>ge===0?0:Math.min(e,ge-1))},[ge]);let En=Tn.columns.includes(`linkCount`),Dn=(0,L.useMemo)(()=>{let e={},t=Ps(z),n={};for(let[e,t]of Object.entries(z?.placeNames??{}))n[E(e)]=t;for(let t of p)e[E(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=E(t),i=p.find(e=>E(e.path)===r);e[r]={name:n[r]??i?.name??(x(t)||t),path:t,kind:`folder`,icon:i?.icon??z?.placeIcons?.[t]??null}}return e},[p,z]),kn=(0,L.useMemo)(()=>({places:Dn,useIcons:z?.systemIcons===!1}),[Dn,z?.systemIcons]),An=z?.defaultView?.showImages??!0,jn=z?.defaultView?.imageStripHeight??Se.imageStripHeight,Mn=K===`home`?(0,q.jsx)(Ji,{size:13}):K===`settings`?(0,q.jsx)(Si,{size:13}):K===`recycle`?(0,q.jsx)(Oi,{size:13}):K===`gallery`?(0,q.jsx)(Ii,{size:13}):void 0,Nn=k.open&&k.query.length>0,Pn=(0,L.useMemo)(()=>Nn&&Cn.listing?Cn.listing.entries.filter(e=>On(e.isDirectory?Rn(kn,e.fullPath,e.name):e.name,k)).map(e=>e.fullPath):[],[Nn,k,Cn.listing,kn]);(0,L.useEffect)(()=>{ie(0)},[k.query,k.matchCase,k.regex,Cn.listing?.path]);let In=Pn.length===0?-1:Math.min(j,Pn.length-1),zn=(0,L.useCallback)(()=>{A(e=>({...e,open:!1,query:``})),ie(0)},[]),Bn=(0,L.useCallback)(()=>{A(e=>({...e,open:!0})),se(e=>e+1)},[]),Vn=(0,L.useCallback)(()=>{ue(e=>({...e,open:!0})),pe(e=>e+1)},[]),Hn=(0,L.useCallback)(()=>{ue(yn),he(0),I(0)},[]),Un=(0,L.useCallback)(e=>{he(t=>ge===0?0:(Math.min(t,ge-1)+e+ge)%ge)},[ge]),Wn=(0,L.useCallback)(e=>{A(t=>({...t,open:!0,query:t.open?t.query+e:e})),se(e=>e+1)},[]),Gn=(0,L.useCallback)(e=>{ie(t=>Pn.length===0?0:(Math.min(t,Pn.length-1)+e+Pn.length)%Pn.length)},[Pn.length]),Kn=(0,L.useRef)({tabs:t,activeId:i,activePane:ut});Kn.current={tabs:t,activeId:i,activePane:ut};let Zn=(0,L.useRef)(z);Zn.current=z;let Qn=(0,L.useRef)(!1),$n=(0,L.useRef)([]),er=(0,L.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),tr=(0,L.useRef)(new Map),nr=(0,L.useCallback)(e=>{let t=(tr.current.get(e)??0)+1;return tr.current.set(e,t),()=>tr.current.get(e)===t},[]),rr=(0,L.useCallback)((e,t)=>{l.available&&t&&e===Eb(Kn.current)&&l.send({type:`fs.focus`,payload:{path:t}})},[]),ir=(0,L.useCallback)(async(e,t,n)=>{if(!(t&&zc(t)))try{let r=await Me(t,En);if(!n()||!r.listing)return;er(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[En,er]),ar=(0,L.useCallback)(async(e,t,n=!1)=>{let r=nr(e);zn(),rr(e,t);let i=!n||!Kn.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;er(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&N(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&ir(e,t,r);let o=t&&zc(t)?await Hc(t):await Te(t,!0,En,ye.current,t?Nb(t):void 0);if(!r())return;er(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!zc(o.path)&&We(o.path).then(()=>Be(e=>e+1))}catch(i){if(!r())return;let a=Kn.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Tb(a):``,s=jb(o),c=Ab(i);if(o&&nn(c)){let i=D(o),a=await Na(i,!!$t(i));if(a){en(i,a),r()&&ar(e,t,n);return}}er(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[nr,En,er,rr,zn,ir]),or=(0,L.useCallback)((e,t)=>{let n=Vp(t);n&&(Bp(n)?(zn(),nr(e),er(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):ar(e,n))},[nr,ar,er,zn]),sr=(0,L.useCallback)(async(e,t,n)=>{if(zn(),Bp(t)){nr(e),er(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=nr(e);rr(e,t),er(e,()=>({index:n,listing:null,loading:!0,error:null}));try{zc(t)||ir(e,t,r);let n=zc(t)?await Hc(t):await Te(t,!0,En,ye.current,Nb(t));if(!r())return;er(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(nn(Ab(i))){let i=D(t),a=await Na(i,!!$t(i));if(a){en(i,a),r()&&sr(e,t,n);return}}er(e,()=>({listing:{path:t,parent:jb(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Ab(i)}))}},[nr,En,er,rr,zn,ir]),cr=(0,L.useCallback)((e,t=!0)=>{let r=kb(e??zp(`home`));return n(e=>[...e,r]),t&&a(r.id),e&&!Bp(e)&&ar(r.id,e),r.id},[ar]),lr=(0,L.useCallback)(e=>{for(let t of Kn.current.tabs)wb(t)===`files`&&N(Tb(t),e)&&ar(t.id,e,!0)},[ar]),ur=(0,L.useCallback)((e,t)=>{let n=x(t);for(let r of Kn.current.tabs)r.listing?.entries.some(t=>N(t.fullPath,e))&&er(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>N(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[er]),dr=(0,L.useRef)([]);(0,L.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&T(t)&&e.add(E(D(t)))}let n=dr.current.filter(t=>!e.has(t));dr.current=[...e],n.length>0&&Oe(n)},[t]);let fr=(0,L.useCallback)((e,t=!1)=>{t?cr(zp(e)):or(Kn.current.activeId,zp(e))},[cr,or]),pr=(0,L.useCallback)(e=>{let{tabs:t,activeId:r}=Kn.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(zt.current.push(Cb(i)),zt.current.length>xb&&zt.current.shift()),o.length===0){let e=kb();n([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&a(o[Math.min(s,o.length-1)].id)},[]),mr=(0,L.useCallback)(()=>{let e=zt.current.pop();if(!e)return;let t={...kb(e),fresh:!1};n(e=>[...e,t]),a(t.id),wb(t)===`files`&&ar(t.id,Tb(t))},[ar]),hr=(0,L.useCallback)((e,t=!1)=>{t?cr(e):or(Eb(Kn.current),e??zp(`home`))},[or,cr]),gr=(0,L.useCallback)(e=>{let{tabs:t,activeId:n}=Kn.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),_r=(0,L.useCallback)(()=>{let{tabs:e,activeId:t}=Kn.current,r=e.find(e=>e.id===t);if(!r||wb(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),er(t,()=>({splitWith:void 0})),dt(`primary`);return}let a=Tb(r),o={...kb(a),hidden:!0};n(e=>[...e,o]),er(t,()=>({splitWith:o.id})),ar(o.id,a),dt(`primary`)},[ar,er]),vr=(0,L.useCallback)(e=>{tt(e),Jn(`yafm.preview.width`,e)},[]),yr=(0,L.useCallback)((e,t,n)=>lt(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),br=(0,L.useCallback)((e,t)=>yr(`gallery`,e,t),[yr]),xr=(0,L.useCallback)((e,t)=>yr(`recycle`,e,t),[yr]),Sr=bn?ut===`secondary`?it??nt:nt??it:nt,Cr=bn&&ut===`secondary`?wt.secondary:wt.primary,wr=K===`files`?Sr:ct.kind===K?ct.info:null,Tr=K===`files`?Cr>1?oe(e,Cr,`k_1_item_selected`,`count_items_selected`):void 0:ct.kind===K?ct.note:void 0,Er=(0,L.useRef)(null),Dr=e=>{e.preventDefault();let t=Er.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);d(r),Jn(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Or=(e,t,n)=>{t&&pt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},kr=(0,L.useCallback)((e,t)=>{Et(n=>n[e]===t?n:{...n,[e]:t})},[]),Ar=(0,L.useCallback)(e=>kr(`primary`,e),[kr]),jr=(0,L.useCallback)(e=>kr(`secondary`,e),[kr]),Mr=(e,t)=>{wt[e]!==0&&Ot(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Nr=async(e,t=!1)=>{let n=ft;if(pt(null),!n)return;let r=e===null?await Tt(n.directory,t):await kt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;zn(),jt(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Pr=(0,L.useCallback)(()=>{let{tabs:e}=Kn.current,t=e.find(e=>e.id===Eb(Kn.current));t&&t.index>0&&sr(t.id,t.history[t.index-1],t.index-1)},[sr]),Fr=(0,L.useCallback)(()=>{let{tabs:e}=Kn.current,t=e.find(e=>e.id===Eb(Kn.current));t&&t.index<t.history.length-1&&sr(t.id,t.history[t.index+1],t.index+1)},[sr]),Ir=(0,L.useCallback)(()=>{let{tabs:e}=Kn.current,t=e.find(e=>e.id===Eb(Kn.current));t&&wb(t)===`files`&&t.listing?.parent&&hr(t.listing.parent)},[hr]),Lr=(0,L.useRef)(null),Rr=(0,L.useCallback)(()=>{for(let e of Kn.current.tabs)e.listing&&ar(e.id,e.listing.path,!0)},[ar]),zr=(0,L.useCallback)(e=>{e.length!==0&&(un(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),W())},[W]),Br=(0,L.useCallback)(async e=>{let t=await H(e);t.length!==0&&zr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[zr]),Vr=(0,L.useCallback)(e=>{let t=new Set(e);un(e=>e.filter(e=>!t.has(e.path)))},[]),Hr=(0,L.useCallback)(async e=>{let t=Zn.current;if(!t)return;let n=await H(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>E(e.path))),i=n.filter(e=>!r.has(E(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};Ie(a),await ot(a),Ge(e=>e+1)},[]),Ur=(0,L.useCallback)(async e=>{let t=Zn.current;if(!t)return;let n=new Set(e.map(E)),r=(t.favorites??[]).filter(e=>!n.has(E(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};Ie(i),await ot(i),Ge(e=>e+1)},[]),Wr=(0,L.useCallback)(()=>un([]),[]),Gr=(0,L.useRef)(-1),Kr=(0,L.useCallback)(e=>{Yt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Qt(e.move),e.entries.length>0&&W()},[W]),qr=(0,L.useCallback)(async()=>{if(l.available)try{let e=await yt();Gr.current=e.sequence,Kr(e)}catch{}},[Kr]),Jr=(0,L.useCallback)(async e=>{e.length!==0&&await _t(e,!1)&&await qr()},[qr]),Yr=(0,L.useRef)(sn);Yr.current=sn;let Xr=(0,L.useRef)(an);Xr.current=an;let Zr=(0,L.useRef)(!1);(0,L.useEffect)(()=>{let e=z?.trayAutoShow??!0,t=t=>{e&&ic(t)&&(Xr.current||(Zr.current=!0),W())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Zr.current&&window.setTimeout(()=>{Zr.current&&Yr.current.length===0&&on(!1),Zr.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[W,z?.trayAutoShow]),(0,L.useEffect)(()=>{let e=()=>mn(e=>Db(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Qr=(0,L.useCallback)(async()=>{let e=Yr.current;if(e.length>0){let t=await H(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));un(e=>e.filter(e=>n.has(e.path)))}await qr()},[qr]),$r=(0,L.useCallback)(()=>{Qr(),Xe(e=>e+1),Rr()},[Qr,Rr]),ei=(0,L.useCallback)(e=>{let t=Db(e);mn(t),Xn(`yafm.tray.position`,t)},[]),ti=(0,L.useCallback)(()=>{Zr.current=!1,an?on(!1):W()},[W,an]),ni=(0,L.useCallback)(async(t,n,r)=>{let i=await bt(t,n,r);i.cancelled||(i.ok?(r&&Vr(t),Xe(e=>e+1),Rr(),qr()):ja(i.error??e(`the_files_could_not_be_transferred`)))},[Rr,qr,Vr]);(0,L.useEffect)(()=>{if(l.available)return Vt().then(e=>{Rt.current=e,Nt(e)},()=>void 0),l.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Rt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Rt.current=n,Nt(n),r&&Lt(!0)})},[]);let ri=(0,L.useCallback)(()=>{Ht().then(()=>Vt().then(e=>{Rt.current=e,Nt(e)},()=>void 0))},[]);(0,L.useEffect)(()=>{if(!l.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await yt();if(!e||t.sequence===Gr.current)return;Gr.current=t.sequence,Kr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Kr]);let ii=(0,L.useCallback)(async e=>{let t=e?await Ft():await It();t.ok?(Xe(e=>e+1),Rr()):t.error&&!t.error.startsWith(`Nothing to`)&&ja(t.error)},[Rr]),ai=(0,L.useRef)(En);(0,L.useEffect)(()=>{ai.current!==En&&(ai.current=En,Rr())},[En,Rr]);let oi=(0,L.useCallback)((e,t)=>{let{tabs:n}=Kn.current,r=n.find(t=>t.id===e);if(!r||wb(r)!==`files`)return;let i=Tb(r),a=Zn.current?.defaultView??Se,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||xe.iconSize,gridSize:r.view?.gridSize||a.gridSize||xe.gridSize,sort:r.view?.sort??xe.sort,sortDescending:r.view?.sortDescending??xe.sortDescending,...t};er(e,()=>({view:o})),Lr.current!==null&&window.clearTimeout(Lr.current),Lr.current=window.setTimeout(()=>{Lr.current=null,Ae(i,o)},250)},[er]),si=(0,L.useCallback)(e=>{oi(Eb(Kn.current),e)},[oi]),ci=(0,L.useCallback)(e=>{let t=Zn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Se,columns:e}};Ie(n),ot(n)},[]),li=(0,L.useCallback)(e=>{let t=Zn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Se,showImages:e}};Ie(n),ot(n)},[]),ui=(0,L.useCallback)(e=>{let t=Zn.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Se,imageStripHeight:e}};Ie(n),ot(n)},[]),J=(0,L.useCallback)((e,t,n,r)=>{let i=Kn.current.tabs.find(t=>t.id===e);if(!i||wb(i)!==`files`||!i.listing)return;let a=Tb(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));er(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),je(a,t,n,r)},[er]),di=(0,L.useCallback)((e,t)=>{let n=Kn.current.tabs.find(t=>t.id===e);if(!n)return;let r=Ob(n,Zn.current?.defaultView??Se);oi(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[oi]),fi=(0,L.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),pi=(0,L.useCallback)(()=>{Ne().then(m,()=>m([]))},[]),mi=(0,L.useCallback)(e=>{let t=(e.openTabs??[]).map(Vp).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...kb(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),a(r[i].id);for(let e of r)wb(e)===`files`&&ar(e.id,Tb(e),!0);return!0},[ar]),_i=(0,L.useCallback)(e=>{let t=$n.current;if($n.current=[],t.length===0)return;let n=t.filter(e=>!yb.has(e));for(let e of t)n.includes(e)||bb(e);if(n.length===0)return;let{tabs:r}=Kn.current;if(!e&&r.length===1&&r[0].fresh){or(r[0].id,n[0]),bb(n[0]);for(let e of n.slice(1))cr(e),bb(e);return}let i=n.map(e=>{let t=cr(e);return bb(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[cr,or]),xi=(0,L.useCallback)(()=>{Ze().then(e=>{Ie(e),Fe(e.recentLimit);let t={...Ut,...e.shortcuts};Ve(t),Gt(t.openInNewTab),Ge(e=>e+1),Qn.current||(Qn.current=!0,_i(e.restoreTabs&&mi(e)))},()=>{Fe(10),Qn.current=!0,_i(!1)})},[_i,mi]),Ci=(0,L.useCallback)(()=>{He().then(Ce,()=>Ce([]))},[]),wi=(0,L.useCallback)(()=>{Pe().then(_,()=>_([]))},[]),Ti=t.filter(e=>!e.hidden),Ei=Ti.map(Cb),Di=Ei.join(`
`),ki=Math.max(Ti.findIndex(e=>e.id===i),0);(0,L.useEffect)(()=>{if(!z?.restoreTabs)return;let e=setTimeout(()=>void st(Ei,ki),700);return()=>clearTimeout(e)},[Di,ki,z?.restoreTabs]),(0,L.useEffect)(()=>{let{tabs:e,activeId:t}=Kn.current,n=e.find(e=>e.id===t);n&&n.fresh&&wb(n)===`files`&&ar(n.id,Tb(n),!0),pi(),xi(),wi(),P().then(y,()=>y(null))},[ar,pi,xi,wi]),(0,L.useEffect)(()=>{if(de().then(S,()=>S(null)),l.available)return l.on(e=>{let t=e;t.type===`update.checked`&&t.data&&S(t.data)})},[]),(0,L.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&c({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&ja(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&ja(n.data.error??e(`pairing_failed`))}})},[e]),(0,L.useEffect)(()=>{let e=setInterval(wi,3e4);return()=>clearInterval(e)},[wi]),(0,L.useEffect)(()=>{K===`home`&&(Ci(),wi())},[K,G.id,Ci,wi]),(0,L.useEffect)(()=>{if(!l.available)return;let e=l.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=Kn.current,i=t.data.startup===!0;i&&yb.has(n)?bb(n):i&&!Qn.current?$n.current.includes(n)||$n.current.push(n):(i&&r.length===1&&r[0].fresh?or(r[0].id,n):Bp(n)?or(Eb(Kn.current),n):cr(n),i&&bb(n))});return l.send({type:`app.ready`}),e},[or,cr]),(0,L.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,L.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,L.useEffect)(()=>{let e=e=>{if(Xt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Pr();return}if(e.key===`BrowserForward`){e.preventDefault(),Fr();return}if(e.key===`Escape`&&k.open){e.preventDefault(),zn();return}let t=qt(e);if(t===B.closeTab)e.preventDefault(),pr(Eb(Kn.current));else if(t===B.newTab)e.preventDefault(),cr();else if(t===B.reopenTab)e.preventDefault(),mr();else if(t===B.goBack)e.preventDefault(),Pr();else if(t===B.goForward)e.preventDefault(),Fr();else if(t===B.goUp)e.preventDefault(),Ir();else if(t===B.find)e.preventDefault(),K===`files`?Bn():Vn();else if(t===B.location)e.preventDefault(),qe(e=>e+1);else if(t===B.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&hr(t)}else t===B.iconsView?(e.preventDefault(),K===`files`&&si({mode:`grid`})):t===B.detailsView?(e.preventDefault(),K===`files`&&si({mode:`list`})):t===B.nextTab?(e.preventDefault(),gr(1)):t===B.previousTab?(e.preventDefault(),gr(-1)):t===B.hidden||t===`alt+.`?(e.preventDefault(),Je().then(()=>{Xe(e=>e+1),Rr()})):t===B.undo?(e.preventDefault(),ii(!0)):t===B.redo?(e.preventDefault(),ii(!1)):t===B.splitView?(e.preventDefault(),_r()):K!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Wn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[B,K,k.open,pr,mr,cr,Pr,Fr,Ir,Bn,Vn,zn,Wn,si,gr,hr,p,Rr,ii,_r]),(0,L.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Pr()):(e.button===4||e.button===9)&&(e.preventDefault(),Fr())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Pr,Fr]),(0,L.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Pr();break;case`forward`:Fr()}})},[Pr,Fr]);let Ai=(0,L.useMemo)(()=>{let e=new Set;for(let n of t){if(wb(n)!==`files`)continue;let t=Tb(n);if(t&&!zc(t)){if(T(t)){let n=jb(D(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),ji=Ai.join(`\0`);(0,L.useEffect)(()=>{l.available&&l.send({type:`fs.watch`,payload:{paths:Ai,owner:`app`}})},[ji,i]);let Mi=wb(Cn)===`files`?Tb(Cn):``;(0,L.useEffect)(()=>{l.available&&l.send({type:`fs.focus`,payload:{path:Mi||null}})},[Mi]),(0,L.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=Kn.current.tabs.filter(e=>wb(e)===`files`&&N(Tb(e),n)),i=Kn.current.tabs.filter(e=>{let t=Tb(e);return wb(e)===`files`&&t.length>0&&T(t)&&N(D(t),n)});if(r.length!==0||i.length!==0){ln(n);for(let e of i){let t=Kn.current.tabs.find(t=>t.id===e.id),r=t?Tb(t):``;t&&wb(t)===`files`&&!t.loading&&T(r)&&N(D(r),n)&&ar(e.id,r,!0)}r.length!==0&&Te(n,!1,En).then(e=>{for(let t of r){let n=Kn.current.tabs.find(e=>e.id===t.id);n&&wb(n)===`files`&&N(Tb(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=Kn.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&wb(n)===`files`&&N(Tb(n),e.path)&&er(t.id,()=>({listing:e}))},300):er(t.id,()=>({listing:e})))}},()=>void 0)}})},[En,ar,er]);let Ni=G.index>0,Pi=G.index<G.history.length-1,Fi=(e,t)=>{let n=Ob(e,wn),r=e.listing?.path??e.history[e.index]??``,i=T(r),a=i&&ee(r);return(0,q.jsx)(yl,{confirmDelete:z?.confirmDelete??!1,cutPaths:rn,previewVideoAudio:z?.previewVideoAudio??!1,previewVideoAutoplay:z?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?rt:at,onActivate:()=>dt(t?`primary`:`secondary`),enableShortcuts:(!bn||(t?ut===`primary`:ut===`secondary`))&&(!i||a),error:e.error,find:e.id===Cn.id?{...k,currentPath:In<0?null:Pn[In]}:void 0,selectMatchesToken:e.id===Cn.id?ce:0,imageStripHeight:jn,listing:e.listing,loading:e.loading,onImageStripHeight:ui,readOnly:i&&!a||zc(e.listing?.path??``),onOpen:(t,n)=>{n?cr(t):ar(e.id,t)},onOpenFile:(t,n)=>{zc(t)?Wc(t).catch(e=>void ja(Ab(e))):re(t)?z?.archiveHandler??!1?n?cr(t):ar(e.id,t):we(t):T(t)?(async()=>{let e=await De(t,ye.current,Nb(t));if(!e.path&&nn(e.error)){let n=D(t),r=$t(n);r&&tn(n);let i=await Na(n,!!r);i&&(en(n,i),e=await De(t,ye.current,i))}e.path?we(e.path):e.error&&ja(e.error)})():we(t)},onRefresh:()=>{let t=e.listing?.path;t&&lr(t)},onRename:ur,onSelectionCountChange:t?Ar:jr,onSetTags:(t,n,r)=>J(e.id,t,n,r),selectionMenuRequest:t?Dt.primary:Dt.secondary,onSort:t=>di(e.id,t),onPaste:$r,onClipboardChanged:()=>void qr(),onTransfer:ni,onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Re,onExtractArchive:(e,t)=>void Ui(e,t),openOnSingleClick:z?.openOnSingleClick??!1,pendingRename:At&&t===(ut===`primary`)&&N(At.directory,e.listing?.path??``)?At.path:null,pendingRenameToken:At?.token??0,refreshToken:Ye,shortcuts:B,showCheckboxes:z?.showCheckboxes??!0,showImages:An,view:n})},Li=k.open&&(0,q.jsx)(Yd,{current:In,focusToken:ae,matchCase:k.matchCase,mode:k.mode,onClose:zn,onMatchCase:()=>A(e=>({...e,matchCase:!e.matchCase})),onMode:()=>A(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Gn(1),onPrevious:()=>Gn(-1),onQuery:e=>A(t=>({...t,query:e})),onRegex:()=>A(e=>({...e,regex:!e.regex})),query:k.query,regex:k.regex,total:Pn.length,onSelectMatches:Pn.length>0?()=>F(e=>e+1):void 0}),Ri=K===`files`&&T(gn),Bi=Ri&&ee(gn),Vi=Ri&&G.listing?.archiveEncrypted===!0,Hi=async(t,n)=>{let r=D(t),i=await Ee(r,n,ye.current,Nb(r));if(!i.ok&&nn(i.error)){let e=$t(r);e&&tn(r);let t=await Na(r,!!e);t&&(en(r,t),i=await Ee(r,n,ye.current,t))}i.ok?(lr(n),cn(),ar(G.id,n,!0)):ja(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ui=async(e,t)=>{let n=D(e),r=jb(n);if(!r)return;if(t===`choose`){let e=await Ea(r);e&&await Hi(n,e);return}let i=t===`named`;if(t===`auto`){let e=N(n,gn)?G.listing?.entries??[]:(await Te(n,!1,!1,ye.current,Nb(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${Mb(n)}`:r;await Hi(n,o)},Wi=async e=>{Ri&&await Ui(gn,e)},Gi=async()=>{Ri&&await Ui(gn,`choose`)},Ki=(0,q.jsxs)(Bb,{children:[(0,q.jsx)(Vb,{"data-shortcut":Jt(B.goBack),disabled:!Ni,onClick:e=>{G.index>0&&Kt(e)?cr(G.history[G.index-1]):Pr()},title:e(`back`),type:`button`,children:(0,q.jsx)(yi,{})}),(0,q.jsx)(Vb,{"data-shortcut":Jt(B.goForward),disabled:!Pi,onClick:e=>{G.index<G.history.length-1&&Kt(e)?cr(G.history[G.index+1]):Fr()},title:e(`forward`),type:`button`,children:(0,q.jsx)(bi,{})}),(0,q.jsx)(Vb,{"data-shortcut":Jt(B.goUp),disabled:K!==`files`||!_n,onClick:e=>{_n&&(Kt(e)?cr(_n):hr(_n))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(gi,{})}),(0,q.jsx)(Hp,{focusToken:Ke,icon:Mn,label:K===`files`?void 0:e(sb[K]),onContextMenu:K===`files`?(e,t,n)=>gt({x:t,y:n,path:e}):void 0,onNavigate:hr,path:K===`files`?gn:hn}),K===`files`&&(!Ri||Bi)&&(0,q.jsx)(Vb,{onClick:e=>Or(e,gn,()=>void ar(G.id,gn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(vi,{})}),(0,q.jsx)(Vb,{"data-shortcut":Jt(B.find),onClick:()=>K===`files`?Bn():Vn(),title:e(`search`),type:`button`,children:(0,q.jsx)(hi,{})}),wt.primary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Wb,{}),(0,q.jsx)(Vb,{onClick:e=>Mr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Sa,{})})]}),Ri&&(0,q.jsxs)(Hb,{children:[(0,q.jsx)(Wb,{}),Vi&&(0,q.jsxs)(Ub,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Ca,{size:12}),e(`encrypted`)]}),(0,q.jsx)(Vb,{onClick:()=>void Gi(),onContextMenu:e=>{e.preventDefault(),mt({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,q.jsx)(zi,{})}),(0,q.jsx)(So,{icon:(0,q.jsx)(da,{size:15}),onChange:e=>{let t=Number(e);ve(t),ye.current=t,Ri&&ar(G.id,gn,!0)},options:Sb.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(Sb.find(e=>e.value===String(_e))?.label??`auto`)}`,value:String(_e)})]})]}),qi=le.open?{...le,index:me}:null;return(0,q.jsx)(Fn,{value:kn,children:(0,q.jsxs)(Ib,{$rounded:ne,children:[(0,q.jsx)(ld,{settings:z,theme:Le}),(0,q.jsx)(Iy,{activeId:G.id,onClose:pr,onNewTab:()=>cr(),onReorder:fi,onTransferToTab:ni,onSelect:a,onViewChange:si,onColumns:ci,onShowImages:li,showImages:An,tasks:Mt,onClearTasks:ri,activityOpen:Pt,onActivityOpenChange:Lt,trayCount:sn.length+Wt.length,trayVisible:an,onToggleTray:ti,split:bn,canSplit:K===`files`,onToggleSplit:_r,details:Qe,canDetails:K===`files`||K===`recycle`||K===`gallery`,onToggleDetails:()=>$e(e=>!e),currentFolder:K===`files`&&!zc(gn)?gn:``,shortcuts:B,view:Tn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=wb(n),i=Tb(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?Tb(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Ln(kn,i):void 0,archive:r===`files`&&T(i),split:!!a,title:r===`files`?Rn(kn,i,x(i)||e(`files`)):e(sb[r]),partner:a?{title:Rn(kn,o,x(o)||e(`files`)),place:Ln(kn,o)}:void 0}})}),(0,q.jsxs)(Lb,{children:[(0,q.jsx)(G_,{activeKind:K,currentPath:K===`files`?hn:``,drives:h,historyVersion:ze,onNavigate:hr,onOpenView:fr,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:R,recentLimit:ke,version:Ue}),(0,q.jsxs)(Rb,{children:[(0,q.jsxs)(Xb,{children:[(0,q.jsxs)(Zb,{children:[K!==`files`&&Ki,(0,q.jsxs)(zb,{children:[K!==`files`&&le.open&&(0,q.jsx)(Yd,{current:me,focusToken:fe,matchCase:le.matchCase,mode:le.mode,onClose:Hn,onMatchCase:()=>ue(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ue(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Un(1),onPrevious:()=>Un(-1),onQuery:e=>ue(t=>({...t,query:e})),onRegex:()=>ue(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:le.query,regex:le.regex,total:ge,onSelectMatches:K===`gallery`||K===`recycle`?()=>F(e=>e+1):void 0}),K===`files`?bn&&vn?(0,q.jsxs)(Kb,{ref:Er,children:[(0,q.jsxs)(qb,{style:{flex:u},children:[(0,q.jsxs)(Gb,{$active:ut===`primary`,onPointerDown:()=>dt(`primary`),children:[(0,q.jsx)(Vb,{"data-shortcut":Jt(B.goBack),disabled:!Ni,onClick:e=>{let t=G.index-1;t<0||(Kt(e)?cr(G.history[t]):sr(G.id,G.history[t],t))},title:e(`back`),type:`button`,children:(0,q.jsx)(yi,{})}),(0,q.jsx)(Vb,{"data-shortcut":Jt(B.goForward),disabled:!Pi,onClick:e=>{let t=G.index+1;t>=G.history.length||(Kt(e)?cr(G.history[t]):sr(G.id,G.history[t],t))},title:e(`forward`),type:`button`,children:(0,q.jsx)(bi,{})}),(0,q.jsx)(Vb,{"data-shortcut":Jt(B.goUp),disabled:!_n,onClick:e=>{_n&&(Kt(e)?cr(_n):ar(G.id,_n))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(gi,{})}),(0,q.jsx)(Hp,{focusToken:ut===`primary`?Ke:void 0,onContextMenu:(e,t,n)=>gt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?cr(e):void ar(G.id,e),path:gn}),(0,q.jsx)(Vb,{onClick:e=>Or(e,gn,()=>void ar(G.id,gn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(vi,{})}),(0,q.jsx)(Vb,{"data-shortcut":Jt(B.find),onClick:Bn,title:e(`search`),type:`button`,children:(0,q.jsx)(hi,{})}),wt.primary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Wb,{}),(0,q.jsx)(Vb,{onClick:e=>Mr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Sa,{})})]})]}),Fi(G,!0),ut===`primary`&&Li]}),(0,q.jsx)(Jb,{onDoubleClick:()=>d(.5),onPointerDown:Dr,title:e(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(qb,{$enter:!0,style:{flex:1-u},children:[(0,q.jsxs)(Gb,{$active:ut===`secondary`,onPointerDown:()=>dt(`secondary`),children:[(0,q.jsx)(Vb,{"data-shortcut":Jt(B.goBack),disabled:vn.index<=0,onClick:e=>{let t=vn.index-1;t<0||(Kt(e)?cr(vn.history[t]):sr(vn.id,vn.history[t],t))},title:e(`back`),type:`button`,children:(0,q.jsx)(yi,{})}),(0,q.jsx)(Vb,{"data-shortcut":Jt(B.goForward),disabled:vn.index>=vn.history.length-1,onClick:e=>{let t=vn.index+1;t>=vn.history.length||(Kt(e)?cr(vn.history[t]):sr(vn.id,vn.history[t],t))},title:e(`forward`),type:`button`,children:(0,q.jsx)(bi,{})}),(0,q.jsx)(Vb,{"data-shortcut":Jt(B.goUp),disabled:!Sn,onClick:e=>{Sn&&(Kt(e)?cr(Sn):ar(vn.id,Sn))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(gi,{})}),(0,q.jsx)(Hp,{focusToken:ut===`secondary`?Ke:void 0,onContextMenu:(e,t,n)=>gt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?cr(e):void ar(vn.id,e),path:xn}),(0,q.jsx)(Vb,{onClick:e=>Or(e,xn,()=>void ar(vn.id,xn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(vi,{})}),(0,q.jsx)(Vb,{"data-shortcut":Jt(B.find),onClick:Bn,title:e(`search`),type:`button`,children:(0,q.jsx)(hi,{})}),wt.secondary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Wb,{}),(0,q.jsx)(Vb,{onClick:e=>Mr(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Sa,{})})]})]}),Fi(vn,!1),ut===`secondary`&&Li]})]}):(0,q.jsxs)(q.Fragment,{children:[Ki,(0,q.jsxs)(Yb,{children:[Fi(G,!0),Li]})]}):K===`home`?(0,q.jsx)(Mp,{drives:h,find:qi,historyVersion:ze,onSearchMatches:I,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:wi,onHistoryChanged:()=>Be(e=>e+1),onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Re,onExtractArchive:(e,t)=>void Ui(e,t),settingsVersion:Ue,theme:Le,onOpen:hr,onLayoutChanged:xi,onPlacesChanged:m,onRecentCleared:Ci,places:p,recent:R,recentLimit:ke,visibilityVersion:Ye}):K===`settings`?(0,q.jsx)(xh,{appInfo:v,find:qi,focusSection:C,onSearchMatches:I,onSettingsChanged:xi}):K===`gallery`?(0,q.jsx)(j_,{confirmDelete:z?.confirmDelete??!1,find:qi,onSearchMatches:I,openOnSingleClick:z?.openOnSingleClick??!1,onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Re,onExtractArchive:(e,t)=>void Ui(e,t),shortcuts:B,showCheckboxes:z?.showCheckboxes??!0,selectMatchesToken:ce,onPreviewChange:br,view:Tn}):(0,q.jsx)(am,{find:qi,onOpenLocation:hr,onShowDetails:()=>$e(!0),platform:v?.platform,selectMatchesToken:ce,onPreviewChange:xr})]},K)]}),(K===`files`||K===`gallery`||K===`recycle`)&&(0,q.jsx)(as,{emptyNote:e(`nothing_selected`),info:wr,onWidth:vr,open:Qe,selectionNote:Tr,videoAudio:z?.previewVideoAudio??!1,videoAutoplay:z?.previewVideoAutoplay??!1,width:et})]}),(0,q.jsxs)(nx,{children:[(0,q.jsx)(`span`,{children:K===`files`&&G.listing?Pb(e,G.listing):``}),v?(0,q.jsxs)(Qb,{children:[(0,q.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),v.debug&&(0,q.jsx)(tx,{children:`debug`}),b?.available&&(0,q.jsxs)($b,{onClick:()=>{w(`updates`),fr(`settings`)},title:e(`version_version_is_available`,{version:b.latest}),type:`button`,children:[(0,q.jsx)(ex,{}),e(`update_available`)]})]}):(0,q.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,q.jsx)(lc,{clipboardItems:Wt,clipboardMove:Zt,currentDirectory:K===`files`?hn:``,items:sn,onAdd:e=>void Br(e),onClear:Wr,onClose:()=>on(!1),onCopyToClipboard:e=>void Jr(e),onPosition:ei,onRemove:Vr,onTransfer:ni,position:pn,visible:an}),ft&&(0,q.jsx)(yo,{creationOnly:!0,directory:ft.directory,menu:{x:ft.x,y:ft.y,paths:[],background:!0},onClose:()=>pt(null),onCreateFile:e=>void Nr(e),onCreateFolder:e=>void Nr(null,e),shortcuts:B}),ht&&(0,q.jsx)(yo,{allowCompression:!0,directory:jb(ht.path)??ht.path,menu:{x:ht.x,y:ht.y,paths:[ht.path]},onAddToTray:e=>void Br(e),onAddFavorite:e=>void Hr(e),onRemoveFavorite:e=>void Ur(e),favoritePaths:Re,onExtractArchive:(e,t)=>void Ui(e,t),onArchiveCreated:e=>{e&&lr(jb(ht.path)??ht.path)},onClose:()=>gt(null),onCompressTo:(e,t)=>xt({paths:e,name:t}),onCopy:(e,t)=>void _t(e,t),onDelete:e=>void Ct(e,!1).then(()=>lr(jb(ht.path)??ht.path)),onOpen:(e,t)=>t?cr(e):void ar(G.id,e),onOpenFile:e=>void we(e),onPaste:e=>void St(e).then(t=>{t.ok&&lr(e)}),onRefresh:()=>lr(ht.path),shortcuts:B,target:{path:ht.path,isDirectory:!0}}),vt&&(0,q.jsx)(Fo,{initialDirectory:jb(ht?.path??gn)??gn,initialName:vt.name,onCancel:()=>xt(null),onCompress:async e=>{let t=await Bt(vt.paths,e);return!t.ok&&t.error&&ja(t.error),t.ok}}),V&&(0,q.jsx)(oo,{items:[{label:e(`extract_here`),onSelect:()=>void Wi(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Wi(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Wi(`auto`)}],onClose:()=>mt(null),x:V.x,y:V.y}),dn&&(0,q.jsx)(md,{action:dn.prompt.action,delaySeconds:dn.prompt.delaySeconds,hits:dn.prompt.hits,onCancel:()=>{dn.resolve(!1),U(null)},onConfirm:()=>{dn.resolve(!0),U(null)},permanent:dn.prompt.permanent},dn.id),(0,q.jsx)(Md,{}),(0,q.jsx)(zd,{}),s&&(0,q.jsx)(cb,{code:s.code,deviceName:s.deviceName,onAccept:()=>{Ic(s.requestId,!0),c(null)},onReject:()=>{Ic(s.requestId,!1),c(null)}}),(0,q.jsx)(nb,{}),(0,q.jsx)(O,{})]})})}var Ib=v.div`
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
`,Lb=v.div`
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
`,Rb=v.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,zb=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${to}
`,Bb=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Vb=v.button`
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
`,Hb=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Ub=v.span`
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
`,Wb=v.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Gb=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Kb=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,qb=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?io:``}
`,Jb=v.div`
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
        ${ao}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Yb=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Xb=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Zb=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Qb=v.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,$b=v.button`
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
`,ex=v.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,tx=v.span`
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
`,nx=v.footer`
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
`;function rx({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:s,showImages:c,save:u=!1,initialName:d=``,defaultExtension:f=``,theme:p,onCancel:m,onSelect:h}){let g=o(),_=al(`picker`),v=t===`file`,y=r??[],[S,C]=(0,L.useState)(e),[w,T]=(0,L.useState)(null),[ee,D]=(0,L.useState)(!0),[te,O]=(0,L.useState)(null),[ne,k]=(0,L.useState)(()=>new Set),[A,j]=(0,L.useState)(a??[]),[re,M]=(0,L.useState)([]),[ie,ae]=(0,L.useState)([]),[oe,se]=(0,L.useState)([]),[ce,N]=(0,L.useState)([]),[P,F]=(0,L.useState)(d),[le,ue]=(0,L.useState)(null),[de,fe]=(0,L.useState)(y.length===0),[pe,me]=(0,L.useState)(`files`),[he,ge]=(0,L.useState)(0),[I,_e]=(0,L.useState)(yn),[ve,ye]=(0,L.useState)(0),[be,R]=(0,L.useState)(0),[Ce,we]=(0,L.useState)(0),[Ee,De]=(0,L.useState)(null),[Oe,ke]=(0,L.useState)(null),[Ae,je]=(0,L.useState)(0),[Me,Fe]=(0,L.useState)(null),[z,Ie]=(0,L.useState)(Se.imageStripHeight);(0,L.useEffect)(()=>{Ze().then(Fe,()=>Fe(null))},[]),(0,L.useEffect)(()=>{a?j(a):Ne().then(j,()=>j([]))},[a]),(0,L.useEffect)(()=>{Pe().then(M,()=>M([])),He().then(ae,()=>ae([]))},[]),(0,L.useEffect)(()=>{let e=!0;return D(!0),O(null),k(new Set),u||F(v?``:x(S)),Te(S||void 0,!1).then(t=>{e&&(T(t),C(t.path),u||F(v?``:x(t.path)),D(!1))},t=>{e&&(O(t instanceof Error?t.message:String(t)),D(!1))}),()=>{e=!1}},[S,he,v]),(0,L.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),_e(e=>({...e,open:!0})),ye(e=>e+1);return}if(e.key===`Escape`){I.open?(_e(e=>({...e,open:!1,query:``})),R(0)):m();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Re();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),ze();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),_e(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),ye(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||et()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,L.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Re()):(e.button===4||e.button===9)&&(e.preventDefault(),ze())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Le=e=>{let t=e.trim();t.length!==0&&E(t)!==E(S)&&(se(e=>[...e,S]),N([]),me(`files`),C(t))},Re=()=>{let e=oe.at(-1);e!==void 0&&(se(e=>e.slice(0,-1)),N(e=>[S,...e]),C(e))},ze=()=>{let e=ce[0];e!==void 0&&(N(e=>e.slice(1)),se(e=>[...e,S]),C(e))};(0,L.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Re();break;case`forward`:ze()}})});let Be=w?.path??S,B=w?.parent??(S?b(S):null);(0,L.useEffect)(()=>{l.available&&Be&&l.send({type:`fs.watch`,payload:{paths:[Be],owner:`picker`}})},[Be]),(0,L.useEffect)(()=>{if(l.available&&Be)return l.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&E(t.data.path)===E(Be)&&Te(Be,!1).then(e=>{T(e);let t=new Set(e.entries.map(e=>e.fullPath));k(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Be]);let Ve=(w?.entries??[]).filter(e=>e.isDirectory||v&&(de||y.length===0||y.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Ue=w?{...w,entries:Ve}:null,We=I.open&&I.query.length>0,Ge=(0,L.useMemo)(()=>We?Ve.filter(e=>On(e.name,I)).map(e=>e.fullPath):[],[We,Ve,I]);(0,L.useEffect)(()=>{R(0)},[I.query,I.matchCase,I.regex,w?.path]);let Ke=Ge.length===0?-1:Math.min(be,Ge.length-1),qe=(0,L.useMemo)(()=>({...I,currentPath:Ke>=0?Ge[Ke]:null}),[I,Ke,Ge]),Je=Me?.defaultView??Se,Ye=s??{mode:Je.mode,iconSize:Je.iconSize,gridSize:Je.gridSize,sort:`name`,sortDescending:!1,columns:Je.columns??[`type`,`size`,`modified`]},Xe=(c??Je.showImages)&&Ye.mode===`list`,Qe=P.trim(),$e=Qe.length>0?ax(Qe)?Qe:ix(Be,Qe):null,et=()=>{if(ee||te)return;if(u){let e=Qe;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){ja(g(`the_file_name_is_not_valid`));return}let t=f.length>0&&!/\.[^.]*$/.test(e)?f.startsWith(`.`)?f:`.${f}`:``,n=ax(e)?e+t:ix(Be,e+t);H([n]).then(e=>e[0]?.exists?ue(n):h([n]),()=>h([n]));return}let e=n?[...ne]:[...ne].slice(0,1);e.length>0?h(e):$e!==null&&Qe!==x(Be)?h([$e]):!v&&Be&&h([Be])},tt=(0,L.useCallback)(e=>{k(new Set(e)),e.length===1?F(x(e[0])):u||F(e.length===0&&!v?x(Be):``)},[Be,v,u]),nt=e=>{w?.entries.find(t=>t.fullPath===e)?.isDirectory?Le(e):u?F(x(e)):v&&h([e])},rt=e=>F(e),it=async e=>{let t=Ee;if(De(null),!t||!Be)return;let n=e===null?await Tt(Be):await kt(Be,e);n.ok&&n.path!==null&&(_e(e=>({...e,open:!1,query:``})),e!==null&&fe(!0),ge(e=>e+1),window.setTimeout(()=>{ke(n.path),je(e=>e+1)},120))},at=()=>{_e(e=>({...e,open:!0})),ye(e=>e+1)},ot=e=>{R(t=>Ge.length===0?0:(t+e+Ge.length)%Ge.length)},st=e=>(0,q.jsxs)(hx,{children:[(0,q.jsxs)(gx,{children:[(0,q.jsx)(_x,{children:g(v||u?`file_name`:`folder_3`)}),(0,q.jsx)(vx,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),et())},spellCheck:!1,value:P}),v&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(_x,{children:g(`files_of_type`)}),(0,q.jsx)(So,{onChange:e=>fe(e===`all`),options:[...y.length>0?[{value:`supported`,label:`${g(`supported_files`)} (${y.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${g(`all_files`)} (*.*)`}],value:de?`all`:`supported`})]})]}),(0,q.jsxs)(yx,{children:[(0,q.jsx)(bx,{onClick:m,type:`button`,children:g(`cancel`)}),(0,q.jsxs)(bx,{$primary:!0,disabled:ee||te!==null||(u||v&&ne.size===0)&&Qe.length===0,onClick:et,type:`button`,children:[(0,q.jsx)(ki,{size:12}),g(u?`save_as`:v?`select_this_file`:`select_this_folder`)]})]}),(0,q.jsx)(Jo,{confirmLabel:g(`overwrite`),message:g(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>ue(null),onConfirm:()=>{let e=le;ue(null),e&&h([e])},open:le!==null,title:g(`overwrite`)})]}),ct=(0,q.jsxs)(sx,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,q.jsxs)(cx,{children:[(0,q.jsxs)(lx,{children:[(0,q.jsx)(fi,{size:16}),g(u?`save_as`:v?`choose_a_file`:`choose_a_folder`)]}),(0,q.jsx)(ux,{onClick:m,title:g(`cancel`),type:`button`,children:(0,q.jsx)(Ai,{size:12})})]}),(0,q.jsxs)(dx,{children:[(0,q.jsx)(G_,{activeKind:pe===`overview`?`home`:pe===`gallery`?`gallery`:`files`,currentPath:Be,drives:re,hiddenViews:v?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:A.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Le(e),onOpenView:e=>{e===`home`?(k(new Set),F(v?``:x(Be)),me(`overview`)):e===`gallery`&&v&&(k(new Set),F(``),me(`gallery`))},places:A,recent:ie,recentLimit:10}),(0,q.jsx)(fx,{children:pe===`overview`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Mp,{drives:re,theme:p,historyVersion:0,homePath:A.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Le(e),onPick:v?e=>h([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:tt,places:A,readOnly:!0,recent:ie,recentLimit:10,visibilityVersion:0}),st(F)]}):pe===`gallery`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(j_,{onPick:e=>h([e]),onSelectionChange:tt,showCheckboxes:Me?.showCheckboxes??!0,view:{...xe,columns:[]}}),st(F)]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(px,{children:[(0,q.jsx)(mx,{disabled:oe.length===0,onClick:Re,title:g(`back`),type:`button`,children:(0,q.jsx)(yi,{})}),(0,q.jsx)(mx,{disabled:ce.length===0,onClick:ze,title:g(`forward`),type:`button`,children:(0,q.jsx)(bi,{})}),(0,q.jsx)(mx,{disabled:!B,onClick:()=>B&&Le(B),title:g(`up_one_level`),type:`button`,children:(0,q.jsx)(gi,{})}),(0,q.jsx)(Hp,{onNavigate:Le,path:Be}),(0,q.jsx)(mx,{onClick:e=>De({x:e.clientX,y:e.clientY}),title:g(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(vi,{})}),(0,q.jsx)(mx,{onClick:at,title:g(`search`),type:`button`,children:(0,q.jsx)(hi,{})}),_.available&&(0,q.jsx)(mx,{onClick:e=>_.open(e.clientX,e.clientY),title:g(`selection_menu`),type:`button`,children:(0,q.jsx)(Sa,{})})]}),I.open&&(0,q.jsx)(Yd,{current:Ke,focusToken:ve,matchCase:I.matchCase,mode:I.mode,onClose:()=>{_e(e=>({...e,open:!1,query:``})),R(0)},onMatchCase:()=>_e(e=>({...e,matchCase:!e.matchCase})),onMode:()=>_e(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>ot(1),onPrevious:()=>ot(-1),onQuery:e=>_e(t=>({...t,query:e})),onRegex:()=>_e(e=>({...e,regex:!e.regex})),query:I.query,regex:I.regex,total:Ge.length,onSelectMatches:()=>we(e=>e+1)}),(0,q.jsx)(yl,{allowBackgroundMenu:!0,confirmDelete:Me?.confirmDelete??!1,enableShortcuts:!0,error:te,find:qe,selectMatchesToken:Ce,imageStripHeight:z,loading:ee,listing:Ue,onImageStripHeight:Ie,onOpen:nt,onOpenFile:nt,onRefresh:()=>ge(e=>e+1),onSelectionChange:tt,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:Me?.openOnSingleClick??!1,refreshToken:he,pendingRename:Oe,pendingRenameToken:Ae,showCheckboxes:Me?.showCheckboxes??!0,showDetails:!1,showImages:Xe,singleSelect:!n,view:Ye}),st(rt)]})})]}),Ee&&(0,q.jsx)(yo,{creationOnly:!0,directory:Be,menu:{x:Ee.x,y:Ee.y,paths:[],background:!0},onClose:()=>De(null),onCreateFile:v?e=>void it(e):void 0,onCreateFolder:()=>void it(null),shortcuts:Ut})]});return i?ct:(0,Ua.createPortal)((0,q.jsx)(ox,{onPointerDown:e=>{e.target===e.currentTarget&&m()},children:ct}),document.body)}function ix(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function ax(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var ox=v.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${io}
`,sx=v.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Wa}
    ${({$inline:e})=>e?``:$a}
`,cx=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,lx=v.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,ux=v.button`
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
`,dx=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,fx=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,px=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,mx=v.button`
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
`,hx=v.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,gx=v.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,_x=v.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,vx=v.input`
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
`,yx=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,bx=v.button`
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
`;function xx({mode:e,save:t=!1,multiple:n,extensions:i,initial:a,initialName:s=``,defaultExtension:c=``}){let d=o(),p=u(),[m,h]=(0,L.useState)(null),_=f(g(m?.themeMode)),[v,y]=(0,L.useState)({}),[b,x]=(0,L.useState)(null),[S,C]=(0,L.useState)(null),[w,T]=(0,L.useState)(null),E=(0,L.useRef)(0);(0,L.useEffect)(()=>{l.send({type:`app.ready`})},[]),(0,L.useEffect)(()=>(be(e=>new Promise(t=>{T({id:++E.current,prompt:e,resolve:t})})),()=>be(null)),[]),(0,L.useEffect)(()=>{Ze().then(h,()=>void 0)},[]),(0,L.useEffect)(()=>{r(m?.accentColor,m?.secondaryColor,_)},[m?.accentColor,m?.secondaryColor,_]);let ee=m?.defaultView??Se,D={mode:v.mode??ee.mode,iconSize:v.iconSize??ee.iconSize,gridSize:v.gridSize??ee.gridSize,sort:`name`,sortDescending:!1,columns:b??ee.columns??[`type`,`size`,`modified`]},te=e=>y(t=>({...t,...e}));return(0,q.jsxs)(Sx,{children:[(0,q.jsxs)(Cx,{children:[(0,q.jsx)(wx,{children:(0,q.jsx)(Ni,{size:17})}),(0,q.jsx)(Tx,{...p,children:d(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,q.jsx)(yy,{onChange:te,onColumns:x,onShowImages:C,showImages:S??ee.showImages,view:D}),(0,q.jsx)(Ex,{children:(0,q.jsx)(Dx,{onClick:()=>l.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:d(`cancel`),type:`button`,children:(0,q.jsx)(Ai,{size:12})})})]}),(0,q.jsx)(Ox,{children:(0,q.jsx)(rx,{extensions:i,initial:a,initialName:s,defaultExtension:c,inline:!0,mode:e,multiple:n,onCancel:()=>l.send({type:`pick.cancel`}),onSelect:e=>l.send({type:`pick.submit`,payload:{paths:e}}),save:t,showImages:S??ee.showImages,fileView:D,theme:_})}),w&&(0,q.jsx)(md,{action:w.prompt.action,delaySeconds:w.prompt.delaySeconds,hits:w.prompt.hits,onCancel:()=>{w.resolve(!1),T(null)},onConfirm:()=>{w.resolve(!0),T(null)},permanent:w.prompt.permanent},w.id),(0,q.jsx)(Md,{}),(0,q.jsx)(O,{})]})}var Sx=v.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Cx=v.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,wx=v.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Tx=v.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ex=v.div`
    display: flex;
    flex-shrink: 0;
`,Dx=v.button`
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
`,Ox=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;document.documentElement.dataset.theme=i()?`dark`:`light`;var kx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,kx),window.addEventListener(`pagehide`,Kn);var Ax=document.getElementById(`root`),jx=new URLSearchParams(window.location.search),Mx=jx.get(`picker`),Nx=jx.get(`filter`)??``;Ax&&(Hn(),(0,ve.createRoot)(Ax).render((0,q.jsx)(L.StrictMode,{children:(0,q.jsx)(d,{children:Mx===`folder`||Mx===`file`||Mx===`save`?(0,q.jsx)(xx,{defaultExtension:jx.get(`ext`)??``,extensions:Nx?Nx.split(`;`).filter(Boolean):[],initial:jx.get(`initial`)??``,initialName:jx.get(`name`)??``,mode:Mx===`folder`?`folder`:`file`,multiple:jx.get(`multiple`)===`1`,save:Mx===`save`}):(0,q.jsx)(Fb,{})})})));