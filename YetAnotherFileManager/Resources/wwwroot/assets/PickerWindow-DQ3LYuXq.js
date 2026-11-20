import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as a,r as o,s as ee,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-dHnjk6-J.js";import{E as re,G as ie,L as s,O as c,W as ae,_ as l,i as oe,k as u,n as d,o as f,p,q as se,u as ce,w as le,yt as m,z as ue}from"./selectionMenu-BAXkPrI1.js";import{D as h,S as g,a as _,r as v,u as y,x as b}from"./theme-bw14b3xc.js";import{B as x,J as de,V as fe,dt as pe,ft as me,pt as he,t as ge}from"./FileList-B1LK90IW.js";import{c as _e,d as S,f as ve,l as ye,o as C,u as be}from"./main-CLq4a2LN.js";import{K as xe,a as Se,d as Ce,i as we,it as Te,j as Ee,r as De,st as Oe,t as w,v as ke}from"./Icons-NY0trHLk.js";import{t as Ae}from"./GalleryView-CjAVHcai.js";import{t as je}from"./OverviewView-CiX43j0i.js";var T=e(t(),1),Me=h(),E=n();function D({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,inline:a=!1,places:o,fileView:ee,showImages:f,save:p=!1,initialName:ce=``,defaultExtension:m=``,theme:h,onCancel:_,onSelect:v}){let S=te(),ve=d(`picker`),C=t===`file`,w=i??[],[D,k]=(0,T.useState)(e),[A,Ye]=(0,T.useState)(null),[j,M]=(0,T.useState)(!0),[N,Xe]=(0,T.useState)(null),[P,F]=(0,T.useState)(()=>new Set),[I,Ze]=(0,T.useState)(o??[]),[Qe,$e]=(0,T.useState)([]),[et,tt]=(0,T.useState)([]),[nt,rt]=(0,T.useState)([]),[it,at]=(0,T.useState)([]),[ot,L]=(0,T.useState)(ce),[st,ct]=(0,T.useState)(null),[lt,ut]=(0,T.useState)(w.length===0),[R,z]=(0,T.useState)(`files`),[dt,ft]=(0,T.useState)(0),[B,V]=(0,T.useState)(le),[pt,H]=(0,T.useState)(0),[mt,U]=(0,T.useState)(0),[ht,gt]=(0,T.useState)(0),[W,_t]=(0,T.useState)(null),[vt,yt]=(0,T.useState)(null),[bt,xt]=(0,T.useState)(0),[G,St]=(0,T.useState)(null),[Ct,wt]=(0,T.useState)(u.imageStripHeight);(0,T.useEffect)(()=>{ne().then(St,()=>St(null))},[]),(0,T.useEffect)(()=>{o?Ze(o):ae().then(Ze,()=>Ze([]))},[o]),(0,T.useEffect)(()=>{ue().then($e,()=>$e([])),ie().then(tt,()=>tt([]))},[]),(0,T.useEffect)(()=>{let e=!0;return M(!0),Xe(null),F(new Set),p||L(C?``:y(D)),s(D||void 0,!1).then(t=>{e&&(Ye(t),k(t.path),p||L(C?``:y(t.path)),M(!1))},t=>{e&&(Xe(t instanceof Error?t.message:String(t)),M(!1))}),()=>{e=!1}},[D,dt,C]),(0,T.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),V(e=>({...e,open:!0})),H(e=>e+1);return}if(e.key===`Escape`){B.open?(V(e=>({...e,open:!1,query:``})),U(0)):_();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),q();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),J();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),V(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),H(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Lt()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,T.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),q()):(e.button===4||e.button===9)&&(e.preventDefault(),J())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let K=e=>{let t=e.trim();t.length!==0&&b(t)!==b(D)&&(rt(e=>[...e,D]),at([]),z(`files`),k(t))},q=()=>{let e=nt.at(-1);e!==void 0&&(rt(e=>e.slice(0,-1)),at(e=>[D,...e]),k(e))},J=()=>{let e=it[0];e!==void 0&&(at(e=>e.slice(1)),rt(e=>[...e,D]),k(e))};(0,T.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:q();break;case`forward`:J()}})});let Y=A?.path??D,Tt=A?.parent??(D?g(D):null);(0,T.useEffect)(()=>{r.available&&Y&&r.send({type:`fs.watch`,payload:{paths:[Y],owner:`picker`}})},[Y]),(0,T.useEffect)(()=>{if(r.available&&Y)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&b(t.data.path)===b(Y)&&s(Y,!1).then(e=>{Ye(e);let t=new Set(e.entries.map(e=>e.fullPath));F(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Y]);let Et=(A?.entries??[]).filter(e=>e.isDirectory||C&&(lt||w.length===0||w.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Dt=A?{...A,entries:Et}:null,Ot=B.open&&B.query.length>0,X=(0,T.useMemo)(()=>Ot?Et.filter(e=>re(e.name,B)).map(e=>e.fullPath):[],[Ot,Et,B]);(0,T.useEffect)(()=>{U(0)},[B.query,B.matchCase,B.regex,A?.path]);let Z=X.length===0?-1:Math.min(mt,X.length-1),kt=(0,T.useMemo)(()=>({...B,currentPath:Z>=0?X[Z]:null}),[B,Z,X]),Q=G?.defaultView??u,At=ee??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},jt=(f??Q.showImages)&&At.mode===`list`,Mt=!C||lt,Nt=P.size===1?[...P][0]:null,Pt=Nt!==null&&(A?.entries.find(e=>e.fullPath===Nt)?.isDirectory??!1),Ft=!p&&Mt&&(Pt||P.size===0&&ot.trim().length===0),$=ot.trim(),It=$.length>0?Pe($)?$:Ne(Y,$):null,Lt=()=>{if(j||N)return;if(p){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){l(S(`the_file_name_is_not_valid`));return}let t=m.length>0&&!/\.[^.]*$/.test(e)?m.startsWith(`.`)?m:`.${m}`:``,n=Pe(e)?e+t:Ne(Y,e+t);pe([n]).then(e=>e[0]?.exists?ct(n):v([n]),()=>v([n]));return}let e=n?[...P]:[...P].slice(0,1);e.length>0?v(e):It!==null&&$!==y(Y)?v([It]):Mt&&Y&&v([Y])},Rt=(0,T.useCallback)(e=>{F(new Set(e));let t=e.length===1&&(g(e[0])!==Y||A?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(p&&t)?L(y(e[0])):p||L(e.length===0&&!C?y(Y):``)},[Y,C,A,p]),zt=e=>{e.length!==0&&(p?L(y(e[0])):v(e))},Bt=e=>{A?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):se(e)},Vt=e=>{A?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):p?L(y(e)):C&&v([e])},Ht=e=>L(e),Ut=async e=>{let t=W;if(_t(null),!t||!Y)return;let n=e===null?await he(Y):await me(Y,e);n.ok&&n.path!==null&&(V(e=>({...e,open:!1,query:``})),e!==null&&ut(!0),ft(e=>e+1),window.setTimeout(()=>{yt(n.path),xt(e=>e+1)},120))},Wt=()=>{V(e=>({...e,open:!0})),H(e=>e+1)},Gt=e=>{U(t=>X.length===0?0:(t+e+X.length)%X.length)},Kt=e=>(0,E.jsxs)(Ue,{children:[(0,E.jsxs)(We,{children:[(0,E.jsx)(Ge,{children:S(C||p?`file_name`:`folder_3`)}),(0,E.jsx)(Ke,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Lt())},spellCheck:!1,value:ot}),C&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Ge,{children:S(`files_of_type`)}),(0,E.jsx)(x,{onChange:e=>ut(e===`all`),options:[...w.length>0?[{value:`supported`,label:`${S(`supported_files`)} (${w.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${S(`all_files`)} (*.*)`}],value:lt?`all`:`supported`})]})]}),(0,E.jsxs)(qe,{children:[(0,E.jsx)(Je,{onClick:_,type:`button`,children:S(`cancel`)}),(0,E.jsxs)(Je,{$primary:!0,disabled:j||N!==null||(p?$.length===0:P.size===0&&$.length===0&&!Mt),onClick:Lt,type:`button`,children:[(0,E.jsx)(Ce,{size:12}),S(p?`save_as`:Ft?`select_this_folder`:`select_this_file`)]})]}),(0,E.jsx)(oe,{confirmLabel:S(`overwrite`),message:S(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>ct(null),onConfirm:()=>{let e=st;ct(null),e&&v([e])},open:st!==null,title:S(`overwrite`)})]}),qt=(0,E.jsxs)(Ie,{$inline:a,role:`dialog`,"aria-modal":!a,children:[!a&&(0,E.jsxs)(Le,{children:[(0,E.jsxs)(Re,{children:[(0,E.jsx)(Ee,{size:16}),S(p?`save_as`:C?`choose_a_file`:`choose_a_folder`)]}),(0,E.jsx)(ze,{onClick:_,title:S(`cancel`),type:`button`,children:(0,E.jsx)(ke,{size:12})})]}),(0,E.jsxs)(Be,{children:[(0,E.jsx)(_e,{activeKind:R===`overview`?`home`:R===`gallery`?`gallery`:`files`,currentPath:Y,drives:Qe,hiddenViews:C?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:I.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>K(e),onOpenView:e=>{e===`home`?(F(new Set),L(C?``:y(Y)),z(`overview`)):e===`gallery`&&C&&(F(new Set),L(``),z(`gallery`))},places:I,recent:et,recentLimit:10}),(0,E.jsx)(Ve,{children:R===`overview`?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(je,{drives:Qe,theme:h,historyVersion:0,homePath:I.find(e=>e.kind===`home`)?.path??``,onOpen:e=>K(e),onPick:C?e=>v([e]):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Rt,places:I,readOnly:!0,recent:et,recentLimit:10,visibilityVersion:0}),Kt(L)]}):R===`gallery`?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Ae,{onPick:e=>v([e]),onSelectionChange:Rt,showCheckboxes:G?.showCheckboxes??!0,view:{...c,columns:[]}}),Kt(L)]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(He,{children:[(0,E.jsx)(O,{disabled:nt.length===0,onClick:q,title:S(`back`),type:`button`,children:(0,E.jsx)(De,{})}),(0,E.jsx)(O,{disabled:it.length===0,onClick:J,title:S(`forward`),type:`button`,children:(0,E.jsx)(we,{})}),(0,E.jsx)(O,{disabled:!Tt,onClick:()=>Tt&&K(Tt),title:S(`up_one_level`),type:`button`,children:(0,E.jsx)(Se,{})}),(0,E.jsx)(ye,{onNavigate:K,path:Y}),(0,E.jsx)(O,{onClick:e=>_t({x:e.clientX,y:e.clientY}),title:S(`new_folder_or_file`),type:`button`,children:(0,E.jsx)(Te,{})}),(0,E.jsx)(O,{onClick:Wt,title:S(`search`),type:`button`,children:(0,E.jsx)(Oe,{})}),ve.available&&(0,E.jsx)(O,{onClick:e=>ve.open(e.clientX,e.clientY),title:S(`selection_menu`),type:`button`,children:(0,E.jsx)(xe,{})})]}),B.open&&(0,E.jsx)(be,{current:Z,focusToken:pt,matchCase:B.matchCase,mode:B.mode,onClose:()=>{V(e=>({...e,open:!1,query:``})),U(0)},onMatchCase:()=>V(e=>({...e,matchCase:!e.matchCase})),onMode:()=>V(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Gt(1),onPrevious:()=>Gt(-1),onQuery:e=>V(t=>({...t,query:e})),onRegex:()=>V(e=>({...e,regex:!e.regex})),query:B.query,regex:B.regex,total:X.length,onSelectMatches:()=>gt(e=>e+1)}),(0,E.jsx)(ge,{allowBackgroundMenu:!0,confirmDelete:G?.confirmDelete??!1,enableShortcuts:!0,error:N,find:kt,selectMatchesToken:ht,imageStripHeight:Ct,loading:j,listing:Dt,onImageStripHeight:wt,onOpen:Vt,onOpenExternally:Bt,onOpenFile:Vt,onSelectEntry:zt,onRefresh:()=>ft(e=>e+1),onSelectionChange:Rt,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:G?.openOnSingleClick??!1,refreshToken:dt,pendingRename:vt,pendingRenameToken:bt,showCheckboxes:G?.showCheckboxes??!0,showDetails:!1,showImages:jt,singleSelect:!n,view:At}),Kt(Ht)]})})]}),W&&(0,E.jsx)(fe,{creationOnly:!0,directory:Y,menu:{x:W.x,y:W.y,paths:[],background:!0},onClose:()=>_t(null),onCreateFile:C?e=>void Ut(e):void 0,onCreateFolder:()=>void Ut(null),shortcuts:de})]});return a?qt:(0,Me.createPortal)((0,E.jsx)(Fe,{onPointerDown:e=>{e.target===e.currentTarget&&_()},children:qt}),document.body)}function Ne(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Pe(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Fe=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${f}
`,Ie=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:p}
    ${({$inline:e})=>e?``:ce}
`,Le=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Re=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,ze=i.button`
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
`,Be=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Ve=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,He=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,O=i.button`
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
`,Ue=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,We=i.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Ge=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Ke=i.input`
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
`,qe=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Je=i.button`
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
`;function k({mode:e,save:t=!1,multiple:n,extensions:i,initial:re,initialName:ie=``,defaultExtension:s=``}){let c=te(),ae=ee(),[l,oe]=(0,T.useState)(null),d=o(_(l?.themeMode)),[f,p]=(0,T.useState)({}),[se,ce]=(0,T.useState)(null),[le,ue]=(0,T.useState)(null),[h,g]=(0,T.useState)(null),y=(0,T.useRef)(0);(0,T.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,T.useEffect)(()=>(m(e=>new Promise(t=>{g({id:++y.current,prompt:e,resolve:t})})),()=>m(null)),[]),(0,T.useEffect)(()=>{ne().then(oe,()=>void 0)},[]),(0,T.useEffect)(()=>{v(l?.accentColor,l?.secondaryColor,d)},[l?.accentColor,l?.secondaryColor,d]);let b=l?.defaultView??u,x={mode:f.mode??b.mode,iconSize:f.iconSize??b.iconSize,gridSize:f.gridSize??b.gridSize,sort:`name`,sortDescending:!1,columns:se??b.columns??[`type`,`size`,`modified`]},de=e=>p(t=>({...t,...e}));return(0,E.jsxs)(A,{children:[(0,E.jsxs)(Ye,{children:[(0,E.jsx)(j,{children:(0,E.jsx)(w,{size:17})}),(0,E.jsx)(M,{...ae,children:c(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,E.jsx)(C,{onChange:de,onColumns:ce,onShowImages:ue,showImages:le??b.showImages,view:x}),(0,E.jsx)(N,{children:(0,E.jsx)(Xe,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:c(`cancel`),type:`button`,children:(0,E.jsx)(ke,{size:12})})})]}),(0,E.jsx)(P,{children:(0,E.jsx)(D,{extensions:i,initial:re,initialName:ie,defaultExtension:s,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:e=>r.send({type:`pick.submit`,payload:{paths:e}}),save:t,showImages:le??b.showImages,fileView:x,theme:d})}),h&&(0,E.jsx)(ve,{action:h.prompt.action,delaySeconds:h.prompt.delaySeconds,hits:h.prompt.hits,onCancel:()=>{h.resolve(!1),g(null)},onConfirm:()=>{h.resolve(!0),g(null)},permanent:h.prompt.permanent},h.id),(0,E.jsx)(S,{}),(0,E.jsx)(a,{})]})}var A=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Ye=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,j=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,M=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,N=i.div`
    display: flex;
    flex-shrink: 0;
`,Xe=i.button`
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
`,P=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{k as PickerWindow};