const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-Bkfg7AKB.js","assets/dist-CKllR0JH.js","assets/selectionMenu-CRlNslJh.js","assets/theme-DU3X_EOM.js","assets/theme--y6MTsAR.css","assets/Icons-5-2yk8Zn.js","assets/textSearch-VOTyBg9G.js","assets/SettingsView-CsifAs-z.js","assets/GalleryView-C5blL-FL.js","assets/RecycleView-L3ggeK7z.js","assets/PickerWindow-CdLDGbmP.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,E as n,O as r,S as i,T as a,_ as o,a as s,b as c,c as l,f as u,h as d,k as f,l as p,m,p as h,r as g,s as _,u as v,v as y,w as b,x,y as S}from"./theme-DU3X_EOM.js";import{A as C,C as w,N as ee,S as T,T as E,_ as D,b as O,g as te,i as k,k as A,m as ne,p as re,r as ie,u as j,v as ae,y as M}from"./dist-CKllR0JH.js";import{A as oe,At as se,C as ce,Ct as le,D as ue,Dt as de,E as fe,Et as N,Ft as pe,H as me,It as he,J as ge,L as P,Mt as _e,Nt as ve,O as ye,Ot as be,P as xe,Pt as Se,Q as Ce,R as we,S as Te,T as Ee,Tt as De,U as Oe,V as ke,W as F,Y as Ae,Z as je,_ as Me,_t as Ne,a as Pe,at as Fe,b as Ie,bt as Le,c as Re,ct as ze,d as Be,et as Ve,f as He,g as Ue,h as We,ht as Ge,i as Ke,it as qe,jt as Je,k as Ye,kt as Xe,l as Ze,lt as I,m as Qe,mt as $e,o as et,p as tt,q as nt,s as rt,t as it,tt as at,u as L,ut as ot,v as st,vt as ct,w as lt,wt as ut,x as dt,y as ft,z as pt}from"./selectionMenu-CRlNslJh.js";import{$ as mt,A as ht,B as R,C as gt,E as _t,F as vt,G as yt,I as bt,J as xt,K as St,L as Ct,M as wt,N as Tt,O as Et,P as Dt,R as Ot,S as kt,St as At,T as jt,U as Mt,V as Nt,X as Pt,Y as Ft,Z as It,_ as Lt,_t as Rt,a as zt,at as z,b as Bt,c as Vt,ct as Ht,d as Ut,dt as Wt,et as Gt,f as Kt,ft as qt,g as Jt,h as Yt,ht as Xt,i as Zt,it as Qt,j as B,k as $t,l as en,lt as tn,m as nn,mt as rn,n as an,nt as on,o as sn,ot as cn,p as ln,pt as un,q as dn,r as fn,rt as pn,s as mn,st as hn,t as gn,tt as _n,u as vn,ut as V,v as yn,vt as bn,w as xn,x as Sn,xt as Cn,y as wn,yt as Tn,z as En}from"./Icons-5-2yk8Zn.js";var H=ee(C(),1),Dn=r(),On={managed:0,private:0,workingSet:0,available:0};async function kn(){return E.available?await E.request(`app.memory`):On}async function An(){return E.available?await E.request(`app.memory.trim`):On}var jn={registered:!1,pathMatches:!1,registeredPath:null};async function Mn(){return E.available?await E.request(`app.scheme`):jn}async function Nn(e){return E.available?await E.request(`app.scheme.set`,{enabled:e}):jn}var Pn={supported:!1,mode:`none`,active:!1,error:null};async function Fn(){return E.available?await E.request(`app.startup`):Pn}async function In(e){return E.available?await E.request(`app.startup.set`,{mode:e}):Pn}var Ln=null,U=new Set;function W(e){Ln=e,U.forEach(e=>e(Ln))}function Rn(){Ln=null,U.forEach(e=>e(null))}function zn(){let[e,t]=(0,H.useState)(Ln);return(0,H.useEffect)(()=>(U.add(t),()=>{U.delete(t)}),[]),e}async function Bn(e){return E.available?(await E.request(`fs.operation.properties.info`,{paths:[e]}))?.[0]??null:null}async function Vn(e){return E.available?await E.request(`fs.operation.properties.hash`,{path:e}):null}async function G(e){return E.available?await E.request(`fs.operation.properties.edit`,e):{ok:!1,error:null}}async function Hn(e){return E.available?await E.request(`fs.operation.properties.details`,{path:e}):null}async function Un(e){return E.available?(await E.request(`fs.operation.properties.details.set`,e))?.ok!==!1:!1}var Wn=null;function Gn(e){Wn=e}function Kn(e,t){return e.length===0||!Wn?Promise.resolve([]):new Promise(n=>Wn?.({conflicts:e,move:t,resolve:n}))}async function qn(e,t=!1){return!E.available||e.length===0?!1:(await E.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Jn(){return E.available?(await E.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function K(){return E.available?await E.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function Yn(e,t,n,r){if(!E.available||e.length===0)return{ok:!1,error:`nothing_to_transfer`,created:[]};if(!r){let i=await Zn(e,t,n);if(i.length>0){let e=await Kn(i,n);if(e===null)return{ok:!1,error:null,created:[],cancelled:!0};r=e}}return await Qn({action:n?`move`:`write`},i=>E.request(`fs.operation.transfer`,{paths:e,target:t,move:n,decisions:r??null,confirm:i}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function Xn(e,t,n){return E.available?await E.request(`fs.shell.startMenu`,{path:e,scope:t,pin:n}):{ok:!1,path:null,pinned:!1,error:null}}async function Zn(e,t,n){return!E.available||e.length===0?[]:(await E.request(`fs.operation.transfer.conflicts`,{paths:e,target:t,move:n})).conflicts??[]}async function Qn(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await pe({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function $n(e){return!E.available||e.length===0?[]:(await E.request(`fs.paths.info`,{paths:e})).entries}async function er(e,t=!1,n){if(!E.available)return{ok:!1,created:[]};if(!n){let t=await K(),r=t.entries.filter(e=>e.exists).map(e=>e.path);if(r.length>0){let i=await Zn(r,e,t.move);if(i.length>0){let e=await Kn(i,t.move);if(e===null)return{ok:!1,created:[],cancelled:!0};n=e}}}return await Qn({action:t?`move`:`write`},t=>E.request(`fs.clipboard.paste`,{directory:e,decisions:n??null,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0}))}async function tr(e,t=!1,n=!1){if(!E.available||e.length===0)return{ok:!1,error:null};let r=await E.request(`fs.operation.delete`,{paths:e,permanent:t,runningConfirmed:n}),i=!1;for(let a=0;a<2&&r.required&&r.token&&r.protected?.length;a++){if(!await pe({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:t})){i=!0;break}r=await E.request(`fs.operation.delete`,{paths:e,permanent:t,runningConfirmed:n,confirm:r.token})}return i?{...r,ok:!1,cancelled:!0}:r}async function nr(e,t){return E.available?await Qn({action:`rename`},n=>E.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function rr(e,t=!1){return E.available?await E.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function ir(e){if(!E.available)return null;let t=await E.request(`fs.caseSensitive.get`,{path:e});return t.ok?t.enabled:null}async function ar(e,t){return E.available?await E.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function or(e,t,n){return E.available?await E.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function sr(e,t){return E.available?await E.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function cr(e){if(!E.available||e.length===0)return;let t=await E.request(`fs.operation.properties`,{paths:e});!t.system&&t.items?.length&&W({items:t.items,canUseSystemSheet:!!t.canUseSystemSheet})}async function lr(e){E.available&&e.length!==0&&await E.request(`fs.operation.systemProperties`,{paths:e})}async function ur(e){return!E.available||e.length===0?{ok:!1,error:null}:await E.request(`fs.share`,{paths:e})}async function dr(e){E.available&&await E.request(`fs.operation.openWith`,{path:e})}async function fr(e){E.available&&await E.request(`fs.operation.terminal`,{path:e})}async function pr(e){return E.available?await E.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function mr(e,t){return E.available?(await E.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function hr(){return E.available?await E.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function gr(){return E.available?await E.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function _r(e){E.available&&await E.request(`fs.operation.showInExplorer`,{path:e})}async function vr(e){return!E.available||e.length===0?{verbs:[],safe:!0}:await E.request(`shell.verbs`,{paths:e})}async function yr(e,t,n,r){E.available&&e.length!==0&&await E.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function br(e,t){return!E.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await E.request(`fs.operation.compress`,{...t,paths:e})}async function xr(){return E.available?(await E.request(`app.tasks`)).tasks:[]}async function Sr(){E.available&&await E.request(`app.tasks.clear`)}async function Cr(e,t){return E.available?(await E.request(`app.tasks.start`,{kind:e,label:t})).id??null:null}async function wr(e,t=null){E.available&&e&&await E.request(`app.tasks.finish`,{id:e,failed:t!==null,error:t})}var Tr={};function Er(e){let t={};for(let[n,r]of Object.entries(e??{}))t[n]=q(r);Tr=t,Mr=jr(Tr,`openInNewTab`)}function Dr(){return{...Tr}}function q(e){return(e??``).split(`|`).map(e=>e.trim()).filter(Boolean)}function Or(e){return e.join(`|`)}function kr(e){let t={};for(let[n,r]of Object.entries(e))t[n]=Or(r);return t}function Ar(e){let t={...Tr};for(let[n,r]of Object.entries(e??{}))n in t&&(t[n]=q(r));return t}function J(e,t,n){return e[t]?.includes(n)??!1}function jr(e,t){return e[t]?.[0]??``}var Mr=``;function Nr(e){Mr=e.trim()}function Pr(e){let t=Mr.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Fr(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Y(e){return e.split(`+`).filter(Boolean).map(e=>Ir[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}function X(e){return(e??[]).filter(Boolean).map(Y).join(` / `)}var Ir={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Lr(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Rr=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],zr={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`,`.tga`,`.dds`,`.hdr`,`.exr`,`.pcx`,`.dib`,`.jxl`,`.jpe`,`.jfif`,`.apng`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Br(e){let t=Hr(e);for(let{kind:e}of Rr)if(zr[e].has(t))return e;return null}function Vr(e){return Br(e)!==null}function Hr(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Ur=(0,H.createContext)({places:{},useIcons:!1}),Wr=Ur.Provider;function Z(){return(0,H.useContext)(Ur)}function Gr(e,t){return e.places[i(t)]}function Kr(e,t,n){return Gr(e,t)?.name||n}var Q=w(),qr={file:B,folder:wt,text:bn,code:Jt,image:Mt,video:Cn,audio:sn,archive:an,pdf:_n,executable:Et,font:Tt,database:Sn,config:Lt,spreadsheet:un,presentation:hn,document:gt},Jr={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Yr(e){let t=e.lastIndexOf(`.`);return t>0?Jr[e.slice(t).toLowerCase()]??`file`:`file`}function Xr({name:e,size:t}){let n=qr[e??`file`]??B;return(0,Q.jsx)(n,{size:t})}var Zr={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Qr(e,t,n,r){let i=e.toLowerCase();if(i.endsWith(`.lnk`))return r(`shortcut`);if(i.endsWith(`.url`)||i.endsWith(`.website`))return r(`internet_shortcut`);if(n!=null)return r(t?`folder_link`:`symbolic_link`);if(t)return r(`folder`);let a=e.lastIndexOf(`.`),o=a>0&&a<e.length-1?e.slice(a+1).toUpperCase():``,s=r(Zr[Yr(e)]??`file`);return o.length>0?`${o} ${s}`:r(`file`)}async function $r(e,t,n){return E.available?(await E.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function ei(e){return $r(`folder`,[],e??``)}function ti(e){return $r(`file`,e??[],``)}async function ni(e,t){if(!E.available)return{ok:!1,error:`Git is unavailable in the browser preview.`};try{return await E.request(t?`git.unstage`:`git.stage`,{paths:e})}catch(e){return{ok:!1,error:e instanceof Error?e.message:String(e)}}}async function ri(e,t=0,n=50){if(!E.available)throw Error(`Git is unavailable in the browser preview.`);return await E.request(`git.log`,{path:e,skip:t,limit:n})}var ii=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],ai=null,oi=0,si=new Set;function ci(){oi+=1;for(let e of si)e()}function li(e){return si.add(e),()=>si.delete(e)}function ui(){return oi}function di(e){ai=e,ci()}function fi(){return(0,H.useSyncExternalStore)(li,ui,ui),ai}function pi({menu:e,directory:t,target:n,shortcuts:r,canPaste:a=!1,onClose:o,onOpen:s,onOpenFile:c,onSelectEntry:l,onOpenExternally:u,onRename:d,onDelete:f,onCopy:p,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:b,onAddToTray:x,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ee,onExtractArchive:E,onOpenAsArchive:D,onAddToStartMenu:O,allowCompression:te=!1,platform:k,onCompressTo:A,onArchiveCreated:ne,gitEntries:re,onGitChanged:ie}){let j=T(),ae=fi(),M=y(t),oe=k===`windows`,[se,ce]=(0,H.useState)({verbs:[],safe:!0,loading:!1}),[le,ue]=(0,H.useState)({recommended:[],other:[],loading:!1}),[de,fe]=(0,H.useState)(null),N=(0,H.useRef)(0),pe=(0,H.useRef)(0),me=e?.paths.length===1,he=e?.background?t?[t]:[]:e?.paths??[],ge=e?.background?t||null:me&&n?.isDirectory?n.path:null;if((0,H.useEffect)(()=>{if(!e){ce({verbs:[],safe:!0,loading:!1}),ue({recommended:[],other:[],loading:!1});return}let t=++N.current;ce({verbs:[],safe:!0,loading:oe&&he.length>0&&!M}),oe&&he.length>0&&!M&&vr(he).then(e=>{N.current===t&&ce({...e,loading:!1})},()=>{N.current===t&&ce({verbs:[],safe:!0,loading:!1})});let r=++pe.current;!M&&me&&n&&oe?(ue({recommended:[],other:[],loading:!0}),pr(n.path).then(e=>{pe.current===r&&ue({...e,loading:!1})},()=>{pe.current===r&&ue({recommended:[],other:[],loading:!1})})):ue({recommended:[],other:[],loading:!1})},[e,me,n?.path,n?.isDirectory,he.length,M]),(0,H.useEffect)(()=>{if(!e||M||!ge){fe(null);return}let t=!0;return ir(ge).then(e=>{t&&fe(e)},()=>{t&&fe(null)}),()=>{t=!1}},[e,ge,M]),!e)return null;let P=[],_e=[],ve=new Set((ee??[]).map(i)),ye=e.background?t?[t]:[]:e.paths,be=ye.length>0&&ye.every(e=>ve.has(i(e))),xe=()=>n?Se(n.path,n.isDirectory):`Archive`,Se=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},Ce=async(e,n=xe())=>{let r=await br(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?ne?.(r.path,!0):Me(r.error??j(`could_not_create_the_archive`))},we=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},Te=new Map(Object.entries(re??{}).map(([e,t])=>[e.toLowerCase(),t])),Ee=e=>Te.get(v(e).toLowerCase())??null,De=async(e,t)=>{let n=await ni(e,t);n.ok?ie?.():Me(n.error??j(`git_index_change_failed`))},Oe=async()=>{if(!ge||de===null)return;let e=await ar(ge,!de);e.ok?(fe(e.enabled),b?.()):Me(e.error??j(`could_not_change_the_case_sensitivity`))},ke=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await or(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await or(e,t,`${a}\\${hi(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?b?.():Me(o.error??j(`could_not_create_the_link`))},F=async e=>{if(!n)return;let r=await ei(t);r&&await ke(e,n.path,r,v(n.path),e.endsWith(`-copy`))},Ae=async e=>{let n=ae?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let a=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(a&&!r.isDirectory)continue;let o=r.path.replace(/[\\/][^\\/]+$/,``),s=i(o)===i(t);await ke(n,r.path,t,v(r.path),a&&!s)}},je=async()=>{let t=(await $n(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&di({paths:t})},Ne=()=>{let e=ae?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:j(`cancel_selected_link`),icon:(0,Q.jsx)(wn,{size:14}),onSelect:()=>di(null)},...t?[{label:j(`hard_link`),icon:(0,Q.jsx)(B,{size:14}),separatorBefore:!0,onSelect:()=>void Ae(`hard`)}]:[],{label:j(`symbolic_link`),icon:(0,Q.jsx)(B,{size:14}),separatorBefore:!t,onSelect:()=>void Ae(`symbolic-file`)},...n?[...oe?[{label:j(`directory_junction`),icon:(0,Q.jsx)(wt,{size:14}),onSelect:()=>void Ae(`junction`)}]:[],{label:j(`smart_copy`),icon:(0,Q.jsx)(yn,{size:14}),separatorBefore:!0,onSelect:()=>void Ae(`smart-copy`)},{label:j(`smart_mirror`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void Ae(`smart-mirror`)},{label:j(`multi_version_smart_copy`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void Ae(`multi-version-smart-copy`)},{label:j(`hardlink_copy`),icon:(0,Q.jsx)(yn,{size:14}),separatorBefore:!0,onSelect:()=>void Ae(`hard-copy`)},{label:j(`symbolic_link_copy`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void Ae(`symbolic-copy`)}]:[]]};if(e.background){if(h&&_e.push({label:j(`new_folder`),icon:(0,Q.jsx)(cn,{size:16}),shortcut:X(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:j(`folder`),icon:(0,Q.jsx)(wt,{size:14}),onSelect:()=>h(!1)}),!M&&oe&&e.push({label:j(`case_sensitive_folder`),icon:(0,Q.jsx)(vn,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...ii.map((e,t)=>({label:`${j(e.label)} (${e.extension})`,icon:(0,Q.jsx)(B,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),P.push({label:j(`new`),icon:(0,Q.jsx)(cn,{size:14}),children:e,onSelect:()=>void 0})}if(M||P.push({label:j(`create_link`),icon:(0,Q.jsx)(Wt,{size:14}),disabled:!ae,children:Ne(),onSelect:()=>void 0}),_)return(0,Q.jsx)(Pe,{items:P,onClose:o,quick:_e,x:e.x,y:e.y});!M&&s&&P.push({label:j(`open_in_new_tab`),icon:(0,Q.jsx)(cn,{size:14}),onSelect:()=>s(t,!0)}),P.push({label:j(`copy_as_path`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void we([t])}),x&&P.push({label:j(`add_to_file_tray`),icon:(0,Q.jsx)(It,{size:14}),onSelect:()=>x([t])}),!M&&(be?w:C)&&P.push({label:j(be?`remove_from_favorites`:`add_to_favorites`),icon:be?(0,Q.jsx)(R,{size:14}):(0,Q.jsx)(En,{size:14}),onSelect:()=>be?w?.([t]):C?.([t])}),!M&&de!==null&&P.push({label:j(`case_sensitive_names`),icon:(0,Q.jsx)(vn,{size:14}),checked:de,onSelect:()=>void Oe()}),!M&&te&&(P.push({label:j(`open_in_terminal`),icon:(0,Q.jsx)(Rt,{size:14}),onSelect:()=>void fr(t)}),P.push({label:j(oe?`show_in_explorer`:`show_in_file_manager`),icon:(0,Q.jsx)(wt,{size:14}),separatorBefore:!0,onSelect:()=>void _r(t)})),m&&_e.push({label:j(`paste`),icon:(0,Q.jsx)(Gt,{size:16}),disabled:!a,shortcut:X(r.paste),onSelect:()=>m(t)}),M||_e.push({label:j(`properties`),icon:(0,Q.jsx)(vt,{size:16}),shortcut:X(r.properties),onSelect:()=>void cr([t])})}else{if(l&&P.push({label:j(`choose`),icon:(0,Q.jsx)(Ut,{size:14}),onSelect:()=>{l(n?e.paths.length>1?[...e.paths]:[n.path]:[...e.paths])}}),s&&P.push({label:j(`open`),icon:(0,Q.jsx)(Zt,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&(u??c)?.(n.path)}}),n?.isDirectory&&(s&&P.push({label:j(`open_in_new_tab`),icon:(0,Q.jsx)(cn,{size:14}),onSelect:()=>s(n.path,!0)}),m&&P.push({label:j(`paste_into_folder`),icon:(0,Q.jsx)(Gt,{size:14}),disabled:!a,onSelect:()=>m(n.path)}),M||P.push({label:j(`open_in_terminal`),icon:(0,Q.jsx)(Rt,{size:14}),onSelect:()=>void fr(n.path)})),!M&&me&&n&&!n.isDirectory&&D&&P.push({label:j(`open_as_archive`),icon:(0,Q.jsx)(an,{size:14}),onSelect:()=>D(n.path)}),!M&&ie&&e.paths.length>0){let t=[],n=[];for(let r of e.paths){let e=Ee(r);e!==null&&e!==`!!`&&((e===`??`||e[1]!==`.`)&&n.push(r),e!==`??`&&e[0]!==`.`&&t.push(r))}let r=[];n.length>0&&r.push({label:j(`git_stage`),icon:(0,Q.jsx)(bt,{size:14}),onSelect:()=>void De(n,!1)}),t.length>0&&r.push({label:j(`git_unstage`),icon:(0,Q.jsx)(bt,{size:14}),onSelect:()=>void De(t,!0)}),r.length>0&&P.push({label:j(`git`),icon:(0,Q.jsx)(bt,{size:14}),separatorBefore:!0,children:r,onSelect:()=>void 0})}if(!M&&me&&n&&!n.isDirectory&&S(n.path)&&E&&P.push({label:j(`extract_archive`),icon:(0,Q.jsx)(an,{size:14}),separatorBefore:!0,children:[{label:j(`extract_here`),icon:(0,Q.jsx)(an,{size:14}),onSelect:()=>E(n.path,`here`)},{label:j(`extract_to_a_folder_named_after_the_archive`),icon:(0,Q.jsx)(an,{size:14}),onSelect:()=>E(n.path,`named`)},{label:j(`auto_extract_to_the_current_folder`),icon:(0,Q.jsx)(an,{size:14}),onSelect:()=>E(n.path,`auto`)},{label:j(`extract_here_and_delete`),icon:(0,Q.jsx)(an,{size:14}),separatorBefore:!0,onSelect:()=>E(n.path,`here-delete`)},{label:j(`extract_to_a_folder_and_delete_archive`),icon:(0,Q.jsx)(an,{size:14}),onSelect:()=>E(n.path,`named-delete`)},{label:j(`auto_extract_and_delete_archive`),icon:(0,Q.jsx)(an,{size:14}),onSelect:()=>E(n.path,`auto-delete`)},{label:j(`extract_to`),icon:(0,Q.jsx)(wt,{size:14}),separatorBefore:!0,onSelect:()=>E(n.path,`choose`)}],onSelect:()=>void 0}),k===`windows`&&!M&&me&&n&&O&&P.push({label:j(`add_to_start_menu`),icon:(0,Q.jsx)(rn,{size:14}),separatorBefore:!0,children:[{label:j(`add_to_user_start_menu`),icon:(0,Q.jsx)(rn,{size:14}),onSelect:()=>O(n.path,`user`,!1)},{label:j(`pin_to_user_start_menu`),icon:(0,Q.jsx)(Qt,{size:14}),onSelect:()=>O(n.path,`user`,!0)},{label:j(`add_to_global_start_menu`),icon:(0,Q.jsx)(Ct,{size:14}),separatorBefore:!0,onSelect:()=>O(n.path,`machine`,!1)},{label:j(`pin_to_global_start_menu`),icon:(0,Q.jsx)(Qt,{size:14}),onSelect:()=>O(n.path,`machine`,!0)}],onSelect:()=>void 0}),!M&&oe&&me&&n){let e=[];if(le.loading)e.push({label:j(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of le.recommended)e.push({label:t.name,group:j(`suggested_apps`),icon:t.icon?(0,Q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Q.jsx)(Et,{size:14}),onSelect:()=>void mr(n.path,t.path).then(e=>{e||dr(n.path)})});for(let t of le.other)e.push({label:t.name,group:j(`other_apps`),icon:t.icon?(0,Q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Q.jsx)(Et,{size:14}),onSelect:()=>void mr(n.path,t.path).then(e=>{e||dr(n.path)})})}e.push({label:j(`choose_another_app`),icon:(0,Q.jsx)(Et,{size:14}),separatorBefore:!0,onSelect:()=>void dr(n.path)}),P.push({label:j(`open_with_2`),icon:(0,Q.jsx)(Et,{size:14}),children:e,onSelect:()=>void dr(n.path)})}if(!M&&k===`windows`&&e.paths.length>0&&P.push({label:j(`share`),icon:(0,Q.jsx)(Wt,{size:14}),separatorBefore:!0,onSelect:()=>void ur(e.paths).then(e=>{e.ok||Me(e.error??j(`could_not_open_the_share_sheet`))})}),M||P.push({label:j(`compress`),icon:(0,Q.jsx)(an,{size:14}),separatorBefore:!0,children:[{label:j(`compress_to_zip`),icon:(0,Q.jsx)(an,{size:14}),onSelect:()=>void Ce(e.paths)},{label:j(`compress_to`),icon:(0,Q.jsx)(an,{size:14}),onSelect:()=>A?.(e.paths,xe())}],onSelect:()=>void 0}),!M&&(e?.paths.length??0)>0){let e=[{label:j(`select_link_source`),icon:(0,Q.jsx)(Wt,{size:14}),onSelect:()=>void je()},...ae?[{label:j(`cancel_selected_link`),icon:(0,Q.jsx)(wn,{size:14}),onSelect:()=>di(null)}]:[],...me&&n?n.isDirectory?[{label:j(`symbolic_link`),icon:(0,Q.jsx)(wt,{size:14}),separatorBefore:!0,onSelect:()=>void F(`symbolic-folder`)},...oe?[{label:j(`directory_junction`),icon:(0,Q.jsx)(wt,{size:14}),onSelect:()=>void F(`junction`)}]:[],{label:j(`smart_copy`),icon:(0,Q.jsx)(yn,{size:14}),separatorBefore:!0,onSelect:()=>void F(`smart-copy`)},{label:j(`smart_mirror`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void F(`smart-mirror`)},{label:j(`multi_version_smart_copy`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void F(`multi-version-smart-copy`)},{label:j(`hardlink_copy`),icon:(0,Q.jsx)(yn,{size:14}),separatorBefore:!0,onSelect:()=>void F(`hard-copy`)},{label:j(`symbolic_link_copy`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void F(`symbolic-copy`)}]:[{label:j(`symbolic_link`),icon:(0,Q.jsx)(B,{size:14}),separatorBefore:!0,onSelect:()=>void F(`symbolic-file`)},{label:j(`hard_link`),icon:(0,Q.jsx)(B,{size:14}),onSelect:()=>void F(`hard`)}]:[]];P.push({label:j(`create_link`),icon:(0,Q.jsx)(Wt,{size:14}),children:e,onSelect:()=>void 0})}!M&&n?.isDirectory&&de!==null&&P.push({label:j(`case_sensitive_names`),icon:(0,Q.jsx)(vn,{size:14}),checked:de,onSelect:()=>void Oe()}),P.push({label:j(`copy_as_path`),icon:(0,Q.jsx)(yn,{size:14}),onSelect:()=>void we(e.paths)}),x&&P.push({label:j(`add_to_file_tray`),icon:(0,Q.jsx)(It,{size:14}),onSelect:()=>x(e.paths)}),!M&&(be?w:C)&&P.push({label:j(be?`remove_from_favorites`:`add_to_favorites`),icon:be?(0,Q.jsx)(R,{size:14}):(0,Q.jsx)(En,{size:14}),onSelect:()=>be?w?.(ye):C?.(ye)}),M||P.push({label:j(oe?`show_in_explorer`:`show_in_file_manager`),icon:(0,Q.jsx)(wt,{size:14}),separatorBefore:!0,onSelect:()=>void _r(ye[0])}),p&&_e.push({label:j(`cut`),icon:(0,Q.jsx)(Bt,{size:16}),shortcut:X(r.cut),onSelect:()=>p(e.paths,!0)},{label:j(`copy`),icon:(0,Q.jsx)(yn,{size:16}),shortcut:X(r.copy),onSelect:()=>p(e.paths,!1)}),me&&n&&d&&_e.push({label:j(`rename`),icon:(0,Q.jsx)(on,{size:16}),shortcut:X(r.rename),onSelect:()=>d(n.path)}),f&&_e.push({label:j(`delete`),icon:(0,Q.jsx)(Tn,{size:16}),danger:!0,shortcut:X(r.delete),onSelect:()=>f(e.paths)}),M||_e.push({label:j(`properties`),icon:(0,Q.jsx)(vt,{size:16}),shortcut:X(r.properties),onSelect:()=>void cr(e.paths)})}if(se.loading)P.push({label:j(`more_actions`),icon:(0,Q.jsx)(Et,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(se.verbs.length>0){let e={items:[],children:new Map};for(let t of se.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,Q.jsx)(mi,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void yr(he,se.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,Q.jsx)(mi,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];P.push({label:j(se.safe?`more_actions`:`more_actions_extensions`),icon:(0,Q.jsx)(Et,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,Q.jsx)(Pe,{items:P,onClose:o,quick:_e,x:e.x,y:e.y})}function mi({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,Q.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,Q.jsx)(Zt,{size:14});case`document`:return(0,Q.jsx)(gt,{size:14});case`cut`:return(0,Q.jsx)(Bt,{size:14});case`copy`:return(0,Q.jsx)(yn,{size:14});case`paste`:return(0,Q.jsx)(Gt,{size:14});case`trash`:return(0,Q.jsx)(Tn,{size:14});case`pencil`:return(0,Q.jsx)(on,{size:14});case`gear`:return(0,Q.jsx)(vt,{size:14});case`star`:return(0,Q.jsx)(rn,{size:14});case`pin`:return(0,Q.jsx)(Qt,{size:14});case`executable`:return(0,Q.jsx)(Et,{size:14});case`share`:return(0,Q.jsx)(Wt,{size:14});case`arrow`:return(0,Q.jsx)(Zt,{size:14});default:return(0,Q.jsx)(gn,{size:14})}}function hi(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}var gi=f();function _i({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=T(),[l,u]=(0,H.useState)(null),d=(0,H.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,H.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(vi,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,Q.jsx)(yi,{children:f?.label??``}):(0,Q.jsx)(bi,{children:a}),a===void 0&&(0,Q.jsx)(xi,{children:(0,Q.jsx)(Kt,{size:11})})]}),l&&(0,gi.createPortal)((0,Q.jsx)(Si,{"aria-label":c(`options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,Q.jsxs)(Ci,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,Q.jsx)(wi,{children:t.label}),t.value===e&&(0,Q.jsx)(Ut,{size:11})]},t.value))}),document.body)]})}var vi=A.button`
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
`,yi=A.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,bi=A.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,xi=A.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Si=A.div`
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
    ${rt}
`,Ci=A.button`
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
`,wi=A.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ti=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],Ei=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],Di=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],Oi=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],ki=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function Ai({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=T(),a=(0,H.useRef)(null),[o,s]=(0,H.useState)(e),[c,l]=(0,H.useState)(t),[u,d]=(0,H.useState)(`zip`),[f,p]=(0,H.useState)(`5`),[m,h]=(0,H.useState)(`default`),[g,_]=(0,H.useState)(`none`),[v,y]=(0,H.useState)(``),[b,x]=(0,H.useState)(`0`),[S,C]=(0,H.useState)(!1);(0,H.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let w=Ti.find(e=>e.value===u)??Ti[0],ee=u===`zip`||u===`zipx`,E=g!==`none`,D=ee||u===`7z`,O=u===`zip`||u===`7z`,te=async()=>{if(S||!c.trim()||!o||E&&v.length===0)return;C(!0);let e=await r({directory:o,name:c.trim(),format:u,level:w.level?Number(f):0,method:ee?m:null,encryption:D?g:`none`,password:E?v:void 0,splitSize:O?Number(b):0});C(!1),e&&n()};return(0,gi.createPortal)((0,Q.jsx)(ji,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,Q.jsxs)(Mi,{"aria-modal":`true`,role:`dialog`,children:[(0,Q.jsx)(Ni,{children:i(`compress_to`)}),(0,Q.jsxs)(Pi,{children:[(0,Q.jsx)(Fi,{children:i(`archive_name`)}),(0,Q.jsx)(Ii,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&te()}}),(0,Q.jsx)(Li,{children:w.extension})]}),(0,Q.jsxs)(Pi,{children:[(0,Q.jsx)(Fi,{children:i(`format`)}),(0,Q.jsx)(_i,{onChange:e=>d(e),options:Ti.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,Q.jsxs)(Pi,{children:[(0,Q.jsx)(Fi,{children:i(`method`)}),(0,Q.jsx)(_i,{disabled:!ee,onChange:h,options:Ei.map(e=>({...e,label:i(e.label)})),value:ee?m:`default`,width:236,zIndex:3700})]}),(0,Q.jsxs)(Pi,{children:[(0,Q.jsx)(Fi,{children:i(`encryption`)}),(0,Q.jsx)(_i,{disabled:!D,onChange:e=>{_(e),e===`none`&&y(``)},options:Di.map(e=>({...e,label:i(e.label)})),value:D?g:`none`,width:236,zIndex:3700})]}),E&&(0,Q.jsxs)(Pi,{children:[(0,Q.jsx)(Fi,{children:i(`password`)}),(0,Q.jsx)(Ii,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,Q.jsxs)(Pi,{children:[(0,Q.jsx)(Fi,{children:i(`split_volumes`)}),(0,Q.jsx)(_i,{disabled:!O,onChange:x,options:Oi.map(e=>({...e,label:i(e.label)})),value:O?b:`0`,width:236,zIndex:3700})]}),(0,Q.jsxs)(Pi,{children:[(0,Q.jsx)(Fi,{children:i(`compression_level`)}),(0,Q.jsx)(_i,{disabled:!w.level,onChange:p,options:ki.map(e=>({...e,label:i(e.label)})),value:w.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,Q.jsxs)(Pi,{$stack:!0,children:[(0,Q.jsx)(Fi,{children:i(`destination`)}),(0,Q.jsxs)(Ri,{children:[(0,Q.jsx)(zi,{title:o,children:o}),(0,Q.jsx)(Vi,{disabled:S,onClick:()=>void ei(o).then(e=>{e&&s(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,Q.jsxs)(Bi,{children:[(0,Q.jsx)(Vi,{disabled:S,onClick:n,type:`button`,children:i(`cancel`)}),(0,Q.jsx)(Hi,{disabled:S||!c.trim()||E&&v.length===0,onClick:()=>void te(),type:`button`,children:i(S?`compressing`:`compress`)})]})]})}),document.body)}var ji=A.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${et}
`,Mi=A.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${L}
`,Ni=A.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Pi=A.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Fi=A.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Ii=A.input`
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
`,Li=A.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Ri=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,zi=A.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bi=A.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Vi=A.button`
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
`,Hi=A(Vi)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Ui({programs:e,message:t,confirmLabel:n,onCancel:r,onConfirm:i}){let a=T(),o=(0,H.useRef)(null);return(0,H.useEffect)(()=>{o.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[r]),(0,gi.createPortal)((0,Q.jsx)(Gi,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,Q.jsxs)(Ki,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsx)(qi,{children:a(`the_program_is_running`)}),(0,Q.jsx)(Ji,{children:t}),(0,Q.jsx)(Yi,{children:e.map(e=>(0,Q.jsx)(Wi,{program:e,title:a(`process_id_n`,{id:e.id})},e.id))}),(0,Q.jsxs)(ra,{children:[(0,Q.jsx)(ia,{onClick:r,ref:o,type:`button`,children:a(i?`cancel`:`ok`)}),i&&(0,Q.jsx)(ia,{$primary:!0,onClick:i,type:`button`,children:n??a(`delete`)})]})]})}),document.body)}function Wi({program:e,title:t}){let n=N(e.path,!1,!0);return(0,Q.jsxs)(Xi,{title:e.path,children:[(0,Q.jsx)(Zi,{children:n?(0,Q.jsx)(Qi,{alt:``,src:n}):(0,Q.jsx)($i,{})}),(0,Q.jsxs)(ea,{children:[(0,Q.jsx)(ta,{children:e.name}),(0,Q.jsx)(na,{children:t})]})]})}var Gi=A.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${et}
`,Ki=A.div`
    width: min(520px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${L}
`,qi=A.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Ji=A.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Yi=A.div`
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
`,Xi=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 3px 0;
`,Zi=A.span`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 20px;
    height: 20px;
`,Qi=A.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`,$i=A.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--text-muted);
`,ea=A.span`
    display: flex;
    align-items: baseline;
    gap: 8px;
    min-width: 0;
`,ta=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,na=A.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10.5px;
`,ra=A.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,ia=A.button`
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
`,aa=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),oa=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),sa=new Set([`png`,`jpg`,`jpeg`,`jfif`,`jpe`,`gif`,`webp`,`bmp`,`avif`,`ico`,`svg`,`apng`]),ca=new Set([`tif`,`tiff`,`psd`,`psb`,`tga`,`dds`,`hdr`,`exr`,`pcx`,`dib`,`jxl`]),la=new Set([...sa,...ca]),ua=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function da({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=T(),[l,u]=(0,H.useState)(!1),[d,f]=(0,H.useState)(!1),[p,m]=(0,H.useState)(!1),[h,g]=(0,H.useState)(0),[_,v]=(0,H.useState)(0),[y,b]=(0,H.useState)(null),[x,S]=(0,H.useState)(!1),[C,w]=(0,H.useState)(!1),ee=(0,H.useRef)(null),E=(0,H.useRef)(null),D=(0,H.useRef)(null),O=(0,H.useRef)(null),[te,k]=(0,H.useState)(()=>{let e=dt(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),A=r?e?.path??null:null,ne=De(A),re=e?fa(e.name):``,ie=!!e&&!e.isDirectory&&aa.has(re),j=!!e&&!e.isDirectory&&oa.has(re),ae=!!e&&!e.isDirectory&&la.has(re),M=!!e&&!e.isDirectory&&ua.has(re),oe=!!e&&!e.isDirectory&&re===`pdf`,le=se(ie?ne:null,512,e?.modified??0),ue=ae&&sa.has(re),de=se(ae&&!ue?ne:null,1024,e?.modified??0),fe=be(ue?ne:null,e?.modified??0,re),pe=be(ie||j?ne:null,e?.modified??0,re),me=Xe(oe?ne:null,e?.modified??0),he=N(!ie&&!j&&!ae&&!M&&!oe?ne:null,e?.isDirectory??!1);if((0,H.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),w(!1)},[A]),(0,H.useEffect)(()=>{if(!ne||!M){b(null),S(!1);return}let e=!0;return S(!0),b(null),Ce(ne).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`could_not_read_this_file`)}),S(!1))}),()=>{e=!1}},[ne,M]),!e&&!s)return null;let ge=e=>{D.current={x:e.clientX,width:E.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},P=e=>{let t=D.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},_e=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},ve=e=>{O.current={y:e.clientY,height:te},e.currentTarget.setPointerCapture(e.pointerId)},ye=e=>{let t=O.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);k(n),ce(`yafm.preview.media.height`,n)},xe=e=>{O.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,Q.jsxs)(ma,{$open:r,children:[r&&(0,Q.jsx)(ha,{onPointerDown:ge,onPointerMove:P,onPointerUp:_e,onDoubleClick:()=>n(320),title:c(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsx)(ga,{ref:E,style:{width:r?t:0},children:(0,Q.jsxs)(_a,{children:[(0,Q.jsx)(wt,{size:56}),(0,Q.jsx)(`span`,{children:s})]})})]});let Se=()=>{let e=ee.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,Q.jsxs)(ma,{$open:r,children:[r&&(0,Q.jsx)(ha,{onPointerDown:ge,onPointerMove:P,onPointerUp:_e,onDoubleClick:()=>n(320),title:c(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(ga,{ref:E,style:{width:r?t:0},children:[(0,Q.jsx)(va,{style:{height:te},children:ie&&pe&&!l?(0,Q.jsxs)(ba,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,Q.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:Se,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:le??void 0,preload:`metadata`,ref:ee,src:pe}),(0,Q.jsx)(xa,{$visible:!d,onClick:Se,title:c(`play`),type:`button`,children:(0,Q.jsx)(z,{size:28})}),(0,Q.jsxs)(Sa,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,Q.jsxs)(Ca,{children:[(0,Q.jsx)(`span`,{children:pa(_)}),(0,Q.jsx)(`span`,{children:pa(h)})]}),(0,Q.jsx)(wa,{"aria-label":c(`seek`),max:h||0,min:0,onChange:e=>{let t=ee.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):j&&pe?(0,Q.jsx)(`audio`,{controls:!0,src:pe}):ae&&(fe??de)?(0,Q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:fe??de}):oe&&me&&!C?(0,Q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:me}):oe?(0,Q.jsx)(B,{size:64}):M?(0,Q.jsx)(Ta,{children:x||!y?(0,Q.jsx)(Da,{children:c(`loading`)}):y.error?(0,Q.jsx)(Da,{children:y.error}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Ea,{children:y.text}),y.truncated&&(0,Q.jsx)(Da,{children:c(`showing_the_first_256_kb`)})]})}):ie&&le?(0,Q.jsx)(`img`,{alt:``,src:le}):he?(0,Q.jsx)(`img`,{alt:``,src:he}):e.isDirectory?(0,Q.jsx)(wt,{size:64}):(0,Q.jsx)(B,{size:64})}),(0,Q.jsx)(ya,{onDoubleClick:()=>{k(210),ce(`yafm.preview.media.height`,210)},onPointerDown:ve,onPointerMove:ye,onPointerUp:xe,title:c(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(Oa,{children:[(0,Q.jsx)(ka,{title:e.path,children:e.name}),o&&(0,Q.jsx)(Aa,{children:o}),(0,Q.jsx)(ja,{children:e.fields.map(e=>(0,Q.jsxs)(Ma,{children:[(0,Q.jsx)(Na,{children:e.label}),(0,Q.jsx)(Pa,{title:e.value,children:e.time===void 0?e.value:(0,Q.jsx)(lt,{value:e.time})})]},e.label))})]})]})]})}function fa(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function pa(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var ma=A.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,ha=A.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ga=A.aside`
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
`,_a=A.div`
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
`,va=A.div`
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
`,ya=A.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ba=A.div`
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
`,xa=A.button`
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
`,Sa=A.div`
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
`,Ca=A.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,wa=A.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Ta=A.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Ea=A.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Da=A.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Oa=A.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,ka=A.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Aa=A.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,ja=A.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Ma=A.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Na=A.span`
    color: var(--text-muted);
`,Pa=A.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Fa=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Ia=[...Fa],La={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},Ra={folder:e=>(0,Q.jsx)(wt,{size:e}),home:e=>(0,Q.jsx)(Nt,{size:e}),desktop:e=>(0,Q.jsx)(kt,{size:e}),documents:e=>(0,Q.jsx)(xn,{size:e}),downloads:e=>(0,Q.jsx)(jt,{size:e}),pictures:e=>(0,Q.jsx)(pn,{size:e}),music:e=>(0,Q.jsx)(Ft,{size:e}),videos:e=>(0,Q.jsx)(At,{size:e}),drive:e=>(0,Q.jsx)(_t,{size:e}),image:e=>(0,Q.jsx)(Mt,{size:e}),video:e=>(0,Q.jsx)(Cn,{size:e}),audio:e=>(0,Q.jsx)(sn,{size:e}),text:e=>(0,Q.jsx)(bn,{size:e}),code:e=>(0,Q.jsx)(Jt,{size:e}),clock:e=>(0,Q.jsx)(ln,{size:e}),star:e=>(0,Q.jsx)(rn,{size:e}),file:e=>(0,Q.jsx)(B,{size:e}),archive:e=>(0,Q.jsx)(an,{size:e}),pdf:e=>(0,Q.jsx)(_n,{size:e}),executable:e=>(0,Q.jsx)(Et,{size:e}),font:e=>(0,Q.jsx)(Tt,{size:e}),database:e=>(0,Q.jsx)(Sn,{size:e}),config:e=>(0,Q.jsx)(Lt,{size:e}),spreadsheet:e=>(0,Q.jsx)(un,{size:e}),presentation:e=>(0,Q.jsx)(hn,{size:e}),document:e=>(0,Q.jsx)(gt,{size:e}),app:e=>(0,Q.jsx)(gn,{size:e}),gear:e=>(0,Q.jsx)(vt,{size:e}),pin:e=>(0,Q.jsx)(Qt,{size:e}),trash:e=>(0,Q.jsx)(Tn,{size:e}),overview:e=>(0,Q.jsx)(Pt,{size:e}),book:e=>(0,Q.jsx)(mn,{size:e}),briefcase:e=>(0,Q.jsx)(Vt,{size:e}),cloud:e=>(0,Q.jsx)(Yt,{size:e}),gamepad:e=>(0,Q.jsx)(Dt,{size:e}),camera:e=>(0,Q.jsx)(en,{size:e}),terminal:e=>(0,Q.jsx)(Rt,{size:e}),server:e=>(0,Q.jsx)(V,{size:e}),package:e=>(0,Q.jsx)(It,{size:e}),globe:e=>(0,Q.jsx)(Ct,{size:e}),heart:e=>(0,Q.jsx)(En,{size:e}),share:e=>(0,Q.jsx)(V,{size:e}),favorites:e=>(0,Q.jsx)(En,{size:e})};function za(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Ba(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Fa)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Ia.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=za(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${La[n]??n}${Va(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Va(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ha({panel:e,size:t=16}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=de(n);if(r)return(0,Q.jsx)(`img`,{alt:``,src:r,style:{width:t,height:t,objectFit:`contain`}});let i=e.icon?Ra[e.icon]:void 0;if(i)return(0,Q.jsx)(Q.Fragment,{children:i(t)});switch(e.kind){case`quick`:return(0,Q.jsx)(wt,{size:t});case`recent`:return(0,Q.jsx)(ln,{size:t});case`frequent`:return(0,Q.jsx)(rn,{size:t});case`drives`:return(0,Q.jsx)(_t,{size:t});case`home`:return(0,Q.jsx)(Nt,{size:t});case`share`:return(0,Q.jsx)(V,{size:t});case`favorites`:return(0,Q.jsx)(En,{size:t});default:return(0,Q.jsx)(wt,{size:t})}}function Ua({place:e,size:t=18}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=de(n);return r?(0,Q.jsx)(`img`,{alt:``,height:t,src:r,style:{objectFit:`contain`},width:t}):e.icon&&Ra[e.icon]?(0,Q.jsx)(Q.Fragment,{children:Ra[e.icon](t)}):(0,Q.jsx)(wt,{size:t})}var Wa=`yafm.colors.saved`,Ga=`yafm.colors.history`,Ka=24,qa=16,Ja=0,Ya=new Set;function Xa(e){let t=(e??``).trim().replace(/^#/,``).toLowerCase();return!/^[0-9a-f]{3}$/.test(t)&&!/^[0-9a-f]{6}$/.test(t)?null:`#${t.length===3?[...t].map(e=>e+e).join(``):t}`}function Za(e,t){let n=Ie(e),r=new Set,i=[];for(let e of n??[]){let n=Xa(e);if(n&&!r.has(n)&&(r.add(n),i.push(n),i.length>=t))break}return i}function Qa(){return Za(Wa,Ka)}function $a(){return Za(Ga,qa)}function eo(){Ja+=1;for(let e of Ya)e()}function to(e){let t=Xa(e);if(!t)return;let n=[t,...$a().filter(e=>e!==t)].slice(0,qa);Te(Ga,n),eo()}function no(e){let t=Xa(e);if(!t)return;let n=[t,...Qa().filter(e=>e!==t)].slice(0,Ka);Te(Wa,n),eo()}function ro(e){let t=Xa(e);t&&(Te(Wa,Qa().filter(e=>e!==t)),eo())}function io(e){return Ya.add(e),()=>{Ya.delete(e)}}function ao(){let e=(0,H.useSyncExternalStore)(io,()=>Ja);return(0,H.useMemo)(()=>({saved:Qa(),history:$a()}),[e])}function oo(e){let t=Xa(e);return t?{r:Number.parseInt(t.slice(1,3),16),g:Number.parseInt(t.slice(3,5),16),b:Number.parseInt(t.slice(5,7),16)}:null}function so({r:e,g:t,b:n}){let r=e=>Math.round(Math.max(0,Math.min(255,e))).toString(16).padStart(2,`0`);return`#${r(e)}${r(t)}${r(n)}`}function co({r:e,g:t,b:n}){let r=e/255,i=t/255,a=n/255,o=Math.max(r,i,a),s=o-Math.min(r,i,a),c=0;return s!==0&&(c=o===r?60*((i-a)/s%6):o===i?60*((a-r)/s+2):60*((r-i)/s+4)),c<0&&(c+=360),{h:c,s:o===0?0:s/o,v:o}}function lo({h:e,s:t,v:n}){let r=n*t,i=e/60,a=r*(1-Math.abs(i%2-1)),o=n-r,s=0,c=0,l=0;return i<1?[s,c]=[r,a]:i<2?[s,c]=[a,r]:i<3?[c,l]=[r,a]:i<4?[c,l]=[a,r]:i<5?[s,l]=[a,r]:[s,l]=[r,a],{r:(s+o)*255,g:(c+o)*255,b:(l+o)*255}}function uo({value:e,onChange:t,disabled:n=!1,title:r,ariaLabel:i,variant:a=`dot`}){let o=T(),s=(0,H.useRef)(null),c=(0,H.useRef)(null),l=(0,H.useRef)(null),u=(0,H.useRef)(!1),d=(0,H.useRef)(!1),[f,p]=(0,H.useState)(!1),[m,h]=(0,H.useState)(null),g=oo(e)??{r:0,g:0,b:0},[_,v]=(0,H.useState)(()=>co(g)),[y,b]=(0,H.useState)(e),{saved:x,history:S}=ao(),C=so(lo(_)),w=lo(_),[ee,E]=(0,H.useState)(()=>({r:String(Math.round(w.r)),g:String(Math.round(w.g)),b:String(Math.round(w.b))})),D=(0,H.useRef)(C);D.current=C;let O=(0,H.useCallback)(()=>{p(!1),d.current&&=(to(D.current),!1)},[]),te=e=>{v(e);let n=so(lo(e));b(n),d.current=!0,t(n)},k=(e,t)=>{E(n=>({...n,[e]:t}));let n=Number(t);t.trim().length===0||!Number.isInteger(n)||n<0||n>255||te(co({...w,[e]:n}))},A=e=>E(t=>({...t,[e]:String(Math.round(w[e]))}));(0,H.useEffect)(()=>{if(f)return;let t=oo(e);t&&(v(co(t)),b(e))},[e,f]),(0,H.useEffect)(()=>{E({r:String(Math.round(w.r)),g:String(Math.round(w.g)),b:String(Math.round(w.b))})},[C]),(0,H.useLayoutEffect)(()=>{if(!f||!s.current)return;let e=s.current.getBoundingClientRect(),t=Math.max(8,Math.min(e.left,window.innerWidth-236-8)),n=e.bottom+6+322>window.innerHeight?Math.max(8,e.top-328):e.bottom+6;h({top:n,left:t})},[f]),(0,H.useEffect)(()=>{if(!f)return;let e=e=>{let t=e.target;c.current?.contains(t)||s.current?.contains(t)||O()},t=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),O())};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t,!0),window.addEventListener(`blur`,O),window.addEventListener(`resize`,O),document.addEventListener(`scroll`,O,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t,!0),window.removeEventListener(`blur`,O),window.removeEventListener(`resize`,O),document.removeEventListener(`scroll`,O,!0)}},[f,O]);let ne=()=>{if(n)return;if(f){O();return}let t=oo(e);t&&(v(co(t)),b(e)),p(!0)},re=e=>{let t=l.current?.getBoundingClientRect();if(!t)return;let n=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width)),r=1-Math.max(0,Math.min(1,(e.clientY-t.top)/t.height));te({..._,s:n,v:r})},ie=e=>{let n=oo(e);n&&(v(co(n)),b(e),D.current=e,d.current=!1,t(e),to(e),p(!1))},j=Xa(e)??C;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(fo,{$variant:a,"aria-label":i??r,disabled:n,onClick:ne,ref:s,title:r,type:`button`,children:(0,Q.jsx)(po,{$color:j})}),f&&m&&(0,gi.createPortal)((0,Q.jsxs)(mo,{ref:c,style:{top:m.top,left:m.left},children:[(0,Q.jsx)(ho,{$hue:_.h,onPointerDown:e=>{e.preventDefault(),e.currentTarget.setPointerCapture(e.pointerId),u.current=!0,re(e)},onPointerMove:e=>{u.current&&re(e)},onPointerUp:e=>{u.current=!1,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)},ref:l,children:(0,Q.jsx)(go,{style:{left:`${_.s*100}%`,top:`${(1-_.v)*100}%`,background:j}})}),(0,Q.jsx)(_o,{"aria-label":o(`color`),max:359,min:0,onChange:e=>te({..._,h:Number(e.target.value)}),type:`range`,value:Math.round(_.h)}),(0,Q.jsxs)(vo,{children:[(0,Q.jsx)(yo,{"aria-label":o(`hex_color`),maxLength:7,onBlur:()=>b(C),onChange:e=>{let n=e.target.value;b(n);let r=Xa(n),i=r?oo(r):null;i&&(v(co(i)),d.current=!0,t(r))},spellCheck:!1,value:y}),(0,Q.jsx)(wo,{onClick:()=>no(C),title:o(`save_color`),type:`button`,children:(0,Q.jsx)(cn,{size:11})})]}),(0,Q.jsx)(bo,{children:[`r`,`g`,`b`].map(e=>(0,Q.jsxs)(xo,{children:[(0,Q.jsx)(So,{children:e.toUpperCase()}),(0,Q.jsx)(Co,{"aria-label":e.toUpperCase(),inputMode:`numeric`,maxLength:3,onBlur:()=>A(e),onChange:t=>k(e,t.target.value),value:ee[e]})]},e))}),x.length>0&&(0,Q.jsxs)(To,{children:[(0,Q.jsx)(Eo,{children:o(`saved_colors`)}),(0,Q.jsx)(Do,{children:x.map(e=>(0,Q.jsxs)(Oo,{children:[(0,Q.jsx)(ko,{$color:e,onClick:()=>ie(e),title:e,type:`button`}),(0,Q.jsx)(Ao,{onClick:t=>{t.stopPropagation(),ro(e)},title:o(`remove_saved_color`),type:`button`,children:(0,Q.jsx)(wn,{size:8})})]},e))})]}),S.length>0&&(0,Q.jsxs)(To,{children:[(0,Q.jsx)(Eo,{children:o(`color_history`)}),(0,Q.jsx)(Do,{children:S.map(e=>(0,Q.jsx)(ko,{$color:e,onClick:()=>ie(e),title:e,type:`button`},e))})]})]}),document.body)]})}var fo=A.button`
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
`,po=A.span`
    width: 70%;
    height: 70%;
    border-radius: inherit;
    background: ${({$color:e})=>e};
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.18);
`,mo=A.div`
    position: fixed;
    z-index: 3600;
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 236px;
    padding: 8px;
    ${tt}
    ${L}
`,ho=A.div`
    position: relative;
    height: 132px;
    border-radius: var(--radius-sm);
    cursor: crosshair;
    touch-action: none;
    background:
        linear-gradient(to top, #000, transparent),
        linear-gradient(to right, #fff, hsl(${({$hue:e})=>e} 100% 50%));
`,go=A.span`
    position: absolute;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
    pointer-events: none;
`,_o=A.input`
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
`,vo=A.div`
    display: flex;
    gap: 5px;
`,yo=A.input`
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
`,bo=A.div`
    display: flex;
    gap: 5px;
`,xo=A.label`
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
`,So=A.span`
    color: var(--text-muted);
    font-size: 9px;
`,Co=A.input`
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
`,wo=A.button`    display: grid;
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
`,To=A.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,Eo=A.span`
    color: var(--text-muted);
    font-size: 9.5px;
`,Do=A.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`,Oo=A.div`
    position: relative;
`,ko=A.button`
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
`,Ao=A.button`
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

    ${Oo}:hover & {
        display: grid;
    }

    &:hover {
        color: var(--text-primary);
    }
`,jo=`#64748b`;function Mo(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function No({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=T(),[c,l]=(0,H.useState)(``),[u,d]=(0,H.useState)(`#2dd4bf`),f=(0,H.useRef)(null);(0,H.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,o),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,o)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,gi.createPortal)((0,Q.jsxs)(Po,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,Q.jsxs)(Fo,{children:[(0,Q.jsx)(`span`,{children:s(`tags`)}),(0,Q.jsx)(Io,{onClick:o,title:s(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:11})})]}),(0,Q.jsxs)(Lo,{children:[p.length===0&&(0,Q.jsx)(Bo,{children:s(`no_tags_yet`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,Q.jsxs)(Ro,{children:[(0,Q.jsx)(uo,{ariaLabel:s(`color_of_tag`,{tag:e}),title:s(`change_this_tag_s_color`),value:t,onChange:t=>g(e,t)}),(0,Q.jsxs)(zo,{$color:t,$ink:Mo(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,Q.jsx)(Ut,{size:11}),(0,Q.jsx)(`span`,{children:e})]})]},e)})]}),(0,Q.jsxs)(Vo,{children:[(0,Q.jsx)(uo,{ariaLabel:s(`color_of_the_new_tag`),title:s(`color_of_the_new_tag`),value:u,onChange:d}),(0,Q.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`new_tag`),spellCheck:!1,value:c}),(0,Q.jsx)(Ho,{onClick:_,type:`button`,children:s(`add`)})]})]}),document.body)}var Po=A.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${L}
`,Fo=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Io=A.button`
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
`,Lo=A.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Ro=A.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,zo=A.button`
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
`,Bo=A.span`
    font-size: 11px;
    color: var(--text-muted);
`,Vo=A.div`
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
`,Ho=A.button`
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
`;function Uo({path:e,name:t,isDirectory:n,size:r=18}){let i=N(e,n);return i?(0,Q.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,Q.jsx)(wt,{size:r}):(0,Q.jsx)(Xr,{name:Yr(t),size:r})}var Wo=`application/x-yafm-paths`,Go=[Wo,`text/uri-list`];function Ko(e){return e?.types.some(e=>Go.includes(e.toLowerCase()))??!1}function qo(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Wo);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Yo).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Jo=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Yo(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Jo?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Xo(e){return`file:///`+e.replace(/\\/g,`/`).split(`/`).map((e,t)=>t===0&&/^[a-zA-Z]:$/.test(e)?e:encodeURIComponent(e)).join(`/`)}function Zo(e,t,n=!0){e.dataTransfer.setData(Wo,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.setData(`text/uri-list`,t.map(Xo).join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Qo({items:t,clipboardItems:n,clipboardMove:r,visible:i,position:a,currentDirectory:o,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=T(),[h,g]=(0,H.useState)(()=>new Set),[_,v]=(0,H.useState)(!1),y=(0,H.useRef)(null),b=(0,H.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),x=(0,H.useMemo)(()=>n.filter(e=>h.has(e.path)),[n,h]),S=(0,H.useRef)(null);if((0,H.useEffect)(()=>{if(!i)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Ko(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=qo(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[i,c]),!i)return null;let C=new Set([...t,...n].map(e=>e.path)),w=C.size>0&&[...C].every(e=>h.has(e)),ee=C.size,E=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{g(w?new Set:C)},O=e=>{y.current={x:e.clientX,y:e.clientY,left:a.x,top:a.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},te=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},k=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},A=()=>{let e=b.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},ne=()=>{let e=b.map(e=>e.path);e.length!==0&&f(e)},re=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,r);let t=[...e].filter(([,e])=>e).map(([e])=>e),n=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,o,!0),n.length>0&&p(n,o,!1),g(new Set)},ie=(t,n)=>{let r=h.has(t.path);return(0,Q.jsxs)(us,{$checked:r,draggable:!0,onClick:()=>E(t.path),onDragStart:e=>{Zo(e,r&&h.size>0?[...new Set([...b,...x].map(e=>e.path))]:[t.path],n)},title:t.path,children:[(0,Q.jsx)(ds,{$checked:r,onClick:e=>{e.stopPropagation(),E(t.path)},type:`button`,children:r&&(0,Q.jsx)(Ut,{size:8})}),(0,Q.jsx)(Uo,{isDirectory:t.isDirectory,name:t.name,path:t.path,size:16}),(0,Q.jsxs)(fs,{children:[(0,Q.jsx)(ps,{children:t.name}),(0,Q.jsx)(ms,{children:e(t.path)})]})]},`${n?`tray`:`clipboard`}:${t.path}`)},j=e=>{Ko(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,Q.jsxs)($o,{$dragging:_,"data-tray":`true`,ref:S,style:{left:a.x,top:a.y},onDragEnter:j,onDragOver:j,onDrop:e=>{let{paths:t}=qo(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,Q.jsxs)(es,{onPointerDown:O,onPointerMove:te,onPointerUp:k,children:[(0,Q.jsxs)(ts,{children:[(0,Q.jsx)(It,{size:12}),m(`tray`),(0,Q.jsx)(ns,{children:ee})]}),(0,Q.jsxs)(rs,{onPointerDown:e=>e.stopPropagation(),children:[(0,Q.jsx)(is,{onClick:D,title:m(w?`select_none`:`select_all`),type:`button`,children:m(w?`none`:`all`)}),(0,Q.jsx)(is,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,Q.jsx)(as,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]})]}),(0,Q.jsxs)(os,{children:[(0,Q.jsxs)(cs,{children:[m(`in_this_app`),(0,Q.jsx)(ns,{children:t.length})]}),t.length===0&&(0,Q.jsx)(ss,{children:m(`drag_files_or_folders_here`)}),t.map(e=>ie(e,!0)),n.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(cs,{$clipboard:!0,children:[m(`clipboard`),(0,Q.jsx)(ns,{children:n.length}),r&&(0,Q.jsx)(ls,{children:m(`cut`)})]}),n.map(e=>ie(e,r))]})]}),(0,Q.jsxs)(hs,{children:[(0,Q.jsx)(gs,{$plain:!0,disabled:b.length===0,onClick:ne,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,Q.jsx)(gs,{disabled:h.size===0||!o,onClick:re,type:`button`,children:m(`move_here`)}),(0,Q.jsx)(gs,{$danger:!0,disabled:b.length===0,onClick:A,type:`button`,children:m(`remove`)})]})]})}var $o=A.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${tt}
    ${L}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,es=A.div`
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
`,ts=A.span`
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
`,ns=A.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,rs=A.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,is=A.button`
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
`,as=A.button`
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
`,os=A.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,ss=A.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,cs=A.div`
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
`,ls=A.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,us=A.div`
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
`,ds=A.button`
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
`,fs=A.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,ps=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ms=A.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hs=A.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,gs=A.button`
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
`,_s={shares:[],webRunning:!1,webPort:0,urls:[],preferredUrl:null,deviceId:``,deviceName:``,fingerprint:``};async function vs(){return E.available?await E.request(`share.list`):_s}async function ys(e,t){return E.available?await E.request(`share.add`,{path:e,mode:t}):_s}async function bs(e){return E.available?await E.request(`share.remove`,{id:e}):_s}async function xs(e,t){return E.available?await E.request(`share.mode`,{id:e,mode:t}):_s}async function Ss(){return E.available?(await E.request(`share.peers`)).peers??[]:[]}async function Cs(){return E.available?(await E.request(`share.peers.refresh`)).peers??[]:[]}async function ws(e,t){E.available&&await E.request(`share.pair.start`,{host:e,port:t})}async function Ts(e,t){E.available&&await E.request(`share.pair.respond`,{requestId:e,accept:t})}async function Es(e,t){E.available&&await E.request(`share.port`,{mode:t,port:e})}var Ds=`yafm://share/`;function Os(e){return e.toLowerCase().startsWith(Ds)}function ks(e){if(!Os(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function As(e,t,n=``){let r=`${Ds}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function js(e){let t=ks(e);if(!t||!E.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await E.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:As(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:As(t.deviceId,t.shareId,n.parent),total:n.entries?.length??0,signature:0,entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Ms(e){let t=ks(e);if(!t||!E.available)throw Error(`This shared file is only available in the desktop app.`);let n=await E.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Ns(e){await je(await Ms(e))}async function Ps(){return E.available?await E.request(`share.certificate`):null}async function Fs(e,t){return await E.request(`share.certificate.import`,{path:e,password:t})}async function Is(){return await E.request(`share.certificate.reset`)}async function Ls(){return E.available?(await E.request(`share.devices.clear`)).devices??[]:[]}async function Rs(){return E.available?(await E.request(`share.devices.list`)).devices??[]:[]}async function zs(e,t,n){return E.available?(await E.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function Bs(e){return E.available?(await E.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function Vs(){return E.available?(await E.request(`share.access.status`)).hasPassword:!1}async function Hs(e){return E.available?(await E.request(`share.access.password`,{password:e})).hasPassword:!1}var Us=60,Ws=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],Gs=new Set,Ks=`yafm.columnWidths`,qs=`yafm.reset-column-widths`,Js=64,Ys=720,Xs=160,Zs=190,Qs=120;function $s({listing:e,loading:t,error:r,find:i=ye,view:a,showImages:o,imageStripHeight:s=Zs,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:f,onOpenFile:p,onSelectEntry:m,onOpenExternally:g,showCheckboxes:_=!0,openOnSingleClick:y=!1,shortcuts:x=Dr(),enableShortcuts:S=!0,refreshToken:C=0,onRefresh:w,onRename:ee,onClipboardChanged:E,cutPaths:D=Gs,onTransfer:O,onAddToTray:te,platform:k,onAddFavorite:A,onRemoveFavorite:ne,favoritePaths:re,onExtractArchive:ie,onOpenAsArchive:j,onAddToStartMenu:ae,onPaste:M,confirmDelete:se=!1,previewVideoAudio:le=!1,previewVideoAutoplay:ue=!1,showDetails:de=!0,onPreviewInfo:fe,onActivate:N,groupOf:pe,onGridScroll:me,gridFooter:he,allowBackgroundMenu:ge=!0,readOnly:P=!1,onSelectionChange:_e,onSelectionCountChange:ve,selectionMenuRequest:be,selectionMenuId:xe,singleSelect:Se=!1,pendingRename:Ce=null,pendingRenameToken:we=0,selectMatchesToken:Ee=0,onLoadMore:De,onEnsureComplete:Oe,selectAllToken:ke=0}){let F=T(),Ae=Z(),je=(0,H.useRef)(null),Ne=(0,H.useRef)(null),Pe=(0,H.useRef)(null),Fe=(0,H.useRef)(null),Le=(0,H.useRef)(0),Re=(0,H.useRef)(null),[ze,Be]=(0,H.useState)({top:0,height:640}),Ve=(0,H.useRef)(null),He=(0,H.useRef)(null),Ue=(0,H.useRef)(!1),We=(0,H.useRef)(!1),Ge=(0,H.useRef)(null),qe=(0,H.useRef)(null),[Je,Ye]=(0,H.useState)(null),[Xe,Ze]=(0,H.useState)(s),[I,Qe]=(0,H.useState)(()=>new Set),[$e,et]=(0,H.useState)(()=>Ie(Ks)??{}),tt=(0,H.useRef)(I),nt=(0,H.useRef)([]);tt.current=I,(0,H.useEffect)(()=>_e?.([...I]),[I,_e]),(0,H.useEffect)(()=>ve?.(I.size),[I,ve]),(0,H.useEffect)(()=>{let e=be;if(!e||e.token===L.current)return;L.current=e.token;let t=[...tt.current];t.length!==0&&(at({x:e.x,y:e.y,paths:t,background:!1}),Jn().then(yt,()=>yt(!1)))},[be]);let[rt,at]=(0,H.useState)(null),L=(0,H.useRef)(0),[ot,st]=(0,H.useState)(null),[ct,lt]=(0,H.useState)(null),[ut,ft]=(0,H.useState)(null),pt=(0,H.useRef)(ut);pt.current=ut;let mt=(0,H.useRef)(0),ht=(0,H.useRef)(N);ht.current=N;let[R,gt]=(0,H.useState)(()=>{let e=dt(`yafm.preview.width`,320);return e>=220?e:320}),_t=(0,H.useCallback)(e=>{gt(e),ce(`yafm.preview.width`,e)},[]),[vt,yt]=(0,H.useState)(!1),bt=(0,H.useCallback)((e,t)=>{let n=[...tt.current];n.length!==0&&(at({x:e,y:t,paths:n,background:!1}),Jn().then(yt,()=>yt(!1)))},[]);(0,H.useEffect)(()=>{if(xe)return it(xe,I.size>0?bt:null),()=>it(xe,null)},[xe,I,bt]),(0,H.useEffect)(()=>{Qe(new Set),ft(null),at(null),He.current=null},[e?.path]),(0,H.useEffect)(()=>{Ze(s)},[s]),(0,H.useEffect)(()=>{Qe(new Set),ft(null),He.current=null},[C]);let xt=e=>{Ve.current={y:e.clientY,height:Xe},e.currentTarget.setPointerCapture(e.pointerId)},St=e=>{let t=Ve.current;if(!t)return;let n=Math.max(Qs,Math.round(window.innerHeight*.7));Ze(Math.min(n,Math.max(Qs,t.height+t.y-e.clientY)))},Ct=e=>{Ve.current&&(Ve.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(Xe))},wt=()=>{Ze(Zs),c?.(Zs)},Tt=i.query.length>0,Et=(0,H.useMemo)(()=>Ws.filter(e=>a.columns?.includes(e.id)),[a.columns]),Dt=a.columns?.includes(`linkTarget`)??!1,Ot=(0,H.useCallback)(e=>Math.min(Ys,Math.max(Js,$e[e.id]??e.width)),[$e]),kt=(0,H.useMemo)(()=>`minmax(160px, 1fr) ${Et.map(e=>`${Ot(e)}px`).join(` `)}`.trim(),[Et,Ot]),At=(0,H.useRef)(null),jt=(0,H.useRef)(null),Mt=()=>Math.floor(jt.current?.getBoundingClientRect().width??Xs),Nt=e=>{let t=Et[0];t&&(e.preventDefault(),e.stopPropagation(),At.current={left:{id:t.id,start:Ot(t)},startX:e.clientX,nameStart:Mt()})},Pt=(e,t)=>{let n=Et[t],r=Et[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),At.current={left:{id:n.id,start:Ot(n)},right:{id:r.id,start:Ot(r)},startX:e.clientX,nameStart:0})},Ft=e=>et(t=>{let n={...t};return delete n[e],Te(Ks,n),n});(0,H.useEffect)(()=>{let e=e=>{let t=At.current;if(!t)return;let n=e.clientX-t.startX;et(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Xs),i=Math.min(Math.min(Ys,t.left.start+r),Math.max(Js,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Ys,Math.max(Js,t.left.start+n)),a=Math.min(Math.min(Ys,r-Js),Math.max(Math.max(Js,r-Ys),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{At.current&&(At.current=null,et(e=>(Te(Ks,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,H.useEffect)(()=>{let e=()=>et(()=>(Te(Ks,{}),{}));return window.addEventListener(qs,e),()=>window.removeEventListener(qs,e)},[]);let It=(0,H.useMemo)(()=>({query:i?.query??``,matchCase:i?.matchCase??!1,regex:i?.regex??!1}),[i?.query,i?.matchCase,i?.regex]),Lt=i?.mode??`dim`,Rt=(0,H.useDeferredValue)(It),zt=(0,H.useRef)(null),z=(0,H.useMemo)(()=>{if(!e)return[];let t=e.git?new Map(Object.entries(e.git.entries).map(([e,t])=>[e.toLowerCase(),t])):null,n=[e.path,e.signature,e.ordered??!1,e.tags,e.git,a.sort===`size`||a.sort===`items`?e.folderSizes:null,a.sort===`size`||a.sort===`items`?e.counts:null,Tt,Rt,Lt,Ae,a.sort,a.sortDescending,F,D],r=n=>{let r=n.isDirectory?Gr(Ae,n.fullPath):void 0,i=r?.name||n.name;return{entry:n,place:r,label:i,ranges:Tt?oe(i,Rt):null,tags:e.tags[n.name]??[],git:t?.get(n.name.toLowerCase())??null,cut:D.has(n.fullPath)}},i=zt.current,o=i!==null&&n.length===i.shape.length&&n.every((e,t)=>e===i.shape[t]),s=i!==null&&o&&i.entries.length<=e.entries.length&&(i.entries.length===0||i.entries[0]===e.entries[0]&&i.entries[i.entries.length-1]===e.entries[i.entries.length-1]),c=e.ordered&&(a.sort===`modified`||a.sort===`created`),l=ic(a,e,F),u;if(s&&i!==null){let t=[];for(let n=i.entries.length;n<e.entries.length;n++){let i=r(e.entries[n]);Tt&&Lt!==`dim`&&i.ranges===null||t.push(i)}u=c?t.length===0?i.rows:[...i.rows,...t]:t.length>4e3?ac([...i.rows,...t],a,e,F):oc(i.rows,t,l)}else{let t=e.entries.map(r).filter(e=>!Tt||Lt===`dim`||e.ranges!==null);u=c?t:ac(t,a,e,F)}return zt.current={shape:n,entries:e.entries,rows:u},u},[e?.entries,e?.tags,e?.path,e?.signature,e?.ordered,e?.git,a.sort===`size`||a.sort===`items`?e?.folderSizes:null,a.sort===`size`||a.sort===`items`?e?.counts:null,Tt,Rt,Lt,Ae,a.sort,a.sortDescending,F,D]);nt.current=z,(0,H.useEffect)(()=>{ke!==0&&Qe(new Set(nt.current.map(e=>e.entry.fullPath)))},[ke]),(0,H.useEffect)(()=>{Ee!==0&&Qe(new Set(nt.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[Ee]);let Bt=Math.max(40,a.iconSize+20),Vt=Math.max(0,Math.floor(ze.top/Bt)-4),Ht=Math.min(z.length,Vt+Math.ceil(ze.height/Bt)+10),Wt=(0,H.useMemo)(()=>z.slice(Vt,Ht),[z,Vt,Ht]);(0,H.useEffect)(()=>{De&&z.length>0&&Ht>=z.length&&De()},[De,z.length,Ht]),(0,H.useEffect)(()=>{let e=Fe.current;if(!e||a.mode!==`list`)return;e.scrollTop=0,Be({top:0,height:e.clientHeight});let t=()=>Be(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[a.mode]),(0,H.useEffect)(()=>{Be(e=>({...e,top:0})),Fe.current&&(Fe.current.scrollTop=0)},[e?.path]),(0,H.useEffect)(()=>{if(i.currentPath){if(a.mode===`list`){let e=z.findIndex(e=>e.entry.fullPath===i.currentPath),t=Fe.current;if(e<0||!t)return;let n=e*Bt;(n<t.scrollTop||n+Bt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else je.current?.scrollIntoView({block:`nearest`})}},[i.currentPath,a.mode,z,Bt]);let[Gt,Kt]=(0,H.useState)({section:0,line:0}),[qt,Jt]=(0,H.useState)({columns:0,header:44,gap:10,margin:22}),Yt=(0,H.useRef)(null),Xt=a.mode===`grid`,Zt=(0,H.useMemo)(()=>{if(!Xt)return[];if(!pe)return lc(z,cc);let e=[];for(let t of z){let n=pe(t.entry),r=e[e.length-1];!r||r.label!==n.label?e.push({id:`${n.id}#${e.length}`,label:n.label,rows:[t]}):r.rows.push(t)}return e},[z,Xt,pe]);(0,H.useLayoutEffect)(()=>{let e=Ge.current;if(!e)return;let t=e.querySelector(`h3`),n=t?.nextElementSibling;if(!t||!n)return;let r=getComputedStyle(n),i=r.gridTemplateColumns.split(` `).filter(Boolean).length,a=Number.parseFloat(r.rowGap)||0,o=t.getBoundingClientRect().height+(Number.parseFloat(getComputedStyle(t).marginBottom)||0),s=e.querySelectorAll(`section`),c=s.length>1?Number.parseFloat(getComputedStyle(s[1]).marginTop)||0:qt.margin;Jt(e=>e.columns===i&&e.gap===a&&Math.abs(e.header-o)<.5&&Math.abs(e.margin-c)<.5?e:{columns:i,header:o,gap:a,margin:c})});let[,Qt]=(0,H.useState)(0);(0,H.useEffect)(()=>{let e=Ge.current;if(!e||a.mode!==`grid`)return;let t=new ResizeObserver(()=>Qt(e=>e+1));return t.observe(e),()=>t.disconnect()},[a.mode]);let B=(0,H.useMemo)(()=>{let e=a.gridSize,t=Math.max(1,qt.columns),{header:n,gap:r,margin:i}=qt,o=0;return{items:Zt.map((a,s)=>{let c=Math.ceil(a.rows.length/t),l=c===0?0:c*e+(c-1)*r,u={section:a,start:o,height:n+l};return o=u.start+u.height+(s===Zt.length-1?0:i),u}),tile:e,columns:t,header:n,gap:r,margin:i,total:o}},[Zt,qt,a.gridSize]),$t=(0,H.useMemo)(()=>{let{items:e,columns:t,tile:n,gap:r,header:i,margin:a,total:o}=B;if(e.length===0)return{parts:[],top:0,height:0,total:0};let s=Math.min(Math.max(Gt.section,0),e.length-1),c=e[s],l=Math.max(1,Math.ceil(c.section.rows.length/t)),u=Math.min(Math.max(Gt.line,0),l-1),d=c.start+(u>0?i+u*(n+r):0),f=[],p=320,m=0;for(let o=s;o<e.length&&p>0;o++){let c=e[o],l=o===s?u*t:0,d=Math.min(c.section.rows.length-l,p);if(d<=0)continue;let h=!(o===s&&u>0),g=Math.ceil(d/t);f.push({id:c.section.id,label:c.section.label,rows:c.section.rows.slice(l,l+d),total:c.section.rows.length,headerShown:h}),m+=(h?i:0)+g*n+(g-1)*r,f.length>1&&(m+=a),p-=d}return{parts:f,top:d,height:m,total:o}},[B,Gt]),en=(0,H.useRef)(null);(0,H.useLayoutEffect)(()=>{let e=Ge.current,t=Yt.current;if(!e||!t)return;let n=t.getBoundingClientRect().top-e.getBoundingClientRect().top+e.scrollTop,r=Math.max(0,e.scrollTop-n),i=Sc(B,Math.max(0,r-e.clientHeight/2));Kt(e=>e.section===i.section&&e.line===i.line?e:i)},[B.columns,B.tile,B.header,B.gap,B.margin]),(0,H.useLayoutEffect)(()=>{let e=en.current,t=Ge.current,n=Yt.current;if(en.current=null,e===null||!t||!n)return;let r=n.getBoundingClientRect().top-t.getBoundingClientRect().top+t.scrollTop;t.scrollTop=Math.max(0,r+e.top-t.clientHeight/3)},[Gt]);let tn=(0,H.useRef)(0),nn=(0,H.useCallback)(e=>{tn.current===0&&(tn.current=requestAnimationFrame(()=>{tn.current=0;let t=Yt.current;if(!t)return;let n=t.getBoundingClientRect().top-e.getBoundingClientRect().top+e.scrollTop,r=Math.max(0,e.scrollTop-n),i=e.clientHeight,{top:a,height:o}=$t;if(r<a-2||r+i*1.5>a+o){let e=Sc(B,Math.max(0,r-i));Kt(t=>t.section===e.section&&t.line===e.line?t:e)}e.scrollTop+i>=e.scrollHeight-600&&De?.()}))},[B,$t,De]);(0,H.useEffect)(()=>()=>{Le.current!==0&&cancelAnimationFrame(Le.current),tn.current!==0&&cancelAnimationFrame(tn.current)},[]);let rn=(0,H.useCallback)(e=>{for(let t=0;t<B.items.length;t++){let r=B.items[t].section.rows.findIndex(t=>n(t.entry.fullPath,e));if(r<0)continue;let i=Math.floor(r/B.columns),a=B.items[t].start+(i>0?B.header+i*(B.tile+B.gap):0);return en.current={top:a},Kt({section:t,line:i}),!0}return!1},[B]);(0,H.useEffect)(()=>{let e=Ne.current;if(!e||e.length===0)return;let t=e.filter(e=>z.some(t=>n(t.entry.fullPath,e)));if(t.length===0)return;Ne.current=null;let r=t[0],i=z.findIndex(e=>n(e.entry.fullPath,r));Qe(new Set(t)),He.current=r,a.mode===`list`&&Fe.current&&i>=0?Fe.current.scrollTop=Math.max(0,i*Bt-Fe.current.clientHeight/2):rn(r)},[z,Bt,a.mode,rn]),(0,H.useEffect)(()=>{en.current=null,Kt({section:0,line:0}),Ge.current&&(Ge.current.scrollTop=0)},[e?.path]),(0,H.useEffect)(()=>{Gt.section<Zt.length||(en.current=null,Kt({section:0,line:0}),Ge.current&&(Ge.current.scrollTop=0))},[Zt.length,Gt.section]),(0,H.useEffect)(()=>{i.currentPath&&a.mode===`grid`&&rn(i.currentPath)},[i.currentPath,rn,a.mode]);let an=(0,H.useMemo)(()=>o?z.filter(e=>!e.entry.isDirectory&&Vr(e.entry.name)):[],[z,o]),on=an.length,sn=(0,H.useMemo)(()=>an.slice(0,Us),[an]),cn=(0,H.useMemo)(()=>o?lc(sn,sc):[],[sn,o]),ln=(0,H.useMemo)(()=>cn.flatMap(e=>e.rows.map(e=>e.entry.fullPath)),[cn]),un=ln.filter(e=>I.has(e)).length,dn=ln.length>0&&un===ln.length,fn=un>0&&!dn,pn=(0,H.useMemo)(()=>z.map(e=>e.entry.fullPath),[z]),mn=(0,H.useMemo)(()=>Xt?Zt.flatMap(e=>e.rows.map(e=>e.entry.fullPath)):pn,[pn,Xt,Zt]),hn=z.length>0&&I.size>=z.length,gn=I.size>0&&!hn,_n=()=>{Se||(hn?Cn():Qe(new Set(pn)))},vn=(0,H.useCallback)((e,t)=>{Se||e.length===0||(Qe(n=>{let r=new Set(n);for(let n of e)t?r.add(n):r.delete(n);return r}),t&&(He.current=e[0]??null))},[Se]),V=e?.path??``,yn=(0,H.useCallback)((e,t)=>{if(Se){He.current=t,Qe(new Set([t]));return}let n=e.ctrlKey||e.metaKey;Qe(r=>{if(e.shiftKey&&He.current!==null){let e=pn.indexOf(He.current),i=pn.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(pn[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),He.current=t,e}return He.current=t,new Set([t])})},[pn,Se]),bn=(0,H.useCallback)((e,t)=>{We.current=!1,yn(e,t)},[yn]),xn=(0,H.useCallback)((e,t)=>{We.current=!0,yn(e,t)},[yn]),Sn=(0,H.useCallback)(e=>{Se?(He.current=e,Qe(new Set([e]))):(He.current=e,Qe(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[Se]),Cn=(0,H.useCallback)(()=>{He.current=null,We.current=!1,Qe(new Set)},[]);(0,H.useEffect)(()=>{if(we===0||!Ce||mt.current===we||!e?.entries.some(e=>e.fullPath===Ce))return;mt.current=we,He.current=Ce,Qe(new Set([Ce])),ft({path:Ce,value:v(Ce)});let t=z.findIndex(e=>e.entry.fullPath===Ce),n=Fe.current;if(!(t<0||!n)){if(a.mode===`list`){let e=t*Bt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Ce)}"]`)?.scrollIntoView({block:`nearest`})})}},[Fe,e,Ce,we,Bt,z,a.mode]),(0,H.useEffect)(()=>{if(!ut)return;let e=z.findIndex(e=>e.entry.fullPath===ut.path),t=Fe.current;if(!(e<0||!t)){if(a.mode===`list`){let n=e*Bt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(ut.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[Fe,ut,Bt,z,a.mode]);let wn=(0,H.useCallback)(()=>at(null),[]),Tn=(0,H.useCallback)((e,t)=>{e.isDirectory?f(e.fullPath,Pr(t)):p?.(e.fullPath,Pr(t))},[f,p]),En=(0,H.useCallback)((e,t,n)=>{Ye({entry:e,x:t,y:n})},[]),Dn=(0,H.useRef)(null),On=(0,H.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Zo(e,I.has(n)?[...I]:[n])},[I]),kn=(0,H.useCallback)(e=>{if(!Ko(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Dn.current=t?.dataset.directory===`true`?t.dataset.path??V:V,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[V]),An=(0,H.useCallback)(e=>{if(P)return;let{paths:t,move:n}=qo(e),r=Dn.current??V;Dn.current=null,t.length!==0&&O&&(e.preventDefault(),O(t,r,!e.ctrlKey&&n))},[V,O,P]),jn=(0,H.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),P||!t&&!ge)return;let n=tt.current;t&&!n.has(t)&&Qe(new Set([t])),t&&(He.current=t);let r=t?n.has(t)?[...n]:[t]:[];at({x:e.clientX,y:e.clientY,paths:r,background:!t}),Jn().then(yt,()=>yt(!1))},[ge,V]),Mn=(0,H.useCallback)(()=>w?.(),[w]),Nn=(e,t)=>{He.current=e,Qe(new Set([e])),t&&ft({path:e,value:v(e)}),Mn()},Pn=ot&&(0,Q.jsx)(Ai,{initialDirectory:V,initialName:ot.name,onCancel:()=>st(null),onCompress:async e=>{let t=await br(ot.paths,e);return!t.ok||!t.path?(Me(t.error??F(`could_not_create_the_archive`)),!1):(Nn(t.path,!1),!0)}}),Fn=async(e,t=!1)=>{let n=e,r=t;if(e.some(Os)){let t=[];for(let n of e)if(!Os(n))t.push(n);else{if(nt.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){Me(F(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await Ms(n))}catch(e){Me(e instanceof Error?e.message:F(`the_file_could_not_be_copied`));return}}n=t,r=!1}await qn(n,r)&&(yt(!0),E?.())},In=async e=>{if(!e)return;let t=await er(e);t.cancelled||(t.ok?(Ne.current=t.created,Mn(),M?.()):Me(F(`nothing_on_the_clipboard_could_be_pasted_here`)))},Ln=async(e,t=!1)=>{if(!V)return;let n=e===null?await rr(V,t):await sr(V,e);!n.ok||n.path===null?Me(n.error??F(`could_not_create_the_item`)):(He.current=n.path,Qe(new Set([n.path])),ft({path:n.path,value:v(n.path)}),Mn())},U=e=>{Qe(new Set([e.fullPath])),He.current=e.fullPath,ft({path:e.fullPath,value:e.name})},W=(0,H.useCallback)(e=>ft(t=>t&&{...t,value:e}),[]),Rn=(0,H.useCallback)(()=>ft(null),[]),zn=(0,H.useCallback)(async()=>{let e=pt.current;if(ft(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=nt.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await nr(e.path,t);r.ok?(Cn(),r.path&&ee?.(e.path,r.path),Mn(),window.setTimeout(()=>Mn(),250)):Me(r.error??F(`could_not_rename_the_entry`))},[Cn,ee,Mn,F]),Bn=async(e,t=!1)=>{if((t||se)&&!await Vn(e,t))return;let n=t,r=await tr(e,n);if(!r.ok&&r.needsPermanent){if(!await Vn(e,!0))return;n=!0,r=await tr(e,!0)}if(!r.ok&&r.needsRunningConfirm){if(!await G(e,n,r.running??[],!1))return;r=await tr(e,n,!0)}if(!r.ok&&!r.needsRunningConfirm&&(r.running?.length??0)>0)await G(e,n,r.running??[],!0);else if(r.ok)Cn(),Mn();else{if(r.cancelled)return;Me(r.error??F(n?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},Vn=(0,H.useCallback)((e,t)=>new Promise(n=>lt({paths:e,permanent:t,resolve:n})),[]),G=(0,H.useCallback)((e,t,n,r)=>new Promise(i=>lt({paths:e,permanent:t,running:!0,blocked:r,programs:n,resolve:i})),[]),Hn=(0,H.useCallback)(e=>{lt(t=>(t?.resolve(e),null))},[]),Un=(0,H.useCallback)(()=>We.current&&qe.current!==null,[]),Wn=(0,H.useCallback)(()=>Un()?ln:mn,[Un,ln,mn]),Gn=(0,H.useCallback)(e=>{let t=Un(),n=t?qe.current:a.mode===`grid`?Ge.current:Fe.current;if(!n||!t&&a.mode===`list`&&(e===`left`||e===`right`))return;let r=Wn();if(r.length===0)return;let i=He.current&&r.includes(He.current)?He.current:I.size===1?[...I][0]:null,o=[...n.querySelectorAll(`[data-path]`)],s=i?o.find(e=>e.dataset.path===i):void 0,c=i?r.indexOf(i):-1,l=e===`left`?-1:1,u;u=s?e===`left`||e===`right`?r[((c<0?l>0?-1:0:c)+l+r.length)%r.length]:tc(o,s.getBoundingClientRect(),e)?.dataset.path??(c>=0?r[c+(e===`down`?1:-1)]:r[0]):o[0]?.dataset.path??r[0],u&&(Qe(new Set([u])),He.current=u,window.requestAnimationFrame(()=>{n.querySelector(`[data-path="${CSS.escape(u)}"]`)?.scrollIntoView({block:`nearest`})}))},[Wn,I,Un,a.mode]);(0,H.useEffect)(()=>{if(!S||rt)return;let e=e=>{if(Lr(e.target))return;ht.current?.();let t=Fr(e),n=[...I],r=n.length===1?z.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`arrowleft`||t===`arrowright`)e.preventDefault(),Gn(t.slice(5));else if(t===`home`||t===`end`){let n=Wn();if(n.length===0)return;e.preventDefault();let r=t===`home`?n[0]:n[n.length-1];Qe(new Set([r])),He.current=r,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(r)}"]`)?.scrollIntoView({block:`nearest`})})}else J(x,`copy`,t)&&i(()=>{n.length>0&&Fn(n)}),J(x,`duplicate`,t)&&i(()=>{n.length!==0&&V&&Yn(n,V,!1).then(e=>{e.ok&&(e.created.length>0&&Qe(new Set(e.created)),Mn())})}),J(x,`cut`,t)&&i(()=>{n.length>0&&Fn(n,!0)}),J(x,`paste`,t)&&i(()=>void In(V)),J(x,`delete`,t)&&i(()=>{n.length>0&&Bn(n)}),J(x,`deletePermanently`,t)&&i(()=>{n.length>0&&Bn(n,!0)}),J(x,`selectAll`,t)&&i(()=>{let e=Ue.current&&o&&sn.length>0?sn.map(e=>e.entry.fullPath):pn;Qe(new Set(e)),Oe?.(),He.current=e[0]??null}),J(x,`invertSelection`,t)&&i(()=>{Qe(new Set(pn.filter(e=>!I.has(e)))),He.current=pn[0]??null}),J(x,`rename`,t)&&r&&i(()=>void U(r)),J(x,`open`,t)&&r&&i(()=>{r.isDirectory?f(r.fullPath):p?.(r.fullPath)}),J(x,`newFolder`,t)&&i(()=>void Ln(null)),J(x,`terminal`,t)&&i(()=>void fr(V)),J(x,`properties`,t)&&i(()=>void cr(n.length>0?n:V?[V]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[pn,Fn,Ln,V,S,rt,f,p,Wn,In,Bn,U,z,I,x,Gn]);let Kn=ct?.running?(0,Q.jsx)(Ui,{confirmLabel:ct.permanent?F(`delete`):F(`move`),message:ct.blocked?F(`programs_are_using_target_close_them_and_try_again`,{programs:wc(ct.programs),target:ct.paths.length===1?F(`this_item`):F(`count_items`,{count:ct.paths.length})}):F(`programs_are_using_target_continue`,{programs:wc(ct.programs),target:ct.paths.length===1?F(`this_item`):F(`count_items`,{count:ct.paths.length})}),onCancel:()=>Hn(!1),onConfirm:ct.blocked?void 0:()=>Hn(!0),programs:ct.programs??[]}):ct?(0,Q.jsx)(Ke,{confirmLabel:ct.permanent?F(`delete`):F(`move`),danger:ct.permanent,message:ct.permanent?F(`permanently_delete_target_this_cannot_be_undone`,{target:ct.paths.length===1?F(`this_item`):F(`count_items`,{count:ct.paths.length})}):F(`move_target_to_the_recycle_bin`,{target:ct.paths.length===1?F(`this_item`):F(`count_items`,{count:ct.paths.length})}),onCancel:()=>Hn(!1),onConfirm:()=>Hn(!0),open:!0,title:ct.permanent?F(`delete_permanently`):F(`move_to_the_recycle_bin`)}):null,K=(0,H.useMemo)(()=>{if(!e||I.size===0)return null;let t=pn.find(e=>I.has(e));return t?z.find(e=>e.entry.fullPath===t)?.entry??null:null},[pn,e,z,I]),Xn=(0,H.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:F(`type`),value:F(`folder`)},{label:F(`location`),value:e.parent??`—`},{label:F(`path`),value:e.path},{label:F(`size`),value:h(t)},{label:F(`items`),value:b(F,n,`k_1_item`,`count_items`)},{label:F(`modified`),value:`—`},{label:F(`created`),value:`—`},{label:F(`attributes`),value:`—`}]}},[e,F]),Zn=(0,H.useMemo)(()=>{if(!K||!e)return null;let t=K.isDirectory?e.folderSizes[K.name]:void 0,n=e.tags[K.name]??[],r=K.name.lastIndexOf(`.`),i=r>0&&r<K.name.length-1?K.name.slice(r+1).toUpperCase():`—`;return{name:K.name,path:K.fullPath,isDirectory:K.isDirectory,size:K.size,modified:K.modified,created:K.created,fields:[{label:F(`type`),value:Qr(K.name,K.isDirectory,K.linkTarget,F)},...K.isEncrypted?[{label:F(`encryption`),value:F(`password_required`)}]:[],{label:F(`extension`),value:K.isDirectory?`—`:i},{label:F(`location`),value:e.path},{label:F(`full_path`),value:K.fullPath},{label:F(`size`),value:K.isDirectory?t===void 0?`—`:h(t):h(K.size)},...K.isDirectory?[{label:F(`items`),value:`${e.counts[K.name]??`—`}`}]:[],{label:F(`modified`),value:d(K.modified),time:K.modified},{label:F(`created`),value:d(K.created),time:K.created},{label:F(`link_status`),value:K.linkTarget==null?K.linkCount>1?F(`hard_link`):`—`:K.linkValid?`ok`:F(`broken`)},...K.linkTarget?[{label:F(`target`),value:K.linkTarget}]:[],...K.linkCount>1?[{label:F(`links`),value:String(K.linkCount)}]:[],{label:F(`attributes`),value:[K.isHidden?F(`hidden`):``,K.isSystem?F(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:F(`tags`),value:n.join(`, `)}]:[]]}},[e,K,F]),Qn=rt?.paths.length===1?rt.paths[0]:null,$n=Qn?z.find(e=>e.entry.fullPath===Qn)?.entry:void 0,ir=$n?{path:$n.fullPath,isDirectory:$n.isDirectory}:null,ar=Zn??Xn,or=(0,H.useRef)(fe);or.current=fe,(0,H.useEffect)(()=>{or.current?.(ar)},[fe,ar]);let lr=de&&ar&&(0,Q.jsx)(da,{info:ar,onWidth:_t,selectionNote:I.size>1?b(F,I.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:le,videoAutoplay:ue,width:R});return r&&!e?(0,Q.jsx)(Pl,{children:(0,Q.jsx)(Il,{children:r})}):!e&&!t?(0,Q.jsx)(Pl,{children:(0,Q.jsx)(Fl,{children:F(`nothing_selected`)})}):a.mode===`grid`?(0,Q.jsxs)(Uc,{onPointerDown:N,children:[(0,Q.jsxs)(Wc,{children:[(0,Q.jsxs)(Qc,{ref:Ge,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Cn()},onContextMenu:e=>jn(e),onDragOver:kn,onDragStart:On,onDrop:An,onScroll:e=>{let t=e.currentTarget;me?.(t),nn(t)},children:[_&&z.length>0&&(0,Q.jsxs)(Bc,{children:[(0,Q.jsx)(Rc,{$checked:!Se&&hn,$partial:!Se&&gn,"aria-label":F(hn?`select_none`:`select_all`),disabled:Se,onClick:e=>{e.stopPropagation(),_n()},title:F(hn?`select_none`:`select_all`),type:`button`,children:hn?(0,Q.jsx)(Ut,{size:10}):gn?(0,Q.jsx)(zc,{}):null}),(0,Q.jsx)(`span`,{children:F(hn?`select_none`:`select_all`)})]}),t&&!e?(0,Q.jsx)(il,{$size:a.gridSize,children:(0,Q.jsx)(Oc,{size:a.gridSize})}):(0,Q.jsxs)(`div`,{ref:Yt,children:[(0,Q.jsx)($c,{"aria-hidden":`true`,style:{height:$t.top}}),(0,Q.jsx)(Ac,{counts:e?.counts,currentPath:Tt?i.currentPath:null,groups:$t.parts,gridSize:a.gridSize,innerRef:je,onContextMenu:jn,onOpen:f,onOpenFile:p,onRenameCancel:Rn,onRenameChange:W,onRenameCommit:zn,onSelect:bn,onToggle:Sn,onTogglePaths:Se?void 0:vn,openOnSingleClick:y,renaming:ut,searching:Tt,selected:I,showCheckboxes:_,showTarget:Dt}),(0,Q.jsx)($c,{"aria-hidden":`true`,style:{height:Math.max(0,$t.total-$t.top-$t.height)}})]}),!t&&e&&z.length===0&&(0,Q.jsx)(Nl,{children:(0,Q.jsx)(Fl,{children:r??(Tt&&i.mode===`hide`?F(`no_entries_match_the_search`):F(`this_folder_is_empty`))})}),he]}),rt&&(0,Q.jsx)(pi,{canPaste:vt,directory:V,platform:k,allowCompression:!0,menu:rt,onAddToTray:te,onAddFavorite:A,onRemoveFavorite:ne,favoritePaths:re,onExtractArchive:ie,onOpenAsArchive:j,onAddToStartMenu:ae,onArchiveCreated:Nn,gitEntries:e?.git?.entries,onGitChanged:Mn,onClose:wn,onCompressTo:(e,t)=>st({paths:e,name:t}),onCopy:Fn,onCreateFile:e=>void Ln(e),onCreateFolder:e=>void Ln(null,e),onDelete:Bn,onOpen:f,onOpenFile:p,onPaste:In,onRefresh:Mn,onRename:e=>{let t=z.find(t=>t.entry.fullPath===e)?.entry;t&&U(t)},shortcuts:x,target:ir}),Pn,Kn]}),lr]}):(0,Q.jsxs)(Uc,{onPointerDown:N,children:[(0,Q.jsxs)(Wc,{children:[(0,Q.jsxs)(Gc,{onScroll:e=>{Fe.current&&Fe.current.scrollLeft!==e.currentTarget.scrollLeft&&(Fe.current.scrollLeft=e.currentTarget.scrollLeft)},ref:Pe,style:{gridTemplateColumns:kt},children:[(0,Q.jsxs)(Fc,{ref:jt,children:[_&&(0,Q.jsx)(Rc,{$checked:!Se&&hn,$partial:!Se&&gn,"aria-label":F(hn?`select_none`:`select_all`),disabled:Se,onClick:e=>{e.stopPropagation(),_n()},title:F(hn?`select_none`:`select_all`),type:`button`,children:hn?(0,Q.jsx)(Ut,{size:10}):gn?(0,Q.jsx)(zc,{}):null}),(0,Q.jsxs)(Kc,{onClick:()=>l(`name`),type:`button`,children:[F(`name`),ec(a,`name`)]}),(0,Q.jsx)(Lc,{"aria-label":F(`resize_column`),onDoubleClick:()=>Et[0]&&Ft(Et[0].id),onPointerDown:Nt,role:`separator`})]}),Et.map((e,t)=>(0,Q.jsxs)(Ic,{children:[(0,Q.jsxs)(Kc,{onClick:()=>l(e.id),type:`button`,children:[F(e.label),ec(a,e.id)]}),t<Et.length-1&&(0,Q.jsx)(Lc,{"aria-label":F(`resize_column`),onDoubleClick:()=>Ft(e.id),onPointerDown:e=>Pt(e,t),role:`separator`})]},e.id))]}),(0,Q.jsxs)(qc,{onClick:e=>{e.target===e.currentTarget&&Cn()},onContextMenu:e=>jn(e),onDragOver:kn,onDragStart:On,onDrop:An,onScroll:e=>{let t=e.currentTarget;Pe.current&&Pe.current.scrollLeft!==t.scrollLeft&&(Pe.current.scrollLeft=t.scrollLeft),Re.current=t,Le.current===0&&(Le.current=requestAnimationFrame(()=>{Le.current=0;let e=Re.current;e&&Be(t=>t.top===e.scrollTop&&t.height===e.clientHeight?t:{top:e.scrollTop,height:e.clientHeight})}))},ref:Fe,children:[t&&!e?(0,Q.jsx)(Dc,{template:kt,columns:Et.length}):(0,Q.jsxs)(Q.Fragment,{children:[Vt>0&&(0,Q.jsx)(`div`,{style:{height:Vt*Bt}}),Wt.map(t=>{let n=t.entry.fullPath;return(0,Q.jsx)(Mc,{current:Tt&&n===i.currentPath,dim:Tt&&t.ranges===null,height:Bt,iconSize:a.iconSize,innerRef:je,folderSizes:e.folderSizes,counts:e.counts,tagColors:e.tagColors,onContextMenu:jn,onOpen:Tn,onRenameCancel:Rn,onRenameChange:W,onRenameCommit:zn,onSelect:bn,onTagEdit:En,onToggle:Sn,openOnSingleClick:y,renaming:ut?.path===n?{value:ut.value}:null,row:t,selected:I.has(n),showCheckboxes:_,showTarget:Dt,template:kt,visible:Et},n)}),Ht<z.length&&(0,Q.jsx)(`div`,{style:{height:(z.length-Ht)*Bt}})]}),!t&&e&&z.length===0&&(0,Q.jsx)(Pl,{children:(0,Q.jsx)(Fl,{children:r??(Tt&&i.mode===`hide`?F(`no_entries_match_the_search`):F(`this_folder_is_empty`))})})]}),o&&an.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Jc,{onDoubleClick:wt,onPointerDown:xt,onPointerMove:St,onPointerUp:Ct,title:F(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(Yc,{onPointerEnter:()=>{Ue.current=!0},onPointerLeave:()=>{Ue.current=!1},style:{height:Xe},children:[(0,Q.jsxs)(Xc,{children:[_&&!Se&&ln.length>0&&(0,Q.jsx)(Rc,{$checked:dn,$partial:fn,"aria-label":F(dn?`select_none`:`select_all`),disabled:Se,onClick:e=>{e.stopPropagation(),vn(ln,!dn)},title:F(dn?`select_none`:`select_all`),type:`button`,children:dn?(0,Q.jsx)(Ut,{size:10}):fn?(0,Q.jsx)(zc,{}):null}),F(`preview`),(0,Q.jsx)(Zc,{children:on>Us?`${sn.length} / ${on}`:on})]}),(0,Q.jsx)(Qc,{ref:qe,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||Cn()},onContextMenu:e=>jn(e),children:(0,Q.jsx)(Ac,{counts:e?.counts,currentPath:Tt?i.currentPath:null,groups:cn,gridSize:a.gridSize,onContextMenu:jn,onOpen:f,onOpenFile:p,onSelect:xn,onToggle:Sn,onTogglePaths:Se?void 0:vn,openOnSingleClick:y,searching:Tt,selected:I,showCheckboxes:_,showTarget:Dt})})]})]}),Je&&e&&(0,Q.jsx)(No,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Je.entry.name,e,t),onClose:()=>Ye(null),tags:e.tags[Je.entry.name]??[],x:Je.x,y:Je.y}),rt&&(0,Q.jsx)(pi,{canPaste:vt,directory:V,platform:k,allowCompression:!0,menu:rt,onAddToTray:te,onAddFavorite:A,onRemoveFavorite:ne,favoritePaths:re,onExtractArchive:ie,onOpenAsArchive:j,onAddToStartMenu:ae,onArchiveCreated:Nn,gitEntries:e?.git?.entries,onGitChanged:Mn,onClose:wn,onCompressTo:(e,t)=>st({paths:e,name:t}),onCopy:Fn,onCreateFile:e=>void Ln(e),onCreateFolder:e=>void Ln(null,e),onDelete:Bn,onOpen:f,onOpenExternally:g,onOpenFile:p,onSelectEntry:m,onPaste:In,onRefresh:Mn,onRename:e=>{let t=z.find(t=>t.entry.fullPath===e)?.entry;t&&U(t)},shortcuts:x,target:ir}),Pn,Kn]}),lr]})}function ec(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}function tc(e,t,n){let r=n===`up`||n===`down`,i=n===`down`||n===`right`?1:-1,a=e=>r?{ahead:e.top+e.height/2,apart:e.left+e.width/2}:{ahead:e.left+e.width/2,apart:e.top+e.height/2},o=a(t),s=null,c=1/0;for(let t of e){let{ahead:e,apart:n}=a(t.getBoundingClientRect()),r=(e-o.ahead)*i;if(r<=1)continue;let l=r+Math.abs(n-o.apart)*4;l<c&&(c=l,s=t)}return s}var nc=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function rc(e,t,n,r){switch(t.sort){case`type`:return Qr(e.name,e.isDirectory,e.linkTarget,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}}function ic(e,t,n){return(r,i)=>{if(r.entry.isDirectory!==i.entry.isDirectory)return r.entry.isDirectory?-1:1;let a=rc(r.entry,e,t,n),o=rc(i.entry,e,t,n),s=typeof a==`number`&&typeof o==`number`?a-o:nc.compare(String(a),String(o));return e.sortDescending?-s:s}}function ac(e,t,n,r){let i=new Map(e.map(e=>[e,rc(e.entry,t,n,r)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=i.get(e),a=i.get(n),o=typeof r==`number`&&typeof a==`number`?r-a:nc.compare(String(r),String(a));return t.sortDescending?-o:o})}function oc(e,t,n){if(t.length===0)return e;let r=[...t].sort(n),i=[...e];for(let e of r){let t=0,r=i.length;for(;t<r;){let a=t+r>>>1;n(i[a],e)<=0?t=a+1:r=a}i.splice(t,0,e)}return i}var sc=Rr.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Br(t.entry.name)===e})),cc=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...sc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function lc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function uc(e){return Math.max(24,Math.min(e-56,160))}function dc(e,t,n,r,i){switch(e){case`type`:return Qr(t.name,t.isDirectory,t.linkTarget,i);case`size`:return Tc(t,n);case`modified`:return d(t.modified);case`created`:return d(t.created);case`items`:return t.isDirectory?r[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:i(`broken`);default:return``}}function fc(e){return e===`UU`||e===`AA`||e===`DD`||e[0]===`U`||e[1]===`U`}function pc(e){if(e===`??`)return[{letter:`?`,index:!1}];if(e===`!!`)return[{letter:`!`,index:!1}];if(fc(e))return[{letter:`U`,index:!1}];let t=[];return e[0]!==`.`&&t.push({letter:e[0],index:!0}),e[1]!==`.`&&t.push({letter:e[1],index:!1}),t.length>0?t:[{letter:`M`,index:!1}]}function mc(e,t){switch(e){case`?`:return`untracked`;case`!`:return t===`!!`?`ignored`:`conflict`;case`U`:return`conflict`;case`D`:return`deleted`;case`A`:case`C`:return`added`;case`R`:return`renamed`;default:return`modified`}}function hc(e,t){switch(t){case`?`:return e(`git_untracked`);case`!`:return e(`git_ignored`);case`U`:return e(`git_conflict`);case`D`:return e(`git_deleted`);case`A`:case`C`:return e(`git_added`);case`R`:return e(`git_renamed`);default:return e(`git_modified`)}}function gc(e,t){if(t===`??`)return e(`git_untracked`);if(t===`!!`)return e(`git_ignored`);if(fc(t))return e(`git_conflict`);let n=[];return t[0]!==`.`&&n.push(`${e(`git_index`)}: ${hc(e,t[0])}`),t[1]!==`.`&&n.push(`${e(`git_worktree`)}: ${hc(e,t[1])}`),n.join(`
`)||e(`git_modified`)}function _c(e,t){return`${e(`git_changes_inside`)}\n${gc(e,t)}`}function vc({name:e,ranges:t}){if(!t||t.length===0)return(0,Q.jsx)(Q.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,Q.jsx)(Ml,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,Q.jsx)(Q.Fragment,{children:n})}var yc=new WeakMap,bc=new Map;function xc(e){let t=bc.get(e);return t||(t=new IntersectionObserver(e=>{for(let n of e){if(!n.isIntersecting)continue;let e=yc.get(n.target);yc.delete(n.target),t?.unobserve(n.target),e?.()}},{rootMargin:e}),bc.set(e,t)),t}function Sc(e,t){let{items:n}=e,r=0,i=n.length-1,a=0;for(;r<=i;){let e=r+i>>>1;n[e].start<=t?(a=e,r=e+1):i=e-1}let o=n[a],s=Math.max(0,t-o.start-e.header),c=Math.max(1,Math.ceil(o.section.rows.length/e.columns));return{section:a,line:Math.min(c-1,Math.floor(s/(e.tile+e.gap)))}}function Cc(e,t,n){let r=xc(n);return yc.set(e,t),r.observe(e),()=>{yc.delete(e),r.unobserve(e)}}function wc(e){return[...new Set((e??[]).map(e=>e.name))].join(`, `)}function Tc(e,t){if(!e.isDirectory)return h(e.size);let n=t[e.name];return n===void 0?`—`:h(n)}function Ec({entry:e,size:t=18}){let n=T(),r=(0,H.useRef)(null),[i,a]=(0,H.useState)(!1);(0,H.useEffect)(()=>{if(i)return;let e=r.current;if(e){if(!(`IntersectionObserver`in window))a(!0);else return Cc(e,()=>a(!0),`250px`)}},[i]);let o=N(i?e.fullPath:null,e.isDirectory,t>32),s=e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null,c=de(s);return(0,Q.jsxs)(Nc,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,Q.jsx)(Xr,{name:e.iconSource.slice(5),size:t}):c?(0,Q.jsx)(`img`,{alt:``,height:t,src:c,width:t}):o?(0,Q.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,Q.jsx)(wt,{size:t}):(0,Q.jsx)(Xr,{name:Yr(e.name),size:t}),e.isEncrypted&&(0,Q.jsx)(Pc,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,Q.jsx)(dn,{size:Math.max(8,Math.round(t*.52))})})]})}function Dc({template:e,columns:t}){return(0,Q.jsx)(Q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,Q.jsxs)(al,{style:{gridTemplateColumns:e},children:[(0,Q.jsxs)(cl,{children:[(0,Q.jsx)(ol,{style:{flexShrink:0,height:18,width:18}}),(0,Q.jsx)(ol,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,Q.jsx)(ol,{style:{width:t%2==0?44:92}},t))]},r))})}function Oc({size:e}){return(0,Q.jsx)(Q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,Q.jsxs)(El,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,Q.jsx)(Dl,{children:(0,Q.jsx)(ol,{style:{height:e,width:e}})}),(0,Q.jsx)(kl,{children:(0,Q.jsx)(ol,{style:{height:9,width:`${t}%`}})})]},n))})}var kc=(0,H.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:p,onSelect:m,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=T(),x=Z(),S=!e.entry.isDirectory&&Vr(e.entry.name),C=(0,H.useRef)(null),[w,ee]=(0,H.useState)(!1);(0,H.useEffect)(()=>{if(!S||w)return;let e=C.current;if(e){if(!(`IntersectionObserver`in window))ee(!0);else return Cc(e,()=>ee(!0),`400px`)}},[S,w]);let E=se(S&&w?e.entry.fullPath:null,192,e.entry.modified),[D,O]=(0,H.useState)(!1),te=S&&E!==null&&!D,k=e.entry.fullPath,A=t=>{e.entry.isDirectory?v(k,Pr(t)):y?.(k,Pr(t))};return(0,Q.jsxs)(El,{$current:t,$dim:n,$image:te,$selected:s,onClick:e=>{m(e,k),l&&A(e)},onContextMenu:e=>_(e,k),onDoubleClick:e=>{l||A(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":k,draggable:!u,children:[c&&(0,Q.jsx)(Hc,{$checked:s,onClick:e=>{e.stopPropagation(),g(k)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`deselect`:`select`),type:`button`,children:s&&(0,Q.jsx)(Ut,{size:10})}),(0,Q.jsxs)(Dl,{children:[te?(0,Q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>O(!0),src:E}):(0,Q.jsx)(Ol,{children:e.place&&x.useIcons?(0,Q.jsx)(Ua,{place:e.place,size:r}):(0,Q.jsx)(Ec,{entry:e.entry,size:r})}),e.git&&(0,Q.jsx)(ml,{code:e.git,mark:!0,title:e.entry.isDirectory?_c(b,e.git):gc(b,e.git)})]}),(0,Q.jsxs)(kl,{children:[u?(0,Q.jsx)(jc,{onCancel:()=>p?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,Q.jsx)(Al,{$broken:e.entry.linkValid===!1,children:(0,Q.jsx)(vc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,Q.jsxs)(ul,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Q.jsx)(dn,{size:9}),b(`encrypted`)]}),e.cut&&(0,Q.jsxs)(vl,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,Q.jsx)(Bt,{size:9}),b(`cut`)]}),(0,Q.jsx)(jl,{children:e.entry.isDirectory?i===void 0?Qr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b):b(`type_count_items`,{type:Qr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b),count:i}):b(`type_size`,{type:Qr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b),size:h(e.entry.size)})}),a&&e.entry.linkTarget&&(0,Q.jsxs)(bl,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,Q.jsx)(yt,{size:9}),(0,Q.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Ac({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onTogglePaths:p,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:_,onRenameCommit:v,onRenameCancel:y}){let b=T();return(0,Q.jsx)(Q.Fragment,{children:e.map(e=>{let x=e.rows.map(e=>e.entry.fullPath),S=x.filter(e=>s.has(e)).length,C=x.length>0&&S===x.length,w=S>0&&!C,ee=e.total!==void 0&&e.rows.length<e.total;return(0,Q.jsxs)(el,{children:[e.headerShown!==!1&&(0,Q.jsxs)(tl,{children:[c&&p&&!ee&&x.length>0&&(0,Q.jsx)(Rc,{$checked:C,$partial:w,"aria-label":b(C?`select_none`:`select_all`),onClick:e=>{e.stopPropagation(),p(x,!C)},title:b(C?`select_none`:`select_all`),type:`button`,children:C?(0,Q.jsx)(Ut,{size:10}):w?(0,Q.jsx)(zc,{}):null}),b(e.label),(0,Q.jsx)(nl,{children:e.total??e.rows.length}),(0,Q.jsx)(rl,{})]}),(0,Q.jsx)(il,{$size:t,children:e.rows.map(e=>(0,Q.jsx)(kc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:uc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:y,onRenameChange:_,onRenameCommit:v,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id)})})}function jc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,H.useRef)(null);return(0,H.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,Q.jsx)(yl,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Mc=(0,H.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,folderSizes:d,counts:f,tagColors:p,innerRef:m,renaming:h,onSelect:g,onToggle:_,onContextMenu:v,onOpen:y,onTagEdit:b,onRenameChange:x,onRenameCommit:S,onRenameCancel:C}){let w=T(),ee=Z(),E=e.entry.fullPath;return(0,Q.jsxs)(sl,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{g(t,E),o&&y(e.entry,t)},onContextMenu:e=>v(e,E),onDoubleClick:t=>{o||y(e.entry,t)},ref:t?m:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":E,draggable:!h,children:[(0,Q.jsxs)(cl,{children:[i&&(0,Q.jsx)(Vc,{$checked:r,onClick:e=>{e.stopPropagation(),_(E)},onDoubleClick:e=>e.stopPropagation(),title:w(r?`deselect`:`select`),type:`button`,children:r&&(0,Q.jsx)(Ut,{size:10})}),e.place&&ee.useIcons?(0,Q.jsx)(Nc,{children:(0,Q.jsx)(Ua,{place:e.place,size:s})}):(0,Q.jsx)(Ec,{entry:e.entry,size:s}),h?(0,Q.jsx)(jc,{onCancel:C,onChange:x,onCommit:S,value:h.value}):(0,Q.jsx)(ll,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,Q.jsx)(vc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,Q.jsxs)(ul,{title:w(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Q.jsx)(dn,{size:9}),w(`encrypted`)]}),e.git&&(0,Q.jsx)(ml,{code:e.git,title:e.entry.isDirectory?_c(w,e.git):gc(w,e.git)}),e.cut&&(0,Q.jsxs)(vl,{title:w(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,Q.jsx)(Bt,{size:9}),w(`cut`)]}),a&&e.entry.linkTarget&&(0,Q.jsxs)(bl,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,Q.jsx)(yt,{size:9}),(0,Q.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,Q.jsx)(xl,{children:t.id===`tags`?(0,Q.jsx)(Sl,{onClick:t=>{t.stopPropagation(),b(e.entry,t.clientX,t.clientY)},title:w(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=p?.[e]??`#64748b`;return(0,Q.jsx)(Cl,{$color:t,$ink:Mo(t),children:e},e)}):(0,Q.jsx)(wl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,Q.jsx)(Tl,{children:w(`broken`)}):t.id===`modified`?(0,Q.jsx)(lt,{value:e.entry.modified}):t.id===`created`?(0,Q.jsx)(lt,{value:e.entry.created}):dc(t.id,e.entry,d,f,w)},t.id))]})}),Nc=A.span`
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
`,Pc=A.span`
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
`,Fc=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Ic=A.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Lc=A.span`
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
`,Rc=A.button`
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
`,zc=A.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Bc=A.div`
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
`,Vc=A.button`
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
`,Hc=A(Vc)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Uc=A.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Wc=A.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Gc=A.div`
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
`,Kc=A.button`
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
`,qc=A.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Jc=A.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Yc=A.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Xc=A.div`
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
`,Zc=A.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Qc=A.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    /* The window is placed by the grid itself; the browser must not move it a second time. */
    overflow-anchor: none;
    padding: 12px 14px 24px;
`,$c=A.div`
    flex: none;
`,el=A.section`
    & + & {
        margin-top: 22px;
    }
`,tl=A.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,nl=A.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,rl=A.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,il=A.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,al=A.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,ol=A.span`
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
`,sl=A.div`
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
`,cl=A.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,ll=A.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,ul=A.span`
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
`;function dl(e){switch(e){case`untracked`:case`added`:return`#58c982`;case`deleted`:return`#f07171`;case`renamed`:return`#68a8f5`;case`conflict`:return`#f06bb0`;case`ignored`:return`#8b93a3`;default:return`#e7b341`}}function fl(e){return`color-mix(in srgb, ${dl(e)} 62%, var(--text-primary))`}function pl(e,t){return`color-mix(in srgb, ${dl(e)} ${t}%, transparent)`}function ml({code:e,title:t,mark:n=!1}){let r=n?_l:gl;return(0,Q.jsx)(hl,{$mark:n,title:t,children:pc(e).map(t=>(0,Q.jsx)(r,{$tone:mc(t.letter,e),children:t.letter},t.index?`index`:`worktree`))})}var hl=A.span`
    display: inline-flex;
    align-items: center;
    gap: 3px;
    flex-shrink: 0;

    ${({$mark:e})=>e&&`
        position: absolute;
        top: 5px;
        right: 5px;
        pointer-events: none;
    `}
`,gl=A.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 15px;
    height: 15px;
    padding: 0 0 1px;
    border: 1px solid ${({$tone:e})=>pl(e,40)};
    border-radius: 4px;
    background: ${({$tone:e})=>pl(e,12)};
    color: ${({$tone:e})=>fl(e)};
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    line-height: 1;
`,_l=A.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    padding: 0 0 1px;
    border: 1px solid ${({$tone:e})=>pl(e,45)};
    border-radius: 4px;
    background: ${({$tone:e})=>pl(e,22)};
    backdrop-filter: blur(6px);
    color: ${({$tone:e})=>fl(e)};
    font-family: var(--font-mono);
    font-size: 9.5px;
    font-weight: 700;
    line-height: 1;
`,vl=A.span`
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
`,yl=A.input`
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
`,bl=A.span`
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
`,xl=A.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sl=A.button`
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
`,Cl=A.span`
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
`,wl=A.span`
    color: var(--text-muted);
    font-size: 11px;
`,Tl=A.span`
    color: #fca5a5;
`,El=A.div`
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
`,Dl=A.div`
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
`,Ol=A.span`
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
`,kl=A.div`
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
`,Al=A.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,jl=A.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Ml=A.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,Nl=A.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Pl=A.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,Fl=A.p`
    font-size: 13px;
    color: var(--text-muted);
`,Il=A.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,Ll=50,Rl=160;function zl({git:e}){let t=T(),n=(0,H.useRef)(null),r=(0,H.useRef)(null),i=(0,H.useRef)(0),a=(0,H.useRef)(!1),[o,s]=(0,H.useState)(!1),[c,l]=(0,H.useState)(null),[u,d]=(0,H.useState)([]),[f,p]=(0,H.useState)(!1),[m,h]=(0,H.useState)(!1),[g,_]=(0,H.useState)(null),v=Bl(e),y=e.detached?t(`git_detached`):e.branch||t(`git`),x=(0,H.useCallback)(async(e,n,r)=>{if(!r&&a.current)return;a.current=!0;let o=++i.current;h(!0),_(null);try{let t=await ri(e,n,Ll);if(o!==i.current)return;d(e=>r?t.commits:[...e,...t.commits]),p(t.hasMore)}catch(e){o===i.current&&_(e instanceof Error?e.message:t(`git_log_failed`))}finally{o===i.current&&(a.current=!1,h(!1))}},[t]),S=()=>{let t=n.current?.getBoundingClientRect();t&&(l({right:window.innerWidth-t.right,bottom:window.innerHeight-t.top+8}),s(!0),d([]),p(!1),a.current=!1,x(e.root,0,!0))},C=(0,H.useCallback)(()=>s(!1),[]),w=(0,H.useCallback)(()=>{f&&!a.current&&x(e.root,u.length,!1)},[u.length,e.root,f,x]);(0,H.useEffect)(()=>{if(!o)return;let e=e=>{let t=e.target;t instanceof Element&&(t.closest(`[data-git-panel]`)||t.closest(`[data-git-chip]`))||C()},t=e=>{e.key===`Escape`&&C()},n=()=>C();return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`resize`,n),window.addEventListener(`blur`,n),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`resize`,n),window.removeEventListener(`blur`,n)}},[o,C]),(0,H.useEffect)(()=>{s(!1)},[e.root]),(0,H.useEffect)(()=>{let e=r.current;o&&e&&f&&!m&&e.scrollHeight<=e.clientHeight+4&&w()},[o,u.length,f,m,w]);let ee=v===`pending`?[e.ahead>0?t(`git_ahead`,{count:e.ahead}):``,e.behind>0?t(`git_behind`,{count:e.behind}):``].filter(Boolean).join(` · `):t(v===`synced`?`git_synced`:`git_no_upstream`);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(ql,{$open:o,$state:v,"aria-expanded":o,"data-git-chip":!0,onClick:()=>o?C():S(),ref:n,title:[y,ee,e.changed>0?b(t,e.changed,`k_1_uncommitted_change`,`count_uncommitted_changes`):``,e.root].filter(Boolean).join(`
`),type:`button`,children:[(0,Q.jsx)(bt,{size:11}),(0,Q.jsx)(Jl,{children:y}),v===`synced`&&(0,Q.jsx)(Xl,{$state:`synced`,title:t(`git_synced`),children:(0,Q.jsx)(Ut,{size:9})}),v===`pending`&&(0,Q.jsxs)(Q.Fragment,{children:[e.ahead>0&&(0,Q.jsxs)(Xl,{$state:`pending`,children:[`↑`,e.ahead]}),e.behind>0&&(0,Q.jsxs)(Xl,{$state:`pending`,children:[`↓`,e.behind]})]}),v===`local`&&(0,Q.jsx)(Yl,{title:t(`git_no_upstream`)}),e.changed>0&&(0,Q.jsx)(Zl,{children:e.changed})]}),o&&c&&(0,gi.createPortal)((0,Q.jsxs)(Ql,{$bottom:c.bottom,$right:c.right,"aria-label":t(`git`),"data-git-panel":!0,role:`dialog`,children:[(0,Q.jsxs)($l,{children:[(0,Q.jsxs)(eu,{children:[(0,Q.jsx)(bt,{size:12}),t(`git`)]}),(0,Q.jsx)(tu,{"aria-label":t(`close`),onClick:C,title:t(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]}),(0,Q.jsx)(nu,{title:e.root,children:e.root}),(0,Q.jsxs)(ru,{children:[(0,Q.jsxs)(iu,{title:y,children:[(0,Q.jsx)(bt,{size:10}),y]}),e.upstream&&(0,Q.jsxs)(au,{children:[`→ `,e.upstream]}),(0,Q.jsxs)(ou,{$state:v,children:[v===`synced`&&(0,Q.jsx)(Ut,{size:9}),ee]})]}),e.changed>0&&(0,Q.jsxs)(su,{children:[(0,Q.jsx)(cu,{}),b(t,e.changed,`k_1_uncommitted_change`,`count_uncommitted_changes`)]}),(0,Q.jsxs)(lu,{children:[t(`commits`),u.length>0&&(0,Q.jsxs)(uu,{children:[u.length,f?`+`:``]})]}),(0,Q.jsxs)(du,{onScroll:e=>{let t=e.currentTarget;t.scrollTop+t.clientHeight>=t.scrollHeight-Rl&&w()},ref:r,children:[u.length===0&&!g&&(0,Q.jsx)(xu,{children:t(m?`git_loading_commits`:`no_commits_yet`)}),u.map(e=>(0,Q.jsx)(Hl,{commit:e},e.hash)),m&&u.length>0&&(0,Q.jsx)(wu,{children:t(`git_loading_commits`)}),g&&(0,Q.jsxs)(Su,{children:[(0,Q.jsx)(`span`,{children:g}),(0,Q.jsx)(Cu,{onClick:()=>void x(e.root,u.length,u.length===0),type:`button`,children:t(`refresh`)})]})]})]}),document.body)]})}function Bl(e){return e.upstream?e.ahead>0||e.behind>0?`pending`:`synced`:`local`}function Vl(e){return(e.refs??``).split(`,`).map(e=>e.trim()).filter(Boolean)}function Hl({commit:e}){let t=Vl(e),n=t.slice(0,2);return(0,Q.jsxs)(fu,{children:[(0,Q.jsxs)(pu,{children:[(0,Q.jsx)(mu,{title:e.hash,children:e.short}),(0,Q.jsx)(hu,{title:e.subject,children:e.subject})]}),(0,Q.jsxs)(gu,{children:[(0,Q.jsx)(`span`,{children:e.author}),(0,Q.jsx)(_u,{children:`·`}),(0,Q.jsx)(lt,{value:Date.parse(e.date)}),n.length>0&&(0,Q.jsxs)(vu,{children:[n.map(e=>(0,Q.jsx)(yu,{title:e,children:e},e)),t.length>n.length&&(0,Q.jsxs)(bu,{children:[`+`,t.length-n.length]})]})]})]})}function Ul(e){return`color-mix(in srgb, ${e} 62%, var(--text-primary))`}function Wl(e,t){return`color-mix(in srgb, ${e} ${t}%, transparent)`}var Gl=`#58c982`,Kl=`#e7b341`,ql=A.button`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    max-width: 280px;
    padding: 1px 8px;
    border: 1px solid ${({$state:e})=>e===`synced`?Wl(Gl,50):Wl(Kl,55)};
    border-radius: 999px;
    background: ${({$state:e})=>e===`synced`?Wl(Gl,10):Wl(Kl,12)};
    color: var(--text-secondary);
    font: inherit;
    font-size: 10px;
    cursor: pointer;
    transition: border-color 130ms ease, background 130ms ease, color 130ms ease;

    svg {
        flex-shrink: 0;
        color: ${({$state:e})=>Ul(e===`synced`?Gl:Kl)};
    }

    &:hover {
        border-color: ${({$state:e})=>e===`synced`?Wl(Gl,70):Wl(Kl,75)};
        color: var(--text-primary);
    }

    ${({$open:e})=>e&&`background: rgba(var(--accent-rgb), 0.16); border-color: var(--border-color-focus);`}
`,Jl=A.span`
    overflow: hidden;
    max-width: 170px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yl=A.span`
    width: 5px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${Ul(Kl)};
`,Xl=A.span`
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    color: ${({$state:e})=>Ul(e===`synced`?Gl:Kl)};
`,Zl=A.span`
    flex-shrink: 0;
    min-width: 15px;
    padding: 0 4px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.20);
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 700;
    text-align: center;
`,Ql=A.div`
    position: fixed;
    right: ${({$right:e})=>e}px;
    bottom: ${({$bottom:e})=>e}px;
    z-index: 80;
    display: flex;
    flex-direction: column;
    width: min(440px, calc(100vw - 32px));
    max-height: min(540px, calc(100vh - 96px));
    overflow: hidden;
    font-family: var(--font-sans);
    ${tt}
    ${Ze}
`,$l=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    flex-shrink: 0;
    padding: 10px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,eu=A.span`
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
`,tu=A.button`
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
`,nu=A.div`
    overflow: hidden;
    flex-shrink: 0;
    padding: 7px 12px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9.5px;
    line-height: 1.5;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ru=A.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 7px;
    flex-shrink: 0;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border-color);
`,iu=A.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    max-width: 190px;
    padding: 1px 7px;
    border: 1px solid rgba(var(--accent-rgb), 0.25);
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--text-secondary);
    font-size: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    svg {
        flex-shrink: 0;
        color: var(--accent-primary);
    }
`,au=A.span`
    overflow: hidden;
    max-width: 150px;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ou=A.span`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin-left: auto;
    padding: 1px 8px;
    border-radius: 999px;
    border: 1px solid ${({$state:e})=>e===`synced`?Wl(Gl,50):Wl(Kl,55)};
    background: ${({$state:e})=>e===`synced`?Wl(Gl,10):Wl(Kl,12)};
    color: ${({$state:e})=>Ul(e===`synced`?Gl:Kl)};
    font-size: 9.5px;
    font-weight: 600;
    white-space: nowrap;

    svg {
        flex-shrink: 0;
    }
`,su=A.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    padding: 6px 12px;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-muted);
    font-size: 10px;
`,cu=A.span`
    width: 6px;
    height: 6px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.16);
`,lu=A.div`
    display: flex;
    align-items: center;
    gap: 6px;
    flex-shrink: 0;
    padding: 9px 12px 5px;
    color: var(--text-muted);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
`,uu=A.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--bg-rgb), 0.55);
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8.5px;
    letter-spacing: 0;
`,du=A.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 0 6px;
`,fu=A.div`
    padding: 6px 7px;
    border-radius: var(--radius-sm);

    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,pu=A.div`
    display: flex;
    align-items: baseline;
    gap: 8px;
    min-width: 0;
`,mu=A.span`
    flex-shrink: 0;
    padding: 0 4px;
    border: 1px solid rgba(var(--accent-rgb), 0.22);
    border-radius: 3px;
    background: rgba(var(--accent-rgb), 0.10);
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 9px;
    line-height: 15px;
`,hu=A.span`
    overflow: hidden;
    min-width: 0;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,gu=A.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 3px;
    min-width: 0;
    color: var(--text-muted);
    font-size: 9.5px;
    white-space: nowrap;
`,_u=A.span`
    opacity: 0.6;
`,vu=A.span`
    display: inline-flex;
    gap: 4px;
    overflow: hidden;
    margin-left: auto;
`,yu=A.span`
    overflow: hidden;
    max-width: 110px;
    padding: 0 4px;
    border: 1px solid rgba(var(--accent-rgb), 0.22);
    border-radius: 3px;
    background: rgba(var(--accent-rgb), 0.08);
    color: var(--accent-primary);
    font-family: var(--font-mono);
    font-size: 8px;
    line-height: 13px;
    text-overflow: ellipsis;
`,bu=A.span`
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
`,xu=A.p`
    margin: 0;
    padding: 22px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Su=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 14px 12px;
    color: #f07171;
    font-size: 10.5px;
`,Cu=A.button`
    flex-shrink: 0;
    padding: 3px 8px;
    border: 1px solid rgba(240, 113, 113, 0.4);
    border-radius: var(--radius-sm);
    background: rgba(240, 113, 113, 0.10);
    color: #f07171;
    font: inherit;
    font-size: 9.5px;
    cursor: pointer;

    &:hover {
        background: rgba(240, 113, 113, 0.18);
    }
`,wu=A.div`
    padding: 9px 8px 12px;
    color: var(--text-muted);
    font-size: 9.5px;
    text-align: center;
`,Tu={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},Eu=`yafm://`,Du={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function Ou(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function ku(e){return`${Eu}${e===`home`?`overview`:e}`}function Au(e){return Ou(e)?Du[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function ju(e){let t=e.trim();if(t.length===0)return null;if(!Ou(t))return t;let n=Du[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?ku(n):null}function Mu({location:e,size:t=13}){switch(Au(e)){case`home`:return(0,Q.jsx)(Nt,{size:t});case`settings`:return(0,Q.jsx)(vt,{size:t});case`recycle`:return(0,Q.jsx)(Tn,{size:t});case`gallery`:return(0,Q.jsx)(wt,{size:t});default:return y(e)?(0,Q.jsx)(an,{size:t}):(0,Q.jsx)(wt,{size:t})}}function Nu(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>=0?t.slice(n+1):t}function Pu(){let e=T();return t=>{let n=Au(t);return n?e(Tu[n]):Nu(t)}}var Fu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Iu=`/assets/bloom-BpfZWiaG.mp4`,Lu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,Ru=`/assets/drift-BRBSQL2_.mp4`,zu=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Bu=`/assets/ember-CtSz0YxR.mp4`,Vu=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],Hu=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],Uu=[{id:`builtin:video:drift`,name:`drift`,url:Ru,poster:Lu},{id:`builtin:video:ember`,name:`ember`,url:Bu,poster:zu},{id:`builtin:video:bloom`,name:`bloom`,url:Iu,poster:Fu}],Wu=Hu.map(e=>({...e,variants:Vu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Xu(Zu(e.id,t,!1)),lightUrl:Xu(Zu(e.id,t,!0))}))})),Gu=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>Vu.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Xu(Qu(e.id,t,!1)),lightUrl:Xu(Qu(e.id,t,!0))}))),Ku=new Map([...Wu.flatMap(e=>e.variants),...Gu].map(e=>[e.id,e])),qu=new Map(Uu.map(e=>[e.id,e]));function Ju(e,t=`dark`){if(qu.has(e))return qu.get(e).url;let n=Ku.get(e)??Ku.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function Yu(e){return qu.has(e)}function Xu(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Zu(e,t,n){return e===`dunes`?id(t,n):e===`tide`?ad(t,n):rd(t,n)}function Qu(e,t,n){return e===`skyline`?ed(t,n):e===`orbit`?td(t,n):$u(t,n)}function $u({accent:e,secondary:t},n){let r=$(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=$(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=$(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=$(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=$(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    </svg>`}function ed({accent:e,secondary:t},n){let r=$(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=$(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=$(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=$(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    </svg>`}function td({accent:e,secondary:t},n){let r=$(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=$(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=$(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    </svg>`}function nd(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function $(e,t,n){let[r,i,a]=nd(e),[o,s,c]=nd(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function rd({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
</svg>`}function id({accent:e,secondary:t},n){let r=$(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=$(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=$(e,t,.25),o=$(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=$(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=$(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
</svg>`}function ad({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
</svg>`}var od=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function sd(e){return od.test(e)}function cd({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):c(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=be(i),o=n?.startsWith(`builtin:`)?Ju(n,t):r??a,s=r===null?i===null?n!==null&&Yu(n):sd(i):sd(r.split(/[?#]/)[0]);if(!n||!o)return null;let l=`blur(${e?.backgroundBlur??ot().backgroundBlur}px) saturate(${e?.backgroundSaturation??ot().backgroundSaturation}%) brightness(${e?.backgroundBrightness??ot().backgroundBrightness}%)`;return(0,Q.jsxs)(ld,{"aria-hidden":!0,children:[s?(0,Q.jsx)(dd,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:l}}):(0,Q.jsx)(ud,{src:o,style:{filter:l}}),(0,Q.jsx)(fd,{})]})}var ld=A.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,ud=A.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,dd=A.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,fd=A.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function pd({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=T(),s=(0,H.useRef)(null),[c,l]=(0,H.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,H.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,gi.createPortal)((0,Q.jsx)(_d,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,Q.jsxs)(vd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsx)(yd,{children:o(`protected_folder`)}),(0,Q.jsx)(bd,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,Q.jsx)(xd,{children:t.map(e=>(0,Q.jsxs)(Sd,{children:[(0,Q.jsx)(Cd,{children:e.path}),(0,Q.jsx)(wd,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,Q.jsx)(Td,{children:md(o,u,r??!1)}),(0,Q.jsx)(Ed,{children:hd(o,u)}),(0,Q.jsx)(Dd,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,Q.jsxs)(Od,{children:[(0,Q.jsx)(kd,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,Q.jsx)(Ad,{disabled:c>0,onClick:a,type:`button`,children:c>0?gd(o,u,c):gd(o,u,0)})]})]})}),document.body)}function md(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function hd(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function gd(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var _d=A.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${et}
`,vd=A.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${L}
`,yd=A.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,bd=A.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,xd=A.div`
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
`,Sd=A.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Cd=A.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,wd=A.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,Td=A.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,Ed=A.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,Dd=A.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Od=A.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,kd=A.button`
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
`,Ad=A.button`
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
`;function jd(){let e=T(),[t,n]=(0,H.useState)(null),r=(0,H.useRef)(null),i=(0,H.useRef)(null);(0,H.useEffect)(()=>(We(e=>new Promise(t=>{r.current=t,n(e)})),()=>We(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,H.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,gi.createPortal)((0,Q.jsx)(Md,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,Q.jsxs)(Nd,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsx)(Pd,{children:e(`notice`)}),(0,Q.jsx)(Fd,{children:t}),(0,Q.jsx)(Id,{children:(0,Q.jsx)(Ld,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Md=A.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${et}
`,Nd=A.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${L}
`,Pd=A.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Fd=A.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Id=A.div`
    display: flex;
    justify-content: flex-end;
`,Ld=A.button`
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
`;function Rd({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=T(),a=(0,H.useRef)(null),o=(0,H.useRef)(null),[s,c]=(0,H.useState)(null);return(0,H.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,H.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,H.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,gi.createPortal)((0,Q.jsxs)(zd,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Ra).map(n=>(0,Q.jsx)(Bd,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Ra[n](16)},n)),(0,Q.jsx)(Bd,{onClick:async()=>{let e=await ti([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,Q.jsx)(cn,{size:13})}),r&&(0,Q.jsx)(Bd,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,Q.jsx)(wn,{size:12})})]}),document.body)]})}var zd=A.div`
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
    ${rt}
    transform-origin: top left;
`,Bd=A.button`
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
`,Vd=[{bit:256,group:`owner`,action:`read`},{bit:128,group:`owner`,action:`write`},{bit:64,group:`owner`,action:`execute`},{bit:32,group:`group`,action:`read`},{bit:16,group:`group`,action:`write`},{bit:8,group:`group`,action:`execute`},{bit:4,group:`other`,action:`read`},{bit:2,group:`other`,action:`write`},{bit:1,group:`other`,action:`execute`}];function Hd({request:e}){let t=T(),n=(0,H.useRef)(null),r=e.items.length===1,i=e.canUseSystemSheet,[a,o]=(0,H.useState)(`general`),[s,c]=(0,H.useState)(e.items[0]),[l,u]=(0,H.useState)(s.name),[d,f]=(0,H.useState)($d(s,`ReadOnly`)),[p,m]=(0,H.useState)($d(s,`Hidden`)),[g,_]=(0,H.useState)($d(s,`Archive`)),[y,b]=(0,H.useState)(s.unixModeValue??0),[x,S]=(0,H.useState)(!1),[C,w]=(0,H.useState)(null),[ee,E]=(0,H.useState)(null),[D,O]=(0,H.useState)(!1),te=(0,H.useRef)(!1),[k,A]=(0,H.useState)(null),[ne,re]=(0,H.useState)(0),[ie,j]=(0,H.useState)(``),[ae,M]=(0,H.useState)([]),[oe,se]=(0,H.useState)({}),[ce,ue]=(0,H.useState)(!1),[de,fe]=(0,H.useState)(!1),[N,pe]=(0,H.useState)(!1),me=(0,H.useRef)(!1),he=r&&!s.error,ge=r&&!s.directory&&!s.error,P=he&&l.trim()!==s.name,_e=he&&i&&(d!==$d(s,`ReadOnly`)||p!==$d(s,`Hidden`)||!s.directory&&g!==$d(s,`Archive`)),ve=he&&!i&&y!==(s.unixModeValue??0),ye=he&&!i&&(ve||ce&&s.directory),be=k!==null&&!Jd(ae,k.tags),xe=k!==null&&ne!==k.rating,Se=k!==null&&ie!==(k.comment??``),Ce=k!==null&&!Yd(oe,k.colors),we=be||xe||Se||Ce,Te=P||_e||ye||we,Ee=e=>{c(e),u(e.name),f($d(e,`ReadOnly`)),m($d(e,`Hidden`)),_($d(e,`Archive`)),b(e.unixModeValue??0)},De=async()=>{if(!Te||x)return!0;S(!0),w(null);try{let e=s.path;if(P){let n=await nr(e,l.trim());if(!n.ok)return w(n.error??t(`could_not_rename_the_entry`)),!1;e=n.path??e}if(_e||ye){let n=await G({path:e,readOnly:i?d:void 0,hidden:i?p:void 0,archive:i&&!s.directory?g:void 0,unixMode:i?void 0:y,recursive:!i&&s.directory?ce:void 0});if(!n.ok)return w(n.error??t(`could_not_change_the_properties`)),!1;n.info&&(Ee(n.info),e=n.info.path)}if(we){if(!await Un({path:e,tags:be?ae:void 0,rating:xe?ne:void 0,comment:Se?ie:void 0,colors:Ce?oe:void 0}))return w(t(`could_not_change_the_properties`)),!1;A({tags:[...ae],rating:ne,comment:ie.length>0?ie:null,editable:!0,allTags:(k?.allTags??[]).map(e=>({...e,color:oe[e.name]??e.color})),colors:{...oe}})}if(P&&!_e&&!ve){let t=await Bn(e);t&&Ee(t)}return!0}finally{S(!1)}},Oe=()=>Rn(),ke=async()=>{await De()&&Oe()};(0,H.useEffect)(()=>{a===`hashes`&&!te.current&&ge&&(te.current=!0,O(!0),Vn(s.path).then(e=>E(e),()=>E({items:[]})).finally(()=>O(!1)))},[a,ge,s.path]),(0,H.useEffect)(()=>{a===`details`&&!me.current&&r&&(me.current=!0,Hn(s.path).then(e=>{e&&(A(e),re(e.rating),j(e.comment??``),M(e.tags),se(e.colors))},()=>void 0))},[a,r,s.path]);let F=async()=>{let e=await Bn(s.path);e&&Ee(e)},Ae=async e=>{if(pe(!1),!he)return;let n=s.path.replace(/[\\/][^\\/]+$/,``),r=v(s.path),i=e===null?null:e.startsWith(`file:`)?e:`icon:${e}`;await Le(n,r,i)?(c(e=>({...e,iconSource:i})),le()):w(t(`could_not_change_the_properties`))};return(0,H.useEffect)(()=>{n.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),Rn()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[]),(0,gi.createPortal)((0,Q.jsx)(tf,{onPointerDown:e=>{e.target===e.currentTarget&&Oe()},children:(0,Q.jsxs)(nf,{role:`dialog`,"aria-modal":`true`,"aria-label":t(`properties`),children:[(0,Q.jsx)(rf,{children:r?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(of,{disabled:!he,onClick:()=>pe(e=>!e),title:he?t(`change_icon`):void 0,type:`button`,children:(0,Q.jsx)(Qd,{info:s})}),N&&(0,Q.jsx)(Rd,{allowDefault:!0,onClose:()=>pe(!1),onPick:e=>void Ae(e),value:s.iconSource?.startsWith(`icon:`)?s.iconSource.slice(5):void 0}),(0,Q.jsxs)(sf,{children:[(0,Q.jsx)(lf,{"aria-label":t(`name`),disabled:!he,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&ke()},spellCheck:!1,value:l}),(0,Q.jsx)(uf,{children:Qr(s.name,s.directory,s.linkTarget,t)})]})]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(of,{children:(0,Q.jsx)(wt,{size:30})}),(0,Q.jsxs)(sf,{children:[(0,Q.jsx)(cf,{children:t(`count_items`,{count:e.items.length})}),(0,Q.jsx)(uf,{children:t(`selection`)})]})]})}),(0,Q.jsx)(df,{}),r&&(0,Q.jsxs)(ff,{role:`tablist`,children:[(0,Q.jsx)(pf,{$active:a===`general`,onClick:()=>o(`general`),role:`tab`,type:`button`,children:t(`general`)}),(0,Q.jsx)(pf,{$active:a===`details`,onClick:()=>o(`details`),role:`tab`,type:`button`,children:t(`details`)}),ge&&(0,Q.jsx)(pf,{$active:a===`hashes`,onClick:()=>o(`hashes`),role:`tab`,type:`button`,children:t(`hashes`)}),!i&&(0,Q.jsx)(pf,{$active:a===`permissions`,onClick:()=>o(`permissions`),role:`tab`,type:`button`,children:t(`permissions`)})]}),(0,Q.jsxs)(mf,{children:[r?s.error?(0,Q.jsx)(sp,{children:s.error}):a===`general`?(0,Q.jsx)(Ud,{info:s,readOnly:d,hidden:p,archive:g,windows:i,editable:he,onRefresh:()=>void F(),onReadOnly:f,onHidden:m,onArchive:_}):a===`details`?(0,Q.jsx)(Wd,{info:s,editable:he&&k!==null,allTags:k?.allTags??[],tags:ae,colors:oe,rating:ne,comment:ie,onTags:M,onColors:se,onRating:re,onComment:j}):a===`hashes`?(0,Q.jsx)(Gd,{hashes:ee,hashing:D}):(0,Q.jsx)(Kd,{info:s,mode:y,recursive:ce,advanced:de,onAdvanced:fe,onRecursive:ue,onChange:b}):(0,Q.jsx)(rp,{children:e.items.map(e=>(0,Q.jsxs)(ip,{children:[(0,Q.jsx)(ap,{title:e.path,children:e.name}),(0,Q.jsx)(op,{children:e.error?e.error:e.directory?t(`folder`):h(e.size)})]},e.path))}),C&&(0,Q.jsx)(sp,{children:C})]}),(0,Q.jsx)(df,{}),(0,Q.jsxs)(cp,{children:[i&&(0,Q.jsx)(up,{onClick:()=>void lr(e.items.map(e=>e.path)),type:`button`,children:t(`windows_properties`)}),(0,Q.jsx)(lp,{}),(0,Q.jsx)(dp,{disabled:x,onClick:()=>void ke(),ref:n,type:`button`,children:t(`ok`)}),(0,Q.jsx)(dp,{disabled:x,onClick:Oe,type:`button`,children:t(`cancel`)}),(0,Q.jsx)(dp,{disabled:x||!Te,onClick:()=>void De(),type:`button`,children:t(`apply`)})]})]})}),document.body)}function Ud({info:e,readOnly:n,hidden:r,archive:i,windows:a,editable:o,onRefresh:s,onReadOnly:c,onHidden:l,onArchive:u}){let d=T(),f=e.path.slice(0,Math.max(0,e.path.length-e.name.length-1)),p=Math.max(0,e.volumeTotal-e.volumeFree),m=e.volumeTotal>0?p/e.volumeTotal:0;return(0,Q.jsxs)(gf,{children:[(0,Q.jsxs)(_f,{children:[(0,Q.jsx)(vf,{children:d(`general`)}),(0,Q.jsx)(yf,{onClick:s,title:d(`refresh`),type:`button`,children:(0,Q.jsx)(Ht,{size:12})})]}),(0,Q.jsxs)(hf,{children:[(0,Q.jsx)(Xd,{label:d(`type`),value:Qr(e.name,e.directory,e.linkTarget,d)}),(0,Q.jsx)(Xd,{label:d(`location`),value:f,wrap:!0}),(0,Q.jsx)(Xd,{label:d(`size`),value:e.size>0?d(`bytes_in_parentheses`,{size:h(e.size),bytes:e.size.toLocaleString()}):`—`}),e.directory&&(0,Q.jsx)(Xd,{label:d(`items`),value:d(`count_files_and_folders`,{files:e.fileCount,folders:e.folderCount})}),!e.directory&&e.sizeOnDisk>0&&(0,Q.jsx)(Xd,{label:d(`size_on_disk`),value:h(e.sizeOnDisk)}),e.fileSystem&&(0,Q.jsx)(Xd,{label:d(`filesystem`),value:e.fileSystem}),e.mountPoint&&(0,Q.jsx)(Xd,{label:d(`mount_point`),value:e.mountPoint,wrap:!0}),e.mountSource&&(0,Q.jsx)(Xd,{label:d(`mount_source`),value:e.mountSource,wrap:!0}),a?(0,Q.jsx)(Xd,{label:d(`attributes`),value:(0,Q.jsxs)(Kf,{children:[(0,Q.jsx)(Zd,{checked:n,disabled:!o,label:d(`read_only`),onChange:c}),(0,Q.jsx)(Zd,{checked:r,disabled:!o,label:d(`hidden`),onChange:l}),!e.directory&&(0,Q.jsx)(Zd,{checked:i,disabled:!o,label:d(`archive`),onChange:u})]})}):(0,Q.jsx)(Xd,{label:d(`attributes`),value:e.attributes.map(e=>ef(d,e)).join(`, `)||`—`}),(0,Q.jsx)(Xd,{label:d(`created`),value:(0,Q.jsx)(qd,{value:e.created})}),(0,Q.jsx)(Xd,{label:d(`modified`),value:(0,Q.jsx)(qd,{value:e.modified})}),(0,Q.jsx)(Xd,{label:d(`accessed`),value:(0,Q.jsx)(qd,{value:e.accessed})})]}),e.volumeTotal>0&&(0,Q.jsxs)(xf,{children:[(0,Q.jsxs)(Sf,{children:[(0,Q.jsx)(`span`,{children:d(`free_space`)}),(0,Q.jsxs)(`span`,{children:[h(e.volumeFree),` / `,h(e.volumeTotal)]})]}),(0,Q.jsx)(Cf,{children:(0,Q.jsx)(wf,{$tone:t(m),$width:Math.round(m*100)})}),(0,Q.jsxs)(Tf,{children:[Math.round((1-m)*100),`%`]})]})]})}function Wd({info:e,editable:t,allTags:n,tags:r,colors:i,rating:a,comment:o,onTags:s,onColors:c,onRating:l,onComment:u}){let d=T(),[f,p]=(0,H.useState)(``),[m,h]=(0,H.useState)(`#2dd4bf`),g=e=>i[e]??n.find(t=>t.name===e)?.color??`#64748b`,_=[...new Set([...n.map(e=>e.name),...r])].sort((e,t)=>e.localeCompare(t)),v=e=>s(r.includes(e)?r.filter(t=>t!==e):[...r,e]),y=(e,t)=>c({...i,[e]:t}),b=()=>{let e=f.trim();e.length!==0&&(r.includes(e)||s([...r,e]),c({...i,[e]:m}),p(``))};return(0,Q.jsxs)(gf,{children:[(0,Q.jsx)(_f,{children:(0,Q.jsx)(vf,{children:d(`details`)})}),(0,Q.jsxs)(hf,{children:[(0,Q.jsx)(Xd,{label:d(`type`),value:Qr(e.name,e.directory,e.linkTarget,d)}),(0,Q.jsx)(Xd,{label:d(`path`),value:e.path,wrap:!0}),e.linkTarget&&(0,Q.jsx)(Xd,{label:d(`link_target`),value:e.linkTarget,wrap:!0}),e.unixMode&&(0,Q.jsx)(Xd,{label:d(`permissions`),value:(0,Q.jsx)(Jf,{children:e.unixMode})})]}),(0,Q.jsxs)(Ef,{children:[(0,Q.jsx)(Df,{children:d(`tags`)}),_.length>0&&(0,Q.jsx)(kf,{children:_.map(e=>{let n=g(e),i=r.includes(e);return(0,Q.jsxs)(Af,{children:[(0,Q.jsx)(uo,{ariaLabel:d(`color_of_tag`,{tag:e}),disabled:!t,title:d(`change_this_tag_s_color`),value:n,onChange:t=>y(e,t)}),(0,Q.jsxs)(jf,{$color:n,$ink:Mo(n),$on:i,disabled:!t,onClick:()=>v(e),type:`button`,children:[i&&(0,Q.jsx)(Ut,{size:10}),(0,Q.jsx)(`span`,{children:e})]})]},e)})}),(0,Q.jsxs)(Of,{children:[(0,Q.jsx)(uo,{ariaLabel:d(`color_of_the_new_tag`),disabled:!t,title:d(`color_of_the_new_tag`),value:m,onChange:h}),(0,Q.jsx)(Mf,{disabled:!t,onChange:e=>p(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),b())},placeholder:d(`new_tag`),value:f}),(0,Q.jsxs)(Nf,{disabled:!t||f.trim().length===0,onClick:b,type:`button`,children:[(0,Q.jsx)(cn,{size:11}),d(`add`)]})]})]}),(0,Q.jsxs)(Ef,{children:[(0,Q.jsx)(Df,{children:d(`rating`)}),(0,Q.jsx)(Pf,{children:[1,2,3,4,5].map(e=>(0,Q.jsx)(Ff,{$on:e<=a,"aria-label":String(e),disabled:!t,onClick:()=>l(a===e?0:e),type:`button`,children:(0,Q.jsx)(rn,{size:16})},e))})]}),(0,Q.jsxs)(Ef,{children:[(0,Q.jsx)(Df,{children:d(`comment`)}),(0,Q.jsx)(If,{disabled:!t,onChange:e=>u(e.target.value),rows:3,spellCheck:!1,value:o})]})]})}function Gd({hashes:e,hashing:t}){let n=T(),[r,i]=(0,H.useState)(``);if(t||!e)return(0,Q.jsxs)(Yf,{children:[n(`calculating`),`…`]});if(e.error)return(0,Q.jsx)(sp,{children:e.error});let a=(e.items??[]).filter(e=>e.value.length>0),o=r.trim().toLowerCase(),s=o.length>0?a.some(e=>e.value.toLowerCase()===o):null;return(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(hf,{children:a.map(e=>(0,Q.jsx)(Xd,{label:e.name,value:(0,Q.jsxs)(Xf,{children:[(0,Q.jsx)(Zf,{children:e.value}),(0,Q.jsx)(Qf,{onClick:()=>void navigator.clipboard.writeText(e.value),title:n(`copy`),type:`button`,children:(0,Q.jsx)(yn,{size:11})})]}),wrap:!0},e.name))}),(0,Q.jsxs)($f,{children:[(0,Q.jsx)(ep,{children:n(`paste_a_hash_to_compare`)}),(0,Q.jsx)(tp,{onChange:e=>i(e.target.value),placeholder:`…`,spellCheck:!1,value:r}),s!==null&&(0,Q.jsx)(np,{$ok:s,children:n(s?`hash_matches`:`hash_does_not_match`)})]})]})}function Kd({info:e,mode:t,recursive:n,advanced:r,onAdvanced:i,onRecursive:a,onChange:o}){let s=T(),c=(0,H.useMemo)(()=>Vd.map((e,n)=>(t&e.bit)===0?`-`:`rwx`[n%3]).join(``),[t]),l=4|!!e.directory,u=6|!!e.directory,d=[{value:0,label:s(`no_access`)},{value:l,label:s(`view_only`)},{value:u,label:s(`can_view_and_modify`)}],f=e=>Vd.filter(t=>t.group===e).reduce((e,n)=>(t&n.bit)===0?e:e|n.bit,0),p=(e,n)=>{let r=Vd.filter(t=>t.group===e).reduce((e,t)=>e|t.bit,0);o(t&~r|n&r)};return(0,Q.jsxs)(gf,{children:[(0,Q.jsx)(_f,{children:(0,Q.jsx)(vf,{children:s(`permissions`)})}),(0,Q.jsxs)(hf,{children:[(0,Q.jsx)(Xd,{label:s(`permissions`),value:(0,Q.jsx)(Jf,{children:c})}),e.owner&&(0,Q.jsx)(Xd,{label:s(`owner`),value:e.owner}),e.group&&(0,Q.jsx)(Xd,{label:s(`group`),value:e.group})]}),(0,Q.jsxs)(Ef,{children:[(0,Q.jsx)(Df,{children:s(`permissions`)}),[`owner`,`group`,`other`].map(e=>(0,Q.jsxs)(Lf,{children:[(0,Q.jsx)(Rf,{children:s(e)}),(0,Q.jsx)(zf,{onChange:t=>p(e,Number(t.target.value)),value:f(e),children:d.map(e=>(0,Q.jsx)(`option`,{value:e.value,children:e.label},e.value))})]},e))]}),(0,Q.jsxs)(Ef,{children:[(0,Q.jsxs)(Bf,{onClick:()=>i(!r),type:`button`,children:[(0,Q.jsx)(`span`,{children:r?`▾`:`▸`}),s(`advanced_permissions`)]}),r&&(0,Q.jsxs)(Vf,{children:[(0,Q.jsx)(Uf,{}),(0,Q.jsx)(Uf,{children:s(`read`)}),(0,Q.jsx)(Uf,{children:s(`write`)}),(0,Q.jsx)(Uf,{children:s(`execute`)}),[`owner`,`group`,`other`].map(e=>(0,Q.jsxs)(Hf,{children:[(0,Q.jsx)(Uf,{children:s(e)}),Vd.filter(t=>t.group===e).map(e=>(0,Q.jsx)(Uf,{children:(0,Q.jsx)(`input`,{checked:(t&e.bit)!==0,onChange:n=>o(n.target.checked?t|e.bit:t&~e.bit),type:`checkbox`})},e.bit))]},e))]})]}),e.directory&&(0,Q.jsx)(Ef,{children:(0,Q.jsx)(Zd,{checked:n,label:s(`apply_to_all_subfolders`),onChange:a})})]})}function qd({value:e}){let t=(0,H.useSyncExternalStore)(fe,Ee),n=d(e),r=o(e,t);return(0,Q.jsxs)(`span`,{children:[n,r!==n&&(0,Q.jsxs)(bf,{children:[` · `,r]})]})}function Jd(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function Yd(e,t){let n=Object.keys(e);return n.length===Object.keys(t).length&&n.every(n=>e[n]===t[n])}function Xd({label:e,value:t,wrap:n=!1}){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Wf,{children:e}),(0,Q.jsx)(Gf,{$wrap:n,title:typeof t==`string`?t:void 0,children:t})]})}function Zd({checked:e,disabled:t=!1,label:n,onChange:r}){return(0,Q.jsxs)(qf,{$disabled:t,children:[(0,Q.jsx)(`input`,{checked:e,disabled:t,onChange:e=>r(e.target.checked),type:`checkbox`}),n]})}function Qd({info:e}){let t=e.iconSource,n=t?.startsWith(`file:`)?t.slice(5):null,r=de(n),i=N(t?null:e.path,e.directory,!0);return t?.startsWith(`icon:`)?(0,Q.jsx)(Xr,{name:t.slice(5),size:30}):r?(0,Q.jsx)(af,{alt:``,src:r}):i?(0,Q.jsx)(af,{alt:``,src:i}):e.directory?(0,Q.jsx)(wt,{size:30}):(0,Q.jsx)(B,{size:30})}function $d(e,t){return e.attributes.some(e=>e.toLowerCase()===t.toLowerCase())}function ef(e,t){switch(t.toLowerCase()){case`readonly`:return e(`read_only`);case`hidden`:return e(`hidden`);case`system`:return e(`system`);case`directory`:return e(`folder`);case`archive`:return e(`archive`);case`compressed`:return e(`compressed`);case`encrypted`:return e(`encrypted`);case`reparsepoint`:return e(`link`);case`temporary`:return e(`temporary`);default:return t}}var tf=A.div`
    position: fixed;
    inset: 0;
    z-index: 3400;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${et}
`,nf=A.div`
    display: flex;
    flex-direction: column;
    width: min(540px, 100%);
    max-height: min(760px, 88vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${L}
`,rf=A.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    padding: 16px 18px 12px;
`,af=A.img`
    width: 34px;
    height: 34px;
    object-fit: contain;
`,of=A.button`    display: grid;
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
`,sf=A.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
    flex: 1;
`,cf=A.div`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,lf=A.input`
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
`,uf=A.div`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,df=A.hr`
    height: 0;
    margin: 0;
    border: 0;
    border-top: 1px solid var(--border-color);
`,ff=A.div`
    display: flex;
    gap: 2px;
    padding: 8px 18px 0;
`,pf=A.button`
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
`,mf=A.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`,hf=A.div`
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 7px 12px;
    padding: 12px 18px 14px;
`,gf=A.div`
    display: flex;
    flex-direction: column;
`,_f=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px 18px 0;
`,vf=A.div`
    color: var(--text-muted);
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
`,yf=A.button`
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
`,bf=A.span`
    color: var(--text-muted);
`,xf=A.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 18px 14px;
`,Sf=A.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: var(--text-muted);
    font-size: 11px;
`,Cf=A.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: var(--bg-input);
`,wf=A.div`
    height: 100%;
    width: ${({$width:e})=>e}%;
    background: ${({$tone:e})=>e};
    border-radius: 3px;
`,Tf=A.div`
    color: var(--text-muted);
    font-size: 10.5px;
    text-align: right;
`,Ef=A.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 18px 14px;
`,Df=A.div`
    color: var(--text-muted);
    font-size: 11px;
`,Of=A.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
`,kf=A.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 2px;
`,Af=A.div`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,jf=A.button`
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
`,Mf=A.input`
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
`,Nf=A.button`
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
`,Pf=A.div`
    display: flex;
    gap: 2px;
`,Ff=A.button`
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
`,If=A.textarea`
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
`,Lf=A.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Rf=A.span`
    flex: 0 0 96px;
    color: var(--text-muted);
    font-size: 11.5px;
`,zf=A.select`
    flex: 1;
    padding: 4px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
`,Bf=A.button`
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
`,Vf=A.div`
    display: grid;
    grid-template-columns: 96px repeat(3, 1fr);
    gap: 5px 10px;
    margin-top: 6px;
`,Hf=A.div`
    display: contents;
`,Uf=A.div`
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
`,Wf=A.div`
    color: var(--text-muted);
    font-size: 11px;
    line-height: 1.5;
`,Gf=A.div`
    overflow: ${({$wrap:e})=>e?`visible`:`hidden`};
    color: var(--text-primary);
    font-size: 11.5px;
    line-height: 1.5;
    text-overflow: ellipsis;
    ${({$wrap:e})=>e?`overflow-wrap: anywhere;`:`white-space: nowrap;`}
`,Kf=A.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    align-items: center;
`,qf=A.label`
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
`,Jf=A.span`
    font-family: var(--font-mono);
`,Yf=A.p`
    margin: 0;
    padding: 14px 18px;
    color: var(--text-muted);
    font-size: 11.5px;
`,Xf=A.span`
    display: flex;
    align-items: flex-start;
    gap: 6px;
    min-width: 0;
`,Zf=A.span`
    min-width: 0;
    overflow-wrap: anywhere;
    font-family: var(--font-mono);
    font-size: 10.5px;
    line-height: 1.45;
`,Qf=A.button`
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
`,$f=A.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 18px 14px;
`,ep=A.span`
    color: var(--text-muted);
    font-size: 11px;
`,tp=A.input`
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
`,np=A.span`
    color: ${({$ok:e})=>e?`#4ade80`:`#fca5a5`};
    font-size: 11px;
    font-weight: 600;
`,rp=A.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 320px;
    overflow-y: auto;
    padding: 10px 18px 12px;
`,ip=A.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 2px 0;
`,ap=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,op=A.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-size: 10.5px;
`,sp=A.p`
    margin: 0;
    padding: 0 18px 12px;
    color: #fca5a5;
    font-size: 11.5px;
`,cp=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
`,lp=A.div`
    flex: 1;
`,up=A.button`
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
`,dp=A.button`
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
`,fp=`yafm.conflicts.last`;function pp(e){return e===`overwrite`||e===`rename`||e===`skip`?e:null}function mp({conflicts:e,move:t,defaultAction:n,remember:r,onResolve:i,title:a,subtitle:o}){let s=T(),c=(r?pp(Ie(fp)):null)??pp(n),[l,u]=(0,H.useState)(()=>Object.fromEntries(e.map(e=>[e.source,{action:e.samePath&&c===`overwrite`?`skip`:c,name:e.suggestedName}]))),f=(0,H.useRef)(null),p=(e,t)=>u(n=>({...n,[e]:{...n[e],...t}})),m=t=>u(n=>{let r={...n};for(let n of e)r[n.source]={action:t===`overwrite`&&n.samePath?`skip`:t,name:n.suggestedName};return r}),g=e.every(e=>{let t=l[e.source];return t.action!==null&&(t.action!==`rename`||t.name.trim().length>0)});return(0,H.useEffect)(()=>{f.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i(null)):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[i]),(0,gi.createPortal)((0,Q.jsx)(gp,{onPointerDown:e=>{e.target===e.currentTarget&&i(null)},children:(0,Q.jsxs)(_p,{"aria-label":s(`copy_conflicts`),"aria-modal":`true`,role:`dialog`,children:[(0,Q.jsxs)(vp,{children:[(0,Q.jsx)(yp,{children:a??s(`copy_conflicts`)}),(0,Q.jsx)(bp,{children:o??(0,Q.jsxs)(Q.Fragment,{children:[s(t?`move_1_item`:`copy_1_item`),` · `,s(`these_items_already_exist_in_the_target_folder`)]})})]}),e.length>1&&(0,Q.jsxs)(Ep,{children:[(0,Q.jsx)(Dp,{children:s(`apply_to_all`)}),(0,Q.jsx)(Ip,{$on:!1,onClick:()=>m(`overwrite`),type:`button`,children:s(`overwrite`)}),(0,Q.jsx)(Ip,{$on:!1,onClick:()=>m(`rename`),type:`button`,children:s(`rename`)}),(0,Q.jsx)(Ip,{$on:!1,onClick:()=>m(`skip`),type:`button`,children:s(`skip`)})]}),(0,Q.jsx)(xp,{children:e.map(e=>{let t=l[e.source],n=e.targetModified>0&&e.sourceModified===e.targetModified,r=e.targetCreated>0&&e.sourceCreated===e.targetCreated,i=e.sourceModified>0&&e.targetModified>0&&e.sourceModified<e.targetModified,a=e.sourceModified>0&&e.targetModified>0&&e.sourceModified>e.targetModified,o=e.sourceCreated>0&&e.sourceCreated>e.targetCreated,c=e.sourceCreated>0&&e.targetCreated>0&&e.sourceCreated<e.targetCreated;return(0,Q.jsxs)(Sp,{children:[(0,Q.jsxs)(Cp,{children:[(0,Q.jsxs)(wp,{title:e.source,children:[(0,Q.jsx)(hp,{directory:e.directory,path:e.source}),(0,Q.jsx)(Op,{children:e.name})]}),(0,Q.jsx)(Tp,{children:`→`}),(0,Q.jsxs)(wp,{title:e.destination,children:[(0,Q.jsx)(hp,{directory:e.directory,path:e.destination}),(0,Q.jsx)(Op,{children:e.name})]}),e.samePath?(0,Q.jsx)(Ap,{children:s(`this_is_the_same_path`)}):e.sourceModified===0?(0,Q.jsx)(kp,{$older:!1,$newer:!1}):(0,Q.jsx)(kp,{$older:i,$newer:a,children:s(i?`source_is_older`:a?`source_is_newer`:`same_time`)})]}),(0,Q.jsxs)(jp,{children:[(0,Q.jsx)(`span`,{}),(0,Q.jsx)(Mp,{children:s(`source`)}),(0,Q.jsx)(Mp,{children:s(`destination`)}),(0,Q.jsxs)(Np,{children:[s(`modified`),n&&(0,Q.jsxs)(Q.Fragment,{children:[` · `,s(`same_time`)]})]}),(0,Q.jsx)(Pp,{$new:a,children:d(e.sourceModified)}),(0,Q.jsx)(Pp,{$new:i,children:e.targetModified>0?d(e.targetModified):`—`}),(0,Q.jsxs)(Np,{children:[s(`created`),r&&(0,Q.jsxs)(Q.Fragment,{children:[` · `,s(`same_time`)]})]}),(0,Q.jsx)(Pp,{$new:o,children:d(e.sourceCreated)}),(0,Q.jsx)(Pp,{$new:c,children:e.targetCreated>0?d(e.targetCreated):`—`}),!e.directory&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Np,{children:s(`size`)}),(0,Q.jsx)(Pp,{$new:e.sourceSize>e.targetSize,children:h(e.sourceSize)}),(0,Q.jsx)(Pp,{$new:e.targetSize>e.sourceSize,children:e.targetSize>0?h(e.targetSize):`—`})]})]}),(0,Q.jsxs)(Fp,{children:[(0,Q.jsx)(Ip,{$on:t.action===`overwrite`,disabled:e.samePath,onClick:()=>p(e.source,{action:`overwrite`}),type:`button`,children:s(`overwrite`)}),(0,Q.jsx)(Ip,{$on:t.action===`rename`,onClick:()=>p(e.source,{action:`rename`}),type:`button`,children:s(`rename`)}),(0,Q.jsx)(Ip,{$on:t.action===`skip`,onClick:()=>p(e.source,{action:`skip`}),type:`button`,children:s(`skip`)})]}),t.action===`rename`&&(0,Q.jsxs)(Lp,{children:[(0,Q.jsx)(`input`,{onChange:t=>p(e.source,{name:t.target.value}),spellCheck:!1,value:t.name}),(0,Q.jsx)(Rp,{onClick:()=>p(e.source,{name:e.suggestedName}),type:`button`,children:s(`auto_name`)})]}),t.action===`overwrite`&&e.directory&&(0,Q.jsx)(Ap,{children:s(`replace_the_whole_folder`)})]},e.source)})}),(0,Q.jsxs)(zp,{children:[(0,Q.jsx)(Bp,{}),(0,Q.jsx)(Vp,{onClick:()=>i(null),type:`button`,children:s(`cancel`)}),(0,Q.jsx)(Vp,{$primary:!0,disabled:!g,onClick:()=>{if(!g)return;let t=new Set,n=e.map(e=>{let n=l[e.source],r=n.action;return t.add(r),{source:e.source,action:r,name:r===`rename`?n.name.trim():null}});if(r&&t.size===1){let[e]=[...t];Te(fp,e)}i(n)},ref:f,type:`button`,children:s(`ok`)})]})]})}),document.body)}function hp({path:e,directory:t}){let n=N(e??null,t);return n?(0,Q.jsx)(`img`,{alt:``,height:22,src:n,width:22}):t?(0,Q.jsx)(wt,{size:22}):(0,Q.jsx)(B,{size:22})}var gp=A.div`
    position: fixed;
    inset: 0;
    z-index: 3450;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${et}
`,_p=A.div`
    display: flex;
    flex-direction: column;
    width: min(640px, 100%);
    max-height: min(780px, 88vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${L}
`,vp=A.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 15px 18px 10px;
`,yp=A.div`
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
`,bp=A.div`
    color: var(--text-muted);
    font-size: 10.5px;
`,xp=A.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
    padding: 0 18px 12px;
`,Sp=A.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,Cp=A.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,wp=A.span`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex: 1;
`,Tp=A.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-size: 12px;
`,Ep=A.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 18px 10px;
`,Dp=A.span`
    margin-right: 4px;
    color: var(--text-muted);
    font-size: 9.5px;
`,Op=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,kp=A.span`
    flex: 0 0 auto;
    margin-left: auto;
    color: ${({$older:e,$newer:t})=>e?`#fbbf24`:t?`#4ade80`:`var(--text-muted)`};
    font-size: 9.5px;
    font-weight: ${({$newer:e})=>e?600:400};
`,Ap=A.span`
    flex: 1;
    color: #fbbf24;
    font-size: 9.5px;
    text-align: right;
`,jp=A.div`
    display: grid;
    grid-template-columns: 62px minmax(0, 1fr) minmax(0, 1fr);
    gap: 2px 8px;
    padding-left: 22px;
`,Mp=A.span`
    color: var(--text-muted);
    font-size: 9px;
    text-transform: uppercase;
`,Np=A.span`
    color: var(--text-muted);
    font-size: 9.5px;
`,Pp=A.span`
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
`,Fp=A.div`
    display: flex;
    gap: 4px;
    padding-left: 22px;
`,Ip=A.button`
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
`,Lp=A.div`
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
`,Rp=A.button`
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
`,zp=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-top: 1px solid var(--border-color);
`,Bp=A.div`
    flex: 1;
`,Vp=A.button`
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
`;function Hp(){let e=T(),[t,n]=(0,H.useState)(null);(0,H.useEffect)(()=>E.on(e=>{let t=e;t.type===`fs.elevation.ask`&&t.data&&n(t.data)}),[]);let r=e=>{let r=t;n(null),r&&E.request(`fs.elevation.answer`,{token:r.token,allow:e})},i=(t=>{switch(t){case`delete`:return e(`delete`);case`rename`:return e(`rename`);case`copy`:return e(`copy`);case`moveTo`:return e(`move`);case`extractArchive`:return e(`extract_archive`);case`newFolder`:case`newFolderAt`:return e(`new_folder`);case`newFile`:case`newFileAt`:return e(`new_file`);case`restoreRecycle`:return e(`restore`);case`writeFile`:return e(`save`);default:return``}})(t?.action??``);return(0,Q.jsx)(Ke,{confirmLabel:e(`run_as_administrator`),message:e(`this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again`,{path:t?.path??``,action:i.length>0?i.toLowerCase():e(`ok`).toLowerCase()}),onCancel:()=>r(!1),onConfirm:()=>r(!0),open:t!==null,title:e(`administrator_rights_required`)})}function Up(){let e=T(),[t,n]=(0,H.useState)(null),[r,i]=(0,H.useState)(``),a=(0,H.useRef)(null),o=(0,H.useRef)(null);(0,H.useEffect)(()=>(Ue((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ue(null)),[]),(0,H.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,gi.createPortal)((0,Q.jsx)(Wp,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,Q.jsxs)(Gp,{role:`dialog`,"aria-modal":`true`,children:[(0,Q.jsx)(Kp,{children:e(`archive_password`)}),(0,Q.jsx)(qp,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,Q.jsx)(Jp,{title:t.archive,children:t.archive}),(0,Q.jsx)(Yp,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,Q.jsxs)(Xp,{children:[(0,Q.jsx)(Zp,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,Q.jsx)(Qp,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Wp=A.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${et}
`,Gp=A.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${L}
`,Kp=A.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,qp=A.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Jp=A.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yp=A.input`
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
`,Xp=A.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Zp=A.button`
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
`,Qp=A(Zp)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function $p({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=T(),v=(0,H.useRef)(null),y=c??_(`search_this_folder`);(0,H.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,Q.jsxs)(em,{children:[(0,Q.jsx)(tn,{}),(0,Q.jsx)(tm,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(nm,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&(0,Q.jsx)(rm,{disabled:i===0,onClick:g,title:_(`select_all_matches`),type:`button`,children:(0,Q.jsx)(Ut,{size:12})}),(0,Q.jsx)(rm,{$chevron:!0,onClick:()=>b(u),title:_(`previous_match_shift_enter`),type:`button`,children:(0,Q.jsx)(Kt,{size:12})}),(0,Q.jsx)(rm,{$chevron:!0,$down:!0,onClick:()=>b(d),title:_(`next_match_enter`),type:`button`,children:(0,Q.jsx)(Kt,{size:12})})]}),(0,Q.jsx)(im,{$on:n,onClick:()=>b(f),title:_(`match_case`),type:`button`,children:`Aa`}),(0,Q.jsx)(im,{$on:r,onClick:()=>b(p),title:_(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,Q.jsx)(am,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,Q.jsx)(ht,{size:12}):(0,Q.jsx)($t,{size:12})}),(0,Q.jsx)(rm,{onClick:h,title:_(`close_search_esc`),type:`button`,children:(0,Q.jsx)(wn,{size:12})})]})}var em=A.div`
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
    ${Be}
`,tm=A.input`
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
`,nm=A.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,rm=A.button`
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
`,im=A.button`
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
`,am=A(im)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function om({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=T(),s=Z(),[c,l]=(0,H.useState)(!1),[u,d]=(0,H.useState)(``),[f,p]=(0,H.useState)([]),[m,h]=(0,H.useState)(0),[g,_]=(0,H.useState)(null),[v,y]=(0,H.useState)(null),[b,x]=(0,H.useState)(null),S=(0,H.useRef)(null),C=(0,H.useRef)(null),w=(0,H.useRef)(0);(0,H.useEffect)(()=>{if(!Os(e)){x(null);return}let t=ks(e);if(!t){x(null);return}let n=!0;return Ss().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,H.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,H.useEffect)(()=>{r&&r!==w.current&&(w.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,H.useEffect)(()=>{c&&S.current?.select()},[c]),(0,H.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let ee=()=>{d(e.replace(/\\/g,`/`)),l(!0)},E=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,H.useEffect)(()=>{if(!c){p([]);return}let e=um(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{ke(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let D=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,H.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=C.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,Q.jsxs)(gm,{onPointerDown:e=>e.stopPropagation(),ref:C,children:[(0,Q.jsxs)(bm,{children:[(0,Q.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?D(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):E(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:S,spellCheck:!1,value:u}),(0,Q.jsx)(xm,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,Q.jsx)(wn,{size:12})}),(0,Q.jsx)(xm,{$apply:!0,onClick:E,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,Q.jsx)(Ut,{size:14})})]}),f.length>0&&g&&(0,gi.createPortal)((0,Q.jsx)(_m,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,Q.jsxs)(vm,{$active:t===m,onClick:t=>D(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,Q.jsx)(Uo,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,Q.jsx)(ym,{children:e.name})]},e.path))}),document.body)]});let O=t?[{label:t,path:e,icon:n}]:sm(e,b)??lm(e,s.places);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(dm,{onClick:ee,title:o(`click_to_type_a_path`),children:O.map((t,n)=>(0,Q.jsxs)(fm,{$last:n===O.length-1,children:[n>0&&(0,Q.jsx)(mm,{children:(0,Q.jsx)(Kt,{size:9})}),(0,Q.jsxs)(hm,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,Q.jsx)(pm,{children:(0,Q.jsx)(Ua,{place:t.place,size:13})}):t.icon&&(0,Q.jsx)(pm,{children:t.icon}),t.label]})]},t.path))}),v&&(0,Q.jsx)(Pe,{items:[{label:o(`open`),icon:(0,Q.jsx)(Zt,{size:14}),onSelect:()=>i(v.path)},{label:o(`open_in_new_tab`),icon:(0,Q.jsx)(cn,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`copy_as_path`),icon:(0,Q.jsx)(yn,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...Ou(v.path)?[{label:o(`open_with`),icon:(0,Q.jsx)(Et,{size:14}),onSelect:()=>void dr(v.path)},{label:o(`properties`),icon:(0,Q.jsx)(vt,{size:14}),onSelect:()=>void cr([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function sm(e,t){let n=ks(e);if(!n)return null;let r=As(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,Q.jsx)(V,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function cm(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function lm(e,t){let r=cm(e),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=r.findIndex(t=>n(t.path,e.path));t>i&&(i=t,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function um(e){if(Ou(e)||Os(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var dm=A.div`
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
`,fm=A.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,pm=A.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,mm=A.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,hm=A.button`
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
`,gm=A.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,_m=A.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${tt}
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
`,vm=A.button`
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
`,ym=A.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,bm=A.div`
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
`,xm=A.button`
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
`;function Sm({places:e,drives:r,recent:i,recentLimit:a,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],hiddenPanels:p=[],asideRef:m,onNavigate:g,onOpenView:_}){let[y,b]=(0,H.useState)([]),x=T(),[S,C]=(0,H.useState)(null),w=Z();(0,H.useEffect)(()=>{Ge().then(e=>{C(e),b(Ba(e).filter(e=>e.pinned))},()=>{C(null),b([])})},[l]),(0,H.useEffect)(()=>{if(!E.available)return;let e=y.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return E.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>E.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[y,c]);let ee=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let r=e.find(e=>n(e.path,t));return{name:S?.placeNames?.[t]??r?.name??(v(t)||t),path:t,kind:`folder`,icon:r?.icon??S?.placeIcons?.[t]??null}}),D=s===`files`;return(0,Q.jsxs)(Am,{ref:m,onKeyDown:e=>{if(e.key===`Enter`||e.key===` `){e.stopPropagation();return}if(![`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key))return;let t=[...e.currentTarget.querySelectorAll(`button:not([disabled])`)];if(t.length===0)return;let n=t.indexOf(document.activeElement);n<0||(e.preventDefault(),e.stopPropagation(),t[e.key===`Home`?0:e.key===`End`?t.length-1:e.key===`ArrowDown`?Math.min(n+1,t.length-1):Math.max(n-1,0)]?.focus())},children:[(0,Q.jsxs)(jm,{children:[!f.includes(`home`)&&(0,Q.jsxs)(Im,{$active:s===`home`,"data-sidebar-active":s===`home`?`true`:void 0,onClick:e=>_(`home`,Pr(e)),title:x(`overview`),type:`button`,children:[(0,Q.jsx)(Pt,{}),(0,Q.jsx)(Rm,{children:x(`overview`)})]}),!f.includes(`recycle`)&&(0,Q.jsxs)(Im,{$active:s===`recycle`,"data-sidebar-active":s===`recycle`?`true`:void 0,onClick:e=>_(`recycle`,Pr(e)),title:x(`recycle_bin`),type:`button`,children:[(0,Q.jsx)(Tn,{}),(0,Q.jsx)(Rm,{children:x(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,Q.jsxs)(Im,{$active:s===`gallery`,"data-sidebar-active":s===`gallery`?`true`:void 0,onClick:e=>_(`gallery`,Pr(e)),title:x(`gallery`),type:`button`,children:[(0,Q.jsx)(Mt,{}),(0,Q.jsx)(Rm,{children:x(`gallery`)})]})]}),y.filter(e=>!p.includes(e.kind)).map(e=>(0,Q.jsxs)(Nm,{children:[(0,Q.jsxs)(Im,{as:`div`,$active:!1,children:[(0,Q.jsx)(Lm,{children:(0,Q.jsx)(Ha,{panel:e,size:16})}),(0,Q.jsx)(Rm,{children:x(e.title)})]}),(0,Q.jsx)(Pm,{children:(0,Q.jsxs)(Fm,{children:[e.kind===`quick`&&ee(e).map(e=>(0,Q.jsxs)(Im,{$active:D&&n(o,e.path),"data-sidebar-active":D&&n(o,e.path)?`true`:void 0,onClick:t=>g(e.path,Pr(t)),title:e.path,type:`button`,children:[(0,Q.jsx)(Ua,{place:e}),(0,Q.jsx)(Rm,{children:e.name})]},e.path)),e.kind===`recent`&&i.slice(0,a).map(e=>{let t=Gr(w,e.path);return(0,Q.jsxs)(Im,{$active:D&&n(o,e.path),onClick:t=>e.isDirectory?g(e.path,Pr(t)):void je(e.path),title:e.path,type:`button`,children:[t&&w.useIcons?(0,Q.jsx)(Ua,{place:t}):(0,Q.jsx)(Uo,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,Q.jsx)(Rm,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,Q.jsx)(Tm,{historyVersion:d,onNavigate:g}),e.kind===`drives`&&r.map(e=>{let r=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,Q.jsxs)(Im,{$active:D&&n(o,e.name),onClick:t=>g(e.name,Pr(t)),title:e.name,type:`button`,children:[(0,Q.jsx)(_t,{}),(0,Q.jsxs)(Rm,{children:[u(e),(0,Q.jsxs)(zm,{children:[h(e.freeSpace),` free`]}),(0,Q.jsx)(Bm,{children:(0,Q.jsx)(Vm,{$used:r,$tone:t(r)})})]})]},e.name)}),e.kind===`favorites`&&(0,Q.jsx)(Dm,{favorites:S?.favorites??[],onNavigate:g}),e.kind===`share`&&(0,Q.jsx)(Em,{onNavigate:g}),(e.kind===`home`||e.kind===`folder`)&&(0,Q.jsx)(Om,{onNavigate:g,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,Q.jsx)(Mm,{children:(0,Q.jsxs)(Im,{$active:s===`settings`,"data-sidebar-active":s===`settings`?`true`:void 0,onClick:e=>_(`settings`,Pr(e)),title:x(`settings`),type:`button`,children:[(0,Q.jsx)(vt,{}),(0,Q.jsx)(Rm,{children:x(`settings`)})]})})]})}var Cm=10,wm=40;function Tm({historyVersion:e=0,onNavigate:t}){let n=T(),[r,i]=(0,H.useState)(null),a=Z();return(0,H.useEffect)(()=>{F().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Gr(a,e.path);return(0,Q.jsxs)(Im,{$active:!1,onClick:n=>t(e.path,Pr(n)),title:b(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,Q.jsx)(Ua,{place:r}):(0,Q.jsx)(Uo,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,Q.jsx)(Rm,{children:r?.name||e.name})]},e.path)})}function Em({onNavigate:e}){let t=T(),[n,r]=(0,H.useState)(null);(0,H.useEffect)(()=>{Ss().then(r,()=>r([]))},[]),(0,H.useEffect)(()=>E.on(e=>{let t=e;t.type===`share.peers`&&t.data?.peers&&r(t.data.peers)}),[]);let i=(n??[]).flatMap(e=>e.paired?e.shares.map(t=>({peer:e,share:t})):[]);return i.length===0?(0,Q.jsx)(Im,{as:`div`,$active:!1,children:(0,Q.jsx)(Rm,{children:t(`nothing_is_shared_yet`)})}):(0,Q.jsx)(Q.Fragment,{children:i.map(({peer:t,share:n})=>(0,Q.jsxs)(Im,{$active:!1,onClick:r=>e(As(t.id,n.id),Pr(r)),title:`${t.name} · ${n.name}`,type:`button`,children:[(0,Q.jsx)(V,{size:16}),(0,Q.jsxs)(Rm,{children:[n.name,(0,Q.jsx)(zm,{children:t.name})]})]},`${t.id}:${n.id}`))})}function Dm({favorites:e,onNavigate:t}){let n=T(),r=Z();return e.length===0?(0,Q.jsx)(Im,{as:`div`,$active:!1,children:(0,Q.jsx)(Rm,{children:n(`no_favorites_yet`)})}):(0,Q.jsx)(Q.Fragment,{children:e.map(e=>{let n=Gr(r,e.path);return(0,Q.jsxs)(Im,{$active:!1,onClick:n=>e.isDirectory?t(e.path,Pr(n)):void je(e.path),title:e.path,type:`button`,children:[n&&r.useIcons?(0,Q.jsx)(Ua,{place:n}):(0,Q.jsx)(Uo,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,Q.jsx)(Rm,{children:n?.name||e.name})]},e.path)})})}function Om({path:e,onNavigate:t}){let[r,i]=(0,H.useState)(null);(0,H.useEffect)(()=>{e&&(i(null),ke(e,!1).then(i,()=>i(null)))},[e]),(0,H.useEffect)(()=>{if(e&&E.available)return E.on(t=>{let r=t;r.type===`fs.changed`&&typeof r.data?.path==`string`&&n(r.data.path,e)&&ke(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,Cm),s=a.filter(e=>!e.isDirectory).slice(0,wm);return(0,Q.jsxs)(Q.Fragment,{children:[o.map(e=>(0,Q.jsx)(km,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,Q.jsx)(km,{entry:e,onNavigate:t},e.fullPath))]})}function km({entry:e,onNavigate:t}){let n=Z(),r=Gr(n,e.fullPath);return(0,Q.jsxs)(Im,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,Pr(n)):void je(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,Q.jsx)(Ua,{place:r}):(0,Q.jsx)(Uo,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,Q.jsx)(Rm,{children:r?.name||e.name})]})}var Am=A.aside`
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

    &:not(:hover):not(:focus-within) ${()=>zm},
    &:not(:hover):not(:focus-within) ${()=>Bm} {
        display: none;
    }

    &:hover span,
    &:focus-within span {
        opacity: 1;
    }
`,jm=A.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,Mm=A(jm)`
    margin-top: auto;
`,Nm=A.div`
    display: flex;
    flex-direction: column;
`,Pm=A.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${Am}:hover ${Nm}:hover > &,
    ${Am}:focus-within ${Nm}:focus-within > & {
        grid-template-rows: 1fr;
    }
`,Fm=A.div`
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
`,Im=A.button`
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
`,Lm=A.span`
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
`,Rm=A.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,zm=A.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Bm=A.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Vm=A.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function Hm({tabs:e,onRestore:t,open:n,onOpenChange:r,shortcut:i=``}){let a=T(),o=Pu(),s=(0,H.useRef)(null),c=r;return(0,H.useEffect)(()=>{if(!n)return;let e=e=>{s.current?.contains(e.target)||c(!1)},t=()=>c(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n]),(0,Q.jsxs)(Um,{ref:s,children:[(0,Q.jsx)(Wm,{$active:n,"data-shortcut":i||void 0,onClick:()=>c(!n),title:a(`recently_closed_tabs`),type:`button`,children:(0,Q.jsx)(nn,{size:15})}),n&&(0,Q.jsxs)(Gm,{children:[(0,Q.jsxs)(Km,{children:[(0,Q.jsxs)(qm,{children:[(0,Q.jsx)(nn,{size:12}),a(`recently_closed_tabs`)]}),(0,Q.jsx)(Jm,{onClick:()=>c(!1),title:a(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]}),e.length===0?(0,Q.jsx)(eh,{children:a(`no_recently_closed_tabs`)}):(0,Q.jsx)(Ym,{children:[...e].reverse().map((n,r)=>{let i=e.length-1-r,a=Au(n);return(0,Q.jsxs)(Xm,{onClick:()=>{c(!1),t(i)},title:n,type:`button`,children:[(0,Q.jsx)(Mu,{location:n}),(0,Q.jsxs)(Zm,{children:[(0,Q.jsx)(Qm,{children:o(n)}),(0,Q.jsx)($m,{children:a?o(n):n})]})]},`${i}-${n}`)})})]})]})}var Um=A.div`
    position: relative;
    display: flex;
`,Wm=A.button`
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
`,Gm=A.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${tt}
    ${Ze}
`,Km=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,qm=A.span`
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
`,Jm=A.button`
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
`,Ym=A.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Xm=A.button`
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
`,Zm=A.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Qm=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$m=A.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,eh=A.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,th=A.span`
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
`;function nh({tasks:e,onClear:t,open:n,onOpenChange:r,shortcut:i=``}){let a=T(),o=(0,H.useRef)(null),s=e.filter(e=>e.state===`running`).length,c=e.length;return(0,H.useEffect)(()=>{if(!n)return;let e=e=>{o.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,Q.jsxs)(ih,{ref:o,children:[(0,Q.jsxs)(ah,{$active:n,"data-shortcut":i||void 0,onClick:()=>r(!n),title:s>0?b(a,s,`k_1_operation_running`,`count_operations_running`):a(`status_center`),type:`button`,children:[(0,Q.jsx)(Xt,{size:13}),c>0&&(0,Q.jsx)(th,{children:c>9?`9+`:c})]}),n&&(0,Q.jsxs)(oh,{children:[(0,Q.jsxs)(sh,{children:[(0,Q.jsxs)(ch,{children:[(0,Q.jsx)(Xt,{size:12}),a(`status_center`)]}),(0,Q.jsxs)(lh,{children:[(0,Q.jsx)(uh,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:a(`clear_finished`)}),(0,Q.jsx)(dh,{onClick:()=>r(!1),title:a(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]})]}),e.length===0?(0,Q.jsx)(ph,{children:a(`no_operations_yet`)}):(0,Q.jsx)(fh,{children:e.map(e=>(0,Q.jsx)(rh,{task:e},e.id))})]})]})}function rh({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,Q.jsxs)(mh,{children:[(0,Q.jsxs)(hh,{children:[(0,Q.jsx)(gh,{$state:e.state,children:e.state===`done`?(0,Q.jsx)(Ut,{size:10}):e.state===`failed`?(0,Q.jsx)(wn,{size:10}):(0,Q.jsx)(_h,{})}),(0,Q.jsx)(vh,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,Q.jsxs)(yh,{children:[h(e.bytesDone),` / `,h(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,Q.jsxs)(yh,{children:[e.done,` / `,e.total]})]}),i&&(0,Q.jsx)(bh,{children:(0,Q.jsx)(xh,{$percent:r,$indeterminate:t===0})}),e.error&&(0,Q.jsx)(Sh,{children:e.error})]})}var ih=A.div`
    position: relative;
    display: flex;
`,ah=A.button`
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
`,oh=A.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${tt}
    ${Ze}
`,sh=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,ch=A.span`
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
`,lh=A.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,uh=A.button`
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
`,dh=A.button`
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
`,fh=A.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,ph=A.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,mh=A.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${et}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,hh=A.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,gh=A.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,_h=A.span`
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
`,vh=A.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yh=A.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,bh=A.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,xh=A.div`
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
`,Sh=A.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function Ch(){if(!E.available)return[];try{return(await I.readBlock(`/history`)).rows.map(e=>{let t=Th(e.paths);return{id:Number(e.id),label:String(e.label),paths:t.length>0?t.split(``):[],at:Number(e.at),applied:Number(e.applied)!==0,restorable:Number(e.restorable)!==0}})}catch{return(await E.request(`fs.history.list`)).entries}}async function wh(e){return E.available?(await E.request(`fs.history.undoTo`,{id:e})).ok:!1}function Th(e){return typeof e==`string`?e:``}function Eh({open:e,onOpenChange:t,shortcut:n=``}){let r=T(),[i,a]=(0,H.useState)([]),[o,s]=(0,H.useState)(!1),c=(0,H.useRef)(null),l=t,u=()=>void Ch().then(a,()=>a([]));(0,H.useEffect)(()=>{if(!e)return;u();let t=window.setInterval(u,1e3),n=e=>{c.current?.contains(e.target)||l(!1)},r=()=>l(!1);return window.addEventListener(`pointerdown`,n),window.addEventListener(`blur`,r),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n),window.removeEventListener(`blur`,r)}},[e]);let d=async e=>{s(!0);try{await wh(e),u()}finally{s(!1)}};return(0,Q.jsxs)(kh,{ref:c,children:[(0,Q.jsx)(Ah,{$active:e,"data-shortcut":n||void 0,onClick:()=>l(!e),title:r(`history`),type:`button`,children:(0,Q.jsx)(ln,{size:14})}),e&&(0,Q.jsxs)(jh,{children:[(0,Q.jsxs)(Mh,{children:[(0,Q.jsxs)(Nh,{children:[(0,Q.jsx)(ln,{size:12}),r(`history`)]}),(0,Q.jsx)(Ph,{onClick:()=>l(!1),title:r(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]}),i.length===0?(0,Q.jsx)(Uh,{children:r(`no_operations_yet`)}):(0,Q.jsx)(Fh,{children:i.map(e=>(0,Q.jsxs)(Ih,{children:[(0,Q.jsxs)(Lh,{children:[(0,Q.jsxs)(Rh,{children:[(0,Q.jsx)(Oh,{label:e.label}),Dh(r,e.label)]}),(0,Q.jsx)(zh,{children:m(e.at)})]}),e.paths.length>0&&(0,Q.jsxs)(Bh,{title:e.paths.join(`
`),children:[e.paths.slice(0,3).join(` · `),e.paths.length>3?` +${e.paths.length-3}`:``]}),(0,Q.jsx)(Vh,{children:(0,Q.jsx)(Hh,{disabled:!e.applied||!e.restorable||o,onClick:()=>void d(e.id),type:`button`,children:r(`undo`)})})]},e.id))})]})]})}function Dh(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function Oh({label:e}){return e.startsWith(`delete`)?(0,Q.jsx)(Tn,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,Q.jsx)(yn,{size:13}):e.startsWith(`rename`)?(0,Q.jsx)(on,{size:13}):e.startsWith(`compress`)?(0,Q.jsx)(an,{size:13}):e.startsWith(`new`)?(0,Q.jsx)(cn,{size:13}):(0,Q.jsx)(Zt,{size:13})}var kh=A.div`
    position: relative;
    display: flex;
`,Ah=A.button`
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
`,jh=A.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${tt}
    ${Ze}
`,Mh=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Nh=A.span`
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
`,Ph=A.button`
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
`,Fh=A.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Ih=A.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Lh=A.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Rh=A.span`
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
`,zh=A.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Bh=A.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vh=A.div`
    display: flex;
    justify-content: flex-end;
`,Hh=A.button`
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
`,Uh=A.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Wh=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(Wh||{}),Gh=[0,1],Kh=[1,0],qh=[2,3],Jh=[3,2],Yh={L:Gh,M:Kh,Q:qh,H:Jh},Xh=/^\d*$/,Zh=/^[A-Z0-9 $%*+./:-]*$/,Qh=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,$h=1,eg=40,tg=3,ng=3,rg=40,ig=10,ag=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],og=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],sg=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<$h||e>eg)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,Wh.Timing),this.setFunctionModule(e,6,e%2==0,Wh.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,lg(r,e));this.setFunctionModule(8,7,lg(r,6)),this.setFunctionModule(8,8,lg(r,7)),this.setFunctionModule(7,8,lg(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,lg(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,lg(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,lg(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=lg(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,Wh.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,Wh.Alignment)}setFunctionModule(e,t,n,r=Wh.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==wg(t,n))throw RangeError(`Invalid argument`);let r=og[n[0]][t],i=ag[n[0]][t],a=Math.floor(Cg(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=Tg(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=Eg(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(Cg(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=lg(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=tg:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*rg),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*rg}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=tg:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*rg),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*rg}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=ng)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*ig,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function cg(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function lg(e,t){return!!(e>>>t&1)}var ug=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},dg=[1,10,12,14],fg=[2,9,11,13],pg=[4,8,16,16];function mg(e,t){return e[Math.floor((t+7)/17)+1]}function hg(e){let t=[];for(let n of e)cg(n,8,t);return new ug(pg,e.length,t)}function gg(e){if(!yg(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);cg(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new ug(dg,e.length,t)}function _g(e){if(!bg(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=Qh.indexOf(e.charAt(n))*45;r+=Qh.indexOf(e.charAt(n+1)),cg(r,11,t)}return n<e.length&&cg(Qh.indexOf(e.charAt(n)),6,t),new ug(fg,e.length,t)}function vg(e){return e===``?[]:yg(e)?[gg(e)]:bg(e)?[_g(e)]:[hg(Sg(e))]}function yg(e){return Xh.test(e)}function bg(e){return Zh.test(e)}function xg(e,t){let n=0;for(let r of e){let e=mg(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function Sg(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function Cg(e){if(e<$h||e>eg)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function wg(e,t){return Math.floor(Cg(e)/8)-ag[t[0]][e]*og[t[0]][e]}function Tg(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=Dg(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=Dg(n,2)}return t}function Eg(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=Dg(t,e))}return n}function Dg(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function Og(e,t,n=1,r=40,i=-1,a=!0){if(!($h<=n&&n<=r&&r<=eg)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=wg(o,t)*8,i=xg(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[Kh,qh,Jh])a&&s<=wg(o,e)*8&&(t=e);let c=[];for(let t of e){cg(t.mode[0],4,c),cg(t.numChars,mg(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=wg(o,t)*8;cg(0,Math.min(4,l-c.length),c),cg(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)cg(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new sg(o,t,u,i)}function kg(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?vg(e):Array.isArray(e)?[hg(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=Og(c,Yh[n],i,a,o,r),u=Ag({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function Ag(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=Wh.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function jg(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function Mg(e,t={}){let n=kg(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${jg(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${jg(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function Ng({currentFolder:e,open:t,onOpenChange:r,shortcut:i=``}){let a=T(),[o,s]=(0,H.useState)(null),[c,l]=(0,H.useState)(!1),u=(0,H.useRef)(null),d=r;(0,H.useEffect)(()=>{if(!t)return;let e=()=>void vs().then(s,()=>void 0);e();let n=window.setInterval(e,2500),r=e=>{u.current?.contains(e.target)||d(!1)},i=()=>d(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(n),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]),(0,H.useEffect)(()=>{let e=()=>void vs().then(s,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let f=async e=>{l(!0);try{s(await e())}finally{l(!1)}},p=o?.shares.some(t=>n(t.path,e))??!1;return(0,Q.jsxs)(Pg,{ref:u,children:[(0,Q.jsxs)(Fg,{$active:t,"data-shortcut":i||void 0,onClick:()=>d(!t),title:a(`share_folders`),type:`button`,children:[(0,Q.jsx)(V,{size:15}),o&&o.shares.length>0&&(0,Q.jsx)(th,{children:o.shares.length>9?`9+`:o.shares.length})]}),t&&(0,Q.jsxs)(Ig,{children:[(0,Q.jsxs)(Lg,{children:[(0,Q.jsxs)(Rg,{children:[(0,Q.jsx)(Wt,{size:12}),a(`share`)]}),(0,Q.jsx)(zg,{onClick:()=>d(!1),title:a(`close`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]}),(0,Q.jsxs)(Bg,{children:[(0,Q.jsxs)(Vg,{children:[(0,Q.jsx)(gn,{size:15}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:o?.deviceName||a(`this_device`)}),(0,Q.jsx)(Kg,{children:o?.fingerprint??``})]})]}),o?.shares.length===0&&(0,Q.jsx)(qg,{children:a(`no_folders_are_shared_yet`)}),o?.shares.map(e=>(0,Q.jsxs)(Jg,{children:[(0,Q.jsxs)(Yg,{children:[(0,Q.jsx)(Xg,{title:e.path,children:e.name}),(0,Q.jsx)(Qg,{disabled:c,onClick:()=>void f(()=>bs(e.id)),title:a(`stop_sharing`),type:`button`,children:(0,Q.jsx)(wn,{size:10})})]}),(0,Q.jsx)(Zg,{title:e.path,children:e.path}),(0,Q.jsxs)($g,{children:[(0,Q.jsxs)(e_,{$active:e.mode===`client`,onClick:()=>void f(()=>xs(e.id,`client`)),title:a(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,Q.jsx)(gn,{size:11}),a(`app`)]}),(0,Q.jsxs)(e_,{$active:e.mode===`web`,onClick:()=>void f(()=>xs(e.id,`web`)),title:a(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,Q.jsx)(Ct,{size:11}),a(`web`)]})]})]},e.id)),(0,Q.jsxs)(t_,{disabled:c||e.length===0||p,onClick:()=>void f(()=>ys(e,`client`)),title:p?a(`this_folder_is_already_shared`):e,type:`button`,children:[(0,Q.jsx)(cn,{size:12}),a(`share_this_folder`)]}),o?.webRunning&&(0,Q.jsxs)(n_,{children:[(0,Q.jsxs)(r_,{children:[(0,Q.jsx)(Ct,{size:12}),a(`browser_access`)]}),(0,Q.jsxs)(Ug,{children:[(0,Q.jsx)(Wg,{children:o.urls.map(e=>(0,Q.jsx)(i_,{onClick:()=>void j(e),type:`button`,children:e},e))}),o.preferredUrl&&(0,Q.jsx)(Hg,{value:o.preferredUrl})]}),(0,Q.jsx)(Kg,{children:a(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Pg=A.div`
    position: relative;
    display: flex;
`,Fg=A.button`
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
`,Ig=A.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${tt}
    ${Ze}
`,Lg=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Rg=A.span`
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
`,zg=A.button`
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
`,Bg=A.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,Vg=A.div`
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
`;function Hg({value:e}){let t=T(),n=(0,H.useMemo)(()=>Mg(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,Q.jsx)(Gg,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var Ug=A.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Wg=A.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,Gg=A.div`
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
`,Kg=A.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,qg=A.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Jg=A.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Yg=A.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Xg=A.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zg=A.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qg=A.button`
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
`,$g=A.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,e_=A.button`
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
`,t_=A.button`
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
`,n_=A.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,r_=A.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,i_=A.button`
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
`;function a_(){let e=T();return(0,Q.jsx)(o_,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var o_=A.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function s_({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a,open:o,onOpenChange:s,shortcut:c=``}){let l=T(),[u,d]=(0,H.useState)(!1),f=o??u,p=s??d,m=(0,H.useRef)(null);(0,H.useEffect)(()=>{if(!f)return;let e=()=>p(!1),t=e=>{m.current?.contains(e.target)||p(!1)},n=e=>{e.key===`Escape`&&p(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[f]),(0,H.useEffect)(()=>{a&&p(!1)},[a]);let h=e.columns,g=e=>{let t=new Set(h);t.has(e)?t.delete(e):t.add(e);let r=Ws.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,Q.jsxs)(c_,{ref:m,children:[(0,Q.jsx)(l_,{$active:f,"data-shortcut":c||void 0,disabled:a,onClick:()=>p(!f),title:l(`view`),type:`button`,children:e.mode===`grid`?(0,Q.jsx)(Ot,{size:14}):(0,Q.jsx)(St,{size:14})}),f&&(0,Q.jsxs)(u_,{children:[(0,Q.jsxs)(d_,{children:[(0,Q.jsx)(mt,{size:11}),l(`view`)]}),(0,Q.jsxs)(p_,{children:[(0,Q.jsxs)(m_,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,Q.jsx)(St,{size:12}),` `,l(`list`)]}),(0,Q.jsxs)(m_,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,Q.jsx)(Ot,{size:12}),` `,l(`grid`)]})]}),(0,Q.jsxs)(d_,{children:[(0,Q.jsx)(St,{size:11}),l(`list_icon_size`)]}),(0,Q.jsxs)(h_,{children:[(0,Q.jsx)(`input`,{"aria-label":l(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,Q.jsxs)(g_,{children:[e.iconSize,`px`]})]}),(0,Q.jsxs)(d_,{children:[(0,Q.jsx)(Ot,{size:11}),l(`grid_size`)]}),(0,Q.jsxs)(h_,{children:[(0,Q.jsx)(`input`,{"aria-label":l(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,Q.jsxs)(g_,{children:[e.gridSize,`px`]})]}),(0,Q.jsxs)(d_,{children:[(0,Q.jsx)(qt,{size:11}),l(`columns`),(0,Q.jsx)(a_,{}),(0,Q.jsx)(f_,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:l(`reset_column_widths`),type:`button`,children:l(`reset_widths`)})]}),Ws.map(e=>(0,Q.jsxs)(__,{children:[(0,Q.jsx)(`input`,{checked:h.includes(e.id),onChange:()=>g(e.id),type:`checkbox`}),(0,Q.jsx)(`span`,{children:l(e.label)})]},e.id)),(0,Q.jsxs)(__,{children:[(0,Q.jsx)(`input`,{checked:h.includes(`linkTarget`),onChange:()=>g(`linkTarget`),type:`checkbox`}),(0,Q.jsx)(`span`,{children:l(`link_target_after_the_name`)})]}),(0,Q.jsxs)(d_,{children:[(0,Q.jsx)($t,{size:11}),l(`preview_panel`),(0,Q.jsx)(a_,{})]}),(0,Q.jsxs)(__,{children:[(0,Q.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,Q.jsx)(`span`,{children:l(`preview_under_the_list`)})]})]})]})}var c_=A.div`
    position: relative;
    display: flex;
    height: 100%;
`,l_=A.button`
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
`,u_=A.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${tt}
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
`,d_=A.div`
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
`,f_=A.button`
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
`,p_=A.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,m_=A.button`
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
`,h_=A.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,g_=A.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,__=A.label`
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
`,v_=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Q.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),y_=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Q.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),b_=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Q.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),x_=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,Q.jsx)(`path`,{d:`M2 5h6`})}),S_=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,Q.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),C_=e=>(0,Q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,Q.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,Q.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function w_({tabs:e,activeId:t,closedTabs:n,onRestoreClosed:r,onSelect:i,onClose:a,onNewTab:o,onReorder:s,onTransferToTab:c,view:l,onViewChange:u,onColumns:d,showImages:f,onShowImages:p,tasks:m,onClearTasks:h,activityOpen:g,onActivityOpenChange:_,panel:v,onPanelChange:y,trayCount:b,trayVisible:x,onToggleTray:S,split:C,canSplit:w,onToggleSplit:ee,details:E,canDetails:O,onToggleDetails:te,shortcuts:k,currentFolder:A}){let ne=T(),re=D(),ie=M(),[j,ae]=(0,H.useState)({left:!1,right:!1}),[oe,se]=(0,H.useState)(null),[ce,le]=(0,H.useState)(null),ue=(0,H.useRef)(null),de=(0,H.useRef)(null),fe=(0,H.useRef)(null),N=(0,H.useCallback)(()=>{let e=de.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ae(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,H.useEffect)(()=>{N();let e=de.current;if(!e)return;let t=new ResizeObserver(N);return t.observe(e),()=>t.disconnect()},[N,e.length]),(0,H.useEffect)(()=>()=>{ue.current&&window.clearTimeout(ue.current.timer)},[]),(0,H.useEffect)(()=>{fe.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let pe=e=>de.current?.scrollBy({left:e,behavior:`smooth`}),me=()=>{ue.current&&window.clearTimeout(ue.current.timer),ue.current=null,le(null)};return(0,Q.jsxs)(O_,{children:[(0,Q.jsx)(k_,{children:(0,Q.jsx)(gn,{size:19})}),(0,Q.jsxs)(A_,{children:[j.left&&(0,Q.jsx)(M_,{onClick:()=>pe(-180),title:ne(`scroll_tabs_left`),type:`button`,children:(0,Q.jsx)(v_,{})}),(0,Q.jsx)(j_,{onScroll:N,onWheel:e=>{let t=de.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:de,children:e.map(e=>(0,Q.jsxs)(N_,{$active:e.id===t,$dragging:oe===e.id,$dropTarget:ce===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Ko(t.dataTransfer)||!T_(e)||(t.preventDefault(),ue.current?.id===e.id))return;me(),le(e.id);let n=window.setTimeout(()=>{i(e.id),ue.current=null},500);ue.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ue.current?.id===e.id||ce===e.id)&&me()},onDragEnd:()=>{se(null),me()},onDragOver:t=>{(oe||Ko(t.dataTransfer)&&T_(e))&&(t.preventDefault(),Ko(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>se(e.id),onDrop:t=>{if(t.preventDefault(),oe)s(oe,e.id);else if(T_(e)&&Ko(t.dataTransfer)){let{paths:n,move:r}=qo(t);n.length>0&&(i(e.id),c(n,e.path,!t.ctrlKey&&r))}se(null),me()},onClick:()=>i(e.id),ref:e.id===t?fe:void 0,title:e.path||e.title,type:`button`,children:[(0,Q.jsx)(E_,{tab:e}),(0,Q.jsx)(P_,{children:e.title}),e.partner&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(F_,{children:`|`}),(0,Q.jsx)(D_,{place:e.partner.place}),(0,Q.jsx)(P_,{children:e.partner.title})]}),(0,Q.jsx)(I_,{"data-shortcut":X(k.closeTab),onClick:t=>{t.stopPropagation(),a(e.id)},title:ne(`close_tab`),children:(0,Q.jsx)(b_,{})})]},e.id))}),j.right&&(0,Q.jsx)(M_,{onClick:()=>pe(180),title:ne(`scroll_tabs_right`),type:`button`,children:(0,Q.jsx)(y_,{})}),(0,Q.jsx)(L_,{"data-shortcut":X(k.newTab),onClick:o,title:ne(`new_tab`),type:`button`,children:(0,Q.jsx)(cn,{size:13})})]}),(0,Q.jsx)(R_,{...ie}),(0,Q.jsxs)(z_,{children:[(0,Q.jsx)(V_,{$active:C,"data-shortcut":X(k.splitView),disabled:!w,onClick:ee,title:ne(C?`close_split_view`:`split_view`),type:`button`,children:(0,Q.jsx)(qt,{size:15})}),(0,Q.jsx)(V_,{$active:E,"data-shortcut":X(k.detailsPanel),disabled:!O,onClick:te,title:ne(E?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,Q.jsx)(mt,{size:15})}),(0,Q.jsxs)(B_,{$active:x,"data-shortcut":X(k.fileTray),onClick:S,title:ne(x?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,Q.jsx)(It,{size:14}),b>0&&(0,Q.jsx)(th,{children:b>9?`9+`:b})]}),(0,Q.jsx)(Hm,{onRestore:r,tabs:n,open:v===`closedTabs`,onOpenChange:e=>y(e?`closedTabs`:null),shortcut:X(k.closedTabsPanel)}),(0,Q.jsx)(Eh,{open:v===`history`,onOpenChange:e=>y(e?`history`:null),shortcut:X(k.historyPanel)}),(0,Q.jsx)(Ng,{currentFolder:A,open:v===`share`,onOpenChange:e=>y(e?`share`:null),shortcut:X(k.sharePanel)}),(0,Q.jsx)(nh,{tasks:m,onClear:h,open:g,onOpenChange:_,shortcut:X(k.statusCenter)}),(0,Q.jsx)(s_,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:u,onColumns:d,onShowImages:p,showImages:f,view:l,open:v===`view`,onOpenChange:e=>y(e?`view`:null),shortcut:X(k.viewMenu)}),(0,Q.jsx)(H_,{onClick:re.minimize,title:ne(`minimize`),type:`button`,children:(0,Q.jsx)(x_,{})}),(0,Q.jsx)(H_,{onClick:re.toggleMaximize,title:re.maximized?ne(`restore`):ne(`maximize`),type:`button`,children:re.maximized?(0,Q.jsx)(C_,{}):(0,Q.jsx)(S_,{})}),(0,Q.jsx)(U_,{onClick:re.close,title:ne(`close`),type:`button`,children:(0,Q.jsx)(b_,{})})]})]})}function T_(e){return e.kind===`files`&&(!y(e.path)||x(e.path))}function E_({tab:e}){switch(e.kind){case`home`:return(0,Q.jsx)(Nt,{size:13});case`settings`:return(0,Q.jsx)(vt,{size:13});case`recycle`:return(0,Q.jsx)(Tn,{size:13});default:return e.archive?(0,Q.jsx)(an,{size:13}):(0,Q.jsx)(D_,{place:e.place})}}function D_({place:e}){return e?(0,Q.jsx)(Ua,{place:e,size:13}):(0,Q.jsx)(wt,{size:13})}var O_=A.header`
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
`,k_=A.span`
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
`,A_=A.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,j_=A.div`
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
`,M_=A.button`
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
`,N_=A.button`
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
`,P_=A.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,F_=A.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,I_=A.span`
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
`,L_=A.button`
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
`,R_=A.div`
    flex: 1;
    min-width: 28px;
`,z_=A.div`
    display: flex;
    flex-shrink: 0;
`,B_=A.button`
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
`,V_=A.button`
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
`,H_=A.button`
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
`,U_=A(H_)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function W_(){let[e,t]=(0,H.useState)(null),n=(0,H.useRef)(null),r=(0,H.useRef)(void 0);return(0,H.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,gi.createPortal)((0,Q.jsx)(G_,{tooltip:e}),document.body):null}function G_({tooltip:e}){let t=(0,H.useRef)(null),[n,r]=(0,H.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,H.useState)(()=>e.bottom+6);return(0,H.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,Q.jsxs)(K_,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,Q.jsx)(q_,{children:e.text}),e.shortcut&&(0,Q.jsx)(J_,{children:e.shortcut})]})}var K_=A.div`
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
    ${et}
`,q_=A.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,J_=A.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Y_=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function X_(e){return`"${e.replaceAll(`"`,``)}"`}function Z_(e){let t=document.documentElement.style;for(let n of Y_){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${X_(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Q_(){return E.available?(await E.request(`app.fonts`)).fonts??[]:[]}function $_({deviceName:e,code:t,onAccept:n,onReject:r}){let i=T(),a=(0,H.useRef)(null);return(0,H.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,gi.createPortal)((0,Q.jsx)(ev,{children:(0,Q.jsxs)(tv,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsxs)(nv,{children:[(0,Q.jsx)(V,{size:15}),i(`pair_for_sharing`)]}),(0,Q.jsx)(rv,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,Q.jsx)(iv,{children:t}),(0,Q.jsx)(av,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,Q.jsxs)(ov,{children:[(0,Q.jsx)(sv,{onClick:r,type:`button`,children:i(`reject`)}),(0,Q.jsx)(cv,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var ev=A.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${et}
`,tv=A.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${L}
`,nv=A.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,rv=A.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,iv=A.div`
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
`,av=A.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,ov=A.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,sv=A.button`
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
`,cv=A(sv)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,lv=A.button`
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
`,uv=A.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,dv=`modulepreload`,fv=function(e){return`/`+e},pv={},mv=function(e){return e.pathname.endsWith(`.css`)},hv=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},gv=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=fv(t,n);let r=s(t),i=mv(r);return hv(pv,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:dv,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},_v=(0,H.lazy)(()=>gv(()=>import(`./OverviewView-Bkfg7AKB.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6]))),vv=(0,H.lazy)(()=>gv(()=>import(`./SettingsView-CsifAs-z.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([7,1,3,4,2,5,6]))),yv=(0,H.lazy)(()=>gv(()=>import(`./GalleryView-C5blL-FL.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([8,1,3,4,2,5]))),bv=(0,H.lazy)(()=>gv(()=>import(`./RecycleView-L3ggeK7z.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([9,1,3,4,2,5,6]))),xv=0,Sv=new Set;function Cv(e){Sv.add(e),E.send({type:`app.navigate.done`,payload:{path:e}})}var wv=20,Tv=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function Ev(e){return e.history[e.index]??ku(`home`)}function Dv(e){return Au(Ev(e))??`files`}function Ov(e){let t=Ev(e);return Au(t)?``:e.listing?.path||t}function kv(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||Dv(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function Av(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function jv(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||xe().iconSize,gridSize:e.view?.gridSize||t.gridSize||xe().gridSize,sort:e.view?.sort??xe().sort,sortDescending:e.view?.sortDescending??xe().sortDescending,columns:t.columns??xe().columns??[]}}function Mv(e=ku(`home`)){return xv+=1,{id:`tab-${xv}`,listing:null,loading:!Au(e),error:null,history:[e],index:0,fresh:!0,view:null}}function Nv(e){return e instanceof Error?e.message:String(e)}function Pv(e){let t=ks(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return As(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function Fv(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function Iv(e){return y(e)?_e(e):void 0}function Lv(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return b(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:h(n)})}function Rv(e,t,n){if(e.set(t,{...e.get(t)??{},...n}),e.size>64){let t=e.keys().next().value;t!==void 0&&e.delete(t)}}function zv(){let e=T(),[t,r]=(0,H.useState)(()=>[Mv()]),[o,c]=(0,H.useState)(()=>t[0].id),[u,d]=(0,H.useState)(null),[f,m]=(0,H.useState)(()=>{let e=dt(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[h,C]=(0,H.useState)([]),[w,ee]=(0,H.useState)([]),[D,O]=(0,H.useState)(null),[A,re]=(0,H.useState)(null),[j,M]=(0,H.useState)(null),oe=ae(),se=zn(),[de,fe]=(0,H.useState)(null);(0,H.useEffect)(()=>(Gn(e=>fe(e)),()=>Gn(null)),[]),(0,H.useEffect)(()=>{if(!de)return;let t=null,n=!0;return Cr(de.move?`move`:`copy`,e(`copy_conflicts`)).then(e=>{n?t=e:wr(e)},()=>void 0),()=>{n=!1,wr(t)}},[de]);let[N,pe]=(0,H.useState)(ue),[ye,be]=(0,H.useState)(0),[Ce,Ee]=(0,H.useState)(0),[De,F]=(0,H.useState)(0),[Le,Re]=(0,H.useState)(ue),[Be,He]=(0,H.useState)(0),[Ue,We]=(0,H.useState)(0),[Ke,Xe]=(0,H.useState)(0),[Ze,I]=(0,H.useState)(0),$e=(0,H.useRef)(Ze);$e.current=Ze;let[et,tt]=(0,H.useState)([]),[rt,it]=(0,H.useState)(10),[L,st]=(0,H.useState)(null),lt=ne(s(L?.themeMode)),ft=(0,H.useMemo)(()=>(L?.favorites??[]).map(e=>i(e.path)),[L?.favorites]),[mt,ht]=(0,H.useState)(0),[R,gt]=(0,H.useState)(()=>Dr()),[_t,yt]=(0,H.useState)(0),[bt,St]=(0,H.useState)(0),[wt,Tt]=(0,H.useState)(0),[Et,Dt]=(0,H.useState)(!0),[Ot,kt]=(0,H.useState)(()=>{let e=dt(`yafm.preview.width`,320);return e>=220?e:320}),[At,jt]=(0,H.useState)(null),[Nt,Ft]=(0,H.useState)(null),[It,Lt]=(0,H.useState)({kind:null,info:null}),[Rt,z]=(0,H.useState)(`primary`),[Bt,Vt]=(0,H.useState)(null),[Ht,Ut]=(0,H.useState)(null),[Wt,Gt]=(0,H.useState)(null),[Kt,qt]=(0,H.useState)(null),[Jt,Yt]=(0,H.useState)(null),[Xt,Qt]=(0,H.useState)({primary:0,secondary:0}),[B,$t]=(0,H.useState)({primary:null,secondary:null}),[en,nn]=(0,H.useState)(null),[rn,on]=(0,H.useState)([]),[sn,ln]=(0,H.useState)(!1),[un,pn]=(0,H.useState)(null),mn=(0,H.useRef)(null),[hn,gn]=(0,H.useState)(null),[_n,vn]=(0,H.useState)(``),V=(0,H.useRef)([]),yn=(0,H.useRef)([]),[bn,xn]=(0,H.useState)([]),[Sn,Cn]=(0,H.useState)([]),[wn,En]=(0,H.useState)(!1),Dn=(0,H.useMemo)(()=>wn?new Set(Sn.map(e=>e.path)):new Set,[Sn,wn]),[On,kn]=(0,H.useState)(!1),[An,jn]=(0,H.useState)([]),[Mn,Nn]=(0,H.useState)(null),Pn=(0,H.useRef)(0),[Fn,In]=(0,H.useState)(()=>{let e=Ie(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?Av({x:e.x,y:e.y}):Av({x:Math.max(20,window.innerWidth-340),y:110})}),Ln=(0,H.useCallback)(()=>{In(e=>Av(e)),kn(!0)},[]),U=t.find(e=>e.id===o)??t[0],W=Dv(U),Rn=Ev(U),Bn=Ov(U),Vn=W===`files`?U.listing?.parent??Pv(Bn):null,G=U.splitWith?t.find(e=>e.id===U.splitWith):void 0,Hn=W===`files`&&G!==void 0,Un=G?Ov(G):``,Wn=G?G.listing?.parent??Pv(Un):null,Kn=Hn&&G&&Rt===`secondary`?G:U,Jn=L?.defaultView??xe(),Zn=jv(Kn,Jn);(0,H.useEffect)(()=>{g(L?.accentColor,L?.secondaryColor,lt)},[L?.accentColor,L?.secondaryColor,lt]),(0,H.useEffect)(()=>{Z_(L?.fonts)},[L?.fonts]),(0,H.useEffect)(()=>{l(L?.timeFormat,L?.timeFormatPattern),_(L?.relativeTime,L?.relativeTimeWindowMinutes)},[L?.timeFormat,L?.timeFormatPattern,L?.relativeTime,L?.relativeTimeWindowMinutes]),(0,H.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!L?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[L?.backgroundSource]),(0,H.useEffect)(()=>(he(e=>new Promise(t=>{Nn({id:++Pn.current,prompt:e,resolve:t})})),()=>he(null)),[]),(0,H.useEffect)(()=>{z(`primary`)},[o]),(0,H.useEffect)(()=>{Re(ue),We(0),Xe(0)},[W]),(0,H.useEffect)(()=>{We(0)},[Le.query,Le.matchCase,Le.regex]),(0,H.useEffect)(()=>{We(e=>Ke===0?0:Math.min(e,Ke-1))},[Ke]);let Qn=Zn.columns.includes(`linkCount`),nr=(0,H.useMemo)(()=>{let e={},t=Ba(L),n={};for(let[e,t]of Object.entries(L?.placeNames??{}))n[i(e)]=t;for(let t of h)e[i(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=i(t),a=h.find(e=>i(e.path)===r);e[r]={name:n[r]??a?.name??(v(t)||t),path:t,kind:`folder`,icon:a?.icon??L?.placeIcons?.[t]??null}}return e},[h,L]),ir=(0,H.useMemo)(()=>({places:nr,useIcons:L?.systemIcons===!1}),[nr,L?.systemIcons]),ar=L?.defaultView?.showImages??xe().showImages,or=L?.defaultView?.imageStripHeight??xe().imageStripHeight,cr=W===`home`?(0,Q.jsx)(Pt,{size:13}):W===`settings`?(0,Q.jsx)(vt,{size:13}):W===`recycle`?(0,Q.jsx)(Tn,{size:13}):W===`gallery`?(0,Q.jsx)(Mt,{size:13}):void 0,lr=N.open&&N.query.length>0,ur=(0,H.useDeferredValue)(N),dr=(0,H.useMemo)(()=>lr&&Kn.listing?Kn.listing.entries.filter(e=>Ye(e.isDirectory?Kr(ir,e.fullPath,e.name):e.name,ur)).map(e=>e.fullPath):[],[lr,ur,Kn.listing,ir]);(0,H.useEffect)(()=>{be(0)},[N.query,N.matchCase,N.regex,Kn.listing?.path]);let fr=dr.length===0?-1:Math.min(ye,dr.length-1),pr=(0,H.useCallback)(()=>{pe(e=>({...e,open:!1,query:``})),be(0)},[]),mr=(0,H.useCallback)(()=>{pe(e=>({...e,open:!0})),Ee(e=>e+1)},[]),_r=(0,H.useCallback)(()=>{Re(e=>({...e,open:!0})),He(e=>e+1)},[]),vr=(0,H.useCallback)(()=>{Re(ue),We(0),Xe(0)},[]),yr=(0,H.useCallback)(e=>{We(t=>Ke===0?0:(Math.min(t,Ke-1)+e+Ke)%Ke)},[Ke]),Tr=(0,H.useCallback)(e=>{pe(t=>({...t,open:!0,query:t.open?t.query+e:e})),Ee(e=>e+1)},[]),Er=(0,H.useCallback)(e=>{be(t=>dr.length===0?0:(Math.min(t,dr.length-1)+e+dr.length)%dr.length)},[dr.length]),q=(0,H.useRef)({tabs:t,activeId:o,activePane:Rt});q.current={tabs:t,activeId:o,activePane:Rt};let Or=(0,H.useRef)(L);Or.current=L;let kr=(0,H.useRef)(!1),Mr=(0,H.useRef)([]),Y=(0,H.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Ir=(0,H.useRef)(new Map),Rr=(0,H.useCallback)(e=>{let t=(Ir.current.get(e)??0)+1;return Ir.current.set(e,t),()=>Ir.current.get(e)===t},[]),zr=(0,H.useRef)(new Map),Br=(0,H.useRef)(new Map),Vr=(0,H.useCallback)(e=>{let t=zr.current.get(e.path),n=Br.current.get(e.path);return!t&&!n?e:{...e,folderSizes:{...e.folderSizes,...t},counts:{...e.counts,...n}}},[]),Hr=(0,H.useCallback)((e,t)=>{E.available&&t&&e===kv(q.current)&&E.send({type:`fs.focus`,payload:{path:t}})},[]),Ur=(0,H.useCallback)(async(e,t,n)=>{if(!(t&&Os(t)))try{let r=(await me(t,Qn)).listing;if(!n()||!r)return;Y(e,e=>e.loading?{listing:Vr({...r,total:r.entries.length,signature:0}),view:r.view??null}:{})}catch{}},[Qn,Y,Vr]),Z=(0,H.useCallback)(async(e,t,r=!1)=>{let i=Rr(e);pr(),Hr(e,t);let a=!r||!q.current.tabs.find(t=>t.id===e)?.listing,o=!r&&t!==void 0;Y(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&n(i,t);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),t],index:a?e.index:e.index+1}});try{a&&Ur(e,t,i);let n=t&&Os(t)?await js(t):await ke(t,!0,Qn,$e.current,t?Iv(t):void 0,e);if(!i())return;Y(e,e=>({listing:Vr(n),view:n.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,r)=>r===e.index?n.path:t):e.history,index:e.index})),!r&&!Os(n.path)&&Ve(n.path).then(()=>ht(e=>e+1))}catch(n){if(!i())return;let a=q.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?Ov(a):``,s=Pv(o),c=Nv(n);if(o&&ve(c)){let n=p(o),a=await Qe(n,!!_e(n));if(a){Se(n,a),i()&&Z(e,t,r);return}}Y(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Rr,Qn,Y,Hr,pr,Ur,Vr]),qr=(0,H.useRef)(new Set),Jr=(0,H.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e),r=t?.listing;if(!t||Dv(t)!==`files`||!r)return;let i=r.entries.length;if(i<=0||i>=(r.total??0)||Yr.current.has(e))return;let a=`${e}|${r.path}|${i}`;if(qr.current.add(a))try{let t=await nt(r.path,i,r.view?.sort??`name`,r.view?.sortDescending??!1);Y(e,e=>{let a=e.listing;return!a||!n(a.path,r.path)||a.entries.length!==i||a.view?.sort!==r.view?.sort?{}:{listing:{...a,entries:[...a.entries,...t.entries],total:t.total}}})}catch{}finally{qr.current.delete(a)}},[Y]),Yr=(0,H.useRef)(new Set),Xr=(0,H.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e),r=t?.listing;if(t&&Dv(t)===`files`&&r&&!(r.entries.length>=(r.total??0))&&Yr.current.add(e))try{let t=[],i=r.entries.length,a=r.total??0;for(;i<a;){let e=await nt(r.path,i,r.view?.sort??`name`,r.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),i+=e.entries.length,a=e.total}if(t.length===0)return;Y(e,e=>{let i=e.listing;return!i||!n(i.path,r.path)||i.entries.length!==r.entries.length?{}:{listing:{...i,entries:[...i.entries,...t.flat()],total:a}}})}catch{}finally{Yr.current.delete(e)}},[Y]),[Zr,Qr]=(0,H.useState)(0),$r=(0,H.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await Xr(e),(q.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&Qr(e=>e+1)},[Xr]),ti=Kn.id,ni=Dv(Kn),ri=Kn.listing?.entries.length??0,ii=Kn.listing?.total??0;(0,H.useEffect)(()=>{N.open&&N.query.length!==0&&(ni!==`files`||ri>=ii||Xr(ti))},[N.open,N.query,ti,ni,ri,ii,Xr]);let ai=(0,H.useCallback)((e,t)=>{let n=ju(t);n&&(Au(n)?(pr(),Rr(e),Y(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Z(e,n))},[Rr,Z,Y,pr]),oi=(0,H.useCallback)(async(e,t,n)=>{if(pr(),Au(t)){Rr(e),Y(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Rr(e);Hr(e,t),Y(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Os(t)||Ur(e,t,r);let n=Os(t)?await js(t):await ke(t,!0,Qn,$e.current,Iv(t),e);if(!r())return;Y(e,()=>({listing:Vr(n),view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=Nv(i);if(ve(a)){let i=p(t),a=await Qe(i,!!_e(i));if(a){Se(i,a),r()&&oi(e,t,n);return}}Y(e,()=>({listing:{path:t,parent:Pv(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:Nv(i)}))}},[Rr,Qn,Y,Hr,pr,Ur,Vr]),si=(0,H.useCallback)((e,t=!0)=>{let n=Mv(e??ku(`home`));return r(e=>[...e,n]),t&&c(n.id),e&&!Au(e)&&Z(n.id,e),n.id},[Z]),ci=(0,H.useCallback)(e=>{for(let t of q.current.tabs)Dv(t)===`files`&&n(Ov(t),e)&&Z(t.id,e,!0)},[Z]),li=(0,H.useCallback)((e,t)=>{let r=v(t);for(let i of q.current.tabs)i.listing?.entries.some(t=>n(t.fullPath,e))&&Y(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>n(i.fullPath,e)?{...i,name:r,fullPath:t}:i);return{listing:{...a,entries:o,signature:a.signature+1}}})},[Y]),ui=(0,H.useRef)([]);(0,H.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&y(t)&&e.add(i(p(t)))}let n=ui.current.filter(t=>!e.has(t));ui.current=[...e],n.length>0&&at(n)},[t]);let di=(0,H.useCallback)((e,t=!1)=>{t?si(ku(e)):ai(q.current.activeId,ku(e))},[si,ai]),fi=(0,H.useCallback)(()=>{let e=mn.current;if(!e)return;let t=e.querySelector(`[data-sidebar-active="true"]`),n=e.querySelector(`button:not([disabled])`);(t??n)?.focus()},[]),mi=(0,H.useCallback)(e=>{let{tabs:t,activeId:n}=q.current,i=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(yn.current.push(Ev(i)),yn.current.length>wv&&yn.current.shift(),xn([...yn.current])),a.length===0){let e=Mv();r([e]),c(e.id);return}let o=t.findIndex(t=>t.id===e);r(a),n===e&&c(a[Math.min(o,a.length-1)].id)},[]),hi=(0,H.useCallback)(()=>{let e=yn.current.pop();if(!e)return;xn([...yn.current]);let t={...Mv(e),fresh:!1};r(e=>[...e,t]),c(t.id),Dv(t)===`files`&&Z(t.id,Ov(t))},[Z]),gi=(0,H.useCallback)(e=>{let t=yn.current,n=t[e];if(!n)return;t.splice(e,1),xn([...t]);let i={...Mv(n),fresh:!1};r(e=>[...e,i]),c(i.id),Dv(i)===`files`&&Z(i.id,Ov(i))},[Z]),vi=(0,H.useCallback)((e,t=!1)=>{t?si(e):ai(kv(q.current),e??ku(`home`))},[ai,si]),yi=(0,H.useCallback)(e=>{let{tabs:t,activeId:n}=q.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;c(r[i].id)},[]),bi=(0,H.useCallback)(()=>{let{tabs:e,activeId:t}=q.current,n=e.find(e=>e.id===t);if(!n||Dv(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),Y(t,()=>({splitWith:void 0})),z(`primary`);return}let a=Ov(n),o={...Mv(a),hidden:!0};r(e=>[...e,o]),Y(t,()=>({splitWith:o.id})),Z(o.id,a),z(`primary`)},[Z,Y]),xi=(0,H.useCallback)(e=>{kt(e),ce(`yafm.preview.width`,e)},[]),Si=(0,H.useCallback)((e,t,n)=>Lt(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),Ci=(0,H.useCallback)((e,t)=>Si(`gallery`,e,t),[Si]),wi=(0,H.useCallback)((e,t)=>Si(`recycle`,e,t),[Si]),Ti=Hn?Rt===`secondary`?Nt??At:At??Nt:At,Ei=Hn&&Rt===`secondary`?Xt.secondary:Xt.primary,Di=W===`files`?Ti:It.kind===W?It.info:null,Oi=W===`files`?Ei>1?b(e,Ei,`k_1_item_selected`,`count_items_selected`):void 0:It.kind===W?It.note:void 0,ki=(0,H.useMemo)(()=>W===`files`&&U.listing?Lv(e,U.listing):_n,[W,U.listing,e,_n]),ji=W===`files`?U.listing?.git??null:null,Mi=(0,H.useRef)(null),Ni=e=>{e.preventDefault();let t=Mi.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);m(r),ce(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Pi=(e,t,n)=>{t&&Vt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Fi=(0,H.useCallback)((e,t)=>{Qt(n=>n[e]===t?n:{...n,[e]:t})},[]),Ii=(0,H.useCallback)(e=>Fi(`primary`,e),[Fi]),Li=(0,H.useCallback)(e=>Fi(`secondary`,e),[Fi]),Ri=(e,t)=>{Xt[e]!==0&&$t(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},zi=async(e,t=!1)=>{let n=Bt;if(Vt(null),!n)return;let r=e===null?await rr(n.directory,t):await sr(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;pr(),nn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Bi=(0,H.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===kv(q.current));t&&t.index>0&&oi(t.id,t.history[t.index-1],t.index-1)},[oi]),Vi=(0,H.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===kv(q.current));t&&t.index<t.history.length-1&&oi(t.id,t.history[t.index+1],t.index+1)},[oi]),Hi=(0,H.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===kv(q.current));t&&Dv(t)===`files`&&t.listing?.parent&&vi(t.listing.parent)},[vi]),Ui=(0,H.useRef)(null),Wi=(0,H.useCallback)(()=>{for(let e of q.current.tabs)e.listing&&Z(e.id,e.listing.path,!0)},[Z]),Gi=(0,H.useCallback)(e=>{e.length!==0&&(jn(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Ln())},[Ln]),Ki=(0,H.useCallback)(async e=>{let t=await $n(e);t.length!==0&&Gi(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Gi]),qi=(0,H.useCallback)(e=>{let t=new Set(e);jn(e=>e.filter(e=>!t.has(e.path)))},[]),Ji=(0,H.useCallback)(async e=>{let t=Or.current;if(!t)return;let n=await $n(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>i(e.path))),a=n.filter(e=>!r.has(i(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...t,favorites:[...t.favorites??[],...a]};st(o),await ct(o),yt(e=>e+1)},[]),Yi=(0,H.useCallback)(async e=>{let t=Or.current;if(!t)return;let n=new Set(e.map(i)),r=(t.favorites??[]).filter(e=>!n.has(i(e.path)));if(r.length===(t.favorites??[]).length)return;let a={...t,favorites:r};st(a),await ct(a),yt(e=>e+1)},[]),Xi=(0,H.useCallback)(()=>jn([]),[]),Zi=(0,H.useRef)(-1),Qi=(0,H.useCallback)(e=>{Cn(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),En(e.move),e.entries.length>0&&Ln()},[Ln]),$i=(0,H.useCallback)(async()=>{if(E.available)try{let e=await K();Zi.current=e.sequence,Qi(e)}catch{}},[Qi]),ea=(0,H.useCallback)(async e=>{e.length!==0&&await qn(e,!1)&&await $i()},[$i]),ta=(0,H.useRef)(An);ta.current=An;let na=(0,H.useRef)(On);na.current=On;let ra=(0,H.useRef)(!1);(0,H.useEffect)(()=>{let e=L?.trayAutoShow??ot().trayAutoShow,t=t=>{e&&Ko(t)&&(na.current||(ra.current=!0),Ln())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{ra.current&&window.setTimeout(()=>{ra.current&&ta.current.length===0&&kn(!1),ra.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[Ln,L?.trayAutoShow]),(0,H.useEffect)(()=>{let e=()=>In(e=>Av(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let ia=(0,H.useCallback)(async()=>{let e=ta.current;if(e.length>0){let t=await $n(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));jn(e=>e.filter(e=>n.has(e.path)))}await $i()},[$i]),aa=(0,H.useCallback)(()=>{ia(),Tt(e=>e+1),Wi()},[ia,Wi]),oa=(0,H.useCallback)(e=>{let t=Av(e);In(t),Te(`yafm.tray.position`,t)},[]),sa=(0,H.useCallback)(()=>{ra.current=!1,On?kn(!1):Ln()},[Ln,On]),ca=(0,H.useCallback)(async(t,n,r)=>{let i=await Yn(t,n,r);i.cancelled||(i.ok?(r&&qi(t),Tt(e=>e+1),Wi(),$i()):Me(i.error??e(`the_files_could_not_be_transferred`)))},[Wi,$i,qi]);(0,H.useEffect)(()=>{if(E.available)return xr().then(e=>{V.current=e,on(e)},()=>void 0),E.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=V.current.find(t=>t.id===e.id);return!t||t.state!==e.state});V.current=n,on(n),r&&ln(!0)})},[]);let la=(0,H.useCallback)(()=>{Sr().then(()=>xr().then(e=>{V.current=e,on(e)},()=>void 0))},[]);(0,H.useEffect)(()=>{if(!E.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await K();if(!e||t.sequence===Zi.current)return;Zi.current=t.sequence,Qi(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Qi]);let ua=(0,H.useCallback)(async e=>{let t=e?await hr():await gr();t.ok?(Tt(e=>e+1),Wi()):t.error&&!t.error.startsWith(`Nothing to`)&&Me(t.error)},[Wi]),fa=(0,H.useRef)(Qn);(0,H.useEffect)(()=>{fa.current!==Qn&&(fa.current=Qn,Wi())},[Qn,Wi]);let pa=(0,H.useCallback)((e,t)=>{let{tabs:n}=q.current,r=n.find(t=>t.id===e);if(!r||Dv(r)!==`files`)return;let i=Ov(r),a=Or.current?.defaultView??xe(),o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||xe().iconSize,gridSize:r.view?.gridSize||a.gridSize||xe().gridSize,sort:r.view?.sort??xe().sort,sortDescending:r.view?.sortDescending??xe().sortDescending,...t};Y(e,()=>({view:o})),Ui.current!==null&&window.clearTimeout(Ui.current),Ui.current=window.setTimeout(()=>{Ui.current=null,qe(i,o)},250)},[Y]),ma=(0,H.useCallback)(e=>{pa(kv(q.current),e)},[pa]),ha=(0,H.useCallback)(e=>{let t=Or.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe(),columns:e}};st(n),ct(n)},[]),ga=(0,H.useCallback)(e=>{let t=Or.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe(),showImages:e}};st(n),ct(n)},[]),_a=(0,H.useCallback)(e=>{let t=Or.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe(),imageStripHeight:e}};st(n),ct(n)},[]),va=(0,H.useCallback)((e,t,n,r)=>{let i=q.current.tabs.find(t=>t.id===e);if(!i||Dv(i)!==`files`||!i.listing)return;let a=Ov(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Y(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Fe(a,t,n,r)},[Y]),ya=(0,H.useCallback)((e,t)=>{let n=q.current.tabs.find(t=>t.id===e);if(!n)return;let r=jv(n,Or.current?.defaultView??xe());pa(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),Z(e,Ov(n),!0)},[pa,Z]),ba=(0,H.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),xa=(0,H.useCallback)(()=>{ge().then(C,()=>C([]))},[]),Sa=(0,H.useCallback)(e=>{let t=(e.openTabs??[]).map(ju).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...Mv(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),c(n[i].id);let a=n[i];return(Dv(a)===`files`?Z(a.id,Ov(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&Dv(e)===`files`&&Z(e.id,Ov(e),!0)}),!0},[Z]),Ca=(0,H.useCallback)(e=>{let t=Mr.current;if(Mr.current=[],t.length===0)return;let n=t.filter(e=>!Sv.has(e));for(let e of t)n.includes(e)||Cv(e);if(n.length===0)return;let{tabs:r}=q.current;if(!e&&r.length===1&&r[0].fresh){ai(r[0].id,n[0]),Cv(n[0]);for(let e of n.slice(1))si(e),Cv(e);return}let i=n.map(e=>{let t=si(e);return Cv(e),t}).at(-1);i&&setTimeout(()=>c(i),0)},[si,ai]),wa=(0,H.useCallback)(()=>{Ge().then(e=>{st(e),it(e.recentLimit);let t=Ar(e.shortcuts);gt(t),Nr(jr(t,`openInNewTab`)),yt(e=>e+1),kr.current||(kr.current=!0,Ca(e.restoreTabs&&Sa(e)))},()=>{it(10),kr.current=!0,Ca(!1)})},[Ca,Sa]),Ta=(0,H.useCallback)(()=>{Ae().then(tt,()=>tt([]))},[]),Ea=(0,H.useCallback)(()=>{Oe().then(ee,()=>ee([]))},[]),Da=t.filter(e=>!e.hidden),Oa=Da.map(Ev),ka=Oa.join(`
`),Aa=Math.max(Da.findIndex(e=>e.id===o),0);(0,H.useEffect)(()=>{if(!L?.restoreTabs)return;let e=setTimeout(()=>void Ne(Oa,Aa),700);return()=>clearTimeout(e)},[ka,Aa,L?.restoreTabs]),(0,H.useEffect)(()=>{let{tabs:e,activeId:t}=q.current,n=e.find(e=>e.id===t);n&&n.fresh&&Dv(n)===`files`&&Z(n.id,Ov(n),!0),xa(),wa(),Ea(),ie().then(O,()=>O(null))},[Z,xa,wa,Ea]),(0,H.useEffect)(()=>{if(k().then(re,()=>re(null)),E.available)return E.on(e=>{let t=e;t.type===`update.checked`&&t.data&&re(t.data)})},[]),(0,H.useEffect)(()=>{if(E.available)return E.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&d({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Me(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Me(n.data.error??e(`pairing_failed`))}})},[e]),(0,H.useEffect)(()=>{let e=setInterval(Ea,3e4);return()=>clearInterval(e)},[Ea]),(0,H.useEffect)(()=>{W===`home`&&(Ta(),Ea())},[W,U.id,Ta,Ea]),(0,H.useEffect)(()=>{if(!E.available)return;let e=E.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=q.current,i=t.data.startup===!0;i&&Sv.has(n)?Cv(n):i&&!kr.current?Mr.current.includes(n)||Mr.current.push(n):(i&&r.length===1&&r[0].fresh?ai(r[0].id,n):Au(n)?ai(kv(q.current),n):si(n),i&&Cv(n))});return E.send({type:`app.ready`}),e},[ai,si]),(0,H.useEffect)(()=>{if(E.available)return E.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;Rv(zr.current,n,i),r(e=>e.some(e=>e.listing?.path===n)?e.map(e=>e.listing?.path===n?{...e,listing:{...e.listing,folderSizes:{...e.listing.folderSizes,...i}}}:e):e)})},[]),(0,H.useEffect)(()=>{if(E.available)return E.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;Rv(Br.current,n,i),r(e=>e.some(e=>e.listing?.path===n)?e.map(e=>e.listing?.path===n?{...e,listing:{...e.listing,counts:{...e.listing.counts,...i}}}:e):e)})},[]),(0,H.useEffect)(()=>{let e=e=>{if(Lr(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Bi();return}if(e.key===`BrowserForward`){e.preventDefault(),Vi();return}if(e.key===`Escape`&&N.open){e.preventDefault(),pr();return}let t=Fr(e);if(J(R,`closeTab`,t)&&(e.preventDefault(),mi(kv(q.current))),J(R,`newTab`,t)&&(e.preventDefault(),si()),J(R,`reopenTab`,t)&&(e.preventDefault(),hi()),J(R,`goBack`,t)&&(e.preventDefault(),Bi()),J(R,`goForward`,t)&&(e.preventDefault(),Vi()),J(R,`goUp`,t)&&(e.preventDefault(),Hi()),J(R,`find`,t)&&(e.preventDefault(),W===`files`?mr():_r()),J(R,`location`,t)&&(e.preventDefault(),St(e=>e+1)),J(R,`home`,t)){e.preventDefault();let t=h.find(e=>e.kind===`home`)?.path;t&&vi(t)}J(R,`iconsView`,t)&&(e.preventDefault(),W===`files`&&ma({mode:`grid`})),J(R,`detailsView`,t)&&(e.preventDefault(),W===`files`&&ma({mode:`list`})),J(R,`nextTab`,t)&&(e.preventDefault(),yi(1)),J(R,`previousTab`,t)&&(e.preventDefault(),yi(-1)),J(R,`hidden`,t)&&(e.preventDefault(),ze().then(()=>{Tt(e=>e+1),Wi()})),J(R,`undo`,t)&&(e.preventDefault(),ua(!0)),J(R,`redo`,t)&&(e.preventDefault(),ua(!1)),J(R,`statusCenter`,t)&&(e.preventDefault(),pn(null),ln(e=>!e)),J(R,`historyPanel`,t)&&(e.preventDefault(),ln(!1),pn(e=>e===`history`?null:`history`)),J(R,`sharePanel`,t)&&(e.preventDefault(),ln(!1),pn(e=>e===`share`?null:`share`)),J(R,`closedTabsPanel`,t)&&(e.preventDefault(),ln(!1),pn(e=>e===`closedTabs`?null:`closedTabs`)),J(R,`viewMenu`,t)&&(e.preventDefault(),W===`files`&&(ln(!1),pn(e=>e===`view`?null:`view`))),J(R,`fileTray`,t)&&(e.preventDefault(),sa()),J(R,`detailsPanel`,t)&&(e.preventDefault(),(W===`files`||W===`recycle`||W===`gallery`)&&Dt(e=>!e)),J(R,`overview`,t)&&(e.preventDefault(),pn(null),ln(!1),di(`home`)),J(R,`recycleBin`,t)&&(e.preventDefault(),pn(null),ln(!1),di(`recycle`)),J(R,`gallery`,t)&&(e.preventDefault(),pn(null),ln(!1),di(`gallery`)),J(R,`settings`,t)&&(e.preventDefault(),pn(null),ln(!1),di(`settings`)),J(R,`sidebar`,t)&&(e.preventDefault(),fi()),J(R,`splitView`,t)?(e.preventDefault(),bi()):Object.keys(R).some(e=>e!==`openInNewTab`&&J(R,e,t))||W!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),Tr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[R,W,N.open,mi,hi,si,Bi,Vi,Hi,mr,_r,pr,Tr,ma,yi,vi,h,Wi,ua,bi,di,fi,sa]),(0,H.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Bi()):(e.button===4||e.button===9)&&(e.preventDefault(),Vi())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Bi,Vi]),(0,H.useEffect)(()=>{if(E.available)return E.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Bi();break;case`forward`:Vi()}})},[Bi,Vi]);let ja=(0,H.useMemo)(()=>{let e=new Set;for(let n of t){if(Dv(n)!==`files`)continue;let t=Ov(n);if(t&&!Os(t)){if(y(t)){let n=Pv(p(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),Ma=ja.join(`\0`);(0,H.useEffect)(()=>{E.available&&E.send({type:`fs.watch`,payload:{paths:ja,owner:`app`}})},[Ma,o]);let Na=Dv(Kn)===`files`?Ov(Kn):``;(0,H.useEffect)(()=>{E.available&&E.send({type:`fs.focus`,payload:{path:Na||null}})},[Na]),(0,H.useEffect)(()=>{if(E.available)return E.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let r=t.data.path,i=q.current.tabs.filter(e=>Dv(e)===`files`&&n(Ov(e),r)),a=q.current.tabs.filter(e=>{let t=Ov(e);return Dv(e)===`files`&&t.length>0&&y(t)&&n(p(t),r)});if(i.length!==0||a.length!==0){ut(r);for(let e of a){let t=q.current.tabs.find(t=>t.id===e.id),i=t?Ov(t):``;t&&Dv(t)===`files`&&!t.loading&&y(i)&&n(p(i),r)&&Z(e.id,i,!0)}i.length!==0&&ke(r,!1,Qn).then(e=>{let t=t=>Vr({...e,folderSizes:{...t?.folderSizes??{},...e.folderSizes},counts:{...t?.counts??{},...e.counts}});for(let r of i){let i=q.current.tabs.find(e=>e.id===r.id);i&&Dv(i)===`files`&&n(Ov(i),e.path)&&(i.loading?window.setTimeout(()=>{let i=q.current.tabs.find(e=>e.id===r.id);i&&!i.loading&&Dv(i)===`files`&&n(Ov(i),e.path)&&Y(r.id,()=>({listing:t(i.listing??void 0)}))},300):Y(r.id,()=>({listing:t(i.listing??void 0)})))}},()=>void 0)}})},[Qn,Z,Y,Vr]);let Pa=U.index>0,Fa=U.index<U.history.length-1,Ia=(e,t)=>{let r=jv(e,Jn),i=e.listing?.path??e.history[e.index]??``,a=y(i),o=a&&x(i);return(0,Q.jsx)($s,{platform:D?.platform,confirmDelete:L?.confirmDelete??ot().confirmDelete,cutPaths:Dn,previewVideoAudio:L?.previewVideoAudio??ot().previewVideoAudio,previewVideoAutoplay:L?.previewVideoAutoplay??ot().previewVideoAutoplay,showDetails:!1,onPreviewInfo:t?jt:Ft,onActivate:()=>z(t?`primary`:`secondary`),enableShortcuts:(!Hn||(t?Rt===`primary`:Rt===`secondary`))&&(!a||o),error:e.error,find:e.id===Kn.id?{...N,currentPath:fr<0?null:dr[fr]}:void 0,selectMatchesToken:e.id===Kn.id?De:0,imageStripHeight:or,listing:e.listing,loading:e.loading,onImageStripHeight:_a,readOnly:a&&!o||Os(e.listing?.path??``),onOpen:(t,n)=>{n?si(t):Z(e.id,t)},onOpenFile:(t,n)=>{Os(t)?Ns(t).catch(e=>void Me(Nv(e))):S(t)?L?.archiveHandler??ot().archiveHandler?n?si(t):Z(e.id,t):je(t):y(t)?(async()=>{let e=await we(t,$e.current,Iv(t));if(!e.path&&ve(e.error)){let n=p(t),r=_e(n);r&&Je(n);let i=await Qe(n,!!r);i&&(Se(n,i),e=await we(t,$e.current,i))}e.path?je(e.path):e.error&&Me(e.error)})():je(t)},onRefresh:()=>{let t=e.listing?.path;t&&ci(t)},onLoadMore:()=>void Jr(e.id),onEnsureComplete:()=>void $r(e.id),selectAllToken:e.id===Kn.id?Zr:0,onRename:li,onSelectionCountChange:t?Ii:Li,onSetTags:(t,n,r)=>va(e.id,t,n,r),selectionMenuRequest:t?B.primary:B.secondary,onSort:t=>ya(e.id,t),onPaste:aa,onClipboardChanged:()=>void $i(),onTransfer:ca,onAddToTray:e=>void Ki(e),onAddFavorite:e=>void Ji(e),onRemoveFavorite:e=>void Yi(e),favoritePaths:ft,onExtractArchive:(e,t)=>void Ga(e,t),onOpenAsArchive:e=>void Wa(e),onAddToStartMenu:(e,t,n)=>void Ua(e,t,n),openOnSingleClick:L?.openOnSingleClick??ot().openOnSingleClick,pendingRename:en&&t===(Rt===`primary`)&&n(en.directory,e.listing?.path??``)?en.path:null,pendingRenameToken:en?.token??0,refreshToken:wt,shortcuts:R,showCheckboxes:L?.showCheckboxes??ot().showCheckboxes,showImages:ar,view:r})},La=N.open&&(0,Q.jsx)($p,{current:fr,focusToken:Ce,matchCase:N.matchCase,mode:N.mode,onClose:pr,onMatchCase:()=>pe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>pe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Er(1),onPrevious:()=>Er(-1),onQuery:e=>pe(t=>({...t,query:e})),onRegex:()=>pe(e=>({...e,regex:!e.regex})),query:N.query,regex:N.regex,total:dr.length,onSelectMatches:dr.length>0?()=>F(e=>e+1):void 0}),Ra=W===`files`&&y(Bn),za=Ra&&x(Bn),Va=Ra&&U.listing?.archiveEncrypted===!0,Ha=async(t,n,r=!1)=>{let i=p(t),a=await P(i,n,$e.current,Iv(i),r);if(!a.ok&&ve(a.error)){let e=_e(i);e&&Je(i);let t=await Qe(i,!!e);t&&(Se(i,t),a=await P(i,n,$e.current,t,r))}a.ok?(ci(n),le(),Z(U.id,n,!0)):Me(`${e(`could_not_extract_the_archive`)}${a.error?`\n${a.error}`:``}`)},Ua=async(t,n,r)=>{let i=await Xn(t,n,r);i.ok?r&&!i.pinned&&Me(i.error??e(`the_shortcut_was_added_but_windows_did_not_pin_it`)):Me(i.error??e(`could_not_add_the_shortcut`))},Wa=async t=>{await pt(t)?(a(t),Z(U.id,t)):Me(e(`this_file_could_not_be_opened_as_an_archive`))},Ga=async(e,t)=>{let r=p(e),i=Pv(r);if(!i)return;let a=t.endsWith(`-delete`),o=a?t.slice(0,-7):t;if(o===`choose`){let e=await ei(i);e&&await Ha(r,e);return}let s=o===`named`;if(o===`auto`){let e=n(r,Bn)?U.listing?.entries??[]:(await ke(r,!1,!1,$e.current,Iv(r))).entries;s=!(e.length===1&&e[0].isDirectory)}let c=i.includes(`\\`)?`\\`:`/`,l=s?`${i.replace(/[\\/]+$/,``)}${c}${Fv(r)}`:i;await Ha(r,l,a)},Ka=async e=>{Ra&&await Ga(Bn,e)},qa=async()=>{Ra&&await Ga(Bn,`choose`)},Ja=(0,Q.jsxs)(Wv,{children:[(0,Q.jsx)(Gv,{"data-shortcut":X(R.goBack),disabled:!Pa,onClick:e=>{U.index>0&&Pr(e)?si(U.history[U.index-1]):Bi()},onContextMenu:e=>{U.index<=0||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:U,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Q.jsx)(fn,{})}),(0,Q.jsx)(Gv,{"data-shortcut":X(R.goForward),disabled:!Fa,onClick:e=>{U.index<U.history.length-1&&Pr(e)?si(U.history[U.index+1]):Vi()},onContextMenu:e=>{U.index>=U.history.length-1||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:U,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Q.jsx)(Zt,{})}),(0,Q.jsx)(Gv,{"data-shortcut":X(R.goUp),disabled:W!==`files`||!Vn,onClick:e=>{Vn&&(Pr(e)?si(Vn):vi(Vn))},title:e(`up_one_level`),type:`button`,children:(0,Q.jsx)(zt,{})}),(0,Q.jsx)(om,{focusToken:bt,icon:cr,label:W===`files`?void 0:e(Tu[W]),onContextMenu:W===`files`?(e,t,n)=>qt({x:t,y:n,path:e}):void 0,onNavigate:vi,path:W===`files`?Bn:Rn}),W===`files`&&(!Ra||za)&&(0,Q.jsx)(Gv,{onClick:e=>Pi(e,Bn,()=>void Z(U.id,Bn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Q.jsx)(cn,{})}),(0,Q.jsx)(Gv,{"data-shortcut":X(R.find),onClick:()=>W===`files`?mr():_r(),title:e(`search`),type:`button`,children:(0,Q.jsx)(tn,{})}),Xt.primary>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(uv,{}),(0,Q.jsx)(Gv,{onClick:e=>Ri(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,Q.jsx)(xt,{})})]}),(0,Q.jsx)(`span`,{ref:gn,style:{display:`contents`}}),Ra&&(0,Q.jsxs)(Kv,{children:[(0,Q.jsx)(uv,{}),Va&&(0,Q.jsxs)(qv,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Q.jsx)(dn,{size:12}),e(`encrypted`)]}),(0,Q.jsx)(Gv,{onClick:()=>void qa(),onContextMenu:e=>{e.preventDefault(),Ut({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,Q.jsx)(an,{})}),(0,Q.jsx)(_i,{icon:(0,Q.jsx)(Ct,{size:15}),onChange:e=>{let t=Number(e);I(t),$e.current=t,Ra&&Z(U.id,Bn,!0)},options:Tv.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(Tv.find(e=>e.value===String(Ze))?.label??`auto`)}`,value:String(Ze)})]})]}),Ya=Le.open?{...Le,index:Ue}:null,Xa=t=>{let n=Au(t);return n?e(Tu[n]):Kr(ir,t,Nu(t)||e(`files`))};return(0,Q.jsx)(Wr,{value:ir,children:(0,Q.jsxs)(Bv,{$rounded:oe,children:[(0,Q.jsx)(cd,{settings:L,theme:lt}),(0,Q.jsx)(w_,{activeId:U.id,closedTabs:bn,onClose:mi,onNewTab:()=>si(),onRestoreClosed:gi,onReorder:ba,onTransferToTab:ca,onSelect:c,onViewChange:ma,onColumns:ha,onShowImages:ga,showImages:ar,tasks:rn,onClearTasks:la,activityOpen:sn,onActivityOpenChange:ln,panel:un,onPanelChange:pn,trayCount:An.length+Sn.length,trayVisible:On,onToggleTray:sa,split:Hn,canSplit:W===`files`,onToggleSplit:bi,details:Et,canDetails:W===`files`||W===`recycle`||W===`gallery`,onToggleDetails:()=>Dt(e=>!e),currentFolder:W===`files`&&!Os(Bn)?Bn:``,shortcuts:R,view:Zn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=Dv(n),i=Ov(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?Ov(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Gr(ir,i):void 0,archive:r===`files`&&y(i),split:!!a,title:r===`files`?Kr(ir,i,v(i)||e(`files`)):e(Tu[r]),partner:a?{title:Kr(ir,o,v(o)||e(`files`)),place:Gr(ir,o)}:void 0}})}),(0,Q.jsxs)(Vv,{children:[(0,Q.jsx)(Sm,{activeKind:W,asideRef:mn,currentPath:W===`files`?Rn:``,drives:w,historyVersion:mt,onNavigate:vi,onOpenView:di,homePath:h.find(e=>e.kind===`home`)?.path??``,places:h,recent:et,recentLimit:rt,version:_t}),(0,Q.jsxs)(Hv,{children:[(0,Q.jsxs)($v,{children:[(0,Q.jsxs)(ey,{children:[W!==`files`&&Ja,(0,Q.jsx)(Uv,{children:(0,Q.jsxs)(H.Suspense,{fallback:null,children:[W!==`files`&&Le.open&&(0,Q.jsx)($p,{current:Ue,focusToken:Be,matchCase:Le.matchCase,mode:Le.mode,onClose:vr,onMatchCase:()=>Re(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Re(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>yr(1),onPrevious:()=>yr(-1),onQuery:e=>Re(t=>({...t,query:e})),onRegex:()=>Re(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:Le.query,regex:Le.regex,total:Ke,onSelectMatches:W===`gallery`||W===`recycle`?()=>F(e=>e+1):void 0}),W===`files`?Hn&&G?(0,Q.jsxs)(Yv,{ref:Mi,children:[(0,Q.jsxs)(Xv,{style:{flex:f},children:[(0,Q.jsxs)(Jv,{$active:Rt===`primary`,onPointerDown:()=>z(`primary`),children:[(0,Q.jsx)(Gv,{"data-shortcut":X(R.goBack),disabled:!Pa,onClick:e=>{let t=U.index-1;t<0||(Pr(e)?si(U.history[t]):oi(U.id,U.history[t],t))},onContextMenu:e=>{U.index<=0||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:U,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Q.jsx)(fn,{})}),(0,Q.jsx)(Gv,{"data-shortcut":X(R.goForward),disabled:!Fa,onClick:e=>{let t=U.index+1;t>=U.history.length||(Pr(e)?si(U.history[t]):oi(U.id,U.history[t],t))},onContextMenu:e=>{U.index>=U.history.length-1||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:U,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Q.jsx)(Zt,{})}),(0,Q.jsx)(Gv,{"data-shortcut":X(R.goUp),disabled:!Vn,onClick:e=>{Vn&&(Pr(e)?si(Vn):Z(U.id,Vn))},title:e(`up_one_level`),type:`button`,children:(0,Q.jsx)(zt,{})}),(0,Q.jsx)(om,{focusToken:Rt===`primary`?bt:void 0,onContextMenu:(e,t,n)=>qt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?si(e):void Z(U.id,e),path:Bn}),(0,Q.jsx)(Gv,{onClick:e=>Pi(e,Bn,()=>void Z(U.id,Bn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Q.jsx)(cn,{})}),(0,Q.jsx)(Gv,{"data-shortcut":X(R.find),onClick:mr,title:e(`search`),type:`button`,children:(0,Q.jsx)(tn,{})}),Xt.primary>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(uv,{}),(0,Q.jsx)(Gv,{onClick:e=>Ri(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,Q.jsx)(xt,{})})]})]}),Ia(U,!0),Rt===`primary`&&La]}),(0,Q.jsx)(Zv,{onDoubleClick:()=>m(.5),onPointerDown:Ni,title:e(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(Xv,{$enter:!0,style:{flex:1-f},children:[(0,Q.jsxs)(Jv,{$active:Rt===`secondary`,onPointerDown:()=>z(`secondary`),children:[(0,Q.jsx)(Gv,{"data-shortcut":X(R.goBack),disabled:G.index<=0,onClick:e=>{let t=G.index-1;t<0||(Pr(e)?si(G.history[t]):oi(G.id,G.history[t],t))},onContextMenu:e=>{G.index<=0||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:G,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Q.jsx)(fn,{})}),(0,Q.jsx)(Gv,{"data-shortcut":X(R.goForward),disabled:G.index>=G.history.length-1,onClick:e=>{let t=G.index+1;t>=G.history.length||(Pr(e)?si(G.history[t]):oi(G.id,G.history[t],t))},onContextMenu:e=>{G.index>=G.history.length-1||(e.preventDefault(),Gt({x:e.clientX,y:e.clientY,tab:G,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Q.jsx)(Zt,{})}),(0,Q.jsx)(Gv,{"data-shortcut":X(R.goUp),disabled:!Wn,onClick:e=>{Wn&&(Pr(e)?si(Wn):Z(G.id,Wn))},title:e(`up_one_level`),type:`button`,children:(0,Q.jsx)(zt,{})}),(0,Q.jsx)(om,{focusToken:Rt===`secondary`?bt:void 0,onContextMenu:(e,t,n)=>qt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?si(e):void Z(G.id,e),path:Un}),(0,Q.jsx)(Gv,{onClick:e=>Pi(e,Un,()=>void Z(G.id,Un,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Q.jsx)(cn,{})}),(0,Q.jsx)(Gv,{"data-shortcut":X(R.find),onClick:mr,title:e(`search`),type:`button`,children:(0,Q.jsx)(tn,{})}),Xt.secondary>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(uv,{}),(0,Q.jsx)(Gv,{onClick:e=>Ri(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,Q.jsx)(xt,{})})]})]}),Ia(G,!1),Rt===`secondary`&&La]})]}):(0,Q.jsxs)(Q.Fragment,{children:[Ja,(0,Q.jsxs)(Qv,{children:[Ia(U,!0),La]})]}):W===`home`?(0,Q.jsx)(_v,{platform:D?.platform,drives:w,find:Ya,historyVersion:mt,onSearchMatches:Xe,homePath:h.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:Ea,onHistoryChanged:()=>ht(e=>e+1),onAddToTray:e=>void Ki(e),onAddFavorite:e=>void Ji(e),onRemoveFavorite:e=>void Yi(e),favoritePaths:ft,onExtractArchive:(e,t)=>void Ga(e,t),onOpenAsArchive:e=>void Wa(e),onAddToStartMenu:(e,t,n)=>void Ua(e,t,n),settingsVersion:_t,theme:lt,onOpen:vi,onLayoutChanged:wa,onPlacesChanged:C,onRecentCleared:Ta,places:h,recent:et,recentLimit:rt,visibilityVersion:wt}):W===`settings`?(0,Q.jsx)(vv,{appInfo:D,find:Ya,focusSection:j,onSearchMatches:Xe,onSettingsChanged:wa}):W===`gallery`?(0,Q.jsx)(yv,{platform:D?.platform,toolbarSlot:hn,onStatusChange:vn,confirmDelete:L?.confirmDelete??ot().confirmDelete,find:Ya,onSearchMatches:Xe,openOnSingleClick:L?.openOnSingleClick??ot().openOnSingleClick,onAddToTray:e=>void Ki(e),onAddFavorite:e=>void Ji(e),onRemoveFavorite:e=>void Yi(e),favoritePaths:ft,onExtractArchive:(e,t)=>void Ga(e,t),onOpenAsArchive:e=>void Wa(e),onAddToStartMenu:(e,t,n)=>void Ua(e,t,n),shortcuts:R,showCheckboxes:L?.showCheckboxes??ot().showCheckboxes,selectMatchesToken:De,onPreviewChange:Ci,view:Zn}):(0,Q.jsx)(bv,{find:Ya,toolbarSlot:hn,onStatusChange:vn,onOpenLocation:vi,onShowDetails:()=>Dt(!0),platform:D?.platform,selectMatchesToken:De,onPreviewChange:wi})]})},W)]}),(W===`files`||W===`gallery`||W===`recycle`)&&(0,Q.jsx)(da,{emptyNote:e(`nothing_selected`),info:Di,onWidth:xi,open:Et,selectionNote:Oi,videoAudio:L?.previewVideoAudio??ot().previewVideoAudio,videoAutoplay:L?.previewVideoAutoplay??ot().previewVideoAutoplay,width:Ot})]}),(0,Q.jsxs)(ay,{children:[(0,Q.jsx)(`span`,{children:ki}),D?(0,Q.jsxs)(ty,{children:[ji&&(0,Q.jsx)(zl,{git:ji}),(0,Q.jsxs)(`span`,{children:[`v`,D.version,` · `,D.platform]}),D.debug&&(0,Q.jsx)(iy,{children:`debug`}),A?.available&&(0,Q.jsxs)(ny,{onClick:e=>{M(`updates`),di(`settings`,Pr(e))},title:e(`version_version_is_available`,{version:A.latest}),type:`button`,children:[(0,Q.jsx)(ry,{}),e(`update_available`)]})]}):(0,Q.jsxs)(ty,{children:[ji&&(0,Q.jsx)(zl,{git:ji}),(0,Q.jsx)(`span`,{children:e(`browser_preview`)})]})]})]})]}),(0,Q.jsx)(Qo,{clipboardItems:Sn,clipboardMove:wn,currentDirectory:W===`files`?Rn:``,items:An,onAdd:e=>void Ki(e),onClear:Xi,onClose:()=>kn(!1),onCopyToClipboard:e=>void ea(e),onPosition:oa,onRemove:qi,onTransfer:ca,position:Fn,visible:On}),Bt&&(0,Q.jsx)(pi,{creationOnly:!0,directory:Bt.directory,menu:{x:Bt.x,y:Bt.y,paths:[],background:!0},onClose:()=>Vt(null),onCreateFile:e=>void zi(e),onCreateFolder:e=>void zi(null,e),shortcuts:R}),Kt&&(0,Q.jsx)(pi,{allowCompression:!0,directory:Pv(Kt.path)??Kt.path,menu:{x:Kt.x,y:Kt.y,paths:[Kt.path]},onAddToTray:e=>void Ki(e),onAddFavorite:e=>void Ji(e),onRemoveFavorite:e=>void Yi(e),favoritePaths:ft,onExtractArchive:(e,t)=>void Ga(e,t),onOpenAsArchive:e=>void Wa(e),onAddToStartMenu:(e,t,n)=>void Ua(e,t,n),onArchiveCreated:e=>{e&&ci(Pv(Kt.path)??Kt.path)},onClose:()=>qt(null),onCompressTo:(e,t)=>Yt({paths:e,name:t}),onCopy:(e,t)=>void qn(e,t),onDelete:e=>void tr(e,!1).then(()=>ci(Pv(Kt.path)??Kt.path)),onOpen:(e,t)=>t?si(e):void Z(U.id,e),onOpenFile:e=>void je(e),onPaste:e=>void er(e).then(t=>{t.ok&&ci(e)}),onRefresh:()=>ci(Kt.path),shortcuts:R,target:{path:Kt.path,isDirectory:!0}}),Jt&&(0,Q.jsx)(Ai,{initialDirectory:Pv(Kt?.path??Bn)??Bn,initialName:Jt.name,onCancel:()=>Yt(null),onCompress:async e=>{let t=await br(Jt.paths,e);return!t.ok&&t.error&&Me(t.error),t.ok}}),Wt&&(0,Q.jsx)(Pe,{items:[{label:Xa(Wt.tab.history[Wt.tab.index]??``),icon:(0,Q.jsx)(Mu,{location:Wt.tab.history[Wt.tab.index]??``}),tooltip:Wt.tab.history[Wt.tab.index]??``,disabled:!0,onSelect:()=>void 0},...Wt.tab.history.map((e,t)=>({path:e,index:t})).filter(({index:e})=>Wt.direction===`back`?e<Wt.tab.index:e>Wt.tab.index).sort((e,t)=>Wt.direction===`back`?t.index-e.index:e.index-t.index).slice(0,24).map(({path:e,index:t})=>({label:Xa(e),icon:(0,Q.jsx)(Mu,{location:e}),tooltip:e,onSelect:()=>{let n=Wt.tab;Gt(null),oi(n.id,e,t)}}))],onClose:()=>Gt(null),x:Wt.x,y:Wt.y}),Ht&&(0,Q.jsx)(Pe,{items:[{label:e(`extract_here`),onSelect:()=>void Ka(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Ka(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Ka(`auto`)},{label:e(`extract_here_and_delete`),separatorBefore:!0,onSelect:()=>void Ka(`here-delete`)},{label:e(`extract_to_a_folder_and_delete_archive`),onSelect:()=>void Ka(`named-delete`)},{label:e(`auto_extract_and_delete_archive`),onSelect:()=>void Ka(`auto-delete`)}],onClose:()=>Ut(null),x:Ht.x,y:Ht.y}),Mn&&(0,Q.jsx)(pd,{action:Mn.prompt.action,delaySeconds:Mn.prompt.delaySeconds,hits:Mn.prompt.hits,onCancel:()=>{Mn.resolve(!1),Nn(null)},onConfirm:()=>{Mn.resolve(!0),Nn(null)},permanent:Mn.prompt.permanent},Mn.id),(0,Q.jsx)(jd,{}),(0,Q.jsx)(Up,{}),(0,Q.jsx)(Hp,{}),se&&(0,Q.jsx)(Hd,{request:se}),de&&(0,Q.jsx)(mp,{conflicts:de.conflicts,move:de.move,defaultAction:L?.conflictDefaultAction??ot().conflictDefaultAction,remember:L?.conflictRememberChoice??ot().conflictRememberChoice,onResolve:e=>{de.resolve(e),fe(null)}}),u&&(0,Q.jsx)($_,{code:u.code,deviceName:u.deviceName,onAccept:()=>{Ts(u.requestId,!0),d(null)},onReject:()=>{Ts(u.requestId,!1),d(null)}}),(0,Q.jsx)(W_,{}),(0,Q.jsx)(te,{})]})})}var Bv=A.div`
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
`,Vv=A.div`
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
`,Hv=A.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,Uv=A.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Re}
`,Wv=A.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Gv=lv,Kv=A.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,qv=A.span`
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
`,Jv=A.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,Yv=A.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Xv=A.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?et:``}
`,Zv=A.div`
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
        ${He}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,Qv=A.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,$v=A.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ey=A.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,ty=A.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,ny=A.button`
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
`,ry=A.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,iy=A.span`
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
`,ay=A.footer`
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
`;document.documentElement.dataset.theme=re()?`dark`:`light`;var oy=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,oy),window.addEventListener(`pagehide`,st);var sy=document.getElementById(`root`),cy=new URLSearchParams(window.location.search),ly=cy.get(`picker`),uy=cy.get(`filter`)??``,dy=ly===`folder`||ly===`file`||ly===`save`?(0,H.lazy)(()=>gv(()=>import(`./PickerWindow-CdLDGbmP.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([10,1,2,3,4,5,8,0,6]))):null;sy&&$e().then(e=>{Er(e.shortcuts),l(e.timeFormat,e.timeFormatPattern)}).catch(()=>void 0).then(()=>{ft(),(0,Dn.createRoot)(sy).render((0,Q.jsx)(H.StrictMode,{children:(0,Q.jsx)(O,{children:dy===null?(0,Q.jsx)(zv,{}):(0,Q.jsx)(H.Suspense,{fallback:null,children:(0,Q.jsx)(dy,{defaultExtension:cy.get(`ext`)??``,extensions:uy?uy.split(`;`).filter(Boolean):[],types:cy.get(`types`)??``,typeIndex:Number(cy.get(`type`)??0)||0,initial:cy.get(`initial`)??``,initialName:cy.get(`name`)??``,lastExtension:cy.get(`last`)??``,mode:ly===`folder`?`folder`:`file`,multiple:cy.get(`multiple`)===`1`,save:ly===`save`})})})}))});export{Gr as $,Fs as A,Uo as B,Mu as C,Ls as D,Ws as E,Is as F,Fa as G,uo as H,zs as I,_i as J,Ha as K,Hs as L,ws as M,Cs as N,Ps as O,Bs as P,Xr as Q,Es as R,Vu as S,$s as T,to as U,jo as V,Ua as W,ti as X,pi as Y,ei as Z,Wu as _,Nn as _t,Q_ as a,q as at,Ju as b,Sm as c,Pr as ct,Hp as d,sr as dt,Z as et,mp as f,rr as ft,sd as g,Fn as gt,pd as h,Mn as ht,Y_ as i,Ar as it,Rs as j,Vs as k,om as l,qn as lt,jd as m,kn as mt,lv as n,Dr as nt,s_ as o,Or as ot,Rd as p,jn as pt,Ba as q,uv as r,Y as rt,a_ as s,kr as st,gv as t,Fr as tt,$p as u,$n as ut,Uu as v,In as vt,Pu as w,Yu as x,Gu as y,An as yt,As as z};