import{M as e,O as t,S as n,h as r,k as ee,m as i,v as a,w as o,x as te}from"./dist-B10j17-y.js";import{D as ne,It as s,J as re,N as ie,P as ae,U as oe,V as se,Y as ce,Z as le,_ as c,a as ue,ht as de,k as l,n as u,o as fe,p as pe,u as d,ut as f}from"./selectionMenu-C7O2aFp_.js";import{C as me,S as p,a as m,c as he,k as h,r as g,s as _,u as v}from"./theme-DIZkp4eN.js";import{C as y,J as ge,T as _e,Y as ve,c as ye,d as b,dt as be,f as xe,ft as Se,h as Ce,l as we,m as Te,nt as Ee,o as x,u as De,ut as Oe,w as ke}from"./main-mFoJHebn.js";import{M as Ae,a as je,at as Me,ct as Ne,d as Pe,i as Fe,q as Ie,r as Le,t as S,y as Re}from"./Icons-C2oT0N0q.js";import{t as ze}from"./GalleryView-CxFmV_YA.js";import{t as Be}from"./OverviewView-CN62Iaw7.js";var C=e(ee(),1),Ve=h(),w=n();function T({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,types:ee,typeIndex:i=0,inline:a=!1,places:s,fileView:fe,showImages:pe,save:d=!1,initialName:m=``,defaultExtension:he=``,theme:h,onCancel:g,onSelect:_}){let b=te(),Ce=ke(),Te=u(`picker`),x=t===`file`,S=r??[],T=ee??[],ot=he.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[D,st]=(0,C.useState)(()=>{if(T.length===0)return S.length===0?`all`:`supported`;let e=e=>e.length===0?-1:T.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase())));if(i>=2&&i<=T.length)return i-1;let t=e(ot);if(t>=0)return t;let n=m.lastIndexOf(`.`),r=n>0?e([m.slice(n).toLowerCase()]):-1;return r>=0?r:i>=1&&i<=T.length?i-1:0}),ct=typeof D==`number`?T[D]??null:null,O=typeof D==`number`?ct?.extensions??[]:D===`supported`?S:[],k=typeof D==`number`?D+1:0,lt=e=>T.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),ut=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},dt=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:lt(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},ft=e=>{st(e),H(t=>dt(t,typeof e==`number`?T[e]??null:null))},[A,j]=(0,C.useState)(e),[M,pt]=(0,C.useState)(null),[mt,ht]=(0,C.useState)(!0),[gt,_t]=(0,C.useState)(null),[N,P]=(0,C.useState)(()=>new Set),[F,vt]=(0,C.useState)(s??[]),[yt,bt]=(0,C.useState)([]),[xt,St]=(0,C.useState)([]),[I,L]=(0,C.useState)([]),[R,z]=(0,C.useState)([]),[B,V]=(0,C.useState)(null),[Ct,H]=(0,C.useState)(()=>{let e=O[0]??``,t=m.lastIndexOf(`.`);return e.length===0||t<=0?m:lt(m.slice(t).toLowerCase())?m.slice(0,t)+e:m}),[U,wt]=(0,C.useState)(null),[W,Tt]=(0,C.useState)(`files`),[Et,Dt]=(0,C.useState)(0),[G,K]=(0,C.useState)(ne),[Ot,kt]=(0,C.useState)(0),[At,q]=(0,C.useState)(0),[jt,Mt]=(0,C.useState)(0),[Nt,Pt]=(0,C.useState)(null),[Ft,It]=(0,C.useState)(null),[Lt,Rt]=(0,C.useState)(0),[J,zt]=(0,C.useState)(null),[Bt,Vt]=(0,C.useState)(()=>ae().imageStripHeight);(0,C.useEffect)(()=>{de().then(zt,()=>zt(null))},[]),(0,C.useEffect)(()=>{s?vt(s):re().then(vt,()=>vt([]))},[s]),(0,C.useEffect)(()=>{oe().then(bt,()=>bt([])),ce().then(St,()=>St([]))},[]),(0,C.useEffect)(()=>{let e=!0;return ht(!0),_t(null),P(new Set),d||H(x?``:v(A)),se(A||void 0,!1).then(t=>{e&&(pt(t),j(t.path),d||H(x?``:v(t.path)),ht(!1))},t=>{e&&(_t(t instanceof Error?t.message:String(t)),ht(!1))}),()=>{e=!1}},[A,Et,x]),(0,C.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),K(e=>({...e,open:!0})),kt(e=>e+1);return}if(e.key===`Escape`){G.open?(K(e=>({...e,open:!1,query:``})),q(0)):g();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Ht();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Ut();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),K(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),kt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||an()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,C.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Ht()):(e.button===4||e.button===9)&&(e.preventDefault(),Ut())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let Y=e=>{let t=e.trim();t.length!==0&&p(t)!==p(A)&&(L(e=>[...e,A]),z([]),Tt(`files`),j(t))},Ht=()=>{let e=I.at(-1);e!==void 0&&(L(e=>e.slice(0,-1)),z(e=>[A,...e]),j(e))},Ut=()=>{let e=R[0];e!==void 0&&(z(e=>e.slice(1)),L(e=>[...e,A]),j(e))},Wt=(e,t)=>{if(e===`back`){let e=I[t];if(e===void 0)return;L(I.slice(0,t)),z([...I.slice(t+1),A,...R]),j(e);return}let n=R[t];n!==void 0&&(L([...I,A,...R.slice(0,t)]),z(R.slice(t+1)),j(n))};(0,C.useEffect)(()=>{if(o.available)return o.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Ht();break;case`forward`:Ut()}})});let X=M?.path??A,Gt=M?.parent??(A?me(A):null);(0,C.useEffect)(()=>{o.available&&X&&o.send({type:`fs.watch`,payload:{paths:[X],owner:`picker`}})},[X]),(0,C.useEffect)(()=>{if(o.available&&X)return o.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&p(t.data.path)===p(X)&&se(X,!1).then(e=>{pt(e);let t=new Set(e.entries.map(e=>e.fullPath));P(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[X]);let Kt=(M?.entries??[]).filter(e=>e.isDirectory||x&&(O.length===0||O.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),qt=M?{...M,entries:Kt}:null,Jt=G.open&&G.query.length>0,Z=(0,C.useMemo)(()=>Jt?Kt.filter(e=>l(e.name,G)).map(e=>e.fullPath):[],[Jt,Kt,G]);(0,C.useEffect)(()=>{q(0)},[G.query,G.matchCase,G.regex,M?.path]);let Yt=Z.length===0?-1:Math.min(At,Z.length-1),Xt=(0,C.useMemo)(()=>({...G,currentPath:Yt>=0?Z[Yt]:null}),[G,Yt,Z]),Q=J?.defaultView??ae(),Zt=fe??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Qt=(pe??Q.showImages)&&Zt.mode===`list`,$t=!x||O.length===0,en=N.size===1?[...N][0]:null,tn=en!==null&&(M?.entries.find(e=>e.fullPath===en)?.isDirectory??!1),nn=!d&&$t&&(tn||N.size===0&&Ct.trim().length===0),$=Ct.trim(),rn=$.length>0?Ue($)?$:He(X,$):null,an=()=>{if(mt||gt)return;if(d){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){c(b(`the_file_name_is_not_valid`));return}let t=O[0]??ot[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=Ue(e)?e+n:He(X,e+n);Oe([r]).then(e=>{if(!e[0]?.exists){_([r],k);return}let t=M?.entries.find(e=>p(e.fullPath)===p(r));wt({path:r,size:t?.size??0,modified:t?.modified??0,created:t?.created??0})},()=>_([r],k));return}let e=n?[...N]:[...N].slice(0,1);e.length>0?_(e,k):rn!==null&&$!==v(X)?_([rn],k):$t&&X&&_([X])},on=(0,C.useCallback)(e=>{P(new Set(e));let t=e.length===1&&(me(e[0])!==X||M?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(d&&t)?H(v(e[0])):d||H(e.length===0&&!x?v(X):``)},[X,x,M,d]),sn=e=>{e.length!==0&&(d?H(v(e[0])):_(e,k))},cn=e=>{M?.entries.find(t=>t.fullPath===e)?.isDirectory?Y(e):le(e)},ln=e=>{M?.entries.find(t=>t.fullPath===e)?.isDirectory?Y(e):d?H(v(e)):x&&_([e],k)},un=e=>H(e),dn=async e=>{let t=Nt;if(Pt(null),!t||!X)return;let n=e===null?await Se(X):await be(X,e);n.ok&&n.path!==null&&(K(e=>({...e,open:!1,query:``})),e!==null&&st(`all`),Dt(e=>e+1),window.setTimeout(()=>{It(n.path),Rt(e=>e+1)},120))},fn=()=>{K(e=>({...e,open:!0})),kt(e=>e+1)},pn=!d&&n&&N.size>1,mn=e=>{q(t=>Z.length===0?0:(t+e+Z.length)%Z.length)},hn=e=>(0,w.jsxs)($e,{children:[(0,w.jsxs)(et,{children:[(0,w.jsx)(tt,{children:b(x||d?`file_name`:`folder_3`)}),(0,w.jsx)(rt,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),an())},placeholder:pn?b(`count_items_selected`,{count:N.size}):void 0,spellCheck:!1,value:Ct}),pn&&(0,w.jsx)(nt,{children:b(`count_items_selected`,{count:N.size})}),x&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(tt,{children:b(`files_of_type`)}),(0,w.jsx)(ge,{onChange:e=>ft(e===`all`||e===`supported`?e:Number(e)),options:T.length>0?[...T.map((e,t)=>({value:String(t),label:ut(e)})),{value:`all`,label:`${b(`all_files`)} (*.*)`}]:[...S.length>0?[{value:`supported`,label:`${b(`supported_files`)} (${S.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${b(`all_files`)} (*.*)`}],value:String(D)})]})]}),(0,w.jsxs)(it,{children:[(0,w.jsx)(at,{onClick:g,type:`button`,children:b(`cancel`)}),(0,w.jsxs)(at,{$primary:!0,disabled:mt||gt!==null||(d?$.length===0:N.size===0&&$.length===0&&!$t),onClick:an,type:`button`,children:[(0,w.jsx)(Pe,{size:12}),d?b(`save_as`):pn?b(`select_count_files`,{count:N.size}):b(nn?`select_this_folder`:`select_this_file`)]})]}),U!==null&&(0,w.jsx)(xe,{conflicts:[{source:U.path,destination:U.path,name:v(U.path),directory:!1,sourceSize:0,sourceModified:0,sourceCreated:0,targetSize:U.size,targetModified:U.modified,targetCreated:U.created,samePath:!1,suggestedName:We(U.path)}],defaultAction:J?.conflictDefaultAction??f().conflictDefaultAction,move:!1,onResolve:e=>{let t=U.path;wt(null);let n=e?.[0];if(n&&n.action!==`skip`){if(n.action===`rename`){let e=n.name?.trim()??``;if(e.length===0)return;let t=He(X,e);Oe([t]).then(e=>{if(!e[0]?.exists){_([t],k);return}let n=M?.entries.find(e=>p(e.fullPath)===p(t));wt({path:t,size:n?.size??0,modified:n?.modified??0,created:n?.created??0})},()=>_([t],k))}else _([t],k)}},remember:J?.conflictRememberChoice??f().conflictRememberChoice,subtitle:b(`an_entry_with_that_name_already_exists`),title:b(`overwrite`)}),B&&(0,w.jsx)(ue,{items:B.direction===`back`?[...I].reverse().map((e,t)=>({label:Ce(e),icon:(0,w.jsx)(y,{location:e}),tooltip:e,onSelect:()=>{V(null),Wt(`back`,I.length-1-t)}})):R.map((e,t)=>({label:Ce(e),icon:(0,w.jsx)(y,{location:e}),tooltip:e,onSelect:()=>{V(null),Wt(`forward`,t)}})),onClose:()=>V(null),x:B.x,y:B.y})]}),gn=(0,w.jsxs)(Ke,{$inline:a,role:`dialog`,"aria-modal":!a,children:[!a&&(0,w.jsxs)(qe,{children:[(0,w.jsxs)(Je,{children:[(0,w.jsx)(Ae,{size:16}),b(d?`save_as`:x?`choose_a_file`:`choose_a_folder`)]}),(0,w.jsx)(Ye,{onClick:g,title:b(`cancel`),type:`button`,children:(0,w.jsx)(Re,{size:12})})]}),(0,w.jsxs)(Xe,{children:[(0,w.jsx)(ye,{activeKind:W===`overview`?`home`:W===`gallery`?`gallery`:`files`,currentPath:X,drives:yt,hiddenViews:x?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:F.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>Y(e),onOpenView:e=>{e===`home`?(P(new Set),H(x?``:v(X)),Tt(`overview`)):e===`gallery`&&x&&(P(new Set),H(``),Tt(`gallery`))},places:F,recent:xt,recentLimit:10}),(0,w.jsx)(Ze,{children:W===`overview`?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(Be,{drives:yt,theme:h,historyVersion:0,homePath:F.find(e=>e.kind===`home`)?.path??``,onOpen:e=>Y(e),onPick:x?e=>_([e],k):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:on,places:F,readOnly:!0,recent:xt,recentLimit:10,visibilityVersion:0}),hn(H)]}):W===`gallery`?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(ze,{onPick:e=>_([e],k),onSelectionChange:on,showCheckboxes:J?.showCheckboxes??f().showCheckboxes,view:{...ie(),columns:[]}}),hn(H)]}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(Qe,{children:[(0,w.jsx)(E,{disabled:I.length===0,onClick:Ht,onContextMenu:e=>{if(I.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();V({x:t.left,y:t.bottom+4,direction:`back`})},title:b(`back`),type:`button`,children:(0,w.jsx)(Le,{})}),(0,w.jsx)(E,{disabled:R.length===0,onClick:Ut,onContextMenu:e=>{if(R.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();V({x:t.left,y:t.bottom+4,direction:`forward`})},title:b(`forward`),type:`button`,children:(0,w.jsx)(Fe,{})}),(0,w.jsx)(E,{disabled:!Gt,onClick:()=>Gt&&Y(Gt),title:b(`up_one_level`),type:`button`,children:(0,w.jsx)(je,{})}),(0,w.jsx)(we,{onNavigate:Y,path:X}),(0,w.jsx)(E,{onClick:e=>Pt({x:e.clientX,y:e.clientY}),title:b(`new_folder_or_file`),type:`button`,children:(0,w.jsx)(Me,{})}),(0,w.jsx)(E,{onClick:fn,title:b(`search`),type:`button`,children:(0,w.jsx)(Ne,{})}),Te.available&&(0,w.jsx)(E,{onClick:e=>Te.open(e.clientX,e.clientY),title:b(`selection_menu`),type:`button`,children:(0,w.jsx)(Ie,{})})]}),G.open&&(0,w.jsx)(De,{current:Yt,focusToken:Ot,matchCase:G.matchCase,mode:G.mode,onClose:()=>{K(e=>({...e,open:!1,query:``})),q(0)},onMatchCase:()=>K(e=>({...e,matchCase:!e.matchCase})),onMode:()=>K(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>mn(1),onPrevious:()=>mn(-1),onQuery:e=>K(t=>({...t,query:e})),onRegex:()=>K(e=>({...e,regex:!e.regex})),query:G.query,regex:G.regex,total:Z.length,onSelectMatches:()=>Mt(e=>e+1)}),(0,w.jsx)(_e,{allowBackgroundMenu:!0,confirmDelete:J?.confirmDelete??f().confirmDelete,enableShortcuts:!0,error:gt,find:Xt,selectMatchesToken:jt,imageStripHeight:Bt,loading:mt,listing:qt,onImageStripHeight:Vt,onOpen:ln,onOpenExternally:cn,onOpenFile:ln,onSelectEntry:sn,onRefresh:()=>Dt(e=>e+1),onSelectionChange:on,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:J?.openOnSingleClick??f().openOnSingleClick,refreshToken:Et,pendingRename:Ft,pendingRenameToken:Lt,showCheckboxes:J?.showCheckboxes??f().showCheckboxes,showDetails:!1,showImages:Qt,singleSelect:!n,view:Zt}),hn(un)]})})]}),Nt&&(0,w.jsx)(ve,{creationOnly:!0,directory:X,menu:{x:Nt.x,y:Nt.y,paths:[],background:!0},onClose:()=>Pt(null),onCreateFile:x?e=>void dn(e):void 0,onCreateFolder:()=>void dn(null),shortcuts:Ee()})]});return a?gn:(0,Ve.createPortal)((0,w.jsx)(Ge,{onPointerDown:e=>{e.target===e.currentTarget&&g()},children:gn}),document.body)}function He(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Ue(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}function We(e){let t=v(e),n=t.lastIndexOf(`.`);return n>0?`${t.slice(0,n)} (1)${t.slice(n)}`:`${t} (1)`}var Ge=t.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${fe}
`,Ke=t.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:pe}
    ${({$inline:e})=>e?``:d}
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
`,nt=t.span`
    grid-column: 1 / -1;
    color: var(--text-muted);
    font-size: 11px;
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
`;function ot(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function D({mode:e,save:t=!1,multiple:n,extensions:ee,types:ne,typeIndex:re=0,initial:ie,initialName:oe=``,defaultExtension:se=``}){let ce=te(),le=a(),[c,ue]=(0,C.useState)(null),l=i(m(c?.themeMode)),[u,fe]=(0,C.useState)({}),[pe,d]=(0,C.useState)(null),[f,me]=(0,C.useState)(null),[p,h]=(0,C.useState)(null),v=(0,C.useRef)(0);(0,C.useEffect)(()=>{o.send({type:`app.ready`})},[]),(0,C.useEffect)(()=>(s(e=>new Promise(t=>{h({id:++v.current,prompt:e,resolve:t})})),()=>s(null)),[]),(0,C.useEffect)(()=>{de().then(ue,()=>void 0)},[]),(0,C.useEffect)(()=>{g(c?.accentColor,c?.secondaryColor,l)},[c?.accentColor,c?.secondaryColor,l]),(0,C.useEffect)(()=>{he(c?.timeFormat,c?.timeFormatPattern),_(c?.relativeTime,c?.relativeTimeWindowMinutes)},[c?.timeFormat,c?.timeFormatPattern,c?.relativeTime,c?.relativeTimeWindowMinutes]);let y=c?.defaultView??ae(),ge={mode:u.mode??y.mode,iconSize:u.iconSize??y.iconSize,gridSize:u.gridSize??y.gridSize,sort:`name`,sortDescending:!1,columns:pe??y.columns??[`type`,`size`,`modified`]},_e=e=>fe(t=>({...t,...e}));return(0,w.jsxs)(st,{children:[(0,w.jsxs)(ct,{children:[(0,w.jsx)(O,{children:(0,w.jsx)(S,{size:17})}),(0,w.jsx)(k,{...le,children:ce(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,w.jsx)(x,{onChange:_e,onColumns:d,onShowImages:me,showImages:f??y.showImages,view:ge}),(0,w.jsx)(lt,{children:(0,w.jsx)(ut,{onClick:()=>o.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:ce(`cancel`),type:`button`,children:(0,w.jsx)(Re,{size:12})})})]}),(0,w.jsx)(dt,{children:(0,w.jsx)(T,{extensions:ee,types:ot(ne),typeIndex:re,initial:ie,initialName:oe,defaultExtension:se,inline:!0,mode:e,multiple:n,onCancel:()=>o.send({type:`pick.cancel`}),onSelect:(e,t)=>o.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:f??y.showImages,fileView:ge,theme:l})}),p&&(0,w.jsx)(Ce,{action:p.prompt.action,delaySeconds:p.prompt.delaySeconds,hits:p.prompt.hits,onCancel:()=>{p.resolve(!1),h(null)},onConfirm:()=>{p.resolve(!0),h(null)},permanent:p.prompt.permanent},p.id),(0,w.jsx)(Te,{}),(0,w.jsx)(b,{}),(0,w.jsx)(r,{})]})}var st=t.div`
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
`;export{D as PickerWindow};