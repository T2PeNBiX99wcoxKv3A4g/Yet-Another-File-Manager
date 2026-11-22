import{M as e,O as t,S as n,h as r,k as ee,m as i,v as a,w as o,x as te}from"./dist-B10j17-y.js";import{B as ne,D as re,Ft as s,H as ie,J as ae,N as oe,P as se,X as ce,_ as le,a as c,i as ue,k as l,lt as u,mt as de,n as fe,o as pe,p as me,q as he,u as d}from"./selectionMenu-CYZeyRnK.js";import{C as f,O as p,S as m,a as ge,c as _e,r as h,s as g,u as _}from"./theme-CJqhrlwN.js";import{C as ve,J as ye,S as be,c as xe,d as v,dt as Se,l as Ce,lt as we,m as Te,o as Ee,p as y,q as De,tt as Oe,u as ke,ut as Ae,w as je}from"./main-CduEWnjz.js";import{M as Me,a as Ne,at as Pe,ct as Fe,d as Ie,i as Le,q as Re,r as ze,t as b,y as Be}from"./Icons-C2oT0N0q.js";import{t as Ve}from"./GalleryView-BdV7Q0XO.js";import{t as He}from"./OverviewView-DXWo3yjx.js";var x=e(ee(),1),Ue=p(),S=n();function C({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,types:ee,typeIndex:i=0,inline:a=!1,places:s,fileView:pe,showImages:me,save:d=!1,initialName:p=``,defaultExtension:ge=``,theme:_e,onCancel:h,onSelect:g}){let v=te(),Te=ve(),Ee=fe(`picker`),y=t===`file`,b=r??[],C=ee??[],ot=ge.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[T,st]=(0,x.useState)(()=>{if(C.length===0)return b.length===0?`all`:`supported`;let e=e=>e.length===0?-1:C.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase())));if(i>=2&&i<=C.length)return i-1;let t=e(ot);if(t>=0)return t;let n=p.lastIndexOf(`.`),r=n>0?e([p.slice(n).toLowerCase()]):-1;return r>=0?r:i>=1&&i<=C.length?i-1:0}),ct=typeof T==`number`?C[T]??null:null,E=typeof T==`number`?ct?.extensions??[]:T===`supported`?b:[],D=typeof T==`number`?T+1:0,lt=e=>C.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),ut=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},dt=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:lt(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},ft=e=>{st(e),B(t=>dt(t,typeof e==`number`?C[e]??null:null))},[O,k]=(0,x.useState)(e),[A,pt]=(0,x.useState)(null),[mt,ht]=(0,x.useState)(!0),[gt,_t]=(0,x.useState)(null),[j,M]=(0,x.useState)(()=>new Set),[N,vt]=(0,x.useState)(s??[]),[yt,bt]=(0,x.useState)([]),[xt,St]=(0,x.useState)([]),[P,F]=(0,x.useState)([]),[I,L]=(0,x.useState)([]),[R,z]=(0,x.useState)(null),[Ct,B]=(0,x.useState)(()=>{let e=E[0]??``,t=p.lastIndexOf(`.`);return e.length===0||t<=0?p:lt(p.slice(t).toLowerCase())?p.slice(0,t)+e:p}),[wt,Tt]=(0,x.useState)(null),[V,Et]=(0,x.useState)(`files`),[Dt,Ot]=(0,x.useState)(0),[H,U]=(0,x.useState)(re),[kt,At]=(0,x.useState)(0),[jt,W]=(0,x.useState)(0),[Mt,Nt]=(0,x.useState)(0),[G,Pt]=(0,x.useState)(null),[Ft,It]=(0,x.useState)(null),[Lt,Rt]=(0,x.useState)(0),[K,zt]=(0,x.useState)(null),[Bt,Vt]=(0,x.useState)(()=>se().imageStripHeight);(0,x.useEffect)(()=>{de().then(zt,()=>zt(null))},[]),(0,x.useEffect)(()=>{s?vt(s):he().then(vt,()=>vt([]))},[s]),(0,x.useEffect)(()=>{ie().then(bt,()=>bt([])),ae().then(St,()=>St([]))},[]),(0,x.useEffect)(()=>{let e=!0;return ht(!0),_t(null),M(new Set),d||B(y?``:_(O)),ne(O||void 0,!1).then(t=>{e&&(pt(t),k(t.path),d||B(y?``:_(t.path)),ht(!1))},t=>{e&&(_t(t instanceof Error?t.message:String(t)),ht(!1))}),()=>{e=!1}},[O,Dt,y]),(0,x.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),U(e=>({...e,open:!0})),At(e=>e+1);return}if(e.key===`Escape`){H.open?(U(e=>({...e,open:!1,query:``})),W(0)):h();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),J();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Y();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),U(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),At(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||nn()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,x.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),J()):(e.button===4||e.button===9)&&(e.preventDefault(),Y())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let q=e=>{let t=e.trim();t.length!==0&&m(t)!==m(O)&&(F(e=>[...e,O]),L([]),Et(`files`),k(t))},J=()=>{let e=P.at(-1);e!==void 0&&(F(e=>e.slice(0,-1)),L(e=>[O,...e]),k(e))},Y=()=>{let e=I[0];e!==void 0&&(L(e=>e.slice(1)),F(e=>[...e,O]),k(e))},Ht=(e,t)=>{if(e===`back`){let e=P[t];if(e===void 0)return;F(P.slice(0,t)),L([...P.slice(t+1),O,...I]),k(e);return}let n=I[t];n!==void 0&&(F([...P,O,...I.slice(0,t)]),L(I.slice(t+1)),k(n))};(0,x.useEffect)(()=>{if(o.available)return o.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:J();break;case`forward`:Y()}})});let X=A?.path??O,Ut=A?.parent??(O?f(O):null);(0,x.useEffect)(()=>{o.available&&X&&o.send({type:`fs.watch`,payload:{paths:[X],owner:`picker`}})},[X]),(0,x.useEffect)(()=>{if(o.available&&X)return o.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&m(t.data.path)===m(X)&&ne(X,!1).then(e=>{pt(e);let t=new Set(e.entries.map(e=>e.fullPath));M(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[X]);let Wt=(A?.entries??[]).filter(e=>e.isDirectory||y&&(E.length===0||E.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Gt=A?{...A,entries:Wt}:null,Kt=H.open&&H.query.length>0,Z=(0,x.useMemo)(()=>Kt?Wt.filter(e=>l(e.name,H)).map(e=>e.fullPath):[],[Kt,Wt,H]);(0,x.useEffect)(()=>{W(0)},[H.query,H.matchCase,H.regex,A?.path]);let qt=Z.length===0?-1:Math.min(jt,Z.length-1),Jt=(0,x.useMemo)(()=>({...H,currentPath:qt>=0?Z[qt]:null}),[H,qt,Z]),Q=K?.defaultView??se(),Yt=pe??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Xt=(me??Q.showImages)&&Yt.mode===`list`,Zt=!y||E.length===0,Qt=j.size===1?[...j][0]:null,$t=Qt!==null&&(A?.entries.find(e=>e.fullPath===Qt)?.isDirectory??!1),en=!d&&Zt&&($t||j.size===0&&Ct.trim().length===0),$=Ct.trim(),tn=$.length>0?Ge($)?$:We(X,$):null,nn=()=>{if(mt||gt)return;if(d){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){le(v(`the_file_name_is_not_valid`));return}let t=E[0]??ot[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=Ge(e)?e+n:We(X,e+n);we([r]).then(e=>e[0]?.exists?Tt(r):g([r],D),()=>g([r],D));return}let e=n?[...j]:[...j].slice(0,1);e.length>0?g(e,D):tn!==null&&$!==_(X)?g([tn],D):Zt&&X&&g([X])},rn=(0,x.useCallback)(e=>{M(new Set(e));let t=e.length===1&&(f(e[0])!==X||A?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(d&&t)?B(_(e[0])):d||B(e.length===0&&!y?_(X):``)},[X,y,A,d]),an=e=>{e.length!==0&&(d?B(_(e[0])):g(e,D))},on=e=>{A?.entries.find(t=>t.fullPath===e)?.isDirectory?q(e):ce(e)},sn=e=>{A?.entries.find(t=>t.fullPath===e)?.isDirectory?q(e):d?B(_(e)):y&&g([e],D)},cn=e=>B(e),ln=async e=>{let t=G;if(Pt(null),!t||!X)return;let n=e===null?await Se(X):await Ae(X,e);n.ok&&n.path!==null&&(U(e=>({...e,open:!1,query:``})),e!==null&&st(`all`),Ot(e=>e+1),window.setTimeout(()=>{It(n.path),Rt(e=>e+1)},120))},un=()=>{U(e=>({...e,open:!0})),At(e=>e+1)},dn=e=>{W(t=>Z.length===0?0:(t+e+Z.length)%Z.length)},fn=e=>(0,S.jsxs)(et,{children:[(0,S.jsxs)(tt,{children:[(0,S.jsx)(nt,{children:v(y||d?`file_name`:`folder_3`)}),(0,S.jsx)(rt,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),nn())},spellCheck:!1,value:Ct}),y&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(nt,{children:v(`files_of_type`)}),(0,S.jsx)(De,{onChange:e=>ft(e===`all`||e===`supported`?e:Number(e)),options:C.length>0?[...C.map((e,t)=>({value:String(t),label:ut(e)})),{value:`all`,label:`${v(`all_files`)} (*.*)`}]:[...b.length>0?[{value:`supported`,label:`${v(`supported_files`)} (${b.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${v(`all_files`)} (*.*)`}],value:String(T)})]})]}),(0,S.jsxs)(it,{children:[(0,S.jsx)(at,{onClick:h,type:`button`,children:v(`cancel`)}),(0,S.jsxs)(at,{$primary:!0,disabled:mt||gt!==null||(d?$.length===0:j.size===0&&$.length===0&&!Zt),onClick:nn,type:`button`,children:[(0,S.jsx)(Ie,{size:12}),v(d?`save_as`:en?`select_this_folder`:`select_this_file`)]})]}),(0,S.jsx)(ue,{confirmLabel:v(`overwrite`),message:v(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>Tt(null),onConfirm:()=>{let e=wt;Tt(null),e&&g([e],D)},open:wt!==null,title:v(`overwrite`)}),R&&(0,S.jsx)(c,{items:R.direction===`back`?[...P].reverse().map((e,t)=>({label:Te(e),icon:(0,S.jsx)(be,{location:e}),tooltip:e,onSelect:()=>{z(null),Ht(`back`,P.length-1-t)}})):I.map((e,t)=>({label:Te(e),icon:(0,S.jsx)(be,{location:e}),tooltip:e,onSelect:()=>{z(null),Ht(`forward`,t)}})),onClose:()=>z(null),x:R.x,y:R.y})]}),pn=(0,S.jsxs)(qe,{$inline:a,role:`dialog`,"aria-modal":!a,children:[!a&&(0,S.jsxs)(Je,{children:[(0,S.jsxs)(Ye,{children:[(0,S.jsx)(Me,{size:16}),v(d?`save_as`:y?`choose_a_file`:`choose_a_folder`)]}),(0,S.jsx)(Xe,{onClick:h,title:v(`cancel`),type:`button`,children:(0,S.jsx)(Be,{size:12})})]}),(0,S.jsxs)(Ze,{children:[(0,S.jsx)(xe,{activeKind:V===`overview`?`home`:V===`gallery`?`gallery`:`files`,currentPath:X,drives:yt,hiddenViews:y?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:N.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>q(e),onOpenView:e=>{e===`home`?(M(new Set),B(y?``:_(X)),Et(`overview`)):e===`gallery`&&y&&(M(new Set),B(``),Et(`gallery`))},places:N,recent:xt,recentLimit:10}),(0,S.jsx)(Qe,{children:V===`overview`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(He,{drives:yt,theme:_e,historyVersion:0,homePath:N.find(e=>e.kind===`home`)?.path??``,onOpen:e=>q(e),onPick:y?e=>g([e],D):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:rn,places:N,readOnly:!0,recent:xt,recentLimit:10,visibilityVersion:0}),fn(B)]}):V===`gallery`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Ve,{onPick:e=>g([e],D),onSelectionChange:rn,showCheckboxes:K?.showCheckboxes??u().showCheckboxes,view:{...oe(),columns:[]}}),fn(B)]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)($e,{children:[(0,S.jsx)(w,{disabled:P.length===0,onClick:J,onContextMenu:e=>{if(P.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();z({x:t.left,y:t.bottom+4,direction:`back`})},title:v(`back`),type:`button`,children:(0,S.jsx)(ze,{})}),(0,S.jsx)(w,{disabled:I.length===0,onClick:Y,onContextMenu:e=>{if(I.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();z({x:t.left,y:t.bottom+4,direction:`forward`})},title:v(`forward`),type:`button`,children:(0,S.jsx)(Le,{})}),(0,S.jsx)(w,{disabled:!Ut,onClick:()=>Ut&&q(Ut),title:v(`up_one_level`),type:`button`,children:(0,S.jsx)(Ne,{})}),(0,S.jsx)(Ce,{onNavigate:q,path:X}),(0,S.jsx)(w,{onClick:e=>Pt({x:e.clientX,y:e.clientY}),title:v(`new_folder_or_file`),type:`button`,children:(0,S.jsx)(Pe,{})}),(0,S.jsx)(w,{onClick:un,title:v(`search`),type:`button`,children:(0,S.jsx)(Fe,{})}),Ee.available&&(0,S.jsx)(w,{onClick:e=>Ee.open(e.clientX,e.clientY),title:v(`selection_menu`),type:`button`,children:(0,S.jsx)(Re,{})})]}),H.open&&(0,S.jsx)(ke,{current:qt,focusToken:kt,matchCase:H.matchCase,mode:H.mode,onClose:()=>{U(e=>({...e,open:!1,query:``})),W(0)},onMatchCase:()=>U(e=>({...e,matchCase:!e.matchCase})),onMode:()=>U(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>dn(1),onPrevious:()=>dn(-1),onQuery:e=>U(t=>({...t,query:e})),onRegex:()=>U(e=>({...e,regex:!e.regex})),query:H.query,regex:H.regex,total:Z.length,onSelectMatches:()=>Nt(e=>e+1)}),(0,S.jsx)(je,{allowBackgroundMenu:!0,confirmDelete:K?.confirmDelete??u().confirmDelete,enableShortcuts:!0,error:gt,find:Jt,selectMatchesToken:Mt,imageStripHeight:Bt,loading:mt,listing:Gt,onImageStripHeight:Vt,onOpen:sn,onOpenExternally:on,onOpenFile:sn,onSelectEntry:an,onRefresh:()=>Ot(e=>e+1),onSelectionChange:rn,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:K?.openOnSingleClick??u().openOnSingleClick,refreshToken:Dt,pendingRename:Ft,pendingRenameToken:Lt,showCheckboxes:K?.showCheckboxes??u().showCheckboxes,showDetails:!1,showImages:Xt,singleSelect:!n,view:Yt}),fn(cn)]})})]}),G&&(0,S.jsx)(ye,{creationOnly:!0,directory:X,menu:{x:G.x,y:G.y,paths:[],background:!0},onClose:()=>Pt(null),onCreateFile:y?e=>void ln(e):void 0,onCreateFolder:()=>void ln(null),shortcuts:Oe()})]});return a?pn:(0,Ue.createPortal)((0,S.jsx)(Ke,{onPointerDown:e=>{e.target===e.currentTarget&&h()},children:pn}),document.body)}function We(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Ge(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ke=t.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${pe}
`,qe=t.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:me}
    ${({$inline:e})=>e?``:d}
`,Je=t.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Ye=t.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Xe=t.button`
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
`,Ze=t.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Qe=t.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,$e=t.header`
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
`,et=t.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,tt=t.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,nt=t.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,rt=t.input`
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
`,it=t.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,at=t.button`
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
`;function ot(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function T({mode:e,save:t=!1,multiple:n,extensions:ee,types:ne,typeIndex:re=0,initial:ie,initialName:ae=``,defaultExtension:oe=``}){let ce=te(),le=a(),[c,ue]=(0,x.useState)(null),l=i(ge(c?.themeMode)),[u,fe]=(0,x.useState)({}),[pe,me]=(0,x.useState)(null),[he,d]=(0,x.useState)(null),[f,p]=(0,x.useState)(null),m=(0,x.useRef)(0);(0,x.useEffect)(()=>{o.send({type:`app.ready`})},[]),(0,x.useEffect)(()=>(s(e=>new Promise(t=>{p({id:++m.current,prompt:e,resolve:t})})),()=>s(null)),[]),(0,x.useEffect)(()=>{de().then(ue,()=>void 0)},[]),(0,x.useEffect)(()=>{h(c?.accentColor,c?.secondaryColor,l)},[c?.accentColor,c?.secondaryColor,l]),(0,x.useEffect)(()=>{_e(c?.timeFormat,c?.timeFormatPattern),g(c?.relativeTime,c?.relativeTimeWindowMinutes)},[c?.timeFormat,c?.timeFormatPattern,c?.relativeTime,c?.relativeTimeWindowMinutes]);let _=c?.defaultView??se(),ve={mode:u.mode??_.mode,iconSize:u.iconSize??_.iconSize,gridSize:u.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:pe??_.columns??[`type`,`size`,`modified`]},ye=e=>fe(t=>({...t,...e}));return(0,S.jsxs)(st,{children:[(0,S.jsxs)(ct,{children:[(0,S.jsx)(E,{children:(0,S.jsx)(b,{size:17})}),(0,S.jsx)(D,{...le,children:ce(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,S.jsx)(Ee,{onChange:ye,onColumns:me,onShowImages:d,showImages:he??_.showImages,view:ve}),(0,S.jsx)(lt,{children:(0,S.jsx)(ut,{onClick:()=>o.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:ce(`cancel`),type:`button`,children:(0,S.jsx)(Be,{size:12})})})]}),(0,S.jsx)(dt,{children:(0,S.jsx)(C,{extensions:ee,types:ot(ne),typeIndex:re,initial:ie,initialName:ae,defaultExtension:oe,inline:!0,mode:e,multiple:n,onCancel:()=>o.send({type:`pick.cancel`}),onSelect:(e,t)=>o.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:he??_.showImages,fileView:ve,theme:l})}),f&&(0,S.jsx)(Te,{action:f.prompt.action,delaySeconds:f.prompt.delaySeconds,hits:f.prompt.hits,onCancel:()=>{f.resolve(!1),p(null)},onConfirm:()=>{f.resolve(!0),p(null)},permanent:f.prompt.permanent},f.id),(0,S.jsx)(y,{}),(0,S.jsx)(v,{}),(0,S.jsx)(r,{})]})}var st=t.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,ct=t.header`
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
`,lt=t.div`
    display: flex;
    flex-shrink: 0;
`,ut=t.button`
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
`,dt=t.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{T as PickerWindow};