import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{A as t,B as n,C as r,D as i,E as a,F as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,R as m,S as h,T as g,U as ee,V as _,W as v,_ as y,a as b,b as x,c as S,d as C,f as w,g as te,h as ne,i as T,j as E,k as re,l as D,m as O,n as k,o as ie,p as A,r as j,s as ae,u as M,v as oe,w as se,x as N,y as P}from"./format-CiOmuWrf.js";async function ce(){return l.available?await l.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function F(e){l.available?await l.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function I(){l.available&&await R(`update.openLogs`)}async function le(e){l.available?await R(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function ue(){return l.available?await l.request(`update.status`)??null:null}async function de(){return l.available?await l.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function fe(){return l.available?await l.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function pe(){await R(`update.cancel`)}async function me(){return l.available?await l.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function he(e){return l.on(t=>{t.type===`update.progress`&&e(t.data)})}function L(e){return l.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function R(e,t,n=3e4){let r=await l.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var z=e(v(),1),ge=s(),B=null;function _e(e){B=e}function ve(e){return B?B(e):Promise.resolve(!1)}var ye={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},be={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function xe(e,t){return l.available?await l.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Se(e){return l.available?(await l.request(`fs.open`,{path:e})).ok:!1}async function Ce(e,t=!0,n=!1,r=0,i){return await l.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function we(e,t,n=0,r){let i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await ve({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function Te(e,t=0,n){return await l.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function Ee(e){l.available&&e.length!==0&&await l.request(`fs.archive.release`,{paths:e})}async function De(e){return l.available?await l.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function Oe(e,t){return l.available?(await l.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function ke(e,t,n,r){return l.available?(await l.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function V(e,t=!1){return l.available?await l.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Ae(){return(await l.request(`fs.places`)).places}async function je(){return(await l.request(`fs.drives`)).drives}async function Me(e=!1){return(await l.request(`fs.recycle`,{includeOrphans:e})).entries}async function H(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await ve({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await l.request(e,{...t,confirm:r.token})}return r}async function Ne(e=!1){let t=await l.request(`fs.recycle.empty`,{includeOrphans:e});await H(`fs.recycle.empty`,{includeOrphans:e},t)}async function Pe(e){return!l.available||e.length===0?{ok:!1,done:0}:await l.request(`fs.recycle.restoreMany`,{ids:e})}async function Fe(e){if(!l.available||e.length===0)return{ok:!1,done:0};let t=await l.request(`fs.recycle.deleteMany`,{ids:e}),n=await H(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Ie(e){l.available&&e&&await l.request(`fs.recycle.properties`,{id:e})}async function Le(){if(!l.available)return{entries:[],cancelled:!0,failed:!1};let e=await l.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function U(){return l.available?(await l.request(`fs.recycle.admin.purge`)).ok:!1}async function Re(e=0,t=150,n=!1){return l.available?await l.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function ze(){return l.available?(await l.request(`fs.recent`)).entries:[]}async function Be(){return l.available?(await l.request(`fs.frequent`)).entries:[]}async function Ve(e){l.available&&await l.request(`fs.frequent.record`,{path:e})}async function He(){await l.request(`fs.recent.clear`)}async function Ue(){await l.request(`fs.frequent.clear`)}async function We(){return await l.request(`fs.visibility`)}async function Ge(){return await l.request(`fs.hidden.toggle`)}async function Ke(e){return await l.request(`fs.hidden.set`,{show:e})}async function qe(){return l.available?await l.request(`fs.index.tasks`):{count:0,directories:[]}}var Je={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showHidden:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,themeMode:`system`,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[],conflictNameStyle:`space_parentheses`,shareAccessEnabled:!0,shareApprovalMinutes:60,shareDenialSeconds:10};async function Ye(){if(!l.available)return Je;let e=await l.request(`settings.get`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showHidden:e?.showHidden??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,themeMode:g(e?.themeMode),backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[],conflictNameStyle:e?.conflictNameStyle??`space_parentheses`,shareAccessEnabled:e?.shareAccessEnabled??!0,shareApprovalMinutes:e?.shareApprovalMinutes??60,shareDenialSeconds:e?.shareDenialSeconds??10}}async function Xe(){return l.available?(await l.request(`app.protection.defaults`)).paths??[]:[]}var Ze={registered:!1,pathMatches:!1,registeredPath:null},Qe={registered:!1,pathMatches:!1,registeredPath:null};async function $e(){return l.available?await l.request(`app.defaultManager.status`):Qe}async function et(e){return l.available?await l.request(`app.defaultManager.set`,{enabled:e}):Qe}async function tt(){return l.available?await l.request(`app.archive.status`):Ze}async function nt(){return l.available?await l.request(`app.archive.register`):Ze}async function rt(){return l.available?await l.request(`app.archive.unregister`):Ze}async function it(e){if(!l.available)return e;let t=await l.request(`settings.save`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showHidden:t?.showHidden??e.showHidden,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,themeMode:g(t?.themeMode??e.themeMode),backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites,conflictNameStyle:t?.conflictNameStyle??e.conflictNameStyle,shareAccessEnabled:t?.shareAccessEnabled??e.shareAccessEnabled,shareApprovalMinutes:t?.shareApprovalMinutes??e.shareApprovalMinutes,shareDenialSeconds:t?.shareDenialSeconds??e.shareDenialSeconds}}async function at(e,t){l.available&&await l.request(`app.tabs.set`,{tabs:e,active:t})}async function ot(e,t,n){return l.available?(await l.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var st={managed:0,private:0,workingSet:0,available:0};async function ct(){return l.available?await l.request(`app.memory`):st}async function lt(){return l.available?await l.request(`app.memory.trim`):st}var ut={registered:!1,pathMatches:!1,registeredPath:null};async function dt(){return l.available?await l.request(`app.scheme`):ut}async function ft(e){return l.available?await l.request(`app.scheme.set`,{enabled:e}):ut}var pt={supported:!1,mode:`none`,active:!1,error:null};async function mt(){return l.available?await l.request(`app.startup`):pt}async function ht(e){return l.available?await l.request(`app.startup.set`,{mode:e}):pt}async function gt(e,t=!1){return!l.available||e.length===0?!1:(await l.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function _t(){return l.available?(await l.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function vt(){return l.available?await l.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function yt(e,t,n){return!l.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await bt({action:n?`move`:`write`},r=>l.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:r}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function bt(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await ve({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function W(e){return!l.available||e.length===0?[]:(await l.request(`fs.paths.info`,{paths:e})).entries}async function xt(e,t=!1){return l.available?await bt({action:t?`move`:`write`},t=>l.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function St(e,t=!1){if(!l.available||e.length===0)return{ok:!1,error:null};let n=await l.request(`fs.operation.delete`,{paths:e,permanent:t}),r=!1;for(let i=0;i<2&&n.required&&n.token&&n.protected?.length;i++){if(!await ve({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){r=!0;break}n=await l.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return r?{...n,ok:!1,cancelled:!0}:n}async function Ct(e,t){return l.available?await bt({action:`rename`},n=>l.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function wt(e,t=!1){return l.available?await l.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Tt(e){return l.available?(await l.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Et(e,t){return l.available?await l.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function Dt(e,t,n){return l.available?await l.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function Ot(e,t){return l.available?await l.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function kt(e){l.available&&e.length!==0&&await l.request(`fs.operation.properties`,{paths:e})}async function At(e){return!l.available||e.length===0?{ok:!1,error:null}:await l.request(`fs.share`,{paths:e})}async function jt(e){l.available&&await l.request(`fs.operation.openWith`,{path:e})}async function Mt(e){l.available&&await l.request(`fs.operation.terminal`,{path:e})}async function Nt(e){return l.available?await l.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function Pt(e,t){return l.available?(await l.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Ft(){return l.available?await l.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function It(){return l.available?await l.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Lt(e){l.available&&await l.request(`fs.operation.showInExplorer`,{path:e})}async function Rt(e){return!l.available||e.length===0?{verbs:[],safe:!0}:await l.request(`shell.verbs`,{paths:e})}async function zt(e,t,n,r){l.available&&e.length!==0&&await l.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Bt(e,t){return!l.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await l.request(`fs.operation.compress`,{...t,paths:e})}async function Vt(){return l.available?(await l.request(`app.tasks`)).tasks:[]}async function Ht(){l.available&&await l.request(`app.tasks.clear`)}var Ut={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Wt=Ut.openInNewTab;function Gt(e){Wt=e.trim()||Ut.openInNewTab}function Kt(e){let t=Wt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function qt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Jt(e){return e.split(`+`).filter(Boolean).map(e=>Yt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Yt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Xt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Zt=new Map;function Qt(e){return te(w(e)?T(e):e)}function $t(e){return Zt.get(Qt(e))}function en(e,t){Zt.set(Qt(e),t)}function tn(e){Zt.delete(Qt(e))}function nn(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var rn=new Map,an=new Map,on=new Set,sn=0;function cn(){rn.clear(),an.clear(),sn+=1,on.forEach(e=>e())}function ln(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...rn.keys()])e.toLowerCase().includes(t)&&(rn.delete(e),n=!0);n&&(sn+=1,on.forEach(e=>e()))}function un(){let[e,t]=(0,z.useState)(sn);return(0,z.useEffect)(()=>{let e=()=>t(sn);return on.add(e),()=>{on.delete(e)}},[]),e}var dn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function fn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return dn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function pn(e,t,n=!1){let r=un(),i=e===null?``:fn(e,t,n),[a,o]=(0,z.useState)(()=>rn.get(i)??null);return(0,z.useEffect)(()=>{if(e===null){o(null);return}if(!l.available)return;if(rn.has(i)){o(rn.get(i)??null);return}let r=!0;return l.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?rn.set(i,e.dataUrl):rn.delete(i),r&&o(e.dataUrl)},()=>{rn.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function mn(e){let[t,n]=(0,z.useState)(e);return(0,z.useEffect)(()=>{if(!e){n(null);return}if(!w(e)){n(e);return}let t=!0;return Te(e,0,$t(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function G(e){let t=un(),[n,r]=(0,z.useState)(()=>e?an.get(e)??null:null);return(0,z.useEffect)(()=>{if(!e||!l.available){r(null);return}if(an.has(e)){r(an.get(e)??null);return}let t=!0;return l.request(`fs.iconFile`,{path:e}).then(n=>{an.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{an.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var hn=null,gn=null;function _n(){return hn===null?l.available?(gn??=l.request(`app.thumbnails`).then(e=>(hn=e.base??``,hn),()=>(hn=``,``)),gn):Promise.resolve(``):Promise.resolve(hn)}function K(e,t=128,n=0){let[r,i]=(0,z.useState)(hn);return(0,z.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return _n().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${q}`}var q=2;function vn(e,t=0,n=``){let[r,i]=(0,z.useState)(hn);if((0,z.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return _n().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function yn(e,t=0){let[n,r]=(0,z.useState)(hn);return(0,z.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return _n().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var bn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},xn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Sn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=Tn(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=On(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var Cn=`\0`,wn=``;function Tn(e){return e.query!==Cn&&(Cn=e.query,wn=e.query.toLowerCase()),wn}var En=`\0`,Dn=null;function On(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===En)return Dn;En=t;try{Dn=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{Dn=null}return Dn}function kn(e,t){return Sn(e,t)!==null}var An=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],jn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Mn(e){let t=Pn(e);for(let{kind:e}of An)if(jn[e].has(t))return e;return null}function Nn(e){return Mn(e)!==null}function Pn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Fn=(0,z.createContext)({places:{},useIcons:!1}),In=Fn.Provider;function Ln(){return(0,z.useContext)(Fn)}function Rn(e,t){return e.places[te(t)]}function zn(e,t,n){return Rn(e,t)?.name||n}var Bn=new Map,Vn=new Map,Hn=0;function Un(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&Bn.set(e,t)}catch{}}function Wn(e){return l.available?Bn.get(e)??null:localStorage.getItem(e)}function Gn(e,t){l.available?(Bn.set(e,t),Vn.set(e,t),window.clearTimeout(Hn),Hn=window.setTimeout(Kn,200)):localStorage.setItem(e,t)}function Kn(){if(Hn=0,Vn.size===0)return;let e=Object.fromEntries(Vn);Vn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function qn(){if(Vn.size===0)return;let e=Object.fromEntries(Vn);Vn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Jn(e,t){let n=Wn(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function Yn(e,t){Gn(e,String(t))}function Xn(e){try{return JSON.parse(Wn(e)??`null`)}catch{return null}}function Zn(e,t){Gn(e,JSON.stringify(t))}var J=c(),Qn=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,J.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,J.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),$n=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),er=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M14 3v4h4`})]}),tr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,J.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,J.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),nr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,J.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),rr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 19V5`}),(0,J.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),ir=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,J.jsx)(`path`,{d:`M20 4v7h-7`})]}),ar=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 5v14`}),(0,J.jsx)(`path`,{d:`M5 12h14`})]}),or=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M19 12H5`}),(0,J.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),sr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M5 12h14`}),(0,J.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),cr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,J.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),lr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,J.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),ur=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,J.jsx)(`path`,{d:`M12 12v8`})]}),dr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,J.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),fr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,J.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),pr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,J.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),mr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),hr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 7h16`}),(0,J.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,J.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,J.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),gr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),_r=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),vr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,J.jsxs)(`defs`,{children:[(0,J.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,J.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,J.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,J.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,J.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,J.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,J.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,J.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,J.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,J.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),yr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),br=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,J.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,J.jsx)(`path`,{d:`m13 5-2 14`})]}),xr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,J.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,J.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Sr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,J.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Cr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,J.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,J.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),wr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Tr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Er=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Dr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,J.jsx)(`path`,{d:`M8.5 14h7`})]}),Or=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,J.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,J.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),kr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),Ar=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),jr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,J.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Mr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,J.jsx)(`path`,{d:`M15 3v4h4`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Nr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,J.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Pr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,J.jsx)(`path`,{d:`m14 6 4 4`})]}),Fr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,J.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Ir=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,J.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Lr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 4v10`}),(0,J.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,J.jsx)(`path`,{d:`M4.5 19.5h15`})]}),Rr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,J.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,J.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),zr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,J.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,J.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Br=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,J.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Vr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Hr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,J.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Ur=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,J.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,J.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Wr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Gr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,J.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,J.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,J.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),Kr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,J.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),qr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,J.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Jr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,J.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,J.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Yr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,J.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Xr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,J.jsx)(`path`,{d:`M3.5 12h17`}),(0,J.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Zr=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),Qr=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,J.jsx)(`path`,{d:`M8.5 10.5h7`})]}),$r=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,J.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,J.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),ei=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,J.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),ti=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,J.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,J.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),ni=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,J.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),ri=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 16V4`}),(0,J.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,J.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),ii=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),ai=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,J.jsx)(`path`,{d:`M12 4v16`})]}),oi=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,J.jsx)(`path`,{d:`M15 4v16`})]}),si=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,J.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,J.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,J.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),ci=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,J.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,J.jsx)(`path`,{d:`M12 14v2`})]}),li=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,J.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),ui=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,J.jsx)(`circle`,{cx:12,cy:12,r:3})]}),di=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,J.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,J.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,J.jsx)(`path`,{d:`m3 3 18 18`})]}),fi=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.83-.44-1.12-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h1.99c3.05 0 5.56-2.5 5.56-5.55C21.97 6.01 17.46 2 12 2z`}),(0,J.jsx)(`path`,{d:`M13.5 6.5h.01M17.5 10.5h.01M8.5 7.5h.01M6.5 12.5h.01`})]}),pi=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M20.5 13.3 11.2 4H4v7.2l9.3 9.3a1.4 1.4 0 0 0 2 0l5.2-5.2a1.4 1.4 0 0 0 0-2z`}),(0,J.jsx)(`path`,{d:`M8.2 8.2h.01`})]}),mi=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:2.5,y:5.5,width:19,height:13,rx:2.2}),(0,J.jsx)(`path`,{d:`M6.5 9.5h.01M10 9.5h.01M13.5 9.5h.01M17 9.5h.01M6.5 13h.01M17 13h.01M9 13.5h6`})]}),hi=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`rect`,{x:3.5,y:3.5,width:17,height:17,rx:4.5}),(0,J.jsx)(`path`,{d:`m12 7.2 1.5 3.3 3.3 1.5-3.3 1.5-1.5 3.3-1.5-3.3L7.2 12l3.3-1.5z`})]}),gi=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 7h16`}),(0,J.jsx)(`path`,{d:`M9.5 7V5.2c0-.7.5-1.2 1.2-1.2h2.6c.7 0 1.2.5 1.2 1.2V7`}),(0,J.jsx)(`path`,{d:`m6.6 7 .9 12a1.6 1.6 0 0 0 1.6 1.5h5.8a1.6 1.6 0 0 0 1.6-1.5l.9-12`}),(0,J.jsx)(`path`,{d:`m10.2 11.2 3.6 3.6M13.8 11.2l-3.6 3.6`})]}),_i=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M8.5 20.5H20.5`}),(0,J.jsx)(`path`,{d:`m14.2 4.1 5.7 5.7a1.5 1.5 0 0 1 0 2.1l-6.3 6.3a1.5 1.5 0 0 1-2.1 0l-5.7-5.7a1.5 1.5 0 0 1 0-2.1l6.3-6.3a1.5 1.5 0 0 1 2.1 0z`}),(0,J.jsx)(`path`,{d:`m9.9 7.8 6.6 6.6`})]});function Y(e,t){return({size:n=t,...r})=>(0,J.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var vi=Y(Qn,18),yi=Y($n,18),bi=Y(er,18),xi=Y(tr,18),Si=Y(nr,16),Ci=Y(rr,16),wi=Y(ir,16),Ti=Y(ar,16),Ei=Y(or,16),Di=Y(sr,16),Oi=Y(cr,12),ki=Y(lr,18),Ai=Y(ur,14),ji=Y(dr,14),Mi=Y(fr,14),Ni=Y(pr,18),Pi=Y(mr,18),Fi=Y(hr,18),Ii=Y(gr,14),Li=Y(_r,14),Ri=Y(ui,14),zi=Y(di,14),Bi=Y(vr,18),Vi=Y(yr,18),Hi=Y(br,18),Ui=Y(xr,18),Wi=Y(Sr,18),Gi=Y(Cr,18),Ki=Y(wr,18),qi=Y(Tr,18),Ji=Y(Er,18),Yi=Y(Dr,18),Xi=Y(Or,18),Zi=Y(kr,18),Qi=Y(Ar,18),$i=Y(jr,18),ea=Y(Mr,18),ta=Y(Nr,18),na=Y(Pr,16),ra=Y(Fr,18),ia=Y(Ir,18),aa=Y(Lr,18),oa=Y(Rr,18),sa=Y(zr,18),ca=Y(Br,18),la=Y(Vr,18),ua=Y(Hr,18),da=Y(Ur,18),fa=Y(Wr,18),pa=Y(Gr,18),ma=Y(Kr,18),ha=Y(qr,18),ga=Y(Jr,18),_a=Y(Yr,18),va=Y(Xr,18),ya=Y(Zr,18),ba=Y(Qr,14),xa=Y($r,14),Sa=Y(ei,16),Ca=Y(ti,16),wa=Y(ni,16),Ta=Y(ri,16),Ea=Y(ii,16),Da=Y(ai,16),Oa=Y(oi,16),ka=Y(si,16),Aa=Y(ci,14),ja=Y(fi,18),Ma=Y(pi,18),Na=Y(mi,18),Pa=Y(hi,18),Fa=Y(gi,18),Ia=Y(_i,18),La=Y(li,14);async function Ra(e,t,n){return l.available?(await l.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function za(e){return Ra(`folder`,[],e??``)}function Ba(e){return Ra(`file`,e??[],``)}var Va=null,Ha=null;function Ua(e){Va=e}function Wa(e){return Va?Va(e):Promise.resolve()}function Ga(e){Ha=e}function Ka(e,t=!1){return Ha?Ha(e,t):Promise.resolve(null)}var qa=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],Ja=null,Ya=0,Xa=new Set;function Za(){Ya+=1;for(let e of Xa)e()}function Qa(e){return Xa.add(e),()=>Xa.delete(e)}function $a(){return Ya}function eo(e){Ja=e,Za()}function to(){return(0,z.useSyncExternalStore)(Qa,$a,$a),Ja}var no=ee(),ro=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,io=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,ao=m`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,oo=m`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,so=m`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,co=m`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,lo=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,uo=m`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,fo=m`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,po=n`animation: ${io} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,mo=n`animation: ${ao} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,ho=n`animation: ${oo} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${so} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var go=n`animation: ${co} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,_o=n`animation: ${lo} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,vo=n`animation: ${uo} 140ms ease-out;`,yo=n`animation: ${fo} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function bo({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,z.useState)([]),s=(0,z.useRef)(void 0);if((0,z.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,z.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,J.jsx)(Ao,{},`group-rule-${i}`)),n.push((0,J.jsx)(ko,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,J.jsx)(Ao,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,J.jsxs)(Eo,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,J.jsx)(Do,{children:e.loading?(0,J.jsx)(jo,{}):e.icon}),(0,J.jsx)(Oo,{children:e.label}),a?(0,J.jsx)(Oi,{size:12}):e.checked&&(0,J.jsx)(Ii,{size:12})]},`${e.label}-${i}`))}),n};return(0,no.createPortal)((0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(xo,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(So,{children:r.map((e,t)=>(0,J.jsxs)(Co,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,J.jsx)(wo,{children:e.icon}),(0,J.jsx)(To,{children:e.label})]},`${e.label}-${t}`))}),(0,J.jsx)(Ao,{})]}),m(n,0)]}),a.map((e,t)=>(0,J.jsx)(xo,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var xo=_.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${ro}
    ${mo}
    transform-origin: top left;
`,So=_.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,Co=_.button`
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
`,wo=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,To=_.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Eo=_.button`
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
`,Do=_.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,Oo=_.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ko=_.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Ao=_.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,jo=_.span`
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
`;function Mo({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:s,onOpenFile:c,onRename:l,onDelete:u,onCopy:d,onPaste:f,onCreateFolder:p,onCreateFile:m,creationOnly:h=!1,onRefresh:g,onAddToTray:ee,onAddFavorite:_,onRemoveFavorite:v,favoritePaths:y,onExtractArchive:x,allowCompression:S=!1,platform:C,onCompressTo:ne,onArchiveCreated:T}){let E=o(),re=to(),D=w(t),[O,k]=(0,z.useState)({verbs:[],safe:!0,loading:!1}),[ie,j]=(0,z.useState)({recommended:[],other:[],loading:!1}),[ae,M]=(0,z.useState)(null),oe=(0,z.useRef)(0),se=(0,z.useRef)(0),N=e?.paths.length===1,P=e?.background?t?[t]:[]:e?.paths??[],ce=e?.background?t||null:N&&n?.isDirectory?n.path:null;if((0,z.useEffect)(()=>{if(!e){k({verbs:[],safe:!0,loading:!1}),j({recommended:[],other:[],loading:!1});return}let t=++oe.current;k({verbs:[],safe:!0,loading:P.length>0&&!D}),P.length>0&&!D&&Rt(P).then(e=>{oe.current===t&&k({...e,loading:!1})},()=>{oe.current===t&&k({verbs:[],safe:!0,loading:!1})});let r=++se.current;!D&&N&&n?(j({recommended:[],other:[],loading:!0}),Nt(n.path).then(e=>{se.current===r&&j({...e,loading:!1})},()=>{se.current===r&&j({recommended:[],other:[],loading:!1})})):j({recommended:[],other:[],loading:!1})},[e,N,n?.path,n?.isDirectory,P.length,D]),(0,z.useEffect)(()=>{if(!e||D||!ce){M(null);return}let t=!0;return Tt(ce).then(e=>{t&&M(e)},()=>{t&&M(null)}),()=>{t=!1}},[e,ce,D]),!e)return null;let F=[],I=[],le=new Set((y??[]).map(te)),ue=e.background?t?[t]:[]:e.paths,de=ue.length>0&&ue.every(e=>le.has(te(e))),fe=()=>n?pe(n.path,n.isDirectory):`Archive`,pe=(e,t)=>{let n=b(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},me=async(e,n=fe())=>{let r=await Bt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?T?.(r.path,!0):Wa(r.error??E(`could_not_create_the_archive`))},he=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},L=async()=>{if(!ce||ae===null)return;let e=await Et(ce,!ae);e.ok?(M(e.enabled),g?.()):Wa(e.error??E(`could_not_change_the_case_sensitivity`))},R=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await Dt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await Dt(e,t,`${a}\\${Po(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?g?.():Wa(o.error??E(`could_not_create_the_link`))},ge=async e=>{if(!n)return;let r=await za(t);r&&await R(e,n.path,r,b(n.path),e.endsWith(`-copy`))},B=async e=>{let n=re?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=te(a)===te(t);await R(n,r.path,t,b(r.path),i&&!o)}},_e=async()=>{let t=(await W(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&eo({paths:t})},ve=()=>{let e=re?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:E(`cancel_selected_link`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>eo(null)},...t?[{label:E(`hard_link`),icon:(0,J.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>void B(`hard`)}]:[],{label:E(`symbolic_link`),icon:(0,J.jsx)(bi,{size:14}),separatorBefore:!t,onSelect:()=>void B(`symbolic-file`)},...n?[{label:E(`directory_junction`),icon:(0,J.jsx)(yi,{size:14}),onSelect:()=>void B(`junction`)},{label:E(`smart_copy`),icon:(0,J.jsx)(Sa,{size:14}),separatorBefore:!0,onSelect:()=>void B(`smart-copy`)},{label:E(`smart_mirror`),icon:(0,J.jsx)(Sa,{size:14}),onSelect:()=>void B(`smart-mirror`)},{label:E(`multi_version_smart_copy`),icon:(0,J.jsx)(Sa,{size:14}),onSelect:()=>void B(`multi-version-smart-copy`)},{label:E(`hardlink_copy`),icon:(0,J.jsx)(Sa,{size:14}),separatorBefore:!0,onSelect:()=>void B(`hard-copy`)},{label:E(`symbolic_link_copy`),icon:(0,J.jsx)(Sa,{size:14}),onSelect:()=>void B(`symbolic-copy`)}]:[]]};if(e.background){if(p&&I.push({label:E(`new_folder`),icon:(0,J.jsx)(Ti,{size:16}),shortcut:Jt(r.newFolder),onSelect:p}),m||p){let e=[];p&&(e.push({label:E(`folder`),icon:(0,J.jsx)(yi,{size:14}),onSelect:()=>p(!1)}),D||e.push({label:E(`case_sensitive_folder`),icon:(0,J.jsx)(xa,{size:14}),onSelect:()=>p(!0)})),m&&e.push(...qa.map((e,t)=>({label:`${E(e.label)} (${e.extension})`,icon:(0,J.jsx)(bi,{size:14}),separatorBefore:t===0,onSelect:()=>m(e.extension)}))),F.push({label:E(`new`),icon:(0,J.jsx)(Ti,{size:14}),children:e,onSelect:()=>void 0})}if(D||F.push({label:E(`create_link`),icon:(0,J.jsx)(Ta,{size:14}),disabled:!re,children:ve(),onSelect:()=>void 0}),h)return(0,J.jsx)(bo,{items:F,onClose:a,quick:I,x:e.x,y:e.y});!D&&s&&F.push({label:E(`open_in_new_tab`),icon:(0,J.jsx)(Ti,{size:14}),onSelect:()=>s(t,!0)}),F.push({label:E(`copy_as_path`),icon:(0,J.jsx)(Sa,{size:14}),onSelect:()=>void he([t])}),ee&&F.push({label:E(`add_to_file_tray`),icon:(0,J.jsx)(_a,{size:14}),onSelect:()=>ee([t])}),!D&&(de?v:_)&&F.push({label:E(de?`remove_from_favorites`:`add_to_favorites`),icon:de?(0,J.jsx)(ba,{size:14}):(0,J.jsx)(ya,{size:14}),onSelect:()=>de?v?.([t]):_?.([t])}),!D&&ae!==null&&F.push({label:E(`case_sensitive_names`),icon:(0,J.jsx)(xa,{size:14}),checked:ae,onSelect:()=>void L()}),!D&&S&&(F.push({label:E(`open_in_terminal`),icon:(0,J.jsx)(ha,{size:14}),onSelect:()=>void Mt(t)}),F.push({label:E(`show_in_explorer`),icon:(0,J.jsx)(yi,{size:14}),separatorBefore:!0,onSelect:()=>void Lt(t)})),f&&I.push({label:E(`paste`),icon:(0,J.jsx)(wa,{size:16}),disabled:!i,shortcut:Jt(r.paste),onSelect:()=>f(t)}),D||I.push({label:E(`properties`),icon:(0,J.jsx)(ki,{size:16}),shortcut:Jt(r.properties),onSelect:()=>void kt([t])})}else{if(s&&F.push({label:E(`open`),icon:(0,J.jsx)(Di,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&c?.(n.path)}}),n?.isDirectory&&(s&&F.push({label:E(`open_in_new_tab`),icon:(0,J.jsx)(Ti,{size:14}),onSelect:()=>s(n.path,!0)}),f&&F.push({label:E(`paste_into_folder`),icon:(0,J.jsx)(wa,{size:14}),disabled:!i,onSelect:()=>f(n.path)}),D||F.push({label:E(`open_in_terminal`),icon:(0,J.jsx)(ha,{size:14}),onSelect:()=>void Mt(n.path)})),!D&&N&&n&&!n.isDirectory&&A(n.path)&&x&&F.push({label:E(`extract_archive`),icon:(0,J.jsx)(Ki,{size:14}),separatorBefore:!0,children:[{label:E(`extract_here`),icon:(0,J.jsx)(Ki,{size:14}),onSelect:()=>x(n.path,`here`)},{label:E(`extract_to_a_folder_named_after_the_archive`),icon:(0,J.jsx)(Ki,{size:14}),onSelect:()=>x(n.path,`named`)},{label:E(`auto_extract_to_the_current_folder`),icon:(0,J.jsx)(Ki,{size:14}),onSelect:()=>x(n.path,`auto`)},{label:E(`extract_to`),icon:(0,J.jsx)(yi,{size:14}),separatorBefore:!0,onSelect:()=>x(n.path,`choose`)}],onSelect:()=>void 0}),!D&&N&&n){let e=[];if(ie.loading)e.push({label:E(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ie.recommended)e.push({label:t.name,group:E(`suggested_apps`),icon:t.icon?(0,J.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,J.jsx)(Ji,{size:14}),onSelect:()=>void Pt(n.path,t.path).then(e=>{e||jt(n.path)})});for(let t of ie.other)e.push({label:t.name,group:E(`other_apps`),icon:t.icon?(0,J.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,J.jsx)(Ji,{size:14}),onSelect:()=>void Pt(n.path,t.path).then(e=>{e||jt(n.path)})})}e.push({label:E(`choose_another_app`),icon:(0,J.jsx)(Ji,{size:14}),separatorBefore:!0,onSelect:()=>void jt(n.path)}),F.push({label:E(`open_with_2`),icon:(0,J.jsx)(Ji,{size:14}),children:e,onSelect:()=>void jt(n.path)})}if(!D&&C===`windows`&&e.paths.length>0&&F.push({label:E(`share`),icon:(0,J.jsx)(Ta,{size:14}),separatorBefore:!0,onSelect:()=>void At(e.paths).then(e=>{e.ok||Wa(e.error??E(`could_not_open_the_share_sheet`))})}),D||F.push({label:E(`compress`),icon:(0,J.jsx)(Ki,{size:14}),separatorBefore:!0,children:[{label:E(`compress_to_zip`),icon:(0,J.jsx)(Ki,{size:14}),onSelect:()=>void me(e.paths)},{label:E(`compress_to`),icon:(0,J.jsx)(Ki,{size:14}),onSelect:()=>ne?.(e.paths,fe())}],onSelect:()=>void 0}),!D&&(e?.paths.length??0)>0){let e=[{label:E(`select_link_source`),icon:(0,J.jsx)(Ta,{size:14}),onSelect:()=>void _e()},...re?[{label:E(`cancel_selected_link`),icon:(0,J.jsx)(Li,{size:14}),onSelect:()=>eo(null)}]:[],...N&&n?n.isDirectory?[{label:E(`symbolic_link`),icon:(0,J.jsx)(yi,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-folder`)},{label:E(`directory_junction`),icon:(0,J.jsx)(yi,{size:14}),onSelect:()=>void ge(`junction`)},{label:E(`smart_copy`),icon:(0,J.jsx)(Sa,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`smart-copy`)},{label:E(`smart_mirror`),icon:(0,J.jsx)(Sa,{size:14}),onSelect:()=>void ge(`smart-mirror`)},{label:E(`multi_version_smart_copy`),icon:(0,J.jsx)(Sa,{size:14}),onSelect:()=>void ge(`multi-version-smart-copy`)},{label:E(`hardlink_copy`),icon:(0,J.jsx)(Sa,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`hard-copy`)},{label:E(`symbolic_link_copy`),icon:(0,J.jsx)(Sa,{size:14}),onSelect:()=>void ge(`symbolic-copy`)}]:[{label:E(`symbolic_link`),icon:(0,J.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>void ge(`symbolic-file`)},{label:E(`hard_link`),icon:(0,J.jsx)(bi,{size:14}),onSelect:()=>void ge(`hard`)}]:[]];F.push({label:E(`create_link`),icon:(0,J.jsx)(Ta,{size:14}),children:e,onSelect:()=>void 0})}!D&&n?.isDirectory&&ae!==null&&F.push({label:E(`case_sensitive_names`),icon:(0,J.jsx)(xa,{size:14}),checked:ae,onSelect:()=>void L()}),F.push({label:E(`copy_as_path`),icon:(0,J.jsx)(Sa,{size:14}),onSelect:()=>void he(e.paths)}),ee&&F.push({label:E(`add_to_file_tray`),icon:(0,J.jsx)(_a,{size:14}),onSelect:()=>ee(e.paths)}),!D&&(de?v:_)&&F.push({label:E(de?`remove_from_favorites`:`add_to_favorites`),icon:de?(0,J.jsx)(ba,{size:14}):(0,J.jsx)(ya,{size:14}),onSelect:()=>de?v?.(ue):_?.(ue)}),D||F.push({label:E(`show_in_explorer`),icon:(0,J.jsx)(yi,{size:14}),separatorBefore:!0,onSelect:()=>void Lt(ue[0])}),d&&I.push({label:E(`cut`),icon:(0,J.jsx)(Ca,{size:16}),shortcut:Jt(r.cut),onSelect:()=>d(e.paths,!0)},{label:E(`copy`),icon:(0,J.jsx)(Sa,{size:16}),shortcut:Jt(r.copy),onSelect:()=>d(e.paths,!1)}),N&&n&&l&&I.push({label:E(`rename`),icon:(0,J.jsx)(na,{size:16}),shortcut:Jt(r.rename),onSelect:()=>l(n.path)}),u&&I.push({label:E(`delete`),icon:(0,J.jsx)(Fi,{size:16}),danger:!0,shortcut:Jt(r.delete),onSelect:()=>u(e.paths)}),D||I.push({label:E(`properties`),icon:(0,J.jsx)(ki,{size:16}),shortcut:Jt(r.properties),onSelect:()=>void kt(e.paths)})}if(O.loading)F.push({label:E(`more_actions`),icon:(0,J.jsx)(Ji,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(O.verbs.length>0){let e={items:[],children:new Map};for(let t of O.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,J.jsx)(No,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void zt(P,O.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,J.jsx)(No,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];F.push({label:E(O.safe?`more_actions`:`more_actions_extensions`),icon:(0,J.jsx)(Ji,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,J.jsx)(bo,{items:F,onClose:a,quick:I,x:e.x,y:e.y})}function No({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,J.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,J.jsx)(Di,{size:14});case`document`:return(0,J.jsx)(ea,{size:14});case`cut`:return(0,J.jsx)(Ca,{size:14});case`copy`:return(0,J.jsx)(Sa,{size:14});case`paste`:return(0,J.jsx)(wa,{size:14});case`trash`:return(0,J.jsx)(Fi,{size:14});case`pencil`:return(0,J.jsx)(na,{size:14});case`gear`:return(0,J.jsx)(ki,{size:14});case`star`:return(0,J.jsx)(la,{size:14});case`pin`:return(0,J.jsx)(Ai,{size:14});case`executable`:return(0,J.jsx)(Ji,{size:14});case`share`:return(0,J.jsx)(Ta,{size:14});case`arrow`:return(0,J.jsx)(Di,{size:14});default:return(0,J.jsx)(Bi,{size:14})}}function Po(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function Fo({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:s,zIndex:c=3200}){let l=o(),[u,d]=(0,z.useState)(null),f=(0,z.useRef)(null),p=t.find(t=>t.value===e)??t[0];return(0,z.useEffect)(()=>{if(!u)return;let e=()=>d(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[u]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Io,{$icon:a!==void 0,"aria-expanded":u!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(u){d(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;d({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:f,style:i&&!a?{width:i}:void 0,title:s??p?.title,type:`button`,children:[a===void 0?(0,J.jsx)(Lo,{children:p?.label??``}):(0,J.jsx)(Ro,{children:a}),a===void 0&&(0,J.jsx)(zo,{children:(0,J.jsx)(Oi,{size:11})})]}),u&&(0,no.createPortal)((0,J.jsx)(Bo,{"aria-label":l(`options`),"data-select-menu":`true`,$menuZIndex:c,role:`listbox`,style:{bottom:u.bottom,left:u.left,minWidth:u.width,top:u.top},children:t.map(t=>(0,J.jsxs)(Vo,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),d(null)},role:`option`,title:t.title,type:`button`,children:[(0,J.jsx)(Ho,{children:t.label}),t.value===e&&(0,J.jsx)(Ii,{size:11})]},t.value))}),document.body)]})}var Io=_.button`
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
`,Lo=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ro=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,zo=_.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Bo=_.div`
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
    ${mo}
`,Vo=_.button`
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
`,Ho=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uo=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],Wo=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],Go=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],Ko=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],qo=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function Jo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=o(),a=(0,z.useRef)(null),[s,c]=(0,z.useState)(e),[l,u]=(0,z.useState)(t),[d,f]=(0,z.useState)(`zip`),[p,m]=(0,z.useState)(`5`),[h,g]=(0,z.useState)(`default`),[ee,_]=(0,z.useState)(`none`),[v,y]=(0,z.useState)(``),[b,x]=(0,z.useState)(`0`),[S,C]=(0,z.useState)(!1);(0,z.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let w=Uo.find(e=>e.value===d)??Uo[0],te=d===`zip`||d===`zipx`,ne=ee!==`none`,T=te||d===`7z`,E=d===`zip`||d===`7z`,re=async()=>{if(S||!l.trim()||!s||ne&&v.length===0)return;C(!0);let e=await r({directory:s,name:l.trim(),format:d,level:w.level?Number(p):0,method:te?h:null,encryption:T?ee:`none`,password:ne?v:void 0,splitSize:E?Number(b):0});C(!1),e&&n()};return(0,no.createPortal)((0,J.jsx)(Yo,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,J.jsxs)(Xo,{"aria-modal":`true`,role:`dialog`,children:[(0,J.jsx)(Zo,{children:i(`compress_to`)}),(0,J.jsxs)(Qo,{children:[(0,J.jsx)($o,{children:i(`archive_name`)}),(0,J.jsx)(es,{onChange:e=>u(e.target.value),ref:a,value:l,onKeyDown:e=>{e.key===`Enter`&&re()}}),(0,J.jsx)(ts,{children:w.extension})]}),(0,J.jsxs)(Qo,{children:[(0,J.jsx)($o,{children:i(`format`)}),(0,J.jsx)(Fo,{onChange:e=>f(e),options:Uo.map(e=>({value:e.value,label:i(e.label)})),value:d,width:236,zIndex:3700})]}),(0,J.jsxs)(Qo,{children:[(0,J.jsx)($o,{children:i(`method`)}),(0,J.jsx)(Fo,{disabled:!te,onChange:g,options:Wo.map(e=>({...e,label:i(e.label)})),value:te?h:`default`,width:236,zIndex:3700})]}),(0,J.jsxs)(Qo,{children:[(0,J.jsx)($o,{children:i(`encryption`)}),(0,J.jsx)(Fo,{disabled:!T,onChange:e=>{_(e),e===`none`&&y(``)},options:Go.map(e=>({...e,label:i(e.label)})),value:T?ee:`none`,width:236,zIndex:3700})]}),ne&&(0,J.jsxs)(Qo,{children:[(0,J.jsx)($o,{children:i(`password`)}),(0,J.jsx)(es,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,J.jsxs)(Qo,{children:[(0,J.jsx)($o,{children:i(`split_volumes`)}),(0,J.jsx)(Fo,{disabled:!E,onChange:x,options:Ko.map(e=>({...e,label:i(e.label)})),value:E?b:`0`,width:236,zIndex:3700})]}),(0,J.jsxs)(Qo,{children:[(0,J.jsx)($o,{children:i(`compression_level`)}),(0,J.jsx)(Fo,{disabled:!w.level,onChange:m,options:qo.map(e=>({...e,label:i(e.label)})),value:w.level?p:d===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,J.jsxs)(Qo,{$stack:!0,children:[(0,J.jsx)($o,{children:i(`destination`)}),(0,J.jsxs)(ns,{children:[(0,J.jsx)(rs,{title:s,children:s}),(0,J.jsx)(as,{disabled:S,onClick:()=>void za(s).then(e=>{e&&c(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,J.jsxs)(is,{children:[(0,J.jsx)(as,{disabled:S,onClick:n,type:`button`,children:i(`cancel`)}),(0,J.jsx)(os,{disabled:S||!l.trim()||ne&&v.length===0,onClick:()=>void re(),type:`button`,children:i(S?`compressing`:`compress`)})]})]})}),document.body)}var Yo=_.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${vo}
`,Xo=_.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${po}
`,Zo=_.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Qo=_.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,$o=_.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,es=_.input`
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
`,ts=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,ns=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,rs=_.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,is=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,as=_.button`
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
`,os=_(as)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function ss({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:s}){let c=o(),l=(0,z.useRef)(null);return(0,z.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),s()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,s]),e?(0,no.createPortal)((0,J.jsx)(cs,{onPointerDown:e=>{e.target===e.currentTarget&&s()},children:(0,J.jsxs)(ls,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(us,{children:t}),(0,J.jsx)(ds,{children:n}),(0,J.jsxs)(fs,{children:[(0,J.jsx)(ps,{onClick:s,type:`button`,children:c(`cancel`)}),(0,J.jsx)(ps,{$danger:i,onClick:a,ref:l,type:`button`,children:r})]})]})}),document.body):null}var cs=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${vo}
`,ls=_.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${po}
`,us=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,ds=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,fs=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,ps=_.button`
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
`,ms=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),hs=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),gs=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),_s=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function vs({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:s,emptyNote:c}){let l=o(),[u,d]=(0,z.useState)(!1),[f,p]=(0,z.useState)(!1),[m,h]=(0,z.useState)(!1),[g,ee]=(0,z.useState)(0),[_,v]=(0,z.useState)(0),[y,b]=(0,z.useState)(null),[x,S]=(0,z.useState)(!1),[C,w]=(0,z.useState)(!1),te=(0,z.useRef)(null),ne=(0,z.useRef)(null),T=(0,z.useRef)(null),E=(0,z.useRef)(null),[re,D]=(0,z.useState)(()=>{let e=Jn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),O=e?.path??null,k=mn(O),ie=e?ys(e.name):``,A=!!e&&!e.isDirectory&&ms.has(ie),j=!!e&&!e.isDirectory&&hs.has(ie),ae=!!e&&!e.isDirectory&&gs.has(ie),M=!!e&&!e.isDirectory&&_s.has(ie),oe=!!e&&!e.isDirectory&&ie===`pdf`,se=K(A?k:null,512,e?.modified??0),N=vn(ae?k:null,e?.modified??0,ie),P=vn(A||j?k:null,e?.modified??0,ie),ce=yn(oe?k:null,e?.modified??0),F=pn(!A&&!j&&!ae&&!M&&!oe?k:null,e?.isDirectory??!1);if((0,z.useEffect)(()=>{d(!1),p(!1),h(!1),ee(0),v(0),w(!1)},[O]),(0,z.useEffect)(()=>{if(!k||!M){b(null),S(!1);return}let e=!0;return S(!0),b(null),De(k).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:l(`could_not_read_this_file`)}),S(!1))}),()=>{e=!1}},[k,M]),!e&&!c)return null;let I=e=>{T.current={x:e.clientX,width:ne.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},le=e=>{let t=T.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},ue=e=>{T.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},de=e=>{E.current={y:e.clientY,height:re},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=E.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);D(n),Yn(`yafm.preview.media.height`,n)},pe=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,J.jsxs)(xs,{$open:r,children:[r&&(0,J.jsx)(Ss,{onPointerDown:I,onPointerMove:le,onPointerUp:ue,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,J.jsx)(Cs,{ref:ne,style:{width:r?t:0},children:(0,J.jsxs)(ws,{children:[(0,J.jsx)(yi,{size:56}),(0,J.jsx)(`span`,{children:c})]})})]});let me=()=>{let e=te.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,J.jsxs)(xs,{$open:r,children:[r&&(0,J.jsx)(Ss,{onPointerDown:I,onPointerMove:le,onPointerUp:ue,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(Cs,{ref:ne,style:{width:r?t:0},children:[(0,J.jsx)(Ts,{style:{height:re},children:A&&P&&!u?(0,J.jsxs)(Ds,{onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),children:[(0,J.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:me,onDurationChange:e=>ee(e.currentTarget.duration||0),onError:()=>d(!0),onLoadedMetadata:e=>{ee(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>p(!1),onPlay:()=>p(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:se??void 0,preload:`metadata`,ref:te,src:P}),(0,J.jsx)(Os,{$visible:!f,onClick:me,title:l(`play`),type:`button`,children:(0,J.jsx)(Ea,{size:28})}),(0,J.jsxs)(ks,{$visible:m,onClick:e=>e.stopPropagation(),children:[(0,J.jsxs)(As,{children:[(0,J.jsx)(`span`,{children:bs(_)}),(0,J.jsx)(`span`,{children:bs(g)})]}),(0,J.jsx)(js,{"aria-label":l(`seek`),max:g||0,min:0,onChange:e=>{let t=te.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,g||0)})]})]}):j&&P?(0,J.jsx)(`audio`,{controls:!0,src:P}):ae&&N?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:N}):oe&&ce&&!C?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:ce}):oe?(0,J.jsx)(bi,{size:64}):M?(0,J.jsx)(Ms,{children:x||!y?(0,J.jsx)(Ps,{children:l(`loading`)}):y.error?(0,J.jsx)(Ps,{children:y.error}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Ns,{children:y.text}),y.truncated&&(0,J.jsx)(Ps,{children:l(`showing_the_first_256_kb`)})]})}):A&&se?(0,J.jsx)(`img`,{alt:``,src:se}):F?(0,J.jsx)(`img`,{alt:``,src:F}):e.isDirectory?(0,J.jsx)(yi,{size:64}):(0,J.jsx)(bi,{size:64})}),(0,J.jsx)(Es,{onDoubleClick:()=>{D(210),Yn(`yafm.preview.media.height`,210)},onPointerDown:de,onPointerMove:fe,onPointerUp:pe,title:l(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(Fs,{children:[(0,J.jsx)(Is,{title:e.path,children:e.name}),s&&(0,J.jsx)(Ls,{children:s}),(0,J.jsx)(Rs,{children:e.fields.map(e=>(0,J.jsxs)(zs,{children:[(0,J.jsx)(Bs,{children:e.label}),(0,J.jsx)(Vs,{title:e.value,children:e.value})]},e.label))})]})]})]})}function ys(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function bs(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var xs=_.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,Ss=_.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Cs=_.aside`
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
`,ws=_.div`
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
`,Ts=_.div`
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
`,Es=_.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Ds=_.div`
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
`,Os=_.button`
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
`,ks=_.div`
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
`,As=_.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,js=_.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Ms=_.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Ns=_.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Ps=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Fs=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Is=_.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Ls=_.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Rs=_.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,zs=_.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Bs=_.span`
    color: var(--text-muted);
`,Vs=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Hs=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Us=[...Hs],Ws={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},Gs={folder:e=>(0,J.jsx)(yi,{size:e}),home:e=>(0,J.jsx)(vi,{size:e}),desktop:e=>(0,J.jsx)(ra,{size:e}),documents:e=>(0,J.jsx)(ia,{size:e}),downloads:e=>(0,J.jsx)(aa,{size:e}),pictures:e=>(0,J.jsx)(oa,{size:e}),music:e=>(0,J.jsx)(sa,{size:e}),videos:e=>(0,J.jsx)(ca,{size:e}),drive:e=>(0,J.jsx)(xi,{size:e}),image:e=>(0,J.jsx)(Ui,{size:e}),video:e=>(0,J.jsx)(Wi,{size:e}),audio:e=>(0,J.jsx)(Gi,{size:e}),text:e=>(0,J.jsx)(Vi,{size:e}),code:e=>(0,J.jsx)(Hi,{size:e}),clock:e=>(0,J.jsx)(Ni,{size:e}),star:e=>(0,J.jsx)(la,{size:e}),file:e=>(0,J.jsx)(bi,{size:e}),archive:e=>(0,J.jsx)(Ki,{size:e}),pdf:e=>(0,J.jsx)(qi,{size:e}),executable:e=>(0,J.jsx)(Ji,{size:e}),font:e=>(0,J.jsx)(Yi,{size:e}),database:e=>(0,J.jsx)(Xi,{size:e}),config:e=>(0,J.jsx)(Zi,{size:e}),spreadsheet:e=>(0,J.jsx)(Qi,{size:e}),presentation:e=>(0,J.jsx)($i,{size:e}),document:e=>(0,J.jsx)(ea,{size:e}),app:e=>(0,J.jsx)(Bi,{size:e}),gear:e=>(0,J.jsx)(ki,{size:e}),pin:e=>(0,J.jsx)(Ai,{size:e}),trash:e=>(0,J.jsx)(Fi,{size:e}),overview:e=>(0,J.jsx)(ta,{size:e}),book:e=>(0,J.jsx)(ua,{size:e}),briefcase:e=>(0,J.jsx)(da,{size:e}),cloud:e=>(0,J.jsx)(fa,{size:e}),gamepad:e=>(0,J.jsx)(pa,{size:e}),camera:e=>(0,J.jsx)(ma,{size:e}),terminal:e=>(0,J.jsx)(ha,{size:e}),server:e=>(0,J.jsx)(ga,{size:e}),package:e=>(0,J.jsx)(_a,{size:e}),globe:e=>(0,J.jsx)(va,{size:e}),heart:e=>(0,J.jsx)(ya,{size:e}),share:e=>(0,J.jsx)(ga,{size:e}),favorites:e=>(0,J.jsx)(ya,{size:e})};function Ks(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function qs(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Hs)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Us.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Ks(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${Ws[n]??n}${Js(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Js(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ys({panel:e,size:t=16}){let n=G(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,J.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Gs[e.icon]:void 0;if(r)return(0,J.jsx)(J.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,J.jsx)(yi,{size:t});case`recent`:return(0,J.jsx)(Ni,{size:t});case`frequent`:return(0,J.jsx)(la,{size:t});case`drives`:return(0,J.jsx)(xi,{size:t});case`home`:return(0,J.jsx)(vi,{size:t});case`share`:return(0,J.jsx)(ga,{size:t});case`favorites`:return(0,J.jsx)(ya,{size:t});default:return(0,J.jsx)(yi,{size:t})}}function Xs({place:e,size:t=18}){let n=G(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,J.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Gs[e.icon]?(0,J.jsx)(J.Fragment,{children:Gs[e.icon](t)}):(0,J.jsx)(yi,{size:t})}var Zs=`#64748b`;function Qs(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function $s({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:s}){let c=o(),[l,u]=(0,z.useState)(``),[d,f]=(0,z.useState)(`#2dd4bf`),p=(0,z.useRef)(null);(0,z.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||s()},t=e=>{e.key===`Escape`&&s()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,s),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,s)}},[s]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},ee=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=l.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:d}),u(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,no.createPortal)((0,J.jsxs)(ec,{"data-tag-menu":`true`,ref:p,style:{left:v,top:y},children:[(0,J.jsxs)(tc,{children:[(0,J.jsx)(`span`,{children:c(`tags`)}),(0,J.jsx)(nc,{onClick:s,title:c(`close`),type:`button`,children:(0,J.jsx)(Li,{size:11})})]}),(0,J.jsxs)(rc,{children:[m.length===0&&(0,J.jsx)(sc,{children:c(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,J.jsxs)(ic,{children:[(0,J.jsx)(ac,{"aria-label":c(`color_of_tag`,{tag:e}),onChange:t=>ee(e,t.target.value),title:c(`change_this_tag_s_color`),type:`color`,value:t}),(0,J.jsxs)(oc,{$color:t,$ink:Qs(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,J.jsx)(Ii,{size:11}),(0,J.jsx)(`span`,{children:e})]})]},e)})]}),(0,J.jsxs)(cc,{children:[(0,J.jsx)(ac,{"aria-label":c(`color_of_the_new_tag`),onChange:e=>f(e.target.value),title:c(`color_of_the_new_tag`),type:`color`,value:d}),(0,J.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:c(`new_tag`),spellCheck:!1,value:l}),(0,J.jsx)(lc,{onClick:_,type:`button`,children:c(`add`)})]})]}),document.body)}var ec=_.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${po}
`,tc=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,nc=_.button`
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
`,rc=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,ic=_.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,ac=_.input`
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
`,oc=_.button`
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
`,sc=_.span`
    font-size: 11px;
    color: var(--text-muted);
`,cc=_.div`
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
`,lc=_.button`
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
`,uc={file:bi,folder:yi,text:Vi,code:Hi,image:Ui,video:Wi,audio:Gi,archive:Ki,pdf:qi,executable:Ji,font:Yi,database:Xi,config:Zi,spreadsheet:Qi,presentation:$i,document:ea},dc={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function fc(e){let t=e.lastIndexOf(`.`);return t>0?dc[e.slice(t).toLowerCase()]??`file`:`file`}function pc({name:e,size:t}){let n=uc[e??`file`]??bi;return(0,J.jsx)(n,{size:t})}function mc({path:e,name:t,isDirectory:n,size:r=18}){let i=pn(e,n);return i?(0,J.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,J.jsx)(yi,{size:r}):(0,J.jsx)(pc,{name:fc(t),size:r})}var hc=`application/x-yafm-paths`,gc=[hc,`text/uri-list`];function _c(e){return e?.types.some(e=>gc.includes(e.toLowerCase()))??!1}function vc(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(hc);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(bc).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var yc=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function bc(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return yc?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function xc(e,t,n=!0){e.dataTransfer.setData(hc,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Sc({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=o(),[h,g]=(0,z.useState)(()=>new Set),[ee,_]=(0,z.useState)(!1),v=(0,z.useRef)(null),b=(0,z.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),x=(0,z.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),S=(0,z.useRef)(null);if((0,z.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&_c(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=vc(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,c]),!r)return null;let C=new Set([...e,...t].map(e=>e.path)),w=C.size>0&&[...C].every(e=>h.has(e)),te=C.size,ne=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},T=()=>{g(w?new Set:C)},E=e=>{v.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),_(!0)},re=e=>{let t=v.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},D=e=>{v.current&&(v.current=null,_(!1),e.currentTarget.releasePointerCapture(e.pointerId))},O=()=>{let e=b.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},k=()=>{let e=b.map(e=>e.path);e.length!==0&&f(e)},ie=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,a,!0),r.length>0&&p(r,a,!1),g(new Set)},A=(e,t)=>{let n=h.has(e.path);return(0,J.jsxs)(Pc,{$checked:n,draggable:!0,onClick:()=>ne(e.path),onDragStart:r=>{xc(r,n&&h.size>0?[...new Set([...b,...x].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,J.jsx)(Fc,{$checked:n,onClick:t=>{t.stopPropagation(),ne(e.path)},type:`button`,children:n&&(0,J.jsx)(Ii,{size:8})}),(0,J.jsx)(mc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,J.jsxs)(Ic,{children:[(0,J.jsx)(Lc,{children:e.name}),(0,J.jsx)(Rc,{children:y(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},j=e=>{_c(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,J.jsxs)(Cc,{$dragging:ee,"data-tray":`true`,ref:S,style:{left:i.x,top:i.y},onDragEnter:j,onDragOver:j,onDrop:e=>{let{paths:t}=vc(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,J.jsxs)(wc,{onPointerDown:E,onPointerMove:re,onPointerUp:D,children:[(0,J.jsxs)(Tc,{children:[(0,J.jsx)(_a,{size:12}),m(`tray`),(0,J.jsx)(Ec,{children:te})]}),(0,J.jsxs)(Dc,{onPointerDown:e=>e.stopPropagation(),children:[(0,J.jsx)(Oc,{onClick:T,title:m(w?`select_none`:`select_all`),type:`button`,children:m(w?`none`:`all`)}),(0,J.jsx)(Oc,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,J.jsx)(kc,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,J.jsx)(Li,{size:10})})]})]}),(0,J.jsxs)(Ac,{children:[(0,J.jsxs)(Mc,{children:[m(`in_this_app`),(0,J.jsx)(Ec,{children:e.length})]}),e.length===0&&(0,J.jsx)(jc,{children:m(`drag_files_or_folders_here`)}),e.map(e=>A(e,!0)),t.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Mc,{$clipboard:!0,children:[m(`clipboard`),(0,J.jsx)(Ec,{children:t.length}),n&&(0,J.jsx)(Nc,{children:m(`cut`)})]}),t.map(e=>A(e,n))]})]}),(0,J.jsxs)(zc,{children:[(0,J.jsx)(Bc,{$plain:!0,disabled:b.length===0,onClick:k,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,J.jsx)(Bc,{disabled:h.size===0||!a,onClick:ie,type:`button`,children:m(`move_here`)}),(0,J.jsx)(Bc,{$danger:!0,disabled:b.length===0,onClick:O,type:`button`,children:m(`remove`)})]})]})}var Cc=_.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${ro}
    ${po}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,wc=_.div`
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
`,Tc=_.span`
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
`,Ec=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Dc=_.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Oc=_.button`
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
`,kc=_.button`
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
`,Ac=_.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,jc=_.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Mc=_.div`
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
`,Nc=_.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Pc=_.div`
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
`,Fc=_.button`
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
`,Ic=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Lc=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Rc=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zc=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Bc=_.button`
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
`,Vc={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Hc(){return l.available?await l.request(`share.list`):Vc}async function Uc(e,t){return l.available?await l.request(`share.add`,{path:e,mode:t}):Vc}async function Wc(e){return l.available?await l.request(`share.remove`,{id:e}):Vc}async function Gc(e,t){return l.available?await l.request(`share.mode`,{id:e,mode:t}):Vc}async function Kc(){return l.available?(await l.request(`share.peers`)).peers??[]:[]}async function qc(){return l.available?(await l.request(`share.peers.refresh`)).peers??[]:[]}async function Jc(e,t){l.available&&await l.request(`share.pair.start`,{host:e,port:t})}async function Yc(e,t){l.available&&await l.request(`share.pair.respond`,{requestId:e,accept:t})}async function Xc(e,t){l.available&&await l.request(`share.port`,{mode:t,port:e})}var Zc=`yafm://share/`;function Qc(e){return e.toLowerCase().startsWith(Zc)}function $c(e){if(!Qc(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function el(e,t,n=``){let r=`${Zc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function tl(e){let t=$c(e);if(!t||!l.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await l.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:el(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:el(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function nl(e){let t=$c(e);if(!t||!l.available)throw Error(`This shared file is only available in the desktop app.`);let n=await l.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function rl(e){await Se(await nl(e))}async function il(){return l.available?(await l.request(`share.devices.list`)).devices??[]:[]}async function al(e,t,n){return l.available?(await l.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function ol(e){return l.available?(await l.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function sl(){return l.available?(await l.request(`share.access.status`)).hasPassword:!1}async function cl(e){return l.available?(await l.request(`share.access.password`,{password:e})).hasPassword:!1}var ll=new Map,ul=new Set,dl=0;function fl(){dl+=1;for(let e of ul)e()}function pl(e,t){t?ll.set(e,t):ll.delete(e),fl()}function ml(e){return ll.has(e)}function hl(e,t,n){ll.get(e)?.(t,n)}function gl(e){return ul.add(e),()=>ul.delete(e)}function _l(){return dl}function vl(e){return(0,z.useSyncExternalStore)(gl,_l,_l),{available:ml(e),open:(t,n)=>hl(e,t,n)}}function yl(e){return[...ll.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function bl(e){return(0,z.useSyncExternalStore)(gl,_l,_l),{available:yl(e).length>0,open:(t,n)=>{let r=yl(e).at(-1);r&&hl(r,t,n)}}}var xl=60,Sl=300,Cl=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],wl=new Set,Tl=`yafm.columnWidths`,El=`yafm.reset-column-widths`,Dl=64,Ol=720,kl=160,Al=190,jl=120;function Ml({listing:e,loading:t,error:n,find:r=xn,view:i,showImages:a,imageStripHeight:s=Al,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:f,showCheckboxes:p=!0,openOnSingleClick:m=!1,shortcuts:h=Ut,enableShortcuts:g=!0,refreshToken:ee=0,onRefresh:_,onRename:v,onClipboardChanged:y,cutPaths:x=wl,onTransfer:C,onAddToTray:w,platform:te,onAddFavorite:ne,onRemoveFavorite:T,favoritePaths:E,onExtractArchive:re,onPaste:D,confirmDelete:O=!1,previewVideoAudio:k=!1,previewVideoAutoplay:ie=!1,showDetails:A=!0,onPreviewInfo:j,onActivate:ae,groupOf:se,onGridScroll:N,gridFooter:ce,allowBackgroundMenu:F=!0,readOnly:I=!1,onSelectionChange:le,onSelectionCountChange:ue,selectionMenuRequest:de,selectionMenuId:fe,singleSelect:pe=!1,pendingRename:me=null,pendingRenameToken:he=0,selectMatchesToken:L=0}){let R=o(),ge=Ln(),B=(0,z.useRef)(null),_e=(0,z.useRef)(null),ve=(0,z.useRef)(null),ye=(0,z.useRef)(null),[be,xe]=(0,z.useState)(Sl),[Se,Ce]=(0,z.useState)({top:0,height:640}),we=(0,z.useRef)(null),Te=(0,z.useRef)(null),[Ee,De]=(0,z.useState)(null),[Oe,ke]=(0,z.useState)(s),[V,Ae]=(0,z.useState)(()=>new Set),[je,Me]=(0,z.useState)(()=>Xn(Tl)??{}),H=(0,z.useRef)(V),Ne=(0,z.useRef)([]);H.current=V,(0,z.useEffect)(()=>le?.([...V]),[V,le]),(0,z.useEffect)(()=>ue?.(V.size),[V,ue]),(0,z.useEffect)(()=>{let e=de;if(!e||e.token===Ie.current)return;Ie.current=e.token;let t=[...H.current];t.length!==0&&(Fe({x:e.x,y:e.y,paths:t,background:!1}),_t().then(Ye,()=>Ye(!1)))},[de]);let[Pe,Fe]=(0,z.useState)(null),Ie=(0,z.useRef)(0),[Le,U]=(0,z.useState)(null),[Re,ze]=(0,z.useState)(null),[Be,Ve]=(0,z.useState)(null),He=(0,z.useRef)(Be);He.current=Be;let Ue=(0,z.useRef)(0),We=(0,z.useRef)(ae);We.current=ae;let[Ge,Ke]=(0,z.useState)(()=>{let e=Jn(`yafm.preview.width`,320);return e>=220?e:320}),qe=(0,z.useCallback)(e=>{Ke(e),Yn(`yafm.preview.width`,e)},[]),[Je,Ye]=(0,z.useState)(!1),Xe=(0,z.useCallback)((e,t)=>{let n=[...H.current];n.length!==0&&(Fe({x:e,y:t,paths:n,background:!1}),_t().then(Ye,()=>Ye(!1)))},[]);(0,z.useEffect)(()=>{if(fe)return pl(fe,V.size>0?Xe:null),()=>pl(fe,null)},[fe,V,Xe]),(0,z.useEffect)(()=>{Ae(new Set),Ve(null),Fe(null),Te.current=null},[e?.path]),(0,z.useEffect)(()=>{ke(s)},[s]),(0,z.useEffect)(()=>{Ae(new Set),Ve(null),Te.current=null},[ee]);let Ze=e=>{we.current={y:e.clientY,height:Oe},e.currentTarget.setPointerCapture(e.pointerId)},Qe=e=>{let t=we.current;if(!t)return;let n=Math.max(jl,Math.round(window.innerHeight*.7));ke(Math.min(n,Math.max(jl,t.height+t.y-e.clientY)))},$e=e=>{we.current&&(we.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(Oe))},et=()=>{ke(Al),c?.(Al)},tt=r.query.length>0,nt=(0,z.useMemo)(()=>Cl.filter(e=>i.columns?.includes(e.id)),[i.columns]),rt=i.columns?.includes(`linkTarget`)??!1,it=(0,z.useCallback)(e=>Math.min(Ol,Math.max(Dl,je[e.id]??e.width)),[je]),at=(0,z.useMemo)(()=>`minmax(160px, 1fr) ${nt.map(e=>`${it(e)}px`).join(` `)}`.trim(),[nt,it]),ot=(0,z.useRef)(null),st=(0,z.useRef)(null),ct=()=>Math.floor(st.current?.getBoundingClientRect().width??kl),lt=e=>{let t=nt[0];t&&(e.preventDefault(),e.stopPropagation(),ot.current={left:{id:t.id,start:it(t)},startX:e.clientX,nameStart:ct()})},ut=(e,t)=>{let n=nt[t],r=nt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),ot.current={left:{id:n.id,start:it(n)},right:{id:r.id,start:it(r)},startX:e.clientX,nameStart:0})},dt=e=>Me(t=>{let n={...t};return delete n[e],Zn(Tl,n),n});(0,z.useEffect)(()=>{let e=e=>{let t=ot.current;if(!t)return;let n=e.clientX-t.startX;Me(e=>{if(!t.right){let r=Math.max(0,t.nameStart-kl),i=Math.min(Math.min(Ol,t.left.start+r),Math.max(Dl,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Ol,Math.max(Dl,t.left.start+n)),a=Math.min(Math.min(Ol,r-Dl),Math.max(Math.max(Dl,r-Ol),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{ot.current&&(ot.current=null,Me(e=>(Zn(Tl,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,z.useEffect)(()=>{let e=()=>Me(()=>(Zn(Tl,{}),{}));return window.addEventListener(El,e),()=>window.removeEventListener(El,e)},[]);let ft=(0,z.useMemo)(()=>e?Fl(e.entries.map(t=>{let n=t.isDirectory?Rn(ge,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:tt?Sn(i,r):null,tags:e.tags[t.name]??[],cut:x.has(t.fullPath)}}).filter(e=>!tt||r.mode===`dim`||e.ranges!==null),i,e,R):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,tt,r,ge,i.sort,i.sortDescending,R,x]);Ne.current=ft,(0,z.useEffect)(()=>{L!==0&&Ae(new Set(Ne.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[L]);let pt=Math.max(40,i.iconSize+20),mt=Math.max(0,Math.floor(Se.top/pt)-4),ht=Math.min(ft.length,mt+Math.ceil(Se.height/pt)+10),vt=(0,z.useMemo)(()=>ft.slice(mt,ht),[ft,mt,ht]);(0,z.useEffect)(()=>{let e=ye.current;if(!e||i.mode!==`list`)return;let t=()=>Ce(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,z.useEffect)(()=>{Ce(e=>({...e,top:0})),ye.current&&(ye.current.scrollTop=0)},[e?.path]),(0,z.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=ft.findIndex(e=>e.entry.fullPath===r.currentPath),t=ye.current;if(e<0||!t)return;let n=e*pt;(n<t.scrollTop||n+pt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else B.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,ft,pt]);let yt=(0,z.useMemo)(()=>ft.slice(0,be),[ft,be]);(0,z.useEffect)(()=>{let e=_e.current;if(!e||e.length===0)return;let t=e.filter(e=>ft.some(t=>P(t.entry.fullPath,e)));if(t.length===0)return;_e.current=null;let n=t[0],r=ft.findIndex(e=>P(e.entry.fullPath,n));r>=0&&xe(e=>Math.max(e,r+Sl)),Ae(new Set(t)),Te.current=n,i.mode===`list`&&ye.current&&r>=0?ye.current.scrollTop=Math.max(0,r*pt-ye.current.clientHeight/2):requestAnimationFrame(()=>B.current?.scrollIntoView({block:`nearest`}))},[ft,pt,i.mode]),(0,z.useEffect)(()=>{xe(Sl)},[e?.path]),(0,z.useEffect)(()=>{if(!r.currentPath)return;let e=ft.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&xe(t=>Math.max(t,e+Sl))},[r.currentPath,ft]);let bt=(0,z.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&xe(e=>Math.min(ft.length,e+Sl))},[ft.length]),W=i.mode===`grid`,Tt=(0,z.useMemo)(()=>{if(!W)return[];if(!se)return Rl(yt,Ll);let e=[],t=new Map;for(let n of yt){let r=se(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[yt,W,se]),Et=(0,z.useMemo)(()=>a?ft.filter(e=>!e.entry.isDirectory&&Nn(e.entry.name)):[],[ft,a]),Dt=Et.length,At=(0,z.useMemo)(()=>Et.slice(0,xl),[Et]),jt=(0,z.useMemo)(()=>a?Rl(At,Il):[],[At,a]),Nt=(0,z.useMemo)(()=>ft.map(e=>e.entry.fullPath),[ft]),Pt=ft.length>0&&V.size>=ft.length,Ft=V.size>0&&!Pt,It=()=>{pe||(Pt?Vt():Ae(new Set(Nt)))},Lt=e?.path??``,Rt=(0,z.useCallback)((e,t)=>{if(pe){Te.current=t,Ae(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Ae(r=>{if(e.shiftKey&&Te.current!==null){let e=Nt.indexOf(Te.current),i=Nt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Nt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),Te.current=t,e}return Te.current=t,new Set([t])})},[Nt,pe]),zt=(0,z.useCallback)(e=>{pe?(Te.current=e,Ae(new Set([e]))):(Te.current=e,Ae(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[pe]),Vt=(0,z.useCallback)(()=>{Te.current=null,Ae(new Set)},[]);(0,z.useEffect)(()=>{if(he===0||!me||Ue.current===he||!e?.entries.some(e=>e.fullPath===me))return;Ue.current=he,Te.current=me,Ae(new Set([me])),Ve({path:me,value:b(me)});let t=ft.findIndex(e=>e.entry.fullPath===me),n=ye.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*pt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(me)}"]`)?.scrollIntoView({block:`nearest`})})}},[ye,e,me,he,pt,ft,i.mode]),(0,z.useEffect)(()=>{if(!Be)return;let e=ft.findIndex(e=>e.entry.fullPath===Be.path),t=ye.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*pt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Be.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[ye,Be,pt,ft,i.mode]);let Ht=(0,z.useCallback)(()=>Fe(null),[]),Wt=(0,z.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,Kt(t)):f?.(e.fullPath,Kt(t))},[d,f]),Gt=(0,z.useCallback)((e,t,n)=>{De({entry:e,x:t,y:n})},[]),Jt=(0,z.useRef)(null),Yt=(0,z.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;xc(e,V.has(n)?[...V]:[n])},[V]),Zt=(0,z.useCallback)(e=>{if(!_c(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Jt.current=t?.dataset.directory===`true`?t.dataset.path??Lt:Lt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Lt]),Qt=(0,z.useCallback)(e=>{if(I)return;let{paths:t,move:n}=vc(e),r=Jt.current??Lt;Jt.current=null,t.length!==0&&C&&(e.preventDefault(),C(t,r,!e.ctrlKey&&n))},[Lt,C,I]),$t=(0,z.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),I||!t&&!F)return;let n=H.current;t&&!n.has(t)&&Ae(new Set([t])),t&&(Te.current=t);let r=t?n.has(t)?[...n]:[t]:[];Fe({x:e.clientX,y:e.clientY,paths:r,background:!t}),_t().then(Ye,()=>Ye(!1))},[F,Lt]),en=(0,z.useCallback)(()=>_?.(),[_]),tn=(e,t)=>{Te.current=e,Ae(new Set([e])),t&&Ve({path:e,value:b(e)}),en()},nn=Le&&(0,J.jsx)(Jo,{initialDirectory:Lt,initialName:Le.name,onCancel:()=>U(null),onCompress:async e=>{let t=await Bt(Le.paths,e);return!t.ok||!t.path?(Wa(t.error??R(`could_not_create_the_archive`)),!1):(tn(t.path,!1),!0)}}),rn=async(e,t=!1)=>{let n=e,r=t;if(e.some(Qc)){let t=[];for(let n of e)if(!Qc(n))t.push(n);else{if(Ne.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){Wa(R(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await nl(n))}catch(e){Wa(e instanceof Error?e.message:R(`the_file_could_not_be_copied`));return}}n=t,r=!1}await gt(n,r)&&(Ye(!0),y?.())},an=async e=>{if(!e)return;let t=await xt(e);t.cancelled||(t.ok?(_e.current=t.created,en(),D?.()):Wa(R(`nothing_on_the_clipboard_could_be_pasted_here`)))},on=async(e,t=!1)=>{if(!Lt)return;let n=e===null?await wt(Lt,t):await Ot(Lt,e);!n.ok||n.path===null?Wa(n.error??R(`could_not_create_the_item`)):(Te.current=n.path,Ae(new Set([n.path])),Ve({path:n.path,value:b(n.path)}),en())},sn=e=>{Ae(new Set([e.fullPath])),Te.current=e.fullPath,Ve({path:e.fullPath,value:e.name})},cn=(0,z.useCallback)(e=>Ve(t=>t&&{...t,value:e}),[]),ln=(0,z.useCallback)(()=>Ve(null),[]),un=(0,z.useCallback)(async()=>{let e=He.current;if(Ve(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Ne.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Ct(e.path,t);r.ok?(Vt(),r.path&&v?.(e.path,r.path),en(),window.setTimeout(()=>en(),250)):Wa(r.error??R(`could_not_rename_the_entry`))},[Vt,v,en,R]),dn=async(e,t=!1)=>{if((t||O)&&!await fn(e,t))return;let n=await St(e,t);if(!n.ok&&n.needsPermanent){if(!await fn(e,!0))return;n=await St(e,!0)}if(n.ok)Vt(),en();else{if(n.cancelled)return;Wa(n.error??R(t?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},fn=(0,z.useCallback)((e,t)=>new Promise(n=>ze({paths:e,permanent:t,resolve:n})),[]),pn=(0,z.useCallback)(e=>{ze(t=>(t?.resolve(e),null))},[]);(0,z.useEffect)(()=>{if(!g||Pe)return;let e=e=>{if(Xt(e.target))return;We.current?.();let t=qt(e),n=[...V],r=n.length===1?ft.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Nt.length===0)return;e.preventDefault();let n=Te.current&&Nt.includes(Te.current)?Te.current:V.size===1?[...V][0]:null,r=n?Nt.indexOf(n):-1,i=t===`home`?0:t===`end`?Nt.length-1:Math.max(0,Math.min(Nt.length-1,r+(t===`arrowdown`?1:-1))),a=Nt[i];Ae(new Set([a])),Te.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===h.copy?i(()=>{n.length>0&&rn(n)}):t===h.cut?i(()=>{n.length>0&&rn(n,!0)}):t===h.paste?i(()=>void an(Lt)):t===h.delete?i(()=>{n.length>0&&dn(n)}):t===h.deletePermanently?i(()=>{n.length>0&&dn(n,!0)}):t===h.selectAll?i(()=>{Ae(new Set(Nt)),Te.current=Nt[0]??null}):t===h.invertSelection?i(()=>{Ae(new Set(Nt.filter(e=>!V.has(e)))),Te.current=Nt[0]??null}):t===h.rename&&r?i(()=>void sn(r)):t===h.open&&r?i(()=>{r.isDirectory?d(r.fullPath):f?.(r.fullPath)}):t===h.newFolder||t===`f10`?i(()=>void on(null)):t===h.terminal?i(()=>void Mt(Lt)):t===h.properties&&i(()=>void kt(n.length>0?n:Lt?[Lt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Nt,rn,on,Lt,g,Pe,d,f,an,dn,sn,ft,V,h]);let mn=Re&&(0,J.jsx)(ss,{confirmLabel:Re.permanent?R(`delete`):R(`move`),danger:Re.permanent,message:Re.permanent?R(`permanently_delete_target_this_cannot_be_undone`,{target:Re.paths.length===1?R(`this_item`):R(`count_items`,{count:Re.paths.length})}):R(`move_target_to_the_recycle_bin`,{target:Re.paths.length===1?R(`this_item`):R(`count_items`,{count:Re.paths.length})}),onCancel:()=>pn(!1),onConfirm:()=>pn(!0),open:!0,title:Re.permanent?R(`delete_permanently`):R(`move_to_the_recycle_bin`)}),G=(0,z.useMemo)(()=>{if(!e||V.size===0)return null;let t=Nt.find(e=>V.has(e));return t?ft.find(e=>e.entry.fullPath===t)?.entry??null:null},[Nt,e,ft,V]),hn=(0,z.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:b(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:R(`type`),value:R(`folder`)},{label:R(`location`),value:e.parent??`—`},{label:R(`path`),value:e.path},{label:R(`size`),value:S(t)},{label:R(`items`),value:oe(R,n,`k_1_item`,`count_items`)},{label:R(`modified`),value:`—`},{label:R(`created`),value:`—`},{label:R(`attributes`),value:`—`}]}},[e,R]),gn=(0,z.useMemo)(()=>{if(!G||!e)return null;let t=G.isDirectory?e.folderSizes[G.name]:void 0,n=e.tags[G.name]??[],r=G.name.lastIndexOf(`.`),i=r>0&&r<G.name.length-1?G.name.slice(r+1).toUpperCase():`—`;return{name:G.name,path:G.fullPath,isDirectory:G.isDirectory,size:G.size,modified:G.modified,created:G.created,fields:[{label:R(`type`),value:Vl(G,R)},...G.isEncrypted?[{label:R(`encryption`),value:R(`password_required`)}]:[],{label:R(`extension`),value:G.isDirectory?`—`:i},{label:R(`location`),value:e.path},{label:R(`full_path`),value:G.fullPath},{label:R(`size`),value:G.isDirectory?t===void 0?`—`:S(t):S(G.size)},...G.isDirectory?[{label:R(`items`),value:`${e.counts[G.name]??`—`}`}]:[],{label:R(`modified`),value:M(G.modified)},{label:R(`created`),value:M(G.created)},{label:R(`link_status`),value:G.linkTarget==null?G.linkCount>1?R(`hard_link`):`—`:G.linkValid?`ok`:R(`broken`)},...G.linkTarget?[{label:R(`target`),value:G.linkTarget}]:[],...G.linkCount>1?[{label:R(`links`),value:String(G.linkCount)}]:[],{label:R(`attributes`),value:[G.isHidden?R(`hidden`):``,G.isSystem?R(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:R(`tags`),value:n.join(`, `)}]:[]]}},[e,G,R]),_n=Pe?.paths.length===1?Pe.paths[0]:null,K=_n?ft.find(e=>e.entry.fullPath===_n)?.entry:void 0,q=K?{path:K.fullPath,isDirectory:K.isDirectory}:null,vn=gn??hn,yn=(0,z.useRef)(j);yn.current=j,(0,z.useEffect)(()=>{yn.current?.(vn)},[j,vn]);let bn=A&&vn&&(0,J.jsx)(vs,{info:vn,onWidth:qe,selectionNote:V.size>1?oe(R,V.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:k,videoAutoplay:ie,width:Ge});return n&&!e?(0,J.jsx)(Gu,{children:(0,J.jsx)(qu,{children:n})}):!e&&!t?(0,J.jsx)(Gu,{children:(0,J.jsx)(Ku,{children:R(`nothing_selected`)})}):i.mode===`grid`?(0,J.jsxs)(cu,{onPointerDown:ae,children:[(0,J.jsxs)(lu,{children:[(0,J.jsxs)(_u,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Vt()},onContextMenu:e=>$t(e),onDragOver:Zt,onDragStart:Yt,onDrop:Qt,onScroll:e=>{N?.(e.currentTarget),bt(e.currentTarget)},children:[p&&ft.length>0&&(0,J.jsxs)(au,{children:[(0,J.jsx)(ru,{$checked:!pe&&Pt,$partial:!pe&&Ft,"aria-label":R(Pt?`select_none`:`select_all`),disabled:pe,onClick:e=>{e.stopPropagation(),It()},title:R(Pt?`select_none`:`select_all`),type:`button`,children:Pt?(0,J.jsx)(Ii,{size:10}):Ft?(0,J.jsx)(iu,{}):null}),(0,J.jsx)(`span`,{children:R(Pt?`select_none`:`select_all`)})]}),t&&!e?(0,J.jsx)(Su,{$size:i.gridSize,children:(0,J.jsx)(ql,{size:i.gridSize})}):(0,J.jsx)(Yl,{counts:e?.counts,currentPath:tt?r.currentPath:null,groups:Tt,gridSize:i.gridSize,innerRef:B,onContextMenu:$t,onOpen:d,onOpenFile:f,onRenameCancel:ln,onRenameChange:cn,onRenameCommit:un,onSelect:Rt,onToggle:zt,openOnSingleClick:m,renaming:Be,searching:tt,selected:V,showCheckboxes:p,showTarget:rt}),!t&&e&&ft.length===0&&(0,J.jsx)(Wu,{children:(0,J.jsx)(Ku,{children:n??(tt&&r.mode===`hide`?R(`no_entries_match_the_search`):R(`this_folder_is_empty`))})}),ce]}),Pe&&(0,J.jsx)(Mo,{canPaste:Je,directory:Lt,platform:te,allowCompression:!0,menu:Pe,onAddToTray:w,onAddFavorite:ne,onRemoveFavorite:T,favoritePaths:E,onExtractArchive:re,onArchiveCreated:tn,onClose:Ht,onCompressTo:(e,t)=>U({paths:e,name:t}),onCopy:rn,onCreateFile:e=>void on(e),onCreateFolder:e=>void on(null,e),onDelete:dn,onOpen:d,onOpenFile:f,onPaste:an,onRefresh:en,onRename:e=>{let t=ft.find(t=>t.entry.fullPath===e)?.entry;t&&sn(t)},shortcuts:h,target:q}),nn,mn]}),bn]}):(0,J.jsxs)(cu,{onPointerDown:ae,children:[(0,J.jsxs)(lu,{children:[(0,J.jsxs)(uu,{onScroll:e=>{ye.current&&ye.current.scrollLeft!==e.currentTarget.scrollLeft&&(ye.current.scrollLeft=e.currentTarget.scrollLeft)},ref:ve,style:{gridTemplateColumns:at},children:[(0,J.jsxs)(eu,{ref:st,children:[p&&(0,J.jsx)(ru,{$checked:!pe&&Pt,$partial:!pe&&Ft,"aria-label":R(Pt?`select_none`:`select_all`),disabled:pe,onClick:e=>{e.stopPropagation(),It()},title:R(Pt?`select_none`:`select_all`),type:`button`,children:Pt?(0,J.jsx)(Ii,{size:10}):Ft?(0,J.jsx)(iu,{}):null}),(0,J.jsxs)(du,{onClick:()=>l(`name`),type:`button`,children:[R(`name`),Nl(i,`name`)]}),(0,J.jsx)(nu,{"aria-label":R(`resize_column`),onDoubleClick:()=>nt[0]&&dt(nt[0].id),onPointerDown:lt,role:`separator`})]}),nt.map((e,t)=>(0,J.jsxs)(tu,{children:[(0,J.jsxs)(du,{onClick:()=>l(e.id),type:`button`,children:[R(e.label),Nl(i,e.id)]}),t<nt.length-1&&(0,J.jsx)(nu,{"aria-label":R(`resize_column`),onDoubleClick:()=>dt(e.id),onPointerDown:e=>ut(e,t),role:`separator`})]},e.id))]}),(0,J.jsxs)(fu,{onClick:e=>{e.target===e.currentTarget&&Vt()},onContextMenu:e=>$t(e),onDragOver:Zt,onDragStart:Yt,onDrop:Qt,onScroll:e=>{ve.current&&ve.current.scrollLeft!==e.currentTarget.scrollLeft&&(ve.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;Ce(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:ye,children:[t&&!e?(0,J.jsx)(Kl,{template:at,columns:nt.length}):(0,J.jsxs)(J.Fragment,{children:[mt>0&&(0,J.jsx)(`div`,{style:{height:mt*pt}}),vt.map(t=>{let n=t.entry.fullPath;return(0,J.jsx)(Zl,{current:tt&&n===r.currentPath,dim:tt&&t.ranges===null,height:pt,iconSize:i.iconSize,innerRef:B,listing:e,onContextMenu:$t,onOpen:Wt,onRenameCancel:ln,onRenameChange:cn,onRenameCommit:un,onSelect:Rt,onTagEdit:Gt,onToggle:zt,openOnSingleClick:m,renaming:Be?.path===n?{value:Be.value}:null,row:t,selected:V.has(n),showCheckboxes:p,showTarget:rt,template:at,visible:nt},n)}),ht<ft.length&&(0,J.jsx)(`div`,{style:{height:(ft.length-ht)*pt}})]}),!t&&e&&ft.length===0&&(0,J.jsx)(Gu,{children:(0,J.jsx)(Ku,{children:n??(tt&&r.mode===`hide`?R(`no_entries_match_the_search`):R(`this_folder_is_empty`))})})]}),a&&Et.length>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(pu,{onDoubleClick:et,onPointerDown:Ze,onPointerMove:Qe,onPointerUp:$e,title:R(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(mu,{style:{height:Oe},children:[(0,J.jsxs)(hu,{children:[R(`preview`),(0,J.jsx)(gu,{children:Dt>xl?`${At.length} / ${Dt}`:Dt})]}),(0,J.jsx)(_u,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Vt()},onContextMenu:e=>$t(e),children:(0,J.jsx)(Yl,{counts:e?.counts,currentPath:tt?r.currentPath:null,groups:jt,gridSize:i.gridSize,onContextMenu:$t,onOpen:d,onOpenFile:f,onSelect:Rt,onToggle:zt,openOnSingleClick:m,searching:tt,selected:V,showCheckboxes:p,showTarget:rt})})]})]}),Ee&&e&&(0,J.jsx)($s,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Ee.entry.name,e,t),onClose:()=>De(null),tags:e.tags[Ee.entry.name]??[],x:Ee.x,y:Ee.y}),Pe&&(0,J.jsx)(Mo,{canPaste:Je,directory:Lt,platform:te,allowCompression:!0,menu:Pe,onAddToTray:w,onAddFavorite:ne,onRemoveFavorite:T,favoritePaths:E,onExtractArchive:re,onArchiveCreated:tn,onClose:Ht,onCompressTo:(e,t)=>U({paths:e,name:t}),onCopy:rn,onCreateFile:e=>void on(e),onCreateFolder:e=>void on(null,e),onDelete:dn,onOpen:d,onOpenFile:f,onPaste:an,onRefresh:en,onRename:e=>{let t=ft.find(t=>t.entry.fullPath===e)?.entry;t&&sn(t)},shortcuts:h,target:q}),nn,mn]}),bn]})}function Nl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Pl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Fl(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Vl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Pl.compare(String(r),String(i));return t.sortDescending?-o:o})}var Il=An.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Mn(t.entry.name)===e})),Ll=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...Il.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function Rl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function zl(e){return Math.max(24,Math.min(e-56,160))}var Bl={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Vl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`internet_shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`folder_link`):t(`symbolic_link`);if(e.isDirectory)return t(`folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Bl[fc(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`file`)}function Hl(e,t,n,r){switch(e){case`type`:return Vl(t,r);case`size`:return Wl(t,n.folderSizes);case`modified`:return M(t.modified);case`created`:return M(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:r(`broken`);default:return``}}function Ul({name:e,ranges:t}){if(!t||t.length===0)return(0,J.jsx)(J.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,J.jsx)(Uu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,J.jsx)(J.Fragment,{children:n})}function Wl(e,t){if(!e.isDirectory)return S(e.size);let n=t[e.name];return n===void 0?`—`:S(n)}function Gl({entry:e,size:t=18}){let n=o(),r=(0,z.useRef)(null),[i,a]=(0,z.useState)(!1);(0,z.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let s=pn(i?e.fullPath:null,e.isDirectory,t>32),c=G(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,J.jsxs)(Ql,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,J.jsx)(pc,{name:e.iconSource.slice(5),size:t}):c?(0,J.jsx)(`img`,{alt:``,height:t,src:c,width:t}):s?(0,J.jsx)(`img`,{alt:``,height:t,src:s,width:t}):e.isDirectory?(0,J.jsx)(yi,{size:t}):(0,J.jsx)(pc,{name:fc(e.name),size:t}),e.isEncrypted&&(0,J.jsx)($l,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,J.jsx)(Aa,{size:Math.max(8,Math.round(t*.52))})})]})}function Kl({template:e,columns:t}){return(0,J.jsx)(J.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,J.jsxs)(Cu,{style:{gridTemplateColumns:e},children:[(0,J.jsxs)(Eu,{children:[(0,J.jsx)(wu,{style:{flexShrink:0,height:18,width:18}}),(0,J.jsx)(wu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,J.jsx)(wu,{style:{width:t%2==0?44:92}},t))]},r))})}function ql({size:e}){return(0,J.jsx)(J.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,J.jsxs)(Lu,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,J.jsx)(Ru,{children:(0,J.jsx)(wu,{style:{height:e,width:e}})}),(0,J.jsx)(Bu,{children:(0,J.jsx)(wu,{style:{height:9,width:`${t}%`}})})]},n))})}var Jl=(0,z.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:ee,onOpen:_,onOpenFile:v}){let y=o(),b=Ln(),x=!e.entry.isDirectory&&Nn(e.entry.name),C=(0,z.useRef)(null),[w,te]=(0,z.useState)(!1);(0,z.useEffect)(()=>{if(!x||w)return;let e=C.current;if(!e)return;if(!(`IntersectionObserver`in window)){te(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(te(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[x,w]);let ne=K(x&&w?e.entry.fullPath:null,192,e.entry.modified),[T,E]=(0,z.useState)(!1),re=x&&ne!==null&&!T,D=e.entry.fullPath,O=t=>{e.entry.isDirectory?_(D,Kt(t)):v?.(D,Kt(t))};return(0,J.jsxs)(Lu,{$current:t,$dim:n,$image:re,$selected:c,onClick:e=>{h(e,D),u&&O(e)},onContextMenu:e=>ee(e,D),onDoubleClick:e=>{u||O(e)},ref:e=>{C.current=e,t&&s&&(s.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":D,draggable:!d,children:[l&&(0,J.jsx)(su,{$checked:c,onClick:e=>{e.stopPropagation(),g(D)},onDoubleClick:e=>e.stopPropagation(),title:y(c?`deselect`:`select`),type:`button`,children:c&&(0,J.jsx)(Ii,{size:10})}),(0,J.jsx)(Ru,{children:re?(0,J.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>E(!0),src:ne}):(0,J.jsx)(zu,{children:e.place&&b.useIcons?(0,J.jsx)(Xs,{place:e.place,size:r}):(0,J.jsx)(Gl,{entry:e.entry,size:r})})}),(0,J.jsxs)(Bu,{children:[d?(0,J.jsx)(Xl,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:d.value}):(0,J.jsx)(Vu,{$broken:e.entry.linkValid===!1,children:(0,J.jsx)(Ul,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,J.jsxs)(Ou,{title:y(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,J.jsx)(Aa,{size:9}),y(`encrypted`)]}),e.cut&&(0,J.jsxs)(ku,{title:y(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,J.jsx)(Ca,{size:9}),y(`cut`)]}),(0,J.jsx)(Hu,{children:e.entry.isDirectory?i===void 0?Vl(e.entry,y):y(`type_count_items`,{type:Vl(e.entry,y),count:i}):y(`type_size`,{type:Vl(e.entry,y),size:S(e.entry.size)})}),a&&e.entry.linkTarget&&(0,J.jsxs)(ju,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,J.jsx)(La,{size:9}),(0,J.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Yl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onSelect:f,onToggle:p,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:ee,onRenameCommit:_,onRenameCancel:v}){let y=o();return(0,J.jsx)(J.Fragment,{children:e.map(e=>(0,J.jsxs)(vu,{children:[(0,J.jsxs)(yu,{children:[y(e.label),(0,J.jsx)(bu,{children:e.rows.length}),(0,J.jsx)(xu,{})]}),(0,J.jsx)(Su,{$size:t,children:e.rows.map(e=>(0,J.jsx)(Jl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:zl(t),innerRef:s,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:f,onToggle:p,openOnSingleClick:u,onRenameCancel:v,onRenameChange:ee,onRenameCommit:_,renaming:d?.path===e.entry.fullPath?d:null,row:e,selected:c.has(e.entry.fullPath),showCheckboxes:l,showTarget:r},e.entry.fullPath))})]},e.id))})}function Xl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,z.useRef)(null);return(0,z.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,J.jsx)(Au,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Zl=(0,z.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:s,iconSize:c,height:l,template:u,visible:d,listing:f,innerRef:p,renaming:m,onSelect:h,onToggle:g,onContextMenu:ee,onOpen:_,onTagEdit:v,onRenameChange:y,onRenameCommit:b,onRenameCancel:x}){let S=o(),C=Ln(),w=e.entry.fullPath;return(0,J.jsxs)(Tu,{$current:t,$dim:n,$height:l,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{h(t,w),s&&_(e.entry,t)},onContextMenu:e=>ee(e,w),onDoubleClick:t=>{s||_(e.entry,t)},ref:t?p:void 0,style:{gridTemplateColumns:u},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":w,draggable:!m,children:[(0,J.jsxs)(Eu,{children:[i&&(0,J.jsx)(ou,{$checked:r,onClick:e=>{e.stopPropagation(),g(w)},onDoubleClick:e=>e.stopPropagation(),title:S(r?`deselect`:`select`),type:`button`,children:r&&(0,J.jsx)(Ii,{size:10})}),e.place&&C.useIcons?(0,J.jsx)(Ql,{children:(0,J.jsx)(Xs,{place:e.place,size:c})}):(0,J.jsx)(Gl,{entry:e.entry,size:c}),m?(0,J.jsx)(Xl,{onCancel:x,onChange:y,onCommit:b,value:m.value}):(0,J.jsx)(Du,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,J.jsx)(Ul,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,J.jsxs)(Ou,{title:S(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,J.jsx)(Aa,{size:9}),S(`encrypted`)]}),e.cut&&(0,J.jsxs)(ku,{title:S(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,J.jsx)(Ca,{size:9}),S(`cut`)]}),a&&e.entry.linkTarget&&(0,J.jsxs)(ju,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,J.jsx)(La,{size:9}),(0,J.jsx)(`span`,{children:e.entry.linkTarget})]})]}),d.map(t=>(0,J.jsx)(Mu,{children:t.id===`tags`?(0,J.jsx)(Nu,{onClick:t=>{t.stopPropagation(),v(e.entry,t.clientX,t.clientY)},title:S(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=f.tagColors?.[e]??`#64748b`;return(0,J.jsx)(Pu,{$color:t,$ink:Qs(t),children:e},e)}):(0,J.jsx)(Fu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,J.jsx)(Iu,{children:S(`broken`)}):Hl(t.id,e.entry,f,S)},t.id))]})}),Ql=_.span`
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
`,$l=_.span`
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
`,eu=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,tu=_.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,nu=_.span`
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
`,ru=_.button`
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
`,iu=_.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,au=_.div`
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
`,ou=_.button`
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
`,su=_(ou)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,cu=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,lu=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,uu=_.div`
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
`,du=_.button`
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
`,fu=_.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,pu=_.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,mu=_.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,hu=_.div`
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
`,gu=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,_u=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,vu=_.section`
    & + & {
        margin-top: 22px;
    }
`,yu=_.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,bu=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,xu=_.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Su=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Cu=_.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,wu=_.span`
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
`,Tu=_.div`
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
`,Eu=_.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Du=_.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ou=_.span`
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
`,ku=_.span`
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
`,Au=_.input`
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
`,ju=_.span`
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
`,Mu=_.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nu=_.button`
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
`,Pu=_.span`
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
`,Fu=_.span`
    color: var(--text-muted);
    font-size: 11px;
`,Iu=_.span`
    color: #fca5a5;
`,Lu=_.div`
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
`,Ru=_.div`
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
`,zu=_.span`
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
`,Bu=_.div`
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
`,Vu=_.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Hu=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Uu=_.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Wu=_.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Gu=_.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Ku=_.p`
    font-size: 13px;
    color: var(--text-muted);
`,qu=_.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Ju=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Yu=`/assets/bloom-BpfZWiaG.mp4`,Xu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Zu=`/assets/drift-BRBSQL2_.mp4`,Qu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,$u=`/assets/ember-CtSz0YxR.mp4`,ed=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],td=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],nd=[{id:`builtin:video:drift`,name:`drift`,url:Zu,poster:Xu},{id:`builtin:video:ember`,name:`ember`,url:$u,poster:Qu},{id:`builtin:video:bloom`,name:`bloom`,url:Yu,poster:Ju}],rd=td.map(e=>({...e,variants:ed.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:ld(ud(e.id,t,!1)),lightUrl:ld(ud(e.id,t,!0))}))})),id=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>ed.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:ld(dd(e.id,t,!1)),lightUrl:ld(dd(e.id,t,!0))}))),ad=new Map([...rd.flatMap(e=>e.variants),...id].map(e=>[e.id,e])),od=new Map(nd.map(e=>[e.id,e]));function sd(e,t=`dark`){if(od.has(e))return od.get(e).url;let n=ad.get(e)??ad.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function cd(e){return od.has(e)}function ld(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function ud(e,t,n){return e===`dunes`?vd(t,n):e===`tide`?yd(t,n):_d(t,n)}function dd(e,t,n){return e===`skyline`?pd(t,n):e===`orbit`?md(t,n):fd(t,n)}function fd({accent:e,secondary:t},n){let r=gd(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=gd(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=gd(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=gd(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=gd(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${gd(t,`#ffffff`,n?.45:.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${a}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${o}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${c}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function pd({accent:e,secondary:t},n){let r=gd(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=gd(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=gd(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=gd(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${gd(e,n?`#d5deea`:`#040208`,n?.7:.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function md({accent:e,secondary:t},n){let r=gd(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=gd(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=gd(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${gd(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${r}"/>
            <stop offset="1" stop-color="${i}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${gd(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${gd(e,n?`#cfd9e6`:`#08050f`,n?.55:.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${gd(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function hd(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function gd(e,t,n){let[r,i,a]=hd(e),[o,s,c]=hd(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function _d({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${gd(e,n?`#f2f6ff`:`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${gd(t,n?`#eef2ff`:`#070b1c`,n?.86:.85)}"/>
            <stop offset="1" stop-color="${gd(e,n?`#e8f0fb`:`#04060c`,n?.9:.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${gd(e,t,.5)}" opacity="${n?.26:.42}" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="${n?.32:.5}" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="${n?.3:.42}" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="${n?.26:.36}" filter="url(#soft2)"/>
</svg>`}function vd({accent:e,secondary:t},n){let r=gd(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=gd(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=gd(e,t,.25),o=gd(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=gd(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=gd(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1480" cy="250" r="110" fill="${gd(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${c}" opacity="${n?.5:.75}"/>
</svg>`}function yd({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${gd(e,n?`#e6f7fb`:`#02070a`,n?.88:.9)}"/>
            <stop offset="0.5" stop-color="${gd(t,n?`#eefaf8`:`#03100f`,n?.85:.82)}"/>
            <stop offset="1" stop-color="${gd(e,n?`#dff2f7`:`#020609`,n?.9:.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${gd(e,t,.4)}" opacity="${n?.34:.5}" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var bd=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function xd(e){return bd.test(e)}function Sd({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):O(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=vn(i),o=n?.startsWith(`builtin:`)?sd(n,t):r??a,s=r===null?i===null?n!==null&&cd(n):xd(i):xd(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,J.jsxs)(Cd,{"aria-hidden":!0,children:[s?(0,J.jsx)(Td,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,J.jsx)(wd,{src:o,style:{filter:c}}),(0,J.jsx)(Ed,{})]})}var Cd=_.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,wd=_.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Td=_.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Ed=_.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function Dd({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let s=o(),c=(0,z.useRef)(null),[l,u]=(0,z.useState)(()=>Math.max(1,Math.ceil(n))),d=e??`delete`;return(0,z.useEffect)(()=>{c.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));u(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,no.createPortal)((0,J.jsx)(jd,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,J.jsxs)(Md,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(Nd,{children:s(`protected_folder`)}),(0,J.jsx)(Pd,{children:s(`these_paths_are_protected_by_the_safety_settings`)}),(0,J.jsx)(Fd,{children:t.map(e=>(0,J.jsxs)(Id,{children:[(0,J.jsx)(Ld,{children:e.path}),(0,J.jsx)(Rd,{children:s(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,J.jsx)(zd,{children:Od(s,d,r??!1)}),(0,J.jsx)(Bd,{children:kd(s,d)}),(0,J.jsx)(Vd,{children:s(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,J.jsxs)(Hd,{children:[(0,J.jsx)(Ud,{onClick:i,ref:c,type:`button`,children:s(`cancel`)}),(0,J.jsx)(Wd,{disabled:l>0,onClick:a,type:`button`,children:l>0?Ad(s,d,l):Ad(s,d,0)})]})]})}),document.body)}function Od(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function kd(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function Ad(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var jd=_.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${vo}
`,Md=_.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${po}
`,Nd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Pd=_.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Fd=_.div`
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
`,Id=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Ld=_.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Rd=_.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,zd=_.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Bd=_.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Vd=_.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Hd=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Ud=_.button`
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
`,Wd=_.button`
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
`;function Gd(){let e=o(),[t,n]=(0,z.useState)(null),r=(0,z.useRef)(null),i=(0,z.useRef)(null);(0,z.useEffect)(()=>(Ua(e=>new Promise(t=>{r.current=t,n(e)})),()=>Ua(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,z.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,no.createPortal)((0,J.jsx)(Kd,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,J.jsxs)(qd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsx)(Jd,{children:e(`notice`)}),(0,J.jsx)(Yd,{children:t}),(0,J.jsx)(Xd,{children:(0,J.jsx)(Zd,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Kd=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${vo}
`,qd=_.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${po}
`,Jd=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Yd=_.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Xd=_.div`
    display: flex;
    justify-content: flex-end;
`,Zd=_.button`
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
`;function Qd(){let e=o(),[t,n]=(0,z.useState)(null),[r,i]=(0,z.useState)(``),a=(0,z.useRef)(null),s=(0,z.useRef)(null);(0,z.useEffect)(()=>(Ga((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ga(null)),[]),(0,z.useEffect)(()=>{t&&window.setTimeout(()=>s.current?.focus(),0)},[t]);let c=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let l=()=>{r.length>0&&c(r)};return(0,no.createPortal)((0,J.jsx)($d,{onPointerDown:e=>{e.target===e.currentTarget&&c(null)},children:(0,J.jsxs)(ef,{role:`dialog`,"aria-modal":`true`,children:[(0,J.jsx)(tf,{children:e(`archive_password`)}),(0,J.jsx)(nf,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,J.jsx)(rf,{title:t.archive,children:t.archive}),(0,J.jsx)(af,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),l()):e.key===`Escape`&&(e.preventDefault(),c(null))},ref:s,spellCheck:!1,type:`password`,value:r}),(0,J.jsxs)(of,{children:[(0,J.jsx)(sf,{onClick:()=>c(null),type:`button`,children:e(`cancel`)}),(0,J.jsx)(cf,{disabled:r.length===0,onClick:l,type:`button`,children:e(`ok`)})]})]})}),document.body)}var $d=_.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${vo}
`,ef=_.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${po}
`,tf=_.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,nf=_.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,rf=_.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,af=_.input`
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
`,of=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,sf=_.button`
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
`,cf=_(sf)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function lf({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:s,compact:c=!1,placeholder:l,onQuery:u,onPrevious:d,onNext:f,onMatchCase:p,onRegex:m,onMode:h,onClose:g,onSelectMatches:ee}){let _=o(),v=(0,z.useRef)(null),y=l??_(`search_this_folder`);(0,z.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[s]);let b=e=>{e(),v.current?.focus()};return(0,J.jsxs)(uf,{children:[(0,J.jsx)(Si,{}),(0,J.jsx)(df,{"aria-label":y,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?d():f()),e.key===`Escape`&&(e.preventDefault(),g())},placeholder:y,ref:v,spellCheck:!1,value:e}),!c&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(ff,{children:i===0?`0/0`:`${a+1}/${i}`}),ee&&(0,J.jsx)(pf,{disabled:i===0,onClick:ee,title:_(`select_all_matches`),type:`button`,children:(0,J.jsx)(Ii,{size:12})}),(0,J.jsx)(pf,{$chevron:!0,onClick:()=>b(d),title:_(`previous_match_shift_enter`),type:`button`,children:(0,J.jsx)(Oi,{size:12})}),(0,J.jsx)(pf,{$chevron:!0,$down:!0,onClick:()=>b(f),title:_(`next_match_enter`),type:`button`,children:(0,J.jsx)(Oi,{size:12})})]}),(0,J.jsx)(mf,{$on:n,onClick:()=>b(p),title:_(`match_case`),type:`button`,children:`Aa`}),(0,J.jsx)(mf,{$on:r,onClick:()=>b(m),title:_(`regular_expression`),type:`button`,children:`.*`}),!c&&(0,J.jsx)(hf,{$on:t===`hide`,onClick:()=>b(h),title:_(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,J.jsx)(zi,{size:12}):(0,J.jsx)(Ri,{size:12})}),(0,J.jsx)(pf,{onClick:g,title:_(`close_search_esc`),type:`button`,children:(0,J.jsx)(Li,{size:12})})]})}var uf=_.div`
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
    ${go}
`,df=_.input`
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
`,ff=_.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,pf=_.button`
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
`,mf=_.button`
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
`,hf=_(mf)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function gf(e,t,n,r,i=[]){(0,z.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=Sn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function _f({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=o(),a=(0,z.useRef)(null),s=(0,z.useRef)(null),[c,l]=(0,z.useState)(null);return(0,z.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();l({top:t.bottom+6,left:t.left})},[]),(0,z.useLayoutEffect)(()=>{if(!c||!s.current)return;let e=s.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,c.top-e.height-12):c.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):c.left;(t!==c.top||n!==c.left)&&l({top:t,left:n})},[c]),(0,z.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(`span`,{ref:a,style:{display:`none`}}),c&&(0,no.createPortal)((0,J.jsxs)(vf,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:s,style:{position:`fixed`,top:c.top,left:c.left},children:[Object.keys(Gs).map(n=>(0,J.jsx)(yf,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Gs[n](16)},n)),(0,J.jsx)(yf,{onClick:async()=>{let e=await Ba([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,J.jsx)(Ti,{size:13})}),r&&(0,J.jsx)(yf,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,J.jsx)(Li,{size:12})})]}),document.body)]})}var vf=_.div`
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
    ${mo}
    transform-origin: top left;
`,yf=_.button`
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
`;function bf({source:e,poster:t,theme:n}){let r=O(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=vn(e.startsWith(`builtin:`)||r?null:e,0,i?`.${i}`:``),o=t??sd(e,n)??(r?e:a),s=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return o?s?(0,J.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o}):(0,J.jsx)(`img`,{alt:``,src:o}):null}function xf({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,z.useRef)(null),l=(0,z.useRef)(null),u=(0,z.useRef)(!1),[d,f]=(0,z.useState)(null),[p,m]=(0,z.useState)(null),[h,g]=(0,z.useState)(0),ee=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?f({width:1920,height:1080}):n>0&&r>0&&f({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},_=p&&d?Math.min(p.height,n*(p.width/d.width)):0,v=Math.max(0,(p?.height??0)-_);(0,z.useEffect)(()=>{p&&d&&!u.current&&(u.current=!0,g(Math.min(v,Math.max(0,r*v))))},[p,d,v,r]),(0,z.useEffect)(()=>{let e=()=>ee();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,z.useEffect)(()=>{let e=window.requestAnimationFrame(ee);return()=>window.cancelAnimationFrame(e)},[e,t]);let y=e=>{l.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},b=e=>{let t=l.current;t&&g(Math.min(v,Math.max(0,t.top+e.clientY-t.y)))},x=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,J.jsx)(Hf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,J.jsxs)(Uf,{children:[(0,J.jsxs)(Wf,{children:[(0,J.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,J.jsx)(Zf,{onClick:i,title:s(`cancel`),type:`button`,children:(0,J.jsx)(Li,{size:12})})]}),(0,J.jsx)(Gf,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,J.jsxs)(Kf,{children:[t?(0,J.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{ee(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,J.jsx)(`img`,{alt:``,draggable:!1,onLoad:ee,ref:e=>{c.current=e},src:e}),_>0&&(0,J.jsx)(qf,{onPointerCancel:x,onPointerDown:y,onPointerMove:b,onPointerUp:x,style:{height:_,top:h},children:(0,J.jsx)(Jf,{})})]}),(0,J.jsxs)(Yf,{children:[(0,J.jsx)(Xf,{onClick:i,type:`button`,children:s(`cancel`)}),(0,J.jsx)(Xf,{$primary:!0,onClick:()=>a(v>0?h/v:r),type:`button`,children:s(`save`)})]})]})})}var Sf=150,Cf=120,wf=200,Tf=_.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Ef=_.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Df=_.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${wf}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${wf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(wf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(wf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(wf*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${wf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(wf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(wf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(wf*.18)}px),
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
`,Of=_.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Sf}px);
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
`,kf=_.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,Af=_.section`
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
`,jf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Mf=_.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Nf=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Pf=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Ff=_.input`
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
`,If=_.button`
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
`,Lf=_.div`
    position: relative;
    width: 132px;
    height: 72px;
`,Rf=_.button`
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
`,zf=_.button`
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
`,Bf=_.span`
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
`,Vf=_.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Hf=_.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Uf=_.div`
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
`,Wf=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Gf=_.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,Kf=_.div`
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
`,qf=_.div`
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
`,Jf=_.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,Yf=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Xf=_.button`
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
`,Zf=_.button`
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
`,Qf=_.button`
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
`,$f=_.div`
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
`,ep=_.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,tp=_.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,np=_.button`
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
`,rp=_.div`
    position: relative;
    display: inline-flex;
`,ip=_.div`
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
`,ap=_.button`
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
`,op=_.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,sp=_.section`
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
`,cp=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,lp=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,up=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,dp=_.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,fp=_.input`
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
`,pp=_.button`
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
`,mp=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,hp=_.div`
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
`,gp=_.span`
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
`,_p=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,vp=_.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,yp=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,bp=_.button`
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
`,xp=_.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Sp=_.button`
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
`,Cp=_.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,wp=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Tp=_.div`
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
`,Ep=_.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Dp=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,Op=_.button`
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
`,kp=_.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,Ap=_.button`
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
`,jp=_.button`
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
`,Mp=_.button`
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
`,Np=_.span`
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
`,Pp=_.button`
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
`,Fp=_.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Ip=_.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Lp=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Rp=_.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,zp=_.input`
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
`,Bp=_.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Vp=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Hp=_.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Up=_.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Wp=_.button`
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
`;function Gp({theme:e,places:t,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:u,onRecentCleared:d,onLayoutChanged:f,onHistoryChanged:p,onDrivesChanged:m,visibilityVersion:h=0,find:g,onSearchMatches:ee,readOnly:_=!1,onPick:v,onSelectionChange:y,onAddToTray:C,onAddFavorite:w,onRemoveFavorite:te,favoritePaths:ne,onExtractArchive:T,settingsVersion:E=0,platform:re}){let D=o(),k=Ln(),[A,j]=(0,z.useState)(!1),[M,se]=(0,z.useState)(null),N=M?.overviewBanner??null,ce=N?.startsWith(`builtin:`)??!1,F=N?.startsWith(`url:`)?N.slice(4):O(N)?N:null,I=ce||F?``:N??``,le=ce?``:F?F.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:I.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,ue=ce?cd(N):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(le),de=vn(I.length>0?I:null,0,le?`.${le}`:``),fe=N?sd(N,e)??F??de:null,[pe,me]=(0,z.useState)(``),[he,L]=(0,z.useState)(null),[R,ge]=(0,z.useState)(!1),[B,_e]=(0,z.useState)(null),[ve,ye]=(0,z.useState)(null),[be,Ce]=(0,z.useState)(null),[we,Te]=(0,z.useState)([]),[Ee,De]=(0,z.useState)(null),[Oe,ke]=(0,z.useState)(``),[V,je]=(0,z.useState)(null),[Me,H]=(0,z.useState)(null),Ne=bl(`overview`),[Pe,Fe]=(0,z.useState)(null),[Ie,Le]=(0,z.useState)(null),U=(0,z.useRef)(null),Re=(0,z.useRef)(null),ze=(0,z.useRef)(null),Be=(0,z.useRef)(null),Ve=(0,z.useRef)(null),We=Ie??M?.overviewBannerHeight??220,[Ge,Ke]=(0,z.useState)(0),[qe,Je]=(0,z.useState)(null),Xe=Math.min(1,Math.max(0,M?.overviewBannerOffset??.3)),Ze=We+wf,Qe=qe&&Ge>0?qe.height*(Ge/qe.width):Ze,$e=Qe>0&&Qe<Ze+240?(Ze+240)/Qe:1,et=Math.max(1,Math.round(Ge*$e)),tt=Math.max(0,Qe*$e-Ze),nt=Math.min(Cf,tt/2,Math.max(20,We*.42)),rt=nt+Xe*Math.max(0,tt-nt*2),[at,ot]=(0,z.useState)(!1),st=(e,t=!1)=>v?(je(e),H({path:e,isDirectory:t}),y?.([e]),!0):!1,ct=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),je(t),H({path:t,isDirectory:n}),Fe({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,z.useEffect)(()=>(pl(`overview`,Me?(e,t)=>Fe({x:e,y:t,target:Me}):null),()=>pl(`overview`,null)),[Me]);let lt=(e,t)=>c(e,t);(0,z.useEffect)(()=>{Ye().then(se,()=>se(null))},[E]),(0,z.useEffect)(()=>{if(l.available)return qc().then(Te,()=>void 0),l.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&Te(t.data.peers)})},[]),(0,z.useEffect)(()=>{let e=ze.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,z.useEffect)(()=>{if(ce&&!ue){Je({width:1920,height:1080});return}Je(null);let e=Ve.current;e?.complete&&e.naturalWidth>0&&Je({width:e.naturalWidth,height:e.naturalHeight})},[N,ce,ue]),(0,z.useEffect)(()=>{let e=Be.current;if(!e)return;let t=()=>Ke(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[M?.overviewBanner]),(0,z.useEffect)(()=>{if(!he)return;let e=()=>L(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||L(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[he]),(0,z.useEffect)(()=>{if(!R)return;let e=()=>ge(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[R]);let ut=qs(M),dt=ut.map(e=>e.id),ft=(0,z.useRef)(null),pt=e=>he?.kind===`panel`&&he.id===e,mt=e=>he?.kind===`place`&&he.id===e;(0,z.useEffect)(()=>{if(!l.available)return;let e=ut.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[ut.map(e=>e.path??e.id).join(`|`),a]),gf(ft,g??null,`section`,ee??(()=>void 0),[r.length,t.length,n.length,h]);let ht=async(e,t)=>{let n={...M?.placeIcons};t?n[e]=t:delete n[e],L(null),await W({placeIcons:n}),u(await Ae())},_t=async(e,t)=>{let n={...M?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],ye(null),await W({placeNames:n}),u(await Ae())},vt=e=>{Ce(null),_e({drive:e,label:e.label||`Local Disk`})},yt=async()=>{if(!B)return;let{drive:e,label:t}=B;_e(null);let n=await xe(e.name,t.trim());n.ok?(Ce(null),m?.()):Ce(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},bt=M?.overviewColumns??1,W=async e=>{if(!M)return;let t={...M,...e,overviewPanels:e.overviewPanels??dt,overviewHidden:[]};se(await it(t)),f?.()},xt=async()=>{await W({overviewPanels:[...Hs],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),u(await Ae()),j(!1)},St=async()=>{let e=await Ba([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=M?.overviewBanners??[];await W({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},Ct=async()=>{let e=pe.trim();if(!M||!O(e))return;let t=M.overviewBanners??[];me(``),await W({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},wt=()=>void W({overviewBanner:null}),Tt=e=>void W({overviewBanners:(M?.overviewBanners??[]).filter(t=>t!==e),...M?.overviewBanner===e||M?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),Et=e=>{U.current={y:e.clientY,height:We},e.currentTarget.setPointerCapture(e.pointerId)},Dt=e=>{let t=U.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Re.current=n,Le(n)},Ot=e=>{U.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Re.current!==null&&(W({overviewBannerHeight:Re.current}),Re.current=null)},kt=(e,t)=>{let n=dt.indexOf(e),r=n+t;if(n<0||r<0||r>=dt.length)return;let i=[...dt];[i[n],i[r]]=[i[r],i[n]],W({overviewPanels:i})},At=(e,t)=>{let n={...M?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],W({overviewTitles:n})},jt=(e,t)=>void W({overviewViews:{...M?.overviewViews,[e]:t}}),Mt=e=>{let t=M?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);W({overviewPinned:ut.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},Nt=e=>{L(null);let t=t=>{let n={...t};return delete n[e],n},n=M?.overviewPinned??ut.filter(e=>e.pinned).map(e=>e.id);W({overviewPanels:dt.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(M?.overviewTitles),overviewViews:t(M?.overviewViews),overviewIcons:t(M?.overviewIcons),panelPlaces:t(M?.panelPlaces)})},Pt=(e,t)=>{let n={...M?.overviewIcons};t?n[e]=t:delete n[e],L(null),W({overviewIcons:n})},Ft=async e=>{if(!M)return;if(e===`folder`){let e=await za();if(!e)return;let t=`folder:${e}`;dt.includes(t)||await W({overviewPanels:[...dt,t]});return}if(e===`quick`){let e=2;for(;dt.includes(`quick:${e}`);)e+=1;await W({overviewPanels:[...dt,`quick:${e}`]});return}let t=e;for(let n=2;dt.includes(t);n+=1)t=`${e}:${n}`;await W({overviewPanels:[...dt,t]})},It=async e=>{let n=await za();if(!n)return;if(e.id===`quick`){await W({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),u(await Ae());return}let r=e.places??[];r.some(e=>P(e,n))||await W({panelPlaces:{...M?.panelPlaces,[e.id]:[...r,n]}})},Lt=async(e,n)=>{L(null),e.id===`quick`?(await W({quickAccess:t.filter(e=>!P(e.path,n)).map(e=>e.path)}),u(await Ae())):await W({panelPlaces:{...M?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!P(e,n))}})},Rt=async(e,n,r)=>{if(P(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>P(e,n)),o=i.findIndex(e=>P(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await W({quickAccess:s}),u(await Ae())):await W({panelPlaces:{...M?.panelPlaces,[e.id]:s}})},zt=(e,t)=>({draggable:A,onDragOver:e=>{A&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{A&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{A&&(n.preventDefault(),Rt(e,n.dataTransfer.getData(`text/plain`),t))}}),Bt=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>P(t.path,e));return{name:M?.placeNames?.[e]??n?.name??(b(e)||e),path:e,kind:`folder`,icon:n?.icon??M?.placeIcons?.[e]??null}}),Vt=e=>{if(r.length===0)return(0,J.jsx)(Ip,{children:D(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,i);return e.view===`grid`?(0,J.jsx)(mp,{children:t.map(e=>{let t=Rn(k,e.path);return(0,J.jsxs)(hp,{$plain:!1,$selected:V===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Kt(t)):Se(e.path))},onDoubleClick:()=>v?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,children:[(0,J.jsx)(gp,{children:t&&k.useIcons?(0,J.jsx)(Xs,{place:t,size:18}):(0,J.jsx)(mc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(_p,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(vp,{children:e.path})]})]},e.path)})}):(0,J.jsx)(yp,{children:t.map(e=>{let t=Rn(k,e.path);return(0,J.jsxs)(bp,{$selected:V===e.path,onClick:t=>{st(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Kt(t)):Se(e.path))},onDoubleClick:()=>v?.(e.path),onContextMenu:t=>ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&k.useIcons?(0,J.jsx)(Xs,{place:t,size:15}):(0,J.jsx)(mc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,J.jsxs)(xp,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(vp,{children:e.path})]})]},e.path)})})},Ht=e=>{let t=M?.favorites??[],n=async e=>{await W({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>P(t.path,e))&&await W({favorites:[...t,{path:e,name:b(e)||e,isDirectory:n}]})},i=(e,t,n)=>{A||st(t,n)||(n?c(t,Kt(e)):Se(t))},a=A?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Sp,{$row:e.view===`list`,onClick:()=>void Ba().then(e=>r(e,!1)),title:D(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,J.jsx)(Ti,{size:15}):(0,J.jsx)(gp,{children:(0,J.jsx)(Ti,{size:15})}),e.view===`list`?(0,J.jsxs)(xp,{children:[(0,J.jsx)(`strong`,{children:D(`add_file`)}),(0,J.jsx)(vp,{children:D(`pin_any_file_here`)})]}):(0,J.jsxs)(_p,{children:[(0,J.jsx)(`strong`,{children:D(`add_file`)}),(0,J.jsx)(vp,{children:D(`pin_any_file_here`)})]})]}),(0,J.jsxs)(Sp,{$row:e.view===`list`,onClick:()=>void za().then(e=>r(e,!0)),title:D(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,J.jsx)(Ti,{size:15}):(0,J.jsx)(gp,{children:(0,J.jsx)(Ti,{size:15})}),e.view===`list`?(0,J.jsxs)(xp,{children:[(0,J.jsx)(`strong`,{children:D(`add_folder`)}),(0,J.jsx)(vp,{children:D(`pin_any_folder_here`)})]}):(0,J.jsxs)(_p,{children:[(0,J.jsx)(`strong`,{children:D(`add_folder`)}),(0,J.jsx)(vp,{children:D(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!A?(0,J.jsx)(Ip,{children:D(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,J.jsxs)(mp,{children:[t.map(e=>{let t=Rn(k,e.path);return(0,J.jsxs)(hp,{$plain:A,$selected:V===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!A&&v?.(e.path),onContextMenu:t=>!A&&ct(t,e.path,e.isDirectory),title:e.path,children:[A&&(0,J.jsx)(jp,{onClick:t=>{t.stopPropagation(),n(e.path)},title:D(`remove_from_favorites`),type:`button`,children:(0,J.jsx)(Li,{size:11})}),(0,J.jsx)(gp,{children:t&&k.useIcons?(0,J.jsx)(Xs,{place:t,size:18}):(0,J.jsx)(mc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(_p,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(vp,{children:e.path})]})]},e.path)}),a]}):(0,J.jsxs)(yp,{children:[t.map(e=>{let t=Rn(k,e.path);return(0,J.jsxs)(bp,{$selected:V===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!A&&v?.(e.path),onContextMenu:t=>!A&&ct(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&k.useIcons?(0,J.jsx)(Xs,{place:t,size:15}):(0,J.jsx)(mc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,J.jsxs)(xp,{children:[(0,J.jsx)(`strong`,{children:t?.name||e.name}),(0,J.jsx)(vp,{children:e.path})]}),A&&(0,J.jsx)(jp,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:D(`remove_from_favorites`),type:`button`,children:(0,J.jsx)(Li,{size:11})})]},e.path)}),a]})},Wt=e=>{if(n.length===0)return(0,J.jsx)(Ip,{children:D(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=B?.drive.name===t.name,i=r?(0,J.jsx)(Kp,{maxLength:32,onCancel:()=>_e(null),onChange:e=>_e({...B,label:e}),onCommit:()=>void yt(),value:B?.label??``}):(0,J.jsx)(J.Fragment,{children:ae(t)}),a=!r&&A&&(0,J.jsx)(Mp,{onClick:e=>{e.stopPropagation(),vt(t)},title:D(`rename_volume`),type:`button`,children:(0,J.jsx)(na,{size:11})}),o=(0,J.jsx)(vp,{children:D(`free_free_of_total`,{free:S(t.freeSpace),total:S(t.totalSize)})});return e.view===`grid`?(0,J.jsxs)(hp,{$plain:!1,$selected:V===t.name,onClick:e=>{!r&&st(t.name,!0)||r||c(t.name,Kt(e))},onDoubleClick:()=>!r&&v?.(t.name),onContextMenu:e=>!r&&ct(e,t.name,!0),title:t.name,children:[(0,J.jsx)(gp,{children:(0,J.jsx)(xi,{size:18})}),(0,J.jsxs)(_p,{children:[(0,J.jsxs)(`strong`,{children:[i,r&&ie(t),a]}),o]})]},t.name):(0,J.jsxs)(bp,{as:r?`div`:`button`,$selected:V===t.name,onClick:r?void 0:e=>{st(t.name,!0)||c(t.name,Kt(e))},onDoubleClick:r?void 0:()=>v?.(t.name),onContextMenu:r?void 0:e=>ct(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,J.jsx)(xi,{size:18}),(0,J.jsxs)(xp,{children:[(0,J.jsxs)(`strong`,{children:[i,r&&ie(t),a]}),o]}),(0,J.jsx)(Cp,{children:(0,J.jsx)(wp,{$used:n,$tone:x(n)})})]},t.name)});return e.view===`grid`?(0,J.jsx)(mp,{children:t}):(0,J.jsx)(yp,{children:t})},Gt=()=>{let e=async e=>{De(e.id);try{await Jc(e.host,e.port)}finally{De(null)}},t=async()=>{let e=Oe.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){De(`manual`);try{await Jc(n,r)}finally{De(null)}}};return(0,J.jsxs)(Lp,{children:[(0,J.jsxs)(Rp,{children:[(0,J.jsx)(zp,{onChange:e=>ke(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:D(`address_e_g_192_168_1_20_45701`),value:Oe}),(0,J.jsx)(Wp,{disabled:Ee!==null||!Oe.includes(`:`),onClick:()=>void t(),type:`button`,children:D(Ee===`manual`?`pairing`:`pair_by_address`)})]}),we.length===0&&(0,J.jsx)(Ip,{children:D(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),we.map(t=>(0,J.jsxs)(Bp,{children:[(0,J.jsxs)(Vp,{children:[(0,J.jsx)(ga,{size:14}),(0,J.jsx)(Hp,{title:t.host,children:t.name}),(0,J.jsx)(Up,{$online:t.online,children:t.paired?t.online?D(`paired`):D(`offline`):D(`not_paired`)}),!t.paired&&t.online&&(0,J.jsx)(Wp,{disabled:Ee===t.id,onClick:()=>void e(t),type:`button`,children:Ee===t.id?D(`pairing`):D(`pair`)})]}),t.paired&&t.shares.length===0&&(0,J.jsx)(vp,{children:D(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,J.jsxs)(bp,{onClick:n=>c(el(t.id,e.id),Kt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,J.jsx)(ga,{size:14}),(0,J.jsxs)(xp,{children:[(0,J.jsx)(`strong`,{children:e.name}),(0,J.jsx)(vp,{children:t.name})]}),(0,J.jsx)(va,{size:12})]},e.id))]},t.id))]})},qt=e=>{switch(e.kind){case`share`:return Gt();case`favorites`:return Ht(e);case`quick`:{let t=Bt(e);return!A&&t.length===0?(0,J.jsx)(Ip,{children:D(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,J.jsxs)(mp,{children:[t.map(t=>(0,J.jsxs)(hp,{$plain:A,$selected:V===t.path,...zt(e,t.path),onClick:e=>{!A&&!st(t.path,!0)&&c(t.path,Kt(e))},onDoubleClick:()=>!A&&v?.(t.path),onContextMenu:e=>!A&&ct(e,t.path,!0),title:t.path,children:[A&&(0,J.jsx)(jp,{onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:D(`remove_from_quick_access`),type:`button`,children:(0,J.jsx)(Li,{size:11})}),(0,J.jsxs)(kp,{children:[A?(0,J.jsx)(Ap,{onClick:e=>{e.stopPropagation(),L(mt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`change_icon`),type:`button`,children:(0,J.jsx)(gp,{children:(0,J.jsx)(Xs,{place:t})})}):(0,J.jsx)(gp,{children:(0,J.jsx)(Xs,{place:t})}),mt(t.path)&&(0,J.jsx)(_f,{onPick:e=>void ht(t.path,e),value:M?.placeIcons?.[t.path]??t.icon})]}),(0,J.jsxs)(_p,{children:[ve?.path===t.path?(0,J.jsx)(`strong`,{children:(0,J.jsx)(Kp,{onCancel:()=>ye(null),onChange:e=>ye({path:t.path,name:e}),onCommit:()=>void _t(t.path,ve?.name??``),value:ve?.name??``})}):(0,J.jsxs)(`strong`,{children:[t.name,A&&(0,J.jsx)(Mp,{onClick:e=>{e.stopPropagation(),L(null),ye({path:t.path,name:t.name})},title:D(`rename_folder`),type:`button`,children:(0,J.jsx)(na,{size:11})})]}),(0,J.jsx)(vp,{children:t.path})]})]},t.path)),A&&(0,J.jsxs)(Sp,{onClick:()=>void It(e),title:D(`pin_a_folder_here`),type:`button`,children:[(0,J.jsx)(gp,{children:(0,J.jsx)(Ti,{size:15})}),(0,J.jsxs)(_p,{children:[(0,J.jsx)(`strong`,{children:D(`add_folder`)}),(0,J.jsx)(vp,{children:D(`pin_a_directory_here`)})]})]})]}):(0,J.jsxs)(yp,{children:[t.map(t=>(0,J.jsxs)(bp,{$selected:V===t.path,...zt(e,t.path),onClick:e=>{!A&&!st(t.path,!0)&&c(t.path,Kt(e))},onDoubleClick:()=>!A&&v?.(t.path),onContextMenu:e=>!A&&ct(e,t.path,!0),title:t.path,type:`button`,children:[(0,J.jsxs)(kp,{children:[A?(0,J.jsx)(Ap,{onClick:e=>{e.stopPropagation(),L(mt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:D(`change_icon`),type:`button`,children:(0,J.jsx)(Xs,{place:t,size:15})}):(0,J.jsx)(Xs,{place:t,size:15}),mt(t.path)&&(0,J.jsx)(_f,{onPick:e=>void ht(t.path,e),value:M?.placeIcons?.[t.path]??t.icon})]}),(0,J.jsxs)(xp,{children:[ve?.path===t.path?(0,J.jsx)(`strong`,{children:(0,J.jsx)(Kp,{onCancel:()=>ye(null),onChange:e=>ye({path:t.path,name:e}),onCommit:()=>void _t(t.path,ve?.name??``),value:ve?.name??``})}):(0,J.jsxs)(`strong`,{children:[t.name,A&&(0,J.jsx)(Mp,{onClick:e=>{e.stopPropagation(),L(null),ye({path:t.path,name:t.name})},title:D(`rename_folder`),type:`button`,children:(0,J.jsx)(na,{size:11})})]}),(0,J.jsx)(vp,{children:t.path})]}),A&&(0,J.jsx)(jp,{$inline:!0,onClick:n=>{n.stopPropagation(),Lt(e,t.path)},title:D(`remove_from_quick_access`),type:`button`,children:(0,J.jsx)(Li,{size:11})})]},t.path)),A&&(0,J.jsxs)(Sp,{$row:!0,onClick:()=>void It(e),title:D(`pin_a_folder_here`),type:`button`,children:[(0,J.jsx)(Ti,{size:15}),(0,J.jsxs)(xp,{children:[(0,J.jsx)(`strong`,{children:D(`add_folder`)}),(0,J.jsx)(vp,{children:D(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,J.jsx)(qp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:v,onSelectionChange:y,version:s});case`recent`:return Vt(e);case`drives`:return Wt(e);default:return(0,J.jsx)(Jp,{mode:e.view,onContextMenu:ct,onOpen:c,onPick:v,onSelectionChange:y,openOnSingleClick:M?.openOnSingleClick??!1,path:e.path??a,platform:re,selectionMenuId:`overview:${e.id}`,showCheckboxes:M?.showCheckboxes??!0,visibilityVersion:h})}};return(0,J.jsxs)(Tf,{$flush:!!M?.overviewBanner,ref:ze,children:[!_&&(0,J.jsxs)($f,{$overlay:!!M?.overviewBanner,children:[(0,J.jsx)(ep,{role:`group`,title:D(`columns`),children:[1,2,3,4,5].map(e=>(0,J.jsx)(tp,{$active:bt===e,onClick:()=>void W({overviewColumns:e}),title:oe(D,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),A&&(0,J.jsxs)(rp,{children:[(0,J.jsxs)(np,{onClick:()=>ge(e=>!e),onPointerDown:e=>e.stopPropagation(),title:D(`add_a_panel`),type:`button`,children:[(0,J.jsx)(Ti,{size:12}),D(`add_panel`)]}),R&&(0,J.jsx)(ip,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,J.jsx)(ap,{onClick:()=>{ge(!1),Ft(e)},type:`button`,children:D(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),A&&(0,J.jsxs)(np,{onClick:()=>void xt(),title:D(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,J.jsx)(wi,{size:12}),D(`restore_default_panels`)]}),Ne.available&&(0,J.jsx)(pp,{onClick:e=>Ne.open(e.clientX,e.clientY),title:D(`selection_menu`),type:`button`,children:(0,J.jsx)(ka,{size:14})}),(0,J.jsxs)(np,{onClick:()=>{j(e=>!e),ge(!1),L(null),ye(null),_e(null)},title:D(A?`done`:`edit`),type:`button`,children:[A?(0,J.jsx)(Ii,{size:13}):(0,J.jsx)(na,{size:13}),D(A?`done`:`edit`)]})]}),be&&(0,J.jsx)(Fp,{children:be}),M?.overviewBanner&&(0,J.jsxs)(Ef,{ref:Be,style:{height:`${We}px`,"--banner-image-width":`${et}px`,"--banner-image-shift":`${rt}px`,"--banner-travel":`${nt}px`,"--banner-overlap":`0px`},children:[(0,J.jsx)(Df,{children:ue?(0,J.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Je({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:fe??void 0}):(0,J.jsx)(`img`,{alt:``,onLoad:e=>{let t=ce?1920:e.currentTarget.naturalWidth||1920,n=ce?1080:e.currentTarget.naturalHeight||1080;Je({width:t,height:n})},ref:Ve,src:fe??void 0})}),A&&(0,J.jsx)(Of,{onDoubleClick:()=>{Re.current=null,Le(null),W({overviewBannerHeight:220})},onPointerCancel:Ot,onPointerDown:Et,onPointerMove:Dt,onPointerUp:Ot,title:D(`drag_to_resize_double_click_to_reset`)})]}),(0,J.jsxs)(kf,{$offset:M?.overviewBanner?100:0,children:[A&&(0,J.jsxs)(Af,{children:[(0,J.jsxs)(jf,{children:[(0,J.jsx)(Mf,{children:D(`banners`)}),M?.overviewBanner&&(0,J.jsxs)(np,{onClick:()=>ot(!0),title:D(`adjust_framing`),type:`button`,children:[(0,J.jsx)(na,{size:12}),D(`adjust_framing`)]})]}),(0,J.jsxs)(Nf,{children:[(0,J.jsx)(Lf,{children:(0,J.jsx)(Rf,{$active:!M?.overviewBanner,onClick:wt,title:D(`no_banner`),type:`button`,children:(0,J.jsxs)(Vf,{children:[(0,J.jsx)(Li,{size:16}),(0,J.jsx)(`span`,{children:D(`no_banner`)})]})})}),id.map(t=>(0,J.jsx)(Lf,{children:(0,J.jsx)(Rf,{$active:M?.overviewBanner===t.id,onClick:()=>void W({overviewBanner:t.id}),title:`${D(t.concept)} · ${D(t.preset)}`,type:`button`,children:(0,J.jsx)(bf,{source:t.id,theme:e})})},t.id)),nd.map(t=>(0,J.jsx)(Lf,{children:(0,J.jsxs)(Rf,{$active:M?.overviewBanner===t.id,onClick:()=>void W({overviewBanner:t.id}),title:D(t.name),type:`button`,children:[(0,J.jsx)(bf,{poster:t.poster,source:t.id,theme:e}),(0,J.jsx)(Bf,{children:(0,J.jsx)(Wi,{size:11})})]})},t.id)),(M?.overviewBanners??[]).map(t=>(0,J.jsxs)(Lf,{children:[(0,J.jsx)(Rf,{$active:M?.overviewBanner===t||M?.overviewBanner===`url:${t}`,onClick:()=>void W({overviewBanner:O(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,J.jsx)(bf,{source:t,theme:e})}),(0,J.jsx)(zf,{onClick:()=>Tt(t),title:D(`remove`),type:`button`,children:(0,J.jsx)(Li,{size:10})})]},t)),(0,J.jsxs)(Qf,{onClick:()=>void St(),title:D(`add_banner`),type:`button`,children:[(0,J.jsx)(Ti,{size:18}),(0,J.jsx)(`span`,{children:D(`add_banner`)})]})]}),(0,J.jsxs)(Pf,{children:[(0,J.jsx)(Ff,{onChange:e=>me(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Ct()},placeholder:`https://…`,value:pe}),(0,J.jsx)(If,{disabled:!O(pe),onClick:()=>void Ct(),type:`button`,children:D(`add_url`)})]})]}),(0,J.jsx)(op,{ref:ft,$columns:bt,children:ut.map(e=>{let t=dt.indexOf(e.id);return(0,J.jsxs)(sp,{children:[(0,J.jsxs)(cp,{children:[(0,J.jsxs)(lp,{children:[(0,J.jsxs)(kp,{children:[A?(0,J.jsx)(Ap,{onClick:()=>L(pt(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:D(`change_icon`),type:`button`,children:(0,J.jsx)(Ys,{panel:e,size:15})}):(0,J.jsx)(Ys,{panel:e,size:15}),pt(e.id)&&(0,J.jsx)(_f,{onPick:t=>Pt(e.id,t),value:e.icon})]}),A?(0,J.jsx)(fp,{defaultValue:e.title,onBlur:t=>At(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,J.jsx)(dp,{children:D(e.title)})]}),(0,J.jsxs)(up,{children:[!A&&e.kind===`recent`&&(0,J.jsx)(np,{onClick:()=>void He().then(d),title:D(`clear`),type:`button`,children:D(`clear`)}),!A&&e.kind===`frequent`&&(0,J.jsx)(np,{onClick:()=>void Ue().then(()=>p?.()),title:D(`clear_the_frequent_list`),type:`button`,children:D(`clear`)}),!A&&(e.kind===`home`||e.kind===`folder`)&&(0,J.jsx)(np,{onClick:()=>c(e.path??a),title:D(`open_folder`),type:`button`,children:D(`open`)}),A&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(pp,{$active:e.pinned,onClick:()=>Mt(e.id),title:e.pinned?D(`unpin_from_the_sidebar`):D(`pin_to_the_sidebar`),type:`button`,children:(0,J.jsx)(Ai,{size:12})}),(0,J.jsx)(pp,{$active:e.view===`list`,onClick:()=>jt(e.id,`list`),title:D(`list`),type:`button`,children:(0,J.jsx)(ji,{size:13})}),(0,J.jsx)(pp,{$active:e.view===`grid`,onClick:()=>jt(e.id,`grid`),title:D(`grid`),type:`button`,children:(0,J.jsx)(Mi,{size:13})}),(0,J.jsx)(pp,{disabled:t===0,onClick:()=>kt(e.id,-1),title:D(`move_up`),type:`button`,children:(0,J.jsx)(Ci,{size:12})}),(0,J.jsx)(pp,{disabled:t===dt.length-1,onClick:()=>kt(e.id,1),title:D(`move_down`),type:`button`,children:(0,J.jsx)(Ci,{size:12})}),(0,J.jsx)(pp,{onClick:()=>Nt(e.id),title:D(`remove_panel`),type:`button`,children:(0,J.jsx)(Li,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?qt(e):(0,J.jsx)(Ep,{children:qt(e)})]},e.id)})})]}),at&&fe&&(0,J.jsx)(xf,{height:We,offset:Xe,onCancel:()=>ot(!1),onSave:e=>{W({overviewBannerOffset:e}),ot(!1)},source:fe,video:ue}),Pe&&(0,J.jsx)(Mo,{directory:a,menu:{x:Pe.x,y:Pe.y,paths:[Pe.target.path]},onClose:()=>Fe(null),onCopy:(e,t)=>void gt(e,t),onAddToTray:C,onAddFavorite:w,onRemoveFavorite:te,favoritePaths:ne,onExtractArchive:T,onOpen:lt,onOpenFile:e=>v?v(e):void Se(e),shortcuts:Ut,target:Pe.target})]})}function Kp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,J.jsxs)(Np,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,J.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,J.jsx)(Pp,{onClick:r,title:a(`cancel`),type:`button`,children:(0,J.jsx)(Li,{size:11})}),(0,J.jsx)(Pp,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,J.jsx)(Ii,{size:12})})]})}function qp({mode:e,onOpen:t,onContextMenu:n,onPick:r,onSelectionChange:i,version:a}){let s=o(),[c,l]=(0,z.useState)(null),[u,d]=(0,z.useState)(null),f=Ln(),p=e=>r?(d(e),i?.([e]),!0):!1;if((0,z.useEffect)(()=>{Be().then(l,()=>l([]))},[a]),!c)return(0,J.jsx)(Ip,{children:s(`reading`)});if(c.length===0)return(0,J.jsx)(Ip,{children:s(`folders_you_open_often_show_up_here`)});let m=e=>oe(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,J.jsx)(mp,{children:c.map(e=>{let i=Rn(f,e.path);return(0,J.jsxs)(hp,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Kt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,J.jsx)(gp,{children:i&&f.useIcons?(0,J.jsx)(Xs,{place:i,size:18}):(0,J.jsx)(mc,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,J.jsxs)(_p,{children:[(0,J.jsx)(`strong`,{children:i?.name||e.name}),(0,J.jsx)(vp,{children:m(e)})]})]},e.path)})}):(0,J.jsx)(yp,{children:c.map(e=>{let i=Rn(f,e.path);return(0,J.jsxs)(bp,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Kt(n))},onDoubleClick:()=>r?.(e.path),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[i&&f.useIcons?(0,J.jsx)(Xs,{place:i,size:15}):(0,J.jsx)(mc,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,J.jsxs)(xp,{children:[(0,J.jsx)(`strong`,{children:i?.name||e.name}),(0,J.jsx)(vp,{children:m(e)})]})]},e.path)})})}function Jp({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectionMenuId:s,showCheckboxes:c,openOnSingleClick:u,visibilityVersion:d,platform:f}){let p=o(),[m,h]=(0,z.useState)(null),[g,ee]=(0,z.useState)(null),_=Ln();return(0,z.useEffect)(()=>{e&&(h(null),Ce(e).then(h,()=>h(null)))},[e,d]),(0,z.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&P(n.data.path,e)&&Ce(e,!1).then(h,()=>void 0)})},[e]),m?t===`list`?(0,J.jsx)(Tp,{children:(0,J.jsx)(Ml,{platform:f,error:null,listing:m,loading:!1,onOpen:i??n,onOpenFile:i??(e=>void Se(e)),onRefresh:()=>void Ce(e,!1).then(h,()=>void 0),onRename:(e,t)=>h(n=>n&&{...n,entries:n.entries.map(n=>P(n.fullPath,e)?{...n,name:b(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:s,onSort:()=>void 0,openOnSingleClick:u,enableShortcuts:!1,showCheckboxes:c,showDetails:!1,showImages:!1,view:{...ye,columns:be.columns??[]}})}):(0,J.jsx)(Ep,{children:m.entries.length===0?(0,J.jsx)(Ip,{children:p(`this_folder_is_empty`)}):(0,J.jsx)(Dp,{children:m.entries.map(e=>{let t=Rn(_,e.fullPath);return(0,J.jsxs)(Op,{$selected:g===e.fullPath,onClick:t=>{i?(ee(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Kt(t)):Se(e.fullPath)},onDoubleClick:()=>i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&_.useIcons?(0,J.jsx)(Xs,{place:t,size:16}):(0,J.jsx)(mc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,J.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,J.jsx)(Ip,{children:p(`reading`)})}var Yp=`yafm://`,Xp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Zp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Qp(e){return`${Yp}${e===`home`?`overview`:e}`}function $p(e){return Zp(e)?Xp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function em(e){let t=e.trim();if(t.length===0)return null;if(!Zp(t))return t;let n=Xp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Qp(n):null}function tm({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let s=o(),c=Ln(),[l,u]=(0,z.useState)(!1),[d,f]=(0,z.useState)(``),[p,m]=(0,z.useState)([]),[h,g]=(0,z.useState)(0),[ee,_]=(0,z.useState)(null),[v,y]=(0,z.useState)(null),[b,x]=(0,z.useState)(null),S=(0,z.useRef)(null),C=(0,z.useRef)(null),w=(0,z.useRef)(0);(0,z.useEffect)(()=>{if(!Qc(e)){x(null);return}let t=$c(e);if(!t){x(null);return}let n=!0;return Kc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,z.useEffect)(()=>{l||f(e.replace(/\\/g,`/`))},[e,l]),(0,z.useEffect)(()=>{r&&r!==w.current&&(w.current=r,f(e.replace(/\\/g,`/`)),u(!0))},[r,e]),(0,z.useEffect)(()=>{l&&S.current?.select()},[l]),(0,z.useEffect)(()=>{if(!l)return;let e=()=>u(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[l]);let te=()=>{f(e.replace(/\\/g,`/`)),u(!0)},ne=t=>{let n=d.trim(),r=!!(t?.ctrlKey||t?.metaKey);u(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,z.useEffect)(()=>{if(!l){m([]);return}let e=am(d);if(!e){m([]);return}let t=!1,n=window.setTimeout(()=>{Ce(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));m(i),g(0)},()=>{t||m([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[d,l]);let T=(e,t=!1)=>{u(!1),i(e.path,t)};if((0,z.useLayoutEffect)(()=>{if(!l){_(null);return}let e=()=>{let e=C.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[l]),l)return(0,J.jsxs)(dm,{onPointerDown:e=>e.stopPropagation(),ref:C,children:[(0,J.jsxs)(hm,{children:[(0,J.jsx)(`input`,{onChange:e=>f(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&p.length>0)e.preventDefault(),g(e=>(e+1)%p.length);else if(e.key===`ArrowUp`&&p.length>0)e.preventDefault(),g(e=>(e-1+p.length)%p.length);else if(e.key===`Tab`&&p.length>0){e.preventDefault();let t=p[Math.min(h,p.length-1)];f(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?p.length>0?T(p[Math.min(h,p.length-1)],e.ctrlKey||e.metaKey):ne(e):e.key===`Escape`&&(p.length>0?m([]):u(!1))},ref:S,spellCheck:!1,value:d}),(0,J.jsx)(gm,{onClick:()=>u(!1),title:s(`cancel`),type:`button`,children:(0,J.jsx)(Li,{size:12})}),(0,J.jsx)(gm,{$apply:!0,onClick:ne,onPointerDown:e=>e.stopPropagation(),title:s(`open_this_path`),type:`button`,children:(0,J.jsx)(Ii,{size:14})})]}),p.length>0&&ee&&(0,no.createPortal)((0,J.jsx)(fm,{onPointerDown:e=>e.stopPropagation(),style:{left:ee.left,top:ee.top,width:ee.width},children:p.map((e,t)=>(0,J.jsxs)(pm,{$active:t===h,onClick:t=>T(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>g(t),type:`button`,children:[(0,J.jsx)(mc,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,J.jsx)(mm,{children:e.name})]},e.path))}),document.body)]});let E=t?[{label:t,path:e,icon:n}]:nm(e,b)??im(e,c.places);return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(om,{onClick:te,title:s(`click_to_type_a_path`),children:E.map((t,n)=>(0,J.jsxs)(sm,{$last:n===E.length-1,children:[n>0&&(0,J.jsx)(lm,{children:(0,J.jsx)(Oi,{size:9})}),(0,J.jsxs)(um,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,J.jsx)(cm,{children:(0,J.jsx)(Xs,{place:t.place,size:13})}):t.icon&&(0,J.jsx)(cm,{children:t.icon}),t.label]})]},t.path))}),v&&(0,J.jsx)(bo,{items:[{label:s(`open`),icon:(0,J.jsx)(Di,{size:14}),onSelect:()=>i(v.path)},{label:s(`open_in_new_tab`),icon:(0,J.jsx)(Ti,{size:14}),onSelect:()=>i(v.path,!0)},{label:s(`copy_as_path`),icon:(0,J.jsx)(Sa,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...Zp(v.path)?[{label:s(`open_with`),icon:(0,J.jsx)(Ji,{size:14}),onSelect:()=>void jt(v.path)},{label:s(`properties`),icon:(0,J.jsx)(ki,{size:14}),onSelect:()=>void kt([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function nm(e,t){let n=$c(e);if(!n)return null;let r=el(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,J.jsx)(ga,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function rm(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function im(e,t){let n=rm(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>P(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function am(e){if(Zp(e)||Qc(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var om=_.div`
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
`,sm=_.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,cm=_.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,lm=_.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,um=_.button`
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
`,dm=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,fm=_.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${ro}
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
`,pm=_.button`
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
`,mm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hm=_.div`
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
`,gm=_.button`
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
`,_m=_.button`
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
`,vm=_.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,ym=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,J.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,J.jsx)(`path`,{d:`M4 4v6h6`})]});function bm({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,onShowDetails:i,onPreviewChange:a,platform:s,toolbarSlot:c,onStatusChange:l}){let u=o(),d=vl(`recycle`),f=s===`windows`,[p,m]=(0,z.useState)([]),[h,g]=(0,z.useState)([]),[ee,_]=(0,z.useState)(!1),[v,y]=(0,z.useState)(null),[b,x]=(0,z.useState)(!0),[C,w]=(0,z.useState)(!1),[te,ne]=(0,z.useState)(null),[T,E]=(0,z.useState)(!1),[re,D]=(0,z.useState)(()=>new Set),[O,k]=(0,z.useState)(null),[ie,A]=(0,z.useState)(()=>{let e=Xn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[j,ae]=(0,z.useState)(null),[se,N]=(0,z.useState)(null),P=(0,z.useRef)(null),ce=(0,z.useCallback)(async()=>{x(!0),ne(null);try{m(await Me(T))}catch(e){ne(e instanceof Error?e.message:String(e))}finally{x(!1)}},[T]),F=(0,z.useCallback)(async()=>{try{m(await Me(T))}catch{}},[T]);(0,z.useEffect)(()=>{ce()},[ce]),(0,z.useEffect)(()=>{let e=window.setInterval(()=>void F(),1e4);return()=>window.clearInterval(e)},[F]),(0,z.useEffect)(()=>{T||(g([]),_(!1),y(null))},[T]),(0,z.useEffect)(()=>{D(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let I=(0,z.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=xm(e,t,ie.column);return ie.descending?-n:n})},[p,h,ie]),le=(0,z.useMemo)(()=>!t?.open||t.query.trim().length===0?I:I.filter(e=>kn(e.name,t)||kn(e.originalPath,t)),[I,t?.open,t?.query,t?.matchCase,t?.regex]),ue=t?.open&&t.query.trim().length>0?le.length===0:I.length===0,de=(0,z.useRef)(null);gf(de,t??null,`[data-search-block]`,n??(()=>void 0),[I]),(0,z.useEffect)(()=>{D(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,z.useEffect)(()=>{r&&D(new Set(le.map(e=>e.id)))},[r]);let fe=(0,z.useMemo)(()=>I.filter(e=>re.has(e.id)),[I,re]),pe=fe.filter(e=>e.removable&&!e.isOrphan),me=fe.filter(e=>e.removable),he=(e,t)=>{let n=t.ctrlKey||t.metaKey;D(r=>{if(t.shiftKey&&O){let t=I.findIndex(e=>e.id===O),i=I.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(I[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),k(e.id)},L=(0,z.useCallback)(()=>D(new Set(le.map(e=>e.id))),[le]),R=le.length>0&&le.every(e=>re.has(e.id)),ge=(0,z.useCallback)(async()=>{let e=pe.map(e=>e.id);if(e.length!==0){w(!0);try{let t=await Pe(e);t.ok||await Wa(oe(u,e.length,`restored_done_of_1_item`,`restored_done_of_total_items`,{done:t.done,total:e.length})),D(new Set),await ce()}finally{w(!1)}}},[ce,pe,u]),B=(0,z.useCallback)(async()=>{let e=me.map(e=>e.id);if(N(null),e.length!==0){w(!0);try{let t=await Fe(e);!t.ok&&!t.cancelled&&await Wa(oe(u,e.length,`deleted_done_of_1_item`,`deleted_done_of_total_items`,{done:t.done,total:e.length})),D(new Set),await ce()}finally{w(!1)}}},[me,ce,u]),_e=async()=>{N(null),w(!0);try{await Ne(T),D(new Set),await ce()}finally{w(!1)}},ve=async()=>{w(!0),y(null);try{let e=await Le();if(e.cancelled){y(`Elevation was declined — nothing was read.`);return}if(e.failed){y(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),_(!0)}finally{w(!1)}},ye=async()=>{w(!0),N(null);try{await U(),g([]),_(!1),y(null),await ce()}finally{w(!1)}},be=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},xe=e=>{navigator.clipboard.writeText(e.originalPath)},Se=(e,t)=>{e.preventDefault(),t&&!re.has(t.id)&&D(new Set([t.id])),ae({x:e.clientX,y:e.clientY})};(0,z.useEffect)(()=>(pl(`recycle`,re.size>0?(e,t)=>ae({x:e,y:t}):null),()=>pl(`recycle`,null)),[re]),(0,z.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),L()):e.key===`delete`?(e.preventDefault(),me.length>0&&N(`delete`)):e.key===`Enter`&&pe.length>0?(e.preventDefault(),ge()):e.key===`Escape`&&(D(new Set),ae(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[me.length,pe.length,ge,L]);let Ce=[{label:u(`restore`),icon:(0,J.jsx)(ym,{width:14,height:14}),disabled:pe.length===0,onSelect:()=>void ge()},{label:u(`delete_permanently`),icon:(0,J.jsx)(Fi,{size:14}),danger:!0,disabled:me.length===0,onSelect:()=>N(`delete`)},{label:u(`properties`),icon:(0,J.jsx)(ki,{size:14}),disabled:fe.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=fe;e&&Ie(e.id)}},{label:u(`open_original_location`),icon:(0,J.jsx)(yi,{size:14}),disabled:fe.length!==1,onSelect:()=>{let[e]=fe;e&&be(e)}},{label:u(`copy_original_path`),icon:(0,J.jsx)(Sa,{size:14}),disabled:fe.length!==1,onSelect:()=>{let[e]=fe;e&&xe(e)}},{label:u(`select_all`),separatorBefore:!0,onSelect:L},{label:u(`refresh`),icon:(0,J.jsx)(wi,{size:14}),onSelect:()=>void ce()}],we=fe.length>0?fe[0]:null,Te=we?{name:we.name,path:we.contentPath||we.originalPath,isDirectory:we.isDirectory,size:we.size,modified:we.deleted,fields:[{label:u(`type`),value:u(Cm(we))},{label:u(`original_location`),value:we.originalPath},{label:u(`date_deleted`),value:M(we.deleted)},{label:u(`size`),value:we.isDirectory?`—`:S(we.size)},...we.owner?[{label:u(`owner`),value:we.owner}]:[],{label:u(`status`),value:we.isOrphan?u(`metadata_only`):we.removable?u(`restorable`):u(`other_profile`)}]}:null,Ee=fe.length>1?oe(u,fe.length,`k_1_item_selected`,`count_items_selected`):void 0,De=(0,z.useRef)(``);(0,z.useEffect)(()=>{let e=`${Te?.path??``}|${Te?.modified??0}|${Ee??``}`;De.current!==e&&(De.current=e,a?.(Te,Ee))},[Te,Ee,a]);let Oe=b?u(`reading`):oe(u,I.length,`k_1_item`,`count_items`)+(re.size>0?` · ${u(`count_selected`,{count:re.size})}`:``);return(0,z.useEffect)(()=>{l?.(Oe)},[Oe,l]),(0,J.jsxs)(Tm,{ref:P,onContextMenu:e=>Se(e),children:[c&&(0,no.createPortal)((0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(vm,{}),(0,J.jsx)(Em,{$on:T,onClick:()=>E(e=>!e),title:u(`show_metadata_records_whose_content_is_already_gone`),type:`button`,children:(0,J.jsx)(Ri,{size:16})}),T&&f&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(_m,{disabled:C||ee,onClick:()=>void ve(),title:u(ee?`the_administrator_view_is_already_loaded`:`ask_for_administrator_rights_and_list_every_profile_s_leftovers`),type:`button`,children:(0,J.jsx)(Aa,{size:16})}),ee&&h.length>0&&(0,J.jsx)(Dm,{disabled:C,onClick:()=>N(`purge`),title:u(`delete_every_orphan`),type:`button`,children:(0,J.jsx)(Ia,{size:16})})]}),(0,J.jsx)(_m,{disabled:C||pe.length===0,onClick:()=>void ge(),title:u(`restore`),type:`button`,children:(0,J.jsx)(ym,{height:16,width:16})}),(0,J.jsx)(Dm,{disabled:C||me.length===0,onClick:()=>N(`delete`),title:u(`delete`),type:`button`,children:(0,J.jsx)(Fi,{size:16})}),(0,J.jsx)(Dm,{disabled:C||I.length===0,onClick:()=>N(`empty`),title:u(`empty`),type:`button`,children:(0,J.jsx)(Fa,{size:16})}),(0,J.jsx)(_m,{onClick:()=>void ce(),title:u(`refresh`),type:`button`,children:(0,J.jsx)(wi,{size:16})}),d.available&&(0,J.jsx)(_m,{onClick:e=>d.open(e.clientX,e.clientY),title:u(`selection_menu`),type:`button`,children:(0,J.jsx)(ka,{size:16})})]}),c),v&&(0,J.jsx)(Jm,{children:v}),te&&(0,J.jsx)(Ym,{children:te}),!te&&(0,J.jsx)(qm,{children:(0,J.jsxs)(Om,{ref:de,children:[(0,J.jsxs)(Am,{children:[(0,J.jsx)(Im,{$checked:R,$partial:!R&&re.size>0,onClick:()=>R?D(new Set):L(),title:u(R?`select_none`:`select_all`),type:`button`,children:R?(0,J.jsx)(Ii,{size:9}):re.size>0&&(0,J.jsx)(Lm,{})}),(0,J.jsxs)(jm,{onClick:()=>ke(`name`),type:`button`,children:[u(`name`),Sm(ie,`name`)]}),(0,J.jsxs)(jm,{onClick:()=>ke(`original`),type:`button`,children:[u(`original_location`),Sm(ie,`original`)]}),(0,J.jsxs)(jm,{onClick:()=>ke(`deleted`),type:`button`,children:[u(`date_deleted`),Sm(ie,`deleted`)]}),(0,J.jsxs)(jm,{onClick:()=>ke(`size`),type:`button`,children:[u(`size`),Sm(ie,`size`)]}),(0,J.jsxs)(jm,{onClick:()=>ke(`type`),type:`button`,children:[u(`type`),Sm(ie,`type`)]}),(0,J.jsx)(`span`,{})]}),(0,J.jsxs)(Mm,{onClick:e=>{e.target===e.currentTarget&&D(new Set)},children:[!b&&ue&&(0,J.jsx)(Ym,{children:t?.open&&t.query.trim().length>0?u(`no_matching_items`):u(`the_recycle_bin_is_empty`)}),I.map(e=>(0,J.jsxs)(Nm,{$checked:re.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>he(e,t),onContextMenu:t=>Se(t,e),onDoubleClick:()=>{D(new Set([e.id])),k(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,J.jsx)(Fm,{$checked:re.has(e.id),children:re.has(e.id)&&(0,J.jsx)(Ii,{size:9})}),(0,J.jsxs)(Rm,{children:[(0,J.jsx)(wm,{entry:e}),(0,J.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,J.jsx)(Km,{children:u(`metadata_only`)}),e.owner&&(0,J.jsx)(Km,{$other:!0,children:u(`other_profile`)})]}),(0,J.jsx)(Bm,{children:e.originalPath}),(0,J.jsx)(Vm,{children:M(e.deleted)}),(0,J.jsx)(Hm,{children:e.isDirectory?`—`:S(e.size)}),(0,J.jsx)(Um,{children:u(Cm(e))}),(0,J.jsxs)(Wm,{children:[e.removable&&!e.isOrphan&&(0,J.jsx)(Gm,{onClick:t=>{t.stopPropagation(),Pe([e.id]).then(ce)},title:u(`restore_to_its_original_folder`),type:`button`,children:(0,J.jsx)(ym,{})}),e.removable&&(0,J.jsx)(Gm,{$danger:!0,onClick:t=>{t.stopPropagation(),D(new Set([e.id])),N(`delete`)},title:e.isOrphan?u(`remove_the_leftover_record`):u(`delete_permanently`),type:`button`,children:(0,J.jsx)(Fi,{size:13})})]})]},e.id))]})]})}),j&&(0,J.jsx)(bo,{items:Ce,onClose:()=>ae(null),x:j.x,y:j.y}),(0,J.jsx)(ss,{confirmLabel:u(se===`empty`?`empty_the_bin`:se===`purge`?`delete_every_orphan`:`delete`),danger:!0,message:se===`empty`?oe(u,I.length,`permanently_delete_1_item_this_cannot_be_undone`,`permanently_delete_count_items_this_cannot_be_undone`):se===`purge`?u(`permanently_delete_every_leftover_record_including_the_ones_owned_by_other_profiles_this_cannot_be_undone`):oe(u,me.length,`permanently_delete_1_selected_item_this_cannot_be_undone`,`permanently_delete_count_selected_items_this_cannot_be_undone`),onCancel:()=>N(null),onConfirm:()=>{se===`empty`?_e():se===`purge`?ye():B()},open:se!==null,title:u(se===`empty`?`empty_the_recycle_bin`:se===`purge`?`delete_every_orphan`:`delete_permanently`)})]});function ke(e){A(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Zn(`yafm.recycle.sort`,n),n})}}function xm(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return Cm(e).localeCompare(Cm(t),void 0,{sensitivity:`base`})}}function Sm(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function Cm(e){if(e.isDirectory)return`folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`file`}function wm({entry:e}){let t=pn(e.originalPath,e.isDirectory);return(0,J.jsx)(zm,{children:t?(0,J.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,J.jsx)(yi,{}):(0,J.jsx)(bi,{})})}var Tm=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Em=_(_m)`
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`transparent`};
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`transparent`};
`,Dm=_(_m)`
    color: #fca5a5;

    &:hover:not(:disabled) {
        color: #fecaca;
        border-color: rgba(248, 113, 113, 0.5);
        background: rgba(248, 113, 113, 0.12);
    }
`,Om=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,km=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Am=_.div`
    display: grid;
    grid-template-columns: ${km};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,jm=_.button`
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
`,Mm=_.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Nm=_.div`
    display: grid;
    grid-template-columns: ${km};
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
`,Pm=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fm=_.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Im=_.button`
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
`,Lm=_.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Rm=_(Pm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,zm=_.span`
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
`,Bm=_(Pm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Vm=_(Pm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Hm=_(Pm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Um=_(Pm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Wm=_.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Gm=_.button`
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
`,Km=_.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,qm=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Jm=_.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Ym=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Xm(){return l.available?(await l.request(`app.tags`)).tags:[]}async function Zm(e){return!l.available||!e?!1:(await l.request(`app.tags.delete`,{name:e})).ok}async function Qm(e,t){return!l.available||!e?[]:(await l.request(`app.tags.create`,{name:e,color:t})).tags}async function $m(e,t){return!l.available||!e?!1:(await l.request(`app.tags.color`,{name:e,color:t})).ok}async function eh(e,t){return!l.available||!e||!t?!1:(await l.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function th(){let e=o();return(0,J.jsx)(nh,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var nh=_.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,rh=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function ih(e){return`"${e.replaceAll(`"`,``)}"`}function ah(e){let t=document.documentElement.style;for(let n of rh){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${ih(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function oh(){return l.available?(await l.request(`app.fonts`)).fonts??[]:[]}function sh({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let s=o(),[c,l]=(0,z.useState)(null),[u,d]=(0,z.useState)(``),f=(0,z.useRef)(null),p=(0,z.useRef)(null),m=(0,z.useMemo)(()=>{let e=u.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,u]);(0,z.useEffect)(()=>{if(!c)return;p.current?.focus();let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[c]);let h=()=>{if(c){l(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;d(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;l({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},g=e=>{a(e),l(null)};return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(ch,{"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:i,onClick:h,ref:f,type:`button`,children:[(0,J.jsx)(lh,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,J.jsx)(uh,{children:`▾`})]}),c&&(0,no.createPortal)((0,J.jsxs)(dh,{"data-font-menu":`true`,role:`listbox`,style:{left:c.left,maxHeight:c.maxHeight,top:c.top,width:c.width},children:[(0,J.jsxs)(fh,{children:[(0,J.jsx)(Si,{size:12}),(0,J.jsx)(ph,{onChange:e=>d(e.target.value),placeholder:s(`filter_fonts`),ref:p,value:u})]}),(0,J.jsxs)(mh,{children:[(0,J.jsxs)(hh,{$active:!e,"aria-selected":!e,onClick:()=>g(null),role:`option`,type:`button`,children:[(0,J.jsxs)(_h,{children:[n,` `,(0,J.jsx)(yh,{children:s(`default_2`)})]}),!e&&(0,J.jsx)(Ii,{size:11})]}),m.map(t=>(0,J.jsxs)(hh,{$active:e===t,"aria-selected":e===t,onClick:()=>g(t),role:`option`,type:`button`,children:[(0,J.jsxs)(gh,{children:[(0,J.jsx)(_h,{children:t}),(0,J.jsx)(vh,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,J.jsx)(Ii,{size:11})]},t)),m.length===0&&(0,J.jsx)(bh,{children:s(`no_matching_font`)})]})]}),document.body)]})}var ch=_.button`
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
`,lh=_.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uh=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,dh=_.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${mo}
`,fh=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,ph=_.input`
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
`,mh=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,hh=_.button`
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
`,gh=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,_h=_.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vh=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yh=_.span`
    color: var(--text-muted);
    font-size: 10px;
`,bh=_.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,xh=[{id:`goBack`,label:`back`,note:`the_previous_folder_in_this_tab_the_mouse_back_button_and_the_browser_back_key_always_work`},{id:`goForward`,label:`forward`,note:`the_next_folder_in_this_tab_the_mouse_forward_button_and_the_browser_forward_key_always_work`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder_like_alt_home_in_dolphin`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path_ctrl_l_in_dolphin`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`ctrl_d_copies_too_following_kde_s_file_manager`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`delete_is_del_by_default_not_ctrl_d`},{id:`deletePermanently`,label:`delete_permanently`,note:`bypasses_the_recycle_bin_dolphin_uses_shift_delete`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected_dolphin_uses_ctrl_shift_a`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory_f10_also_works`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_windows_terminal_in_the_current_folder_dolphin_uses_f4_for_its_terminal_panel`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one_f3_in_dolphin`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],Sh=`en`,Ch=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],wh=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],Th=new Date(2026,10,5,16,8).getTime(),Eh=`system`,Dh={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},Oh=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],kh={application:(0,J.jsx)(ki,{size:13}),share_access:(0,J.jsx)(Ta,{size:13}),startup:(0,J.jsx)(Ea,{size:13}),fonts:(0,J.jsx)(Yi,{size:13}),time_format:(0,J.jsx)(Ni,{size:13}),updates:(0,J.jsx)(wi,{size:13}),colors:(0,J.jsx)(ja,{size:13}),background:(0,J.jsx)(oa,{size:13}),safety:(0,J.jsx)(Aa,{size:13}),tags:(0,J.jsx)(Ma,{size:13}),files_view:(0,J.jsx)(ji,{size:13}),shortcuts:(0,J.jsx)(Na,{size:13}),memory:(0,J.jsx)(Xi,{size:13}),overview:(0,J.jsx)(ta,{size:13}),gallery:(0,J.jsx)(ma,{size:13}),icons:(0,J.jsx)(Pa,{size:13}),icons_by_extension:(0,J.jsx)(bi,{size:13}),folder_icons:(0,J.jsx)(yi,{size:13}),folder_index:(0,J.jsx)(_a,{size:13}),index_tasks:(0,J.jsx)(Pi,{size:13}),files:(0,J.jsx)(Ri,{size:13})},Ah=`yafm.colors.recent`;function jh(){let e=Xn(Ah);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Mh({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let s=o(),[c,l]=(0,z.useState)([]),[u,d]=(0,z.useState)(null),[m,ee]=(0,z.useState)(!1),[_,v]=(0,z.useState)(null),y=f(g(_?.themeMode)),[w,te]=(0,z.useState)(null),[ne,T]=(0,z.useState)(``),[E,re]=(0,z.useState)(`file`),[D,k]=(0,z.useState)(!1),[ie,A]=(0,z.useState)(!1),[j,ae]=(0,z.useState)(null),[M,P]=(0,z.useState)(ut),[ce,R]=(0,z.useState)(!1),[ge,B]=(0,z.useState)(null),[_e,ve]=(0,z.useState)(null),[ye,xe]=(0,z.useState)(null),[Se,Ce]=(0,z.useState)(!1),[we,Te]=(0,z.useState)(null),[Ee,De]=(0,z.useState)(!1),[Oe,ke]=(0,z.useState)(null),[V,Ae]=(0,z.useState)(null),[je,Me]=(0,z.useState)(!1),[H,Ne]=(0,z.useState)([]),[Pe,Fe]=(0,z.useState)(null),[Ie,Le]=(0,z.useState)(!1),[U,Re]=(0,z.useState)(null),[ze,Be]=(0,z.useState)(``),[Ve,He]=(0,z.useState)(Zs),[Ue,Ge]=(0,z.useState)(null),[qe,Je]=(0,z.useState)(null),[Ze,Qe]=(0,z.useState)(``),[at,st]=(0,z.useState)(``),[pt,gt]=(0,z.useState)(null),[_t,vt]=(0,z.useState)(jh),[yt,bt]=(0,z.useState)({}),[W,xt]=(0,z.useState)(null),[St,Ct]=(0,z.useState)(null),[wt,Tt]=(0,z.useState)(!1),[Et,Dt]=(0,z.useState)(null),[Ot,kt]=(0,z.useState)(null),At=(0,z.useRef)(!1),[jt,Mt]=(0,z.useState)(null),[Nt,Pt]=(0,z.useState)(Oh[0].id),[Ft,It]=(0,z.useState)([]),[Lt,Rt]=(0,z.useState)(null),[zt,Bt]=(0,z.useState)(``),[Vt,Ht]=(0,z.useState)(!1),[Wt,Gt]=(0,z.useState)(null),[Kt,Yt]=(0,z.useState)(null),[Xt,Zt]=(0,z.useState)(!1),[Qt,$t]=(0,z.useState)(``),en=(0,z.useRef)(null),tn=(0,z.useRef)({}),nn=_?.defaultView??be,rn=_?.themePresets??[],an=e?.platform===`windows`,on=an?_e?_e.registered&&_e.pathMatches:!1:_?.archiveHandler??!1,sn=_e?.registered??_?.archiveHandler??!1,ln=an?ye?ye.registered&&ye.pathMatches:!1:_?.defaultFileManager??!1,un=an?M.registered&&M.pathMatches:_?.linksEnabled??!1;gf(en,r??null,`section`,i??(()=>void 0),[_]),(0,z.useEffect)(()=>{let e=en.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){Pt(Oh[Oh.length-1].id);return}let n=t+110,r=Oh[0].id;for(let{id:e}of Oh){let t=tn.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}Pt(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let dn=e=>t=>{tn.current[e]=t},fn=e=>{tn.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),Pt(e)},pn=(0,z.useRef)(0),mn=e=>{let t=e.currentTarget,n=Math.sign(e.deltaY);if(n===0)return;if(t.scrollHeight>t.clientHeight+1){let e=t.scrollTop<=0&&n<0,r=t.scrollTop+t.clientHeight>=t.scrollHeight-1&&n>0;if(!e&&!r)return}let r=Date.now();if(r<pn.current)return;let i=Oh.findIndex(e=>e.id===Nt),a=i<0?0:i,o=Math.min(Math.max(a+n,0),Oh.length-1);o!==a&&(pn.current=r+400,fn(Oh[o].id))};(0,z.useEffect)(()=>{t&&fn(t)},[t]),(0,z.useEffect)(()=>{p().then(e=>l(e.available),()=>l([]))},[]),(0,z.useEffect)(()=>{oh().then(It,()=>It([]))},[]),(0,z.useEffect)(()=>{mt().then(Gt,()=>Gt(null))},[]),(0,z.useEffect)(()=>{ue().then(Ct,()=>void 0)},[]),(0,z.useEffect)(()=>{We().then(d,()=>d(null)),Ye().then(v,()=>v(null)),dt().then(P,()=>P(ut)),tt().then(ve,()=>ve(null)),$e().then(xe,()=>xe(null)),Xm().then(Ne,()=>Ne([]))},[]),(0,z.useEffect)(()=>{let e=()=>void ct().then(ae,()=>ae(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let G=async e=>{if(!_)return;let t={..._,...e};Object.keys(e).every(e=>t[e]===_[e])||(v(t),cn(),v(await it(t)),n())},hn=async e=>{let t=await Ba(e);if(!t)return;let n=_?.backgroundCustom??[];await G({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},gn=async()=>{let e=Qt.trim();if(!_||!O(e))return;let t=_.backgroundCustom??[];$t(``),await G({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},_n=e=>{if(!_)return;let t=_.backgroundSource;G({backgroundCustom:_.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},K=async()=>{if(!_)return;let t=await za();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;_.protectedPaths.includes(r)||await G({protectedPaths:[..._.protectedPaths,r]})},q=()=>{let e=Ze.trim();_&&e&&!_.protectedPaths.includes(e)&&(Qe(``),G({protectedPaths:[..._.protectedPaths,e]}))},vn=()=>{if(!_||!Ue)return;let e=Ue.value.trim(),t=Ue.from;Ge(null),e.length!==0&&e!==t&&G({protectedPaths:_.protectedPaths.map(n=>n===t?e:n)})},yn=e=>{_&&G({protectedPaths:_.protectedPaths.filter(t=>t!==e)})},bn=async()=>{let e=await Xe();e.length>0&&await G({protectedPaths:e})},xn=()=>{if(!_||!qe)return;let e=qe.value.trim(),t=qe.from;Je(null),e&&e!==t&&G({directoryIndexBlacklist:_.directoryIndexBlacklist.map(n=>n===t?e:n)})},Sn=()=>{let e=at.trim();_&&e&&!_.directoryIndexBlacklist.includes(e)&&(st(``),G({directoryIndexBlacklist:[..._.directoryIndexBlacklist,e]}))},Cn=async()=>{if(!_)return;let t=await za();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;_.directoryIndexBlacklist.includes(r)||await G({directoryIndexBlacklist:[..._.directoryIndexBlacklist,r]})},wn=e=>{_&&G({directoryIndexBlacklist:_.directoryIndexBlacklist.filter(t=>t!==e)})},Tn=()=>{G({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},En=()=>{if(!_||pt===null)return;let e=pt.trim()||`yyyy/MM/dd HH:mm`;gt(null),e!==_.timeFormatPattern&&G({timeFormatPattern:e})},Dn=(e,t)=>{vt(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Zn(Ah,i),i})},On=se(_?.accentColor,N),kn=se(_?.secondaryColor,h),An=(e,t)=>{_&&(Dn(`accent`,On),Dn(`secondary`,kn),G({accentColor:e,secondaryColor:t}))},jn=(e,t)=>{_&&(Dn(e,e===`accent`?On:kn),G(e===`accent`?{accentColor:t}:{secondaryColor:t}))},Mn=async()=>{Tt(!0),Dt(null);try{Ct(await de())}catch{Dt(s(`could_not_check_for_updates`))}finally{Tt(!1)}},Nn=async()=>{At.current=!1,Dt(null),kt({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await fe();e.ok||Pn(e.error??``)}catch(e){Pn(e instanceof Error?e.message:String(e))}},Pn=e=>kt(t=>t&&{...t,phase:`error`,error:e}),Fn=()=>{kt(null),pe().catch(e=>Dt(e instanceof Error?e.message:String(e)))},In=async()=>{kt(e=>e&&{...e,phase:`installing`});try{let e=await me();e.ok||Pn(e.error??s(`the_update_failed`))}catch(e){Pn(e instanceof Error?e.message:String(e))}};(0,z.useEffect)(()=>he(e=>kt(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,z.useEffect)(()=>L(e=>kt(t=>t&&{...t,changelog:e.text})),[]),(0,z.useEffect)(()=>{Ot?.phase!==`ready`||At.current||(At.current=!0,In())},[Ot?.phase]);let Ln=async()=>{if(!_||!W)return;let e=W.name.trim()||`${W.accent.toUpperCase()} / ${W.secondary.toUpperCase()}`,t=[..._.themePresets,{name:e,accent:W.accent,secondary:W.secondary}];xt(null),await G({themePresets:t})},Rn=async e=>{_&&await G({themePresets:_.themePresets.filter((t,n)=>n!==e)})},zn=e=>{let t=jt;Mt(null),t&&t.role===e&&(e===`accent`?On:kn).toLowerCase()!==t.color.toLowerCase()&&Dn(e,t.color)},Bn=async()=>{let e=ze.trim();if(e&&!Ie){Le(!0),Re(null);try{Ne(await Qm(e,Ve)),Be(``)}catch{Re(s(`could_not_add_the_tag`))}finally{Le(!1)}}},Vn=async(e,t)=>{Ne(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await $m(e,t)||Re(s(`could_not_change_the_tag_s_color`))},Hn=async e=>{if(Ie)return;Le(!0),Re(null);let t=await Zm(e);Ne(await Xm()),t||Re(`"${e}" is still used by a folder whose index could not be updated.`),Le(!1)},Un=async()=>{let e=Pe;if(!e||Ie)return;let t=e.value.trim();t.length===0||t===e.name?Fe(null):(Le(!0),Re(null),await eh(e.name,t)?(Ne(await Xm()),Fe(null)):Re(`Could not rename "${e.name}".`),Le(!1))},Wn=async e=>{let t=new Set(nn.columns??be.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=Cl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await G({defaultView:{...nn,columns:n}})},Gn=async()=>{if(ce)return;let e=!un;R(!0),B(null);try{let t=await ft(e),r=t.registered&&t.pathMatches;P(t),v(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&B(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{B(`The request to Windows failed. Try again.`)}finally{R(!1)}},Kn=async e=>{if(!m){ee(!0);try{d(await Ke(e)),n()}finally{ee(!1)}}},qn=async()=>{if(Ee||!_)return;let e=!ln;De(!0),ke(null);try{let t=await et(e);xe(t);let r=an?t.registered&&t.pathMatches:e;v(e=>e&&{...e,defaultFileManager:r}),n(),an&&r!==e&&ke(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{ke(`The request to Windows failed. Try again.`)}finally{De(!1)}},Jn=async()=>{if(!Se){Ce(!0),Te(null);try{let e=await nt();ve(e);let t=e.registered&&e.pathMatches;v(e=>e&&{...e,archiveHandler:t}),n(),t||Te(`Windows did not accept the archive registration. Try again.`)}catch{Te(`The request to Windows failed. Try again.`)}finally{Ce(!1)}}},Yn=async()=>{if(!Se){Ce(!0),Te(null);try{let e=await rt();ve(e),v(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&Te(`The registration is still there. Try turning it off again.`)}catch{Te(`The request to Windows failed. Try again.`)}finally{Ce(!1)}}},Xn=async(e,t)=>{if(!_)return;let n={..._.extensionIcons};t===null?delete n[e]:n[e]=t,await G({extensionIcons:n})},Qn={...Ut,..._?.shortcuts};(0,z.useEffect)(()=>{if(!V)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Ae(null);return}let t=qt(e);t&&(Ae(null),G({shortcuts:{...Qn,[V]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[V,_]),(0,z.useEffect)(()=>{if(!je)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Me(!1);return}let t=qt(e);t&&(Me(!1),G({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[je,_]);let $n=async e=>{await G({recentLimit:Math.min(Math.max(e,0),50)})},er=(e,t)=>{let n=t??yt[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};bt(t=>({...t,[e]:void 0})),G(i)},tr=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Rt(null),await G({sharePortMode:`custom`,sharePort:n}),await Xc(n,`custom`)},nr=async e=>{let t=e===`custom`,n=t?_?.sharePort??8080:null;await G({sharePortMode:t?`custom`:`random`,sharePort:n}),await Xc(n,t?`custom`:`random`)};(0,z.useEffect)(()=>{sl().then(Ht,()=>void 0)},[]);let rr=async()=>{zt.length!==0&&(Ht(await cl(zt)),Bt(``))},ir=async()=>{Ht(await cl(null))},ar=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;Zt(!0),Yt(null);try{let e=await ht(t);Gt(e),Yt(e.error),e.error||await G({startupMode:t})}finally{Zt(!1)}},or=async e=>{await G({galleryRoots:e.length>0?e:null})},sr=async()=>{let e=await za(),t=_?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await or([...t,e])},cr=async()=>{let e=ne.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Xn(e,E),T(``))},lr=async()=>{A(!0);try{let e=await za();if(!e)return;let t=await Ba([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await ot(e.replace(/[\\/][^\\/]+$/,``),b(e),`file:${t}`)&&(cn(),te({folder:e,icon:t}))}finally{A(!1)}},ur=async(e,t)=>{let n={..._?.fonts};t?n[e]=t:delete n[e],await G({fonts:n})};return(0,J.jsxs)(Gh,{children:[(0,J.jsxs)(Kh,{ref:en,children:[(0,J.jsxs)(qh,{ref:dn(`application`),children:[(0,J.jsx)(Wh,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`version`)}),(0,J.jsx)(Gg,{children:e?`v${e.version}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`platform`)}),(0,J.jsx)(Gg,{children:e?.platform??`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`language`)}),(0,J.jsx)($,{children:s(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(Vh,{disabled:!_,onChange:e=>void G({language:e}),options:[Eh,...c.length>0?c:[Sh]],value:_?.language??Sh})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`picker_window_size`)}),(0,J.jsx)($,{children:s(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(n_,{inputMode:`numeric`,onBlur:e=>er(`width`,e.currentTarget.value),onChange:e=>bt(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:yt.width??String(_?.pickerWindowWidth??1200)}),(0,J.jsx)(Gg,{children:`×`}),(0,J.jsx)(n_,{inputMode:`numeric`,onBlur:e=>er(`height`,e.currentTarget.value),onChange:e=>bt(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:yt.height??String(_?.pickerWindowHeight??800)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`web_server_port`)}),(0,J.jsx)($,{children:s(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(Fo,{disabled:!_,onChange:e=>void nr(e),options:[{value:`random`,label:s(`random`)},{value:`custom`,label:s(`custom_port`)}],value:_?.sharePortMode??`random`,width:160})})]}),_?.sharePortMode===`custom`&&(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`custom_port`)}),(0,J.jsx)($,{children:s(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(n_,{inputMode:`numeric`,onBlur:e=>void tr(e.currentTarget.value),onChange:e=>Rt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:Lt??(_?.sharePort?String(_.sharePort):``)})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`link_paths`)}),(0,J.jsx)($,{children:s(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(Fo,{disabled:!_,onChange:e=>void G({linkPathMode:e}),options:[{value:`relative`,label:s(`relative`)},{value:`absolute`,label:s(`absolute`)}],value:_?.linkPathMode??`relative`,width:160})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`global_hotkey`)}),(0,J.jsx)($,{children:s(`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(P_,{$listening:je,disabled:!_,onClick:()=>Me(!0),type:`button`,children:je?s(`press_a_key`):_?.globalHotkey?Jt(_.globalHotkey):s(`none`)}),_?.globalHotkey&&(0,J.jsx)(Yg,{onClick:()=>void G({globalHotkey:null}),type:`button`,children:s(`clear`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`open_yafm_links`)}),(0,J.jsx)($,{children:s(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),M.registered&&!M.pathMatches&&(0,J.jsx)(Wg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:M.registeredPath??`?`})}),ge&&(0,J.jsx)(Wg,{children:ge})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)($g,{$on:un,children:s(un?`active`:`off`)}),(0,J.jsx)(e_,{$on:un,disabled:ce,onClick:()=>void Gn(),title:s(un?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,J.jsx)(t_,{})})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`use_as_the_default_file_manager`)}),(0,J.jsx)($,{children:s(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),ye?.registered&&!ye.pathMatches&&(0,J.jsx)(Wg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ye.registeredPath??`?`})}),Oe&&(0,J.jsx)(Wg,{children:Oe})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)($g,{$on:ln,children:s(ln?`active`:`off`)}),(0,J.jsx)(e_,{$on:ln,disabled:!_||Ee,onClick:()=>void qn(),title:s(ln?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,J.jsx)(t_,{})})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`open_archives_with_this_app`)}),(0,J.jsx)($,{children:s(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,J.jsx)($,{children:s(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),_e?.registered&&!_e.pathMatches&&(0,J.jsx)(Wg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:_e.registeredPath??`?`})}),we&&(0,J.jsx)(Wg,{children:we})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)($g,{$on:on,children:s(on?`active`:`off`)}),(0,J.jsx)(F_,{disabled:!_||Se||on,onClick:()=>void Jn(),type:`button`,children:s(`register`)}),e?.platform===`windows`&&(0,J.jsx)(F_,{onClick:()=>void F(`ms-settings:defaultapps`),type:`button`,children:s(`default_apps`)}),(0,J.jsx)(Qg,{disabled:!_||Se||!sn,onClick:()=>void Yn(),type:`button`,children:s(`unregister`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`reopen_the_tabs_that_were_open`)}),(0,J.jsx)($,{children:s(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,J.jsx)(e_,{$on:_?.restoreTabs??!0,disabled:!_,onClick:()=>void G({restoreTabs:!_?.restoreTabs}),type:`button`,children:(0,J.jsx)(t_,{})})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`share-access`),children:[(0,J.jsx)(Wh,{note:`share_access_note`,title:`share_access`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(Q,{children:s(`share_access_require_approval`)}),(0,J.jsx)(th,{})]}),(0,J.jsx)($,{children:s(`share_access_note`)})]}),(0,J.jsx)(e_,{$on:_?.shareAccessEnabled??!0,disabled:!_,onClick:()=>void G({shareAccessEnabled:!(_?.shareAccessEnabled??!0)}),type:`button`,children:(0,J.jsx)(t_,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Z,{children:(0,J.jsx)(Q,{children:s(`share_access_approval_minutes`)})}),(0,J.jsx)(Hg,{children:(0,J.jsx)(Bg,{max:1440,min:1,onChange:e=>void G({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:_?.shareApprovalMinutes??60})})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Z,{children:(0,J.jsx)(Q,{children:s(`share_access_denial_seconds`)})}),(0,J.jsx)(Hg,{children:(0,J.jsx)(Bg,{max:3600,min:1,onChange:e=>void G({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:_?.shareDenialSeconds??10})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Ug,{children:(0,J.jsx)(Q,{children:s(`password`)})}),(0,J.jsx)($,{children:s(`share_access_password_note`)}),Vt&&(0,J.jsx)($,{children:s(`share_access_password_is_set`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(Vg,{autoComplete:`new-password`,onChange:e=>Bt(e.target.value),placeholder:s(`password`),type:`password`,value:zt}),(0,J.jsx)(F_,{disabled:zt.length===0,onClick:()=>void rr(),type:`button`,children:s(`save`)}),Vt&&(0,J.jsx)(Qg,{onClick:()=>void ir(),type:`button`,children:s(`clear`)})]})]}),(0,J.jsx)(X,{children:(0,J.jsxs)(Z,{children:[(0,J.jsx)(Ug,{children:(0,J.jsx)(Q,{children:s(`devices`)})}),(0,J.jsx)($,{children:s(`share_access_devices_note`)})]})}),(0,J.jsx)(Nh,{approvalMinutes:_?.shareApprovalMinutes??60,denialSeconds:_?.shareDenialSeconds??10})]})]}),(0,J.jsxs)(qh,{ref:dn(`startup`),children:[(0,J.jsx)(Wh,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`start_with_the_computer`)}),(0,J.jsx)($,{children:s(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),Kt&&(0,J.jsx)(Wg,{children:Kt}),Wt&&!Wt.supported&&(0,J.jsx)(Wg,{children:s(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(Fo,{disabled:!_||Xt||Wt!==null&&!Wt.supported,onChange:e=>void ar(e),options:[{value:`none`,label:s(`none`)},{value:`shortcut`,label:s(`shortcut`)},{value:`task`,label:s(`scheduled_task`)}],value:Wt?.mode??_?.startupMode??`none`,width:170})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`start_hidden_in_the_tray`)}),(0,J.jsx)($,{children:s(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(e_,{$on:_?.startHidden??!1,disabled:!_,onClick:()=>void G({startHidden:!_?.startHidden}),type:`button`,children:(0,J.jsx)(t_,{})})})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`fonts`),children:[(0,J.jsx)(Wh,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`}),(0,J.jsxs)(Xh,{children:[rh.map(e=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(e.label)}),(0,J.jsx)($,{children:s(`falls_back_to_font_until_another_family_is_chosen`,{font:s(e.fallback)})})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(sh,{defaultLabel:s(e.fallback),disabled:!_,fonts:Ft,onChange:t=>void ur(e.id,t),sample:e.sample,value:_?.fonts?.[e.id]??null})})]},e.id)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`reset`)}),(0,J.jsx)($,{children:s(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(F_,{onClick:()=>void G({fonts:{}}),type:`button`,children:s(`reset`)})})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`time`),children:[(0,J.jsx)(Wh,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`}),(0,J.jsx)(Xh,{children:(0,J.jsxs)(Zh,{children:[(0,J.jsxs)(Qh,{children:[(0,J.jsx)(Q,{children:s(`format`)}),(0,J.jsx)($,{children:s(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,J.jsx)(O_,{children:wh.map(e=>(0,J.jsx)(k_,{$active:(_?.timeFormat??`24`)===e.id,onClick:()=>void G({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(_?.timeFormat??`24`)===`custom`&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(A_,{"aria-label":s(`pattern`),onBlur:En,onChange:e=>gt(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),En()):e.key===`Escape`&&gt(null)},spellCheck:!1,value:pt??_?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,J.jsx)($,{children:s(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,J.jsxs)(j_,{children:[(0,J.jsx)(`span`,{children:s(`preview`)}),(0,J.jsx)(`code`,{children:C(Th,_?.timeFormat,pt??_?.timeFormatPattern)})]})]})})]}),(0,J.jsxs)(qh,{ref:dn(`updates`),children:[(0,J.jsx)(Wh,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`current_version`)}),(0,J.jsx)(Gg,{children:e?`v${e.version}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`latest_version`)}),(0,J.jsx)(Gg,{children:St?`v${St.latest}`:`—`})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:St?St.available?s(`version_version_is_available`,{version:St.latest}):s(`you_are_on_the_latest_version`):s(`not_checked_yet`)}),(0,J.jsx)($,{children:St?.available?s(`the_installer_downloads_installs_itself_and_closes_the_app`):s(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,J.jsx)(Hg,{children:St?.available?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(F_,{onClick:()=>void le(),type:`button`,children:s(`open_release_page`)}),an&&(0,J.jsx)(F_,{disabled:Ot!==null,onClick:()=>void Nn(),type:`button`,children:s(`download_and_install`)})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(F_,{disabled:wt,onClick:()=>void Mn(),type:`button`,children:s(wt?`checking`:`check_for_updates`)}),(0,J.jsx)(F_,{onClick:()=>void I(),type:`button`,children:s(`open_log_folder`)})]})})]}),Et&&(0,J.jsx)(X,{children:(0,J.jsx)(Wg,{children:Et})})]})]}),(0,J.jsxs)(qh,{ref:dn(`colors`),children:[(0,J.jsx)(Wh,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(Zh,{children:[(0,J.jsxs)(Qh,{children:[(0,J.jsx)(Q,{children:s(`theme`)}),(0,J.jsx)($,{children:s(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,J.jsx)(O_,{children:Ch.map(e=>(0,J.jsx)(k_,{$active:(_?.themeMode??`system`)===e.id,onClick:()=>void G({themeMode:e.id}),type:`button`,children:s(e.label)},e.id))})]}),(0,J.jsxs)(Zh,{children:[(0,J.jsxs)(Qh,{children:[(0,J.jsx)(Q,{children:s(`presets`)}),(0,J.jsx)($,{children:s(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,J.jsxs)($h,{children:[ed.map(e=>(0,J.jsxs)(eg,{$on:On.toLowerCase()===e.accent&&kn.toLowerCase()===e.secondary,onClick:()=>An(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,J.jsxs)(sg,{children:[(0,J.jsx)(`i`,{style:{background:e.accent}}),(0,J.jsx)(`i`,{style:{background:e.secondary}})]}),(0,J.jsx)(tg,{children:s(e.name)})]},e.name)),rn.map((e,t)=>(0,J.jsxs)(ng,{children:[(0,J.jsxs)(eg,{$on:On.toLowerCase()===e.accent.toLowerCase()&&kn.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>An(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,J.jsxs)(sg,{children:[(0,J.jsx)(`i`,{style:{background:e.accent}}),(0,J.jsx)(`i`,{style:{background:e.secondary}})]}),(0,J.jsx)(tg,{children:e.name})]}),(0,J.jsx)(rg,{onClick:()=>void Rn(t),title:s(`remove_preset`),type:`button`,children:(0,J.jsx)(Li,{size:9})})]},`${e.name}-${t}`)),W?(0,J.jsxs)(ag,{children:[(0,J.jsxs)(sg,{children:[(0,J.jsx)(`i`,{style:{background:W.accent}}),(0,J.jsx)(`i`,{style:{background:W.secondary}})]}),(0,J.jsx)(og,{autoFocus:!0,maxLength:24,onChange:e=>xt({...W,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Ln()):e.key===`Escape`&&(e.preventDefault(),xt(null))},placeholder:s(`preset_name`),spellCheck:!1,value:W.name}),(0,J.jsx)(Yg,{onClick:()=>void Ln(),type:`button`,children:s(`save`)}),(0,J.jsx)(Yg,{onClick:()=>xt(null),type:`button`,children:s(`cancel`)})]}):(0,J.jsxs)(ig,{disabled:!_,onClick:()=>xt({name:``,accent:On,secondary:kn}),title:s(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,J.jsx)(Ti,{size:12}),s(`add_preset`)]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`accent_color`)}),(0,J.jsx)($,{children:s(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(Uh,{colors:_t.accent,current:On,onApply:e=>jn(`accent`,e)}),(0,J.jsx)(Xg,{"aria-label":s(`accent_color`),disabled:!_,onBlur:()=>zn(`accent`),onChange:e=>void G({accentColor:e.target.value}),onFocus:()=>Mt({role:`accent`,color:On}),type:`color`,value:On}),(0,J.jsx)(Zg,{children:On.toUpperCase()})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`secondary_color`)}),(0,J.jsx)($,{children:s(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(Uh,{colors:_t.secondary,current:kn,onApply:e=>jn(`secondary`,e)}),(0,J.jsx)(Xg,{"aria-label":s(`secondary_color`),disabled:!_,onBlur:()=>zn(`secondary`),onChange:e=>void G({secondaryColor:e.target.value}),onFocus:()=>Mt({role:`secondary`,color:kn}),type:`color`,value:kn}),(0,J.jsx)(Zg,{children:kn.toUpperCase()})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`reset_colors`)}),(0,J.jsx)($,{children:s(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(Yg,{disabled:!_,onClick:()=>{Dn(`accent`,On),Dn(`secondary`,kn),G({accentColor:null,secondaryColor:null})},type:`button`,children:s(`reset`)})})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`background`),children:[(0,J.jsx)(Wh,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(Zh,{children:[(0,J.jsxs)(Qh,{children:[(0,J.jsx)(Q,{children:s(`wallpaper`)}),(0,J.jsx)($,{children:s(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,J.jsx)(m_,{children:(0,J.jsx)(h_,{$active:!_?.backgroundSource,onClick:()=>void G({backgroundSource:null}),title:s(`none`),type:`button`,children:(0,J.jsx)(b_,{children:s(`none`)})})}),(0,J.jsxs)(d_,{children:[rd.map(e=>(0,J.jsxs)(f_,{children:[(0,J.jsx)(p_,{children:s(e.name)}),(0,J.jsx)(m_,{children:e.variants.map(t=>(0,J.jsx)(h_,{$active:_?.backgroundSource===t.id,onClick:()=>void G({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,J.jsx)(`img`,{alt:``,src:y===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,J.jsxs)(f_,{children:[(0,J.jsx)(p_,{children:s(`motion`)}),(0,J.jsx)(m_,{children:nd.map(e=>(0,J.jsxs)(h_,{$active:_?.backgroundSource===e.id,onClick:()=>void G({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,J.jsx)(`img`,{alt:``,src:e.poster}),(0,J.jsx)(v_,{children:(0,J.jsx)(Wi,{size:11})})]},e.id))})]}),(0,J.jsxs)(f_,{children:[(0,J.jsx)(p_,{children:s(`custom`)}),(0,J.jsxs)(m_,{children:[(_?.backgroundCustom??[]).map(e=>(0,J.jsx)(Bh,{active:_?.backgroundSource===`file:${e}`||_?.backgroundSource===`url:${e}`||_?.backgroundSource===e,onRemove:()=>_n(e),onSelect:()=>void G({backgroundSource:O(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,J.jsxs)(y_,{onClick:()=>void hn([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,J.jsx)(Ti,{size:12}),s(`image_2`)]}),(0,J.jsxs)(y_,{onClick:()=>void hn([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,J.jsx)(Ti,{size:12}),s(`video`)]})]})]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`image_or_video_url`)}),(0,J.jsx)($,{children:s(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(n_,{onChange:e=>$t(e.target.value),onKeyDown:e=>{e.key===`Enter`&&gn()},placeholder:`https://…`,value:Qt}),(0,J.jsx)(Yg,{disabled:!O(Qt),onClick:()=>void gn(),type:`button`,children:s(`add`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`blur`)}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(u_,{max:40,min:0,onChange:e=>void G({backgroundBlur:Number(e.target.value)}),type:`range`,value:_?.backgroundBlur??0}),(0,J.jsxs)(Gg,{children:[_?.backgroundBlur??0,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`saturation`)}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(u_,{max:200,min:0,onChange:e=>void G({backgroundSaturation:Number(e.target.value)}),type:`range`,value:_?.backgroundSaturation??100}),(0,J.jsxs)(Gg,{children:[_?.backgroundSaturation??100,`%`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`brightness`)}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(u_,{max:150,min:40,onChange:e=>void G({backgroundBrightness:Number(e.target.value)}),type:`range`,value:_?.backgroundBrightness??100}),(0,J.jsxs)(Gg,{children:[_?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`safety`),children:[(0,J.jsx)(Wh,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(Zh,{children:[(0,J.jsxs)(Qh,{children:[(0,J.jsx)(Q,{children:s(`protected_folders`)}),(0,J.jsx)($,{children:s(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,J.jsx)(x_,{children:(_?.protectedPaths??[]).map(e=>(0,J.jsxs)(S_,{children:[(0,J.jsx)(C_,{"aria-label":s(`protected_path`),onBlur:vn,onChange:t=>Ge({from:e,value:t.target.value}),onFocus:()=>Ge({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),vn()):e.key===`Escape`&&Ge(null)},spellCheck:!1,value:Ue?.from===e?Ue.value:e}),(0,J.jsx)(w_,{onClick:()=>yn(e),title:s(`remove`),type:`button`,children:(0,J.jsx)(Li,{size:10})})]},e))}),(0,J.jsxs)(E_,{children:[(0,J.jsx)(D_,{"aria-label":s(`new_protected_rule`),onChange:e=>Qe(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),q())},placeholder:`*.log`,spellCheck:!1,value:Ze}),(0,J.jsx)(Yg,{onClick:q,type:`button`,children:s(`add_the_rule`)})]}),(0,J.jsxs)(T_,{children:[(0,J.jsx)(Yg,{onClick:()=>void bn(),type:`button`,children:s(`restore_defaults`)}),(0,J.jsx)(Yg,{onClick:()=>void K(),type:`button`,children:s(`add_folder_2`)})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`confirmation_delay`)}),(0,J.jsx)($,{children:s(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(u_,{max:30,min:2,onChange:e=>void G({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:_?.deleteDelaySeconds??5}),(0,J.jsxs)(Gg,{children:[_?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`tags`),children:[(0,J.jsx)(Wh,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(qg,{"aria-label":s(`color_of_the_new_tag`),onChange:e=>He(e.target.value),type:`color`,value:Ve}),(0,J.jsx)(n_,{onChange:e=>Be(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Bn())},placeholder:s(`new_tag`),spellCheck:!1,value:ze})]}),(0,J.jsx)($,{children:s(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(Yg,{disabled:Ie||ze.trim().length===0,onClick:()=>void Bn(),type:`button`,children:s(`add`)})})]}),U&&(0,J.jsx)(X,{children:(0,J.jsx)(Wg,{children:U})}),H.length===0&&(0,J.jsx)(X,{children:(0,J.jsx)($,{children:s(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),H.map(e=>(0,J.jsx)(X,{children:Pe?.name===e.name?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(qg,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void Vn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,J.jsx)(Jg,{autoFocus:!0,disabled:Ie,onChange:t=>Fe({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Un()):e.key===`Escape`&&(e.preventDefault(),Fe(null))},value:Pe.value})]}),(0,J.jsx)($,{children:s(`press_enter_to_save_escape_to_cancel`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(Yg,{disabled:Ie,onClick:()=>void Un(),type:`button`,children:s(`save`)}),(0,J.jsx)(Yg,{disabled:Ie,onClick:()=>Fe(null),type:`button`,children:s(`cancel`)})]})]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(qg,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void Vn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,J.jsx)(Q,{children:e.name})]}),(0,J.jsx)($,{children:oe(s,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(Yg,{disabled:Ie,onClick:()=>Fe({name:e.name,value:e.name}),type:`button`,children:s(`edit`)}),(0,J.jsxs)(Qg,{disabled:Ie,onClick:()=>void Hn(e.name),type:`button`,children:[(0,J.jsx)(Fi,{size:13}),s(`remove`)]})]})]})},e.name))]})]}),(0,J.jsxs)(qh,{ref:dn(`files-view`),children:[(0,J.jsx)(Wh,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`default_view`)}),(0,J.jsx)($,{children:s(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsxs)(c_,{children:[(0,J.jsx)(l_,{$on:nn.mode===`list`,onClick:()=>void G({defaultView:{...nn,mode:`list`}}),type:`button`,children:s(`list`)}),(0,J.jsx)(l_,{$on:nn.mode===`grid`,onClick:()=>void G({defaultView:{...nn,mode:`grid`}}),type:`button`,children:s(`grid`)})]})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`list_icon_size`)}),(0,J.jsx)($,{children:s(`the_icon_in_the_list_rows`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(u_,{max:48,min:16,onChange:e=>void G({defaultView:{...nn,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:nn.iconSize}),(0,J.jsxs)(Gg,{children:[nn.iconSize,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`grid_size`)}),(0,J.jsx)($,{children:s(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(u_,{max:260,min:100,onChange:e=>void G({defaultView:{...nn,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:nn.gridSize}),(0,J.jsxs)(Gg,{children:[nn.gridSize,`px`]})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(Q,{children:s(`selection_checkboxes`)}),(0,J.jsx)(th,{})]}),(0,J.jsx)($,{children:s(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,J.jsx)(e_,{$on:_?.showCheckboxes??!0,disabled:!_,onClick:()=>void G({showCheckboxes:!(_?.showCheckboxes??!0)}),type:`button`,children:(0,J.jsx)(t_,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(Q,{children:s(`open_with_a_single_click`)}),(0,J.jsx)(th,{})]}),(0,J.jsx)($,{children:s(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,J.jsx)(e_,{$on:_?.openOnSingleClick??!1,disabled:!_,onClick:()=>void G({openOnSingleClick:!(_?.openOnSingleClick??!1)}),type:`button`,children:(0,J.jsx)(t_,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(Q,{children:s(`open_the_file_tray_while_dragging`)}),(0,J.jsx)(th,{})]}),(0,J.jsx)($,{children:s(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,J.jsx)(e_,{$on:_?.trayAutoShow??!0,disabled:!_,onClick:()=>void G({trayAutoShow:!(_?.trayAutoShow??!0)}),type:`button`,children:(0,J.jsx)(t_,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(Q,{children:s(`confirm_before_deleting`)}),(0,J.jsx)(th,{})]}),(0,J.jsx)($,{children:s(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,J.jsx)(e_,{$on:_?.confirmDelete??!1,disabled:!_,onClick:()=>void G({confirmDelete:!(_?.confirmDelete??!1)}),type:`button`,children:(0,J.jsx)(t_,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(Q,{children:s(`automatic_rename_suffix`)}),(0,J.jsx)(th,{})]}),(0,J.jsx)($,{children:s(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(Fo,{disabled:!_,onChange:e=>void G({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:_?.conflictNameStyle??`space_parentheses`,width:160})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(Q,{children:s(`play_audio_in_video_previews`)}),(0,J.jsx)(th,{})]}),(0,J.jsx)($,{children:s(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,J.jsx)(e_,{$on:_?.previewVideoAudio??!1,disabled:!_,onClick:()=>void G({previewVideoAudio:!(_?.previewVideoAudio??!1)}),type:`button`,children:(0,J.jsx)(t_,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(Q,{children:s(`autoplay_video_previews`)}),(0,J.jsx)(th,{})]}),(0,J.jsx)($,{children:s(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,J.jsx)(e_,{$on:_?.previewVideoAutoplay??!1,disabled:!_,onClick:()=>void G({previewVideoAutoplay:!(_?.previewVideoAutoplay??!1)}),type:`button`,children:(0,J.jsx)(t_,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(Q,{children:s(`preview_panel_under_the_list`)}),(0,J.jsx)(th,{})]}),(0,J.jsx)($,{children:s(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,J.jsx)(e_,{$on:nn.showImages??!0,onClick:()=>void G({defaultView:{...nn,showImages:!(nn.showImages??!0)}}),type:`button`,children:(0,J.jsx)(t_,{})})]}),(0,J.jsx)(X,{children:(0,J.jsxs)(Z,{children:[(0,J.jsxs)(Ug,{children:[(0,J.jsx)(Q,{children:s(`columns`)}),(0,J.jsx)(th,{})]}),(0,J.jsx)($,{children:s(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,J.jsx)(X,{children:(0,J.jsxs)(M_,{children:[Cl.map(e=>(0,J.jsxs)(N_,{children:[(0,J.jsx)(`input`,{checked:(nn.columns??[]).includes(e.id),onChange:()=>void Wn(e.id),type:`checkbox`}),(0,J.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,J.jsxs)(N_,{children:[(0,J.jsx)(`input`,{checked:(nn.columns??[]).includes(`linkTarget`),onChange:()=>void Wn(`linkTarget`),type:`checkbox`}),(0,J.jsx)(`span`,{children:s(`link_target_after_the_name`)})]})]})})]}),(0,J.jsxs)(z_,{children:[s(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,J.jsx)(th,{}),` `,s(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,J.jsxs)(qh,{ref:dn(`shortcuts`),children:[(0,J.jsx)(Wh,{note:`the_keys_this_window_listens_for_click_a_combination_to_record_a_new_one`,title:`shortcuts`}),(0,J.jsxs)(Xh,{children:[xh.map(({id:e,label:t,note:n})=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(t)}),(0,J.jsx)($,{children:s(n)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(P_,{$listening:V===e,onClick:()=>Ae(e),type:`button`,children:V===e?s(`press_a_key`):Jt(Qn[e])})})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`reset`)}),(0,J.jsx)($,{children:s(`back_to_the_default_combination_for_every_action`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(F_,{onClick:()=>void G({shortcuts:{...Ut}}),type:`button`,children:s(`reset`)})})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`memory`),children:[(0,J.jsx)(Wh,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(Ag,{children:[(0,J.jsxs)(jg,{children:[(0,J.jsx)(Q,{children:s(`process_memory`)}),(0,J.jsx)(Gg,{children:j?`${S(j.private)} · ${gg(j.private,j.available)}`:`—`})]}),(0,J.jsx)(Mg,{children:(0,J.jsx)(Ng,{$ratio:j?j.private/Math.max(j.available,1):0,$tone:x(j?j.private/Math.max(j.available,1):0)})}),(0,J.jsx)($,{children:j?s(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:S(j.available),resident:S(j.workingSet)}):s(`reading_the_current_usage`)})]}),(0,J.jsxs)(Ag,{children:[(0,J.jsxs)(jg,{children:[(0,J.jsx)(Q,{children:s(`managed_heap`)}),(0,J.jsx)(Gg,{children:j?`${S(j.managed)} · ${gg(j.managed,j.private)}`:`—`})]}),(0,J.jsx)(Mg,{children:(0,J.jsx)(Ng,{$ratio:j?j.managed/Math.max(j.private,1):0,$tone:`var(--accent-secondary)`})}),(0,J.jsx)($,{children:s(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,J.jsxs)(Ag,{children:[(0,J.jsxs)(jg,{children:[(0,J.jsx)(Q,{children:s(`native_and_runtime`)}),(0,J.jsx)(Gg,{children:j?`${S(Math.max(0,j.private-j.managed))} · ${gg(Math.max(0,j.private-j.managed),j.private)}`:`—`})]}),(0,J.jsx)(Mg,{children:(0,J.jsx)(Ng,{$ratio:j?Math.max(0,j.private-j.managed)/Math.max(j.private,1):0,$tone:`var(--accent-primary)`})}),(0,J.jsx)($,{children:s(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`free_memory`)}),(0,J.jsx)($,{children:s(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(F_,{onClick:()=>void lt().then(ae),type:`button`,children:s(`trim_now`)})})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`overview`),children:[(0,J.jsx)(Wh,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`}),(0,J.jsx)(Xh,{children:(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`recent_items`)}),(0,J.jsx)($,{children:s(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(n_,{max:50,min:0,onChange:e=>void $n(Number(e.target.value)),type:`number`,value:_?.recentLimit??10})})]})})]}),(0,J.jsxs)(qh,{ref:dn(`gallery`),children:[(0,J.jsx)(Wh,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`}),(0,J.jsxs)(Xh,{children:[(_?.galleryRoots??[]).map(e=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:b(e)}),(0,J.jsx)($,{children:e})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(I_,{onClick:()=>void or((_?.galleryRoots??[]).filter(t=>t!==e)),title:s(`stop_scanning_this_folder`),type:`button`,children:(0,J.jsx)(Li,{size:12})})})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`scan_folders`)}),(0,J.jsx)($,{children:(_?.galleryRoots??[]).length===0?s(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):s(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,J.jsx)(Hg,{children:(0,J.jsx)(F_,{onClick:()=>void sr(),type:`button`,children:s(`choose_folder`)})})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`icons`),children:[(0,J.jsx)(Wh,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`use_system_file_icons`)}),(0,J.jsx)($,{children:s(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,J.jsx)(e_,{$on:_?.systemIcons??!1,disabled:!_,onClick:()=>void G({systemIcons:!_?.systemIcons}),type:`button`,children:(0,J.jsx)(t_,{})})]}),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`use_custom_folder_icons`)}),(0,J.jsx)($,{children:s(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,J.jsx)(e_,{$on:_?.customFolderIcons??!1,disabled:!_,onClick:()=>void G({customFolderIcons:!_?.customFolderIcons}),type:`button`,children:(0,J.jsx)(t_,{})})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`extension-icons`),children:[(0,J.jsx)(Wh,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`}),(0,J.jsxs)(Xh,{children:[Object.entries(_?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:e}),(0,J.jsx)($,{children:Lh(s,t)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(Rh,{source:t}),(0,J.jsx)(I_,{onClick:()=>void Xn(e,null),title:s(`remove_this_rule`),type:`button`,children:(0,J.jsx)(Li,{size:12})})]})]},e)),(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`add_a_rule`)}),(0,J.jsx)($,{children:s(`extension_and_the_icon_to_draw_for_it`)})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)(n_,{onChange:e=>T(e.target.value),placeholder:`.psd`,spellCheck:!1,value:ne}),(0,J.jsxs)(s_,{children:[(0,J.jsx)(I_,{onClick:()=>k(e=>!e),title:s(`choose_the_icon`),type:`button`,children:(0,J.jsx)(Rh,{source:E})}),D&&(0,J.jsx)(_f,{allowDefault:!1,onClose:()=>k(!1),onPick:e=>{re(e??`file`),k(!1)},value:E})]}),(0,J.jsx)(I_,{onClick:()=>void cr(),title:s(`add_the_rule`),type:`button`,children:(0,J.jsx)(Ti,{size:13})})]})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`folder-icons`),children:[(0,J.jsx)(Wh,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`give_a_folder_its_own_icon`)}),(0,J.jsx)($,{children:s(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,J.jsxs)(Hg,{children:[w&&(0,J.jsx)(zh,{src:w.icon}),(0,J.jsx)(F_,{disabled:ie,onClick:()=>void lr(),type:`button`,children:s(ie?`choosing`:`choose_folder_and_icon`)})]})]}),w&&(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:b(w.folder)}),(0,J.jsx)($,{children:w.folder})]}),(0,J.jsx)(Hg,{children:(0,J.jsxs)(R_,{children:[(0,J.jsx)(Ii,{size:11}),` `,s(`saved`)]})})]})]})]}),(0,J.jsxs)(qh,{ref:dn(`folder-index`),children:[(0,J.jsx)(Wh,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,J.jsx)($,{children:s(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,J.jsx)(e_,{$on:_?.writeDirectoryIndex??!0,disabled:!_,onClick:()=>void G({writeDirectoryIndex:!_?.writeDirectoryIndex}),type:`button`,children:(0,J.jsx)(t_,{})})]}),(0,J.jsxs)(Zh,{children:[(0,J.jsxs)(Qh,{children:[(0,J.jsx)(Q,{children:s(`directory_index_blacklist`)}),(0,J.jsx)($,{children:s(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,J.jsx)(x_,{children:(_?.directoryIndexBlacklist??[]).map(e=>(0,J.jsxs)(S_,{children:[(0,J.jsx)(C_,{"aria-label":s(`directory_index_blacklist_rule`),onBlur:xn,onChange:t=>Je({from:e,value:t.target.value}),onFocus:()=>Je({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),xn()):e.key===`Escape`&&Je(null)},spellCheck:!1,value:qe?.from===e?qe.value:e}),(0,J.jsx)(w_,{onClick:()=>wn(e),title:s(`remove`),type:`button`,children:(0,J.jsx)(Li,{size:10})})]},e))}),(0,J.jsxs)(E_,{children:[(0,J.jsx)(D_,{"aria-label":s(`directory_index_blacklist_rule`),onChange:e=>st(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Sn())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:at}),(0,J.jsx)(Yg,{onClick:Sn,type:`button`,children:s(`add_the_rule`)})]}),(0,J.jsxs)(T_,{children:[(0,J.jsx)(Yg,{onClick:Tn,type:`button`,children:s(`restore_defaults`)}),(0,J.jsx)(Yg,{onClick:()=>void Cn(),type:`button`,children:s(`add_folder_2`)})]})]})]}),!(_?.writeDirectoryIndex??!0)&&(0,J.jsx)(B_,{children:Ih(s,e?.platform)})]}),(0,J.jsxs)(qh,{ref:dn(`indexing`),children:[(0,J.jsx)(Wh,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,J.jsx)(Fh,{})]}),(0,J.jsxs)(qh,{ref:dn(`files`),children:[(0,J.jsx)(Wh,{note:`what_the_listings_include`,title:`files`}),(0,J.jsxs)(Xh,{children:[(0,J.jsxs)(X,{children:[(0,J.jsxs)(Z,{children:[(0,J.jsx)(Q,{children:s(`show_hidden_files`)}),(0,J.jsxs)($,{children:[s(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),u?.overridden&&(0,J.jsx)(Kg,{disabled:m,onClick:()=>void Kn(null),type:`button`,children:s(`follow_system`)})]})]}),(0,J.jsxs)(Hg,{children:[(0,J.jsx)($g,{$on:u?.showHidden??!1,children:u?.overridden?Ph(s,u.showHidden):s(`follow_system`)}),(0,J.jsx)(e_,{$on:u?.showHidden??!1,disabled:!u||m,onClick:()=>void Kn(!(u?.showHidden??!1)),title:s(`show_hidden_files`),type:`button`,children:(0,J.jsx)(t_,{})})]})]}),(0,J.jsxs)(X,{children:[(0,J.jsx)(Q,{children:s(`protected_operating_system_files`)}),(0,J.jsx)(Gg,{children:Ph(s,u?.showSystem)})]})]}),(0,J.jsx)(z_,{children:s(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]})]}),(0,J.jsxs)(dg,{"aria-label":s(`settings_sections`),onWheel:mn,children:[(0,J.jsx)(fg,{children:s(`sections`)}),(0,J.jsx)(pg,{children:Oh.map(({id:e,label:t})=>(0,J.jsxs)(mg,{$active:Nt===e,onClick:()=>fn(e),type:`button`,children:[(0,J.jsx)(Yh,{children:kh[t]}),(0,J.jsx)(`span`,{children:s(t)})]},e))}),(0,J.jsx)(hg,{children:s(`changes_are_saved_as_you_make_them`)})]}),Ot&&(0,no.createPortal)((0,J.jsx)(yg,{children:(0,J.jsxs)(bg,{"aria-modal":`true`,role:`dialog`,children:[(0,J.jsxs)(xg,{children:[(0,J.jsx)(`h2`,{children:s(`software_update`)}),(0,J.jsx)(`p`,{children:St?.latest?s(`version_version`,{version:St.latest}):s(`preparing_the_update`)})]}),(0,J.jsx)(Sg,{children:s(`changelog`)}),Ot.changelog?(0,J.jsx)(Cg,{onClick:Tg,children:(0,J.jsx)(a,{source:Ot.changelog})}):(0,J.jsx)(wg,{children:Ot.phase===`changelog`?s(`loading_the_changelog`):s(`the_changelog_could_not_be_loaded`)}),(0,J.jsxs)(Eg,{children:[(0,J.jsx)(`span`,{children:_g(Ot,s)}),(0,J.jsx)(`span`,{children:vg(Ot)})]}),(0,J.jsx)(Dg,{children:(0,J.jsx)(Og,{$percent:Math.max(0,Math.min(100,Ot.percent))})}),Ot.error&&(0,J.jsx)(Wg,{children:Ot.error}),(0,J.jsxs)(kg,{children:[(Ot.phase===`changelog`||Ot.phase===`downloading`)&&(0,J.jsx)(F_,{onClick:()=>void Fn(),type:`button`,children:s(`cancel`)}),Ot.phase===`ready`&&(0,J.jsx)(F_,{onClick:()=>void In(),type:`button`,children:s(`install_update`)}),Ot.phase===`installing`&&(0,J.jsx)(F_,{disabled:!0,type:`button`,children:s(`installing`)}),(Ot.phase===`ready`||Ot.phase===`error`||Ot.phase===`cancelled`||Ot.phase===`installing`)&&(0,J.jsx)(F_,{onClick:()=>kt(null),type:`button`,children:s(`close`)})]})]})}),document.body)]})}function Nh({approvalMinutes:e,denialSeconds:t}){let n=o(),[r,i]=(0,z.useState)([]),[a,s]=(0,z.useState)(!1);(0,z.useEffect)(()=>{let e=()=>void il().then(i,()=>i([]));if(e(),l.available)return l.on(t=>{t.type===`share.devices.changed`&&e()})},[]);let c=async(e,t,n)=>{s(!0);try{i(await al(e,t,n))}finally{s(!1)}},u=async e=>{s(!0);try{i(await ol(e))}finally{s(!1)}},d=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.state===`denied`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`):n(`share_access_not_decided`),f=e=>e.expiresAt===0?n(`share_access_forever`):new Date(e.expiresAt).toLocaleString();return(0,J.jsxs)(Pg,{children:[r.length===0&&(0,J.jsx)(Fg,{children:n(`share_access_no_devices`)}),r.map(r=>(0,J.jsxs)(Ig,{children:[(0,J.jsxs)(Lg,{children:[(0,J.jsx)(Rg,{children:r.name||n(`share_access_not_decided`)}),(0,J.jsxs)(zg,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,J.jsxs)(zg,{children:[d(r),r.state!==``&&(0,J.jsxs)(J.Fragment,{children:[` · `,n(`share_access_expires`),`: `,f(r)]})]})]}),(0,J.jsx)(Fo,{disabled:a,onChange:e=>{let[t,n]=e.split(`:`);t===`remove`?u(r.id):t!==`none`&&c(r.id,t,n===`forever`)},options:[{value:`none:`,label:n(`share_access_not_decided`)},{value:`allowed:timed`,label:`${n(`share_access_allowed`)} (${e}m)`},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:`${n(`share_access_denied`)} (${t}s)`},{value:`denied:forever`,label:n(`share_access_block_forever`)},{value:`remove:`,label:n(`remove`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.state===`denied`?r.expiresAt===0?`denied:forever`:`denied:timed`:`none:`,width:190})]},r.id))]})}function Ph(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function Fh(){let e=o(),[t,n]=(0,z.useState)(null);return(0,z.useEffect)(()=>{let e=!0,t=()=>qe().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,J.jsx)(B_,{children:e(`no_indexing_tasks_are_running`)}):(0,J.jsxs)(Xh,{children:[(0,J.jsx)(X,{children:(0,J.jsx)(Q,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,J.jsx)(X,{children:(0,J.jsx)(Gg,{title:e,children:e})},e))]}):(0,J.jsx)(B_,{children:e(`index_task_information_is_unavailable`)})}function Ih(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function Lh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function Rh({source:e}){let t=G(e.startsWith(`file:`)?e.slice(5):null);return(0,J.jsx)(L_,{children:t?(0,J.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,J.jsx)(pc,{name:e,size:16})})}function zh({src:e}){let t=G(e);return(0,J.jsx)(L_,{children:t&&(0,J.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Bh({path:e,active:t,onSelect:n,onRemove:r}){let i=o(),a=O(e),s=vn(a?null:e),c=a?e:s,l=xd(e.split(/[?#]/)[0]);return(0,J.jsxs)(g_,{children:[(0,J.jsxs)(h_,{$active:t,onClick:n,title:e,type:`button`,children:[c&&(l?(0,J.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${c}#t=0.5`}):(0,J.jsx)(`img`,{alt:``,src:c})),l&&(0,J.jsx)(v_,{children:(0,J.jsx)(Wi,{size:11})})]}),(0,J.jsx)(__,{onClick:r,title:i(`remove`),type:`button`,children:(0,J.jsx)(Li,{size:9})})]})}function Vh({value:e,options:t,onChange:n,disabled:r}){let i=o(),[a,s]=(0,z.useState)(null),c=(0,z.useRef)(null);return(0,z.useEffect)(()=>{if(!a)return;let e=()=>s(null),t=t=>{let n=t.target;n instanceof Node&&c.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(r_,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){s(null);return}let e=c.current?.getBoundingClientRect();e&&s({left:e.left,top:e.bottom+4,width:e.width})},ref:c,type:`button`,children:[(0,J.jsx)(`span`,{children:Hh(i,e)}),(0,J.jsx)(i_,{children:(0,J.jsx)(Oi,{size:11})})]}),a&&(0,no.createPortal)((0,J.jsx)(a_,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,J.jsxs)(o_,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),s(null)},role:`option`,type:`button`,children:[(0,J.jsx)(`span`,{children:Hh(i,t)}),t===e&&(0,J.jsx)(Ii,{size:11})]},t))}),document.body)]})}function Hh(e,t){return t===Eh?e(`system_default`):Dh[t]??t}function Uh({colors:e,current:t,onApply:n}){let r=o();if(e.length===0)return null;let[i,...a]=e;return(0,J.jsxs)(cg,{children:[(0,J.jsxs)(ug,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,J.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,J.jsx)(lg,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,J.jsx)(Ii,{size:9})},e))]})}function Wh({title:e,note:t,global:n=!1}){let r=o();return(0,J.jsxs)(Jh,{children:[(0,J.jsxs)(`h2`,{children:[(0,J.jsx)(Yh,{children:kh[e]}),r(e),n&&(0,J.jsx)(th,{})]}),(0,J.jsx)(`p`,{children:r(t)})]})}var Gh=_.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,Kh=_.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,qh=_.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Jh=_.header`
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
`,Yh=_.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,Xh=_.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Zh=_.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,Qh=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,$h=_.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,eg=_.button`
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
`,tg=_.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ng=_.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,rg=_.button`
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
`,ig=_.button`
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
`,ag=_.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,og=_.input`
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
`,sg=_.span`
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
`,cg=_.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,lg=_.button`
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
`,ug=_.button`
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
`,dg=_.nav`
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
`,fg=_.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,pg=_.div`
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
`,mg=_.button`
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
`,hg=_.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function gg(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function _g(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function vg(e){return e.total>0?`${S(e.downloaded)} / ${S(e.total)}`:e.downloaded>0?S(e.downloaded):``}var yg=_.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,bg=_.div`
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
`,xg=_.div`
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
`,Sg=_.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Cg=_.div`
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
`,wg=_.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function Tg(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),F(t.href))}var Eg=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,Dg=_.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,Og=_.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,kg=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Ag=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,jg=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Mg=_.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Ng=_.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Pg=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,Fg=_.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,Ig=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Lg=_.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Rg=_.span`
    color: var(--text-primary);
    font-size: 12px;
`,zg=_.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,Bg=_.input`
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
`,Vg=_.input`
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
`,Hg=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
`,Q=_.span`
    font-size: 12.5px;
    color: var(--text-secondary);
`,Ug=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=_.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Wg=_.span`
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
`,Gg=_.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Kg=_.button`
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
`,qg=_.input`
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
`,Jg=_.input`
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
`,Yg=_.button`
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
`,Xg=_.input`
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
`,Zg=_.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Qg=_.button`
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
`,$g=_.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,e_=_.button`
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
`,t_=_.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,n_=_.input`
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
`,r_=_.button`
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
`,i_=_.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,a_=_.div`
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
`,o_=_.button`
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
`,s_=_.span`
    position: relative;
    display: inline-flex;
`,c_=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,l_=_.button`
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
`,u_=_.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,d_=_.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,f_=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,p_=_.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,m_=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,h_=_.button`
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
`,g_=_.div`
    position: relative;
    width: 102px;
    height: 58px;
`,__=_.button`
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
`,v_=_.span`
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
`,y_=_.button`
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
`,b_=_.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,x_=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,S_=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,C_=_.input`
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
`,w_=_.button`
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
`,T_=_.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,E_=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,D_=_.input`
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
`,O_=_.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,k_=_.button`
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
`,A_=_.input`
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
`,j_=_.div`
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
`,M_=_.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,N_=_.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,P_=_.button`
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
`,F_=_.button`
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
`,I_=_.button`
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
`,L_=_.span`
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
`,R_=_.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,z_=_.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,B_=_.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,V_=150,H_=2500,U_=3,W_=600;function G_({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,onPreviewChange:g,platform:ee,toolbarSlot:_,onStatusChange:v}){let y=o(),b=vl(`gallery`),[x,C]=(0,z.useState)([]),[w,te]=(0,z.useState)(0),[ne,T]=(0,z.useState)(!0),[E,re]=(0,z.useState)(null),[D,O]=(0,z.useState)(!1),[k,ie]=(0,z.useState)([]),A=(0,z.useRef)([]),j=(0,z.useRef)(0),ae=(0,z.useRef)(!1),se=(0,z.useRef)(!0),N=(0,z.useRef)(0),P=(0,z.useRef)(null),ce=(0,z.useRef)(0),F=(0,z.useCallback)(async e=>{let t=++N.current;T(!0),se.current=!0,re(null);try{let n=await Re(0,V_,e);if(t!==N.current)return;A.current=n.entries,j.current=n.total,C(n.entries),te(n.total)}catch(e){t===N.current&&re(e instanceof Error?e.message:String(e))}finally{t===N.current&&(se.current=!1,T(!1))}},[]);(0,z.useEffect)(()=>{F(!1)},[F]);let I=(0,z.useCallback)(async()=>{if(se.current||ae.current||A.current.length>=j.current)return;let e=N.current;ae.current=!0;try{let t=A.current,n=j.current;for(let r=0;r<U_&&t.length<n;r++){let r=await Re(t.length,V_,!1);if(e!==N.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<V_)break}if(e!==N.current)return;A.current=t,j.current=n,(0,z.startTransition)(()=>{C(t),te(n)})}catch{}finally{ae.current=!1}},[]),le=(0,z.useCallback)(e=>{ce.current||=window.requestAnimationFrame(()=>{ce.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<H_&&I()})},[I]);(0,z.useEffect)(()=>{let e=P.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&I()},{root:e.parentElement,rootMargin:`${H_}px 0px`});return t.observe(e),()=>t.disconnect()},[I]),(0,z.useEffect)(()=>{if(x.length>=w)return;let e=window.setTimeout(()=>{let e=P.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<H_&&I()},200);return()=>window.clearTimeout(e)},[x.length,w,I]);let ue=(0,z.useMemo)(()=>({path:``,parent:null,entries:x.map(K_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[x]),de=(0,z.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),fe=(0,z.useCallback)(e=>{l?l(e):Se(e)},[l]),pe=(0,z.useCallback)(e=>{let t=q_(e.modified);return{id:t,label:t}},[]),me=()=>{O(!0),F(!0).finally(()=>O(!1))},he=x.length<w,L=(0,z.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:x.filter(e=>kn(e.name,a)||kn(e.path,a)),[x,a?.open,a?.query,a?.matchCase,a?.regex]),R=(0,z.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:L[Math.min(a.index,Math.max(0,L.length-1))]?.path??null}:xn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,L]);(0,z.useEffect)(()=>{c?.(L.length)},[L.length,c]);let ge=(0,z.useCallback)(e=>{ie(e),u?.(e)},[u]),B=k.length>0?x.find(e=>e.path===k[0])??null:null,_e=B?.name.includes(`.`)?B.name.slice(B.name.lastIndexOf(`.`)+1).toUpperCase():`—`,ve=B&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(B.name)?y(`video_2`):y(`picture`),ye=B?B.path.slice(0,Math.max(B.path.lastIndexOf(`\\`),B.path.lastIndexOf(`/`))):``,be=B?{name:B.name,path:B.path,isDirectory:!1,size:B.size,modified:B.modified,fields:[{label:y(`type`),value:ve},{label:y(`extension`),value:_e},{label:y(`location`),value:ye},{label:y(`full_path`),value:B.path},{label:y(`size`),value:S(B.size)},{label:y(`modified`),value:M(B.modified)},{label:y(`created`),value:`—`}]}:null,xe=k.length>1?oe(y,k.length,`k_1_item_selected`,`count_items_selected`):void 0,Ce=(0,z.useRef)(``);(0,z.useEffect)(()=>{let e=`${be?.path??``}|${be?.modified??0}|${xe??``}`;Ce.current!==e&&(Ce.current=e,g?.(be,xe))},[be,xe,g]);let we=ne?y(`scanning`):y(`shown_of_total_pictures`,{shown:x.length,total:w});return(0,z.useEffect)(()=>{v?.(we)},[we,v]),(0,J.jsxs)(J_,{children:[_&&(0,no.createPortal)((0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(vm,{}),(0,J.jsx)(_m,{onClick:me,title:y(`scan_the_folders_again`),type:`button`,children:(0,J.jsx)(Z_,{$spinning:D,children:(0,J.jsx)(wi,{size:16})})}),b.available&&(0,J.jsx)(_m,{onClick:e=>b.open(e.clientX,e.clientY),title:y(`selection_menu`),type:`button`,children:(0,J.jsx)(ka,{size:16})})]}),_),E&&(0,J.jsx)($_,{children:E}),!E&&!ne&&w===0&&(0,J.jsx)($_,{children:y(`no_pictures_found`)}),!E&&(ne||w>0)&&(0,J.jsx)(Y_,{children:(0,J.jsx)(X_,{children:(0,J.jsx)(Ml,{platform:ee,confirmDelete:n,find:R,selectMatchesToken:s,listing:ne&&x.length===0?null:ue,loading:ne,error:null,view:de,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:ge,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:fe,onOpenFile:fe,onRefresh:me,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:pe,onGridScroll:le,gridFooter:(0,J.jsx)(Q_,{$space:he?W_:1,ref:P}),allowBackgroundMenu:!1})})})]})}function K_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function q_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(k(),{weekday:`long`}):t.toLocaleDateString(k(),{year:`numeric`,month:`long`,day:`numeric`})}var J_=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Y_=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,X_=_.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,Z_=_.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Q_=_.div`
    height: ${({$space:e})=>e}px;
`,$_=_.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function ev({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:s=``,version:c=0,historyVersion:u=0,hiddenViews:d=[],onNavigate:f,onOpenView:p}){let[m,h]=(0,z.useState)([]),g=o(),[ee,_]=(0,z.useState)(null),v=Ln();(0,z.useEffect)(()=>{Ye().then(e=>{_(e),h(qs(e).filter(e=>e.pinned))},()=>{_(null),h([])})},[c]),(0,z.useEffect)(()=>{if(!l.available)return;let e=m.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[m,s]);let y=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>P(e.path,t));return{name:ee?.placeNames?.[t]??n?.name??(b(t)||t),path:t,kind:`folder`,icon:n?.icon??ee?.placeIcons?.[t]??null}}),C=a===`files`;return(0,J.jsxs)(ov,{children:[(0,J.jsxs)(sv,{children:[!d.includes(`home`)&&(0,J.jsxs)(fv,{$active:a===`home`,onClick:e=>p(`home`,Kt(e)),title:g(`overview`),type:`button`,children:[(0,J.jsx)(ta,{}),(0,J.jsx)(mv,{children:g(`overview`)})]}),!d.includes(`recycle`)&&(0,J.jsxs)(fv,{$active:a===`recycle`,onClick:e=>p(`recycle`,Kt(e)),title:g(`recycle_bin`),type:`button`,children:[(0,J.jsx)(Fi,{}),(0,J.jsx)(mv,{children:g(`recycle_bin`)})]}),!d.includes(`gallery`)&&(0,J.jsxs)(fv,{$active:a===`gallery`,onClick:e=>p(`gallery`,Kt(e)),title:g(`gallery`),type:`button`,children:[(0,J.jsx)(Ui,{}),(0,J.jsx)(mv,{children:g(`gallery`)})]})]}),m.map(e=>(0,J.jsxs)(lv,{children:[(0,J.jsxs)(fv,{as:`div`,$active:!1,children:[(0,J.jsx)(pv,{children:(0,J.jsx)(Ys,{panel:e,size:16})}),(0,J.jsx)(mv,{children:g(e.title)})]}),(0,J.jsx)(uv,{children:(0,J.jsxs)(dv,{children:[e.kind===`quick`&&y(e).map(e=>(0,J.jsxs)(fv,{$active:C&&P(i,e.path),onClick:t=>f(e.path,Kt(t)),title:e.path,type:`button`,children:[(0,J.jsx)(Xs,{place:e}),(0,J.jsx)(mv,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=Rn(v,e.path);return(0,J.jsxs)(fv,{$active:C&&P(i,e.path),onClick:t=>e.isDirectory?f(e.path,Kt(t)):void Se(e.path),title:e.path,type:`button`,children:[t&&v.useIcons?(0,J.jsx)(Xs,{place:t}):(0,J.jsx)(mc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,J.jsx)(mv,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,J.jsx)(rv,{historyVersion:u,onNavigate:f}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,J.jsxs)(fv,{$active:C&&P(i,e.name),onClick:t=>f(e.name,Kt(t)),title:e.name,type:`button`,children:[(0,J.jsx)(xi,{}),(0,J.jsxs)(mv,{children:[ae(e),(0,J.jsxs)(hv,{children:[S(e.freeSpace),` free`]}),(0,J.jsx)(gv,{children:(0,J.jsx)(_v,{$used:t,$tone:x(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,J.jsx)(iv,{onNavigate:f,path:e.path||s})]})})]},e.id)),!d.includes(`settings`)&&(0,J.jsx)(cv,{children:(0,J.jsxs)(fv,{$active:a===`settings`,onClick:e=>p(`settings`,Kt(e)),title:g(`settings`),type:`button`,children:[(0,J.jsx)(ki,{}),(0,J.jsx)(mv,{children:g(`settings`)})]})})]})}var tv=10,nv=40;function rv({historyVersion:e=0,onNavigate:t}){let n=o(),[r,i]=(0,z.useState)(null),a=Ln();return(0,z.useEffect)(()=>{Be().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Rn(a,e.path);return(0,J.jsxs)(fv,{$active:!1,onClick:n=>t(e.path,Kt(n)),title:oe(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,J.jsx)(Xs,{place:r}):(0,J.jsx)(mc,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,J.jsx)(mv,{children:r?.name||e.name})]},e.path)})}function iv({path:e,onNavigate:t}){let[n,r]=(0,z.useState)(null);(0,z.useEffect)(()=>{e&&(r(null),Ce(e,!1).then(r,()=>r(null)))},[e]),(0,z.useEffect)(()=>{if(e&&l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&P(n.data.path,e)&&Ce(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,tv),o=i.filter(e=>!e.isDirectory).slice(0,nv);return(0,J.jsxs)(J.Fragment,{children:[a.map(e=>(0,J.jsx)(av,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,J.jsx)(av,{entry:e,onNavigate:t},e.fullPath))]})}function av({entry:e,onNavigate:t}){let n=Ln(),r=Rn(n,e.fullPath);return(0,J.jsxs)(fv,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Kt(n)):void Se(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,J.jsx)(Xs,{place:r}):(0,J.jsx)(mc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,J.jsx)(mv,{children:r?.name||e.name})]})}var ov=_.aside`
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

    &:not(:hover) ${()=>hv},
    &:not(:hover) ${()=>gv} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,sv=_.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,cv=_(sv)`
    margin-top: auto;
`,lv=_.div`
    display: flex;
    flex-direction: column;
`,uv=_.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${ov}:hover ${lv}:hover > & {
        grid-template-rows: 1fr;
    }
`,dv=_.div`
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
`,fv=_.button`
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
`,pv=_.span`
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
`,mv=_.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hv=_.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,gv=_.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,_v=_.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,vv=_.span`
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
`;function yv({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=o(),a=(0,z.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,z.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,J.jsxs)(xv,{ref:a,children:[(0,J.jsxs)(Sv,{$active:n,onClick:()=>r(!n),title:s>0?oe(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,J.jsx)(Pi,{size:13}),c>0&&(0,J.jsx)(vv,{children:c>9?`9+`:c})]}),n&&(0,J.jsxs)(Cv,{children:[(0,J.jsxs)(wv,{children:[(0,J.jsxs)(Tv,{children:[(0,J.jsx)(Pi,{size:12}),i(`status_center`)]}),(0,J.jsxs)(Ev,{children:[(0,J.jsx)(Dv,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,J.jsx)(Ov,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,J.jsx)(Li,{size:10})})]})]}),e.length===0?(0,J.jsx)(Av,{children:i(`no_operations_yet`)}):(0,J.jsx)(kv,{children:e.map(e=>(0,J.jsx)(bv,{task:e},e.id))})]})]})}function bv({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,J.jsxs)(jv,{children:[(0,J.jsxs)(Mv,{children:[(0,J.jsx)(Nv,{$state:e.state,children:e.state===`done`?(0,J.jsx)(Ii,{size:10}):e.state===`failed`?(0,J.jsx)(Li,{size:10}):(0,J.jsx)(Pv,{})}),(0,J.jsx)(Fv,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,J.jsxs)(Iv,{children:[S(e.bytesDone),` / `,S(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,J.jsxs)(Iv,{children:[e.done,` / `,e.total]})]}),i&&(0,J.jsx)(Lv,{children:(0,J.jsx)(Rv,{$percent:r,$indeterminate:t===0})}),e.error&&(0,J.jsx)(zv,{children:e.error})]})}var xv=_.div`
    position: relative;
    display: flex;
`,Sv=_.button`
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
`,Cv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${ro}
    ${_o}
`,wv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Tv=_.span`
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
`,Ev=_.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Dv=_.button`
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
`,Ov=_.button`
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
`,kv=_.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Av=_.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,jv=_.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${vo}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Mv=_.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Nv=_.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Pv=_.span`
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
`,Fv=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Iv=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Lv=_.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Rv=_.div`
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
`,zv=_.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Bv(){return l.available?(await l.request(`fs.history.list`)).entries:[]}async function Vv(e){return l.available?(await l.request(`fs.history.undoTo`,{id:e})).ok:!1}function Hv(){let e=o(),[t,n]=(0,z.useState)(!1),[r,i]=(0,z.useState)([]),[a,s]=(0,z.useState)(!1),c=(0,z.useRef)(null),l=()=>void Bv().then(i,()=>i([]));(0,z.useEffect)(()=>{if(!t)return;l();let e=window.setInterval(l,1e3),r=e=>{c.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let u=async e=>{s(!0);try{await Vv(e),l()}finally{s(!1)}};return(0,J.jsxs)(Gv,{ref:c,children:[(0,J.jsx)(Kv,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,J.jsx)(Ni,{size:14})}),t&&(0,J.jsxs)(qv,{children:[(0,J.jsxs)(Jv,{children:[(0,J.jsxs)(Yv,{children:[(0,J.jsx)(Ni,{size:12}),e(`history`)]}),(0,J.jsx)(Xv,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,J.jsx)(Li,{size:10})})]}),r.length===0?(0,J.jsx)(ay,{children:e(`no_operations_yet`)}):(0,J.jsx)(Zv,{children:r.map(t=>(0,J.jsxs)(Qv,{children:[(0,J.jsxs)($v,{children:[(0,J.jsxs)(ey,{children:[(0,J.jsx)(Wv,{label:t.label}),Uv(e,t.label)]}),(0,J.jsx)(ty,{children:D(t.at)})]}),t.paths.length>0&&(0,J.jsxs)(ny,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,J.jsx)(ry,{children:(0,J.jsx)(iy,{disabled:!t.applied||!t.restorable||a,onClick:()=>void u(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Uv(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Wv({label:e}){return e.startsWith(`delete`)?(0,J.jsx)(Fi,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,J.jsx)(Sa,{size:13}):e.startsWith(`rename`)?(0,J.jsx)(na,{size:13}):e.startsWith(`compress`)?(0,J.jsx)(Ki,{size:13}):e.startsWith(`new`)?(0,J.jsx)(Ti,{size:13}):(0,J.jsx)(Di,{size:13})}var Gv=_.div`
    position: relative;
    display: flex;
`,Kv=_.button`
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
`,qv=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${ro}
    ${_o}
`,Jv=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Yv=_.span`
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
`,Xv=_.button`
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
`,Zv=_.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Qv=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,$v=_.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,ey=_.span`
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
`,ty=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,ny=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ry=_.div`
    display: flex;
    justify-content: flex-end;
`,iy=_.button`
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
`,ay=_.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function oy({currentFolder:e}){let t=o(),[n,r]=(0,z.useState)(!1),[i,a]=(0,z.useState)(null),[s,c]=(0,z.useState)(!1),l=(0,z.useRef)(null);(0,z.useEffect)(()=>{if(!n)return;let e=()=>void Hc().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{l.current?.contains(e.target)||r(!1)},o=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,o),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,o)}},[n]),(0,z.useEffect)(()=>{let e=()=>void Hc().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{a(await e())}finally{c(!1)}},d=i?.shares.some(t=>P(t.path,e))??!1;return(0,J.jsxs)(sy,{ref:l,children:[(0,J.jsxs)(cy,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,J.jsx)(ga,{size:15}),i&&i.shares.length>0&&(0,J.jsx)(vv,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,J.jsxs)(ly,{children:[(0,J.jsxs)(uy,{children:[(0,J.jsxs)(dy,{children:[(0,J.jsx)(Ta,{size:12}),t(`share`)]}),(0,J.jsx)(fy,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,J.jsx)(Li,{size:10})})]}),(0,J.jsxs)(py,{children:[(0,J.jsxs)(my,{children:[(0,J.jsx)(Bi,{size:15}),(0,J.jsxs)(`span`,{children:[(0,J.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,J.jsx)(hy,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,J.jsx)(gy,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,J.jsxs)(_y,{children:[(0,J.jsxs)(vy,{children:[(0,J.jsx)(yy,{title:e.path,children:e.name}),(0,J.jsx)(xy,{disabled:s,onClick:()=>void u(()=>Wc(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,J.jsx)(Li,{size:10})})]}),(0,J.jsx)(by,{title:e.path,children:e.path}),(0,J.jsxs)(Sy,{children:[(0,J.jsxs)(Cy,{$active:e.mode===`client`,onClick:()=>void u(()=>Gc(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,J.jsx)(Bi,{size:11}),t(`app`)]}),(0,J.jsxs)(Cy,{$active:e.mode===`web`,onClick:()=>void u(()=>Gc(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,J.jsx)(va,{size:11}),t(`web`)]})]})]},e.id)),(0,J.jsxs)(wy,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Uc(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,J.jsx)(Ti,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,J.jsxs)(Ty,{children:[(0,J.jsxs)(Ey,{children:[(0,J.jsx)(va,{size:12}),t(`browser_access`)]}),i.urls.map(e=>(0,J.jsx)(Dy,{onClick:()=>void F(e),type:`button`,children:e},e)),(0,J.jsx)(hy,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var sy=_.div`
    position: relative;
    display: flex;
`,cy=_.button`
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
`,ly=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${ro}
    ${_o}
`,uy=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,dy=_.span`
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
`,fy=_.button`
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
`,py=_.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,my=_.div`
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
`,hy=_.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,gy=_.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,_y=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,vy=_.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,yy=_.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,by=_.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xy=_.button`
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
`,Sy=_.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Cy=_.button`
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
`,wy=_.button`
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
`,Ty=_.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Ey=_.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Dy=_.button`
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
`;function Oy({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let s=o(),[c,l]=(0,z.useState)(!1),u=(0,z.useRef)(null);(0,z.useEffect)(()=>{if(!c)return;let e=()=>l(!1),t=e=>{u.current?.contains(e.target)||l(!1)},n=e=>{e.key===`Escape`&&l(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[c]),(0,z.useEffect)(()=>{a&&l(!1)},[a]);let d=e.columns,f=e=>{let t=new Set(d);t.has(e)?t.delete(e):t.add(e);let r=Cl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,J.jsxs)(ky,{ref:u,children:[(0,J.jsx)(Ay,{$active:c,disabled:a,onClick:()=>l(e=>!e),title:s(`view`),type:`button`,children:e.mode===`grid`?(0,J.jsx)(Mi,{size:14}):(0,J.jsx)(ji,{size:14})}),c&&(0,J.jsxs)(jy,{children:[(0,J.jsxs)(My,{children:[(0,J.jsx)(Oa,{size:11}),s(`view`)]}),(0,J.jsxs)(Py,{children:[(0,J.jsxs)(Fy,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,J.jsx)(ji,{size:12}),` `,s(`list`)]}),(0,J.jsxs)(Fy,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,J.jsx)(Mi,{size:12}),` `,s(`grid`)]})]}),(0,J.jsxs)(My,{children:[(0,J.jsx)(ji,{size:11}),s(`list_icon_size`)]}),(0,J.jsxs)(Iy,{children:[(0,J.jsx)(`input`,{"aria-label":s(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,J.jsxs)(Ly,{children:[e.iconSize,`px`]})]}),(0,J.jsxs)(My,{children:[(0,J.jsx)(Mi,{size:11}),s(`grid_size`)]}),(0,J.jsxs)(Iy,{children:[(0,J.jsx)(`input`,{"aria-label":s(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,J.jsxs)(Ly,{children:[e.gridSize,`px`]})]}),(0,J.jsxs)(My,{children:[(0,J.jsx)(Da,{size:11}),s(`columns`),(0,J.jsx)(th,{}),(0,J.jsx)(Ny,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:s(`reset_column_widths`),type:`button`,children:s(`reset_widths`)})]}),Cl.map(e=>(0,J.jsxs)(Ry,{children:[(0,J.jsx)(`input`,{checked:d.includes(e.id),onChange:()=>f(e.id),type:`checkbox`}),(0,J.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,J.jsxs)(Ry,{children:[(0,J.jsx)(`input`,{checked:d.includes(`linkTarget`),onChange:()=>f(`linkTarget`),type:`checkbox`}),(0,J.jsx)(`span`,{children:s(`link_target_after_the_name`)})]}),(0,J.jsxs)(My,{children:[(0,J.jsx)(Ri,{size:11}),s(`preview_panel`),(0,J.jsx)(th,{})]}),(0,J.jsxs)(Ry,{children:[(0,J.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,J.jsx)(`span`,{children:s(`preview_under_the_list`)})]})]})]})}var ky=_.div`
    position: relative;
    display: flex;
    height: 100%;
`,Ay=_.button`
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
`,jy=_.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${ro}
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
`,My=_.div`
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
`,Ny=_.button`
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
`,Py=_.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Fy=_.button`
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
`,Iy=_.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Ly=_.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Ry=_.label`
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
`,zy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),By=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Vy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,J.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Hy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,J.jsx)(`path`,{d:`M2 5h6`})}),Uy=e=>(0,J.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,J.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Wy=e=>(0,J.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,J.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,J.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Gy({tabs:e,activeId:n,onSelect:r,onClose:i,onNewTab:a,onReorder:s,onTransferToTab:c,view:l,onViewChange:d,onColumns:f,showImages:p,onShowImages:m,tasks:h,onClearTasks:g,activityOpen:ee,onActivityOpenChange:_,trayCount:v,trayVisible:y,onToggleTray:b,split:x,canSplit:S,onToggleSplit:C,details:w,canDetails:te,onToggleDetails:ne,shortcuts:T,currentFolder:E}){let re=o(),D=t(),O=u(),[k,ie]=(0,z.useState)({left:!1,right:!1}),[A,j]=(0,z.useState)(null),[ae,M]=(0,z.useState)(null),oe=(0,z.useRef)(null),se=(0,z.useRef)(null),N=(0,z.useRef)(null),P=(0,z.useCallback)(()=>{let e=se.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ie(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,z.useEffect)(()=>{P();let e=se.current;if(!e)return;let t=new ResizeObserver(P);return t.observe(e),()=>t.disconnect()},[P,e.length]),(0,z.useEffect)(()=>()=>{oe.current&&window.clearTimeout(oe.current.timer)},[]),(0,z.useEffect)(()=>{N.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[n]);let ce=e=>se.current?.scrollBy({left:e,behavior:`smooth`}),F=()=>{oe.current&&window.clearTimeout(oe.current.timer),oe.current=null,M(null)};return(0,J.jsxs)(Yy,{children:[(0,J.jsx)(Xy,{children:(0,J.jsx)(Bi,{size:19})}),(0,J.jsxs)(Zy,{children:[k.left&&(0,J.jsx)($y,{onClick:()=>ce(-180),title:re(`scroll_tabs_left`),type:`button`,children:(0,J.jsx)(zy,{})}),(0,J.jsx)(Qy,{onScroll:P,onWheel:e=>{let t=se.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:se,children:e.map(e=>(0,J.jsxs)(eb,{$active:e.id===n,$dragging:A===e.id,$dropTarget:ae===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!_c(t.dataTransfer)||!Ky(e)||(t.preventDefault(),oe.current?.id===e.id))return;F(),M(e.id);let n=window.setTimeout(()=>{r(e.id),oe.current=null},500);oe.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(oe.current?.id===e.id||ae===e.id)&&F()},onDragEnd:()=>{j(null),F()},onDragOver:t=>{(A||_c(t.dataTransfer)&&Ky(e))&&(t.preventDefault(),_c(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>j(e.id),onDrop:t=>{if(t.preventDefault(),A)s(A,e.id);else if(Ky(e)&&_c(t.dataTransfer)){let{paths:n,move:i}=vc(t);n.length>0&&(r(e.id),c(n,e.path,!t.ctrlKey&&i))}j(null),F()},onClick:()=>r(e.id),ref:e.id===n?N:void 0,title:e.path||e.title,type:`button`,children:[(0,J.jsx)(qy,{tab:e}),(0,J.jsx)(tb,{children:e.title}),e.partner&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(nb,{children:`|`}),(0,J.jsx)(Jy,{place:e.partner.place}),(0,J.jsx)(tb,{children:e.partner.title})]}),(0,J.jsx)(rb,{"data-shortcut":Jt(T.closeTab),onClick:t=>{t.stopPropagation(),i(e.id)},title:re(`close_tab`),children:(0,J.jsx)(Vy,{})})]},e.id))}),k.right&&(0,J.jsx)($y,{onClick:()=>ce(180),title:re(`scroll_tabs_right`),type:`button`,children:(0,J.jsx)(By,{})}),(0,J.jsx)(ib,{"data-shortcut":Jt(T.newTab),onClick:a,title:re(`new_tab`),type:`button`,children:(0,J.jsx)(Ti,{size:13})})]}),(0,J.jsx)(ab,{...O}),(0,J.jsxs)(ob,{children:[(0,J.jsx)(cb,{$active:x,"data-shortcut":Jt(T.splitView),disabled:!S,onClick:C,title:re(x?`close_split_view`:`split_view`),type:`button`,children:(0,J.jsx)(Da,{size:15})}),(0,J.jsx)(cb,{$active:w,disabled:!te,onClick:ne,title:re(w?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,J.jsx)(Oa,{size:15})}),(0,J.jsxs)(sb,{$active:y,onClick:b,title:re(y?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,J.jsx)(_a,{size:14}),v>0&&(0,J.jsx)(vv,{children:v>9?`9+`:v})]}),(0,J.jsx)(Hv,{}),(0,J.jsx)(oy,{currentFolder:E}),(0,J.jsx)(yv,{tasks:h,onClear:g,open:ee,onOpenChange:_}),(0,J.jsx)(Oy,{disabled:e.find(e=>e.id===n)?.kind!==`files`,onChange:d,onColumns:f,onShowImages:m,showImages:p,view:l}),(0,J.jsx)(lb,{onClick:D.minimize,title:re(`minimize`),type:`button`,children:(0,J.jsx)(Hy,{})}),(0,J.jsx)(lb,{onClick:D.toggleMaximize,title:D.maximized?re(`restore`):re(`maximize`),type:`button`,children:D.maximized?(0,J.jsx)(Wy,{}):(0,J.jsx)(Uy,{})}),(0,J.jsx)(ub,{onClick:D.close,title:re(`close`),type:`button`,children:(0,J.jsx)(Vy,{})})]})]})}function Ky(e){return e.kind===`files`&&(!w(e.path)||ne(e.path))}function qy({tab:e}){switch(e.kind){case`home`:return(0,J.jsx)(vi,{size:13});case`settings`:return(0,J.jsx)(ki,{size:13});case`recycle`:return(0,J.jsx)(Fi,{size:13});default:return e.archive?(0,J.jsx)(Ki,{size:13}):(0,J.jsx)(Jy,{place:e.place})}}function Jy({place:e}){return e?(0,J.jsx)(Xs,{place:e,size:13}):(0,J.jsx)(yi,{size:13})}var Yy=_.header`
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
`,Xy=_.span`
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
`,Zy=_.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Qy=_.div`
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
`,$y=_.button`
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
`,eb=_.button`
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
`,tb=_.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nb=_.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,rb=_.span`
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
`,ib=_.button`
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
`,ab=_.div`
    flex: 1;
    min-width: 28px;
`,ob=_.div`
    display: flex;
    flex-shrink: 0;
`,sb=_.button`
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
`,cb=_.button`
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
`,lb=_.button`
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
`,ub=_(lb)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function db(){let[e,t]=(0,z.useState)(null),n=(0,z.useRef)(null),r=(0,z.useRef)(void 0);return(0,z.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,no.createPortal)((0,J.jsx)(fb,{tooltip:e}),document.body):null}function fb({tooltip:e}){let t=(0,z.useRef)(null),[n,r]=(0,z.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,z.useState)(()=>e.bottom+6);return(0,z.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,J.jsxs)(pb,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,J.jsx)(mb,{children:e.text}),e.shortcut&&(0,J.jsx)(hb,{children:e.shortcut})]})}var pb=_.div`
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
    ${vo}
`,mb=_.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,hb=_.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,gb={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`};function _b({deviceName:e,code:t,onAccept:n,onReject:r}){let i=o(),a=(0,z.useRef)(null);return(0,z.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,no.createPortal)((0,J.jsx)(vb,{children:(0,J.jsxs)(yb,{role:`alertdialog`,"aria-modal":`true`,children:[(0,J.jsxs)(bb,{children:[(0,J.jsx)(ga,{size:15}),i(`pair_for_sharing`)]}),(0,J.jsx)(xb,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,J.jsx)(Sb,{children:t}),(0,J.jsx)(Cb,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,J.jsxs)(wb,{children:[(0,J.jsx)(Tb,{onClick:r,type:`button`,children:i(`reject`)}),(0,J.jsx)(Eb,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var vb=_.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${vo}
`,yb=_.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${po}
`,bb=_.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,xb=_.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,Sb=_.div`
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
`,Cb=_.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,wb=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Tb=_.button`
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
`,Eb=_(Tb)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Db=0,Ob=new Set;function kb(e){Ob.add(e),l.send({type:`app.navigate.done`,payload:{path:e}})}var Ab=20,jb=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Mb(e){return e.history[e.index]??Qp(`home`)}function Nb(e){return $p(Mb(e))??`files`}function Pb(e){let t=Mb(e);return $p(t)?``:e.listing?.path||t}function Fb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Nb(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Ib(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Lb(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||ye.iconSize,gridSize:e.view?.gridSize||t.gridSize||ye.gridSize,sort:e.view?.sort??ye.sort,sortDescending:e.view?.sortDescending??ye.sortDescending,columns:t.columns??be.columns??[]}}function Rb(e=Qp(`home`)){return Db+=1,{id:`tab-${Db}`,listing:null,loading:!$p(e),error:null,history:[e],index:0,fresh:!0,view:null}}function zb(e){return e instanceof Error?e.message:String(e)}function Bb(e){let t=$c(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return el(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Vb(e){let t=b(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Hb(e){return w(e)?$t(e):void 0}function Ub(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return oe(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:S(n)})}function Wb(){let e=o(),[t,n]=(0,z.useState)(()=>[Rb()]),[i,a]=(0,z.useState)(()=>t[0].id),[s,c]=(0,z.useState)(null),[u,d]=(0,z.useState)(()=>{let e=Jn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,z.useState)([]),[h,ee]=(0,z.useState)([]),[_,v]=(0,z.useState)(null),[y,x]=(0,z.useState)(null),[S,C]=(0,z.useState)(null),D=E(),[O,k]=(0,z.useState)(bn),[ie,ae]=(0,z.useState)(0),[M,se]=(0,z.useState)(0),[N,F]=(0,z.useState)(0),[I,le]=(0,z.useState)(bn),[de,fe]=(0,z.useState)(0),[pe,me]=(0,z.useState)(0),[he,L]=(0,z.useState)(0),[R,ge]=(0,z.useState)(0),B=(0,z.useRef)(R);B.current=R;let[ve,xe]=(0,z.useState)([]),[De,Me]=(0,z.useState)(10),[H,Ne]=(0,z.useState)(null),Pe=f(g(H?.themeMode)),Fe=(0,z.useMemo)(()=>(H?.favorites??[]).map(e=>te(e.path)),[H?.favorites]),[Ie,Le]=(0,z.useState)(0),[U,Re]=(0,z.useState)(Ut),[Be,He]=(0,z.useState)(0),[Ue,We]=(0,z.useState)(0),[Ke,qe]=(0,z.useState)(0),[Je,Xe]=(0,z.useState)(!0),[Ze,Qe]=(0,z.useState)(()=>{let e=Jn(`yafm.preview.width`,320);return e>=220?e:320}),[$e,et]=(0,z.useState)(null),[tt,nt]=(0,z.useState)(null),[rt,ot]=(0,z.useState)({kind:null,info:null}),[st,ct]=(0,z.useState)(`primary`),[lt,ut]=(0,z.useState)(null),[dt,ft]=(0,z.useState)(null),[pt,mt]=(0,z.useState)(null),[ht,_t]=(0,z.useState)(null),[bt,Ct]=(0,z.useState)({primary:0,secondary:0}),[Tt,Et]=(0,z.useState)({primary:null,secondary:null}),[Dt,kt]=(0,z.useState)(null),[At,jt]=(0,z.useState)([]),[Mt,Nt]=(0,z.useState)(!1),[Pt,Lt]=(0,z.useState)(null),[Rt,zt]=(0,z.useState)(``),Wt=(0,z.useRef)([]),Yt=(0,z.useRef)([]),[Zt,Qt]=(0,z.useState)([]),[rn,an]=(0,z.useState)(!1),on=(0,z.useMemo)(()=>rn?new Set(Zt.map(e=>e.path)):new Set,[Zt,rn]),[sn,un]=(0,z.useState)(!1),[dn,fn]=(0,z.useState)([]),[pn,mn]=(0,z.useState)(null),G=(0,z.useRef)(0),[hn,gn]=(0,z.useState)(()=>{let e=Xn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Ib({x:e.x,y:e.y}):Ib({x:Math.max(20,window.innerWidth-340),y:110})}),_n=(0,z.useCallback)(()=>{gn(e=>Ib(e)),un(!0)},[]),K=t.find(e=>e.id===i)??t[0],q=Nb(K),vn=Mb(K),yn=Pb(K),xn=q===`files`?K.listing?.parent??Bb(yn):null,Sn=K.splitWith?t.find(e=>e.id===K.splitWith):void 0,Cn=q===`files`&&Sn!==void 0,wn=Sn?Pb(Sn):``,Tn=Sn?Sn.listing?.parent??Bb(wn):null,En=Cn&&Sn&&st===`secondary`?Sn:K,Dn=H?.defaultView??be,On=Lb(En,Dn);(0,z.useEffect)(()=>{r(H?.accentColor,H?.secondaryColor,Pe)},[H?.accentColor,H?.secondaryColor,Pe]),(0,z.useEffect)(()=>{ah(H?.fonts)},[H?.fonts]),(0,z.useEffect)(()=>{j(H?.timeFormat,H?.timeFormatPattern)},[H?.timeFormat,H?.timeFormatPattern]),(0,z.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!H?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[H?.backgroundSource]),(0,z.useEffect)(()=>(_e(e=>new Promise(t=>{mn({id:++G.current,prompt:e,resolve:t})})),()=>_e(null)),[]),(0,z.useEffect)(()=>{ct(`primary`)},[i]),(0,z.useEffect)(()=>{le(bn),me(0),L(0)},[q]),(0,z.useEffect)(()=>{me(0)},[I.query,I.matchCase,I.regex]),(0,z.useEffect)(()=>{me(e=>he===0?0:Math.min(e,he-1))},[he]);let An=On.columns.includes(`linkCount`),jn=(0,z.useMemo)(()=>{let e={},t=qs(H),n={};for(let[e,t]of Object.entries(H?.placeNames??{}))n[te(e)]=t;for(let t of p)e[te(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=te(t),i=p.find(e=>te(e.path)===r);e[r]={name:n[r]??i?.name??(b(t)||t),path:t,kind:`folder`,icon:i?.icon??H?.placeIcons?.[t]??null}}return e},[p,H]),Mn=(0,z.useMemo)(()=>({places:jn,useIcons:H?.systemIcons===!1}),[jn,H?.systemIcons]),Nn=H?.defaultView?.showImages??!0,Pn=H?.defaultView?.imageStripHeight??be.imageStripHeight,Fn=q===`home`?(0,J.jsx)(ta,{size:13}):q===`settings`?(0,J.jsx)(ki,{size:13}):q===`recycle`?(0,J.jsx)(Fi,{size:13}):q===`gallery`?(0,J.jsx)(Ui,{size:13}):void 0,Ln=O.open&&O.query.length>0,Bn=(0,z.useMemo)(()=>Ln&&En.listing?En.listing.entries.filter(e=>kn(e.isDirectory?zn(Mn,e.fullPath,e.name):e.name,O)).map(e=>e.fullPath):[],[Ln,O,En.listing,Mn]);(0,z.useEffect)(()=>{ae(0)},[O.query,O.matchCase,O.regex,En.listing?.path]);let Vn=Bn.length===0?-1:Math.min(ie,Bn.length-1),Hn=(0,z.useCallback)(()=>{k(e=>({...e,open:!1,query:``})),ae(0)},[]),Un=(0,z.useCallback)(()=>{k(e=>({...e,open:!0})),se(e=>e+1)},[]),Wn=(0,z.useCallback)(()=>{le(e=>({...e,open:!0})),fe(e=>e+1)},[]),Gn=(0,z.useCallback)(()=>{le(bn),me(0),L(0)},[]),Kn=(0,z.useCallback)(e=>{me(t=>he===0?0:(Math.min(t,he-1)+e+he)%he)},[he]),qn=(0,z.useCallback)(e=>{k(t=>({...t,open:!0,query:t.open?t.query+e:e})),se(e=>e+1)},[]),Qn=(0,z.useCallback)(e=>{ae(t=>Bn.length===0?0:(Math.min(t,Bn.length-1)+e+Bn.length)%Bn.length)},[Bn.length]),$n=(0,z.useRef)({tabs:t,activeId:i,activePane:st});$n.current={tabs:t,activeId:i,activePane:st};let er=(0,z.useRef)(H);er.current=H;let tr=(0,z.useRef)(!1),nr=(0,z.useRef)([]),rr=(0,z.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),ir=(0,z.useRef)(new Map),ar=(0,z.useCallback)(e=>{let t=(ir.current.get(e)??0)+1;return ir.current.set(e,t),()=>ir.current.get(e)===t},[]),or=(0,z.useCallback)((e,t)=>{l.available&&t&&e===Fb($n.current)&&l.send({type:`fs.focus`,payload:{path:t}})},[]),sr=(0,z.useCallback)(async(e,t,n)=>{if(!(t&&Qc(t)))try{let r=await V(t,An);if(!n()||!r.listing)return;rr(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[An,rr]),cr=(0,z.useCallback)(async(e,t,n=!1)=>{let r=ar(e);Hn(),or(e,t);let i=!n||!$n.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;rr(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&P(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&sr(e,t,r);let o=t&&Qc(t)?await tl(t):await Ce(t,!0,An,B.current,t?Hb(t):void 0);if(!r())return;rr(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!Qc(o.path)&&Ve(o.path).then(()=>Le(e=>e+1))}catch(i){if(!r())return;let a=$n.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Pb(a):``,s=Bb(o),c=zb(i);if(o&&nn(c)){let i=T(o),a=await Ka(i,!!$t(i));if(a){en(i,a),r()&&cr(e,t,n);return}}rr(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[ar,An,rr,or,Hn,sr]),lr=(0,z.useCallback)((e,t)=>{let n=em(t);n&&($p(n)?(Hn(),ar(e),rr(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):cr(e,n))},[ar,cr,rr,Hn]),ur=(0,z.useCallback)(async(e,t,n)=>{if(Hn(),$p(t)){ar(e),rr(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=ar(e);or(e,t),rr(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Qc(t)||sr(e,t,r);let n=Qc(t)?await tl(t):await Ce(t,!0,An,B.current,Hb(t));if(!r())return;rr(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(nn(zb(i))){let i=T(t),a=await Ka(i,!!$t(i));if(a){en(i,a),r()&&ur(e,t,n);return}}rr(e,()=>({listing:{path:t,parent:Bb(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:zb(i)}))}},[ar,An,rr,or,Hn,sr]),dr=(0,z.useCallback)((e,t=!0)=>{let r=Rb(e??Qp(`home`));return n(e=>[...e,r]),t&&a(r.id),e&&!$p(e)&&cr(r.id,e),r.id},[cr]),fr=(0,z.useCallback)(e=>{for(let t of $n.current.tabs)Nb(t)===`files`&&P(Pb(t),e)&&cr(t.id,e,!0)},[cr]),pr=(0,z.useCallback)((e,t)=>{let n=b(t);for(let r of $n.current.tabs)r.listing?.entries.some(t=>P(t.fullPath,e))&&rr(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>P(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[rr]),mr=(0,z.useRef)([]);(0,z.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&w(t)&&e.add(te(T(t)))}let n=mr.current.filter(t=>!e.has(t));mr.current=[...e],n.length>0&&Ee(n)},[t]);let hr=(0,z.useCallback)((e,t=!1)=>{t?dr(Qp(e)):lr($n.current.activeId,Qp(e))},[dr,lr]),gr=(0,z.useCallback)(e=>{let{tabs:t,activeId:r}=$n.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(Yt.current.push(Mb(i)),Yt.current.length>Ab&&Yt.current.shift()),o.length===0){let e=Rb();n([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&a(o[Math.min(s,o.length-1)].id)},[]),_r=(0,z.useCallback)(()=>{let e=Yt.current.pop();if(!e)return;let t={...Rb(e),fresh:!1};n(e=>[...e,t]),a(t.id),Nb(t)===`files`&&cr(t.id,Pb(t))},[cr]),vr=(0,z.useCallback)((e,t=!1)=>{t?dr(e):lr(Fb($n.current),e??Qp(`home`))},[lr,dr]),yr=(0,z.useCallback)(e=>{let{tabs:t,activeId:n}=$n.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),br=(0,z.useCallback)(()=>{let{tabs:e,activeId:t}=$n.current,r=e.find(e=>e.id===t);if(!r||Nb(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),rr(t,()=>({splitWith:void 0})),ct(`primary`);return}let a=Pb(r),o={...Rb(a),hidden:!0};n(e=>[...e,o]),rr(t,()=>({splitWith:o.id})),cr(o.id,a),ct(`primary`)},[cr,rr]),xr=(0,z.useCallback)(e=>{Qe(e),Yn(`yafm.preview.width`,e)},[]),Sr=(0,z.useCallback)((e,t,n)=>ot(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),Cr=(0,z.useCallback)((e,t)=>Sr(`gallery`,e,t),[Sr]),wr=(0,z.useCallback)((e,t)=>Sr(`recycle`,e,t),[Sr]),Tr=Cn?st===`secondary`?tt??$e:$e??tt:$e,Er=Cn&&st===`secondary`?bt.secondary:bt.primary,Dr=q===`files`?Tr:rt.kind===q?rt.info:null,Or=q===`files`?Er>1?oe(e,Er,`k_1_item_selected`,`count_items_selected`):void 0:rt.kind===q?rt.note:void 0,kr=(0,z.useRef)(null),Ar=e=>{e.preventDefault();let t=kr.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);d(r),Yn(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},jr=(e,t,n)=>{t&&ut({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Mr=(0,z.useCallback)((e,t)=>{Ct(n=>n[e]===t?n:{...n,[e]:t})},[]),Nr=(0,z.useCallback)(e=>Mr(`primary`,e),[Mr]),Pr=(0,z.useCallback)(e=>Mr(`secondary`,e),[Mr]),Fr=(e,t)=>{bt[e]!==0&&Et(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Ir=async(e,t=!1)=>{let n=lt;if(ut(null),!n)return;let r=e===null?await wt(n.directory,t):await Ot(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Hn(),kt(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Lr=(0,z.useCallback)(()=>{let{tabs:e}=$n.current,t=e.find(e=>e.id===Fb($n.current));t&&t.index>0&&ur(t.id,t.history[t.index-1],t.index-1)},[ur]),Rr=(0,z.useCallback)(()=>{let{tabs:e}=$n.current,t=e.find(e=>e.id===Fb($n.current));t&&t.index<t.history.length-1&&ur(t.id,t.history[t.index+1],t.index+1)},[ur]),zr=(0,z.useCallback)(()=>{let{tabs:e}=$n.current,t=e.find(e=>e.id===Fb($n.current));t&&Nb(t)===`files`&&t.listing?.parent&&vr(t.listing.parent)},[vr]),Br=(0,z.useRef)(null),Vr=(0,z.useCallback)(()=>{for(let e of $n.current.tabs)e.listing&&cr(e.id,e.listing.path,!0)},[cr]),Hr=(0,z.useCallback)(e=>{e.length!==0&&(fn(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),_n())},[_n]),Ur=(0,z.useCallback)(async e=>{let t=await W(e);t.length!==0&&Hr(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Hr]),Wr=(0,z.useCallback)(e=>{let t=new Set(e);fn(e=>e.filter(e=>!t.has(e.path)))},[]),Gr=(0,z.useCallback)(async e=>{let t=er.current;if(!t)return;let n=await W(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>te(e.path))),i=n.filter(e=>!r.has(te(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};Ne(a),await it(a),He(e=>e+1)},[]),Kr=(0,z.useCallback)(async e=>{let t=er.current;if(!t)return;let n=new Set(e.map(te)),r=(t.favorites??[]).filter(e=>!n.has(te(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};Ne(i),await it(i),He(e=>e+1)},[]),qr=(0,z.useCallback)(()=>fn([]),[]),Jr=(0,z.useRef)(-1),Yr=(0,z.useCallback)(e=>{Qt(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),an(e.move),e.entries.length>0&&_n()},[_n]),Xr=(0,z.useCallback)(async()=>{if(l.available)try{let e=await vt();Jr.current=e.sequence,Yr(e)}catch{}},[Yr]),Zr=(0,z.useCallback)(async e=>{e.length!==0&&await gt(e,!1)&&await Xr()},[Xr]),Qr=(0,z.useRef)(dn);Qr.current=dn;let $r=(0,z.useRef)(sn);$r.current=sn;let ei=(0,z.useRef)(!1);(0,z.useEffect)(()=>{let e=H?.trayAutoShow??!0,t=t=>{e&&_c(t)&&($r.current||(ei.current=!0),_n())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{ei.current&&window.setTimeout(()=>{ei.current&&Qr.current.length===0&&un(!1),ei.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[_n,H?.trayAutoShow]),(0,z.useEffect)(()=>{let e=()=>gn(e=>Ib(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let ti=(0,z.useCallback)(async()=>{let e=Qr.current;if(e.length>0){let t=await W(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));fn(e=>e.filter(e=>n.has(e.path)))}await Xr()},[Xr]),ni=(0,z.useCallback)(()=>{ti(),qe(e=>e+1),Vr()},[ti,Vr]),ri=(0,z.useCallback)(e=>{let t=Ib(e);gn(t),Zn(`yafm.tray.position`,t)},[]),ii=(0,z.useCallback)(()=>{ei.current=!1,sn?un(!1):_n()},[_n,sn]),ai=(0,z.useCallback)(async(t,n,r)=>{let i=await yt(t,n,r);i.cancelled||(i.ok?(r&&Wr(t),qe(e=>e+1),Vr(),Xr()):Wa(i.error??e(`the_files_could_not_be_transferred`)))},[Vr,Xr,Wr]);(0,z.useEffect)(()=>{if(l.available)return Vt().then(e=>{Wt.current=e,jt(e)},()=>void 0),l.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Wt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Wt.current=n,jt(n),r&&Nt(!0)})},[]);let oi=(0,z.useCallback)(()=>{Ht().then(()=>Vt().then(e=>{Wt.current=e,jt(e)},()=>void 0))},[]);(0,z.useEffect)(()=>{if(!l.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await vt();if(!e||t.sequence===Jr.current)return;Jr.current=t.sequence,Yr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Yr]);let si=(0,z.useCallback)(async e=>{let t=e?await Ft():await It();t.ok?(qe(e=>e+1),Vr()):t.error&&!t.error.startsWith(`Nothing to`)&&Wa(t.error)},[Vr]),ci=(0,z.useRef)(An);(0,z.useEffect)(()=>{ci.current!==An&&(ci.current=An,Vr())},[An,Vr]);let li=(0,z.useCallback)((e,t)=>{let{tabs:n}=$n.current,r=n.find(t=>t.id===e);if(!r||Nb(r)!==`files`)return;let i=Pb(r),a=er.current?.defaultView??be,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||ye.iconSize,gridSize:r.view?.gridSize||a.gridSize||ye.gridSize,sort:r.view?.sort??ye.sort,sortDescending:r.view?.sortDescending??ye.sortDescending,...t};rr(e,()=>({view:o})),Br.current!==null&&window.clearTimeout(Br.current),Br.current=window.setTimeout(()=>{Br.current=null,Oe(i,o)},250)},[rr]),ui=(0,z.useCallback)(e=>{li(Fb($n.current),e)},[li]),di=(0,z.useCallback)(e=>{let t=er.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,columns:e}};Ne(n),it(n)},[]),fi=(0,z.useCallback)(e=>{let t=er.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,showImages:e}};Ne(n),it(n)},[]),pi=(0,z.useCallback)(e=>{let t=er.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be,imageStripHeight:e}};Ne(n),it(n)},[]),mi=(0,z.useCallback)((e,t,n,r)=>{let i=$n.current.tabs.find(t=>t.id===e);if(!i||Nb(i)!==`files`||!i.listing)return;let a=Pb(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));rr(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),ke(a,t,n,r)},[rr]),hi=(0,z.useCallback)((e,t)=>{let n=$n.current.tabs.find(t=>t.id===e);if(!n)return;let r=Lb(n,er.current?.defaultView??be);li(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[li]),gi=(0,z.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),_i=(0,z.useCallback)(()=>{Ae().then(m,()=>m([]))},[]),Y=(0,z.useCallback)(e=>{let t=(e.openTabs??[]).map(em).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...Rb(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),a(r[i].id);for(let e of r)Nb(e)===`files`&&cr(e.id,Pb(e),!0);return!0},[cr]),vi=(0,z.useCallback)(e=>{let t=nr.current;if(nr.current=[],t.length===0)return;let n=t.filter(e=>!Ob.has(e));for(let e of t)n.includes(e)||kb(e);if(n.length===0)return;let{tabs:r}=$n.current;if(!e&&r.length===1&&r[0].fresh){lr(r[0].id,n[0]),kb(n[0]);for(let e of n.slice(1))dr(e),kb(e);return}let i=n.map(e=>{let t=dr(e);return kb(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[dr,lr]),yi=(0,z.useCallback)(()=>{Ye().then(e=>{Ne(e),Me(e.recentLimit);let t={...Ut,...e.shortcuts};Re(t),Gt(t.openInNewTab),He(e=>e+1),tr.current||(tr.current=!0,vi(e.restoreTabs&&Y(e)))},()=>{Me(10),tr.current=!0,vi(!1)})},[vi,Y]),bi=(0,z.useCallback)(()=>{ze().then(xe,()=>xe([]))},[]),xi=(0,z.useCallback)(()=>{je().then(ee,()=>ee([]))},[]),wi=t.filter(e=>!e.hidden),Oi=wi.map(Mb),Ai=Oi.join(`
`),ji=Math.max(wi.findIndex(e=>e.id===i),0);(0,z.useEffect)(()=>{if(!H?.restoreTabs)return;let e=setTimeout(()=>void at(Oi,ji),700);return()=>clearTimeout(e)},[Ai,ji,H?.restoreTabs]),(0,z.useEffect)(()=>{let{tabs:e,activeId:t}=$n.current,n=e.find(e=>e.id===t);n&&n.fresh&&Nb(n)===`files`&&cr(n.id,Pb(n),!0),_i(),yi(),xi(),ce().then(v,()=>v(null))},[cr,_i,yi,xi]),(0,z.useEffect)(()=>{if(ue().then(x,()=>x(null)),l.available)return l.on(e=>{let t=e;t.type===`update.checked`&&t.data&&x(t.data)})},[]),(0,z.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&c({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Wa(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Wa(n.data.error??e(`pairing_failed`))}})},[e]),(0,z.useEffect)(()=>{let e=setInterval(xi,3e4);return()=>clearInterval(e)},[xi]),(0,z.useEffect)(()=>{q===`home`&&(bi(),xi())},[q,K.id,bi,xi]),(0,z.useEffect)(()=>{if(!l.available)return;let e=l.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=$n.current,i=t.data.startup===!0;i&&Ob.has(n)?kb(n):i&&!tr.current?nr.current.includes(n)||nr.current.push(n):(i&&r.length===1&&r[0].fresh?lr(r[0].id,n):$p(n)?lr(Fb($n.current),n):dr(n),i&&kb(n))});return l.send({type:`app.ready`}),e},[lr,dr]),(0,z.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,z.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,z.useEffect)(()=>{let e=e=>{if(Xt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Lr();return}if(e.key===`BrowserForward`){e.preventDefault(),Rr();return}if(e.key===`Escape`&&O.open){e.preventDefault(),Hn();return}let t=qt(e);if(t===U.closeTab)e.preventDefault(),gr(Fb($n.current));else if(t===U.newTab)e.preventDefault(),dr();else if(t===U.reopenTab)e.preventDefault(),_r();else if(t===U.goBack)e.preventDefault(),Lr();else if(t===U.goForward)e.preventDefault(),Rr();else if(t===U.goUp)e.preventDefault(),zr();else if(t===U.find)e.preventDefault(),q===`files`?Un():Wn();else if(t===U.location)e.preventDefault(),We(e=>e+1);else if(t===U.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&vr(t)}else t===U.iconsView?(e.preventDefault(),q===`files`&&ui({mode:`grid`})):t===U.detailsView?(e.preventDefault(),q===`files`&&ui({mode:`list`})):t===U.nextTab?(e.preventDefault(),yr(1)):t===U.previousTab?(e.preventDefault(),yr(-1)):t===U.hidden||t===`alt+.`?(e.preventDefault(),Ge().then(()=>{qe(e=>e+1),Vr()})):t===U.undo?(e.preventDefault(),si(!0)):t===U.redo?(e.preventDefault(),si(!1)):t===U.splitView?(e.preventDefault(),br()):q!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),qn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[U,q,O.open,gr,_r,dr,Lr,Rr,zr,Un,Wn,Hn,qn,ui,yr,vr,p,Vr,si,br]),(0,z.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Lr()):(e.button===4||e.button===9)&&(e.preventDefault(),Rr())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Lr,Rr]),(0,z.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Lr();break;case`forward`:Rr()}})},[Lr,Rr]);let Mi=(0,z.useMemo)(()=>{let e=new Set;for(let n of t){if(Nb(n)!==`files`)continue;let t=Pb(n);if(t&&!Qc(t)){if(w(t)){let n=Bb(T(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),Ni=Mi.join(`\0`);(0,z.useEffect)(()=>{l.available&&l.send({type:`fs.watch`,payload:{paths:Mi,owner:`app`}})},[Ni,i]);let Pi=Nb(En)===`files`?Pb(En):``;(0,z.useEffect)(()=>{l.available&&l.send({type:`fs.focus`,payload:{path:Pi||null}})},[Pi]),(0,z.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=$n.current.tabs.filter(e=>Nb(e)===`files`&&P(Pb(e),n)),i=$n.current.tabs.filter(e=>{let t=Pb(e);return Nb(e)===`files`&&t.length>0&&w(t)&&P(T(t),n)});if(r.length!==0||i.length!==0){ln(n);for(let e of i){let t=$n.current.tabs.find(t=>t.id===e.id),r=t?Pb(t):``;t&&Nb(t)===`files`&&!t.loading&&w(r)&&P(T(r),n)&&cr(e.id,r,!0)}r.length!==0&&Ce(n,!1,An).then(e=>{for(let t of r){let n=$n.current.tabs.find(e=>e.id===t.id);n&&Nb(n)===`files`&&P(Pb(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=$n.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Nb(n)===`files`&&P(Pb(n),e.path)&&rr(t.id,()=>({listing:e}))},300):rr(t.id,()=>({listing:e})))}},()=>void 0)}})},[An,cr,rr]);let Ii=K.index>0,Li=K.index<K.history.length-1,Ri=(e,t)=>{let n=Lb(e,Dn),r=e.listing?.path??e.history[e.index]??``,i=w(r),a=i&&ne(r);return(0,J.jsx)(Ml,{platform:_?.platform,confirmDelete:H?.confirmDelete??!1,cutPaths:on,previewVideoAudio:H?.previewVideoAudio??!1,previewVideoAutoplay:H?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?et:nt,onActivate:()=>ct(t?`primary`:`secondary`),enableShortcuts:(!Cn||(t?st===`primary`:st===`secondary`))&&(!i||a),error:e.error,find:e.id===En.id?{...O,currentPath:Vn<0?null:Bn[Vn]}:void 0,selectMatchesToken:e.id===En.id?N:0,imageStripHeight:Pn,listing:e.listing,loading:e.loading,onImageStripHeight:pi,readOnly:i&&!a||Qc(e.listing?.path??``),onOpen:(t,n)=>{n?dr(t):cr(e.id,t)},onOpenFile:(t,n)=>{Qc(t)?rl(t).catch(e=>void Wa(zb(e))):A(t)?H?.archiveHandler??!1?n?dr(t):cr(e.id,t):Se(t):w(t)?(async()=>{let e=await Te(t,B.current,Hb(t));if(!e.path&&nn(e.error)){let n=T(t),r=$t(n);r&&tn(n);let i=await Ka(n,!!r);i&&(en(n,i),e=await Te(t,B.current,i))}e.path?Se(e.path):e.error&&Wa(e.error)})():Se(t)},onRefresh:()=>{let t=e.listing?.path;t&&fr(t)},onRename:pr,onSelectionCountChange:t?Nr:Pr,onSetTags:(t,n,r)=>mi(e.id,t,n,r),selectionMenuRequest:t?Tt.primary:Tt.secondary,onSort:t=>hi(e.id,t),onPaste:ni,onClipboardChanged:()=>void Xr(),onTransfer:ai,onAddToTray:e=>void Ur(e),onAddFavorite:e=>void Gr(e),onRemoveFavorite:e=>void Kr(e),favoritePaths:Fe,onExtractArchive:(e,t)=>void Gi(e,t),openOnSingleClick:H?.openOnSingleClick??!1,pendingRename:Dt&&t===(st===`primary`)&&P(Dt.directory,e.listing?.path??``)?Dt.path:null,pendingRenameToken:Dt?.token??0,refreshToken:Ke,shortcuts:U,showCheckboxes:H?.showCheckboxes??!0,showImages:Nn,view:n})},zi=O.open&&(0,J.jsx)(lf,{current:Vn,focusToken:M,matchCase:O.matchCase,mode:O.mode,onClose:Hn,onMatchCase:()=>k(e=>({...e,matchCase:!e.matchCase})),onMode:()=>k(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Qn(1),onPrevious:()=>Qn(-1),onQuery:e=>k(t=>({...t,query:e})),onRegex:()=>k(e=>({...e,regex:!e.regex})),query:O.query,regex:O.regex,total:Bn.length,onSelectMatches:Bn.length>0?()=>F(e=>e+1):void 0}),Bi=q===`files`&&w(yn),Vi=Bi&&ne(yn),Hi=Bi&&K.listing?.archiveEncrypted===!0,Wi=async(t,n)=>{let r=T(t),i=await we(r,n,B.current,Hb(r));if(!i.ok&&nn(i.error)){let e=$t(r);e&&tn(r);let t=await Ka(r,!!e);t&&(en(r,t),i=await we(r,n,B.current,t))}i.ok?(fr(n),cn(),cr(K.id,n,!0)):Wa(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Gi=async(e,t)=>{let n=T(e),r=Bb(n);if(!r)return;if(t===`choose`){let e=await za(r);e&&await Wi(n,e);return}let i=t===`named`;if(t===`auto`){let e=P(n,yn)?K.listing?.entries??[]:(await Ce(n,!1,!1,B.current,Hb(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${Vb(n)}`:r;await Wi(n,o)},qi=async e=>{Bi&&await Gi(yn,e)},Ji=async()=>{Bi&&await Gi(yn,`choose`)},Yi=(0,J.jsxs)(Yb,{children:[(0,J.jsx)(Xb,{"data-shortcut":Jt(U.goBack),disabled:!Ii,onClick:e=>{K.index>0&&Kt(e)?dr(K.history[K.index-1]):Lr()},title:e(`back`),type:`button`,children:(0,J.jsx)(Ei,{})}),(0,J.jsx)(Xb,{"data-shortcut":Jt(U.goForward),disabled:!Li,onClick:e=>{K.index<K.history.length-1&&Kt(e)?dr(K.history[K.index+1]):Rr()},title:e(`forward`),type:`button`,children:(0,J.jsx)(Di,{})}),(0,J.jsx)(Xb,{"data-shortcut":Jt(U.goUp),disabled:q!==`files`||!xn,onClick:e=>{xn&&(Kt(e)?dr(xn):vr(xn))},title:e(`up_one_level`),type:`button`,children:(0,J.jsx)(Ci,{})}),(0,J.jsx)(tm,{focusToken:Ue,icon:Fn,label:q===`files`?void 0:e(gb[q]),onContextMenu:q===`files`?(e,t,n)=>mt({x:t,y:n,path:e}):void 0,onNavigate:vr,path:q===`files`?yn:vn}),q===`files`&&(!Bi||Vi)&&(0,J.jsx)(Xb,{onClick:e=>jr(e,yn,()=>void cr(K.id,yn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(Ti,{})}),(0,J.jsx)(Xb,{"data-shortcut":Jt(U.find),onClick:()=>q===`files`?Un():Wn(),title:e(`search`),type:`button`,children:(0,J.jsx)(Si,{})}),bt.primary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(vm,{}),(0,J.jsx)(Xb,{onClick:e=>Fr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,J.jsx)(ka,{})})]}),(0,J.jsx)(`span`,{ref:Lt,style:{display:`contents`}}),Bi&&(0,J.jsxs)(Zb,{children:[(0,J.jsx)(vm,{}),Hi&&(0,J.jsxs)(Qb,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,J.jsx)(Aa,{size:12}),e(`encrypted`)]}),(0,J.jsx)(Xb,{onClick:()=>void Ji(),onContextMenu:e=>{e.preventDefault(),ft({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,J.jsx)(Ki,{})}),(0,J.jsx)(Fo,{icon:(0,J.jsx)(va,{size:15}),onChange:e=>{let t=Number(e);ge(t),B.current=t,Bi&&cr(K.id,yn,!0)},options:jb.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(jb.find(e=>e.value===String(R))?.label??`auto`)}`,value:String(R)})]})]}),Xi=I.open?{...I,index:pe}:null;return(0,J.jsx)(In,{value:Mn,children:(0,J.jsxs)(Gb,{$rounded:D,children:[(0,J.jsx)(Sd,{settings:H,theme:Pe}),(0,J.jsx)(Gy,{activeId:K.id,onClose:gr,onNewTab:()=>dr(),onReorder:gi,onTransferToTab:ai,onSelect:a,onViewChange:ui,onColumns:di,onShowImages:fi,showImages:Nn,tasks:At,onClearTasks:oi,activityOpen:Mt,onActivityOpenChange:Nt,trayCount:dn.length+Zt.length,trayVisible:sn,onToggleTray:ii,split:Cn,canSplit:q===`files`,onToggleSplit:br,details:Je,canDetails:q===`files`||q===`recycle`||q===`gallery`,onToggleDetails:()=>Xe(e=>!e),currentFolder:q===`files`&&!Qc(yn)?yn:``,shortcuts:U,view:On,tabs:t.filter(e=>!e.hidden).map(n=>{let r=Nb(n),i=Pb(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?Pb(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Rn(Mn,i):void 0,archive:r===`files`&&w(i),split:!!a,title:r===`files`?zn(Mn,i,b(i)||e(`files`)):e(gb[r]),partner:a?{title:zn(Mn,o,b(o)||e(`files`)),place:Rn(Mn,o)}:void 0}})}),(0,J.jsxs)(Kb,{children:[(0,J.jsx)(ev,{activeKind:q,currentPath:q===`files`?vn:``,drives:h,historyVersion:Ie,onNavigate:vr,onOpenView:hr,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:ve,recentLimit:De,version:Be}),(0,J.jsxs)(qb,{children:[(0,J.jsxs)(ix,{children:[(0,J.jsxs)(ax,{children:[q!==`files`&&Yi,(0,J.jsxs)(Jb,{children:[q!==`files`&&I.open&&(0,J.jsx)(lf,{current:pe,focusToken:de,matchCase:I.matchCase,mode:I.mode,onClose:Gn,onMatchCase:()=>le(e=>({...e,matchCase:!e.matchCase})),onMode:()=>le(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Kn(1),onPrevious:()=>Kn(-1),onQuery:e=>le(t=>({...t,query:e})),onRegex:()=>le(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:I.query,regex:I.regex,total:he,onSelectMatches:q===`gallery`||q===`recycle`?()=>F(e=>e+1):void 0}),q===`files`?Cn&&Sn?(0,J.jsxs)(ex,{ref:kr,children:[(0,J.jsxs)(tx,{style:{flex:u},children:[(0,J.jsxs)($b,{$active:st===`primary`,onPointerDown:()=>ct(`primary`),children:[(0,J.jsx)(Xb,{"data-shortcut":Jt(U.goBack),disabled:!Ii,onClick:e=>{let t=K.index-1;t<0||(Kt(e)?dr(K.history[t]):ur(K.id,K.history[t],t))},title:e(`back`),type:`button`,children:(0,J.jsx)(Ei,{})}),(0,J.jsx)(Xb,{"data-shortcut":Jt(U.goForward),disabled:!Li,onClick:e=>{let t=K.index+1;t>=K.history.length||(Kt(e)?dr(K.history[t]):ur(K.id,K.history[t],t))},title:e(`forward`),type:`button`,children:(0,J.jsx)(Di,{})}),(0,J.jsx)(Xb,{"data-shortcut":Jt(U.goUp),disabled:!xn,onClick:e=>{xn&&(Kt(e)?dr(xn):cr(K.id,xn))},title:e(`up_one_level`),type:`button`,children:(0,J.jsx)(Ci,{})}),(0,J.jsx)(tm,{focusToken:st===`primary`?Ue:void 0,onContextMenu:(e,t,n)=>mt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?dr(e):void cr(K.id,e),path:yn}),(0,J.jsx)(Xb,{onClick:e=>jr(e,yn,()=>void cr(K.id,yn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(Ti,{})}),(0,J.jsx)(Xb,{"data-shortcut":Jt(U.find),onClick:Un,title:e(`search`),type:`button`,children:(0,J.jsx)(Si,{})}),bt.primary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(vm,{}),(0,J.jsx)(Xb,{onClick:e=>Fr(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,J.jsx)(ka,{})})]})]}),Ri(K,!0),st===`primary`&&zi]}),(0,J.jsx)(nx,{onDoubleClick:()=>d(.5),onPointerDown:Ar,title:e(`drag_to_resize_double_click_to_reset`)}),(0,J.jsxs)(tx,{$enter:!0,style:{flex:1-u},children:[(0,J.jsxs)($b,{$active:st===`secondary`,onPointerDown:()=>ct(`secondary`),children:[(0,J.jsx)(Xb,{"data-shortcut":Jt(U.goBack),disabled:Sn.index<=0,onClick:e=>{let t=Sn.index-1;t<0||(Kt(e)?dr(Sn.history[t]):ur(Sn.id,Sn.history[t],t))},title:e(`back`),type:`button`,children:(0,J.jsx)(Ei,{})}),(0,J.jsx)(Xb,{"data-shortcut":Jt(U.goForward),disabled:Sn.index>=Sn.history.length-1,onClick:e=>{let t=Sn.index+1;t>=Sn.history.length||(Kt(e)?dr(Sn.history[t]):ur(Sn.id,Sn.history[t],t))},title:e(`forward`),type:`button`,children:(0,J.jsx)(Di,{})}),(0,J.jsx)(Xb,{"data-shortcut":Jt(U.goUp),disabled:!Tn,onClick:e=>{Tn&&(Kt(e)?dr(Tn):cr(Sn.id,Tn))},title:e(`up_one_level`),type:`button`,children:(0,J.jsx)(Ci,{})}),(0,J.jsx)(tm,{focusToken:st===`secondary`?Ue:void 0,onContextMenu:(e,t,n)=>mt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?dr(e):void cr(Sn.id,e),path:wn}),(0,J.jsx)(Xb,{onClick:e=>jr(e,wn,()=>void cr(Sn.id,wn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(Ti,{})}),(0,J.jsx)(Xb,{"data-shortcut":Jt(U.find),onClick:Un,title:e(`search`),type:`button`,children:(0,J.jsx)(Si,{})}),bt.secondary>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(vm,{}),(0,J.jsx)(Xb,{onClick:e=>Fr(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,J.jsx)(ka,{})})]})]}),Ri(Sn,!1),st===`secondary`&&zi]})]}):(0,J.jsxs)(J.Fragment,{children:[Yi,(0,J.jsxs)(rx,{children:[Ri(K,!0),zi]})]}):q===`home`?(0,J.jsx)(Gp,{platform:_?.platform,drives:h,find:Xi,historyVersion:Ie,onSearchMatches:L,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:xi,onHistoryChanged:()=>Le(e=>e+1),onAddToTray:e=>void Ur(e),onAddFavorite:e=>void Gr(e),onRemoveFavorite:e=>void Kr(e),favoritePaths:Fe,onExtractArchive:(e,t)=>void Gi(e,t),settingsVersion:Be,theme:Pe,onOpen:vr,onLayoutChanged:yi,onPlacesChanged:m,onRecentCleared:bi,places:p,recent:ve,recentLimit:De,visibilityVersion:Ke}):q===`settings`?(0,J.jsx)(Mh,{appInfo:_,find:Xi,focusSection:S,onSearchMatches:L,onSettingsChanged:yi}):q===`gallery`?(0,J.jsx)(G_,{platform:_?.platform,toolbarSlot:Pt,onStatusChange:zt,confirmDelete:H?.confirmDelete??!1,find:Xi,onSearchMatches:L,openOnSingleClick:H?.openOnSingleClick??!1,onAddToTray:e=>void Ur(e),onAddFavorite:e=>void Gr(e),onRemoveFavorite:e=>void Kr(e),favoritePaths:Fe,onExtractArchive:(e,t)=>void Gi(e,t),shortcuts:U,showCheckboxes:H?.showCheckboxes??!0,selectMatchesToken:N,onPreviewChange:Cr,view:On}):(0,J.jsx)(bm,{find:Xi,toolbarSlot:Pt,onStatusChange:zt,onOpenLocation:vr,onShowDetails:()=>Xe(!0),platform:_?.platform,selectMatchesToken:N,onPreviewChange:wr})]},q)]}),(q===`files`||q===`gallery`||q===`recycle`)&&(0,J.jsx)(vs,{emptyNote:e(`nothing_selected`),info:Dr,onWidth:xr,open:Je,selectionNote:Or,videoAudio:H?.previewVideoAudio??!1,videoAutoplay:H?.previewVideoAutoplay??!1,width:Ze})]}),(0,J.jsxs)(ux,{children:[(0,J.jsx)(`span`,{children:q===`files`&&K.listing?Ub(e,K.listing):Rt}),_?(0,J.jsxs)(ox,{children:[(0,J.jsxs)(`span`,{children:[`v`,_.version,` · `,_.platform]}),_.debug&&(0,J.jsx)(lx,{children:`debug`}),y?.available&&(0,J.jsxs)(sx,{onClick:()=>{C(`updates`),hr(`settings`)},title:e(`version_version_is_available`,{version:y.latest}),type:`button`,children:[(0,J.jsx)(cx,{}),e(`update_available`)]})]}):(0,J.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,J.jsx)(Sc,{clipboardItems:Zt,clipboardMove:rn,currentDirectory:q===`files`?vn:``,items:dn,onAdd:e=>void Ur(e),onClear:qr,onClose:()=>un(!1),onCopyToClipboard:e=>void Zr(e),onPosition:ri,onRemove:Wr,onTransfer:ai,position:hn,visible:sn}),lt&&(0,J.jsx)(Mo,{creationOnly:!0,directory:lt.directory,menu:{x:lt.x,y:lt.y,paths:[],background:!0},onClose:()=>ut(null),onCreateFile:e=>void Ir(e),onCreateFolder:e=>void Ir(null,e),shortcuts:U}),pt&&(0,J.jsx)(Mo,{allowCompression:!0,directory:Bb(pt.path)??pt.path,menu:{x:pt.x,y:pt.y,paths:[pt.path]},onAddToTray:e=>void Ur(e),onAddFavorite:e=>void Gr(e),onRemoveFavorite:e=>void Kr(e),favoritePaths:Fe,onExtractArchive:(e,t)=>void Gi(e,t),onArchiveCreated:e=>{e&&fr(Bb(pt.path)??pt.path)},onClose:()=>mt(null),onCompressTo:(e,t)=>_t({paths:e,name:t}),onCopy:(e,t)=>void gt(e,t),onDelete:e=>void St(e,!1).then(()=>fr(Bb(pt.path)??pt.path)),onOpen:(e,t)=>t?dr(e):void cr(K.id,e),onOpenFile:e=>void Se(e),onPaste:e=>void xt(e).then(t=>{t.ok&&fr(e)}),onRefresh:()=>fr(pt.path),shortcuts:U,target:{path:pt.path,isDirectory:!0}}),ht&&(0,J.jsx)(Jo,{initialDirectory:Bb(pt?.path??yn)??yn,initialName:ht.name,onCancel:()=>_t(null),onCompress:async e=>{let t=await Bt(ht.paths,e);return!t.ok&&t.error&&Wa(t.error),t.ok}}),dt&&(0,J.jsx)(bo,{items:[{label:e(`extract_here`),onSelect:()=>void qi(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void qi(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void qi(`auto`)}],onClose:()=>ft(null),x:dt.x,y:dt.y}),pn&&(0,J.jsx)(Dd,{action:pn.prompt.action,delaySeconds:pn.prompt.delaySeconds,hits:pn.prompt.hits,onCancel:()=>{pn.resolve(!1),mn(null)},onConfirm:()=>{pn.resolve(!0),mn(null)},permanent:pn.prompt.permanent},pn.id),(0,J.jsx)(Gd,{}),(0,J.jsx)(Qd,{}),s&&(0,J.jsx)(_b,{code:s.code,deviceName:s.deviceName,onAccept:()=>{Yc(s.requestId,!0),c(null)},onReject:()=>{Yc(s.requestId,!1),c(null)}}),(0,J.jsx)(db,{}),(0,J.jsx)(re,{})]})})}var Gb=_.div`
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
`,Kb=_.div`
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
`,qb=_.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Jb=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${ho}
`,Yb=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Xb=_m,Zb=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Qb=_.span`
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
`,$b=_.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,ex=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,tx=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?vo:``}
`,nx=_.div`
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
        ${yo}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,rx=_.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,ix=_.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ax=_.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ox=_.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,sx=_.button`
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
`,cx=_.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,lx=_.span`
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
`,ux=_.footer`
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
`;function dx({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:s,showImages:c,save:u=!1,initialName:d=``,defaultExtension:f=``,theme:p,onCancel:m,onSelect:h}){let g=o(),ee=vl(`picker`),_=t===`file`,v=r??[],[x,S]=(0,z.useState)(e),[C,w]=(0,z.useState)(null),[ne,T]=(0,z.useState)(!0),[E,re]=(0,z.useState)(null),[D,O]=(0,z.useState)(()=>new Set),[k,ie]=(0,z.useState)(a??[]),[A,j]=(0,z.useState)([]),[ae,M]=(0,z.useState)([]),[oe,se]=(0,z.useState)([]),[N,P]=(0,z.useState)([]),[ce,F]=(0,z.useState)(d),[I,le]=(0,z.useState)(null),[ue,de]=(0,z.useState)(v.length===0),[fe,pe]=(0,z.useState)(`files`),[me,he]=(0,z.useState)(0),[L,R]=(0,z.useState)(bn),[ge,B]=(0,z.useState)(0),[_e,ve]=(0,z.useState)(0),[xe,Se]=(0,z.useState)(0),[we,Te]=(0,z.useState)(null),[Ee,De]=(0,z.useState)(null),[Oe,ke]=(0,z.useState)(0),[V,Me]=(0,z.useState)(null),[H,Ne]=(0,z.useState)(be.imageStripHeight);(0,z.useEffect)(()=>{Ye().then(Me,()=>Me(null))},[]),(0,z.useEffect)(()=>{a?ie(a):Ae().then(ie,()=>ie([]))},[a]),(0,z.useEffect)(()=>{je().then(j,()=>j([])),ze().then(M,()=>M([]))},[]),(0,z.useEffect)(()=>{let e=!0;return T(!0),re(null),O(new Set),u||F(_?``:b(x)),Ce(x||void 0,!1).then(t=>{e&&(w(t),S(t.path),u||F(_?``:b(t.path)),T(!1))},t=>{e&&(re(t instanceof Error?t.message:String(t)),T(!1))}),()=>{e=!1}},[x,me,_]),(0,z.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),R(e=>({...e,open:!0})),B(e=>e+1);return}if(e.key===`Escape`){L.open?(R(e=>({...e,open:!1,query:``})),ve(0)):m();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Fe();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Ie();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),R(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),B(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ze()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,z.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Fe()):(e.button===4||e.button===9)&&(e.preventDefault(),Ie())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Pe=e=>{let t=e.trim();t.length!==0&&te(t)!==te(x)&&(se(e=>[...e,x]),P([]),pe(`files`),S(t))},Fe=()=>{let e=oe.at(-1);e!==void 0&&(se(e=>e.slice(0,-1)),P(e=>[x,...e]),S(e))},Ie=()=>{let e=N[0];e!==void 0&&(P(e=>e.slice(1)),se(e=>[...e,x]),S(e))};(0,z.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Fe();break;case`forward`:Ie()}})});let Le=C?.path??x,U=C?.parent??(x?y(x):null);(0,z.useEffect)(()=>{l.available&&Le&&l.send({type:`fs.watch`,payload:{paths:[Le],owner:`picker`}})},[Le]),(0,z.useEffect)(()=>{if(l.available&&Le)return l.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&te(t.data.path)===te(Le)&&Ce(Le,!1).then(e=>{w(e);let t=new Set(e.entries.map(e=>e.fullPath));O(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Le]);let Re=(C?.entries??[]).filter(e=>e.isDirectory||_&&(ue||v.length===0||v.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Be=C?{...C,entries:Re}:null,Ve=L.open&&L.query.length>0,He=(0,z.useMemo)(()=>Ve?Re.filter(e=>kn(e.name,L)).map(e=>e.fullPath):[],[Ve,Re,L]);(0,z.useEffect)(()=>{ve(0)},[L.query,L.matchCase,L.regex,C?.path]);let Ue=He.length===0?-1:Math.min(_e,He.length-1),We=(0,z.useMemo)(()=>({...L,currentPath:Ue>=0?He[Ue]:null}),[L,Ue,He]),Ge=V?.defaultView??be,Ke=s??{mode:Ge.mode,iconSize:Ge.iconSize,gridSize:Ge.gridSize,sort:`name`,sortDescending:!1,columns:Ge.columns??[`type`,`size`,`modified`]},qe=(c??Ge.showImages)&&Ke.mode===`list`,Je=ce.trim(),Xe=Je.length>0?px(Je)?Je:fx(Le,Je):null,Ze=()=>{if(ne||E)return;if(u){let e=Je;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){Wa(g(`the_file_name_is_not_valid`));return}let t=f.length>0&&!/\.[^.]*$/.test(e)?f.startsWith(`.`)?f:`.${f}`:``,n=px(e)?e+t:fx(Le,e+t);W([n]).then(e=>e[0]?.exists?le(n):h([n]),()=>h([n]));return}let e=n?[...D]:[...D].slice(0,1);e.length>0?h(e):Xe!==null&&Je!==b(Le)?h([Xe]):!_&&Le&&h([Le])},Qe=(0,z.useCallback)(e=>{O(new Set(e)),e.length===1?F(b(e[0])):u||F(e.length===0&&!_?b(Le):``)},[Le,_,u]),$e=e=>{C?.entries.find(t=>t.fullPath===e)?.isDirectory?Pe(e):u?F(b(e)):_&&h([e])},et=e=>F(e),tt=async e=>{let t=we;if(Te(null),!t||!Le)return;let n=e===null?await wt(Le):await Ot(Le,e);n.ok&&n.path!==null&&(R(e=>({...e,open:!1,query:``})),e!==null&&de(!0),he(e=>e+1),window.setTimeout(()=>{De(n.path),ke(e=>e+1)},120))},nt=()=>{R(e=>({...e,open:!0})),B(e=>e+1)},rt=e=>{ve(t=>He.length===0?0:(t+e+He.length)%He.length)},it=e=>(0,J.jsxs)(Cx,{children:[(0,J.jsxs)(wx,{children:[(0,J.jsx)(Tx,{children:g(_||u?`file_name`:`folder_3`)}),(0,J.jsx)(Ex,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ze())},spellCheck:!1,value:ce}),_&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Tx,{children:g(`files_of_type`)}),(0,J.jsx)(Fo,{onChange:e=>de(e===`all`),options:[...v.length>0?[{value:`supported`,label:`${g(`supported_files`)} (${v.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${g(`all_files`)} (*.*)`}],value:ue?`all`:`supported`})]})]}),(0,J.jsxs)(Dx,{children:[(0,J.jsx)(Ox,{onClick:m,type:`button`,children:g(`cancel`)}),(0,J.jsxs)(Ox,{$primary:!0,disabled:ne||E!==null||(u||_&&D.size===0)&&Je.length===0,onClick:Ze,type:`button`,children:[(0,J.jsx)(Ii,{size:12}),g(u?`save_as`:_?`select_this_file`:`select_this_folder`)]})]}),(0,J.jsx)(ss,{confirmLabel:g(`overwrite`),message:g(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>le(null),onConfirm:()=>{let e=I;le(null),e&&h([e])},open:I!==null,title:g(`overwrite`)})]}),at=(0,J.jsxs)(hx,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,J.jsxs)(gx,{children:[(0,J.jsxs)(_x,{children:[(0,J.jsx)(yi,{size:16}),g(u?`save_as`:_?`choose_a_file`:`choose_a_folder`)]}),(0,J.jsx)(vx,{onClick:m,title:g(`cancel`),type:`button`,children:(0,J.jsx)(Li,{size:12})})]}),(0,J.jsxs)(yx,{children:[(0,J.jsx)(ev,{activeKind:fe===`overview`?`home`:fe===`gallery`?`gallery`:`files`,currentPath:Le,drives:A,hiddenViews:_?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:k.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Pe(e),onOpenView:e=>{e===`home`?(O(new Set),F(_?``:b(Le)),pe(`overview`)):e===`gallery`&&_&&(O(new Set),F(``),pe(`gallery`))},places:k,recent:ae,recentLimit:10}),(0,J.jsx)(bx,{children:fe===`overview`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(Gp,{drives:A,theme:p,historyVersion:0,homePath:k.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Pe(e),onPick:_?e=>h([e]):void 0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Qe,places:k,readOnly:!0,recent:ae,recentLimit:10,visibilityVersion:0}),it(F)]}):fe===`gallery`?(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(G_,{onPick:e=>h([e]),onSelectionChange:Qe,showCheckboxes:V?.showCheckboxes??!0,view:{...ye,columns:[]}}),it(F)]}):(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(xx,{children:[(0,J.jsx)(Sx,{disabled:oe.length===0,onClick:Fe,title:g(`back`),type:`button`,children:(0,J.jsx)(Ei,{})}),(0,J.jsx)(Sx,{disabled:N.length===0,onClick:Ie,title:g(`forward`),type:`button`,children:(0,J.jsx)(Di,{})}),(0,J.jsx)(Sx,{disabled:!U,onClick:()=>U&&Pe(U),title:g(`up_one_level`),type:`button`,children:(0,J.jsx)(Ci,{})}),(0,J.jsx)(tm,{onNavigate:Pe,path:Le}),(0,J.jsx)(Sx,{onClick:e=>Te({x:e.clientX,y:e.clientY}),title:g(`new_folder_or_file`),type:`button`,children:(0,J.jsx)(Ti,{})}),(0,J.jsx)(Sx,{onClick:nt,title:g(`search`),type:`button`,children:(0,J.jsx)(Si,{})}),ee.available&&(0,J.jsx)(Sx,{onClick:e=>ee.open(e.clientX,e.clientY),title:g(`selection_menu`),type:`button`,children:(0,J.jsx)(ka,{})})]}),L.open&&(0,J.jsx)(lf,{current:Ue,focusToken:ge,matchCase:L.matchCase,mode:L.mode,onClose:()=>{R(e=>({...e,open:!1,query:``})),ve(0)},onMatchCase:()=>R(e=>({...e,matchCase:!e.matchCase})),onMode:()=>R(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>rt(1),onPrevious:()=>rt(-1),onQuery:e=>R(t=>({...t,query:e})),onRegex:()=>R(e=>({...e,regex:!e.regex})),query:L.query,regex:L.regex,total:He.length,onSelectMatches:()=>Se(e=>e+1)}),(0,J.jsx)(Ml,{allowBackgroundMenu:!0,confirmDelete:V?.confirmDelete??!1,enableShortcuts:!0,error:E,find:We,selectMatchesToken:xe,imageStripHeight:H,loading:ne,listing:Be,onImageStripHeight:Ne,onOpen:$e,onOpenFile:$e,onRefresh:()=>he(e=>e+1),onSelectionChange:Qe,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:V?.openOnSingleClick??!1,refreshToken:me,pendingRename:Ee,pendingRenameToken:Oe,showCheckboxes:V?.showCheckboxes??!0,showDetails:!1,showImages:qe,singleSelect:!n,view:Ke}),it(et)]})})]}),we&&(0,J.jsx)(Mo,{creationOnly:!0,directory:Le,menu:{x:we.x,y:we.y,paths:[],background:!0},onClose:()=>Te(null),onCreateFile:_?e=>void tt(e):void 0,onCreateFolder:()=>void tt(null),shortcuts:Ut})]});return i?at:(0,no.createPortal)((0,J.jsx)(mx,{onPointerDown:e=>{e.target===e.currentTarget&&m()},children:at}),document.body)}function fx(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function px(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var mx=_.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${vo}
`,hx=_.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:ro}
    ${({$inline:e})=>e?``:po}
`,gx=_.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,_x=_.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,vx=_.button`
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
`,yx=_.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,bx=_.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,xx=_.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Sx=_.button`
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
`,Cx=_.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,wx=_.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Tx=_.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Ex=_.input`
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
`,Dx=_.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Ox=_.button`
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
`;function kx({mode:e,save:t=!1,multiple:n,extensions:i,initial:a,initialName:s=``,defaultExtension:c=``}){let d=o(),p=u(),[m,h]=(0,z.useState)(null),ee=f(g(m?.themeMode)),[_,v]=(0,z.useState)({}),[y,b]=(0,z.useState)(null),[x,S]=(0,z.useState)(null),[C,w]=(0,z.useState)(null),te=(0,z.useRef)(0);(0,z.useEffect)(()=>{l.send({type:`app.ready`})},[]),(0,z.useEffect)(()=>(_e(e=>new Promise(t=>{w({id:++te.current,prompt:e,resolve:t})})),()=>_e(null)),[]),(0,z.useEffect)(()=>{Ye().then(h,()=>void 0)},[]),(0,z.useEffect)(()=>{r(m?.accentColor,m?.secondaryColor,ee)},[m?.accentColor,m?.secondaryColor,ee]);let ne=m?.defaultView??be,T={mode:_.mode??ne.mode,iconSize:_.iconSize??ne.iconSize,gridSize:_.gridSize??ne.gridSize,sort:`name`,sortDescending:!1,columns:y??ne.columns??[`type`,`size`,`modified`]},E=e=>v(t=>({...t,...e}));return(0,J.jsxs)(Ax,{children:[(0,J.jsxs)(jx,{children:[(0,J.jsx)(Mx,{children:(0,J.jsx)(Bi,{size:17})}),(0,J.jsx)(Nx,{...p,children:d(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,J.jsx)(Oy,{onChange:E,onColumns:b,onShowImages:S,showImages:x??ne.showImages,view:T}),(0,J.jsx)(Px,{children:(0,J.jsx)(Fx,{onClick:()=>l.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:d(`cancel`),type:`button`,children:(0,J.jsx)(Li,{size:12})})})]}),(0,J.jsx)(Ix,{children:(0,J.jsx)(dx,{extensions:i,initial:a,initialName:s,defaultExtension:c,inline:!0,mode:e,multiple:n,onCancel:()=>l.send({type:`pick.cancel`}),onSelect:e=>l.send({type:`pick.submit`,payload:{paths:e}}),save:t,showImages:x??ne.showImages,fileView:T,theme:ee})}),C&&(0,J.jsx)(Dd,{action:C.prompt.action,delaySeconds:C.prompt.delaySeconds,hits:C.prompt.hits,onCancel:()=>{C.resolve(!1),w(null)},onConfirm:()=>{C.resolve(!0),w(null)},permanent:C.prompt.permanent},C.id),(0,J.jsx)(Gd,{}),(0,J.jsx)(re,{})]})}var Ax=_.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,jx=_.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,Mx=_.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Nx=_.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Px=_.div`
    display: flex;
    flex-shrink: 0;
`,Fx=_.button`
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
`,Ix=_.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;document.documentElement.dataset.theme=i()?`dark`:`light`;var Lx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Lx),window.addEventListener(`pagehide`,qn);var Rx=document.getElementById(`root`),zx=new URLSearchParams(window.location.search),Bx=zx.get(`picker`),Vx=zx.get(`filter`)??``;Rx&&(Un(),(0,ge.createRoot)(Rx).render((0,J.jsx)(z.StrictMode,{children:(0,J.jsx)(d,{children:Bx===`folder`||Bx===`file`||Bx===`save`?(0,J.jsx)(kx,{defaultExtension:zx.get(`ext`)??``,extensions:Vx?Vx.split(`;`).filter(Boolean):[],initial:zx.get(`initial`)??``,initialName:zx.get(`name`)??``,mode:Bx===`folder`?`folder`:`file`,multiple:zx.get(`multiple`)===`1`,save:Bx===`save`}):(0,J.jsx)(Wb,{})})})));