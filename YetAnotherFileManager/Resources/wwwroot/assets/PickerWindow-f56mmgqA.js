import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,i as r,p as i,r as ee,s as a,u as te,v as o}from"./dist-Qlc4nr7c.js";import{d as ne}from"./concepts-DYI9OMpB.js";import{A as re,B as ie,D as ae,G as oe,J as se,K as ce,R as s,T as le,_ as c,a as ue,i as de,k as l,n as fe,o as u,p as pe,u as d,xt as f}from"./selectionMenu-B_JCzuLZ.js";import{C as p,a as m,c as me,d as h,k as g,l as _,r as v,w as he}from"./theme-CNvw-6kp.js";import{B as y,Y as ge,ft as _e,mt as ve,pt as ye,t as be,z as xe}from"./FileList-CpBA0K1f.js";import{c as Se,d as b,f as Ce,g as we,h as Te,l as Ee,o as De,p as x,u as Oe}from"./main-CzuRVpEj.js";import{M as ke,a as Ae,at as je,ct as Me,d as Ne,i as Pe,q as Fe,r as Ie,t as S,y as Le}from"./Icons-C2hg-nwk.js";import{t as Re}from"./GalleryView-D3Z83d1T.js";import{t as ze}from"./OverviewView-DU00m3L9.js";var C=e(o(),1),Be=g(),w=n();function T({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,types:ee,typeIndex:a=0,inline:o=!1,places:u,fileView:pe,showImages:d,save:f=!1,initialName:m=``,defaultExtension:me=``,theme:g,onCancel:_,onSelect:v}){let b=te(),Ce=we(),De=fe(`picker`),x=t===`file`,S=r??[],T=ee??[],rt=me.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[D,it]=(0,C.useState)(()=>{if(T.length===0)return S.length===0?`all`:`supported`;let e=e=>e.length===0?-1:T.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase())));if(a>=2&&a<=T.length)return a-1;let t=e(rt);if(t>=0)return t;let n=m.lastIndexOf(`.`),r=n>0?e([m.slice(n).toLowerCase()]):-1;return r>=0?r:a>=1&&a<=T.length?a-1:0}),at=typeof D==`number`?T[D]??null:null,O=typeof D==`number`?at?.extensions??[]:D===`supported`?S:[],k=typeof D==`number`?D+1:0,ot=e=>T.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),st=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},ct=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:ot(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},lt=e=>{it(e),H(t=>ct(t,typeof e==`number`?T[e]??null:null))},[A,j]=(0,C.useState)(e),[M,ut]=(0,C.useState)(null),[dt,ft]=(0,C.useState)(!0),[pt,mt]=(0,C.useState)(null),[N,P]=(0,C.useState)(()=>new Set),[F,ht]=(0,C.useState)(u??[]),[gt,_t]=(0,C.useState)([]),[vt,yt]=(0,C.useState)([]),[I,L]=(0,C.useState)([]),[R,z]=(0,C.useState)([]),[B,V]=(0,C.useState)(null),[bt,H]=(0,C.useState)(()=>{let e=O[0]??``,t=m.lastIndexOf(`.`);return e.length===0||t<=0?m:ot(m.slice(t).toLowerCase())?m.slice(0,t)+e:m}),[xt,St]=(0,C.useState)(null),[U,Ct]=(0,C.useState)(`files`),[wt,Tt]=(0,C.useState)(0),[W,G]=(0,C.useState)(le),[Et,Dt]=(0,C.useState)(0),[Ot,K]=(0,C.useState)(0),[kt,At]=(0,C.useState)(0),[q,jt]=(0,C.useState)(null),[Mt,Nt]=(0,C.useState)(null),[Pt,Ft]=(0,C.useState)(0),[J,It]=(0,C.useState)(null),[Lt,Rt]=(0,C.useState)(re.imageStripHeight);(0,C.useEffect)(()=>{ne().then(It,()=>It(null))},[]),(0,C.useEffect)(()=>{u?ht(u):oe().then(ht,()=>ht([]))},[u]),(0,C.useEffect)(()=>{ie().then(_t,()=>_t([])),ce().then(yt,()=>yt([]))},[]),(0,C.useEffect)(()=>{let e=!0;return ft(!0),mt(null),P(new Set),f||H(x?``:h(A)),s(A||void 0,!1).then(t=>{e&&(ut(t),j(t.path),f||H(x?``:h(t.path)),ft(!1))},t=>{e&&(mt(t instanceof Error?t.message:String(t)),ft(!1))}),()=>{e=!1}},[A,wt,x]),(0,C.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),G(e=>({...e,open:!0})),Dt(e=>e+1);return}if(e.key===`Escape`){W.open?(G(e=>({...e,open:!1,query:``})),K(0)):_();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),zt();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Bt();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),G(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),Dt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||tn()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,C.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),zt()):(e.button===4||e.button===9)&&(e.preventDefault(),Bt())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Y=e=>{let t=e.trim();t.length!==0&&p(t)!==p(A)&&(L(e=>[...e,A]),z([]),Ct(`files`),j(t))},zt=()=>{let e=I.at(-1);e!==void 0&&(L(e=>e.slice(0,-1)),z(e=>[A,...e]),j(e))},Bt=()=>{let e=R[0];e!==void 0&&(z(e=>e.slice(1)),L(e=>[...e,A]),j(e))},Vt=(e,t)=>{if(e===`back`){let e=I[t];if(e===void 0)return;L(I.slice(0,t)),z([...I.slice(t+1),A,...R]),j(e);return}let n=R[t];n!==void 0&&(L([...I,A,...R.slice(0,t)]),z(R.slice(t+1)),j(n))};(0,C.useEffect)(()=>{if(i.available)return i.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:zt();break;case`forward`:Bt()}})});let X=M?.path??A,Ht=M?.parent??(A?he(A):null);(0,C.useEffect)(()=>{i.available&&X&&i.send({type:`fs.watch`,payload:{paths:[X],owner:`picker`}})},[X]),(0,C.useEffect)(()=>{if(i.available&&X)return i.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&p(t.data.path)===p(X)&&s(X,!1).then(e=>{ut(e);let t=new Set(e.entries.map(e=>e.fullPath));P(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[X]);let Ut=(M?.entries??[]).filter(e=>e.isDirectory||x&&(O.length===0||O.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Wt=M?{...M,entries:Ut}:null,Gt=W.open&&W.query.length>0,Z=(0,C.useMemo)(()=>Gt?Ut.filter(e=>ae(e.name,W)).map(e=>e.fullPath):[],[Gt,Ut,W]);(0,C.useEffect)(()=>{K(0)},[W.query,W.matchCase,W.regex,M?.path]);let Kt=Z.length===0?-1:Math.min(Ot,Z.length-1),qt=(0,C.useMemo)(()=>({...W,currentPath:Kt>=0?Z[Kt]:null}),[W,Kt,Z]),Q=J?.defaultView??re,Jt=pe??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Yt=(d??Q.showImages)&&Jt.mode===`list`,Xt=!x||O.length===0,Zt=N.size===1?[...N][0]:null,Qt=Zt!==null&&(M?.entries.find(e=>e.fullPath===Zt)?.isDirectory??!1),$t=!f&&Xt&&(Qt||N.size===0&&bt.trim().length===0),$=bt.trim(),en=$.length>0?He($)?$:Ve(X,$):null,tn=()=>{if(dt||pt)return;if(f){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){c(b(`the_file_name_is_not_valid`));return}let t=O[0]??rt[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=He(e)?e+n:Ve(X,e+n);_e([r]).then(e=>e[0]?.exists?St(r):v([r],k),()=>v([r],k));return}let e=n?[...N]:[...N].slice(0,1);e.length>0?v(e,k):en!==null&&$!==h(X)?v([en],k):Xt&&X&&v([X])},nn=(0,C.useCallback)(e=>{P(new Set(e));let t=e.length===1&&(he(e[0])!==X||M?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(f&&t)?H(h(e[0])):f||H(e.length===0&&!x?h(X):``)},[X,x,M,f]),rn=e=>{e.length!==0&&(f?H(h(e[0])):v(e,k))},an=e=>{M?.entries.find(t=>t.fullPath===e)?.isDirectory?Y(e):se(e)},on=e=>{M?.entries.find(t=>t.fullPath===e)?.isDirectory?Y(e):f?H(h(e)):x&&v([e],k)},sn=e=>H(e),cn=async e=>{let t=q;if(jt(null),!t||!X)return;let n=e===null?await ve(X):await ye(X,e);n.ok&&n.path!==null&&(G(e=>({...e,open:!1,query:``})),e!==null&&it(`all`),Tt(e=>e+1),window.setTimeout(()=>{Nt(n.path),Ft(e=>e+1)},120))},ln=()=>{G(e=>({...e,open:!0})),Dt(e=>e+1)},un=e=>{K(t=>Z.length===0?0:(t+e+Z.length)%Z.length)},dn=e=>(0,w.jsxs)(Ze,{children:[(0,w.jsxs)(Qe,{children:[(0,w.jsx)($e,{children:b(x||f?`file_name`:`folder_3`)}),(0,w.jsx)(et,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),tn())},spellCheck:!1,value:bt}),x&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)($e,{children:b(`files_of_type`)}),(0,w.jsx)(xe,{onChange:e=>lt(e===`all`||e===`supported`?e:Number(e)),options:T.length>0?[...T.map((e,t)=>({value:String(t),label:st(e)})),{value:`all`,label:`${b(`all_files`)} (*.*)`}]:[...S.length>0?[{value:`supported`,label:`${b(`supported_files`)} (${S.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${b(`all_files`)} (*.*)`}],value:String(D)})]})]}),(0,w.jsxs)(tt,{children:[(0,w.jsx)(nt,{onClick:_,type:`button`,children:b(`cancel`)}),(0,w.jsxs)(nt,{$primary:!0,disabled:dt||pt!==null||(f?$.length===0:N.size===0&&$.length===0&&!Xt),onClick:tn,type:`button`,children:[(0,w.jsx)(Ne,{size:12}),b(f?`save_as`:$t?`select_this_folder`:`select_this_file`)]})]}),(0,w.jsx)(de,{confirmLabel:b(`overwrite`),message:b(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>St(null),onConfirm:()=>{let e=xt;St(null),e&&v([e],k)},open:xt!==null,title:b(`overwrite`)}),B&&(0,w.jsx)(ue,{items:B.direction===`back`?[...I].reverse().map((e,t)=>({label:Ce(e),icon:(0,w.jsx)(Te,{location:e}),tooltip:e,onSelect:()=>{V(null),Vt(`back`,I.length-1-t)}})):R.map((e,t)=>({label:Ce(e),icon:(0,w.jsx)(Te,{location:e}),tooltip:e,onSelect:()=>{V(null),Vt(`forward`,t)}})),onClose:()=>V(null),x:B.x,y:B.y})]}),fn=(0,w.jsxs)(We,{$inline:o,role:`dialog`,"aria-modal":!o,children:[!o&&(0,w.jsxs)(Ge,{children:[(0,w.jsxs)(Ke,{children:[(0,w.jsx)(ke,{size:16}),b(f?`save_as`:x?`choose_a_file`:`choose_a_folder`)]}),(0,w.jsx)(qe,{onClick:_,title:b(`cancel`),type:`button`,children:(0,w.jsx)(Le,{size:12})})]}),(0,w.jsxs)(Je,{children:[(0,w.jsx)(Se,{activeKind:U===`overview`?`home`:U===`gallery`?`gallery`:`files`,currentPath:X,drives:gt,hiddenViews:x?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:F.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Y(e),onOpenView:e=>{e===`home`?(P(new Set),H(x?``:h(X)),Ct(`overview`)):e===`gallery`&&x&&(P(new Set),H(``),Ct(`gallery`))},places:F,recent:vt,recentLimit:10}),(0,w.jsx)(Ye,{children:U===`overview`?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ze,{drives:gt,theme:g,historyVersion:0,homePath:F.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Y(e),onPick:x?e=>v([e],k):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:nn,places:F,readOnly:!0,recent:vt,recentLimit:10,visibilityVersion:0}),dn(H)]}):U===`gallery`?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Re,{onPick:e=>v([e],k),onSelectionChange:nn,showCheckboxes:J?.showCheckboxes??!0,view:{...l,columns:[]}}),dn(H)]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(Xe,{children:[(0,w.jsx)(E,{disabled:I.length===0,onClick:zt,onContextMenu:e=>{if(I.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();V({x:t.left,y:t.bottom+4,direction:`back`})},title:b(`back`),type:`button`,children:(0,w.jsx)(Ie,{})}),(0,w.jsx)(E,{disabled:R.length===0,onClick:Bt,onContextMenu:e=>{if(R.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();V({x:t.left,y:t.bottom+4,direction:`forward`})},title:b(`forward`),type:`button`,children:(0,w.jsx)(Pe,{})}),(0,w.jsx)(E,{disabled:!Ht,onClick:()=>Ht&&Y(Ht),title:b(`up_one_level`),type:`button`,children:(0,w.jsx)(Ae,{})}),(0,w.jsx)(Ee,{onNavigate:Y,path:X}),(0,w.jsx)(E,{onClick:e=>jt({x:e.clientX,y:e.clientY}),title:b(`new_folder_or_file`),type:`button`,children:(0,w.jsx)(je,{})}),(0,w.jsx)(E,{onClick:ln,title:b(`search`),type:`button`,children:(0,w.jsx)(Me,{})}),De.available&&(0,w.jsx)(E,{onClick:e=>De.open(e.clientX,e.clientY),title:b(`selection_menu`),type:`button`,children:(0,w.jsx)(Fe,{})})]}),W.open&&(0,w.jsx)(Oe,{current:Kt,focusToken:Et,matchCase:W.matchCase,mode:W.mode,onClose:()=>{G(e=>({...e,open:!1,query:``})),K(0)},onMatchCase:()=>G(e=>({...e,matchCase:!e.matchCase})),onMode:()=>G(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>un(1),onPrevious:()=>un(-1),onQuery:e=>G(t=>({...t,query:e})),onRegex:()=>G(e=>({...e,regex:!e.regex})),query:W.query,regex:W.regex,total:Z.length,onSelectMatches:()=>At(e=>e+1)}),(0,w.jsx)(be,{allowBackgroundMenu:!0,confirmDelete:J?.confirmDelete??!1,enableShortcuts:!0,error:pt,find:qt,selectMatchesToken:kt,imageStripHeight:Lt,loading:dt,listing:Wt,onImageStripHeight:Rt,onOpen:on,onOpenExternally:an,onOpenFile:on,onSelectEntry:rn,onRefresh:()=>Tt(e=>e+1),onSelectionChange:nn,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:J?.openOnSingleClick??!1,refreshToken:wt,pendingRename:Mt,pendingRenameToken:Pt,showCheckboxes:J?.showCheckboxes??!0,showDetails:!1,showImages:Yt,singleSelect:!n,view:Jt}),dn(sn)]})})]}),q&&(0,w.jsx)(y,{creationOnly:!0,directory:X,menu:{x:q.x,y:q.y,paths:[],background:!0},onClose:()=>jt(null),onCreateFile:x?e=>void cn(e):void 0,onCreateFolder:()=>void cn(null),shortcuts:ge})]});return o?fn:(0,Be.createPortal)((0,w.jsx)(Ue,{onPointerDown:e=>{e.target===e.currentTarget&&_()},children:fn}),document.body)}function Ve(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function He(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ue=t.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${u}
`,We=t.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:pe}
    ${({$inline:e})=>e?``:d}
`,Ge=t.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Ke=t.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,qe=t.button`
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
`,Je=t.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Ye=t.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Xe=t.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,E=t.button`
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
`,Ze=t.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Qe=t.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,$e=t.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,et=t.input`
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
`,tt=t.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,nt=t.button`
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
`;function rt(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function D({mode:e,save:t=!1,multiple:n,extensions:o,types:ie,typeIndex:ae=0,initial:oe,initialName:se=``,defaultExtension:ce=``}){let s=te(),le=a(),[c,ue]=(0,C.useState)(null),de=ee(m(c?.themeMode)),[l,fe]=(0,C.useState)({}),[u,pe]=(0,C.useState)(null),[d,p]=(0,C.useState)(null),[h,g]=(0,C.useState)(null),he=(0,C.useRef)(0);(0,C.useEffect)(()=>{i.send({type:`app.ready`})},[]),(0,C.useEffect)(()=>(f(e=>new Promise(t=>{g({id:++he.current,prompt:e,resolve:t})})),()=>f(null)),[]),(0,C.useEffect)(()=>{ne().then(ue,()=>void 0)},[]),(0,C.useEffect)(()=>{v(c?.accentColor,c?.secondaryColor,de)},[c?.accentColor,c?.secondaryColor,de]),(0,C.useEffect)(()=>{_(c?.timeFormat,c?.timeFormatPattern),me(c?.relativeTime,c?.relativeTimeWindowMinutes)},[c?.timeFormat,c?.timeFormatPattern,c?.relativeTime,c?.relativeTimeWindowMinutes]);let y=c?.defaultView??re,ge={mode:l.mode??y.mode,iconSize:l.iconSize??y.iconSize,gridSize:l.gridSize??y.gridSize,sort:`name`,sortDescending:!1,columns:u??y.columns??[`type`,`size`,`modified`]},_e=e=>fe(t=>({...t,...e}));return(0,w.jsxs)(it,{children:[(0,w.jsxs)(at,{children:[(0,w.jsx)(O,{children:(0,w.jsx)(S,{size:17})}),(0,w.jsx)(k,{...le,children:s(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,w.jsx)(De,{onChange:_e,onColumns:pe,onShowImages:p,showImages:d??y.showImages,view:ge}),(0,w.jsx)(ot,{children:(0,w.jsx)(st,{onClick:()=>i.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:s(`cancel`),type:`button`,children:(0,w.jsx)(Le,{size:12})})})]}),(0,w.jsx)(ct,{children:(0,w.jsx)(T,{extensions:o,types:rt(ie),typeIndex:ae,initial:oe,initialName:se,defaultExtension:ce,inline:!0,mode:e,multiple:n,onCancel:()=>i.send({type:`pick.cancel`}),onSelect:(e,t)=>i.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:d??y.showImages,fileView:ge,theme:de})}),h&&(0,w.jsx)(x,{action:h.prompt.action,delaySeconds:h.prompt.delaySeconds,hits:h.prompt.hits,onCancel:()=>{h.resolve(!1),g(null)},onConfirm:()=>{h.resolve(!0),g(null)},permanent:h.prompt.permanent},h.id),(0,w.jsx)(Ce,{}),(0,w.jsx)(b,{}),(0,w.jsx)(r,{})]})}var it=t.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,at=t.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,O=t.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,k=t.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ot=t.div`
    display: flex;
    flex-shrink: 0;
`,st=t.button`
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
`,ct=t.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{D as PickerWindow};