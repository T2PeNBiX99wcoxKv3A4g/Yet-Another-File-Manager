import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as ee,r as a,s as o,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-69Rb8xko.js";import{A as re,B as ie,D as ae,G as oe,J as se,K as ce,R as s,T as le,_ as c,bt as l,i as ue,k as u,n as d,o as de,p as fe,u as f}from"./selectionMenu-3N_AfRQo.js";import{C as p,a as m,c as pe,d as h,k as g,l as _,r as v,w as y}from"./theme-Ocob2ChL.js";import{B as me,J as b,V as he,dt as ge,ft as _e,pt as ve,t as ye}from"./FileList-wM4BPYTZ.js";import{c as be,d as x,f as xe,l as Se,o as S,u as Ce}from"./main-Do7kvODv.js";import{K as we,a as Te,d as Ee,i as De,it as Oe,j as ke,r as Ae,st as je,t as C,v as Me}from"./Icons-NY0trHLk.js";import{t as Ne}from"./GalleryView-DOmBe0kF.js";import{t as Pe}from"./OverviewView-Cc872J0X.js";var w=e(t(),1),Fe=g(),T=n();function E({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,types:ee,typeIndex:a=0,inline:o=!1,places:l,fileView:de,showImages:fe,save:f=!1,initialName:m=``,defaultExtension:pe=``,theme:g,onCancel:_,onSelect:v}){let x=te(),xe=d(`picker`),S=t===`file`,C=i??[],E=ee??[],O=pe.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[k,Qe]=(0,w.useState)(()=>{if(E.length===0)return C.length===0?`all`:`supported`;let e=e=>e.length===0?-1:E.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase()))),t=m.lastIndexOf(`.`),n=t>0?e([m.slice(t).toLowerCase()]):-1;if(n>=0)return n;if(a>=2&&a<=E.length)return a-1;let r=e(O);return r>=0?r:a>=1&&a<=E.length?a-1:0}),$e=typeof k==`number`?E[k]??null:null,A=typeof k==`number`?$e?.extensions??[]:k===`supported`?C:[],j=typeof k==`number`?k+1:0,et=e=>E.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),tt=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},nt=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:et(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},rt=e=>{Qe(e),R(t=>nt(t,typeof e==`number`?E[e]??null:null))},[M,N]=(0,w.useState)(e),[P,it]=(0,w.useState)(null),[at,ot]=(0,w.useState)(!0),[st,ct]=(0,w.useState)(null),[F,I]=(0,w.useState)(()=>new Set),[L,lt]=(0,w.useState)(l??[]),[ut,dt]=(0,w.useState)([]),[ft,pt]=(0,w.useState)([]),[mt,ht]=(0,w.useState)([]),[gt,_t]=(0,w.useState)([]),[vt,R]=(0,w.useState)(m),[yt,bt]=(0,w.useState)(null),[z,xt]=(0,w.useState)(`files`),[St,Ct]=(0,w.useState)(0),[B,V]=(0,w.useState)(le),[wt,Tt]=(0,w.useState)(0),[Et,H]=(0,w.useState)(0),[Dt,Ot]=(0,w.useState)(0),[U,kt]=(0,w.useState)(null),[At,jt]=(0,w.useState)(null),[Mt,Nt]=(0,w.useState)(0),[W,Pt]=(0,w.useState)(null),[Ft,It]=(0,w.useState)(re.imageStripHeight);(0,w.useEffect)(()=>{ne().then(Pt,()=>Pt(null))},[]),(0,w.useEffect)(()=>{l?lt(l):oe().then(lt,()=>lt([]))},[l]),(0,w.useEffect)(()=>{ie().then(dt,()=>dt([])),ce().then(pt,()=>pt([]))},[]),(0,w.useEffect)(()=>{let e=!0;return ot(!0),ct(null),I(new Set),f||R(S?``:h(M)),s(M||void 0,!1).then(t=>{e&&(it(t),N(t.path),f||R(S?``:h(t.path)),ot(!1))},t=>{e&&(ct(t instanceof Error?t.message:String(t)),ot(!1))}),()=>{e=!1}},[M,St,S]),(0,w.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),V(e=>({...e,open:!0})),Tt(e=>e+1);return}if(e.key===`Escape`){B.open?(V(e=>({...e,open:!1,query:``})),H(0)):_();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),K();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),q();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),V(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),Tt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Yt()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,w.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),K()):(e.button===4||e.button===9)&&(e.preventDefault(),q())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let G=e=>{let t=e.trim();t.length!==0&&p(t)!==p(M)&&(ht(e=>[...e,M]),_t([]),xt(`files`),N(t))},K=()=>{let e=mt.at(-1);e!==void 0&&(ht(e=>e.slice(0,-1)),_t(e=>[M,...e]),N(e))},q=()=>{let e=gt[0];e!==void 0&&(_t(e=>e.slice(1)),ht(e=>[...e,M]),N(e))};(0,w.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:K();break;case`forward`:q()}})});let J=P?.path??M,Lt=P?.parent??(M?y(M):null);(0,w.useEffect)(()=>{r.available&&J&&r.send({type:`fs.watch`,payload:{paths:[J],owner:`picker`}})},[J]),(0,w.useEffect)(()=>{if(r.available&&J)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&p(t.data.path)===p(J)&&s(J,!1).then(e=>{it(e);let t=new Set(e.entries.map(e=>e.fullPath));I(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[J]);let Rt=(P?.entries??[]).filter(e=>e.isDirectory||S&&(A.length===0||A.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),zt=P?{...P,entries:Rt}:null,Bt=B.open&&B.query.length>0,Y=(0,w.useMemo)(()=>Bt?Rt.filter(e=>ae(e.name,B)).map(e=>e.fullPath):[],[Bt,Rt,B]);(0,w.useEffect)(()=>{H(0)},[B.query,B.matchCase,B.regex,P?.path]);let X=Y.length===0?-1:Math.min(Et,Y.length-1),Vt=(0,w.useMemo)(()=>({...B,currentPath:X>=0?Y[X]:null}),[B,X,Y]),Z=W?.defaultView??re,Ht=de??{mode:Z.mode,iconSize:Z.iconSize,gridSize:Z.gridSize,sort:`name`,sortDescending:!1,columns:Z.columns??[`type`,`size`,`modified`]},Ut=(fe??Z.showImages)&&Ht.mode===`list`,Wt=!S||A.length===0,Gt=F.size===1?[...F][0]:null,Kt=Gt!==null&&(P?.entries.find(e=>e.fullPath===Gt)?.isDirectory??!1),qt=!f&&Wt&&(Kt||F.size===0&&vt.trim().length===0),Q=vt.trim(),Jt=Q.length>0?Le(Q)?Q:Ie(J,Q):null,Yt=()=>{if(at||st)return;if(f){let e=Q;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){c(x(`the_file_name_is_not_valid`));return}let t=A[0]??O[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=Le(e)?e+n:Ie(J,e+n);ge([r]).then(e=>e[0]?.exists?bt(r):v([r],j),()=>v([r],j));return}let e=n?[...F]:[...F].slice(0,1);e.length>0?v(e,j):Jt!==null&&Q!==h(J)?v([Jt],j):Wt&&J&&v([J])},Xt=(0,w.useCallback)(e=>{I(new Set(e));let t=e.length===1&&(y(e[0])!==J||P?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(f&&t)?R(h(e[0])):f||R(e.length===0&&!S?h(J):``)},[J,S,P,f]),Zt=e=>{e.length!==0&&(f?R(h(e[0])):v(e,j))},Qt=e=>{P?.entries.find(t=>t.fullPath===e)?.isDirectory?G(e):se(e)},$t=e=>{P?.entries.find(t=>t.fullPath===e)?.isDirectory?G(e):f?R(h(e)):S&&v([e],j)},en=e=>R(e),tn=async e=>{let t=U;if(kt(null),!t||!J)return;let n=e===null?await ve(J):await _e(J,e);n.ok&&n.path!==null&&(V(e=>({...e,open:!1,query:``})),e!==null&&Qe(`all`),Ct(e=>e+1),window.setTimeout(()=>{jt(n.path),Nt(e=>e+1)},120))},nn=()=>{V(e=>({...e,open:!0})),Tt(e=>e+1)},rn=e=>{H(t=>Y.length===0?0:(t+e+Y.length)%Y.length)},$=e=>(0,T.jsxs)(Ke,{children:[(0,T.jsxs)(qe,{children:[(0,T.jsx)(Je,{children:x(S||f?`file_name`:`folder_3`)}),(0,T.jsx)(Ye,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Yt())},spellCheck:!1,value:vt}),S&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Je,{children:x(`files_of_type`)}),(0,T.jsx)(me,{onChange:e=>rt(e===`all`||e===`supported`?e:Number(e)),options:E.length>0?[...E.map((e,t)=>({value:String(t),label:tt(e)})),{value:`all`,label:`${x(`all_files`)} (*.*)`}]:[...C.length>0?[{value:`supported`,label:`${x(`supported_files`)} (${C.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${x(`all_files`)} (*.*)`}],value:String(k)})]})]}),(0,T.jsxs)(Xe,{children:[(0,T.jsx)(Ze,{onClick:_,type:`button`,children:x(`cancel`)}),(0,T.jsxs)(Ze,{$primary:!0,disabled:at||st!==null||(f?Q.length===0:F.size===0&&Q.length===0&&!Wt),onClick:Yt,type:`button`,children:[(0,T.jsx)(Ee,{size:12}),x(f?`save_as`:qt?`select_this_folder`:`select_this_file`)]})]}),(0,T.jsx)(ue,{confirmLabel:x(`overwrite`),message:x(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>bt(null),onConfirm:()=>{let e=yt;bt(null),e&&v([e],j)},open:yt!==null,title:x(`overwrite`)})]}),an=(0,T.jsxs)(ze,{$inline:o,role:`dialog`,"aria-modal":!o,children:[!o&&(0,T.jsxs)(Be,{children:[(0,T.jsxs)(Ve,{children:[(0,T.jsx)(ke,{size:16}),x(f?`save_as`:S?`choose_a_file`:`choose_a_folder`)]}),(0,T.jsx)(He,{onClick:_,title:x(`cancel`),type:`button`,children:(0,T.jsx)(Me,{size:12})})]}),(0,T.jsxs)(Ue,{children:[(0,T.jsx)(be,{activeKind:z===`overview`?`home`:z===`gallery`?`gallery`:`files`,currentPath:J,drives:ut,hiddenViews:S?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:L.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>G(e),onOpenView:e=>{e===`home`?(I(new Set),R(S?``:h(J)),xt(`overview`)):e===`gallery`&&S&&(I(new Set),R(``),xt(`gallery`))},places:L,recent:ft,recentLimit:10}),(0,T.jsx)(We,{children:z===`overview`?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Pe,{drives:ut,theme:g,historyVersion:0,homePath:L.find(e=>e.kind===`home`)?.path??``,onOpen:e=>G(e),onPick:S?e=>v([e],j):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Xt,places:L,readOnly:!0,recent:ft,recentLimit:10,visibilityVersion:0}),$(R)]}):z===`gallery`?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ne,{onPick:e=>v([e],j),onSelectionChange:Xt,showCheckboxes:W?.showCheckboxes??!0,view:{...u,columns:[]}}),$(R)]}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(Ge,{children:[(0,T.jsx)(D,{disabled:mt.length===0,onClick:K,title:x(`back`),type:`button`,children:(0,T.jsx)(Ae,{})}),(0,T.jsx)(D,{disabled:gt.length===0,onClick:q,title:x(`forward`),type:`button`,children:(0,T.jsx)(De,{})}),(0,T.jsx)(D,{disabled:!Lt,onClick:()=>Lt&&G(Lt),title:x(`up_one_level`),type:`button`,children:(0,T.jsx)(Te,{})}),(0,T.jsx)(Se,{onNavigate:G,path:J}),(0,T.jsx)(D,{onClick:e=>kt({x:e.clientX,y:e.clientY}),title:x(`new_folder_or_file`),type:`button`,children:(0,T.jsx)(Oe,{})}),(0,T.jsx)(D,{onClick:nn,title:x(`search`),type:`button`,children:(0,T.jsx)(je,{})}),xe.available&&(0,T.jsx)(D,{onClick:e=>xe.open(e.clientX,e.clientY),title:x(`selection_menu`),type:`button`,children:(0,T.jsx)(we,{})})]}),B.open&&(0,T.jsx)(Ce,{current:X,focusToken:wt,matchCase:B.matchCase,mode:B.mode,onClose:()=>{V(e=>({...e,open:!1,query:``})),H(0)},onMatchCase:()=>V(e=>({...e,matchCase:!e.matchCase})),onMode:()=>V(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>rn(1),onPrevious:()=>rn(-1),onQuery:e=>V(t=>({...t,query:e})),onRegex:()=>V(e=>({...e,regex:!e.regex})),query:B.query,regex:B.regex,total:Y.length,onSelectMatches:()=>Ot(e=>e+1)}),(0,T.jsx)(ye,{allowBackgroundMenu:!0,confirmDelete:W?.confirmDelete??!1,enableShortcuts:!0,error:st,find:Vt,selectMatchesToken:Dt,imageStripHeight:Ft,loading:at,listing:zt,onImageStripHeight:It,onOpen:$t,onOpenExternally:Qt,onOpenFile:$t,onSelectEntry:Zt,onRefresh:()=>Ct(e=>e+1),onSelectionChange:Xt,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:W?.openOnSingleClick??!1,refreshToken:St,pendingRename:At,pendingRenameToken:Mt,showCheckboxes:W?.showCheckboxes??!0,showDetails:!1,showImages:Ut,singleSelect:!n,view:Ht}),$(en)]})})]}),U&&(0,T.jsx)(he,{creationOnly:!0,directory:J,menu:{x:U.x,y:U.y,paths:[],background:!0},onClose:()=>kt(null),onCreateFile:S?e=>void tn(e):void 0,onCreateFolder:()=>void tn(null),shortcuts:b})]});return o?an:(0,Fe.createPortal)((0,T.jsx)(Re,{onPointerDown:e=>{e.target===e.currentTarget&&_()},children:an}),document.body)}function Ie(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Le(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Re=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${de}
`,ze=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:fe}
    ${({$inline:e})=>e?``:f}
`,Be=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Ve=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,He=i.button`
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
`,Ue=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,We=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Ge=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,D=i.button`
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
`,Ke=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,qe=i.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Je=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Ye=i.input`
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
`,Xe=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Ze=i.button`
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
`;function O(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function k({mode:e,save:t=!1,multiple:n,extensions:i,types:ie,typeIndex:ae=0,initial:oe,initialName:se=``,defaultExtension:ce=``}){let s=te(),le=o(),[c,ue]=(0,w.useState)(null),u=a(m(c?.themeMode)),[d,de]=(0,w.useState)({}),[fe,f]=(0,w.useState)(null),[p,h]=(0,w.useState)(null),[g,y]=(0,w.useState)(null),me=(0,w.useRef)(0);(0,w.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,w.useEffect)(()=>(l(e=>new Promise(t=>{y({id:++me.current,prompt:e,resolve:t})})),()=>l(null)),[]),(0,w.useEffect)(()=>{ne().then(ue,()=>void 0)},[]),(0,w.useEffect)(()=>{v(c?.accentColor,c?.secondaryColor,u)},[c?.accentColor,c?.secondaryColor,u]),(0,w.useEffect)(()=>{_(c?.timeFormat,c?.timeFormatPattern),pe(c?.relativeTime,c?.relativeTimeWindowMinutes)},[c?.timeFormat,c?.timeFormatPattern,c?.relativeTime,c?.relativeTimeWindowMinutes]);let b=c?.defaultView??re,he={mode:d.mode??b.mode,iconSize:d.iconSize??b.iconSize,gridSize:d.gridSize??b.gridSize,sort:`name`,sortDescending:!1,columns:fe??b.columns??[`type`,`size`,`modified`]},ge=e=>de(t=>({...t,...e}));return(0,T.jsxs)(Qe,{children:[(0,T.jsxs)($e,{children:[(0,T.jsx)(A,{children:(0,T.jsx)(C,{size:17})}),(0,T.jsx)(j,{...le,children:s(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,T.jsx)(S,{onChange:ge,onColumns:f,onShowImages:h,showImages:p??b.showImages,view:he}),(0,T.jsx)(et,{children:(0,T.jsx)(tt,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:s(`cancel`),type:`button`,children:(0,T.jsx)(Me,{size:12})})})]}),(0,T.jsx)(nt,{children:(0,T.jsx)(E,{extensions:i,types:O(ie),typeIndex:ae,initial:oe,initialName:se,defaultExtension:ce,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:(e,t)=>r.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:p??b.showImages,fileView:he,theme:u})}),g&&(0,T.jsx)(xe,{action:g.prompt.action,delaySeconds:g.prompt.delaySeconds,hits:g.prompt.hits,onCancel:()=>{g.resolve(!1),y(null)},onConfirm:()=>{g.resolve(!0),y(null)},permanent:g.prompt.permanent},g.id),(0,T.jsx)(x,{}),(0,T.jsx)(ee,{})]})}var Qe=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,$e=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,A=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,j=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,et=i.div`
    display: flex;
    flex-shrink: 0;
`,tt=i.button`
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
`,nt=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{k as PickerWindow};