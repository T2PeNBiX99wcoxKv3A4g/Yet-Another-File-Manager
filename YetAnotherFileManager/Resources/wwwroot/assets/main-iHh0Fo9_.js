const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/OverviewView-CvjgDDor.js","assets/dist-B10j17-y.js","assets/selectionMenu-C7O2aFp_.js","assets/theme-DIZkp4eN.js","assets/theme--y6MTsAR.css","assets/Icons-C2oT0N0q.js","assets/textSearch-CKiWcHzL.js","assets/SettingsView-uDIZI-MU.js","assets/GalleryView-DD72uVmn.js","assets/RecycleView-CAigvNAs.js","assets/PickerWindow-SqZS5pXV.js"])))=>i.map(i=>d[i]);
import{C as e,D as t,E as n,O as r,S as i,T as a,_ as o,a as s,b as c,c as l,f as u,h as d,k as f,l as p,m,p as h,r as g,s as _,u as v,v as y,w as b,x,y as S}from"./theme-DIZkp4eN.js";import{M as C,O as w,S as ee,_ as T,g as E,h as D,i as te,k as O,m as ne,p as re,r as k,u as ie,v as A,w as j,x as M,y as ae}from"./dist-B10j17-y.js";import{A as oe,At as se,C as ce,Ct as le,D as ue,Dt as de,E as fe,Et as N,Ft as pe,H as me,It as P,J as he,L as ge,Mt as _e,Nt as ve,O as ye,Ot as be,P as xe,Pt as F,Q as Se,R as Ce,S as we,T as Te,Tt as Ee,U as De,V as Oe,W as I,Y as ke,Z as Ae,_ as je,_t as Me,a as Ne,at as Pe,b as Fe,bt as Ie,c as Le,ct as Re,d as ze,et as Be,f as Ve,g as He,h as L,ht as Ue,i as We,it as Ge,jt as Ke,k as qe,kt as Je,l as Ye,lt as Xe,m as Ze,mt as R,o as z,p as Qe,q as $e,s as et,t as tt,tt as nt,u as B,ut as rt,v as it,vt as at,w as ot,wt as st,x as ct,y as lt,z as ut}from"./selectionMenu-C7O2aFp_.js";import{$ as dt,A as ft,B as V,C as pt,E as mt,F as ht,G as gt,H as _t,I as vt,J as yt,K as bt,L as xt,M as St,N as Ct,O as wt,P as Tt,Q as Et,R as Dt,S as Ot,T as kt,W as At,X as jt,Y as Mt,_ as Nt,_t as Pt,a as Ft,at as It,b as Lt,bt as H,c as Rt,ct as zt,d as Bt,dt as Vt,et as Ht,f as Ut,ft as Wt,g as Gt,gt as Kt,h as qt,i as Jt,it as Yt,j as Xt,k as Zt,l as Qt,lt as $t,m as en,mt as tn,n as nn,nt as rn,o as an,ot as on,p as sn,pt as cn,q as ln,r as un,rt as dn,s as fn,st as pn,t as mn,tt as hn,u as gn,ut as _n,v as vn,vt as yn,w as bn,x as xn,xt as Sn,y as Cn,z as wn}from"./Icons-C2oT0N0q.js";var U=C(O(),1),Tn=r(),En={managed:0,private:0,workingSet:0,available:0};async function Dn(){return j.available?await j.request(`app.memory`):En}async function On(){return j.available?await j.request(`app.memory.trim`):En}var kn={registered:!1,pathMatches:!1,registeredPath:null};async function An(){return j.available?await j.request(`app.scheme`):kn}async function jn(e){return j.available?await j.request(`app.scheme.set`,{enabled:e}):kn}var Mn={supported:!1,mode:`none`,active:!1,error:null};async function Nn(){return j.available?await j.request(`app.startup`):Mn}async function W(e){return j.available?await j.request(`app.startup.set`,{mode:e}):Mn}var G=null,Pn=new Set;function Fn(e){G=e,Pn.forEach(e=>e(G))}function In(){G=null,Pn.forEach(e=>e(null))}function Ln(){let[e,t]=(0,U.useState)(G);return(0,U.useEffect)(()=>(Pn.add(t),()=>{Pn.delete(t)}),[]),e}async function K(e){return j.available?(await j.request(`fs.operation.properties.info`,{paths:[e]}))?.[0]??null:null}async function Rn(e){return j.available?await j.request(`fs.operation.properties.hash`,{path:e}):null}async function zn(e){return j.available?await j.request(`fs.operation.properties.edit`,e):{ok:!1,error:null}}async function Bn(e){return j.available?await j.request(`fs.operation.properties.details`,{path:e}):null}async function q(e){return j.available?(await j.request(`fs.operation.properties.details.set`,e))?.ok!==!1:!1}var Vn=null;function Hn(e){Vn=e}function Un(e,t){return e.length===0||!Vn?Promise.resolve([]):new Promise(n=>Vn?.({conflicts:e,move:t,resolve:n}))}async function Wn(e,t=!1){return!j.available||e.length===0?!1:(await j.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Gn(){return j.available?(await j.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function Kn(){return j.available?await j.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function qn(e,t,n,r){if(!j.available||e.length===0)return{ok:!1,error:`nothing_to_transfer`,created:[]};if(!r){let i=await Yn(e,t,n);if(i.length>0){let e=await Un(i,n);if(e===null)return{ok:!1,error:null,created:[],cancelled:!0};r=e}}return await Xn({action:n?`move`:`write`},i=>j.request(`fs.operation.transfer`,{paths:e,target:t,move:n,decisions:r??null,confirm:i}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function Jn(e,t,n){return j.available?await j.request(`fs.shell.startMenu`,{path:e,scope:t,pin:n}):{ok:!1,path:null,pinned:!1,error:null}}async function Yn(e,t,n){return!j.available||e.length===0?[]:(await j.request(`fs.operation.transfer.conflicts`,{paths:e,target:t,move:n})).conflicts??[]}async function Xn(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await pe({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function Zn(e){return!j.available||e.length===0?[]:(await j.request(`fs.paths.info`,{paths:e})).entries}async function Qn(e,t=!1,n){if(!j.available)return{ok:!1,created:[]};if(!n){let t=await Kn(),r=t.entries.filter(e=>e.exists).map(e=>e.path);if(r.length>0){let i=await Yn(r,e,t.move);if(i.length>0){let e=await Un(i,t.move);if(e===null)return{ok:!1,created:[],cancelled:!0};n=e}}}return await Xn({action:t?`move`:`write`},t=>j.request(`fs.clipboard.paste`,{directory:e,decisions:n??null,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0}))}async function $n(e,t=!1,n=!1){if(!j.available||e.length===0)return{ok:!1,error:null};let r=await j.request(`fs.operation.delete`,{paths:e,permanent:t,runningConfirmed:n}),i=!1;for(let a=0;a<2&&r.required&&r.token&&r.protected?.length;a++){if(!await pe({hits:r.protected,delaySeconds:r.delaySeconds??5,action:`delete`,permanent:t})){i=!0;break}r=await j.request(`fs.operation.delete`,{paths:e,permanent:t,runningConfirmed:n,confirm:r.token})}return i?{...r,ok:!1,cancelled:!0}:r}async function er(e,t){return j.available?await Xn({action:`rename`},n=>j.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function tr(e,t=!1){return j.available?await j.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function nr(e){if(!j.available)return null;let t=await j.request(`fs.caseSensitive.get`,{path:e});return t.ok?t.enabled:null}async function rr(e,t){return j.available?await j.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function ir(e,t,n){return j.available?await j.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function ar(e,t){return j.available?await j.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function or(e){if(!j.available||e.length===0)return;let t=await j.request(`fs.operation.properties`,{paths:e});!t.system&&t.items?.length&&Fn({items:t.items,canUseSystemSheet:!!t.canUseSystemSheet})}async function sr(e){j.available&&e.length!==0&&await j.request(`fs.operation.systemProperties`,{paths:e})}async function cr(e){return!j.available||e.length===0?{ok:!1,error:null}:await j.request(`fs.share`,{paths:e})}async function lr(e){j.available&&await j.request(`fs.operation.openWith`,{path:e})}async function ur(e){j.available&&await j.request(`fs.operation.terminal`,{path:e})}async function dr(e){return j.available?await j.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function fr(e,t){return j.available?(await j.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function pr(){return j.available?await j.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function mr(){return j.available?await j.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function hr(e){j.available&&await j.request(`fs.operation.showInExplorer`,{path:e})}async function gr(e){return!j.available||e.length===0?{verbs:[],safe:!0}:await j.request(`shell.verbs`,{paths:e})}async function _r(e,t,n,r){j.available&&e.length!==0&&await j.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:r})}async function vr(e,t){return!j.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await j.request(`fs.operation.compress`,{...t,paths:e})}async function yr(){return j.available?(await j.request(`app.tasks`)).tasks:[]}async function br(){j.available&&await j.request(`app.tasks.clear`)}async function xr(e,t){return j.available?(await j.request(`app.tasks.start`,{kind:e,label:t})).id??null:null}async function Sr(e,t=null){j.available&&e&&await j.request(`app.tasks.finish`,{id:e,failed:t!==null,error:t})}var J={};function Cr(e){let t={};for(let[n,r]of Object.entries(e??{}))t[n]=Tr(r);J=t,kr=Or(J,`openInNewTab`)}function wr(){return{...J}}function Tr(e){return(e??``).split(`|`).map(e=>e.trim()).filter(Boolean)}function Er(e){return e.join(`|`)}function Y(e){let t={};for(let[n,r]of Object.entries(e))t[n]=Er(r);return t}function Dr(e){let t={...J};for(let[n,r]of Object.entries(e??{}))n in t&&(t[n]=Tr(r));return t}function X(e,t,n){return e[t]?.includes(n)??!1}function Or(e,t){return e[t]?.[0]??``}var kr=``;function Ar(e){kr=e.trim()}function jr(e){let t=kr.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Mr(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Nr(e){return e.split(`+`).filter(Boolean).map(e=>Fr[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}function Pr(e){return(e??[]).filter(Boolean).map(Nr).join(` / `)}var Fr={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Ir(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Lr=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],Z={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`,`.tga`,`.dds`,`.hdr`,`.exr`,`.pcx`,`.dib`,`.jxl`,`.jpe`,`.jfif`,`.apng`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Rr(e){let t=Br(e);for(let{kind:e}of Lr)if(Z[e].has(t))return e;return null}function zr(e){return Rr(e)!==null}function Br(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Vr=(0,U.createContext)({places:{},useIcons:!1}),Hr=Vr.Provider;function Ur(){return(0,U.useContext)(Vr)}function Wr(e,t){return e.places[i(t)]}function Gr(e,t,n){return Wr(e,t)?.name||n}var Q=ee(),Kr={file:Xt,folder:St,text:Pt,code:Gt,image:_t,video:H,audio:an,archive:nn,pdf:Ht,executable:wt,font:Ct,database:xn,config:Nt,spreadsheet:Wt,presentation:on,document:pt},qr={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Jr(e){let t=e.lastIndexOf(`.`);return t>0?qr[e.slice(t).toLowerCase()]??`file`:`file`}function Yr({name:e,size:t}){let n=Kr[e??`file`]??Xt;return(0,Q.jsx)(n,{size:t})}var Xr={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Zr(e,t,n,r){let i=e.toLowerCase();if(i.endsWith(`.lnk`))return r(`shortcut`);if(i.endsWith(`.url`)||i.endsWith(`.website`))return r(`internet_shortcut`);if(n!=null)return r(t?`folder_link`:`symbolic_link`);if(t)return r(`folder`);let a=e.lastIndexOf(`.`),o=a>0&&a<e.length-1?e.slice(a+1).toUpperCase():``,s=r(Xr[Jr(e)]??`file`);return o.length>0?`${o} ${s}`:r(`file`)}async function Qr(e,t,n){return j.available?(await j.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function $r(e){return Qr(`folder`,[],e??``)}function ei(e){return Qr(`file`,e??[],``)}var ti=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],ni=null,ri=0,ii=new Set;function ai(){ri+=1;for(let e of ii)e()}function oi(e){return ii.add(e),()=>ii.delete(e)}function si(){return ri}function ci(e){ni=e,ai()}function li(){return(0,U.useSyncExternalStore)(oi,si,si),ni}function ui({menu:e,directory:t,target:n,shortcuts:r,canPaste:a=!1,onClose:o,onOpen:s,onOpenFile:c,onSelectEntry:l,onOpenExternally:u,onRename:d,onDelete:f,onCopy:p,onPaste:m,onCreateFolder:h,onCreateFile:g,creationOnly:_=!1,onRefresh:b,onAddToTray:x,onAddFavorite:C,onRemoveFavorite:w,favoritePaths:ee,onExtractArchive:T,onOpenAsArchive:E,onAddToStartMenu:D,allowCompression:te=!1,platform:O,onCompressTo:ne,onArchiveCreated:re}){let k=M(),ie=li(),A=y(t),j=O===`windows`,[ae,oe]=(0,U.useState)({verbs:[],safe:!0,loading:!1}),[se,ce]=(0,U.useState)({recommended:[],other:[],loading:!1}),[le,ue]=(0,U.useState)(null),de=(0,U.useRef)(0),fe=(0,U.useRef)(0),N=e?.paths.length===1,pe=e?.background?t?[t]:[]:e?.paths??[],me=e?.background?t||null:N&&n?.isDirectory?n.path:null;if((0,U.useEffect)(()=>{if(!e){oe({verbs:[],safe:!0,loading:!1}),ce({recommended:[],other:[],loading:!1});return}let t=++de.current;oe({verbs:[],safe:!0,loading:j&&pe.length>0&&!A}),j&&pe.length>0&&!A&&gr(pe).then(e=>{de.current===t&&oe({...e,loading:!1})},()=>{de.current===t&&oe({verbs:[],safe:!0,loading:!1})});let r=++fe.current;!A&&N&&n&&j?(ce({recommended:[],other:[],loading:!0}),dr(n.path).then(e=>{fe.current===r&&ce({...e,loading:!1})},()=>{fe.current===r&&ce({recommended:[],other:[],loading:!1})})):ce({recommended:[],other:[],loading:!1})},[e,N,n?.path,n?.isDirectory,pe.length,A]),(0,U.useEffect)(()=>{if(!e||A||!me){ue(null);return}let t=!0;return nr(me).then(e=>{t&&ue(e)},()=>{t&&ue(null)}),()=>{t=!1}},[e,me,A]),!e)return null;let P=[],he=[],ge=new Set((ee??[]).map(i)),_e=e.background?t?[t]:[]:e.paths,ve=_e.length>0&&_e.every(e=>ge.has(i(e))),ye=()=>n?be(n.path,n.isDirectory):`Archive`,be=(e,t)=>{let n=v(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},xe=async(e,n=ye())=>{let r=await vr(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?re?.(r.path,!0):je(r.error??k(`could_not_create_the_archive`))},F=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},Se=async()=>{if(!me||le===null)return;let e=await rr(me,!le);e.ok?(ue(e.enabled),b?.()):je(e.error??k(`could_not_change_the_case_sensitivity`))},Ce=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await ir(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await ir(e,t,`${a}\\${fi(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?b?.():je(o.error??k(`could_not_create_the_link`))},we=async e=>{if(!n)return;let r=await $r(t);r&&await Ce(e,n.path,r,v(n.path),e.endsWith(`-copy`))},Te=async e=>{let n=ie?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let a=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(a&&!r.isDirectory)continue;let o=r.path.replace(/[\\/][^\\/]+$/,``),s=i(o)===i(t);await Ce(n,r.path,t,v(r.path),a&&!s)}},Ee=async()=>{let t=(await Zn(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&ci({paths:t})},De=()=>{let e=ie?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:k(`cancel_selected_link`),icon:(0,Q.jsx)(Cn,{size:14}),onSelect:()=>ci(null)},...t?[{label:k(`hard_link`),icon:(0,Q.jsx)(Xt,{size:14}),separatorBefore:!0,onSelect:()=>void Te(`hard`)}]:[],{label:k(`symbolic_link`),icon:(0,Q.jsx)(Xt,{size:14}),separatorBefore:!t,onSelect:()=>void Te(`symbolic-file`)},...n?[...j?[{label:k(`directory_junction`),icon:(0,Q.jsx)(St,{size:14}),onSelect:()=>void Te(`junction`)}]:[],{label:k(`smart_copy`),icon:(0,Q.jsx)(vn,{size:14}),separatorBefore:!0,onSelect:()=>void Te(`smart-copy`)},{label:k(`smart_mirror`),icon:(0,Q.jsx)(vn,{size:14}),onSelect:()=>void Te(`smart-mirror`)},{label:k(`multi_version_smart_copy`),icon:(0,Q.jsx)(vn,{size:14}),onSelect:()=>void Te(`multi-version-smart-copy`)},{label:k(`hardlink_copy`),icon:(0,Q.jsx)(vn,{size:14}),separatorBefore:!0,onSelect:()=>void Te(`hard-copy`)},{label:k(`symbolic_link_copy`),icon:(0,Q.jsx)(vn,{size:14}),onSelect:()=>void Te(`symbolic-copy`)}]:[]]};if(e.background){if(h&&he.push({label:k(`new_folder`),icon:(0,Q.jsx)(It,{size:16}),shortcut:Pr(r.newFolder),onSelect:h}),g||h){let e=[];h&&(e.push({label:k(`folder`),icon:(0,Q.jsx)(St,{size:14}),onSelect:()=>h(!1)}),!A&&j&&e.push({label:k(`case_sensitive_folder`),icon:(0,Q.jsx)(gn,{size:14}),onSelect:()=>h(!0)})),g&&e.push(...ti.map((e,t)=>({label:`${k(e.label)} (${e.extension})`,icon:(0,Q.jsx)(Xt,{size:14}),separatorBefore:t===0,onSelect:()=>g(e.extension)}))),P.push({label:k(`new`),icon:(0,Q.jsx)(It,{size:14}),children:e,onSelect:()=>void 0})}if(A||P.push({label:k(`create_link`),icon:(0,Q.jsx)(_n,{size:14}),disabled:!ie,children:De(),onSelect:()=>void 0}),_)return(0,Q.jsx)(Ne,{items:P,onClose:o,quick:he,x:e.x,y:e.y});!A&&s&&P.push({label:k(`open_in_new_tab`),icon:(0,Q.jsx)(It,{size:14}),onSelect:()=>s(t,!0)}),P.push({label:k(`copy_as_path`),icon:(0,Q.jsx)(vn,{size:14}),onSelect:()=>void F([t])}),x&&P.push({label:k(`add_to_file_tray`),icon:(0,Q.jsx)(jt,{size:14}),onSelect:()=>x([t])}),!A&&(ve?w:C)&&P.push({label:k(ve?`remove_from_favorites`:`add_to_favorites`),icon:ve?(0,Q.jsx)(wn,{size:14}):(0,Q.jsx)(Dt,{size:14}),onSelect:()=>ve?w?.([t]):C?.([t])}),!A&&le!==null&&P.push({label:k(`case_sensitive_names`),icon:(0,Q.jsx)(gn,{size:14}),checked:le,onSelect:()=>void Se()}),!A&&te&&(P.push({label:k(`open_in_terminal`),icon:(0,Q.jsx)(Kt,{size:14}),onSelect:()=>void ur(t)}),P.push({label:k(j?`show_in_explorer`:`show_in_file_manager`),icon:(0,Q.jsx)(St,{size:14}),separatorBefore:!0,onSelect:()=>void hr(t)})),m&&he.push({label:k(`paste`),icon:(0,Q.jsx)(dt,{size:16}),disabled:!a,shortcut:Pr(r.paste),onSelect:()=>m(t)}),A||he.push({label:k(`properties`),icon:(0,Q.jsx)(ht,{size:16}),shortcut:Pr(r.properties),onSelect:()=>void or([t])})}else{if(l&&P.push({label:k(`choose`),icon:(0,Q.jsx)(Bt,{size:14}),onSelect:()=>{l(n?e.paths.length>1?[...e.paths]:[n.path]:[...e.paths])}}),s&&P.push({label:k(`open`),icon:(0,Q.jsx)(Jt,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&(u??c)?.(n.path)}}),n?.isDirectory&&(s&&P.push({label:k(`open_in_new_tab`),icon:(0,Q.jsx)(It,{size:14}),onSelect:()=>s(n.path,!0)}),m&&P.push({label:k(`paste_into_folder`),icon:(0,Q.jsx)(dt,{size:14}),disabled:!a,onSelect:()=>m(n.path)}),A||P.push({label:k(`open_in_terminal`),icon:(0,Q.jsx)(Kt,{size:14}),onSelect:()=>void ur(n.path)})),!A&&N&&n&&!n.isDirectory&&E&&P.push({label:k(`open_as_archive`),icon:(0,Q.jsx)(nn,{size:14}),onSelect:()=>E(n.path)}),!A&&N&&n&&!n.isDirectory&&S(n.path)&&T&&P.push({label:k(`extract_archive`),icon:(0,Q.jsx)(nn,{size:14}),separatorBefore:!0,children:[{label:k(`extract_here`),icon:(0,Q.jsx)(nn,{size:14}),onSelect:()=>T(n.path,`here`)},{label:k(`extract_to_a_folder_named_after_the_archive`),icon:(0,Q.jsx)(nn,{size:14}),onSelect:()=>T(n.path,`named`)},{label:k(`auto_extract_to_the_current_folder`),icon:(0,Q.jsx)(nn,{size:14}),onSelect:()=>T(n.path,`auto`)},{label:k(`extract_here_and_delete`),icon:(0,Q.jsx)(nn,{size:14}),separatorBefore:!0,onSelect:()=>T(n.path,`here-delete`)},{label:k(`extract_to_a_folder_and_delete_archive`),icon:(0,Q.jsx)(nn,{size:14}),onSelect:()=>T(n.path,`named-delete`)},{label:k(`auto_extract_and_delete_archive`),icon:(0,Q.jsx)(nn,{size:14}),onSelect:()=>T(n.path,`auto-delete`)},{label:k(`extract_to`),icon:(0,Q.jsx)(St,{size:14}),separatorBefore:!0,onSelect:()=>T(n.path,`choose`)}],onSelect:()=>void 0}),O===`windows`&&!A&&N&&n&&D&&P.push({label:k(`add_to_start_menu`),icon:(0,Q.jsx)(cn,{size:14}),separatorBefore:!0,children:[{label:k(`add_to_user_start_menu`),icon:(0,Q.jsx)(cn,{size:14}),onSelect:()=>D(n.path,`user`,!1)},{label:k(`pin_to_user_start_menu`),icon:(0,Q.jsx)(dn,{size:14}),onSelect:()=>D(n.path,`user`,!0)},{label:k(`add_to_global_start_menu`),icon:(0,Q.jsx)(vt,{size:14}),separatorBefore:!0,onSelect:()=>D(n.path,`machine`,!1)},{label:k(`pin_to_global_start_menu`),icon:(0,Q.jsx)(dn,{size:14}),onSelect:()=>D(n.path,`machine`,!0)}],onSelect:()=>void 0}),!A&&j&&N&&n){let e=[];if(se.loading)e.push({label:k(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of se.recommended)e.push({label:t.name,group:k(`suggested_apps`),icon:t.icon?(0,Q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Q.jsx)(wt,{size:14}),onSelect:()=>void fr(n.path,t.path).then(e=>{e||lr(n.path)})});for(let t of se.other)e.push({label:t.name,group:k(`other_apps`),icon:t.icon?(0,Q.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Q.jsx)(wt,{size:14}),onSelect:()=>void fr(n.path,t.path).then(e=>{e||lr(n.path)})})}e.push({label:k(`choose_another_app`),icon:(0,Q.jsx)(wt,{size:14}),separatorBefore:!0,onSelect:()=>void lr(n.path)}),P.push({label:k(`open_with_2`),icon:(0,Q.jsx)(wt,{size:14}),children:e,onSelect:()=>void lr(n.path)})}if(!A&&O===`windows`&&e.paths.length>0&&P.push({label:k(`share`),icon:(0,Q.jsx)(_n,{size:14}),separatorBefore:!0,onSelect:()=>void cr(e.paths).then(e=>{e.ok||je(e.error??k(`could_not_open_the_share_sheet`))})}),A||P.push({label:k(`compress`),icon:(0,Q.jsx)(nn,{size:14}),separatorBefore:!0,children:[{label:k(`compress_to_zip`),icon:(0,Q.jsx)(nn,{size:14}),onSelect:()=>void xe(e.paths)},{label:k(`compress_to`),icon:(0,Q.jsx)(nn,{size:14}),onSelect:()=>ne?.(e.paths,ye())}],onSelect:()=>void 0}),!A&&(e?.paths.length??0)>0){let e=[{label:k(`select_link_source`),icon:(0,Q.jsx)(_n,{size:14}),onSelect:()=>void Ee()},...ie?[{label:k(`cancel_selected_link`),icon:(0,Q.jsx)(Cn,{size:14}),onSelect:()=>ci(null)}]:[],...N&&n?n.isDirectory?[{label:k(`symbolic_link`),icon:(0,Q.jsx)(St,{size:14}),separatorBefore:!0,onSelect:()=>void we(`symbolic-folder`)},...j?[{label:k(`directory_junction`),icon:(0,Q.jsx)(St,{size:14}),onSelect:()=>void we(`junction`)}]:[],{label:k(`smart_copy`),icon:(0,Q.jsx)(vn,{size:14}),separatorBefore:!0,onSelect:()=>void we(`smart-copy`)},{label:k(`smart_mirror`),icon:(0,Q.jsx)(vn,{size:14}),onSelect:()=>void we(`smart-mirror`)},{label:k(`multi_version_smart_copy`),icon:(0,Q.jsx)(vn,{size:14}),onSelect:()=>void we(`multi-version-smart-copy`)},{label:k(`hardlink_copy`),icon:(0,Q.jsx)(vn,{size:14}),separatorBefore:!0,onSelect:()=>void we(`hard-copy`)},{label:k(`symbolic_link_copy`),icon:(0,Q.jsx)(vn,{size:14}),onSelect:()=>void we(`symbolic-copy`)}]:[{label:k(`symbolic_link`),icon:(0,Q.jsx)(Xt,{size:14}),separatorBefore:!0,onSelect:()=>void we(`symbolic-file`)},{label:k(`hard_link`),icon:(0,Q.jsx)(Xt,{size:14}),onSelect:()=>void we(`hard`)}]:[]];P.push({label:k(`create_link`),icon:(0,Q.jsx)(_n,{size:14}),children:e,onSelect:()=>void 0})}!A&&n?.isDirectory&&le!==null&&P.push({label:k(`case_sensitive_names`),icon:(0,Q.jsx)(gn,{size:14}),checked:le,onSelect:()=>void Se()}),P.push({label:k(`copy_as_path`),icon:(0,Q.jsx)(vn,{size:14}),onSelect:()=>void F(e.paths)}),x&&P.push({label:k(`add_to_file_tray`),icon:(0,Q.jsx)(jt,{size:14}),onSelect:()=>x(e.paths)}),!A&&(ve?w:C)&&P.push({label:k(ve?`remove_from_favorites`:`add_to_favorites`),icon:ve?(0,Q.jsx)(wn,{size:14}):(0,Q.jsx)(Dt,{size:14}),onSelect:()=>ve?w?.(_e):C?.(_e)}),A||P.push({label:k(j?`show_in_explorer`:`show_in_file_manager`),icon:(0,Q.jsx)(St,{size:14}),separatorBefore:!0,onSelect:()=>void hr(_e[0])}),p&&he.push({label:k(`cut`),icon:(0,Q.jsx)(Lt,{size:16}),shortcut:Pr(r.cut),onSelect:()=>p(e.paths,!0)},{label:k(`copy`),icon:(0,Q.jsx)(vn,{size:16}),shortcut:Pr(r.copy),onSelect:()=>p(e.paths,!1)}),N&&n&&d&&he.push({label:k(`rename`),icon:(0,Q.jsx)(hn,{size:16}),shortcut:Pr(r.rename),onSelect:()=>d(n.path)}),f&&he.push({label:k(`delete`),icon:(0,Q.jsx)(yn,{size:16}),danger:!0,shortcut:Pr(r.delete),onSelect:()=>f(e.paths)}),A||he.push({label:k(`properties`),icon:(0,Q.jsx)(ht,{size:16}),shortcut:Pr(r.properties),onSelect:()=>void or(e.paths)})}if(ae.loading)P.push({label:k(`more_actions`),icon:(0,Q.jsx)(wt,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(ae.verbs.length>0){let e={items:[],children:new Map};for(let t of ae.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,Q.jsx)(di,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void _r(pe,ae.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,Q.jsx)(di,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];P.push({label:k(ae.safe?`more_actions`:`more_actions_extensions`),icon:(0,Q.jsx)(wt,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,Q.jsx)(Ne,{items:P,onClose:o,quick:he,x:e.x,y:e.y})}function di({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,Q.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,Q.jsx)(Jt,{size:14});case`document`:return(0,Q.jsx)(pt,{size:14});case`cut`:return(0,Q.jsx)(Lt,{size:14});case`copy`:return(0,Q.jsx)(vn,{size:14});case`paste`:return(0,Q.jsx)(dt,{size:14});case`trash`:return(0,Q.jsx)(yn,{size:14});case`pencil`:return(0,Q.jsx)(hn,{size:14});case`gear`:return(0,Q.jsx)(ht,{size:14});case`star`:return(0,Q.jsx)(cn,{size:14});case`pin`:return(0,Q.jsx)(dn,{size:14});case`executable`:return(0,Q.jsx)(wt,{size:14});case`share`:return(0,Q.jsx)(_n,{size:14});case`arrow`:return(0,Q.jsx)(Jt,{size:14});default:return(0,Q.jsx)(mn,{size:14})}}function fi(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}var pi=f();function mi({value:e,options:t,onChange:n,disabled:r,width:i,icon:a,tooltip:o,zIndex:s=3200}){let c=M(),[l,u]=(0,U.useState)(null),d=(0,U.useRef)(null),f=t.find(t=>t.value===e)??t[0];return(0,U.useEffect)(()=>{if(!l)return;let e=()=>u(null),t=t=>{let n=t.target;n instanceof Node&&d.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[l]),(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(hi,{$icon:a!==void 0,"aria-expanded":l!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(l){u(null);return}let e=d.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;u({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:d,style:i&&!a?{width:i}:void 0,title:o??f?.title,type:`button`,children:[a===void 0?(0,Q.jsx)(gi,{children:f?.label??``}):(0,Q.jsx)(_i,{children:a}),a===void 0&&(0,Q.jsx)(vi,{children:(0,Q.jsx)(Ut,{size:11})})]}),l&&(0,pi.createPortal)((0,Q.jsx)(yi,{"aria-label":c(`options`),"data-select-menu":`true`,$menuZIndex:s,role:`listbox`,style:{bottom:l.bottom,left:l.left,minWidth:l.width,top:l.top},children:t.map(t=>(0,Q.jsxs)(bi,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),u(null)},role:`option`,title:t.title,type:`button`,children:[(0,Q.jsx)(xi,{children:t.label}),t.value===e&&(0,Q.jsx)(Bt,{size:11})]},t.value))}),document.body)]})}var hi=w.button`
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
`,gi=w.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,_i=w.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,vi=w.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,yi=w.div`
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
    ${et}
`,bi=w.button`
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
`,xi=w.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Si=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],Ci=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],wi=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],Ti=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],Ei=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function Di({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=M(),a=(0,U.useRef)(null),[o,s]=(0,U.useState)(e),[c,l]=(0,U.useState)(t),[u,d]=(0,U.useState)(`zip`),[f,p]=(0,U.useState)(`5`),[m,h]=(0,U.useState)(`default`),[g,_]=(0,U.useState)(`none`),[v,y]=(0,U.useState)(``),[b,x]=(0,U.useState)(`0`),[S,C]=(0,U.useState)(!1);(0,U.useEffect)(()=>{a.current?.focus(),a.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let w=Si.find(e=>e.value===u)??Si[0],ee=u===`zip`||u===`zipx`,T=g!==`none`,E=ee||u===`7z`,D=u===`zip`||u===`7z`,te=async()=>{if(S||!c.trim()||!o||T&&v.length===0)return;C(!0);let e=await r({directory:o,name:c.trim(),format:u,level:w.level?Number(f):0,method:ee?m:null,encryption:E?g:`none`,password:T?v:void 0,splitSize:D?Number(b):0});C(!1),e&&n()};return(0,pi.createPortal)((0,Q.jsx)(Oi,{onPointerDown:e=>{e.target===e.currentTarget&&!S&&n()},children:(0,Q.jsxs)(ki,{"aria-modal":`true`,role:`dialog`,children:[(0,Q.jsx)(Ai,{children:i(`compress_to`)}),(0,Q.jsxs)(ji,{children:[(0,Q.jsx)(Mi,{children:i(`archive_name`)}),(0,Q.jsx)(Ni,{onChange:e=>l(e.target.value),ref:a,value:c,onKeyDown:e=>{e.key===`Enter`&&te()}}),(0,Q.jsx)(Pi,{children:w.extension})]}),(0,Q.jsxs)(ji,{children:[(0,Q.jsx)(Mi,{children:i(`format`)}),(0,Q.jsx)(mi,{onChange:e=>d(e),options:Si.map(e=>({value:e.value,label:i(e.label)})),value:u,width:236,zIndex:3700})]}),(0,Q.jsxs)(ji,{children:[(0,Q.jsx)(Mi,{children:i(`method`)}),(0,Q.jsx)(mi,{disabled:!ee,onChange:h,options:Ci.map(e=>({...e,label:i(e.label)})),value:ee?m:`default`,width:236,zIndex:3700})]}),(0,Q.jsxs)(ji,{children:[(0,Q.jsx)(Mi,{children:i(`encryption`)}),(0,Q.jsx)(mi,{disabled:!E,onChange:e=>{_(e),e===`none`&&y(``)},options:wi.map(e=>({...e,label:i(e.label)})),value:E?g:`none`,width:236,zIndex:3700})]}),T&&(0,Q.jsxs)(ji,{children:[(0,Q.jsx)(Mi,{children:i(`password`)}),(0,Q.jsx)(Ni,{autoFocus:!0,onChange:e=>y(e.target.value),type:`password`,value:v})]}),(0,Q.jsxs)(ji,{children:[(0,Q.jsx)(Mi,{children:i(`split_volumes`)}),(0,Q.jsx)(mi,{disabled:!D,onChange:x,options:Ti.map(e=>({...e,label:i(e.label)})),value:D?b:`0`,width:236,zIndex:3700})]}),(0,Q.jsxs)(ji,{children:[(0,Q.jsx)(Mi,{children:i(`compression_level`)}),(0,Q.jsx)(mi,{disabled:!w.level,onChange:p,options:Ei.map(e=>({...e,label:i(e.label)})),value:w.level?f:u===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,Q.jsxs)(ji,{$stack:!0,children:[(0,Q.jsx)(Mi,{children:i(`destination`)}),(0,Q.jsxs)(Fi,{children:[(0,Q.jsx)(Ii,{title:o,children:o}),(0,Q.jsx)(Ri,{disabled:S,onClick:()=>void $r(o).then(e=>{e&&s(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,Q.jsxs)(Li,{children:[(0,Q.jsx)(Ri,{disabled:S,onClick:n,type:`button`,children:i(`cancel`)}),(0,Q.jsx)(zi,{disabled:S||!c.trim()||T&&v.length===0,onClick:()=>void te(),type:`button`,children:i(S?`compressing`:`compress`)})]})]})}),document.body)}var Oi=w.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${z}
`,ki=w.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${B}
`,Ai=w.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,ji=w.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Mi=w.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Ni=w.input`
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
`,Pi=w.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Fi=w.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Ii=w.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Li=w.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Ri=w.button`
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
`,zi=w(Ri)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Bi({programs:e,message:t,confirmLabel:n,onCancel:r,onConfirm:i}){let a=M(),o=(0,U.useRef)(null);return(0,U.useEffect)(()=>{o.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[r]),(0,pi.createPortal)((0,Q.jsx)(Hi,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,Q.jsxs)(Ui,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsx)(Wi,{children:a(`the_program_is_running`)}),(0,Q.jsx)(Gi,{children:t}),(0,Q.jsx)(Ki,{children:e.map(e=>(0,Q.jsx)(Vi,{program:e,title:a(`process_id_n`,{id:e.id})},e.id))}),(0,Q.jsxs)(ea,{children:[(0,Q.jsx)(ta,{onClick:r,ref:o,type:`button`,children:a(i?`cancel`:`ok`)}),i&&(0,Q.jsx)(ta,{$primary:!0,onClick:i,type:`button`,children:n??a(`delete`)})]})]})}),document.body)}function Vi({program:e,title:t}){let n=N(e.path,!1,!0);return(0,Q.jsxs)(qi,{title:e.path,children:[(0,Q.jsx)(Ji,{children:n?(0,Q.jsx)(Yi,{alt:``,src:n}):(0,Q.jsx)(Xi,{})}),(0,Q.jsxs)(Zi,{children:[(0,Q.jsx)(Qi,{children:e.name}),(0,Q.jsx)($i,{children:t})]})]})}var Hi=w.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${z}
`,Ui=w.div`
    width: min(520px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${B}
`,Wi=w.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Gi=w.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Ki=w.div`
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
`,qi=w.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 3px 0;
`,Ji=w.span`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 20px;
    height: 20px;
`,Yi=w.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`,Xi=w.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--text-muted);
`,Zi=w.span`
    display: flex;
    align-items: baseline;
    gap: 8px;
    min-width: 0;
`,Qi=w.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$i=w.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10.5px;
`,ea=w.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,ta=w.button`
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
`,na=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),ra=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),ia=new Set([`png`,`jpg`,`jpeg`,`jfif`,`jpe`,`gif`,`webp`,`bmp`,`avif`,`ico`,`svg`,`apng`]),aa=new Set([`tif`,`tiff`,`psd`,`psb`,`tga`,`dds`,`hdr`,`exr`,`pcx`,`dib`,`jxl`]),oa=new Set([...ia,...aa]),sa=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function ca({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:a,selectionNote:o,emptyNote:s}){let c=M(),[l,u]=(0,U.useState)(!1),[d,f]=(0,U.useState)(!1),[p,m]=(0,U.useState)(!1),[h,g]=(0,U.useState)(0),[_,v]=(0,U.useState)(0),[y,b]=(0,U.useState)(null),[x,S]=(0,U.useState)(!1),[C,w]=(0,U.useState)(!1),ee=(0,U.useRef)(null),T=(0,U.useRef)(null),E=(0,U.useRef)(null),D=(0,U.useRef)(null),[te,O]=(0,U.useState)(()=>{let e=ct(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ne=r?e?.path??null:null,re=Ee(ne),k=e?la(e.name):``,ie=!!e&&!e.isDirectory&&na.has(k),A=!!e&&!e.isDirectory&&ra.has(k),j=!!e&&!e.isDirectory&&oa.has(k),ae=!!e&&!e.isDirectory&&sa.has(k),oe=!!e&&!e.isDirectory&&k===`pdf`,le=se(ie?re:null,512,e?.modified??0),ue=j&&ia.has(k),de=se(j&&!ue?re:null,1024,e?.modified??0),fe=be(ue?re:null,e?.modified??0,k),pe=be(ie||A?re:null,e?.modified??0,k),me=Je(oe?re:null,e?.modified??0),P=N(!ie&&!A&&!j&&!ae&&!oe?re:null,e?.isDirectory??!1);if((0,U.useEffect)(()=>{u(!1),f(!1),m(!1),g(0),v(0),w(!1)},[ne]),(0,U.useEffect)(()=>{if(!re||!ae){b(null),S(!1);return}let e=!0;return S(!0),b(null),Se(re).then(t=>{e&&(b(t),S(!1))},()=>{e&&(b({text:null,truncated:!1,error:c(`could_not_read_this_file`)}),S(!1))}),()=>{e=!1}},[re,ae]),!e&&!s)return null;let he=e=>{E.current={x:e.clientX,width:T.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},ge=e=>{let t=E.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},_e=e=>{E.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},ve=e=>{D.current={y:e.clientY,height:te},e.currentTarget.setPointerCapture(e.pointerId)},ye=e=>{let t=D.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);O(n),ce(`yafm.preview.media.height`,n)},xe=e=>{D.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,Q.jsxs)(da,{$open:r,children:[r&&(0,Q.jsx)(fa,{onPointerDown:he,onPointerMove:ge,onPointerUp:_e,onDoubleClick:()=>n(320),title:c(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsx)(pa,{ref:T,style:{width:r?t:0},children:(0,Q.jsxs)(ma,{children:[(0,Q.jsx)(St,{size:56}),(0,Q.jsx)(`span`,{children:s})]})})]});let F=()=>{let e=ee.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,Q.jsxs)(da,{$open:r,children:[r&&(0,Q.jsx)(fa,{onPointerDown:he,onPointerMove:ge,onPointerUp:_e,onDoubleClick:()=>n(320),title:c(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(pa,{ref:T,style:{width:r?t:0},children:[(0,Q.jsx)(ha,{style:{height:te},children:ie&&pe&&!l?(0,Q.jsxs)(_a,{onPointerEnter:()=>m(!0),onPointerLeave:()=>m(!1),children:[(0,Q.jsx)(`video`,{autoPlay:a,controls:!1,muted:!i,onClick:F,onDurationChange:e=>g(e.currentTarget.duration||0),onError:()=>u(!0),onLoadedMetadata:e=>{g(e.currentTarget.duration||0),v(e.currentTarget.currentTime)},onPause:()=>f(!1),onPlay:()=>f(!0),onTimeUpdate:e=>v(e.currentTarget.currentTime),playsInline:!0,poster:le??void 0,preload:`metadata`,ref:ee,src:pe}),(0,Q.jsx)(va,{$visible:!d,onClick:F,title:c(`play`),type:`button`,children:(0,Q.jsx)(Yt,{size:28})}),(0,Q.jsxs)(ya,{$visible:p,onClick:e=>e.stopPropagation(),children:[(0,Q.jsxs)(ba,{children:[(0,Q.jsx)(`span`,{children:ua(_)}),(0,Q.jsx)(`span`,{children:ua(h)})]}),(0,Q.jsx)(xa,{"aria-label":c(`seek`),max:h||0,min:0,onChange:e=>{let t=ee.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,v(n)},step:.1,type:`range`,value:Math.min(_,h||0)})]})]}):A&&pe?(0,Q.jsx)(`audio`,{controls:!0,src:pe}):j&&(fe??de)?(0,Q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:fe??de}):oe&&me&&!C?(0,Q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>w(!0),src:me}):oe?(0,Q.jsx)(Xt,{size:64}):ae?(0,Q.jsx)(Sa,{children:x||!y?(0,Q.jsx)(wa,{children:c(`loading`)}):y.error?(0,Q.jsx)(wa,{children:y.error}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Ca,{children:y.text}),y.truncated&&(0,Q.jsx)(wa,{children:c(`showing_the_first_256_kb`)})]})}):ie&&le?(0,Q.jsx)(`img`,{alt:``,src:le}):P?(0,Q.jsx)(`img`,{alt:``,src:P}):e.isDirectory?(0,Q.jsx)(St,{size:64}):(0,Q.jsx)(Xt,{size:64})}),(0,Q.jsx)(ga,{onDoubleClick:()=>{O(210),ce(`yafm.preview.media.height`,210)},onPointerDown:ve,onPointerMove:ye,onPointerUp:xe,title:c(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(Ta,{children:[(0,Q.jsx)(Ea,{title:e.path,children:e.name}),o&&(0,Q.jsx)(Da,{children:o}),(0,Q.jsx)(Oa,{children:e.fields.map(e=>(0,Q.jsxs)(ka,{children:[(0,Q.jsx)(Aa,{children:e.label}),(0,Q.jsx)(ja,{title:e.value,children:e.time===void 0?e.value:(0,Q.jsx)(ot,{value:e.time})})]},e.label))})]})]})]})}function la(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function ua(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var da=w.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,fa=w.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,pa=w.aside`
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
`,ma=w.div`
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
`,ha=w.div`
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
`,ga=w.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,_a=w.div`
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
`,va=w.button`
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
`,ya=w.div`
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
`,ba=w.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,xa=w.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Sa=w.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Ca=w.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,wa=w.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Ta=w.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Ea=w.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,Da=w.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Oa=w.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,ka=w.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Aa=w.span`
    color: var(--text-muted);
`,ja=w.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Ma=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Na=[...Ma],Pa={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},Fa={folder:e=>(0,Q.jsx)(St,{size:e}),home:e=>(0,Q.jsx)(V,{size:e}),desktop:e=>(0,Q.jsx)(Ot,{size:e}),documents:e=>(0,Q.jsx)(bn,{size:e}),downloads:e=>(0,Q.jsx)(kt,{size:e}),pictures:e=>(0,Q.jsx)(rn,{size:e}),music:e=>(0,Q.jsx)(yt,{size:e}),videos:e=>(0,Q.jsx)(Sn,{size:e}),drive:e=>(0,Q.jsx)(mt,{size:e}),image:e=>(0,Q.jsx)(_t,{size:e}),video:e=>(0,Q.jsx)(H,{size:e}),audio:e=>(0,Q.jsx)(an,{size:e}),text:e=>(0,Q.jsx)(Pt,{size:e}),code:e=>(0,Q.jsx)(Gt,{size:e}),clock:e=>(0,Q.jsx)(sn,{size:e}),star:e=>(0,Q.jsx)(cn,{size:e}),file:e=>(0,Q.jsx)(Xt,{size:e}),archive:e=>(0,Q.jsx)(nn,{size:e}),pdf:e=>(0,Q.jsx)(Ht,{size:e}),executable:e=>(0,Q.jsx)(wt,{size:e}),font:e=>(0,Q.jsx)(Ct,{size:e}),database:e=>(0,Q.jsx)(xn,{size:e}),config:e=>(0,Q.jsx)(Nt,{size:e}),spreadsheet:e=>(0,Q.jsx)(Wt,{size:e}),presentation:e=>(0,Q.jsx)(on,{size:e}),document:e=>(0,Q.jsx)(pt,{size:e}),app:e=>(0,Q.jsx)(mn,{size:e}),gear:e=>(0,Q.jsx)(ht,{size:e}),pin:e=>(0,Q.jsx)(dn,{size:e}),trash:e=>(0,Q.jsx)(yn,{size:e}),overview:e=>(0,Q.jsx)(Mt,{size:e}),book:e=>(0,Q.jsx)(fn,{size:e}),briefcase:e=>(0,Q.jsx)(Rt,{size:e}),cloud:e=>(0,Q.jsx)(qt,{size:e}),gamepad:e=>(0,Q.jsx)(Tt,{size:e}),camera:e=>(0,Q.jsx)(Qt,{size:e}),terminal:e=>(0,Q.jsx)(Kt,{size:e}),server:e=>(0,Q.jsx)($t,{size:e}),package:e=>(0,Q.jsx)(jt,{size:e}),globe:e=>(0,Q.jsx)(vt,{size:e}),heart:e=>(0,Q.jsx)(Dt,{size:e}),share:e=>(0,Q.jsx)($t,{size:e}),favorites:e=>(0,Q.jsx)(Dt,{size:e})};function Ia(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function La(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Ma)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Na.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Ia(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${Pa[n]??n}${Ra(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Ra(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function za({panel:e,size:t=16}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=de(n);if(r)return(0,Q.jsx)(`img`,{alt:``,src:r,style:{width:t,height:t,objectFit:`contain`}});let i=e.icon?Fa[e.icon]:void 0;if(i)return(0,Q.jsx)(Q.Fragment,{children:i(t)});switch(e.kind){case`quick`:return(0,Q.jsx)(St,{size:t});case`recent`:return(0,Q.jsx)(sn,{size:t});case`frequent`:return(0,Q.jsx)(cn,{size:t});case`drives`:return(0,Q.jsx)(mt,{size:t});case`home`:return(0,Q.jsx)(V,{size:t});case`share`:return(0,Q.jsx)($t,{size:t});case`favorites`:return(0,Q.jsx)(Dt,{size:t});default:return(0,Q.jsx)(St,{size:t})}}function Ba({place:e,size:t=18}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=de(n);return r?(0,Q.jsx)(`img`,{alt:``,height:t,src:r,style:{objectFit:`contain`},width:t}):e.icon&&Fa[e.icon]?(0,Q.jsx)(Q.Fragment,{children:Fa[e.icon](t)}):(0,Q.jsx)(St,{size:t})}var Va=`yafm.colors.saved`,Ha=`yafm.colors.history`,Ua=24,Wa=16,Ga=0,Ka=new Set;function qa(e){let t=(e??``).trim().replace(/^#/,``).toLowerCase();return!/^[0-9a-f]{3}$/.test(t)&&!/^[0-9a-f]{6}$/.test(t)?null:`#${t.length===3?[...t].map(e=>e+e).join(``):t}`}function Ja(e,t){let n=Fe(e),r=new Set,i=[];for(let e of n??[]){let n=qa(e);if(n&&!r.has(n)&&(r.add(n),i.push(n),i.length>=t))break}return i}function Ya(){return Ja(Va,Ua)}function Xa(){return Ja(Ha,Wa)}function Za(){Ga+=1;for(let e of Ka)e()}function Qa(e){let t=qa(e);if(!t)return;let n=[t,...Xa().filter(e=>e!==t)].slice(0,Wa);we(Ha,n),Za()}function $a(e){let t=qa(e);if(!t)return;let n=[t,...Ya().filter(e=>e!==t)].slice(0,Ua);we(Va,n),Za()}function eo(e){let t=qa(e);t&&(we(Va,Ya().filter(e=>e!==t)),Za())}function to(e){return Ka.add(e),()=>{Ka.delete(e)}}function no(){let e=(0,U.useSyncExternalStore)(to,()=>Ga);return(0,U.useMemo)(()=>({saved:Ya(),history:Xa()}),[e])}function ro(e){let t=qa(e);return t?{r:Number.parseInt(t.slice(1,3),16),g:Number.parseInt(t.slice(3,5),16),b:Number.parseInt(t.slice(5,7),16)}:null}function io({r:e,g:t,b:n}){let r=e=>Math.round(Math.max(0,Math.min(255,e))).toString(16).padStart(2,`0`);return`#${r(e)}${r(t)}${r(n)}`}function ao({r:e,g:t,b:n}){let r=e/255,i=t/255,a=n/255,o=Math.max(r,i,a),s=o-Math.min(r,i,a),c=0;return s!==0&&(c=o===r?60*((i-a)/s%6):o===i?60*((a-r)/s+2):60*((r-i)/s+4)),c<0&&(c+=360),{h:c,s:o===0?0:s/o,v:o}}function oo({h:e,s:t,v:n}){let r=n*t,i=e/60,a=r*(1-Math.abs(i%2-1)),o=n-r,s=0,c=0,l=0;return i<1?[s,c]=[r,a]:i<2?[s,c]=[a,r]:i<3?[c,l]=[r,a]:i<4?[c,l]=[a,r]:i<5?[s,l]=[a,r]:[s,l]=[r,a],{r:(s+o)*255,g:(c+o)*255,b:(l+o)*255}}function so({value:e,onChange:t,disabled:n=!1,title:r,ariaLabel:i,variant:a=`dot`}){let o=M(),s=(0,U.useRef)(null),c=(0,U.useRef)(null),l=(0,U.useRef)(null),u=(0,U.useRef)(!1),d=(0,U.useRef)(!1),[f,p]=(0,U.useState)(!1),[m,h]=(0,U.useState)(null),g=ro(e)??{r:0,g:0,b:0},[_,v]=(0,U.useState)(()=>ao(g)),[y,b]=(0,U.useState)(e),{saved:x,history:S}=no(),C=io(oo(_)),w=oo(_),[ee,T]=(0,U.useState)(()=>({r:String(Math.round(w.r)),g:String(Math.round(w.g)),b:String(Math.round(w.b))})),E=(0,U.useRef)(C);E.current=C;let D=(0,U.useCallback)(()=>{p(!1),d.current&&=(Qa(E.current),!1)},[]),te=e=>{v(e);let n=io(oo(e));b(n),d.current=!0,t(n)},O=(e,t)=>{T(n=>({...n,[e]:t}));let n=Number(t);t.trim().length===0||!Number.isInteger(n)||n<0||n>255||te(ao({...w,[e]:n}))},ne=e=>T(t=>({...t,[e]:String(Math.round(w[e]))}));(0,U.useEffect)(()=>{if(f)return;let t=ro(e);t&&(v(ao(t)),b(e))},[e,f]),(0,U.useEffect)(()=>{T({r:String(Math.round(w.r)),g:String(Math.round(w.g)),b:String(Math.round(w.b))})},[C]),(0,U.useLayoutEffect)(()=>{if(!f||!s.current)return;let e=s.current.getBoundingClientRect(),t=Math.max(8,Math.min(e.left,window.innerWidth-236-8)),n=e.bottom+6+322>window.innerHeight?Math.max(8,e.top-328):e.bottom+6;h({top:n,left:t})},[f]),(0,U.useEffect)(()=>{if(!f)return;let e=e=>{let t=e.target;c.current?.contains(t)||s.current?.contains(t)||D()},t=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),D())};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t,!0),window.addEventListener(`blur`,D),window.addEventListener(`resize`,D),document.addEventListener(`scroll`,D,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t,!0),window.removeEventListener(`blur`,D),window.removeEventListener(`resize`,D),document.removeEventListener(`scroll`,D,!0)}},[f,D]);let re=()=>{if(n)return;if(f){D();return}let t=ro(e);t&&(v(ao(t)),b(e)),p(!0)},k=e=>{let t=l.current?.getBoundingClientRect();if(!t)return;let n=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width)),r=1-Math.max(0,Math.min(1,(e.clientY-t.top)/t.height));te({..._,s:n,v:r})},ie=e=>{let n=ro(e);n&&(v(ao(n)),b(e),E.current=e,d.current=!1,t(e),Qa(e),p(!1))},A=qa(e)??C;return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(co,{$variant:a,"aria-label":i??r,disabled:n,onClick:re,ref:s,title:r,type:`button`,children:(0,Q.jsx)(lo,{$color:A})}),f&&m&&(0,pi.createPortal)((0,Q.jsxs)(uo,{ref:c,style:{top:m.top,left:m.left},children:[(0,Q.jsx)(fo,{$hue:_.h,onPointerDown:e=>{e.preventDefault(),e.currentTarget.setPointerCapture(e.pointerId),u.current=!0,k(e)},onPointerMove:e=>{u.current&&k(e)},onPointerUp:e=>{u.current=!1,e.currentTarget.hasPointerCapture(e.pointerId)&&e.currentTarget.releasePointerCapture(e.pointerId)},ref:l,children:(0,Q.jsx)(po,{style:{left:`${_.s*100}%`,top:`${(1-_.v)*100}%`,background:A}})}),(0,Q.jsx)(mo,{"aria-label":o(`color`),max:359,min:0,onChange:e=>te({..._,h:Number(e.target.value)}),type:`range`,value:Math.round(_.h)}),(0,Q.jsxs)(ho,{children:[(0,Q.jsx)(go,{"aria-label":o(`hex_color`),maxLength:7,onBlur:()=>b(C),onChange:e=>{let n=e.target.value;b(n);let r=qa(n),i=r?ro(r):null;i&&(v(ao(i)),d.current=!0,t(r))},spellCheck:!1,value:y}),(0,Q.jsx)(xo,{onClick:()=>$a(C),title:o(`save_color`),type:`button`,children:(0,Q.jsx)(It,{size:11})})]}),(0,Q.jsx)(_o,{children:[`r`,`g`,`b`].map(e=>(0,Q.jsxs)(vo,{children:[(0,Q.jsx)(yo,{children:e.toUpperCase()}),(0,Q.jsx)(bo,{"aria-label":e.toUpperCase(),inputMode:`numeric`,maxLength:3,onBlur:()=>ne(e),onChange:t=>O(e,t.target.value),value:ee[e]})]},e))}),x.length>0&&(0,Q.jsxs)(So,{children:[(0,Q.jsx)(Co,{children:o(`saved_colors`)}),(0,Q.jsx)(wo,{children:x.map(e=>(0,Q.jsxs)(To,{children:[(0,Q.jsx)(Eo,{$color:e,onClick:()=>ie(e),title:e,type:`button`}),(0,Q.jsx)(Do,{onClick:t=>{t.stopPropagation(),eo(e)},title:o(`remove_saved_color`),type:`button`,children:(0,Q.jsx)(Cn,{size:8})})]},e))})]}),S.length>0&&(0,Q.jsxs)(So,{children:[(0,Q.jsx)(Co,{children:o(`color_history`)}),(0,Q.jsx)(wo,{children:S.map(e=>(0,Q.jsx)(Eo,{$color:e,onClick:()=>ie(e),title:e,type:`button`},e))})]})]}),document.body)]})}var co=w.button`
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
`,lo=w.span`
    width: 70%;
    height: 70%;
    border-radius: inherit;
    background: ${({$color:e})=>e};
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.18);
`,uo=w.div`
    position: fixed;
    z-index: 3600;
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 236px;
    padding: 8px;
    ${Qe}
    ${B}
`,fo=w.div`
    position: relative;
    height: 132px;
    border-radius: var(--radius-sm);
    cursor: crosshair;
    touch-action: none;
    background:
        linear-gradient(to top, #000, transparent),
        linear-gradient(to right, #fff, hsl(${({$hue:e})=>e} 100% 50%));
`,po=w.span`
    position: absolute;
    width: 12px;
    height: 12px;
    margin: -6px 0 0 -6px;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
    pointer-events: none;
`,mo=w.input`
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
`,ho=w.div`
    display: flex;
    gap: 5px;
`,go=w.input`
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
`,_o=w.div`
    display: flex;
    gap: 5px;
`,vo=w.label`
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
`,yo=w.span`
    color: var(--text-muted);
    font-size: 9px;
`,bo=w.input`
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
`,xo=w.button`    display: grid;
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
`,So=w.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`,Co=w.span`
    color: var(--text-muted);
    font-size: 9.5px;
`,wo=w.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
`,To=w.div`
    position: relative;
`,Eo=w.button`
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
`,Do=w.button`
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

    ${To}:hover & {
        display: grid;
    }

    &:hover {
        color: var(--text-primary);
    }
`,Oo=`#64748b`;function ko(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Ao({x:e,y:t,tags:n,allTags:r,colors:i,onChange:a,onClose:o}){let s=M(),[c,l]=(0,U.useState)(``),[u,d]=(0,U.useState)(`#2dd4bf`),f=(0,U.useRef)(null);(0,U.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||o()},t=e=>{e.key===`Escape`&&o()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,o),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,o)}},[o]);let p=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),m=e=>i[e]??`#64748b`,h=e=>{a(n.includes(e)?n.filter(t=>t!==e):[...n,e])},g=(e,t)=>{a(n,{...i,[e]:t})},_=()=>{let e=c.trim();e.length!==0&&(a(n.includes(e)?n:[...n,e],{...i,[e]:u}),l(``))},v=Math.max(8,Math.min(e,window.innerWidth-272)),y=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,pi.createPortal)((0,Q.jsxs)(jo,{"data-tag-menu":`true`,ref:f,style:{left:v,top:y},children:[(0,Q.jsxs)(Mo,{children:[(0,Q.jsx)(`span`,{children:s(`tags`)}),(0,Q.jsx)(No,{onClick:o,title:s(`close`),type:`button`,children:(0,Q.jsx)(Cn,{size:11})})]}),(0,Q.jsxs)(Po,{children:[p.length===0&&(0,Q.jsx)(Lo,{children:s(`no_tags_yet`)}),p.map(e=>{let t=m(e),r=n.includes(e);return(0,Q.jsxs)(Fo,{children:[(0,Q.jsx)(so,{ariaLabel:s(`color_of_tag`,{tag:e}),title:s(`change_this_tag_s_color`),value:t,onChange:t=>g(e,t)}),(0,Q.jsxs)(Io,{$color:t,$ink:ko(t),$on:r,onClick:()=>h(e),type:`button`,children:[r&&(0,Q.jsx)(Bt,{size:11}),(0,Q.jsx)(`span`,{children:e})]})]},e)})]}),(0,Q.jsxs)(Ro,{children:[(0,Q.jsx)(so,{ariaLabel:s(`color_of_the_new_tag`),title:s(`color_of_the_new_tag`),value:u,onChange:d}),(0,Q.jsx)(`input`,{onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),_())},placeholder:s(`new_tag`),spellCheck:!1,value:c}),(0,Q.jsx)(zo,{onClick:_,type:`button`,children:s(`add`)})]})]}),document.body)}var jo=w.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${B}
`,Mo=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,No=w.button`
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
`,Po=w.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Fo=w.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Io=w.button`
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
`,Lo=w.span`
    font-size: 11px;
    color: var(--text-muted);
`,Ro=w.div`
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
`,zo=w.button`
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
`;function Bo({path:e,name:t,isDirectory:n,size:r=18}){let i=N(e,n);return i?(0,Q.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,Q.jsx)(St,{size:r}):(0,Q.jsx)(Yr,{name:Jr(t),size:r})}var Vo=`application/x-yafm-paths`,Ho=[Vo,`text/uri-list`];function Uo(e){return e?.types.some(e=>Ho.includes(e.toLowerCase()))??!1}function Wo(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Vo);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Ko).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Go=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Ko(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Go?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function qo(e){return`file:///`+e.replace(/\\/g,`/`).split(`/`).map((e,t)=>t===0&&/^[a-zA-Z]:$/.test(e)?e:encodeURIComponent(e)).join(`/`)}function Jo(e,t,n=!0){e.dataTransfer.setData(Vo,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.setData(`text/uri-list`,t.map(qo).join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Yo({items:t,clipboardItems:n,clipboardMove:r,visible:i,position:a,currentDirectory:o,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=M(),[h,g]=(0,U.useState)(()=>new Set),[_,v]=(0,U.useState)(!1),y=(0,U.useRef)(null),b=(0,U.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),x=(0,U.useMemo)(()=>n.filter(e=>h.has(e.path)),[n,h]),S=(0,U.useRef)(null);if((0,U.useEffect)(()=>{if(!i)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Uo(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Wo(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[i,c]),!i)return null;let C=new Set([...t,...n].map(e=>e.path)),w=C.size>0&&[...C].every(e=>h.has(e)),ee=C.size,T=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},E=()=>{g(w?new Set:C)},D=e=>{y.current={x:e.clientX,y:e.clientY,left:a.x,top:a.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},te=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},O=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ne=()=>{let e=b.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},re=()=>{let e=b.map(e=>e.path);e.length!==0&&f(e)},k=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,r);let t=[...e].filter(([,e])=>e).map(([e])=>e),n=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,o,!0),n.length>0&&p(n,o,!1),g(new Set)},ie=(t,n)=>{let r=h.has(t.path);return(0,Q.jsxs)(ss,{$checked:r,draggable:!0,onClick:()=>T(t.path),onDragStart:e=>{Jo(e,r&&h.size>0?[...new Set([...b,...x].map(e=>e.path))]:[t.path],n)},title:t.path,children:[(0,Q.jsx)(cs,{$checked:r,onClick:e=>{e.stopPropagation(),T(t.path)},type:`button`,children:r&&(0,Q.jsx)(Bt,{size:8})}),(0,Q.jsx)(Bo,{isDirectory:t.isDirectory,name:t.name,path:t.path,size:16}),(0,Q.jsxs)(ls,{children:[(0,Q.jsx)(us,{children:t.name}),(0,Q.jsx)(ds,{children:e(t.path)})]})]},`${n?`tray`:`clipboard`}:${t.path}`)},A=e=>{Uo(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,Q.jsxs)(Xo,{$dragging:_,"data-tray":`true`,ref:S,style:{left:a.x,top:a.y},onDragEnter:A,onDragOver:A,onDrop:e=>{let{paths:t}=Wo(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,Q.jsxs)(Zo,{onPointerDown:D,onPointerMove:te,onPointerUp:O,children:[(0,Q.jsxs)(Qo,{children:[(0,Q.jsx)(jt,{size:12}),m(`tray`),(0,Q.jsx)($o,{children:ee})]}),(0,Q.jsxs)(es,{onPointerDown:e=>e.stopPropagation(),children:[(0,Q.jsx)(ts,{onClick:E,title:m(w?`select_none`:`select_all`),type:`button`,children:m(w?`none`:`all`)}),(0,Q.jsx)(ts,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,Q.jsx)(ns,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,Q.jsx)(Cn,{size:10})})]})]}),(0,Q.jsxs)(rs,{children:[(0,Q.jsxs)(as,{children:[m(`in_this_app`),(0,Q.jsx)($o,{children:t.length})]}),t.length===0&&(0,Q.jsx)(is,{children:m(`drag_files_or_folders_here`)}),t.map(e=>ie(e,!0)),n.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsxs)(as,{$clipboard:!0,children:[m(`clipboard`),(0,Q.jsx)($o,{children:n.length}),r&&(0,Q.jsx)(os,{children:m(`cut`)})]}),n.map(e=>ie(e,r))]})]}),(0,Q.jsxs)(fs,{children:[(0,Q.jsx)(ps,{$plain:!0,disabled:b.length===0,onClick:re,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,Q.jsx)(ps,{disabled:h.size===0||!o,onClick:k,type:`button`,children:m(`move_here`)}),(0,Q.jsx)(ps,{$danger:!0,disabled:b.length===0,onClick:ne,type:`button`,children:m(`remove`)})]})]})}var Xo=w.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${Qe}
    ${B}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Zo=w.div`
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
`,Qo=w.span`
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
`,$o=w.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,es=w.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,ts=w.button`
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
`,ns=w.button`
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
`,rs=w.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,is=w.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,as=w.div`
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
`,os=w.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,ss=w.div`
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
`,cs=w.button`
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
`,ls=w.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,us=w.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ds=w.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,fs=w.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,ps=w.button`
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
`,ms={shares:[],webRunning:!1,webPort:0,urls:[],preferredUrl:null,deviceId:``,deviceName:``,fingerprint:``};async function hs(){return j.available?await j.request(`share.list`):ms}async function gs(e,t){return j.available?await j.request(`share.add`,{path:e,mode:t}):ms}async function _s(e){return j.available?await j.request(`share.remove`,{id:e}):ms}async function vs(e,t){return j.available?await j.request(`share.mode`,{id:e,mode:t}):ms}async function ys(){return j.available?(await j.request(`share.peers`)).peers??[]:[]}async function bs(){return j.available?(await j.request(`share.peers.refresh`)).peers??[]:[]}async function xs(e,t){j.available&&await j.request(`share.pair.start`,{host:e,port:t})}async function Ss(e,t){j.available&&await j.request(`share.pair.respond`,{requestId:e,accept:t})}async function Cs(e,t){j.available&&await j.request(`share.port`,{mode:t,port:e})}var ws=`yafm://share/`;function Ts(e){return e.toLowerCase().startsWith(ws)}function Es(e){if(!Ts(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Ds(e,t,n=``){let r=`${ws}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Os(e){let t=Es(e);if(!t||!j.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await j.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Ds(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Ds(t.deviceId,t.shareId,n.parent),total:n.entries?.length??0,signature:0,entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function ks(e){let t=Es(e);if(!t||!j.available)throw Error(`This shared file is only available in the desktop app.`);let n=await j.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function As(e){await Ae(await ks(e))}async function js(){return j.available?await j.request(`share.certificate`):null}async function Ms(e,t){return await j.request(`share.certificate.import`,{path:e,password:t})}async function Ns(){return await j.request(`share.certificate.reset`)}async function Ps(){return j.available?(await j.request(`share.devices.clear`)).devices??[]:[]}async function Fs(){return j.available?(await j.request(`share.devices.list`)).devices??[]:[]}async function Is(e,t,n){return j.available?(await j.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function Ls(e){return j.available?(await j.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function Rs(){return j.available?(await j.request(`share.access.status`)).hasPassword:!1}async function zs(e){return j.available?(await j.request(`share.access.password`,{password:e})).hasPassword:!1}var Bs=60,Vs=300,Hs=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],Us=new Set,Ws=`yafm.columnWidths`,Gs=`yafm.reset-column-widths`,Ks=64,qs=720,Js=160,Ys=190,Xs=120;function Zs({listing:e,loading:t,error:r,find:i=ye,view:a,showImages:o,imageStripHeight:s=Ys,onImageStripHeight:c,onSort:l,onSetTags:u,onOpen:f,onOpenFile:p,onSelectEntry:m,onOpenExternally:g,showCheckboxes:_=!0,openOnSingleClick:y=!1,shortcuts:x=wr(),enableShortcuts:S=!0,refreshToken:C=0,onRefresh:w,onRename:ee,onClipboardChanged:T,cutPaths:E=Us,onTransfer:D,onAddToTray:te,platform:O,onAddFavorite:ne,onRemoveFavorite:re,favoritePaths:k,onExtractArchive:ie,onOpenAsArchive:A,onAddToStartMenu:j,onPaste:ae,confirmDelete:se=!1,previewVideoAudio:le=!1,previewVideoAutoplay:ue=!1,showDetails:de=!0,onPreviewInfo:fe,onActivate:N,groupOf:pe,onGridScroll:me,gridFooter:P,allowBackgroundMenu:he=!0,readOnly:ge=!1,onSelectionChange:_e,onSelectionCountChange:ve,selectionMenuRequest:be,selectionMenuId:xe,singleSelect:F=!1,pendingRename:Se=null,pendingRenameToken:Ce=0,selectMatchesToken:Te=0,onLoadMore:Ee,onEnsureComplete:De,selectAllToken:Oe=0}){let I=M(),ke=Ur(),Ae=(0,U.useRef)(null),Me=(0,U.useRef)(null),Ne=(0,U.useRef)(null),Pe=(0,U.useRef)(null),Ie=(0,U.useRef)(0),Le=(0,U.useRef)(null),[Re,ze]=(0,U.useState)(Vs),[Be,Ve]=(0,U.useState)({top:0,height:640}),He=(0,U.useRef)(null),L=(0,U.useRef)(null),Ue=(0,U.useRef)(!1),Ge=(0,U.useRef)(!1),Ke=(0,U.useRef)(null),qe=(0,U.useRef)(null),[Je,Ye]=(0,U.useState)(null),[Xe,Ze]=(0,U.useState)(s),[R,z]=(0,U.useState)(()=>new Set),[Qe,$e]=(0,U.useState)(()=>Fe(Ws)??{}),et=(0,U.useRef)(R),nt=(0,U.useRef)([]);et.current=R,(0,U.useEffect)(()=>_e?.([...R]),[R,_e]),(0,U.useEffect)(()=>ve?.(R.size),[R,ve]),(0,U.useEffect)(()=>{let e=be;if(!e||e.token===it.current)return;it.current=e.token;let t=[...et.current];t.length!==0&&(rt({x:e.x,y:e.y,paths:t,background:!1}),Gn().then(vt,()=>vt(!1)))},[be]);let[B,rt]=(0,U.useState)(null),it=(0,U.useRef)(0),[at,ot]=(0,U.useState)(null),[st,lt]=(0,U.useState)(null),[ut,dt]=(0,U.useState)(null),ft=(0,U.useRef)(ut);ft.current=ut;let V=(0,U.useRef)(0),pt=(0,U.useRef)(N);pt.current=N;let[mt,ht]=(0,U.useState)(()=>{let e=ct(`yafm.preview.width`,320);return e>=220?e:320}),gt=(0,U.useCallback)(e=>{ht(e),ce(`yafm.preview.width`,e)},[]),[_t,vt]=(0,U.useState)(!1),yt=(0,U.useCallback)((e,t)=>{let n=[...et.current];n.length!==0&&(rt({x:e,y:t,paths:n,background:!1}),Gn().then(vt,()=>vt(!1)))},[]);(0,U.useEffect)(()=>{if(xe)return tt(xe,R.size>0?yt:null),()=>tt(xe,null)},[xe,R,yt]),(0,U.useEffect)(()=>{z(new Set),dt(null),rt(null),L.current=null},[e?.path]),(0,U.useEffect)(()=>{Ze(s)},[s]),(0,U.useEffect)(()=>{z(new Set),dt(null),L.current=null},[C]);let bt=e=>{He.current={y:e.clientY,height:Xe},e.currentTarget.setPointerCapture(e.pointerId)},xt=e=>{let t=He.current;if(!t)return;let n=Math.max(Xs,Math.round(window.innerHeight*.7));Ze(Math.min(n,Math.max(Xs,t.height+t.y-e.clientY)))},St=e=>{He.current&&(He.current=null,e.currentTarget.releasePointerCapture(e.pointerId),c?.(Xe))},Ct=()=>{Ze(Ys),c?.(Ys)},wt=i.query.length>0,Tt=(0,U.useMemo)(()=>Hs.filter(e=>a.columns?.includes(e.id)),[a.columns]),Et=a.columns?.includes(`linkTarget`)??!1,Dt=(0,U.useCallback)(e=>Math.min(qs,Math.max(Ks,Qe[e.id]??e.width)),[Qe]),Ot=(0,U.useMemo)(()=>`minmax(160px, 1fr) ${Tt.map(e=>`${Dt(e)}px`).join(` `)}`.trim(),[Tt,Dt]),kt=(0,U.useRef)(null),At=(0,U.useRef)(null),jt=()=>Math.floor(At.current?.getBoundingClientRect().width??Js),Mt=e=>{let t=Tt[0];t&&(e.preventDefault(),e.stopPropagation(),kt.current={left:{id:t.id,start:Dt(t)},startX:e.clientX,nameStart:jt()})},Nt=(e,t)=>{let n=Tt[t],r=Tt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),kt.current={left:{id:n.id,start:Dt(n)},right:{id:r.id,start:Dt(r)},startX:e.clientX,nameStart:0})},Pt=e=>$e(t=>{let n={...t};return delete n[e],we(Ws,n),n});(0,U.useEffect)(()=>{let e=e=>{let t=kt.current;if(!t)return;let n=e.clientX-t.startX;$e(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Js),i=Math.min(Math.min(qs,t.left.start+r),Math.max(Ks,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(qs,Math.max(Ks,t.left.start+n)),a=Math.min(Math.min(qs,r-Ks),Math.max(Math.max(Ks,r-qs),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{kt.current&&(kt.current=null,$e(e=>(we(Ws,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,U.useEffect)(()=>{let e=()=>$e(()=>(we(Ws,{}),{}));return window.addEventListener(Gs,e),()=>window.removeEventListener(Gs,e)},[]);let Ft=(0,U.useMemo)(()=>({query:i?.query??``,matchCase:i?.matchCase??!1,regex:i?.regex??!1}),[i?.query,i?.matchCase,i?.regex]),It=i?.mode??`dim`,Lt=(0,U.useDeferredValue)(Ft),H=(0,U.useMemo)(()=>e?tc(e.entries.map(t=>{let n=t.isDirectory?Wr(ke,t.fullPath):void 0,r=n?.name||t.name;return{entry:t,place:n,label:r,ranges:wt?oe(r,Lt):null,tags:e.tags[t.name]??[],cut:E.has(t.fullPath)}}).filter(e=>!wt||It===`dim`||e.ranges!==null),a,e,I):[],[e?.entries,e?.tags,a.sort===`size`||a.sort===`items`?e?.folderSizes:null,a.sort===`size`||a.sort===`items`?e?.counts:null,wt,Lt,It,ke,a.sort,a.sortDescending,I,E]);nt.current=H,(0,U.useEffect)(()=>{Oe!==0&&z(new Set(nt.current.map(e=>e.entry.fullPath)))},[Oe]),(0,U.useEffect)(()=>{Te!==0&&z(new Set(nt.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[Te]);let Rt=Math.max(40,a.iconSize+20),zt=Math.max(0,Math.floor(Be.top/Rt)-4),Vt=Math.min(H.length,zt+Math.ceil(Be.height/Rt)+10),Ht=(0,U.useMemo)(()=>H.slice(zt,Vt),[H,zt,Vt]);(0,U.useEffect)(()=>{Ee&&H.length>0&&Vt>=H.length&&Ee()},[Ee,H.length,Vt]),(0,U.useEffect)(()=>{let e=Pe.current;if(!e||a.mode!==`list`)return;e.scrollTop=0,Ve({top:0,height:e.clientHeight});let t=()=>Ve(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[a.mode]),(0,U.useEffect)(()=>{Ve(e=>({...e,top:0})),Pe.current&&(Pe.current.scrollTop=0)},[e?.path]),(0,U.useEffect)(()=>{if(i.currentPath){if(a.mode===`list`){let e=H.findIndex(e=>e.entry.fullPath===i.currentPath),t=Pe.current;if(e<0||!t)return;let n=e*Rt;(n<t.scrollTop||n+Rt>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else Ae.current?.scrollIntoView({block:`nearest`})}},[i.currentPath,a.mode,H,Rt]);let[Ut,Wt]=(0,U.useState)(0),Gt=(0,U.useRef)(!1),Kt=(0,U.useMemo)(()=>H.slice(Ut,Ut+Re),[H,Ut,Re]);(0,U.useEffect)(()=>()=>{Ie.current!==0&&cancelAnimationFrame(Ie.current)},[]),(0,U.useEffect)(()=>{let e=Me.current;if(!e||e.length===0)return;let t=e.filter(e=>H.some(t=>n(t.entry.fullPath,e)));if(t.length===0)return;Me.current=null;let r=t[0],i=H.findIndex(e=>n(e.entry.fullPath,r));i>=0&&ze(e=>Math.max(e,i+Vs)),z(new Set(t)),L.current=r,a.mode===`list`&&Pe.current&&i>=0?Pe.current.scrollTop=Math.max(0,i*Rt-Pe.current.clientHeight/2):requestAnimationFrame(()=>Ae.current?.scrollIntoView({block:`nearest`}))},[H,Rt,a.mode]),(0,U.useEffect)(()=>{ze(Vs),Wt(0)},[e?.path]),(0,U.useEffect)(()=>{if(!i.currentPath)return;let e=H.findIndex(e=>e.entry.fullPath===i.currentPath);e>=0&&ze(t=>Math.max(t,e+Vs))},[i.currentPath,H]);let qt=(0,U.useCallback)(e=>{if(!(e.scrollTop+e.clientHeight<e.scrollHeight-600)){if(Re>=1200){let t=e.scrollHeight,n=e.scrollTop;Gt.current=!0,Wt(e=>Math.min(e+Vs,H.length)),requestAnimationFrame(()=>{e.scrollTop=Math.max(0,n-(t-e.scrollHeight)),Gt.current=!1})}else ze(e=>Math.min(H.length,e+Vs));Ee?.()}},[Re,H.length,Ee]),Jt=(0,U.useCallback)(e=>{if(Gt.current||Ut===0||e.scrollTop>e.clientHeight)return;let t=e.scrollHeight,n=e.scrollTop;Gt.current=!0,Wt(e=>Math.max(0,e-Vs)),requestAnimationFrame(()=>{e.scrollTop=n+(e.scrollHeight-t),Gt.current=!1})},[Ut]),Yt=a.mode===`grid`,Xt=(0,U.useMemo)(()=>{if(!Yt)return[];if(!pe)return ic(Kt,rc);let e=[],t=new Map;for(let n of Kt){let r=pe(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[Kt,Yt,pe]),Zt=(0,U.useMemo)(()=>o?H.filter(e=>!e.entry.isDirectory&&zr(e.entry.name)):[],[H,o]),Qt=Zt.length,$t=(0,U.useMemo)(()=>Zt.slice(0,Bs),[Zt]),en=(0,U.useMemo)(()=>o?ic($t,nc):[],[$t,o]),tn=(0,U.useMemo)(()=>en.flatMap(e=>e.rows.map(e=>e.entry.fullPath)),[en]),nn=tn.filter(e=>R.has(e)).length,rn=tn.length>0&&nn===tn.length,an=nn>0&&!rn,on=(0,U.useMemo)(()=>H.map(e=>e.entry.fullPath),[H]),sn=(0,U.useMemo)(()=>Yt?Xt.flatMap(e=>e.rows.map(e=>e.entry.fullPath)):on,[on,Yt,Xt]),cn=H.length>0&&R.size>=H.length,ln=R.size>0&&!cn,un=()=>{F||(cn?_n():z(new Set(on)))},dn=(0,U.useCallback)((e,t)=>{F||e.length===0||(z(n=>{let r=new Set(n);for(let n of e)t?r.add(n):r.delete(n);return r}),t&&(L.current=e[0]??null))},[F]),fn=e?.path??``,pn=(0,U.useCallback)((e,t)=>{if(F){L.current=t,z(new Set([t]));return}let n=e.ctrlKey||e.metaKey;z(r=>{if(e.shiftKey&&L.current!==null){let e=on.indexOf(L.current),i=on.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(on[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),L.current=t,e}return L.current=t,new Set([t])})},[on,F]),mn=(0,U.useCallback)((e,t)=>{Ge.current=!1,pn(e,t)},[pn]),hn=(0,U.useCallback)((e,t)=>{Ge.current=!0,pn(e,t)},[pn]),gn=(0,U.useCallback)(e=>{F?(L.current=e,z(new Set([e]))):(L.current=e,z(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[F]),_n=(0,U.useCallback)(()=>{L.current=null,Ge.current=!1,z(new Set)},[]);(0,U.useEffect)(()=>{if(Ce===0||!Se||V.current===Ce||!e?.entries.some(e=>e.fullPath===Se))return;V.current=Ce,L.current=Se,z(new Set([Se])),dt({path:Se,value:v(Se)});let t=H.findIndex(e=>e.entry.fullPath===Se),n=Pe.current;if(!(t<0||!n)){if(a.mode===`list`){let e=t*Rt;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Se)}"]`)?.scrollIntoView({block:`nearest`})})}},[Pe,e,Se,Ce,Rt,H,a.mode]),(0,U.useEffect)(()=>{if(!ut)return;let e=H.findIndex(e=>e.entry.fullPath===ut.path),t=Pe.current;if(!(e<0||!t)){if(a.mode===`list`){let n=e*Rt;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(ut.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[Pe,ut,Rt,H,a.mode]);let vn=(0,U.useCallback)(()=>rt(null),[]),yn=(0,U.useCallback)((e,t)=>{e.isDirectory?f(e.fullPath,jr(t)):p?.(e.fullPath,jr(t))},[f,p]),bn=(0,U.useCallback)((e,t,n)=>{Ye({entry:e,x:t,y:n})},[]),xn=(0,U.useRef)(null),Sn=(0,U.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Jo(e,R.has(n)?[...R]:[n])},[R]),Cn=(0,U.useCallback)(e=>{if(!Uo(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);xn.current=t?.dataset.directory===`true`?t.dataset.path??fn:fn,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[fn]),wn=(0,U.useCallback)(e=>{if(ge)return;let{paths:t,move:n}=Wo(e),r=xn.current??fn;xn.current=null,t.length!==0&&D&&(e.preventDefault(),D(t,r,!e.ctrlKey&&n))},[fn,D,ge]),Tn=(0,U.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),ge||!t&&!he)return;let n=et.current;t&&!n.has(t)&&z(new Set([t])),t&&(L.current=t);let r=t?n.has(t)?[...n]:[t]:[];rt({x:e.clientX,y:e.clientY,paths:r,background:!t}),Gn().then(vt,()=>vt(!1))},[he,fn]),En=(0,U.useCallback)(()=>w?.(),[w]),Dn=(e,t)=>{L.current=e,z(new Set([e])),t&&dt({path:e,value:v(e)}),En()},On=at&&(0,Q.jsx)(Di,{initialDirectory:fn,initialName:at.name,onCancel:()=>ot(null),onCompress:async e=>{let t=await vr(at.paths,e);return!t.ok||!t.path?(je(t.error??I(`could_not_create_the_archive`)),!1):(Dn(t.path,!1),!0)}}),kn=async(e,t=!1)=>{let n=e,r=t;if(e.some(Ts)){let t=[];for(let n of e)if(!Ts(n))t.push(n);else{if(nt.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){je(I(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await ks(n))}catch(e){je(e instanceof Error?e.message:I(`the_file_could_not_be_copied`));return}}n=t,r=!1}await Wn(n,r)&&(vt(!0),T?.())},An=async e=>{if(!e)return;let t=await Qn(e);t.cancelled||(t.ok?(Me.current=t.created,En(),ae?.()):je(I(`nothing_on_the_clipboard_could_be_pasted_here`)))},jn=async(e,t=!1)=>{if(!fn)return;let n=e===null?await tr(fn,t):await ar(fn,e);!n.ok||n.path===null?je(n.error??I(`could_not_create_the_item`)):(L.current=n.path,z(new Set([n.path])),dt({path:n.path,value:v(n.path)}),En())},Mn=e=>{z(new Set([e.fullPath])),L.current=e.fullPath,dt({path:e.fullPath,value:e.name})},Nn=(0,U.useCallback)(e=>dt(t=>t&&{...t,value:e}),[]),W=(0,U.useCallback)(()=>dt(null),[]),G=(0,U.useCallback)(async()=>{let e=ft.current;if(dt(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=nt.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await er(e.path,t);r.ok?(_n(),r.path&&ee?.(e.path,r.path),En(),window.setTimeout(()=>En(),250)):je(r.error??I(`could_not_rename_the_entry`))},[_n,ee,En,I]),Pn=async(e,t=!1)=>{if((t||se)&&!await Fn(e,t))return;let n=t,r=await $n(e,n);if(!r.ok&&r.needsPermanent){if(!await Fn(e,!0))return;n=!0,r=await $n(e,!0)}if(!r.ok&&r.needsRunningConfirm){if(!await In(e,n,r.running??[],!1))return;r=await $n(e,n,!0)}if(!r.ok&&!r.needsRunningConfirm&&(r.running?.length??0)>0)await In(e,n,r.running??[],!0);else if(r.ok)_n(),En();else{if(r.cancelled)return;je(r.error??I(n?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},Fn=(0,U.useCallback)((e,t)=>new Promise(n=>lt({paths:e,permanent:t,resolve:n})),[]),In=(0,U.useCallback)((e,t,n,r)=>new Promise(i=>lt({paths:e,permanent:t,running:!0,blocked:r,programs:n,resolve:i})),[]),Ln=(0,U.useCallback)(e=>{lt(t=>(t?.resolve(e),null))},[]),K=(0,U.useCallback)(()=>Ge.current&&qe.current!==null,[]),Rn=(0,U.useCallback)(()=>K()?tn:sn,[K,tn,sn]),zn=(0,U.useCallback)(e=>{let t=K(),n=t?qe.current:a.mode===`grid`?Ke.current:Pe.current;if(!n||!t&&a.mode===`list`&&(e===`left`||e===`right`))return;let r=Rn();if(r.length===0)return;let i=L.current&&r.includes(L.current)?L.current:R.size===1?[...R][0]:null,o=[...n.querySelectorAll(`[data-path]`)],s=i?o.find(e=>e.dataset.path===i):void 0,c=i?r.indexOf(i):-1,l=e===`left`?-1:1,u;u=s?e===`left`||e===`right`?r[((c<0?l>0?-1:0:c)+l+r.length)%r.length]:$s(o,s.getBoundingClientRect(),e)?.dataset.path??(c>=0?r[c+(e===`down`?1:-1)]:r[0]):o[0]?.dataset.path??r[0],u&&(z(new Set([u])),L.current=u,window.requestAnimationFrame(()=>{n.querySelector(`[data-path="${CSS.escape(u)}"]`)?.scrollIntoView({block:`nearest`})}))},[Rn,R,K,a.mode]);(0,U.useEffect)(()=>{if(!S||B)return;let e=e=>{if(Ir(e.target))return;pt.current?.();let t=Mr(e),n=[...R],r=n.length===1?H.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`arrowleft`||t===`arrowright`)e.preventDefault(),zn(t.slice(5));else if(t===`home`||t===`end`){let n=Rn();if(n.length===0)return;e.preventDefault();let r=t===`home`?n[0]:n[n.length-1];z(new Set([r])),L.current=r,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(r)}"]`)?.scrollIntoView({block:`nearest`})})}else X(x,`copy`,t)&&i(()=>{n.length>0&&kn(n)}),X(x,`duplicate`,t)&&i(()=>{n.length!==0&&fn&&qn(n,fn,!1).then(e=>{e.ok&&(e.created.length>0&&z(new Set(e.created)),En())})}),X(x,`cut`,t)&&i(()=>{n.length>0&&kn(n,!0)}),X(x,`paste`,t)&&i(()=>void An(fn)),X(x,`delete`,t)&&i(()=>{n.length>0&&Pn(n)}),X(x,`deletePermanently`,t)&&i(()=>{n.length>0&&Pn(n,!0)}),X(x,`selectAll`,t)&&i(()=>{let e=Ue.current&&o&&$t.length>0?$t.map(e=>e.entry.fullPath):on;z(new Set(e)),De?.(),L.current=e[0]??null}),X(x,`invertSelection`,t)&&i(()=>{z(new Set(on.filter(e=>!R.has(e)))),L.current=on[0]??null}),X(x,`rename`,t)&&r&&i(()=>void Mn(r)),X(x,`open`,t)&&r&&i(()=>{r.isDirectory?f(r.fullPath):p?.(r.fullPath)}),X(x,`newFolder`,t)&&i(()=>void jn(null)),X(x,`terminal`,t)&&i(()=>void ur(fn)),X(x,`properties`,t)&&i(()=>void or(n.length>0?n:fn?[fn]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[on,kn,jn,fn,S,B,f,p,Rn,An,Pn,Mn,H,R,x,zn]);let Bn=st?.running?(0,Q.jsx)(Bi,{confirmLabel:st.permanent?I(`delete`):I(`move`),message:st.blocked?I(`programs_are_using_target_close_them_and_try_again`,{programs:dc(st.programs),target:st.paths.length===1?I(`this_item`):I(`count_items`,{count:st.paths.length})}):I(`programs_are_using_target_continue`,{programs:dc(st.programs),target:st.paths.length===1?I(`this_item`):I(`count_items`,{count:st.paths.length})}),onCancel:()=>Ln(!1),onConfirm:st.blocked?void 0:()=>Ln(!0),programs:st.programs??[]}):st?(0,Q.jsx)(We,{confirmLabel:st.permanent?I(`delete`):I(`move`),danger:st.permanent,message:st.permanent?I(`permanently_delete_target_this_cannot_be_undone`,{target:st.paths.length===1?I(`this_item`):I(`count_items`,{count:st.paths.length})}):I(`move_target_to_the_recycle_bin`,{target:st.paths.length===1?I(`this_item`):I(`count_items`,{count:st.paths.length})}),onCancel:()=>Ln(!1),onConfirm:()=>Ln(!0),open:!0,title:st.permanent?I(`delete_permanently`):I(`move_to_the_recycle_bin`)}):null,q=(0,U.useMemo)(()=>{if(!e||R.size===0)return null;let t=on.find(e=>R.has(e));return t?H.find(e=>e.entry.fullPath===t)?.entry??null:null},[on,e,H,R]),Vn=(0,U.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:v(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:I(`type`),value:I(`folder`)},{label:I(`location`),value:e.parent??`—`},{label:I(`path`),value:e.path},{label:I(`size`),value:h(t)},{label:I(`items`),value:b(I,n,`k_1_item`,`count_items`)},{label:I(`modified`),value:`—`},{label:I(`created`),value:`—`},{label:I(`attributes`),value:`—`}]}},[e,I]),Hn=(0,U.useMemo)(()=>{if(!q||!e)return null;let t=q.isDirectory?e.folderSizes[q.name]:void 0,n=e.tags[q.name]??[],r=q.name.lastIndexOf(`.`),i=r>0&&r<q.name.length-1?q.name.slice(r+1).toUpperCase():`—`;return{name:q.name,path:q.fullPath,isDirectory:q.isDirectory,size:q.size,modified:q.modified,created:q.created,fields:[{label:I(`type`),value:Zr(q.name,q.isDirectory,q.linkTarget,I)},...q.isEncrypted?[{label:I(`encryption`),value:I(`password_required`)}]:[],{label:I(`extension`),value:q.isDirectory?`—`:i},{label:I(`location`),value:e.path},{label:I(`full_path`),value:q.fullPath},{label:I(`size`),value:q.isDirectory?t===void 0?`—`:h(t):h(q.size)},...q.isDirectory?[{label:I(`items`),value:`${e.counts[q.name]??`—`}`}]:[],{label:I(`modified`),value:d(q.modified),time:q.modified},{label:I(`created`),value:d(q.created),time:q.created},{label:I(`link_status`),value:q.linkTarget==null?q.linkCount>1?I(`hard_link`):`—`:q.linkValid?`ok`:I(`broken`)},...q.linkTarget?[{label:I(`target`),value:q.linkTarget}]:[],...q.linkCount>1?[{label:I(`links`),value:String(q.linkCount)}]:[],{label:I(`attributes`),value:[q.isHidden?I(`hidden`):``,q.isSystem?I(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:I(`tags`),value:n.join(`, `)}]:[]]}},[e,q,I]),Un=B?.paths.length===1?B.paths[0]:null,Kn=Un?H.find(e=>e.entry.fullPath===Un)?.entry:void 0,Jn=Kn?{path:Kn.fullPath,isDirectory:Kn.isDirectory}:null,Yn=Hn??Vn,Xn=(0,U.useRef)(fe);Xn.current=fe,(0,U.useEffect)(()=>{Xn.current?.(Yn)},[fe,Yn]);let Zn=de&&Yn&&(0,Q.jsx)(ca,{info:Yn,onWidth:gt,selectionNote:R.size>1?b(I,R.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:le,videoAutoplay:ue,width:mt});return r&&!e?(0,Q.jsx)(pl,{children:(0,Q.jsx)(hl,{children:r})}):!e&&!t?(0,Q.jsx)(pl,{children:(0,Q.jsx)(ml,{children:I(`nothing_selected`)})}):a.mode===`grid`?(0,Q.jsxs)(Ac,{onPointerDown:N,children:[(0,Q.jsxs)(jc,{children:[(0,Q.jsxs)(zc,{ref:Ke,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||_n()},onContextMenu:e=>Tn(e),onDragOver:Cn,onDragStart:Sn,onDrop:wn,onScroll:e=>{me?.(e.currentTarget),qt(e.currentTarget),Jt(e.currentTarget)},children:[_&&H.length>0&&(0,Q.jsxs)(Dc,{children:[(0,Q.jsx)(Tc,{$checked:!F&&cn,$partial:!F&&ln,"aria-label":I(cn?`select_none`:`select_all`),disabled:F,onClick:e=>{e.stopPropagation(),un()},title:I(cn?`select_none`:`select_all`),type:`button`,children:cn?(0,Q.jsx)(Bt,{size:10}):ln?(0,Q.jsx)(Ec,{}):null}),(0,Q.jsx)(`span`,{children:I(cn?`select_none`:`select_all`)})]}),t&&!e?(0,Q.jsx)(Wc,{$size:a.gridSize,children:(0,Q.jsx)(hc,{size:a.gridSize})}):(0,Q.jsx)(_c,{counts:e?.counts,currentPath:wt?i.currentPath:null,groups:Xt,gridSize:a.gridSize,innerRef:Ae,onContextMenu:Tn,onOpen:f,onOpenFile:p,onRenameCancel:W,onRenameChange:Nn,onRenameCommit:G,onSelect:mn,onToggle:gn,onTogglePaths:F?void 0:dn,openOnSingleClick:y,renaming:ut,searching:wt,selected:R,showCheckboxes:_,showTarget:Et}),!t&&e&&H.length===0&&(0,Q.jsx)(fl,{children:(0,Q.jsx)(ml,{children:r??(wt&&i.mode===`hide`?I(`no_entries_match_the_search`):I(`this_folder_is_empty`))})}),P]}),B&&(0,Q.jsx)(ui,{canPaste:_t,directory:fn,platform:O,allowCompression:!0,menu:B,onAddToTray:te,onAddFavorite:ne,onRemoveFavorite:re,favoritePaths:k,onExtractArchive:ie,onOpenAsArchive:A,onAddToStartMenu:j,onArchiveCreated:Dn,onClose:vn,onCompressTo:(e,t)=>ot({paths:e,name:t}),onCopy:kn,onCreateFile:e=>void jn(e),onCreateFolder:e=>void jn(null,e),onDelete:Pn,onOpen:f,onOpenFile:p,onPaste:An,onRefresh:En,onRename:e=>{let t=H.find(t=>t.entry.fullPath===e)?.entry;t&&Mn(t)},shortcuts:x,target:Jn}),On,Bn]}),Zn]}):(0,Q.jsxs)(Ac,{onPointerDown:N,children:[(0,Q.jsxs)(jc,{children:[(0,Q.jsxs)(Mc,{onScroll:e=>{Pe.current&&Pe.current.scrollLeft!==e.currentTarget.scrollLeft&&(Pe.current.scrollLeft=e.currentTarget.scrollLeft)},ref:Ne,style:{gridTemplateColumns:Ot},children:[(0,Q.jsxs)(Sc,{ref:At,children:[_&&(0,Q.jsx)(Tc,{$checked:!F&&cn,$partial:!F&&ln,"aria-label":I(cn?`select_none`:`select_all`),disabled:F,onClick:e=>{e.stopPropagation(),un()},title:I(cn?`select_none`:`select_all`),type:`button`,children:cn?(0,Q.jsx)(Bt,{size:10}):ln?(0,Q.jsx)(Ec,{}):null}),(0,Q.jsxs)(Nc,{onClick:()=>l(`name`),type:`button`,children:[I(`name`),Qs(a,`name`)]}),(0,Q.jsx)(wc,{"aria-label":I(`resize_column`),onDoubleClick:()=>Tt[0]&&Pt(Tt[0].id),onPointerDown:Mt,role:`separator`})]}),Tt.map((e,t)=>(0,Q.jsxs)(Cc,{children:[(0,Q.jsxs)(Nc,{onClick:()=>l(e.id),type:`button`,children:[I(e.label),Qs(a,e.id)]}),t<Tt.length-1&&(0,Q.jsx)(wc,{"aria-label":I(`resize_column`),onDoubleClick:()=>Pt(e.id),onPointerDown:e=>Nt(e,t),role:`separator`})]},e.id))]}),(0,Q.jsxs)(Pc,{onClick:e=>{e.target===e.currentTarget&&_n()},onContextMenu:e=>Tn(e),onDragOver:Cn,onDragStart:Sn,onDrop:wn,onScroll:e=>{let t=e.currentTarget;Ne.current&&Ne.current.scrollLeft!==t.scrollLeft&&(Ne.current.scrollLeft=t.scrollLeft),Le.current=t,Ie.current===0&&(Ie.current=requestAnimationFrame(()=>{Ie.current=0;let e=Le.current;e&&Ve(t=>t.top===e.scrollTop&&t.height===e.clientHeight?t:{top:e.scrollTop,height:e.clientHeight})}))},ref:Pe,children:[t&&!e?(0,Q.jsx)(mc,{template:Ot,columns:Tt.length}):(0,Q.jsxs)(Q.Fragment,{children:[zt>0&&(0,Q.jsx)(`div`,{style:{height:zt*Rt}}),Ht.map(t=>{let n=t.entry.fullPath;return(0,Q.jsx)(yc,{current:wt&&n===i.currentPath,dim:wt&&t.ranges===null,height:Rt,iconSize:a.iconSize,innerRef:Ae,folderSizes:e.folderSizes,counts:e.counts,tagColors:e.tagColors,onContextMenu:Tn,onOpen:yn,onRenameCancel:W,onRenameChange:Nn,onRenameCommit:G,onSelect:mn,onTagEdit:bn,onToggle:gn,openOnSingleClick:y,renaming:ut?.path===n?{value:ut.value}:null,row:t,selected:R.has(n),showCheckboxes:_,showTarget:Et,template:Ot,visible:Tt},n)}),Vt<H.length&&(0,Q.jsx)(`div`,{style:{height:(H.length-Vt)*Rt}})]}),!t&&e&&H.length===0&&(0,Q.jsx)(pl,{children:(0,Q.jsx)(ml,{children:r??(wt&&i.mode===`hide`?I(`no_entries_match_the_search`):I(`this_folder_is_empty`))})})]}),o&&Zt.length>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Fc,{onDoubleClick:Ct,onPointerDown:bt,onPointerMove:xt,onPointerUp:St,title:I(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(Ic,{onPointerEnter:()=>{Ue.current=!0},onPointerLeave:()=>{Ue.current=!1},style:{height:Xe},children:[(0,Q.jsxs)(Lc,{children:[_&&!F&&tn.length>0&&(0,Q.jsx)(Tc,{$checked:rn,$partial:an,"aria-label":I(rn?`select_none`:`select_all`),disabled:F,onClick:e=>{e.stopPropagation(),dn(tn,!rn)},title:I(rn?`select_none`:`select_all`),type:`button`,children:rn?(0,Q.jsx)(Bt,{size:10}):an?(0,Q.jsx)(Ec,{}):null}),I(`preview`),(0,Q.jsx)(Rc,{children:Qt>Bs?`${$t.length} / ${Qt}`:Qt})]}),(0,Q.jsx)(zc,{ref:qe,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||_n()},onContextMenu:e=>Tn(e),children:(0,Q.jsx)(_c,{counts:e?.counts,currentPath:wt?i.currentPath:null,groups:en,gridSize:a.gridSize,onContextMenu:Tn,onOpen:f,onOpenFile:p,onSelect:hn,onToggle:gn,onTogglePaths:F?void 0:dn,openOnSingleClick:y,searching:wt,selected:R,showCheckboxes:_,showTarget:Et})})]})]}),Je&&e&&(0,Q.jsx)(Ao,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>u?.(Je.entry.name,e,t),onClose:()=>Ye(null),tags:e.tags[Je.entry.name]??[],x:Je.x,y:Je.y}),B&&(0,Q.jsx)(ui,{canPaste:_t,directory:fn,platform:O,allowCompression:!0,menu:B,onAddToTray:te,onAddFavorite:ne,onRemoveFavorite:re,favoritePaths:k,onExtractArchive:ie,onOpenAsArchive:A,onAddToStartMenu:j,onArchiveCreated:Dn,onClose:vn,onCompressTo:(e,t)=>ot({paths:e,name:t}),onCopy:kn,onCreateFile:e=>void jn(e),onCreateFolder:e=>void jn(null,e),onDelete:Pn,onOpen:f,onOpenExternally:g,onOpenFile:p,onSelectEntry:m,onPaste:An,onRefresh:En,onRename:e=>{let t=H.find(t=>t.entry.fullPath===e)?.entry;t&&Mn(t)},shortcuts:x,target:Jn}),On,Bn]}),Zn]})}function Qs(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}function $s(e,t,n){let r=n===`up`||n===`down`,i=n===`down`||n===`right`?1:-1,a=e=>r?{ahead:e.top+e.height/2,apart:e.left+e.width/2}:{ahead:e.left+e.width/2,apart:e.top+e.height/2},o=a(t),s=null,c=1/0;for(let t of e){let{ahead:e,apart:n}=a(t.getBoundingClientRect()),r=(e-o.ahead)*i;if(r<=1)continue;let l=r+Math.abs(n-o.apart)*4;l<c&&(c=l,s=t)}return s}var ec=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function tc(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Zr(e.name,e.isDirectory,e.linkTarget,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:ec.compare(String(r),String(i));return t.sortDescending?-o:o})}var nc=Lr.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Rr(t.entry.name)===e})),rc=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...nc.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function ic(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function ac(e){return Math.max(24,Math.min(e-56,160))}function oc(e,t,n,r,i){switch(e){case`type`:return Zr(t.name,t.isDirectory,t.linkTarget,i);case`size`:return fc(t,n);case`modified`:return d(t.modified);case`created`:return d(t.created);case`items`:return t.isDirectory?r[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:i(`broken`);default:return``}}function sc({name:e,ranges:t}){if(!t||t.length===0)return(0,Q.jsx)(Q.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,Q.jsx)(dl,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,Q.jsx)(Q.Fragment,{children:n})}var cc=new WeakMap,lc=null;function uc(e,t,n){return lc??=new IntersectionObserver(e=>{for(let t of e){if(!t.isIntersecting)continue;let e=cc.get(t.target);cc.delete(t.target),lc?.unobserve(t.target),e?.()}},{rootMargin:n}),cc.set(e,t),lc.observe(e),()=>{cc.delete(e),lc?.unobserve(e)}}function dc(e){return[...new Set((e??[]).map(e=>e.name))].join(`, `)}function fc(e,t){if(!e.isDirectory)return h(e.size);let n=t[e.name];return n===void 0?`—`:h(n)}function pc({entry:e,size:t=18}){let n=M(),r=(0,U.useRef)(null),[i,a]=(0,U.useState)(!1);(0,U.useEffect)(()=>{if(i)return;let e=r.current;if(e){if(!(`IntersectionObserver`in window))a(!0);else return uc(e,()=>a(!0),`250px`)}},[i]);let o=N(i?e.fullPath:null,e.isDirectory,t>32),s=e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null,c=de(s);return(0,Q.jsxs)(bc,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,Q.jsx)(Yr,{name:e.iconSource.slice(5),size:t}):c?(0,Q.jsx)(`img`,{alt:``,height:t,src:c,width:t}):o?(0,Q.jsx)(`img`,{alt:``,height:t,src:o,width:t}):e.isDirectory?(0,Q.jsx)(St,{size:t}):(0,Q.jsx)(Yr,{name:Jr(e.name),size:t}),e.isEncrypted&&(0,Q.jsx)(xc,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,Q.jsx)(bt,{size:Math.max(8,Math.round(t*.52))})})]})}function mc({template:e,columns:t}){return(0,Q.jsx)(Q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,Q.jsxs)(Gc,{style:{gridTemplateColumns:e},children:[(0,Q.jsxs)(Jc,{children:[(0,Q.jsx)(Kc,{style:{flexShrink:0,height:18,width:18}}),(0,Q.jsx)(Kc,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,Q.jsx)(Kc,{style:{width:t%2==0?44:92}},t))]},r))})}function hc({size:e}){return(0,Q.jsx)(Q.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,Q.jsxs)(al,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,Q.jsx)(ol,{children:(0,Q.jsx)(Kc,{style:{height:e,width:e}})}),(0,Q.jsx)(cl,{children:(0,Q.jsx)(Kc,{style:{height:9,width:`${t}%`}})})]},n))})}var gc=(0,U.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onRenameChange:d,onRenameCommit:f,onRenameCancel:p,onSelect:m,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=M(),x=Ur(),S=!e.entry.isDirectory&&zr(e.entry.name),C=(0,U.useRef)(null),[w,ee]=(0,U.useState)(!1);(0,U.useEffect)(()=>{if(!S||w)return;let e=C.current;if(e){if(!(`IntersectionObserver`in window))ee(!0);else return uc(e,()=>ee(!0),`300px`)}},[S,w]);let T=se(S&&w?e.entry.fullPath:null,192,e.entry.modified),[E,D]=(0,U.useState)(!1),te=S&&T!==null&&!E,O=e.entry.fullPath,ne=t=>{e.entry.isDirectory?v(O,jr(t)):y?.(O,jr(t))};return(0,Q.jsxs)(al,{$current:t,$dim:n,$image:te,$selected:s,onClick:e=>{m(e,O),l&&ne(e)},onContextMenu:e=>_(e,O),onDoubleClick:e=>{l||ne(e)},ref:e=>{C.current=e,t&&o&&(o.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":O,draggable:!u,children:[c&&(0,Q.jsx)(kc,{$checked:s,onClick:e=>{e.stopPropagation(),g(O)},onDoubleClick:e=>e.stopPropagation(),title:b(s?`deselect`:`select`),type:`button`,children:s&&(0,Q.jsx)(Bt,{size:10})}),(0,Q.jsx)(ol,{children:te?(0,Q.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>D(!0),src:T}):(0,Q.jsx)(sl,{children:e.place&&x.useIcons?(0,Q.jsx)(Ba,{place:e.place,size:r}):(0,Q.jsx)(pc,{entry:e.entry,size:r})})}),(0,Q.jsxs)(cl,{children:[u?(0,Q.jsx)(vc,{onCancel:()=>p?.(),onChange:e=>d?.(e),onCommit:()=>f?.(),value:u.value}):(0,Q.jsx)(ll,{$broken:e.entry.linkValid===!1,children:(0,Q.jsx)(sc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,Q.jsxs)(Xc,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Q.jsx)(bt,{size:9}),b(`encrypted`)]}),e.cut&&(0,Q.jsxs)(Zc,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,Q.jsx)(Lt,{size:9}),b(`cut`)]}),(0,Q.jsx)(ul,{children:e.entry.isDirectory?i===void 0?Zr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b):b(`type_count_items`,{type:Zr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b),count:i}):b(`type_size`,{type:Zr(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,b),size:h(e.entry.size)})}),a&&e.entry.linkTarget&&(0,Q.jsxs)($c,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,Q.jsx)(At,{size:9}),(0,Q.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function _c({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:a,innerRef:o,selected:s,showCheckboxes:c,openOnSingleClick:l,renaming:u,onSelect:d,onToggle:f,onTogglePaths:p,onContextMenu:m,onOpen:h,onOpenFile:g,onRenameChange:_,onRenameCommit:v,onRenameCancel:y}){let b=M();return(0,Q.jsx)(Q.Fragment,{children:e.map(e=>{let x=e.rows.map(e=>e.entry.fullPath),S=x.filter(e=>s.has(e)).length,C=x.length>0&&S===x.length,w=S>0&&!C;return(0,Q.jsxs)(Bc,{children:[(0,Q.jsxs)(Vc,{children:[c&&p&&x.length>0&&(0,Q.jsx)(Tc,{$checked:C,$partial:w,"aria-label":b(C?`select_none`:`select_all`),onClick:e=>{e.stopPropagation(),p(x,!C)},title:b(C?`select_none`:`select_all`),type:`button`,children:C?(0,Q.jsx)(Bt,{size:10}):w?(0,Q.jsx)(Ec,{}):null}),b(e.label),(0,Q.jsx)(Hc,{children:e.rows.length}),(0,Q.jsx)(Uc,{})]}),(0,Q.jsx)(Wc,{$size:t,children:e.rows.map(e=>(0,Q.jsx)(gc,{current:i&&e.entry.fullPath===a,dim:i&&e.ranges===null,iconSize:ac(t),innerRef:o,itemCount:n?.[e.entry.name],onContextMenu:m,onOpen:h,onOpenFile:g,onSelect:d,onToggle:f,openOnSingleClick:l,onRenameCancel:y,onRenameChange:_,onRenameCommit:v,renaming:u?.path===e.entry.fullPath?u:null,row:e,selected:s.has(e.entry.fullPath),showCheckboxes:c,showTarget:r},e.entry.fullPath))})]},e.id)})})}function vc({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,U.useRef)(null);return(0,U.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,Q.jsx)(Qc,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var yc=(0,U.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:a,openOnSingleClick:o,iconSize:s,height:c,template:l,visible:u,folderSizes:d,counts:f,tagColors:p,innerRef:m,renaming:h,onSelect:g,onToggle:_,onContextMenu:v,onOpen:y,onTagEdit:b,onRenameChange:x,onRenameCommit:S,onRenameCancel:C}){let w=M(),ee=Ur(),T=e.entry.fullPath;return(0,Q.jsxs)(qc,{$current:t,$dim:n,$height:c,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{g(t,T),o&&y(e.entry,t)},onContextMenu:e=>v(e,T),onDoubleClick:t=>{o||y(e.entry,t)},ref:t?m:void 0,style:{gridTemplateColumns:l},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":T,draggable:!h,children:[(0,Q.jsxs)(Jc,{children:[i&&(0,Q.jsx)(Oc,{$checked:r,onClick:e=>{e.stopPropagation(),_(T)},onDoubleClick:e=>e.stopPropagation(),title:w(r?`deselect`:`select`),type:`button`,children:r&&(0,Q.jsx)(Bt,{size:10})}),e.place&&ee.useIcons?(0,Q.jsx)(bc,{children:(0,Q.jsx)(Ba,{place:e.place,size:s})}):(0,Q.jsx)(pc,{entry:e.entry,size:s}),h?(0,Q.jsx)(vc,{onCancel:C,onChange:x,onCommit:S,value:h.value}):(0,Q.jsx)(Yc,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,Q.jsx)(sc,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,Q.jsxs)(Xc,{title:w(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Q.jsx)(bt,{size:9}),w(`encrypted`)]}),e.cut&&(0,Q.jsxs)(Zc,{title:w(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,Q.jsx)(Lt,{size:9}),w(`cut`)]}),a&&e.entry.linkTarget&&(0,Q.jsxs)($c,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,Q.jsx)(At,{size:9}),(0,Q.jsx)(`span`,{children:e.entry.linkTarget})]})]}),u.map(t=>(0,Q.jsx)(el,{children:t.id===`tags`?(0,Q.jsx)(tl,{onClick:t=>{t.stopPropagation(),b(e.entry,t.clientX,t.clientY)},title:w(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=p?.[e]??`#64748b`;return(0,Q.jsx)(nl,{$color:t,$ink:ko(t),children:e},e)}):(0,Q.jsx)(rl,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,Q.jsx)(il,{children:w(`broken`)}):t.id===`modified`?(0,Q.jsx)(ot,{value:e.entry.modified}):t.id===`created`?(0,Q.jsx)(ot,{value:e.entry.created}):oc(t.id,e.entry,d,f,w)},t.id))]})}),bc=w.span`
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
`,xc=w.span`
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
`,Sc=w.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,Cc=w.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,wc=w.span`
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
`,Tc=w.button`
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
`,Ec=w.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Dc=w.div`
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
`,Oc=w.button`
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
`,kc=w(Oc)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Ac=w.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,jc=w.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Mc=w.div`
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
`,Nc=w.button`
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
`,Pc=w.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Fc=w.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Ic=w.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Lc=w.div`
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
`,Rc=w.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,zc=w.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Bc=w.section`
    & + & {
        margin-top: 22px;
    }
`,Vc=w.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Hc=w.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Uc=w.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Wc=w.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Gc=w.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Kc=w.span`
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
`,qc=w.div`
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
`,Jc=w.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Yc=w.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xc=w.span`
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
`,Zc=w.span`
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
`,Qc=w.input`
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
`,$c=w.span`
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
`,el=w.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,tl=w.button`
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
`,nl=w.span`
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
`,rl=w.span`
    color: var(--text-muted);
    font-size: 11px;
`,il=w.span`
    color: #fca5a5;
`,al=w.div`
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
`,ol=w.div`
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
`,sl=w.span`
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
`,cl=w.div`
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
`,ll=w.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,ul=w.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,dl=w.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,fl=w.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,pl=w.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,ml=w.p`
    font-size: 13px;
    color: var(--text-muted);
`,hl=w.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`,gl={home:`overview`,settings:`settings`,recycle:`recycle_bin`,gallery:`gallery`},_l=`yafm://`,vl={overview:`home`,home:`home`,settings:`settings`,recycle:`recycle`,gallery:`gallery`};function yl(e){let t=e.toLowerCase();return t.startsWith(`yafm://`)&&!t.startsWith(`yafm://share/`)}function bl(e){return`${_l}${e===`home`?`overview`:e}`}function xl(e){return yl(e)?vl[e.slice(7).replace(/\/+$/,``).toLowerCase()]??null:null}function Sl(e){let t=e.trim();if(t.length===0)return null;if(!yl(t))return t;let n=vl[t.slice(7).replace(/\/+$/,``).toLowerCase()];return n?bl(n):null}function Cl({location:e,size:t=13}){switch(xl(e)){case`home`:return(0,Q.jsx)(V,{size:t});case`settings`:return(0,Q.jsx)(ht,{size:t});case`recycle`:return(0,Q.jsx)(yn,{size:t});case`gallery`:return(0,Q.jsx)(St,{size:t});default:return y(e)?(0,Q.jsx)(nn,{size:t}):(0,Q.jsx)(St,{size:t})}}function wl(e){let t=e.replace(/[\\/]+$/,``),n=Math.max(t.lastIndexOf(`\\`),t.lastIndexOf(`/`));return n>=0?t.slice(n+1):t}function Tl(){let e=M();return t=>{let n=xl(t);return n?e(gl[n]):wl(t)}}var El=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBwUBAQEBAQEAAAAAAAAAAAAAAAEAAgMEEAEBAQEBAAAAAAAAAAAAAAAAERIBAhEBAQEBAQAAAAAAAAAAAAAAABEBEgL/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwDxxAmHhQpIJITECETAAiMajJRgw0UFLBNBhZpRNDQikijSDCKzgxpBiFZzqjSDCKygxpBiVZRRrFCqygRrFEayyEaxQqsYEbQsLVZQI2hYDWcUaQsTWaRGgQEqFRNAAoEqFAgkgUkkSChc2QFCoAEYMLNCDDc4MLNKMPDZI3SQY05w0LNZw3PJ4bnlM1nk2WmTZLNZQctsjlM1lkctcjlDpllZbZHKFYZHLbKiVY5WW2VkqschlvAiNYZCOiFyl0wyEb5DLTWawhY6Ml75TVYd4WN8liarCBG0L3garKBGkCJus4DSFiawiMoCQDRBoqGAEhNBjLFLBhoaJndJDQ8NzyWaSG55PzybnlM7pIaNMmymKzybnlrzybJZ3WfPJueWnPIxMVnk0aQYhus4aNIomaTI5PBiFJFDxRKkijSKIVnFGkUKrOKNIojWWQy2gRGschltAiNY5LlvAharn75LHRCxNZrn7wuXRC98lrPTm7wsdHfJe+U3mufvAjbvkIm6wgRtC94m6ygNIEDVZwIeBAaaGh4fnGHGs4bLTJueUzus8n55ac8mymN1nzyfnk/OGhZ3Sc8mjSGgZ3WcNzh4MLFLBhkgEGIUAFVUhCWqpGRaFKh0SjUoZEo1IyLVUTIKqkICkggQyRZwI1CIse8LG3eBFWqwyXvl0QsLVc/fJO+XT3yTvlN5rn75LHR3hcpuueFjfvkvfKarDvCxvCwN5rXJ8tOeTZc3nrPnk3PLTnDQs0mTQ0NEzSwYaCmSwySCSKUZEqpUNVSUvelRpQrPQaMXLWhWWg0oY10tMdBoxRvpaYaWlDy30tMNLSi5b6GsNDpRct6qw0PPQXLejWGjaQjajWOjaSjREo0A4BRBCBDJFnAjQIqc1lC5bQIms1z98ly6IWKt5rn75Ll0d4XIrWa2gw0FlwpYIiQCSqgEAoUwmoUnel70qH0Gmfel71qGNNF0z0XRh5a6L30y0Xvow8ttF0y0XTUMbaDTHS0oeWug0y0FMPLbS0x0qoY20tMNLSgjfRtOfQ6EUb6HTDS0ouXRo3PTm0bnoQcunRuenNo2hBy6NG059G0II6NGrn0aiCN6NY6NpkRoiU1CgqAIIFhwCJ3gRoCaooKqYwIUtLWooelpKHemGG70tJ3pa1DGmid6TvSUwxp30XTOlrUajTvovekpe9Mah6FZ0KYYehSUKTD0KShTDGlLSVBQ9VZ1VGNKqzqqUaUayqqUa0ayqoUbaNphRoXLfno2nPRoZjp0bnpzaNpDl089G05tG56Zg5dXPRuenLz0fnpkcunRq5+ejaEZjoo1hz0bnWRG1FlTVkQ6LRBhKWkpa7ZijSlpO9LWoYbvS96Wl71rMMNS0tLTGoaloUtMMHvS1FMMGhQAtQQRSlUgTS6CSQJIIEkikCSFAgoKBIwRpUFD0azGoRpRrKjQo2puemFGgR0c9G56c/OmoHLo56Pz05tG56ZjPLp56Pz05uejc9MwcunRtObno+hBy6OehrDno2mYzCUKWlr0Qw1LQBqGCAATEAgSHQSJgAKiRUKSKoaJEgQ8SVJAh4okzR4oCQDxRIgHgREoGiiJQMgioUCCSSQggRo0qCPRrMyEaUedZUaFG3On056asxmN9H56c9NoCOjno2nPz0NA5aoE9DIIUjAQgUCGJIAhkUWKGSRIoeIAkA8USIEaBEiRQ8CIkih4okzgRpAiNJAjSBEqzih4ojWcCNIEBZxQ8CAkA8BEoHgQEqGKBAhAEUCCNRpUEejSJCNaNZCFHckndySQlAkkkkkAQpAEKSBCkgQpAAMkioUiAGSBUYESwIdJEgQ6BZRRpAiLOBGkCAs4EaBAWcUaQIDWcCNIERZo8CAkiPABKjRQIooQgQgi+ikndwSQJCCRSSBIUCQggqFSgoFUIKCqpCgqSESpIUkkkkggSCSEAUBgSCBDIGlhY0AEkCNEDWUCNIERpIEPFBSzgRpFAWcCNIESpIoeKAs0eBEXYgoV3chRaFShwpaFKhlSVVKHqpKFSh6FLVUoaqkqqUPVSKoQ9Gs6NSh6qSqpRpVWdGpQ4s6qBGiJRoUMi0aAKBJGQIJJCCEQgCgFBFihkiSKHAEkCNEkzgRpFAWcUPFERoVFegDQQdSGhQRSqoJIaFBJDUCSVVBJDVQSA1UEENGlFIUkgNQCEI0qSNRpRCMNBBDRKI0CkABkkEKBBCkkgFIHEAgikkCkkU//2Q==`,Dl=`/assets/bloom-BpfZWiaG.mp4`,Ol=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFwAAAMBAQEBAAAAAAAAAAAAAAECAAMEBQcBAQEBAQEAAAAAAAAAAAAAAAABAgMEEAEBAQEBAQAAAAAAAAAAAAAAEQESAkERAQEBAQAAAAAAAAAAAAAAAAARAUH/wAARCADYAYADASIAAhEAAxEA/9oADAMBAAIRAxEAPwD4lUhdHABSWIkk1ESQtZiJCmsxAEYMaiAoaGjUQhoaGjUQkGHg8tRGcGNOR5WIzijXkeViVjBjXkeVhWMGNeVCFYxRryuVisYo15DcIrFRrCxFJAjSFgpEeFiRQA0SRSoQZjSSSaqAUy0GCkipAkVkhTjGEkLUQBEY1EBQ0GNRCw0NDRrMZJDQ+YbPLUQkND55Ny1mMs+TctOT8tRGXI8teTcrEY8m5a8jyqMeR5bcjyQY8rltyPKjDlct+VysGHIcujkOQc/Icujku+RXPyEdHIckVzwsdELyiueBG+4XfJGmMCNYG4kXGUA8CMxrCAeBGdxoqFMxQAQZaBDFEVmIwY5xzCDmGhsxqISGzDQ2Y3mMlhobk/K5iEhs8tOT55bzEZZ5Pnlrnk3Kxlnyblpnk3Koz5Ny0hooz5HMaQYqE5XLSCozgw6EJFDpSEih0BIuTqCs+Q5ahFVlyHLaBAYcl5dELuCufkm+XTyXfKDm5LuOnfJN8jTm5LHRyTfKNMIEbb5LuMxWMBruBGdxqskcIzuNYRGgMbjSg5h4bPKRyJD55Pnk+eWoyzzybPLXPJs8tZiM88nzy0zybPK5iEzybPLTPJs8qhM8m5PBioXkYYWgoiiIkCqgotVUMiVVQ6J0qBxrOqg0qZ0aB0WqimBUQUCCgLCxoERWW4TlvAgrn3yTfLphd8iuXcLy6d8l3yzxXNvkkdO4TlNaxz8ljeF3yyrCBG24WM61jXk3LXkc8o5M88n5aZ5NGkJnk2eWmeTRQmYbMNBVCwRSokFDdUMiUvSjSlrPou+lRrQ6ZdF6UbdB0x6DoG/QdMOl0o26XTDoegjboenP0PQRv0PTn6HoI6Oh6c/RugdFGufo3QN6NYZ6P0K1FlRrKtEWjRVAhgQJCb5bQEVhvkvLeByiubfJN8unkm+UXHPvkm46eS8o1jaGhoaI5kh4hVAFBVBAtLWoh6FZ7pd9LBpvom+ib6JvpRr0TfTPfROlRrvovTLfRd9BG3RemNDpVjXpdMaFCNug6ZdBQjbpdMaqLG3S6Y1UI36XTCjTdI6Oh6c/Q9FHR0bPTn6HPQR056P05c9Gz0EdWejZ6c2ejdIOrNGufPRs9IropmGejVBqiUzKiEQopYEOCDLfJeW8LEaFAFajmYN0tJvpqDSk30TfRN9LBp0TpnvovSxGm+idM90taGm+ib6Z0tFadFrOhQh99FpKqENQpKqLD0KRVCGoUtVCGqpFRYeqkqCNKqRUI0qrOjUI16GsaNKRt0bPTCjmhHRno2enPTUI6c9Hz05c9Gz0hHXno+enJno+ekHX0bPTlz0fPSDppq5s9Hz0it6LGm6QaIlGsqy30XpnQ6d4wfou6z6LurA++ib6JS7qhqXdLS1SGpaBRYNLUAQaWoBYgSCAkkAQgKgEEEkkEgQCgQCgSVYKoJCGo0iKRpRrOjSkbUc1jRqUjo6HPTCmpUjoz0fPTmz0bPSEdWej56cuejZ6Qjrz0bPTlz0bPSDqz0frHLno3SDKl3S7pXpSGpaBVINBAqwAEAiAUBQMoBQh4oikgQ8UBnFGkCAQGkLEQoHigpIB0BEYGQqMEAEMBFSSZEkkVJIBVBIGo0glGlHNZUag3o1jRzSkdGejZ6c9NUHTno3Tm6NRIZJPUAhBQAMghUeKCwiPFBISKNIECEih4ogSBGkUUZxQ8UBnFGkCAzijSBEGcCNYEBlAjWBEGcCNIEQZwI0gIEA8CMhEeBEUqFMgJJFSSQSSSrBGlQQ9GkFKRpRrOqg7YMMnsIWKHQQkGGQQsUMoEKJgCAhSgBDIQsUMgLFDIQkUMhSRQ4QQkCNIEQZwI1gQGUUaQIgzgRpAjIygRrAiDKKNIEZGcBpAiKzUOEQJAaQIypEYIighSKApIJJIPURge0gJIEklEgVAUACGRaqqGRaqBgCoQUCAUCAUCQSSQSSAAhkhCwIcEISBDxIsZwsawIiM4EaQIis4EaQIyM4WNYEQZwI1gRlWcBpAiKQI0iiDOI8UFegiqvYCi0KIZUtCqHoUlCiHqZ1UQ9VZ1URpVWdGgeqkoUGlVZ1UGlGs6qDSolVBoqSqoNESqoHRaqimRaKApJAEKRSxQUgSKHSDOBGkCMqzijSBEGcCNIoKzgRpFEGcCNIog0oVaHx60GhSoBoUErKqoAA0KgEGqglBqoJEGqggFVAA0aUQGqgIDVQTIZUEBqOFNgoiAsqKAUBQCioQFFSSQQCCKkkgEUFIpYoKAIEMCD//2Q==`,kl=`/assets/drift-BRBSQL2_.mp4`,Al=`data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD//gAPTGF2YzYzLjEuMTAyAP/bAEMACAgICQgJCwsLCwsLDQwNDQ0NDQ0NDQ0NDQ4ODhEREQ4ODg0NDg4QEBEREhMSERERERMTFBQUGBgXFxwcHSIiKf/EAFoAAAMBAQEAAAAAAAAAAAAAAAEAAgMEBwEBAQEBAQAAAAAAAAAAAAAAAAECAwQQAQEBAQEAAAAAAAAAAAAAAAARARICEQEBAQEAAAAAAAAAAAAAAAAAEQES/8AAEQgA2AGAAwEiAAIRAAMRAP/aAAwDAQACEQMRAD8A8aAl5HpJJVCSRkklQkjFQCIiAVQxQCMGIJGKgwRMMXDFqoFcCFElcMKIK4YogrhgICNIYKzgNIEVUFUKCSJFAiRQIgikkikQKKJARoklBmSWXMkiqAJEQCJVCVQwAGKgwImDFQYURFRcGBEQYuDEqxnBjWGFOWcPLWGFWM4Y0hi0jOBGsMSkZcmNoEWkZQI1hi05YwxrA5KRlAjWBFpGUCNIECMy0gQqsyqGCpIlFAkigJKKSSKgiKOaREYIkYqDAiYMVmKhSIioqKgREVFxWeUqxnFZi4qJSIgxcHMKsRBi4MKvKIMXDCrEQxYxKsRDFwwpEQxcMCIgRpDFpyyh5awIU5ZQI1gRacsoEbQItTlhuBG24EKkYwI2iItIyhjSJi0jOA0gQqxANIkEgoEUCJBIqgxliJioqKgREGNIMFiIrlcVmJSIzFRcVEa5ZxUXBiVYmDFCLEwqIsASQhJIEkikkiEQIowwKNAww0RQgRRBEMWARnAjSFanLKJjWBFqcsYEbRMWnLGBG0TCpGMCNYEEjKBGkCKM4DSBBRiovkYxUiMxUXmKhV5RFRcGIsTBi4KLEwYJFhJIEkFgJTQqxFGooUiVdNZ01YlaUKzppErSmsqasK1o1lTSFa01nTUi1rRrKjSLWtLOjUjVWKKNRVEKIpCDRRYjcCNElIzgRpAi1OWUTG0CFTlhExvExacsYEbRO4tSNIMXBjCxMGKgwaiRgwgAgRBAKFVBCp3QqxKtNRU1qMbq6FRU1YzWlCs+grUStKFZ00iVdNZ0KsStKazppCtKNZU0hW1HpjRpFrWjWNNSLW9VWHQ9JFreqrDpVZjea2o1jVVI1mtc1TLpVZjeasUUUaqgIoBAigSrEQI0gQpGXIRrAi1IoSQICFWIQChViCmhU7rUZ3VVNTQrWYxujuhUboVrMZqqmpoVYzRoVNTutRldCpBYiqFTSRBpqSQVTUEgumoIq6NZiIujWdGkWtKqsqakVtRrHNVUjWa26VWFVWY1mt6qsKrpncazW+aqsM1WazG81tmqrHNVWY3mtSijWY1mrIGs60SJRYmgAV1jnVVNTQ3WoxR3U7oVNazGd0aFTU1rMY3VVNCg1ENTukFjJApaINSICQgIKkICAEBASEkgSBASBASBQUakoLGoEVdVWVGo01qqxo5rMVtV5rDNVWdxqt80axzVVncbzW+aqsM1VZjea3qqwqs9M7jVbUWVVWY3mooVNCu8cRoUAajJAKGtIUiCpAJKpAASqRIKhCJBRUiQWAkSCiETDFQwSIhUARJVACJKiJEkSEAiCEJJCCaBQVRqSiqqqgorWjWY1mK1qqxqs1I1W1VWNGsxvNb5qqwzVZrMaqgEHaJCBKkSRBSARhVIkqCBABRCJKgUiSoiRJUQiIYqESIhiwUiIVhBIiBGkCIkRCuAEQVGBEFUCCRMKgQiSoiQCIIsJJQEQKKoagQXRqBZaaVVZDUV0kQdHWEkqQCJCASQiSoFIBJEJJEAiQAiAhJIARIAAkSBCJFiQiwgkTAiyJEQIuEIzCNIYiRmDSJgRJijAiQVChAJIkJJRSICgRAUV2AS29BJAQkKCoopIggFKpRACIJCmhRIUgJSRFECAkCFEgQEgRRAigBEAJIoJhgkIkIshEQI0AIiBFwxEiIDSGBGZi4YEQVwEIkqhiEdFCppdHSjQCmiUTU0FSqCppEqqaimiVVNTQqpV01FCiVdNRTQq6amhQrShU0iVdNRRFqqKKahV0UUi1ZSNQokKRaIgUUSBRRJIEkooQSSgQwSlEwxRCJhURYkxRCJpoF0ZIEqyaFICGhSVQCSIQJEJpBQaaBEEkBBICgRAgJARaNGpEXBopUijSAookBRRopFFwSSNEQFFwiA4ypIkAMEigRKKBEg/9k=`,jl=`/assets/ember-CtSz0YxR.mp4`,Ml=[{name:`blue`,accent:`#3b82f6`,secondary:`#6366f1`},{name:`indigo`,accent:`#6366f1`,secondary:`#8b5cf6`},{name:`violet`,accent:`#8b5cf6`,secondary:`#d946ef`},{name:`teal`,accent:`#14b8a6`,secondary:`#0ea5e9`},{name:`green`,accent:`#22c55e`,secondary:`#14b8a6`},{name:`amber`,accent:`#f59e0b`,secondary:`#f97316`},{name:`rose`,accent:`#f43f5e`,secondary:`#ec4899`},{name:`slate`,accent:`#64748b`,secondary:`#94a3b8`}],Nl=[{id:`aurora`,name:`aurora`},{id:`dunes`,name:`dunes`},{id:`tide`,name:`tide`}],Pl=[{id:`builtin:video:drift`,name:`drift`,url:kl,poster:Ol},{id:`builtin:video:ember`,name:`ember`,url:jl,poster:Al},{id:`builtin:video:bloom`,name:`bloom`,url:Dl,poster:El}],Fl=Nl.map(e=>({...e,variants:Ml.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Vl(Hl(e.id,t,!1)),lightUrl:Vl(Hl(e.id,t,!0))}))})),Il=[{id:`ridgeline`,name:`ridgeline`},{id:`skyline`,name:`skyline`},{id:`orbit`,name:`orbit`}].flatMap(e=>Ml.map(t=>({id:`builtin:${e.id}:${t.name.toLowerCase()}`,concept:e.name,preset:t.name,url:Vl(Ul(e.id,t,!1)),lightUrl:Vl(Ul(e.id,t,!0))}))),Ll=new Map([...Fl.flatMap(e=>e.variants),...Il].map(e=>[e.id,e])),Rl=new Map(Pl.map(e=>[e.id,e]));function zl(e,t=`dark`){if(Rl.has(e))return Rl.get(e).url;let n=Ll.get(e)??Ll.get(`builtin:${e.split(`:`)[1]??``}:indigo`);return n?t===`light`?n.lightUrl:n.url:null}function Bl(e){return Rl.has(e)}function Vl(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Hl(e,t,n){return e===`dunes`?Yl(t,n):e===`tide`?Xl(t,n):Jl(t,n)}function Ul(e,t,n){return e===`skyline`?Gl(t,n):e===`orbit`?Kl(t,n):Wl(t,n)}function Wl({accent:e,secondary:t},n){let r=$(t,n?`#e8eefc`:`#05070f`,n?.9:.86),i=$(e,n?`#f6f8ff`:`#0b1020`,n?.84:.72),a=$(t,n?`#dbe3f0`:`#0a0f1d`,n?.55:.66),o=$(e,n?`#c3cfdf`:`#060a14`,n?.6:.74),s=n?`#e9eefb`:`#05070d`,c=$(e,n?`#a9b8cc`:`#03050a`,n?.62:.9);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    </svg>`}function Gl({accent:e,secondary:t},n){let r=$(t,n?`#e9eefc`:`#07040d`,n?.9:.84),i=$(e,n?`#f4f6ff`:`#100716`,n?.82:.7),a=$(e,n?`#b7c4d6`:`#08050e`,n?.7:.82),o=$(t,n?`#c9d3e2`:`#0b0613`,n?.66:.78),s=[[60,560,110],[190,470,90],[300,620,130],[450,390,100],[570,510,120],[710,330,110],[840,580,150],[1010,450,90],[1120,360,120],[1260,540,110],[1390,420,100],[1510,590,150],[1680,460,120],[1820,520,100]].map(([t,n,r],i)=>`<rect x="${t}" y="${n}" width="${r}" height="${1080-n}" fill="${i%2?a:o}" opacity="0.92"/>`+Array.from({length:5},(a,o)=>`<rect x="${t+14}" y="${n+24+o*34}" width="${Math.max(8,r-28)}" height="9" fill="${e}" opacity="${.16+i%3*.05}"/>`).join(``)).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    </svg>`}function Kl({accent:e,secondary:t},n){let r=$(e,n?`#eef3ff`:`#03050d`,n?.88:.9),i=$(t,n?`#f8faff`:`#05030c`,n?.9:.94),a=$(t,e,.35),o=Array.from({length:90},(e,t)=>`<circle cx="${(t*197+83)%1920}" cy="${(t*311+149)%1080}" r="${t%9==0?2.4:1.2}" fill="${n?`#64748b`:`#ffffff`}" opacity="${.18+t%5*.08}"/>`).join(``);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
    </svg>`}function ql(e){let t=e.replace(`#`,``),n=t.length===3?t.split(``).map(e=>e+e).join(``):t;return[Number.parseInt(n.slice(0,2),16),Number.parseInt(n.slice(2,4),16),Number.parseInt(n.slice(4,6),16)]}function $(e,t,n){let[r,i,a]=ql(e),[o,s,c]=ql(t),l=(e,t)=>Math.round(e+(t-e)*n);return`#${[l(r,o),l(i,s),l(a,c)].map(e=>e.toString(16).padStart(2,`0`)).join(``)}`}function Jl({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
</svg>`}function Yl({accent:e,secondary:t},n){let r=$(t,n?`#fff4e2`:`#120a05`,n?.9:.84),i=$(t,n?`#fff8ee`:`#1c0f07`,n?.82:.7),a=$(e,t,.25),o=$(e,n?`#e2cdae`:`#160b04`,n?.5:.55),s=$(e,n?`#ecdcc2`:`#1a0d05`,n?.6:.7),c=$(e,n?`#d9c1a2`:`#0b0603`,n?.7:.82);return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
</svg>`}function Xl({accent:e,secondary:t},n){return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
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
</svg>`}var Zl=/\.(mp4|webm|mov|m4v|ogv|mkv|avi|wmv)$/i;function Ql(e){return Zl.test(e)}function $l({settings:e,theme:t}){let n=e?.backgroundSource??null,r=n?.startsWith(`url:`)?n.slice(4):c(n)?n:null,i=n?.startsWith(`file:`)?n.slice(5):null,a=be(i),o=n?.startsWith(`builtin:`)?zl(n,t):r??a,s=r===null?i===null?n!==null&&Bl(n):Ql(i):Ql(r.split(/[?#]/)[0]);if(!n||!o)return null;let l=`blur(${e?.backgroundBlur??rt().backgroundBlur}px) saturate(${e?.backgroundSaturation??rt().backgroundSaturation}%) brightness(${e?.backgroundBrightness??rt().backgroundBrightness}%)`;return(0,Q.jsxs)(eu,{"aria-hidden":!0,children:[s?(0,Q.jsx)(nu,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,src:o,style:{filter:l}}):(0,Q.jsx)(tu,{src:o,style:{filter:l}}),(0,Q.jsx)(ru,{})]})}var eu=w.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`,tu=w.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,nu=w.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.06);
`,ru=w.div`
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(var(--bg-rgb), 0.28), rgba(var(--bg-rgb), 0.5)),
    radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.08), transparent 60%);

    /* The light artwork is drawn pale already, so it only keeps a faint accent glow. */
    html[data-theme="light"] & {
        background: radial-gradient(1200px 700px at 20% 0%, rgba(var(--accent-secondary-rgb), 0.06), transparent 60%);
    }
`;function iu({action:e,hits:t,delaySeconds:n,permanent:r,onCancel:i,onConfirm:a}){let o=M(),s=(0,U.useRef)(null),[c,l]=(0,U.useState)(()=>Math.max(1,Math.ceil(n))),u=e??`delete`;return(0,U.useEffect)(()=>{s.current?.focus();let e=Date.now(),t=window.setInterval(()=>{let r=Math.max(0,Math.ceil(n-(Date.now()-e)/1e3));l(r),r===0&&window.clearInterval(t)},200),r=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,r,!0),()=>{window.clearInterval(t),window.removeEventListener(`keydown`,r,!0)}},[n,i]),(0,pi.createPortal)((0,Q.jsx)(cu,{onPointerDown:e=>{e.target===e.currentTarget&&i()},children:(0,Q.jsxs)(lu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsx)(uu,{children:o(`protected_folder`)}),(0,Q.jsx)(du,{children:o(`these_paths_are_protected_by_the_safety_settings`)}),(0,Q.jsx)(fu,{children:t.map(e=>(0,Q.jsxs)(pu,{children:[(0,Q.jsx)(mu,{children:e.path}),(0,Q.jsx)(hu,{children:o(`protected_by_pattern`,{pattern:e.pattern})})]},`${e.path}|${e.pattern}`))}),(0,Q.jsx)(gu,{children:au(o,u,r??!1)}),(0,Q.jsx)(_u,{children:ou(o,u)}),(0,Q.jsx)(vu,{children:o(`this_waits_seconds_s_before_the_button_works`,{seconds:n})}),(0,Q.jsxs)(yu,{children:[(0,Q.jsx)(bu,{onClick:i,ref:s,type:`button`,children:o(`cancel`)}),(0,Q.jsx)(xu,{disabled:c>0,onClick:a,type:`button`,children:c>0?su(o,u,c):su(o,u,0)})]})]})}),document.body)}function au(e,t,n){switch(t){case`delete`:return e(n?`deletes_permanently`:`moves_to_the_recycle_bin`);case`move`:return e(`moves_the_entries`);case`rename`:return e(`renames_the_entry`);case`write`:return e(`writes_into_this_folder`)}}function ou(e,t){switch(t){case`delete`:return e(`nothing_has_been_deleted`);case`move`:return e(`nothing_has_been_moved`);case`rename`:return e(`nothing_has_been_renamed`);case`write`:return e(`nothing_has_been_written`)}}function su(e,t,n){let r=n>0?t===`delete`?`delete_anyway_seconds_s`:t===`move`?`move_anyway_seconds_s`:t===`rename`?`rename_anyway_seconds_s`:`write_anyway_seconds_s`:t===`delete`?`delete_anyway`:t===`move`?`move_anyway`:t===`rename`?`rename_anyway`:`write_anyway`;return n>0?e(r,{seconds:n}):e(r)}var cu=w.div`
    position: fixed;
    inset: 0;
    z-index: 3500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${z}
`,lu=w.div`
    width: min(560px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${B}
`,uu=w.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,du=w.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,fu=w.div`
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
`,pu=w.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,mu=w.span`
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-mono);
    font-size: 11px;
`,hu=w.span`
    overflow-wrap: anywhere;
    color: var(--text-muted);
    font-size: 10px;
`,gu=w.span`
    display: inline-block;
    margin-bottom: 6px;
    padding: 2px 7px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
    color: var(--text-secondary);
    font-size: 10.5px;
`,_u=w.p`
    margin: 0 0 4px;
    color: #fca5a5;
    font-size: 12px;
    font-weight: 600;
`,vu=w.p`
    margin: 0 0 16px;
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,yu=w.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,bu=w.button`
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
`,xu=w.button`
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
`;function Su(){let e=M(),[t,n]=(0,U.useState)(null),r=(0,U.useRef)(null),i=(0,U.useRef)(null);(0,U.useEffect)(()=>(L(e=>new Promise(t=>{r.current=t,n(e)})),()=>L(null)),[]);let a=()=>{let e=r.current;r.current=null,n(null),e?.()};return(0,U.useEffect)(()=>{if(t===null)return;i.current?.focus();let e=e=>{(e.key===`Escape`||e.key===`Enter`)&&(e.preventDefault(),e.stopPropagation(),a())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[t]),t===null?null:(0,pi.createPortal)((0,Q.jsx)(Cu,{onPointerDown:e=>{e.target===e.currentTarget&&a()},children:(0,Q.jsxs)(wu,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsx)(Tu,{children:e(`notice`)}),(0,Q.jsx)(Eu,{children:t}),(0,Q.jsx)(Du,{children:(0,Q.jsx)(Ou,{onClick:a,ref:i,type:`button`,children:e(`ok`)})})]})}),document.body)}var Cu=w.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${z}
`,wu=w.div`
    width: min(440px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${B}
`,Tu=w.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Eu=w.p`
    margin: 0 0 18px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
`,Du=w.div`
    display: flex;
    justify-content: flex-end;
`,Ou=w.button`
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
`;function ku({value:e,onPick:t,onClose:n,allowDefault:r=!0}){let i=M(),a=(0,U.useRef)(null),o=(0,U.useRef)(null),[s,c]=(0,U.useState)(null);return(0,U.useLayoutEffect)(()=>{let e=a.current?.parentElement;if(!e)return;let t=e.getBoundingClientRect();c({top:t.bottom+6,left:t.left})},[]),(0,U.useLayoutEffect)(()=>{if(!s||!o.current)return;let e=o.current.getBoundingClientRect(),t=e.bottom>window.innerHeight-8?Math.max(8,s.top-e.height-12):s.top,n=e.right>window.innerWidth-8?Math.max(8,window.innerWidth-e.width-8):s.left;(t!==s.top||n!==s.left)&&c({top:t,left:n})},[s]),(0,U.useEffect)(()=>{if(!n)return;let e=e=>{e.target?.closest(`[data-icon-menu]`)||n()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,n),window.addEventListener(`resize`,n),document.addEventListener(`scroll`,n,!0),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,n),window.removeEventListener(`resize`,n),document.removeEventListener(`scroll`,n,!0)}},[n]),(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(`span`,{ref:a,style:{display:`none`}}),s&&(0,pi.createPortal)((0,Q.jsxs)(Au,{"data-icon-menu":`true`,onClick:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation(),ref:o,style:{position:`fixed`,top:s.top,left:s.left},children:[Object.keys(Fa).map(n=>(0,Q.jsx)(ju,{$active:e===n,onClick:()=>t(n),title:n,type:`button`,children:Fa[n](16)},n)),(0,Q.jsx)(ju,{onClick:async()=>{let e=await ei([`.png`,`.ico`,`.svg`,`.jpg`,`.jpeg`,`.webp`]);e&&t(`file:${e}`)},title:i(`choose_an_image`),type:`button`,children:(0,Q.jsx)(It,{size:13})}),r&&(0,Q.jsx)(ju,{$active:!e,onClick:()=>t(null),title:i(`default`),type:`button`,children:(0,Q.jsx)(Cn,{size:12})})]}),document.body)]})}var Au=w.div`
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
    ${et}
    transform-origin: top left;
`,ju=w.button`
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
`,Mu=[{bit:256,group:`owner`,action:`read`},{bit:128,group:`owner`,action:`write`},{bit:64,group:`owner`,action:`execute`},{bit:32,group:`group`,action:`read`},{bit:16,group:`group`,action:`write`},{bit:8,group:`group`,action:`execute`},{bit:4,group:`other`,action:`read`},{bit:2,group:`other`,action:`write`},{bit:1,group:`other`,action:`execute`}];function Nu({request:e}){let t=M(),n=(0,U.useRef)(null),r=e.items.length===1,i=e.canUseSystemSheet,[a,o]=(0,U.useState)(`general`),[s,c]=(0,U.useState)(e.items[0]),[l,u]=(0,U.useState)(s.name),[d,f]=(0,U.useState)(Wu(s,`ReadOnly`)),[p,m]=(0,U.useState)(Wu(s,`Hidden`)),[g,_]=(0,U.useState)(Wu(s,`Archive`)),[y,b]=(0,U.useState)(s.unixModeValue??0),[x,S]=(0,U.useState)(!1),[C,w]=(0,U.useState)(null),[ee,T]=(0,U.useState)(null),[E,D]=(0,U.useState)(!1),te=(0,U.useRef)(!1),[O,ne]=(0,U.useState)(null),[re,k]=(0,U.useState)(0),[ie,A]=(0,U.useState)(``),[j,ae]=(0,U.useState)([]),[oe,se]=(0,U.useState)({}),[ce,ue]=(0,U.useState)(!1),[de,fe]=(0,U.useState)(!1),[N,pe]=(0,U.useState)(!1),me=(0,U.useRef)(!1),P=r&&!s.error,he=r&&!s.directory&&!s.error,ge=P&&l.trim()!==s.name,_e=P&&i&&(d!==Wu(s,`ReadOnly`)||p!==Wu(s,`Hidden`)||!s.directory&&g!==Wu(s,`Archive`)),ve=P&&!i&&y!==(s.unixModeValue??0),ye=P&&!i&&(ve||ce&&s.directory),be=O!==null&&!zu(j,O.tags),xe=O!==null&&re!==O.rating,F=O!==null&&ie!==(O.comment??``),Se=O!==null&&!Bu(oe,O.colors),Ce=be||xe||F||Se,we=ge||_e||ye||Ce,Te=e=>{c(e),u(e.name),f(Wu(e,`ReadOnly`)),m(Wu(e,`Hidden`)),_(Wu(e,`Archive`)),b(e.unixModeValue??0)},Ee=async()=>{if(!we||x)return!0;S(!0),w(null);try{let e=s.path;if(ge){let n=await er(e,l.trim());if(!n.ok)return w(n.error??t(`could_not_rename_the_entry`)),!1;e=n.path??e}if(_e||ye){let n=await zn({path:e,readOnly:i?d:void 0,hidden:i?p:void 0,archive:i&&!s.directory?g:void 0,unixMode:i?void 0:y,recursive:!i&&s.directory?ce:void 0});if(!n.ok)return w(n.error??t(`could_not_change_the_properties`)),!1;n.info&&(Te(n.info),e=n.info.path)}if(Ce){if(!await q({path:e,tags:be?j:void 0,rating:xe?re:void 0,comment:F?ie:void 0,colors:Se?oe:void 0}))return w(t(`could_not_change_the_properties`)),!1;ne({tags:[...j],rating:re,comment:ie.length>0?ie:null,editable:!0,allTags:(O?.allTags??[]).map(e=>({...e,color:oe[e.name]??e.color})),colors:{...oe}})}if(ge&&!_e&&!ve){let t=await K(e);t&&Te(t)}return!0}finally{S(!1)}},De=()=>In(),Oe=async()=>{await Ee()&&De()};(0,U.useEffect)(()=>{a===`hashes`&&!te.current&&he&&(te.current=!0,D(!0),Rn(s.path).then(e=>T(e),()=>T({items:[]})).finally(()=>D(!1)))},[a,he,s.path]),(0,U.useEffect)(()=>{a===`details`&&!me.current&&r&&(me.current=!0,Bn(s.path).then(e=>{e&&(ne(e),k(e.rating),A(e.comment??``),ae(e.tags),se(e.colors))},()=>void 0))},[a,r,s.path]);let I=async()=>{let e=await K(s.path);e&&Te(e)},ke=async e=>{if(pe(!1),!P)return;let n=s.path.replace(/[\\/][^\\/]+$/,``),r=v(s.path),i=e===null?null:e.startsWith(`file:`)?e:`icon:${e}`;await Ie(n,r,i)?(c(e=>({...e,iconSource:i})),le()):w(t(`could_not_change_the_properties`))};return(0,U.useEffect)(()=>{n.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),In()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[]),(0,pi.createPortal)((0,Q.jsx)(Ku,{onPointerDown:e=>{e.target===e.currentTarget&&De()},children:(0,Q.jsxs)(qu,{role:`dialog`,"aria-modal":`true`,"aria-label":t(`properties`),children:[(0,Q.jsx)(Ju,{children:r?(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Xu,{disabled:!P,onClick:()=>pe(e=>!e),title:P?t(`change_icon`):void 0,type:`button`,children:(0,Q.jsx)(Uu,{info:s})}),N&&(0,Q.jsx)(ku,{allowDefault:!0,onClose:()=>pe(!1),onPick:e=>void ke(e),value:s.iconSource?.startsWith(`icon:`)?s.iconSource.slice(5):void 0}),(0,Q.jsxs)(Zu,{children:[(0,Q.jsx)($u,{"aria-label":t(`name`),disabled:!P,onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&Oe()},spellCheck:!1,value:l}),(0,Q.jsx)(ed,{children:Zr(s.name,s.directory,s.linkTarget,t)})]})]}):(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Xu,{children:(0,Q.jsx)(St,{size:30})}),(0,Q.jsxs)(Zu,{children:[(0,Q.jsx)(Qu,{children:t(`count_items`,{count:e.items.length})}),(0,Q.jsx)(ed,{children:t(`selection`)})]})]})}),(0,Q.jsx)(td,{}),r&&(0,Q.jsxs)(nd,{role:`tablist`,children:[(0,Q.jsx)(rd,{$active:a===`general`,onClick:()=>o(`general`),role:`tab`,type:`button`,children:t(`general`)}),(0,Q.jsx)(rd,{$active:a===`details`,onClick:()=>o(`details`),role:`tab`,type:`button`,children:t(`details`)}),he&&(0,Q.jsx)(rd,{$active:a===`hashes`,onClick:()=>o(`hashes`),role:`tab`,type:`button`,children:t(`hashes`)}),!i&&(0,Q.jsx)(rd,{$active:a===`permissions`,onClick:()=>o(`permissions`),role:`tab`,type:`button`,children:t(`permissions`)})]}),(0,Q.jsxs)(id,{children:[r?s.error?(0,Q.jsx)(Zd,{children:s.error}):a===`general`?(0,Q.jsx)(Pu,{info:s,readOnly:d,hidden:p,archive:g,windows:i,editable:P,onRefresh:()=>void I(),onReadOnly:f,onHidden:m,onArchive:_}):a===`details`?(0,Q.jsx)(Fu,{info:s,editable:P&&O!==null,allTags:O?.allTags??[],tags:j,colors:oe,rating:re,comment:ie,onTags:ae,onColors:se,onRating:k,onComment:A}):a===`hashes`?(0,Q.jsx)(Iu,{hashes:ee,hashing:E}):(0,Q.jsx)(Lu,{info:s,mode:y,recursive:ce,advanced:de,onAdvanced:fe,onRecursive:ue,onChange:b}):(0,Q.jsx)(qd,{children:e.items.map(e=>(0,Q.jsxs)(Jd,{children:[(0,Q.jsx)(Yd,{title:e.path,children:e.name}),(0,Q.jsx)(Xd,{children:e.error?e.error:e.directory?t(`folder`):h(e.size)})]},e.path))}),C&&(0,Q.jsx)(Zd,{children:C})]}),(0,Q.jsx)(td,{}),(0,Q.jsxs)(Qd,{children:[i&&(0,Q.jsx)(ef,{onClick:()=>void sr(e.items.map(e=>e.path)),type:`button`,children:t(`windows_properties`)}),(0,Q.jsx)($d,{}),(0,Q.jsx)(tf,{disabled:x,onClick:()=>void Oe(),ref:n,type:`button`,children:t(`ok`)}),(0,Q.jsx)(tf,{disabled:x,onClick:De,type:`button`,children:t(`cancel`)}),(0,Q.jsx)(tf,{disabled:x||!we,onClick:()=>void Ee(),type:`button`,children:t(`apply`)})]})]})}),document.body)}function Pu({info:e,readOnly:n,hidden:r,archive:i,windows:a,editable:o,onRefresh:s,onReadOnly:c,onHidden:l,onArchive:u}){let d=M(),f=e.path.slice(0,Math.max(0,e.path.length-e.name.length-1)),p=Math.max(0,e.volumeTotal-e.volumeFree),m=e.volumeTotal>0?p/e.volumeTotal:0;return(0,Q.jsxs)(od,{children:[(0,Q.jsxs)(sd,{children:[(0,Q.jsx)(cd,{children:d(`general`)}),(0,Q.jsx)(ld,{onClick:s,title:d(`refresh`),type:`button`,children:(0,Q.jsx)(pn,{size:12})})]}),(0,Q.jsxs)(ad,{children:[(0,Q.jsx)(Vu,{label:d(`type`),value:Zr(e.name,e.directory,e.linkTarget,d)}),(0,Q.jsx)(Vu,{label:d(`location`),value:f,wrap:!0}),(0,Q.jsx)(Vu,{label:d(`size`),value:e.size>0?d(`bytes_in_parentheses`,{size:h(e.size),bytes:e.size.toLocaleString()}):`—`}),e.directory&&(0,Q.jsx)(Vu,{label:d(`items`),value:d(`count_files_and_folders`,{files:e.fileCount,folders:e.folderCount})}),!e.directory&&e.sizeOnDisk>0&&(0,Q.jsx)(Vu,{label:d(`size_on_disk`),value:h(e.sizeOnDisk)}),e.fileSystem&&(0,Q.jsx)(Vu,{label:d(`filesystem`),value:e.fileSystem}),e.mountPoint&&(0,Q.jsx)(Vu,{label:d(`mount_point`),value:e.mountPoint,wrap:!0}),e.mountSource&&(0,Q.jsx)(Vu,{label:d(`mount_source`),value:e.mountSource,wrap:!0}),a?(0,Q.jsx)(Vu,{label:d(`attributes`),value:(0,Q.jsxs)(Id,{children:[(0,Q.jsx)(Hu,{checked:n,disabled:!o,label:d(`read_only`),onChange:c}),(0,Q.jsx)(Hu,{checked:r,disabled:!o,label:d(`hidden`),onChange:l}),!e.directory&&(0,Q.jsx)(Hu,{checked:i,disabled:!o,label:d(`archive`),onChange:u})]})}):(0,Q.jsx)(Vu,{label:d(`attributes`),value:e.attributes.map(e=>Gu(d,e)).join(`, `)||`—`}),(0,Q.jsx)(Vu,{label:d(`created`),value:(0,Q.jsx)(Ru,{value:e.created})}),(0,Q.jsx)(Vu,{label:d(`modified`),value:(0,Q.jsx)(Ru,{value:e.modified})}),(0,Q.jsx)(Vu,{label:d(`accessed`),value:(0,Q.jsx)(Ru,{value:e.accessed})})]}),e.volumeTotal>0&&(0,Q.jsxs)(dd,{children:[(0,Q.jsxs)(fd,{children:[(0,Q.jsx)(`span`,{children:d(`free_space`)}),(0,Q.jsxs)(`span`,{children:[h(e.volumeFree),` / `,h(e.volumeTotal)]})]}),(0,Q.jsx)(pd,{children:(0,Q.jsx)(md,{$tone:t(m),$width:Math.round(m*100)})}),(0,Q.jsxs)(hd,{children:[Math.round((1-m)*100),`%`]})]})]})}function Fu({info:e,editable:t,allTags:n,tags:r,colors:i,rating:a,comment:o,onTags:s,onColors:c,onRating:l,onComment:u}){let d=M(),[f,p]=(0,U.useState)(``),[m,h]=(0,U.useState)(`#2dd4bf`),g=e=>i[e]??n.find(t=>t.name===e)?.color??`#64748b`,_=[...new Set([...n.map(e=>e.name),...r])].sort((e,t)=>e.localeCompare(t)),v=e=>s(r.includes(e)?r.filter(t=>t!==e):[...r,e]),y=(e,t)=>c({...i,[e]:t}),b=()=>{let e=f.trim();e.length!==0&&(r.includes(e)||s([...r,e]),c({...i,[e]:m}),p(``))};return(0,Q.jsxs)(od,{children:[(0,Q.jsx)(sd,{children:(0,Q.jsx)(cd,{children:d(`details`)})}),(0,Q.jsxs)(ad,{children:[(0,Q.jsx)(Vu,{label:d(`type`),value:Zr(e.name,e.directory,e.linkTarget,d)}),(0,Q.jsx)(Vu,{label:d(`path`),value:e.path,wrap:!0}),e.linkTarget&&(0,Q.jsx)(Vu,{label:d(`link_target`),value:e.linkTarget,wrap:!0}),e.unixMode&&(0,Q.jsx)(Vu,{label:d(`permissions`),value:(0,Q.jsx)(Rd,{children:e.unixMode})})]}),(0,Q.jsxs)(gd,{children:[(0,Q.jsx)(_d,{children:d(`tags`)}),_.length>0&&(0,Q.jsx)(yd,{children:_.map(e=>{let n=g(e),i=r.includes(e);return(0,Q.jsxs)(bd,{children:[(0,Q.jsx)(so,{ariaLabel:d(`color_of_tag`,{tag:e}),disabled:!t,title:d(`change_this_tag_s_color`),value:n,onChange:t=>y(e,t)}),(0,Q.jsxs)(xd,{$color:n,$ink:ko(n),$on:i,disabled:!t,onClick:()=>v(e),type:`button`,children:[i&&(0,Q.jsx)(Bt,{size:10}),(0,Q.jsx)(`span`,{children:e})]})]},e)})}),(0,Q.jsxs)(vd,{children:[(0,Q.jsx)(so,{ariaLabel:d(`color_of_the_new_tag`),disabled:!t,title:d(`color_of_the_new_tag`),value:m,onChange:h}),(0,Q.jsx)(Sd,{disabled:!t,onChange:e=>p(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),b())},placeholder:d(`new_tag`),value:f}),(0,Q.jsxs)(Cd,{disabled:!t||f.trim().length===0,onClick:b,type:`button`,children:[(0,Q.jsx)(It,{size:11}),d(`add`)]})]})]}),(0,Q.jsxs)(gd,{children:[(0,Q.jsx)(_d,{children:d(`rating`)}),(0,Q.jsx)(wd,{children:[1,2,3,4,5].map(e=>(0,Q.jsx)(Td,{$on:e<=a,"aria-label":String(e),disabled:!t,onClick:()=>l(a===e?0:e),type:`button`,children:(0,Q.jsx)(cn,{size:16})},e))})]}),(0,Q.jsxs)(gd,{children:[(0,Q.jsx)(_d,{children:d(`comment`)}),(0,Q.jsx)(Ed,{disabled:!t,onChange:e=>u(e.target.value),rows:3,spellCheck:!1,value:o})]})]})}function Iu({hashes:e,hashing:t}){let n=M(),[r,i]=(0,U.useState)(``);if(t||!e)return(0,Q.jsxs)(zd,{children:[n(`calculating`),`…`]});if(e.error)return(0,Q.jsx)(Zd,{children:e.error});let a=(e.items??[]).filter(e=>e.value.length>0),o=r.trim().toLowerCase(),s=o.length>0?a.some(e=>e.value.toLowerCase()===o):null;return(0,Q.jsxs)(`div`,{children:[(0,Q.jsx)(ad,{children:a.map(e=>(0,Q.jsx)(Vu,{label:e.name,value:(0,Q.jsxs)(Bd,{children:[(0,Q.jsx)(Vd,{children:e.value}),(0,Q.jsx)(Hd,{onClick:()=>void navigator.clipboard.writeText(e.value),title:n(`copy`),type:`button`,children:(0,Q.jsx)(vn,{size:11})})]}),wrap:!0},e.name))}),(0,Q.jsxs)(Ud,{children:[(0,Q.jsx)(Wd,{children:n(`paste_a_hash_to_compare`)}),(0,Q.jsx)(Gd,{onChange:e=>i(e.target.value),placeholder:`…`,spellCheck:!1,value:r}),s!==null&&(0,Q.jsx)(Kd,{$ok:s,children:n(s?`hash_matches`:`hash_does_not_match`)})]})]})}function Lu({info:e,mode:t,recursive:n,advanced:r,onAdvanced:i,onRecursive:a,onChange:o}){let s=M(),c=(0,U.useMemo)(()=>Mu.map((e,n)=>(t&e.bit)===0?`-`:`rwx`[n%3]).join(``),[t]),l=4|!!e.directory,u=6|!!e.directory,d=[{value:0,label:s(`no_access`)},{value:l,label:s(`view_only`)},{value:u,label:s(`can_view_and_modify`)}],f=e=>Mu.filter(t=>t.group===e).reduce((e,n)=>(t&n.bit)===0?e:e|n.bit,0),p=(e,n)=>{let r=Mu.filter(t=>t.group===e).reduce((e,t)=>e|t.bit,0);o(t&~r|n&r)};return(0,Q.jsxs)(od,{children:[(0,Q.jsx)(sd,{children:(0,Q.jsx)(cd,{children:s(`permissions`)})}),(0,Q.jsxs)(ad,{children:[(0,Q.jsx)(Vu,{label:s(`permissions`),value:(0,Q.jsx)(Rd,{children:c})}),e.owner&&(0,Q.jsx)(Vu,{label:s(`owner`),value:e.owner}),e.group&&(0,Q.jsx)(Vu,{label:s(`group`),value:e.group})]}),(0,Q.jsxs)(gd,{children:[(0,Q.jsx)(_d,{children:s(`permissions`)}),[`owner`,`group`,`other`].map(e=>(0,Q.jsxs)(Dd,{children:[(0,Q.jsx)(Od,{children:s(e)}),(0,Q.jsx)(kd,{onChange:t=>p(e,Number(t.target.value)),value:f(e),children:d.map(e=>(0,Q.jsx)(`option`,{value:e.value,children:e.label},e.value))})]},e))]}),(0,Q.jsxs)(gd,{children:[(0,Q.jsxs)(Ad,{onClick:()=>i(!r),type:`button`,children:[(0,Q.jsx)(`span`,{children:r?`▾`:`▸`}),s(`advanced_permissions`)]}),r&&(0,Q.jsxs)(jd,{children:[(0,Q.jsx)(Nd,{}),(0,Q.jsx)(Nd,{children:s(`read`)}),(0,Q.jsx)(Nd,{children:s(`write`)}),(0,Q.jsx)(Nd,{children:s(`execute`)}),[`owner`,`group`,`other`].map(e=>(0,Q.jsxs)(Md,{children:[(0,Q.jsx)(Nd,{children:s(e)}),Mu.filter(t=>t.group===e).map(e=>(0,Q.jsx)(Nd,{children:(0,Q.jsx)(`input`,{checked:(t&e.bit)!==0,onChange:n=>o(n.target.checked?t|e.bit:t&~e.bit),type:`checkbox`})},e.bit))]},e))]})]}),e.directory&&(0,Q.jsx)(gd,{children:(0,Q.jsx)(Hu,{checked:n,label:s(`apply_to_all_subfolders`),onChange:a})})]})}function Ru({value:e}){let t=(0,U.useSyncExternalStore)(fe,Te),n=d(e),r=o(e,t);return(0,Q.jsxs)(`span`,{children:[n,r!==n&&(0,Q.jsxs)(ud,{children:[` · `,r]})]})}function zu(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function Bu(e,t){let n=Object.keys(e);return n.length===Object.keys(t).length&&n.every(n=>e[n]===t[n])}function Vu({label:e,value:t,wrap:n=!1}){return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(Pd,{children:e}),(0,Q.jsx)(Fd,{$wrap:n,title:typeof t==`string`?t:void 0,children:t})]})}function Hu({checked:e,disabled:t=!1,label:n,onChange:r}){return(0,Q.jsxs)(Ld,{$disabled:t,children:[(0,Q.jsx)(`input`,{checked:e,disabled:t,onChange:e=>r(e.target.checked),type:`checkbox`}),n]})}function Uu({info:e}){let t=e.iconSource,n=t?.startsWith(`file:`)?t.slice(5):null,r=de(n),i=N(t?null:e.path,e.directory,!0);return t?.startsWith(`icon:`)?(0,Q.jsx)(Yr,{name:t.slice(5),size:30}):r?(0,Q.jsx)(Yu,{alt:``,src:r}):i?(0,Q.jsx)(Yu,{alt:``,src:i}):e.directory?(0,Q.jsx)(St,{size:30}):(0,Q.jsx)(Xt,{size:30})}function Wu(e,t){return e.attributes.some(e=>e.toLowerCase()===t.toLowerCase())}function Gu(e,t){switch(t.toLowerCase()){case`readonly`:return e(`read_only`);case`hidden`:return e(`hidden`);case`system`:return e(`system`);case`directory`:return e(`folder`);case`archive`:return e(`archive`);case`compressed`:return e(`compressed`);case`encrypted`:return e(`encrypted`);case`reparsepoint`:return e(`link`);case`temporary`:return e(`temporary`);default:return t}}var Ku=w.div`
    position: fixed;
    inset: 0;
    z-index: 3400;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${z}
`,qu=w.div`
    display: flex;
    flex-direction: column;
    width: min(540px, 100%);
    max-height: min(760px, 88vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${B}
`,Ju=w.div`
    display: flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
    padding: 16px 18px 12px;
`,Yu=w.img`
    width: 34px;
    height: 34px;
    object-fit: contain;
`,Xu=w.button`    display: grid;
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
`,Zu=w.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
    flex: 1;
`,Qu=w.div`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,$u=w.input`
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
`,ed=w.div`
    overflow: hidden;
    color: var(--text-muted);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,td=w.hr`
    height: 0;
    margin: 0;
    border: 0;
    border-top: 1px solid var(--border-color);
`,nd=w.div`
    display: flex;
    gap: 2px;
    padding: 8px 18px 0;
`,rd=w.button`
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
`,id=w.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`,ad=w.div`
    display: grid;
    grid-template-columns: 96px minmax(0, 1fr);
    gap: 7px 12px;
    padding: 12px 18px 14px;
`,od=w.div`
    display: flex;
    flex-direction: column;
`,sd=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding: 12px 18px 0;
`,cd=w.div`
    color: var(--text-muted);
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
`,ld=w.button`
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
`,ud=w.span`
    color: var(--text-muted);
`,dd=w.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0 18px 14px;
`,fd=w.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    color: var(--text-muted);
    font-size: 11px;
`,pd=w.div`
    height: 6px;
    overflow: hidden;
    border-radius: 3px;
    background: var(--bg-input);
`,md=w.div`
    height: 100%;
    width: ${({$width:e})=>e}%;
    background: ${({$tone:e})=>e};
    border-radius: 3px;
`,hd=w.div`
    color: var(--text-muted);
    font-size: 10.5px;
    text-align: right;
`,gd=w.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 18px 14px;
`,_d=w.div`
    color: var(--text-muted);
    font-size: 11px;
`,vd=w.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
`,yd=w.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-bottom: 2px;
`,bd=w.div`
    display: inline-flex;
    align-items: center;
    gap: 3px;
`,xd=w.button`
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
`,Sd=w.input`
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
`,Cd=w.button`
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
`,wd=w.div`
    display: flex;
    gap: 2px;
`,Td=w.button`
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
`,Ed=w.textarea`
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
`,Dd=w.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Od=w.span`
    flex: 0 0 96px;
    color: var(--text-muted);
    font-size: 11.5px;
`,kd=w.select`
    flex: 1;
    padding: 4px 6px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
    color: var(--text-primary);
    font: inherit;
    font-size: 11.5px;
`,Ad=w.button`
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
`,jd=w.div`
    display: grid;
    grid-template-columns: 96px repeat(3, 1fr);
    gap: 5px 10px;
    margin-top: 6px;
`,Md=w.div`
    display: contents;
`,Nd=w.div`
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
`,Pd=w.div`
    color: var(--text-muted);
    font-size: 11px;
    line-height: 1.5;
`,Fd=w.div`
    overflow: ${({$wrap:e})=>e?`visible`:`hidden`};
    color: var(--text-primary);
    font-size: 11.5px;
    line-height: 1.5;
    text-overflow: ellipsis;
    ${({$wrap:e})=>e?`overflow-wrap: anywhere;`:`white-space: nowrap;`}
`,Id=w.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px 14px;
    align-items: center;
`,Ld=w.label`
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
`,Rd=w.span`
    font-family: var(--font-mono);
`,zd=w.p`
    margin: 0;
    padding: 14px 18px;
    color: var(--text-muted);
    font-size: 11.5px;
`,Bd=w.span`
    display: flex;
    align-items: flex-start;
    gap: 6px;
    min-width: 0;
`,Vd=w.span`
    min-width: 0;
    overflow-wrap: anywhere;
    font-family: var(--font-mono);
    font-size: 10.5px;
    line-height: 1.45;
`,Hd=w.button`
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
`,Ud=w.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 0 18px 14px;
`,Wd=w.span`
    color: var(--text-muted);
    font-size: 11px;
`,Gd=w.input`
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
`,Kd=w.span`
    color: ${({$ok:e})=>e?`#4ade80`:`#fca5a5`};
    font-size: 11px;
    font-weight: 600;
`,qd=w.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    max-height: 320px;
    overflow-y: auto;
    padding: 10px 18px 12px;
`,Jd=w.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 12px;
    padding: 2px 0;
`,Yd=w.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Xd=w.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-size: 10.5px;
`,Zd=w.p`
    margin: 0;
    padding: 0 18px 12px;
    color: #fca5a5;
    font-size: 11.5px;
`,Qd=w.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
`,$d=w.div`
    flex: 1;
`,ef=w.button`
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
`,tf=w.button`
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
`,nf=`yafm.conflicts.last`;function rf(e){return e===`overwrite`||e===`rename`||e===`skip`?e:null}function af({conflicts:e,move:t,defaultAction:n,remember:r,onResolve:i}){let a=M(),o=(r?rf(Fe(nf)):null)??rf(n),[s,c]=(0,U.useState)(()=>Object.fromEntries(e.map(e=>[e.source,{action:e.samePath&&o===`overwrite`?`skip`:o,name:e.suggestedName}]))),l=(0,U.useRef)(null),u=(e,t)=>c(n=>({...n,[e]:{...n[e],...t}})),f=t=>c(n=>{let r={...n};for(let n of e)r[n.source]={action:t===`overwrite`&&n.samePath?`skip`:t,name:n.suggestedName};return r}),p=e.every(e=>{let t=s[e.source];return t.action!==null&&(t.action!==`rename`||t.name.trim().length>0)});return(0,U.useEffect)(()=>{l.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),i(null)):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[i]),(0,pi.createPortal)((0,Q.jsx)(sf,{onPointerDown:e=>{e.target===e.currentTarget&&i(null)},children:(0,Q.jsxs)(cf,{"aria-label":a(`copy_conflicts`),"aria-modal":`true`,role:`dialog`,children:[(0,Q.jsxs)(lf,{children:[(0,Q.jsx)(uf,{children:a(`copy_conflicts`)}),(0,Q.jsxs)(df,{children:[a(t?`move_1_item`:`copy_1_item`),` · `,a(`these_items_already_exist_in_the_target_folder`)]})]}),e.length>1&&(0,Q.jsxs)(_f,{children:[(0,Q.jsx)(vf,{children:a(`apply_to_all`)}),(0,Q.jsx)(Df,{$on:!1,onClick:()=>f(`overwrite`),type:`button`,children:a(`overwrite`)}),(0,Q.jsx)(Df,{$on:!1,onClick:()=>f(`rename`),type:`button`,children:a(`rename`)}),(0,Q.jsx)(Df,{$on:!1,onClick:()=>f(`skip`),type:`button`,children:a(`skip`)})]}),(0,Q.jsx)(ff,{children:e.map(e=>{let t=s[e.source],n=e.targetModified>0&&e.sourceModified===e.targetModified,r=e.targetCreated>0&&e.sourceCreated===e.targetCreated,i=e.targetModified>0&&e.sourceModified<e.targetModified,o=e.targetModified>0&&e.sourceModified>e.targetModified,c=e.sourceCreated>e.targetCreated,l=e.targetCreated>0&&e.sourceCreated<e.targetCreated;return(0,Q.jsxs)(pf,{children:[(0,Q.jsxs)(mf,{children:[(0,Q.jsxs)(hf,{title:e.source,children:[(0,Q.jsx)(of,{directory:e.directory,path:e.source}),(0,Q.jsx)(yf,{children:e.name})]}),(0,Q.jsx)(gf,{children:`→`}),(0,Q.jsxs)(hf,{title:e.destination,children:[(0,Q.jsx)(of,{directory:e.directory,path:e.destination}),(0,Q.jsx)(yf,{children:e.name})]}),e.samePath?(0,Q.jsx)(xf,{children:a(`this_is_the_same_path`)}):(0,Q.jsx)(bf,{$older:i,$newer:o,children:a(i?`source_is_older`:o?`source_is_newer`:`same_time`)})]}),(0,Q.jsxs)(Sf,{children:[(0,Q.jsx)(`span`,{}),(0,Q.jsx)(Cf,{children:a(`source`)}),(0,Q.jsx)(Cf,{children:a(`destination`)}),(0,Q.jsxs)(wf,{children:[a(`modified`),n&&(0,Q.jsxs)(Q.Fragment,{children:[` · `,a(`same_time`)]})]}),(0,Q.jsx)(Tf,{$new:o,children:d(e.sourceModified)}),(0,Q.jsx)(Tf,{$new:i,children:e.targetModified>0?d(e.targetModified):`—`}),(0,Q.jsxs)(wf,{children:[a(`created`),r&&(0,Q.jsxs)(Q.Fragment,{children:[` · `,a(`same_time`)]})]}),(0,Q.jsx)(Tf,{$new:c,children:d(e.sourceCreated)}),(0,Q.jsx)(Tf,{$new:l,children:e.targetCreated>0?d(e.targetCreated):`—`}),!e.directory&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(wf,{children:a(`size`)}),(0,Q.jsx)(Tf,{$new:e.sourceSize>e.targetSize,children:h(e.sourceSize)}),(0,Q.jsx)(Tf,{$new:e.targetSize>e.sourceSize,children:e.targetSize>0?h(e.targetSize):`—`})]})]}),(0,Q.jsxs)(Ef,{children:[(0,Q.jsx)(Df,{$on:t.action===`overwrite`,disabled:e.samePath,onClick:()=>u(e.source,{action:`overwrite`}),type:`button`,children:a(`overwrite`)}),(0,Q.jsx)(Df,{$on:t.action===`rename`,onClick:()=>u(e.source,{action:`rename`}),type:`button`,children:a(`rename`)}),(0,Q.jsx)(Df,{$on:t.action===`skip`,onClick:()=>u(e.source,{action:`skip`}),type:`button`,children:a(`skip`)})]}),t.action===`rename`&&(0,Q.jsxs)(Of,{children:[(0,Q.jsx)(`input`,{onChange:t=>u(e.source,{name:t.target.value}),spellCheck:!1,value:t.name}),(0,Q.jsx)(kf,{onClick:()=>u(e.source,{name:e.suggestedName}),type:`button`,children:a(`auto_name`)})]}),t.action===`overwrite`&&e.directory&&(0,Q.jsx)(xf,{children:a(`replace_the_whole_folder`)})]},e.source)})}),(0,Q.jsxs)(Af,{children:[(0,Q.jsx)(jf,{}),(0,Q.jsx)(Mf,{onClick:()=>i(null),type:`button`,children:a(`cancel`)}),(0,Q.jsx)(Mf,{$primary:!0,disabled:!p,onClick:()=>{if(!p)return;let t=new Set,n=e.map(e=>{let n=s[e.source],r=n.action;return t.add(r),{source:e.source,action:r,name:r===`rename`?n.name.trim():null}});if(r&&t.size===1){let[e]=[...t];we(nf,e)}i(n)},ref:l,type:`button`,children:a(`ok`)})]})]})}),document.body)}function of({path:e,directory:t}){let n=N(e??null,t);return n?(0,Q.jsx)(`img`,{alt:``,height:22,src:n,width:22}):t?(0,Q.jsx)(St,{size:22}):(0,Q.jsx)(Xt,{size:22})}var sf=w.div`
    position: fixed;
    inset: 0;
    z-index: 3450;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.64);
    ${z}
`,cf=w.div`
    display: flex;
    flex-direction: column;
    width: min(640px, 100%);
    max-height: min(780px, 88vh);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${B}
`,lf=w.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 15px 18px 10px;
`,uf=w.div`
    color: var(--text-primary);
    font-size: 13.5px;
    font-weight: 600;
`,df=w.div`
    color: var(--text-muted);
    font-size: 10.5px;
`,ff=w.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow-y: auto;
    padding: 0 18px 12px;
`,pf=w.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-sm);
    background: var(--bg-input);
`,mf=w.div`
    display: flex;
    align-items: center;
    gap: 7px;
    min-width: 0;
`,hf=w.span`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    min-width: 0;
    flex: 1;
`,gf=w.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-size: 12px;
`,_f=w.div`
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0 18px 10px;
`,vf=w.span`
    margin-right: 4px;
    color: var(--text-muted);
    font-size: 9.5px;
`,yf=w.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11.5px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,bf=w.span`
    flex: 0 0 auto;
    margin-left: auto;
    color: ${({$older:e,$newer:t})=>e?`#fbbf24`:t?`#4ade80`:`var(--text-muted)`};
    font-size: 9.5px;
    font-weight: ${({$newer:e})=>e?600:400};
`,xf=w.span`
    flex: 1;
    color: #fbbf24;
    font-size: 9.5px;
    text-align: right;
`,Sf=w.div`
    display: grid;
    grid-template-columns: 62px minmax(0, 1fr) minmax(0, 1fr);
    gap: 2px 8px;
    padding-left: 22px;
`,Cf=w.span`
    color: var(--text-muted);
    font-size: 9px;
    text-transform: uppercase;
`,wf=w.span`
    color: var(--text-muted);
    font-size: 9.5px;
`,Tf=w.span`
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
`,Ef=w.div`
    display: flex;
    gap: 4px;
    padding-left: 22px;
`,Df=w.button`
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
`,Of=w.div`
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
`,kf=w.button`
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
`,Af=w.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-top: 1px solid var(--border-color);
`,jf=w.div`
    flex: 1;
`,Mf=w.button`
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
`;function Nf(){let e=M(),[t,n]=(0,U.useState)(null);(0,U.useEffect)(()=>j.on(e=>{let t=e;t.type===`fs.elevation.ask`&&t.data&&n(t.data)}),[]);let r=e=>{let r=t;n(null),r&&j.request(`fs.elevation.answer`,{token:r.token,allow:e})},i=(t=>{switch(t){case`delete`:return e(`delete`);case`rename`:return e(`rename`);case`copy`:return e(`copy`);case`moveTo`:return e(`move`);case`extractArchive`:return e(`extract_archive`);case`newFolder`:case`newFolderAt`:return e(`new_folder`);case`newFile`:case`newFileAt`:return e(`new_file`);case`restoreRecycle`:return e(`restore`);case`writeFile`:return e(`save`);default:return``}})(t?.action??``);return(0,Q.jsx)(We,{confirmLabel:e(`run_as_administrator`),message:e(`this_path_needs_administrator_rights_to_action_restart_the_app_as_administrator_and_try_again`,{path:t?.path??``,action:i.length>0?i.toLowerCase():e(`ok`).toLowerCase()}),onCancel:()=>r(!1),onConfirm:()=>r(!0),open:t!==null,title:e(`administrator_rights_required`)})}function Pf(){let e=M(),[t,n]=(0,U.useState)(null),[r,i]=(0,U.useState)(``),a=(0,U.useRef)(null),o=(0,U.useRef)(null);(0,U.useEffect)(()=>(He((e,t)=>new Promise(r=>{a.current=r,i(``),n({archive:e,wrong:t})})),()=>He(null)),[]),(0,U.useEffect)(()=>{t&&window.setTimeout(()=>o.current?.focus(),0)},[t]);let s=e=>{let t=a.current;a.current=null,n(null),t?.(e)};if(!t)return null;let c=()=>{r.length>0&&s(r)};return(0,pi.createPortal)((0,Q.jsx)(Ff,{onPointerDown:e=>{e.target===e.currentTarget&&s(null)},children:(0,Q.jsxs)(If,{role:`dialog`,"aria-modal":`true`,children:[(0,Q.jsx)(Lf,{children:e(`archive_password`)}),(0,Q.jsx)(Rf,{children:t.wrong?e(`that_password_did_not_open_the_archive_try_again`):e(`this_archive_is_encrypted_enter_its_password`)}),(0,Q.jsx)(zf,{title:t.archive,children:t.archive}),(0,Q.jsx)(Bf,{onChange:e=>i(e.target.value),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),c()):e.key===`Escape`&&(e.preventDefault(),s(null))},ref:o,spellCheck:!1,type:`password`,value:r}),(0,Q.jsxs)(Vf,{children:[(0,Q.jsx)(Hf,{onClick:()=>s(null),type:`button`,children:e(`cancel`)}),(0,Q.jsx)(Uf,{disabled:r.length===0,onClick:c,type:`button`,children:e(`ok`)})]})]})}),document.body)}var Ff=w.div`
    position: fixed;
    inset: 0;
    z-index: 3000;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    ${z}
`,If=w.div`
    width: min(430px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${B}
`,Lf=w.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Rf=w.p`
    margin: 0 0 8px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,zf=w.div`
    margin-bottom: 10px;
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bf=w.input`
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
`,Vf=w.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
`,Hf=w.button`
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
`,Uf=w(Hf)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Wf({query:e,mode:t,matchCase:n,regex:r,total:i,current:a,focusToken:o,compact:s=!1,placeholder:c,onQuery:l,onPrevious:u,onNext:d,onMatchCase:f,onRegex:p,onMode:m,onClose:h,onSelectMatches:g}){let _=M(),v=(0,U.useRef)(null),y=c??_(`search_this_folder`);(0,U.useEffect)(()=>{let e=v.current;e&&(e.focus(),e.setSelectionRange(e.value.length,e.value.length))},[o]);let b=e=>{e(),v.current?.focus()};return(0,Q.jsxs)(Gf,{children:[(0,Q.jsx)(zt,{}),(0,Q.jsx)(Kf,{"aria-label":y,onChange:e=>l(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),e.shiftKey?u():d()),e.key===`Escape`&&(e.preventDefault(),h())},placeholder:y,ref:v,spellCheck:!1,value:e}),!s&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(qf,{children:i===0?`0/0`:`${a+1}/${i}`}),g&&(0,Q.jsx)(Jf,{disabled:i===0,onClick:g,title:_(`select_all_matches`),type:`button`,children:(0,Q.jsx)(Bt,{size:12})}),(0,Q.jsx)(Jf,{$chevron:!0,onClick:()=>b(u),title:_(`previous_match_shift_enter`),type:`button`,children:(0,Q.jsx)(Ut,{size:12})}),(0,Q.jsx)(Jf,{$chevron:!0,$down:!0,onClick:()=>b(d),title:_(`next_match_enter`),type:`button`,children:(0,Q.jsx)(Ut,{size:12})})]}),(0,Q.jsx)(Yf,{$on:n,onClick:()=>b(f),title:_(`match_case`),type:`button`,children:`Aa`}),(0,Q.jsx)(Yf,{$on:r,onClick:()=>b(p),title:_(`regular_expression`),type:`button`,children:`.*`}),!s&&(0,Q.jsx)(Xf,{$on:t===`hide`,onClick:()=>b(m),title:_(t===`hide`?`non_matching_entries_are_hidden`:`non_matching_entries_are_dimmed`),type:`button`,children:t===`hide`?(0,Q.jsx)(ft,{size:12}):(0,Q.jsx)(Zt,{size:12})}),(0,Q.jsx)(Jf,{onClick:h,title:_(`close_search_esc`),type:`button`,children:(0,Q.jsx)(Cn,{size:12})})]})}var Gf=w.div`
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
`,Kf=w.input`
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
`,qf=w.span`
    min-width: 38px;
    text-align: right;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
`,Jf=w.button`
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
`,Yf=w.button`
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
`,Xf=w(Yf)`
    min-width: 24px;
    display: grid;
    place-items: center;
    padding: 0 4px;
    font-family: inherit;
`;function Zf({path:e,label:t,icon:n,focusToken:r,onNavigate:i,onContextMenu:a}){let o=M(),s=Ur(),[c,l]=(0,U.useState)(!1),[u,d]=(0,U.useState)(``),[f,p]=(0,U.useState)([]),[m,h]=(0,U.useState)(0),[g,_]=(0,U.useState)(null),[v,y]=(0,U.useState)(null),[b,x]=(0,U.useState)(null),S=(0,U.useRef)(null),C=(0,U.useRef)(null),w=(0,U.useRef)(0);(0,U.useEffect)(()=>{if(!Ts(e)){x(null);return}let t=Es(e);if(!t){x(null);return}let n=!0;return ys().then(e=>{if(!n)return;let r=e.find(e=>e.id===t.deviceId),i=r?.shares.find(e=>e.id===t.shareId);x({device:r?.name??t.deviceId,share:i?.name??t.shareId})},()=>n&&x(null)),()=>{n=!1}},[e]),(0,U.useEffect)(()=>{c||d(e.replace(/\\/g,`/`))},[e,c]),(0,U.useEffect)(()=>{r&&r!==w.current&&(w.current=r,d(e.replace(/\\/g,`/`)),l(!0))},[r,e]),(0,U.useEffect)(()=>{c&&S.current?.select()},[c]),(0,U.useEffect)(()=>{if(!c)return;let e=()=>l(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,e),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,e)}},[c]);let ee=()=>{d(e.replace(/\\/g,`/`)),l(!0)},T=t=>{let n=u.trim(),r=!!(t?.ctrlKey||t?.metaKey);l(!1),n.length>0&&(n!==e||r)&&i(n,r)};(0,U.useEffect)(()=>{if(!c){p([]);return}let e=tp(u);if(!e){p([]);return}let t=!1,n=window.setTimeout(()=>{Oe(e.parent,!1).then(n=>{if(t)return;let r=e.prefix.toLowerCase(),i=n.entries.filter(e=>e.isDirectory&&e.name.toLowerCase().startsWith(r)).sort((e,t)=>e.name.localeCompare(t.name)).slice(0,40).map(e=>({name:e.name,path:e.fullPath}));p(i),h(0)},()=>{t||p([])})},120);return()=>{t=!0,window.clearTimeout(n)}},[u,c]);let E=(e,t=!1)=>{l(!1),i(e.path,t)};if((0,U.useLayoutEffect)(()=>{if(!c){_(null);return}let e=()=>{let e=C.current?.getBoundingClientRect();if(!e)return;let t=Math.max(e.width,260);_({left:Math.max(8,Math.min(e.left,window.innerWidth-t-8)),top:e.bottom+6,width:t})};return e(),window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[c]),c)return(0,Q.jsxs)(sp,{onPointerDown:e=>e.stopPropagation(),ref:C,children:[(0,Q.jsxs)(dp,{children:[(0,Q.jsx)(`input`,{onChange:e=>d(e.target.value),onKeyDown:e=>{if(e.key===`ArrowDown`&&f.length>0)e.preventDefault(),h(e=>(e+1)%f.length);else if(e.key===`ArrowUp`&&f.length>0)e.preventDefault(),h(e=>(e-1+f.length)%f.length);else if(e.key===`Tab`&&f.length>0){e.preventDefault();let t=f[Math.min(m,f.length-1)];d(`${t.path.replace(/\\/g,`/`)}/`)}else e.key===`Enter`?f.length>0?E(f[Math.min(m,f.length-1)],e.ctrlKey||e.metaKey):T(e):e.key===`Escape`&&(f.length>0?p([]):l(!1))},ref:S,spellCheck:!1,value:u}),(0,Q.jsx)(fp,{onClick:()=>l(!1),title:o(`cancel`),type:`button`,children:(0,Q.jsx)(Cn,{size:12})}),(0,Q.jsx)(fp,{$apply:!0,onClick:T,onPointerDown:e=>e.stopPropagation(),title:o(`open_this_path`),type:`button`,children:(0,Q.jsx)(Bt,{size:14})})]}),f.length>0&&g&&(0,pi.createPortal)((0,Q.jsx)(cp,{onPointerDown:e=>e.stopPropagation(),style:{left:g.left,top:g.top,width:g.width},children:f.map((e,t)=>(0,Q.jsxs)(lp,{$active:t===m,onClick:t=>E(e,t.ctrlKey||t.metaKey),onMouseEnter:()=>h(t),type:`button`,children:[(0,Q.jsx)(Bo,{isDirectory:!0,name:e.name,path:e.path,size:14}),(0,Q.jsx)(up,{children:e.name})]},e.path))}),document.body)]});let D=t?[{label:t,path:e,icon:n}]:Qf(e,b)??ep(e,s.places);return(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(np,{onClick:ee,title:o(`click_to_type_a_path`),children:D.map((t,n)=>(0,Q.jsxs)(rp,{$last:n===D.length-1,children:[n>0&&(0,Q.jsx)(ap,{children:(0,Q.jsx)(Ut,{size:9})}),(0,Q.jsxs)(op,{onClick:n=>{n.stopPropagation();let r=n.ctrlKey||n.metaKey;(r||t.path!==e)&&i(t.path,r)},onContextMenu:e=>{e.preventDefault(),e.stopPropagation(),a?a(t.path,e.clientX,e.clientY):y({x:e.clientX,y:e.clientY,path:t.path})},type:`button`,children:[t.place?(0,Q.jsx)(ip,{children:(0,Q.jsx)(Ba,{place:t.place,size:13})}):t.icon&&(0,Q.jsx)(ip,{children:t.icon}),t.label]})]},t.path))}),v&&(0,Q.jsx)(Ne,{items:[{label:o(`open`),icon:(0,Q.jsx)(Jt,{size:14}),onSelect:()=>i(v.path)},{label:o(`open_in_new_tab`),icon:(0,Q.jsx)(It,{size:14}),onSelect:()=>i(v.path,!0)},{label:o(`copy_as_path`),icon:(0,Q.jsx)(vn,{size:14}),separatorBefore:!0,onSelect:()=>void navigator.clipboard.writeText(v.path)},...yl(v.path)?[{label:o(`open_with`),icon:(0,Q.jsx)(wt,{size:14}),onSelect:()=>void lr(v.path)},{label:o(`properties`),icon:(0,Q.jsx)(ht,{size:14}),onSelect:()=>void or([v.path])}]:[]],onClose:()=>y(null),x:v.x,y:v.y})]})}function Qf(e,t){let n=Es(e);if(!n)return null;let r=Ds(n.deviceId,n.shareId),i=[{label:t?.device??n.deviceId,path:r,icon:(0,Q.jsx)($t,{size:13})},{label:t?.share??n.shareId,path:r}],a=r;for(let e of n.path.split(`/`).filter(Boolean))a=`${a}/${encodeURIComponent(e)}`,i.push({label:e,path:a});return i}function $f(e){let t=e.includes(`\\`)?`\\`:`/`,n=e.split(/[\\/]/).filter(e=>e.length>0),r=[],i=t===`\\`?``:`/`;return n.forEach((e,n)=>{i=t===`\\`?n===0?`${e}\\`:`${i.replace(/\\$/,``)}\\${e}`:i===`/`?`/${e}`:`${i}/${e}`,r.push({label:e,path:i})}),r}function ep(e,t){let r=$f(e),i=-1,a=null;for(let e of Object.values(t)){if(e.name.trim().length===0)continue;let t=r.findIndex(t=>n(t.path,e.path));t>i&&(i=t,a=e)}return a&&i>=0&&r.splice(0,i+1,{label:a.name,path:r[i].path,place:a}),r}function tp(e){if(yl(e)||Ts(e))return null;let t=Math.max(e.lastIndexOf(`/`),e.lastIndexOf(`\\`));return t<0?null:{parent:e.slice(0,t+1),prefix:e.slice(t+1)}}var np=w.div`
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
`,rp=w.span`
    display: flex;
    align-items: center;
    min-width: 0;
    color: ${({$last:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
`,ip=w.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    margin-right: 5px;
    color: var(--text-muted);

    img {
        display: block;
    }
`,ap=w.span`
    display: grid;
    place-items: center;
    margin: 0 6px;
    color: var(--text-muted);
    opacity: 0.9;

    svg {
        fill: currentColor;
        stroke: none;
    }
`,op=w.button`
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
`,sp=w.div`
    position: relative;
    display: flex;
    flex: 1;
    min-width: 0;
`,cp=w.div`
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
`,lp=w.button`
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
`,up=w.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,dp=w.div`
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
`,fp=w.button`
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
`;function pp({places:e,drives:r,recent:i,recentLimit:a,currentPath:o,activeKind:s,homePath:c=``,version:l=0,historyVersion:d=0,hiddenViews:f=[],onNavigate:p,onOpenView:m}){let[g,_]=(0,U.useState)([]),y=M(),[b,x]=(0,U.useState)(null),S=Ur();(0,U.useEffect)(()=>{Ue().then(e=>{x(e),_(La(e).filter(e=>e.pinned))},()=>{x(null),_([])})},[l]),(0,U.useEffect)(()=>{if(!j.available)return;let e=g.filter(e=>e.kind===`home`||e.kind===`folder`).map(e=>e.path||c).filter(e=>e.length>0);return j.send({type:`fs.watch`,payload:{paths:e,owner:`sidebar`}}),()=>j.send({type:`fs.watch`,payload:{paths:[],owner:`sidebar`}})},[g,c]);let C=t=>t.id===`quick`?e:(t.places??[]).map(t=>{let r=e.find(e=>n(e.path,t));return{name:b?.placeNames?.[t]??r?.name??(v(t)||t),path:t,kind:`folder`,icon:r?.icon??b?.placeIcons?.[t]??null}}),w=s===`files`;return(0,Q.jsxs)(yp,{children:[(0,Q.jsxs)(bp,{children:[!f.includes(`home`)&&(0,Q.jsxs)(Tp,{$active:s===`home`,onClick:e=>m(`home`,jr(e)),title:y(`overview`),type:`button`,children:[(0,Q.jsx)(Mt,{}),(0,Q.jsx)(Dp,{children:y(`overview`)})]}),!f.includes(`recycle`)&&(0,Q.jsxs)(Tp,{$active:s===`recycle`,onClick:e=>m(`recycle`,jr(e)),title:y(`recycle_bin`),type:`button`,children:[(0,Q.jsx)(yn,{}),(0,Q.jsx)(Dp,{children:y(`recycle_bin`)})]}),!f.includes(`gallery`)&&(0,Q.jsxs)(Tp,{$active:s===`gallery`,onClick:e=>m(`gallery`,jr(e)),title:y(`gallery`),type:`button`,children:[(0,Q.jsx)(_t,{}),(0,Q.jsx)(Dp,{children:y(`gallery`)})]})]}),g.map(e=>(0,Q.jsxs)(Sp,{children:[(0,Q.jsxs)(Tp,{as:`div`,$active:!1,children:[(0,Q.jsx)(Ep,{children:(0,Q.jsx)(za,{panel:e,size:16})}),(0,Q.jsx)(Dp,{children:y(e.title)})]}),(0,Q.jsx)(Cp,{children:(0,Q.jsxs)(wp,{children:[e.kind===`quick`&&C(e).map(e=>(0,Q.jsxs)(Tp,{$active:w&&n(o,e.path),onClick:t=>p(e.path,jr(t)),title:e.path,type:`button`,children:[(0,Q.jsx)(Ba,{place:e}),(0,Q.jsx)(Dp,{children:e.name})]},e.path)),e.kind===`recent`&&i.slice(0,a).map(e=>{let t=Wr(S,e.path);return(0,Q.jsxs)(Tp,{$active:w&&n(o,e.path),onClick:t=>e.isDirectory?p(e.path,jr(t)):void Ae(e.path),title:e.path,type:`button`,children:[t&&S.useIcons?(0,Q.jsx)(Ba,{place:t}):(0,Q.jsx)(Bo,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:18}),(0,Q.jsx)(Dp,{children:t?.name||e.name})]},e.path)}),e.kind===`frequent`&&(0,Q.jsx)(gp,{historyVersion:d,onNavigate:p}),e.kind===`drives`&&r.map(e=>{let r=e.totalSize>0?1-e.freeSpace/e.totalSize:0;return(0,Q.jsxs)(Tp,{$active:w&&n(o,e.name),onClick:t=>p(e.name,jr(t)),title:e.name,type:`button`,children:[(0,Q.jsx)(mt,{}),(0,Q.jsxs)(Dp,{children:[u(e),(0,Q.jsxs)(Op,{children:[h(e.freeSpace),` free`]}),(0,Q.jsx)(kp,{children:(0,Q.jsx)(Ap,{$used:r,$tone:t(r)})})]})]},e.name)}),(e.kind===`home`||e.kind===`folder`)&&(0,Q.jsx)(_p,{onNavigate:p,path:e.path||c})]})})]},e.id)),!f.includes(`settings`)&&(0,Q.jsx)(xp,{children:(0,Q.jsxs)(Tp,{$active:s===`settings`,onClick:e=>m(`settings`,jr(e)),title:y(`settings`),type:`button`,children:[(0,Q.jsx)(ht,{}),(0,Q.jsx)(Dp,{children:y(`settings`)})]})})]})}var mp=10,hp=40;function gp({historyVersion:e=0,onNavigate:t}){let n=M(),[r,i]=(0,U.useState)(null),a=Ur();return(0,U.useEffect)(()=>{I().then(i,()=>i([]))},[e]),(r??[]).slice(0,15).map(e=>{let r=Wr(a,e.path);return(0,Q.jsxs)(Tp,{$active:!1,onClick:n=>t(e.path,jr(n)),title:b(n,e.count,`k_1_visit_path`,`count_visits_path`,{path:e.path}),type:`button`,children:[r&&a.useIcons?(0,Q.jsx)(Ba,{place:r}):(0,Q.jsx)(Bo,{isDirectory:!0,name:e.name,path:e.path,size:18}),(0,Q.jsx)(Dp,{children:r?.name||e.name})]},e.path)})}function _p({path:e,onNavigate:t}){let[r,i]=(0,U.useState)(null);(0,U.useEffect)(()=>{e&&(i(null),Oe(e,!1).then(i,()=>i(null)))},[e]),(0,U.useEffect)(()=>{if(e&&j.available)return j.on(t=>{let r=t;r.type===`fs.changed`&&typeof r.data?.path==`string`&&n(r.data.path,e)&&Oe(e,!1).then(i,()=>void 0)})},[e]);let a=r?.entries??[],o=a.filter(e=>e.isDirectory).slice(0,mp),s=a.filter(e=>!e.isDirectory).slice(0,hp);return(0,Q.jsxs)(Q.Fragment,{children:[o.map(e=>(0,Q.jsx)(vp,{entry:e,onNavigate:t},e.fullPath)),s.map(e=>(0,Q.jsx)(vp,{entry:e,onNavigate:t},e.fullPath))]})}function vp({entry:e,onNavigate:t}){let n=Ur(),r=Wr(n,e.fullPath);return(0,Q.jsxs)(Tp,{$active:!1,onClick:n=>e.isDirectory?t(e.fullPath,jr(n)):void Ae(e.fullPath),title:e.fullPath,type:`button`,children:[r&&n.useIcons?(0,Q.jsx)(Ba,{place:r}):(0,Q.jsx)(Bo,{isDirectory:e.isDirectory,name:e.name,path:e.fullPath,size:18}),(0,Q.jsx)(Dp,{children:r?.name||e.name})]})}var yp=w.aside`
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

    &:not(:hover) ${()=>Op},
    &:not(:hover) ${()=>kp} {
        display: none;
    }

    &:hover span {
        opacity: 1;
    }
`,bp=w.div`
    display: flex;
    flex-direction: column;
    gap: 1px;
    flex-shrink: 0;
`,xp=w(bp)`
    margin-top: auto;
`,Sp=w.div`
    display: flex;
    flex-direction: column;
`,Cp=w.div`
    display: grid;
    grid-template-rows: 0fr;
    overflow: hidden;
    transition: grid-template-rows 150ms ease;

    ${yp}:hover ${Sp}:hover > & {
        grid-template-rows: 1fr;
    }
`,wp=w.div`
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
`,Tp=w.button`
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
`,Ep=w.span`
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
`,Dp=w.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    opacity: 0;
    transition: opacity 130ms ease;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Op=w.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,kp=w.span`
    display: block;
    width: 100%;
    height: 3px;
    margin-top: 1px;
    border-radius: 2px;
    background: rgba(148, 163, 184, 0.18);
    overflow: hidden;
`,Ap=w.span`
    display: block;
    width: ${({$used:e})=>Math.min(Math.max(e,0),1)*100}%;
    height: 100%;
    border-radius: 2px;
    background: ${({$tone:e})=>e};
`;function jp({tabs:e,onRestore:t}){let n=M(),r=Tl(),[i,a]=(0,U.useState)(!1),o=(0,U.useRef)(null);return(0,U.useEffect)(()=>{if(!i)return;let e=e=>{o.current?.contains(e.target)||a(!1)},t=()=>a(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[i]),(0,Q.jsxs)(Mp,{ref:o,children:[(0,Q.jsx)(Np,{$active:i,onClick:()=>a(e=>!e),title:n(`recently_closed_tabs`),type:`button`,children:(0,Q.jsx)(en,{size:15})}),i&&(0,Q.jsxs)(Pp,{children:[(0,Q.jsxs)(Fp,{children:[(0,Q.jsxs)(Ip,{children:[(0,Q.jsx)(en,{size:12}),n(`recently_closed_tabs`)]}),(0,Q.jsx)(Lp,{onClick:()=>a(!1),title:n(`close`),type:`button`,children:(0,Q.jsx)(Cn,{size:10})})]}),e.length===0?(0,Q.jsx)(Up,{children:n(`no_recently_closed_tabs`)}):(0,Q.jsx)(Rp,{children:[...e].reverse().map((n,i)=>{let o=e.length-1-i,s=xl(n);return(0,Q.jsxs)(zp,{onClick:()=>{a(!1),t(o)},title:n,type:`button`,children:[(0,Q.jsx)(Cl,{location:n}),(0,Q.jsxs)(Bp,{children:[(0,Q.jsx)(Vp,{children:r(n)}),(0,Q.jsx)(Hp,{children:s?r(n):n})]})]},`${o}-${n}`)})})]})]})}var Mp=w.div`
    position: relative;
    display: flex;
`,Np=w.button`
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
`,Pp=w.div`
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
`,Fp=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Ip=w.span`
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
`,Lp=w.button`
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
`,Rp=w.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,zp=w.button`
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
`,Bp=w.span`
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
`,Vp=w.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Hp=w.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Up=w.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Wp=w.span`
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
`;function Gp({tasks:e,onClear:t,open:n,onOpenChange:r}){let i=M(),a=(0,U.useRef)(null),o=e.filter(e=>e.state===`running`).length,s=e.length;return(0,U.useEffect)(()=>{if(!n)return;let e=e=>{a.current?.contains(e.target)||r(!1)},t=()=>r(!1);return window.addEventListener(`pointerdown`,e),window.addEventListener(`blur`,t),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`blur`,t)}},[n,r]),(0,Q.jsxs)(qp,{ref:a,children:[(0,Q.jsxs)(Jp,{$active:n,onClick:()=>r(!n),title:o>0?b(i,o,`k_1_operation_running`,`count_operations_running`):i(`status_center`),type:`button`,children:[(0,Q.jsx)(tn,{size:13}),s>0&&(0,Q.jsx)(Wp,{children:s>9?`9+`:s})]}),n&&(0,Q.jsxs)(Yp,{children:[(0,Q.jsxs)(Xp,{children:[(0,Q.jsxs)(Zp,{children:[(0,Q.jsx)(tn,{size:12}),i(`status_center`)]}),(0,Q.jsxs)(Qp,{children:[(0,Q.jsx)($p,{disabled:e.every(e=>e.state===`running`),onClick:t,type:`button`,children:i(`clear_finished`)}),(0,Q.jsx)(em,{onClick:()=>r(!1),title:i(`close`),type:`button`,children:(0,Q.jsx)(Cn,{size:10})})]})]}),e.length===0?(0,Q.jsx)(nm,{children:i(`no_operations_yet`)}):(0,Q.jsx)(tm,{children:e.map(e=>(0,Q.jsx)(Kp,{task:e},e.id))})]})]})}function Kp({task:e}){let t=e.bytesTotal>0?e.bytesTotal:e.total,n=e.bytesTotal>0?e.bytesDone:e.done,r=t>0?Math.min(100,n/t*100):0,i=e.state===`running`;return(0,Q.jsxs)(rm,{children:[(0,Q.jsxs)(im,{children:[(0,Q.jsx)(am,{$state:e.state,children:e.state===`done`?(0,Q.jsx)(Bt,{size:10}):e.state===`failed`?(0,Q.jsx)(Cn,{size:10}):(0,Q.jsx)(om,{})}),(0,Q.jsx)(sm,{title:e.label,children:e.label}),e.bytesTotal>0&&(0,Q.jsxs)(cm,{children:[h(e.bytesDone),` / `,h(e.bytesTotal)]}),e.bytesTotal===0&&e.total>0&&(0,Q.jsxs)(cm,{children:[e.done,` / `,e.total]})]}),i&&(0,Q.jsx)(lm,{children:(0,Q.jsx)(um,{$percent:r,$indeterminate:t===0})}),e.error&&(0,Q.jsx)(dm,{children:e.error})]})}var qp=w.div`
    position: relative;
    display: flex;
`,Jp=w.button`
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
`,Yp=w.div`
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
`,Xp=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Zp=w.span`
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
`,Qp=w.div`
    display: flex;
    align-items: center;
    gap: 4px;
`,$p=w.button`
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
`,em=w.button`
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
`,tm=w.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: 4px;
`,nm=w.p`
    margin: 0;
    padding: 24px 12px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,rm=w.div`
    padding: 8px;
    border-radius: var(--radius-md);
    transition: background 130ms ease;

    ${z}
    & + & {
        border-top: 1px solid var(--border-color);
    }

    &:hover {
        background: rgba(var(--accent-rgb), 0.05);
    }
`,im=w.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
`,am=w.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    border-radius: 50%;
    background: ${({$state:e})=>e===`failed`?`rgba(239, 68, 68, 0.18)`:e===`done`?`rgba(34, 197, 94, 0.16)`:`rgba(var(--accent-rgb), 0.18)`};
    color: ${({$state:e})=>e===`failed`?`#f87171`:e===`done`?`#4ade80`:`var(--accent-primary)`};
`,om=w.span`
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
`,sm=w.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,cm=w.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,lm=w.div`
    height: 4px;
    margin: 7px 0 0 26px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.14);
`,um=w.div`
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
`,dm=w.p`
    margin: 5px 0 0 26px;
    color: #f87171;
    font-size: 10px;
    word-break: break-word;
`;async function fm(){if(!j.available)return[];try{return(await Xe.readBlock(`/history`)).rows.map(e=>{let t=mm(e.paths);return{id:Number(e.id),label:String(e.label),paths:t.length>0?t.split(``):[],at:Number(e.at),applied:Number(e.applied)!==0,restorable:Number(e.restorable)!==0}})}catch{return(await j.request(`fs.history.list`)).entries}}async function pm(e){return j.available?(await j.request(`fs.history.undoTo`,{id:e})).ok:!1}function mm(e){return typeof e==`string`?e:``}function hm(){let e=M(),[t,n]=(0,U.useState)(!1),[r,i]=(0,U.useState)([]),[a,o]=(0,U.useState)(!1),s=(0,U.useRef)(null),c=()=>void fm().then(i,()=>i([]));(0,U.useEffect)(()=>{if(!t)return;c();let e=window.setInterval(c,1e3),r=e=>{s.current?.contains(e.target)||n(!1)},i=()=>n(!1);return window.addEventListener(`pointerdown`,r),window.addEventListener(`blur`,i),()=>{window.clearInterval(e),window.removeEventListener(`pointerdown`,r),window.removeEventListener(`blur`,i)}},[t]);let l=async e=>{o(!0);try{await pm(e),c()}finally{o(!1)}};return(0,Q.jsxs)(vm,{ref:s,children:[(0,Q.jsx)(ym,{$active:t,onClick:()=>n(e=>!e),title:e(`history`),type:`button`,children:(0,Q.jsx)(sn,{size:14})}),t&&(0,Q.jsxs)(bm,{children:[(0,Q.jsxs)(xm,{children:[(0,Q.jsxs)(Sm,{children:[(0,Q.jsx)(sn,{size:12}),e(`history`)]}),(0,Q.jsx)(Cm,{onClick:()=>n(!1),title:e(`close`),type:`button`,children:(0,Q.jsx)(Cn,{size:10})})]}),r.length===0?(0,Q.jsx)(Mm,{children:e(`no_operations_yet`)}):(0,Q.jsx)(wm,{children:r.map(t=>(0,Q.jsxs)(Tm,{children:[(0,Q.jsxs)(Em,{children:[(0,Q.jsxs)(Dm,{children:[(0,Q.jsx)(_m,{label:t.label}),gm(e,t.label)]}),(0,Q.jsx)(Om,{children:m(t.at)})]}),t.paths.length>0&&(0,Q.jsxs)(km,{title:t.paths.join(`
`),children:[t.paths.slice(0,3).join(` · `),t.paths.length>3?` +${t.paths.length-3}`:``]}),(0,Q.jsx)(Am,{children:(0,Q.jsx)(jm,{disabled:!t.applied||!t.restorable||a,onClick:()=>void l(t.id),type:`button`,children:e(`undo`)})})]},t.id))})]})]})}function gm(e,t){if(t===`new_folder`)return e(`new_folder`);if(t===`new_file`)return e(`new_file`);if(t===`paste_text`)return e(`paste_text`);if(t===`paste_image`)return e(`paste_image`);let n=t.match(/^(Move|Copy|Delete) (\d+) item\(s\)$/);if(n){let t=n[1],r=Number(n[2]);return e(t===`move`?`move_count_items`:t===`copy`?`copy_count_items`:`delete_count_items`,{count:r})}let r=t.match(/^Compress (.+)$/);if(r)return`${e(`compress`)} ${r[1]}`;let i=t.match(/^Rename (.+)$/);return i?`${e(`rename`)} ${i[1]}`:t}function _m({label:e}){return e.startsWith(`delete`)?(0,Q.jsx)(yn,{size:13}):e.startsWith(`move`)||e.startsWith(`copy`)?(0,Q.jsx)(vn,{size:13}):e.startsWith(`rename`)?(0,Q.jsx)(hn,{size:13}):e.startsWith(`compress`)?(0,Q.jsx)(nn,{size:13}):e.startsWith(`new`)?(0,Q.jsx)(It,{size:13}):(0,Q.jsx)(Jt,{size:13})}var vm=w.div`
    position: relative;
    display: flex;
`,ym=w.button`
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
`,bm=w.div`
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
`,xm=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Sm=w.span`
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
`,Cm=w.button`
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
`,wm=w.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
`,Tm=w.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 12px;
    border-bottom: 1px solid rgba(var(--border-rgb, 148, 163, 184), 0.12);

    &:last-child {
        border-bottom: 0;
    }
`,Em=w.div`
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 8px;
`,Dm=w.span`
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
`,Om=w.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
`,km=w.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Am=w.div`
    display: flex;
    justify-content: flex-end;
`,jm=w.button`
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
`,Mm=w.p`
    padding: 22px 14px;
    color: var(--text-muted);
    font-size: 12px;
    text-align: center;
`,Nm=(e=>(e[e.Border=-1]=`Border`,e[e.Data=0]=`Data`,e[e.Function=1]=`Function`,e[e.Position=2]=`Position`,e[e.Timing=3]=`Timing`,e[e.Alignment=4]=`Alignment`,e))(Nm||{}),Pm=[0,1],Fm=[1,0],Im=[2,3],Lm=[3,2],Rm={L:Pm,M:Fm,Q:Im,H:Lm},zm=/^\d*$/,Bm=/^[A-Z0-9 $%*+./:-]*$/,Vm=`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:`,Hm=1,Um=40,Wm=3,Gm=3,Km=40,qm=10,Jm=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],Ym=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],Xm=class{constructor(e,t,n,r){if(this.version=e,this.ecc=t,e<Hm||e>Um)throw RangeError(`Version value out of range`);if(r<-1||r>7)throw RangeError(`Mask value out of range`);this.size=e*4+17;let i=Array.from({length:this.size}).fill(!1);for(let e=0;e<this.size;e++)this.modules.push(i.slice()),this.types.push(i.map(()=>0));this.drawFunctionPatterns();let a=this.addEccAndInterleave(n);if(this.drawCodewords(a),r===-1){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let n=this.getPenaltyScore();n<e&&(r=t,e=n),this.applyMask(t)}}this.mask=r,this.applyMask(r),this.drawFormatBits(r)}size;mask;modules=[];types=[];getModule(e,t){return e>=0&&e<this.size&&t>=0&&t<this.size&&this.modules[t][e]}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0,Nm.Timing),this.setFunctionModule(e,6,e%2==0,Nm.Timing);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let n=0;n<t;n++)for(let r=0;r<t;r++)n===0&&r===0||n===0&&r===t-1||n===t-1&&r===0||this.drawAlignmentPattern(e[n],e[r]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.ecc[1]<<3|e,n=t;for(let e=0;e<10;e++)n=n<<1^(n>>>9)*1335;let r=(t<<10|n)^21522;for(let e=0;e<=5;e++)this.setFunctionModule(8,e,Qm(r,e));this.setFunctionModule(8,7,Qm(r,6)),this.setFunctionModule(8,8,Qm(r,7)),this.setFunctionModule(7,8,Qm(r,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,Qm(r,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,Qm(r,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,Qm(r,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;for(let e=0;e<18;e++){let n=Qm(t,e),r=this.size-11+e%3,i=Math.floor(e/3);this.setFunctionModule(r,i,n),this.setFunctionModule(i,r,n)}}drawFinderPattern(e,t){for(let n=-4;n<=4;n++)for(let r=-4;r<=4;r++){let i=Math.max(Math.abs(r),Math.abs(n)),a=e+r,o=t+n;a>=0&&a<this.size&&o>=0&&o<this.size&&this.setFunctionModule(a,o,i!==2&&i!==4,Nm.Position)}}drawAlignmentPattern(e,t){for(let n=-2;n<=2;n++)for(let r=-2;r<=2;r++)this.setFunctionModule(e+r,t+n,Math.max(Math.abs(r),Math.abs(n))!==1,Nm.Alignment)}setFunctionModule(e,t,n,r=Nm.Function){this.modules[t][e]=n,this.types[t][e]=r}addEccAndInterleave(e){let t=this.version,n=this.ecc;if(e.length!==ph(t,n))throw RangeError(`Invalid argument`);let r=Ym[n[0]][t],i=Jm[n[0]][t],a=Math.floor(fh(t)/8),o=r-a%r,s=Math.floor(a/r),c=[],l=mh(i);for(let t=0,n=0;t<r;t++){let r=e.slice(n,n+s-i+(t<o?0:1));n+=r.length;let a=hh(r,l);t<o&&r.push(0),c.push(r.concat(a))}let u=[];for(let e=0;e<c[0].length;e++)c.forEach((t,n)=>{(e!==s-i||n>=o)&&u.push(t[e])});return u}drawCodewords(e){if(e.length!==Math.floor(fh(this.version)/8))throw RangeError(`Invalid argument`);let t=0;for(let n=this.size-1;n>=1;n-=2){n===6&&(n=5);for(let r=0;r<this.size;r++)for(let i=0;i<2;i++){let a=n-i,o=n+1&2?r:this.size-1-r;!this.types[o][a]&&t<e.length*8&&(this.modules[o][a]=Qm(e[t>>>3],7-(t&7)),t++)}}}applyMask(e){if(e<0||e>7)throw RangeError(`Mask value out of range`);for(let t=0;t<this.size;t++)for(let n=0;n<this.size;n++){let r;switch(e){case 0:r=(n+t)%2==0;break;case 1:r=t%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+t)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(t/2))%2==0;break;case 5:r=n*t%2+n*t%3==0;break;case 6:r=(n*t%2+n*t%3)%2==0;break;case 7:r=((n+t)%2+n*t%3)%2==0;break;default:throw Error(`Unreachable`)}!this.types[t][n]&&r&&(this.modules[t][n]=!this.modules[t][n])}}getPenaltyScore(){let e=0;for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[t][a]===n?(r++,r===5?e+=Wm:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*Km),n=this.modules[t][a],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*Km}for(let t=0;t<this.size;t++){let n=!1,r=0,i=[0,0,0,0,0,0,0];for(let a=0;a<this.size;a++)this.modules[a][t]===n?(r++,r===5?e+=Wm:r>5&&e++):(this.finderPenaltyAddHistory(r,i),n||(e+=this.finderPenaltyCountPatterns(i)*Km),n=this.modules[a][t],r=1);e+=this.finderPenaltyTerminateAndCount(n,r,i)*Km}for(let t=0;t<this.size-1;t++)for(let n=0;n<this.size-1;n++){let r=this.modules[t][n];r===this.modules[t][n+1]&&r===this.modules[t+1][n]&&r===this.modules[t+1][n+1]&&(e+=Gm)}let t=0;for(let e of this.modules)t=e.reduce((e,t)=>e+ +!!t,t);let n=this.size*this.size,r=Math.ceil(Math.abs(t*20-n*10)/n)-1;return e+=r*qm,e}getAlignmentPatternPositions(){if(this.version===1)return[];{let e=Math.floor(this.version/7)+2,t=this.version===32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,n=[6];for(let r=this.size-7;n.length<e;r-=t)n.splice(1,0,r);return n}}finderPenaltyCountPatterns(e){let t=e[1],n=t>0&&e[2]===t&&e[3]===t*3&&e[4]===t&&e[5]===t;return(n&&e[0]>=t*4&&e[6]>=t?1:0)+(n&&e[6]>=t*4&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,n){return e&&(this.finderPenaltyAddHistory(t,n),t=0),t+=this.size,this.finderPenaltyAddHistory(t,n),this.finderPenaltyCountPatterns(n)}finderPenaltyAddHistory(e,t){t[0]===0&&(e+=this.size),t.pop(),t.unshift(e)}};function Zm(e,t,n){if(t<0||t>31||e>>>t)throw RangeError(`Value out of range`);for(let r=t-1;r>=0;r--)n.push(e>>>r&1)}function Qm(e,t){return!!(e>>>t&1)}var $m=class{constructor(e,t,n){if(this.mode=e,this.numChars=t,this.bitData=n,t<0)throw RangeError(`Invalid argument`);this.bitData=n.slice()}getData(){return this.bitData.slice()}},eh=[1,10,12,14],th=[2,9,11,13],nh=[4,8,16,16];function rh(e,t){return e[Math.floor((t+7)/17)+1]}function ih(e){let t=[];for(let n of e)Zm(n,8,t);return new $m(nh,e.length,t)}function ah(e){if(!ch(e))throw RangeError(`String contains non-numeric characters`);let t=[];for(let n=0;n<e.length;){let r=Math.min(e.length-n,3);Zm(Number.parseInt(e.substring(n,n+r),10),r*3+1,t),n+=r}return new $m(eh,e.length,t)}function oh(e){if(!lh(e))throw RangeError(`String contains unencodable characters in alphanumeric mode`);let t=[],n=0;for(;n+2<=e.length;n+=2){let r=Vm.indexOf(e.charAt(n))*45;r+=Vm.indexOf(e.charAt(n+1)),Zm(r,11,t)}return n<e.length&&Zm(Vm.indexOf(e.charAt(n)),6,t),new $m(th,e.length,t)}function sh(e){return e===``?[]:ch(e)?[ah(e)]:lh(e)?[oh(e)]:[ih(dh(e))]}function ch(e){return zm.test(e)}function lh(e){return Bm.test(e)}function uh(e,t){let n=0;for(let r of e){let e=rh(r.mode,t);if(r.numChars>=1<<e)return 1/0;n+=4+e+r.bitData.length}return n}function dh(e){e=encodeURI(e);let t=[];for(let n=0;n<e.length;n++)e.charAt(n)===`%`?(t.push(Number.parseInt(e.substring(n+1,n+3),16)),n+=2):t.push(e.charCodeAt(n));return t}function fh(e){if(e<Hm||e>Um)throw RangeError(`Version number out of range`);let t=(16*e+128)*e+64;if(e>=2){let n=Math.floor(e/7)+2;t-=(25*n-10)*n-55,e>=7&&(t-=36)}return t}function ph(e,t){return Math.floor(fh(e)/8)-Jm[t[0]][e]*Ym[t[0]][e]}function mh(e){if(e<1||e>255)throw RangeError(`Degree out of range`);let t=[];for(let n=0;n<e-1;n++)t.push(0);t.push(1);let n=1;for(let r=0;r<e;r++){for(let e=0;e<t.length;e++)t[e]=gh(t[e],n),e+1<t.length&&(t[e]^=t[e+1]);n=gh(n,2)}return t}function hh(e,t){let n=t.map(e=>0);for(let r of e){let e=r^n.shift();n.push(0),t.forEach((t,r)=>n[r]^=gh(t,e))}return n}function gh(e,t){if(e>>>8||t>>>8)throw RangeError(`Byte out of range`);let n=0;for(let r=7;r>=0;r--)n=n<<1^(n>>>7)*285,n^=(t>>>r&1)*e;return n}function _h(e,t,n=1,r=40,i=-1,a=!0){if(!(Hm<=n&&n<=r&&r<=Um)||i<-1||i>7)throw RangeError(`Invalid value`);let o,s;for(o=n;;o++){let n=ph(o,t)*8,i=uh(e,o);if(i<=n){s=i;break}if(o>=r)throw RangeError(`Data too long`)}for(let e of[Fm,Im,Lm])a&&s<=ph(o,e)*8&&(t=e);let c=[];for(let t of e){Zm(t.mode[0],4,c),Zm(t.numChars,rh(t.mode,o),c);for(let e of t.getData())c.push(e)}let l=ph(o,t)*8;Zm(0,Math.min(4,l-c.length),c),Zm(0,(8-c.length%8)%8,c);for(let e=236;c.length<l;e^=253)Zm(e,8,c);let u=Array.from({length:Math.ceil(c.length/8)},()=>0);return c.forEach((e,t)=>u[t>>>3]|=e<<7-(t&7)),new Xm(o,t,u,i)}function vh(e,t){let{ecc:n=`L`,boostEcc:r=!1,minVersion:i=1,maxVersion:a=40,maskPattern:o=-1,border:s=1}=t||{},c=typeof e==`string`?sh(e):Array.isArray(e)?[ih(e)]:void 0;if(!c)throw Error(`uqr only supports encoding string and binary data, but got: ${typeof e}`);let l=_h(c,Rm[n],i,a,o,r),u=yh({version:l.version,maskPattern:l.mask,size:l.size,data:l.modules,types:l.types},s);return t?.invert&&(u.data=u.data.map(e=>e.map(e=>!e))),t?.onEncoded?.(u),u}function yh(e,t=1){if(!t)return e;let{size:n}=e,r=n+t*2;e.size=r,e.data.forEach(e=>{for(let n=0;n<t;n++)e.unshift(!1),e.push(!1)});for(let n=0;n<t;n++)e.data.unshift(Array.from({length:r},e=>!1)),e.data.push(Array.from({length:r},e=>!1));let i=Nm.Border;e.types.forEach(e=>{for(let n=0;n<t;n++)e.unshift(i),e.push(i)});for(let n=0;n<t;n++)e.types.unshift(Array.from({length:r},e=>i)),e.types.push(Array.from({length:r},e=>i));return e}function bh(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function xh(e,t={}){let n=vh(e,t),{pixelSize:r=10,whiteColor:i=`white`,blackColor:a=`black`}=t,o=n.size*r,s=n.size*r,c=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${o}">`,l=[];for(let e=0;e<n.size;e++)for(let t=0;t<n.size;t++){let i=t*r,a=e*r;n.data[e][t]&&l.push(`M${i},${a}h${r}v${r}h-${r}z`)}return c+=`<rect fill="${bh(i)}" width="${s}" height="${o}"/>`,c+=`<path fill="${bh(a)}" d="${l.join(``)}"/>`,c+=`</svg>`,c}function Sh({currentFolder:e}){let t=M(),[r,i]=(0,U.useState)(!1),[a,o]=(0,U.useState)(null),[s,c]=(0,U.useState)(!1),l=(0,U.useRef)(null);(0,U.useEffect)(()=>{if(!r)return;let e=()=>void hs().then(o,()=>void 0);e();let t=window.setInterval(e,2500),n=e=>{l.current?.contains(e.target)||i(!1)},a=()=>i(!1);return window.addEventListener(`pointerdown`,n),window.addEventListener(`blur`,a),()=>{window.clearInterval(t),window.removeEventListener(`pointerdown`,n),window.removeEventListener(`blur`,a)}},[r]),(0,U.useEffect)(()=>{let e=()=>void hs().then(o,()=>void 0);e();let t=window.setInterval(e,5e3);return()=>window.clearInterval(t)},[]);let u=async e=>{c(!0);try{o(await e())}finally{c(!1)}},d=a?.shares.some(t=>n(t.path,e))??!1;return(0,Q.jsxs)(Ch,{ref:l,children:[(0,Q.jsxs)(wh,{$active:r,onClick:()=>i(e=>!e),title:t(`share_folders`),type:`button`,children:[(0,Q.jsx)($t,{size:15}),a&&a.shares.length>0&&(0,Q.jsx)(Wp,{children:a.shares.length>9?`9+`:a.shares.length})]}),r&&(0,Q.jsxs)(Th,{children:[(0,Q.jsxs)(Eh,{children:[(0,Q.jsxs)(Dh,{children:[(0,Q.jsx)(_n,{size:12}),t(`share`)]}),(0,Q.jsx)(Oh,{onClick:()=>i(!1),title:t(`close`),type:`button`,children:(0,Q.jsx)(Cn,{size:10})})]}),(0,Q.jsxs)(kh,{children:[(0,Q.jsxs)(Ah,{children:[(0,Q.jsx)(mn,{size:15}),(0,Q.jsxs)(`span`,{children:[(0,Q.jsx)(`strong`,{children:a?.deviceName||t(`this_device`)}),(0,Q.jsx)(Fh,{children:a?.fingerprint??``})]})]}),a?.shares.length===0&&(0,Q.jsx)(Ih,{children:t(`no_folders_are_shared_yet`)}),a?.shares.map(e=>(0,Q.jsxs)(Lh,{children:[(0,Q.jsxs)(Rh,{children:[(0,Q.jsx)(zh,{title:e.path,children:e.name}),(0,Q.jsx)(Vh,{disabled:s,onClick:()=>void u(()=>_s(e.id)),title:t(`stop_sharing`),type:`button`,children:(0,Q.jsx)(Cn,{size:10})})]}),(0,Q.jsx)(Bh,{title:e.path,children:e.path}),(0,Q.jsxs)(Hh,{children:[(0,Q.jsxs)(Uh,{$active:e.mode===`client`,onClick:()=>void u(()=>vs(e.id,`client`)),title:t(`only_paired_devices_can_open_this_folder_in_the_app`),type:`button`,children:[(0,Q.jsx)(mn,{size:11}),t(`app`)]}),(0,Q.jsxs)(Uh,{$active:e.mode===`web`,onClick:()=>void u(()=>vs(e.id,`web`)),title:t(`any_device_with_a_browser_can_open_this_folder`),type:`button`,children:[(0,Q.jsx)(vt,{size:11}),t(`web`)]})]})]},e.id)),(0,Q.jsxs)(Wh,{disabled:s||e.length===0||d,onClick:()=>void u(()=>gs(e,`client`)),title:d?t(`this_folder_is_already_shared`):e,type:`button`,children:[(0,Q.jsx)(It,{size:12}),t(`share_this_folder`)]}),a?.webRunning&&(0,Q.jsxs)(Gh,{children:[(0,Q.jsxs)(Kh,{children:[(0,Q.jsx)(vt,{size:12}),t(`browser_access`)]}),(0,Q.jsxs)(Mh,{children:[(0,Q.jsx)(Nh,{children:a.urls.map(e=>(0,Q.jsx)(qh,{onClick:()=>void ie(e),type:`button`,children:e},e))}),a.preferredUrl&&(0,Q.jsx)(jh,{value:a.preferredUrl})]}),(0,Q.jsx)(Fh,{children:t(`open_one_of_these_addresses_on_any_device_on_the_same_network`)})]})]})]})]})}var Ch=w.div`
    position: relative;
    display: flex;
`,wh=w.button`
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
`,Th=w.div`
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
`,Eh=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 11px 12px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--accent-rgb), 0.05);
`,Dh=w.span`
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
`,Oh=w.button`
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
`,kh=w.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-height: 0;
    overflow-y: auto;
    padding: 10px 12px 14px;
`,Ah=w.div`
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
`;function jh({value:e}){let t=M(),n=(0,U.useMemo)(()=>xh(e,{ecc:`M`,border:2,pixelSize:4,blackColor:`#000000`,whiteColor:`#ffffff`}),[e]);return(0,Q.jsx)(Ph,{dangerouslySetInnerHTML:{__html:n},role:`img`,title:t(`scan_the_code_to_open_this_share_on_a_phone`)})}var Mh=w.div`
    display: flex;
    align-items: center;
    gap: 10px;
`,Nh=w.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
`,Ph=w.div`
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
`,Fh=w.small`
    color: var(--text-muted);
    font-size: 10px;
    overflow-wrap: anywhere;
`,Ih=w.p`
    padding: 16px 8px;
    color: var(--text-muted);
    font-size: 11.5px;
    text-align: center;
`,Lh=w.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--bg-rgb), 0.34);
`,Rh=w.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`,zh=w.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bh=w.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 9px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Vh=w.button`
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
`,Hh=w.div`
    display: flex;
    gap: 4px;
    margin-top: 3px;
`,Uh=w.button`
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
`,Wh=w.button`
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
`,Gh=w.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-top: 4px;
    padding: 9px 10px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: rgba(var(--accent-rgb), 0.06);
`,Kh=w.span`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 2px;
    color: var(--text-secondary);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
`,qh=w.button`
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
`;function Jh(){let e=M();return(0,Q.jsx)(Yh,{title:e(`always_applies_to_every_folder`),children:e(`global`)})}var Yh=w.span`
    padding: 1px 6px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
    letter-spacing: 0.04em;
    text-transform: none;
    color: var(--text-muted);
`;function Xh({view:e,onChange:t,onColumns:n,showImages:r,onShowImages:i,disabled:a}){let o=M(),[s,c]=(0,U.useState)(!1),l=(0,U.useRef)(null);(0,U.useEffect)(()=>{if(!s)return;let e=()=>c(!1),t=e=>{l.current?.contains(e.target)||c(!1)},n=e=>{e.key===`Escape`&&c(!1)};return window.addEventListener(`pointerdown`,t),window.addEventListener(`blur`,e),window.addEventListener(`keydown`,n),()=>{window.removeEventListener(`pointerdown`,t),window.removeEventListener(`blur`,e),window.removeEventListener(`keydown`,n)}},[s]),(0,U.useEffect)(()=>{a&&c(!1)},[a]);let u=e.columns,d=e=>{let t=new Set(u);t.has(e)?t.delete(e):t.add(e);let r=Hs.map(e=>e.id).filter(e=>t.has(e));t.has(`linkTarget`)&&r.push(`linkTarget`),n(r)};return(0,Q.jsxs)(Zh,{ref:l,children:[(0,Q.jsx)(Qh,{$active:s,disabled:a,onClick:()=>c(e=>!e),title:o(`view`),type:`button`,children:e.mode===`grid`?(0,Q.jsx)(xt,{size:14}):(0,Q.jsx)(gt,{size:14})}),s&&(0,Q.jsxs)($h,{children:[(0,Q.jsxs)(eg,{children:[(0,Q.jsx)(Et,{size:11}),o(`view`)]}),(0,Q.jsxs)(ng,{children:[(0,Q.jsxs)(rg,{$on:e.mode===`list`,onClick:()=>t({mode:`list`}),type:`button`,children:[(0,Q.jsx)(gt,{size:12}),` `,o(`list`)]}),(0,Q.jsxs)(rg,{$on:e.mode===`grid`,onClick:()=>t({mode:`grid`}),type:`button`,children:[(0,Q.jsx)(xt,{size:12}),` `,o(`grid`)]})]}),(0,Q.jsxs)(eg,{children:[(0,Q.jsx)(gt,{size:11}),o(`list_icon_size`)]}),(0,Q.jsxs)(ig,{children:[(0,Q.jsx)(`input`,{"aria-label":o(`list_icon_size`),max:48,min:16,onChange:e=>t({iconSize:Number(e.target.value)}),step:2,type:`range`,value:e.iconSize}),(0,Q.jsxs)(ag,{children:[e.iconSize,`px`]})]}),(0,Q.jsxs)(eg,{children:[(0,Q.jsx)(xt,{size:11}),o(`grid_size`)]}),(0,Q.jsxs)(ig,{children:[(0,Q.jsx)(`input`,{"aria-label":o(`grid_size`),max:260,min:100,onChange:e=>t({gridSize:Number(e.target.value)}),step:4,type:`range`,value:e.gridSize}),(0,Q.jsxs)(ag,{children:[e.gridSize,`px`]})]}),(0,Q.jsxs)(eg,{children:[(0,Q.jsx)(Vt,{size:11}),o(`columns`),(0,Q.jsx)(Jh,{}),(0,Q.jsx)(tg,{onClick:()=>window.dispatchEvent(new Event(`yafm.reset-column-widths`)),title:o(`reset_column_widths`),type:`button`,children:o(`reset_widths`)})]}),Hs.map(e=>(0,Q.jsxs)(og,{children:[(0,Q.jsx)(`input`,{checked:u.includes(e.id),onChange:()=>d(e.id),type:`checkbox`}),(0,Q.jsx)(`span`,{children:o(e.label)})]},e.id)),(0,Q.jsxs)(og,{children:[(0,Q.jsx)(`input`,{checked:u.includes(`linkTarget`),onChange:()=>d(`linkTarget`),type:`checkbox`}),(0,Q.jsx)(`span`,{children:o(`link_target_after_the_name`)})]}),(0,Q.jsxs)(eg,{children:[(0,Q.jsx)(Zt,{size:11}),o(`preview_panel`),(0,Q.jsx)(Jh,{})]}),(0,Q.jsxs)(og,{children:[(0,Q.jsx)(`input`,{checked:r,onChange:()=>i(!r),type:`checkbox`}),(0,Q.jsx)(`span`,{children:o(`preview_under_the_list`)})]})]})]})}var Zh=w.div`
    position: relative;
    display: flex;
    height: 100%;
`,Qh=w.button`
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
`,$h=w.div`
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
`,eg=w.div`
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
`,tg=w.button`
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
`,ng=w.div`
    display: flex;
    gap: 4px;
    padding: 3px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-input);
`,rg=w.button`
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
`,ig=w.div`
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        flex: 1;
        accent-color: var(--accent-primary);
    }
`,ag=w.span`
    min-width: 34px;
    font-family: var(--font-mono);
    font-size: 10px;
    color: var(--text-muted);
    text-align: right;
`,og=w.label`
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
`,sg=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Q.jsx)(`path`,{d:`M6.5 2 3.5 5l3 3`})}),cg=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Q.jsx)(`path`,{d:`M3.5 2 6.5 5l-3 3`})}),lg=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.3,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:(0,Q.jsx)(`path`,{d:`m2 2 6 6M8 2 2 8`})}),ug=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,strokeLinecap:`round`,...e,children:(0,Q.jsx)(`path`,{d:`M2 5h6`})}),dg=e=>(0,Q.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:(0,Q.jsx)(`rect`,{height:6,width:6,x:2,y:2})}),fg=e=>(0,Q.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 10 10`,fill:`none`,stroke:`currentColor`,strokeWidth:1.2,...e,children:[(0,Q.jsx)(`rect`,{height:6,width:6,x:3,y:1}),(0,Q.jsx)(`rect`,{height:6,width:6,x:1,y:3})]});function pg({tabs:e,activeId:t,closedTabs:n,onRestoreClosed:r,onSelect:i,onClose:a,onNewTab:o,onReorder:s,onTransferToTab:c,view:l,onViewChange:u,onColumns:d,showImages:f,onShowImages:p,tasks:m,onClearTasks:h,activityOpen:g,onActivityOpenChange:_,trayCount:v,trayVisible:y,onToggleTray:b,split:x,canSplit:S,onToggleSplit:C,details:w,canDetails:ee,onToggleDetails:T,shortcuts:D,currentFolder:te}){let O=M(),ne=E(),re=A(),[k,ie]=(0,U.useState)({left:!1,right:!1}),[j,ae]=(0,U.useState)(null),[oe,se]=(0,U.useState)(null),ce=(0,U.useRef)(null),le=(0,U.useRef)(null),ue=(0,U.useRef)(null),de=(0,U.useCallback)(()=>{let e=le.current;if(!e)return;let t=e.scrollLeft>1,n=e.scrollLeft+e.clientWidth<e.scrollWidth-1;ie(e=>e.left===t&&e.right===n?e:{left:t,right:n})},[]);(0,U.useEffect)(()=>{de();let e=le.current;if(!e)return;let t=new ResizeObserver(de);return t.observe(e),()=>t.disconnect()},[de,e.length]),(0,U.useEffect)(()=>()=>{ce.current&&window.clearTimeout(ce.current.timer)},[]),(0,U.useEffect)(()=>{ue.current?.scrollIntoView({behavior:`smooth`,block:`nearest`,inline:`nearest`})},[t]);let fe=e=>le.current?.scrollBy({left:e,behavior:`smooth`}),N=()=>{ce.current&&window.clearTimeout(ce.current.timer),ce.current=null,se(null)};return(0,Q.jsxs)(_g,{children:[(0,Q.jsx)(vg,{children:(0,Q.jsx)(mn,{size:19})}),(0,Q.jsxs)(yg,{children:[k.left&&(0,Q.jsx)(xg,{onClick:()=>fe(-180),title:O(`scroll_tabs_left`),type:`button`,children:(0,Q.jsx)(sg,{})}),(0,Q.jsx)(bg,{onScroll:de,onWheel:e=>{let t=le.current;!t||t.scrollWidth<=t.clientWidth||t.scrollBy({left:e.deltaY||e.deltaX,behavior:`smooth`})},ref:le,children:e.map(e=>(0,Q.jsxs)(Sg,{$active:e.id===t,$dragging:j===e.id,$dropTarget:oe===e.id,$split:!!e.split,draggable:!0,onDragEnter:t=>{if(!Uo(t.dataTransfer)||!mg(e)||(t.preventDefault(),ce.current?.id===e.id))return;N(),se(e.id);let n=window.setTimeout(()=>{i(e.id),ce.current=null},500);ce.current={id:e.id,timer:n}},onDragLeave:t=>{let n=t.relatedTarget;n instanceof Node&&t.currentTarget.contains(n)||(ce.current?.id===e.id||oe===e.id)&&N()},onDragEnd:()=>{ae(null),N()},onDragOver:t=>{(j||Uo(t.dataTransfer)&&mg(e))&&(t.preventDefault(),Uo(t.dataTransfer)&&(t.dataTransfer.dropEffect=t.ctrlKey?`copy`:`move`))},onDragStart:()=>ae(e.id),onDrop:t=>{if(t.preventDefault(),j)s(j,e.id);else if(mg(e)&&Uo(t.dataTransfer)){let{paths:n,move:r}=Wo(t);n.length>0&&(i(e.id),c(n,e.path,!t.ctrlKey&&r))}ae(null),N()},onClick:()=>i(e.id),ref:e.id===t?ue:void 0,title:e.path||e.title,type:`button`,children:[(0,Q.jsx)(hg,{tab:e}),(0,Q.jsx)(Cg,{children:e.title}),e.partner&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)(wg,{children:`|`}),(0,Q.jsx)(gg,{place:e.partner.place}),(0,Q.jsx)(Cg,{children:e.partner.title})]}),(0,Q.jsx)(Tg,{"data-shortcut":Pr(D.closeTab),onClick:t=>{t.stopPropagation(),a(e.id)},title:O(`close_tab`),children:(0,Q.jsx)(lg,{})})]},e.id))}),k.right&&(0,Q.jsx)(xg,{onClick:()=>fe(180),title:O(`scroll_tabs_right`),type:`button`,children:(0,Q.jsx)(cg,{})}),(0,Q.jsx)(Eg,{"data-shortcut":Pr(D.newTab),onClick:o,title:O(`new_tab`),type:`button`,children:(0,Q.jsx)(It,{size:13})})]}),(0,Q.jsx)(Dg,{...re}),(0,Q.jsxs)(Og,{children:[(0,Q.jsx)(Ag,{$active:x,"data-shortcut":Pr(D.splitView),disabled:!S,onClick:C,title:O(x?`close_split_view`:`split_view`),type:`button`,children:(0,Q.jsx)(Vt,{size:15})}),(0,Q.jsx)(Ag,{$active:w,disabled:!ee,onClick:T,title:O(w?`hide_details_panel`:`show_details_panel`),type:`button`,children:(0,Q.jsx)(Et,{size:15})}),(0,Q.jsxs)(kg,{$active:y,onClick:b,title:O(y?`hide_file_tray`:`show_file_tray`),type:`button`,children:[(0,Q.jsx)(jt,{size:14}),v>0&&(0,Q.jsx)(Wp,{children:v>9?`9+`:v})]}),(0,Q.jsx)(jp,{onRestore:r,tabs:n}),(0,Q.jsx)(hm,{}),(0,Q.jsx)(Sh,{currentFolder:te}),(0,Q.jsx)(Gp,{tasks:m,onClear:h,open:g,onOpenChange:_}),(0,Q.jsx)(Xh,{disabled:e.find(e=>e.id===t)?.kind!==`files`,onChange:u,onColumns:d,onShowImages:p,showImages:f,view:l}),(0,Q.jsx)(jg,{onClick:ne.minimize,title:O(`minimize`),type:`button`,children:(0,Q.jsx)(ug,{})}),(0,Q.jsx)(jg,{onClick:ne.toggleMaximize,title:ne.maximized?O(`restore`):O(`maximize`),type:`button`,children:ne.maximized?(0,Q.jsx)(fg,{}):(0,Q.jsx)(dg,{})}),(0,Q.jsx)(Mg,{onClick:ne.close,title:O(`close`),type:`button`,children:(0,Q.jsx)(lg,{})})]})]})}function mg(e){return e.kind===`files`&&(!y(e.path)||x(e.path))}function hg({tab:e}){switch(e.kind){case`home`:return(0,Q.jsx)(V,{size:13});case`settings`:return(0,Q.jsx)(ht,{size:13});case`recycle`:return(0,Q.jsx)(yn,{size:13});default:return e.archive?(0,Q.jsx)(nn,{size:13}):(0,Q.jsx)(gg,{place:e.place})}}function gg({place:e}){return e?(0,Q.jsx)(Ba,{place:e,size:13}):(0,Q.jsx)(St,{size:13})}var _g=w.header`
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
`,vg=w.span`
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
`,yg=w.div`
    display: flex;
    align-items: flex-end;
    gap: 4px;
    min-width: 0;
    flex: 0 1 auto;
    margin-left: 10px;
    padding-top: 5px;
`,bg=w.div`
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
`,xg=w.button`
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
`,Sg=w.button`
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
`,Cg=w.span`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
`,wg=w.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10px;
    opacity: 0.7;
`,Tg=w.span`
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
`,Eg=w.button`
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
`,Dg=w.div`
    flex: 1;
    min-width: 28px;
`,Og=w.div`
    display: flex;
    flex-shrink: 0;
`,kg=w.button`
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
`,Ag=w.button`
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
`,jg=w.button`
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
`,Mg=w(jg)`
    &:hover {
        background: #e81123;
        color: #fff;
    }
`;function Ng(){let[e,t]=(0,U.useState)(null),n=(0,U.useRef)(null),r=(0,U.useRef)(void 0);return(0,U.useEffect)(()=>{let e=()=>{window.clearTimeout(r.current),r.current=void 0},i=()=>{e(),n.current=null,t(null)},a=e=>{let t=e.getAttribute(`title`);t!==null&&(e.setAttribute(`data-tooltip`,t),e.removeAttribute(`title`))},o=e=>{a(e),e.querySelectorAll(`[title]`).forEach(a)},s=new MutationObserver(e=>{for(let t of e)t.type===`attributes`?t.target instanceof Element&&a(t.target):t.addedNodes.forEach(e=>{e instanceof Element&&o(e)})});s.observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`title`],childList:!0}),document.querySelectorAll(`[title]`).forEach(a);let c=e=>e instanceof Element?e.closest(`[data-tooltip]`):null,l=(i,a)=>{let o=i.getAttribute(`data-tooltip`)??``;if(o.length===0)return;let s=i.dataset.shortcut??``;n.current=i;let c=()=>{if(n.current!==i)return;let e=i.getBoundingClientRect();t({text:o,shortcut:s,center:e.left+e.width/2,top:e.top,bottom:e.bottom})};e(),a?c():r.current=window.setTimeout(c,350)},u=e=>{let t=c(e.target);t!==n.current&&(i(),t&&l(t,!1))},d=e=>{let t=n.current;t&&(e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||i())},f=e=>{let t=c(e.target);t&&t!==n.current&&(i(),l(t,!0))},p=()=>i();return window.addEventListener(`pointerover`,u),window.addEventListener(`pointerout`,d),window.addEventListener(`focusin`,f),window.addEventListener(`focusout`,p),window.addEventListener(`pointerdown`,i,!0),window.addEventListener(`blur`,i),window.addEventListener(`scroll`,i,!0),window.addEventListener(`resize`,i),()=>{s.disconnect(),i(),window.removeEventListener(`pointerover`,u),window.removeEventListener(`pointerout`,d),window.removeEventListener(`focusin`,f),window.removeEventListener(`focusout`,p),window.removeEventListener(`pointerdown`,i,!0),window.removeEventListener(`blur`,i),window.removeEventListener(`scroll`,i,!0),window.removeEventListener(`resize`,i)}},[]),e?(0,pi.createPortal)((0,Q.jsx)(Pg,{tooltip:e}),document.body):null}function Pg({tooltip:e}){let t=(0,U.useRef)(null),[n,r]=(0,U.useState)(()=>Math.max(8,e.center-120)),[i,a]=(0,U.useState)(()=>e.bottom+6);return(0,U.useLayoutEffect)(()=>{let n=t.current;if(!n)return;let i=n.getBoundingClientRect(),o=Math.max(8,window.innerWidth-i.width-8),s=e.bottom+6;r(Math.max(8,Math.min(e.center-i.width/2,o))),a(s+i.height<=window.innerHeight-8?s:Math.max(8,e.top-i.height-6))},[e]),(0,Q.jsxs)(Fg,{ref:t,role:`tooltip`,style:{left:n,top:i},children:[(0,Q.jsx)(Ig,{children:e.text}),e.shortcut&&(0,Q.jsx)(Lg,{children:e.shortcut})]})}var Fg=w.div`
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
    ${z}
`,Ig=w.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-family: var(--font-sans);
    font-size: 11px;
    line-height: 1.45;
`,Lg=w.kbd`
    flex-shrink: 0;
    padding: 2px 6px;
    border: 1px solid var(--border-color-hover);
    border-radius: 4px;
    background: var(--bg-input);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    white-space: nowrap;
`,Rg=[{id:`ui`,label:`interface`,sample:`Yet Another File Manager`,variable:`--font-sans`,fallback:`Inter`},{id:`title`,label:`titles`,sample:`Overview · Settings`,variable:`--font-title`,fallback:`interface`},{id:`names`,label:`file_names`,sample:`holiday-photo.jpg`,variable:`--font-names`,fallback:`interface`},{id:`details`,label:`details_panel`,sample:`Size · Modified · Attributes`,variable:`--font-details`,fallback:`interface`},{id:`path`,label:`address_bar`,sample:`C:\\Users\\me\\Documents`,variable:`--font-path`,fallback:`monospace`},{id:`mono`,label:`monospace`,sample:`const answer = 42;`,variable:`--font-mono`,fallback:`JetBrains Mono`},{id:`preview`,label:`text_preview`,sample:`The quick brown fox jumps over the lazy dog.`,variable:`--font-preview`,fallback:`monospace`}];function zg(e){return`"${e.replaceAll(`"`,``)}"`}function Bg(e){let t=document.documentElement.style;for(let n of Rg){let r=e?.[n.id]?.trim();r?t.setProperty(n.variable,`${zg(r)}, var(--font-cjk)`):t.removeProperty(n.variable)}}async function Vg(){return j.available?(await j.request(`app.fonts`)).fonts??[]:[]}function Hg({deviceName:e,code:t,onAccept:n,onReject:r}){let i=M(),a=(0,U.useRef)(null);return(0,U.useEffect)(()=>{a.current?.focus();let e=e=>{e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n,r]),(0,pi.createPortal)((0,Q.jsx)(Ug,{children:(0,Q.jsxs)(Wg,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Q.jsxs)(Gg,{children:[(0,Q.jsx)($t,{size:15}),i(`pair_for_sharing`)]}),(0,Q.jsx)(Kg,{children:i(`device_wants_to_pair_with_this_device_for_sharing_folders`,{device:e})}),(0,Q.jsx)(qg,{children:t}),(0,Q.jsx)(Jg,{children:i(`check_that_the_other_device_shows_the_same_code_before_accepting`)}),(0,Q.jsxs)(Yg,{children:[(0,Q.jsx)(Xg,{onClick:r,type:`button`,children:i(`reject`)}),(0,Q.jsx)(Zg,{onClick:n,ref:a,type:`button`,children:i(`accept`)})]})]})}),document.body)}var Ug=w.div`
    position: fixed;
    inset: 0;
    z-index: 4500;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.68);
    backdrop-filter: blur(6px);
    ${z}
`,Wg=w.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: min(420px, 92vw);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-elevated);
    box-shadow: var(--shadow-panel);
    ${B}
`,Gg=w.h2`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;

    svg {
        color: var(--accent-primary);
    }
`,Kg=w.p`
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.6;
`,qg=w.div`
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
`,Jg=w.p`
    color: var(--text-muted);
    font-size: 10.5px;
    line-height: 1.5;
`,Yg=w.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 4px;
`,Xg=w.button`
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
`,Zg=w(Xg)`
    border-color: transparent;
    background: var(--accent-primary);
    color: #fff;

    &:hover {
        background: var(--accent-primary);
        color: #fff;
        filter: brightness(1.08);
    }
`,Qg=w.button`
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
`,$g=w.span`
    width: 1px;
    height: 20px;
    margin: 0 3px;
    background: var(--border-color);
`,e_=`modulepreload`,t_=function(e){return`/`+e},n_={},r_=function(e){return e.pathname.endsWith(`.css`)},i_=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},a_=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=t_(t,n);let r=s(t),i=r_(r);return i_(n_,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:e_,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},o_=(0,U.lazy)(()=>a_(()=>import(`./OverviewView-CvjgDDor.js`).then(e=>e.n).then(e=>({default:e.OverviewView})),__vite__mapDeps([0,1,2,3,4,5,6]))),s_=(0,U.lazy)(()=>a_(()=>import(`./SettingsView-uDIZI-MU.js`).then(e=>({default:e.SettingsView})),__vite__mapDeps([7,1,3,4,2,5,6]))),c_=(0,U.lazy)(()=>a_(()=>import(`./GalleryView-DD72uVmn.js`).then(e=>e.n).then(e=>({default:e.GalleryView})),__vite__mapDeps([8,1,3,4,2,5]))),l_=(0,U.lazy)(()=>a_(()=>import(`./RecycleView-CAigvNAs.js`).then(e=>({default:e.RecycleView})),__vite__mapDeps([9,1,3,4,2,5,6]))),u_=0,d_=new Set;function f_(e){d_.add(e),j.send({type:`app.navigate.done`,payload:{path:e}})}var p_=20,m_=[{value:`0`,label:`auto`},{value:`932`,label:`japanese_cp932`},{value:`936`,label:`simplified_chinese_cp936`},{value:`950`,label:`traditional_chinese_cp950`},{value:`949`,label:`korean_cp949`},{value:`1252`,label:`western_cp1252`},{value:`1250`,label:`central_european_cp1250`},{value:`1251`,label:`cyrillic_cp1251`},{value:`1254`,label:`turkish_cp1254`},{value:`1253`,label:`greek_cp1253`},{value:`1256`,label:`arabic_cp1256`},{value:`1255`,label:`hebrew_cp1255`},{value:`1257`,label:`baltic_cp1257`},{value:`874`,label:`thai_cp874`},{value:`65001`,label:`utf_8`}];function h_(e){return e.history[e.index]??bl(`home`)}function g_(e){return xl(h_(e))??`files`}function __(e){let t=h_(e);return xl(t)?``:e.listing?.path||t}function v_(e){let t=e.tabs.find(t=>t.id===e.activeId);return e.activePane!==`secondary`||!t?.splitWith||g_(t)!==`files`?e.activeId:e.tabs.find(e=>e.id===t.splitWith)?.id??e.activeId}function y_(e){return{x:Math.max(0,Math.min(e.x,window.innerWidth-320)),y:Math.max(38,Math.min(e.y,window.innerHeight-100))}}function b_(e,t){return{mode:e.view?.mode??t.mode,iconSize:e.view?.iconSize||t.iconSize||xe().iconSize,gridSize:e.view?.gridSize||t.gridSize||xe().gridSize,sort:e.view?.sort??xe().sort,sortDescending:e.view?.sortDescending??xe().sortDescending,columns:t.columns??xe().columns??[]}}function x_(e=bl(`home`)){return u_+=1,{id:`tab-${u_}`,listing:null,loading:!xl(e),error:null,history:[e],index:0,fresh:!0,view:null}}function S_(e){return e instanceof Error?e.message:String(e)}function C_(e){let t=Es(e);if(t){if(t.path.length===0)return null;let e=t.path.split(`/`).slice(0,-1).join(`/`);return Ds(t.deviceId,t.shareId,e)}let n=e.replace(/[\\/]+$/,``);if(n.length===0)return null;let r=Math.max(n.lastIndexOf(`\\`),n.lastIndexOf(`/`));return r<0?null:r===2&&n[1]===`:`?`${n.slice(0,2)}\\`:n.slice(0,r)}function w_(e){let t=v(e),n=t.toLowerCase(),r=[`.tar.gz`,`.tar.bz2`,`.tar.xz`].find(e=>n.endsWith(e));if(r)return t.slice(0,-r.length);let i=t.lastIndexOf(`.`);return i>0?t.slice(0,i):t}function T_(e){return y(e)?_e(e):void 0}function E_(e,t){let n=t.entries.reduce((e,n)=>e+(n.isDirectory?t.folderSizes[n.name]??0:Math.max(n.size,0)),0);return b(e,t.entries.length,`k_1_item_size`,`count_items_size`,{size:h(n)})}function D_(){let e=M(),[t,r]=(0,U.useState)(()=>[x_()]),[o,c]=(0,U.useState)(()=>t[0].id),[u,d]=(0,U.useState)(null),[f,m]=(0,U.useState)(()=>{let e=ct(`yafm.split.ratio`,.5);return e>=.2&&e<=.8?e:.5}),[h,C]=(0,U.useState)([]),[w,ee]=(0,U.useState)([]),[E,O]=(0,U.useState)(null),[re,ie]=(0,U.useState)(null),[A,ae]=(0,U.useState)(null),oe=T(),se=Ln(),[de,fe]=(0,U.useState)(null);(0,U.useEffect)(()=>(Hn(e=>fe(e)),()=>Hn(null)),[]),(0,U.useEffect)(()=>{if(!de)return;let t=null,n=!0;return xr(de.move?`move`:`copy`,e(`copy_conflicts`)).then(e=>{n?t=e:Sr(e)},()=>void 0),()=>{n=!1,Sr(t)}},[de]);let[N,pe]=(0,U.useState)(ue),[ye,be]=(0,U.useState)(0),[Se,Te]=(0,U.useState)(0),[Ee,I]=(0,U.useState)(0),[Ie,Le]=(0,U.useState)(ue),[ze,Ve]=(0,U.useState)(0),[He,L]=(0,U.useState)(0),[We,Je]=(0,U.useState)(0),[Ye,Xe]=(0,U.useState)(0),R=(0,U.useRef)(Ye);R.current=Ye;let[z,Qe]=(0,U.useState)([]),[et,tt]=(0,U.useState)(10),[B,it]=(0,U.useState)(null),ot=ne(s(B?.themeMode)),lt=(0,U.useMemo)(()=>(B?.favorites??[]).map(e=>i(e.path)),[B?.favorites]),[dt,ft]=(0,U.useState)(0),[V,pt]=(0,U.useState)(()=>wr()),[mt,gt]=(0,U.useState)(0),[yt,xt]=(0,U.useState)(0),[St,Ct]=(0,U.useState)(0),[wt,Tt]=(0,U.useState)(!0),[Et,Dt]=(0,U.useState)(()=>{let e=ct(`yafm.preview.width`,320);return e>=220?e:320}),[Ot,kt]=(0,U.useState)(null),[At,jt]=(0,U.useState)(null),[Nt,Pt]=(0,U.useState)({kind:null,info:null}),[Lt,H]=(0,U.useState)(`primary`),[Rt,Bt]=(0,U.useState)(null),[Vt,Ht]=(0,U.useState)(null),[Ut,Wt]=(0,U.useState)(null),[Gt,Kt]=(0,U.useState)(null),[qt,Yt]=(0,U.useState)(null),[Xt,Zt]=(0,U.useState)({primary:0,secondary:0}),[Qt,$t]=(0,U.useState)({primary:null,secondary:null}),[en,tn]=(0,U.useState)(null),[rn,an]=(0,U.useState)([]),[on,sn]=(0,U.useState)(!1),[cn,dn]=(0,U.useState)(null),[fn,pn]=(0,U.useState)(``),mn=(0,U.useRef)([]),hn=(0,U.useRef)([]),[gn,_n]=(0,U.useState)([]),[vn,bn]=(0,U.useState)([]),[xn,Sn]=(0,U.useState)(!1),Cn=(0,U.useMemo)(()=>xn?new Set(vn.map(e=>e.path)):new Set,[vn,xn]),[wn,Tn]=(0,U.useState)(!1),[En,Dn]=(0,U.useState)([]),[On,kn]=(0,U.useState)(null),An=(0,U.useRef)(0),[jn,Mn]=(0,U.useState)(()=>{let e=Fe(`yafm.tray.position`);return typeof e?.x==`number`&&typeof e?.y==`number`?y_({x:e.x,y:e.y}):y_({x:Math.max(20,window.innerWidth-340),y:110})}),Nn=(0,U.useCallback)(()=>{Mn(e=>y_(e)),Tn(!0)},[]),W=t.find(e=>e.id===o)??t[0],G=g_(W),Pn=h_(W),Fn=__(W),In=G===`files`?W.listing?.parent??C_(Fn):null,K=W.splitWith?t.find(e=>e.id===W.splitWith):void 0,Rn=G===`files`&&K!==void 0,zn=K?__(K):``,Bn=K?K.listing?.parent??C_(zn):null,q=Rn&&K&&Lt===`secondary`?K:W,Vn=B?.defaultView??xe(),Un=b_(q,Vn);(0,U.useEffect)(()=>{g(B?.accentColor,B?.secondaryColor,ot)},[B?.accentColor,B?.secondaryColor,ot]),(0,U.useEffect)(()=>{Bg(B?.fonts)},[B?.fonts]),(0,U.useEffect)(()=>{l(B?.timeFormat,B?.timeFormatPattern),_(B?.relativeTime,B?.relativeTimeWindowMinutes)},[B?.timeFormat,B?.timeFormatPattern,B?.relativeTime,B?.relativeTimeWindowMinutes]),(0,U.useEffect)(()=>(document.documentElement.classList.toggle(`has-wallpaper`,!!B?.backgroundSource),()=>document.documentElement.classList.remove(`has-wallpaper`)),[B?.backgroundSource]),(0,U.useEffect)(()=>(P(e=>new Promise(t=>{kn({id:++An.current,prompt:e,resolve:t})})),()=>P(null)),[]),(0,U.useEffect)(()=>{H(`primary`)},[o]),(0,U.useEffect)(()=>{Le(ue),L(0),Je(0)},[G]),(0,U.useEffect)(()=>{L(0)},[Ie.query,Ie.matchCase,Ie.regex]),(0,U.useEffect)(()=>{L(e=>We===0?0:Math.min(e,We-1))},[We]);let Gn=Un.columns.includes(`linkCount`),Yn=(0,U.useMemo)(()=>{let e={},t=La(B),n={};for(let[e,t]of Object.entries(B?.placeNames??{}))n[i(e)]=t;for(let t of h)e[i(t.path)]=t;for(let r of t)if(r.kind===`quick`&&r.id!==`quick`)for(let t of r.places??[]){let r=i(t),a=h.find(e=>i(e.path)===r);e[r]={name:n[r]??a?.name??(v(t)||t),path:t,kind:`folder`,icon:a?.icon??B?.placeIcons?.[t]??null}}return e},[h,B]),Xn=(0,U.useMemo)(()=>({places:Yn,useIcons:B?.systemIcons===!1}),[Yn,B?.systemIcons]),er=B?.defaultView?.showImages??xe().showImages,nr=B?.defaultView?.imageStripHeight??xe().imageStripHeight,rr=G===`home`?(0,Q.jsx)(Mt,{size:13}):G===`settings`?(0,Q.jsx)(ht,{size:13}):G===`recycle`?(0,Q.jsx)(yn,{size:13}):G===`gallery`?(0,Q.jsx)(_t,{size:13}):void 0,ir=N.open&&N.query.length>0,or=(0,U.useDeferredValue)(N),sr=(0,U.useMemo)(()=>ir&&q.listing?q.listing.entries.filter(e=>qe(e.isDirectory?Gr(Xn,e.fullPath,e.name):e.name,or)).map(e=>e.fullPath):[],[ir,or,q.listing,Xn]);(0,U.useEffect)(()=>{be(0)},[N.query,N.matchCase,N.regex,q.listing?.path]);let cr=sr.length===0?-1:Math.min(ye,sr.length-1),lr=(0,U.useCallback)(()=>{pe(e=>({...e,open:!1,query:``})),be(0)},[]),ur=(0,U.useCallback)(()=>{pe(e=>({...e,open:!0})),Te(e=>e+1)},[]),dr=(0,U.useCallback)(()=>{Le(e=>({...e,open:!0})),Ve(e=>e+1)},[]),fr=(0,U.useCallback)(()=>{Le(ue),L(0),Je(0)},[]),hr=(0,U.useCallback)(e=>{L(t=>We===0?0:(Math.min(t,We-1)+e+We)%We)},[We]),gr=(0,U.useCallback)(e=>{pe(t=>({...t,open:!0,query:t.open?t.query+e:e})),Te(e=>e+1)},[]),_r=(0,U.useCallback)(e=>{be(t=>sr.length===0?0:(Math.min(t,sr.length-1)+e+sr.length)%sr.length)},[sr.length]),J=(0,U.useRef)({tabs:t,activeId:o,activePane:Lt});J.current={tabs:t,activeId:o,activePane:Lt};let Cr=(0,U.useRef)(B);Cr.current=B;let Tr=(0,U.useRef)(!1),Er=(0,U.useRef)([]),Y=(0,U.useCallback)((e,t)=>{r(n=>n.map(n=>n.id===e?{...n,...t(n)}:n))},[]),kr=(0,U.useRef)(new Map),Nr=(0,U.useCallback)(e=>{let t=(kr.current.get(e)??0)+1;return kr.current.set(e,t),()=>kr.current.get(e)===t},[]),Fr=(0,U.useCallback)((e,t)=>{j.available&&t&&e===v_(J.current)&&j.send({type:`fs.focus`,payload:{path:t}})},[]),Lr=(0,U.useCallback)(async(e,t,n)=>{if(!(t&&Ts(t)))try{let r=(await me(t,Gn)).listing;if(!n()||!r)return;Y(e,e=>e.loading?{listing:{...r,total:r.entries.length,signature:0},view:r.view??null}:{})}catch{}},[Gn,Y]),Z=(0,U.useCallback)(async(e,t,r=!1)=>{let i=Nr(e);lr(),Fr(e,t);let a=!r||!J.current.tabs.find(t=>t.id===e)?.listing,o=!r&&t!==void 0;Y(e,e=>{if(!o)return{listing:r?e.listing:null,loading:!0,error:null,fresh:r&&e.fresh};let i=e.history[e.index],a=i!==void 0&&n(i,t);return{listing:null,loading:!0,error:null,fresh:!1,history:a?e.history:[...e.history.slice(0,e.index+1),t],index:a?e.index:e.index+1}});try{a&&Lr(e,t,i);let n=t&&Ts(t)?await Os(t):await Oe(t,!0,Gn,R.current,t?T_(t):void 0,e);if(!i())return;Y(e,e=>({listing:n,view:n.view??null,loading:!1,fresh:!1,history:o?e.history.map((t,r)=>r===e.index?n.path:t):e.history,index:e.index})),!r&&!Ts(n.path)&&Be(n.path).then(()=>ft(e=>e+1))}catch(n){if(!i())return;let a=J.current.tabs.find(t=>t.id===e),o=t&&t.length>0?t:a?__(a):``,s=C_(o),c=S_(n);if(o&&ve(c)){let n=p(o),a=await Ze(n,!!_e(n));if(a){F(n,a),i()&&Z(e,t,r);return}}Y(e,e=>({listing:{path:o,parent:s,total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:c,...r?{}:{history:[...e.history.slice(0,e.index+1),o],index:e.index+1}}))}},[Nr,Gn,Y,Fr,lr,Lr]),Rr=(0,U.useRef)(new Set),zr=(0,U.useCallback)(async e=>{let t=J.current.tabs.find(t=>t.id===e),r=t?.listing;if(!t||g_(t)!==`files`||!r)return;let i=r.entries.length;if(i<=0||i>=(r.total??0)||Br.current.has(e))return;let a=`${e}|${r.path}|${i}`;if(Rr.current.add(a))try{let t=await $e(r.path,i,r.view?.sort??`name`,r.view?.sortDescending??!1);Y(e,e=>{let a=e.listing;return!a||!n(a.path,r.path)||a.entries.length!==i||a.view?.sort!==r.view?.sort?{}:{listing:{...a,entries:[...a.entries,...t.entries],total:t.total}}})}catch{}finally{Rr.current.delete(a)}},[Y]),Br=(0,U.useRef)(new Set),Vr=(0,U.useCallback)(async e=>{let t=J.current.tabs.find(t=>t.id===e),r=t?.listing;if(t&&g_(t)===`files`&&r&&!(r.entries.length>=(r.total??0))&&Br.current.add(e))try{let t=[],i=r.entries.length,a=r.total??0;for(;i<a;){let e=await $e(r.path,i,r.view?.sort??`name`,r.view?.sortDescending??!1);if(e.entries.length===0)break;t.push(e.entries),i+=e.entries.length,a=e.total}if(t.length===0)return;Y(e,e=>{let i=e.listing;return!i||!n(i.path,r.path)||i.entries.length!==r.entries.length?{}:{listing:{...i,entries:[...i.entries,...t.flat()],total:a}}})}catch{}finally{Br.current.delete(e)}},[Y]),[Ur,Kr]=(0,U.useState)(0),qr=(0,U.useCallback)(async e=>{let t=J.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0;await Vr(e),(J.current.tabs.find(t=>t.id===e)?.listing?.entries.length??0)>t&&Kr(e=>e+1)},[Vr]),Jr=q.id,Yr=g_(q),Xr=q.listing?.entries.length??0,Zr=q.listing?.total??0;(0,U.useEffect)(()=>{N.open&&N.query.length!==0&&(Yr!==`files`||Xr>=Zr||Vr(Jr))},[N.open,N.query,Jr,Yr,Xr,Zr,Vr]);let Qr=(0,U.useCallback)((e,t)=>{let n=Sl(t);n&&(xl(n)?(lr(),Nr(e),Y(e,e=>({listing:null,loading:!1,error:null,fresh:!1,history:[...e.history.slice(0,e.index+1),n],index:e.index+1}))):Z(e,n))},[Nr,Z,Y,lr]),ei=(0,U.useCallback)(async(e,t,n)=>{if(lr(),xl(t)){Nr(e),Y(e,()=>({index:n,listing:null,loading:!1,error:null}));return}let r=Nr(e);Fr(e,t),Y(e,()=>({index:n,listing:null,loading:!0,error:null}));try{Ts(t)||Lr(e,t,r);let n=Ts(t)?await Os(t):await Oe(t,!0,Gn,R.current,T_(t),e);if(!r())return;Y(e,()=>({listing:n,view:n.view??null,loading:!1}))}catch(i){if(!r())return;let a=S_(i);if(ve(a)){let i=p(t),a=await Ze(i,!!_e(i));if(a){F(i,a),r()&&ei(e,t,n);return}}Y(e,()=>({listing:{path:t,parent:C_(t),total:0,signature:0,entries:[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}},loading:!1,error:S_(i)}))}},[Nr,Gn,Y,Fr,lr,Lr]),ti=(0,U.useCallback)((e,t=!0)=>{let n=x_(e??bl(`home`));return r(e=>[...e,n]),t&&c(n.id),e&&!xl(e)&&Z(n.id,e),n.id},[Z]),ni=(0,U.useCallback)(e=>{for(let t of J.current.tabs)g_(t)===`files`&&n(__(t),e)&&Z(t.id,e,!0)},[Z]),ri=(0,U.useCallback)((e,t)=>{let r=v(t);for(let i of J.current.tabs)i.listing?.entries.some(t=>n(t.fullPath,e))&&Y(i.id,i=>{let a=i.listing;if(!a)return{};let o=a.entries.map(i=>n(i.fullPath,e)?{...i,name:r,fullPath:t}:i);return{listing:{...a,entries:o}}})},[Y]),ii=(0,U.useRef)([]);(0,U.useEffect)(()=>{let e=new Set;for(let n of t){let t=n.listing?.path??n.history[n.index]??``;t&&y(t)&&e.add(i(p(t)))}let n=ii.current.filter(t=>!e.has(t));ii.current=[...e],n.length>0&&nt(n)},[t]);let ai=(0,U.useCallback)((e,t=!1)=>{t?ti(bl(e)):Qr(J.current.activeId,bl(e))},[ti,Qr]),oi=(0,U.useCallback)(e=>{let{tabs:t,activeId:n}=J.current,i=t.find(t=>t.id===e),a=t.filter(t=>t.id!==e&&t.id!==i?.splitWith);if(i&&!i.hidden&&(hn.current.push(h_(i)),hn.current.length>p_&&hn.current.shift(),_n([...hn.current])),a.length===0){let e=x_();r([e]),c(e.id);return}let o=t.findIndex(t=>t.id===e);r(a),n===e&&c(a[Math.min(o,a.length-1)].id)},[]),si=(0,U.useCallback)(()=>{let e=hn.current.pop();if(!e)return;_n([...hn.current]);let t={...x_(e),fresh:!1};r(e=>[...e,t]),c(t.id),g_(t)===`files`&&Z(t.id,__(t))},[Z]),ci=(0,U.useCallback)(e=>{let t=hn.current,n=t[e];if(!n)return;t.splice(e,1),_n([...t]);let i={...x_(n),fresh:!1};r(e=>[...e,i]),c(i.id),g_(i)===`files`&&Z(i.id,__(i))},[Z]),li=(0,U.useCallback)((e,t=!1)=>{t?ti(e):Qr(v_(J.current),e??bl(`home`))},[Qr,ti]),di=(0,U.useCallback)(e=>{let{tabs:t,activeId:n}=J.current,r=t.filter(e=>!e.hidden);if(r.length<2)return;let i=(Math.max(r.findIndex(e=>e.id===n),0)+e+r.length)%r.length;c(r[i].id)},[]),fi=(0,U.useCallback)(()=>{let{tabs:e,activeId:t}=J.current,n=e.find(e=>e.id===t);if(!n||g_(n)!==`files`)return;let i=n.splitWith?e.find(e=>e.id===n.splitWith):void 0;if(i){r(e=>e.filter(e=>e.id!==i.id)),Y(t,()=>({splitWith:void 0})),H(`primary`);return}let a=__(n),o={...x_(a),hidden:!0};r(e=>[...e,o]),Y(t,()=>({splitWith:o.id})),Z(o.id,a),H(`primary`)},[Z,Y]),pi=(0,U.useCallback)(e=>{Dt(e),ce(`yafm.preview.width`,e)},[]),hi=(0,U.useCallback)((e,t,n)=>Pt(r=>r.kind===e&&r.info?.path===t?.path&&r.info?.modified===t?.modified&&r.info?.name===t?.name&&r.note===n?r:{kind:e,info:t,note:n}),[]),gi=(0,U.useCallback)((e,t)=>hi(`gallery`,e,t),[hi]),_i=(0,U.useCallback)((e,t)=>hi(`recycle`,e,t),[hi]),vi=Rn?Lt===`secondary`?At??Ot:Ot??At:Ot,yi=Rn&&Lt===`secondary`?Xt.secondary:Xt.primary,bi=G===`files`?vi:Nt.kind===G?Nt.info:null,xi=G===`files`?yi>1?b(e,yi,`k_1_item_selected`,`count_items_selected`):void 0:Nt.kind===G?Nt.note:void 0,Si=(0,U.useMemo)(()=>G===`files`&&W.listing?E_(e,W.listing):fn,[G,W.listing,e,fn]),Ci=(0,U.useRef)(null),wi=e=>{e.preventDefault();let t=Ci.current?.getBoundingClientRect();if(!t)return;let n=Math.max(t.width-7,1),r=e=>{let r=Math.min(Math.max((e.clientX-t.left)/n,.2),.8);m(r),ce(`yafm.split.ratio`,r)},i=()=>{window.removeEventListener(`pointermove`,r),window.removeEventListener(`pointerup`,i)};window.addEventListener(`pointermove`,r),window.addEventListener(`pointerup`,i)},Ti=(e,t,n)=>{t&&Bt({x:e.clientX,y:e.clientY,directory:t,refresh:n})},Ei=(0,U.useCallback)((e,t)=>{Zt(n=>n[e]===t?n:{...n,[e]:t})},[]),Oi=(0,U.useCallback)(e=>Ei(`primary`,e),[Ei]),ki=(0,U.useCallback)(e=>Ei(`secondary`,e),[Ei]),Ai=(e,t)=>{Xt[e]!==0&&$t(n=>({...n,[e]:{token:(n[e]?.token??0)+1,x:t.clientX,y:t.clientY}}))},ji=async(e,t=!1)=>{let n=Rt;if(Bt(null),!n)return;let r=e===null?await tr(n.directory,t):await ar(n.directory,e);if(!r.ok||r.path===null)return;let i=r.path;lr(),tn(e=>({directory:n.directory,path:i,token:(e?.token??0)+1})),n.refresh()},Mi=(0,U.useCallback)(()=>{let{tabs:e}=J.current,t=e.find(e=>e.id===v_(J.current));t&&t.index>0&&ei(t.id,t.history[t.index-1],t.index-1)},[ei]),Ni=(0,U.useCallback)(()=>{let{tabs:e}=J.current,t=e.find(e=>e.id===v_(J.current));t&&t.index<t.history.length-1&&ei(t.id,t.history[t.index+1],t.index+1)},[ei]),Pi=(0,U.useCallback)(()=>{let{tabs:e}=J.current,t=e.find(e=>e.id===v_(J.current));t&&g_(t)===`files`&&t.listing?.parent&&li(t.listing.parent)},[li]),Fi=(0,U.useRef)(null),Ii=(0,U.useCallback)(()=>{for(let e of J.current.tabs)e.listing&&Z(e.id,e.listing.path,!0)},[Z]),Li=(0,U.useCallback)(e=>{e.length!==0&&(Dn(t=>{let n=new Set(t.map(e=>e.path)),r=e.filter(e=>!n.has(e.path)&&(n.add(e.path),!0));return r.length>0?[...t,...r]:t}),Nn())},[Nn]),Ri=(0,U.useCallback)(async e=>{let t=await Zn(e);t.length!==0&&Li(t.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory})))},[Li]),zi=(0,U.useCallback)(e=>{let t=new Set(e);Dn(e=>e.filter(e=>!t.has(e.path)))},[]),Bi=(0,U.useCallback)(async e=>{let t=Cr.current;if(!t)return;let n=await Zn(e);if(n.length===0)return;let r=new Set((t.favorites??[]).map(e=>i(e.path))),a=n.filter(e=>!r.has(i(e.path))).map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}));if(a.length===0)return;let o={...t,favorites:[...t.favorites??[],...a]};it(o),await at(o),gt(e=>e+1)},[]),Vi=(0,U.useCallback)(async e=>{let t=Cr.current;if(!t)return;let n=new Set(e.map(i)),r=(t.favorites??[]).filter(e=>!n.has(i(e.path)));if(r.length===(t.favorites??[]).length)return;let a={...t,favorites:r};it(a),await at(a),gt(e=>e+1)},[]),Hi=(0,U.useCallback)(()=>Dn([]),[]),Ui=(0,U.useRef)(-1),Wi=(0,U.useCallback)(e=>{bn(e.entries.map(e=>({path:e.path,name:e.name,isDirectory:e.isDirectory}))),Sn(e.move),e.entries.length>0&&Nn()},[Nn]),Gi=(0,U.useCallback)(async()=>{if(j.available)try{let e=await Kn();Ui.current=e.sequence,Wi(e)}catch{}},[Wi]),Ki=(0,U.useCallback)(async e=>{e.length!==0&&await Wn(e,!1)&&await Gi()},[Gi]),qi=(0,U.useRef)(En);qi.current=En;let Ji=(0,U.useRef)(wn);Ji.current=wn;let Yi=(0,U.useRef)(!1);(0,U.useEffect)(()=>{let e=B?.trayAutoShow??rt().trayAutoShow,t=t=>{e&&Uo(t)&&(Ji.current||(Yi.current=!0),Nn())},n=e=>t(e.dataTransfer),r=e=>t(e.dataTransfer),i=()=>{Yi.current&&window.setTimeout(()=>{Yi.current&&qi.current.length===0&&Tn(!1),Yi.current=!1},300)},a=()=>i(),o=()=>i(),s=e=>{e.relatedTarget===null&&i()};return window.addEventListener(`dragstart`,n),window.addEventListener(`dragenter`,r),window.addEventListener(`drop`,a),window.addEventListener(`dragend`,o),document.addEventListener(`dragleave`,s),()=>{window.removeEventListener(`dragstart`,n),window.removeEventListener(`dragenter`,r),window.removeEventListener(`drop`,a),window.removeEventListener(`dragend`,o),document.removeEventListener(`dragleave`,s)}},[Nn,B?.trayAutoShow]),(0,U.useEffect)(()=>{let e=()=>Mn(e=>y_(e));return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let Xi=(0,U.useCallback)(async()=>{let e=qi.current;if(e.length>0){let t=await Zn(e.map(e=>e.path)),n=new Set(t.filter(e=>e.exists).map(e=>e.path));Dn(e=>e.filter(e=>n.has(e.path)))}await Gi()},[Gi]),Zi=(0,U.useCallback)(()=>{Xi(),Ct(e=>e+1),Ii()},[Xi,Ii]),Qi=(0,U.useCallback)(e=>{let t=y_(e);Mn(t),we(`yafm.tray.position`,t)},[]),$i=(0,U.useCallback)(()=>{Yi.current=!1,wn?Tn(!1):Nn()},[Nn,wn]),ea=(0,U.useCallback)(async(t,n,r)=>{let i=await qn(t,n,r);i.cancelled||(i.ok?(r&&zi(t),Ct(e=>e+1),Ii(),Gi()):je(i.error??e(`the_files_could_not_be_transferred`)))},[Ii,Gi,zi]);(0,U.useEffect)(()=>{if(j.available)return yr().then(e=>{mn.current=e,an(e)},()=>void 0),j.on(e=>{let t=e;if(t.type!==`app.tasks.changed`||!Array.isArray(t.data?.tasks))return;let n=t.data.tasks,r=n.some(e=>{let t=mn.current.find(t=>t.id===e.id);return!t||t.state!==e.state});mn.current=n,an(n),r&&sn(!0)})},[]);let ta=(0,U.useCallback)(()=>{br().then(()=>yr().then(e=>{mn.current=e,an(e)},()=>void 0))},[]);(0,U.useEffect)(()=>{if(!j.available)return;let e=!0,t=async()=>{if(document.hasFocus())try{let t=await Kn();if(!e||t.sequence===Ui.current)return;Ui.current=t.sequence,Wi(t)}catch{}},n=()=>void t(),r=window.setInterval(()=>void t(),1500);return window.addEventListener(`focus`,n),t(),()=>{e=!1,window.clearInterval(r),window.removeEventListener(`focus`,n)}},[Wi]);let na=(0,U.useCallback)(async e=>{let t=e?await pr():await mr();t.ok?(Ct(e=>e+1),Ii()):t.error&&!t.error.startsWith(`Nothing to`)&&je(t.error)},[Ii]),ra=(0,U.useRef)(Gn);(0,U.useEffect)(()=>{ra.current!==Gn&&(ra.current=Gn,Ii())},[Gn,Ii]);let ia=(0,U.useCallback)((e,t)=>{let{tabs:n}=J.current,r=n.find(t=>t.id===e);if(!r||g_(r)!==`files`)return;let i=__(r),a=Cr.current?.defaultView??xe(),o={mode:r.view?.mode??a.mode,iconSize:r.view?.iconSize||a.iconSize||xe().iconSize,gridSize:r.view?.gridSize||a.gridSize||xe().gridSize,sort:r.view?.sort??xe().sort,sortDescending:r.view?.sortDescending??xe().sortDescending,...t};Y(e,()=>({view:o})),Fi.current!==null&&window.clearTimeout(Fi.current),Fi.current=window.setTimeout(()=>{Fi.current=null,Ge(i,o)},250)},[Y]),aa=(0,U.useCallback)(e=>{ia(v_(J.current),e)},[ia]),oa=(0,U.useCallback)(e=>{let t=Cr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe(),columns:e}};it(n),at(n)},[]),sa=(0,U.useCallback)(e=>{let t=Cr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe(),showImages:e}};it(n),at(n)},[]),la=(0,U.useCallback)(e=>{let t=Cr.current;if(!t)return;let n={...t,defaultView:{...t.defaultView??xe(),imageStripHeight:e}};it(n),at(n)},[]),ua=(0,U.useCallback)((e,t,n,r)=>{let i=J.current.tabs.find(t=>t.id===e);if(!i||g_(i)!==`files`||!i.listing)return;let a=__(i),o=r?{...i.listing.tagColors,...r}:i.listing.tagColors,s=[...new Set([...i.listing.allTags,...n,...Object.keys(o)])].sort((e,t)=>e.localeCompare(t));Y(e,e=>e.listing?{listing:{...e.listing,tags:{...e.listing.tags,[t]:n},tagColors:o,allTags:s}}:e),Pe(a,t,n,r)},[Y]),da=(0,U.useCallback)((e,t)=>{let n=J.current.tabs.find(t=>t.id===e);if(!n)return;let r=b_(n,Cr.current?.defaultView??xe());ia(e,{sort:t,sortDescending:r.sort===t&&!r.sortDescending}),Z(e,__(n),!0)},[ia,Z]),fa=(0,U.useCallback)((e,t)=>{r(n=>{let r=n.findIndex(t=>t.id===e),i=n.findIndex(e=>e.id===t);if(r<0||i<0||r===i)return n;let a=[...n],[o]=a.splice(r,1);return a.splice(i,0,o),a})},[]),pa=(0,U.useCallback)(()=>{he().then(C,()=>C([]))},[]),ma=(0,U.useCallback)(e=>{let t=(e.openTabs??[]).map(Sl).filter(e=>e!==null);if(t.length===0)return!1;let n=t.map(e=>({...x_(e),fresh:!1})),i=Math.min(Math.max(e.activeTab??0,0),n.length-1);r(n),c(n[i].id);let a=n[i];return(g_(a)===`files`?Z(a.id,__(a),!0):Promise.resolve()).then(()=>{for(let e of n)e!==a&&g_(e)===`files`&&Z(e.id,__(e),!0)}),!0},[Z]),ha=(0,U.useCallback)(e=>{let t=Er.current;if(Er.current=[],t.length===0)return;let n=t.filter(e=>!d_.has(e));for(let e of t)n.includes(e)||f_(e);if(n.length===0)return;let{tabs:r}=J.current;if(!e&&r.length===1&&r[0].fresh){Qr(r[0].id,n[0]),f_(n[0]);for(let e of n.slice(1))ti(e),f_(e);return}let i=n.map(e=>{let t=ti(e);return f_(e),t}).at(-1);i&&setTimeout(()=>c(i),0)},[ti,Qr]),ga=(0,U.useCallback)(()=>{Ue().then(e=>{it(e),tt(e.recentLimit);let t=Dr(e.shortcuts);pt(t),Ar(Or(t,`openInNewTab`)),gt(e=>e+1),Tr.current||(Tr.current=!0,ha(e.restoreTabs&&ma(e)))},()=>{tt(10),Tr.current=!0,ha(!1)})},[ha,ma]),_a=(0,U.useCallback)(()=>{ke().then(Qe,()=>Qe([]))},[]),va=(0,U.useCallback)(()=>{De().then(ee,()=>ee([]))},[]),ya=t.filter(e=>!e.hidden),ba=ya.map(h_),xa=ba.join(`
`),Sa=Math.max(ya.findIndex(e=>e.id===o),0);(0,U.useEffect)(()=>{if(!B?.restoreTabs)return;let e=setTimeout(()=>void Me(ba,Sa),700);return()=>clearTimeout(e)},[xa,Sa,B?.restoreTabs]),(0,U.useEffect)(()=>{let{tabs:e,activeId:t}=J.current,n=e.find(e=>e.id===t);n&&n.fresh&&g_(n)===`files`&&Z(n.id,__(n),!0),pa(),ga(),va(),k().then(O,()=>O(null))},[Z,pa,ga,va]),(0,U.useEffect)(()=>{if(te().then(ie,()=>ie(null)),j.available)return j.on(e=>{let t=e;t.type===`update.checked`&&t.data&&ie(t.data)})},[]),(0,U.useEffect)(()=>{if(j.available)return j.on(t=>{let n=t;switch(n.type){case`share.pair.request`:n.data?.requestId&&n.data.code&&d({requestId:n.data.requestId,deviceName:n.data.deviceName??``,code:n.data.code});break;case`share.pair.code`:n.data?.code&&je(e(`pairing_code_code`,{code:n.data.code}));break;case`share.pair.result`:n.data?.ok===!1&&je(n.data.error??e(`pairing_failed`))}})},[e]),(0,U.useEffect)(()=>{let e=setInterval(va,3e4);return()=>clearInterval(e)},[va]),(0,U.useEffect)(()=>{G===`home`&&(_a(),va())},[G,W.id,_a,va]),(0,U.useEffect)(()=>{if(!j.available)return;let e=j.on(e=>{let t=e;if(t.type!==`app.navigate`||typeof t.data?.path!=`string`)return;let n=t.data.path,{tabs:r}=J.current,i=t.data.startup===!0;i&&d_.has(n)?f_(n):i&&!Tr.current?Er.current.includes(n)||Er.current.push(n):(i&&r.length===1&&r[0].fresh?Qr(r[0].id,n):xl(n)?Qr(v_(J.current),n):ti(n),i&&f_(n))});return j.send({type:`app.ready`}),e},[Qr,ti]),(0,U.useEffect)(()=>{if(j.available)return j.on(e=>{let t=e;if(t.type!==`fs.sizes`||typeof t.data?.path!=`string`||!t.data.sizes)return;let{path:n,sizes:i}=t.data;r(e=>e.some(e=>e.listing?.path===n)?e.map(e=>e.listing?.path===n?{...e,listing:{...e.listing,folderSizes:{...e.listing.folderSizes,...i}}}:e):e)})},[]),(0,U.useEffect)(()=>{if(j.available)return j.on(e=>{let t=e;if(t.type!==`fs.counts`||typeof t.data?.path!=`string`||!t.data.counts)return;let{path:n,counts:i}=t.data;r(e=>e.some(e=>e.listing?.path===n)?e.map(e=>e.listing?.path===n?{...e,listing:{...e.listing,counts:{...e.listing.counts,...i}}}:e):e)})},[]),(0,U.useEffect)(()=>{let e=e=>{if(Ir(e.target))return;if(e.key===`BrowserBack`){e.preventDefault(),Mi();return}if(e.key===`BrowserForward`){e.preventDefault(),Ni();return}if(e.key===`Escape`&&N.open){e.preventDefault(),lr();return}let t=Mr(e);if(X(V,`closeTab`,t)&&(e.preventDefault(),oi(v_(J.current))),X(V,`newTab`,t)&&(e.preventDefault(),ti()),X(V,`reopenTab`,t)&&(e.preventDefault(),si()),X(V,`goBack`,t)&&(e.preventDefault(),Mi()),X(V,`goForward`,t)&&(e.preventDefault(),Ni()),X(V,`goUp`,t)&&(e.preventDefault(),Pi()),X(V,`find`,t)&&(e.preventDefault(),G===`files`?ur():dr()),X(V,`location`,t)&&(e.preventDefault(),xt(e=>e+1)),X(V,`home`,t)){e.preventDefault();let t=h.find(e=>e.kind===`home`)?.path;t&&li(t)}X(V,`iconsView`,t)&&(e.preventDefault(),G===`files`&&aa({mode:`grid`})),X(V,`detailsView`,t)&&(e.preventDefault(),G===`files`&&aa({mode:`list`})),X(V,`nextTab`,t)&&(e.preventDefault(),di(1)),X(V,`previousTab`,t)&&(e.preventDefault(),di(-1)),X(V,`hidden`,t)&&(e.preventDefault(),Re().then(()=>{Ct(e=>e+1),Ii()})),X(V,`undo`,t)&&(e.preventDefault(),na(!0)),X(V,`redo`,t)&&(e.preventDefault(),na(!1)),X(V,`splitView`,t)?(e.preventDefault(),fi()):Object.keys(V).some(e=>e!==`openInNewTab`&&X(V,e,t))||G!==`files`||e.key.length!==1||e.key===` `||e.ctrlKey||e.altKey||e.metaKey||(e.preventDefault(),gr(e.key))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[V,G,N.open,oi,si,ti,Mi,Ni,Pi,ur,dr,lr,gr,aa,di,li,h,Ii,na,fi]),(0,U.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Mi()):(e.button===4||e.button===9)&&(e.preventDefault(),Ni())},t=e=>{(e.button===3||e.button===4||e.button===8||e.button===9)&&e.preventDefault()};return window.addEventListener(`mousedown`,e),window.addEventListener(`mouseup`,t),window.addEventListener(`auxclick`,t),()=>{window.removeEventListener(`mousedown`,e),window.removeEventListener(`mouseup`,t),window.removeEventListener(`auxclick`,t)}},[Mi,Ni]),(0,U.useEffect)(()=>{if(j.available)return j.on(e=>{let t=e;if(t.type===`app.navigation`)switch(t.data?.direction){case`back`:Mi();break;case`forward`:Ni()}})},[Mi,Ni]);let Ca=(0,U.useMemo)(()=>{let e=new Set;for(let n of t){if(g_(n)!==`files`)continue;let t=__(n);if(t&&!Ts(t)){if(y(t)){let n=C_(p(t));n&&e.add(n)}else e.add(t)}}return[...e]},[t]),wa=Ca.join(`\0`);(0,U.useEffect)(()=>{j.available&&j.send({type:`fs.watch`,payload:{paths:Ca,owner:`app`}})},[wa,o]);let Ta=g_(q)===`files`?__(q):``;(0,U.useEffect)(()=>{j.available&&j.send({type:`fs.focus`,payload:{path:Ta||null}})},[Ta]),(0,U.useEffect)(()=>{if(j.available)return j.on(e=>{let t=e;if(t.type!==`fs.changed`||typeof t.data?.path!=`string`)return;let r=t.data.path,i=J.current.tabs.filter(e=>g_(e)===`files`&&n(__(e),r)),a=J.current.tabs.filter(e=>{let t=__(e);return g_(e)===`files`&&t.length>0&&y(t)&&n(p(t),r)});if(i.length!==0||a.length!==0){st(r);for(let e of a){let t=J.current.tabs.find(t=>t.id===e.id),i=t?__(t):``;t&&g_(t)===`files`&&!t.loading&&y(i)&&n(p(i),r)&&Z(e.id,i,!0)}i.length!==0&&Oe(r,!1,Gn).then(e=>{for(let t of i){let r=J.current.tabs.find(e=>e.id===t.id);r&&g_(r)===`files`&&n(__(r),e.path)&&(r.loading?window.setTimeout(()=>{let r=J.current.tabs.find(e=>e.id===t.id);r&&!r.loading&&g_(r)===`files`&&n(__(r),e.path)&&Y(t.id,()=>({listing:e}))},300):Y(t.id,()=>({listing:e})))}},()=>void 0)}})},[Gn,Z,Y]);let Ea=W.index>0,Da=W.index<W.history.length-1,Oa=(e,t)=>{let r=b_(e,Vn),i=e.listing?.path??e.history[e.index]??``,a=y(i),o=a&&x(i);return(0,Q.jsx)(Zs,{platform:E?.platform,confirmDelete:B?.confirmDelete??rt().confirmDelete,cutPaths:Cn,previewVideoAudio:B?.previewVideoAudio??rt().previewVideoAudio,previewVideoAutoplay:B?.previewVideoAutoplay??rt().previewVideoAutoplay,showDetails:!1,onPreviewInfo:t?kt:jt,onActivate:()=>H(t?`primary`:`secondary`),enableShortcuts:(!Rn||(t?Lt===`primary`:Lt===`secondary`))&&(!a||o),error:e.error,find:e.id===q.id?{...N,currentPath:cr<0?null:sr[cr]}:void 0,selectMatchesToken:e.id===q.id?Ee:0,imageStripHeight:nr,listing:e.listing,loading:e.loading,onImageStripHeight:la,readOnly:a&&!o||Ts(e.listing?.path??``),onOpen:(t,n)=>{n?ti(t):Z(e.id,t)},onOpenFile:(t,n)=>{Ts(t)?As(t).catch(e=>void je(S_(e))):S(t)?B?.archiveHandler??rt().archiveHandler?n?ti(t):Z(e.id,t):Ae(t):y(t)?(async()=>{let e=await Ce(t,R.current,T_(t));if(!e.path&&ve(e.error)){let n=p(t),r=_e(n);r&&Ke(n);let i=await Ze(n,!!r);i&&(F(n,i),e=await Ce(t,R.current,i))}e.path?Ae(e.path):e.error&&je(e.error)})():Ae(t)},onRefresh:()=>{let t=e.listing?.path;t&&ni(t)},onLoadMore:()=>void zr(e.id),onEnsureComplete:()=>void qr(e.id),selectAllToken:e.id===q.id?Ur:0,onRename:ri,onSelectionCountChange:t?Oi:ki,onSetTags:(t,n,r)=>ua(e.id,t,n,r),selectionMenuRequest:t?Qt.primary:Qt.secondary,onSort:t=>da(e.id,t),onPaste:Zi,onClipboardChanged:()=>void Gi(),onTransfer:ea,onAddToTray:e=>void Ri(e),onAddFavorite:e=>void Bi(e),onRemoveFavorite:e=>void Vi(e),favoritePaths:lt,onExtractArchive:(e,t)=>void Ia(e,t),onOpenAsArchive:e=>void Fa(e),onAddToStartMenu:(e,t,n)=>void Pa(e,t,n),openOnSingleClick:B?.openOnSingleClick??rt().openOnSingleClick,pendingRename:en&&t===(Lt===`primary`)&&n(en.directory,e.listing?.path??``)?en.path:null,pendingRenameToken:en?.token??0,refreshToken:St,shortcuts:V,showCheckboxes:B?.showCheckboxes??rt().showCheckboxes,showImages:er,view:r})},ka=N.open&&(0,Q.jsx)(Wf,{current:cr,focusToken:Se,matchCase:N.matchCase,mode:N.mode,onClose:lr,onMatchCase:()=>pe(e=>({...e,matchCase:!e.matchCase})),onMode:()=>pe(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>_r(1),onPrevious:()=>_r(-1),onQuery:e=>pe(t=>({...t,query:e})),onRegex:()=>pe(e=>({...e,regex:!e.regex})),query:N.query,regex:N.regex,total:sr.length,onSelectMatches:sr.length>0?()=>I(e=>e+1):void 0}),Aa=G===`files`&&y(Fn),ja=Aa&&x(Fn),Ma=Aa&&W.listing?.archiveEncrypted===!0,Na=async(t,n,r=!1)=>{let i=p(t),a=await ge(i,n,R.current,T_(i),r);if(!a.ok&&ve(a.error)){let e=_e(i);e&&Ke(i);let t=await Ze(i,!!e);t&&(F(i,t),a=await ge(i,n,R.current,t,r))}a.ok?(ni(n),le(),Z(W.id,n,!0)):je(`${e(`could_not_extract_the_archive`)}${a.error?`\n${a.error}`:``}`)},Pa=async(t,n,r)=>{let i=await Jn(t,n,r);i.ok?r&&!i.pinned&&je(i.error??e(`the_shortcut_was_added_but_windows_did_not_pin_it`)):je(i.error??e(`could_not_add_the_shortcut`))},Fa=async t=>{await ut(t)?(a(t),Z(W.id,t)):je(e(`this_file_could_not_be_opened_as_an_archive`))},Ia=async(e,t)=>{let r=p(e),i=C_(r);if(!i)return;let a=t.endsWith(`-delete`),o=a?t.slice(0,-7):t;if(o===`choose`){let e=await $r(i);e&&await Na(r,e);return}let s=o===`named`;if(o===`auto`){let e=n(r,Fn)?W.listing?.entries??[]:(await Oe(r,!1,!1,R.current,T_(r))).entries;s=!(e.length===1&&e[0].isDirectory)}let c=i.includes(`\\`)?`\\`:`/`,l=s?`${i.replace(/[\\/]+$/,``)}${c}${w_(r)}`:i;await Na(r,l,a)},Ra=async e=>{Aa&&await Ia(Fn,e)},za=async()=>{Aa&&await Ia(Fn,`choose`)},Ba=(0,Q.jsxs)(M_,{children:[(0,Q.jsx)(N_,{"data-shortcut":Pr(V.goBack),disabled:!Ea,onClick:e=>{W.index>0&&jr(e)?ti(W.history[W.index-1]):Mi()},onContextMenu:e=>{W.index<=0||(e.preventDefault(),Wt({x:e.clientX,y:e.clientY,tab:W,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Q.jsx)(un,{})}),(0,Q.jsx)(N_,{"data-shortcut":Pr(V.goForward),disabled:!Da,onClick:e=>{W.index<W.history.length-1&&jr(e)?ti(W.history[W.index+1]):Ni()},onContextMenu:e=>{W.index>=W.history.length-1||(e.preventDefault(),Wt({x:e.clientX,y:e.clientY,tab:W,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Q.jsx)(Jt,{})}),(0,Q.jsx)(N_,{"data-shortcut":Pr(V.goUp),disabled:G!==`files`||!In,onClick:e=>{In&&(jr(e)?ti(In):li(In))},title:e(`up_one_level`),type:`button`,children:(0,Q.jsx)(Ft,{})}),(0,Q.jsx)(Zf,{focusToken:yt,icon:rr,label:G===`files`?void 0:e(gl[G]),onContextMenu:G===`files`?(e,t,n)=>Kt({x:t,y:n,path:e}):void 0,onNavigate:li,path:G===`files`?Fn:Pn}),G===`files`&&(!Aa||ja)&&(0,Q.jsx)(N_,{onClick:e=>Ti(e,Fn,()=>void Z(W.id,Fn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Q.jsx)(It,{})}),(0,Q.jsx)(N_,{"data-shortcut":Pr(V.find),onClick:()=>G===`files`?ur():dr(),title:e(`search`),type:`button`,children:(0,Q.jsx)(zt,{})}),Xt.primary>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)($g,{}),(0,Q.jsx)(N_,{onClick:e=>Ai(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,Q.jsx)(ln,{})})]}),(0,Q.jsx)(`span`,{ref:dn,style:{display:`contents`}}),Aa&&(0,Q.jsxs)(P_,{children:[(0,Q.jsx)($g,{}),Ma&&(0,Q.jsxs)(F_,{title:e(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Q.jsx)(bt,{size:12}),e(`encrypted`)]}),(0,Q.jsx)(N_,{onClick:()=>void za(),onContextMenu:e=>{e.preventDefault(),Ht({x:e.clientX,y:e.clientY})},title:e(`extract_archive`),type:`button`,children:(0,Q.jsx)(nn,{})}),(0,Q.jsx)(mi,{icon:(0,Q.jsx)(vt,{size:15}),onChange:e=>{let t=Number(e);Xe(t),R.current=t,Aa&&Z(W.id,Fn,!0)},options:m_.map(t=>({...t,label:e(t.label)})),tooltip:`${e(`archive_encoding`)}: ${e(m_.find(e=>e.value===String(Ye))?.label??`auto`)}`,value:String(Ye)})]})]}),Va=Ie.open?{...Ie,index:He}:null,Ha=t=>{let n=xl(t);return n?e(gl[n]):Gr(Xn,t,wl(t)||e(`files`))};return(0,Q.jsx)(Hr,{value:Xn,children:(0,Q.jsxs)(O_,{$rounded:oe,children:[(0,Q.jsx)($l,{settings:B,theme:ot}),(0,Q.jsx)(pg,{activeId:W.id,closedTabs:gn,onClose:oi,onNewTab:()=>ti(),onRestoreClosed:ci,onReorder:fa,onTransferToTab:ea,onSelect:c,onViewChange:aa,onColumns:oa,onShowImages:sa,showImages:er,tasks:rn,onClearTasks:ta,activityOpen:on,onActivityOpenChange:sn,trayCount:En.length+vn.length,trayVisible:wn,onToggleTray:$i,split:Rn,canSplit:G===`files`,onToggleSplit:fi,details:wt,canDetails:G===`files`||G===`recycle`||G===`gallery`,onToggleDetails:()=>Tt(e=>!e),currentFolder:G===`files`&&!Ts(Fn)?Fn:``,shortcuts:V,view:Un,tabs:t.filter(e=>!e.hidden).map(n=>{let r=g_(n),i=__(n),a=n.splitWith?t.find(e=>e.id===n.splitWith):void 0,o=a?__(a):``;return{id:n.id,kind:r,path:a?`${i}  |  ${o}`:i,place:r===`files`?Wr(Xn,i):void 0,archive:r===`files`&&y(i),split:!!a,title:r===`files`?Gr(Xn,i,v(i)||e(`files`)):e(gl[r]),partner:a?{title:Gr(Xn,o,v(o)||e(`files`)),place:Wr(Xn,o)}:void 0}})}),(0,Q.jsxs)(k_,{children:[(0,Q.jsx)(pp,{activeKind:G,currentPath:G===`files`?Pn:``,drives:w,historyVersion:dt,onNavigate:li,onOpenView:ai,homePath:h.find(e=>e.kind===`home`)?.path??``,places:h,recent:z,recentLimit:et,version:mt}),(0,Q.jsxs)(A_,{children:[(0,Q.jsxs)(V_,{children:[(0,Q.jsxs)(H_,{children:[G!==`files`&&Ba,(0,Q.jsx)(j_,{children:(0,Q.jsxs)(U.Suspense,{fallback:null,children:[G!==`files`&&Ie.open&&(0,Q.jsx)(Wf,{current:He,focusToken:ze,matchCase:Ie.matchCase,mode:Ie.mode,onClose:fr,onMatchCase:()=>Le(e=>({...e,matchCase:!e.matchCase})),onMode:()=>Le(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>hr(1),onPrevious:()=>hr(-1),onQuery:e=>Le(t=>({...t,query:e})),onRegex:()=>Le(e=>({...e,regex:!e.regex})),placeholder:e(`search`),query:Ie.query,regex:Ie.regex,total:We,onSelectMatches:G===`gallery`||G===`recycle`?()=>I(e=>e+1):void 0}),G===`files`?Rn&&K?(0,Q.jsxs)(L_,{ref:Ci,children:[(0,Q.jsxs)(R_,{style:{flex:f},children:[(0,Q.jsxs)(I_,{$active:Lt===`primary`,onPointerDown:()=>H(`primary`),children:[(0,Q.jsx)(N_,{"data-shortcut":Pr(V.goBack),disabled:!Ea,onClick:e=>{let t=W.index-1;t<0||(jr(e)?ti(W.history[t]):ei(W.id,W.history[t],t))},onContextMenu:e=>{W.index<=0||(e.preventDefault(),Wt({x:e.clientX,y:e.clientY,tab:W,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Q.jsx)(un,{})}),(0,Q.jsx)(N_,{"data-shortcut":Pr(V.goForward),disabled:!Da,onClick:e=>{let t=W.index+1;t>=W.history.length||(jr(e)?ti(W.history[t]):ei(W.id,W.history[t],t))},onContextMenu:e=>{W.index>=W.history.length-1||(e.preventDefault(),Wt({x:e.clientX,y:e.clientY,tab:W,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Q.jsx)(Jt,{})}),(0,Q.jsx)(N_,{"data-shortcut":Pr(V.goUp),disabled:!In,onClick:e=>{In&&(jr(e)?ti(In):Z(W.id,In))},title:e(`up_one_level`),type:`button`,children:(0,Q.jsx)(Ft,{})}),(0,Q.jsx)(Zf,{focusToken:Lt===`primary`?yt:void 0,onContextMenu:(e,t,n)=>Kt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?ti(e):void Z(W.id,e),path:Fn}),(0,Q.jsx)(N_,{onClick:e=>Ti(e,Fn,()=>void Z(W.id,Fn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Q.jsx)(It,{})}),(0,Q.jsx)(N_,{"data-shortcut":Pr(V.find),onClick:ur,title:e(`search`),type:`button`,children:(0,Q.jsx)(zt,{})}),Xt.primary>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)($g,{}),(0,Q.jsx)(N_,{onClick:e=>Ai(`primary`,e),title:e(`selection_menu`),type:`button`,children:(0,Q.jsx)(ln,{})})]})]}),Oa(W,!0),Lt===`primary`&&ka]}),(0,Q.jsx)(z_,{onDoubleClick:()=>m(.5),onPointerDown:wi,title:e(`drag_to_resize_double_click_to_reset`)}),(0,Q.jsxs)(R_,{$enter:!0,style:{flex:1-f},children:[(0,Q.jsxs)(I_,{$active:Lt===`secondary`,onPointerDown:()=>H(`secondary`),children:[(0,Q.jsx)(N_,{"data-shortcut":Pr(V.goBack),disabled:K.index<=0,onClick:e=>{let t=K.index-1;t<0||(jr(e)?ti(K.history[t]):ei(K.id,K.history[t],t))},onContextMenu:e=>{K.index<=0||(e.preventDefault(),Wt({x:e.clientX,y:e.clientY,tab:K,direction:`back`}))},title:e(`back`),type:`button`,children:(0,Q.jsx)(un,{})}),(0,Q.jsx)(N_,{"data-shortcut":Pr(V.goForward),disabled:K.index>=K.history.length-1,onClick:e=>{let t=K.index+1;t>=K.history.length||(jr(e)?ti(K.history[t]):ei(K.id,K.history[t],t))},onContextMenu:e=>{K.index>=K.history.length-1||(e.preventDefault(),Wt({x:e.clientX,y:e.clientY,tab:K,direction:`forward`}))},title:e(`forward`),type:`button`,children:(0,Q.jsx)(Jt,{})}),(0,Q.jsx)(N_,{"data-shortcut":Pr(V.goUp),disabled:!Bn,onClick:e=>{Bn&&(jr(e)?ti(Bn):Z(K.id,Bn))},title:e(`up_one_level`),type:`button`,children:(0,Q.jsx)(Ft,{})}),(0,Q.jsx)(Zf,{focusToken:Lt===`secondary`?yt:void 0,onContextMenu:(e,t,n)=>Kt({x:t,y:n,path:e}),onNavigate:(e,t)=>t?ti(e):void Z(K.id,e),path:zn}),(0,Q.jsx)(N_,{onClick:e=>Ti(e,zn,()=>void Z(K.id,zn,!0)),title:e(`new_folder_or_file`),type:`button`,children:(0,Q.jsx)(It,{})}),(0,Q.jsx)(N_,{"data-shortcut":Pr(V.find),onClick:ur,title:e(`search`),type:`button`,children:(0,Q.jsx)(zt,{})}),Xt.secondary>0&&(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)($g,{}),(0,Q.jsx)(N_,{onClick:e=>Ai(`secondary`,e),title:e(`selection_menu`),type:`button`,children:(0,Q.jsx)(ln,{})})]})]}),Oa(K,!1),Lt===`secondary`&&ka]})]}):(0,Q.jsxs)(Q.Fragment,{children:[Ba,(0,Q.jsxs)(B_,{children:[Oa(W,!0),ka]})]}):G===`home`?(0,Q.jsx)(o_,{platform:E?.platform,drives:w,find:Va,historyVersion:dt,onSearchMatches:Je,homePath:h.find(e=>e.kind===`home`)?.path??``,onDrivesChanged:va,onHistoryChanged:()=>ft(e=>e+1),onAddToTray:e=>void Ri(e),onAddFavorite:e=>void Bi(e),onRemoveFavorite:e=>void Vi(e),favoritePaths:lt,onExtractArchive:(e,t)=>void Ia(e,t),onOpenAsArchive:e=>void Fa(e),onAddToStartMenu:(e,t,n)=>void Pa(e,t,n),settingsVersion:mt,theme:ot,onOpen:li,onLayoutChanged:ga,onPlacesChanged:C,onRecentCleared:_a,places:h,recent:z,recentLimit:et,visibilityVersion:St}):G===`settings`?(0,Q.jsx)(s_,{appInfo:E,find:Va,focusSection:A,onSearchMatches:Je,onSettingsChanged:ga}):G===`gallery`?(0,Q.jsx)(c_,{platform:E?.platform,toolbarSlot:cn,onStatusChange:pn,confirmDelete:B?.confirmDelete??rt().confirmDelete,find:Va,onSearchMatches:Je,openOnSingleClick:B?.openOnSingleClick??rt().openOnSingleClick,onAddToTray:e=>void Ri(e),onAddFavorite:e=>void Bi(e),onRemoveFavorite:e=>void Vi(e),favoritePaths:lt,onExtractArchive:(e,t)=>void Ia(e,t),onOpenAsArchive:e=>void Fa(e),onAddToStartMenu:(e,t,n)=>void Pa(e,t,n),shortcuts:V,showCheckboxes:B?.showCheckboxes??rt().showCheckboxes,selectMatchesToken:Ee,onPreviewChange:gi,view:Un}):(0,Q.jsx)(l_,{find:Va,toolbarSlot:cn,onStatusChange:pn,onOpenLocation:li,onShowDetails:()=>Tt(!0),platform:E?.platform,selectMatchesToken:Ee,onPreviewChange:_i})]})},G)]}),(G===`files`||G===`gallery`||G===`recycle`)&&(0,Q.jsx)(ca,{emptyNote:e(`nothing_selected`),info:bi,onWidth:pi,open:wt,selectionNote:xi,videoAudio:B?.previewVideoAudio??rt().previewVideoAudio,videoAutoplay:B?.previewVideoAutoplay??rt().previewVideoAutoplay,width:Et})]}),(0,Q.jsxs)(q_,{children:[(0,Q.jsx)(`span`,{children:Si}),E?(0,Q.jsxs)(U_,{children:[(0,Q.jsxs)(`span`,{children:[`v`,E.version,` · `,E.platform]}),E.debug&&(0,Q.jsx)(K_,{children:`debug`}),re?.available&&(0,Q.jsxs)(W_,{onClick:e=>{ae(`updates`),ai(`settings`,jr(e))},title:e(`version_version_is_available`,{version:re.latest}),type:`button`,children:[(0,Q.jsx)(G_,{}),e(`update_available`)]})]}):(0,Q.jsx)(`span`,{children:e(`browser_preview`)})]})]})]}),(0,Q.jsx)(Yo,{clipboardItems:vn,clipboardMove:xn,currentDirectory:G===`files`?Pn:``,items:En,onAdd:e=>void Ri(e),onClear:Hi,onClose:()=>Tn(!1),onCopyToClipboard:e=>void Ki(e),onPosition:Qi,onRemove:zi,onTransfer:ea,position:jn,visible:wn}),Rt&&(0,Q.jsx)(ui,{creationOnly:!0,directory:Rt.directory,menu:{x:Rt.x,y:Rt.y,paths:[],background:!0},onClose:()=>Bt(null),onCreateFile:e=>void ji(e),onCreateFolder:e=>void ji(null,e),shortcuts:V}),Gt&&(0,Q.jsx)(ui,{allowCompression:!0,directory:C_(Gt.path)??Gt.path,menu:{x:Gt.x,y:Gt.y,paths:[Gt.path]},onAddToTray:e=>void Ri(e),onAddFavorite:e=>void Bi(e),onRemoveFavorite:e=>void Vi(e),favoritePaths:lt,onExtractArchive:(e,t)=>void Ia(e,t),onOpenAsArchive:e=>void Fa(e),onAddToStartMenu:(e,t,n)=>void Pa(e,t,n),onArchiveCreated:e=>{e&&ni(C_(Gt.path)??Gt.path)},onClose:()=>Kt(null),onCompressTo:(e,t)=>Yt({paths:e,name:t}),onCopy:(e,t)=>void Wn(e,t),onDelete:e=>void $n(e,!1).then(()=>ni(C_(Gt.path)??Gt.path)),onOpen:(e,t)=>t?ti(e):void Z(W.id,e),onOpenFile:e=>void Ae(e),onPaste:e=>void Qn(e).then(t=>{t.ok&&ni(e)}),onRefresh:()=>ni(Gt.path),shortcuts:V,target:{path:Gt.path,isDirectory:!0}}),qt&&(0,Q.jsx)(Di,{initialDirectory:C_(Gt?.path??Fn)??Fn,initialName:qt.name,onCancel:()=>Yt(null),onCompress:async e=>{let t=await vr(qt.paths,e);return!t.ok&&t.error&&je(t.error),t.ok}}),Ut&&(0,Q.jsx)(Ne,{items:[{label:Ha(Ut.tab.history[Ut.tab.index]??``),icon:(0,Q.jsx)(Cl,{location:Ut.tab.history[Ut.tab.index]??``}),tooltip:Ut.tab.history[Ut.tab.index]??``,disabled:!0,onSelect:()=>void 0},...Ut.tab.history.map((e,t)=>({path:e,index:t})).filter(({index:e})=>Ut.direction===`back`?e<Ut.tab.index:e>Ut.tab.index).sort((e,t)=>Ut.direction===`back`?t.index-e.index:e.index-t.index).slice(0,24).map(({path:e,index:t})=>({label:Ha(e),icon:(0,Q.jsx)(Cl,{location:e}),tooltip:e,onSelect:()=>{let n=Ut.tab;Wt(null),ei(n.id,e,t)}}))],onClose:()=>Wt(null),x:Ut.x,y:Ut.y}),Vt&&(0,Q.jsx)(Ne,{items:[{label:e(`extract_here`),onSelect:()=>void Ra(`here`)},{label:e(`extract_to_a_folder_named_after_the_archive`),onSelect:()=>void Ra(`named`)},{label:e(`auto_extract_to_the_current_folder`),onSelect:()=>void Ra(`auto`)},{label:e(`extract_here_and_delete`),separatorBefore:!0,onSelect:()=>void Ra(`here-delete`)},{label:e(`extract_to_a_folder_and_delete_archive`),onSelect:()=>void Ra(`named-delete`)},{label:e(`auto_extract_and_delete_archive`),onSelect:()=>void Ra(`auto-delete`)}],onClose:()=>Ht(null),x:Vt.x,y:Vt.y}),On&&(0,Q.jsx)(iu,{action:On.prompt.action,delaySeconds:On.prompt.delaySeconds,hits:On.prompt.hits,onCancel:()=>{On.resolve(!1),kn(null)},onConfirm:()=>{On.resolve(!0),kn(null)},permanent:On.prompt.permanent},On.id),(0,Q.jsx)(Su,{}),(0,Q.jsx)(Pf,{}),(0,Q.jsx)(Nf,{}),se&&(0,Q.jsx)(Nu,{request:se}),de&&(0,Q.jsx)(af,{conflicts:de.conflicts,move:de.move,defaultAction:B?.conflictDefaultAction??rt().conflictDefaultAction,remember:B?.conflictRememberChoice??rt().conflictRememberChoice,onResolve:e=>{de.resolve(e),fe(null)}}),u&&(0,Q.jsx)(Hg,{code:u.code,deviceName:u.deviceName,onAccept:()=>{Ss(u.requestId,!0),d(null)},onReject:()=>{Ss(u.requestId,!1),d(null)}}),(0,Q.jsx)(Ng,{}),(0,Q.jsx)(D,{})]})})}var O_=w.div`
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
`,k_=w.div`
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
`,A_=w.main`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    margin-left: 56px;
`,j_=w.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    ${Le}
`,M_=w.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,N_=Qg,P_=w.div`
    display: flex;
    align-items: center;
    gap: 7px;
    margin-left: auto;
`,F_=w.span`
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
`,I_=w.div`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: ${({$active:e})=>e?`rgba(var(--accent-rgb), 0.07)`:`rgba(var(--bg-rgb), 0.58)`};
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 140ms ease;
`,L_=w.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,R_=w.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    ${({$enter:e})=>e?z:``}
`,z_=w.div`
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
`,B_=w.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,V_=w.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,H_=w.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,U_=w.span`
    display: inline-flex;
    align-items: center;
    gap: 10px;
`,W_=w.button`
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
`,G_=w.span`
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--accent-primary);
    box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.22);
`,K_=w.span`
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
`,q_=w.footer`
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
`;document.documentElement.dataset.theme=re()?`dark`:`light`;var J_=typeof CSS<`u`&&(CSS.supports(`backdrop-filter`,`blur(1px)`)||CSS.supports(`-webkit-backdrop-filter`,`blur(1px)`));document.documentElement.classList.toggle(`backdrop-blur`,J_),window.addEventListener(`pagehide`,it);var Y_=document.getElementById(`root`),X_=new URLSearchParams(window.location.search),Z_=X_.get(`picker`),Q_=X_.get(`filter`)??``,$_=Z_===`folder`||Z_===`file`||Z_===`save`?(0,U.lazy)(()=>a_(()=>import(`./PickerWindow-SqZS5pXV.js`).then(e=>({default:e.PickerWindow})),__vite__mapDeps([10,1,2,3,4,5,8,0,6]))):null;Y_&&R().then(e=>{Cr(e.shortcuts),l(e.timeFormat,e.timeFormatPattern)}).catch(()=>void 0).then(()=>{lt(),(0,Tn.createRoot)(Y_).render((0,Q.jsx)(U.StrictMode,{children:(0,Q.jsx)(ae,{children:$_===null?(0,Q.jsx)(D_,{}):(0,Q.jsx)(U.Suspense,{fallback:null,children:(0,Q.jsx)($_,{defaultExtension:X_.get(`ext`)??``,extensions:Q_?Q_.split(`;`).filter(Boolean):[],types:X_.get(`types`)??``,typeIndex:Number(X_.get(`type`)??0)||0,initial:X_.get(`initial`)??``,initialName:X_.get(`name`)??``,mode:Z_===`folder`?`folder`:`file`,multiple:X_.get(`multiple`)===`1`,save:Z_===`save`})})})}))});export{Ur as $,Fs as A,Oo as B,Tl as C,js as D,Ps as E,Is as F,za as G,Qa as H,zs as I,ui as J,La as K,Cs as L,bs as M,Ls as N,Rs as O,Ns as P,Wr as Q,Ds as R,Cl as S,Hs as T,Ba as U,so as V,Ma as W,$r as X,ei as Y,Yr as Z,Pl as _,W as _t,Vg as a,Er as at,Bl as b,pp as c,Wn as ct,Nf as d,tr as dt,Mr as et,ku as f,kn as ft,Fl as g,jn as gt,Ql as h,Nn as ht,Rg as i,Tr as it,xs as j,Ms as k,Zf as l,Zn as lt,iu as m,An as mt,Qg as n,Nr as nt,Xh as o,Y as ot,Su as p,Dn as pt,mi as q,$g as r,Dr as rt,Jh as s,jr as st,a_ as t,wr as tt,Wf as u,ar as ut,Il as v,On as vt,Zs as w,Ml as x,zl as y,Bo as z};