import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as a,r as o,s as ee,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-CJt7JVjR.js";import{E as re,G as ie,J as ae,K as oe,L as s,O as c,_ as se,i as l,k as ce,n as u,o as d,p as f,u as le,w as ue,yt as p,z as de}from"./selectionMenu-Cn70N64L.js";import{D as m,S as h,a as g,r as _,u as v,x as y}from"./theme-bw14b3xc.js";import{B as b,J as fe,V as pe,dt as me,ft as he,pt as ge,t as _e}from"./FileList-F_Vrm0Il.js";import{c as ve,d as x,f as ye,l as be,o as S,u as xe}from"./main-aZ5iHzV7.js";import{K as Se,a as Ce,d as we,i as Te,it as Ee,j as De,r as Oe,st as ke,t as C,v as Ae}from"./Icons-NY0trHLk.js";import{t as je}from"./GalleryView-w7iIG1gB.js";import{t as Me}from"./OverviewView-DE0alIW9.js";var w=e(t(),1),Ne=m(),T=n();function E({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,inline:a=!1,places:o,fileView:ee,showImages:d,save:f=!1,initialName:le=``,defaultExtension:p=``,theme:m,onCancel:g,onSelect:_}){let x=te(),ye=u(`picker`),S=t===`file`,C=i??[],[E,O]=(0,w.useState)(e),[k,A]=(0,w.useState)(null),[j,M]=(0,w.useState)(!0),[N,Xe]=(0,w.useState)(null),[P,F]=(0,w.useState)(()=>new Set),[I,Ze]=(0,w.useState)(o??[]),[Qe,$e]=(0,w.useState)([]),[et,tt]=(0,w.useState)([]),[nt,rt]=(0,w.useState)([]),[it,at]=(0,w.useState)([]),[ot,L]=(0,w.useState)(le),[st,ct]=(0,w.useState)(null),[R,lt]=(0,w.useState)(C.length===0),[z,B]=(0,w.useState)(`files`),[ut,dt]=(0,w.useState)(0),[V,H]=(0,w.useState)(ue),[ft,pt]=(0,w.useState)(0),[mt,U]=(0,w.useState)(0),[ht,gt]=(0,w.useState)(0),[W,_t]=(0,w.useState)(null),[vt,yt]=(0,w.useState)(null),[bt,xt]=(0,w.useState)(0),[G,St]=(0,w.useState)(null),[Ct,wt]=(0,w.useState)(ce.imageStripHeight);(0,w.useEffect)(()=>{ne().then(St,()=>St(null))},[]),(0,w.useEffect)(()=>{o?Ze(o):ie().then(Ze,()=>Ze([]))},[o]),(0,w.useEffect)(()=>{de().then($e,()=>$e([])),oe().then(tt,()=>tt([]))},[]),(0,w.useEffect)(()=>{let e=!0;return M(!0),Xe(null),F(new Set),f||L(S?``:v(E)),s(E||void 0,!1).then(t=>{e&&(A(t),O(t.path),f||L(S?``:v(t.path)),M(!1))},t=>{e&&(Xe(t instanceof Error?t.message:String(t)),M(!1))}),()=>{e=!1}},[E,ut,S]),(0,w.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),H(e=>({...e,open:!0})),pt(e=>e+1);return}if(e.key===`Escape`){V.open?(H(e=>({...e,open:!1,query:``})),U(0)):g();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),q();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),J();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),H(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),pt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Lt()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,w.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),q()):(e.button===4||e.button===9)&&(e.preventDefault(),J())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let K=e=>{let t=e.trim();t.length!==0&&y(t)!==y(E)&&(rt(e=>[...e,E]),at([]),B(`files`),O(t))},q=()=>{let e=nt.at(-1);e!==void 0&&(rt(e=>e.slice(0,-1)),at(e=>[E,...e]),O(e))},J=()=>{let e=it[0];e!==void 0&&(at(e=>e.slice(1)),rt(e=>[...e,E]),O(e))};(0,w.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:q();break;case`forward`:J()}})});let Y=k?.path??E,Tt=k?.parent??(E?h(E):null);(0,w.useEffect)(()=>{r.available&&Y&&r.send({type:`fs.watch`,payload:{paths:[Y],owner:`picker`}})},[Y]),(0,w.useEffect)(()=>{if(r.available&&Y)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&y(t.data.path)===y(Y)&&s(Y,!1).then(e=>{A(e);let t=new Set(e.entries.map(e=>e.fullPath));F(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Y]);let Et=(k?.entries??[]).filter(e=>e.isDirectory||S&&(R||C.length===0||C.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Dt=k?{...k,entries:Et}:null,Ot=V.open&&V.query.length>0,X=(0,w.useMemo)(()=>Ot?Et.filter(e=>re(e.name,V)).map(e=>e.fullPath):[],[Ot,Et,V]);(0,w.useEffect)(()=>{U(0)},[V.query,V.matchCase,V.regex,k?.path]);let Z=X.length===0?-1:Math.min(mt,X.length-1),kt=(0,w.useMemo)(()=>({...V,currentPath:Z>=0?X[Z]:null}),[V,Z,X]),Q=G?.defaultView??ce,At=ee??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},jt=(d??Q.showImages)&&At.mode===`list`,Mt=!S||R,Nt=P.size===1?[...P][0]:null,Pt=Nt!==null&&(k?.entries.find(e=>e.fullPath===Nt)?.isDirectory??!1),Ft=!f&&Mt&&(Pt||P.size===0&&ot.trim().length===0),$=ot.trim(),It=$.length>0?Fe($)?$:Pe(Y,$):null,Lt=()=>{if(j||N)return;if(f){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){se(x(`the_file_name_is_not_valid`));return}let t=p.length>0&&!/\.[^.]*$/.test(e)?p.startsWith(`.`)?p:`.${p}`:``,n=Fe(e)?e+t:Pe(Y,e+t);me([n]).then(e=>e[0]?.exists?ct(n):_([n]),()=>_([n]));return}let e=n?[...P]:[...P].slice(0,1);e.length>0?_(e):It!==null&&$!==v(Y)?_([It]):Mt&&Y&&_([Y])},Rt=(0,w.useCallback)(e=>{F(new Set(e));let t=e.length===1&&(h(e[0])!==Y||k?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(f&&t)?L(v(e[0])):f||L(e.length===0&&!S?v(Y):``)},[Y,S,k,f]),zt=e=>{e.length!==0&&(f?L(v(e[0])):_(e))},Bt=e=>{k?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):ae(e)},Vt=e=>{k?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):f?L(v(e)):S&&_([e])},Ht=e=>L(e),Ut=async e=>{let t=W;if(_t(null),!t||!Y)return;let n=e===null?await ge(Y):await he(Y,e);n.ok&&n.path!==null&&(H(e=>({...e,open:!1,query:``})),e!==null&&lt(!0),dt(e=>e+1),window.setTimeout(()=>{yt(n.path),xt(e=>e+1)},120))},Wt=()=>{H(e=>({...e,open:!0})),pt(e=>e+1)},Gt=e=>{U(t=>X.length===0?0:(t+e+X.length)%X.length)},Kt=e=>(0,T.jsxs)(We,{children:[(0,T.jsxs)(Ge,{children:[(0,T.jsx)(Ke,{children:x(S||f?`file_name`:`folder_3`)}),(0,T.jsx)(qe,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Lt())},spellCheck:!1,value:ot}),S&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ke,{children:x(`files_of_type`)}),(0,T.jsx)(b,{onChange:e=>lt(e===`all`),options:[...C.length>0?[{value:`supported`,label:`${x(`supported_files`)} (${C.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${x(`all_files`)} (*.*)`}],value:R?`all`:`supported`})]})]}),(0,T.jsxs)(Je,{children:[(0,T.jsx)(Ye,{onClick:g,type:`button`,children:x(`cancel`)}),(0,T.jsxs)(Ye,{$primary:!0,disabled:j||N!==null||(f?$.length===0:P.size===0&&$.length===0&&!Mt),onClick:Lt,type:`button`,children:[(0,T.jsx)(we,{size:12}),x(f?`save_as`:Ft?`select_this_folder`:`select_this_file`)]})]}),(0,T.jsx)(l,{confirmLabel:x(`overwrite`),message:x(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>ct(null),onConfirm:()=>{let e=st;ct(null),e&&_([e])},open:st!==null,title:x(`overwrite`)})]}),qt=(0,T.jsxs)(Le,{$inline:a,role:`dialog`,"aria-modal":!a,children:[!a&&(0,T.jsxs)(Re,{children:[(0,T.jsxs)(ze,{children:[(0,T.jsx)(De,{size:16}),x(f?`save_as`:S?`choose_a_file`:`choose_a_folder`)]}),(0,T.jsx)(Be,{onClick:g,title:x(`cancel`),type:`button`,children:(0,T.jsx)(Ae,{size:12})})]}),(0,T.jsxs)(Ve,{children:[(0,T.jsx)(ve,{activeKind:z===`overview`?`home`:z===`gallery`?`gallery`:`files`,currentPath:Y,drives:Qe,hiddenViews:S?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:I.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>K(e),onOpenView:e=>{e===`home`?(F(new Set),L(S?``:v(Y)),B(`overview`)):e===`gallery`&&S&&(F(new Set),L(``),B(`gallery`))},places:I,recent:et,recentLimit:10}),(0,T.jsx)(He,{children:z===`overview`?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Me,{drives:Qe,theme:m,historyVersion:0,homePath:I.find(e=>e.kind===`home`)?.path??``,onOpen:e=>K(e),onPick:S?e=>_([e]):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Rt,places:I,readOnly:!0,recent:et,recentLimit:10,visibilityVersion:0}),Kt(L)]}):z===`gallery`?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(je,{onPick:e=>_([e]),onSelectionChange:Rt,showCheckboxes:G?.showCheckboxes??!0,view:{...c,columns:[]}}),Kt(L)]}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(Ue,{children:[(0,T.jsx)(D,{disabled:nt.length===0,onClick:q,title:x(`back`),type:`button`,children:(0,T.jsx)(Oe,{})}),(0,T.jsx)(D,{disabled:it.length===0,onClick:J,title:x(`forward`),type:`button`,children:(0,T.jsx)(Te,{})}),(0,T.jsx)(D,{disabled:!Tt,onClick:()=>Tt&&K(Tt),title:x(`up_one_level`),type:`button`,children:(0,T.jsx)(Ce,{})}),(0,T.jsx)(be,{onNavigate:K,path:Y}),(0,T.jsx)(D,{onClick:e=>_t({x:e.clientX,y:e.clientY}),title:x(`new_folder_or_file`),type:`button`,children:(0,T.jsx)(Ee,{})}),(0,T.jsx)(D,{onClick:Wt,title:x(`search`),type:`button`,children:(0,T.jsx)(ke,{})}),ye.available&&(0,T.jsx)(D,{onClick:e=>ye.open(e.clientX,e.clientY),title:x(`selection_menu`),type:`button`,children:(0,T.jsx)(Se,{})})]}),V.open&&(0,T.jsx)(xe,{current:Z,focusToken:ft,matchCase:V.matchCase,mode:V.mode,onClose:()=>{H(e=>({...e,open:!1,query:``})),U(0)},onMatchCase:()=>H(e=>({...e,matchCase:!e.matchCase})),onMode:()=>H(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Gt(1),onPrevious:()=>Gt(-1),onQuery:e=>H(t=>({...t,query:e})),onRegex:()=>H(e=>({...e,regex:!e.regex})),query:V.query,regex:V.regex,total:X.length,onSelectMatches:()=>gt(e=>e+1)}),(0,T.jsx)(_e,{allowBackgroundMenu:!0,confirmDelete:G?.confirmDelete??!1,enableShortcuts:!0,error:N,find:kt,selectMatchesToken:ht,imageStripHeight:Ct,loading:j,listing:Dt,onImageStripHeight:wt,onOpen:Vt,onOpenExternally:Bt,onOpenFile:Vt,onSelectEntry:zt,onRefresh:()=>dt(e=>e+1),onSelectionChange:Rt,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:G?.openOnSingleClick??!1,refreshToken:ut,pendingRename:vt,pendingRenameToken:bt,showCheckboxes:G?.showCheckboxes??!0,showDetails:!1,showImages:jt,singleSelect:!n,view:At}),Kt(Ht)]})})]}),W&&(0,T.jsx)(pe,{creationOnly:!0,directory:Y,menu:{x:W.x,y:W.y,paths:[],background:!0},onClose:()=>_t(null),onCreateFile:S?e=>void Ut(e):void 0,onCreateFolder:()=>void Ut(null),shortcuts:fe})]});return a?qt:(0,Ne.createPortal)((0,T.jsx)(Ie,{onPointerDown:e=>{e.target===e.currentTarget&&g()},children:qt}),document.body)}function Pe(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Fe(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ie=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${d}
`,Le=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:f}
    ${({$inline:e})=>e?``:le}
`,Re=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,ze=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Be=i.button`
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
`,Ve=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,He=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Ue=i.header`
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
`,We=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Ge=i.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Ke=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,qe=i.input`
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
`,Je=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Ye=i.button`
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
`;function O({mode:e,save:t=!1,multiple:n,extensions:i,initial:re,initialName:ie=``,defaultExtension:ae=``}){let oe=te(),s=ee(),[c,se]=(0,w.useState)(null),l=o(g(c?.themeMode)),[u,d]=(0,w.useState)({}),[f,le]=(0,w.useState)(null),[ue,de]=(0,w.useState)(null),[m,h]=(0,w.useState)(null),v=(0,w.useRef)(0);(0,w.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,w.useEffect)(()=>(p(e=>new Promise(t=>{h({id:++v.current,prompt:e,resolve:t})})),()=>p(null)),[]),(0,w.useEffect)(()=>{ne().then(se,()=>void 0)},[]),(0,w.useEffect)(()=>{_(c?.accentColor,c?.secondaryColor,l)},[c?.accentColor,c?.secondaryColor,l]);let y=c?.defaultView??ce,b={mode:u.mode??y.mode,iconSize:u.iconSize??y.iconSize,gridSize:u.gridSize??y.gridSize,sort:`name`,sortDescending:!1,columns:f??y.columns??[`type`,`size`,`modified`]},fe=e=>d(t=>({...t,...e}));return(0,T.jsxs)(k,{children:[(0,T.jsxs)(A,{children:[(0,T.jsx)(j,{children:(0,T.jsx)(C,{size:17})}),(0,T.jsx)(M,{...s,children:oe(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,T.jsx)(S,{onChange:fe,onColumns:le,onShowImages:de,showImages:ue??y.showImages,view:b}),(0,T.jsx)(N,{children:(0,T.jsx)(Xe,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:oe(`cancel`),type:`button`,children:(0,T.jsx)(Ae,{size:12})})})]}),(0,T.jsx)(P,{children:(0,T.jsx)(E,{extensions:i,initial:re,initialName:ie,defaultExtension:ae,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:e=>r.send({type:`pick.submit`,payload:{paths:e}}),save:t,showImages:ue??y.showImages,fileView:b,theme:l})}),m&&(0,T.jsx)(ye,{action:m.prompt.action,delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,T.jsx)(x,{}),(0,T.jsx)(a,{})]})}var k=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,A=i.header`
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
`;export{O as PickerWindow};