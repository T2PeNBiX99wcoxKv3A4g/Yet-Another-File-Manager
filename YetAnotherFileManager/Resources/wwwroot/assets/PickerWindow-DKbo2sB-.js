import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as ee,r as a,s as o,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-dHnjk6-J.js";import{E as re,G as ie,L as ae,O as oe,W as se,_ as ce,i as le,k as ue,n as s,o as c,p as l,q as u,u as d,w as de,yt as f,z as fe}from"./selectionMenu-BAXkPrI1.js";import{D as p,S as pe,a as me,r as he,u as m,x as h}from"./theme-bw14b3xc.js";import{B as ge,J as g,V as _e,dt as ve,ft as ye,pt as be,t as xe}from"./FileList-B1LK90IW.js";import{c as Se,d as _,f as v,l as Ce,o as y,u as we}from"./main-CBfpY7tk.js";import{K as Te,a as Ee,d as De,i as Oe,it as ke,j as Ae,r as je,st as Me,t as b,v as Ne}from"./Icons-NY0trHLk.js";import{t as Pe}from"./GalleryView-DSbcWXFq.js";import{t as Fe}from"./OverviewView-CiX43j0i.js";var x=e(t(),1),Ie=p(),S=n();function C({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,types:ee,typeIndex:a=0,inline:o=!1,places:c,fileView:l,showImages:d,save:f=!1,initialName:p=``,defaultExtension:me=``,theme:he,onCancel:_,onSelect:v}){let y=te(),b=s(`picker`),C=t===`file`,T=i??[],E=ee??[],[D,O]=(0,x.useState)(()=>{if(E.length===0)return T.length===0?`all`:`supported`;let e=p.toLowerCase(),t=e.lastIndexOf(`.`)>0?E.findIndex(t=>t.extensions.some(t=>t.length>0&&e.endsWith(t.toLowerCase()))):-1;return t>=0&&a<=1?t:a>=1&&a<=E.length?a-1:0}),$e=typeof D==`number`?E[D]??null:null,k=typeof D==`number`?$e?.extensions??[]:D===`supported`?T:[],A=typeof D==`number`?D+1:0,et=e=>E.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),tt=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:et(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},nt=e=>{O(e),L(t=>tt(t,typeof e==`number`?E[e]??null:null))},[j,M]=(0,x.useState)(e),[N,rt]=(0,x.useState)(null),[it,at]=(0,x.useState)(!0),[ot,st]=(0,x.useState)(null),[P,F]=(0,x.useState)(()=>new Set),[I,ct]=(0,x.useState)(c??[]),[lt,ut]=(0,x.useState)([]),[dt,ft]=(0,x.useState)([]),[pt,mt]=(0,x.useState)([]),[ht,gt]=(0,x.useState)([]),[_t,L]=(0,x.useState)(p),[vt,yt]=(0,x.useState)(null),[R,bt]=(0,x.useState)(`files`),[xt,St]=(0,x.useState)(0),[z,B]=(0,x.useState)(de),[Ct,wt]=(0,x.useState)(0),[Tt,V]=(0,x.useState)(0),[Et,Dt]=(0,x.useState)(0),[H,Ot]=(0,x.useState)(null),[kt,At]=(0,x.useState)(null),[jt,Mt]=(0,x.useState)(0),[U,Nt]=(0,x.useState)(null),[Pt,Ft]=(0,x.useState)(ue.imageStripHeight);(0,x.useEffect)(()=>{ne().then(Nt,()=>Nt(null))},[]),(0,x.useEffect)(()=>{c?ct(c):se().then(ct,()=>ct([]))},[c]),(0,x.useEffect)(()=>{fe().then(ut,()=>ut([])),ie().then(ft,()=>ft([]))},[]),(0,x.useEffect)(()=>{let e=!0;return at(!0),st(null),F(new Set),f||L(C?``:m(j)),ae(j||void 0,!1).then(t=>{e&&(rt(t),M(t.path),f||L(C?``:m(t.path)),at(!1))},t=>{e&&(st(t instanceof Error?t.message:String(t)),at(!1))}),()=>{e=!1}},[j,xt,C]),(0,x.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),B(e=>({...e,open:!0})),wt(e=>e+1);return}if(e.key===`Escape`){z.open?(B(e=>({...e,open:!1,query:``})),V(0)):_();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),G();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),K();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),B(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),wt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||qt()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,x.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),G()):(e.button===4||e.button===9)&&(e.preventDefault(),K())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let W=e=>{let t=e.trim();t.length!==0&&h(t)!==h(j)&&(mt(e=>[...e,j]),gt([]),bt(`files`),M(t))},G=()=>{let e=pt.at(-1);e!==void 0&&(mt(e=>e.slice(0,-1)),gt(e=>[j,...e]),M(e))},K=()=>{let e=ht[0];e!==void 0&&(gt(e=>e.slice(1)),mt(e=>[...e,j]),M(e))};(0,x.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:G();break;case`forward`:K()}})});let q=N?.path??j,It=N?.parent??(j?pe(j):null);(0,x.useEffect)(()=>{r.available&&q&&r.send({type:`fs.watch`,payload:{paths:[q],owner:`picker`}})},[q]),(0,x.useEffect)(()=>{if(r.available&&q)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&h(t.data.path)===h(q)&&ae(q,!1).then(e=>{rt(e);let t=new Set(e.entries.map(e=>e.fullPath));F(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[q]);let Lt=(N?.entries??[]).filter(e=>e.isDirectory||C&&(k.length===0||k.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Rt=N?{...N,entries:Lt}:null,zt=z.open&&z.query.length>0,J=(0,x.useMemo)(()=>zt?Lt.filter(e=>re(e.name,z)).map(e=>e.fullPath):[],[zt,Lt,z]);(0,x.useEffect)(()=>{V(0)},[z.query,z.matchCase,z.regex,N?.path]);let Y=J.length===0?-1:Math.min(Tt,J.length-1),Bt=(0,x.useMemo)(()=>({...z,currentPath:Y>=0?J[Y]:null}),[z,Y,J]),X=U?.defaultView??ue,Vt=l??{mode:X.mode,iconSize:X.iconSize,gridSize:X.gridSize,sort:`name`,sortDescending:!1,columns:X.columns??[`type`,`size`,`modified`]},Ht=(d??X.showImages)&&Vt.mode===`list`,Z=!C||k.length===0,Ut=P.size===1?[...P][0]:null,Wt=Ut!==null&&(N?.entries.find(e=>e.fullPath===Ut)?.isDirectory??!1),Gt=!f&&Z&&(Wt||P.size===0&&_t.trim().length===0),Q=_t.trim(),Kt=Q.length>0?Re(Q)?Q:Le(q,Q):null,qt=()=>{if(it||ot)return;if(f){let e=Q;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){ce(y(`the_file_name_is_not_valid`));return}let t=k[0]??me,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=Re(e)?e+n:Le(q,e+n);ve([r]).then(e=>e[0]?.exists?yt(r):v([r],A),()=>v([r],A));return}let e=n?[...P]:[...P].slice(0,1);e.length>0?v(e,A):Kt!==null&&Q!==m(q)?v([Kt],A):Z&&q&&v([q])},Jt=(0,x.useCallback)(e=>{F(new Set(e));let t=e.length===1&&(pe(e[0])!==q||N?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(f&&t)?L(m(e[0])):f||L(e.length===0&&!C?m(q):``)},[q,C,N,f]),Yt=e=>{e.length!==0&&(f?L(m(e[0])):v(e,A))},Xt=e=>{N?.entries.find(t=>t.fullPath===e)?.isDirectory?W(e):u(e)},Zt=e=>{N?.entries.find(t=>t.fullPath===e)?.isDirectory?W(e):f?L(m(e)):C&&v([e],A)},Qt=e=>L(e),$t=async e=>{let t=H;if(Ot(null),!t||!q)return;let n=e===null?await be(q):await ye(q,e);n.ok&&n.path!==null&&(B(e=>({...e,open:!1,query:``})),e!==null&&O(`all`),St(e=>e+1),window.setTimeout(()=>{At(n.path),Mt(e=>e+1)},120))},en=()=>{B(e=>({...e,open:!0})),wt(e=>e+1)},tn=e=>{V(t=>J.length===0?0:(t+e+J.length)%J.length)},$=e=>(0,S.jsxs)(qe,{children:[(0,S.jsxs)(Je,{children:[(0,S.jsx)(Ye,{children:y(C||f?`file_name`:`folder_3`)}),(0,S.jsx)(Xe,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),qt())},spellCheck:!1,value:_t}),C&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Ye,{children:y(`files_of_type`)}),(0,S.jsx)(ge,{onChange:e=>nt(e===`all`||e===`supported`?e:Number(e)),options:E.length>0?[...E.map((e,t)=>({value:String(t),label:e.label.length>0?e.label:e.extensions.map(e=>`*${e}`).join(`;`)})),{value:`all`,label:`${y(`all_files`)} (*.*)`}]:[...T.length>0?[{value:`supported`,label:`${y(`supported_files`)} (${T.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${y(`all_files`)} (*.*)`}],value:String(D)})]})]}),(0,S.jsxs)(Ze,{children:[(0,S.jsx)(Qe,{onClick:_,type:`button`,children:y(`cancel`)}),(0,S.jsxs)(Qe,{$primary:!0,disabled:it||ot!==null||(f?Q.length===0:P.size===0&&Q.length===0&&!Z),onClick:qt,type:`button`,children:[(0,S.jsx)(De,{size:12}),y(f?`save_as`:Gt?`select_this_folder`:`select_this_file`)]})]}),(0,S.jsx)(le,{confirmLabel:y(`overwrite`),message:y(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>yt(null),onConfirm:()=>{let e=vt;yt(null),e&&v([e],A)},open:vt!==null,title:y(`overwrite`)})]}),nn=(0,S.jsxs)(Be,{$inline:o,role:`dialog`,"aria-modal":!o,children:[!o&&(0,S.jsxs)(Ve,{children:[(0,S.jsxs)(He,{children:[(0,S.jsx)(Ae,{size:16}),y(f?`save_as`:C?`choose_a_file`:`choose_a_folder`)]}),(0,S.jsx)(Ue,{onClick:_,title:y(`cancel`),type:`button`,children:(0,S.jsx)(Ne,{size:12})})]}),(0,S.jsxs)(We,{children:[(0,S.jsx)(Se,{activeKind:R===`overview`?`home`:R===`gallery`?`gallery`:`files`,currentPath:q,drives:lt,hiddenViews:C?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:I.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>W(e),onOpenView:e=>{e===`home`?(F(new Set),L(C?``:m(q)),bt(`overview`)):e===`gallery`&&C&&(F(new Set),L(``),bt(`gallery`))},places:I,recent:dt,recentLimit:10}),(0,S.jsx)(Ge,{children:R===`overview`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Fe,{drives:lt,theme:he,historyVersion:0,homePath:I.find(e=>e.kind===`home`)?.path??``,onOpen:e=>W(e),onPick:C?e=>v([e],A):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Jt,places:I,readOnly:!0,recent:dt,recentLimit:10,visibilityVersion:0}),$(L)]}):R===`gallery`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Pe,{onPick:e=>v([e],A),onSelectionChange:Jt,showCheckboxes:U?.showCheckboxes??!0,view:{...oe,columns:[]}}),$(L)]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Ke,{children:[(0,S.jsx)(w,{disabled:pt.length===0,onClick:G,title:y(`back`),type:`button`,children:(0,S.jsx)(je,{})}),(0,S.jsx)(w,{disabled:ht.length===0,onClick:K,title:y(`forward`),type:`button`,children:(0,S.jsx)(Oe,{})}),(0,S.jsx)(w,{disabled:!It,onClick:()=>It&&W(It),title:y(`up_one_level`),type:`button`,children:(0,S.jsx)(Ee,{})}),(0,S.jsx)(Ce,{onNavigate:W,path:q}),(0,S.jsx)(w,{onClick:e=>Ot({x:e.clientX,y:e.clientY}),title:y(`new_folder_or_file`),type:`button`,children:(0,S.jsx)(ke,{})}),(0,S.jsx)(w,{onClick:en,title:y(`search`),type:`button`,children:(0,S.jsx)(Me,{})}),b.available&&(0,S.jsx)(w,{onClick:e=>b.open(e.clientX,e.clientY),title:y(`selection_menu`),type:`button`,children:(0,S.jsx)(Te,{})})]}),z.open&&(0,S.jsx)(we,{current:Y,focusToken:Ct,matchCase:z.matchCase,mode:z.mode,onClose:()=>{B(e=>({...e,open:!1,query:``})),V(0)},onMatchCase:()=>B(e=>({...e,matchCase:!e.matchCase})),onMode:()=>B(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>tn(1),onPrevious:()=>tn(-1),onQuery:e=>B(t=>({...t,query:e})),onRegex:()=>B(e=>({...e,regex:!e.regex})),query:z.query,regex:z.regex,total:J.length,onSelectMatches:()=>Dt(e=>e+1)}),(0,S.jsx)(xe,{allowBackgroundMenu:!0,confirmDelete:U?.confirmDelete??!1,enableShortcuts:!0,error:ot,find:Bt,selectMatchesToken:Et,imageStripHeight:Pt,loading:it,listing:Rt,onImageStripHeight:Ft,onOpen:Zt,onOpenExternally:Xt,onOpenFile:Zt,onSelectEntry:Yt,onRefresh:()=>St(e=>e+1),onSelectionChange:Jt,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:U?.openOnSingleClick??!1,refreshToken:xt,pendingRename:kt,pendingRenameToken:jt,showCheckboxes:U?.showCheckboxes??!0,showDetails:!1,showImages:Ht,singleSelect:!n,view:Vt}),$(Qt)]})})]}),H&&(0,S.jsx)(_e,{creationOnly:!0,directory:q,menu:{x:H.x,y:H.y,paths:[],background:!0},onClose:()=>Ot(null),onCreateFile:C?e=>void $t(e):void 0,onCreateFolder:()=>void $t(null),shortcuts:g})]});return o?nn:(0,Ie.createPortal)((0,S.jsx)(ze,{onPointerDown:e=>{e.target===e.currentTarget&&_()},children:nn}),document.body)}function Le(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Re(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var ze=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${c}
`,Be=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:l}
    ${({$inline:e})=>e?``:d}
`,Ve=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,He=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,Ue=i.button`
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
`,We=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,Ge=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Ke=i.header`
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
`,qe=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,Je=i.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Ye=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Xe=i.input`
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
`,Ze=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Qe=i.button`
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
`;function T(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.flatMap(e=>{if(typeof e!=`object`||!e)return[];let t=e;return[{label:typeof t.label==`string`?t.label:``,extensions:Array.isArray(t.extensions)?t.extensions.filter(e=>typeof e==`string`&&e.length>0):[]}]}):[]}catch{return[]}}function E({mode:e,save:t=!1,multiple:n,extensions:i,types:re,typeIndex:ie=0,initial:ae,initialName:oe=``,defaultExtension:se=``}){let ce=te(),le=o(),[s,c]=(0,x.useState)(null),l=a(me(s?.themeMode)),[u,d]=(0,x.useState)({}),[de,fe]=(0,x.useState)(null),[p,pe]=(0,x.useState)(null),[m,h]=(0,x.useState)(null),ge=(0,x.useRef)(0);(0,x.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,x.useEffect)(()=>(f(e=>new Promise(t=>{h({id:++ge.current,prompt:e,resolve:t})})),()=>f(null)),[]),(0,x.useEffect)(()=>{ne().then(c,()=>void 0)},[]),(0,x.useEffect)(()=>{he(s?.accentColor,s?.secondaryColor,l)},[s?.accentColor,s?.secondaryColor,l]);let g=s?.defaultView??ue,_e={mode:u.mode??g.mode,iconSize:u.iconSize??g.iconSize,gridSize:u.gridSize??g.gridSize,sort:`name`,sortDescending:!1,columns:de??g.columns??[`type`,`size`,`modified`]},ve=e=>d(t=>({...t,...e}));return(0,S.jsxs)(D,{children:[(0,S.jsxs)(O,{children:[(0,S.jsx)($e,{children:(0,S.jsx)(b,{size:17})}),(0,S.jsx)(k,{...le,children:ce(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,S.jsx)(y,{onChange:ve,onColumns:fe,onShowImages:pe,showImages:p??g.showImages,view:_e}),(0,S.jsx)(A,{children:(0,S.jsx)(et,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:ce(`cancel`),type:`button`,children:(0,S.jsx)(Ne,{size:12})})})]}),(0,S.jsx)(tt,{children:(0,S.jsx)(C,{extensions:i,types:T(re),typeIndex:ie,initial:ae,initialName:oe,defaultExtension:se,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:(e,t)=>r.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:p??g.showImages,fileView:_e,theme:l})}),m&&(0,S.jsx)(v,{action:m.prompt.action,delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,S.jsx)(_,{}),(0,S.jsx)(ee,{})]})}var D=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,O=i.header`
    display: flex;
    align-items: center;
    height: 44px;
    flex-shrink: 0;
    padding-left: 12px;
    background: rgba(var(--bg-rgb), 0.96);
    border-bottom: 1px solid var(--border-color);
    user-select: none;
    -webkit-user-select: none;
`,$e=i.span`
    display: grid;
    place-items: center;
    width: 26px;
    height: 26px;
    flex-shrink: 0;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: rgba(var(--accent-rgb), 0.08);
    box-shadow: 0 0 18px rgba(var(--accent-rgb), 0.12);
`,k=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,A=i.div`
    display: flex;
    flex-shrink: 0;
`,et=i.button`
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
`,tt=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{E as PickerWindow};