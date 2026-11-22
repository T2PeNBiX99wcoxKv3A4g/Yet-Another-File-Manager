const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-DXWo3yjx.js","assets/dist-B10j17-y.js","assets/selectionMenu-CYZeyRnK.js","assets/theme-CJqhrlwN.js","assets/theme-DxEaxth6.css","assets/Icons-C2oT0N0q.js","assets/textSearch-COlYUG7X.js","assets/SettingsView-DDwKeEQD.js","assets/GalleryView-BdV7Q0XO.js","assets/RecycleView-BvVTSQFK.js","assets/PickerWindow-og5vWDhQ.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,E as n,O as r,S as i,T as a,_ as o,a as s,b as c,c as l,f as u,h as d,l as f,m as p,p as m,r as h,s as g,u as _,v,w as y,x as b,y as x}from"./theme-CJqhrlwN.js";import{M as S,O as C,S as w,_ as ee,g as T,h as te,i as E,k as ne,m as D,p as O,r as re,u as k,v as A,w as j,x as M,y as ie}from"./dist-B10j17-y.js";import{$ as ae,A as oe,At as se,B as N,C as ce,Ct as le,D as ue,Dt as de,E as fe,Et as P,Ft as pe,H as me,J as he,K as ge,L as _e,Mt as ve,Nt as ye,O as be,Ot as xe,P as Se,Pt as Ce,R as we,S as Te,St as Ee,T as De,Tt as F,U as Oe,V as ke,X as Ae,Z as je,_ as Me,_t as Ne,a as Pe,b as Fe,c as Ie,ct as Le,d as Re,et as ze,f as Be,g as Ve,gt as He,h as Ue,i as We,it as Ge,jt as Ke,k as qe,kt as Je,l as Ye,lt as Xe,m as Ze,mt as I,o as L,p as Qe,pt as $e,q as et,rt as tt,s as nt,st as rt,t as it,u as at,v as ot,w as R,wt as z,x as st,y as ct,yt as lt}from"./selectionMenu-CYZeyRnK.js";import{$ as ut,A as dt,B,C as ft,E as pt,F as mt,G as ht,H as gt,I as _t,J as vt,K as yt,L as bt,M as xt,N as St,O as Ct,P as wt,Q as Tt,R as Et,S as Dt,T as Ot,W as kt,X as At,Y as jt,_ as Mt,_t as Nt,a as Pt,at as Ft,b as It,bt as V,c as Lt,ct as Rt,d as zt,dt as Bt,et as Vt,f as Ht,ft as Ut,g as Wt,gt as Gt,h as Kt,i as qt,it as Jt,j as Yt,k as Xt,l as Zt,lt as Qt,m as $t,mt as en,n as tn,nt as nn,o as rn,ot as an,p as on,pt as sn,q as cn,r as ln,rt as un,s as dn,st as fn,t as pn,tt as mn,u as hn,ut as gn,v as _n,vt as vn,w as yn,x as bn,xt as xn,y as Sn,z as Cn}from"./Icons-C2oT0N0q.js";var H=S(ne(),1),wn=t(),Tn={managed:0,private:0,workingSet:0,available:0};async function En(){return j.available?await j.request(`app.memory`):Tn}async function Dn(){return j.available?await j.request(`app.memory.trim`):Tn}var On={registered:!1,pathMatches:!1,registeredPath:null};async function kn(){return j.available?await j.request(`app.scheme`):On}async function An(e){return j.available?await j.request(`app.scheme.set`,{enabled:e}):On}var jn={supported:!1,mode:`none`,active:!1,error:null};async function Mn(){return j.available?await j.request(`app.startup`):jn}async function U(e){return j.available?await j.request(`app.startup.set`,{mode:e}):jn}var W=null,Nn=new Set;function Pn(e){W=e,Nn.forEach(e=>e(W))}function Fn(){W=null,Nn.forEach(e=>e(null))}function In(){let[e,t]=(0,H.useState)(W);return(0,H.useEffect)(()=>(Nn.add(t),()=>{Nn.delete(t)}),[]),e}async function G(e){return j.available?(await j.request(`fs.operation.properties.info`,{paths:[e]}))?.[0]??null:null}async function Ln(e){return j.available?await j.request(`fs.operation.properties.hash`,{path:e}):null}async function Rn(e){return j.available?await j.request(`fs.operation.properties.edit`,e):{ok:!1,error:null}}async function zn(e){return j.available?await j.request(`fs.operation.properties.details`,{path:e}):null}async function K(e){return j.available?(await j.request(`fs.operation.properties.details.set`,e))?.ok!==!1:!1}var Bn=null;function Vn(e){Bn=e}function Hn(e,t){return e.length===0||!Bn?Promise.resolve([]):new Promise(n=>Bn?.({conflicts:e,move:t,resolve:n}))}async function Un(e,t=!1){return!j.available||e.length===0?!1:(await j.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Wn(){return j.available?(await j.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function Gn(){return j.available?await j.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function Kn(e,t,n,r){if(!j.available||e.length===0)return{ok:!1,error:`nothing_to_transfer`,created:[]};if(!r){let i=await qn(e,t,n);if(i.length>0){let e=await Hn(i,n);if(e===null)return{ok:!1,error:null,created:[],cancelled:!0};r=e}}return await Jn({action:n?`move`:`write`},i=>j.request(`fs.operation.transfer`,{paths:e,target:t,move:n,decisions:r??null,confirm:i}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function qn(e,t,n){return!j.available||e.length===0?[]:(await j.request(`fs.operation.transfer.conflicts`,{paths:e,target:t,move:n})).conflicts??[]}async function Jn(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await Ce({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function Yn(e){return!j.available||e.length===0?[]:(await j.request(`fs.paths.info`,{paths:e})).entries}async function Xn(e,t=!1,n){if(!j.available)return{ok:!1,created:[]};if(!n){let t=await Gn(),r=t.entries.filter(e=>e.exists).map(e=>e.path);if(r.length>0){let i=await qn(r,e,t.move);if(i.length>0){let e=await Hn(i,t.move);if(e===null)return{ok:!1,created:[],cancelled:!0};n=e}}}return await Jn({action:t?`move`:`write`},t=>j.request(`fs.clipboard.paste`,{directory:e,decisions:n??null,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0}))}async function Zn(e,t=!1,n=!1){if(!j.available||e.length===0)return{ok:!1,error:null};let r=await j.request(`fs.operation.delete`,{paths:e,permanent:t,runningConfirmed:n}),i=!1;for(let a=0;a<2&&r.required&&r.token&&r.protected?.length;a++){if(!await Ce({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:t})){i=!0;break}r=await j.request(`fs.operation.delete`,{paths:e,permanent:t,runningConfirmed:n,confirm:r.token})}return i?{...r,ok:!1,cancelled:!0}:r}async function Qn(e,t){return j.available?await Jn({action:`rename`},n=>j.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function $n(e,t=!1){return j.available?await j.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function er(e){if(!j.available)return null;let t=await j.request(`fs.caseSensitive.get`,{path:e});return t.ok?t.enabled:null}async function tr(e,t){return j.available?await j.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function nr(e,t,n){return j.available?await j.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function rr(e,t){return j.available?await j.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function ir(e){if(!j.available||e.length===0)return;let t=await j.request(`fs.operation.properties`,{paths:e});!t.system&&t.items?.length&&Pn({items:t.items,canUseSystemSheet:!!t.canUseSystemSheet})}async function ar(e){j.available&&e.length!==0&&await j.request(`fs.operation.systemProperties`,{paths:e})}async function or(e){return!j.available||e.length===0?{ok:!1,error:null}:await j.request(`fs.share`,{paths:e})}async function sr(e){j.available&&await j.request(`fs.operation.openWith`,{path:e})}async function cr(e){j.available&&await j.request(`fs.operation.terminal`,{path:e})}async function lr(e){return j.available?await j.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function ur(e,t){return j.available?(await j.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function dr(){return j.available?await j.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function fr(){return j.available?await j.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function pr(e){j.available&&await j.request(`fs.operation.showInExplorer`,{path:e})}async function mr(e){return!j.available||e.length===0?{verbs:[],safe:!0}:await j.request(`shell.verbs`,{paths:e})}async function hr(e,t,n,r){j.available&&e.length!==0&&await j.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function gr(e,t){return!j.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await j.request(`fs.operation.compress`,{...t,paths:e})}async function _r(){return j.available?(await j.request(`app.tasks`)).tasks:[]}async function vr(){j.available&&await j.request(`app.tasks.clear`)}async function yr(e,t){return j.available?(await j.request(`app.tasks.start`,{kind:e,label:t})).id??null:null}async function br(e,t=null){j.available&&e&&await j.request(`app.tasks.finish`,{id:e,failed:t!==null,error:t})}var q={};function xr(e){let t={};for(let[n,r]of Object.entries(e??{}))t[n]=Cr(r);q=t,Dr=Er(q,`openInNewTab`)}function Sr(){return{...q}}function Cr(e){return(e??``).split(`|`).map(e=>e.trim()).filter(Boolean)}function wr(e){return e.join(`|`)}function J(e){let t={};for(let[n,r]of Object.entries(e))t[n]=wr(r);return t}function Tr(e){let t={...q};for(let[n,r]of Object.entries(e??{}))n in t&&(t[n]=Cr(r));return t}function Y(e,t,n){return e[t]?.includes(n)??!1}function Er(e,t){return e[t]?.[0]??``}var Dr=``;function Or(e){Dr=e.trim()}function kr(e){let t=Dr.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Ar(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function jr(e){return e.split(`+`).filter(Boolean).map(e=>Nr[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}function Mr(e){return(e??[]).filter(Boolean).map(jr).join(` / `)}var Nr={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Pr(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Fr=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],X={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`,`.tga`,`.dds`,`.hdr`,`.exr`,`.pcx`,`.dib`,`.jxl`,`.jpe`,`.jfif`,`.apng`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Ir(e){let t=Rr(e);for(let{kind:e}of Fr)if(X[e].has(t))return e;return null}function Lr(e){return Ir(e)!==null}function Rr(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var zr=(0,H.createContext)({places:{},useIcons:!1}),Br=zr.Provider;function Vr(){return(0,H.useContext)(zr)}function Hr(e,t){return e.places[i(t)]}function Ur(e,t,n){return Hr(e,t)?.name||n}var Z=w(),Wr={file:Yt,folder:xt,text:Nt,code:Wt,image:gt,video:V,audio:rn,archive:tn,pdf:Vt,executable:Ct,font:St,database:bn,config:Mt,spreadsheet:Ut,presentation:an,document:ft},Gr={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Kr(e){let t=e.lastIndexOf(`.`);return t>0?Gr[e.slice(t).toLowerCase()]??`file`:`file`}function qr({name:e,size:t}){let n=Wr[e??`file`]??Yt;return(0,Z.jsx)(n,{size:t})}var Jr={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Yr(e,t,n,r){let i=e.toLowerCase();if(i.endsWith(`.lnk`))return r(`shortcut`);if(i.endsWith(`.url`)||i.endsWith(`.website`))return r(`internet_shortcut`);if(n!=null)return r(t?`folder_link`:`symbolic_link`);if(t)return r(`folder`);let a=e.lastIndexOf(`.`),o=a>0&&a<e.length-1?e.slice(a+1).toUpperCase():``,s=r(Jr[Kr(e)]??`file`);return o.length>0?`${o} ${s}`:r(`file`)}async function Xr(e,t,n){return j.available?(await j.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function Zr(e){return Xr(`folder`,[],e??``)}function Qr(e){return Xr(`file`,e??[],``)}var Q=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],$r=null,ei=0,ti=new Set;function ni(){ei+=1;for(let e of ti)e()}function ri(e){return ti.add(e),()=>ti.delete(e)}function ii(){return ei}function ai(e){$r=e,ni()}function oi(){return(0,H.useSyncExternalStore)(ri,ii,ii),$r}function si({menu:e,directory:t,target:n,shortcuts:r,canPaste:a=!1,onClose:o,onOpen:s,onOpenFile:c,onSelectEntry:l,onOpenExternally:u,onRename:d,onDelete:f,onCopy:p,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:y=!1,onRefresh:b,onAddToTray:S,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ee,onExtractArchive:T,allowCompression:te=!1,platform:E,onCompressTo:ne,onArchiveCreated:D}){let O=M(),re=oi(),k=v(t),A=E===`windows`,[j,ie]=(0,H.useState)({verbs:[],safe:!0,loading:!1}),[ae,oe]=(0,H.useState)({recommended:[],other:[],loading:!1}),[se,N]=(0,H.useState)(null),ce=(0,H.useRef)(0),le=(0,H.useRef)(0),ue=e?.paths.length===1,de=e?.background?t?[t]:[]:e?.paths??[],fe=e?.background?t||null:ue&&n?.isDirectory?n.path:null;if((0,H.useEffect)(()=>{if(!e){ie({verbs:[],safe:!0,loading:!1}),oe({recommended:[],other:[],loading:!1});return}let t=++ce.current;ie({verbs:[],safe:!0,loading:A&&de.length>0&&!k}),A&&de.length>0&&!k&&mr(de).then(e=>{ce.current===t&&ie({...e,loading:!1})},()=>{ce.current===t&&ie({verbs:[],safe:!0,loading:!1})});let r=++le.current;!k&&ue&&n&&A?(oe({recommended:[],other:[],loading:!0}),lr(n.path).then(e=>{le.current===r&&oe({...e,loading:!1})},()=>{le.current===r&&oe({recommended:[],other:[],loading:!1})})):oe({recommended:[],other:[],loading:!1})},[e,ue,n?.path,n?.isDirectory,de.length,k]),(0,H.useEffect)(()=>{if(!e||k||!fe){N(null);return}let t=!0;return er(fe).then(e=>{t&&N(e)},()=>{t&&N(null)}),()=>{t=!1}},[e,fe,k]),!e)return null;let P=[],pe=[],me=new Set((ee??[]).map(i)),he=e.background?t?[t]:[]:e.paths,ge=he.length>0&&he.every(e=>me.has(i(e))),_e=()=>n?ve(n.path,n.isDirectory):`Archive`,ve=(e,t)=>{let n=_(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},ye=async(e,n=_e())=>{let r=await gr(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?D?.(r.path,!0):Me(r.error??O(`could_not_create_the_archive`))},be=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},xe=async()=>{if(!fe||se===null)return;let e=await tr(fe,!se);e.ok?(N(e.enabled),b?.()):Me(e.error??O(`could_not_change_the_case_sensitivity`))},Se=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await nr(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await nr(e,t,`${a}\\${li(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?b?.():Me(o.error??O(`could_not_create_the_link`))},Ce=async e=>{if(!n)return;let r=await Zr(t);r&&await Se(e,n.path,r,_(n.path),e.endsWith(`-copy`))},we=async e=>{let n=re?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let a=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(a&&!r.isDirectory)continue;let o=r.path.replace(/[\\/][^\\/]+$/,``),s=i(o)===i(t);await Se(n,r.path,t,_(r.path),a&&!s)}},Te=async()=>{let t=(await Yn(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&ai({paths:t})},Ee=()=>{let e=re?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:O(`cancel_selected_link`),icon:(0,Z.jsx)(Sn,{size:14}),onSelect:()=>ai(null)},...t?[{label:O(`hard_link`),icon:(0,Z.jsx)(Yt,{size:14}),separatorBefore:!0,onSelect:()=>void we(`hard`)}]:[],{label:O(`symbolic_link`),icon:(0,Z.jsx)(Yt,{size:14}),separatorBefore:!t,onSelect:()=>void we(`symbolic-file`)},...n?[...A?[{label:O(`directory_junction`),icon:(0,Z.jsx)(xt,{size:14}),onSelect:()=>void we(`junction`)}]:[],{label:O(`smart_copy`),icon:(0,Z.jsx)(_n,{size:14}),separatorBefore:!0,onSelect:()=>void we(`smart-copy`)},{label:O(`smart_mirror`),icon:(0,Z.jsx)(_n,{size:14}),onSelect:()=>void we(`smart-mirror`)},{label:O(`multi_version_smart_copy`),icon:(0,Z.jsx)(_n,{size:14}),onSelect:()=>void we(`multi-version-smart-copy`)},{label:O(`hardlink_copy`),icon:(0,Z.jsx)(_n,{size:14}),separatorBefore:!0,onSelect:()=>void we(`hard-copy`)},{label:O(`symbolic_link_copy`),icon:(0,Z.jsx)(_n,{size:14}),onSelect:()=>void we(`symbolic-copy`)}]:[]]};if(e.background){if(h&&pe.push({label:O(`new_folder`),icon:(0,Z.jsx)(Ft,{size:16}),shortcut:Mr(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:O(`folder`),icon:(0,Z.jsx)(xt,{size:14}),onSelect:()=>h(!1)}),!k&&A&&e.push({label:O(`case_sensitive_folder`),icon:(0,Z.jsx)(hn,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...Q.map((e,t)=>({label:`${O(e.label)} (${e.extension})`,icon:(0,Z.jsx)(Yt,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),P.push({label:O(`new`),icon:(0,Z.jsx)(Ft,{size:14}),children:e,onSelect:()=>void 0})}if(k||P.push({label:O(`create_link`),icon:(0,Z.jsx)(gn,{size:14}),disabled:!re,children:Ee(),onSelect:()=>void 0}),y)return(0,Z.jsx)(Pe,{items:P,onClose:o,quick:pe,x:e.x,y:e.y});!k&&s&&P.push({label:O(`open_in_new_tab`),icon:(0,Z.jsx)(Ft,{size:14}),onSelect:()=>s(t,!0)}),P.push({label:O(`copy_as_path`),icon:(0,Z.jsx)(_n,{size:14}),onSelect:()=>void be([t])}),S&&P.push({label:O(`add_to_file_tray`),icon:(0,Z.jsx)(At,{size:14}),onSelect:()=>S([t])}),!k&&(ge?w:C)&&P.push({label:O(ge?`remove_from_favorites`:`add_to_favorites`),icon:ge?(0,Z.jsx)(Cn,{size:14}):(0,Z.jsx)(Et,{size:14}),onSelect:()=>ge?w?.([t]):C?.([t])}),!k&&se!==null&&P.push({label:O(`case_sensitive_names`),icon:(0,Z.jsx)(hn,{size:14}),checked:se,onSelect:()=>void xe()}),!k&&te&&(P.push({label:O(`open_in_terminal`),icon:(0,Z.jsx)(Gt,{size:14}),onSelect:()=>void cr(t)}),P.push({label:O(A?`show_in_explorer`:`show_in_file_manager`),icon:(0,Z.jsx)(xt,{size:14}),separatorBefore:!0,onSelect:()=>void pr(t)})),m&&pe.push({label:O(`paste`),icon:(0,Z.jsx)(ut,{size:16}),disabled:!a,shortcut:Mr(r.paste),onSelect:()=>m(t)}),k||pe.push({label:O(`properties`),icon:(0,Z.jsx)(mt,{size:16}),shortcut:Mr(r.properties),onSelect:()=>void ir([t])})}else{if(l&&P.push({label:O(`choose`),icon:(0,Z.jsx)(zt,{size:14}),onSelect:()=>{l(n?e.paths.length>1?[...e.paths]:[n.path]:[...e.paths])}}),s&&P.push({label:O(`open`),icon:(0,Z.jsx)(qt,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&(u??c)?.(n.path)}}),n?.isDirectory&&(s&&P.push({label:O(`open_in_new_tab`),icon:(0,Z.jsx)(Ft,{size:14}),onSelect:()=>s(n.path,!0)}),m&&P.push({label:O(`paste_into_folder`),icon:(0,Z.jsx)(ut,{size:14}),disabled:!a,onSelect:()=>m(n.path)}),k||P.push({label:O(`open_in_terminal`),icon:(0,Z.jsx)(Gt,{size:14}),onSelect:()=>void cr(n.path)})),!k&&ue&&n&&!n.isDirectory&&x(n.path)&&T&&P.push({label:O(`extract_archive`),icon:(0,Z.jsx)(tn,{size:14}),separatorBefore:!0,children:[{label:O(`extract_here`),icon:(0,Z.jsx)(tn,{size:14}),onSelect:()=>T(n.path,`here`)},{label:O(`extract_to_a_folder_named_after_the_archive`),icon:(0,Z.jsx)(tn,{size:14}),onSelect:()=>T(n.path,`named`)},{label:O(`auto_extract_to_the_current_folder`),icon:(0,Z.jsx)(tn,{size:14}),onSelect:()=>T(n.path,`auto`)},{label:O(`extract_to`),icon:(0,Z.jsx)(xt,{size:14}),separatorBefore:!0,onSelect:()=>T(n.path,`choose`)}],onSelect:()=>void 0}),!k&&A&&ue&&n){let e=[];if(ae.loading)e.push({label:O(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ae.recommended)e.push({label:t.name,group:O(`suggested_apps`),icon:t.icon?(0,Z.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Z.jsx)(Ct,{size:14}),onSelect:()=>void ur(n.path,t.path).then(e=>{e||sr(n.path)})});for(let t of ae.other)e.push({label:t.name,group:O(`other_apps`),icon:t.icon?(0,Z.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Z.jsx)(Ct,{size:14}),onSelect:()=>void ur(n.path,t.path).then(e=>{e||sr(n.path)})})}e.push({label:O(`choose_another_app`),icon:(0,Z.jsx)(Ct,{size:14}),separatorBefore:!0,onSelect:()=>void sr(n.path)}),P.push({label:O(`open_with_2`),icon:(0,Z.jsx)(Ct,{size:14}),children:e,onSelect:()=>void sr(n.path)})}if(!k&&E===`windows`&&e.paths.length>0&&P.push({label:O(`share`),icon:(0,Z.jsx)(gn,{size:14}),separatorBefore:!0,onSelect:()=>void or(e.paths).then(e=>{e.ok||Me(e.error??O(`could_not_open_the_share_sheet`))})}),k||P.push({label:O(`compress`),icon:(0,Z.jsx)(tn,{size:14}),separatorBefore:!0,children:[{label:O(`compress_to_zip`),icon:(0,Z.jsx)(tn,{size:14}),onSelect:()=>void ye(e.paths)},{label:O(`compress_to`),icon:(0,Z.jsx)(tn,{size:14}),onSelect:()=>ne?.(e.paths,_e())}],onSelect:()=>void 0}),!k&&(e?.paths.length??0)>0){let e=[{label:O(`select_link_source`),icon:(0,Z.jsx)(gn,{size:14}),onSelect:()=>void Te()},...re?[{label:O(`cancel_selected_link`),icon:(0,Z.jsx)(Sn,{size:14}),onSelect:()=>ai(null)}]:[],...ue&&n?n.isDirectory?[{label:O(`symbolic_link`),icon:(0,Z.jsx)(xt,{size:14}),separatorBefore:!0,onSelect:()=>void Ce(`symbolic-folder`)},...A?[{label:O(`directory_junction`),icon:(0,Z.jsx)(xt,{size:14}),onSelect:()=>void Ce(`junction`)}]:[],{label:O(`smart_copy`),icon:(0,Z.jsx)(_n,{size:14}),separatorBefore:!0,onSelect:()=>void Ce(`smart-copy`)},{label:O(`smart_mirror`),icon:(0,Z.jsx)(_n,{size:14}),onSelect:()=>void Ce(`smart-mirror`)},{label:O(`multi_version_smart_copy`),icon:(0,Z.jsx)(_n,{size:14}),onSelect:()=>void Ce(`multi-version-smart-copy`)},{label:O(`hardlink_copy`),icon:(0,Z.jsx)(_n,{size:14}),separatorBefore:!0,onSelect:()=>void Ce(`hard-copy`)},{label:O(`symbolic_link_copy`),icon:(0,Z.jsx)(_n,{size:14}),onSelect:()=>void Ce(`symbolic-copy`)}]:[{label:O(`symbolic_link`),icon:(0,Z.jsx)(Yt,{size:14}),separatorBefore:!0,onSelect:()=>void Ce(`symbolic-file`)},{label:O(`hard_link`),icon:(0,Z.jsx)(Yt,{size:14}),onSelect:()=>void Ce(`hard`)}]:[]];P.push({label:O(`create_link`),icon:(0,Z.jsx)(gn,{size:14}),children:e,onSelect:()=>void 0})}!k&&n?.isDirectory&&se!==null&&P.push({label:O(`case_sensitive_names`),icon:(0,Z.jsx)(hn,{size:14}),checked:se,onSelect:()=>void xe()}),P.push({label:O(`copy_as_path`),icon:(0,Z.jsx)(_n,{size:14}),onSelect:()=>void be(e.paths)}),S&&P.push({label:O(`add_to_file_tray`),icon:(0,Z.jsx)(At,{size:14}),onSelect:()=>S(e.paths)}),!k&&(ge?w:C)&&P.push({label:O(ge?`remove_from_favorites`:`add_to_favorites`),icon:ge?(0,Z.jsx)(Cn,{size:14}):(0,Z.jsx)(Et,{size:14}),onSelect:()=>ge?w?.(he):C?.(he)}),k||P.push({label:O(A?`show_in_explorer`:`show_in_file_manager`),icon:(0,Z.jsx)(xt,{size:14}),separatorBefore:!0,onSelect:()=>void pr(he[0])}),p&&pe.push({label:O(`cut`),icon:(0,Z.jsx)(It,{size:16}),shortcut:Mr(r.cut),onSelect:()=>p(e.paths,!0)},{label:O(`copy`),icon:(0,Z.jsx)(_n,{size:16}),shortcut:Mr(r.copy),onSelect:()=>p(e.paths,!1)}),ue&&n&&d&&pe.push({label:O(`rename`),icon:(0,Z.jsx)(mn,{size:16}),shortcut:Mr(r.rename),onSelect:()=>d(n.path)}),f&&pe.push({label:O(`delete`),icon:(0,Z.jsx)(vn,{size:16}),danger:!0,shortcut:Mr(r.delete),onSelect:()=>f(e.paths)}),k||pe.push({label:O(`properties`),icon:(0,Z.jsx)(mt,{size:16}),shortcut:Mr(r.properties),onSelect:()=>void ir(e.paths)})}if(j.loading)P.push({label:O(`more_actions`),icon:(0,Z.jsx)(Ct,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(j.verbs.length>0){let e={items:[],children:new Map};for(let t of j.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,Z.jsx)(ci,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void hr(de,j.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,Z.jsx)(ci,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];P.push({label:O(j.safe?`more_actions`:`more_actions_extensions`),icon:(0,Z.jsx)(Ct,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,Z.jsx)(Pe,{items:P,onClose:o,quick:pe,x:e.x,y:e.y})}function ci({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,Z.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,Z.jsx)(qt,{size:14});case`document`:return(0,Z.jsx)(ft,{size:14});case`cut`:return(0,Z.jsx)(It,{size:14});case`copy`:return(0,Z.jsx)(_n,{size:14});case`paste`:return(0,Z.jsx)(ut,{size:14});case`trash`:return(0,Z.jsx)(vn,{size:14});case`pencil`:return(0,Z.jsx)(mn,{size:14});case`gear`:return(0,Z.jsx)(mt,{size:14});case`star`:return(0,Z.jsx)(sn,{size:14});case`pin`:return(0,Z.jsx)(un,{size:14});case`executable`:return(0,Z.jsx)(Ct,{size:14});case`share`:return(0,Z.jsx)(gn,{size:14});case`arrow`:return(0,Z.jsx)(qt,{size:14});default:return(0,Z.jsx)(pn,{size:14})}}function li(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}var ui=r();function di({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=M(),[l,u]=(0,H.useState)(null),d=(0,H.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,H.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(fi,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,Z.jsx)(pi,{children:f?.label??``}):(0,Z.jsx)(mi,{children:a}),a===void 0&&(0,Z.jsx)(hi,{children:(0,Z.jsx)(Ht,{size:11})})]}),l&&(0,ui.createPortal)((0,Z.jsx)(gi,{"aria-label":c(`options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,Z.jsxs)(_i,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,Z.jsx)(vi,{children:t.label}),t.value===e&&(0,Z.jsx)(zt,{size:11})]},t.value))}),document.body)]})}var fi=C.button`
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
`,pi=C.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,mi=C.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,hi=C.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,gi=C.div`
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
`,_i=C.button`
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
`,vi=C.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,yi=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],bi=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],xi=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],Si=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Ci=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function wi({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=M(),a=(0,H.useRef)(null),[o,s]=(0,H.useState)(e),[c,l]=(0,H.useState)(t),[u,d]=(0,H.useState)(`zip`),[f,p]=(0,H.useState)(`5`),[m,h]=(0,H.useState)(`default`),[g,_]=(0,H.useState)(`none`),[v,y]=(0,H.useState)(``),[b,x]=(0,H.useState)(`0`),[S,C]=(0,H.useState)(!1);(0,H.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let w=yi.find(e=>e.value===u)??yi[0],ee=u===`zip`||u===`zipx`,T=g!==`none`,te=ee||u===`7z`,E=u===`zip`||u===`7z`,ne=async()=>{if(S||!c.trim()||!o||T&&v.length===0)return;C(!0);let e=await r({directory:o,name:c.trim(),format:u,level:w.level?Number(f):0,method:ee?m:null,encryption:te?g:`none`,password:T?v:void 0,splitSize:E?Number(b):0});C(!1),e&&n()};return(0,ui.createPortal)((0,Z.jsx)(Ti,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,Z.jsxs)(Ei,{"aria-modal":`true`,role:`dialog`,children:[(0,Z.jsx)(Di,{children:i(`compress_to`)}),(0,Z.jsxs)(Oi,{children:[(0,Z.jsx)(ki,{children:i(`archive_name`)}),(0,Z.jsx)(Ai,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&ne()}}),(0,Z.jsx)(ji,{children:w.extension})]}),(0,Z.jsxs)(Oi,{children:[(0,Z.jsx)(ki,{children:i(`format`)}),(0,Z.jsx)(di,{onChange:e=>d(e),options:yi.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,Z.jsxs)(Oi,{children:[(0,Z.jsx)(ki,{children:i(`method`)}),(0,Z.jsx)(di,{disabled:!ee,onChange:h,options:bi.map(e=>({...e,label:i(e.label)})),value:ee?m:`default`,width:236,zIndex:3700})]}),(0,Z.jsxs)(Oi,{children:[(0,Z.jsx)(ki,{children:i(`encryption`)}),(0,Z.jsx)(di,{disabled:!te,onChange:e=>{_(e),e===`none`&&y(``)},options:xi.map(e=>({...e,label:i(e.label)})),value:te?g:`none`,width:236,zIndex:3700})]}),T&&(0,Z.jsxs)(Oi,{children:[(0,Z.jsx)(ki,{children:i(`password`)}),(0,Z.jsx)(Ai,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,Z.jsxs)(Oi,{children:[(0,Z.jsx)(ki,{children:i(`split_volumes`)}),(0,Z.jsx)(di,{disabled:!E,onChange:x,options:Si.map(e=>({...e,label:i(e.label)})),value:E?b:`0`,width:236,zIndex:3700})]}),(0,Z.jsxs)(Oi,{children:[(0,Z.jsx)(ki,{children:i(`compression_level`)}),(0,Z.jsx)(di,{disabled:!w.level,onChange:p,options:Ci.map(e=>({...e,label:i(e.label)})),value:w.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,Z.jsxs)(Oi,{$stack:!0,children:[(0,Z.jsx)(ki,{children:i(`destination`)}),(0,Z.jsxs)(Mi,{children:[(0,Z.jsx)(Ni,{title:o,children:o}),(0,Z.jsx)(Fi,{disabled:S,onClick:()=>void Zr(o).then(e=>{e&&s(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,Z.jsxs)(Pi,{children:[(0,Z.jsx)(Fi,{disabled:S,onClick:n,type:`button`,children:i(`cancel`)}),(0,Z.jsx)(Ii,{disabled:S||!c.trim()||T&&v.length===0,onClick:()=>void ne(),type:`button`,children:i(S?`compressing`:`compress`)})]})]})}),document.body)}var Ti=C.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${L}
`,Ei=C.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${at}
`,Di=C.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Oi=C.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,ki=C.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Ai=C.input`
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
`,ji=C.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Mi=C.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Ni=C.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pi=C.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Fi=C.button`
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
`,Ii=C(Fi)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Li({programs:e,message:t,confirmLabel:n,onCancel:r,onConfirm:i}){let a=M(),o=(0,H.useRef)(null);return(0,H.useEffect)(()=>{o.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[r]),(0,ui.createPortal)((0,Z.jsx)(zi,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,Z.jsxs)(Bi,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Z.jsx)(Vi,{children:a(`the_program_is_running`)}),(0,Z.jsx)(Hi,{children:t}),(0,Z.jsx)(Ui,{children:e.map(e=>(0,Z.jsx)(Ri,{program:e,title:a(`process_id_n`,{id:e.id})},e.id))}),(0,Z.jsxs)(Zi,{children:[(0,Z.jsx)(Qi,{onClick:r,ref:o,type:`button`,children:a(i?`cancel`:`ok`)}),i&&(0,Z.jsx)(Qi,{$primary:!0,onClick:i,type:`button`,children:n??a(`delete`)})]})]})}),document.body)}function Ri({program:e,title:t}){let n=F(e.path,!1,!0);return(0,Z.jsxs)(Wi,{title:e.path,children:[(0,Z.jsx)(Gi,{children:n?(0,Z.jsx)(Ki,{alt:``,src:n}):(0,Z.jsx)(qi,{})}),(0,Z.jsxs)(Ji,{children:[(0,Z.jsx)(Yi,{children:e.name}),(0,Z.jsx)(Xi,{children:t})]})]})}var zi=C.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${L}
`,Bi=C.div`
    width: min(520px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${at}
`,Vi=C.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Hi=C.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ui=C.div`
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
`,Wi=C.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 3px 0;
`,Gi=C.span`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 20px;
    height: 20px;
`,Ki=C.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`,qi=C.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--text-muted);
`,Ji=C.span`
    display: flex;
    align-items: baseline;
    gap: 8px;
    min-width: 0;
`,Yi=C.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xi=C.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10.5px;
`,Zi=C.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,Qi=C.button`
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
`,$i=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),ea=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),ta=new Set([`png`,`jpg`,`jpeg`,`jfif`,`jpe`,`gif`,`webp`,`bmp`,`avif`,`ico`,`svg`,`apng`]),na=new Set([`tif`,`tiff`,`psd`,`psb`,`tga`,`dds`,`hdr`,`exr`,`pcx`,`dib`,`jxl`]),ra=new Set([...ta,...na]),ia=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function aa({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=M(),[l,u]=(0,H.useState)(!1),[d,f]=(0,H.useState)(!1),[p,m]=(0,H.useState)(!1),[h,g]=(0,H.useState)(0),[_,v]=(0,H.useState)(0),[y,b]=(0,H.useState)(null),[x,S]=(0,H.useState)(!1),[C,w]=(0,H.useState)(!1),ee=(0,H.useRef)(null),T=(0,H.useRef)(null),te=(0,H.useRef)(null),E=(0,H.useRef)(null),[ne,D]=(0,H.useState)(()=>{let e=st(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),O=r?e?.path??null:null,re=z(O),k=e?oa(e.name):``,A=!!e&&!e.isDirectory&&$i.has(k),j=!!e&&!e.isDirectory&&ea.has(k),ie=!!e&&!e.isDirectory&&ra.has(k),ae=!!e&&!e.isDirectory&&ia.has(k),oe=!!e&&!e.isDirectory&&k===`pdf`,se=Je(A?re:null,512,e?.modified??0),N=ie&&ta.has(k),le=Je(ie&&!N?re:null,1024,e?.modified??0),ue=de(N?re:null,e?.modified??0,k),fe=de(A||j?re:null,e?.modified??0,k),P=xe(oe?re:null,e?.modified??0),pe=F(!A&&!j&&!ie&&!ae&&!oe?re:null,e?.isDirectory??!1);if((0,H.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),w(!1)},[O]),(0,H.useEffect)(()=>{if(!re||!ae){b(null),S(!1);return}let e=!0;return S(!0),b(null),je(re).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`could_not_read_this_file`)}),S(!1))}),()=>{e=!1}},[re,ae]),!e&&!s)return null;let me=e=>{te.current={x:e.clientX,width:T.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},he=e=>{let t=te.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},ge=e=>{te.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},_e=e=>{E.current={y:e.clientY,height:ne},e.currentTarget.setPointerCapture(e.pointerId)},ve=e=>{let t=E.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);D(n),ce(`yafm.preview.media.height`,n)},ye=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,Z.jsxs)(ca,{$open:r,children:[r&&(0,Z.jsx)(la,{onPointerDown:me,onPointerMove:he,onPointerUp:ge,onDoubleClick:()=>n(320),title:c(`drag_to_resize_double_click_to_reset`)}),(0,Z.jsx)(ua,{ref:T,style:{width:r?t:0},children:(0,Z.jsxs)(da,{children:[(0,Z.jsx)(xt,{size:56}),(0,Z.jsx)(`span`,{children:s})]})})]});let be=()=>{let e=ee.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,Z.jsxs)(ca,{$open:r,children:[r&&(0,Z.jsx)(la,{onPointerDown:me,onPointerMove:he,onPointerUp:ge,onDoubleClick:()=>n(320),title:c(`drag_to_resize_double_click_to_reset`)}),(0,Z.jsxs)(ua,{ref:T,style:{width:r?t:0},children:[(0,Z.jsx)(fa,{style:{height:ne},children:A&&fe&&!l?(0,Z.jsxs)(ma,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,Z.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:be,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:se??void 0,preload:`metadata`,ref:ee,src:fe}),(0,Z.jsx)(ha,{$visible:!d,onClick:be,title:c(`play`),type:`button`,children:(0,Z.jsx)(Jt,{size:28})}),(0,Z.jsxs)(ga,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,Z.jsxs)(_a,{children:[(0,Z.jsx)(`span`,{children:sa(_)}),(0,Z.jsx)(`span`,{children:sa(h)})]}),(0,Z.jsx)(va,{"aria-label":c(`seek`),max:h||0,min:0,onChange:e=>{let t=ee.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):j&&fe?(0,Z.jsx)(`audio`,{controls:!0,src:fe}):ie&&(ue??le)?(0,Z.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:ue??le}):oe&&P&&!C?(0,Z.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:P}):oe?(0,Z.jsx)(Yt,{size:64}):ae?(0,Z.jsx)(ya,{children:x||!y?(0,Z.jsx)(xa,{children:c(`loading`)}):y.error?(0,Z.jsx)(xa,{children:y.error}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(ba,{children:y.text}),y.truncated&&(0,Z.jsx)(xa,{children:c(`showing_the_first_256_kb`)})]})}):A&&se?(0,Z.jsx)(`img`,{alt:``,src:se}):pe?(0,Z.jsx)(`img`,{alt:``,src:pe}):e.isDirectory?(0,Z.jsx)(xt,{size:64}):(0,Z.jsx)(Yt,{size:64})}),(0,Z.jsx)(pa,{onDoubleClick:()=>{D(210),ce(`yafm.preview.media.height`,210)},onPointerDown:_e,onPointerMove:ve,onPointerUp:ye,title:c(`drag_to_resize_double_click_to_reset`)}),(0,Z.jsxs)(Sa,{children:[(0,Z.jsx)(Ca,{title:e.path,children:e.name}),o&&(0,Z.jsx)(wa,{children:o}),(0,Z.jsx)(Ta,{children:e.fields.map(e=>(0,Z.jsxs)(Ea,{children:[(0,Z.jsx)(Da,{children:e.label}),(0,Z.jsx)(Oa,{title:e.value,children:e.time===void 0?e.value:(0,Z.jsx)(R,{value:e.time})})]},e.label))})]})]})]})}function oa(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function sa(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var ca=C.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,la=C.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ua=C.aside`
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
`,da=C.div`
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
`,fa=C.div`
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
`,pa=C.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,ma=C.div`
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
`,ha=C.button`
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
`,ga=C.div`
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
`,_a=C.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,va=C.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,ya=C.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,ba=C.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,xa=C.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Sa=C.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Ca=C.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,wa=C.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Ta=C.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,Ea=C.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Da=C.span`
    color: var(--text-muted);
`,Oa=C.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,ka=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Aa=[...ka],ja={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},Ma={folder:e=>(0,Z.jsx)(xt,{size:e}),home:e=>(0,Z.jsx)(B,{size:e}),desktop:e=>(0,Z.jsx)(Dt,{size:e}),documents:e=>(0,Z.jsx)(yn,{size:e}),downloads:e=>(0,Z.jsx)(Ot,{size:e}),pictures:e=>(0,Z.jsx)(nn,{size:e}),music:e=>(0,Z.jsx)(vt,{size:e}),videos:e=>(0,Z.jsx)(xn,{size:e}),drive:e=>(0,Z.jsx)(pt,{size:e}),image:e=>(0,Z.jsx)(gt,{size:e}),video:e=>(0,Z.jsx)(V,{size:e}),audio:e=>(0,Z.jsx)(rn,{size:e}),text:e=>(0,Z.jsx)(Nt,{size:e}),code:e=>(0,Z.jsx)(Wt,{size:e}),clock:e=>(0,Z.jsx)(on,{size:e}),star:e=>(0,Z.jsx)(sn,{size:e}),file:e=>(0,Z.jsx)(Yt,{size:e}),archive:e=>(0,Z.jsx)(tn,{size:e}),pdf:e=>(0,Z.jsx)(Vt,{size:e}),executable:e=>(0,Z.jsx)(Ct,{size:e}),font:e=>(0,Z.jsx)(St,{size:e}),database:e=>(0,Z.jsx)(bn,{size:e}),config:e=>(0,Z.jsx)(Mt,{size:e}),spreadsheet:e=>(0,Z.jsx)(Ut,{size:e}),presentation:e=>(0,Z.jsx)(an,{size:e}),document:e=>(0,Z.jsx)(ft,{size:e}),app:e=>(0,Z.jsx)(pn,{size:e}),gear:e=>(0,Z.jsx)(mt,{size:e}),pin:e=>(0,Z.jsx)(un,{size:e}),trash:e=>(0,Z.jsx)(vn,{size:e}),overview:e=>(0,Z.jsx)(jt,{size:e}),book:e=>(0,Z.jsx)(dn,{size:e}),briefcase:e=>(0,Z.jsx)(Lt,{size:e}),cloud:e=>(0,Z.jsx)(Kt,{size:e}),gamepad:e=>(0,Z.jsx)(wt,{size:e}),camera:e=>(0,Z.jsx)(Zt,{size:e}),terminal:e=>(0,Z.jsx)(Gt,{size:e}),server:e=>(0,Z.jsx)(Qt,{size:e}),package:e=>(0,Z.jsx)(At,{size:e}),globe:e=>(0,Z.jsx)(_t,{size:e}),heart:e=>(0,Z.jsx)(Et,{size:e}),share:e=>(0,Z.jsx)(Qt,{size:e}),favorites:e=>(0,Z.jsx)(Et,{size:e})};function Na(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function Pa(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??ka)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Aa.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Na(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${ja[n]??n}${Fa(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Fa(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Ia({panel:e,size:t=16}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=P(n);if(r)return(0,Z.jsx)(`img`,{alt:``,src:r,style:{width:t,height:t,objectFit:`contain`}});let i=e.icon?Ma[e.icon]:void 0;if(i)return(0,Z.jsx)(Z.Fragment,{children:i(t)});switch(e.kind){case`quick`:return(0,Z.jsx)(xt,{size:t});case`recent`:return(0,Z.jsx)(on,{size:t});case`frequent`:return(0,Z.jsx)(sn,{size:t});case`drives`:return(0,Z.jsx)(pt,{size:t});case`home`:return(0,Z.jsx)(B,{size:t});case`share`:return(0,Z.jsx)(Qt,{size:t});case`favorites`:return(0,Z.jsx)(Et,{size:t});default:return(0,Z.jsx)(xt,{size:t})}}function La({place:e,size:t=18}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=P(n);return r?(0,Z.jsx)(`img`,{alt:``,height:t,src:r,style:{objectFit:`contain`},width:t}):e.icon&&Ma[e.icon]?(0,Z.jsx)(Z.Fragment,{children:Ma[e.icon](t)}):(0,Z.jsx)(xt,{size:t})}var Ra=`yafm.colors.saved`,za=`yafm.colors.history`,Ba=24,Va=16,Ha=0,Ua=new Set;function Wa(e){let t=(e??``).trim().replace(/^#/,``).toLowerCase();return!/^[0-9a-f]{3}$/.test(t)&&!/^[0-9a-f]{6}$/.test(t)?null:`#${t.length===3?[...t].map(e=>e+e).join(``):t}`}function Ga(e,t){let n=Fe(e),r=new Set,i=[];for(let e of n??[]){let n=Wa(e);if(n&&!r.has(n)&&(r.add(n),i.push(n),i.length>=t))break}return i}function Ka(){return Ga(Ra,Ba)}function qa(){return Ga(za,Va)}function Ja(){Ha+=1;for(let e of Ua)e()}function Ya(e){let t=Wa(e);if(!t)return;let n=[t,...qa().filter(e=>e!==t)].slice(0,Va);Te(za,n),Ja()}function Xa(e){let t=Wa(e);if(!t)return;let n=[t,...Ka().filter(e=>e!==t)].slice(0,Ba);Te(Ra,n),Ja()}function Za(e){let t=Wa(e);t&&(Te(Ra,Ka().filter(e=>e!==t)),Ja())}function Qa(e){return Ua.add(e),()=>{Ua.delete(e)}}function $a(){let e=(0,H.useSyncExternalStore)(Qa,()=>Ha);return(0,H.useMemo)(()=>({saved:Ka(),history:qa()}),[e])}function eo(e){let t=Wa(e);return t?{r:Number.parseInt(t.slice(1,3),16),g:Number.parseInt(t.slice(3,5),16),b:Number.parseInt(t.slice(5,7),16)}:null}function to({r:e,g:t,b:n}){let r=e=>Math.round(Math.max(0,Math.min(255,e))).toString(16).padStart(2,`0`);return`#${r(e)}${r(t)}${r(n)}`}function no({r:e,g:t,b:n}){let r=e/255,i=t/255,a=n/255,o=Math.max(r,i,a),s=o-Math.min(r,i,a),c=0;return s!==0&&(c=o===r?60*((i-a)/s%6):o===i?60*((a-r)/s+2):60*((r-i)/s+4)),c<0&&(c+=360),{h:c,s:o===0?0:s/o,v:o}}function ro({h:e,s:t,v:n}){let r=n*t,i=e/60,a=r*(1-Math.abs(i%2-1)),o=n-r,s=0,c=0,l=0;return i<1?[s,c]=[r,a]:i<2?[s,c]=[a,r]:i<3?[c,l]=[r,a]:i<4?[c,l]=[a,r]:i<5?[s,l]=[a,r]:[s,l]=[r,a],{r:(s+o)*255,g:(c+o)*255,b:(l+o)*255}}function io({value:e,onChange:t,disabled:n=!1,title:r,ariaLabel:i,variant:a=`dot`}){let o=M(),s=(0,H.useRef)(null),c=(0,H.useRef)(null),l=(0,H.useRef)(null),u=(0,H.useRef)(!1),d=(0,H.useRef)(!1),[f,p]=(0,H.useState)(!1),[m,h]=(0,H.useState)(null),g=eo(e)??{r:0,g:0,b:0},[_,v]=(0,H.useState)(()=>no(g)),[y,b]=(0,H.useState)(e),{saved:x,history:S}=$a(),C=to(ro(_)),w=ro(_),[ee,T]=(0,H.useState)(()=>({r:String(Math.round(w.r)),g:String(Math.round(w.g)),b:String(Math.round(w.b))})),te=(0,H.useRef)(C);te.current=C;let E=(0,H.useCallback)(()=>{p(!1),d.current&&=(Ya(te.current),!1)},[]),ne=e=>{v(e);let n=to(ro(e));b(n),d.current=!0,t(n)},D=(e,t)=>{T(n=>({...n,[e]:t}));let n=Number(t);t.trim().length===0||!Number.isInteger(n)||n<0||n>255||ne(no({...w,[e]:n}))},O=e=>T(t=>({...t,[e]:String(Math.round(w[e]))}));(0,H.useEffect)(()=>{if(f)return;let t=eo(e);t&&(v(no(t)),b(e))},[e,f]),(0,H.useEffect)(()=>{T({r:String(Math.round(w.r)),g:String(Math.round(w.g)),b:String(Math.round(w.b))})},[C]),(0,H.useLayoutEffect)(()=>{if(!f||!s.current)return;let e=s.current.getBoundingClientRect(),t=Math.max(8,Math.min(e.left,window.innerWidth-236-8)),n=e.bottom+6+322>window.innerHeight?Math.max(8,e.top-328):e.bottom+6;h({top:n,left:t})},[f]),(0,H.useEffect)(()=>{if(!f)return;let e=e=>{let t=e.target;c.current?.contains(t)||s.current?.contains(t)||E()},t=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),E())};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t,!0),window.addEventListener(`blur`,E),window.addEventListener(`resize`,E),document.addEventListener(`scroll`,E,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t,!0),window.removeEventListener(`blur`,E),window.removeEventListener(`resize`,E),document.removeEventListener(`scroll`,E,!0)}},[f,E]);let re=()=>{if(n)return;if(f){E();return}let t=eo(e);t&&(v(no(t)),b(e)),p(!0)},k=e=>{let t=l.current?.getBoundingClientRect();if(!t)return;let n=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width)),r=1-Math.max(0,Math.min(1,(e.clientY-t.top)/t.height));ne({..._,s:n,v:r})},A=e=>{let n=eo(e);n&&(v(no(n)),b(e),te.current=e,d.current=!1,t(e),Ya(e),p(!1))},j=Wa(e)??C;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(ao,{$variant:a,"aria-label":i??r,disabled:n,onClick:re,ref:s,title:r,type:`button`,children:(0,Z.jsx)(oo,{$color:j})}),f&&m&&(0,ui.createPortal)((0,Z.jsxs)(so,{ref:c,style:{top:m.top,left:m.left},children:[(0,Z.jsx)(co,{$hue:_.h,onPointerDown:e=>{e.preventDefault(),e.currentTarget.setPointerCapture(e.pointerId),u.current=!0,k(e)},onPointerMove:e=>{u.current&&k(e)},onPointerUp:e=>{u.current=!1,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)},ref:l,children:(0,Z.jsx)(lo,{style:{left:`${_.s*100}%`,top:`${(1-_.v)*100}%`,background:j}})}),(0,Z.jsx)(uo,{"aria-label":o(`color`),max:359,min:0,onChange:e=>ne({..._,h:Number(e.target.value)}),type:`range`,value:Math.round(_.h)}),(0,Z.jsxs)(fo,{children:[(0,Z.jsx)(po,{"aria-label":o(`hex_color`),maxLength:7,onBlur:()=>b(C),onChange:e=>{let n=e.target.value;b(n);let r=Wa(n),i=r?eo(r):null;i&&(v(no(i)),d.current=!0,t(r))},spellCheck:!1,value:y}),(0,Z.jsx)(vo,{onClick:()=>Xa(C),title:o(`save_color`),type:`button`,children:(0,Z.jsx)(Ft,{size:11})})]}),(0,Z.jsx)(mo,{children:[`r`,`g`,`b`].map(e=>(0,Z.jsxs)(ho,{children:[(0,Z.jsx)(go,{children:e.toUpperCase()}),(0,Z.jsx)(_o,{"aria-label":e.toUpperCase(),inputMode:`numeric`,maxLength:3,onBlur:()=>O(e),onChange:t=>D(e,t.target.value),value:ee[e]})]},e))}),x.length>0&&(0,Z.jsxs)(yo,{children:[(0,Z.jsx)(bo,{children:o(`saved_colors`)}),(0,Z.jsx)(xo,{children:x.map(e=>(0,Z.jsxs)(So,{children:[(0,Z.jsx)(Co,{$color:e,onClick:()=>A(e),title:e,type:`button`}),(0,Z.jsx)(wo,{onClick:t=>{t.stopPropagation(),Za(e)},title:o(`remove_saved_color`),type:`button`,children:(0,Z.jsx)(Sn,{size:8})})]},e))})]}),S.length>0&&(0,Z.jsxs)(yo,{children:[(0,Z.jsx)(bo,{children:o(`color_history`)}),(0,Z.jsx)(xo,{children:S.map(e=>(0,Z.jsx)(Co,{$color:e,onClick:()=>A(e),title:e,type:`button`},e))})]})]}),document.body)]})}var ao=C.button`
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
`,oo=C.span`
    width: 70%;
    height: 70%;
    border-radius: inherit;
    background: ${({$color:e})=>e};
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.18);
`,so=C.div`
    position: fixed;
    z-index: 3600;
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 236px;
    padding: 8px;
    ${Qe}
    ${at}
`,co=C.div`
    position: relative;
    height: 132px;
    border-radius: var(--radius-sm);
    cursor: crosshair;
    touch-action: none;
    background:
        linear-gradient(to top, #000, transparent),
        linear-gradient(to right, #fff, hsl(${({$hue:e})=>e} 100% 50%));
`,lo=C.span`
    position: absolute;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
    pointer-events: none;
`,uo=C.input`
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
`,fo=C.div`
    display: flex;
    gap: 5px;
`,po=C.input`
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
`,mo=C.div`
    display: flex;
    gap: 5px;
`,ho=C.label`
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
`,go=C.span`
    color: var(--text-muted);
    font-size: 9px;
`,_o=C.input`
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
`,vo=C.button`    display: grid;
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
`,yo=C.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,bo=C.span`
    color: var(--text-muted);
    font-size: 9.5px;
`,xo=C.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`,So=C.div`
    position: relative;
`,Co=C.button`
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
`,wo=C.button`
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

    ${So}:hover & {
        display: grid;
    }

    &:hover {
        color: var(--text-primary);
    }
`,To=`#64748b`;function Eo(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Do({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=M(),[c,l]=(0,H.useState)(``),[u,d]=(0,H.useState)(`#2dd4bf`),f=(0,H.useRef)(null);(0,H.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,o),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,o)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,ui.createPortal)((0,Z.jsxs)(Oo,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,Z.jsxs)(ko,{children:[(0,Z.jsx)(`span`,{children:s(`tags`)}),(0,Z.jsx)(Ao,{onClick:o,title:s(`close`),type:`button`,children:(0,Z.jsx)(Sn,{size:11})})]}),(0,Z.jsxs)(jo,{children:[p.length===0&&(0,Z.jsx)(Po,{children:s(`no_tags_yet`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,Z.jsxs)(Mo,{children:[(0,Z.jsx)(io,{ariaLabel:s(`color_of_tag`,{tag:e}),title:s(`change_this_tag_s_color`),value:t,onChange:t=>g(e,t)}),(0,Z.jsxs)(No,{$color:t,$ink:Eo(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,Z.jsx)(zt,{size:11}),(0,Z.jsx)(`span`,{children:e})]})]},e)})]}),(0,Z.jsxs)(Fo,{children:[(0,Z.jsx)(io,{ariaLabel:s(`color_of_the_new_tag`),title:s(`color_of_the_new_tag`),value:u,onChange:d}),(0,Z.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`new_tag`),spellCheck:!1,value:c}),(0,Z.jsx)(Io,{onClick:_,type:`button`,children:s(`add`)})]})]}),document.body)}var Oo=C.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${at}
`,ko=C.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Ao=C.button`
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
`,jo=C.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Mo=C.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,No=C.button`
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
`,Po=C.span`
    font-size: 11px;
    color: var(--text-muted);
`,Fo=C.div`
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
`,Io=C.button`
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
`;function Lo({path:e,name:t,isDirectory:n,size:r=18}){let i=F(e,n);return i?(0,Z.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,Z.jsx)(xt,{size:r}):(0,Z.jsx)(qr,{name:Kr(t),size:r})}var Ro=`application/x-yafm-paths`,zo=[Ro,`text/uri-list`];function Bo(e){return e?.types.some(e=>zo.includes(e.toLowerCase()))??!1}function Vo(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Ro);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Uo).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Ho=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Uo(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Ho?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Wo(e){return`file:///`+e.replace(/\\/g,`/`).split(`/`).map((e,t)=>t===0&&/^[a-zA-Z]:$/.test(e)?e:encodeURIComponent(e)).join(`/`)}function Go(e,t,n=!0){e.dataTransfer.setData(Ro,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.setData(`text/uri-list`,t.map(Wo).join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Ko({items:t,clipboardItems:n,clipboardMove:r,visible:i,position:a,currentDirectory:o,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=M(),[h,g]=(0,H.useState)(()=>new Set),[_,v]=(0,H.useState)(!1),y=(0,H.useRef)(null),b=(0,H.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),x=(0,H.useMemo)(()=>n.filter(e=>h.has(e.path)),[n,h]),S=(0,H.useRef)(null);if((0,H.useEffect)(()=>{if(!i)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Bo(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Vo(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[i,c]),!i)return null;let C=new Set([...t,...n].map(e=>e.path)),w=C.size>0&&[...C].every(e=>h.has(e)),ee=C.size,T=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},te=()=>{g(w?new Set:C)},E=e=>{y.current={x:e.clientX,y:e.clientY,left:a.x,top:a.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},ne=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},D=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},O=()=>{let e=b.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},re=()=>{let e=b.map(e=>e.path);e.length!==0&&f(e)},k=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,r);let t=[...e].filter(([,e])=>e).map(([e])=>e),n=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,o,!0),n.length>0&&p(n,o,!1),g(new Set)},A=(t,n)=>{let r=h.has(t.path);return(0,Z.jsxs)(is,{$checked:r,draggable:!0,onClick:()=>T(t.path),onDragStart:e=>{Go(e,r&&h.size>0?[...new Set([...b,...x].map(e=>e.path))]:[t.path],n)},title:t.path,children:[(0,Z.jsx)(as,{$checked:r,onClick:e=>{e.stopPropagation(),T(t.path)},type:`button`,children:r&&(0,Z.jsx)(zt,{size:8})}),(0,Z.jsx)(Lo,{isDirectory:t.isDirectory,name:t.name,path:t.path,size:16}),(0,Z.jsxs)(os,{children:[(0,Z.jsx)(ss,{children:t.name}),(0,Z.jsx)(cs,{children:e(t.path)})]})]},`${n?`tray`:`clipboard`}:${t.path}`)},j=e=>{Bo(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,Z.jsxs)(qo,{$dragging:_,"data-tray":`true`,ref:S,style:{left:a.x,top:a.y},onDragEnter:j,onDragOver:j,onDrop:e=>{let{paths:t}=Vo(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,Z.jsxs)(Jo,{onPointerDown:E,onPointerMove:ne,onPointerUp:D,children:[(0,Z.jsxs)(Yo,{children:[(0,Z.jsx)(At,{size:12}),m(`tray`),(0,Z.jsx)(Xo,{children:ee})]}),(0,Z.jsxs)(Zo,{onPointerDown:e=>e.stopPropagation(),children:[(0,Z.jsx)(Qo,{onClick:te,title:m(w?`select_none`:`select_all`),type:`button`,children:m(w?`none`:`all`)}),(0,Z.jsx)(Qo,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,Z.jsx)($o,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,Z.jsx)(Sn,{size:10})})]})]}),(0,Z.jsxs)(es,{children:[(0,Z.jsxs)(ns,{children:[m(`in_this_app`),(0,Z.jsx)(Xo,{children:t.length})]}),t.length===0&&(0,Z.jsx)(ts,{children:m(`drag_files_or_folders_here`)}),t.map(e=>A(e,!0)),n.length>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(ns,{$clipboard:!0,children:[m(`clipboard`),(0,Z.jsx)(Xo,{children:n.length}),r&&(0,Z.jsx)(rs,{children:m(`cut`)})]}),n.map(e=>A(e,r))]})]}),(0,Z.jsxs)(ls,{children:[(0,Z.jsx)(us,{$plain:!0,disabled:b.length===0,onClick:re,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,Z.jsx)(us,{disabled:h.size===0||!o,onClick:k,type:`button`,children:m(`move_here`)}),(0,Z.jsx)(us,{$danger:!0,disabled:b.length===0,onClick:O,type:`button`,children:m(`remove`)})]})]})}var qo=C.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Qe}
    ${at}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Jo=C.div`
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
`,Yo=C.span`
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
`,Xo=C.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Zo=C.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Qo=C.button`
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
`,$o=C.button`
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
`,es=C.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,ts=C.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,ns=C.div`
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
`,rs=C.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,is=C.div`
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
`,as=C.button`
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
`,os=C.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,ss=C.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cs=C.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ls=C.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,us=C.button`
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
`,ds={shares:[],webRunning:!1,webPort:0,urls:[],preferredUrl:null,deviceId:``,deviceName:``,fingerprint:``};async function fs(){return j.available?await j.request(`share.list`):ds}async function ps(e,t){return j.available?await j.request(`share.add`,{path:e,mode:t}):ds}async function ms(e){return j.available?await j.request(`share.remove`,{id:e}):ds}async function hs(e,t){return j.available?await j.request(`share.mode`,{id:e,mode:t}):ds}async function gs(){return j.available?(await j.request(`share.peers`)).peers??[]:[]}async function _s(){return j.available?(await j.request(`share.peers.refresh`)).peers??[]:[]}async function vs(e,t){j.available&&await j.request(`share.pair.start`,{host:e,port:t})}async function ys(e,t){j.available&&await j.request(`share.pair.respond`,{requestId:e,accept:t})}async function bs(e,t){j.available&&await j.request(`share.port`,{mode:t,port:e})}var xs=`yafm://share/`;function Ss(e){return e.toLowerCase().startsWith(xs)}function Cs(e){if(!Ss(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function ws(e,t,n=``){let r=`${xs}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Ts(e){let t=Cs(e);if(!t||!j.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await j.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:ws(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:ws(t.deviceId,t.shareId,n.parent),total:n.entries?.length??0,signature:0,entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Es(e){let t=Cs(e);if(!t||!j.available)throw Error(`This shared file is only available in the desktop app.`);let n=await j.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Ds(e){await Ae(await Es(e))}async function Os(){return j.available?await j.request(`share.certificate`):null}async function ks(e,t){return await j.request(`share.certificate.import`,{path:e,password:t})}async function As(){return await j.request(`share.certificate.reset`)}async function js(){return j.available?(await j.request(`share.devices.clear`)).devices??[]:[]}async function Ms(){return j.available?(await j.request(`share.devices.list`)).devices??[]:[]}async function Ns(e,t,n){return j.available?(await j.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function Ps(e){return j.available?(await j.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function Fs(){return j.available?(await j.request(`share.access.status`)).hasPassword:!1}async function Is(e){return j.available?(await j.request(`share.access.password`,{password:e})).hasPassword:!1}var Ls=60,Rs=300,zs=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],Bs=new Set,Vs=`yafm.columnWidths`,Hs=`yafm.reset-column-widths`,Us=64,Ws=720,Gs=160,Ks=190,qs=120;function Js({listing:e,loading:t,error:n,find:r=be,view:i,showImages:o,imageStripHeight:s=Ks,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:f,onOpenFile:p,onSelectEntry:h,onOpenExternally:g,showCheckboxes:v=!0,openOnSingleClick:b=!1,shortcuts:x=Sr(),enableShortcuts:S=!0,refreshToken:C=0,onRefresh:w,onRename:ee,onClipboardChanged:T,cutPaths:te=Bs,onTransfer:E,onAddToTray:ne,platform:D,onAddFavorite:O,onRemoveFavorite:re,favoritePaths:k,onExtractArchive:A,onPaste:j,confirmDelete:ie=!1,previewVideoAudio:ae=!1,previewVideoAutoplay:se=!1,showDetails:N=!0,onPreviewInfo:le,onActivate:ue,groupOf:de,onGridScroll:fe,gridFooter:P,allowBackgroundMenu:pe=!0,readOnly:me=!1,onSelectionChange:he,onSelectionCountChange:ge,selectionMenuRequest:_e,selectionMenuId:ve,singleSelect:ye=!1,pendingRename:xe=null,pendingRenameToken:Se=0,selectMatchesToken:Ce=0,onLoadMore:we,onEnsureComplete:Ee,selectAllToken:De=0}){let F=M(),Oe=Vr(),ke=(0,H.useRef)(null),Ae=(0,H.useRef)(null),je=(0,H.useRef)(null),Ne=(0,H.useRef)(null),Pe=(0,H.useRef)(0),Ie=(0,H.useRef)(null),[Le,Re]=(0,H.useState)(Rs),[ze,Be]=(0,H.useState)({top:0,height:640}),Ve=(0,H.useRef)(null),He=(0,H.useRef)(null),Ue=(0,H.useRef)(!1),Ge=(0,H.useRef)(!1),Ke=(0,H.useRef)(null),qe=(0,H.useRef)(null),[Je,Ye]=(0,H.useState)(null),[Xe,Ze]=(0,H.useState)(s),[I,L]=(0,H.useState)(()=>new Set),[Qe,$e]=(0,H.useState)(()=>Fe(Vs)??{}),et=(0,H.useRef)(I),tt=(0,H.useRef)([]);et.current=I,(0,H.useEffect)(()=>he?.([...I]),[I,he]),(0,H.useEffect)(()=>ge?.(I.size),[I,ge]),(0,H.useEffect)(()=>{let e=_e;if(!e||e.token===at.current)return;at.current=e.token;let t=[...et.current];t.length!==0&&(rt({x:e.x,y:e.y,paths:t,background:!1}),Wn().then(_t,()=>_t(!1)))},[_e]);let[nt,rt]=(0,H.useState)(null),at=(0,H.useRef)(0),[ot,R]=(0,H.useState)(null),[z,ct]=(0,H.useState)(null),[lt,ut]=(0,H.useState)(null),dt=(0,H.useRef)(lt);dt.current=lt;let B=(0,H.useRef)(0),ft=(0,H.useRef)(ue);ft.current=ue;let[pt,mt]=(0,H.useState)(()=>{let e=st(`yafm.preview.width`,320);return e>=220?e:320}),ht=(0,H.useCallback)(e=>{mt(e),ce(`yafm.preview.width`,e)},[]),[gt,_t]=(0,H.useState)(!1),vt=(0,H.useCallback)((e,t)=>{let n=[...et.current];n.length!==0&&(rt({x:e,y:t,paths:n,background:!1}),Wn().then(_t,()=>_t(!1)))},[]);(0,H.useEffect)(()=>{if(ve)return it(ve,I.size>0?vt:null),()=>it(ve,null)},[ve,I,vt]),(0,H.useEffect)(()=>{L(new Set),ut(null),rt(null),He.current=null},[e?.path]),(0,H.useEffect)(()=>{Ze(s)},[s]),(0,H.useEffect)(()=>{L(new Set),ut(null),He.current=null},[C]);let yt=e=>{Ve.current={y:e.clientY,height:Xe},e.currentTarget.setPointerCapture(e.pointerId)},bt=e=>{let t=Ve.current;if(!t)return;let n=Math.max(qs,Math.round(window.innerHeight*.7));Ze(Math.min(n,Math.max(qs,t.height+t.y-e.clientY)))},xt=e=>{Ve.current&&(Ve.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(Xe))},St=()=>{Ze(Ks),c?.(Ks)},Ct=r.query.length>0,wt=(0,H.useMemo)(()=>zs.filter(e=>i.columns?.includes(e.id)),[i.columns]),Tt=i.columns?.includes(`linkTarget`)??!1,Et=(0,H.useCallback)(e=>Math.min(Ws,Math.max(Us,Qe[e.id]??e.width)),[Qe]),Dt=(0,H.useMemo)(()=>`minmax(160px, 1fr) ${wt.map(e=>`${Et(e)}px`).join(` `)}`.trim(),[wt,Et]),Ot=(0,H.useRef)(null),kt=(0,H.useRef)(null),At=()=>Math.floor(kt.current?.getBoundingClientRect().width??Gs),jt=e=>{let t=wt[0];t&&(e.preventDefault(),e.stopPropagation(),Ot.current={left:{id:t.id,start:Et(t)},startX:e.clientX,nameStart:At()})},Mt=(e,t)=>{let n=wt[t],r=wt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),Ot.current={left:{id:n.id,start:Et(n)},right:{id:r.id,start:Et(r)},startX:e.clientX,nameStart:0})},Nt=e=>$e(t=>{let n={...t};return delete n[e],Te(Vs,n),n});(0,H.useEffect)(()=>{let e=e=>{let t=Ot.current;if(!t)return;let n=e.clientX-t.startX;$e(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Gs),i=Math.min(Math.min(Ws,t.left.start+r),Math.max(Us,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Ws,Math.max(Us,t.left.start+n)),a=Math.min(Math.min(Ws,r-Us),Math.max(Math.max(Us,r-Ws),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{Ot.current&&(Ot.current=null,$e(e=>(Te(Vs,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,H.useEffect)(()=>{let e=()=>$e(()=>(Te(Vs,{}),{}));return window.addEventListener(Hs,e),()=>window.removeEventListener(Hs,e)},[]);let Pt=(0,H.useMemo)(()=>({query:r?.query??``,matchCase:r?.matchCase??!1,regex:r?.regex??!1}),[r?.query,r?.matchCase,r?.regex]),Ft=r?.mode??`dim`,It=(0,H.useDeferredValue)(Pt),V=(0,H.useMemo)(()=>e?Qs(e.entries.map(t=>{let n=t.isDirectory?Hr(Oe,t.fullPath):void 0,r=n?.name||t.name;return{entry:t,place:n,label:r,ranges:Ct?oe(r,It):null,tags:e.tags[t.name]??[],cut:te.has(t.fullPath)}}).filter(e=>!Ct||Ft===`dim`||e.ranges!==null),i,e,F):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Ct,It,Ft,Oe,i.sort,i.sortDescending,F,te]);tt.current=V,(0,H.useEffect)(()=>{De!==0&&L(new Set(tt.current.map(e=>e.entry.fullPath)))},[De]),(0,H.useEffect)(()=>{Ce!==0&&L(new Set(tt.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[Ce]);let Lt=Math.max(40,i.iconSize+20),Rt=Math.max(0,Math.floor(ze.top/Lt)-4),Bt=Math.min(V.length,Rt+Math.ceil(ze.height/Lt)+10),Vt=(0,H.useMemo)(()=>V.slice(Rt,Bt),[V,Rt,Bt]);(0,H.useEffect)(()=>{we&&V.length>0&&Bt>=V.length&&we()},[we,V.length,Bt]),(0,H.useEffect)(()=>{let e=Ne.current;if(!e||i.mode!==`list`)return;e.scrollTop=0,Be({top:0,height:e.clientHeight});let t=()=>Be(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,H.useEffect)(()=>{Be(e=>({...e,top:0})),Ne.current&&(Ne.current.scrollTop=0)},[e?.path]),(0,H.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=V.findIndex(e=>e.entry.fullPath===r.currentPath),t=Ne.current;if(e<0||!t)return;let n=e*Lt;(n<t.scrollTop||n+Lt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else ke.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,V,Lt]);let[Ht,Ut]=(0,H.useState)(0),Wt=(0,H.useRef)(!1),Gt=(0,H.useMemo)(()=>V.slice(Ht,Ht+Le),[V,Ht,Le]);(0,H.useEffect)(()=>()=>{Pe.current!==0&&cancelAnimationFrame(Pe.current)},[]),(0,H.useEffect)(()=>{let e=Ae.current;if(!e||e.length===0)return;let t=e.filter(e=>V.some(t=>a(t.entry.fullPath,e)));if(t.length===0)return;Ae.current=null;let n=t[0],r=V.findIndex(e=>a(e.entry.fullPath,n));r>=0&&Re(e=>Math.max(e,r+Rs)),L(new Set(t)),He.current=n,i.mode===`list`&&Ne.current&&r>=0?Ne.current.scrollTop=Math.max(0,r*Lt-Ne.current.clientHeight/2):requestAnimationFrame(()=>ke.current?.scrollIntoView({block:`nearest`}))},[V,Lt,i.mode]),(0,H.useEffect)(()=>{Re(Rs),Ut(0)},[e?.path]),(0,H.useEffect)(()=>{if(!r.currentPath)return;let e=V.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&Re(t=>Math.max(t,e+Rs))},[r.currentPath,V]);let Kt=(0,H.useCallback)(e=>{if(!(e.scrollTop+e.clientHeight<e.scrollHeight-600)){if(Le>=1200){let t=e.scrollHeight,n=e.scrollTop;Wt.current=!0,Ut(e=>Math.min(e+Rs,V.length)),requestAnimationFrame(()=>{e.scrollTop=Math.max(0,n-(t-e.scrollHeight)),Wt.current=!1})}else Re(e=>Math.min(V.length,e+Rs));we?.()}},[Le,V.length,we]),qt=(0,H.useCallback)(e=>{if(Wt.current||Ht===0||e.scrollTop>e.clientHeight)return;let t=e.scrollHeight,n=e.scrollTop;Wt.current=!0,Ut(e=>Math.max(0,e-Rs)),requestAnimationFrame(()=>{e.scrollTop=n+(e.scrollHeight-t),Wt.current=!1})},[Ht]),Jt=i.mode===`grid`,Yt=(0,H.useMemo)(()=>{if(!Jt)return[];if(!de)return tc(Gt,ec);let e=[],t=new Map;for(let n of Gt){let r=de(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[Gt,Jt,de]),Xt=(0,H.useMemo)(()=>o?V.filter(e=>!e.entry.isDirectory&&Lr(e.entry.name)):[],[V,o]),Zt=Xt.length,Qt=(0,H.useMemo)(()=>Xt.slice(0,Ls),[Xt]),$t=(0,H.useMemo)(()=>o?tc(Qt,$s):[],[Qt,o]),en=(0,H.useMemo)(()=>$t.flatMap(e=>e.rows.map(e=>e.entry.fullPath)),[$t]),tn=en.filter(e=>I.has(e)).length,nn=en.length>0&&tn===en.length,rn=tn>0&&!nn,an=(0,H.useMemo)(()=>V.map(e=>e.entry.fullPath),[V]),on=(0,H.useMemo)(()=>Jt?Yt.flatMap(e=>e.rows.map(e=>e.entry.fullPath)):an,[an,Jt,Yt]),sn=V.length>0&&I.size>=V.length,cn=I.size>0&&!sn,ln=()=>{ye||(sn?gn():L(new Set(an)))},un=(0,H.useCallback)((e,t)=>{ye||e.length===0||(L(n=>{let r=new Set(n);for(let n of e)t?r.add(n):r.delete(n);return r}),t&&(He.current=e[0]??null))},[ye]),dn=e?.path??``,fn=(0,H.useCallback)((e,t)=>{if(ye){He.current=t,L(new Set([t]));return}let n=e.ctrlKey||e.metaKey;L(r=>{if(e.shiftKey&&He.current!==null){let e=an.indexOf(He.current),i=an.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(an[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),He.current=t,e}return He.current=t,new Set([t])})},[an,ye]),pn=(0,H.useCallback)((e,t)=>{Ge.current=!1,fn(e,t)},[fn]),mn=(0,H.useCallback)((e,t)=>{Ge.current=!0,fn(e,t)},[fn]),hn=(0,H.useCallback)(e=>{ye?(He.current=e,L(new Set([e]))):(He.current=e,L(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[ye]),gn=(0,H.useCallback)(()=>{He.current=null,Ge.current=!1,L(new Set)},[]);(0,H.useEffect)(()=>{if(Se===0||!xe||B.current===Se||!e?.entries.some(e=>e.fullPath===xe))return;B.current=Se,He.current=xe,L(new Set([xe])),ut({path:xe,value:_(xe)});let t=V.findIndex(e=>e.entry.fullPath===xe),n=Ne.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*Lt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(xe)}"]`)?.scrollIntoView({block:`nearest`})})}},[Ne,e,xe,Se,Lt,V,i.mode]),(0,H.useEffect)(()=>{if(!lt)return;let e=V.findIndex(e=>e.entry.fullPath===lt.path),t=Ne.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*Lt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(lt.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[Ne,lt,Lt,V,i.mode]);let _n=(0,H.useCallback)(()=>rt(null),[]),vn=(0,H.useCallback)((e,t)=>{e.isDirectory?f(e.fullPath,kr(t)):p?.(e.fullPath,kr(t))},[f,p]),yn=(0,H.useCallback)((e,t,n)=>{Ye({entry:e,x:t,y:n})},[]),bn=(0,H.useRef)(null),xn=(0,H.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Go(e,I.has(n)?[...I]:[n])},[I]),Sn=(0,H.useCallback)(e=>{if(!Bo(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);bn.current=t?.dataset.directory===`true`?t.dataset.path??dn:dn,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[dn]),Cn=(0,H.useCallback)(e=>{if(me)return;let{paths:t,move:n}=Vo(e),r=bn.current??dn;bn.current=null,t.length!==0&&E&&(e.preventDefault(),E(t,r,!e.ctrlKey&&n))},[dn,E,me]),wn=(0,H.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),me||!t&&!pe)return;let n=et.current;t&&!n.has(t)&&L(new Set([t])),t&&(He.current=t);let r=t?n.has(t)?[...n]:[t]:[];rt({x:e.clientX,y:e.clientY,paths:r,background:!t}),Wn().then(_t,()=>_t(!1))},[pe,dn]),Tn=(0,H.useCallback)(()=>w?.(),[w]),En=(e,t)=>{He.current=e,L(new Set([e])),t&&ut({path:e,value:_(e)}),Tn()},Dn=ot&&(0,Z.jsx)(wi,{initialDirectory:dn,initialName:ot.name,onCancel:()=>R(null),onCompress:async e=>{let t=await gr(ot.paths,e);return!t.ok||!t.path?(Me(t.error??F(`could_not_create_the_archive`)),!1):(En(t.path,!1),!0)}}),On=async(e,t=!1)=>{let n=e,r=t;if(e.some(Ss)){let t=[];for(let n of e)if(!Ss(n))t.push(n);else{if(tt.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){Me(F(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await Es(n))}catch(e){Me(e instanceof Error?e.message:F(`the_file_could_not_be_copied`));return}}n=t,r=!1}await Un(n,r)&&(_t(!0),T?.())},kn=async e=>{if(!e)return;let t=await Xn(e);t.cancelled||(t.ok?(Ae.current=t.created,Tn(),j?.()):Me(F(`nothing_on_the_clipboard_could_be_pasted_here`)))},An=async(e,t=!1)=>{if(!dn)return;let n=e===null?await $n(dn,t):await rr(dn,e);!n.ok||n.path===null?Me(n.error??F(`could_not_create_the_item`)):(He.current=n.path,L(new Set([n.path])),ut({path:n.path,value:_(n.path)}),Tn())},jn=e=>{L(new Set([e.fullPath])),He.current=e.fullPath,ut({path:e.fullPath,value:e.name})},Mn=(0,H.useCallback)(e=>ut(t=>t&&{...t,value:e}),[]),U=(0,H.useCallback)(()=>ut(null),[]),W=(0,H.useCallback)(async()=>{let e=dt.current;if(ut(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=tt.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await Qn(e.path,t);r.ok?(gn(),r.path&&ee?.(e.path,r.path),Tn(),window.setTimeout(()=>Tn(),250)):Me(r.error??F(`could_not_rename_the_entry`))},[gn,ee,Tn,F]),Nn=async(e,t=!1)=>{if((t||ie)&&!await Pn(e,t))return;let n=t,r=await Zn(e,n);if(!r.ok&&r.needsPermanent){if(!await Pn(e,!0))return;n=!0,r=await Zn(e,!0)}if(!r.ok&&r.needsRunningConfirm){if(!await Fn(e,n,r.running??[],!1))return;r=await Zn(e,n,!0)}if(!r.ok&&!r.needsRunningConfirm&&(r.running?.length??0)>0)await Fn(e,n,r.running??[],!0);else if(r.ok)gn(),Tn();else{if(r.cancelled)return;Me(r.error??F(n?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},Pn=(0,H.useCallback)((e,t)=>new Promise(n=>ct({paths:e,permanent:t,resolve:n})),[]),Fn=(0,H.useCallback)((e,t,n,r)=>new Promise(i=>ct({paths:e,permanent:t,running:!0,blocked:r,programs:n,resolve:i})),[]),In=(0,H.useCallback)(e=>{ct(t=>(t?.resolve(e),null))},[]),G=(0,H.useCallback)(()=>Ge.current&&qe.current!==null,[]),Ln=(0,H.useCallback)(()=>G()?en:on,[G,en,on]),Rn=(0,H.useCallback)(e=>{let t=G(),n=t?qe.current:i.mode===`grid`?Ke.current:Ne.current;if(!n||!t&&i.mode===`list`&&(e===`left`||e===`right`))return;let r=Ln();if(r.length===0)return;let a=He.current&&r.includes(He.current)?He.current:I.size===1?[...I][0]:null,o=[...n.querySelectorAll(`[data-path]`)],s=a?o.find(e=>e.dataset.path===a):void 0,c=a?r.indexOf(a):-1,l=e===`left`?-1:1,u;u=s?e===`left`||e===`right`?r[((c<0?l>0?-1:0:c)+l+r.length)%r.length]:Xs(o,s.getBoundingClientRect(),e)?.dataset.path??(c>=0?r[c+(e===`down`?1:-1)]:r[0]):o[0]?.dataset.path??r[0],u&&(L(new Set([u])),He.current=u,window.requestAnimationFrame(()=>{n.querySelector(`[data-path="${CSS.escape(u)}"]`)?.scrollIntoView({block:`nearest`})}))},[Ln,I,G,i.mode]);(0,H.useEffect)(()=>{if(!S||nt)return;let e=e=>{if(Pr(e.target))return;ft.current?.();let t=Ar(e),n=[...I],r=n.length===1?V.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`arrowleft`||t===`arrowright`)e.preventDefault(),Rn(t.slice(5));else if(t===`home`||t===`end`){let n=Ln();if(n.length===0)return;e.preventDefault();let r=t===`home`?n[0]:n[n.length-1];L(new Set([r])),He.current=r,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(r)}"]`)?.scrollIntoView({block:`nearest`})})}else Y(x,`copy`,t)&&i(()=>{n.length>0&&On(n)}),Y(x,`duplicate`,t)&&i(()=>{n.length!==0&&dn&&Kn(n,dn,!1).then(e=>{e.ok&&(e.created.length>0&&L(new Set(e.created)),Tn())})}),Y(x,`cut`,t)&&i(()=>{n.length>0&&On(n,!0)}),Y(x,`paste`,t)&&i(()=>void kn(dn)),Y(x,`delete`,t)&&i(()=>{n.length>0&&Nn(n)}),Y(x,`deletePermanently`,t)&&i(()=>{n.length>0&&Nn(n,!0)}),Y(x,`selectAll`,t)&&i(()=>{let e=Ue.current&&o&&Qt.length>0?Qt.map(e=>e.entry.fullPath):an;L(new Set(e)),Ee?.(),He.current=e[0]??null}),Y(x,`invertSelection`,t)&&i(()=>{L(new Set(an.filter(e=>!I.has(e)))),He.current=an[0]??null}),Y(x,`rename`,t)&&r&&i(()=>void jn(r)),Y(x,`open`,t)&&r&&i(()=>{r.isDirectory?f(r.fullPath):p?.(r.fullPath)}),Y(x,`newFolder`,t)&&i(()=>void An(null)),Y(x,`terminal`,t)&&i(()=>void cr(dn)),Y(x,`properties`,t)&&i(()=>void ir(n.length>0?n:dn?[dn]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[an,On,An,dn,S,nt,f,p,Ln,kn,Nn,jn,V,I,x,Rn]);let zn=z?.running?(0,Z.jsx)(Li,{confirmLabel:z.permanent?F(`delete`):F(`move`),message:z.blocked?F(`programs_are_using_target_close_them_and_try_again`,{programs:cc(z.programs),target:z.paths.length===1?F(`this_item`):F(`count_items`,{count:z.paths.length})}):F(`programs_are_using_target_continue`,{programs:cc(z.programs),target:z.paths.length===1?F(`this_item`):F(`count_items`,{count:z.paths.length})}),onCancel:()=>In(!1),onConfirm:z.blocked?void 0:()=>In(!0),programs:z.programs??[]}):z?(0,Z.jsx)(We,{confirmLabel:z.permanent?F(`delete`):F(`move`),danger:z.permanent,message:z.permanent?F(`permanently_delete_target_this_cannot_be_undone`,{target:z.paths.length===1?F(`this_item`):F(`count_items`,{count:z.paths.length})}):F(`move_target_to_the_recycle_bin`,{target:z.paths.length===1?F(`this_item`):F(`count_items`,{count:z.paths.length})}),onCancel:()=>In(!1),onConfirm:()=>In(!0),open:!0,title:z.permanent?F(`delete_permanently`):F(`move_to_the_recycle_bin`)}):null,K=(0,H.useMemo)(()=>{if(!e||I.size===0)return null;let t=an.find(e=>I.has(e));return t?V.find(e=>e.entry.fullPath===t)?.entry??null:null},[an,e,V,I]),Bn=(0,H.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:_(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:F(`type`),value:F(`folder`)},{label:F(`location`),value:e.parent??`—`},{label:F(`path`),value:e.path},{label:F(`size`),value:m(t)},{label:F(`items`),value:y(F,n,`k_1_item`,`count_items`)},{label:F(`modified`),value:`—`},{label:F(`created`),value:`—`},{label:F(`attributes`),value:`—`}]}},[e,F]),Vn=(0,H.useMemo)(()=>{if(!K||!e)return null;let t=K.isDirectory?e.folderSizes[K.name]:void 0,n=e.tags[K.name]??[],r=K.name.lastIndexOf(`.`),i=r>0&&r<K.name.length-1?K.name.slice(r+1).toUpperCase():`—`;return{name:K.name,path:K.fullPath,isDirectory:K.isDirectory,size:K.size,modified:K.modified,created:K.created,fields:[{label:F(`type`),value:Yr(K.name,K.isDirectory,K.linkTarget,F)},...K.isEncrypted?[{label:F(`encryption`),value:F(`password_required`)}]:[],{label:F(`extension`),value:K.isDirectory?`—`:i},{label:F(`location`),value:e.path},{label:F(`full_path`),value:K.fullPath},{label:F(`size`),value:K.isDirectory?t===void 0?`—`:m(t):m(K.size)},...K.isDirectory?[{label:F(`items`),value:`${e.counts[K.name]??`—`}`}]:[],{label:F(`modified`),value:d(K.modified),time:K.modified},{label:F(`created`),value:d(K.created),time:K.created},{label:F(`link_status`),value:K.linkTarget==null?K.linkCount>1?F(`hard_link`):`—`:K.linkValid?`ok`:F(`broken`)},...K.linkTarget?[{label:F(`target`),value:K.linkTarget}]:[],...K.linkCount>1?[{label:F(`links`),value:String(K.linkCount)}]:[],{label:F(`attributes`),value:[K.isHidden?F(`hidden`):``,K.isSystem?F(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:F(`tags`),value:n.join(`, `)}]:[]]}},[e,K,F]),Hn=nt?.paths.length===1?nt.paths[0]:null,Gn=Hn?V.find(e=>e.entry.fullPath===Hn)?.entry:void 0,qn=Gn?{path:Gn.fullPath,isDirectory:Gn.isDirectory}:null,Jn=Vn??Bn,Yn=(0,H.useRef)(le);Yn.current=le,(0,H.useEffect)(()=>{Yn.current?.(Jn)},[le,Jn]);let er=N&&Jn&&(0,Z.jsx)(aa,{info:Jn,onWidth:ht,selectionNote:I.size>1?y(F,I.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:ae,videoAutoplay:se,width:pt});return n&&!e?(0,Z.jsx)(ul,{children:(0,Z.jsx)(fl,{children:n})}):!e&&!t?(0,Z.jsx)(ul,{children:(0,Z.jsx)(dl,{children:F(`nothing_selected`)})}):i.mode===`grid`?(0,Z.jsxs)(Dc,{onPointerDown:ue,children:[(0,Z.jsxs)(Oc,{children:[(0,Z.jsxs)(Ic,{ref:Ke,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||gn()},onContextMenu:e=>wn(e),onDragOver:Sn,onDragStart:xn,onDrop:Cn,onScroll:e=>{fe?.(e.currentTarget),Kt(e.currentTarget),qt(e.currentTarget)},children:[v&&V.length>0&&(0,Z.jsxs)(wc,{children:[(0,Z.jsx)(Sc,{$checked:!ye&&sn,$partial:!ye&&cn,"aria-label":F(sn?`select_none`:`select_all`),disabled:ye,onClick:e=>{e.stopPropagation(),ln()},title:F(sn?`select_none`:`select_all`),type:`button`,children:sn?(0,Z.jsx)(zt,{size:10}):cn?(0,Z.jsx)(Cc,{}):null}),(0,Z.jsx)(`span`,{children:F(sn?`select_none`:`select_all`)})]}),t&&!e?(0,Z.jsx)(Vc,{$size:i.gridSize,children:(0,Z.jsx)(fc,{size:i.gridSize})}):(0,Z.jsx)(mc,{counts:e?.counts,currentPath:Ct?r.currentPath:null,groups:Yt,gridSize:i.gridSize,innerRef:ke,onContextMenu:wn,onOpen:f,onOpenFile:p,onRenameCancel:U,onRenameChange:Mn,onRenameCommit:W,onSelect:pn,onToggle:hn,onTogglePaths:ye?void 0:un,openOnSingleClick:b,renaming:lt,searching:Ct,selected:I,showCheckboxes:v,showTarget:Tt}),!t&&e&&V.length===0&&(0,Z.jsx)(ll,{children:(0,Z.jsx)(dl,{children:n??(Ct&&r.mode===`hide`?F(`no_entries_match_the_search`):F(`this_folder_is_empty`))})}),P]}),nt&&(0,Z.jsx)(si,{canPaste:gt,directory:dn,platform:D,allowCompression:!0,menu:nt,onAddToTray:ne,onAddFavorite:O,onRemoveFavorite:re,favoritePaths:k,onExtractArchive:A,onArchiveCreated:En,onClose:_n,onCompressTo:(e,t)=>R({paths:e,name:t}),onCopy:On,onCreateFile:e=>void An(e),onCreateFolder:e=>void An(null,e),onDelete:Nn,onOpen:f,onOpenFile:p,onPaste:kn,onRefresh:Tn,onRename:e=>{let t=V.find(t=>t.entry.fullPath===e)?.entry;t&&jn(t)},shortcuts:x,target:qn}),Dn,zn]}),er]}):(0,Z.jsxs)(Dc,{onPointerDown:ue,children:[(0,Z.jsxs)(Oc,{children:[(0,Z.jsxs)(kc,{onScroll:e=>{Ne.current&&Ne.current.scrollLeft!==e.currentTarget.scrollLeft&&(Ne.current.scrollLeft=e.currentTarget.scrollLeft)},ref:je,style:{gridTemplateColumns:Dt},children:[(0,Z.jsxs)(yc,{ref:kt,children:[v&&(0,Z.jsx)(Sc,{$checked:!ye&&sn,$partial:!ye&&cn,"aria-label":F(sn?`select_none`:`select_all`),disabled:ye,onClick:e=>{e.stopPropagation(),ln()},title:F(sn?`select_none`:`select_all`),type:`button`,children:sn?(0,Z.jsx)(zt,{size:10}):cn?(0,Z.jsx)(Cc,{}):null}),(0,Z.jsxs)(Ac,{onClick:()=>l(`name`),type:`button`,children:[F(`name`),Ys(i,`name`)]}),(0,Z.jsx)(xc,{"aria-label":F(`resize_column`),onDoubleClick:()=>wt[0]&&Nt(wt[0].id),onPointerDown:jt,role:`separator`})]}),wt.map((e,t)=>(0,Z.jsxs)(bc,{children:[(0,Z.jsxs)(Ac,{onClick:()=>l(e.id),type:`button`,children:[F(e.label),Ys(i,e.id)]}),t<wt.length-1&&(0,Z.jsx)(xc,{"aria-label":F(`resize_column`),onDoubleClick:()=>Nt(e.id),onPointerDown:e=>Mt(e,t),role:`separator`})]},e.id))]}),(0,Z.jsxs)(jc,{onClick:e=>{e.target===e.currentTarget&&gn()},onContextMenu:e=>wn(e),onDragOver:Sn,onDragStart:xn,onDrop:Cn,onScroll:e=>{let t=e.currentTarget;je.current&&je.current.scrollLeft!==t.scrollLeft&&(je.current.scrollLeft=t.scrollLeft),Ie.current=t,Pe.current===0&&(Pe.current=requestAnimationFrame(()=>{Pe.current=0;let e=Ie.current;e&&Be(t=>t.top===e.scrollTop&&t.height===e.clientHeight?t:{top:e.scrollTop,height:e.clientHeight})}))},ref:Ne,children:[t&&!e?(0,Z.jsx)(dc,{template:Dt,columns:wt.length}):(0,Z.jsxs)(Z.Fragment,{children:[Rt>0&&(0,Z.jsx)(`div`,{style:{height:Rt*Lt}}),Vt.map(t=>{let n=t.entry.fullPath;return(0,Z.jsx)(gc,{current:Ct&&n===r.currentPath,dim:Ct&&t.ranges===null,height:Lt,iconSize:i.iconSize,innerRef:ke,folderSizes:e.folderSizes,counts:e.counts,tagColors:e.tagColors,onContextMenu:wn,onOpen:vn,onRenameCancel:U,onRenameChange:Mn,onRenameCommit:W,onSelect:pn,onTagEdit:yn,onToggle:hn,openOnSingleClick:b,renaming:lt?.path===n?{value:lt.value}:null,row:t,selected:I.has(n),showCheckboxes:v,showTarget:Tt,template:Dt,visible:wt},n)}),Bt<V.length&&(0,Z.jsx)(`div`,{style:{height:(V.length-Bt)*Lt}})]}),!t&&e&&V.length===0&&(0,Z.jsx)(ul,{children:(0,Z.jsx)(dl,{children:n??(Ct&&r.mode===`hide`?F(`no_entries_match_the_search`):F(`this_folder_is_empty`))})})]}),o&&Xt.length>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Mc,{onDoubleClick:St,onPointerDown:yt,onPointerMove:bt,onPointerUp:xt,title:F(`drag_to_resize_double_click_to_reset`)}),(0,Z.jsxs)(Nc,{onPointerEnter:()=>{Ue.current=!0},onPointerLeave:()=>{Ue.current=!1},style:{height:Xe},children:[(0,Z.jsxs)(Pc,{children:[v&&!ye&&en.length>0&&(0,Z.jsx)(Sc,{$checked:nn,$partial:rn,"aria-label":F(nn?`select_none`:`select_all`),disabled:ye,onClick:e=>{e.stopPropagation(),un(en,!nn)},title:F(nn?`select_none`:`select_all`),type:`button`,children:nn?(0,Z.jsx)(zt,{size:10}):rn?(0,Z.jsx)(Cc,{}):null}),F(`preview`),(0,Z.jsx)(Fc,{children:Zt>Ls?`${Qt.length} / ${Zt}`:Zt})]}),(0,Z.jsx)(Ic,{ref:qe,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||gn()},onContextMenu:e=>wn(e),children:(0,Z.jsx)(mc,{counts:e?.counts,currentPath:Ct?r.currentPath:null,groups:$t,gridSize:i.gridSize,onContextMenu:wn,onOpen:f,onOpenFile:p,onSelect:mn,onToggle:hn,onTogglePaths:ye?void 0:un,openOnSingleClick:b,searching:Ct,selected:I,showCheckboxes:v,showTarget:Tt})})]})]}),Je&&e&&(0,Z.jsx)(Do,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Je.entry.name,e,t),onClose:()=>Ye(null),tags:e.tags[Je.entry.name]??[],x:Je.x,y:Je.y}),nt&&(0,Z.jsx)(si,{canPaste:gt,directory:dn,platform:D,allowCompression:!0,menu:nt,onAddToTray:ne,onAddFavorite:O,onRemoveFavorite:re,favoritePaths:k,onExtractArchive:A,onArchiveCreated:En,onClose:_n,onCompressTo:(e,t)=>R({paths:e,name:t}),onCopy:On,onCreateFile:e=>void An(e),onCreateFolder:e=>void An(null,e),onDelete:Nn,onOpen:f,onOpenExternally:g,onOpenFile:p,onSelectEntry:h,onPaste:kn,onRefresh:Tn,onRename:e=>{let t=V.find(t=>t.entry.fullPath===e)?.entry;t&&jn(t)},shortcuts:x,target:qn}),Dn,zn]}),er]})}function Ys(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}function Xs(e,t,n){let r=n===`up`||n===`down`,i=n===`down`||n===`right`?1:-1,a=e=>r?{ahead:e.top+e.height/2,apart:e.left+e.width/2}:{ahead:e.left+e.width/2,apart:e.top+e.height/2},o=a(t),s=null,c=1/0;for(let t of e){let{ahead:e,apart:n}=a(t.getBoundingClientRect()),r=(e-o.ahead)*i;if(r<=1)continue;let l=r+Math.abs(n-o.apart)*4;l<c&&(c=l,s=t)}return s}var Zs=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Qs(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Yr(e.name,e.isDirectory,e.linkTarget,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Zs.compare(String(r),String(i));return t.sortDescending?-o:o})}var $s=Fr.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Ir(t.entry.name)===e})),ec=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...$s.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function tc(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function nc(e){return Math.max(24,Math.min(e-56,160))}function rc(e,t,n,r,i){switch(e){case`type`:return Yr(t.name,t.isDirectory,t.linkTarget,i);case`size`:return lc(t,n);case`modified`:return d(t.modified);case`created`:return d(t.created);case`items`:return t.isDirectory?r[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:i(`broken`);default:return``}}function ic({name:e,ranges:t}){if(!t||t.length===0)return(0,Z.jsx)(Z.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,Z.jsx)(cl,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,Z.jsx)(Z.Fragment,{children:n})}var ac=new WeakMap,oc=null;function sc(e,t,n){return oc??=new IntersectionObserver(e=>{for(let t of e){if(!t.isIntersecting)continue;let e=ac.get(t.target);ac.delete(t.target),oc?.unobserve(t.target),e?.()}},{rootMargin:n}),ac.set(e,t),oc.observe(e),()=>{ac.delete(e),oc?.unobserve(e)}}function cc(e){return[...new Set((e??[]).map(e=>e.name))].join(`, `)}function lc(e,t){if(!e.isDirectory)return m(e.size);let n=t[e.name];return n===void 0?`—`:m(n)}function uc({entry:e,size:t=18}){let n=M(),r=(0,H.useRef)(null),[i,a]=(0,H.useState)(!1);(0,H.useEffect)(()=>{if(i)return;let e=r.current;if(e){if(!(`IntersectionObserver`in window))a(!0);else return sc(e,()=>a(!0),`250px`)}},[i]);let o=F(i?e.fullPath:null,e.isDirectory,t>32),s=e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null,c=P(s);return(0,Z.jsxs)(_c,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,Z.jsx)(qr,{name:e.iconSource.slice(5),size:t}):c?(0,Z.jsx)(`img`,{alt:``,height:t,src:c,width:t}):o?(0,Z.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,Z.jsx)(xt,{size:t}):(0,Z.jsx)(qr,{name:Kr(e.name),size:t}),e.isEncrypted&&(0,Z.jsx)(vc,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,Z.jsx)(yt,{size:Math.max(8,Math.round(t*.52))})})]})}function dc({template:e,columns:t}){return(0,Z.jsx)(Z.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,Z.jsxs)(Hc,{style:{gridTemplateColumns:e},children:[(0,Z.jsxs)(Gc,{children:[(0,Z.jsx)(Uc,{style:{flexShrink:0,height:18,width:18}}),(0,Z.jsx)(Uc,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,Z.jsx)(Uc,{style:{width:t%2==0?44:92}},t))]},r))})}function fc({size:e}){return(0,Z.jsx)(Z.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,Z.jsxs)(nl,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,Z.jsx)(rl,{children:(0,Z.jsx)(Uc,{style:{height:e,width:e}})}),(0,Z.jsx)(al,{children:(0,Z.jsx)(Uc,{style:{height:9,width:`${t}%`}})})]},n))})}var pc=(0,H.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:p,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=M(),x=Vr(),S=!e.entry.isDirectory&&Lr(e.entry.name),C=(0,H.useRef)(null),[w,ee]=(0,H.useState)(!1);(0,H.useEffect)(()=>{if(!S||w)return;let e=C.current;if(e){if(!(`IntersectionObserver`in window))ee(!0);else return sc(e,()=>ee(!0),`300px`)}},[S,w]);let T=Je(S&&w?e.entry.fullPath:null,192,e.entry.modified),[te,E]=(0,H.useState)(!1),ne=S&&T!==null&&!te,D=e.entry.fullPath,O=t=>{e.entry.isDirectory?v(D,kr(t)):y?.(D,kr(t))};return(0,Z.jsxs)(nl,{$current:t,$dim:n,$image:ne,$selected:s,onClick:e=>{h(e,D),l&&O(e)},onContextMenu:e=>_(e,D),onDoubleClick:e=>{l||O(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":D,draggable:!u,children:[c&&(0,Z.jsx)(Ec,{$checked:s,onClick:e=>{e.stopPropagation(),g(D)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`deselect`:`select`),type:`button`,children:s&&(0,Z.jsx)(zt,{size:10})}),(0,Z.jsx)(rl,{children:ne?(0,Z.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>E(!0),src:T}):(0,Z.jsx)(il,{children:e.place&&x.useIcons?(0,Z.jsx)(La,{place:e.place,size:r}):(0,Z.jsx)(uc,{entry:e.entry,size:r})})}),(0,Z.jsxs)(al,{children:[u?(0,Z.jsx)(hc,{onCancel:()=>p?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,Z.jsx)(ol,{$broken:e.entry.linkValid===!1,children:(0,Z.jsx)(ic,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,Z.jsxs)(qc,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Z.jsx)(yt,{size:9}),b(`encrypted`)]}),e.cut&&(0,Z.jsxs)(Jc,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,Z.jsx)(It,{size:9}),b(`cut`)]}),(0,Z.jsx)(sl,{children:e.entry.isDirectory?i===void 0?Yr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b):b(`type_count_items`,{type:Yr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b),count:i}):b(`type_size`,{type:Yr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b),size:m(e.entry.size)})}),a&&e.entry.linkTarget&&(0,Z.jsxs)(Xc,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,Z.jsx)(kt,{size:9}),(0,Z.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function mc({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onTogglePaths:p,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:_,onRenameCommit:v,onRenameCancel:y}){let b=M();return(0,Z.jsx)(Z.Fragment,{children:e.map(e=>{let x=e.rows.map(e=>e.entry.fullPath),S=x.filter(e=>s.has(e)).length,C=x.length>0&&S===x.length,w=S>0&&!C;return(0,Z.jsxs)(Lc,{children:[(0,Z.jsxs)(Rc,{children:[c&&p&&x.length>0&&(0,Z.jsx)(Sc,{$checked:C,$partial:w,"aria-label":b(C?`select_none`:`select_all`),onClick:e=>{e.stopPropagation(),p(x,!C)},title:b(C?`select_none`:`select_all`),type:`button`,children:C?(0,Z.jsx)(zt,{size:10}):w?(0,Z.jsx)(Cc,{}):null}),b(e.label),(0,Z.jsx)(zc,{children:e.rows.length}),(0,Z.jsx)(Bc,{})]}),(0,Z.jsx)(Vc,{$size:t,children:e.rows.map(e=>(0,Z.jsx)(pc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:nc(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:y,onRenameChange:_,onRenameCommit:v,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id)})})}function hc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,H.useRef)(null);return(0,H.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,Z.jsx)(Yc,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var gc=(0,H.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,folderSizes:d,counts:f,tagColors:p,innerRef:m,renaming:h,onSelect:g,onToggle:_,onContextMenu:v,onOpen:y,onTagEdit:b,onRenameChange:x,onRenameCommit:S,onRenameCancel:C}){let w=M(),ee=Vr(),T=e.entry.fullPath;return(0,Z.jsxs)(Wc,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{g(t,T),o&&y(e.entry,t)},onContextMenu:e=>v(e,T),onDoubleClick:t=>{o||y(e.entry,t)},ref:t?m:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!h,children:[(0,Z.jsxs)(Gc,{children:[i&&(0,Z.jsx)(Tc,{$checked:r,onClick:e=>{e.stopPropagation(),_(T)},onDoubleClick:e=>e.stopPropagation(),title:w(r?`deselect`:`select`),type:`button`,children:r&&(0,Z.jsx)(zt,{size:10})}),e.place&&ee.useIcons?(0,Z.jsx)(_c,{children:(0,Z.jsx)(La,{place:e.place,size:s})}):(0,Z.jsx)(uc,{entry:e.entry,size:s}),h?(0,Z.jsx)(hc,{onCancel:C,onChange:x,onCommit:S,value:h.value}):(0,Z.jsx)(Kc,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,Z.jsx)(ic,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,Z.jsxs)(qc,{title:w(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Z.jsx)(yt,{size:9}),w(`encrypted`)]}),e.cut&&(0,Z.jsxs)(Jc,{title:w(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,Z.jsx)(It,{size:9}),w(`cut`)]}),a&&e.entry.linkTarget&&(0,Z.jsxs)(Xc,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,Z.jsx)(kt,{size:9}),(0,Z.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,Z.jsx)(Zc,{children:t.id===`tags`?(0,Z.jsx)(Qc,{onClick:t=>{t.stopPropagation(),b(e.entry,t.clientX,t.clientY)},title:w(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=p?.[e]??`#64748b`;return(0,Z.jsx)($c,{$color:t,$ink:Eo(t),children:e},e)}):(0,Z.jsx)(el,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,Z.jsx)(tl,{children:w(`broken`)}):t.id===`modified`?(0,Z.jsx)(R,{value:e.entry.modified}):t.id===`created`?(0,Z.jsx)(R,{value:e.entry.created}):rc(t.id,e.entry,d,f,w)},t.id))]})}),_c=C.span`
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
`,vc=C.span`
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
`,yc=C.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,bc=C.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,xc=C.span`
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
`,Sc=C.button`
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
`,Cc=C.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,wc=C.div`
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
`,Tc=C.button`
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
`,Ec=C(Tc)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Dc=C.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Oc=C.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,kc=C.div`
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
`,Ac=C.button`
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
`,jc=C.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Mc=C.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Nc=C.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Pc=C.div`
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
`,Fc=C.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Ic=C.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Lc=C.section`
    & + & {
        margin-top: 22px;
    }
`,Rc=C.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,zc=C.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Bc=C.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Vc=C.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Hc=C.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Uc=C.span`
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
`,Wc=C.div`
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
`,Gc=C.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Kc=C.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,qc=C.span`
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
`,Jc=C.span`
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
`,Yc=C.input`
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
`,Xc=C.span`
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
`,Zc=C.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Qc=C.button`
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
`,$c=C.span`
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
`,el=C.span`
    color: var(--text-muted);
    font-size: 11px;
`,tl=C.span`
    color: #fca5a5;
`,nl=C.div`
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
`,rl=C.div`
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
`,il=C.span`
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
`,al=C.div`
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
`,ol=C.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,sl=C.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,cl=C.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,ll=C.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,ul=C.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,dl=C.p`
    font-size: 13px;
    color: var(--text-muted);
`,fl=C.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,pl={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},ml=`yafm://`,hl={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function gl(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function _l(e){return`${ml}${e===`home`?`overview`:e}`}function vl(e){return gl(e)?hl[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function yl(e){let t=e.trim();if(t.length===0)return null;if(!gl(t))return t;let n=hl[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?_l(n):null}function bl({location:e,size:t=13}){switch(vl(e)){case`home`:return(0,Z.jsx)(B,{size:t});case`settings`:return(0,Z.jsx)(mt,{size:t});case`recycle`:return(0,Z.jsx)(vn,{size:t});case`gallery`:return(0,Z.jsx)(xt,{size:t});default:return v(e)?(0,Z.jsx)(tn,{size:t}):(0,Z.jsx)(xt,{size:t})}}function xl(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>=0?t.slice(n+1):t}function Sl(){let e=M();return t=>{let n=vl(t);return n?e(pl[n]):xl(t)}}var Cl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,wl=`/assets/bloom-BpfZWiaG.mp4`,Tl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,El=`/assets/drift-BRBSQL2_.mp4`,Dl=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,Ol=`/assets/ember-CtSz0YxR.mp4`,kl=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],Al=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],jl=[{id:`builtin:video:drift`,name:`drift`,url:El,poster:Tl},{id:`builtin:video:ember`,name:`ember`,url:Ol,poster:Dl},{id:`builtin:video:bloom`,name:`bloom`,url:wl,poster:Cl}],Ml=Al.map(e=>({...e,variants:kl.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Rl(zl(e.id,t,!1)),lightUrl:Rl(zl(e.id,t,!0))}))})),Nl=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>kl.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Rl(Bl(e.id,t,!1)),lightUrl:Rl(Bl(e.id,t,!0))}))),Pl=new Map([...Ml.flatMap(e=>e.variants),...Nl].map(e=>[e.id,e])),Fl=new Map(jl.map(e=>[e.id,e]));function Il(e,t=`dark`){if(Fl.has(e))return Fl.get(e).url;let n=Pl.get(e)??Pl.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function Ll(e){return Fl.has(e)}function Rl(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function zl(e,t,n){return e===`dunes`?Kl(t,n):e===`tide`?ql(t,n):Gl(t,n)}function Bl(e,t,n){return e===`skyline`?Hl(t,n):e===`orbit`?Ul(t,n):Vl(t,n)}function Vl({accent:e,secondary:t},n){let r=$(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=$(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=$(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=$(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=$(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    </svg>`}function Hl({accent:e,secondary:t},n){let r=$(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=$(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=$(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=$(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    </svg>`}function Ul({accent:e,secondary:t},n){let r=$(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=$(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=$(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    </svg>`}function Wl(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function $(e,t,n){let[r,i,a]=Wl(e),[o,s,c]=Wl(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Gl({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
</svg>`}function Kl({accent:e,secondary:t},n){let r=$(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=$(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=$(e,t,.25),o=$(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=$(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=$(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
</svg>`}function ql({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
</svg>`}var Jl=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Yl(e){return Jl.test(e)}function Xl({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):c(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=de(i),o=n?.startsWith(`builtin:`)?Il(n,t):r??a,s=r===null?i===null?n!==null&&Ll(n):Yl(i):Yl(r.split(/[?#]/)[0]);if(!n||!o)return null;let l=`blur(${e?.backgroundBlur??Xe().backgroundBlur}px) saturate(${e?.backgroundSaturation??Xe().backgroundSaturation}%) brightness(${e?.backgroundBrightness??Xe().backgroundBrightness}%)`;return(0,Z.jsxs)(Zl,{"aria-hidden":!0,children:[s?(0,Z.jsx)($l,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:l}}):(0,Z.jsx)(Ql,{src:o,style:{filter:l}}),(0,Z.jsx)(eu,{})]})}var Zl=C.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,Ql=C.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,$l=C.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,eu=C.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function tu({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=M(),s=(0,H.useRef)(null),[c,l]=(0,H.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,H.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,ui.createPortal)((0,Z.jsx)(au,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,Z.jsxs)(ou,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Z.jsx)(su,{children:o(`protected_folder`)}),(0,Z.jsx)(cu,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,Z.jsx)(lu,{children:t.map(e=>(0,Z.jsxs)(uu,{children:[(0,Z.jsx)(du,{children:e.path}),(0,Z.jsx)(fu,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,Z.jsx)(pu,{children:nu(o,u,r??!1)}),(0,Z.jsx)(mu,{children:ru(o,u)}),(0,Z.jsx)(hu,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,Z.jsxs)(gu,{children:[(0,Z.jsx)(_u,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,Z.jsx)(vu,{disabled:c>0,onClick:a,type:`button`,children:c>0?iu(o,u,c):iu(o,u,0)})]})]})}),document.body)}function nu(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function ru(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function iu(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var au=C.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${L}
`,ou=C.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${at}
`,su=C.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,cu=C.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,lu=C.div`
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
`,uu=C.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,du=C.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,fu=C.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,pu=C.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,mu=C.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,hu=C.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,gu=C.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,_u=C.button`
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
`,vu=C.button`
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
`;function yu(){let e=M(),[t,n]=(0,H.useState)(null),r=(0,H.useRef)(null),i=(0,H.useRef)(null);(0,H.useEffect)(()=>(Ue(e=>new Promise(t=>{r.current=t,n(e)})),()=>Ue(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,H.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,ui.createPortal)((0,Z.jsx)(bu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,Z.jsxs)(xu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Z.jsx)(Su,{children:e(`notice`)}),(0,Z.jsx)(Cu,{children:t}),(0,Z.jsx)(wu,{children:(0,Z.jsx)(Tu,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var bu=C.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${L}
`,xu=C.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${at}
`,Su=C.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Cu=C.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,wu=C.div`
    display: flex;
    justify-content: flex-end;
`,Tu=C.button`
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
`;function Eu({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=M(),a=(0,H.useRef)(null),o=(0,H.useRef)(null),[s,c]=(0,H.useState)(null);return(0,H.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,H.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,H.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,ui.createPortal)((0,Z.jsxs)(Du,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Ma).map(n=>(0,Z.jsx)(Ou,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Ma[n](16)},n)),(0,Z.jsx)(Ou,{onClick:async()=>{let e=await Qr([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,Z.jsx)(Ft,{size:13})}),r&&(0,Z.jsx)(Ou,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,Z.jsx)(Sn,{size:12})})]}),document.body)]})}var Du=C.div`
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
    ${nt}
    transform-origin: top left;
`,Ou=C.button`
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
`,ku=[{bit:256,group:`owner`,action:`read`},{bit:128,group:`owner`,action:`write`},{bit:64,group:`owner`,action:`execute`},{bit:32,group:`group`,action:`read`},{bit:16,group:`group`,action:`write`},{bit:8,group:`group`,action:`execute`},{bit:4,group:`other`,action:`read`},{bit:2,group:`other`,action:`write`},{bit:1,group:`other`,action:`execute`}];function Au({request:e}){let t=M(),n=(0,H.useRef)(null),r=e.items.length===1,i=e.canUseSystemSheet,[a,o]=(0,H.useState)(`general`),[s,c]=(0,H.useState)(e.items[0]),[l,u]=(0,H.useState)(s.name),[d,f]=(0,H.useState)(Vu(s,`ReadOnly`)),[p,h]=(0,H.useState)(Vu(s,`Hidden`)),[g,v]=(0,H.useState)(Vu(s,`Archive`)),[y,b]=(0,H.useState)(s.unixModeValue??0),[x,S]=(0,H.useState)(!1),[C,w]=(0,H.useState)(null),[ee,T]=(0,H.useState)(null),[te,E]=(0,H.useState)(!1),ne=(0,H.useRef)(!1),[D,O]=(0,H.useState)(null),[re,k]=(0,H.useState)(0),[A,j]=(0,H.useState)(``),[ie,ae]=(0,H.useState)([]),[oe,se]=(0,H.useState)({}),[N,ce]=(0,H.useState)(!1),[le,ue]=(0,H.useState)(!1),[de,fe]=(0,H.useState)(!1),P=(0,H.useRef)(!1),pe=r&&!s.error,me=r&&!s.directory&&!s.error,he=pe&&l.trim()!==s.name,ge=pe&&i&&(d!==Vu(s,`ReadOnly`)||p!==Vu(s,`Hidden`)||!s.directory&&g!==Vu(s,`Archive`)),_e=pe&&!i&&y!==(s.unixModeValue??0),ve=pe&&!i&&(_e||N&&s.directory),ye=D!==null&&!Iu(ie,D.tags),be=D!==null&&re!==D.rating,xe=D!==null&&A!==(D.comment??``),Se=D!==null&&!Lu(oe,D.colors),Ce=ye||be||xe||Se,we=he||ge||ve||Ce,Te=e=>{c(e),u(e.name),f(Vu(e,`ReadOnly`)),h(Vu(e,`Hidden`)),v(Vu(e,`Archive`)),b(e.unixModeValue??0)},De=async()=>{if(!we||x)return!0;S(!0),w(null);try{let e=s.path;if(he){let n=await Qn(e,l.trim());if(!n.ok)return w(n.error??t(`could_not_rename_the_entry`)),!1;e=n.path??e}if(ge||ve){let n=await Rn({path:e,readOnly:i?d:void 0,hidden:i?p:void 0,archive:i&&!s.directory?g:void 0,unixMode:i?void 0:y,recursive:!i&&s.directory?N:void 0});if(!n.ok)return w(n.error??t(`could_not_change_the_properties`)),!1;n.info&&(Te(n.info),e=n.info.path)}if(Ce){if(!await K({path:e,tags:ye?ie:void 0,rating:be?re:void 0,comment:xe?A:void 0,colors:Se?oe:void 0}))return w(t(`could_not_change_the_properties`)),!1;O({tags:[...ie],rating:re,comment:A.length>0?A:null,editable:!0,allTags:(D?.allTags??[]).map(e=>({...e,color:oe[e.name]??e.color})),colors:{...oe}})}if(he&&!ge&&!_e){let t=await G(e);t&&Te(t)}return!0}finally{S(!1)}},F=()=>Fn(),Oe=async()=>{await De()&&F()};(0,H.useEffect)(()=>{a===`hashes`&&!ne.current&&me&&(ne.current=!0,E(!0),Ln(s.path).then(e=>T(e),()=>T({items:[]})).finally(()=>E(!1)))},[a,me,s.path]),(0,H.useEffect)(()=>{a===`details`&&!P.current&&r&&(P.current=!0,zn(s.path).then(e=>{e&&(O(e),k(e.rating),j(e.comment??``),ae(e.tags),se(e.colors))},()=>void 0))},[a,r,s.path]);let ke=async()=>{let e=await G(s.path);e&&Te(e)},Ae=async e=>{if(fe(!1),!pe)return;let n=s.path.replace(/[\\/][^\\/]+$/,``),r=_(s.path),i=e===null?null:e.startsWith(`file:`)?e:`icon:${e}`;await lt(n,r,i)?(c(e=>({...e,iconSource:i})),Ee()):w(t(`could_not_change_the_properties`))};return(0,H.useEffect)(()=>{n.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),Fn()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[]),(0,ui.createPortal)((0,Z.jsx)(Uu,{onPointerDown:e=>{e.target===e.currentTarget&&F()},children:(0,Z.jsxs)(Wu,{role:`dialog`,"aria-modal":`true`,"aria-label":t(`properties`),children:[(0,Z.jsx)(Gu,{children:r?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ku,{disabled:!pe,onClick:()=>fe(e=>!e),title:pe?t(`change_icon`):void 0,type:`button`,children:(0,Z.jsx)(Bu,{info:s})}),de&&(0,Z.jsx)(Eu,{allowDefault:!0,onClose:()=>fe(!1),onPick:e=>void Ae(e),value:s.iconSource?.startsWith(`icon:`)?s.iconSource.slice(5):void 0}),(0,Z.jsxs)(qu,{children:[(0,Z.jsx)(Yu,{"aria-label":t(`name`),disabled:!pe,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Oe()},spellCheck:!1,value:l}),(0,Z.jsx)(Xu,{children:Yr(s.name,s.directory,s.linkTarget,t)})]})]}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ku,{children:(0,Z.jsx)(xt,{size:30})}),(0,Z.jsxs)(qu,{children:[(0,Z.jsx)(Ju,{children:t(`count_items`,{count:e.items.length})}),(0,Z.jsx)(Xu,{children:t(`selection`)})]})]})}),(0,Z.jsx)(Zu,{}),r&&(0,Z.jsxs)(Qu,{role:`tablist`,children:[(0,Z.jsx)($u,{$active:a===`general`,onClick:()=>o(`general`),role:`tab`,type:`button`,children:t(`general`)}),(0,Z.jsx)($u,{$active:a===`details`,onClick:()=>o(`details`),role:`tab`,type:`button`,children:t(`details`)}),me&&(0,Z.jsx)($u,{$active:a===`hashes`,onClick:()=>o(`hashes`),role:`tab`,type:`button`,children:t(`hashes`)}),!i&&(0,Z.jsx)($u,{$active:a===`permissions`,onClick:()=>o(`permissions`),role:`tab`,type:`button`,children:t(`permissions`)})]}),(0,Z.jsxs)(ed,{children:[r?s.error?(0,Z.jsx)(qd,{children:s.error}):a===`general`?(0,Z.jsx)(ju,{info:s,readOnly:d,hidden:p,archive:g,windows:i,editable:pe,onRefresh:()=>void ke(),onReadOnly:f,onHidden:h,onArchive:v}):a===`details`?(0,Z.jsx)(Mu,{info:s,editable:pe&&D!==null,allTags:D?.allTags??[],tags:ie,colors:oe,rating:re,comment:A,onTags:ae,onColors:se,onRating:k,onComment:j}):a===`hashes`?(0,Z.jsx)(Nu,{hashes:ee,hashing:te}):(0,Z.jsx)(Pu,{info:s,mode:y,recursive:N,advanced:le,onAdvanced:ue,onRecursive:ce,onChange:b}):(0,Z.jsx)(Ud,{children:e.items.map(e=>(0,Z.jsxs)(Wd,{children:[(0,Z.jsx)(Gd,{title:e.path,children:e.name}),(0,Z.jsx)(Kd,{children:e.error?e.error:e.directory?t(`folder`):m(e.size)})]},e.path))}),C&&(0,Z.jsx)(qd,{children:C})]}),(0,Z.jsx)(Zu,{}),(0,Z.jsxs)(Jd,{children:[i&&(0,Z.jsx)(Xd,{onClick:()=>void ar(e.items.map(e=>e.path)),type:`button`,children:t(`windows_properties`)}),(0,Z.jsx)(Yd,{}),(0,Z.jsx)(Zd,{disabled:x,onClick:()=>void Oe(),ref:n,type:`button`,children:t(`ok`)}),(0,Z.jsx)(Zd,{disabled:x,onClick:F,type:`button`,children:t(`cancel`)}),(0,Z.jsx)(Zd,{disabled:x||!we,onClick:()=>void De(),type:`button`,children:t(`apply`)})]})]})}),document.body)}function ju({info:e,readOnly:t,hidden:r,archive:i,windows:a,editable:o,onRefresh:s,onReadOnly:c,onHidden:l,onArchive:u}){let d=M(),f=e.path.slice(0,Math.max(0,e.path.length-e.name.length-1)),p=Math.max(0,e.volumeTotal-e.volumeFree),h=e.volumeTotal>0?p/e.volumeTotal:0;return(0,Z.jsxs)(nd,{children:[(0,Z.jsxs)(rd,{children:[(0,Z.jsx)(id,{children:d(`general`)}),(0,Z.jsx)(ad,{onClick:s,title:d(`refresh`),type:`button`,children:(0,Z.jsx)(fn,{size:12})})]}),(0,Z.jsxs)(td,{children:[(0,Z.jsx)(Ru,{label:d(`type`),value:Yr(e.name,e.directory,e.linkTarget,d)}),(0,Z.jsx)(Ru,{label:d(`location`),value:f,wrap:!0}),(0,Z.jsx)(Ru,{label:d(`size`),value:e.size>0?d(`bytes_in_parentheses`,{size:m(e.size),bytes:e.size.toLocaleString()}):`—`}),e.directory&&(0,Z.jsx)(Ru,{label:d(`items`),value:d(`count_files_and_folders`,{files:e.fileCount,folders:e.folderCount})}),!e.directory&&e.sizeOnDisk>0&&(0,Z.jsx)(Ru,{label:d(`size_on_disk`),value:m(e.sizeOnDisk)}),e.fileSystem&&(0,Z.jsx)(Ru,{label:d(`filesystem`),value:e.fileSystem}),e.mountPoint&&(0,Z.jsx)(Ru,{label:d(`mount_point`),value:e.mountPoint,wrap:!0}),e.mountSource&&(0,Z.jsx)(Ru,{label:d(`mount_source`),value:e.mountSource,wrap:!0}),a?(0,Z.jsx)(Ru,{label:d(`attributes`),value:(0,Z.jsxs)(Md,{children:[(0,Z.jsx)(zu,{checked:t,disabled:!o,label:d(`read_only`),onChange:c}),(0,Z.jsx)(zu,{checked:r,disabled:!o,label:d(`hidden`),onChange:l}),!e.directory&&(0,Z.jsx)(zu,{checked:i,disabled:!o,label:d(`archive`),onChange:u})]})}):(0,Z.jsx)(Ru,{label:d(`attributes`),value:e.attributes.map(e=>Hu(d,e)).join(`, `)||`—`}),(0,Z.jsx)(Ru,{label:d(`created`),value:(0,Z.jsx)(Fu,{value:e.created})}),(0,Z.jsx)(Ru,{label:d(`modified`),value:(0,Z.jsx)(Fu,{value:e.modified})}),(0,Z.jsx)(Ru,{label:d(`accessed`),value:(0,Z.jsx)(Fu,{value:e.accessed})})]}),e.volumeTotal>0&&(0,Z.jsxs)(sd,{children:[(0,Z.jsxs)(cd,{children:[(0,Z.jsx)(`span`,{children:d(`free_space`)}),(0,Z.jsxs)(`span`,{children:[m(e.volumeFree),` / `,m(e.volumeTotal)]})]}),(0,Z.jsx)(ld,{children:(0,Z.jsx)(ud,{$tone:n(h),$width:Math.round(h*100)})}),(0,Z.jsxs)(dd,{children:[Math.round((1-h)*100),`%`]})]})]})}function Mu({info:e,editable:t,allTags:n,tags:r,colors:i,rating:a,comment:o,onTags:s,onColors:c,onRating:l,onComment:u}){let d=M(),[f,p]=(0,H.useState)(``),[m,h]=(0,H.useState)(`#2dd4bf`),g=e=>i[e]??n.find(t=>t.name===e)?.color??`#64748b`,_=[...new Set([...n.map(e=>e.name),...r])].sort((e,t)=>e.localeCompare(t)),v=e=>s(r.includes(e)?r.filter(t=>t!==e):[...r,e]),y=(e,t)=>c({...i,[e]:t}),b=()=>{let e=f.trim();e.length!==0&&(r.includes(e)||s([...r,e]),c({...i,[e]:m}),p(``))};return(0,Z.jsxs)(nd,{children:[(0,Z.jsx)(rd,{children:(0,Z.jsx)(id,{children:d(`details`)})}),(0,Z.jsxs)(td,{children:[(0,Z.jsx)(Ru,{label:d(`type`),value:Yr(e.name,e.directory,e.linkTarget,d)}),(0,Z.jsx)(Ru,{label:d(`path`),value:e.path,wrap:!0}),e.linkTarget&&(0,Z.jsx)(Ru,{label:d(`link_target`),value:e.linkTarget,wrap:!0}),e.unixMode&&(0,Z.jsx)(Ru,{label:d(`permissions`),value:(0,Z.jsx)(Pd,{children:e.unixMode})})]}),(0,Z.jsxs)(fd,{children:[(0,Z.jsx)(pd,{children:d(`tags`)}),_.length>0&&(0,Z.jsx)(hd,{children:_.map(e=>{let n=g(e),i=r.includes(e);return(0,Z.jsxs)(gd,{children:[(0,Z.jsx)(io,{ariaLabel:d(`color_of_tag`,{tag:e}),disabled:!t,title:d(`change_this_tag_s_color`),value:n,onChange:t=>y(e,t)}),(0,Z.jsxs)(_d,{$color:n,$ink:Eo(n),$on:i,disabled:!t,onClick:()=>v(e),type:`button`,children:[i&&(0,Z.jsx)(zt,{size:10}),(0,Z.jsx)(`span`,{children:e})]})]},e)})}),(0,Z.jsxs)(md,{children:[(0,Z.jsx)(io,{ariaLabel:d(`color_of_the_new_tag`),disabled:!t,title:d(`color_of_the_new_tag`),value:m,onChange:h}),(0,Z.jsx)(vd,{disabled:!t,onChange:e=>p(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),b())},placeholder:d(`new_tag`),value:f}),(0,Z.jsxs)(yd,{disabled:!t||f.trim().length===0,onClick:b,type:`button`,children:[(0,Z.jsx)(Ft,{size:11}),d(`add`)]})]})]}),(0,Z.jsxs)(fd,{children:[(0,Z.jsx)(pd,{children:d(`rating`)}),(0,Z.jsx)(bd,{children:[1,2,3,4,5].map(e=>(0,Z.jsx)(xd,{$on:e<=a,"aria-label":String(e),disabled:!t,onClick:()=>l(a===e?0:e),type:`button`,children:(0,Z.jsx)(sn,{size:16})},e))})]}),(0,Z.jsxs)(fd,{children:[(0,Z.jsx)(pd,{children:d(`comment`)}),(0,Z.jsx)(Sd,{disabled:!t,onChange:e=>u(e.target.value),rows:3,spellCheck:!1,value:o})]})]})}function Nu({hashes:e,hashing:t}){let n=M(),[r,i]=(0,H.useState)(``);if(t||!e)return(0,Z.jsxs)(Fd,{children:[n(`calculating`),`…`]});if(e.error)return(0,Z.jsx)(qd,{children:e.error});let a=(e.items??[]).filter(e=>e.value.length>0),o=r.trim().toLowerCase(),s=o.length>0?a.some(e=>e.value.toLowerCase()===o):null;return(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(td,{children:a.map(e=>(0,Z.jsx)(Ru,{label:e.name,value:(0,Z.jsxs)(Id,{children:[(0,Z.jsx)(Ld,{children:e.value}),(0,Z.jsx)(Rd,{onClick:()=>void navigator.clipboard.writeText(e.value),title:n(`copy`),type:`button`,children:(0,Z.jsx)(_n,{size:11})})]}),wrap:!0},e.name))}),(0,Z.jsxs)(zd,{children:[(0,Z.jsx)(Bd,{children:n(`paste_a_hash_to_compare`)}),(0,Z.jsx)(Vd,{onChange:e=>i(e.target.value),placeholder:`…`,spellCheck:!1,value:r}),s!==null&&(0,Z.jsx)(Hd,{$ok:s,children:n(s?`hash_matches`:`hash_does_not_match`)})]})]})}function Pu({info:e,mode:t,recursive:n,advanced:r,onAdvanced:i,onRecursive:a,onChange:o}){let s=M(),c=(0,H.useMemo)(()=>ku.map((e,n)=>(t&e.bit)===0?`-`:`rwx`[n%3]).join(``),[t]),l=4|!!e.directory,u=6|!!e.directory,d=[{value:0,label:s(`no_access`)},{value:l,label:s(`view_only`)},{value:u,label:s(`can_view_and_modify`)}],f=e=>ku.filter(t=>t.group===e).reduce((e,n)=>(t&n.bit)===0?e:e|n.bit,0),p=(e,n)=>{let r=ku.filter(t=>t.group===e).reduce((e,t)=>e|t.bit,0);o(t&~r|n&r)};return(0,Z.jsxs)(nd,{children:[(0,Z.jsx)(rd,{children:(0,Z.jsx)(id,{children:s(`permissions`)})}),(0,Z.jsxs)(td,{children:[(0,Z.jsx)(Ru,{label:s(`permissions`),value:(0,Z.jsx)(Pd,{children:c})}),e.owner&&(0,Z.jsx)(Ru,{label:s(`owner`),value:e.owner}),e.group&&(0,Z.jsx)(Ru,{label:s(`group`),value:e.group})]}),(0,Z.jsxs)(fd,{children:[(0,Z.jsx)(pd,{children:s(`permissions`)}),[`owner`,`group`,`other`].map(e=>(0,Z.jsxs)(Cd,{children:[(0,Z.jsx)(wd,{children:s(e)}),(0,Z.jsx)(Td,{onChange:t=>p(e,Number(t.target.value)),value:f(e),children:d.map(e=>(0,Z.jsx)(`option`,{value:e.value,children:e.label},e.value))})]},e))]}),(0,Z.jsxs)(fd,{children:[(0,Z.jsxs)(Ed,{onClick:()=>i(!r),type:`button`,children:[(0,Z.jsx)(`span`,{children:r?`▾`:`▸`}),s(`advanced_permissions`)]}),r&&(0,Z.jsxs)(Dd,{children:[(0,Z.jsx)(kd,{}),(0,Z.jsx)(kd,{children:s(`read`)}),(0,Z.jsx)(kd,{children:s(`write`)}),(0,Z.jsx)(kd,{children:s(`execute`)}),[`owner`,`group`,`other`].map(e=>(0,Z.jsxs)(Od,{children:[(0,Z.jsx)(kd,{children:s(e)}),ku.filter(t=>t.group===e).map(e=>(0,Z.jsx)(kd,{children:(0,Z.jsx)(`input`,{checked:(t&e.bit)!==0,onChange:n=>o(n.target.checked?t|e.bit:t&~e.bit),type:`checkbox`})},e.bit))]},e))]})]}),e.directory&&(0,Z.jsx)(fd,{children:(0,Z.jsx)(zu,{checked:n,label:s(`apply_to_all_subfolders`),onChange:a})})]})}function Fu({value:e}){let t=(0,H.useSyncExternalStore)(fe,De),n=d(e),r=o(e,t);return(0,Z.jsxs)(`span`,{children:[n,r!==n&&(0,Z.jsxs)(od,{children:[` · `,r]})]})}function Iu(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function Lu(e,t){let n=Object.keys(e);return n.length===Object.keys(t).length&&n.every(n=>e[n]===t[n])}function Ru({label:e,value:t,wrap:n=!1}){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Ad,{children:e}),(0,Z.jsx)(jd,{$wrap:n,title:typeof t==`string`?t:void 0,children:t})]})}function zu({checked:e,disabled:t=!1,label:n,onChange:r}){return(0,Z.jsxs)(Nd,{$disabled:t,children:[(0,Z.jsx)(`input`,{checked:e,disabled:t,onChange:e=>r(e.target.checked),type:`checkbox`}),n]})}function Bu({info:e}){let t=e.iconSource,n=t?.startsWith(`file:`)?t.slice(5):null,r=P(n),i=F(t?null:e.path,e.directory,!0);return t?.startsWith(`icon:`)?(0,Z.jsx)(qr,{name:t.slice(5),size:30}):r?(0,Z.jsx)(`img`,{alt:``,height:34,src:r,width:34}):i?(0,Z.jsx)(`img`,{alt:``,src:i}):e.directory?(0,Z.jsx)(xt,{size:30}):(0,Z.jsx)(Yt,{size:30})}function Vu(e,t){return e.attributes.some(e=>e.toLowerCase()===t.toLowerCase())}function Hu(e,t){switch(t.toLowerCase()){case`readonly`:return e(`read_only`);case`hidden`:return e(`hidden`);case`system`:return e(`system`);case`directory`:return e(`folder`);case`archive`:return e(`archive`);case`compressed`:return e(`compressed`);case`encrypted`:return e(`encrypted`);case`reparsepoint`:return e(`link`);case`temporary`:return e(`temporary`);default:return t}}var Uu=C.div`
    position: fixed;
    inset: 0;
    z-index: 3400;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${L}
`,Wu=C.div`
    display: flex;
    flex-direction: column;
    width: min(540px, 100%);
    max-height: min(760px, 88vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${at}
`,Gu=C.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    padding: 16px 18px 12px;
`,Ku=C.button`
    display: grid;
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
`,qu=C.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
    flex: 1;
`,Ju=C.div`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Yu=C.input`
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
`,Xu=C.div`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Zu=C.hr`
    height: 0;
    margin: 0;
    border: 0;
    border-top: 1px solid var(--border-color);
`,Qu=C.div`
    display: flex;
    gap: 2px;
    padding: 8px 18px 0;
`,$u=C.button`
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
`,ed=C.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`,td=C.div`
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 7px 12px;
    padding: 12px 18px 14px;
`,nd=C.div`
    display: flex;
    flex-direction: column;
`,rd=C.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px 18px 0;
`,id=C.div`
    color: var(--text-muted);
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
`,ad=C.button`
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
`,od=C.span`
    color: var(--text-muted);
`,sd=C.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 18px 14px;
`,cd=C.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: var(--text-muted);
    font-size: 11px;
`,ld=C.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: var(--bg-input);
`,ud=C.div`
    height: 100%;
    width: ${({$width:e})=>e}%;
    background: ${({$tone:e})=>e};
    border-radius: 3px;
`,dd=C.div`
    color: var(--text-muted);
    font-size: 10.5px;
    text-align: right;
`,fd=C.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 18px 14px;
`,pd=C.div`
    color: var(--text-muted);
    font-size: 11px;
`,md=C.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
`,hd=C.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 2px;
`,gd=C.div`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,_d=C.button`
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
`,vd=C.input`
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
`,yd=C.button`
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
`,bd=C.div`
    display: flex;
    gap: 2px;
`,xd=C.button`
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
`,Sd=C.textarea`
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
`,Cd=C.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,wd=C.span`
    flex: 0 0 96px;
    color: var(--text-muted);
    font-size: 11.5px;
`,Td=C.select`
    flex: 1;
    padding: 4px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
`,Ed=C.button`
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
`,Dd=C.div`
    display: grid;
    grid-template-columns: 96px repeat(3, 1fr);
    gap: 5px 10px;
    margin-top: 6px;
`,Od=C.div`
    display: contents;
`,kd=C.div`
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
`,Ad=C.div`
    color: var(--text-muted);
    font-size: 11px;
    line-height: 1.5;
`,jd=C.div`
    overflow: ${({$wrap:e})=>e?`visible`:`hidden`};
    color: var(--text-primary);
    font-size: 11.5px;
    line-height: 1.5;
    text-overflow: ellipsis;
    ${({$wrap:e})=>e?`overflow-wrap: anywhere;`:`white-space: nowrap;`}
`,Md=C.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    align-items: center;
`,Nd=C.label`
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
`,Pd=C.span`
    font-family: var(--font-mono);
`,Fd=C.p`
    margin: 0;
    padding: 14px 18px;
    color: var(--text-muted);
    font-size: 11.5px;
`,Id=C.span`
    display: flex;
    align-items: flex-start;
    gap: 6px;
    min-width: 0;
`,Ld=C.span`
    min-width: 0;
    overflow-wrap: anywhere;
    font-family: var(--font-mono);
    font-size: 10.5px;
    line-height: 1.45;
`,Rd=C.button`
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
`,zd=C.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 18px 14px;
`,Bd=C.span`
    color: var(--text-muted);
    font-size: 11px;
`,Vd=C.input`
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
`,Hd=C.span`
    color: ${({$ok:e})=>e?`#4ade80`:`#fca5a5`};
    font-size: 11px;
    font-weight: 600;
`,Ud=C.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 320px;
    overflow-y: auto;
    padding: 10px 18px 12px;
`,Wd=C.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 2px 0;
`,Gd=C.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Kd=C.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-size: 10.5px;
`,qd=C.p`
    margin: 0;
    padding: 0 18px 12px;
    color: #fca5a5;
    font-size: 11.5px;
`,Jd=C.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
`,Yd=C.div`
    flex: 1;
`,Xd=C.button`
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
`,Zd=C.button`
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
`;function Qd({conflicts:e,move:t,onResolve:n}){let r=M(),[i,a]=(0,H.useState)(()=>Object.fromEntries(e.map(e=>[e.source,{action:e.samePath?`skip`:`rename`,name:e.suggestedName}]))),o=(0,H.useRef)(null),s=(e,t)=>a(n=>({...n,[e]:{...n[e],...t}})),c=t=>a(n=>{let r={...n};for(let n of e)r[n.source]={action:t===`overwrite`&&n.samePath?`skip`:t,name:n.suggestedName};return r}),l=e.every(e=>{let t=i[e.source];return t.action!==`rename`||t.name.trim().length>0});return(0,H.useEffect)(()=>{o.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n(null)):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]),(0,ui.createPortal)((0,Z.jsx)(ef,{onPointerDown:e=>{e.target===e.currentTarget&&n(null)},children:(0,Z.jsxs)(tf,{"aria-label":r(`copy_conflicts`),"aria-modal":`true`,role:`dialog`,children:[(0,Z.jsxs)(nf,{children:[(0,Z.jsx)(rf,{children:r(`copy_conflicts`)}),(0,Z.jsxs)(af,{children:[r(t?`move_1_item`:`copy_1_item`),` · `,r(`these_items_already_exist_in_the_target_folder`)]})]}),e.length>1&&(0,Z.jsxs)(df,{children:[(0,Z.jsx)(ff,{children:r(`apply_to_all`)}),(0,Z.jsx)(xf,{$on:!1,onClick:()=>c(`overwrite`),type:`button`,children:r(`overwrite`)}),(0,Z.jsx)(xf,{$on:!1,onClick:()=>c(`rename`),type:`button`,children:r(`rename`)}),(0,Z.jsx)(xf,{$on:!1,onClick:()=>c(`skip`),type:`button`,children:r(`skip`)})]}),(0,Z.jsx)(of,{children:e.map(e=>{let t=i[e.source],n=e.targetModified>0&&e.sourceModified===e.targetModified,a=e.targetCreated>0&&e.sourceCreated===e.targetCreated,o=e.targetModified>0&&e.sourceModified<e.targetModified,c=e.targetModified>0&&e.sourceModified>e.targetModified,l=e.sourceCreated>e.targetCreated,u=e.targetCreated>0&&e.sourceCreated<e.targetCreated;return(0,Z.jsxs)(sf,{children:[(0,Z.jsxs)(cf,{children:[(0,Z.jsxs)(lf,{title:e.source,children:[(0,Z.jsx)($d,{directory:e.directory,path:e.source}),(0,Z.jsx)(pf,{children:e.name})]}),(0,Z.jsx)(uf,{children:`→`}),(0,Z.jsxs)(lf,{title:e.destination,children:[(0,Z.jsx)($d,{directory:e.directory,path:e.destination}),(0,Z.jsx)(pf,{children:e.name})]}),e.samePath?(0,Z.jsx)(hf,{children:r(`this_is_the_same_path`)}):(0,Z.jsx)(mf,{$older:o,$newer:c,children:r(o?`source_is_older`:c?`source_is_newer`:`same_time`)})]}),(0,Z.jsxs)(gf,{children:[(0,Z.jsx)(`span`,{}),(0,Z.jsx)(_f,{children:r(`source`)}),(0,Z.jsx)(_f,{children:r(`destination`)}),(0,Z.jsxs)(vf,{children:[r(`modified`),n&&(0,Z.jsxs)(Z.Fragment,{children:[` · `,r(`same_time`)]})]}),(0,Z.jsx)(yf,{$new:c,children:d(e.sourceModified)}),(0,Z.jsx)(yf,{$new:o,children:e.targetModified>0?d(e.targetModified):`—`}),(0,Z.jsxs)(vf,{children:[r(`created`),a&&(0,Z.jsxs)(Z.Fragment,{children:[` · `,r(`same_time`)]})]}),(0,Z.jsx)(yf,{$new:l,children:d(e.sourceCreated)}),(0,Z.jsx)(yf,{$new:u,children:e.targetCreated>0?d(e.targetCreated):`—`}),!e.directory&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(vf,{children:r(`size`)}),(0,Z.jsx)(yf,{$new:e.sourceSize>e.targetSize,children:m(e.sourceSize)}),(0,Z.jsx)(yf,{$new:e.targetSize>e.sourceSize,children:e.targetSize>0?m(e.targetSize):`—`})]})]}),(0,Z.jsxs)(bf,{children:[(0,Z.jsx)(xf,{$on:t.action===`overwrite`,disabled:e.samePath,onClick:()=>s(e.source,{action:`overwrite`}),type:`button`,children:r(`overwrite`)}),(0,Z.jsx)(xf,{$on:t.action===`rename`,onClick:()=>s(e.source,{action:`rename`}),type:`button`,children:r(`rename`)}),(0,Z.jsx)(xf,{$on:t.action===`skip`,onClick:()=>s(e.source,{action:`skip`}),type:`button`,children:r(`skip`)})]}),t.action===`rename`&&(0,Z.jsxs)(Sf,{children:[(0,Z.jsx)(`input`,{onChange:t=>s(e.source,{name:t.target.value}),spellCheck:!1,value:t.name}),(0,Z.jsx)(Cf,{onClick:()=>s(e.source,{name:e.suggestedName}),type:`button`,children:r(`auto_name`)})]}),t.action===`overwrite`&&e.directory&&(0,Z.jsx)(hf,{children:r(`replace_the_whole_folder`)})]},e.source)})}),(0,Z.jsxs)(wf,{children:[(0,Z.jsx)(Tf,{}),(0,Z.jsx)(Ef,{onClick:()=>n(null),type:`button`,children:r(`cancel`)}),(0,Z.jsx)(Ef,{$primary:!0,disabled:!l,onClick:()=>{l&&n(e.map(e=>{let t=i[e.source];return{source:e.source,action:t.action,name:t.action===`rename`?t.name.trim():null}}))},ref:o,type:`button`,children:r(`ok`)})]})]})}),document.body)}function $d({path:e,directory:t}){let n=F(e??null,t);return n?(0,Z.jsx)(`img`,{alt:``,height:22,src:n,width:22}):t?(0,Z.jsx)(xt,{size:22}):(0,Z.jsx)(Yt,{size:22})}var ef=C.div`
    position: fixed;
    inset: 0;
    z-index: 3450;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${L}
`,tf=C.div`
    display: flex;
    flex-direction: column;
    width: min(640px, 100%);
    max-height: min(780px, 88vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${at}
`,nf=C.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 15px 18px 10px;
`,rf=C.div`
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
`,af=C.div`
    color: var(--text-muted);
    font-size: 10.5px;
`,of=C.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
    padding: 0 18px 12px;
`,sf=C.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,cf=C.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,lf=C.span`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex: 1;
`,uf=C.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-size: 12px;
`,df=C.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 18px 10px;
`,ff=C.span`
    margin-right: 4px;
    color: var(--text-muted);
    font-size: 9.5px;
`,pf=C.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,mf=C.span`
    flex: 0 0 auto;
    margin-left: auto;
    color: ${({$older:e,$newer:t})=>e?`#fbbf24`:t?`#4ade80`:`var(--text-muted)`};
    font-size: 9.5px;
    font-weight: ${({$newer:e})=>e?600:400};
`,hf=C.span`
    flex: 1;
    color: #fbbf24;
    font-size: 9.5px;
    text-align: right;
`,gf=C.div`
    display: grid;
    grid-template-columns: 62px minmax(0, 1fr) minmax(0, 1fr);
    gap: 2px 8px;
    padding-left: 22px;
`,_f=C.span`
    color: var(--text-muted);
    font-size: 9px;
    text-transform: uppercase;
`,vf=C.span`
    color: var(--text-muted);
    font-size: 9.5px;
`,yf=C.span`
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
`,bf=C.div`
    display: flex;
    gap: 4px;
    padding-left: 22px;
`,xf=C.button`
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
`,Sf=C.div`
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
`,Cf=C.button`
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
`,wf=C.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-top: 1px solid var(--border-color);
`,Tf=C.div`
    flex: 1;
`,Ef=C.button`
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
`;function Df(){let e=M(),[t,n]=(0,H.useState)(null);(0,H.useEffect)(()=>j.on(e=>{let t=e;t.type===`fs.elevation.ask`&&t.data&&n(t.data)}),[]);let r=e=>{let r=t;n(null),r&&j.request(`fs.elevation.answer`,{token:r.token,allow:e})},i=(t=>{switch(t){case`delete`:return e(`delete`);case`rename`:return e(`rename`);case`copy`:return e(`copy`);case`moveTo`:return e(`move`);case`extractArchive`:return e(`extract_archive`);case`newFolder`:case`newFolderAt`:return e(`new_folder`);case`newFile`:case`newFileAt`:return e(`new_file`);case`restoreRecycle`:return e(`restore`);case`writeFile`:return e(`save`);default:return``}})(t?.action??``);return(0,Z.jsx)(We,{confirmLabel:e(`run_as_administrator`),message:e(`this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again`,{path:t?.path??``,action:i.length>0?i.toLowerCase():e(`ok`).toLowerCase()}),onCancel:()=>r(!1),onConfirm:()=>r(!0),open:t!==null,title:e(`administrator_rights_required`)})}function Of(){let e=M(),[t,n]=(0,H.useState)(null),[r,i]=(0,H.useState)(``),a=(0,H.useRef)(null),o=(0,H.useRef)(null);(0,H.useEffect)(()=>(Ve((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>Ve(null)),[]),(0,H.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,ui.createPortal)((0,Z.jsx)(kf,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,Z.jsxs)(Af,{role:`dialog`,"aria-modal":`true`,children:[(0,Z.jsx)(jf,{children:e(`archive_password`)}),(0,Z.jsx)(Mf,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,Z.jsx)(Nf,{title:t.archive,children:t.archive}),(0,Z.jsx)(Pf,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,Z.jsxs)(Ff,{children:[(0,Z.jsx)(If,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,Z.jsx)(Lf,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var kf=C.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${L}
`,Af=C.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${at}
`,jf=C.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Mf=C.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Nf=C.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Pf=C.input`
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
`,Ff=C.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,If=C.button`
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
`,Lf=C(If)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Rf({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=M(),v=(0,H.useRef)(null),y=c??_(`search_this_folder`);(0,H.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,Z.jsxs)(zf,{children:[(0,Z.jsx)(Rt,{}),(0,Z.jsx)(Bf,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Vf,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&(0,Z.jsx)(Hf,{disabled:i===0,onClick:g,title:_(`select_all_matches`),type:`button`,children:(0,Z.jsx)(zt,{size:12})}),(0,Z.jsx)(Hf,{$chevron:!0,onClick:()=>b(u),title:_(`previous_match_shift_enter`),type:`button`,children:(0,Z.jsx)(Ht,{size:12})}),(0,Z.jsx)(Hf,{$chevron:!0,$down:!0,onClick:()=>b(d),title:_(`next_match_enter`),type:`button`,children:(0,Z.jsx)(Ht,{size:12})})]}),(0,Z.jsx)(Uf,{$on:n,onClick:()=>b(f),title:_(`match_case`),type:`button`,children:`Aa`}),(0,Z.jsx)(Uf,{$on:r,onClick:()=>b(p),title:_(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,Z.jsx)(Wf,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,Z.jsx)(dt,{size:12}):(0,Z.jsx)(Xt,{size:12})}),(0,Z.jsx)(Hf,{onClick:h,title:_(`close_search_esc`),type:`button`,children:(0,Z.jsx)(Sn,{size:12})})]})}var zf=C.div`
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
    ${Re}
`,Bf=C.input`
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
`,Vf=C.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Hf=C.button`
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
`,Uf=C.button`
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
`,Wf=C(Uf)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function Gf({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=M(),s=Vr(),[c,l]=(0,H.useState)(!1),[u,d]=(0,H.useState)(``),[f,p]=(0,H.useState)([]),[m,h]=(0,H.useState)(0),[g,_]=(0,H.useState)(null),[v,y]=(0,H.useState)(null),[b,x]=(0,H.useState)(null),S=(0,H.useRef)(null),C=(0,H.useRef)(null),w=(0,H.useRef)(0);(0,H.useEffect)(()=>{if(!Ss(e)){x(null);return}let t=Cs(e);if(!t){x(null);return}let n=!0;return gs().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,H.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,H.useEffect)(()=>{r&&r!==w.current&&(w.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,H.useEffect)(()=>{c&&S.current?.select()},[c]),(0,H.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let ee=()=>{d(e.replace(/\\/g,`/`)),l(!0)},T=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,H.useEffect)(()=>{if(!c){p([]);return}let e=Yf(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{N(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let te=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,H.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=C.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,Z.jsxs)(tp,{onPointerDown:e=>e.stopPropagation(),ref:C,children:[(0,Z.jsxs)(ap,{children:[(0,Z.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?te(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):T(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:S,spellCheck:!1,value:u}),(0,Z.jsx)(op,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,Z.jsx)(Sn,{size:12})}),(0,Z.jsx)(op,{$apply:!0,onClick:T,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,Z.jsx)(zt,{size:14})})]}),f.length>0&&g&&(0,ui.createPortal)((0,Z.jsx)(np,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,Z.jsxs)(rp,{$active:t===m,onClick:t=>te(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,Z.jsx)(Lo,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,Z.jsx)(ip,{children:e.name})]},e.path))}),document.body)]});let E=t?[{label:t,path:e,icon:n}]:Kf(e,b)??Jf(e,s.places);return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Xf,{onClick:ee,title:o(`click_to_type_a_path`),children:E.map((t,n)=>(0,Z.jsxs)(Zf,{$last:n===E.length-1,children:[n>0&&(0,Z.jsx)($f,{children:(0,Z.jsx)(Ht,{size:9})}),(0,Z.jsxs)(ep,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,Z.jsx)(Qf,{children:(0,Z.jsx)(La,{place:t.place,size:13})}):t.icon&&(0,Z.jsx)(Qf,{children:t.icon}),t.label]})]},t.path))}),v&&(0,Z.jsx)(Pe,{items:[{label:o(`open`),icon:(0,Z.jsx)(qt,{size:14}),onSelect:()=>i(v.path)},{label:o(`open_in_new_tab`),icon:(0,Z.jsx)(Ft,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`copy_as_path`),icon:(0,Z.jsx)(_n,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...gl(v.path)?[{label:o(`open_with`),icon:(0,Z.jsx)(Ct,{size:14}),onSelect:()=>void sr(v.path)},{label:o(`properties`),icon:(0,Z.jsx)(mt,{size:14}),onSelect:()=>void ir([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function Kf(e,t){let n=Cs(e);if(!n)return null;let r=ws(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,Z.jsx)(Qt,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function qf(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function Jf(e,t){let n=qf(e),r=-1,i=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=n.findIndex(t=>a(t.path,e.path));t>r&&(r=t,i=e)}return i&&r>=0&&n.splice(0,r+1,{label:i.name,path:n[r].path,place:i}),n}function Yf(e){if(gl(e)||Ss(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var Xf=C.div`
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
`,Zf=C.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,Qf=C.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,$f=C.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,ep=C.button`
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
`,tp=C.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,np=C.div`
    position: fixed;
    z-index: 2600;
    max-height: 280px;
    padding: 4px;
    overflow-y: auto;
    ${Qe}
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
`,rp=C.button`
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
`,ip=C.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ap=C.div`
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
`,op=C.button`
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
`;function sp({places:e,drives:t,recent:r,recentLimit:i,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],onNavigate:p,onOpenView:h}){let[g,v]=(0,H.useState)([]),y=M(),[b,x]=(0,H.useState)(null),S=Vr();(0,H.useEffect)(()=>{I().then(e=>{x(e),v(Pa(e).filter(e=>e.pinned))},()=>{x(null),v([])})},[l]),(0,H.useEffect)(()=>{if(!j.available)return;let e=g.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return j.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>j.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[g,c]);let C=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let n=e.find(e=>a(e.path,t));return{name:b?.placeNames?.[t]??n?.name??(_(t)||t),path:t,kind:`folder`,icon:n?.icon??b?.placeIcons?.[t]??null}}),w=s===`files`;return(0,Z.jsxs)(pp,{children:[(0,Z.jsxs)(mp,{children:[!f.includes(`home`)&&(0,Z.jsxs)(yp,{$active:s===`home`,onClick:e=>h(`home`,kr(e)),title:y(`overview`),type:`button`,children:[(0,Z.jsx)(jt,{}),(0,Z.jsx)(xp,{children:y(`overview`)})]}),!f.includes(`recycle`)&&(0,Z.jsxs)(yp,{$active:s===`recycle`,onClick:e=>h(`recycle`,kr(e)),title:y(`recycle_bin`),type:`button`,children:[(0,Z.jsx)(vn,{}),(0,Z.jsx)(xp,{children:y(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,Z.jsxs)(yp,{$active:s===`gallery`,onClick:e=>h(`gallery`,kr(e)),title:y(`gallery`),type:`button`,children:[(0,Z.jsx)(gt,{}),(0,Z.jsx)(xp,{children:y(`gallery`)})]})]}),g.map(e=>(0,Z.jsxs)(gp,{children:[(0,Z.jsxs)(yp,{as:`div`,$active:!1,children:[(0,Z.jsx)(bp,{children:(0,Z.jsx)(Ia,{panel:e,size:16})}),(0,Z.jsx)(xp,{children:y(e.title)})]}),(0,Z.jsx)(_p,{children:(0,Z.jsxs)(vp,{children:[e.kind===`quick`&&C(e).map(e=>(0,Z.jsxs)(yp,{$active:w&&a(o,e.path),onClick:t=>p(e.path,kr(t)),title:e.path,type:`button`,children:[(0,Z.jsx)(La,{place:e}),(0,Z.jsx)(xp,{children:e.name})]},e.path)),e.kind===`recent`&&r.slice(0,i).map(e=>{let t=Hr(S,e.path);return(0,Z.jsxs)(yp,{$active:w&&a(o,e.path),onClick:t=>e.isDirectory?p(e.path,kr(t)):void Ae(e.path),title:e.path,type:`button`,children:[t&&S.useIcons?(0,Z.jsx)(La,{place:t}):(0,Z.jsx)(Lo,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,Z.jsx)(xp,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,Z.jsx)(up,{historyVersion:d,onNavigate:p}),e.kind===`drives`&&t.map(e=>{let t=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,Z.jsxs)(yp,{$active:w&&a(o,e.name),onClick:t=>p(e.name,kr(t)),title:e.name,type:`button`,children:[(0,Z.jsx)(pt,{}),(0,Z.jsxs)(xp,{children:[u(e),(0,Z.jsxs)(Sp,{children:[m(e.freeSpace),` free`]}),(0,Z.jsx)(Cp,{children:(0,Z.jsx)(wp,{$used:t,$tone:n(t)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,Z.jsx)(dp,{onNavigate:p,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,Z.jsx)(hp,{children:(0,Z.jsxs)(yp,{$active:s===`settings`,onClick:e=>h(`settings`,kr(e)),title:y(`settings`),type:`button`,children:[(0,Z.jsx)(mt,{}),(0,Z.jsx)(xp,{children:y(`settings`)})]})})]})}var cp=10,lp=40;function up({historyVersion:e=0,onNavigate:t}){let n=M(),[r,i]=(0,H.useState)(null),a=Vr();return(0,H.useEffect)(()=>{Oe().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Hr(a,e.path);return(0,Z.jsxs)(yp,{$active:!1,onClick:n=>t(e.path,kr(n)),title:y(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,Z.jsx)(La,{place:r}):(0,Z.jsx)(Lo,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,Z.jsx)(xp,{children:r?.name||e.name})]},e.path)})}function dp({path:e,onNavigate:t}){let[n,r]=(0,H.useState)(null);(0,H.useEffect)(()=>{e&&(r(null),N(e,!1).then(r,()=>r(null)))},[e]),(0,H.useEffect)(()=>{if(e&&j.available)return j.on(t=>{let n=t;n.type===`fs.changed`&&typeof n.data?.path==`string`&&a(n.data.path,e)&&N(e,!1).then(r,()=>void 0)})},[e]);let i=n?.entries??[],o=i.filter(e=>e.isDirectory).slice(0,cp),s=i.filter(e=>!e.isDirectory).slice(0,lp);return(0,Z.jsxs)(Z.Fragment,{children:[o.map(e=>(0,Z.jsx)(fp,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,Z.jsx)(fp,{entry:e,onNavigate:t},e.fullPath))]})}function fp({entry:e,onNavigate:t}){let n=Vr(),r=Hr(n,e.fullPath);return(0,Z.jsxs)(yp,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,kr(n)):void Ae(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,Z.jsx)(La,{place:r}):(0,Z.jsx)(Lo,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,Z.jsx)(xp,{children:r?.name||e.name})]})}var pp=C.aside`
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

    &:not(:hover) ${()=>Sp},
    &:not(:hover) ${()=>Cp} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,mp=C.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,hp=C(mp)`
    margin-top: auto;
`,gp=C.div`
    display: flex;
    flex-direction: column;
`,_p=C.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${pp}:hover ${gp}:hover > & {
        grid-template-rows: 1fr;
    }
`,vp=C.div`
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
`,yp=C.button`
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
`,bp=C.span`
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
`,xp=C.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Sp=C.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Cp=C.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,wp=C.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function Tp({tabs:e,onRestore:t}){let n=M(),r=Sl(),[i,a]=(0,H.useState)(!1),o=(0,H.useRef)(null);return(0,H.useEffect)(()=>{if(!i)return;let e=e=>{o.current?.contains(e.target)||a(!1)},t=()=>a(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[i]),(0,Z.jsxs)(Ep,{ref:o,children:[(0,Z.jsx)(Dp,{$active:i,onClick:()=>a(e=>!e),title:n(`recently_closed_tabs`),type:`button`,children:(0,Z.jsx)($t,{size:15})}),i&&(0,Z.jsxs)(Op,{children:[(0,Z.jsxs)(kp,{children:[(0,Z.jsxs)(Ap,{children:[(0,Z.jsx)($t,{size:12}),n(`recently_closed_tabs`)]}),(0,Z.jsx)(jp,{onClick:()=>a(!1),title:n(`close`),type:`button`,children:(0,Z.jsx)(Sn,{size:10})})]}),e.length===0?(0,Z.jsx)(Lp,{children:n(`no_recently_closed_tabs`)}):(0,Z.jsx)(Mp,{children:[...e].reverse().map((n,i)=>{let o=e.length-1-i,s=vl(n);return(0,Z.jsxs)(Np,{onClick:()=>{a(!1),t(o)},title:n,type:`button`,children:[(0,Z.jsx)(bl,{location:n}),(0,Z.jsxs)(Pp,{children:[(0,Z.jsx)(Fp,{children:r(n)}),(0,Z.jsx)(Ip,{children:s?r(n):n})]})]},`${o}-${n}`)})})]})]})}var Ep=C.div`
    position: relative;
    display: flex;
`,Dp=C.button`
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
`,Op=C.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Qe}
    ${Ye}
`,kp=C.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ap=C.span`
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
`,jp=C.button`
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
`,Mp=C.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Np=C.button`
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
`,Pp=C.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Fp=C.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ip=C.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Lp=C.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Rp=C.span`
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
`;function zp({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=M(),a=(0,H.useRef)(null),o=e.filter(e=>e.state===`running`).length,s=e.length;return(0,H.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,Z.jsxs)(Vp,{ref:a,children:[(0,Z.jsxs)(Hp,{$active:n,onClick:()=>r(!n),title:o>0?y(i,o,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,Z.jsx)(en,{size:13}),s>0&&(0,Z.jsx)(Rp,{children:s>9?`9+`:s})]}),n&&(0,Z.jsxs)(Up,{children:[(0,Z.jsxs)(Wp,{children:[(0,Z.jsxs)(Gp,{children:[(0,Z.jsx)(en,{size:12}),i(`status_center`)]}),(0,Z.jsxs)(Kp,{children:[(0,Z.jsx)(qp,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,Z.jsx)(Jp,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,Z.jsx)(Sn,{size:10})})]})]}),e.length===0?(0,Z.jsx)(Xp,{children:i(`no_operations_yet`)}):(0,Z.jsx)(Yp,{children:e.map(e=>(0,Z.jsx)(Bp,{task:e},e.id))})]})]})}function Bp({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,Z.jsxs)(Zp,{children:[(0,Z.jsxs)(Qp,{children:[(0,Z.jsx)($p,{$state:e.state,children:e.state===`done`?(0,Z.jsx)(zt,{size:10}):e.state===`failed`?(0,Z.jsx)(Sn,{size:10}):(0,Z.jsx)(em,{})}),(0,Z.jsx)(tm,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,Z.jsxs)(nm,{children:[m(e.bytesDone),` / `,m(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,Z.jsxs)(nm,{children:[e.done,` / `,e.total]})]}),i&&(0,Z.jsx)(rm,{children:(0,Z.jsx)(im,{$percent:r,$indeterminate:t===0})}),e.error&&(0,Z.jsx)(am,{children:e.error})]})}var Vp=C.div`
    position: relative;
    display: flex;
`,Hp=C.button`
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
`,Up=C.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 348px;
    max-height: 396px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    ${Qe}
    ${Ye}
`,Wp=C.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Gp=C.span`
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
`,Kp=C.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,qp=C.button`
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
`,Jp=C.button`
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
`,Yp=C.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,Xp=C.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Zp=C.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${L}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,Qp=C.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,$p=C.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,em=C.span`
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
`,tm=C.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nm=C.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,rm=C.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,im=C.div`
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
`,am=C.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function om(){if(!j.available)return[];try{return(await Le.readBlock(`/history`)).rows.map(e=>{let t=cm(e.paths);return{id:Number(e.id),label:String(e.label),paths:t.length>0?t.split(``):[],at:Number(e.at),applied:Number(e.applied)!==0,restorable:Number(e.restorable)!==0}})}catch{return(await j.request(`fs.history.list`)).entries}}async function sm(e){return j.available?(await j.request(`fs.history.undoTo`,{id:e})).ok:!1}function cm(e){return typeof e==`string`?e:``}function lm(){let e=M(),[t,n]=(0,H.useState)(!1),[r,i]=(0,H.useState)([]),[a,o]=(0,H.useState)(!1),s=(0,H.useRef)(null),c=()=>void om().then(i,()=>i([]));(0,H.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await sm(e),c()}finally{o(!1)}};return(0,Z.jsxs)(fm,{ref:s,children:[(0,Z.jsx)(pm,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,Z.jsx)(on,{size:14})}),t&&(0,Z.jsxs)(mm,{children:[(0,Z.jsxs)(hm,{children:[(0,Z.jsxs)(gm,{children:[(0,Z.jsx)(on,{size:12}),e(`history`)]}),(0,Z.jsx)(_m,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,Z.jsx)(Sn,{size:10})})]}),r.length===0?(0,Z.jsx)(Em,{children:e(`no_operations_yet`)}):(0,Z.jsx)(vm,{children:r.map(t=>(0,Z.jsxs)(ym,{children:[(0,Z.jsxs)(bm,{children:[(0,Z.jsxs)(xm,{children:[(0,Z.jsx)(dm,{label:t.label}),um(e,t.label)]}),(0,Z.jsx)(Sm,{children:p(t.at)})]}),t.paths.length>0&&(0,Z.jsxs)(Cm,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,Z.jsx)(wm,{children:(0,Z.jsx)(Tm,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function um(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function dm({label:e}){return e.startsWith(`delete`)?(0,Z.jsx)(vn,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,Z.jsx)(_n,{size:13}):e.startsWith(`rename`)?(0,Z.jsx)(mn,{size:13}):e.startsWith(`compress`)?(0,Z.jsx)(tn,{size:13}):e.startsWith(`new`)?(0,Z.jsx)(Ft,{size:13}):(0,Z.jsx)(qt,{size:13})}var fm=C.div`
    position: relative;
    display: flex;
`,pm=C.button`
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
`,mm=C.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 390px;
    max-height: 440px;
    overflow: hidden;
    ${Qe}
    ${Ye}
`,hm=C.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,gm=C.span`
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
`,_m=C.button`
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
`,vm=C.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,ym=C.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,bm=C.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,xm=C.span`
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
`,Sm=C.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,Cm=C.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wm=C.div`
    display: flex;
    justify-content: flex-end;
`,Tm=C.button`
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
`,Em=C.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Dm=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(Dm||{}),Om=[0,1],km=[1,0],Am=[2,3],jm=[3,2],Mm={L:Om,M:km,Q:Am,H:jm},Nm=/^\d*$/,Pm=/^[A-Z0-9 $%*+./:-]*$/,Fm=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,Im=1,Lm=40,Rm=3,zm=3,Bm=40,Vm=10,Hm=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],Um=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],Wm=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<Im||e>Lm)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,Dm.Timing),this.setFunctionModule(e,6,e%2==0,Dm.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,Km(r,e));this.setFunctionModule(8,7,Km(r,6)),this.setFunctionModule(8,8,Km(r,7)),this.setFunctionModule(7,8,Km(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,Km(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,Km(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,Km(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=Km(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,Dm.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,Dm.Alignment)}setFunctionModule(e,t,n,r=Dm.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==sh(t,n))throw RangeError(`Invalid argument`);let r=Um[n[0]][t],i=Hm[n[0]][t],a=Math.floor(oh(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=ch(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=lh(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(oh(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=Km(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=Rm:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*Bm),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*Bm}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=Rm:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*Bm),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*Bm}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=zm)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*Vm,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function Gm(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function Km(e,t){return!!(e>>>t&1)}var qm=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},Jm=[1,10,12,14],Ym=[2,9,11,13],Xm=[4,8,16,16];function Zm(e,t){return e[Math.floor((t+7)/17)+1]}function Qm(e){let t=[];for(let n of e)Gm(n,8,t);return new qm(Xm,e.length,t)}function $m(e){if(!nh(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);Gm(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new qm(Jm,e.length,t)}function eh(e){if(!rh(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=Fm.indexOf(e.charAt(n))*45;r+=Fm.indexOf(e.charAt(n+1)),Gm(r,11,t)}return n<e.length&&Gm(Fm.indexOf(e.charAt(n)),6,t),new qm(Ym,e.length,t)}function th(e){return e===``?[]:nh(e)?[$m(e)]:rh(e)?[eh(e)]:[Qm(ah(e))]}function nh(e){return Nm.test(e)}function rh(e){return Pm.test(e)}function ih(e,t){let n=0;for(let r of e){let e=Zm(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function ah(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function oh(e){if(e<Im||e>Lm)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function sh(e,t){return Math.floor(oh(e)/8)-Hm[t[0]][e]*Um[t[0]][e]}function ch(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=uh(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=uh(n,2)}return t}function lh(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=uh(t,e))}return n}function uh(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function dh(e,t,n=1,r=40,i=-1,a=!0){if(!(Im<=n&&n<=r&&r<=Lm)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=sh(o,t)*8,i=ih(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[km,Am,jm])a&&s<=sh(o,e)*8&&(t=e);let c=[];for(let t of e){Gm(t.mode[0],4,c),Gm(t.numChars,Zm(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=sh(o,t)*8;Gm(0,Math.min(4,l-c.length),c),Gm(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)Gm(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new Wm(o,t,u,i)}function fh(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?th(e):Array.isArray(e)?[Qm(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=dh(c,Mm[n],i,a,o,r),u=ph({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function ph(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=Dm.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function mh(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function hh(e,t={}){let n=fh(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${mh(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${mh(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function gh({currentFolder:e}){let t=M(),[n,r]=(0,H.useState)(!1),[i,o]=(0,H.useState)(null),[s,c]=(0,H.useState)(!1),l=(0,H.useRef)(null);(0,H.useEffect)(()=>{if(!n)return;let e=()=>void fs().then(o,()=>void 0);e();let t=window.setInterval(e,2500),i=e=>{l.current?.contains(e.target)||r(!1)},a=()=>r(!1);return window.addEventListener(`pointerdown`,i),window.addEventListener(`blur`,a),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,i),window.removeEventListener(`blur`,a)}},[n]),(0,H.useEffect)(()=>{let e=()=>void fs().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=i?.shares.some(t=>a(t.path,e))??!1;return(0,Z.jsxs)(_h,{ref:l,children:[(0,Z.jsxs)(vh,{$active:n,onClick:()=>r(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,Z.jsx)(Qt,{size:15}),i&&i.shares.length>0&&(0,Z.jsx)(Rp,{children:i.shares.length>9?`9+`:i.shares.length})]}),n&&(0,Z.jsxs)(yh,{children:[(0,Z.jsxs)(bh,{children:[(0,Z.jsxs)(xh,{children:[(0,Z.jsx)(gn,{size:12}),t(`share`)]}),(0,Z.jsx)(Sh,{onClick:()=>r(!1),title:t(`close`),type:`button`,children:(0,Z.jsx)(Sn,{size:10})})]}),(0,Z.jsxs)(Ch,{children:[(0,Z.jsxs)(wh,{children:[(0,Z.jsx)(pn,{size:15}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(`strong`,{children:i?.deviceName||t(`this_device`)}),(0,Z.jsx)(kh,{children:i?.fingerprint??``})]})]}),i?.shares.length===0&&(0,Z.jsx)(Ah,{children:t(`no_folders_are_shared_yet`)}),i?.shares.map(e=>(0,Z.jsxs)(jh,{children:[(0,Z.jsxs)(Mh,{children:[(0,Z.jsx)(Nh,{title:e.path,children:e.name}),(0,Z.jsx)(Fh,{disabled:s,onClick:()=>void u(()=>ms(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,Z.jsx)(Sn,{size:10})})]}),(0,Z.jsx)(Ph,{title:e.path,children:e.path}),(0,Z.jsxs)(Ih,{children:[(0,Z.jsxs)(Lh,{$active:e.mode===`client`,onClick:()=>void u(()=>hs(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,Z.jsx)(pn,{size:11}),t(`app`)]}),(0,Z.jsxs)(Lh,{$active:e.mode===`web`,onClick:()=>void u(()=>hs(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,Z.jsx)(_t,{size:11}),t(`web`)]})]})]},e.id)),(0,Z.jsxs)(Rh,{disabled:s||e.length===0||d,onClick:()=>void u(()=>ps(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,Z.jsx)(Ft,{size:12}),t(`share_this_folder`)]}),i?.webRunning&&(0,Z.jsxs)(zh,{children:[(0,Z.jsxs)(Bh,{children:[(0,Z.jsx)(_t,{size:12}),t(`browser_access`)]}),(0,Z.jsxs)(Eh,{children:[(0,Z.jsx)(Dh,{children:i.urls.map(e=>(0,Z.jsx)(Vh,{onClick:()=>void k(e),type:`button`,children:e},e))}),i.preferredUrl&&(0,Z.jsx)(Th,{value:i.preferredUrl})]}),(0,Z.jsx)(kh,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var _h=C.div`
    position: relative;
    display: flex;
`,vh=C.button`
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
`,yh=C.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    display: flex;
    flex-direction: column;
    width: 400px;
    max-height: min(560px, 78vh);
    overflow: hidden;
    ${Qe}
    ${Ye}
`,bh=C.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,xh=C.span`
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
`,Sh=C.button`
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
`,Ch=C.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,wh=C.div`
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
`;function Th({value:e}){let t=M(),n=(0,H.useMemo)(()=>hh(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,Z.jsx)(Oh,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var Eh=C.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Dh=C.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,Oh=C.div`
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
`,kh=C.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,Ah=C.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,jh=C.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Mh=C.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,Nh=C.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ph=C.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Fh=C.button`
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
`,Ih=C.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Lh=C.button`
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
`,Rh=C.button`
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
`,zh=C.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Bh=C.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,Vh=C.button`
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
`;function Hh(){let e=M();return(0,Z.jsx)(Uh,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var Uh=C.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function Wh({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=M(),[s,c]=(0,H.useState)(!1),l=(0,H.useRef)(null);(0,H.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,H.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=zs.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,Z.jsxs)(Gh,{ref:l,children:[(0,Z.jsx)(Kh,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,Z.jsx)(bt,{size:14}):(0,Z.jsx)(ht,{size:14})}),s&&(0,Z.jsxs)(qh,{children:[(0,Z.jsxs)(Jh,{children:[(0,Z.jsx)(Tt,{size:11}),o(`view`)]}),(0,Z.jsxs)(Xh,{children:[(0,Z.jsxs)(Zh,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,Z.jsx)(ht,{size:12}),` `,o(`list`)]}),(0,Z.jsxs)(Zh,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,Z.jsx)(bt,{size:12}),` `,o(`grid`)]})]}),(0,Z.jsxs)(Jh,{children:[(0,Z.jsx)(ht,{size:11}),o(`list_icon_size`)]}),(0,Z.jsxs)(Qh,{children:[(0,Z.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,Z.jsxs)($h,{children:[e.iconSize,`px`]})]}),(0,Z.jsxs)(Jh,{children:[(0,Z.jsx)(bt,{size:11}),o(`grid_size`)]}),(0,Z.jsxs)(Qh,{children:[(0,Z.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,Z.jsxs)($h,{children:[e.gridSize,`px`]})]}),(0,Z.jsxs)(Jh,{children:[(0,Z.jsx)(Bt,{size:11}),o(`columns`),(0,Z.jsx)(Hh,{}),(0,Z.jsx)(Yh,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),zs.map(e=>(0,Z.jsxs)(eg,{children:[(0,Z.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,Z.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,Z.jsxs)(eg,{children:[(0,Z.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,Z.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,Z.jsxs)(Jh,{children:[(0,Z.jsx)(Xt,{size:11}),o(`preview_panel`),(0,Z.jsx)(Hh,{})]}),(0,Z.jsxs)(eg,{children:[(0,Z.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,Z.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var Gh=C.div`
    position: relative;
    display: flex;
    height: 100%;
`,Kh=C.button`
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
`,qh=C.div`
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 60;
    width: 244px;
    padding: 12px;
    ${Qe}
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
`,Jh=C.div`
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
`,Yh=C.button`
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
`,Xh=C.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,Zh=C.button`
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
`,Qh=C.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,$h=C.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,eg=C.label`
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
`,tg=e=>(0,Z.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Z.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),ng=e=>(0,Z.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Z.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),rg=e=>(0,Z.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Z.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),ig=e=>(0,Z.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,Z.jsx)(`path`,{d:`M2 5h6`})}),ag=e=>(0,Z.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,Z.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),og=e=>(0,Z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,Z.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,Z.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function sg({tabs:e,activeId:t,closedTabs:n,onRestoreClosed:r,onSelect:i,onClose:a,onNewTab:o,onReorder:s,onTransferToTab:c,view:l,onViewChange:u,onColumns:d,showImages:f,onShowImages:p,tasks:m,onClearTasks:h,activityOpen:g,onActivityOpenChange:_,trayCount:v,trayVisible:y,onToggleTray:b,split:x,canSplit:S,onToggleSplit:C,details:w,canDetails:ee,onToggleDetails:te,shortcuts:E,currentFolder:ne}){let D=M(),O=T(),re=A(),[k,j]=(0,H.useState)({left:!1,right:!1}),[ie,ae]=(0,H.useState)(null),[oe,se]=(0,H.useState)(null),N=(0,H.useRef)(null),ce=(0,H.useRef)(null),le=(0,H.useRef)(null),ue=(0,H.useCallback)(()=>{let e=ce.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;j(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,H.useEffect)(()=>{ue();let e=ce.current;if(!e)return;let t=new ResizeObserver(ue);return t.observe(e),()=>t.disconnect()},[ue,e.length]),(0,H.useEffect)(()=>()=>{N.current&&window.clearTimeout(N.current.timer)},[]),(0,H.useEffect)(()=>{le.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let de=e=>ce.current?.scrollBy({left:e,behavior:`smooth`}),fe=()=>{N.current&&window.clearTimeout(N.current.timer),N.current=null,se(null)};return(0,Z.jsxs)(dg,{children:[(0,Z.jsx)(fg,{children:(0,Z.jsx)(pn,{size:19})}),(0,Z.jsxs)(pg,{children:[k.left&&(0,Z.jsx)(hg,{onClick:()=>de(-180),title:D(`scroll_tabs_left`),type:`button`,children:(0,Z.jsx)(tg,{})}),(0,Z.jsx)(mg,{onScroll:ue,onWheel:e=>{let t=ce.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:ce,children:e.map(e=>(0,Z.jsxs)(gg,{$active:e.id===t,$dragging:ie===e.id,$dropTarget:oe===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Bo(t.dataTransfer)||!cg(e)||(t.preventDefault(),N.current?.id===e.id))return;fe(),se(e.id);let n=window.setTimeout(()=>{i(e.id),N.current=null},500);N.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(N.current?.id===e.id||oe===e.id)&&fe()},onDragEnd:()=>{ae(null),fe()},onDragOver:t=>{(ie||Bo(t.dataTransfer)&&cg(e))&&(t.preventDefault(),Bo(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>ae(e.id),onDrop:t=>{if(t.preventDefault(),ie)s(ie,e.id);else if(cg(e)&&Bo(t.dataTransfer)){let{paths:n,move:r}=Vo(t);n.length>0&&(i(e.id),c(n,e.path,!t.ctrlKey&&r))}ae(null),fe()},onClick:()=>i(e.id),ref:e.id===t?le:void 0,title:e.path||e.title,type:`button`,children:[(0,Z.jsx)(lg,{tab:e}),(0,Z.jsx)(_g,{children:e.title}),e.partner&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(vg,{children:`|`}),(0,Z.jsx)(ug,{place:e.partner.place}),(0,Z.jsx)(_g,{children:e.partner.title})]}),(0,Z.jsx)(yg,{"data-shortcut":Mr(E.closeTab),onClick:t=>{t.stopPropagation(),a(e.id)},title:D(`close_tab`),children:(0,Z.jsx)(rg,{})})]},e.id))}),k.right&&(0,Z.jsx)(hg,{onClick:()=>de(180),title:D(`scroll_tabs_right`),type:`button`,children:(0,Z.jsx)(ng,{})}),(0,Z.jsx)(bg,{"data-shortcut":Mr(E.newTab),onClick:o,title:D(`new_tab`),type:`button`,children:(0,Z.jsx)(Ft,{size:13})})]}),(0,Z.jsx)(xg,{...re}),(0,Z.jsxs)(Sg,{children:[(0,Z.jsx)(wg,{$active:x,"data-shortcut":Mr(E.splitView),disabled:!S,onClick:C,title:D(x?`close_split_view`:`split_view`),type:`button`,children:(0,Z.jsx)(Bt,{size:15})}),(0,Z.jsx)(wg,{$active:w,disabled:!ee,onClick:te,title:D(w?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,Z.jsx)(Tt,{size:15})}),(0,Z.jsxs)(Cg,{$active:y,onClick:b,title:D(y?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,Z.jsx)(At,{size:14}),v>0&&(0,Z.jsx)(Rp,{children:v>9?`9+`:v})]}),(0,Z.jsx)(Tp,{onRestore:r,tabs:n}),(0,Z.jsx)(lm,{}),(0,Z.jsx)(gh,{currentFolder:ne}),(0,Z.jsx)(zp,{tasks:m,onClear:h,open:g,onOpenChange:_}),(0,Z.jsx)(Wh,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:u,onColumns:d,onShowImages:p,showImages:f,view:l}),(0,Z.jsx)(Tg,{onClick:O.minimize,title:D(`minimize`),type:`button`,children:(0,Z.jsx)(ig,{})}),(0,Z.jsx)(Tg,{onClick:O.toggleMaximize,title:O.maximized?D(`restore`):D(`maximize`),type:`button`,children:O.maximized?(0,Z.jsx)(og,{}):(0,Z.jsx)(ag,{})}),(0,Z.jsx)(Eg,{onClick:O.close,title:D(`close`),type:`button`,children:(0,Z.jsx)(rg,{})})]})]})}function cg(e){return e.kind===`files`&&(!v(e.path)||b(e.path))}function lg({tab:e}){switch(e.kind){case`home`:return(0,Z.jsx)(B,{size:13});case`settings`:return(0,Z.jsx)(mt,{size:13});case`recycle`:return(0,Z.jsx)(vn,{size:13});default:return e.archive?(0,Z.jsx)(tn,{size:13}):(0,Z.jsx)(ug,{place:e.place})}}function ug({place:e}){return e?(0,Z.jsx)(La,{place:e,size:13}):(0,Z.jsx)(xt,{size:13})}var dg=C.header`
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
`,fg=C.span`
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
`,pg=C.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,mg=C.div`
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
`,hg=C.button`
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
`,gg=C.button`
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
`,_g=C.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,vg=C.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,yg=C.span`
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
`,bg=C.button`
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
`,xg=C.div`
    flex: 1;
    min-width: 28px;
`,Sg=C.div`
    display: flex;
    flex-shrink: 0;
`,Cg=C.button`
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
`,wg=C.button`
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
`,Tg=C.button`
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
`,Eg=C(Tg)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Dg(){let[e,t]=(0,H.useState)(null),n=(0,H.useRef)(null),r=(0,H.useRef)(void 0);return(0,H.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,ui.createPortal)((0,Z.jsx)(Og,{tooltip:e}),document.body):null}function Og({tooltip:e}){let t=(0,H.useRef)(null),[n,r]=(0,H.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,H.useState)(()=>e.bottom+6);return(0,H.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,Z.jsxs)(kg,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,Z.jsx)(Ag,{children:e.text}),e.shortcut&&(0,Z.jsx)(jg,{children:e.shortcut})]})}var kg=C.div`
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
    ${L}
`,Ag=C.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,jg=C.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Mg=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function Ng(e){return`"${e.replaceAll(`"`,``)}"`}function Pg(e){let t=document.documentElement.style;for(let n of Mg){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${Ng(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Fg(){return j.available?(await j.request(`app.fonts`)).fonts??[]:[]}function Ig({deviceName:e,code:t,onAccept:n,onReject:r}){let i=M(),a=(0,H.useRef)(null);return(0,H.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,ui.createPortal)((0,Z.jsx)(Lg,{children:(0,Z.jsxs)(Rg,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Z.jsxs)(zg,{children:[(0,Z.jsx)(Qt,{size:15}),i(`pair_for_sharing`)]}),(0,Z.jsx)(Bg,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,Z.jsx)(Vg,{children:t}),(0,Z.jsx)(Hg,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,Z.jsxs)(Ug,{children:[(0,Z.jsx)(Wg,{onClick:r,type:`button`,children:i(`reject`)}),(0,Z.jsx)(Gg,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var Lg=C.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${L}
`,Rg=C.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${at}
`,zg=C.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Bg=C.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,Vg=C.div`
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
`,Hg=C.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Ug=C.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Wg=C.button`
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
`,Gg=C(Wg)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Kg=C.button`
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
`,qg=C.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,Jg=`modulepreload`,Yg=function(e){return`/`+e},Xg={},Zg=function(e){return e.pathname.endsWith(`.css`)},Qg=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},$g=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Yg(t,n);let r=s(t),i=Zg(r);return Qg(Xg,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:Jg,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},e_=(0,H.lazy)(()=>$g(()=>import(`./OverviewView-DXWo3yjx.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6]))),t_=(0,H.lazy)(()=>$g(()=>import(`./SettingsView-DDwKeEQD.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([7,1,3,4,2,5,6]))),n_=(0,H.lazy)(()=>$g(()=>import(`./GalleryView-BdV7Q0XO.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([8,1,3,4,2,5]))),r_=(0,H.lazy)(()=>$g(()=>import(`./RecycleView-BvVTSQFK.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([9,1,3,4,2,5,6]))),i_=0,a_=new Set;function o_(e){a_.add(e),j.send({type:`app.navigate.done`,payload:{path:e}})}var s_=20,c_=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function l_(e){return e.history[e.index]??_l(`home`)}function u_(e){return vl(l_(e))??`files`}function d_(e){let t=l_(e);return vl(t)?``:e.listing?.path||t}function f_(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||u_(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function p_(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function m_(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||Se().iconSize,gridSize:e.view?.gridSize||t.gridSize||Se().gridSize,sort:e.view?.sort??Se().sort,sortDescending:e.view?.sortDescending??Se().sortDescending,columns:t.columns??Se().columns??[]}}function h_(e=_l(`home`)){return i_+=1,{id:`tab-${i_}`,listing:null,loading:!vl(e),error:null,history:[e],index:0,fresh:!0,view:null}}function g_(e){return e instanceof Error?e.message:String(e)}function __(e){let t=Cs(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return ws(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function v_(e){let t=_(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function y_(e){return v(e)?Ke(e):void 0}function b_(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return y(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:m(n)})}function x_(){let e=M(),[t,n]=(0,H.useState)(()=>[h_()]),[r,o]=(0,H.useState)(()=>t[0].id),[c,u]=(0,H.useState)(null),[d,p]=(0,H.useState)(()=>{let e=st(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[m,S]=(0,H.useState)([]),[C,w]=(0,H.useState)([]),[T,ne]=(0,H.useState)(null),[O,k]=(0,H.useState)(null),[A,ie]=(0,H.useState)(null),oe=ee(),de=In(),[fe,P]=(0,H.useState)(null);(0,H.useEffect)(()=>(Vn(e=>P(e)),()=>Vn(null)),[]),(0,H.useEffect)(()=>{if(!fe)return;let t=null,n=!0;return yr(fe.move?`move`:`copy`,e(`copy_conflicts`)).then(e=>{n?t=e:br(e)},()=>void 0),()=>{n=!1,br(t)}},[fe]);let[be,xe]=(0,H.useState)(ue),[Ce,De]=(0,H.useState)(0),[F,Oe]=(0,H.useState)(0),[je,Ie]=(0,H.useState)(0),[Le,Re]=(0,H.useState)(ue),[Be,Ve]=(0,H.useState)(0),[Ue,We]=(0,H.useState)(0),[Je,Ye]=(0,H.useState)(0),[L,Qe]=(0,H.useState)(0),$e=(0,H.useRef)(L);$e.current=L;let[nt,it]=(0,H.useState)([]),[at,ot]=(0,H.useState)(10),[R,z]=(0,H.useState)(null),ct=D(s(R?.themeMode)),lt=(0,H.useMemo)(()=>(R?.favorites??[]).map(e=>i(e.path)),[R?.favorites]),[ut,dt]=(0,H.useState)(0),[B,ft]=(0,H.useState)(()=>Sr()),[pt,ht]=(0,H.useState)(0),[vt,bt]=(0,H.useState)(0),[xt,St]=(0,H.useState)(0),[Ct,wt]=(0,H.useState)(!0),[Tt,Et]=(0,H.useState)(()=>{let e=st(`yafm.preview.width`,320);return e>=220?e:320}),[Dt,Ot]=(0,H.useState)(null),[kt,At]=(0,H.useState)(null),[Mt,Nt]=(0,H.useState)({kind:null,info:null}),[It,V]=(0,H.useState)(`primary`),[Lt,zt]=(0,H.useState)(null),[Bt,Vt]=(0,H.useState)(null),[Ht,Ut]=(0,H.useState)(null),[Wt,Gt]=(0,H.useState)(null),[Kt,Jt]=(0,H.useState)(null),[Yt,Xt]=(0,H.useState)({primary:0,secondary:0}),[Zt,Qt]=(0,H.useState)({primary:null,secondary:null}),[$t,en]=(0,H.useState)(null),[nn,rn]=(0,H.useState)([]),[an,on]=(0,H.useState)(!1),[sn,un]=(0,H.useState)(null),[dn,fn]=(0,H.useState)(``),pn=(0,H.useRef)([]),mn=(0,H.useRef)([]),[hn,gn]=(0,H.useState)([]),[_n,yn]=(0,H.useState)([]),[bn,xn]=(0,H.useState)(!1),Sn=(0,H.useMemo)(()=>bn?new Set(_n.map(e=>e.path)):new Set,[_n,bn]),[Cn,wn]=(0,H.useState)(!1),[Tn,En]=(0,H.useState)([]),[Dn,On]=(0,H.useState)(null),kn=(0,H.useRef)(0),[An,jn]=(0,H.useState)(()=>{let e=Fe(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?p_({x:e.x,y:e.y}):p_({x:Math.max(20,window.innerWidth-340),y:110})}),Mn=(0,H.useCallback)(()=>{jn(e=>p_(e)),wn(!0)},[]),U=t.find(e=>e.id===r)??t[0],W=u_(U),Nn=l_(U),Pn=d_(U),Fn=W===`files`?U.listing?.parent??__(Pn):null,G=U.splitWith?t.find(e=>e.id===U.splitWith):void 0,Ln=W===`files`&&G!==void 0,Rn=G?d_(G):``,zn=G?G.listing?.parent??__(Rn):null,K=Ln&&G&&It===`secondary`?G:U,Bn=R?.defaultView??Se(),Hn=m_(K,Bn);(0,H.useEffect)(()=>{h(R?.accentColor,R?.secondaryColor,ct)},[R?.accentColor,R?.secondaryColor,ct]),(0,H.useEffect)(()=>{Pg(R?.fonts)},[R?.fonts]),(0,H.useEffect)(()=>{l(R?.timeFormat,R?.timeFormatPattern),g(R?.relativeTime,R?.relativeTimeWindowMinutes)},[R?.timeFormat,R?.timeFormatPattern,R?.relativeTime,R?.relativeTimeWindowMinutes]),(0,H.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!R?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[R?.backgroundSource]),(0,H.useEffect)(()=>(pe(e=>new Promise(t=>{On({id:++kn.current,prompt:e,resolve:t})})),()=>pe(null)),[]),(0,H.useEffect)(()=>{V(`primary`)},[r]),(0,H.useEffect)(()=>{Re(ue),We(0),Ye(0)},[W]),(0,H.useEffect)(()=>{We(0)},[Le.query,Le.matchCase,Le.regex]),(0,H.useEffect)(()=>{We(e=>Je===0?0:Math.min(e,Je-1))},[Je]);let Wn=Hn.columns.includes(`linkCount`),qn=(0,H.useMemo)(()=>{let e={},t=Pa(R),n={};for(let[e,t]of Object.entries(R?.placeNames??{}))n[i(e)]=t;for(let t of m)e[i(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=i(t),a=m.find(e=>i(e.path)===r);e[r]={name:n[r]??a?.name??(_(t)||t),path:t,kind:`folder`,icon:a?.icon??R?.placeIcons?.[t]??null}}return e},[m,R]),Jn=(0,H.useMemo)(()=>({places:qn,useIcons:R?.systemIcons===!1}),[qn,R?.systemIcons]),Qn=R?.defaultView?.showImages??Se().showImages,er=R?.defaultView?.imageStripHeight??Se().imageStripHeight,tr=W===`home`?(0,Z.jsx)(jt,{size:13}):W===`settings`?(0,Z.jsx)(mt,{size:13}):W===`recycle`?(0,Z.jsx)(vn,{size:13}):W===`gallery`?(0,Z.jsx)(gt,{size:13}):void 0,nr=be.open&&be.query.length>0,ir=(0,H.useDeferredValue)(be),ar=(0,H.useMemo)(()=>nr&&K.listing?K.listing.entries.filter(e=>qe(e.isDirectory?Ur(Jn,e.fullPath,e.name):e.name,ir)).map(e=>e.fullPath):[],[nr,ir,K.listing,Jn]);(0,H.useEffect)(()=>{De(0)},[be.query,be.matchCase,be.regex,K.listing?.path]);let or=ar.length===0?-1:Math.min(Ce,ar.length-1),sr=(0,H.useCallback)(()=>{xe(e=>({...e,open:!1,query:``})),De(0)},[]),cr=(0,H.useCallback)(()=>{xe(e=>({...e,open:!0})),Oe(e=>e+1)},[]),lr=(0,H.useCallback)(()=>{Re(e=>({...e,open:!0})),Ve(e=>e+1)},[]),ur=(0,H.useCallback)(()=>{Re(ue),We(0),Ye(0)},[]),pr=(0,H.useCallback)(e=>{We(t=>Je===0?0:(Math.min(t,Je-1)+e+Je)%Je)},[Je]),mr=(0,H.useCallback)(e=>{xe(t=>({...t,open:!0,query:t.open?t.query+e:e})),Oe(e=>e+1)},[]),hr=(0,H.useCallback)(e=>{De(t=>ar.length===0?0:(Math.min(t,ar.length-1)+e+ar.length)%ar.length)},[ar.length]),q=(0,H.useRef)({tabs:t,activeId:r,activePane:It});q.current={tabs:t,activeId:r,activePane:It};let xr=(0,H.useRef)(R);xr.current=R;let Cr=(0,H.useRef)(!1),wr=(0,H.useRef)([]),J=(0,H.useCallback)((e,t)=>{n(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),Dr=(0,H.useRef)(new Map),jr=(0,H.useCallback)(e=>{let t=(Dr.current.get(e)??0)+1;return Dr.current.set(e,t),()=>Dr.current.get(e)===t},[]),Nr=(0,H.useCallback)((e,t)=>{j.available&&t&&e===f_(q.current)&&j.send({type:`fs.focus`,payload:{path:t}})},[]),Fr=(0,H.useCallback)(async(e,t,n)=>{if(!(t&&Ss(t)))try{let r=(await ke(t,Wn)).listing;if(!n()||!r)return;J(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[Wn,J]),X=(0,H.useCallback)(async(e,t,n=!1)=>{let r=jr(e);sr(),Nr(e,t);let i=!n||!q.current.tabs.find(t=>t.id===e)?.listing,o=!n&&t!==void 0;J(e,e=>{if(!o)return{listing:n?e.listing:null,loading:!0,error:null,fresh:n&&e.fresh};let r=e.history[e.index],i=r!==void 0&&a(r,t);return{listing:null,loading:!0,error:null,fresh:!1,history:i?e.history:[...e.history.slice(0,e.index+1),t],index:i?e.index:e.index+1}});try{i&&Fr(e,t,r);let a=t&&Ss(t)?await Ts(t):await N(t,!0,Wn,$e.current,t?y_(t):void 0,e);if(!r())return;J(e,e=>({listing:a,view:a.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,n)=>n===e.index?a.path:t):e.history,index:e.index})),!n&&!Ss(a.path)&&ae(a.path).then(()=>dt(e=>e+1))}catch(i){if(!r())return;let a=q.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?d_(a):``,s=__(o),c=g_(i);if(o&&ve(c)){let i=f(o),a=await Ze(i,!!Ke(i));if(a){ye(i,a),r()&&X(e,t,n);return}}J(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...n?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[jr,Wn,J,Nr,sr,Fr]),Ir=(0,H.useRef)(new Set),Lr=(0,H.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e),n=t?.listing;if(!t||u_(t)!==`files`||!n)return;let r=n.entries.length;if(r<=0||r>=(n.total??0)||Rr.current.has(e))return;let i=`${e}|${n.path}|${r}`;if(Ir.current.add(i))try{let t=await ge(n.path,r,n.view?.sort??`name`,n.view?.sortDescending??!1);J(e,e=>{let i=e.listing;return!i||!a(i.path,n.path)||i.entries.length!==r||i.view?.sort!==n.view?.sort?{}:{listing:{...i,entries:[...i.entries,...t.entries],total:t.total}}})}catch{}finally{Ir.current.delete(i)}},[J]),Rr=(0,H.useRef)(new Set),zr=(0,H.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e),n=t?.listing;if(t&&u_(t)===`files`&&n&&!(n.entries.length>=(n.total??0))&&Rr.current.add(e))try{let t=[],r=n.entries.length,i=n.total??0;for(;r<i;){let e=await ge(n.path,r,n.view?.sort??`name`,n.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),r+=e.entries.length,i=e.total}if(t.length===0)return;J(e,e=>{let r=e.listing;return!r||!a(r.path,n.path)||r.entries.length!==n.entries.length?{}:{listing:{...r,entries:[...r.entries,...t.flat()],total:i}}})}catch{}finally{Rr.current.delete(e)}},[J]),[Vr,Wr]=(0,H.useState)(0),Gr=(0,H.useCallback)(async e=>{let t=q.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await zr(e),(q.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&Wr(e=>e+1)},[zr]),Kr=K.id,qr=u_(K),Jr=K.listing?.entries.length??0,Yr=K.listing?.total??0;(0,H.useEffect)(()=>{be.open&&be.query.length!==0&&(qr!==`files`||Jr>=Yr||zr(Kr))},[be.open,be.query,Kr,qr,Jr,Yr,zr]);let Xr=(0,H.useCallback)((e,t)=>{let n=yl(t);n&&(vl(n)?(sr(),jr(e),J(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):X(e,n))},[jr,X,J,sr]),Qr=(0,H.useCallback)(async(e,t,n)=>{if(sr(),vl(t)){jr(e),J(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=jr(e);Nr(e,t),J(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Ss(t)||Fr(e,t,r);let n=Ss(t)?await Ts(t):await N(t,!0,Wn,$e.current,y_(t),e);if(!r())return;J(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=g_(i);if(ve(a)){let i=f(t),a=await Ze(i,!!Ke(i));if(a){ye(i,a),r()&&Qr(e,t,n);return}}J(e,()=>({listing:{path:t,parent:__(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:g_(i)}))}},[jr,Wn,J,Nr,sr,Fr]),Q=(0,H.useCallback)((e,t=!0)=>{let r=h_(e??_l(`home`));return n(e=>[...e,r]),t&&o(r.id),e&&!vl(e)&&X(r.id,e),r.id},[X]),$r=(0,H.useCallback)(e=>{for(let t of q.current.tabs)u_(t)===`files`&&a(d_(t),e)&&X(t.id,e,!0)},[X]),ei=(0,H.useCallback)((e,t)=>{let n=_(t);for(let r of q.current.tabs)r.listing?.entries.some(t=>a(t.fullPath,e))&&J(r.id,r=>{let i=r.listing;if(!i)return{};let o=i.entries.map(r=>a(r.fullPath,e)?{...r,name:n,fullPath:t}:r);return{listing:{...i,entries:o}}})},[J]),ti=(0,H.useRef)([]);(0,H.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&v(t)&&e.add(i(f(t)))}let n=ti.current.filter(t=>!e.has(t));ti.current=[...e],n.length>0&&ze(n)},[t]);let ni=(0,H.useCallback)((e,t=!1)=>{t?Q(_l(e)):Xr(q.current.activeId,_l(e))},[Q,Xr]),ri=(0,H.useCallback)(e=>{let{tabs:t,activeId:r}=q.current,i=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(mn.current.push(l_(i)),mn.current.length>s_&&mn.current.shift(),gn([...mn.current])),a.length===0){let e=h_();n([e]),o(e.id);return}let s=t.findIndex(t=>t.id===e);n(a),r===e&&o(a[Math.min(s,a.length-1)].id)},[]),ii=(0,H.useCallback)(()=>{let e=mn.current.pop();if(!e)return;gn([...mn.current]);let t={...h_(e),fresh:!1};n(e=>[...e,t]),o(t.id),u_(t)===`files`&&X(t.id,d_(t))},[X]),ai=(0,H.useCallback)(e=>{let t=mn.current,r=t[e];if(!r)return;t.splice(e,1),gn([...t]);let i={...h_(r),fresh:!1};n(e=>[...e,i]),o(i.id),u_(i)===`files`&&X(i.id,d_(i))},[X]),oi=(0,H.useCallback)((e,t=!1)=>{t?Q(e):Xr(f_(q.current),e??_l(`home`))},[Xr,Q]),ci=(0,H.useCallback)(e=>{let{tabs:t,activeId:n}=q.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;o(r[i].id)},[]),li=(0,H.useCallback)(()=>{let{tabs:e,activeId:t}=q.current,r=e.find(e=>e.id===t);if(!r||u_(r)!==`files`)return;let i=r.splitWith?e.find(e=>e.id===r.splitWith):void 0;if(i){n(e=>e.filter(e=>e.id!==i.id)),J(t,()=>({splitWith:void 0})),V(`primary`);return}let a=d_(r),o={...h_(a),hidden:!0};n(e=>[...e,o]),J(t,()=>({splitWith:o.id})),X(o.id,a),V(`primary`)},[X,J]),ui=(0,H.useCallback)(e=>{Et(e),ce(`yafm.preview.width`,e)},[]),fi=(0,H.useCallback)((e,t,n)=>Nt(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),pi=(0,H.useCallback)((e,t)=>fi(`gallery`,e,t),[fi]),mi=(0,H.useCallback)((e,t)=>fi(`recycle`,e,t),[fi]),hi=Ln?It===`secondary`?kt??Dt:Dt??kt:Dt,gi=Ln&&It===`secondary`?Yt.secondary:Yt.primary,_i=W===`files`?hi:Mt.kind===W?Mt.info:null,vi=W===`files`?gi>1?y(e,gi,`k_1_item_selected`,`count_items_selected`):void 0:Mt.kind===W?Mt.note:void 0,yi=(0,H.useMemo)(()=>W===`files`&&U.listing?b_(e,U.listing):dn,[W,U.listing,e,dn]),bi=(0,H.useRef)(null),xi=e=>{e.preventDefault();let t=bi.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);p(r),ce(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Si=(e,t,n)=>{t&&zt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Ci=(0,H.useCallback)((e,t)=>{Xt(n=>n[e]===t?n:{...n,[e]:t})},[]),Ti=(0,H.useCallback)(e=>Ci(`primary`,e),[Ci]),Ei=(0,H.useCallback)(e=>Ci(`secondary`,e),[Ci]),Di=(e,t)=>{Yt[e]!==0&&Qt(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},Oi=async(e,t=!1)=>{let n=Lt;if(zt(null),!n)return;let r=e===null?await $n(n.directory,t):await rr(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;sr(),en(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},ki=(0,H.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===f_(q.current));t&&t.index>0&&Qr(t.id,t.history[t.index-1],t.index-1)},[Qr]),Ai=(0,H.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===f_(q.current));t&&t.index<t.history.length-1&&Qr(t.id,t.history[t.index+1],t.index+1)},[Qr]),ji=(0,H.useCallback)(()=>{let{tabs:e}=q.current,t=e.find(e=>e.id===f_(q.current));t&&u_(t)===`files`&&t.listing?.parent&&oi(t.listing.parent)},[oi]),Mi=(0,H.useRef)(null),Ni=(0,H.useCallback)(()=>{for(let e of q.current.tabs)e.listing&&X(e.id,e.listing.path,!0)},[X]),Pi=(0,H.useCallback)(e=>{e.length!==0&&(En(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Mn())},[Mn]),Fi=(0,H.useCallback)(async e=>{let t=await Yn(e);t.length!==0&&Pi(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Pi]),Ii=(0,H.useCallback)(e=>{let t=new Set(e);En(e=>e.filter(e=>!t.has(e.path)))},[]),Li=(0,H.useCallback)(async e=>{let t=xr.current;if(!t)return;let n=await Yn(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>i(e.path))),a=n.filter(e=>!r.has(i(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...t,favorites:[...t.favorites??[],...a]};z(o),await Ne(o),ht(e=>e+1)},[]),Ri=(0,H.useCallback)(async e=>{let t=xr.current;if(!t)return;let n=new Set(e.map(i)),r=(t.favorites??[]).filter(e=>!n.has(i(e.path)));if(r.length===(t.favorites??[]).length)return;let a={...t,favorites:r};z(a),await Ne(a),ht(e=>e+1)},[]),zi=(0,H.useCallback)(()=>En([]),[]),Bi=(0,H.useRef)(-1),Vi=(0,H.useCallback)(e=>{yn(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),xn(e.move),e.entries.length>0&&Mn()},[Mn]),Hi=(0,H.useCallback)(async()=>{if(j.available)try{let e=await Gn();Bi.current=e.sequence,Vi(e)}catch{}},[Vi]),Ui=(0,H.useCallback)(async e=>{e.length!==0&&await Un(e,!1)&&await Hi()},[Hi]),Wi=(0,H.useRef)(Tn);Wi.current=Tn;let Gi=(0,H.useRef)(Cn);Gi.current=Cn;let Ki=(0,H.useRef)(!1);(0,H.useEffect)(()=>{let e=R?.trayAutoShow??Xe().trayAutoShow,t=t=>{e&&Bo(t)&&(Gi.current||(Ki.current=!0),Mn())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Ki.current&&window.setTimeout(()=>{Ki.current&&Wi.current.length===0&&wn(!1),Ki.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[Mn,R?.trayAutoShow]),(0,H.useEffect)(()=>{let e=()=>jn(e=>p_(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let qi=(0,H.useCallback)(async()=>{let e=Wi.current;if(e.length>0){let t=await Yn(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));En(e=>e.filter(e=>n.has(e.path)))}await Hi()},[Hi]),Ji=(0,H.useCallback)(()=>{qi(),St(e=>e+1),Ni()},[qi,Ni]),Yi=(0,H.useCallback)(e=>{let t=p_(e);jn(t),Te(`yafm.tray.position`,t)},[]),Xi=(0,H.useCallback)(()=>{Ki.current=!1,Cn?wn(!1):Mn()},[Mn,Cn]),Zi=(0,H.useCallback)(async(t,n,r)=>{let i=await Kn(t,n,r);i.cancelled||(i.ok?(r&&Ii(t),St(e=>e+1),Ni(),Hi()):Me(i.error??e(`the_files_could_not_be_transferred`)))},[Ni,Hi,Ii]);(0,H.useEffect)(()=>{if(j.available)return _r().then(e=>{pn.current=e,rn(e)},()=>void 0),j.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=pn.current.find(t=>t.id===e.id);return!t||t.state!==e.state});pn.current=n,rn(n),r&&on(!0)})},[]);let Qi=(0,H.useCallback)(()=>{vr().then(()=>_r().then(e=>{pn.current=e,rn(e)},()=>void 0))},[]);(0,H.useEffect)(()=>{if(!j.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Gn();if(!e||t.sequence===Bi.current)return;Bi.current=t.sequence,Vi(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Vi]);let $i=(0,H.useCallback)(async e=>{let t=e?await dr():await fr();t.ok?(St(e=>e+1),Ni()):t.error&&!t.error.startsWith(`Nothing to`)&&Me(t.error)},[Ni]),ea=(0,H.useRef)(Wn);(0,H.useEffect)(()=>{ea.current!==Wn&&(ea.current=Wn,Ni())},[Wn,Ni]);let ta=(0,H.useCallback)((e,t)=>{let{tabs:n}=q.current,r=n.find(t=>t.id===e);if(!r||u_(r)!==`files`)return;let i=d_(r),a=xr.current?.defaultView??Se(),o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||Se().iconSize,gridSize:r.view?.gridSize||a.gridSize||Se().gridSize,sort:r.view?.sort??Se().sort,sortDescending:r.view?.sortDescending??Se().sortDescending,...t};J(e,()=>({view:o})),Mi.current!==null&&window.clearTimeout(Mi.current),Mi.current=window.setTimeout(()=>{Mi.current=null,tt(i,o)},250)},[J]),na=(0,H.useCallback)(e=>{ta(f_(q.current),e)},[ta]),ra=(0,H.useCallback)(e=>{let t=xr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Se(),columns:e}};z(n),Ne(n)},[]),ia=(0,H.useCallback)(e=>{let t=xr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Se(),showImages:e}};z(n),Ne(n)},[]),oa=(0,H.useCallback)(e=>{let t=xr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??Se(),imageStripHeight:e}};z(n),Ne(n)},[]),sa=(0,H.useCallback)((e,t,n,r)=>{let i=q.current.tabs.find(t=>t.id===e);if(!i||u_(i)!==`files`||!i.listing)return;let a=d_(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));J(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Ge(a,t,n,r)},[J]),ca=(0,H.useCallback)((e,t)=>{let n=q.current.tabs.find(t=>t.id===e);if(!n)return;let r=m_(n,xr.current?.defaultView??Se());ta(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),X(e,d_(n),!0)},[ta,X]),la=(0,H.useCallback)((e,t)=>{n(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),ua=(0,H.useCallback)(()=>{et().then(S,()=>S([]))},[]),da=(0,H.useCallback)(e=>{let t=(e.openTabs??[]).map(yl).filter(e=>e!==null);if(t.length===0)return!1;let r=t.map(e=>({...h_(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),r.length-1);n(r),o(r[i].id);let a=r[i];return(u_(a)===`files`?X(a.id,d_(a),!0):Promise.resolve()).then(()=>{for(let e of r)e!==a&&u_(e)===`files`&&X(e.id,d_(e),!0)}),!0},[X]),fa=(0,H.useCallback)(e=>{let t=wr.current;if(wr.current=[],t.length===0)return;let n=t.filter(e=>!a_.has(e));for(let e of t)n.includes(e)||o_(e);if(n.length===0)return;let{tabs:r}=q.current;if(!e&&r.length===1&&r[0].fresh){Xr(r[0].id,n[0]),o_(n[0]);for(let e of n.slice(1))Q(e),o_(e);return}let i=n.map(e=>{let t=Q(e);return o_(e),t}).at(-1);i&&setTimeout(()=>o(i),0)},[Q,Xr]),pa=(0,H.useCallback)(()=>{I().then(e=>{z(e),ot(e.recentLimit);let t=Tr(e.shortcuts);ft(t),Or(Er(t,`openInNewTab`)),ht(e=>e+1),Cr.current||(Cr.current=!0,fa(e.restoreTabs&&da(e)))},()=>{ot(10),Cr.current=!0,fa(!1)})},[fa,da]),ma=(0,H.useCallback)(()=>{he().then(it,()=>it([]))},[]),ha=(0,H.useCallback)(()=>{me().then(w,()=>w([]))},[]),ga=t.filter(e=>!e.hidden),_a=ga.map(l_),va=_a.join(`
`),ya=Math.max(ga.findIndex(e=>e.id===r),0);(0,H.useEffect)(()=>{if(!R?.restoreTabs)return;let e=setTimeout(()=>void He(_a,ya),700);return()=>clearTimeout(e)},[va,ya,R?.restoreTabs]),(0,H.useEffect)(()=>{let{tabs:e,activeId:t}=q.current,n=e.find(e=>e.id===t);n&&n.fresh&&u_(n)===`files`&&X(n.id,d_(n),!0),ua(),pa(),ha(),re().then(ne,()=>ne(null))},[X,ua,pa,ha]),(0,H.useEffect)(()=>{if(E().then(k,()=>k(null)),j.available)return j.on(e=>{let t=e;t.type===`update.checked`&&t.data&&k(t.data)})},[]),(0,H.useEffect)(()=>{if(j.available)return j.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&u({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&Me(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&Me(n.data.error??e(`pairing_failed`))}})},[e]),(0,H.useEffect)(()=>{let e=setInterval(ha,3e4);return()=>clearInterval(e)},[ha]),(0,H.useEffect)(()=>{W===`home`&&(ma(),ha())},[W,U.id,ma,ha]),(0,H.useEffect)(()=>{if(!j.available)return;let e=j.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=q.current,i=t.data.startup===!0;i&&a_.has(n)?o_(n):i&&!Cr.current?wr.current.includes(n)||wr.current.push(n):(i&&r.length===1&&r[0].fresh?Xr(r[0].id,n):vl(n)?Xr(f_(q.current),n):Q(n),i&&o_(n))});return j.send({type:`app.ready`}),e},[Xr,Q]),(0,H.useEffect)(()=>{if(j.available)return j.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:r,sizes:i}=t.data;n(e=>e.some(e=>e.listing?.path===r)?e.map(e=>e.listing?.path===r?{...e,listing:{...e.listing,folderSizes:{...e.listing.folderSizes,...i}}}:e):e)})},[]),(0,H.useEffect)(()=>{if(j.available)return j.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:r,counts:i}=t.data;n(e=>e.some(e=>e.listing?.path===r)?e.map(e=>e.listing?.path===r?{...e,listing:{...e.listing,counts:{...e.listing.counts,...i}}}:e):e)})},[]),(0,H.useEffect)(()=>{let e=e=>{if(Pr(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),ki();return}if(e.key===`BrowserForward`){e.preventDefault(),Ai();return}if(e.key===`Escape`&&be.open){e.preventDefault(),sr();return}let t=Ar(e);if(Y(B,`closeTab`,t)&&(e.preventDefault(),ri(f_(q.current))),Y(B,`newTab`,t)&&(e.preventDefault(),Q()),Y(B,`reopenTab`,t)&&(e.preventDefault(),ii()),Y(B,`goBack`,t)&&(e.preventDefault(),ki()),Y(B,`goForward`,t)&&(e.preventDefault(),Ai()),Y(B,`goUp`,t)&&(e.preventDefault(),ji()),Y(B,`find`,t)&&(e.preventDefault(),W===`files`?cr():lr()),Y(B,`location`,t)&&(e.preventDefault(),bt(e=>e+1)),Y(B,`home`,t)){e.preventDefault();let t=m.find(e=>e.kind===`home`)?.path;t&&oi(t)}Y(B,`iconsView`,t)&&(e.preventDefault(),W===`files`&&na({mode:`grid`})),Y(B,`detailsView`,t)&&(e.preventDefault(),W===`files`&&na({mode:`list`})),Y(B,`nextTab`,t)&&(e.preventDefault(),ci(1)),Y(B,`previousTab`,t)&&(e.preventDefault(),ci(-1)),Y(B,`hidden`,t)&&(e.preventDefault(),rt().then(()=>{St(e=>e+1),Ni()})),Y(B,`undo`,t)&&(e.preventDefault(),$i(!0)),Y(B,`redo`,t)&&(e.preventDefault(),$i(!1)),Y(B,`splitView`,t)?(e.preventDefault(),li()):Object.keys(B).some(e=>e!==`openInNewTab`&&Y(B,e,t))||W!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),mr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[B,W,be.open,ri,ii,Q,ki,Ai,ji,cr,lr,sr,mr,na,ci,oi,m,Ni,$i,li]),(0,H.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),ki()):(e.button===4||e.button===9)&&(e.preventDefault(),Ai())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[ki,Ai]),(0,H.useEffect)(()=>{if(j.available)return j.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:ki();break;case`forward`:Ai()}})},[ki,Ai]);let ba=(0,H.useMemo)(()=>{let e=new Set;for(let n of t){if(u_(n)!==`files`)continue;let t=d_(n);if(t&&!Ss(t)){if(v(t)){let n=__(f(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),xa=ba.join(`\0`);(0,H.useEffect)(()=>{j.available&&j.send({type:`fs.watch`,payload:{paths:ba,owner:`app`}})},[xa,r]);let Sa=u_(K)===`files`?d_(K):``;(0,H.useEffect)(()=>{j.available&&j.send({type:`fs.focus`,payload:{path:Sa||null}})},[Sa]),(0,H.useEffect)(()=>{if(j.available)return j.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let n=t.data.path,r=q.current.tabs.filter(e=>u_(e)===`files`&&a(d_(e),n)),i=q.current.tabs.filter(e=>{let t=d_(e);return u_(e)===`files`&&t.length>0&&v(t)&&a(f(t),n)});if(r.length!==0||i.length!==0){le(n);for(let e of i){let t=q.current.tabs.find(t=>t.id===e.id),r=t?d_(t):``;t&&u_(t)===`files`&&!t.loading&&v(r)&&a(f(r),n)&&X(e.id,r,!0)}r.length!==0&&N(n,!1,Wn).then(e=>{for(let t of r){let n=q.current.tabs.find(e=>e.id===t.id);n&&u_(n)===`files`&&a(d_(n),e.path)&&(n.loading?window.setTimeout(()=>{let n=q.current.tabs.find(e=>e.id===t.id);n&&!n.loading&&u_(n)===`files`&&a(d_(n),e.path)&&J(t.id,()=>({listing:e}))},300):J(t.id,()=>({listing:e})))}},()=>void 0)}})},[Wn,X,J]);let Ca=U.index>0,wa=U.index<U.history.length-1,Ta=(e,t)=>{let n=m_(e,Bn),r=e.listing?.path??e.history[e.index]??``,i=v(r),o=i&&b(r);return(0,Z.jsx)(Js,{platform:T?.platform,confirmDelete:R?.confirmDelete??Xe().confirmDelete,cutPaths:Sn,previewVideoAudio:R?.previewVideoAudio??Xe().previewVideoAudio,previewVideoAutoplay:R?.previewVideoAutoplay??Xe().previewVideoAutoplay,showDetails:!1,onPreviewInfo:t?Ot:At,onActivate:()=>V(t?`primary`:`secondary`),enableShortcuts:(!Ln||(t?It===`primary`:It===`secondary`))&&(!i||o),error:e.error,find:e.id===K.id?{...be,currentPath:or<0?null:ar[or]}:void 0,selectMatchesToken:e.id===K.id?je:0,imageStripHeight:er,listing:e.listing,loading:e.loading,onImageStripHeight:oa,readOnly:i&&!o||Ss(e.listing?.path??``),onOpen:(t,n)=>{n?Q(t):X(e.id,t)},onOpenFile:(t,n)=>{Ss(t)?Ds(t).catch(e=>void Me(g_(e))):x(t)?R?.archiveHandler??Xe().archiveHandler?n?Q(t):X(e.id,t):Ae(t):v(t)?(async()=>{let e=await we(t,$e.current,y_(t));if(!e.path&&ve(e.error)){let n=f(t),r=Ke(n);r&&se(n);let i=await Ze(n,!!r);i&&(ye(n,i),e=await we(t,$e.current,i))}e.path?Ae(e.path):e.error&&Me(e.error)})():Ae(t)},onRefresh:()=>{let t=e.listing?.path;t&&$r(t)},onLoadMore:()=>void Lr(e.id),onEnsureComplete:()=>void Gr(e.id),selectAllToken:e.id===K.id?Vr:0,onRename:ei,onSelectionCountChange:t?Ti:Ei,onSetTags:(t,n,r)=>sa(e.id,t,n,r),selectionMenuRequest:t?Zt.primary:Zt.secondary,onSort:t=>ca(e.id,t),onPaste:Ji,onClipboardChanged:()=>void Hi(),onTransfer:Zi,onAddToTray:e=>void Fi(e),onAddFavorite:e=>void Li(e),onRemoveFavorite:e=>void Ri(e),favoritePaths:lt,onExtractArchive:(e,t)=>void ja(e,t),openOnSingleClick:R?.openOnSingleClick??Xe().openOnSingleClick,pendingRename:$t&&t===(It===`primary`)&&a($t.directory,e.listing?.path??``)?$t.path:null,pendingRenameToken:$t?.token??0,refreshToken:xt,shortcuts:B,showCheckboxes:R?.showCheckboxes??Xe().showCheckboxes,showImages:Qn,view:n})},Ea=be.open&&(0,Z.jsx)(Rf,{current:or,focusToken:F,matchCase:be.matchCase,mode:be.mode,onClose:sr,onMatchCase:()=>xe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>xe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>hr(1),onPrevious:()=>hr(-1),onQuery:e=>xe(t=>({...t,query:e})),onRegex:()=>xe(e=>({...e,regex:!e.regex})),query:be.query,regex:be.regex,total:ar.length,onSelectMatches:ar.length>0?()=>Ie(e=>e+1):void 0}),Da=W===`files`&&v(Pn),Oa=Da&&b(Pn),ka=Da&&U.listing?.archiveEncrypted===!0,Aa=async(t,n)=>{let r=f(t),i=await _e(r,n,$e.current,y_(r));if(!i.ok&&ve(i.error)){let e=Ke(r);e&&se(r);let t=await Ze(r,!!e);t&&(ye(r,t),i=await _e(r,n,$e.current,t))}i.ok?($r(n),Ee(),X(U.id,n,!0)):Me(`${e(`could_not_extract_the_archive`)}${i.error?`\n${i.error}`:``}`)},ja=async(e,t)=>{let n=f(e),r=__(n);if(!r)return;if(t===`choose`){let e=await Zr(r);e&&await Aa(n,e);return}let i=t===`named`;if(t===`auto`){let e=a(n,Pn)?U.listing?.entries??[]:(await N(n,!1,!1,$e.current,y_(n))).entries;i=!(e.length===1&&e[0].isDirectory)}let o=r.includes(`\\`)?`\\`:`/`,s=i?`${r.replace(/[\\/]+$/,``)}${o}${v_(n)}`:r;await Aa(n,s)},Ma=async e=>{Da&&await ja(Pn,e)},Na=async()=>{Da&&await ja(Pn,`choose`)},Fa=(0,Z.jsxs)(E_,{children:[(0,Z.jsx)(D_,{"data-shortcut":Mr(B.goBack),disabled:!Ca,onClick:e=>{U.index>0&&kr(e)?Q(U.history[U.index-1]):ki()},onContextMenu:e=>{U.index<=0||(e.preventDefault(),Ut({x:e.clientX,y:e.clientY,tab:U,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Z.jsx)(ln,{})}),(0,Z.jsx)(D_,{"data-shortcut":Mr(B.goForward),disabled:!wa,onClick:e=>{U.index<U.history.length-1&&kr(e)?Q(U.history[U.index+1]):Ai()},onContextMenu:e=>{U.index>=U.history.length-1||(e.preventDefault(),Ut({x:e.clientX,y:e.clientY,tab:U,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Z.jsx)(qt,{})}),(0,Z.jsx)(D_,{"data-shortcut":Mr(B.goUp),disabled:W!==`files`||!Fn,onClick:e=>{Fn&&(kr(e)?Q(Fn):oi(Fn))},title:e(`up_one_level`),type:`button`,children:(0,Z.jsx)(Pt,{})}),(0,Z.jsx)(Gf,{focusToken:vt,icon:tr,label:W===`files`?void 0:e(pl[W]),onContextMenu:W===`files`?(e,t,n)=>Gt({x:t,y:n,path:e}):void 0,onNavigate:oi,path:W===`files`?Pn:Nn}),W===`files`&&(!Da||Oa)&&(0,Z.jsx)(D_,{onClick:e=>Si(e,Pn,()=>void X(U.id,Pn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Z.jsx)(Ft,{})}),(0,Z.jsx)(D_,{"data-shortcut":Mr(B.find),onClick:()=>W===`files`?cr():lr(),title:e(`search`),type:`button`,children:(0,Z.jsx)(Rt,{})}),Yt.primary>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(qg,{}),(0,Z.jsx)(D_,{onClick:e=>Di(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,Z.jsx)(cn,{})})]}),(0,Z.jsx)(`span`,{ref:un,style:{display:`contents`}}),Da&&(0,Z.jsxs)(O_,{children:[(0,Z.jsx)(qg,{}),ka&&(0,Z.jsxs)(k_,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Z.jsx)(yt,{size:12}),e(`encrypted`)]}),(0,Z.jsx)(D_,{onClick:()=>void Na(),onContextMenu:e=>{e.preventDefault(),Vt({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,Z.jsx)(tn,{})}),(0,Z.jsx)(di,{icon:(0,Z.jsx)(_t,{size:15}),onChange:e=>{let t=Number(e);Qe(t),$e.current=t,Da&&X(U.id,Pn,!0)},options:c_.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(c_.find(e=>e.value===String(L))?.label??`auto`)}`,value:String(L)})]})]}),Ia=Le.open?{...Le,index:Ue}:null,La=t=>{let n=vl(t);return n?e(pl[n]):Ur(Jn,t,xl(t)||e(`files`))};return(0,Z.jsx)(Br,{value:Jn,children:(0,Z.jsxs)(S_,{$rounded:oe,children:[(0,Z.jsx)(Xl,{settings:R,theme:ct}),(0,Z.jsx)(sg,{activeId:U.id,closedTabs:hn,onClose:ri,onNewTab:()=>Q(),onRestoreClosed:ai,onReorder:la,onTransferToTab:Zi,onSelect:o,onViewChange:na,onColumns:ra,onShowImages:ia,showImages:Qn,tasks:nn,onClearTasks:Qi,activityOpen:an,onActivityOpenChange:on,trayCount:Tn.length+_n.length,trayVisible:Cn,onToggleTray:Xi,split:Ln,canSplit:W===`files`,onToggleSplit:li,details:Ct,canDetails:W===`files`||W===`recycle`||W===`gallery`,onToggleDetails:()=>wt(e=>!e),currentFolder:W===`files`&&!Ss(Pn)?Pn:``,shortcuts:B,view:Hn,tabs:t.filter(e=>!e.hidden).map(n=>{let r=u_(n),i=d_(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?d_(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Hr(Jn,i):void 0,archive:r===`files`&&v(i),split:!!a,title:r===`files`?Ur(Jn,i,_(i)||e(`files`)):e(pl[r]),partner:a?{title:Ur(Jn,o,_(o)||e(`files`)),place:Hr(Jn,o)}:void 0}})}),(0,Z.jsxs)(C_,{children:[(0,Z.jsx)(sp,{activeKind:W,currentPath:W===`files`?Nn:``,drives:C,historyVersion:ut,onNavigate:oi,onOpenView:ni,homePath:m.find(e=>e.kind===`home`)?.path??``,places:m,recent:nt,recentLimit:at,version:pt}),(0,Z.jsxs)(w_,{children:[(0,Z.jsxs)(F_,{children:[(0,Z.jsxs)(I_,{children:[W!==`files`&&Fa,(0,Z.jsx)(T_,{children:(0,Z.jsxs)(H.Suspense,{fallback:null,children:[W!==`files`&&Le.open&&(0,Z.jsx)(Rf,{current:Ue,focusToken:Be,matchCase:Le.matchCase,mode:Le.mode,onClose:ur,onMatchCase:()=>Re(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Re(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>pr(1),onPrevious:()=>pr(-1),onQuery:e=>Re(t=>({...t,query:e})),onRegex:()=>Re(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:Le.query,regex:Le.regex,total:Je,onSelectMatches:W===`gallery`||W===`recycle`?()=>Ie(e=>e+1):void 0}),W===`files`?Ln&&G?(0,Z.jsxs)(j_,{ref:bi,children:[(0,Z.jsxs)(M_,{style:{flex:d},children:[(0,Z.jsxs)(A_,{$active:It===`primary`,onPointerDown:()=>V(`primary`),children:[(0,Z.jsx)(D_,{"data-shortcut":Mr(B.goBack),disabled:!Ca,onClick:e=>{let t=U.index-1;t<0||(kr(e)?Q(U.history[t]):Qr(U.id,U.history[t],t))},onContextMenu:e=>{U.index<=0||(e.preventDefault(),Ut({x:e.clientX,y:e.clientY,tab:U,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Z.jsx)(ln,{})}),(0,Z.jsx)(D_,{"data-shortcut":Mr(B.goForward),disabled:!wa,onClick:e=>{let t=U.index+1;t>=U.history.length||(kr(e)?Q(U.history[t]):Qr(U.id,U.history[t],t))},onContextMenu:e=>{U.index>=U.history.length-1||(e.preventDefault(),Ut({x:e.clientX,y:e.clientY,tab:U,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Z.jsx)(qt,{})}),(0,Z.jsx)(D_,{"data-shortcut":Mr(B.goUp),disabled:!Fn,onClick:e=>{Fn&&(kr(e)?Q(Fn):X(U.id,Fn))},title:e(`up_one_level`),type:`button`,children:(0,Z.jsx)(Pt,{})}),(0,Z.jsx)(Gf,{focusToken:It===`primary`?vt:void 0,onContextMenu:(e,t,n)=>Gt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Q(e):void X(U.id,e),path:Pn}),(0,Z.jsx)(D_,{onClick:e=>Si(e,Pn,()=>void X(U.id,Pn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Z.jsx)(Ft,{})}),(0,Z.jsx)(D_,{"data-shortcut":Mr(B.find),onClick:cr,title:e(`search`),type:`button`,children:(0,Z.jsx)(Rt,{})}),Yt.primary>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(qg,{}),(0,Z.jsx)(D_,{onClick:e=>Di(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,Z.jsx)(cn,{})})]})]}),Ta(U,!0),It===`primary`&&Ea]}),(0,Z.jsx)(N_,{onDoubleClick:()=>p(.5),onPointerDown:xi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,Z.jsxs)(M_,{$enter:!0,style:{flex:1-d},children:[(0,Z.jsxs)(A_,{$active:It===`secondary`,onPointerDown:()=>V(`secondary`),children:[(0,Z.jsx)(D_,{"data-shortcut":Mr(B.goBack),disabled:G.index<=0,onClick:e=>{let t=G.index-1;t<0||(kr(e)?Q(G.history[t]):Qr(G.id,G.history[t],t))},onContextMenu:e=>{G.index<=0||(e.preventDefault(),Ut({x:e.clientX,y:e.clientY,tab:G,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Z.jsx)(ln,{})}),(0,Z.jsx)(D_,{"data-shortcut":Mr(B.goForward),disabled:G.index>=G.history.length-1,onClick:e=>{let t=G.index+1;t>=G.history.length||(kr(e)?Q(G.history[t]):Qr(G.id,G.history[t],t))},onContextMenu:e=>{G.index>=G.history.length-1||(e.preventDefault(),Ut({x:e.clientX,y:e.clientY,tab:G,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Z.jsx)(qt,{})}),(0,Z.jsx)(D_,{"data-shortcut":Mr(B.goUp),disabled:!zn,onClick:e=>{zn&&(kr(e)?Q(zn):X(G.id,zn))},title:e(`up_one_level`),type:`button`,children:(0,Z.jsx)(Pt,{})}),(0,Z.jsx)(Gf,{focusToken:It===`secondary`?vt:void 0,onContextMenu:(e,t,n)=>Gt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?Q(e):void X(G.id,e),path:Rn}),(0,Z.jsx)(D_,{onClick:e=>Si(e,Rn,()=>void X(G.id,Rn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Z.jsx)(Ft,{})}),(0,Z.jsx)(D_,{"data-shortcut":Mr(B.find),onClick:cr,title:e(`search`),type:`button`,children:(0,Z.jsx)(Rt,{})}),Yt.secondary>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(qg,{}),(0,Z.jsx)(D_,{onClick:e=>Di(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,Z.jsx)(cn,{})})]})]}),Ta(G,!1),It===`secondary`&&Ea]})]}):(0,Z.jsxs)(Z.Fragment,{children:[Fa,(0,Z.jsxs)(P_,{children:[Ta(U,!0),Ea]})]}):W===`home`?(0,Z.jsx)(e_,{platform:T?.platform,drives:C,find:Ia,historyVersion:ut,onSearchMatches:Ye,homePath:m.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:ha,onHistoryChanged:()=>dt(e=>e+1),onAddToTray:e=>void Fi(e),onAddFavorite:e=>void Li(e),onRemoveFavorite:e=>void Ri(e),favoritePaths:lt,onExtractArchive:(e,t)=>void ja(e,t),settingsVersion:pt,theme:ct,onOpen:oi,onLayoutChanged:pa,onPlacesChanged:S,onRecentCleared:ma,places:m,recent:nt,recentLimit:at,visibilityVersion:xt}):W===`settings`?(0,Z.jsx)(t_,{appInfo:T,find:Ia,focusSection:A,onSearchMatches:Ye,onSettingsChanged:pa}):W===`gallery`?(0,Z.jsx)(n_,{platform:T?.platform,toolbarSlot:sn,onStatusChange:fn,confirmDelete:R?.confirmDelete??Xe().confirmDelete,find:Ia,onSearchMatches:Ye,openOnSingleClick:R?.openOnSingleClick??Xe().openOnSingleClick,onAddToTray:e=>void Fi(e),onAddFavorite:e=>void Li(e),onRemoveFavorite:e=>void Ri(e),favoritePaths:lt,onExtractArchive:(e,t)=>void ja(e,t),shortcuts:B,showCheckboxes:R?.showCheckboxes??Xe().showCheckboxes,selectMatchesToken:je,onPreviewChange:pi,view:Hn}):(0,Z.jsx)(r_,{find:Ia,toolbarSlot:sn,onStatusChange:fn,onOpenLocation:oi,onShowDetails:()=>wt(!0),platform:T?.platform,selectMatchesToken:je,onPreviewChange:mi})]})},W)]}),(W===`files`||W===`gallery`||W===`recycle`)&&(0,Z.jsx)(aa,{emptyNote:e(`nothing_selected`),info:_i,onWidth:ui,open:Ct,selectionNote:vi,videoAudio:R?.previewVideoAudio??Xe().previewVideoAudio,videoAutoplay:R?.previewVideoAutoplay??Xe().previewVideoAutoplay,width:Tt})]}),(0,Z.jsxs)(V_,{children:[(0,Z.jsx)(`span`,{children:yi}),T?(0,Z.jsxs)(L_,{children:[(0,Z.jsxs)(`span`,{children:[`v`,T.version,` · `,T.platform]}),T.debug&&(0,Z.jsx)(B_,{children:`debug`}),O?.available&&(0,Z.jsxs)(R_,{onClick:e=>{ie(`updates`),ni(`settings`,kr(e))},title:e(`version_version_is_available`,{version:O.latest}),type:`button`,children:[(0,Z.jsx)(z_,{}),e(`update_available`)]})]}):(0,Z.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,Z.jsx)(Ko,{clipboardItems:_n,clipboardMove:bn,currentDirectory:W===`files`?Nn:``,items:Tn,onAdd:e=>void Fi(e),onClear:zi,onClose:()=>wn(!1),onCopyToClipboard:e=>void Ui(e),onPosition:Yi,onRemove:Ii,onTransfer:Zi,position:An,visible:Cn}),Lt&&(0,Z.jsx)(si,{creationOnly:!0,directory:Lt.directory,menu:{x:Lt.x,y:Lt.y,paths:[],background:!0},onClose:()=>zt(null),onCreateFile:e=>void Oi(e),onCreateFolder:e=>void Oi(null,e),shortcuts:B}),Wt&&(0,Z.jsx)(si,{allowCompression:!0,directory:__(Wt.path)??Wt.path,menu:{x:Wt.x,y:Wt.y,paths:[Wt.path]},onAddToTray:e=>void Fi(e),onAddFavorite:e=>void Li(e),onRemoveFavorite:e=>void Ri(e),favoritePaths:lt,onExtractArchive:(e,t)=>void ja(e,t),onArchiveCreated:e=>{e&&$r(__(Wt.path)??Wt.path)},onClose:()=>Gt(null),onCompressTo:(e,t)=>Jt({paths:e,name:t}),onCopy:(e,t)=>void Un(e,t),onDelete:e=>void Zn(e,!1).then(()=>$r(__(Wt.path)??Wt.path)),onOpen:(e,t)=>t?Q(e):void X(U.id,e),onOpenFile:e=>void Ae(e),onPaste:e=>void Xn(e).then(t=>{t.ok&&$r(e)}),onRefresh:()=>$r(Wt.path),shortcuts:B,target:{path:Wt.path,isDirectory:!0}}),Kt&&(0,Z.jsx)(wi,{initialDirectory:__(Wt?.path??Pn)??Pn,initialName:Kt.name,onCancel:()=>Jt(null),onCompress:async e=>{let t=await gr(Kt.paths,e);return!t.ok&&t.error&&Me(t.error),t.ok}}),Ht&&(0,Z.jsx)(Pe,{items:[{label:La(Ht.tab.history[Ht.tab.index]??``),icon:(0,Z.jsx)(bl,{location:Ht.tab.history[Ht.tab.index]??``}),tooltip:Ht.tab.history[Ht.tab.index]??``,disabled:!0,onSelect:()=>void 0},...Ht.tab.history.map((e,t)=>({path:e,index:t})).filter(({index:e})=>Ht.direction===`back`?e<Ht.tab.index:e>Ht.tab.index).sort((e,t)=>Ht.direction===`back`?t.index-e.index:e.index-t.index).slice(0,24).map(({path:e,index:t})=>({label:La(e),icon:(0,Z.jsx)(bl,{location:e}),tooltip:e,onSelect:()=>{let n=Ht.tab;Ut(null),Qr(n.id,e,t)}}))],onClose:()=>Ut(null),x:Ht.x,y:Ht.y}),Bt&&(0,Z.jsx)(Pe,{items:[{label:e(`extract_here`),onSelect:()=>void Ma(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Ma(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Ma(`auto`)}],onClose:()=>Vt(null),x:Bt.x,y:Bt.y}),Dn&&(0,Z.jsx)(tu,{action:Dn.prompt.action,delaySeconds:Dn.prompt.delaySeconds,hits:Dn.prompt.hits,onCancel:()=>{Dn.resolve(!1),On(null)},onConfirm:()=>{Dn.resolve(!0),On(null)},permanent:Dn.prompt.permanent},Dn.id),(0,Z.jsx)(yu,{}),(0,Z.jsx)(Of,{}),(0,Z.jsx)(Df,{}),de&&(0,Z.jsx)(Au,{request:de}),fe&&(0,Z.jsx)(Qd,{conflicts:fe.conflicts,move:fe.move,onResolve:e=>{fe.resolve(e),P(null)}}),c&&(0,Z.jsx)(Ig,{code:c.code,deviceName:c.deviceName,onAccept:()=>{ys(c.requestId,!0),u(null)},onReject:()=>{ys(c.requestId,!1),u(null)}}),(0,Z.jsx)(Dg,{}),(0,Z.jsx)(te,{})]})})}var S_=C.div`
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
`,C_=C.div`
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
`,w_=C.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,T_=C.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Ie}
`,E_=C.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,D_=Kg,O_=C.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,k_=C.span`
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
`,A_=C.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,j_=C.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,M_=C.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?L:``}
`,N_=C.div`
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
        ${Be}
    }

    &:hover::before,
    &:active::before {
        background: var(--accent-primary);
        box-shadow: 0 0 6px rgba(var(--accent-rgb), 0.45);
    }
`,P_=C.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,F_=C.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,I_=C.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,L_=C.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,R_=C.button`
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
`,z_=C.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,B_=C.span`
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
`,V_=C.footer`
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
`;document.documentElement.dataset.theme=O()?`dark`:`light`;var H_=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,H_),window.addEventListener(`pagehide`,ot);var U_=document.getElementById(`root`),W_=new URLSearchParams(window.location.search),G_=W_.get(`picker`),K_=W_.get(`filter`)??``,q_=G_===`folder`||G_===`file`||G_===`save`?(0,H.lazy)(()=>$g(()=>import(`./PickerWindow-og5vWDhQ.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([10,1,2,3,4,5,8,0,6]))):null;U_&&$e().then(e=>{xr(e.shortcuts),l(e.timeFormat,e.timeFormatPattern)}).catch(()=>void 0).then(()=>{ct(),(0,wn.createRoot)(U_).render((0,Z.jsx)(H.StrictMode,{children:(0,Z.jsx)(ie,{children:q_===null?(0,Z.jsx)(x_,{}):(0,Z.jsx)(H.Suspense,{fallback:null,children:(0,Z.jsx)(q_,{defaultExtension:W_.get(`ext`)??``,extensions:K_?K_.split(`;`).filter(Boolean):[],types:W_.get(`types`)??``,typeIndex:Number(W_.get(`type`)??0)||0,initial:W_.get(`initial`)??``,initialName:W_.get(`name`)??``,mode:G_===`folder`?`folder`:`file`,multiple:W_.get(`multiple`)===`1`,save:G_===`save`})})})}))});export{Vr as $,Ms as A,To as B,Sl as C,Os as D,js as E,Ns as F,Ia as G,Ya as H,Is as I,si as J,Pa as K,bs as L,_s as M,Ps as N,Fs as O,As as P,Hr as Q,ws as R,bl as S,zs as T,La as U,io as V,ka as W,Zr as X,Qr as Y,qr as Z,jl as _,U as _t,Fg as a,wr as at,Ll as b,sp as c,Un as ct,Df as d,$n as dt,Ar as et,Eu as f,On as ft,Ml as g,An as gt,Yl as h,Mn as ht,Mg as i,Cr as it,vs as j,ks as k,Gf as l,Yn as lt,tu as m,kn as mt,Kg as n,jr as nt,Wh as o,J as ot,yu as p,En as pt,di as q,qg as r,Tr as rt,Hh as s,kr as st,$g as t,Sr as tt,Rf as u,rr as ut,Nl as v,Dn as vt,Js as w,kl as x,Il as y,Lo as z};