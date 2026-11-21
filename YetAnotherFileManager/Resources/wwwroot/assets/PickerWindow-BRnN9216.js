import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as ee,r as a,s as o,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-69Rb8xko.js";import{A as re,B as ie,D as ae,G as oe,J as se,K as ce,R as s,T as le,_ as c,a as ue,bt as l,i as de,k as fe,n as pe,o as me,p as he,u}from"./selectionMenu--w-X4gsr.js";import{C as d,a as f,c as ge,d as p,k as m,l as h,r as g,w as _e}from"./theme-Ocob2ChL.js";import{B as _,J as ve,V as ye,dt as be,ft as xe,pt as Se,t as Ce}from"./FileList-CYKTXG7c.js";import{c as we,d as v,f as Te,g as Ee,h as De,l as Oe,o as ke,p as y,u as Ae}from"./main-DxktN9Tm.js";import{M as je,a as Me,at as Ne,ct as Pe,d as Fe,i as Ie,q as Le,r as Re,t as b,y as ze}from"./Icons-BCGG7XUW.js";import{t as Be}from"./GalleryView-DwzsX9AN.js";import{t as Ve}from"./OverviewView-CrCYqGhT.js";var x=e(t(),1),He=m(),S=n();function C({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,types:ee,typeIndex:a=0,inline:o=!1,places:l,fileView:me,showImages:he,save:u=!1,initialName:f=``,defaultExtension:ge=``,theme:m,onCancel:h,onSelect:g}){let v=te(),Te=Ee(),ke=pe(`picker`),y=t===`file`,b=i??[],C=ee??[],at=ge.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[T,ot]=(0,x.useState)(()=>{if(C.length===0)return b.length===0?`all`:`supported`;let e=e=>e.length===0?-1:C.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase())));if(a>=2&&a<=C.length)return a-1;let t=e(at);if(t>=0)return t;let n=f.lastIndexOf(`.`),r=n>0?e([f.slice(n).toLowerCase()]):-1;return r>=0?r:a>=1&&a<=C.length?a-1:0}),st=typeof T==`number`?C[T]??null:null,E=typeof T==`number`?st?.extensions??[]:T===`supported`?b:[],D=typeof T==`number`?T+1:0,ct=e=>C.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),lt=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},ut=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:ct(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},dt=e=>{ot(e),B(t=>ut(t,typeof e==`number`?C[e]??null:null))},[O,k]=(0,x.useState)(e),[A,ft]=(0,x.useState)(null),[pt,mt]=(0,x.useState)(!0),[ht,gt]=(0,x.useState)(null),[j,M]=(0,x.useState)(()=>new Set),[N,_t]=(0,x.useState)(l??[]),[vt,yt]=(0,x.useState)([]),[bt,xt]=(0,x.useState)([]),[P,F]=(0,x.useState)([]),[I,L]=(0,x.useState)([]),[R,z]=(0,x.useState)(null),[St,B]=(0,x.useState)(()=>{let e=E[0]??``,t=f.lastIndexOf(`.`);return e.length===0||t<=0?f:ct(f.slice(t).toLowerCase())?f.slice(0,t)+e:f}),[Ct,wt]=(0,x.useState)(null),[V,Tt]=(0,x.useState)(`files`),[Et,Dt]=(0,x.useState)(0),[H,U]=(0,x.useState)(le),[Ot,kt]=(0,x.useState)(0),[At,W]=(0,x.useState)(0),[jt,Mt]=(0,x.useState)(0),[G,Nt]=(0,x.useState)(null),[Pt,Ft]=(0,x.useState)(null),[It,Lt]=(0,x.useState)(0),[K,Rt]=(0,x.useState)(null),[zt,Bt]=(0,x.useState)(re.imageStripHeight);(0,x.useEffect)(()=>{ne().then(Rt,()=>Rt(null))},[]),(0,x.useEffect)(()=>{l?_t(l):oe().then(_t,()=>_t([]))},[l]),(0,x.useEffect)(()=>{ie().then(yt,()=>yt([])),ce().then(xt,()=>xt([]))},[]),(0,x.useEffect)(()=>{let e=!0;return mt(!0),gt(null),M(new Set),u||B(y?``:p(O)),s(O||void 0,!1).then(t=>{e&&(ft(t),k(t.path),u||B(y?``:p(t.path)),mt(!1))},t=>{e&&(gt(t instanceof Error?t.message:String(t)),mt(!1))}),()=>{e=!1}},[O,Et,y]),(0,x.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),U(e=>({...e,open:!0})),kt(e=>e+1);return}if(e.key===`Escape`){H.open?(U(e=>({...e,open:!1,query:``})),W(0)):h();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),J();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Y();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),U(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),kt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||tn()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,x.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),J()):(e.button===4||e.button===9)&&(e.preventDefault(),Y())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let q=e=>{let t=e.trim();t.length!==0&&d(t)!==d(O)&&(F(e=>[...e,O]),L([]),Tt(`files`),k(t))},J=()=>{let e=P.at(-1);e!==void 0&&(F(e=>e.slice(0,-1)),L(e=>[O,...e]),k(e))},Y=()=>{let e=I[0];e!==void 0&&(L(e=>e.slice(1)),F(e=>[...e,O]),k(e))},Vt=(e,t)=>{if(e===`back`){let e=P[t];if(e===void 0)return;F(P.slice(0,t)),L([...P.slice(t+1),O,...I]),k(e);return}let n=I[t];n!==void 0&&(F([...P,O,...I.slice(0,t)]),L(I.slice(t+1)),k(n))};(0,x.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:J();break;case`forward`:Y()}})});let X=A?.path??O,Ht=A?.parent??(O?_e(O):null);(0,x.useEffect)(()=>{r.available&&X&&r.send({type:`fs.watch`,payload:{paths:[X],owner:`picker`}})},[X]),(0,x.useEffect)(()=>{if(r.available&&X)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&d(t.data.path)===d(X)&&s(X,!1).then(e=>{ft(e);let t=new Set(e.entries.map(e=>e.fullPath));M(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[X]);let Ut=(A?.entries??[]).filter(e=>e.isDirectory||y&&(E.length===0||E.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Wt=A?{...A,entries:Ut}:null,Gt=H.open&&H.query.length>0,Z=(0,x.useMemo)(()=>Gt?Ut.filter(e=>ae(e.name,H)).map(e=>e.fullPath):[],[Gt,Ut,H]);(0,x.useEffect)(()=>{W(0)},[H.query,H.matchCase,H.regex,A?.path]);let Kt=Z.length===0?-1:Math.min(At,Z.length-1),qt=(0,x.useMemo)(()=>({...H,currentPath:Kt>=0?Z[Kt]:null}),[H,Kt,Z]),Q=K?.defaultView??re,Jt=me??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Yt=(he??Q.showImages)&&Jt.mode===`list`,Xt=!y||E.length===0,Zt=j.size===1?[...j][0]:null,Qt=Zt!==null&&(A?.entries.find(e=>e.fullPath===Zt)?.isDirectory??!1),$t=!u&&Xt&&(Qt||j.size===0&&St.trim().length===0),$=St.trim(),en=$.length>0?We($)?$:Ue(X,$):null,tn=()=>{if(pt||ht)return;if(u){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){c(v(`the_file_name_is_not_valid`));return}let t=E[0]??at[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=We(e)?e+n:Ue(X,e+n);be([r]).then(e=>e[0]?.exists?wt(r):g([r],D),()=>g([r],D));return}let e=n?[...j]:[...j].slice(0,1);e.length>0?g(e,D):en!==null&&$!==p(X)?g([en],D):Xt&&X&&g([X])},nn=(0,x.useCallback)(e=>{M(new Set(e));let t=e.length===1&&(_e(e[0])!==X||A?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(u&&t)?B(p(e[0])):u||B(e.length===0&&!y?p(X):``)},[X,y,A,u]),rn=e=>{e.length!==0&&(u?B(p(e[0])):g(e,D))},an=e=>{A?.entries.find(t=>t.fullPath===e)?.isDirectory?q(e):se(e)},on=e=>{A?.entries.find(t=>t.fullPath===e)?.isDirectory?q(e):u?B(p(e)):y&&g([e],D)},sn=e=>B(e),cn=async e=>{let t=G;if(Nt(null),!t||!X)return;let n=e===null?await Se(X):await xe(X,e);n.ok&&n.path!==null&&(U(e=>({...e,open:!1,query:``})),e!==null&&ot(`all`),Dt(e=>e+1),window.setTimeout(()=>{Ft(n.path),Lt(e=>e+1)},120))},ln=()=>{U(e=>({...e,open:!0})),kt(e=>e+1)},un=e=>{W(t=>Z.length===0?0:(t+e+Z.length)%Z.length)},dn=e=>(0,S.jsxs)($e,{children:[(0,S.jsxs)(et,{children:[(0,S.jsx)(tt,{children:v(y||u?`file_name`:`folder_3`)}),(0,S.jsx)(nt,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),tn())},spellCheck:!1,value:St}),y&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(tt,{children:v(`files_of_type`)}),(0,S.jsx)(_,{onChange:e=>dt(e===`all`||e===`supported`?e:Number(e)),options:C.length>0?[...C.map((e,t)=>({value:String(t),label:lt(e)})),{value:`all`,label:`${v(`all_files`)} (*.*)`}]:[...b.length>0?[{value:`supported`,label:`${v(`supported_files`)} (${b.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${v(`all_files`)} (*.*)`}],value:String(T)})]})]}),(0,S.jsxs)(rt,{children:[(0,S.jsx)(it,{onClick:h,type:`button`,children:v(`cancel`)}),(0,S.jsxs)(it,{$primary:!0,disabled:pt||ht!==null||(u?$.length===0:j.size===0&&$.length===0&&!Xt),onClick:tn,type:`button`,children:[(0,S.jsx)(Fe,{size:12}),v(u?`save_as`:$t?`select_this_folder`:`select_this_file`)]})]}),(0,S.jsx)(de,{confirmLabel:v(`overwrite`),message:v(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>wt(null),onConfirm:()=>{let e=Ct;wt(null),e&&g([e],D)},open:Ct!==null,title:v(`overwrite`)}),R&&(0,S.jsx)(ue,{items:R.direction===`back`?[...P].reverse().map((e,t)=>({label:Te(e),icon:(0,S.jsx)(De,{location:e}),tooltip:e,onSelect:()=>{z(null),Vt(`back`,P.length-1-t)}})):I.map((e,t)=>({label:Te(e),icon:(0,S.jsx)(De,{location:e}),tooltip:e,onSelect:()=>{z(null),Vt(`forward`,t)}})),onClose:()=>z(null),x:R.x,y:R.y})]}),fn=(0,S.jsxs)(Ke,{$inline:o,role:`dialog`,"aria-modal":!o,children:[!o&&(0,S.jsxs)(qe,{children:[(0,S.jsxs)(Je,{children:[(0,S.jsx)(je,{size:16}),v(u?`save_as`:y?`choose_a_file`:`choose_a_folder`)]}),(0,S.jsx)(Ye,{onClick:h,title:v(`cancel`),type:`button`,children:(0,S.jsx)(ze,{size:12})})]}),(0,S.jsxs)(Xe,{children:[(0,S.jsx)(we,{activeKind:V===`overview`?`home`:V===`gallery`?`gallery`:`files`,currentPath:X,drives:vt,hiddenViews:y?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:N.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>q(e),onOpenView:e=>{e===`home`?(M(new Set),B(y?``:p(X)),Tt(`overview`)):e===`gallery`&&y&&(M(new Set),B(``),Tt(`gallery`))},places:N,recent:bt,recentLimit:10}),(0,S.jsx)(Ze,{children:V===`overview`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Ve,{drives:vt,theme:m,historyVersion:0,homePath:N.find(e=>e.kind===`home`)?.path??``,onOpen:e=>q(e),onPick:y?e=>g([e],D):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:nn,places:N,readOnly:!0,recent:bt,recentLimit:10,visibilityVersion:0}),dn(B)]}):V===`gallery`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Be,{onPick:e=>g([e],D),onSelectionChange:nn,showCheckboxes:K?.showCheckboxes??!0,view:{...fe,columns:[]}}),dn(B)]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Qe,{children:[(0,S.jsx)(w,{disabled:P.length===0,onClick:J,onContextMenu:e=>{if(P.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();z({x:t.left,y:t.bottom+4,direction:`back`})},title:v(`back`),type:`button`,children:(0,S.jsx)(Re,{})}),(0,S.jsx)(w,{disabled:I.length===0,onClick:Y,onContextMenu:e=>{if(I.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();z({x:t.left,y:t.bottom+4,direction:`forward`})},title:v(`forward`),type:`button`,children:(0,S.jsx)(Ie,{})}),(0,S.jsx)(w,{disabled:!Ht,onClick:()=>Ht&&q(Ht),title:v(`up_one_level`),type:`button`,children:(0,S.jsx)(Me,{})}),(0,S.jsx)(Oe,{onNavigate:q,path:X}),(0,S.jsx)(w,{onClick:e=>Nt({x:e.clientX,y:e.clientY}),title:v(`new_folder_or_file`),type:`button`,children:(0,S.jsx)(Ne,{})}),(0,S.jsx)(w,{onClick:ln,title:v(`search`),type:`button`,children:(0,S.jsx)(Pe,{})}),ke.available&&(0,S.jsx)(w,{onClick:e=>ke.open(e.clientX,e.clientY),title:v(`selection_menu`),type:`button`,children:(0,S.jsx)(Le,{})})]}),H.open&&(0,S.jsx)(Ae,{current:Kt,focusToken:Ot,matchCase:H.matchCase,mode:H.mode,onClose:()=>{U(e=>({...e,open:!1,query:``})),W(0)},onMatchCase:()=>U(e=>({...e,matchCase:!e.matchCase})),onMode:()=>U(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>un(1),onPrevious:()=>un(-1),onQuery:e=>U(t=>({...t,query:e})),onRegex:()=>U(e=>({...e,regex:!e.regex})),query:H.query,regex:H.regex,total:Z.length,onSelectMatches:()=>Mt(e=>e+1)}),(0,S.jsx)(Ce,{allowBackgroundMenu:!0,confirmDelete:K?.confirmDelete??!1,enableShortcuts:!0,error:ht,find:qt,selectMatchesToken:jt,imageStripHeight:zt,loading:pt,listing:Wt,onImageStripHeight:Bt,onOpen:on,onOpenExternally:an,onOpenFile:on,onSelectEntry:rn,onRefresh:()=>Dt(e=>e+1),onSelectionChange:nn,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:K?.openOnSingleClick??!1,refreshToken:Et,pendingRename:Pt,pendingRenameToken:It,showCheckboxes:K?.showCheckboxes??!0,showDetails:!1,showImages:Yt,singleSelect:!n,view:Jt}),dn(sn)]})})]}),G&&(0,S.jsx)(ye,{creationOnly:!0,directory:X,menu:{x:G.x,y:G.y,paths:[],background:!0},onClose:()=>Nt(null),onCreateFile:y?e=>void cn(e):void 0,onCreateFolder:()=>void cn(null),shortcuts:ve})]});return o?fn:(0,He.createPortal)((0,S.jsx)(Ge,{onPointerDown:e=>{e.target===e.currentTarget&&h()},children:fn}),document.body)}function Ue(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function We(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ge=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${me}
`,Ke=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:he}
    ${({$inline:e})=>e?``:u}
`,qe=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Je=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Ye=i.button`
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
`,Xe=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Ze=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Qe=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,w=i.button`
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
`,$e=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,et=i.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,tt=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,nt=i.input`
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
`,rt=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,it=i.button`
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
`;function at(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function T({mode:e,save:t=!1,multiple:n,extensions:i,types:ie,typeIndex:ae=0,initial:oe,initialName:se=``,defaultExtension:ce=``}){let s=te(),le=o(),[c,ue]=(0,x.useState)(null),de=a(f(c?.themeMode)),[fe,pe]=(0,x.useState)({}),[me,he]=(0,x.useState)(null),[u,d]=(0,x.useState)(null),[p,m]=(0,x.useState)(null),_e=(0,x.useRef)(0);(0,x.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,x.useEffect)(()=>(l(e=>new Promise(t=>{m({id:++_e.current,prompt:e,resolve:t})})),()=>l(null)),[]),(0,x.useEffect)(()=>{ne().then(ue,()=>void 0)},[]),(0,x.useEffect)(()=>{g(c?.accentColor,c?.secondaryColor,de)},[c?.accentColor,c?.secondaryColor,de]),(0,x.useEffect)(()=>{h(c?.timeFormat,c?.timeFormatPattern),ge(c?.relativeTime,c?.relativeTimeWindowMinutes)},[c?.timeFormat,c?.timeFormatPattern,c?.relativeTime,c?.relativeTimeWindowMinutes]);let _=c?.defaultView??re,ve={mode:fe.mode??_.mode,iconSize:fe.iconSize??_.iconSize,gridSize:fe.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:me??_.columns??[`type`,`size`,`modified`]},ye=e=>pe(t=>({...t,...e}));return(0,S.jsxs)(ot,{children:[(0,S.jsxs)(st,{children:[(0,S.jsx)(E,{children:(0,S.jsx)(b,{size:17})}),(0,S.jsx)(D,{...le,children:s(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,S.jsx)(ke,{onChange:ye,onColumns:he,onShowImages:d,showImages:u??_.showImages,view:ve}),(0,S.jsx)(ct,{children:(0,S.jsx)(lt,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:s(`cancel`),type:`button`,children:(0,S.jsx)(ze,{size:12})})})]}),(0,S.jsx)(ut,{children:(0,S.jsx)(C,{extensions:i,types:at(ie),typeIndex:ae,initial:oe,initialName:se,defaultExtension:ce,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:(e,t)=>r.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:u??_.showImages,fileView:ve,theme:de})}),p&&(0,S.jsx)(y,{action:p.prompt.action,delaySeconds:p.prompt.delaySeconds,hits:p.prompt.hits,onCancel:()=>{p.resolve(!1),m(null)},onConfirm:()=>{p.resolve(!0),m(null)},permanent:p.prompt.permanent},p.id),(0,S.jsx)(Te,{}),(0,S.jsx)(v,{}),(0,S.jsx)(ee,{})]})}var ot=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,st=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,E=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,D=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ct=i.div`
    display: flex;
    flex-shrink: 0;
`,lt=i.button`
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
`,ut=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{T as PickerWindow};