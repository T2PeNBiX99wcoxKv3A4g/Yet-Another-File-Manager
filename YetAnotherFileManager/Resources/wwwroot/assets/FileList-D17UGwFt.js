import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,u as a}from"./dist-sR-t6Emc.js";import{C as o,D as s,J as c,S as l,T as u,Y as d,_ as f,a as p,b as m,ct as h,dt as g,ft as _,i as v,lt as y,o as b,p as x,pt as S,s as C,t as w,u as T,ut as E,vt as D,x as ee}from"./selectionMenu-Cn70N64L.js";import{C as te,D as O,S as k,_ as ne,h as A,p as j,u as re,v as ie,w as ae,x as oe}from"./theme-bw14b3xc.js";import{$ as se,A as ce,C as le,D as M,F as N,G as P,J as ue,L as de,M as fe,N as pe,P as me,Q as he,R as ge,S as _e,T as ve,U as F,V as I,Y as ye,_ as L,_t as be,at as xe,b as Se,bt as R,c as z,ct as Ce,d as we,dt as Te,et as Ee,f as De,ft as Oe,g as B,gt as ke,h as Ae,ht as je,i as Me,it as V,j as H,l as Ne,lt as Pe,m as Fe,n as Ie,nt as Le,o as Re,p as U,q as ze,rt as Be,s as Ve,t as He,tt as Ue,u as We,v as Ge,w as Ke,x as W,y as G,yt as qe,z as Je}from"./Icons-NY0trHLk.js";var K=e(t(),1);async function Ye(e,t=!1){return!r.available||e.length===0?!1:(await r.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Xe(){return r.available?(await r.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function Ze(){return r.available?await r.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function Qe(e,t,n){return!r.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await $e({action:n?`move`:`write`},i=>r.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:i}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function $e(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await D({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function et(e){return!r.available||e.length===0?[]:(await r.request(`fs.paths.info`,{paths:e})).entries}async function tt(e,t=!1){return r.available?await $e({action:t?`move`:`write`},t=>r.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function nt(e,t=!1){if(!r.available||e.length===0)return{ok:!1,error:null};let n=await r.request(`fs.operation.delete`,{paths:e,permanent:t}),i=!1;for(let a=0;a<2&&n.required&&n.token&&n.protected?.length;a++){if(!await D({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){i=!0;break}n=await r.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return i?{...n,ok:!1,cancelled:!0}:n}async function rt(e,t){return r.available?await $e({action:`rename`},n=>r.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function it(e,t=!1){return r.available?await r.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function at(e){return r.available?(await r.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function ot(e,t){return r.available?await r.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function st(e,t,n){return r.available?await r.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function ct(e,t){return r.available?await r.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function lt(e){r.available&&e.length!==0&&await r.request(`fs.operation.properties`,{paths:e})}async function ut(e){return!r.available||e.length===0?{ok:!1,error:null}:await r.request(`fs.share`,{paths:e})}async function q(e){r.available&&await r.request(`fs.operation.openWith`,{path:e})}async function dt(e){r.available&&await r.request(`fs.operation.terminal`,{path:e})}async function ft(e){return r.available?await r.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function pt(e,t){return r.available?(await r.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function mt(){return r.available?await r.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function ht(){return r.available?await r.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function gt(e){r.available&&await r.request(`fs.operation.showInExplorer`,{path:e})}async function _t(e){return!r.available||e.length===0?{verbs:[],safe:!0}:await r.request(`shell.verbs`,{paths:e})}async function vt(e,t,n,i){r.available&&e.length!==0&&await r.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:i})}async function yt(e,t){return!r.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await r.request(`fs.operation.compress`,{...t,paths:e})}var bt={goBack:[`alt+arrowleft`],goForward:[`alt+arrowright`],goUp:[`alt+arrowup`],find:[`ctrl+f`],closeTab:[`ctrl+w`],newTab:[`ctrl+t`],reopenTab:[`ctrl+shift+t`],copy:[`ctrl+c`],cut:[`ctrl+x`],paste:[`ctrl+v`],duplicate:[`ctrl+d`],undo:[`ctrl+z`],redo:[`ctrl+shift+z`],delete:[`delete`],deletePermanently:[`shift+delete`],rename:[`f2`],selectAll:[`ctrl+a`],invertSelection:[`ctrl+shift+a`],open:[`enter`],newFolder:[`ctrl+shift+n`],properties:[`alt+enter`],home:[`alt+home`],location:[`ctrl+l`],iconsView:[`ctrl+1`],detailsView:[`ctrl+2`],nextTab:[`ctrl+tab`],previousTab:[`ctrl+shift+tab`],terminal:[`f4`],hidden:[`ctrl+h`,`alt+.`],splitView:[`f3`],openInNewTab:[`ctrl`]};function xt(e){return(e??``).split(`|`).map(e=>e.trim()).filter(Boolean)}function St(e){return e.join(`|`)}function Ct(e){let t={};for(let[n,r]of Object.entries(e))t[n]=St(r);return t}function wt(e){let t={...bt};for(let[n,r]of Object.entries(e??{}))n in t&&(t[n]=xt(r));return t}function Tt(e,t,n){return e[t]?.includes(n)??!1}function Et(e,t){return e[t]?.[0]??``}var Dt=Et(bt,`openInNewTab`);function Ot(e){Dt=e.trim()}function kt(e){let t=Dt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function At(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function jt(e){return e.split(`+`).filter(Boolean).map(e=>Nt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}function Mt(e){return(e??[]).filter(Boolean).map(jt).join(` / `)}var Nt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Pt(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var Ft=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],It={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`,`.tga`,`.dds`,`.hdr`,`.exr`,`.pcx`,`.dib`,`.jxl`,`.jpe`,`.jfif`,`.apng`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Lt(e){let t=zt(e);for(let{kind:e}of Ft)if(It[e].has(t))return e;return null}function Rt(e){return Lt(e)!==null}function zt(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Bt=(0,K.createContext)({places:{},useIcons:!1}),Vt=Bt.Provider;function Ht(){return(0,K.useContext)(Bt)}function Ut(e,t){return e.places[oe(t)]}function Wt(e,t,n){return Ut(e,t)?.name||n}async function Gt(e,t,n){return r.available?(await r.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function Kt(e){return Gt(`folder`,[],e??``)}function qt(e){return Gt(`file`,e??[],``)}var Jt=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],Yt=null,Xt=0,J=new Set;function Y(){Xt+=1;for(let e of J)e()}function Zt(e){return J.add(e),()=>J.delete(e)}function Qt(){return Xt}function $t(e){Yt=e,Y()}function en(){return(0,K.useSyncExternalStore)(Zt,Qt,Qt),Yt}var X=n();function tn({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:o,onOpen:s,onOpenFile:c,onSelectEntry:l,onOpenExternally:u,onRename:d,onDelete:m,onCopy:h,onPaste:g,onCreateFolder:_,onCreateFile:v,creationOnly:y=!1,onRefresh:b,onAddToTray:x,onAddFavorite:S,onRemoveFavorite:C,favoritePaths:w,onExtractArchive:T,allowCompression:E=!1,platform:D,onCompressTo:ee,onArchiveCreated:te}){let O=a(),k=en(),A=ne(t),[j,ae]=(0,K.useState)({verbs:[],safe:!0,loading:!1}),[se,le]=(0,K.useState)({recommended:[],other:[],loading:!1}),[N,P]=(0,K.useState)(null),ue=(0,K.useRef)(0),fe=(0,K.useRef)(0),pe=e?.paths.length===1,_e=e?.background?t?[t]:[]:e?.paths??[],ve=e?.background?t||null:pe&&n?.isDirectory?n.path:null;if((0,K.useEffect)(()=>{if(!e){ae({verbs:[],safe:!0,loading:!1}),le({recommended:[],other:[],loading:!1});return}let t=++ue.current;ae({verbs:[],safe:!0,loading:_e.length>0&&!A}),_e.length>0&&!A&&_t(_e).then(e=>{ue.current===t&&ae({...e,loading:!1})},()=>{ue.current===t&&ae({verbs:[],safe:!0,loading:!1})});let r=++fe.current;!A&&pe&&n?(le({recommended:[],other:[],loading:!0}),ft(n.path).then(e=>{fe.current===r&&le({...e,loading:!1})},()=>{fe.current===r&&le({recommended:[],other:[],loading:!1})})):le({recommended:[],other:[],loading:!1})},[e,pe,n?.path,n?.isDirectory,_e.length,A]),(0,K.useEffect)(()=>{if(!e||A||!ve){P(null);return}let t=!0;return at(ve).then(e=>{t&&P(e)},()=>{t&&P(null)}),()=>{t=!1}},[e,ve,A]),!e)return null;let F=[],I=[],xe=new Set((w??[]).map(oe)),Se=e.background?t?[t]:[]:e.paths,R=Se.length>0&&Se.every(e=>xe.has(oe(e))),z=()=>n?Ce(n.path,n.isDirectory):`Archive`,Ce=(e,t)=>{let n=re(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},Te=async(e,n=z())=>{let r=await yt(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?te?.(r.path,!0):f(r.error??O(`could_not_create_the_archive`))},De=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},Oe=async()=>{if(!ve||N===null)return;let e=await ot(ve,!N);e.ok?(P(e.enabled),b?.()):f(e.error??O(`could_not_change_the_case_sensitivity`))},B=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await st(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await st(e,t,`${a}\\${rn(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?b?.():f(o.error??O(`could_not_create_the_link`))},ke=async e=>{if(!n)return;let r=await Kt(t);r&&await B(e,n.path,r,re(n.path),e.endsWith(`-copy`))},Ae=async e=>{let n=k?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=oe(a)===oe(t);await B(n,r.path,t,re(r.path),i&&!o)}},Ne=async()=>{let t=(await et(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&$t({paths:t})},Fe=()=>{let e=k?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:O(`cancel_selected_link`),icon:(0,X.jsx)(Ge,{size:14}),onSelect:()=>$t(null)},...t?[{label:O(`hard_link`),icon:(0,X.jsx)(ce,{size:14}),separatorBefore:!0,onSelect:()=>void Ae(`hard`)}]:[],{label:O(`symbolic_link`),icon:(0,X.jsx)(ce,{size:14}),separatorBefore:!t,onSelect:()=>void Ae(`symbolic-file`)},...n?[{label:O(`directory_junction`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>void Ae(`junction`)},{label:O(`smart_copy`),icon:(0,X.jsx)(L,{size:14}),separatorBefore:!0,onSelect:()=>void Ae(`smart-copy`)},{label:O(`smart_mirror`),icon:(0,X.jsx)(L,{size:14}),onSelect:()=>void Ae(`smart-mirror`)},{label:O(`multi_version_smart_copy`),icon:(0,X.jsx)(L,{size:14}),onSelect:()=>void Ae(`multi-version-smart-copy`)},{label:O(`hardlink_copy`),icon:(0,X.jsx)(L,{size:14}),separatorBefore:!0,onSelect:()=>void Ae(`hard-copy`)},{label:O(`symbolic_link_copy`),icon:(0,X.jsx)(L,{size:14}),onSelect:()=>void Ae(`symbolic-copy`)}]:[]]};if(e.background){if(_&&I.push({label:O(`new_folder`),icon:(0,X.jsx)(V,{size:16}),shortcut:Mt(r.newFolder),onSelect:_}),v||_){let e=[];_&&(e.push({label:O(`folder`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>_(!1)}),A||e.push({label:O(`case_sensitive_folder`),icon:(0,X.jsx)(We,{size:14}),onSelect:()=>_(!0)})),v&&e.push(...Jt.map((e,t)=>({label:`${O(e.label)} (${e.extension})`,icon:(0,X.jsx)(ce,{size:14}),separatorBefore:t===0,onSelect:()=>v(e.extension)}))),F.push({label:O(`new`),icon:(0,X.jsx)(V,{size:14}),children:e,onSelect:()=>void 0})}if(A||F.push({label:O(`create_link`),icon:(0,X.jsx)(Pe,{size:14}),disabled:!k,children:Fe(),onSelect:()=>void 0}),y)return(0,X.jsx)(p,{items:F,onClose:o,quick:I,x:e.x,y:e.y});!A&&s&&F.push({label:O(`open_in_new_tab`),icon:(0,X.jsx)(V,{size:14}),onSelect:()=>s(t,!0)}),F.push({label:O(`copy_as_path`),icon:(0,X.jsx)(L,{size:14}),onSelect:()=>void De([t])}),x&&F.push({label:O(`add_to_file_tray`),icon:(0,X.jsx)(ye,{size:14}),onSelect:()=>x([t])}),!A&&(R?C:S)&&F.push({label:O(R?`remove_from_favorites`:`add_to_favorites`),icon:R?(0,X.jsx)(ge,{size:14}):(0,X.jsx)(de,{size:14}),onSelect:()=>R?C?.([t]):S?.([t])}),!A&&N!==null&&F.push({label:O(`case_sensitive_names`),icon:(0,X.jsx)(We,{size:14}),checked:N,onSelect:()=>void Oe()}),!A&&E&&(F.push({label:O(`open_in_terminal`),icon:(0,X.jsx)(je,{size:14}),onSelect:()=>void dt(t)}),F.push({label:O(`show_in_explorer`),icon:(0,X.jsx)(H,{size:14}),separatorBefore:!0,onSelect:()=>void gt(t)})),g&&I.push({label:O(`paste`),icon:(0,X.jsx)(he,{size:16}),disabled:!i,shortcut:Mt(r.paste),onSelect:()=>g(t)}),A||I.push({label:O(`properties`),icon:(0,X.jsx)(me,{size:16}),shortcut:Mt(r.properties),onSelect:()=>void lt([t])})}else{if(l&&F.push({label:O(`choose`),icon:(0,X.jsx)(we,{size:14}),onSelect:()=>{l(n?e.paths.length>1?[...e.paths]:[n.path]:[...e.paths])}}),s&&F.push({label:O(`open`),icon:(0,X.jsx)(Me,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&(u??c)?.(n.path)}}),n?.isDirectory&&(s&&F.push({label:O(`open_in_new_tab`),icon:(0,X.jsx)(V,{size:14}),onSelect:()=>s(n.path,!0)}),g&&F.push({label:O(`paste_into_folder`),icon:(0,X.jsx)(he,{size:14}),disabled:!i,onSelect:()=>g(n.path)}),A||F.push({label:O(`open_in_terminal`),icon:(0,X.jsx)(je,{size:14}),onSelect:()=>void dt(n.path)})),!A&&pe&&n&&!n.isDirectory&&ie(n.path)&&T&&F.push({label:O(`extract_archive`),icon:(0,X.jsx)(Ie,{size:14}),separatorBefore:!0,children:[{label:O(`extract_here`),icon:(0,X.jsx)(Ie,{size:14}),onSelect:()=>T(n.path,`here`)},{label:O(`extract_to_a_folder_named_after_the_archive`),icon:(0,X.jsx)(Ie,{size:14}),onSelect:()=>T(n.path,`named`)},{label:O(`auto_extract_to_the_current_folder`),icon:(0,X.jsx)(Ie,{size:14}),onSelect:()=>T(n.path,`auto`)},{label:O(`extract_to`),icon:(0,X.jsx)(H,{size:14}),separatorBefore:!0,onSelect:()=>T(n.path,`choose`)}],onSelect:()=>void 0}),!A&&pe&&n){let e=[];if(se.loading)e.push({label:O(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of se.recommended)e.push({label:t.name,group:O(`suggested_apps`),icon:t.icon?(0,X.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,X.jsx)(M,{size:14}),onSelect:()=>void pt(n.path,t.path).then(e=>{e||q(n.path)})});for(let t of se.other)e.push({label:t.name,group:O(`other_apps`),icon:t.icon?(0,X.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,X.jsx)(M,{size:14}),onSelect:()=>void pt(n.path,t.path).then(e=>{e||q(n.path)})})}e.push({label:O(`choose_another_app`),icon:(0,X.jsx)(M,{size:14}),separatorBefore:!0,onSelect:()=>void q(n.path)}),F.push({label:O(`open_with_2`),icon:(0,X.jsx)(M,{size:14}),children:e,onSelect:()=>void q(n.path)})}if(!A&&D===`windows`&&e.paths.length>0&&F.push({label:O(`share`),icon:(0,X.jsx)(Pe,{size:14}),separatorBefore:!0,onSelect:()=>void ut(e.paths).then(e=>{e.ok||f(e.error??O(`could_not_open_the_share_sheet`))})}),A||F.push({label:O(`compress`),icon:(0,X.jsx)(Ie,{size:14}),separatorBefore:!0,children:[{label:O(`compress_to_zip`),icon:(0,X.jsx)(Ie,{size:14}),onSelect:()=>void Te(e.paths)},{label:O(`compress_to`),icon:(0,X.jsx)(Ie,{size:14}),onSelect:()=>ee?.(e.paths,z())}],onSelect:()=>void 0}),!A&&(e?.paths.length??0)>0){let e=[{label:O(`select_link_source`),icon:(0,X.jsx)(Pe,{size:14}),onSelect:()=>void Ne()},...k?[{label:O(`cancel_selected_link`),icon:(0,X.jsx)(Ge,{size:14}),onSelect:()=>$t(null)}]:[],...pe&&n?n.isDirectory?[{label:O(`symbolic_link`),icon:(0,X.jsx)(H,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`symbolic-folder`)},{label:O(`directory_junction`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>void ke(`junction`)},{label:O(`smart_copy`),icon:(0,X.jsx)(L,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`smart-copy`)},{label:O(`smart_mirror`),icon:(0,X.jsx)(L,{size:14}),onSelect:()=>void ke(`smart-mirror`)},{label:O(`multi_version_smart_copy`),icon:(0,X.jsx)(L,{size:14}),onSelect:()=>void ke(`multi-version-smart-copy`)},{label:O(`hardlink_copy`),icon:(0,X.jsx)(L,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`hard-copy`)},{label:O(`symbolic_link_copy`),icon:(0,X.jsx)(L,{size:14}),onSelect:()=>void ke(`symbolic-copy`)}]:[{label:O(`symbolic_link`),icon:(0,X.jsx)(ce,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`symbolic-file`)},{label:O(`hard_link`),icon:(0,X.jsx)(ce,{size:14}),onSelect:()=>void ke(`hard`)}]:[]];F.push({label:O(`create_link`),icon:(0,X.jsx)(Pe,{size:14}),children:e,onSelect:()=>void 0})}!A&&n?.isDirectory&&N!==null&&F.push({label:O(`case_sensitive_names`),icon:(0,X.jsx)(We,{size:14}),checked:N,onSelect:()=>void Oe()}),F.push({label:O(`copy_as_path`),icon:(0,X.jsx)(L,{size:14}),onSelect:()=>void De(e.paths)}),x&&F.push({label:O(`add_to_file_tray`),icon:(0,X.jsx)(ye,{size:14}),onSelect:()=>x(e.paths)}),!A&&(R?C:S)&&F.push({label:O(R?`remove_from_favorites`:`add_to_favorites`),icon:R?(0,X.jsx)(ge,{size:14}):(0,X.jsx)(de,{size:14}),onSelect:()=>R?C?.(Se):S?.(Se)}),A||F.push({label:O(`show_in_explorer`),icon:(0,X.jsx)(H,{size:14}),separatorBefore:!0,onSelect:()=>void gt(Se[0])}),h&&I.push({label:O(`cut`),icon:(0,X.jsx)(G,{size:16}),shortcut:Mt(r.cut),onSelect:()=>h(e.paths,!0)},{label:O(`copy`),icon:(0,X.jsx)(L,{size:16}),shortcut:Mt(r.copy),onSelect:()=>h(e.paths,!1)}),pe&&n&&d&&I.push({label:O(`rename`),icon:(0,X.jsx)(Ee,{size:16}),shortcut:Mt(r.rename),onSelect:()=>d(n.path)}),m&&I.push({label:O(`delete`),icon:(0,X.jsx)(be,{size:16}),danger:!0,shortcut:Mt(r.delete),onSelect:()=>m(e.paths)}),A||I.push({label:O(`properties`),icon:(0,X.jsx)(me,{size:16}),shortcut:Mt(r.properties),onSelect:()=>void lt(e.paths)})}if(j.loading)F.push({label:O(`more_actions`),icon:(0,X.jsx)(M,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(j.verbs.length>0){let e={items:[],children:new Map};for(let t of j.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,X.jsx)(nn,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void vt(_e,j.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,X.jsx)(nn,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];F.push({label:O(j.safe?`more_actions`:`more_actions_extensions`),icon:(0,X.jsx)(M,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,X.jsx)(p,{items:F,onClose:o,quick:I,x:e.x,y:e.y})}function nn({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,X.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,X.jsx)(Me,{size:14});case`document`:return(0,X.jsx)(_e,{size:14});case`cut`:return(0,X.jsx)(G,{size:14});case`copy`:return(0,X.jsx)(L,{size:14});case`paste`:return(0,X.jsx)(he,{size:14});case`trash`:return(0,X.jsx)(be,{size:14});case`pencil`:return(0,X.jsx)(Ee,{size:14});case`gear`:return(0,X.jsx)(me,{size:14});case`star`:return(0,X.jsx)(Oe,{size:14});case`pin`:return(0,X.jsx)(Le,{size:14});case`executable`:return(0,X.jsx)(M,{size:14});case`share`:return(0,X.jsx)(Pe,{size:14});case`arrow`:return(0,X.jsx)(Me,{size:14});default:return(0,X.jsx)(He,{size:14})}}function rn(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}var an=O();function on({value:e,options:t,onChange:n,disabled:r,width:i,icon:o,tooltip:s,zIndex:c=3200}){let l=a(),[u,d]=(0,K.useState)(null),f=(0,K.useRef)(null),p=t.find(t=>t.value===e)??t[0];return(0,K.useEffect)(()=>{if(!u)return;let e=()=>d(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[u]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(sn,{$icon:o!==void 0,"aria-expanded":u!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(u){d(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;d({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:f,style:i&&!o?{width:i}:void 0,title:s??p?.title,type:`button`,children:[o===void 0?(0,X.jsx)(cn,{children:p?.label??``}):(0,X.jsx)(ln,{children:o}),o===void 0&&(0,X.jsx)(un,{children:(0,X.jsx)(De,{size:11})})]}),u&&(0,an.createPortal)((0,X.jsx)(dn,{"aria-label":l(`options`),"data-select-menu":`true`,$menuZIndex:c,role:`listbox`,style:{bottom:u.bottom,left:u.left,minWidth:u.width,top:u.top},children:t.map(t=>(0,X.jsxs)(fn,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),d(null)},role:`option`,title:t.title,type:`button`,children:[(0,X.jsx)(pn,{children:t.label}),t.value===e&&(0,X.jsx)(we,{size:11})]},t.value))}),document.body)]})}var sn=i.button`
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
`,cn=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ln=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,un=i.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,dn=i.div`
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
    ${C}
`,fn=i.button`
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
`,pn=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Z=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],mn=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],hn=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],gn=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],_n=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function vn({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=a(),o=(0,K.useRef)(null),[s,c]=(0,K.useState)(e),[l,u]=(0,K.useState)(t),[d,f]=(0,K.useState)(`zip`),[p,m]=(0,K.useState)(`5`),[h,g]=(0,K.useState)(`default`),[_,v]=(0,K.useState)(`none`),[y,b]=(0,K.useState)(``),[x,S]=(0,K.useState)(`0`),[C,w]=(0,K.useState)(!1);(0,K.useEffect)(()=>{o.current?.focus(),o.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=Z.find(e=>e.value===d)??Z[0],E=d===`zip`||d===`zipx`,D=_!==`none`,ee=E||d===`7z`,te=d===`zip`||d===`7z`,O=async()=>{if(C||!l.trim()||!s||D&&y.length===0)return;w(!0);let e=await r({directory:s,name:l.trim(),format:d,level:T.level?Number(p):0,method:E?h:null,encryption:ee?_:`none`,password:D?y:void 0,splitSize:te?Number(x):0});w(!1),e&&n()};return(0,an.createPortal)((0,X.jsx)(yn,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,X.jsxs)(Q,{"aria-modal":`true`,role:`dialog`,children:[(0,X.jsx)(bn,{children:i(`compress_to`)}),(0,X.jsxs)(xn,{children:[(0,X.jsx)(Sn,{children:i(`archive_name`)}),(0,X.jsx)(Cn,{onChange:e=>u(e.target.value),ref:o,value:l,onKeyDown:e=>{e.key===`Enter`&&O()}}),(0,X.jsx)(wn,{children:T.extension})]}),(0,X.jsxs)(xn,{children:[(0,X.jsx)(Sn,{children:i(`format`)}),(0,X.jsx)(on,{onChange:e=>f(e),options:Z.map(e=>({value:e.value,label:i(e.label)})),value:d,width:236,zIndex:3700})]}),(0,X.jsxs)(xn,{children:[(0,X.jsx)(Sn,{children:i(`method`)}),(0,X.jsx)(on,{disabled:!E,onChange:g,options:mn.map(e=>({...e,label:i(e.label)})),value:E?h:`default`,width:236,zIndex:3700})]}),(0,X.jsxs)(xn,{children:[(0,X.jsx)(Sn,{children:i(`encryption`)}),(0,X.jsx)(on,{disabled:!ee,onChange:e=>{v(e),e===`none`&&b(``)},options:hn.map(e=>({...e,label:i(e.label)})),value:ee?_:`none`,width:236,zIndex:3700})]}),D&&(0,X.jsxs)(xn,{children:[(0,X.jsx)(Sn,{children:i(`password`)}),(0,X.jsx)(Cn,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,X.jsxs)(xn,{children:[(0,X.jsx)(Sn,{children:i(`split_volumes`)}),(0,X.jsx)(on,{disabled:!te,onChange:S,options:gn.map(e=>({...e,label:i(e.label)})),value:te?x:`0`,width:236,zIndex:3700})]}),(0,X.jsxs)(xn,{children:[(0,X.jsx)(Sn,{children:i(`compression_level`)}),(0,X.jsx)(on,{disabled:!T.level,onChange:m,options:_n.map(e=>({...e,label:i(e.label)})),value:T.level?p:d===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,X.jsxs)(xn,{$stack:!0,children:[(0,X.jsx)(Sn,{children:i(`destination`)}),(0,X.jsxs)(Tn,{children:[(0,X.jsx)(En,{title:s,children:s}),(0,X.jsx)(On,{disabled:C,onClick:()=>void Kt(s).then(e=>{e&&c(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,X.jsxs)(Dn,{children:[(0,X.jsx)(On,{disabled:C,onClick:n,type:`button`,children:i(`cancel`)}),(0,X.jsx)(kn,{disabled:C||!l.trim()||D&&y.length===0,onClick:()=>void O(),type:`button`,children:i(C?`compressing`:`compress`)})]})]})}),document.body)}var yn=i.div`
    position: fixed;
    inset: 0;
    z-index: 3600;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    ${b}
`,Q=i.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${T}
`,bn=i.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,xn=i.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Sn=i.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,Cn=i.input`
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
`,wn=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,Tn=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,En=i.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Dn=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,On=i.button`
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
`,kn=i(On)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`,An=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),jn=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Mn=new Set([`png`,`jpg`,`jpeg`,`jfif`,`jpe`,`gif`,`webp`,`bmp`,`avif`,`ico`,`svg`,`apng`]),Nn=new Set([`tif`,`tiff`,`psd`,`psb`,`tga`,`dds`,`hdr`,`exr`,`pcx`,`dib`,`jxl`]),Pn=new Set([...Mn,...Nn]),Fn=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function In({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:s,selectionNote:c,emptyNote:l}){let u=a(),[f,p]=(0,K.useState)(!1),[m,v]=(0,K.useState)(!1),[b,x]=(0,K.useState)(!1),[C,w]=(0,K.useState)(0),[T,E]=(0,K.useState)(0),[D,te]=(0,K.useState)(null),[O,k]=(0,K.useState)(!1),[ne,A]=(0,K.useState)(!1),j=(0,K.useRef)(null),re=(0,K.useRef)(null),ie=(0,K.useRef)(null),ae=(0,K.useRef)(null),[oe,se]=(0,K.useState)(()=>{let e=ee(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),le=r?e?.path??null:null,M=h(le),N=e?Ln(e.name):``,P=!!e&&!e.isDirectory&&An.has(N),ue=!!e&&!e.isDirectory&&jn.has(N),de=!!e&&!e.isDirectory&&Pn.has(N),fe=!!e&&!e.isDirectory&&Fn.has(N),pe=!!e&&!e.isDirectory&&N===`pdf`,me=S(P?M:null,512,e?.modified??0),he=de&&Mn.has(N),ge=S(de&&!he?M:null,1024,e?.modified??0),_e=g(he?M:null,e?.modified??0,N),ve=g(P||ue?M:null,e?.modified??0,N),F=_(pe?M:null,e?.modified??0),I=y(!P&&!ue&&!de&&!fe&&!pe?M:null,e?.isDirectory??!1);if((0,K.useEffect)(()=>{p(!1),v(!1),x(!1),w(0),E(0),A(!1)},[le]),(0,K.useEffect)(()=>{if(!M||!fe){te(null),k(!1);return}let e=!0;return k(!0),te(null),d(M).then(t=>{e&&(te(t),k(!1))},()=>{e&&(te({text:null,truncated:!1,error:u(`could_not_read_this_file`)}),k(!1))}),()=>{e=!1}},[M,fe]),!e&&!l)return null;let ye=e=>{ie.current={x:e.clientX,width:re.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},L=e=>{let t=ie.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},be=e=>{ie.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},xe=e=>{ae.current={y:e.clientY,height:oe},e.currentTarget.setPointerCapture(e.pointerId)},Se=e=>{let t=ae.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);se(n),o(`yafm.preview.media.height`,n)},R=e=>{ae.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,X.jsxs)(zn,{$open:r,children:[r&&(0,X.jsx)(Bn,{onPointerDown:ye,onPointerMove:L,onPointerUp:be,onDoubleClick:()=>n(320),title:u(`drag_to_resize_double_click_to_reset`)}),(0,X.jsx)(Vn,{ref:re,style:{width:r?t:0},children:(0,X.jsxs)(Hn,{children:[(0,X.jsx)(H,{size:56}),(0,X.jsx)(`span`,{children:l})]})})]});let z=()=>{let e=j.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,X.jsxs)(zn,{$open:r,children:[r&&(0,X.jsx)(Bn,{onPointerDown:ye,onPointerMove:L,onPointerUp:be,onDoubleClick:()=>n(320),title:u(`drag_to_resize_double_click_to_reset`)}),(0,X.jsxs)(Vn,{ref:re,style:{width:r?t:0},children:[(0,X.jsx)(Un,{style:{height:oe},children:P&&ve&&!f?(0,X.jsxs)(Gn,{onPointerEnter:()=>x(!0),onPointerLeave:()=>x(!1),children:[(0,X.jsx)(`video`,{autoPlay:s,controls:!1,muted:!i,onClick:z,onDurationChange:e=>w(e.currentTarget.duration||0),onError:()=>p(!0),onLoadedMetadata:e=>{w(e.currentTarget.duration||0),E(e.currentTarget.currentTime)},onPause:()=>v(!1),onPlay:()=>v(!0),onTimeUpdate:e=>E(e.currentTarget.currentTime),playsInline:!0,poster:me??void 0,preload:`metadata`,ref:j,src:ve}),(0,X.jsx)(Kn,{$visible:!m,onClick:z,title:u(`play`),type:`button`,children:(0,X.jsx)(Be,{size:28})}),(0,X.jsxs)(qn,{$visible:b,onClick:e=>e.stopPropagation(),children:[(0,X.jsxs)(Jn,{children:[(0,X.jsx)(`span`,{children:Rn(T)}),(0,X.jsx)(`span`,{children:Rn(C)})]}),(0,X.jsx)(Yn,{"aria-label":u(`seek`),max:C||0,min:0,onChange:e=>{let t=j.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,E(n)},step:.1,type:`range`,value:Math.min(T,C||0)})]})]}):ue&&ve?(0,X.jsx)(`audio`,{controls:!0,src:ve}):de&&(_e??ge)?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:_e??ge}):pe&&F&&!ne?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>A(!0),src:F}):pe?(0,X.jsx)(ce,{size:64}):fe?(0,X.jsx)(Xn,{children:O||!D?(0,X.jsx)(Zn,{children:u(`loading`)}):D.error?(0,X.jsx)(Zn,{children:D.error}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)($,{children:D.text}),D.truncated&&(0,X.jsx)(Zn,{children:u(`showing_the_first_256_kb`)})]})}):P&&me?(0,X.jsx)(`img`,{alt:``,src:me}):I?(0,X.jsx)(`img`,{alt:``,src:I}):e.isDirectory?(0,X.jsx)(H,{size:64}):(0,X.jsx)(ce,{size:64})}),(0,X.jsx)(Wn,{onDoubleClick:()=>{se(210),o(`yafm.preview.media.height`,210)},onPointerDown:xe,onPointerMove:Se,onPointerUp:R,title:u(`drag_to_resize_double_click_to_reset`)}),(0,X.jsxs)(Qn,{children:[(0,X.jsx)($n,{title:e.path,children:e.name}),c&&(0,X.jsx)(er,{children:c}),(0,X.jsx)(tr,{children:e.fields.map(e=>(0,X.jsxs)(nr,{children:[(0,X.jsx)(rr,{children:e.label}),(0,X.jsx)(ir,{title:e.value,children:e.value})]},e.label))})]})]})]})}function Ln(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function Rn(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var zn=i.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,Bn=i.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Vn=i.aside`
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
`,Hn=i.div`
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
`,Un=i.div`
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
`,Wn=i.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Gn=i.div`
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
`,Kn=i.button`
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
`,qn=i.div`
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
`,Jn=i.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Yn=i.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Xn=i.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,$=i.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,Zn=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,Qn=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,$n=i.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,er=i.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,tr=i.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,nr=i.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,rr=i.span`
    color: var(--text-muted);
`,ir=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,ar=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],or=[...ar],sr={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},cr={folder:e=>(0,X.jsx)(H,{size:e}),home:e=>(0,X.jsx)(Je,{size:e}),desktop:e=>(0,X.jsx)(W,{size:e}),documents:e=>(0,X.jsx)(le,{size:e}),downloads:e=>(0,X.jsx)(Ke,{size:e}),pictures:e=>(0,X.jsx)(Ue,{size:e}),music:e=>(0,X.jsx)(ze,{size:e}),videos:e=>(0,X.jsx)(R,{size:e}),drive:e=>(0,X.jsx)(ve,{size:e}),image:e=>(0,X.jsx)(I,{size:e}),video:e=>(0,X.jsx)(qe,{size:e}),audio:e=>(0,X.jsx)(Re,{size:e}),text:e=>(0,X.jsx)(ke,{size:e}),code:e=>(0,X.jsx)(Ae,{size:e}),clock:e=>(0,X.jsx)(U,{size:e}),star:e=>(0,X.jsx)(Oe,{size:e}),file:e=>(0,X.jsx)(ce,{size:e}),archive:e=>(0,X.jsx)(Ie,{size:e}),pdf:e=>(0,X.jsx)(se,{size:e}),executable:e=>(0,X.jsx)(M,{size:e}),font:e=>(0,X.jsx)(fe,{size:e}),database:e=>(0,X.jsx)(Se,{size:e}),config:e=>(0,X.jsx)(B,{size:e}),spreadsheet:e=>(0,X.jsx)(Te,{size:e}),presentation:e=>(0,X.jsx)(xe,{size:e}),document:e=>(0,X.jsx)(_e,{size:e}),app:e=>(0,X.jsx)(He,{size:e}),gear:e=>(0,X.jsx)(me,{size:e}),pin:e=>(0,X.jsx)(Le,{size:e}),trash:e=>(0,X.jsx)(be,{size:e}),overview:e=>(0,X.jsx)(ue,{size:e}),book:e=>(0,X.jsx)(Ve,{size:e}),briefcase:e=>(0,X.jsx)(z,{size:e}),cloud:e=>(0,X.jsx)(Fe,{size:e}),gamepad:e=>(0,X.jsx)(pe,{size:e}),camera:e=>(0,X.jsx)(Ne,{size:e}),terminal:e=>(0,X.jsx)(je,{size:e}),server:e=>(0,X.jsx)(Ce,{size:e}),package:e=>(0,X.jsx)(ye,{size:e}),globe:e=>(0,X.jsx)(N,{size:e}),heart:e=>(0,X.jsx)(de,{size:e}),share:e=>(0,X.jsx)(Ce,{size:e}),favorites:e=>(0,X.jsx)(de,{size:e})};function lr(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function ur(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??ar)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||or.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=lr(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${sr[n]??n}${dr(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function dr(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function fr({panel:e,size:t=16}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=E(n);if(r)return(0,X.jsx)(`img`,{alt:``,src:r,style:{width:t,height:t,objectFit:`contain`}});let i=e.icon?cr[e.icon]:void 0;if(i)return(0,X.jsx)(X.Fragment,{children:i(t)});switch(e.kind){case`quick`:return(0,X.jsx)(H,{size:t});case`recent`:return(0,X.jsx)(U,{size:t});case`frequent`:return(0,X.jsx)(Oe,{size:t});case`drives`:return(0,X.jsx)(ve,{size:t});case`home`:return(0,X.jsx)(Je,{size:t});case`share`:return(0,X.jsx)(Ce,{size:t});case`favorites`:return(0,X.jsx)(de,{size:t});default:return(0,X.jsx)(H,{size:t})}}function pr({place:e,size:t=18}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=E(n);return r?(0,X.jsx)(`img`,{alt:``,height:t,src:r,style:{objectFit:`contain`},width:t}):e.icon&&cr[e.icon]?(0,X.jsx)(X.Fragment,{children:cr[e.icon](t)}):(0,X.jsx)(H,{size:t})}var mr=`#64748b`;function hr(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function gr({x:e,y:t,tags:n,allTags:r,colors:i,onChange:o,onClose:s}){let c=a(),[l,u]=(0,K.useState)(``),[d,f]=(0,K.useState)(`#2dd4bf`),p=(0,K.useRef)(null);(0,K.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||s()},t=e=>{e.key===`Escape`&&s()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,s),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,s)}},[s]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{o(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{o(n,{...i,[e]:t})},v=()=>{let e=l.trim();e.length!==0&&(o(n.includes(e)?n:[...n,e],{...i,[e]:d}),u(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,an.createPortal)((0,X.jsxs)(_r,{"data-tag-menu":`true`,ref:p,style:{left:y,top:b},children:[(0,X.jsxs)(vr,{children:[(0,X.jsx)(`span`,{children:c(`tags`)}),(0,X.jsx)(yr,{onClick:s,title:c(`close`),type:`button`,children:(0,X.jsx)(Ge,{size:11})})]}),(0,X.jsxs)(br,{children:[m.length===0&&(0,X.jsx)(wr,{children:c(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,X.jsxs)(xr,{children:[(0,X.jsx)(Sr,{"aria-label":c(`color_of_tag`,{tag:e}),onChange:t=>_(e,t.target.value),title:c(`change_this_tag_s_color`),type:`color`,value:t}),(0,X.jsxs)(Cr,{$color:t,$ink:hr(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,X.jsx)(we,{size:11}),(0,X.jsx)(`span`,{children:e})]})]},e)})]}),(0,X.jsxs)(Tr,{children:[(0,X.jsx)(Sr,{"aria-label":c(`color_of_the_new_tag`),onChange:e=>f(e.target.value),title:c(`color_of_the_new_tag`),type:`color`,value:d}),(0,X.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:c(`new_tag`),spellCheck:!1,value:l}),(0,X.jsx)(Er,{onClick:v,type:`button`,children:c(`add`)})]})]}),document.body)}var _r=i.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${T}
`,vr=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,yr=i.button`
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
`,br=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,xr=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Sr=i.input`
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
`,Cr=i.button`
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
`,wr=i.span`
    font-size: 11px;
    color: var(--text-muted);
`,Tr=i.div`
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
`,Er=i.button`
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
`,Dr={file:ce,folder:H,text:ke,code:Ae,image:I,video:qe,audio:Re,archive:Ie,pdf:se,executable:M,font:fe,database:Se,config:B,spreadsheet:Te,presentation:xe,document:_e},Or={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function kr(e){let t=e.lastIndexOf(`.`);return t>0?Or[e.slice(t).toLowerCase()]??`file`:`file`}function Ar({name:e,size:t}){let n=Dr[e??`file`]??ce;return(0,X.jsx)(n,{size:t})}function jr({path:e,name:t,isDirectory:n,size:r=18}){let i=y(e,n);return i?(0,X.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,X.jsx)(H,{size:r}):(0,X.jsx)(Ar,{name:kr(t),size:r})}var Mr=`application/x-yafm-paths`,Nr=[Mr,`text/uri-list`];function Pr(e){return e?.types.some(e=>Nr.includes(e.toLowerCase()))??!1}function Fr(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Mr);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Lr).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Ir=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Lr(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Ir?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function Rr(e){return`file:///`+e.replace(/\\/g,`/`).split(`/`).map((e,t)=>t===0&&/^[a-zA-Z]:$/.test(e)?e:encodeURIComponent(e)).join(`/`)}function zr(e,t,n=!0){e.dataTransfer.setData(Mr,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.setData(`text/uri-list`,t.map(Rr).join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Br({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:o,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=a(),[h,g]=(0,K.useState)(()=>new Set),[_,v]=(0,K.useState)(!1),y=(0,K.useRef)(null),b=(0,K.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),x=(0,K.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),S=(0,K.useRef)(null);if((0,K.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Pr(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Fr(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,c]),!r)return null;let C=new Set([...e,...t].map(e=>e.path)),w=C.size>0&&[...C].every(e=>h.has(e)),T=C.size,E=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},D=()=>{g(w?new Set:C)},ee=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},te=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},O=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},ne=()=>{let e=b.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},A=()=>{let e=b.map(e=>e.path);e.length!==0&&f(e)},j=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,o,!0),r.length>0&&p(r,o,!1),g(new Set)},re=(e,t)=>{let n=h.has(e.path);return(0,X.jsxs)(Qr,{$checked:n,draggable:!0,onClick:()=>E(e.path),onDragStart:r=>{zr(r,n&&h.size>0?[...new Set([...b,...x].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,X.jsx)($r,{$checked:n,onClick:t=>{t.stopPropagation(),E(e.path)},type:`button`,children:n&&(0,X.jsx)(we,{size:8})}),(0,X.jsx)(jr,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,X.jsxs)(ei,{children:[(0,X.jsx)(ti,{children:e.name}),(0,X.jsx)(ni,{children:k(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},ie=e=>{Pr(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,X.jsxs)(Vr,{$dragging:_,"data-tray":`true`,ref:S,style:{left:i.x,top:i.y},onDragEnter:ie,onDragOver:ie,onDrop:e=>{let{paths:t}=Fr(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,X.jsxs)(Hr,{onPointerDown:ee,onPointerMove:te,onPointerUp:O,children:[(0,X.jsxs)(Ur,{children:[(0,X.jsx)(ye,{size:12}),m(`tray`),(0,X.jsx)(Wr,{children:T})]}),(0,X.jsxs)(Gr,{onPointerDown:e=>e.stopPropagation(),children:[(0,X.jsx)(Kr,{onClick:D,title:m(w?`select_none`:`select_all`),type:`button`,children:m(w?`none`:`all`)}),(0,X.jsx)(Kr,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,X.jsx)(qr,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,X.jsx)(Ge,{size:10})})]})]}),(0,X.jsxs)(Jr,{children:[(0,X.jsxs)(Xr,{children:[m(`in_this_app`),(0,X.jsx)(Wr,{children:e.length})]}),e.length===0&&(0,X.jsx)(Yr,{children:m(`drag_files_or_folders_here`)}),e.map(e=>re(e,!0)),t.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(Xr,{$clipboard:!0,children:[m(`clipboard`),(0,X.jsx)(Wr,{children:t.length}),n&&(0,X.jsx)(Zr,{children:m(`cut`)})]}),t.map(e=>re(e,n))]})]}),(0,X.jsxs)(ri,{children:[(0,X.jsx)(ii,{$plain:!0,disabled:b.length===0,onClick:A,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,X.jsx)(ii,{disabled:h.size===0||!o,onClick:j,type:`button`,children:m(`move_here`)}),(0,X.jsx)(ii,{$danger:!0,disabled:b.length===0,onClick:ne,type:`button`,children:m(`remove`)})]})]})}var Vr=i.div`
    position: fixed;
    z-index: 55;
    display: flex;
    flex-direction: column;
    width: 300px;
    max-height: 380px;
    ${x}
    ${T}
    overflow: hidden;
    user-select: none;
    cursor: ${({$dragging:e})=>e?`grabbing`:`default`};
    transition: box-shadow 160ms ease;
`,Hr=i.div`
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
`,Ur=i.span`
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
`,Wr=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Gr=i.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,Kr=i.button`
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
`,qr=i.button`
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
`,Jr=i.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Yr=i.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Xr=i.div`
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
`,Zr=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,Qr=i.div`
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
`,$r=i.button`
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
`,ei=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,ti=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ni=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ri=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,ii=i.button`
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
`,ai={shares:[],webRunning:!1,webPort:0,urls:[],preferredUrl:null,deviceId:``,deviceName:``,fingerprint:``};async function oi(){return r.available?await r.request(`share.list`):ai}async function si(e,t){return r.available?await r.request(`share.add`,{path:e,mode:t}):ai}async function ci(e){return r.available?await r.request(`share.remove`,{id:e}):ai}async function li(e,t){return r.available?await r.request(`share.mode`,{id:e,mode:t}):ai}async function ui(){return r.available?(await r.request(`share.peers`)).peers??[]:[]}async function di(){return r.available?(await r.request(`share.peers.refresh`)).peers??[]:[]}async function fi(e,t){r.available&&await r.request(`share.pair.start`,{host:e,port:t})}async function pi(e,t){r.available&&await r.request(`share.pair.respond`,{requestId:e,accept:t})}async function mi(e,t){r.available&&await r.request(`share.port`,{mode:t,port:e})}var hi=`yafm://share/`;function gi(e){return e.toLowerCase().startsWith(hi)}function _i(e){if(!gi(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function vi(e,t,n=``){let r=`${hi}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function yi(e){let t=_i(e);if(!t||!r.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await r.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:vi(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:vi(t.deviceId,t.shareId,n.parent),total:n.entries?.length??0,signature:0,entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function bi(e){let t=_i(e);if(!t||!r.available)throw Error(`This shared file is only available in the desktop app.`);let n=await r.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function xi(e){await c(await bi(e))}async function Si(){return r.available?await r.request(`share.certificate`):null}async function Ci(e,t){return await r.request(`share.certificate.import`,{path:e,password:t})}async function wi(){return await r.request(`share.certificate.reset`)}async function Ti(){return r.available?(await r.request(`share.devices.clear`)).devices??[]:[]}async function Ei(){return r.available?(await r.request(`share.devices.list`)).devices??[]:[]}async function Di(e,t,n){return r.available?(await r.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function Oi(e){return r.available?(await r.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function ki(){return r.available?(await r.request(`share.access.status`)).hasPassword:!1}async function Ai(e){return r.available?(await r.request(`share.access.password`,{password:e})).hasPassword:!1}var ji=60,Mi=300,Ni=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],Pi=new Set,Fi=`yafm.columnWidths`,Ii=`yafm.reset-column-widths`,Li=64,Ri=720,zi=160,Bi=190,Vi=120;function Hi({listing:e,loading:t,error:n,find:r=u,view:i,showImages:c,imageStripHeight:d=Bi,onImageStripHeight:p,onSort:h,onSetTags:g,onOpen:_,onOpenFile:y,onSelectEntry:b,onOpenExternally:x,showCheckboxes:S=!0,openOnSingleClick:C=!1,shortcuts:T=bt,enableShortcuts:E=!0,refreshToken:D=0,onRefresh:O,onRename:k,onClipboardChanged:ne,cutPaths:ie=Pi,onTransfer:oe,onAddToTray:se,platform:ce,onAddFavorite:le,onRemoveFavorite:M,favoritePaths:N,onExtractArchive:P,onPaste:ue,confirmDelete:de=!1,previewVideoAudio:fe=!1,previewVideoAutoplay:pe=!1,showDetails:me=!0,onPreviewInfo:he,onActivate:ge,groupOf:_e,onGridScroll:ve,gridFooter:F,allowBackgroundMenu:I=!0,readOnly:ye=!1,onSelectionChange:L,onSelectionCountChange:be,selectionMenuRequest:xe,selectionMenuId:Se,singleSelect:R=!1,pendingRename:z=null,pendingRenameToken:Ce=0,selectMatchesToken:Te=0,onLoadMore:Ee,onEnsureComplete:De,selectAllToken:Oe=0}){let B=a(),ke=Ht(),Ae=(0,K.useRef)(null),je=(0,K.useRef)(null),Me=(0,K.useRef)(null),V=(0,K.useRef)(null),H=(0,K.useRef)(0),Ne=(0,K.useRef)(null),[Pe,Fe]=(0,K.useState)(Mi),[Ie,Le]=(0,K.useState)({top:0,height:640}),Re=(0,K.useRef)(null),U=(0,K.useRef)(null),ze=(0,K.useRef)(!1),Be=(0,K.useRef)(!1),Ve=(0,K.useRef)(null),He=(0,K.useRef)(null),[Ue,We]=(0,K.useState)(null),[Ge,Ke]=(0,K.useState)(d),[W,G]=(0,K.useState)(()=>new Set),[qe,Je]=(0,K.useState)(()=>m(Fi)??{}),Ze=(0,K.useRef)(W),$e=(0,K.useRef)([]);Ze.current=W,(0,K.useEffect)(()=>L?.([...W]),[W,L]),(0,K.useEffect)(()=>be?.(W.size),[W,be]),(0,K.useEffect)(()=>{let e=xe;if(!e||e.token===ot.current)return;ot.current=e.token;let t=[...Ze.current];t.length!==0&&(at({x:e.x,y:e.y,paths:t,background:!1}),Xe().then(wt,()=>wt(!1)))},[xe]);let[et,at]=(0,K.useState)(null),ot=(0,K.useRef)(0),[st,ut]=(0,K.useState)(null),[q,ft]=(0,K.useState)(null),[pt,mt]=(0,K.useState)(null),ht=(0,K.useRef)(pt);ht.current=pt;let gt=(0,K.useRef)(0),_t=(0,K.useRef)(ge);_t.current=ge;let[vt,xt]=(0,K.useState)(()=>{let e=ee(`yafm.preview.width`,320);return e>=220?e:320}),St=(0,K.useCallback)(e=>{xt(e),o(`yafm.preview.width`,e)},[]),[Ct,wt]=(0,K.useState)(!1),Et=(0,K.useCallback)((e,t)=>{let n=[...Ze.current];n.length!==0&&(at({x:e,y:t,paths:n,background:!1}),Xe().then(wt,()=>wt(!1)))},[]);(0,K.useEffect)(()=>{if(Se)return w(Se,W.size>0?Et:null),()=>w(Se,null)},[Se,W,Et]),(0,K.useEffect)(()=>{G(new Set),mt(null),at(null),U.current=null},[e?.path]),(0,K.useEffect)(()=>{Ke(d)},[d]),(0,K.useEffect)(()=>{G(new Set),mt(null),U.current=null},[D]);let Dt=e=>{Re.current={y:e.clientY,height:Ge},e.currentTarget.setPointerCapture(e.pointerId)},Ot=e=>{let t=Re.current;if(!t)return;let n=Math.max(Vi,Math.round(window.innerHeight*.7));Ke(Math.min(n,Math.max(Vi,t.height+t.y-e.clientY)))},jt=e=>{Re.current&&(Re.current=null,e.currentTarget.releasePointerCapture(e.pointerId),p?.(Ge))},Mt=()=>{Ke(Bi),p?.(Bi)},Nt=r.query.length>0,Ft=(0,K.useMemo)(()=>Ni.filter(e=>i.columns?.includes(e.id)),[i.columns]),It=i.columns?.includes(`linkTarget`)??!1,Lt=(0,K.useCallback)(e=>Math.min(Ri,Math.max(Li,qe[e.id]??e.width)),[qe]),zt=(0,K.useMemo)(()=>`minmax(160px, 1fr) ${Ft.map(e=>`${Lt(e)}px`).join(` `)}`.trim(),[Ft,Lt]),Bt=(0,K.useRef)(null),Vt=(0,K.useRef)(null),Wt=()=>Math.floor(Vt.current?.getBoundingClientRect().width??zi),Gt=e=>{let t=Ft[0];t&&(e.preventDefault(),e.stopPropagation(),Bt.current={left:{id:t.id,start:Lt(t)},startX:e.clientX,nameStart:Wt()})},Kt=(e,t)=>{let n=Ft[t],r=Ft[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),Bt.current={left:{id:n.id,start:Lt(n)},right:{id:r.id,start:Lt(r)},startX:e.clientX,nameStart:0})},qt=e=>Je(t=>{let n={...t};return delete n[e],l(Fi,n),n});(0,K.useEffect)(()=>{let e=e=>{let t=Bt.current;if(!t)return;let n=e.clientX-t.startX;Je(e=>{if(!t.right){let r=Math.max(0,t.nameStart-zi),i=Math.min(Math.min(Ri,t.left.start+r),Math.max(Li,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(Ri,Math.max(Li,t.left.start+n)),a=Math.min(Math.min(Ri,r-Li),Math.max(Math.max(Li,r-Ri),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{Bt.current&&(Bt.current=null,Je(e=>(l(Fi,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,K.useEffect)(()=>{let e=()=>Je(()=>(l(Fi,{}),{}));return window.addEventListener(Ii,e),()=>window.removeEventListener(Ii,e)},[]);let Jt=(0,K.useMemo)(()=>({query:r?.query??``,matchCase:r?.matchCase??!1,regex:r?.regex??!1}),[r?.query,r?.matchCase,r?.regex]),Yt=r?.mode??`dim`,Xt=(0,K.useDeferredValue)(Jt),J=(0,K.useMemo)(()=>e?Ki(e.entries.map(t=>{let n=t.isDirectory?Ut(ke,t.fullPath):void 0,r=n?.name||t.name;return{entry:t,place:n,label:r,ranges:Nt?s(r,Xt):null,tags:e.tags[t.name]??[],cut:ie.has(t.fullPath)}}).filter(e=>!Nt||Yt===`dim`||e.ranges!==null),i,e,B):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,Nt,Xt,Yt,ke,i.sort,i.sortDescending,B,ie]);$e.current=J,(0,K.useEffect)(()=>{Oe!==0&&G(new Set($e.current.map(e=>e.entry.fullPath)))},[Oe]),(0,K.useEffect)(()=>{Te!==0&&G(new Set($e.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[Te]);let Y=Math.max(40,i.iconSize+20),Zt=Math.max(0,Math.floor(Ie.top/Y)-4),Qt=Math.min(J.length,Zt+Math.ceil(Ie.height/Y)+10),$t=(0,K.useMemo)(()=>J.slice(Zt,Qt),[J,Zt,Qt]);(0,K.useEffect)(()=>{Ee&&J.length>0&&Qt>=J.length&&Ee()},[Ee,J.length,Qt]),(0,K.useEffect)(()=>{let e=V.current;if(!e||i.mode!==`list`)return;e.scrollTop=0,Le({top:0,height:e.clientHeight});let t=()=>Le(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,K.useEffect)(()=>{Le(e=>({...e,top:0})),V.current&&(V.current.scrollTop=0)},[e?.path]),(0,K.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=J.findIndex(e=>e.entry.fullPath===r.currentPath),t=V.current;if(e<0||!t)return;let n=e*Y;(n<t.scrollTop||n+Y>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else Ae.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,J,Y]);let en=(0,K.useMemo)(()=>J.slice(0,Pe),[J,Pe]);(0,K.useEffect)(()=>()=>{H.current!==0&&cancelAnimationFrame(H.current)},[]),(0,K.useEffect)(()=>{let e=je.current;if(!e||e.length===0)return;let t=e.filter(e=>J.some(t=>ae(t.entry.fullPath,e)));if(t.length===0)return;je.current=null;let n=t[0],r=J.findIndex(e=>ae(e.entry.fullPath,n));r>=0&&Fe(e=>Math.max(e,r+Mi)),G(new Set(t)),U.current=n,i.mode===`list`&&V.current&&r>=0?V.current.scrollTop=Math.max(0,r*Y-V.current.clientHeight/2):requestAnimationFrame(()=>Ae.current?.scrollIntoView({block:`nearest`}))},[J,Y,i.mode]),(0,K.useEffect)(()=>{Fe(Mi)},[e?.path]),(0,K.useEffect)(()=>{if(!r.currentPath)return;let e=J.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&Fe(t=>Math.max(t,e+Mi))},[r.currentPath,J]);let nn=(0,K.useCallback)(e=>{e.scrollTop+e.clientHeight<e.scrollHeight-600||(Fe(e=>Math.min(J.length,e+Mi)),Ee?.())},[J.length,Ee]),rn=i.mode===`grid`,an=(0,K.useMemo)(()=>{if(!rn)return[];if(!_e)return Yi(en,Ji);let e=[],t=new Map;for(let n of en){let r=_e(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[en,rn,_e]),on=(0,K.useMemo)(()=>c?J.filter(e=>!e.entry.isDirectory&&Rt(e.entry.name)):[],[J,c]),sn=on.length,cn=(0,K.useMemo)(()=>on.slice(0,ji),[on]),ln=(0,K.useMemo)(()=>c?Yi(cn,qi):[],[cn,c]),un=(0,K.useMemo)(()=>ln.flatMap(e=>e.rows.map(e=>e.entry.fullPath)),[ln]),dn=un.filter(e=>W.has(e)).length,fn=un.length>0&&dn===un.length,pn=dn>0&&!fn,Z=(0,K.useMemo)(()=>J.map(e=>e.entry.fullPath),[J]),mn=(0,K.useMemo)(()=>rn?an.flatMap(e=>e.rows.map(e=>e.entry.fullPath)):Z,[Z,rn,an]),hn=J.length>0&&W.size>=J.length,gn=W.size>0&&!hn,_n=()=>{R||(hn?wn():G(new Set(Z)))},yn=(0,K.useCallback)((e,t)=>{R||e.length===0||(G(n=>{let r=new Set(n);for(let n of e)t?r.add(n):r.delete(n);return r}),t&&(U.current=e[0]??null))},[R]),Q=e?.path??``,bn=(0,K.useCallback)((e,t)=>{if(R){U.current=t,G(new Set([t]));return}let n=e.ctrlKey||e.metaKey;G(r=>{if(e.shiftKey&&U.current!==null){let e=Z.indexOf(U.current),i=Z.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Z[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),U.current=t,e}return U.current=t,new Set([t])})},[Z,R]),xn=(0,K.useCallback)((e,t)=>{Be.current=!1,bn(e,t)},[bn]),Sn=(0,K.useCallback)((e,t)=>{Be.current=!0,bn(e,t)},[bn]),Cn=(0,K.useCallback)(e=>{R?(U.current=e,G(new Set([e]))):(U.current=e,G(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[R]),wn=(0,K.useCallback)(()=>{U.current=null,Be.current=!1,G(new Set)},[]);(0,K.useEffect)(()=>{if(Ce===0||!z||gt.current===Ce||!e?.entries.some(e=>e.fullPath===z))return;gt.current=Ce,U.current=z,G(new Set([z])),mt({path:z,value:re(z)});let t=J.findIndex(e=>e.entry.fullPath===z),n=V.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*Y;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(z)}"]`)?.scrollIntoView({block:`nearest`})})}},[V,e,z,Ce,Y,J,i.mode]),(0,K.useEffect)(()=>{if(!pt)return;let e=J.findIndex(e=>e.entry.fullPath===pt.path),t=V.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*Y;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(pt.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[V,pt,Y,J,i.mode]);let Tn=(0,K.useCallback)(()=>at(null),[]),En=(0,K.useCallback)((e,t)=>{e.isDirectory?_(e.fullPath,kt(t)):y?.(e.fullPath,kt(t))},[_,y]),Dn=(0,K.useCallback)((e,t,n)=>{We({entry:e,x:t,y:n})},[]),On=(0,K.useRef)(null),kn=(0,K.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;zr(e,W.has(n)?[...W]:[n])},[W]),An=(0,K.useCallback)(e=>{if(!Pr(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);On.current=t?.dataset.directory===`true`?t.dataset.path??Q:Q,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Q]),jn=(0,K.useCallback)(e=>{if(ye)return;let{paths:t,move:n}=Fr(e),r=On.current??Q;On.current=null,t.length!==0&&oe&&(e.preventDefault(),oe(t,r,!e.ctrlKey&&n))},[Q,oe,ye]),Mn=(0,K.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),ye||!t&&!I)return;let n=Ze.current;t&&!n.has(t)&&G(new Set([t])),t&&(U.current=t);let r=t?n.has(t)?[...n]:[t]:[];at({x:e.clientX,y:e.clientY,paths:r,background:!t}),Xe().then(wt,()=>wt(!1))},[I,Q]),Nn=(0,K.useCallback)(()=>O?.(),[O]),Pn=(e,t)=>{U.current=e,G(new Set([e])),t&&mt({path:e,value:re(e)}),Nn()},Fn=st&&(0,X.jsx)(vn,{initialDirectory:Q,initialName:st.name,onCancel:()=>ut(null),onCompress:async e=>{let t=await yt(st.paths,e);return!t.ok||!t.path?(f(t.error??B(`could_not_create_the_archive`)),!1):(Pn(t.path,!1),!0)}}),Ln=async(e,t=!1)=>{let n=e,r=t;if(e.some(gi)){let t=[];for(let n of e)if(!gi(n))t.push(n);else{if($e.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){f(B(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await bi(n))}catch(e){f(e instanceof Error?e.message:B(`the_file_could_not_be_copied`));return}}n=t,r=!1}await Ye(n,r)&&(wt(!0),ne?.())},Rn=async e=>{if(!e)return;let t=await tt(e);t.cancelled||(t.ok?(je.current=t.created,Nn(),ue?.()):f(B(`nothing_on_the_clipboard_could_be_pasted_here`)))},zn=async(e,t=!1)=>{if(!Q)return;let n=e===null?await it(Q,t):await ct(Q,e);!n.ok||n.path===null?f(n.error??B(`could_not_create_the_item`)):(U.current=n.path,G(new Set([n.path])),mt({path:n.path,value:re(n.path)}),Nn())},Bn=e=>{G(new Set([e.fullPath])),U.current=e.fullPath,mt({path:e.fullPath,value:e.name})},Vn=(0,K.useCallback)(e=>mt(t=>t&&{...t,value:e}),[]),Hn=(0,K.useCallback)(()=>mt(null),[]),Un=(0,K.useCallback)(async()=>{let e=ht.current;if(mt(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=$e.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await rt(e.path,t);r.ok?(wn(),r.path&&k?.(e.path,r.path),Nn(),window.setTimeout(()=>Nn(),250)):f(r.error??B(`could_not_rename_the_entry`))},[wn,k,Nn,B]),Wn=async(e,t=!1)=>{if((t||de)&&!await Gn(e,t))return;let n=await nt(e,t);if(!n.ok&&n.needsPermanent){if(!await Gn(e,!0))return;n=await nt(e,!0)}if(n.ok)wn(),Nn();else{if(n.cancelled)return;f(n.error??B(t?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},Gn=(0,K.useCallback)((e,t)=>new Promise(n=>ft({paths:e,permanent:t,resolve:n})),[]),Kn=(0,K.useCallback)(e=>{ft(t=>(t?.resolve(e),null))},[]),qn=(0,K.useCallback)(()=>Be.current&&He.current!==null,[]),Jn=(0,K.useCallback)(()=>qn()?un:mn,[qn,un,mn]),Yn=(0,K.useCallback)(e=>{let t=qn(),n=t?He.current:i.mode===`grid`?Ve.current:V.current;if(!n||!t&&i.mode===`list`&&(e===`left`||e===`right`))return;let r=Jn();if(r.length===0)return;let a=U.current&&r.includes(U.current)?U.current:W.size===1?[...W][0]:null,o=[...n.querySelectorAll(`[data-path]`)],s=a?o.find(e=>e.dataset.path===a):void 0,c=a?r.indexOf(a):-1,l=e===`left`?-1:1,u;u=s?e===`left`||e===`right`?r[((c<0?l>0?-1:0:c)+l+r.length)%r.length]:Wi(o,s.getBoundingClientRect(),e)?.dataset.path??(c>=0?r[c+(e===`down`?1:-1)]:r[0]):o[0]?.dataset.path??r[0],u&&(G(new Set([u])),U.current=u,window.requestAnimationFrame(()=>{n.querySelector(`[data-path="${CSS.escape(u)}"]`)?.scrollIntoView({block:`nearest`})}))},[Jn,W,qn,i.mode]);(0,K.useEffect)(()=>{if(!E||et)return;let e=e=>{if(Pt(e.target))return;_t.current?.();let t=At(e),n=[...W],r=n.length===1?J.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`arrowleft`||t===`arrowright`)e.preventDefault(),Yn(t.slice(5));else if(t===`home`||t===`end`){let n=Jn();if(n.length===0)return;e.preventDefault();let r=t===`home`?n[0]:n[n.length-1];G(new Set([r])),U.current=r,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(r)}"]`)?.scrollIntoView({block:`nearest`})})}else Tt(T,`copy`,t)&&i(()=>{n.length>0&&Ln(n)}),Tt(T,`duplicate`,t)&&i(()=>{n.length!==0&&Q&&Qe(n,Q,!1).then(e=>{e.ok&&(e.created.length>0&&G(new Set(e.created)),Nn())})}),Tt(T,`cut`,t)&&i(()=>{n.length>0&&Ln(n,!0)}),Tt(T,`paste`,t)&&i(()=>void Rn(Q)),Tt(T,`delete`,t)&&i(()=>{n.length>0&&Wn(n)}),Tt(T,`deletePermanently`,t)&&i(()=>{n.length>0&&Wn(n,!0)}),Tt(T,`selectAll`,t)&&i(()=>{let e=ze.current&&c&&cn.length>0?cn.map(e=>e.entry.fullPath):Z;G(new Set(e)),De?.(),U.current=e[0]??null}),Tt(T,`invertSelection`,t)&&i(()=>{G(new Set(Z.filter(e=>!W.has(e)))),U.current=Z[0]??null}),Tt(T,`rename`,t)&&r&&i(()=>void Bn(r)),Tt(T,`open`,t)&&r&&i(()=>{r.isDirectory?_(r.fullPath):y?.(r.fullPath)}),Tt(T,`newFolder`,t)&&i(()=>void zn(null)),Tt(T,`terminal`,t)&&i(()=>void dt(Q)),Tt(T,`properties`,t)&&i(()=>void lt(n.length>0?n:Q?[Q]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Z,Ln,zn,Q,E,et,_,y,Jn,Rn,Wn,Bn,J,W,T,Yn]);let Xn=q&&(0,X.jsx)(v,{confirmLabel:q.permanent?B(`delete`):B(`move`),danger:q.permanent,message:q.permanent?B(`permanently_delete_target_this_cannot_be_undone`,{target:q.paths.length===1?B(`this_item`):B(`count_items`,{count:q.paths.length})}):B(`move_target_to_the_recycle_bin`,{target:q.paths.length===1?B(`this_item`):B(`count_items`,{count:q.paths.length})}),onCancel:()=>Kn(!1),onConfirm:()=>Kn(!0),open:!0,title:q.permanent?B(`delete_permanently`):B(`move_to_the_recycle_bin`)}),$=(0,K.useMemo)(()=>{if(!e||W.size===0)return null;let t=Z.find(e=>W.has(e));return t?J.find(e=>e.entry.fullPath===t)?.entry??null:null},[Z,e,J,W]),Zn=(0,K.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:re(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:B(`type`),value:B(`folder`)},{label:B(`location`),value:e.parent??`—`},{label:B(`path`),value:e.path},{label:B(`size`),value:j(t)},{label:B(`items`),value:te(B,n,`k_1_item`,`count_items`)},{label:B(`modified`),value:`—`},{label:B(`created`),value:`—`},{label:B(`attributes`),value:`—`}]}},[e,B]),Qn=(0,K.useMemo)(()=>{if(!$||!e)return null;let t=$.isDirectory?e.folderSizes[$.name]:void 0,n=e.tags[$.name]??[],r=$.name.lastIndexOf(`.`),i=r>0&&r<$.name.length-1?$.name.slice(r+1).toUpperCase():`—`;return{name:$.name,path:$.fullPath,isDirectory:$.isDirectory,size:$.size,modified:$.modified,created:$.created,fields:[{label:B(`type`),value:Qi($,B)},...$.isEncrypted?[{label:B(`encryption`),value:B(`password_required`)}]:[],{label:B(`extension`),value:$.isDirectory?`—`:i},{label:B(`location`),value:e.path},{label:B(`full_path`),value:$.fullPath},{label:B(`size`),value:$.isDirectory?t===void 0?`—`:j(t):j($.size)},...$.isDirectory?[{label:B(`items`),value:`${e.counts[$.name]??`—`}`}]:[],{label:B(`modified`),value:A($.modified)},{label:B(`created`),value:A($.created)},{label:B(`link_status`),value:$.linkTarget==null?$.linkCount>1?B(`hard_link`):`—`:$.linkValid?`ok`:B(`broken`)},...$.linkTarget?[{label:B(`target`),value:$.linkTarget}]:[],...$.linkCount>1?[{label:B(`links`),value:String($.linkCount)}]:[],{label:B(`attributes`),value:[$.isHidden?B(`hidden`):``,$.isSystem?B(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:B(`tags`),value:n.join(`, `)}]:[]]}},[e,$,B]),$n=et?.paths.length===1?et.paths[0]:null,er=$n?J.find(e=>e.entry.fullPath===$n)?.entry:void 0,tr=er?{path:er.fullPath,isDirectory:er.isDirectory}:null,nr=Qn??Zn,rr=(0,K.useRef)(he);rr.current=he,(0,K.useEffect)(()=>{rr.current?.(nr)},[he,nr]);let ir=me&&nr&&(0,X.jsx)(In,{info:nr,onWidth:St,selectionNote:W.size>1?te(B,W.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:fe,videoAutoplay:pe,width:vt});return n&&!e?(0,X.jsx)(ao,{children:(0,X.jsx)(so,{children:n})}):!e&&!t?(0,X.jsx)(ao,{children:(0,X.jsx)(oo,{children:B(`nothing_selected`)})}):i.mode===`grid`?(0,X.jsxs)(Sa,{onPointerDown:ge,children:[(0,X.jsxs)(Ca,{children:[(0,X.jsxs)(ja,{ref:Ve,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||wn()},onContextMenu:e=>Mn(e),onDragOver:An,onDragStart:kn,onDrop:jn,onScroll:e=>{ve?.(e.currentTarget),nn(e.currentTarget)},children:[S&&J.length>0&&(0,X.jsxs)(ya,{children:[(0,X.jsx)(_a,{$checked:!R&&hn,$partial:!R&&gn,"aria-label":B(hn?`select_none`:`select_all`),disabled:R,onClick:e=>{e.stopPropagation(),_n()},title:B(hn?`select_none`:`select_all`),type:`button`,children:hn?(0,X.jsx)(we,{size:10}):gn?(0,X.jsx)(va,{}):null}),(0,X.jsx)(`span`,{children:B(hn?`select_none`:`select_all`)})]}),t&&!e?(0,X.jsx)(Ia,{$size:i.gridSize,children:(0,X.jsx)(sa,{size:i.gridSize})}):(0,X.jsx)(la,{counts:e?.counts,currentPath:Nt?r.currentPath:null,groups:an,gridSize:i.gridSize,innerRef:Ae,onContextMenu:Mn,onOpen:_,onOpenFile:y,onRenameCancel:Hn,onRenameChange:Vn,onRenameCommit:Un,onSelect:xn,onToggle:Cn,onTogglePaths:R?void 0:yn,openOnSingleClick:C,renaming:pt,searching:Nt,selected:W,showCheckboxes:S,showTarget:It}),!t&&e&&J.length===0&&(0,X.jsx)(io,{children:(0,X.jsx)(oo,{children:n??(Nt&&r.mode===`hide`?B(`no_entries_match_the_search`):B(`this_folder_is_empty`))})}),F]}),et&&(0,X.jsx)(tn,{canPaste:Ct,directory:Q,platform:ce,allowCompression:!0,menu:et,onAddToTray:se,onAddFavorite:le,onRemoveFavorite:M,favoritePaths:N,onExtractArchive:P,onArchiveCreated:Pn,onClose:Tn,onCompressTo:(e,t)=>ut({paths:e,name:t}),onCopy:Ln,onCreateFile:e=>void zn(e),onCreateFolder:e=>void zn(null,e),onDelete:Wn,onOpen:_,onOpenFile:y,onPaste:Rn,onRefresh:Nn,onRename:e=>{let t=J.find(t=>t.entry.fullPath===e)?.entry;t&&Bn(t)},shortcuts:T,target:tr}),Fn,Xn]}),ir]}):(0,X.jsxs)(Sa,{onPointerDown:ge,children:[(0,X.jsxs)(Ca,{children:[(0,X.jsxs)(wa,{onScroll:e=>{V.current&&V.current.scrollLeft!==e.currentTarget.scrollLeft&&(V.current.scrollLeft=e.currentTarget.scrollLeft)},ref:Me,style:{gridTemplateColumns:zt},children:[(0,X.jsxs)(ma,{ref:Vt,children:[S&&(0,X.jsx)(_a,{$checked:!R&&hn,$partial:!R&&gn,"aria-label":B(hn?`select_none`:`select_all`),disabled:R,onClick:e=>{e.stopPropagation(),_n()},title:B(hn?`select_none`:`select_all`),type:`button`,children:hn?(0,X.jsx)(we,{size:10}):gn?(0,X.jsx)(va,{}):null}),(0,X.jsxs)(Ta,{onClick:()=>h(`name`),type:`button`,children:[B(`name`),Ui(i,`name`)]}),(0,X.jsx)(ga,{"aria-label":B(`resize_column`),onDoubleClick:()=>Ft[0]&&qt(Ft[0].id),onPointerDown:Gt,role:`separator`})]}),Ft.map((e,t)=>(0,X.jsxs)(ha,{children:[(0,X.jsxs)(Ta,{onClick:()=>h(e.id),type:`button`,children:[B(e.label),Ui(i,e.id)]}),t<Ft.length-1&&(0,X.jsx)(ga,{"aria-label":B(`resize_column`),onDoubleClick:()=>qt(e.id),onPointerDown:e=>Kt(e,t),role:`separator`})]},e.id))]}),(0,X.jsxs)(Ea,{onClick:e=>{e.target===e.currentTarget&&wn()},onContextMenu:e=>Mn(e),onDragOver:An,onDragStart:kn,onDrop:jn,onScroll:e=>{let t=e.currentTarget;Me.current&&Me.current.scrollLeft!==t.scrollLeft&&(Me.current.scrollLeft=t.scrollLeft),Ne.current=t,H.current===0&&(H.current=requestAnimationFrame(()=>{H.current=0;let e=Ne.current;e&&Le(t=>t.top===e.scrollTop&&t.height===e.clientHeight?t:{top:e.scrollTop,height:e.clientHeight})}))},ref:V,children:[t&&!e?(0,X.jsx)(oa,{template:zt,columns:Ft.length}):(0,X.jsxs)(X.Fragment,{children:[Zt>0&&(0,X.jsx)(`div`,{style:{height:Zt*Y}}),$t.map(t=>{let n=t.entry.fullPath;return(0,X.jsx)(da,{current:Nt&&n===r.currentPath,dim:Nt&&t.ranges===null,height:Y,iconSize:i.iconSize,innerRef:Ae,folderSizes:e.folderSizes,counts:e.counts,tagColors:e.tagColors,onContextMenu:Mn,onOpen:En,onRenameCancel:Hn,onRenameChange:Vn,onRenameCommit:Un,onSelect:xn,onTagEdit:Dn,onToggle:Cn,openOnSingleClick:C,renaming:pt?.path===n?{value:pt.value}:null,row:t,selected:W.has(n),showCheckboxes:S,showTarget:It,template:zt,visible:Ft},n)}),Qt<J.length&&(0,X.jsx)(`div`,{style:{height:(J.length-Qt)*Y}})]}),!t&&e&&J.length===0&&(0,X.jsx)(ao,{children:(0,X.jsx)(oo,{children:n??(Nt&&r.mode===`hide`?B(`no_entries_match_the_search`):B(`this_folder_is_empty`))})})]}),c&&on.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Da,{onDoubleClick:Mt,onPointerDown:Dt,onPointerMove:Ot,onPointerUp:jt,title:B(`drag_to_resize_double_click_to_reset`)}),(0,X.jsxs)(Oa,{onPointerEnter:()=>{ze.current=!0},onPointerLeave:()=>{ze.current=!1},style:{height:Ge},children:[(0,X.jsxs)(ka,{children:[S&&!R&&un.length>0&&(0,X.jsx)(_a,{$checked:fn,$partial:pn,"aria-label":B(fn?`select_none`:`select_all`),disabled:R,onClick:e=>{e.stopPropagation(),yn(un,!fn)},title:B(fn?`select_none`:`select_all`),type:`button`,children:fn?(0,X.jsx)(we,{size:10}):pn?(0,X.jsx)(va,{}):null}),B(`preview`),(0,X.jsx)(Aa,{children:sn>ji?`${cn.length} / ${sn}`:sn})]}),(0,X.jsx)(ja,{ref:He,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||wn()},onContextMenu:e=>Mn(e),children:(0,X.jsx)(la,{counts:e?.counts,currentPath:Nt?r.currentPath:null,groups:ln,gridSize:i.gridSize,onContextMenu:Mn,onOpen:_,onOpenFile:y,onSelect:Sn,onToggle:Cn,onTogglePaths:R?void 0:yn,openOnSingleClick:C,searching:Nt,selected:W,showCheckboxes:S,showTarget:It})})]})]}),Ue&&e&&(0,X.jsx)(gr,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>g?.(Ue.entry.name,e,t),onClose:()=>We(null),tags:e.tags[Ue.entry.name]??[],x:Ue.x,y:Ue.y}),et&&(0,X.jsx)(tn,{canPaste:Ct,directory:Q,platform:ce,allowCompression:!0,menu:et,onAddToTray:se,onAddFavorite:le,onRemoveFavorite:M,favoritePaths:N,onExtractArchive:P,onArchiveCreated:Pn,onClose:Tn,onCompressTo:(e,t)=>ut({paths:e,name:t}),onCopy:Ln,onCreateFile:e=>void zn(e),onCreateFolder:e=>void zn(null,e),onDelete:Wn,onOpen:_,onOpenExternally:x,onOpenFile:y,onSelectEntry:b,onPaste:Rn,onRefresh:Nn,onRename:e=>{let t=J.find(t=>t.entry.fullPath===e)?.entry;t&&Bn(t)},shortcuts:T,target:tr}),Fn,Xn]}),ir]})}function Ui(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}function Wi(e,t,n){let r=n===`up`||n===`down`,i=n===`down`||n===`right`?1:-1,a=e=>r?{ahead:e.top+e.height/2,apart:e.left+e.width/2}:{ahead:e.left+e.width/2,apart:e.top+e.height/2},o=a(t),s=null,c=1/0;for(let t of e){let{ahead:e,apart:n}=a(t.getBoundingClientRect()),r=(e-o.ahead)*i;if(r<=1)continue;let l=r+Math.abs(n-o.apart)*4;l<c&&(c=l,s=t)}return s}var Gi=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function Ki(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return Qi(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Gi.compare(String(r),String(i));return t.sortDescending?-o:o})}var qi=Ft.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Lt(t.entry.name)===e})),Ji=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...qi.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function Yi(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Xi(e){return Math.max(24,Math.min(e-56,160))}var Zi={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function Qi(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`internet_shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`folder_link`):t(`symbolic_link`);if(e.isDirectory)return t(`folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Zi[kr(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`file`)}function $i(e,t,n,r,i){switch(e){case`type`:return Qi(t,i);case`size`:return ia(t,n);case`modified`:return A(t.modified);case`created`:return A(t.created);case`items`:return t.isDirectory?r[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:i(`broken`);default:return``}}function ea({name:e,ranges:t}){if(!t||t.length===0)return(0,X.jsx)(X.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,X.jsx)(ro,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,X.jsx)(X.Fragment,{children:n})}var ta=new WeakMap,na=null;function ra(e,t,n){return na??=new IntersectionObserver(e=>{for(let t of e){if(!t.isIntersecting)continue;let e=ta.get(t.target);ta.delete(t.target),na?.unobserve(t.target),e?.()}},{rootMargin:n}),ta.set(e,t),na.observe(e),()=>{ta.delete(e),na?.unobserve(e)}}function ia(e,t){if(!e.isDirectory)return j(e.size);let n=t[e.name];return n===void 0?`—`:j(n)}function aa({entry:e,size:t=18}){let n=a(),r=(0,K.useRef)(null),[i,o]=(0,K.useState)(!1);(0,K.useEffect)(()=>{if(i)return;let e=r.current;if(e){if(!(`IntersectionObserver`in window))o(!0);else return ra(e,()=>o(!0),`250px`)}},[i]);let s=y(i?e.fullPath:null,e.isDirectory,t>32),c=e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null,l=E(c);return(0,X.jsxs)(fa,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,X.jsx)(Ar,{name:e.iconSource.slice(5),size:t}):l?(0,X.jsx)(`img`,{alt:``,height:t,src:l,width:t}):s?(0,X.jsx)(`img`,{alt:``,height:t,src:s,width:t}):e.isDirectory?(0,X.jsx)(H,{size:t}):(0,X.jsx)(Ar,{name:kr(e.name),size:t}),e.isEncrypted&&(0,X.jsx)(pa,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,X.jsx)(P,{size:Math.max(8,Math.round(t*.52))})})]})}function oa({template:e,columns:t}){return(0,X.jsx)(X.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,X.jsxs)(La,{style:{gridTemplateColumns:e},children:[(0,X.jsxs)(Ba,{children:[(0,X.jsx)(Ra,{style:{flexShrink:0,height:18,width:18}}),(0,X.jsx)(Ra,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,X.jsx)(Ra,{style:{width:t%2==0?44:92}},t))]},r))})}function sa({size:e}){return(0,X.jsx)(X.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,X.jsxs)(Za,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,X.jsx)(Qa,{children:(0,X.jsx)(Ra,{style:{height:e,width:e}})}),(0,X.jsx)(eo,{children:(0,X.jsx)(Ra,{style:{height:9,width:`${t}%`}})})]},n))})}var ca=(0,K.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:o,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:y}){let b=a(),x=Ht(),C=!e.entry.isDirectory&&Rt(e.entry.name),w=(0,K.useRef)(null),[T,E]=(0,K.useState)(!1);(0,K.useEffect)(()=>{if(!C||T)return;let e=w.current;if(e){if(!(`IntersectionObserver`in window))E(!0);else return ra(e,()=>E(!0),`300px`)}},[C,T]);let D=S(C&&T?e.entry.fullPath:null,192,e.entry.modified),[ee,te]=(0,K.useState)(!1),O=C&&D!==null&&!ee,k=e.entry.fullPath,ne=t=>{e.entry.isDirectory?v(k,kt(t)):y?.(k,kt(t))};return(0,X.jsxs)(Za,{$current:t,$dim:n,$image:O,$selected:c,onClick:e=>{h(e,k),u&&ne(e)},onContextMenu:e=>_(e,k),onDoubleClick:e=>{u||ne(e)},ref:e=>{w.current=e,t&&s&&(s.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":k,draggable:!d,children:[l&&(0,X.jsx)(xa,{$checked:c,onClick:e=>{e.stopPropagation(),g(k)},onDoubleClick:e=>e.stopPropagation(),title:b(c?`deselect`:`select`),type:`button`,children:c&&(0,X.jsx)(we,{size:10})}),(0,X.jsx)(Qa,{children:O?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>te(!0),src:D}):(0,X.jsx)($a,{children:e.place&&x.useIcons?(0,X.jsx)(pr,{place:e.place,size:r}):(0,X.jsx)(aa,{entry:e.entry,size:r})})}),(0,X.jsxs)(eo,{children:[d?(0,X.jsx)(ua,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:d.value}):(0,X.jsx)(to,{$broken:e.entry.linkValid===!1,children:(0,X.jsx)(ea,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,X.jsxs)(Ha,{title:b(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,X.jsx)(P,{size:9}),b(`encrypted`)]}),e.cut&&(0,X.jsxs)(Ua,{title:b(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,X.jsx)(G,{size:9}),b(`cut`)]}),(0,X.jsx)(no,{children:e.entry.isDirectory?i===void 0?Qi(e.entry,b):b(`type_count_items`,{type:Qi(e.entry,b),count:i}):b(`type_size`,{type:Qi(e.entry,b),size:j(e.entry.size)})}),o&&e.entry.linkTarget&&(0,X.jsxs)(Ga,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,X.jsx)(F,{size:9}),(0,X.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function la({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:o,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onSelect:f,onToggle:p,onTogglePaths:m,onContextMenu:h,onOpen:g,onOpenFile:_,onRenameChange:v,onRenameCommit:y,onRenameCancel:b}){let x=a();return(0,X.jsx)(X.Fragment,{children:e.map(e=>{let a=e.rows.map(e=>e.entry.fullPath),S=a.filter(e=>c.has(e)).length,C=a.length>0&&S===a.length,w=S>0&&!C;return(0,X.jsxs)(Ma,{children:[(0,X.jsxs)(Na,{children:[l&&m&&a.length>0&&(0,X.jsx)(_a,{$checked:C,$partial:w,"aria-label":x(C?`select_none`:`select_all`),onClick:e=>{e.stopPropagation(),m(a,!C)},title:x(C?`select_none`:`select_all`),type:`button`,children:C?(0,X.jsx)(we,{size:10}):w?(0,X.jsx)(va,{}):null}),x(e.label),(0,X.jsx)(Pa,{children:e.rows.length}),(0,X.jsx)(Fa,{})]}),(0,X.jsx)(Ia,{$size:t,children:e.rows.map(e=>(0,X.jsx)(ca,{current:i&&e.entry.fullPath===o,dim:i&&e.ranges===null,iconSize:Xi(t),innerRef:s,itemCount:n?.[e.entry.name],onContextMenu:h,onOpen:g,onOpenFile:_,onSelect:f,onToggle:p,openOnSingleClick:u,onRenameCancel:b,onRenameChange:v,onRenameCommit:y,renaming:d?.path===e.entry.fullPath?d:null,row:e,selected:c.has(e.entry.fullPath),showCheckboxes:l,showTarget:r},e.entry.fullPath))})]},e.id)})})}function ua({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,K.useRef)(null);return(0,K.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,X.jsx)(Wa,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var da=(0,K.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:o,openOnSingleClick:s,iconSize:c,height:l,template:u,visible:d,folderSizes:f,counts:p,tagColors:m,innerRef:h,renaming:g,onSelect:_,onToggle:v,onContextMenu:y,onOpen:b,onTagEdit:x,onRenameChange:S,onRenameCommit:C,onRenameCancel:w}){let T=a(),E=Ht(),D=e.entry.fullPath;return(0,X.jsxs)(za,{$current:t,$dim:n,$height:l,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{_(t,D),s&&b(e.entry,t)},onContextMenu:e=>y(e,D),onDoubleClick:t=>{s||b(e.entry,t)},ref:t?h:void 0,style:{gridTemplateColumns:u},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":D,draggable:!g,children:[(0,X.jsxs)(Ba,{children:[i&&(0,X.jsx)(ba,{$checked:r,onClick:e=>{e.stopPropagation(),v(D)},onDoubleClick:e=>e.stopPropagation(),title:T(r?`deselect`:`select`),type:`button`,children:r&&(0,X.jsx)(we,{size:10})}),e.place&&E.useIcons?(0,X.jsx)(fa,{children:(0,X.jsx)(pr,{place:e.place,size:c})}):(0,X.jsx)(aa,{entry:e.entry,size:c}),g?(0,X.jsx)(ua,{onCancel:w,onChange:S,onCommit:C,value:g.value}):(0,X.jsx)(Va,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,X.jsx)(ea,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,X.jsxs)(Ha,{title:T(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,X.jsx)(P,{size:9}),T(`encrypted`)]}),e.cut&&(0,X.jsxs)(Ua,{title:T(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,X.jsx)(G,{size:9}),T(`cut`)]}),o&&e.entry.linkTarget&&(0,X.jsxs)(Ga,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,X.jsx)(F,{size:9}),(0,X.jsx)(`span`,{children:e.entry.linkTarget})]})]}),d.map(t=>(0,X.jsx)(Ka,{children:t.id===`tags`?(0,X.jsx)(qa,{onClick:t=>{t.stopPropagation(),x(e.entry,t.clientX,t.clientY)},title:T(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=m?.[e]??`#64748b`;return(0,X.jsx)(Ja,{$color:t,$ink:hr(t),children:e},e)}):(0,X.jsx)(Ya,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,X.jsx)(Xa,{children:T(`broken`)}):$i(t.id,e.entry,f,p,T)},t.id))]})}),fa=i.span`
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
`,pa=i.span`
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
`,ma=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,ha=i.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,ga=i.span`
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
`,_a=i.button`
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
`,va=i.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,ya=i.div`
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
`,ba=i.button`
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
`,xa=i(ba)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Sa=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,Ca=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,wa=i.div`
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
`,Ta=i.button`
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
`,Ea=i.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Da=i.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,Oa=i.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,ka=i.div`
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
`,Aa=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,ja=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Ma=i.section`
    & + & {
        margin-top: 22px;
    }
`,Na=i.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Pa=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Fa=i.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,Ia=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,La=i.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,Ra=i.span`
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
`,za=i.div`
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
`,Ba=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Va=i.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ha=i.span`
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
`,Ua=i.span`
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
`,Wa=i.input`
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
`,Ga=i.span`
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
`,Ka=i.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,qa=i.button`
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
`,Ja=i.span`
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
`,Ya=i.span`
    color: var(--text-muted);
    font-size: 11px;
`,Xa=i.span`
    color: #fca5a5;
`,Za=i.div`
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
`,Qa=i.div`
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
`,$a=i.span`
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
`,eo=i.div`
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
`,to=i.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    font-size: 11px;
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,no=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,ro=i.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,io=i.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,ao=i.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,oo=i.p`
    font-size: 13px;
    color: var(--text-muted);
`,so=i.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;export{jt as $,jr as A,on as B,li as C,Br as D,vi as E,fr as F,Wt as G,qt as H,cr as I,bt as J,Ut as K,ur as L,mr as M,pr as N,Pr as O,ar as P,Pt as Q,In as R,Di as S,mi as T,Kt as U,tn as V,Vt as W,At as X,Tt as Y,Et as Z,di as _,lt as _t,Ti as a,Ct as at,wi as b,ui as c,Ye as ct,gi as d,et as dt,Mt as et,Ei as f,ct as ft,_i as g,ht as gt,fi as h,tt as ht,si as i,St as it,Ar as j,Fr as k,oi as l,nt as lt,xi as m,q as mt,Ii as n,Ot as nt,Si as o,kt as ot,yi as p,it as pt,Ht as q,Ni as r,xt as rt,ki as s,yt as st,Hi as t,wt as tt,Ci as u,Ze as ut,ci as v,Qe as vt,Ai as w,pi as x,Oi as y,mt as yt,vn as z};