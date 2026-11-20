import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as ee,r as a,s as o,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-dHnjk6-J.js";import{E as re,G as ie,L as s,O as ae,W as oe,_ as se,i as ce,k as le,n as c,o as l,p as u,q as d,u as ue,w as de,yt as f,z as fe}from"./selectionMenu-BAXkPrI1.js";import{D as p,S as pe,a as m,r as me,u as h,x as g}from"./theme-bw14b3xc.js";import{B as he,J as _,V as ge,dt as _e,ft as ve,pt as ye,t as be}from"./FileList-B1LK90IW.js";import{c as xe,d as v,f as y,l as Se,o as b,u as Ce}from"./main-DJgyw3e7.js";import{K as we,a as Te,d as Ee,i as De,it as Oe,j as ke,r as Ae,st as je,t as x,v as Me}from"./Icons-NY0trHLk.js";import{t as Ne}from"./GalleryView-DA2CONu_.js";import{t as Pe}from"./OverviewView-CiX43j0i.js";var S=e(t(),1),Fe=p(),C=n();function w({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,types:ee,typeIndex:a=0,inline:o=!1,places:l,fileView:u,showImages:ue,save:f=!1,initialName:p=``,defaultExtension:m=``,theme:me,onCancel:v,onSelect:y}){let b=te(),x=c(`picker`),w=t===`file`,E=i??[],D=ee??[],[O,Qe]=(0,S.useState)(()=>{if(D.length===0)return E.length===0?`all`:`supported`;let e=e=>e.length===0?-1:D.findIndex(t=>t.extensions.some(t=>t.toLowerCase()===e)),t=p.lastIndexOf(`.`),n=t>0?e(p.slice(t).toLowerCase()):-1;if(n>=0)return n;if(a>=2&&a<=D.length)return a-1;let r=e(m.startsWith(`.`)?m.toLowerCase():`.${m.toLowerCase()}`);return r>=0?r:a>=1&&a<=D.length?a-1:0}),$e=typeof O==`number`?D[O]??null:null,k=typeof O==`number`?$e?.extensions??[]:O===`supported`?E:[],A=typeof O==`number`?O+1:0,et=e=>D.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),tt=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},nt=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:et(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},rt=e=>{Qe(e),R(t=>nt(t,typeof e==`number`?D[e]??null:null))},[j,M]=(0,S.useState)(e),[N,it]=(0,S.useState)(null),[at,ot]=(0,S.useState)(!0),[st,ct]=(0,S.useState)(null),[P,F]=(0,S.useState)(()=>new Set),[I,lt]=(0,S.useState)(l??[]),[ut,dt]=(0,S.useState)([]),[ft,pt]=(0,S.useState)([]),[mt,ht]=(0,S.useState)([]),[gt,_t]=(0,S.useState)([]),[L,R]=(0,S.useState)(p),[vt,yt]=(0,S.useState)(null),[z,B]=(0,S.useState)(`files`),[bt,xt]=(0,S.useState)(0),[V,H]=(0,S.useState)(de),[St,Ct]=(0,S.useState)(0),[wt,U]=(0,S.useState)(0),[Tt,Et]=(0,S.useState)(0),[W,Dt]=(0,S.useState)(null),[Ot,kt]=(0,S.useState)(null),[At,jt]=(0,S.useState)(0),[G,Mt]=(0,S.useState)(null),[Nt,Pt]=(0,S.useState)(le.imageStripHeight);(0,S.useEffect)(()=>{ne().then(Mt,()=>Mt(null))},[]),(0,S.useEffect)(()=>{l?lt(l):oe().then(lt,()=>lt([]))},[l]),(0,S.useEffect)(()=>{fe().then(dt,()=>dt([])),ie().then(pt,()=>pt([]))},[]),(0,S.useEffect)(()=>{let e=!0;return ot(!0),ct(null),F(new Set),f||R(w?``:h(j)),s(j||void 0,!1).then(t=>{e&&(it(t),M(t.path),f||R(w?``:h(t.path)),ot(!1))},t=>{e&&(ct(t instanceof Error?t.message:String(t)),ot(!1))}),()=>{e=!1}},[j,bt,w]),(0,S.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),H(e=>({...e,open:!0})),Ct(e=>e+1);return}if(e.key===`Escape`){V.open?(H(e=>({...e,open:!1,query:``})),U(0)):v();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),q();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),J();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),H(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),Ct(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||qt()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,S.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),q()):(e.button===4||e.button===9)&&(e.preventDefault(),J())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let K=e=>{let t=e.trim();t.length!==0&&g(t)!==g(j)&&(ht(e=>[...e,j]),_t([]),B(`files`),M(t))},q=()=>{let e=mt.at(-1);e!==void 0&&(ht(e=>e.slice(0,-1)),_t(e=>[j,...e]),M(e))},J=()=>{let e=gt[0];e!==void 0&&(_t(e=>e.slice(1)),ht(e=>[...e,j]),M(e))};(0,S.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:q();break;case`forward`:J()}})});let Y=N?.path??j,Ft=N?.parent??(j?pe(j):null);(0,S.useEffect)(()=>{r.available&&Y&&r.send({type:`fs.watch`,payload:{paths:[Y],owner:`picker`}})},[Y]),(0,S.useEffect)(()=>{if(r.available&&Y)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&g(t.data.path)===g(Y)&&s(Y,!1).then(e=>{it(e);let t=new Set(e.entries.map(e=>e.fullPath));F(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Y]);let It=(N?.entries??[]).filter(e=>e.isDirectory||w&&(k.length===0||k.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Lt=N?{...N,entries:It}:null,Rt=V.open&&V.query.length>0,X=(0,S.useMemo)(()=>Rt?It.filter(e=>re(e.name,V)).map(e=>e.fullPath):[],[Rt,It,V]);(0,S.useEffect)(()=>{U(0)},[V.query,V.matchCase,V.regex,N?.path]);let Z=X.length===0?-1:Math.min(wt,X.length-1),zt=(0,S.useMemo)(()=>({...V,currentPath:Z>=0?X[Z]:null}),[V,Z,X]),Q=G?.defaultView??le,Bt=u??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Vt=(ue??Q.showImages)&&Bt.mode===`list`,Ht=!w||k.length===0,Ut=P.size===1?[...P][0]:null,Wt=Ut!==null&&(N?.entries.find(e=>e.fullPath===Ut)?.isDirectory??!1),Gt=!f&&Ht&&(Wt||P.size===0&&L.trim().length===0),$=L.trim(),Kt=$.length>0?Le($)?$:Ie(Y,$):null,qt=()=>{if(at||st)return;if(f){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){se(b(`the_file_name_is_not_valid`));return}let t=k[0]??m,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=Le(e)?e+n:Ie(Y,e+n);_e([r]).then(e=>e[0]?.exists?yt(r):y([r],A),()=>y([r],A));return}let e=n?[...P]:[...P].slice(0,1);e.length>0?y(e,A):Kt!==null&&$!==h(Y)?y([Kt],A):Ht&&Y&&y([Y])},Jt=(0,S.useCallback)(e=>{F(new Set(e));let t=e.length===1&&(pe(e[0])!==Y||N?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(f&&t)?R(h(e[0])):f||R(e.length===0&&!w?h(Y):``)},[Y,w,N,f]),Yt=e=>{e.length!==0&&(f?R(h(e[0])):y(e,A))},Xt=e=>{N?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):d(e)},Zt=e=>{N?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):f?R(h(e)):w&&y([e],A)},Qt=e=>R(e),$t=async e=>{let t=W;if(Dt(null),!t||!Y)return;let n=e===null?await ye(Y):await ve(Y,e);n.ok&&n.path!==null&&(H(e=>({...e,open:!1,query:``})),e!==null&&Qe(`all`),xt(e=>e+1),window.setTimeout(()=>{kt(n.path),jt(e=>e+1)},120))},en=()=>{H(e=>({...e,open:!0})),Ct(e=>e+1)},tn=e=>{U(t=>X.length===0?0:(t+e+X.length)%X.length)},nn=e=>(0,C.jsxs)(Ke,{children:[(0,C.jsxs)(qe,{children:[(0,C.jsx)(Je,{children:b(w||f?`file_name`:`folder_3`)}),(0,C.jsx)(Ye,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),qt())},spellCheck:!1,value:L}),w&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Je,{children:b(`files_of_type`)}),(0,C.jsx)(he,{onChange:e=>rt(e===`all`||e===`supported`?e:Number(e)),options:D.length>0?[...D.map((e,t)=>({value:String(t),label:tt(e)})),{value:`all`,label:`${b(`all_files`)} (*.*)`}]:[...E.length>0?[{value:`supported`,label:`${b(`supported_files`)} (${E.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${b(`all_files`)} (*.*)`}],value:String(O)})]})]}),(0,C.jsxs)(Xe,{children:[(0,C.jsx)(Ze,{onClick:v,type:`button`,children:b(`cancel`)}),(0,C.jsxs)(Ze,{$primary:!0,disabled:at||st!==null||(f?$.length===0:P.size===0&&$.length===0&&!Ht),onClick:qt,type:`button`,children:[(0,C.jsx)(Ee,{size:12}),b(f?`save_as`:Gt?`select_this_folder`:`select_this_file`)]})]}),(0,C.jsx)(ce,{confirmLabel:b(`overwrite`),message:b(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>yt(null),onConfirm:()=>{let e=vt;yt(null),e&&y([e],A)},open:vt!==null,title:b(`overwrite`)})]}),rn=(0,C.jsxs)(ze,{$inline:o,role:`dialog`,"aria-modal":!o,children:[!o&&(0,C.jsxs)(Be,{children:[(0,C.jsxs)(Ve,{children:[(0,C.jsx)(ke,{size:16}),b(f?`save_as`:w?`choose_a_file`:`choose_a_folder`)]}),(0,C.jsx)(He,{onClick:v,title:b(`cancel`),type:`button`,children:(0,C.jsx)(Me,{size:12})})]}),(0,C.jsxs)(Ue,{children:[(0,C.jsx)(xe,{activeKind:z===`overview`?`home`:z===`gallery`?`gallery`:`files`,currentPath:Y,drives:ut,hiddenViews:w?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:I.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>K(e),onOpenView:e=>{e===`home`?(F(new Set),R(w?``:h(Y)),B(`overview`)):e===`gallery`&&w&&(F(new Set),R(``),B(`gallery`))},places:I,recent:ft,recentLimit:10}),(0,C.jsx)(We,{children:z===`overview`?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Pe,{drives:ut,theme:me,historyVersion:0,homePath:I.find(e=>e.kind===`home`)?.path??``,onOpen:e=>K(e),onPick:w?e=>y([e],A):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Jt,places:I,readOnly:!0,recent:ft,recentLimit:10,visibilityVersion:0}),nn(R)]}):z===`gallery`?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ne,{onPick:e=>y([e],A),onSelectionChange:Jt,showCheckboxes:G?.showCheckboxes??!0,view:{...ae,columns:[]}}),nn(R)]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(Ge,{children:[(0,C.jsx)(T,{disabled:mt.length===0,onClick:q,title:b(`back`),type:`button`,children:(0,C.jsx)(Ae,{})}),(0,C.jsx)(T,{disabled:gt.length===0,onClick:J,title:b(`forward`),type:`button`,children:(0,C.jsx)(De,{})}),(0,C.jsx)(T,{disabled:!Ft,onClick:()=>Ft&&K(Ft),title:b(`up_one_level`),type:`button`,children:(0,C.jsx)(Te,{})}),(0,C.jsx)(Se,{onNavigate:K,path:Y}),(0,C.jsx)(T,{onClick:e=>Dt({x:e.clientX,y:e.clientY}),title:b(`new_folder_or_file`),type:`button`,children:(0,C.jsx)(Oe,{})}),(0,C.jsx)(T,{onClick:en,title:b(`search`),type:`button`,children:(0,C.jsx)(je,{})}),x.available&&(0,C.jsx)(T,{onClick:e=>x.open(e.clientX,e.clientY),title:b(`selection_menu`),type:`button`,children:(0,C.jsx)(we,{})})]}),V.open&&(0,C.jsx)(Ce,{current:Z,focusToken:St,matchCase:V.matchCase,mode:V.mode,onClose:()=>{H(e=>({...e,open:!1,query:``})),U(0)},onMatchCase:()=>H(e=>({...e,matchCase:!e.matchCase})),onMode:()=>H(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>tn(1),onPrevious:()=>tn(-1),onQuery:e=>H(t=>({...t,query:e})),onRegex:()=>H(e=>({...e,regex:!e.regex})),query:V.query,regex:V.regex,total:X.length,onSelectMatches:()=>Et(e=>e+1)}),(0,C.jsx)(be,{allowBackgroundMenu:!0,confirmDelete:G?.confirmDelete??!1,enableShortcuts:!0,error:st,find:zt,selectMatchesToken:Tt,imageStripHeight:Nt,loading:at,listing:Lt,onImageStripHeight:Pt,onOpen:Zt,onOpenExternally:Xt,onOpenFile:Zt,onSelectEntry:Yt,onRefresh:()=>xt(e=>e+1),onSelectionChange:Jt,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:G?.openOnSingleClick??!1,refreshToken:bt,pendingRename:Ot,pendingRenameToken:At,showCheckboxes:G?.showCheckboxes??!0,showDetails:!1,showImages:Vt,singleSelect:!n,view:Bt}),nn(Qt)]})})]}),W&&(0,C.jsx)(ge,{creationOnly:!0,directory:Y,menu:{x:W.x,y:W.y,paths:[],background:!0},onClose:()=>Dt(null),onCreateFile:w?e=>void $t(e):void 0,onCreateFolder:()=>void $t(null),shortcuts:_})]});return o?rn:(0,Fe.createPortal)((0,C.jsx)(Re,{onPointerDown:e=>{e.target===e.currentTarget&&v()},children:rn}),document.body)}function Ie(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Le(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var Re=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${l}
`,ze=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:u}
    ${({$inline:e})=>e?``:ue}
`,Be=i.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
`,Ve=i.span`
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;

    svg {
        color: var(--text-muted);
    }
`,He=i.button`
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
`,Ue=i.div`
    position: relative;
    display: flex;
    flex: 1;
    min-height: 0;
`,We=i.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-left: 56px;
`,Ge=i.header`
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 12px 18px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
`,T=i.button`
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
`,Ke=i.footer`    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 16px;
    border-top: 1px solid var(--border-color);
    background: rgba(var(--bg-rgb), 0.58);
`,qe=i.div`
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 8px 10px;

    > button {
        justify-self: stretch;
    }
`,Je=i.span`
    flex-shrink: 0;
    color: var(--text-secondary);
    font-size: 12px;
`,Ye=i.input`
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
`,Xe=i.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,Ze=i.button`
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
`;function E(e){if(!e)return[];try{let t=JSON.parse(e);return Array.isArray(t)?t.flatMap(e=>{if(typeof e!=`object`||!e)return[];let t=e;return[{label:typeof t.label==`string`?t.label:``,extensions:Array.isArray(t.extensions)?t.extensions.filter(e=>typeof e==`string`&&e.length>0):[]}]}):[]}catch{return[]}}function D({mode:e,save:t=!1,multiple:n,extensions:i,types:re,typeIndex:ie=0,initial:s,initialName:ae=``,defaultExtension:oe=``}){let se=te(),ce=o(),[c,l]=(0,S.useState)(null),u=a(m(c?.themeMode)),[d,ue]=(0,S.useState)({}),[de,fe]=(0,S.useState)(null),[p,pe]=(0,S.useState)(null),[h,g]=(0,S.useState)(null),he=(0,S.useRef)(0);(0,S.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,S.useEffect)(()=>(f(e=>new Promise(t=>{g({id:++he.current,prompt:e,resolve:t})})),()=>f(null)),[]),(0,S.useEffect)(()=>{ne().then(l,()=>void 0)},[]),(0,S.useEffect)(()=>{me(c?.accentColor,c?.secondaryColor,u)},[c?.accentColor,c?.secondaryColor,u]);let _=c?.defaultView??le,ge={mode:d.mode??_.mode,iconSize:d.iconSize??_.iconSize,gridSize:d.gridSize??_.gridSize,sort:`name`,sortDescending:!1,columns:de??_.columns??[`type`,`size`,`modified`]},_e=e=>ue(t=>({...t,...e}));return(0,C.jsxs)(O,{children:[(0,C.jsxs)(Qe,{children:[(0,C.jsx)($e,{children:(0,C.jsx)(x,{size:17})}),(0,C.jsx)(k,{...ce,children:se(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,C.jsx)(b,{onChange:_e,onColumns:fe,onShowImages:pe,showImages:p??_.showImages,view:ge}),(0,C.jsx)(A,{children:(0,C.jsx)(et,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:se(`cancel`),type:`button`,children:(0,C.jsx)(Me,{size:12})})})]}),(0,C.jsx)(tt,{children:(0,C.jsx)(w,{extensions:i,types:E(re),typeIndex:ie,initial:s,initialName:ae,defaultExtension:oe,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:(e,t)=>r.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:p??_.showImages,fileView:ge,theme:u})}),h&&(0,C.jsx)(y,{action:h.prompt.action,delaySeconds:h.prompt.delaySeconds,hits:h.prompt.hits,onCancel:()=>{h.resolve(!1),g(null)},onConfirm:()=>{h.resolve(!0),g(null)},permanent:h.prompt.permanent},h.id),(0,C.jsx)(v,{}),(0,C.jsx)(ee,{})]})}var O=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,Qe=i.header`
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
`;export{D as PickerWindow};