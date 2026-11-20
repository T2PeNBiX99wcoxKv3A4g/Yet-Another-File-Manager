import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as ee,r as a,s as o,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-69Rb8xko.js";import{A as re,B as ie,D as ae,G as oe,J as se,K as ce,R as s,T as le,_ as c,a as ue,bt as l,i as u,k as d,n as de,o as fe,p as pe,u as f}from"./selectionMenu-3N_AfRQo.js";import{C as p,a as m,c as me,d as h,k as g,l as _,r as v,w as he}from"./theme-Ocob2ChL.js";import{B as y,J as ge,V as _e,dt as ve,ft as ye,pt as be,t as xe}from"./FileList-wM4BPYTZ.js";import{c as Se,d as b,f as Ce,l as we,o as x,p as S,u as Te}from"./main-CbS_8gW_.js";import{K as Ee,a as De,d as Oe,i as ke,it as Ae,j as je,r as Me,st as Ne,t as C,v as Pe}from"./Icons-NY0trHLk.js";import{t as Fe}from"./GalleryView-DrGx51u8.js";import{t as Ie}from"./OverviewView-Cc872J0X.js";var w=e(t(),1),Le=g(),T=n();function Re({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,types:ee,typeIndex:a=0,inline:o=!1,places:l,fileView:fe,showImages:pe,save:f=!1,initialName:m=``,defaultExtension:me=``,theme:g,onCancel:_,onSelect:v}){let b=te(),Ce=de(`picker`),x=t===`file`,S=i??[],C=ee??[],Re=me.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[D,tt]=(0,w.useState)(()=>{if(C.length===0)return S.length===0?`all`:`supported`;let e=e=>e.length===0?-1:C.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase())));if(a>=2&&a<=C.length)return a-1;let t=e(Re);if(t>=0)return t;let n=m.lastIndexOf(`.`),r=n>0?e([m.slice(n).toLowerCase()]):-1;return r>=0?r:a>=1&&a<=C.length?a-1:0}),nt=typeof D==`number`?C[D]??null:null,O=typeof D==`number`?nt?.extensions??[]:D===`supported`?S:[],k=typeof D==`number`?D+1:0,rt=e=>C.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),it=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},at=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:rt(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},ot=e=>{tt(e),H(t=>at(t,typeof e==`number`?C[e]??null:null))},[A,j]=(0,w.useState)(e),[M,st]=(0,w.useState)(null),[ct,lt]=(0,w.useState)(!0),[ut,dt]=(0,w.useState)(null),[N,P]=(0,w.useState)(()=>new Set),[F,ft]=(0,w.useState)(l??[]),[pt,mt]=(0,w.useState)([]),[ht,gt]=(0,w.useState)([]),[I,L]=(0,w.useState)([]),[R,z]=(0,w.useState)([]),[B,V]=(0,w.useState)(null),[_t,H]=(0,w.useState)(()=>{let e=O[0]??``,t=m.lastIndexOf(`.`);return e.length===0||t<=0?m:rt(m.slice(t).toLowerCase())?m.slice(0,t)+e:m}),[vt,yt]=(0,w.useState)(null),[U,bt]=(0,w.useState)(`files`),[xt,St]=(0,w.useState)(0),[W,G]=(0,w.useState)(le),[Ct,wt]=(0,w.useState)(0),[Tt,K]=(0,w.useState)(0),[Et,Dt]=(0,w.useState)(0),[q,Ot]=(0,w.useState)(null),[kt,At]=(0,w.useState)(null),[jt,Mt]=(0,w.useState)(0),[J,Nt]=(0,w.useState)(null),[Pt,Ft]=(0,w.useState)(re.imageStripHeight);(0,w.useEffect)(()=>{ne().then(Nt,()=>Nt(null))},[]),(0,w.useEffect)(()=>{l?ft(l):oe().then(ft,()=>ft([]))},[l]),(0,w.useEffect)(()=>{ie().then(mt,()=>mt([])),ce().then(gt,()=>gt([]))},[]),(0,w.useEffect)(()=>{let e=!0;return lt(!0),dt(null),P(new Set),f||H(x?``:h(A)),s(A||void 0,!1).then(t=>{e&&(st(t),j(t.path),f||H(x?``:h(t.path)),lt(!1))},t=>{e&&(dt(t instanceof Error?t.message:String(t)),lt(!1))}),()=>{e=!1}},[A,xt,x]),(0,w.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),G(e=>({...e,open:!0})),wt(e=>e+1);return}if(e.key===`Escape`){W.open?(G(e=>({...e,open:!1,query:``})),K(0)):_();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),It();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Lt();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),G(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),wt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Qt()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,w.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),It()):(e.button===4||e.button===9)&&(e.preventDefault(),Lt())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Y=e=>{let t=e.trim();t.length!==0&&p(t)!==p(A)&&(L(e=>[...e,A]),z([]),bt(`files`),j(t))},It=()=>{let e=I.at(-1);e!==void 0&&(L(e=>e.slice(0,-1)),z(e=>[A,...e]),j(e))},Lt=()=>{let e=R[0];e!==void 0&&(z(e=>e.slice(1)),L(e=>[...e,A]),j(e))},Rt=(e,t)=>{if(e===`back`){let e=I[t];if(e===void 0)return;L(I.slice(0,t)),z([...I.slice(t+1),A,...R]),j(e);return}let n=R[t];n!==void 0&&(L([...I,A,...R.slice(0,t)]),z(R.slice(t+1)),j(n))};(0,w.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:It();break;case`forward`:Lt()}})});let X=M?.path??A,zt=M?.parent??(A?he(A):null);(0,w.useEffect)(()=>{r.available&&X&&r.send({type:`fs.watch`,payload:{paths:[X],owner:`picker`}})},[X]),(0,w.useEffect)(()=>{if(r.available&&X)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&p(t.data.path)===p(X)&&s(X,!1).then(e=>{st(e);let t=new Set(e.entries.map(e=>e.fullPath));P(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[X]);let Bt=(M?.entries??[]).filter(e=>e.isDirectory||x&&(O.length===0||O.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Vt=M?{...M,entries:Bt}:null,Ht=W.open&&W.query.length>0,Z=(0,w.useMemo)(()=>Ht?Bt.filter(e=>ae(e.name,W)).map(e=>e.fullPath):[],[Ht,Bt,W]);(0,w.useEffect)(()=>{K(0)},[W.query,W.matchCase,W.regex,M?.path]);let Ut=Z.length===0?-1:Math.min(Tt,Z.length-1),Wt=(0,w.useMemo)(()=>({...W,currentPath:Ut>=0?Z[Ut]:null}),[W,Ut,Z]),Q=J?.defaultView??re,Gt=fe??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Kt=(pe??Q.showImages)&&Gt.mode===`list`,qt=!x||O.length===0,Jt=N.size===1?[...N][0]:null,Yt=Jt!==null&&(M?.entries.find(e=>e.fullPath===Jt)?.isDirectory??!1),Xt=!f&&qt&&(Yt||N.size===0&&_t.trim().length===0),$=_t.trim(),Zt=$.length>0?Be($)?$:ze(X,$):null,Qt=()=>{if(ct||ut)return;if(f){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){c(b(`the_file_name_is_not_valid`));return}let t=O[0]??Re[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=Be(e)?e+n:ze(X,e+n);ve([r]).then(e=>e[0]?.exists?yt(r):v([r],k),()=>v([r],k));return}let e=n?[...N]:[...N].slice(0,1);e.length>0?v(e,k):Zt!==null&&$!==h(X)?v([Zt],k):qt&&X&&v([X])},$t=(0,w.useCallback)(e=>{P(new Set(e));let t=e.length===1&&(he(e[0])!==X||M?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(f&&t)?H(h(e[0])):f||H(e.length===0&&!x?h(X):``)},[X,x,M,f]),en=e=>{e.length!==0&&(f?H(h(e[0])):v(e,k))},tn=e=>{M?.entries.find(t=>t.fullPath===e)?.isDirectory?Y(e):se(e)},nn=e=>{M?.entries.find(t=>t.fullPath===e)?.isDirectory?Y(e):f?H(h(e)):x&&v([e],k)},rn=e=>H(e),an=async e=>{let t=q;if(Ot(null),!t||!X)return;let n=e===null?await be(X):await ye(X,e);n.ok&&n.path!==null&&(G(e=>({...e,open:!1,query:``})),e!==null&&tt(`all`),St(e=>e+1),window.setTimeout(()=>{At(n.path),Mt(e=>e+1)},120))},on=()=>{G(e=>({...e,open:!0})),wt(e=>e+1)},sn=e=>{K(t=>Z.length===0?0:(t+e+Z.length)%Z.length)},cn=e=>(0,T.jsxs)(Ye,{children:[(0,T.jsxs)(Xe,{children:[(0,T.jsx)(Ze,{children:b(x||f?`file_name`:`folder_3`)}),(0,T.jsx)(Qe,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Qt())},spellCheck:!1,value:_t}),x&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ze,{children:b(`files_of_type`)}),(0,T.jsx)(y,{onChange:e=>ot(e===`all`||e===`supported`?e:Number(e)),options:C.length>0?[...C.map((e,t)=>({value:String(t),label:it(e)})),{value:`all`,label:`${b(`all_files`)} (*.*)`}]:[...S.length>0?[{value:`supported`,label:`${b(`supported_files`)} (${S.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${b(`all_files`)} (*.*)`}],value:String(D)})]})]}),(0,T.jsxs)($e,{children:[(0,T.jsx)(et,{onClick:_,type:`button`,children:b(`cancel`)}),(0,T.jsxs)(et,{$primary:!0,disabled:ct||ut!==null||(f?$.length===0:N.size===0&&$.length===0&&!qt),onClick:Qt,type:`button`,children:[(0,T.jsx)(Oe,{size:12}),b(f?`save_as`:Xt?`select_this_folder`:`select_this_file`)]})]}),(0,T.jsx)(u,{confirmLabel:b(`overwrite`),message:b(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>yt(null),onConfirm:()=>{let e=vt;yt(null),e&&v([e],k)},open:vt!==null,title:b(`overwrite`)}),B&&(0,T.jsx)(ue,{items:B.direction===`back`?[...I].reverse().map((e,t)=>({label:e,onSelect:()=>{V(null),Rt(`back`,I.length-1-t)}})):R.map((e,t)=>({label:e,onSelect:()=>{V(null),Rt(`forward`,t)}})),onClose:()=>V(null),x:B.x,y:B.y})]}),ln=(0,T.jsxs)(He,{$inline:o,role:`dialog`,"aria-modal":!o,children:[!o&&(0,T.jsxs)(Ue,{children:[(0,T.jsxs)(We,{children:[(0,T.jsx)(je,{size:16}),b(f?`save_as`:x?`choose_a_file`:`choose_a_folder`)]}),(0,T.jsx)(Ge,{onClick:_,title:b(`cancel`),type:`button`,children:(0,T.jsx)(Pe,{size:12})})]}),(0,T.jsxs)(Ke,{children:[(0,T.jsx)(Se,{activeKind:U===`overview`?`home`:U===`gallery`?`gallery`:`files`,currentPath:X,drives:pt,hiddenViews:x?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:F.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Y(e),onOpenView:e=>{e===`home`?(P(new Set),H(x?``:h(X)),bt(`overview`)):e===`gallery`&&x&&(P(new Set),H(``),bt(`gallery`))},places:F,recent:ht,recentLimit:10}),(0,T.jsx)(qe,{children:U===`overview`?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ie,{drives:pt,theme:g,historyVersion:0,homePath:F.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Y(e),onPick:x?e=>v([e],k):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:$t,places:F,readOnly:!0,recent:ht,recentLimit:10,visibilityVersion:0}),cn(H)]}):U===`gallery`?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Fe,{onPick:e=>v([e],k),onSelectionChange:$t,showCheckboxes:J?.showCheckboxes??!0,view:{...d,columns:[]}}),cn(H)]}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(Je,{children:[(0,T.jsx)(E,{disabled:I.length===0,onClick:It,onContextMenu:e=>{if(I.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();V({x:t.left,y:t.bottom+4,direction:`back`})},title:b(`back`),type:`button`,children:(0,T.jsx)(Me,{})}),(0,T.jsx)(E,{disabled:R.length===0,onClick:Lt,onContextMenu:e=>{if(R.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();V({x:t.left,y:t.bottom+4,direction:`forward`})},title:b(`forward`),type:`button`,children:(0,T.jsx)(ke,{})}),(0,T.jsx)(E,{disabled:!zt,onClick:()=>zt&&Y(zt),title:b(`up_one_level`),type:`button`,children:(0,T.jsx)(De,{})}),(0,T.jsx)(we,{onNavigate:Y,path:X}),(0,T.jsx)(E,{onClick:e=>Ot({x:e.clientX,y:e.clientY}),title:b(`new_folder_or_file`),type:`button`,children:(0,T.jsx)(Ae,{})}),(0,T.jsx)(E,{onClick:on,title:b(`search`),type:`button`,children:(0,T.jsx)(Ne,{})}),Ce.available&&(0,T.jsx)(E,{onClick:e=>Ce.open(e.clientX,e.clientY),title:b(`selection_menu`),type:`button`,children:(0,T.jsx)(Ee,{})})]}),W.open&&(0,T.jsx)(Te,{current:Ut,focusToken:Ct,matchCase:W.matchCase,mode:W.mode,onClose:()=>{G(e=>({...e,open:!1,query:``})),K(0)},onMatchCase:()=>G(e=>({...e,matchCase:!e.matchCase})),onMode:()=>G(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>sn(1),onPrevious:()=>sn(-1),onQuery:e=>G(t=>({...t,query:e})),onRegex:()=>G(e=>({...e,regex:!e.regex})),query:W.query,regex:W.regex,total:Z.length,onSelectMatches:()=>Dt(e=>e+1)}),(0,T.jsx)(xe,{allowBackgroundMenu:!0,confirmDelete:J?.confirmDelete??!1,enableShortcuts:!0,error:ut,find:Wt,selectMatchesToken:Et,imageStripHeight:Pt,loading:ct,listing:Vt,onImageStripHeight:Ft,onOpen:nn,onOpenExternally:tn,onOpenFile:nn,onSelectEntry:en,onRefresh:()=>St(e=>e+1),onSelectionChange:$t,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:J?.openOnSingleClick??!1,refreshToken:xt,pendingRename:kt,pendingRenameToken:jt,showCheckboxes:J?.showCheckboxes??!0,showDetails:!1,showImages:Kt,singleSelect:!n,view:Gt}),cn(rn)]})})]}),q&&(0,T.jsx)(_e,{creationOnly:!0,directory:X,menu:{x:q.x,y:q.y,paths:[],background:!0},onClose:()=>Ot(null),onCreateFile:x?e=>void an(e):void 0,onCreateFolder:()=>void an(null),shortcuts:ge})]});return o?ln:(0,Le.createPortal)((0,T.jsx)(Ve,{onPointerDown:e=>{e.target===e.currentTarget&&_()},children:ln}),document.body)}function ze(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Be(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ve=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${fe}
`,He=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:pe}
    ${({$inline:e})=>e?``:f}
`,Ue=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,We=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Ge=i.button`
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
`,Ke=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,qe=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Je=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,E=i.button`
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
`,Ye=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Xe=i.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Ze=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Qe=i.input`
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
`,$e=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,et=i.button`
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
`;function D(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function tt({mode:e,save:t=!1,multiple:n,extensions:i,types:ie,typeIndex:ae=0,initial:oe,initialName:se=``,defaultExtension:ce=``}){let s=te(),le=o(),[c,ue]=(0,w.useState)(null),u=a(m(c?.themeMode)),[d,de]=(0,w.useState)({}),[fe,pe]=(0,w.useState)(null),[f,p]=(0,w.useState)(null),[h,g]=(0,w.useState)(null),he=(0,w.useRef)(0);(0,w.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,w.useEffect)(()=>(l(e=>new Promise(t=>{g({id:++he.current,prompt:e,resolve:t})})),()=>l(null)),[]),(0,w.useEffect)(()=>{ne().then(ue,()=>void 0)},[]),(0,w.useEffect)(()=>{v(c?.accentColor,c?.secondaryColor,u)},[c?.accentColor,c?.secondaryColor,u]),(0,w.useEffect)(()=>{_(c?.timeFormat,c?.timeFormatPattern),me(c?.relativeTime,c?.relativeTimeWindowMinutes)},[c?.timeFormat,c?.timeFormatPattern,c?.relativeTime,c?.relativeTimeWindowMinutes]);let y=c?.defaultView??re,ge={mode:d.mode??y.mode,iconSize:d.iconSize??y.iconSize,gridSize:d.gridSize??y.gridSize,sort:`name`,sortDescending:!1,columns:fe??y.columns??[`type`,`size`,`modified`]},_e=e=>de(t=>({...t,...e}));return(0,T.jsxs)(nt,{children:[(0,T.jsxs)(O,{children:[(0,T.jsx)(k,{children:(0,T.jsx)(C,{size:17})}),(0,T.jsx)(rt,{...le,children:s(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,T.jsx)(x,{onChange:_e,onColumns:pe,onShowImages:p,showImages:f??y.showImages,view:ge}),(0,T.jsx)(it,{children:(0,T.jsx)(at,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:s(`cancel`),type:`button`,children:(0,T.jsx)(Pe,{size:12})})})]}),(0,T.jsx)(ot,{children:(0,T.jsx)(Re,{extensions:i,types:D(ie),typeIndex:ae,initial:oe,initialName:se,defaultExtension:ce,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:(e,t)=>r.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:f??y.showImages,fileView:ge,theme:u})}),h&&(0,T.jsx)(S,{action:h.prompt.action,delaySeconds:h.prompt.delaySeconds,hits:h.prompt.hits,onCancel:()=>{h.resolve(!1),g(null)},onConfirm:()=>{h.resolve(!0),g(null)},permanent:h.prompt.permanent},h.id),(0,T.jsx)(Ce,{}),(0,T.jsx)(b,{}),(0,T.jsx)(ee,{})]})}var nt=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,O=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,k=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,rt=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,it=i.div`
    display: flex;
    flex-shrink: 0;
`,at=i.button`
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
`,ot=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{tt as PickerWindow};