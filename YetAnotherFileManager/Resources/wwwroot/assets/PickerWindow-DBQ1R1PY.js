import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{_ as t,d as n,f as r,g as i,i as ee,r as a,s as o,u as te}from"./dist-sR-t6Emc.js";import{u as ne}from"./concepts-69Rb8xko.js";import{A as re,B as ie,D as ae,G as oe,J as se,K as ce,R as s,T as le,_ as c,bt as l,i as ue,k as u,n as d,o as de,p as fe,u as f}from"./selectionMenu-3N_AfRQo.js";import{C as p,a as m,c as pe,d as h,k as g,l as _,r as v,w as y}from"./theme-Ocob2ChL.js";import{B as me,J as b,V as he,dt as ge,ft as _e,pt as ve,t as ye}from"./FileList-wM4BPYTZ.js";import{c as be,d as x,f as xe,l as Se,o as S,p as C,u as Ce}from"./main-Cg1OBa00.js";import{K as we,a as Te,d as Ee,i as De,it as Oe,j as ke,r as Ae,st as je,t as w,v as Me}from"./Icons-NY0trHLk.js";import{t as Ne}from"./GalleryView-DkQl7HJJ.js";import{t as Pe}from"./OverviewView-Cc872J0X.js";var T=e(t(),1),Fe=g(),E=n();function Ie({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:i,types:ee,typeIndex:a=0,inline:o=!1,places:l,fileView:de,showImages:fe,save:f=!1,initialName:m=``,defaultExtension:pe=``,theme:g,onCancel:_,onSelect:v}){let x=te(),xe=d(`picker`),S=t===`file`,C=i??[],w=ee??[],Ie=pe.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[O,$e]=(0,T.useState)(()=>{if(w.length===0)return C.length===0?`all`:`supported`;let e=e=>e.length===0?-1:w.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase()))),t=m.lastIndexOf(`.`),n=t>0?e([m.slice(t).toLowerCase()]):-1;if(n>=0)return n;if(a>=2&&a<=w.length)return a-1;let r=e(Ie);return r>=0?r:a>=1&&a<=w.length?a-1:0}),et=typeof O==`number`?w[O]??null:null,k=typeof O==`number`?et?.extensions??[]:O===`supported`?C:[],A=typeof O==`number`?O+1:0,tt=e=>w.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),nt=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},rt=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:tt(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},it=e=>{$e(e),R(t=>rt(t,typeof e==`number`?w[e]??null:null))},[j,M]=(0,T.useState)(e),[N,at]=(0,T.useState)(null),[ot,P]=(0,T.useState)(!0),[st,ct]=(0,T.useState)(null),[F,I]=(0,T.useState)(()=>new Set),[L,lt]=(0,T.useState)(l??[]),[ut,dt]=(0,T.useState)([]),[ft,pt]=(0,T.useState)([]),[mt,ht]=(0,T.useState)([]),[gt,_t]=(0,T.useState)([]),[vt,R]=(0,T.useState)(m),[yt,bt]=(0,T.useState)(null),[z,xt]=(0,T.useState)(`files`),[St,Ct]=(0,T.useState)(0),[B,V]=(0,T.useState)(le),[wt,H]=(0,T.useState)(0),[Tt,U]=(0,T.useState)(0),[Et,Dt]=(0,T.useState)(0),[W,Ot]=(0,T.useState)(null),[kt,At]=(0,T.useState)(null),[jt,Mt]=(0,T.useState)(0),[G,Nt]=(0,T.useState)(null),[Pt,Ft]=(0,T.useState)(re.imageStripHeight);(0,T.useEffect)(()=>{ne().then(Nt,()=>Nt(null))},[]),(0,T.useEffect)(()=>{l?lt(l):oe().then(lt,()=>lt([]))},[l]),(0,T.useEffect)(()=>{ie().then(dt,()=>dt([])),ce().then(pt,()=>pt([]))},[]),(0,T.useEffect)(()=>{let e=!0;return P(!0),ct(null),I(new Set),f||R(S?``:h(j)),s(j||void 0,!1).then(t=>{e&&(at(t),M(t.path),f||R(S?``:h(t.path)),P(!1))},t=>{e&&(ct(t instanceof Error?t.message:String(t)),P(!1))}),()=>{e=!1}},[j,St,S]),(0,T.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),V(e=>({...e,open:!0})),H(e=>e+1);return}if(e.key===`Escape`){B.open?(V(e=>({...e,open:!1,query:``})),U(0)):_();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),q();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),J();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),V(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),H(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||Jt()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,T.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),q()):(e.button===4||e.button===9)&&(e.preventDefault(),J())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let K=e=>{let t=e.trim();t.length!==0&&p(t)!==p(j)&&(ht(e=>[...e,j]),_t([]),xt(`files`),M(t))},q=()=>{let e=mt.at(-1);e!==void 0&&(ht(e=>e.slice(0,-1)),_t(e=>[j,...e]),M(e))},J=()=>{let e=gt[0];e!==void 0&&(_t(e=>e.slice(1)),ht(e=>[...e,j]),M(e))};(0,T.useEffect)(()=>{if(r.available)return r.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:q();break;case`forward`:J()}})});let Y=N?.path??j,It=N?.parent??(j?y(j):null);(0,T.useEffect)(()=>{r.available&&Y&&r.send({type:`fs.watch`,payload:{paths:[Y],owner:`picker`}})},[Y]),(0,T.useEffect)(()=>{if(r.available&&Y)return r.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&p(t.data.path)===p(Y)&&s(Y,!1).then(e=>{at(e);let t=new Set(e.entries.map(e=>e.fullPath));I(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Y]);let Lt=(N?.entries??[]).filter(e=>e.isDirectory||S&&(k.length===0||k.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Rt=N?{...N,entries:Lt}:null,zt=B.open&&B.query.length>0,X=(0,T.useMemo)(()=>zt?Lt.filter(e=>ae(e.name,B)).map(e=>e.fullPath):[],[zt,Lt,B]);(0,T.useEffect)(()=>{U(0)},[B.query,B.matchCase,B.regex,N?.path]);let Z=X.length===0?-1:Math.min(Tt,X.length-1),Bt=(0,T.useMemo)(()=>({...B,currentPath:Z>=0?X[Z]:null}),[B,Z,X]),Q=G?.defaultView??re,Vt=de??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},Ht=(fe??Q.showImages)&&Vt.mode===`list`,Ut=!S||k.length===0,Wt=F.size===1?[...F][0]:null,Gt=Wt!==null&&(N?.entries.find(e=>e.fullPath===Wt)?.isDirectory??!1),Kt=!f&&Ut&&(Gt||F.size===0&&vt.trim().length===0),$=vt.trim(),qt=$.length>0?Re($)?$:Le(Y,$):null,Jt=()=>{if(ot||st)return;if(f){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){c(x(`the_file_name_is_not_valid`));return}let t=k[0]??Ie[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=Re(e)?e+n:Le(Y,e+n);ge([r]).then(e=>e[0]?.exists?bt(r):v([r],A),()=>v([r],A));return}let e=n?[...F]:[...F].slice(0,1);e.length>0?v(e,A):qt!==null&&$!==h(Y)?v([qt],A):Ut&&Y&&v([Y])},Yt=(0,T.useCallback)(e=>{I(new Set(e));let t=e.length===1&&(y(e[0])!==Y||N?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(f&&t)?R(h(e[0])):f||R(e.length===0&&!S?h(Y):``)},[Y,S,N,f]),Xt=e=>{e.length!==0&&(f?R(h(e[0])):v(e,A))},Zt=e=>{N?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):se(e)},Qt=e=>{N?.entries.find(t=>t.fullPath===e)?.isDirectory?K(e):f?R(h(e)):S&&v([e],A)},$t=e=>R(e),en=async e=>{let t=W;if(Ot(null),!t||!Y)return;let n=e===null?await ve(Y):await _e(Y,e);n.ok&&n.path!==null&&(V(e=>({...e,open:!1,query:``})),e!==null&&$e(`all`),Ct(e=>e+1),window.setTimeout(()=>{At(n.path),Mt(e=>e+1)},120))},tn=()=>{V(e=>({...e,open:!0})),H(e=>e+1)},nn=e=>{U(t=>X.length===0?0:(t+e+X.length)%X.length)},rn=e=>(0,E.jsxs)(qe,{children:[(0,E.jsxs)(Je,{children:[(0,E.jsx)(Ye,{children:x(S||f?`file_name`:`folder_3`)}),(0,E.jsx)(Xe,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),Jt())},spellCheck:!1,value:vt}),S&&(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Ye,{children:x(`files_of_type`)}),(0,E.jsx)(me,{onChange:e=>it(e===`all`||e===`supported`?e:Number(e)),options:w.length>0?[...w.map((e,t)=>({value:String(t),label:nt(e)})),{value:`all`,label:`${x(`all_files`)} (*.*)`}]:[...C.length>0?[{value:`supported`,label:`${x(`supported_files`)} (${C.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${x(`all_files`)} (*.*)`}],value:String(O)})]})]}),(0,E.jsxs)(Ze,{children:[(0,E.jsx)(Qe,{onClick:_,type:`button`,children:x(`cancel`)}),(0,E.jsxs)(Qe,{$primary:!0,disabled:ot||st!==null||(f?$.length===0:F.size===0&&$.length===0&&!Ut),onClick:Jt,type:`button`,children:[(0,E.jsx)(Ee,{size:12}),x(f?`save_as`:Kt?`select_this_folder`:`select_this_file`)]})]}),(0,E.jsx)(ue,{confirmLabel:x(`overwrite`),message:x(`a_file_with_that_name_already_exists_overwrite_it`),onCancel:()=>bt(null),onConfirm:()=>{let e=yt;bt(null),e&&v([e],A)},open:yt!==null,title:x(`overwrite`)})]}),an=(0,E.jsxs)(Be,{$inline:o,role:`dialog`,"aria-modal":!o,children:[!o&&(0,E.jsxs)(Ve,{children:[(0,E.jsxs)(He,{children:[(0,E.jsx)(ke,{size:16}),x(f?`save_as`:S?`choose_a_file`:`choose_a_folder`)]}),(0,E.jsx)(Ue,{onClick:_,title:x(`cancel`),type:`button`,children:(0,E.jsx)(Me,{size:12})})]}),(0,E.jsxs)(We,{children:[(0,E.jsx)(be,{activeKind:z===`overview`?`home`:z===`gallery`?`gallery`:`files`,currentPath:Y,drives:ut,hiddenViews:S?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:L.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>K(e),onOpenView:e=>{e===`home`?(I(new Set),R(S?``:h(Y)),xt(`overview`)):e===`gallery`&&S&&(I(new Set),R(``),xt(`gallery`))},places:L,recent:ft,recentLimit:10}),(0,E.jsx)(Ge,{children:z===`overview`?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Pe,{drives:ut,theme:g,historyVersion:0,homePath:L.find(e=>e.kind===`home`)?.path??``,onOpen:e=>K(e),onPick:S?e=>v([e],A):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:Yt,places:L,readOnly:!0,recent:ft,recentLimit:10,visibilityVersion:0}),rn(R)]}):z===`gallery`?(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(Ne,{onPick:e=>v([e],A),onSelectionChange:Yt,showCheckboxes:G?.showCheckboxes??!0,view:{...u,columns:[]}}),rn(R)]}):(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)(Ke,{children:[(0,E.jsx)(D,{disabled:mt.length===0,onClick:q,title:x(`back`),type:`button`,children:(0,E.jsx)(Ae,{})}),(0,E.jsx)(D,{disabled:gt.length===0,onClick:J,title:x(`forward`),type:`button`,children:(0,E.jsx)(De,{})}),(0,E.jsx)(D,{disabled:!It,onClick:()=>It&&K(It),title:x(`up_one_level`),type:`button`,children:(0,E.jsx)(Te,{})}),(0,E.jsx)(Se,{onNavigate:K,path:Y}),(0,E.jsx)(D,{onClick:e=>Ot({x:e.clientX,y:e.clientY}),title:x(`new_folder_or_file`),type:`button`,children:(0,E.jsx)(Oe,{})}),(0,E.jsx)(D,{onClick:tn,title:x(`search`),type:`button`,children:(0,E.jsx)(je,{})}),xe.available&&(0,E.jsx)(D,{onClick:e=>xe.open(e.clientX,e.clientY),title:x(`selection_menu`),type:`button`,children:(0,E.jsx)(we,{})})]}),B.open&&(0,E.jsx)(Ce,{current:Z,focusToken:wt,matchCase:B.matchCase,mode:B.mode,onClose:()=>{V(e=>({...e,open:!1,query:``})),U(0)},onMatchCase:()=>V(e=>({...e,matchCase:!e.matchCase})),onMode:()=>V(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>nn(1),onPrevious:()=>nn(-1),onQuery:e=>V(t=>({...t,query:e})),onRegex:()=>V(e=>({...e,regex:!e.regex})),query:B.query,regex:B.regex,total:X.length,onSelectMatches:()=>Dt(e=>e+1)}),(0,E.jsx)(ye,{allowBackgroundMenu:!0,confirmDelete:G?.confirmDelete??!1,enableShortcuts:!0,error:st,find:Bt,selectMatchesToken:Et,imageStripHeight:Pt,loading:ot,listing:Rt,onImageStripHeight:Ft,onOpen:Qt,onOpenExternally:Zt,onOpenFile:Qt,onSelectEntry:Xt,onRefresh:()=>Ct(e=>e+1),onSelectionChange:Yt,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:G?.openOnSingleClick??!1,refreshToken:St,pendingRename:kt,pendingRenameToken:jt,showCheckboxes:G?.showCheckboxes??!0,showDetails:!1,showImages:Ht,singleSelect:!n,view:Vt}),rn($t)]})})]}),W&&(0,E.jsx)(he,{creationOnly:!0,directory:Y,menu:{x:W.x,y:W.y,paths:[],background:!0},onClose:()=>Ot(null),onCreateFile:S?e=>void en(e):void 0,onCreateFolder:()=>void en(null),shortcuts:b})]});return o?an:(0,Fe.createPortal)((0,E.jsx)(ze,{onPointerDown:e=>{e.target===e.currentTarget&&_()},children:an}),document.body)}function Le(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function Re(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}var ze=i.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${de}
`,Be=i.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:fe}
    ${({$inline:e})=>e?``:f}
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
`;function O(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function $e({mode:e,save:t=!1,multiple:n,extensions:i,types:ie,typeIndex:ae=0,initial:oe,initialName:se=``,defaultExtension:ce=``}){let s=te(),le=o(),[c,ue]=(0,T.useState)(null),u=a(m(c?.themeMode)),[d,de]=(0,T.useState)({}),[fe,f]=(0,T.useState)(null),[p,h]=(0,T.useState)(null),[g,y]=(0,T.useState)(null),me=(0,T.useRef)(0);(0,T.useEffect)(()=>{r.send({type:`app.ready`})},[]),(0,T.useEffect)(()=>(l(e=>new Promise(t=>{y({id:++me.current,prompt:e,resolve:t})})),()=>l(null)),[]),(0,T.useEffect)(()=>{ne().then(ue,()=>void 0)},[]),(0,T.useEffect)(()=>{v(c?.accentColor,c?.secondaryColor,u)},[c?.accentColor,c?.secondaryColor,u]),(0,T.useEffect)(()=>{_(c?.timeFormat,c?.timeFormatPattern),pe(c?.relativeTime,c?.relativeTimeWindowMinutes)},[c?.timeFormat,c?.timeFormatPattern,c?.relativeTime,c?.relativeTimeWindowMinutes]);let b=c?.defaultView??re,he={mode:d.mode??b.mode,iconSize:d.iconSize??b.iconSize,gridSize:d.gridSize??b.gridSize,sort:`name`,sortDescending:!1,columns:fe??b.columns??[`type`,`size`,`modified`]},ge=e=>de(t=>({...t,...e}));return(0,E.jsxs)(et,{children:[(0,E.jsxs)(k,{children:[(0,E.jsx)(A,{children:(0,E.jsx)(w,{size:17})}),(0,E.jsx)(tt,{...le,children:s(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,E.jsx)(S,{onChange:ge,onColumns:f,onShowImages:h,showImages:p??b.showImages,view:he}),(0,E.jsx)(nt,{children:(0,E.jsx)(rt,{onClick:()=>r.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:s(`cancel`),type:`button`,children:(0,E.jsx)(Me,{size:12})})})]}),(0,E.jsx)(it,{children:(0,E.jsx)(Ie,{extensions:i,types:O(ie),typeIndex:ae,initial:oe,initialName:se,defaultExtension:ce,inline:!0,mode:e,multiple:n,onCancel:()=>r.send({type:`pick.cancel`}),onSelect:(e,t)=>r.send({type:`pick.submit`,payload:{paths:e,type:t}}),save:t,showImages:p??b.showImages,fileView:he,theme:u})}),g&&(0,E.jsx)(C,{action:g.prompt.action,delaySeconds:g.prompt.delaySeconds,hits:g.prompt.hits,onCancel:()=>{g.resolve(!1),y(null)},onConfirm:()=>{g.resolve(!0),y(null)},permanent:g.prompt.permanent},g.id),(0,E.jsx)(xe,{}),(0,E.jsx)(x,{}),(0,E.jsx)(ee,{})]})}var et=i.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
`,k=i.header`
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
`,tt=i.span`
    flex: 1;
    min-width: 0;
    margin-left: 10px;
    overflow: hidden;
    color: var(--text-primary);
    font-size: 13px;
    font-weight: 600;
    text-overflow: ellipsis;
    white-space: nowrap;
`,nt=i.div`
    display: flex;
    flex-shrink: 0;
`,rt=i.button`
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
`,it=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`;export{$e as PickerWindow};