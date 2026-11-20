import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as ee,r as a,s as o,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-dHnjk6-J.js";import{E as re,G as ie,L as ae,O as oe,W as se,_ as s,i as ce,k as le,n as c,o as l,p as u,q as d,u as ue,w as de,yt as f,z as fe}from"./selectionMenu-BAXkPrI1.js";import{D as p,S as pe,a as me,r as he,u as m,x as h}from"./theme-bw14b3xc.js";import{B as ge,J as g,V as _e,dt as ve,ft as ye,pt as be,t as xe}from"./FileList-B1LK90IW.js";import{c as Se,d as _,f as v,l as Ce,o as y,u as we}from"./main-BmlDoN9i.js";import{K as Te,a as Ee,d as De,i as Oe,it as ke,j as Ae,r as je,st as Me,t as b,v as Ne}from"./Icons-NY0trHLk.js";import{t as Pe}from"./GalleryView-CM6Y74h9.js";import{t as Fe}from"./OverviewView-CiX43j0i.js";var x=e(t(),1),Ie=p(),S=n();function C({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,types:ee,typeIndex:a=0,inline:o=!1,places:l,fileView:u,showImages:ue,save:f=!1,initialName:p=``,defaultExtension:me=``,theme:he,onCancel:_,onSelect:v}){let y=te(),b=c(`picker`),C=t===`file`,T=i??[],E=ee??[],[D,O]=(0,x.useState)(()=>E.length===0?T.length===0?`all`:`supported`:a>=1&&a<=E.length?a-1:0),$e=typeof D==`number`?E[D]??null:null,k=typeof D==`number`?$e?.extensions??[]:D===`supported`?T:[],A=typeof D==`number`?D+1:0,[j,M]=(0,x.useState)(e),[N,et]=(0,x.useState)(null),[tt,nt]=(0,x.useState)(!0),[rt,it]=(0,x.useState)(null),[P,F]=(0,x.useState)(()=>new Set),[I,at]=(0,x.useState)(l??[]),[ot,st]=(0,x.useState)([]),[ct,lt]=(0,x.useState)([]),[ut,dt]=(0,x.useState)([]),[ft,pt]=(0,x.useState)([]),[mt,L]=(0,x.useState)(p),[ht,R]=(0,x.useState)(null),[z,B]=(0,x.useState)(`files`),[gt,_t]=(0,x.useState)(0),[V,H]=(0,x.useState)(de),[vt,yt]=(0,x.useState)(0),[bt,U]=(0,x.useState)(0),[xt,St]=(0,x.useState)(0),[W,Ct]=(0,x.useState)(null),[wt,Tt]=(0,x.useState)(null),[Et,Dt]=(0,x.useState)(0),[G,Ot]=(0,x.useState)(null),[kt,At]=(0,x.useState)(le.imageStripHeight);(0,x.useEffect)(()=>{ne().then(Ot,()=>Ot(null))},[]),(0,x.useEffect)(()=>{l?at(l):se().then(at,()=>at([]))},[l]),(0,x.useEffect)(()=>{fe().then(st,()=>st([])),ie().then(lt,()=>lt([]))},[]),(0,x.useEffect)(()=>{let e=!0;return nt(!0),it(null),F(new Set),f||L(C?``:m(j)),ae(j||void 0,!1).then(t=>{e&&(et(t),M(t.path),f||L(C?``:m(t.path)),nt(!1))},t=>{e&&(it(t instanceof Error?t.message:String(t)),nt(!1))}),()=>{e=!1}},[j,gt,C]),(0,x.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),H(e=>({...e,open:!0})),yt(e=>e+1);return}if(e.key===`Escape`){V.open?(H(e=>({...e,open:!1,query:``})),U(0)):_();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),q();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),J();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),H(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),yt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Ut()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,x.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),q()):(e.button===4||e.button===9)&&(e.preventDefault(),J())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let K=e=>{let t=e.trim();t.length!==0&&h(t)!==h(j)&&(dt(e=>[...e,j]),pt([]),B(`files`),M(t))},q=()=>{let e=ut.at(-1);e!==void 0&&(dt(e=>e.slice(0,-1)),pt(e=>[j,...e]),M(e))},J=()=>{let e=ft[0];e!==void 0&&(pt(e=>e.slice(1)),dt(e=>[...e,j]),M(e))};(0,x.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:q();break;case`forward`:J()}})});let Y=N?.path??j,jt=N?.parent??(j?pe(j):null);(0,x.useEffect)(()=>{r.available&&Y&&r.send({type:`fs.watch`,payload:{paths:[Y],owner:`picker`}})},[Y]),(0,x.useEffect)(()=>{if(r.available&&Y)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&h(t.data.path)===h(Y)&&ae(Y,!1).then(e=>{et(e);let t=new Set(e.entries.map(e=>e.fullPath));F(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Y]);let Mt=(N?.entries??[]).filter(e=>e.isDirectory||C&&(k.length===0||k.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Nt=N?{...N,entries:Mt}:null,Pt=V.open&&V.query.length>0,X=(0,x.useMemo)(()=>Pt?Mt.filter(e=>re(e.name,V)).map(e=>e.fullPath):[],[Pt,Mt,V]);(0,x.useEffect)(()=>{U(0)},[V.query,V.matchCase,V.regex,N?.path]);let Z=X.length===0?-1:Math.min(bt,X.length-1),Ft=(0,x.useMemo)(()=>({...V,currentPath:Z>=0?X[Z]:null}),[V,Z,X]),Q=G?.defaultView??le,It=u??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Lt=(ue??Q.showImages)&&It.mode===`list`,Rt=!C||k.length===0,zt=P.size===1?[...P][0]:null,Bt=zt!==null&&(N?.entries.find(e=>e.fullPath===zt)?.isDirectory??!1),Vt=!f&&Rt&&(Bt||P.size===0&&mt.trim().length===0),$=mt.trim(),Ht=$.length>0?Re($)?$:Le(Y,$):null,Ut=()=>{if(tt||rt)return;if(f){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){s(y(`the_file_name_is_not_valid`));return}let t=me.length>0?me:k[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=Re(e)?e+n:Le(Y,e+n);ve([r]).then(e=>e[0]?.exists?R(r):v([r],A),()=>v([r],A));return}let e=n?[...P]:[...P].slice(0,1);e.length>0?v(e,A):Ht!==null&&$!==m(Y)?v([Ht],A):Rt&&Y&&v([Y])},Wt=(0,x.useCallback)(e=>{F(new Set(e));let t=e.length===1&&(pe(e[0])!==Y||N?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(f&&t)?L(m(e[0])):f||L(e.length===0&&!C?m(Y):``)},[Y,C,N,f]),Gt=e=>{e.length!==0&&(f?L(m(e[0])):v(e,A))},Kt=e=>{N?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):d(e)},qt=e=>{N?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):f?L(m(e)):C&&v([e],A)},Jt=e=>L(e),Yt=async e=>{let t=W;if(Ct(null),!t||!Y)return;let n=e===null?await be(Y):await ye(Y,e);n.ok&&n.path!==null&&(H(e=>({...e,open:!1,query:``})),e!==null&&O(`all`),_t(e=>e+1),window.setTimeout(()=>{Tt(n.path),Dt(e=>e+1)},120))},Xt=()=>{H(e=>({...e,open:!0})),yt(e=>e+1)},Zt=e=>{U(t=>X.length===0?0:(t+e+X.length)%X.length)},Qt=e=>(0,S.jsxs)(qe,{children:[(0,S.jsxs)(Je,{children:[(0,S.jsx)(Ye,{children:y(C||f?`file_name`:`folder_3`)}),(0,S.jsx)(Xe,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Ut())},spellCheck:!1,value:mt}),C&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Ye,{children:y(`files_of_type`)}),(0,S.jsx)(ge,{onChange:e=>O(e===`all`||e===`supported`?e:Number(e)),options:E.length>0?[...E.map((e,t)=>({value:String(t),label:e.label.length>0?e.label:e.extensions.map(e=>`*${e}`).join(`;`)})),{value:`all`,label:`${y(`all_files`)} (*.*)`}]:[...T.length>0?[{value:`supported`,label:`${y(`supported_files`)} (${T.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${y(`all_files`)} (*.*)`}],value:String(D)})]})]}),(0,S.jsxs)(Ze,{children:[(0,S.jsx)(Qe,{onClick:_,type:`button`,children:y(`cancel`)}),(0,S.jsxs)(Qe,{$primary:!0,disabled:tt||rt!==null||(f?$.length===0:P.size===0&&$.length===0&&!Rt),onClick:Ut,type:`button`,children:[(0,S.jsx)(De,{size:12}),y(f?`save_as`:Vt?`select_this_folder`:`select_this_file`)]})]}),(0,S.jsx)(ce,{confirmLabel:y(`overwrite`),message:y(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>R(null),onConfirm:()=>{let e=ht;R(null),e&&v([e],A)},open:ht!==null,title:y(`overwrite`)})]}),$t=(0,S.jsxs)(Be,{$inline:o,role:`dialog`,"aria-modal":!o,children:[!o&&(0,S.jsxs)(Ve,{children:[(0,S.jsxs)(He,{children:[(0,S.jsx)(Ae,{size:16}),y(f?`save_as`:C?`choose_a_file`:`choose_a_folder`)]}),(0,S.jsx)(Ue,{onClick:_,title:y(`cancel`),type:`button`,children:(0,S.jsx)(Ne,{size:12})})]}),(0,S.jsxs)(We,{children:[(0,S.jsx)(Se,{activeKind:z===`overview`?`home`:z===`gallery`?`gallery`:`files`,currentPath:Y,drives:ot,hiddenViews:C?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:I.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>K(e),onOpenView:e=>{e===`home`?(F(new Set),L(C?``:m(Y)),B(`overview`)):e===`gallery`&&C&&(F(new Set),L(``),B(`gallery`))},places:I,recent:ct,recentLimit:10}),(0,S.jsx)(Ge,{children:z===`overview`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Fe,{drives:ot,theme:he,historyVersion:0,homePath:I.find(e=>e.kind===`home`)?.path??``,onOpen:e=>K(e),onPick:C?e=>v([e],A):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Wt,places:I,readOnly:!0,recent:ct,recentLimit:10,visibilityVersion:0}),Qt(L)]}):z===`gallery`?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(Pe,{onPick:e=>v([e],A),onSelectionChange:Wt,showCheckboxes:G?.showCheckboxes??!0,view:{...oe,columns:[]}}),Qt(L)]}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(Ke,{children:[(0,S.jsx)(w,{disabled:ut.length===0,onClick:q,title:y(`back`),type:`button`,children:(0,S.jsx)(je,{})}),(0,S.jsx)(w,{disabled:ft.length===0,onClick:J,title:y(`forward`),type:`button`,children:(0,S.jsx)(Oe,{})}),(0,S.jsx)(w,{disabled:!jt,onClick:()=>jt&&K(jt),title:y(`up_one_level`),type:`button`,children:(0,S.jsx)(Ee,{})}),(0,S.jsx)(Ce,{onNavigate:K,path:Y}),(0,S.jsx)(w,{onClick:e=>Ct({x:e.clientX,y:e.clientY}),title:y(`new_folder_or_file`),type:`button`,children:(0,S.jsx)(ke,{})}),(0,S.jsx)(w,{onClick:Xt,title:y(`search`),type:`button`,children:(0,S.jsx)(Me,{})}),b.available&&(0,S.jsx)(w,{onClick:e=>b.open(e.clientX,e.clientY),title:y(`selection_menu`),type:`button`,children:(0,S.jsx)(Te,{})})]}),V.open&&(0,S.jsx)(we,{current:Z,focusToken:vt,matchCase:V.matchCase,mode:V.mode,onClose:()=>{H(e=>({...e,open:!1,query:``})),U(0)},onMatchCase:()=>H(e=>({...e,matchCase:!e.matchCase})),onMode:()=>H(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>Zt(1),onPrevious:()=>Zt(-1),onQuery:e=>H(t=>({...t,query:e})),onRegex:()=>H(e=>({...e,regex:!e.regex})),query:V.query,regex:V.regex,total:X.length,onSelectMatches:()=>St(e=>e+1)}),(0,S.jsx)(xe,{allowBackgroundMenu:!0,confirmDelete:G?.confirmDelete??!1,enableShortcuts:!0,error:rt,find:Ft,selectMatchesToken:xt,imageStripHeight:kt,loading:tt,listing:Nt,onImageStripHeight:At,onOpen:qt,onOpenExternally:Kt,onOpenFile:qt,onSelectEntry:Gt,onRefresh:()=>_t(e=>e+1),onSelectionChange:Wt,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:G?.openOnSingleClick??!1,refreshToken:gt,pendingRename:wt,pendingRenameToken:Et,showCheckboxes:G?.showCheckboxes??!0,showDetails:!1,showImages:Lt,singleSelect:!n,view:It}),Qt(Jt)]})})]}),W&&(0,S.jsx)(_e,{creationOnly:!0,directory:Y,menu:{x:W.x,y:W.y,paths:[],background:!0},onClose:()=>Ct(null),onCreateFile:C?e=>void Yt(e):void 0,onCreateFolder:()=>void Yt(null),shortcuts:g})]});return o?$t:(0,Ie.createPortal)((0,S.jsx)(ze,{onPointerDown:e=>{e.target===e.currentTarget&&_()},children:$t}),document.body)}function Le(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Re(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var ze=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${l}
`,Be=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:u}
    ${({$inline:e})=>e?``:ue}
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
`;function T(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.flatMap(e=>{if(typeof e!=`object`||!e)return[];let t=e;return[{label:typeof t.label==`string`?t.label:``,extensions:Array.isArray(t.extensions)?t.extensions.filter(e=>typeof e==`string`&&e.length>0):[]}]}):[]}catch{return[]}}function E({mode:e,save:t=!1,multiple:n,extensions:i,types:re,typeIndex:ie=0,initial:ae,initialName:oe=``,defaultExtension:se=``}){let s=te(),ce=o(),[c,l]=(0,x.useState)(null),u=a(me(c?.themeMode)),[d,ue]=(0,x.useState)({}),[de,fe]=(0,x.useState)(null),[p,pe]=(0,x.useState)(null),[m,h]=(0,x.useState)(null),ge=(0,x.useRef)(0);(0,x.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,x.useEffect)(()=>(f(e=>new Promise(t=>{h({id:++ge.current,prompt:e,resolve:t})})),()=>f(null)),[]),(0,x.useEffect)(()=>{ne().then(l,()=>void 0)},[]),(0,x.useEffect)(()=>{he(c?.accentColor,c?.secondaryColor,u)},[c?.accentColor,c?.secondaryColor,u]);let g=c?.defaultView??le,_e={mode:d.mode??g.mode,iconSize:d.iconSize??g.iconSize,gridSize:d.gridSize??g.gridSize,sort:`name`,sortDescending:!1,columns:de??g.columns??[`type`,`size`,`modified`]},ve=e=>ue(t=>({...t,...e}));return(0,S.jsxs)(D,{children:[(0,S.jsxs)(O,{children:[(0,S.jsx)($e,{children:(0,S.jsx)(b,{size:17})}),(0,S.jsx)(k,{...ce,children:s(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,S.jsx)(y,{onChange:ve,onColumns:fe,onShowImages:pe,showImages:p??g.showImages,view:_e}),(0,S.jsx)(A,{children:(0,S.jsx)(j,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:s(`cancel`),type:`button`,children:(0,S.jsx)(Ne,{size:12})})})]}),(0,S.jsx)(M,{children:(0,S.jsx)(C,{extensions:i,types:T(re),typeIndex:ie,initial:ae,initialName:oe,defaultExtension:se,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:(e,t)=>r.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:p??g.showImages,fileView:_e,theme:u})}),m&&(0,S.jsx)(v,{action:m.prompt.action,delaySeconds:m.prompt.delaySeconds,hits:m.prompt.hits,onCancel:()=>{m.resolve(!1),h(null)},onConfirm:()=>{m.resolve(!0),h(null)},permanent:m.prompt.permanent},m.id),(0,S.jsx)(_,{}),(0,S.jsx)(ee,{})]})}var D=i.div`
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
`,j=i.button`
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
`,M=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{E as PickerWindow};