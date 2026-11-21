import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,p as r,u as i,v as a}from"./dist-Qlc4nr7c.js";import{C as o,E as s,J as c,O as l,S as u,Y as d,_ as f,a as p,b as m,bt as h,dt as g,ft as _,ht as v,i as y,mt as b,o as x,p as S,pt as C,s as w,t as T,u as E,ut as D,w as ee,x as te}from"./selectionMenu-B_JCzuLZ.js";import{C as O,E as k,T as ne,b as re,d as ie,g as A,k as j,m as M,w as ae,y as oe}from"./theme-CNvw-6kp.js";import{$ as se,B as ce,C as N,E as P,F as le,H as ue,I as de,J as fe,K as F,M as I,N as pe,O as L,P as me,R as he,S as R,T as ge,W as _e,X as ve,Y as ye,_ as be,_t as xe,at as z,b as Se,bt as Ce,c as we,d as Te,et as Ee,f as De,ft as Oe,g as B,gt as ke,h as Ae,i as je,it as Me,j as V,l as Ne,lt as Pe,n as Fe,nt as Ie,o as Le,ot as Re,p as ze,pt as H,rt as Be,s as Ve,t as He,tt as Ue,u as We,ut as Ge,v as U,vt as Ke,w as W,x as G,xt as qe,y as Je,z as Ye}from"./Icons-C2hg-nwk.js";var K=e(a(),1),Xe=null,Ze=new Set;function Qe(e){Xe=e,Ze.forEach(e=>e(Xe))}function $e(){Xe=null,Ze.forEach(e=>e(null))}function et(){let[e,t]=(0,K.useState)(Xe);return(0,K.useEffect)(()=>(Ze.add(t),()=>{Ze.delete(t)}),[]),e}async function tt(e,t=!1){return!r.available||e.length===0?!1:(await r.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function nt(){return r.available?(await r.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function rt(){return r.available?await r.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function it(e,t,n){return!r.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await q({action:n?`move`:`write`},i=>r.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:i}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function q(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await h({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function at(e){return!r.available||e.length===0?[]:(await r.request(`fs.paths.info`,{paths:e})).entries}async function ot(e,t=!1){return r.available?await q({action:t?`move`:`write`},t=>r.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function st(e,t=!1,n=!1){if(!r.available||e.length===0)return{ok:!1,error:null};let i=await r.request(`fs.operation.delete`,{paths:e,permanent:t,runningConfirmed:n}),a=!1;for(let o=0;o<2&&i.required&&i.token&&i.protected?.length;o++){if(!await h({hits:i.protected,delaySeconds:i.delaySeconds??5,action:`delete`,permanent:t})){a=!0;break}i=await r.request(`fs.operation.delete`,{paths:e,permanent:t,runningConfirmed:n,confirm:i.token})}return a?{...i,ok:!1,cancelled:!0}:i}async function ct(e,t){return r.available?await q({action:`rename`},n=>r.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function lt(e,t=!1){return r.available?await r.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function ut(e){if(!r.available)return null;let t=await r.request(`fs.caseSensitive.get`,{path:e});return t.ok?t.enabled:null}async function dt(e,t){return r.available?await r.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function ft(e,t,n){return r.available?await r.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function pt(e,t){return r.available?await r.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function mt(e){if(!r.available||e.length===0)return;let t=await r.request(`fs.operation.properties`,{paths:e});!t.system&&t.items?.length&&Qe({items:t.items,canUseSystemSheet:!!t.canUseSystemSheet})}async function ht(e){r.available&&e.length!==0&&await r.request(`fs.operation.systemProperties`,{paths:e})}async function gt(e){return!r.available||e.length===0?{ok:!1,error:null}:await r.request(`fs.share`,{paths:e})}async function _t(e){r.available&&await r.request(`fs.operation.openWith`,{path:e})}async function vt(e){r.available&&await r.request(`fs.operation.terminal`,{path:e})}async function yt(e){return r.available?await r.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function bt(e,t){return r.available?(await r.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function xt(){return r.available?await r.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function St(){return r.available?await r.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function Ct(e){r.available&&await r.request(`fs.operation.showInExplorer`,{path:e})}async function wt(e){return!r.available||e.length===0?{verbs:[],safe:!0}:await r.request(`shell.verbs`,{paths:e})}async function Tt(e,t,n,i){r.available&&e.length!==0&&await r.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:i})}async function Et(e,t){return!r.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await r.request(`fs.operation.compress`,{...t,paths:e})}var Dt={goBack:[`alt+arrowleft`],goForward:[`alt+arrowright`],goUp:[`alt+arrowup`],find:[`ctrl+f`],closeTab:[`ctrl+w`],newTab:[`ctrl+t`],reopenTab:[`ctrl+shift+t`],copy:[`ctrl+c`],cut:[`ctrl+x`],paste:[`ctrl+v`],duplicate:[`ctrl+d`],undo:[`ctrl+z`],redo:[`ctrl+shift+z`],delete:[`delete`],deletePermanently:[`shift+delete`],rename:[`f2`],selectAll:[`ctrl+a`],invertSelection:[`ctrl+shift+a`],open:[`enter`],newFolder:[`ctrl+shift+n`],properties:[`alt+enter`],home:[`alt+home`],location:[`ctrl+l`],iconsView:[`ctrl+1`],detailsView:[`ctrl+2`],nextTab:[`ctrl+tab`],previousTab:[`ctrl+shift+tab`],terminal:[`f4`],hidden:[`ctrl+h`,`alt+.`],splitView:[`f3`],openInNewTab:[`ctrl`]};function Ot(e){return(e??``).split(`|`).map(e=>e.trim()).filter(Boolean)}function kt(e){return e.join(`|`)}function At(e){let t={};for(let[n,r]of Object.entries(e))t[n]=kt(r);return t}function jt(e){let t={...Dt};for(let[n,r]of Object.entries(e??{}))n in t&&(t[n]=Ot(r));return t}function Mt(e,t,n){return e[t]?.includes(n)??!1}function Nt(e,t){return e[t]?.[0]??``}var Pt=Nt(Dt,`openInNewTab`);function Ft(e){Pt=e.trim()}function It(e){let t=Pt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Lt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Rt(e){return e.split(`+`).filter(Boolean).map(e=>Bt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}function zt(e){return(e??[]).filter(Boolean).map(Rt).join(` / `)}var Bt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Vt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Ht=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],Ut={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`,`.tga`,`.dds`,`.hdr`,`.exr`,`.pcx`,`.dib`,`.jxl`,`.jpe`,`.jfif`,`.apng`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Wt(e){let t=Kt(e);for(let{kind:e}of Ht)if(Ut[e].has(t))return e;return null}function Gt(e){return Wt(e)!==null}function Kt(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var qt=(0,K.createContext)({places:{},useIcons:!1}),Jt=qt.Provider;function Yt(){return(0,K.useContext)(qt)}function Xt(e,t){return e.places[O(t)]}function J(e,t,n){return Xt(e,t)?.name||n}var Y=n(),X={file:V,folder:I,text:xe,code:B,image:ue,video:Ce,audio:Le,archive:Fe,pdf:Ee,executable:L,font:pe,database:G,config:be,spreadsheet:Oe,presentation:Re,document:N},Zt={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Qt(e){let t=e.lastIndexOf(`.`);return t>0?Zt[e.slice(t).toLowerCase()]??`file`:`file`}function $t({name:e,size:t}){let n=X[e??`file`]??V;return(0,Y.jsx)(n,{size:t})}var en={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function tn(e,t,n,r){let i=e.toLowerCase();if(i.endsWith(`.lnk`))return r(`shortcut`);if(i.endsWith(`.url`)||i.endsWith(`.website`))return r(`internet_shortcut`);if(n!=null)return r(t?`folder_link`:`symbolic_link`);if(t)return r(`folder`);let a=e.lastIndexOf(`.`),o=a>0&&a<e.length-1?e.slice(a+1).toUpperCase():``,s=r(en[Qt(e)]??`file`);return o.length>0?`${o} ${s}`:r(`file`)}async function nn(e,t,n){return r.available?(await r.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function rn(e){return nn(`folder`,[],e??``)}function an(e){return nn(`file`,e??[],``)}var on=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],sn=null,cn=0,ln=new Set;function un(){cn+=1;for(let e of ln)e()}function dn(e){return ln.add(e),()=>ln.delete(e)}function fn(){return cn}function pn(e){sn=e,un()}function mn(){return(0,K.useSyncExternalStore)(dn,fn,fn),sn}function hn({menu:e,directory:t,target:n,shortcuts:r,canPaste:a=!1,onClose:o,onOpen:s,onOpenFile:c,onSelectEntry:l,onOpenExternally:u,onRename:d,onDelete:m,onCopy:h,onPaste:g,onCreateFolder:_,onCreateFile:v,creationOnly:y=!1,onRefresh:b,onAddToTray:x,onAddFavorite:S,onRemoveFavorite:C,favoritePaths:w,onExtractArchive:T,allowCompression:E=!1,platform:D,onCompressTo:ee,onArchiveCreated:te}){let k=i(),ne=mn(),A=oe(t),j=D===`windows`,[M,ae]=(0,K.useState)({verbs:[],safe:!0,loading:!1}),[ce,N]=(0,K.useState)({recommended:[],other:[],loading:!1}),[P,ue]=(0,K.useState)(null),de=(0,K.useRef)(0),fe=(0,K.useRef)(0),F=e?.paths.length===1,pe=e?.background?t?[t]:[]:e?.paths??[],me=e?.background?t||null:F&&n?.isDirectory?n.path:null;if((0,K.useEffect)(()=>{if(!e){ae({verbs:[],safe:!0,loading:!1}),N({recommended:[],other:[],loading:!1});return}let t=++de.current;ae({verbs:[],safe:!0,loading:j&&pe.length>0&&!A}),j&&pe.length>0&&!A&&wt(pe).then(e=>{de.current===t&&ae({...e,loading:!1})},()=>{de.current===t&&ae({verbs:[],safe:!0,loading:!1})});let r=++fe.current;!A&&F&&n&&j?(N({recommended:[],other:[],loading:!0}),yt(n.path).then(e=>{fe.current===r&&N({...e,loading:!1})},()=>{fe.current===r&&N({recommended:[],other:[],loading:!1})})):N({recommended:[],other:[],loading:!1})},[e,F,n?.path,n?.isDirectory,pe.length,A]),(0,K.useEffect)(()=>{if(!e||A||!me){ue(null);return}let t=!0;return ut(me).then(e=>{t&&ue(e)},()=>{t&&ue(null)}),()=>{t=!1}},[e,me,A]),!e)return null;let R=[],ge=[],_e=new Set((w??[]).map(O)),ye=e.background?t?[t]:[]:e.paths,be=ye.length>0&&ye.every(e=>_e.has(O(e))),xe=()=>n?Ce(n.path,n.isDirectory):`Archive`,Ce=(e,t)=>{let n=ie(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},we=async(e,n=xe())=>{let r=await Et(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?te?.(r.path,!0):f(r.error??k(`could_not_create_the_archive`))},Ee=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},De=async()=>{if(!me||P===null)return;let e=await dt(me,!P);e.ok?(ue(e.enabled),b?.()):f(e.error??k(`could_not_change_the_case_sensitivity`))},Oe=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await ft(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await ft(e,t,`${a}\\${_n(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?b?.():f(o.error??k(`could_not_create_the_link`))},B=async e=>{if(!n)return;let r=await rn(t);r&&await Oe(e,n.path,r,ie(n.path),e.endsWith(`-copy`))},Ae=async e=>{let n=ne?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=O(a)===O(t);await Oe(n,r.path,t,ie(r.path),i&&!o)}},Me=async()=>{let t=(await at(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&pn({paths:t})},Ne=()=>{let e=ne?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:k(`cancel_selected_link`),icon:(0,Y.jsx)(Je,{size:14}),onSelect:()=>pn(null)},...t?[{label:k(`hard_link`),icon:(0,Y.jsx)(V,{size:14}),separatorBefore:!0,onSelect:()=>void Ae(`hard`)}]:[],{label:k(`symbolic_link`),icon:(0,Y.jsx)(V,{size:14}),separatorBefore:!t,onSelect:()=>void Ae(`symbolic-file`)},...n?[...j?[{label:k(`directory_junction`),icon:(0,Y.jsx)(I,{size:14}),onSelect:()=>void Ae(`junction`)}]:[],{label:k(`smart_copy`),icon:(0,Y.jsx)(U,{size:14}),separatorBefore:!0,onSelect:()=>void Ae(`smart-copy`)},{label:k(`smart_mirror`),icon:(0,Y.jsx)(U,{size:14}),onSelect:()=>void Ae(`smart-mirror`)},{label:k(`multi_version_smart_copy`),icon:(0,Y.jsx)(U,{size:14}),onSelect:()=>void Ae(`multi-version-smart-copy`)},{label:k(`hardlink_copy`),icon:(0,Y.jsx)(U,{size:14}),separatorBefore:!0,onSelect:()=>void Ae(`hard-copy`)},{label:k(`symbolic_link_copy`),icon:(0,Y.jsx)(U,{size:14}),onSelect:()=>void Ae(`symbolic-copy`)}]:[]]};if(e.background){if(_&&ge.push({label:k(`new_folder`),icon:(0,Y.jsx)(z,{size:16}),shortcut:zt(r.newFolder),onSelect:_}),v||_){let e=[];_&&(e.push({label:k(`folder`),icon:(0,Y.jsx)(I,{size:14}),onSelect:()=>_(!1)}),!A&&j&&e.push({label:k(`case_sensitive_folder`),icon:(0,Y.jsx)(We,{size:14}),onSelect:()=>_(!0)})),v&&e.push(...on.map((e,t)=>({label:`${k(e.label)} (${e.extension})`,icon:(0,Y.jsx)(V,{size:14}),separatorBefore:t===0,onSelect:()=>v(e.extension)}))),R.push({label:k(`new`),icon:(0,Y.jsx)(z,{size:14}),children:e,onSelect:()=>void 0})}if(A||R.push({label:k(`create_link`),icon:(0,Y.jsx)(Ge,{size:14}),disabled:!ne,children:Ne(),onSelect:()=>void 0}),y)return(0,Y.jsx)(p,{items:R,onClose:o,quick:ge,x:e.x,y:e.y});!A&&s&&R.push({label:k(`open_in_new_tab`),icon:(0,Y.jsx)(z,{size:14}),onSelect:()=>s(t,!0)}),R.push({label:k(`copy_as_path`),icon:(0,Y.jsx)(U,{size:14}),onSelect:()=>void Ee([t])}),x&&R.push({label:k(`add_to_file_tray`),icon:(0,Y.jsx)(ve,{size:14}),onSelect:()=>x([t])}),!A&&(be?C:S)&&R.push({label:k(be?`remove_from_favorites`:`add_to_favorites`),icon:be?(0,Y.jsx)(Ye,{size:14}):(0,Y.jsx)(he,{size:14}),onSelect:()=>be?C?.([t]):S?.([t])}),!A&&P!==null&&R.push({label:k(`case_sensitive_names`),icon:(0,Y.jsx)(We,{size:14}),checked:P,onSelect:()=>void De()}),!A&&E&&(R.push({label:k(`open_in_terminal`),icon:(0,Y.jsx)(ke,{size:14}),onSelect:()=>void vt(t)}),R.push({label:k(j?`show_in_explorer`:`show_in_file_manager`),icon:(0,Y.jsx)(I,{size:14}),separatorBefore:!0,onSelect:()=>void Ct(t)})),g&&ge.push({label:k(`paste`),icon:(0,Y.jsx)(se,{size:16}),disabled:!a,shortcut:zt(r.paste),onSelect:()=>g(t)}),A||ge.push({label:k(`properties`),icon:(0,Y.jsx)(le,{size:16}),shortcut:zt(r.properties),onSelect:()=>void mt([t])})}else{if(l&&R.push({label:k(`choose`),icon:(0,Y.jsx)(Te,{size:14}),onSelect:()=>{l(n?e.paths.length>1?[...e.paths]:[n.path]:[...e.paths])}}),s&&R.push({label:k(`open`),icon:(0,Y.jsx)(je,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&(u??c)?.(n.path)}}),n?.isDirectory&&(s&&R.push({label:k(`open_in_new_tab`),icon:(0,Y.jsx)(z,{size:14}),onSelect:()=>s(n.path,!0)}),g&&R.push({label:k(`paste_into_folder`),icon:(0,Y.jsx)(se,{size:14}),disabled:!a,onSelect:()=>g(n.path)}),A||R.push({label:k(`open_in_terminal`),icon:(0,Y.jsx)(ke,{size:14}),onSelect:()=>void vt(n.path)})),!A&&F&&n&&!n.isDirectory&&re(n.path)&&T&&R.push({label:k(`extract_archive`),icon:(0,Y.jsx)(Fe,{size:14}),separatorBefore:!0,children:[{label:k(`extract_here`),icon:(0,Y.jsx)(Fe,{size:14}),onSelect:()=>T(n.path,`here`)},{label:k(`extract_to_a_folder_named_after_the_archive`),icon:(0,Y.jsx)(Fe,{size:14}),onSelect:()=>T(n.path,`named`)},{label:k(`auto_extract_to_the_current_folder`),icon:(0,Y.jsx)(Fe,{size:14}),onSelect:()=>T(n.path,`auto`)},{label:k(`extract_to`),icon:(0,Y.jsx)(I,{size:14}),separatorBefore:!0,onSelect:()=>T(n.path,`choose`)}],onSelect:()=>void 0}),!A&&j&&F&&n){let e=[];if(ce.loading)e.push({label:k(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of ce.recommended)e.push({label:t.name,group:k(`suggested_apps`),icon:t.icon?(0,Y.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Y.jsx)(L,{size:14}),onSelect:()=>void bt(n.path,t.path).then(e=>{e||_t(n.path)})});for(let t of ce.other)e.push({label:t.name,group:k(`other_apps`),icon:t.icon?(0,Y.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,Y.jsx)(L,{size:14}),onSelect:()=>void bt(n.path,t.path).then(e=>{e||_t(n.path)})})}e.push({label:k(`choose_another_app`),icon:(0,Y.jsx)(L,{size:14}),separatorBefore:!0,onSelect:()=>void _t(n.path)}),R.push({label:k(`open_with_2`),icon:(0,Y.jsx)(L,{size:14}),children:e,onSelect:()=>void _t(n.path)})}if(!A&&D===`windows`&&e.paths.length>0&&R.push({label:k(`share`),icon:(0,Y.jsx)(Ge,{size:14}),separatorBefore:!0,onSelect:()=>void gt(e.paths).then(e=>{e.ok||f(e.error??k(`could_not_open_the_share_sheet`))})}),A||R.push({label:k(`compress`),icon:(0,Y.jsx)(Fe,{size:14}),separatorBefore:!0,children:[{label:k(`compress_to_zip`),icon:(0,Y.jsx)(Fe,{size:14}),onSelect:()=>void we(e.paths)},{label:k(`compress_to`),icon:(0,Y.jsx)(Fe,{size:14}),onSelect:()=>ee?.(e.paths,xe())}],onSelect:()=>void 0}),!A&&(e?.paths.length??0)>0){let e=[{label:k(`select_link_source`),icon:(0,Y.jsx)(Ge,{size:14}),onSelect:()=>void Me()},...ne?[{label:k(`cancel_selected_link`),icon:(0,Y.jsx)(Je,{size:14}),onSelect:()=>pn(null)}]:[],...F&&n?n.isDirectory?[{label:k(`symbolic_link`),icon:(0,Y.jsx)(I,{size:14}),separatorBefore:!0,onSelect:()=>void B(`symbolic-folder`)},...j?[{label:k(`directory_junction`),icon:(0,Y.jsx)(I,{size:14}),onSelect:()=>void B(`junction`)}]:[],{label:k(`smart_copy`),icon:(0,Y.jsx)(U,{size:14}),separatorBefore:!0,onSelect:()=>void B(`smart-copy`)},{label:k(`smart_mirror`),icon:(0,Y.jsx)(U,{size:14}),onSelect:()=>void B(`smart-mirror`)},{label:k(`multi_version_smart_copy`),icon:(0,Y.jsx)(U,{size:14}),onSelect:()=>void B(`multi-version-smart-copy`)},{label:k(`hardlink_copy`),icon:(0,Y.jsx)(U,{size:14}),separatorBefore:!0,onSelect:()=>void B(`hard-copy`)},{label:k(`symbolic_link_copy`),icon:(0,Y.jsx)(U,{size:14}),onSelect:()=>void B(`symbolic-copy`)}]:[{label:k(`symbolic_link`),icon:(0,Y.jsx)(V,{size:14}),separatorBefore:!0,onSelect:()=>void B(`symbolic-file`)},{label:k(`hard_link`),icon:(0,Y.jsx)(V,{size:14}),onSelect:()=>void B(`hard`)}]:[]];R.push({label:k(`create_link`),icon:(0,Y.jsx)(Ge,{size:14}),children:e,onSelect:()=>void 0})}!A&&n?.isDirectory&&P!==null&&R.push({label:k(`case_sensitive_names`),icon:(0,Y.jsx)(We,{size:14}),checked:P,onSelect:()=>void De()}),R.push({label:k(`copy_as_path`),icon:(0,Y.jsx)(U,{size:14}),onSelect:()=>void Ee(e.paths)}),x&&R.push({label:k(`add_to_file_tray`),icon:(0,Y.jsx)(ve,{size:14}),onSelect:()=>x(e.paths)}),!A&&(be?C:S)&&R.push({label:k(be?`remove_from_favorites`:`add_to_favorites`),icon:be?(0,Y.jsx)(Ye,{size:14}):(0,Y.jsx)(he,{size:14}),onSelect:()=>be?C?.(ye):S?.(ye)}),A||R.push({label:k(j?`show_in_explorer`:`show_in_file_manager`),icon:(0,Y.jsx)(I,{size:14}),separatorBefore:!0,onSelect:()=>void Ct(ye[0])}),h&&ge.push({label:k(`cut`),icon:(0,Y.jsx)(Se,{size:16}),shortcut:zt(r.cut),onSelect:()=>h(e.paths,!0)},{label:k(`copy`),icon:(0,Y.jsx)(U,{size:16}),shortcut:zt(r.copy),onSelect:()=>h(e.paths,!1)}),F&&n&&d&&ge.push({label:k(`rename`),icon:(0,Y.jsx)(Ue,{size:16}),shortcut:zt(r.rename),onSelect:()=>d(n.path)}),m&&ge.push({label:k(`delete`),icon:(0,Y.jsx)(Ke,{size:16}),danger:!0,shortcut:zt(r.delete),onSelect:()=>m(e.paths)}),A||ge.push({label:k(`properties`),icon:(0,Y.jsx)(le,{size:16}),shortcut:zt(r.properties),onSelect:()=>void mt(e.paths)})}if(M.loading)R.push({label:k(`more_actions`),icon:(0,Y.jsx)(L,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(M.verbs.length>0){let e={items:[],children:new Map};for(let t of M.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,Y.jsx)(gn,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void Tt(pe,M.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,Y.jsx)(gn,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];R.push({label:k(M.safe?`more_actions`:`more_actions_extensions`),icon:(0,Y.jsx)(L,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,Y.jsx)(p,{items:R,onClose:o,quick:ge,x:e.x,y:e.y})}function gn({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,Y.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,Y.jsx)(je,{size:14});case`document`:return(0,Y.jsx)(N,{size:14});case`cut`:return(0,Y.jsx)(Se,{size:14});case`copy`:return(0,Y.jsx)(U,{size:14});case`paste`:return(0,Y.jsx)(se,{size:14});case`trash`:return(0,Y.jsx)(Ke,{size:14});case`pencil`:return(0,Y.jsx)(Ue,{size:14});case`gear`:return(0,Y.jsx)(le,{size:14});case`star`:return(0,Y.jsx)(H,{size:14});case`pin`:return(0,Y.jsx)(Be,{size:14});case`executable`:return(0,Y.jsx)(L,{size:14});case`share`:return(0,Y.jsx)(Ge,{size:14});case`arrow`:return(0,Y.jsx)(je,{size:14});default:return(0,Y.jsx)(He,{size:14})}}function _n(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}var vn=j();function Z({value:e,options:t,onChange:n,disabled:r,width:a,icon:o,tooltip:s,zIndex:c=3200}){let l=i(),[u,d]=(0,K.useState)(null),f=(0,K.useRef)(null),p=t.find(t=>t.value===e)??t[0];return(0,K.useEffect)(()=>{if(!u)return;let e=()=>d(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[u]),(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(yn,{$icon:o!==void 0,"aria-expanded":u!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(u){d(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;d({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:f,style:a&&!o?{width:a}:void 0,title:s??p?.title,type:`button`,children:[o===void 0?(0,Y.jsx)(bn,{children:p?.label??``}):(0,Y.jsx)(xn,{children:o}),o===void 0&&(0,Y.jsx)(Sn,{children:(0,Y.jsx)(De,{size:11})})]}),u&&(0,vn.createPortal)((0,Y.jsx)(Cn,{"aria-label":l(`options`),"data-select-menu":`true`,$menuZIndex:c,role:`listbox`,style:{bottom:u.bottom,left:u.left,minWidth:u.width,top:u.top},children:t.map(t=>(0,Y.jsxs)(Q,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),d(null)},role:`option`,title:t.title,type:`button`,children:[(0,Y.jsx)(wn,{children:t.label}),t.value===e&&(0,Y.jsx)(Te,{size:11})]},t.value))}),document.body)]})}var yn=t.button`
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
`,bn=t.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,xn=t.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,Sn=t.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,Cn=t.div`
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
    ${w}
`,Q=t.button`
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
`,wn=t.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Tn=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],En=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],Dn=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],On=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],kn=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function An({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let a=i(),o=(0,K.useRef)(null),[s,c]=(0,K.useState)(e),[l,u]=(0,K.useState)(t),[d,f]=(0,K.useState)(`zip`),[p,m]=(0,K.useState)(`5`),[h,g]=(0,K.useState)(`default`),[_,v]=(0,K.useState)(`none`),[y,b]=(0,K.useState)(``),[x,S]=(0,K.useState)(`0`),[C,w]=(0,K.useState)(!1);(0,K.useEffect)(()=>{o.current?.focus(),o.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=Tn.find(e=>e.value===d)??Tn[0],E=d===`zip`||d===`zipx`,D=_!==`none`,ee=E||d===`7z`,te=d===`zip`||d===`7z`,O=async()=>{if(C||!l.trim()||!s||D&&y.length===0)return;w(!0);let e=await r({directory:s,name:l.trim(),format:d,level:T.level?Number(p):0,method:E?h:null,encryption:ee?_:`none`,password:D?y:void 0,splitSize:te?Number(x):0});w(!1),e&&n()};return(0,vn.createPortal)((0,Y.jsx)(jn,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,Y.jsxs)(Mn,{"aria-modal":`true`,role:`dialog`,children:[(0,Y.jsx)(Nn,{children:a(`compress_to`)}),(0,Y.jsxs)(Pn,{children:[(0,Y.jsx)(Fn,{children:a(`archive_name`)}),(0,Y.jsx)(In,{onChange:e=>u(e.target.value),ref:o,value:l,onKeyDown:e=>{e.key===`Enter`&&O()}}),(0,Y.jsx)(Ln,{children:T.extension})]}),(0,Y.jsxs)(Pn,{children:[(0,Y.jsx)(Fn,{children:a(`format`)}),(0,Y.jsx)(Z,{onChange:e=>f(e),options:Tn.map(e=>({value:e.value,label:a(e.label)})),value:d,width:236,zIndex:3700})]}),(0,Y.jsxs)(Pn,{children:[(0,Y.jsx)(Fn,{children:a(`method`)}),(0,Y.jsx)(Z,{disabled:!E,onChange:g,options:En.map(e=>({...e,label:a(e.label)})),value:E?h:`default`,width:236,zIndex:3700})]}),(0,Y.jsxs)(Pn,{children:[(0,Y.jsx)(Fn,{children:a(`encryption`)}),(0,Y.jsx)(Z,{disabled:!ee,onChange:e=>{v(e),e===`none`&&b(``)},options:Dn.map(e=>({...e,label:a(e.label)})),value:ee?_:`none`,width:236,zIndex:3700})]}),D&&(0,Y.jsxs)(Pn,{children:[(0,Y.jsx)(Fn,{children:a(`password`)}),(0,Y.jsx)(In,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,Y.jsxs)(Pn,{children:[(0,Y.jsx)(Fn,{children:a(`split_volumes`)}),(0,Y.jsx)(Z,{disabled:!te,onChange:S,options:On.map(e=>({...e,label:a(e.label)})),value:te?x:`0`,width:236,zIndex:3700})]}),(0,Y.jsxs)(Pn,{children:[(0,Y.jsx)(Fn,{children:a(`compression_level`)}),(0,Y.jsx)(Z,{disabled:!T.level,onChange:m,options:kn.map(e=>({...e,label:a(e.label)})),value:T.level?p:d===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,Y.jsxs)(Pn,{$stack:!0,children:[(0,Y.jsx)(Fn,{children:a(`destination`)}),(0,Y.jsxs)(Rn,{children:[(0,Y.jsx)(zn,{title:s,children:s}),(0,Y.jsx)(Vn,{disabled:C,onClick:()=>void rn(s).then(e=>{e&&c(e)}),type:`button`,children:a(`choose_folder`)})]})]}),(0,Y.jsxs)(Bn,{children:[(0,Y.jsx)(Vn,{disabled:C,onClick:n,type:`button`,children:a(`cancel`)}),(0,Y.jsx)(Hn,{disabled:C||!l.trim()||D&&y.length===0,onClick:()=>void O(),type:`button`,children:a(C?`compressing`:`compress`)})]})]})}),document.body)}var jn=t.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${x}
`,Mn=t.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${E}
`,Nn=t.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Pn=t.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Fn=t.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,In=t.input`
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
`,Ln=t.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Rn=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,zn=t.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Bn=t.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,Vn=t.button`
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
`,Hn=t(Vn)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`;function Un({programs:e,message:t,confirmLabel:n,onCancel:r,onConfirm:a}){let o=i(),s=(0,K.useRef)(null);return(0,K.useEffect)(()=>{s.current?.focus();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),r()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[r]),(0,vn.createPortal)((0,Y.jsx)(Gn,{onPointerDown:e=>{e.target===e.currentTarget&&r()},children:(0,Y.jsxs)(Kn,{role:`alertdialog`,"aria-modal":`true`,children:[(0,Y.jsx)(qn,{children:o(`the_program_is_running`)}),(0,Y.jsx)(Jn,{children:t}),(0,Y.jsx)(Yn,{children:e.map(e=>(0,Y.jsx)(Wn,{program:e,title:o(`process_id_n`,{id:e.id})},e.id))}),(0,Y.jsxs)($,{children:[(0,Y.jsx)(rr,{onClick:r,ref:s,type:`button`,children:o(a?`cancel`:`ok`)}),a&&(0,Y.jsx)(rr,{$primary:!0,onClick:a,type:`button`,children:n??o(`delete`)})]})]})}),document.body)}function Wn({program:e,title:t}){let n=g(e.path,!1,!0);return(0,Y.jsxs)(Xn,{title:e.path,children:[(0,Y.jsx)(Zn,{children:n?(0,Y.jsx)(Qn,{alt:``,src:n}):(0,Y.jsx)($n,{})}),(0,Y.jsxs)(er,{children:[(0,Y.jsx)(tr,{children:e.name}),(0,Y.jsx)(nr,{children:t})]})]})}var Gn=t.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.76);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${x}
`,Kn=t.div`
    width: min(520px, 100%);
    padding: 18px 18px 14px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${E}
`,qn=t.h2`
    margin: 0 0 8px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Jn=t.p`
    margin: 0 0 10px;
    color: var(--text-secondary);
    font-size: 12px;
    line-height: 1.55;
`,Yn=t.div`
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
`,Xn=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    padding: 3px 0;
`,Zn=t.span`
    display: grid;
    flex: 0 0 auto;
    place-items: center;
    width: 20px;
    height: 20px;
`,Qn=t.img`
    width: 20px;
    height: 20px;
    object-fit: contain;
`,$n=t.span`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--text-muted);
`,er=t.span`
    display: flex;
    align-items: baseline;
    gap: 8px;
    min-width: 0;
`,tr=t.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nr=t.span`
    flex: 0 0 auto;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 10.5px;
`,$=t.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`,rr=t.button`
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
`,ir=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),ar=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),or=new Set([`png`,`jpg`,`jpeg`,`jfif`,`jpe`,`gif`,`webp`,`bmp`,`avif`,`ico`,`svg`,`apng`]),sr=new Set([`tif`,`tiff`,`psd`,`psb`,`tga`,`dds`,`hdr`,`exr`,`pcx`,`dib`,`jxl`]),cr=new Set([...or,...sr]),lr=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function ur({info:e,width:t,onWidth:n,open:r=!0,videoAudio:a,videoAutoplay:s,selectionNote:c,emptyNote:l}){let u=i(),[f,p]=(0,K.useState)(!1),[m,h]=(0,K.useState)(!1),[_,y]=(0,K.useState)(!1),[x,S]=(0,K.useState)(0),[w,T]=(0,K.useState)(0),[E,O]=(0,K.useState)(null),[k,ne]=(0,K.useState)(!1),[re,ie]=(0,K.useState)(!1),A=(0,K.useRef)(null),j=(0,K.useRef)(null),M=(0,K.useRef)(null),ae=(0,K.useRef)(null),[oe,se]=(0,K.useState)(()=>{let e=te(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ce=r?e?.path??null:null,N=D(ce),P=e?dr(e.name):``,le=!!e&&!e.isDirectory&&ir.has(P),ue=!!e&&!e.isDirectory&&ar.has(P),de=!!e&&!e.isDirectory&&cr.has(P),fe=!!e&&!e.isDirectory&&lr.has(P),F=!!e&&!e.isDirectory&&P===`pdf`,pe=v(le?N:null,512,e?.modified??0),L=de&&or.has(P),me=v(de&&!L?N:null,1024,e?.modified??0),he=C(L?N:null,e?.modified??0,P),R=C(le||ue?N:null,e?.modified??0,P),ge=b(F?N:null,e?.modified??0),_e=g(!le&&!ue&&!de&&!fe&&!F?N:null,e?.isDirectory??!1);if((0,K.useEffect)(()=>{p(!1),h(!1),y(!1),S(0),T(0),ie(!1)},[ce]),(0,K.useEffect)(()=>{if(!N||!fe){O(null),ne(!1);return}let e=!0;return ne(!0),O(null),d(N).then(t=>{e&&(O(t),ne(!1))},()=>{e&&(O({text:null,truncated:!1,error:u(`could_not_read_this_file`)}),ne(!1))}),()=>{e=!1}},[N,fe]),!e&&!l)return null;let ve=e=>{M.current={x:e.clientX,width:j.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},ye=e=>{let t=M.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},be=e=>{M.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},xe=e=>{ae.current={y:e.clientY,height:oe},e.currentTarget.setPointerCapture(e.pointerId)},z=e=>{let t=ae.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);se(n),o(`yafm.preview.media.height`,n)},Se=e=>{ae.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,Y.jsxs)(pr,{$open:r,children:[r&&(0,Y.jsx)(mr,{onPointerDown:ve,onPointerMove:ye,onPointerUp:be,onDoubleClick:()=>n(320),title:u(`drag_to_resize_double_click_to_reset`)}),(0,Y.jsx)(hr,{ref:j,style:{width:r?t:0},children:(0,Y.jsxs)(gr,{children:[(0,Y.jsx)(I,{size:56}),(0,Y.jsx)(`span`,{children:l})]})})]});let Ce=()=>{let e=A.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,Y.jsxs)(pr,{$open:r,children:[r&&(0,Y.jsx)(mr,{onPointerDown:ve,onPointerMove:ye,onPointerUp:be,onDoubleClick:()=>n(320),title:u(`drag_to_resize_double_click_to_reset`)}),(0,Y.jsxs)(hr,{ref:j,style:{width:r?t:0},children:[(0,Y.jsx)(_r,{style:{height:oe},children:le&&R&&!f?(0,Y.jsxs)(yr,{onPointerEnter:()=>y(!0),onPointerLeave:()=>y(!1),children:[(0,Y.jsx)(`video`,{autoPlay:s,controls:!1,muted:!a,onClick:Ce,onDurationChange:e=>S(e.currentTarget.duration||0),onError:()=>p(!0),onLoadedMetadata:e=>{S(e.currentTarget.duration||0),T(e.currentTarget.currentTime)},onPause:()=>h(!1),onPlay:()=>h(!0),onTimeUpdate:e=>T(e.currentTarget.currentTime),playsInline:!0,poster:pe??void 0,preload:`metadata`,ref:A,src:R}),(0,Y.jsx)(br,{$visible:!m,onClick:Ce,title:u(`play`),type:`button`,children:(0,Y.jsx)(Me,{size:28})}),(0,Y.jsxs)(xr,{$visible:_,onClick:e=>e.stopPropagation(),children:[(0,Y.jsxs)(Sr,{children:[(0,Y.jsx)(`span`,{children:fr(w)}),(0,Y.jsx)(`span`,{children:fr(x)})]}),(0,Y.jsx)(Cr,{"aria-label":u(`seek`),max:x||0,min:0,onChange:e=>{let t=A.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,T(n)},step:.1,type:`range`,value:Math.min(w,x||0)})]})]}):ue&&R?(0,Y.jsx)(`audio`,{controls:!0,src:R}):de&&(he??me)?(0,Y.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:he??me}):F&&ge&&!re?(0,Y.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>ie(!0),src:ge}):F?(0,Y.jsx)(V,{size:64}):fe?(0,Y.jsx)(wr,{children:k||!E?(0,Y.jsx)(Er,{children:u(`loading`)}):E.error?(0,Y.jsx)(Er,{children:E.error}):(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Tr,{children:E.text}),E.truncated&&(0,Y.jsx)(Er,{children:u(`showing_the_first_256_kb`)})]})}):le&&pe?(0,Y.jsx)(`img`,{alt:``,src:pe}):_e?(0,Y.jsx)(`img`,{alt:``,src:_e}):e.isDirectory?(0,Y.jsx)(I,{size:64}):(0,Y.jsx)(V,{size:64})}),(0,Y.jsx)(vr,{onDoubleClick:()=>{se(210),o(`yafm.preview.media.height`,210)},onPointerDown:xe,onPointerMove:z,onPointerUp:Se,title:u(`drag_to_resize_double_click_to_reset`)}),(0,Y.jsxs)(Dr,{children:[(0,Y.jsx)(Or,{title:e.path,children:e.name}),c&&(0,Y.jsx)(kr,{children:c}),(0,Y.jsx)(Ar,{children:e.fields.map(e=>(0,Y.jsxs)(jr,{children:[(0,Y.jsx)(Mr,{children:e.label}),(0,Y.jsx)(Nr,{title:e.value,children:e.time===void 0?e.value:(0,Y.jsx)(ee,{value:e.time})})]},e.label))})]})]})]})}function dr(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function fr(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var pr=t.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,mr=t.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,hr=t.aside`
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
`,gr=t.div`
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
`,_r=t.div`
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
`,vr=t.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,yr=t.div`
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
`,br=t.button`
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
`,xr=t.div`
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
`,Sr=t.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Cr=t.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,wr=t.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Tr=t.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Er=t.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Dr=t.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,Or=t.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,kr=t.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,Ar=t.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,jr=t.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,Mr=t.span`
    color: var(--text-muted);
`,Nr=t.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,Pr=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],Fr=[...Pr],Ir={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},Lr={folder:e=>(0,Y.jsx)(I,{size:e}),home:e=>(0,Y.jsx)(ce,{size:e}),desktop:e=>(0,Y.jsx)(R,{size:e}),documents:e=>(0,Y.jsx)(W,{size:e}),downloads:e=>(0,Y.jsx)(ge,{size:e}),pictures:e=>(0,Y.jsx)(Ie,{size:e}),music:e=>(0,Y.jsx)(fe,{size:e}),videos:e=>(0,Y.jsx)(qe,{size:e}),drive:e=>(0,Y.jsx)(P,{size:e}),image:e=>(0,Y.jsx)(ue,{size:e}),video:e=>(0,Y.jsx)(Ce,{size:e}),audio:e=>(0,Y.jsx)(Le,{size:e}),text:e=>(0,Y.jsx)(xe,{size:e}),code:e=>(0,Y.jsx)(B,{size:e}),clock:e=>(0,Y.jsx)(ze,{size:e}),star:e=>(0,Y.jsx)(H,{size:e}),file:e=>(0,Y.jsx)(V,{size:e}),archive:e=>(0,Y.jsx)(Fe,{size:e}),pdf:e=>(0,Y.jsx)(Ee,{size:e}),executable:e=>(0,Y.jsx)(L,{size:e}),font:e=>(0,Y.jsx)(pe,{size:e}),database:e=>(0,Y.jsx)(G,{size:e}),config:e=>(0,Y.jsx)(be,{size:e}),spreadsheet:e=>(0,Y.jsx)(Oe,{size:e}),presentation:e=>(0,Y.jsx)(Re,{size:e}),document:e=>(0,Y.jsx)(N,{size:e}),app:e=>(0,Y.jsx)(He,{size:e}),gear:e=>(0,Y.jsx)(le,{size:e}),pin:e=>(0,Y.jsx)(Be,{size:e}),trash:e=>(0,Y.jsx)(Ke,{size:e}),overview:e=>(0,Y.jsx)(ye,{size:e}),book:e=>(0,Y.jsx)(Ve,{size:e}),briefcase:e=>(0,Y.jsx)(we,{size:e}),cloud:e=>(0,Y.jsx)(Ae,{size:e}),gamepad:e=>(0,Y.jsx)(me,{size:e}),camera:e=>(0,Y.jsx)(Ne,{size:e}),terminal:e=>(0,Y.jsx)(ke,{size:e}),server:e=>(0,Y.jsx)(Pe,{size:e}),package:e=>(0,Y.jsx)(ve,{size:e}),globe:e=>(0,Y.jsx)(de,{size:e}),heart:e=>(0,Y.jsx)(he,{size:e}),share:e=>(0,Y.jsx)(Pe,{size:e}),favorites:e=>(0,Y.jsx)(he,{size:e})};function Rr(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function zr(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??Pr)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||Fr.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=Rr(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${Ir[n]??n}${Br(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function Br(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function Vr({panel:e,size:t=16}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=_(n);if(r)return(0,Y.jsx)(`img`,{alt:``,src:r,style:{width:t,height:t,objectFit:`contain`}});let i=e.icon?Lr[e.icon]:void 0;if(i)return(0,Y.jsx)(Y.Fragment,{children:i(t)});switch(e.kind){case`quick`:return(0,Y.jsx)(I,{size:t});case`recent`:return(0,Y.jsx)(ze,{size:t});case`frequent`:return(0,Y.jsx)(H,{size:t});case`drives`:return(0,Y.jsx)(P,{size:t});case`home`:return(0,Y.jsx)(ce,{size:t});case`share`:return(0,Y.jsx)(Pe,{size:t});case`favorites`:return(0,Y.jsx)(he,{size:t});default:return(0,Y.jsx)(I,{size:t})}}function Hr({place:e,size:t=18}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=_(n);return r?(0,Y.jsx)(`img`,{alt:``,height:t,src:r,style:{objectFit:`contain`},width:t}):e.icon&&Lr[e.icon]?(0,Y.jsx)(Y.Fragment,{children:Lr[e.icon](t)}):(0,Y.jsx)(I,{size:t})}var Ur=`#64748b`;function Wr(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function Gr({x:e,y:t,tags:n,allTags:r,colors:a,onChange:o,onClose:s}){let c=i(),[l,u]=(0,K.useState)(``),[d,f]=(0,K.useState)(`#2dd4bf`),p=(0,K.useRef)(null);(0,K.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||s()},t=e=>{e.key===`Escape`&&s()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,s),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,s)}},[s]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>a[e]??`#64748b`,g=e=>{o(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{o(n,{...a,[e]:t})},v=()=>{let e=l.trim();e.length!==0&&(o(n.includes(e)?n:[...n,e],{...a,[e]:d}),u(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,vn.createPortal)((0,Y.jsxs)(Kr,{"data-tag-menu":`true`,ref:p,style:{left:y,top:b},children:[(0,Y.jsxs)(qr,{children:[(0,Y.jsx)(`span`,{children:c(`tags`)}),(0,Y.jsx)(Jr,{onClick:s,title:c(`close`),type:`button`,children:(0,Y.jsx)(Je,{size:11})})]}),(0,Y.jsxs)(Yr,{children:[m.length===0&&(0,Y.jsx)($r,{children:c(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,Y.jsxs)(Xr,{children:[(0,Y.jsx)(Zr,{"aria-label":c(`color_of_tag`,{tag:e}),onChange:t=>_(e,t.target.value),title:c(`change_this_tag_s_color`),type:`color`,value:t}),(0,Y.jsxs)(Qr,{$color:t,$ink:Wr(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,Y.jsx)(Te,{size:11}),(0,Y.jsx)(`span`,{children:e})]})]},e)})]}),(0,Y.jsxs)(ei,{children:[(0,Y.jsx)(Zr,{"aria-label":c(`color_of_the_new_tag`),onChange:e=>f(e.target.value),title:c(`color_of_the_new_tag`),type:`color`,value:d}),(0,Y.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:c(`new_tag`),spellCheck:!1,value:l}),(0,Y.jsx)(ti,{onClick:v,type:`button`,children:c(`add`)})]})]}),document.body)}var Kr=t.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${E}
`,qr=t.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,Jr=t.button`
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
`,Yr=t.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Xr=t.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Zr=t.input`
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
`,Qr=t.button`
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
`,$r=t.span`
    font-size: 11px;
    color: var(--text-muted);
`,ei=t.div`
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
`,ti=t.button`
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
`;function ni({path:e,name:t,isDirectory:n,size:r=18}){let i=g(e,n);return i?(0,Y.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,Y.jsx)(I,{size:r}):(0,Y.jsx)($t,{name:Qt(t),size:r})}var ri=`application/x-yafm-paths`,ii=[ri,`text/uri-list`];function ai(e){return e?.types.some(e=>ii.includes(e.toLowerCase()))??!1}function oi(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(ri);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(ci).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var si=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function ci(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return si?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function li(e){return`file:///`+e.replace(/\\/g,`/`).split(`/`).map((e,t)=>t===0&&/^[a-zA-Z]:$/.test(e)?e:encodeURIComponent(e)).join(`/`)}function ui(e,t,n=!0){e.dataTransfer.setData(ri,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.setData(`text/uri-list`,t.map(li).join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function di({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:a,currentDirectory:o,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=i(),[h,g]=(0,K.useState)(()=>new Set),[_,v]=(0,K.useState)(!1),y=(0,K.useRef)(null),b=(0,K.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),x=(0,K.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),S=(0,K.useRef)(null);if((0,K.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&ai(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=oi(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,c]),!r)return null;let C=new Set([...e,...t].map(e=>e.path)),w=C.size>0&&[...C].every(e=>h.has(e)),T=C.size,E=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{g(w?new Set:C)},ee=e=>{y.current={x:e.clientX,y:e.clientY,left:a.x,top:a.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},te=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},O=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},k=()=>{let e=b.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},ne=()=>{let e=b.map(e=>e.path);e.length!==0&&f(e)},re=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,o,!0),r.length>0&&p(r,o,!1),g(new Set)},ie=(e,t)=>{let n=h.has(e.path);return(0,Y.jsxs)(Ci,{$checked:n,draggable:!0,onClick:()=>E(e.path),onDragStart:r=>{ui(r,n&&h.size>0?[...new Set([...b,...x].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,Y.jsx)(wi,{$checked:n,onClick:t=>{t.stopPropagation(),E(e.path)},type:`button`,children:n&&(0,Y.jsx)(Te,{size:8})}),(0,Y.jsx)(ni,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,Y.jsxs)(Ti,{children:[(0,Y.jsx)(Ei,{children:e.name}),(0,Y.jsx)(Di,{children:ae(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},A=e=>{ai(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,Y.jsxs)(fi,{$dragging:_,"data-tray":`true`,ref:S,style:{left:a.x,top:a.y},onDragEnter:A,onDragOver:A,onDrop:e=>{let{paths:t}=oi(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,Y.jsxs)(pi,{onPointerDown:ee,onPointerMove:te,onPointerUp:O,children:[(0,Y.jsxs)(mi,{children:[(0,Y.jsx)(ve,{size:12}),m(`tray`),(0,Y.jsx)(hi,{children:T})]}),(0,Y.jsxs)(gi,{onPointerDown:e=>e.stopPropagation(),children:[(0,Y.jsx)(_i,{onClick:D,title:m(w?`select_none`:`select_all`),type:`button`,children:m(w?`none`:`all`)}),(0,Y.jsx)(_i,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,Y.jsx)(vi,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,Y.jsx)(Je,{size:10})})]})]}),(0,Y.jsxs)(yi,{children:[(0,Y.jsxs)(xi,{children:[m(`in_this_app`),(0,Y.jsx)(hi,{children:e.length})]}),e.length===0&&(0,Y.jsx)(bi,{children:m(`drag_files_or_folders_here`)}),e.map(e=>ie(e,!0)),t.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(xi,{$clipboard:!0,children:[m(`clipboard`),(0,Y.jsx)(hi,{children:t.length}),n&&(0,Y.jsx)(Si,{children:m(`cut`)})]}),t.map(e=>ie(e,n))]})]}),(0,Y.jsxs)(Oi,{children:[(0,Y.jsx)(ki,{$plain:!0,disabled:b.length===0,onClick:ne,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,Y.jsx)(ki,{disabled:h.size===0||!o,onClick:re,type:`button`,children:m(`move_here`)}),(0,Y.jsx)(ki,{$danger:!0,disabled:b.length===0,onClick:k,type:`button`,children:m(`remove`)})]})]})}var fi=t.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${S}
    ${E}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,pi=t.div`
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
`,mi=t.span`
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
`,hi=t.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,gi=t.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,_i=t.button`
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
`,vi=t.button`
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
`,yi=t.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,bi=t.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,xi=t.div`
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
`,Si=t.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Ci=t.div`
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
`,wi=t.button`
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
`,Ti=t.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,Ei=t.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Di=t.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Oi=t.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,ki=t.button`
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
`,Ai={shares:[],webRunning:!1,webPort:0,urls:[],preferredUrl:null,deviceId:``,deviceName:``,fingerprint:``};async function ji(){return r.available?await r.request(`share.list`):Ai}async function Mi(e,t){return r.available?await r.request(`share.add`,{path:e,mode:t}):Ai}async function Ni(e){return r.available?await r.request(`share.remove`,{id:e}):Ai}async function Pi(e,t){return r.available?await r.request(`share.mode`,{id:e,mode:t}):Ai}async function Fi(){return r.available?(await r.request(`share.peers`)).peers??[]:[]}async function Ii(){return r.available?(await r.request(`share.peers.refresh`)).peers??[]:[]}async function Li(e,t){r.available&&await r.request(`share.pair.start`,{host:e,port:t})}async function Ri(e,t){r.available&&await r.request(`share.pair.respond`,{requestId:e,accept:t})}async function zi(e,t){r.available&&await r.request(`share.port`,{mode:t,port:e})}var Bi=`yafm://share/`;function Vi(e){return e.toLowerCase().startsWith(Bi)}function Hi(e){if(!Vi(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function Ui(e,t,n=``){let r=`${Bi}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function Wi(e){let t=Hi(e);if(!t||!r.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await r.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:Ui(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:Ui(t.deviceId,t.shareId,n.parent),total:n.entries?.length??0,signature:0,entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function Gi(e){let t=Hi(e);if(!t||!r.available)throw Error(`This shared file is only available in the desktop app.`);let n=await r.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Ki(e){await c(await Gi(e))}async function qi(){return r.available?await r.request(`share.certificate`):null}async function Ji(e,t){return await r.request(`share.certificate.import`,{path:e,password:t})}async function Yi(){return await r.request(`share.certificate.reset`)}async function Xi(){return r.available?(await r.request(`share.devices.clear`)).devices??[]:[]}async function Zi(){return r.available?(await r.request(`share.devices.list`)).devices??[]:[]}async function Qi(e,t,n){return r.available?(await r.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function $i(e){return r.available?(await r.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function ea(){return r.available?(await r.request(`share.access.status`)).hasPassword:!1}async function ta(e){return r.available?(await r.request(`share.access.password`,{password:e})).hasPassword:!1}var na=60,ra=300,ia=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],aa=new Set,oa=`yafm.columnWidths`,sa=`yafm.reset-column-widths`,ca=64,la=720,ua=160,da=190,fa=120;function pa({listing:e,loading:t,error:n,find:r=s,view:a,showImages:c,imageStripHeight:d=da,onImageStripHeight:p,onSort:h,onSetTags:g,onOpen:_,onOpenFile:v,onSelectEntry:b,onOpenExternally:x,showCheckboxes:S=!0,openOnSingleClick:C=!1,shortcuts:w=Dt,enableShortcuts:E=!0,refreshToken:D=0,onRefresh:ee,onRename:O,onClipboardChanged:re,cutPaths:j=aa,onTransfer:ae,onAddToTray:oe,platform:se,onAddFavorite:ce,onRemoveFavorite:N,favoritePaths:P,onExtractArchive:le,onPaste:ue,confirmDelete:de=!1,previewVideoAudio:fe=!1,previewVideoAutoplay:F=!1,showDetails:I=!0,onPreviewInfo:pe,onActivate:L,groupOf:me,onGridScroll:he,gridFooter:R,allowBackgroundMenu:ge=!0,readOnly:_e=!1,onSelectionChange:ve,onSelectionCountChange:ye,selectionMenuRequest:be,selectionMenuId:xe,singleSelect:z=!1,pendingRename:Se=null,pendingRenameToken:Ce=0,selectMatchesToken:we=0,onLoadMore:Ee,onEnsureComplete:De,selectAllToken:Oe=0}){let B=i(),ke=Yt(),Ae=(0,K.useRef)(null),je=(0,K.useRef)(null),Me=(0,K.useRef)(null),V=(0,K.useRef)(null),Ne=(0,K.useRef)(0),Pe=(0,K.useRef)(null),[Fe,Ie]=(0,K.useState)(ra),[Le,Re]=(0,K.useState)({top:0,height:640}),ze=(0,K.useRef)(null),H=(0,K.useRef)(null),Be=(0,K.useRef)(!1),Ve=(0,K.useRef)(!1),He=(0,K.useRef)(null),Ue=(0,K.useRef)(null),[We,Ge]=(0,K.useState)(null),[U,Ke]=(0,K.useState)(d),[W,G]=(0,K.useState)(()=>new Set),[qe,Je]=(0,K.useState)(()=>m(oa)??{}),Ye=(0,K.useRef)(W),Xe=(0,K.useRef)([]);Ye.current=W,(0,K.useEffect)(()=>ve?.([...W]),[W,ve]),(0,K.useEffect)(()=>ye?.(W.size),[W,ye]),(0,K.useEffect)(()=>{let e=be;if(!e||e.token===$e.current)return;$e.current=e.token;let t=[...Ye.current];t.length!==0&&(Qe({x:e.x,y:e.y,paths:t,background:!1}),nt().then(St,()=>St(!1)))},[be]);let[Ze,Qe]=(0,K.useState)(null),$e=(0,K.useRef)(0),[et,rt]=(0,K.useState)(null),[q,at]=(0,K.useState)(null),[ut,dt]=(0,K.useState)(null),ft=(0,K.useRef)(ut);ft.current=ut;let ht=(0,K.useRef)(0),gt=(0,K.useRef)(L);gt.current=L;let[_t,yt]=(0,K.useState)(()=>{let e=te(`yafm.preview.width`,320);return e>=220?e:320}),bt=(0,K.useCallback)(e=>{yt(e),o(`yafm.preview.width`,e)},[]),[xt,St]=(0,K.useState)(!1),Ct=(0,K.useCallback)((e,t)=>{let n=[...Ye.current];n.length!==0&&(Qe({x:e,y:t,paths:n,background:!1}),nt().then(St,()=>St(!1)))},[]);(0,K.useEffect)(()=>{if(xe)return T(xe,W.size>0?Ct:null),()=>T(xe,null)},[xe,W,Ct]),(0,K.useEffect)(()=>{G(new Set),dt(null),Qe(null),H.current=null},[e?.path]),(0,K.useEffect)(()=>{Ke(d)},[d]),(0,K.useEffect)(()=>{G(new Set),dt(null),H.current=null},[D]);let wt=e=>{ze.current={y:e.clientY,height:U},e.currentTarget.setPointerCapture(e.pointerId)},Tt=e=>{let t=ze.current;if(!t)return;let n=Math.max(fa,Math.round(window.innerHeight*.7));Ke(Math.min(n,Math.max(fa,t.height+t.y-e.clientY)))},Ot=e=>{ze.current&&(ze.current=null,e.currentTarget.releasePointerCapture(e.pointerId),p?.(U))},kt=()=>{Ke(da),p?.(da)},At=r.query.length>0,jt=(0,K.useMemo)(()=>ia.filter(e=>a.columns?.includes(e.id)),[a.columns]),Nt=a.columns?.includes(`linkTarget`)??!1,Pt=(0,K.useCallback)(e=>Math.min(la,Math.max(ca,qe[e.id]??e.width)),[qe]),Ft=(0,K.useMemo)(()=>`minmax(160px, 1fr) ${jt.map(e=>`${Pt(e)}px`).join(` `)}`.trim(),[jt,Pt]),Rt=(0,K.useRef)(null),zt=(0,K.useRef)(null),Bt=()=>Math.floor(zt.current?.getBoundingClientRect().width??ua),Ht=e=>{let t=jt[0];t&&(e.preventDefault(),e.stopPropagation(),Rt.current={left:{id:t.id,start:Pt(t)},startX:e.clientX,nameStart:Bt()})},Ut=(e,t)=>{let n=jt[t],r=jt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),Rt.current={left:{id:n.id,start:Pt(n)},right:{id:r.id,start:Pt(r)},startX:e.clientX,nameStart:0})},Wt=e=>Je(t=>{let n={...t};return delete n[e],u(oa,n),n});(0,K.useEffect)(()=>{let e=e=>{let t=Rt.current;if(!t)return;let n=e.clientX-t.startX;Je(e=>{if(!t.right){let r=Math.max(0,t.nameStart-ua),i=Math.min(Math.min(la,t.left.start+r),Math.max(ca,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(la,Math.max(ca,t.left.start+n)),a=Math.min(Math.min(la,r-ca),Math.max(Math.max(ca,r-la),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{Rt.current&&(Rt.current=null,Je(e=>(u(oa,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,K.useEffect)(()=>{let e=()=>Je(()=>(u(oa,{}),{}));return window.addEventListener(sa,e),()=>window.removeEventListener(sa,e)},[]);let Kt=(0,K.useMemo)(()=>({query:r?.query??``,matchCase:r?.matchCase??!1,regex:r?.regex??!1}),[r?.query,r?.matchCase,r?.regex]),qt=r?.mode??`dim`,Jt=(0,K.useDeferredValue)(Kt),J=(0,K.useMemo)(()=>e?_a(e.entries.map(t=>{let n=t.isDirectory?Xt(ke,t.fullPath):void 0,r=n?.name||t.name;return{entry:t,place:n,label:r,ranges:At?l(r,Jt):null,tags:e.tags[t.name]??[],cut:j.has(t.fullPath)}}).filter(e=>!At||qt===`dim`||e.ranges!==null),a,e,B):[],[e?.entries,e?.tags,a.sort===`size`||a.sort===`items`?e?.folderSizes:null,a.sort===`size`||a.sort===`items`?e?.counts:null,At,Jt,qt,ke,a.sort,a.sortDescending,B,j]);Xe.current=J,(0,K.useEffect)(()=>{Oe!==0&&G(new Set(Xe.current.map(e=>e.entry.fullPath)))},[Oe]),(0,K.useEffect)(()=>{we!==0&&G(new Set(Xe.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[we]);let X=Math.max(40,a.iconSize+20),Zt=Math.max(0,Math.floor(Le.top/X)-4),Qt=Math.min(J.length,Zt+Math.ceil(Le.height/X)+10),$t=(0,K.useMemo)(()=>J.slice(Zt,Qt),[J,Zt,Qt]);(0,K.useEffect)(()=>{Ee&&J.length>0&&Qt>=J.length&&Ee()},[Ee,J.length,Qt]),(0,K.useEffect)(()=>{let e=V.current;if(!e||a.mode!==`list`)return;e.scrollTop=0,Re({top:0,height:e.clientHeight});let t=()=>Re(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[a.mode]),(0,K.useEffect)(()=>{Re(e=>({...e,top:0})),V.current&&(V.current.scrollTop=0)},[e?.path]),(0,K.useEffect)(()=>{if(r.currentPath){if(a.mode===`list`){let e=J.findIndex(e=>e.entry.fullPath===r.currentPath),t=V.current;if(e<0||!t)return;let n=e*X;(n<t.scrollTop||n+X>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else Ae.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,a.mode,J,X]);let[en,nn]=(0,K.useState)(0),rn=(0,K.useRef)(!1),an=(0,K.useMemo)(()=>J.slice(en,en+Fe),[J,en,Fe]);(0,K.useEffect)(()=>()=>{Ne.current!==0&&cancelAnimationFrame(Ne.current)},[]),(0,K.useEffect)(()=>{let e=je.current;if(!e||e.length===0)return;let t=e.filter(e=>J.some(t=>k(t.entry.fullPath,e)));if(t.length===0)return;je.current=null;let n=t[0],r=J.findIndex(e=>k(e.entry.fullPath,n));r>=0&&Ie(e=>Math.max(e,r+ra)),G(new Set(t)),H.current=n,a.mode===`list`&&V.current&&r>=0?V.current.scrollTop=Math.max(0,r*X-V.current.clientHeight/2):requestAnimationFrame(()=>Ae.current?.scrollIntoView({block:`nearest`}))},[J,X,a.mode]),(0,K.useEffect)(()=>{Ie(ra),nn(0)},[e?.path]),(0,K.useEffect)(()=>{if(!r.currentPath)return;let e=J.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&Ie(t=>Math.max(t,e+ra))},[r.currentPath,J]);let on=(0,K.useCallback)(e=>{if(!(e.scrollTop+e.clientHeight<e.scrollHeight-600)){if(Fe>=1200){let t=e.scrollHeight,n=e.scrollTop;rn.current=!0,nn(e=>Math.min(e+ra,J.length)),requestAnimationFrame(()=>{e.scrollTop=Math.max(0,n-(t-e.scrollHeight)),rn.current=!1})}else Ie(e=>Math.min(J.length,e+ra));Ee?.()}},[Fe,J.length,Ee]),sn=(0,K.useCallback)(e=>{if(rn.current||en===0||e.scrollTop>e.clientHeight)return;let t=e.scrollHeight,n=e.scrollTop;rn.current=!0,nn(e=>Math.max(0,e-ra)),requestAnimationFrame(()=>{e.scrollTop=n+(e.scrollHeight-t),rn.current=!1})},[en]),cn=a.mode===`grid`,ln=(0,K.useMemo)(()=>{if(!cn)return[];if(!me)return ba(an,ya);let e=[],t=new Map;for(let n of an){let r=me(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[an,cn,me]),un=(0,K.useMemo)(()=>c?J.filter(e=>!e.entry.isDirectory&&Gt(e.entry.name)):[],[J,c]),dn=un.length,fn=(0,K.useMemo)(()=>un.slice(0,na),[un]),pn=(0,K.useMemo)(()=>c?ba(fn,va):[],[fn,c]),mn=(0,K.useMemo)(()=>pn.flatMap(e=>e.rows.map(e=>e.entry.fullPath)),[pn]),gn=mn.filter(e=>W.has(e)).length,_n=mn.length>0&&gn===mn.length,vn=gn>0&&!_n,Z=(0,K.useMemo)(()=>J.map(e=>e.entry.fullPath),[J]),yn=(0,K.useMemo)(()=>cn?ln.flatMap(e=>e.rows.map(e=>e.entry.fullPath)):Z,[Z,cn,ln]),bn=J.length>0&&W.size>=J.length,xn=W.size>0&&!bn,Sn=()=>{z||(bn?On():G(new Set(Z)))},Cn=(0,K.useCallback)((e,t)=>{z||e.length===0||(G(n=>{let r=new Set(n);for(let n of e)t?r.add(n):r.delete(n);return r}),t&&(H.current=e[0]??null))},[z]),Q=e?.path??``,wn=(0,K.useCallback)((e,t)=>{if(z){H.current=t,G(new Set([t]));return}let n=e.ctrlKey||e.metaKey;G(r=>{if(e.shiftKey&&H.current!==null){let e=Z.indexOf(H.current),i=Z.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Z[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),H.current=t,e}return H.current=t,new Set([t])})},[Z,z]),Tn=(0,K.useCallback)((e,t)=>{Ve.current=!1,wn(e,t)},[wn]),En=(0,K.useCallback)((e,t)=>{Ve.current=!0,wn(e,t)},[wn]),Dn=(0,K.useCallback)(e=>{z?(H.current=e,G(new Set([e]))):(H.current=e,G(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[z]),On=(0,K.useCallback)(()=>{H.current=null,Ve.current=!1,G(new Set)},[]);(0,K.useEffect)(()=>{if(Ce===0||!Se||ht.current===Ce||!e?.entries.some(e=>e.fullPath===Se))return;ht.current=Ce,H.current=Se,G(new Set([Se])),dt({path:Se,value:ie(Se)});let t=J.findIndex(e=>e.entry.fullPath===Se),n=V.current;if(!(t<0||!n)){if(a.mode===`list`){let e=t*X;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(Se)}"]`)?.scrollIntoView({block:`nearest`})})}},[V,e,Se,Ce,X,J,a.mode]),(0,K.useEffect)(()=>{if(!ut)return;let e=J.findIndex(e=>e.entry.fullPath===ut.path),t=V.current;if(!(e<0||!t)){if(a.mode===`list`){let n=e*X;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(ut.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[V,ut,X,J,a.mode]);let kn=(0,K.useCallback)(()=>Qe(null),[]),jn=(0,K.useCallback)((e,t)=>{e.isDirectory?_(e.fullPath,It(t)):v?.(e.fullPath,It(t))},[_,v]),Mn=(0,K.useCallback)((e,t,n)=>{Ge({entry:e,x:t,y:n})},[]),Nn=(0,K.useRef)(null),Pn=(0,K.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;ui(e,W.has(n)?[...W]:[n])},[W]),Fn=(0,K.useCallback)(e=>{if(!ai(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Nn.current=t?.dataset.directory===`true`?t.dataset.path??Q:Q,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Q]),In=(0,K.useCallback)(e=>{if(_e)return;let{paths:t,move:n}=oi(e),r=Nn.current??Q;Nn.current=null,t.length!==0&&ae&&(e.preventDefault(),ae(t,r,!e.ctrlKey&&n))},[Q,ae,_e]),Ln=(0,K.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),_e||!t&&!ge)return;let n=Ye.current;t&&!n.has(t)&&G(new Set([t])),t&&(H.current=t);let r=t?n.has(t)?[...n]:[t]:[];Qe({x:e.clientX,y:e.clientY,paths:r,background:!t}),nt().then(St,()=>St(!1))},[ge,Q]),Rn=(0,K.useCallback)(()=>ee?.(),[ee]),zn=(e,t)=>{H.current=e,G(new Set([e])),t&&dt({path:e,value:ie(e)}),Rn()},Bn=et&&(0,Y.jsx)(An,{initialDirectory:Q,initialName:et.name,onCancel:()=>rt(null),onCompress:async e=>{let t=await Et(et.paths,e);return!t.ok||!t.path?(f(t.error??B(`could_not_create_the_archive`)),!1):(zn(t.path,!1),!0)}}),Vn=async(e,t=!1)=>{let n=e,r=t;if(e.some(Vi)){let t=[];for(let n of e)if(!Vi(n))t.push(n);else{if(Xe.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){f(B(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await Gi(n))}catch(e){f(e instanceof Error?e.message:B(`the_file_could_not_be_copied`));return}}n=t,r=!1}await tt(n,r)&&(St(!0),re?.())},Hn=async e=>{if(!e)return;let t=await ot(e);t.cancelled||(t.ok?(je.current=t.created,Rn(),ue?.()):f(B(`nothing_on_the_clipboard_could_be_pasted_here`)))},Wn=async(e,t=!1)=>{if(!Q)return;let n=e===null?await lt(Q,t):await pt(Q,e);!n.ok||n.path===null?f(n.error??B(`could_not_create_the_item`)):(H.current=n.path,G(new Set([n.path])),dt({path:n.path,value:ie(n.path)}),Rn())},Gn=e=>{G(new Set([e.fullPath])),H.current=e.fullPath,dt({path:e.fullPath,value:e.name})},Kn=(0,K.useCallback)(e=>dt(t=>t&&{...t,value:e}),[]),qn=(0,K.useCallback)(()=>dt(null),[]),Jn=(0,K.useCallback)(async()=>{let e=ft.current;if(dt(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=Xe.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await ct(e.path,t);r.ok?(On(),r.path&&O?.(e.path,r.path),Rn(),window.setTimeout(()=>Rn(),250)):f(r.error??B(`could_not_rename_the_entry`))},[On,O,Rn,B]),Yn=async(e,t=!1)=>{if((t||de)&&!await Xn(e,t))return;let n=t,r=await st(e,n);if(!r.ok&&r.needsPermanent){if(!await Xn(e,!0))return;n=!0,r=await st(e,!0)}if(!r.ok&&r.needsRunningConfirm){if(!await Zn(e,n,r.running??[],!1))return;r=await st(e,n,!0)}if(!r.ok&&!r.needsRunningConfirm&&(r.running?.length??0)>0)await Zn(e,n,r.running??[],!0);else if(r.ok)On(),Rn();else{if(r.cancelled)return;f(r.error??B(n?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},Xn=(0,K.useCallback)((e,t)=>new Promise(n=>at({paths:e,permanent:t,resolve:n})),[]),Zn=(0,K.useCallback)((e,t,n,r)=>new Promise(i=>at({paths:e,permanent:t,running:!0,blocked:r,programs:n,resolve:i})),[]),Qn=(0,K.useCallback)(e=>{at(t=>(t?.resolve(e),null))},[]),$n=(0,K.useCallback)(()=>Ve.current&&Ue.current!==null,[]),er=(0,K.useCallback)(()=>$n()?mn:yn,[$n,mn,yn]),tr=(0,K.useCallback)(e=>{let t=$n(),n=t?Ue.current:a.mode===`grid`?He.current:V.current;if(!n||!t&&a.mode===`list`&&(e===`left`||e===`right`))return;let r=er();if(r.length===0)return;let i=H.current&&r.includes(H.current)?H.current:W.size===1?[...W][0]:null,o=[...n.querySelectorAll(`[data-path]`)],s=i?o.find(e=>e.dataset.path===i):void 0,c=i?r.indexOf(i):-1,l=e===`left`?-1:1,u;u=s?e===`left`||e===`right`?r[((c<0?l>0?-1:0:c)+l+r.length)%r.length]:ha(o,s.getBoundingClientRect(),e)?.dataset.path??(c>=0?r[c+(e===`down`?1:-1)]:r[0]):o[0]?.dataset.path??r[0],u&&(G(new Set([u])),H.current=u,window.requestAnimationFrame(()=>{n.querySelector(`[data-path="${CSS.escape(u)}"]`)?.scrollIntoView({block:`nearest`})}))},[er,W,$n,a.mode]);(0,K.useEffect)(()=>{if(!E||Ze)return;let e=e=>{if(Vt(e.target))return;gt.current?.();let t=Lt(e),n=[...W],r=n.length===1?J.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`arrowleft`||t===`arrowright`)e.preventDefault(),tr(t.slice(5));else if(t===`home`||t===`end`){let n=er();if(n.length===0)return;e.preventDefault();let r=t===`home`?n[0]:n[n.length-1];G(new Set([r])),H.current=r,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(r)}"]`)?.scrollIntoView({block:`nearest`})})}else Mt(w,`copy`,t)&&i(()=>{n.length>0&&Vn(n)}),Mt(w,`duplicate`,t)&&i(()=>{n.length!==0&&Q&&it(n,Q,!1).then(e=>{e.ok&&(e.created.length>0&&G(new Set(e.created)),Rn())})}),Mt(w,`cut`,t)&&i(()=>{n.length>0&&Vn(n,!0)}),Mt(w,`paste`,t)&&i(()=>void Hn(Q)),Mt(w,`delete`,t)&&i(()=>{n.length>0&&Yn(n)}),Mt(w,`deletePermanently`,t)&&i(()=>{n.length>0&&Yn(n,!0)}),Mt(w,`selectAll`,t)&&i(()=>{let e=Be.current&&c&&fn.length>0?fn.map(e=>e.entry.fullPath):Z;G(new Set(e)),De?.(),H.current=e[0]??null}),Mt(w,`invertSelection`,t)&&i(()=>{G(new Set(Z.filter(e=>!W.has(e)))),H.current=Z[0]??null}),Mt(w,`rename`,t)&&r&&i(()=>void Gn(r)),Mt(w,`open`,t)&&r&&i(()=>{r.isDirectory?_(r.fullPath):v?.(r.fullPath)}),Mt(w,`newFolder`,t)&&i(()=>void Wn(null)),Mt(w,`terminal`,t)&&i(()=>void vt(Q)),Mt(w,`properties`,t)&&i(()=>void mt(n.length>0?n:Q?[Q]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Z,Vn,Wn,Q,E,Ze,_,v,er,Hn,Yn,Gn,J,W,w,tr]);let nr=q?.running?(0,Y.jsx)(Un,{confirmLabel:q.permanent?B(`delete`):B(`move`),message:q.blocked?B(`programs_are_using_target_close_them_and_try_again`,{programs:Da(q.programs),target:q.paths.length===1?B(`this_item`):B(`count_items`,{count:q.paths.length})}):B(`programs_are_using_target_continue`,{programs:Da(q.programs),target:q.paths.length===1?B(`this_item`):B(`count_items`,{count:q.paths.length})}),onCancel:()=>Qn(!1),onConfirm:q.blocked?void 0:()=>Qn(!0),programs:q.programs??[]}):q?(0,Y.jsx)(y,{confirmLabel:q.permanent?B(`delete`):B(`move`),danger:q.permanent,message:q.permanent?B(`permanently_delete_target_this_cannot_be_undone`,{target:q.paths.length===1?B(`this_item`):B(`count_items`,{count:q.paths.length})}):B(`move_target_to_the_recycle_bin`,{target:q.paths.length===1?B(`this_item`):B(`count_items`,{count:q.paths.length})}),onCancel:()=>Qn(!1),onConfirm:()=>Qn(!0),open:!0,title:q.permanent?B(`delete_permanently`):B(`move_to_the_recycle_bin`)}):null,$=(0,K.useMemo)(()=>{if(!e||W.size===0)return null;let t=Z.find(e=>W.has(e));return t?J.find(e=>e.entry.fullPath===t)?.entry??null:null},[Z,e,J,W]),rr=(0,K.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:ie(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:B(`type`),value:B(`folder`)},{label:B(`location`),value:e.parent??`—`},{label:B(`path`),value:e.path},{label:B(`size`),value:M(t)},{label:B(`items`),value:ne(B,n,`k_1_item`,`count_items`)},{label:B(`modified`),value:`—`},{label:B(`created`),value:`—`},{label:B(`attributes`),value:`—`}]}},[e,B]),ir=(0,K.useMemo)(()=>{if(!$||!e)return null;let t=$.isDirectory?e.folderSizes[$.name]:void 0,n=e.tags[$.name]??[],r=$.name.lastIndexOf(`.`),i=r>0&&r<$.name.length-1?$.name.slice(r+1).toUpperCase():`—`;return{name:$.name,path:$.fullPath,isDirectory:$.isDirectory,size:$.size,modified:$.modified,created:$.created,fields:[{label:B(`type`),value:tn($.name,$.isDirectory,$.linkTarget,B)},...$.isEncrypted?[{label:B(`encryption`),value:B(`password_required`)}]:[],{label:B(`extension`),value:$.isDirectory?`—`:i},{label:B(`location`),value:e.path},{label:B(`full_path`),value:$.fullPath},{label:B(`size`),value:$.isDirectory?t===void 0?`—`:M(t):M($.size)},...$.isDirectory?[{label:B(`items`),value:`${e.counts[$.name]??`—`}`}]:[],{label:B(`modified`),value:A($.modified),time:$.modified},{label:B(`created`),value:A($.created),time:$.created},{label:B(`link_status`),value:$.linkTarget==null?$.linkCount>1?B(`hard_link`):`—`:$.linkValid?`ok`:B(`broken`)},...$.linkTarget?[{label:B(`target`),value:$.linkTarget}]:[],...$.linkCount>1?[{label:B(`links`),value:String($.linkCount)}]:[],{label:B(`attributes`),value:[$.isHidden?B(`hidden`):``,$.isSystem?B(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:B(`tags`),value:n.join(`, `)}]:[]]}},[e,$,B]),ar=Ze?.paths.length===1?Ze.paths[0]:null,or=ar?J.find(e=>e.entry.fullPath===ar)?.entry:void 0,sr=or?{path:or.fullPath,isDirectory:or.isDirectory}:null,cr=ir??rr,lr=(0,K.useRef)(pe);lr.current=pe,(0,K.useEffect)(()=>{lr.current?.(cr)},[pe,cr]);let dr=I&&cr&&(0,Y.jsx)(ur,{info:cr,onWidth:bt,selectionNote:W.size>1?ne(B,W.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:fe,videoAutoplay:F,width:_t});return n&&!e?(0,Y.jsx)(Ao,{children:(0,Y.jsx)(Mo,{children:n})}):!e&&!t?(0,Y.jsx)(Ao,{children:(0,Y.jsx)(jo,{children:B(`nothing_selected`)})}):a.mode===`grid`?(0,Y.jsxs)(Ka,{onPointerDown:L,children:[(0,Y.jsxs)(qa,{children:[(0,Y.jsxs)(to,{ref:He,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||On()},onContextMenu:e=>Ln(e),onDragOver:Fn,onDragStart:Pn,onDrop:In,onScroll:e=>{he?.(e.currentTarget),on(e.currentTarget),sn(e.currentTarget)},children:[S&&J.length>0&&(0,Y.jsxs)(Ua,{children:[(0,Y.jsx)(Va,{$checked:!z&&bn,$partial:!z&&xn,"aria-label":B(bn?`select_none`:`select_all`),disabled:z,onClick:e=>{e.stopPropagation(),Sn()},title:B(bn?`select_none`:`select_all`),type:`button`,children:bn?(0,Y.jsx)(Te,{size:10}):xn?(0,Y.jsx)(Ha,{}):null}),(0,Y.jsx)(`span`,{children:B(bn?`select_none`:`select_all`)})]}),t&&!e?(0,Y.jsx)(oo,{$size:a.gridSize,children:(0,Y.jsx)(ja,{size:a.gridSize})}):(0,Y.jsx)(Na,{counts:e?.counts,currentPath:At?r.currentPath:null,groups:ln,gridSize:a.gridSize,innerRef:Ae,onContextMenu:Ln,onOpen:_,onOpenFile:v,onRenameCancel:qn,onRenameChange:Kn,onRenameCommit:Jn,onSelect:Tn,onToggle:Dn,onTogglePaths:z?void 0:Cn,openOnSingleClick:C,renaming:ut,searching:At,selected:W,showCheckboxes:S,showTarget:Nt}),!t&&e&&J.length===0&&(0,Y.jsx)(ko,{children:(0,Y.jsx)(jo,{children:n??(At&&r.mode===`hide`?B(`no_entries_match_the_search`):B(`this_folder_is_empty`))})}),R]}),Ze&&(0,Y.jsx)(hn,{canPaste:xt,directory:Q,platform:se,allowCompression:!0,menu:Ze,onAddToTray:oe,onAddFavorite:ce,onRemoveFavorite:N,favoritePaths:P,onExtractArchive:le,onArchiveCreated:zn,onClose:kn,onCompressTo:(e,t)=>rt({paths:e,name:t}),onCopy:Vn,onCreateFile:e=>void Wn(e),onCreateFolder:e=>void Wn(null,e),onDelete:Yn,onOpen:_,onOpenFile:v,onPaste:Hn,onRefresh:Rn,onRename:e=>{let t=J.find(t=>t.entry.fullPath===e)?.entry;t&&Gn(t)},shortcuts:w,target:sr}),Bn,nr]}),dr]}):(0,Y.jsxs)(Ka,{onPointerDown:L,children:[(0,Y.jsxs)(qa,{children:[(0,Y.jsxs)(Ja,{onScroll:e=>{V.current&&V.current.scrollLeft!==e.currentTarget.scrollLeft&&(V.current.scrollLeft=e.currentTarget.scrollLeft)},ref:Me,style:{gridTemplateColumns:Ft},children:[(0,Y.jsxs)(Ra,{ref:zt,children:[S&&(0,Y.jsx)(Va,{$checked:!z&&bn,$partial:!z&&xn,"aria-label":B(bn?`select_none`:`select_all`),disabled:z,onClick:e=>{e.stopPropagation(),Sn()},title:B(bn?`select_none`:`select_all`),type:`button`,children:bn?(0,Y.jsx)(Te,{size:10}):xn?(0,Y.jsx)(Ha,{}):null}),(0,Y.jsxs)(Ya,{onClick:()=>h(`name`),type:`button`,children:[B(`name`),ma(a,`name`)]}),(0,Y.jsx)(Ba,{"aria-label":B(`resize_column`),onDoubleClick:()=>jt[0]&&Wt(jt[0].id),onPointerDown:Ht,role:`separator`})]}),jt.map((e,t)=>(0,Y.jsxs)(za,{children:[(0,Y.jsxs)(Ya,{onClick:()=>h(e.id),type:`button`,children:[B(e.label),ma(a,e.id)]}),t<jt.length-1&&(0,Y.jsx)(Ba,{"aria-label":B(`resize_column`),onDoubleClick:()=>Wt(e.id),onPointerDown:e=>Ut(e,t),role:`separator`})]},e.id))]}),(0,Y.jsxs)(Xa,{onClick:e=>{e.target===e.currentTarget&&On()},onContextMenu:e=>Ln(e),onDragOver:Fn,onDragStart:Pn,onDrop:In,onScroll:e=>{let t=e.currentTarget;Me.current&&Me.current.scrollLeft!==t.scrollLeft&&(Me.current.scrollLeft=t.scrollLeft),Pe.current=t,Ne.current===0&&(Ne.current=requestAnimationFrame(()=>{Ne.current=0;let e=Pe.current;e&&Re(t=>t.top===e.scrollTop&&t.height===e.clientHeight?t:{top:e.scrollTop,height:e.clientHeight})}))},ref:V,children:[t&&!e?(0,Y.jsx)(Aa,{template:Ft,columns:jt.length}):(0,Y.jsxs)(Y.Fragment,{children:[Zt>0&&(0,Y.jsx)(`div`,{style:{height:Zt*X}}),$t.map(t=>{let n=t.entry.fullPath;return(0,Y.jsx)(Fa,{current:At&&n===r.currentPath,dim:At&&t.ranges===null,height:X,iconSize:a.iconSize,innerRef:Ae,folderSizes:e.folderSizes,counts:e.counts,tagColors:e.tagColors,onContextMenu:Ln,onOpen:jn,onRenameCancel:qn,onRenameChange:Kn,onRenameCommit:Jn,onSelect:Tn,onTagEdit:Mn,onToggle:Dn,openOnSingleClick:C,renaming:ut?.path===n?{value:ut.value}:null,row:t,selected:W.has(n),showCheckboxes:S,showTarget:Nt,template:Ft,visible:jt},n)}),Qt<J.length&&(0,Y.jsx)(`div`,{style:{height:(J.length-Qt)*X}})]}),!t&&e&&J.length===0&&(0,Y.jsx)(Ao,{children:(0,Y.jsx)(jo,{children:n??(At&&r.mode===`hide`?B(`no_entries_match_the_search`):B(`this_folder_is_empty`))})})]}),c&&un.length>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(Za,{onDoubleClick:kt,onPointerDown:wt,onPointerMove:Tt,onPointerUp:Ot,title:B(`drag_to_resize_double_click_to_reset`)}),(0,Y.jsxs)(Qa,{onPointerEnter:()=>{Be.current=!0},onPointerLeave:()=>{Be.current=!1},style:{height:U},children:[(0,Y.jsxs)($a,{children:[S&&!z&&mn.length>0&&(0,Y.jsx)(Va,{$checked:_n,$partial:vn,"aria-label":B(_n?`select_none`:`select_all`),disabled:z,onClick:e=>{e.stopPropagation(),Cn(mn,!_n)},title:B(_n?`select_none`:`select_all`),type:`button`,children:_n?(0,Y.jsx)(Te,{size:10}):vn?(0,Y.jsx)(Ha,{}):null}),B(`preview`),(0,Y.jsx)(eo,{children:dn>na?`${fn.length} / ${dn}`:dn})]}),(0,Y.jsx)(to,{ref:Ue,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||On()},onContextMenu:e=>Ln(e),children:(0,Y.jsx)(Na,{counts:e?.counts,currentPath:At?r.currentPath:null,groups:pn,gridSize:a.gridSize,onContextMenu:Ln,onOpen:_,onOpenFile:v,onSelect:En,onToggle:Dn,onTogglePaths:z?void 0:Cn,openOnSingleClick:C,searching:At,selected:W,showCheckboxes:S,showTarget:Nt})})]})]}),We&&e&&(0,Y.jsx)(Gr,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>g?.(We.entry.name,e,t),onClose:()=>Ge(null),tags:e.tags[We.entry.name]??[],x:We.x,y:We.y}),Ze&&(0,Y.jsx)(hn,{canPaste:xt,directory:Q,platform:se,allowCompression:!0,menu:Ze,onAddToTray:oe,onAddFavorite:ce,onRemoveFavorite:N,favoritePaths:P,onExtractArchive:le,onArchiveCreated:zn,onClose:kn,onCompressTo:(e,t)=>rt({paths:e,name:t}),onCopy:Vn,onCreateFile:e=>void Wn(e),onCreateFolder:e=>void Wn(null,e),onDelete:Yn,onOpen:_,onOpenExternally:x,onOpenFile:v,onSelectEntry:b,onPaste:Hn,onRefresh:Rn,onRename:e=>{let t=J.find(t=>t.entry.fullPath===e)?.entry;t&&Gn(t)},shortcuts:w,target:sr}),Bn,nr]}),dr]})}function ma(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}function ha(e,t,n){let r=n===`up`||n===`down`,i=n===`down`||n===`right`?1:-1,a=e=>r?{ahead:e.top+e.height/2,apart:e.left+e.width/2}:{ahead:e.left+e.width/2,apart:e.top+e.height/2},o=a(t),s=null,c=1/0;for(let t of e){let{ahead:e,apart:n}=a(t.getBoundingClientRect()),r=(e-o.ahead)*i;if(r<=1)continue;let l=r+Math.abs(n-o.apart)*4;l<c&&(c=l,s=t)}return s}var ga=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function _a(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return tn(e.name,e.isDirectory,e.linkTarget,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:ga.compare(String(r),String(i));return t.sortDescending?-o:o})}var va=Ht.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Wt(t.entry.name)===e})),ya=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...va.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function ba(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function xa(e){return Math.max(24,Math.min(e-56,160))}function Sa(e,t,n,r,i){switch(e){case`type`:return tn(t.name,t.isDirectory,t.linkTarget,i);case`size`:return Oa(t,n);case`modified`:return A(t.modified);case`created`:return A(t.created);case`items`:return t.isDirectory?r[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:i(`broken`);default:return``}}function Ca({name:e,ranges:t}){if(!t||t.length===0)return(0,Y.jsx)(Y.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,Y.jsx)(Oo,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,Y.jsx)(Y.Fragment,{children:n})}var wa=new WeakMap,Ta=null;function Ea(e,t,n){return Ta??=new IntersectionObserver(e=>{for(let t of e){if(!t.isIntersecting)continue;let e=wa.get(t.target);wa.delete(t.target),Ta?.unobserve(t.target),e?.()}},{rootMargin:n}),wa.set(e,t),Ta.observe(e),()=>{wa.delete(e),Ta?.unobserve(e)}}function Da(e){return[...new Set((e??[]).map(e=>e.name))].join(`, `)}function Oa(e,t){if(!e.isDirectory)return M(e.size);let n=t[e.name];return n===void 0?`—`:M(n)}function ka({entry:e,size:t=18}){let n=i(),r=(0,K.useRef)(null),[a,o]=(0,K.useState)(!1);(0,K.useEffect)(()=>{if(a)return;let e=r.current;if(e){if(!(`IntersectionObserver`in window))o(!0);else return Ea(e,()=>o(!0),`250px`)}},[a]);let s=g(a?e.fullPath:null,e.isDirectory,t>32),c=e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null,l=_(c);return(0,Y.jsxs)(Ia,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,Y.jsx)($t,{name:e.iconSource.slice(5),size:t}):l?(0,Y.jsx)(`img`,{alt:``,height:t,src:l,width:t}):s?(0,Y.jsx)(`img`,{alt:``,height:t,src:s,width:t}):e.isDirectory?(0,Y.jsx)(I,{size:t}):(0,Y.jsx)($t,{name:Qt(e.name),size:t}),e.isEncrypted&&(0,Y.jsx)(La,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,Y.jsx)(F,{size:Math.max(8,Math.round(t*.52))})})]})}function Aa({template:e,columns:t}){return(0,Y.jsx)(Y.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,Y.jsxs)(so,{style:{gridTemplateColumns:e},children:[(0,Y.jsxs)(uo,{children:[(0,Y.jsx)(co,{style:{flexShrink:0,height:18,width:18}}),(0,Y.jsx)(co,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,Y.jsx)(co,{style:{width:t%2==0?44:92}},t))]},r))})}function ja({size:e}){return(0,Y.jsx)(Y.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,Y.jsxs)(So,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,Y.jsx)(Co,{children:(0,Y.jsx)(co,{style:{height:e,width:e}})}),(0,Y.jsx)(To,{children:(0,Y.jsx)(co,{style:{height:9,width:`${t}%`}})})]},n))})}var Ma=(0,K.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:a,showTarget:o,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:y,onOpenFile:b}){let x=i(),S=Yt(),C=!e.entry.isDirectory&&Gt(e.entry.name),w=(0,K.useRef)(null),[T,E]=(0,K.useState)(!1);(0,K.useEffect)(()=>{if(!C||T)return;let e=w.current;if(e){if(!(`IntersectionObserver`in window))E(!0);else return Ea(e,()=>E(!0),`300px`)}},[C,T]);let D=v(C&&T?e.entry.fullPath:null,192,e.entry.modified),[ee,te]=(0,K.useState)(!1),O=C&&D!==null&&!ee,k=e.entry.fullPath,ne=t=>{e.entry.isDirectory?y(k,It(t)):b?.(k,It(t))};return(0,Y.jsxs)(So,{$current:t,$dim:n,$image:O,$selected:c,onClick:e=>{h(e,k),u&&ne(e)},onContextMenu:e=>_(e,k),onDoubleClick:e=>{u||ne(e)},ref:e=>{w.current=e,t&&s&&(s.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":k,draggable:!d,children:[l&&(0,Y.jsx)(Ga,{$checked:c,onClick:e=>{e.stopPropagation(),g(k)},onDoubleClick:e=>e.stopPropagation(),title:x(c?`deselect`:`select`),type:`button`,children:c&&(0,Y.jsx)(Te,{size:10})}),(0,Y.jsx)(Co,{children:O?(0,Y.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>te(!0),src:D}):(0,Y.jsx)(wo,{children:e.place&&S.useIcons?(0,Y.jsx)(Hr,{place:e.place,size:r}):(0,Y.jsx)(ka,{entry:e.entry,size:r})})}),(0,Y.jsxs)(To,{children:[d?(0,Y.jsx)(Pa,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:d.value}):(0,Y.jsx)(Eo,{$broken:e.entry.linkValid===!1,children:(0,Y.jsx)(Ca,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,Y.jsxs)(po,{title:x(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Y.jsx)(F,{size:9}),x(`encrypted`)]}),e.cut&&(0,Y.jsxs)(mo,{title:x(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,Y.jsx)(Se,{size:9}),x(`cut`)]}),(0,Y.jsx)(Do,{children:e.entry.isDirectory?a===void 0?tn(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,x):x(`type_count_items`,{type:tn(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,x),count:a}):x(`type_size`,{type:tn(e.entry.name,e.entry.isDirectory,e.entry.linkTarget,x),size:M(e.entry.size)})}),o&&e.entry.linkTarget&&(0,Y.jsxs)(go,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,Y.jsx)(_e,{size:9}),(0,Y.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function Na({groups:e,gridSize:t,counts:n,showTarget:r,searching:a,currentPath:o,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onSelect:f,onToggle:p,onTogglePaths:m,onContextMenu:h,onOpen:g,onOpenFile:_,onRenameChange:v,onRenameCommit:y,onRenameCancel:b}){let x=i();return(0,Y.jsx)(Y.Fragment,{children:e.map(e=>{let i=e.rows.map(e=>e.entry.fullPath),S=i.filter(e=>c.has(e)).length,C=i.length>0&&S===i.length,w=S>0&&!C;return(0,Y.jsxs)(no,{children:[(0,Y.jsxs)(ro,{children:[l&&m&&i.length>0&&(0,Y.jsx)(Va,{$checked:C,$partial:w,"aria-label":x(C?`select_none`:`select_all`),onClick:e=>{e.stopPropagation(),m(i,!C)},title:x(C?`select_none`:`select_all`),type:`button`,children:C?(0,Y.jsx)(Te,{size:10}):w?(0,Y.jsx)(Ha,{}):null}),x(e.label),(0,Y.jsx)(io,{children:e.rows.length}),(0,Y.jsx)(ao,{})]}),(0,Y.jsx)(oo,{$size:t,children:e.rows.map(e=>(0,Y.jsx)(Ma,{current:a&&e.entry.fullPath===o,dim:a&&e.ranges===null,iconSize:xa(t),innerRef:s,itemCount:n?.[e.entry.name],onContextMenu:h,onOpen:g,onOpenFile:_,onSelect:f,onToggle:p,openOnSingleClick:u,onRenameCancel:b,onRenameChange:v,onRenameCommit:y,renaming:d?.path===e.entry.fullPath?d:null,row:e,selected:c.has(e.entry.fullPath),showCheckboxes:l,showTarget:r},e.entry.fullPath))})]},e.id)})})}function Pa({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,K.useRef)(null);return(0,K.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,Y.jsx)(ho,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var Fa=(0,K.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:a,showTarget:o,openOnSingleClick:s,iconSize:c,height:l,template:u,visible:d,folderSizes:f,counts:p,tagColors:m,innerRef:h,renaming:g,onSelect:_,onToggle:v,onContextMenu:y,onOpen:b,onTagEdit:x,onRenameChange:S,onRenameCommit:C,onRenameCancel:w}){let T=i(),E=Yt(),D=e.entry.fullPath;return(0,Y.jsxs)(lo,{$current:t,$dim:n,$height:l,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{_(t,D),s&&b(e.entry,t)},onContextMenu:e=>y(e,D),onDoubleClick:t=>{s||b(e.entry,t)},ref:t?h:void 0,style:{gridTemplateColumns:u},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":D,draggable:!g,children:[(0,Y.jsxs)(uo,{children:[a&&(0,Y.jsx)(Wa,{$checked:r,onClick:e=>{e.stopPropagation(),v(D)},onDoubleClick:e=>e.stopPropagation(),title:T(r?`deselect`:`select`),type:`button`,children:r&&(0,Y.jsx)(Te,{size:10})}),e.place&&E.useIcons?(0,Y.jsx)(Ia,{children:(0,Y.jsx)(Hr,{place:e.place,size:c})}):(0,Y.jsx)(ka,{entry:e.entry,size:c}),g?(0,Y.jsx)(Pa,{onCancel:w,onChange:S,onCommit:C,value:g.value}):(0,Y.jsx)(fo,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,Y.jsx)(Ca,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,Y.jsxs)(po,{title:T(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,Y.jsx)(F,{size:9}),T(`encrypted`)]}),e.cut&&(0,Y.jsxs)(mo,{title:T(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,Y.jsx)(Se,{size:9}),T(`cut`)]}),o&&e.entry.linkTarget&&(0,Y.jsxs)(go,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,Y.jsx)(_e,{size:9}),(0,Y.jsx)(`span`,{children:e.entry.linkTarget})]})]}),d.map(t=>(0,Y.jsx)(_o,{children:t.id===`tags`?(0,Y.jsx)(vo,{onClick:t=>{t.stopPropagation(),x(e.entry,t.clientX,t.clientY)},title:T(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=m?.[e]??`#64748b`;return(0,Y.jsx)(yo,{$color:t,$ink:Wr(t),children:e},e)}):(0,Y.jsx)(bo,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,Y.jsx)(xo,{children:T(`broken`)}):t.id===`modified`?(0,Y.jsx)(ee,{value:e.entry.modified}):t.id===`created`?(0,Y.jsx)(ee,{value:e.entry.created}):Sa(t.id,e.entry,f,p,T)},t.id))]})}),Ia=t.span`
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
`,La=t.span`
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
`,Ra=t.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,za=t.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,Ba=t.span`
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
`,Va=t.button`
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
`,Ha=t.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,Ua=t.div`
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
`,Wa=t.button`
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
`,Ga=t(Wa)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Ka=t.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,qa=t.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Ja=t.div`
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
`,Ya=t.button`
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
`,Xa=t.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Za=t.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Qa=t.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,$a=t.div`
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
`,eo=t.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,to=t.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,no=t.section`
    & + & {
        margin-top: 22px;
    }
`,ro=t.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,io=t.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,ao=t.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,oo=t.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,so=t.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,co=t.span`
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
`,lo=t.div`
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
`,uo=t.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,fo=t.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,po=t.span`
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
`,mo=t.span`
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
`,ho=t.input`
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
`,go=t.span`
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
`,_o=t.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,vo=t.button`
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
`,yo=t.span`
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
`,bo=t.span`
    color: var(--text-muted);
    font-size: 11px;
`,xo=t.span`
    color: #fca5a5;
`,So=t.div`
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
`,Co=t.div`
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
`,wo=t.span`
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
`,To=t.div`
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
`,Eo=t.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Do=t.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Oo=t.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,ko=t.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,Ao=t.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,jo=t.p`
    font-size: 13px;
    color: var(--text-muted);
`,Mo=t.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;export{Vt as $,ni as A,hn as B,Pi as C,et as Ct,di as D,Ui as E,Lr as F,Jt as G,rn as H,zr as I,Yt as J,J as K,ur as L,Hr as M,Pr as N,ai as O,Vr as P,Nt as Q,An as R,Qi as S,$e as St,zi as T,tn as U,an as V,$t as W,Mt as X,Dt as Y,Lt as Z,Ii as _,St as _t,Xi as a,kt as at,Yi as b,it as bt,Fi as c,Et as ct,Vi as d,rt as dt,Rt as et,Zi as f,at as ft,Hi as g,ot as gt,Li as h,_t as ht,Mi as i,Ot as it,Ur as j,oi as k,ji as l,tt as lt,Ki as m,lt as mt,sa as n,jt as nt,qi as o,At as ot,Wi as p,pt,Xt as q,ia as r,Ft as rt,ea as s,It as st,pa as t,zt as tt,Ji as u,st as ut,Ni as v,mt as vt,ta as w,Ri as x,xt,$i as y,ht as yt,Z as z};