import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as a,r as o,s as ee,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-D5cg96U9.js";import{B as re,E as ie,V as s,Y as ae,Z as oe,_ as se,at as c,i as ce,n as l,nt as u,o as le,p as d,rt as ue,u as f,vt as p,w as de}from"./selectionMenu-CQPdpP0k.js";import{C as fe,D as m,T as h,_ as g,a as _,g as v}from"./format-CWgBbA72.js";import{B as y,J as pe,V as me,dt as he,ft as ge,pt as _e,t as ve}from"./FileList-CYl5phCw.js";import{c as ye,d as b,f as x,l as be,o as S,u as xe}from"./main-Dkmb4fud.js";import{K as Se,a as Ce,d as we,i as Te,it as Ee,j as De,r as Oe,st as ke,t as C,v as Ae}from"./Icons-NY0trHLk.js";import{t as je}from"./GalleryView-Cd562cJh.js";import{t as Me}from"./OverviewView-D7dwUrN9.js";var w=e(t(),1),Ne=m(),T=n();function E({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,inline:a=!1,places:o,fileView:ee,showImages:le,save:d=!1,initialName:f=``,defaultExtension:p=``,theme:fe,onCancel:m,onSelect:h}){let b=te(),x=l(`picker`),S=t===`file`,C=i??[],[E,O]=(0,w.useState)(e),[k,Xe]=(0,w.useState)(null),[A,j]=(0,w.useState)(!0),[M,N]=(0,w.useState)(null),[P,F]=(0,w.useState)(()=>new Set),[I,Ze]=(0,w.useState)(o??[]),[Qe,$e]=(0,w.useState)([]),[et,tt]=(0,w.useState)([]),[nt,rt]=(0,w.useState)([]),[it,at]=(0,w.useState)([]),[ot,L]=(0,w.useState)(f),[st,ct]=(0,w.useState)(null),[lt,ut]=(0,w.useState)(C.length===0),[R,z]=(0,w.useState)(`files`),[dt,ft]=(0,w.useState)(0),[B,V]=(0,w.useState)(de),[pt,H]=(0,w.useState)(0),[mt,U]=(0,w.useState)(0),[ht,gt]=(0,w.useState)(0),[W,_t]=(0,w.useState)(null),[vt,yt]=(0,w.useState)(null),[bt,xt]=(0,w.useState)(0),[G,St]=(0,w.useState)(null),[Ct,wt]=(0,w.useState)(s.imageStripHeight);(0,w.useEffect)(()=>{ne().then(St,()=>St(null))},[]),(0,w.useEffect)(()=>{o?Ze(o):u().then(Ze,()=>Ze([]))},[o]),(0,w.useEffect)(()=>{oe().then($e,()=>$e([])),ue().then(tt,()=>tt([]))},[]),(0,w.useEffect)(()=>{let e=!0;return j(!0),N(null),F(new Set),d||L(S?``:_(E)),ae(E||void 0,!1).then(t=>{e&&(Xe(t),O(t.path),d||L(S?``:_(t.path)),j(!1))},t=>{e&&(N(t instanceof Error?t.message:String(t)),j(!1))}),()=>{e=!1}},[E,dt,S]),(0,w.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),V(e=>({...e,open:!0})),H(e=>e+1);return}if(e.key===`Escape`){B.open?(V(e=>({...e,open:!1,query:``})),U(0)):m();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),q();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),J();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),V(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),H(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Lt()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,w.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),q()):(e.button===4||e.button===9)&&(e.preventDefault(),J())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let K=e=>{let t=e.trim();t.length!==0&&v(t)!==v(E)&&(rt(e=>[...e,E]),at([]),z(`files`),O(t))},q=()=>{let e=nt.at(-1);e!==void 0&&(rt(e=>e.slice(0,-1)),at(e=>[E,...e]),O(e))},J=()=>{let e=it[0];e!==void 0&&(at(e=>e.slice(1)),rt(e=>[...e,E]),O(e))};(0,w.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:q();break;case`forward`:J()}})});let Y=k?.path??E,Tt=k?.parent??(E?g(E):null);(0,w.useEffect)(()=>{r.available&&Y&&r.send({type:`fs.watch`,payload:{paths:[Y],owner:`picker`}})},[Y]),(0,w.useEffect)(()=>{if(r.available&&Y)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&v(t.data.path)===v(Y)&&ae(Y,!1).then(e=>{Xe(e);let t=new Set(e.entries.map(e=>e.fullPath));F(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Y]);let Et=(k?.entries??[]).filter(e=>e.isDirectory||S&&(lt||C.length===0||C.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Dt=k?{...k,entries:Et}:null,Ot=B.open&&B.query.length>0,X=(0,w.useMemo)(()=>Ot?Et.filter(e=>ie(e.name,B)).map(e=>e.fullPath):[],[Ot,Et,B]);(0,w.useEffect)(()=>{U(0)},[B.query,B.matchCase,B.regex,k?.path]);let Z=X.length===0?-1:Math.min(mt,X.length-1),kt=(0,w.useMemo)(()=>({...B,currentPath:Z>=0?X[Z]:null}),[B,Z,X]),Q=G?.defaultView??s,At=ee??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},jt=(le??Q.showImages)&&At.mode===`list`,Mt=!S||lt,Nt=P.size===1?[...P][0]:null,Pt=Nt!==null&&(k?.entries.find(e=>e.fullPath===Nt)?.isDirectory??!1),Ft=!d&&Mt&&(Pt||P.size===0&&ot.trim().length===0),$=ot.trim(),It=$.length>0?Fe($)?$:Pe(Y,$):null,Lt=()=>{if(A||M)return;if(d){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){se(b(`the_file_name_is_not_valid`));return}let t=p.length>0&&!/\.[^.]*$/.test(e)?p.startsWith(`.`)?p:`.${p}`:``,n=Fe(e)?e+t:Pe(Y,e+t);he([n]).then(e=>e[0]?.exists?ct(n):h([n]),()=>h([n]));return}let e=n?[...P]:[...P].slice(0,1);e.length>0?h(e):It!==null&&$!==_(Y)?h([It]):Mt&&Y&&h([Y])},Rt=(0,w.useCallback)(e=>{F(new Set(e));let t=e.length===1&&(g(e[0])!==Y||k?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(d&&t)?L(_(e[0])):d||L(e.length===0&&!S?_(Y):``)},[Y,S,k,d]),zt=e=>{e.length!==0&&(d?L(_(e[0])):h(e))},Bt=e=>{k?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):c(e)},Vt=e=>{k?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):d?L(_(e)):S&&h([e])},Ht=e=>L(e),Ut=async e=>{let t=W;if(_t(null),!t||!Y)return;let n=e===null?await _e(Y):await ge(Y,e);n.ok&&n.path!==null&&(V(e=>({...e,open:!1,query:``})),e!==null&&ut(!0),ft(e=>e+1),window.setTimeout(()=>{yt(n.path),xt(e=>e+1)},120))},Wt=()=>{V(e=>({...e,open:!0})),H(e=>e+1)},Gt=e=>{U(t=>X.length===0?0:(t+e+X.length)%X.length)},Kt=e=>(0,T.jsxs)(We,{children:[(0,T.jsxs)(Ge,{children:[(0,T.jsx)(Ke,{children:b(S||d?`file_name`:`folder_3`)}),(0,T.jsx)(qe,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Lt())},spellCheck:!1,value:ot}),S&&(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Ke,{children:b(`files_of_type`)}),(0,T.jsx)(y,{onChange:e=>ut(e===`all`),options:[...C.length>0?[{value:`supported`,label:`${b(`supported_files`)} (${C.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${b(`all_files`)} (*.*)`}],value:lt?`all`:`supported`})]})]}),(0,T.jsxs)(Je,{children:[(0,T.jsx)(Ye,{onClick:m,type:`button`,children:b(`cancel`)}),(0,T.jsxs)(Ye,{$primary:!0,disabled:A||M!==null||(d?$.length===0:P.size===0&&$.length===0&&!Mt),onClick:Lt,type:`button`,children:[(0,T.jsx)(we,{size:12}),b(d?`save_as`:Ft?`select_this_folder`:`select_this_file`)]})]}),(0,T.jsx)(ce,{confirmLabel:b(`overwrite`),message:b(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>ct(null),onConfirm:()=>{let e=st;ct(null),e&&h([e])},open:st!==null,title:b(`overwrite`)})]}),qt=(0,T.jsxs)(Le,{$inline:a,role:`dialog`,"aria-modal":!a,children:[!a&&(0,T.jsxs)(Re,{children:[(0,T.jsxs)(ze,{children:[(0,T.jsx)(De,{size:16}),b(d?`save_as`:S?`choose_a_file`:`choose_a_folder`)]}),(0,T.jsx)(Be,{onClick:m,title:b(`cancel`),type:`button`,children:(0,T.jsx)(Ae,{size:12})})]}),(0,T.jsxs)(Ve,{children:[(0,T.jsx)(ye,{activeKind:R===`overview`?`home`:R===`gallery`?`gallery`:`files`,currentPath:Y,drives:Qe,hiddenViews:S?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:I.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>K(e),onOpenView:e=>{e===`home`?(F(new Set),L(S?``:_(Y)),z(`overview`)):e===`gallery`&&S&&(F(new Set),L(``),z(`gallery`))},places:I,recent:et,recentLimit:10}),(0,T.jsx)(He,{children:R===`overview`?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(Me,{drives:Qe,theme:fe,historyVersion:0,homePath:I.find(e=>e.kind===`home`)?.path??``,onOpen:e=>K(e),onPick:S?e=>h([e]):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Rt,places:I,readOnly:!0,recent:et,recentLimit:10,visibilityVersion:0}),Kt(L)]}):R===`gallery`?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(je,{onPick:e=>h([e]),onSelectionChange:Rt,showCheckboxes:G?.showCheckboxes??!0,view:{...re,columns:[]}}),Kt(L)]}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsxs)(Ue,{children:[(0,T.jsx)(D,{disabled:nt.length===0,onClick:q,title:b(`back`),type:`button`,children:(0,T.jsx)(Oe,{})}),(0,T.jsx)(D,{disabled:it.length===0,onClick:J,title:b(`forward`),type:`button`,children:(0,T.jsx)(Te,{})}),(0,T.jsx)(D,{disabled:!Tt,onClick:()=>Tt&&K(Tt),title:b(`up_one_level`),type:`button`,children:(0,T.jsx)(Ce,{})}),(0,T.jsx)(be,{onNavigate:K,path:Y}),(0,T.jsx)(D,{onClick:e=>_t({x:e.clientX,y:e.clientY}),title:b(`new_folder_or_file`),type:`button`,children:(0,T.jsx)(Ee,{})}),(0,T.jsx)(D,{onClick:Wt,title:b(`search`),type:`button`,children:(0,T.jsx)(ke,{})}),x.available&&(0,T.jsx)(D,{onClick:e=>x.open(e.clientX,e.clientY),title:b(`selection_menu`),type:`button`,children:(0,T.jsx)(Se,{})})]}),B.open&&(0,T.jsx)(xe,{current:Z,focusToken:pt,matchCase:B.matchCase,mode:B.mode,onClose:()=>{V(e=>({...e,open:!1,query:``})),U(0)},onMatchCase:()=>V(e=>({...e,matchCase:!e.matchCase})),onMode:()=>V(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Gt(1),onPrevious:()=>Gt(-1),onQuery:e=>V(t=>({...t,query:e})),onRegex:()=>V(e=>({...e,regex:!e.regex})),query:B.query,regex:B.regex,total:X.length,onSelectMatches:()=>gt(e=>e+1)}),(0,T.jsx)(ve,{allowBackgroundMenu:!0,confirmDelete:G?.confirmDelete??!1,enableShortcuts:!0,error:M,find:kt,selectMatchesToken:ht,imageStripHeight:Ct,loading:A,listing:Dt,onImageStripHeight:wt,onOpen:Vt,onOpenExternally:Bt,onOpenFile:Vt,onSelectEntry:zt,onRefresh:()=>ft(e=>e+1),onSelectionChange:Rt,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:G?.openOnSingleClick??!1,refreshToken:dt,pendingRename:vt,pendingRenameToken:bt,showCheckboxes:G?.showCheckboxes??!0,showDetails:!1,showImages:jt,singleSelect:!n,view:At}),Kt(Ht)]})})]}),W&&(0,T.jsx)(me,{creationOnly:!0,directory:Y,menu:{x:W.x,y:W.y,paths:[],background:!0},onClose:()=>_t(null),onCreateFile:S?e=>void Ut(e):void 0,onCreateFolder:()=>void Ut(null),shortcuts:pe})]});return a?qt:(0,Ne.createPortal)((0,T.jsx)(Ie,{onPointerDown:e=>{e.target===e.currentTarget&&m()},children:qt}),document.body)}function Pe(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Fe(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ie=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${le}
`,Le=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:d}
    ${({$inline:e})=>e?``:f}
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
`;function O({mode:e,save:t=!1,multiple:n,extensions:i,initial:re,initialName:ie=``,defaultExtension:ae=``}){let oe=te(),se=ee(),[c,ce]=(0,w.useState)(null),l=o(h(c?.themeMode)),[u,le]=(0,w.useState)({}),[d,ue]=(0,w.useState)(null),[f,de]=(0,w.useState)(null),[m,g]=(0,w.useState)(null),_=(0,w.useRef)(0);(0,w.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,w.useEffect)(()=>(p(e=>new Promise(t=>{g({id:++_.current,prompt:e,resolve:t})})),()=>p(null)),[]),(0,w.useEffect)(()=>{ne().then(ce,()=>void 0)},[]),(0,w.useEffect)(()=>{fe(c?.accentColor,c?.secondaryColor,l)},[c?.accentColor,c?.secondaryColor,l]);let v=c?.defaultView??s,y={mode:u.mode??v.mode,iconSize:u.iconSize??v.iconSize,gridSize:u.gridSize??v.gridSize,sort:`name`,sortDescending:!1,columns:d??v.columns??[`type`,`size`,`modified`]},pe=e=>le(t=>({...t,...e}));return(0,T.jsxs)(k,{children:[(0,T.jsxs)(Xe,{children:[(0,T.jsx)(A,{children:(0,T.jsx)(C,{size:17})}),(0,T.jsx)(j,{...se,children:oe(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,T.jsx)(S,{onChange:pe,onColumns:ue,onShowImages:de,showImages:f??v.showImages,view:y}),(0,T.jsx)(M,{children:(0,T.jsx)(N,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:oe(`cancel`),type:`button`,children:(0,T.jsx)(Ae,{size:12})})})]}),(0,T.jsx)(P,{children:(0,T.jsx)(E,{extensions:i,initial:re,initialName:ie,defaultExtension:ae,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:e=>r.send({type:`pick.submit`,payload:{paths:e}}),save:t,showImages:f??v.showImages,fileView:y,theme:l})}),m&&(0,T.jsx)(x,{action:m.prompt.action,delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),g(null)},onConfirm:()=>{m.resolve(!0),g(null)},permanent:m.prompt.permanent},m.id),(0,T.jsx)(b,{}),(0,T.jsx)(a,{})]})}var k=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Xe=i.header`
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
`,M=i.div`
    display: flex;
    flex-shrink: 0;
`,N=i.button`
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