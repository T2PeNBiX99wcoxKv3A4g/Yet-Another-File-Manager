const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-DiNjlOUR.js","assets/dist-CKllR0JH.js","assets/selectionMenu-CRlNslJh.js","assets/theme-DU3X_EOM.js","assets/theme--y6MTsAR.css","assets/Icons-5-2yk8Zn.js","assets/textSearch-VOTyBg9G.js","assets/SettingsView-MSxIA853.js","assets/GalleryView-DI3D01q4.js","assets/RecycleView-CCVZj9CK.js","assets/PickerWindow-sTcO0yIP.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,E as n,O as r,S as i,T as a,_ as o,a as s,b as c,c as l,f as u,h as d,k as f,l as p,m,p as h,r as g,s as _,u as v,v as y,w as b,x,y as S}from"./theme-DU3X_EOM.js";import{A as C,C as w,N as ee,S as T,T as E,_ as D,b as O,g as te,i as k,k as A,m as j,p as ne,r as re,u as M,v as ie,y as N}from"./dist-CKllR0JH.js";import{A as ae,At as oe,C as se,Ct as ce,D as le,Dt as ue,E as de,Et as P,Ft as fe,H as pe,It as me,J as he,L as F,Mt as ge,Nt as _e,O as ve,Ot as ye,P as be,Pt as xe,Q as Se,R as Ce,S as we,T as Te,Tt as Ee,U as De,V as Oe,W as I,Y as ke,Z as Ae,_ as je,_t as Me,a as Ne,at as Pe,b as Fe,bt as Ie,c as Le,ct as Re,d as ze,et as Be,f as Ve,g as He,h as Ue,ht as We,i as Ge,it as Ke,jt as qe,k as Je,kt as Ye,l as Xe,lt as L,m as Ze,mt as Qe,o as $e,p as et,q as tt,s as nt,t as rt,tt as it,u as R,ut as at,v as ot,vt as st,w as ct,wt as lt,x as ut,y as dt,z as ft}from"./selectionMenu-CRlNslJh.js";import{$ as pt,A as mt,B as z,C as ht,E as gt,F as _t,G as vt,I as yt,J as bt,K as xt,L as St,M as Ct,N as wt,O as Tt,P as Et,R as Dt,S as Ot,St as kt,T as At,U as jt,V as Mt,X as Nt,Y as Pt,Z as Ft,_ as It,_t as Lt,a as Rt,at as B,b as zt,c as Bt,ct as Vt,d as Ht,dt as Ut,et as Wt,f as Gt,ft as Kt,g as qt,h as Jt,ht as Yt,i as Xt,it as Zt,j as V,k as Qt,l as $t,lt as en,m as tn,mt as nn,n as rn,nt as an,o as on,ot as sn,p as cn,pt as ln,q as un,r as dn,rt as fn,s as pn,st as mn,t as hn,tt as gn,u as _n,ut as vn,v as yn,vt as bn,w as xn,x as Sn,xt as Cn,y as wn,yt as Tn,z as En}from"./Icons-5-2yk8Zn.js";var H=ee(C(),1),Dn=r(),On={managed:0,private:0,workingSet:0,available:0};async function kn(){return E.available?await E.request(`app.memory`):On}async function An(){return E.available?await E.request(`app.memory.trim`):On}var jn={registered:!1,pathMatches:!1,registeredPath:null};async function Mn(){return E.available?await E.request(`app.scheme`):jn}async function Nn(e){return E.available?await E.request(`app.scheme.set`,{enabled:e}):jn}var Pn={supported:!1,mode:`none`,active:!1,error:null};async function Fn(){return E.available?await E.request(`app.startup`):Pn}async function In(e){return E.available?await E.request(`app.startup.set`,{mode:e}):Pn}var Ln=null,Rn=new Set;function U(e){Ln=e,Rn.forEach(e=>e(Ln))}function W(){Ln=null,Rn.forEach(e=>e(null))}function zn(){let[e,t]=(0,H.useState)(Ln);return(0,H.useEffect)(()=>(Rn.add(t),()=>{Rn.delete(t)}),[]),e}async function Bn(e){return E.available?(await E.request(`fs.operation.properties.info`,{paths:[e]}))?.[0]??null:null}async function Vn(e){return E.available?await E.request(`fs.operation.properties.hash`,{path:e}):null}async function Hn(e){return E.available?await E.request(`fs.operation.properties.edit`,e):{ok:!1,error:null}}async function G(e){return E.available?await E.request(`fs.operation.properties.details`,{path:e}):null}async function Un(e){return E.available?(await E.request(`fs.operation.properties.details.set`,e))?.ok!==!1:!1}var Wn=null;function Gn(e){Wn=e}function Kn(e,t){return e.length===0||!Wn?Promise.resolve([]):new Promise(n=>Wn?.({conflicts:e,move:t,resolve:n}))}async function qn(e,t=!1){return!E.available||e.length===0?!1:(await E.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Jn(){return E.available?(await E.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function K(){return E.available?await E.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function Yn(e,t,n,r){if(!E.available||e.length===0)return{ok:!1,error:`nothing_to_transfer`,created:[]};if(!r){let i=await Zn(e,t,n);if(i.length>0){let e=await Kn(i,n);if(e===null)return{ok:!1,error:null,created:[],cancelled:!0};r=e}}return await Qn({action:n?`move`:`write`},i=>E.request(`fs.operation.transfer`,{paths:e,target:t,move:n,decisions:r??null,confirm:i}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function Xn(e,t,n){return E.available?await E.request(`fs.shell.startMenu`,{path:e,scope:t,pin:n}):{ok:!1,path:null,pinned:!1,error:null}}async function Zn(e,t,n){return!E.available||e.length===0?[]:(await E.request(`fs.operation.transfer.conflicts`,{paths:e,target:t,move:n})).conflicts??[]}async function Qn(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await fe({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function $n(e){return!E.available||e.length===0?[]:(await E.request(`fs.paths.info`,{paths:e})).entries}async function er(e,t=!1,n){if(!E.available)return{ok:!1,created:[]};if(!n){let t=await K(),r=t.entries.filter(e=>e.exists).map(e=>e.path);if(r.length>0){let i=await Zn(r,e,t.move);if(i.length>0){let e=await Kn(i,t.move);if(e===null)return{ok:!1,created:[],cancelled:!0};n=e}}}return await Qn({action:t?`move`:`write`},t=>E.request(`fs.clipboard.paste`,{directory:e,decisions:n??null,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0}))}async function tr(e,t=!1,n=!1){if(!E.available||e.length===0)return{ok:!1,error:null};let r=await E.request(`fs.operation.delete`,{paths:e,permanent:t,runningConfirmed:n}),i=!1;for(let a=0;a<2&&r.required&&r.token&&r.protected?.length;a++){if(!await fe({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:t})){i=!0;break}r=await E.request(`fs.operation.delete`,{paths:e,permanent:t,runningConfirmed:n,confirm:r.token})}return i?{...r,ok:!1,cancelled:!0}:r}async function nr(e,t){return E.available?await Qn({action:`rename`},n=>E.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function rr(e,t=!1){return E.available?await E.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function ir(e){if(!E.available)return null;let t=await E.request(`fs.caseSensitive.get`,{path:e});return t.ok?t.enabled:null}async function ar(e,t){return E.available?await E.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function or(e,t,n){return E.available?await E.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function sr(e,t){return E.available?await E.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function cr(e){if(!E.available||e.length===0)return;let t=await E.request(`fs.operation.properties`,{paths:e});!t.system&&t.items?.length&&U({items:t.items,canUseSystemSheet:!!t.canUseSystemSheet})}async function lr(e){E.available&&e.length!==0&&await E.request(`fs.operation.systemProperties`,{paths:e})}async function ur(e){return!E.available||e.length===0?{ok:!1,error:null}:await E.request(`fs.share`,{paths:e})}async function dr(e){E.available&&await E.request(`fs.operation.openWith`,{path:e})}async function fr(e){E.available&&await E.request(`fs.operation.terminal`,{path:e})}async function pr(e){return E.available?await E.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function mr(e,t){return E.available?(await E.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function hr(){return E.available?await E.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function gr(){return E.available?await E.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function _r(e){E.available&&await E.request(`fs.operation.showInExplorer`,{path:e})}async function vr(e){return!E.available||e.length===0?{verbs:[],safe:!0}:await E.request(`shell.verbs`,{paths:e})}async function yr(e,t,n,r){E.available&&e.length!==0&&await E.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function br(e,t){return!E.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await E.request(`fs.operation.compress`,{...t,paths:e})}async function xr(){return E.available?(await E.request(`app.tasks`)).tasks:[]}async function Sr(){E.available&&await E.request(`app.tasks.clear`)}async function Cr(e,t){return E.available?(await E.request(`app.tasks.start`,{kind:e,label:t})).id??null:null}async function wr(e,t=null){E.available&&e&&await E.request(`app.tasks.finish`,{id:e,failed:t!==null,error:t})}var Tr={};function Er(e){let t={};for(let[n,r]of Object.entries(e??{}))t[n]=Or(r);Tr=t,Mr=jr(Tr,`openInNewTab`)}function Dr(){return{...Tr}}function Or(e){return(e??``).split(`|`).map(e=>e.trim()).filter(Boolean)}function q(e){return e.join(`|`)}function kr(e){let t={};for(let[n,r]of Object.entries(e))t[n]=q(r);return t}function Ar(e){let t={...Tr};for(let[n,r]of Object.entries(e??{}))n in t&&(t[n]=Or(r));return t}function J(e,t,n){return e[t]?.includes(n)??!1}function jr(e,t){return e[t]?.[0]??``}var Mr=``;function Nr(e){Mr=e.trim()}function Pr(e){let t=Mr.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Fr(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Ir(e){return e.split(`+`).filter(Boolean).map(e=>X[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}function Y(e){return(e??[]).filter(Boolean).map(Ir).join(` / `)}var X={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Lr(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Rr=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],zr={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`,`.tga`,`.dds`,`.hdr`,`.exr`,`.pcx`,`.dib`,`.jxl`,`.jpe`,`.jfif`,`.apng`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Br(e){let t=Z(e);for(let{kind:e}of Rr)if(zr[e].has(t))return e;return null}function Vr(e){return Br(e)!==null}function Z(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Hr=(0,H.createContext)({places:{},useIcons:!1}),Ur=Hr.Provider;function Wr(){return(0,H.useContext)(Hr)}function Gr(e,t){return e.places[i(t)]}function Kr(e,t,n){return Gr(e,t)?.name||n}var Q=w(),qr={file:V,folder:Ct,text:bn,code:qt,image:jt,video:Cn,audio:on,archive:rn,pdf:gn,executable:Tt,font:wt,database:Sn,config:It,spreadsheet:ln,presentation:mn,document:ht},Jr={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Yr(e){let t=e.lastIndexOf(`.`);return t>0?Jr[e.slice(t).toLowerCase()]??`file`:`file`}function Xr({name:e,size:t}){let n=qr[e??`file`]??V;return(0,Q.jsx)(n,{size:t})}var Zr={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Qr(e,t,n,r){let i=e.toLowerCase();if(i.endsWith(`.lnk`))return r(`shortcut`);if(i.endsWith(`.url`)||i.endsWith(`.website`))return r(`internet_shortcut`);if(n!=null)return r(t?`folder_link`:`symbolic_link`);if(t)return r(`folder`);let a=e.lastIndexOf(`.`),o=a>0&&a<e.length-1?e.slice(a+1).toUpperCase():``,s=r(Zr[Yr(e)]??`file`);return o.length>0?`${o} ${s}`:r(`file`)}async function $r(e,t,n){return E.available?(await E.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function ei(e){return $r(`folder`,[],e??``)}function ti(e){return $r(`file`,e??[],``)}async function ni(e,t){if(!E.available)return{ok:!1,error:`Git is unavailable in the browser preview.`};try{return await E.request(t?`git.unstage`:`git.stage`,{paths:e})}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}var ri=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],ii=null,ai=0,oi=new Set;function si(){ai+=1;for(let e of oi)e()}function ci(e){return oi.add(e),()=>oi.delete(e)}function li(){return ai}function ui(e){ii=e,si()}function di(){return(0,H.useSyncExternalStore)(ci,li,li),ii}function fi({menu:e,directory:t,target:n,shortcuts:r,canPaste:a=!1,onClose:o,onOpen:s,onOpenFile:c,onSelectEntry:l,onOpenExternally:u,onRename:d,onDelete:f,onCopy:p,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:b,onAddToTray:x,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ee,onExtractArchive:E,onOpenAsArchive:D,onAddToStartMenu:O,allowCompression:te=!1,platform:k,onCompressTo:A,onArchiveCreated:j,gitEntries:ne,onGitChanged:re}){let M=T(),ie=di(),N=y(t),ae=k===`windows`,[oe,se]=(0,H.useState)({verbs:[],safe:!0,loading:!1}),[ce,le]=(0,H.useState)({recommended:[],other:[],loading:!1}),[ue,de]=(0,H.useState)(null),P=(0,H.useRef)(0),fe=(0,H.useRef)(0),pe=e?.paths.length===1,me=e?.background?t?[t]:[]:e?.paths??[],he=e?.background?t||null:pe&&n?.isDirectory?n.path:null;if((0,H.useEffect)(()=>{if(!e){se({verbs:[],safe:!0,loading:!1}),le({recommended:[],other:[],loading:!1});return}let t=++P.current;se({verbs:[],safe:!0,loading:ae&&me.length>0&&!N}),ae&&me.length>0&&!N&&vr(me).then(e=>{P.current===t&&se({...e,loading:!1})},()=>{P.current===t&&se({verbs:[],safe:!0,loading:!1})});let r=++fe.current;!N&&pe&&n&&ae?(le({recommended:[],other:[],loading:!0}),pr(n.path).then(e=>{fe.current===r&&le({...e,loading:!1})},()=>{fe.current===r&&le({recommended:[],other:[],loading:!1})})):le({recommended:[],other:[],loading:!1})},[e,pe,n?.path,n?.isDirectory,me.length,N]),(0,H.useEffect)(()=>{if(!e||N||!he){de(null);return}let t=!0;return ir(he).then(e=>{t&&de(e)},()=>{t&&de(null)}),()=>{t=!1}},[e,he,N]),!e)return null;let F=[],ge=[],_e=new Set((ee??[]).map(i)),ve=e.background?t?[t]:[]:e.paths,ye=ve.length>0&&ve.every(e=>_e.has(i(e))),be=()=>n?xe(n.path,n.isDirectory):`Archive`,xe=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},Se=async(e,n=be())=>{let r=await br(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?j?.(r.path,!0):je(r.error??M(`could_not_create_the_archive`))},Ce=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},we=new Map(Object.entries(ne??{}).map(([e,t])=>[e.toLowerCase(),t])),Te=e=>we.get(v(e).toLowerCase())??null,Ee=async(e,t)=>{let n=await ni(e,t);n.ok?re?.():je(n.error??M(`git_index_change_failed`))},De=async()=>{if(!he||ue===null)return;let e=await ar(he,!ue);e.ok?(de(e.enabled),b?.()):je(e.error??M(`could_not_change_the_case_sensitivity`))},Oe=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await or(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await or(e,t,`${a}\\${mi(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?b?.():je(o.error??M(`could_not_create_the_link`))},I=async e=>{if(!n)return;let r=await ei(t);r&&await Oe(e,n.path,r,v(n.path),e.endsWith(`-copy`))},ke=async e=>{let n=ie?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let a=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(a&&!r.isDirectory)continue;let o=r.path.replace(/[\\/][^\\/]+$/,``),s=i(o)===i(t);await Oe(n,r.path,t,v(r.path),a&&!s)}},Ae=async()=>{let t=(await $n(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&ui({paths:t})},Me=()=>{let e=ie?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:M(`cancel_selected_link`),icon:(0,Q.jsx)(wn,{size:14}),onSelect:()=>ui(null)},...t?[{label:M(`hard_link`),icon:(0,Q.jsx)(V,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`hard`)}]:[],{label:M(`symbolic_link`),icon:(0,Q.jsx)(V,{size:14}),separatorBefore:!t,onSelect:()=>void ke(`symbolic-file`)},...n?[...ae?[{label:M(`directory_junction`),icon:(0,Q.jsx)(Ct,{size:14}),onSelect:()=>void ke(`junction`)}]:[],{label:M(`smart_copy`),icon:(0,Q.jsx)(yn,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`smart-copy`)},{label:M(`smart_mirror`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void ke(`smart-mirror`)},{label:M(`multi_version_smart_copy`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void ke(`multi-version-smart-copy`)},{label:M(`hardlink_copy`),icon:(0,Q.jsx)(yn,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`hard-copy`)},{label:M(`symbolic_link_copy`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void ke(`symbolic-copy`)}]:[]]};if(e.background){if(h&&ge.push({label:M(`new_folder`),icon:(0,Q.jsx)(sn,{size:16}),shortcut:Y(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:M(`folder`),icon:(0,Q.jsx)(Ct,{size:14}),onSelect:()=>h(!1)}),!N&&ae&&e.push({label:M(`case_sensitive_folder`),icon:(0,Q.jsx)(_n,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...ri.map((e,t)=>({label:`${M(e.label)} (${e.extension})`,icon:(0,Q.jsx)(V,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),F.push({label:M(`new`),icon:(0,Q.jsx)(sn,{size:14}),children:e,onSelect:()=>void 0})}if(N||F.push({label:M(`create_link`),icon:(0,Q.jsx)(Ut,{size:14}),disabled:!ie,children:Me(),onSelect:()=>void 0}),_)return(0,Q.jsx)(Ne,{items:F,onClose:o,quick:ge,x:e.x,y:e.y});!N&&s&&F.push({label:M(`open_in_new_tab`),icon:(0,Q.jsx)(sn,{size:14}),onSelect:()=>s(t,!0)}),F.push({label:M(`copy_as_path`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void Ce([t])}),x&&F.push({label:M(`add_to_file_tray`),icon:(0,Q.jsx)(Ft,{size:14}),onSelect:()=>x([t])}),!N&&(ye?w:C)&&F.push({label:M(ye?`remove_from_favorites`:`add_to_favorites`),icon:ye?(0,Q.jsx)(z,{size:14}):(0,Q.jsx)(En,{size:14}),onSelect:()=>ye?w?.([t]):C?.([t])}),!N&&ue!==null&&F.push({label:M(`case_sensitive_names`),icon:(0,Q.jsx)(_n,{size:14}),checked:ue,onSelect:()=>void De()}),!N&&te&&(F.push({label:M(`open_in_terminal`),icon:(0,Q.jsx)(Lt,{size:14}),onSelect:()=>void fr(t)}),F.push({label:M(ae?`show_in_explorer`:`show_in_file_manager`),icon:(0,Q.jsx)(Ct,{size:14}),separatorBefore:!0,onSelect:()=>void _r(t)})),m&&ge.push({label:M(`paste`),icon:(0,Q.jsx)(Wt,{size:16}),disabled:!a,shortcut:Y(r.paste),onSelect:()=>m(t)}),N||ge.push({label:M(`properties`),icon:(0,Q.jsx)(_t,{size:16}),shortcut:Y(r.properties),onSelect:()=>void cr([t])})}else{if(l&&F.push({label:M(`choose`),icon:(0,Q.jsx)(Ht,{size:14}),onSelect:()=>{l(n?e.paths.length>1?[...e.paths]:[n.path]:[...e.paths])}}),s&&F.push({label:M(`open`),icon:(0,Q.jsx)(Xt,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&(u??c)?.(n.path)}}),n?.isDirectory&&(s&&F.push({label:M(`open_in_new_tab`),icon:(0,Q.jsx)(sn,{size:14}),onSelect:()=>s(n.path,!0)}),m&&F.push({label:M(`paste_into_folder`),icon:(0,Q.jsx)(Wt,{size:14}),disabled:!a,onSelect:()=>m(n.path)}),N||F.push({label:M(`open_in_terminal`),icon:(0,Q.jsx)(Lt,{size:14}),onSelect:()=>void fr(n.path)})),!N&&pe&&n&&!n.isDirectory&&D&&F.push({label:M(`open_as_archive`),icon:(0,Q.jsx)(rn,{size:14}),onSelect:()=>D(n.path)}),!N&&re&&e.paths.length>0){let t=[],n=[];for(let r of e.paths){let e=Te(r);e!==null&&e!==`!!`&&((e===`??`||e[1]!==`.`)&&n.push(r),e!==`??`&&e[0]!==`.`&&t.push(r))}let r=[];n.length>0&&r.push({label:M(`git_stage`),icon:(0,Q.jsx)(yt,{size:14}),onSelect:()=>void Ee(n,!1)}),t.length>0&&r.push({label:M(`git_unstage`),icon:(0,Q.jsx)(yt,{size:14}),onSelect:()=>void Ee(t,!0)}),r.length>0&&F.push({label:M(`git`),icon:(0,Q.jsx)(yt,{size:14}),separatorBefore:!0,children:r,onSelect:()=>void 0})}if(!N&&pe&&n&&!n.isDirectory&&S(n.path)&&E&&F.push({label:M(`extract_archive`),icon:(0,Q.jsx)(rn,{size:14}),separatorBefore:!0,children:[{label:M(`extract_here`),icon:(0,Q.jsx)(rn,{size:14}),onSelect:()=>E(n.path,`here`)},{label:M(`extract_to_a_folder_named_after_the_archive`),icon:(0,Q.jsx)(rn,{size:14}),onSelect:()=>E(n.path,`named`)},{label:M(`auto_extract_to_the_current_folder`),icon:(0,Q.jsx)(rn,{size:14}),onSelect:()=>E(n.path,`auto`)},{label:M(`extract_here_and_delete`),icon:(0,Q.jsx)(rn,{size:14}),separatorBefore:!0,onSelect:()=>E(n.path,`here-delete`)},{label:M(`extract_to_a_folder_and_delete_archive`),icon:(0,Q.jsx)(rn,{size:14}),onSelect:()=>E(n.path,`named-delete`)},{label:M(`auto_extract_and_delete_archive`),icon:(0,Q.jsx)(rn,{size:14}),onSelect:()=>E(n.path,`auto-delete`)},{label:M(`extract_to`),icon:(0,Q.jsx)(Ct,{size:14}),separatorBefore:!0,onSelect:()=>E(n.path,`choose`)}],onSelect:()=>void 0}),k===`windows`&&!N&&pe&&n&&O&&F.push({label:M(`add_to_start_menu`),icon:(0,Q.jsx)(nn,{size:14}),separatorBefore:!0,children:[{label:M(`add_to_user_start_menu`),icon:(0,Q.jsx)(nn,{size:14}),onSelect:()=>O(n.path,`user`,!1)},{label:M(`pin_to_user_start_menu`),icon:(0,Q.jsx)(Zt,{size:14}),onSelect:()=>O(n.path,`user`,!0)},{label:M(`add_to_global_start_menu`),icon:(0,Q.jsx)(St,{size:14}),separatorBefore:!0,onSelect:()=>O(n.path,`machine`,!1)},{label:M(`pin_to_global_start_menu`),icon:(0,Q.jsx)(Zt,{size:14}),onSelect:()=>O(n.path,`machine`,!0)}],onSelect:()=>void 0}),!N&&ae&&pe&&n){let e=[];if(ce.loading)e.push({label:M(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ce.recommended)e.push({label:t.name,group:M(`suggested_apps`),icon:t.icon?(0,Q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Q.jsx)(Tt,{size:14}),onSelect:()=>void mr(n.path,t.path).then(e=>{e||dr(n.path)})});for(let t of ce.other)e.push({label:t.name,group:M(`other_apps`),icon:t.icon?(0,Q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Q.jsx)(Tt,{size:14}),onSelect:()=>void mr(n.path,t.path).then(e=>{e||dr(n.path)})})}e.push({label:M(`choose_another_app`),icon:(0,Q.jsx)(Tt,{size:14}),separatorBefore:!0,onSelect:()=>void dr(n.path)}),F.push({label:M(`open_with_2`),icon:(0,Q.jsx)(Tt,{size:14}),children:e,onSelect:()=>void dr(n.path)})}if(!N&&k===`windows`&&e.paths.length>0&&F.push({label:M(`share`),icon:(0,Q.jsx)(Ut,{size:14}),separatorBefore:!0,onSelect:()=>void ur(e.paths).then(e=>{e.ok||je(e.error??M(`could_not_open_the_share_sheet`))})}),N||F.push({label:M(`compress`),icon:(0,Q.jsx)(rn,{size:14}),separatorBefore:!0,children:[{label:M(`compress_to_zip`),icon:(0,Q.jsx)(rn,{size:14}),onSelect:()=>void Se(e.paths)},{label:M(`compress_to`),icon:(0,Q.jsx)(rn,{size:14}),onSelect:()=>A?.(e.paths,be())}],onSelect:()=>void 0}),!N&&(e?.paths.length??0)>0){let e=[{label:M(`select_link_source`),icon:(0,Q.jsx)(Ut,{size:14}),onSelect:()=>void Ae()},...ie?[{label:M(`cancel_selected_link`),icon:(0,Q.jsx)(wn,{size:14}),onSelect:()=>ui(null)}]:[],...pe&&n?n.isDirectory?[{label:M(`symbolic_link`),icon:(0,Q.jsx)(Ct,{size:14}),separatorBefore:!0,onSelect:()=>void I(`symbolic-folder`)},...ae?[{label:M(`directory_junction`),icon:(0,Q.jsx)(Ct,{size:14}),onSelect:()=>void I(`junction`)}]:[],{label:M(`smart_copy`),icon:(0,Q.jsx)(yn,{size:14}),separatorBefore:!0,onSelect:()=>void I(`smart-copy`)},{label:M(`smart_mirror`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void I(`smart-mirror`)},{label:M(`multi_version_smart_copy`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void I(`multi-version-smart-copy`)},{label:M(`hardlink_copy`),icon:(0,Q.jsx)(yn,{size:14}),separatorBefore:!0,onSelect:()=>void I(`hard-copy`)},{label:M(`symbolic_link_copy`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void I(`symbolic-copy`)}]:[{label:M(`symbolic_link`),icon:(0,Q.jsx)(V,{size:14}),separatorBefore:!0,onSelect:()=>void I(`symbolic-file`)},{label:M(`hard_link`),icon:(0,Q.jsx)(V,{size:14}),onSelect:()=>void I(`hard`)}]:[]];F.push({label:M(`create_link`),icon:(0,Q.jsx)(Ut,{size:14}),children:e,onSelect:()=>void 0})}!N&&n?.isDirectory&&ue!==null&&F.push({label:M(`case_sensitive_names`),icon:(0,Q.jsx)(_n,{size:14}),checked:ue,onSelect:()=>void De()}),F.push({label:M(`copy_as_path`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void Ce(e.paths)}),x&&F.push({label:M(`add_to_file_tray`),icon:(0,Q.jsx)(Ft,{size:14}),onSelect:()=>x(e.paths)}),!N&&(ye?w:C)&&F.push({label:M(ye?`remove_from_favorites`:`add_to_favorites`),icon:ye?(0,Q.jsx)(z,{size:14}):(0,Q.jsx)(En,{size:14}),onSelect:()=>ye?w?.(ve):C?.(ve)}),N||F.push({label:M(ae?`show_in_explorer`:`show_in_file_manager`),icon:(0,Q.jsx)(Ct,{size:14}),separatorBefore:!0,onSelect:()=>void _r(ve[0])}),p&&ge.push({label:M(`cut`),icon:(0,Q.jsx)(zt,{size:16}),shortcut:Y(r.cut),onSelect:()=>p(e.paths,!0)},{label:M(`copy`),icon:(0,Q.jsx)(yn,{size:16}),shortcut:Y(r.copy),onSelect:()=>p(e.paths,!1)}),pe&&n&&d&&ge.push({label:M(`rename`),icon:(0,Q.jsx)(an,{size:16}),shortcut:Y(r.rename),onSelect:()=>d(n.path)}),f&&ge.push({label:M(`delete`),icon:(0,Q.jsx)(Tn,{size:16}),danger:!0,shortcut:Y(r.delete),onSelect:()=>f(e.paths)}),N||ge.push({label:M(`properties`),icon:(0,Q.jsx)(_t,{size:16}),shortcut:Y(r.properties),onSelect:()=>void cr(e.paths)})}if(oe.loading)F.push({label:M(`more_actions`),icon:(0,Q.jsx)(Tt,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(oe.verbs.length>0){let e={items:[],children:new Map};for(let t of oe.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,Q.jsx)(pi,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void yr(me,oe.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,Q.jsx)(pi,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];F.push({label:M(oe.safe?`more_actions`:`more_actions_extensions`),icon:(0,Q.jsx)(Tt,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,Q.jsx)(Ne,{items:F,onClose:o,quick:ge,x:e.x,y:e.y})}function pi({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,Q.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,Q.jsx)(Xt,{size:14});case`document`:return(0,Q.jsx)(ht,{size:14});case`cut`:return(0,Q.jsx)(zt,{size:14});case`copy`:return(0,Q.jsx)(yn,{size:14});case`paste`:return(0,Q.jsx)(Wt,{size:14});case`trash`:return(0,Q.jsx)(Tn,{size:14});case`pencil`:return(0,Q.jsx)(an,{size:14});case`gear`:return(0,Q.jsx)(_t,{size:14});case`star`:return(0,Q.jsx)(nn,{size:14});case`pin`:return(0,Q.jsx)(Zt,{size:14});case`executable`:return(0,Q.jsx)(Tt,{size:14});case`share`:return(0,Q.jsx)(Ut,{size:14});case`arrow`:return(0,Q.jsx)(Xt,{size:14});default:return(0,Q.jsx)(hn,{size:14})}}function mi(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}var hi=f();function gi({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=T(),[l,u]=(0,H.useState)(null),d=(0,H.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,H.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(_i,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,Q.jsx)(vi,{children:f?.label??``}):(0,Q.jsx)(yi,{children:a}),a===void 0&&(0,Q.jsx)(bi,{children:(0,Q.jsx)(Gt,{size:11})})]}),l&&(0,hi.createPortal)((0,Q.jsx)(xi,{"aria-label":c(`options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,Q.jsxs)(Si,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,Q.jsx)(Ci,{children:t.label}),t.value===e&&(0,Q.jsx)(Ht,{size:11})]},t.value))}),document.body)]})}var _i=A.button`
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
`,vi=A.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yi=A.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,bi=A.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,xi=A.div`
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
    ${nt}
`,Si=A.button`
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
`,Ci=A.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wi=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],Ti=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],Ei=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],Di=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Oi=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function ki({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=T(),a=(0,H.useRef)(null),[o,s]=(0,H.useState)(e),[c,l]=(0,H.useState)(t),[u,d]=(0,H.useState)(`zip`),[f,p]=(0,H.useState)(`5`),[m,h]=(0,H.useState)(`default`),[g,_]=(0,H.useState)(`none`),[v,y]=(0,H.useState)(``),[b,x]=(0,H.useState)(`0`),[S,C]=(0,H.useState)(!1);(0,H.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let w=wi.find(e=>e.value===u)??wi[0],ee=u===`zip`||u===`zipx`,E=g!==`none`,D=ee||u===`7z`,O=u===`zip`||u===`7z`,te=async()=>{if(S||!c.trim()||!o||E&&v.length===0)return;C(!0);let e=await r({directory:o,name:c.trim(),format:u,level:w.level?Number(f):0,method:ee?m:null,encryption:D?g:`none`,password:E?v:void 0,splitSize:O?Number(b):0});C(!1),e&&n()};return(0,hi.createPortal)((0,Q.jsx)(Ai,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,Q.jsxs)(ji,{"aria-modal":`true`,role:`dialog`,children:[(0,Q.jsx)(Mi,{children:i(`compress_to`)}),(0,Q.jsxs)(Ni,{children:[(0,Q.jsx)(Pi,{children:i(`archive_name`)}),(0,Q.jsx)(Fi,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&te()}}),(0,Q.jsx)(Ii,{children:w.extension})]}),(0,Q.jsxs)(Ni,{children:[(0,Q.jsx)(Pi,{children:i(`format`)}),(0,Q.jsx)(gi,{onChange:e=>d(e),options:wi.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,Q.jsxs)(Ni,{children:[(0,Q.jsx)(Pi,{children:i(`method`)}),(0,Q.jsx)(gi,{disabled:!ee,onChange:h,options:Ti.map(e=>({...e,label:i(e.label)})),value:ee?m:`default`,width:236,zIndex:3700})]}),(0,Q.jsxs)(Ni,{children:[(0,Q.jsx)(Pi,{children:i(`encryption`)}),(0,Q.jsx)(gi,{disabled:!D,onChange:e=>{_(e),e===`none`&&y(``)},options:Ei.map(e=>({...e,label:i(e.label)})),value:D?g:`none`,width:236,zIndex:3700})]}),E&&(0,Q.jsxs)(Ni,{children:[(0,Q.jsx)(Pi,{children:i(`password`)}),(0,Q.jsx)(Fi,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,Q.jsxs)(Ni,{children:[(0,Q.jsx)(Pi,{children:i(`split_volumes`)}),(0,Q.jsx)(gi,{disabled:!O,onChange:x,options:Di.map(e=>({...e,label:i(e.label)})),value:O?b:`0`,width:236,zIndex:3700})]}),(0,Q.jsxs)(Ni,{children:[(0,Q.jsx)(Pi,{children:i(`compression_level`)}),(0,Q.jsx)(gi,{disabled:!w.level,onChange:p,options:Oi.map(e=>({...e,label:i(e.label)})),value:w.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,Q.jsxs)(Ni,{$stack:!0,children:[(0,Q.jsx)(Pi,{children:i(`destination`)}),(0,Q.jsxs)(Li,{children:[(0,Q.jsx)(Ri,{title:o,children:o}),(0,Q.jsx)(Bi,{disabled:S,onClick:()=>void ei(o).then(e=>{e&&s(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,Q.jsxs)(zi,{children:[(0,Q.jsx)(Bi,{disabled:S,onClick:n,type:`button`,children:i(`cancel`)}),(0,Q.jsx)(Vi,{disabled:S||!c.trim()||E&&v.length===0,onClick:()=>void te(),type:`button`,children:i(S?`compressing`:`compress`)})]})]})}),document.body)}var Ai=A.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${$e}
`,ji=A.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${R}
`,Mi=A.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ni=A.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Pi=A.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Fi=A.input`
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
`,Ii=A.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Li=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Ri=A.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zi=A.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Bi=A.button`
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
`,Vi=A(Bi)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Hi({programs:e,message:t,confirmLabel:n,onCancel:r,onConfirm:i}){let a=T(),o=(0,H.useRef)(null);return(0,H.useEffect)(()=>{o.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[r]),(0,hi.createPortal)((0,Q.jsx)(Wi,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,Q.jsxs)(Gi,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsx)(Ki,{children:a(`the_program_is_running`)}),(0,Q.jsx)(qi,{children:t}),(0,Q.jsx)(Ji,{children:e.map(e=>(0,Q.jsx)(Ui,{program:e,title:a(`process_id_n`,{id:e.id})},e.id))}),(0,Q.jsxs)(na,{children:[(0,Q.jsx)(ra,{onClick:r,ref:o,type:`button`,children:a(i?`cancel`:`ok`)}),i&&(0,Q.jsx)(ra,{$primary:!0,onClick:i,type:`button`,children:n??a(`delete`)})]})]})}),document.body)}function Ui({program:e,title:t}){let n=P(e.path,!1,!0);return(0,Q.jsxs)(Yi,{title:e.path,children:[(0,Q.jsx)(Xi,{children:n?(0,Q.jsx)(Zi,{alt:``,src:n}):(0,Q.jsx)(Qi,{})}),(0,Q.jsxs)($i,{children:[(0,Q.jsx)(ea,{children:e.name}),(0,Q.jsx)(ta,{children:t})]})]})}var Wi=A.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${$e}
`,Gi=A.div`
    width: min(520px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${R}
`,Ki=A.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,qi=A.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ji=A.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-height: 220px;
    margin-bottom: 14px;
    overflow-y: auto;
    padding: 8px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: rgba(var(--bg-rgb), 0.55);
`,Yi=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 3px 0;
`,Xi=A.span`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 20px;
    height: 20px;
`,Zi=A.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`,Qi=A.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--text-muted);
`,$i=A.span`
    display: flex;
    align-items: baseline;
    gap: 8px;
    min-width: 0;
`,ea=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ta=A.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10.5px;
`,na=A.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,ra=A.button`
    min-width: 84px;
    padding: 7px 12px;
    border: 1px solid ${({$primary:e})=>e?`rgba(248, 113, 113, 0.5)`:`var(--border-color)`};
    border-radius: var(--radius-sm);
    background: ${({$primary:e})=>e?`rgba(248, 113, 113, 0.16)`:`var(--bg-input)`};
    color: ${({$primary:e})=>e?`#fca5a5`:`var(--text-secondary)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover {
        border-color: ${({$primary:e})=>e?`rgba(248, 113, 113, 0.8)`:`var(--border-color-hover)`};
        color: ${({$primary:e})=>e?`#fecaca`:`var(--text-primary)`};
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,ia=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),aa=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),oa=new Set([`png`,`jpg`,`jpeg`,`jfif`,`jpe`,`gif`,`webp`,`bmp`,`avif`,`ico`,`svg`,`apng`]),sa=new Set([`tif`,`tiff`,`psd`,`psb`,`tga`,`dds`,`hdr`,`exr`,`pcx`,`dib`,`jxl`]),ca=new Set([...oa,...sa]),la=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function ua({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=T(),[l,u]=(0,H.useState)(!1),[d,f]=(0,H.useState)(!1),[p,m]=(0,H.useState)(!1),[h,g]=(0,H.useState)(0),[_,v]=(0,H.useState)(0),[y,b]=(0,H.useState)(null),[x,S]=(0,H.useState)(!1),[C,w]=(0,H.useState)(!1),ee=(0,H.useRef)(null),E=(0,H.useRef)(null),D=(0,H.useRef)(null),O=(0,H.useRef)(null),[te,k]=(0,H.useState)(()=>{let e=ut(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),A=r?e?.path??null:null,j=Ee(A),ne=e?da(e.name):``,re=!!e&&!e.isDirectory&&ia.has(ne),M=!!e&&!e.isDirectory&&aa.has(ne),ie=!!e&&!e.isDirectory&&ca.has(ne),N=!!e&&!e.isDirectory&&la.has(ne),ae=!!e&&!e.isDirectory&&ne===`pdf`,ce=oe(re?j:null,512,e?.modified??0),le=ie&&oa.has(ne),ue=oe(ie&&!le?j:null,1024,e?.modified??0),de=ye(le?j:null,e?.modified??0,ne),fe=ye(re||M?j:null,e?.modified??0,ne),pe=Ye(ae?j:null,e?.modified??0),me=P(!re&&!M&&!ie&&!N&&!ae?j:null,e?.isDirectory??!1);if((0,H.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),w(!1)},[A]),(0,H.useEffect)(()=>{if(!j||!N){b(null),S(!1);return}let e=!0;return S(!0),b(null),Se(j).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`could_not_read_this_file`)}),S(!1))}),()=>{e=!1}},[j,N]),!e&&!s)return null;let he=e=>{D.current={x:e.clientX,width:E.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},F=e=>{let t=D.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},ge=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},_e=e=>{O.current={y:e.clientY,height:te},e.currentTarget.setPointerCapture(e.pointerId)},ve=e=>{let t=O.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);k(n),se(`yafm.preview.media.height`,n)},be=e=>{O.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,Q.jsxs)(pa,{$open:r,children:[r&&(0,Q.jsx)(ma,{onPointerDown:he,onPointerMove:F,onPointerUp:ge,onDoubleClick:()=>n(320),title:c(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsx)(ha,{ref:E,style:{width:r?t:0},children:(0,Q.jsxs)(ga,{children:[(0,Q.jsx)(Ct,{size:56}),(0,Q.jsx)(`span`,{children:s})]})})]});let xe=()=>{let e=ee.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,Q.jsxs)(pa,{$open:r,children:[r&&(0,Q.jsx)(ma,{onPointerDown:he,onPointerMove:F,onPointerUp:ge,onDoubleClick:()=>n(320),title:c(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(ha,{ref:E,style:{width:r?t:0},children:[(0,Q.jsx)(_a,{style:{height:te},children:re&&fe&&!l?(0,Q.jsxs)(ya,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,Q.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:xe,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:ce??void 0,preload:`metadata`,ref:ee,src:fe}),(0,Q.jsx)(ba,{$visible:!d,onClick:xe,title:c(`play`),type:`button`,children:(0,Q.jsx)(B,{size:28})}),(0,Q.jsxs)(xa,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,Q.jsxs)(Sa,{children:[(0,Q.jsx)(`span`,{children:fa(_)}),(0,Q.jsx)(`span`,{children:fa(h)})]}),(0,Q.jsx)(Ca,{"aria-label":c(`seek`),max:h||0,min:0,onChange:e=>{let t=ee.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):M&&fe?(0,Q.jsx)(`audio`,{controls:!0,src:fe}):ie&&(de??ue)?(0,Q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:de??ue}):ae&&pe&&!C?(0,Q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:pe}):ae?(0,Q.jsx)(V,{size:64}):N?(0,Q.jsx)(wa,{children:x||!y?(0,Q.jsx)(Ea,{children:c(`loading`)}):y.error?(0,Q.jsx)(Ea,{children:y.error}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Ta,{children:y.text}),y.truncated&&(0,Q.jsx)(Ea,{children:c(`showing_the_first_256_kb`)})]})}):re&&ce?(0,Q.jsx)(`img`,{alt:``,src:ce}):me?(0,Q.jsx)(`img`,{alt:``,src:me}):e.isDirectory?(0,Q.jsx)(Ct,{size:64}):(0,Q.jsx)(V,{size:64})}),(0,Q.jsx)(va,{onDoubleClick:()=>{k(210),se(`yafm.preview.media.height`,210)},onPointerDown:_e,onPointerMove:ve,onPointerUp:be,title:c(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(Da,{children:[(0,Q.jsx)(Oa,{title:e.path,children:e.name}),o&&(0,Q.jsx)(ka,{children:o}),(0,Q.jsx)(Aa,{children:e.fields.map(e=>(0,Q.jsxs)(ja,{children:[(0,Q.jsx)(Ma,{children:e.label}),(0,Q.jsx)(Na,{title:e.value,children:e.time===void 0?e.value:(0,Q.jsx)(ct,{value:e.time})})]},e.label))})]})]})]})}function da(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function fa(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var pa=A.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,ma=A.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ha=A.aside`
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
`,ga=A.div`
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
`,_a=A.div`
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
`,va=A.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ya=A.div`
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
`,ba=A.button`
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
`,xa=A.div`
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
`,Sa=A.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Ca=A.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,wa=A.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Ta=A.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Ea=A.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Da=A.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Oa=A.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,ka=A.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Aa=A.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,ja=A.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Ma=A.span`
    color: var(--text-muted);
`,Na=A.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Pa=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Fa=[...Pa],Ia={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},La={folder:e=>(0,Q.jsx)(Ct,{size:e}),home:e=>(0,Q.jsx)(Mt,{size:e}),desktop:e=>(0,Q.jsx)(Ot,{size:e}),documents:e=>(0,Q.jsx)(xn,{size:e}),downloads:e=>(0,Q.jsx)(At,{size:e}),pictures:e=>(0,Q.jsx)(fn,{size:e}),music:e=>(0,Q.jsx)(Pt,{size:e}),videos:e=>(0,Q.jsx)(kt,{size:e}),drive:e=>(0,Q.jsx)(gt,{size:e}),image:e=>(0,Q.jsx)(jt,{size:e}),video:e=>(0,Q.jsx)(Cn,{size:e}),audio:e=>(0,Q.jsx)(on,{size:e}),text:e=>(0,Q.jsx)(bn,{size:e}),code:e=>(0,Q.jsx)(qt,{size:e}),clock:e=>(0,Q.jsx)(cn,{size:e}),star:e=>(0,Q.jsx)(nn,{size:e}),file:e=>(0,Q.jsx)(V,{size:e}),archive:e=>(0,Q.jsx)(rn,{size:e}),pdf:e=>(0,Q.jsx)(gn,{size:e}),executable:e=>(0,Q.jsx)(Tt,{size:e}),font:e=>(0,Q.jsx)(wt,{size:e}),database:e=>(0,Q.jsx)(Sn,{size:e}),config:e=>(0,Q.jsx)(It,{size:e}),spreadsheet:e=>(0,Q.jsx)(ln,{size:e}),presentation:e=>(0,Q.jsx)(mn,{size:e}),document:e=>(0,Q.jsx)(ht,{size:e}),app:e=>(0,Q.jsx)(hn,{size:e}),gear:e=>(0,Q.jsx)(_t,{size:e}),pin:e=>(0,Q.jsx)(Zt,{size:e}),trash:e=>(0,Q.jsx)(Tn,{size:e}),overview:e=>(0,Q.jsx)(Nt,{size:e}),book:e=>(0,Q.jsx)(pn,{size:e}),briefcase:e=>(0,Q.jsx)(Bt,{size:e}),cloud:e=>(0,Q.jsx)(Jt,{size:e}),gamepad:e=>(0,Q.jsx)(Et,{size:e}),camera:e=>(0,Q.jsx)($t,{size:e}),terminal:e=>(0,Q.jsx)(Lt,{size:e}),server:e=>(0,Q.jsx)(vn,{size:e}),package:e=>(0,Q.jsx)(Ft,{size:e}),globe:e=>(0,Q.jsx)(St,{size:e}),heart:e=>(0,Q.jsx)(En,{size:e}),share:e=>(0,Q.jsx)(vn,{size:e}),favorites:e=>(0,Q.jsx)(En,{size:e})};function Ra(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function za(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Pa)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Fa.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Ra(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${Ia[n]??n}${Ba(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Ba(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Va({panel:e,size:t=16}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=ue(n);if(r)return(0,Q.jsx)(`img`,{alt:``,src:r,style:{width:t,height:t,objectFit:`contain`}});let i=e.icon?La[e.icon]:void 0;if(i)return(0,Q.jsx)(Q.Fragment,{children:i(t)});switch(e.kind){case`quick`:return(0,Q.jsx)(Ct,{size:t});case`recent`:return(0,Q.jsx)(cn,{size:t});case`frequent`:return(0,Q.jsx)(nn,{size:t});case`drives`:return(0,Q.jsx)(gt,{size:t});case`home`:return(0,Q.jsx)(Mt,{size:t});case`share`:return(0,Q.jsx)(vn,{size:t});case`favorites`:return(0,Q.jsx)(En,{size:t});default:return(0,Q.jsx)(Ct,{size:t})}}function Ha({place:e,size:t=18}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=ue(n);return r?(0,Q.jsx)(`img`,{alt:``,height:t,src:r,style:{objectFit:`contain`},width:t}):e.icon&&La[e.icon]?(0,Q.jsx)(Q.Fragment,{children:La[e.icon](t)}):(0,Q.jsx)(Ct,{size:t})}var Ua=`yafm.colors.saved`,Wa=`yafm.colors.history`,Ga=24,Ka=16,qa=0,Ja=new Set;function Ya(e){let t=(e??``).trim().replace(/^#/,``).toLowerCase();return!/^[0-9a-f]{3}$/.test(t)&&!/^[0-9a-f]{6}$/.test(t)?null:`#${t.length===3?[...t].map(e=>e+e).join(``):t}`}function Xa(e,t){let n=Fe(e),r=new Set,i=[];for(let e of n??[]){let n=Ya(e);if(n&&!r.has(n)&&(r.add(n),i.push(n),i.length>=t))break}return i}function Za(){return Xa(Ua,Ga)}function Qa(){return Xa(Wa,Ka)}function $a(){qa+=1;for(let e of Ja)e()}function eo(e){let t=Ya(e);if(!t)return;let n=[t,...Qa().filter(e=>e!==t)].slice(0,Ka);we(Wa,n),$a()}function to(e){let t=Ya(e);if(!t)return;let n=[t,...Za().filter(e=>e!==t)].slice(0,Ga);we(Ua,n),$a()}function no(e){let t=Ya(e);t&&(we(Ua,Za().filter(e=>e!==t)),$a())}function ro(e){return Ja.add(e),()=>{Ja.delete(e)}}function io(){let e=(0,H.useSyncExternalStore)(ro,()=>qa);return(0,H.useMemo)(()=>({saved:Za(),history:Qa()}),[e])}function ao(e){let t=Ya(e);return t?{r:Number.parseInt(t.slice(1,3),16),g:Number.parseInt(t.slice(3,5),16),b:Number.parseInt(t.slice(5,7),16)}:null}function oo({r:e,g:t,b:n}){let r=e=>Math.round(Math.max(0,Math.min(255,e))).toString(16).padStart(2,`0`);return`#${r(e)}${r(t)}${r(n)}`}function so({r:e,g:t,b:n}){let r=e/255,i=t/255,a=n/255,o=Math.max(r,i,a),s=o-Math.min(r,i,a),c=0;return s!==0&&(c=o===r?60*((i-a)/s%6):o===i?60*((a-r)/s+2):60*((r-i)/s+4)),c<0&&(c+=360),{h:c,s:o===0?0:s/o,v:o}}function co({h:e,s:t,v:n}){let r=n*t,i=e/60,a=r*(1-Math.abs(i%2-1)),o=n-r,s=0,c=0,l=0;return i<1?[s,c]=[r,a]:i<2?[s,c]=[a,r]:i<3?[c,l]=[r,a]:i<4?[c,l]=[a,r]:i<5?[s,l]=[a,r]:[s,l]=[r,a],{r:(s+o)*255,g:(c+o)*255,b:(l+o)*255}}function lo({value:e,onChange:t,disabled:n=!1,title:r,ariaLabel:i,variant:a=`dot`}){let o=T(),s=(0,H.useRef)(null),c=(0,H.useRef)(null),l=(0,H.useRef)(null),u=(0,H.useRef)(!1),d=(0,H.useRef)(!1),[f,p]=(0,H.useState)(!1),[m,h]=(0,H.useState)(null),g=ao(e)??{r:0,g:0,b:0},[_,v]=(0,H.useState)(()=>so(g)),[y,b]=(0,H.useState)(e),{saved:x,history:S}=io(),C=oo(co(_)),w=co(_),[ee,E]=(0,H.useState)(()=>({r:String(Math.round(w.r)),g:String(Math.round(w.g)),b:String(Math.round(w.b))})),D=(0,H.useRef)(C);D.current=C;let O=(0,H.useCallback)(()=>{p(!1),d.current&&=(eo(D.current),!1)},[]),te=e=>{v(e);let n=oo(co(e));b(n),d.current=!0,t(n)},k=(e,t)=>{E(n=>({...n,[e]:t}));let n=Number(t);t.trim().length===0||!Number.isInteger(n)||n<0||n>255||te(so({...w,[e]:n}))},A=e=>E(t=>({...t,[e]:String(Math.round(w[e]))}));(0,H.useEffect)(()=>{if(f)return;let t=ao(e);t&&(v(so(t)),b(e))},[e,f]),(0,H.useEffect)(()=>{E({r:String(Math.round(w.r)),g:String(Math.round(w.g)),b:String(Math.round(w.b))})},[C]),(0,H.useLayoutEffect)(()=>{if(!f||!s.current)return;let e=s.current.getBoundingClientRect(),t=Math.max(8,Math.min(e.left,window.innerWidth-236-8)),n=e.bottom+6+322>window.innerHeight?Math.max(8,e.top-328):e.bottom+6;h({top:n,left:t})},[f]),(0,H.useEffect)(()=>{if(!f)return;let e=e=>{let t=e.target;c.current?.contains(t)||s.current?.contains(t)||O()},t=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),O())};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t,!0),window.addEventListener(`blur`,O),window.addEventListener(`resize`,O),document.addEventListener(`scroll`,O,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t,!0),window.removeEventListener(`blur`,O),window.removeEventListener(`resize`,O),document.removeEventListener(`scroll`,O,!0)}},[f,O]);let j=()=>{if(n)return;if(f){O();return}let t=ao(e);t&&(v(so(t)),b(e)),p(!0)},ne=e=>{let t=l.current?.getBoundingClientRect();if(!t)return;let n=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width)),r=1-Math.max(0,Math.min(1,(e.clientY-t.top)/t.height));te({..._,s:n,v:r})},re=e=>{let n=ao(e);n&&(v(so(n)),b(e),D.current=e,d.current=!1,t(e),eo(e),p(!1))},M=Ya(e)??C;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(uo,{$variant:a,"aria-label":i??r,disabled:n,onClick:j,ref:s,title:r,type:`button`,children:(0,Q.jsx)(fo,{$color:M})}),f&&m&&(0,hi.createPortal)((0,Q.jsxs)(po,{ref:c,style:{top:m.top,left:m.left},children:[(0,Q.jsx)(mo,{$hue:_.h,onPointerDown:e=>{e.preventDefault(),e.currentTarget.setPointerCapture(e.pointerId),u.current=!0,ne(e)},onPointerMove:e=>{u.current&&ne(e)},onPointerUp:e=>{u.current=!1,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)},ref:l,children:(0,Q.jsx)(ho,{style:{left:`${_.s*100}%`,top:`${(1-_.v)*100}%`,background:M}})}),(0,Q.jsx)(go,{"aria-label":o(`color`),max:359,min:0,onChange:e=>te({..._,h:Number(e.target.value)}),type:`range`,value:Math.round(_.h)}),(0,Q.jsxs)(_o,{children:[(0,Q.jsx)(vo,{"aria-label":o(`hex_color`),maxLength:7,onBlur:()=>b(C),onChange:e=>{let n=e.target.value;b(n);let r=Ya(n),i=r?ao(r):null;i&&(v(so(i)),d.current=!0,t(r))},spellCheck:!1,value:y}),(0,Q.jsx)(Co,{onClick:()=>to(C),title:o(`save_color`),type:`button`,children:(0,Q.jsx)(sn,{size:11})})]}),(0,Q.jsx)(yo,{children:[`r`,`g`,`b`].map(e=>(0,Q.jsxs)(bo,{children:[(0,Q.jsx)(xo,{children:e.toUpperCase()}),(0,Q.jsx)(So,{"aria-label":e.toUpperCase(),inputMode:`numeric`,maxLength:3,onBlur:()=>A(e),onChange:t=>k(e,t.target.value),value:ee[e]})]},e))}),x.length>0&&(0,Q.jsxs)(wo,{children:[(0,Q.jsx)(To,{children:o(`saved_colors`)}),(0,Q.jsx)(Eo,{children:x.map(e=>(0,Q.jsxs)(Do,{children:[(0,Q.jsx)(Oo,{$color:e,onClick:()=>re(e),title:e,type:`button`}),(0,Q.jsx)(ko,{onClick:t=>{t.stopPropagation(),no(e)},title:o(`remove_saved_color`),type:`button`,children:(0,Q.jsx)(wn,{size:8})})]},e))})]}),S.length>0&&(0,Q.jsxs)(wo,{children:[(0,Q.jsx)(To,{children:o(`color_history`)}),(0,Q.jsx)(Eo,{children:S.map(e=>(0,Q.jsx)(Oo,{$color:e,onClick:()=>re(e),title:e,type:`button`},e))})]})]}),document.body)]})}var uo=A.button`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: ${({$variant:e})=>e===`well`?`26px`:`18px`};
    height: ${({$variant:e})=>e===`well`?`26px`:`18px`};
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: ${({$variant:e})=>e===`well`?`6px`:`50%`};
    background: transparent;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,fo=A.span`
    width: 70%;
    height: 70%;
    border-radius: inherit;
    background: ${({$color:e})=>e};
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.18);
`,po=A.div`
    position: fixed;
    z-index: 3600;
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 236px;
    padding: 8px;
    ${et}
    ${R}
`,mo=A.div`
    position: relative;
    height: 132px;
    border-radius: var(--radius-sm);
    cursor: crosshair;
    touch-action: none;
    background:
        linear-gradient(to top, #000, transparent),
        linear-gradient(to right, #fff, hsl(${({$hue:e})=>e} 100% 50%));
`,ho=A.span`
    position: absolute;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
    pointer-events: none;
`,go=A.input`
    width: 100%;
    height: 10px;
    margin: 1px 0;
    appearance: none;
    border-radius: 999px;
    background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00);
    cursor: pointer;

    &::-webkit-slider-thumb {
        width: 14px;
        height: 14px;
        appearance: none;
        border: 2px solid #fff;
        border-radius: 50%;
        background: transparent;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
    }
`,_o=A.div`
    display: flex;
    gap: 5px;
`,vo=A.input`
    flex: 1;
    min-width: 0;
    padding: 4px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;

    &:focus {
        border-color: var(--border-color-focus);
        outline: none;
    }
`,yo=A.div`
    display: flex;
    gap: 5px;
`,bo=A.label`
    display: flex;
    flex: 1;
    align-items: center;
    gap: 4px;
    min-width: 0;
    padding: 3px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);

    &:focus-within {
        border-color: var(--border-color-focus);
    }
`,xo=A.span`
    color: var(--text-muted);
    font-size: 9px;
`,So=A.input`
    flex: 1;
    width: 100%;
    min-width: 0;
    padding: 0;
    border: 0;
    background: none;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 10.5px;
    outline: none;
`,Co=A.button`    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 26px;
    height: 26px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,wo=A.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,To=A.span`
    color: var(--text-muted);
    font-size: 9.5px;
`,Eo=A.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`,Do=A.div`
    position: relative;
`,Oo=A.button`
    width: 18px;
    height: 18px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    background: ${({$color:e})=>e};
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.18);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-focus);
    }
`,ko=A.button`
    position: absolute;
    top: -4px;
    right: -4px;
    display: none;
    place-items: center;
    width: 12px;
    height: 12px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    background: var(--bg-secondary);
    color: var(--text-muted);
    cursor: pointer;

    ${Do}:hover & {
        display: grid;
    }

    &:hover {
        color: var(--text-primary);
    }
`,Ao=`#64748b`;function jo(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Mo({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=T(),[c,l]=(0,H.useState)(``),[u,d]=(0,H.useState)(`#2dd4bf`),f=(0,H.useRef)(null);(0,H.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,o),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,o)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,hi.createPortal)((0,Q.jsxs)(No,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,Q.jsxs)(Po,{children:[(0,Q.jsx)(`span`,{children:s(`tags`)}),(0,Q.jsx)(Fo,{onClick:o,title:s(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:11})})]}),(0,Q.jsxs)(Io,{children:[p.length===0&&(0,Q.jsx)(zo,{children:s(`no_tags_yet`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,Q.jsxs)(Lo,{children:[(0,Q.jsx)(lo,{ariaLabel:s(`color_of_tag`,{tag:e}),title:s(`change_this_tag_s_color`),value:t,onChange:t=>g(e,t)}),(0,Q.jsxs)(Ro,{$color:t,$ink:jo(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,Q.jsx)(Ht,{size:11}),(0,Q.jsx)(`span`,{children:e})]})]},e)})]}),(0,Q.jsxs)(Bo,{children:[(0,Q.jsx)(lo,{ariaLabel:s(`color_of_the_new_tag`),title:s(`color_of_the_new_tag`),value:u,onChange:d}),(0,Q.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`new_tag`),spellCheck:!1,value:c}),(0,Q.jsx)(Vo,{onClick:_,type:`button`,children:s(`add`)})]})]}),document.body)}var No=A.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${R}
`,Po=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Fo=A.button`
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
`,Io=A.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Lo=A.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Ro=A.button`
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
`,zo=A.span`
    font-size: 11px;
    color: var(--text-muted);
`,Bo=A.div`
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
`,Vo=A.button`
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
`;function Ho({path:e,name:t,isDirectory:n,size:r=18}){let i=P(e,n);return i?(0,Q.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,Q.jsx)(Ct,{size:r}):(0,Q.jsx)(Xr,{name:Yr(t),size:r})}var Uo=`application/x-yafm-paths`,Wo=[Uo,`text/uri-list`];function Go(e){return e?.types.some(e=>Wo.includes(e.toLowerCase()))??!1}function Ko(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Uo);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Jo).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var qo=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Jo(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return qo?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Yo(e){return`file:///`+e.replace(/\\/g,`/`).split(`/`).map((e,t)=>t===0&&/^[a-zA-Z]:$/.test(e)?e:encodeURIComponent(e)).join(`/`)}function Xo(e,t,n=!0){e.dataTransfer.setData(Uo,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.setData(`text/uri-list`,t.map(Yo).join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Zo({items:t,clipboardItems:n,clipboardMove:r,visible:i,position:a,currentDirectory:o,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=T(),[h,g]=(0,H.useState)(()=>new Set),[_,v]=(0,H.useState)(!1),y=(0,H.useRef)(null),b=(0,H.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),x=(0,H.useMemo)(()=>n.filter(e=>h.has(e.path)),[n,h]),S=(0,H.useRef)(null);if((0,H.useEffect)(()=>{if(!i)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Go(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Ko(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[i,c]),!i)return null;let C=new Set([...t,...n].map(e=>e.path)),w=C.size>0&&[...C].every(e=>h.has(e)),ee=C.size,E=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{g(w?new Set:C)},O=e=>{y.current={x:e.clientX,y:e.clientY,left:a.x,top:a.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},te=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},k=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},A=()=>{let e=b.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},j=()=>{let e=b.map(e=>e.path);e.length!==0&&f(e)},ne=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,r);let t=[...e].filter(([,e])=>e).map(([e])=>e),n=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,o,!0),n.length>0&&p(n,o,!1),g(new Set)},re=(t,n)=>{let r=h.has(t.path);return(0,Q.jsxs)(ls,{$checked:r,draggable:!0,onClick:()=>E(t.path),onDragStart:e=>{Xo(e,r&&h.size>0?[...new Set([...b,...x].map(e=>e.path))]:[t.path],n)},title:t.path,children:[(0,Q.jsx)(us,{$checked:r,onClick:e=>{e.stopPropagation(),E(t.path)},type:`button`,children:r&&(0,Q.jsx)(Ht,{size:8})}),(0,Q.jsx)(Ho,{isDirectory:t.isDirectory,name:t.name,path:t.path,size:16}),(0,Q.jsxs)(ds,{children:[(0,Q.jsx)(fs,{children:t.name}),(0,Q.jsx)(ps,{children:e(t.path)})]})]},`${n?`tray`:`clipboard`}:${t.path}`)},M=e=>{Go(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,Q.jsxs)(Qo,{$dragging:_,"data-tray":`true`,ref:S,style:{left:a.x,top:a.y},onDragEnter:M,onDragOver:M,onDrop:e=>{let{paths:t}=Ko(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,Q.jsxs)($o,{onPointerDown:O,onPointerMove:te,onPointerUp:k,children:[(0,Q.jsxs)(es,{children:[(0,Q.jsx)(Ft,{size:12}),m(`tray`),(0,Q.jsx)(ts,{children:ee})]}),(0,Q.jsxs)(ns,{onPointerDown:e=>e.stopPropagation(),children:[(0,Q.jsx)(rs,{onClick:D,title:m(w?`select_none`:`select_all`),type:`button`,children:m(w?`none`:`all`)}),(0,Q.jsx)(rs,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,Q.jsx)(is,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]})]}),(0,Q.jsxs)(as,{children:[(0,Q.jsxs)(ss,{children:[m(`in_this_app`),(0,Q.jsx)(ts,{children:t.length})]}),t.length===0&&(0,Q.jsx)(os,{children:m(`drag_files_or_folders_here`)}),t.map(e=>re(e,!0)),n.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(ss,{$clipboard:!0,children:[m(`clipboard`),(0,Q.jsx)(ts,{children:n.length}),r&&(0,Q.jsx)(cs,{children:m(`cut`)})]}),n.map(e=>re(e,r))]})]}),(0,Q.jsxs)(ms,{children:[(0,Q.jsx)(hs,{$plain:!0,disabled:b.length===0,onClick:j,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,Q.jsx)(hs,{disabled:h.size===0||!o,onClick:ne,type:`button`,children:m(`move_here`)}),(0,Q.jsx)(hs,{$danger:!0,disabled:b.length===0,onClick:A,type:`button`,children:m(`remove`)})]})]})}var Qo=A.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${et}
    ${R}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,$o=A.div`
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
`,es=A.span`
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
`,ts=A.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,ns=A.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,rs=A.button`
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
`,is=A.button`
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
`,as=A.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,os=A.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,ss=A.div`
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
`,cs=A.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,ls=A.div`
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
`,us=A.button`
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
`,ds=A.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,fs=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ps=A.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ms=A.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,hs=A.button`
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
`,gs={shares:[],webRunning:!1,webPort:0,urls:[],preferredUrl:null,deviceId:``,deviceName:``,fingerprint:``};async function _s(){return E.available?await E.request(`share.list`):gs}async function vs(e,t){return E.available?await E.request(`share.add`,{path:e,mode:t}):gs}async function ys(e){return E.available?await E.request(`share.remove`,{id:e}):gs}async function bs(e,t){return E.available?await E.request(`share.mode`,{id:e,mode:t}):gs}async function xs(){return E.available?(await E.request(`share.peers`)).peers??[]:[]}async function Ss(){return E.available?(await E.request(`share.peers.refresh`)).peers??[]:[]}async function Cs(e,t){E.available&&await E.request(`share.pair.start`,{host:e,port:t})}async function ws(e,t){E.available&&await E.request(`share.pair.respond`,{requestId:e,accept:t})}async function Ts(e,t){E.available&&await E.request(`share.port`,{mode:t,port:e})}var Es=`yafm://share/`;function Ds(e){return e.toLowerCase().startsWith(Es)}function Os(e){if(!Ds(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function ks(e,t,n=``){let r=`${Es}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function As(e){let t=Os(e);if(!t||!E.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await E.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:ks(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:ks(t.deviceId,t.shareId,n.parent),total:n.entries?.length??0,signature:0,entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function js(e){let t=Os(e);if(!t||!E.available)throw Error(`This shared file is only available in the desktop app.`);let n=await E.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Ms(e){await Ae(await js(e))}async function Ns(){return E.available?await E.request(`share.certificate`):null}async function Ps(e,t){return await E.request(`share.certificate.import`,{path:e,password:t})}async function Fs(){return await E.request(`share.certificate.reset`)}async function Is(){return E.available?(await E.request(`share.devices.clear`)).devices??[]:[]}async function Ls(){return E.available?(await E.request(`share.devices.list`)).devices??[]:[]}async function Rs(e,t,n){return E.available?(await E.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function zs(e){return E.available?(await E.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function Bs(){return E.available?(await E.request(`share.access.status`)).hasPassword:!1}async function Vs(e){return E.available?(await E.request(`share.access.password`,{password:e})).hasPassword:!1}var Hs=60,Us=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],Ws=new Set,Gs=`yafm.columnWidths`,Ks=`yafm.reset-column-widths`,qs=64,Js=720,Ys=160,Xs=190,Zs=120;function Qs({listing:e,loading:t,error:r,find:i=ve,view:a,showImages:o,imageStripHeight:s=Xs,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:f,onOpenFile:p,onSelectEntry:m,onOpenExternally:g,showCheckboxes:_=!0,openOnSingleClick:y=!1,shortcuts:x=Dr(),enableShortcuts:S=!0,refreshToken:C=0,onRefresh:w,onRename:ee,onClipboardChanged:E,cutPaths:D=Ws,onTransfer:O,onAddToTray:te,platform:k,onAddFavorite:A,onRemoveFavorite:j,favoritePaths:ne,onExtractArchive:re,onOpenAsArchive:M,onAddToStartMenu:ie,onPaste:N,confirmDelete:oe=!1,previewVideoAudio:ce=!1,previewVideoAutoplay:le=!1,showDetails:ue=!0,onPreviewInfo:de,onActivate:P,groupOf:fe,onGridScroll:pe,gridFooter:me,allowBackgroundMenu:he=!0,readOnly:F=!1,onSelectionChange:ge,onSelectionCountChange:_e,selectionMenuRequest:ye,selectionMenuId:be,singleSelect:xe=!1,pendingRename:Se=null,pendingRenameToken:Ce=0,selectMatchesToken:Te=0,onLoadMore:Ee,onEnsureComplete:De,selectAllToken:Oe=0}){let I=T(),ke=Wr(),Ae=(0,H.useRef)(null),Me=(0,H.useRef)(null),Ne=(0,H.useRef)(null),Pe=(0,H.useRef)(null),Ie=(0,H.useRef)(0),Le=(0,H.useRef)(null),[Re,ze]=(0,H.useState)({top:0,height:640}),Be=(0,H.useRef)(null),Ve=(0,H.useRef)(null),He=(0,H.useRef)(!1),Ue=(0,H.useRef)(!1),We=(0,H.useRef)(null),Ke=(0,H.useRef)(null),[qe,Je]=(0,H.useState)(null),[Ye,Xe]=(0,H.useState)(s),[L,Ze]=(0,H.useState)(()=>new Set),[Qe,$e]=(0,H.useState)(()=>Fe(Gs)??{}),et=(0,H.useRef)(L),tt=(0,H.useRef)([]);et.current=L,(0,H.useEffect)(()=>ge?.([...L]),[L,ge]),(0,H.useEffect)(()=>_e?.(L.size),[L,_e]),(0,H.useEffect)(()=>{let e=ye;if(!e||e.token===R.current)return;R.current=e.token;let t=[...et.current];t.length!==0&&(it({x:e.x,y:e.y,paths:t,background:!1}),Jn().then(vt,()=>vt(!1)))},[ye]);let[nt,it]=(0,H.useState)(null),R=(0,H.useRef)(0),[at,ot]=(0,H.useState)(null),[st,ct]=(0,H.useState)(null),[lt,dt]=(0,H.useState)(null),ft=(0,H.useRef)(lt);ft.current=lt;let pt=(0,H.useRef)(0),mt=(0,H.useRef)(P);mt.current=P;let[z,ht]=(0,H.useState)(()=>{let e=ut(`yafm.preview.width`,320);return e>=220?e:320}),gt=(0,H.useCallback)(e=>{ht(e),se(`yafm.preview.width`,e)},[]),[_t,vt]=(0,H.useState)(!1),yt=(0,H.useCallback)((e,t)=>{let n=[...et.current];n.length!==0&&(it({x:e,y:t,paths:n,background:!1}),Jn().then(vt,()=>vt(!1)))},[]);(0,H.useEffect)(()=>{if(be)return rt(be,L.size>0?yt:null),()=>rt(be,null)},[be,L,yt]),(0,H.useEffect)(()=>{Ze(new Set),dt(null),it(null),Ve.current=null},[e?.path]),(0,H.useEffect)(()=>{Xe(s)},[s]),(0,H.useEffect)(()=>{Ze(new Set),dt(null),Ve.current=null},[C]);let bt=e=>{Be.current={y:e.clientY,height:Ye},e.currentTarget.setPointerCapture(e.pointerId)},xt=e=>{let t=Be.current;if(!t)return;let n=Math.max(Zs,Math.round(window.innerHeight*.7));Xe(Math.min(n,Math.max(Zs,t.height+t.y-e.clientY)))},St=e=>{Be.current&&(Be.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(Ye))},Ct=()=>{Xe(Xs),c?.(Xs)},wt=i.query.length>0,Tt=(0,H.useMemo)(()=>Us.filter(e=>a.columns?.includes(e.id)),[a.columns]),Et=a.columns?.includes(`linkTarget`)??!1,Dt=(0,H.useCallback)(e=>Math.min(Js,Math.max(qs,Qe[e.id]??e.width)),[Qe]),Ot=(0,H.useMemo)(()=>`minmax(160px, 1fr) ${Tt.map(e=>`${Dt(e)}px`).join(` `)}`.trim(),[Tt,Dt]),kt=(0,H.useRef)(null),At=(0,H.useRef)(null),jt=()=>Math.floor(At.current?.getBoundingClientRect().width??Ys),Mt=e=>{let t=Tt[0];t&&(e.preventDefault(),e.stopPropagation(),kt.current={left:{id:t.id,start:Dt(t)},startX:e.clientX,nameStart:jt()})},Nt=(e,t)=>{let n=Tt[t],r=Tt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),kt.current={left:{id:n.id,start:Dt(n)},right:{id:r.id,start:Dt(r)},startX:e.clientX,nameStart:0})},Pt=e=>$e(t=>{let n={...t};return delete n[e],we(Gs,n),n});(0,H.useEffect)(()=>{let e=e=>{let t=kt.current;if(!t)return;let n=e.clientX-t.startX;$e(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Ys),i=Math.min(Math.min(Js,t.left.start+r),Math.max(qs,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Js,Math.max(qs,t.left.start+n)),a=Math.min(Math.min(Js,r-qs),Math.max(Math.max(qs,r-Js),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{kt.current&&(kt.current=null,$e(e=>(we(Gs,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,H.useEffect)(()=>{let e=()=>$e(()=>(we(Gs,{}),{}));return window.addEventListener(Ks,e),()=>window.removeEventListener(Ks,e)},[]);let Ft=(0,H.useMemo)(()=>({query:i?.query??``,matchCase:i?.matchCase??!1,regex:i?.regex??!1}),[i?.query,i?.matchCase,i?.regex]),It=i?.mode??`dim`,Lt=(0,H.useDeferredValue)(Ft),Rt=(0,H.useRef)(null),B=(0,H.useMemo)(()=>{if(!e)return[];let t=e.git?new Map(Object.entries(e.git.entries).map(([e,t])=>[e.toLowerCase(),t])):null,n=[e.path,e.signature,e.ordered??!1,e.tags,e.git,a.sort===`size`||a.sort===`items`?e.folderSizes:null,a.sort===`size`||a.sort===`items`?e.counts:null,wt,Lt,It,ke,a.sort,a.sortDescending,I,D],r=n=>{let r=n.isDirectory?Gr(ke,n.fullPath):void 0,i=r?.name||n.name;return{entry:n,place:r,label:i,ranges:wt?ae(i,Lt):null,tags:e.tags[n.name]??[],git:t?.get(n.name.toLowerCase())??null,cut:D.has(n.fullPath)}},i=Rt.current,o=i!==null&&n.length===i.shape.length&&n.every((e,t)=>e===i.shape[t]),s=i!==null&&o&&i.entries.length<=e.entries.length&&(i.entries.length===0||i.entries[0]===e.entries[0]&&i.entries[i.entries.length-1]===e.entries[i.entries.length-1]),c=e.ordered&&(a.sort===`modified`||a.sort===`created`),l=rc(a,e,I),u;if(s&&i!==null){let t=[];for(let n=i.entries.length;n<e.entries.length;n++){let i=r(e.entries[n]);wt&&It!==`dim`&&i.ranges===null||t.push(i)}u=c?t.length===0?i.rows:[...i.rows,...t]:t.length>4e3?ic([...i.rows,...t],a,e,I):ac(i.rows,t,l)}else{let t=e.entries.map(r).filter(e=>!wt||It===`dim`||e.ranges!==null);u=c?t:ic(t,a,e,I)}return Rt.current={shape:n,entries:e.entries,rows:u},u},[e?.entries,e?.tags,e?.path,e?.signature,e?.ordered,e?.git,a.sort===`size`||a.sort===`items`?e?.folderSizes:null,a.sort===`size`||a.sort===`items`?e?.counts:null,wt,Lt,It,ke,a.sort,a.sortDescending,I,D]);tt.current=B,(0,H.useEffect)(()=>{Oe!==0&&Ze(new Set(tt.current.map(e=>e.entry.fullPath)))},[Oe]),(0,H.useEffect)(()=>{Te!==0&&Ze(new Set(tt.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[Te]);let zt=Math.max(40,a.iconSize+20),Bt=Math.max(0,Math.floor(Re.top/zt)-4),Vt=Math.min(B.length,Bt+Math.ceil(Re.height/zt)+10),Ut=(0,H.useMemo)(()=>B.slice(Bt,Vt),[B,Bt,Vt]);(0,H.useEffect)(()=>{Ee&&B.length>0&&Vt>=B.length&&Ee()},[Ee,B.length,Vt]),(0,H.useEffect)(()=>{let e=Pe.current;if(!e||a.mode!==`list`)return;e.scrollTop=0,ze({top:0,height:e.clientHeight});let t=()=>ze(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[a.mode]),(0,H.useEffect)(()=>{ze(e=>({...e,top:0})),Pe.current&&(Pe.current.scrollTop=0)},[e?.path]),(0,H.useEffect)(()=>{if(i.currentPath){if(a.mode===`list`){let e=B.findIndex(e=>e.entry.fullPath===i.currentPath),t=Pe.current;if(e<0||!t)return;let n=e*zt;(n<t.scrollTop||n+zt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else Ae.current?.scrollIntoView({block:`nearest`})}},[i.currentPath,a.mode,B,zt]);let[Wt,Gt]=(0,H.useState)({section:0,line:0}),[Kt,qt]=(0,H.useState)({columns:0,header:44,gap:10,margin:22}),Jt=(0,H.useRef)(null),Yt=a.mode===`grid`,Xt=(0,H.useMemo)(()=>{if(!Yt)return[];if(!fe)return cc(B,sc);let e=[];for(let t of B){let n=fe(t.entry),r=e[e.length-1];!r||r.label!==n.label?e.push({id:`${n.id}#${e.length}`,label:n.label,rows:[t]}):r.rows.push(t)}return e},[B,Yt,fe]);(0,H.useLayoutEffect)(()=>{let e=We.current;if(!e)return;let t=e.querySelector(`h3`),n=t?.nextElementSibling;if(!t||!n)return;let r=getComputedStyle(n),i=r.gridTemplateColumns.split(` `).filter(Boolean).length,a=Number.parseFloat(r.rowGap)||0,o=t.getBoundingClientRect().height+(Number.parseFloat(getComputedStyle(t).marginBottom)||0),s=e.querySelectorAll(`section`),c=s.length>1?Number.parseFloat(getComputedStyle(s[1]).marginTop)||0:Kt.margin;qt(e=>e.columns===i&&e.gap===a&&Math.abs(e.header-o)<.5&&Math.abs(e.margin-c)<.5?e:{columns:i,header:o,gap:a,margin:c})});let[,Zt]=(0,H.useState)(0);(0,H.useEffect)(()=>{let e=We.current;if(!e||a.mode!==`grid`)return;let t=new ResizeObserver(()=>Zt(e=>e+1));return t.observe(e),()=>t.disconnect()},[a.mode]);let V=(0,H.useMemo)(()=>{let e=a.gridSize,t=Math.max(1,Kt.columns),{header:n,gap:r,margin:i}=Kt,o=0;return{items:Xt.map((a,s)=>{let c=Math.ceil(a.rows.length/t),l=c===0?0:c*e+(c-1)*r,u={section:a,start:o,height:n+l};return o=u.start+u.height+(s===Xt.length-1?0:i),u}),tile:e,columns:t,header:n,gap:r,margin:i,total:o}},[Xt,Kt,a.gridSize]),Qt=(0,H.useMemo)(()=>{let{items:e,columns:t,tile:n,gap:r,header:i,margin:a,total:o}=V;if(e.length===0)return{parts:[],top:0,height:0,total:0};let s=Math.min(Math.max(Wt.section,0),e.length-1),c=e[s],l=Math.max(1,Math.ceil(c.section.rows.length/t)),u=Math.min(Math.max(Wt.line,0),l-1),d=c.start+(u>0?i+u*(n+r):0),f=[],p=320,m=0;for(let o=s;o<e.length&&p>0;o++){let c=e[o],l=o===s?u*t:0,d=Math.min(c.section.rows.length-l,p);if(d<=0)continue;let h=!(o===s&&u>0),g=Math.ceil(d/t);f.push({id:c.section.id,label:c.section.label,rows:c.section.rows.slice(l,l+d),total:c.section.rows.length,headerShown:h}),m+=(h?i:0)+g*n+(g-1)*r,f.length>1&&(m+=a),p-=d}return{parts:f,top:d,height:m,total:o}},[V,Wt]),$t=(0,H.useRef)(null);(0,H.useLayoutEffect)(()=>{let e=We.current,t=Jt.current;if(!e||!t)return;let n=t.getBoundingClientRect().top-e.getBoundingClientRect().top+e.scrollTop,r=Math.max(0,e.scrollTop-n),i=vc(V,Math.max(0,r-e.clientHeight/2));Gt(e=>e.section===i.section&&e.line===i.line?e:i)},[V.columns,V.tile,V.header,V.gap,V.margin]),(0,H.useLayoutEffect)(()=>{let e=$t.current,t=We.current,n=Jt.current;if($t.current=null,e===null||!t||!n)return;let r=n.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop;t.scrollTop=Math.max(0,r+e.top-t.clientHeight/3)},[Wt]);let en=(0,H.useRef)(0),tn=(0,H.useCallback)(e=>{en.current===0&&(en.current=requestAnimationFrame(()=>{en.current=0;let t=Jt.current;if(!t)return;let n=t.getBoundingClientRect().top-e.getBoundingClientRect().top+e.scrollTop,r=Math.max(0,e.scrollTop-n),i=e.clientHeight,{top:a,height:o}=Qt;if(r<a-2||r+i*1.5>a+o){let e=vc(V,Math.max(0,r-i));Gt(t=>t.section===e.section&&t.line===e.line?t:e)}e.scrollTop+i>=e.scrollHeight-600&&Ee?.()}))},[V,Qt,Ee]);(0,H.useEffect)(()=>()=>{Ie.current!==0&&cancelAnimationFrame(Ie.current),en.current!==0&&cancelAnimationFrame(en.current)},[]);let nn=(0,H.useCallback)(e=>{for(let t=0;t<V.items.length;t++){let r=V.items[t].section.rows.findIndex(t=>n(t.entry.fullPath,e));if(r<0)continue;let i=Math.floor(r/V.columns),a=V.items[t].start+(i>0?V.header+i*(V.tile+V.gap):0);return $t.current={top:a},Gt({section:t,line:i}),!0}return!1},[V]);(0,H.useEffect)(()=>{let e=Me.current;if(!e||e.length===0)return;let t=e.filter(e=>B.some(t=>n(t.entry.fullPath,e)));if(t.length===0)return;Me.current=null;let r=t[0],i=B.findIndex(e=>n(e.entry.fullPath,r));Ze(new Set(t)),Ve.current=r,a.mode===`list`&&Pe.current&&i>=0?Pe.current.scrollTop=Math.max(0,i*zt-Pe.current.clientHeight/2):nn(r)},[B,zt,a.mode,nn]),(0,H.useEffect)(()=>{$t.current=null,Gt({section:0,line:0}),We.current&&(We.current.scrollTop=0)},[e?.path]),(0,H.useEffect)(()=>{Wt.section<Xt.length||($t.current=null,Gt({section:0,line:0}),We.current&&(We.current.scrollTop=0))},[Xt.length,Wt.section]),(0,H.useEffect)(()=>{i.currentPath&&a.mode===`grid`&&nn(i.currentPath)},[i.currentPath,nn,a.mode]);let rn=(0,H.useMemo)(()=>o?B.filter(e=>!e.entry.isDirectory&&Vr(e.entry.name)):[],[B,o]),an=rn.length,on=(0,H.useMemo)(()=>rn.slice(0,Hs),[rn]),sn=(0,H.useMemo)(()=>o?cc(on,oc):[],[on,o]),cn=(0,H.useMemo)(()=>sn.flatMap(e=>e.rows.map(e=>e.entry.fullPath)),[sn]),ln=cn.filter(e=>L.has(e)).length,un=cn.length>0&&ln===cn.length,dn=ln>0&&!un,fn=(0,H.useMemo)(()=>B.map(e=>e.entry.fullPath),[B]),pn=(0,H.useMemo)(()=>Yt?Xt.flatMap(e=>e.rows.map(e=>e.entry.fullPath)):fn,[fn,Yt,Xt]),mn=B.length>0&&L.size>=B.length,hn=L.size>0&&!mn,gn=()=>{xe||(mn?Cn():Ze(new Set(fn)))},_n=(0,H.useCallback)((e,t)=>{xe||e.length===0||(Ze(n=>{let r=new Set(n);for(let n of e)t?r.add(n):r.delete(n);return r}),t&&(Ve.current=e[0]??null))},[xe]),vn=e?.path??``,yn=(0,H.useCallback)((e,t)=>{if(xe){Ve.current=t,Ze(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Ze(r=>{if(e.shiftKey&&Ve.current!==null){let e=fn.indexOf(Ve.current),i=fn.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(fn[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),Ve.current=t,e}return Ve.current=t,new Set([t])})},[fn,xe]),bn=(0,H.useCallback)((e,t)=>{Ue.current=!1,yn(e,t)},[yn]),xn=(0,H.useCallback)((e,t)=>{Ue.current=!0,yn(e,t)},[yn]),Sn=(0,H.useCallback)(e=>{xe?(Ve.current=e,Ze(new Set([e]))):(Ve.current=e,Ze(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[xe]),Cn=(0,H.useCallback)(()=>{Ve.current=null,Ue.current=!1,Ze(new Set)},[]);(0,H.useEffect)(()=>{if(Ce===0||!Se||pt.current===Ce||!e?.entries.some(e=>e.fullPath===Se))return;pt.current=Ce,Ve.current=Se,Ze(new Set([Se])),dt({path:Se,value:v(Se)});let t=B.findIndex(e=>e.entry.fullPath===Se),n=Pe.current;if(!(t<0||!n)){if(a.mode===`list`){let e=t*zt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Se)}"]`)?.scrollIntoView({block:`nearest`})})}},[Pe,e,Se,Ce,zt,B,a.mode]),(0,H.useEffect)(()=>{if(!lt)return;let e=B.findIndex(e=>e.entry.fullPath===lt.path),t=Pe.current;if(!(e<0||!t)){if(a.mode===`list`){let n=e*zt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(lt.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[Pe,lt,zt,B,a.mode]);let wn=(0,H.useCallback)(()=>it(null),[]),Tn=(0,H.useCallback)((e,t)=>{e.isDirectory?f(e.fullPath,Pr(t)):p?.(e.fullPath,Pr(t))},[f,p]),En=(0,H.useCallback)((e,t,n)=>{Je({entry:e,x:t,y:n})},[]),Dn=(0,H.useRef)(null),On=(0,H.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Xo(e,L.has(n)?[...L]:[n])},[L]),kn=(0,H.useCallback)(e=>{if(!Go(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Dn.current=t?.dataset.directory===`true`?t.dataset.path??vn:vn,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[vn]),An=(0,H.useCallback)(e=>{if(F)return;let{paths:t,move:n}=Ko(e),r=Dn.current??vn;Dn.current=null,t.length!==0&&O&&(e.preventDefault(),O(t,r,!e.ctrlKey&&n))},[vn,O,F]),jn=(0,H.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),F||!t&&!he)return;let n=et.current;t&&!n.has(t)&&Ze(new Set([t])),t&&(Ve.current=t);let r=t?n.has(t)?[...n]:[t]:[];it({x:e.clientX,y:e.clientY,paths:r,background:!t}),Jn().then(vt,()=>vt(!1))},[he,vn]),Mn=(0,H.useCallback)(()=>w?.(),[w]),Nn=(e,t)=>{Ve.current=e,Ze(new Set([e])),t&&dt({path:e,value:v(e)}),Mn()},Pn=at&&(0,Q.jsx)(ki,{initialDirectory:vn,initialName:at.name,onCancel:()=>ot(null),onCompress:async e=>{let t=await br(at.paths,e);return!t.ok||!t.path?(je(t.error??I(`could_not_create_the_archive`)),!1):(Nn(t.path,!1),!0)}}),Fn=async(e,t=!1)=>{let n=e,r=t;if(e.some(Ds)){let t=[];for(let n of e)if(!Ds(n))t.push(n);else{if(tt.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){je(I(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await js(n))}catch(e){je(e instanceof Error?e.message:I(`the_file_could_not_be_copied`));return}}n=t,r=!1}await qn(n,r)&&(vt(!0),E?.())},In=async e=>{if(!e)return;let t=await er(e);t.cancelled||(t.ok?(Me.current=t.created,Mn(),N?.()):je(I(`nothing_on_the_clipboard_could_be_pasted_here`)))},Ln=async(e,t=!1)=>{if(!vn)return;let n=e===null?await rr(vn,t):await sr(vn,e);!n.ok||n.path===null?je(n.error??I(`could_not_create_the_item`)):(Ve.current=n.path,Ze(new Set([n.path])),dt({path:n.path,value:v(n.path)}),Mn())},Rn=e=>{Ze(new Set([e.fullPath])),Ve.current=e.fullPath,dt({path:e.fullPath,value:e.name})},U=(0,H.useCallback)(e=>dt(t=>t&&{...t,value:e}),[]),W=(0,H.useCallback)(()=>dt(null),[]),zn=(0,H.useCallback)(async()=>{let e=ft.current;if(dt(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=tt.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await nr(e.path,t);r.ok?(Cn(),r.path&&ee?.(e.path,r.path),Mn(),window.setTimeout(()=>Mn(),250)):je(r.error??I(`could_not_rename_the_entry`))},[Cn,ee,Mn,I]),Bn=async(e,t=!1)=>{if((t||oe)&&!await Vn(e,t))return;let n=t,r=await tr(e,n);if(!r.ok&&r.needsPermanent){if(!await Vn(e,!0))return;n=!0,r=await tr(e,!0)}if(!r.ok&&r.needsRunningConfirm){if(!await Hn(e,n,r.running??[],!1))return;r=await tr(e,n,!0)}if(!r.ok&&!r.needsRunningConfirm&&(r.running?.length??0)>0)await Hn(e,n,r.running??[],!0);else if(r.ok)Cn(),Mn();else{if(r.cancelled)return;je(r.error??I(n?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},Vn=(0,H.useCallback)((e,t)=>new Promise(n=>ct({paths:e,permanent:t,resolve:n})),[]),Hn=(0,H.useCallback)((e,t,n,r)=>new Promise(i=>ct({paths:e,permanent:t,running:!0,blocked:r,programs:n,resolve:i})),[]),G=(0,H.useCallback)(e=>{ct(t=>(t?.resolve(e),null))},[]),Un=(0,H.useCallback)(()=>Ue.current&&Ke.current!==null,[]),Wn=(0,H.useCallback)(()=>Un()?cn:pn,[Un,cn,pn]),Gn=(0,H.useCallback)(e=>{let t=Un(),n=t?Ke.current:a.mode===`grid`?We.current:Pe.current;if(!n||!t&&a.mode===`list`&&(e===`left`||e===`right`))return;let r=Wn();if(r.length===0)return;let i=Ve.current&&r.includes(Ve.current)?Ve.current:L.size===1?[...L][0]:null,o=[...n.querySelectorAll(`[data-path]`)],s=i?o.find(e=>e.dataset.path===i):void 0,c=i?r.indexOf(i):-1,l=e===`left`?-1:1,u;u=s?e===`left`||e===`right`?r[((c<0?l>0?-1:0:c)+l+r.length)%r.length]:ec(o,s.getBoundingClientRect(),e)?.dataset.path??(c>=0?r[c+(e===`down`?1:-1)]:r[0]):o[0]?.dataset.path??r[0],u&&(Ze(new Set([u])),Ve.current=u,window.requestAnimationFrame(()=>{n.querySelector(`[data-path="${CSS.escape(u)}"]`)?.scrollIntoView({block:`nearest`})}))},[Wn,L,Un,a.mode]);(0,H.useEffect)(()=>{if(!S||nt)return;let e=e=>{if(Lr(e.target))return;mt.current?.();let t=Fr(e),n=[...L],r=n.length===1?B.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`arrowleft`||t===`arrowright`)e.preventDefault(),Gn(t.slice(5));else if(t===`home`||t===`end`){let n=Wn();if(n.length===0)return;e.preventDefault();let r=t===`home`?n[0]:n[n.length-1];Ze(new Set([r])),Ve.current=r,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(r)}"]`)?.scrollIntoView({block:`nearest`})})}else J(x,`copy`,t)&&i(()=>{n.length>0&&Fn(n)}),J(x,`duplicate`,t)&&i(()=>{n.length!==0&&vn&&Yn(n,vn,!1).then(e=>{e.ok&&(e.created.length>0&&Ze(new Set(e.created)),Mn())})}),J(x,`cut`,t)&&i(()=>{n.length>0&&Fn(n,!0)}),J(x,`paste`,t)&&i(()=>void In(vn)),J(x,`delete`,t)&&i(()=>{n.length>0&&Bn(n)}),J(x,`deletePermanently`,t)&&i(()=>{n.length>0&&Bn(n,!0)}),J(x,`selectAll`,t)&&i(()=>{let e=He.current&&o&&on.length>0?on.map(e=>e.entry.fullPath):fn;Ze(new Set(e)),De?.(),Ve.current=e[0]??null}),J(x,`invertSelection`,t)&&i(()=>{Ze(new Set(fn.filter(e=>!L.has(e)))),Ve.current=fn[0]??null}),J(x,`rename`,t)&&r&&i(()=>void Rn(r)),J(x,`open`,t)&&r&&i(()=>{r.isDirectory?f(r.fullPath):p?.(r.fullPath)}),J(x,`newFolder`,t)&&i(()=>void Ln(null)),J(x,`terminal`,t)&&i(()=>void fr(vn)),J(x,`properties`,t)&&i(()=>void cr(n.length>0?n:vn?[vn]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[fn,Fn,Ln,vn,S,nt,f,p,Wn,In,Bn,Rn,B,L,x,Gn]);let Kn=st?.running?(0,Q.jsx)(Hi,{confirmLabel:st.permanent?I(`delete`):I(`move`),message:st.blocked?I(`programs_are_using_target_close_them_and_try_again`,{programs:bc(st.programs),target:st.paths.length===1?I(`this_item`):I(`count_items`,{count:st.paths.length})}):I(`programs_are_using_target_continue`,{programs:bc(st.programs),target:st.paths.length===1?I(`this_item`):I(`count_items`,{count:st.paths.length})}),onCancel:()=>G(!1),onConfirm:st.blocked?void 0:()=>G(!0),programs:st.programs??[]}):st?(0,Q.jsx)(Ge,{confirmLabel:st.permanent?I(`delete`):I(`move`),danger:st.permanent,message:st.permanent?I(`permanently_delete_target_this_cannot_be_undone`,{target:st.paths.length===1?I(`this_item`):I(`count_items`,{count:st.paths.length})}):I(`move_target_to_the_recycle_bin`,{target:st.paths.length===1?I(`this_item`):I(`count_items`,{count:st.paths.length})}),onCancel:()=>G(!1),onConfirm:()=>G(!0),open:!0,title:st.permanent?I(`delete_permanently`):I(`move_to_the_recycle_bin`)}):null,K=(0,H.useMemo)(()=>{if(!e||L.size===0)return null;let t=fn.find(e=>L.has(e));return t?B.find(e=>e.entry.fullPath===t)?.entry??null:null},[fn,e,B,L]),Xn=(0,H.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:I(`type`),value:I(`folder`)},{label:I(`location`),value:e.parent??`—`},{label:I(`path`),value:e.path},{label:I(`size`),value:h(t)},{label:I(`items`),value:b(I,n,`k_1_item`,`count_items`)},{label:I(`modified`),value:`—`},{label:I(`created`),value:`—`},{label:I(`attributes`),value:`—`}]}},[e,I]),Zn=(0,H.useMemo)(()=>{if(!K||!e)return null;let t=K.isDirectory?e.folderSizes[K.name]:void 0,n=e.tags[K.name]??[],r=K.name.lastIndexOf(`.`),i=r>0&&r<K.name.length-1?K.name.slice(r+1).toUpperCase():`—`;return{name:K.name,path:K.fullPath,isDirectory:K.isDirectory,size:K.size,modified:K.modified,created:K.created,fields:[{label:I(`type`),value:Qr(K.name,K.isDirectory,K.linkTarget,I)},...K.isEncrypted?[{label:I(`encryption`),value:I(`password_required`)}]:[],{label:I(`extension`),value:K.isDirectory?`—`:i},{label:I(`location`),value:e.path},{label:I(`full_path`),value:K.fullPath},{label:I(`size`),value:K.isDirectory?t===void 0?`—`:h(t):h(K.size)},...K.isDirectory?[{label:I(`items`),value:`${e.counts[K.name]??`—`}`}]:[],{label:I(`modified`),value:d(K.modified),time:K.modified},{label:I(`created`),value:d(K.created),time:K.created},{label:I(`link_status`),value:K.linkTarget==null?K.linkCount>1?I(`hard_link`):`—`:K.linkValid?`ok`:I(`broken`)},...K.linkTarget?[{label:I(`target`),value:K.linkTarget}]:[],...K.linkCount>1?[{label:I(`links`),value:String(K.linkCount)}]:[],{label:I(`attributes`),value:[K.isHidden?I(`hidden`):``,K.isSystem?I(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:I(`tags`),value:n.join(`, `)}]:[]]}},[e,K,I]),Qn=nt?.paths.length===1?nt.paths[0]:null,$n=Qn?B.find(e=>e.entry.fullPath===Qn)?.entry:void 0,ir=$n?{path:$n.fullPath,isDirectory:$n.isDirectory}:null,ar=Zn??Xn,or=(0,H.useRef)(de);or.current=de,(0,H.useEffect)(()=>{or.current?.(ar)},[de,ar]);let lr=ue&&ar&&(0,Q.jsx)(ua,{info:ar,onWidth:gt,selectionNote:L.size>1?b(I,L.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:ce,videoAutoplay:le,width:z});return r&&!e?(0,Q.jsx)(El,{children:(0,Q.jsx)(Ol,{children:r})}):!e&&!t?(0,Q.jsx)(El,{children:(0,Q.jsx)(Dl,{children:I(`nothing_selected`)})}):a.mode===`grid`?(0,Q.jsxs)(zc,{onPointerDown:P,children:[(0,Q.jsxs)(Bc,{children:[(0,Q.jsxs)(Jc,{ref:We,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Cn()},onContextMenu:e=>jn(e),onDragOver:kn,onDragStart:On,onDrop:An,onScroll:e=>{let t=e.currentTarget;pe?.(t),tn(t)},children:[_&&B.length>0&&(0,Q.jsxs)(Ic,{children:[(0,Q.jsx)(Pc,{$checked:!xe&&mn,$partial:!xe&&hn,"aria-label":I(mn?`select_none`:`select_all`),disabled:xe,onClick:e=>{e.stopPropagation(),gn()},title:I(mn?`select_none`:`select_all`),type:`button`,children:mn?(0,Q.jsx)(Ht,{size:10}):hn?(0,Q.jsx)(Fc,{}):null}),(0,Q.jsx)(`span`,{children:I(mn?`select_none`:`select_all`)})]}),t&&!e?(0,Q.jsx)(el,{$size:a.gridSize,children:(0,Q.jsx)(wc,{size:a.gridSize})}):(0,Q.jsxs)(`div`,{ref:Jt,children:[(0,Q.jsx)(Yc,{"aria-hidden":`true`,style:{height:Qt.top}}),(0,Q.jsx)(Ec,{counts:e?.counts,currentPath:wt?i.currentPath:null,groups:Qt.parts,gridSize:a.gridSize,innerRef:Ae,onContextMenu:jn,onOpen:f,onOpenFile:p,onRenameCancel:W,onRenameChange:U,onRenameCommit:zn,onSelect:bn,onToggle:Sn,onTogglePaths:xe?void 0:_n,openOnSingleClick:y,renaming:lt,searching:wt,selected:L,showCheckboxes:_,showTarget:Et}),(0,Q.jsx)(Yc,{"aria-hidden":`true`,style:{height:Math.max(0,Qt.total-Qt.top-Qt.height)}})]}),!t&&e&&B.length===0&&(0,Q.jsx)(Tl,{children:(0,Q.jsx)(Dl,{children:r??(wt&&i.mode===`hide`?I(`no_entries_match_the_search`):I(`this_folder_is_empty`))})}),me]}),nt&&(0,Q.jsx)(fi,{canPaste:_t,directory:vn,platform:k,allowCompression:!0,menu:nt,onAddToTray:te,onAddFavorite:A,onRemoveFavorite:j,favoritePaths:ne,onExtractArchive:re,onOpenAsArchive:M,onAddToStartMenu:ie,onArchiveCreated:Nn,gitEntries:e?.git?.entries,onGitChanged:Mn,onClose:wn,onCompressTo:(e,t)=>ot({paths:e,name:t}),onCopy:Fn,onCreateFile:e=>void Ln(e),onCreateFolder:e=>void Ln(null,e),onDelete:Bn,onOpen:f,onOpenFile:p,onPaste:In,onRefresh:Mn,onRename:e=>{let t=B.find(t=>t.entry.fullPath===e)?.entry;t&&Rn(t)},shortcuts:x,target:ir}),Pn,Kn]}),lr]}):(0,Q.jsxs)(zc,{onPointerDown:P,children:[(0,Q.jsxs)(Bc,{children:[(0,Q.jsxs)(Vc,{onScroll:e=>{Pe.current&&Pe.current.scrollLeft!==e.currentTarget.scrollLeft&&(Pe.current.scrollLeft=e.currentTarget.scrollLeft)},ref:Ne,style:{gridTemplateColumns:Ot},children:[(0,Q.jsxs)(jc,{ref:At,children:[_&&(0,Q.jsx)(Pc,{$checked:!xe&&mn,$partial:!xe&&hn,"aria-label":I(mn?`select_none`:`select_all`),disabled:xe,onClick:e=>{e.stopPropagation(),gn()},title:I(mn?`select_none`:`select_all`),type:`button`,children:mn?(0,Q.jsx)(Ht,{size:10}):hn?(0,Q.jsx)(Fc,{}):null}),(0,Q.jsxs)(Hc,{onClick:()=>l(`name`),type:`button`,children:[I(`name`),$s(a,`name`)]}),(0,Q.jsx)(Nc,{"aria-label":I(`resize_column`),onDoubleClick:()=>Tt[0]&&Pt(Tt[0].id),onPointerDown:Mt,role:`separator`})]}),Tt.map((e,t)=>(0,Q.jsxs)(Mc,{children:[(0,Q.jsxs)(Hc,{onClick:()=>l(e.id),type:`button`,children:[I(e.label),$s(a,e.id)]}),t<Tt.length-1&&(0,Q.jsx)(Nc,{"aria-label":I(`resize_column`),onDoubleClick:()=>Pt(e.id),onPointerDown:e=>Nt(e,t),role:`separator`})]},e.id))]}),(0,Q.jsxs)(Uc,{onClick:e=>{e.target===e.currentTarget&&Cn()},onContextMenu:e=>jn(e),onDragOver:kn,onDragStart:On,onDrop:An,onScroll:e=>{let t=e.currentTarget;Ne.current&&Ne.current.scrollLeft!==t.scrollLeft&&(Ne.current.scrollLeft=t.scrollLeft),Le.current=t,Ie.current===0&&(Ie.current=requestAnimationFrame(()=>{Ie.current=0;let e=Le.current;e&&ze(t=>t.top===e.scrollTop&&t.height===e.clientHeight?t:{top:e.scrollTop,height:e.clientHeight})}))},ref:Pe,children:[t&&!e?(0,Q.jsx)(Cc,{template:Ot,columns:Tt.length}):(0,Q.jsxs)(Q.Fragment,{children:[Bt>0&&(0,Q.jsx)(`div`,{style:{height:Bt*zt}}),Ut.map(t=>{let n=t.entry.fullPath;return(0,Q.jsx)(Oc,{current:wt&&n===i.currentPath,dim:wt&&t.ranges===null,height:zt,iconSize:a.iconSize,innerRef:Ae,folderSizes:e.folderSizes,counts:e.counts,tagColors:e.tagColors,onContextMenu:jn,onOpen:Tn,onRenameCancel:W,onRenameChange:U,onRenameCommit:zn,onSelect:bn,onTagEdit:En,onToggle:Sn,openOnSingleClick:y,renaming:lt?.path===n?{value:lt.value}:null,row:t,selected:L.has(n),showCheckboxes:_,showTarget:Et,template:Ot,visible:Tt},n)}),Vt<B.length&&(0,Q.jsx)(`div`,{style:{height:(B.length-Vt)*zt}})]}),!t&&e&&B.length===0&&(0,Q.jsx)(El,{children:(0,Q.jsx)(Dl,{children:r??(wt&&i.mode===`hide`?I(`no_entries_match_the_search`):I(`this_folder_is_empty`))})})]}),o&&rn.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Wc,{onDoubleClick:Ct,onPointerDown:bt,onPointerMove:xt,onPointerUp:St,title:I(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(Gc,{onPointerEnter:()=>{He.current=!0},onPointerLeave:()=>{He.current=!1},style:{height:Ye},children:[(0,Q.jsxs)(Kc,{children:[_&&!xe&&cn.length>0&&(0,Q.jsx)(Pc,{$checked:un,$partial:dn,"aria-label":I(un?`select_none`:`select_all`),disabled:xe,onClick:e=>{e.stopPropagation(),_n(cn,!un)},title:I(un?`select_none`:`select_all`),type:`button`,children:un?(0,Q.jsx)(Ht,{size:10}):dn?(0,Q.jsx)(Fc,{}):null}),I(`preview`),(0,Q.jsx)(qc,{children:an>Hs?`${on.length} / ${an}`:an})]}),(0,Q.jsx)(Jc,{ref:Ke,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Cn()},onContextMenu:e=>jn(e),children:(0,Q.jsx)(Ec,{counts:e?.counts,currentPath:wt?i.currentPath:null,groups:sn,gridSize:a.gridSize,onContextMenu:jn,onOpen:f,onOpenFile:p,onSelect:xn,onToggle:Sn,onTogglePaths:xe?void 0:_n,openOnSingleClick:y,searching:wt,selected:L,showCheckboxes:_,showTarget:Et})})]})]}),qe&&e&&(0,Q.jsx)(Mo,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(qe.entry.name,e,t),onClose:()=>Je(null),tags:e.tags[qe.entry.name]??[],x:qe.x,y:qe.y}),nt&&(0,Q.jsx)(fi,{canPaste:_t,directory:vn,platform:k,allowCompression:!0,menu:nt,onAddToTray:te,onAddFavorite:A,onRemoveFavorite:j,favoritePaths:ne,onExtractArchive:re,onOpenAsArchive:M,onAddToStartMenu:ie,onArchiveCreated:Nn,gitEntries:e?.git?.entries,onGitChanged:Mn,onClose:wn,onCompressTo:(e,t)=>ot({paths:e,name:t}),onCopy:Fn,onCreateFile:e=>void Ln(e),onCreateFolder:e=>void Ln(null,e),onDelete:Bn,onOpen:f,onOpenExternally:g,onOpenFile:p,onSelectEntry:m,onPaste:In,onRefresh:Mn,onRename:e=>{let t=B.find(t=>t.entry.fullPath===e)?.entry;t&&Rn(t)},shortcuts:x,target:ir}),Pn,Kn]}),lr]})}function $s(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}function ec(e,t,n){let r=n===`up`||n===`down`,i=n===`down`||n===`right`?1:-1,a=e=>r?{ahead:e.top+e.height/2,apart:e.left+e.width/2}:{ahead:e.left+e.width/2,apart:e.top+e.height/2},o=a(t),s=null,c=1/0;for(let t of e){let{ahead:e,apart:n}=a(t.getBoundingClientRect()),r=(e-o.ahead)*i;if(r<=1)continue;let l=r+Math.abs(n-o.apart)*4;l<c&&(c=l,s=t)}return s}var tc=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function nc(e,t,n,r){switch(t.sort){case`type`:return Qr(e.name,e.isDirectory,e.linkTarget,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}}function rc(e,t,n){return(r,i)=>{if(r.entry.isDirectory!==i.entry.isDirectory)return r.entry.isDirectory?-1:1;let a=nc(r.entry,e,t,n),o=nc(i.entry,e,t,n),s=typeof a==`number`&&typeof o==`number`?a-o:tc.compare(String(a),String(o));return e.sortDescending?-s:s}}function ic(e,t,n,r){let i=new Map(e.map(e=>[e,nc(e.entry,t,n,r)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=i.get(e),a=i.get(n),o=typeof r==`number`&&typeof a==`number`?r-a:tc.compare(String(r),String(a));return t.sortDescending?-o:o})}function ac(e,t,n){if(t.length===0)return e;let r=[...t].sort(n),i=[...e];for(let e of r){let t=0,r=i.length;for(;t<r;){let a=t+r>>>1;n(i[a],e)<=0?t=a+1:r=a}i.splice(t,0,e)}return i}var oc=Rr.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Br(t.entry.name)===e})),sc=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...oc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function cc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function lc(e){return Math.max(24,Math.min(e-56,160))}function uc(e,t,n,r,i){switch(e){case`type`:return Qr(t.name,t.isDirectory,t.linkTarget,i);case`size`:return xc(t,n);case`modified`:return d(t.modified);case`created`:return d(t.created);case`items`:return t.isDirectory?r[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:i(`broken`);default:return``}}function dc(e){return e===`??`?`?`:e===`!!`?`!`:e===`UU`||e===`AA`||e===`DD`||e[0]===`U`||e[1]===`U`?`U`:e[1]===`.`?e[0]:e[1]}function fc(e){switch(dc(e)){case`?`:return`untracked`;case`!`:return e===`!!`?`ignored`:`conflict`;case`U`:return`conflict`;case`D`:return`deleted`;case`A`:case`C`:return`added`;case`R`:return`renamed`;default:return`modified`}}function pc(e,t){let n=dc(t),r=e(n===`?`?`git_untracked`:n===`!`?t===`!!`?`git_ignored`:`git_conflict`:n===`U`?`git_conflict`:n===`D`?`git_deleted`:n===`A`||n===`C`?`git_added`:n===`R`?`git_renamed`:`git_modified`);return t[1]===`.`&&t[0]!==`.`?`${r} · ${e(`git_staged`)}`:r}function mc({name:e,ranges:t}){if(!t||t.length===0)return(0,Q.jsx)(Q.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,Q.jsx)(wl,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,Q.jsx)(Q.Fragment,{children:n})}var hc=new WeakMap,gc=new Map;function _c(e){let t=gc.get(e);return t||(t=new IntersectionObserver(e=>{for(let n of e){if(!n.isIntersecting)continue;let e=hc.get(n.target);hc.delete(n.target),t?.unobserve(n.target),e?.()}},{rootMargin:e}),gc.set(e,t)),t}function vc(e,t){let{items:n}=e,r=0,i=n.length-1,a=0;for(;r<=i;){let e=r+i>>>1;n[e].start<=t?(a=e,r=e+1):i=e-1}let o=n[a],s=Math.max(0,t-o.start-e.header),c=Math.max(1,Math.ceil(o.section.rows.length/e.columns));return{section:a,line:Math.min(c-1,Math.floor(s/(e.tile+e.gap)))}}function yc(e,t,n){let r=_c(n);return hc.set(e,t),r.observe(e),()=>{hc.delete(e),r.unobserve(e)}}function bc(e){return[...new Set((e??[]).map(e=>e.name))].join(`, `)}function xc(e,t){if(!e.isDirectory)return h(e.size);let n=t[e.name];return n===void 0?`—`:h(n)}function Sc({entry:e,size:t=18}){let n=T(),r=(0,H.useRef)(null),[i,a]=(0,H.useState)(!1);(0,H.useEffect)(()=>{if(i)return;let e=r.current;if(e){if(!(`IntersectionObserver`in window))a(!0);else return yc(e,()=>a(!0),`250px`)}},[i]);let o=P(i?e.fullPath:null,e.isDirectory,t>32),s=e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null,c=ue(s);return(0,Q.jsxs)(kc,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,Q.jsx)(Xr,{name:e.iconSource.slice(5),size:t}):c?(0,Q.jsx)(`img`,{alt:``,height:t,src:c,width:t}):o?(0,Q.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,Q.jsx)(Ct,{size:t}):(0,Q.jsx)(Xr,{name:Yr(e.name),size:t}),e.isEncrypted&&(0,Q.jsx)(Ac,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,Q.jsx)(un,{size:Math.max(8,Math.round(t*.52))})})]})}function Cc({template:e,columns:t}){return(0,Q.jsx)(Q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,Q.jsxs)(tl,{style:{gridTemplateColumns:e},children:[(0,Q.jsxs)(il,{children:[(0,Q.jsx)(nl,{style:{flexShrink:0,height:18,width:18}}),(0,Q.jsx)(nl,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,Q.jsx)(nl,{style:{width:t%2==0?44:92}},t))]},r))})}function wc({size:e}){return(0,Q.jsx)(Q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,Q.jsxs)(vl,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,Q.jsx)(yl,{children:(0,Q.jsx)(nl,{style:{height:e,width:e}})}),(0,Q.jsx)(xl,{children:(0,Q.jsx)(nl,{style:{height:9,width:`${t}%`}})})]},n))})}var Tc=(0,H.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:p,onSelect:m,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=T(),x=Wr(),S=!e.entry.isDirectory&&Vr(e.entry.name),C=(0,H.useRef)(null),[w,ee]=(0,H.useState)(!1);(0,H.useEffect)(()=>{if(!S||w)return;let e=C.current;if(e){if(!(`IntersectionObserver`in window))ee(!0);else return yc(e,()=>ee(!0),`400px`)}},[S,w]);let E=oe(S&&w?e.entry.fullPath:null,192,e.entry.modified),[D,O]=(0,H.useState)(!1),te=S&&E!==null&&!D,k=e.entry.fullPath,A=t=>{e.entry.isDirectory?v(k,Pr(t)):y?.(k,Pr(t))};return(0,Q.jsxs)(vl,{$current:t,$dim:n,$image:te,$selected:s,onClick:e=>{m(e,k),l&&A(e)},onContextMenu:e=>_(e,k),onDoubleClick:e=>{l||A(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":k,draggable:!u,children:[c&&(0,Q.jsx)(Rc,{$checked:s,onClick:e=>{e.stopPropagation(),g(k)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`deselect`:`select`),type:`button`,children:s&&(0,Q.jsx)(Ht,{size:10})}),(0,Q.jsxs)(yl,{children:[te?(0,Q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>O(!0),src:E}):(0,Q.jsx)(bl,{children:e.place&&x.useIcons?(0,Q.jsx)(Ha,{place:e.place,size:r}):(0,Q.jsx)(Sc,{entry:e.entry,size:r})}),e.git&&(0,Q.jsx)(ll,{$tone:fc(e.git),title:e.entry.isDirectory?b(`git_changes_inside`):pc(b,e.git),children:e.entry.isDirectory?`●`:dc(e.git)})]}),(0,Q.jsxs)(xl,{children:[u?(0,Q.jsx)(Dc,{onCancel:()=>p?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,Q.jsx)(Sl,{$broken:e.entry.linkValid===!1,children:(0,Q.jsx)(mc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,Q.jsxs)(ol,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Q.jsx)(un,{size:9}),b(`encrypted`)]}),e.cut&&(0,Q.jsxs)(ul,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,Q.jsx)(zt,{size:9}),b(`cut`)]}),(0,Q.jsx)(Cl,{children:e.entry.isDirectory?i===void 0?Qr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b):b(`type_count_items`,{type:Qr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b),count:i}):b(`type_size`,{type:Qr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b),size:h(e.entry.size)})}),a&&e.entry.linkTarget&&(0,Q.jsxs)(fl,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,Q.jsx)(vt,{size:9}),(0,Q.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Ec({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onTogglePaths:p,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:_,onRenameCommit:v,onRenameCancel:y}){let b=T();return(0,Q.jsx)(Q.Fragment,{children:e.map(e=>{let x=e.rows.map(e=>e.entry.fullPath),S=x.filter(e=>s.has(e)).length,C=x.length>0&&S===x.length,w=S>0&&!C,ee=e.total!==void 0&&e.rows.length<e.total;return(0,Q.jsxs)(Xc,{children:[e.headerShown!==!1&&(0,Q.jsxs)(Zc,{children:[c&&p&&!ee&&x.length>0&&(0,Q.jsx)(Pc,{$checked:C,$partial:w,"aria-label":b(C?`select_none`:`select_all`),onClick:e=>{e.stopPropagation(),p(x,!C)},title:b(C?`select_none`:`select_all`),type:`button`,children:C?(0,Q.jsx)(Ht,{size:10}):w?(0,Q.jsx)(Fc,{}):null}),b(e.label),(0,Q.jsx)(Qc,{children:e.total??e.rows.length}),(0,Q.jsx)($c,{})]}),(0,Q.jsx)(el,{$size:t,children:e.rows.map(e=>(0,Q.jsx)(Tc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:lc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:y,onRenameChange:_,onRenameCommit:v,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id)})})}function Dc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,H.useRef)(null);return(0,H.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,Q.jsx)(dl,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Oc=(0,H.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,folderSizes:d,counts:f,tagColors:p,innerRef:m,renaming:h,onSelect:g,onToggle:_,onContextMenu:v,onOpen:y,onTagEdit:b,onRenameChange:x,onRenameCommit:S,onRenameCancel:C}){let w=T(),ee=Wr(),E=e.entry.fullPath;return(0,Q.jsxs)(rl,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{g(t,E),o&&y(e.entry,t)},onContextMenu:e=>v(e,E),onDoubleClick:t=>{o||y(e.entry,t)},ref:t?m:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":E,draggable:!h,children:[(0,Q.jsxs)(il,{children:[i&&(0,Q.jsx)(Lc,{$checked:r,onClick:e=>{e.stopPropagation(),_(E)},onDoubleClick:e=>e.stopPropagation(),title:w(r?`deselect`:`select`),type:`button`,children:r&&(0,Q.jsx)(Ht,{size:10})}),e.place&&ee.useIcons?(0,Q.jsx)(kc,{children:(0,Q.jsx)(Ha,{place:e.place,size:s})}):(0,Q.jsx)(Sc,{entry:e.entry,size:s}),h?(0,Q.jsx)(Dc,{onCancel:C,onChange:x,onCommit:S,value:h.value}):(0,Q.jsx)(al,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,Q.jsx)(mc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,Q.jsxs)(ol,{title:w(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Q.jsx)(un,{size:9}),w(`encrypted`)]}),e.git&&(0,Q.jsx)(cl,{$tone:fc(e.git),title:e.entry.isDirectory?w(`git_changes_inside`):pc(w,e.git),children:e.entry.isDirectory?`●`:dc(e.git)}),e.cut&&(0,Q.jsxs)(ul,{title:w(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,Q.jsx)(zt,{size:9}),w(`cut`)]}),a&&e.entry.linkTarget&&(0,Q.jsxs)(fl,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,Q.jsx)(vt,{size:9}),(0,Q.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,Q.jsx)(pl,{children:t.id===`tags`?(0,Q.jsx)(ml,{onClick:t=>{t.stopPropagation(),b(e.entry,t.clientX,t.clientY)},title:w(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=p?.[e]??`#64748b`;return(0,Q.jsx)(hl,{$color:t,$ink:jo(t),children:e},e)}):(0,Q.jsx)(gl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,Q.jsx)(_l,{children:w(`broken`)}):t.id===`modified`?(0,Q.jsx)(ct,{value:e.entry.modified}):t.id===`created`?(0,Q.jsx)(ct,{value:e.entry.created}):uc(t.id,e.entry,d,f,w)},t.id))]})}),kc=A.span`
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
`,Ac=A.span`
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
`,jc=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Mc=A.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Nc=A.span`
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
`,Pc=A.button`
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
`,Fc=A.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Ic=A.div`
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
`,Lc=A.button`
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
`,Rc=A(Lc)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,zc=A.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Bc=A.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Vc=A.div`
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
`,Hc=A.button`
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
`,Uc=A.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Wc=A.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Gc=A.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Kc=A.div`
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
`,qc=A.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Jc=A.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    /* The window is placed by the grid itself; the browser must not move it a second time. */
    overflow-anchor: none;
    padding: 12px 14px 24px;
`,Yc=A.div`
    flex: none;
`,Xc=A.section`
    & + & {
        margin-top: 22px;
    }
`,Zc=A.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Qc=A.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,$c=A.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,el=A.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,tl=A.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,nl=A.span`
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
`,rl=A.div`
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
`,il=A.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,al=A.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,ol=A.span`
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
`;function sl(e){switch(e){case`untracked`:case`added`:return`#58c982`;case`deleted`:return`#f07171`;case`renamed`:return`#68a8f5`;case`conflict`:return`#f06bb0`;case`ignored`:return`#8b93a3`;default:return`#e7b341`}}var cl=A.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    min-width: 15px;
    height: 15px;
    padding: 0 3px;
    border-radius: 4px;
    background: ${({$tone:e})=>sl(e)};
    color: #14181f;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    line-height: 1;
    opacity: 0.9;
`,ll=A.span`
    position: absolute;
    top: 5px;
    right: 5px;
    display: grid;
    place-items: center;
    width: 16px;
    height: 16px;
    border: 1px solid rgba(var(--bg-rgb), 0.6);
    border-radius: 5px;
    background: ${({$tone:e})=>sl(e)};
    color: #14181f;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    line-height: 1;
    pointer-events: none;
`,ul=A.span`
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
`,dl=A.input`
    flex: 1;
    min-width: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-focus);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    /* The border and the padding make the box six pixels taller than the line it edits. Pulling
       them back out of the flow keeps the text on the very line the name was on, instead of the
       grid sizing its row by the taller box and pushing the whole line down. */
    margin-block: -3px;
    outline: none;
`,fl=A.span`
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
`,pl=A.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,ml=A.button`
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
`,hl=A.span`
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
`,gl=A.span`
    color: var(--text-muted);
    font-size: 11px;
`,_l=A.span`
    color: #fca5a5;
`,vl=A.div`
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
`,yl=A.div`
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
`,bl=A.span`
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
`,xl=A.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
    padding: 18px 8px 6px;
    font-size: 11px;
    background: linear-gradient(to top, rgba(var(--bg-rgb), 0.92), rgba(var(--bg-rgb), 0));
    overflow: hidden;
`,Sl=A.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cl=A.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,wl=A.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Tl=A.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,El=A.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Dl=A.p`
    font-size: 13px;
    color: var(--text-muted);
`,Ol=A.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,kl={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},Al=`yafm://`,jl={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Ml(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function Nl(e){return`${Al}${e===`home`?`overview`:e}`}function Pl(e){return Ml(e)?jl[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Fl(e){let t=e.trim();if(t.length===0)return null;if(!Ml(t))return t;let n=jl[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?Nl(n):null}function Il({location:e,size:t=13}){switch(Pl(e)){case`home`:return(0,Q.jsx)(Mt,{size:t});case`settings`:return(0,Q.jsx)(_t,{size:t});case`recycle`:return(0,Q.jsx)(Tn,{size:t});case`gallery`:return(0,Q.jsx)(Ct,{size:t});default:return y(e)?(0,Q.jsx)(rn,{size:t}):(0,Q.jsx)(Ct,{size:t})}}function Ll(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>=0?t.slice(n+1):t}function Rl(){let e=T();return t=>{let n=Pl(t);return n?e(kl[n]):Ll(t)}}var zl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Bl=`/assets/bloom-BpfZWiaG.mp4`,Vl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Hl=`/assets/drift-BRBSQL2_.mp4`,Ul=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Wl=`/assets/ember-CtSz0YxR.mp4`,Gl=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],Kl=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],ql=[{id:`builtin:video:drift`,name:`drift`,url:Hl,poster:Vl},{id:`builtin:video:ember`,name:`ember`,url:Wl,poster:Ul},{id:`builtin:video:bloom`,name:`bloom`,url:Bl,poster:zl}],Jl=Kl.map(e=>({...e,variants:Gl.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:eu(tu(e.id,t,!1)),lightUrl:eu(tu(e.id,t,!0))}))})),Yl=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>Gl.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:eu(nu(e.id,t,!1)),lightUrl:eu(nu(e.id,t,!0))}))),Xl=new Map([...Jl.flatMap(e=>e.variants),...Yl].map(e=>[e.id,e])),Zl=new Map(ql.map(e=>[e.id,e]));function Ql(e,t=`dark`){if(Zl.has(e))return Zl.get(e).url;let n=Xl.get(e)??Xl.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function $l(e){return Zl.has(e)}function eu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function tu(e,t,n){return e===`dunes`?cu(t,n):e===`tide`?lu(t,n):su(t,n)}function nu(e,t,n){return e===`skyline`?iu(t,n):e===`orbit`?au(t,n):ru(t,n)}function ru({accent:e,secondary:t},n){let r=$(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=$(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=$(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=$(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=$(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1450" cy="330" r="120" fill="${$(t,`#ffffff`,n?.45:.2)}" opacity="0.75"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560 V1080 H0 Z" fill="${a}" opacity="0.72"/>
    <path d="M0 790 L300 620 L560 760 L860 540 L1120 760 L1420 600 L1700 780 L1920 680 V1080 H0 Z" fill="${o}"/>
    <path d="M0 900 L240 810 L520 900 L800 760 L1080 900 L1380 800 L1660 900 L1920 830 V1080 H0 Z" fill="${c}"/>
    <path d="M0 650 L260 470 L470 610 L720 380 L980 640 L1240 430 L1520 620 L1750 470 L1920 560"
          fill="none" stroke="${e}" stroke-width="2.5" opacity="0.5"/>
    </svg>`}function iu({accent:e,secondary:t},n){let r=$(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=$(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=$(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=$(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <rect x="0" y="720" width="1920" height="360" fill="${$(e,n?`#d5deea`:`#040208`,n?.7:.94)}" opacity="0.72"/>
    <path d="M0 720 H1920" stroke="${e}" stroke-width="2" opacity="0.35"/>
    </svg>`}function au({accent:e,secondary:t},n){let r=$(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=$(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=$(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <radialGradient id="space" cx="0.5" cy="0.45" r="0.78">
            <stop offset="0" stop-color="${$(e,t,.4)}" stop-opacity="0.5"/>
            <stop offset="0.55" stop-color="${r}"/>
            <stop offset="1" stop-color="${i}"/>
        </radialGradient>
        <radialGradient id="planet" cx="0.35" cy="0.3" r="0.8">
            <stop offset="0" stop-color="${$(t,`#ffffff`,.32)}"/>
            <stop offset="0.6" stop-color="${t}"/>
            <stop offset="1" stop-color="${$(e,n?`#cfd9e6`:`#08050f`,n?.55:.7)}"/>
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
    <circle cx="1450" cy="300" r="18" fill="${$(t,`#ffffff`,.4)}" opacity="0.9"/>
    </svg>`}function ou(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function $(e,t,n){let[r,i,a]=ou(e),[o,s,c]=ou(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function su({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${$(e,n?`#f2f6ff`:`#05070f`,.9)}"/>
            <stop offset="0.55" stop-color="${$(t,n?`#eef2ff`:`#070b1c`,n?.86:.85)}"/>
            <stop offset="1" stop-color="${$(e,n?`#e8f0fb`:`#04060c`,n?.9:.94)}"/>
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
    <ellipse cx="1050" cy="820" rx="620" ry="300" fill="${$(e,t,.5)}" opacity="${n?.26:.42}" filter="url(#soft)"/>
    <path d="M-100 700 C 380 460 760 880 1180 640 S 1780 380 2050 600" fill="none" stroke="url(#ribbon)" stroke-width="90" opacity="${n?.32:.5}" filter="url(#soft2)"/>
    <path d="M-100 760 C 380 520 760 940 1180 700 S 1780 420 2050 660" fill="none" stroke="${e}" stroke-width="3" opacity="${n?.3:.42}" filter="url(#soft2)"/>
    <path d="M-100 860 C 420 640 820 1040 1240 800 S 1820 540 2050 760" fill="none" stroke="${t}" stroke-width="3" opacity="${n?.26:.36}" filter="url(#soft2)"/>
</svg>`}function cu({accent:e,secondary:t},n){let r=$(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=$(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=$(e,t,.25),o=$(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=$(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=$(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    <circle cx="1480" cy="250" r="110" fill="${$(t,`#ffffff`,.25)}" opacity="0.18" filter="url(#haze)"/>
    <path d="M0 690 C 320 600 560 700 840 650 C 1180 590 1430 680 1920 610 V1080 H0 Z" fill="url(#dune1)"/>
    <path d="M0 820 C 360 740 680 860 980 800 C 1320 730 1620 830 1920 770 V1080 H0 Z" fill="url(#dune2)"/>
    <path d="M0 940 C 420 880 760 980 1100 930 C 1440 880 1700 950 1920 910 V1080 H0 Z" fill="${c}" opacity="${n?.5:.75}"/>
</svg>`}function lu({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
    <defs>
        <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="${$(e,n?`#e6f7fb`:`#02070a`,n?.88:.9)}"/>
            <stop offset="0.5" stop-color="${$(t,n?`#eefaf8`:`#03100f`,n?.85:.82)}"/>
            <stop offset="1" stop-color="${$(e,n?`#dff2f7`:`#020609`,n?.9:.94)}"/>
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
    <ellipse cx="1200" cy="960" rx="700" ry="240" fill="${$(e,t,.4)}" opacity="${n?.34:.5}" filter="url(#blur)"/>
    <path d="M-50 640 C 400 560 760 720 1160 640 S 1780 520 2000 600" fill="none" stroke="url(#wave)" stroke-width="3"/>
    <path d="M-50 740 C 420 660 800 820 1200 730 S 1800 620 2000 700" fill="none" stroke="url(#wave)" stroke-width="2"/>
    <path d="M-50 850 C 460 760 820 920 1220 830 S 1820 720 2000 800" fill="none" stroke="url(#wave)" stroke-width="2" opacity="0.75"/>
</svg>`}var uu=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function du(e){return uu.test(e)}function fu({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):c(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=ye(i),o=n?.startsWith(`builtin:`)?Ql(n,t):r??a,s=r===null?i===null?n!==null&&$l(n):du(i):du(r.split(/[?#]/)[0]);if(!n||!o)return null;let l=`blur(${e?.backgroundBlur??at().backgroundBlur}px) saturate(${e?.backgroundSaturation??at().backgroundSaturation}%) brightness(${e?.backgroundBrightness??at().backgroundBrightness}%)`;return(0,Q.jsxs)(pu,{"aria-hidden":!0,children:[s?(0,Q.jsx)(hu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:l}}):(0,Q.jsx)(mu,{src:o,style:{filter:l}}),(0,Q.jsx)(gu,{})]})}var pu=A.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,mu=A.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,hu=A.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,gu=A.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function _u({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=T(),s=(0,H.useRef)(null),[c,l]=(0,H.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,H.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,hi.createPortal)((0,Q.jsx)(xu,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,Q.jsxs)(Su,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsx)(Cu,{children:o(`protected_folder`)}),(0,Q.jsx)(wu,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,Q.jsx)(Tu,{children:t.map(e=>(0,Q.jsxs)(Eu,{children:[(0,Q.jsx)(Du,{children:e.path}),(0,Q.jsx)(Ou,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,Q.jsx)(ku,{children:vu(o,u,r??!1)}),(0,Q.jsx)(Au,{children:yu(o,u)}),(0,Q.jsx)(ju,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,Q.jsxs)(Mu,{children:[(0,Q.jsx)(Nu,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,Q.jsx)(Pu,{disabled:c>0,onClick:a,type:`button`,children:c>0?bu(o,u,c):bu(o,u,0)})]})]})}),document.body)}function vu(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function yu(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function bu(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var xu=A.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${$e}
`,Su=A.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${R}
`,Cu=A.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,wu=A.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Tu=A.div`
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
`,Eu=A.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Du=A.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,Ou=A.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,ku=A.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Au=A.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,ju=A.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Mu=A.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Nu=A.button`
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
`,Pu=A.button`
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
`;function Fu(){let e=T(),[t,n]=(0,H.useState)(null),r=(0,H.useRef)(null),i=(0,H.useRef)(null);(0,H.useEffect)(()=>(Ue(e=>new Promise(t=>{r.current=t,n(e)})),()=>Ue(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,H.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,hi.createPortal)((0,Q.jsx)(Iu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,Q.jsxs)(Lu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsx)(Ru,{children:e(`notice`)}),(0,Q.jsx)(zu,{children:t}),(0,Q.jsx)(Bu,{children:(0,Q.jsx)(Vu,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Iu=A.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${$e}
`,Lu=A.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${R}
`,Ru=A.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,zu=A.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Bu=A.div`
    display: flex;
    justify-content: flex-end;
`,Vu=A.button`
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
`;function Hu({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=T(),a=(0,H.useRef)(null),o=(0,H.useRef)(null),[s,c]=(0,H.useState)(null);return(0,H.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,H.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,H.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,hi.createPortal)((0,Q.jsxs)(Uu,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(La).map(n=>(0,Q.jsx)(Wu,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:La[n](16)},n)),(0,Q.jsx)(Wu,{onClick:async()=>{let e=await ti([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,Q.jsx)(sn,{size:13})}),r&&(0,Q.jsx)(Wu,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,Q.jsx)(wn,{size:12})})]}),document.body)]})}var Uu=A.div`
    position: absolute;
    z-index: 3600;
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
    ${nt}
    transform-origin: top left;
`,Wu=A.button`
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
`,Gu=[{bit:256,group:`owner`,action:`read`},{bit:128,group:`owner`,action:`write`},{bit:64,group:`owner`,action:`execute`},{bit:32,group:`group`,action:`read`},{bit:16,group:`group`,action:`write`},{bit:8,group:`group`,action:`execute`},{bit:4,group:`other`,action:`read`},{bit:2,group:`other`,action:`write`},{bit:1,group:`other`,action:`execute`}];function Ku({request:e}){let t=T(),n=(0,H.useRef)(null),r=e.items.length===1,i=e.canUseSystemSheet,[a,o]=(0,H.useState)(`general`),[s,c]=(0,H.useState)(e.items[0]),[l,u]=(0,H.useState)(s.name),[d,f]=(0,H.useState)(rd(s,`ReadOnly`)),[p,m]=(0,H.useState)(rd(s,`Hidden`)),[g,_]=(0,H.useState)(rd(s,`Archive`)),[y,b]=(0,H.useState)(s.unixModeValue??0),[x,S]=(0,H.useState)(!1),[C,w]=(0,H.useState)(null),[ee,E]=(0,H.useState)(null),[D,O]=(0,H.useState)(!1),te=(0,H.useRef)(!1),[k,A]=(0,H.useState)(null),[j,ne]=(0,H.useState)(0),[re,M]=(0,H.useState)(``),[ie,N]=(0,H.useState)([]),[ae,oe]=(0,H.useState)({}),[se,le]=(0,H.useState)(!1),[ue,de]=(0,H.useState)(!1),[P,fe]=(0,H.useState)(!1),pe=(0,H.useRef)(!1),me=r&&!s.error,he=r&&!s.directory&&!s.error,F=me&&l.trim()!==s.name,ge=me&&i&&(d!==rd(s,`ReadOnly`)||p!==rd(s,`Hidden`)||!s.directory&&g!==rd(s,`Archive`)),_e=me&&!i&&y!==(s.unixModeValue??0),ve=me&&!i&&(_e||se&&s.directory),ye=k!==null&&!Qu(ie,k.tags),be=k!==null&&j!==k.rating,xe=k!==null&&re!==(k.comment??``),Se=k!==null&&!$u(ae,k.colors),Ce=ye||be||xe||Se,we=F||ge||ve||Ce,Te=e=>{c(e),u(e.name),f(rd(e,`ReadOnly`)),m(rd(e,`Hidden`)),_(rd(e,`Archive`)),b(e.unixModeValue??0)},Ee=async()=>{if(!we||x)return!0;S(!0),w(null);try{let e=s.path;if(F){let n=await nr(e,l.trim());if(!n.ok)return w(n.error??t(`could_not_rename_the_entry`)),!1;e=n.path??e}if(ge||ve){let n=await Hn({path:e,readOnly:i?d:void 0,hidden:i?p:void 0,archive:i&&!s.directory?g:void 0,unixMode:i?void 0:y,recursive:!i&&s.directory?se:void 0});if(!n.ok)return w(n.error??t(`could_not_change_the_properties`)),!1;n.info&&(Te(n.info),e=n.info.path)}if(Ce){if(!await Un({path:e,tags:ye?ie:void 0,rating:be?j:void 0,comment:xe?re:void 0,colors:Se?ae:void 0}))return w(t(`could_not_change_the_properties`)),!1;A({tags:[...ie],rating:j,comment:re.length>0?re:null,editable:!0,allTags:(k?.allTags??[]).map(e=>({...e,color:ae[e.name]??e.color})),colors:{...ae}})}if(F&&!ge&&!_e){let t=await Bn(e);t&&Te(t)}return!0}finally{S(!1)}},De=()=>W(),Oe=async()=>{await Ee()&&De()};(0,H.useEffect)(()=>{a===`hashes`&&!te.current&&he&&(te.current=!0,O(!0),Vn(s.path).then(e=>E(e),()=>E({items:[]})).finally(()=>O(!1)))},[a,he,s.path]),(0,H.useEffect)(()=>{a===`details`&&!pe.current&&r&&(pe.current=!0,G(s.path).then(e=>{e&&(A(e),ne(e.rating),M(e.comment??``),N(e.tags),oe(e.colors))},()=>void 0))},[a,r,s.path]);let I=async()=>{let e=await Bn(s.path);e&&Te(e)},ke=async e=>{if(fe(!1),!me)return;let n=s.path.replace(/[\\/][^\\/]+$/,``),r=v(s.path),i=e===null?null:e.startsWith(`file:`)?e:`icon:${e}`;await Ie(n,r,i)?(c(e=>({...e,iconSource:i})),ce()):w(t(`could_not_change_the_properties`))};return(0,H.useEffect)(()=>{n.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),W()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[]),(0,hi.createPortal)((0,Q.jsx)(ad,{onPointerDown:e=>{e.target===e.currentTarget&&De()},children:(0,Q.jsxs)(od,{role:`dialog`,"aria-modal":`true`,"aria-label":t(`properties`),children:[(0,Q.jsx)(sd,{children:r?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(ld,{disabled:!me,onClick:()=>fe(e=>!e),title:me?t(`change_icon`):void 0,type:`button`,children:(0,Q.jsx)(nd,{info:s})}),P&&(0,Q.jsx)(Hu,{allowDefault:!0,onClose:()=>fe(!1),onPick:e=>void ke(e),value:s.iconSource?.startsWith(`icon:`)?s.iconSource.slice(5):void 0}),(0,Q.jsxs)(ud,{children:[(0,Q.jsx)(fd,{"aria-label":t(`name`),disabled:!me,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Oe()},spellCheck:!1,value:l}),(0,Q.jsx)(pd,{children:Qr(s.name,s.directory,s.linkTarget,t)})]})]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(ld,{children:(0,Q.jsx)(Ct,{size:30})}),(0,Q.jsxs)(ud,{children:[(0,Q.jsx)(dd,{children:t(`count_items`,{count:e.items.length})}),(0,Q.jsx)(pd,{children:t(`selection`)})]})]})}),(0,Q.jsx)(md,{}),r&&(0,Q.jsxs)(hd,{role:`tablist`,children:[(0,Q.jsx)(gd,{$active:a===`general`,onClick:()=>o(`general`),role:`tab`,type:`button`,children:t(`general`)}),(0,Q.jsx)(gd,{$active:a===`details`,onClick:()=>o(`details`),role:`tab`,type:`button`,children:t(`details`)}),he&&(0,Q.jsx)(gd,{$active:a===`hashes`,onClick:()=>o(`hashes`),role:`tab`,type:`button`,children:t(`hashes`)}),!i&&(0,Q.jsx)(gd,{$active:a===`permissions`,onClick:()=>o(`permissions`),role:`tab`,type:`button`,children:t(`permissions`)})]}),(0,Q.jsxs)(_d,{children:[r?s.error?(0,Q.jsx)(df,{children:s.error}):a===`general`?(0,Q.jsx)(qu,{info:s,readOnly:d,hidden:p,archive:g,windows:i,editable:me,onRefresh:()=>void I(),onReadOnly:f,onHidden:m,onArchive:_}):a===`details`?(0,Q.jsx)(Ju,{info:s,editable:me&&k!==null,allTags:k?.allTags??[],tags:ie,colors:ae,rating:j,comment:re,onTags:N,onColors:oe,onRating:ne,onComment:M}):a===`hashes`?(0,Q.jsx)(Yu,{hashes:ee,hashing:D}):(0,Q.jsx)(Xu,{info:s,mode:y,recursive:se,advanced:ue,onAdvanced:de,onRecursive:le,onChange:b}):(0,Q.jsx)(sf,{children:e.items.map(e=>(0,Q.jsxs)(cf,{children:[(0,Q.jsx)(lf,{title:e.path,children:e.name}),(0,Q.jsx)(uf,{children:e.error?e.error:e.directory?t(`folder`):h(e.size)})]},e.path))}),C&&(0,Q.jsx)(df,{children:C})]}),(0,Q.jsx)(md,{}),(0,Q.jsxs)(ff,{children:[i&&(0,Q.jsx)(mf,{onClick:()=>void lr(e.items.map(e=>e.path)),type:`button`,children:t(`windows_properties`)}),(0,Q.jsx)(pf,{}),(0,Q.jsx)(hf,{disabled:x,onClick:()=>void Oe(),ref:n,type:`button`,children:t(`ok`)}),(0,Q.jsx)(hf,{disabled:x,onClick:De,type:`button`,children:t(`cancel`)}),(0,Q.jsx)(hf,{disabled:x||!we,onClick:()=>void Ee(),type:`button`,children:t(`apply`)})]})]})}),document.body)}function qu({info:e,readOnly:n,hidden:r,archive:i,windows:a,editable:o,onRefresh:s,onReadOnly:c,onHidden:l,onArchive:u}){let d=T(),f=e.path.slice(0,Math.max(0,e.path.length-e.name.length-1)),p=Math.max(0,e.volumeTotal-e.volumeFree),m=e.volumeTotal>0?p/e.volumeTotal:0;return(0,Q.jsxs)(yd,{children:[(0,Q.jsxs)(bd,{children:[(0,Q.jsx)(xd,{children:d(`general`)}),(0,Q.jsx)(Sd,{onClick:s,title:d(`refresh`),type:`button`,children:(0,Q.jsx)(Vt,{size:12})})]}),(0,Q.jsxs)(vd,{children:[(0,Q.jsx)(ed,{label:d(`type`),value:Qr(e.name,e.directory,e.linkTarget,d)}),(0,Q.jsx)(ed,{label:d(`location`),value:f,wrap:!0}),(0,Q.jsx)(ed,{label:d(`size`),value:e.size>0?d(`bytes_in_parentheses`,{size:h(e.size),bytes:e.size.toLocaleString()}):`—`}),e.directory&&(0,Q.jsx)(ed,{label:d(`items`),value:d(`count_files_and_folders`,{files:e.fileCount,folders:e.folderCount})}),!e.directory&&e.sizeOnDisk>0&&(0,Q.jsx)(ed,{label:d(`size_on_disk`),value:h(e.sizeOnDisk)}),e.fileSystem&&(0,Q.jsx)(ed,{label:d(`filesystem`),value:e.fileSystem}),e.mountPoint&&(0,Q.jsx)(ed,{label:d(`mount_point`),value:e.mountPoint,wrap:!0}),e.mountSource&&(0,Q.jsx)(ed,{label:d(`mount_source`),value:e.mountSource,wrap:!0}),a?(0,Q.jsx)(ed,{label:d(`attributes`),value:(0,Q.jsxs)(Yd,{children:[(0,Q.jsx)(td,{checked:n,disabled:!o,label:d(`read_only`),onChange:c}),(0,Q.jsx)(td,{checked:r,disabled:!o,label:d(`hidden`),onChange:l}),!e.directory&&(0,Q.jsx)(td,{checked:i,disabled:!o,label:d(`archive`),onChange:u})]})}):(0,Q.jsx)(ed,{label:d(`attributes`),value:e.attributes.map(e=>id(d,e)).join(`, `)||`—`}),(0,Q.jsx)(ed,{label:d(`created`),value:(0,Q.jsx)(Zu,{value:e.created})}),(0,Q.jsx)(ed,{label:d(`modified`),value:(0,Q.jsx)(Zu,{value:e.modified})}),(0,Q.jsx)(ed,{label:d(`accessed`),value:(0,Q.jsx)(Zu,{value:e.accessed})})]}),e.volumeTotal>0&&(0,Q.jsxs)(wd,{children:[(0,Q.jsxs)(Td,{children:[(0,Q.jsx)(`span`,{children:d(`free_space`)}),(0,Q.jsxs)(`span`,{children:[h(e.volumeFree),` / `,h(e.volumeTotal)]})]}),(0,Q.jsx)(Ed,{children:(0,Q.jsx)(Dd,{$tone:t(m),$width:Math.round(m*100)})}),(0,Q.jsxs)(Od,{children:[Math.round((1-m)*100),`%`]})]})]})}function Ju({info:e,editable:t,allTags:n,tags:r,colors:i,rating:a,comment:o,onTags:s,onColors:c,onRating:l,onComment:u}){let d=T(),[f,p]=(0,H.useState)(``),[m,h]=(0,H.useState)(`#2dd4bf`),g=e=>i[e]??n.find(t=>t.name===e)?.color??`#64748b`,_=[...new Set([...n.map(e=>e.name),...r])].sort((e,t)=>e.localeCompare(t)),v=e=>s(r.includes(e)?r.filter(t=>t!==e):[...r,e]),y=(e,t)=>c({...i,[e]:t}),b=()=>{let e=f.trim();e.length!==0&&(r.includes(e)||s([...r,e]),c({...i,[e]:m}),p(``))};return(0,Q.jsxs)(yd,{children:[(0,Q.jsx)(bd,{children:(0,Q.jsx)(xd,{children:d(`details`)})}),(0,Q.jsxs)(vd,{children:[(0,Q.jsx)(ed,{label:d(`type`),value:Qr(e.name,e.directory,e.linkTarget,d)}),(0,Q.jsx)(ed,{label:d(`path`),value:e.path,wrap:!0}),e.linkTarget&&(0,Q.jsx)(ed,{label:d(`link_target`),value:e.linkTarget,wrap:!0}),e.unixMode&&(0,Q.jsx)(ed,{label:d(`permissions`),value:(0,Q.jsx)(Zd,{children:e.unixMode})})]}),(0,Q.jsxs)(kd,{children:[(0,Q.jsx)(Ad,{children:d(`tags`)}),_.length>0&&(0,Q.jsx)(Md,{children:_.map(e=>{let n=g(e),i=r.includes(e);return(0,Q.jsxs)(Nd,{children:[(0,Q.jsx)(lo,{ariaLabel:d(`color_of_tag`,{tag:e}),disabled:!t,title:d(`change_this_tag_s_color`),value:n,onChange:t=>y(e,t)}),(0,Q.jsxs)(Pd,{$color:n,$ink:jo(n),$on:i,disabled:!t,onClick:()=>v(e),type:`button`,children:[i&&(0,Q.jsx)(Ht,{size:10}),(0,Q.jsx)(`span`,{children:e})]})]},e)})}),(0,Q.jsxs)(jd,{children:[(0,Q.jsx)(lo,{ariaLabel:d(`color_of_the_new_tag`),disabled:!t,title:d(`color_of_the_new_tag`),value:m,onChange:h}),(0,Q.jsx)(Fd,{disabled:!t,onChange:e=>p(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),b())},placeholder:d(`new_tag`),value:f}),(0,Q.jsxs)(Id,{disabled:!t||f.trim().length===0,onClick:b,type:`button`,children:[(0,Q.jsx)(sn,{size:11}),d(`add`)]})]})]}),(0,Q.jsxs)(kd,{children:[(0,Q.jsx)(Ad,{children:d(`rating`)}),(0,Q.jsx)(Ld,{children:[1,2,3,4,5].map(e=>(0,Q.jsx)(Rd,{$on:e<=a,"aria-label":String(e),disabled:!t,onClick:()=>l(a===e?0:e),type:`button`,children:(0,Q.jsx)(nn,{size:16})},e))})]}),(0,Q.jsxs)(kd,{children:[(0,Q.jsx)(Ad,{children:d(`comment`)}),(0,Q.jsx)(zd,{disabled:!t,onChange:e=>u(e.target.value),rows:3,spellCheck:!1,value:o})]})]})}function Yu({hashes:e,hashing:t}){let n=T(),[r,i]=(0,H.useState)(``);if(t||!e)return(0,Q.jsxs)(Qd,{children:[n(`calculating`),`…`]});if(e.error)return(0,Q.jsx)(df,{children:e.error});let a=(e.items??[]).filter(e=>e.value.length>0),o=r.trim().toLowerCase(),s=o.length>0?a.some(e=>e.value.toLowerCase()===o):null;return(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(vd,{children:a.map(e=>(0,Q.jsx)(ed,{label:e.name,value:(0,Q.jsxs)($d,{children:[(0,Q.jsx)(ef,{children:e.value}),(0,Q.jsx)(tf,{onClick:()=>void navigator.clipboard.writeText(e.value),title:n(`copy`),type:`button`,children:(0,Q.jsx)(yn,{size:11})})]}),wrap:!0},e.name))}),(0,Q.jsxs)(nf,{children:[(0,Q.jsx)(rf,{children:n(`paste_a_hash_to_compare`)}),(0,Q.jsx)(af,{onChange:e=>i(e.target.value),placeholder:`…`,spellCheck:!1,value:r}),s!==null&&(0,Q.jsx)(of,{$ok:s,children:n(s?`hash_matches`:`hash_does_not_match`)})]})]})}function Xu({info:e,mode:t,recursive:n,advanced:r,onAdvanced:i,onRecursive:a,onChange:o}){let s=T(),c=(0,H.useMemo)(()=>Gu.map((e,n)=>(t&e.bit)===0?`-`:`rwx`[n%3]).join(``),[t]),l=4|!!e.directory,u=6|!!e.directory,d=[{value:0,label:s(`no_access`)},{value:l,label:s(`view_only`)},{value:u,label:s(`can_view_and_modify`)}],f=e=>Gu.filter(t=>t.group===e).reduce((e,n)=>(t&n.bit)===0?e:e|n.bit,0),p=(e,n)=>{let r=Gu.filter(t=>t.group===e).reduce((e,t)=>e|t.bit,0);o(t&~r|n&r)};return(0,Q.jsxs)(yd,{children:[(0,Q.jsx)(bd,{children:(0,Q.jsx)(xd,{children:s(`permissions`)})}),(0,Q.jsxs)(vd,{children:[(0,Q.jsx)(ed,{label:s(`permissions`),value:(0,Q.jsx)(Zd,{children:c})}),e.owner&&(0,Q.jsx)(ed,{label:s(`owner`),value:e.owner}),e.group&&(0,Q.jsx)(ed,{label:s(`group`),value:e.group})]}),(0,Q.jsxs)(kd,{children:[(0,Q.jsx)(Ad,{children:s(`permissions`)}),[`owner`,`group`,`other`].map(e=>(0,Q.jsxs)(Bd,{children:[(0,Q.jsx)(Vd,{children:s(e)}),(0,Q.jsx)(Hd,{onChange:t=>p(e,Number(t.target.value)),value:f(e),children:d.map(e=>(0,Q.jsx)(`option`,{value:e.value,children:e.label},e.value))})]},e))]}),(0,Q.jsxs)(kd,{children:[(0,Q.jsxs)(Ud,{onClick:()=>i(!r),type:`button`,children:[(0,Q.jsx)(`span`,{children:r?`▾`:`▸`}),s(`advanced_permissions`)]}),r&&(0,Q.jsxs)(Wd,{children:[(0,Q.jsx)(Kd,{}),(0,Q.jsx)(Kd,{children:s(`read`)}),(0,Q.jsx)(Kd,{children:s(`write`)}),(0,Q.jsx)(Kd,{children:s(`execute`)}),[`owner`,`group`,`other`].map(e=>(0,Q.jsxs)(Gd,{children:[(0,Q.jsx)(Kd,{children:s(e)}),Gu.filter(t=>t.group===e).map(e=>(0,Q.jsx)(Kd,{children:(0,Q.jsx)(`input`,{checked:(t&e.bit)!==0,onChange:n=>o(n.target.checked?t|e.bit:t&~e.bit),type:`checkbox`})},e.bit))]},e))]})]}),e.directory&&(0,Q.jsx)(kd,{children:(0,Q.jsx)(td,{checked:n,label:s(`apply_to_all_subfolders`),onChange:a})})]})}function Zu({value:e}){let t=(0,H.useSyncExternalStore)(de,Te),n=d(e),r=o(e,t);return(0,Q.jsxs)(`span`,{children:[n,r!==n&&(0,Q.jsxs)(Cd,{children:[` · `,r]})]})}function Qu(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function $u(e,t){let n=Object.keys(e);return n.length===Object.keys(t).length&&n.every(n=>e[n]===t[n])}function ed({label:e,value:t,wrap:n=!1}){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(qd,{children:e}),(0,Q.jsx)(Jd,{$wrap:n,title:typeof t==`string`?t:void 0,children:t})]})}function td({checked:e,disabled:t=!1,label:n,onChange:r}){return(0,Q.jsxs)(Xd,{$disabled:t,children:[(0,Q.jsx)(`input`,{checked:e,disabled:t,onChange:e=>r(e.target.checked),type:`checkbox`}),n]})}function nd({info:e}){let t=e.iconSource,n=t?.startsWith(`file:`)?t.slice(5):null,r=ue(n),i=P(t?null:e.path,e.directory,!0);return t?.startsWith(`icon:`)?(0,Q.jsx)(Xr,{name:t.slice(5),size:30}):r?(0,Q.jsx)(cd,{alt:``,src:r}):i?(0,Q.jsx)(cd,{alt:``,src:i}):e.directory?(0,Q.jsx)(Ct,{size:30}):(0,Q.jsx)(V,{size:30})}function rd(e,t){return e.attributes.some(e=>e.toLowerCase()===t.toLowerCase())}function id(e,t){switch(t.toLowerCase()){case`readonly`:return e(`read_only`);case`hidden`:return e(`hidden`);case`system`:return e(`system`);case`directory`:return e(`folder`);case`archive`:return e(`archive`);case`compressed`:return e(`compressed`);case`encrypted`:return e(`encrypted`);case`reparsepoint`:return e(`link`);case`temporary`:return e(`temporary`);default:return t}}var ad=A.div`
    position: fixed;
    inset: 0;
    z-index: 3400;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${$e}
`,od=A.div`
    display: flex;
    flex-direction: column;
    width: min(540px, 100%);
    max-height: min(760px, 88vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${R}
`,sd=A.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    padding: 16px 18px 12px;
`,cd=A.img`
    width: 34px;
    height: 34px;
    object-fit: contain;
`,ld=A.button`    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 38px;
    height: 38px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: var(--radius-sm);
    background: none;
    color: var(--accent-primary);
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color);
        background: var(--bg-input);
    }

    &:disabled {
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,ud=A.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
    flex: 1;
`,dd=A.div`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fd=A.input`
    width: 100%;
    padding: 3px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 13px;
    font-weight: 600;

    &:focus {
        border-color: var(--border-color-focus);
        outline: none;
    }

    &:disabled {
        border-color: transparent;
        background: none;
    }
`,pd=A.div`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,md=A.hr`
    height: 0;
    margin: 0;
    border: 0;
    border-top: 1px solid var(--border-color);
`,hd=A.div`
    display: flex;
    gap: 2px;
    padding: 8px 18px 0;
`,gd=A.button`
    padding: 6px 12px;
    border: 0;
    border-bottom: 2px solid ${({$active:e})=>e?`var(--accent-primary)`:`transparent`};
    background: none;
    color: ${({$active:e})=>e?`var(--text-primary)`:`var(--text-muted)`};
    font: inherit;
    font-size: 11.5px;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`,_d=A.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`,vd=A.div`
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 7px 12px;
    padding: 12px 18px 14px;
`,yd=A.div`
    display: flex;
    flex-direction: column;
`,bd=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px 18px 0;
`,xd=A.div`
    color: var(--text-muted);
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
`,Sd=A.button`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,Cd=A.span`
    color: var(--text-muted);
`,wd=A.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 18px 14px;
`,Td=A.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: var(--text-muted);
    font-size: 11px;
`,Ed=A.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: var(--bg-input);
`,Dd=A.div`
    height: 100%;
    width: ${({$width:e})=>e}%;
    background: ${({$tone:e})=>e};
    border-radius: 3px;
`,Od=A.div`
    color: var(--text-muted);
    font-size: 10.5px;
    text-align: right;
`,kd=A.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 18px 14px;
`,Ad=A.div`
    color: var(--text-muted);
    font-size: 11px;
`,jd=A.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
`,Md=A.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 2px;
`,Nd=A.div`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,Pd=A.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 8px;
    border: 1px solid ${({$on:e,$color:t})=>e?t:`var(--border-color)`};
    border-radius: 10px;
    background: ${({$on:e,$color:t})=>e?t:`transparent`};
    color: ${({$on:e,$ink:t})=>e?t:`var(--text-secondary)`};
    font: inherit;
    font-size: 10.5px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: ${({$color:e})=>e};
    }

    &:disabled {
        opacity: 0.6;
        cursor: default;
    }
`,Fd=A.input`
    flex: 1 1 90px;
    min-width: 70px;
    padding: 3px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11px;

    &:focus {
        border-color: var(--border-color-focus);
        outline: none;
    }
`,Id=A.button`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 3px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 10.5px;
    cursor: pointer;

    &:hover:not(:disabled) {
        border-color: var(--border-color-hover);
        background: var(--bg-card-hover);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`,Ld=A.div`
    display: flex;
    gap: 2px;
`,Rd=A.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    padding: 0;
    border: 0;
    background: none;
    color: ${({$on:e})=>e?`var(--accent-primary)`:`var(--text-muted)`};
    cursor: pointer;

    &:hover:not(:disabled) {
        color: var(--accent-primary);
    }

    &:disabled {
        cursor: default;
    }
`,zd=A.textarea`
    width: 100%;
    padding: 6px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
    resize: vertical;

    &:focus {
        border-color: var(--border-color-focus);
        outline: none;
    }
`,Bd=A.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Vd=A.span`
    flex: 0 0 96px;
    color: var(--text-muted);
    font-size: 11.5px;
`,Hd=A.select`
    flex: 1;
    padding: 4px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
`,Ud=A.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    align-self: flex-start;
    padding: 0;
    border: 0;
    background: none;
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
    cursor: pointer;

    span {
        color: var(--text-muted);
        font-size: 10px;
    }
`,Wd=A.div`
    display: grid;
    grid-template-columns: 96px repeat(3, 1fr);
    gap: 5px 10px;
    margin-top: 6px;
`,Gd=A.div`
    display: contents;
`,Kd=A.div`
    color: var(--text-primary);
    font-size: 11px;

    &:first-child {
        color: var(--text-muted);
    }

    input {
        accent-color: var(--accent-primary);
        width: 13px;
        height: 13px;
    }
`,qd=A.div`
    color: var(--text-muted);
    font-size: 11px;
    line-height: 1.5;
`,Jd=A.div`
    overflow: ${({$wrap:e})=>e?`visible`:`hidden`};
    color: var(--text-primary);
    font-size: 11.5px;
    line-height: 1.5;
    text-overflow: ellipsis;
    ${({$wrap:e})=>e?`overflow-wrap: anywhere;`:`white-space: nowrap;`}
`,Yd=A.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    align-items: center;
`,Xd=A.label`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    color: ${({$disabled:e})=>e?`var(--text-muted)`:`var(--text-primary)`};
    font-size: 11.5px;
    cursor: ${({$disabled:e})=>e?`default`:`pointer`};

    input {
        accent-color: var(--accent-primary);
        width: 13px;
        height: 13px;
    }
`,Zd=A.span`
    font-family: var(--font-mono);
`,Qd=A.p`
    margin: 0;
    padding: 14px 18px;
    color: var(--text-muted);
    font-size: 11.5px;
`,$d=A.span`
    display: flex;
    align-items: flex-start;
    gap: 6px;
    min-width: 0;
`,ef=A.span`
    min-width: 0;
    overflow-wrap: anywhere;
    font-family: var(--font-mono);
    font-size: 10.5px;
    line-height: 1.45;
`,tf=A.button`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 18px;
    height: 18px;
    padding: 0;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-muted);
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,nf=A.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 18px 14px;
`,rf=A.span`
    color: var(--text-muted);
    font-size: 11px;
`,af=A.input`
    width: 100%;
    padding: 5px 7px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 10.5px;

    &:focus {
        border-color: var(--border-color-focus);
        outline: none;
    }
`,of=A.span`
    color: ${({$ok:e})=>e?`#4ade80`:`#fca5a5`};
    font-size: 11px;
    font-weight: 600;
`,sf=A.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 320px;
    overflow-y: auto;
    padding: 10px 18px 12px;
`,cf=A.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 2px 0;
`,lf=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,uf=A.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-size: 10.5px;
`,df=A.p`
    margin: 0;
    padding: 0 18px 12px;
    color: #fca5a5;
    font-size: 11.5px;
`,ff=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
`,pf=A.div`
    flex: 1;
`,mf=A.button`
    padding: 4px 2px;
    border: 0;
    background: none;
    color: var(--accent-primary);
    font: inherit;
    font-size: 11px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`,hf=A.button`
    min-width: 74px;
    padding: 6px 14px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }

    &:focus-visible {
        outline: 2px solid var(--border-color-focus);
        outline-offset: 1px;
    }
`,gf=`yafm.conflicts.last`;function _f(e){return e===`overwrite`||e===`rename`||e===`skip`?e:null}function vf({conflicts:e,move:t,defaultAction:n,remember:r,onResolve:i,title:a,subtitle:o}){let s=T(),c=(r?_f(Fe(gf)):null)??_f(n),[l,u]=(0,H.useState)(()=>Object.fromEntries(e.map(e=>[e.source,{action:e.samePath&&c===`overwrite`?`skip`:c,name:e.suggestedName}]))),f=(0,H.useRef)(null),p=(e,t)=>u(n=>({...n,[e]:{...n[e],...t}})),m=t=>u(n=>{let r={...n};for(let n of e)r[n.source]={action:t===`overwrite`&&n.samePath?`skip`:t,name:n.suggestedName};return r}),g=e.every(e=>{let t=l[e.source];return t.action!==null&&(t.action!==`rename`||t.name.trim().length>0)});return(0,H.useEffect)(()=>{f.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i(null)):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[i]),(0,hi.createPortal)((0,Q.jsx)(bf,{onPointerDown:e=>{e.target===e.currentTarget&&i(null)},children:(0,Q.jsxs)(xf,{"aria-label":s(`copy_conflicts`),"aria-modal":`true`,role:`dialog`,children:[(0,Q.jsxs)(Sf,{children:[(0,Q.jsx)(Cf,{children:a??s(`copy_conflicts`)}),(0,Q.jsx)(wf,{children:o??(0,Q.jsxs)(Q.Fragment,{children:[s(t?`move_1_item`:`copy_1_item`),` · `,s(`these_items_already_exist_in_the_target_folder`)]})})]}),e.length>1&&(0,Q.jsxs)(Af,{children:[(0,Q.jsx)(jf,{children:s(`apply_to_all`)}),(0,Q.jsx)(Bf,{$on:!1,onClick:()=>m(`overwrite`),type:`button`,children:s(`overwrite`)}),(0,Q.jsx)(Bf,{$on:!1,onClick:()=>m(`rename`),type:`button`,children:s(`rename`)}),(0,Q.jsx)(Bf,{$on:!1,onClick:()=>m(`skip`),type:`button`,children:s(`skip`)})]}),(0,Q.jsx)(Tf,{children:e.map(e=>{let t=l[e.source],n=e.targetModified>0&&e.sourceModified===e.targetModified,r=e.targetCreated>0&&e.sourceCreated===e.targetCreated,i=e.sourceModified>0&&e.targetModified>0&&e.sourceModified<e.targetModified,a=e.sourceModified>0&&e.targetModified>0&&e.sourceModified>e.targetModified,o=e.sourceCreated>0&&e.sourceCreated>e.targetCreated,c=e.sourceCreated>0&&e.targetCreated>0&&e.sourceCreated<e.targetCreated;return(0,Q.jsxs)(Ef,{children:[(0,Q.jsxs)(Df,{children:[(0,Q.jsxs)(Of,{title:e.source,children:[(0,Q.jsx)(yf,{directory:e.directory,path:e.source}),(0,Q.jsx)(Mf,{children:e.name})]}),(0,Q.jsx)(kf,{children:`→`}),(0,Q.jsxs)(Of,{title:e.destination,children:[(0,Q.jsx)(yf,{directory:e.directory,path:e.destination}),(0,Q.jsx)(Mf,{children:e.name})]}),e.samePath?(0,Q.jsx)(Pf,{children:s(`this_is_the_same_path`)}):e.sourceModified===0?(0,Q.jsx)(Nf,{$older:!1,$newer:!1}):(0,Q.jsx)(Nf,{$older:i,$newer:a,children:s(i?`source_is_older`:a?`source_is_newer`:`same_time`)})]}),(0,Q.jsxs)(Ff,{children:[(0,Q.jsx)(`span`,{}),(0,Q.jsx)(If,{children:s(`source`)}),(0,Q.jsx)(If,{children:s(`destination`)}),(0,Q.jsxs)(Lf,{children:[s(`modified`),n&&(0,Q.jsxs)(Q.Fragment,{children:[` · `,s(`same_time`)]})]}),(0,Q.jsx)(Rf,{$new:a,children:d(e.sourceModified)}),(0,Q.jsx)(Rf,{$new:i,children:e.targetModified>0?d(e.targetModified):`—`}),(0,Q.jsxs)(Lf,{children:[s(`created`),r&&(0,Q.jsxs)(Q.Fragment,{children:[` · `,s(`same_time`)]})]}),(0,Q.jsx)(Rf,{$new:o,children:d(e.sourceCreated)}),(0,Q.jsx)(Rf,{$new:c,children:e.targetCreated>0?d(e.targetCreated):`—`}),!e.directory&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Lf,{children:s(`size`)}),(0,Q.jsx)(Rf,{$new:e.sourceSize>e.targetSize,children:h(e.sourceSize)}),(0,Q.jsx)(Rf,{$new:e.targetSize>e.sourceSize,children:e.targetSize>0?h(e.targetSize):`—`})]})]}),(0,Q.jsxs)(zf,{children:[(0,Q.jsx)(Bf,{$on:t.action===`overwrite`,disabled:e.samePath,onClick:()=>p(e.source,{action:`overwrite`}),type:`button`,children:s(`overwrite`)}),(0,Q.jsx)(Bf,{$on:t.action===`rename`,onClick:()=>p(e.source,{action:`rename`}),type:`button`,children:s(`rename`)}),(0,Q.jsx)(Bf,{$on:t.action===`skip`,onClick:()=>p(e.source,{action:`skip`}),type:`button`,children:s(`skip`)})]}),t.action===`rename`&&(0,Q.jsxs)(Vf,{children:[(0,Q.jsx)(`input`,{onChange:t=>p(e.source,{name:t.target.value}),spellCheck:!1,value:t.name}),(0,Q.jsx)(Hf,{onClick:()=>p(e.source,{name:e.suggestedName}),type:`button`,children:s(`auto_name`)})]}),t.action===`overwrite`&&e.directory&&(0,Q.jsx)(Pf,{children:s(`replace_the_whole_folder`)})]},e.source)})}),(0,Q.jsxs)(Uf,{children:[(0,Q.jsx)(Wf,{}),(0,Q.jsx)(Gf,{onClick:()=>i(null),type:`button`,children:s(`cancel`)}),(0,Q.jsx)(Gf,{$primary:!0,disabled:!g,onClick:()=>{if(!g)return;let t=new Set,n=e.map(e=>{let n=l[e.source],r=n.action;return t.add(r),{source:e.source,action:r,name:r===`rename`?n.name.trim():null}});if(r&&t.size===1){let[e]=[...t];we(gf,e)}i(n)},ref:f,type:`button`,children:s(`ok`)})]})]})}),document.body)}function yf({path:e,directory:t}){let n=P(e??null,t);return n?(0,Q.jsx)(`img`,{alt:``,height:22,src:n,width:22}):t?(0,Q.jsx)(Ct,{size:22}):(0,Q.jsx)(V,{size:22})}var bf=A.div`
    position: fixed;
    inset: 0;
    z-index: 3450;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${$e}
`,xf=A.div`
    display: flex;
    flex-direction: column;
    width: min(640px, 100%);
    max-height: min(780px, 88vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${R}
`,Sf=A.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 15px 18px 10px;
`,Cf=A.div`
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
`,wf=A.div`
    color: var(--text-muted);
    font-size: 10.5px;
`,Tf=A.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
    padding: 0 18px 12px;
`,Ef=A.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Df=A.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,Of=A.span`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex: 1;
`,kf=A.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-size: 12px;
`,Af=A.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 18px 10px;
`,jf=A.span`
    margin-right: 4px;
    color: var(--text-muted);
    font-size: 9.5px;
`,Mf=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Nf=A.span`
    flex: 0 0 auto;
    margin-left: auto;
    color: ${({$older:e,$newer:t})=>e?`#fbbf24`:t?`#4ade80`:`var(--text-muted)`};
    font-size: 9.5px;
    font-weight: ${({$newer:e})=>e?600:400};
`,Pf=A.span`
    flex: 1;
    color: #fbbf24;
    font-size: 9.5px;
    text-align: right;
`,Ff=A.div`
    display: grid;
    grid-template-columns: 62px minmax(0, 1fr) minmax(0, 1fr);
    gap: 2px 8px;
    padding-left: 22px;
`,If=A.span`
    color: var(--text-muted);
    font-size: 9px;
    text-transform: uppercase;
`,Lf=A.span`
    color: var(--text-muted);
    font-size: 9.5px;
`,Rf=A.span`
    overflow: hidden;
    color: ${({$new:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    font-family: var(--font-mono);
    font-size: 9.5px;
    font-weight: ${({$new:e})=>e?600:400};
    text-overflow: ellipsis;
    white-space: nowrap;

    &::before {
        content: ${({$new:e})=>e?`"● "`:`""`};
        color: var(--accent-primary);
        font-size: 7px;
    }
`,zf=A.div`
    display: flex;
    gap: 4px;
    padding-left: 22px;
`,Bf=A.button`
    padding: 3px 9px;
    border: 1px solid ${({$on:e})=>e?`var(--border-color-focus)`:`var(--border-color)`};
    border-radius: 999px;
    background: ${({$on:e})=>e?`rgba(var(--accent-rgb), 0.18)`:`transparent`};
    color: ${({$on:e})=>e?`var(--accent-primary)`:`var(--text-secondary)`};
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`,Vf=A.div`
    display: flex;
    gap: 5px;
    padding-left: 22px;

    input {
        flex: 1;
        min-width: 0;
        padding: 3px 6px;
        border: 1px solid var(--border-color);
        border-radius: var(--radius-sm);
        background: var(--bg-secondary);
        color: var(--text-primary);
        font: inherit;
        font-size: 10.5px;

        &:focus {
            border-color: var(--border-color-focus);
            outline: none;
        }
    }
`,Hf=A.button`
    flex: 0 0 auto;
    padding: 3px 8px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-secondary);
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    &:hover {
        border-color: var(--border-color-hover);
        color: var(--text-primary);
    }
`,Uf=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-top: 1px solid var(--border-color);
`,Wf=A.div`
    flex: 1;
`,Gf=A.button`
    min-width: 74px;
    padding: 6px 14px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    background: ${({$primary:e})=>e?`rgba(var(--accent-rgb), 0.18)`:`var(--bg-input)`};
    color: ${({$primary:e})=>e?`var(--accent-primary)`:`var(--text-primary)`};
    font: inherit;
    font-size: 12px;
    cursor: pointer;

    &:hover:not(:disabled) {
        background: var(--bg-card-hover);
    }

    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`;function Kf(){let e=T(),[t,n]=(0,H.useState)(null);(0,H.useEffect)(()=>E.on(e=>{let t=e;t.type===`fs.elevation.ask`&&t.data&&n(t.data)}),[]);let r=e=>{let r=t;n(null),r&&E.request(`fs.elevation.answer`,{token:r.token,allow:e})},i=(t=>{switch(t){case`delete`:return e(`delete`);case`rename`:return e(`rename`);case`copy`:return e(`copy`);case`moveTo`:return e(`move`);case`extractArchive`:return e(`extract_archive`);case`newFolder`:case`newFolderAt`:return e(`new_folder`);case`newFile`:case`newFileAt`:return e(`new_file`);case`restoreRecycle`:return e(`restore`);case`writeFile`:return e(`save`);default:return``}})(t?.action??``);return(0,Q.jsx)(Ge,{confirmLabel:e(`run_as_administrator`),message:e(`this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again`,{path:t?.path??``,action:i.length>0?i.toLowerCase():e(`ok`).toLowerCase()}),onCancel:()=>r(!1),onConfirm:()=>r(!0),open:t!==null,title:e(`administrator_rights_required`)})}function qf(){let e=T(),[t,n]=(0,H.useState)(null),[r,i]=(0,H.useState)(``),a=(0,H.useRef)(null),o=(0,H.useRef)(null);(0,H.useEffect)(()=>(He((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>He(null)),[]),(0,H.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,hi.createPortal)((0,Q.jsx)(Jf,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,Q.jsxs)(Yf,{role:`dialog`,"aria-modal":`true`,children:[(0,Q.jsx)(Xf,{children:e(`archive_password`)}),(0,Q.jsx)(Zf,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,Q.jsx)(Qf,{title:t.archive,children:t.archive}),(0,Q.jsx)($f,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,Q.jsxs)(ep,{children:[(0,Q.jsx)(tp,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,Q.jsx)(np,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Jf=A.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${$e}
`,Yf=A.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${R}
`,Xf=A.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Zf=A.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Qf=A.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$f=A.input`
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
`,ep=A.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,tp=A.button`
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
`,np=A(tp)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function rp({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=T(),v=(0,H.useRef)(null),y=c??_(`search_this_folder`);(0,H.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,Q.jsxs)(ip,{children:[(0,Q.jsx)(en,{}),(0,Q.jsx)(ap,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(op,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&(0,Q.jsx)(sp,{disabled:i===0,onClick:g,title:_(`select_all_matches`),type:`button`,children:(0,Q.jsx)(Ht,{size:12})}),(0,Q.jsx)(sp,{$chevron:!0,onClick:()=>b(u),title:_(`previous_match_shift_enter`),type:`button`,children:(0,Q.jsx)(Gt,{size:12})}),(0,Q.jsx)(sp,{$chevron:!0,$down:!0,onClick:()=>b(d),title:_(`next_match_enter`),type:`button`,children:(0,Q.jsx)(Gt,{size:12})})]}),(0,Q.jsx)(cp,{$on:n,onClick:()=>b(f),title:_(`match_case`),type:`button`,children:`Aa`}),(0,Q.jsx)(cp,{$on:r,onClick:()=>b(p),title:_(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,Q.jsx)(lp,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,Q.jsx)(mt,{size:12}):(0,Q.jsx)(Qt,{size:12})}),(0,Q.jsx)(sp,{onClick:h,title:_(`close_search_esc`),type:`button`,children:(0,Q.jsx)(wn,{size:12})})]})}var ip=A.div`
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
    ${ze}
`,ap=A.input`
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
`,op=A.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,sp=A.button`
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
`,cp=A.button`
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
`,lp=A(cp)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function up({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=T(),s=Wr(),[c,l]=(0,H.useState)(!1),[u,d]=(0,H.useState)(``),[f,p]=(0,H.useState)([]),[m,h]=(0,H.useState)(0),[g,_]=(0,H.useState)(null),[v,y]=(0,H.useState)(null),[b,x]=(0,H.useState)(null),S=(0,H.useRef)(null),C=(0,H.useRef)(null),w=(0,H.useRef)(0);(0,H.useEffect)(()=>{if(!Ds(e)){x(null);return}let t=Os(e);if(!t){x(null);return}let n=!0;return xs().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,H.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,H.useEffect)(()=>{r&&r!==w.current&&(w.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,H.useEffect)(()=>{c&&S.current?.select()},[c]),(0,H.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let ee=()=>{d(e.replace(/\\/g,`/`)),l(!0)},E=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,H.useEffect)(()=>{if(!c){p([]);return}let e=mp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{Oe(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let D=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,H.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=C.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,Q.jsxs)(bp,{onPointerDown:e=>e.stopPropagation(),ref:C,children:[(0,Q.jsxs)(wp,{children:[(0,Q.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?D(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):E(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:S,spellCheck:!1,value:u}),(0,Q.jsx)(Tp,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,Q.jsx)(wn,{size:12})}),(0,Q.jsx)(Tp,{$apply:!0,onClick:E,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,Q.jsx)(Ht,{size:14})})]}),f.length>0&&g&&(0,hi.createPortal)((0,Q.jsx)(xp,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,Q.jsxs)(Sp,{$active:t===m,onClick:t=>D(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,Q.jsx)(Ho,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,Q.jsx)(Cp,{children:e.name})]},e.path))}),document.body)]});let O=t?[{label:t,path:e,icon:n}]:dp(e,b)??pp(e,s.places);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(hp,{onClick:ee,title:o(`click_to_type_a_path`),children:O.map((t,n)=>(0,Q.jsxs)(gp,{$last:n===O.length-1,children:[n>0&&(0,Q.jsx)(vp,{children:(0,Q.jsx)(Gt,{size:9})}),(0,Q.jsxs)(yp,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,Q.jsx)(_p,{children:(0,Q.jsx)(Ha,{place:t.place,size:13})}):t.icon&&(0,Q.jsx)(_p,{children:t.icon}),t.label]})]},t.path))}),v&&(0,Q.jsx)(Ne,{items:[{label:o(`open`),icon:(0,Q.jsx)(Xt,{size:14}),onSelect:()=>i(v.path)},{label:o(`open_in_new_tab`),icon:(0,Q.jsx)(sn,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`copy_as_path`),icon:(0,Q.jsx)(yn,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...Ml(v.path)?[{label:o(`open_with`),icon:(0,Q.jsx)(Tt,{size:14}),onSelect:()=>void dr(v.path)},{label:o(`properties`),icon:(0,Q.jsx)(_t,{size:14}),onSelect:()=>void cr([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function dp(e,t){let n=Os(e);if(!n)return null;let r=ks(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,Q.jsx)(vn,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function fp(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function pp(e,t){let r=fp(e),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=r.findIndex(t=>n(t.path,e.path));t>i&&(i=t,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function mp(e){if(Ml(e)||Ds(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var hp=A.div`
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
`,gp=A.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,_p=A.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,vp=A.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,yp=A.button`
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
`,bp=A.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,xp=A.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${et}
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
`,Sp=A.button`
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
`,Cp=A.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wp=A.div`
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
`,Tp=A.button`
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
`;function Ep({places:e,drives:r,recent:i,recentLimit:a,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],hiddenPanels:p=[],asideRef:m,onNavigate:g,onOpenView:_}){let[y,b]=(0,H.useState)([]),x=T(),[S,C]=(0,H.useState)(null),w=Wr();(0,H.useEffect)(()=>{We().then(e=>{C(e),b(za(e).filter(e=>e.pinned))},()=>{C(null),b([])})},[l]),(0,H.useEffect)(()=>{if(!E.available)return;let e=y.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return E.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>E.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[y,c]);let ee=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let r=e.find(e=>n(e.path,t));return{name:S?.placeNames?.[t]??r?.name??(v(t)||t),path:t,kind:`folder`,icon:r?.icon??S?.placeIcons?.[t]??null}}),D=s===`files`;return(0,Q.jsxs)(Pp,{ref:m,onKeyDown:e=>{if(e.key===`Enter`||e.key===` `){e.stopPropagation();return}if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return;let t=[...e.currentTarget.querySelectorAll(`button:not([disabled])`)];if(t.length===0)return;let n=t.indexOf(document.activeElement);n<0||(e.preventDefault(),e.stopPropagation(),t[e.key===`Home`?0:e.key===`End`?t.length-1:e.key===`ArrowDown`?Math.min(n+1,t.length-1):Math.max(n-1,0)]?.focus())},children:[(0,Q.jsxs)(Fp,{children:[!f.includes(`home`)&&(0,Q.jsxs)(Bp,{$active:s===`home`,"data-sidebar-active":s===`home`?`true`:void 0,onClick:e=>_(`home`,Pr(e)),title:x(`overview`),type:`button`,children:[(0,Q.jsx)(Nt,{}),(0,Q.jsx)(Hp,{children:x(`overview`)})]}),!f.includes(`recycle`)&&(0,Q.jsxs)(Bp,{$active:s===`recycle`,"data-sidebar-active":s===`recycle`?`true`:void 0,onClick:e=>_(`recycle`,Pr(e)),title:x(`recycle_bin`),type:`button`,children:[(0,Q.jsx)(Tn,{}),(0,Q.jsx)(Hp,{children:x(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,Q.jsxs)(Bp,{$active:s===`gallery`,"data-sidebar-active":s===`gallery`?`true`:void 0,onClick:e=>_(`gallery`,Pr(e)),title:x(`gallery`),type:`button`,children:[(0,Q.jsx)(jt,{}),(0,Q.jsx)(Hp,{children:x(`gallery`)})]})]}),y.filter(e=>!p.includes(e.kind)).map(e=>(0,Q.jsxs)(Lp,{children:[(0,Q.jsxs)(Bp,{as:`div`,$active:!1,children:[(0,Q.jsx)(Vp,{children:(0,Q.jsx)(Va,{panel:e,size:16})}),(0,Q.jsx)(Hp,{children:x(e.title)})]}),(0,Q.jsx)(Rp,{children:(0,Q.jsxs)(zp,{children:[e.kind===`quick`&&ee(e).map(e=>(0,Q.jsxs)(Bp,{$active:D&&n(o,e.path),"data-sidebar-active":D&&n(o,e.path)?`true`:void 0,onClick:t=>g(e.path,Pr(t)),title:e.path,type:`button`,children:[(0,Q.jsx)(Ha,{place:e}),(0,Q.jsx)(Hp,{children:e.name})]},e.path)),e.kind===`recent`&&i.slice(0,a).map(e=>{let t=Gr(w,e.path);return(0,Q.jsxs)(Bp,{$active:D&&n(o,e.path),onClick:t=>e.isDirectory?g(e.path,Pr(t)):void Ae(e.path),title:e.path,type:`button`,children:[t&&w.useIcons?(0,Q.jsx)(Ha,{place:t}):(0,Q.jsx)(Ho,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,Q.jsx)(Hp,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,Q.jsx)(kp,{historyVersion:d,onNavigate:g}),e.kind===`drives`&&r.map(e=>{let r=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,Q.jsxs)(Bp,{$active:D&&n(o,e.name),onClick:t=>g(e.name,Pr(t)),title:e.name,type:`button`,children:[(0,Q.jsx)(gt,{}),(0,Q.jsxs)(Hp,{children:[u(e),(0,Q.jsxs)(Up,{children:[h(e.freeSpace),` free`]}),(0,Q.jsx)(Wp,{children:(0,Q.jsx)(Gp,{$used:r,$tone:t(r)})})]})]},e.name)}),e.kind===`favorites`&&(0,Q.jsx)(jp,{favorites:S?.favorites??[],onNavigate:g}),e.kind===`share`&&(0,Q.jsx)(Ap,{onNavigate:g}),(e.kind===`home`||e.kind===`folder`)&&(0,Q.jsx)(Mp,{onNavigate:g,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,Q.jsx)(Ip,{children:(0,Q.jsxs)(Bp,{$active:s===`settings`,"data-sidebar-active":s===`settings`?`true`:void 0,onClick:e=>_(`settings`,Pr(e)),title:x(`settings`),type:`button`,children:[(0,Q.jsx)(_t,{}),(0,Q.jsx)(Hp,{children:x(`settings`)})]})})]})}var Dp=10,Op=40;function kp({historyVersion:e=0,onNavigate:t}){let n=T(),[r,i]=(0,H.useState)(null),a=Wr();return(0,H.useEffect)(()=>{I().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Gr(a,e.path);return(0,Q.jsxs)(Bp,{$active:!1,onClick:n=>t(e.path,Pr(n)),title:b(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,Q.jsx)(Ha,{place:r}):(0,Q.jsx)(Ho,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,Q.jsx)(Hp,{children:r?.name||e.name})]},e.path)})}function Ap({onNavigate:e}){let t=T(),[n,r]=(0,H.useState)(null);(0,H.useEffect)(()=>{xs().then(r,()=>r([]))},[]),(0,H.useEffect)(()=>E.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&r(t.data.peers)}),[]);let i=(n??[]).flatMap(e=>e.paired?e.shares.map(t=>({peer:e,share:t})):[]);return i.length===0?(0,Q.jsx)(Bp,{as:`div`,$active:!1,children:(0,Q.jsx)(Hp,{children:t(`nothing_is_shared_yet`)})}):(0,Q.jsx)(Q.Fragment,{children:i.map(({peer:t,share:n})=>(0,Q.jsxs)(Bp,{$active:!1,onClick:r=>e(ks(t.id,n.id),Pr(r)),title:`${t.name} · ${n.name}`,type:`button`,children:[(0,Q.jsx)(vn,{size:16}),(0,Q.jsxs)(Hp,{children:[n.name,(0,Q.jsx)(Up,{children:t.name})]})]},`${t.id}:${n.id}`))})}function jp({favorites:e,onNavigate:t}){let n=T(),r=Wr();return e.length===0?(0,Q.jsx)(Bp,{as:`div`,$active:!1,children:(0,Q.jsx)(Hp,{children:n(`no_favorites_yet`)})}):(0,Q.jsx)(Q.Fragment,{children:e.map(e=>{let n=Gr(r,e.path);return(0,Q.jsxs)(Bp,{$active:!1,onClick:n=>e.isDirectory?t(e.path,Pr(n)):void Ae(e.path),title:e.path,type:`button`,children:[n&&r.useIcons?(0,Q.jsx)(Ha,{place:n}):(0,Q.jsx)(Ho,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,Q.jsx)(Hp,{children:n?.name||e.name})]},e.path)})})}function Mp({path:e,onNavigate:t}){let[r,i]=(0,H.useState)(null);(0,H.useEffect)(()=>{e&&(i(null),Oe(e,!1).then(i,()=>i(null)))},[e]),(0,H.useEffect)(()=>{if(e&&E.available)return E.on(t=>{let r=t;r.type===`fs.changed`&&typeof r.data?.path==`string`&&n(r.data.path,e)&&Oe(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,Dp),s=a.filter(e=>!e.isDirectory).slice(0,Op);return(0,Q.jsxs)(Q.Fragment,{children:[o.map(e=>(0,Q.jsx)(Np,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,Q.jsx)(Np,{entry:e,onNavigate:t},e.fullPath))]})}function Np({entry:e,onNavigate:t}){let n=Wr(),r=Gr(n,e.fullPath);return(0,Q.jsxs)(Bp,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Pr(n)):void Ae(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,Q.jsx)(Ha,{place:r}):(0,Q.jsx)(Ho,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,Q.jsx)(Hp,{children:r?.name||e.name})]})}var Pp=A.aside`
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

    &:hover,
    &:focus-within {
        width: 224px;
        padding: 10px 10px;
        background: rgba(var(--bg-rgb), 0.90);
        box-shadow: 14px 0 36px var(--shadow-menu), 0 0 28px rgba(var(--accent-secondary-rgb), 0.06);
        overflow-y: auto;
        scrollbar-width: none;
    }

    &:not(:hover):not(:focus-within) ${()=>Up},
    &:not(:hover):not(:focus-within) ${()=>Wp} {
        display: none;
    }

    &:hover span,
    &:focus-within span {
        opacity: 1;
    }
`,Fp=A.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Ip=A(Fp)`
    margin-top: auto;
`,Lp=A.div`
    display: flex;
    flex-direction: column;
`,Rp=A.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Pp}:hover ${Lp}:hover > &,
    ${Pp}:focus-within ${Lp}:focus-within > & {
        grid-template-rows: 1fr;
    }
`,zp=A.div`
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
`,Bp=A.button`
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
`,Vp=A.span`
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
`,Hp=A.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Up=A.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Wp=A.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Gp=A.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function Kp({tabs:e,onRestore:t,open:n,onOpenChange:r,shortcut:i=``}){let a=T(),o=Rl(),s=(0,H.useRef)(null),c=r;return(0,H.useEffect)(()=>{if(!n)return;let e=e=>{s.current?.contains(e.target)||c(!1)},t=()=>c(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n]),(0,Q.jsxs)(qp,{ref:s,children:[(0,Q.jsx)(Jp,{$active:n,"data-shortcut":i||void 0,onClick:()=>c(!n),title:a(`recently_closed_tabs`),type:`button`,children:(0,Q.jsx)(tn,{size:15})}),n&&(0,Q.jsxs)(Yp,{children:[(0,Q.jsxs)(Xp,{children:[(0,Q.jsxs)(Zp,{children:[(0,Q.jsx)(tn,{size:12}),a(`recently_closed_tabs`)]}),(0,Q.jsx)(Qp,{onClick:()=>c(!1),title:a(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]}),e.length===0?(0,Q.jsx)(im,{children:a(`no_recently_closed_tabs`)}):(0,Q.jsx)($p,{children:[...e].reverse().map((n,r)=>{let i=e.length-1-r,a=Pl(n);return(0,Q.jsxs)(em,{onClick:()=>{c(!1),t(i)},title:n,type:`button`,children:[(0,Q.jsx)(Il,{location:n}),(0,Q.jsxs)(tm,{children:[(0,Q.jsx)(nm,{children:o(n)}),(0,Q.jsx)(rm,{children:a?o(n):n})]})]},`${i}-${n}`)})})]})]})}var qp=A.div`
    position: relative;
    display: flex;
`,Jp=A.button`
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
`,Yp=A.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${et}
    ${Xe}
`,Xp=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Zp=A.span`
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
`,Qp=A.button`
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
`,$p=A.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,em=A.button`
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 12px;
    border: 0;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;

    &:last-child {
        border-bottom: 0;
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.08);
    }

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }
`,tm=A.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,nm=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,rm=A.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,im=A.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,am=A.span`
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
`;function om({tasks:e,onClear:t,open:n,onOpenChange:r,shortcut:i=``}){let a=T(),o=(0,H.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,H.useEffect)(()=>{if(!n)return;let e=e=>{o.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,Q.jsxs)(cm,{ref:o,children:[(0,Q.jsxs)(lm,{$active:n,"data-shortcut":i||void 0,onClick:()=>r(!n),title:s>0?b(a,s,`k_1_operation_running`,`count_operations_running`):a(`status_center`),type:`button`,children:[(0,Q.jsx)(Yt,{size:13}),c>0&&(0,Q.jsx)(am,{children:c>9?`9+`:c})]}),n&&(0,Q.jsxs)(um,{children:[(0,Q.jsxs)(dm,{children:[(0,Q.jsxs)(fm,{children:[(0,Q.jsx)(Yt,{size:12}),a(`status_center`)]}),(0,Q.jsxs)(pm,{children:[(0,Q.jsx)(mm,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:a(`clear_finished`)}),(0,Q.jsx)(hm,{onClick:()=>r(!1),title:a(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]})]}),e.length===0?(0,Q.jsx)(_m,{children:a(`no_operations_yet`)}):(0,Q.jsx)(gm,{children:e.map(e=>(0,Q.jsx)(sm,{task:e},e.id))})]})]})}function sm({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,Q.jsxs)(vm,{children:[(0,Q.jsxs)(ym,{children:[(0,Q.jsx)(bm,{$state:e.state,children:e.state===`done`?(0,Q.jsx)(Ht,{size:10}):e.state===`failed`?(0,Q.jsx)(wn,{size:10}):(0,Q.jsx)(xm,{})}),(0,Q.jsx)(Sm,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,Q.jsxs)(Cm,{children:[h(e.bytesDone),` / `,h(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,Q.jsxs)(Cm,{children:[e.done,` / `,e.total]})]}),i&&(0,Q.jsx)(wm,{children:(0,Q.jsx)(Tm,{$percent:r,$indeterminate:t===0})}),e.error&&(0,Q.jsx)(Em,{children:e.error})]})}var cm=A.div`
    position: relative;
    display: flex;
`,lm=A.button`
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
`,um=A.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${et}
    ${Xe}
`,dm=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,fm=A.span`
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
`,pm=A.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,mm=A.button`
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
`,hm=A.button`
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
`,gm=A.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,_m=A.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,vm=A.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${$e}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,ym=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,bm=A.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,xm=A.span`
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
`,Sm=A.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Cm=A.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,wm=A.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,Tm=A.div`
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
`,Em=A.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Dm(){if(!E.available)return[];try{return(await L.readBlock(`/history`)).rows.map(e=>{let t=km(e.paths);return{id:Number(e.id),label:String(e.label),paths:t.length>0?t.split(``):[],at:Number(e.at),applied:Number(e.applied)!==0,restorable:Number(e.restorable)!==0}})}catch{return(await E.request(`fs.history.list`)).entries}}async function Om(e){return E.available?(await E.request(`fs.history.undoTo`,{id:e})).ok:!1}function km(e){return typeof e==`string`?e:``}function Am({open:e,onOpenChange:t,shortcut:n=``}){let r=T(),[i,a]=(0,H.useState)([]),[o,s]=(0,H.useState)(!1),c=(0,H.useRef)(null),l=t,u=()=>void Dm().then(a,()=>a([]));(0,H.useEffect)(()=>{if(!e)return;u();let t=window.setInterval(u,1e3),n=e=>{c.current?.contains(e.target)||l(!1)},r=()=>l(!1);return window.addEventListener(`pointerdown`,n),window.addEventListener(`blur`,r),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n),window.removeEventListener(`blur`,r)}},[e]);let d=async e=>{s(!0);try{await Om(e),u()}finally{s(!1)}};return(0,Q.jsxs)(Nm,{ref:c,children:[(0,Q.jsx)(Pm,{$active:e,"data-shortcut":n||void 0,onClick:()=>l(!e),title:r(`history`),type:`button`,children:(0,Q.jsx)(cn,{size:14})}),e&&(0,Q.jsxs)(Fm,{children:[(0,Q.jsxs)(Im,{children:[(0,Q.jsxs)(Lm,{children:[(0,Q.jsx)(cn,{size:12}),r(`history`)]}),(0,Q.jsx)(Rm,{onClick:()=>l(!1),title:r(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]}),i.length===0?(0,Q.jsx)(qm,{children:r(`no_operations_yet`)}):(0,Q.jsx)(zm,{children:i.map(e=>(0,Q.jsxs)(Bm,{children:[(0,Q.jsxs)(Vm,{children:[(0,Q.jsxs)(Hm,{children:[(0,Q.jsx)(Mm,{label:e.label}),jm(r,e.label)]}),(0,Q.jsx)(Um,{children:m(e.at)})]}),e.paths.length>0&&(0,Q.jsxs)(Wm,{title:e.paths.join(`
`),children:[e.paths.slice(0,3).join(` · `),e.paths.length>3?` +${e.paths.length-3}`:``]}),(0,Q.jsx)(Gm,{children:(0,Q.jsx)(Km,{disabled:!e.applied||!e.restorable||o,onClick:()=>void d(e.id),type:`button`,children:r(`undo`)})})]},e.id))})]})]})}function jm(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Mm({label:e}){return e.startsWith(`delete`)?(0,Q.jsx)(Tn,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,Q.jsx)(yn,{size:13}):e.startsWith(`rename`)?(0,Q.jsx)(an,{size:13}):e.startsWith(`compress`)?(0,Q.jsx)(rn,{size:13}):e.startsWith(`new`)?(0,Q.jsx)(sn,{size:13}):(0,Q.jsx)(Xt,{size:13})}var Nm=A.div`
    position: relative;
    display: flex;
`,Pm=A.button`
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
`,Fm=A.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${et}
    ${Xe}
`,Im=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Lm=A.span`
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
`,Rm=A.button`
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
`,zm=A.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Bm=A.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Vm=A.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Hm=A.span`
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
`,Um=A.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Wm=A.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Gm=A.div`
    display: flex;
    justify-content: flex-end;
`,Km=A.button`
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
`,qm=A.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Jm=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(Jm||{}),Ym=[0,1],Xm=[1,0],Zm=[2,3],Qm=[3,2],$m={L:Ym,M:Xm,Q:Zm,H:Qm},eh=/^\d*$/,th=/^[A-Z0-9 $%*+./:-]*$/,nh=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,rh=1,ih=40,ah=3,oh=3,sh=40,ch=10,lh=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],uh=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],dh=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<rh||e>ih)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,Jm.Timing),this.setFunctionModule(e,6,e%2==0,Jm.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,ph(r,e));this.setFunctionModule(8,7,ph(r,6)),this.setFunctionModule(8,8,ph(r,7)),this.setFunctionModule(7,8,ph(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,ph(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,ph(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,ph(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=ph(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,Jm.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,Jm.Alignment)}setFunctionModule(e,t,n,r=Jm.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==Oh(t,n))throw RangeError(`Invalid argument`);let r=uh[n[0]][t],i=lh[n[0]][t],a=Math.floor(Dh(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=kh(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=Ah(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(Dh(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=ph(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=ah:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*sh),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*sh}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=ah:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*sh),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*sh}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=oh)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*ch,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function fh(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function ph(e,t){return!!(e>>>t&1)}var mh=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},hh=[1,10,12,14],gh=[2,9,11,13],_h=[4,8,16,16];function vh(e,t){return e[Math.floor((t+7)/17)+1]}function yh(e){let t=[];for(let n of e)fh(n,8,t);return new mh(_h,e.length,t)}function bh(e){if(!Ch(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);fh(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new mh(hh,e.length,t)}function xh(e){if(!wh(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=nh.indexOf(e.charAt(n))*45;r+=nh.indexOf(e.charAt(n+1)),fh(r,11,t)}return n<e.length&&fh(nh.indexOf(e.charAt(n)),6,t),new mh(gh,e.length,t)}function Sh(e){return e===``?[]:Ch(e)?[bh(e)]:wh(e)?[xh(e)]:[yh(Eh(e))]}function Ch(e){return eh.test(e)}function wh(e){return th.test(e)}function Th(e,t){let n=0;for(let r of e){let e=vh(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function Eh(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function Dh(e){if(e<rh||e>ih)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function Oh(e,t){return Math.floor(Dh(e)/8)-lh[t[0]][e]*uh[t[0]][e]}function kh(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=jh(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=jh(n,2)}return t}function Ah(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=jh(t,e))}return n}function jh(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function Mh(e,t,n=1,r=40,i=-1,a=!0){if(!(rh<=n&&n<=r&&r<=ih)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=Oh(o,t)*8,i=Th(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[Xm,Zm,Qm])a&&s<=Oh(o,e)*8&&(t=e);let c=[];for(let t of e){fh(t.mode[0],4,c),fh(t.numChars,vh(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=Oh(o,t)*8;fh(0,Math.min(4,l-c.length),c),fh(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)fh(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new dh(o,t,u,i)}function Nh(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?Sh(e):Array.isArray(e)?[yh(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=Mh(c,$m[n],i,a,o,r),u=Ph({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function Ph(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=Jm.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function Fh(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Ih(e,t={}){let n=Nh(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${Fh(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${Fh(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function Lh({currentFolder:e,open:t,onOpenChange:r,shortcut:i=``}){let a=T(),[o,s]=(0,H.useState)(null),[c,l]=(0,H.useState)(!1),u=(0,H.useRef)(null),d=r;(0,H.useEffect)(()=>{if(!t)return;let e=()=>void _s().then(s,()=>void 0);e();let n=window.setInterval(e,2500),r=e=>{u.current?.contains(e.target)||d(!1)},i=()=>d(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(n),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]),(0,H.useEffect)(()=>{let e=()=>void _s().then(s,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let f=async e=>{l(!0);try{s(await e())}finally{l(!1)}},p=o?.shares.some(t=>n(t.path,e))??!1;return(0,Q.jsxs)(Rh,{ref:u,children:[(0,Q.jsxs)(zh,{$active:t,"data-shortcut":i||void 0,onClick:()=>d(!t),title:a(`share_folders`),type:`button`,children:[(0,Q.jsx)(vn,{size:15}),o&&o.shares.length>0&&(0,Q.jsx)(am,{children:o.shares.length>9?`9+`:o.shares.length})]}),t&&(0,Q.jsxs)(Bh,{children:[(0,Q.jsxs)(Vh,{children:[(0,Q.jsxs)(Hh,{children:[(0,Q.jsx)(Ut,{size:12}),a(`share`)]}),(0,Q.jsx)(Uh,{onClick:()=>d(!1),title:a(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]}),(0,Q.jsxs)(Wh,{children:[(0,Q.jsxs)(Gh,{children:[(0,Q.jsx)(hn,{size:15}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:o?.deviceName||a(`this_device`)}),(0,Q.jsx)(Xh,{children:o?.fingerprint??``})]})]}),o?.shares.length===0&&(0,Q.jsx)(Zh,{children:a(`no_folders_are_shared_yet`)}),o?.shares.map(e=>(0,Q.jsxs)(Qh,{children:[(0,Q.jsxs)($h,{children:[(0,Q.jsx)(eg,{title:e.path,children:e.name}),(0,Q.jsx)(ng,{disabled:c,onClick:()=>void f(()=>ys(e.id)),title:a(`stop_sharing`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]}),(0,Q.jsx)(tg,{title:e.path,children:e.path}),(0,Q.jsxs)(rg,{children:[(0,Q.jsxs)(ig,{$active:e.mode===`client`,onClick:()=>void f(()=>bs(e.id,`client`)),title:a(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,Q.jsx)(hn,{size:11}),a(`app`)]}),(0,Q.jsxs)(ig,{$active:e.mode===`web`,onClick:()=>void f(()=>bs(e.id,`web`)),title:a(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,Q.jsx)(St,{size:11}),a(`web`)]})]})]},e.id)),(0,Q.jsxs)(ag,{disabled:c||e.length===0||p,onClick:()=>void f(()=>vs(e,`client`)),title:p?a(`this_folder_is_already_shared`):e,type:`button`,children:[(0,Q.jsx)(sn,{size:12}),a(`share_this_folder`)]}),o?.webRunning&&(0,Q.jsxs)(og,{children:[(0,Q.jsxs)(sg,{children:[(0,Q.jsx)(St,{size:12}),a(`browser_access`)]}),(0,Q.jsxs)(qh,{children:[(0,Q.jsx)(Jh,{children:o.urls.map(e=>(0,Q.jsx)(cg,{onClick:()=>void M(e),type:`button`,children:e},e))}),o.preferredUrl&&(0,Q.jsx)(Kh,{value:o.preferredUrl})]}),(0,Q.jsx)(Xh,{children:a(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Rh=A.div`
    position: relative;
    display: flex;
`,zh=A.button`
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
`,Bh=A.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${et}
    ${Xe}
`,Vh=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Hh=A.span`
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
`,Uh=A.button`
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
`,Wh=A.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,Gh=A.div`
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
`;function Kh({value:e}){let t=T(),n=(0,H.useMemo)(()=>Ih(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,Q.jsx)(Yh,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var qh=A.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Jh=A.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,Yh=A.div`
    flex-shrink: 0;
    width: 84px;
    height: 84px;
    padding: 6px;
    border-radius: var(--radius-sm);
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.28);

    svg {
        display: block;
        width: 100%;
        height: 100%;
    }
`,Xh=A.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,Zh=A.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Qh=A.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,$h=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,eg=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,tg=A.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ng=A.button`
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
`,rg=A.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,ig=A.button`
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
`,ag=A.button`
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
`,og=A.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,sg=A.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,cg=A.button`
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
`;function lg(){let e=T();return(0,Q.jsx)(ug,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var ug=A.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function dg({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a,open:o,onOpenChange:s,shortcut:c=``}){let l=T(),[u,d]=(0,H.useState)(!1),f=o??u,p=s??d,m=(0,H.useRef)(null);(0,H.useEffect)(()=>{if(!f)return;let e=()=>p(!1),t=e=>{m.current?.contains(e.target)||p(!1)},n=e=>{e.key===`Escape`&&p(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[f]),(0,H.useEffect)(()=>{a&&p(!1)},[a]);let h=e.columns,g=e=>{let t=new Set(h);t.has(e)?t.delete(e):t.add(e);let r=Us.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,Q.jsxs)(fg,{ref:m,children:[(0,Q.jsx)(pg,{$active:f,"data-shortcut":c||void 0,disabled:a,onClick:()=>p(!f),title:l(`view`),type:`button`,children:e.mode===`grid`?(0,Q.jsx)(Dt,{size:14}):(0,Q.jsx)(xt,{size:14})}),f&&(0,Q.jsxs)(mg,{children:[(0,Q.jsxs)(hg,{children:[(0,Q.jsx)(pt,{size:11}),l(`view`)]}),(0,Q.jsxs)(_g,{children:[(0,Q.jsxs)(vg,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,Q.jsx)(xt,{size:12}),` `,l(`list`)]}),(0,Q.jsxs)(vg,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,Q.jsx)(Dt,{size:12}),` `,l(`grid`)]})]}),(0,Q.jsxs)(hg,{children:[(0,Q.jsx)(xt,{size:11}),l(`list_icon_size`)]}),(0,Q.jsxs)(yg,{children:[(0,Q.jsx)(`input`,{"aria-label":l(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,Q.jsxs)(bg,{children:[e.iconSize,`px`]})]}),(0,Q.jsxs)(hg,{children:[(0,Q.jsx)(Dt,{size:11}),l(`grid_size`)]}),(0,Q.jsxs)(yg,{children:[(0,Q.jsx)(`input`,{"aria-label":l(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,Q.jsxs)(bg,{children:[e.gridSize,`px`]})]}),(0,Q.jsxs)(hg,{children:[(0,Q.jsx)(Kt,{size:11}),l(`columns`),(0,Q.jsx)(lg,{}),(0,Q.jsx)(gg,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:l(`reset_column_widths`),type:`button`,children:l(`reset_widths`)})]}),Us.map(e=>(0,Q.jsxs)(xg,{children:[(0,Q.jsx)(`input`,{checked:h.includes(e.id),onChange:()=>g(e.id),type:`checkbox`}),(0,Q.jsx)(`span`,{children:l(e.label)})]},e.id)),(0,Q.jsxs)(xg,{children:[(0,Q.jsx)(`input`,{checked:h.includes(`linkTarget`),onChange:()=>g(`linkTarget`),type:`checkbox`}),(0,Q.jsx)(`span`,{children:l(`link_target_after_the_name`)})]}),(0,Q.jsxs)(hg,{children:[(0,Q.jsx)(Qt,{size:11}),l(`preview_panel`),(0,Q.jsx)(lg,{})]}),(0,Q.jsxs)(xg,{children:[(0,Q.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,Q.jsx)(`span`,{children:l(`preview_under_the_list`)})]})]})]})}var fg=A.div`
    position: relative;
    display: flex;
    height: 100%;
`,pg=A.button`
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
`,mg=A.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${et}
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
`,hg=A.div`
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
`,gg=A.button`
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
`,_g=A.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,vg=A.button`
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
`,yg=A.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,bg=A.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,xg=A.label`
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
`,Sg=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Q.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),Cg=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Q.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),wg=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Q.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),Tg=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,Q.jsx)(`path`,{d:`M2 5h6`})}),Eg=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,Q.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),Dg=e=>(0,Q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,Q.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,Q.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function Og({tabs:e,activeId:t,closedTabs:n,onRestoreClosed:r,onSelect:i,onClose:a,onNewTab:o,onReorder:s,onTransferToTab:c,view:l,onViewChange:u,onColumns:d,showImages:f,onShowImages:p,tasks:m,onClearTasks:h,activityOpen:g,onActivityOpenChange:_,panel:v,onPanelChange:y,trayCount:b,trayVisible:x,onToggleTray:S,split:C,canSplit:w,onToggleSplit:ee,details:E,canDetails:O,onToggleDetails:te,shortcuts:k,currentFolder:A}){let j=T(),ne=D(),re=N(),[M,ie]=(0,H.useState)({left:!1,right:!1}),[ae,oe]=(0,H.useState)(null),[se,ce]=(0,H.useState)(null),le=(0,H.useRef)(null),ue=(0,H.useRef)(null),de=(0,H.useRef)(null),P=(0,H.useCallback)(()=>{let e=ue.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ie(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,H.useEffect)(()=>{P();let e=ue.current;if(!e)return;let t=new ResizeObserver(P);return t.observe(e),()=>t.disconnect()},[P,e.length]),(0,H.useEffect)(()=>()=>{le.current&&window.clearTimeout(le.current.timer)},[]),(0,H.useEffect)(()=>{de.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let fe=e=>ue.current?.scrollBy({left:e,behavior:`smooth`}),pe=()=>{le.current&&window.clearTimeout(le.current.timer),le.current=null,ce(null)};return(0,Q.jsxs)(Mg,{children:[(0,Q.jsx)(Ng,{children:(0,Q.jsx)(hn,{size:19})}),(0,Q.jsxs)(Pg,{children:[M.left&&(0,Q.jsx)(Ig,{onClick:()=>fe(-180),title:j(`scroll_tabs_left`),type:`button`,children:(0,Q.jsx)(Sg,{})}),(0,Q.jsx)(Fg,{onScroll:P,onWheel:e=>{let t=ue.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:ue,children:e.map(e=>(0,Q.jsxs)(Lg,{$active:e.id===t,$dragging:ae===e.id,$dropTarget:se===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Go(t.dataTransfer)||!kg(e)||(t.preventDefault(),le.current?.id===e.id))return;pe(),ce(e.id);let n=window.setTimeout(()=>{i(e.id),le.current=null},500);le.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(le.current?.id===e.id||se===e.id)&&pe()},onDragEnd:()=>{oe(null),pe()},onDragOver:t=>{(ae||Go(t.dataTransfer)&&kg(e))&&(t.preventDefault(),Go(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>oe(e.id),onDrop:t=>{if(t.preventDefault(),ae)s(ae,e.id);else if(kg(e)&&Go(t.dataTransfer)){let{paths:n,move:r}=Ko(t);n.length>0&&(i(e.id),c(n,e.path,!t.ctrlKey&&r))}oe(null),pe()},onClick:()=>i(e.id),ref:e.id===t?de:void 0,title:e.path||e.title,type:`button`,children:[(0,Q.jsx)(Ag,{tab:e}),(0,Q.jsx)(Rg,{children:e.title}),e.partner&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(zg,{children:`|`}),(0,Q.jsx)(jg,{place:e.partner.place}),(0,Q.jsx)(Rg,{children:e.partner.title})]}),(0,Q.jsx)(Bg,{"data-shortcut":Y(k.closeTab),onClick:t=>{t.stopPropagation(),a(e.id)},title:j(`close_tab`),children:(0,Q.jsx)(wg,{})})]},e.id))}),M.right&&(0,Q.jsx)(Ig,{onClick:()=>fe(180),title:j(`scroll_tabs_right`),type:`button`,children:(0,Q.jsx)(Cg,{})}),(0,Q.jsx)(Vg,{"data-shortcut":Y(k.newTab),onClick:o,title:j(`new_tab`),type:`button`,children:(0,Q.jsx)(sn,{size:13})})]}),(0,Q.jsx)(Hg,{...re}),(0,Q.jsxs)(Ug,{children:[(0,Q.jsx)(Gg,{$active:C,"data-shortcut":Y(k.splitView),disabled:!w,onClick:ee,title:j(C?`close_split_view`:`split_view`),type:`button`,children:(0,Q.jsx)(Kt,{size:15})}),(0,Q.jsx)(Gg,{$active:E,"data-shortcut":Y(k.detailsPanel),disabled:!O,onClick:te,title:j(E?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,Q.jsx)(pt,{size:15})}),(0,Q.jsxs)(Wg,{$active:x,"data-shortcut":Y(k.fileTray),onClick:S,title:j(x?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,Q.jsx)(Ft,{size:14}),b>0&&(0,Q.jsx)(am,{children:b>9?`9+`:b})]}),(0,Q.jsx)(Kp,{onRestore:r,tabs:n,open:v===`closedTabs`,onOpenChange:e=>y(e?`closedTabs`:null),shortcut:Y(k.closedTabsPanel)}),(0,Q.jsx)(Am,{open:v===`history`,onOpenChange:e=>y(e?`history`:null),shortcut:Y(k.historyPanel)}),(0,Q.jsx)(Lh,{currentFolder:A,open:v===`share`,onOpenChange:e=>y(e?`share`:null),shortcut:Y(k.sharePanel)}),(0,Q.jsx)(om,{tasks:m,onClear:h,open:g,onOpenChange:_,shortcut:Y(k.statusCenter)}),(0,Q.jsx)(dg,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:u,onColumns:d,onShowImages:p,showImages:f,view:l,open:v===`view`,onOpenChange:e=>y(e?`view`:null),shortcut:Y(k.viewMenu)}),(0,Q.jsx)(Kg,{onClick:ne.minimize,title:j(`minimize`),type:`button`,children:(0,Q.jsx)(Tg,{})}),(0,Q.jsx)(Kg,{onClick:ne.toggleMaximize,title:ne.maximized?j(`restore`):j(`maximize`),type:`button`,children:ne.maximized?(0,Q.jsx)(Dg,{}):(0,Q.jsx)(Eg,{})}),(0,Q.jsx)(qg,{onClick:ne.close,title:j(`close`),type:`button`,children:(0,Q.jsx)(wg,{})})]})]})}function kg(e){return e.kind===`files`&&(!y(e.path)||x(e.path))}function Ag({tab:e}){switch(e.kind){case`home`:return(0,Q.jsx)(Mt,{size:13});case`settings`:return(0,Q.jsx)(_t,{size:13});case`recycle`:return(0,Q.jsx)(Tn,{size:13});default:return e.archive?(0,Q.jsx)(rn,{size:13}):(0,Q.jsx)(jg,{place:e.place})}}function jg({place:e}){return e?(0,Q.jsx)(Ha,{place:e,size:13}):(0,Q.jsx)(Ct,{size:13})}var Mg=A.header`
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
`,Ng=A.span`
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
`,Pg=A.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,Fg=A.div`
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
`,Ig=A.button`
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
`,Lg=A.button`
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
`,Rg=A.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zg=A.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Bg=A.span`
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
`,Vg=A.button`
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
`,Hg=A.div`
    flex: 1;
    min-width: 28px;
`,Ug=A.div`
    display: flex;
    flex-shrink: 0;
`,Wg=A.button`
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
`,Gg=A.button`
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
`,Kg=A.button`
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
`,qg=A(Kg)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Jg(){let[e,t]=(0,H.useState)(null),n=(0,H.useRef)(null),r=(0,H.useRef)(void 0);return(0,H.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,hi.createPortal)((0,Q.jsx)(Yg,{tooltip:e}),document.body):null}function Yg({tooltip:e}){let t=(0,H.useRef)(null),[n,r]=(0,H.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,H.useState)(()=>e.bottom+6);return(0,H.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,Q.jsxs)(Xg,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,Q.jsx)(Zg,{children:e.text}),e.shortcut&&(0,Q.jsx)(Qg,{children:e.shortcut})]})}var Xg=A.div`
    position: fixed;
    z-index: 5000;
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: min(360px, calc(100vw - 16px));
    padding: 6px 9px;
    border: 1px solid var(--border-color-hover);
    border-radius: var(--radius-sm);
    // The window's own surface colour, so a light or a custom palette keeps its tooltip light, and
    // translucent enough to see the window behind it; the blur keeps the text there unreadable.
    background: rgba(var(--bg-rgb), var(--tooltip-alpha));
    backdrop-filter: var(--tooltip-blur);
    -webkit-backdrop-filter: var(--tooltip-blur);
    box-shadow: var(--shadow-float);
    pointer-events: none;
    ${$e}
`,Zg=A.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Qg=A.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,$g=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function e_(e){return`"${e.replaceAll(`"`,``)}"`}function t_(e){let t=document.documentElement.style;for(let n of $g){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${e_(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function n_(){return E.available?(await E.request(`app.fonts`)).fonts??[]:[]}function r_({deviceName:e,code:t,onAccept:n,onReject:r}){let i=T(),a=(0,H.useRef)(null);return(0,H.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,hi.createPortal)((0,Q.jsx)(i_,{children:(0,Q.jsxs)(a_,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsxs)(o_,{children:[(0,Q.jsx)(vn,{size:15}),i(`pair_for_sharing`)]}),(0,Q.jsx)(s_,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,Q.jsx)(c_,{children:t}),(0,Q.jsx)(l_,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,Q.jsxs)(u_,{children:[(0,Q.jsx)(d_,{onClick:r,type:`button`,children:i(`reject`)}),(0,Q.jsx)(f_,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var i_=A.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${$e}
`,a_=A.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${R}
`,o_=A.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,s_=A.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,c_=A.div`
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
`,l_=A.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,u_=A.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,d_=A.button`
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
`,f_=A(d_)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,p_=A.button`
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
`,m_=A.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,h_=`modulepreload`,g_=function(e){return`/`+e},__={},v_=function(e){return e.pathname.endsWith(`.css`)},y_=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},b_=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=g_(t,n);let r=s(t),i=v_(r);return y_(__,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:h_,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},x_=(0,H.lazy)(()=>b_(()=>import(`./OverviewView-DiNjlOUR.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6]))),S_=(0,H.lazy)(()=>b_(()=>import(`./SettingsView-MSxIA853.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([7,1,3,4,2,5,6]))),C_=(0,H.lazy)(()=>b_(()=>import(`./GalleryView-DI3D01q4.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([8,1,3,4,2,5]))),w_=(0,H.lazy)(()=>b_(()=>import(`./RecycleView-CCVZj9CK.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([9,1,3,4,2,5,6]))),T_=0,E_=new Set;function D_(e){E_.add(e),E.send({type:`app.navigate.done`,payload:{path:e}})}var O_=20,k_=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function A_(e){return e.history[e.index]??Nl(`home`)}function j_(e){return Pl(A_(e))??`files`}function M_(e){let t=A_(e);return Pl(t)?``:e.listing?.path||t}function N_(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||j_(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function P_(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function F_(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||be().iconSize,gridSize:e.view?.gridSize||t.gridSize||be().gridSize,sort:e.view?.sort??be().sort,sortDescending:e.view?.sortDescending??be().sortDescending,columns:t.columns??be().columns??[]}}function I_(e=Nl(`home`)){return T_+=1,{id:`tab-${T_}`,listing:null,loading:!Pl(e),error:null,history:[e],index:0,fresh:!0,view:null}}function L_(e){return e instanceof Error?e.message:String(e)}function R_(e){let t=Os(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return ks(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function z_(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function B_(e){return y(e)?ge(e):void 0}function V_(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return b(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:h(n)})}function H_(){let e=T(),[t,r]=(0,H.useState)(()=>[I_()]),[o,c]=(0,H.useState)(()=>t[0].id),[u,d]=(0,H.useState)(null),[f,m]=(0,H.useState)(()=>{let e=ut(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[h,C]=(0,H.useState)([]),[w,ee]=(0,H.useState)([]),[D,O]=(0,H.useState)(null),[A,ne]=(0,H.useState)(null),[M,N]=(0,H.useState)(null),ae=ie(),oe=zn(),[ue,de]=(0,H.useState)(null);(0,H.useEffect)(()=>(Gn(e=>de(e)),()=>Gn(null)),[]),(0,H.useEffect)(()=>{if(!ue)return;let t=null,n=!0;return Cr(ue.move?`move`:`copy`,e(`copy_conflicts`)).then(e=>{n?t=e:wr(e)},()=>void 0),()=>{n=!1,wr(t)}},[ue]);let[P,fe]=(0,H.useState)(le),[ve,ye]=(0,H.useState)(0),[Se,Te]=(0,H.useState)(0),[Ee,I]=(0,H.useState)(0),[Ie,Le]=(0,H.useState)(le),[ze,Ve]=(0,H.useState)(0),[He,Ue]=(0,H.useState)(0),[Ge,Ye]=(0,H.useState)(0),[Xe,L]=(0,H.useState)(0),Qe=(0,H.useRef)(Xe);Qe.current=Xe;let[$e,et]=(0,H.useState)([]),[nt,rt]=(0,H.useState)(10),[R,ot]=(0,H.useState)(null),ct=j(s(R?.themeMode)),dt=(0,H.useMemo)(()=>(R?.favorites??[]).map(e=>i(e.path)),[R?.favorites]),[pt,mt]=(0,H.useState)(0),[z,ht]=(0,H.useState)(()=>Dr()),[gt,vt]=(0,H.useState)(0),[xt,Ct]=(0,H.useState)(0),[wt,Tt]=(0,H.useState)(0),[Et,Dt]=(0,H.useState)(!0),[Ot,kt]=(0,H.useState)(()=>{let e=ut(`yafm.preview.width`,320);return e>=220?e:320}),[At,Mt]=(0,H.useState)(null),[Pt,Ft]=(0,H.useState)(null),[It,Lt]=(0,H.useState)({kind:null,info:null}),[B,zt]=(0,H.useState)(`primary`),[Bt,Vt]=(0,H.useState)(null),[Ht,Ut]=(0,H.useState)(null),[Wt,Gt]=(0,H.useState)(null),[Kt,qt]=(0,H.useState)(null),[Jt,Yt]=(0,H.useState)(null),[Zt,V]=(0,H.useState)({primary:0,secondary:0}),[Qt,$t]=(0,H.useState)({primary:null,secondary:null}),[tn,nn]=(0,H.useState)(null),[an,on]=(0,H.useState)([]),[cn,ln]=(0,H.useState)(!1),[fn,pn]=(0,H.useState)(null),mn=(0,H.useRef)(null),[hn,gn]=(0,H.useState)(null),[_n,vn]=(0,H.useState)(``),yn=(0,H.useRef)([]),bn=(0,H.useRef)([]),[xn,Sn]=(0,H.useState)([]),[Cn,wn]=(0,H.useState)([]),[En,Dn]=(0,H.useState)(!1),On=(0,H.useMemo)(()=>En?new Set(Cn.map(e=>e.path)):new Set,[Cn,En]),[kn,An]=(0,H.useState)(!1),[jn,Mn]=(0,H.useState)([]),[Nn,Pn]=(0,H.useState)(null),Fn=(0,H.useRef)(0),[In,Ln]=(0,H.useState)(()=>{let e=Fe(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?P_({x:e.x,y:e.y}):P_({x:Math.max(20,window.innerWidth-340),y:110})}),Rn=(0,H.useCallback)(()=>{Ln(e=>P_(e)),An(!0)},[]),U=t.find(e=>e.id===o)??t[0],W=j_(U),Bn=A_(U),Vn=M_(U),Hn=W===`files`?U.listing?.parent??R_(Vn):null,G=U.splitWith?t.find(e=>e.id===U.splitWith):void 0,Un=W===`files`&&G!==void 0,Wn=G?M_(G):``,Kn=G?G.listing?.parent??R_(Wn):null,Jn=Un&&G&&B===`secondary`?G:U,Zn=R?.defaultView??be(),Qn=F_(Jn,Zn);(0,H.useEffect)(()=>{g(R?.accentColor,R?.secondaryColor,ct)},[R?.accentColor,R?.secondaryColor,ct]),(0,H.useEffect)(()=>{t_(R?.fonts)},[R?.fonts]),(0,H.useEffect)(()=>{l(R?.timeFormat,R?.timeFormatPattern),_(R?.relativeTime,R?.relativeTimeWindowMinutes)},[R?.timeFormat,R?.timeFormatPattern,R?.relativeTime,R?.relativeTimeWindowMinutes]),(0,H.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!R?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[R?.backgroundSource]),(0,H.useEffect)(()=>(me(e=>new Promise(t=>{Pn({id:++Fn.current,prompt:e,resolve:t})})),()=>me(null)),[]),(0,H.useEffect)(()=>{zt(`primary`)},[o]),(0,H.useEffect)(()=>{Le(le),Ue(0),Ye(0)},[W]),(0,H.useEffect)(()=>{Ue(0)},[Ie.query,Ie.matchCase,Ie.regex]),(0,H.useEffect)(()=>{Ue(e=>Ge===0?0:Math.min(e,Ge-1))},[Ge]);let nr=Qn.columns.includes(`linkCount`),ir=(0,H.useMemo)(()=>{let e={},t=za(R),n={};for(let[e,t]of Object.entries(R?.placeNames??{}))n[i(e)]=t;for(let t of h)e[i(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=i(t),a=h.find(e=>i(e.path)===r);e[r]={name:n[r]??a?.name??(v(t)||t),path:t,kind:`folder`,icon:a?.icon??R?.placeIcons?.[t]??null}}return e},[h,R]),ar=(0,H.useMemo)(()=>({places:ir,useIcons:R?.systemIcons===!1}),[ir,R?.systemIcons]),or=R?.defaultView?.showImages??be().showImages,cr=R?.defaultView?.imageStripHeight??be().imageStripHeight,lr=W===`home`?(0,Q.jsx)(Nt,{size:13}):W===`settings`?(0,Q.jsx)(_t,{size:13}):W===`recycle`?(0,Q.jsx)(Tn,{size:13}):W===`gallery`?(0,Q.jsx)(jt,{size:13}):void 0,ur=P.open&&P.query.length>0,dr=(0,H.useDeferredValue)(P),fr=(0,H.useMemo)(()=>ur&&Jn.listing?Jn.listing.entries.filter(e=>Je(e.isDirectory?Kr(ar,e.fullPath,e.name):e.name,dr)).map(e=>e.fullPath):[],[ur,dr,Jn.listing,ar]);(0,H.useEffect)(()=>{ye(0)},[P.query,P.matchCase,P.regex,Jn.listing?.path]);let pr=fr.length===0?-1:Math.min(ve,fr.length-1),mr=(0,H.useCallback)(()=>{fe(e=>({...e,open:!1,query:``})),ye(0)},[]),_r=(0,H.useCallback)(()=>{fe(e=>({...e,open:!0})),Te(e=>e+1)},[]),vr=(0,H.useCallback)(()=>{Le(e=>({...e,open:!0})),Ve(e=>e+1)},[]),yr=(0,H.useCallback)(()=>{Le(le),Ue(0),Ye(0)},[]),Tr=(0,H.useCallback)(e=>{Ue(t=>Ge===0?0:(Math.min(t,Ge-1)+e+Ge)%Ge)},[Ge]),Er=(0,H.useCallback)(e=>{fe(t=>({...t,open:!0,query:t.open?t.query+e:e})),Te(e=>e+1)},[]),Or=(0,H.useCallback)(e=>{ye(t=>fr.length===0?0:(Math.min(t,fr.length-1)+e+fr.length)%fr.length)},[fr.length]),q=(0,H.useRef)({tabs:t,activeId:o,activePane:B});q.current={tabs:t,activeId:o,activePane:B};let kr=(0,H.useRef)(R);kr.current=R;let Mr=(0,H.useRef)(!1),Ir=(0,H.useRef)([]),X=(0,H.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Rr=(0,H.useRef)(new Map),zr=(0,H.useCallback)(e=>{let t=(Rr.current.get(e)??0)+1;return Rr.current.set(e,t),()=>Rr.current.get(e)===t},[]),Br=(0,H.useCallback)((e,t)=>{E.available&&t&&e===N_(q.current)&&E.send({type:`fs.focus`,payload:{path:t}})},[]),Vr=(0,H.useCallback)(async(e,t,n)=>{if(!(t&&Ds(t)))try{let r=(await pe(t,nr)).listing;if(!n()||!r)return;X(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[nr,X]),Z=(0,H.useCallback)(async(e,t,r=!1)=>{let i=zr(e);mr(),Br(e,t);let a=!r||!q.current.tabs.find(t=>t.id===e)?.listing,o=!r&&t!==void 0;X(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&n(i,t);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),t],index:a?e.index:e.index+1}});try{a&&Vr(e,t,i);let n=t&&Ds(t)?await As(t):await Oe(t,!0,nr,Qe.current,t?B_(t):void 0,e);if(!i())return;X(e,e=>({listing:n,view:n.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,r)=>r===e.index?n.path:t):e.history,index:e.index})),!r&&!Ds(n.path)&&Be(n.path).then(()=>mt(e=>e+1))}catch(n){if(!i())return;let a=q.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?M_(a):``,s=R_(o),c=L_(n);if(o&&_e(c)){let n=p(o),a=await Ze(n,!!ge(n));if(a){xe(n,a),i()&&Z(e,t,r);return}}X(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[zr,nr,X,Br,mr,Vr]),Hr=(0,H.useRef)(new Set),Wr=(0,H.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e),r=t?.listing;if(!t||j_(t)!==`files`||!r)return;let i=r.entries.length;if(i<=0||i>=(r.total??0)||qr.current.has(e))return;let a=`${e}|${r.path}|${i}`;if(Hr.current.add(a))try{let t=await tt(r.path,i,r.view?.sort??`name`,r.view?.sortDescending??!1);X(e,e=>{let a=e.listing;return!a||!n(a.path,r.path)||a.entries.length!==i||a.view?.sort!==r.view?.sort?{}:{listing:{...a,entries:[...a.entries,...t.entries],total:t.total}}})}catch{}finally{Hr.current.delete(a)}},[X]),qr=(0,H.useRef)(new Set),Jr=(0,H.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e),r=t?.listing;if(t&&j_(t)===`files`&&r&&!(r.entries.length>=(r.total??0))&&qr.current.add(e))try{let t=[],i=r.entries.length,a=r.total??0;for(;i<a;){let e=await tt(r.path,i,r.view?.sort??`name`,r.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),i+=e.entries.length,a=e.total}if(t.length===0)return;X(e,e=>{let i=e.listing;return!i||!n(i.path,r.path)||i.entries.length!==r.entries.length?{}:{listing:{...i,entries:[...i.entries,...t.flat()],total:a}}})}catch{}finally{qr.current.delete(e)}},[X]),[Yr,Xr]=(0,H.useState)(0),Zr=(0,H.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await Jr(e),(q.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&Xr(e=>e+1)},[Jr]),Qr=Jn.id,$r=j_(Jn),ti=Jn.listing?.entries.length??0,ni=Jn.listing?.total??0;(0,H.useEffect)(()=>{P.open&&P.query.length!==0&&($r!==`files`||ti>=ni||Jr(Qr))},[P.open,P.query,Qr,$r,ti,ni,Jr]);let ri=(0,H.useCallback)((e,t)=>{let n=Fl(t);n&&(Pl(n)?(mr(),zr(e),X(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Z(e,n))},[zr,Z,X,mr]),ii=(0,H.useCallback)(async(e,t,n)=>{if(mr(),Pl(t)){zr(e),X(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=zr(e);Br(e,t),X(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Ds(t)||Vr(e,t,r);let n=Ds(t)?await As(t):await Oe(t,!0,nr,Qe.current,B_(t),e);if(!r())return;X(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=L_(i);if(_e(a)){let i=p(t),a=await Ze(i,!!ge(i));if(a){xe(i,a),r()&&ii(e,t,n);return}}X(e,()=>({listing:{path:t,parent:R_(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:L_(i)}))}},[zr,nr,X,Br,mr,Vr]),ai=(0,H.useCallback)((e,t=!0)=>{let n=I_(e??Nl(`home`));return r(e=>[...e,n]),t&&c(n.id),e&&!Pl(e)&&Z(n.id,e),n.id},[Z]),oi=(0,H.useCallback)(e=>{for(let t of q.current.tabs)j_(t)===`files`&&n(M_(t),e)&&Z(t.id,e,!0)},[Z]),si=(0,H.useCallback)((e,t)=>{let r=v(t);for(let i of q.current.tabs)i.listing?.entries.some(t=>n(t.fullPath,e))&&X(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>n(i.fullPath,e)?{...i,name:r,fullPath:t}:i);return{listing:{...a,entries:o,signature:a.signature+1}}})},[X]),ci=(0,H.useRef)([]);(0,H.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&y(t)&&e.add(i(p(t)))}let n=ci.current.filter(t=>!e.has(t));ci.current=[...e],n.length>0&&it(n)},[t]);let li=(0,H.useCallback)((e,t=!1)=>{t?ai(Nl(e)):ri(q.current.activeId,Nl(e))},[ai,ri]),ui=(0,H.useCallback)(()=>{let e=mn.current;if(!e)return;let t=e.querySelector(`[data-sidebar-active="true"]`),n=e.querySelector(`button:not([disabled])`);(t??n)?.focus()},[]),di=(0,H.useCallback)(e=>{let{tabs:t,activeId:n}=q.current,i=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(bn.current.push(A_(i)),bn.current.length>O_&&bn.current.shift(),Sn([...bn.current])),a.length===0){let e=I_();r([e]),c(e.id);return}let o=t.findIndex(t=>t.id===e);r(a),n===e&&c(a[Math.min(o,a.length-1)].id)},[]),pi=(0,H.useCallback)(()=>{let e=bn.current.pop();if(!e)return;Sn([...bn.current]);let t={...I_(e),fresh:!1};r(e=>[...e,t]),c(t.id),j_(t)===`files`&&Z(t.id,M_(t))},[Z]),mi=(0,H.useCallback)(e=>{let t=bn.current,n=t[e];if(!n)return;t.splice(e,1),Sn([...t]);let i={...I_(n),fresh:!1};r(e=>[...e,i]),c(i.id),j_(i)===`files`&&Z(i.id,M_(i))},[Z]),hi=(0,H.useCallback)((e,t=!1)=>{t?ai(e):ri(N_(q.current),e??Nl(`home`))},[ri,ai]),_i=(0,H.useCallback)(e=>{let{tabs:t,activeId:n}=q.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;c(r[i].id)},[]),vi=(0,H.useCallback)(()=>{let{tabs:e,activeId:t}=q.current,n=e.find(e=>e.id===t);if(!n||j_(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),X(t,()=>({splitWith:void 0})),zt(`primary`);return}let a=M_(n),o={...I_(a),hidden:!0};r(e=>[...e,o]),X(t,()=>({splitWith:o.id})),Z(o.id,a),zt(`primary`)},[Z,X]),yi=(0,H.useCallback)(e=>{kt(e),se(`yafm.preview.width`,e)},[]),bi=(0,H.useCallback)((e,t,n)=>Lt(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),xi=(0,H.useCallback)((e,t)=>bi(`gallery`,e,t),[bi]),Si=(0,H.useCallback)((e,t)=>bi(`recycle`,e,t),[bi]),Ci=Un?B===`secondary`?Pt??At:At??Pt:At,wi=Un&&B===`secondary`?Zt.secondary:Zt.primary,Ti=W===`files`?Ci:It.kind===W?It.info:null,Ei=W===`files`?wi>1?b(e,wi,`k_1_item_selected`,`count_items_selected`):void 0:It.kind===W?It.note:void 0,Di=(0,H.useMemo)(()=>W===`files`&&U.listing?V_(e,U.listing):_n,[W,U.listing,e,_n]),Oi=W===`files`?U.listing?.git??null:null,Ai=Oi?(0,Q.jsxs)(av,{onClick:()=>ai(Oi.root),title:`${Oi.detached?e(`git_detached`):Oi.branch}\n${b(e,Oi.changed,`k_1_change`,`count_changes`)}\n${Oi.root}`,type:`button`,children:[(0,Q.jsx)(yt,{size:11}),(0,Q.jsx)(ov,{children:Oi.detached?e(`git_detached`):Oi.branch||e(`git`)}),Oi.ahead>0&&(0,Q.jsxs)(sv,{children:[`↑`,Oi.ahead]}),Oi.behind>0&&(0,Q.jsxs)(sv,{children:[`↓`,Oi.behind]}),(0,Q.jsx)(cv,{$clean:Oi.changed===0,children:Oi.changed})]}):null,ji=(0,H.useRef)(null),Mi=e=>{e.preventDefault();let t=ji.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);m(r),se(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Ni=(e,t,n)=>{t&&Vt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Pi=(0,H.useCallback)((e,t)=>{V(n=>n[e]===t?n:{...n,[e]:t})},[]),Fi=(0,H.useCallback)(e=>Pi(`primary`,e),[Pi]),Ii=(0,H.useCallback)(e=>Pi(`secondary`,e),[Pi]),Li=(e,t)=>{Zt[e]!==0&&$t(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Ri=async(e,t=!1)=>{let n=Bt;if(Vt(null),!n)return;let r=e===null?await rr(n.directory,t):await sr(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;mr(),nn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},zi=(0,H.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===N_(q.current));t&&t.index>0&&ii(t.id,t.history[t.index-1],t.index-1)},[ii]),Bi=(0,H.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===N_(q.current));t&&t.index<t.history.length-1&&ii(t.id,t.history[t.index+1],t.index+1)},[ii]),Vi=(0,H.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===N_(q.current));t&&j_(t)===`files`&&t.listing?.parent&&hi(t.listing.parent)},[hi]),Hi=(0,H.useRef)(null),Ui=(0,H.useCallback)(()=>{for(let e of q.current.tabs)e.listing&&Z(e.id,e.listing.path,!0)},[Z]),Wi=(0,H.useCallback)(e=>{e.length!==0&&(Mn(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Rn())},[Rn]),Gi=(0,H.useCallback)(async e=>{let t=await $n(e);t.length!==0&&Wi(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Wi]),Ki=(0,H.useCallback)(e=>{let t=new Set(e);Mn(e=>e.filter(e=>!t.has(e.path)))},[]),qi=(0,H.useCallback)(async e=>{let t=kr.current;if(!t)return;let n=await $n(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>i(e.path))),a=n.filter(e=>!r.has(i(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...t,favorites:[...t.favorites??[],...a]};ot(o),await st(o),vt(e=>e+1)},[]),Ji=(0,H.useCallback)(async e=>{let t=kr.current;if(!t)return;let n=new Set(e.map(i)),r=(t.favorites??[]).filter(e=>!n.has(i(e.path)));if(r.length===(t.favorites??[]).length)return;let a={...t,favorites:r};ot(a),await st(a),vt(e=>e+1)},[]),Yi=(0,H.useCallback)(()=>Mn([]),[]),Xi=(0,H.useRef)(-1),Zi=(0,H.useCallback)(e=>{wn(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Dn(e.move),e.entries.length>0&&Rn()},[Rn]),Qi=(0,H.useCallback)(async()=>{if(E.available)try{let e=await K();Xi.current=e.sequence,Zi(e)}catch{}},[Zi]),$i=(0,H.useCallback)(async e=>{e.length!==0&&await qn(e,!1)&&await Qi()},[Qi]),ea=(0,H.useRef)(jn);ea.current=jn;let ta=(0,H.useRef)(kn);ta.current=kn;let na=(0,H.useRef)(!1);(0,H.useEffect)(()=>{let e=R?.trayAutoShow??at().trayAutoShow,t=t=>{e&&Go(t)&&(ta.current||(na.current=!0),Rn())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{na.current&&window.setTimeout(()=>{na.current&&ea.current.length===0&&An(!1),na.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[Rn,R?.trayAutoShow]),(0,H.useEffect)(()=>{let e=()=>Ln(e=>P_(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let ra=(0,H.useCallback)(async()=>{let e=ea.current;if(e.length>0){let t=await $n(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Mn(e=>e.filter(e=>n.has(e.path)))}await Qi()},[Qi]),ia=(0,H.useCallback)(()=>{ra(),Tt(e=>e+1),Ui()},[ra,Ui]),aa=(0,H.useCallback)(e=>{let t=P_(e);Ln(t),we(`yafm.tray.position`,t)},[]),oa=(0,H.useCallback)(()=>{na.current=!1,kn?An(!1):Rn()},[Rn,kn]),sa=(0,H.useCallback)(async(t,n,r)=>{let i=await Yn(t,n,r);i.cancelled||(i.ok?(r&&Ki(t),Tt(e=>e+1),Ui(),Qi()):je(i.error??e(`the_files_could_not_be_transferred`)))},[Ui,Qi,Ki]);(0,H.useEffect)(()=>{if(E.available)return xr().then(e=>{yn.current=e,on(e)},()=>void 0),E.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=yn.current.find(t=>t.id===e.id);return!t||t.state!==e.state});yn.current=n,on(n),r&&ln(!0)})},[]);let ca=(0,H.useCallback)(()=>{Sr().then(()=>xr().then(e=>{yn.current=e,on(e)},()=>void 0))},[]);(0,H.useEffect)(()=>{if(!E.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await K();if(!e||t.sequence===Xi.current)return;Xi.current=t.sequence,Zi(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Zi]);let la=(0,H.useCallback)(async e=>{let t=e?await hr():await gr();t.ok?(Tt(e=>e+1),Ui()):t.error&&!t.error.startsWith(`Nothing to`)&&je(t.error)},[Ui]),da=(0,H.useRef)(nr);(0,H.useEffect)(()=>{da.current!==nr&&(da.current=nr,Ui())},[nr,Ui]);let fa=(0,H.useCallback)((e,t)=>{let{tabs:n}=q.current,r=n.find(t=>t.id===e);if(!r||j_(r)!==`files`)return;let i=M_(r),a=kr.current?.defaultView??be(),o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||be().iconSize,gridSize:r.view?.gridSize||a.gridSize||be().gridSize,sort:r.view?.sort??be().sort,sortDescending:r.view?.sortDescending??be().sortDescending,...t};X(e,()=>({view:o})),Hi.current!==null&&window.clearTimeout(Hi.current),Hi.current=window.setTimeout(()=>{Hi.current=null,Ke(i,o)},250)},[X]),pa=(0,H.useCallback)(e=>{fa(N_(q.current),e)},[fa]),ma=(0,H.useCallback)(e=>{let t=kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be(),columns:e}};ot(n),st(n)},[]),ha=(0,H.useCallback)(e=>{let t=kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be(),showImages:e}};ot(n),st(n)},[]),ga=(0,H.useCallback)(e=>{let t=kr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??be(),imageStripHeight:e}};ot(n),st(n)},[]),_a=(0,H.useCallback)((e,t,n,r)=>{let i=q.current.tabs.find(t=>t.id===e);if(!i||j_(i)!==`files`||!i.listing)return;let a=M_(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));X(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Pe(a,t,n,r)},[X]),va=(0,H.useCallback)((e,t)=>{let n=q.current.tabs.find(t=>t.id===e);if(!n)return;let r=F_(n,kr.current?.defaultView??be());fa(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),Z(e,M_(n),!0)},[fa,Z]),ya=(0,H.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ba=(0,H.useCallback)(()=>{he().then(C,()=>C([]))},[]),xa=(0,H.useCallback)(e=>{let t=(e.openTabs??[]).map(Fl).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...I_(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),c(n[i].id);let a=n[i];return(j_(a)===`files`?Z(a.id,M_(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&j_(e)===`files`&&Z(e.id,M_(e),!0)}),!0},[Z]),Sa=(0,H.useCallback)(e=>{let t=Ir.current;if(Ir.current=[],t.length===0)return;let n=t.filter(e=>!E_.has(e));for(let e of t)n.includes(e)||D_(e);if(n.length===0)return;let{tabs:r}=q.current;if(!e&&r.length===1&&r[0].fresh){ri(r[0].id,n[0]),D_(n[0]);for(let e of n.slice(1))ai(e),D_(e);return}let i=n.map(e=>{let t=ai(e);return D_(e),t}).at(-1);i&&setTimeout(()=>c(i),0)},[ai,ri]),Ca=(0,H.useCallback)(()=>{We().then(e=>{ot(e),rt(e.recentLimit);let t=Ar(e.shortcuts);ht(t),Nr(jr(t,`openInNewTab`)),vt(e=>e+1),Mr.current||(Mr.current=!0,Sa(e.restoreTabs&&xa(e)))},()=>{rt(10),Mr.current=!0,Sa(!1)})},[Sa,xa]),wa=(0,H.useCallback)(()=>{ke().then(et,()=>et([]))},[]),Ta=(0,H.useCallback)(()=>{De().then(ee,()=>ee([]))},[]),Ea=t.filter(e=>!e.hidden),Da=Ea.map(A_),Oa=Da.join(`
`),ka=Math.max(Ea.findIndex(e=>e.id===o),0);(0,H.useEffect)(()=>{if(!R?.restoreTabs)return;let e=setTimeout(()=>void Me(Da,ka),700);return()=>clearTimeout(e)},[Oa,ka,R?.restoreTabs]),(0,H.useEffect)(()=>{let{tabs:e,activeId:t}=q.current,n=e.find(e=>e.id===t);n&&n.fresh&&j_(n)===`files`&&Z(n.id,M_(n),!0),ba(),Ca(),Ta(),re().then(O,()=>O(null))},[Z,ba,Ca,Ta]),(0,H.useEffect)(()=>{if(k().then(ne,()=>ne(null)),E.available)return E.on(e=>{let t=e;t.type===`update.checked`&&t.data&&ne(t.data)})},[]),(0,H.useEffect)(()=>{if(E.available)return E.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&d({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&je(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&je(n.data.error??e(`pairing_failed`))}})},[e]),(0,H.useEffect)(()=>{let e=setInterval(Ta,3e4);return()=>clearInterval(e)},[Ta]),(0,H.useEffect)(()=>{W===`home`&&(wa(),Ta())},[W,U.id,wa,Ta]),(0,H.useEffect)(()=>{if(!E.available)return;let e=E.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=q.current,i=t.data.startup===!0;i&&E_.has(n)?D_(n):i&&!Mr.current?Ir.current.includes(n)||Ir.current.push(n):(i&&r.length===1&&r[0].fresh?ri(r[0].id,n):Pl(n)?ri(N_(q.current),n):ai(n),i&&D_(n))});return E.send({type:`app.ready`}),e},[ri,ai]),(0,H.useEffect)(()=>{if(E.available)return E.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>e.some(e=>e.listing?.path===n)?e.map(e=>e.listing?.path===n?{...e,listing:{...e.listing,folderSizes:{...e.listing.folderSizes,...i}}}:e):e)})},[]),(0,H.useEffect)(()=>{if(E.available)return E.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>e.some(e=>e.listing?.path===n)?e.map(e=>e.listing?.path===n?{...e,listing:{...e.listing,counts:{...e.listing.counts,...i}}}:e):e)})},[]),(0,H.useEffect)(()=>{let e=e=>{if(Lr(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),zi();return}if(e.key===`BrowserForward`){e.preventDefault(),Bi();return}if(e.key===`Escape`&&P.open){e.preventDefault(),mr();return}let t=Fr(e);if(J(z,`closeTab`,t)&&(e.preventDefault(),di(N_(q.current))),J(z,`newTab`,t)&&(e.preventDefault(),ai()),J(z,`reopenTab`,t)&&(e.preventDefault(),pi()),J(z,`goBack`,t)&&(e.preventDefault(),zi()),J(z,`goForward`,t)&&(e.preventDefault(),Bi()),J(z,`goUp`,t)&&(e.preventDefault(),Vi()),J(z,`find`,t)&&(e.preventDefault(),W===`files`?_r():vr()),J(z,`location`,t)&&(e.preventDefault(),Ct(e=>e+1)),J(z,`home`,t)){e.preventDefault();let t=h.find(e=>e.kind===`home`)?.path;t&&hi(t)}J(z,`iconsView`,t)&&(e.preventDefault(),W===`files`&&pa({mode:`grid`})),J(z,`detailsView`,t)&&(e.preventDefault(),W===`files`&&pa({mode:`list`})),J(z,`nextTab`,t)&&(e.preventDefault(),_i(1)),J(z,`previousTab`,t)&&(e.preventDefault(),_i(-1)),J(z,`hidden`,t)&&(e.preventDefault(),Re().then(()=>{Tt(e=>e+1),Ui()})),J(z,`undo`,t)&&(e.preventDefault(),la(!0)),J(z,`redo`,t)&&(e.preventDefault(),la(!1)),J(z,`statusCenter`,t)&&(e.preventDefault(),pn(null),ln(e=>!e)),J(z,`historyPanel`,t)&&(e.preventDefault(),ln(!1),pn(e=>e===`history`?null:`history`)),J(z,`sharePanel`,t)&&(e.preventDefault(),ln(!1),pn(e=>e===`share`?null:`share`)),J(z,`closedTabsPanel`,t)&&(e.preventDefault(),ln(!1),pn(e=>e===`closedTabs`?null:`closedTabs`)),J(z,`viewMenu`,t)&&(e.preventDefault(),W===`files`&&(ln(!1),pn(e=>e===`view`?null:`view`))),J(z,`fileTray`,t)&&(e.preventDefault(),oa()),J(z,`detailsPanel`,t)&&(e.preventDefault(),(W===`files`||W===`recycle`||W===`gallery`)&&Dt(e=>!e)),J(z,`overview`,t)&&(e.preventDefault(),pn(null),ln(!1),li(`home`)),J(z,`recycleBin`,t)&&(e.preventDefault(),pn(null),ln(!1),li(`recycle`)),J(z,`gallery`,t)&&(e.preventDefault(),pn(null),ln(!1),li(`gallery`)),J(z,`settings`,t)&&(e.preventDefault(),pn(null),ln(!1),li(`settings`)),J(z,`sidebar`,t)&&(e.preventDefault(),ui()),J(z,`splitView`,t)?(e.preventDefault(),vi()):Object.keys(z).some(e=>e!==`openInNewTab`&&J(z,e,t))||W!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Er(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[z,W,P.open,di,pi,ai,zi,Bi,Vi,_r,vr,mr,Er,pa,_i,hi,h,Ui,la,vi,li,ui,oa]),(0,H.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),zi()):(e.button===4||e.button===9)&&(e.preventDefault(),Bi())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[zi,Bi]),(0,H.useEffect)(()=>{if(E.available)return E.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:zi();break;case`forward`:Bi()}})},[zi,Bi]);let Aa=(0,H.useMemo)(()=>{let e=new Set;for(let n of t){if(j_(n)!==`files`)continue;let t=M_(n);if(t&&!Ds(t)){if(y(t)){let n=R_(p(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),ja=Aa.join(`\0`);(0,H.useEffect)(()=>{E.available&&E.send({type:`fs.watch`,payload:{paths:Aa,owner:`app`}})},[ja,o]);let Ma=j_(Jn)===`files`?M_(Jn):``;(0,H.useEffect)(()=>{E.available&&E.send({type:`fs.focus`,payload:{path:Ma||null}})},[Ma]),(0,H.useEffect)(()=>{if(E.available)return E.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let r=t.data.path,i=q.current.tabs.filter(e=>j_(e)===`files`&&n(M_(e),r)),a=q.current.tabs.filter(e=>{let t=M_(e);return j_(e)===`files`&&t.length>0&&y(t)&&n(p(t),r)});if(i.length!==0||a.length!==0){lt(r);for(let e of a){let t=q.current.tabs.find(t=>t.id===e.id),i=t?M_(t):``;t&&j_(t)===`files`&&!t.loading&&y(i)&&n(p(i),r)&&Z(e.id,i,!0)}i.length!==0&&Oe(r,!1,nr).then(e=>{for(let t of i){let r=q.current.tabs.find(e=>e.id===t.id);r&&j_(r)===`files`&&n(M_(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=q.current.tabs.find(e=>e.id===t.id);r&&!r.loading&&j_(r)===`files`&&n(M_(r),e.path)&&X(t.id,()=>({listing:e}))},300):X(t.id,()=>({listing:e})))}},()=>void 0)}})},[nr,Z,X]);let Na=U.index>0,Pa=U.index<U.history.length-1,Fa=(e,t)=>{let r=F_(e,Zn),i=e.listing?.path??e.history[e.index]??``,a=y(i),o=a&&x(i);return(0,Q.jsx)(Qs,{platform:D?.platform,confirmDelete:R?.confirmDelete??at().confirmDelete,cutPaths:On,previewVideoAudio:R?.previewVideoAudio??at().previewVideoAudio,previewVideoAutoplay:R?.previewVideoAutoplay??at().previewVideoAutoplay,showDetails:!1,onPreviewInfo:t?Mt:Ft,onActivate:()=>zt(t?`primary`:`secondary`),enableShortcuts:(!Un||(t?B===`primary`:B===`secondary`))&&(!a||o),error:e.error,find:e.id===Jn.id?{...P,currentPath:pr<0?null:fr[pr]}:void 0,selectMatchesToken:e.id===Jn.id?Ee:0,imageStripHeight:cr,listing:e.listing,loading:e.loading,onImageStripHeight:ga,readOnly:a&&!o||Ds(e.listing?.path??``),onOpen:(t,n)=>{n?ai(t):Z(e.id,t)},onOpenFile:(t,n)=>{Ds(t)?Ms(t).catch(e=>void je(L_(e))):S(t)?R?.archiveHandler??at().archiveHandler?n?ai(t):Z(e.id,t):Ae(t):y(t)?(async()=>{let e=await Ce(t,Qe.current,B_(t));if(!e.path&&_e(e.error)){let n=p(t),r=ge(n);r&&qe(n);let i=await Ze(n,!!r);i&&(xe(n,i),e=await Ce(t,Qe.current,i))}e.path?Ae(e.path):e.error&&je(e.error)})():Ae(t)},onRefresh:()=>{let t=e.listing?.path;t&&oi(t)},onLoadMore:()=>void Wr(e.id),onEnsureComplete:()=>void Zr(e.id),selectAllToken:e.id===Jn.id?Yr:0,onRename:si,onSelectionCountChange:t?Fi:Ii,onSetTags:(t,n,r)=>_a(e.id,t,n,r),selectionMenuRequest:t?Qt.primary:Qt.secondary,onSort:t=>va(e.id,t),onPaste:ia,onClipboardChanged:()=>void Qi(),onTransfer:sa,onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:dt,onExtractArchive:(e,t)=>void Wa(e,t),onOpenAsArchive:e=>void Ua(e),onAddToStartMenu:(e,t,n)=>void Ha(e,t,n),openOnSingleClick:R?.openOnSingleClick??at().openOnSingleClick,pendingRename:tn&&t===(B===`primary`)&&n(tn.directory,e.listing?.path??``)?tn.path:null,pendingRenameToken:tn?.token??0,refreshToken:wt,shortcuts:z,showCheckboxes:R?.showCheckboxes??at().showCheckboxes,showImages:or,view:r})},Ia=P.open&&(0,Q.jsx)(rp,{current:pr,focusToken:Se,matchCase:P.matchCase,mode:P.mode,onClose:mr,onMatchCase:()=>fe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>fe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Or(1),onPrevious:()=>Or(-1),onQuery:e=>fe(t=>({...t,query:e})),onRegex:()=>fe(e=>({...e,regex:!e.regex})),query:P.query,regex:P.regex,total:fr.length,onSelectMatches:fr.length>0?()=>I(e=>e+1):void 0}),La=W===`files`&&y(Vn),Ra=La&&x(Vn),Ba=La&&U.listing?.archiveEncrypted===!0,Va=async(t,n,r=!1)=>{let i=p(t),a=await F(i,n,Qe.current,B_(i),r);if(!a.ok&&_e(a.error)){let e=ge(i);e&&qe(i);let t=await Ze(i,!!e);t&&(xe(i,t),a=await F(i,n,Qe.current,t,r))}a.ok?(oi(n),ce(),Z(U.id,n,!0)):je(`${e(`could_not_extract_the_archive`)}${a.error?`\n${a.error}`:``}`)},Ha=async(t,n,r)=>{let i=await Xn(t,n,r);i.ok?r&&!i.pinned&&je(i.error??e(`the_shortcut_was_added_but_windows_did_not_pin_it`)):je(i.error??e(`could_not_add_the_shortcut`))},Ua=async t=>{await ft(t)?(a(t),Z(U.id,t)):je(e(`this_file_could_not_be_opened_as_an_archive`))},Wa=async(e,t)=>{let r=p(e),i=R_(r);if(!i)return;let a=t.endsWith(`-delete`),o=a?t.slice(0,-7):t;if(o===`choose`){let e=await ei(i);e&&await Va(r,e);return}let s=o===`named`;if(o===`auto`){let e=n(r,Vn)?U.listing?.entries??[]:(await Oe(r,!1,!1,Qe.current,B_(r))).entries;s=!(e.length===1&&e[0].isDirectory)}let c=i.includes(`\\`)?`\\`:`/`,l=s?`${i.replace(/[\\/]+$/,``)}${c}${z_(r)}`:i;await Va(r,l,a)},Ga=async e=>{La&&await Wa(Vn,e)},Ka=async()=>{La&&await Wa(Vn,`choose`)},qa=(0,Q.jsxs)(q_,{children:[(0,Q.jsx)(J_,{"data-shortcut":Y(z.goBack),disabled:!Na,onClick:e=>{U.index>0&&Pr(e)?ai(U.history[U.index-1]):zi()},onContextMenu:e=>{U.index<=0||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:U,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Q.jsx)(dn,{})}),(0,Q.jsx)(J_,{"data-shortcut":Y(z.goForward),disabled:!Pa,onClick:e=>{U.index<U.history.length-1&&Pr(e)?ai(U.history[U.index+1]):Bi()},onContextMenu:e=>{U.index>=U.history.length-1||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:U,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Q.jsx)(Xt,{})}),(0,Q.jsx)(J_,{"data-shortcut":Y(z.goUp),disabled:W!==`files`||!Hn,onClick:e=>{Hn&&(Pr(e)?ai(Hn):hi(Hn))},title:e(`up_one_level`),type:`button`,children:(0,Q.jsx)(Rt,{})}),(0,Q.jsx)(up,{focusToken:xt,icon:lr,label:W===`files`?void 0:e(kl[W]),onContextMenu:W===`files`?(e,t,n)=>qt({x:t,y:n,path:e}):void 0,onNavigate:hi,path:W===`files`?Vn:Bn}),W===`files`&&(!La||Ra)&&(0,Q.jsx)(J_,{onClick:e=>Ni(e,Vn,()=>void Z(U.id,Vn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Q.jsx)(sn,{})}),(0,Q.jsx)(J_,{"data-shortcut":Y(z.find),onClick:()=>W===`files`?_r():vr(),title:e(`search`),type:`button`,children:(0,Q.jsx)(en,{})}),Zt.primary>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(m_,{}),(0,Q.jsx)(J_,{onClick:e=>Li(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,Q.jsx)(bt,{})})]}),(0,Q.jsx)(`span`,{ref:gn,style:{display:`contents`}}),La&&(0,Q.jsxs)(Y_,{children:[(0,Q.jsx)(m_,{}),Ba&&(0,Q.jsxs)(X_,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Q.jsx)(un,{size:12}),e(`encrypted`)]}),(0,Q.jsx)(J_,{onClick:()=>void Ka(),onContextMenu:e=>{e.preventDefault(),Ut({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,Q.jsx)(rn,{})}),(0,Q.jsx)(gi,{icon:(0,Q.jsx)(St,{size:15}),onChange:e=>{let t=Number(e);L(t),Qe.current=t,La&&Z(U.id,Vn,!0)},options:k_.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(k_.find(e=>e.value===String(Xe))?.label??`auto`)}`,value:String(Xe)})]})]}),Ja=Ie.open?{...Ie,index:He}:null,Ya=t=>{let n=Pl(t);return n?e(kl[n]):Kr(ar,t,Ll(t)||e(`files`))};return(0,Q.jsx)(Ur,{value:ar,children:(0,Q.jsxs)(U_,{$rounded:ae,children:[(0,Q.jsx)(fu,{settings:R,theme:ct}),(0,Q.jsx)(Og,{activeId:U.id,closedTabs:xn,onClose:di,onNewTab:()=>ai(),onRestoreClosed:mi,onReorder:ya,onTransferToTab:sa,onSelect:c,onViewChange:pa,onColumns:ma,onShowImages:ha,showImages:or,tasks:an,onClearTasks:ca,activityOpen:cn,onActivityOpenChange:ln,panel:fn,onPanelChange:pn,trayCount:jn.length+Cn.length,trayVisible:kn,onToggleTray:oa,split:Un,canSplit:W===`files`,onToggleSplit:vi,details:Et,canDetails:W===`files`||W===`recycle`||W===`gallery`,onToggleDetails:()=>Dt(e=>!e),currentFolder:W===`files`&&!Ds(Vn)?Vn:``,shortcuts:z,view:Qn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=j_(n),i=M_(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?M_(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Gr(ar,i):void 0,archive:r===`files`&&y(i),split:!!a,title:r===`files`?Kr(ar,i,v(i)||e(`files`)):e(kl[r]),partner:a?{title:Kr(ar,o,v(o)||e(`files`)),place:Gr(ar,o)}:void 0}})}),(0,Q.jsxs)(W_,{children:[(0,Q.jsx)(Ep,{activeKind:W,asideRef:mn,currentPath:W===`files`?Bn:``,drives:w,historyVersion:pt,onNavigate:hi,onOpenView:li,homePath:h.find(e=>e.kind===`home`)?.path??``,places:h,recent:$e,recentLimit:nt,version:gt}),(0,Q.jsxs)(G_,{children:[(0,Q.jsxs)(nv,{children:[(0,Q.jsxs)(rv,{children:[W!==`files`&&qa,(0,Q.jsx)(K_,{children:(0,Q.jsxs)(H.Suspense,{fallback:null,children:[W!==`files`&&Ie.open&&(0,Q.jsx)(rp,{current:He,focusToken:ze,matchCase:Ie.matchCase,mode:Ie.mode,onClose:yr,onMatchCase:()=>Le(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Le(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Tr(1),onPrevious:()=>Tr(-1),onQuery:e=>Le(t=>({...t,query:e})),onRegex:()=>Le(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:Ie.query,regex:Ie.regex,total:Ge,onSelectMatches:W===`gallery`||W===`recycle`?()=>I(e=>e+1):void 0}),W===`files`?Un&&G?(0,Q.jsxs)(Q_,{ref:ji,children:[(0,Q.jsxs)($_,{style:{flex:f},children:[(0,Q.jsxs)(Z_,{$active:B===`primary`,onPointerDown:()=>zt(`primary`),children:[(0,Q.jsx)(J_,{"data-shortcut":Y(z.goBack),disabled:!Na,onClick:e=>{let t=U.index-1;t<0||(Pr(e)?ai(U.history[t]):ii(U.id,U.history[t],t))},onContextMenu:e=>{U.index<=0||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:U,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Q.jsx)(dn,{})}),(0,Q.jsx)(J_,{"data-shortcut":Y(z.goForward),disabled:!Pa,onClick:e=>{let t=U.index+1;t>=U.history.length||(Pr(e)?ai(U.history[t]):ii(U.id,U.history[t],t))},onContextMenu:e=>{U.index>=U.history.length-1||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:U,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Q.jsx)(Xt,{})}),(0,Q.jsx)(J_,{"data-shortcut":Y(z.goUp),disabled:!Hn,onClick:e=>{Hn&&(Pr(e)?ai(Hn):Z(U.id,Hn))},title:e(`up_one_level`),type:`button`,children:(0,Q.jsx)(Rt,{})}),(0,Q.jsx)(up,{focusToken:B===`primary`?xt:void 0,onContextMenu:(e,t,n)=>qt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?ai(e):void Z(U.id,e),path:Vn}),(0,Q.jsx)(J_,{onClick:e=>Ni(e,Vn,()=>void Z(U.id,Vn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Q.jsx)(sn,{})}),(0,Q.jsx)(J_,{"data-shortcut":Y(z.find),onClick:_r,title:e(`search`),type:`button`,children:(0,Q.jsx)(en,{})}),Zt.primary>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(m_,{}),(0,Q.jsx)(J_,{onClick:e=>Li(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,Q.jsx)(bt,{})})]})]}),Fa(U,!0),B===`primary`&&Ia]}),(0,Q.jsx)(ev,{onDoubleClick:()=>m(.5),onPointerDown:Mi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)($_,{$enter:!0,style:{flex:1-f},children:[(0,Q.jsxs)(Z_,{$active:B===`secondary`,onPointerDown:()=>zt(`secondary`),children:[(0,Q.jsx)(J_,{"data-shortcut":Y(z.goBack),disabled:G.index<=0,onClick:e=>{let t=G.index-1;t<0||(Pr(e)?ai(G.history[t]):ii(G.id,G.history[t],t))},onContextMenu:e=>{G.index<=0||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:G,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Q.jsx)(dn,{})}),(0,Q.jsx)(J_,{"data-shortcut":Y(z.goForward),disabled:G.index>=G.history.length-1,onClick:e=>{let t=G.index+1;t>=G.history.length||(Pr(e)?ai(G.history[t]):ii(G.id,G.history[t],t))},onContextMenu:e=>{G.index>=G.history.length-1||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:G,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Q.jsx)(Xt,{})}),(0,Q.jsx)(J_,{"data-shortcut":Y(z.goUp),disabled:!Kn,onClick:e=>{Kn&&(Pr(e)?ai(Kn):Z(G.id,Kn))},title:e(`up_one_level`),type:`button`,children:(0,Q.jsx)(Rt,{})}),(0,Q.jsx)(up,{focusToken:B===`secondary`?xt:void 0,onContextMenu:(e,t,n)=>qt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?ai(e):void Z(G.id,e),path:Wn}),(0,Q.jsx)(J_,{onClick:e=>Ni(e,Wn,()=>void Z(G.id,Wn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Q.jsx)(sn,{})}),(0,Q.jsx)(J_,{"data-shortcut":Y(z.find),onClick:_r,title:e(`search`),type:`button`,children:(0,Q.jsx)(en,{})}),Zt.secondary>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(m_,{}),(0,Q.jsx)(J_,{onClick:e=>Li(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,Q.jsx)(bt,{})})]})]}),Fa(G,!1),B===`secondary`&&Ia]})]}):(0,Q.jsxs)(Q.Fragment,{children:[qa,(0,Q.jsxs)(tv,{children:[Fa(U,!0),Ia]})]}):W===`home`?(0,Q.jsx)(x_,{platform:D?.platform,drives:w,find:Ja,historyVersion:pt,onSearchMatches:Ye,homePath:h.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Ta,onHistoryChanged:()=>mt(e=>e+1),onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:dt,onExtractArchive:(e,t)=>void Wa(e,t),onOpenAsArchive:e=>void Ua(e),onAddToStartMenu:(e,t,n)=>void Ha(e,t,n),settingsVersion:gt,theme:ct,onOpen:hi,onLayoutChanged:Ca,onPlacesChanged:C,onRecentCleared:wa,places:h,recent:$e,recentLimit:nt,visibilityVersion:wt}):W===`settings`?(0,Q.jsx)(S_,{appInfo:D,find:Ja,focusSection:M,onSearchMatches:Ye,onSettingsChanged:Ca}):W===`gallery`?(0,Q.jsx)(C_,{platform:D?.platform,toolbarSlot:hn,onStatusChange:vn,confirmDelete:R?.confirmDelete??at().confirmDelete,find:Ja,onSearchMatches:Ye,openOnSingleClick:R?.openOnSingleClick??at().openOnSingleClick,onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:dt,onExtractArchive:(e,t)=>void Wa(e,t),onOpenAsArchive:e=>void Ua(e),onAddToStartMenu:(e,t,n)=>void Ha(e,t,n),shortcuts:z,showCheckboxes:R?.showCheckboxes??at().showCheckboxes,selectMatchesToken:Ee,onPreviewChange:xi,view:Qn}):(0,Q.jsx)(w_,{find:Ja,toolbarSlot:hn,onStatusChange:vn,onOpenLocation:hi,onShowDetails:()=>Dt(!0),platform:D?.platform,selectMatchesToken:Ee,onPreviewChange:Si})]})},W)]}),(W===`files`||W===`gallery`||W===`recycle`)&&(0,Q.jsx)(ua,{emptyNote:e(`nothing_selected`),info:Ti,onWidth:yi,open:Et,selectionNote:Ei,videoAudio:R?.previewVideoAudio??at().previewVideoAudio,videoAutoplay:R?.previewVideoAutoplay??at().previewVideoAutoplay,width:Ot})]}),(0,Q.jsxs)(fv,{children:[(0,Q.jsx)(`span`,{children:Di}),D?(0,Q.jsxs)(iv,{children:[Ai,(0,Q.jsxs)(`span`,{children:[`v`,D.version,` · `,D.platform]}),D.debug&&(0,Q.jsx)(dv,{children:`debug`}),A?.available&&(0,Q.jsxs)(lv,{onClick:e=>{N(`updates`),li(`settings`,Pr(e))},title:e(`version_version_is_available`,{version:A.latest}),type:`button`,children:[(0,Q.jsx)(uv,{}),e(`update_available`)]})]}):(0,Q.jsxs)(iv,{children:[Ai,(0,Q.jsx)(`span`,{children:e(`browser_preview`)})]})]})]})]}),(0,Q.jsx)(Zo,{clipboardItems:Cn,clipboardMove:En,currentDirectory:W===`files`?Bn:``,items:jn,onAdd:e=>void Gi(e),onClear:Yi,onClose:()=>An(!1),onCopyToClipboard:e=>void $i(e),onPosition:aa,onRemove:Ki,onTransfer:sa,position:In,visible:kn}),Bt&&(0,Q.jsx)(fi,{creationOnly:!0,directory:Bt.directory,menu:{x:Bt.x,y:Bt.y,paths:[],background:!0},onClose:()=>Vt(null),onCreateFile:e=>void Ri(e),onCreateFolder:e=>void Ri(null,e),shortcuts:z}),Kt&&(0,Q.jsx)(fi,{allowCompression:!0,directory:R_(Kt.path)??Kt.path,menu:{x:Kt.x,y:Kt.y,paths:[Kt.path]},onAddToTray:e=>void Gi(e),onAddFavorite:e=>void qi(e),onRemoveFavorite:e=>void Ji(e),favoritePaths:dt,onExtractArchive:(e,t)=>void Wa(e,t),onOpenAsArchive:e=>void Ua(e),onAddToStartMenu:(e,t,n)=>void Ha(e,t,n),onArchiveCreated:e=>{e&&oi(R_(Kt.path)??Kt.path)},onClose:()=>qt(null),onCompressTo:(e,t)=>Yt({paths:e,name:t}),onCopy:(e,t)=>void qn(e,t),onDelete:e=>void tr(e,!1).then(()=>oi(R_(Kt.path)??Kt.path)),onOpen:(e,t)=>t?ai(e):void Z(U.id,e),onOpenFile:e=>void Ae(e),onPaste:e=>void er(e).then(t=>{t.ok&&oi(e)}),onRefresh:()=>oi(Kt.path),shortcuts:z,target:{path:Kt.path,isDirectory:!0}}),Jt&&(0,Q.jsx)(ki,{initialDirectory:R_(Kt?.path??Vn)??Vn,initialName:Jt.name,onCancel:()=>Yt(null),onCompress:async e=>{let t=await br(Jt.paths,e);return!t.ok&&t.error&&je(t.error),t.ok}}),Wt&&(0,Q.jsx)(Ne,{items:[{label:Ya(Wt.tab.history[Wt.tab.index]??``),icon:(0,Q.jsx)(Il,{location:Wt.tab.history[Wt.tab.index]??``}),tooltip:Wt.tab.history[Wt.tab.index]??``,disabled:!0,onSelect:()=>void 0},...Wt.tab.history.map((e,t)=>({path:e,index:t})).filter(({index:e})=>Wt.direction===`back`?e<Wt.tab.index:e>Wt.tab.index).sort((e,t)=>Wt.direction===`back`?t.index-e.index:e.index-t.index).slice(0,24).map(({path:e,index:t})=>({label:Ya(e),icon:(0,Q.jsx)(Il,{location:e}),tooltip:e,onSelect:()=>{let n=Wt.tab;Gt(null),ii(n.id,e,t)}}))],onClose:()=>Gt(null),x:Wt.x,y:Wt.y}),Ht&&(0,Q.jsx)(Ne,{items:[{label:e(`extract_here`),onSelect:()=>void Ga(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Ga(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Ga(`auto`)},{label:e(`extract_here_and_delete`),separatorBefore:!0,onSelect:()=>void Ga(`here-delete`)},{label:e(`extract_to_a_folder_and_delete_archive`),onSelect:()=>void Ga(`named-delete`)},{label:e(`auto_extract_and_delete_archive`),onSelect:()=>void Ga(`auto-delete`)}],onClose:()=>Ut(null),x:Ht.x,y:Ht.y}),Nn&&(0,Q.jsx)(_u,{action:Nn.prompt.action,delaySeconds:Nn.prompt.delaySeconds,hits:Nn.prompt.hits,onCancel:()=>{Nn.resolve(!1),Pn(null)},onConfirm:()=>{Nn.resolve(!0),Pn(null)},permanent:Nn.prompt.permanent},Nn.id),(0,Q.jsx)(Fu,{}),(0,Q.jsx)(qf,{}),(0,Q.jsx)(Kf,{}),oe&&(0,Q.jsx)(Ku,{request:oe}),ue&&(0,Q.jsx)(vf,{conflicts:ue.conflicts,move:ue.move,defaultAction:R?.conflictDefaultAction??at().conflictDefaultAction,remember:R?.conflictRememberChoice??at().conflictRememberChoice,onResolve:e=>{ue.resolve(e),de(null)}}),u&&(0,Q.jsx)(r_,{code:u.code,deviceName:u.deviceName,onAccept:()=>{ws(u.requestId,!0),d(null)},onReject:()=>{ws(u.requestId,!1),d(null)}}),(0,Q.jsx)(Jg,{}),(0,Q.jsx)(te,{})]})})}var U_=A.div`
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
`,W_=A.div`
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
`,G_=A.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,K_=A.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Le}
`,q_=A.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,J_=p_,Y_=A.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,X_=A.span`
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
`,Z_=A.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Q_=A.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,$_=A.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?$e:``}
`,ev=A.div`
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
        ${Ve}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,tv=A.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,nv=A.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,rv=A.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,iv=A.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,av=A.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    max-width: 260px;
    padding: 1px 8px;
    border: 1px solid var(--border-color);
    border-radius: 999px;
    background: rgba(var(--bg-rgb), 0.4);
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;

    svg {
        flex-shrink: 0;
        color: var(--text-muted);
    }

    &:hover {
        border-color: var(--border-color-focus);
        color: var(--text-primary);
    }
`,ov=A.span`
    overflow: hidden;
    max-width: 170px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,sv=A.span`
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,cv=A.span`
    flex-shrink: 0;
    min-width: 15px;
    padding: 0 4px;
    border-radius: 999px;
    background: ${({$clean:e})=>e?`rgba(var(--bg-rgb), 0.6)`:`rgba(var(--accent-rgb), 0.22)`};
    color: ${({$clean:e})=>e?`var(--text-muted)`:`var(--accent-primary)`};
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    text-align: center;
`,lv=A.button`
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
`,uv=A.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,dv=A.span`
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
`,fv=A.footer`
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
`;document.documentElement.dataset.theme=ne()?`dark`:`light`;var pv=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,pv),window.addEventListener(`pagehide`,ot);var mv=document.getElementById(`root`),hv=new URLSearchParams(window.location.search),gv=hv.get(`picker`),_v=hv.get(`filter`)??``,vv=gv===`folder`||gv===`file`||gv===`save`?(0,H.lazy)(()=>b_(()=>import(`./PickerWindow-sTcO0yIP.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([10,1,2,3,4,5,8,0,6]))):null;mv&&Qe().then(e=>{Er(e.shortcuts),l(e.timeFormat,e.timeFormatPattern)}).catch(()=>void 0).then(()=>{dt(),(0,Dn.createRoot)(mv).render((0,Q.jsx)(H.StrictMode,{children:(0,Q.jsx)(O,{children:vv===null?(0,Q.jsx)(H_,{}):(0,Q.jsx)(H.Suspense,{fallback:null,children:(0,Q.jsx)(vv,{defaultExtension:hv.get(`ext`)??``,extensions:_v?_v.split(`;`).filter(Boolean):[],types:hv.get(`types`)??``,typeIndex:Number(hv.get(`type`)??0)||0,initial:hv.get(`initial`)??``,initialName:hv.get(`name`)??``,lastExtension:hv.get(`last`)??``,mode:gv===`folder`?`folder`:`file`,multiple:hv.get(`multiple`)===`1`,save:gv===`save`})})})}))});export{Gr as $,Ps as A,Ho as B,Il as C,Is as D,Us as E,Fs as F,Pa as G,lo as H,Rs as I,gi as J,Va as K,Vs as L,Cs as M,Ss as N,Ns as O,zs as P,Xr as Q,Ts as R,Gl as S,Qs as T,eo as U,Ao as V,Ha as W,ti as X,fi as Y,ei as Z,Jl as _,Nn as _t,n_ as a,Or as at,Ql as b,Ep as c,Pr as ct,Kf as d,sr as dt,Wr as et,vf as f,rr as ft,du as g,Fn as gt,_u as h,Mn as ht,$g as i,Ar as it,Ls as j,Bs as k,up as l,qn as lt,Fu as m,kn as mt,p_ as n,Dr as nt,dg as o,q as ot,Hu as p,jn as pt,za as q,m_ as r,Ir as rt,lg as s,kr as st,b_ as t,Fr as tt,rp as u,$n as ut,ql as v,In as vt,Rl as w,$l as x,Yl as y,An as yt,ks as z};