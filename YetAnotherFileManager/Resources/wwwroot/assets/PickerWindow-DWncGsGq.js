import{M as e,O as t,S as n,h as r,k as ee,m as i,v as a,w as o,x as te}from"./dist-B10j17-y.js";import{D as ne,It as s,J as re,N as ie,P as ae,U as oe,V as se,Y as ce,Z as le,_ as c,a as ue,ht as de,i as l,k as u,n as fe,o as pe,p as me,u as d,ut as f}from"./selectionMenu-C7O2aFp_.js";import{C as p,S as m,a as h,c as he,k as ge,r as g,s as _,u as v}from"./theme-DIZkp4eN.js";import{C as _e,J as ve,S as ye,c as be,d as y,dt as xe,l as Se,lt as Ce,m as we,o as Te,p as b,q as Ee,tt as De,u as Oe,ut as ke,w as Ae}from"./main-BoSSLBGe.js";import{M as je,a as Me,at as Ne,ct as Pe,d as Fe,i as Ie,q as Le,r as Re,t as x,y as ze}from"./Icons-C2oT0N0q.js";import{t as Be}from"./GalleryView-Bo40tfgf.js";import{t as Ve}from"./OverviewView-BuZGdlIf.js";var S=e(ee(),1),He=ge(),C=n();function w({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,types:ee,typeIndex:i=0,inline:a=!1,places:s,fileView:pe,showImages:me,save:d=!1,initialName:h=``,defaultExtension:he=``,theme:ge,onCancel:g,onSelect:_}){let y=te(),we=_e(),Te=fe(`picker`),b=t===`file`,x=r??[],w=ee??[],at=he.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[E,ot]=(0,S.useState)(()=>{if(w.length===0)return x.length===0?`all`:`supported`;let e=e=>e.length===0?-1:w.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase())));if(i>=2&&i<=w.length)return i-1;let t=e(at);if(t>=0)return t;let n=h.lastIndexOf(`.`),r=n>0?e([h.slice(n).toLowerCase()]):-1;return r>=0?r:i>=1&&i<=w.length?i-1:0}),st=typeof E==`number`?w[E]??null:null,D=typeof E==`number`?st?.extensions??[]:E===`supported`?x:[],O=typeof E==`number`?E+1:0,ct=e=>w.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),lt=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},ut=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:ct(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},dt=e=>{ot(e),V(t=>ut(t,typeof e==`number`?w[e]??null:null))},[k,A]=(0,S.useState)(e),[j,ft]=(0,S.useState)(null),[pt,mt]=(0,S.useState)(!0),[ht,gt]=(0,S.useState)(null),[M,N]=(0,S.useState)(()=>new Set),[P,_t]=(0,S.useState)(s??[]),[vt,yt]=(0,S.useState)([]),[bt,xt]=(0,S.useState)([]),[F,I]=(0,S.useState)([]),[L,R]=(0,S.useState)([]),[z,B]=(0,S.useState)(null),[St,V]=(0,S.useState)(()=>{let e=D[0]??``,t=h.lastIndexOf(`.`);return e.length===0||t<=0?h:ct(h.slice(t).toLowerCase())?h.slice(0,t)+e:h}),[Ct,wt]=(0,S.useState)(null),[H,Tt]=(0,S.useState)(`files`),[Et,Dt]=(0,S.useState)(0),[U,W]=(0,S.useState)(ne),[Ot,kt]=(0,S.useState)(0),[At,G]=(0,S.useState)(0),[jt,Mt]=(0,S.useState)(0),[Nt,Pt]=(0,S.useState)(null),[Ft,It]=(0,S.useState)(null),[Lt,Rt]=(0,S.useState)(0),[K,zt]=(0,S.useState)(null),[Bt,Vt]=(0,S.useState)(()=>ae().imageStripHeight);(0,S.useEffect)(()=>{de().then(zt,()=>zt(null))},[]),(0,S.useEffect)(()=>{s?_t(s):re().then(_t,()=>_t([]))},[s]),(0,S.useEffect)(()=>{oe().then(yt,()=>yt([])),ce().then(xt,()=>xt([]))},[]),(0,S.useEffect)(()=>{let e=!0;return mt(!0),gt(null),N(new Set),d||V(b?``:v(k)),se(k||void 0,!1).then(t=>{e&&(ft(t),A(t.path),d||V(b?``:v(t.path)),mt(!1))},t=>{e&&(gt(t instanceof Error?t.message:String(t)),mt(!1))}),()=>{e=!1}},[k,Et,b]),(0,S.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),W(e=>({...e,open:!0})),kt(e=>e+1);return}if(e.key===`Escape`){U.open?(W(e=>({...e,open:!1,query:``})),G(0)):g();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Ht();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),J();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),W(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),kt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||nn()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,S.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Ht()):(e.button===4||e.button===9)&&(e.preventDefault(),J())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let q=e=>{let t=e.trim();t.length!==0&&m(t)!==m(k)&&(I(e=>[...e,k]),R([]),Tt(`files`),A(t))},Ht=()=>{let e=F.at(-1);e!==void 0&&(I(e=>e.slice(0,-1)),R(e=>[k,...e]),A(e))},J=()=>{let e=L[0];e!==void 0&&(R(e=>e.slice(1)),I(e=>[...e,k]),A(e))},Ut=(e,t)=>{if(e===`back`){let e=F[t];if(e===void 0)return;I(F.slice(0,t)),R([...F.slice(t+1),k,...L]),A(e);return}let n=L[t];n!==void 0&&(I([...F,k,...L.slice(0,t)]),R(L.slice(t+1)),A(n))};(0,S.useEffect)(()=>{if(o.available)return o.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Ht();break;case`forward`:J()}})});let Y=j?.path??k,Wt=j?.parent??(k?p(k):null);(0,S.useEffect)(()=>{o.available&&Y&&o.send({type:`fs.watch`,payload:{paths:[Y],owner:`picker`}})},[Y]),(0,S.useEffect)(()=>{if(o.available&&Y)return o.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&m(t.data.path)===m(Y)&&se(Y,!1).then(e=>{ft(e);let t=new Set(e.entries.map(e=>e.fullPath));N(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Y]);let Gt=(j?.entries??[]).filter(e=>e.isDirectory||b&&(D.length===0||D.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Kt=j?{...j,entries:Gt}:null,qt=U.open&&U.query.length>0,X=(0,S.useMemo)(()=>qt?Gt.filter(e=>u(e.name,U)).map(e=>e.fullPath):[],[qt,Gt,U]);(0,S.useEffect)(()=>{G(0)},[U.query,U.matchCase,U.regex,j?.path]);let Z=X.length===0?-1:Math.min(At,X.length-1),Jt=(0,S.useMemo)(()=>({...U,currentPath:Z>=0?X[Z]:null}),[U,Z,X]),Q=K?.defaultView??ae(),Yt=pe??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Xt=(me??Q.showImages)&&Yt.mode===`list`,Zt=!b||D.length===0,Qt=M.size===1?[...M][0]:null,$t=Qt!==null&&(j?.entries.find(e=>e.fullPath===Qt)?.isDirectory??!1),en=!d&&Zt&&($t||M.size===0&&St.trim().length===0),$=St.trim(),tn=$.length>0?We($)?$:Ue(Y,$):null,nn=()=>{if(pt||ht)return;if(d){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){c(y(`the_file_name_is_not_valid`));return}let t=D[0]??at[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=We(e)?e+n:Ue(Y,e+n);Ce([r]).then(e=>e[0]?.exists?wt(r):_([r],O),()=>_([r],O));return}let e=n?[...M]:[...M].slice(0,1);e.length>0?_(e,O):tn!==null&&$!==v(Y)?_([tn],O):Zt&&Y&&_([Y])},rn=(0,S.useCallback)(e=>{N(new Set(e));let t=e.length===1&&(p(e[0])!==Y||j?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(d&&t)?V(v(e[0])):d||V(e.length===0&&!b?v(Y):``)},[Y,b,j,d]),an=e=>{e.length!==0&&(d?V(v(e[0])):_(e,O))},on=e=>{j?.entries.find(t=>t.fullPath===e)?.isDirectory?q(e):le(e)},sn=e=>{j?.entries.find(t=>t.fullPath===e)?.isDirectory?q(e):d?V(v(e)):b&&_([e],O)},cn=e=>V(e),ln=async e=>{let t=Nt;if(Pt(null),!t||!Y)return;let n=e===null?await xe(Y):await ke(Y,e);n.ok&&n.path!==null&&(W(e=>({...e,open:!1,query:``})),e!==null&&ot(`all`),Dt(e=>e+1),window.setTimeout(()=>{It(n.path),Rt(e=>e+1)},120))},un=()=>{W(e=>({...e,open:!0})),kt(e=>e+1)},dn=e=>{G(t=>X.length===0?0:(t+e+X.length)%X.length)},fn=e=>(0,C.jsxs)($e,{children:[(0,C.jsxs)(et,{children:[(0,C.jsx)(tt,{children:y(b||d?`file_name`:`folder_3`)}),(0,C.jsx)(nt,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),nn())},spellCheck:!1,value:St}),b&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(tt,{children:y(`files_of_type`)}),(0,C.jsx)(Ee,{onChange:e=>dt(e===`all`||e===`supported`?e:Number(e)),options:w.length>0?[...w.map((e,t)=>({value:String(t),label:lt(e)})),{value:`all`,label:`${y(`all_files`)} (*.*)`}]:[...x.length>0?[{value:`supported`,label:`${y(`supported_files`)} (${x.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${y(`all_files`)} (*.*)`}],value:String(E)})]})]}),(0,C.jsxs)(rt,{children:[(0,C.jsx)(it,{onClick:g,type:`button`,children:y(`cancel`)}),(0,C.jsxs)(it,{$primary:!0,disabled:pt||ht!==null||(d?$.length===0:M.size===0&&$.length===0&&!Zt),onClick:nn,type:`button`,children:[(0,C.jsx)(Fe,{size:12}),y(d?`save_as`:en?`select_this_folder`:`select_this_file`)]})]}),(0,C.jsx)(l,{confirmLabel:y(`overwrite`),message:y(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>wt(null),onConfirm:()=>{let e=Ct;wt(null),e&&_([e],O)},open:Ct!==null,title:y(`overwrite`)}),z&&(0,C.jsx)(ue,{items:z.direction===`back`?[...F].reverse().map((e,t)=>({label:we(e),icon:(0,C.jsx)(ye,{location:e}),tooltip:e,onSelect:()=>{B(null),Ut(`back`,F.length-1-t)}})):L.map((e,t)=>({label:we(e),icon:(0,C.jsx)(ye,{location:e}),tooltip:e,onSelect:()=>{B(null),Ut(`forward`,t)}})),onClose:()=>B(null),x:z.x,y:z.y})]}),pn=(0,C.jsxs)(Ke,{$inline:a,role:`dialog`,"aria-modal":!a,children:[!a&&(0,C.jsxs)(qe,{children:[(0,C.jsxs)(Je,{children:[(0,C.jsx)(je,{size:16}),y(d?`save_as`:b?`choose_a_file`:`choose_a_folder`)]}),(0,C.jsx)(Ye,{onClick:g,title:y(`cancel`),type:`button`,children:(0,C.jsx)(ze,{size:12})})]}),(0,C.jsxs)(Xe,{children:[(0,C.jsx)(be,{activeKind:H===`overview`?`home`:H===`gallery`?`gallery`:`files`,currentPath:Y,drives:vt,hiddenViews:b?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:P.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>q(e),onOpenView:e=>{e===`home`?(N(new Set),V(b?``:v(Y)),Tt(`overview`)):e===`gallery`&&b&&(N(new Set),V(``),Tt(`gallery`))},places:P,recent:bt,recentLimit:10}),(0,C.jsx)(Ze,{children:H===`overview`?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ve,{drives:vt,theme:ge,historyVersion:0,homePath:P.find(e=>e.kind===`home`)?.path??``,onOpen:e=>q(e),onPick:b?e=>_([e],O):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:rn,places:P,readOnly:!0,recent:bt,recentLimit:10,visibilityVersion:0}),fn(V)]}):H===`gallery`?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Be,{onPick:e=>_([e],O),onSelectionChange:rn,showCheckboxes:K?.showCheckboxes??f().showCheckboxes,view:{...ie(),columns:[]}}),fn(V)]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Qe,{children:[(0,C.jsx)(T,{disabled:F.length===0,onClick:Ht,onContextMenu:e=>{if(F.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();B({x:t.left,y:t.bottom+4,direction:`back`})},title:y(`back`),type:`button`,children:(0,C.jsx)(Re,{})}),(0,C.jsx)(T,{disabled:L.length===0,onClick:J,onContextMenu:e=>{if(L.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();B({x:t.left,y:t.bottom+4,direction:`forward`})},title:y(`forward`),type:`button`,children:(0,C.jsx)(Ie,{})}),(0,C.jsx)(T,{disabled:!Wt,onClick:()=>Wt&&q(Wt),title:y(`up_one_level`),type:`button`,children:(0,C.jsx)(Me,{})}),(0,C.jsx)(Se,{onNavigate:q,path:Y}),(0,C.jsx)(T,{onClick:e=>Pt({x:e.clientX,y:e.clientY}),title:y(`new_folder_or_file`),type:`button`,children:(0,C.jsx)(Ne,{})}),(0,C.jsx)(T,{onClick:un,title:y(`search`),type:`button`,children:(0,C.jsx)(Pe,{})}),Te.available&&(0,C.jsx)(T,{onClick:e=>Te.open(e.clientX,e.clientY),title:y(`selection_menu`),type:`button`,children:(0,C.jsx)(Le,{})})]}),U.open&&(0,C.jsx)(Oe,{current:Z,focusToken:Ot,matchCase:U.matchCase,mode:U.mode,onClose:()=>{W(e=>({...e,open:!1,query:``})),G(0)},onMatchCase:()=>W(e=>({...e,matchCase:!e.matchCase})),onMode:()=>W(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>dn(1),onPrevious:()=>dn(-1),onQuery:e=>W(t=>({...t,query:e})),onRegex:()=>W(e=>({...e,regex:!e.regex})),query:U.query,regex:U.regex,total:X.length,onSelectMatches:()=>Mt(e=>e+1)}),(0,C.jsx)(Ae,{allowBackgroundMenu:!0,confirmDelete:K?.confirmDelete??f().confirmDelete,enableShortcuts:!0,error:ht,find:Jt,selectMatchesToken:jt,imageStripHeight:Bt,loading:pt,listing:Kt,onImageStripHeight:Vt,onOpen:sn,onOpenExternally:on,onOpenFile:sn,onSelectEntry:an,onRefresh:()=>Dt(e=>e+1),onSelectionChange:rn,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:K?.openOnSingleClick??f().openOnSingleClick,refreshToken:Et,pendingRename:Ft,pendingRenameToken:Lt,showCheckboxes:K?.showCheckboxes??f().showCheckboxes,showDetails:!1,showImages:Xt,singleSelect:!n,view:Yt}),fn(cn)]})})]}),Nt&&(0,C.jsx)(ve,{creationOnly:!0,directory:Y,menu:{x:Nt.x,y:Nt.y,paths:[],background:!0},onClose:()=>Pt(null),onCreateFile:b?e=>void ln(e):void 0,onCreateFolder:()=>void ln(null),shortcuts:De()})]});return a?pn:(0,He.createPortal)((0,C.jsx)(Ge,{onPointerDown:e=>{e.target===e.currentTarget&&g()},children:pn}),document.body)}function Ue(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function We(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Ge=t.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${pe}
`,Ke=t.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:me}
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
`,T=t.button`
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
`;function at(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function E({mode:e,save:t=!1,multiple:n,extensions:ee,types:ne,typeIndex:re=0,initial:ie,initialName:oe=``,defaultExtension:se=``}){let ce=te(),le=a(),[c,ue]=(0,S.useState)(null),l=i(h(c?.themeMode)),[u,fe]=(0,S.useState)({}),[pe,me]=(0,S.useState)(null),[d,f]=(0,S.useState)(null),[p,m]=(0,S.useState)(null),ge=(0,S.useRef)(0);(0,S.useEffect)(()=>{o.send({type:`app.ready`})},[]),(0,S.useEffect)(()=>(s(e=>new Promise(t=>{m({id:++ge.current,prompt:e,resolve:t})})),()=>s(null)),[]),(0,S.useEffect)(()=>{de().then(ue,()=>void 0)},[]),(0,S.useEffect)(()=>{g(c?.accentColor,c?.secondaryColor,l)},[c?.accentColor,c?.secondaryColor,l]),(0,S.useEffect)(()=>{he(c?.timeFormat,c?.timeFormatPattern),_(c?.relativeTime,c?.relativeTimeWindowMinutes)},[c?.timeFormat,c?.timeFormatPattern,c?.relativeTime,c?.relativeTimeWindowMinutes]);let v=c?.defaultView??ae(),_e={mode:u.mode??v.mode,iconSize:u.iconSize??v.iconSize,gridSize:u.gridSize??v.gridSize,sort:`name`,sortDescending:!1,columns:pe??v.columns??[`type`,`size`,`modified`]},ve=e=>fe(t=>({...t,...e}));return(0,C.jsxs)(ot,{children:[(0,C.jsxs)(st,{children:[(0,C.jsx)(D,{children:(0,C.jsx)(x,{size:17})}),(0,C.jsx)(O,{...le,children:ce(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,C.jsx)(Te,{onChange:ve,onColumns:me,onShowImages:f,showImages:d??v.showImages,view:_e}),(0,C.jsx)(ct,{children:(0,C.jsx)(lt,{onClick:()=>o.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:ce(`cancel`),type:`button`,children:(0,C.jsx)(ze,{size:12})})})]}),(0,C.jsx)(ut,{children:(0,C.jsx)(w,{extensions:ee,types:at(ne),typeIndex:re,initial:ie,initialName:oe,defaultExtension:se,inline:!0,mode:e,multiple:n,onCancel:()=>o.send({type:`pick.cancel`}),onSelect:(e,t)=>o.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:d??v.showImages,fileView:_e,theme:l})}),p&&(0,C.jsx)(we,{action:p.prompt.action,delaySeconds:p.prompt.delaySeconds,hits:p.prompt.hits,onCancel:()=>{p.resolve(!1),m(null)},onConfirm:()=>{p.resolve(!0),m(null)},permanent:p.prompt.permanent},p.id),(0,C.jsx)(b,{}),(0,C.jsx)(y,{}),(0,C.jsx)(r,{})]})}var ot=t.div`
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
`,D=t.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,O=t.span`
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
`;export{E as PickerWindow};