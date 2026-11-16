import{n as e}from"./rolldown-runtime-WkwZ5CU-.js";import{A as t,B as n,C as r,D as i,E as a,F as o,H as s,I as c,L as l,M as u,N as d,O as f,P as p,R as m,S as h,T as g,U as _,V as v,W as y,_ as b,a as x,b as S,c as C,d as w,f as T,g as ee,h as te,i as E,j as D,k as O,l as k,m as A,n as j,o as ne,p as re,r as M,s as ie,u as ae,v as oe,w as N,x as se,y as P}from"./format-CiOmuWrf.js";async function ce(){return l.available?await l.request(`app.info`):{version:`dev`,platform:`web`,logDirectory:``,rounded:!1,debug:!1}}async function F(e){l.available?await l.request(`system.openUrl`,{url:e}):window.open(e,`_blank`,`noreferrer`)}async function I(){l.available&&await L(`update.openLogs`)}async function le(e){l.available?await L(`update.openRelease`):e&&window.open(e,`_blank`,`noreferrer`)}async function ue(){return l.available?await l.request(`update.status`)??null:null}async function de(){return l.available?await l.request(`update.check`):{current:`dev`,latest:`dev`,available:!1}}async function fe(){return l.available?await l.request(`update.download`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}async function pe(){await L(`update.cancel`)}async function me(){return l.available?await l.request(`update.install`,void 0,3e4):{ok:!1,error:`The desktop host is not available.`}}function he(e){return l.on(t=>{t.type===`update.progress`&&e(t.data)})}function ge(e){return l.on(t=>{t.type===`update.changelog`&&e(t.data)})}async function L(e,t,n=3e4){let r=await l.request(e,t,n);if(!r.ok)throw Error(r.error??`The action failed.`)}var R=e(y(),1),_e=s(),z=null;function ve(e){z=e}function ye(e){return z?z(e):Promise.resolve(!1)}var be={mode:`list`,iconSize:20,gridSize:148,sort:`name`,sortDescending:!1},xe={mode:`list`,iconSize:20,gridSize:148,columns:[`type`,`size`,`modified`],showImages:!0,imageStripHeight:190};async function Se(e,t){return l.available?await l.request(`fs.drive.rename`,{root:e,label:t}):{ok:!1,needsAdmin:!1,error:`Volume labels need the desktop app.`}}async function Ce(e){return l.available?(await l.request(`fs.open`,{path:e})).ok:!1}async function we(e,t=!0,n=!1,r=0,i){return await l.request(`fs.list`,{path:e??null,sizes:t,includeLinks:n,codePage:r,password:i})}async function Te(e,t,n=0,r){let i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r});for(let a=0;a<2&&i.required&&i.token&&i.protected?.length;a++){if(!await ye({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`write`}))return{ok:!1,error:null,cancelled:!0};i=await l.request(`fs.archive.extract`,{path:e,target:t,codePage:n,password:r,confirm:i.token})}return{ok:i.ok,error:i.error}}async function Ee(e,t=0,n){return await l.request(`fs.archive.extractEntry`,{path:e,codePage:t,password:n})}async function De(e){l.available&&e.length!==0&&await l.request(`fs.archive.release`,{paths:e})}async function Oe(e){return l.available?await l.request(`fs.preview.text`,{path:e}):{text:null,truncated:!1,error:`Text previews need the desktop app.`}}async function ke(e,t){return l.available?(await l.request(`fs.view.set`,{directory:e,view:t})).ok:!1}async function Ae(e,t,n,r){return l.available?(await l.request(`fs.tags.set`,{directory:e,name:t,tags:n,colors:r??null})).ok:!1}async function je(e,t=!1){return l.available?await l.request(`fs.list.cached`,{path:e??null,includeLinks:t}):{cached:!1,listing:null}}async function Me(){return(await l.request(`fs.places`)).places}async function Ne(){return(await l.request(`fs.drives`)).drives}async function Pe(e=!1){return(await l.request(`fs.recycle`,{includeOrphans:e})).entries}async function B(e,t,n){let r=n;for(let n=0;n<2&&r.required&&r.token&&r.protected?.length;n++){if(!await ye({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:!0}))return{...r,ok:!1,cancelled:!0};r=await l.request(e,{...t,confirm:r.token})}return r}async function Fe(e=!1){let t=await l.request(`fs.recycle.empty`,{includeOrphans:e});await B(`fs.recycle.empty`,{includeOrphans:e},t)}async function Ie(e){return!l.available||e.length===0?{ok:!1,done:0}:await l.request(`fs.recycle.restoreMany`,{ids:e})}async function Le(e){if(!l.available||e.length===0)return{ok:!1,done:0};let t=await l.request(`fs.recycle.deleteMany`,{ids:e}),n=await B(`fs.recycle.deleteMany`,{ids:e},t);return{ok:n.ok,done:n.done??0,cancelled:n.cancelled}}async function Re(e){l.available&&e&&await l.request(`fs.recycle.properties`,{id:e})}async function ze(){if(!l.available)return{entries:[],cancelled:!0,failed:!1};let e=await l.request(`fs.recycle.admin.list`);return{entries:e.entries??[],cancelled:e.cancelled,failed:e.failed}}async function V(){return l.available?(await l.request(`fs.recycle.admin.purge`)).ok:!1}async function Be(e=0,t=150,n=!1){return l.available?await l.request(`fs.gallery`,{offset:e,count:t,refresh:n}):{entries:[],total:0}}async function Ve(){return l.available?(await l.request(`fs.recent`)).entries:[]}async function He(){return l.available?(await l.request(`fs.frequent`)).entries:[]}async function Ue(e){l.available&&await l.request(`fs.frequent.record`,{path:e})}async function We(){await l.request(`fs.recent.clear`)}async function Ge(){await l.request(`fs.frequent.clear`)}async function Ke(){return await l.request(`fs.visibility`)}async function qe(){return await l.request(`fs.hidden.toggle`)}async function Je(e){return await l.request(`fs.hidden.set`,{show:e})}async function Ye(){return l.available?await l.request(`fs.index.tasks`):{count:0,directories:[]}}var Xe={systemIcons:!1,customFolderIcons:!1,writeDirectoryIndex:!0,directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:{},quickAccess:null,recentLimit:10,galleryRoots:null,overviewPanels:null,overviewHidden:null,overviewColumns:1,shortcuts:null,placeIcons:null,placeNames:null,overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,linksEnabled:null,defaultFileManager:!1,archiveHandler:!1,panelPlaces:null,restoreTabs:!0,openTabs:null,activeTab:0,defaultView:null,showHidden:null,showCheckboxes:!0,openOnSingleClick:!1,confirmDelete:!1,previewVideoAudio:!1,previewVideoAutoplay:!1,trayAutoShow:!0,accentColor:null,secondaryColor:null,themeMode:`system`,backgroundSource:null,backgroundCustom:[],backgroundBlur:0,backgroundSaturation:100,backgroundBrightness:100,protectedPaths:[],deleteDelaySeconds:5,timeFormat:`24`,timeFormatPattern:`yyyy/MM/dd HH:mm`,pickerWindowWidth:1200,pickerWindowHeight:800,linkPathMode:`relative`,overviewBanner:null,overviewBannerHeight:220,overviewBanners:[],overviewBannerOffset:.3,globalHotkey:null,language:null,themePresets:[],fonts:{},sharePortMode:`random`,sharePort:null,startupMode:null,startHidden:!1,favorites:[],conflictNameStyle:`space_parentheses`,shareAccessEnabled:!0,shareApprovalMinutes:60,shareDenialSeconds:10};async function Ze(){if(!l.available)return Xe;let e=await l.request(`settings.get`);return{systemIcons:e?.systemIcons??!0,customFolderIcons:e?.customFolderIcons??!0,writeDirectoryIndex:e?.writeDirectoryIndex??!0,directoryIndexBlacklist:e?.directoryIndexBlacklist??[`**/uv/cache/**`,`**/scoop/buckets/**`],extensionIcons:e?.extensionIcons??{},quickAccess:e?.quickAccess??null,recentLimit:e?.recentLimit??10,galleryRoots:e?.galleryRoots??null,overviewPanels:e?.overviewPanels??null,overviewHidden:e?.overviewHidden??null,overviewColumns:e?.overviewColumns??1,shortcuts:e?.shortcuts??null,placeIcons:e?.placeIcons??null,placeNames:e?.placeNames??null,overviewTitles:e?.overviewTitles??null,overviewViews:e?.overviewViews??null,overviewIcons:e?.overviewIcons??null,overviewPinned:e?.overviewPinned??null,linksEnabled:e?.linksEnabled??null,defaultFileManager:e?.defaultFileManager??!1,archiveHandler:e?.archiveHandler??!1,panelPlaces:e?.panelPlaces??null,restoreTabs:e?.restoreTabs??!0,openTabs:e?.openTabs??null,activeTab:e?.activeTab??0,defaultView:e?.defaultView??null,showHidden:e?.showHidden??null,showCheckboxes:e?.showCheckboxes??!0,openOnSingleClick:e?.openOnSingleClick??!1,confirmDelete:e?.confirmDelete??!1,previewVideoAudio:e?.previewVideoAudio??!1,previewVideoAutoplay:e?.previewVideoAutoplay??!1,trayAutoShow:e?.trayAutoShow??!0,accentColor:e?.accentColor??null,secondaryColor:e?.secondaryColor??null,themeMode:g(e?.themeMode),backgroundSource:e?.backgroundSource??null,backgroundCustom:e?.backgroundCustom??[],backgroundBlur:e?.backgroundBlur??0,backgroundSaturation:e?.backgroundSaturation??100,backgroundBrightness:e?.backgroundBrightness??100,protectedPaths:e?.protectedPaths??[],deleteDelaySeconds:e?.deleteDelaySeconds??5,timeFormat:e?.timeFormat??`24`,timeFormatPattern:e?.timeFormatPattern??`yyyy/MM/dd HH:mm`,pickerWindowWidth:e?.pickerWindowWidth??1200,pickerWindowHeight:e?.pickerWindowHeight??800,linkPathMode:e?.linkPathMode??`relative`,overviewBanner:e?.overviewBanner??null,overviewBannerHeight:e?.overviewBannerHeight??220,overviewBanners:e?.overviewBanners??[],overviewBannerOffset:e?.overviewBannerOffset??.3,globalHotkey:e?.globalHotkey??null,language:e?.language??null,themePresets:e?.themePresets??[],fonts:e?.fonts??{},sharePortMode:e?.sharePortMode??`random`,sharePort:e?.sharePort??null,startupMode:e?.startupMode??null,startHidden:e?.startHidden??!1,favorites:e?.favorites??[],conflictNameStyle:e?.conflictNameStyle??`space_parentheses`,shareAccessEnabled:e?.shareAccessEnabled??!0,shareApprovalMinutes:e?.shareApprovalMinutes??60,shareDenialSeconds:e?.shareDenialSeconds??10}}async function Qe(){return l.available?(await l.request(`app.protection.defaults`)).paths??[]:[]}var $e={registered:!1,pathMatches:!1,registeredPath:null},et={registered:!1,pathMatches:!1,registeredPath:null};async function tt(){return l.available?await l.request(`app.defaultManager.status`):et}async function nt(e){return l.available?await l.request(`app.defaultManager.set`,{enabled:e}):et}async function rt(){return l.available?await l.request(`app.archive.status`):$e}async function it(){return l.available?await l.request(`app.archive.register`):$e}async function at(){return l.available?await l.request(`app.archive.unregister`):$e}async function ot(e){if(!l.available)return e;let t=await l.request(`settings.save`,e);return{systemIcons:t?.systemIcons??e.systemIcons,customFolderIcons:t?.customFolderIcons??e.customFolderIcons,writeDirectoryIndex:t?.writeDirectoryIndex??e.writeDirectoryIndex,directoryIndexBlacklist:t?.directoryIndexBlacklist??e.directoryIndexBlacklist,extensionIcons:t?.extensionIcons??e.extensionIcons,quickAccess:t?.quickAccess??e.quickAccess,recentLimit:t?.recentLimit??e.recentLimit,galleryRoots:t?.galleryRoots??e.galleryRoots,overviewPanels:t?.overviewPanels??e.overviewPanels,overviewHidden:t?.overviewHidden??e.overviewHidden,overviewColumns:t?.overviewColumns??e.overviewColumns,shortcuts:t?.shortcuts??e.shortcuts,placeIcons:t?.placeIcons??e.placeIcons,placeNames:t?.placeNames??e.placeNames,overviewTitles:t?.overviewTitles??e.overviewTitles,overviewViews:t?.overviewViews??e.overviewViews,overviewIcons:t?.overviewIcons??e.overviewIcons,overviewPinned:t?.overviewPinned??e.overviewPinned,linksEnabled:t?.linksEnabled??e.linksEnabled,defaultFileManager:t?.defaultFileManager??e.defaultFileManager,archiveHandler:t?.archiveHandler??e.archiveHandler,panelPlaces:t?.panelPlaces??e.panelPlaces,restoreTabs:t?.restoreTabs??e.restoreTabs,openTabs:t?.openTabs??e.openTabs,activeTab:t?.activeTab??e.activeTab,defaultView:t?.defaultView??e.defaultView,showHidden:t?.showHidden??e.showHidden,showCheckboxes:t?.showCheckboxes??e.showCheckboxes,openOnSingleClick:t?.openOnSingleClick??e.openOnSingleClick,confirmDelete:t?.confirmDelete??e.confirmDelete,previewVideoAudio:t?.previewVideoAudio??e.previewVideoAudio,previewVideoAutoplay:t?.previewVideoAutoplay??e.previewVideoAutoplay,trayAutoShow:t?.trayAutoShow??e.trayAutoShow,accentColor:t?.accentColor??e.accentColor,secondaryColor:t?.secondaryColor??e.secondaryColor,themeMode:g(t?.themeMode??e.themeMode),backgroundSource:t?.backgroundSource??e.backgroundSource,backgroundCustom:t?.backgroundCustom??e.backgroundCustom,backgroundBlur:t?.backgroundBlur??e.backgroundBlur,backgroundSaturation:t?.backgroundSaturation??e.backgroundSaturation,backgroundBrightness:t?.backgroundBrightness??e.backgroundBrightness,protectedPaths:t?.protectedPaths??e.protectedPaths,deleteDelaySeconds:t?.deleteDelaySeconds??e.deleteDelaySeconds,timeFormat:t?.timeFormat??e.timeFormat,timeFormatPattern:t?.timeFormatPattern??e.timeFormatPattern,pickerWindowWidth:t?.pickerWindowWidth??e.pickerWindowWidth,pickerWindowHeight:t?.pickerWindowHeight??e.pickerWindowHeight,linkPathMode:t?.linkPathMode??e.linkPathMode,overviewBanner:t?.overviewBanner??e.overviewBanner,overviewBannerHeight:t?.overviewBannerHeight??e.overviewBannerHeight,overviewBanners:t?.overviewBanners??e.overviewBanners,overviewBannerOffset:t?.overviewBannerOffset??e.overviewBannerOffset,globalHotkey:t?.globalHotkey??e.globalHotkey,language:t?.language??e.language,themePresets:t?.themePresets??e.themePresets,fonts:t?.fonts??e.fonts,sharePortMode:t?.sharePortMode??e.sharePortMode,sharePort:t?.sharePort??e.sharePort,startupMode:t?.startupMode??e.startupMode,startHidden:t?.startHidden??e.startHidden,favorites:t?.favorites??e.favorites,conflictNameStyle:t?.conflictNameStyle??e.conflictNameStyle,shareAccessEnabled:t?.shareAccessEnabled??e.shareAccessEnabled,shareApprovalMinutes:t?.shareApprovalMinutes??e.shareApprovalMinutes,shareDenialSeconds:t?.shareDenialSeconds??e.shareDenialSeconds}}async function st(e,t){l.available&&await l.request(`app.tabs.set`,{tabs:e,active:t})}async function ct(e,t,n){return l.available?(await l.request(`fs.icon.set`,{directory:e,name:t,source:n})).ok:!1}var lt={managed:0,private:0,workingSet:0,available:0};async function ut(){return l.available?await l.request(`app.memory`):lt}async function dt(){return l.available?await l.request(`app.memory.trim`):lt}var ft={registered:!1,pathMatches:!1,registeredPath:null};async function pt(){return l.available?await l.request(`app.scheme`):ft}async function mt(e){return l.available?await l.request(`app.scheme.set`,{enabled:e}):ft}var H={supported:!1,mode:`none`,active:!1,error:null};async function ht(){return l.available?await l.request(`app.startup`):H}async function gt(e){return l.available?await l.request(`app.startup.set`,{mode:e}):H}async function _t(e,t=!1){return!l.available||e.length===0?!1:(await l.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function vt(){return l.available?(await l.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function yt(){return l.available?await l.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function bt(e,t,n){return!l.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await xt({action:n?`move`:`write`},r=>l.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:r}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function xt(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await ye({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function St(e){return!l.available||e.length===0?[]:(await l.request(`fs.paths.info`,{paths:e})).entries}async function Ct(e,t=!1){return l.available?await xt({action:t?`move`:`write`},t=>l.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function wt(e,t=!1){if(!l.available||e.length===0)return{ok:!1,error:null};let n=await l.request(`fs.operation.delete`,{paths:e,permanent:t}),r=!1;for(let i=0;i<2&&n.required&&n.token&&n.protected?.length;i++){if(!await ye({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){r=!0;break}n=await l.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return r?{...n,ok:!1,cancelled:!0}:n}async function Tt(e,t){return l.available?await xt({action:`rename`},n=>l.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function Et(e,t=!1){return l.available?await l.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function Dt(e){return l.available?(await l.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function Ot(e,t){return l.available?await l.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function kt(e,t,n){return l.available?await l.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function At(e,t){return l.available?await l.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function jt(e){l.available&&e.length!==0&&await l.request(`fs.operation.properties`,{paths:e})}async function Mt(e){return!l.available||e.length===0?{ok:!1,error:null}:await l.request(`fs.share`,{paths:e})}async function Nt(e){l.available&&await l.request(`fs.operation.openWith`,{path:e})}async function Pt(e){l.available&&await l.request(`fs.operation.terminal`,{path:e})}async function Ft(e){return l.available?await l.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function It(e,t){return l.available?(await l.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function Lt(){return l.available?await l.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function Rt(){return l.available?await l.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function zt(e){l.available&&await l.request(`fs.operation.showInExplorer`,{path:e})}async function Bt(e){return!l.available||e.length===0?{verbs:[],safe:!0}:await l.request(`shell.verbs`,{paths:e})}async function Vt(e,t,n,r){l.available&&e.length!==0&&await l.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function Ht(e,t){return!l.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await l.request(`fs.operation.compress`,{...t,paths:e})}async function Ut(){return l.available?(await l.request(`app.tasks`)).tasks:[]}async function Wt(){l.available&&await l.request(`app.tasks.clear`)}var Gt={goBack:`alt+arrowleft`,goForward:`alt+arrowright`,goUp:`alt+arrowup`,find:`ctrl+f`,closeTab:`ctrl+w`,newTab:`ctrl+t`,reopenTab:`ctrl+shift+t`,copy:`ctrl+c`,cut:`ctrl+x`,paste:`ctrl+v`,undo:`ctrl+z`,redo:`ctrl+shift+z`,delete:`delete`,deletePermanently:`shift+delete`,rename:`f2`,selectAll:`ctrl+a`,invertSelection:`ctrl+shift+a`,open:`enter`,newFolder:`ctrl+shift+n`,properties:`alt+enter`,home:`alt+home`,location:`ctrl+l`,iconsView:`ctrl+1`,detailsView:`ctrl+2`,nextTab:`ctrl+tab`,previousTab:`ctrl+shift+tab`,terminal:`f4`,hidden:`ctrl+h`,splitView:`f3`,openInNewTab:`ctrl`},Kt=Gt.openInNewTab;function qt(e){Kt=e.trim()||Gt.openInNewTab}function Jt(e){let t=Kt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Yt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Xt(e){return e.split(`+`).filter(Boolean).map(e=>Zt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}var Zt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Qt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var $t=new Map;function en(e){return ee(T(e)?E(e):e)}function tn(e){return $t.get(en(e))}function nn(e,t){$t.set(en(e),t)}function rn(e){$t.delete(en(e))}function an(e){return!!e&&/password|encrypt|cannot determine compressed stream|unsupported|format/i.test(e)}var on=new Map,sn=new Map,cn=new Set,ln=0;function un(){on.clear(),sn.clear(),ln+=1,cn.forEach(e=>e())}function dn(e){if(!e)return;let t=e.toLowerCase(),n=!1;for(let e of[...on.keys()])e.toLowerCase().includes(t)&&(on.delete(e),n=!0);n&&(ln+=1,cn.forEach(e=>e()))}function fn(){let[e,t]=(0,R.useState)(ln);return(0,R.useEffect)(()=>{let e=()=>t(ln);return cn.add(e),()=>{cn.delete(e)}},[]),e}var pn=new Set(`.lnk,.url,.website,.pif,.scf,.application,.appref-ms,.exe,.com,.scr,.cpl,.msi,.msp,.mst,.ico,.appx,.appxbundle,.msix,.msixbundle,.appinstaller,.gadget,.settingcontent-ms,.library-ms,.searchconnector-ms,.wsc,.contact,.diagcpl,.diagpkg,.diagcab,.theme,.themepack`.split(`,`));function mn(e,t,n){let r=n?`1`:`0`;if(t)return`d:${r}:${e}`;let i=e.lastIndexOf(`.`),a=i>Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`))?e.slice(i).toLowerCase():``;return pn.has(a)?`f:${r}:${e}`:`f:${r}:${a}`}function hn(e,t,n=!1){let r=fn(),i=e===null?``:mn(e,t,n),[a,o]=(0,R.useState)(()=>on.get(i)??null);return(0,R.useEffect)(()=>{if(e===null){o(null);return}if(!l.available)return;if(on.has(i)){o(on.get(i)??null);return}let r=!0;return l.request(`fs.icon`,{path:e,directory:t,large:n}).then(e=>{e.dataUrl?on.set(i,e.dataUrl):on.delete(i),r&&o(e.dataUrl)},()=>{on.delete(i),r&&o(null)}),()=>{r=!1}},[i,e,t,n,r]),a}function gn(e){let[t,n]=(0,R.useState)(e);return(0,R.useEffect)(()=>{if(!e){n(null);return}if(!T(e)){n(e);return}let t=!0;return Ee(e,0,tn(e)).then(e=>{t&&n(e.path??null)},()=>{t&&n(null)}),()=>{t=!1}},[e]),t}function U(e){let t=fn(),[n,r]=(0,R.useState)(()=>e?sn.get(e)??null:null);return(0,R.useEffect)(()=>{if(!e||!l.available){r(null);return}if(sn.has(e)){r(sn.get(e)??null);return}let t=!0;return l.request(`fs.iconFile`,{path:e}).then(n=>{sn.set(e,n.dataUrl),t&&r(n.dataUrl)},()=>{sn.set(e,null),t&&r(null)}),()=>{t=!1}},[e,t]),n}var _n=null,vn=null;function yn(){return _n===null?l.available?(vn??=l.request(`app.thumbnails`).then(e=>(_n=e.base??``,_n),()=>(_n=``,``)),vn):Promise.resolve(``):Promise.resolve(_n)}function W(e,t=128,n=0){let[r,i]=(0,R.useState)(_n);return(0,R.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return yn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r?null:`${r}/thumb?path=${encodeURIComponent(e)}&size=${t}&v=${n}-${G}`}var G=2;function K(e,t=0,n=``){let[r,i]=(0,R.useState)(_n);if((0,R.useEffect)(()=>{if(!e||r!==null)return;let t=!0;return yn().then(e=>{t&&i(e)}),()=>{t=!1}},[e,r]),!e||!r)return null;let a=n?`&ext=${encodeURIComponent(n)}`:``;return`${r}/media?path=${encodeURIComponent(e)}&v=${t}${a}`}function bn(e,t=0){let[n,r]=(0,R.useState)(_n);return(0,R.useEffect)(()=>{if(!e||n!==null)return;let t=!0;return yn().then(e=>{t&&r(e)}),()=>{t=!1}},[e,n]),!e||!n?null:`${n}/pdf?path=${encodeURIComponent(e)}&v=${t}`}var xn={open:!1,query:``,mode:`dim`,matchCase:!1,regex:!1},Sn={query:``,mode:`dim`,matchCase:!1,regex:!1,currentPath:null};function Cn(e,t){if(t.query.length===0)return[];if(!t.regex){let n=t.matchCase?e:e.toLowerCase(),r=En(t),i=[],a=0;for(;;){let e=n.indexOf(r,a);if(e<0)break;i.push([e,e+r.length]),a=e+Math.max(r.length,1)}return i.length>0?i:null}let n=kn(t);if(n===null)return null;let r=[];for(let t of e.matchAll(n))t[0].length!==0&&t.index!==void 0&&r.push([t.index,t.index+t[0].length]);return r.length>0?r:null}var wn=`\0`,Tn=``;function En(e){return e.query!==wn&&(wn=e.query,Tn=e.query.toLowerCase()),Tn}var Dn=`\0`,On=null;function kn(e){let t=`${e.matchCase?`1`:`0`}\0${e.query}`;if(t===Dn)return On;Dn=t;try{On=new RegExp(e.query,e.matchCase?`g`:`gi`)}catch{On=null}return On}function An(e,t){return Cn(e,t)!==null}var jn=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],Mn={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Nn(e){let t=Fn(e);for(let{kind:e}of jn)if(Mn[e].has(t))return e;return null}function Pn(e){return Nn(e)!==null}function Fn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var In=(0,R.createContext)({places:{},useIcons:!1}),Ln=In.Provider;function Rn(){return(0,R.useContext)(In)}function zn(e,t){return e.places[ee(t)]}function Bn(e,t,n){return zn(e,t)?.name||n}var Vn=new Map,Hn=new Map,Un=0;function Wn(){try{let e=new URLSearchParams(window.location.search).get(`state`);if(!e)return;let t=e.replace(/-/g,`+`).replace(/_/g,`/`),n=Uint8Array.from(atob(t),e=>e.charCodeAt(0)),r=JSON.parse(new TextDecoder().decode(n));for(let[e,t]of Object.entries(r))typeof t==`string`&&Vn.set(e,t)}catch{}}function Gn(e){return l.available?Vn.get(e)??null:localStorage.getItem(e)}function Kn(e,t){l.available?(Vn.set(e,t),Hn.set(e,t),window.clearTimeout(Un),Un=window.setTimeout(qn,200)):localStorage.setItem(e,t)}function qn(){if(Un=0,Hn.size===0)return;let e=Object.fromEntries(Hn);Hn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Jn(){if(Hn.size===0)return;let e=Object.fromEntries(Hn);Hn.clear(),l.request(`ui.state.set`,{entries:e}).catch(()=>void 0)}function Yn(e,t){let n=Gn(e);if(n===null||n===``)return t;let r=Number(n);return Number.isFinite(r)?r:t}function Xn(e,t){Kn(e,String(t))}function Zn(e){try{return JSON.parse(Gn(e)??`null`)}catch{return null}}function Qn(e,t){Kn(e,JSON.stringify(t))}var q=c(),$n=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 10.5 12 3l9 7.5`}),(0,q.jsx)(`path`,{d:`M5.5 9.5V21h13V9.5`}),(0,q.jsx)(`path`,{d:`M9.5 21v-6h5v6`})]}),er=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`})}),tr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M14 3v4h4`})]}),nr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:5}),(0,q.jsx)(`rect`,{height:7,rx:2,width:18,x:3,y:12}),(0,q.jsx)(`path`,{d:`M7 8.5h.01M7 15.5h.01`})]}),rr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:11,cy:11,r:7}),(0,q.jsx)(`path`,{d:`m20 20-3.5-3.5`})]}),ir=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 19V5`}),(0,q.jsx)(`path`,{d:`m5 12 7-7 7 7`})]}),ar=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M20 11a8 8 0 1 0-2.3 5.7`}),(0,q.jsx)(`path`,{d:`M20 4v7h-7`})]}),or=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 5v14`}),(0,q.jsx)(`path`,{d:`M5 12h14`})]}),sr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 12H5`}),(0,q.jsx)(`path`,{d:`m12 19-7-7 7-7`})]}),cr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M5 12h14`}),(0,q.jsx)(`path`,{d:`m12 5 7 7-7 7`})]}),lr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:(0,q.jsx)(`path`,{d:`M9.2 4.6 19.8 12 9.2 19.4z`})}),ur=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:3.2}),(0,q.jsx)(`path`,{d:`M19.5 13.6a7.6 7.6 0 0 0 0-3.2l1.7-1.3-1.9-3.3-2 .8a7.6 7.6 0 0 0-2.8-1.6L14.2 3h-3.8l-.3 2a7.6 7.6 0 0 0-2.8 1.6l-2-.8-1.9 3.3 1.7 1.3a7.6 7.6 0 0 0 0 3.2l-1.7 1.3 1.9 3.3 2-.8a7.6 7.6 0 0 0 2.8 1.6l.3 2h3.8l.3-2a7.6 7.6 0 0 0 2.8-1.6l2 .8 1.9-3.3z`})]}),dr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 3h6l-1 6 3 3H7l3-3z`}),(0,q.jsx)(`path`,{d:`M12 12v8`})]}),fr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M8.5 6h11M8.5 12h11M8.5 18h11`}),(0,q.jsx)(`path`,{d:`M4 6h.01M4 12h.01M4 18h.01`})]}),pr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:3.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:3.5,y:13.5,width:7,height:7,rx:1.5}),(0,q.jsx)(`rect`,{x:13.5,y:13.5,width:7,height:7,rx:1.5})]}),mr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M12 7.6V12l3.1 2`})]}),hr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3 12h3.8l2.3-5.5 3.8 11 2.3-5.5H21`})}),gr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 7h16`}),(0,q.jsx)(`path`,{d:`M9 7V4.5h6V7`}),(0,q.jsx)(`path`,{d:`M6.5 7l1 13h9l1-13`}),(0,q.jsx)(`path`,{d:`M10 11v6M14 11v6`})]}),_r=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m5 12.5 4.5 4.5L19 6.5`})}),vr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m6 6 12 12M18 6 6 18`})}),yr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 128 128`,...e,children:[(0,q.jsxs)(`defs`,{children:[(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-bg`,x1:0,x2:1,y1:0,y2:1,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#4a7bf7`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]}),(0,q.jsxs)(`linearGradient`,{id:`yafm-icon-line`,x1:0,x2:1,y1:0,y2:0,children:[(0,q.jsx)(`stop`,{offset:0,stopColor:`#6366f1`}),(0,q.jsx)(`stop`,{offset:1,stopColor:`#8b5cf6`})]})]}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-bg)`,height:128,rx:30,width:128}),(0,q.jsx)(`path`,{d:`M34 46a9 9 0 0 1 9-9h18a9 9 0 0 1 9 9v6H34z`,fill:`#dbeafe`,opacity:.9}),(0,q.jsx)(`rect`,{fill:`#f8fafc`,height:44,rx:12,width:68,x:30,y:52}),(0,q.jsx)(`rect`,{fill:`url(#yafm-icon-line)`,height:7,rx:3.5,width:32,x:43,y:70})]}),br=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h7M9 15h7M9 18h4`})]}),xr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m8 8-4 4 4 4`}),(0,q.jsx)(`path`,{d:`m16 8 4 4-4 4`}),(0,q.jsx)(`path`,{d:`m13 5-2 14`})]}),Sr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Cr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),wr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Tr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 4v3M12 10v2M12 15v2`})]}),Er=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 17v-5h1.5a1.5 1.5 0 0 1 0 3H9`})]}),Dr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:3,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`m9 9 3 3-3 3M14 15h3`})]}),Or=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 20 12 4l6 16`}),(0,q.jsx)(`path`,{d:`M8.5 14h7`})]}),kr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`ellipse`,{cx:12,cy:6.5,rx:7,ry:2.8}),(0,q.jsx)(`path`,{d:`M5 6.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`}),(0,q.jsx)(`path`,{d:`M5 11.5v5c0 1.6 3.1 2.8 7 2.8s7-1.2 7-2.8v-5`})]}),Ar=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h8l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6`})]}),jr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M4 9h16M4 15h16M10 4v16`})]}),Mr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:11,rx:2,width:16,x:4,y:4}),(0,q.jsx)(`path`,{d:`M12 15v4M8.5 21l3.5-3 3.5 3`})]}),Nr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M6 3h9l4 4v14H6z`}),(0,q.jsx)(`path`,{d:`M15 3v4h4`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 15h6M9 18h3`})]}),Pr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:3.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:3.5,y:13.5}),(0,q.jsx)(`rect`,{height:7,rx:1.6,width:7,x:13.5,y:13.5})]}),Fr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 20h4L20 8l-4-4L4 16z`}),(0,q.jsx)(`path`,{d:`m14 6 4 4`})]}),Ir=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4,width:17,height:11.5,rx:2}),(0,q.jsx)(`path`,{d:`M8.5 20h7M12 15.5V20`})]}),Lr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M3 7.5A2.5 2.5 0 0 1 5.5 5H9l2 2.5h7.5A2.5 2.5 0 0 1 21 10v7.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5z`}),(0,q.jsx)(`path`,{d:`M8 12.5h8M8 15.5h5`})]}),Rr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 4v10`}),(0,q.jsx)(`path`,{d:`m8 10.5 4 4 4-4`}),(0,q.jsx)(`path`,{d:`M4.5 19.5h15`})]}),zr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:16,rx:2.5,width:18,x:3,y:4}),(0,q.jsx)(`circle`,{cx:8.5,cy:9.5,r:1.4}),(0,q.jsx)(`path`,{d:`m4 17 5-5 4 4 3-3 4 4`})]}),Br=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 17V6l10-2v10`}),(0,q.jsx)(`circle`,{cx:6.5,cy:17.5,r:2.5}),(0,q.jsx)(`circle`,{cx:16.5,cy:15.5,r:2.5})]}),Vr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:14,rx:2.5,width:14,x:3,y:5}),(0,q.jsx)(`path`,{d:`m17 10 4-2.5v9L17 14z`})]}),Hr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z`})}),Ur=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 5.5c2.5-1.1 5.2-.9 8 1v14c-2.8-1.9-5.5-2.1-8-1z`}),(0,q.jsx)(`path`,{d:`M20 5.5c-2.5-1.1-5.2-.9-8 1v14c2.8-1.9 5.5-2.1 8-1z`})]}),Wr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:7.5,width:17,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M9 7.5V5.8C9 4.8 9.8 4 10.8 4h2.4c1 0 1.8.8 1.8 1.8v1.7`}),(0,q.jsx)(`path`,{d:`M3.5 12.5c2.6 1.2 5.4 1.8 8.5 1.8s5.9-.6 8.5-1.8`})]}),Gr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z`})}),Kr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M7.5 8h9A4.5 4.5 0 0 1 21 12.5v.6a3.4 3.4 0 0 1-5.9 2.3L13.6 14h-3.2l-1.5 1.4A3.4 3.4 0 0 1 3 13.1v-.6A4.5 4.5 0 0 1 7.5 8z`}),(0,q.jsx)(`path`,{d:`M7.5 10.8v2.4M6.3 12h2.4`}),(0,q.jsx)(`circle`,{cx:16,cy:11.4,r:.7,fill:`currentColor`,stroke:`none`}),(0,q.jsx)(`circle`,{cx:17.6,cy:13,r:.7,fill:`currentColor`,stroke:`none`})]}),qr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 8.5A1.5 1.5 0 0 1 5.5 7h2.1l1.2-2h6.4l1.2 2h2.1A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5z`}),(0,q.jsx)(`circle`,{cx:12,cy:12.8,r:3.2})]}),Jr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:4.5,width:17,height:15,rx:2}),(0,q.jsx)(`path`,{d:`m7.2 9.8 2.6 2.4-2.6 2.4M12.8 15h4`})]}),Yr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:4,y:4,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`rect`,{x:4,y:13.6,width:16,height:6.4,rx:1.4}),(0,q.jsx)(`path`,{d:`M7.6 7.2h.01M7.6 16.8h.01`})]}),Xr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`m12 3 8 4.3v9.4L12 21l-8-4.3V7.3z`}),(0,q.jsx)(`path`,{d:`m4 7.3 8 4.4 8-4.4M12 11.7V21`})]}),Zr=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:12,cy:12,r:8.5}),(0,q.jsx)(`path`,{d:`M3.5 12h17`}),(0,q.jsx)(`path`,{d:`M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z`})]}),Qr=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M12 20.3S4 15.6 4 10.6a4.3 4.3 0 0 1 8-2.2 4.3 4.3 0 0 1 8 2.2c0 5-8 9.7-8 9.7z`})}),$r=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z`}),(0,q.jsx)(`path`,{d:`M8.5 10.5h7`})]}),ei=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,...e,children:[(0,q.jsx)(`rect`,{x:2.5,y:4.5,width:19,height:15,rx:2.5,fill:`none`,stroke:`currentColor`,strokeWidth:1.6}),(0,q.jsx)(`text`,{x:12,y:15.6,textAnchor:`middle`,fontFamily:`Segoe UI, Arial, sans-serif`,fontSize:8.5,fontWeight:700,fill:`currentColor`,stroke:`none`,children:`Aa
    `})]}),ti=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:8,y:8,width:12,height:12,rx:2}),(0,q.jsx)(`path`,{d:`M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2`})]}),ni=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`circle`,{cx:6,cy:6,r:2.5}),(0,q.jsx)(`circle`,{cx:6,cy:18,r:2.5}),(0,q.jsx)(`path`,{d:`M8 7.5 20 17M8 16.5 20 7`})]}),ri=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M9 4h6l1 2h3v14H5V6h3z`}),(0,q.jsx)(`path`,{d:`M9 12h6M9 16h6`})]}),ii=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 16V4`}),(0,q.jsx)(`path`,{d:`m7 9 5-5 5 5`}),(0,q.jsx)(`path`,{d:`M5 14v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5`})]}),ai=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M8 5.5v13l10-6.5z`})}),oi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M12 4v16`})]}),si=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3,y:4,width:18,height:16,rx:2}),(0,q.jsx)(`path`,{d:`M15 4v16`})]}),ci=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`currentColor`,...e,children:[(0,q.jsx)(`circle`,{cx:5,cy:12,r:1.6}),(0,q.jsx)(`circle`,{cx:12,cy:12,r:1.6}),(0,q.jsx)(`circle`,{cx:19,cy:12,r:1.6})]}),li=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{height:10,rx:2,width:14,x:5,y:10}),(0,q.jsx)(`path`,{d:`M8 10V7a4 4 0 0 1 8 0v3`}),(0,q.jsx)(`path`,{d:`M12 14v2`})]}),ui=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93`}),(0,q.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.07 0L4.81 13.12a5 5 0 0 0 7.07 7.07L13 19.07`})]}),di=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z`}),(0,q.jsx)(`circle`,{cx:12,cy:12,r:3})]}),fi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M10.6 5.2A10.9 10.9 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 3.9`}),(0,q.jsx)(`path`,{d:`M6.6 6.6A17 17 0 0 0 2 12s3.5 7 10 7c1.9 0 3.6-.6 5.1-1.5`}),(0,q.jsx)(`path`,{d:`M9.9 9.9a3 3 0 0 0 4.2 4.2`}),(0,q.jsx)(`path`,{d:`m3 3 18 18`})]}),pi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.83-.44-1.12-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h1.99c3.05 0 5.56-2.5 5.56-5.55C21.97 6.01 17.46 2 12 2z`}),(0,q.jsx)(`path`,{d:`M13.5 6.5h.01M17.5 10.5h.01M8.5 7.5h.01M6.5 12.5h.01`})]}),mi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M20.5 13.3 11.2 4H4v7.2l9.3 9.3a1.4 1.4 0 0 0 2 0l5.2-5.2a1.4 1.4 0 0 0 0-2z`}),(0,q.jsx)(`path`,{d:`M8.2 8.2h.01`})]}),hi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:2.5,y:5.5,width:19,height:13,rx:2.2}),(0,q.jsx)(`path`,{d:`M6.5 9.5h.01M10 9.5h.01M13.5 9.5h.01M17 9.5h.01M6.5 13h.01M17 13h.01M9 13.5h6`})]}),gi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`rect`,{x:3.5,y:3.5,width:17,height:17,rx:4.5}),(0,q.jsx)(`path`,{d:`m12 7.2 1.5 3.3 3.3 1.5-3.3 1.5-1.5 3.3-1.5-3.3L7.2 12l3.3-1.5z`})]}),_i=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 7h16`}),(0,q.jsx)(`path`,{d:`M9.5 7V5.2c0-.7.5-1.2 1.2-1.2h2.6c.7 0 1.2.5 1.2 1.2V7`}),(0,q.jsx)(`path`,{d:`m6.6 7 .9 12a1.6 1.6 0 0 0 1.6 1.5h5.8a1.6 1.6 0 0 0 1.6-1.5l.9-12`}),(0,q.jsx)(`path`,{d:`m10.2 11.2 3.6 3.6M13.8 11.2l-3.6 3.6`})]}),vi=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M8.5 20.5H20.5`}),(0,q.jsx)(`path`,{d:`m14.2 4.1 5.7 5.7a1.5 1.5 0 0 1 0 2.1l-6.3 6.3a1.5 1.5 0 0 1-2.1 0l-5.7-5.7a1.5 1.5 0 0 1 0-2.1l6.3-6.3a1.5 1.5 0 0 1 2.1 0z`}),(0,q.jsx)(`path`,{d:`m9.9 7.8 6.6 6.6`})]});function J(e,t){return({size:n=t,...r})=>(0,q.jsx)(e,{"aria-hidden":!0,height:n,width:n,...r})}var yi=J($n,18),bi=J(er,18),xi=J(tr,18),Si=J(nr,18),Ci=J(rr,16),wi=J(ir,16),Ti=J(ar,16),Ei=J(or,16),Di=J(sr,16),Oi=J(cr,16),ki=J(lr,12),Ai=J(ur,18),ji=J(dr,14),Mi=J(fr,14),Ni=J(pr,14),Pi=J(mr,18),Fi=J(hr,18),Ii=J(gr,18),Li=J(_r,14),Ri=J(vr,14),zi=J(di,14),Bi=J(fi,14),Vi=J(yr,18),Hi=J(br,18),Ui=J(xr,18),Wi=J(Sr,18),Gi=J(Cr,18),Ki=J(wr,18),qi=J(Tr,18),Ji=J(Er,18),Yi=J(Dr,18),Xi=J(Or,18),Zi=J(kr,18),Qi=J(Ar,18),$i=J(jr,18),ea=J(Mr,18),ta=J(Nr,18),na=J(Pr,18),ra=J(Fr,16),ia=J(Ir,18),aa=J(Lr,18),oa=J(Rr,18),sa=J(zr,18),ca=J(Br,18),la=J(Vr,18),ua=J(Hr,18),da=J(Ur,18),fa=J(Wr,18),pa=J(Gr,18),ma=J(Kr,18),ha=J(qr,18),ga=J(Jr,18),_a=J(Yr,18),va=J(Xr,18),ya=J(Zr,18),ba=J(Qr,18),xa=J($r,14),Sa=J(ei,14),Ca=J(ti,16),wa=J(ni,16),Ta=J(ri,16),Ea=J(ii,16),Da=J(ai,16),Oa=J(oi,16),ka=J(si,16),Aa=J(ci,16),ja=J(li,14),Ma=J(pi,18),Na=J(mi,18),Pa=J(hi,18),Fa=J(gi,18),Ia=J(_i,18),La=J(vi,18),Ra=J(ui,14);async function za(e,t,n){return l.available?(await l.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function Ba(e){return za(`folder`,[],e??``)}function Va(e){return za(`file`,e??[],``)}var Ha=null,Ua=null;function Wa(e){Ha=e}function Ga(e){return Ha?Ha(e):Promise.resolve()}function Ka(e){Ua=e}function qa(e,t=!1){return Ua?Ua(e,t):Promise.resolve(null)}var Ja=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],Ya=null,Xa=0,Za=new Set;function Qa(){Xa+=1;for(let e of Za)e()}function $a(e){return Za.add(e),()=>Za.delete(e)}function eo(){return Xa}function to(e){Ya=e,Qa()}function no(){return(0,R.useSyncExternalStore)($a,eo,eo),Ya}var ro=_(),io=n`
    border: 1px solid var(--border-color);
    border-radius: var(--radius-lg);
    background: rgba(var(--bg-rgb), var(--panel-alpha));
    backdrop-filter: var(--panel-blur);
    -webkit-backdrop-filter: var(--panel-blur);
    box-shadow: var(--shadow-panel);
`,ao=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,oo=m`
    from {
        opacity: 0;
        transform: translateY(-4px) scale(0.97);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,so=m`
    from {
        opacity: 0;
        transform: translateY(7px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,co=m`
    from {
        opacity: 0;
        transform: translateX(14px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`,lo=m`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`,uo=m`
    from {
        opacity: 0;
        transform: translateY(-6px) scale(0.985);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`,fo=m`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`,po=m`
    from {
        opacity: 0;
        transform: scaleY(0);
    }
    to {
        opacity: 1;
        transform: scaleY(1);
    }
`,mo=n`animation: ${ao} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,ho=n`animation: ${oo} 130ms cubic-bezier(0.22, 1, 0.36, 1);`,go=n`animation: ${so} 180ms cubic-bezier(0.22, 1, 0.36, 1);`;n`animation: ${co} 190ms cubic-bezier(0.22, 1, 0.36, 1);`;var _o=n`animation: ${lo} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,vo=n`animation: ${uo} 150ms cubic-bezier(0.22, 1, 0.36, 1);`,yo=n`animation: ${fo} 140ms ease-out;`,bo=n`animation: ${po} 260ms cubic-bezier(0.22, 1, 0.36, 1);`;function xo({x:e,y:t,items:n,quick:r=[],onClose:i}){let[a,o]=(0,R.useState)([]),s=(0,R.useRef)(void 0);if((0,R.useEffect)(()=>{let e=e=>e instanceof Element&&e.closest(`[data-yafm-menu]`)!==null,t=t=>{e(t.target)||i()},n=e=>{e.key===`Escape`&&i()},r=()=>i(),a=t=>{e(t.target)||i()};return window.addEventListener(`pointerdown`,t),window.addEventListener(`keydown`,n),window.addEventListener(`blur`,r),window.addEventListener(`resize`,r),window.addEventListener(`scroll`,a,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`keydown`,n),window.removeEventListener(`blur`,r),window.removeEventListener(`resize`,r),window.removeEventListener(`scroll`,a,!0)}},[i]),(0,R.useEffect)(()=>()=>window.clearTimeout(s.current),[]),n.length===0&&r.length===0)return null;let c=Math.max(8,Math.min(e,window.innerWidth-280)),l=Math.max(8,Math.min(t,window.innerHeight-(n.length*32+76))),u=()=>window.clearTimeout(s.current),d=e=>{u(),s.current=window.setTimeout(()=>o(t=>t.slice(0,e)),180)},f=(e,t,n)=>{u();let r=e.currentTarget.getBoundingClientRect(),i=r.right+248>window.innerWidth?Math.max(8,r.left-248):r.right+4,a=Math.min(320,t.length*30+16),s=Math.max(8,Math.min(r.top,window.innerHeight-a-8));o(e=>[...e.slice(0,n),{items:t,left:i,top:s}])},p=e=>{i(),e.onSelect()},m=(e,t)=>{let n=[],r;return e.forEach((e,i)=>{e.group&&e.group!==r&&(n.length>0&&n.push((0,q.jsx)(jo,{},`group-rule-${i}`)),n.push((0,q.jsx)(Ao,{children:e.group},`group-${i}`)),r=e.group),e.separatorBefore&&n.length>0&&n.push((0,q.jsx)(jo,{},`rule-${i}`));let a=(e.children?.length??0)>0;n.push((0,q.jsxs)(Do,{$danger:e.danger,$depth:e.depth,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:n=>{a?f(n,e.children,t):p(e)},onPointerEnter:a?n=>f(n,e.children,t):void 0,onPointerLeave:a?()=>d(t):void 0,role:`menuitem`,title:e.label,type:`button`,children:[(0,q.jsx)(Oo,{children:e.loading?(0,q.jsx)(Mo,{}):e.icon}),(0,q.jsx)(ko,{children:e.label}),a?(0,q.jsx)(ki,{size:12}):e.checked&&(0,q.jsx)(Li,{size:12})]},`${e.label}-${i}`))}),n};return(0,ro.createPortal)((0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(So,{"data-yafm-menu":!0,onContextMenu:e=>e.preventDefault(),onPointerLeave:()=>d(0),role:`menu`,style:{left:c,top:l,maxHeight:Math.max(160,window.innerHeight-l-8)},children:[r.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Co,{children:r.map((e,t)=>(0,q.jsxs)(wo,{$danger:e.danger,"data-shortcut":e.shortcut,disabled:e.disabled,onClick:()=>p(e),title:e.label,type:`button`,children:[(0,q.jsx)(To,{children:e.icon}),(0,q.jsx)(Eo,{children:e.label})]},`${e.label}-${t}`))}),(0,q.jsx)(jo,{})]}),m(n,0)]}),a.map((e,t)=>(0,q.jsx)(So,{"data-yafm-menu":!0,onPointerEnter:u,onPointerLeave:()=>d(t),role:`menu`,style:{left:e.left,minWidth:240,top:e.top,maxHeight:Math.max(160,window.innerHeight-e.top-8)},children:m(e.items,t+1)},`${t}-${e.left}-${e.top}`))]}),document.body)}var So=v.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    flex-direction: column;
    min-width: 280px;
    max-height: calc(100vh - 16px);
    overflow-y: auto;
    padding: 6px;
    ${io}
    ${ho}
    transform-origin: top left;
`,Co=v.div`
    display: flex;
    gap: 2px;
    padding: 3px;
`,wo=v.button`
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
`,To=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
`,Eo=v.span`
    max-width: 66px;
    overflow: hidden;
    font-size: 10px;
    line-height: 1.2;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Do=v.button`
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
`,Oo=v.span`
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    color: var(--text-muted);

    img {
        display: block;
    }
`,ko=v.span`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ao=v.div`
    padding: 7px 10px 3px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--text-muted);
`,jo=v.span`
    display: block;
    height: 1px;
    margin: 4px 8px;
    background: var(--border-color);
`,Mo=v.span`
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
`;function No({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:a,onOpen:s,onOpenFile:c,onRename:l,onDelete:u,onCopy:d,onPaste:f,onCreateFolder:p,onCreateFile:m,creationOnly:h=!1,onRefresh:g,onAddToTray:_,onAddFavorite:v,onRemoveFavorite:y,favoritePaths:b,onExtractArchive:S,allowCompression:C=!1,platform:w,onCompressTo:te,onArchiveCreated:E}){let D=o(),O=no(),k=T(t),[A,j]=(0,R.useState)({verbs:[],safe:!0,loading:!1}),[ne,M]=(0,R.useState)({recommended:[],other:[],loading:!1}),[ie,ae]=(0,R.useState)(null),oe=(0,R.useRef)(0),N=(0,R.useRef)(0),se=e?.paths.length===1,P=e?.background?t?[t]:[]:e?.paths??[],ce=e?.background?t||null:se&&n?.isDirectory?n.path:null;if((0,R.useEffect)(()=>{if(!e){j({verbs:[],safe:!0,loading:!1}),M({recommended:[],other:[],loading:!1});return}let t=++oe.current;j({verbs:[],safe:!0,loading:P.length>0&&!k}),P.length>0&&!k&&Bt(P).then(e=>{oe.current===t&&j({...e,loading:!1})},()=>{oe.current===t&&j({verbs:[],safe:!0,loading:!1})});let r=++N.current;!k&&se&&n?(M({recommended:[],other:[],loading:!0}),Ft(n.path).then(e=>{N.current===r&&M({...e,loading:!1})},()=>{N.current===r&&M({recommended:[],other:[],loading:!1})})):M({recommended:[],other:[],loading:!1})},[e,se,n?.path,n?.isDirectory,P.length,k]),(0,R.useEffect)(()=>{if(!e||k||!ce){ae(null);return}let t=!0;return Dt(ce).then(e=>{t&&ae(e)},()=>{t&&ae(null)}),()=>{t=!1}},[e,ce,k]),!e)return null;let F=[],I=[],le=new Set((b??[]).map(ee)),ue=e.background?t?[t]:[]:e.paths,de=ue.length>0&&ue.every(e=>le.has(ee(e))),fe=()=>n?pe(n.path,n.isDirectory):`Archive`,pe=(e,t)=>{let n=x(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},me=async(e,n=fe())=>{let r=await Ht(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?E?.(r.path,!0):Ga(r.error??D(`could_not_create_the_archive`))},he=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},ge=async()=>{if(!ce||ie===null)return;let e=await Ot(ce,!ie);e.ok?(ae(e.enabled),g?.()):Ga(e.error??D(`could_not_change_the_case_sensitivity`))},L=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await kt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await kt(e,t,`${a}\\${Fo(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?g?.():Ga(o.error??D(`could_not_create_the_link`))},_e=async e=>{if(!n)return;let r=await Ba(t);r&&await L(e,n.path,r,x(n.path),e.endsWith(`-copy`))},z=async e=>{let n=O?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=ee(a)===ee(t);await L(n,r.path,t,x(r.path),i&&!o)}},ve=async()=>{let t=(await St(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&to({paths:t})},ye=()=>{let e=O?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:D(`cancel_selected_link`),icon:(0,q.jsx)(Ri,{size:14}),onSelect:()=>to(null)},...t?[{label:D(`hard_link`),icon:(0,q.jsx)(xi,{size:14}),separatorBefore:!0,onSelect:()=>void z(`hard`)}]:[],{label:D(`symbolic_link`),icon:(0,q.jsx)(xi,{size:14}),separatorBefore:!t,onSelect:()=>void z(`symbolic-file`)},...n?[{label:D(`directory_junction`),icon:(0,q.jsx)(bi,{size:14}),onSelect:()=>void z(`junction`)},{label:D(`smart_copy`),icon:(0,q.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void z(`smart-copy`)},{label:D(`smart_mirror`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void z(`smart-mirror`)},{label:D(`multi_version_smart_copy`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void z(`multi-version-smart-copy`)},{label:D(`hardlink_copy`),icon:(0,q.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void z(`hard-copy`)},{label:D(`symbolic_link_copy`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void z(`symbolic-copy`)}]:[]]};if(e.background){if(p&&I.push({label:D(`new_folder`),icon:(0,q.jsx)(Ei,{size:16}),shortcut:Xt(r.newFolder),onSelect:p}),m||p){let e=[];p&&(e.push({label:D(`folder`),icon:(0,q.jsx)(bi,{size:14}),onSelect:()=>p(!1)}),k||e.push({label:D(`case_sensitive_folder`),icon:(0,q.jsx)(Sa,{size:14}),onSelect:()=>p(!0)})),m&&e.push(...Ja.map((e,t)=>({label:`${D(e.label)} (${e.extension})`,icon:(0,q.jsx)(xi,{size:14}),separatorBefore:t===0,onSelect:()=>m(e.extension)}))),F.push({label:D(`new`),icon:(0,q.jsx)(Ei,{size:14}),children:e,onSelect:()=>void 0})}if(k||F.push({label:D(`create_link`),icon:(0,q.jsx)(Ea,{size:14}),disabled:!O,children:ye(),onSelect:()=>void 0}),h)return(0,q.jsx)(xo,{items:F,onClose:a,quick:I,x:e.x,y:e.y});!k&&s&&F.push({label:D(`open_in_new_tab`),icon:(0,q.jsx)(Ei,{size:14}),onSelect:()=>s(t,!0)}),F.push({label:D(`copy_as_path`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void he([t])}),_&&F.push({label:D(`add_to_file_tray`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>_([t])}),!k&&(de?y:v)&&F.push({label:D(de?`remove_from_favorites`:`add_to_favorites`),icon:de?(0,q.jsx)(xa,{size:14}):(0,q.jsx)(ba,{size:14}),onSelect:()=>de?y?.([t]):v?.([t])}),!k&&ie!==null&&F.push({label:D(`case_sensitive_names`),icon:(0,q.jsx)(Sa,{size:14}),checked:ie,onSelect:()=>void ge()}),!k&&C&&(F.push({label:D(`open_in_terminal`),icon:(0,q.jsx)(ga,{size:14}),onSelect:()=>void Pt(t)}),F.push({label:D(`show_in_explorer`),icon:(0,q.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>void zt(t)})),f&&I.push({label:D(`paste`),icon:(0,q.jsx)(Ta,{size:16}),disabled:!i,shortcut:Xt(r.paste),onSelect:()=>f(t)}),k||I.push({label:D(`properties`),icon:(0,q.jsx)(Ai,{size:16}),shortcut:Xt(r.properties),onSelect:()=>void jt([t])})}else{if(s&&F.push({label:D(`open`),icon:(0,q.jsx)(Oi,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&c?.(n.path)}}),n?.isDirectory&&(s&&F.push({label:D(`open_in_new_tab`),icon:(0,q.jsx)(Ei,{size:14}),onSelect:()=>s(n.path,!0)}),f&&F.push({label:D(`paste_into_folder`),icon:(0,q.jsx)(Ta,{size:14}),disabled:!i,onSelect:()=>f(n.path)}),k||F.push({label:D(`open_in_terminal`),icon:(0,q.jsx)(ga,{size:14}),onSelect:()=>void Pt(n.path)})),!k&&se&&n&&!n.isDirectory&&re(n.path)&&S&&F.push({label:D(`extract_archive`),icon:(0,q.jsx)(qi,{size:14}),separatorBefore:!0,children:[{label:D(`extract_here`),icon:(0,q.jsx)(qi,{size:14}),onSelect:()=>S(n.path,`here`)},{label:D(`extract_to_a_folder_named_after_the_archive`),icon:(0,q.jsx)(qi,{size:14}),onSelect:()=>S(n.path,`named`)},{label:D(`auto_extract_to_the_current_folder`),icon:(0,q.jsx)(qi,{size:14}),onSelect:()=>S(n.path,`auto`)},{label:D(`extract_to`),icon:(0,q.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>S(n.path,`choose`)}],onSelect:()=>void 0}),!k&&se&&n){let e=[];if(ne.loading)e.push({label:D(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ne.recommended)e.push({label:t.name,group:D(`suggested_apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(Yi,{size:14}),onSelect:()=>void It(n.path,t.path).then(e=>{e||Nt(n.path)})});for(let t of ne.other)e.push({label:t.name,group:D(`other_apps`),icon:t.icon?(0,q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,q.jsx)(Yi,{size:14}),onSelect:()=>void It(n.path,t.path).then(e=>{e||Nt(n.path)})})}e.push({label:D(`choose_another_app`),icon:(0,q.jsx)(Yi,{size:14}),separatorBefore:!0,onSelect:()=>void Nt(n.path)}),F.push({label:D(`open_with_2`),icon:(0,q.jsx)(Yi,{size:14}),children:e,onSelect:()=>void Nt(n.path)})}if(!k&&w===`windows`&&e.paths.length>0&&F.push({label:D(`share`),icon:(0,q.jsx)(Ea,{size:14}),separatorBefore:!0,onSelect:()=>void Mt(e.paths).then(e=>{e.ok||Ga(e.error??D(`could_not_open_the_share_sheet`))})}),k||F.push({label:D(`compress`),icon:(0,q.jsx)(qi,{size:14}),separatorBefore:!0,children:[{label:D(`compress_to_zip`),icon:(0,q.jsx)(qi,{size:14}),onSelect:()=>void me(e.paths)},{label:D(`compress_to`),icon:(0,q.jsx)(qi,{size:14}),onSelect:()=>te?.(e.paths,fe())}],onSelect:()=>void 0}),!k&&(e?.paths.length??0)>0){let e=[{label:D(`select_link_source`),icon:(0,q.jsx)(Ea,{size:14}),onSelect:()=>void ve()},...O?[{label:D(`cancel_selected_link`),icon:(0,q.jsx)(Ri,{size:14}),onSelect:()=>to(null)}]:[],...se&&n?n.isDirectory?[{label:D(`symbolic_link`),icon:(0,q.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-folder`)},{label:D(`directory_junction`),icon:(0,q.jsx)(bi,{size:14}),onSelect:()=>void _e(`junction`)},{label:D(`smart_copy`),icon:(0,q.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`smart-copy`)},{label:D(`smart_mirror`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void _e(`smart-mirror`)},{label:D(`multi_version_smart_copy`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void _e(`multi-version-smart-copy`)},{label:D(`hardlink_copy`),icon:(0,q.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`hard-copy`)},{label:D(`symbolic_link_copy`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void _e(`symbolic-copy`)}]:[{label:D(`symbolic_link`),icon:(0,q.jsx)(xi,{size:14}),separatorBefore:!0,onSelect:()=>void _e(`symbolic-file`)},{label:D(`hard_link`),icon:(0,q.jsx)(xi,{size:14}),onSelect:()=>void _e(`hard`)}]:[]];F.push({label:D(`create_link`),icon:(0,q.jsx)(Ea,{size:14}),children:e,onSelect:()=>void 0})}!k&&n?.isDirectory&&ie!==null&&F.push({label:D(`case_sensitive_names`),icon:(0,q.jsx)(Sa,{size:14}),checked:ie,onSelect:()=>void ge()}),F.push({label:D(`copy_as_path`),icon:(0,q.jsx)(Ca,{size:14}),onSelect:()=>void he(e.paths)}),_&&F.push({label:D(`add_to_file_tray`),icon:(0,q.jsx)(va,{size:14}),onSelect:()=>_(e.paths)}),!k&&(de?y:v)&&F.push({label:D(de?`remove_from_favorites`:`add_to_favorites`),icon:de?(0,q.jsx)(xa,{size:14}):(0,q.jsx)(ba,{size:14}),onSelect:()=>de?y?.(ue):v?.(ue)}),k||F.push({label:D(`show_in_explorer`),icon:(0,q.jsx)(bi,{size:14}),separatorBefore:!0,onSelect:()=>void zt(ue[0])}),d&&I.push({label:D(`cut`),icon:(0,q.jsx)(wa,{size:16}),shortcut:Xt(r.cut),onSelect:()=>d(e.paths,!0)},{label:D(`copy`),icon:(0,q.jsx)(Ca,{size:16}),shortcut:Xt(r.copy),onSelect:()=>d(e.paths,!1)}),se&&n&&l&&I.push({label:D(`rename`),icon:(0,q.jsx)(ra,{size:16}),shortcut:Xt(r.rename),onSelect:()=>l(n.path)}),u&&I.push({label:D(`delete`),icon:(0,q.jsx)(Ii,{size:16}),danger:!0,shortcut:Xt(r.delete),onSelect:()=>u(e.paths)}),k||I.push({label:D(`properties`),icon:(0,q.jsx)(Ai,{size:16}),shortcut:Xt(r.properties),onSelect:()=>void jt(e.paths)})}if(A.loading)F.push({label:D(`more_actions`),icon:(0,q.jsx)(Yi,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(A.verbs.length>0){let e={items:[],children:new Map};for(let t of A.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,q.jsx)(Po,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Vt(P,A.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,q.jsx)(Po,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];F.push({label:D(A.safe?`more_actions`:`more_actions_extensions`),icon:(0,q.jsx)(Yi,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,q.jsx)(xo,{items:F,onClose:a,quick:I,x:e.x,y:e.y})}function Po({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,q.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,q.jsx)(Oi,{size:14});case`document`:return(0,q.jsx)(ta,{size:14});case`cut`:return(0,q.jsx)(wa,{size:14});case`copy`:return(0,q.jsx)(Ca,{size:14});case`paste`:return(0,q.jsx)(Ta,{size:14});case`trash`:return(0,q.jsx)(Ii,{size:14});case`pencil`:return(0,q.jsx)(ra,{size:14});case`gear`:return(0,q.jsx)(Ai,{size:14});case`star`:return(0,q.jsx)(ua,{size:14});case`pin`:return(0,q.jsx)(ji,{size:14});case`executable`:return(0,q.jsx)(Yi,{size:14});case`share`:return(0,q.jsx)(Ea,{size:14});case`arrow`:return(0,q.jsx)(Oi,{size:14});default:return(0,q.jsx)(Vi,{size:14})}}function Fo(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}function Io({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:s,zIndex:c=3200}){let l=o(),[u,d]=(0,R.useState)(null),f=(0,R.useRef)(null),p=t.find(t=>t.value===e)??t[0];return(0,R.useEffect)(()=>{if(!u)return;let e=()=>d(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[u]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Lo,{$icon:a!==void 0,"aria-expanded":u!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(u){d(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;d({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:f,style:i&&!a?{width:i}:void 0,title:s??p?.title,type:`button`,children:[a===void 0?(0,q.jsx)(Ro,{children:p?.label??``}):(0,q.jsx)(zo,{children:a}),a===void 0&&(0,q.jsx)(Bo,{children:(0,q.jsx)(ki,{size:11})})]}),u&&(0,ro.createPortal)((0,q.jsx)(Vo,{"aria-label":l(`options`),"data-select-menu":`true`,$menuZIndex:c,role:`listbox`,style:{bottom:u.bottom,left:u.left,minWidth:u.width,top:u.top},children:t.map(t=>(0,q.jsxs)(Ho,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),d(null)},role:`option`,title:t.title,type:`button`,children:[(0,q.jsx)(Uo,{children:t.label}),t.value===e&&(0,q.jsx)(Li,{size:11})]},t.value))}),document.body)]})}var Lo=v.button`
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
`,Ro=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zo=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,Bo=v.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Vo=v.div`
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
    ${ho}
`,Ho=v.button`
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
`,Uo=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wo=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],Go=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],Ko=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],qo=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Jo=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function Yo({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=o(),a=(0,R.useRef)(null),[s,c]=(0,R.useState)(e),[l,u]=(0,R.useState)(t),[d,f]=(0,R.useState)(`zip`),[p,m]=(0,R.useState)(`5`),[h,g]=(0,R.useState)(`default`),[_,v]=(0,R.useState)(`none`),[y,b]=(0,R.useState)(``),[x,S]=(0,R.useState)(`0`),[C,w]=(0,R.useState)(!1);(0,R.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=Wo.find(e=>e.value===d)??Wo[0],ee=d===`zip`||d===`zipx`,te=_!==`none`,E=ee||d===`7z`,D=d===`zip`||d===`7z`,O=async()=>{if(C||!l.trim()||!s||te&&y.length===0)return;w(!0);let e=await r({directory:s,name:l.trim(),format:d,level:T.level?Number(p):0,method:ee?h:null,encryption:E?_:`none`,password:te?y:void 0,splitSize:D?Number(x):0});w(!1),e&&n()};return(0,ro.createPortal)((0,q.jsx)(Xo,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,q.jsxs)(Zo,{"aria-modal":`true`,role:`dialog`,children:[(0,q.jsx)(Qo,{children:i(`compress_to`)}),(0,q.jsxs)($o,{children:[(0,q.jsx)(es,{children:i(`archive_name`)}),(0,q.jsx)(ts,{onChange:e=>u(e.target.value),ref:a,value:l,onKeyDown:e=>{e.key===`Enter`&&O()}}),(0,q.jsx)(ns,{children:T.extension})]}),(0,q.jsxs)($o,{children:[(0,q.jsx)(es,{children:i(`format`)}),(0,q.jsx)(Io,{onChange:e=>f(e),options:Wo.map(e=>({value:e.value,label:i(e.label)})),value:d,width:236,zIndex:3700})]}),(0,q.jsxs)($o,{children:[(0,q.jsx)(es,{children:i(`method`)}),(0,q.jsx)(Io,{disabled:!ee,onChange:g,options:Go.map(e=>({...e,label:i(e.label)})),value:ee?h:`default`,width:236,zIndex:3700})]}),(0,q.jsxs)($o,{children:[(0,q.jsx)(es,{children:i(`encryption`)}),(0,q.jsx)(Io,{disabled:!E,onChange:e=>{v(e),e===`none`&&b(``)},options:Ko.map(e=>({...e,label:i(e.label)})),value:E?_:`none`,width:236,zIndex:3700})]}),te&&(0,q.jsxs)($o,{children:[(0,q.jsx)(es,{children:i(`password`)}),(0,q.jsx)(ts,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,q.jsxs)($o,{children:[(0,q.jsx)(es,{children:i(`split_volumes`)}),(0,q.jsx)(Io,{disabled:!D,onChange:S,options:qo.map(e=>({...e,label:i(e.label)})),value:D?x:`0`,width:236,zIndex:3700})]}),(0,q.jsxs)($o,{children:[(0,q.jsx)(es,{children:i(`compression_level`)}),(0,q.jsx)(Io,{disabled:!T.level,onChange:m,options:Jo.map(e=>({...e,label:i(e.label)})),value:T.level?p:d===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,q.jsxs)($o,{$stack:!0,children:[(0,q.jsx)(es,{children:i(`destination`)}),(0,q.jsxs)(rs,{children:[(0,q.jsx)(is,{title:s,children:s}),(0,q.jsx)(os,{disabled:C,onClick:()=>void Ba(s).then(e=>{e&&c(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,q.jsxs)(as,{children:[(0,q.jsx)(os,{disabled:C,onClick:n,type:`button`,children:i(`cancel`)}),(0,q.jsx)(ss,{disabled:C||!l.trim()||te&&y.length===0,onClick:()=>void O(),type:`button`,children:i(C?`compressing`:`compress`)})]})]})}),document.body)}var Xo=v.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${yo}
`,Zo=v.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${mo}
`,Qo=v.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,$o=v.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,es=v.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,ts=v.input`
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
`,ns=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,rs=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,is=v.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,as=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,os=v.button`
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
`,ss=v(os)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function cs({open:e,title:t,message:n,confirmLabel:r,danger:i=!1,onConfirm:a,onCancel:s}){let c=o(),l=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!e)return;l.current?.focus();let t=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),s()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,t,!0),()=>window.removeEventListener(`keydown`,t,!0)},[e,s]),e?(0,ro.createPortal)((0,q.jsx)(ls,{onPointerDown:e=>{e.target===e.currentTarget&&s()},children:(0,q.jsxs)(us,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(ds,{children:t}),(0,q.jsx)(fs,{children:n}),(0,q.jsxs)(ps,{children:[(0,q.jsx)(ms,{onClick:s,type:`button`,children:c(`cancel`)}),(0,q.jsx)(ms,{$danger:i,onClick:a,ref:l,type:`button`,children:r})]})]})}),document.body):null}var ls=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${yo}
`,us=v.div`
    width: min(420px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${mo}
`,ds=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,fs=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,ps=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,ms=v.button`
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
`,hs=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),gs=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),_s=new Set([`png`,`jpg`,`jpeg`,`gif`,`webp`,`bmp`,`avif`,`tif`,`tiff`,`ico`,`svg`]),vs=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function ys({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:s,emptyNote:c}){let l=o(),[u,d]=(0,R.useState)(!1),[f,p]=(0,R.useState)(!1),[m,h]=(0,R.useState)(!1),[g,_]=(0,R.useState)(0),[v,y]=(0,R.useState)(0),[b,x]=(0,R.useState)(null),[S,C]=(0,R.useState)(!1),[w,T]=(0,R.useState)(!1),ee=(0,R.useRef)(null),te=(0,R.useRef)(null),E=(0,R.useRef)(null),D=(0,R.useRef)(null),[O,k]=(0,R.useState)(()=>{let e=Yn(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),A=e?.path??null,j=gn(A),ne=e?bs(e.name):``,re=!!e&&!e.isDirectory&&hs.has(ne),M=!!e&&!e.isDirectory&&gs.has(ne),ie=!!e&&!e.isDirectory&&_s.has(ne),ae=!!e&&!e.isDirectory&&vs.has(ne),oe=!!e&&!e.isDirectory&&ne===`pdf`,N=W(re?j:null,512,e?.modified??0),se=K(ie?j:null,e?.modified??0,ne),P=K(re||M?j:null,e?.modified??0,ne),ce=bn(oe?j:null,e?.modified??0),F=hn(!re&&!M&&!ie&&!ae&&!oe?j:null,e?.isDirectory??!1);if((0,R.useEffect)(()=>{d(!1),p(!1),h(!1),_(0),y(0),T(!1)},[A]),(0,R.useEffect)(()=>{if(!j||!ae){x(null),C(!1);return}let e=!0;return C(!0),x(null),Oe(j).then(t=>{e&&(x(t),C(!1))},()=>{e&&(x({text:null,truncated:!1,error:l(`could_not_read_this_file`)}),C(!1))}),()=>{e=!1}},[j,ae]),!e&&!c)return null;let I=e=>{E.current={x:e.clientX,width:te.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},le=e=>{let t=E.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},ue=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},de=e=>{D.current={y:e.clientY,height:O},e.currentTarget.setPointerCapture(e.pointerId)},fe=e=>{let t=D.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);k(n),Xn(`yafm.preview.media.height`,n)},pe=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,q.jsxs)(Ss,{$open:r,children:[r&&(0,q.jsx)(Cs,{onPointerDown:I,onPointerMove:le,onPointerUp:ue,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsx)(ws,{ref:te,style:{width:r?t:0},children:(0,q.jsxs)(Ts,{children:[(0,q.jsx)(bi,{size:56}),(0,q.jsx)(`span`,{children:c})]})})]});let me=()=>{let e=ee.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,q.jsxs)(Ss,{$open:r,children:[r&&(0,q.jsx)(Cs,{onPointerDown:I,onPointerMove:le,onPointerUp:ue,onDoubleClick:()=>n(320),title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(ws,{ref:te,style:{width:r?t:0},children:[(0,q.jsx)(Es,{style:{height:O},children:re&&P&&!u?(0,q.jsxs)(Os,{onPointerEnter:()=>h(!0),onPointerLeave:()=>h(!1),children:[(0,q.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:me,onDurationChange:e=>_(e.currentTarget.duration||0),onError:()=>d(!0),onLoadedMetadata:e=>{_(e.currentTarget.duration||0),y(e.currentTarget.currentTime)},onPause:()=>p(!1),onPlay:()=>p(!0),onTimeUpdate:e=>y(e.currentTarget.currentTime),playsInline:!0,poster:N??void 0,preload:`metadata`,ref:ee,src:P}),(0,q.jsx)(ks,{$visible:!f,onClick:me,title:l(`play`),type:`button`,children:(0,q.jsx)(Da,{size:28})}),(0,q.jsxs)(As,{$visible:m,onClick:e=>e.stopPropagation(),children:[(0,q.jsxs)(js,{children:[(0,q.jsx)(`span`,{children:xs(v)}),(0,q.jsx)(`span`,{children:xs(g)})]}),(0,q.jsx)(Ms,{"aria-label":l(`seek`),max:g||0,min:0,onChange:e=>{let t=ee.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,y(n)},step:.1,type:`range`,value:Math.min(v,g||0)})]})]}):M&&P?(0,q.jsx)(`audio`,{controls:!0,src:P}):ie&&se?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:se}):oe&&ce&&!w?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>T(!0),src:ce}):oe?(0,q.jsx)(xi,{size:64}):ae?(0,q.jsx)(Ns,{children:S||!b?(0,q.jsx)(Fs,{children:l(`loading`)}):b.error?(0,q.jsx)(Fs,{children:b.error}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Ps,{children:b.text}),b.truncated&&(0,q.jsx)(Fs,{children:l(`showing_the_first_256_kb`)})]})}):re&&N?(0,q.jsx)(`img`,{alt:``,src:N}):F?(0,q.jsx)(`img`,{alt:``,src:F}):e.isDirectory?(0,q.jsx)(bi,{size:64}):(0,q.jsx)(xi,{size:64})}),(0,q.jsx)(Ds,{onDoubleClick:()=>{k(210),Xn(`yafm.preview.media.height`,210)},onPointerDown:de,onPointerMove:fe,onPointerUp:pe,title:l(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(Is,{children:[(0,q.jsx)(Ls,{title:e.path,children:e.name}),s&&(0,q.jsx)(Rs,{children:s}),(0,q.jsx)(zs,{children:e.fields.map(e=>(0,q.jsxs)(Bs,{children:[(0,q.jsx)(Vs,{children:e.label}),(0,q.jsx)(Hs,{title:e.value,children:e.value})]},e.label))})]})]})]})}function bs(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function xs(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Ss=v.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,Cs=v.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ws=v.aside`
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
`,Ts=v.div`
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
`,Es=v.div`
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
`,Ds=v.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Os=v.div`
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
`,ks=v.button`
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
`,As=v.div`
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
`,js=v.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Ms=v.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Ns=v.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Ps=v.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Fs=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Is=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Ls=v.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Rs=v.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,zs=v.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Bs=v.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Vs=v.span`
    color: var(--text-muted);
`,Hs=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Us=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Ws=[...Us],Gs={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},Ks={folder:e=>(0,q.jsx)(bi,{size:e}),home:e=>(0,q.jsx)(yi,{size:e}),desktop:e=>(0,q.jsx)(ia,{size:e}),documents:e=>(0,q.jsx)(aa,{size:e}),downloads:e=>(0,q.jsx)(oa,{size:e}),pictures:e=>(0,q.jsx)(sa,{size:e}),music:e=>(0,q.jsx)(ca,{size:e}),videos:e=>(0,q.jsx)(la,{size:e}),drive:e=>(0,q.jsx)(Si,{size:e}),image:e=>(0,q.jsx)(Wi,{size:e}),video:e=>(0,q.jsx)(Gi,{size:e}),audio:e=>(0,q.jsx)(Ki,{size:e}),text:e=>(0,q.jsx)(Hi,{size:e}),code:e=>(0,q.jsx)(Ui,{size:e}),clock:e=>(0,q.jsx)(Pi,{size:e}),star:e=>(0,q.jsx)(ua,{size:e}),file:e=>(0,q.jsx)(xi,{size:e}),archive:e=>(0,q.jsx)(qi,{size:e}),pdf:e=>(0,q.jsx)(Ji,{size:e}),executable:e=>(0,q.jsx)(Yi,{size:e}),font:e=>(0,q.jsx)(Xi,{size:e}),database:e=>(0,q.jsx)(Zi,{size:e}),config:e=>(0,q.jsx)(Qi,{size:e}),spreadsheet:e=>(0,q.jsx)($i,{size:e}),presentation:e=>(0,q.jsx)(ea,{size:e}),document:e=>(0,q.jsx)(ta,{size:e}),app:e=>(0,q.jsx)(Vi,{size:e}),gear:e=>(0,q.jsx)(Ai,{size:e}),pin:e=>(0,q.jsx)(ji,{size:e}),trash:e=>(0,q.jsx)(Ii,{size:e}),overview:e=>(0,q.jsx)(na,{size:e}),book:e=>(0,q.jsx)(da,{size:e}),briefcase:e=>(0,q.jsx)(fa,{size:e}),cloud:e=>(0,q.jsx)(pa,{size:e}),gamepad:e=>(0,q.jsx)(ma,{size:e}),camera:e=>(0,q.jsx)(ha,{size:e}),terminal:e=>(0,q.jsx)(ga,{size:e}),server:e=>(0,q.jsx)(_a,{size:e}),package:e=>(0,q.jsx)(va,{size:e}),globe:e=>(0,q.jsx)(ya,{size:e}),heart:e=>(0,q.jsx)(ba,{size:e}),share:e=>(0,q.jsx)(_a,{size:e}),favorites:e=>(0,q.jsx)(ba,{size:e})};function qs(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Js(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Us)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Ws.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=qs(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${Gs[n]??n}${Ys(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Ys(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Xs({panel:e,size:t=16}){let n=U(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);if(n)return(0,q.jsx)(`img`,{alt:``,src:n,style:{width:t,height:t,objectFit:`contain`}});let r=e.icon?Ks[e.icon]:void 0;if(r)return(0,q.jsx)(q.Fragment,{children:r(t)});switch(e.kind){case`quick`:return(0,q.jsx)(bi,{size:t});case`recent`:return(0,q.jsx)(Pi,{size:t});case`frequent`:return(0,q.jsx)(ua,{size:t});case`drives`:return(0,q.jsx)(Si,{size:t});case`home`:return(0,q.jsx)(yi,{size:t});case`share`:return(0,q.jsx)(_a,{size:t});case`favorites`:return(0,q.jsx)(ba,{size:t});default:return(0,q.jsx)(bi,{size:t})}}function Zs({place:e,size:t=18}){let n=U(e.icon?.startsWith(`file:`)?e.icon.slice(5):null);return n?(0,q.jsx)(`img`,{alt:``,height:t,src:n,style:{objectFit:`contain`},width:t}):e.icon&&Ks[e.icon]?(0,q.jsx)(q.Fragment,{children:Ks[e.icon](t)}):(0,q.jsx)(bi,{size:t})}var Qs=`#64748b`;function $s(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function ec({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:s}){let c=o(),[l,u]=(0,R.useState)(``),[d,f]=(0,R.useState)(`#2dd4bf`),p=(0,R.useRef)(null);(0,R.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||s()},t=e=>{e.key===`Escape`&&s()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,s),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,s)}},[s]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{a(n,{...i,[e]:t})},v=()=>{let e=l.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:d}),u(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,ro.createPortal)((0,q.jsxs)(tc,{"data-tag-menu":`true`,ref:p,style:{left:y,top:b},children:[(0,q.jsxs)(nc,{children:[(0,q.jsx)(`span`,{children:c(`tags`)}),(0,q.jsx)(rc,{onClick:s,title:c(`close`),type:`button`,children:(0,q.jsx)(Ri,{size:11})})]}),(0,q.jsxs)(ic,{children:[m.length===0&&(0,q.jsx)(cc,{children:c(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,q.jsxs)(ac,{children:[(0,q.jsx)(oc,{"aria-label":c(`color_of_tag`,{tag:e}),onChange:t=>_(e,t.target.value),title:c(`change_this_tag_s_color`),type:`color`,value:t}),(0,q.jsxs)(sc,{$color:t,$ink:$s(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,q.jsx)(Li,{size:11}),(0,q.jsx)(`span`,{children:e})]})]},e)})]}),(0,q.jsxs)(lc,{children:[(0,q.jsx)(oc,{"aria-label":c(`color_of_the_new_tag`),onChange:e=>f(e.target.value),title:c(`color_of_the_new_tag`),type:`color`,value:d}),(0,q.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:c(`new_tag`),spellCheck:!1,value:l}),(0,q.jsx)(uc,{onClick:v,type:`button`,children:c(`add`)})]})]}),document.body)}var tc=v.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${mo}
`,nc=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,rc=v.button`
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
`,ic=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,ac=v.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,oc=v.input`
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
`,sc=v.button`
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
`,cc=v.span`
    font-size: 11px;
    color: var(--text-muted);
`,lc=v.div`
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
`,uc=v.button`
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
`,dc={file:xi,folder:bi,text:Hi,code:Ui,image:Wi,video:Gi,audio:Ki,archive:qi,pdf:Ji,executable:Yi,font:Xi,database:Zi,config:Qi,spreadsheet:$i,presentation:ea,document:ta},fc={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function pc(e){let t=e.lastIndexOf(`.`);return t>0?fc[e.slice(t).toLowerCase()]??`file`:`file`}function mc({name:e,size:t}){let n=dc[e??`file`]??xi;return(0,q.jsx)(n,{size:t})}function hc({path:e,name:t,isDirectory:n,size:r=18}){let i=hn(e,n);return i?(0,q.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,q.jsx)(bi,{size:r}):(0,q.jsx)(mc,{name:pc(t),size:r})}var gc=`application/x-yafm-paths`,_c=[gc,`text/uri-list`];function vc(e){return e?.types.some(e=>_c.includes(e.toLowerCase()))??!1}function yc(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(gc);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(xc).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var bc=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function xc(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return bc?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Sc(e,t,n=!0){e.dataTransfer.setData(gc,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Cc({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:a,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=o(),[h,g]=(0,R.useState)(()=>new Set),[_,v]=(0,R.useState)(!1),y=(0,R.useRef)(null),x=(0,R.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),S=(0,R.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),C=(0,R.useRef)(null);if((0,R.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=C.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&vc(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=yc(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,c]),!r)return null;let w=new Set([...e,...t].map(e=>e.path)),T=w.size>0&&[...w].every(e=>h.has(e)),ee=w.size,te=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},E=()=>{g(T?new Set:w)},D=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},O=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},k=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},A=()=>{let e=x.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},j=()=>{let e=x.map(e=>e.path);e.length!==0&&f(e)},ne=()=>{let e=new Map;for(let t of x)e.set(t.path,!0);for(let t of S)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,a,!0),r.length>0&&p(r,a,!1),g(new Set)},re=(e,t)=>{let n=h.has(e.path);return(0,q.jsxs)(Fc,{$checked:n,draggable:!0,onClick:()=>te(e.path),onDragStart:r=>{Sc(r,n&&h.size>0?[...new Set([...x,...S].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,q.jsx)(Ic,{$checked:n,onClick:t=>{t.stopPropagation(),te(e.path)},type:`button`,children:n&&(0,q.jsx)(Li,{size:8})}),(0,q.jsx)(hc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,q.jsxs)(Lc,{children:[(0,q.jsx)(Rc,{children:e.name}),(0,q.jsx)(zc,{children:b(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},M=e=>{vc(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,q.jsxs)(wc,{$dragging:_,"data-tray":`true`,ref:C,style:{left:i.x,top:i.y},onDragEnter:M,onDragOver:M,onDrop:e=>{let{paths:t}=yc(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,q.jsxs)(Tc,{onPointerDown:D,onPointerMove:O,onPointerUp:k,children:[(0,q.jsxs)(Ec,{children:[(0,q.jsx)(va,{size:12}),m(`tray`),(0,q.jsx)(Dc,{children:ee})]}),(0,q.jsxs)(Oc,{onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(kc,{onClick:E,title:m(T?`select_none`:`select_all`),type:`button`,children:m(T?`none`:`all`)}),(0,q.jsx)(kc,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,q.jsx)(Ac,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,q.jsx)(Ri,{size:10})})]})]}),(0,q.jsxs)(jc,{children:[(0,q.jsxs)(Nc,{children:[m(`in_this_app`),(0,q.jsx)(Dc,{children:e.length})]}),e.length===0&&(0,q.jsx)(Mc,{children:m(`drag_files_or_folders_here`)}),e.map(e=>re(e,!0)),t.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Nc,{$clipboard:!0,children:[m(`clipboard`),(0,q.jsx)(Dc,{children:t.length}),n&&(0,q.jsx)(Pc,{children:m(`cut`)})]}),t.map(e=>re(e,n))]})]}),(0,q.jsxs)(Bc,{children:[(0,q.jsx)(Vc,{$plain:!0,disabled:x.length===0,onClick:j,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,q.jsx)(Vc,{disabled:h.size===0||!a,onClick:ne,type:`button`,children:m(`move_here`)}),(0,q.jsx)(Vc,{$danger:!0,disabled:x.length===0,onClick:A,type:`button`,children:m(`remove`)})]})]})}var wc=v.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${io}
    ${mo}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Tc=v.div`
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
`,Ec=v.span`
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
`,Dc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Oc=v.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,kc=v.button`
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
`,Ac=v.button`
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
`,jc=v.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Mc=v.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Nc=v.div`
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
`,Pc=v.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Fc=v.div`
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
`,Ic=v.button`
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
`,Lc=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Rc=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zc=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bc=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,Vc=v.button`
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
`,Hc={shares:[],webRunning:!1,webPort:0,urls:[],deviceId:``,deviceName:``,fingerprint:``};async function Uc(){return l.available?await l.request(`share.list`):Hc}async function Wc(e,t){return l.available?await l.request(`share.add`,{path:e,mode:t}):Hc}async function Gc(e){return l.available?await l.request(`share.remove`,{id:e}):Hc}async function Kc(e,t){return l.available?await l.request(`share.mode`,{id:e,mode:t}):Hc}async function qc(){return l.available?(await l.request(`share.peers`)).peers??[]:[]}async function Jc(){return l.available?(await l.request(`share.peers.refresh`)).peers??[]:[]}async function Yc(e,t){l.available&&await l.request(`share.pair.start`,{host:e,port:t})}async function Xc(e,t){l.available&&await l.request(`share.pair.respond`,{requestId:e,accept:t})}async function Zc(e,t){l.available&&await l.request(`share.port`,{mode:t,port:e})}var Qc=`yafm://share/`;function $c(e){return e.toLowerCase().startsWith(Qc)}function el(e){if(!$c(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function tl(e,t,n=``){let r=`${Qc}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function nl(e){let t=el(e);if(!t||!l.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await l.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:tl(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:tl(t.deviceId,t.shareId,n.parent),entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function rl(e){let t=el(e);if(!t||!l.available)throw Error(`This shared file is only available in the desktop app.`);let n=await l.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function il(e){await Ce(await rl(e))}async function al(){return l.available?(await l.request(`share.devices.list`)).devices??[]:[]}async function ol(e,t,n){return l.available?(await l.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function sl(e){return l.available?(await l.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function cl(){return l.available?(await l.request(`share.access.status`)).hasPassword:!1}async function ll(e){return l.available?(await l.request(`share.access.password`,{password:e})).hasPassword:!1}var ul=new Map,dl=new Set,fl=0;function pl(){fl+=1;for(let e of dl)e()}function ml(e,t){t?ul.set(e,t):ul.delete(e),pl()}function hl(e){return ul.has(e)}function gl(e,t,n){ul.get(e)?.(t,n)}function _l(e){return dl.add(e),()=>dl.delete(e)}function vl(){return fl}function yl(e){return(0,R.useSyncExternalStore)(_l,vl,vl),{available:hl(e),open:(t,n)=>gl(e,t,n)}}function bl(e){return[...ul.keys()].filter(t=>t===e||t.startsWith(`${e}:`))}function xl(e){return(0,R.useSyncExternalStore)(_l,vl,vl),{available:bl(e).length>0,open:(t,n)=>{let r=bl(e).at(-1);r&&gl(r,t,n)}}}var Sl=60,Cl=300,wl=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],Tl=new Set,El=`yafm.columnWidths`,Dl=`yafm.reset-column-widths`,Ol=64,kl=720,Al=160,jl=190,Ml=120;function Nl({listing:e,loading:t,error:n,find:r=Sn,view:i,showImages:a,imageStripHeight:s=jl,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:d,onOpenFile:f,showCheckboxes:p=!0,openOnSingleClick:m=!1,shortcuts:h=Gt,enableShortcuts:g=!0,refreshToken:_=0,onRefresh:v,onRename:y,onClipboardChanged:b,cutPaths:S=Tl,onTransfer:w,onAddToTray:T,platform:ee,onAddFavorite:te,onRemoveFavorite:E,favoritePaths:D,onExtractArchive:O,onPaste:k,confirmDelete:A=!1,previewVideoAudio:j=!1,previewVideoAutoplay:ne=!1,showDetails:re=!0,onPreviewInfo:M,onActivate:ie,groupOf:N,onGridScroll:se,gridFooter:ce,allowBackgroundMenu:F=!0,readOnly:I=!1,onSelectionChange:le,onSelectionCountChange:ue,selectionMenuRequest:de,selectionMenuId:fe,singleSelect:pe=!1,pendingRename:me=null,pendingRenameToken:he=0,selectMatchesToken:ge=0}){let L=o(),_e=Rn(),z=(0,R.useRef)(null),ve=(0,R.useRef)(null),ye=(0,R.useRef)(null),be=(0,R.useRef)(null),[xe,Se]=(0,R.useState)(Cl),[Ce,we]=(0,R.useState)({top:0,height:640}),Te=(0,R.useRef)(null),Ee=(0,R.useRef)(null),De=(0,R.useRef)(!1),[Oe,ke]=(0,R.useState)(null),[Ae,je]=(0,R.useState)(s),[Me,Ne]=(0,R.useState)(()=>new Set),[Pe,B]=(0,R.useState)(()=>Zn(El)??{}),Fe=(0,R.useRef)(Me),Ie=(0,R.useRef)([]);Fe.current=Me,(0,R.useEffect)(()=>le?.([...Me]),[Me,le]),(0,R.useEffect)(()=>ue?.(Me.size),[Me,ue]),(0,R.useEffect)(()=>{let e=de;if(!e||e.token===ze.current)return;ze.current=e.token;let t=[...Fe.current];t.length!==0&&(Re({x:e.x,y:e.y,paths:t,background:!1}),vt().then(Qe,()=>Qe(!1)))},[de]);let[Le,Re]=(0,R.useState)(null),ze=(0,R.useRef)(0),[V,Be]=(0,R.useState)(null),[Ve,He]=(0,R.useState)(null),[Ue,We]=(0,R.useState)(null),Ge=(0,R.useRef)(Ue);Ge.current=Ue;let Ke=(0,R.useRef)(0),qe=(0,R.useRef)(ie);qe.current=ie;let[Je,Ye]=(0,R.useState)(()=>{let e=Yn(`yafm.preview.width`,320);return e>=220?e:320}),Xe=(0,R.useCallback)(e=>{Ye(e),Xn(`yafm.preview.width`,e)},[]),[Ze,Qe]=(0,R.useState)(!1),$e=(0,R.useCallback)((e,t)=>{let n=[...Fe.current];n.length!==0&&(Re({x:e,y:t,paths:n,background:!1}),vt().then(Qe,()=>Qe(!1)))},[]);(0,R.useEffect)(()=>{if(fe)return ml(fe,Me.size>0?$e:null),()=>ml(fe,null)},[fe,Me,$e]),(0,R.useEffect)(()=>{Ne(new Set),We(null),Re(null),Ee.current=null},[e?.path]),(0,R.useEffect)(()=>{je(s)},[s]),(0,R.useEffect)(()=>{Ne(new Set),We(null),Ee.current=null},[_]);let et=e=>{Te.current={y:e.clientY,height:Ae},e.currentTarget.setPointerCapture(e.pointerId)},tt=e=>{let t=Te.current;if(!t)return;let n=Math.max(Ml,Math.round(window.innerHeight*.7));je(Math.min(n,Math.max(Ml,t.height+t.y-e.clientY)))},nt=e=>{Te.current&&(Te.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(Ae))},rt=()=>{je(jl),c?.(jl)},it=r.query.length>0,at=(0,R.useMemo)(()=>wl.filter(e=>i.columns?.includes(e.id)),[i.columns]),ot=i.columns?.includes(`linkTarget`)??!1,st=(0,R.useCallback)(e=>Math.min(kl,Math.max(Ol,Pe[e.id]??e.width)),[Pe]),ct=(0,R.useMemo)(()=>`minmax(160px, 1fr) ${at.map(e=>`${st(e)}px`).join(` `)}`.trim(),[at,st]),lt=(0,R.useRef)(null),ut=(0,R.useRef)(null),dt=()=>Math.floor(ut.current?.getBoundingClientRect().width??Al),ft=e=>{let t=at[0];t&&(e.preventDefault(),e.stopPropagation(),lt.current={left:{id:t.id,start:st(t)},startX:e.clientX,nameStart:dt()})},pt=(e,t)=>{let n=at[t],r=at[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),lt.current={left:{id:n.id,start:st(n)},right:{id:r.id,start:st(r)},startX:e.clientX,nameStart:0})},mt=e=>B(t=>{let n={...t};return delete n[e],Qn(El,n),n});(0,R.useEffect)(()=>{let e=e=>{let t=lt.current;if(!t)return;let n=e.clientX-t.startX;B(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Al),i=Math.min(Math.min(kl,t.left.start+r),Math.max(Ol,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(kl,Math.max(Ol,t.left.start+n)),a=Math.min(Math.min(kl,r-Ol),Math.max(Math.max(Ol,r-kl),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{lt.current&&(lt.current=null,B(e=>(Qn(El,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,R.useEffect)(()=>{let e=()=>B(()=>(Qn(El,{}),{}));return window.addEventListener(Dl,e),()=>window.removeEventListener(Dl,e)},[]);let H=(0,R.useMemo)(()=>e?Il(e.entries.map(t=>{let n=t.isDirectory?zn(_e,t.fullPath):void 0,i=n?.name||t.name;return{entry:t,place:n,label:i,ranges:it?Cn(i,r):null,tags:e.tags[t.name]??[],cut:S.has(t.fullPath)}}).filter(e=>!it||r.mode===`dim`||e.ranges!==null),i,e,L):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,it,r,_e,i.sort,i.sortDescending,L,S]);Ie.current=H,(0,R.useEffect)(()=>{ge!==0&&Ne(new Set(Ie.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[ge]);let ht=Math.max(40,i.iconSize+20),gt=Math.max(0,Math.floor(Ce.top/ht)-4),yt=Math.min(H.length,gt+Math.ceil(Ce.height/ht)+10),bt=(0,R.useMemo)(()=>H.slice(gt,yt),[H,gt,yt]);(0,R.useEffect)(()=>{let e=be.current;if(!e||i.mode!==`list`)return;e.scrollTop=0,we({top:0,height:e.clientHeight});let t=()=>we(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,R.useEffect)(()=>{we(e=>({...e,top:0})),be.current&&(be.current.scrollTop=0)},[e?.path]),(0,R.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=H.findIndex(e=>e.entry.fullPath===r.currentPath),t=be.current;if(e<0||!t)return;let n=e*ht;(n<t.scrollTop||n+ht>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else z.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,H,ht]);let xt=(0,R.useMemo)(()=>H.slice(0,xe),[H,xe]);(0,R.useEffect)(()=>{let e=ve.current;if(!e||e.length===0)return;let t=e.filter(e=>H.some(t=>P(t.entry.fullPath,e)));if(t.length===0)return;ve.current=null;let n=t[0],r=H.findIndex(e=>P(e.entry.fullPath,n));r>=0&&Se(e=>Math.max(e,r+Cl)),Ne(new Set(t)),Ee.current=n,i.mode===`list`&&be.current&&r>=0?be.current.scrollTop=Math.max(0,r*ht-be.current.clientHeight/2):requestAnimationFrame(()=>z.current?.scrollIntoView({block:`nearest`}))},[H,ht,i.mode]),(0,R.useEffect)(()=>{Se(Cl)},[e?.path]),(0,R.useEffect)(()=>{if(!r.currentPath)return;let e=H.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&Se(t=>Math.max(t,e+Cl))},[r.currentPath,H]);let St=(0,R.useCallback)(e=>{e.scrollTop+e.clientHeight>=e.scrollHeight-600&&Se(e=>Math.min(H.length,e+Cl))},[H.length]),Dt=i.mode===`grid`,Ot=(0,R.useMemo)(()=>{if(!Dt)return[];if(!N)return zl(xt,Rl);let e=[],t=new Map;for(let n of xt){let r=N(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[xt,Dt,N]),kt=(0,R.useMemo)(()=>a?H.filter(e=>!e.entry.isDirectory&&Pn(e.entry.name)):[],[H,a]),Mt=kt.length,Nt=(0,R.useMemo)(()=>kt.slice(0,Sl),[kt]),Ft=(0,R.useMemo)(()=>Nt.map(e=>e.entry.fullPath),[Nt]),It=Ft.filter(e=>Me.has(e)).length,Lt=Ft.length>0&&It===Ft.length,Rt=It>0&&!Lt,zt=(0,R.useMemo)(()=>a?zl(Nt,Ll):[],[Nt,a]),Bt=(0,R.useMemo)(()=>H.map(e=>e.entry.fullPath),[H]),Vt=H.length>0&&Me.size>=H.length,Ut=Me.size>0&&!Vt,Wt=()=>{pe||(Vt?$t():Ne(new Set(Bt)))},Kt=(0,R.useCallback)((e,t)=>{pe||e.length===0||(Ne(n=>{let r=new Set(n);for(let n of e)t?r.add(n):r.delete(n);return r}),t&&(Ee.current=e[0]??null))},[pe]),qt=e?.path??``,Xt=(0,R.useCallback)((e,t)=>{if(pe){Ee.current=t,Ne(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Ne(r=>{if(e.shiftKey&&Ee.current!==null){let e=Bt.indexOf(Ee.current),i=Bt.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Bt[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),Ee.current=t,e}return Ee.current=t,new Set([t])})},[Bt,pe]),Zt=(0,R.useCallback)(e=>{pe?(Ee.current=e,Ne(new Set([e]))):(Ee.current=e,Ne(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[pe]),$t=(0,R.useCallback)(()=>{Ee.current=null,Ne(new Set)},[]);(0,R.useEffect)(()=>{if(he===0||!me||Ke.current===he||!e?.entries.some(e=>e.fullPath===me))return;Ke.current=he,Ee.current=me,Ne(new Set([me])),We({path:me,value:x(me)});let t=H.findIndex(e=>e.entry.fullPath===me),n=be.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*ht;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(me)}"]`)?.scrollIntoView({block:`nearest`})})}},[be,e,me,he,ht,H,i.mode]),(0,R.useEffect)(()=>{if(!Ue)return;let e=H.findIndex(e=>e.entry.fullPath===Ue.path),t=be.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*ht;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ue.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[be,Ue,ht,H,i.mode]);let en=(0,R.useCallback)(()=>Re(null),[]),tn=(0,R.useCallback)((e,t)=>{e.isDirectory?d(e.fullPath,Jt(t)):f?.(e.fullPath,Jt(t))},[d,f]),nn=(0,R.useCallback)((e,t,n)=>{ke({entry:e,x:t,y:n})},[]),rn=(0,R.useRef)(null),an=(0,R.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Sc(e,Me.has(n)?[...Me]:[n])},[Me]),on=(0,R.useCallback)(e=>{if(!vc(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);rn.current=t?.dataset.directory===`true`?t.dataset.path??qt:qt,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[qt]),sn=(0,R.useCallback)(e=>{if(I)return;let{paths:t,move:n}=yc(e),r=rn.current??qt;rn.current=null,t.length!==0&&w&&(e.preventDefault(),w(t,r,!e.ctrlKey&&n))},[qt,w,I]),cn=(0,R.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),I||!t&&!F)return;let n=Fe.current;t&&!n.has(t)&&Ne(new Set([t])),t&&(Ee.current=t);let r=t?n.has(t)?[...n]:[t]:[];Re({x:e.clientX,y:e.clientY,paths:r,background:!t}),vt().then(Qe,()=>Qe(!1))},[F,qt]),ln=(0,R.useCallback)(()=>v?.(),[v]),un=(e,t)=>{Ee.current=e,Ne(new Set([e])),t&&We({path:e,value:x(e)}),ln()},dn=V&&(0,q.jsx)(Yo,{initialDirectory:qt,initialName:V.name,onCancel:()=>Be(null),onCompress:async e=>{let t=await Ht(V.paths,e);return!t.ok||!t.path?(Ga(t.error??L(`could_not_create_the_archive`)),!1):(un(t.path,!1),!0)}}),fn=async(e,t=!1)=>{let n=e,r=t;if(e.some($c)){let t=[];for(let n of e)if(!$c(n))t.push(n);else{if(Ie.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){Ga(L(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await rl(n))}catch(e){Ga(e instanceof Error?e.message:L(`the_file_could_not_be_copied`));return}}n=t,r=!1}await _t(n,r)&&(Qe(!0),b?.())},pn=async e=>{if(!e)return;let t=await Ct(e);t.cancelled||(t.ok?(ve.current=t.created,ln(),k?.()):Ga(L(`nothing_on_the_clipboard_could_be_pasted_here`)))},mn=async(e,t=!1)=>{if(!qt)return;let n=e===null?await Et(qt,t):await At(qt,e);!n.ok||n.path===null?Ga(n.error??L(`could_not_create_the_item`)):(Ee.current=n.path,Ne(new Set([n.path])),We({path:n.path,value:x(n.path)}),ln())},hn=e=>{Ne(new Set([e.fullPath])),Ee.current=e.fullPath,We({path:e.fullPath,value:e.name})},gn=(0,R.useCallback)(e=>We(t=>t&&{...t,value:e}),[]),U=(0,R.useCallback)(()=>We(null),[]),_n=(0,R.useCallback)(async()=>{let e=Ge.current;if(We(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Ie.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Tt(e.path,t);r.ok?($t(),r.path&&y?.(e.path,r.path),ln(),window.setTimeout(()=>ln(),250)):Ga(r.error??L(`could_not_rename_the_entry`))},[$t,y,ln,L]),vn=async(e,t=!1)=>{if((t||A)&&!await yn(e,t))return;let n=await wt(e,t);if(!n.ok&&n.needsPermanent){if(!await yn(e,!0))return;n=await wt(e,!0)}if(n.ok)$t(),ln();else{if(n.cancelled)return;Ga(n.error??L(t?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},yn=(0,R.useCallback)((e,t)=>new Promise(n=>He({paths:e,permanent:t,resolve:n})),[]),W=(0,R.useCallback)(e=>{He(t=>(t?.resolve(e),null))},[]);(0,R.useEffect)(()=>{if(!g||Le)return;let e=e=>{if(Qt(e.target))return;qe.current?.();let t=Yt(e),n=[...Me],r=n.length===1?H.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`home`||t===`end`){if(Bt.length===0)return;e.preventDefault();let n=Ee.current&&Bt.includes(Ee.current)?Ee.current:Me.size===1?[...Me][0]:null,r=n?Bt.indexOf(n):-1,i=t===`home`?0:t===`end`?Bt.length-1:Math.max(0,Math.min(Bt.length-1,r+(t===`arrowdown`?1:-1))),a=Bt[i];Ne(new Set([a])),Ee.current=a,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(a)}"]`)?.scrollIntoView({block:`nearest`})})}else t===`ctrl+d`||t===h.copy?i(()=>{n.length>0&&fn(n)}):t===h.cut?i(()=>{n.length>0&&fn(n,!0)}):t===h.paste?i(()=>void pn(qt)):t===h.delete?i(()=>{n.length>0&&vn(n)}):t===h.deletePermanently?i(()=>{n.length>0&&vn(n,!0)}):t===h.selectAll?i(()=>{let e=De.current&&a&&Nt.length>0?Nt.map(e=>e.entry.fullPath):Bt;Ne(new Set(e)),Ee.current=e[0]??null}):t===h.invertSelection?i(()=>{Ne(new Set(Bt.filter(e=>!Me.has(e)))),Ee.current=Bt[0]??null}):t===h.rename&&r?i(()=>void hn(r)):t===h.open&&r?i(()=>{r.isDirectory?d(r.fullPath):f?.(r.fullPath)}):t===h.newFolder||t===`f10`?i(()=>void mn(null)):t===h.terminal?i(()=>void Pt(qt)):t===h.properties&&i(()=>void jt(n.length>0?n:qt?[qt]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Bt,fn,mn,qt,g,Le,d,f,pn,vn,hn,H,Me,h]);let G=Ve&&(0,q.jsx)(cs,{confirmLabel:Ve.permanent?L(`delete`):L(`move`),danger:Ve.permanent,message:Ve.permanent?L(`permanently_delete_target_this_cannot_be_undone`,{target:Ve.paths.length===1?L(`this_item`):L(`count_items`,{count:Ve.paths.length})}):L(`move_target_to_the_recycle_bin`,{target:Ve.paths.length===1?L(`this_item`):L(`count_items`,{count:Ve.paths.length})}),onCancel:()=>W(!1),onConfirm:()=>W(!0),open:!0,title:Ve.permanent?L(`delete_permanently`):L(`move_to_the_recycle_bin`)}),K=(0,R.useMemo)(()=>{if(!e||Me.size===0)return null;let t=Bt.find(e=>Me.has(e));return t?H.find(e=>e.entry.fullPath===t)?.entry??null:null},[Bt,e,H,Me]),bn=(0,R.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:x(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:L(`type`),value:L(`folder`)},{label:L(`location`),value:e.parent??`—`},{label:L(`path`),value:e.path},{label:L(`size`),value:C(t)},{label:L(`items`),value:oe(L,n,`k_1_item`,`count_items`)},{label:L(`modified`),value:`—`},{label:L(`created`),value:`—`},{label:L(`attributes`),value:`—`}]}},[e,L]),xn=(0,R.useMemo)(()=>{if(!K||!e)return null;let t=K.isDirectory?e.folderSizes[K.name]:void 0,n=e.tags[K.name]??[],r=K.name.lastIndexOf(`.`),i=r>0&&r<K.name.length-1?K.name.slice(r+1).toUpperCase():`—`;return{name:K.name,path:K.fullPath,isDirectory:K.isDirectory,size:K.size,modified:K.modified,created:K.created,fields:[{label:L(`type`),value:Hl(K,L)},...K.isEncrypted?[{label:L(`encryption`),value:L(`password_required`)}]:[],{label:L(`extension`),value:K.isDirectory?`—`:i},{label:L(`location`),value:e.path},{label:L(`full_path`),value:K.fullPath},{label:L(`size`),value:K.isDirectory?t===void 0?`—`:C(t):C(K.size)},...K.isDirectory?[{label:L(`items`),value:`${e.counts[K.name]??`—`}`}]:[],{label:L(`modified`),value:ae(K.modified)},{label:L(`created`),value:ae(K.created)},{label:L(`link_status`),value:K.linkTarget==null?K.linkCount>1?L(`hard_link`):`—`:K.linkValid?`ok`:L(`broken`)},...K.linkTarget?[{label:L(`target`),value:K.linkTarget}]:[],...K.linkCount>1?[{label:L(`links`),value:String(K.linkCount)}]:[],{label:L(`attributes`),value:[K.isHidden?L(`hidden`):``,K.isSystem?L(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:L(`tags`),value:n.join(`, `)}]:[]]}},[e,K,L]),wn=Le?.paths.length===1?Le.paths[0]:null,Tn=wn?H.find(e=>e.entry.fullPath===wn)?.entry:void 0,En=Tn?{path:Tn.fullPath,isDirectory:Tn.isDirectory}:null,Dn=xn??bn,On=(0,R.useRef)(M);On.current=M,(0,R.useEffect)(()=>{On.current?.(Dn)},[M,Dn]);let kn=re&&Dn&&(0,q.jsx)(ys,{info:Dn,onWidth:Xe,selectionNote:Me.size>1?oe(L,Me.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:j,videoAutoplay:ne,width:Je});return n&&!e?(0,q.jsx)(Ku,{children:(0,q.jsx)(Ju,{children:n})}):!e&&!t?(0,q.jsx)(Ku,{children:(0,q.jsx)(qu,{children:L(`nothing_selected`)})}):i.mode===`grid`?(0,q.jsxs)(lu,{onPointerDown:ie,children:[(0,q.jsxs)(uu,{children:[(0,q.jsxs)(vu,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||$t()},onContextMenu:e=>cn(e),onDragOver:on,onDragStart:an,onDrop:sn,onScroll:e=>{se?.(e.currentTarget),St(e.currentTarget)},children:[p&&H.length>0&&(0,q.jsxs)(ou,{children:[(0,q.jsx)(iu,{$checked:!pe&&Vt,$partial:!pe&&Ut,"aria-label":L(Vt?`select_none`:`select_all`),disabled:pe,onClick:e=>{e.stopPropagation(),Wt()},title:L(Vt?`select_none`:`select_all`),type:`button`,children:Vt?(0,q.jsx)(Li,{size:10}):Ut?(0,q.jsx)(au,{}):null}),(0,q.jsx)(`span`,{children:L(Vt?`select_none`:`select_all`)})]}),t&&!e?(0,q.jsx)(Cu,{$size:i.gridSize,children:(0,q.jsx)(Jl,{size:i.gridSize})}):(0,q.jsx)(Xl,{counts:e?.counts,currentPath:it?r.currentPath:null,groups:Ot,gridSize:i.gridSize,innerRef:z,onContextMenu:cn,onOpen:d,onOpenFile:f,onRenameCancel:U,onRenameChange:gn,onRenameCommit:_n,onSelect:Xt,onToggle:Zt,onTogglePaths:pe?void 0:Kt,openOnSingleClick:m,renaming:Ue,searching:it,selected:Me,showCheckboxes:p,showTarget:ot}),!t&&e&&H.length===0&&(0,q.jsx)(Gu,{children:(0,q.jsx)(qu,{children:n??(it&&r.mode===`hide`?L(`no_entries_match_the_search`):L(`this_folder_is_empty`))})}),ce]}),Le&&(0,q.jsx)(No,{canPaste:Ze,directory:qt,platform:ee,allowCompression:!0,menu:Le,onAddToTray:T,onAddFavorite:te,onRemoveFavorite:E,favoritePaths:D,onExtractArchive:O,onArchiveCreated:un,onClose:en,onCompressTo:(e,t)=>Be({paths:e,name:t}),onCopy:fn,onCreateFile:e=>void mn(e),onCreateFolder:e=>void mn(null,e),onDelete:vn,onOpen:d,onOpenFile:f,onPaste:pn,onRefresh:ln,onRename:e=>{let t=H.find(t=>t.entry.fullPath===e)?.entry;t&&hn(t)},shortcuts:h,target:En}),dn,G]}),kn]}):(0,q.jsxs)(lu,{onPointerDown:ie,children:[(0,q.jsxs)(uu,{children:[(0,q.jsxs)(du,{onScroll:e=>{be.current&&be.current.scrollLeft!==e.currentTarget.scrollLeft&&(be.current.scrollLeft=e.currentTarget.scrollLeft)},ref:ye,style:{gridTemplateColumns:ct},children:[(0,q.jsxs)(tu,{ref:ut,children:[p&&(0,q.jsx)(iu,{$checked:!pe&&Vt,$partial:!pe&&Ut,"aria-label":L(Vt?`select_none`:`select_all`),disabled:pe,onClick:e=>{e.stopPropagation(),Wt()},title:L(Vt?`select_none`:`select_all`),type:`button`,children:Vt?(0,q.jsx)(Li,{size:10}):Ut?(0,q.jsx)(au,{}):null}),(0,q.jsxs)(fu,{onClick:()=>l(`name`),type:`button`,children:[L(`name`),Pl(i,`name`)]}),(0,q.jsx)(ru,{"aria-label":L(`resize_column`),onDoubleClick:()=>at[0]&&mt(at[0].id),onPointerDown:ft,role:`separator`})]}),at.map((e,t)=>(0,q.jsxs)(nu,{children:[(0,q.jsxs)(fu,{onClick:()=>l(e.id),type:`button`,children:[L(e.label),Pl(i,e.id)]}),t<at.length-1&&(0,q.jsx)(ru,{"aria-label":L(`resize_column`),onDoubleClick:()=>mt(e.id),onPointerDown:e=>pt(e,t),role:`separator`})]},e.id))]}),(0,q.jsxs)(pu,{onClick:e=>{e.target===e.currentTarget&&$t()},onContextMenu:e=>cn(e),onDragOver:on,onDragStart:an,onDrop:sn,onScroll:e=>{ye.current&&ye.current.scrollLeft!==e.currentTarget.scrollLeft&&(ye.current.scrollLeft=e.currentTarget.scrollLeft);let t=e.currentTarget;we(e=>e.top===t.scrollTop&&e.height===t.clientHeight?e:{top:t.scrollTop,height:t.clientHeight})},ref:be,children:[t&&!e?(0,q.jsx)(ql,{template:ct,columns:at.length}):(0,q.jsxs)(q.Fragment,{children:[gt>0&&(0,q.jsx)(`div`,{style:{height:gt*ht}}),bt.map(t=>{let n=t.entry.fullPath;return(0,q.jsx)(Ql,{current:it&&n===r.currentPath,dim:it&&t.ranges===null,height:ht,iconSize:i.iconSize,innerRef:z,listing:e,onContextMenu:cn,onOpen:tn,onRenameCancel:U,onRenameChange:gn,onRenameCommit:_n,onSelect:Xt,onTagEdit:nn,onToggle:Zt,openOnSingleClick:m,renaming:Ue?.path===n?{value:Ue.value}:null,row:t,selected:Me.has(n),showCheckboxes:p,showTarget:ot,template:ct,visible:at},n)}),yt<H.length&&(0,q.jsx)(`div`,{style:{height:(H.length-yt)*ht}})]}),!t&&e&&H.length===0&&(0,q.jsx)(Ku,{children:(0,q.jsx)(qu,{children:n??(it&&r.mode===`hide`?L(`no_entries_match_the_search`):L(`this_folder_is_empty`))})})]}),a&&kt.length>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(mu,{onDoubleClick:rt,onPointerDown:et,onPointerMove:tt,onPointerUp:nt,title:L(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(hu,{onPointerEnter:()=>{De.current=!0},onPointerLeave:()=>{De.current=!1},style:{height:Ae},children:[(0,q.jsxs)(gu,{children:[p&&!pe&&Ft.length>0&&(0,q.jsx)(iu,{$checked:Lt,$partial:Rt,"aria-label":L(Lt?`select_none`:`select_all`),disabled:pe,onClick:e=>{e.stopPropagation(),Kt(Ft,!Lt)},title:L(Lt?`select_none`:`select_all`),type:`button`,children:Lt?(0,q.jsx)(Li,{size:10}):Rt?(0,q.jsx)(au,{}):null}),L(`preview`),(0,q.jsx)(_u,{children:Mt>Sl?`${Nt.length} / ${Mt}`:Mt})]}),(0,q.jsx)(vu,{onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||$t()},onContextMenu:e=>cn(e),children:(0,q.jsx)(Xl,{counts:e?.counts,currentPath:it?r.currentPath:null,groups:zt,gridSize:i.gridSize,onContextMenu:cn,onOpen:d,onOpenFile:f,onSelect:Xt,onToggle:Zt,onTogglePaths:pe?void 0:Kt,openOnSingleClick:m,searching:it,selected:Me,showCheckboxes:p,showTarget:ot})})]})]}),Oe&&e&&(0,q.jsx)(ec,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Oe.entry.name,e,t),onClose:()=>ke(null),tags:e.tags[Oe.entry.name]??[],x:Oe.x,y:Oe.y}),Le&&(0,q.jsx)(No,{canPaste:Ze,directory:qt,platform:ee,allowCompression:!0,menu:Le,onAddToTray:T,onAddFavorite:te,onRemoveFavorite:E,favoritePaths:D,onExtractArchive:O,onArchiveCreated:un,onClose:en,onCompressTo:(e,t)=>Be({paths:e,name:t}),onCopy:fn,onCreateFile:e=>void mn(e),onCreateFolder:e=>void mn(null,e),onDelete:vn,onOpen:d,onOpenFile:f,onPaste:pn,onRefresh:ln,onRename:e=>{let t=H.find(t=>t.entry.fullPath===e)?.entry;t&&hn(t)},shortcuts:h,target:En}),dn,G]}),kn]})}function Pl(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}var Fl=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Il(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Hl(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Fl.compare(String(r),String(i));return t.sortDescending?-o:o})}var Ll=jn.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Nn(t.entry.name)===e})),Rl=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...Ll.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function zl(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Bl(e){return Math.max(24,Math.min(e-56,160))}var Vl={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Hl(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`internet_shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`folder_link`):t(`symbolic_link`);if(e.isDirectory)return t(`folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Vl[pc(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`file`)}function Ul(e,t,n,r){switch(e){case`type`:return Hl(t,r);case`size`:return Gl(t,n.folderSizes);case`modified`:return ae(t.modified);case`created`:return ae(t.created);case`items`:return t.isDirectory?n.counts[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:r(`broken`);default:return``}}function Wl({name:e,ranges:t}){if(!t||t.length===0)return(0,q.jsx)(q.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,q.jsx)(Wu,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,q.jsx)(q.Fragment,{children:n})}function Gl(e,t){if(!e.isDirectory)return C(e.size);let n=t[e.name];return n===void 0?`—`:C(n)}function Kl({entry:e,size:t=18}){let n=o(),r=(0,R.useRef)(null),[i,a]=(0,R.useState)(!1);(0,R.useEffect)(()=>{if(i)return;let e=r.current;if(!e)return;if(!(`IntersectionObserver`in window)){a(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(a(!0),t.disconnect())},{rootMargin:`250px`});return t.observe(e),()=>t.disconnect()},[i]);let s=hn(i?e.fullPath:null,e.isDirectory,t>32),c=U(e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null);return(0,q.jsxs)($l,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,q.jsx)(mc,{name:e.iconSource.slice(5),size:t}):c?(0,q.jsx)(`img`,{alt:``,height:t,src:c,width:t}):s?(0,q.jsx)(`img`,{alt:``,height:t,src:s,width:t}):e.isDirectory?(0,q.jsx)(bi,{size:t}):(0,q.jsx)(mc,{name:pc(e.name),size:t}),e.isEncrypted&&(0,q.jsx)(eu,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,q.jsx)(ja,{size:Math.max(8,Math.round(t*.52))})})]})}function ql({template:e,columns:t}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,q.jsxs)(wu,{style:{gridTemplateColumns:e},children:[(0,q.jsxs)(Du,{children:[(0,q.jsx)(Tu,{style:{flexShrink:0,height:18,width:18}}),(0,q.jsx)(Tu,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,q.jsx)(Tu,{style:{width:t%2==0?44:92}},t))]},r))})}function Jl({size:e}){return(0,q.jsx)(q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,q.jsxs)(Ru,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,q.jsx)(zu,{children:(0,q.jsx)(Tu,{style:{height:e,width:e}})}),(0,q.jsx)(Vu,{children:(0,q.jsx)(Tu,{style:{height:9,width:`${t}%`}})})]},n))})}var Yl=(0,R.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=o(),x=Rn(),S=!e.entry.isDirectory&&Pn(e.entry.name),w=(0,R.useRef)(null),[T,ee]=(0,R.useState)(!1);(0,R.useEffect)(()=>{if(!S||T)return;let e=w.current;if(!e)return;if(!(`IntersectionObserver`in window)){ee(!0);return}let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(ee(!0),t.disconnect())},{rootMargin:`300px`});return t.observe(e),()=>t.disconnect()},[S,T]);let te=W(S&&T?e.entry.fullPath:null,192,e.entry.modified),[E,D]=(0,R.useState)(!1),O=S&&te!==null&&!E,k=e.entry.fullPath,A=t=>{e.entry.isDirectory?v(k,Jt(t)):y?.(k,Jt(t))};return(0,q.jsxs)(Ru,{$current:t,$dim:n,$image:O,$selected:c,onClick:e=>{h(e,k),u&&A(e)},onContextMenu:e=>_(e,k),onDoubleClick:e=>{u||A(e)},ref:e=>{w.current=e,t&&s&&(s.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":k,draggable:!d,children:[l&&(0,q.jsx)(cu,{$checked:c,onClick:e=>{e.stopPropagation(),g(k)},onDoubleClick:e=>e.stopPropagation(),title:b(c?`deselect`:`select`),type:`button`,children:c&&(0,q.jsx)(Li,{size:10})}),(0,q.jsx)(zu,{children:O?(0,q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>D(!0),src:te}):(0,q.jsx)(Bu,{children:e.place&&x.useIcons?(0,q.jsx)(Zs,{place:e.place,size:r}):(0,q.jsx)(Kl,{entry:e.entry,size:r})})}),(0,q.jsxs)(Vu,{children:[d?(0,q.jsx)(Zl,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:d.value}):(0,q.jsx)(Hu,{$broken:e.entry.linkValid===!1,children:(0,q.jsx)(Wl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,q.jsxs)(ku,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(ja,{size:9}),b(`encrypted`)]}),e.cut&&(0,q.jsxs)(Au,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,q.jsx)(wa,{size:9}),b(`cut`)]}),(0,q.jsx)(Uu,{children:e.entry.isDirectory?i===void 0?Hl(e.entry,b):b(`type_count_items`,{type:Hl(e.entry,b),count:i}):b(`type_size`,{type:Hl(e.entry,b),size:C(e.entry.size)})}),a&&e.entry.linkTarget&&(0,q.jsxs)(Mu,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,q.jsx)(Ra,{size:9}),(0,q.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Xl({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onSelect:f,onToggle:p,onTogglePaths:m,onContextMenu:h,onOpen:g,onOpenFile:_,onRenameChange:v,onRenameCommit:y,onRenameCancel:b}){let x=o();return(0,q.jsx)(q.Fragment,{children:e.map(e=>{let o=e.rows.map(e=>e.entry.fullPath),S=o.filter(e=>c.has(e)).length,C=o.length>0&&S===o.length,w=S>0&&!C;return(0,q.jsxs)(yu,{children:[(0,q.jsxs)(bu,{children:[l&&m&&o.length>0&&(0,q.jsx)(iu,{$checked:C,$partial:w,"aria-label":x(C?`select_none`:`select_all`),onClick:e=>{e.stopPropagation(),m(o,!C)},title:x(C?`select_none`:`select_all`),type:`button`,children:C?(0,q.jsx)(Li,{size:10}):w?(0,q.jsx)(au,{}):null}),x(e.label),(0,q.jsx)(xu,{children:e.rows.length}),(0,q.jsx)(Su,{})]}),(0,q.jsx)(Cu,{$size:t,children:e.rows.map(e=>(0,q.jsx)(Yl,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:Bl(t),innerRef:s,itemCount:n?.[e.entry.name],onContextMenu:h,onOpen:g,onOpenFile:_,onSelect:f,onToggle:p,openOnSingleClick:u,onRenameCancel:b,onRenameChange:v,onRenameCommit:y,renaming:d?.path===e.entry.fullPath?d:null,row:e,selected:c.has(e.entry.fullPath),showCheckboxes:l,showTarget:r},e.entry.fullPath))})]},e.id)})})}function Zl({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,R.useRef)(null);return(0,R.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,q.jsx)(ju,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Ql=(0,R.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:s,iconSize:c,height:l,template:u,visible:d,listing:f,innerRef:p,renaming:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onTagEdit:y,onRenameChange:b,onRenameCommit:x,onRenameCancel:S}){let C=o(),w=Rn(),T=e.entry.fullPath;return(0,q.jsxs)(Eu,{$current:t,$dim:n,$height:l,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{h(t,T),s&&v(e.entry,t)},onContextMenu:e=>_(e,T),onDoubleClick:t=>{s||v(e.entry,t)},ref:t?p:void 0,style:{gridTemplateColumns:u},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!m,children:[(0,q.jsxs)(Du,{children:[i&&(0,q.jsx)(su,{$checked:r,onClick:e=>{e.stopPropagation(),g(T)},onDoubleClick:e=>e.stopPropagation(),title:C(r?`deselect`:`select`),type:`button`,children:r&&(0,q.jsx)(Li,{size:10})}),e.place&&w.useIcons?(0,q.jsx)($l,{children:(0,q.jsx)(Zs,{place:e.place,size:c})}):(0,q.jsx)(Kl,{entry:e.entry,size:c}),m?(0,q.jsx)(Zl,{onCancel:S,onChange:b,onCommit:x,value:m.value}):(0,q.jsx)(Ou,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,q.jsx)(Wl,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,q.jsxs)(ku,{title:C(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(ja,{size:9}),C(`encrypted`)]}),e.cut&&(0,q.jsxs)(Au,{title:C(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,q.jsx)(wa,{size:9}),C(`cut`)]}),a&&e.entry.linkTarget&&(0,q.jsxs)(Mu,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,q.jsx)(Ra,{size:9}),(0,q.jsx)(`span`,{children:e.entry.linkTarget})]})]}),d.map(t=>(0,q.jsx)(Nu,{children:t.id===`tags`?(0,q.jsx)(Pu,{onClick:t=>{t.stopPropagation(),y(e.entry,t.clientX,t.clientY)},title:C(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=f.tagColors?.[e]??`#64748b`;return(0,q.jsx)(Fu,{$color:t,$ink:$s(t),children:e},e)}):(0,q.jsx)(Iu,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,q.jsx)(Lu,{children:C(`broken`)}):Ul(t.id,e.entry,f,C)},t.id))]})}),$l=v.span`
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
`,eu=v.span`
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
`,tu=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,nu=v.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,ru=v.span`
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
`,iu=v.button`
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
`,au=v.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,ou=v.div`
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
`,su=v.button`
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
`,cu=v(su)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,lu=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,uu=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,du=v.div`
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
`,fu=v.button`
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
`,pu=v.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,mu=v.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,hu=v.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,gu=v.div`
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
`,_u=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,vu=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,yu=v.section`
    & + & {
        margin-top: 22px;
    }
`,bu=v.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,xu=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Su=v.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Cu=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,wu=v.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Tu=v.span`
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
`,Eu=v.div`
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
`,Du=v.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Ou=v.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,ku=v.span`
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
`,Au=v.span`
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
`,ju=v.input`
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
`,Mu=v.span`
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
`,Nu=v.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pu=v.button`
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
`,Fu=v.span`
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
`,Iu=v.span`
    color: var(--text-muted);
    font-size: 11px;
`,Lu=v.span`
    color: #fca5a5;
`,Ru=v.div`
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
`,zu=v.div`
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
`,Bu=v.span`
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
`,Vu=v.div`
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
`,Hu=v.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Uu=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Wu=v.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Gu=v.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Ku=v.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,qu=v.p`
    font-size: 13px;
    color: var(--text-muted);
`,Ju=v.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Yu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Xu=`/assets/bloom-BpfZWiaG.mp4`,Zu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Qu=`/assets/drift-BRBSQL2_.mp4`,$u=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,ed=`/assets/ember-CtSz0YxR.mp4`,td=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],nd=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],rd=[{id:`builtin:video:drift`,name:`drift`,url:Qu,poster:Zu},{id:`builtin:video:ember`,name:`ember`,url:ed,poster:$u},{id:`builtin:video:bloom`,name:`bloom`,url:Xu,poster:Yu}],id=nd.map(e=>({...e,variants:td.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:ud(dd(e.id,t,!1)),lightUrl:ud(dd(e.id,t,!0))}))})),ad=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>td.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:ud(fd(e.id,t,!1)),lightUrl:ud(fd(e.id,t,!0))}))),od=new Map([...id.flatMap(e=>e.variants),...ad].map(e=>[e.id,e])),sd=new Map(rd.map(e=>[e.id,e]));function cd(e,t=`dark`){if(sd.has(e))return sd.get(e).url;let n=od.get(e)??od.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function ld(e){return sd.has(e)}function ud(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function dd(e,t,n){return e===`dunes`?yd(t,n):e===`tide`?bd(t,n):vd(t,n)}function fd(e,t,n){return e===`skyline`?md(t,n):e===`orbit`?hd(t,n):pd(t,n)}function pd({accent:e,secondary:t},n){let r=_d(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=_d(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=_d(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=_d(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=_d(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${_d(t,`#ffffff`,n?.45:.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${a}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${o}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${c}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function md({accent:e,secondary:t},n){let r=_d(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=_d(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=_d(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=_d(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${_d(e,n?`#d5deea`:`#040208`,n?.7:.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function hd({accent:e,secondary:t},n){let r=_d(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=_d(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=_d(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${_d(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${r}"/>
            <stop offset="1" stop-color="${i}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${_d(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${_d(e,n?`#cfd9e6`:`#08050f`,n?.55:.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${_d(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function gd(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function _d(e,t,n){let[r,i,a]=gd(e),[o,s,c]=gd(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function vd({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${_d(e,n?`#f2f6ff`:`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${_d(t,n?`#eef2ff`:`#070b1c`,n?.86:.85)}"/>
            <stop offset="1" stop-color="${_d(e,n?`#e8f0fb`:`#04060c`,n?.9:.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${_d(e,t,.5)}" opacity="${n?.26:.42}" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="${n?.32:.5}" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="${n?.3:.42}" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="${n?.26:.36}" filter="url(#soft2)"/>
</svg>`}function yd({accent:e,secondary:t},n){let r=_d(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=_d(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=_d(e,t,.25),o=_d(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=_d(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=_d(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1480" cy="250" r="110" fill="${_d(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${c}" opacity="${n?.5:.75}"/>
</svg>`}function bd({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${_d(e,n?`#e6f7fb`:`#02070a`,n?.88:.9)}"/>
            <stop offset="0.5" stop-color="${_d(t,n?`#eefaf8`:`#03100f`,n?.85:.82)}"/>
            <stop offset="1" stop-color="${_d(e,n?`#dff2f7`:`#020609`,n?.9:.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${_d(e,t,.4)}" opacity="${n?.34:.5}" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var xd=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Sd(e){return xd.test(e)}function Cd({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):A(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=K(i),o=n?.startsWith(`builtin:`)?cd(n,t):r??a,s=r===null?i===null?n!==null&&ld(n):Sd(i):Sd(r.split(/[?#]/)[0]);if(!n||!o)return null;let c=`blur(${e?.backgroundBlur??0}px) saturate(${e?.backgroundSaturation??100}%) brightness(${e?.backgroundBrightness??100}%)`;return(0,q.jsxs)(wd,{"aria-hidden":!0,children:[s?(0,q.jsx)(Ed,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:c}}):(0,q.jsx)(Td,{src:o,style:{filter:c}}),(0,q.jsx)(Dd,{})]})}var wd=v.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Td=v.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Ed=v.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,Dd=v.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function Od({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let s=o(),c=(0,R.useRef)(null),[l,u]=(0,R.useState)(()=>Math.max(1,Math.ceil(n))),d=e??`delete`;return(0,R.useEffect)(()=>{c.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));u(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,ro.createPortal)((0,q.jsx)(Md,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,q.jsxs)(Nd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(Pd,{children:s(`protected_folder`)}),(0,q.jsx)(Fd,{children:s(`these_paths_are_protected_by_the_safety_settings`)}),(0,q.jsx)(Id,{children:t.map(e=>(0,q.jsxs)(Ld,{children:[(0,q.jsx)(Rd,{children:e.path}),(0,q.jsx)(zd,{children:s(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,q.jsx)(Bd,{children:kd(s,d,r??!1)}),(0,q.jsx)(Vd,{children:Ad(s,d)}),(0,q.jsx)(Hd,{children:s(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,q.jsxs)(Ud,{children:[(0,q.jsx)(Wd,{onClick:i,ref:c,type:`button`,children:s(`cancel`)}),(0,q.jsx)(Gd,{disabled:l>0,onClick:a,type:`button`,children:l>0?jd(s,d,l):jd(s,d,0)})]})]})}),document.body)}function kd(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function Ad(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function jd(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var Md=v.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${yo}
`,Nd=v.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${mo}
`,Pd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Fd=v.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Id=v.div`
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
`,Ld=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Rd=v.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,zd=v.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Bd=v.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Vd=v.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Hd=v.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Ud=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Wd=v.button`
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
`,Gd=v.button`
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
`;function Kd(){let e=o(),[t,n]=(0,R.useState)(null),r=(0,R.useRef)(null),i=(0,R.useRef)(null);(0,R.useEffect)(()=>(Wa(e=>new Promise(t=>{r.current=t,n(e)})),()=>Wa(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,R.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,ro.createPortal)((0,q.jsx)(qd,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,q.jsxs)(Jd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsx)(Yd,{children:e(`notice`)}),(0,q.jsx)(Xd,{children:t}),(0,q.jsx)(Zd,{children:(0,q.jsx)(Qd,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var qd=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${yo}
`,Jd=v.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${mo}
`,Yd=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Xd=v.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Zd=v.div`
    display: flex;
    justify-content: flex-end;
`,Qd=v.button`
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
`;function $d(){let e=o(),[t,n]=(0,R.useState)(null),[r,i]=(0,R.useState)(``),a=(0,R.useRef)(null),s=(0,R.useRef)(null);(0,R.useEffect)(()=>(Ka((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ka(null)),[]),(0,R.useEffect)(()=>{t&&window.setTimeout(()=>s.current?.focus(),0)},[t]);let c=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let l=()=>{r.length>0&&c(r)};return(0,ro.createPortal)((0,q.jsx)(ef,{onPointerDown:e=>{e.target===e.currentTarget&&c(null)},children:(0,q.jsxs)(tf,{role:`dialog`,"aria-modal":`true`,children:[(0,q.jsx)(nf,{children:e(`archive_password`)}),(0,q.jsx)(rf,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,q.jsx)(af,{title:t.archive,children:t.archive}),(0,q.jsx)(of,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),l()):e.key===`Escape`&&(e.preventDefault(),c(null))},ref:s,spellCheck:!1,type:`password`,value:r}),(0,q.jsxs)(sf,{children:[(0,q.jsx)(cf,{onClick:()=>c(null),type:`button`,children:e(`cancel`)}),(0,q.jsx)(lf,{disabled:r.length===0,onClick:l,type:`button`,children:e(`ok`)})]})]})}),document.body)}var ef=v.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${yo}
`,tf=v.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${mo}
`,nf=v.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,rf=v.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,af=v.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,of=v.input`
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
`,sf=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,cf=v.button`
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
`,lf=v(cf)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function uf({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:s,compact:c=!1,placeholder:l,onQuery:u,onPrevious:d,onNext:f,onMatchCase:p,onRegex:m,onMode:h,onClose:g,onSelectMatches:_}){let v=o(),y=(0,R.useRef)(null),b=l??v(`search_this_folder`);(0,R.useEffect)(()=>{let e=y.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[s]);let x=e=>{e(),y.current?.focus()};return(0,q.jsxs)(df,{children:[(0,q.jsx)(Ci,{}),(0,q.jsx)(ff,{"aria-label":b,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?d():f()),e.key===`Escape`&&(e.preventDefault(),g())},placeholder:b,ref:y,spellCheck:!1,value:e}),!c&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(pf,{children:i===0?`0/0`:`${a+1}/${i}`}),_&&(0,q.jsx)(mf,{disabled:i===0,onClick:_,title:v(`select_all_matches`),type:`button`,children:(0,q.jsx)(Li,{size:12})}),(0,q.jsx)(mf,{$chevron:!0,onClick:()=>x(d),title:v(`previous_match_shift_enter`),type:`button`,children:(0,q.jsx)(ki,{size:12})}),(0,q.jsx)(mf,{$chevron:!0,$down:!0,onClick:()=>x(f),title:v(`next_match_enter`),type:`button`,children:(0,q.jsx)(ki,{size:12})})]}),(0,q.jsx)(hf,{$on:n,onClick:()=>x(p),title:v(`match_case`),type:`button`,children:`Aa`}),(0,q.jsx)(hf,{$on:r,onClick:()=>x(m),title:v(`regular_expression`),type:`button`,children:`.*`}),!c&&(0,q.jsx)(gf,{$on:t===`hide`,onClick:()=>x(h),title:v(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,q.jsx)(Bi,{size:12}):(0,q.jsx)(zi,{size:12})}),(0,q.jsx)(mf,{onClick:g,title:v(`close_search_esc`),type:`button`,children:(0,q.jsx)(Ri,{size:12})})]})}var df=v.div`
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
    ${_o}
`,ff=v.input`
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
`,pf=v.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,mf=v.button`
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
`,hf=v.button`
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
`,gf=v(hf)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function _f(e,t,n,r,i=[]){(0,R.useEffect)(()=>{let i=e.current;if(!i)return;let a=[...i.querySelectorAll(n)],o=()=>{for(let e of a)e.style.display=``,e.style.opacity=``};o(),CSS.highlights?.delete(`yafm-search`);let s=t?.open?t.query:``;if(!t||!s)return r(0),o;let c={query:s,matchCase:t.matchCase,regex:t.regex},l=new Set,u=[];for(let e of a){let t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT),n;for(;n=t.nextNode();){let t=Cn(n.nodeValue??``,c);if(t){for(let[e,r]of t){let t=document.createRange();t.setStart(n,e),t.setEnd(n,r),u.push(t)}l.add(e)}}}if(u.length>0&&typeof CSS<`u`&&`highlights`in CSS&&typeof Highlight<`u`&&CSS.highlights.set(`yafm-search`,new Highlight(...u)),t.mode===`hide`)for(let e of a)e.style.display=l.has(e)?``:`none`;else for(let e of a)e.style.opacity=l.has(e)?``:`0.35`;let d=[...l];return d.length>0&&d[Math.min(t.index,d.length-1)]?.scrollIntoView({block:`nearest`}),r(d.length),()=>{o(),CSS.highlights?.delete(`yafm-search`)}},[t?.open,t?.query,t?.matchCase,t?.regex,t?.mode,t?.index,n,...i])}function vf({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=o(),a=(0,R.useRef)(null),s=(0,R.useRef)(null),[c,l]=(0,R.useState)(null);return(0,R.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();l({top:t.bottom+6,left:t.left})},[]),(0,R.useLayoutEffect)(()=>{if(!c||!s.current)return;let e=s.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,c.top-e.height-12):c.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):c.left;(t!==c.top||n!==c.left)&&l({top:t,left:n})},[c]),(0,R.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{ref:a,style:{display:`none`}}),c&&(0,ro.createPortal)((0,q.jsxs)(yf,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:s,style:{position:`fixed`,top:c.top,left:c.left},children:[Object.keys(Ks).map(n=>(0,q.jsx)(bf,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Ks[n](16)},n)),(0,q.jsx)(bf,{onClick:async()=>{let e=await Va([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,q.jsx)(Ei,{size:13})}),r&&(0,q.jsx)(bf,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,q.jsx)(Ri,{size:12})})]}),document.body)]})}var yf=v.div`
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
    ${ho}
    transform-origin: top left;
`,bf=v.button`
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
`;function xf({source:e,poster:t,theme:n}){let r=A(e),i=e.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,a=K(e.startsWith(`builtin:`)||r?null:e,0,i?`.${i}`:``),o=t??cd(e,n)??(r?e:a),s=!t&&[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(i);return o?s?(0,q.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o}):(0,q.jsx)(`img`,{alt:``,src:o}):null}function Sf({source:e,video:t,height:n,offset:r,onCancel:i,onSave:a}){let s=o(),c=(0,R.useRef)(null),l=(0,R.useRef)(null),u=(0,R.useRef)(!1),[d,f]=(0,R.useState)(null),[p,m]=(0,R.useState)(null),[h,g]=(0,R.useState)(0),_=()=>{let t=c.current;if(!t)return;let n=t instanceof HTMLVideoElement?t.videoWidth:t.naturalWidth,r=t instanceof HTMLVideoElement?t.videoHeight:t.naturalHeight,i=t.getBoundingClientRect();e.startsWith(`data:image/svg`)?f({width:1920,height:1080}):n>0&&r>0&&f({width:n,height:r}),i.width>0&&i.height>0&&m({width:i.width,height:i.height})},v=p&&d?Math.min(p.height,n*(p.width/d.width)):0,y=Math.max(0,(p?.height??0)-v);(0,R.useEffect)(()=>{p&&d&&!u.current&&(u.current=!0,g(Math.min(y,Math.max(0,r*y))))},[p,d,y,r]),(0,R.useEffect)(()=>{let e=()=>_();return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]),(0,R.useEffect)(()=>{let e=window.requestAnimationFrame(_);return()=>window.cancelAnimationFrame(e)},[e,t]);let b=e=>{l.current={y:e.clientY,top:h},e.currentTarget.setPointerCapture(e.pointerId)},x=e=>{let t=l.current;t&&g(Math.min(y,Math.max(0,t.top+e.clientY-t.y)))},S=e=>{l.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)};return(0,q.jsx)(Uf,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,q.jsxs)(Wf,{children:[(0,q.jsxs)(Gf,{children:[(0,q.jsx)(`span`,{children:s(`adjust_banner_framing`)}),(0,q.jsx)(Qf,{onClick:i,title:s(`cancel`),type:`button`,children:(0,q.jsx)(Ri,{size:12})})]}),(0,q.jsx)(Kf,{children:s(`drag_the_frame_to_choose_the_visible_part`)}),(0,q.jsxs)(qf,{children:[t?(0,q.jsx)(`video`,{muted:!0,onLoadedMetadata:e=>{_(),e.currentTarget.currentTime=Math.min(.1,e.currentTarget.duration||0)},playsInline:!0,preload:`metadata`,ref:e=>{c.current=e},src:e}):(0,q.jsx)(`img`,{alt:``,draggable:!1,onLoad:_,ref:e=>{c.current=e},src:e}),v>0&&(0,q.jsx)(Jf,{onPointerCancel:S,onPointerDown:b,onPointerMove:x,onPointerUp:S,style:{height:v,top:h},children:(0,q.jsx)(Yf,{})})]}),(0,q.jsxs)(Xf,{children:[(0,q.jsx)(Zf,{onClick:i,type:`button`,children:s(`cancel`)}),(0,q.jsx)(Zf,{$primary:!0,onClick:()=>a(y>0?h/y:r),type:`button`,children:s(`save`)})]})]})})}var Cf=150,wf=120,Tf=200,Ef=v.div`
    position: relative;
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: ${({$flush:e})=>e?`0 26px 34px`:`14px 26px 34px`};
`,Df=v.div`
    position: relative;
    margin: 0 -26px 0;
    /* The artwork continues past the frame and dissolves there, so nothing is clipped at the
       bottom edge and there is no line where the picture ends and the page begins. */
    overflow: visible;
    background: transparent;
`,Of=v.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: calc(100% + ${Tf}px);
    overflow: hidden;
    pointer-events: none;
    /* Opaque for the whole frame, then a long fade over the extra strip. The stops use the frame
       height, not a percentage, so a tall banner never fades inside its own picture. */
    -webkit-mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Tf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Tf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Tf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Tf*.18)}px),
    transparent 100%);
    mask-image: linear-gradient(to bottom,
    #000 0,
    #000 calc(100% - ${Tf}px),
    rgba(0, 0, 0, 0.88) calc(100% - ${Math.round(Tf*.72)}px),
    rgba(0, 0, 0, 0.56) calc(100% - ${Math.round(Tf*.44)}px),
    rgba(0, 0, 0, 0.24) calc(100% - ${Math.round(Tf*.18)}px),
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
`,kf=v.div`
    position: absolute;
    right: 0;
    bottom: var(--banner-overlap, ${Cf}px);
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
`,Af=v.div`
    position: relative;
    z-index: 2;
    margin-top: ${({$offset:e})=>e?`${e}px`:`0`};
`,jf=v.section`
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
`,Mf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`,Nf=v.span`
    color: var(--text-secondary);
    font-size: 11px;
    font-weight: 600;
`,Pf=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`,Ff=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,If=v.input`
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
`,Lf=v.button`
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
`,Rf=v.div`
    position: relative;
    width: 132px;
    height: 72px;
`,zf=v.button`
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
`,Bf=v.button`
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
`,Vf=v.span`
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
`,Hf=v.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 10.5px;
`,Uf=v.div`
    position: fixed;
    inset: 0;
    z-index: 4000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(6px);
`,Wf=v.div`
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
`,Gf=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
`,Kf=v.p`
    margin: 0;
    color: var(--text-muted);
    font-size: 11px;
`,qf=v.div`
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
`,Jf=v.div`
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
`,Yf=v.span`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 72px;
    height: 4px;
    transform: translate(-50%, -50%);
    border-radius: 999px;
    background: var(--accent-primary);
    box-shadow: 0 0 10px rgba(var(--accent-rgb), 0.55);
`,Xf=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Zf=v.button`
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
`,Qf=v.button`
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
`,$f=v.button`
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
`,ep=v.div`
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
`,tp=v.div`
    display: flex;
    padding: 2px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,np=v.button`
    width: 24px;
    padding: 2px 0;
    border: 0;
    border-radius: 4px;
    background: ${({$active:e})=>e?`rgba(var(--accent-secondary-rgb), 0.22)`:`transparent`};
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;
`,rp=v.button`
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
`,ip=v.div`
    position: relative;
    display: inline-flex;
`,ap=v.div`
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
`,op=v.button`
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
`,sp=v.div`
    display: grid;
    grid-template-columns: repeat(${({$columns:e})=>e}, minmax(0, 1fr));
    gap: 24px 26px;
    align-items: start;
`,cp=v.section`
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
`,lp=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,up=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,dp=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,fp=v.h1`
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    white-space: nowrap;
`,pp=v.input`
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
`,mp=v.button`
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
`,hp=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 10px;
`,gp=v.div`
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
`,_p=v.span`
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
`,vp=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;

    strong {
        font-size: 13px;
        font-weight: 600;
    }
`,yp=v.span`
    overflow: hidden;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,bp=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`,xp=v.button`
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
`,Sp=v.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
    flex: 1;

    strong {
        font-size: 12.5px;
        font-weight: 500;
    }
`,Cp=v.button`
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
`,wp=v.span`
    width: 100px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Tp=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
`,Ep=v.div`
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
`,Dp=v.div`
    max-height: 320px;
    padding: 4px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    overflow-y: auto;
`,Op=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 4px;
`,kp=v.button`
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
`,Ap=v.span`
    position: relative;
    display: inline-grid;
    place-items: center;
    flex-shrink: 0;
`,jp=v.button`
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
`,Mp=v.button`
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
`,Np=v.button`
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
`,Pp=v.span`
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
`,Fp=v.button`
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
`,Ip=v.p`
    margin-bottom: 12px;
    padding: 8px 10px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 12px;
    color: #fcd34d;
`,Lp=v.p`
    padding: 14px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    font-size: 12px;
    color: var(--text-muted);
    text-align: center;
`,Rp=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,zp=v.div`
    display: flex;
    gap: 6px;
    align-items: center;
`,Bp=v.input`
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
`,Vp=v.section`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 8px 10px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.28);
`,Hp=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 2px 2px 6px;
    border-bottom: 1px solid var(--border-color);

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,Up=v.strong`
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Wp=v.span`
    margin-left: auto;
    padding: 1px 7px;
    border-radius: 999px;
    background: ${({$online:e})=>e?`rgba(var(--accent-rgb), 0.14)`:`rgba(148, 163, 184, 0.12)`};
    color: ${({$online:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    font-size: 9.5px;
    white-space: nowrap;
`,Gp=v.button`
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
`;function Kp({theme:e,places:t,drives:n,recent:r,recentLimit:i,homePath:a,historyVersion:s,onOpen:c,onPlacesChanged:u,onRecentCleared:d,onLayoutChanged:f,onHistoryChanged:p,onDrivesChanged:m,visibilityVersion:h=0,find:g,onSearchMatches:_,readOnly:v=!1,onPick:y,selectCards:b=!1,onSelectionChange:w,onAddToTray:T,onAddFavorite:ee,onRemoveFavorite:te,favoritePaths:E,onExtractArchive:D,settingsVersion:O=0,platform:k}){let j=o(),re=Rn(),[M,ae]=(0,R.useState)(!1),[N,se]=(0,R.useState)(null),ce=N?.overviewBanner??null,F=ce?.startsWith(`builtin:`)??!1,I=ce?.startsWith(`url:`)?ce.slice(4):A(ce)?ce:null,le=F||I?``:ce??``,ue=F?``:I?I.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``:le.split(/[?#]/)[0].split(`.`).pop()?.toLowerCase()??``,de=F?ld(ce):[`mp4`,`webm`,`mkv`,`mov`,`m4v`,`ogv`].includes(ue),fe=K(le.length>0?le:null,0,ue?`.${ue}`:``),pe=ce?cd(ce,e)??I??fe:null,[me,he]=(0,R.useState)(``),[ge,L]=(0,R.useState)(null),[_e,z]=(0,R.useState)(!1),[ve,ye]=(0,R.useState)(null),[be,xe]=(0,R.useState)(null),[we,Te]=(0,R.useState)(null),[Ee,De]=(0,R.useState)([]),[Oe,ke]=(0,R.useState)(null),[Ae,je]=(0,R.useState)(``),[Ne,Pe]=(0,R.useState)(null),[B,Fe]=(0,R.useState)(null),Ie=xl(`overview`),[Le,Re]=(0,R.useState)(null),[ze,V]=(0,R.useState)(null),Be=(0,R.useRef)(null),Ve=(0,R.useRef)(null),He=(0,R.useRef)(null),Ue=(0,R.useRef)(null),Ke=(0,R.useRef)(null),qe=ze??N?.overviewBannerHeight??220,[Je,Ye]=(0,R.useState)(0),[Xe,Qe]=(0,R.useState)(null),$e=Math.min(1,Math.max(0,N?.overviewBannerOffset??.3)),et=qe+Tf,tt=Xe&&Je>0?Xe.height*(Je/Xe.width):et,nt=tt>0&&tt<et+240?(et+240)/tt:1,rt=Math.max(1,Math.round(Je*nt)),it=Math.max(0,tt*nt-et),at=Math.min(wf,it/2,Math.max(20,qe*.42)),st=at+$e*Math.max(0,it-at*2),[ct,lt]=(0,R.useState)(!1),ut=(e,t=!1)=>b?(Pe(e),Fe({path:e,isDirectory:t}),w?.([e]),!0):!1,dt=(e,t,n)=>{e.preventDefault(),e.stopPropagation(),Pe(t),Fe({path:t,isDirectory:n}),Re({x:e.clientX,y:e.clientY,target:{path:t,isDirectory:n}})};(0,R.useEffect)(()=>(ml(`overview`,B?(e,t)=>Re({x:e,y:t,target:B}):null),()=>ml(`overview`,null)),[B]);let ft=(e,t)=>c(e,t);(0,R.useEffect)(()=>{Ze().then(se,()=>se(null))},[O]),(0,R.useEffect)(()=>{if(l.available)return Jc().then(De,()=>void 0),l.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&De(t.data.peers)})},[]),(0,R.useEffect)(()=>{let e=He.current;if(!e)return;let t=0,n=()=>{t=0;let n=Math.max(e.scrollHeight-e.clientHeight,1),r=Math.min(Math.max(e.scrollTop/n,0),1);e.style.setProperty(`--banner-progress`,`${r}`)},r=()=>{t===0&&(t=window.requestAnimationFrame(n))};return e.addEventListener(`scroll`,r,{passive:!0}),n(),()=>{e.removeEventListener(`scroll`,r),t!==0&&window.cancelAnimationFrame(t)}},[]),(0,R.useEffect)(()=>{if(F&&!de){Qe({width:1920,height:1080});return}Qe(null);let e=Ke.current;e?.complete&&e.naturalWidth>0&&Qe({width:e.naturalWidth,height:e.naturalHeight})},[ce,F,de]),(0,R.useEffect)(()=>{let e=Ue.current;if(!e)return;let t=()=>Ye(e.clientWidth);t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[N?.overviewBanner]),(0,R.useEffect)(()=>{if(!ge)return;let e=()=>L(null),t=e=>{e.target?.closest(`[data-icon-menu]`)||L(null)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),document.addEventListener(`scroll`,e,!0),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e),document.removeEventListener(`scroll`,e,!0)}},[ge]),(0,R.useEffect)(()=>{if(!_e)return;let e=()=>z(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[_e]);let pt=Js(N),mt=pt.map(e=>e.id),H=(0,R.useRef)(null),ht=e=>ge?.kind===`panel`&&ge.id===e,gt=e=>ge?.kind===`place`&&ge.id===e;(0,R.useEffect)(()=>{if(!l.available)return;let e=pt.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path??a).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`overview`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`overview`}})},[pt.map(e=>e.path??e.id).join(`|`),a]),_f(H,g??null,`section`,_??(()=>void 0),[r.length,t.length,n.length,h]);let vt=async(e,t)=>{let n={...N?.placeIcons};t?n[e]=t:delete n[e],L(null),await Ct({placeIcons:n}),u(await Me())},yt=async(e,t)=>{let n={...N?.placeNames},r=t.trim();r.length>0?n[e]=r:delete n[e],xe(null),await Ct({placeNames:n}),u(await Me())},bt=e=>{Te(null),ye({drive:e,label:e.label||`Local Disk`})},xt=async()=>{if(!ve)return;let{drive:e,label:t}=ve;ye(null);let n=await Se(e.name,t.trim());n.ok?(Te(null),m?.()):Te(n.needsAdmin?`Windows needs administrator rights to rename a volume. Restart the app as administrator and try again.`:n.error??`Windows refused the volume label.`)},St=N?.overviewColumns??1,Ct=async e=>{if(!N)return;let t={...N,...e,overviewPanels:e.overviewPanels??mt,overviewHidden:[]};se(await ot(t)),f?.()},wt=async()=>{await Ct({overviewPanels:[...Us],overviewTitles:null,overviewViews:null,overviewIcons:null,overviewPinned:null,panelPlaces:null,quickAccess:null,placeNames:null,placeIcons:null,favorites:[]}),u(await Me()),ae(!1)},Tt=async()=>{let e=await Va([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.avif`,`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`]);if(!e)return;let t=N?.overviewBanners??[];await Ct({overviewBanner:e,overviewBanners:t.includes(e)?t:[...t,e]})},Et=async()=>{let e=me.trim();if(!N||!A(e))return;let t=N.overviewBanners??[];he(``),await Ct({overviewBanner:`url:${e}`,overviewBanners:t.includes(e)?t:[...t,e]})},Dt=()=>void Ct({overviewBanner:null}),Ot=e=>void Ct({overviewBanners:(N?.overviewBanners??[]).filter(t=>t!==e),...N?.overviewBanner===e||N?.overviewBanner===`url:${e}`?{overviewBanner:null}:{}}),kt=e=>{Be.current={y:e.clientY,height:qe},e.currentTarget.setPointerCapture(e.pointerId)},At=e=>{let t=Be.current;if(!t)return;let n=Math.min(900,Math.max(120,t.height+e.clientY-t.y));Ve.current=n,V(n)},jt=e=>{Be.current=null,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId),Ve.current!==null&&(Ct({overviewBannerHeight:Ve.current}),Ve.current=null)},Mt=(e,t)=>{let n=mt.indexOf(e),r=n+t;if(n<0||r<0||r>=mt.length)return;let i=[...mt];[i[n],i[r]]=[i[r],i[n]],Ct({overviewPanels:i})},Nt=(e,t)=>{let n={...N?.overviewTitles},r=t.trim();r.length>0?n[e]=r:delete n[e],Ct({overviewTitles:n})},Pt=(e,t)=>void Ct({overviewViews:{...N?.overviewViews,[e]:t}}),Ft=e=>{let t=N?.overviewPinned??pt.filter(e=>e.pinned).map(e=>e.id);Ct({overviewPinned:pt.find(t=>t.id===e)?.pinned?t.filter(t=>t!==e):[...t,e]})},It=e=>{L(null);let t=t=>{let n={...t};return delete n[e],n},n=N?.overviewPinned??pt.filter(e=>e.pinned).map(e=>e.id);Ct({overviewPanels:mt.filter(t=>t!==e),overviewPinned:n.filter(t=>t!==e),overviewTitles:t(N?.overviewTitles),overviewViews:t(N?.overviewViews),overviewIcons:t(N?.overviewIcons),panelPlaces:t(N?.panelPlaces)})},Lt=(e,t)=>{let n={...N?.overviewIcons};t?n[e]=t:delete n[e],L(null),Ct({overviewIcons:n})},Rt=async e=>{if(!N)return;if(e===`folder`){let e=await Ba();if(!e)return;let t=`folder:${e}`;mt.includes(t)||await Ct({overviewPanels:[...mt,t]});return}if(e===`quick`){let e=2;for(;mt.includes(`quick:${e}`);)e+=1;await Ct({overviewPanels:[...mt,`quick:${e}`]});return}let t=e;for(let n=2;mt.includes(t);n+=1)t=`${e}:${n}`;await Ct({overviewPanels:[...mt,t]})},zt=async e=>{let n=await Ba();if(!n)return;if(e.id===`quick`){await Ct({quickAccess:[...new Set([...t.map(e=>e.path),n])]}),u(await Me());return}let r=e.places??[];r.some(e=>P(e,n))||await Ct({panelPlaces:{...N?.panelPlaces,[e.id]:[...r,n]}})},Bt=async(e,n)=>{L(null),e.id===`quick`?(await Ct({quickAccess:t.filter(e=>!P(e.path,n)).map(e=>e.path)}),u(await Me())):await Ct({panelPlaces:{...N?.panelPlaces,[e.id]:(e.places??[]).filter(e=>!P(e,n))}})},Vt=async(e,n,r)=>{if(P(n,r))return;let i=e.id===`quick`?t.map(e=>e.path):e.places??[],a=i.findIndex(e=>P(e,n)),o=i.findIndex(e=>P(e,r));if(a<0||o<0)return;let s=[...i],[c]=s.splice(a,1);s.splice(o,0,c),e.id===`quick`?(await Ct({quickAccess:s}),u(await Me())):await Ct({panelPlaces:{...N?.panelPlaces,[e.id]:s}})},Ht=(e,t)=>({draggable:M,onDragOver:e=>{M&&(e.preventDefault(),e.dataTransfer.dropEffect=`move`)},onDragStart:e=>{M&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.setData(`text/plain`,t))},onDrop:n=>{M&&(n.preventDefault(),Vt(e,n.dataTransfer.getData(`text/plain`),t))}}),Ut=e=>e.id===`quick`?t:(e.places??[]).map(e=>{let n=t.find(t=>P(t.path,e));return{name:N?.placeNames?.[e]??n?.name??(x(e)||e),path:e,kind:`folder`,icon:n?.icon??N?.placeIcons?.[e]??null}}),Wt=e=>{if(r.length===0)return(0,q.jsx)(Lp,{children:j(`files_and_folders_you_open_show_up_here`)});let t=r.slice(0,i);return e.view===`grid`?(0,q.jsx)(hp,{children:t.map(e=>{let t=zn(re,e.path);return(0,q.jsxs)(gp,{$plain:!1,$selected:Ne===e.path,onClick:t=>{ut(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Jt(t)):Ce(e.path))},onDoubleClick:()=>c(e.path,!1),onContextMenu:t=>dt(t,e.path,e.isDirectory),title:e.path,children:[(0,q.jsx)(_p,{children:t&&re.useIcons?(0,q.jsx)(Zs,{place:t,size:18}):(0,q.jsx)(hc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(vp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(yp,{children:e.path})]})]},e.path)})}):(0,q.jsx)(bp,{children:t.map(e=>{let t=zn(re,e.path);return(0,q.jsxs)(xp,{$selected:Ne===e.path,onClick:t=>{ut(e.path,e.isDirectory)||(e.isDirectory?c(e.path,Jt(t)):Ce(e.path))},onDoubleClick:()=>c(e.path,!1),onContextMenu:t=>dt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&re.useIcons?(0,q.jsx)(Zs,{place:t,size:15}):(0,q.jsx)(hc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(Sp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(yp,{children:e.path})]})]},e.path)})})},Kt=e=>{let t=N?.favorites??[],n=async e=>{await Ct({favorites:t.filter(t=>t.path!==e)})},r=async(e,n)=>{e&&!t.some(t=>P(t.path,e))&&await Ct({favorites:[...t,{path:e,name:x(e)||e,isDirectory:n}]})},i=(e,t,n)=>{M||ut(t,n)||(n?c(t,Jt(e)):Ce(t))},a=M?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(Cp,{$row:e.view===`list`,onClick:()=>void Va().then(e=>r(e,!1)),title:j(`pin_any_file_here`),type:`button`,children:[e.view===`list`?(0,q.jsx)(Ei,{size:15}):(0,q.jsx)(_p,{children:(0,q.jsx)(Ei,{size:15})}),e.view===`list`?(0,q.jsxs)(Sp,{children:[(0,q.jsx)(`strong`,{children:j(`add_file`)}),(0,q.jsx)(yp,{children:j(`pin_any_file_here`)})]}):(0,q.jsxs)(vp,{children:[(0,q.jsx)(`strong`,{children:j(`add_file`)}),(0,q.jsx)(yp,{children:j(`pin_any_file_here`)})]})]}),(0,q.jsxs)(Cp,{$row:e.view===`list`,onClick:()=>void Ba().then(e=>r(e,!0)),title:j(`pin_any_folder_here`),type:`button`,children:[e.view===`list`?(0,q.jsx)(Ei,{size:15}):(0,q.jsx)(_p,{children:(0,q.jsx)(Ei,{size:15})}),e.view===`list`?(0,q.jsxs)(Sp,{children:[(0,q.jsx)(`strong`,{children:j(`add_folder`)}),(0,q.jsx)(yp,{children:j(`pin_any_folder_here`)})]}):(0,q.jsxs)(vp,{children:[(0,q.jsx)(`strong`,{children:j(`add_folder`)}),(0,q.jsx)(yp,{children:j(`pin_any_folder_here`)})]})]})]}):null;return t.length===0&&!M?(0,q.jsx)(Lp,{children:j(`no_favorites_yet_right_click_any_file_or_folder_and_add_it_here`)}):e.view===`grid`?(0,q.jsxs)(hp,{children:[t.map(e=>{let t=zn(re,e.path);return(0,q.jsxs)(gp,{$plain:M,$selected:Ne===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!M&&c(e.path,!1),onContextMenu:t=>!M&&dt(t,e.path,e.isDirectory),title:e.path,children:[M&&(0,q.jsx)(Mp,{onClick:t=>{t.stopPropagation(),n(e.path)},title:j(`remove_from_favorites`),type:`button`,children:(0,q.jsx)(Ri,{size:11})}),(0,q.jsx)(_p,{children:t&&re.useIcons?(0,q.jsx)(Zs,{place:t,size:18}):(0,q.jsx)(hc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(vp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(yp,{children:e.path})]})]},e.path)}),a]}):(0,q.jsxs)(bp,{children:[t.map(e=>{let t=zn(re,e.path);return(0,q.jsxs)(xp,{$selected:Ne===e.path,onClick:t=>i(t,e.path,e.isDirectory),onDoubleClick:()=>!M&&c(e.path,!1),onContextMenu:t=>!M&&dt(t,e.path,e.isDirectory),title:e.path,type:`button`,children:[t&&re.useIcons?(0,q.jsx)(Zs,{place:t,size:15}):(0,q.jsx)(hc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:15}),(0,q.jsxs)(Sp,{children:[(0,q.jsx)(`strong`,{children:t?.name||e.name}),(0,q.jsx)(yp,{children:e.path})]}),M&&(0,q.jsx)(Mp,{$inline:!0,onClick:t=>{t.stopPropagation(),n(e.path)},title:j(`remove_from_favorites`),type:`button`,children:(0,q.jsx)(Ri,{size:11})})]},e.path)}),a]})},qt=e=>{if(n.length===0)return(0,q.jsx)(Lp,{children:j(`no_drives_are_available`)});let t=n.map(t=>{let n=t.totalSize>0?1-t.freeSpace/t.totalSize:0,r=ve?.drive.name===t.name,i=r?(0,q.jsx)(qp,{maxLength:32,onCancel:()=>ye(null),onChange:e=>ye({...ve,label:e}),onCommit:()=>void xt(),value:ve?.label??``}):(0,q.jsx)(q.Fragment,{children:ie(t)}),a=!r&&M&&(0,q.jsx)(Np,{onClick:e=>{e.stopPropagation(),bt(t)},title:j(`rename_volume`),type:`button`,children:(0,q.jsx)(ra,{size:11})}),o=(0,q.jsx)(yp,{children:j(`free_free_of_total`,{free:C(t.freeSpace),total:C(t.totalSize)})});return e.view===`grid`?(0,q.jsxs)(gp,{$plain:!1,$selected:Ne===t.name,onClick:e=>{!r&&ut(t.name,!0)||r||c(t.name,Jt(e))},onDoubleClick:()=>!r&&c(t.name,!1),onContextMenu:e=>!r&&dt(e,t.name,!0),title:t.name,children:[(0,q.jsx)(_p,{children:(0,q.jsx)(Si,{size:18})}),(0,q.jsxs)(vp,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]})]},t.name):(0,q.jsxs)(xp,{as:r?`div`:`button`,$selected:Ne===t.name,onClick:r?void 0:e=>{ut(t.name,!0)||c(t.name,Jt(e))},onDoubleClick:r?void 0:()=>c(t.name,!1),onContextMenu:r?void 0:e=>dt(e,t.name,!0),title:t.name,type:r?void 0:`button`,children:[(0,q.jsx)(Si,{size:18}),(0,q.jsxs)(Sp,{children:[(0,q.jsxs)(`strong`,{children:[i,r&&ne(t),a]}),o]}),(0,q.jsx)(wp,{children:(0,q.jsx)(Tp,{$used:n,$tone:S(n)})})]},t.name)});return e.view===`grid`?(0,q.jsx)(hp,{children:t}):(0,q.jsx)(bp,{children:t})},Yt=()=>{let e=async e=>{ke(e.id);try{await Yc(e.host,e.port)}finally{ke(null)}},t=async()=>{let e=Ae.trim(),t=e.lastIndexOf(`:`);if(t<=0)return;let n=e.slice(0,t).replace(/^\[|\]$/g,``),r=Number(e.slice(t+1));if(!(!Number.isFinite(r)||r<=0||r>65535)){ke(`manual`);try{await Yc(n,r)}finally{ke(null)}}};return(0,q.jsxs)(Rp,{children:[(0,q.jsxs)(zp,{children:[(0,q.jsx)(Bp,{onChange:e=>je(e.target.value),onKeyDown:e=>{e.key===`Enter`&&t()},placeholder:j(`address_e_g_192_168_1_20_45701`),value:Ae}),(0,q.jsx)(Gp,{disabled:Oe!==null||!Ae.includes(`:`),onClick:()=>void t(),type:`button`,children:j(Oe===`manual`?`pairing`:`pair_by_address`)})]}),Ee.length===0&&(0,q.jsx)(Lp,{children:j(`no_sharing_devices_on_this_network_yet_pair_one_by_address_or_share_a_folder_from_the_title_bar`)}),Ee.map(t=>(0,q.jsxs)(Vp,{children:[(0,q.jsxs)(Hp,{children:[(0,q.jsx)(_a,{size:14}),(0,q.jsx)(Up,{title:t.host,children:t.name}),(0,q.jsx)(Wp,{$online:t.online,children:t.paired?t.online?j(`paired`):j(`offline`):j(`not_paired`)}),!t.paired&&t.online&&(0,q.jsx)(Gp,{disabled:Oe===t.id,onClick:()=>void e(t),type:`button`,children:Oe===t.id?j(`pairing`):j(`pair`)})]}),t.paired&&t.shares.length===0&&(0,q.jsx)(yp,{children:j(`no_folders_are_shared_with_the_app_on_this_device`)}),t.shares.map(e=>(0,q.jsxs)(xp,{onClick:n=>c(tl(t.id,e.id),Jt(n)),title:`${t.name} · ${e.name}`,type:`button`,children:[(0,q.jsx)(_a,{size:14}),(0,q.jsxs)(Sp,{children:[(0,q.jsx)(`strong`,{children:e.name}),(0,q.jsx)(yp,{children:t.name})]}),(0,q.jsx)(ya,{size:12})]},e.id))]},t.id))]})},Xt=e=>{switch(e.kind){case`share`:return Yt();case`favorites`:return Kt(e);case`quick`:{let t=Ut(e);return!M&&t.length===0?(0,q.jsx)(Lp,{children:j(`no_folders_in_this_quick_access_panel_yet`)}):e.view===`grid`?(0,q.jsxs)(hp,{children:[t.map(t=>(0,q.jsxs)(gp,{$plain:M,$selected:Ne===t.path,...Ht(e,t.path),onClick:e=>{!M&&!ut(t.path,!0)&&c(t.path,Jt(e))},onDoubleClick:()=>!M&&c(t.path,!1),onContextMenu:e=>!M&&dt(e,t.path,!0),title:t.path,children:[M&&(0,q.jsx)(Mp,{onClick:n=>{n.stopPropagation(),Bt(e,t.path)},title:j(`remove_from_quick_access`),type:`button`,children:(0,q.jsx)(Ri,{size:11})}),(0,q.jsxs)(Ap,{children:[M?(0,q.jsx)(jp,{onClick:e=>{e.stopPropagation(),L(gt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:j(`change_icon`),type:`button`,children:(0,q.jsx)(_p,{children:(0,q.jsx)(Zs,{place:t})})}):(0,q.jsx)(_p,{children:(0,q.jsx)(Zs,{place:t})}),gt(t.path)&&(0,q.jsx)(vf,{onPick:e=>void vt(t.path,e),value:N?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(vp,{children:[be?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(qp,{onCancel:()=>xe(null),onChange:e=>xe({path:t.path,name:e}),onCommit:()=>void yt(t.path,be?.name??``),value:be?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,M&&(0,q.jsx)(Np,{onClick:e=>{e.stopPropagation(),L(null),xe({path:t.path,name:t.name})},title:j(`rename_folder`),type:`button`,children:(0,q.jsx)(ra,{size:11})})]}),(0,q.jsx)(yp,{children:t.path})]})]},t.path)),M&&(0,q.jsxs)(Cp,{onClick:()=>void zt(e),title:j(`pin_a_folder_here`),type:`button`,children:[(0,q.jsx)(_p,{children:(0,q.jsx)(Ei,{size:15})}),(0,q.jsxs)(vp,{children:[(0,q.jsx)(`strong`,{children:j(`add_folder`)}),(0,q.jsx)(yp,{children:j(`pin_a_directory_here`)})]})]})]}):(0,q.jsxs)(bp,{children:[t.map(t=>(0,q.jsxs)(xp,{$selected:Ne===t.path,...Ht(e,t.path),onClick:e=>{!M&&!ut(t.path,!0)&&c(t.path,Jt(e))},onDoubleClick:()=>!M&&c(t.path,!1),onContextMenu:e=>!M&&dt(e,t.path,!0),title:t.path,type:`button`,children:[(0,q.jsxs)(Ap,{children:[M?(0,q.jsx)(jp,{onClick:e=>{e.stopPropagation(),L(gt(t.path)?null:{kind:`place`,id:t.path})},onPointerDown:e=>e.stopPropagation(),title:j(`change_icon`),type:`button`,children:(0,q.jsx)(Zs,{place:t,size:15})}):(0,q.jsx)(Zs,{place:t,size:15}),gt(t.path)&&(0,q.jsx)(vf,{onPick:e=>void vt(t.path,e),value:N?.placeIcons?.[t.path]??t.icon})]}),(0,q.jsxs)(Sp,{children:[be?.path===t.path?(0,q.jsx)(`strong`,{children:(0,q.jsx)(qp,{onCancel:()=>xe(null),onChange:e=>xe({path:t.path,name:e}),onCommit:()=>void yt(t.path,be?.name??``),value:be?.name??``})}):(0,q.jsxs)(`strong`,{children:[t.name,M&&(0,q.jsx)(Np,{onClick:e=>{e.stopPropagation(),L(null),xe({path:t.path,name:t.name})},title:j(`rename_folder`),type:`button`,children:(0,q.jsx)(ra,{size:11})})]}),(0,q.jsx)(yp,{children:t.path})]}),M&&(0,q.jsx)(Mp,{$inline:!0,onClick:n=>{n.stopPropagation(),Bt(e,t.path)},title:j(`remove_from_quick_access`),type:`button`,children:(0,q.jsx)(Ri,{size:11})})]},t.path)),M&&(0,q.jsxs)(Cp,{$row:!0,onClick:()=>void zt(e),title:j(`pin_a_folder_here`),type:`button`,children:[(0,q.jsx)(Ei,{size:15}),(0,q.jsxs)(Sp,{children:[(0,q.jsx)(`strong`,{children:j(`add_folder`)}),(0,q.jsx)(yp,{children:j(`pin_a_directory_here`)})]})]})]})}case`frequent`:return(0,q.jsx)(Jp,{mode:e.view,onContextMenu:dt,onOpen:c,onSelectionChange:w,selectCards:b,version:s});case`recent`:return Wt(e);case`drives`:return qt(e);default:return(0,q.jsx)(Yp,{mode:e.view,onContextMenu:dt,onOpen:c,onPick:y,onSelectionChange:w,selectCards:b,openOnSingleClick:N?.openOnSingleClick??!1,path:e.path??a,platform:k,selectionMenuId:`overview:${e.id}`,showCheckboxes:N?.showCheckboxes??!0,visibilityVersion:h})}};return(0,q.jsxs)(Ef,{$flush:!!N?.overviewBanner,ref:He,children:[!v&&(0,q.jsxs)(ep,{$overlay:!!N?.overviewBanner,children:[(0,q.jsx)(tp,{role:`group`,title:j(`columns`),children:[1,2,3,4,5].map(e=>(0,q.jsx)(np,{$active:St===e,onClick:()=>void Ct({overviewColumns:e}),title:oe(j,e,`k_1_column`,`count_columns`),type:`button`,children:e},e))}),M&&(0,q.jsxs)(ip,{children:[(0,q.jsxs)(rp,{onClick:()=>z(e=>!e),onPointerDown:e=>e.stopPropagation(),title:j(`add_a_panel`),type:`button`,children:[(0,q.jsx)(Ei,{size:12}),j(`add_panel`)]}),_e&&(0,q.jsx)(ap,{onPointerDown:e=>e.stopPropagation(),children:[`quick`,`recent`,`frequent`,`home`,`drives`,`share`,`favorites`,`folder`].map(e=>(0,q.jsx)(op,{onClick:()=>{z(!1),Rt(e)},type:`button`,children:j(e===`quick`?`quick_access`:e===`recent`?`recent`:e===`frequent`?`frequent`:e===`home`?`home`:e===`drives`?`this_pc`:e===`share`?`shared`:e===`favorites`?`favorites`:`folder_2`)},e))})]}),M&&(0,q.jsxs)(rp,{onClick:()=>void wt(),title:j(`put_every_panel_back_the_way_the_app_ships_it`),type:`button`,children:[(0,q.jsx)(Ti,{size:12}),j(`restore_default_panels`)]}),Ie.available&&(0,q.jsx)(mp,{onClick:e=>Ie.open(e.clientX,e.clientY),title:j(`selection_menu`),type:`button`,children:(0,q.jsx)(Aa,{size:14})}),(0,q.jsxs)(rp,{onClick:()=>{ae(e=>!e),z(!1),L(null),xe(null),ye(null)},title:j(M?`done`:`edit`),type:`button`,children:[M?(0,q.jsx)(Li,{size:13}):(0,q.jsx)(ra,{size:13}),j(M?`done`:`edit`)]})]}),we&&(0,q.jsx)(Ip,{children:we}),N?.overviewBanner&&(0,q.jsxs)(Df,{ref:Ue,style:{height:`${qe}px`,"--banner-image-width":`${rt}px`,"--banner-image-shift":`${st}px`,"--banner-travel":`${at}px`,"--banner-overlap":`0px`},children:[(0,q.jsx)(Of,{children:de?(0,q.jsx)(`video`,{autoPlay:!0,loop:!0,muted:!0,onLoadedMetadata:e=>{e.currentTarget.videoWidth>0&&e.currentTarget.videoHeight>0&&Qe({width:e.currentTarget.videoWidth,height:e.currentTarget.videoHeight})},playsInline:!0,src:pe??void 0}):(0,q.jsx)(`img`,{alt:``,onLoad:e=>{let t=F?1920:e.currentTarget.naturalWidth||1920,n=F?1080:e.currentTarget.naturalHeight||1080;Qe({width:t,height:n})},ref:Ke,src:pe??void 0})}),M&&(0,q.jsx)(kf,{onDoubleClick:()=>{Ve.current=null,V(null),Ct({overviewBannerHeight:220})},onPointerCancel:jt,onPointerDown:kt,onPointerMove:At,onPointerUp:jt,title:j(`drag_to_resize_double_click_to_reset`)})]}),(0,q.jsxs)(Af,{$offset:N?.overviewBanner?100:0,children:[M&&(0,q.jsxs)(jf,{children:[(0,q.jsxs)(Mf,{children:[(0,q.jsx)(Nf,{children:j(`banners`)}),N?.overviewBanner&&(0,q.jsxs)(rp,{onClick:()=>lt(!0),title:j(`adjust_framing`),type:`button`,children:[(0,q.jsx)(ra,{size:12}),j(`adjust_framing`)]})]}),(0,q.jsxs)(Pf,{children:[(0,q.jsx)(Rf,{children:(0,q.jsx)(zf,{$active:!N?.overviewBanner,onClick:Dt,title:j(`no_banner`),type:`button`,children:(0,q.jsxs)(Hf,{children:[(0,q.jsx)(Ri,{size:16}),(0,q.jsx)(`span`,{children:j(`no_banner`)})]})})}),ad.map(t=>(0,q.jsx)(Rf,{children:(0,q.jsx)(zf,{$active:N?.overviewBanner===t.id,onClick:()=>void Ct({overviewBanner:t.id}),title:`${j(t.concept)} · ${j(t.preset)}`,type:`button`,children:(0,q.jsx)(xf,{source:t.id,theme:e})})},t.id)),rd.map(t=>(0,q.jsx)(Rf,{children:(0,q.jsxs)(zf,{$active:N?.overviewBanner===t.id,onClick:()=>void Ct({overviewBanner:t.id}),title:j(t.name),type:`button`,children:[(0,q.jsx)(xf,{poster:t.poster,source:t.id,theme:e}),(0,q.jsx)(Vf,{children:(0,q.jsx)(Gi,{size:11})})]})},t.id)),(N?.overviewBanners??[]).map(t=>(0,q.jsxs)(Rf,{children:[(0,q.jsx)(zf,{$active:N?.overviewBanner===t||N?.overviewBanner===`url:${t}`,onClick:()=>void Ct({overviewBanner:A(t)?`url:${t}`:t}),title:t,type:`button`,children:(0,q.jsx)(xf,{source:t,theme:e})}),(0,q.jsx)(Bf,{onClick:()=>Ot(t),title:j(`remove`),type:`button`,children:(0,q.jsx)(Ri,{size:10})})]},t)),(0,q.jsxs)($f,{onClick:()=>void Tt(),title:j(`add_banner`),type:`button`,children:[(0,q.jsx)(Ei,{size:18}),(0,q.jsx)(`span`,{children:j(`add_banner`)})]})]}),(0,q.jsxs)(Ff,{children:[(0,q.jsx)(If,{onChange:e=>he(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Et()},placeholder:`https://…`,value:me}),(0,q.jsx)(Lf,{disabled:!A(me),onClick:()=>void Et(),type:`button`,children:j(`add_url`)})]})]}),(0,q.jsx)(sp,{ref:H,$columns:St,children:pt.map(e=>{let t=mt.indexOf(e.id);return(0,q.jsxs)(cp,{children:[(0,q.jsxs)(lp,{children:[(0,q.jsxs)(up,{children:[(0,q.jsxs)(Ap,{children:[M?(0,q.jsx)(jp,{onClick:()=>L(ht(e.id)?null:{kind:`panel`,id:e.id}),onPointerDown:e=>e.stopPropagation(),title:j(`change_icon`),type:`button`,children:(0,q.jsx)(Xs,{panel:e,size:15})}):(0,q.jsx)(Xs,{panel:e,size:15}),ht(e.id)&&(0,q.jsx)(vf,{onPick:t=>Lt(e.id,t),value:e.icon})]}),M?(0,q.jsx)(pp,{defaultValue:e.title,onBlur:t=>Nt(e.id,t.target.value),onKeyDown:e=>{e.key===`Enter`&&e.target.blur()}}):(0,q.jsx)(fp,{children:j(e.title)})]}),(0,q.jsxs)(dp,{children:[!M&&e.kind===`recent`&&(0,q.jsx)(rp,{onClick:()=>void We().then(d),title:j(`clear`),type:`button`,children:j(`clear`)}),!M&&e.kind===`frequent`&&(0,q.jsx)(rp,{onClick:()=>void Ge().then(()=>p?.()),title:j(`clear_the_frequent_list`),type:`button`,children:j(`clear`)}),!M&&(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(rp,{onClick:()=>c(e.path??a),title:j(`open_folder`),type:`button`,children:j(`open`)}),M&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(mp,{$active:e.pinned,onClick:()=>Ft(e.id),title:e.pinned?j(`unpin_from_the_sidebar`):j(`pin_to_the_sidebar`),type:`button`,children:(0,q.jsx)(ji,{size:12})}),(0,q.jsx)(mp,{$active:e.view===`list`,onClick:()=>Pt(e.id,`list`),title:j(`list`),type:`button`,children:(0,q.jsx)(Mi,{size:13})}),(0,q.jsx)(mp,{$active:e.view===`grid`,onClick:()=>Pt(e.id,`grid`),title:j(`grid`),type:`button`,children:(0,q.jsx)(Ni,{size:13})}),(0,q.jsx)(mp,{disabled:t===0,onClick:()=>Mt(e.id,-1),title:j(`move_up`),type:`button`,children:(0,q.jsx)(wi,{size:12})}),(0,q.jsx)(mp,{disabled:t===mt.length-1,onClick:()=>Mt(e.id,1),title:j(`move_down`),type:`button`,children:(0,q.jsx)(wi,{size:12})}),(0,q.jsx)(mp,{onClick:()=>It(e.id),title:j(`remove_panel`),type:`button`,children:(0,q.jsx)(Ri,{size:12})})]})]})]}),e.kind===`home`||e.kind===`folder`?Xt(e):(0,q.jsx)(Dp,{children:Xt(e)})]},e.id)})})]}),ct&&pe&&(0,q.jsx)(Sf,{height:qe,offset:$e,onCancel:()=>lt(!1),onSave:e=>{Ct({overviewBannerOffset:e}),lt(!1)},source:pe,video:de}),Le&&(0,q.jsx)(No,{directory:a,menu:{x:Le.x,y:Le.y,paths:[Le.target.path]},onClose:()=>Re(null),onCopy:(e,t)=>void _t(e,t),onAddToTray:T,onAddFavorite:ee,onRemoveFavorite:te,favoritePaths:E,onExtractArchive:D,onOpen:ft,onOpenFile:e=>y?y(e):void Ce(e),shortcuts:Gt,target:Le.target})]})}function qp({value:e,onChange:t,onCommit:n,onCancel:r,maxLength:i=120}){let a=o();return(0,q.jsxs)(Pp,{onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),children:[(0,q.jsx)(`input`,{autoFocus:!0,maxLength:i,onChange:e=>t(e.target.value),onFocus:e=>e.currentTarget.select(),onKeyDown:e=>{e.key===`Enter`&&n(),e.key===`Escape`&&r()},spellCheck:!1,style:{width:`${Math.max(e.length+1,8)}ch`},value:e}),(0,q.jsx)(Fp,{onClick:r,title:a(`cancel`),type:`button`,children:(0,q.jsx)(Ri,{size:11})}),(0,q.jsx)(Fp,{$apply:!0,onClick:n,title:a(`rename_volume`),type:`button`,children:(0,q.jsx)(Li,{size:12})})]})}function Jp({mode:e,onOpen:t,onContextMenu:n,onSelectionChange:r,selectCards:i=!1,version:a}){let s=o(),[c,l]=(0,R.useState)(null),[u,d]=(0,R.useState)(null),f=Rn(),p=e=>i?(d(e),r?.([e]),!0):!1;if((0,R.useEffect)(()=>{He().then(l,()=>l([]))},[a]),!c)return(0,q.jsx)(Lp,{children:s(`reading`)});if(c.length===0)return(0,q.jsx)(Lp,{children:s(`folders_you_open_often_show_up_here`)});let m=e=>oe(s,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path});return e===`grid`?(0,q.jsx)(hp,{children:c.map(e=>{let r=zn(f,e.path);return(0,q.jsxs)(gp,{$plain:!1,$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Jt(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,children:[(0,q.jsx)(_p,{children:r&&f.useIcons?(0,q.jsx)(Zs,{place:r,size:18}):(0,q.jsx)(hc,{isDirectory:!0,name:e.name,path:e.path,size:18})}),(0,q.jsxs)(vp,{children:[(0,q.jsx)(`strong`,{children:r?.name||e.name}),(0,q.jsx)(yp,{children:m(e)})]})]},e.path)})}):(0,q.jsx)(bp,{children:c.map(e=>{let r=zn(f,e.path);return(0,q.jsxs)(xp,{$selected:u===e.path,onClick:n=>{p(e.path)||t(e.path,Jt(n))},onDoubleClick:()=>t(e.path,!1),onContextMenu:t=>n?.(t,e.path,!0),title:e.path,type:`button`,children:[r&&f.useIcons?(0,q.jsx)(Zs,{place:r,size:15}):(0,q.jsx)(hc,{isDirectory:!0,name:e.name,path:e.path,size:15}),(0,q.jsxs)(Sp,{children:[(0,q.jsx)(`strong`,{children:r?.name||e.name}),(0,q.jsx)(yp,{children:m(e)})]})]},e.path)})})}function Yp({path:e,mode:t,onOpen:n,onContextMenu:r,onPick:i,onSelectionChange:a,selectCards:s=!1,selectionMenuId:c,showCheckboxes:u,openOnSingleClick:d,visibilityVersion:f,platform:p}){let m=o(),[h,g]=(0,R.useState)(null),[_,v]=(0,R.useState)(null),y=Rn();return(0,R.useEffect)(()=>{e&&(g(null),we(e).then(g,()=>g(null)))},[e,f]),(0,R.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&P(n.data.path,e)&&we(e,!1).then(g,()=>void 0)})},[e]),h?t===`list`?(0,q.jsx)(Ep,{children:(0,q.jsx)(Nl,{platform:p,error:null,listing:h,loading:!1,onOpen:n,onOpenFile:i??(e=>void Ce(e)),onRefresh:()=>void we(e,!1).then(g,()=>void 0),onRename:(e,t)=>g(n=>n&&{...n,entries:n.entries.map(n=>P(n.fullPath,e)?{...n,name:x(t),fullPath:t}:n)}),onSelectionChange:a,selectionMenuId:c,onSort:()=>void 0,openOnSingleClick:d,enableShortcuts:!1,showCheckboxes:u,showDetails:!1,showImages:!1,view:{...be,columns:xe.columns??[]}})}):(0,q.jsx)(Dp,{children:h.entries.length===0?(0,q.jsx)(Lp,{children:m(`this_folder_is_empty`)}):(0,q.jsx)(Op,{children:h.entries.map(e=>{let t=zn(y,e.fullPath);return(0,q.jsxs)(kp,{$selected:_===e.fullPath,onClick:t=>{s?(v(e.fullPath),a?.([e.fullPath])):e.isDirectory?n(e.fullPath,Jt(t)):Ce(e.fullPath)},onDoubleClick:()=>e.isDirectory?n(e.fullPath,!1):i?.(e.fullPath),onContextMenu:t=>r?.(t,e.fullPath,e.isDirectory),title:e.name,type:`button`,children:[t&&y.useIcons?(0,q.jsx)(Zs,{place:t,size:16}):(0,q.jsx)(hc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:16}),(0,q.jsx)(`span`,{children:t?.name||e.name})]},e.fullPath)})})}):(0,q.jsx)(Lp,{children:m(`reading`)})}var Xp=`yafm://`,Zp={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Qp(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function $p(e){return`${Xp}${e===`home`?`overview`:e}`}function em(e){return Qp(e)?Zp[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function tm(e){let t=e.trim();if(t.length===0)return null;if(!Qp(t))return t;let n=Zp[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?$p(n):null}function nm({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let s=o(),c=Rn(),[l,u]=(0,R.useState)(!1),[d,f]=(0,R.useState)(``),[p,m]=(0,R.useState)([]),[h,g]=(0,R.useState)(0),[_,v]=(0,R.useState)(null),[y,b]=(0,R.useState)(null),[x,S]=(0,R.useState)(null),C=(0,R.useRef)(null),w=(0,R.useRef)(null),T=(0,R.useRef)(0);(0,R.useEffect)(()=>{if(!$c(e)){S(null);return}let t=el(e);if(!t){S(null);return}let n=!0;return qc().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);S({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&S(null)),()=>{n=!1}},[e]),(0,R.useEffect)(()=>{l||f(e.replace(/\\/g,`/`))},[e,l]),(0,R.useEffect)(()=>{r&&r!==T.current&&(T.current=r,f(e.replace(/\\/g,`/`)),u(!0))},[r,e]),(0,R.useEffect)(()=>{l&&C.current?.select()},[l]),(0,R.useEffect)(()=>{if(!l)return;let e=()=>u(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[l]);let ee=()=>{f(e.replace(/\\/g,`/`)),u(!0)},te=t=>{let n=d.trim(),r=!!(t?.ctrlKey||t?.metaKey);u(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,R.useEffect)(()=>{if(!l){m([]);return}let e=om(d);if(!e){m([]);return}let t=!1,n=window.setTimeout(()=>{we(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));m(i),g(0)},()=>{t||m([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[d,l]);let E=(e,t=!1)=>{u(!1),i(e.path,t)};if((0,R.useLayoutEffect)(()=>{if(!l){v(null);return}let e=()=>{let e=w.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);v({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[l]),l)return(0,q.jsxs)(fm,{onPointerDown:e=>e.stopPropagation(),ref:w,children:[(0,q.jsxs)(gm,{children:[(0,q.jsx)(`input`,{onChange:e=>f(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&p.length>0)e.preventDefault(),g(e=>(e+1)%p.length);else if(e.key===`ArrowUp`&&p.length>0)e.preventDefault(),g(e=>(e-1+p.length)%p.length);else if(e.key===`Tab`&&p.length>0){e.preventDefault();let t=p[Math.min(h,p.length-1)];f(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?p.length>0?E(p[Math.min(h,p.length-1)],e.ctrlKey||e.metaKey):te(e):e.key===`Escape`&&(p.length>0?m([]):u(!1))},ref:C,spellCheck:!1,value:d}),(0,q.jsx)(_m,{onClick:()=>u(!1),title:s(`cancel`),type:`button`,children:(0,q.jsx)(Ri,{size:12})}),(0,q.jsx)(_m,{$apply:!0,onClick:te,onPointerDown:e=>e.stopPropagation(),title:s(`open_this_path`),type:`button`,children:(0,q.jsx)(Li,{size:14})})]}),p.length>0&&_&&(0,ro.createPortal)((0,q.jsx)(pm,{onPointerDown:e=>e.stopPropagation(),style:{left:_.left,top:_.top,width:_.width},children:p.map((e,t)=>(0,q.jsxs)(mm,{$active:t===h,onClick:t=>E(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>g(t),type:`button`,children:[(0,q.jsx)(hc,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,q.jsx)(hm,{children:e.name})]},e.path))}),document.body)]});let D=t?[{label:t,path:e,icon:n}]:rm(e,x)??am(e,c.places);return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(sm,{onClick:ee,title:s(`click_to_type_a_path`),children:D.map((t,n)=>(0,q.jsxs)(cm,{$last:n===D.length-1,children:[n>0&&(0,q.jsx)(um,{children:(0,q.jsx)(ki,{size:9})}),(0,q.jsxs)(dm,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):b({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,q.jsx)(lm,{children:(0,q.jsx)(Zs,{place:t.place,size:13})}):t.icon&&(0,q.jsx)(lm,{children:t.icon}),t.label]})]},t.path))}),y&&(0,q.jsx)(xo,{items:[{label:s(`open`),icon:(0,q.jsx)(Oi,{size:14}),onSelect:()=>i(y.path)},{label:s(`open_in_new_tab`),icon:(0,q.jsx)(Ei,{size:14}),onSelect:()=>i(y.path,!0)},{label:s(`copy_as_path`),icon:(0,q.jsx)(Ca,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(y.path)},...Qp(y.path)?[{label:s(`open_with`),icon:(0,q.jsx)(Yi,{size:14}),onSelect:()=>void Nt(y.path)},{label:s(`properties`),icon:(0,q.jsx)(Ai,{size:14}),onSelect:()=>void jt([y.path])}]:[]],onClose:()=>b(null),x:y.x,y:y.y})]})}function rm(e,t){let n=el(e);if(!n)return null;let r=tl(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,q.jsx)(_a,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function im(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function am(e,t){let n=im(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>P(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function om(e){if(Qp(e)||$c(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var sm=v.div`
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
`,cm=v.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,lm=v.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,um=v.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,dm=v.button`
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
`,fm=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,pm=v.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${io}
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
`,mm=v.button`
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
`,hm=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gm=v.div`
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
`,_m=v.button`
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
`,vm=v.button`
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
`,ym=v.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,bm=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,q.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,q.jsx)(`path`,{d:`M4 4v6h6`})]});function xm({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,onShowDetails:i,onPreviewChange:a,platform:s,toolbarSlot:c,onStatusChange:l}){let u=o(),d=yl(`recycle`),f=s===`windows`,[p,m]=(0,R.useState)([]),[h,g]=(0,R.useState)([]),[_,v]=(0,R.useState)(!1),[y,b]=(0,R.useState)(null),[x,S]=(0,R.useState)(!0),[w,T]=(0,R.useState)(!1),[ee,te]=(0,R.useState)(null),[E,D]=(0,R.useState)(!1),[O,k]=(0,R.useState)(()=>new Set),[A,j]=(0,R.useState)(null),[ne,re]=(0,R.useState)(()=>{let e=Zn(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[M,ie]=(0,R.useState)(null),[N,se]=(0,R.useState)(null),P=(0,R.useRef)(null),ce=(0,R.useCallback)(async()=>{S(!0),te(null);try{m(await Pe(E))}catch(e){te(e instanceof Error?e.message:String(e))}finally{S(!1)}},[E]),F=(0,R.useCallback)(async()=>{try{m(await Pe(E))}catch{}},[E]);(0,R.useEffect)(()=>{ce()},[ce]),(0,R.useEffect)(()=>{let e=window.setInterval(()=>void F(),1e4);return()=>window.clearInterval(e)},[F]),(0,R.useEffect)(()=>{E||(g([]),v(!1),b(null))},[E]),(0,R.useEffect)(()=>{k(e=>{let t=new Set(p.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[p]);let I=(0,R.useMemo)(()=>{let e=new Set(p.map(e=>e.id));return[...p,...h.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Sm(e,t,ne.column);return ne.descending?-n:n})},[p,h,ne]),le=(0,R.useMemo)(()=>!t?.open||t.query.trim().length===0?I:I.filter(e=>An(e.name,t)||An(e.originalPath,t)),[I,t?.open,t?.query,t?.matchCase,t?.regex]),ue=t?.open&&t.query.trim().length>0?le.length===0:I.length===0,de=(0,R.useRef)(null);_f(de,t??null,`[data-search-block]`,n??(()=>void 0),[I]),(0,R.useEffect)(()=>{k(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,R.useEffect)(()=>{r&&k(new Set(le.map(e=>e.id)))},[r]);let fe=(0,R.useMemo)(()=>I.filter(e=>O.has(e.id)),[I,O]),pe=fe.filter(e=>e.removable&&!e.isOrphan),me=fe.filter(e=>e.removable),he=(e,t)=>{let n=t.ctrlKey||t.metaKey;k(r=>{if(t.shiftKey&&A){let t=I.findIndex(e=>e.id===A),i=I.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(I[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),j(e.id)},ge=(0,R.useCallback)(()=>k(new Set(le.map(e=>e.id))),[le]),L=le.length>0&&le.every(e=>O.has(e.id)),_e=(0,R.useCallback)(async()=>{let e=pe.map(e=>e.id);if(e.length!==0){T(!0);try{let t=await Ie(e);t.ok||await Ga(oe(u,e.length,`restored_done_of_1_item`,`restored_done_of_total_items`,{done:t.done,total:e.length})),k(new Set),await ce()}finally{T(!1)}}},[ce,pe,u]),z=(0,R.useCallback)(async()=>{let e=me.map(e=>e.id);if(se(null),e.length!==0){T(!0);try{let t=await Le(e);!t.ok&&!t.cancelled&&await Ga(oe(u,e.length,`deleted_done_of_1_item`,`deleted_done_of_total_items`,{done:t.done,total:e.length})),k(new Set),await ce()}finally{T(!1)}}},[me,ce,u]),ve=async()=>{se(null),T(!0);try{await Fe(E),k(new Set),await ce()}finally{T(!1)}},ye=async()=>{T(!0),b(null);try{let e=await ze();if(e.cancelled){b(`Elevation was declined — nothing was read.`);return}if(e.failed){b(`The elevated helper could not produce a report. Try again.`);return}g(e.entries),v(!0)}finally{T(!1)}},be=async()=>{T(!0),se(null);try{await V(),g([]),v(!1),b(null),await ce()}finally{T(!1)}},xe=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},Se=e=>{navigator.clipboard.writeText(e.originalPath)},Ce=(e,t)=>{e.preventDefault(),t&&!O.has(t.id)&&k(new Set([t.id])),ie({x:e.clientX,y:e.clientY})};(0,R.useEffect)(()=>(ml(`recycle`,O.size>0?(e,t)=>ie({x:e,y:t}):null),()=>ml(`recycle`,null)),[O]),(0,R.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),ge()):e.key===`delete`?(e.preventDefault(),me.length>0&&se(`delete`)):e.key===`Enter`&&pe.length>0?(e.preventDefault(),_e()):e.key===`Escape`&&(k(new Set),ie(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[me.length,pe.length,_e,ge]);let we=[{label:u(`restore`),icon:(0,q.jsx)(bm,{width:14,height:14}),disabled:pe.length===0,onSelect:()=>void _e()},{label:u(`delete_permanently`),icon:(0,q.jsx)(Ii,{size:14}),danger:!0,disabled:me.length===0,onSelect:()=>se(`delete`)},{label:u(`properties`),icon:(0,q.jsx)(Ai,{size:14}),disabled:fe.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=fe;e&&Re(e.id)}},{label:u(`open_original_location`),icon:(0,q.jsx)(bi,{size:14}),disabled:fe.length!==1,onSelect:()=>{let[e]=fe;e&&xe(e)}},{label:u(`copy_original_path`),icon:(0,q.jsx)(Ca,{size:14}),disabled:fe.length!==1,onSelect:()=>{let[e]=fe;e&&Se(e)}},{label:u(`select_all`),separatorBefore:!0,onSelect:ge},{label:u(`refresh`),icon:(0,q.jsx)(Ti,{size:14}),onSelect:()=>void ce()}],Te=fe.length>0?fe[0]:null,Ee=Te?{name:Te.name,path:Te.contentPath||Te.originalPath,isDirectory:Te.isDirectory,size:Te.size,modified:Te.deleted,fields:[{label:u(`type`),value:u(wm(Te))},{label:u(`original_location`),value:Te.originalPath},{label:u(`date_deleted`),value:ae(Te.deleted)},{label:u(`size`),value:Te.isDirectory?`—`:C(Te.size)},...Te.owner?[{label:u(`owner`),value:Te.owner}]:[],{label:u(`status`),value:Te.isOrphan?u(`metadata_only`):Te.removable?u(`restorable`):u(`other_profile`)}]}:null,De=fe.length>1?oe(u,fe.length,`k_1_item_selected`,`count_items_selected`):void 0,Oe=(0,R.useRef)(``);(0,R.useEffect)(()=>{let e=`${Ee?.path??``}|${Ee?.modified??0}|${De??``}`;Oe.current!==e&&(Oe.current=e,a?.(Ee,De))},[Ee,De,a]);let ke=x?u(`reading`):oe(u,I.length,`k_1_item`,`count_items`)+(O.size>0?` · ${u(`count_selected`,{count:O.size})}`:``);return(0,R.useEffect)(()=>{l?.(ke)},[ke,l]),(0,q.jsxs)(Em,{ref:P,onContextMenu:e=>Ce(e),children:[c&&(0,ro.createPortal)((0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ym,{}),(0,q.jsx)(Dm,{$on:E,onClick:()=>D(e=>!e),title:u(`show_metadata_records_whose_content_is_already_gone`),type:`button`,children:(0,q.jsx)(zi,{size:16})}),E&&f&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(vm,{disabled:w||_,onClick:()=>void ye(),title:u(_?`the_administrator_view_is_already_loaded`:`ask_for_administrator_rights_and_list_every_profile_s_leftovers`),type:`button`,children:(0,q.jsx)(ja,{size:16})}),_&&h.length>0&&(0,q.jsx)(Om,{disabled:w,onClick:()=>se(`purge`),title:u(`delete_every_orphan`),type:`button`,children:(0,q.jsx)(La,{size:16})})]}),(0,q.jsx)(vm,{disabled:w||pe.length===0,onClick:()=>void _e(),title:u(`restore`),type:`button`,children:(0,q.jsx)(bm,{height:16,width:16})}),(0,q.jsx)(Om,{disabled:w||me.length===0,onClick:()=>se(`delete`),title:u(`delete`),type:`button`,children:(0,q.jsx)(Ii,{size:16})}),(0,q.jsx)(Om,{disabled:w||I.length===0,onClick:()=>se(`empty`),title:u(`empty`),type:`button`,children:(0,q.jsx)(Ia,{size:16})}),(0,q.jsx)(vm,{onClick:()=>void ce(),title:u(`refresh`),type:`button`,children:(0,q.jsx)(Ti,{size:16})}),d.available&&(0,q.jsx)(vm,{onClick:e=>d.open(e.clientX,e.clientY),title:u(`selection_menu`),type:`button`,children:(0,q.jsx)(Aa,{size:16})})]}),c),y&&(0,q.jsx)(Ym,{children:y}),ee&&(0,q.jsx)(Xm,{children:ee}),!ee&&(0,q.jsx)(Jm,{children:(0,q.jsxs)(km,{ref:de,children:[(0,q.jsxs)(jm,{children:[(0,q.jsx)(Lm,{$checked:L,$partial:!L&&O.size>0,onClick:()=>L?k(new Set):ge(),title:u(L?`select_none`:`select_all`),type:`button`,children:L?(0,q.jsx)(Li,{size:9}):O.size>0&&(0,q.jsx)(Rm,{})}),(0,q.jsxs)(Mm,{onClick:()=>Ae(`name`),type:`button`,children:[u(`name`),Cm(ne,`name`)]}),(0,q.jsxs)(Mm,{onClick:()=>Ae(`original`),type:`button`,children:[u(`original_location`),Cm(ne,`original`)]}),(0,q.jsxs)(Mm,{onClick:()=>Ae(`deleted`),type:`button`,children:[u(`date_deleted`),Cm(ne,`deleted`)]}),(0,q.jsxs)(Mm,{onClick:()=>Ae(`size`),type:`button`,children:[u(`size`),Cm(ne,`size`)]}),(0,q.jsxs)(Mm,{onClick:()=>Ae(`type`),type:`button`,children:[u(`type`),Cm(ne,`type`)]}),(0,q.jsx)(`span`,{})]}),(0,q.jsxs)(Nm,{onClick:e=>{e.target===e.currentTarget&&k(new Set)},children:[!x&&ue&&(0,q.jsx)(Xm,{children:t?.open&&t.query.trim().length>0?u(`no_matching_items`):u(`the_recycle_bin_is_empty`)}),I.map(e=>(0,q.jsxs)(Pm,{$checked:O.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>he(e,t),onContextMenu:t=>Ce(t,e),onDoubleClick:()=>{k(new Set([e.id])),j(e.id),i?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,q.jsx)(Im,{$checked:O.has(e.id),children:O.has(e.id)&&(0,q.jsx)(Li,{size:9})}),(0,q.jsxs)(zm,{children:[(0,q.jsx)(Tm,{entry:e}),(0,q.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,q.jsx)(qm,{children:u(`metadata_only`)}),e.owner&&(0,q.jsx)(qm,{$other:!0,children:u(`other_profile`)})]}),(0,q.jsx)(Vm,{children:e.originalPath}),(0,q.jsx)(Hm,{children:ae(e.deleted)}),(0,q.jsx)(Um,{children:e.isDirectory?`—`:C(e.size)}),(0,q.jsx)(Wm,{children:u(wm(e))}),(0,q.jsxs)(Gm,{children:[e.removable&&!e.isOrphan&&(0,q.jsx)(Km,{onClick:t=>{t.stopPropagation(),Ie([e.id]).then(ce)},title:u(`restore_to_its_original_folder`),type:`button`,children:(0,q.jsx)(bm,{})}),e.removable&&(0,q.jsx)(Km,{$danger:!0,onClick:t=>{t.stopPropagation(),k(new Set([e.id])),se(`delete`)},title:e.isOrphan?u(`remove_the_leftover_record`):u(`delete_permanently`),type:`button`,children:(0,q.jsx)(Ii,{size:13})})]})]},e.id))]})]})}),M&&(0,q.jsx)(xo,{items:we,onClose:()=>ie(null),x:M.x,y:M.y}),(0,q.jsx)(cs,{confirmLabel:u(N===`empty`?`empty_the_bin`:N===`purge`?`delete_every_orphan`:`delete`),danger:!0,message:N===`empty`?oe(u,I.length,`permanently_delete_1_item_this_cannot_be_undone`,`permanently_delete_count_items_this_cannot_be_undone`):N===`purge`?u(`permanently_delete_every_leftover_record_including_the_ones_owned_by_other_profiles_this_cannot_be_undone`):oe(u,me.length,`permanently_delete_1_selected_item_this_cannot_be_undone`,`permanently_delete_count_selected_items_this_cannot_be_undone`),onCancel:()=>se(null),onConfirm:()=>{N===`empty`?ve():N===`purge`?be():z()},open:N!==null,title:u(N===`empty`?`empty_the_recycle_bin`:N===`purge`?`delete_every_orphan`:`delete_permanently`)})]});function Ae(e){re(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return Qn(`yafm.recycle.sort`,n),n})}}function Sm(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return wm(e).localeCompare(wm(t),void 0,{sensitivity:`base`})}}function Cm(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function wm(e){if(e.isDirectory)return`folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`file`}function Tm({entry:e}){let t=hn(e.originalPath,e.isDirectory);return(0,q.jsx)(Bm,{children:t?(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,q.jsx)(bi,{}):(0,q.jsx)(xi,{})})}var Em=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Dm=v(vm)`
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`transparent`};
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`transparent`};
`,Om=v(vm)`
    color: #fca5a5;

    &:hover:not(:disabled) {
        color: #fecaca;
        border-color: rgba(248, 113, 113, 0.5);
        background: rgba(248, 113, 113, 0.12);
    }
`,km=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Am=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,jm=v.div`
    display: grid;
    grid-template-columns: ${Am};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Mm=v.button`
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
`,Nm=v.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Pm=v.div`
    display: grid;
    grid-template-columns: ${Am};
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
`,Fm=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Im=v.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Lm=v.button`
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
`,Rm=v.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,zm=v(Fm)`
    display: flex;
    align-items: center;
    gap: 9px;
`,Bm=v.span`
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
`,Vm=v(Fm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Hm=v(Fm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Um=v(Fm)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Wm=v(Fm)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Gm=v.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Km=v.button`
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
`,qm=v.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Jm=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Ym=v.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Xm=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;async function Zm(){return l.available?(await l.request(`app.tags`)).tags:[]}async function Qm(e){return!l.available||!e?!1:(await l.request(`app.tags.delete`,{name:e})).ok}async function $m(e,t){return!l.available||!e?[]:(await l.request(`app.tags.create`,{name:e,color:t})).tags}async function eh(e,t){return!l.available||!e?!1:(await l.request(`app.tags.color`,{name:e,color:t})).ok}async function th(e,t){return!l.available||!e||!t?!1:(await l.request(`app.tags.rename`,{oldName:e,newName:t})).ok}function nh(){let e=o();return(0,q.jsx)(rh,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var rh=v.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`,ih=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function ah(e){return`"${e.replaceAll(`"`,``)}"`}function oh(e){let t=document.documentElement.style;for(let n of ih){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${ah(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function sh(){return l.available?(await l.request(`app.fonts`)).fonts??[]:[]}function ch({value:e,fonts:t,defaultLabel:n,sample:r,disabled:i,onChange:a}){let s=o(),[c,l]=(0,R.useState)(null),[u,d]=(0,R.useState)(``),f=(0,R.useRef)(null),p=(0,R.useRef)(null),m=(0,R.useMemo)(()=>{let e=u.trim().toLowerCase();return e.length===0?t:t.filter(t=>t.toLowerCase().includes(e))},[t,u]);(0,R.useEffect)(()=>{if(!c)return;p.current?.focus();let e=()=>l(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-font-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`resize`,e)}},[c]);let h=()=>{if(c){l(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;d(``);let t=window.innerHeight-e.bottom-16,n=t<280&&e.top>t;l({left:e.left,width:Math.max(e.width,280),top:n?Math.max(8,e.top-340):e.bottom+4,maxHeight:n?Math.min(340,e.top-12):Math.min(420,t)})},g=e=>{a(e),l(null)};return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(lh,{"aria-expanded":c!==null,"aria-haspopup":`listbox`,disabled:i,onClick:h,ref:f,type:`button`,children:[(0,q.jsx)(uh,{style:e?{fontFamily:`"${e}"`}:void 0,children:e??n}),(0,q.jsx)(dh,{children:`▾`})]}),c&&(0,ro.createPortal)((0,q.jsxs)(fh,{"data-font-menu":`true`,role:`listbox`,style:{left:c.left,maxHeight:c.maxHeight,top:c.top,width:c.width},children:[(0,q.jsxs)(ph,{children:[(0,q.jsx)(Ci,{size:12}),(0,q.jsx)(mh,{onChange:e=>d(e.target.value),placeholder:s(`filter_fonts`),ref:p,value:u})]}),(0,q.jsxs)(hh,{children:[(0,q.jsxs)(gh,{$active:!e,"aria-selected":!e,onClick:()=>g(null),role:`option`,type:`button`,children:[(0,q.jsxs)(vh,{children:[n,` `,(0,q.jsx)(bh,{children:s(`default_2`)})]}),!e&&(0,q.jsx)(Li,{size:11})]}),m.map(t=>(0,q.jsxs)(gh,{$active:e===t,"aria-selected":e===t,onClick:()=>g(t),role:`option`,type:`button`,children:[(0,q.jsxs)(_h,{children:[(0,q.jsx)(vh,{children:t}),(0,q.jsx)(yh,{style:{fontFamily:`"${t}"`},children:r})]}),e===t&&(0,q.jsx)(Li,{size:11})]},t)),m.length===0&&(0,q.jsx)(xh,{children:s(`no_matching_font`)})]})]}),document.body)]})}var lh=v.button`
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
`,uh=v.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dh=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-size: 10px;
`,fh=v.div`
    position: fixed;
    z-index: 4200;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${ho}
`,ph=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    flex-shrink: 0;
    padding: 7px 9px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
`,mh=v.input`
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
`,hh=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    overflow-y: auto;
    padding: 4px;
`,gh=v.button`
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
`,_h=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,vh=v.span`
    overflow: hidden;
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yh=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,bh=v.span`
    color: var(--text-muted);
    font-size: 10px;
`,xh=v.span`
    padding: 10px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Sh=[{id:`goBack`,label:`back`,note:`the_previous_folder_in_this_tab_the_mouse_back_button_and_the_browser_back_key_always_work`},{id:`goForward`,label:`forward`,note:`the_next_folder_in_this_tab_the_mouse_forward_button_and_the_browser_forward_key_always_work`},{id:`goUp`,label:`up_one_level`,note:`opens_the_folder_that_contains_the_current_one`},{id:`home`,label:`home_folder`,note:`jumps_to_the_user_s_home_folder_like_alt_home_in_dolphin`},{id:`find`,label:`search`,note:`opens_the_floating_search_box_typing_a_letter_in_a_folder_opens_it_too`},{id:`location`,label:`edit_location`,note:`turns_the_breadcrumbs_into_an_editable_path_ctrl_l_in_dolphin`},{id:`closeTab`,label:`close_tab`,note:`closes_the_tab_that_is_open`},{id:`newTab`,label:`new_tab`,note:`opens_the_overview_in_a_new_tab`},{id:`reopenTab`,label:`reopen_closed_tab`,note:`brings_back_the_tab_you_closed_last_folder_and_all`},{id:`nextTab`,label:`next_tab`,note:`cycles_to_the_next_tab`},{id:`previousTab`,label:`previous_tab`,note:`cycles_to_the_previous_tab`},{id:`copy`,label:`copy`,note:`ctrl_d_copies_too_following_kde_s_file_manager`},{id:`cut`,label:`cut`,note:`moves_the_selection_on_the_next_paste`},{id:`paste`,label:`paste`,note:`copies_or_moves_the_clipboard_s_files_into_the_current_folder`},{id:`undo`,label:`undo`,note:`undoes_the_last_file_operation_in_this_session`},{id:`redo`,label:`redo`,note:`repeats_the_operation_that_was_just_undone`},{id:`delete`,label:`move_to_the_recycle_bin`,note:`delete_is_del_by_default_not_ctrl_d`},{id:`deletePermanently`,label:`delete_permanently`,note:`bypasses_the_recycle_bin_dolphin_uses_shift_delete`},{id:`rename`,label:`rename`,note:`renames_the_single_selected_entry`},{id:`selectAll`,label:`select_all`,note:`selects_every_entry_in_the_current_folder`},{id:`invertSelection`,label:`invert_selection`,note:`selects_everything_that_is_not_selected_dolphin_uses_ctrl_shift_a`},{id:`open`,label:`open`,note:`opens_the_selected_folder_or_file`},{id:`newFolder`,label:`new_folder`,note:`creates_a_folder_in_the_current_directory_f10_also_works`},{id:`properties`,label:`properties`,note:`opens_the_shell_properties_sheet`},{id:`iconsView`,label:`icons_view`,note:`switches_the_folder_to_the_grid_view`},{id:`detailsView`,label:`details_view`,note:`switches_the_folder_to_the_list_view`},{id:`terminal`,label:`open_terminal`,note:`opens_windows_terminal_in_the_current_folder_dolphin_uses_f4_for_its_terminal_panel`},{id:`hidden`,label:`show_hidden_files`,note:`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`},{id:`splitView`,label:`split_view`,note:`shows_the_next_file_tab_beside_the_current_one_f3_in_dolphin`},{id:`openInNewTab`,label:`open_in_a_new_tab`,note:`hold_this_while_clicking_a_folder`}],Ch=`en`,wh=[{id:`system`,label:`follow_system`},{id:`light`,label:`light`},{id:`dark`,label:`dark`}],Th=[{id:`system`,label:`system`},{id:`24`,label:`k_24_hour`},{id:`12`,label:`k_12_hour`},{id:`custom`,label:`custom`}],Eh=new Date(2026,10,5,16,8).getTime(),Dh=`system`,Oh={en:`English`,"zh-CN":`简体中文`,"zh-TW":`繁體中文`,ja:`日本語`},kh=[{id:`application`,label:`application`},{id:`share-access`,label:`share_access`},{id:`startup`,label:`startup`},{id:`fonts`,label:`fonts`},{id:`time`,label:`time_format`},{id:`updates`,label:`updates`},{id:`colors`,label:`colors`},{id:`background`,label:`background`},{id:`safety`,label:`safety`},{id:`tags`,label:`tags`},{id:`files-view`,label:`files_view`},{id:`shortcuts`,label:`shortcuts`},{id:`memory`,label:`memory`},{id:`overview`,label:`overview`},{id:`gallery`,label:`gallery`},{id:`icons`,label:`icons`},{id:`extension-icons`,label:`icons_by_extension`},{id:`folder-icons`,label:`folder_icons`},{id:`folder-index`,label:`folder_index`},{id:`indexing`,label:`index_tasks`},{id:`files`,label:`files`}],Ah={application:(0,q.jsx)(Ai,{size:13}),share_access:(0,q.jsx)(Ea,{size:13}),startup:(0,q.jsx)(Da,{size:13}),fonts:(0,q.jsx)(Xi,{size:13}),time_format:(0,q.jsx)(Pi,{size:13}),updates:(0,q.jsx)(Ti,{size:13}),colors:(0,q.jsx)(Ma,{size:13}),background:(0,q.jsx)(sa,{size:13}),safety:(0,q.jsx)(ja,{size:13}),tags:(0,q.jsx)(Na,{size:13}),files_view:(0,q.jsx)(Mi,{size:13}),shortcuts:(0,q.jsx)(Pa,{size:13}),memory:(0,q.jsx)(Zi,{size:13}),overview:(0,q.jsx)(na,{size:13}),gallery:(0,q.jsx)(ha,{size:13}),icons:(0,q.jsx)(Fa,{size:13}),icons_by_extension:(0,q.jsx)(xi,{size:13}),folder_icons:(0,q.jsx)(bi,{size:13}),folder_index:(0,q.jsx)(va,{size:13}),index_tasks:(0,q.jsx)(Fi,{size:13}),files:(0,q.jsx)(zi,{size:13})},jh=`yafm.colors.recent`;function Mh(){let e=Zn(jh);return{accent:(e?.accent??[]).filter(e=>typeof e==`string`).slice(0,8),secondary:(e?.secondary??[]).filter(e=>typeof e==`string`).slice(0,8)}}function Nh({appInfo:e,focusSection:t,onSettingsChanged:n,find:r,onSearchMatches:i}){let s=o(),[c,l]=(0,R.useState)([]),[u,d]=(0,R.useState)(null),[m,_]=(0,R.useState)(!1),[v,y]=(0,R.useState)(null),b=f(g(v?.themeMode)),[T,ee]=(0,R.useState)(null),[te,E]=(0,R.useState)(``),[D,O]=(0,R.useState)(`file`),[k,j]=(0,R.useState)(!1),[ne,re]=(0,R.useState)(!1),[M,ie]=(0,R.useState)(null),[ae,P]=(0,R.useState)(ft),[ce,L]=(0,R.useState)(!1),[_e,z]=(0,R.useState)(null),[ve,ye]=(0,R.useState)(null),[be,Se]=(0,R.useState)(null),[Ce,we]=(0,R.useState)(!1),[Te,Ee]=(0,R.useState)(null),[De,Oe]=(0,R.useState)(!1),[ke,Ae]=(0,R.useState)(null),[je,Me]=(0,R.useState)(null),[Ne,Pe]=(0,R.useState)(!1),[B,Fe]=(0,R.useState)([]),[Ie,Le]=(0,R.useState)(null),[Re,ze]=(0,R.useState)(!1),[V,Be]=(0,R.useState)(null),[Ve,He]=(0,R.useState)(``),[Ue,We]=(0,R.useState)(Qs),[Ge,qe]=(0,R.useState)(null),[Ye,Xe]=(0,R.useState)(null),[$e,et]=(0,R.useState)(``),[st,lt]=(0,R.useState)(``),[H,_t]=(0,R.useState)(null),[vt,yt]=(0,R.useState)(Mh),[bt,xt]=(0,R.useState)({}),[St,Ct]=(0,R.useState)(null),[wt,Tt]=(0,R.useState)(null),[Et,Dt]=(0,R.useState)(!1),[Ot,kt]=(0,R.useState)(null),[At,jt]=(0,R.useState)(null),Mt=(0,R.useRef)(!1),[Nt,Pt]=(0,R.useState)(null),[Ft,It]=(0,R.useState)(kh[0].id),[Lt,Rt]=(0,R.useState)([]),[zt,Bt]=(0,R.useState)(null),[Vt,Ht]=(0,R.useState)(``),[Ut,Wt]=(0,R.useState)(!1),[Kt,qt]=(0,R.useState)(null),[Jt,Zt]=(0,R.useState)(null),[Qt,$t]=(0,R.useState)(!1),[en,tn]=(0,R.useState)(``),nn=(0,R.useRef)(null),rn=(0,R.useRef)({}),an=v?.defaultView??xe,on=v?.themePresets??[],sn=e?.platform===`windows`,cn=sn?ve?ve.registered&&ve.pathMatches:!1:v?.archiveHandler??!1,ln=ve?.registered??v?.archiveHandler??!1,dn=sn?be?be.registered&&be.pathMatches:!1:v?.defaultFileManager??!1,fn=sn?ae.registered&&ae.pathMatches:v?.linksEnabled??!1;_f(nn,r??null,`section`,i??(()=>void 0),[v]),(0,R.useEffect)(()=>{let e=nn.current;if(!e)return;let t=()=>{let t=e.getBoundingClientRect().top;if(e.scrollTop+e.clientHeight>=e.scrollHeight-8){It(kh[kh.length-1].id);return}let n=t+110,r=kh[0].id;for(let{id:e}of kh){let t=rn.current[e];t&&t.getBoundingClientRect().top<=n&&(r=e)}It(r)};return t(),e.addEventListener(`scroll`,t,{passive:!0}),window.addEventListener(`resize`,t),()=>{e.removeEventListener(`scroll`,t),window.removeEventListener(`resize`,t)}},[]);let pn=e=>t=>{rn.current[e]=t},mn=e=>{rn.current[e]?.scrollIntoView({behavior:`smooth`,block:`start`}),It(e)},hn=(0,R.useRef)(0),gn=e=>{let t=e.currentTarget,n=Math.sign(e.deltaY);if(n===0)return;if(t.scrollHeight>t.clientHeight+1){let e=t.scrollTop<=0&&n<0,r=t.scrollTop+t.clientHeight>=t.scrollHeight-1&&n>0;if(!e&&!r)return}let r=Date.now();if(r<hn.current)return;let i=kh.findIndex(e=>e.id===Ft),a=i<0?0:i,o=Math.min(Math.max(a+n,0),kh.length-1);o!==a&&(hn.current=r+400,mn(kh[o].id))};(0,R.useEffect)(()=>{t&&mn(t)},[t]),(0,R.useEffect)(()=>{p().then(e=>l(e.available),()=>l([]))},[]),(0,R.useEffect)(()=>{sh().then(Rt,()=>Rt([]))},[]),(0,R.useEffect)(()=>{ht().then(qt,()=>qt(null))},[]),(0,R.useEffect)(()=>{ue().then(Tt,()=>void 0)},[]),(0,R.useEffect)(()=>{Ke().then(d,()=>d(null)),Ze().then(y,()=>y(null)),pt().then(P,()=>P(ft)),rt().then(ye,()=>ye(null)),tt().then(Se,()=>Se(null)),Zm().then(Fe,()=>Fe([]))},[]),(0,R.useEffect)(()=>{let e=()=>void ut().then(ie,()=>ie(null));e();let t=setInterval(e,4e3);return()=>clearInterval(t)},[]);let U=async e=>{if(!v)return;let t={...v,...e};Object.keys(e).every(e=>t[e]===v[e])||(y(t),un(),y(await ot(t)),n())},_n=async e=>{let t=await Va(e);if(!t)return;let n=v?.backgroundCustom??[];await U({backgroundCustom:n.includes(t)?n:[...n,t],backgroundSource:`file:${t}`})},vn=async()=>{let e=en.trim();if(!v||!A(e))return;let t=v.backgroundCustom??[];tn(``),await U({backgroundCustom:t.includes(e)?t:[...t,e],backgroundSource:`url:${e}`})},yn=e=>{if(!v)return;let t=v.backgroundSource;U({backgroundCustom:v.backgroundCustom.filter(t=>t!==e),backgroundSource:t===`file:${e}`||t===`url:${e}`||t===e?null:t})},W=async()=>{if(!v)return;let t=await Ba();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;v.protectedPaths.includes(r)||await U({protectedPaths:[...v.protectedPaths,r]})},G=()=>{let e=$e.trim();v&&e&&!v.protectedPaths.includes(e)&&(et(``),U({protectedPaths:[...v.protectedPaths,e]}))},K=()=>{if(!v||!Ge)return;let e=Ge.value.trim(),t=Ge.from;qe(null),e.length!==0&&e!==t&&U({protectedPaths:v.protectedPaths.map(n=>n===t?e:n)})},bn=e=>{v&&U({protectedPaths:v.protectedPaths.filter(t=>t!==e)})},xn=async()=>{let e=await Qe();e.length>0&&await U({protectedPaths:e})},Sn=()=>{if(!v||!Ye)return;let e=Ye.value.trim(),t=Ye.from;Xe(null),e&&e!==t&&U({directoryIndexBlacklist:v.directoryIndexBlacklist.map(n=>n===t?e:n)})},Cn=()=>{let e=st.trim();v&&e&&!v.directoryIndexBlacklist.includes(e)&&(lt(``),U({directoryIndexBlacklist:[...v.directoryIndexBlacklist,e]}))},wn=async()=>{if(!v)return;let t=await Ba();if(!t)return;let n=e?.platform===`windows`?`\\`:`/`,r=`${t.replace(/[\\/]+$/,``)}${n}**`;v.directoryIndexBlacklist.includes(r)||await U({directoryIndexBlacklist:[...v.directoryIndexBlacklist,r]})},Tn=e=>{v&&U({directoryIndexBlacklist:v.directoryIndexBlacklist.filter(t=>t!==e)})},En=()=>{U({directoryIndexBlacklist:[`**/uv/cache/**`,`**/scoop/buckets/**`]})},Dn=()=>{if(!v||H===null)return;let e=H.trim()||`yyyy/MM/dd HH:mm`;_t(null),e!==v.timeFormatPattern&&U({timeFormatPattern:e})},On=(e,t)=>{yt(n=>{let r=[t,...n[e].filter(e=>e.toLowerCase()!==t.toLowerCase())].slice(0,8),i={...n,[e]:r};return Qn(jh,i),i})},kn=N(v?.accentColor,se),An=N(v?.secondaryColor,h),jn=(e,t)=>{v&&(On(`accent`,kn),On(`secondary`,An),U({accentColor:e,secondaryColor:t}))},Mn=(e,t)=>{v&&(On(e,e===`accent`?kn:An),U(e===`accent`?{accentColor:t}:{secondaryColor:t}))},Nn=async()=>{Dt(!0),kt(null);try{Tt(await de())}catch{kt(s(`could_not_check_for_updates`))}finally{Dt(!1)}},Pn=async()=>{Mt.current=!1,kt(null),jt({phase:`changelog`,changelog:``,downloaded:0,total:0,percent:0});try{let e=await fe();e.ok||Fn(e.error??``)}catch(e){Fn(e instanceof Error?e.message:String(e))}},Fn=e=>jt(t=>t&&{...t,phase:`error`,error:e}),In=()=>{jt(null),pe().catch(e=>kt(e instanceof Error?e.message:String(e)))},Ln=async()=>{jt(e=>e&&{...e,phase:`installing`});try{let e=await me();e.ok||Fn(e.error??s(`the_update_failed`))}catch(e){Fn(e instanceof Error?e.message:String(e))}};(0,R.useEffect)(()=>he(e=>jt(t=>t&&{...t,phase:e.phase,downloaded:e.downloaded,total:e.total,percent:e.percent,error:e.error??t.error})),[]),(0,R.useEffect)(()=>ge(e=>jt(t=>t&&{...t,changelog:e.text})),[]),(0,R.useEffect)(()=>{At?.phase!==`ready`||Mt.current||(Mt.current=!0,Ln())},[At?.phase]);let Rn=async()=>{if(!v||!St)return;let e=St.name.trim()||`${St.accent.toUpperCase()} / ${St.secondary.toUpperCase()}`,t=[...v.themePresets,{name:e,accent:St.accent,secondary:St.secondary}];Ct(null),await U({themePresets:t})},zn=async e=>{v&&await U({themePresets:v.themePresets.filter((t,n)=>n!==e)})},Bn=e=>{let t=Nt;Pt(null),t&&t.role===e&&(e===`accent`?kn:An).toLowerCase()!==t.color.toLowerCase()&&On(e,t.color)},Vn=async()=>{let e=Ve.trim();if(e&&!Re){ze(!0),Be(null);try{Fe(await $m(e,Ue)),He(``)}catch{Be(s(`could_not_add_the_tag`))}finally{ze(!1)}}},Hn=async(e,t)=>{Fe(n=>n.map(n=>n.name===e?{...n,color:t}:n)),await eh(e,t)||Be(s(`could_not_change_the_tag_s_color`))},Un=async e=>{if(Re)return;ze(!0),Be(null);let t=await Qm(e);Fe(await Zm()),t||Be(`"${e}" is still used by a folder whose index could not be updated.`),ze(!1)},Wn=async()=>{let e=Ie;if(!e||Re)return;let t=e.value.trim();t.length===0||t===e.name?Le(null):(ze(!0),Be(null),await th(e.name,t)?(Fe(await Zm()),Le(null)):Be(`Could not rename "${e.name}".`),ze(!1))},Gn=async e=>{let t=new Set(an.columns??xe.columns??[]);t.has(e)?t.delete(e):t.add(e);let n=wl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&n.push(`linkTarget`),await U({defaultView:{...an,columns:n}})},Kn=async()=>{if(ce)return;let e=!fn;L(!0),z(null);try{let t=await mt(e),r=t.registered&&t.pathMatches;P(t),y(e=>e&&{...e,linksEnabled:r}),n(),r!==e&&z(e?`Windows did not accept the registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{z(`The request to Windows failed. Try again.`)}finally{L(!1)}},qn=async e=>{if(!m){_(!0);try{d(await Je(e)),n()}finally{_(!1)}}},Jn=async()=>{if(De||!v)return;let e=!dn;Oe(!0),Ae(null);try{let t=await nt(e);Se(t);let r=sn?t.registered&&t.pathMatches:e;y(e=>e&&{...e,defaultFileManager:r}),n(),sn&&r!==e&&Ae(e?`Windows did not accept the folder registration. Try again.`:`The registration is still there. Try turning it off again.`)}catch{Ae(`The request to Windows failed. Try again.`)}finally{Oe(!1)}},Yn=async()=>{if(!Ce){we(!0),Ee(null);try{let e=await it();ye(e);let t=e.registered&&e.pathMatches;y(e=>e&&{...e,archiveHandler:t}),n(),t||Ee(`Windows did not accept the archive registration. Try again.`)}catch{Ee(`The request to Windows failed. Try again.`)}finally{we(!1)}}},Xn=async()=>{if(!Ce){we(!0),Ee(null);try{let e=await at();ye(e),y(e=>e&&{...e,archiveHandler:!1}),n(),e.registered&&Ee(`The registration is still there. Try turning it off again.`)}catch{Ee(`The request to Windows failed. Try again.`)}finally{we(!1)}}},Zn=async(e,t)=>{if(!v)return;let n={...v.extensionIcons};t===null?delete n[e]:n[e]=t,await U({extensionIcons:n})},$n={...Gt,...v?.shortcuts};(0,R.useEffect)(()=>{if(!je)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Me(null);return}let t=Yt(e);t&&(Me(null),U({shortcuts:{...$n,[je]:t}}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[je,v]),(0,R.useEffect)(()=>{if(!Ne)return;let e=e=>{if(e.preventDefault(),e.stopPropagation(),e.key===`Escape`){Pe(!1);return}let t=Yt(e);t&&(Pe(!1),U({globalHotkey:t}))};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[Ne,v]);let er=async e=>{await U({recentLimit:Math.min(Math.max(e,0),50)})},tr=(e,t)=>{let n=t??bt[e];if(n===void 0)return;let r=Number(n),i=e===`width`?{pickerWindowWidth:Math.min(4e3,Math.max(640,Number.isFinite(r)&&r>0?r:1200))}:{pickerWindowHeight:Math.min(3e3,Math.max(400,Number.isFinite(r)&&r>0?r:800))};xt(t=>({...t,[e]:void 0})),U(i)},nr=async e=>{let t=Number(e.trim()),n=Number.isFinite(t)&&t>=1&&t<=65535?Math.round(t):null;Bt(null),await U({sharePortMode:`custom`,sharePort:n}),await Zc(n,`custom`)},rr=async e=>{let t=e===`custom`,n=t?v?.sharePort??8080:null;await U({sharePortMode:t?`custom`:`random`,sharePort:n}),await Zc(n,t?`custom`:`random`)};(0,R.useEffect)(()=>{cl().then(Wt,()=>void 0)},[]);let ir=async()=>{Vt.length!==0&&(Wt(await ll(Vt)),Ht(``))},ar=async()=>{Wt(await ll(null))},or=async e=>{let t=e===`shortcut`||e===`task`?e:`none`;$t(!0),Zt(null);try{let e=await gt(t);qt(e),Zt(e.error),e.error||await U({startupMode:t})}finally{$t(!1)}},sr=async e=>{await U({galleryRoots:e.length>0?e:null})},cr=async()=>{let e=await Ba(),t=v?.galleryRoots??[];e&&!t.some(t=>t.toLowerCase()===e.toLowerCase())&&await sr([...t,e])},lr=async()=>{let e=te.trim().toLowerCase();!e||!e.startsWith(`.`)||e.length<2||(await Zn(e,D),E(``))},ur=async()=>{re(!0);try{let e=await Ba();if(!e)return;let t=await Va([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);if(!t)return;await ct(e.replace(/[\\/][^\\/]+$/,``),x(e),`file:${t}`)&&(un(),ee({folder:e,icon:t}))}finally{re(!1)}},dr=async(e,t)=>{let n={...v?.fonts};t?n[e]=t:delete n[e],await U({fonts:n})};return(0,q.jsxs)(Kh,{children:[(0,q.jsxs)(qh,{ref:nn,children:[(0,q.jsxs)(Jh,{ref:pn(`application`),children:[(0,q.jsx)(Gh,{note:`the_build_its_yafm_links_and_what_reopens_at_launch`,title:`application`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`version`)}),(0,q.jsx)(Gg,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`platform`)}),(0,q.jsx)(Gg,{children:e?.platform??`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`language`)}),(0,q.jsx)($,{children:s(`the_language_the_interface_uses_english_is_the_default_the_system_option_follows_the_operating_system`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Hh,{disabled:!v,onChange:e=>void U({language:e}),options:[Dh,...c.length>0?c:[Ch]],value:v?.language??Ch})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`picker_window_size`)}),(0,q.jsx)($,{children:s(`the_size_the_folder_and_file_picker_opens_at_width_and_height_are_in_pixels`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(n_,{inputMode:`numeric`,onBlur:e=>tr(`width`,e.currentTarget.value),onChange:e=>xt(t=>({...t,width:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:bt.width??String(v?.pickerWindowWidth??1200)}),(0,q.jsx)(Gg,{children:`×`}),(0,q.jsx)(n_,{inputMode:`numeric`,onBlur:e=>tr(`height`,e.currentTarget.value),onChange:e=>xt(t=>({...t,height:e.target.value.replace(/\D/g,``)})),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},value:bt.height??String(v?.pickerWindowHeight??800)})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`web_server_port`)}),(0,q.jsx)($,{children:s(`random_asks_the_operating_system_for_one_free_port_when_the_first_web_share_starts_and_every_web_share_keeps_using_it_custom_always_tries_the_port_below`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Io,{disabled:!v,onChange:e=>void rr(e),options:[{value:`random`,label:s(`random`)},{value:`custom`,label:s(`custom_port`)}],value:v?.sharePortMode??`random`,width:160})})]}),v?.sharePortMode===`custom`&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`custom_port`)}),(0,q.jsx)($,{children:s(`a_number_from_1_to_65535_if_it_is_already_in_use_the_app_asks_for_a_free_port_instead`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(n_,{inputMode:`numeric`,onBlur:e=>void nr(e.currentTarget.value),onChange:e=>Bt(e.target.value.replace(/\D/g,``)),onKeyDown:e=>{e.key===`Enter`&&e.currentTarget.blur()},placeholder:`8080`,value:zt??(v?.sharePort?String(v.sharePort):``)})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`link_paths`)}),(0,q.jsx)($,{children:s(`relative_links_keep_working_when_the_link_and_its_target_move_together_absolute_links_always_store_the_full_target_path`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Io,{disabled:!v,onChange:e=>void U({linkPathMode:e}),options:[{value:`relative`,label:s(`relative`)},{value:`absolute`,label:s(`absolute`)}],value:v?.linkPathMode??`relative`,width:160})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`global_hotkey`)}),(0,q.jsx)($,{children:s(`brings_the_window_forward_from_anywhere_while_the_app_is_running_empty_means_no_global_shortcut`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(P_,{$listening:Ne,disabled:!v,onClick:()=>Pe(!0),type:`button`,children:Ne?s(`press_a_key`):v?.globalHotkey?Xt(v.globalHotkey):s(`none`)}),v?.globalHotkey&&(0,q.jsxs)(Yg,{onClick:()=>void U({globalHotkey:null}),type:`button`,children:[(0,q.jsx)(Ri,{size:13}),s(`clear`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`open_yafm_links`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_yafm_links_for_the_current_user_only_turning_it_on_writes_this_copy_s_path_starting_the_app_never_touches_the_registry`)}),ae.registered&&!ae.pathMatches&&(0,q.jsx)(Wg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ae.registeredPath??`?`})}),_e&&(0,q.jsx)(Wg,{children:_e})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{$on:fn,children:s(fn?`active`:`off`)}),(0,q.jsx)(e_,{$on:fn,disabled:ce,onClick:()=>void Kn(),title:s(fn?`stop_opening_yafm_links`:`open_yafm_links_with_this_app`),type:`button`,children:(0,q.jsx)(t_,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_as_the_default_file_manager`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_folder_opens_on_this_account_explorer_stays_available_from_the_context_menu_on_linux_this_sets_the_inode_directory_default`)}),be?.registered&&!be.pathMatches&&(0,q.jsx)(Wg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:be.registeredPath??`?`})}),ke&&(0,q.jsx)(Wg,{children:ke})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{$on:dn,children:s(dn?`active`:`off`)}),(0,q.jsx)(e_,{$on:dn,disabled:!v||De,onClick:()=>void Jn(),title:s(dn?`stop_using_this_app_for_folders`:`use_this_app_for_folders`),type:`button`,children:(0,q.jsx)(t_,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`open_archives_with_this_app`)}),(0,q.jsx)($,{children:s(`registers_this_app_for_zip_7z_rar_tar_and_the_other_archive_types_on_this_account_so_double_clicking_one_shows_it_as_a_folder_here_windows_may_still_ask_once_which_app_to_use`)}),(0,q.jsx)($,{children:s(`when_this_is_off_opening_an_archive_uses_the_system_s_default_application_instead`)}),ve?.registered&&!ve.pathMatches&&(0,q.jsx)(Wg,{children:s(`the_registered_path_points_to_path_register_again_to_use_this_build`,{path:ve.registeredPath??`?`})}),Te&&(0,q.jsx)(Wg,{children:Te})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{$on:cn,children:s(cn?`active`:`off`)}),(0,q.jsxs)(F_,{disabled:!v||Ce||cn,onClick:()=>void Yn(),type:`button`,children:[(0,q.jsx)(qi,{size:13}),s(`register`)]}),e?.platform===`windows`&&(0,q.jsxs)(F_,{onClick:()=>void F(`ms-settings:defaultapps`),type:`button`,children:[(0,q.jsx)(Ai,{size:13}),s(`default_apps`)]}),(0,q.jsxs)(Qg,{disabled:!v||Ce||!ln,onClick:()=>void Xn(),type:`button`,children:[(0,q.jsx)(Ri,{size:13}),s(`unregister`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reopen_the_tabs_that_were_open`)}),(0,q.jsx)($,{children:s(`keeps_the_tabs_and_the_folder_each_one_shows_so_they_come_back_after_a_restart_a_folder_passed_on_the_command_line_takes_over_instead`)})]}),(0,q.jsx)(e_,{$on:v?.restoreTabs??!0,disabled:!v,onClick:()=>void U({restoreTabs:!v?.restoreTabs}),type:`button`,children:(0,q.jsx)(t_,{})})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`share-access`),children:[(0,q.jsx)(Gh,{note:`share_access_note`,title:`share_access`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(Q,{children:s(`share_access_require_approval`)}),(0,q.jsx)(nh,{})]}),(0,q.jsx)($,{children:s(`share_access_note`)})]}),(0,q.jsx)(e_,{$on:v?.shareAccessEnabled??!0,disabled:!v,onClick:()=>void U({shareAccessEnabled:!(v?.shareAccessEnabled??!0)}),type:`button`,children:(0,q.jsx)(t_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Q,{children:s(`share_access_approval_minutes`)})}),(0,q.jsx)(Z,{children:(0,q.jsx)(Vg,{max:1440,min:1,onChange:e=>void U({shareApprovalMinutes:Math.min(1440,Math.max(1,Number(e.target.value)||60))}),type:`number`,value:v?.shareApprovalMinutes??60})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(X,{children:(0,q.jsx)(Q,{children:s(`share_access_denial_seconds`)})}),(0,q.jsx)(Z,{children:(0,q.jsx)(Vg,{max:3600,min:1,onChange:e=>void U({shareDenialSeconds:Math.min(3600,Math.max(1,Number(e.target.value)||10))}),type:`number`,value:v?.shareDenialSeconds??10})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Ug,{children:(0,q.jsx)(Q,{children:s(`password`)})}),(0,q.jsx)($,{children:s(`share_access_password_note`)}),Ut&&(0,q.jsx)($,{children:s(`share_access_password_is_set`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Hg,{autoComplete:`new-password`,onChange:e=>Ht(e.target.value),placeholder:s(`password`),type:`password`,value:Vt}),(0,q.jsxs)(F_,{disabled:Vt.length===0,onClick:()=>void ir(),type:`button`,children:[(0,q.jsx)(Li,{size:13}),s(`save`)]}),Ut&&(0,q.jsxs)(Qg,{onClick:()=>void ar(),type:`button`,children:[(0,q.jsx)(Ri,{size:13}),s(`clear`)]})]})]}),(0,q.jsx)(Y,{children:(0,q.jsxs)(X,{children:[(0,q.jsx)(Ug,{children:(0,q.jsx)(Q,{children:s(`devices`)})}),(0,q.jsx)($,{children:s(`share_access_devices_note`)})]})}),(0,q.jsx)(Ph,{approvalMinutes:v?.shareApprovalMinutes??60,denialSeconds:v?.shareDenialSeconds??10})]})]}),(0,q.jsxs)(Jh,{ref:pn(`startup`),children:[(0,q.jsx)(Gh,{note:`how_the_app_joins_your_login_session_and_whether_it_opens_quietly_in_the_tray`,title:`startup`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`start_with_the_computer`)}),(0,q.jsx)($,{children:s(`a_shortcut_uses_the_startup_folder_or_xdg_autostart_a_task_uses_task_scheduler_or_a_systemd_user_service_which_starts_earlier_and_is_usually_faster`)}),Jt&&(0,q.jsx)(Wg,{children:Jt}),Kt&&!Kt.supported&&(0,q.jsx)(Wg,{children:s(`this_platform_cannot_create_a_per_user_startup_entry`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Io,{disabled:!v||Qt||Kt!==null&&!Kt.supported,onChange:e=>void or(e),options:[{value:`none`,label:s(`none`)},{value:`shortcut`,label:s(`shortcut`)},{value:`task`,label:s(`scheduled_task`)}],value:Kt?.mode??v?.startupMode??`none`,width:170})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`start_hidden_in_the_tray`)}),(0,q.jsx)($,{children:s(`launch_straight_to_the_tray_icon_instead_of_showing_the_window_the_tray_menu_opens_it_again`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(e_,{$on:v?.startHidden??!1,disabled:!v,onClick:()=>void U({startHidden:!v?.startHidden}),type:`button`,children:(0,q.jsx)(t_,{})})})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`fonts`),children:[(0,q.jsx)(Gh,{note:`choose_the_font_each_part_of_the_interface_uses_every_font_installed_on_this_system_is_listed_each_one_drawn_in_its_own_face`,title:`fonts`}),(0,q.jsxs)(Zh,{children:[ih.map(e=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(e.label)}),(0,q.jsx)($,{children:s(`falls_back_to_font_until_another_family_is_chosen`,{font:s(e.fallback)})})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(ch,{defaultLabel:s(e.fallback),disabled:!v,fonts:Lt,onChange:t=>void dr(e.id,t),sample:e.sample,value:v?.fonts?.[e.id]??null})})]},e.id)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset`)}),(0,q.jsx)($,{children:s(`back_to_the_app_s_built_in_font_for_every_role`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(F_,{onClick:()=>void U({fonts:{}}),type:`button`,children:[(0,q.jsx)(Ti,{size:13}),s(`reset`)]})})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`time`),children:[(0,q.jsx)(Gh,{note:`every_timestamp_in_the_interface_uses_this_format_follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`,title:`time_format`}),(0,q.jsx)(Zh,{children:(0,q.jsxs)(Qh,{children:[(0,q.jsxs)($h,{children:[(0,q.jsx)(Q,{children:s(`format`)}),(0,q.jsx)($,{children:s(`follow_the_system_force_24_hour_or_12_hour_time_or_define_your_own_pattern`)})]}),(0,q.jsx)(O_,{children:Th.map(e=>(0,q.jsx)(k_,{$active:(v?.timeFormat??`24`)===e.id,onClick:()=>void U({timeFormat:e.id}),type:`button`,children:s(e.label)},e.id))}),(v?.timeFormat??`24`)===`custom`&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(A_,{"aria-label":s(`pattern`),onBlur:Dn,onChange:e=>_t(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Dn()):e.key===`Escape`&&_t(null)},spellCheck:!1,value:H??v?.timeFormatPattern??`yyyy/MM/dd HH:mm`}),(0,q.jsx)($,{children:s(`tokens_yyyy_year_mm_month_dd_day_hh_24_hour_mm_minute_ss_second_hh_12_hour_and_a_am_pm_other_characters_are_copied`)})]}),(0,q.jsxs)(j_,{children:[(0,q.jsx)(`span`,{children:s(`preview`)}),(0,q.jsx)(`code`,{children:w(Eh,v?.timeFormat,H??v?.timeFormatPattern)})]})]})})]}),(0,q.jsxs)(Jh,{ref:pn(`updates`),children:[(0,q.jsx)(Gh,{note:`the_running_build_and_the_newest_one_published`,title:`updates`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`current_version`)}),(0,q.jsx)(Gg,{children:e?`v${e.version}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`latest_version`)}),(0,q.jsx)(Gg,{children:wt?`v${wt.latest}`:`—`})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:wt?wt.available?s(`version_version_is_available`,{version:wt.latest}):s(`you_are_on_the_latest_version`):s(`not_checked_yet`)}),(0,q.jsx)($,{children:wt?.available?s(`the_installer_downloads_installs_itself_and_closes_the_app`):s(`reads_the_version_file_the_release_workflow_publishes`)})]}),(0,q.jsxs)(Z,{children:[wt?.available&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(F_,{onClick:()=>void le(),type:`button`,children:[(0,q.jsx)(Ra,{size:13}),s(`open_release_page`)]}),sn&&(0,q.jsxs)(F_,{disabled:At!==null,onClick:()=>void Pn(),type:`button`,children:[(0,q.jsx)(oa,{size:13}),s(`download_and_install`)]})]}),(0,q.jsxs)(F_,{disabled:Et||At!==null,onClick:()=>void Nn(),type:`button`,children:[(0,q.jsx)(Ti,{size:13}),s(Et?`checking`:`check_for_updates`)]}),(0,q.jsxs)(F_,{onClick:()=>void I(),type:`button`,children:[(0,q.jsx)(bi,{size:13}),s(`open_log_folder`)]})]})]}),Ot&&(0,q.jsx)(Y,{children:(0,q.jsx)(Wg,{children:Ot})})]})]}),(0,q.jsxs)(Jh,{ref:pn(`colors`),children:[(0,q.jsx)(Gh,{note:`the_accent_and_highlight_colours_the_whole_window_uses`,title:`colors`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Qh,{children:[(0,q.jsxs)($h,{children:[(0,q.jsx)(Q,{children:s(`theme`)}),(0,q.jsx)($,{children:s(`follow_the_operating_system_or_always_use_the_light_or_dark_palette`)})]}),(0,q.jsx)(O_,{children:wh.map(e=>(0,q.jsx)(k_,{$active:(v?.themeMode??`system`)===e.id,onClick:()=>void U({themeMode:e.id}),type:`button`,children:s(e.label)},e.id))})]}),(0,q.jsxs)(Qh,{children:[(0,q.jsxs)($h,{children:[(0,q.jsx)(Q,{children:s(`presets`)}),(0,q.jsx)($,{children:s(`one_click_changes_the_accent_and_the_highlight_together`)})]}),(0,q.jsxs)(eg,{children:[td.map(e=>(0,q.jsxs)(tg,{$on:kn.toLowerCase()===e.accent&&An.toLowerCase()===e.secondary,onClick:()=>jn(e.accent,e.secondary),title:`${s(e.name)} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(cg,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)(ng,{children:s(e.name)})]},e.name)),on.map((e,t)=>(0,q.jsxs)(rg,{children:[(0,q.jsxs)(tg,{$on:kn.toLowerCase()===e.accent.toLowerCase()&&An.toLowerCase()===e.secondary.toLowerCase(),onClick:()=>jn(e.accent,e.secondary),title:`${e.name} · ${e.accent} / ${e.secondary}`,type:`button`,children:[(0,q.jsxs)(cg,{children:[(0,q.jsx)(`i`,{style:{background:e.accent}}),(0,q.jsx)(`i`,{style:{background:e.secondary}})]}),(0,q.jsx)(ng,{children:e.name})]}),(0,q.jsx)(ig,{onClick:()=>void zn(t),title:s(`remove_preset`),type:`button`,children:(0,q.jsx)(Ri,{size:9})})]},`${e.name}-${t}`)),St?(0,q.jsxs)(og,{children:[(0,q.jsxs)(cg,{children:[(0,q.jsx)(`i`,{style:{background:St.accent}}),(0,q.jsx)(`i`,{style:{background:St.secondary}})]}),(0,q.jsx)(sg,{autoFocus:!0,maxLength:24,onChange:e=>Ct({...St,name:e.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Rn()):e.key===`Escape`&&(e.preventDefault(),Ct(null))},placeholder:s(`preset_name`),spellCheck:!1,value:St.name}),(0,q.jsxs)(Yg,{onClick:()=>void Rn(),type:`button`,children:[(0,q.jsx)(Li,{size:13}),s(`save`)]}),(0,q.jsxs)(Yg,{onClick:()=>Ct(null),type:`button`,children:[(0,q.jsx)(Ri,{size:13}),s(`cancel`)]})]}):(0,q.jsxs)(ag,{disabled:!v,onClick:()=>Ct({name:``,accent:kn,secondary:An}),title:s(`save_the_current_colours_as_a_preset`),type:`button`,children:[(0,q.jsx)(Ei,{size:12}),s(`add_preset`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`accent_color`)}),(0,q.jsx)($,{children:s(`buttons_selections_focus_rings_and_active_navigation`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Wh,{colors:vt.accent,current:kn,onApply:e=>Mn(`accent`,e)}),(0,q.jsx)(Xg,{"aria-label":s(`accent_color`),disabled:!v,onBlur:()=>Bn(`accent`),onChange:e=>void U({accentColor:e.target.value}),onFocus:()=>Pt({role:`accent`,color:kn}),type:`color`,value:kn}),(0,q.jsx)(Zg,{children:kn.toUpperCase()})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`secondary_color`)}),(0,q.jsx)($,{children:s(`gradients_highlights_and_the_second_end_of_the_accent_ramp`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(Wh,{colors:vt.secondary,current:An,onApply:e=>Mn(`secondary`,e)}),(0,q.jsx)(Xg,{"aria-label":s(`secondary_color`),disabled:!v,onBlur:()=>Bn(`secondary`),onChange:e=>void U({secondaryColor:e.target.value}),onFocus:()=>Pt({role:`secondary`,color:An}),type:`color`,value:An}),(0,q.jsx)(Zg,{children:An.toUpperCase()})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset_colors`)}),(0,q.jsx)($,{children:s(`returns_the_interface_to_the_default_blue_and_indigo_theme`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(Yg,{disabled:!v,onClick:()=>{On(`accent`,kn),On(`secondary`,An),U({accentColor:null,secondaryColor:null})},type:`button`,children:[(0,q.jsx)(Ti,{size:13}),s(`reset`)]})})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`background`),children:[(0,q.jsx)(Gh,{note:`a_picture_or_video_behind_the_whole_window_from_the_title_bar_to_the_bottom`,title:`background`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Qh,{children:[(0,q.jsxs)($h,{children:[(0,q.jsx)(Q,{children:s(`wallpaper`)}),(0,q.jsx)($,{children:s(`none_keeps_the_normal_dark_surface_every_built_in_concept_comes_in_the_app_s_colour_presets_your_own_pictures_sv_gs_and_videos_are_kept_in_the_gallery`)})]}),(0,q.jsx)(m_,{children:(0,q.jsx)(h_,{$active:!v?.backgroundSource,onClick:()=>void U({backgroundSource:null}),title:s(`none`),type:`button`,children:(0,q.jsx)(b_,{children:s(`none`)})})}),(0,q.jsxs)(d_,{children:[id.map(e=>(0,q.jsxs)(f_,{children:[(0,q.jsx)(p_,{children:s(e.name)}),(0,q.jsx)(m_,{children:e.variants.map(t=>(0,q.jsx)(h_,{$active:v?.backgroundSource===t.id,onClick:()=>void U({backgroundSource:t.id}),title:`${s(e.name)} · ${s(t.preset)}`,type:`button`,children:(0,q.jsx)(`img`,{alt:``,src:b===`light`?t.lightUrl:t.url})},t.id))})]},e.id)),(0,q.jsxs)(f_,{children:[(0,q.jsx)(p_,{children:s(`motion`)}),(0,q.jsx)(m_,{children:rd.map(e=>(0,q.jsxs)(h_,{$active:v?.backgroundSource===e.id,onClick:()=>void U({backgroundSource:e.id}),title:s(e.name),type:`button`,children:[(0,q.jsx)(`img`,{alt:``,src:e.poster}),(0,q.jsx)(v_,{children:(0,q.jsx)(Gi,{size:11})})]},e.id))})]}),(0,q.jsxs)(f_,{children:[(0,q.jsx)(p_,{children:s(`custom`)}),(0,q.jsxs)(m_,{children:[(v?.backgroundCustom??[]).map(e=>(0,q.jsx)(Vh,{active:v?.backgroundSource===`file:${e}`||v?.backgroundSource===`url:${e}`||v?.backgroundSource===e,onRemove:()=>yn(e),onSelect:()=>void U({backgroundSource:A(e)?`url:${e}`:`file:${e}`}),path:e},e)),(0,q.jsxs)(y_,{onClick:()=>void _n([`.png`,`.jpg`,`.jpeg`,`.webp`,`.gif`,`.bmp`,`.svg`]),type:`button`,children:[(0,q.jsx)(Ei,{size:12}),s(`image_2`)]}),(0,q.jsxs)(y_,{onClick:()=>void _n([`.mp4`,`.webm`,`.mkv`,`.mov`,`.m4v`,`.avi`,`.wmv`,`.ogv`]),type:`button`,children:[(0,q.jsx)(Ei,{size:12}),s(`video`)]})]})]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`image_or_video_url`)}),(0,q.jsx)($,{children:s(`paste_a_direct_http_s_link_the_picture_or_video_is_loaded_from_the_network_each_time_the_window_starts`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(n_,{onChange:e=>tn(e.target.value),onKeyDown:e=>{e.key===`Enter`&&vn()},placeholder:`https://…`,value:en}),(0,q.jsxs)(Yg,{disabled:!A(en),onClick:()=>void vn(),type:`button`,children:[(0,q.jsx)(Ei,{size:13}),s(`add`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`blur`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(u_,{max:40,min:0,onChange:e=>void U({backgroundBlur:Number(e.target.value)}),type:`range`,value:v?.backgroundBlur??0}),(0,q.jsxs)(Gg,{children:[v?.backgroundBlur??0,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`saturation`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(u_,{max:200,min:0,onChange:e=>void U({backgroundSaturation:Number(e.target.value)}),type:`range`,value:v?.backgroundSaturation??100}),(0,q.jsxs)(Gg,{children:[v?.backgroundSaturation??100,`%`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`brightness`)}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(u_,{max:150,min:40,onChange:e=>void U({backgroundBrightness:Number(e.target.value)}),type:`range`,value:v?.backgroundBrightness??100}),(0,q.jsxs)(Gg,{children:[v?.backgroundBrightness??100,`%`]})]})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`safety`),children:[(0,q.jsx)(Gh,{note:`deleting_moving_renaming_or_writing_to_a_protected_folder_anything_inside_a_recursive_entry_or_a_folder_that_contains_one_always_waits_for_an_explicit_confirmation`,title:`safety`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Qh,{children:[(0,q.jsxs)($h,{children:[(0,q.jsx)(Q,{children:s(`protected_folders`)}),(0,q.jsx)($,{children:s(`rules_are_full_path_globs_stays_inside_one_name_crosses_folders_and_matches_one_character_a_rule_without_a_folder_part_such_as_log_applies_to_that_name_at_any_depth_vars_vars_and_are_expanded_first`)})]}),(0,q.jsx)(x_,{children:(v?.protectedPaths??[]).map(e=>(0,q.jsxs)(S_,{children:[(0,q.jsx)(C_,{"aria-label":s(`protected_path`),onBlur:K,onChange:t=>qe({from:e,value:t.target.value}),onFocus:()=>qe({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),K()):e.key===`Escape`&&qe(null)},spellCheck:!1,value:Ge?.from===e?Ge.value:e}),(0,q.jsx)(w_,{onClick:()=>bn(e),title:s(`remove`),type:`button`,children:(0,q.jsx)(Ri,{size:10})})]},e))}),(0,q.jsxs)(E_,{children:[(0,q.jsx)(D_,{"aria-label":s(`new_protected_rule`),onChange:e=>et(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),G())},placeholder:`*.log`,spellCheck:!1,value:$e}),(0,q.jsxs)(Yg,{onClick:G,type:`button`,children:[(0,q.jsx)(Ei,{size:13}),s(`add_the_rule`)]})]}),(0,q.jsxs)(T_,{children:[(0,q.jsxs)(Yg,{onClick:()=>void xn(),type:`button`,children:[(0,q.jsx)(Ti,{size:13}),s(`restore_defaults`)]}),(0,q.jsxs)(Yg,{onClick:()=>void W(),type:`button`,children:[(0,q.jsx)(bi,{size:13}),s(`add_folder_2`)]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`confirmation_delay`)}),(0,q.jsx)($,{children:s(`the_delete_button_in_the_protected_folder_dialog_stays_disabled_for_this_many_seconds_at_least_2`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(u_,{max:30,min:2,onChange:e=>void U({deleteDelaySeconds:Number(e.target.value)}),type:`range`,value:v?.deleteDelaySeconds??5}),(0,q.jsxs)(Gg,{children:[v?.deleteDelaySeconds??5,`s`]})]})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`tags`),children:[(0,q.jsx)(Gh,{note:`every_tag_in_the_catalogue_add_rename_recolour_or_remove_them_here`,title:`tags`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(qg,{"aria-label":s(`color_of_the_new_tag`),onChange:e=>We(e.target.value),type:`color`,value:Ue}),(0,q.jsx)(n_,{onChange:e=>He(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Vn())},placeholder:s(`new_tag`),spellCheck:!1,value:Ve})]}),(0,q.jsx)($,{children:s(`add_a_tag_here_it_is_available_in_every_folder`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(Yg,{disabled:Re||Ve.trim().length===0,onClick:()=>void Vn(),type:`button`,children:[(0,q.jsx)(Ei,{size:13}),s(`add`)]})})]}),V&&(0,q.jsx)(Y,{children:(0,q.jsx)(Wg,{children:V})}),B.length===0&&(0,q.jsx)(Y,{children:(0,q.jsx)($,{children:s(`no_tags_yet_add_one_below_it_is_available_in_every_folder`)})}),B.map(e=>(0,q.jsx)(Y,{children:Ie?.name===e.name?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(qg,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void Hn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(Jg,{autoFocus:!0,disabled:Re,onChange:t=>Le({name:e.name,value:t.target.value}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Wn()):e.key===`Escape`&&(e.preventDefault(),Le(null))},value:Ie.value})]}),(0,q.jsx)($,{children:s(`press_enter_to_save_escape_to_cancel`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsxs)(Yg,{disabled:Re,onClick:()=>void Wn(),type:`button`,children:[(0,q.jsx)(Li,{size:13}),s(`save`)]}),(0,q.jsxs)(Yg,{disabled:Re,onClick:()=>Le(null),type:`button`,children:[(0,q.jsx)(Ri,{size:13}),s(`cancel`)]})]})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(qg,{"aria-label":s(`color_of_tag`,{tag:e.name}),onChange:t=>void Hn(e.name,t.target.value),title:s(`change_this_tag_s_color`),type:`color`,value:e.color??`#64748b`}),(0,q.jsx)(Q,{children:e.name})]}),(0,q.jsx)($,{children:oe(s,e.folders,`used_in_1_folder_renaming_or_removing_it_updates_that_folder_s_index`,`used_in_count_folders_renaming_or_removing_it_updates_those_folders_indexes`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsxs)(Yg,{disabled:Re,onClick:()=>Le({name:e.name,value:e.name}),type:`button`,children:[(0,q.jsx)(ra,{size:13}),s(`edit`)]}),(0,q.jsxs)(Qg,{disabled:Re,onClick:()=>void Un(e.name),type:`button`,children:[(0,q.jsx)(Ii,{size:13}),s(`remove`)]})]})]})},e.name))]})]}),(0,q.jsxs)(Jh,{ref:pn(`files-view`),children:[(0,q.jsx)(Gh,{note:`the_defaults_every_folder_starts_with_a_folder_can_still_override_them`,title:`files_view`,global:!0}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`default_view`)}),(0,q.jsx)($,{children:s(`the_mode_every_folder_starts_with_a_folder_can_still_remember_its_own_list_or_grid_mode_from_the_title_bar`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(c_,{children:[(0,q.jsx)(l_,{$on:an.mode===`list`,onClick:()=>void U({defaultView:{...an,mode:`list`}}),type:`button`,children:s(`list`)}),(0,q.jsx)(l_,{$on:an.mode===`grid`,onClick:()=>void U({defaultView:{...an,mode:`grid`}}),type:`button`,children:s(`grid`)})]})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`list_icon_size`)}),(0,q.jsx)($,{children:s(`the_icon_in_the_list_rows`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(u_,{max:48,min:16,onChange:e=>void U({defaultView:{...an,iconSize:Number(e.target.value)}}),step:2,type:`range`,value:an.iconSize}),(0,q.jsxs)(Gg,{children:[an.iconSize,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`grid_size`)}),(0,q.jsx)($,{children:s(`the_height_of_a_grid_tile_the_icon_inside_follows_it`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(u_,{max:260,min:100,onChange:e=>void U({defaultView:{...an,gridSize:Number(e.target.value)}}),step:4,type:`range`,value:an.gridSize}),(0,q.jsxs)(Gg,{children:[an.gridSize,`px`]})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(Q,{children:s(`selection_checkboxes`)}),(0,q.jsx)(nh,{})]}),(0,q.jsx)($,{children:s(`show_a_checkbox_before_every_name_the_way_explorer_does_checked_entries_can_be_copied_cut_or_deleted_together`)})]}),(0,q.jsx)(e_,{$on:v?.showCheckboxes??!0,disabled:!v,onClick:()=>void U({showCheckboxes:!(v?.showCheckboxes??!0)}),type:`button`,children:(0,q.jsx)(t_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(Q,{children:s(`open_with_a_single_click`)}),(0,q.jsx)(nh,{})]}),(0,q.jsx)($,{children:s(`off_means_double_click_like_explorer_s_default_the_checkbox_still_only_selects_so_a_click_on_it_never_opens_the_entry`)})]}),(0,q.jsx)(e_,{$on:v?.openOnSingleClick??!1,disabled:!v,onClick:()=>void U({openOnSingleClick:!(v?.openOnSingleClick??!1)}),type:`button`,children:(0,q.jsx)(t_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(Q,{children:s(`open_the_file_tray_while_dragging`)}),(0,q.jsx)(nh,{})]}),(0,q.jsx)($,{children:s(`the_tray_appears_when_a_drag_starts_and_closes_again_if_it_is_still_empty_off_leaves_it_to_the_title_bar_button`)})]}),(0,q.jsx)(e_,{$on:v?.trayAutoShow??!0,disabled:!v,onClick:()=>void U({trayAutoShow:!(v?.trayAutoShow??!0)}),type:`button`,children:(0,q.jsx)(t_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(Q,{children:s(`confirm_before_deleting`)}),(0,q.jsx)(nh,{})]}),(0,q.jsx)($,{children:s(`asks_before_moving_items_to_the_recycle_bin_shift_del_always_asks_because_that_deletes_permanently`)})]}),(0,q.jsx)(e_,{$on:v?.confirmDelete??!1,disabled:!v,onClick:()=>void U({confirmDelete:!(v?.confirmDelete??!1)}),type:`button`,children:(0,q.jsx)(t_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(Q,{children:s(`automatic_rename_suffix`)}),(0,q.jsx)(nh,{})]}),(0,q.jsx)($,{children:s(`the_suffix_added_when_a_copy_or_a_new_item_would_have_the_same_name`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(Io,{disabled:!v,onChange:e=>void U({conflictNameStyle:e}),options:[{value:`space_parentheses`,label:`Test (1).txt`},{value:`underscore`,label:`Test_1.txt`},{value:`dot`,label:`Test.1.txt`}],value:v?.conflictNameStyle??`space_parentheses`,width:160})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(Q,{children:s(`play_audio_in_video_previews`)}),(0,q.jsx)(nh,{})]}),(0,q.jsx)($,{children:s(`video_previews_play_muted_by_default_turn_this_on_to_hear_their_audio_while_the_details_panel_is_open`)})]}),(0,q.jsx)(e_,{$on:v?.previewVideoAudio??!1,disabled:!v,onClick:()=>void U({previewVideoAudio:!(v?.previewVideoAudio??!1)}),type:`button`,children:(0,q.jsx)(t_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(Q,{children:s(`autoplay_video_previews`)}),(0,q.jsx)(nh,{})]}),(0,q.jsx)($,{children:s(`off_by_default_turn_this_on_to_start_a_video_as_soon_as_its_details_panel_opens_the_play_button_still_works_when_it_is_off`)})]}),(0,q.jsx)(e_,{$on:v?.previewVideoAutoplay??!1,disabled:!v,onClick:()=>void U({previewVideoAutoplay:!(v?.previewVideoAutoplay??!1)}),type:`button`,children:(0,q.jsx)(t_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(Q,{children:s(`preview_panel_under_the_list`)}),(0,q.jsx)(nh,{})]}),(0,q.jsx)($,{children:s(`shows_the_pictures_videos_and_documents_the_shell_can_preview_as_grid_tiles_below_the_list_the_tiles_follow_the_grid_size_and_the_panel_only_appears_in_list_mode`)})]}),(0,q.jsx)(e_,{$on:an.showImages??!0,onClick:()=>void U({defaultView:{...an,showImages:!(an.showImages??!0)}}),type:`button`,children:(0,q.jsx)(t_,{})})]}),(0,q.jsx)(Y,{children:(0,q.jsxs)(X,{children:[(0,q.jsxs)(Ug,{children:[(0,q.jsx)(Q,{children:s(`columns`)}),(0,q.jsx)(nh,{})]}),(0,q.jsx)($,{children:s(`shown_in_every_folder_changing_them_changes_all_folders_at_once`)})]})}),(0,q.jsx)(Y,{children:(0,q.jsxs)(M_,{children:[wl.map(e=>(0,q.jsxs)(N_,{children:[(0,q.jsx)(`input`,{checked:(an.columns??[]).includes(e.id),onChange:()=>void Gn(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,q.jsxs)(N_,{children:[(0,q.jsx)(`input`,{checked:(an.columns??[]).includes(`linkTarget`),onChange:()=>void Gn(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`link_target_after_the_name`)})]})]})})]}),(0,q.jsxs)(z_,{children:[s(`the_default_view_list_icon_size_and_grid_size_are_only_defaults_a_folder_can_still_remember_its_own_from_the_title_bar`),` `,(0,q.jsx)(nh,{}),` `,s(`anything_marked_as_global_always_applies_to_every_folder`)]})]}),(0,q.jsxs)(Jh,{ref:pn(`shortcuts`),children:[(0,q.jsx)(Gh,{note:`the_keys_this_window_listens_for_click_a_combination_to_record_a_new_one`,title:`shortcuts`}),(0,q.jsxs)(Zh,{children:[Sh.map(({id:e,label:t,note:n})=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(t)}),(0,q.jsx)($,{children:s(n)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(P_,{$listening:je===e,onClick:()=>Me(e),type:`button`,children:je===e?s(`press_a_key`):Xt($n[e])})})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`reset`)}),(0,q.jsx)($,{children:s(`back_to_the_default_combination_for_every_action`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(F_,{onClick:()=>void U({shortcuts:{...Gt}}),type:`button`,children:[(0,q.jsx)(Ti,{size:13}),s(`reset`)]})})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`memory`),children:[(0,q.jsx)(Gh,{note:`what_the_process_holds_and_how_to_give_it_back`,title:`memory`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(jg,{children:[(0,q.jsxs)(Mg,{children:[(0,q.jsx)(Q,{children:s(`process_memory`)}),(0,q.jsx)(Gg,{children:M?`${C(M.private)} · ${_g(M.private,M.available)}`:`—`})]}),(0,q.jsx)(Ng,{children:(0,q.jsx)(Pg,{$ratio:M?M.private/Math.max(M.available,1):0,$tone:S(M?M.private/Math.max(M.available,1):0)})}),(0,q.jsx)($,{children:M?s(`committed_of_available_the_runtime_can_use_resident_is_resident_the_webview_runs_in_its_own_process`,{available:C(M.available),resident:C(M.workingSet)}):s(`reading_the_current_usage`)})]}),(0,q.jsxs)(jg,{children:[(0,q.jsxs)(Mg,{children:[(0,q.jsx)(Q,{children:s(`managed_heap`)}),(0,q.jsx)(Gg,{children:M?`${C(M.managed)} · ${_g(M.managed,M.private)}`:`—`})]}),(0,q.jsx)(Ng,{children:(0,q.jsx)(Pg,{$ratio:M?M.managed/Math.max(M.private,1):0,$tone:`var(--accent-secondary)`})}),(0,q.jsx)($,{children:s(`share_of_this_process_that_the_net_heap_holds_thumbnails_and_folder_size_walks_live_here_the_runtime_grows_it_on_demand_and_gives_it_back_after_a_collection`)})]}),(0,q.jsxs)(jg,{children:[(0,q.jsxs)(Mg,{children:[(0,q.jsx)(Q,{children:s(`native_and_runtime`)}),(0,q.jsx)(Gg,{children:M?`${C(Math.max(0,M.private-M.managed))} · ${_g(Math.max(0,M.private-M.managed),M.private)}`:`—`})]}),(0,q.jsx)(Ng,{children:(0,q.jsx)(Pg,{$ratio:M?Math.max(0,M.private-M.managed)/Math.max(M.private,1):0,$tone:`var(--accent-primary)`})}),(0,q.jsx)($,{children:s(`the_runtime_loaded_libraries_and_the_rust_helper_share_this_part_rust_runs_inside_the_process_so_it_has_no_separate_figure`)})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`free_memory`)}),(0,q.jsx)($,{children:s(`compacts_the_heap_and_returns_unused_pages_to_the_system_always_safe`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(F_,{onClick:()=>void dt().then(ie),type:`button`,children:[(0,q.jsx)(va,{size:13}),s(`trim_now`)]})})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`overview`),children:[(0,q.jsx)(Gh,{note:`the_home_tab_s_history_and_how_much_of_it_it_shows`,title:`overview`}),(0,q.jsx)(Zh,{children:(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`recent_items`)}),(0,q.jsx)($,{children:s(`how_many_recently_opened_folders_the_overview_lists_0_hides_the_section`)})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(n_,{max:50,min:0,onChange:e=>void er(Number(e.target.value)),type:`number`,value:v?.recentLimit??10})})]})})]}),(0,q.jsxs)(Jh,{ref:pn(`gallery`),children:[(0,q.jsx)(Gh,{note:`the_folders_the_gallery_scans_for_pictures_and_videos`,title:`gallery`}),(0,q.jsxs)(Zh,{children:[(v?.galleryRoots??[]).map(e=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:x(e)}),(0,q.jsx)($,{children:e})]}),(0,q.jsx)(Z,{children:(0,q.jsx)(I_,{onClick:()=>void sr((v?.galleryRoots??[]).filter(t=>t!==e)),title:s(`stop_scanning_this_folder`),type:`button`,children:(0,q.jsx)(Ri,{size:12})})})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`scan_folders`)}),(0,q.jsx)($,{children:(v?.galleryRoots??[]).length===0?s(`nothing_added_yet_so_the_gallery_reads_the_pictures_folder`):s(`only_these_folders_are_scanned_three_levels_deep`)})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(F_,{onClick:()=>void cr(),type:`button`,children:[(0,q.jsx)(bi,{size:13}),s(`choose_folder`)]})})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`icons`),children:[(0,q.jsx)(Gh,{note:`where_the_shell_s_own_icons_and_the_built_in_glyphs_come_from`,title:`icons`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_system_file_icons`)}),(0,q.jsx)($,{children:s(`ask_the_shell_for_the_icon_of_each_file_type_instead_of_the_built_in_glyphs`)})]}),(0,q.jsx)(e_,{$on:v?.systemIcons??!1,disabled:!v,onClick:()=>void U({systemIcons:!v?.systemIcons}),type:`button`,children:(0,q.jsx)(t_,{})})]}),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`use_custom_folder_icons`)}),(0,q.jsx)($,{children:s(`folders_that_define_an_icon_desktop_ini_keep_showing_it_even_when_system_icons_are_off`)})]}),(0,q.jsx)(e_,{$on:v?.customFolderIcons??!1,disabled:!v,onClick:()=>void U({customFolderIcons:!v?.customFolderIcons}),type:`button`,children:(0,q.jsx)(t_,{})})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`extension-icons`),children:[(0,q.jsx)(Gh,{note:`a_custom_glyph_for_one_file_extension`,title:`icons_by_extension`}),(0,q.jsxs)(Zh,{children:[Object.entries(v?.extensionIcons??{}).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:e}),(0,q.jsx)($,{children:Rh(s,t)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(zh,{source:t}),(0,q.jsx)(I_,{onClick:()=>void Zn(e,null),title:s(`remove_this_rule`),type:`button`,children:(0,q.jsx)(Ri,{size:12})})]})]},e)),(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`add_a_rule`)}),(0,q.jsx)($,{children:s(`extension_and_the_icon_to_draw_for_it`)})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)(n_,{onChange:e=>E(e.target.value),placeholder:`.psd`,spellCheck:!1,value:te}),(0,q.jsxs)(s_,{children:[(0,q.jsx)(I_,{onClick:()=>j(e=>!e),title:s(`choose_the_icon`),type:`button`,children:(0,q.jsx)(zh,{source:D})}),k&&(0,q.jsx)(vf,{allowDefault:!1,onClose:()=>j(!1),onPick:e=>{O(e??`file`),j(!1)},value:D})]}),(0,q.jsx)(I_,{onClick:()=>void lr(),title:s(`add_the_rule`),type:`button`,children:(0,q.jsx)(Ei,{size:13})})]})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`folder-icons`),children:[(0,q.jsx)(Gh,{note:`a_single_folder_can_carry_an_icon_of_its_own`,title:`folder_icons`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`give_a_folder_its_own_icon`)}),(0,q.jsx)($,{children:s(`stored_in_the_folder_s_parent_index_so_it_stays_with_the_files`,{index:`.yafm-index.db`})})]}),(0,q.jsxs)(Z,{children:[T&&(0,q.jsx)(Bh,{src:T.icon}),(0,q.jsxs)(F_,{disabled:ne,onClick:()=>void ur(),type:`button`,children:[(0,q.jsx)(bi,{size:13}),s(ne?`choosing`:`choose_folder_and_icon`)]})]})]}),T&&(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:x(T.folder)}),(0,q.jsx)($,{children:T.folder})]}),(0,q.jsx)(Z,{children:(0,q.jsxs)(R_,{children:[(0,q.jsx)(Li,{size:11}),` `,s(`saved`)]})})]})]})]}),(0,q.jsxs)(Jh,{ref:pn(`folder-index`),children:[(0,q.jsx)(Gh,{note:`the_hidden_cache_that_makes_a_folder_open_instantly_next_time`,title:`folder_index`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`keep_a_index_in_every_folder`,{index:`.yafm-index.db`})}),(0,q.jsx)($,{children:s(`holds_icons_cached_folder_sizes_and_the_folder_s_last_listing_so_it_opens_instantly_next_time_hidden_and_marked_as_a_system_file_on_windows_skipped_where_the_folder_is_read_only`)})]}),(0,q.jsx)(e_,{$on:v?.writeDirectoryIndex??!0,disabled:!v,onClick:()=>void U({writeDirectoryIndex:!v?.writeDirectoryIndex}),type:`button`,children:(0,q.jsx)(t_,{})})]}),(0,q.jsxs)(Qh,{children:[(0,q.jsxs)($h,{children:[(0,q.jsx)(Q,{children:s(`directory_index_blacklist`)}),(0,q.jsx)($,{children:s(`rules_are_full_path_globs_matches_within_one_path_segment_and_crosses_folders_matching_folders_use_the_central_database_instead_of_creating_yafm_index_db_files`)})]}),(0,q.jsx)(x_,{children:(v?.directoryIndexBlacklist??[]).map(e=>(0,q.jsxs)(S_,{children:[(0,q.jsx)(C_,{"aria-label":s(`directory_index_blacklist_rule`),onBlur:Sn,onChange:t=>Xe({from:e,value:t.target.value}),onFocus:()=>Xe({from:e,value:e}),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),Sn()):e.key===`Escape`&&Xe(null)},spellCheck:!1,value:Ye?.from===e?Ye.value:e}),(0,q.jsx)(w_,{onClick:()=>Tn(e),title:s(`remove`),type:`button`,children:(0,q.jsx)(Ri,{size:10})})]},e))}),(0,q.jsxs)(E_,{children:[(0,q.jsx)(D_,{"aria-label":s(`directory_index_blacklist_rule`),onChange:e=>lt(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Cn())},placeholder:`**/uv/cache/**`,spellCheck:!1,value:st}),(0,q.jsxs)(Yg,{onClick:Cn,type:`button`,children:[(0,q.jsx)(Ei,{size:13}),s(`add_the_rule`)]})]}),(0,q.jsxs)(T_,{children:[(0,q.jsxs)(Yg,{onClick:En,type:`button`,children:[(0,q.jsx)(Ti,{size:13}),s(`restore_defaults`)]}),(0,q.jsxs)(Yg,{onClick:()=>void wn(),type:`button`,children:[(0,q.jsx)(bi,{size:13}),s(`add_folder_2`)]})]})]})]}),!(v?.writeDirectoryIndex??!0)&&(0,q.jsx)(B_,{children:Lh(s,e?.platform)})]}),(0,q.jsxs)(Jh,{ref:pn(`indexing`),children:[(0,q.jsx)(Gh,{note:`background_folder_size_and_item_count_walks`,title:`index_tasks`}),(0,q.jsx)(Ih,{})]}),(0,q.jsxs)(Jh,{ref:pn(`files`),children:[(0,q.jsx)(Gh,{note:`what_the_listings_include`,title:`files`}),(0,q.jsxs)(Zh,{children:[(0,q.jsxs)(Y,{children:[(0,q.jsxs)(X,{children:[(0,q.jsx)(Q,{children:s(`show_hidden_files`)}),(0,q.jsxs)($,{children:[s(`toggles_ordinary_hidden_files_for_this_session_alt_also_works_system_files_still_follow_explorer`),u?.overridden&&(0,q.jsx)(Kg,{disabled:m,onClick:()=>void qn(null),type:`button`,children:s(`follow_system`)})]})]}),(0,q.jsxs)(Z,{children:[(0,q.jsx)($g,{$on:u?.showHidden??!1,children:u?.overridden?Fh(s,u.showHidden):s(`follow_system`)}),(0,q.jsx)(e_,{$on:u?.showHidden??!1,disabled:!u||m,onClick:()=>void qn(!(u?.showHidden??!1)),title:s(`show_hidden_files`),type:`button`,children:(0,q.jsx)(t_,{})})]})]}),(0,q.jsxs)(Y,{children:[(0,q.jsx)(Q,{children:s(`protected_operating_system_files`)}),(0,q.jsx)(Gg,{children:Fh(s,u?.showSystem)})]})]}),(0,q.jsx)(z_,{children:s(`hidden_items_follow_this_app_s_switch_protected_operating_system_files_still_follow_windows`)})]})]}),(0,q.jsxs)(fg,{"aria-label":s(`settings_sections`),onWheel:gn,children:[(0,q.jsx)(pg,{children:s(`sections`)}),(0,q.jsx)(mg,{children:kh.map(({id:e,label:t})=>(0,q.jsxs)(hg,{$active:Ft===e,onClick:()=>mn(e),type:`button`,children:[(0,q.jsx)(Xh,{children:Ah[t]}),(0,q.jsx)(`span`,{children:s(t)})]},e))}),(0,q.jsx)(gg,{children:s(`changes_are_saved_as_you_make_them`)})]}),At&&(0,ro.createPortal)((0,q.jsx)(bg,{children:(0,q.jsxs)(xg,{"aria-modal":`true`,role:`dialog`,children:[(0,q.jsxs)(Sg,{children:[(0,q.jsx)(`h2`,{children:s(`software_update`)}),(0,q.jsx)(`p`,{children:wt?.latest?s(`version_version`,{version:wt.latest}):s(`preparing_the_update`)})]}),(0,q.jsx)(Cg,{children:s(`changelog`)}),At.changelog?(0,q.jsx)(wg,{onClick:Eg,children:(0,q.jsx)(a,{source:At.changelog})}):(0,q.jsx)(Tg,{children:At.phase===`changelog`?s(`loading_the_changelog`):s(`the_changelog_could_not_be_loaded`)}),(0,q.jsxs)(Dg,{children:[(0,q.jsx)(`span`,{children:vg(At,s)}),(0,q.jsx)(`span`,{children:yg(At)})]}),(0,q.jsx)(Og,{children:(0,q.jsx)(kg,{$percent:Math.max(0,Math.min(100,At.percent))})}),At.error&&(0,q.jsx)(Wg,{children:At.error}),(0,q.jsxs)(Ag,{children:[(At.phase===`changelog`||At.phase===`downloading`)&&(0,q.jsxs)(F_,{onClick:()=>void In(),type:`button`,children:[(0,q.jsx)(Ri,{size:13}),s(`cancel`)]}),At.phase===`ready`&&(0,q.jsxs)(F_,{onClick:()=>void Ln(),type:`button`,children:[(0,q.jsx)(Da,{size:13}),s(`install_update`)]}),At.phase===`installing`&&(0,q.jsxs)(F_,{disabled:!0,type:`button`,children:[(0,q.jsx)(Ti,{size:13}),s(`installing`)]}),(At.phase===`ready`||At.phase===`error`||At.phase===`cancelled`||At.phase===`installing`)&&(0,q.jsxs)(F_,{onClick:()=>jt(null),type:`button`,children:[(0,q.jsx)(Ri,{size:13}),s(`close`)]})]})]})}),document.body)]})}function Ph({approvalMinutes:e,denialSeconds:t}){let n=o(),[r,i]=(0,R.useState)([]),[a,s]=(0,R.useState)(!1);(0,R.useEffect)(()=>{let e=()=>void al().then(i,()=>i([]));if(e(),l.available)return l.on(t=>{t.type===`share.devices.changed`&&e()})},[]);let c=async(e,t,n)=>{s(!0);try{i(await ol(e,t,n))}finally{s(!1)}},u=async e=>{s(!0);try{i(await sl(e))}finally{s(!1)}},d=e=>e.state===`allowed`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_allowed`)} · ${n(`share_access_expired`)}`:n(`share_access_allowed`):e.state===`denied`?e.expiresAt>0&&e.expiresAt<Date.now()?`${n(`share_access_denied`)} · ${n(`share_access_expired`)}`:n(`share_access_denied`):n(`share_access_not_decided`),f=e=>e.expiresAt===0?n(`share_access_forever`):new Date(e.expiresAt).toLocaleString();return(0,q.jsxs)(Fg,{children:[r.length===0&&(0,q.jsx)(Ig,{children:n(`share_access_no_devices`)}),r.map(r=>(0,q.jsxs)(Lg,{children:[(0,q.jsxs)(Rg,{children:[(0,q.jsx)(zg,{children:r.name||n(`share_access_not_decided`)}),(0,q.jsxs)(Bg,{children:[r.address,r.address?` · `:``,n(`share_access_last_seen`),`: `,new Date(r.lastSeen).toLocaleString()]}),(0,q.jsxs)(Bg,{children:[d(r),r.state!==``&&(0,q.jsxs)(q.Fragment,{children:[` · `,n(`share_access_expires`),`: `,f(r)]})]})]}),(0,q.jsx)(Io,{disabled:a,onChange:e=>{let[t,n]=e.split(`:`);t===`remove`?u(r.id):t!==`none`&&c(r.id,t,n===`forever`)},options:[{value:`none:`,label:n(`share_access_not_decided`)},{value:`allowed:timed`,label:`${n(`share_access_allowed`)} (${e}m)`},{value:`allowed:forever`,label:n(`share_access_allow_forever`)},{value:`denied:timed`,label:`${n(`share_access_denied`)} (${t}s)`},{value:`denied:forever`,label:n(`share_access_block_forever`)},{value:`remove:`,label:n(`remove`)}],value:r.state===`allowed`?r.expiresAt===0?`allowed:forever`:`allowed:timed`:r.state===`denied`?r.expiresAt===0?`denied:forever`:`denied:timed`:`none:`,width:190})]},r.id))]})}function Fh(e,t){return e(t===void 0?`reading`:t?`shown`:`hidden`)}function Ih(){let e=o(),[t,n]=(0,R.useState)(null);return(0,R.useEffect)(()=>{let e=!0,t=()=>Ye().then(t=>{e&&n(t)},()=>{e&&n(null)});t();let r=window.setInterval(t,1e3);return()=>{e=!1,window.clearInterval(r)}},[]),t?t.count===0?(0,q.jsx)(B_,{children:e(`no_indexing_tasks_are_running`)}):(0,q.jsxs)(Zh,{children:[(0,q.jsx)(Y,{children:(0,q.jsx)(Q,{children:e(`count_indexing_tasks`,{count:t.count})})}),t.directories.slice(0,50).map(e=>(0,q.jsx)(Y,{children:(0,q.jsx)(Gg,{title:e,children:e})},e))]}):(0,q.jsx)(B_,{children:e(`index_task_information_is_unavailable`)})}function Lh(e,t){return e(`indexes_are_off_every_folder_s_icons_sizes_and_cached_listing_now_live_in_one_database_in_place_so_that_drive_grows_with_every_folder_you_open_that_is_the_cost_of_keeping_folders_free_of_extra_files`,{place:e(t===`windows`?`appdata_which_sits_on_the_system_drive_usually_c`:t===`linux`?`your_home_folder_which_often_shares_a_partition_with_the_system`:`the_app_s_settings_folder_which_usually_sits_on_the_system_drive`)})}function Rh(e,t){return t.startsWith(`file:`)?t.slice(5):e(`built_in_source`,{source:t})}function zh({source:e}){let t=U(e.startsWith(`file:`)?e.slice(5):null);return(0,q.jsx)(L_,{children:t?(0,q.jsx)(`img`,{alt:``,height:16,src:t,width:16}):(0,q.jsx)(mc,{name:e,size:16})})}function Bh({src:e}){let t=U(e);return(0,q.jsx)(L_,{children:t&&(0,q.jsx)(`img`,{alt:``,height:18,src:t,width:18})})}function Vh({path:e,active:t,onSelect:n,onRemove:r}){let i=o(),a=A(e),s=K(a?null:e),c=a?e:s,l=Sd(e.split(/[?#]/)[0]);return(0,q.jsxs)(g_,{children:[(0,q.jsxs)(h_,{$active:t,onClick:n,title:e,type:`button`,children:[c&&(l?(0,q.jsx)(`video`,{muted:!0,preload:`metadata`,src:`${c}#t=0.5`}):(0,q.jsx)(`img`,{alt:``,src:c})),l&&(0,q.jsx)(v_,{children:(0,q.jsx)(Gi,{size:11})})]}),(0,q.jsx)(__,{onClick:r,title:i(`remove`),type:`button`,children:(0,q.jsx)(Ri,{size:9})})]})}function Hh({value:e,options:t,onChange:n,disabled:r}){let i=o(),[a,s]=(0,R.useState)(null),c=(0,R.useRef)(null);return(0,R.useEffect)(()=>{if(!a)return;let e=()=>s(null),t=t=>{let n=t.target;n instanceof Node&&c.current?.contains(n)||n instanceof Element&&n.closest(`[data-language-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[a]),(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(r_,{"aria-expanded":a!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(a){s(null);return}let e=c.current?.getBoundingClientRect();e&&s({left:e.left,top:e.bottom+4,width:e.width})},ref:c,type:`button`,children:[(0,q.jsx)(`span`,{children:Uh(i,e)}),(0,q.jsx)(i_,{children:(0,q.jsx)(ki,{size:11})})]}),a&&(0,ro.createPortal)((0,q.jsx)(a_,{"data-language-menu":`true`,role:`listbox`,style:{left:a.left,minWidth:a.width,top:a.top},children:t.map(t=>(0,q.jsxs)(o_,{$active:t===e,"aria-selected":t===e,onClick:()=>{n(t),s(null)},role:`option`,type:`button`,children:[(0,q.jsx)(`span`,{children:Uh(i,t)}),t===e&&(0,q.jsx)(Li,{size:11})]},t))}),document.body)]})}function Uh(e,t){return t===Dh?e(`system_default`):Oh[t]??t}function Wh({colors:e,current:t,onApply:n}){let r=o();if(e.length===0)return null;let[i,...a]=e;return(0,q.jsxs)(lg,{children:[(0,q.jsxs)(dg,{$color:i,onClick:()=>n(i),title:r(`previous_colour_colour`,{colour:i}),type:`button`,children:[(0,q.jsx)(`i`,{}),r(`previous`)]}),a.map(e=>(0,q.jsx)(ug,{$color:e,onClick:()=>n(e),title:r(`use_colour`,{colour:e}),type:`button`,children:e.toLowerCase()===t.toLowerCase()&&(0,q.jsx)(Li,{size:9})},e))]})}function Gh({title:e,note:t,global:n=!1}){let r=o();return(0,q.jsxs)(Yh,{children:[(0,q.jsxs)(`h2`,{children:[(0,q.jsx)(Xh,{children:Ah[e]}),r(e),n&&(0,q.jsx)(nh,{})]}),(0,q.jsx)(`p`,{children:r(t)})]})}var Kh=v.div`
    display: flex;
    align-items: stretch;
    flex: 1;
    min-height: 0;
    gap: 22px;
    padding: 22px 26px 0;
`,qh=v.div`
    display: flex;
    flex-direction: column;
    gap: 26px;
    flex: 1;
    min-width: 0;
    overflow-y: auto;
    padding: 2px 8px 30px 2px;
    scrollbar-gutter: stable;
`,Jh=v.section`
    display: flex;
    flex-direction: column;
    gap: 10px;
    scroll-margin-top: 10px;
`,Yh=v.header`
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
`,Xh=v.i`
    display: grid;
    place-items: center;
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    color: var(--accent-primary);
    opacity: 0.85;
`,Zh=v.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-card);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.18);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    overflow: hidden;
`,Qh=v.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    padding: 14px 16px;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
        border-bottom: 0;
    }
`,$h=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
`,eg=v.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
    gap: 6px;
`,tg=v.button`
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
`,ng=v.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rg=v.div`
    display: flex;
    gap: 3px;
    min-width: 0;

    > button:first-child {
        flex: 1;
        min-width: 0;
    }
`,ig=v.button`
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
`,ag=v.button`
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
`,og=v.div`
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border: 1px dashed var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,sg=v.input`
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
`,cg=v.span`
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
`,lg=v.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,ug=v.button`
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
`,dg=v.button`
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
`,fg=v.nav`
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
`,pg=v.span`
    display: block;
    margin-bottom: 8px;
    padding-left: 15px;
    font-size: 8.5px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
`,mg=v.div`
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
`,hg=v.button`
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
`,gg=v.p`
    margin-top: 12px;
    padding-left: 16px;
    font-size: 9px;
    line-height: 1.5;
    color: var(--text-muted);
`;function _g(e,t){return t>0?`${(e/t*100).toFixed(1)}%`:`—`}function vg(e,t){switch(e.phase){case`changelog`:return t(`preparing_the_update`);case`downloading`:return t(`downloading_the_update`);case`ready`:return t(`download_complete`);case`cancelled`:return t(`update_cancelled`);case`error`:return t(`the_update_failed`);case`installing`:return t(`installing`);default:return``}}function yg(e){return e.total>0?`${C(e.downloaded)} / ${C(e.total)}`:e.downloaded>0?C(e.downloaded):``}var bg=v.div`
    position: fixed;
    inset: 0;
    z-index: 9500;
    display: grid;
    place-items: center;
    padding: 32px;
    background: rgba(2, 6, 23, 0.55);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
`,xg=v.div`
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
`,Sg=v.div`
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
`,Cg=v.span`
    margin-top: 4px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,wg=v.div`
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
`,Tg=v.p`
    margin: 0;
    font-size: 11px;
    color: var(--text-muted);
`;function Eg(e){let t=e.target?.closest(`a`);t&&(e.preventDefault(),F(t.href))}var Dg=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    font-size: 11px;
    color: var(--text-muted);
`,Og=v.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.22);
`,kg=v.div`
    width: ${({$percent:e})=>`${e}%`};
    height: 100%;
    border-radius: 3px;
    background: var(--accent-gradient);
    transition: width 160ms ease;
`,Ag=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,jg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;

    & + & {
        border-top: 1px solid var(--border-color);
    }
`,Mg=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
`,Ng=v.div`
    height: 6px;
    border-radius: 3px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Pg=v.div`
    /* A usage this small still has to be visible, so the fill never disappears completely. */
    width: max(${({$ratio:e})=>Math.min(Math.max(e,0),1)*100}%, 2px);
    height: 100%;
    border-radius: 3px;
    background: ${({$tone:e})=>e};
    transition: width 220ms ease;
`,Fg=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
`,Ig=v.div`
    padding: 8px 2px;
    color: var(--text-muted);
    font-size: 11px;
`,Lg=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,Rg=v.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,zg=v.span`
    color: var(--text-primary);
    font-size: 12px;
`,Bg=v.span`
    color: var(--text-muted);
    font-size: 10.5px;
    overflow-wrap: anywhere;
`,Vg=v.input`
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
`,Hg=v.input`
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
`,Ug=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
`,$=v.span`
    font-size: 10.5px;
    line-height: 1.5;
    color: var(--text-muted);
`,Wg=v.span`
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
`,Gg=v.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--text-muted);
`,Kg=v.button`
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
`,qg=v.input`
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
`,Jg=v.input`
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
`,Yg=v.button`
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
`,Xg=v.input`
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
`,Zg=v.span`
    min-width: 66px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
`,Qg=v.button`
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
`,$g=v.span`
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${({$on:e})=>e?`#34d399`:`var(--text-muted)`};
`,e_=v.button`
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
`,t_=v.span`
    position: absolute;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #f8fafc;
    transition: transform 140ms ease;
`,n_=v.input`
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
`,r_=v.button`
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
`,i_=v.span`
    display: inline-flex;
    color: var(--text-muted);
    transform: rotate(90deg);
`,a_=v.div`
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
`,o_=v.button`
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
`,s_=v.span`
    position: relative;
    display: inline-flex;
`,c_=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,l_=v.button`
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
`,u_=v.input`
    width: 150px;
    accent-color: var(--accent-primary);
`,d_=v.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 12px;
`,f_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,p_=v.span`
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,m_=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,h_=v.button`
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
`,g_=v.div`
    position: relative;
    width: 102px;
    height: 58px;
`,__=v.button`
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
`,v_=v.span`
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
`,y_=v.button`
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
`,b_=v.span`
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    color: var(--text-secondary);
    font-size: 11px;
    letter-spacing: 0.02em;
`,x_=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`,S_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.35);
`,C_=v.input`
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
`,w_=v.button`
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
`,T_=v.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 2px;
`,E_=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`,D_=v.input`
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
`,O_=v.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`,k_=v.button`
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
`,A_=v.input`
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
`,j_=v.div`
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
`,M_=v.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 5px 14px;
    width: 100%;
`,N_=v.label`
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 11px;
    color: var(--text-secondary);
    cursor: pointer;

    input {
        accent-color: var(--accent-primary);
    }
`,P_=v.button`
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
`,F_=v.button`
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
`,I_=v.button`
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
`,L_=v.span`
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
`,R_=v.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid rgba(74, 222, 128, 0.35);
    border-radius: 999px;
    font-size: 10px;
    color: #4ade80;
`,z_=v.p`
    font-size: 11px;
    line-height: 1.6;
    color: var(--text-muted);
`,B_=v.p`
    padding: 9px 11px;
    border: 1px solid rgba(251, 191, 36, 0.3);
    border-radius: var(--radius-sm);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    line-height: 1.6;
    color: #fcd34d;
`,V_=150,H_=2500,U_=3,W_=600;function G_({openOnSingleClick:e=!1,showCheckboxes:t=!0,confirmDelete:n=!1,shortcuts:r,view:i,find:a,selectMatchesToken:s,onSearchMatches:c,onPick:l,onSelectionChange:u,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,onPreviewChange:g,platform:_,toolbarSlot:v,onStatusChange:y}){let b=o(),x=yl(`gallery`),[S,w]=(0,R.useState)([]),[T,ee]=(0,R.useState)(0),[te,E]=(0,R.useState)(!0),[D,O]=(0,R.useState)(null),[k,A]=(0,R.useState)(!1),[j,ne]=(0,R.useState)([]),re=(0,R.useRef)([]),M=(0,R.useRef)(0),ie=(0,R.useRef)(!1),N=(0,R.useRef)(!0),se=(0,R.useRef)(0),P=(0,R.useRef)(null),ce=(0,R.useRef)(0),F=(0,R.useCallback)(async e=>{let t=++se.current;E(!0),N.current=!0,O(null);try{let n=await Be(0,V_,e);if(t!==se.current)return;re.current=n.entries,M.current=n.total,w(n.entries),ee(n.total)}catch(e){t===se.current&&O(e instanceof Error?e.message:String(e))}finally{t===se.current&&(N.current=!1,E(!1))}},[]);(0,R.useEffect)(()=>{F(!1)},[F]);let I=(0,R.useCallback)(async()=>{if(N.current||ie.current||re.current.length>=M.current)return;let e=se.current;ie.current=!0;try{let t=re.current,n=M.current;for(let r=0;r<U_&&t.length<n;r++){let r=await Be(t.length,V_,!1);if(e!==se.current)return;if(r.entries.length===0){n=t.length;break}if(t=[...t,...r.entries],n=r.total,r.entries.length<V_)break}if(e!==se.current)return;re.current=t,M.current=n,(0,R.startTransition)(()=>{w(t),ee(n)})}catch{}finally{ie.current=!1}},[]),le=(0,R.useCallback)(e=>{ce.current||=window.requestAnimationFrame(()=>{ce.current=0,e.scrollHeight-e.scrollTop-e.clientHeight<H_&&I()})},[I]);(0,R.useEffect)(()=>{let e=P.current;if(!e)return;let t=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&I()},{root:e.parentElement,rootMargin:`${H_}px 0px`});return t.observe(e),()=>t.disconnect()},[I]),(0,R.useEffect)(()=>{if(S.length>=T)return;let e=window.setTimeout(()=>{let e=P.current?.parentElement;e&&e.scrollHeight-e.scrollTop-e.clientHeight<H_&&I()},200);return()=>window.clearTimeout(e)},[S.length,T,I]);let ue=(0,R.useMemo)(()=>({path:``,parent:null,entries:S.map(K_),folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}),[S]),de=(0,R.useMemo)(()=>({...i,mode:`grid`,sort:`modified`,sortDescending:!0,columns:[]}),[i]),fe=(0,R.useCallback)(e=>{l?l(e):Ce(e)},[l]),pe=(0,R.useCallback)(e=>{let t=q_(e.modified);return{id:t,label:t}},[]),me=()=>{A(!0),F(!0).finally(()=>A(!1))},he=S.length<T,ge=(0,R.useMemo)(()=>!a?.open||a.query.trim().length===0?[]:S.filter(e=>An(e.name,a)||An(e.path,a)),[S,a?.open,a?.query,a?.matchCase,a?.regex]),L=(0,R.useMemo)(()=>a?.open?{query:a.query,matchCase:a.matchCase,regex:a.regex,mode:a.mode,currentPath:ge[Math.min(a.index,Math.max(0,ge.length-1))]?.path??null}:Sn,[a?.open,a?.query,a?.matchCase,a?.regex,a?.mode,a?.index,ge]);(0,R.useEffect)(()=>{c?.(ge.length)},[ge.length,c]);let _e=(0,R.useCallback)(e=>{ne(e),u?.(e)},[u]),z=j.length>0?S.find(e=>e.path===j[0])??null:null,ve=z?.name.includes(`.`)?z.name.slice(z.name.lastIndexOf(`.`)+1).toUpperCase():`—`,ye=z&&/\.(mp4|webm|mkv|mov|m4v|avi|wmv|ogv)$/i.test(z.name)?b(`video_2`):b(`picture`),be=z?z.path.slice(0,Math.max(z.path.lastIndexOf(`\\`),z.path.lastIndexOf(`/`))):``,xe=z?{name:z.name,path:z.path,isDirectory:!1,size:z.size,modified:z.modified,fields:[{label:b(`type`),value:ye},{label:b(`extension`),value:ve},{label:b(`location`),value:be},{label:b(`full_path`),value:z.path},{label:b(`size`),value:C(z.size)},{label:b(`modified`),value:ae(z.modified)},{label:b(`created`),value:`—`}]}:null,Se=j.length>1?oe(b,j.length,`k_1_item_selected`,`count_items_selected`):void 0,we=(0,R.useRef)(``);(0,R.useEffect)(()=>{let e=`${xe?.path??``}|${xe?.modified??0}|${Se??``}`;we.current!==e&&(we.current=e,g?.(xe,Se))},[xe,Se,g]);let Te=te?b(`scanning`):b(`shown_of_total_pictures`,{shown:S.length,total:T});return(0,R.useEffect)(()=>{y?.(Te)},[Te,y]),(0,q.jsxs)(J_,{children:[v&&(0,ro.createPortal)((0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ym,{}),(0,q.jsx)(vm,{onClick:me,title:b(`scan_the_folders_again`),type:`button`,children:(0,q.jsx)(Z_,{$spinning:k,children:(0,q.jsx)(Ti,{size:16})})}),x.available&&(0,q.jsx)(vm,{onClick:e=>x.open(e.clientX,e.clientY),title:b(`selection_menu`),type:`button`,children:(0,q.jsx)(Aa,{size:16})})]}),v),D&&(0,q.jsx)($_,{children:D}),!D&&!te&&T===0&&(0,q.jsx)($_,{children:b(`no_pictures_found`)}),!D&&(te||T>0)&&(0,q.jsx)(Y_,{children:(0,q.jsx)(X_,{children:(0,q.jsx)(Nl,{platform:_,confirmDelete:n,find:L,selectMatchesToken:s,listing:te&&S.length===0?null:ue,loading:te,error:null,view:de,showImages:!1,showDetails:!1,showCheckboxes:t,openOnSingleClick:e,shortcuts:r,onSelectionChange:_e,selectionMenuId:`gallery`,onSort:()=>void 0,onOpen:fe,onOpenFile:fe,onRefresh:me,onAddToTray:d,onAddFavorite:f,onRemoveFavorite:p,favoritePaths:m,onExtractArchive:h,groupOf:pe,onGridScroll:le,gridFooter:(0,q.jsx)(Q_,{$space:he?W_:1,ref:P}),allowBackgroundMenu:!1})})})]})}function K_(e){return{name:e.name,fullPath:e.path,isDirectory:!1,size:e.size,modified:e.modified,created:e.modified,isHidden:!1,isSystem:!1,iconSource:null,linkTarget:null,linkValid:null,linkCount:0}}function q_(e){let t=new Date(e),n=new Date,r=e=>new Date(e.getFullYear(),e.getMonth(),e.getDate()).getTime(),i=Math.round((r(n)-r(t))/864e5);return i===0?`Today`:i===1?`Yesterday`:i<7?t.toLocaleDateString(j(),{weekday:`long`}):t.toLocaleDateString(j(),{year:`numeric`,month:`long`,day:`numeric`})}var J_=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Y_=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,X_=v.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
`,Z_=v.span`
    display: grid;
    place-items: center;
    animation: ${({$spinning:e})=>e?`yafm-gallery-spin 900ms linear infinite`:`none`};

    @keyframes yafm-gallery-spin {
        to {
            transform: rotate(360deg);
        }
    }
`,Q_=v.div`
    height: ${({$space:e})=>e}px;
`,$_=v.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;function ev({places:e,drives:t,recent:n,recentLimit:r,currentPath:i,activeKind:a,homePath:s=``,version:c=0,historyVersion:u=0,hiddenViews:d=[],onNavigate:f,onOpenView:p}){let[m,h]=(0,R.useState)([]),g=o(),[_,v]=(0,R.useState)(null),y=Rn();(0,R.useEffect)(()=>{Ze().then(e=>{v(e),h(Js(e).filter(e=>e.pinned))},()=>{v(null),h([])})},[c]),(0,R.useEffect)(()=>{if(!l.available)return;let e=m.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||s).filter(e=>e.length>0);return l.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>l.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[m,s]);let b=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>P(e.path,t));return{name:_?.placeNames?.[t]??n?.name??(x(t)||t),path:t,kind:`folder`,icon:n?.icon??_?.placeIcons?.[t]??null}}),w=a===`files`;return(0,q.jsxs)(ov,{children:[(0,q.jsxs)(sv,{children:[!d.includes(`home`)&&(0,q.jsxs)(fv,{$active:a===`home`,onClick:e=>p(`home`,Jt(e)),title:g(`overview`),type:`button`,children:[(0,q.jsx)(na,{}),(0,q.jsx)(mv,{children:g(`overview`)})]}),!d.includes(`recycle`)&&(0,q.jsxs)(fv,{$active:a===`recycle`,onClick:e=>p(`recycle`,Jt(e)),title:g(`recycle_bin`),type:`button`,children:[(0,q.jsx)(Ii,{}),(0,q.jsx)(mv,{children:g(`recycle_bin`)})]}),!d.includes(`gallery`)&&(0,q.jsxs)(fv,{$active:a===`gallery`,onClick:e=>p(`gallery`,Jt(e)),title:g(`gallery`),type:`button`,children:[(0,q.jsx)(Wi,{}),(0,q.jsx)(mv,{children:g(`gallery`)})]})]}),m.map(e=>(0,q.jsxs)(lv,{children:[(0,q.jsxs)(fv,{as:`div`,$active:!1,children:[(0,q.jsx)(pv,{children:(0,q.jsx)(Xs,{panel:e,size:16})}),(0,q.jsx)(mv,{children:g(e.title)})]}),(0,q.jsx)(uv,{children:(0,q.jsxs)(dv,{children:[e.kind===`quick`&&b(e).map(e=>(0,q.jsxs)(fv,{$active:w&&P(i,e.path),onClick:t=>f(e.path,Jt(t)),title:e.path,type:`button`,children:[(0,q.jsx)(Zs,{place:e}),(0,q.jsx)(mv,{children:e.name})]},e.path)),e.kind===`recent`&&n.slice(0,r).map(e=>{let t=zn(y,e.path);return(0,q.jsxs)(fv,{$active:w&&P(i,e.path),onClick:t=>e.isDirectory?f(e.path,Jt(t)):void Ce(e.path),title:e.path,type:`button`,children:[t&&y.useIcons?(0,q.jsx)(Zs,{place:t}):(0,q.jsx)(hc,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,q.jsx)(mv,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,q.jsx)(rv,{historyVersion:u,onNavigate:f}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,q.jsxs)(fv,{$active:w&&P(i,e.name),onClick:t=>f(e.name,Jt(t)),title:e.name,type:`button`,children:[(0,q.jsx)(Si,{}),(0,q.jsxs)(mv,{children:[ie(e),(0,q.jsxs)(hv,{children:[C(e.freeSpace),` free`]}),(0,q.jsx)(gv,{children:(0,q.jsx)(_v,{$used:t,$tone:S(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,q.jsx)(iv,{onNavigate:f,path:e.path||s})]})})]},e.id)),!d.includes(`settings`)&&(0,q.jsx)(cv,{children:(0,q.jsxs)(fv,{$active:a===`settings`,onClick:e=>p(`settings`,Jt(e)),title:g(`settings`),type:`button`,children:[(0,q.jsx)(Ai,{}),(0,q.jsx)(mv,{children:g(`settings`)})]})})]})}var tv=10,nv=40;function rv({historyVersion:e=0,onNavigate:t}){let n=o(),[r,i]=(0,R.useState)(null),a=Rn();return(0,R.useEffect)(()=>{He().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=zn(a,e.path);return(0,q.jsxs)(fv,{$active:!1,onClick:n=>t(e.path,Jt(n)),title:oe(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,q.jsx)(Zs,{place:r}):(0,q.jsx)(hc,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,q.jsx)(mv,{children:r?.name||e.name})]},e.path)})}function iv({path:e,onNavigate:t}){let[n,r]=(0,R.useState)(null);(0,R.useEffect)(()=>{e&&(r(null),we(e,!1).then(r,()=>r(null)))},[e]),(0,R.useEffect)(()=>{if(e&&l.available)return l.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&P(n.data.path,e)&&we(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],a=i.filter(e=>e.isDirectory).slice(0,tv),o=i.filter(e=>!e.isDirectory).slice(0,nv);return(0,q.jsxs)(q.Fragment,{children:[a.map(e=>(0,q.jsx)(av,{entry:e,onNavigate:t},e.fullPath)),o.map(e=>(0,q.jsx)(av,{entry:e,onNavigate:t},e.fullPath))]})}function av({entry:e,onNavigate:t}){let n=Rn(),r=zn(n,e.fullPath);return(0,q.jsxs)(fv,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Jt(n)):void Ce(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,q.jsx)(Zs,{place:r}):(0,q.jsx)(hc,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,q.jsx)(mv,{children:r?.name||e.name})]})}var ov=v.aside`
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
`,sv=v.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,cv=v(sv)`
    margin-top: auto;
`,lv=v.div`
    display: flex;
    flex-direction: column;
`,uv=v.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${ov}:hover ${lv}:hover > & {
        grid-template-rows: 1fr;
    }
`,dv=v.div`
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
`,fv=v.button`
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
`,pv=v.span`
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
`,mv=v.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hv=v.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,gv=v.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,_v=v.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`,vv=v.span`
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
`;function yv({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=o(),a=(0,R.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,R.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,q.jsxs)(xv,{ref:a,children:[(0,q.jsxs)(Sv,{$active:n,onClick:()=>r(!n),title:s>0?oe(i,s,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,q.jsx)(Fi,{size:13}),c>0&&(0,q.jsx)(vv,{children:c>9?`9+`:c})]}),n&&(0,q.jsxs)(Cv,{children:[(0,q.jsxs)(wv,{children:[(0,q.jsxs)(Tv,{children:[(0,q.jsx)(Fi,{size:12}),i(`status_center`)]}),(0,q.jsxs)(Ev,{children:[(0,q.jsx)(Dv,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,q.jsx)(Ov,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,q.jsx)(Ri,{size:10})})]})]}),e.length===0?(0,q.jsx)(Av,{children:i(`no_operations_yet`)}):(0,q.jsx)(kv,{children:e.map(e=>(0,q.jsx)(bv,{task:e},e.id))})]})]})}function bv({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,q.jsxs)(jv,{children:[(0,q.jsxs)(Mv,{children:[(0,q.jsx)(Nv,{$state:e.state,children:e.state===`done`?(0,q.jsx)(Li,{size:10}):e.state===`failed`?(0,q.jsx)(Ri,{size:10}):(0,q.jsx)(Pv,{})}),(0,q.jsx)(Fv,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,q.jsxs)(Iv,{children:[C(e.bytesDone),` / `,C(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,q.jsxs)(Iv,{children:[e.done,` / `,e.total]})]}),i&&(0,q.jsx)(Lv,{children:(0,q.jsx)(Rv,{$percent:r,$indeterminate:t===0})}),e.error&&(0,q.jsx)(zv,{children:e.error})]})}var xv=v.div`
    position: relative;
    display: flex;
`,Sv=v.button`
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
`,Cv=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${io}
    ${vo}
`,wv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Tv=v.span`
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
`,Ev=v.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,Dv=v.button`
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
`,Ov=v.button`
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
`,kv=v.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Av=v.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,jv=v.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${yo}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Mv=v.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,Nv=v.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,Pv=v.span`
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
`,Fv=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Iv=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Lv=v.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Rv=v.div`
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
`,zv=v.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Bv(){return l.available?(await l.request(`fs.history.list`)).entries:[]}async function Vv(e){return l.available?(await l.request(`fs.history.undoTo`,{id:e})).ok:!1}function Hv(){let e=o(),[t,n]=(0,R.useState)(!1),[r,i]=(0,R.useState)([]),[a,s]=(0,R.useState)(!1),c=(0,R.useRef)(null),l=()=>void Bv().then(i,()=>i([]));(0,R.useEffect)(()=>{if(!t)return;l();let e=window.setInterval(l,1e3),r=e=>{c.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let u=async e=>{s(!0);try{await Vv(e),l()}finally{s(!1)}};return(0,q.jsxs)(Gv,{ref:c,children:[(0,q.jsx)(Kv,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,q.jsx)(Pi,{size:14})}),t&&(0,q.jsxs)(qv,{children:[(0,q.jsxs)(Jv,{children:[(0,q.jsxs)(Yv,{children:[(0,q.jsx)(Pi,{size:12}),e(`history`)]}),(0,q.jsx)(Xv,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,q.jsx)(Ri,{size:10})})]}),r.length===0?(0,q.jsx)(ay,{children:e(`no_operations_yet`)}):(0,q.jsx)(Zv,{children:r.map(t=>(0,q.jsxs)(Qv,{children:[(0,q.jsxs)($v,{children:[(0,q.jsxs)(ey,{children:[(0,q.jsx)(Wv,{label:t.label}),Uv(e,t.label)]}),(0,q.jsx)(ty,{children:k(t.at)})]}),t.paths.length>0&&(0,q.jsxs)(ny,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,q.jsx)(ry,{children:(0,q.jsx)(iy,{disabled:!t.applied||!t.restorable||a,onClick:()=>void u(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function Uv(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Wv({label:e}){return e.startsWith(`delete`)?(0,q.jsx)(Ii,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,q.jsx)(Ca,{size:13}):e.startsWith(`rename`)?(0,q.jsx)(ra,{size:13}):e.startsWith(`compress`)?(0,q.jsx)(qi,{size:13}):e.startsWith(`new`)?(0,q.jsx)(Ei,{size:13}):(0,q.jsx)(Oi,{size:13})}var Gv=v.div`
    position: relative;
    display: flex;
`,Kv=v.button`
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
`,qv=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${io}
    ${vo}
`,Jv=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Yv=v.span`
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
`,Xv=v.button`
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
`,Zv=v.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Qv=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,$v=v.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,ey=v.span`
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
`,ty=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,ny=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ry=v.div`
    display: flex;
    justify-content: flex-end;
`,iy=v.button`
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
`,ay=v.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`;function oy({currentFolder:e}){let t=o(),[n,r]=(0,R.useState)(!1),[i,a]=(0,R.useState)(null),[s,c]=(0,R.useState)(!1),l=(0,R.useRef)(null);(0,R.useEffect)(()=>{if(!n)return;let e=()=>void Uc().then(a,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{l.current?.contains(e.target)||r(!1)},o=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,o),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,o)}},[n]),(0,R.useEffect)(()=>{let e=()=>void Uc().then(a,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{a(await e())}finally{c(!1)}},d=i?.shares.some(t=>P(t.path,e))??!1;return(0,q.jsxs)(sy,{ref:l,children:[(0,q.jsxs)(cy,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,q.jsx)(_a,{size:15}),i&&i.shares.length>0&&(0,q.jsx)(vv,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,q.jsxs)(ly,{children:[(0,q.jsxs)(uy,{children:[(0,q.jsxs)(dy,{children:[(0,q.jsx)(Ea,{size:12}),t(`share`)]}),(0,q.jsx)(fy,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,q.jsx)(Ri,{size:10})})]}),(0,q.jsxs)(py,{children:[(0,q.jsxs)(my,{children:[(0,q.jsx)(Vi,{size:15}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,q.jsx)(hy,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,q.jsx)(gy,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,q.jsxs)(_y,{children:[(0,q.jsxs)(vy,{children:[(0,q.jsx)(yy,{title:e.path,children:e.name}),(0,q.jsx)(xy,{disabled:s,onClick:()=>void u(()=>Gc(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,q.jsx)(Ri,{size:10})})]}),(0,q.jsx)(by,{title:e.path,children:e.path}),(0,q.jsxs)(Sy,{children:[(0,q.jsxs)(Cy,{$active:e.mode===`client`,onClick:()=>void u(()=>Kc(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,q.jsx)(Vi,{size:11}),t(`app`)]}),(0,q.jsxs)(Cy,{$active:e.mode===`web`,onClick:()=>void u(()=>Kc(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,q.jsx)(ya,{size:11}),t(`web`)]})]})]},e.id)),(0,q.jsxs)(wy,{disabled:s||e.length===0||d,onClick:()=>void u(()=>Wc(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,q.jsx)(Ei,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,q.jsxs)(Ty,{children:[(0,q.jsxs)(Ey,{children:[(0,q.jsx)(ya,{size:12}),t(`browser_access`)]}),i.urls.map(e=>(0,q.jsx)(Dy,{onClick:()=>void F(e),type:`button`,children:e},e)),(0,q.jsx)(hy,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var sy=v.div`
    position: relative;
    display: flex;
`,cy=v.button`
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
`,ly=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${io}
    ${vo}
`,uy=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,dy=v.span`
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
`,fy=v.button`
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
`,py=v.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,my=v.div`
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
`,hy=v.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,gy=v.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,_y=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,vy=v.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,yy=v.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,by=v.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xy=v.button`
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
`,Sy=v.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Cy=v.button`
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
`,wy=v.button`
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
`,Ty=v.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Ey=v.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Dy=v.button`
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
`;function Oy({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let s=o(),[c,l]=(0,R.useState)(!1),u=(0,R.useRef)(null);(0,R.useEffect)(()=>{if(!c)return;let e=()=>l(!1),t=e=>{u.current?.contains(e.target)||l(!1)},n=e=>{e.key===`Escape`&&l(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[c]),(0,R.useEffect)(()=>{a&&l(!1)},[a]);let d=e.columns,f=e=>{let t=new Set(d);t.has(e)?t.delete(e):t.add(e);let r=wl.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,q.jsxs)(ky,{ref:u,children:[(0,q.jsx)(Ay,{$active:c,disabled:a,onClick:()=>l(e=>!e),title:s(`view`),type:`button`,children:e.mode===`grid`?(0,q.jsx)(Ni,{size:14}):(0,q.jsx)(Mi,{size:14})}),c&&(0,q.jsxs)(jy,{children:[(0,q.jsxs)(My,{children:[(0,q.jsx)(ka,{size:11}),s(`view`)]}),(0,q.jsxs)(Py,{children:[(0,q.jsxs)(Fy,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,q.jsx)(Mi,{size:12}),` `,s(`list`)]}),(0,q.jsxs)(Fy,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,q.jsx)(Ni,{size:12}),` `,s(`grid`)]})]}),(0,q.jsxs)(My,{children:[(0,q.jsx)(Mi,{size:11}),s(`list_icon_size`)]}),(0,q.jsxs)(Iy,{children:[(0,q.jsx)(`input`,{"aria-label":s(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,q.jsxs)(Ly,{children:[e.iconSize,`px`]})]}),(0,q.jsxs)(My,{children:[(0,q.jsx)(Ni,{size:11}),s(`grid_size`)]}),(0,q.jsxs)(Iy,{children:[(0,q.jsx)(`input`,{"aria-label":s(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,q.jsxs)(Ly,{children:[e.gridSize,`px`]})]}),(0,q.jsxs)(My,{children:[(0,q.jsx)(Oa,{size:11}),s(`columns`),(0,q.jsx)(nh,{}),(0,q.jsx)(Ny,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:s(`reset_column_widths`),type:`button`,children:s(`reset_widths`)})]}),wl.map(e=>(0,q.jsxs)(Ry,{children:[(0,q.jsx)(`input`,{checked:d.includes(e.id),onChange:()=>f(e.id),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(e.label)})]},e.id)),(0,q.jsxs)(Ry,{children:[(0,q.jsx)(`input`,{checked:d.includes(`linkTarget`),onChange:()=>f(`linkTarget`),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`link_target_after_the_name`)})]}),(0,q.jsxs)(My,{children:[(0,q.jsx)(zi,{size:11}),s(`preview_panel`),(0,q.jsx)(nh,{})]}),(0,q.jsxs)(Ry,{children:[(0,q.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,q.jsx)(`span`,{children:s(`preview_under_the_list`)})]})]})]})}var ky=v.div`
    position: relative;
    display: flex;
    height: 100%;
`,Ay=v.button`
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
`,jy=v.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${io}
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
`,My=v.div`
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
`,Ny=v.button`
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
`,Py=v.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Fy=v.button`
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
`,Iy=v.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,Ly=v.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,Ry=v.label`
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
`,zy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),By=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),Vy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,q.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Hy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,q.jsx)(`path`,{d:`M2 5h6`})}),Uy=e=>(0,q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,q.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Wy=e=>(0,q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,q.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,q.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Gy({tabs:e,activeId:n,onSelect:r,onClose:i,onNewTab:a,onReorder:s,onTransferToTab:c,view:l,onViewChange:d,onColumns:f,showImages:p,onShowImages:m,tasks:h,onClearTasks:g,activityOpen:_,onActivityOpenChange:v,trayCount:y,trayVisible:b,onToggleTray:x,split:S,canSplit:C,onToggleSplit:w,details:T,canDetails:ee,onToggleDetails:te,shortcuts:E,currentFolder:D}){let O=o(),k=t(),A=u(),[j,ne]=(0,R.useState)({left:!1,right:!1}),[re,M]=(0,R.useState)(null),[ie,ae]=(0,R.useState)(null),oe=(0,R.useRef)(null),N=(0,R.useRef)(null),se=(0,R.useRef)(null),P=(0,R.useCallback)(()=>{let e=N.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ne(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,R.useEffect)(()=>{P();let e=N.current;if(!e)return;let t=new ResizeObserver(P);return t.observe(e),()=>t.disconnect()},[P,e.length]),(0,R.useEffect)(()=>()=>{oe.current&&window.clearTimeout(oe.current.timer)},[]),(0,R.useEffect)(()=>{se.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[n]);let ce=e=>N.current?.scrollBy({left:e,behavior:`smooth`}),F=()=>{oe.current&&window.clearTimeout(oe.current.timer),oe.current=null,ae(null)};return(0,q.jsxs)(Yy,{children:[(0,q.jsx)(Xy,{children:(0,q.jsx)(Vi,{size:19})}),(0,q.jsxs)(Zy,{children:[j.left&&(0,q.jsx)($y,{onClick:()=>ce(-180),title:O(`scroll_tabs_left`),type:`button`,children:(0,q.jsx)(zy,{})}),(0,q.jsx)(Qy,{onScroll:P,onWheel:e=>{let t=N.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:N,children:e.map(e=>(0,q.jsxs)(eb,{$active:e.id===n,$dragging:re===e.id,$dropTarget:ie===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!vc(t.dataTransfer)||!Ky(e)||(t.preventDefault(),oe.current?.id===e.id))return;F(),ae(e.id);let n=window.setTimeout(()=>{r(e.id),oe.current=null},500);oe.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(oe.current?.id===e.id||ie===e.id)&&F()},onDragEnd:()=>{M(null),F()},onDragOver:t=>{(re||vc(t.dataTransfer)&&Ky(e))&&(t.preventDefault(),vc(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>M(e.id),onDrop:t=>{if(t.preventDefault(),re)s(re,e.id);else if(Ky(e)&&vc(t.dataTransfer)){let{paths:n,move:i}=yc(t);n.length>0&&(r(e.id),c(n,e.path,!t.ctrlKey&&i))}M(null),F()},onClick:()=>r(e.id),ref:e.id===n?se:void 0,title:e.path||e.title,type:`button`,children:[(0,q.jsx)(qy,{tab:e}),(0,q.jsx)(tb,{children:e.title}),e.partner&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(nb,{children:`|`}),(0,q.jsx)(Jy,{place:e.partner.place}),(0,q.jsx)(tb,{children:e.partner.title})]}),(0,q.jsx)(rb,{"data-shortcut":Xt(E.closeTab),onClick:t=>{t.stopPropagation(),i(e.id)},title:O(`close_tab`),children:(0,q.jsx)(Vy,{})})]},e.id))}),j.right&&(0,q.jsx)($y,{onClick:()=>ce(180),title:O(`scroll_tabs_right`),type:`button`,children:(0,q.jsx)(By,{})}),(0,q.jsx)(ib,{"data-shortcut":Xt(E.newTab),onClick:a,title:O(`new_tab`),type:`button`,children:(0,q.jsx)(Ei,{size:13})})]}),(0,q.jsx)(ab,{...A}),(0,q.jsxs)(ob,{children:[(0,q.jsx)(cb,{$active:S,"data-shortcut":Xt(E.splitView),disabled:!C,onClick:w,title:O(S?`close_split_view`:`split_view`),type:`button`,children:(0,q.jsx)(Oa,{size:15})}),(0,q.jsx)(cb,{$active:T,disabled:!ee,onClick:te,title:O(T?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,q.jsx)(ka,{size:15})}),(0,q.jsxs)(sb,{$active:b,onClick:x,title:O(b?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,q.jsx)(va,{size:14}),y>0&&(0,q.jsx)(vv,{children:y>9?`9+`:y})]}),(0,q.jsx)(Hv,{}),(0,q.jsx)(oy,{currentFolder:D}),(0,q.jsx)(yv,{tasks:h,onClear:g,open:_,onOpenChange:v}),(0,q.jsx)(Oy,{disabled:e.find(e=>e.id===n)?.kind!==`files`,onChange:d,onColumns:f,onShowImages:m,showImages:p,view:l}),(0,q.jsx)(lb,{onClick:k.minimize,title:O(`minimize`),type:`button`,children:(0,q.jsx)(Hy,{})}),(0,q.jsx)(lb,{onClick:k.toggleMaximize,title:k.maximized?O(`restore`):O(`maximize`),type:`button`,children:k.maximized?(0,q.jsx)(Wy,{}):(0,q.jsx)(Uy,{})}),(0,q.jsx)(ub,{onClick:k.close,title:O(`close`),type:`button`,children:(0,q.jsx)(Vy,{})})]})]})}function Ky(e){return e.kind===`files`&&(!T(e.path)||te(e.path))}function qy({tab:e}){switch(e.kind){case`home`:return(0,q.jsx)(yi,{size:13});case`settings`:return(0,q.jsx)(Ai,{size:13});case`recycle`:return(0,q.jsx)(Ii,{size:13});default:return e.archive?(0,q.jsx)(qi,{size:13}):(0,q.jsx)(Jy,{place:e.place})}}function Jy({place:e}){return e?(0,q.jsx)(Zs,{place:e,size:13}):(0,q.jsx)(bi,{size:13})}var Yy=v.header`
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
`,Xy=v.span`
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
`,Zy=v.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Qy=v.div`
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
`,$y=v.button`
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
`,eb=v.button`
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
`,tb=v.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nb=v.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,rb=v.span`
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
`,ib=v.button`
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
`,ab=v.div`
    flex: 1;
    min-width: 28px;
`,ob=v.div`
    display: flex;
    flex-shrink: 0;
`,sb=v.button`
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
`,cb=v.button`
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
`,lb=v.button`
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
`,ub=v(lb)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function db(){let[e,t]=(0,R.useState)(null),n=(0,R.useRef)(null),r=(0,R.useRef)(void 0);return(0,R.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,ro.createPortal)((0,q.jsx)(fb,{tooltip:e}),document.body):null}function fb({tooltip:e}){let t=(0,R.useRef)(null),[n,r]=(0,R.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,R.useState)(()=>e.bottom+6);return(0,R.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,q.jsxs)(pb,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,q.jsx)(mb,{children:e.text}),e.shortcut&&(0,q.jsx)(hb,{children:e.shortcut})]})}var pb=v.div`
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
    ${yo}
`,mb=v.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,hb=v.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,gb={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`};function _b({deviceName:e,code:t,onAccept:n,onReject:r}){let i=o(),a=(0,R.useRef)(null);return(0,R.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,ro.createPortal)((0,q.jsx)(vb,{children:(0,q.jsxs)(yb,{role:`alertdialog`,"aria-modal":`true`,children:[(0,q.jsxs)(bb,{children:[(0,q.jsx)(_a,{size:15}),i(`pair_for_sharing`)]}),(0,q.jsx)(xb,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,q.jsx)(Sb,{children:t}),(0,q.jsx)(Cb,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,q.jsxs)(wb,{children:[(0,q.jsx)(Tb,{onClick:r,type:`button`,children:i(`reject`)}),(0,q.jsx)(Eb,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var vb=v.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${yo}
`,yb=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${mo}
`,bb=v.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,xb=v.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,Sb=v.div`
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
`,Cb=v.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,wb=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Tb=v.button`
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
`,Eb=v(Tb)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Db=0,Ob=new Set;function kb(e){Ob.add(e),l.send({type:`app.navigate.done`,payload:{path:e}})}var Ab=20,jb=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Mb(e){return e.history[e.index]??$p(`home`)}function Nb(e){return em(Mb(e))??`files`}function Pb(e){let t=Mb(e);return em(t)?``:e.listing?.path||t}function Fb(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Nb(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Ib(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function Lb(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||be.iconSize,gridSize:e.view?.gridSize||t.gridSize||be.gridSize,sort:e.view?.sort??be.sort,sortDescending:e.view?.sortDescending??be.sortDescending,columns:t.columns??xe.columns??[]}}function Rb(e=$p(`home`)){return Db+=1,{id:`tab-${Db}`,listing:null,loading:!em(e),error:null,history:[e],index:0,fresh:!0,view:null}}function zb(e){return e instanceof Error?e.message:String(e)}function Bb(e){let t=el(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return tl(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Vb(e){let t=x(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Hb(e){return T(e)?tn(e):void 0}function Ub(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return oe(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:C(n)})}function Wb(){let e=o(),[t,n]=(0,R.useState)(()=>[Rb()]),[i,a]=(0,R.useState)(()=>t[0].id),[s,c]=(0,R.useState)(null),[u,d]=(0,R.useState)(()=>{let e=Yn(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[p,m]=(0,R.useState)([]),[h,_]=(0,R.useState)([]),[v,y]=(0,R.useState)(null),[b,S]=(0,R.useState)(null),[C,w]=(0,R.useState)(null),k=D(),[A,j]=(0,R.useState)(xn),[ne,ie]=(0,R.useState)(0),[ae,N]=(0,R.useState)(0),[se,F]=(0,R.useState)(0),[I,le]=(0,R.useState)(xn),[de,fe]=(0,R.useState)(0),[pe,me]=(0,R.useState)(0),[he,ge]=(0,R.useState)(0),[L,_e]=(0,R.useState)(0),z=(0,R.useRef)(L);z.current=L;let[ye,Se]=(0,R.useState)([]),[Oe,Pe]=(0,R.useState)(10),[B,Fe]=(0,R.useState)(null),Ie=f(g(B?.themeMode)),Le=(0,R.useMemo)(()=>(B?.favorites??[]).map(e=>ee(e.path)),[B?.favorites]),[Re,ze]=(0,R.useState)(0),[V,Be]=(0,R.useState)(Gt),[He,We]=(0,R.useState)(0),[Ge,Ke]=(0,R.useState)(0),[Je,Ye]=(0,R.useState)(0),[Xe,Qe]=(0,R.useState)(!0),[$e,et]=(0,R.useState)(()=>{let e=Yn(`yafm.preview.width`,320);return e>=220?e:320}),[tt,nt]=(0,R.useState)(null),[rt,it]=(0,R.useState)(null),[at,ct]=(0,R.useState)({kind:null,info:null}),[lt,ut]=(0,R.useState)(`primary`),[dt,ft]=(0,R.useState)(null),[pt,mt]=(0,R.useState)(null),[H,ht]=(0,R.useState)(null),[gt,vt]=(0,R.useState)(null),[xt,Tt]=(0,R.useState)({primary:0,secondary:0}),[Dt,Ot]=(0,R.useState)({primary:null,secondary:null}),[kt,jt]=(0,R.useState)(null),[Mt,Nt]=(0,R.useState)([]),[Pt,Ft]=(0,R.useState)(!1),[It,zt]=(0,R.useState)(null),[Bt,Vt]=(0,R.useState)(``),Kt=(0,R.useRef)([]),Zt=(0,R.useRef)([]),[$t,en]=(0,R.useState)([]),[on,sn]=(0,R.useState)(!1),cn=(0,R.useMemo)(()=>on?new Set($t.map(e=>e.path)):new Set,[$t,on]),[ln,fn]=(0,R.useState)(!1),[pn,mn]=(0,R.useState)([]),[hn,gn]=(0,R.useState)(null),U=(0,R.useRef)(0),[_n,vn]=(0,R.useState)(()=>{let e=Zn(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Ib({x:e.x,y:e.y}):Ib({x:Math.max(20,window.innerWidth-340),y:110})}),yn=(0,R.useCallback)(()=>{vn(e=>Ib(e)),fn(!0)},[]),W=t.find(e=>e.id===i)??t[0],G=Nb(W),K=Mb(W),bn=Pb(W),Sn=G===`files`?W.listing?.parent??Bb(bn):null,Cn=W.splitWith?t.find(e=>e.id===W.splitWith):void 0,wn=G===`files`&&Cn!==void 0,Tn=Cn?Pb(Cn):``,En=Cn?Cn.listing?.parent??Bb(Tn):null,Dn=wn&&Cn&&lt===`secondary`?Cn:W,On=B?.defaultView??xe,kn=Lb(Dn,On);(0,R.useEffect)(()=>{r(B?.accentColor,B?.secondaryColor,Ie)},[B?.accentColor,B?.secondaryColor,Ie]),(0,R.useEffect)(()=>{oh(B?.fonts)},[B?.fonts]),(0,R.useEffect)(()=>{M(B?.timeFormat,B?.timeFormatPattern)},[B?.timeFormat,B?.timeFormatPattern]),(0,R.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!B?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[B?.backgroundSource]),(0,R.useEffect)(()=>(ve(e=>new Promise(t=>{gn({id:++U.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,R.useEffect)(()=>{ut(`primary`)},[i]),(0,R.useEffect)(()=>{le(xn),me(0),ge(0)},[G]),(0,R.useEffect)(()=>{me(0)},[I.query,I.matchCase,I.regex]),(0,R.useEffect)(()=>{me(e=>he===0?0:Math.min(e,he-1))},[he]);let jn=kn.columns.includes(`linkCount`),Mn=(0,R.useMemo)(()=>{let e={},t=Js(B),n={};for(let[e,t]of Object.entries(B?.placeNames??{}))n[ee(e)]=t;for(let t of p)e[ee(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=ee(t),i=p.find(e=>ee(e.path)===r);e[r]={name:n[r]??i?.name??(x(t)||t),path:t,kind:`folder`,icon:i?.icon??B?.placeIcons?.[t]??null}}return e},[p,B]),Nn=(0,R.useMemo)(()=>({places:Mn,useIcons:B?.systemIcons===!1}),[Mn,B?.systemIcons]),Pn=B?.defaultView?.showImages??!0,Fn=B?.defaultView?.imageStripHeight??xe.imageStripHeight,In=G===`home`?(0,q.jsx)(na,{size:13}):G===`settings`?(0,q.jsx)(Ai,{size:13}):G===`recycle`?(0,q.jsx)(Ii,{size:13}):G===`gallery`?(0,q.jsx)(Wi,{size:13}):void 0,Rn=A.open&&A.query.length>0,Vn=(0,R.useMemo)(()=>Rn&&Dn.listing?Dn.listing.entries.filter(e=>An(e.isDirectory?Bn(Nn,e.fullPath,e.name):e.name,A)).map(e=>e.fullPath):[],[Rn,A,Dn.listing,Nn]);(0,R.useEffect)(()=>{ie(0)},[A.query,A.matchCase,A.regex,Dn.listing?.path]);let Hn=Vn.length===0?-1:Math.min(ne,Vn.length-1),Un=(0,R.useCallback)(()=>{j(e=>({...e,open:!1,query:``})),ie(0)},[]),Wn=(0,R.useCallback)(()=>{j(e=>({...e,open:!0})),N(e=>e+1)},[]),Gn=(0,R.useCallback)(()=>{le(e=>({...e,open:!0})),fe(e=>e+1)},[]),Kn=(0,R.useCallback)(()=>{le(xn),me(0),ge(0)},[]),qn=(0,R.useCallback)(e=>{me(t=>he===0?0:(Math.min(t,he-1)+e+he)%he)},[he]),Jn=(0,R.useCallback)(e=>{j(t=>({...t,open:!0,query:t.open?t.query+e:e})),N(e=>e+1)},[]),$n=(0,R.useCallback)(e=>{ie(t=>Vn.length===0?0:(Math.min(t,Vn.length-1)+e+Vn.length)%Vn.length)},[Vn.length]),er=(0,R.useRef)({tabs:t,activeId:i,activePane:lt});er.current={tabs:t,activeId:i,activePane:lt};let tr=(0,R.useRef)(B);tr.current=B;let nr=(0,R.useRef)(!1),rr=(0,R.useRef)([]),ir=(0,R.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),ar=(0,R.useRef)(new Map),or=(0,R.useCallback)(e=>{let t=(ar.current.get(e)??0)+1;return ar.current.set(e,t),()=>ar.current.get(e)===t},[]),sr=(0,R.useCallback)((e,t)=>{l.available&&t&&e===Fb(er.current)&&l.send({type:`fs.focus`,payload:{path:t}})},[]),cr=(0,R.useCallback)(async(e,t,n)=>{if(!(t&&$c(t)))try{let r=await je(t,jn);if(!n()||!r.listing)return;ir(e,e=>e.loading?{listing:r.listing,view:r.listing.view??null}:{})}catch{}},[jn,ir]),lr=(0,R.useCallback)(async(e,t,n=!1)=>{let r=or(e);Un(),sr(e,t);let i=!n||!er.current.tabs.find(t=>t.id===e)?.listing,a=!n&&t!==void 0;ir(e,e=>{if(!a)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&P(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&cr(e,t,r);let o=t&&$c(t)?await nl(t):await we(t,!0,jn,z.current,t?Hb(t):void 0);if(!r())return;ir(e,e=>({listing:o,view:o.view??null,loading:!1,fresh:!1,history:a?e.history.map((t,n)=>n===e.index?o.path:t):e.history,index:e.index})),!n&&!$c(o.path)&&Ue(o.path).then(()=>ze(e=>e+1))}catch(i){if(!r())return;let a=er.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Pb(a):``,s=Bb(o),c=zb(i);if(o&&an(c)){let i=E(o),a=await qa(i,!!tn(i));if(a){nn(i,a),r()&&lr(e,t,n);return}}ir(e,e=>({listing:{path:o,parent:s,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[or,jn,ir,sr,Un,cr]),ur=(0,R.useCallback)((e,t)=>{let n=tm(t);n&&(em(n)?(Un(),or(e),ir(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):lr(e,n))},[or,lr,ir,Un]),dr=(0,R.useCallback)(async(e,t,n)=>{if(Un(),em(t)){or(e),ir(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=or(e);sr(e,t),ir(e,()=>({index:n,listing:null,loading:!0,error:null}));try{$c(t)||cr(e,t,r);let n=$c(t)?await nl(t):await we(t,!0,jn,z.current,Hb(t));if(!r())return;ir(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;if(an(zb(i))){let i=E(t),a=await qa(i,!!tn(i));if(a){nn(i,a),r()&&dr(e,t,n);return}}ir(e,()=>({listing:{path:t,parent:Bb(t),entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:zb(i)}))}},[or,jn,ir,sr,Un,cr]),fr=(0,R.useCallback)((e,t=!0)=>{let r=Rb(e??$p(`home`));return n(e=>[...e,r]),t&&a(r.id),e&&!em(e)&&lr(r.id,e),r.id},[lr]),pr=(0,R.useCallback)(e=>{for(let t of er.current.tabs)Nb(t)===`files`&&P(Pb(t),e)&&lr(t.id,e,!0)},[lr]),mr=(0,R.useCallback)((e,t)=>{let n=x(t);for(let r of er.current.tabs)r.listing?.entries.some(t=>P(t.fullPath,e))&&ir(r.id,r=>{let i=r.listing;if(!i)return{};let a=i.entries.map(r=>P(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:a}}})},[ir]),hr=(0,R.useRef)([]);(0,R.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&T(t)&&e.add(ee(E(t)))}let n=hr.current.filter(t=>!e.has(t));hr.current=[...e],n.length>0&&De(n)},[t]);let gr=(0,R.useCallback)((e,t=!1)=>{t?fr($p(e)):ur(er.current.activeId,$p(e))},[fr,ur]),_r=(0,R.useCallback)(e=>{let{tabs:t,activeId:r}=er.current,i=t.find(t=>t.id===e),o=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(Zt.current.push(Mb(i)),Zt.current.length>Ab&&Zt.current.shift()),o.length===0){let e=Rb();n([e]),a(e.id);return}let s=t.findIndex(t=>t.id===e);n(o),r===e&&a(o[Math.min(s,o.length-1)].id)},[]),vr=(0,R.useCallback)(()=>{let e=Zt.current.pop();if(!e)return;let t={...Rb(e),fresh:!1};n(e=>[...e,t]),a(t.id),Nb(t)===`files`&&lr(t.id,Pb(t))},[lr]),yr=(0,R.useCallback)((e,t=!1)=>{t?fr(e):ur(Fb(er.current),e??$p(`home`))},[ur,fr]),br=(0,R.useCallback)(e=>{let{tabs:t,activeId:n}=er.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;a(r[i].id)},[]),xr=(0,R.useCallback)(()=>{let{tabs:e,activeId:t}=er.current,r=e.find(e=>e.id===t);if(!r||Nb(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),ir(t,()=>({splitWith:void 0})),ut(`primary`);return}let a=Pb(r),o={...Rb(a),hidden:!0};n(e=>[...e,o]),ir(t,()=>({splitWith:o.id})),lr(o.id,a),ut(`primary`)},[lr,ir]),Sr=(0,R.useCallback)(e=>{et(e),Xn(`yafm.preview.width`,e)},[]),Cr=(0,R.useCallback)((e,t,n)=>ct(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),wr=(0,R.useCallback)((e,t)=>Cr(`gallery`,e,t),[Cr]),Tr=(0,R.useCallback)((e,t)=>Cr(`recycle`,e,t),[Cr]),Er=wn?lt===`secondary`?rt??tt:tt??rt:tt,Dr=wn&&lt===`secondary`?xt.secondary:xt.primary,Or=G===`files`?Er:at.kind===G?at.info:null,kr=G===`files`?Dr>1?oe(e,Dr,`k_1_item_selected`,`count_items_selected`):void 0:at.kind===G?at.note:void 0,Ar=(0,R.useRef)(null),jr=e=>{e.preventDefault();let t=Ar.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);d(r),Xn(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Mr=(e,t,n)=>{t&&ft({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Nr=(0,R.useCallback)((e,t)=>{Tt(n=>n[e]===t?n:{...n,[e]:t})},[]),Pr=(0,R.useCallback)(e=>Nr(`primary`,e),[Nr]),Fr=(0,R.useCallback)(e=>Nr(`secondary`,e),[Nr]),Ir=(e,t)=>{xt[e]!==0&&Ot(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Lr=async(e,t=!1)=>{let n=dt;if(ft(null),!n)return;let r=e===null?await Et(n.directory,t):await At(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;Un(),jt(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Rr=(0,R.useCallback)(()=>{let{tabs:e}=er.current,t=e.find(e=>e.id===Fb(er.current));t&&t.index>0&&dr(t.id,t.history[t.index-1],t.index-1)},[dr]),zr=(0,R.useCallback)(()=>{let{tabs:e}=er.current,t=e.find(e=>e.id===Fb(er.current));t&&t.index<t.history.length-1&&dr(t.id,t.history[t.index+1],t.index+1)},[dr]),Br=(0,R.useCallback)(()=>{let{tabs:e}=er.current,t=e.find(e=>e.id===Fb(er.current));t&&Nb(t)===`files`&&t.listing?.parent&&yr(t.listing.parent)},[yr]),Vr=(0,R.useRef)(null),Hr=(0,R.useCallback)(()=>{for(let e of er.current.tabs)e.listing&&lr(e.id,e.listing.path,!0)},[lr]),Ur=(0,R.useCallback)(e=>{e.length!==0&&(mn(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),yn())},[yn]),Wr=(0,R.useCallback)(async e=>{let t=await St(e);t.length!==0&&Ur(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Ur]),Gr=(0,R.useCallback)(e=>{let t=new Set(e);mn(e=>e.filter(e=>!t.has(e.path)))},[]),Kr=(0,R.useCallback)(async e=>{let t=tr.current;if(!t)return;let n=await St(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>ee(e.path))),i=n.filter(e=>!r.has(ee(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(i.length===0)return;let a={...t,favorites:[...t.favorites??[],...i]};Fe(a),await ot(a),We(e=>e+1)},[]),qr=(0,R.useCallback)(async e=>{let t=tr.current;if(!t)return;let n=new Set(e.map(ee)),r=(t.favorites??[]).filter(e=>!n.has(ee(e.path)));if(r.length===(t.favorites??[]).length)return;let i={...t,favorites:r};Fe(i),await ot(i),We(e=>e+1)},[]),Jr=(0,R.useCallback)(()=>mn([]),[]),Yr=(0,R.useRef)(-1),Xr=(0,R.useCallback)(e=>{en(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),sn(e.move),e.entries.length>0&&yn()},[yn]),Zr=(0,R.useCallback)(async()=>{if(l.available)try{let e=await yt();Yr.current=e.sequence,Xr(e)}catch{}},[Xr]),Qr=(0,R.useCallback)(async e=>{e.length!==0&&await _t(e,!1)&&await Zr()},[Zr]),$r=(0,R.useRef)(pn);$r.current=pn;let ei=(0,R.useRef)(ln);ei.current=ln;let ti=(0,R.useRef)(!1);(0,R.useEffect)(()=>{let e=B?.trayAutoShow??!0,t=t=>{e&&vc(t)&&(ei.current||(ti.current=!0),yn())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{ti.current&&window.setTimeout(()=>{ti.current&&$r.current.length===0&&fn(!1),ti.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[yn,B?.trayAutoShow]),(0,R.useEffect)(()=>{let e=()=>vn(e=>Ib(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let ni=(0,R.useCallback)(async()=>{let e=$r.current;if(e.length>0){let t=await St(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));mn(e=>e.filter(e=>n.has(e.path)))}await Zr()},[Zr]),ri=(0,R.useCallback)(()=>{ni(),Ye(e=>e+1),Hr()},[ni,Hr]),ii=(0,R.useCallback)(e=>{let t=Ib(e);vn(t),Qn(`yafm.tray.position`,t)},[]),ai=(0,R.useCallback)(()=>{ti.current=!1,ln?fn(!1):yn()},[yn,ln]),oi=(0,R.useCallback)(async(t,n,r)=>{let i=await bt(t,n,r);i.cancelled||(i.ok?(r&&Gr(t),Ye(e=>e+1),Hr(),Zr()):Ga(i.error??e(`the_files_could_not_be_transferred`)))},[Hr,Zr,Gr]);(0,R.useEffect)(()=>{if(l.available)return Ut().then(e=>{Kt.current=e,Nt(e)},()=>void 0),l.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=Kt.current.find(t=>t.id===e.id);return!t||t.state!==e.state});Kt.current=n,Nt(n),r&&Ft(!0)})},[]);let si=(0,R.useCallback)(()=>{Wt().then(()=>Ut().then(e=>{Kt.current=e,Nt(e)},()=>void 0))},[]);(0,R.useEffect)(()=>{if(!l.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await yt();if(!e||t.sequence===Yr.current)return;Yr.current=t.sequence,Xr(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Xr]);let ci=(0,R.useCallback)(async e=>{let t=e?await Lt():await Rt();t.ok?(Ye(e=>e+1),Hr()):t.error&&!t.error.startsWith(`Nothing to`)&&Ga(t.error)},[Hr]),li=(0,R.useRef)(jn);(0,R.useEffect)(()=>{li.current!==jn&&(li.current=jn,Hr())},[jn,Hr]);let ui=(0,R.useCallback)((e,t)=>{let{tabs:n}=er.current,r=n.find(t=>t.id===e);if(!r||Nb(r)!==`files`)return;let i=Pb(r),a=tr.current?.defaultView??xe,o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||be.iconSize,gridSize:r.view?.gridSize||a.gridSize||be.gridSize,sort:r.view?.sort??be.sort,sortDescending:r.view?.sortDescending??be.sortDescending,...t};ir(e,()=>({view:o})),Vr.current!==null&&window.clearTimeout(Vr.current),Vr.current=window.setTimeout(()=>{Vr.current=null,ke(i,o)},250)},[ir]),di=(0,R.useCallback)(e=>{ui(Fb(er.current),e)},[ui]),fi=(0,R.useCallback)(e=>{let t=tr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe,columns:e}};Fe(n),ot(n)},[]),pi=(0,R.useCallback)(e=>{let t=tr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe,showImages:e}};Fe(n),ot(n)},[]),mi=(0,R.useCallback)(e=>{let t=tr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe,imageStripHeight:e}};Fe(n),ot(n)},[]),hi=(0,R.useCallback)((e,t,n,r)=>{let i=er.current.tabs.find(t=>t.id===e);if(!i||Nb(i)!==`files`||!i.listing)return;let a=Pb(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));ir(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Ae(a,t,n,r)},[ir]),gi=(0,R.useCallback)((e,t)=>{let n=er.current.tabs.find(t=>t.id===e);if(!n)return;let r=Lb(n,tr.current?.defaultView??xe);ui(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending})},[ui]),_i=(0,R.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),vi=(0,R.useCallback)(()=>{Me().then(m,()=>m([]))},[]),J=(0,R.useCallback)(e=>{let t=(e.openTabs??[]).map(tm).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...Rb(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),a(r[i].id);for(let e of r)Nb(e)===`files`&&lr(e.id,Pb(e),!0);return!0},[lr]),yi=(0,R.useCallback)(e=>{let t=rr.current;if(rr.current=[],t.length===0)return;let n=t.filter(e=>!Ob.has(e));for(let e of t)n.includes(e)||kb(e);if(n.length===0)return;let{tabs:r}=er.current;if(!e&&r.length===1&&r[0].fresh){ur(r[0].id,n[0]),kb(n[0]);for(let e of n.slice(1))fr(e),kb(e);return}let i=n.map(e=>{let t=fr(e);return kb(e),t}).at(-1);i&&setTimeout(()=>a(i),0)},[fr,ur]),bi=(0,R.useCallback)(()=>{Ze().then(e=>{Fe(e),Pe(e.recentLimit);let t={...Gt,...e.shortcuts};Be(t),qt(t.openInNewTab),We(e=>e+1),nr.current||(nr.current=!0,yi(e.restoreTabs&&J(e)))},()=>{Pe(10),nr.current=!0,yi(!1)})},[yi,J]),xi=(0,R.useCallback)(()=>{Ve().then(Se,()=>Se([]))},[]),Si=(0,R.useCallback)(()=>{Ne().then(_,()=>_([]))},[]),Ti=t.filter(e=>!e.hidden),ki=Ti.map(Mb),ji=ki.join(`
`),Mi=Math.max(Ti.findIndex(e=>e.id===i),0);(0,R.useEffect)(()=>{if(!B?.restoreTabs)return;let e=setTimeout(()=>void st(ki,Mi),700);return()=>clearTimeout(e)},[ji,Mi,B?.restoreTabs]),(0,R.useEffect)(()=>{let{tabs:e,activeId:t}=er.current,n=e.find(e=>e.id===t);n&&n.fresh&&Nb(n)===`files`&&lr(n.id,Pb(n),!0),vi(),bi(),Si(),ce().then(y,()=>y(null))},[lr,vi,bi,Si]),(0,R.useEffect)(()=>{if(ue().then(S,()=>S(null)),l.available)return l.on(e=>{let t=e;t.type===`update.checked`&&t.data&&S(t.data)})},[]),(0,R.useEffect)(()=>{if(l.available)return l.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&c({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Ga(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Ga(n.data.error??e(`pairing_failed`))}})},[e]),(0,R.useEffect)(()=>{let e=setInterval(Si,3e4);return()=>clearInterval(e)},[Si]),(0,R.useEffect)(()=>{G===`home`&&(xi(),Si())},[G,W.id,xi,Si]),(0,R.useEffect)(()=>{if(!l.available)return;let e=l.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=er.current,i=t.data.startup===!0;i&&Ob.has(n)?kb(n):i&&!nr.current?rr.current.includes(n)||rr.current.push(n):(i&&r.length===1&&r[0].fresh?ur(r[0].id,n):em(n)?ur(Fb(er.current),n):fr(n),i&&kb(n))});return l.send({type:`app.ready`}),e},[ur,fr]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,folderSizes:{...a.listing.folderSizes,...i}}},n})})},[]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>{let t=e.findIndex(e=>e.listing?.path===r);if(t<0)return e;let n=e.slice(),a=e[t];return n[t]={...a,listing:{...a.listing,counts:{...a.listing.counts,...i}}},n})})},[]),(0,R.useEffect)(()=>{let e=e=>{if(Qt(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Rr();return}if(e.key===`BrowserForward`){e.preventDefault(),zr();return}if(e.key===`Escape`&&A.open){e.preventDefault(),Un();return}let t=Yt(e);if(t===V.closeTab)e.preventDefault(),_r(Fb(er.current));else if(t===V.newTab)e.preventDefault(),fr();else if(t===V.reopenTab)e.preventDefault(),vr();else if(t===V.goBack)e.preventDefault(),Rr();else if(t===V.goForward)e.preventDefault(),zr();else if(t===V.goUp)e.preventDefault(),Br();else if(t===V.find)e.preventDefault(),G===`files`?Wn():Gn();else if(t===V.location)e.preventDefault(),Ke(e=>e+1);else if(t===V.home){e.preventDefault();let t=p.find(e=>e.kind===`home`)?.path;t&&yr(t)}else t===V.iconsView?(e.preventDefault(),G===`files`&&di({mode:`grid`})):t===V.detailsView?(e.preventDefault(),G===`files`&&di({mode:`list`})):t===V.nextTab?(e.preventDefault(),br(1)):t===V.previousTab?(e.preventDefault(),br(-1)):t===V.hidden||t===`alt+.`?(e.preventDefault(),qe().then(()=>{Ye(e=>e+1),Hr()})):t===V.undo?(e.preventDefault(),ci(!0)):t===V.redo?(e.preventDefault(),ci(!1)):t===V.splitView?(e.preventDefault(),xr()):G!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Jn(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[V,G,A.open,_r,vr,fr,Rr,zr,Br,Wn,Gn,Un,Jn,di,br,yr,p,Hr,ci,xr]),(0,R.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Rr()):(e.button===4||e.button===9)&&(e.preventDefault(),zr())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Rr,zr]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Rr();break;case`forward`:zr()}})},[Rr,zr]);let Ni=(0,R.useMemo)(()=>{let e=new Set;for(let n of t){if(Nb(n)!==`files`)continue;let t=Pb(n);if(t&&!$c(t)){if(T(t)){let n=Bb(E(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),Pi=Ni.join(`\0`);(0,R.useEffect)(()=>{l.available&&l.send({type:`fs.watch`,payload:{paths:Ni,owner:`app`}})},[Pi,i]);let Fi=Nb(Dn)===`files`?Pb(Dn):``;(0,R.useEffect)(()=>{l.available&&l.send({type:`fs.focus`,payload:{path:Fi||null}})},[Fi]),(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=er.current.tabs.filter(e=>Nb(e)===`files`&&P(Pb(e),n)),i=er.current.tabs.filter(e=>{let t=Pb(e);return Nb(e)===`files`&&t.length>0&&T(t)&&P(E(t),n)});if(r.length!==0||i.length!==0){dn(n);for(let e of i){let t=er.current.tabs.find(t=>t.id===e.id),r=t?Pb(t):``;t&&Nb(t)===`files`&&!t.loading&&T(r)&&P(E(r),n)&&lr(e.id,r,!0)}r.length!==0&&we(n,!1,jn).then(e=>{for(let t of r){let n=er.current.tabs.find(e=>e.id===t.id);n&&Nb(n)===`files`&&P(Pb(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=er.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&Nb(n)===`files`&&P(Pb(n),e.path)&&ir(t.id,()=>({listing:e}))},300):ir(t.id,()=>({listing:e})))}},()=>void 0)}})},[jn,lr,ir]);let Li=W.index>0,Ri=W.index<W.history.length-1,zi=(e,t)=>{let n=Lb(e,On),r=e.listing?.path??e.history[e.index]??``,i=T(r),a=i&&te(r);return(0,q.jsx)(Nl,{platform:v?.platform,confirmDelete:B?.confirmDelete??!1,cutPaths:cn,previewVideoAudio:B?.previewVideoAudio??!1,previewVideoAutoplay:B?.previewVideoAutoplay??!1,showDetails:!1,onPreviewInfo:t?nt:it,onActivate:()=>ut(t?`primary`:`secondary`),enableShortcuts:(!wn||(t?lt===`primary`:lt===`secondary`))&&(!i||a),error:e.error,find:e.id===Dn.id?{...A,currentPath:Hn<0?null:Vn[Hn]}:void 0,selectMatchesToken:e.id===Dn.id?se:0,imageStripHeight:Fn,listing:e.listing,loading:e.loading,onImageStripHeight:mi,readOnly:i&&!a||$c(e.listing?.path??``),onOpen:(t,n)=>{n?fr(t):lr(e.id,t)},onOpenFile:(t,n)=>{$c(t)?il(t).catch(e=>void Ga(zb(e))):re(t)?B?.archiveHandler??!1?n?fr(t):lr(e.id,t):Ce(t):T(t)?(async()=>{let e=await Ee(t,z.current,Hb(t));if(!e.path&&an(e.error)){let n=E(t),r=tn(n);r&&rn(n);let i=await qa(n,!!r);i&&(nn(n,i),e=await Ee(t,z.current,i))}e.path?Ce(e.path):e.error&&Ga(e.error)})():Ce(t)},onRefresh:()=>{let t=e.listing?.path;t&&pr(t)},onRename:mr,onSelectionCountChange:t?Pr:Fr,onSetTags:(t,n,r)=>hi(e.id,t,n,r),selectionMenuRequest:t?Dt.primary:Dt.secondary,onSort:t=>gi(e.id,t),onPaste:ri,onClipboardChanged:()=>void Zr(),onTransfer:oi,onAddToTray:e=>void Wr(e),onAddFavorite:e=>void Kr(e),onRemoveFavorite:e=>void qr(e),favoritePaths:Le,onExtractArchive:(e,t)=>void Ki(e,t),openOnSingleClick:B?.openOnSingleClick??!1,pendingRename:kt&&t===(lt===`primary`)&&P(kt.directory,e.listing?.path??``)?kt.path:null,pendingRenameToken:kt?.token??0,refreshToken:Je,shortcuts:V,showCheckboxes:B?.showCheckboxes??!0,showImages:Pn,view:n})},Bi=A.open&&(0,q.jsx)(uf,{current:Hn,focusToken:ae,matchCase:A.matchCase,mode:A.mode,onClose:Un,onMatchCase:()=>j(e=>({...e,matchCase:!e.matchCase})),onMode:()=>j(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>$n(1),onPrevious:()=>$n(-1),onQuery:e=>j(t=>({...t,query:e})),onRegex:()=>j(e=>({...e,regex:!e.regex})),query:A.query,regex:A.regex,total:Vn.length,onSelectMatches:Vn.length>0?()=>F(e=>e+1):void 0}),Vi=G===`files`&&T(bn),Hi=Vi&&te(bn),Ui=Vi&&W.listing?.archiveEncrypted===!0,Gi=async(t,n)=>{let r=E(t),i=await Te(r,n,z.current,Hb(r));if(!i.ok&&an(i.error)){let e=tn(r);e&&rn(r);let t=await qa(r,!!e);t&&(nn(r,t),i=await Te(r,n,z.current,t))}i.ok?(pr(n),un(),lr(W.id,n,!0)):Ga(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},Ki=async(e,t)=>{let n=E(e),r=Bb(n);if(!r)return;if(t===`choose`){let e=await Ba(r);e&&await Gi(n,e);return}let i=t===`named`;if(t===`auto`){let e=P(n,bn)?W.listing?.entries??[]:(await we(n,!1,!1,z.current,Hb(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let a=r.includes(`\\`)?`\\`:`/`,o=i?`${r.replace(/[\\/]+$/,``)}${a}${Vb(n)}`:r;await Gi(n,o)},Ji=async e=>{Vi&&await Ki(bn,e)},Yi=async()=>{Vi&&await Ki(bn,`choose`)},Xi=(0,q.jsxs)(Yb,{children:[(0,q.jsx)(Xb,{"data-shortcut":Xt(V.goBack),disabled:!Li,onClick:e=>{W.index>0&&Jt(e)?fr(W.history[W.index-1]):Rr()},title:e(`back`),type:`button`,children:(0,q.jsx)(Di,{})}),(0,q.jsx)(Xb,{"data-shortcut":Xt(V.goForward),disabled:!Ri,onClick:e=>{W.index<W.history.length-1&&Jt(e)?fr(W.history[W.index+1]):zr()},title:e(`forward`),type:`button`,children:(0,q.jsx)(Oi,{})}),(0,q.jsx)(Xb,{"data-shortcut":Xt(V.goUp),disabled:G!==`files`||!Sn,onClick:e=>{Sn&&(Jt(e)?fr(Sn):yr(Sn))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(wi,{})}),(0,q.jsx)(nm,{focusToken:Ge,icon:In,label:G===`files`?void 0:e(gb[G]),onContextMenu:G===`files`?(e,t,n)=>ht({x:t,y:n,path:e}):void 0,onNavigate:yr,path:G===`files`?bn:K}),G===`files`&&(!Vi||Hi)&&(0,q.jsx)(Xb,{onClick:e=>Mr(e,bn,()=>void lr(W.id,bn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ei,{})}),(0,q.jsx)(Xb,{"data-shortcut":Xt(V.find),onClick:()=>G===`files`?Wn():Gn(),title:e(`search`),type:`button`,children:(0,q.jsx)(Ci,{})}),xt.primary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ym,{}),(0,q.jsx)(Xb,{onClick:e=>Ir(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Aa,{})})]}),(0,q.jsx)(`span`,{ref:zt,style:{display:`contents`}}),Vi&&(0,q.jsxs)(Zb,{children:[(0,q.jsx)(ym,{}),Ui&&(0,q.jsxs)(Qb,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,q.jsx)(ja,{size:12}),e(`encrypted`)]}),(0,q.jsx)(Xb,{onClick:()=>void Yi(),onContextMenu:e=>{e.preventDefault(),mt({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,q.jsx)(qi,{})}),(0,q.jsx)(Io,{icon:(0,q.jsx)(ya,{size:15}),onChange:e=>{let t=Number(e);_e(t),z.current=t,Vi&&lr(W.id,bn,!0)},options:jb.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(jb.find(e=>e.value===String(L))?.label??`auto`)}`,value:String(L)})]})]}),Zi=I.open?{...I,index:pe}:null;return(0,q.jsx)(Ln,{value:Nn,children:(0,q.jsxs)(Gb,{$rounded:k,children:[(0,q.jsx)(Cd,{settings:B,theme:Ie}),(0,q.jsx)(Gy,{activeId:W.id,onClose:_r,onNewTab:()=>fr(),onReorder:_i,onTransferToTab:oi,onSelect:a,onViewChange:di,onColumns:fi,onShowImages:pi,showImages:Pn,tasks:Mt,onClearTasks:si,activityOpen:Pt,onActivityOpenChange:Ft,trayCount:pn.length+$t.length,trayVisible:ln,onToggleTray:ai,split:wn,canSplit:G===`files`,onToggleSplit:xr,details:Xe,canDetails:G===`files`||G===`recycle`||G===`gallery`,onToggleDetails:()=>Qe(e=>!e),currentFolder:G===`files`&&!$c(bn)?bn:``,shortcuts:V,view:kn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=Nb(n),i=Pb(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?Pb(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?zn(Nn,i):void 0,archive:r===`files`&&T(i),split:!!a,title:r===`files`?Bn(Nn,i,x(i)||e(`files`)):e(gb[r]),partner:a?{title:Bn(Nn,o,x(o)||e(`files`)),place:zn(Nn,o)}:void 0}})}),(0,q.jsxs)(Kb,{children:[(0,q.jsx)(ev,{activeKind:G,currentPath:G===`files`?K:``,drives:h,historyVersion:Re,onNavigate:yr,onOpenView:gr,homePath:p.find(e=>e.kind===`home`)?.path??``,places:p,recent:ye,recentLimit:Oe,version:He}),(0,q.jsxs)(qb,{children:[(0,q.jsxs)(ix,{children:[(0,q.jsxs)(ax,{children:[G!==`files`&&Xi,(0,q.jsxs)(Jb,{children:[G!==`files`&&I.open&&(0,q.jsx)(uf,{current:pe,focusToken:de,matchCase:I.matchCase,mode:I.mode,onClose:Kn,onMatchCase:()=>le(e=>({...e,matchCase:!e.matchCase})),onMode:()=>le(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>qn(1),onPrevious:()=>qn(-1),onQuery:e=>le(t=>({...t,query:e})),onRegex:()=>le(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:I.query,regex:I.regex,total:he,onSelectMatches:G===`gallery`||G===`recycle`?()=>F(e=>e+1):void 0}),G===`files`?wn&&Cn?(0,q.jsxs)(ex,{ref:Ar,children:[(0,q.jsxs)(tx,{style:{flex:u},children:[(0,q.jsxs)($b,{$active:lt===`primary`,onPointerDown:()=>ut(`primary`),children:[(0,q.jsx)(Xb,{"data-shortcut":Xt(V.goBack),disabled:!Li,onClick:e=>{let t=W.index-1;t<0||(Jt(e)?fr(W.history[t]):dr(W.id,W.history[t],t))},title:e(`back`),type:`button`,children:(0,q.jsx)(Di,{})}),(0,q.jsx)(Xb,{"data-shortcut":Xt(V.goForward),disabled:!Ri,onClick:e=>{let t=W.index+1;t>=W.history.length||(Jt(e)?fr(W.history[t]):dr(W.id,W.history[t],t))},title:e(`forward`),type:`button`,children:(0,q.jsx)(Oi,{})}),(0,q.jsx)(Xb,{"data-shortcut":Xt(V.goUp),disabled:!Sn,onClick:e=>{Sn&&(Jt(e)?fr(Sn):lr(W.id,Sn))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(wi,{})}),(0,q.jsx)(nm,{focusToken:lt===`primary`?Ge:void 0,onContextMenu:(e,t,n)=>ht({x:t,y:n,path:e}),onNavigate:(e,t)=>t?fr(e):void lr(W.id,e),path:bn}),(0,q.jsx)(Xb,{onClick:e=>Mr(e,bn,()=>void lr(W.id,bn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ei,{})}),(0,q.jsx)(Xb,{"data-shortcut":Xt(V.find),onClick:Wn,title:e(`search`),type:`button`,children:(0,q.jsx)(Ci,{})}),xt.primary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ym,{}),(0,q.jsx)(Xb,{onClick:e=>Ir(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Aa,{})})]})]}),zi(W,!0),lt===`primary`&&Bi]}),(0,q.jsx)(nx,{onDoubleClick:()=>d(.5),onPointerDown:jr,title:e(`drag_to_resize_double_click_to_reset`)}),(0,q.jsxs)(tx,{$enter:!0,style:{flex:1-u},children:[(0,q.jsxs)($b,{$active:lt===`secondary`,onPointerDown:()=>ut(`secondary`),children:[(0,q.jsx)(Xb,{"data-shortcut":Xt(V.goBack),disabled:Cn.index<=0,onClick:e=>{let t=Cn.index-1;t<0||(Jt(e)?fr(Cn.history[t]):dr(Cn.id,Cn.history[t],t))},title:e(`back`),type:`button`,children:(0,q.jsx)(Di,{})}),(0,q.jsx)(Xb,{"data-shortcut":Xt(V.goForward),disabled:Cn.index>=Cn.history.length-1,onClick:e=>{let t=Cn.index+1;t>=Cn.history.length||(Jt(e)?fr(Cn.history[t]):dr(Cn.id,Cn.history[t],t))},title:e(`forward`),type:`button`,children:(0,q.jsx)(Oi,{})}),(0,q.jsx)(Xb,{"data-shortcut":Xt(V.goUp),disabled:!En,onClick:e=>{En&&(Jt(e)?fr(En):lr(Cn.id,En))},title:e(`up_one_level`),type:`button`,children:(0,q.jsx)(wi,{})}),(0,q.jsx)(nm,{focusToken:lt===`secondary`?Ge:void 0,onContextMenu:(e,t,n)=>ht({x:t,y:n,path:e}),onNavigate:(e,t)=>t?fr(e):void lr(Cn.id,e),path:Tn}),(0,q.jsx)(Xb,{onClick:e=>Mr(e,Tn,()=>void lr(Cn.id,Tn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ei,{})}),(0,q.jsx)(Xb,{"data-shortcut":Xt(V.find),onClick:Wn,title:e(`search`),type:`button`,children:(0,q.jsx)(Ci,{})}),xt.secondary>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ym,{}),(0,q.jsx)(Xb,{onClick:e=>Ir(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,q.jsx)(Aa,{})})]})]}),zi(Cn,!1),lt===`secondary`&&Bi]})]}):(0,q.jsxs)(q.Fragment,{children:[Xi,(0,q.jsxs)(rx,{children:[zi(W,!0),Bi]})]}):G===`home`?(0,q.jsx)(Kp,{platform:v?.platform,drives:h,find:Zi,historyVersion:Re,onSearchMatches:ge,homePath:p.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Si,onHistoryChanged:()=>ze(e=>e+1),onAddToTray:e=>void Wr(e),onAddFavorite:e=>void Kr(e),onRemoveFavorite:e=>void qr(e),favoritePaths:Le,onExtractArchive:(e,t)=>void Ki(e,t),settingsVersion:He,theme:Ie,onOpen:yr,onLayoutChanged:bi,onPlacesChanged:m,onRecentCleared:xi,places:p,recent:ye,recentLimit:Oe,visibilityVersion:Je}):G===`settings`?(0,q.jsx)(Nh,{appInfo:v,find:Zi,focusSection:C,onSearchMatches:ge,onSettingsChanged:bi}):G===`gallery`?(0,q.jsx)(G_,{platform:v?.platform,toolbarSlot:It,onStatusChange:Vt,confirmDelete:B?.confirmDelete??!1,find:Zi,onSearchMatches:ge,openOnSingleClick:B?.openOnSingleClick??!1,onAddToTray:e=>void Wr(e),onAddFavorite:e=>void Kr(e),onRemoveFavorite:e=>void qr(e),favoritePaths:Le,onExtractArchive:(e,t)=>void Ki(e,t),shortcuts:V,showCheckboxes:B?.showCheckboxes??!0,selectMatchesToken:se,onPreviewChange:wr,view:kn}):(0,q.jsx)(xm,{find:Zi,toolbarSlot:It,onStatusChange:Vt,onOpenLocation:yr,onShowDetails:()=>Qe(!0),platform:v?.platform,selectMatchesToken:se,onPreviewChange:Tr})]},G)]}),(G===`files`||G===`gallery`||G===`recycle`)&&(0,q.jsx)(ys,{emptyNote:e(`nothing_selected`),info:Or,onWidth:Sr,open:Xe,selectionNote:kr,videoAudio:B?.previewVideoAudio??!1,videoAutoplay:B?.previewVideoAutoplay??!1,width:$e})]}),(0,q.jsxs)(ux,{children:[(0,q.jsx)(`span`,{children:G===`files`&&W.listing?Ub(e,W.listing):Bt}),v?(0,q.jsxs)(ox,{children:[(0,q.jsxs)(`span`,{children:[`v`,v.version,` · `,v.platform]}),v.debug&&(0,q.jsx)(lx,{children:`debug`}),b?.available&&(0,q.jsxs)(sx,{onClick:e=>{w(`updates`),gr(`settings`,Jt(e))},title:e(`version_version_is_available`,{version:b.latest}),type:`button`,children:[(0,q.jsx)(cx,{}),e(`update_available`)]})]}):(0,q.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,q.jsx)(Cc,{clipboardItems:$t,clipboardMove:on,currentDirectory:G===`files`?K:``,items:pn,onAdd:e=>void Wr(e),onClear:Jr,onClose:()=>fn(!1),onCopyToClipboard:e=>void Qr(e),onPosition:ii,onRemove:Gr,onTransfer:oi,position:_n,visible:ln}),dt&&(0,q.jsx)(No,{creationOnly:!0,directory:dt.directory,menu:{x:dt.x,y:dt.y,paths:[],background:!0},onClose:()=>ft(null),onCreateFile:e=>void Lr(e),onCreateFolder:e=>void Lr(null,e),shortcuts:V}),H&&(0,q.jsx)(No,{allowCompression:!0,directory:Bb(H.path)??H.path,menu:{x:H.x,y:H.y,paths:[H.path]},onAddToTray:e=>void Wr(e),onAddFavorite:e=>void Kr(e),onRemoveFavorite:e=>void qr(e),favoritePaths:Le,onExtractArchive:(e,t)=>void Ki(e,t),onArchiveCreated:e=>{e&&pr(Bb(H.path)??H.path)},onClose:()=>ht(null),onCompressTo:(e,t)=>vt({paths:e,name:t}),onCopy:(e,t)=>void _t(e,t),onDelete:e=>void wt(e,!1).then(()=>pr(Bb(H.path)??H.path)),onOpen:(e,t)=>t?fr(e):void lr(W.id,e),onOpenFile:e=>void Ce(e),onPaste:e=>void Ct(e).then(t=>{t.ok&&pr(e)}),onRefresh:()=>pr(H.path),shortcuts:V,target:{path:H.path,isDirectory:!0}}),gt&&(0,q.jsx)(Yo,{initialDirectory:Bb(H?.path??bn)??bn,initialName:gt.name,onCancel:()=>vt(null),onCompress:async e=>{let t=await Ht(gt.paths,e);return!t.ok&&t.error&&Ga(t.error),t.ok}}),pt&&(0,q.jsx)(xo,{items:[{label:e(`extract_here`),onSelect:()=>void Ji(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Ji(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Ji(`auto`)}],onClose:()=>mt(null),x:pt.x,y:pt.y}),hn&&(0,q.jsx)(Od,{action:hn.prompt.action,delaySeconds:hn.prompt.delaySeconds,hits:hn.prompt.hits,onCancel:()=>{hn.resolve(!1),gn(null)},onConfirm:()=>{hn.resolve(!0),gn(null)},permanent:hn.prompt.permanent},hn.id),(0,q.jsx)(Kd,{}),(0,q.jsx)($d,{}),s&&(0,q.jsx)(_b,{code:s.code,deviceName:s.deviceName,onAccept:()=>{Xc(s.requestId,!0),c(null)},onReject:()=>{Xc(s.requestId,!1),c(null)}}),(0,q.jsx)(db,{}),(0,q.jsx)(O,{})]})})}var Gb=v.div`
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
`,Kb=v.div`
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
`,qb=v.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Jb=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${go}
`,Yb=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Xb=vm,Zb=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,Qb=v.span`
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
`,$b=v.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,ex=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,tx=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?yo:``}
`,nx=v.div`
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
        ${bo}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,rx=v.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,ix=v.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ax=v.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ox=v.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,sx=v.button`
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
`,cx=v.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,lx=v.span`
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
`,ux=v.footer`
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
`;function dx({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,inline:i=!1,places:a,fileView:s,showImages:c,save:u=!1,initialName:d=``,defaultExtension:f=``,theme:p,onCancel:m,onSelect:h}){let g=o(),_=yl(`picker`),v=t===`file`,y=r??[],[S,C]=(0,R.useState)(e),[w,T]=(0,R.useState)(null),[te,E]=(0,R.useState)(!0),[D,O]=(0,R.useState)(null),[k,A]=(0,R.useState)(()=>new Set),[j,ne]=(0,R.useState)(a??[]),[re,M]=(0,R.useState)([]),[ie,ae]=(0,R.useState)([]),[oe,N]=(0,R.useState)([]),[se,P]=(0,R.useState)([]),[ce,F]=(0,R.useState)(d),[I,le]=(0,R.useState)(null),[ue,de]=(0,R.useState)(y.length===0),[fe,pe]=(0,R.useState)(`files`),[me,he]=(0,R.useState)(0),[ge,L]=(0,R.useState)(xn),[_e,z]=(0,R.useState)(0),[ve,ye]=(0,R.useState)(0),[Se,Ce]=(0,R.useState)(0),[Te,Ee]=(0,R.useState)(null),[De,Oe]=(0,R.useState)(null),[ke,Ae]=(0,R.useState)(0),[je,Pe]=(0,R.useState)(null),[B,Fe]=(0,R.useState)(xe.imageStripHeight);(0,R.useEffect)(()=>{Ze().then(Pe,()=>Pe(null))},[]),(0,R.useEffect)(()=>{a?ne(a):Me().then(ne,()=>ne([]))},[a]),(0,R.useEffect)(()=>{Ne().then(M,()=>M([])),Ve().then(ae,()=>ae([]))},[]),(0,R.useEffect)(()=>{let e=!0;return E(!0),O(null),A(new Set),u||F(v?``:x(S)),we(S||void 0,!1).then(t=>{e&&(T(t),C(t.path),u||F(v?``:x(t.path)),E(!1))},t=>{e&&(O(t instanceof Error?t.message:String(t)),E(!1))}),()=>{e=!1}},[S,me,v]),(0,R.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),L(e=>({...e,open:!0})),z(e=>e+1);return}if(e.key===`Escape`){ge.open?(L(e=>({...e,open:!1,query:``})),ye(0)):m();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Le();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Re();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),L(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),z(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||$e()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,R.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Le()):(e.button===4||e.button===9)&&(e.preventDefault(),Re())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Ie=e=>{let t=e.trim();t.length!==0&&ee(t)!==ee(S)&&(N(e=>[...e,S]),P([]),pe(`files`),C(t))},Le=()=>{let e=oe.at(-1);e!==void 0&&(N(e=>e.slice(0,-1)),P(e=>[S,...e]),C(e))},Re=()=>{let e=se[0];e!==void 0&&(P(e=>e.slice(1)),N(e=>[...e,S]),C(e))};(0,R.useEffect)(()=>{if(l.available)return l.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Le();break;case`forward`:Re()}})});let ze=w?.path??S,V=w?.parent??(S?b(S):null);(0,R.useEffect)(()=>{l.available&&ze&&l.send({type:`fs.watch`,payload:{paths:[ze],owner:`picker`}})},[ze]),(0,R.useEffect)(()=>{if(l.available&&ze)return l.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&ee(t.data.path)===ee(ze)&&we(ze,!1).then(e=>{T(e);let t=new Set(e.entries.map(e=>e.fullPath));A(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[ze]);let Be=(w?.entries??[]).filter(e=>e.isDirectory||v&&(ue||y.length===0||y.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),He=w?{...w,entries:Be}:null,Ue=ge.open&&ge.query.length>0,We=(0,R.useMemo)(()=>Ue?Be.filter(e=>An(e.name,ge)).map(e=>e.fullPath):[],[Ue,Be,ge]);(0,R.useEffect)(()=>{ye(0)},[ge.query,ge.matchCase,ge.regex,w?.path]);let Ge=We.length===0?-1:Math.min(ve,We.length-1),Ke=(0,R.useMemo)(()=>({...ge,currentPath:Ge>=0?We[Ge]:null}),[ge,Ge,We]),qe=je?.defaultView??xe,Je=s??{mode:qe.mode,iconSize:qe.iconSize,gridSize:qe.gridSize,sort:`name`,sortDescending:!1,columns:qe.columns??[`type`,`size`,`modified`]},Ye=(c??qe.showImages)&&Je.mode===`list`,Xe=ce.trim(),Qe=Xe.length>0?px(Xe)?Xe:fx(ze,Xe):null,$e=()=>{if(te||D)return;if(u){let e=Xe;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){Ga(g(`the_file_name_is_not_valid`));return}let t=f.length>0&&!/\.[^.]*$/.test(e)?f.startsWith(`.`)?f:`.${f}`:``,n=px(e)?e+t:fx(ze,e+t);St([n]).then(e=>e[0]?.exists?le(n):h([n]),()=>h([n]));return}let e=n?[...k]:[...k].slice(0,1);e.length>0?h(e):Qe!==null&&Xe!==x(ze)?h([Qe]):!v&&ze&&h([ze])},et=(0,R.useCallback)(e=>{A(new Set(e)),e.length===1?F(x(e[0])):u||F(e.length===0&&!v?x(ze):``)},[ze,v,u]),tt=e=>{w?.entries.find(t=>t.fullPath===e)?.isDirectory?Ie(e):u?F(x(e)):v&&h([e])},nt=e=>F(e),rt=async e=>{let t=Te;if(Ee(null),!t||!ze)return;let n=e===null?await Et(ze):await At(ze,e);n.ok&&n.path!==null&&(L(e=>({...e,open:!1,query:``})),e!==null&&de(!0),he(e=>e+1),window.setTimeout(()=>{Oe(n.path),Ae(e=>e+1)},120))},it=()=>{L(e=>({...e,open:!0})),z(e=>e+1)},at=e=>{ye(t=>We.length===0?0:(t+e+We.length)%We.length)},ot=e=>(0,q.jsxs)(Cx,{children:[(0,q.jsxs)(wx,{children:[(0,q.jsx)(Tx,{children:g(v||u?`file_name`:`folder_3`)}),(0,q.jsx)(Ex,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),$e())},spellCheck:!1,value:ce}),v&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Tx,{children:g(`files_of_type`)}),(0,q.jsx)(Io,{onChange:e=>de(e===`all`),options:[...y.length>0?[{value:`supported`,label:`${g(`supported_files`)} (${y.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${g(`all_files`)} (*.*)`}],value:ue?`all`:`supported`})]})]}),(0,q.jsxs)(Dx,{children:[(0,q.jsx)(Ox,{onClick:m,type:`button`,children:g(`cancel`)}),(0,q.jsxs)(Ox,{$primary:!0,disabled:te||D!==null||(u||v&&k.size===0)&&Xe.length===0,onClick:$e,type:`button`,children:[(0,q.jsx)(Li,{size:12}),g(u?`save_as`:v?`select_this_file`:`select_this_folder`)]})]}),(0,q.jsx)(cs,{confirmLabel:g(`overwrite`),message:g(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>le(null),onConfirm:()=>{let e=I;le(null),e&&h([e])},open:I!==null,title:g(`overwrite`)})]}),st=(0,q.jsxs)(hx,{$inline:i,role:`dialog`,"aria-modal":!i,children:[!i&&(0,q.jsxs)(gx,{children:[(0,q.jsxs)(_x,{children:[(0,q.jsx)(bi,{size:16}),g(u?`save_as`:v?`choose_a_file`:`choose_a_folder`)]}),(0,q.jsx)(vx,{onClick:m,title:g(`cancel`),type:`button`,children:(0,q.jsx)(Ri,{size:12})})]}),(0,q.jsxs)(yx,{children:[(0,q.jsx)(ev,{activeKind:fe===`overview`?`home`:fe===`gallery`?`gallery`:`files`,currentPath:ze,drives:re,hiddenViews:v?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:j.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Ie(e),onOpenView:e=>{e===`home`?(A(new Set),F(v?``:x(ze)),pe(`overview`)):e===`gallery`&&v&&(A(new Set),F(``),pe(`gallery`))},places:j,recent:ie,recentLimit:10}),(0,q.jsx)(bx,{children:fe===`overview`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Kp,{drives:re,theme:p,historyVersion:0,homePath:j.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Ie(e),onPick:v?e=>h([e]):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:et,places:j,readOnly:!0,recent:ie,recentLimit:10,visibilityVersion:0}),ot(F)]}):fe===`gallery`?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(G_,{onPick:e=>h([e]),onSelectionChange:et,showCheckboxes:je?.showCheckboxes??!0,view:{...be,columns:[]}}),ot(F)]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(xx,{children:[(0,q.jsx)(Sx,{disabled:oe.length===0,onClick:Le,title:g(`back`),type:`button`,children:(0,q.jsx)(Di,{})}),(0,q.jsx)(Sx,{disabled:se.length===0,onClick:Re,title:g(`forward`),type:`button`,children:(0,q.jsx)(Oi,{})}),(0,q.jsx)(Sx,{disabled:!V,onClick:()=>V&&Ie(V),title:g(`up_one_level`),type:`button`,children:(0,q.jsx)(wi,{})}),(0,q.jsx)(nm,{onNavigate:Ie,path:ze}),(0,q.jsx)(Sx,{onClick:e=>Ee({x:e.clientX,y:e.clientY}),title:g(`new_folder_or_file`),type:`button`,children:(0,q.jsx)(Ei,{})}),(0,q.jsx)(Sx,{onClick:it,title:g(`search`),type:`button`,children:(0,q.jsx)(Ci,{})}),_.available&&(0,q.jsx)(Sx,{onClick:e=>_.open(e.clientX,e.clientY),title:g(`selection_menu`),type:`button`,children:(0,q.jsx)(Aa,{})})]}),ge.open&&(0,q.jsx)(uf,{current:Ge,focusToken:_e,matchCase:ge.matchCase,mode:ge.mode,onClose:()=>{L(e=>({...e,open:!1,query:``})),ye(0)},onMatchCase:()=>L(e=>({...e,matchCase:!e.matchCase})),onMode:()=>L(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>at(1),onPrevious:()=>at(-1),onQuery:e=>L(t=>({...t,query:e})),onRegex:()=>L(e=>({...e,regex:!e.regex})),query:ge.query,regex:ge.regex,total:We.length,onSelectMatches:()=>Ce(e=>e+1)}),(0,q.jsx)(Nl,{allowBackgroundMenu:!0,confirmDelete:je?.confirmDelete??!1,enableShortcuts:!0,error:D,find:Ke,selectMatchesToken:Se,imageStripHeight:B,loading:te,listing:He,onImageStripHeight:Fe,onOpen:tt,onOpenFile:tt,onRefresh:()=>he(e=>e+1),onSelectionChange:et,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:je?.openOnSingleClick??!1,refreshToken:me,pendingRename:De,pendingRenameToken:ke,showCheckboxes:je?.showCheckboxes??!0,showDetails:!1,showImages:Ye,singleSelect:!n,view:Je}),ot(nt)]})})]}),Te&&(0,q.jsx)(No,{creationOnly:!0,directory:ze,menu:{x:Te.x,y:Te.y,paths:[],background:!0},onClose:()=>Ee(null),onCreateFile:v?e=>void rt(e):void 0,onCreateFolder:()=>void rt(null),shortcuts:Gt})]});return i?st:(0,ro.createPortal)((0,q.jsx)(mx,{onPointerDown:e=>{e.target===e.currentTarget&&m()},children:st}),document.body)}function fx(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function px(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var mx=v.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${yo}
`,hx=v.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:io}
    ${({$inline:e})=>e?``:mo}
`,gx=v.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,_x=v.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,vx=v.button`
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
`,yx=v.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,bx=v.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,xx=v.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Sx=v.button`
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
`,Cx=v.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,wx=v.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Tx=v.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Ex=v.input`
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
`,Dx=v.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Ox=v.button`
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
`;function kx({mode:e,save:t=!1,multiple:n,extensions:i,initial:a,initialName:s=``,defaultExtension:c=``}){let d=o(),p=u(),[m,h]=(0,R.useState)(null),_=f(g(m?.themeMode)),[v,y]=(0,R.useState)({}),[b,x]=(0,R.useState)(null),[S,C]=(0,R.useState)(null),[w,T]=(0,R.useState)(null),ee=(0,R.useRef)(0);(0,R.useEffect)(()=>{l.send({type:`app.ready`})},[]),(0,R.useEffect)(()=>(ve(e=>new Promise(t=>{T({id:++ee.current,prompt:e,resolve:t})})),()=>ve(null)),[]),(0,R.useEffect)(()=>{Ze().then(h,()=>void 0)},[]),(0,R.useEffect)(()=>{r(m?.accentColor,m?.secondaryColor,_)},[m?.accentColor,m?.secondaryColor,_]);let te=m?.defaultView??xe,E={mode:v.mode??te.mode,iconSize:v.iconSize??te.iconSize,gridSize:v.gridSize??te.gridSize,sort:`name`,sortDescending:!1,columns:b??te.columns??[`type`,`size`,`modified`]},D=e=>y(t=>({...t,...e}));return(0,q.jsxs)(Ax,{children:[(0,q.jsxs)(jx,{children:[(0,q.jsx)(Mx,{children:(0,q.jsx)(Vi,{size:17})}),(0,q.jsx)(Nx,{...p,children:d(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,q.jsx)(Oy,{onChange:D,onColumns:x,onShowImages:C,showImages:S??te.showImages,view:E}),(0,q.jsx)(Px,{children:(0,q.jsx)(Fx,{onClick:()=>l.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:d(`cancel`),type:`button`,children:(0,q.jsx)(Ri,{size:12})})})]}),(0,q.jsx)(Ix,{children:(0,q.jsx)(dx,{extensions:i,initial:a,initialName:s,defaultExtension:c,inline:!0,mode:e,multiple:n,onCancel:()=>l.send({type:`pick.cancel`}),onSelect:e=>l.send({type:`pick.submit`,payload:{paths:e}}),save:t,showImages:S??te.showImages,fileView:E,theme:_})}),w&&(0,q.jsx)(Od,{action:w.prompt.action,delaySeconds:w.prompt.delaySeconds,hits:w.prompt.hits,onCancel:()=>{w.resolve(!1),T(null)},onConfirm:()=>{w.resolve(!0),T(null)},permanent:w.prompt.permanent},w.id),(0,q.jsx)(Kd,{}),(0,q.jsx)(O,{})]})}var Ax=v.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,jx=v.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,Mx=v.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,Nx=v.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Px=v.div`
    display: flex;
    flex-shrink: 0;
`,Fx=v.button`
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
`,Ix=v.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;document.documentElement.dataset.theme=i()?`dark`:`light`;var Lx=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,Lx),window.addEventListener(`pagehide`,Jn);var Rx=document.getElementById(`root`),zx=new URLSearchParams(window.location.search),Bx=zx.get(`picker`),Vx=zx.get(`filter`)??``;Rx&&(Wn(),(0,_e.createRoot)(Rx).render((0,q.jsx)(R.StrictMode,{children:(0,q.jsx)(d,{children:Bx===`folder`||Bx===`file`||Bx===`save`?(0,q.jsx)(kx,{defaultExtension:zx.get(`ext`)??``,extensions:Vx?Vx.split(`;`).filter(Boolean):[],initial:zx.get(`initial`)??``,initialName:zx.get(`name`)??``,mode:Bx===`folder`?`folder`:`file`,multiple:zx.get(`multiple`)===`1`,save:Bx===`save`}):(0,q.jsx)(Wb,{})})})));