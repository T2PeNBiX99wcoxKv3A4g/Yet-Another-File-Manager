import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{A as t,B as n,C as r,D as i,E as a,F as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,R as m,S as h,T as g,U as _,V as v,W as y,_ as b,a as x,b as S,c as C,d as w,f as T,g as E,h as ee,i as D,j as O,k,l as A,m as j,n as M,o as te,p as ne,r as N,s as re,u as ie,v as ae,w as P,x as oe,y as F}from"./format-CiOmuWrf.js";async function se(){return l.available?await l.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function I(e){l.available?await l.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function L(){l.available&&await R(`update.openLogs`)}async function ce(e){l.available?await R(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function le(){return l.available?await l.request(`update.status`)??null:null}async function ue(){return l.available?await l.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function de(){return l.available?await l.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function fe(){await R(`update.cancel`)}async function pe(){return l.available?await l.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function me(e){return l.on(t=>{t.type===`update.progress`&&e(t.data)})}function he(e){return l.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function R(e,t,n=3e4){let r=await l.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var z=e(y(),1),ge=s(),B=null;function _e(e){B=e}function ve(e){return B?B(e):Promise.resolve(!1)}var ye={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},be={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function xe(e,t){return l.available?await l.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Se(e){return l.available?(await l.request(`fs.open`,{path:e})).ok:!1}async function Ce(e,t=!0,n=!1,r=0,i){return await l.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function we(e,t,n=0,r){let i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await ve({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function Te(e,t=0,n){return await l.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Ee(e){l.available&&e.length!==0&&await l.request(`fs.archive.release`,{paths:e})}async function De(e){return l.available?await l.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Oe(e,t){return l.available?(await l.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function ke(e,t,n,r){return l.available?(await l.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function Ae(e,t=!1){return l.available?await l.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function je(){return(await l.request(`fs.places`)).places}async function Me(){return(await l.request(`fs.drives`)).drives}async function Ne(e=!1){return(await l.request(`fs.recycle`,{includeOrphans:e})).entries}async function V(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await ve({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await l.request(e,{...t,confirm:r.token})}return r}async function Pe(e=!1){let t=await l.request(`fs.recycle.empty`,{includeOrphans:e});await V(`fs.recycle.empty`,{includeOrphans:e},t)}async function Fe(e){return!l.available||e.length===0?{ok:!1,done:0}:await l.request(`fs.recycle.restoreMany`,{ids:e})}async function Ie(e){if(!l.available||e.length===0)return{ok:!1,done:0};let t=await l.request(`fs.recycle.deleteMany`,{ids:e}),n=await V(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Le(e){l.available&&e&&await l.request(`fs.recycle.properties`,{id:e})}async function Re(){if(!l.available)return{entries:[],cancelled:!0,failed:!1};let e=await l.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function H(){return l.available?(await l.request(`fs.recycle.admin.purge`)).ok:!1}async function ze(e=0,t=150,n=!1){return l.available?await l.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Be(){return l.available?(await l.request(`fs.recent`)).entries:[]}async function Ve(){return l.available?(await l.request(`fs.frequent`)).entries:[]}async function He(e){l.available&&await l.request(`fs.frequent.record`,{path:e})}async function Ue(){await l.request(`fs.recent.clear`)}async function We(){await l.request(`fs.frequent.clear`)}async function Ge(){return await l.request(`fs.visibility`)}async function Ke(){return await l.request(`fs.hidden.toggle`)}async function qe(e){return await l.request(`fs.hidden.set`,{show:e})}async function Je(){return l.available?await l.request(`fs.index.tasks`):{count:0,directories:[]}}var Ye={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showHidden:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,themeMode:`system`,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[],conflictNameStyle:`space_parentheses`,shareAccessEnabled:!0,shareApprovalMinutes:60,shareDenialSeconds:10};async function Xe(){if(!l.available)return Ye;let e=await l.request(`settings.get`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showHidden:e?.showHidden??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,themeMode:g(e?.themeMode),backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[],conflictNameStyle:e?.conflictNameStyle??`space_parentheses`,shareAccessEnabled:e?.shareAccessEnabled??!0,shareApprovalMinutes:e?.shareApprovalMinutes??60,shareDenialSeconds:e?.shareDenialSeconds??10}}async function Ze(){return l.available?(await l.request(`app.protection.defaults`)).paths??[]:[]}var Qe={registered:!1,pathMatches:!1,registeredPath:null},$e={registered:!1,pathMatches:!1,registeredPath:null};async function et(){return l.available?await l.request(`app.defaultManager.status`):$e}async function tt(e){return l.available?await l.request(`app.defaultManager.set`,{enabled:e}):$e}async function nt(){return l.available?await l.request(`app.archive.status`):Qe}async function rt(){return l.available?await l.request(`app.archive.register`):Qe}async function it(){return l.available?await l.request(`app.archive.unregister`):Qe}async function at(e){if(!l.available)return e;let t=await l.request(`settings.save`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showHidden:t?.showHidden??e.showHidden,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,themeMode:g(t?.themeMode??e.themeMode),backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites,conflictNameStyle:t?.conflictNameStyle??e.conflictNameStyle,shareAccessEnabled:t?.shareAccessEnabled??e.shareAccessEnabled,shareApprovalMinutes:t?.shareApprovalMinutes??e.shareApprovalMinutes,shareDenialSeconds:t?.shareDenialSeconds??e.shareDenialSeconds}}async function ot(e,t){l.available&&await l.request(`app.tabs.set`,{tabs:e,active:t})}async function st(e,t,n){return l.available?(await l.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var ct={managed:0,private:0,workingSet:0,available:0};async function lt(){return l.available?await l.request(`app.memory`):ct}async function ut(){return l.available?await l.request(`app.memory.trim`):ct}var dt={registered:!1,pathMatches:!1,registeredPath:null};async function ft(){return l.available?await l.request(`app.scheme`):dt}async function pt(e){return l.available?await l.request(`app.scheme.set`,{enabled:e}):dt}var U={supported:!1,mode:`none`,active:!1,error:null};async function mt(){return l.available?await l.request(`app.startup`):U}async function ht(e){return l.available?await l.request(`app.startup.set`,{mode:e}):U}async function gt(e,t=!1){return!l.available||e.length===0?!1:(await l.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function _t(){return l.available?(await l.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function vt(){return l.available?await l.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function yt(e,t,n){return!l.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await bt({action:n?`move`:`write`},r=>l.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:r}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function bt(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await ve({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function xt(e){return!l.available||e.length===0?[]:(await l.request(`fs.paths.info`,{paths:e})).entries}async function St(e,t=!1){return l.available?await bt({action:t?`move`:`write`},t=>l.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function Ct(e,t=!1){if(!l.available||e.length===0)return{ok:!1,error:null};let n=await l.request(`fs.operation.delete`,{paths:e,permanent:t}),r=!1;for(let i=0;i<2&&n.required&&n.token&&n.protected?.length;i++){if(!await ve({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){r=!0;break}n=await l.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return r?{...n,ok:!1,cancelled:!0}:n}async function wt(e,t){return l.available?await bt({action:`rename`},n=>l.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Tt(e,t=!1){return l.available?await l.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Et(e){return l.available?(await l.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Dt(e,t){return l.available?await l.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Ot(e,t,n){return l.available?await l.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function kt(e,t){return l.available?await l.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function At(e){l.available&&e.length!==0&&await l.request(`fs.operation.properties`,{paths:e})}async function jt(e){return!l.available||e.length===0?{ok:!1,error:null}:await l.request(`fs.share`,{paths:e})}async function Mt(e){l.available&&await l.request(`fs.operation.openWith`,{path:e})}async function Nt(e){l.available&&await l.request(`fs.operation.terminal`,{path:e})}async function Pt(e){return l.available?await l.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Ft(e,t){return l.available?(await l.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function It(){return l.available?await l.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Lt(){return l.available?await l.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Rt(e){l.available&&await l.request(`fs.operation.showInExplorer`,{path:e})}async function zt(e){return!l.available||e.length===0?{verbs:[],safe:!0}:await l.request(`shell.verbs`,{paths:e})}async function Bt(e,t,n,r){l.available&&e.length!==0&&await l.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Vt(e,t){return!l.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await l.request(`fs.operation.compress`,{...t,paths:e})}async function Ht(){return l.available?(await l.request(`app.tasks`)).tasks:[]}async function Ut(){l.available&&await l.request(`app.tasks.clear`)}var Wt={goBack:[`alt+arrowleft`],goForward:[`alt+arrowright`],goUp:[`alt+arrowup`],find:[`ctrl+f`],closeTab:[`ctrl+w`],newTab:[`ctrl+t`],reopenTab:[`ctrl+shift+t`],copy:[`ctrl+c`],cut:[`ctrl+x`],paste:[`ctrl+v`],duplicate:[`ctrl+d`],undo:[`ctrl+z`],redo:[`ctrl+shift+z`],delete:[`delete`],deletePermanently:[`shift+delete`],rename:[`f2`],selectAll:[`ctrl+a`],invertSelection:[`ctrl+shift+a`],open:[`enter`],newFolder:[`ctrl+shift+n`],properties:[`alt+enter`],home:[`alt+home`],location:[`ctrl+l`],iconsView:[`ctrl+1`],detailsView:[`ctrl+2`],nextTab:[`ctrl+tab`],previousTab:[`ctrl+shift+tab`],terminal:[`f4`],hidden:[`ctrl+h`,`alt+.`],splitView:[`f3`],openInNewTab:[`ctrl`]};function Gt(e){return(e??``).split(`|`).map(e=>e.trim()).filter(Boolean)}function Kt(e){return e.join(`|`)}function qt(e){let t={};for(let[n,r]of Object.entries(e))t[n]=Kt(r);return t}function Jt(e){let t={...Wt};for(let[n,r]of Object.entries(e??{}))n in t&&(t[n]=Gt(r));return t}function Yt(e,t,n){return e[t]?.includes(n)??!1}function Xt(e,t){return e[t]?.[0]??``}var Zt=Xt(Wt,`openInNewTab`);function Qt(e){Zt=e.trim()}function $t(e){let t=Zt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function en(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function tn(e){return e.split(`+`).filter(Boolean).map(e=>rn[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}function nn(e){return(e??[]).filter(Boolean).map(tn).join(` / `)}var rn={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function an(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var on=new Map;function sn(e){return E(T(e)?D(e):e)}function cn(e){return on.get(sn(e))}function ln(e,t){on.set(sn(e),t)}function un(e){on.delete(sn(e))}function dn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var fn=new Map,pn=new Map,mn=new Set,hn=0;function gn(){fn.clear(),pn.clear(),hn+=1,mn.forEach(e=>e())}function _n(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...fn.keys()])e.toLowerCase().includes(t)&&(fn.delete(e),n=!0);n&&(hn+=1,mn.forEach(e=>e()))}function vn(){let[e,t]=(0,z.useState)(hn);return(0,z.useEffect)(()=>{let e=()=>t(hn);return mn.add(e),()=>{mn.delete(e)}},[]),e}var yn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function bn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return yn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function W(e,t,n=!1){let r=vn(),i=e===null?``:bn(e,t,n),[a,o]=(0,z.useState)(()=>fn.get(i)??null);return(0,z.useEffect)(()=>{if(e===null){o(null);return}if(!l.available)return;if(fn.has(i)){o(fn.get(i)??null);return}let r=!0;return l.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?fn.set(i,e.dataUrl):fn.delete(i),r&&o(e.dataUrl)},()=>{fn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function xn(e){let[t,n]=(0,z.useState)(e);return(0,z.useEffect)(()=>{if(!e){n(null);return}if(!T(e)){n(e);return}let t=!0;return Te(e,0,cn(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function G(e){let t=vn(),[n,r]=(0,z.useState)(()=>e?pn.get(e)??null:null);return(0,z.useEffect)(()=>{if(!e||!l.available){r(null);return}if(pn.has(e)){r(pn.get(e)??null);return}let t=!0;return l.request(`fs.iconFile`,{path:e}).then(n=>{pn.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{pn.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var K=null,Sn=null;function Cn(){return K===null?l.available?(Sn??=l.request(`app.thumbnails`).then(e=>(K=e.base??``,K),()=>(K=``,``)),Sn):Promise.resolve(``):Promise.resolve(K)}function wn(e,t=128,n=0){let[r,i]=(0,z.useState)(K);return(0,z.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Cn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${Tn}`}var Tn=2;function En(e,t=0,n=``){let[r,i]=(0,z.useState)(K);if((0,z.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return Cn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function Dn(e,t=0){let[n,r]=(0,z.useState)(K);return(0,z.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return Cn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var On={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},kn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function An(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Nn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=In(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var jn=`\0`,Mn=``;function Nn(e){return e.query!==jn&&(jn=e.query,Mn=e.query.toLowerCase()),Mn}var Pn=`\0`,Fn=null;function In(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Pn)return Fn;Pn=t;try{Fn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Fn=null}return Fn}function Ln(e,t){return An(e,t)!==null}var Rn=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],zn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Bn(e){let t=Hn(e);for(let{kind:e}of Rn)if(zn[e].has(t))return e;return null}function Vn(e){return Bn(e)!==null}function Hn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Un=(0,z.createContext)({places:{},useIcons:!1}),Wn=Un.Provider;function Gn(){return(0,z.useContext)(Un)}function Kn(e,t){return e.places[E(t)]}function qn(e,t,n){return Kn(e,t)?.name||n}var Jn=new Map,Yn=new Map,Xn=0;function Zn(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&Jn.set(e,t)}catch{}}function Qn(e){return l.available?Jn.get(e)??null:localStorage.getItem(e)}function $n(e,t){l.available?(Jn.set(e,t),Yn.set(e,t),window.clearTimeout(Xn),Xn=window.setTimeout(er,200)):localStorage.setItem(e,t)}function er(){if(Xn=0,Yn.size===0)return;let e=Object.fromEntries(Yn);Yn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function tr(){if(Yn.size===0)return;let e=Object.fromEntries(Yn);Yn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function nr(e,t){let n=Qn(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function rr(e,t){$n(e,String(t))}function ir(e){try{return JSON.parse(Qn(e)??`null`)}catch{return null}}function ar(e,t){$n(e,JSON.stringify(t))}var q=c(),or=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,q.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,q.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),sr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),cr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M14 3v4h4`})]}),lr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,q.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),ur=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,q.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),dr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 19V5`}),(0,q.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),fr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,q.jsx)(`path`,{d:`M20 4v7h-7`})]}),pr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 5v14`}),(0,q.jsx)(`path`,{d:`M5 12h14`})]}),mr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 12H5`}),(0,q.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),hr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M5 12h14`}),(0,q.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),gr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,q.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),_r=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,q.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),vr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,q.jsx)(`path`,{d:`M12 12v8`})]}),yr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,q.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),br=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),xr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),Sr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),Cr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 7h16`}),(0,q.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,q.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,q.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),wr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),Tr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),Er=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,q.jsxs)(`defs`,{children:[(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,q.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,q.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),Dr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),Or=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,q.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,q.jsx)(`path`,{d:`m13 5-2 14`})]}),kr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Ar=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),jr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Mr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Nr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Pr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Fr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,q.jsx)(`path`,{d:`M8.5 14h7`})]}),Ir=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,q.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,q.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Lr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Rr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),zr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Br=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Vr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Hr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,q.jsx)(`path`,{d:`m14 6 4 4`})]}),Ur=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,q.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Wr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,q.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Gr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 4v10`}),(0,q.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,q.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Kr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),qr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Jr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Yr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Xr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,q.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Zr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,q.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Qr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),$r=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,q.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,q.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,q.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),ei=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,q.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),ti=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,q.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),ni=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),ri=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,q.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),ii=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M3.5 12h17`}),(0,q.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),ai=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),oi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,q.jsx)(`path`,{d:`M8.5 10.5h7`})]}),si=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,q.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,q.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),ci=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),li=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,q.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,q.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),ui=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),di=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 16V4`}),(0,q.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,q.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),fi=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),pi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M12 4v16`})]}),mi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M15 4v16`})]}),hi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,q.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,q.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,q.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),gi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,q.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,q.jsx)(`path`,{d:`M12 14v2`})]}),_i=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,q.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),vi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,q.jsx)(`circle`,{cx:12,cy:12,r:3})]}),yi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,q.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,q.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,q.jsx)(`path`,{d:`m3 3 18 18`})]}),bi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.83-.44-1.12-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h1.99c3.05 0 5.56-2.5 5.56-5.55C21.97 6.01 17.46 2 12 2z`}),(0,q.jsx)(`path`,{d:`M13.5 6.5h.01M17.5 10.5h.01M8.5 7.5h.01M6.5 12.5h.01`})]}),xi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M20.5 13.3 11.2 4H4v7.2l9.3 9.3a1.4 1.4 0 0 0 2 0l5.2-5.2a1.4 1.4 0 0 0 0-2z`}),(0,q.jsx)(`path`,{d:`M8.2 8.2h.01`})]}),Si=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:2.5,y:5.5,width:19,height:13,rx:2.2}),(0,q.jsx)(`path`,{d:`M6.5 9.5h.01M10 9.5h.01M13.5 9.5h.01M17 9.5h.01M6.5 13h.01M17 13h.01M9 13.5h6`})]}),Ci=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:3.5,width:17,height:17,rx:4.5}),(0,q.jsx)(`path`,{d:`m12 7.2 1.5 3.3 3.3 1.5-3.3 1.5-1.5 3.3-1.5-3.3L7.2 12l3.3-1.5z`})]}),wi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 7h16`}),(0,q.jsx)(`path`,{d:`M9.5 7V5.2c0-.7.5-1.2 1.2-1.2h2.6c.7 0 1.2.5 1.2 1.2V7`}),(0,q.jsx)(`path`,{d:`m6.6 7 .9 12a1.6 1.6 0 0 0 1.6 1.5h5.8a1.6 1.6 0 0 0 1.6-1.5l.9-12`}),(0,q.jsx)(`path`,{d:`m10.2 11.2 3.6 3.6M13.8 11.2l-3.6 3.6`})]}),Ti=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M8.5 20.5H20.5`}),(0,q.jsx)(`path`,{d:`m14.2 4.1 5.7 5.7a1.5 1.5 0 0 1 0 2.1l-6.3 6.3a1.5 1.5 0 0 1-2.1 0l-5.7-5.7a1.5 1.5 0 0 1 0-2.1l6.3-6.3a1.5 1.5 0 0 1 2.1 0z`}),(0,q.jsx)(`path`,{d:`m9.9 7.8 6.6 6.6`})]});function J(e,t){return({size:n=t,...r})=>(0,q.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var Ei=J(or,18),Di=J(sr,18),Oi=J(cr,18),ki=J(lr,18),Ai=J(ur,16),ji=J(dr,16),Mi=J(fr,16),Ni=J(pr,16),Pi=J(mr,16),Fi=J(hr,16),Ii=J(gr,12),Li=J(_r,18),Ri=J(vr,14),zi=J(yr,14),Bi=J(br,14),Vi=J(xr,18),Hi=J(Sr,18),Ui=J(Cr,18),Wi=J(wr,14),Gi=J(Tr,14),Ki=J(vi,14),qi=J(yi,14),Ji=J(Er,18),Yi=J(Dr,18),Xi=J(Or,18),Zi=J(kr,18),Qi=J(Ar,18),$i=J(jr,18),ea=J(Mr,18),ta=J(Nr,18),na=J(Pr,18),ra=J(Fr,18),ia=J(Ir,18),aa=J(Lr,18),oa=J(Rr,18),sa=J(zr,18),ca=J(Br,18),la=J(Vr,18),ua=J(Hr,16),da=J(Ur,18),fa=J(Wr,18),pa=J(Gr,18),ma=J(Kr,18),ha=J(qr,18),ga=J(Jr,18),_a=J(Yr,18),va=J(Xr,18),ya=J(Zr,18),ba=J(Qr,18),xa=J($r,18),Sa=J(ei,18),Ca=J(ti,18),wa=J(ni,18),Ta=J(ri,18),Ea=J(ii,18),Da=J(ai,18),Oa=J(oi,14),ka=J(si,14),Aa=J(ci,16),ja=J(li,16),Ma=J(ui,16),Na=J(di,16),Pa=J(fi,16),Fa=J(pi,16),Ia=J(mi,16),La=J(hi,16),Ra=J(gi,14),za=J(bi,18),Ba=J(xi,18),Va=J(Si,18),Ha=J(Ci,18),Ua=J(wi,18),Wa=J(Ti,18),Ga=J(_i,14);async function Ka(e,t,n){return l.available?(await l.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function qa(e){return Ka(`folder`,[],e??``)}function Ja(e){return Ka(`file`,e??[],``)}var Ya=null,Xa=null;function Za(e){Ya=e}function Qa(e){return Ya?Ya(e):Promise.resolve()}function $a(e){Xa=e}function eo(e,t=!1){return Xa?Xa(e,t):Promise.resolve(null)}var to=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],no=null,ro=0,io=new Set;function ao(){ro+=1;for(let e of io)e()}function oo(e){return io.add(e),()=>io.delete(e)}function so(){return ro}function co(e){no=e,ao()}function lo(){return(0,z.useSyncExternalStore)(oo,so,so),no}var uo=_(),fo=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,po=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,mo=m`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ho=m`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,go=m`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,_o=m`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,vo=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,yo=m`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,bo=m`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,xo=n`animation: ${po} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,So=n`animation: ${mo} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,Co=n`animation: ${ho} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${go} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var wo=n`animation: ${_o} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,To=n`animation: ${vo} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,Eo=n`animation: ${yo} 140ms ease-out;`,Do=n`animation: ${bo} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function Oo({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,z.useState)([]),s=(0,z.useRef)(void 0);if((0,z.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,z.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,q.jsx)(Ro,{},`group-rule-${i}`)),n.push((0,q.jsx)(Lo,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,q.jsx)(Ro,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,q.jsxs)(Po,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,q.jsx)(Fo,{children:e.loading?(0,q.jsx)(zo,{}):e.icon}),(0,q.jsx)(Io,{children:e.label}),a?(0,q.jsx)(Ii,{size:12}):e.checked&&(0,q.jsx)(Wi,{size:12})]},`${e.label}-${i}`))}),n};return(0,uo.createPortal)((0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(ko,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ao,{children:r.map((e,t)=>(0,q.jsxs)(jo,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,q.jsx)(Mo,{children:e.icon}),(0,q.jsx)(No,{children:e.label})]},`${e.label}-${t}`))}),(0,q.jsx)(Ro,{})]}),m(n,0)]}),a.map((e,t)=>(0,q.jsx)(ko,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var ko=v.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${fo}
    ${So}
    transform-origin: top left;
`,Ao=v.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,jo=v.button`
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
`,Mo=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,No=v.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Po=v.button`
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
`,Fo=v.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Io=v.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lo=v.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Ro=v.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,zo=v.span`
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
`;function Bo({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:s,onOpenFile:c,onRename:l,onDelete:u,onCopy:d,onPaste:f,onCreateFolder:p,onCreateFile:m,creationOnly:h=!1,onRefresh:g,onAddToTray:_,onAddFavorite:v,onRemoveFavorite:y,favoritePaths:b,onExtractArchive:S,allowCompression:C=!1,platform:w,onCompressTo:ee,onArchiveCreated:D}){let O=o(),k=lo(),A=T(t),[j,M]=(0,z.useState)({verbs:[],safe:!0,loading:!1}),[te,N]=(0,z.useState)({recommended:[],other:[],loading:!1}),[re,ie]=(0,z.useState)(null),ae=(0,z.useRef)(0),P=(0,z.useRef)(0),oe=e?.paths.length===1,F=e?.background?t?[t]:[]:e?.paths??[],se=e?.background?t||null:oe&&n?.isDirectory?n.path:null;if((0,z.useEffect)(()=>{if(!e){M({verbs:[],safe:!0,loading:!1}),N({recommended:[],other:[],loading:!1});return}let t=++ae.current;M({verbs:[],safe:!0,loading:F.length>0&&!A}),F.length>0&&!A&&zt(F).then(e=>{ae.current===t&&M({...e,loading:!1})},()=>{ae.current===t&&M({verbs:[],safe:!0,loading:!1})});let r=++P.current;!A&&oe&&n?(N({recommended:[],other:[],loading:!0}),Pt(n.path).then(e=>{P.current===r&&N({...e,loading:!1})},()=>{P.current===r&&N({recommended:[],other:[],loading:!1})})):N({recommended:[],other:[],loading:!1})},[e,oe,n?.path,n?.isDirectory,F.length,A]),(0,z.useEffect)(()=>{if(!e||A||!se){ie(null);return}let t=!0;return Et(se).then(e=>{t&&ie(e)},()=>{t&&ie(null)}),()=>{t=!1}},[e,se,A]),!e)return null;let I=[],L=[],ce=new Set((b??[]).map(E)),le=e.background?t?[t]:[]:e.paths,ue=le.length>0&&le.every(e=>ce.has(E(e))),de=()=>n?fe(n.path,n.isDirectory):`Archive`,fe=(e,t)=>{let n=x(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},pe=async(e,n=de())=>{let r=await Vt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?D?.(r.path,!0):Qa(r.error??O(`could_not_create_the_archive`))},me=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},he=async()=>{if(!se||re===null)return;let e=await Dt(se,!re);e.ok?(ie(e.enabled),g?.()):Qa(e.error??O(`could_not_change_the_case_sensitivity`))},R=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Ot(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Ot(e,t,`${a}\\${Ho(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?g?.():Qa(o.error??O(`could_not_create_the_link`))},ge=async e=>{if(!n)return;let r=await qa(t);r&&await R(e,n.path,r,x(n.path),e.endsWith(`-copy`))},B=async e=>{let n=k?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=E(a)===E(t);await R(n,r.path,t,x(r.path),i&&!o)}},_e=async()=>{let t=(await xt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&co({paths:t})},ve=()=>{let e=k?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:O(`cancel_selected_link`),icon:(0,q.jsx)(Gi,{size:14}),onSelect:()=>co(null)},...t?[{label:O(`hard_link`),icon:(0,q.jsx)(Oi,{size:14}),separatorBefore:!0,onSelect:()=>void B(`hard`)}]:[],{label:O(`symbolic_link`),icon:(0,q.jsx)(Oi,{size:14}),separatorBefore:!t,onSelect:()=>void B(`symbolic-file`)},...n?[{label:O(`directory_junction`),icon:(0,q.jsx)(Di,{size:14}),onSelect:()=>void B(`junction`)},{label:O(`smart_copy`),icon:(0,q.jsx)(Aa,{size:14}),separatorBefore:!0,onSelect:()=>void B(`smart-copy`)},{label:O(`smart_mirror`),icon:(0,q.jsx)(Aa,{size:14}),onSelect:()=>void B(`smart-mirror`)},{label:O(`multi_version_smart_copy`),icon:(0,q.jsx)(Aa,{size:14}),onSelect:()=>void B(`multi-version-smart-copy`)},{label:O(`hardlink_copy`),icon:(0,q.jsx)(Aa,{size:14}),separatorBefore:!0,onSelect:()=>void B(`hard-copy`)},{label:O(`symbolic_link_copy`),icon:(0,q.jsx)(Aa,{size:14}),onSelect:()=>void B(`symbolic-copy`)}]:[]]};if(e.background){if(p&&L.push({label:O(`new_folder`),icon:(0,q.jsx)(Ni,{size:16}),shortcut:nn(r.newFolder),onSelect:p}),m||p){let e=[];p&&(e.push({label:O(`folder`),icon:(0,q.jsx)(Di,{size:14}),onSelect:()=>p(!1)}),A||e.push({label:O(`case_sensitive_folder`),icon:(0,q.jsx)(ka,{size:14}),onSelect:()=>p(!0)})),m&&e.push(...to.map((e,t)=>({label:`${O(e.label)} (${e.extension})`,icon:(0,q.jsx)(Oi,{size:14}),separatorBefore:t===0,onSelect:()=>m(e.extension)}))),I.push({label:O(`new`),icon:(0,q.jsx)(Ni,{size:14}),children:e,onSelect:()=>void 0})}if(A||I.push({label:O(`create_link`),icon:(0,q.jsx)(Na,{size:14}),disabled:!k,children:ve(),onSelect:()=>void 0}),h)return(0,q.jsx)(Oo,{items:I,onClose:a,quick:L,x:e.x,y:e.y});!A&&s&&I.push({label:O(`open_in_new_tab`),icon:(0,q.jsx)(Ni,{size:14}),onSelect:()=>s(t,!0)}),I.push({label:O(`copy_as_path`),icon:(0,q.jsx)(Aa,{size:14}),onSelect:()=>void me([t])}),_&&I.push({label:O(`add_to_file_tray`),icon:(0,q.jsx)(Ta,{size:14}),onSelect:()=>_([t])}),!A&&(ue?y:v)&&I.push({label:O(ue?`remove_from_favorites`:`add_to_favorites`),icon:ue?(0,q.jsx)(Oa,{size:14}):(0,q.jsx)(Da,{size:14}),onSelect:()=>ue?y?.([t]):v?.([t])}),!A&&re!==null&&I.push({label:O(`case_sensitive_names`),icon:(0,q.jsx)(ka,{size:14}),checked:re,onSelect:()=>void he()}),!A&&C&&(I.push({label:O(`open_in_terminal`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void Nt(t)}),I.push({label:O(`show_in_explorer`),icon:(0,q.jsx)(Di,{size:14}),separatorBefore:!0,onSelect:()=>void Rt(t)})),f&&L.push({label:O(`paste`),icon:(0,q.jsx)(Ma,{size:16}),disabled:!i,shortcut:nn(r.paste),onSelect:()=>f(t)}),A||L.push({label:O(`properties`),icon:(0,q.jsx)(Li,{size:16}),shortcut:nn(r.properties),onSelect:()=>void At([t])})}else{if(s&&I.push({label:O(`open`),icon:(0,q.jsx)(Fi,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&c?.(n.path)}}),n?.isDirectory&&(s&&I.push({label:O(`open_in_new_tab`),icon:(0,q.jsx)(Ni,{size:14}),onSelect:()=>s(n.path,!0)}),f&&I.push({label:O(`paste_into_folder`),icon:(0,q.jsx)(Ma,{size:14}),disabled:!i,onSelect:()=>f(n.path)}),A||I.push({label:O(`open_in_terminal`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void Nt(n.path)})),!A&&oe&&n&&!n.isDirectory&&ne(n.path)&&S&&I.push({label:O(`extract_archive`),icon:(0,q.jsx)(ea,{size:14}),separatorBefore:!0,children:[{label:O(`extract_here`),icon:(0,q.jsx)(ea,{size:14}),onSelect:()=>S(n.path,`here`)},{label:O(`extract_to_a_folder_named_after_the_archive`),icon:(0,q.jsx)(ea,{size:14}),onSelect:()=>S(n.path,`named`)},{label:O(`auto_extract_to_the_current_folder`),icon:(0,q.jsx)(ea,{size:14}),onSelect:()=>S(n.path,`auto`)},{label:O(`extract_to`),icon:(0,q.jsx)(Di,{size:14}),separatorBefore:!0,onSelect:()=>S(n.path,`choose`)}],onSelect:()=>void 0}),!A&&oe&&n){let e=[];if(te.loading)e.push({label:O(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of te.recommended)e.push({label:t.name,group:O(`suggested_apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(na,{size:14}),onSelect:()=>void Ft(n.path,t.path).then(e=>{e||Mt(n.path)})});for(let t of te.other)e.push({label:t.name,group:O(`other_apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(na,{size:14}),onSelect:()=>void Ft(n.path,t.path).then(e=>{e||Mt(n.path)})})}e.push({label:O(`choose_another_app`),icon:(0,q.jsx)(na,{size:14}),separatorBefore:!0,onSelect:()=>void Mt(n.path)}),I.push({label:O(`open_with_2`),icon:(0,q.jsx)(na,{size:14}),children:e,onSelect:()=>void Mt(n.path)})}if(!A&&w===`windows`&&e.paths.length>0&&I.push({label:O(`share`),icon:(0,q.jsx)(Na,{size:14}),separatorBefore:!0,onSelect:()=>void jt(e.paths).then(e=>{e.ok||Qa(e.error??O(`could_not_open_the_share_sheet`))})}),A||I.push({label:O(`compress`),icon:(0,q.jsx)(ea,{size:14}),separatorBefore:!0,children:[{label:O(`compress_to_zip`),icon:(0,q.jsx)(ea,{size:14}),onSelect:()=>void pe(e.paths)},{label:O(`compress_to`),icon:(0,q.jsx)(ea,{size:14}),onSelect:()=>ee?.(e.paths,de())}],onSelect:()=>void 0}),!A&&(e?.paths.length??0)>0){let e=[{label:O(`select_link_source`),icon:(0,q.jsx)(Na,{size:14}),onSelect:()=>void _e()},...k?[{label:O(`cancel_selected_link`),icon:(0,q.jsx)(Gi,{size:14}),onSelect:()=>co(null)}]:[],...oe&&n?n.isDirectory?[{label:O(`symbolic_link`),icon:(0,q.jsx)(Di,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-folder`)},{label:O(`directory_junction`),icon:(0,q.jsx)(Di,{size:14}),onSelect:()=>void ge(`junction`)},{label:O(`smart_copy`),icon:(0,q.jsx)(Aa,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`smart-copy`)},{label:O(`smart_mirror`),icon:(0,q.jsx)(Aa,{size:14}),onSelect:()=>void ge(`smart-mirror`)},{label:O(`multi_version_smart_copy`),icon:(0,q.jsx)(Aa,{size:14}),onSelect:()=>void ge(`multi-version-smart-copy`)},{label:O(`hardlink_copy`),icon:(0,q.jsx)(Aa,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`hard-copy`)},{label:O(`symbolic_link_copy`),icon:(0,q.jsx)(Aa,{size:14}),onSelect:()=>void ge(`symbolic-copy`)}]:[{label:O(`symbolic_link`),icon:(0,q.jsx)(Oi,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-file`)},{label:O(`hard_link`),icon:(0,q.jsx)(Oi,{size:14}),onSelect:()=>void ge(`hard`)}]:[]];I.push({label:O(`create_link`),icon:(0,q.jsx)(Na,{size:14}),children:e,onSelect:()=>void 0})}!A&&n?.isDirectory&&re!==null&&I.push({label:O(`case_sensitive_names`),icon:(0,q.jsx)(ka,{size:14}),checked:re,onSelect:()=>void he()}),I.push({label:O(`copy_as_path`),icon:(0,q.jsx)(Aa,{size:14}),onSelect:()=>void me(e.paths)}),_&&I.push({label:O(`add_to_file_tray`),icon:(0,q.jsx)(Ta,{size:14}),onSelect:()=>_(e.paths)}),!A&&(ue?y:v)&&I.push({label:O(ue?`remove_from_favorites`:`add_to_favorites`),icon:ue?(0,q.jsx)(Oa,{size:14}):(0,q.jsx)(Da,{size:14}),onSelect:()=>ue?y?.(le):v?.(le)}),A||I.push({label:O(`show_in_explorer`),icon:(0,q.jsx)(Di,{size:14}),separatorBefore:!0,onSelect:()=>void Rt(le[0])}),d&&L.push({label:O(`cut`),icon:(0,q.jsx)(ja,{size:16}),shortcut:nn(r.cut),onSelect:()=>d(e.paths,!0)},{label:O(`copy`),icon:(0,q.jsx)(Aa,{size:16}),shortcut:nn(r.copy),onSelect:()=>d(e.paths,!1)}),oe&&n&&l&&L.push({label:O(`rename`),icon:(0,q.jsx)(ua,{size:16}),shortcut:nn(r.rename),onSelect:()=>l(n.path)}),u&&L.push({label:O(`delete`),icon:(0,q.jsx)(Ui,{size:16}),danger:!0,shortcut:nn(r.delete),onSelect:()=>u(e.paths)}),A||L.push({label:O(`properties`),icon:(0,q.jsx)(Li,{size:16}),shortcut:nn(r.properties),onSelect:()=>void At(e.paths)})}if(j.loading)I.push({label:O(`more_actions`),icon:(0,q.jsx)(na,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(j.verbs.length>0){let e={items:[],children:new Map};for(let t of j.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,q.jsx)(Vo,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Bt(F,j.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,q.jsx)(Vo,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];I.push({label:O(j.safe?`more_actions`:`more_actions_extensions`),icon:(0,q.jsx)(na,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,q.jsx)(Oo,{items:I,onClose:a,quick:L,x:e.x,y:e.y})}function Vo({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,q.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,q.jsx)(Fi,{size:14});case`document`:return(0,q.jsx)(ca,{size:14});case`cut`:return(0,q.jsx)(ja,{size:14});case`copy`:return(0,q.jsx)(Aa,{size:14});case`paste`:return(0,q.jsx)(Ma,{size:14});case`trash`:return(0,q.jsx)(Ui,{size:14});case`pencil`:return(0,q.jsx)(ua,{size:14});case`gear`:return(0,q.jsx)(Li,{size:14});case`star`:return(0,q.jsx)(_a,{size:14});case`pin`:return(0,q.jsx)(Ri,{size:14});case`executable`:return(0,q.jsx)(na,{size:14});case`share`:return(0,q.jsx)(Na,{size:14});case`arrow`:return(0,q.jsx)(Fi,{size:14});default:return(0,q.jsx)(Ji,{size:14})}}function Ho(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function Uo({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:s,zIndex:c=3200}){let l=o(),[u,d]=(0,z.useState)(null),f=(0,z.useRef)(null),p=t.find(t=>t.value===e)??t[0];return(0,z.useEffect)(()=>{if(!u)return;let e=()=>d(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[u]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Wo,{$icon:a!==void 0,"aria-expanded":u!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(u){d(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;d({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:f,style:i&&!a?{width:i}:void 0,title:s??p?.title,type:`button`,children:[a===void 0?(0,q.jsx)(Go,{children:p?.label??``}):(0,q.jsx)(Ko,{children:a}),a===void 0&&(0,q.jsx)(qo,{children:(0,q.jsx)(Ii,{size:11})})]}),u&&(0,uo.createPortal)((0,q.jsx)(Jo,{"aria-label":l(`options`),"data-select-menu":`true`,$menuZIndex:c,role:`listbox`,style:{bottom:u.bottom,left:u.left,minWidth:u.width,top:u.top},children:t.map(t=>(0,q.jsxs)(Yo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),d(null)},role:`option`,title:t.title,type:`button`,children:[(0,q.jsx)(Xo,{children:t.label}),t.value===e&&(0,q.jsx)(Wi,{size:11})]},t.value))}),document.body)]})}var Wo=v.button`
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
`,Go=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ko=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,qo=v.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Jo=v.div`
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
    ${So}
`,Yo=v.button`
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
`,Xo=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zo=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],Qo=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],$o=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],es=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],ts=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function ns({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=o(),a=(0,z.useRef)(null),[s,c]=(0,z.useState)(e),[l,u]=(0,z.useState)(t),[d,f]=(0,z.useState)(`zip`),[p,m]=(0,z.useState)(`5`),[h,g]=(0,z.useState)(`default`),[_,v]=(0,z.useState)(`none`),[y,b]=(0,z.useState)(``),[x,S]=(0,z.useState)(`0`),[C,w]=(0,z.useState)(!1);(0,z.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=Zo.find(e=>e.value===d)??Zo[0],E=d===`zip`||d===`zipx`,ee=_!==`none`,D=E||d===`7z`,O=d===`zip`||d===`7z`,k=async()=>{if(C||!l.trim()||!s||ee&&y.length===0)return;w(!0);let e=await r({directory:s,name:l.trim(),format:d,level:T.level?Number(p):0,method:E?h:null,encryption:D?_:`none`,password:ee?y:void 0,splitSize:O?Number(x):0});w(!1),e&&n()};return(0,uo.createPortal)((0,q.jsx)(rs,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,q.jsxs)(is,{"aria-modal":`true`,role:`dialog`,children:[(0,q.jsx)(as,{children:i(`compress_to`)}),(0,q.jsxs)(os,{children:[(0,q.jsx)(ss,{children:i(`archive_name`)}),(0,q.jsx)(cs,{onChange:e=>u(e.target.value),ref:a,value:l,onKeyDown:e=>{e.key===`Enter`&&k()}}),(0,q.jsx)(ls,{children:T.extension})]}),(0,q.jsxs)(os,{children:[(0,q.jsx)(ss,{children:i(`format`)}),(0,q.jsx)(Uo,{onChange:e=>f(e),options:Zo.map(e=>({value:e.value,label:i(e.label)})),value:d,width:236,zIndex:3700})]}),(0,q.jsxs)(os,{children:[(0,q.jsx)(ss,{children:i(`method`)}),(0,q.jsx)(Uo,{disabled:!E,onChange:g,options:Qo.map(e=>({...e,label:i(e.label)})),value:E?h:`default`,width:236,zIndex:3700})]}),(0,q.jsxs)(os,{children:[(0,q.jsx)(ss,{children:i(`encryption`)}),(0,q.jsx)(Uo,{disabled:!D,onChange:e=>{v(e),e===`none`&&b(``)},options:$o.map(e=>({...e,label:i(e.label)})),value:D?_:`none`,width:236,zIndex:3700})]}),ee&&(0,q.jsxs)(os,{children:[(0,q.jsx)(ss,{children:i(`password`)}),(0,q.jsx)(cs,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,q.jsxs)(os,{children:[(0,q.jsx)(ss,{children:i(`split_volumes`)}),(0,q.jsx)(Uo,{disabled:!O,onChange:S,options:es.map(e=>({...e,label:i(e.label)})),value:O?x:`0`,width:236,zIndex:3700})]}),(0,q.jsxs)(os,{children:[(0,q.jsx)(ss,{children:i(`compression_level`)}),(0,q.jsx)(Uo,{disabled:!T.level,onChange:m,options:ts.map(e=>({...e,label:i(e.label)})),value:T.level?p:d===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,q.jsxs)(os,{$stack:!0,children:[(0,q.jsx)(ss,{children:i(`destination`)}),(0,q.jsxs)(us,{children:[(0,q.jsx)(ds,{title:s,children:s}),(0,q.jsx)(ps,{disabled:C,onClick:()=>void qa(s).then(e=>{e&&c(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,q.jsxs)(fs,{children:[(0,q.jsx)(ps,{disabled:C,onClick:n,type:`button`,children:i(`cancel`)}),(0,q.jsx)(ms,{disabled:C||!l.trim()||ee&&y.length===0,onClick:()=>void k(),type:`button`,children:i(C?`compressing`:`compress`)})]})]})}),document.body)}var rs=v.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Eo}
`,is=v.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${xo}
`,as=v.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,os=v.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,ss=v.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,cs=v.input`
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
`,ls=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,us=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,ds=v.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fs=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,ps=v.button`
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
`,ms=v(ps)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function hs({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:s}){let c=o(),l=(0,z.useRef)(null);return(0,z.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),s()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,s]),e?(0,uo.createPortal)((0,q.jsx)(gs,{onPointerDown:e=>{e.target===e.currentTarget&&s()},children:(0,q.jsxs)(_s,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(vs,{children:t}),(0,q.jsx)(ys,{children:n}),(0,q.jsxs)(bs,{children:[(0,q.jsx)(xs,{onClick:s,type:`button`,children:c(`cancel`)}),(0,q.jsx)(xs,{$danger:i,onClick:a,ref:l,type:`button`,children:r})]})]})}),document.body):null}var gs=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Eo}
`,_s=v.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${xo}
`,vs=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,ys=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,bs=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,xs=v.button`
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
`,Ss=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Cs=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),ws=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),Ts=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Es({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:s,emptyNote:c}){let l=o(),[u,d]=(0,z.useState)(!1),[f,p]=(0,z.useState)(!1),[m,h]=(0,z.useState)(!1),[g,_]=(0,z.useState)(0),[v,y]=(0,z.useState)(0),[b,x]=(0,z.useState)(null),[S,C]=(0,z.useState)(!1),[w,T]=(0,z.useState)(!1),E=(0,z.useRef)(null),ee=(0,z.useRef)(null),D=(0,z.useRef)(null),O=(0,z.useRef)(null),[k,A]=(0,z.useState)(()=>{let e=nr(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),j=e?.path??null,M=xn(j),te=e?Ds(e.name):``,ne=!!e&&!e.isDirectory&&Ss.has(te),N=!!e&&!e.isDirectory&&Cs.has(te),re=!!e&&!e.isDirectory&&ws.has(te),ie=!!e&&!e.isDirectory&&Ts.has(te),ae=!!e&&!e.isDirectory&&te===`pdf`,P=wn(ne?M:null,512,e?.modified??0),oe=En(re?M:null,e?.modified??0,te),F=En(ne||N?M:null,e?.modified??0,te),se=Dn(ae?M:null,e?.modified??0),I=W(!ne&&!N&&!re&&!ie&&!ae?M:null,e?.isDirectory??!1);if((0,z.useEffect)(()=>{d(!1),p(!1),h(!1),_(0),y(0),T(!1)},[j]),(0,z.useEffect)(()=>{if(!M||!ie){x(null),C(!1);return}let e=!0;return C(!0),x(null),De(M).then(t=>{e&&(x(t),C(!1))},()=>{e&&(x({text:null,truncated:!1,error:l(`could_not_read_this_file`)}),C(!1))}),()=>{e=!1}},[M,ie]),!e&&!c)return null;let L=e=>{D.current={x:e.clientX,width:ee.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},ce=e=>{let t=D.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},le=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},ue=e=>{O.current={y:e.clientY,height:k},e.currentTarget.setPointerCapture(e.pointerId)},de=e=>{let t=O.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);A(n),rr(`yafm.preview.media.height`,n)},fe=e=>{O.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,q.jsxs)(ks,{$open:r,children:[r&&(0,q.jsx)(As,{onPointerDown:L,onPointerMove:ce,onPointerUp:le,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsx)(js,{ref:ee,style:{width:r?t:0},children:(0,q.jsxs)(Ms,{children:[(0,q.jsx)(Di,{size:56}),(0,q.jsx)(`span`,{children:c})]})})]});let pe=()=>{let e=E.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,q.jsxs)(ks,{$open:r,children:[r&&(0,q.jsx)(As,{onPointerDown:L,onPointerMove:ce,onPointerUp:le,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(js,{ref:ee,style:{width:r?t:0},children:[(0,q.jsx)(Ns,{style:{height:k},children:ne&&F&&!u?(0,q.jsxs)(Fs,{onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),children:[(0,q.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:pe,onDurationChange:e=>_(e.currentTarget.duration||0),onError:()=>d(!0),onLoadedMetadata:e=>{_(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>p(!1),onPlay:()=>p(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:P??void 0,preload:`metadata`,ref:E,src:F}),(0,q.jsx)(Is,{$visible:!f,onClick:pe,title:l(`play`),type:`button`,children:(0,q.jsx)(Pa,{size:28})}),(0,q.jsxs)(Ls,{$visible:m,onClick:e=>e.stopPropagation(),children:[(0,q.jsxs)(Rs,{children:[(0,q.jsx)(`span`,{children:Os(v)}),(0,q.jsx)(`span`,{children:Os(g)})]}),(0,q.jsx)(zs,{"aria-label":l(`seek`),max:g||0,min:0,onChange:e=>{let t=E.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,g||0)})]})]}):N&&F?(0,q.jsx)(`audio`,{controls:!0,src:F}):re&&oe?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:oe}):ae&&se&&!w?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:se}):ae?(0,q.jsx)(Oi,{size:64}):ie?(0,q.jsx)(Bs,{children:S||!b?(0,q.jsx)(Hs,{children:l(`loading`)}):b.error?(0,q.jsx)(Hs,{children:b.error}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Vs,{children:b.text}),b.truncated&&(0,q.jsx)(Hs,{children:l(`showing_the_first_256_kb`)})]})}):ne&&P?(0,q.jsx)(`img`,{alt:``,src:P}):I?(0,q.jsx)(`img`,{alt:``,src:I}):e.isDirectory?(0,q.jsx)(Di,{size:64}):(0,q.jsx)(Oi,{size:64})}),(0,q.jsx)(Ps,{onDoubleClick:()=>{A(210),rr(`yafm.preview.media.height`,210)},onPointerDown:ue,onPointerMove:de,onPointerUp:fe,title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(Us,{children:[(0,q.jsx)(Ws,{title:e.path,children:e.name}),s&&(0,q.jsx)(Gs,{children:s}),(0,q.jsx)(Ks,{children:e.fields.map(e=>(0,q.jsxs)(qs,{children:[(0,q.jsx)(Js,{children:e.label}),(0,q.jsx)(Ys,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Ds(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Os(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var ks=v.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,As=v.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,js=v.aside`
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
`,Ms=v.div`
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
`,Ns=v.div`
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
`,Ps=v.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Fs=v.div`
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
`,Is=v.button`
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
`,Ls=v.div`
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
`,Rs=v.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,zs=v.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Bs=v.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Vs=v.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Hs=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Us=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Ws=v.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Gs=v.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Ks=v.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,qs=v.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Js=v.span`
    color: var(--text-muted);
`,Ys=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Xs=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Zs=[...Xs],Qs={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},$s={folder:e=>(0,q.jsx)(Di,{size:e}),home:e=>(0,q.jsx)(Ei,{size:e}),desktop:e=>(0,q.jsx)(da,{size:e}),documents:e=>(0,q.jsx)(fa,{size:e}),downloads:e=>(0,q.jsx)(pa,{size:e}),pictures:e=>(0,q.jsx)(ma,{size:e}),music:e=>(0,q.jsx)(ha,{size:e}),videos:e=>(0,q.jsx)(ga,{size:e}),drive:e=>(0,q.jsx)(ki,{size:e}),image:e=>(0,q.jsx)(Zi,{size:e}),video:e=>(0,q.jsx)(Qi,{size:e}),audio:e=>(0,q.jsx)($i,{size:e}),text:e=>(0,q.jsx)(Yi,{size:e}),code:e=>(0,q.jsx)(Xi,{size:e}),clock:e=>(0,q.jsx)(Vi,{size:e}),star:e=>(0,q.jsx)(_a,{size:e}),file:e=>(0,q.jsx)(Oi,{size:e}),archive:e=>(0,q.jsx)(ea,{size:e}),pdf:e=>(0,q.jsx)(ta,{size:e}),executable:e=>(0,q.jsx)(na,{size:e}),font:e=>(0,q.jsx)(ra,{size:e}),database:e=>(0,q.jsx)(ia,{size:e}),config:e=>(0,q.jsx)(aa,{size:e}),spreadsheet:e=>(0,q.jsx)(oa,{size:e}),presentation:e=>(0,q.jsx)(sa,{size:e}),document:e=>(0,q.jsx)(ca,{size:e}),app:e=>(0,q.jsx)(Ji,{size:e}),gear:e=>(0,q.jsx)(Li,{size:e}),pin:e=>(0,q.jsx)(Ri,{size:e}),trash:e=>(0,q.jsx)(Ui,{size:e}),overview:e=>(0,q.jsx)(la,{size:e}),book:e=>(0,q.jsx)(va,{size:e}),briefcase:e=>(0,q.jsx)(ya,{size:e}),cloud:e=>(0,q.jsx)(ba,{size:e}),gamepad:e=>(0,q.jsx)(xa,{size:e}),camera:e=>(0,q.jsx)(Sa,{size:e}),terminal:e=>(0,q.jsx)(Ca,{size:e}),server:e=>(0,q.jsx)(wa,{size:e}),package:e=>(0,q.jsx)(Ta,{size:e}),globe:e=>(0,q.jsx)(Ea,{size:e}),heart:e=>(0,q.jsx)(Da,{size:e}),share:e=>(0,q.jsx)(wa,{size:e}),favorites:e=>(0,q.jsx)(Da,{size:e})};function ec(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function tc(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Xs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Zs.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=ec(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${Qs[n]??n}${nc(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function nc(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function rc({panel:e,size:t=16}){let n=G(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,q.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?$s[e.icon]:void 0;if(r)return(0,q.jsx)(q.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,q.jsx)(Di,{size:t});case`recent`:return(0,q.jsx)(Vi,{size:t});case`frequent`:return(0,q.jsx)(_a,{size:t});case`drives`:return(0,q.jsx)(ki,{size:t});case`home`:return(0,q.jsx)(Ei,{size:t});case`share`:return(0,q.jsx)(wa,{size:t});case`favorites`:return(0,q.jsx)(Da,{size:t});default:return(0,q.jsx)(Di,{size:t})}}function ic({place:e,size:t=18}){let n=G(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,q.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&$s[e.icon]?(0,q.jsx)(q.Fragment,{children:$s[e.icon](t)}):(0,q.jsx)(Di,{size:t})}var ac=`#64748b`;function oc(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function sc({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:s}){let c=o(),[l,u]=(0,z.useState)(``),[d,f]=(0,z.useState)(`#2dd4bf`),p=(0,z.useRef)(null);(0,z.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||s()},t=e=>{e.key===`Escape`&&s()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,s),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,s)}},[s]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=l.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:d}),u(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,uo.createPortal)((0,q.jsxs)(cc,{"data-tag-menu":`true`,ref:p,style:{left:y,top:b},children:[(0,q.jsxs)(lc,{children:[(0,q.jsx)(`span`,{children:c(`tags`)}),(0,q.jsx)(uc,{onClick:s,title:c(`close`),type:`button`,children:(0,q.jsx)(Gi,{size:11})})]}),(0,q.jsxs)(dc,{children:[m.length===0&&(0,q.jsx)(hc,{children:c(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,q.jsxs)(fc,{children:[(0,q.jsx)(pc,{"aria-label":c(`color_of_tag`,{tag:e}),onChange:t=>_(e,t.target.value),title:c(`change_this_tag_s_color`),type:`color`,value:t}),(0,q.jsxs)(mc,{$color:t,$ink:oc(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,q.jsx)(Wi,{size:11}),(0,q.jsx)(`span`,{children:e})]})]},e)})]}),(0,q.jsxs)(gc,{children:[(0,q.jsx)(pc,{"aria-label":c(`color_of_the_new_tag`),onChange:e=>f(e.target.value),title:c(`color_of_the_new_tag`),type:`color`,value:d}),(0,q.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:c(`new_tag`),spellCheck:!1,value:l}),(0,q.jsx)(_c,{onClick:v,type:`button`,children:c(`add`)})]})]}),document.body)}var cc=v.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${xo}
`,lc=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,uc=v.button`
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
`,dc=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,fc=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,pc=v.input`
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
`,mc=v.button`
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
`,hc=v.span`
    font-size: 11px;
    color: var(--text-muted);
`,gc=v.div`
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
`,_c=v.button`
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
`,vc={file:Oi,folder:Di,text:Yi,code:Xi,image:Zi,video:Qi,audio:$i,archive:ea,pdf:ta,executable:na,font:ra,database:ia,config:aa,spreadsheet:oa,presentation:sa,document:ca},yc={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function bc(e){let t=e.lastIndexOf(`.`);return t>0?yc[e.slice(t).toLowerCase()]??`file`:`file`}function xc({name:e,size:t}){let n=vc[e??`file`]??Oi;return(0,q.jsx)(n,{size:t})}function Sc({path:e,name:t,isDirectory:n,size:r=18}){let i=W(e,n);return i?(0,q.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,q.jsx)(Di,{size:r}):(0,q.jsx)(xc,{name:bc(t),size:r})}var Cc=`application/x-yafm-paths`,wc=[Cc,`text/uri-list`];function Tc(e){return e?.types.some(e=>wc.includes(e.toLowerCase()))??!1}function Ec(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Cc);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Oc).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Dc=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Oc(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Dc?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function kc(e,t,n=!0){e.dataTransfer.setData(Cc,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Ac({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=o(),[h,g]=(0,z.useState)(()=>new Set),[_,v]=(0,z.useState)(!1),y=(0,z.useRef)(null),x=(0,z.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),S=(0,z.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),C=(0,z.useRef)(null);if((0,z.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=C.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Tc(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Ec(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,c]),!r)return null;let w=new Set([...e,...t].map(e=>e.path)),T=w.size>0&&[...w].every(e=>h.has(e)),E=w.size,ee=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{g(T?new Set:w)},O=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},k=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},A=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},j=()=>{let e=x.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},M=()=>{let e=x.map(e=>e.path);e.length!==0&&f(e)},te=()=>{let e=new Map;for(let t of x)e.set(t.path,!0);for(let t of S)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,a,!0),r.length>0&&p(r,a,!1),g(new Set)},ne=(e,t)=>{let n=h.has(e.path);return(0,q.jsxs)(Hc,{$checked:n,draggable:!0,onClick:()=>ee(e.path),onDragStart:r=>{kc(r,n&&h.size>0?[...new Set([...x,...S].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,q.jsx)(Uc,{$checked:n,onClick:t=>{t.stopPropagation(),ee(e.path)},type:`button`,children:n&&(0,q.jsx)(Wi,{size:8})}),(0,q.jsx)(Sc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,q.jsxs)(Wc,{children:[(0,q.jsx)(Gc,{children:e.name}),(0,q.jsx)(Kc,{children:b(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},N=e=>{Tc(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,q.jsxs)(jc,{$dragging:_,"data-tray":`true`,ref:C,style:{left:i.x,top:i.y},onDragEnter:N,onDragOver:N,onDrop:e=>{let{paths:t}=Ec(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,q.jsxs)(Mc,{onPointerDown:O,onPointerMove:k,onPointerUp:A,children:[(0,q.jsxs)(Nc,{children:[(0,q.jsx)(Ta,{size:12}),m(`tray`),(0,q.jsx)(Pc,{children:E})]}),(0,q.jsxs)(Fc,{onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(Ic,{onClick:D,title:m(T?`select_none`:`select_all`),type:`button`,children:m(T?`none`:`all`)}),(0,q.jsx)(Ic,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,q.jsx)(Lc,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,q.jsx)(Gi,{size:10})})]})]}),(0,q.jsxs)(Rc,{children:[(0,q.jsxs)(Bc,{children:[m(`in_this_app`),(0,q.jsx)(Pc,{children:e.length})]}),e.length===0&&(0,q.jsx)(zc,{children:m(`drag_files_or_folders_here`)}),e.map(e=>ne(e,!0)),t.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Bc,{$clipboard:!0,children:[m(`clipboard`),(0,q.jsx)(Pc,{children:t.length}),n&&(0,q.jsx)(Vc,{children:m(`cut`)})]}),t.map(e=>ne(e,n))]})]}),(0,q.jsxs)(qc,{children:[(0,q.jsx)(Jc,{$plain:!0,disabled:x.length===0,onClick:M,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,q.jsx)(Jc,{disabled:h.size===0||!a,onClick:te,type:`button`,children:m(`move_here`)}),(0,q.jsx)(Jc,{$danger:!0,disabled:x.length===0,onClick:j,type:`button`,children:m(`remove`)})]})]})}var jc=v.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${fo}
    ${xo}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Mc=v.div`
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
`,Nc=v.span`
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
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Pc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Fc=v.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Ic=v.button`
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
`,Lc=v.button`
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
`,Rc=v.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,zc=v.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Bc=v.div`
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
`,Vc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Hc=v.div`
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
`,Uc=v.button`
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
`,Wc=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Gc=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Kc=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,qc=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Jc=v.button`
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
`,Yc={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Xc(){return l.available?await l.request(`share.list`):Yc}async function Zc(e,t){return l.available?await l.request(`share.add`,{path:e,mode:t}):Yc}async function Qc(e){return l.available?await l.request(`share.remove`,{id:e}):Yc}async function $c(e,t){return l.available?await l.request(`share.mode`,{id:e,mode:t}):Yc}async function el(){return l.available?(await l.request(`share.peers`)).peers??[]:[]}async function tl(){return l.available?(await l.request(`share.peers.refresh`)).peers??[]:[]}async function nl(e,t){l.available&&await l.request(`share.pair.start`,{host:e,port:t})}async function rl(e,t){l.available&&await l.request(`share.pair.respond`,{requestId:e,accept:t})}async function il(e,t){l.available&&await l.request(`share.port`,{mode:t,port:e})}var al=`yafm://share/`;function ol(e){return e.toLowerCase().startsWith(al)}function sl(e){if(!ol(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function cl(e,t,n=``){let r=`${al}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function ll(e){let t=sl(e);if(!t||!l.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await l.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:cl(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:cl(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function ul(e){let t=sl(e);if(!t||!l.available)throw Error(`This shared file is only available in the desktop app.`);let n=await l.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function dl(e){await Se(await ul(e))}async function fl(){return l.available?(await l.request(`share.devices.list`)).devices??[]:[]}async function pl(e,t,n){return l.available?(await l.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function ml(e){return l.available?(await l.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function hl(){return l.available?(await l.request(`share.access.status`)).hasPassword:!1}async function gl(e){return l.available?(await l.request(`share.access.password`,{password:e})).hasPassword:!1}var _l=new Map,vl=new Set,yl=0;function bl(){yl+=1;for(let e of vl)e()}function xl(e,t){t?_l.set(e,t):_l.delete(e),bl()}function Sl(e){return _l.has(e)}function Cl(e,t,n){_l.get(e)?.(t,n)}function wl(e){return vl.add(e),()=>vl.delete(e)}function Tl(){return yl}function El(e){return(0,z.useSyncExternalStore)(wl,Tl,Tl),{available:Sl(e),open:(t,n)=>Cl(e,t,n)}}function Dl(e){return[..._l.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function Ol(e){return(0,z.useSyncExternalStore)(wl,Tl,Tl),{available:Dl(e).length>0,open:(t,n)=>{let r=Dl(e).at(-1);r&&Cl(r,t,n)}}}var kl=60,Al=300,jl=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],Ml=new Set,Nl=`yafm.columnWidths`,Pl=`yafm.reset-column-widths`,Fl=64,Il=720,Ll=160,Rl=190,zl=120;function Bl({listing:e,loading:t,error:n,find:r=kn,view:i,showImages:a,imageStripHeight:s=Rl,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:f,showCheckboxes:p=!0,openOnSingleClick:m=!1,shortcuts:h=Wt,enableShortcuts:g=!0,refreshToken:_=0,onRefresh:v,onRename:y,onClipboardChanged:b,cutPaths:S=Ml,onTransfer:w,onAddToTray:T,platform:E,onAddFavorite:ee,onRemoveFavorite:D,favoritePaths:O,onExtractArchive:k,onPaste:A,confirmDelete:j=!1,previewVideoAudio:M=!1,previewVideoAutoplay:te=!1,showDetails:ne=!0,onPreviewInfo:N,onActivate:re,groupOf:P,onGridScroll:oe,gridFooter:se,allowBackgroundMenu:I=!0,readOnly:L=!1,onSelectionChange:ce,onSelectionCountChange:le,selectionMenuRequest:ue,selectionMenuId:de,singleSelect:fe=!1,pendingRename:pe=null,pendingRenameToken:me=0,selectMatchesToken:he=0}){let R=o(),ge=Gn(),B=(0,z.useRef)(null),_e=(0,z.useRef)(null),ve=(0,z.useRef)(null),ye=(0,z.useRef)(null),[be,xe]=(0,z.useState)(Al),[Se,Ce]=(0,z.useState)({top:0,height:640}),we=(0,z.useRef)(null),Te=(0,z.useRef)(null),Ee=(0,z.useRef)(!1),[De,Oe]=(0,z.useState)(null),[ke,Ae]=(0,z.useState)(s),[je,Me]=(0,z.useState)(()=>new Set),[Ne,V]=(0,z.useState)(()=>ir(Nl)??{}),Pe=(0,z.useRef)(je),Fe=(0,z.useRef)([]);Pe.current=je,(0,z.useEffect)(()=>ce?.([...je]),[je,ce]),(0,z.useEffect)(()=>le?.(je.size),[je,le]),(0,z.useEffect)(()=>{let e=ue;if(!e||e.token===Re.current)return;Re.current=e.token;let t=[...Pe.current];t.length!==0&&(Le({x:e.x,y:e.y,paths:t,background:!1}),_t().then(Ze,()=>Ze(!1)))},[ue]);let[Ie,Le]=(0,z.useState)(null),Re=(0,z.useRef)(0),[H,ze]=(0,z.useState)(null),[Be,Ve]=(0,z.useState)(null),[He,Ue]=(0,z.useState)(null),We=(0,z.useRef)(He);We.current=He;let Ge=(0,z.useRef)(0),Ke=(0,z.useRef)(re);Ke.current=re;let[qe,Je]=(0,z.useState)(()=>{let e=nr(`yafm.preview.width`,320);return e>=220?e:320}),Ye=(0,z.useCallback)(e=>{Je(e),rr(`yafm.preview.width`,e)},[]),[Xe,Ze]=(0,z.useState)(!1),Qe=(0,z.useCallback)((e,t)=>{let n=[...Pe.current];n.length!==0&&(Le({x:e,y:t,paths:n,background:!1}),_t().then(Ze,()=>Ze(!1)))},[]);(0,z.useEffect)(()=>{if(de)return xl(de,je.size>0?Qe:null),()=>xl(de,null)},[de,je,Qe]),(0,z.useEffect)(()=>{Me(new Set),Ue(null),Le(null),Te.current=null},[e?.path]),(0,z.useEffect)(()=>{Ae(s)},[s]),(0,z.useEffect)(()=>{Me(new Set),Ue(null),Te.current=null},[_]);let $e=e=>{we.current={y:e.clientY,height:ke},e.currentTarget.setPointerCapture(e.pointerId)},et=e=>{let t=we.current;if(!t)return;let n=Math.max(zl,Math.round(window.innerHeight*.7));Ae(Math.min(n,Math.max(zl,t.height+t.y-e.clientY)))},tt=e=>{we.current&&(we.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(ke))},nt=()=>{Ae(Rl),c?.(Rl)},rt=r.query.length>0,it=(0,z.useMemo)(()=>jl.filter(e=>i.columns?.includes(e.id)),[i.columns]),at=i.columns?.includes(`linkTarget`)??!1,ot=(0,z.useCallback)(e=>Math.min(Il,Math.max(Fl,Ne[e.id]??e.width)),[Ne]),st=(0,z.useMemo)(()=>`minmax(160px, 1fr) ${it.map(e=>`${ot(e)}px`).join(` `)}`.trim(),[it,ot]),ct=(0,z.useRef)(null),lt=(0,z.useRef)(null),ut=()=>Math.floor(lt.current?.getBoundingClientRect().width??Ll),dt=e=>{let t=it[0];t&&(e.preventDefault(),e.stopPropagation(),ct.current={left:{id:t.id,start:ot(t)},startX:e.clientX,nameStart:ut()})},ft=(e,t)=>{let n=it[t],r=it[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),ct.current={left:{id:n.id,start:ot(n)},right:{id:r.id,start:ot(r)},startX:e.clientX,nameStart:0})},pt=e=>V(t=>{let n={...t};return delete n[e],ar(Nl,n),n});(0,z.useEffect)(()=>{let e=e=>{let t=ct.current;if(!t)return;let n=e.clientX-t.startX;V(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Ll),i=Math.min(Math.min(Il,t.left.start+r),Math.max(Fl,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Il,Math.max(Fl,t.left.start+n)),a=Math.min(Math.min(Il,r-Fl),Math.max(Math.max(Fl,r-Il),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{ct.current&&(ct.current=null,V(e=>(ar(Nl,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,z.useEffect)(()=>{let e=()=>V(()=>(ar(Nl,{}),{}));return window.addEventListener(Pl,e),()=>window.removeEventListener(Pl,e)},[]);let U=(0,z.useMemo)(()=>e?Ul(e.entries.map(t=>{let n=t.isDirectory?Kn(ge,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:rt?An(i,r):null,tags:e.tags[t.name]??[],cut:S.has(t.fullPath)}}).filter(e=>!rt||r.mode===`dim`||e.ranges!==null),i,e,R):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,rt,r,ge,i.sort,i.sortDescending,R,S]);Fe.current=U,(0,z.useEffect)(()=>{he!==0&&Me(new Set(Fe.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[he]);let mt=Math.max(40,i.iconSize+20),ht=Math.max(0,Math.floor(Se.top/mt)-4),vt=Math.min(U.length,ht+Math.ceil(Se.height/mt)+10),bt=(0,z.useMemo)(()=>U.slice(ht,vt),[U,ht,vt]);(0,z.useEffect)(()=>{let e=ye.current;if(!e||i.mode!==`list`)return;e.scrollTop=0,Ce({top:0,height:e.clientHeight});let t=()=>Ce(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,z.useEffect)(()=>{Ce(e=>({...e,top:0})),ye.current&&(ye.current.scrollTop=0)},[e?.path]),(0,z.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=U.findIndex(e=>e.entry.fullPath===r.currentPath),t=ye.current;if(e<0||!t)return;let n=e*mt;(n<t.scrollTop||n+mt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else B.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,U,mt]);let xt=(0,z.useMemo)(()=>U.slice(0,be),[U,be]);(0,z.useEffect)(()=>{let e=_e.current;if(!e||e.length===0)return;let t=e.filter(e=>U.some(t=>F(t.entry.fullPath,e)));if(t.length===0)return;_e.current=null;let n=t[0],r=U.findIndex(e=>F(e.entry.fullPath,n));r>=0&&xe(e=>Math.max(e,r+Al)),Me(new Set(t)),Te.current=n,i.mode===`list`&&ye.current&&r>=0?ye.current.scrollTop=Math.max(0,r*mt-ye.current.clientHeight/2):requestAnimationFrame(()=>B.current?.scrollIntoView({block:`nearest`}))},[U,mt,i.mode]),(0,z.useEffect)(()=>{xe(Al)},[e?.path]),(0,z.useEffect)(()=>{if(!r.currentPath)return;let e=U.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&xe(t=>Math.max(t,e+Al))},[r.currentPath,U]);let Et=(0,z.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&xe(e=>Math.min(U.length,e+Al))},[U.length]),Dt=i.mode===`grid`,Ot=(0,z.useMemo)(()=>{if(!Dt)return[];if(!P)return Kl(xt,Gl);let e=[],t=new Map;for(let n of xt){let r=P(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[xt,Dt,P]),jt=(0,z.useMemo)(()=>a?U.filter(e=>!e.entry.isDirectory&&Vn(e.entry.name)):[],[U,a]),Mt=jt.length,Pt=(0,z.useMemo)(()=>jt.slice(0,kl),[jt]),Ft=(0,z.useMemo)(()=>Pt.map(e=>e.entry.fullPath),[Pt]),It=Ft.filter(e=>je.has(e)).length,Lt=Ft.length>0&&It===Ft.length,Rt=It>0&&!Lt,zt=(0,z.useMemo)(()=>a?Kl(Pt,Wl):[],[Pt,a]),Bt=(0,z.useMemo)(()=>U.map(e=>e.entry.fullPath),[U]),Ht=U.length>0&&je.size>=U.length,Ut=je.size>0&&!Ht,Gt=()=>{fe||(Ht?Zt():Me(new Set(Bt)))},Kt=(0,z.useCallback)((e,t)=>{fe||e.length===0||(Me(n=>{let r=new Set(n);for(let n of e)t?r.add(n):r.delete(n);return r}),t&&(Te.current=e[0]??null))},[fe]),qt=e?.path??``,Jt=(0,z.useCallback)((e,t)=>{if(fe){Te.current=t,Me(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Me(r=>{if(e.shiftKey&&Te.current!==null){let e=Bt.indexOf(Te.current),i=Bt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Bt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),Te.current=t,e}return Te.current=t,new Set([t])})},[Bt,fe]),Xt=(0,z.useCallback)(e=>{fe?(Te.current=e,Me(new Set([e]))):(Te.current=e,Me(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[fe]),Zt=(0,z.useCallback)(()=>{Te.current=null,Me(new Set)},[]);(0,z.useEffect)(()=>{if(me===0||!pe||Ge.current===me||!e?.entries.some(e=>e.fullPath===pe))return;Ge.current=me,Te.current=pe,Me(new Set([pe])),Ue({path:pe,value:x(pe)});let t=U.findIndex(e=>e.entry.fullPath===pe),n=ye.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*mt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(pe)}"]`)?.scrollIntoView({block:`nearest`})})}},[ye,e,pe,me,mt,U,i.mode]),(0,z.useEffect)(()=>{if(!He)return;let e=U.findIndex(e=>e.entry.fullPath===He.path),t=ye.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*mt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(He.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[ye,He,mt,U,i.mode]);let Qt=(0,z.useCallback)(()=>Le(null),[]),tn=(0,z.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,$t(t)):f?.(e.fullPath,$t(t))},[d,f]),nn=(0,z.useCallback)((e,t,n)=>{Oe({entry:e,x:t,y:n})},[]),rn=(0,z.useRef)(null),on=(0,z.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;kc(e,je.has(n)?[...je]:[n])},[je]),sn=(0,z.useCallback)(e=>{if(!Tc(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);rn.current=t?.dataset.directory===`true`?t.dataset.path??qt:qt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[qt]),cn=(0,z.useCallback)(e=>{if(L)return;let{paths:t,move:n}=Ec(e),r=rn.current??qt;rn.current=null,t.length!==0&&w&&(e.preventDefault(),w(t,r,!e.ctrlKey&&n))},[qt,w,L]),ln=(0,z.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),L||!t&&!I)return;let n=Pe.current;t&&!n.has(t)&&Me(new Set([t])),t&&(Te.current=t);let r=t?n.has(t)?[...n]:[t]:[];Le({x:e.clientX,y:e.clientY,paths:r,background:!t}),_t().then(Ze,()=>Ze(!1))},[I,qt]),un=(0,z.useCallback)(()=>v?.(),[v]),dn=(e,t)=>{Te.current=e,Me(new Set([e])),t&&Ue({path:e,value:x(e)}),un()},fn=H&&(0,q.jsx)(ns,{initialDirectory:qt,initialName:H.name,onCancel:()=>ze(null),onCompress:async e=>{let t=await Vt(H.paths,e);return!t.ok||!t.path?(Qa(t.error??R(`could_not_create_the_archive`)),!1):(dn(t.path,!1),!0)}}),pn=async(e,t=!1)=>{let n=e,r=t;if(e.some(ol)){let t=[];for(let n of e)if(!ol(n))t.push(n);else{if(Fe.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){Qa(R(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await ul(n))}catch(e){Qa(e instanceof Error?e.message:R(`the_file_could_not_be_copied`));return}}n=t,r=!1}await gt(n,r)&&(Ze(!0),b?.())},mn=async e=>{if(!e)return;let t=await St(e);t.cancelled||(t.ok?(_e.current=t.created,un(),A?.()):Qa(R(`nothing_on_the_clipboard_could_be_pasted_here`)))},hn=async(e,t=!1)=>{if(!qt)return;let n=e===null?await Tt(qt,t):await kt(qt,e);!n.ok||n.path===null?Qa(n.error??R(`could_not_create_the_item`)):(Te.current=n.path,Me(new Set([n.path])),Ue({path:n.path,value:x(n.path)}),un())},gn=e=>{Me(new Set([e.fullPath])),Te.current=e.fullPath,Ue({path:e.fullPath,value:e.name})},_n=(0,z.useCallback)(e=>Ue(t=>t&&{...t,value:e}),[]),vn=(0,z.useCallback)(()=>Ue(null),[]),yn=(0,z.useCallback)(async()=>{let e=We.current;if(Ue(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Fe.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await wt(e.path,t);r.ok?(Zt(),r.path&&y?.(e.path,r.path),un(),window.setTimeout(()=>un(),250)):Qa(r.error??R(`could_not_rename_the_entry`))},[Zt,y,un,R]),bn=async(e,t=!1)=>{if((t||j)&&!await W(e,t))return;let n=await Ct(e,t);if(!n.ok&&n.needsPermanent){if(!await W(e,!0))return;n=await Ct(e,!0)}if(n.ok)Zt(),un();else{if(n.cancelled)return;Qa(n.error??R(t?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},W=(0,z.useCallback)((e,t)=>new Promise(n=>Ve({paths:e,permanent:t,resolve:n})),[]),xn=(0,z.useCallback)(e=>{Ve(t=>(t?.resolve(e),null))},[]);(0,z.useEffect)(()=>{if(!g||Ie)return;let e=e=>{if(an(e.target))return;Ke.current?.();let t=en(e),n=[...je],r=n.length===1?U.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Bt.length===0)return;e.preventDefault();let n=Te.current&&Bt.includes(Te.current)?Te.current:je.size===1?[...je][0]:null,r=n?Bt.indexOf(n):-1,i=t===`home`?0:t===`end`?Bt.length-1:Math.max(0,Math.min(Bt.length-1,r+(t===`arrowdown`?1:-1))),a=Bt[i];Me(new Set([a])),Te.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else Yt(h,`copy`,t)&&i(()=>{n.length>0&&pn(n)}),Yt(h,`duplicate`,t)&&i(()=>{n.length!==0&&qt&&yt(n,qt,!1).then(e=>{e.ok&&(e.created.length>0&&Me(new Set(e.created)),un())})}),Yt(h,`cut`,t)&&i(()=>{n.length>0&&pn(n,!0)}),Yt(h,`paste`,t)&&i(()=>void mn(qt)),Yt(h,`delete`,t)&&i(()=>{n.length>0&&bn(n)}),Yt(h,`deletePermanently`,t)&&i(()=>{n.length>0&&bn(n,!0)}),Yt(h,`selectAll`,t)&&i(()=>{let e=Ee.current&&a&&Pt.length>0?Pt.map(e=>e.entry.fullPath):Bt;Me(new Set(e)),Te.current=e[0]??null}),Yt(h,`invertSelection`,t)&&i(()=>{Me(new Set(Bt.filter(e=>!je.has(e)))),Te.current=Bt[0]??null}),Yt(h,`rename`,t)&&r&&i(()=>void gn(r)),Yt(h,`open`,t)&&r&&i(()=>{r.isDirectory?d(r.fullPath):f?.(r.fullPath)}),Yt(h,`newFolder`,t)&&i(()=>void hn(null)),Yt(h,`terminal`,t)&&i(()=>void Nt(qt)),Yt(h,`properties`,t)&&i(()=>void At(n.length>0?n:qt?[qt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Bt,pn,hn,qt,g,Ie,d,f,mn,bn,gn,U,je,h]);let G=Be&&(0,q.jsx)(hs,{confirmLabel:Be.permanent?R(`delete`):R(`move`),danger:Be.permanent,message:Be.permanent?R(`permanently_delete_target_this_cannot_be_undone`,{target:Be.paths.length===1?R(`this_item`):R(`count_items`,{count:Be.paths.length})}):R(`move_target_to_the_recycle_bin`,{target:Be.paths.length===1?R(`this_item`):R(`count_items`,{count:Be.paths.length})}),onCancel:()=>xn(!1),onConfirm:()=>xn(!0),open:!0,title:Be.permanent?R(`delete_permanently`):R(`move_to_the_recycle_bin`)}),K=(0,z.useMemo)(()=>{if(!e||je.size===0)return null;let t=Bt.find(e=>je.has(e));return t?U.find(e=>e.entry.fullPath===t)?.entry??null:null},[Bt,e,U,je]),Sn=(0,z.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:x(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:R(`type`),value:R(`folder`)},{label:R(`location`),value:e.parent??`—`},{label:R(`path`),value:e.path},{label:R(`size`),value:C(t)},{label:R(`items`),value:ae(R,n,`k_1_item`,`count_items`)},{label:R(`modified`),value:`—`},{label:R(`created`),value:`—`},{label:R(`attributes`),value:`—`}]}},[e,R]),Cn=(0,z.useMemo)(()=>{if(!K||!e)return null;let t=K.isDirectory?e.folderSizes[K.name]:void 0,n=e.tags[K.name]??[],r=K.name.lastIndexOf(`.`),i=r>0&&r<K.name.length-1?K.name.slice(r+1).toUpperCase():`—`;return{name:K.name,path:K.fullPath,isDirectory:K.isDirectory,size:K.size,modified:K.modified,created:K.created,fields:[{label:R(`type`),value:Yl(K,R)},...K.isEncrypted?[{label:R(`encryption`),value:R(`password_required`)}]:[],{label:R(`extension`),value:K.isDirectory?`—`:i},{label:R(`location`),value:e.path},{label:R(`full_path`),value:K.fullPath},{label:R(`size`),value:K.isDirectory?t===void 0?`—`:C(t):C(K.size)},...K.isDirectory?[{label:R(`items`),value:`${e.counts[K.name]??`—`}`}]:[],{label:R(`modified`),value:ie(K.modified)},{label:R(`created`),value:ie(K.created)},{label:R(`link_status`),value:K.linkTarget==null?K.linkCount>1?R(`hard_link`):`—`:K.linkValid?`ok`:R(`broken`)},...K.linkTarget?[{label:R(`target`),value:K.linkTarget}]:[],...K.linkCount>1?[{label:R(`links`),value:String(K.linkCount)}]:[],{label:R(`attributes`),value:[K.isHidden?R(`hidden`):``,K.isSystem?R(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:R(`tags`),value:n.join(`, `)}]:[]]}},[e,K,R]),wn=Ie?.paths.length===1?Ie.paths[0]:null,Tn=wn?U.find(e=>e.entry.fullPath===wn)?.entry:void 0,En=Tn?{path:Tn.fullPath,isDirectory:Tn.isDirectory}:null,Dn=Cn??Sn,On=(0,z.useRef)(N);On.current=N,(0,z.useEffect)(()=>{On.current?.(Dn)},[N,Dn]);let jn=ne&&Dn&&(0,q.jsx)(Es,{info:Dn,onWidth:Ye,selectionNote:je.size>1?ae(R,je.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:M,videoAutoplay:te,width:qe});return n&&!e?(0,q.jsx)($u,{children:(0,q.jsx)(td,{children:n})}):!e&&!t?(0,q.jsx)($u,{children:(0,q.jsx)(ed,{children:R(`nothing_selected`)})}):i.mode===`grid`?(0,q.jsxs)(gu,{onPointerDown:re,children:[(0,q.jsxs)(_u,{children:[(0,q.jsxs)(Tu,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Zt()},onContextMenu:e=>ln(e),onDragOver:sn,onDragStart:on,onDrop:cn,onScroll:e=>{oe?.(e.currentTarget),Et(e.currentTarget)},children:[p&&U.length>0&&(0,q.jsxs)(pu,{children:[(0,q.jsx)(du,{$checked:!fe&&Ht,$partial:!fe&&Ut,"aria-label":R(Ht?`select_none`:`select_all`),disabled:fe,onClick:e=>{e.stopPropagation(),Gt()},title:R(Ht?`select_none`:`select_all`),type:`button`,children:Ht?(0,q.jsx)(Wi,{size:10}):Ut?(0,q.jsx)(fu,{}):null}),(0,q.jsx)(`span`,{children:R(Ht?`select_none`:`select_all`)})]}),t&&!e?(0,q.jsx)(Au,{$size:i.gridSize,children:(0,q.jsx)(tu,{size:i.gridSize})}):(0,q.jsx)(ru,{counts:e?.counts,currentPath:rt?r.currentPath:null,groups:Ot,gridSize:i.gridSize,innerRef:B,onContextMenu:ln,onOpen:d,onOpenFile:f,onRenameCancel:vn,onRenameChange:_n,onRenameCommit:yn,onSelect:Jt,onToggle:Xt,onTogglePaths:fe?void 0:Kt,openOnSingleClick:m,renaming:He,searching:rt,selected:je,showCheckboxes:p,showTarget:at}),!t&&e&&U.length===0&&(0,q.jsx)(Qu,{children:(0,q.jsx)(ed,{children:n??(rt&&r.mode===`hide`?R(`no_entries_match_the_search`):R(`this_folder_is_empty`))})}),se]}),Ie&&(0,q.jsx)(Bo,{canPaste:Xe,directory:qt,platform:E,allowCompression:!0,menu:Ie,onAddToTray:T,onAddFavorite:ee,onRemoveFavorite:D,favoritePaths:O,onExtractArchive:k,onArchiveCreated:dn,onClose:Qt,onCompressTo:(e,t)=>ze({paths:e,name:t}),onCopy:pn,onCreateFile:e=>void hn(e),onCreateFolder:e=>void hn(null,e),onDelete:bn,onOpen:d,onOpenFile:f,onPaste:mn,onRefresh:un,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&gn(t)},shortcuts:h,target:En}),fn,G]}),jn]}):(0,q.jsxs)(gu,{onPointerDown:re,children:[(0,q.jsxs)(_u,{children:[(0,q.jsxs)(vu,{onScroll:e=>{ye.current&&ye.current.scrollLeft!==e.currentTarget.scrollLeft&&(ye.current.scrollLeft=e.currentTarget.scrollLeft)},ref:ve,style:{gridTemplateColumns:st},children:[(0,q.jsxs)(cu,{ref:lt,children:[p&&(0,q.jsx)(du,{$checked:!fe&&Ht,$partial:!fe&&Ut,"aria-label":R(Ht?`select_none`:`select_all`),disabled:fe,onClick:e=>{e.stopPropagation(),Gt()},title:R(Ht?`select_none`:`select_all`),type:`button`,children:Ht?(0,q.jsx)(Wi,{size:10}):Ut?(0,q.jsx)(fu,{}):null}),(0,q.jsxs)(yu,{onClick:()=>l(`name`),type:`button`,children:[R(`name`),Vl(i,`name`)]}),(0,q.jsx)(uu,{"aria-label":R(`resize_column`),onDoubleClick:()=>it[0]&&pt(it[0].id),onPointerDown:dt,role:`separator`})]}),it.map((e,t)=>(0,q.jsxs)(lu,{children:[(0,q.jsxs)(yu,{onClick:()=>l(e.id),type:`button`,children:[R(e.label),Vl(i,e.id)]}),t<it.length-1&&(0,q.jsx)(uu,{"aria-label":R(`resize_column`),onDoubleClick:()=>pt(e.id),onPointerDown:e=>ft(e,t),role:`separator`})]},e.id))]}),(0,q.jsxs)(bu,{onClick:e=>{e.target===e.currentTarget&&Zt()},onContextMenu:e=>ln(e),onDragOver:sn,onDragStart:on,onDrop:cn,onScroll:e=>{ve.current&&ve.current.scrollLeft!==e.currentTarget.scrollLeft&&(ve.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;Ce(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:ye,children:[t&&!e?(0,q.jsx)(eu,{template:st,columns:it.length}):(0,q.jsxs)(q.Fragment,{children:[ht>0&&(0,q.jsx)(`div`,{style:{height:ht*mt}}),bt.map(t=>{let n=t.entry.fullPath;return(0,q.jsx)(au,{current:rt&&n===r.currentPath,dim:rt&&t.ranges===null,height:mt,iconSize:i.iconSize,innerRef:B,listing:e,onContextMenu:ln,onOpen:tn,onRenameCancel:vn,onRenameChange:_n,onRenameCommit:yn,onSelect:Jt,onTagEdit:nn,onToggle:Xt,openOnSingleClick:m,renaming:He?.path===n?{value:He.value}:null,row:t,selected:je.has(n),showCheckboxes:p,showTarget:at,template:st,visible:it},n)}),vt<U.length&&(0,q.jsx)(`div`,{style:{height:(U.length-vt)*mt}})]}),!t&&e&&U.length===0&&(0,q.jsx)($u,{children:(0,q.jsx)(ed,{children:n??(rt&&r.mode===`hide`?R(`no_entries_match_the_search`):R(`this_folder_is_empty`))})})]}),a&&jt.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(xu,{onDoubleClick:nt,onPointerDown:$e,onPointerMove:et,onPointerUp:tt,title:R(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(Su,{onPointerEnter:()=>{Ee.current=!0},onPointerLeave:()=>{Ee.current=!1},style:{height:ke},children:[(0,q.jsxs)(Cu,{children:[p&&!fe&&Ft.length>0&&(0,q.jsx)(du,{$checked:Lt,$partial:Rt,"aria-label":R(Lt?`select_none`:`select_all`),disabled:fe,onClick:e=>{e.stopPropagation(),Kt(Ft,!Lt)},title:R(Lt?`select_none`:`select_all`),type:`button`,children:Lt?(0,q.jsx)(Wi,{size:10}):Rt?(0,q.jsx)(fu,{}):null}),R(`preview`),(0,q.jsx)(wu,{children:Mt>kl?`${Pt.length} / ${Mt}`:Mt})]}),(0,q.jsx)(Tu,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Zt()},onContextMenu:e=>ln(e),children:(0,q.jsx)(ru,{counts:e?.counts,currentPath:rt?r.currentPath:null,groups:zt,gridSize:i.gridSize,onContextMenu:ln,onOpen:d,onOpenFile:f,onSelect:Jt,onToggle:Xt,onTogglePaths:fe?void 0:Kt,openOnSingleClick:m,searching:rt,selected:je,showCheckboxes:p,showTarget:at})})]})]}),De&&e&&(0,q.jsx)(sc,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(De.entry.name,e,t),onClose:()=>Oe(null),tags:e.tags[De.entry.name]??[],x:De.x,y:De.y}),Ie&&(0,q.jsx)(Bo,{canPaste:Xe,directory:qt,platform:E,allowCompression:!0,menu:Ie,onAddToTray:T,onAddFavorite:ee,onRemoveFavorite:D,favoritePaths:O,onExtractArchive:k,onArchiveCreated:dn,onClose:Qt,onCompressTo:(e,t)=>ze({paths:e,name:t}),onCopy:pn,onCreateFile:e=>void hn(e),onCreateFolder:e=>void hn(null,e),onDelete:bn,onOpen:d,onOpenFile:f,onPaste:mn,onRefresh:un,onRename:e=>{let t=U.find(t=>t.entry.fullPath===e)?.entry;t&&gn(t)},shortcuts:h,target:En}),fn,G]}),jn]})}function Vl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Hl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Ul(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Yl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Hl.compare(String(r),String(i));return t.sortDescending?-o:o})}var Wl=Rn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Bn(t.entry.name)===e})),Gl=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...Wl.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function Kl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function ql(e){return Math.max(24,Math.min(e-56,160))}var Jl={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Yl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`internet_shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`folder_link`):t(`symbolic_link`);if(e.isDirectory)return t(`folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Jl[bc(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`file`)}function Xl(e,t,n,r){switch(e){case`type`:return Yl(t,r);case`size`:return Ql(t,n.folderSizes);case`modified`:return ie(t.modified);case`created`:return ie(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:r(`broken`);default:return``}}function Zl({name:e,ranges:t}){if(!t||t.length===0)return(0,q.jsx)(q.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,q.jsx)(Zu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,q.jsx)(q.Fragment,{children:n})}function Ql(e,t){if(!e.isDirectory)return C(e.size);let n=t[e.name];return n===void 0?`—`:C(n)}function $l({entry:e,size:t=18}){let n=o(),r=(0,z.useRef)(null),[i,a]=(0,z.useState)(!1);(0,z.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let s=W(i?e.fullPath:null,e.isDirectory,t>32),c=G(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,q.jsxs)(ou,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,q.jsx)(xc,{name:e.iconSource.slice(5),size:t}):c?(0,q.jsx)(`img`,{alt:``,height:t,src:c,width:t}):s?(0,q.jsx)(`img`,{alt:``,height:t,src:s,width:t}):e.isDirectory?(0,q.jsx)(Di,{size:t}):(0,q.jsx)(xc,{name:bc(e.name),size:t}),e.isEncrypted&&(0,q.jsx)(su,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,q.jsx)(Ra,{size:Math.max(8,Math.round(t*.52))})})]})}function eu({template:e,columns:t}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,q.jsxs)(ju,{style:{gridTemplateColumns:e},children:[(0,q.jsxs)(Pu,{children:[(0,q.jsx)(Mu,{style:{flexShrink:0,height:18,width:18}}),(0,q.jsx)(Mu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,q.jsx)(Mu,{style:{width:t%2==0?44:92}},t))]},r))})}function tu({size:e}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,q.jsxs)(Gu,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,q.jsx)(Ku,{children:(0,q.jsx)(Mu,{style:{height:e,width:e}})}),(0,q.jsx)(Ju,{children:(0,q.jsx)(Mu,{style:{height:9,width:`${t}%`}})})]},n))})}var nu=(0,z.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=o(),x=Gn(),S=!e.entry.isDirectory&&Vn(e.entry.name),w=(0,z.useRef)(null),[T,E]=(0,z.useState)(!1);(0,z.useEffect)(()=>{if(!S||T)return;let e=w.current;if(!e)return;if(!(`IntersectionObserver`in window)){E(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(E(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,T]);let ee=wn(S&&T?e.entry.fullPath:null,192,e.entry.modified),[D,O]=(0,z.useState)(!1),k=S&&ee!==null&&!D,A=e.entry.fullPath,j=t=>{e.entry.isDirectory?v(A,$t(t)):y?.(A,$t(t))};return(0,q.jsxs)(Gu,{$current:t,$dim:n,$image:k,$selected:c,onClick:e=>{h(e,A),u&&j(e)},onContextMenu:e=>_(e,A),onDoubleClick:e=>{u||j(e)},ref:e=>{w.current=e,t&&s&&(s.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":A,draggable:!d,children:[l&&(0,q.jsx)(hu,{$checked:c,onClick:e=>{e.stopPropagation(),g(A)},onDoubleClick:e=>e.stopPropagation(),title:b(c?`deselect`:`select`),type:`button`,children:c&&(0,q.jsx)(Wi,{size:10})}),(0,q.jsx)(Ku,{children:k?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>O(!0),src:ee}):(0,q.jsx)(qu,{children:e.place&&x.useIcons?(0,q.jsx)(ic,{place:e.place,size:r}):(0,q.jsx)($l,{entry:e.entry,size:r})})}),(0,q.jsxs)(Ju,{children:[d?(0,q.jsx)(iu,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:d.value}):(0,q.jsx)(Yu,{$broken:e.entry.linkValid===!1,children:(0,q.jsx)(Zl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,q.jsxs)(Iu,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Ra,{size:9}),b(`encrypted`)]}),e.cut&&(0,q.jsxs)(Lu,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,q.jsx)(ja,{size:9}),b(`cut`)]}),(0,q.jsx)(Xu,{children:e.entry.isDirectory?i===void 0?Yl(e.entry,b):b(`type_count_items`,{type:Yl(e.entry,b),count:i}):b(`type_size`,{type:Yl(e.entry,b),size:C(e.entry.size)})}),a&&e.entry.linkTarget&&(0,q.jsxs)(zu,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,q.jsx)(Ga,{size:9}),(0,q.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function ru({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onSelect:f,onToggle:p,onTogglePaths:m,onContextMenu:h,onOpen:g,onOpenFile:_,onRenameChange:v,onRenameCommit:y,onRenameCancel:b}){let x=o();return(0,q.jsx)(q.Fragment,{children:e.map(e=>{let o=e.rows.map(e=>e.entry.fullPath),S=o.filter(e=>c.has(e)).length,C=o.length>0&&S===o.length,w=S>0&&!C;return(0,q.jsxs)(Eu,{children:[(0,q.jsxs)(Du,{children:[l&&m&&o.length>0&&(0,q.jsx)(du,{$checked:C,$partial:w,"aria-label":x(C?`select_none`:`select_all`),onClick:e=>{e.stopPropagation(),m(o,!C)},title:x(C?`select_none`:`select_all`),type:`button`,children:C?(0,q.jsx)(Wi,{size:10}):w?(0,q.jsx)(fu,{}):null}),x(e.label),(0,q.jsx)(Ou,{children:e.rows.length}),(0,q.jsx)(ku,{})]}),(0,q.jsx)(Au,{$size:t,children:e.rows.map(e=>(0,q.jsx)(nu,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:ql(t),innerRef:s,itemCount:n?.[e.entry.name],onContextMenu:h,onOpen:g,onOpenFile:_,onSelect:f,onToggle:p,openOnSingleClick:u,onRenameCancel:b,onRenameChange:v,onRenameCommit:y,renaming:d?.path===e.entry.fullPath?d:null,row:e,selected:c.has(e.entry.fullPath),showCheckboxes:l,showTarget:r},e.entry.fullPath))})]},e.id)})})}function iu({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,z.useRef)(null);return(0,z.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,q.jsx)(Ru,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var au=(0,z.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:s,iconSize:c,height:l,template:u,visible:d,listing:f,innerRef:p,renaming:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onTagEdit:y,onRenameChange:b,onRenameCommit:x,onRenameCancel:S}){let C=o(),w=Gn(),T=e.entry.fullPath;return(0,q.jsxs)(Nu,{$current:t,$dim:n,$height:l,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{h(t,T),s&&v(e.entry,t)},onContextMenu:e=>_(e,T),onDoubleClick:t=>{s||v(e.entry,t)},ref:t?p:void 0,style:{gridTemplateColumns:u},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!m,children:[(0,q.jsxs)(Pu,{children:[i&&(0,q.jsx)(mu,{$checked:r,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:C(r?`deselect`:`select`),type:`button`,children:r&&(0,q.jsx)(Wi,{size:10})}),e.place&&w.useIcons?(0,q.jsx)(ou,{children:(0,q.jsx)(ic,{place:e.place,size:c})}):(0,q.jsx)($l,{entry:e.entry,size:c}),m?(0,q.jsx)(iu,{onCancel:S,onChange:b,onCommit:x,value:m.value}):(0,q.jsx)(Fu,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,q.jsx)(Zl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,q.jsxs)(Iu,{title:C(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Ra,{size:9}),C(`encrypted`)]}),e.cut&&(0,q.jsxs)(Lu,{title:C(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,q.jsx)(ja,{size:9}),C(`cut`)]}),a&&e.entry.linkTarget&&(0,q.jsxs)(zu,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,q.jsx)(Ga,{size:9}),(0,q.jsx)(`span`,{children:e.entry.linkTarget})]})]}),d.map(t=>(0,q.jsx)(Bu,{children:t.id===`tags`?(0,q.jsx)(Vu,{onClick:t=>{t.stopPropagation(),y(e.entry,t.clientX,t.clientY)},title:C(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=f.tagColors?.[e]??`#64748b`;return(0,q.jsx)(Hu,{$color:t,$ink:oc(t),children:e},e)}):(0,q.jsx)(Uu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,q.jsx)(Wu,{children:C(`broken`)}):Xl(t.id,e.entry,f,C)},t.id))]})}),ou=v.span`
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
`,su=v.span`
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
`,cu=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,lu=v.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,uu=v.span`
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
`,du=v.button`
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
`,fu=v.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,pu=v.div`
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
`,mu=v.button`
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
`,hu=v(mu)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,gu=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,_u=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,vu=v.div`
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
`,yu=v.button`
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
`,bu=v.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,xu=v.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Su=v.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Cu=v.div`
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
`,wu=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Tu=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Eu=v.section`
    & + & {
        margin-top: 22px;
    }
`,Du=v.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Ou=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,ku=v.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Au=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,ju=v.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Mu=v.span`
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
`,Nu=v.div`
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
`,Pu=v.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Fu=v.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Iu=v.span`
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
`,Lu=v.span`
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
`,Ru=v.input`
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
`,zu=v.span`
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
`,Bu=v.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vu=v.button`
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
`,Hu=v.span`
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
`,Uu=v.span`
    color: var(--text-muted);
    font-size: 11px;
`,Wu=v.span`
    color: #fca5a5;
`,Gu=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    overflow: hidden;
    border: 1px solid ${({$current:e,$selected:t})=>e?`rgba(var(--accent-rgb), 0.5)`:t?`rgba(var(--accent-rgb), 0.4)`:`var(--border-color)`};
    border-radius: var(--radius-lg);
    /* A picture tile has no surface of its own, so a transparent image shows the wallpaper. The
       other tiles only carry a tint: over the wallpaper an opaque card reads as a hole in the
       window, while a tinted one blends the way a list row does. */
    background: ${({$image:e,$current:t,$selected:n})=>t?`rgba(var(--accent-rgb), 0.14)`:n?`rgba(var(--accent-rgb), 0.1)`:e?`transparent`:`rgba(var(--bg-rgb), 0.24)`};
    opacity: ${({$dim:e})=>e?.3:1};
    cursor: default;
    user-select: none;
    content-visibility: auto;
    transition: background 120ms ease, border-color 120ms ease, opacity 120ms ease,
    transform 140ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 140ms ease;

    &:hover {
        background: ${({$image:e})=>e?`rgba(var(--bg-rgb), 0.2)`:`rgba(var(--bg-rgb), 0.45)`};
        border-color: var(--border-color-hover);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
        transform: translateY(-1px);
    }
`,Ku=v.div`
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
`,qu=v.span`
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
`,Ju=v.div`
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
`,Yu=v.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xu=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Zu=v.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Qu=v.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,$u=v.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,ed=v.p`
    font-size: 13px;
    color: var(--text-muted);
`,td=v.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,nd=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,rd=`/assets/bloom-BpfZWiaG.mp4`,id=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,ad=`/assets/drift-BRBSQL2_.mp4`,od=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,sd=`/assets/ember-CtSz0YxR.mp4`,cd=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],ld=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],ud=[{id:`builtin:video:drift`,name:`drift`,url:ad,poster:id},{id:`builtin:video:ember`,name:`ember`,url:sd,poster:od},{id:`builtin:video:bloom`,name:`bloom`,url:rd,poster:nd}],dd=ld.map(e=>({...e,variants:cd.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:_d(vd(e.id,t,!1)),lightUrl:_d(vd(e.id,t,!0))}))})),fd=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>cd.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:_d(yd(e.id,t,!1)),lightUrl:_d(yd(e.id,t,!0))}))),pd=new Map([...dd.flatMap(e=>e.variants),...fd].map(e=>[e.id,e])),md=new Map(ud.map(e=>[e.id,e]));function hd(e,t=`dark`){if(md.has(e))return md.get(e).url;let n=pd.get(e)??pd.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function gd(e){return md.has(e)}function _d(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function vd(e,t,n){return e===`dunes`?Ed(t,n):e===`tide`?Dd(t,n):Td(t,n)}function yd(e,t,n){return e===`skyline`?xd(t,n):e===`orbit`?Sd(t,n):bd(t,n)}function bd({accent:e,secondary:t},n){let r=wd(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=wd(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=wd(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=wd(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=wd(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${wd(t,`#ffffff`,n?.45:.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${a}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${o}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${c}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function xd({accent:e,secondary:t},n){let r=wd(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=wd(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=wd(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=wd(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${wd(e,n?`#d5deea`:`#040208`,n?.7:.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function Sd({accent:e,secondary:t},n){let r=wd(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=wd(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=wd(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${wd(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${r}"/>
            <stop offset="1" stop-color="${i}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${wd(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${wd(e,n?`#cfd9e6`:`#08050f`,n?.55:.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${wd(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function Cd(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function wd(e,t,n){let[r,i,a]=Cd(e),[o,s,c]=Cd(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Td({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${wd(e,n?`#f2f6ff`:`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${wd(t,n?`#eef2ff`:`#070b1c`,n?.86:.85)}"/>
            <stop offset="1" stop-color="${wd(e,n?`#e8f0fb`:`#04060c`,n?.9:.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${wd(e,t,.5)}" opacity="${n?.26:.42}" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="${n?.32:.5}" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="${n?.3:.42}" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="${n?.26:.36}" filter="url(#soft2)"/>
</svg>`}function Ed({accent:e,secondary:t},n){let r=wd(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=wd(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=wd(e,t,.25),o=wd(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=wd(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=wd(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1480" cy="250" r="110" fill="${wd(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${c}" opacity="${n?.5:.75}"/>
</svg>`}function Dd({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${wd(e,n?`#e6f7fb`:`#02070a`,n?.88:.9)}"/>
            <stop offset="0.5" stop-color="${wd(t,n?`#eefaf8`:`#03100f`,n?.85:.82)}"/>
            <stop offset="1" stop-color="${wd(e,n?`#dff2f7`:`#020609`,n?.9:.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${wd(e,t,.4)}" opacity="${n?.34:.5}" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var Od=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function kd(e){return Od.test(e)}function Ad({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):j(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=En(i),o=n?.startsWith(`builtin:`)?hd(n,t):r??a,s=r===null?i===null?n!==null&&gd(n):kd(i):kd(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,q.jsxs)(jd,{"aria-hidden":!0,children:[s?(0,q.jsx)(Nd,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,q.jsx)(Md,{src:o,style:{filter:c}}),(0,q.jsx)(Pd,{})]})}var jd=v.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Md=v.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Nd=v.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Pd=v.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function Fd({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let s=o(),c=(0,z.useRef)(null),[l,u]=(0,z.useState)(()=>Math.max(1,Math.ceil(n))),d=e??`delete`;return(0,z.useEffect)(()=>{c.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));u(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,uo.createPortal)((0,q.jsx)(zd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,q.jsxs)(Bd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(Vd,{children:s(`protected_folder`)}),(0,q.jsx)(Hd,{children:s(`these_paths_are_protected_by_the_safety_settings`)}),(0,q.jsx)(Ud,{children:t.map(e=>(0,q.jsxs)(Wd,{children:[(0,q.jsx)(Gd,{children:e.path}),(0,q.jsx)(Kd,{children:s(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,q.jsx)(qd,{children:Id(s,d,r??!1)}),(0,q.jsx)(Jd,{children:Ld(s,d)}),(0,q.jsx)(Yd,{children:s(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,q.jsxs)(Xd,{children:[(0,q.jsx)(Zd,{onClick:i,ref:c,type:`button`,children:s(`cancel`)}),(0,q.jsx)(Qd,{disabled:l>0,onClick:a,type:`button`,children:l>0?Rd(s,d,l):Rd(s,d,0)})]})]})}),document.body)}function Id(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function Ld(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function Rd(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var zd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${Eo}
`,Bd=v.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${xo}
`,Vd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Hd=v.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ud=v.div`
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
`,Wd=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Gd=v.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Kd=v.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,qd=v.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Jd=v.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Yd=v.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Xd=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Zd=v.button`
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
`,Qd=v.button`
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
`;function $d(){let e=o(),[t,n]=(0,z.useState)(null),r=(0,z.useRef)(null),i=(0,z.useRef)(null);(0,z.useEffect)(()=>(Za(e=>new Promise(t=>{r.current=t,n(e)})),()=>Za(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,z.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,uo.createPortal)((0,q.jsx)(ef,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,q.jsxs)(tf,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(nf,{children:e(`notice`)}),(0,q.jsx)(rf,{children:t}),(0,q.jsx)(af,{children:(0,q.jsx)(of,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var ef=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Eo}
`,tf=v.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${xo}
`,nf=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,rf=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,af=v.div`
    display: flex;
    justify-content: flex-end;
`,of=v.button`
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
`;function sf(){let e=o(),[t,n]=(0,z.useState)(null),[r,i]=(0,z.useState)(``),a=(0,z.useRef)(null),s=(0,z.useRef)(null);(0,z.useEffect)(()=>($a((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>$a(null)),[]),(0,z.useEffect)(()=>{t&&window.setTimeout(()=>s.current?.focus(),0)},[t]);let c=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let l=()=>{r.length>0&&c(r)};return(0,uo.createPortal)((0,q.jsx)(cf,{onPointerDown:e=>{e.target===e.currentTarget&&c(null)},children:(0,q.jsxs)(lf,{role:`dialog`,"aria-modal":`true`,children:[(0,q.jsx)(uf,{children:e(`archive_password`)}),(0,q.jsx)(df,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,q.jsx)(ff,{title:t.archive,children:t.archive}),(0,q.jsx)(pf,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),l()):e.key===`Escape`&&(e.preventDefault(),c(null))},ref:s,spellCheck:!1,type:`password`,value:r}),(0,q.jsxs)(mf,{children:[(0,q.jsx)(hf,{onClick:()=>c(null),type:`button`,children:e(`cancel`)}),(0,q.jsx)(gf,{disabled:r.length===0,onClick:l,type:`button`,children:e(`ok`)})]})]})}),document.body)}var cf=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${Eo}
`,lf=v.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${xo}
`,uf=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,df=v.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,ff=v.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,pf=v.input`
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
`,mf=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,hf=v.button`
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
`,gf=v(hf)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function _f({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:s,compact:c=!1,placeholder:l,onQuery:u,onPrevious:d,onNext:f,onMatchCase:p,onRegex:m,onMode:h,onClose:g,onSelectMatches:_}){let v=o(),y=(0,z.useRef)(null),b=l??v(`search_this_folder`);(0,z.useEffect)(()=>{let e=y.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[s]);let x=e=>{e(),y.current?.focus()};return(0,q.jsxs)(vf,{children:[(0,q.jsx)(Ai,{}),(0,q.jsx)(yf,{"aria-label":b,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?d():f()),e.key===`Escape`&&(e.preventDefault(),g())},placeholder:b,ref:y,spellCheck:!1,value:e}),!c&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(bf,{children:i===0?`0/0`:`${a+1}/${i}`}),_&&(0,q.jsx)(xf,{disabled:i===0,onClick:_,title:v(`select_all_matches`),type:`button`,children:(0,q.jsx)(Wi,{size:12})}),(0,q.jsx)(xf,{$chevron:!0,onClick:()=>x(d),title:v(`previous_match_shift_enter`),type:`button`,children:(0,q.jsx)(Ii,{size:12})}),(0,q.jsx)(xf,{$chevron:!0,$down:!0,onClick:()=>x(f),title:v(`next_match_enter`),type:`button`,children:(0,q.jsx)(Ii,{size:12})})]}),(0,q.jsx)(Sf,{$on:n,onClick:()=>x(p),title:v(`match_case`),type:`button`,children:`Aa`}),(0,q.jsx)(Sf,{$on:r,onClick:()=>x(m),title:v(`regular_expression`),type:`button`,children:`.*`}),!c&&(0,q.jsx)(Cf,{$on:t===`hide`,onClick:()=>x(h),title:v(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,q.jsx)(qi,{size:12}):(0,q.jsx)(Ki,{size:12})}),(0,q.jsx)(xf,{onClick:g,title:v(`close_search_esc`),type:`button`,children:(0,q.jsx)(Gi,{size:12})})]})}var vf=v.div`
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
    ${wo}
`,yf=v.input`
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
`,bf=v.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,xf=v.button`
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
`,Sf=v.button`
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
`,Cf=v(Sf)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function wf(e,t,n,r,i=[]){(0,z.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=An(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function Tf({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=o(),a=(0,z.useRef)(null),s=(0,z.useRef)(null),[c,l]=(0,z.useState)(null);return(0,z.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();l({top:t.bottom+6,left:t.left})},[]),(0,z.useLayoutEffect)(()=>{if(!c||!s.current)return;let e=s.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,c.top-e.height-12):c.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):c.left;(t!==c.top||n!==c.left)&&l({top:t,left:n})},[c]),(0,z.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{ref:a,style:{display:`none`}}),c&&(0,uo.createPortal)((0,q.jsxs)(Ef,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:s,style:{position:`fixed`,top:c.top,left:c.left},children:[Object.keys($s).map(n=>(0,q.jsx)(Df,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:$s[n](16)},n)),(0,q.jsx)(Df,{onClick:async()=>{let e=await Ja([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,q.jsx)(Ni,{size:13})}),r&&(0,q.jsx)(Df,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,q.jsx)(Gi,{size:12})})]}),document.body)]})}var Ef=v.div`
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
    ${So}
    transform-origin: top left;
`,Df=v.button`
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
`;function Of({source:e,poster:t,theme:n}){let r=j(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=En(e.startsWith(`builtin:`)||r?null:e,0,i?`.${i}`:``),o=t??hd(e,n)??(r?e:a),s=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return o?s?(0,q.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o}):(0,q.jsx)(`img`,{alt:``,src:o}):null}function kf({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,z.useRef)(null),l=(0,z.useRef)(null),u=(0,z.useRef)(!1),[d,f]=(0,z.useState)(null),[p,m]=(0,z.useState)(null),[h,g]=(0,z.useState)(0),_=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?f({width:1920,height:1080}):n>0&&r>0&&f({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},v=p&&d?Math.min(p.height,n*(p.width/d.width)):0,y=Math.max(0,(p?.height??0)-v);(0,z.useEffect)(()=>{p&&d&&!u.current&&(u.current=!0,g(Math.min(y,Math.max(0,r*y))))},[p,d,y,r]),(0,z.useEffect)(()=>{let e=()=>_();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,z.useEffect)(()=>{let e=window.requestAnimationFrame(_);return()=>window.cancelAnimationFrame(e)},[e,t]);let b=e=>{l.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},x=e=>{let t=l.current;t&&g(Math.min(y,Math.max(0,t.top+e.clientY-t.y)))},S=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,q.jsx)(Xf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,q.jsxs)(Zf,{children:[(0,q.jsxs)(Qf,{children:[(0,q.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,q.jsx)(ap,{onClick:i,title:s(`cancel`),type:`button`,children:(0,q.jsx)(Gi,{size:12})})]}),(0,q.jsx)($f,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,q.jsxs)(ep,{children:[t?(0,q.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{_(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,q.jsx)(`img`,{alt:``,draggable:!1,onLoad:_,ref:e=>{c.current=e},src:e}),v>0&&(0,q.jsx)(tp,{onPointerCancel:S,onPointerDown:b,onPointerMove:x,onPointerUp:S,style:{height:v,top:h},children:(0,q.jsx)(np,{})})]}),(0,q.jsxs)(rp,{children:[(0,q.jsx)(ip,{onClick:i,type:`button`,children:s(`cancel`)}),(0,q.jsx)(ip,{$primary:!0,onClick:()=>a(y>0?h/y:r),type:`button`,children:s(`save`)})]})]})})}var Af=150,jf=120,Mf=200,Nf=v.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Pf=v.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Ff=v.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${Mf}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Mf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Mf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Mf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Mf*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Mf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Mf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Mf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Mf*.18)}px),
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
`,If=v.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Af}px);
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
`,Lf=v.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Rf=v.section`
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
`,zf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Bf=v.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Vf=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Hf=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Uf=v.input`
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
`,Wf=v.button`
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
`,Gf=v.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Kf=v.button`
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
`,qf=v.button`
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
`,Jf=v.span`
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
`,Yf=v.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Xf=v.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Zf=v.div`
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
`,Qf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,$f=v.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,ep=v.div`
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
`,tp=v.div`
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
`,np=v.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,rp=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,ip=v.button`
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
`,ap=v.button`
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
`,op=v.button`
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
`,sp=v.div`
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
`,cp=v.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,lp=v.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,up=v.button`
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
`,dp=v.div`
    position: relative;
    display: inline-flex;
`,fp=v.div`
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
`,pp=v.button`
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
`,mp=v.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,hp=v.section`
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
`,gp=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,_p=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,vp=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,yp=v.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,bp=v.input`
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
`,xp=v.button`
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
`,Sp=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,Cp=v.div`
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
`,wp=v.span`
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
`,Tp=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,Ep=v.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dp=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,Op=v.button`
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
`,kp=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Ap=v.button`
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
`,jp=v.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Mp=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Np=v.div`
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
`,Pp=v.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Fp=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Ip=v.button`
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
`,Lp=v.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Rp=v.button`
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
`,zp=v.button`
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
`,Bp=v.button`
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
`,Vp=v.span`
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
`,Hp=v.button`
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
`,Up=v.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Wp=v.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Gp=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Kp=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,qp=v.input`
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
`,Jp=v.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Yp=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Xp=v.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zp=v.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Qp=v.button`
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
`;function $p({theme:e,places:t,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:u,onRecentCleared:d,onLayoutChanged:f,onHistoryChanged:p,onDrivesChanged:m,visibilityVersion:h=0,find:g,onSearchMatches:_,readOnly:v=!1,onPick:y,selectCards:b=!1,onSelectionChange:w,onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:O,settingsVersion:k=0,platform:A}){let M=o(),ne=Gn(),[N,ie]=(0,z.useState)(!1),[P,oe]=(0,z.useState)(null),se=P?.overviewBanner??null,I=se?.startsWith(`builtin:`)??!1,L=se?.startsWith(`url:`)?se.slice(4):j(se)?se:null,ce=I||L?``:se??``,le=I?``:L?L.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:ce.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,ue=I?gd(se):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(le),de=En(ce.length>0?ce:null,0,le?`.${le}`:``),fe=se?hd(se,e)??L??de:null,[pe,me]=(0,z.useState)(``),[he,R]=(0,z.useState)(null),[ge,B]=(0,z.useState)(!1),[_e,ve]=(0,z.useState)(null),[ye,be]=(0,z.useState)(null),[Ce,we]=(0,z.useState)(null),[Te,Ee]=(0,z.useState)([]),[De,Oe]=(0,z.useState)(null),[ke,Ae]=(0,z.useState)(``),[Me,Ne]=(0,z.useState)(null),[V,Pe]=(0,z.useState)(null),Fe=Ol(`overview`),[Ie,Le]=(0,z.useState)(null),[Re,H]=(0,z.useState)(null),ze=(0,z.useRef)(null),Be=(0,z.useRef)(null),Ve=(0,z.useRef)(null),He=(0,z.useRef)(null),Ge=(0,z.useRef)(null),Ke=Re??P?.overviewBannerHeight??220,[qe,Je]=(0,z.useState)(0),[Ye,Ze]=(0,z.useState)(null),Qe=Math.min(1,Math.max(0,P?.overviewBannerOffset??.3)),$e=Ke+Mf,et=Ye&&qe>0?Ye.height*(qe/Ye.width):$e,tt=et>0&&et<$e+240?($e+240)/et:1,nt=Math.max(1,Math.round(qe*tt)),rt=Math.max(0,et*tt-$e),it=Math.min(jf,rt/2,Math.max(20,Ke*.42)),ot=it+Qe*Math.max(0,rt-it*2),[st,ct]=(0,z.useState)(!1),lt=(e,t=!1)=>b?(Ne(e),Pe({path:e,isDirectory:t}),w?.([e]),!0):!1,ut=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),Ne(t),Pe({path:t,isDirectory:n}),Le({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,z.useEffect)(()=>(xl(`overview`,V?(e,t)=>Le({x:e,y:t,target:V}):null),()=>xl(`overview`,null)),[V]);let dt=(e,t)=>c(e,t);(0,z.useEffect)(()=>{Xe().then(oe,()=>oe(null))},[k]),(0,z.useEffect)(()=>{if(l.available)return tl().then(Ee,()=>void 0),l.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Ee(t.data.peers)})},[]),(0,z.useEffect)(()=>{let e=Ve.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,z.useEffect)(()=>{if(I&&!ue){Ze({width:1920,height:1080});return}Ze(null);let e=Ge.current;e?.complete&&e.naturalWidth>0&&Ze({width:e.naturalWidth,height:e.naturalHeight})},[se,I,ue]),(0,z.useEffect)(()=>{let e=He.current;if(!e)return;let t=()=>Je(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[P?.overviewBanner]),(0,z.useEffect)(()=>{if(!he)return;let e=()=>R(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||R(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[he]),(0,z.useEffect)(()=>{if(!ge)return;let e=()=>B(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[ge]);let ft=tc(P),pt=ft.map(e=>e.id),U=(0,z.useRef)(null),mt=e=>he?.kind===`panel`&&he.id===e,ht=e=>he?.kind===`place`&&he.id===e;(0,z.useEffect)(()=>{if(!l.available)return;let e=ft.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[ft.map(e=>e.path??e.id).join(`|`),a]),wf(U,g??null,`section`,_??(()=>void 0),[r.length,t.length,n.length,h]);let _t=async(e,t)=>{let n={...P?.placeIcons};t?n[e]=t:delete n[e],R(null),await St({placeIcons:n}),u(await je())},vt=async(e,t)=>{let n={...P?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],be(null),await St({placeNames:n}),u(await je())},yt=e=>{we(null),ve({drive:e,label:e.label||`Local Disk`})},bt=async()=>{if(!_e)return;let{drive:e,label:t}=_e;ve(null);let n=await xe(e.name,t.trim());n.ok?(we(null),m?.()):we(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},xt=P?.overviewColumns??1,St=async e=>{if(!P)return;let t={...P,...e,overviewPanels:e.overviewPanels??pt,overviewHidden:[]};oe(await at(t)),f?.()},Ct=async()=>{await St({overviewPanels:[...Xs],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),u(await je()),ie(!1)},wt=async()=>{let e=await Ja([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=P?.overviewBanners??[];await St({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},Tt=async()=>{let e=pe.trim();if(!P||!j(e))return;let t=P.overviewBanners??[];me(``),await St({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},Et=()=>void St({overviewBanner:null}),Dt=e=>void St({overviewBanners:(P?.overviewBanners??[]).filter(t=>t!==e),...P?.overviewBanner===e||P?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Ot=e=>{ze.current={y:e.clientY,height:Ke},e.currentTarget.setPointerCapture(e.pointerId)},kt=e=>{let t=ze.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Be.current=n,H(n)},At=e=>{ze.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Be.current!==null&&(St({overviewBannerHeight:Be.current}),Be.current=null)},jt=(e,t)=>{let n=pt.indexOf(e),r=n+t;if(n<0||r<0||r>=pt.length)return;let i=[...pt];[i[n],i[r]]=[i[r],i[n]],St({overviewPanels:i})},Mt=(e,t)=>{let n={...P?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],St({overviewTitles:n})},Nt=(e,t)=>void St({overviewViews:{...P?.overviewViews,[e]:t}}),Pt=e=>{let t=P?.overviewPinned??ft.filter(e=>e.pinned).map(e=>e.id);St({overviewPinned:ft.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Ft=e=>{R(null);let t=t=>{let n={...t};return delete n[e],n},n=P?.overviewPinned??ft.filter(e=>e.pinned).map(e=>e.id);St({overviewPanels:pt.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(P?.overviewTitles),overviewViews:t(P?.overviewViews),overviewIcons:t(P?.overviewIcons),panelPlaces:t(P?.panelPlaces)})},It=(e,t)=>{let n={...P?.overviewIcons};t?n[e]=t:delete n[e],R(null),St({overviewIcons:n})},Lt=async e=>{if(!P)return;if(e===`folder`){let e=await qa();if(!e)return;let t=`folder:${e}`;pt.includes(t)||await St({overviewPanels:[...pt,t]});return}if(e===`quick`){let e=2;for(;pt.includes(`quick:${e}`);)e+=1;await St({overviewPanels:[...pt,`quick:${e}`]});return}let t=e;for(let n=2;pt.includes(t);n+=1)t=`${e}:${n}`;await St({overviewPanels:[...pt,t]})},Rt=async e=>{let n=await qa();if(!n)return;if(e.id===`quick`){await St({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),u(await je());return}let r=e.places??[];r.some(e=>F(e,n))||await St({panelPlaces:{...P?.panelPlaces,[e.id]:[...r,n]}})},zt=async(e,n)=>{R(null),e.id===`quick`?(await St({quickAccess:t.filter(e=>!F(e.path,n)).map(e=>e.path)}),u(await je())):await St({panelPlaces:{...P?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!F(e,n))}})},Bt=async(e,n,r)=>{if(F(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>F(e,n)),o=i.findIndex(e=>F(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await St({quickAccess:s}),u(await je())):await St({panelPlaces:{...P?.panelPlaces,[e.id]:s}})},Vt=(e,t)=>({draggable:N,onDragOver:e=>{N&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{N&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{N&&(n.preventDefault(),Bt(e,n.dataTransfer.getData(`text/plain`),t))}}),Ht=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>F(t.path,e));return{name:P?.placeNames?.[e]??n?.name??(x(e)||e),path:e,kind:`folder`,icon:n?.icon??P?.placeIcons?.[e]??null}}),Ut=e=>{if(r.length===0)return(0,q.jsx)(Wp,{children:M(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,i);return e.view===`grid`?(0,q.jsx)(Sp,{children:t.map(e=>{let t=Kn(ne,e.path);return(0,q.jsxs)(Cp,{$plain:!1,$selected:Me===e.path,onClick:t=>{lt(e.path,e.isDirectory)||(e.isDirectory?c(e.path,$t(t)):Se(e.path))},onDoubleClick:()=>c(e.path,!1),onContextMenu:t=>ut(t,e.path,e.isDirectory),title:e.path,children:[(0,q.jsx)(wp,{children:t&&ne.useIcons?(0,q.jsx)(ic,{place:t,size:18}):(0,q.jsx)(Sc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(Tp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(Ep,{children:e.path})]})]},e.path)})}):(0,q.jsx)(Dp,{children:t.map(e=>{let t=Kn(ne,e.path);return(0,q.jsxs)(Op,{$selected:Me===e.path,onClick:t=>{lt(e.path,e.isDirectory)||(e.isDirectory?c(e.path,$t(t)):Se(e.path))},onDoubleClick:()=>c(e.path,!1),onContextMenu:t=>ut(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,q.jsx)(ic,{place:t,size:15}):(0,q.jsx)(Sc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(kp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(Ep,{children:e.path})]})]},e.path)})})},Gt=e=>{let t=P?.favorites??[],n=async e=>{await St({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>F(t.path,e))&&await St({favorites:[...t,{path:e,name:x(e)||e,isDirectory:n}]})},i=(e,t,n)=>{N||lt(t,n)||(n?c(t,$t(e)):Se(t))},a=N?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Ap,{$row:e.view===`list`,onClick:()=>void Ja().then(e=>r(e,!1)),title:M(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,q.jsx)(Ni,{size:15}):(0,q.jsx)(wp,{children:(0,q.jsx)(Ni,{size:15})}),e.view===`list`?(0,q.jsxs)(kp,{children:[(0,q.jsx)(`strong`,{children:M(`add_file`)}),(0,q.jsx)(Ep,{children:M(`pin_any_file_here`)})]}):(0,q.jsxs)(Tp,{children:[(0,q.jsx)(`strong`,{children:M(`add_file`)}),(0,q.jsx)(Ep,{children:M(`pin_any_file_here`)})]})]}),(0,q.jsxs)(Ap,{$row:e.view===`list`,onClick:()=>void qa().then(e=>r(e,!0)),title:M(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,q.jsx)(Ni,{size:15}):(0,q.jsx)(wp,{children:(0,q.jsx)(Ni,{size:15})}),e.view===`list`?(0,q.jsxs)(kp,{children:[(0,q.jsx)(`strong`,{children:M(`add_folder`)}),(0,q.jsx)(Ep,{children:M(`pin_any_folder_here`)})]}):(0,q.jsxs)(Tp,{children:[(0,q.jsx)(`strong`,{children:M(`add_folder`)}),(0,q.jsx)(Ep,{children:M(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!N?(0,q.jsx)(Wp,{children:M(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,q.jsxs)(Sp,{children:[t.map(e=>{let t=Kn(ne,e.path);return(0,q.jsxs)(Cp,{$plain:N,$selected:Me===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!N&&c(e.path,!1),onContextMenu:t=>!N&&ut(t,e.path,e.isDirectory),title:e.path,children:[N&&(0,q.jsx)(zp,{onClick:t=>{t.stopPropagation(),n(e.path)},title:M(`remove_from_favorites`),type:`button`,children:(0,q.jsx)(Gi,{size:11})}),(0,q.jsx)(wp,{children:t&&ne.useIcons?(0,q.jsx)(ic,{place:t,size:18}):(0,q.jsx)(Sc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(Tp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(Ep,{children:e.path})]})]},e.path)}),a]}):(0,q.jsxs)(Dp,{children:[t.map(e=>{let t=Kn(ne,e.path);return(0,q.jsxs)(Op,{$selected:Me===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!N&&c(e.path,!1),onContextMenu:t=>!N&&ut(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&ne.useIcons?(0,q.jsx)(ic,{place:t,size:15}):(0,q.jsx)(Sc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(kp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(Ep,{children:e.path})]}),N&&(0,q.jsx)(zp,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:M(`remove_from_favorites`),type:`button`,children:(0,q.jsx)(Gi,{size:11})})]},e.path)}),a]})},Kt=e=>{if(n.length===0)return(0,q.jsx)(Wp,{children:M(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=_e?.drive.name===t.name,i=r?(0,q.jsx)(em,{maxLength:32,onCancel:()=>ve(null),onChange:e=>ve({..._e,label:e}),onCommit:()=>void bt(),value:_e?.label??``}):(0,q.jsx)(q.Fragment,{children:re(t)}),a=!r&&N&&(0,q.jsx)(Bp,{onClick:e=>{e.stopPropagation(),yt(t)},title:M(`rename_volume`),type:`button`,children:(0,q.jsx)(ua,{size:11})}),o=(0,q.jsx)(Ep,{children:M(`free_free_of_total`,{free:C(t.freeSpace),total:C(t.totalSize)})});return e.view===`grid`?(0,q.jsxs)(Cp,{$plain:!1,$selected:Me===t.name,onClick:e=>{!r&&lt(t.name,!0)||r||c(t.name,$t(e))},onDoubleClick:()=>!r&&c(t.name,!1),onContextMenu:e=>!r&&ut(e,t.name,!0),title:t.name,children:[(0,q.jsx)(wp,{children:(0,q.jsx)(ki,{size:18})}),(0,q.jsxs)(Tp,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&te(t),a]}),o]})]},t.name):(0,q.jsxs)(Op,{as:r?`div`:`button`,$selected:Me===t.name,onClick:r?void 0:e=>{lt(t.name,!0)||c(t.name,$t(e))},onDoubleClick:r?void 0:()=>c(t.name,!1),onContextMenu:r?void 0:e=>ut(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,q.jsx)(ki,{size:18}),(0,q.jsxs)(kp,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&te(t),a]}),o]}),(0,q.jsx)(jp,{children:(0,q.jsx)(Mp,{$used:n,$tone:S(n)})})]},t.name)});return e.view===`grid`?(0,q.jsx)(Sp,{children:t}):(0,q.jsx)(Dp,{children:t})},qt=()=>{let e=async e=>{Oe(e.id);try{await nl(e.host,e.port)}finally{Oe(null)}},t=async()=>{let e=ke.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){Oe(`manual`);try{await nl(n,r)}finally{Oe(null)}}};return(0,q.jsxs)(Gp,{children:[(0,q.jsxs)(Kp,{children:[(0,q.jsx)(qp,{onChange:e=>Ae(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:M(`address_e_g_192_168_1_20_45701`),value:ke}),(0,q.jsx)(Qp,{disabled:De!==null||!ke.includes(`:`),onClick:()=>void t(),type:`button`,children:M(De===`manual`?`pairing`:`pair_by_address`)})]}),Te.length===0&&(0,q.jsx)(Wp,{children:M(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),Te.map(t=>(0,q.jsxs)(Jp,{children:[(0,q.jsxs)(Yp,{children:[(0,q.jsx)(wa,{size:14}),(0,q.jsx)(Xp,{title:t.host,children:t.name}),(0,q.jsx)(Zp,{$online:t.online,children:t.paired?t.online?M(`paired`):M(`offline`):M(`not_paired`)}),!t.paired&&t.online&&(0,q.jsx)(Qp,{disabled:De===t.id,onClick:()=>void e(t),type:`button`,children:De===t.id?M(`pairing`):M(`pair`)})]}),t.paired&&t.shares.length===0&&(0,q.jsx)(Ep,{children:M(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,q.jsxs)(Op,{onClick:n=>c(cl(t.id,e.id),$t(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,q.jsx)(wa,{size:14}),(0,q.jsxs)(kp,{children:[(0,q.jsx)(`strong`,{children:e.name}),(0,q.jsx)(Ep,{children:t.name})]}),(0,q.jsx)(Ea,{size:12})]},e.id))]},t.id))]})},Jt=e=>{switch(e.kind){case`share`:return qt();case`favorites`:return Gt(e);case`quick`:{let t=Ht(e);return!N&&t.length===0?(0,q.jsx)(Wp,{children:M(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,q.jsxs)(Sp,{children:[t.map(t=>(0,q.jsxs)(Cp,{$plain:N,$selected:Me===t.path,...Vt(e,t.path),onClick:e=>{!N&&!lt(t.path,!0)&&c(t.path,$t(e))},onDoubleClick:()=>!N&&c(t.path,!1),onContextMenu:e=>!N&&ut(e,t.path,!0),title:t.path,children:[N&&(0,q.jsx)(zp,{onClick:n=>{n.stopPropagation(),zt(e,t.path)},title:M(`remove_from_quick_access`),type:`button`,children:(0,q.jsx)(Gi,{size:11})}),(0,q.jsxs)(Lp,{children:[N?(0,q.jsx)(Rp,{onClick:e=>{e.stopPropagation(),R(ht(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:M(`change_icon`),type:`button`,children:(0,q.jsx)(wp,{children:(0,q.jsx)(ic,{place:t})})}):(0,q.jsx)(wp,{children:(0,q.jsx)(ic,{place:t})}),ht(t.path)&&(0,q.jsx)(Tf,{onPick:e=>void _t(t.path,e),value:P?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(Tp,{children:[ye?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(em,{onCancel:()=>be(null),onChange:e=>be({path:t.path,name:e}),onCommit:()=>void vt(t.path,ye?.name??``),value:ye?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,N&&(0,q.jsx)(Bp,{onClick:e=>{e.stopPropagation(),R(null),be({path:t.path,name:t.name})},title:M(`rename_folder`),type:`button`,children:(0,q.jsx)(ua,{size:11})})]}),(0,q.jsx)(Ep,{children:t.path})]})]},t.path)),N&&(0,q.jsxs)(Ap,{onClick:()=>void Rt(e),title:M(`pin_a_folder_here`),type:`button`,children:[(0,q.jsx)(wp,{children:(0,q.jsx)(Ni,{size:15})}),(0,q.jsxs)(Tp,{children:[(0,q.jsx)(`strong`,{children:M(`add_folder`)}),(0,q.jsx)(Ep,{children:M(`pin_a_directory_here`)})]})]})]}):(0,q.jsxs)(Dp,{children:[t.map(t=>(0,q.jsxs)(Op,{$selected:Me===t.path,...Vt(e,t.path),onClick:e=>{!N&&!lt(t.path,!0)&&c(t.path,$t(e))},onDoubleClick:()=>!N&&c(t.path,!1),onContextMenu:e=>!N&&ut(e,t.path,!0),title:t.path,type:`button`,children:[(0,q.jsxs)(Lp,{children:[N?(0,q.jsx)(Rp,{onClick:e=>{e.stopPropagation(),R(ht(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:M(`change_icon`),type:`button`,children:(0,q.jsx)(ic,{place:t,size:15})}):(0,q.jsx)(ic,{place:t,size:15}),ht(t.path)&&(0,q.jsx)(Tf,{onPick:e=>void _t(t.path,e),value:P?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(kp,{children:[ye?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(em,{onCancel:()=>be(null),onChange:e=>be({path:t.path,name:e}),onCommit:()=>void vt(t.path,ye?.name??``),value:ye?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,N&&(0,q.jsx)(Bp,{onClick:e=>{e.stopPropagation(),R(null),be({path:t.path,name:t.name})},title:M(`rename_folder`),type:`button`,children:(0,q.jsx)(ua,{size:11})})]}),(0,q.jsx)(Ep,{children:t.path})]}),N&&(0,q.jsx)(zp,{$inline:!0,onClick:n=>{n.stopPropagation(),zt(e,t.path)},title:M(`remove_from_quick_access`),type:`button`,children:(0,q.jsx)(Gi,{size:11})})]},t.path)),N&&(0,q.jsxs)(Ap,{$row:!0,onClick:()=>void Rt(e),title:M(`pin_a_folder_here`),type:`button`,children:[(0,q.jsx)(Ni,{size:15}),(0,q.jsxs)(kp,{children:[(0,q.jsx)(`strong`,{children:M(`add_folder`)}),(0,q.jsx)(Ep,{children:M(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,q.jsx)(tm,{mode:e.view,onContextMenu:ut,onOpen:c,onSelectionChange:w,selectCards:b,version:s});case`recent`:return Ut(e);case`drives`:return Kt(e);default:return(0,q.jsx)(nm,{mode:e.view,onContextMenu:ut,onOpen:c,onPick:y,onSelectionChange:w,selectCards:b,openOnSingleClick:P?.openOnSingleClick??!1,path:e.path??a,platform:A,selectionMenuId:`overview:${e.id}`,showCheckboxes:P?.showCheckboxes??!0,visibilityVersion:h})}};return(0,q.jsxs)(Nf,{$flush:!!P?.overviewBanner,ref:Ve,children:[!v&&(0,q.jsxs)(sp,{$overlay:!!P?.overviewBanner,children:[(0,q.jsx)(cp,{role:`group`,title:M(`columns`),children:[1,2,3,4,5].map(e=>(0,q.jsx)(lp,{$active:xt===e,onClick:()=>void St({overviewColumns:e}),title:ae(M,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),N&&(0,q.jsxs)(dp,{children:[(0,q.jsxs)(up,{onClick:()=>B(e=>!e),onPointerDown:e=>e.stopPropagation(),title:M(`add_a_panel`),type:`button`,children:[(0,q.jsx)(Ni,{size:12}),M(`add_panel`)]}),ge&&(0,q.jsx)(fp,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,q.jsx)(pp,{onClick:()=>{B(!1),Lt(e)},type:`button`,children:M(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),N&&(0,q.jsxs)(up,{onClick:()=>void Ct(),title:M(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,q.jsx)(Mi,{size:12}),M(`restore_default_panels`)]}),Fe.available&&(0,q.jsx)(xp,{onClick:e=>Fe.open(e.clientX,e.clientY),title:M(`selection_menu`),type:`button`,children:(0,q.jsx)(La,{size:14})}),(0,q.jsxs)(up,{onClick:()=>{ie(e=>!e),B(!1),R(null),be(null),ve(null)},title:M(N?`done`:`edit`),type:`button`,children:[N?(0,q.jsx)(Wi,{size:13}):(0,q.jsx)(ua,{size:13}),M(N?`done`:`edit`)]})]}),Ce&&(0,q.jsx)(Up,{children:Ce}),P?.overviewBanner&&(0,q.jsxs)(Pf,{ref:He,style:{height:`${Ke}px`,"--banner-image-width":`${nt}px`,"--banner-image-shift":`${ot}px`,"--banner-travel":`${it}px`,"--banner-overlap":`0px`},children:[(0,q.jsx)(Ff,{children:ue?(0,q.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Ze({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:fe??void 0}):(0,q.jsx)(`img`,{alt:``,onLoad:e=>{let t=I?1920:e.currentTarget.naturalWidth||1920,n=I?1080:e.currentTarget.naturalHeight||1080;Ze({width:t,height:n})},ref:Ge,src:fe??void 0})}),N&&(0,q.jsx)(If,{onDoubleClick:()=>{Be.current=null,H(null),St({overviewBannerHeight:220})},onPointerCancel:At,onPointerDown:Ot,onPointerMove:kt,onPointerUp:At,title:M(`drag_to_resize_double_click_to_reset`)})]}),(0,q.jsxs)(Lf,{$offset:P?.overviewBanner?100:0,children:[N&&(0,q.jsxs)(Rf,{children:[(0,q.jsxs)(zf,{children:[(0,q.jsx)(Bf,{children:M(`banners`)}),P?.overviewBanner&&(0,q.jsxs)(up,{onClick:()=>ct(!0),title:M(`adjust_framing`),type:`button`,children:[(0,q.jsx)(ua,{size:12}),M(`adjust_framing`)]})]}),(0,q.jsxs)(Vf,{children:[(0,q.jsx)(Gf,{children:(0,q.jsx)(Kf,{$active:!P?.overviewBanner,onClick:Et,title:M(`no_banner`),type:`button`,children:(0,q.jsxs)(Yf,{children:[(0,q.jsx)(Gi,{size:16}),(0,q.jsx)(`span`,{children:M(`no_banner`)})]})})}),fd.map(t=>(0,q.jsx)(Gf,{children:(0,q.jsx)(Kf,{$active:P?.overviewBanner===t.id,onClick:()=>void St({overviewBanner:t.id}),title:`${M(t.concept)} · ${M(t.preset)}`,type:`button`,children:(0,q.jsx)(Of,{source:t.id,theme:e})})},t.id)),ud.map(t=>(0,q.jsx)(Gf,{children:(0,q.jsxs)(Kf,{$active:P?.overviewBanner===t.id,onClick:()=>void St({overviewBanner:t.id}),title:M(t.name),type:`button`,children:[(0,q.jsx)(Of,{poster:t.poster,source:t.id,theme:e}),(0,q.jsx)(Jf,{children:(0,q.jsx)(Qi,{size:11})})]})},t.id)),(P?.overviewBanners??[]).map(t=>(0,q.jsxs)(Gf,{children:[(0,q.jsx)(Kf,{$active:P?.overviewBanner===t||P?.overviewBanner===`url:${t}`,onClick:()=>void St({overviewBanner:j(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,q.jsx)(Of,{source:t,theme:e})}),(0,q.jsx)(qf,{onClick:()=>Dt(t),title:M(`remove`),type:`button`,children:(0,q.jsx)(Gi,{size:10})})]},t)),(0,q.jsxs)(op,{onClick:()=>void wt(),title:M(`add_banner`),type:`button`,children:[(0,q.jsx)(Ni,{size:18}),(0,q.jsx)(`span`,{children:M(`add_banner`)})]})]}),(0,q.jsxs)(Hf,{children:[(0,q.jsx)(Uf,{onChange:e=>me(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Tt()},placeholder:`https://…`,value:pe}),(0,q.jsx)(Wf,{disabled:!j(pe),onClick:()=>void Tt(),type:`button`,children:M(`add_url`)})]})]}),(0,q.jsx)(mp,{ref:U,$columns:xt,children:ft.map(e=>{let t=pt.indexOf(e.id);return(0,q.jsxs)(hp,{children:[(0,q.jsxs)(gp,{children:[(0,q.jsxs)(_p,{children:[(0,q.jsxs)(Lp,{children:[N?(0,q.jsx)(Rp,{onClick:()=>R(mt(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:M(`change_icon`),type:`button`,children:(0,q.jsx)(rc,{panel:e,size:15})}):(0,q.jsx)(rc,{panel:e,size:15}),mt(e.id)&&(0,q.jsx)(Tf,{onPick:t=>It(e.id,t),value:e.icon})]}),N?(0,q.jsx)(bp,{defaultValue:e.title,onBlur:t=>Mt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,q.jsx)(yp,{children:M(e.title)})]}),(0,q.jsxs)(vp,{children:[!N&&e.kind===`recent`&&(0,q.jsx)(up,{onClick:()=>void Ue().then(d),title:M(`clear`),type:`button`,children:M(`clear`)}),!N&&e.kind===`frequent`&&(0,q.jsx)(up,{onClick:()=>void We().then(()=>p?.()),title:M(`clear_the_frequent_list`),type:`button`,children:M(`clear`)}),!N&&(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(up,{onClick:()=>c(e.path??a),title:M(`open_folder`),type:`button`,children:M(`open`)}),N&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(xp,{$active:e.pinned,onClick:()=>Pt(e.id),title:e.pinned?M(`unpin_from_the_sidebar`):M(`pin_to_the_sidebar`),type:`button`,children:(0,q.jsx)(Ri,{size:12})}),(0,q.jsx)(xp,{$active:e.view===`list`,onClick:()=>Nt(e.id,`list`),title:M(`list`),type:`button`,children:(0,q.jsx)(zi,{size:13})}),(0,q.jsx)(xp,{$active:e.view===`grid`,onClick:()=>Nt(e.id,`grid`),title:M(`grid`),type:`button`,children:(0,q.jsx)(Bi,{size:13})}),(0,q.jsx)(xp,{disabled:t===0,onClick:()=>jt(e.id,-1),title:M(`move_up`),type:`button`,children:(0,q.jsx)(ji,{size:12})}),(0,q.jsx)(xp,{disabled:t===pt.length-1,onClick:()=>jt(e.id,1),title:M(`move_down`),type:`button`,children:(0,q.jsx)(ji,{size:12})}),(0,q.jsx)(xp,{onClick:()=>Ft(e.id),title:M(`remove_panel`),type:`button`,children:(0,q.jsx)(Gi,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Jt(e):(0,q.jsx)(Pp,{children:Jt(e)})]},e.id)})})]}),st&&fe&&(0,q.jsx)(kf,{height:Ke,offset:Qe,onCancel:()=>ct(!1),onSave:e=>{St({overviewBannerOffset:e}),ct(!1)},source:fe,video:ue}),Ie&&(0,q.jsx)(Bo,{directory:a,menu:{x:Ie.x,y:Ie.y,paths:[Ie.target.path]},onClose:()=>Le(null),onCopy:(e,t)=>void gt(e,t),onAddToTray:T,onAddFavorite:E,onRemoveFavorite:ee,favoritePaths:D,onExtractArchive:O,onOpen:dt,onOpenFile:e=>y?y(e):void Se(e),shortcuts:Wt,target:Ie.target})]})}function em({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,q.jsxs)(Vp,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,q.jsx)(Hp,{onClick:r,title:a(`cancel`),type:`button`,children:(0,q.jsx)(Gi,{size:11})}),(0,q.jsx)(Hp,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,q.jsx)(Wi,{size:12})})]})}function tm({mode:e,onOpen:t,onContextMenu:n,onSelectionChange:r,selectCards:i=!1,version:a}){let s=o(),[c,l]=(0,z.useState)(null),[u,d]=(0,z.useState)(null),f=Gn(),p=e=>i?(d(e),r?.([e]),!0):!1;if((0,z.useEffect)(()=>{Ve().then(l,()=>l([]))},[a]),!c)return(0,q.jsx)(Wp,{children:s(`reading`)});if(c.length===0)return(0,q.jsx)(Wp,{children:s(`folders_you_open_often_show_up_here`)});let m=e=>ae(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,q.jsx)(Sp,{children:c.map(e=>{let r=Kn(f,e.path);return(0,q.jsxs)(Cp,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,$t(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,q.jsx)(wp,{children:r&&f.useIcons?(0,q.jsx)(ic,{place:r,size:18}):(0,q.jsx)(Sc,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(Tp,{children:[(0,q.jsx)(`strong`,{children:r?.name||e.name}),(0,q.jsx)(Ep,{children:m(e)})]})]},e.path)})}):(0,q.jsx)(Dp,{children:c.map(e=>{let r=Kn(f,e.path);return(0,q.jsxs)(Op,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,$t(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[r&&f.useIcons?(0,q.jsx)(ic,{place:r,size:15}):(0,q.jsx)(Sc,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,q.jsxs)(kp,{children:[(0,q.jsx)(`strong`,{children:r?.name||e.name}),(0,q.jsx)(Ep,{children:m(e)})]})]},e.path)})})}function nm({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectCards:s=!1,selectionMenuId:c,showCheckboxes:u,openOnSingleClick:d,visibilityVersion:f,platform:p}){let m=o(),[h,g]=(0,z.useState)(null),[_,v]=(0,z.useState)(null),y=Gn();return(0,z.useEffect)(()=>{e&&(g(null),Ce(e).then(g,()=>g(null)))},[e,f]),(0,z.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&F(n.data.path,e)&&Ce(e,!1).then(g,()=>void 0)})},[e]),h?t===`list`?(0,q.jsx)(Np,{children:(0,q.jsx)(Bl,{platform:p,error:null,listing:h,loading:!1,onOpen:n,onOpenFile:i??(e=>void Se(e)),onRefresh:()=>void Ce(e,!1).then(g,()=>void 0),onRename:(e,t)=>g(n=>n&&{...n,entries:n.entries.map(n=>F(n.fullPath,e)?{...n,name:x(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:c,onSort:()=>void 0,openOnSingleClick:d,enableShortcuts:!1,showCheckboxes:u,showDetails:!1,showImages:!1,view:{...ye,columns:be.columns??[]}})}):(0,q.jsx)(Pp,{children:h.entries.length===0?(0,q.jsx)(Wp,{children:m(`this_folder_is_empty`)}):(0,q.jsx)(Fp,{children:h.entries.map(e=>{let t=Kn(y,e.fullPath);return(0,q.jsxs)(Ip,{$selected:_===e.fullPath,onClick:t=>{s?(v(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,$t(t)):Se(e.fullPath)},onDoubleClick:()=>e.isDirectory?n(e.fullPath,!1):i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&y.useIcons?(0,q.jsx)(ic,{place:t,size:16}):(0,q.jsx)(Sc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,q.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,q.jsx)(Wp,{children:m(`reading`)})}var rm=`yafm://`,im={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function am(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function om(e){return`${rm}${e===`home`?`overview`:e}`}function sm(e){return am(e)?im[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function cm(e){let t=e.trim();if(t.length===0)return null;if(!am(t))return t;let n=im[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?om(n):null}function lm({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let s=o(),c=Gn(),[l,u]=(0,z.useState)(!1),[d,f]=(0,z.useState)(``),[p,m]=(0,z.useState)([]),[h,g]=(0,z.useState)(0),[_,v]=(0,z.useState)(null),[y,b]=(0,z.useState)(null),[x,S]=(0,z.useState)(null),C=(0,z.useRef)(null),w=(0,z.useRef)(null),T=(0,z.useRef)(0);(0,z.useEffect)(()=>{if(!ol(e)){S(null);return}let t=sl(e);if(!t){S(null);return}let n=!0;return el().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);S({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&S(null)),()=>{n=!1}},[e]),(0,z.useEffect)(()=>{l||f(e.replace(/\\/g,`/`))},[e,l]),(0,z.useEffect)(()=>{r&&r!==T.current&&(T.current=r,f(e.replace(/\\/g,`/`)),u(!0))},[r,e]),(0,z.useEffect)(()=>{l&&C.current?.select()},[l]),(0,z.useEffect)(()=>{if(!l)return;let e=()=>u(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[l]);let E=()=>{f(e.replace(/\\/g,`/`)),u(!0)},ee=t=>{let n=d.trim(),r=!!(t?.ctrlKey||t?.metaKey);u(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,z.useEffect)(()=>{if(!l){m([]);return}let e=pm(d);if(!e){m([]);return}let t=!1,n=window.setTimeout(()=>{Ce(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));m(i),g(0)},()=>{t||m([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[d,l]);let D=(e,t=!1)=>{u(!1),i(e.path,t)};if((0,z.useLayoutEffect)(()=>{if(!l){v(null);return}let e=()=>{let e=w.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);v({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[l]),l)return(0,q.jsxs)(ym,{onPointerDown:e=>e.stopPropagation(),ref:w,children:[(0,q.jsxs)(Cm,{children:[(0,q.jsx)(`input`,{onChange:e=>f(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&p.length>0)e.preventDefault(),g(e=>(e+1)%p.length);else if(e.key===`ArrowUp`&&p.length>0)e.preventDefault(),g(e=>(e-1+p.length)%p.length);else if(e.key===`Tab`&&p.length>0){e.preventDefault();let t=p[Math.min(h,p.length-1)];f(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?p.length>0?D(p[Math.min(h,p.length-1)],e.ctrlKey||e.metaKey):ee(e):e.key===`Escape`&&(p.length>0?m([]):u(!1))},ref:C,spellCheck:!1,value:d}),(0,q.jsx)(wm,{onClick:()=>u(!1),title:s(`cancel`),type:`button`,children:(0,q.jsx)(Gi,{size:12})}),(0,q.jsx)(wm,{$apply:!0,onClick:ee,onPointerDown:e=>e.stopPropagation(),title:s(`open_this_path`),type:`button`,children:(0,q.jsx)(Wi,{size:14})})]}),p.length>0&&_&&(0,uo.createPortal)((0,q.jsx)(bm,{onPointerDown:e=>e.stopPropagation(),style:{left:_.left,top:_.top,width:_.width},children:p.map((e,t)=>(0,q.jsxs)(xm,{$active:t===h,onClick:t=>D(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>g(t),type:`button`,children:[(0,q.jsx)(Sc,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,q.jsx)(Sm,{children:e.name})]},e.path))}),document.body)]});let O=t?[{label:t,path:e,icon:n}]:um(e,x)??fm(e,c.places);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(mm,{onClick:E,title:s(`click_to_type_a_path`),children:O.map((t,n)=>(0,q.jsxs)(hm,{$last:n===O.length-1,children:[n>0&&(0,q.jsx)(_m,{children:(0,q.jsx)(Ii,{size:9})}),(0,q.jsxs)(vm,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):b({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,q.jsx)(gm,{children:(0,q.jsx)(ic,{place:t.place,size:13})}):t.icon&&(0,q.jsx)(gm,{children:t.icon}),t.label]})]},t.path))}),y&&(0,q.jsx)(Oo,{items:[{label:s(`open`),icon:(0,q.jsx)(Fi,{size:14}),onSelect:()=>i(y.path)},{label:s(`open_in_new_tab`),icon:(0,q.jsx)(Ni,{size:14}),onSelect:()=>i(y.path,!0)},{label:s(`copy_as_path`),icon:(0,q.jsx)(Aa,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(y.path)},...am(y.path)?[{label:s(`open_with`),icon:(0,q.jsx)(na,{size:14}),onSelect:()=>void Mt(y.path)},{label:s(`properties`),icon:(0,q.jsx)(Li,{size:14}),onSelect:()=>void At([y.path])}]:[]],onClose:()=>b(null),x:y.x,y:y.y})]})}function um(e,t){let n=sl(e);if(!n)return null;let r=cl(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,q.jsx)(wa,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function dm(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function fm(e,t){let n=dm(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>F(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function pm(e){if(am(e)||ol(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var mm=v.div`
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
`,hm=v.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,gm=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,_m=v.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,vm=v.button`
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
`,ym=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,bm=v.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${fo}
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
`,xm=v.button`
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
`,Sm=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cm=v.div`
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
`,wm=v.button`
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
`,Tm=v.button`
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
`,Em=v.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Dm=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,q.jsx)(`path`,{d:`M4 4v6h6`})]});function Om({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,onShowDetails:i,onPreviewChange:a,platform:s,toolbarSlot:c,onStatusChange:l}){let u=o(),d=El(`recycle`),f=s===`windows`,[p,m]=(0,z.useState)([]),[h,g]=(0,z.useState)([]),[_,v]=(0,z.useState)(!1),[y,b]=(0,z.useState)(null),[x,S]=(0,z.useState)(!0),[w,T]=(0,z.useState)(!1),[E,ee]=(0,z.useState)(null),[D,O]=(0,z.useState)(!1),[k,A]=(0,z.useState)(()=>new Set),[j,M]=(0,z.useState)(null),[te,ne]=(0,z.useState)(()=>{let e=ir(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[N,re]=(0,z.useState)(null),[P,oe]=(0,z.useState)(null),F=(0,z.useRef)(null),se=(0,z.useCallback)(async()=>{S(!0),ee(null);try{m(await Ne(D))}catch(e){ee(e instanceof Error?e.message:String(e))}finally{S(!1)}},[D]),I=(0,z.useCallback)(async()=>{try{m(await Ne(D))}catch{}},[D]);(0,z.useEffect)(()=>{se()},[se]),(0,z.useEffect)(()=>{let e=window.setInterval(()=>void I(),1e4);return()=>window.clearInterval(e)},[I]),(0,z.useEffect)(()=>{D||(g([]),v(!1),b(null))},[D]),(0,z.useEffect)(()=>{A(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let L=(0,z.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=km(e,t,te.column);return te.descending?-n:n})},[p,h,te]),ce=(0,z.useMemo)(()=>!t?.open||t.query.trim().length===0?L:L.filter(e=>Ln(e.name,t)||Ln(e.originalPath,t)),[L,t?.open,t?.query,t?.matchCase,t?.regex]),le=t?.open&&t.query.trim().length>0?ce.length===0:L.length===0,ue=(0,z.useRef)(null);wf(ue,t??null,`[data-search-block]`,n??(()=>void 0),[L]),(0,z.useEffect)(()=>{A(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,z.useEffect)(()=>{r&&A(new Set(ce.map(e=>e.id)))},[r]);let de=(0,z.useMemo)(()=>L.filter(e=>k.has(e.id)),[L,k]),fe=de.filter(e=>e.removable&&!e.isOrphan),pe=de.filter(e=>e.removable),me=(e,t)=>{let n=t.ctrlKey||t.metaKey;A(r=>{if(t.shiftKey&&j){let t=L.findIndex(e=>e.id===j),i=L.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(L[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),M(e.id)},he=(0,z.useCallback)(()=>A(new Set(ce.map(e=>e.id))),[ce]),R=ce.length>0&&ce.every(e=>k.has(e.id)),ge=(0,z.useCallback)(async()=>{let e=fe.map(e=>e.id);if(e.length!==0){T(!0);try{let t=await Fe(e);t.ok||await Qa(ae(u,e.length,`restored_done_of_1_item`,`restored_done_of_total_items`,{done:t.done,total:e.length})),A(new Set),await se()}finally{T(!1)}}},[se,fe,u]),B=(0,z.useCallback)(async()=>{let e=pe.map(e=>e.id);if(oe(null),e.length!==0){T(!0);try{let t=await Ie(e);!t.ok&&!t.cancelled&&await Qa(ae(u,e.length,`deleted_done_of_1_item`,`deleted_done_of_total_items`,{done:t.done,total:e.length})),A(new Set),await se()}finally{T(!1)}}},[pe,se,u]),_e=async()=>{oe(null),T(!0);try{await Pe(D),A(new Set),await se()}finally{T(!1)}},ve=async()=>{T(!0),b(null);try{let e=await Re();if(e.cancelled){b(`Elevation was declined — nothing was read.`);return}if(e.failed){b(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),v(!0)}finally{T(!1)}},ye=async()=>{T(!0),oe(null);try{await H(),g([]),v(!1),b(null),await se()}finally{T(!1)}},be=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},xe=e=>{navigator.clipboard.writeText(e.originalPath)},Se=(e,t)=>{e.preventDefault(),t&&!k.has(t.id)&&A(new Set([t.id])),re({x:e.clientX,y:e.clientY})};(0,z.useEffect)(()=>(xl(`recycle`,k.size>0?(e,t)=>re({x:e,y:t}):null),()=>xl(`recycle`,null)),[k]),(0,z.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),he()):e.key===`delete`?(e.preventDefault(),pe.length>0&&oe(`delete`)):e.key===`Enter`&&fe.length>0?(e.preventDefault(),ge()):e.key===`Escape`&&(A(new Set),re(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[pe.length,fe.length,ge,he]);let Ce=[{label:u(`restore`),icon:(0,q.jsx)(Dm,{width:14,height:14}),disabled:fe.length===0,onSelect:()=>void ge()},{label:u(`delete_permanently`),icon:(0,q.jsx)(Ui,{size:14}),danger:!0,disabled:pe.length===0,onSelect:()=>oe(`delete`)},{label:u(`properties`),icon:(0,q.jsx)(Li,{size:14}),disabled:de.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=de;e&&Le(e.id)}},{label:u(`open_original_location`),icon:(0,q.jsx)(Di,{size:14}),disabled:de.length!==1,onSelect:()=>{let[e]=de;e&&be(e)}},{label:u(`copy_original_path`),icon:(0,q.jsx)(Aa,{size:14}),disabled:de.length!==1,onSelect:()=>{let[e]=de;e&&xe(e)}},{label:u(`select_all`),separatorBefore:!0,onSelect:he},{label:u(`refresh`),icon:(0,q.jsx)(Mi,{size:14}),onSelect:()=>void se()}],we=de.length>0?de[0]:null,Te=we?{name:we.name,path:we.contentPath||we.originalPath,isDirectory:we.isDirectory,size:we.size,modified:we.deleted,fields:[{label:u(`type`),value:u(jm(we))},{label:u(`original_location`),value:we.originalPath},{label:u(`date_deleted`),value:ie(we.deleted)},{label:u(`size`),value:we.isDirectory?`—`:C(we.size)},...we.owner?[{label:u(`owner`),value:we.owner}]:[],{label:u(`status`),value:we.isOrphan?u(`metadata_only`):we.removable?u(`restorable`):u(`other_profile`)}]}:null,Ee=de.length>1?ae(u,de.length,`k_1_item_selected`,`count_items_selected`):void 0,De=(0,z.useRef)(``);(0,z.useEffect)(()=>{let e=`${Te?.path??``}|${Te?.modified??0}|${Ee??``}`;De.current!==e&&(De.current=e,a?.(Te,Ee))},[Te,Ee,a]);let Oe=x?u(`reading`):ae(u,L.length,`k_1_item`,`count_items`)+(k.size>0?` · ${u(`count_selected`,{count:k.size})}`:``);return(0,z.useEffect)(()=>{l?.(Oe)},[Oe,l]),(0,q.jsxs)(Nm,{ref:F,onContextMenu:e=>Se(e),children:[c&&(0,uo.createPortal)((0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Em,{}),(0,q.jsx)(Pm,{$on:D,onClick:()=>O(e=>!e),title:u(`show_metadata_records_whose_content_is_already_gone`),type:`button`,children:(0,q.jsx)(Ki,{size:16})}),D&&f&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Tm,{disabled:w||_,onClick:()=>void ve(),title:u(_?`the_administrator_view_is_already_loaded`:`ask_for_administrator_rights_and_list_every_profile_s_leftovers`),type:`button`,children:(0,q.jsx)(Ra,{size:16})}),_&&h.length>0&&(0,q.jsx)(Fm,{disabled:w,onClick:()=>oe(`purge`),title:u(`delete_every_orphan`),type:`button`,children:(0,q.jsx)(Wa,{size:16})})]}),(0,q.jsx)(Tm,{disabled:w||fe.length===0,onClick:()=>void ge(),title:u(`restore`),type:`button`,children:(0,q.jsx)(Dm,{height:16,width:16})}),(0,q.jsx)(Fm,{disabled:w||pe.length===0,onClick:()=>oe(`delete`),title:u(`delete`),type:`button`,children:(0,q.jsx)(Ui,{size:16})}),(0,q.jsx)(Fm,{disabled:w||L.length===0,onClick:()=>oe(`empty`),title:u(`empty`),type:`button`,children:(0,q.jsx)(Ua,{size:16})}),(0,q.jsx)(Tm,{onClick:()=>void se(),title:u(`refresh`),type:`button`,children:(0,q.jsx)(Mi,{size:16})}),d.available&&(0,q.jsx)(Tm,{onClick:e=>d.open(e.clientX,e.clientY),title:u(`selection_menu`),type:`button`,children:(0,q.jsx)(La,{size:16})})]}),c),y&&(0,q.jsx)(nh,{children:y}),E&&(0,q.jsx)(rh,{children:E}),!E&&(0,q.jsx)(th,{children:(0,q.jsxs)(Im,{ref:ue,children:[(0,q.jsxs)(Rm,{children:[(0,q.jsx)(Wm,{$checked:R,$partial:!R&&k.size>0,onClick:()=>R?A(new Set):he(),title:u(R?`select_none`:`select_all`),type:`button`,children:R?(0,q.jsx)(Wi,{size:9}):k.size>0&&(0,q.jsx)(Gm,{})}),(0,q.jsxs)(zm,{onClick:()=>ke(`name`),type:`button`,children:[u(`name`),Am(te,`name`)]}),(0,q.jsxs)(zm,{onClick:()=>ke(`original`),type:`button`,children:[u(`original_location`),Am(te,`original`)]}),(0,q.jsxs)(zm,{onClick:()=>ke(`deleted`),type:`button`,children:[u(`date_deleted`),Am(te,`deleted`)]}),(0,q.jsxs)(zm,{onClick:()=>ke(`size`),type:`button`,children:[u(`size`),Am(te,`size`)]}),(0,q.jsxs)(zm,{onClick:()=>ke(`type`),type:`button`,children:[u(`type`),Am(te,`type`)]}),(0,q.jsx)(`span`,{})]}),(0,q.jsxs)(Bm,{onClick:e=>{e.target===e.currentTarget&&A(new Set)},children:[!x&&le&&(0,q.jsx)(rh,{children:t?.open&&t.query.trim().length>0?u(`no_matching_items`):u(`the_recycle_bin_is_empty`)}),L.map(e=>(0,q.jsxs)(Vm,{$checked:k.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>me(e,t),onContextMenu:t=>Se(t,e),onDoubleClick:()=>{A(new Set([e.id])),M(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,q.jsx)(Um,{$checked:k.has(e.id),children:k.has(e.id)&&(0,q.jsx)(Wi,{size:9})}),(0,q.jsxs)(Km,{children:[(0,q.jsx)(Mm,{entry:e}),(0,q.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,q.jsx)(eh,{children:u(`metadata_only`)}),e.owner&&(0,q.jsx)(eh,{$other:!0,children:u(`other_profile`)})]}),(0,q.jsx)(Jm,{children:e.originalPath}),(0,q.jsx)(Ym,{children:ie(e.deleted)}),(0,q.jsx)(Xm,{children:e.isDirectory?`—`:C(e.size)}),(0,q.jsx)(Zm,{children:u(jm(e))}),(0,q.jsxs)(Qm,{children:[e.removable&&!e.isOrphan&&(0,q.jsx)($m,{onClick:t=>{t.stopPropagation(),Fe([e.id]).then(se)},title:u(`restore_to_its_original_folder`),type:`button`,children:(0,q.jsx)(Dm,{})}),e.removable&&(0,q.jsx)($m,{$danger:!0,onClick:t=>{t.stopPropagation(),A(new Set([e.id])),oe(`delete`)},title:e.isOrphan?u(`remove_the_leftover_record`):u(`delete_permanently`),type:`button`,children:(0,q.jsx)(Ui,{size:13})})]})]},e.id))]})]})}),N&&(0,q.jsx)(Oo,{items:Ce,onClose:()=>re(null),x:N.x,y:N.y}),(0,q.jsx)(hs,{confirmLabel:u(P===`empty`?`empty_the_bin`:P===`purge`?`delete_every_orphan`:`delete`),danger:!0,message:P===`empty`?ae(u,L.length,`permanently_delete_1_item_this_cannot_be_undone`,`permanently_delete_count_items_this_cannot_be_undone`):P===`purge`?u(`permanently_delete_every_leftover_record_including_the_ones_owned_by_other_profiles_this_cannot_be_undone`):ae(u,pe.length,`permanently_delete_1_selected_item_this_cannot_be_undone`,`permanently_delete_count_selected_items_this_cannot_be_undone`),onCancel:()=>oe(null),onConfirm:()=>{P===`empty`?_e():P===`purge`?ye():B()},open:P!==null,title:u(P===`empty`?`empty_the_recycle_bin`:P===`purge`?`delete_every_orphan`:`delete_permanently`)})]});function ke(e){ne(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return ar(`yafm.recycle.sort`,n),n})}}function km(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return jm(e).localeCompare(jm(t),void 0,{sensitivity:`base`})}}function Am(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function jm(e){if(e.isDirectory)return`folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`file`}function Mm({entry:e}){let t=W(e.originalPath,e.isDirectory);return(0,q.jsx)(qm,{children:t?(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,q.jsx)(Di,{}):(0,q.jsx)(Oi,{})})}var Nm=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Pm=v(Tm)`
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`transparent`};
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`transparent`};
`,Fm=v(Tm)`
    color: #fca5a5;

    &:hover:not(:disabled) {
        color: #fecaca;
        border-color: rgba(248, 113, 113, 0.5);
        background: rgba(248, 113, 113, 0.12);
    }
`,Im=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Lm=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Rm=v.div`
    display: grid;
    grid-template-columns: ${Lm};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,zm=v.button`
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
`,Bm=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Vm=v.div`
    display: grid;
    grid-template-columns: ${Lm};
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
`,Hm=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Um=v.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Wm=v.button`
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
`,Gm=v.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Km=v(Hm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,qm=v.span`
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
`,Jm=v(Hm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Ym=v(Hm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Xm=v(Hm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Zm=v(Hm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Qm=v.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,$m=v.button`
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
`,eh=v.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,th=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,nh=v.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,rh=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function ih(){return l.available?(await l.request(`app.tags`)).tags:[]}async function ah(e){return!l.available||!e?!1:(await l.request(`app.tags.delete`,{name:e})).ok}async function oh(e,t){return!l.available||!e?[]:(await l.request(`app.tags.create`,{name:e,color:t})).tags}async function sh(e,t){return!l.available||!e?!1:(await l.request(`app.tags.color`,{name:e,color:t})).ok}async function ch(e,t){return!l.available||!e||!t?!1:(await l.request(`app.tags.rename`,{oldName:e,newName:t})).ok}var lh=[{name:`@fontsource/inter`,version:`5.3.0`,license:`OFL-1.1`,text:`Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter) Inter-Italic[opsz,wght].ttf: Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.`},{name:`@fontsource/jetbrains-mono`,version:`5.3.0`,license:`OFL-1.1`,text:`Copyright 2020 The JetBrains Mono Project Authors (https://github.com/JetBrains/JetBrainsMono) JetBrainsMono-Italic[wght].ttf: Copyright 2020 The JetBrains Mono Project Authors (https://github.com/JetBrains/JetBrainsMono)

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.`},{name:`@types/node`,version:`26.6.6`,license:`MIT`,text:`MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE`},{name:`@types/react`,version:`19.3.0`,license:`MIT`,text:`MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE`},{name:`@types/react-dom`,version:`19.3.0`,license:`MIT`,text:`MIT License

    Copyright (c) Microsoft Corporation.

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE`},{name:`@vitejs/plugin-react`,version:`6.3.0`,license:`MIT`,text:`MIT License

Copyright (c) 2019-present, Yuxi (Evan) You and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`},{name:`7-Zip`,version:`25.01`,license:`BSD-3-Clause`,text:`Licensed under LGPL-2.1-or-later with unRAR restriction.

7-Zip
  ~~~~~
  License for use and distribution
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  7-Zip Copyright (C) 1999-2026 Igor Pavlov.

  The licenses for files are:

    - 7z.dll:
         - The "GNU LGPL" as main license for most of the code
         - The "GNU LGPL" with "unRAR license restriction" for some code
         - The "BSD 3-clause License" for some code
         - The "BSD 2-clause License" for some code
    - All other files: the "GNU LGPL".

  Redistributions in binary form must reproduce related license information from this file.

  Note:
    You can use 7-Zip on any computer, including a computer in a commercial
    organization. You don't need to register or pay for 7-Zip.


GNU LGPL information
--------------------

    This library is free software; you can redistribute it and/or
    modify it under the terms of the GNU Lesser General Public
    License as published by the Free Software Foundation; either
    version 2.1 of the License, or (at your option) any later version.

    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
    Lesser General Public License for more details.

    You can receive a copy of the GNU Lesser General Public License from
    http://www.gnu.org/




BSD 3-clause License in 7-Zip code
----------------------------------

  The "BSD 3-clause License" is used for the following code in 7z.dll
    1) LZFSE data decompression.
       That code was derived from the code in the "LZFSE compression library" developed by Apple Inc,
       that also uses the "BSD 3-clause License".
    2) ZSTD data decompression.
       that code was developed using original zstd decoder code as reference code.
       The original zstd decoder code was developed by Facebook Inc,
       that also uses the "BSD 3-clause License".

  Copyright (c) 2015-2016, Apple Inc. All rights reserved.
  Copyright (c) Facebook, Inc. All rights reserved.
  Copyright (c) 2023-2026 Igor Pavlov.

Text of the "BSD 3-clause License"
----------------------------------

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may
   be used to endorse or promote products derived from this software without
   specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---




BSD 2-clause License in 7-Zip code
----------------------------------

  The "BSD 2-clause License" is used for the XXH64 code in 7-Zip.

  XXH64 code in 7-Zip was derived from the original XXH64 code developed by Yann Collet.

  Copyright (c) 2012-2021 Yann Collet.
  Copyright (c) 2023-2026 Igor Pavlov.

Text of the "BSD 2-clause License"
----------------------------------

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this
   list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---




unRAR license restriction
-------------------------

The decompression engine for RAR archives was developed using source
code of unRAR program.
All copyrights to original unRAR code are owned by Alexander Roshal.

The license for original unRAR code has the following restriction:

  The unRAR sources cannot be used to re-create the RAR compression algorithm,
  which is proprietary. Distribution of modified unRAR sources in separate form
  or as a part of other software is permitted, provided that it is clearly
  stated in the documentation and source comments that the code may
  not be used to develop a RAR (WinRAR) compatible archiver.

--`},{name:`BouncyCastle.Cryptography`,version:`2.7.0`,license:`MIT`,text:`Licensed under MIT.
Authors: Legion of the Bouncy Castle Inc.
Project: https://www.bouncycastle.org/stable/nuget/csharp/website

MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.`},{name:`Docnet.Core`,version:`2.6.0`,license:`MIT`,text:`Licensed under MIT.
Authors: Modestas Petravicius
Project: https://github.com/GowenGit/docnet

MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.`},{name:`JetBrains.Annotations`,version:`2026.2.0`,license:`MIT`,text:`Licensed under MIT.
Authors: JetBrains
Project: https://www.jetbrains.com/help/resharper/Code_Analysis__Code_Annotations.html

MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.`},{name:`Microsoft.Data.Sqlite`,version:`11.0.0`,license:`MIT`,text:`Licensed under MIT.
Authors: Microsoft
Project: https://docs.microsoft.com/dotnet/standard/data/sqlite/

MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.`},{name:`Microsoft.Extensions.FileProviders.Embedded`,version:`11.0.0`,license:`MIT`,text:`Licensed under MIT.
Authors: Microsoft
Project: https://asp.net/

MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.`},{name:`Photino.NET`,version:`4.0.16`,license:`Apache-2.0`,text:`Licensed under Apache-2.0.
Authors: TryPhotino
Project: https://github.com/tryphotino/photino.NET

Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

     (a) You must give any other recipients of the Work or Derivative Works a copy of this License; and

     (b) You must cause any modified files to carry prominent notices stating that You changed the files; and

     (c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

     (d) If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.

     You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

APPENDIX: How to apply the Apache License to your work.

To apply the Apache License to your work, attach the following boilerplate notice, with the fields enclosed by brackets "[]" replaced with your own identifying information. (Don't include the brackets!)  The text should be enclosed in the appropriate comment syntax for the file format. We also recommend that a file or class name and description of purpose be included on the same "printed page" as the copyright notice for easier identification within third-party archives.

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`},{name:`react`,version:`19.3.1`,license:`MIT`,text:`MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`},{name:`react-dom`,version:`19.3.1`,license:`MIT`,text:`MIT License

Copyright (c) Meta Platforms, Inc. and affiliates.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`},{name:`sass`,version:`1.108.1`,license:`MIT`,text:`Dart Sass license:

Copyright (c) 2016, Google Inc.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------------------------------------

Dart SDK and frontend_server_client license:

Copyright 2012, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

_fe_analyzer_shared license:

Copyright 2019, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

analyzer, protobuf and protoc_plugin license:

Copyright 2013, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

archive license:

The MIT License

Copyright (c) 2013-2021 Brendan Duncan.
All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

--------------------------------------------------------------------------------

args, csslib and logging license:

Copyright 2013, the Dart project authors. 

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

async, cli_util, collection, mime, stream_channel and typed_data license:

Copyright 2015, the Dart project authors. 

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

boolean_selector, meta and shelf_packages_handler license:

Copyright 2016, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

charcode license:

Copyright 2014, the Dart project authors. All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google Inc. nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

checked_yaml license:

Copyright 2019, the Dart project authors. All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google Inc. nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

cli_config license:

Copyright 2023, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

--------------------------------------------------------------------------------

cli_pkg license:

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


--------------------------------------------------------------------------------

cli_repl license:

Copyright (c) 2018, Jennifer Thakar.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the project nor the names of its contributors may be
      used to endorse or promote products derived from this software without
      specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

convert, crypto, shelf_static, source_map_stack_trace and vm_service license:

Copyright 2015, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

coverage, dart_style, dartdoc, glob, http, http_parser, matcher, path, pool,
pub_semver, source_span, string_scanner, test and watcher license:

Copyright 2014, the Dart project authors. 

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

dart_mappable and type_plus license:

MIT License

Copyright (c) 2021 Kilian Schulte

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--------------------------------------------------------------------------------

ffi and package_config license:

Copyright 2019, the Dart project authors. 

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

file license:

Copyright 2017, the Dart project authors. All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google Inc. nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

--------------------------------------------------------------------------------

fixnum, http_multi_server, oauth2, shelf, shelf_web_socket, source_maps and
stack_trace license:

Copyright 2014, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

grinder and webkit_inspection_protocol license:

Copyright 2013, Google Inc.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
copyright notice, this list of conditions and the following disclaimer
in the documentation and/or other materials provided with the
distribution.
    * Neither the name of Google Inc. nor the names of its
contributors may be used to endorse or promote products derived from
this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

html license:

Copyright (c) 2006-2012 The Authors

Contributors:
James Graham - jg307@cam.ac.uk
Anne van Kesteren - annevankesteren@gmail.com
Lachlan Hunt - lachlan.hunt@lachy.id.au
Matt McDonald - kanashii@kanashii.ca
Sam Ruby - rubys@intertwingly.net
Ian Hickson (Google) - ian@hixie.ch
Thomas Broyer - t.broyer@ltgt.net
Jacques Distler - distler@golem.ph.utexas.edu
Henri Sivonen - hsivonen@iki.fi
Adam Barth - abarth@webkit.org
Eric Seidel - eric@webkit.org
The Mozilla Foundation (contributions from Henri Sivonen since 2008)
David Flanagan (Mozilla) - dflanagan@mozilla.com
Google LLC (contributed the Dart port) - misc@dartlang.org

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


--------------------------------------------------------------------------------

io, stream_transform and term_glyph license:

Copyright 2017, the Dart project authors. 

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

js license:

Copyright 2012, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

json_annotation license:

Copyright 2017, the Dart project authors. All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google Inc. nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

lints license:

Copyright 2021, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

markdown license:

Copyright 2012, the Dart project authors. 

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

native_stack_traces license:

Copyright 2020, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

native_synchronization license:

Copyright 2023, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

node_interop license:

Copyright (c) 2017, Anatoly Pulyaevskiy.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
      notice, this list of conditions and the following disclaimer in the
      documentation and/or other materials provided with the distribution.
    * Neither the name of the <organization> nor the
      names of its contributors may be used to endorse or promote products
      derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

node_preamble license:

The MIT License (MIT)

Copyright (c) 2015 Michael Bullington

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

===

Copyright 2012, the Dart project authors. All rights reserved.
Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google Inc. nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

petitparser and xml license:

The MIT License

Copyright (c) 2006-2026 Lukas Renggli.
All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


--------------------------------------------------------------------------------

posix license:

MIT License

Copyright (c) 2020 Brett Sutton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------------------------------------

pub_api_client license:

MIT License

Copyright (c) 2020 Leo Farias

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


--------------------------------------------------------------------------------

pubspec_parse license:

Copyright 2018, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

retry license:


                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

--------------------------------------------------------------------------------

test_api and test_core license:

Copyright 2018, the Dart project authors. 

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

test_descriptor and web_socket_channel license:

Copyright 2016, the Dart project authors. 

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

test_process license:

Copyright 2017, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

web license:

Copyright 2023, the Dart project authors.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:
    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

web_socket license:

Copyright 2024, the Dart project authors. 

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are
met:

    * Redistributions of source code must retain the above copyright
      notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above
      copyright notice, this list of conditions and the following
      disclaimer in the documentation and/or other materials provided
      with the distribution.
    * Neither the name of Google LLC nor the names of its
      contributors may be used to endorse or promote products derived
      from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


--------------------------------------------------------------------------------

yaml license:

Copyright (c) 2014, the Dart project authors.
Copyright (c) 2006, Kirill Simonov.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`},{name:`securifybv.ShellLink`,version:`0.1.0`,license:`MIT`,text:`Licensed under MIT.
Authors: securifybv
Project: https://github.com/securifybv/ShellLink

MIT License

Copyright (c) 2017 Yorick Koster, Securify B.V.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`},{name:`Serilog`,version:`4.4.0`,license:`Apache-2.0`,text:`Licensed under Apache-2.0.
Authors: Serilog Contributors
Project: https://serilog.net/

Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

     (a) You must give any other recipients of the Work or Derivative Works a copy of this License; and

     (b) You must cause any modified files to carry prominent notices stating that You changed the files; and

     (c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

     (d) If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.

     You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

APPENDIX: How to apply the Apache License to your work.

To apply the Apache License to your work, attach the following boilerplate notice, with the fields enclosed by brackets "[]" replaced with your own identifying information. (Don't include the brackets!)  The text should be enclosed in the appropriate comment syntax for the file format. We also recommend that a file or class name and description of purpose be included on the same "printed page" as the copyright notice for easier identification within third-party archives.

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`},{name:`Serilog.Sinks.Console`,version:`6.1.1`,license:`Apache-2.0`,text:`Licensed under Apache-2.0.
Authors: Serilog Contributors
Project: https://github.com/serilog/serilog-sinks-console

Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

     (a) You must give any other recipients of the Work or Derivative Works a copy of this License; and

     (b) You must cause any modified files to carry prominent notices stating that You changed the files; and

     (c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

     (d) If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.

     You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

APPENDIX: How to apply the Apache License to your work.

To apply the Apache License to your work, attach the following boilerplate notice, with the fields enclosed by brackets "[]" replaced with your own identifying information. (Don't include the brackets!)  The text should be enclosed in the appropriate comment syntax for the file format. We also recommend that a file or class name and description of purpose be included on the same "printed page" as the copyright notice for easier identification within third-party archives.

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`},{name:`Serilog.Sinks.File`,version:`7.0.0`,license:`Apache-2.0`,text:`Licensed under Apache-2.0.
Authors: Serilog Contributors
Project: https://github.com/serilog/serilog-sinks-file

Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

     (a) You must give any other recipients of the Work or Derivative Works a copy of this License; and

     (b) You must cause any modified files to carry prominent notices stating that You changed the files; and

     (c) You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

     (d) If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License.

     You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

APPENDIX: How to apply the Apache License to your work.

To apply the Apache License to your work, attach the following boilerplate notice, with the fields enclosed by brackets "[]" replaced with your own identifying information. (Don't include the brackets!)  The text should be enclosed in the appropriate comment syntax for the file format. We also recommend that a file or class name and description of purpose be included on the same "printed page" as the copyright notice for easier identification within third-party archives.

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`},{name:`SevenZipExtractor`,version:`1.0.19`,license:``,text:`Authors: Eugene Sichkar, Alexander Selishchev, @matortheeternal, Hajin Jang, Artem Tarasov, Jose Pineiro, Raphael Stoeckli, Wojciech Nagórski
Project: https://github.com/adoconnection/SevenZipExtractor`},{name:`SharpCompress`,version:`0.50.9`,license:`MIT`,text:`Licensed under MIT.
Authors: Adam Hathcock
Project: https://github.com/adamhathcock/sharpcompress

MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.`},{name:`Squid-Box.SevenZipSharp`,version:`1.6.2.24`,license:`LGPL-3.0-only`,text:`Licensed under LGPL-3.0-only.
Authors: Joel Ahlgren
Project: https://github.com/squid-box/SevenZipSharp

GNU LESSER GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>

Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.

This version of the GNU Lesser General Public License incorporates the terms and conditions of version 3 of the GNU General Public License, supplemented by the additional permissions listed below.

0. Additional Definitions.

As used herein, "this License" refers to version 3 of the GNU Lesser General Public License, and the "GNU GPL" refers to version 3 of the GNU General Public License.

"The Library" refers to a covered work governed by this License, other than an Application or a Combined Work as defined below.

An "Application" is any work that makes use of an interface provided by the Library, but which is not otherwise based on the Library. Defining a subclass of a class defined by the Library is deemed a mode of using an interface provided by the Library.

A "Combined Work" is a work produced by combining or linking an Application with the Library.  The particular version of the Library with which the Combined Work was made is also called the "Linked Version".

The "Minimal Corresponding Source" for a Combined Work means the Corresponding Source for the Combined Work, excluding any source code for portions of the Combined Work that, considered in isolation, are based on the Application, and not on the Linked Version.

The "Corresponding Application Code" for a Combined Work means the object code and/or source code for the Application, including any data and utility programs needed for reproducing the Combined Work from the Application, but excluding the System Libraries of the Combined Work.

1. Exception to Section 3 of the GNU GPL.
You may convey a covered work under sections 3 and 4 of this License without being bound by section 3 of the GNU GPL.

2. Conveying Modified Versions.
If you modify a copy of the Library, and, in your modifications, a facility refers to a function or data to be supplied by an Application that uses the facility (other than as an argument passed when the facility is invoked), then you may convey a copy of the modified version:

     a) under this License, provided that you make a good faith effort to ensure that, in the event an Application does not supply the function or data, the facility still operates, and performs whatever part of its purpose remains meaningful, or

     b) under the GNU GPL, with none of the additional permissions of this License applicable to that copy.

3. Object Code Incorporating Material from Library Header Files.
The object code form of an Application may incorporate material from a header file that is part of the Library.  You may convey such object code under terms of your choice, provided that, if the incorporated material is not limited to numerical parameters, data structure layouts and accessors, or small macros, inline functions and templates (ten or fewer lines in length), you do both of the following:

     a) Give prominent notice with each copy of the object code that the Library is used in it and that the Library and its use are covered by this License.

     b) Accompany the object code with a copy of the GNU GPL and this license document.

4. Combined Works.
You may convey a Combined Work under terms of your choice that, taken together, effectively do not restrict modification of the portions of the Library contained in the Combined Work and reverse engineering for debugging such modifications, if you also do each of the following:

     a) Give prominent notice with each copy of the Combined Work that the Library is used in it and that the Library and its use are covered by this License.

     b) Accompany the Combined Work with a copy of the GNU GPL and this license document.

     c) For a Combined Work that displays copyright notices during execution, include the copyright notice for the Library among these notices, as well as a reference directing the user to the copies of the GNU GPL and this license document.

     d) Do one of the following:

           0) Convey the Minimal Corresponding Source under the terms of this License, and the Corresponding Application Code in a form suitable for, and under terms that permit, the user to recombine or relink the Application with a modified version of the Linked Version to produce a modified Combined Work, in the manner specified by section 6 of the GNU GPL for conveying Corresponding Source.

          1) Use a suitable shared library mechanism for linking with the Library.  A suitable mechanism is one that (a) uses at run time a copy of the Library already present on the user's computer system, and (b) will operate properly with a modified version of the Library that is interface-compatible with the Linked Version.

     e) Provide Installation Information, but only if you would otherwise be required to provide such information under section 6 of the GNU GPL, and only to the extent that such information is necessary to install and execute a modified version of the Combined Work produced by recombining or relinking the Application with a modified version of the Linked Version. (If you use option 4d0, the Installation Information must accompany the Minimal Corresponding Source and Corresponding Application Code. If you use option 4d1, you must provide the Installation Information in the manner specified by section 6 of the GNU GPL for conveying Corresponding Source.)

5. Combined Libraries.
You may place library facilities that are a work based on the Library side by side in a single library together with other library facilities that are not Applications and are not covered by this License, and convey such a combined library under terms of your choice, if you do both of the following:

     a) Accompany the combined library with a copy of the same work based on the Library, uncombined with any other library facilities, conveyed under the terms of this License.

     b) Give prominent notice with the combined library that part of it is a work based on the Library, and explaining where to find the accompanying uncombined form of the same work.

6. Revised Versions of the GNU Lesser General Public License.
The Free Software Foundation may publish revised and/or new versions of the GNU Lesser General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.

Each version is given a distinguishing version number. If the Library as you received it specifies that a certain numbered version of the GNU Lesser General Public License "or any later version" applies to it, you have the option of following the terms and conditions either of that published version or of any later version published by the Free Software Foundation. If the Library as you received it does not specify a version number of the GNU Lesser General Public License, you may choose any version of the GNU Lesser General Public License ever published by the Free Software Foundation.

If the Library as you received it specifies that a proxy can decide whether future versions of the GNU Lesser General Public License shall
apply, that proxy's public statement of acceptance of any version is permanent authorization for you to choose that version for the Library.

GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007

Copyright © 2007 Free Software Foundation, Inc. <http://fsf.org/>

Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.

Preamble

The GNU General Public License is a free, copyleft license for software and other kinds of works.

The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.

When we speak of free software, we are referring to freedom, not price. Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for them if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs, and that you know you can do these things.

To protect your rights, we need to prevent others from denying you these rights or asking you to surrender the rights. Therefore, you have certain responsibilities if you distribute copies of the software, or if you modify it: responsibilities to respect the freedom of others.

For example, if you distribute copies of such a program, whether gratis or for a fee, you must pass on to the recipients the same freedoms that you received. You must make sure that they, too, receive or can get the source code. And you must show them these terms so they know their rights.

Developers that use the GNU GPL protect your rights with two steps: (1) assert copyright on the software, and (2) offer you this License giving you legal permission to copy, distribute and/or modify it.

For the developers' and authors' protection, the GPL clearly explains that there is no warranty for this free software. For both users' and authors' sake, the GPL requires that modified versions be marked as changed, so that their problems will not be attributed erroneously to authors of previous versions.

Some devices are designed to deny users access to install or run modified versions of the software inside them, although the manufacturer can do so. This is fundamentally incompatible with the aim of protecting users' freedom to change the software. The systematic pattern of such abuse occurs in the area of products for individuals to use, which is precisely where it is most unacceptable. Therefore, we have designed this version of the GPL to prohibit the practice for those products. If such problems arise substantially in other domains, we stand ready to extend this provision to those domains in future versions of the GPL, as needed to protect the freedom of users.

Finally, every program is threatened constantly by software patents. States should not allow patents to restrict development and use of software on general-purpose computers, but in those that do, we wish to avoid the special danger that patents applied to a free program could make it effectively proprietary. To prevent this, the GPL assures that patents cannot be used to render the program non-free.

The precise terms and conditions for copying, distribution and modification follow.

TERMS AND CONDITIONS

0. Definitions.

“This License” refers to version 3 of the GNU General Public License.

“Copyright” also means copyright-like laws that apply to other kinds of works, such as semiconductor masks.

“The Program” refers to any copyrightable work licensed under this License. Each licensee is addressed as “you”. “Licensees” and “recipients” may be individuals or organizations.

To “modify” a work means to copy from or adapt all or part of the work in a fashion requiring copyright permission, other than the making of an exact copy. The resulting work is called a “modified version” of the earlier work or a work “based on” the earlier work.

A “covered work” means either the unmodified Program or a work based on the Program.

To “propagate” a work means to do anything with it that, without permission, would make you directly or secondarily liable for infringement under applicable copyright law, except executing it on a computer or modifying a private copy. Propagation includes copying, distribution (with or without modification), making available to the public, and in some countries other activities as well.

To “convey” a work means any kind of propagation that enables other parties to make or receive copies. Mere interaction with a user through a computer network, with no transfer of a copy, is not conveying.

An interactive user interface displays “Appropriate Legal Notices” to the extent that it includes a convenient and prominently visible feature that (1) displays an appropriate copyright notice, and (2) tells the user that there is no warranty for the work (except to the extent that warranties are provided), that licensees may convey the work under this License, and how to view a copy of this License. If the interface presents a list of user commands or options, such as a menu, a prominent item in the list meets this criterion.

1. Source Code.
The “source code” for a work means the preferred form of the work for making modifications to it. “Object code” means any non-source form of a work.

A “Standard Interface” means an interface that either is an official standard defined by a recognized standards body, or, in the case of interfaces specified for a particular programming language, one that is widely used among developers working in that language.

The “System Libraries” of an executable work include anything, other than the work as a whole, that (a) is included in the normal form of packaging a Major Component, but which is not part of that Major Component, and (b) serves only to enable use of the work with that Major Component, or to implement a Standard Interface for which an implementation is available to the public in source code form. A “Major Component”, in this context, means a major essential component (kernel, window system, and so on) of the specific operating system (if any) on which the executable work runs, or a compiler used to produce the work, or an object code interpreter used to run it.

The “Corresponding Source” for a work in object code form means all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts to control those activities. However, it does not include the work's System Libraries, or general-purpose tools or generally available free programs which are used unmodified in performing those activities but which are not part of the work. For example, Corresponding Source includes interface definition files associated with source files for the work, and the source code for shared libraries and dynamically linked subprograms that the work is specifically designed to require, such as by intimate data communication or control flow between those subprograms and other parts of the work.

The Corresponding Source need not include anything that users can regenerate automatically from other parts of the Corresponding Source.

The Corresponding Source for a work in source code form is that same work.

2. Basic Permissions.
All rights granted under this License are granted for the term of copyright on the Program, and are irrevocable provided the stated conditions are met. This License explicitly affirms your unlimited permission to run the unmodified Program. The output from running a covered work is covered by this License only if the output, given its content, constitutes a covered work. This License acknowledges your rights of fair use or other equivalent, as provided by copyright law.

You may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force. You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright. Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you.

Conveying under any other circumstances is permitted solely under the conditions stated below. Sublicensing is not allowed; section 10 makes it unnecessary.

3. Protecting Users' Legal Rights From Anti-Circumvention Law.
No covered work shall be deemed part of an effective technological measure under any applicable law fulfilling obligations under article 11 of the WIPO copyright treaty adopted on 20 December 1996, or similar laws prohibiting or restricting circumvention of such measures.

When you convey a covered work, you waive any legal power to forbid circumvention of technological measures to the extent such circumvention is effected by exercising rights under this License with respect to the covered work, and you disclaim any intention to limit operation or modification of the work as a means of enforcing, against the work's users, your or third parties' legal rights to forbid circumvention of technological measures.

4. Conveying Verbatim Copies.
You may convey verbatim copies of the Program's source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice; keep intact all notices stating that this License and any non-permissive terms added in accord with section 7 apply to the code; keep intact all notices of the absence of any warranty; and give all recipients a copy of this License along with the Program.

You may charge any price or no price for each copy that you convey, and you may offer support or warranty protection for a fee.

5. Conveying Modified Source Versions.
You may convey a work based on the Program, or the modifications to produce it from the Program, in the form of source code under the terms of section 4, provided that you also meet all of these conditions:

     a) The work must carry prominent notices stating that you modified it, and giving a relevant date.

     b) The work must carry prominent notices stating that it is released under this License and any conditions added under section 7. This requirement modifies the requirement in section 4 to “keep intact all notices”.

     c) You must license the entire work, as a whole, under this License to anyone who comes into possession of a copy. This License will therefore apply, along with any applicable section 7 additional terms, to the whole of the work, and all its parts, regardless of how they are packaged. This License gives no permission to license the work in any other way, but it does not invalidate such permission if you have separately received it.

     d) If the work has interactive user interfaces, each must display Appropriate Legal Notices; however, if the Program has interactive interfaces that do not display Appropriate Legal Notices, your work need not make them do so.

A compilation of a covered work with other separate and independent works, which are not by their nature extensions of the covered work, and which are not combined with it such as to form a larger program, in or on a volume of a storage or distribution medium, is called an “aggregate” if the compilation and its resulting copyright are not used to limit the access or legal rights of the compilation's users beyond what the individual works permit. Inclusion of a covered work in an aggregate does not cause this License to apply to the other parts of the aggregate.

6. Conveying Non-Source Forms.
You may convey a covered work in object code form under the terms of sections 4 and 5, provided that you also convey the machine-readable Corresponding Source under the terms of this License, in one of these ways:

     a) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by the Corresponding Source fixed on a durable physical medium customarily used for software interchange.

     b) Convey the object code in, or embodied in, a physical product (including a physical distribution medium), accompanied by a written offer, valid for at least three years and valid for as long as you offer spare parts or customer support for that product model, to give anyone who possesses the object code either (1) a copy of the Corresponding Source for all the software in the product that is covered by this License, on a durable physical medium customarily used for software interchange, for a price no more than your reasonable cost of physically performing this conveying of source, or (2) access to copy the Corresponding Source from a network server at no charge.

     c) Convey individual copies of the object code with a copy of the written offer to provide the Corresponding Source. This alternative is allowed only occasionally and noncommercially, and only if you received the object code with such an offer, in accord with subsection 6b.

     d) Convey the object code by offering access from a designated place (gratis or for a charge), and offer equivalent access to the Corresponding Source in the same way through the same place at no further charge. You need not require recipients to copy the Corresponding Source along with the object code. If the place to copy the object code is a network server, the Corresponding Source may be on a different server (operated by you or a third party) that supports equivalent copying facilities, provided you maintain clear directions next to the object code saying where to find the Corresponding Source. Regardless of what server hosts the Corresponding Source, you remain obligated to ensure that it is available for as long as needed to satisfy these requirements.

     e) Convey the object code using peer-to-peer transmission, provided you inform other peers where the object code and Corresponding Source of the work are being offered to the general public at no charge under subsection 6d.

A separable portion of the object code, whose source code is excluded from the Corresponding Source as a System Library, need not be included in conveying the object code work.

A “User Product” is either (1) a “consumer product”, which means any tangible personal property which is normally used for personal, family, or household purposes, or (2) anything designed or sold for incorporation into a dwelling. In determining whether a product is a consumer product, doubtful cases shall be resolved in favor of coverage. For a particular product received by a particular user, “normally used” refers to a typical or common use of that class of product, regardless of the status of the particular user or of the way in which the particular user actually uses, or expects or is expected to use, the product. A product is a consumer product regardless of whether the product has substantial commercial, industrial or non-consumer uses, unless such uses represent the only significant mode of use of the product.

“Installation Information” for a User Product means any methods, procedures, authorization keys, or other information required to install and execute modified versions of a covered work in that User Product from a modified version of its Corresponding Source. The information must suffice to ensure that the continued functioning of the modified object code is in no case prevented or interfered with solely because modification has been made.

If you convey an object code work under this section in, or with, or specifically for use in, a User Product, and the conveying occurs as part of a transaction in which the right of possession and use of the User Product is transferred to the recipient in perpetuity or for a fixed term (regardless of how the transaction is characterized), the Corresponding Source conveyed under this section must be accompanied by the Installation Information. But this requirement does not apply if neither you nor any third party retains the ability to install modified object code on the User Product (for example, the work has been installed in ROM).

The requirement to provide Installation Information does not include a requirement to continue to provide support service, warranty, or updates for a work that has been modified or installed by the recipient, or for the User Product in which it has been modified or installed. Access to a network may be denied when the modification itself materially and adversely affects the operation of the network or violates the rules and protocols for communication across the network.

Corresponding Source conveyed, and Installation Information provided, in accord with this section must be in a format that is publicly documented (and with an implementation available to the public in source code form), and must require no special password or key for unpacking, reading or copying.

7. Additional Terms.
“Additional permissions” are terms that supplement the terms of this License by making exceptions from one or more of its conditions. Additional permissions that are applicable to the entire Program shall be treated as though they were included in this License, to the extent that they are valid under applicable law. If additional permissions apply only to part of the Program, that part may be used separately under those permissions, but the entire Program remains governed by this License without regard to the additional permissions.

When you convey a copy of a covered work, you may at your option remove any additional permissions from that copy, or from any part of it. (Additional permissions may be written to require their own removal in certain cases when you modify the work.) You may place additional permissions on material, added by you to a covered work, for which you have or can give appropriate copyright permission.

Notwithstanding any other provision of this License, for material you add to a covered work, you may (if authorized by the copyright holders of that material) supplement the terms of this License with terms:

     a) Disclaiming warranty or limiting liability differently from the terms of sections 15 and 16 of this License; or

     b) Requiring preservation of specified reasonable legal notices or author attributions in that material or in the Appropriate Legal Notices displayed by works containing it; or

     c) Prohibiting misrepresentation of the origin of that material, or requiring that modified versions of such material be marked in reasonable ways as different from the original version; or

     d) Limiting the use for publicity purposes of names of licensors or authors of the material; or

     e) Declining to grant rights under trademark law for use of some trade names, trademarks, or service marks; or

     f) Requiring indemnification of licensors and authors of that material by anyone who conveys the material (or modified versions of it) with contractual assumptions of liability to the recipient, for any liability that these contractual assumptions directly impose on those licensors and authors.

All other non-permissive additional terms are considered “further restrictions” within the meaning of section 10. If the Program as you received it, or any part of it, contains a notice stating that it is governed by this License along with a term that is a further restriction, you may remove that term. If a license document contains a further restriction but permits relicensing or conveying under this License, you may add to a covered work material governed by the terms of that license document, provided that the further restriction does not survive such relicensing or conveying.

If you add terms to a covered work in accord with this section, you must place, in the relevant source files, a statement of the additional terms that apply to those files, or a notice indicating where to find the applicable terms.

Additional terms, permissive or non-permissive, may be stated in the form of a separately written license, or stated as exceptions; the above requirements apply either way.

8. Termination.
You may not propagate or modify a covered work except as expressly provided under this License. Any attempt otherwise to propagate or modify it is void, and will automatically terminate your rights under this License (including any patent licenses granted under the third paragraph of section 11).

However, if you cease all violation of this License, then your license from a particular copyright holder is reinstated (a) provisionally, unless and until the copyright holder explicitly and finally terminates your license, and (b) permanently, if the copyright holder fails to notify you of the violation by some reasonable means prior to 60 days after the cessation.

Moreover, your license from a particular copyright holder is reinstated permanently if the copyright holder notifies you of the violation by some reasonable means, this is the first time you have received notice of violation of this License (for any work) from that copyright holder, and you cure the violation prior to 30 days after your receipt of the notice.

Termination of your rights under this section does not terminate the licenses of parties who have received copies or rights from you under this License. If your rights have been terminated and not permanently reinstated, you do not qualify to receive new licenses for the same material under section 10.

9. Acceptance Not Required for Having Copies.
You are not required to accept this License in order to receive or run a copy of the Program. Ancillary propagation of a covered work occurring solely as a consequence of using peer-to-peer transmission to receive a copy likewise does not require acceptance. However, nothing other than this License grants you permission to propagate or modify any covered work. These actions infringe copyright if you do not accept this License. Therefore, by modifying or propagating a covered work, you indicate your acceptance of this License to do so.

10. Automatic Licensing of Downstream Recipients.
Each time you convey a covered work, the recipient automatically receives a license from the original licensors, to run, modify and propagate that work, subject to this License. You are not responsible for enforcing compliance by third parties with this License.

An “entity transaction” is a transaction transferring control of an organization, or substantially all assets of one, or subdividing an organization, or merging organizations. If propagation of a covered work results from an entity transaction, each party to that transaction who receives a copy of the work also receives whatever licenses to the work the party's predecessor in interest had or could give under the previous paragraph, plus a right to possession of the Corresponding Source of the work from the predecessor in interest, if the predecessor has it or can get it with reasonable efforts.

You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.

11. Patents.
A “contributor” is a copyright holder who authorizes use under this License of the Program or a work on which the Program is based. The work thus licensed is called the contributor's “contributor version”.

A contributor's “essential patent claims” are all patent claims owned or controlled by the contributor, whether already acquired or hereafter acquired, that would be infringed by some manner, permitted by this License, of making, using, or selling its contributor version, but do not include claims that would be infringed only as a consequence of further modification of the contributor version. For purposes of this definition, “control” includes the right to grant patent sublicenses in a manner consistent with the requirements of this License.

Each contributor grants you a non-exclusive, worldwide, royalty-free patent license under the contributor's essential patent claims, to make, use, sell, offer for sale, import and otherwise run, modify and propagate the contents of its contributor version.

In the following three paragraphs, a “patent license” is any express agreement or commitment, however denominated, not to enforce a patent (such as an express permission to practice a patent or covenant not to sue for patent infringement). To “grant” such a patent license to a party means to make such an agreement or commitment not to enforce a patent against the party.

If you convey a covered work, knowingly relying on a patent license, and the Corresponding Source of the work is not available for anyone to copy, free of charge and under the terms of this License, through a publicly available network server or other readily accessible means, then you must either (1) cause the Corresponding Source to be so available, or (2) arrange to deprive yourself of the benefit of the patent license for this particular work, or (3) arrange, in a manner consistent with the requirements of this License, to extend the patent license to downstream recipients. “Knowingly relying” means you have actual knowledge that, but for the patent license, your conveying the covered work in a country, or your recipient's use of the covered work in a country, would infringe one or more identifiable patents in that country that you have reason to believe are valid.

If, pursuant to or in connection with a single transaction or arrangement, you convey, or propagate by procuring conveyance of, a covered work, and grant a patent license to some of the parties receiving the covered work authorizing them to use, propagate, modify or convey a specific copy of the covered work, then the patent license you grant is automatically extended to all recipients of the covered work and works based on it.

A patent license is “discriminatory” if it does not include within the scope of its coverage, prohibits the exercise of, or is conditioned on the non-exercise of one or more of the rights that are specifically granted under this License. You may not convey a covered work if you are a party to an arrangement with a third party that is in the business of distributing software, under which you make payment to the third party based on the extent of your activity of conveying the work, and under which the third party grants, to any of the parties who would receive the covered work from you, a discriminatory patent license (a) in connection with copies of the covered work conveyed by you (or copies made from those copies), or (b) primarily for and in connection with specific products or compilations that contain the covered work, unless you entered into that arrangement, or that patent license was granted, prior to 28 March 2007.

Nothing in this License shall be construed as excluding or limiting any implied license or other defenses to infringement that may otherwise be available to you under applicable patent law.

12. No Surrender of Others' Freedom.
If conditions are imposed on you (whether by court order, agreement or otherwise) that contradict the conditions of this License, they do not excuse you from the conditions of this License. If you cannot convey a covered work so as to satisfy simultaneously your obligations under this License and any other pertinent obligations, then as a consequence you may not convey it at all. For example, if you agree to terms that obligate you to collect a royalty for further conveying from those to whom you convey the Program, the only way you could satisfy both those terms and this License would be to refrain entirely from conveying the Program.

13. Use with the GNU Affero General Public License.
Notwithstanding any other provision of this License, you have permission to link or combine any covered work with a work licensed under version 3 of the GNU Affero General Public License into a single combined work, and to convey the resulting work. The terms of this License will continue to apply to the part which is the covered work, but the special requirements of the GNU Affero General Public License, section 13, concerning interaction through a network will apply to the combination as such.

14. Revised Versions of this License.
The Free Software Foundation may publish revised and/or new versions of the GNU General Public License from time to time. Such new versions will be similar in spirit to the present version, but may differ in detail to address new problems or concerns.

Each version is given a distinguishing version number. If the Program specifies that a certain numbered version of the GNU General Public License “or any later version” applies to it, you have the option of following the terms and conditions either of that numbered version or of any later version published by the Free Software Foundation. If the Program does not specify a version number of the GNU General Public License, you may choose any version ever published by the Free Software Foundation.

If the Program specifies that a proxy can decide which future versions of the GNU General Public License can be used, that proxy's public statement of acceptance of a version permanently authorizes you to choose that version for the Program.

Later license versions may give you additional or different permissions. However, no additional obligations are imposed on any author or copyright holder as a result of your choosing to follow a later version.

15. Disclaimer of Warranty.
THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU. SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

16. Limitation of Liability.
IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

17. Interpretation of Sections 15 and 16.
If the disclaimer of warranty and limitation of liability provided above cannot be given local legal effect according to their terms, reviewing courts shall apply local law that most closely approximates an absolute waiver of all civil liability in connection with the Program, unless a warranty or assumption of liability accompanies a copy of the Program in return for a fee.

END OF TERMS AND CONDITIONS

How to Apply These Terms to Your New Programs

If you develop a new program, and you want it to be of the greatest possible use to the public, the best way to achieve this is to make it free software which everyone can redistribute and change under these terms.

To do so, attach the following notices to the program. It is safest to attach them to the start of each source file to most effectively state the exclusion of warranty; and each file should have at least the “copyright” line and a pointer to where the full notice is found.

     <one line to give the program's name and a brief idea of what it does.>
     Copyright (C) <year>  <name of author>

     This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

     This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

     You should have received a copy of the GNU General Public License along with this program.  If not, see <http://www.gnu.org/licenses/>.

Also add information on how to contact you by electronic and paper mail.

If the program does terminal interaction, make it output a short notice like this when it starts in an interactive mode:

     <program>  Copyright (C) <year>  <name of author>
     This program comes with ABSOLUTELY NO WARRANTY; for details type \`show w'.
     This is free software, and you are welcome to redistribute it under certain conditions; type \`show c' for details.

The hypothetical commands \`show w' and \`show c' should show the appropriate parts of the General Public License. Of course, your program's commands might be different; for a GUI interface, you would use an “about box”.

You should also get your employer (if you work as a programmer) or school, if any, to sign a “copyright disclaimer” for the program, if necessary. For more information on this, and how to apply and follow the GNU GPL, see <http://www.gnu.org/licenses/>.

The GNU General Public License does not permit incorporating your program into proprietary programs. If your program is a subroutine library, you may consider it more useful to permit linking proprietary applications with the library. If this is what you want to do, use the GNU Lesser General Public License instead of this License. But first, please read <http://www.gnu.org/philosophy/why-not-lgpl.html>.`},{name:`styled-components`,version:`6.6.0`,license:`MIT`,text:`MIT License

Copyright (c) 2016-present Glen Maddern and Maximilian Stoiber

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`},{name:`System.Drawing.Common`,version:`11.0.0`,license:`MIT`,text:`Licensed under MIT.
Authors: Microsoft
Project: https://github.com/dotnet/winforms

MIT License

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
associated documentation files (the "Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the
following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
USE OR OTHER DEALINGS IN THE SOFTWARE.`},{name:`Tomlyn`,version:`2.11.1`,license:`BSD-2-Clause`,text:`Licensed under BSD-2-Clause.
Authors: Alexandre Mutel
Project: https://xoofx.github.io/Tomlyn/

Copyright (c) <year> <owner> 

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`},{name:`typescript`,version:`7.0.2`,license:`Apache-2.0`,text:`Apache License

Version 2.0, January 2004

http://www.apache.org/licenses/ 

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.

"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).

"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.

"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

You must give any other recipients of the Work or Derivative Works a copy of this License; and

You must cause any modified files to carry prominent notices stating that You changed the files; and

You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and

If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS`},{name:`vite`,version:`8.3.7`,license:`MIT`,text:`# Vite core license
Vite is released under the MIT license:

MIT License

Copyright (c) 2019-present, VoidZero Inc. and Vite contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

# Licenses of bundled dependencies
The published Vite artifact additionally contains code with the following licenses:
BSD-2-Clause, CC0-1.0, ISC, MIT

# Bundled dependencies:
## @jridgewell/gen-mapping, @jridgewell/remapping, @jridgewell/sourcemap-codec, @jridgewell/trace-mapping
License: MIT
By: Justin Ridgewell
Repositories: https://github.com/jridgewell/sourcemaps, https://github.com/jridgewell/sourcemaps, https://github.com/jridgewell/sourcemaps, https://github.com/jridgewell/sourcemaps

> Copyright 2024 Justin Ridgewell <justin@ridgewell.name>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @jridgewell/resolve-uri
License: MIT
By: Justin Ridgewell
Repository: https://github.com/jridgewell/resolve-uri

> Copyright 2019 Justin Ridgewell <jridgewell@google.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @polka/compression
License: MIT
Repository: https://github.com/lukeed/polka

---------------------------------------

## @polka/url
License: MIT
By: Luke Edwards
Repository: https://github.com/lukeed/polka

---------------------------------------

## @rollup/plugin-alias, @rollup/plugin-dynamic-import-vars, @rollup/pluginutils
License: MIT
By: Johannes Stein
Repository: https://github.com/rollup/plugins

License: MIT
By: LarsDenBakker
Repository: https://github.com/rollup/plugins

License: MIT
By: Rich Harris
Repository: https://github.com/rollup/plugins

> The MIT License (MIT)
> 
> Copyright (c) 2019 RollupJS Plugin Contributors (https://github.com/rollup/plugins/graphs/contributors)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## @vitest/utils
License: MIT
Repository: https://github.com/vitest-dev/vitest

> MIT License
> 
> Copyright (c) 2021-Present VoidZero Inc. and Vitest contributors
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## @voidzero-dev/vite-task-client
License: MIT
Repository: https://github.com/voidzero-dev/vite-task

> MIT License
> 
> Copyright (c) 2026-present, VoidZero Inc.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## anymatch
License: ISC
By: Elan Shanker
Repository: https://github.com/micromatch/anymatch

> The ISC License
> 
> Copyright (c) 2019 Elan Shanker, Paul Miller (https://paulmillr.com)
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
> IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## artichokie
License: MIT
By: sapphi-red, Evan You
Repository: https://github.com/sapphi-red/artichokie

> MIT License
> 
> Copyright (c) 2020-present, Yuxi (Evan) You
> Copyright (c) 2023-present, sapphi-red
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## binary-extensions
License: MIT
By: Sindre Sorhus
Repository: https://github.com/sindresorhus/binary-extensions

> MIT License
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
> Copyright (c) Paul Miller (https://paulmillr.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## braces, fill-range, is-number
License: MIT
By: Jon Schlinkert, Brian Woodward, Elan Shanker, Eugene Sharygin, hemanth.hm
Repository: https://github.com/micromatch/braces

License: MIT
By: Jon Schlinkert, Edo Rivai, Paul Miller, Rouven Weßling
Repository: https://github.com/jonschlinkert/fill-range

License: MIT
By: Jon Schlinkert, Olsten Larck, Rouven Weßling
Repository: https://github.com/jonschlinkert/is-number

> The MIT License (MIT)
> 
> Copyright (c) 2014-present, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## bundle-name, default-browser, default-browser-id, define-lazy-prop, is-docker, is-inside-container, is-wsl, open, run-applescript, wsl-utils
License: MIT
By: Sindre Sorhus
Repositories: https://github.com/sindresorhus/bundle-name, https://github.com/sindresorhus/default-browser, https://github.com/sindresorhus/default-browser-id, https://github.com/sindresorhus/define-lazy-prop, https://github.com/sindresorhus/is-docker, https://github.com/sindresorhus/is-inside-container, https://github.com/sindresorhus/is-wsl, https://github.com/sindresorhus/open, https://github.com/sindresorhus/run-applescript, https://github.com/sindresorhus/wsl-utils

> MIT License
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## cac
License: MIT
By: egoist, Kevin Deng <sxzz@sxzz.moe>
Repository: https://github.com/cacjs/cac

> The MIT License (MIT)
> 
> Copyright (c) EGOIST <0x142857@gmail.com> (https://github.com/egoist)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## chokidar
License: MIT
By: Paul Miller, Elan Shanker
Repository: https://github.com/paulmillr/chokidar

> The MIT License (MIT)
> 
> Copyright (c) 2012-2019 Paul Miller (https://paulmillr.com), Elan Shanker
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the “Software”), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## connect
License: MIT
By: TJ Holowaychuk, Douglas Christopher Wilson, Jonathan Ong, Tim Caswell
Repository: https://github.com/senchalabs/connect

> (The MIT License)
> 
> Copyright (c) 2010 Sencha Inc.
> Copyright (c) 2011 LearnBoost
> Copyright (c) 2011-2014 TJ Holowaychuk
> Copyright (c) 2015 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## convert-source-map
License: MIT
By: Thorsten Lorenz
Repository: https://github.com/thlorenz/convert-source-map

> Copyright 2013 Thorsten Lorenz. 
> All rights reserved.
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## cors
License: MIT
By: Troy Goode
Repository: https://github.com/expressjs/cors

> (The MIT License)
> 
> Copyright (c) 2013 Troy Goode <troygoode@gmail.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## cssesc
License: MIT
By: Mathias Bynens
Repository: https://github.com/mathiasbynens/cssesc

> Copyright Mathias Bynens <https://mathiasbynens.be/>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## dotenv-expand
License: BSD-2-Clause
By: motdotla
Repository: https://github.com/motdotla/dotenv-expand

> Copyright (c) 2016, Scott Motte
> All rights reserved.
> 
> Redistribution and use in source and binary forms, with or without
> modification, are permitted provided that the following conditions are met:
> 
> * Redistributions of source code must retain the above copyright notice, this
>   list of conditions and the following disclaimer.
> 
> * Redistributions in binary form must reproduce the above copyright notice,
>   this list of conditions and the following disclaimer in the documentation
>   and/or other materials provided with the distribution.
> 
> THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
> AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
> IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
> DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
> FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
> DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
> SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
> CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
> OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
> OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## ee-first
License: MIT
By: Jonathan Ong, Douglas Christopher Wilson
Repository: https://github.com/jonathanong/ee-first

> The MIT License (MIT)
> 
> Copyright (c) 2014 Jonathan Ong me@jongleberry.com
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## encodeurl
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/pillarjs/encodeurl

> (The MIT License)
> 
> Copyright (c) 2016 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## entities
License: BSD-2-Clause
By: Felix Boehm
Repository: https://github.com/fb55/entities

> Copyright (c) Felix Böhm
> All rights reserved.
> 
> Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
> 
> Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
> 
> Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
> 
> THIS IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS,
> EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

---------------------------------------

## es-module-lexer
License: MIT
By: Guy Bedford
Repository: https://github.com/guybedford/es-module-lexer

> MIT License
> -----------
> 
> Copyright (C) 2018-2022 Guy Bedford
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## escape-html
License: MIT
Repository: https://github.com/component/escape-html

> (The MIT License)
> 
> Copyright (c) 2012-2013 TJ Holowaychuk
> Copyright (c) 2015 Andreas Lubbe
> Copyright (c) 2015 Tiancheng "Timothy" Gu
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## estree-walker
License: MIT
By: Rich Harris
Repository: https://github.com/Rich-Harris/estree-walker

> Copyright (c) 2015-20 [these people](https://github.com/Rich-Harris/estree-walker/graphs/contributors)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## etag
License: MIT
By: Douglas Christopher Wilson, David Björklund
Repository: https://github.com/jshttp/etag

> (The MIT License)
> 
> Copyright (c) 2014-2016 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## finalhandler
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/pillarjs/finalhandler

> (The MIT License)
> 
> Copyright (c) 2014-2017 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## follow-redirects
License: MIT
By: Ruben Verborgh, Olivier Lalonde, James Talmage
Repository: https://github.com/follow-redirects/follow-redirects

> Copyright 2014–present Olivier Lalonde <olalonde@gmail.com>, James Talmage <james@talmage.io>, Ruben Verborgh
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
> of the Software, and to permit persons to whom the Software is furnished to do
> so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
> IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## fresh-import
License: MIT
By: sapphi-red
Repository: https://github.com/sapphi-red/fresh-import

> MIT License
> 
> Copyright (c) 2026 sapphi-red
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## generic-names
License: MIT
By: Alexey Litvinov
Repository: https://github.com/css-modules/generic-names

> The MIT License (MIT)
> 
> Copyright (c) 2015 Alexey Litvinov
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## glob-parent
License: ISC
By: Gulp Team, Elan Shanker, Blaine Bublitz
Repository: https://github.com/gulpjs/glob-parent

> The ISC License
> 
> Copyright (c) 2015, 2019 Elan Shanker
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
> IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## host-validation-middleware
License: MIT
By: sapphi-red
Repository: https://github.com/sapphi-red/host-validation-middleware

> MIT License
> 
> Copyright (c) 2025 sapphi-red
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## http-proxy-3
License: MIT
By: William Stein, Charlie Robbins, Jimb Esser, jcrugzz
Repository: https://github.com/sagemathinc/http-proxy-3

> node-http-3
> 
> Copyright (c) 2010-2025 William Stein, Charlie Robbins, Jarrett Cruger & the Contributors.
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## icss-utils
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/icss-utils

> ISC License (ISC)
> Copyright 2018 Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## is-binary-path
License: MIT
By: Sindre Sorhus
Repository: https://github.com/sindresorhus/is-binary-path

> MIT License
> 
> Copyright (c) 2019 Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com), Paul Miller (https://paulmillr.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## is-extglob
License: MIT
By: Jon Schlinkert
Repository: https://github.com/jonschlinkert/is-extglob

> The MIT License (MIT)
> 
> Copyright (c) 2014-2016, Jon Schlinkert
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## is-glob
License: MIT
By: Jon Schlinkert, Brian Woodward, Daniel Perez
Repository: https://github.com/micromatch/is-glob

> The MIT License (MIT)
> 
> Copyright (c) 2014-2017, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## is-reference
License: MIT
By: Rich Harris
Repository: https://github.com/Rich-Harris/is-reference

---------------------------------------

## js-tokens
License: MIT
By: Simon Lydell
Repository: https://github.com/lydell/js-tokens

> The MIT License (MIT)
> 
> Copyright (c) 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025 Simon Lydell
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## launch-editor, launch-editor-middleware
License: MIT
By: Evan You
Repositories: https://github.com/vitejs/launch-editor, https://github.com/vitejs/launch-editor

> The MIT License (MIT)
> 
> Copyright (c) 2017-present, Yuxi (Evan) You
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## lilconfig
License: MIT
By: antonk52
Repository: https://github.com/antonk52/lilconfig

> MIT License
> 
> Copyright (c) 2022 Anton Kastritskiy
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## loader-utils
License: MIT
By: Tobias Koppers @sokra
Repository: https://github.com/webpack/loader-utils

> Copyright JS Foundation and other contributors
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## lodash.camelcase
License: MIT
By: John-David Dalton, Blaine Bublitz, Mathias Bynens
Repository: https://github.com/lodash/lodash

> Copyright jQuery Foundation and other contributors <https://jquery.org/>
> 
> Based on Underscore.js, copyright Jeremy Ashkenas,
> DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>
> 
> This software consists of voluntary contributions made by many
> individuals. For exact contribution history, see the revision history
> available at https://github.com/lodash/lodash
> 
> The following license applies to all parts of this software except as
> documented below:
> 
> ====
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
> LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
> OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
> WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
> 
> ====
> 
> Copyright and related rights for sample code are waived via CC0. Sample
> code is defined as all source code displayed within the prose of the
> documentation.
> 
> CC0: http://creativecommons.org/publicdomain/zero/1.0/
> 
> ====
> 
> Files located in the node_modules and vendor directories are externally
> maintained libraries used by this software which have their own
> licenses; we recommend you read them, as their terms may differ from the
> terms above.

---------------------------------------

## magic-string
License: MIT
By: Rich Harris
Repository: https://github.com/Rich-Harris/magic-string

> Copyright 2018 Rich Harris
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## mlly, ufo
License: MIT
Repositories: https://github.com/unjs/mlly, https://github.com/unjs/ufo

> MIT License
> 
> Copyright (c) Pooya Parsa <pooya@pi0.io>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## mrmime
License: MIT
By: Luke Edwards
Repository: https://github.com/lukeed/mrmime

> The MIT License (MIT)
> 
> Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (https://lukeed.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## normalize-path
License: MIT
By: Jon Schlinkert, Blaine Bublitz
Repository: https://github.com/jonschlinkert/normalize-path

> The MIT License (MIT)
> 
> Copyright (c) 2014-2018, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## object-assign
License: MIT
By: Sindre Sorhus
Repository: https://github.com/sindresorhus/object-assign

> The MIT License (MIT)
> 
> Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## obug
License: MIT
By: Kevin Deng
Repository: https://github.com/sxzz/obug

> The MIT License (MIT)
> 
> Copyright © 2025-PRESENT Kevin Deng (https://github.com/sxzz)
> Copyright (c) 2014-2017 TJ Holowaychuk <tj@vision-media.ca>
> Copyright (c) 2018-2021 Josh Junon
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## on-finished
License: MIT
By: Douglas Christopher Wilson, Jonathan Ong
Repository: https://github.com/jshttp/on-finished

> (The MIT License)
> 
> Copyright (c) 2013 Jonathan Ong <me@jongleberry.com>
> Copyright (c) 2014 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## parse5
License: MIT
By: Ivan Nikulin, James Garbutt, Felix Boehm, Titus
Repository: https://github.com/inikulin/parse5

> Copyright (c) 2013-2019 Ivan Nikulin (ifaaan@gmail.com, https://github.com/inikulin)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## parseurl
License: MIT
By: Douglas Christopher Wilson, Jonathan Ong
Repository: https://github.com/pillarjs/parseurl

> (The MIT License)
> 
> Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
> Copyright (c) 2014-2017 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## periscopic
License: MIT
Repository: https://github.com/Rich-Harris/periscopic

> Copyright (c) 2019 Rich Harris
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## picocolors
License: ISC
By: Alexey Raspopov
Repository: https://github.com/alexeyraspopov/picocolors

> ISC License
> 
> Copyright (c) 2021-2024 Oleksii Raspopov, Kostiantyn Denysov, Anton Verinov
> 
> Permission to use, copy, modify, and/or distribute this software for any
> purpose with or without fee is hereby granted, provided that the above
> copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
> WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
> MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
> ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
> WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
> ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
> OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-import
License: MIT
By: Maxime Thirouin
Repository: https://github.com/postcss/postcss-import

> The MIT License (MIT)
> 
> Copyright (c) 2014 Maxime Thirouin, Jason Campbell & Kevin Mårtensson
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-load-config
License: MIT
By: Michael Ciniawky, Ryan Dunckel, Mateusz Derks, Dalton Santos, Patrick Gilday, François Wouts
Repository: https://github.com/postcss/postcss-load-config

> The MIT License (MIT)
> 
> Copyright Michael Ciniawsky <michael.ciniawsky@gmail.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-modules
License: MIT
By: Alexander Madyankin
Repository: https://github.com/css-modules/postcss-modules

> The MIT License (MIT)
> 
> Copyright 2015-present Alexander Madyankin <alexander@madyankin.name>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-modules-extract-imports
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/postcss-modules-extract-imports

> Copyright 2015 Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-modules-local-by-default
License: MIT
By: Mark Dalgleish
Repository: https://github.com/css-modules/postcss-modules-local-by-default

> The MIT License (MIT)
> 
> Copyright 2015 Mark Dalgleish <mark.john.dalgleish@gmail.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-modules-scope
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/postcss-modules-scope

> ISC License (ISC)
> 
> Copyright (c) 2015, Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-modules-values
License: ISC
By: Glen Maddern
Repository: https://github.com/css-modules/postcss-modules-values

> ISC License (ISC)
> 
> Copyright (c) 2015, Glen Maddern
> 
> Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
> 
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

---------------------------------------

## postcss-selector-parser
License: MIT
By: Maxime Thirouin, Ben Briggs, Chris Eppstein
Repository: https://github.com/postcss/postcss-selector-parser

> Copyright (c) Ben Briggs <beneb.info@gmail.com> (http://beneb.info)
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## postcss-value-parser
License: MIT
By: Bogdan Chadkin
Repository: https://github.com/TrySound/postcss-value-parser

> Copyright (c) Bogdan Chadkin <trysound@yandex.ru>
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## readdirp
License: MIT
By: Thorsten Lorenz, Paul Miller
Repository: https://github.com/paulmillr/readdirp

> MIT License
> 
> Copyright (c) 2012-2019 Thorsten Lorenz, Paul Miller (https://paulmillr.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## resolve.exports, totalist
License: MIT
By: Luke Edwards
Repositories: https://github.com/lukeed/resolve.exports, https://github.com/lukeed/totalist

> The MIT License (MIT)
> 
> Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## shell-quote
License: MIT
By: James Halliday
Repository: http://github.com/ljharb/shell-quote

> The MIT License
> 
> Copyright (c) 2013 James Halliday (mail@substack.net)
> 
> Permission is hereby granted, free of charge, 
> to any person obtaining a copy of this software and 
> associated documentation files (the "Software"), to 
> deal in the Software without restriction, including 
> without limitation the rights to use, copy, modify, 
> merge, publish, distribute, sublicense, and/or sell 
> copies of the Software, and to permit persons to whom 
> the Software is furnished to do so, 
> subject to the following conditions:
> 
> The above copyright notice and this permission notice 
> shall be included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR 
> ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, 
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## sirv
License: MIT
By: Luke Edwards
Repository: https://github.com/lukeed/sirv

---------------------------------------

## statuses
License: MIT
By: Douglas Christopher Wilson, Jonathan Ong
Repository: https://github.com/jshttp/statuses

> The MIT License (MIT)
> 
> Copyright (c) 2014 Jonathan Ong <me@jongleberry.com>
> Copyright (c) 2016 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## std-env
License: MIT
Repository: https://github.com/unjs/std-env

> MIT License
> 
> Copyright (c) Pooya Parsa <pooya@pi0.io>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## string-hash
License: CC0-1.0
By: The Dark Sky Company
Repository: https://github.com/darkskyapp/string-hash

---------------------------------------

## strip-literal
License: MIT
By: Anthony Fu
Repository: https://github.com/antfu/strip-literal

> MIT License
> 
> Copyright (c) 2022 Anthony Fu <https://github.com/antfu>
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## tinyexec
License: MIT
By: James Garbutt
Repository: https://github.com/tinylibs/tinyexec

> MIT License
> 
> Copyright (c) 2024 Tinylibs
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

---------------------------------------

## to-regex-range
License: MIT
By: Jon Schlinkert, Rouven Weßling
Repository: https://github.com/micromatch/to-regex-range

> The MIT License (MIT)
> 
> Copyright (c) 2015-present, Jon Schlinkert.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in
> all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
> THE SOFTWARE.

---------------------------------------

## unpipe
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/stream-utils/unpipe

> (The MIT License)
> 
> Copyright (c) 2015 Douglas Christopher Wilson <doug@somethingdoug.com>
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## util-deprecate
License: MIT
By: Nathan Rajlich
Repository: https://github.com/TooTallNate/util-deprecate

> (The MIT License)
> 
> Copyright (c) 2014 Nathan Rajlich <nathan@tootallnate.net>
> 
> Permission is hereby granted, free of charge, to any person
> obtaining a copy of this software and associated documentation
> files (the "Software"), to deal in the Software without
> restriction, including without limitation the rights to use,
> copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the
> Software is furnished to do so, subject to the following
> conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
> OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
> NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
> HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
> WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
> FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## utils-merge
License: MIT
By: Jared Hanson
Repository: https://github.com/jaredhanson/utils-merge

> The MIT License (MIT)
> 
> Copyright (c) 2013-2017 Jared Hanson
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## vary
License: MIT
By: Douglas Christopher Wilson
Repository: https://github.com/jshttp/vary

> (The MIT License)
> 
> Copyright (c) 2014-2017 Douglas Christopher Wilson
> 
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
> 
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## ws
License: MIT
By: Einar Otto Stangvik
Repository: https://github.com/websockets/ws

> Copyright (c) 2011 Einar Otto Stangvik <einaros@gmail.com>
> Copyright (c) 2013 Arnout Kazemier and contributors
> Copyright (c) 2016 Luigi Pinca and contributors
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
> the Software, and to permit persons to whom the Software is furnished to do so,
> subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
> FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
> COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
> IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
> CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---------------------------------------

## zimmerframe
License: MIT
Repository: https://github.com/sveltejs/zimmerframe

> MIT License
> 
> Copyright (c) 2023 [these people](https://github.com/Rich-Harris/zimmerframe/graphs/contributors)
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.`},{name:`vite-plugin-svgr`,version:`5.2.0`,license:`MIT`,text:`MIT License

Copyright (c) 2021 Rongjian Zhang

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`},{name:`Yet Another File Manager`,version:``,license:`MIT`,text:`Licensed under MIT.

MIT License

Copyright (c) 2026 yukiyosanako / ゆきよさなこ

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}],uh=v.div`
    position: fixed;
    inset: 0;
    z-index: 80;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    animation: attributionFade 160ms ease;

    @keyframes attributionFade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`,dh=v.div`
    display: flex;
    flex-direction: column;
    width: min(920px, 100%);
    max-height: min(680px, 100%);
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-dialog);
    animation: attributionIn 180ms cubic-bezier(0.22, 1, 0.36, 1);

    @keyframes attributionIn {
        from {
            opacity: 0;
            transform: translateY(8px);
        }
        to {
            opacity: 1;
            transform: none;
        }
    }
`,fh=v.header`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 16px;
    flex-shrink: 0;
    padding: 16px 18px 14px;
    border-bottom: 1px solid var(--border-color);
`,ph=v.h2`
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
`,mh=v.p`
    margin: 4px 0 0;
    max-width: 620px;
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,hh=v.button`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-secondary);
    cursor: pointer;

    &:hover {
        border-color: rgba(248, 113, 113, 0.5);
        background: rgba(248, 113, 113, 0.12);
        color: #fca5a5;
    }
`,gh=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,_h=v.nav`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: 250px;
    flex-shrink: 0;
    padding: 8px;
    border-right: 1px solid var(--border-color);
    overflow-y: auto;
`,vh=v.button`
    display: flex;
    flex-direction: column;
    gap: 1px;
    width: 100%;
    padding: 7px 9px;
    border: 0;
    border-radius: var(--radius-sm);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.18)`:`var(--bg-card-hover)`};
        color: var(--text-primary);
    }
`,yh=v.span`
    font-size: 11px;
    font-weight: 600;
    word-break: break-word;
`,bh=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,xh=v.article`
    flex: 1;
    min-width: 0;
    padding: 16px 18px 20px;
    overflow-y: auto;
`,Sh=v.div`
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 2px 10px;
    margin-bottom: 10px;
`,Ch=v.h3`
    margin: 0;
    font-size: 12px;
    font-weight: 600;
    color: var(--text-primary);
`,wh=v.pre`
    margin: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    line-height: 1.6;
    color: var(--text-secondary);
    white-space: pre-wrap;
    word-break: break-word;
`,Th=e=>[e.version,e.license].filter(Boolean).join(` · `);function Eh({onClose:e}){let t=o(),[n,r]=(0,z.useState)(0),i=lh[n]??lh[0];return(0,z.useEffect)(()=>{let t=t=>{t.key===`Escape`&&e()};return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]),(0,q.jsx)(uh,{onClick:e,children:(0,q.jsxs)(dh,{onClick:e=>e.stopPropagation(),role:`dialog`,children:[(0,q.jsxs)(fh,{children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(ph,{children:t(`open_source_attribution`)}),(0,q.jsx)(mh,{children:t(`this_app_ships_count_open_source_projects_pick_one_to_read_its_whole_licence`,{count:lh.length})})]}),(0,q.jsx)(hh,{onClick:e,title:t(`close`),type:`button`,children:(0,q.jsx)(Gi,{size:12})})]}),(0,q.jsxs)(gh,{children:[(0,q.jsx)(_h,{children:lh.map((e,t)=>(0,q.jsxs)(vh,{$active:t===n,onClick:()=>r(t),type:`button`,children:[(0,q.jsx)(yh,{children:e.name}),(0,q.jsx)(bh,{children:Th(e)})]},e.name+`@`+e.version))}),(0,q.jsxs)(xh,{children:[(0,q.jsxs)(Sh,{children:[(0,q.jsx)(Ch,{children:i.name}),(0,q.jsx)(bh,{children:Th(i)})]}),(0,q.jsx)(wh,{children:i.text})]})]})]})})}function Dh(){let e=o();return(0,q.jsx)(Oh,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var Oh=v.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,kh=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function Ah(e){return`"${e.replaceAll(`"`,``)}"`}function jh(e){let t=document.documentElement.style;for(let n of kh){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Ah(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Mh(){return l.available?(await l.request(`app.fonts`)).fonts??[]:[]}function Nh({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let s=o(),[c,l]=(0,z.useState)(null),[u,d]=(0,z.useState)(``),f=(0,z.useRef)(null),p=(0,z.useRef)(null),m=(0,z.useMemo)(()=>{let e=u.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,u]);(0,z.useEffect)(()=>{if(!c)return;p.current?.focus();let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[c]);let h=()=>{if(c){l(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;d(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;l({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},g=e=>{a(e),l(null)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Ph,{"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:i,onClick:h,ref:f,type:`button`,children:[(0,q.jsx)(Fh,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,q.jsx)(Ih,{children:`▾`})]}),c&&(0,uo.createPortal)((0,q.jsxs)(Lh,{"data-font-menu":`true`,role:`listbox`,style:{left:c.left,maxHeight:c.maxHeight,top:c.top,width:c.width},children:[(0,q.jsxs)(Rh,{children:[(0,q.jsx)(Ai,{size:12}),(0,q.jsx)(zh,{onChange:e=>d(e.target.value),placeholder:s(`filter_fonts`),ref:p,value:u})]}),(0,q.jsxs)(Bh,{children:[(0,q.jsxs)(Vh,{$active:!e,"aria-selected":!e,onClick:()=>g(null),role:`option`,type:`button`,children:[(0,q.jsxs)(Uh,{children:[n,` `,(0,q.jsx)(Gh,{children:s(`default_2`)})]}),!e&&(0,q.jsx)(Wi,{size:11})]}),m.map(t=>(0,q.jsxs)(Vh,{$active:e===t,"aria-selected":e===t,onClick:()=>g(t),role:`option`,type:`button`,children:[(0,q.jsxs)(Hh,{children:[(0,q.jsx)(Uh,{children:t}),(0,q.jsx)(Wh,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,q.jsx)(Wi,{size:11})]},t)),m.length===0&&(0,q.jsx)(Kh,{children:s(`no_matching_font`)})]})]}),document.body)]})}var Ph=v.button`
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
`,Fh=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ih=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,Lh=v.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${So}
`,Rh=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,zh=v.input`
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
`,Bh=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,Vh=v.button`
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
`,Hh=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Uh=v.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wh=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gh=v.span`
    color: var(--text-muted);
    font-size: 10px;
`,Kh=v.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,qh=[{id:`goBack`,label:`back`,note:`goes_to_the_previous_folder_in_this_tab`},{id:`goForward`,label:`forward`,note:`goes_to_the_next_folder_in_this_tab`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`copies_the_selection_so_it_can_be_pasted_elsewhere`},{id:`duplicate`,label:`duplicate`,note:`makes_a_copy_of_the_selection_in_this_folder_with_a_new_name`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`moves_the_selection_to_the_recycle_bin`},{id:`deletePermanently`,label:`delete_permanently`,note:`deletes_the_selection_without_the_recycle_bin`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_a_terminal_in_the_current_folder`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],Jh=`en`,Yh=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],Xh=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],Zh=new Date(2026,10,5,16,8).getTime(),Qh=`system`,$h={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},eg=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],tg={application:(0,q.jsx)(Li,{size:13}),share_access:(0,q.jsx)(Na,{size:13}),startup:(0,q.jsx)(Pa,{size:13}),fonts:(0,q.jsx)(ra,{size:13}),time_format:(0,q.jsx)(Vi,{size:13}),updates:(0,q.jsx)(Mi,{size:13}),colors:(0,q.jsx)(za,{size:13}),background:(0,q.jsx)(ma,{size:13}),safety:(0,q.jsx)(Ra,{size:13}),tags:(0,q.jsx)(Ba,{size:13}),files_view:(0,q.jsx)(zi,{size:13}),shortcuts:(0,q.jsx)(Va,{size:13}),memory:(0,q.jsx)(ia,{size:13}),overview:(0,q.jsx)(la,{size:13}),gallery:(0,q.jsx)(Sa,{size:13}),icons:(0,q.jsx)(Ha,{size:13}),icons_by_extension:(0,q.jsx)(Oi,{size:13}),folder_icons:(0,q.jsx)(Di,{size:13}),folder_index:(0,q.jsx)(Ta,{size:13}),index_tasks:(0,q.jsx)(Hi,{size:13}),files:(0,q.jsx)(Ki,{size:13})},ng=`yafm.colors.recent`;function rg(){let e=ir(ng);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function ig({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let s=o(),[c,l]=(0,z.useState)([]),[u,d]=(0,z.useState)(null),[m,_]=(0,z.useState)(!1),[v,y]=(0,z.useState)(null),b=f(g(v?.themeMode)),[T,E]=(0,z.useState)(null),[ee,D]=(0,z.useState)(``),[O,k]=(0,z.useState)(`file`),[A,M]=(0,z.useState)(!1),[te,ne]=(0,z.useState)(!1),[N,re]=(0,z.useState)(null),[ie,F]=(0,z.useState)(dt),[se,R]=(0,z.useState)(!1),[ge,B]=(0,z.useState)(null),[_e,ve]=(0,z.useState)(null),[ye,xe]=(0,z.useState)(null),[Se,Ce]=(0,z.useState)(!1),[we,Te]=(0,z.useState)(null),[Ee,De]=(0,z.useState)(!1),[Oe,ke]=(0,z.useState)(null),[Ae,je]=(0,z.useState)(null),[Me,Ne]=(0,z.useState)(!1),[V,Pe]=(0,z.useState)(!1),[Fe,Ie]=(0,z.useState)([]),[Le,Re]=(0,z.useState)(null),[H,ze]=(0,z.useState)(!1),[Be,Ve]=(0,z.useState)(null),[He,Ue]=(0,z.useState)(``),[We,Ke]=(0,z.useState)(ac),[Je,Ye]=(0,z.useState)(null),[Qe,$e]=(0,z.useState)(null),[ot,ct]=(0,z.useState)(``),[U,gt]=(0,z.useState)(``),[_t,vt]=(0,z.useState)(null),[yt,bt]=(0,z.useState)(rg),[xt,St]=(0,z.useState)({}),[Ct,wt]=(0,z.useState)(null),[Tt,Et]=(0,z.useState)(null),[Dt,Ot]=(0,z.useState)(!1),[kt,At]=(0,z.useState)(null),[jt,Mt]=(0,z.useState)(null),Nt=(0,z.useRef)(!1),[Pt,Ft]=(0,z.useState)(null),[It,Lt]=(0,z.useState)(eg[0].id),[Rt,zt]=(0,z.useState)([]),[Bt,Vt]=(0,z.useState)(null),[Ht,Ut]=(0,z.useState)(``),[Gt,Yt]=(0,z.useState)(!1),[Xt,Zt]=(0,z.useState)(null),[Qt,$t]=(0,z.useState)(null),[nn,rn]=(0,z.useState)(!1),[an,on]=(0,z.useState)(``),sn=(0,z.useRef)(null),cn=(0,z.useRef)({}),ln=v?.defaultView??be,un=v?.themePresets??[],dn=e?.platform===`windows`,fn=dn?_e?_e.registered&&_e.pathMatches:!1:v?.archiveHandler??!1,pn=_e?.registered??v?.archiveHandler??!1,mn=dn?ye?ye.registered&&ye.pathMatches:!1:v?.defaultFileManager??!1,hn=dn?ie.registered&&ie.pathMatches:v?.linksEnabled??!1;wf(sn,r??null,`section`,i??(()=>void 0),[v]),(0,z.useEffect)(()=>{let e=sn.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Lt(eg[eg.length-1].id);return}let n=t+110,r=eg[0].id;for(let{id:e}of eg){let t=cn.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Lt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let _n=e=>t=>{cn.current[e]=t},vn=e=>{cn.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),Lt(e)},yn=(0,z.useRef)(0),bn=e=>{let t=e.currentTarget,n=Math.sign(e.deltaY);if(n===0)return;if(t.scrollHeight>t.clientHeight+1){let e=t.scrollTop<=0&&n<0,r=t.scrollTop+t.clientHeight>=t.scrollHeight-1&&n>0;if(!e&&!r)return}let r=Date.now();if(r<yn.current)return;let i=eg.findIndex(e=>e.id===It),a=i<0?0:i,o=Math.min(Math.max(a+n,0),eg.length-1);o!==a&&(yn.current=r+400,vn(eg[o].id))};(0,z.useEffect)(()=>{t&&vn(t)},[t]),(0,z.useEffect)(()=>{p().then(e=>l(e.available),()=>l([]))},[]),(0,z.useEffect)(()=>{Mh().then(zt,()=>zt([]))},[]),(0,z.useEffect)(()=>{mt().then(Zt,()=>Zt(null))},[]),(0,z.useEffect)(()=>{le().then(Et,()=>void 0)},[]),(0,z.useEffect)(()=>{Ge().then(d,()=>d(null)),Xe().then(y,()=>y(null)),ft().then(F,()=>F(dt)),nt().then(ve,()=>ve(null)),et().then(xe,()=>xe(null)),ih().then(Ie,()=>Ie([]))},[]),(0,z.useEffect)(()=>{let e=()=>void lt().then(re,()=>re(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let W=async e=>{if(!v)return;let t={...v,...e};Object.keys(e).every(e=>t[e]===v[e])||(y(t),gn(),y(await at(t)),n())},xn=async e=>{let t=await Ja(e);if(!t)return;let n=v?.backgroundCustom??[];await W({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},G=async()=>{let e=an.trim();if(!v||!j(e))return;let t=v.backgroundCustom??[];on(``),await W({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},K=e=>{if(!v)return;let t=v.backgroundSource;W({backgroundCustom:v.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},Sn=async()=>{if(!v)return;let t=await qa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;v.protectedPaths.includes(r)||await W({protectedPaths:[...v.protectedPaths,r]})},Cn=()=>{let e=ot.trim();v&&e&&!v.protectedPaths.includes(e)&&(ct(``),W({protectedPaths:[...v.protectedPaths,e]}))},wn=()=>{if(!v||!Je)return;let e=Je.value.trim(),t=Je.from;Ye(null),e.length!==0&&e!==t&&W({protectedPaths:v.protectedPaths.map(n=>n===t?e:n)})},Tn=e=>{v&&W({protectedPaths:v.protectedPaths.filter(t=>t!==e)})},En=async()=>{let e=await Ze();e.length>0&&await W({protectedPaths:e})},Dn=()=>{if(!v||!Qe)return;let e=Qe.value.trim(),t=Qe.from;$e(null),e&&e!==t&&W({directoryIndexBlacklist:v.directoryIndexBlacklist.map(n=>n===t?e:n)})},On=()=>{let e=U.trim();v&&e&&!v.directoryIndexBlacklist.includes(e)&&(gt(``),W({directoryIndexBlacklist:[...v.directoryIndexBlacklist,e]}))},kn=async()=>{if(!v)return;let t=await qa();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;v.directoryIndexBlacklist.includes(r)||await W({directoryIndexBlacklist:[...v.directoryIndexBlacklist,r]})},An=e=>{v&&W({directoryIndexBlacklist:v.directoryIndexBlacklist.filter(t=>t!==e)})},jn=()=>{W({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Mn=()=>{if(!v||_t===null)return;let e=_t.trim()||`yyyy/MM/dd HH:mm`;vt(null),e!==v.timeFormatPattern&&W({timeFormatPattern:e})},Nn=(e,t)=>{bt(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return ar(ng,i),i})},Pn=P(v?.accentColor,oe),Fn=P(v?.secondaryColor,h),In=(e,t)=>{v&&(Nn(`accent`,Pn),Nn(`secondary`,Fn),W({accentColor:e,secondaryColor:t}))},Ln=(e,t)=>{v&&(Nn(e,e===`accent`?Pn:Fn),W(e===`accent`?{accentColor:t}:{secondaryColor:t}))},Rn=async()=>{Ot(!0),At(null);try{Et(await ue())}catch{At(s(`could_not_check_for_updates`))}finally{Ot(!1)}},zn=async()=>{Nt.current=!1,At(null),Mt({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await de();e.ok||Bn(e.error??``)}catch(e){Bn(e instanceof Error?e.message:String(e))}},Bn=e=>Mt(t=>t&&{...t,phase:`error`,error:e}),Vn=()=>{Mt(null),fe().catch(e=>At(e instanceof Error?e.message:String(e)))},Hn=async()=>{Mt(e=>e&&{...e,phase:`installing`});try{let e=await pe();e.ok||Bn(e.error??s(`the_update_failed`))}catch(e){Bn(e instanceof Error?e.message:String(e))}};(0,z.useEffect)(()=>me(e=>Mt(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,z.useEffect)(()=>he(e=>Mt(t=>t&&{...t,changelog:e.text})),[]),(0,z.useEffect)(()=>{jt?.phase!==`ready`||Nt.current||(Nt.current=!0,Hn())},[jt?.phase]);let Un=async()=>{if(!v||!Ct)return;let e=Ct.name.trim()||`${Ct.accent.toUpperCase()} / ${Ct.secondary.toUpperCase()}`,t=[...v.themePresets,{name:e,accent:Ct.accent,secondary:Ct.secondary}];wt(null),await W({themePresets:t})},Wn=async e=>{v&&await W({themePresets:v.themePresets.filter((t,n)=>n!==e)})},Gn=e=>{let t=Pt;Ft(null),t&&t.role===e&&(e===`accent`?Pn:Fn).toLowerCase()!==t.color.toLowerCase()&&Nn(e,t.color)},Kn=async()=>{let e=He.trim();if(e&&!H){ze(!0),Ve(null);try{Ie(await oh(e,We)),Ue(``)}catch{Ve(s(`could_not_add_the_tag`))}finally{ze(!1)}}},qn=async(e,t)=>{Ie(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await sh(e,t)||Ve(s(`could_not_change_the_tag_s_color`))},Jn=async e=>{if(H)return;ze(!0),Ve(null);let t=await ah(e);Ie(await ih()),t||Ve(`"${e}" is still used by a folder whose index could not be updated.`),ze(!1)},Yn=async()=>{let e=Le;if(!e||H)return;let t=e.value.trim();t.length===0||t===e.name?Re(null):(ze(!0),Ve(null),await ch(e.name,t)?(Ie(await ih()),Re(null)):Ve(`Could not rename "${e.name}".`),ze(!1))},Xn=async e=>{let t=new Set(ln.columns??be.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=jl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await W({defaultView:{...ln,columns:n}})},Zn=async()=>{if(se)return;let e=!hn;R(!0),B(null);try{let t=await pt(e),r=t.registered&&t.pathMatches;F(t),y(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&B(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{B(`The request to Windows failed. Try again.`)}finally{R(!1)}},Qn=async e=>{if(!m){_(!0);try{d(await qe(e)),n()}finally{_(!1)}}},$n=async()=>{if(Ee||!v)return;let e=!mn;De(!0),ke(null);try{let t=await tt(e);xe(t);let r=dn?t.registered&&t.pathMatches:e;y(e=>e&&{...e,defaultFileManager:r}),n(),dn&&r!==e&&ke(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ke(`The request to Windows failed. Try again.`)}finally{De(!1)}},er=async()=>{if(!Se){Ce(!0),Te(null);try{let e=await rt();ve(e);let t=e.registered&&e.pathMatches;y(e=>e&&{...e,archiveHandler:t}),n(),t||Te(`Windows did not accept the archive registration. Try again.`)}catch{Te(`The request to Windows failed. Try again.`)}finally{Ce(!1)}}},tr=async()=>{if(!Se){Ce(!0),Te(null);try{let e=await it();ve(e),y(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&Te(`The registration is still there. Try turning it off again.`)}catch{Te(`The request to Windows failed. Try again.`)}finally{Ce(!1)}}},nr=async(e,t)=>{if(!v)return;let n={...v.extensionIcons};t===null?delete n[e]:n[e]=t,await W({extensionIcons:n})},rr=Jt(v?.shortcuts),ir=(0,z.useMemo)(()=>{let e=new Map;for(let{id:t}of qh)for(let n of rr[t]){let r=e.get(n)??[];r.push(t),e.set(n,r)}return e},[v]),or=e=>{let t=new Set;for(let n of rr[e])for(let r of ir.get(n)??[]){if(r===e)continue;let n=qh.find(e=>e.id===r);n&&t.add(s(n.label))}return[...t]},sr=(e,t)=>{W({shortcuts:{...v?.shortcuts,[e]:Kt(t)}})},cr=(e,t)=>{let n=[...rr[e]];n.splice(t,1),sr(e,n)};(0,z.useEffect)(()=>{if(!Ae)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){je(null);return}let t=en(e);if(!t)return;let n=[...rr[Ae.action]];Ae.index>=0?n[Ae.index]=t:n.includes(t)||n.push(t),je(null),sr(Ae.action,n)};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[Ae,v]),(0,z.useEffect)(()=>{if(!V)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Pe(!1);return}let t=en(e);t&&(Pe(!1),W({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[V,v]);let lr=async e=>{await W({recentLimit:Math.min(Math.max(e,0),50)})},ur=(e,t)=>{let n=t??xt[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};St(t=>({...t,[e]:void 0})),W(i)},dr=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Vt(null),await W({sharePortMode:`custom`,sharePort:n}),await il(n,`custom`)},fr=async e=>{let t=e===`custom`,n=t?v?.sharePort??8080:null;await W({sharePortMode:t?`custom`:`random`,sharePort:n}),await il(n,t?`custom`:`random`)};(0,z.useEffect)(()=>{hl().then(Yt,()=>void 0)},[]);let pr=async()=>{Ht.length!==0&&(Yt(await gl(Ht)),Ut(``))},mr=async()=>{Yt(await gl(null))},hr=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;rn(!0),$t(null);try{let e=await ht(t);Zt(e),$t(e.error),e.error||await W({startupMode:t})}finally{rn(!1)}},gr=async e=>{await W({galleryRoots:e.length>0?e:null})},_r=async()=>{let e=await qa(),t=v?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await gr([...t,e])},vr=async()=>{let e=ee.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await nr(e,O),D(``))},yr=async()=>{ne(!0);try{let e=await qa();if(!e)return;let t=await Ja([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await st(e.replace(/[\\/][^\\/]+$/,``),x(e),`file:${t}`)&&(gn(),E({folder:e,icon:t}))}finally{ne(!1)}},br=async(e,t)=>{let n={...v?.fonts};t?n[e]=t:delete n[e],await W({fonts:n})};return(0,q.jsxs)(_g,{children:[(0,q.jsxs)(vg,{ref:sn,children:[(0,q.jsxs)(yg,{ref:_n(`application`),children:[(0,q.jsx)(gg,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`version`)}),(0,q.jsx)(__,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`platform`)}),(0,q.jsx)(__,{children:e?.platform??`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`language`)}),(0,q.jsx)($,{children:s(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(pg,{disabled:!v,onChange:e=>void W({language:e}),options:[Qh,...c.length>0?c:[Jh]],value:v?.language??Jh})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`picker_window_size`)}),(0,q.jsx)($,{children:s(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(O_,{inputMode:`numeric`,onBlur:e=>ur(`width`,e.currentTarget.value),onChange:e=>St(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:xt.width??String(v?.pickerWindowWidth??1200)}),(0,q.jsx)(__,{children:`×`}),(0,q.jsx)(O_,{inputMode:`numeric`,onBlur:e=>ur(`height`,e.currentTarget.value),onChange:e=>St(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:xt.height??String(v?.pickerWindowHeight??800)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`web_server_port`)}),(0,q.jsx)($,{children:s(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Uo,{disabled:!v,onChange:e=>void fr(e),options:[{value:`random`,label:s(`random`)},{value:`custom`,label:s(`custom_port`)}],value:v?.sharePortMode??`random`,width:160})})]}),v?.sharePortMode===`custom`&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`custom_port`)}),(0,q.jsx)($,{children:s(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(O_,{inputMode:`numeric`,onBlur:e=>void dr(e.currentTarget.value),onChange:e=>Vt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Bt??(v?.sharePort?String(v.sharePort):``)})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`link_paths`)}),(0,q.jsx)($,{children:s(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Uo,{disabled:!v,onChange:e=>void W({linkPathMode:e}),options:[{value:`relative`,label:s(`relative`)},{value:`absolute`,label:s(`absolute`)}],value:v?.linkPathMode??`relative`,width:160})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`global_hotkey`)}),(0,q.jsx)($,{children:s(`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(ov,{$listening:V,disabled:!v,onClick:()=>Pe(!0),type:`button`,children:V?s(`press_a_key`):v?.globalHotkey?tn(v.globalHotkey):s(`none`)}),v?.globalHotkey&&(0,q.jsxs)(x_,{onClick:()=>void W({globalHotkey:null}),type:`button`,children:[(0,q.jsx)(Gi,{size:13}),s(`clear`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`open_yafm_links`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),ie.registered&&!ie.pathMatches&&(0,q.jsx)(g_,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ie.registeredPath??`?`})}),ge&&(0,q.jsx)(g_,{children:ge})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(T_,{$on:hn,children:s(hn?`active`:`off`)}),(0,q.jsx)(E_,{$on:hn,disabled:se,onClick:()=>void Zn(),title:s(hn?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,q.jsx)(D_,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_as_the_default_file_manager`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),ye?.registered&&!ye.pathMatches&&(0,q.jsx)(g_,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ye.registeredPath??`?`})}),Oe&&(0,q.jsx)(g_,{children:Oe})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(T_,{$on:mn,children:s(mn?`active`:`off`)}),(0,q.jsx)(E_,{$on:mn,disabled:!v||Ee,onClick:()=>void $n(),title:s(mn?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,q.jsx)(D_,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`open_archives_with_this_app`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,q.jsx)($,{children:s(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),_e?.registered&&!_e.pathMatches&&(0,q.jsx)(g_,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:_e.registeredPath??`?`})}),we&&(0,q.jsx)(g_,{children:we})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(T_,{$on:fn,children:s(fn?`active`:`off`)}),(0,q.jsxs)(mv,{disabled:!v||Se||fn,onClick:()=>void er(),type:`button`,children:[(0,q.jsx)(ea,{size:13}),s(`register`)]}),e?.platform===`windows`&&(0,q.jsxs)(mv,{onClick:()=>void I(`ms-settings:defaultapps`),type:`button`,children:[(0,q.jsx)(Li,{size:13}),s(`default_apps`)]}),(0,q.jsxs)(w_,{disabled:!v||Se||!pn,onClick:()=>void tr(),type:`button`,children:[(0,q.jsx)(Gi,{size:13}),s(`unregister`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reopen_the_tabs_that_were_open`)}),(0,q.jsx)($,{children:s(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,q.jsx)(E_,{$on:v?.restoreTabs??!0,disabled:!v,onClick:()=>void W({restoreTabs:!v?.restoreTabs}),type:`button`,children:(0,q.jsx)(D_,{})})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`share-access`),children:[(0,q.jsx)(gg,{note:`share_access_note`,title:`share_access`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(Q,{children:s(`share_access_require_approval`)}),(0,q.jsx)(Dh,{})]}),(0,q.jsx)($,{children:s(`share_access_note`)})]}),(0,q.jsx)(E_,{$on:v?.shareAccessEnabled??!0,disabled:!v,onClick:()=>void W({shareAccessEnabled:!(v?.shareAccessEnabled??!0)}),type:`button`,children:(0,q.jsx)(D_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Q,{children:s(`share_access_approval_minutes`)})}),(0,q.jsx)(Z,{children:(0,q.jsx)(p_,{max:1440,min:1,onChange:e=>void W({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:v?.shareApprovalMinutes??60})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Q,{children:s(`share_access_denial_seconds`)})}),(0,q.jsx)(Z,{children:(0,q.jsx)(p_,{max:3600,min:1,onChange:e=>void W({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:v?.shareDenialSeconds??10})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(h_,{children:(0,q.jsx)(Q,{children:s(`password`)})}),(0,q.jsx)($,{children:s(`share_access_password_note`)}),Gt&&(0,q.jsx)($,{children:s(`share_access_password_is_set`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(m_,{autoComplete:`new-password`,onChange:e=>Ut(e.target.value),placeholder:s(`password`),type:`password`,value:Ht}),(0,q.jsxs)(mv,{disabled:Ht.length===0,onClick:()=>void pr(),type:`button`,children:[(0,q.jsx)(Wi,{size:13}),s(`save`)]}),Gt&&(0,q.jsxs)(w_,{onClick:()=>void mr(),type:`button`,children:[(0,q.jsx)(Gi,{size:13}),s(`clear`)]})]})]}),(0,q.jsx)(Y,{children:(0,q.jsxs)(X,{children:[(0,q.jsx)(h_,{children:(0,q.jsx)(Q,{children:s(`devices`)})}),(0,q.jsx)($,{children:s(`share_access_devices_note`)})]})}),(0,q.jsx)(ag,{approvalMinutes:v?.shareApprovalMinutes??60,denialSeconds:v?.shareDenialSeconds??10})]})]}),(0,q.jsxs)(yg,{ref:_n(`startup`),children:[(0,q.jsx)(gg,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`start_with_the_computer`)}),(0,q.jsx)($,{children:s(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),Qt&&(0,q.jsx)(g_,{children:Qt}),Xt&&!Xt.supported&&(0,q.jsx)(g_,{children:s(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Uo,{disabled:!v||nn||Xt!==null&&!Xt.supported,onChange:e=>void hr(e),options:[{value:`none`,label:s(`none`)},{value:`shortcut`,label:s(`shortcut`)},{value:`task`,label:s(`scheduled_task`)}],value:Xt?.mode??v?.startupMode??`none`,width:170})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`start_hidden_in_the_tray`)}),(0,q.jsx)($,{children:s(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(E_,{$on:v?.startHidden??!1,disabled:!v,onClick:()=>void W({startHidden:!v?.startHidden}),type:`button`,children:(0,q.jsx)(D_,{})})})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`fonts`),children:[(0,q.jsx)(gg,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`}),(0,q.jsxs)(Sg,{children:[kh.map(e=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(e.label)}),(0,q.jsx)($,{children:s(`falls_back_to_font_until_another_family_is_chosen`,{font:s(e.fallback)})})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Nh,{defaultLabel:s(e.fallback),disabled:!v,fonts:Rt,onChange:t=>void br(e.id,t),sample:e.sample,value:v?.fonts?.[e.id]??null})})]},e.id)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset`)}),(0,q.jsx)($,{children:s(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(mv,{onClick:()=>void W({fonts:{}}),type:`button`,children:[(0,q.jsx)(Mi,{size:13}),s(`reset`)]})})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`time`),children:[(0,q.jsx)(gg,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`}),(0,q.jsx)(Sg,{children:(0,q.jsxs)(Cg,{children:[(0,q.jsxs)(wg,{children:[(0,q.jsx)(Q,{children:s(`format`)}),(0,q.jsx)($,{children:s(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,q.jsx)(ev,{children:Xh.map(e=>(0,q.jsx)(tv,{$active:(v?.timeFormat??`24`)===e.id,onClick:()=>void W({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(v?.timeFormat??`24`)===`custom`&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(nv,{"aria-label":s(`pattern`),onBlur:Mn,onChange:e=>vt(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Mn()):e.key===`Escape`&&vt(null)},spellCheck:!1,value:_t??v?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,q.jsx)($,{children:s(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,q.jsxs)(rv,{children:[(0,q.jsx)(`span`,{children:s(`preview`)}),(0,q.jsx)(`code`,{children:w(Zh,v?.timeFormat,_t??v?.timeFormatPattern)})]})]})})]}),(0,q.jsxs)(yg,{ref:_n(`updates`),children:[(0,q.jsx)(gg,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`current_version`)}),(0,q.jsx)(__,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`latest_version`)}),(0,q.jsx)(__,{children:Tt?`v${Tt.latest}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:Tt?Tt.available?s(`version_version_is_available`,{version:Tt.latest}):s(`you_are_on_the_latest_version`):s(`not_checked_yet`)}),(0,q.jsx)($,{children:Tt?.available?s(`the_installer_downloads_installs_itself_and_closes_the_app`):s(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,q.jsxs)(Z,{children:[Tt?.available&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(mv,{onClick:()=>void ce(),type:`button`,children:[(0,q.jsx)(Ga,{size:13}),s(`open_release_page`)]}),dn&&(0,q.jsxs)(mv,{disabled:jt!==null,onClick:()=>void zn(),type:`button`,children:[(0,q.jsx)(pa,{size:13}),s(`download_and_install`)]})]}),(0,q.jsxs)(mv,{disabled:Dt||jt!==null,onClick:()=>void Rn(),type:`button`,children:[(0,q.jsx)(Mi,{size:13}),s(Dt?`checking`:`check_for_updates`)]}),(0,q.jsxs)(mv,{onClick:()=>void L(),type:`button`,children:[(0,q.jsx)(Di,{size:13}),s(`open_log_folder`)]})]})]}),kt&&(0,q.jsx)(Y,{children:(0,q.jsx)(g_,{children:kt})})]})]}),(0,q.jsxs)(yg,{ref:_n(`colors`),children:[(0,q.jsx)(gg,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Cg,{children:[(0,q.jsxs)(wg,{children:[(0,q.jsx)(Q,{children:s(`theme`)}),(0,q.jsx)($,{children:s(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,q.jsx)(ev,{children:Yh.map(e=>(0,q.jsx)(tv,{$active:(v?.themeMode??`system`)===e.id,onClick:()=>void W({themeMode:e.id}),type:`button`,children:s(e.label)},e.id))})]}),(0,q.jsxs)(Cg,{children:[(0,q.jsxs)(wg,{children:[(0,q.jsx)(Q,{children:s(`presets`)}),(0,q.jsx)($,{children:s(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,q.jsxs)(Tg,{children:[cd.map(e=>(0,q.jsxs)(Eg,{$on:Pn.toLowerCase()===e.accent&&Fn.toLowerCase()===e.secondary,onClick:()=>In(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)(Dg,{children:s(e.name)})]},e.name)),un.map((e,t)=>(0,q.jsxs)(Og,{children:[(0,q.jsxs)(Eg,{$on:Pn.toLowerCase()===e.accent.toLowerCase()&&Fn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>In(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)(Dg,{children:e.name})]}),(0,q.jsx)(kg,{onClick:()=>void Wn(t),title:s(`remove_preset`),type:`button`,children:(0,q.jsx)(Gi,{size:9})})]},`${e.name}-${t}`)),Ct?(0,q.jsxs)(jg,{children:[(0,q.jsxs)(Ng,{children:[(0,q.jsx)(`i`,{style:{background:Ct.accent}}),(0,q.jsx)(`i`,{style:{background:Ct.secondary}})]}),(0,q.jsx)(Mg,{autoFocus:!0,maxLength:24,onChange:e=>wt({...Ct,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Un()):e.key===`Escape`&&(e.preventDefault(),wt(null))},placeholder:s(`preset_name`),spellCheck:!1,value:Ct.name}),(0,q.jsxs)(x_,{onClick:()=>void Un(),type:`button`,children:[(0,q.jsx)(Wi,{size:13}),s(`save`)]}),(0,q.jsxs)(x_,{onClick:()=>wt(null),type:`button`,children:[(0,q.jsx)(Gi,{size:13}),s(`cancel`)]})]}):(0,q.jsxs)(Ag,{disabled:!v,onClick:()=>wt({name:``,accent:Pn,secondary:Fn}),title:s(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,q.jsx)(Ni,{size:12}),s(`add_preset`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`accent_color`)}),(0,q.jsx)($,{children:s(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(hg,{colors:yt.accent,current:Pn,onApply:e=>Ln(`accent`,e)}),(0,q.jsx)(S_,{"aria-label":s(`accent_color`),disabled:!v,onBlur:()=>Gn(`accent`),onChange:e=>void W({accentColor:e.target.value}),onFocus:()=>Ft({role:`accent`,color:Pn}),type:`color`,value:Pn}),(0,q.jsx)(C_,{children:Pn.toUpperCase()})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`secondary_color`)}),(0,q.jsx)($,{children:s(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(hg,{colors:yt.secondary,current:Fn,onApply:e=>Ln(`secondary`,e)}),(0,q.jsx)(S_,{"aria-label":s(`secondary_color`),disabled:!v,onBlur:()=>Gn(`secondary`),onChange:e=>void W({secondaryColor:e.target.value}),onFocus:()=>Ft({role:`secondary`,color:Fn}),type:`color`,value:Fn}),(0,q.jsx)(C_,{children:Fn.toUpperCase()})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset_colors`)}),(0,q.jsx)($,{children:s(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(x_,{disabled:!v,onClick:()=>{Nn(`accent`,Pn),Nn(`secondary`,Fn),W({accentColor:null,secondaryColor:null})},type:`button`,children:[(0,q.jsx)(Mi,{size:13}),s(`reset`)]})})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`background`),children:[(0,q.jsx)(gg,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Cg,{children:[(0,q.jsxs)(wg,{children:[(0,q.jsx)(Q,{children:s(`wallpaper`)}),(0,q.jsx)($,{children:s(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,q.jsx)(B_,{children:(0,q.jsx)(V_,{$active:!v?.backgroundSource,onClick:()=>void W({backgroundSource:null}),title:s(`none`),type:`button`,children:(0,q.jsx)(K_,{children:s(`none`)})})}),(0,q.jsxs)(L_,{children:[dd.map(e=>(0,q.jsxs)(R_,{children:[(0,q.jsx)(z_,{children:s(e.name)}),(0,q.jsx)(B_,{children:e.variants.map(t=>(0,q.jsx)(V_,{$active:v?.backgroundSource===t.id,onClick:()=>void W({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,q.jsx)(`img`,{alt:``,src:b===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,q.jsxs)(R_,{children:[(0,q.jsx)(z_,{children:s(`motion`)}),(0,q.jsx)(B_,{children:ud.map(e=>(0,q.jsxs)(V_,{$active:v?.backgroundSource===e.id,onClick:()=>void W({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,q.jsx)(`img`,{alt:``,src:e.poster}),(0,q.jsx)(W_,{children:(0,q.jsx)(Qi,{size:11})})]},e.id))})]}),(0,q.jsxs)(R_,{children:[(0,q.jsx)(z_,{children:s(`custom`)}),(0,q.jsxs)(B_,{children:[(v?.backgroundCustom??[]).map(e=>(0,q.jsx)(fg,{active:v?.backgroundSource===`file:${e}`||v?.backgroundSource===`url:${e}`||v?.backgroundSource===e,onRemove:()=>K(e),onSelect:()=>void W({backgroundSource:j(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,q.jsxs)(G_,{onClick:()=>void xn([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,q.jsx)(Ni,{size:12}),s(`image_2`)]}),(0,q.jsxs)(G_,{onClick:()=>void xn([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,q.jsx)(Ni,{size:12}),s(`video`)]})]})]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`image_or_video_url`)}),(0,q.jsx)($,{children:s(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(O_,{onChange:e=>on(e.target.value),onKeyDown:e=>{e.key===`Enter`&&G()},placeholder:`https://…`,value:an}),(0,q.jsxs)(x_,{disabled:!j(an),onClick:()=>void G(),type:`button`,children:[(0,q.jsx)(Ni,{size:13}),s(`add`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`blur`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(I_,{max:40,min:0,onChange:e=>void W({backgroundBlur:Number(e.target.value)}),type:`range`,value:v?.backgroundBlur??0}),(0,q.jsxs)(__,{children:[v?.backgroundBlur??0,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`saturation`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(I_,{max:200,min:0,onChange:e=>void W({backgroundSaturation:Number(e.target.value)}),type:`range`,value:v?.backgroundSaturation??100}),(0,q.jsxs)(__,{children:[v?.backgroundSaturation??100,`%`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`brightness`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(I_,{max:150,min:40,onChange:e=>void W({backgroundBrightness:Number(e.target.value)}),type:`range`,value:v?.backgroundBrightness??100}),(0,q.jsxs)(__,{children:[v?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`safety`),children:[(0,q.jsx)(gg,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Cg,{children:[(0,q.jsxs)(wg,{children:[(0,q.jsx)(Q,{children:s(`protected_folders`)}),(0,q.jsx)($,{children:s(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,q.jsx)(q_,{children:(v?.protectedPaths??[]).map(e=>(0,q.jsxs)(J_,{children:[(0,q.jsx)(Y_,{"aria-label":s(`protected_path`),onBlur:wn,onChange:t=>Ye({from:e,value:t.target.value}),onFocus:()=>Ye({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),wn()):e.key===`Escape`&&Ye(null)},spellCheck:!1,value:Je?.from===e?Je.value:e}),(0,q.jsx)(X_,{onClick:()=>Tn(e),title:s(`remove`),type:`button`,children:(0,q.jsx)(Gi,{size:10})})]},e))}),(0,q.jsxs)(Q_,{children:[(0,q.jsx)($_,{"aria-label":s(`new_protected_rule`),onChange:e=>ct(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Cn())},placeholder:`*.log`,spellCheck:!1,value:ot}),(0,q.jsxs)(x_,{onClick:Cn,type:`button`,children:[(0,q.jsx)(Ni,{size:13}),s(`add_the_rule`)]})]}),(0,q.jsxs)(Z_,{children:[(0,q.jsxs)(x_,{onClick:()=>void En(),type:`button`,children:[(0,q.jsx)(Mi,{size:13}),s(`restore_defaults`)]}),(0,q.jsxs)(x_,{onClick:()=>void Sn(),type:`button`,children:[(0,q.jsx)(Di,{size:13}),s(`add_folder_2`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`confirmation_delay`)}),(0,q.jsx)($,{children:s(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(I_,{max:30,min:2,onChange:e=>void W({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:v?.deleteDelaySeconds??5}),(0,q.jsxs)(__,{children:[v?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`tags`),children:[(0,q.jsx)(gg,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(y_,{"aria-label":s(`color_of_the_new_tag`),onChange:e=>Ke(e.target.value),type:`color`,value:We}),(0,q.jsx)(O_,{onChange:e=>Ue(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Kn())},placeholder:s(`new_tag`),spellCheck:!1,value:He})]}),(0,q.jsx)($,{children:s(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(x_,{disabled:H||He.trim().length===0,onClick:()=>void Kn(),type:`button`,children:[(0,q.jsx)(Ni,{size:13}),s(`add`)]})})]}),Be&&(0,q.jsx)(Y,{children:(0,q.jsx)(g_,{children:Be})}),Fe.length===0&&(0,q.jsx)(Y,{children:(0,q.jsx)($,{children:s(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),Fe.map(e=>(0,q.jsx)(Y,{children:Le?.name===e.name?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(y_,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void qn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(b_,{autoFocus:!0,disabled:H,onChange:t=>Re({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Yn()):e.key===`Escape`&&(e.preventDefault(),Re(null))},value:Le.value})]}),(0,q.jsx)($,{children:s(`press_enter_to_save_escape_to_cancel`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsxs)(x_,{disabled:H,onClick:()=>void Yn(),type:`button`,children:[(0,q.jsx)(Wi,{size:13}),s(`save`)]}),(0,q.jsxs)(x_,{disabled:H,onClick:()=>Re(null),type:`button`,children:[(0,q.jsx)(Gi,{size:13}),s(`cancel`)]})]})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(y_,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void qn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(Q,{children:e.name})]}),(0,q.jsx)($,{children:ae(s,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsxs)(x_,{disabled:H,onClick:()=>Re({name:e.name,value:e.name}),type:`button`,children:[(0,q.jsx)(ua,{size:13}),s(`edit`)]}),(0,q.jsxs)(w_,{disabled:H,onClick:()=>void Jn(e.name),type:`button`,children:[(0,q.jsx)(Ui,{size:13}),s(`remove`)]})]})]})},e.name))]})]}),(0,q.jsxs)(yg,{ref:_n(`files-view`),children:[(0,q.jsx)(gg,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`default_view`)}),(0,q.jsx)($,{children:s(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(P_,{children:[(0,q.jsx)(F_,{$on:ln.mode===`list`,onClick:()=>void W({defaultView:{...ln,mode:`list`}}),type:`button`,children:s(`list`)}),(0,q.jsx)(F_,{$on:ln.mode===`grid`,onClick:()=>void W({defaultView:{...ln,mode:`grid`}}),type:`button`,children:s(`grid`)})]})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`list_icon_size`)}),(0,q.jsx)($,{children:s(`the_icon_in_the_list_rows`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(I_,{max:48,min:16,onChange:e=>void W({defaultView:{...ln,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:ln.iconSize}),(0,q.jsxs)(__,{children:[ln.iconSize,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`grid_size`)}),(0,q.jsx)($,{children:s(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(I_,{max:260,min:100,onChange:e=>void W({defaultView:{...ln,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:ln.gridSize}),(0,q.jsxs)(__,{children:[ln.gridSize,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(Q,{children:s(`selection_checkboxes`)}),(0,q.jsx)(Dh,{})]}),(0,q.jsx)($,{children:s(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,q.jsx)(E_,{$on:v?.showCheckboxes??!0,disabled:!v,onClick:()=>void W({showCheckboxes:!(v?.showCheckboxes??!0)}),type:`button`,children:(0,q.jsx)(D_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(Q,{children:s(`open_with_a_single_click`)}),(0,q.jsx)(Dh,{})]}),(0,q.jsx)($,{children:s(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,q.jsx)(E_,{$on:v?.openOnSingleClick??!1,disabled:!v,onClick:()=>void W({openOnSingleClick:!(v?.openOnSingleClick??!1)}),type:`button`,children:(0,q.jsx)(D_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(Q,{children:s(`open_the_file_tray_while_dragging`)}),(0,q.jsx)(Dh,{})]}),(0,q.jsx)($,{children:s(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,q.jsx)(E_,{$on:v?.trayAutoShow??!0,disabled:!v,onClick:()=>void W({trayAutoShow:!(v?.trayAutoShow??!0)}),type:`button`,children:(0,q.jsx)(D_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(Q,{children:s(`confirm_before_deleting`)}),(0,q.jsx)(Dh,{})]}),(0,q.jsx)($,{children:s(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,q.jsx)(E_,{$on:v?.confirmDelete??!1,disabled:!v,onClick:()=>void W({confirmDelete:!(v?.confirmDelete??!1)}),type:`button`,children:(0,q.jsx)(D_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(Q,{children:s(`automatic_rename_suffix`)}),(0,q.jsx)(Dh,{})]}),(0,q.jsx)($,{children:s(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Uo,{disabled:!v,onChange:e=>void W({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:v?.conflictNameStyle??`space_parentheses`,width:160})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(Q,{children:s(`play_audio_in_video_previews`)}),(0,q.jsx)(Dh,{})]}),(0,q.jsx)($,{children:s(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,q.jsx)(E_,{$on:v?.previewVideoAudio??!1,disabled:!v,onClick:()=>void W({previewVideoAudio:!(v?.previewVideoAudio??!1)}),type:`button`,children:(0,q.jsx)(D_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(Q,{children:s(`autoplay_video_previews`)}),(0,q.jsx)(Dh,{})]}),(0,q.jsx)($,{children:s(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,q.jsx)(E_,{$on:v?.previewVideoAutoplay??!1,disabled:!v,onClick:()=>void W({previewVideoAutoplay:!(v?.previewVideoAutoplay??!1)}),type:`button`,children:(0,q.jsx)(D_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(Q,{children:s(`preview_panel_under_the_list`)}),(0,q.jsx)(Dh,{})]}),(0,q.jsx)($,{children:s(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,q.jsx)(E_,{$on:ln.showImages??!0,onClick:()=>void W({defaultView:{...ln,showImages:!(ln.showImages??!0)}}),type:`button`,children:(0,q.jsx)(D_,{})})]}),(0,q.jsx)(Y,{children:(0,q.jsxs)(X,{children:[(0,q.jsxs)(h_,{children:[(0,q.jsx)(Q,{children:s(`columns`)}),(0,q.jsx)(Dh,{})]}),(0,q.jsx)($,{children:s(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,q.jsx)(Y,{children:(0,q.jsxs)(iv,{children:[jl.map(e=>(0,q.jsxs)(av,{children:[(0,q.jsx)(`input`,{checked:(ln.columns??[]).includes(e.id),onChange:()=>void Xn(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,q.jsxs)(av,{children:[(0,q.jsx)(`input`,{checked:(ln.columns??[]).includes(`linkTarget`),onChange:()=>void Xn(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`link_target_after_the_name`)})]})]})})]}),(0,q.jsxs)(vv,{children:[s(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,q.jsx)(Dh,{}),` `,s(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,q.jsxs)(yg,{ref:_n(`shortcuts`),children:[(0,q.jsx)(gg,{note:`every_action_can_hold_several_combinations_click_one_to_record_it_again_add_one_with_the_plus_and_drop_one_with_the_cross`,title:`shortcuts`}),(0,q.jsxs)(Sg,{children:[qh.map(({id:e,label:t,note:n})=>{let r=rr[e],i=Ae?.action===e,a=or(e);return(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(t)}),(0,q.jsx)($,{children:s(n)}),a.length>0&&(0,q.jsx)(pv,{children:s(`also_in_use_by_actions_pressing_it_runs_each_of_them`,{actions:a.join(`, `)})})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(sv,{children:[r.map((t,n)=>(0,q.jsxs)(cv,{$conflict:(ir.get(t)?.length??0)>1,$listening:i&&Ae.index===n,children:[(0,q.jsx)(lv,{onClick:()=>je({action:e,index:n}),title:s(`click_to_record_this_shortcut_again`),type:`button`,children:i&&Ae.index===n?s(`press_a_key`):tn(t)}),(0,q.jsx)(uv,{onClick:()=>cr(e,n),title:s(`remove`),type:`button`,children:(0,q.jsx)(Gi,{size:9})})]},t+`-`+n)),r.length===0&&(0,q.jsx)(dv,{children:s(`none`)}),(0,q.jsx)(fv,{$listening:i&&Ae.index<0,onClick:()=>je({action:e,index:-1}),title:s(`add`),type:`button`,children:i&&Ae.index<0?s(`press_a_key`):(0,q.jsx)(Ni,{size:11})})]})})]},e)}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset`)}),(0,q.jsx)($,{children:s(`back_to_the_default_combination_for_every_action`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(mv,{onClick:()=>void W({shortcuts:qt(Wt)}),type:`button`,children:[(0,q.jsx)(Mi,{size:13}),s(`reset`)]})})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`memory`),children:[(0,q.jsx)(gg,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(r_,{children:[(0,q.jsxs)(i_,{children:[(0,q.jsx)(Q,{children:s(`process_memory`)}),(0,q.jsx)(__,{children:N?`${C(N.private)} · ${Ug(N.private,N.available)}`:`—`})]}),(0,q.jsx)(a_,{children:(0,q.jsx)(o_,{$ratio:N?N.private/Math.max(N.available,1):0,$tone:S(N?N.private/Math.max(N.available,1):0)})}),(0,q.jsx)($,{children:N?s(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:C(N.available),resident:C(N.workingSet)}):s(`reading_the_current_usage`)})]}),(0,q.jsxs)(r_,{children:[(0,q.jsxs)(i_,{children:[(0,q.jsx)(Q,{children:s(`managed_heap`)}),(0,q.jsx)(__,{children:N?`${C(N.managed)} · ${Ug(N.managed,N.private)}`:`—`})]}),(0,q.jsx)(a_,{children:(0,q.jsx)(o_,{$ratio:N?N.managed/Math.max(N.private,1):0,$tone:`var(--accent-secondary)`})}),(0,q.jsx)($,{children:s(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,q.jsxs)(r_,{children:[(0,q.jsxs)(i_,{children:[(0,q.jsx)(Q,{children:s(`native_and_runtime`)}),(0,q.jsx)(__,{children:N?`${C(Math.max(0,N.private-N.managed))} · ${Ug(Math.max(0,N.private-N.managed),N.private)}`:`—`})]}),(0,q.jsx)(a_,{children:(0,q.jsx)(o_,{$ratio:N?Math.max(0,N.private-N.managed)/Math.max(N.private,1):0,$tone:`var(--accent-primary)`})}),(0,q.jsx)($,{children:s(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`free_memory`)}),(0,q.jsx)($,{children:s(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(mv,{onClick:()=>void ut().then(re),type:`button`,children:[(0,q.jsx)(Ta,{size:13}),s(`trim_now`)]})})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`overview`),children:[(0,q.jsx)(gg,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`}),(0,q.jsx)(Sg,{children:(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`recent_items`)}),(0,q.jsx)($,{children:s(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(O_,{max:50,min:0,onChange:e=>void lr(Number(e.target.value)),type:`number`,value:v?.recentLimit??10})})]})})]}),(0,q.jsxs)(yg,{ref:_n(`gallery`),children:[(0,q.jsx)(gg,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`}),(0,q.jsxs)(Sg,{children:[(v?.galleryRoots??[]).map(e=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:x(e)}),(0,q.jsx)($,{children:e})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(hv,{onClick:()=>void gr((v?.galleryRoots??[]).filter(t=>t!==e)),title:s(`stop_scanning_this_folder`),type:`button`,children:(0,q.jsx)(Gi,{size:12})})})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`scan_folders`)}),(0,q.jsx)($,{children:(v?.galleryRoots??[]).length===0?s(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):s(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(mv,{onClick:()=>void _r(),type:`button`,children:[(0,q.jsx)(Di,{size:13}),s(`choose_folder`)]})})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`icons`),children:[(0,q.jsx)(gg,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_system_file_icons`)}),(0,q.jsx)($,{children:s(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,q.jsx)(E_,{$on:v?.systemIcons??!1,disabled:!v,onClick:()=>void W({systemIcons:!v?.systemIcons}),type:`button`,children:(0,q.jsx)(D_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_custom_folder_icons`)}),(0,q.jsx)($,{children:s(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,q.jsx)(E_,{$on:v?.customFolderIcons??!1,disabled:!v,onClick:()=>void W({customFolderIcons:!v?.customFolderIcons}),type:`button`,children:(0,q.jsx)(D_,{})})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`extension-icons`),children:[(0,q.jsx)(gg,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`}),(0,q.jsxs)(Sg,{children:[Object.entries(v?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:e}),(0,q.jsx)($,{children:lg(s,t)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(ug,{source:t}),(0,q.jsx)(hv,{onClick:()=>void nr(e,null),title:s(`remove_this_rule`),type:`button`,children:(0,q.jsx)(Gi,{size:12})})]})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`add_a_rule`)}),(0,q.jsx)($,{children:s(`extension_and_the_icon_to_draw_for_it`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(O_,{onChange:e=>D(e.target.value),placeholder:`.psd`,spellCheck:!1,value:ee}),(0,q.jsxs)(N_,{children:[(0,q.jsx)(hv,{onClick:()=>M(e=>!e),title:s(`choose_the_icon`),type:`button`,children:(0,q.jsx)(ug,{source:O})}),A&&(0,q.jsx)(Tf,{allowDefault:!1,onClose:()=>M(!1),onPick:e=>{k(e??`file`),M(!1)},value:O})]}),(0,q.jsx)(hv,{onClick:()=>void vr(),title:s(`add_the_rule`),type:`button`,children:(0,q.jsx)(Ni,{size:13})})]})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`folder-icons`),children:[(0,q.jsx)(gg,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`give_a_folder_its_own_icon`)}),(0,q.jsx)($,{children:s(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,q.jsxs)(Z,{children:[T&&(0,q.jsx)(dg,{src:T.icon}),(0,q.jsxs)(mv,{disabled:te,onClick:()=>void yr(),type:`button`,children:[(0,q.jsx)(Di,{size:13}),s(te?`choosing`:`choose_folder_and_icon`)]})]})]}),T&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:x(T.folder)}),(0,q.jsx)($,{children:T.folder})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(_v,{children:[(0,q.jsx)(Wi,{size:11}),` `,s(`saved`)]})})]})]})]}),(0,q.jsxs)(yg,{ref:_n(`folder-index`),children:[(0,q.jsx)(gg,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,q.jsx)($,{children:s(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,q.jsx)(E_,{$on:v?.writeDirectoryIndex??!0,disabled:!v,onClick:()=>void W({writeDirectoryIndex:!v?.writeDirectoryIndex}),type:`button`,children:(0,q.jsx)(D_,{})})]}),(0,q.jsxs)(Cg,{children:[(0,q.jsxs)(wg,{children:[(0,q.jsx)(Q,{children:s(`directory_index_blacklist`)}),(0,q.jsx)($,{children:s(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,q.jsx)(q_,{children:(v?.directoryIndexBlacklist??[]).map(e=>(0,q.jsxs)(J_,{children:[(0,q.jsx)(Y_,{"aria-label":s(`directory_index_blacklist_rule`),onBlur:Dn,onChange:t=>$e({from:e,value:t.target.value}),onFocus:()=>$e({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Dn()):e.key===`Escape`&&$e(null)},spellCheck:!1,value:Qe?.from===e?Qe.value:e}),(0,q.jsx)(X_,{onClick:()=>An(e),title:s(`remove`),type:`button`,children:(0,q.jsx)(Gi,{size:10})})]},e))}),(0,q.jsxs)(Q_,{children:[(0,q.jsx)($_,{"aria-label":s(`directory_index_blacklist_rule`),onChange:e=>gt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),On())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:U}),(0,q.jsxs)(x_,{onClick:On,type:`button`,children:[(0,q.jsx)(Ni,{size:13}),s(`add_the_rule`)]})]}),(0,q.jsxs)(Z_,{children:[(0,q.jsxs)(x_,{onClick:jn,type:`button`,children:[(0,q.jsx)(Mi,{size:13}),s(`restore_defaults`)]}),(0,q.jsxs)(x_,{onClick:()=>void kn(),type:`button`,children:[(0,q.jsx)(Di,{size:13}),s(`add_folder_2`)]})]})]})]}),!(v?.writeDirectoryIndex??!0)&&(0,q.jsx)(yv,{children:cg(s,e?.platform)})]}),(0,q.jsxs)(yg,{ref:_n(`indexing`),children:[(0,q.jsx)(gg,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,q.jsx)(sg,{})]}),(0,q.jsxs)(yg,{ref:_n(`files`),children:[(0,q.jsx)(gg,{note:`what_the_listings_include`,title:`files`}),(0,q.jsxs)(Sg,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`show_hidden_files`)}),(0,q.jsxs)($,{children:[s(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),u?.overridden&&(0,q.jsx)(v_,{disabled:m,onClick:()=>void Qn(null),type:`button`,children:s(`follow_system`)})]})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(T_,{$on:u?.showHidden??!1,children:u?.overridden?og(s,u.showHidden):s(`follow_system`)}),(0,q.jsx)(E_,{$on:u?.showHidden??!1,disabled:!u||m,onClick:()=>void Qn(!(u?.showHidden??!1)),title:s(`show_hidden_files`),type:`button`,children:(0,q.jsx)(D_,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`protected_operating_system_files`)}),(0,q.jsx)(__,{children:og(s,u?.showSystem)})]})]}),(0,q.jsx)(vv,{children:s(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]}),(0,q.jsxs)(Lg,{onClick:()=>Ne(!0),type:`button`,children:[(0,q.jsx)(Ga,{size:13}),s(`open_source_attribution`)]})]}),(0,q.jsxs)(Rg,{"aria-label":s(`settings_sections`),onWheel:bn,children:[(0,q.jsx)(zg,{children:s(`sections`)}),(0,q.jsx)(Bg,{children:eg.map(({id:e,label:t})=>(0,q.jsxs)(Vg,{$active:It===e,onClick:()=>vn(e),type:`button`,children:[(0,q.jsx)(xg,{children:tg[t]}),(0,q.jsx)(`span`,{children:s(t)})]},e))}),(0,q.jsx)(Hg,{children:s(`changes_are_saved_as_you_make_them`)})]}),Me&&(0,q.jsx)(Eh,{onClose:()=>Ne(!1)}),jt&&(0,uo.createPortal)((0,q.jsx)(Kg,{children:(0,q.jsxs)(qg,{"aria-modal":`true`,role:`dialog`,children:[(0,q.jsxs)(Jg,{children:[(0,q.jsx)(`h2`,{children:s(`software_update`)}),(0,q.jsx)(`p`,{children:Tt?.latest?s(`version_version`,{version:Tt.latest}):s(`preparing_the_update`)})]}),(0,q.jsx)(Yg,{children:s(`changelog`)}),jt.changelog?(0,q.jsx)(Xg,{onClick:Qg,children:(0,q.jsx)(a,{source:jt.changelog})}):(0,q.jsx)(Zg,{children:jt.phase===`changelog`?s(`loading_the_changelog`):s(`the_changelog_could_not_be_loaded`)}),(0,q.jsxs)($g,{children:[(0,q.jsx)(`span`,{children:Wg(jt,s)}),(0,q.jsx)(`span`,{children:Gg(jt)})]}),(0,q.jsx)(e_,{children:(0,q.jsx)(t_,{$percent:Math.max(0,Math.min(100,jt.percent))})}),jt.error&&(0,q.jsx)(g_,{children:jt.error}),(0,q.jsxs)(n_,{children:[(jt.phase===`changelog`||jt.phase===`downloading`)&&(0,q.jsxs)(mv,{onClick:()=>void Vn(),type:`button`,children:[(0,q.jsx)(Gi,{size:13}),s(`cancel`)]}),jt.phase===`ready`&&(0,q.jsxs)(mv,{onClick:()=>void Hn(),type:`button`,children:[(0,q.jsx)(Pa,{size:13}),s(`install_update`)]}),jt.phase===`installing`&&(0,q.jsxs)(mv,{disabled:!0,type:`button`,children:[(0,q.jsx)(Mi,{size:13}),s(`installing`)]}),(jt.phase===`ready`||jt.phase===`error`||jt.phase===`cancelled`||jt.phase===`installing`)&&(0,q.jsxs)(mv,{onClick:()=>Mt(null),type:`button`,children:[(0,q.jsx)(Gi,{size:13}),s(`close`)]})]})]})}),document.body)]})}function ag({approvalMinutes:e,denialSeconds:t}){let n=o(),[r,i]=(0,z.useState)([]),[a,s]=(0,z.useState)(!1);(0,z.useEffect)(()=>{let e=()=>void fl().then(i,()=>i([]));if(e(),l.available)return l.on(t=>{t.type===`share.devices.changed`&&e()})},[]);let c=async(e,t,n)=>{s(!0);try{i(await pl(e,t,n))}finally{s(!1)}},u=async e=>{s(!0);try{i(await ml(e))}finally{s(!1)}},d=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.state===`denied`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`):n(`share_access_not_decided`),f=e=>e.expiresAt===0?n(`share_access_forever`):new Date(e.expiresAt).toLocaleString();return(0,q.jsxs)(s_,{children:[r.length===0&&(0,q.jsx)(c_,{children:n(`share_access_no_devices`)}),r.map(r=>(0,q.jsxs)(l_,{children:[(0,q.jsxs)(u_,{children:[(0,q.jsx)(d_,{children:r.name||n(`share_access_not_decided`)}),(0,q.jsxs)(f_,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,q.jsxs)(f_,{children:[d(r),r.state!==``&&(0,q.jsxs)(q.Fragment,{children:[` · `,n(`share_access_expires`),`: `,f(r)]})]})]}),(0,q.jsx)(Uo,{disabled:a,onChange:e=>{let[t,n]=e.split(`:`);t===`remove`?u(r.id):t!==`none`&&c(r.id,t,n===`forever`)},options:[{value:`none:`,label:n(`share_access_not_decided`)},{value:`allowed:timed`,label:`${n(`share_access_allowed`)} (${e}m)`},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:`${n(`share_access_denied`)} (${t}s)`},{value:`denied:forever`,label:n(`share_access_block_forever`)},{value:`remove:`,label:n(`remove`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.state===`denied`?r.expiresAt===0?`denied:forever`:`denied:timed`:`none:`,width:190})]},r.id))]})}function og(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function sg(){let e=o(),[t,n]=(0,z.useState)(null);return(0,z.useEffect)(()=>{let e=!0,t=()=>Je().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,q.jsx)(yv,{children:e(`no_indexing_tasks_are_running`)}):(0,q.jsxs)(Sg,{children:[(0,q.jsx)(Y,{children:(0,q.jsx)(Q,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,q.jsx)(Y,{children:(0,q.jsx)(__,{title:e,children:e})},e))]}):(0,q.jsx)(yv,{children:e(`index_task_information_is_unavailable`)})}function cg(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function lg(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function ug({source:e}){let t=G(e.startsWith(`file:`)?e.slice(5):null);return(0,q.jsx)(gv,{children:t?(0,q.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,q.jsx)(xc,{name:e,size:16})})}function dg({src:e}){let t=G(e);return(0,q.jsx)(gv,{children:t&&(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function fg({path:e,active:t,onSelect:n,onRemove:r}){let i=o(),a=j(e),s=En(a?null:e),c=a?e:s,l=kd(e.split(/[?#]/)[0]);return(0,q.jsxs)(H_,{children:[(0,q.jsxs)(V_,{$active:t,onClick:n,title:e,type:`button`,children:[c&&(l?(0,q.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${c}#t=0.5`}):(0,q.jsx)(`img`,{alt:``,src:c})),l&&(0,q.jsx)(W_,{children:(0,q.jsx)(Qi,{size:11})})]}),(0,q.jsx)(U_,{onClick:r,title:i(`remove`),type:`button`,children:(0,q.jsx)(Gi,{size:9})})]})}function pg({value:e,options:t,onChange:n,disabled:r}){let i=o(),[a,s]=(0,z.useState)(null),c=(0,z.useRef)(null);return(0,z.useEffect)(()=>{if(!a)return;let e=()=>s(null),t=t=>{let n=t.target;n instanceof Node&&c.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(k_,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){s(null);return}let e=c.current?.getBoundingClientRect();e&&s({left:e.left,top:e.bottom+4,width:e.width})},ref:c,type:`button`,children:[(0,q.jsx)(`span`,{children:mg(i,e)}),(0,q.jsx)(A_,{children:(0,q.jsx)(Ii,{size:11})})]}),a&&(0,uo.createPortal)((0,q.jsx)(j_,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,q.jsxs)(M_,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),s(null)},role:`option`,type:`button`,children:[(0,q.jsx)(`span`,{children:mg(i,t)}),t===e&&(0,q.jsx)(Wi,{size:11})]},t))}),document.body)]})}function mg(e,t){return t===Qh?e(`system_default`):$h[t]??t}function hg({colors:e,current:t,onApply:n}){let r=o();if(e.length===0)return null;let[i,...a]=e;return(0,q.jsxs)(Pg,{children:[(0,q.jsxs)(Ig,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,q.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,q.jsx)(Fg,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,q.jsx)(Wi,{size:9})},e))]})}function gg({title:e,note:t,global:n=!1}){let r=o();return(0,q.jsxs)(bg,{children:[(0,q.jsxs)(`h2`,{children:[(0,q.jsx)(xg,{children:tg[e]}),r(e),n&&(0,q.jsx)(Dh,{})]}),(0,q.jsx)(`p`,{children:r(t)})]})}var _g=v.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,vg=v.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,yg=v.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,bg=v.header`
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
        padding-left: 32px;
        font-size: 10.5px;
        color: var(--text-muted);
    }
`,xg=v.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,Sg=v.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Cg=v.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,wg=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,Tg=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,Eg=v.button`
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
`,Dg=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Og=v.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,kg=v.button`
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
`,Ag=v.button`
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
`,jg=v.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Mg=v.input`
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
`,Ng=v.span`
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
`,Pg=v.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Fg=v.button`
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
`,Ig=v.button`
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
`,Lg=v.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    align-self: flex-start;
    padding: 0;
    border: 0;
    background: none;
    color: var(--text-muted);
    font: inherit;
    font-size: 11px;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 3px;

    &:hover {
        color: var(--text-secondary);
    }
`,Rg=v.nav`
    display: flex;
    flex-direction: column;
    align-self: stretch;
    flex-shrink: 0;
    width: 172px;
    min-height: 0;
    max-height: 100%;
    overflow-y: auto;
    padding: 6px 0 12px;
    scrollbar-width: thin;
`,zg=v.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Bg=v.div`
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
`,Vg=v.button`
    position: relative;
    display: flex;
    align-items: center;
    gap: 7px;
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
`,Hg=v.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function Ug(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function Wg(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function Gg(e){return e.total>0?`${C(e.downloaded)} / ${C(e.total)}`:e.downloaded>0?C(e.downloaded):``}var Kg=v.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,qg=v.div`
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
`,Jg=v.div`
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
`,Yg=v.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Xg=v.div`
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
`,Zg=v.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function Qg(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),I(t.href))}var $g=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,e_=v.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,t_=v.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,n_=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,r_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,i_=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,a_=v.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,o_=v.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,s_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,c_=v.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,l_=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,u_=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,d_=v.span`
    color: var(--text-primary);
    font-size: 12px;
`,f_=v.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,p_=v.input`
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
`,m_=v.input`
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
`,h_=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=v.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,g_=v.span`
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
`,__=v.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,v_=v.button`
    margin-left: 6px;
    padding: 0;
    border: 0;
    background: none;
    color: var(--accent-primary);
    font: inherit;
    text-decoration: underline;
    text-underline-offset: 2px;
    cursor: pointer;

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`,y_=v.input`
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
`,b_=v.input`
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
`,x_=v.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
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

    svg {
        width: 12px;
        height: 12px;
    }
`,S_=v.input`
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
`,C_=v.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,w_=v.button`
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
`,T_=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,E_=v.button`
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
`,D_=v.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,O_=v.input`
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
`,k_=v.button`
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
`,A_=v.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,j_=v.div`
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
`,M_=v.button`
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
`,N_=v.span`
    position: relative;
    display: inline-flex;
`,P_=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,F_=v.button`
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
`,I_=v.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,L_=v.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,R_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,z_=v.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,B_=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,V_=v.button`
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
`,H_=v.div`
    position: relative;
    width: 102px;
    height: 58px;
`,U_=v.button`
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
`,W_=v.span`
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
`,G_=v.button`
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
`,K_=v.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,q_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,J_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Y_=v.input`
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
`,X_=v.button`
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
`,Z_=v.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,Q_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,$_=v.input`
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
`,ev=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,tv=v.button`
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
`,nv=v.input`
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
`,rv=v.div`
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
`,iv=v.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,av=v.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,ov=v.button`
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
`,sv=v.span`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 5px;
`,cv=v.span`
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    border: 1px solid ${({$conflict:e,$listening:t})=>t?`var(--border-color-focus)`:e?`rgba(251, 191, 36, 0.55)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`var(--bg-input)`};
`,lv=v.button`
    min-width: 88px;
    padding: 4px 9px;
    border: 0;
    background: transparent;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 11px;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`,uv=v.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 24px;
    border: 0;
    border-left: 1px solid var(--border-color);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        color: #fca5a5;
        background: rgba(248, 113, 113, 0.12);
    }
`,dv=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,fv=v.button`
    display: grid;
    place-items: center;
    min-width: 24px;
    height: 24px;
    padding: 0 6px;
    border: 1px dashed ${({$listening:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$listening:e})=>e?`rgba(var(--accent-rgb), 0.16)`:`transparent`};
    color: var(--text-muted);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
        border-color: var(--border-color-hover);
    }
`,pv=v.span`
    font-size: 10px;
    color: #fbbf24;
`,mv=v.button`
    display: inline-flex;
    align-items: center;
    gap: 6px;
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
`,hv=v.button`
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
`,gv=v.span`
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
`,_v=v.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,vv=v.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,yv=v.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,bv=150,xv=2500,Sv=3,Cv=600;function wv({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,onPreviewChange:g,platform:_,toolbarSlot:v,onStatusChange:y}){let b=o(),x=El(`gallery`),[S,w]=(0,z.useState)([]),[T,E]=(0,z.useState)(0),[ee,D]=(0,z.useState)(!0),[O,k]=(0,z.useState)(null),[A,j]=(0,z.useState)(!1),[M,te]=(0,z.useState)([]),ne=(0,z.useRef)([]),N=(0,z.useRef)(0),re=(0,z.useRef)(!1),P=(0,z.useRef)(!0),oe=(0,z.useRef)(0),F=(0,z.useRef)(null),se=(0,z.useRef)(0),I=(0,z.useCallback)(async e=>{let t=++oe.current;D(!0),P.current=!0,k(null);try{let n=await ze(0,bv,e);if(t!==oe.current)return;ne.current=n.entries,N.current=n.total,w(n.entries),E(n.total)}catch(e){t===oe.current&&k(e instanceof Error?e.message:String(e))}finally{t===oe.current&&(P.current=!1,D(!1))}},[]);(0,z.useEffect)(()=>{I(!1)},[I]);let L=(0,z.useCallback)(async()=>{if(P.current||re.current||ne.current.length>=N.current)return;let e=oe.current;re.current=!0;try{let t=ne.current,n=N.current;for(let r=0;r<Sv&&t.length<n;r++){let r=await ze(t.length,bv,!1);if(e!==oe.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<bv)break}if(e!==oe.current)return;ne.current=t,N.current=n,(0,z.startTransition)(()=>{w(t),E(n)})}catch{}finally{re.current=!1}},[]),ce=(0,z.useCallback)(e=>{se.current||=window.requestAnimationFrame(()=>{se.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<xv&&L()})},[L]);(0,z.useEffect)(()=>{let e=F.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&L()},{root:e.parentElement,rootMargin:`${xv}px 0px`});return t.observe(e),()=>t.disconnect()},[L]),(0,z.useEffect)(()=>{if(S.length>=T)return;let e=window.setTimeout(()=>{let e=F.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<xv&&L()},200);return()=>window.clearTimeout(e)},[S.length,T,L]);let le=(0,z.useMemo)(()=>({path:``,parent:null,entries:S.map(Tv),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[S]),ue=(0,z.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),de=(0,z.useCallback)(e=>{l?l(e):Se(e)},[l]),fe=(0,z.useCallback)(e=>{let t=Ev(e.modified);return{id:t,label:t}},[]),pe=()=>{j(!0),I(!0).finally(()=>j(!1))},me=S.length<T,he=(0,z.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:S.filter(e=>Ln(e.name,a)||Ln(e.path,a)),[S,a?.open,a?.query,a?.matchCase,a?.regex]),R=(0,z.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:he[Math.min(a.index,Math.max(0,he.length-1))]?.path??null}:kn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,he]);(0,z.useEffect)(()=>{c?.(he.length)},[he.length,c]);let ge=(0,z.useCallback)(e=>{te(e),u?.(e)},[u]),B=M.length>0?S.find(e=>e.path===M[0])??null:null,_e=B?.name.includes(`.`)?B.name.slice(B.name.lastIndexOf(`.`)+1).toUpperCase():`—`,ve=B&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(B.name)?b(`video_2`):b(`picture`),ye=B?B.path.slice(0,Math.max(B.path.lastIndexOf(`\\`),B.path.lastIndexOf(`/`))):``,be=B?{name:B.name,path:B.path,isDirectory:!1,size:B.size,modified:B.modified,fields:[{label:b(`type`),value:ve},{label:b(`extension`),value:_e},{label:b(`location`),value:ye},{label:b(`full_path`),value:B.path},{label:b(`size`),value:C(B.size)},{label:b(`modified`),value:ie(B.modified)},{label:b(`created`),value:`—`}]}:null,xe=M.length>1?ae(b,M.length,`k_1_item_selected`,`count_items_selected`):void 0,Ce=(0,z.useRef)(``);(0,z.useEffect)(()=>{let e=`${be?.path??``}|${be?.modified??0}|${xe??``}`;Ce.current!==e&&(Ce.current=e,g?.(be,xe))},[be,xe,g]);let we=ee?b(`scanning`):b(`shown_of_total_pictures`,{shown:S.length,total:T});return(0,z.useEffect)(()=>{y?.(we)},[we,y]),(0,q.jsxs)(Dv,{children:[v&&(0,uo.createPortal)((0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Em,{}),(0,q.jsx)(Tm,{onClick:pe,title:b(`scan_the_folders_again`),type:`button`,children:(0,q.jsx)(Av,{$spinning:A,children:(0,q.jsx)(Mi,{size:16})})}),x.available&&(0,q.jsx)(Tm,{onClick:e=>x.open(e.clientX,e.clientY),title:b(`selection_menu`),type:`button`,children:(0,q.jsx)(La,{size:16})})]}),v),O&&(0,q.jsx)(Mv,{children:O}),!O&&!ee&&T===0&&(0,q.jsx)(Mv,{children:b(`no_pictures_found`)}),!O&&(ee||T>0)&&(0,q.jsx)(Ov,{children:(0,q.jsx)(kv,{children:(0,q.jsx)(Bl,{platform:_,confirmDelete:n,find:R,selectMatchesToken:s,listing:ee&&S.length===0?null:le,loading:ee,error:null,view:ue,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ge,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:de,onOpenFile:de,onRefresh:pe,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:fe,onGridScroll:ce,gridFooter:(0,q.jsx)(jv,{$space:me?Cv:1,ref:F}),allowBackgroundMenu:!1})})})]})}function Tv(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function Ev(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(M(),{weekday:`long`}):t.toLocaleDateString(M(),{year:`numeric`,month:`long`,day:`numeric`})}var Dv=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Ov=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,kv=v.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,Av=v.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,jv=v.div`
    height: ${({$space:e})=>e}px;
`,Mv=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function Nv({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:s=``,version:c=0,historyVersion:u=0,hiddenViews:d=[],onNavigate:f,onOpenView:p}){let[m,h]=(0,z.useState)([]),g=o(),[_,v]=(0,z.useState)(null),y=Gn();(0,z.useEffect)(()=>{Xe().then(e=>{v(e),h(tc(e).filter(e=>e.pinned))},()=>{v(null),h([])})},[c]),(0,z.useEffect)(()=>{if(!l.available)return;let e=m.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[m,s]);let b=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>F(e.path,t));return{name:_?.placeNames?.[t]??n?.name??(x(t)||t),path:t,kind:`folder`,icon:n?.icon??_?.placeIcons?.[t]??null}}),w=a===`files`;return(0,q.jsxs)(zv,{children:[(0,q.jsxs)(Bv,{children:[!d.includes(`home`)&&(0,q.jsxs)(Gv,{$active:a===`home`,onClick:e=>p(`home`,$t(e)),title:g(`overview`),type:`button`,children:[(0,q.jsx)(la,{}),(0,q.jsx)(qv,{children:g(`overview`)})]}),!d.includes(`recycle`)&&(0,q.jsxs)(Gv,{$active:a===`recycle`,onClick:e=>p(`recycle`,$t(e)),title:g(`recycle_bin`),type:`button`,children:[(0,q.jsx)(Ui,{}),(0,q.jsx)(qv,{children:g(`recycle_bin`)})]}),!d.includes(`gallery`)&&(0,q.jsxs)(Gv,{$active:a===`gallery`,onClick:e=>p(`gallery`,$t(e)),title:g(`gallery`),type:`button`,children:[(0,q.jsx)(Zi,{}),(0,q.jsx)(qv,{children:g(`gallery`)})]})]}),m.map(e=>(0,q.jsxs)(Hv,{children:[(0,q.jsxs)(Gv,{as:`div`,$active:!1,children:[(0,q.jsx)(Kv,{children:(0,q.jsx)(rc,{panel:e,size:16})}),(0,q.jsx)(qv,{children:g(e.title)})]}),(0,q.jsx)(Uv,{children:(0,q.jsxs)(Wv,{children:[e.kind===`quick`&&b(e).map(e=>(0,q.jsxs)(Gv,{$active:w&&F(i,e.path),onClick:t=>f(e.path,$t(t)),title:e.path,type:`button`,children:[(0,q.jsx)(ic,{place:e}),(0,q.jsx)(qv,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=Kn(y,e.path);return(0,q.jsxs)(Gv,{$active:w&&F(i,e.path),onClick:t=>e.isDirectory?f(e.path,$t(t)):void Se(e.path),title:e.path,type:`button`,children:[t&&y.useIcons?(0,q.jsx)(ic,{place:t}):(0,q.jsx)(Sc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,q.jsx)(qv,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,q.jsx)(Iv,{historyVersion:u,onNavigate:f}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,q.jsxs)(Gv,{$active:w&&F(i,e.name),onClick:t=>f(e.name,$t(t)),title:e.name,type:`button`,children:[(0,q.jsx)(ki,{}),(0,q.jsxs)(qv,{children:[re(e),(0,q.jsxs)(Jv,{children:[C(e.freeSpace),` free`]}),(0,q.jsx)(Yv,{children:(0,q.jsx)(Xv,{$used:t,$tone:S(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(Lv,{onNavigate:f,path:e.path||s})]})})]},e.id)),!d.includes(`settings`)&&(0,q.jsx)(Vv,{children:(0,q.jsxs)(Gv,{$active:a===`settings`,onClick:e=>p(`settings`,$t(e)),title:g(`settings`),type:`button`,children:[(0,q.jsx)(Li,{}),(0,q.jsx)(qv,{children:g(`settings`)})]})})]})}var Pv=10,Fv=40;function Iv({historyVersion:e=0,onNavigate:t}){let n=o(),[r,i]=(0,z.useState)(null),a=Gn();return(0,z.useEffect)(()=>{Ve().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Kn(a,e.path);return(0,q.jsxs)(Gv,{$active:!1,onClick:n=>t(e.path,$t(n)),title:ae(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,q.jsx)(ic,{place:r}):(0,q.jsx)(Sc,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,q.jsx)(qv,{children:r?.name||e.name})]},e.path)})}function Lv({path:e,onNavigate:t}){let[n,r]=(0,z.useState)(null);(0,z.useEffect)(()=>{e&&(r(null),Ce(e,!1).then(r,()=>r(null)))},[e]),(0,z.useEffect)(()=>{if(e&&l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&F(n.data.path,e)&&Ce(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,Pv),o=i.filter(e=>!e.isDirectory).slice(0,Fv);return(0,q.jsxs)(q.Fragment,{children:[a.map(e=>(0,q.jsx)(Rv,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,q.jsx)(Rv,{entry:e,onNavigate:t},e.fullPath))]})}function Rv({entry:e,onNavigate:t}){let n=Gn(),r=Kn(n,e.fullPath);return(0,q.jsxs)(Gv,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,$t(n)):void Se(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,q.jsx)(ic,{place:r}):(0,q.jsx)(Sc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,q.jsx)(qv,{children:r?.name||e.name})]})}var zv=v.aside`
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

    &:not(:hover) ${()=>Jv},
    &:not(:hover) ${()=>Yv} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,Bv=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Vv=v(Bv)`
    margin-top: auto;
`,Hv=v.div`
    display: flex;
    flex-direction: column;
`,Uv=v.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${zv}:hover ${Hv}:hover > & {
        grid-template-rows: 1fr;
    }
`,Wv=v.div`
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
`,Gv=v.button`
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
`,Kv=v.span`
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
`,qv=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Jv=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Yv=v.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Xv=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,Zv=v.span`
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
`;function Qv({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=o(),a=(0,z.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,z.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,q.jsxs)(ey,{ref:a,children:[(0,q.jsxs)(ty,{$active:n,onClick:()=>r(!n),title:s>0?ae(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,q.jsx)(Hi,{size:13}),c>0&&(0,q.jsx)(Zv,{children:c>9?`9+`:c})]}),n&&(0,q.jsxs)(ny,{children:[(0,q.jsxs)(ry,{children:[(0,q.jsxs)(iy,{children:[(0,q.jsx)(Hi,{size:12}),i(`status_center`)]}),(0,q.jsxs)(ay,{children:[(0,q.jsx)(oy,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,q.jsx)(sy,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,q.jsx)(Gi,{size:10})})]})]}),e.length===0?(0,q.jsx)(ly,{children:i(`no_operations_yet`)}):(0,q.jsx)(cy,{children:e.map(e=>(0,q.jsx)($v,{task:e},e.id))})]})]})}function $v({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,q.jsxs)(uy,{children:[(0,q.jsxs)(dy,{children:[(0,q.jsx)(fy,{$state:e.state,children:e.state===`done`?(0,q.jsx)(Wi,{size:10}):e.state===`failed`?(0,q.jsx)(Gi,{size:10}):(0,q.jsx)(py,{})}),(0,q.jsx)(my,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,q.jsxs)(hy,{children:[C(e.bytesDone),` / `,C(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,q.jsxs)(hy,{children:[e.done,` / `,e.total]})]}),i&&(0,q.jsx)(gy,{children:(0,q.jsx)(_y,{$percent:r,$indeterminate:t===0})}),e.error&&(0,q.jsx)(vy,{children:e.error})]})}var ey=v.div`
    position: relative;
    display: flex;
`,ty=v.button`
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
`,ny=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${fo}
    ${To}
`,ry=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,iy=v.span`
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
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,ay=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,oy=v.button`
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
`,sy=v.button`
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
`,cy=v.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,ly=v.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,uy=v.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${Eo}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,dy=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,fy=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,py=v.span`
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
`,my=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hy=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,gy=v.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,_y=v.div`
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
`,vy=v.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function yy(){return l.available?(await l.request(`fs.history.list`)).entries:[]}async function by(e){return l.available?(await l.request(`fs.history.undoTo`,{id:e})).ok:!1}function xy(){let e=o(),[t,n]=(0,z.useState)(!1),[r,i]=(0,z.useState)([]),[a,s]=(0,z.useState)(!1),c=(0,z.useRef)(null),l=()=>void yy().then(i,()=>i([]));(0,z.useEffect)(()=>{if(!t)return;l();let e=window.setInterval(l,1e3),r=e=>{c.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let u=async e=>{s(!0);try{await by(e),l()}finally{s(!1)}};return(0,q.jsxs)(wy,{ref:c,children:[(0,q.jsx)(Ty,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,q.jsx)(Vi,{size:14})}),t&&(0,q.jsxs)(Ey,{children:[(0,q.jsxs)(Dy,{children:[(0,q.jsxs)(Oy,{children:[(0,q.jsx)(Vi,{size:12}),e(`history`)]}),(0,q.jsx)(ky,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,q.jsx)(Gi,{size:10})})]}),r.length===0?(0,q.jsx)(Ry,{children:e(`no_operations_yet`)}):(0,q.jsx)(Ay,{children:r.map(t=>(0,q.jsxs)(jy,{children:[(0,q.jsxs)(My,{children:[(0,q.jsxs)(Ny,{children:[(0,q.jsx)(Cy,{label:t.label}),Sy(e,t.label)]}),(0,q.jsx)(Py,{children:A(t.at)})]}),t.paths.length>0&&(0,q.jsxs)(Fy,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,q.jsx)(Iy,{children:(0,q.jsx)(Ly,{disabled:!t.applied||!t.restorable||a,onClick:()=>void u(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Sy(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Cy({label:e}){return e.startsWith(`delete`)?(0,q.jsx)(Ui,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,q.jsx)(Aa,{size:13}):e.startsWith(`rename`)?(0,q.jsx)(ua,{size:13}):e.startsWith(`compress`)?(0,q.jsx)(ea,{size:13}):e.startsWith(`new`)?(0,q.jsx)(Ni,{size:13}):(0,q.jsx)(Fi,{size:13})}var wy=v.div`
    position: relative;
    display: flex;
`,Ty=v.button`
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
`,Ey=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${fo}
    ${To}
`,Dy=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Oy=v.span`
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
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,ky=v.button`
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
`,Ay=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,jy=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,My=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Ny=v.span`
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
`,Py=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Fy=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Iy=v.div`
    display: flex;
    justify-content: flex-end;
`,Ly=v.button`
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
`,Ry=v.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function zy({currentFolder:e}){let t=o(),[n,r]=(0,z.useState)(!1),[i,a]=(0,z.useState)(null),[s,c]=(0,z.useState)(!1),l=(0,z.useRef)(null);(0,z.useEffect)(()=>{if(!n)return;let e=()=>void Xc().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{l.current?.contains(e.target)||r(!1)},o=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,o),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,o)}},[n]),(0,z.useEffect)(()=>{let e=()=>void Xc().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{a(await e())}finally{c(!1)}},d=i?.shares.some(t=>F(t.path,e))??!1;return(0,q.jsxs)(By,{ref:l,children:[(0,q.jsxs)(Vy,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,q.jsx)(wa,{size:15}),i&&i.shares.length>0&&(0,q.jsx)(Zv,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,q.jsxs)(Hy,{children:[(0,q.jsxs)(Uy,{children:[(0,q.jsxs)(Wy,{children:[(0,q.jsx)(Na,{size:12}),t(`share`)]}),(0,q.jsx)(Gy,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,q.jsx)(Gi,{size:10})})]}),(0,q.jsxs)(Ky,{children:[(0,q.jsxs)(qy,{children:[(0,q.jsx)(Ji,{size:15}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,q.jsx)(Jy,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,q.jsx)(Yy,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,q.jsxs)(Xy,{children:[(0,q.jsxs)(Zy,{children:[(0,q.jsx)(Qy,{title:e.path,children:e.name}),(0,q.jsx)(eb,{disabled:s,onClick:()=>void u(()=>Qc(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,q.jsx)(Gi,{size:10})})]}),(0,q.jsx)($y,{title:e.path,children:e.path}),(0,q.jsxs)(tb,{children:[(0,q.jsxs)(nb,{$active:e.mode===`client`,onClick:()=>void u(()=>$c(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,q.jsx)(Ji,{size:11}),t(`app`)]}),(0,q.jsxs)(nb,{$active:e.mode===`web`,onClick:()=>void u(()=>$c(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,q.jsx)(Ea,{size:11}),t(`web`)]})]})]},e.id)),(0,q.jsxs)(rb,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Zc(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,q.jsx)(Ni,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,q.jsxs)(ib,{children:[(0,q.jsxs)(ab,{children:[(0,q.jsx)(Ea,{size:12}),t(`browser_access`)]}),i.urls.map(e=>(0,q.jsx)(ob,{onClick:()=>void I(e),type:`button`,children:e},e)),(0,q.jsx)(Jy,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var By=v.div`
    position: relative;
    display: flex;
`,Vy=v.button`
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
`,Hy=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${fo}
    ${To}
`,Uy=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Wy=v.span`
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
        flex-shrink: 0;
        border-radius: 2px;
        background: var(--accent-gradient);
    }

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Gy=v.button`
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
`,Ky=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,qy=v.div`
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
`,Jy=v.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,Yy=v.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Xy=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Zy=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Qy=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$y=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,eb=v.button`
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
`,tb=v.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,nb=v.button`
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
`,rb=v.button`
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
`,ib=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,ab=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,ob=v.button`
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
`;function sb({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let s=o(),[c,l]=(0,z.useState)(!1),u=(0,z.useRef)(null);(0,z.useEffect)(()=>{if(!c)return;let e=()=>l(!1),t=e=>{u.current?.contains(e.target)||l(!1)},n=e=>{e.key===`Escape`&&l(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[c]),(0,z.useEffect)(()=>{a&&l(!1)},[a]);let d=e.columns,f=e=>{let t=new Set(d);t.has(e)?t.delete(e):t.add(e);let r=jl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,q.jsxs)(cb,{ref:u,children:[(0,q.jsx)(lb,{$active:c,disabled:a,onClick:()=>l(e=>!e),title:s(`view`),type:`button`,children:e.mode===`grid`?(0,q.jsx)(Bi,{size:14}):(0,q.jsx)(zi,{size:14})}),c&&(0,q.jsxs)(ub,{children:[(0,q.jsxs)(db,{children:[(0,q.jsx)(Ia,{size:11}),s(`view`)]}),(0,q.jsxs)(pb,{children:[(0,q.jsxs)(mb,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,q.jsx)(zi,{size:12}),` `,s(`list`)]}),(0,q.jsxs)(mb,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,q.jsx)(Bi,{size:12}),` `,s(`grid`)]})]}),(0,q.jsxs)(db,{children:[(0,q.jsx)(zi,{size:11}),s(`list_icon_size`)]}),(0,q.jsxs)(hb,{children:[(0,q.jsx)(`input`,{"aria-label":s(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,q.jsxs)(gb,{children:[e.iconSize,`px`]})]}),(0,q.jsxs)(db,{children:[(0,q.jsx)(Bi,{size:11}),s(`grid_size`)]}),(0,q.jsxs)(hb,{children:[(0,q.jsx)(`input`,{"aria-label":s(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,q.jsxs)(gb,{children:[e.gridSize,`px`]})]}),(0,q.jsxs)(db,{children:[(0,q.jsx)(Fa,{size:11}),s(`columns`),(0,q.jsx)(Dh,{}),(0,q.jsx)(fb,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:s(`reset_column_widths`),type:`button`,children:s(`reset_widths`)})]}),jl.map(e=>(0,q.jsxs)(_b,{children:[(0,q.jsx)(`input`,{checked:d.includes(e.id),onChange:()=>f(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,q.jsxs)(_b,{children:[(0,q.jsx)(`input`,{checked:d.includes(`linkTarget`),onChange:()=>f(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`link_target_after_the_name`)})]}),(0,q.jsxs)(db,{children:[(0,q.jsx)(Ki,{size:11}),s(`preview_panel`),(0,q.jsx)(Dh,{})]}),(0,q.jsxs)(_b,{children:[(0,q.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`preview_under_the_list`)})]})]})]})}var cb=v.div`
    position: relative;
    display: flex;
    height: 100%;
`,lb=v.button`
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
`,ub=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${fo}
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
`,db=v.div`
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

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }

    &:first-child {
        margin-top: 2px;
    }
`,fb=v.button`
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
`,pb=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,mb=v.button`
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
`,hb=v.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,gb=v.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,_b=v.label`
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
`,vb=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),yb=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),bb=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),xb=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,q.jsx)(`path`,{d:`M2 5h6`})}),Sb=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,q.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Cb=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,q.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,q.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function wb({tabs:e,activeId:n,onSelect:r,onClose:i,onNewTab:a,onReorder:s,onTransferToTab:c,view:l,onViewChange:d,onColumns:f,showImages:p,onShowImages:m,tasks:h,onClearTasks:g,activityOpen:_,onActivityOpenChange:v,trayCount:y,trayVisible:b,onToggleTray:x,split:S,canSplit:C,onToggleSplit:w,details:T,canDetails:E,onToggleDetails:ee,shortcuts:D,currentFolder:O}){let k=o(),A=t(),j=u(),[M,te]=(0,z.useState)({left:!1,right:!1}),[ne,N]=(0,z.useState)(null),[re,ie]=(0,z.useState)(null),ae=(0,z.useRef)(null),P=(0,z.useRef)(null),oe=(0,z.useRef)(null),F=(0,z.useCallback)(()=>{let e=P.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;te(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,z.useEffect)(()=>{F();let e=P.current;if(!e)return;let t=new ResizeObserver(F);return t.observe(e),()=>t.disconnect()},[F,e.length]),(0,z.useEffect)(()=>()=>{ae.current&&window.clearTimeout(ae.current.timer)},[]),(0,z.useEffect)(()=>{oe.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[n]);let se=e=>P.current?.scrollBy({left:e,behavior:`smooth`}),I=()=>{ae.current&&window.clearTimeout(ae.current.timer),ae.current=null,ie(null)};return(0,q.jsxs)(Ob,{children:[(0,q.jsx)(kb,{children:(0,q.jsx)(Ji,{size:19})}),(0,q.jsxs)(Ab,{children:[M.left&&(0,q.jsx)(Mb,{onClick:()=>se(-180),title:k(`scroll_tabs_left`),type:`button`,children:(0,q.jsx)(vb,{})}),(0,q.jsx)(jb,{onScroll:F,onWheel:e=>{let t=P.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:P,children:e.map(e=>(0,q.jsxs)(Nb,{$active:e.id===n,$dragging:ne===e.id,$dropTarget:re===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Tc(t.dataTransfer)||!Tb(e)||(t.preventDefault(),ae.current?.id===e.id))return;I(),ie(e.id);let n=window.setTimeout(()=>{r(e.id),ae.current=null},500);ae.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ae.current?.id===e.id||re===e.id)&&I()},onDragEnd:()=>{N(null),I()},onDragOver:t=>{(ne||Tc(t.dataTransfer)&&Tb(e))&&(t.preventDefault(),Tc(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>N(e.id),onDrop:t=>{if(t.preventDefault(),ne)s(ne,e.id);else if(Tb(e)&&Tc(t.dataTransfer)){let{paths:n,move:i}=Ec(t);n.length>0&&(r(e.id),c(n,e.path,!t.ctrlKey&&i))}N(null),I()},onClick:()=>r(e.id),ref:e.id===n?oe:void 0,title:e.path||e.title,type:`button`,children:[(0,q.jsx)(Eb,{tab:e}),(0,q.jsx)(Pb,{children:e.title}),e.partner&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Fb,{children:`|`}),(0,q.jsx)(Db,{place:e.partner.place}),(0,q.jsx)(Pb,{children:e.partner.title})]}),(0,q.jsx)(Ib,{"data-shortcut":nn(D.closeTab),onClick:t=>{t.stopPropagation(),i(e.id)},title:k(`close_tab`),children:(0,q.jsx)(bb,{})})]},e.id))}),M.right&&(0,q.jsx)(Mb,{onClick:()=>se(180),title:k(`scroll_tabs_right`),type:`button`,children:(0,q.jsx)(yb,{})}),(0,q.jsx)(Lb,{"data-shortcut":nn(D.newTab),onClick:a,title:k(`new_tab`),type:`button`,children:(0,q.jsx)(Ni,{size:13})})]}),(0,q.jsx)(Rb,{...j}),(0,q.jsxs)(zb,{children:[(0,q.jsx)(Vb,{$active:S,"data-shortcut":nn(D.splitView),disabled:!C,onClick:w,title:k(S?`close_split_view`:`split_view`),type:`button`,children:(0,q.jsx)(Fa,{size:15})}),(0,q.jsx)(Vb,{$active:T,disabled:!E,onClick:ee,title:k(T?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,q.jsx)(Ia,{size:15})}),(0,q.jsxs)(Bb,{$active:b,onClick:x,title:k(b?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,q.jsx)(Ta,{size:14}),y>0&&(0,q.jsx)(Zv,{children:y>9?`9+`:y})]}),(0,q.jsx)(xy,{}),(0,q.jsx)(zy,{currentFolder:O}),(0,q.jsx)(Qv,{tasks:h,onClear:g,open:_,onOpenChange:v}),(0,q.jsx)(sb,{disabled:e.find(e=>e.id===n)?.kind!==`files`,onChange:d,onColumns:f,onShowImages:m,showImages:p,view:l}),(0,q.jsx)(Hb,{onClick:A.minimize,title:k(`minimize`),type:`button`,children:(0,q.jsx)(xb,{})}),(0,q.jsx)(Hb,{onClick:A.toggleMaximize,title:A.maximized?k(`restore`):k(`maximize`),type:`button`,children:A.maximized?(0,q.jsx)(Cb,{}):(0,q.jsx)(Sb,{})}),(0,q.jsx)(Ub,{onClick:A.close,title:k(`close`),type:`button`,children:(0,q.jsx)(bb,{})})]})]})}function Tb(e){return e.kind===`files`&&(!T(e.path)||ee(e.path))}function Eb({tab:e}){switch(e.kind){case`home`:return(0,q.jsx)(Ei,{size:13});case`settings`:return(0,q.jsx)(Li,{size:13});case`recycle`:return(0,q.jsx)(Ui,{size:13});default:return e.archive?(0,q.jsx)(ea,{size:13}):(0,q.jsx)(Db,{place:e.place})}}function Db({place:e}){return e?(0,q.jsx)(ic,{place:e,size:13}):(0,q.jsx)(Di,{size:13})}var Ob=v.header`
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
        // The blur lives on a pseudo-element, not on the bar itself: an element with backdrop-filter
        // becomes a backdrop root, and every floating panel opened from this bar (share, status
        // centre, view, history) would then blur nothing but the bar's own paint.
        background: transparent;
        isolation: isolate;

        &::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            background: rgba(var(--bg-rgb), 0.5);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            pointer-events: none;
        }
    }
`,kb=v.span`
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
`,Ab=v.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,jb=v.div`
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
`,Mb=v.button`
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
`,Nb=v.button`
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
`,Pb=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fb=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Ib=v.span`
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
`,Lb=v.button`
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
`,Rb=v.div`
    flex: 1;
    min-width: 28px;
`,zb=v.div`
    display: flex;
    flex-shrink: 0;
`,Bb=v.button`
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
`,Vb=v.button`
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
`,Hb=v.button`
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
`,Ub=v(Hb)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Wb(){let[e,t]=(0,z.useState)(null),n=(0,z.useRef)(null),r=(0,z.useRef)(void 0);return(0,z.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,uo.createPortal)((0,q.jsx)(Gb,{tooltip:e}),document.body):null}function Gb({tooltip:e}){let t=(0,z.useRef)(null),[n,r]=(0,z.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,z.useState)(()=>e.bottom+6);return(0,z.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,q.jsxs)(Kb,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,q.jsx)(qb,{children:e.text}),e.shortcut&&(0,q.jsx)(Jb,{children:e.shortcut})]})}var Kb=v.div`
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
    ${Eo}
`,qb=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Jb=v.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Yb={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`};function Xb({deviceName:e,code:t,onAccept:n,onReject:r}){let i=o(),a=(0,z.useRef)(null);return(0,z.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,uo.createPortal)((0,q.jsx)(Zb,{children:(0,q.jsxs)(Qb,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsxs)($b,{children:[(0,q.jsx)(wa,{size:15}),i(`pair_for_sharing`)]}),(0,q.jsx)(ex,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,q.jsx)(tx,{children:t}),(0,q.jsx)(nx,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,q.jsxs)(rx,{children:[(0,q.jsx)(ix,{onClick:r,type:`button`,children:i(`reject`)}),(0,q.jsx)(ax,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var Zb=v.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${Eo}
`,Qb=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${xo}
`,$b=v.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,ex=v.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,tx=v.div`
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
`,nx=v.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,rx=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,ix=v.button`
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
`,ax=v(ix)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,ox=0,sx=new Set;function cx(e){sx.add(e),l.send({type:`app.navigate.done`,payload:{path:e}})}var lx=20,ux=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function dx(e){return e.history[e.index]??om(`home`)}function fx(e){return sm(dx(e))??`files`}function px(e){let t=dx(e);return sm(t)?``:e.listing?.path||t}function mx(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||fx(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function hx(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function gx(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||ye.iconSize,gridSize:e.view?.gridSize||t.gridSize||ye.gridSize,sort:e.view?.sort??ye.sort,sortDescending:e.view?.sortDescending??ye.sortDescending,columns:t.columns??be.columns??[]}}function _x(e=om(`home`)){return ox+=1,{id:`tab-${ox}`,listing:null,loading:!sm(e),error:null,history:[e],index:0,fresh:!0,view:null}}function vx(e){return e instanceof Error?e.message:String(e)}function yx(e){let t=sl(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return cl(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function bx(e){let t=x(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function xx(e){return T(e)?cn(e):void 0}function Sx(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return ae(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:C(n)})}function Cx(){let e=o(),[t,n]=(0,z.useState)(()=>[_x()]),[i,a]=(0,z.useState)(()=>t[0].id),[s,c]=(0,z.useState)(null),[u,d]=(0,z.useState)(()=>{let e=nr(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,z.useState)([]),[h,_]=(0,z.useState)([]),[v,y]=(0,z.useState)(null),[b,S]=(0,z.useState)(null),[C,w]=(0,z.useState)(null),A=O(),[j,M]=(0,z.useState)(On),[te,re]=(0,z.useState)(0),[ie,P]=(0,z.useState)(0),[oe,I]=(0,z.useState)(0),[L,ce]=(0,z.useState)(On),[ue,de]=(0,z.useState)(0),[fe,pe]=(0,z.useState)(0),[me,he]=(0,z.useState)(0),[R,ge]=(0,z.useState)(0),B=(0,z.useRef)(R);B.current=R;let[ve,xe]=(0,z.useState)([]),[De,Ne]=(0,z.useState)(10),[V,Pe]=(0,z.useState)(null),Fe=f(g(V?.themeMode)),Ie=(0,z.useMemo)(()=>(V?.favorites??[]).map(e=>E(e.path)),[V?.favorites]),[Le,Re]=(0,z.useState)(0),[H,ze]=(0,z.useState)(Wt),[Ve,Ue]=(0,z.useState)(0),[We,Ge]=(0,z.useState)(0),[qe,Je]=(0,z.useState)(0),[Ye,Ze]=(0,z.useState)(!0),[Qe,$e]=(0,z.useState)(()=>{let e=nr(`yafm.preview.width`,320);return e>=220?e:320}),[et,tt]=(0,z.useState)(null),[nt,rt]=(0,z.useState)(null),[it,st]=(0,z.useState)({kind:null,info:null}),[ct,lt]=(0,z.useState)(`primary`),[ut,dt]=(0,z.useState)(null),[ft,pt]=(0,z.useState)(null),[U,mt]=(0,z.useState)(null),[ht,_t]=(0,z.useState)(null),[bt,wt]=(0,z.useState)({primary:0,secondary:0}),[Et,Dt]=(0,z.useState)({primary:null,secondary:null}),[Ot,At]=(0,z.useState)(null),[jt,Mt]=(0,z.useState)([]),[Nt,Pt]=(0,z.useState)(!1),[Ft,Rt]=(0,z.useState)(null),[zt,Bt]=(0,z.useState)(``),Gt=(0,z.useRef)([]),Kt=(0,z.useRef)([]),[qt,Zt]=(0,z.useState)([]),[tn,rn]=(0,z.useState)(!1),on=(0,z.useMemo)(()=>tn?new Set(qt.map(e=>e.path)):new Set,[qt,tn]),[sn,fn]=(0,z.useState)(!1),[pn,mn]=(0,z.useState)([]),[hn,vn]=(0,z.useState)(null),yn=(0,z.useRef)(0),[bn,W]=(0,z.useState)(()=>{let e=ir(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?hx({x:e.x,y:e.y}):hx({x:Math.max(20,window.innerWidth-340),y:110})}),xn=(0,z.useCallback)(()=>{W(e=>hx(e)),fn(!0)},[]),G=t.find(e=>e.id===i)??t[0],K=fx(G),Sn=dx(G),Cn=px(G),wn=K===`files`?G.listing?.parent??yx(Cn):null,Tn=G.splitWith?t.find(e=>e.id===G.splitWith):void 0,En=K===`files`&&Tn!==void 0,Dn=Tn?px(Tn):``,kn=Tn?Tn.listing?.parent??yx(Dn):null,An=En&&Tn&&ct===`secondary`?Tn:G,jn=V?.defaultView??be,Mn=gx(An,jn);(0,z.useEffect)(()=>{r(V?.accentColor,V?.secondaryColor,Fe)},[V?.accentColor,V?.secondaryColor,Fe]),(0,z.useEffect)(()=>{jh(V?.fonts)},[V?.fonts]),(0,z.useEffect)(()=>{N(V?.timeFormat,V?.timeFormatPattern)},[V?.timeFormat,V?.timeFormatPattern]),(0,z.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!V?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[V?.backgroundSource]),(0,z.useEffect)(()=>(_e(e=>new Promise(t=>{vn({id:++yn.current,prompt:e,resolve:t})})),()=>_e(null)),[]),(0,z.useEffect)(()=>{lt(`primary`)},[i]),(0,z.useEffect)(()=>{ce(On),pe(0),he(0)},[K]),(0,z.useEffect)(()=>{pe(0)},[L.query,L.matchCase,L.regex]),(0,z.useEffect)(()=>{pe(e=>me===0?0:Math.min(e,me-1))},[me]);let Nn=Mn.columns.includes(`linkCount`),Pn=(0,z.useMemo)(()=>{let e={},t=tc(V),n={};for(let[e,t]of Object.entries(V?.placeNames??{}))n[E(e)]=t;for(let t of p)e[E(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=E(t),i=p.find(e=>E(e.path)===r);e[r]={name:n[r]??i?.name??(x(t)||t),path:t,kind:`folder`,icon:i?.icon??V?.placeIcons?.[t]??null}}return e},[p,V]),Fn=(0,z.useMemo)(()=>({places:Pn,useIcons:V?.systemIcons===!1}),[Pn,V?.systemIcons]),In=V?.defaultView?.showImages??!0,Rn=V?.defaultView?.imageStripHeight??be.imageStripHeight,zn=K===`home`?(0,q.jsx)(la,{size:13}):K===`settings`?(0,q.jsx)(Li,{size:13}):K===`recycle`?(0,q.jsx)(Ui,{size:13}):K===`gallery`?(0,q.jsx)(Zi,{size:13}):void 0,Bn=j.open&&j.query.length>0,Vn=(0,z.useMemo)(()=>Bn&&An.listing?An.listing.entries.filter(e=>Ln(e.isDirectory?qn(Fn,e.fullPath,e.name):e.name,j)).map(e=>e.fullPath):[],[Bn,j,An.listing,Fn]);(0,z.useEffect)(()=>{re(0)},[j.query,j.matchCase,j.regex,An.listing?.path]);let Hn=Vn.length===0?-1:Math.min(te,Vn.length-1),Un=(0,z.useCallback)(()=>{M(e=>({...e,open:!1,query:``})),re(0)},[]),Gn=(0,z.useCallback)(()=>{M(e=>({...e,open:!0})),P(e=>e+1)},[]),Jn=(0,z.useCallback)(()=>{ce(e=>({...e,open:!0})),de(e=>e+1)},[]),Yn=(0,z.useCallback)(()=>{ce(On),pe(0),he(0)},[]),Xn=(0,z.useCallback)(e=>{pe(t=>me===0?0:(Math.min(t,me-1)+e+me)%me)},[me]),Zn=(0,z.useCallback)(e=>{M(t=>({...t,open:!0,query:t.open?t.query+e:e})),P(e=>e+1)},[]),Qn=(0,z.useCallback)(e=>{re(t=>Vn.length===0?0:(Math.min(t,Vn.length-1)+e+Vn.length)%Vn.length)},[Vn.length]),$n=(0,z.useRef)({tabs:t,activeId:i,activePane:ct});$n.current={tabs:t,activeId:i,activePane:ct};let er=(0,z.useRef)(V);er.current=V;let tr=(0,z.useRef)(!1),or=(0,z.useRef)([]),sr=(0,z.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),cr=(0,z.useRef)(new Map),lr=(0,z.useCallback)(e=>{let t=(cr.current.get(e)??0)+1;return cr.current.set(e,t),()=>cr.current.get(e)===t},[]),ur=(0,z.useCallback)((e,t)=>{l.available&&t&&e===mx($n.current)&&l.send({type:`fs.focus`,payload:{path:t}})},[]),dr=(0,z.useCallback)(async(e,t,n)=>{if(!(t&&ol(t)))try{let r=await Ae(t,Nn);if(!n()||!r.listing)return;sr(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[Nn,sr]),fr=(0,z.useCallback)(async(e,t,n=!1)=>{let r=lr(e);Un(),ur(e,t);let i=!n||!$n.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;sr(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&F(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&dr(e,t,r);let o=t&&ol(t)?await ll(t):await Ce(t,!0,Nn,B.current,t?xx(t):void 0);if(!r())return;sr(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!ol(o.path)&&He(o.path).then(()=>Re(e=>e+1))}catch(i){if(!r())return;let a=$n.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?px(a):``,s=yx(o),c=vx(i);if(o&&dn(c)){let i=D(o),a=await eo(i,!!cn(i));if(a){ln(i,a),r()&&fr(e,t,n);return}}sr(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[lr,Nn,sr,ur,Un,dr]),pr=(0,z.useCallback)((e,t)=>{let n=cm(t);n&&(sm(n)?(Un(),lr(e),sr(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):fr(e,n))},[lr,fr,sr,Un]),mr=(0,z.useCallback)(async(e,t,n)=>{if(Un(),sm(t)){lr(e),sr(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=lr(e);ur(e,t),sr(e,()=>({index:n,listing:null,loading:!0,error:null}));try{ol(t)||dr(e,t,r);let n=ol(t)?await ll(t):await Ce(t,!0,Nn,B.current,xx(t));if(!r())return;sr(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(dn(vx(i))){let i=D(t),a=await eo(i,!!cn(i));if(a){ln(i,a),r()&&mr(e,t,n);return}}sr(e,()=>({listing:{path:t,parent:yx(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:vx(i)}))}},[lr,Nn,sr,ur,Un,dr]),hr=(0,z.useCallback)((e,t=!0)=>{let r=_x(e??om(`home`));return n(e=>[...e,r]),t&&a(r.id),e&&!sm(e)&&fr(r.id,e),r.id},[fr]),gr=(0,z.useCallback)(e=>{for(let t of $n.current.tabs)fx(t)===`files`&&F(px(t),e)&&fr(t.id,e,!0)},[fr]),_r=(0,z.useCallback)((e,t)=>{let n=x(t);for(let r of $n.current.tabs)r.listing?.entries.some(t=>F(t.fullPath,e))&&sr(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>F(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[sr]),vr=(0,z.useRef)([]);(0,z.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&T(t)&&e.add(E(D(t)))}let n=vr.current.filter(t=>!e.has(t));vr.current=[...e],n.length>0&&Ee(n)},[t]);let yr=(0,z.useCallback)((e,t=!1)=>{t?hr(om(e)):pr($n.current.activeId,om(e))},[hr,pr]),br=(0,z.useCallback)(e=>{let{tabs:t,activeId:r}=$n.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(Kt.current.push(dx(i)),Kt.current.length>lx&&Kt.current.shift()),o.length===0){let e=_x();n([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&a(o[Math.min(s,o.length-1)].id)},[]),xr=(0,z.useCallback)(()=>{let e=Kt.current.pop();if(!e)return;let t={..._x(e),fresh:!1};n(e=>[...e,t]),a(t.id),fx(t)===`files`&&fr(t.id,px(t))},[fr]),Sr=(0,z.useCallback)((e,t=!1)=>{t?hr(e):pr(mx($n.current),e??om(`home`))},[pr,hr]),Cr=(0,z.useCallback)(e=>{let{tabs:t,activeId:n}=$n.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),wr=(0,z.useCallback)(()=>{let{tabs:e,activeId:t}=$n.current,r=e.find(e=>e.id===t);if(!r||fx(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),sr(t,()=>({splitWith:void 0})),lt(`primary`);return}let a=px(r),o={..._x(a),hidden:!0};n(e=>[...e,o]),sr(t,()=>({splitWith:o.id})),fr(o.id,a),lt(`primary`)},[fr,sr]),Tr=(0,z.useCallback)(e=>{$e(e),rr(`yafm.preview.width`,e)},[]),Er=(0,z.useCallback)((e,t,n)=>st(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),Dr=(0,z.useCallback)((e,t)=>Er(`gallery`,e,t),[Er]),Or=(0,z.useCallback)((e,t)=>Er(`recycle`,e,t),[Er]),kr=En?ct===`secondary`?nt??et:et??nt:et,Ar=En&&ct===`secondary`?bt.secondary:bt.primary,jr=K===`files`?kr:it.kind===K?it.info:null,Mr=K===`files`?Ar>1?ae(e,Ar,`k_1_item_selected`,`count_items_selected`):void 0:it.kind===K?it.note:void 0,Nr=(0,z.useRef)(null),Pr=e=>{e.preventDefault();let t=Nr.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);d(r),rr(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Fr=(e,t,n)=>{t&&dt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Ir=(0,z.useCallback)((e,t)=>{wt(n=>n[e]===t?n:{...n,[e]:t})},[]),Lr=(0,z.useCallback)(e=>Ir(`primary`,e),[Ir]),Rr=(0,z.useCallback)(e=>Ir(`secondary`,e),[Ir]),zr=(e,t)=>{bt[e]!==0&&Dt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Br=async(e,t=!1)=>{let n=ut;if(dt(null),!n)return;let r=e===null?await Tt(n.directory,t):await kt(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Un(),At(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Vr=(0,z.useCallback)(()=>{let{tabs:e}=$n.current,t=e.find(e=>e.id===mx($n.current));t&&t.index>0&&mr(t.id,t.history[t.index-1],t.index-1)},[mr]),Hr=(0,z.useCallback)(()=>{let{tabs:e}=$n.current,t=e.find(e=>e.id===mx($n.current));t&&t.index<t.history.length-1&&mr(t.id,t.history[t.index+1],t.index+1)},[mr]),Ur=(0,z.useCallback)(()=>{let{tabs:e}=$n.current,t=e.find(e=>e.id===mx($n.current));t&&fx(t)===`files`&&t.listing?.parent&&Sr(t.listing.parent)},[Sr]),Wr=(0,z.useRef)(null),Gr=(0,z.useCallback)(()=>{for(let e of $n.current.tabs)e.listing&&fr(e.id,e.listing.path,!0)},[fr]),Kr=(0,z.useCallback)(e=>{e.length!==0&&(mn(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),xn())},[xn]),qr=(0,z.useCallback)(async e=>{let t=await xt(e);t.length!==0&&Kr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Kr]),Jr=(0,z.useCallback)(e=>{let t=new Set(e);mn(e=>e.filter(e=>!t.has(e.path)))},[]),Yr=(0,z.useCallback)(async e=>{let t=er.current;if(!t)return;let n=await xt(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>E(e.path))),i=n.filter(e=>!r.has(E(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};Pe(a),await at(a),Ue(e=>e+1)},[]),Xr=(0,z.useCallback)(async e=>{let t=er.current;if(!t)return;let n=new Set(e.map(E)),r=(t.favorites??[]).filter(e=>!n.has(E(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};Pe(i),await at(i),Ue(e=>e+1)},[]),Zr=(0,z.useCallback)(()=>mn([]),[]),Qr=(0,z.useRef)(-1),$r=(0,z.useCallback)(e=>{Zt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),rn(e.move),e.entries.length>0&&xn()},[xn]),ei=(0,z.useCallback)(async()=>{if(l.available)try{let e=await vt();Qr.current=e.sequence,$r(e)}catch{}},[$r]),ti=(0,z.useCallback)(async e=>{e.length!==0&&await gt(e,!1)&&await ei()},[ei]),ni=(0,z.useRef)(pn);ni.current=pn;let ri=(0,z.useRef)(sn);ri.current=sn;let ii=(0,z.useRef)(!1);(0,z.useEffect)(()=>{let e=V?.trayAutoShow??!0,t=t=>{e&&Tc(t)&&(ri.current||(ii.current=!0),xn())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{ii.current&&window.setTimeout(()=>{ii.current&&ni.current.length===0&&fn(!1),ii.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[xn,V?.trayAutoShow]),(0,z.useEffect)(()=>{let e=()=>W(e=>hx(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let ai=(0,z.useCallback)(async()=>{let e=ni.current;if(e.length>0){let t=await xt(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));mn(e=>e.filter(e=>n.has(e.path)))}await ei()},[ei]),oi=(0,z.useCallback)(()=>{ai(),Je(e=>e+1),Gr()},[ai,Gr]),si=(0,z.useCallback)(e=>{let t=hx(e);W(t),ar(`yafm.tray.position`,t)},[]),ci=(0,z.useCallback)(()=>{ii.current=!1,sn?fn(!1):xn()},[xn,sn]),li=(0,z.useCallback)(async(t,n,r)=>{let i=await yt(t,n,r);i.cancelled||(i.ok?(r&&Jr(t),Je(e=>e+1),Gr(),ei()):Qa(i.error??e(`the_files_could_not_be_transferred`)))},[Gr,ei,Jr]);(0,z.useEffect)(()=>{if(l.available)return Ht().then(e=>{Gt.current=e,Mt(e)},()=>void 0),l.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Gt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Gt.current=n,Mt(n),r&&Pt(!0)})},[]);let ui=(0,z.useCallback)(()=>{Ut().then(()=>Ht().then(e=>{Gt.current=e,Mt(e)},()=>void 0))},[]);(0,z.useEffect)(()=>{if(!l.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await vt();if(!e||t.sequence===Qr.current)return;Qr.current=t.sequence,$r(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[$r]);let di=(0,z.useCallback)(async e=>{let t=e?await It():await Lt();t.ok?(Je(e=>e+1),Gr()):t.error&&!t.error.startsWith(`Nothing to`)&&Qa(t.error)},[Gr]),fi=(0,z.useRef)(Nn);(0,z.useEffect)(()=>{fi.current!==Nn&&(fi.current=Nn,Gr())},[Nn,Gr]);let pi=(0,z.useCallback)((e,t)=>{let{tabs:n}=$n.current,r=n.find(t=>t.id===e);if(!r||fx(r)!==`files`)return;let i=px(r),a=er.current?.defaultView??be,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||ye.iconSize,gridSize:r.view?.gridSize||a.gridSize||ye.gridSize,sort:r.view?.sort??ye.sort,sortDescending:r.view?.sortDescending??ye.sortDescending,...t};sr(e,()=>({view:o})),Wr.current!==null&&window.clearTimeout(Wr.current),Wr.current=window.setTimeout(()=>{Wr.current=null,Oe(i,o)},250)},[sr]),mi=(0,z.useCallback)(e=>{pi(mx($n.current),e)},[pi]),hi=(0,z.useCallback)(e=>{let t=er.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,columns:e}};Pe(n),at(n)},[]),gi=(0,z.useCallback)(e=>{let t=er.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,showImages:e}};Pe(n),at(n)},[]),_i=(0,z.useCallback)(e=>{let t=er.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,imageStripHeight:e}};Pe(n),at(n)},[]),vi=(0,z.useCallback)((e,t,n,r)=>{let i=$n.current.tabs.find(t=>t.id===e);if(!i||fx(i)!==`files`||!i.listing)return;let a=px(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));sr(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),ke(a,t,n,r)},[sr]),yi=(0,z.useCallback)((e,t)=>{let n=$n.current.tabs.find(t=>t.id===e);if(!n)return;let r=gx(n,er.current?.defaultView??be);pi(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[pi]),bi=(0,z.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),xi=(0,z.useCallback)(()=>{je().then(m,()=>m([]))},[]),Si=(0,z.useCallback)(e=>{let t=(e.openTabs??[]).map(cm).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({..._x(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),a(r[i].id);for(let e of r)fx(e)===`files`&&fr(e.id,px(e),!0);return!0},[fr]),Ci=(0,z.useCallback)(e=>{let t=or.current;if(or.current=[],t.length===0)return;let n=t.filter(e=>!sx.has(e));for(let e of t)n.includes(e)||cx(e);if(n.length===0)return;let{tabs:r}=$n.current;if(!e&&r.length===1&&r[0].fresh){pr(r[0].id,n[0]),cx(n[0]);for(let e of n.slice(1))hr(e),cx(e);return}let i=n.map(e=>{let t=hr(e);return cx(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[hr,pr]),wi=(0,z.useCallback)(()=>{Xe().then(e=>{Pe(e),Ne(e.recentLimit);let t=Jt(e.shortcuts);ze(t),Qt(Xt(t,`openInNewTab`)),Ue(e=>e+1),tr.current||(tr.current=!0,Ci(e.restoreTabs&&Si(e)))},()=>{Ne(10),tr.current=!0,Ci(!1)})},[Ci,Si]),Ti=(0,z.useCallback)(()=>{Be().then(xe,()=>xe([]))},[]),J=(0,z.useCallback)(()=>{Me().then(_,()=>_([]))},[]),Ei=t.filter(e=>!e.hidden),Di=Ei.map(dx),Oi=Di.join(`
`),ki=Math.max(Ei.findIndex(e=>e.id===i),0);(0,z.useEffect)(()=>{if(!V?.restoreTabs)return;let e=setTimeout(()=>void ot(Di,ki),700);return()=>clearTimeout(e)},[Oi,ki,V?.restoreTabs]),(0,z.useEffect)(()=>{let{tabs:e,activeId:t}=$n.current,n=e.find(e=>e.id===t);n&&n.fresh&&fx(n)===`files`&&fr(n.id,px(n),!0),xi(),wi(),J(),se().then(y,()=>y(null))},[fr,xi,wi,J]),(0,z.useEffect)(()=>{if(le().then(S,()=>S(null)),l.available)return l.on(e=>{let t=e;t.type===`update.checked`&&t.data&&S(t.data)})},[]),(0,z.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&c({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Qa(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Qa(n.data.error??e(`pairing_failed`))}})},[e]),(0,z.useEffect)(()=>{let e=setInterval(J,3e4);return()=>clearInterval(e)},[J]),(0,z.useEffect)(()=>{K===`home`&&(Ti(),J())},[K,G.id,Ti,J]),(0,z.useEffect)(()=>{if(!l.available)return;let e=l.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=$n.current,i=t.data.startup===!0;i&&sx.has(n)?cx(n):i&&!tr.current?or.current.includes(n)||or.current.push(n):(i&&r.length===1&&r[0].fresh?pr(r[0].id,n):sm(n)?pr(mx($n.current),n):hr(n),i&&cx(n))});return l.send({type:`app.ready`}),e},[pr,hr]),(0,z.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,z.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,z.useEffect)(()=>{let e=e=>{if(an(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Vr();return}if(e.key===`BrowserForward`){e.preventDefault(),Hr();return}if(e.key===`Escape`&&j.open){e.preventDefault(),Un();return}let t=en(e);if(Yt(H,`closeTab`,t)&&(e.preventDefault(),br(mx($n.current))),Yt(H,`newTab`,t)&&(e.preventDefault(),hr()),Yt(H,`reopenTab`,t)&&(e.preventDefault(),xr()),Yt(H,`goBack`,t)&&(e.preventDefault(),Vr()),Yt(H,`goForward`,t)&&(e.preventDefault(),Hr()),Yt(H,`goUp`,t)&&(e.preventDefault(),Ur()),Yt(H,`find`,t)&&(e.preventDefault(),K===`files`?Gn():Jn()),Yt(H,`location`,t)&&(e.preventDefault(),Ge(e=>e+1)),Yt(H,`home`,t)){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&Sr(t)}Yt(H,`iconsView`,t)&&(e.preventDefault(),K===`files`&&mi({mode:`grid`})),Yt(H,`detailsView`,t)&&(e.preventDefault(),K===`files`&&mi({mode:`list`})),Yt(H,`nextTab`,t)&&(e.preventDefault(),Cr(1)),Yt(H,`previousTab`,t)&&(e.preventDefault(),Cr(-1)),Yt(H,`hidden`,t)&&(e.preventDefault(),Ke().then(()=>{Je(e=>e+1),Gr()})),Yt(H,`undo`,t)&&(e.preventDefault(),di(!0)),Yt(H,`redo`,t)&&(e.preventDefault(),di(!1)),Yt(H,`splitView`,t)?(e.preventDefault(),wr()):Object.keys(H).some(e=>e!==`openInNewTab`&&Yt(H,e,t))||K!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Zn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[H,K,j.open,br,xr,hr,Vr,Hr,Ur,Gn,Jn,Un,Zn,mi,Cr,Sr,p,Gr,di,wr]),(0,z.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Vr()):(e.button===4||e.button===9)&&(e.preventDefault(),Hr())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Vr,Hr]),(0,z.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Vr();break;case`forward`:Hr()}})},[Vr,Hr]);let Mi=(0,z.useMemo)(()=>{let e=new Set;for(let n of t){if(fx(n)!==`files`)continue;let t=px(n);if(t&&!ol(t)){if(T(t)){let n=yx(D(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),Ii=Mi.join(`\0`);(0,z.useEffect)(()=>{l.available&&l.send({type:`fs.watch`,payload:{paths:Mi,owner:`app`}})},[Ii,i]);let Ri=fx(An)===`files`?px(An):``;(0,z.useEffect)(()=>{l.available&&l.send({type:`fs.focus`,payload:{path:Ri||null}})},[Ri]),(0,z.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=$n.current.tabs.filter(e=>fx(e)===`files`&&F(px(e),n)),i=$n.current.tabs.filter(e=>{let t=px(e);return fx(e)===`files`&&t.length>0&&T(t)&&F(D(t),n)});if(r.length!==0||i.length!==0){_n(n);for(let e of i){let t=$n.current.tabs.find(t=>t.id===e.id),r=t?px(t):``;t&&fx(t)===`files`&&!t.loading&&T(r)&&F(D(r),n)&&fr(e.id,r,!0)}r.length!==0&&Ce(n,!1,Nn).then(e=>{for(let t of r){let n=$n.current.tabs.find(e=>e.id===t.id);n&&fx(n)===`files`&&F(px(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=$n.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&fx(n)===`files`&&F(px(n),e.path)&&sr(t.id,()=>({listing:e}))},300):sr(t.id,()=>({listing:e})))}},()=>void 0)}})},[Nn,fr,sr]);let zi=G.index>0,Bi=G.index<G.history.length-1,Vi=(e,t)=>{let n=gx(e,jn),r=e.listing?.path??e.history[e.index]??``,i=T(r),a=i&&ee(r);return(0,q.jsx)(Bl,{platform:v?.platform,confirmDelete:V?.confirmDelete??!1,cutPaths:on,previewVideoAudio:V?.previewVideoAudio??!1,previewVideoAutoplay:V?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?tt:rt,onActivate:()=>lt(t?`primary`:`secondary`),enableShortcuts:(!En||(t?ct===`primary`:ct===`secondary`))&&(!i||a),error:e.error,find:e.id===An.id?{...j,currentPath:Hn<0?null:Vn[Hn]}:void 0,selectMatchesToken:e.id===An.id?oe:0,imageStripHeight:Rn,listing:e.listing,loading:e.loading,onImageStripHeight:_i,readOnly:i&&!a||ol(e.listing?.path??``),onOpen:(t,n)=>{n?hr(t):fr(e.id,t)},onOpenFile:(t,n)=>{ol(t)?dl(t).catch(e=>void Qa(vx(e))):ne(t)?V?.archiveHandler??!1?n?hr(t):fr(e.id,t):Se(t):T(t)?(async()=>{let e=await Te(t,B.current,xx(t));if(!e.path&&dn(e.error)){let n=D(t),r=cn(n);r&&un(n);let i=await eo(n,!!r);i&&(ln(n,i),e=await Te(t,B.current,i))}e.path?Se(e.path):e.error&&Qa(e.error)})():Se(t)},onRefresh:()=>{let t=e.listing?.path;t&&gr(t)},onRename:_r,onSelectionCountChange:t?Lr:Rr,onSetTags:(t,n,r)=>vi(e.id,t,n,r),selectionMenuRequest:t?Et.primary:Et.secondary,onSort:t=>yi(e.id,t),onPaste:oi,onClipboardChanged:()=>void ei(),onTransfer:li,onAddToTray:e=>void qr(e),onAddFavorite:e=>void Yr(e),onRemoveFavorite:e=>void Xr(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void Ji(e,t),openOnSingleClick:V?.openOnSingleClick??!1,pendingRename:Ot&&t===(ct===`primary`)&&F(Ot.directory,e.listing?.path??``)?Ot.path:null,pendingRenameToken:Ot?.token??0,refreshToken:qe,shortcuts:H,showCheckboxes:V?.showCheckboxes??!0,showImages:In,view:n})},Hi=j.open&&(0,q.jsx)(_f,{current:Hn,focusToken:ie,matchCase:j.matchCase,mode:j.mode,onClose:Un,onMatchCase:()=>M(e=>({...e,matchCase:!e.matchCase})),onMode:()=>M(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Qn(1),onPrevious:()=>Qn(-1),onQuery:e=>M(t=>({...t,query:e})),onRegex:()=>M(e=>({...e,regex:!e.regex})),query:j.query,regex:j.regex,total:Vn.length,onSelectMatches:Vn.length>0?()=>I(e=>e+1):void 0}),Wi=K===`files`&&T(Cn),Gi=Wi&&ee(Cn),Ki=Wi&&G.listing?.archiveEncrypted===!0,qi=async(t,n)=>{let r=D(t),i=await we(r,n,B.current,xx(r));if(!i.ok&&dn(i.error)){let e=cn(r);e&&un(r);let t=await eo(r,!!e);t&&(ln(r,t),i=await we(r,n,B.current,t))}i.ok?(gr(n),gn(),fr(G.id,n,!0)):Qa(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ji=async(e,t)=>{let n=D(e),r=yx(n);if(!r)return;if(t===`choose`){let e=await qa(r);e&&await qi(n,e);return}let i=t===`named`;if(t===`auto`){let e=F(n,Cn)?G.listing?.entries??[]:(await Ce(n,!1,!1,B.current,xx(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${bx(n)}`:r;await qi(n,o)},Yi=async e=>{Wi&&await Ji(Cn,e)},Xi=async()=>{Wi&&await Ji(Cn,`choose`)},Qi=(0,q.jsxs)(Ox,{children:[(0,q.jsx)(kx,{"data-shortcut":nn(H.goBack),disabled:!zi,onClick:e=>{G.index>0&&$t(e)?hr(G.history[G.index-1]):Vr()},title:e(`back`),type:`button`,children:(0,q.jsx)(Pi,{})}),(0,q.jsx)(kx,{"data-shortcut":nn(H.goForward),disabled:!Bi,onClick:e=>{G.index<G.history.length-1&&$t(e)?hr(G.history[G.index+1]):Hr()},title:e(`forward`),type:`button`,children:(0,q.jsx)(Fi,{})}),(0,q.jsx)(kx,{"data-shortcut":nn(H.goUp),disabled:K!==`files`||!wn,onClick:e=>{wn&&($t(e)?hr(wn):Sr(wn))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(ji,{})}),(0,q.jsx)(lm,{focusToken:We,icon:zn,label:K===`files`?void 0:e(Yb[K]),onContextMenu:K===`files`?(e,t,n)=>mt({x:t,y:n,path:e}):void 0,onNavigate:Sr,path:K===`files`?Cn:Sn}),K===`files`&&(!Wi||Gi)&&(0,q.jsx)(kx,{onClick:e=>Fr(e,Cn,()=>void fr(G.id,Cn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ni,{})}),(0,q.jsx)(kx,{"data-shortcut":nn(H.find),onClick:()=>K===`files`?Gn():Jn(),title:e(`search`),type:`button`,children:(0,q.jsx)(Ai,{})}),bt.primary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Em,{}),(0,q.jsx)(kx,{onClick:e=>zr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(La,{})})]}),(0,q.jsx)(`span`,{ref:Rt,style:{display:`contents`}}),Wi&&(0,q.jsxs)(Ax,{children:[(0,q.jsx)(Em,{}),Ki&&(0,q.jsxs)(jx,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(Ra,{size:12}),e(`encrypted`)]}),(0,q.jsx)(kx,{onClick:()=>void Xi(),onContextMenu:e=>{e.preventDefault(),pt({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,q.jsx)(ea,{})}),(0,q.jsx)(Uo,{icon:(0,q.jsx)(Ea,{size:15}),onChange:e=>{let t=Number(e);ge(t),B.current=t,Wi&&fr(G.id,Cn,!0)},options:ux.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(ux.find(e=>e.value===String(R))?.label??`auto`)}`,value:String(R)})]})]}),$i=L.open?{...L,index:fe}:null;return(0,q.jsx)(Wn,{value:Fn,children:(0,q.jsxs)(wx,{$rounded:A,children:[(0,q.jsx)(Ad,{settings:V,theme:Fe}),(0,q.jsx)(wb,{activeId:G.id,onClose:br,onNewTab:()=>hr(),onReorder:bi,onTransferToTab:li,onSelect:a,onViewChange:mi,onColumns:hi,onShowImages:gi,showImages:In,tasks:jt,onClearTasks:ui,activityOpen:Nt,onActivityOpenChange:Pt,trayCount:pn.length+qt.length,trayVisible:sn,onToggleTray:ci,split:En,canSplit:K===`files`,onToggleSplit:wr,details:Ye,canDetails:K===`files`||K===`recycle`||K===`gallery`,onToggleDetails:()=>Ze(e=>!e),currentFolder:K===`files`&&!ol(Cn)?Cn:``,shortcuts:H,view:Mn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=fx(n),i=px(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?px(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Kn(Fn,i):void 0,archive:r===`files`&&T(i),split:!!a,title:r===`files`?qn(Fn,i,x(i)||e(`files`)):e(Yb[r]),partner:a?{title:qn(Fn,o,x(o)||e(`files`)),place:Kn(Fn,o)}:void 0}})}),(0,q.jsxs)(Tx,{children:[(0,q.jsx)(Nv,{activeKind:K,currentPath:K===`files`?Sn:``,drives:h,historyVersion:Le,onNavigate:Sr,onOpenView:yr,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:ve,recentLimit:De,version:Ve}),(0,q.jsxs)(Ex,{children:[(0,q.jsxs)(Lx,{children:[(0,q.jsxs)(Rx,{children:[K!==`files`&&Qi,(0,q.jsxs)(Dx,{children:[K!==`files`&&L.open&&(0,q.jsx)(_f,{current:fe,focusToken:ue,matchCase:L.matchCase,mode:L.mode,onClose:Yn,onMatchCase:()=>ce(e=>({...e,matchCase:!e.matchCase})),onMode:()=>ce(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Xn(1),onPrevious:()=>Xn(-1),onQuery:e=>ce(t=>({...t,query:e})),onRegex:()=>ce(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:L.query,regex:L.regex,total:me,onSelectMatches:K===`gallery`||K===`recycle`?()=>I(e=>e+1):void 0}),K===`files`?En&&Tn?(0,q.jsxs)(Nx,{ref:Nr,children:[(0,q.jsxs)(Px,{style:{flex:u},children:[(0,q.jsxs)(Mx,{$active:ct===`primary`,onPointerDown:()=>lt(`primary`),children:[(0,q.jsx)(kx,{"data-shortcut":nn(H.goBack),disabled:!zi,onClick:e=>{let t=G.index-1;t<0||($t(e)?hr(G.history[t]):mr(G.id,G.history[t],t))},title:e(`back`),type:`button`,children:(0,q.jsx)(Pi,{})}),(0,q.jsx)(kx,{"data-shortcut":nn(H.goForward),disabled:!Bi,onClick:e=>{let t=G.index+1;t>=G.history.length||($t(e)?hr(G.history[t]):mr(G.id,G.history[t],t))},title:e(`forward`),type:`button`,children:(0,q.jsx)(Fi,{})}),(0,q.jsx)(kx,{"data-shortcut":nn(H.goUp),disabled:!wn,onClick:e=>{wn&&($t(e)?hr(wn):fr(G.id,wn))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(ji,{})}),(0,q.jsx)(lm,{focusToken:ct===`primary`?We:void 0,onContextMenu:(e,t,n)=>mt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?hr(e):void fr(G.id,e),path:Cn}),(0,q.jsx)(kx,{onClick:e=>Fr(e,Cn,()=>void fr(G.id,Cn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ni,{})}),(0,q.jsx)(kx,{"data-shortcut":nn(H.find),onClick:Gn,title:e(`search`),type:`button`,children:(0,q.jsx)(Ai,{})}),bt.primary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Em,{}),(0,q.jsx)(kx,{onClick:e=>zr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(La,{})})]})]}),Vi(G,!0),ct===`primary`&&Hi]}),(0,q.jsx)(Fx,{onDoubleClick:()=>d(.5),onPointerDown:Pr,title:e(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(Px,{$enter:!0,style:{flex:1-u},children:[(0,q.jsxs)(Mx,{$active:ct===`secondary`,onPointerDown:()=>lt(`secondary`),children:[(0,q.jsx)(kx,{"data-shortcut":nn(H.goBack),disabled:Tn.index<=0,onClick:e=>{let t=Tn.index-1;t<0||($t(e)?hr(Tn.history[t]):mr(Tn.id,Tn.history[t],t))},title:e(`back`),type:`button`,children:(0,q.jsx)(Pi,{})}),(0,q.jsx)(kx,{"data-shortcut":nn(H.goForward),disabled:Tn.index>=Tn.history.length-1,onClick:e=>{let t=Tn.index+1;t>=Tn.history.length||($t(e)?hr(Tn.history[t]):mr(Tn.id,Tn.history[t],t))},title:e(`forward`),type:`button`,children:(0,q.jsx)(Fi,{})}),(0,q.jsx)(kx,{"data-shortcut":nn(H.goUp),disabled:!kn,onClick:e=>{kn&&($t(e)?hr(kn):fr(Tn.id,kn))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(ji,{})}),(0,q.jsx)(lm,{focusToken:ct===`secondary`?We:void 0,onContextMenu:(e,t,n)=>mt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?hr(e):void fr(Tn.id,e),path:Dn}),(0,q.jsx)(kx,{onClick:e=>Fr(e,Dn,()=>void fr(Tn.id,Dn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ni,{})}),(0,q.jsx)(kx,{"data-shortcut":nn(H.find),onClick:Gn,title:e(`search`),type:`button`,children:(0,q.jsx)(Ai,{})}),bt.secondary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Em,{}),(0,q.jsx)(kx,{onClick:e=>zr(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(La,{})})]})]}),Vi(Tn,!1),ct===`secondary`&&Hi]})]}):(0,q.jsxs)(q.Fragment,{children:[Qi,(0,q.jsxs)(Ix,{children:[Vi(G,!0),Hi]})]}):K===`home`?(0,q.jsx)($p,{platform:v?.platform,drives:h,find:$i,historyVersion:Le,onSearchMatches:he,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:J,onHistoryChanged:()=>Re(e=>e+1),onAddToTray:e=>void qr(e),onAddFavorite:e=>void Yr(e),onRemoveFavorite:e=>void Xr(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void Ji(e,t),settingsVersion:Ve,theme:Fe,onOpen:Sr,onLayoutChanged:wi,onPlacesChanged:m,onRecentCleared:Ti,places:p,recent:ve,recentLimit:De,visibilityVersion:qe}):K===`settings`?(0,q.jsx)(ig,{appInfo:v,find:$i,focusSection:C,onSearchMatches:he,onSettingsChanged:wi}):K===`gallery`?(0,q.jsx)(wv,{platform:v?.platform,toolbarSlot:Ft,onStatusChange:Bt,confirmDelete:V?.confirmDelete??!1,find:$i,onSearchMatches:he,openOnSingleClick:V?.openOnSingleClick??!1,onAddToTray:e=>void qr(e),onAddFavorite:e=>void Yr(e),onRemoveFavorite:e=>void Xr(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void Ji(e,t),shortcuts:H,showCheckboxes:V?.showCheckboxes??!0,selectMatchesToken:oe,onPreviewChange:Dr,view:Mn}):(0,q.jsx)(Om,{find:$i,toolbarSlot:Ft,onStatusChange:Bt,onOpenLocation:Sr,onShowDetails:()=>Ze(!0),platform:v?.platform,selectMatchesToken:oe,onPreviewChange:Or})]},K)]}),(K===`files`||K===`gallery`||K===`recycle`)&&(0,q.jsx)(Es,{emptyNote:e(`nothing_selected`),info:jr,onWidth:Tr,open:Ye,selectionNote:Mr,videoAudio:V?.previewVideoAudio??!1,videoAutoplay:V?.previewVideoAutoplay??!1,width:Qe})]}),(0,q.jsxs)(Ux,{children:[(0,q.jsx)(`span`,{children:K===`files`&&G.listing?Sx(e,G.listing):zt}),v?(0,q.jsxs)(zx,{children:[(0,q.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),v.debug&&(0,q.jsx)(Hx,{children:`debug`}),b?.available&&(0,q.jsxs)(Bx,{onClick:e=>{w(`updates`),yr(`settings`,$t(e))},title:e(`version_version_is_available`,{version:b.latest}),type:`button`,children:[(0,q.jsx)(Vx,{}),e(`update_available`)]})]}):(0,q.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,q.jsx)(Ac,{clipboardItems:qt,clipboardMove:tn,currentDirectory:K===`files`?Sn:``,items:pn,onAdd:e=>void qr(e),onClear:Zr,onClose:()=>fn(!1),onCopyToClipboard:e=>void ti(e),onPosition:si,onRemove:Jr,onTransfer:li,position:bn,visible:sn}),ut&&(0,q.jsx)(Bo,{creationOnly:!0,directory:ut.directory,menu:{x:ut.x,y:ut.y,paths:[],background:!0},onClose:()=>dt(null),onCreateFile:e=>void Br(e),onCreateFolder:e=>void Br(null,e),shortcuts:H}),U&&(0,q.jsx)(Bo,{allowCompression:!0,directory:yx(U.path)??U.path,menu:{x:U.x,y:U.y,paths:[U.path]},onAddToTray:e=>void qr(e),onAddFavorite:e=>void Yr(e),onRemoveFavorite:e=>void Xr(e),favoritePaths:Ie,onExtractArchive:(e,t)=>void Ji(e,t),onArchiveCreated:e=>{e&&gr(yx(U.path)??U.path)},onClose:()=>mt(null),onCompressTo:(e,t)=>_t({paths:e,name:t}),onCopy:(e,t)=>void gt(e,t),onDelete:e=>void Ct(e,!1).then(()=>gr(yx(U.path)??U.path)),onOpen:(e,t)=>t?hr(e):void fr(G.id,e),onOpenFile:e=>void Se(e),onPaste:e=>void St(e).then(t=>{t.ok&&gr(e)}),onRefresh:()=>gr(U.path),shortcuts:H,target:{path:U.path,isDirectory:!0}}),ht&&(0,q.jsx)(ns,{initialDirectory:yx(U?.path??Cn)??Cn,initialName:ht.name,onCancel:()=>_t(null),onCompress:async e=>{let t=await Vt(ht.paths,e);return!t.ok&&t.error&&Qa(t.error),t.ok}}),ft&&(0,q.jsx)(Oo,{items:[{label:e(`extract_here`),onSelect:()=>void Yi(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Yi(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Yi(`auto`)}],onClose:()=>pt(null),x:ft.x,y:ft.y}),hn&&(0,q.jsx)(Fd,{action:hn.prompt.action,delaySeconds:hn.prompt.delaySeconds,hits:hn.prompt.hits,onCancel:()=>{hn.resolve(!1),vn(null)},onConfirm:()=>{hn.resolve(!0),vn(null)},permanent:hn.prompt.permanent},hn.id),(0,q.jsx)($d,{}),(0,q.jsx)(sf,{}),s&&(0,q.jsx)(Xb,{code:s.code,deviceName:s.deviceName,onAccept:()=>{rl(s.requestId,!0),c(null)},onReject:()=>{rl(s.requestId,!1),c(null)}}),(0,q.jsx)(Wb,{}),(0,q.jsx)(k,{})]})})}var wx=v.div`
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
`,Tx=v.div`
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
`,Ex=v.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Dx=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Co}
`,Ox=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,kx=Tm,Ax=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,jx=v.span`
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
`,Mx=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Nx=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Px=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?Eo:``}
`,Fx=v.div`
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
        ${Do}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Ix=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Lx=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Rx=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,zx=v.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,Bx=v.button`
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
`,Vx=v.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,Hx=v.span`
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
`,Ux=v.footer`
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
`;function Wx({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:s,showImages:c,save:u=!1,initialName:d=``,defaultExtension:f=``,theme:p,onCancel:m,onSelect:h}){let g=o(),_=El(`picker`),v=t===`file`,y=r??[],[S,C]=(0,z.useState)(e),[w,T]=(0,z.useState)(null),[ee,D]=(0,z.useState)(!0),[O,k]=(0,z.useState)(null),[A,j]=(0,z.useState)(()=>new Set),[M,te]=(0,z.useState)(a??[]),[ne,N]=(0,z.useState)([]),[re,ie]=(0,z.useState)([]),[ae,P]=(0,z.useState)([]),[oe,F]=(0,z.useState)([]),[se,I]=(0,z.useState)(d),[L,ce]=(0,z.useState)(null),[le,ue]=(0,z.useState)(y.length===0),[de,fe]=(0,z.useState)(`files`),[pe,me]=(0,z.useState)(0),[he,R]=(0,z.useState)(On),[ge,B]=(0,z.useState)(0),[_e,ve]=(0,z.useState)(0),[xe,Se]=(0,z.useState)(0),[we,Te]=(0,z.useState)(null),[Ee,De]=(0,z.useState)(null),[Oe,ke]=(0,z.useState)(0),[Ae,Ne]=(0,z.useState)(null),[V,Pe]=(0,z.useState)(be.imageStripHeight);(0,z.useEffect)(()=>{Xe().then(Ne,()=>Ne(null))},[]),(0,z.useEffect)(()=>{a?te(a):je().then(te,()=>te([]))},[a]),(0,z.useEffect)(()=>{Me().then(N,()=>N([])),Be().then(ie,()=>ie([]))},[]),(0,z.useEffect)(()=>{let e=!0;return D(!0),k(null),j(new Set),u||I(v?``:x(S)),Ce(S||void 0,!1).then(t=>{e&&(T(t),C(t.path),u||I(v?``:x(t.path)),D(!1))},t=>{e&&(k(t instanceof Error?t.message:String(t)),D(!1))}),()=>{e=!1}},[S,pe,v]),(0,z.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),R(e=>({...e,open:!0})),B(e=>e+1);return}if(e.key===`Escape`){he.open?(R(e=>({...e,open:!1,query:``})),ve(0)):m();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Ie();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Le();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),R(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),B(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Qe()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,z.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Ie()):(e.button===4||e.button===9)&&(e.preventDefault(),Le())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Fe=e=>{let t=e.trim();t.length!==0&&E(t)!==E(S)&&(P(e=>[...e,S]),F([]),fe(`files`),C(t))},Ie=()=>{let e=ae.at(-1);e!==void 0&&(P(e=>e.slice(0,-1)),F(e=>[S,...e]),C(e))},Le=()=>{let e=oe[0];e!==void 0&&(F(e=>e.slice(1)),P(e=>[...e,S]),C(e))};(0,z.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Ie();break;case`forward`:Le()}})});let Re=w?.path??S,H=w?.parent??(S?b(S):null);(0,z.useEffect)(()=>{l.available&&Re&&l.send({type:`fs.watch`,payload:{paths:[Re],owner:`picker`}})},[Re]),(0,z.useEffect)(()=>{if(l.available&&Re)return l.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&E(t.data.path)===E(Re)&&Ce(Re,!1).then(e=>{T(e);let t=new Set(e.entries.map(e=>e.fullPath));j(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Re]);let ze=(w?.entries??[]).filter(e=>e.isDirectory||v&&(le||y.length===0||y.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Ve=w?{...w,entries:ze}:null,He=he.open&&he.query.length>0,Ue=(0,z.useMemo)(()=>He?ze.filter(e=>Ln(e.name,he)).map(e=>e.fullPath):[],[He,ze,he]);(0,z.useEffect)(()=>{ve(0)},[he.query,he.matchCase,he.regex,w?.path]);let We=Ue.length===0?-1:Math.min(_e,Ue.length-1),Ge=(0,z.useMemo)(()=>({...he,currentPath:We>=0?Ue[We]:null}),[he,We,Ue]),Ke=Ae?.defaultView??be,qe=s??{mode:Ke.mode,iconSize:Ke.iconSize,gridSize:Ke.gridSize,sort:`name`,sortDescending:!1,columns:Ke.columns??[`type`,`size`,`modified`]},Je=(c??Ke.showImages)&&qe.mode===`list`,Ye=se.trim(),Ze=Ye.length>0?Kx(Ye)?Ye:Gx(Re,Ye):null,Qe=()=>{if(ee||O)return;if(u){let e=Ye;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){Qa(g(`the_file_name_is_not_valid`));return}let t=f.length>0&&!/\.[^.]*$/.test(e)?f.startsWith(`.`)?f:`.${f}`:``,n=Kx(e)?e+t:Gx(Re,e+t);xt([n]).then(e=>e[0]?.exists?ce(n):h([n]),()=>h([n]));return}let e=n?[...A]:[...A].slice(0,1);e.length>0?h(e):Ze!==null&&Ye!==x(Re)?h([Ze]):!v&&Re&&h([Re])},$e=(0,z.useCallback)(e=>{j(new Set(e)),e.length===1?I(x(e[0])):u||I(e.length===0&&!v?x(Re):``)},[Re,v,u]),et=e=>{w?.entries.find(t=>t.fullPath===e)?.isDirectory?Fe(e):u?I(x(e)):v&&h([e])},tt=e=>I(e),nt=async e=>{let t=we;if(Te(null),!t||!Re)return;let n=e===null?await Tt(Re):await kt(Re,e);n.ok&&n.path!==null&&(R(e=>({...e,open:!1,query:``})),e!==null&&ue(!0),me(e=>e+1),window.setTimeout(()=>{De(n.path),ke(e=>e+1)},120))},rt=()=>{R(e=>({...e,open:!0})),B(e=>e+1)},it=e=>{ve(t=>Ue.length===0?0:(t+e+Ue.length)%Ue.length)},at=e=>(0,q.jsxs)(nS,{children:[(0,q.jsxs)(rS,{children:[(0,q.jsx)(iS,{children:g(v||u?`file_name`:`folder_3`)}),(0,q.jsx)(aS,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Qe())},spellCheck:!1,value:se}),v&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(iS,{children:g(`files_of_type`)}),(0,q.jsx)(Uo,{onChange:e=>ue(e===`all`),options:[...y.length>0?[{value:`supported`,label:`${g(`supported_files`)} (${y.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${g(`all_files`)} (*.*)`}],value:le?`all`:`supported`})]})]}),(0,q.jsxs)(oS,{children:[(0,q.jsx)(sS,{onClick:m,type:`button`,children:g(`cancel`)}),(0,q.jsxs)(sS,{$primary:!0,disabled:ee||O!==null||(u||v&&A.size===0)&&Ye.length===0,onClick:Qe,type:`button`,children:[(0,q.jsx)(Wi,{size:12}),g(u?`save_as`:v?`select_this_file`:`select_this_folder`)]})]}),(0,q.jsx)(hs,{confirmLabel:g(`overwrite`),message:g(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>ce(null),onConfirm:()=>{let e=L;ce(null),e&&h([e])},open:L!==null,title:g(`overwrite`)})]}),ot=(0,q.jsxs)(Jx,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,q.jsxs)(Yx,{children:[(0,q.jsxs)(Xx,{children:[(0,q.jsx)(Di,{size:16}),g(u?`save_as`:v?`choose_a_file`:`choose_a_folder`)]}),(0,q.jsx)(Zx,{onClick:m,title:g(`cancel`),type:`button`,children:(0,q.jsx)(Gi,{size:12})})]}),(0,q.jsxs)(Qx,{children:[(0,q.jsx)(Nv,{activeKind:de===`overview`?`home`:de===`gallery`?`gallery`:`files`,currentPath:Re,drives:ne,hiddenViews:v?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:M.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Fe(e),onOpenView:e=>{e===`home`?(j(new Set),I(v?``:x(Re)),fe(`overview`)):e===`gallery`&&v&&(j(new Set),I(``),fe(`gallery`))},places:M,recent:re,recentLimit:10}),(0,q.jsx)($x,{children:de===`overview`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)($p,{drives:ne,theme:p,historyVersion:0,homePath:M.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Fe(e),onPick:v?e=>h([e]):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:$e,places:M,readOnly:!0,recent:re,recentLimit:10,visibilityVersion:0}),at(I)]}):de===`gallery`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(wv,{onPick:e=>h([e]),onSelectionChange:$e,showCheckboxes:Ae?.showCheckboxes??!0,view:{...ye,columns:[]}}),at(I)]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(eS,{children:[(0,q.jsx)(tS,{disabled:ae.length===0,onClick:Ie,title:g(`back`),type:`button`,children:(0,q.jsx)(Pi,{})}),(0,q.jsx)(tS,{disabled:oe.length===0,onClick:Le,title:g(`forward`),type:`button`,children:(0,q.jsx)(Fi,{})}),(0,q.jsx)(tS,{disabled:!H,onClick:()=>H&&Fe(H),title:g(`up_one_level`),type:`button`,children:(0,q.jsx)(ji,{})}),(0,q.jsx)(lm,{onNavigate:Fe,path:Re}),(0,q.jsx)(tS,{onClick:e=>Te({x:e.clientX,y:e.clientY}),title:g(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ni,{})}),(0,q.jsx)(tS,{onClick:rt,title:g(`search`),type:`button`,children:(0,q.jsx)(Ai,{})}),_.available&&(0,q.jsx)(tS,{onClick:e=>_.open(e.clientX,e.clientY),title:g(`selection_menu`),type:`button`,children:(0,q.jsx)(La,{})})]}),he.open&&(0,q.jsx)(_f,{current:We,focusToken:ge,matchCase:he.matchCase,mode:he.mode,onClose:()=>{R(e=>({...e,open:!1,query:``})),ve(0)},onMatchCase:()=>R(e=>({...e,matchCase:!e.matchCase})),onMode:()=>R(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>it(1),onPrevious:()=>it(-1),onQuery:e=>R(t=>({...t,query:e})),onRegex:()=>R(e=>({...e,regex:!e.regex})),query:he.query,regex:he.regex,total:Ue.length,onSelectMatches:()=>Se(e=>e+1)}),(0,q.jsx)(Bl,{allowBackgroundMenu:!0,confirmDelete:Ae?.confirmDelete??!1,enableShortcuts:!0,error:O,find:Ge,selectMatchesToken:xe,imageStripHeight:V,loading:ee,listing:Ve,onImageStripHeight:Pe,onOpen:et,onOpenFile:et,onRefresh:()=>me(e=>e+1),onSelectionChange:$e,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:Ae?.openOnSingleClick??!1,refreshToken:pe,pendingRename:Ee,pendingRenameToken:Oe,showCheckboxes:Ae?.showCheckboxes??!0,showDetails:!1,showImages:Je,singleSelect:!n,view:qe}),at(tt)]})})]}),we&&(0,q.jsx)(Bo,{creationOnly:!0,directory:Re,menu:{x:we.x,y:we.y,paths:[],background:!0},onClose:()=>Te(null),onCreateFile:v?e=>void nt(e):void 0,onCreateFolder:()=>void nt(null),shortcuts:Wt})]});return i?ot:(0,uo.createPortal)((0,q.jsx)(qx,{onPointerDown:e=>{e.target===e.currentTarget&&m()},children:ot}),document.body)}function Gx(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Kx(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var qx=v.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Eo}
`,Jx=v.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:fo}
    ${({$inline:e})=>e?``:xo}
`,Yx=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Xx=v.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Zx=v.button`
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
`,Qx=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,$x=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,eS=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,tS=v.button`
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
`,nS=v.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,rS=v.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,iS=v.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,aS=v.input`
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
`,oS=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,sS=v.button`
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
`;function cS({mode:e,save:t=!1,multiple:n,extensions:i,initial:a,initialName:s=``,defaultExtension:c=``}){let d=o(),p=u(),[m,h]=(0,z.useState)(null),_=f(g(m?.themeMode)),[v,y]=(0,z.useState)({}),[b,x]=(0,z.useState)(null),[S,C]=(0,z.useState)(null),[w,T]=(0,z.useState)(null),E=(0,z.useRef)(0);(0,z.useEffect)(()=>{l.send({type:`app.ready`})},[]),(0,z.useEffect)(()=>(_e(e=>new Promise(t=>{T({id:++E.current,prompt:e,resolve:t})})),()=>_e(null)),[]),(0,z.useEffect)(()=>{Xe().then(h,()=>void 0)},[]),(0,z.useEffect)(()=>{r(m?.accentColor,m?.secondaryColor,_)},[m?.accentColor,m?.secondaryColor,_]);let ee=m?.defaultView??be,D={mode:v.mode??ee.mode,iconSize:v.iconSize??ee.iconSize,gridSize:v.gridSize??ee.gridSize,sort:`name`,sortDescending:!1,columns:b??ee.columns??[`type`,`size`,`modified`]},O=e=>y(t=>({...t,...e}));return(0,q.jsxs)(lS,{children:[(0,q.jsxs)(uS,{children:[(0,q.jsx)(dS,{children:(0,q.jsx)(Ji,{size:17})}),(0,q.jsx)(fS,{...p,children:d(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,q.jsx)(sb,{onChange:O,onColumns:x,onShowImages:C,showImages:S??ee.showImages,view:D}),(0,q.jsx)(pS,{children:(0,q.jsx)(mS,{onClick:()=>l.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:d(`cancel`),type:`button`,children:(0,q.jsx)(Gi,{size:12})})})]}),(0,q.jsx)(hS,{children:(0,q.jsx)(Wx,{extensions:i,initial:a,initialName:s,defaultExtension:c,inline:!0,mode:e,multiple:n,onCancel:()=>l.send({type:`pick.cancel`}),onSelect:e=>l.send({type:`pick.submit`,payload:{paths:e}}),save:t,showImages:S??ee.showImages,fileView:D,theme:_})}),w&&(0,q.jsx)(Fd,{action:w.prompt.action,delaySeconds:w.prompt.delaySeconds,hits:w.prompt.hits,onCancel:()=>{w.resolve(!1),T(null)},onConfirm:()=>{w.resolve(!0),T(null)},permanent:w.prompt.permanent},w.id),(0,q.jsx)($d,{}),(0,q.jsx)(k,{})]})}var lS=v.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,uS=v.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,dS=v.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,fS=v.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,pS=v.div`
    display: flex;
    flex-shrink: 0;
`,mS=v.button`
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
`,hS=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;document.documentElement.dataset.theme=i()?`dark`:`light`;var gS=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,gS),window.addEventListener(`pagehide`,tr);var _S=document.getElementById(`root`),vS=new URLSearchParams(window.location.search),yS=vS.get(`picker`),bS=vS.get(`filter`)??``;_S&&(Zn(),(0,ge.createRoot)(_S).render((0,q.jsx)(z.StrictMode,{children:(0,q.jsx)(d,{children:yS===`folder`||yS===`file`||yS===`save`?(0,q.jsx)(cS,{defaultExtension:vS.get(`ext`)??``,extensions:bS?bS.split(`;`).filter(Boolean):[],initial:vS.get(`initial`)??``,initialName:vS.get(`name`)??``,mode:yS===`folder`?`folder`:`file`,multiple:vS.get(`multiple`)===`1`,save:yS===`save`}):(0,q.jsx)(Cx,{})})})));