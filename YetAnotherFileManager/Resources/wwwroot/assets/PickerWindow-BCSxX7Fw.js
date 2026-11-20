import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as ee,r as a,s as o,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-69Rb8xko.js";import{A as re,B as ie,D as ae,G as oe,J as se,K as ce,R as le,T as ue,_ as s,a as de,bt as c,i as l,k as u,n as fe,o as pe,p as me,u as d}from"./selectionMenu-3N_AfRQo.js";import{C as f,a as p,c as he,d as m,k as h,l as g,r as _,w as ge}from"./theme-Ocob2ChL.js";import{B as v,J as _e,V as ve,dt as ye,ft as be,pt as xe,t as Se}from"./FileList-wM4BPYTZ.js";import{c as Ce,d as y,f as we,l as Te,o as b,p as x,u as Ee}from"./main-B1_vT213.js";import{K as De,a as Oe,d as ke,i as Ae,it as je,j as Me,r as Ne,st as Pe,t as S,v as Fe}from"./Icons-NY0trHLk.js";import{t as Ie}from"./GalleryView-Dm5vf3ef.js";import{t as Le}from"./OverviewView-Cc872J0X.js";var C=e(t(),1),Re=h(),w=n();function ze({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,types:ee,typeIndex:a=0,inline:o=!1,places:c,fileView:pe,showImages:me,save:d=!1,initialName:p=``,defaultExtension:he=``,theme:h,onCancel:g,onSelect:_}){let y=te(),we=fe(`picker`),b=t===`file`,x=i??[],S=ee??[],ze=he.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[E,nt]=(0,C.useState)(()=>{if(S.length===0)return x.length===0?`all`:`supported`;let e=e=>e.length===0?-1:S.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase()))),t=p.lastIndexOf(`.`),n=t>0?e([p.slice(t).toLowerCase()]):-1;if(n>=0)return n;if(a>=2&&a<=S.length)return a-1;let r=e(ze);return r>=0?r:a>=1&&a<=S.length?a-1:0}),rt=typeof E==`number`?S[E]??null:null,D=typeof E==`number`?rt?.extensions??[]:E===`supported`?x:[],O=typeof E==`number`?E+1:0,it=e=>S.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),at=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},ot=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:it(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},st=e=>{nt(e),V(t=>ot(t,typeof e==`number`?S[e]??null:null))},[k,A]=(0,C.useState)(e),[j,ct]=(0,C.useState)(null),[lt,ut]=(0,C.useState)(!0),[dt,ft]=(0,C.useState)(null),[M,N]=(0,C.useState)(()=>new Set),[P,pt]=(0,C.useState)(c??[]),[mt,ht]=(0,C.useState)([]),[gt,_t]=(0,C.useState)([]),[F,I]=(0,C.useState)([]),[L,R]=(0,C.useState)([]),[z,B]=(0,C.useState)(null),[vt,V]=(0,C.useState)(p),[yt,bt]=(0,C.useState)(null),[H,xt]=(0,C.useState)(`files`),[St,Ct]=(0,C.useState)(0),[U,W]=(0,C.useState)(ue),[wt,Tt]=(0,C.useState)(0),[Et,G]=(0,C.useState)(0),[Dt,Ot]=(0,C.useState)(0),[K,kt]=(0,C.useState)(null),[At,jt]=(0,C.useState)(null),[Mt,Nt]=(0,C.useState)(0),[q,Pt]=(0,C.useState)(null),[Ft,It]=(0,C.useState)(re.imageStripHeight);(0,C.useEffect)(()=>{ne().then(Pt,()=>Pt(null))},[]),(0,C.useEffect)(()=>{c?pt(c):oe().then(pt,()=>pt([]))},[c]),(0,C.useEffect)(()=>{ie().then(ht,()=>ht([])),ce().then(_t,()=>_t([]))},[]),(0,C.useEffect)(()=>{let e=!0;return ut(!0),ft(null),N(new Set),d||V(b?``:m(k)),le(k||void 0,!1).then(t=>{e&&(ct(t),A(t.path),d||V(b?``:m(t.path)),ut(!1))},t=>{e&&(ft(t instanceof Error?t.message:String(t)),ut(!1))}),()=>{e=!1}},[k,St,b]),(0,C.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),W(e=>({...e,open:!0})),Tt(e=>e+1);return}if(e.key===`Escape`){U.open?(W(e=>({...e,open:!1,query:``})),G(0)):g();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Y();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Lt();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),W(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),Tt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Qt()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,C.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Y()):(e.button===4||e.button===9)&&(e.preventDefault(),Lt())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let J=e=>{let t=e.trim();t.length!==0&&f(t)!==f(k)&&(I(e=>[...e,k]),R([]),xt(`files`),A(t))},Y=()=>{let e=F.at(-1);e!==void 0&&(I(e=>e.slice(0,-1)),R(e=>[k,...e]),A(e))},Lt=()=>{let e=L[0];e!==void 0&&(R(e=>e.slice(1)),I(e=>[...e,k]),A(e))},Rt=(e,t)=>{if(e===`back`){let e=F[t];if(e===void 0)return;I(F.slice(0,t)),R([...F.slice(t+1),k,...L]),A(e);return}let n=L[t];n!==void 0&&(I([...F,k,...L.slice(0,t)]),R(L.slice(t+1)),A(n))};(0,C.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Y();break;case`forward`:Lt()}})});let X=j?.path??k,zt=j?.parent??(k?ge(k):null);(0,C.useEffect)(()=>{r.available&&X&&r.send({type:`fs.watch`,payload:{paths:[X],owner:`picker`}})},[X]),(0,C.useEffect)(()=>{if(r.available&&X)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&f(t.data.path)===f(X)&&le(X,!1).then(e=>{ct(e);let t=new Set(e.entries.map(e=>e.fullPath));N(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[X]);let Bt=(j?.entries??[]).filter(e=>e.isDirectory||b&&(D.length===0||D.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Vt=j?{...j,entries:Bt}:null,Ht=U.open&&U.query.length>0,Z=(0,C.useMemo)(()=>Ht?Bt.filter(e=>ae(e.name,U)).map(e=>e.fullPath):[],[Ht,Bt,U]);(0,C.useEffect)(()=>{G(0)},[U.query,U.matchCase,U.regex,j?.path]);let Ut=Z.length===0?-1:Math.min(Et,Z.length-1),Wt=(0,C.useMemo)(()=>({...U,currentPath:Ut>=0?Z[Ut]:null}),[U,Ut,Z]),Q=q?.defaultView??re,Gt=pe??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Kt=(me??Q.showImages)&&Gt.mode===`list`,qt=!b||D.length===0,Jt=M.size===1?[...M][0]:null,Yt=Jt!==null&&(j?.entries.find(e=>e.fullPath===Jt)?.isDirectory??!1),Xt=!d&&qt&&(Yt||M.size===0&&vt.trim().length===0),$=vt.trim(),Zt=$.length>0?Ve($)?$:Be(X,$):null,Qt=()=>{if(lt||dt)return;if(d){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){s(y(`the_file_name_is_not_valid`));return}let t=D[0]??ze[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=Ve(e)?e+n:Be(X,e+n);ye([r]).then(e=>e[0]?.exists?bt(r):_([r],O),()=>_([r],O));return}let e=n?[...M]:[...M].slice(0,1);e.length>0?_(e,O):Zt!==null&&$!==m(X)?_([Zt],O):qt&&X&&_([X])},$t=(0,C.useCallback)(e=>{N(new Set(e));let t=e.length===1&&(ge(e[0])!==X||j?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(d&&t)?V(m(e[0])):d||V(e.length===0&&!b?m(X):``)},[X,b,j,d]),en=e=>{e.length!==0&&(d?V(m(e[0])):_(e,O))},tn=e=>{j?.entries.find(t=>t.fullPath===e)?.isDirectory?J(e):se(e)},nn=e=>{j?.entries.find(t=>t.fullPath===e)?.isDirectory?J(e):d?V(m(e)):b&&_([e],O)},rn=e=>V(e),an=async e=>{let t=K;if(kt(null),!t||!X)return;let n=e===null?await xe(X):await be(X,e);n.ok&&n.path!==null&&(W(e=>({...e,open:!1,query:``})),e!==null&&nt(`all`),Ct(e=>e+1),window.setTimeout(()=>{jt(n.path),Nt(e=>e+1)},120))},on=()=>{W(e=>({...e,open:!0})),Tt(e=>e+1)},sn=e=>{G(t=>Z.length===0?0:(t+e+Z.length)%Z.length)},cn=e=>(0,w.jsxs)(Xe,{children:[(0,w.jsxs)(Ze,{children:[(0,w.jsx)(Qe,{children:y(b||d?`file_name`:`folder_3`)}),(0,w.jsx)($e,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Qt())},spellCheck:!1,value:vt}),b&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Qe,{children:y(`files_of_type`)}),(0,w.jsx)(v,{onChange:e=>st(e===`all`||e===`supported`?e:Number(e)),options:S.length>0?[...S.map((e,t)=>({value:String(t),label:at(e)})),{value:`all`,label:`${y(`all_files`)} (*.*)`}]:[...x.length>0?[{value:`supported`,label:`${y(`supported_files`)} (${x.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${y(`all_files`)} (*.*)`}],value:String(E)})]})]}),(0,w.jsxs)(et,{children:[(0,w.jsx)(tt,{onClick:g,type:`button`,children:y(`cancel`)}),(0,w.jsxs)(tt,{$primary:!0,disabled:lt||dt!==null||(d?$.length===0:M.size===0&&$.length===0&&!qt),onClick:Qt,type:`button`,children:[(0,w.jsx)(ke,{size:12}),y(d?`save_as`:Xt?`select_this_folder`:`select_this_file`)]})]}),(0,w.jsx)(l,{confirmLabel:y(`overwrite`),message:y(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>bt(null),onConfirm:()=>{let e=yt;bt(null),e&&_([e],O)},open:yt!==null,title:y(`overwrite`)}),z&&(0,w.jsx)(de,{items:z.direction===`back`?[...F].reverse().map((e,t)=>({label:e,onSelect:()=>{B(null),Rt(`back`,F.length-1-t)}})):L.map((e,t)=>({label:e,onSelect:()=>{B(null),Rt(`forward`,t)}})),onClose:()=>B(null),x:z.x,y:z.y})]}),ln=(0,w.jsxs)(Ue,{$inline:o,role:`dialog`,"aria-modal":!o,children:[!o&&(0,w.jsxs)(We,{children:[(0,w.jsxs)(Ge,{children:[(0,w.jsx)(Me,{size:16}),y(d?`save_as`:b?`choose_a_file`:`choose_a_folder`)]}),(0,w.jsx)(Ke,{onClick:g,title:y(`cancel`),type:`button`,children:(0,w.jsx)(Fe,{size:12})})]}),(0,w.jsxs)(qe,{children:[(0,w.jsx)(Ce,{activeKind:H===`overview`?`home`:H===`gallery`?`gallery`:`files`,currentPath:X,drives:mt,hiddenViews:b?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:P.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>J(e),onOpenView:e=>{e===`home`?(N(new Set),V(b?``:m(X)),xt(`overview`)):e===`gallery`&&b&&(N(new Set),V(``),xt(`gallery`))},places:P,recent:gt,recentLimit:10}),(0,w.jsx)(Je,{children:H===`overview`?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Le,{drives:mt,theme:h,historyVersion:0,homePath:P.find(e=>e.kind===`home`)?.path??``,onOpen:e=>J(e),onPick:b?e=>_([e],O):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:$t,places:P,readOnly:!0,recent:gt,recentLimit:10,visibilityVersion:0}),cn(V)]}):H===`gallery`?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Ie,{onPick:e=>_([e],O),onSelectionChange:$t,showCheckboxes:q?.showCheckboxes??!0,view:{...u,columns:[]}}),cn(V)]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(Ye,{children:[(0,w.jsx)(T,{disabled:F.length===0,onClick:Y,onContextMenu:e=>{if(F.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();B({x:t.left,y:t.bottom+4,direction:`back`})},title:y(`back`),type:`button`,children:(0,w.jsx)(Ne,{})}),(0,w.jsx)(T,{disabled:L.length===0,onClick:Lt,onContextMenu:e=>{if(L.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();B({x:t.left,y:t.bottom+4,direction:`forward`})},title:y(`forward`),type:`button`,children:(0,w.jsx)(Ae,{})}),(0,w.jsx)(T,{disabled:!zt,onClick:()=>zt&&J(zt),title:y(`up_one_level`),type:`button`,children:(0,w.jsx)(Oe,{})}),(0,w.jsx)(Te,{onNavigate:J,path:X}),(0,w.jsx)(T,{onClick:e=>kt({x:e.clientX,y:e.clientY}),title:y(`new_folder_or_file`),type:`button`,children:(0,w.jsx)(je,{})}),(0,w.jsx)(T,{onClick:on,title:y(`search`),type:`button`,children:(0,w.jsx)(Pe,{})}),we.available&&(0,w.jsx)(T,{onClick:e=>we.open(e.clientX,e.clientY),title:y(`selection_menu`),type:`button`,children:(0,w.jsx)(De,{})})]}),U.open&&(0,w.jsx)(Ee,{current:Ut,focusToken:wt,matchCase:U.matchCase,mode:U.mode,onClose:()=>{W(e=>({...e,open:!1,query:``})),G(0)},onMatchCase:()=>W(e=>({...e,matchCase:!e.matchCase})),onMode:()=>W(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>sn(1),onPrevious:()=>sn(-1),onQuery:e=>W(t=>({...t,query:e})),onRegex:()=>W(e=>({...e,regex:!e.regex})),query:U.query,regex:U.regex,total:Z.length,onSelectMatches:()=>Ot(e=>e+1)}),(0,w.jsx)(Se,{allowBackgroundMenu:!0,confirmDelete:q?.confirmDelete??!1,enableShortcuts:!0,error:dt,find:Wt,selectMatchesToken:Dt,imageStripHeight:Ft,loading:lt,listing:Vt,onImageStripHeight:It,onOpen:nn,onOpenExternally:tn,onOpenFile:nn,onSelectEntry:en,onRefresh:()=>Ct(e=>e+1),onSelectionChange:$t,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:q?.openOnSingleClick??!1,refreshToken:St,pendingRename:At,pendingRenameToken:Mt,showCheckboxes:q?.showCheckboxes??!0,showDetails:!1,showImages:Kt,singleSelect:!n,view:Gt}),cn(rn)]})})]}),K&&(0,w.jsx)(ve,{creationOnly:!0,directory:X,menu:{x:K.x,y:K.y,paths:[],background:!0},onClose:()=>kt(null),onCreateFile:b?e=>void an(e):void 0,onCreateFolder:()=>void an(null),shortcuts:_e})]});return o?ln:(0,Re.createPortal)((0,w.jsx)(He,{onPointerDown:e=>{e.target===e.currentTarget&&g()},children:ln}),document.body)}function Be(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Ve(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var He=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${pe}
`,Ue=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:me}
    ${({$inline:e})=>e?``:d}
`,We=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Ge=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Ke=i.button`
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
`,qe=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Je=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Ye=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,T=i.button`
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
`,Xe=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Ze=i.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Qe=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,$e=i.input`
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
`,et=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,tt=i.button`
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
`;function E(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function nt({mode:e,save:t=!1,multiple:n,extensions:i,types:ie,typeIndex:ae=0,initial:oe,initialName:se=``,defaultExtension:ce=``}){let le=te(),ue=o(),[s,de]=(0,C.useState)(null),l=a(p(s?.themeMode)),[u,fe]=(0,C.useState)({}),[pe,me]=(0,C.useState)(null),[d,f]=(0,C.useState)(null),[m,h]=(0,C.useState)(null),ge=(0,C.useRef)(0);(0,C.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,C.useEffect)(()=>(c(e=>new Promise(t=>{h({id:++ge.current,prompt:e,resolve:t})})),()=>c(null)),[]),(0,C.useEffect)(()=>{ne().then(de,()=>void 0)},[]),(0,C.useEffect)(()=>{_(s?.accentColor,s?.secondaryColor,l)},[s?.accentColor,s?.secondaryColor,l]),(0,C.useEffect)(()=>{g(s?.timeFormat,s?.timeFormatPattern),he(s?.relativeTime,s?.relativeTimeWindowMinutes)},[s?.timeFormat,s?.timeFormatPattern,s?.relativeTime,s?.relativeTimeWindowMinutes]);let v=s?.defaultView??re,_e={mode:u.mode??v.mode,iconSize:u.iconSize??v.iconSize,gridSize:u.gridSize??v.gridSize,sort:`name`,sortDescending:!1,columns:pe??v.columns??[`type`,`size`,`modified`]},ve=e=>fe(t=>({...t,...e}));return(0,w.jsxs)(rt,{children:[(0,w.jsxs)(D,{children:[(0,w.jsx)(O,{children:(0,w.jsx)(S,{size:17})}),(0,w.jsx)(it,{...ue,children:le(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,w.jsx)(b,{onChange:ve,onColumns:me,onShowImages:f,showImages:d??v.showImages,view:_e}),(0,w.jsx)(at,{children:(0,w.jsx)(ot,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:le(`cancel`),type:`button`,children:(0,w.jsx)(Fe,{size:12})})})]}),(0,w.jsx)(st,{children:(0,w.jsx)(ze,{extensions:i,types:E(ie),typeIndex:ae,initial:oe,initialName:se,defaultExtension:ce,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:(e,t)=>r.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:d??v.showImages,fileView:_e,theme:l})}),m&&(0,w.jsx)(x,{action:m.prompt.action,delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,w.jsx)(we,{}),(0,w.jsx)(y,{}),(0,w.jsx)(ee,{})]})}var rt=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,D=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,O=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,it=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,at=i.div`
    display: flex;
    flex-shrink: 0;
`,ot=i.button`
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
`,st=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{nt as PickerWindow};