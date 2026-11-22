import{M as e,O as t,S as n,h as r,k as ee,m as i,v as a,w as o,x as te}from"./dist-B10j17-y.js";import{C as ne,G as re,K as ie,Q as ae,S as oe,c as se,ct as ce,d as s,l as c,lt as le,m as ue,o as de,p as l,st as u,u as d,w as fe,xt as pe}from"./main-DUz9UPSB.js";import{B as me,Ct as f,D as he,H as ge,J as _e,M as ve,X as p,_ as ye,a as be,i as m,j as xe,k as Se,n as Ce,o as we,p as Te,q as Ee,u as h}from"./selectionMenu-sFtKSbkF.js";import{C as g,a as _,c as v,d as y,k as De,l as Oe,r as b,w as ke}from"./theme-IW5S96qd.js";import{M as Ae,a as je,at as Me,ct as Ne,d as Pe,i as Fe,q as Ie,r as Le,t as x,y as Re}from"./Icons-C2oT0N0q.js";import{t as ze}from"./GalleryView-bVCAaRbV.js";import{t as Be}from"./OverviewView-hyRBxYRP.js";var S=e(ee(),1),Ve=De(),C=n();function w({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,types:ee,typeIndex:i=0,inline:a=!1,places:s,fileView:ue,showImages:de,save:l=!1,initialName:f=``,defaultExtension:we=``,theme:Te,onCancel:h,onSelect:_}){let v=te(),De=ne(),Oe=Ce(`picker`),b=t===`file`,x=r??[],w=ee??[],it=we.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[E,at]=(0,S.useState)(()=>{if(w.length===0)return x.length===0?`all`:`supported`;let e=e=>e.length===0?-1:w.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase())));if(i>=2&&i<=w.length)return i-1;let t=e(it);if(t>=0)return t;let n=f.lastIndexOf(`.`),r=n>0?e([f.slice(n).toLowerCase()]):-1;return r>=0?r:i>=1&&i<=w.length?i-1:0}),ot=typeof E==`number`?w[E]??null:null,D=typeof E==`number`?ot?.extensions??[]:E===`supported`?x:[],O=typeof E==`number`?E+1:0,st=e=>w.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),ct=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},lt=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:st(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},ut=e=>{at(e),V(t=>lt(t,typeof e==`number`?w[e]??null:null))},[k,A]=(0,S.useState)(e),[j,dt]=(0,S.useState)(null),[ft,pt]=(0,S.useState)(!0),[mt,ht]=(0,S.useState)(null),[M,N]=(0,S.useState)(()=>new Set),[P,gt]=(0,S.useState)(s??[]),[_t,vt]=(0,S.useState)([]),[yt,bt]=(0,S.useState)([]),[F,I]=(0,S.useState)([]),[L,R]=(0,S.useState)([]),[z,B]=(0,S.useState)(null),[xt,V]=(0,S.useState)(()=>{let e=D[0]??``,t=f.lastIndexOf(`.`);return e.length===0||t<=0?f:st(f.slice(t).toLowerCase())?f.slice(0,t)+e:f}),[St,Ct]=(0,S.useState)(null),[H,wt]=(0,S.useState)(`files`),[Tt,Et]=(0,S.useState)(0),[U,W]=(0,S.useState)(he),[Dt,Ot]=(0,S.useState)(0),[kt,G]=(0,S.useState)(0),[At,jt]=(0,S.useState)(0),[K,Mt]=(0,S.useState)(null),[Nt,Pt]=(0,S.useState)(null),[Ft,It]=(0,S.useState)(0),[q,Lt]=(0,S.useState)(null),[Rt,zt]=(0,S.useState)(ve.imageStripHeight);(0,S.useEffect)(()=>{pe().then(Lt,()=>Lt(null))},[]),(0,S.useEffect)(()=>{s?gt(s):Ee().then(gt,()=>gt([]))},[s]),(0,S.useEffect)(()=>{ge().then(vt,()=>vt([])),_e().then(bt,()=>bt([]))},[]),(0,S.useEffect)(()=>{let e=!0;return pt(!0),ht(null),N(new Set),l||V(b?``:y(k)),me(k||void 0,!1).then(t=>{e&&(dt(t),A(t.path),l||V(b?``:y(t.path)),pt(!1))},t=>{e&&(ht(t instanceof Error?t.message:String(t)),pt(!1))}),()=>{e=!1}},[k,Tt,b]),(0,S.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),W(e=>({...e,open:!0})),Ot(e=>e+1);return}if(e.key===`Escape`){U.open?(W(e=>({...e,open:!1,query:``})),G(0)):h();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Y();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Bt();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),W(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),Ot(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||tn()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,S.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Y()):(e.button===4||e.button===9)&&(e.preventDefault(),Bt())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let J=e=>{let t=e.trim();t.length!==0&&g(t)!==g(k)&&(I(e=>[...e,k]),R([]),wt(`files`),A(t))},Y=()=>{let e=F.at(-1);e!==void 0&&(I(e=>e.slice(0,-1)),R(e=>[k,...e]),A(e))},Bt=()=>{let e=L[0];e!==void 0&&(R(e=>e.slice(1)),I(e=>[...e,k]),A(e))},Vt=(e,t)=>{if(e===`back`){let e=F[t];if(e===void 0)return;I(F.slice(0,t)),R([...F.slice(t+1),k,...L]),A(e);return}let n=L[t];n!==void 0&&(I([...F,k,...L.slice(0,t)]),R(L.slice(t+1)),A(n))};(0,S.useEffect)(()=>{if(o.available)return o.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Y();break;case`forward`:Bt()}})});let X=j?.path??k,Ht=j?.parent??(k?ke(k):null);(0,S.useEffect)(()=>{o.available&&X&&o.send({type:`fs.watch`,payload:{paths:[X],owner:`picker`}})},[X]),(0,S.useEffect)(()=>{if(o.available&&X)return o.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&g(t.data.path)===g(X)&&me(X,!1).then(e=>{dt(e);let t=new Set(e.entries.map(e=>e.fullPath));N(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[X]);let Ut=(j?.entries??[]).filter(e=>e.isDirectory||b&&(D.length===0||D.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Wt=j?{...j,entries:Ut}:null,Gt=U.open&&U.query.length>0,Z=(0,S.useMemo)(()=>Gt?Ut.filter(e=>Se(e.name,U)).map(e=>e.fullPath):[],[Gt,Ut,U]);(0,S.useEffect)(()=>{G(0)},[U.query,U.matchCase,U.regex,j?.path]);let Kt=Z.length===0?-1:Math.min(kt,Z.length-1),qt=(0,S.useMemo)(()=>({...U,currentPath:Kt>=0?Z[Kt]:null}),[U,Kt,Z]),Q=q?.defaultView??ve,Jt=ue??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Yt=(de??Q.showImages)&&Jt.mode===`list`,Xt=!b||D.length===0,Zt=M.size===1?[...M][0]:null,Qt=Zt!==null&&(j?.entries.find(e=>e.fullPath===Zt)?.isDirectory??!1),$t=!l&&Xt&&(Qt||M.size===0&&xt.trim().length===0),$=xt.trim(),en=$.length>0?Ue($)?$:He(X,$):null,tn=()=>{if(ft||mt)return;if(l){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){ye(v(`the_file_name_is_not_valid`));return}let t=D[0]??it[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=Ue(e)?e+n:He(X,e+n);u([r]).then(e=>e[0]?.exists?Ct(r):_([r],O),()=>_([r],O));return}let e=n?[...M]:[...M].slice(0,1);e.length>0?_(e,O):en!==null&&$!==y(X)?_([en],O):Xt&&X&&_([X])},nn=(0,S.useCallback)(e=>{N(new Set(e));let t=e.length===1&&(ke(e[0])!==X||j?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(l&&t)?V(y(e[0])):l||V(e.length===0&&!b?y(X):``)},[X,b,j,l]),rn=e=>{e.length!==0&&(l?V(y(e[0])):_(e,O))},an=e=>{j?.entries.find(t=>t.fullPath===e)?.isDirectory?J(e):p(e)},on=e=>{j?.entries.find(t=>t.fullPath===e)?.isDirectory?J(e):l?V(y(e)):b&&_([e],O)},sn=e=>V(e),cn=async e=>{let t=K;if(Mt(null),!t||!X)return;let n=e===null?await le(X):await ce(X,e);n.ok&&n.path!==null&&(W(e=>({...e,open:!1,query:``})),e!==null&&at(`all`),Et(e=>e+1),window.setTimeout(()=>{Pt(n.path),It(e=>e+1)},120))},ln=()=>{W(e=>({...e,open:!0})),Ot(e=>e+1)},un=e=>{G(t=>Z.length===0?0:(t+e+Z.length)%Z.length)},dn=e=>(0,C.jsxs)(Qe,{children:[(0,C.jsxs)($e,{children:[(0,C.jsx)(et,{children:v(b||l?`file_name`:`folder_3`)}),(0,C.jsx)(tt,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),tn())},spellCheck:!1,value:xt}),b&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(et,{children:v(`files_of_type`)}),(0,C.jsx)(re,{onChange:e=>ut(e===`all`||e===`supported`?e:Number(e)),options:w.length>0?[...w.map((e,t)=>({value:String(t),label:ct(e)})),{value:`all`,label:`${v(`all_files`)} (*.*)`}]:[...x.length>0?[{value:`supported`,label:`${v(`supported_files`)} (${x.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${v(`all_files`)} (*.*)`}],value:String(E)})]})]}),(0,C.jsxs)(nt,{children:[(0,C.jsx)(rt,{onClick:h,type:`button`,children:v(`cancel`)}),(0,C.jsxs)(rt,{$primary:!0,disabled:ft||mt!==null||(l?$.length===0:M.size===0&&$.length===0&&!Xt),onClick:tn,type:`button`,children:[(0,C.jsx)(Pe,{size:12}),v(l?`save_as`:$t?`select_this_folder`:`select_this_file`)]})]}),(0,C.jsx)(m,{confirmLabel:v(`overwrite`),message:v(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>Ct(null),onConfirm:()=>{let e=St;Ct(null),e&&_([e],O)},open:St!==null,title:v(`overwrite`)}),z&&(0,C.jsx)(be,{items:z.direction===`back`?[...F].reverse().map((e,t)=>({label:De(e),icon:(0,C.jsx)(oe,{location:e}),tooltip:e,onSelect:()=>{B(null),Vt(`back`,F.length-1-t)}})):L.map((e,t)=>({label:De(e),icon:(0,C.jsx)(oe,{location:e}),tooltip:e,onSelect:()=>{B(null),Vt(`forward`,t)}})),onClose:()=>B(null),x:z.x,y:z.y})]}),fn=(0,C.jsxs)(Ge,{$inline:a,role:`dialog`,"aria-modal":!a,children:[!a&&(0,C.jsxs)(Ke,{children:[(0,C.jsxs)(qe,{children:[(0,C.jsx)(Ae,{size:16}),v(l?`save_as`:b?`choose_a_file`:`choose_a_folder`)]}),(0,C.jsx)(Je,{onClick:h,title:v(`cancel`),type:`button`,children:(0,C.jsx)(Re,{size:12})})]}),(0,C.jsxs)(Ye,{children:[(0,C.jsx)(se,{activeKind:H===`overview`?`home`:H===`gallery`?`gallery`:`files`,currentPath:X,drives:_t,hiddenViews:b?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:P.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>J(e),onOpenView:e=>{e===`home`?(N(new Set),V(b?``:y(X)),wt(`overview`)):e===`gallery`&&b&&(N(new Set),V(``),wt(`gallery`))},places:P,recent:yt,recentLimit:10}),(0,C.jsx)(Xe,{children:H===`overview`?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Be,{drives:_t,theme:Te,historyVersion:0,homePath:P.find(e=>e.kind===`home`)?.path??``,onOpen:e=>J(e),onPick:b?e=>_([e],O):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:nn,places:P,readOnly:!0,recent:yt,recentLimit:10,visibilityVersion:0}),dn(V)]}):H===`gallery`?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(ze,{onPick:e=>_([e],O),onSelectionChange:nn,showCheckboxes:q?.showCheckboxes??!0,view:{...xe,columns:[]}}),dn(V)]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Ze,{children:[(0,C.jsx)(T,{disabled:F.length===0,onClick:Y,onContextMenu:e=>{if(F.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();B({x:t.left,y:t.bottom+4,direction:`back`})},title:v(`back`),type:`button`,children:(0,C.jsx)(Le,{})}),(0,C.jsx)(T,{disabled:L.length===0,onClick:Bt,onContextMenu:e=>{if(L.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();B({x:t.left,y:t.bottom+4,direction:`forward`})},title:v(`forward`),type:`button`,children:(0,C.jsx)(Fe,{})}),(0,C.jsx)(T,{disabled:!Ht,onClick:()=>Ht&&J(Ht),title:v(`up_one_level`),type:`button`,children:(0,C.jsx)(je,{})}),(0,C.jsx)(c,{onNavigate:J,path:X}),(0,C.jsx)(T,{onClick:e=>Mt({x:e.clientX,y:e.clientY}),title:v(`new_folder_or_file`),type:`button`,children:(0,C.jsx)(Me,{})}),(0,C.jsx)(T,{onClick:ln,title:v(`search`),type:`button`,children:(0,C.jsx)(Ne,{})}),Oe.available&&(0,C.jsx)(T,{onClick:e=>Oe.open(e.clientX,e.clientY),title:v(`selection_menu`),type:`button`,children:(0,C.jsx)(Ie,{})})]}),U.open&&(0,C.jsx)(d,{current:Kt,focusToken:Dt,matchCase:U.matchCase,mode:U.mode,onClose:()=>{W(e=>({...e,open:!1,query:``})),G(0)},onMatchCase:()=>W(e=>({...e,matchCase:!e.matchCase})),onMode:()=>W(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>un(1),onPrevious:()=>un(-1),onQuery:e=>W(t=>({...t,query:e})),onRegex:()=>W(e=>({...e,regex:!e.regex})),query:U.query,regex:U.regex,total:Z.length,onSelectMatches:()=>jt(e=>e+1)}),(0,C.jsx)(fe,{allowBackgroundMenu:!0,confirmDelete:q?.confirmDelete??!1,enableShortcuts:!0,error:mt,find:qt,selectMatchesToken:At,imageStripHeight:Rt,loading:ft,listing:Wt,onImageStripHeight:zt,onOpen:on,onOpenExternally:an,onOpenFile:on,onSelectEntry:rn,onRefresh:()=>Et(e=>e+1),onSelectionChange:nn,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:q?.openOnSingleClick??!1,refreshToken:Tt,pendingRename:Nt,pendingRenameToken:Ft,showCheckboxes:q?.showCheckboxes??!0,showDetails:!1,showImages:Yt,singleSelect:!n,view:Jt}),dn(sn)]})})]}),K&&(0,C.jsx)(ie,{creationOnly:!0,directory:X,menu:{x:K.x,y:K.y,paths:[],background:!0},onClose:()=>Mt(null),onCreateFile:b?e=>void cn(e):void 0,onCreateFolder:()=>void cn(null),shortcuts:ae})]});return a?fn:(0,Ve.createPortal)((0,C.jsx)(We,{onPointerDown:e=>{e.target===e.currentTarget&&h()},children:fn}),document.body)}function He(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Ue(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var We=t.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${we}
`,Ge=t.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:Te}
    ${({$inline:e})=>e?``:h}
`,Ke=t.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,qe=t.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Je=t.button`
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
`,Ye=t.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Xe=t.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Ze=t.header`
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
`,Qe=t.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,$e=t.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,et=t.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,tt=t.input`
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
`,nt=t.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,rt=t.button`
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
`;function it(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function E({mode:e,save:t=!1,multiple:n,extensions:ee,types:ne,typeIndex:re=0,initial:ie,initialName:ae=``,defaultExtension:oe=``}){let se=te(),ce=a(),[c,le]=(0,S.useState)(null),u=i(_(c?.themeMode)),[d,fe]=(0,S.useState)({}),[me,he]=(0,S.useState)(null),[ge,_e]=(0,S.useState)(null),[p,ye]=(0,S.useState)(null),be=(0,S.useRef)(0);(0,S.useEffect)(()=>{o.send({type:`app.ready`})},[]),(0,S.useEffect)(()=>(f(e=>new Promise(t=>{ye({id:++be.current,prompt:e,resolve:t})})),()=>f(null)),[]),(0,S.useEffect)(()=>{pe().then(le,()=>void 0)},[]),(0,S.useEffect)(()=>{b(c?.accentColor,c?.secondaryColor,u)},[c?.accentColor,c?.secondaryColor,u]),(0,S.useEffect)(()=>{Oe(c?.timeFormat,c?.timeFormatPattern),v(c?.relativeTime,c?.relativeTimeWindowMinutes)},[c?.timeFormat,c?.timeFormatPattern,c?.relativeTime,c?.relativeTimeWindowMinutes]);let m=c?.defaultView??ve,xe={mode:d.mode??m.mode,iconSize:d.iconSize??m.iconSize,gridSize:d.gridSize??m.gridSize,sort:`name`,sortDescending:!1,columns:me??m.columns??[`type`,`size`,`modified`]},Se=e=>fe(t=>({...t,...e}));return(0,C.jsxs)(at,{children:[(0,C.jsxs)(ot,{children:[(0,C.jsx)(D,{children:(0,C.jsx)(x,{size:17})}),(0,C.jsx)(O,{...ce,children:se(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,C.jsx)(de,{onChange:Se,onColumns:he,onShowImages:_e,showImages:ge??m.showImages,view:xe}),(0,C.jsx)(st,{children:(0,C.jsx)(ct,{onClick:()=>o.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:se(`cancel`),type:`button`,children:(0,C.jsx)(Re,{size:12})})})]}),(0,C.jsx)(lt,{children:(0,C.jsx)(w,{extensions:ee,types:it(ne),typeIndex:re,initial:ie,initialName:ae,defaultExtension:oe,inline:!0,mode:e,multiple:n,onCancel:()=>o.send({type:`pick.cancel`}),onSelect:(e,t)=>o.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:ge??m.showImages,fileView:xe,theme:u})}),p&&(0,C.jsx)(ue,{action:p.prompt.action,delaySeconds:p.prompt.delaySeconds,hits:p.prompt.hits,onCancel:()=>{p.resolve(!1),ye(null)},onConfirm:()=>{p.resolve(!0),ye(null)},permanent:p.prompt.permanent},p.id),(0,C.jsx)(l,{}),(0,C.jsx)(s,{}),(0,C.jsx)(r,{})]})}var at=t.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,ot=t.header`
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
`,st=t.div`
    display: flex;
    flex-shrink: 0;
`,ct=t.button`
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
`,lt=t.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{E as PickerWindow};