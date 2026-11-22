import{M as e,O as t,S as n,h as r,k as ee,m as i,v as a,w as o,x as te}from"./dist-B10j17-y.js";import{D as ne,E as re,Et as ie,O as ae,X as oe,Z as se,_ as s,c as ce,d as le,ft as ue,l as c,mt as de,o as fe,pt as pe,rt as l,u as me,v as u}from"./main-BVO2SK-f.js";import{B as he,Ct as d,D as ge,H as _e,J as ve,M as ye,X as f,_ as be,a as xe,i as p,j as Se,k as Ce,n as we,o as Te,p as Ee,q as De,u as m}from"./selectionMenu-1SgH0-x7.js";import{C as h,a as g,c as _,d as v,k as Oe,l as ke,r as y,w as Ae}from"./theme-IW5S96qd.js";import{M as je,a as Me,at as Ne,ct as Pe,d as Fe,i as Ie,q as Le,r as Re,t as b,y as ze}from"./Icons-C2oT0N0q.js";import{t as Be}from"./GalleryView-CQUQoaF6.js";import{t as Ve}from"./OverviewView-CCW1lTh9.js";var x=e(ee(),1),He=Oe(),S=n();function C({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,types:ee,typeIndex:i=0,inline:a=!1,places:s,fileView:le,showImages:fe,save:u=!1,initialName:d=``,defaultExtension:Te=``,theme:Ee,onCancel:m,onSelect:g}){let _=te(),Oe=ne(),ke=we(`picker`),y=t===`file`,b=r??[],C=ee??[],at=Te.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[T,ot]=(0,x.useState)(()=>{if(C.length===0)return b.length===0?`all`:`supported`;let e=e=>e.length===0?-1:C.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase())));if(i>=2&&i<=C.length)return i-1;let t=e(at);if(t>=0)return t;let n=d.lastIndexOf(`.`),r=n>0?e([d.slice(n).toLowerCase()]):-1;return r>=0?r:i>=1&&i<=C.length?i-1:0}),st=typeof T==`number`?C[T]??null:null,E=typeof T==`number`?st?.extensions??[]:T===`supported`?b:[],D=typeof T==`number`?T+1:0,ct=e=>C.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),lt=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},ut=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:ct(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},dt=e=>{ot(e),B(t=>ut(t,typeof e==`number`?C[e]??null:null))},[O,k]=(0,x.useState)(e),[A,ft]=(0,x.useState)(null),[pt,mt]=(0,x.useState)(!0),[ht,gt]=(0,x.useState)(null),[j,M]=(0,x.useState)(()=>new Set),[N,_t]=(0,x.useState)(s??[]),[vt,yt]=(0,x.useState)([]),[bt,xt]=(0,x.useState)([]),[P,F]=(0,x.useState)([]),[I,L]=(0,x.useState)([]),[R,z]=(0,x.useState)(null),[St,B]=(0,x.useState)(()=>{let e=E[0]??``,t=d.lastIndexOf(`.`);return e.length===0||t<=0?d:ct(d.slice(t).toLowerCase())?d.slice(0,t)+e:d}),[Ct,wt]=(0,x.useState)(null),[V,Tt]=(0,x.useState)(`files`),[Et,Dt]=(0,x.useState)(0),[H,U]=(0,x.useState)(ge),[Ot,kt]=(0,x.useState)(0),[At,W]=(0,x.useState)(0),[jt,Mt]=(0,x.useState)(0),[G,Nt]=(0,x.useState)(null),[Pt,Ft]=(0,x.useState)(null),[It,Lt]=(0,x.useState)(0),[K,Rt]=(0,x.useState)(null),[zt,Bt]=(0,x.useState)(ye.imageStripHeight);(0,x.useEffect)(()=>{ie().then(Rt,()=>Rt(null))},[]),(0,x.useEffect)(()=>{s?_t(s):De().then(_t,()=>_t([]))},[s]),(0,x.useEffect)(()=>{_e().then(yt,()=>yt([])),ve().then(xt,()=>xt([]))},[]),(0,x.useEffect)(()=>{let e=!0;return mt(!0),gt(null),M(new Set),u||B(y?``:v(O)),he(O||void 0,!1).then(t=>{e&&(ft(t),k(t.path),u||B(y?``:v(t.path)),mt(!1))},t=>{e&&(gt(t instanceof Error?t.message:String(t)),mt(!1))}),()=>{e=!1}},[O,Et,y]),(0,x.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),U(e=>({...e,open:!0})),kt(e=>e+1);return}if(e.key===`Escape`){H.open?(U(e=>({...e,open:!1,query:``})),W(0)):m();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),J();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Y();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),U(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),kt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||tn()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,x.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),J()):(e.button===4||e.button===9)&&(e.preventDefault(),Y())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let q=e=>{let t=e.trim();t.length!==0&&h(t)!==h(O)&&(F(e=>[...e,O]),L([]),Tt(`files`),k(t))},J=()=>{let e=P.at(-1);e!==void 0&&(F(e=>e.slice(0,-1)),L(e=>[O,...e]),k(e))},Y=()=>{let e=I[0];e!==void 0&&(L(e=>e.slice(1)),F(e=>[...e,O]),k(e))},Vt=(e,t)=>{if(e===`back`){let e=P[t];if(e===void 0)return;F(P.slice(0,t)),L([...P.slice(t+1),O,...I]),k(e);return}let n=I[t];n!==void 0&&(F([...P,O,...I.slice(0,t)]),L(I.slice(t+1)),k(n))};(0,x.useEffect)(()=>{if(o.available)return o.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:J();break;case`forward`:Y()}})});let X=A?.path??O,Ht=A?.parent??(O?Ae(O):null);(0,x.useEffect)(()=>{o.available&&X&&o.send({type:`fs.watch`,payload:{paths:[X],owner:`picker`}})},[X]),(0,x.useEffect)(()=>{if(o.available&&X)return o.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&h(t.data.path)===h(X)&&he(X,!1).then(e=>{ft(e);let t=new Set(e.entries.map(e=>e.fullPath));M(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[X]);let Ut=(A?.entries??[]).filter(e=>e.isDirectory||y&&(E.length===0||E.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Wt=A?{...A,entries:Ut}:null,Gt=H.open&&H.query.length>0,Z=(0,x.useMemo)(()=>Gt?Ut.filter(e=>Ce(e.name,H)).map(e=>e.fullPath):[],[Gt,Ut,H]);(0,x.useEffect)(()=>{W(0)},[H.query,H.matchCase,H.regex,A?.path]);let Kt=Z.length===0?-1:Math.min(At,Z.length-1),qt=(0,x.useMemo)(()=>({...H,currentPath:Kt>=0?Z[Kt]:null}),[H,Kt,Z]),Q=K?.defaultView??ye,Jt=le??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Yt=(fe??Q.showImages)&&Jt.mode===`list`,Xt=!y||E.length===0,Zt=j.size===1?[...j][0]:null,Qt=Zt!==null&&(A?.entries.find(e=>e.fullPath===Zt)?.isDirectory??!1),$t=!u&&Xt&&(Qt||j.size===0&&St.trim().length===0),$=St.trim(),en=$.length>0?We($)?$:Ue(X,$):null,tn=()=>{if(pt||ht)return;if(u){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){be(_(`the_file_name_is_not_valid`));return}let t=E[0]??at[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=We(e)?e+n:Ue(X,e+n);ue([r]).then(e=>e[0]?.exists?wt(r):g([r],D),()=>g([r],D));return}let e=n?[...j]:[...j].slice(0,1);e.length>0?g(e,D):en!==null&&$!==v(X)?g([en],D):Xt&&X&&g([X])},nn=(0,x.useCallback)(e=>{M(new Set(e));let t=e.length===1&&(Ae(e[0])!==X||A?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(u&&t)?B(v(e[0])):u||B(e.length===0&&!y?v(X):``)},[X,y,A,u]),rn=e=>{e.length!==0&&(u?B(v(e[0])):g(e,D))},an=e=>{A?.entries.find(t=>t.fullPath===e)?.isDirectory?q(e):f(e)},on=e=>{A?.entries.find(t=>t.fullPath===e)?.isDirectory?q(e):u?B(v(e)):y&&g([e],D)},sn=e=>B(e),cn=async e=>{let t=G;if(Nt(null),!t||!X)return;let n=e===null?await de(X):await pe(X,e);n.ok&&n.path!==null&&(U(e=>({...e,open:!1,query:``})),e!==null&&ot(`all`),Dt(e=>e+1),window.setTimeout(()=>{Ft(n.path),Lt(e=>e+1)},120))},ln=()=>{U(e=>({...e,open:!0})),kt(e=>e+1)},un=e=>{W(t=>Z.length===0?0:(t+e+Z.length)%Z.length)},dn=e=>(0,S.jsxs)($e,{children:[(0,S.jsxs)(et,{children:[(0,S.jsx)(tt,{children:_(y||u?`file_name`:`folder_3`)}),(0,S.jsx)(nt,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),tn())},spellCheck:!1,value:St}),y&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(tt,{children:_(`files_of_type`)}),(0,S.jsx)(oe,{onChange:e=>dt(e===`all`||e===`supported`?e:Number(e)),options:C.length>0?[...C.map((e,t)=>({value:String(t),label:lt(e)})),{value:`all`,label:`${_(`all_files`)} (*.*)`}]:[...b.length>0?[{value:`supported`,label:`${_(`supported_files`)} (${b.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${_(`all_files`)} (*.*)`}],value:String(T)})]})]}),(0,S.jsxs)(rt,{children:[(0,S.jsx)(it,{onClick:m,type:`button`,children:_(`cancel`)}),(0,S.jsxs)(it,{$primary:!0,disabled:pt||ht!==null||(u?$.length===0:j.size===0&&$.length===0&&!Xt),onClick:tn,type:`button`,children:[(0,S.jsx)(Fe,{size:12}),_(u?`save_as`:$t?`select_this_folder`:`select_this_file`)]})]}),(0,S.jsx)(p,{confirmLabel:_(`overwrite`),message:_(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>wt(null),onConfirm:()=>{let e=Ct;wt(null),e&&g([e],D)},open:Ct!==null,title:_(`overwrite`)}),R&&(0,S.jsx)(xe,{items:R.direction===`back`?[...P].reverse().map((e,t)=>({label:Oe(e),icon:(0,S.jsx)(re,{location:e}),tooltip:e,onSelect:()=>{z(null),Vt(`back`,P.length-1-t)}})):I.map((e,t)=>({label:Oe(e),icon:(0,S.jsx)(re,{location:e}),tooltip:e,onSelect:()=>{z(null),Vt(`forward`,t)}})),onClose:()=>z(null),x:R.x,y:R.y})]}),fn=(0,S.jsxs)(Ke,{$inline:a,role:`dialog`,"aria-modal":!a,children:[!a&&(0,S.jsxs)(qe,{children:[(0,S.jsxs)(Je,{children:[(0,S.jsx)(je,{size:16}),_(u?`save_as`:y?`choose_a_file`:`choose_a_folder`)]}),(0,S.jsx)(Ye,{onClick:m,title:_(`cancel`),type:`button`,children:(0,S.jsx)(ze,{size:12})})]}),(0,S.jsxs)(Xe,{children:[(0,S.jsx)(ce,{activeKind:V===`overview`?`home`:V===`gallery`?`gallery`:`files`,currentPath:X,drives:vt,hiddenViews:y?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:N.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>q(e),onOpenView:e=>{e===`home`?(M(new Set),B(y?``:v(X)),Tt(`overview`)):e===`gallery`&&y&&(M(new Set),B(``),Tt(`gallery`))},places:N,recent:bt,recentLimit:10}),(0,S.jsx)(Ze,{children:V===`overview`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Ve,{drives:vt,theme:Ee,historyVersion:0,homePath:N.find(e=>e.kind===`home`)?.path??``,onOpen:e=>q(e),onPick:y?e=>g([e],D):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:nn,places:N,readOnly:!0,recent:bt,recentLimit:10,visibilityVersion:0}),dn(B)]}):V===`gallery`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Be,{onPick:e=>g([e],D),onSelectionChange:nn,showCheckboxes:K?.showCheckboxes??!0,view:{...Se,columns:[]}}),dn(B)]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Qe,{children:[(0,S.jsx)(w,{disabled:P.length===0,onClick:J,onContextMenu:e=>{if(P.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();z({x:t.left,y:t.bottom+4,direction:`back`})},title:_(`back`),type:`button`,children:(0,S.jsx)(Re,{})}),(0,S.jsx)(w,{disabled:I.length===0,onClick:Y,onContextMenu:e=>{if(I.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();z({x:t.left,y:t.bottom+4,direction:`forward`})},title:_(`forward`),type:`button`,children:(0,S.jsx)(Ie,{})}),(0,S.jsx)(w,{disabled:!Ht,onClick:()=>Ht&&q(Ht),title:_(`up_one_level`),type:`button`,children:(0,S.jsx)(Me,{})}),(0,S.jsx)(c,{onNavigate:q,path:X}),(0,S.jsx)(w,{onClick:e=>Nt({x:e.clientX,y:e.clientY}),title:_(`new_folder_or_file`),type:`button`,children:(0,S.jsx)(Ne,{})}),(0,S.jsx)(w,{onClick:ln,title:_(`search`),type:`button`,children:(0,S.jsx)(Pe,{})}),ke.available&&(0,S.jsx)(w,{onClick:e=>ke.open(e.clientX,e.clientY),title:_(`selection_menu`),type:`button`,children:(0,S.jsx)(Le,{})})]}),H.open&&(0,S.jsx)(me,{current:Kt,focusToken:Ot,matchCase:H.matchCase,mode:H.mode,onClose:()=>{U(e=>({...e,open:!1,query:``})),W(0)},onMatchCase:()=>U(e=>({...e,matchCase:!e.matchCase})),onMode:()=>U(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>un(1),onPrevious:()=>un(-1),onQuery:e=>U(t=>({...t,query:e})),onRegex:()=>U(e=>({...e,regex:!e.regex})),query:H.query,regex:H.regex,total:Z.length,onSelectMatches:()=>Mt(e=>e+1)}),(0,S.jsx)(ae,{allowBackgroundMenu:!0,confirmDelete:K?.confirmDelete??!1,enableShortcuts:!0,error:ht,find:qt,selectMatchesToken:jt,imageStripHeight:zt,loading:pt,listing:Wt,onImageStripHeight:Bt,onOpen:on,onOpenExternally:an,onOpenFile:on,onSelectEntry:rn,onRefresh:()=>Dt(e=>e+1),onSelectionChange:nn,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:K?.openOnSingleClick??!1,refreshToken:Et,pendingRename:Pt,pendingRenameToken:It,showCheckboxes:K?.showCheckboxes??!0,showDetails:!1,showImages:Yt,singleSelect:!n,view:Jt}),dn(sn)]})})]}),G&&(0,S.jsx)(se,{creationOnly:!0,directory:X,menu:{x:G.x,y:G.y,paths:[],background:!0},onClose:()=>Nt(null),onCreateFile:y?e=>void cn(e):void 0,onCreateFolder:()=>void cn(null),shortcuts:l})]});return a?fn:(0,He.createPortal)((0,S.jsx)(Ge,{onPointerDown:e=>{e.target===e.currentTarget&&m()},children:fn}),document.body)}function Ue(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function We(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ge=t.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${Te}
`,Ke=t.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Ee}
    ${({$inline:e})=>e?``:m}
`,qe=t.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Je=t.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Ye=t.button`
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
`,Xe=t.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Ze=t.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Qe=t.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,w=t.button`
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
`,$e=t.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,et=t.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,tt=t.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,nt=t.input`
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
`,rt=t.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,it=t.button`
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
`;function at(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function T({mode:e,save:t=!1,multiple:n,extensions:ee,types:ne,typeIndex:re=0,initial:ae,initialName:oe=``,defaultExtension:se=``}){let ce=te(),ue=a(),[c,de]=(0,x.useState)(null),pe=i(g(c?.themeMode)),[l,me]=(0,x.useState)({}),[he,ge]=(0,x.useState)(null),[_e,ve]=(0,x.useState)(null),[f,be]=(0,x.useState)(null),xe=(0,x.useRef)(0);(0,x.useEffect)(()=>{o.send({type:`app.ready`})},[]),(0,x.useEffect)(()=>(d(e=>new Promise(t=>{be({id:++xe.current,prompt:e,resolve:t})})),()=>d(null)),[]),(0,x.useEffect)(()=>{ie().then(de,()=>void 0)},[]),(0,x.useEffect)(()=>{y(c?.accentColor,c?.secondaryColor,pe)},[c?.accentColor,c?.secondaryColor,pe]),(0,x.useEffect)(()=>{ke(c?.timeFormat,c?.timeFormatPattern),_(c?.relativeTime,c?.relativeTimeWindowMinutes)},[c?.timeFormat,c?.timeFormatPattern,c?.relativeTime,c?.relativeTimeWindowMinutes]);let p=c?.defaultView??ye,Se={mode:l.mode??p.mode,iconSize:l.iconSize??p.iconSize,gridSize:l.gridSize??p.gridSize,sort:`name`,sortDescending:!1,columns:he??p.columns??[`type`,`size`,`modified`]},Ce=e=>me(t=>({...t,...e}));return(0,S.jsxs)(ot,{children:[(0,S.jsxs)(st,{children:[(0,S.jsx)(E,{children:(0,S.jsx)(b,{size:17})}),(0,S.jsx)(D,{...ue,children:ce(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,S.jsx)(fe,{onChange:Ce,onColumns:ge,onShowImages:ve,showImages:_e??p.showImages,view:Se}),(0,S.jsx)(ct,{children:(0,S.jsx)(lt,{onClick:()=>o.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:ce(`cancel`),type:`button`,children:(0,S.jsx)(ze,{size:12})})})]}),(0,S.jsx)(ut,{children:(0,S.jsx)(C,{extensions:ee,types:at(ne),typeIndex:re,initial:ae,initialName:oe,defaultExtension:se,inline:!0,mode:e,multiple:n,onCancel:()=>o.send({type:`pick.cancel`}),onSelect:(e,t)=>o.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:_e??p.showImages,fileView:Se,theme:pe})}),f&&(0,S.jsx)(u,{action:f.prompt.action,delaySeconds:f.prompt.delaySeconds,hits:f.prompt.hits,onCancel:()=>{f.resolve(!1),be(null)},onConfirm:()=>{f.resolve(!0),be(null)},permanent:f.prompt.permanent},f.id),(0,S.jsx)(s,{}),(0,S.jsx)(le,{}),(0,S.jsx)(r,{})]})}var ot=t.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,st=t.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,E=t.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,D=t.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,ct=t.div`
    display: flex;
    flex-shrink: 0;
`,lt=t.button`
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
`,ut=t.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{T as PickerWindow};