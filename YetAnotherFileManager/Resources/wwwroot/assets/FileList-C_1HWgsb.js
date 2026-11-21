import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,u as a}from"./dist-sR-t6Emc.js";import{C as o,E as s,J as c,O as l,S as u,Y as d,_ as f,a as p,b as m,dt as h,ft as g,i as _,lt as v,mt as y,o as b,p as x,pt as S,s as C,t as w,u as T,ut as E,w as ee,x as te,yt as D}from"./selectionMenu--w-X4gsr.js";import{C as O,E as k,T as ne,b as re,d as ie,g as A,k as ae,m as oe,w as se,y as ce}from"./theme-Ocob2ChL.js";import{$ as le,B as ue,C as j,E as M,F as de,H as fe,I as pe,J as me,K as he,M as N,N as ge,O as P,P as F,R as _e,S as I,T as ve,W as ye,X as be,Y as xe,_ as Se,_t as Ce,at as L,b as R,bt as we,c as Te,d as Ee,et as De,f as Oe,ft as ke,g as z,gt as Ae,h as je,i as Me,it as Ne,j as B,l as Pe,lt as Fe,n as Ie,nt as Le,o as Re,ot as ze,p as Be,pt as V,rt as Ve,s as He,t as Ue,tt as We,u as Ge,ut as Ke,v as H,vt as qe,w as U,x as W,xt as Je,y as Ye,z as Xe}from"./Icons-BCGG7XUW.js";var G=e(t(),1);async function Ze(e,t=!1){return!r.available||e.length===0?!1:(await r.request(t?`fs.clipboard.cut`:`fs.clipboard.copy`,{paths:e})).ok}async function Qe(){return r.available?(await r.request(`fs.clipboard.hasFiles`)).hasFiles:!1}async function $e(){return r.available?await r.request(`fs.clipboard.files`):{entries:[],move:!1,sequence:0}}async function et(e,t,n){return!r.available||e.length===0?{ok:!1,error:`nothing_to_transfer`,created:[]}:await tt({action:n?`move`:`write`},i=>r.request(`fs.operation.transfer`,{paths:e,target:t,move:n,confirm:i}),e=>({ok:e.ok,error:e.error,created:e.created}),()=>({ok:!1,error:null,created:[],cancelled:!0}))}async function tt(e,t,n,r){let i=await t();for(let n=0;n<2&&i.required&&i.token&&i.protected?.length;n++){if(!await D({hits:i.protected,delaySeconds:i.delaySeconds??5,action:e.action,permanent:e.permanent}))return r();i=await t(i.token)}return n(i)}async function nt(e){return!r.available||e.length===0?[]:(await r.request(`fs.paths.info`,{paths:e})).entries}async function rt(e,t=!1){return r.available?await tt({action:t?`move`:`write`},t=>r.request(`fs.clipboard.paste`,{directory:e,confirm:t}),e=>({ok:e.ok,created:e.created??[]}),()=>({ok:!1,created:[],cancelled:!0})):{ok:!1,created:[]}}async function it(e,t=!1){if(!r.available||e.length===0)return{ok:!1,error:null};let n=await r.request(`fs.operation.delete`,{paths:e,permanent:t}),i=!1;for(let a=0;a<2&&n.required&&n.token&&n.protected?.length;a++){if(!await D({hits:n.protected,delaySeconds:n.delaySeconds??5,action:`delete`,permanent:t})){i=!0;break}n=await r.request(`fs.operation.delete`,{paths:e,permanent:t,confirm:n.token})}return i?{...n,ok:!1,cancelled:!0}:n}async function at(e,t){return r.available?await tt({action:`rename`},n=>r.request(`fs.operation.rename`,{path:e,name:t,confirm:n}),e=>({ok:e.ok,path:e.path,error:e.error}),()=>({ok:!1,path:null,error:null,cancelled:!0})):{ok:!1,path:null,error:`Renaming needs the desktop app.`}}async function ot(e,t=!1){return r.available?await r.request(`fs.operation.newFolder`,{directory:e,caseSensitive:t}):{ok:!1,path:null,error:`Creating folders needs the desktop app.`}}async function st(e){return r.available?(await r.request(`fs.caseSensitive.get`,{path:e})).enabled:!1}async function ct(e,t){return r.available?await r.request(`fs.caseSensitive.set`,{path:e,enabled:t}):{ok:!1,enabled:t,error:`Case-sensitive folders need the desktop app.`}}async function lt(e,t,n){return r.available?await r.request(`fs.link.create`,{kind:e,source:t,link:n}):{ok:!1,link:null,error:`Creating links needs the desktop app.`}}async function ut(e,t){return r.available?await r.request(`fs.operation.newFile`,{directory:e,extension:t}):{ok:!1,path:null,error:`Creating files needs the desktop app.`}}async function dt(e){r.available&&e.length!==0&&await r.request(`fs.operation.properties`,{paths:e})}async function ft(e){return!r.available||e.length===0?{ok:!1,error:null}:await r.request(`fs.share`,{paths:e})}async function pt(e){r.available&&await r.request(`fs.operation.openWith`,{path:e})}async function mt(e){r.available&&await r.request(`fs.operation.terminal`,{path:e})}async function ht(e){return r.available?await r.request(`fs.openWith.programs`,{path:e}):{recommended:[],other:[]}}async function gt(e,t){return r.available?(await r.request(`fs.openWith.program`,{filePath:e,programPath:t})).ok:!1}async function _t(){return r.available?await r.request(`fs.history.undo`):{ok:!1,error:`Undo needs the desktop app.`,paths:[]}}async function vt(){return r.available?await r.request(`fs.history.redo`):{ok:!1,error:`Redo needs the desktop app.`,paths:[]}}async function yt(e){r.available&&await r.request(`fs.operation.showInExplorer`,{path:e})}async function bt(e){return!r.available||e.length===0?{verbs:[],safe:!0}:await r.request(`shell.verbs`,{paths:e})}async function xt(e,t,n,i){r.available&&e.length!==0&&await r.request(`shell.invoke`,{paths:e,safe:t,verb:n,offset:i})}async function St(e,t){return!r.available||e.length===0?{ok:!1,path:null,error:`Compressing needs the desktop app.`}:await r.request(`fs.operation.compress`,{...t,paths:e})}var Ct={goBack:[`alt+arrowleft`],goForward:[`alt+arrowright`],goUp:[`alt+arrowup`],find:[`ctrl+f`],closeTab:[`ctrl+w`],newTab:[`ctrl+t`],reopenTab:[`ctrl+shift+t`],copy:[`ctrl+c`],cut:[`ctrl+x`],paste:[`ctrl+v`],duplicate:[`ctrl+d`],undo:[`ctrl+z`],redo:[`ctrl+shift+z`],delete:[`delete`],deletePermanently:[`shift+delete`],rename:[`f2`],selectAll:[`ctrl+a`],invertSelection:[`ctrl+shift+a`],open:[`enter`],newFolder:[`ctrl+shift+n`],properties:[`alt+enter`],home:[`alt+home`],location:[`ctrl+l`],iconsView:[`ctrl+1`],detailsView:[`ctrl+2`],nextTab:[`ctrl+tab`],previousTab:[`ctrl+shift+tab`],terminal:[`f4`],hidden:[`ctrl+h`,`alt+.`],splitView:[`f3`],openInNewTab:[`ctrl`]};function wt(e){return(e??``).split(`|`).map(e=>e.trim()).filter(Boolean)}function Tt(e){return e.join(`|`)}function Et(e){let t={};for(let[n,r]of Object.entries(e))t[n]=Tt(r);return t}function Dt(e){let t={...Ct};for(let[n,r]of Object.entries(e??{}))n in t&&(t[n]=wt(r));return t}function K(e,t,n){return e[t]?.includes(n)??!1}function Ot(e,t){return e[t]?.[0]??``}var kt=Ot(Ct,`openInNewTab`);function At(e){kt=e.trim()}function jt(e){let t=kt.split(`+`).filter(Boolean);return t.length!==0&&t.every(t=>t===`ctrl`?e.ctrlKey:t===`alt`?e.altKey:t===`shift`&&e.shiftKey)}function Mt(e){let t=[];e.ctrlKey&&t.push(`ctrl`),e.altKey&&t.push(`alt`),e.shiftKey&&t.push(`shift`),e.metaKey&&t.push(`meta`);let n=e.key.toLowerCase();return n!==`control`&&n!==`alt`&&n!==`shift`&&n!==`meta`&&t.push(n===` `?`space`:n),t.join(`+`)}function Nt(e){return e.split(`+`).filter(Boolean).map(e=>Pt[e]??(e.length===1?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1))).join(` + `)}function q(e){return(e??[]).filter(Boolean).map(Nt).join(` / `)}var Pt={arrowleft:`←`,arrowright:`→`,arrowup:`↑`,arrowdown:`↓`,backspace:`Backspace`,delete:`delete`,enter:`Enter`,escape:`Esc`,space:`Space`,tab:`Tab`};function Ft(e){return e instanceof HTMLElement?e.isContentEditable||[`INPUT`,`TEXTAREA`,`SELECT`].includes(e.tagName):!1}var It=[{kind:`image`,label:`images`},{kind:`video`,label:`videos`},{kind:`document`,label:`documents`},{kind:`audio`,label:`audio`},{kind:`design`,label:`design_files`}],Lt={image:new Set([`.jpg`,`.jpeg`,`.png`,`.gif`,`.webp`,`.bmp`,`.avif`,`.heic`,`.heif`,`.tif`,`.tiff`,`.svg`,`.ico`,`.tga`,`.dds`,`.hdr`,`.exr`,`.pcx`,`.dib`,`.jxl`,`.jpe`,`.jfif`,`.apng`]),video:new Set([`.mp4`,`.m4v`,`.mov`,`.wmv`,`.avi`,`.mkv`,`.webm`,`.mpg`,`.mpeg`,`.3gp`,`.3g2`,`.ts`,`.m2ts`,`.mts`,`.flv`,`.ogv`,`.asf`,`.vob`,`.rm`,`.rmvb`]),document:new Set([`.pdf`,`.xps`,`.oxps`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.odt`,`.ods`,`.odp`]),audio:new Set([`.mp3`,`.m4a`,`.aac`,`.flac`,`.wav`,`.ogg`,`.oga`,`.opus`,`.wma`]),design:new Set([`.psd`,`.psb`,`.ai`,`.eps`])};function Rt(e){let t=Bt(e);for(let{kind:e}of It)if(Lt[e].has(t))return e;return null}function zt(e){return Rt(e)!==null}function Bt(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t).toLowerCase():``}var Vt=(0,G.createContext)({places:{},useIcons:!1}),Ht=Vt.Provider;function Ut(){return(0,G.useContext)(Vt)}function Wt(e,t){return e.places[O(t)]}function Gt(e,t,n){return Wt(e,t)?.name||n}async function Kt(e,t,n){return r.available?(await r.request(`pick.open`,{mode:e,extensions:t,initial:n},2147483647))?.paths[0]??null:null}function qt(e){return Kt(`folder`,[],e??``)}function Jt(e){return Kt(`file`,e??[],``)}var Yt=[{extension:`.txt`,label:`text_file`},{extension:`.md`,label:`markdown_file`},{extension:`.json`,label:`json_file`},{extension:`.html`,label:`html_file`},{extension:`.css`,label:`css_file`},{extension:`.js`,label:`java_script_file`},{extension:`.ts`,label:`type_script_file`},{extension:`.cs`,label:`c_file`},{extension:`.py`,label:`python_file`},{extension:`.bat`,label:`batch_file`},{extension:`.ps1`,label:`power_shell_file`},{extension:`.csv`,label:`csv_file`},{extension:`.xml`,label:`xml_file`},{extension:`.yml`,label:`yaml_file`}],Xt=null,J=0,Y=new Set;function Zt(){J+=1;for(let e of Y)e()}function Qt(e){return Y.add(e),()=>Y.delete(e)}function $t(){return J}function en(e){Xt=e,Zt()}function tn(){return(0,G.useSyncExternalStore)(Qt,$t,$t),Xt}var X=n();function nn({menu:e,directory:t,target:n,shortcuts:r,canPaste:i=!1,onClose:o,onOpen:s,onOpenFile:c,onSelectEntry:l,onOpenExternally:u,onRename:d,onDelete:m,onCopy:h,onPaste:g,onCreateFolder:_,onCreateFile:v,creationOnly:y=!1,onRefresh:b,onAddToTray:x,onAddFavorite:S,onRemoveFavorite:C,favoritePaths:w,onExtractArchive:T,allowCompression:E=!1,platform:ee,onCompressTo:te,onArchiveCreated:D}){let k=a(),ne=tn(),A=ce(t),[ae,oe]=(0,G.useState)({verbs:[],safe:!0,loading:!1}),[se,ue]=(0,G.useState)({recommended:[],other:[],loading:!1}),[j,M]=(0,G.useState)(null),fe=(0,G.useRef)(0),pe=(0,G.useRef)(0),me=e?.paths.length===1,he=e?.background?t?[t]:[]:e?.paths??[],ge=e?.background?t||null:me&&n?.isDirectory?n.path:null;if((0,G.useEffect)(()=>{if(!e){oe({verbs:[],safe:!0,loading:!1}),ue({recommended:[],other:[],loading:!1});return}let t=++fe.current;oe({verbs:[],safe:!0,loading:he.length>0&&!A}),he.length>0&&!A&&bt(he).then(e=>{fe.current===t&&oe({...e,loading:!1})},()=>{fe.current===t&&oe({verbs:[],safe:!0,loading:!1})});let r=++pe.current;!A&&me&&n?(ue({recommended:[],other:[],loading:!0}),ht(n.path).then(e=>{pe.current===r&&ue({...e,loading:!1})},()=>{pe.current===r&&ue({recommended:[],other:[],loading:!1})})):ue({recommended:[],other:[],loading:!1})},[e,me,n?.path,n?.isDirectory,he.length,A]),(0,G.useEffect)(()=>{if(!e||A||!ge){M(null);return}let t=!0;return st(ge).then(e=>{t&&M(e)},()=>{t&&M(null)}),()=>{t=!1}},[e,ge,A]),!e)return null;let F=[],I=[],ve=new Set((w??[]).map(O)),ye=e.background?t?[t]:[]:e.paths,xe=ye.length>0&&ye.every(e=>ve.has(O(e))),Se=()=>n?Ce(n.path,n.isDirectory):`Archive`,Ce=(e,t)=>{let n=ie(e);if(t)return n||`Archive`;let r=n.lastIndexOf(`.`);return r>0?n.slice(0,r):n||`Archive`},we=async(e,n=Se())=>{let r=await St(e,{directory:t,name:n,format:`zip`,level:5});r.ok&&r.path?D?.(r.path,!0):f(r.error??k(`could_not_create_the_archive`))},Te=async e=>{try{await navigator.clipboard.writeText(e.join(`
`))}catch{}},De=async()=>{if(!ge||j===null)return;let e=await ct(ge,!j);e.ok?(M(e.enabled),b?.()):f(e.error??k(`could_not_change_the_case_sensitivity`))},Oe=async(e,t,n,r,i=!1)=>{let a=n.replace(/[\\/]+$/,``),o=await lt(e,t,`${a}\\${r}`);if(!i&&!o.ok&&/exist/i.test(o.error??``))for(let n=1;n<=9&&(o=await lt(e,t,`${a}\\${an(r,n)}`),!o.ok&&/exist/i.test(o.error??``));n++);o.ok?b?.():f(o.error??k(`could_not_create_the_link`))},ke=async e=>{if(!n)return;let r=await qt(t);r&&await Oe(e,n.path,r,ie(n.path),e.endsWith(`-copy`))},z=async e=>{let n=ne?.paths??[];for(let r of n){let n=e===`symbolic-file`&&r.isDirectory?`symbolic-folder`:e===`symbolic-folder`&&!r.isDirectory?`symbolic-file`:e;if(n===`hard`&&r.isDirectory)continue;let i=n===`smart-copy`||n===`smart-mirror`||n===`multi-version-smart-copy`||n===`hard-copy`||n===`symbolic-copy`;if(i&&!r.isDirectory)continue;let a=r.path.replace(/[\\/][^\\/]+$/,``),o=O(a)===O(t);await Oe(n,r.path,t,ie(r.path),i&&!o)}},je=async()=>{let t=(await nt(e?.paths??[])).filter(e=>e.exists).map(e=>({path:e.path,isDirectory:e.isDirectory}));t.length>0&&en({paths:t})},Ne=()=>{let e=ne?.paths??[];if(e.length===0)return[];let t=e.some(e=>!e.isDirectory),n=e.some(e=>e.isDirectory);return[{label:k(`cancel_selected_link`),icon:(0,X.jsx)(Ye,{size:14}),onSelect:()=>en(null)},...t?[{label:k(`hard_link`),icon:(0,X.jsx)(B,{size:14}),separatorBefore:!0,onSelect:()=>void z(`hard`)}]:[],{label:k(`symbolic_link`),icon:(0,X.jsx)(B,{size:14}),separatorBefore:!t,onSelect:()=>void z(`symbolic-file`)},...n?[{label:k(`directory_junction`),icon:(0,X.jsx)(N,{size:14}),onSelect:()=>void z(`junction`)},{label:k(`smart_copy`),icon:(0,X.jsx)(H,{size:14}),separatorBefore:!0,onSelect:()=>void z(`smart-copy`)},{label:k(`smart_mirror`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>void z(`smart-mirror`)},{label:k(`multi_version_smart_copy`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>void z(`multi-version-smart-copy`)},{label:k(`hardlink_copy`),icon:(0,X.jsx)(H,{size:14}),separatorBefore:!0,onSelect:()=>void z(`hard-copy`)},{label:k(`symbolic_link_copy`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>void z(`symbolic-copy`)}]:[]]};if(e.background){if(_&&I.push({label:k(`new_folder`),icon:(0,X.jsx)(L,{size:16}),shortcut:q(r.newFolder),onSelect:_}),v||_){let e=[];_&&(e.push({label:k(`folder`),icon:(0,X.jsx)(N,{size:14}),onSelect:()=>_(!1)}),A||e.push({label:k(`case_sensitive_folder`),icon:(0,X.jsx)(Ge,{size:14}),onSelect:()=>_(!0)})),v&&e.push(...Yt.map((e,t)=>({label:`${k(e.label)} (${e.extension})`,icon:(0,X.jsx)(B,{size:14}),separatorBefore:t===0,onSelect:()=>v(e.extension)}))),F.push({label:k(`new`),icon:(0,X.jsx)(L,{size:14}),children:e,onSelect:()=>void 0})}if(A||F.push({label:k(`create_link`),icon:(0,X.jsx)(Ke,{size:14}),disabled:!ne,children:Ne(),onSelect:()=>void 0}),y)return(0,X.jsx)(p,{items:F,onClose:o,quick:I,x:e.x,y:e.y});!A&&s&&F.push({label:k(`open_in_new_tab`),icon:(0,X.jsx)(L,{size:14}),onSelect:()=>s(t,!0)}),F.push({label:k(`copy_as_path`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>void Te([t])}),x&&F.push({label:k(`add_to_file_tray`),icon:(0,X.jsx)(be,{size:14}),onSelect:()=>x([t])}),!A&&(xe?C:S)&&F.push({label:k(xe?`remove_from_favorites`:`add_to_favorites`),icon:xe?(0,X.jsx)(Xe,{size:14}):(0,X.jsx)(_e,{size:14}),onSelect:()=>xe?C?.([t]):S?.([t])}),!A&&j!==null&&F.push({label:k(`case_sensitive_names`),icon:(0,X.jsx)(Ge,{size:14}),checked:j,onSelect:()=>void De()}),!A&&E&&(F.push({label:k(`open_in_terminal`),icon:(0,X.jsx)(Ae,{size:14}),onSelect:()=>void mt(t)}),F.push({label:k(`show_in_explorer`),icon:(0,X.jsx)(N,{size:14}),separatorBefore:!0,onSelect:()=>void yt(t)})),g&&I.push({label:k(`paste`),icon:(0,X.jsx)(le,{size:16}),disabled:!i,shortcut:q(r.paste),onSelect:()=>g(t)}),A||I.push({label:k(`properties`),icon:(0,X.jsx)(de,{size:16}),shortcut:q(r.properties),onSelect:()=>void dt([t])})}else{if(l&&F.push({label:k(`choose`),icon:(0,X.jsx)(Ee,{size:14}),onSelect:()=>{l(n?e.paths.length>1?[...e.paths]:[n.path]:[...e.paths])}}),s&&F.push({label:k(`open`),icon:(0,X.jsx)(Me,{size:14}),onSelect:()=>{n?.isDirectory?s(n.path):n&&(u??c)?.(n.path)}}),n?.isDirectory&&(s&&F.push({label:k(`open_in_new_tab`),icon:(0,X.jsx)(L,{size:14}),onSelect:()=>s(n.path,!0)}),g&&F.push({label:k(`paste_into_folder`),icon:(0,X.jsx)(le,{size:14}),disabled:!i,onSelect:()=>g(n.path)}),A||F.push({label:k(`open_in_terminal`),icon:(0,X.jsx)(Ae,{size:14}),onSelect:()=>void mt(n.path)})),!A&&me&&n&&!n.isDirectory&&re(n.path)&&T&&F.push({label:k(`extract_archive`),icon:(0,X.jsx)(Ie,{size:14}),separatorBefore:!0,children:[{label:k(`extract_here`),icon:(0,X.jsx)(Ie,{size:14}),onSelect:()=>T(n.path,`here`)},{label:k(`extract_to_a_folder_named_after_the_archive`),icon:(0,X.jsx)(Ie,{size:14}),onSelect:()=>T(n.path,`named`)},{label:k(`auto_extract_to_the_current_folder`),icon:(0,X.jsx)(Ie,{size:14}),onSelect:()=>T(n.path,`auto`)},{label:k(`extract_to`),icon:(0,X.jsx)(N,{size:14}),separatorBefore:!0,onSelect:()=>T(n.path,`choose`)}],onSelect:()=>void 0}),!A&&me&&n){let e=[];if(se.loading)e.push({label:k(`loading_apps`),loading:!0,disabled:!0,onSelect:()=>void 0});else{for(let t of se.recommended)e.push({label:t.name,group:k(`suggested_apps`),icon:t.icon?(0,X.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,X.jsx)(P,{size:14}),onSelect:()=>void gt(n.path,t.path).then(e=>{e||pt(n.path)})});for(let t of se.other)e.push({label:t.name,group:k(`other_apps`),icon:t.icon?(0,X.jsx)(`img`,{alt:``,height:14,src:t.icon,width:14}):(0,X.jsx)(P,{size:14}),onSelect:()=>void gt(n.path,t.path).then(e=>{e||pt(n.path)})})}e.push({label:k(`choose_another_app`),icon:(0,X.jsx)(P,{size:14}),separatorBefore:!0,onSelect:()=>void pt(n.path)}),F.push({label:k(`open_with_2`),icon:(0,X.jsx)(P,{size:14}),children:e,onSelect:()=>void pt(n.path)})}if(!A&&ee===`windows`&&e.paths.length>0&&F.push({label:k(`share`),icon:(0,X.jsx)(Ke,{size:14}),separatorBefore:!0,onSelect:()=>void ft(e.paths).then(e=>{e.ok||f(e.error??k(`could_not_open_the_share_sheet`))})}),A||F.push({label:k(`compress`),icon:(0,X.jsx)(Ie,{size:14}),separatorBefore:!0,children:[{label:k(`compress_to_zip`),icon:(0,X.jsx)(Ie,{size:14}),onSelect:()=>void we(e.paths)},{label:k(`compress_to`),icon:(0,X.jsx)(Ie,{size:14}),onSelect:()=>te?.(e.paths,Se())}],onSelect:()=>void 0}),!A&&(e?.paths.length??0)>0){let e=[{label:k(`select_link_source`),icon:(0,X.jsx)(Ke,{size:14}),onSelect:()=>void je()},...ne?[{label:k(`cancel_selected_link`),icon:(0,X.jsx)(Ye,{size:14}),onSelect:()=>en(null)}]:[],...me&&n?n.isDirectory?[{label:k(`symbolic_link`),icon:(0,X.jsx)(N,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`symbolic-folder`)},{label:k(`directory_junction`),icon:(0,X.jsx)(N,{size:14}),onSelect:()=>void ke(`junction`)},{label:k(`smart_copy`),icon:(0,X.jsx)(H,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`smart-copy`)},{label:k(`smart_mirror`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>void ke(`smart-mirror`)},{label:k(`multi_version_smart_copy`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>void ke(`multi-version-smart-copy`)},{label:k(`hardlink_copy`),icon:(0,X.jsx)(H,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`hard-copy`)},{label:k(`symbolic_link_copy`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>void ke(`symbolic-copy`)}]:[{label:k(`symbolic_link`),icon:(0,X.jsx)(B,{size:14}),separatorBefore:!0,onSelect:()=>void ke(`symbolic-file`)},{label:k(`hard_link`),icon:(0,X.jsx)(B,{size:14}),onSelect:()=>void ke(`hard`)}]:[]];F.push({label:k(`create_link`),icon:(0,X.jsx)(Ke,{size:14}),children:e,onSelect:()=>void 0})}!A&&n?.isDirectory&&j!==null&&F.push({label:k(`case_sensitive_names`),icon:(0,X.jsx)(Ge,{size:14}),checked:j,onSelect:()=>void De()}),F.push({label:k(`copy_as_path`),icon:(0,X.jsx)(H,{size:14}),onSelect:()=>void Te(e.paths)}),x&&F.push({label:k(`add_to_file_tray`),icon:(0,X.jsx)(be,{size:14}),onSelect:()=>x(e.paths)}),!A&&(xe?C:S)&&F.push({label:k(xe?`remove_from_favorites`:`add_to_favorites`),icon:xe?(0,X.jsx)(Xe,{size:14}):(0,X.jsx)(_e,{size:14}),onSelect:()=>xe?C?.(ye):S?.(ye)}),A||F.push({label:k(`show_in_explorer`),icon:(0,X.jsx)(N,{size:14}),separatorBefore:!0,onSelect:()=>void yt(ye[0])}),h&&I.push({label:k(`cut`),icon:(0,X.jsx)(R,{size:16}),shortcut:q(r.cut),onSelect:()=>h(e.paths,!0)},{label:k(`copy`),icon:(0,X.jsx)(H,{size:16}),shortcut:q(r.copy),onSelect:()=>h(e.paths,!1)}),me&&n&&d&&I.push({label:k(`rename`),icon:(0,X.jsx)(We,{size:16}),shortcut:q(r.rename),onSelect:()=>d(n.path)}),m&&I.push({label:k(`delete`),icon:(0,X.jsx)(qe,{size:16}),danger:!0,shortcut:q(r.delete),onSelect:()=>m(e.paths)}),A||I.push({label:k(`properties`),icon:(0,X.jsx)(de,{size:16}),shortcut:q(r.properties),onSelect:()=>void dt(e.paths)})}if(ae.loading)F.push({label:k(`more_actions`),icon:(0,X.jsx)(P,{size:14}),loading:!0,disabled:!0,separatorBefore:!0,onSelect:()=>void 0});else if(ae.verbs.length>0){let e={items:[],children:new Map};for(let t of ae.verbs){let n=e;for(let e of t.groupPath??[]){let t=n.children.get(e);t||(t={items:[],children:new Map},n.children.set(e,t)),n=t}n.items.push(t)}let t=e=>{for(let t of e.items)if(t.groupIcon)return t.groupIcon;for(let n of e.children.values()){let e=t(n);if(e)return e}return null},n=e=>[...e.items.map(e=>({label:e.label,icon:(0,X.jsx)(rn,{source:e.icon}),disabled:!e.enabled,checked:e.checked,onSelect:()=>void xt(he,ae.safe,e.verb,e.offset)})),...[...e.children.entries()].map(([e,r])=>({label:e,icon:(0,X.jsx)(rn,{source:t(r)}),children:n(r),onSelect:()=>void 0}))];F.push({label:k(ae.safe?`more_actions`:`more_actions_extensions`),icon:(0,X.jsx)(P,{size:14}),separatorBefore:!0,children:n(e),onSelect:()=>void 0})}return(0,X.jsx)(p,{items:F,onClose:o,quick:I,x:e.x,y:e.y})}function rn({source:e}){if(!e)return null;if(e.startsWith(`data:`))return(0,X.jsx)(`img`,{alt:``,height:14,src:e,width:14});switch(e.startsWith(`icon:`)?e.slice(5):e){case`open`:return(0,X.jsx)(Me,{size:14});case`document`:return(0,X.jsx)(j,{size:14});case`cut`:return(0,X.jsx)(R,{size:14});case`copy`:return(0,X.jsx)(H,{size:14});case`paste`:return(0,X.jsx)(le,{size:14});case`trash`:return(0,X.jsx)(qe,{size:14});case`pencil`:return(0,X.jsx)(We,{size:14});case`gear`:return(0,X.jsx)(de,{size:14});case`star`:return(0,X.jsx)(V,{size:14});case`pin`:return(0,X.jsx)(Ve,{size:14});case`executable`:return(0,X.jsx)(P,{size:14});case`share`:return(0,X.jsx)(Ke,{size:14});case`arrow`:return(0,X.jsx)(Me,{size:14});default:return(0,X.jsx)(Ue,{size:14})}}function an(e,t){let n=e.lastIndexOf(`.`);return n>0?`${e.slice(0,n)} (${t})${e.slice(n)}`:`${e} (${t})`}var on=ae();function sn({value:e,options:t,onChange:n,disabled:r,width:i,icon:o,tooltip:s,zIndex:c=3200}){let l=a(),[u,d]=(0,G.useState)(null),f=(0,G.useRef)(null),p=t.find(t=>t.value===e)??t[0];return(0,G.useEffect)(()=>{if(!u)return;let e=()=>d(null),t=t=>{let n=t.target;n instanceof Node&&f.current?.contains(n)||n instanceof Element&&n.closest(`[data-select-menu]`)||e()},n=t=>{t.key===`Escape`&&e()};return window.addEventListener(`pointerdown`,t,!0),window.addEventListener(`keydown`,n,!0),window.addEventListener(`blur`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`pointerdown`,t,!0),window.removeEventListener(`keydown`,n,!0),window.removeEventListener(`blur`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[u]),(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(cn,{$icon:o!==void 0,"aria-expanded":u!==null,"aria-haspopup":`listbox`,disabled:r,onClick:()=>{if(u){d(null);return}let e=f.current?.getBoundingClientRect();if(!e)return;let n=t.length*31+10,r=e.bottom+4+n>window.innerHeight;d({left:e.left,width:e.width,top:r?void 0:e.bottom+4,bottom:r?window.innerHeight-e.top+4:void 0})},ref:f,style:i&&!o?{width:i}:void 0,title:s??p?.title,type:`button`,children:[o===void 0?(0,X.jsx)(ln,{children:p?.label??``}):(0,X.jsx)(un,{children:o}),o===void 0&&(0,X.jsx)(dn,{children:(0,X.jsx)(Oe,{size:11})})]}),u&&(0,on.createPortal)((0,X.jsx)(fn,{"aria-label":l(`options`),"data-select-menu":`true`,$menuZIndex:c,role:`listbox`,style:{bottom:u.bottom,left:u.left,minWidth:u.width,top:u.top},children:t.map(t=>(0,X.jsxs)(pn,{$active:t.value===e,"aria-selected":t.value===e,onClick:()=>{n(t.value),d(null)},role:`option`,title:t.title,type:`button`,children:[(0,X.jsx)(mn,{children:t.label}),t.value===e&&(0,X.jsx)(Ee,{size:11})]},t.value))}),document.body)]})}var cn=i.button`
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
`,ln=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,un=i.span`
    display: grid;
    place-items: center;
    flex-shrink: 0;
    color: var(--text-secondary);
`,dn=i.span`
    display: inline-flex;
    flex-shrink: 0;
    color: var(--text-muted);
    transform: rotate(90deg);
`,fn=i.div`
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
`,pn=i.button`
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
`,mn=i.span`
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,hn=[{value:`zip`,label:`zip_archive`,extension:`.zip`,level:!0},{value:`zipx`,label:`zipx_archive`,extension:`.zipx`,level:!0},{value:`7z`,label:`k_7z_archive_lzma2`,extension:`.7z`,level:!1},{value:`tar`,label:`tar_archive`,extension:`.tar`,level:!1},{value:`tar.gz`,label:`tar_g_zip`,extension:`.tar.gz`,level:!0},{value:`tar.bz2`,label:`tar_b_zip2`,extension:`.tar.bz2`,level:!1}],gn=[{value:`default`,label:`automatic`},{value:`store`,label:`store_no_compression`},{value:`deflate`,label:`deflate`},{value:`deflate64`,label:`deflate64`},{value:`bzip2`,label:`b_zip2`},{value:`lzma`,label:`lzma`},{value:`xz`,label:`XZ`},{value:`ppmd`,label:`pp_md`}],_n=[{value:`none`,label:`none`},{value:`zipcrypto`,label:`zip_crypto`},{value:`aes128`,label:`aes_128`},{value:`aes192`,label:`aes_192`},{value:`aes256`,label:`aes_256`}],Z=[{value:`0`,label:`No split`},{value:`10485760`,label:`10 MB`},{value:`52428800`,label:`50 MB`},{value:`104857600`,label:`100 MB`},{value:`524288000`,label:`500 MB`},{value:`1073741824`,label:`1 GB`},{value:`2147483648`,label:`2 GB`}],vn=[{value:`0`,label:`store_no_compression`},{value:`1`,label:`fastest`},{value:`5`,label:`normal`},{value:`9`,label:`maximum`},{value:`-1`,label:`automatic`}];function yn({initialDirectory:e,initialName:t,onCancel:n,onCompress:r}){let i=a(),o=(0,G.useRef)(null),[s,c]=(0,G.useState)(e),[l,u]=(0,G.useState)(t),[d,f]=(0,G.useState)(`zip`),[p,m]=(0,G.useState)(`5`),[h,g]=(0,G.useState)(`default`),[_,v]=(0,G.useState)(`none`),[y,b]=(0,G.useState)(``),[x,S]=(0,G.useState)(`0`),[C,w]=(0,G.useState)(!1);(0,G.useEffect)(()=>{o.current?.focus(),o.current?.select();let e=e=>{e.key===`Escape`?(e.preventDefault(),e.stopPropagation(),n()):e.key!==`Tab`&&e.stopPropagation()};return window.addEventListener(`keydown`,e,!0),()=>window.removeEventListener(`keydown`,e,!0)},[n]);let T=hn.find(e=>e.value===d)??hn[0],E=d===`zip`||d===`zipx`,ee=_!==`none`,te=E||d===`7z`,D=d===`zip`||d===`7z`,O=async()=>{if(C||!l.trim()||!s||ee&&y.length===0)return;w(!0);let e=await r({directory:s,name:l.trim(),format:d,level:T.level?Number(p):0,method:E?h:null,encryption:te?_:`none`,password:ee?y:void 0,splitSize:D?Number(x):0});w(!1),e&&n()};return(0,on.createPortal)((0,X.jsx)(bn,{onPointerDown:e=>{e.target===e.currentTarget&&!C&&n()},children:(0,X.jsxs)(xn,{"aria-modal":`true`,role:`dialog`,children:[(0,X.jsx)(Sn,{children:i(`compress_to`)}),(0,X.jsxs)(Cn,{children:[(0,X.jsx)(Q,{children:i(`archive_name`)}),(0,X.jsx)(wn,{onChange:e=>u(e.target.value),ref:o,value:l,onKeyDown:e=>{e.key===`Enter`&&O()}}),(0,X.jsx)(Tn,{children:T.extension})]}),(0,X.jsxs)(Cn,{children:[(0,X.jsx)(Q,{children:i(`format`)}),(0,X.jsx)(sn,{onChange:e=>f(e),options:hn.map(e=>({value:e.value,label:i(e.label)})),value:d,width:236,zIndex:3700})]}),(0,X.jsxs)(Cn,{children:[(0,X.jsx)(Q,{children:i(`method`)}),(0,X.jsx)(sn,{disabled:!E,onChange:g,options:gn.map(e=>({...e,label:i(e.label)})),value:E?h:`default`,width:236,zIndex:3700})]}),(0,X.jsxs)(Cn,{children:[(0,X.jsx)(Q,{children:i(`encryption`)}),(0,X.jsx)(sn,{disabled:!te,onChange:e=>{v(e),e===`none`&&b(``)},options:_n.map(e=>({...e,label:i(e.label)})),value:te?_:`none`,width:236,zIndex:3700})]}),ee&&(0,X.jsxs)(Cn,{children:[(0,X.jsx)(Q,{children:i(`password`)}),(0,X.jsx)(wn,{autoFocus:!0,onChange:e=>b(e.target.value),type:`password`,value:y})]}),(0,X.jsxs)(Cn,{children:[(0,X.jsx)(Q,{children:i(`split_volumes`)}),(0,X.jsx)(sn,{disabled:!D,onChange:S,options:Z.map(e=>({...e,label:i(e.label)})),value:D?x:`0`,width:236,zIndex:3700})]}),(0,X.jsxs)(Cn,{children:[(0,X.jsx)(Q,{children:i(`compression_level`)}),(0,X.jsx)(sn,{disabled:!T.level,onChange:m,options:vn.map(e=>({...e,label:i(e.label)})),value:T.level?p:d===`tar`?`0`:`-1`,width:236,zIndex:3700})]}),(0,X.jsxs)(Cn,{$stack:!0,children:[(0,X.jsx)(Q,{children:i(`destination`)}),(0,X.jsxs)(En,{children:[(0,X.jsx)(Dn,{title:s,children:s}),(0,X.jsx)(kn,{disabled:C,onClick:()=>void qt(s).then(e=>{e&&c(e)}),type:`button`,children:i(`choose_folder`)})]})]}),(0,X.jsxs)(On,{children:[(0,X.jsx)(kn,{disabled:C,onClick:n,type:`button`,children:i(`cancel`)}),(0,X.jsx)(An,{disabled:C||!l.trim()||ee&&y.length===0,onClick:()=>void O(),type:`button`,children:i(C?`compressing`:`compress`)})]})]})}),document.body)}var bn=i.div`
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
`,xn=i.div`
    width: min(490px, 100%);
    padding: 18px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-dialog);
    ${T}
`,Sn=i.h2`
    margin: 0 0 18px;
    color: var(--text-primary);
    font-size: 14px;
    font-weight: 600;
`,Cn=i.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 14px;
    ${({$stack:e})=>e&&`display: block;`}
`,Q=i.span`
    width: 112px;
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 11px;
`,wn=i.input`
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
`,Tn=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 11px;
`,En=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
`,Dn=i.span`
    min-width: 0;
    flex: 1;
    overflow: hidden;
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,On=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
`,kn=i.button`
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
`,An=i(kn)`
    border-color: rgba(var(--accent-rgb), 0.45);
    background: rgba(var(--accent-rgb), 0.18);
    color: var(--text-primary);
`,jn=new Set([`mp4`,`webm`,`mkv`,`mov`,`m4v`,`avi`,`wmv`,`ogv`]),Mn=new Set([`mp3`,`m4a`,`wav`,`flac`,`ogg`,`oga`,`aac`]),Nn=new Set([`png`,`jpg`,`jpeg`,`jfif`,`jpe`,`gif`,`webp`,`bmp`,`avif`,`ico`,`svg`,`apng`]),Pn=new Set([`tif`,`tiff`,`psd`,`psb`,`tga`,`dds`,`hdr`,`exr`,`pcx`,`dib`,`jxl`]),Fn=new Set([...Nn,...Pn]),In=new Set(`txt.text.log.md.markdown.json.jsonc.xml.yaml.yml.toml.ini.cfg.conf.csv.tsv.html.htm.css.scss.less.js.jsx.mjs.cjs.ts.tsx.cs.fs.vb.java.kt.kts.py.rb.php.rs.go.c.h.cpp.cc.cxx.hpp.hxx.sh.bash.zsh.fish.ps1.psm1.bat.cmd.sql.lua.r.pl.swift.dart.gradle.properties.env.gitignore.editorconfig`.split(`.`));function Ln({info:e,width:t,onWidth:n,open:r=!0,videoAudio:i,videoAutoplay:s,selectionNote:c,emptyNote:l}){let u=a(),[f,p]=(0,G.useState)(!1),[m,h]=(0,G.useState)(!1),[_,b]=(0,G.useState)(!1),[x,C]=(0,G.useState)(0),[w,T]=(0,G.useState)(0),[D,O]=(0,G.useState)(null),[k,ne]=(0,G.useState)(!1),[re,ie]=(0,G.useState)(!1),A=(0,G.useRef)(null),ae=(0,G.useRef)(null),oe=(0,G.useRef)(null),se=(0,G.useRef)(null),[ce,le]=(0,G.useState)(()=>{let e=te(`yafm.preview.media.height`,210);return Math.min(560,Math.max(80,e))}),ue=r?e?.path??null:null,j=v(ue),M=e?Rn(e.name):``,de=!!e&&!e.isDirectory&&jn.has(M),fe=!!e&&!e.isDirectory&&Mn.has(M),pe=!!e&&!e.isDirectory&&Fn.has(M),me=!!e&&!e.isDirectory&&In.has(M),he=!!e&&!e.isDirectory&&M===`pdf`,ge=y(de?j:null,512,e?.modified??0),P=pe&&Nn.has(M),F=y(pe&&!P?j:null,1024,e?.modified??0),_e=g(P?j:null,e?.modified??0,M),I=g(de||fe?j:null,e?.modified??0,M),ve=S(he?j:null,e?.modified??0),ye=E(!de&&!fe&&!pe&&!me&&!he?j:null,e?.isDirectory??!1);if((0,G.useEffect)(()=>{p(!1),h(!1),b(!1),C(0),T(0),ie(!1)},[ue]),(0,G.useEffect)(()=>{if(!j||!me){O(null),ne(!1);return}let e=!0;return ne(!0),O(null),d(j).then(t=>{e&&(O(t),ne(!1))},()=>{e&&(O({text:null,truncated:!1,error:u(`could_not_read_this_file`)}),ne(!1))}),()=>{e=!1}},[j,me]),!e&&!l)return null;let be=e=>{oe.current={x:e.clientX,width:ae.current?.getBoundingClientRect().width??t},e.currentTarget.setPointerCapture(e.pointerId)},xe=e=>{let t=oe.current;t&&n(Math.max(220,t.width+t.x-e.clientX))},Se=e=>{oe.current=null,e.currentTarget.releasePointerCapture(e.pointerId)},Ce=e=>{se.current={y:e.clientY,height:ce},e.currentTarget.setPointerCapture(e.pointerId)},L=e=>{let t=se.current;if(!t)return;let n=Math.max(80,t.height+e.clientY-t.y);le(n),o(`yafm.preview.media.height`,n)},R=e=>{se.current=null,e.currentTarget.releasePointerCapture(e.pointerId)};if(!e)return(0,X.jsxs)(Bn,{$open:r,children:[r&&(0,X.jsx)(Vn,{onPointerDown:be,onPointerMove:xe,onPointerUp:Se,onDoubleClick:()=>n(320),title:u(`drag_to_resize_double_click_to_reset`)}),(0,X.jsx)(Hn,{ref:ae,style:{width:r?t:0},children:(0,X.jsxs)(Un,{children:[(0,X.jsx)(N,{size:56}),(0,X.jsx)(`span`,{children:l})]})})]});let we=()=>{let e=A.current;e&&(e.paused?e.play().catch(()=>void 0):e.pause())};return(0,X.jsxs)(Bn,{$open:r,children:[r&&(0,X.jsx)(Vn,{onPointerDown:be,onPointerMove:xe,onPointerUp:Se,onDoubleClick:()=>n(320),title:u(`drag_to_resize_double_click_to_reset`)}),(0,X.jsxs)(Hn,{ref:ae,style:{width:r?t:0},children:[(0,X.jsx)(Wn,{style:{height:ce},children:de&&I&&!f?(0,X.jsxs)(Kn,{onPointerEnter:()=>b(!0),onPointerLeave:()=>b(!1),children:[(0,X.jsx)(`video`,{autoPlay:s,controls:!1,muted:!i,onClick:we,onDurationChange:e=>C(e.currentTarget.duration||0),onError:()=>p(!0),onLoadedMetadata:e=>{C(e.currentTarget.duration||0),T(e.currentTarget.currentTime)},onPause:()=>h(!1),onPlay:()=>h(!0),onTimeUpdate:e=>T(e.currentTarget.currentTime),playsInline:!0,poster:ge??void 0,preload:`metadata`,ref:A,src:I}),(0,X.jsx)(qn,{$visible:!m,onClick:we,title:u(`play`),type:`button`,children:(0,X.jsx)(Ne,{size:28})}),(0,X.jsxs)(Jn,{$visible:_,onClick:e=>e.stopPropagation(),children:[(0,X.jsxs)(Yn,{children:[(0,X.jsx)(`span`,{children:zn(w)}),(0,X.jsx)(`span`,{children:zn(x)})]}),(0,X.jsx)(Xn,{"aria-label":u(`seek`),max:x||0,min:0,onChange:e=>{let t=A.current;if(!t)return;let n=Number(e.target.value);t.currentTime=n,T(n)},step:.1,type:`range`,value:Math.min(w,x||0)})]})]}):fe&&I?(0,X.jsx)(`audio`,{controls:!0,src:I}):pe&&(_e??F)?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,src:_e??F}):he&&ve&&!re?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>ie(!0),src:ve}):he?(0,X.jsx)(B,{size:64}):me?(0,X.jsx)(Zn,{children:k||!D?(0,X.jsx)($n,{children:u(`loading`)}):D.error?(0,X.jsx)($n,{children:D.error}):(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Qn,{children:D.text}),D.truncated&&(0,X.jsx)($n,{children:u(`showing_the_first_256_kb`)})]})}):de&&ge?(0,X.jsx)(`img`,{alt:``,src:ge}):ye?(0,X.jsx)(`img`,{alt:``,src:ye}):e.isDirectory?(0,X.jsx)(N,{size:64}):(0,X.jsx)(B,{size:64})}),(0,X.jsx)(Gn,{onDoubleClick:()=>{le(210),o(`yafm.preview.media.height`,210)},onPointerDown:Ce,onPointerMove:L,onPointerUp:R,title:u(`drag_to_resize_double_click_to_reset`)}),(0,X.jsxs)(er,{children:[(0,X.jsx)($,{title:e.path,children:e.name}),c&&(0,X.jsx)(tr,{children:c}),(0,X.jsx)(nr,{children:e.fields.map(e=>(0,X.jsxs)(rr,{children:[(0,X.jsx)(ir,{children:e.label}),(0,X.jsx)(ar,{title:e.value,children:e.time===void 0?e.value:(0,X.jsx)(ee,{value:e.time})})]},e.label))})]})]})]})}function Rn(e){let t=e.lastIndexOf(`.`);return t>0&&t<e.length-1?e.slice(t+1).toLowerCase():``}function zn(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n>0?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}var Bn=i.div`
    display: flex;
    flex-shrink: 1;
    align-self: stretch;
    /* A closed pane must not keep a slot of its own; only a divider divides what is left. */
    min-width: ${({$open:e})=>e?`220px`:`0`};
    min-height: 0;
`,Vn=i.div`
    width: 7px;
    flex-shrink: 0;
    border-left: 1px solid var(--border-color);
    cursor: col-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Hn=i.aside`
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
`,Un=i.div`
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
`,Wn=i.div`
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
`,Gn=i.div`
    height: 7px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.25);
    }
`,Kn=i.div`
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
`,qn=i.button`
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
`,Jn=i.div`
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
`,Yn=i.div`
    display: flex;
    justify-content: space-between;
    color: #e2e8f0;
    font-family: var(--font-mono);
    font-size: 10px;
    font-variant-numeric: tabular-nums;
`,Xn=i.input`
    width: 100%;
    height: 12px;
    margin: 0;
    accent-color: var(--accent-primary);
    cursor: pointer;
`,Zn=i.div`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow: auto;
    padding: 10px 12px;
    background: rgba(var(--bg-rgb), 0.5);
`,Qn=i.pre`
    margin: 0;
    color: var(--text-secondary);
    font-family: var(--font-preview), var(--font-cjk);
    font-size: 10px;
    line-height: 1.5;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
    user-select: text;
`,$n=i.span`
    flex-shrink: 0;
    color: var(--text-muted);
    font-family: var(--font-sans);
    font-size: 10px;
`,er=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 18px;
`,$=i.h2`
    margin: 0;
    overflow-wrap: anywhere;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`,tr=i.span`
    margin-top: 3px;
    color: var(--text-muted);
    font-size: 10px;
`,nr=i.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    margin-top: 12px;
`,rr=i.div`
    display: grid;
    grid-template-columns: 84px minmax(0, 1fr);
    gap: 8px;
    font-size: 11px;
`,ir=i.span`
    color: var(--text-muted);
`,ar=i.span`
    min-width: 0;
    overflow-wrap: anywhere;
    color: var(--text-secondary);
    font-variant-numeric: tabular-nums;
`,or=[`quick`,`frequent`,`recent`,`home`,`drives`,`share`,`favorites`],sr=[...or],cr={quick:`quick_access`,recent:`recent`,frequent:`frequent`,home:`home`,drives:`drives`,share:`shared`,favorites:`favorites`},lr={folder:e=>(0,X.jsx)(N,{size:e}),home:e=>(0,X.jsx)(ue,{size:e}),desktop:e=>(0,X.jsx)(I,{size:e}),documents:e=>(0,X.jsx)(U,{size:e}),downloads:e=>(0,X.jsx)(ve,{size:e}),pictures:e=>(0,X.jsx)(Le,{size:e}),music:e=>(0,X.jsx)(me,{size:e}),videos:e=>(0,X.jsx)(Je,{size:e}),drive:e=>(0,X.jsx)(M,{size:e}),image:e=>(0,X.jsx)(fe,{size:e}),video:e=>(0,X.jsx)(we,{size:e}),audio:e=>(0,X.jsx)(Re,{size:e}),text:e=>(0,X.jsx)(Ce,{size:e}),code:e=>(0,X.jsx)(z,{size:e}),clock:e=>(0,X.jsx)(Be,{size:e}),star:e=>(0,X.jsx)(V,{size:e}),file:e=>(0,X.jsx)(B,{size:e}),archive:e=>(0,X.jsx)(Ie,{size:e}),pdf:e=>(0,X.jsx)(De,{size:e}),executable:e=>(0,X.jsx)(P,{size:e}),font:e=>(0,X.jsx)(ge,{size:e}),database:e=>(0,X.jsx)(W,{size:e}),config:e=>(0,X.jsx)(Se,{size:e}),spreadsheet:e=>(0,X.jsx)(ke,{size:e}),presentation:e=>(0,X.jsx)(ze,{size:e}),document:e=>(0,X.jsx)(j,{size:e}),app:e=>(0,X.jsx)(Ue,{size:e}),gear:e=>(0,X.jsx)(de,{size:e}),pin:e=>(0,X.jsx)(Ve,{size:e}),trash:e=>(0,X.jsx)(qe,{size:e}),overview:e=>(0,X.jsx)(xe,{size:e}),book:e=>(0,X.jsx)(He,{size:e}),briefcase:e=>(0,X.jsx)(Te,{size:e}),cloud:e=>(0,X.jsx)(je,{size:e}),gamepad:e=>(0,X.jsx)(F,{size:e}),camera:e=>(0,X.jsx)(Pe,{size:e}),terminal:e=>(0,X.jsx)(Ae,{size:e}),server:e=>(0,X.jsx)(Fe,{size:e}),package:e=>(0,X.jsx)(be,{size:e}),globe:e=>(0,X.jsx)(pe,{size:e}),heart:e=>(0,X.jsx)(_e,{size:e}),share:e=>(0,X.jsx)(Fe,{size:e}),favorites:e=>(0,X.jsx)(_e,{size:e})};function ur(e){return e.startsWith(`folder:`)?`folder`:e.split(`:`)[0]}function dr(e){let t=e?.overviewPanels,n=e?.overviewHidden??[],r=[...new Set(t??or)].filter(e=>!n.includes(e)&&(e.startsWith(`folder:`)||sr.some(t=>e===t||e.startsWith(`${t}:`)))),i=e?.overviewTitles??{},a=e?.overviewViews??{},o=e?.overviewIcons??{},s=e?.overviewPinned??[`quick`,`frequent`,`recent`,`drives`];return r.map(t=>{let n=ur(t);return{id:t,kind:n,path:n===`folder`?t.slice(7):void 0,places:n===`quick`&&t!==`quick`?e?.panelPlaces?.[t]??[]:void 0,title:i[t]??(n===`folder`?t.slice(7).split(/[\\/]/).filter(Boolean).pop()??t:n===`home`?`home`:`${cr[n]??n}${fr(t)}`),view:a[t]===`grid`?`grid`:a[t]===`list`?`list`:n===`quick`?`grid`:`list`,icon:o[t],pinned:s.includes(t)}})}function fr(e){let t=e.split(`:`);return t.length>1?` ${t[1]}`:``}function pr({panel:e,size:t=16}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=h(n);if(r)return(0,X.jsx)(`img`,{alt:``,src:r,style:{width:t,height:t,objectFit:`contain`}});let i=e.icon?lr[e.icon]:void 0;if(i)return(0,X.jsx)(X.Fragment,{children:i(t)});switch(e.kind){case`quick`:return(0,X.jsx)(N,{size:t});case`recent`:return(0,X.jsx)(Be,{size:t});case`frequent`:return(0,X.jsx)(V,{size:t});case`drives`:return(0,X.jsx)(M,{size:t});case`home`:return(0,X.jsx)(ue,{size:t});case`share`:return(0,X.jsx)(Fe,{size:t});case`favorites`:return(0,X.jsx)(_e,{size:t});default:return(0,X.jsx)(N,{size:t})}}function mr({place:e,size:t=18}){let n=e.icon?.startsWith(`file:`)?e.icon.slice(5):null,r=h(n);return r?(0,X.jsx)(`img`,{alt:``,height:t,src:r,style:{objectFit:`contain`},width:t}):e.icon&&lr[e.icon]?(0,X.jsx)(X.Fragment,{children:lr[e.icon](t)}):(0,X.jsx)(N,{size:t})}var hr=`#64748b`;function gr(e){let t=e.replace(`#`,``);if(t.length!==6)return`#f9fafb`;let n=Number.parseInt(t.slice(0,2),16),r=Number.parseInt(t.slice(2,4),16),i=Number.parseInt(t.slice(4,6),16);return(.299*n+.587*r+.114*i)/255>.62?`#0b0f19`:`#f9fafb`}function _r({x:e,y:t,tags:n,allTags:r,colors:i,onChange:o,onClose:s}){let c=a(),[l,u]=(0,G.useState)(``),[d,f]=(0,G.useState)(`#2dd4bf`),p=(0,G.useRef)(null);(0,G.useEffect)(()=>{let e=e=>{e.target?.closest(`[data-tag-menu]`)||s()},t=e=>{e.key===`Escape`&&s()};return window.addEventListener(`pointerdown`,e),window.addEventListener(`keydown`,t),window.addEventListener(`blur`,s),()=>{window.removeEventListener(`pointerdown`,e),window.removeEventListener(`keydown`,t),window.removeEventListener(`blur`,s)}},[s]);let m=[...new Set([...r,...n])].sort((e,t)=>e.localeCompare(t)),h=e=>i[e]??`#64748b`,g=e=>{o(n.includes(e)?n.filter(t=>t!==e):[...n,e])},_=(e,t)=>{o(n,{...i,[e]:t})},v=()=>{let e=l.trim();e.length!==0&&(o(n.includes(e)?n:[...n,e],{...i,[e]:d}),u(``))},y=Math.max(8,Math.min(e,window.innerWidth-272)),b=Math.max(8,Math.min(t+8,window.innerHeight-320));return(0,on.createPortal)((0,X.jsxs)(vr,{"data-tag-menu":`true`,ref:p,style:{left:y,top:b},children:[(0,X.jsxs)(yr,{children:[(0,X.jsx)(`span`,{children:c(`tags`)}),(0,X.jsx)(br,{onClick:s,title:c(`close`),type:`button`,children:(0,X.jsx)(Ye,{size:11})})]}),(0,X.jsxs)(xr,{children:[m.length===0&&(0,X.jsx)(Tr,{children:c(`no_tags_yet`)}),m.map(e=>{let t=h(e),r=n.includes(e);return(0,X.jsxs)(Sr,{children:[(0,X.jsx)(Cr,{"aria-label":c(`color_of_tag`,{tag:e}),onChange:t=>_(e,t.target.value),title:c(`change_this_tag_s_color`),type:`color`,value:t}),(0,X.jsxs)(wr,{$color:t,$ink:gr(t),$on:r,onClick:()=>g(e),type:`button`,children:[r&&(0,X.jsx)(Ee,{size:11}),(0,X.jsx)(`span`,{children:e})]})]},e)})]}),(0,X.jsxs)(Er,{children:[(0,X.jsx)(Cr,{"aria-label":c(`color_of_the_new_tag`),onChange:e=>f(e.target.value),title:c(`color_of_the_new_tag`),type:`color`,value:d}),(0,X.jsx)(`input`,{onChange:e=>u(e.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),v())},placeholder:c(`new_tag`),spellCheck:!1,value:l}),(0,X.jsx)(Dr,{onClick:v,type:`button`,children:c(`add`)})]})]}),document.body)}var vr=i.div`
    position: fixed;
    z-index: 80;
    width: 264px;
    padding: 9px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    background: var(--bg-secondary);
    box-shadow: var(--shadow-menu);
    ${T}
`,yr=i.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 7px;
    font-size: 11px;
    font-weight: 600;
    color: var(--text-secondary);
`,br=i.button`
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
`,xr=i.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    max-height: 200px;
    overflow-y: auto;
`,Sr=i.div`
    display: flex;
    align-items: center;
    gap: 6px;
`,Cr=i.input`
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
`,wr=i.button`
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
`,Tr=i.span`
    font-size: 11px;
    color: var(--text-muted);
`,Er=i.div`
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
`,Dr=i.button`
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
`,Or={file:B,folder:N,text:Ce,code:z,image:fe,video:we,audio:Re,archive:Ie,pdf:De,executable:P,font:ge,database:W,config:Se,spreadsheet:ke,presentation:ze,document:j},kr={".png":`image`,".jpg":`image`,".jpeg":`image`,".gif":`image`,".webp":`image`,".bmp":`image`,".svg":`image`,".ico":`image`,".avif":`image`,".tif":`image`,".tiff":`image`,".mp4":`video`,".mkv":`video`,".avi":`video`,".mov":`video`,".webm":`video`,".wmv":`video`,".flv":`video`,".m4v":`video`,".mpg":`video`,".mpeg":`video`,".mp3":`audio`,".flac":`audio`,".wav":`audio`,".ogg":`audio`,".m4a":`audio`,".aac":`audio`,".wma":`audio`,".opus":`audio`,".zip":`archive`,".rar":`archive`,".7z":`archive`,".tar":`archive`,".gz":`archive`,".bz2":`archive`,".xz":`archive`,".zst":`archive`,".iso":`archive`,".cs":`code`,".js":`code`,".mjs":`code`,".ts":`code`,".tsx":`code`,".jsx":`code`,".py":`code`,".java":`code`,".kt":`code`,".rs":`code`,".go":`code`,".c":`code`,".h":`code`,".cpp":`code`,".hpp":`code`,".csproj":`code`,".sln":`code`,".json":`code`,".xml":`code`,".yml":`code`,".yaml":`code`,".toml":`code`,".sh":`code`,".ps1":`code`,".bat":`code`,".cmd":`code`,".lua":`code`,".html":`code`,".css":`code`,".scss":`code`,".txt":`text`,".md":`text`,".log":`text`,".rtf":`document`,".pdf":`pdf`,".doc":`document`,".docx":`document`,".odt":`document`,".pages":`document`,".xls":`spreadsheet`,".xlsx":`spreadsheet`,".csv":`spreadsheet`,".ods":`spreadsheet`,".ppt":`presentation`,".pptx":`presentation`,".odp":`presentation`,".exe":`executable`,".msi":`executable`,".com":`executable`,".appimage":`executable`,".dll":`executable`,".lnk":`executable`,".ttf":`font`,".otf":`font`,".woff":`font`,".woff2":`font`,".db":`database`,".sqlite":`database`,".sqlite3":`database`,".mdb":`database`,".ini":`config`,".cfg":`config`,".conf":`config`,".env":`config`,".properties":`config`};function Ar(e){let t=e.lastIndexOf(`.`);return t>0?kr[e.slice(t).toLowerCase()]??`file`:`file`}function jr({name:e,size:t}){let n=Or[e??`file`]??B;return(0,X.jsx)(n,{size:t})}function Mr({path:e,name:t,isDirectory:n,size:r=18}){let i=E(e,n);return i?(0,X.jsx)(`img`,{alt:``,height:r,src:i,style:{objectFit:`contain`},width:r}):n?(0,X.jsx)(N,{size:r}):(0,X.jsx)(jr,{name:Ar(t),size:r})}var Nr=`application/x-yafm-paths`,Pr=[Nr,`text/uri-list`];function Fr(e){return e?.types.some(e=>Pr.includes(e.toLowerCase()))??!1}function Ir(e){let t=e.dataTransfer;if(!t)return{paths:[],move:!0};let n=t.getData(Nr);if(n)try{let e=JSON.parse(n);if(Array.isArray(e.paths))return{paths:e.paths.filter(e=>typeof e==`string`),move:e.move!==!1}}catch{}let r=t.getData(`text/uri-list`);if(r){let e=r.split(/\r?\n/).map(e=>e.trim()).filter(e=>e.length>0&&!e.startsWith(`#`)).map(Rr).filter(e=>e!==null);if(e.length>0)return{paths:e,move:!0}}return{paths:t.getData(`text/plain`).split(/\r?\n/).map(e=>e.trim()).filter(e=>/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)),move:!0}}var Lr=typeof navigator<`u`&&/windows/i.test(navigator.userAgent);function Rr(e){if(!e.toLowerCase().startsWith(`file://`))return/^[a-zA-Z]:[\\/]|^\\\\|^\//.test(e)?e:null;try{let t=new URL(e),n=decodeURIComponent(t.pathname);return Lr?n.replace(/^\/(?=[a-zA-Z]:)/,``):n}catch{return null}}function zr(e){return`file:///`+e.replace(/\\/g,`/`).split(`/`).map((e,t)=>t===0&&/^[a-zA-Z]:$/.test(e)?e:encodeURIComponent(e)).join(`/`)}function Br(e,t,n=!0){e.dataTransfer.setData(Nr,JSON.stringify({paths:t,move:n})),e.dataTransfer.setData(`text/plain`,t.join(`\r
`)),e.dataTransfer.setData(`text/uri-list`,t.map(zr).join(`\r
`)),e.dataTransfer.effectAllowed=`copyMove`}function Vr({items:e,clipboardItems:t,clipboardMove:n,visible:r,position:i,currentDirectory:o,onPosition:s,onAdd:c,onRemove:l,onClear:u,onClose:d,onCopyToClipboard:f,onTransfer:p}){let m=a(),[h,g]=(0,G.useState)(()=>new Set),[_,v]=(0,G.useState)(!1),y=(0,G.useRef)(null),b=(0,G.useMemo)(()=>e.filter(e=>h.has(e.path)),[e,h]),x=(0,G.useMemo)(()=>t.filter(e=>h.has(e.path)),[t,h]),S=(0,G.useRef)(null);if((0,G.useEffect)(()=>{if(!r)return;let e=(e,t)=>{let n=S.current?.getBoundingClientRect();return n!==void 0&&e>=n.left&&e<=n.right&&t>=n.top&&t<=n.bottom},t=t=>{let n=t.dataTransfer;n&&Fr(n)&&e(t.clientX,t.clientY)&&(t.preventDefault(),n.dropEffect=`copy`)},n=t=>{if(t.defaultPrevented||!e(t.clientX,t.clientY))return;let{paths:n}=Ir(t);n.length!==0&&(t.preventDefault(),c(n))};return window.addEventListener(`dragover`,t,!0),window.addEventListener(`drop`,n,!0),()=>{window.removeEventListener(`dragover`,t,!0),window.removeEventListener(`drop`,n,!0)}},[r,c]),!r)return null;let C=new Set([...e,...t].map(e=>e.path)),w=C.size>0&&[...C].every(e=>h.has(e)),T=C.size,E=e=>{g(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n})},ee=()=>{g(w?new Set:C)},te=e=>{y.current={x:e.clientX,y:e.clientY,left:i.x,top:i.y},e.currentTarget.setPointerCapture(e.pointerId),v(!0)},D=e=>{let t=y.current;t&&s({x:Math.max(0,Math.min(window.innerWidth-120,t.left+e.clientX-t.x)),y:Math.max(38,Math.min(window.innerHeight-80,t.top+e.clientY-t.y))})},O=e=>{y.current&&(y.current=null,v(!1),e.currentTarget.releasePointerCapture(e.pointerId))},k=()=>{let e=b.map(e=>e.path);e.length!==0&&(l(e),g(t=>{let n=new Set(t);return e.forEach(e=>n.delete(e)),n}))},ne=()=>{let e=b.map(e=>e.path);e.length!==0&&f(e)},re=()=>{let e=new Map;for(let t of b)e.set(t.path,!0);for(let t of x)e.has(t.path)||e.set(t.path,n);let t=[...e].filter(([,e])=>e).map(([e])=>e),r=[...e].filter(([,e])=>!e).map(([e])=>e);t.length>0&&p(t,o,!0),r.length>0&&p(r,o,!1),g(new Set)},ie=(e,t)=>{let n=h.has(e.path);return(0,X.jsxs)($r,{$checked:n,draggable:!0,onClick:()=>E(e.path),onDragStart:r=>{Br(r,n&&h.size>0?[...new Set([...b,...x].map(e=>e.path))]:[e.path],t)},title:e.path,children:[(0,X.jsx)(ei,{$checked:n,onClick:t=>{t.stopPropagation(),E(e.path)},type:`button`,children:n&&(0,X.jsx)(Ee,{size:8})}),(0,X.jsx)(Mr,{isDirectory:e.isDirectory,name:e.name,path:e.path,size:16}),(0,X.jsxs)(ti,{children:[(0,X.jsx)(ni,{children:e.name}),(0,X.jsx)(ri,{children:se(e.path)})]})]},`${t?`tray`:`clipboard`}:${e.path}`)},A=e=>{Fr(e.dataTransfer)&&(e.preventDefault(),e.dataTransfer.dropEffect=`copy`)};return(0,X.jsxs)(Hr,{$dragging:_,"data-tray":`true`,ref:S,style:{left:i.x,top:i.y},onDragEnter:A,onDragOver:A,onDrop:e=>{let{paths:t}=Ir(e);t.length>0&&(e.preventDefault(),c(t))},children:[(0,X.jsxs)(Ur,{onPointerDown:te,onPointerMove:D,onPointerUp:O,children:[(0,X.jsxs)(Wr,{children:[(0,X.jsx)(be,{size:12}),m(`tray`),(0,X.jsx)(Gr,{children:T})]}),(0,X.jsxs)(Kr,{onPointerDown:e=>e.stopPropagation(),children:[(0,X.jsx)(qr,{onClick:ee,title:m(w?`select_none`:`select_all`),type:`button`,children:m(w?`none`:`all`)}),(0,X.jsx)(qr,{onClick:u,title:m(`remove_everything_from_the_tray`),type:`button`,children:m(`clear`)}),(0,X.jsx)(Jr,{onClick:d,title:m(`hide_the_tray`),type:`button`,children:(0,X.jsx)(Ye,{size:10})})]})]}),(0,X.jsxs)(Yr,{children:[(0,X.jsxs)(Zr,{children:[m(`in_this_app`),(0,X.jsx)(Gr,{children:e.length})]}),e.length===0&&(0,X.jsx)(Xr,{children:m(`drag_files_or_folders_here`)}),e.map(e=>ie(e,!0)),t.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsxs)(Zr,{$clipboard:!0,children:[m(`clipboard`),(0,X.jsx)(Gr,{children:t.length}),n&&(0,X.jsx)(Qr,{children:m(`cut`)})]}),t.map(e=>ie(e,n))]})]}),(0,X.jsxs)(ii,{children:[(0,X.jsx)(ai,{$plain:!0,disabled:b.length===0,onClick:ne,title:m(`write_the_selected_tray_entries_to_the_system_clipboard`),type:`button`,children:m(`to_clipboard`)}),(0,X.jsx)(ai,{disabled:h.size===0||!o,onClick:re,type:`button`,children:m(`move_here`)}),(0,X.jsx)(ai,{$danger:!0,disabled:b.length===0,onClick:k,type:`button`,children:m(`remove`)})]})]})}var Hr=i.div`
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
`,Ur=i.div`
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
`,Wr=i.span`
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
`,Gr=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(var(--accent-rgb), 0.16);
    color: var(--text-secondary);
    font-family: var(--font-mono);
    font-size: 9px;
    font-weight: 400;
`,Kr=i.span`
    display: flex;
    align-items: center;
    gap: 3px;
`,qr=i.button`
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
`,Jr=i.button`
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
`,Yr=i.div`
    display: flex;
    flex-direction: column;
    min-height: 46px;
    overflow-y: auto;
    padding: 4px;
`,Xr=i.p`
    margin: 0;
    padding: 14px 12px;
    color: var(--text-muted);
    font-size: 11px;
    text-align: center;
`,Zr=i.div`
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
`,Qr=i.span`
    padding: 0 5px;
    border-radius: 999px;
    background: rgba(251, 191, 36, 0.16);
    color: #fcd34d;
    font-family: var(--font-sans);
    font-size: 8px;
    font-weight: 500;
    letter-spacing: 0;
    text-transform: none;
`,$r=i.div`
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
`,ei=i.button`
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
`,ti=i.span`
    display: flex;
    flex-direction: column;
    min-width: 0;
`,ni=i.span`
    overflow: hidden;
    color: var(--text-primary);
    font-size: 11px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ri=i.span`
    overflow: hidden;
    color: var(--text-muted);
    font-family: var(--font-mono);
    font-size: 8px;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ii=i.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    padding: 7px 9px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.35);
`,ai=i.button`
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
`,oi={shares:[],webRunning:!1,webPort:0,urls:[],preferredUrl:null,deviceId:``,deviceName:``,fingerprint:``};async function si(){return r.available?await r.request(`share.list`):oi}async function ci(e,t){return r.available?await r.request(`share.add`,{path:e,mode:t}):oi}async function li(e){return r.available?await r.request(`share.remove`,{id:e}):oi}async function ui(e,t){return r.available?await r.request(`share.mode`,{id:e,mode:t}):oi}async function di(){return r.available?(await r.request(`share.peers`)).peers??[]:[]}async function fi(){return r.available?(await r.request(`share.peers.refresh`)).peers??[]:[]}async function pi(e,t){r.available&&await r.request(`share.pair.start`,{host:e,port:t})}async function mi(e,t){r.available&&await r.request(`share.pair.respond`,{requestId:e,accept:t})}async function hi(e,t){r.available&&await r.request(`share.port`,{mode:t,port:e})}var gi=`yafm://share/`;function _i(e){return e.toLowerCase().startsWith(gi)}function vi(e){if(!_i(e))return null;let[t,n,...r]=e.slice(13).split(`/`);return!t||!n?null:{deviceId:decodeURIComponent(t),shareId:decodeURIComponent(n),path:r.map(decodeURIComponent).join(`/`)}}function yi(e,t,n=``){let r=`${gi}${encodeURIComponent(e)}/${encodeURIComponent(t)}`,i=n.split(`/`).filter(Boolean).map(encodeURIComponent).join(`/`);return i.length>0?`${r}/${i}`:r}async function bi(e){let t=vi(e);if(!t||!r.available)throw Error(`This shared folder is only available in the desktop app.`);let n=await r.request(`share.browse`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});return{path:yi(t.deviceId,t.shareId,n.path??t.path),parent:n.parent===null||n.parent===void 0?null:yi(t.deviceId,t.shareId,n.parent),total:n.entries?.length??0,signature:0,entries:n.entries??[],folderSizes:{},view:null,tags:{},tagColors:{},allTags:[],counts:{}}}async function xi(e){let t=vi(e);if(!t||!r.available)throw Error(`This shared file is only available in the desktop app.`);let n=await r.request(`share.download`,{deviceId:t.deviceId,shareId:t.shareId,path:t.path});if(!n.localPath)throw Error(n.error??`The file could not be downloaded.`);return n.localPath}async function Si(e){await c(await xi(e))}async function Ci(){return r.available?await r.request(`share.certificate`):null}async function wi(e,t){return await r.request(`share.certificate.import`,{path:e,password:t})}async function Ti(){return await r.request(`share.certificate.reset`)}async function Ei(){return r.available?(await r.request(`share.devices.clear`)).devices??[]:[]}async function Di(){return r.available?(await r.request(`share.devices.list`)).devices??[]:[]}async function Oi(e,t,n){return r.available?(await r.request(`share.devices.set`,{id:e,state:t,permanent:n})).devices??[]:[]}async function ki(e){return r.available?(await r.request(`share.devices.remove`,{id:e})).devices??[]:[]}async function Ai(){return r.available?(await r.request(`share.access.status`)).hasPassword:!1}async function ji(e){return r.available?(await r.request(`share.access.password`,{password:e})).hasPassword:!1}var Mi=60,Ni=300,Pi=[{id:`type`,label:`type`,width:150},{id:`size`,label:`size`,width:100},{id:`modified`,label:`modified`,width:150},{id:`created`,label:`created`,width:150},{id:`items`,label:`items`,width:70},{id:`linkCount`,label:`links`,width:70},{id:`linkStatus`,label:`link`,width:90},{id:`tags`,label:`tags`,width:150}],Fi=new Set,Ii=`yafm.columnWidths`,Li=`yafm.reset-column-widths`,Ri=64,zi=720,Bi=160,Vi=190,Hi=120;function Ui({listing:e,loading:t,error:n,find:r=s,view:i,showImages:c,imageStripHeight:d=Vi,onImageStripHeight:p,onSort:h,onSetTags:g,onOpen:v,onOpenFile:y,onSelectEntry:b,onOpenExternally:x,showCheckboxes:S=!0,openOnSingleClick:C=!1,shortcuts:T=Ct,enableShortcuts:E=!0,refreshToken:ee=0,onRefresh:D,onRename:O,onClipboardChanged:re,cutPaths:ae=Fi,onTransfer:se,onAddToTray:ce,platform:le,onAddFavorite:ue,onRemoveFavorite:j,favoritePaths:M,onExtractArchive:de,onPaste:fe,confirmDelete:pe=!1,previewVideoAudio:me=!1,previewVideoAutoplay:he=!1,showDetails:N=!0,onPreviewInfo:ge,onActivate:P,groupOf:F,onGridScroll:_e,gridFooter:I,allowBackgroundMenu:ve=!0,readOnly:ye=!1,onSelectionChange:be,onSelectionCountChange:xe,selectionMenuRequest:Se,selectionMenuId:Ce,singleSelect:L=!1,pendingRename:R=null,pendingRenameToken:we=0,selectMatchesToken:Te=0,onLoadMore:De,onEnsureComplete:Oe,selectAllToken:ke=0}){let z=a(),Ae=Ut(),je=(0,G.useRef)(null),Me=(0,G.useRef)(null),Ne=(0,G.useRef)(null),B=(0,G.useRef)(null),Pe=(0,G.useRef)(0),Fe=(0,G.useRef)(null),[Ie,Le]=(0,G.useState)(Ni),[Re,ze]=(0,G.useState)({top:0,height:640}),Be=(0,G.useRef)(null),V=(0,G.useRef)(null),Ve=(0,G.useRef)(!1),He=(0,G.useRef)(!1),Ue=(0,G.useRef)(null),We=(0,G.useRef)(null),[Ge,Ke]=(0,G.useState)(null),[H,qe]=(0,G.useState)(d),[U,W]=(0,G.useState)(()=>new Set),[Je,Ye]=(0,G.useState)(()=>m(Ii)??{}),Xe=(0,G.useRef)(U),$e=(0,G.useRef)([]);Xe.current=U,(0,G.useEffect)(()=>be?.([...U]),[U,be]),(0,G.useEffect)(()=>xe?.(U.size),[U,xe]),(0,G.useEffect)(()=>{let e=Se;if(!e||e.token===st.current)return;st.current=e.token;let t=[...Xe.current];t.length!==0&&(nt({x:e.x,y:e.y,paths:t,background:!1}),Qe().then(Et,()=>Et(!1)))},[Se]);let[tt,nt]=(0,G.useState)(null),st=(0,G.useRef)(0),[ct,lt]=(0,G.useState)(null),[ft,pt]=(0,G.useState)(null),[ht,gt]=(0,G.useState)(null),_t=(0,G.useRef)(ht);_t.current=ht;let vt=(0,G.useRef)(0),yt=(0,G.useRef)(P);yt.current=P;let[bt,xt]=(0,G.useState)(()=>{let e=te(`yafm.preview.width`,320);return e>=220?e:320}),wt=(0,G.useCallback)(e=>{xt(e),o(`yafm.preview.width`,e)},[]),[Tt,Et]=(0,G.useState)(!1),Dt=(0,G.useCallback)((e,t)=>{let n=[...Xe.current];n.length!==0&&(nt({x:e,y:t,paths:n,background:!1}),Qe().then(Et,()=>Et(!1)))},[]);(0,G.useEffect)(()=>{if(Ce)return w(Ce,U.size>0?Dt:null),()=>w(Ce,null)},[Ce,U,Dt]),(0,G.useEffect)(()=>{W(new Set),gt(null),nt(null),V.current=null},[e?.path]),(0,G.useEffect)(()=>{qe(d)},[d]),(0,G.useEffect)(()=>{W(new Set),gt(null),V.current=null},[ee]);let Ot=e=>{Be.current={y:e.clientY,height:H},e.currentTarget.setPointerCapture(e.pointerId)},kt=e=>{let t=Be.current;if(!t)return;let n=Math.max(Hi,Math.round(window.innerHeight*.7));qe(Math.min(n,Math.max(Hi,t.height+t.y-e.clientY)))},At=e=>{Be.current&&(Be.current=null,e.currentTarget.releasePointerCapture(e.pointerId),p?.(H))},Nt=()=>{qe(Vi),p?.(Vi)},q=r.query.length>0,Pt=(0,G.useMemo)(()=>Pi.filter(e=>i.columns?.includes(e.id)),[i.columns]),It=i.columns?.includes(`linkTarget`)??!1,Lt=(0,G.useCallback)(e=>Math.min(zi,Math.max(Ri,Je[e.id]??e.width)),[Je]),Rt=(0,G.useMemo)(()=>`minmax(160px, 1fr) ${Pt.map(e=>`${Lt(e)}px`).join(` `)}`.trim(),[Pt,Lt]),Bt=(0,G.useRef)(null),Vt=(0,G.useRef)(null),Ht=()=>Math.floor(Vt.current?.getBoundingClientRect().width??Bi),Gt=e=>{let t=Pt[0];t&&(e.preventDefault(),e.stopPropagation(),Bt.current={left:{id:t.id,start:Lt(t)},startX:e.clientX,nameStart:Ht()})},Kt=(e,t)=>{let n=Pt[t],r=Pt[t+1];n&&r&&(e.preventDefault(),e.stopPropagation(),Bt.current={left:{id:n.id,start:Lt(n)},right:{id:r.id,start:Lt(r)},startX:e.clientX,nameStart:0})},qt=e=>Ye(t=>{let n={...t};return delete n[e],u(Ii,n),n});(0,G.useEffect)(()=>{let e=e=>{let t=Bt.current;if(!t)return;let n=e.clientX-t.startX;Ye(e=>{if(!t.right){let r=Math.max(0,t.nameStart-Bi),i=Math.min(Math.min(zi,t.left.start+r),Math.max(Ri,t.left.start-n));return e[t.left.id]===i?e:{...e,[t.left.id]:i}}let r=t.left.start+t.right.start,i=Math.min(zi,Math.max(Ri,t.left.start+n)),a=Math.min(Math.min(zi,r-Ri),Math.max(Math.max(Ri,r-zi),i));return{...e,[t.left.id]:a,[t.right.id]:r-a}})},t=()=>{Bt.current&&(Bt.current=null,Ye(e=>(u(Ii,e),e)))};return window.addEventListener(`pointermove`,e),window.addEventListener(`pointerup`,t),window.addEventListener(`pointercancel`,t),()=>{window.removeEventListener(`pointermove`,e),window.removeEventListener(`pointerup`,t),window.removeEventListener(`pointercancel`,t)}},[]),(0,G.useEffect)(()=>{let e=()=>Ye(()=>(u(Ii,{}),{}));return window.addEventListener(Li,e),()=>window.removeEventListener(Li,e)},[]);let Jt=(0,G.useMemo)(()=>({query:r?.query??``,matchCase:r?.matchCase??!1,regex:r?.regex??!1}),[r?.query,r?.matchCase,r?.regex]),Yt=r?.mode??`dim`,Xt=(0,G.useDeferredValue)(Jt),J=(0,G.useMemo)(()=>e?qi(e.entries.map(t=>{let n=t.isDirectory?Wt(Ae,t.fullPath):void 0,r=n?.name||t.name;return{entry:t,place:n,label:r,ranges:q?l(r,Xt):null,tags:e.tags[t.name]??[],cut:ae.has(t.fullPath)}}).filter(e=>!q||Yt===`dim`||e.ranges!==null),i,e,z):[],[e?.entries,e?.tags,i.sort===`size`||i.sort===`items`?e?.folderSizes:null,i.sort===`size`||i.sort===`items`?e?.counts:null,q,Xt,Yt,Ae,i.sort,i.sortDescending,z,ae]);$e.current=J,(0,G.useEffect)(()=>{ke!==0&&W(new Set($e.current.map(e=>e.entry.fullPath)))},[ke]),(0,G.useEffect)(()=>{Te!==0&&W(new Set($e.current.filter(e=>e.ranges!==null).map(e=>e.entry.fullPath)))},[Te]);let Y=Math.max(40,i.iconSize+20),Zt=Math.max(0,Math.floor(Re.top/Y)-4),Qt=Math.min(J.length,Zt+Math.ceil(Re.height/Y)+10),$t=(0,G.useMemo)(()=>J.slice(Zt,Qt),[J,Zt,Qt]);(0,G.useEffect)(()=>{De&&J.length>0&&Qt>=J.length&&De()},[De,J.length,Qt]),(0,G.useEffect)(()=>{let e=B.current;if(!e||i.mode!==`list`)return;e.scrollTop=0,ze({top:0,height:e.clientHeight});let t=()=>ze(t=>t.height===e.clientHeight?t:{...t,height:e.clientHeight});t();let n=new ResizeObserver(t);return n.observe(e),()=>n.disconnect()},[i.mode]),(0,G.useEffect)(()=>{ze(e=>({...e,top:0})),B.current&&(B.current.scrollTop=0)},[e?.path]),(0,G.useEffect)(()=>{if(r.currentPath){if(i.mode===`list`){let e=J.findIndex(e=>e.entry.fullPath===r.currentPath),t=B.current;if(e<0||!t)return;let n=e*Y;(n<t.scrollTop||n+Y>t.scrollTop+t.clientHeight)&&(t.scrollTop=Math.max(0,n-t.clientHeight/2))}else je.current?.scrollIntoView({block:`nearest`})}},[r.currentPath,i.mode,J,Y]);let[en,tn]=(0,G.useState)(0),rn=(0,G.useRef)(!1),an=(0,G.useMemo)(()=>J.slice(en,en+Ie),[J,en,Ie]);(0,G.useEffect)(()=>()=>{Pe.current!==0&&cancelAnimationFrame(Pe.current)},[]),(0,G.useEffect)(()=>{let e=Me.current;if(!e||e.length===0)return;let t=e.filter(e=>J.some(t=>k(t.entry.fullPath,e)));if(t.length===0)return;Me.current=null;let n=t[0],r=J.findIndex(e=>k(e.entry.fullPath,n));r>=0&&Le(e=>Math.max(e,r+Ni)),W(new Set(t)),V.current=n,i.mode===`list`&&B.current&&r>=0?B.current.scrollTop=Math.max(0,r*Y-B.current.clientHeight/2):requestAnimationFrame(()=>je.current?.scrollIntoView({block:`nearest`}))},[J,Y,i.mode]),(0,G.useEffect)(()=>{Le(Ni),tn(0)},[e?.path]),(0,G.useEffect)(()=>{if(!r.currentPath)return;let e=J.findIndex(e=>e.entry.fullPath===r.currentPath);e>=0&&Le(t=>Math.max(t,e+Ni))},[r.currentPath,J]);let on=(0,G.useCallback)(e=>{if(!(e.scrollTop+e.clientHeight<e.scrollHeight-600)){if(Ie>=1200){let t=e.scrollHeight,n=e.scrollTop;rn.current=!0,tn(e=>Math.min(e+Ni,J.length)),requestAnimationFrame(()=>{e.scrollTop=Math.max(0,n-(t-e.scrollHeight)),rn.current=!1})}else Le(e=>Math.min(J.length,e+Ni));De?.()}},[Ie,J.length,De]),sn=(0,G.useCallback)(e=>{if(rn.current||en===0||e.scrollTop>e.clientHeight)return;let t=e.scrollHeight,n=e.scrollTop;rn.current=!0,tn(e=>Math.max(0,e-Ni)),requestAnimationFrame(()=>{e.scrollTop=n+(e.scrollHeight-t),rn.current=!1})},[en]),cn=i.mode===`grid`,ln=(0,G.useMemo)(()=>{if(!cn)return[];if(!F)return Xi(an,Yi);let e=[],t=new Map;for(let n of an){let r=F(n.entry),i=t.get(r.id);i||(i={id:r.id,label:r.label,rows:[]},t.set(r.id,i),e.push(r.id)),i.rows.push(n)}return e.map(e=>t.get(e))},[an,cn,F]),un=(0,G.useMemo)(()=>c?J.filter(e=>!e.entry.isDirectory&&zt(e.entry.name)):[],[J,c]),dn=un.length,fn=(0,G.useMemo)(()=>un.slice(0,Mi),[un]),pn=(0,G.useMemo)(()=>c?Xi(fn,Ji):[],[fn,c]),mn=(0,G.useMemo)(()=>pn.flatMap(e=>e.rows.map(e=>e.entry.fullPath)),[pn]),hn=mn.filter(e=>U.has(e)).length,gn=mn.length>0&&hn===mn.length,_n=hn>0&&!gn,Z=(0,G.useMemo)(()=>J.map(e=>e.entry.fullPath),[J]),vn=(0,G.useMemo)(()=>cn?ln.flatMap(e=>e.rows.map(e=>e.entry.fullPath)):Z,[Z,cn,ln]),bn=J.length>0&&U.size>=J.length,xn=U.size>0&&!bn,Sn=()=>{L||(bn?On():W(new Set(Z)))},Cn=(0,G.useCallback)((e,t)=>{L||e.length===0||(W(n=>{let r=new Set(n);for(let n of e)t?r.add(n):r.delete(n);return r}),t&&(V.current=e[0]??null))},[L]),Q=e?.path??``,wn=(0,G.useCallback)((e,t)=>{if(L){V.current=t,W(new Set([t]));return}let n=e.ctrlKey||e.metaKey;W(r=>{if(e.shiftKey&&V.current!==null){let e=Z.indexOf(V.current),i=Z.indexOf(t);if(e>=0&&i>=0){let t=Math.min(e,i),a=Math.max(e,i),o=n?new Set(r):new Set;for(let e=t;e<=a;e++)o.add(Z[e]);return o}}if(n){let e=new Set(r);return e.delete(t)||e.add(t),V.current=t,e}return V.current=t,new Set([t])})},[Z,L]),Tn=(0,G.useCallback)((e,t)=>{He.current=!1,wn(e,t)},[wn]),En=(0,G.useCallback)((e,t)=>{He.current=!0,wn(e,t)},[wn]),Dn=(0,G.useCallback)(e=>{L?(V.current=e,W(new Set([e]))):(V.current=e,W(t=>{let n=new Set(t);return n.delete(e)||n.add(e),n}))},[L]),On=(0,G.useCallback)(()=>{V.current=null,He.current=!1,W(new Set)},[]);(0,G.useEffect)(()=>{if(we===0||!R||vt.current===we||!e?.entries.some(e=>e.fullPath===R))return;vt.current=we,V.current=R,W(new Set([R])),gt({path:R,value:ie(R)});let t=J.findIndex(e=>e.entry.fullPath===R),n=B.current;if(!(t<0||!n)){if(i.mode===`list`){let e=t*Y;n.scrollTop=Math.max(0,e-n.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(R)}"]`)?.scrollIntoView({block:`nearest`})})}},[B,e,R,we,Y,J,i.mode]),(0,G.useEffect)(()=>{if(!ht)return;let e=J.findIndex(e=>e.entry.fullPath===ht.path),t=B.current;if(!(e<0||!t)){if(i.mode===`list`){let n=e*Y;t.scrollTop=Math.max(0,n-t.clientHeight/2)}else window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(ht.path)}"]`)?.scrollIntoView({block:`nearest`})})}},[B,ht,Y,J,i.mode]);let kn=(0,G.useCallback)(()=>nt(null),[]),An=(0,G.useCallback)((e,t)=>{e.isDirectory?v(e.fullPath,jt(t)):y?.(e.fullPath,jt(t))},[v,y]),jn=(0,G.useCallback)((e,t,n)=>{Ke({entry:e,x:t,y:n})},[]),Mn=(0,G.useRef)(null),Nn=(0,G.useCallback)(e=>{let t=e.target?.closest(`[data-path]`);if(!t?.dataset.path)return;let n=t.dataset.path;Br(e,U.has(n)?[...U]:[n])},[U]),Pn=(0,G.useCallback)(e=>{if(!Fr(e.dataTransfer))return;e.preventDefault();let t=e.target?.closest(`[data-path]`);Mn.current=t?.dataset.directory===`true`?t.dataset.path??Q:Q,e.dataTransfer.dropEffect=e.ctrlKey?`copy`:`move`},[Q]),Fn=(0,G.useCallback)(e=>{if(ye)return;let{paths:t,move:n}=Ir(e),r=Mn.current??Q;Mn.current=null,t.length!==0&&se&&(e.preventDefault(),se(t,r,!e.ctrlKey&&n))},[Q,se,ye]),In=(0,G.useCallback)((e,t)=>{if(e.preventDefault(),e.stopPropagation(),ye||!t&&!ve)return;let n=Xe.current;t&&!n.has(t)&&W(new Set([t])),t&&(V.current=t);let r=t?n.has(t)?[...n]:[t]:[];nt({x:e.clientX,y:e.clientY,paths:r,background:!t}),Qe().then(Et,()=>Et(!1))},[ve,Q]),Rn=(0,G.useCallback)(()=>D?.(),[D]),zn=(e,t)=>{V.current=e,W(new Set([e])),t&&gt({path:e,value:ie(e)}),Rn()},Bn=ct&&(0,X.jsx)(yn,{initialDirectory:Q,initialName:ct.name,onCancel:()=>lt(null),onCompress:async e=>{let t=await St(ct.paths,e);return!t.ok||!t.path?(f(t.error??z(`could_not_create_the_archive`)),!1):(zn(t.path,!1),!0)}}),Vn=async(e,t=!1)=>{let n=e,r=t;if(e.some(_i)){let t=[];for(let n of e)if(!_i(n))t.push(n);else{if($e.current.find(e=>e.entry.fullPath===n)?.entry?.isDirectory){f(z(`folders_on_a_shared_device_cannot_be_copied_yet`));return}try{t.push(await xi(n))}catch(e){f(e instanceof Error?e.message:z(`the_file_could_not_be_copied`));return}}n=t,r=!1}await Ze(n,r)&&(Et(!0),re?.())},Hn=async e=>{if(!e)return;let t=await rt(e);t.cancelled||(t.ok?(Me.current=t.created,Rn(),fe?.()):f(z(`nothing_on_the_clipboard_could_be_pasted_here`)))},Un=async(e,t=!1)=>{if(!Q)return;let n=e===null?await ot(Q,t):await ut(Q,e);!n.ok||n.path===null?f(n.error??z(`could_not_create_the_item`)):(V.current=n.path,W(new Set([n.path])),gt({path:n.path,value:ie(n.path)}),Rn())},Wn=e=>{W(new Set([e.fullPath])),V.current=e.fullPath,gt({path:e.fullPath,value:e.name})},Gn=(0,G.useCallback)(e=>gt(t=>t&&{...t,value:e}),[]),Kn=(0,G.useCallback)(()=>gt(null),[]),qn=(0,G.useCallback)(async()=>{let e=_t.current;if(gt(null),!e)return;let t=e.value.trim();if(t.length===0)return;let n=$e.current.find(t=>t.entry.fullPath===e.path)?.entry;if(!n||t===n.name)return;let r=await at(e.path,t);r.ok?(On(),r.path&&O?.(e.path,r.path),Rn(),window.setTimeout(()=>Rn(),250)):f(r.error??z(`could_not_rename_the_entry`))},[On,O,Rn,z]),Jn=async(e,t=!1)=>{if((t||pe)&&!await Yn(e,t))return;let n=await it(e,t);if(!n.ok&&n.needsPermanent){if(!await Yn(e,!0))return;n=await it(e,!0)}if(n.ok)On(),Rn();else{if(n.cancelled)return;f(n.error??z(t?`could_not_delete_the_selection`:`could_not_move_the_selection_to_the_recycle_bin`))}},Yn=(0,G.useCallback)((e,t)=>new Promise(n=>pt({paths:e,permanent:t,resolve:n})),[]),Xn=(0,G.useCallback)(e=>{pt(t=>(t?.resolve(e),null))},[]),Zn=(0,G.useCallback)(()=>He.current&&We.current!==null,[]),Qn=(0,G.useCallback)(()=>Zn()?mn:vn,[Zn,mn,vn]),$n=(0,G.useCallback)(e=>{let t=Zn(),n=t?We.current:i.mode===`grid`?Ue.current:B.current;if(!n||!t&&i.mode===`list`&&(e===`left`||e===`right`))return;let r=Qn();if(r.length===0)return;let a=V.current&&r.includes(V.current)?V.current:U.size===1?[...U][0]:null,o=[...n.querySelectorAll(`[data-path]`)],s=a?o.find(e=>e.dataset.path===a):void 0,c=a?r.indexOf(a):-1,l=e===`left`?-1:1,u;u=s?e===`left`||e===`right`?r[((c<0?l>0?-1:0:c)+l+r.length)%r.length]:Gi(o,s.getBoundingClientRect(),e)?.dataset.path??(c>=0?r[c+(e===`down`?1:-1)]:r[0]):o[0]?.dataset.path??r[0],u&&(W(new Set([u])),V.current=u,window.requestAnimationFrame(()=>{n.querySelector(`[data-path="${CSS.escape(u)}"]`)?.scrollIntoView({block:`nearest`})}))},[Qn,U,Zn,i.mode]);(0,G.useEffect)(()=>{if(!E||tt)return;let e=e=>{if(Ft(e.target))return;yt.current?.();let t=Mt(e),n=[...U],r=n.length===1?J.find(e=>e.entry.fullPath===n[0])?.entry:void 0,i=t=>{e.preventDefault(),t()};if(t===`arrowup`||t===`arrowdown`||t===`arrowleft`||t===`arrowright`)e.preventDefault(),$n(t.slice(5));else if(t===`home`||t===`end`){let n=Qn();if(n.length===0)return;e.preventDefault();let r=t===`home`?n[0]:n[n.length-1];W(new Set([r])),V.current=r,window.requestAnimationFrame(()=>{document.querySelector(`[data-path="${CSS.escape(r)}"]`)?.scrollIntoView({block:`nearest`})})}else K(T,`copy`,t)&&i(()=>{n.length>0&&Vn(n)}),K(T,`duplicate`,t)&&i(()=>{n.length!==0&&Q&&et(n,Q,!1).then(e=>{e.ok&&(e.created.length>0&&W(new Set(e.created)),Rn())})}),K(T,`cut`,t)&&i(()=>{n.length>0&&Vn(n,!0)}),K(T,`paste`,t)&&i(()=>void Hn(Q)),K(T,`delete`,t)&&i(()=>{n.length>0&&Jn(n)}),K(T,`deletePermanently`,t)&&i(()=>{n.length>0&&Jn(n,!0)}),K(T,`selectAll`,t)&&i(()=>{let e=Ve.current&&c&&fn.length>0?fn.map(e=>e.entry.fullPath):Z;W(new Set(e)),Oe?.(),V.current=e[0]??null}),K(T,`invertSelection`,t)&&i(()=>{W(new Set(Z.filter(e=>!U.has(e)))),V.current=Z[0]??null}),K(T,`rename`,t)&&r&&i(()=>void Wn(r)),K(T,`open`,t)&&r&&i(()=>{r.isDirectory?v(r.fullPath):y?.(r.fullPath)}),K(T,`newFolder`,t)&&i(()=>void Un(null)),K(T,`terminal`,t)&&i(()=>void mt(Q)),K(T,`properties`,t)&&i(()=>void dt(n.length>0?n:Q?[Q]:[]))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[Z,Vn,Un,Q,E,tt,v,y,Qn,Hn,Jn,Wn,J,U,T,$n]);let er=ft&&(0,X.jsx)(_,{confirmLabel:ft.permanent?z(`delete`):z(`move`),danger:ft.permanent,message:ft.permanent?z(`permanently_delete_target_this_cannot_be_undone`,{target:ft.paths.length===1?z(`this_item`):z(`count_items`,{count:ft.paths.length})}):z(`move_target_to_the_recycle_bin`,{target:ft.paths.length===1?z(`this_item`):z(`count_items`,{count:ft.paths.length})}),onCancel:()=>Xn(!1),onConfirm:()=>Xn(!0),open:!0,title:ft.permanent?z(`delete_permanently`):z(`move_to_the_recycle_bin`)}),$=(0,G.useMemo)(()=>{if(!e||U.size===0)return null;let t=Z.find(e=>U.has(e));return t?J.find(e=>e.entry.fullPath===t)?.entry??null:null},[Z,e,J,U]),tr=(0,G.useMemo)(()=>{if(!e)return null;let t=e.entries.reduce((t,n)=>t+(n.isDirectory?e.folderSizes[n.name]??0:Math.max(n.size,0)),0),n=e.entries.length;return{name:ie(e.path)||e.path,path:e.path,isDirectory:!0,size:t,modified:0,fields:[{label:z(`type`),value:z(`folder`)},{label:z(`location`),value:e.parent??`—`},{label:z(`path`),value:e.path},{label:z(`size`),value:oe(t)},{label:z(`items`),value:ne(z,n,`k_1_item`,`count_items`)},{label:z(`modified`),value:`—`},{label:z(`created`),value:`—`},{label:z(`attributes`),value:`—`}]}},[e,z]),nr=(0,G.useMemo)(()=>{if(!$||!e)return null;let t=$.isDirectory?e.folderSizes[$.name]:void 0,n=e.tags[$.name]??[],r=$.name.lastIndexOf(`.`),i=r>0&&r<$.name.length-1?$.name.slice(r+1).toUpperCase():`—`;return{name:$.name,path:$.fullPath,isDirectory:$.isDirectory,size:$.size,modified:$.modified,created:$.created,fields:[{label:z(`type`),value:$i($,z)},...$.isEncrypted?[{label:z(`encryption`),value:z(`password_required`)}]:[],{label:z(`extension`),value:$.isDirectory?`—`:i},{label:z(`location`),value:e.path},{label:z(`full_path`),value:$.fullPath},{label:z(`size`),value:$.isDirectory?t===void 0?`—`:oe(t):oe($.size)},...$.isDirectory?[{label:z(`items`),value:`${e.counts[$.name]??`—`}`}]:[],{label:z(`modified`),value:A($.modified),time:$.modified},{label:z(`created`),value:A($.created),time:$.created},{label:z(`link_status`),value:$.linkTarget==null?$.linkCount>1?z(`hard_link`):`—`:$.linkValid?`ok`:z(`broken`)},...$.linkTarget?[{label:z(`target`),value:$.linkTarget}]:[],...$.linkCount>1?[{label:z(`links`),value:String($.linkCount)}]:[],{label:z(`attributes`),value:[$.isHidden?z(`hidden`):``,$.isSystem?z(`system`):``].filter(Boolean).join(`, `)||`—`},...n.length>0?[{label:z(`tags`),value:n.join(`, `)}]:[]]}},[e,$,z]),rr=tt?.paths.length===1?tt.paths[0]:null,ir=rr?J.find(e=>e.entry.fullPath===rr)?.entry:void 0,ar=ir?{path:ir.fullPath,isDirectory:ir.isDirectory}:null,or=nr??tr,sr=(0,G.useRef)(ge);sr.current=ge,(0,G.useEffect)(()=>{sr.current?.(or)},[ge,or]);let cr=N&&or&&(0,X.jsx)(Ln,{info:or,onWidth:wt,selectionNote:U.size>1?ne(z,U.size,`k_1_item_selected`,`count_items_selected`):void 0,videoAudio:me,videoAutoplay:he,width:bt});return n&&!e?(0,X.jsx)(oo,{children:(0,X.jsx)(co,{children:n})}):!e&&!t?(0,X.jsx)(oo,{children:(0,X.jsx)(so,{children:z(`nothing_selected`)})}):i.mode===`grid`?(0,X.jsxs)(Ca,{onPointerDown:P,children:[(0,X.jsxs)(wa,{children:[(0,X.jsxs)(Ma,{ref:Ue,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||On()},onContextMenu:e=>In(e),onDragOver:Pn,onDragStart:Nn,onDrop:Fn,onScroll:e=>{_e?.(e.currentTarget),on(e.currentTarget),sn(e.currentTarget)},children:[S&&J.length>0&&(0,X.jsxs)(ba,{children:[(0,X.jsx)(va,{$checked:!L&&bn,$partial:!L&&xn,"aria-label":z(bn?`select_none`:`select_all`),disabled:L,onClick:e=>{e.stopPropagation(),Sn()},title:z(bn?`select_none`:`select_all`),type:`button`,children:bn?(0,X.jsx)(Ee,{size:10}):xn?(0,X.jsx)(ya,{}):null}),(0,X.jsx)(`span`,{children:z(bn?`select_none`:`select_all`)})]}),t&&!e?(0,X.jsx)(La,{$size:i.gridSize,children:(0,X.jsx)(ca,{size:i.gridSize})}):(0,X.jsx)(ua,{counts:e?.counts,currentPath:q?r.currentPath:null,groups:ln,gridSize:i.gridSize,innerRef:je,onContextMenu:In,onOpen:v,onOpenFile:y,onRenameCancel:Kn,onRenameChange:Gn,onRenameCommit:qn,onSelect:Tn,onToggle:Dn,onTogglePaths:L?void 0:Cn,openOnSingleClick:C,renaming:ht,searching:q,selected:U,showCheckboxes:S,showTarget:It}),!t&&e&&J.length===0&&(0,X.jsx)(ao,{children:(0,X.jsx)(so,{children:n??(q&&r.mode===`hide`?z(`no_entries_match_the_search`):z(`this_folder_is_empty`))})}),I]}),tt&&(0,X.jsx)(nn,{canPaste:Tt,directory:Q,platform:le,allowCompression:!0,menu:tt,onAddToTray:ce,onAddFavorite:ue,onRemoveFavorite:j,favoritePaths:M,onExtractArchive:de,onArchiveCreated:zn,onClose:kn,onCompressTo:(e,t)=>lt({paths:e,name:t}),onCopy:Vn,onCreateFile:e=>void Un(e),onCreateFolder:e=>void Un(null,e),onDelete:Jn,onOpen:v,onOpenFile:y,onPaste:Hn,onRefresh:Rn,onRename:e=>{let t=J.find(t=>t.entry.fullPath===e)?.entry;t&&Wn(t)},shortcuts:T,target:ar}),Bn,er]}),cr]}):(0,X.jsxs)(Ca,{onPointerDown:P,children:[(0,X.jsxs)(wa,{children:[(0,X.jsxs)(Ta,{onScroll:e=>{B.current&&B.current.scrollLeft!==e.currentTarget.scrollLeft&&(B.current.scrollLeft=e.currentTarget.scrollLeft)},ref:Ne,style:{gridTemplateColumns:Rt},children:[(0,X.jsxs)(ha,{ref:Vt,children:[S&&(0,X.jsx)(va,{$checked:!L&&bn,$partial:!L&&xn,"aria-label":z(bn?`select_none`:`select_all`),disabled:L,onClick:e=>{e.stopPropagation(),Sn()},title:z(bn?`select_none`:`select_all`),type:`button`,children:bn?(0,X.jsx)(Ee,{size:10}):xn?(0,X.jsx)(ya,{}):null}),(0,X.jsxs)(Ea,{onClick:()=>h(`name`),type:`button`,children:[z(`name`),Wi(i,`name`)]}),(0,X.jsx)(_a,{"aria-label":z(`resize_column`),onDoubleClick:()=>Pt[0]&&qt(Pt[0].id),onPointerDown:Gt,role:`separator`})]}),Pt.map((e,t)=>(0,X.jsxs)(ga,{children:[(0,X.jsxs)(Ea,{onClick:()=>h(e.id),type:`button`,children:[z(e.label),Wi(i,e.id)]}),t<Pt.length-1&&(0,X.jsx)(_a,{"aria-label":z(`resize_column`),onDoubleClick:()=>qt(e.id),onPointerDown:e=>Kt(e,t),role:`separator`})]},e.id))]}),(0,X.jsxs)(Da,{onClick:e=>{e.target===e.currentTarget&&On()},onContextMenu:e=>In(e),onDragOver:Pn,onDragStart:Nn,onDrop:Fn,onScroll:e=>{let t=e.currentTarget;Ne.current&&Ne.current.scrollLeft!==t.scrollLeft&&(Ne.current.scrollLeft=t.scrollLeft),Fe.current=t,Pe.current===0&&(Pe.current=requestAnimationFrame(()=>{Pe.current=0;let e=Fe.current;e&&ze(t=>t.top===e.scrollTop&&t.height===e.clientHeight?t:{top:e.scrollTop,height:e.clientHeight})}))},ref:B,children:[t&&!e?(0,X.jsx)(sa,{template:Rt,columns:Pt.length}):(0,X.jsxs)(X.Fragment,{children:[Zt>0&&(0,X.jsx)(`div`,{style:{height:Zt*Y}}),$t.map(t=>{let n=t.entry.fullPath;return(0,X.jsx)(fa,{current:q&&n===r.currentPath,dim:q&&t.ranges===null,height:Y,iconSize:i.iconSize,innerRef:je,folderSizes:e.folderSizes,counts:e.counts,tagColors:e.tagColors,onContextMenu:In,onOpen:An,onRenameCancel:Kn,onRenameChange:Gn,onRenameCommit:qn,onSelect:Tn,onTagEdit:jn,onToggle:Dn,openOnSingleClick:C,renaming:ht?.path===n?{value:ht.value}:null,row:t,selected:U.has(n),showCheckboxes:S,showTarget:It,template:Rt,visible:Pt},n)}),Qt<J.length&&(0,X.jsx)(`div`,{style:{height:(J.length-Qt)*Y}})]}),!t&&e&&J.length===0&&(0,X.jsx)(oo,{children:(0,X.jsx)(so,{children:n??(q&&r.mode===`hide`?z(`no_entries_match_the_search`):z(`this_folder_is_empty`))})})]}),c&&un.length>0&&(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(Oa,{onDoubleClick:Nt,onPointerDown:Ot,onPointerMove:kt,onPointerUp:At,title:z(`drag_to_resize_double_click_to_reset`)}),(0,X.jsxs)(ka,{onPointerEnter:()=>{Ve.current=!0},onPointerLeave:()=>{Ve.current=!1},style:{height:H},children:[(0,X.jsxs)(Aa,{children:[S&&!L&&mn.length>0&&(0,X.jsx)(va,{$checked:gn,$partial:_n,"aria-label":z(gn?`select_none`:`select_all`),disabled:L,onClick:e=>{e.stopPropagation(),Cn(mn,!gn)},title:z(gn?`select_none`:`select_all`),type:`button`,children:gn?(0,X.jsx)(Ee,{size:10}):_n?(0,X.jsx)(ya,{}):null}),z(`preview`),(0,X.jsx)(ja,{children:dn>Mi?`${fn.length} / ${dn}`:dn})]}),(0,X.jsx)(Ma,{ref:We,onClick:e=>{e.target instanceof Element&&e.target.closest(`[data-path]`)||On()},onContextMenu:e=>In(e),children:(0,X.jsx)(ua,{counts:e?.counts,currentPath:q?r.currentPath:null,groups:pn,gridSize:i.gridSize,onContextMenu:In,onOpen:v,onOpenFile:y,onSelect:En,onToggle:Dn,onTogglePaths:L?void 0:Cn,openOnSingleClick:C,searching:q,selected:U,showCheckboxes:S,showTarget:It})})]})]}),Ge&&e&&(0,X.jsx)(_r,{allTags:e.allTags,colors:e.tagColors,onChange:(e,t)=>g?.(Ge.entry.name,e,t),onClose:()=>Ke(null),tags:e.tags[Ge.entry.name]??[],x:Ge.x,y:Ge.y}),tt&&(0,X.jsx)(nn,{canPaste:Tt,directory:Q,platform:le,allowCompression:!0,menu:tt,onAddToTray:ce,onAddFavorite:ue,onRemoveFavorite:j,favoritePaths:M,onExtractArchive:de,onArchiveCreated:zn,onClose:kn,onCompressTo:(e,t)=>lt({paths:e,name:t}),onCopy:Vn,onCreateFile:e=>void Un(e),onCreateFolder:e=>void Un(null,e),onDelete:Jn,onOpen:v,onOpenExternally:x,onOpenFile:y,onSelectEntry:b,onPaste:Hn,onRefresh:Rn,onRename:e=>{let t=J.find(t=>t.entry.fullPath===e)?.entry;t&&Wn(t)},shortcuts:T,target:ar}),Bn,er]}),cr]})}function Wi(e,t){return e.sort===t?e.sortDescending?` ↓`:` ↑`:``}function Gi(e,t,n){let r=n===`up`||n===`down`,i=n===`down`||n===`right`?1:-1,a=e=>r?{ahead:e.top+e.height/2,apart:e.left+e.width/2}:{ahead:e.left+e.width/2,apart:e.top+e.height/2},o=a(t),s=null,c=1/0;for(let t of e){let{ahead:e,apart:n}=a(t.getBoundingClientRect()),r=(e-o.ahead)*i;if(r<=1)continue;let l=r+Math.abs(n-o.apart)*4;l<c&&(c=l,s=t)}return s}var Ki=new Intl.Collator(void 0,{numeric:!0,sensitivity:`base`});function qi(e,t,n,r){let i=e=>{switch(t.sort){case`type`:return $i(e,r);case`size`:return e.isDirectory?n.folderSizes[e.name]??0:e.size;case`modified`:return e.modified;case`created`:return e.created;case`items`:return e.isDirectory?n.counts[e.name]??-1:-1;case`linkCount`:return e.linkCount>1?e.linkCount:0;case`linkStatus`:return e.linkTarget==null?e.linkCount>1?2:3:+!e.linkValid;case`tags`:return(n.tags[e.name]??[]).join(`, `);default:return e.name}},a=new Map(e.map(e=>[e,i(e.entry)]));return[...e].sort((e,n)=>{if(e.entry.isDirectory!==n.entry.isDirectory)return e.entry.isDirectory?-1:1;let r=a.get(e),i=a.get(n),o=typeof r==`number`&&typeof i==`number`?r-i:Ki.compare(String(r),String(i));return t.sortDescending?-o:o})}var Ji=It.map(({kind:e,label:t})=>({id:e,label:t,match:t=>!t.entry.isDirectory&&Rt(t.entry.name)===e})),Yi=[{id:`folders`,label:`folders`,match:e=>e.entry.isDirectory},...Ji.filter(e=>e.id===`image`||e.id===`video`),{id:`files`,label:`other_files`,match:()=>!0}];function Xi(e,t){let n=t.map(e=>({id:e.id,label:e.label,rows:[]}));for(let r of e){let e=t.findIndex(e=>e.match(r));e>=0&&n[e].rows.push(r)}return n.filter(e=>e.rows.length>0)}function Zi(e){return Math.max(24,Math.min(e-56,160))}var Qi={file:`file`,folder:`folder`,text:`text_file`,code:`source_file`,image:`image`,video:`video_2`,audio:`audio`,archive:`archive`,pdf:`pdf`,executable:`application`,font:`font`,database:`database`,config:`configuration`,spreadsheet:`spreadsheet`,presentation:`presentation`,document:`document`};function $i(e,t){let n=e.name.toLowerCase();if(n.endsWith(`.lnk`))return t(`shortcut`);if(n.endsWith(`.url`)||n.endsWith(`.website`))return t(`internet_shortcut`);if(e.linkTarget!=null)return e.isDirectory?t(`folder_link`):t(`symbolic_link`);if(e.isDirectory)return t(`folder`);let r=e.name.lastIndexOf(`.`),i=r>0&&r<e.name.length-1?e.name.slice(r+1).toUpperCase():``,a=t(Qi[Ar(e.name)]??`file`);return i.length>0?`${i} ${a}`:t(`file`)}function ea(e,t,n,r,i){switch(e){case`type`:return $i(t,i);case`size`:return aa(t,n);case`modified`:return A(t.modified);case`created`:return A(t.created);case`items`:return t.isDirectory?r[t.name]?.toString()??`—`:`—`;case`linkCount`:return t.linkCount>1?String(t.linkCount):`—`;case`linkStatus`:return t.linkTarget==null?t.linkCount>1?`ok`:`—`:t.linkValid?`ok`:i(`broken`);default:return``}}function ta({name:e,ranges:t}){if(!t||t.length===0)return(0,X.jsx)(X.Fragment,{children:e});let n=[],r=0;for(let[i,a]of t)i>r&&n.push(e.slice(r,i)),n.push((0,X.jsx)(io,{children:e.slice(i,a)},i)),r=a;return r<e.length&&n.push(e.slice(r)),(0,X.jsx)(X.Fragment,{children:n})}var na=new WeakMap,ra=null;function ia(e,t,n){return ra??=new IntersectionObserver(e=>{for(let t of e){if(!t.isIntersecting)continue;let e=na.get(t.target);na.delete(t.target),ra?.unobserve(t.target),e?.()}},{rootMargin:n}),na.set(e,t),ra.observe(e),()=>{na.delete(e),ra?.unobserve(e)}}function aa(e,t){if(!e.isDirectory)return oe(e.size);let n=t[e.name];return n===void 0?`—`:oe(n)}function oa({entry:e,size:t=18}){let n=a(),r=(0,G.useRef)(null),[i,o]=(0,G.useState)(!1);(0,G.useEffect)(()=>{if(i)return;let e=r.current;if(e){if(!(`IntersectionObserver`in window))o(!0);else return ia(e,()=>o(!0),`250px`)}},[i]);let s=E(i?e.fullPath:null,e.isDirectory,t>32),c=e.iconSource?.startsWith(`file:`)?e.iconSource.slice(5):null,l=h(c);return(0,X.jsxs)(pa,{$size:t,ref:r,children:[e.iconSource?.startsWith(`icon:`)?(0,X.jsx)(jr,{name:e.iconSource.slice(5),size:t}):l?(0,X.jsx)(`img`,{alt:``,height:t,src:l,width:t}):s?(0,X.jsx)(`img`,{alt:``,height:t,src:s,width:t}):e.isDirectory?(0,X.jsx)(N,{size:t}):(0,X.jsx)(jr,{name:Ar(e.name),size:t}),e.isEncrypted&&(0,X.jsx)(ma,{title:n(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:(0,X.jsx)(he,{size:Math.max(8,Math.round(t*.52))})})]})}function sa({template:e,columns:t}){return(0,X.jsx)(X.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43,66,47].map((n,r)=>(0,X.jsxs)(Ra,{style:{gridTemplateColumns:e},children:[(0,X.jsxs)(Va,{children:[(0,X.jsx)(za,{style:{flexShrink:0,height:18,width:18}}),(0,X.jsx)(za,{style:{width:`${n}%`}})]}),Array.from({length:t},(e,t)=>(0,X.jsx)(za,{style:{width:t%2==0?44:92}},t))]},r))})}function ca({size:e}){return(0,X.jsx)(X.Fragment,{children:[42,58,36,64,48,54,39,61,45,50,57,43].map((t,n)=>(0,X.jsxs)(Qa,{$dim:!1,$current:!1,$image:!1,$selected:!1,children:[(0,X.jsx)($a,{children:(0,X.jsx)(za,{style:{height:e,width:e}})}),(0,X.jsx)(to,{children:(0,X.jsx)(za,{style:{height:9,width:`${t}%`}})})]},n))})}var la=(0,G.memo)(function({row:e,current:t,dim:n,iconSize:r,itemCount:i,showTarget:o,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onRenameChange:f,onRenameCommit:p,onRenameCancel:m,onSelect:h,onToggle:g,onContextMenu:_,onOpen:v,onOpenFile:b}){let x=a(),S=Ut(),C=!e.entry.isDirectory&&zt(e.entry.name),w=(0,G.useRef)(null),[T,E]=(0,G.useState)(!1);(0,G.useEffect)(()=>{if(!C||T)return;let e=w.current;if(e){if(!(`IntersectionObserver`in window))E(!0);else return ia(e,()=>E(!0),`300px`)}},[C,T]);let ee=y(C&&T?e.entry.fullPath:null,192,e.entry.modified),[te,D]=(0,G.useState)(!1),O=C&&ee!==null&&!te,k=e.entry.fullPath,ne=t=>{e.entry.isDirectory?v(k,jt(t)):b?.(k,jt(t))};return(0,X.jsxs)(Qa,{$current:t,$dim:n,$image:O,$selected:c,onClick:e=>{h(e,k),u&&ne(e)},onContextMenu:e=>_(e,k),onDoubleClick:e=>{u||ne(e)},ref:e=>{w.current=e,t&&s&&(s.current=e)},title:e.entry.name,"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":k,draggable:!d,children:[l&&(0,X.jsx)(Sa,{$checked:c,onClick:e=>{e.stopPropagation(),g(k)},onDoubleClick:e=>e.stopPropagation(),title:x(c?`deselect`:`select`),type:`button`,children:c&&(0,X.jsx)(Ee,{size:10})}),(0,X.jsx)($a,{children:O?(0,X.jsx)(`img`,{alt:``,decoding:`async`,loading:`lazy`,onError:()=>D(!0),src:ee}):(0,X.jsx)(eo,{children:e.place&&S.useIcons?(0,X.jsx)(mr,{place:e.place,size:r}):(0,X.jsx)(oa,{entry:e.entry,size:r})})}),(0,X.jsxs)(to,{children:[d?(0,X.jsx)(da,{onCancel:()=>m?.(),onChange:e=>f?.(e),onCommit:()=>p?.(),value:d.value}):(0,X.jsx)(no,{$broken:e.entry.linkValid===!1,children:(0,X.jsx)(ta,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,X.jsxs)(Ua,{title:x(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,X.jsx)(he,{size:9}),x(`encrypted`)]}),e.cut&&(0,X.jsxs)(Wa,{title:x(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,X.jsx)(R,{size:9}),x(`cut`)]}),(0,X.jsx)(ro,{children:e.entry.isDirectory?i===void 0?$i(e.entry,x):x(`type_count_items`,{type:$i(e.entry,x),count:i}):x(`type_size`,{type:$i(e.entry,x),size:oe(e.entry.size)})}),o&&e.entry.linkTarget&&(0,X.jsxs)(Ka,{$block:!0,$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,X.jsx)(ye,{size:9}),(0,X.jsx)(`span`,{children:e.entry.linkTarget})]})]})]})});function ua({groups:e,gridSize:t,counts:n,showTarget:r,searching:i,currentPath:o,innerRef:s,selected:c,showCheckboxes:l,openOnSingleClick:u,renaming:d,onSelect:f,onToggle:p,onTogglePaths:m,onContextMenu:h,onOpen:g,onOpenFile:_,onRenameChange:v,onRenameCommit:y,onRenameCancel:b}){let x=a();return(0,X.jsx)(X.Fragment,{children:e.map(e=>{let a=e.rows.map(e=>e.entry.fullPath),S=a.filter(e=>c.has(e)).length,C=a.length>0&&S===a.length,w=S>0&&!C;return(0,X.jsxs)(Na,{children:[(0,X.jsxs)(Pa,{children:[l&&m&&a.length>0&&(0,X.jsx)(va,{$checked:C,$partial:w,"aria-label":x(C?`select_none`:`select_all`),onClick:e=>{e.stopPropagation(),m(a,!C)},title:x(C?`select_none`:`select_all`),type:`button`,children:C?(0,X.jsx)(Ee,{size:10}):w?(0,X.jsx)(ya,{}):null}),x(e.label),(0,X.jsx)(Fa,{children:e.rows.length}),(0,X.jsx)(Ia,{})]}),(0,X.jsx)(La,{$size:t,children:e.rows.map(e=>(0,X.jsx)(la,{current:i&&e.entry.fullPath===o,dim:i&&e.ranges===null,iconSize:Zi(t),innerRef:s,itemCount:n?.[e.entry.name],onContextMenu:h,onOpen:g,onOpenFile:_,onSelect:f,onToggle:p,openOnSingleClick:u,onRenameCancel:b,onRenameChange:v,onRenameCommit:y,renaming:d?.path===e.entry.fullPath?d:null,row:e,selected:c.has(e.entry.fullPath),showCheckboxes:l,showTarget:r},e.entry.fullPath))})]},e.id)})})}function da({value:e,onChange:t,onCommit:n,onCancel:r}){let i=(0,G.useRef)(null);return(0,G.useEffect)(()=>{let t=i.current;if(!t)return;t.focus();let n=e.lastIndexOf(`.`);t.setSelectionRange(0,n>0?n:e.length)},[]),(0,X.jsx)(Ga,{onClick:e=>e.stopPropagation(),onDoubleClick:e=>e.stopPropagation(),onChange:e=>t(e.target.value),onKeyDown:e=>{e.stopPropagation(),e.key===`Enter`?(e.preventDefault(),n()):e.key===`Escape`&&(e.preventDefault(),r())},onBlur:n,ref:i,value:e})}var fa=(0,G.memo)(function({row:e,current:t,dim:n,selected:r,showCheckboxes:i,showTarget:o,openOnSingleClick:s,iconSize:c,height:l,template:u,visible:d,folderSizes:f,counts:p,tagColors:m,innerRef:h,renaming:g,onSelect:_,onToggle:v,onContextMenu:y,onOpen:b,onTagEdit:x,onRenameChange:S,onRenameCommit:C,onRenameCancel:w}){let T=a(),E=Ut(),te=e.entry.fullPath;return(0,X.jsxs)(Ba,{$current:t,$dim:n,$height:l,$hidden:e.entry.isHidden,$selected:r,onClick:t=>{_(t,te),s&&b(e.entry,t)},onContextMenu:e=>y(e,te),onDoubleClick:t=>{s||b(e.entry,t)},ref:t?h:void 0,style:{gridTemplateColumns:u},"data-directory":e.entry.isDirectory?`true`:void 0,"data-path":te,draggable:!g,children:[(0,X.jsxs)(Va,{children:[i&&(0,X.jsx)(xa,{$checked:r,onClick:e=>{e.stopPropagation(),v(te)},onDoubleClick:e=>e.stopPropagation(),title:T(r?`deselect`:`select`),type:`button`,children:r&&(0,X.jsx)(Ee,{size:10})}),e.place&&E.useIcons?(0,X.jsx)(pa,{children:(0,X.jsx)(mr,{place:e.place,size:c})}):(0,X.jsx)(oa,{entry:e.entry,size:c}),g?(0,X.jsx)(da,{onCancel:w,onChange:S,onCommit:C,value:g.value}):(0,X.jsx)(Ha,{$broken:e.entry.linkValid===!1,title:e.entry.name,children:(0,X.jsx)(ta,{name:e.label,ranges:e.ranges})}),e.entry.isEncrypted&&(0,X.jsxs)(Ua,{title:T(`this_archive_is_encrypted_and_asks_for_a_password_when_opened`),children:[(0,X.jsx)(he,{size:9}),T(`encrypted`)]}),e.cut&&(0,X.jsxs)(Wa,{title:T(`this_item_is_cut_and_will_move_when_something_is_pasted`),children:[(0,X.jsx)(R,{size:9}),T(`cut`)]}),o&&e.entry.linkTarget&&(0,X.jsxs)(Ka,{$broken:e.entry.linkValid===!1,title:e.entry.linkTarget,children:[(0,X.jsx)(ye,{size:9}),(0,X.jsx)(`span`,{children:e.entry.linkTarget})]})]}),d.map(t=>(0,X.jsx)(qa,{children:t.id===`tags`?(0,X.jsx)(Ja,{onClick:t=>{t.stopPropagation(),x(e.entry,t.clientX,t.clientY)},title:T(`edit_tags`),type:`button`,children:e.tags.length>0?e.tags.map(e=>{let t=m?.[e]??`#64748b`;return(0,X.jsx)(Ya,{$color:t,$ink:gr(t),children:e},e)}):(0,X.jsx)(Xa,{children:`+`})}):t.id===`linkStatus`&&e.entry.linkValid===!1?(0,X.jsx)(Za,{children:T(`broken`)}):t.id===`modified`?(0,X.jsx)(ee,{value:e.entry.modified}):t.id===`created`?(0,X.jsx)(ee,{value:e.entry.created}):ea(t.id,e.entry,f,p,T)},t.id))]})}),pa=i.span`
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
`,ma=i.span`
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
`,ha=i.div`
    display: flex;
    align-items: center;
    gap: 8px;
    min-width: 0;
    position: relative;
`,ga=i.div`
    display: flex;
    align-items: center;
    min-width: 0;
    position: relative;
`,_a=i.span`
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
`,va=i.button`
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
`,ya=i.span`
    width: 7px;
    height: 2px;
    border-radius: 1px;
    background: #fff;
`,ba=i.div`
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
`,xa=i.button`
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
`,Sa=i(xa)`
    position: absolute;
    top: 6px;
    left: 6px;
    z-index: 3;
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.9)`:`rgba(var(--bg-rgb), 0.6)`};
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
`,Ca=i.div`
    display: flex;
    flex: 1;
    min-width: 0;
    min-height: 0;
`,wa=i.div`
    display: flex;
    flex-direction: column;
    min-height: 0;
    min-width: 0;
    flex: 1;
    font-family: var(--font-names), var(--font-cjk);
`,Ta=i.div`
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
`,Ea=i.button`
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
`,Da=i.div`
    flex: 1;
    min-height: 0;
    min-width: 0;
    overflow: auto;
    padding: 8px 10px 22px;
`,Oa=i.div`
    height: 6px;
    flex-shrink: 0;
    border-top: 1px solid var(--border-color);
    cursor: row-resize;
    transition: background 120ms ease;

    &:hover {
        background: rgba(var(--accent-rgb), 0.35);
    }
`,ka=i.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    min-height: 0;
    background: rgba(var(--bg-rgb), 0.42);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,Aa=i.div`
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
`,ja=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
`,Ma=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 12px 14px 24px;
`,Na=i.section`
    & + & {
        margin-top: 22px;
    }
`,Pa=i.h3`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
`,Fa=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,Ia=i.span`
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border-color), transparent);
`,La=i.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${({$size:e})=>e+42}px, 1fr));
    grid-auto-rows: ${({$size:e})=>e}px;
    gap: 10px;
    align-content: start;
`,Ra=i.div`
    display: grid;
    gap: 16px;
    align-items: center;
    padding: 9px 12px;
`,za=i.span`
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
`,Ba=i.div`
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
`,Va=i.div`
    display: flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
`,Ha=i.span`
    flex-shrink: 1;
    overflow: hidden;
    min-width: 0;
    color: ${({$broken:e})=>e?`#f87171`:`inherit`};
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ua=i.span`
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
`,Wa=i.span`
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
`,Ga=i.input`
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
`,Ka=i.span`
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
`,qa=i.span`
    overflow: hidden;
    font-family: var(--font-sans);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
    text-overflow: ellipsis;
    white-space: nowrap;
`,Ja=i.button`
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
`,Ya=i.span`
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
`,Xa=i.span`
    color: var(--text-muted);
    font-size: 11px;
`,Za=i.span`
    color: #fca5a5;
`,Qa=i.div`
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
`,$a=i.div`
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
`,eo=i.span`
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
`,to=i.div`
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
`,no=i.span`
    width: 100%;
    overflow: hidden;
    color: ${({$broken:e})=>e?`#f87171`:`var(--text-secondary)`};
    text-align: left;
    text-decoration: ${({$broken:e})=>e?`line-through`:`none`};
    text-overflow: ellipsis;
    white-space: nowrap;
`,ro=i.span`
    font-family: var(--font-mono);
    font-size: 9px;
    color: var(--text-muted);
`,io=i.mark`
    border-radius: 2px;
    background: rgba(var(--accent-rgb), 0.5);
    color: var(--text-primary);
`,ao=i.div`
    display: grid;
    grid-column: 1 / -1;
    place-items: center;
    padding: 48px 24px;
`,oo=i.div`
    display: grid;
    place-items: center;
    flex: 1;
    padding: 48px 24px;
`,so=i.p`
    font-size: 13px;
    color: var(--text-muted);
`,co=i.p`
    max-width: 620px;
    font-family: var(--font-mono);
    font-size: 12px;
    color: #fca5a5;
    text-align: center;
    word-break: break-word;
`;export{Nt as $,Mr as A,sn as B,ui as C,Vr as D,yi as E,pr as F,Gt as G,Jt as H,lr as I,Ct as J,Wt as K,dr as L,hr as M,mr as N,Fr as O,or as P,Ft as Q,Ln as R,Oi as S,hi as T,qt as U,nn as V,Ht as W,Mt as X,K as Y,Ot as Z,fi as _,dt as _t,Ei as a,Et as at,Ti as b,di as c,Ze as ct,_i as d,nt as dt,q as et,Di as f,ut as ft,vi as g,vt as gt,pi as h,rt as ht,ci as i,Tt as it,jr as j,Ir as k,si as l,it as lt,Si as m,pt as mt,Li as n,At as nt,Ci as o,jt as ot,bi as p,ot as pt,Ut as q,Pi as r,wt as rt,Ai as s,St as st,Ui as t,Dt as tt,wi as u,$e as ut,li as v,et as vt,ji as w,mi as x,ki as y,_t as yt,yn as z};