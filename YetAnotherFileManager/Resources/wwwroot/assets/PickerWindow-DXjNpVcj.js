import{M as e,O as t,S as n,h as r,k as i,m as a,v as o,w as s,x as ee}from"./dist-B10j17-y.js";import{D as te,It as c,J as ne,N as re,P as ie,U as ae,V as oe,Y as se,Z as ce,_ as le,a as l,ht as ue,k as de,n as fe,o as u,p as pe,u as d,ut as f}from"./selectionMenu-B6kwQ5yB.js";import{C as p,S as m,a as h,c as me,k as g,r as he,s as _,u as v}from"./theme-DIZkp4eN.js";import{C as ge,J as y,T as _e,Y as ve,c as ye,d as be,dt as xe,f as Se,ft as Ce,h as b,l as we,m as Te,nt as Ee,o as De,u as Oe,ut as ke,w as Ae}from"./main-B1gw6GxA.js";import{M as je,a as Me,at as Ne,ct as Pe,d as Fe,i as Ie,q as Le,r as Re,t as x,y as ze}from"./Icons-C2oT0N0q.js";import{t as Be}from"./GalleryView-Cdp2Aa-n.js";import{t as Ve}from"./OverviewView-plUFDAby.js";var S=e(i(),1),He=g(),C=n();function w({initial:e=``,mode:t=`folder`,multiple:n=!1,extensions:r,types:i,typeIndex:a=0,inline:o=!1,places:c,fileView:u,showImages:pe,save:d=!1,initialName:h=``,defaultExtension:me=``,lastExtension:g=``,theme:he,onCancel:_,onSelect:be}){let b=ee(),Te=Ae(),De=fe(`picker`),x=t===`file`,w=r??[],E=i??[],st=me.split(/[;,|]/).map(e=>e.trim().replace(/^\*+/,``)).filter(e=>e.length>0).map(e=>(e.startsWith(`.`)?e:`.${e}`).toLowerCase()),[D,ct]=(0,S.useState)(()=>{if(E.length===0)return w.length===0?`all`:`supported`;let e=e=>e.length===0?-1:E.findIndex(t=>t.extensions.some(t=>e.includes(t.toLowerCase())));if(a>=2&&a<=E.length)return a-1;let t=e(st);if(t>=0)return t;let n=h.lastIndexOf(`.`),r=n>0?e([h.slice(n).toLowerCase()]):-1;if(r>=0)return r;let i=e(g.length>0?[g.startsWith(`.`)?g.toLowerCase():`.${g}`.toLowerCase()]:[]);return i>=0?i:a>=1&&a<=E.length?a-1:0}),lt=typeof D==`number`?E[D]??null:null,O=typeof D==`number`?lt?.extensions??[]:D===`supported`?w:[],ut=typeof D==`number`?D+1:0,k=(e,t=ut)=>be(e,t,O[0]??``),dt=e=>E.some(t=>t.extensions.some(t=>t.toLowerCase()===e)),ft=e=>{let t=e.extensions.map(e=>`*${e}`).join(`;`);return t.length===0?e.label:e.label.length===0||e.label.includes(`(*`)?e.label||t:`${e.label} (${t})`},pt=(e,t)=>{let n=t?.extensions[0]??``,r=e.lastIndexOf(`.`);return n.length===0||r<=0?e:dt(e.slice(r).toLowerCase())?e.slice(0,r)+n:e},mt=e=>{ct(e),H(t=>pt(t,typeof e==`number`?E[e]??null:null))},[A,j]=(0,S.useState)(e),[M,ht]=(0,S.useState)(null),[gt,_t]=(0,S.useState)(!0),[vt,yt]=(0,S.useState)(null),[N,P]=(0,S.useState)(()=>new Set),[F,bt]=(0,S.useState)(c??[]),[xt,St]=(0,S.useState)([]),[Ct,wt]=(0,S.useState)([]),[I,L]=(0,S.useState)([]),[R,z]=(0,S.useState)([]),[B,V]=(0,S.useState)(null),[Tt,H]=(0,S.useState)(()=>{let e=O[0]??``,t=h.lastIndexOf(`.`);return e.length===0||t<=0?h:dt(h.slice(t).toLowerCase())?h.slice(0,t)+e:h}),[U,Et]=(0,S.useState)(null),[W,Dt]=(0,S.useState)(`files`),[Ot,kt]=(0,S.useState)(0),[G,K]=(0,S.useState)(te),[At,jt]=(0,S.useState)(0),[Mt,Nt]=(0,S.useState)(0),[Pt,Ft]=(0,S.useState)(0),[It,Lt]=(0,S.useState)(null),[Rt,zt]=(0,S.useState)(null),[Bt,Vt]=(0,S.useState)(0),[q,Ht]=(0,S.useState)(null),[Ut,Wt]=(0,S.useState)(()=>ie().imageStripHeight);(0,S.useEffect)(()=>{ue().then(Ht,()=>Ht(null))},[]),(0,S.useEffect)(()=>{c?bt(c):ne().then(bt,()=>bt([]))},[c]),(0,S.useEffect)(()=>{ae().then(St,()=>St([])),se().then(wt,()=>wt([]))},[]),(0,S.useEffect)(()=>{let e=!0;return _t(!0),yt(null),P(new Set),d||H(x?``:v(A)),oe(A||void 0,!1).then(t=>{e&&(ht(t),j(t.path),d||H(x?``:v(t.path)),_t(!1))},t=>{e&&(yt(t instanceof Error?t.message:String(t)),_t(!1))}),()=>{e=!1}},[A,Ot,x]),(0,S.useEffect)(()=>{let e=e=>{if(e.defaultPrevented)return;if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`f`){e.preventDefault(),K(e=>({...e,open:!0})),jt(e=>e+1);return}if(e.key===`Escape`){G.open?(K(e=>({...e,open:!1,query:``})),Nt(0)):_();return}if(e.altKey&&e.key===`ArrowLeft`){e.preventDefault(),Gt();return}if(e.altKey&&e.key===`ArrowRight`){e.preventDefault(),Kt();return}if(e.key.length===1&&e.key!==` `&&!e.ctrlKey&&!e.altKey&&!e.metaKey){let t=e.target;if(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)return;e.preventDefault(),K(t=>({...t,open:!0,query:t.open?t.query+e.key:e.key})),jt(e=>e+1);return}if(e.key!==`Enter`)return;let t=e.target;t instanceof HTMLInputElement||t instanceof HTMLSelectElement||sn()};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)}),(0,S.useEffect)(()=>{let e=e=>{e.button===3||e.button===8?(e.preventDefault(),Gt()):(e.button===4||e.button===9)&&(e.preventDefault(),Kt())};return window.addEventListener(`mousedown`,e),()=>window.removeEventListener(`mousedown`,e)});let J=e=>{let t=e.trim();t.length!==0&&m(t)!==m(A)&&(L(e=>[...e,A]),z([]),Dt(`files`),j(t))},Gt=()=>{let e=I.at(-1);e!==void 0&&(L(e=>e.slice(0,-1)),z(e=>[A,...e]),j(e))},Kt=()=>{let e=R[0];e!==void 0&&(z(e=>e.slice(1)),L(e=>[...e,A]),j(e))},qt=(e,t)=>{if(e===`back`){let e=I[t];if(e===void 0)return;L(I.slice(0,t)),z([...I.slice(t+1),A,...R]),j(e);return}let n=R[t];n!==void 0&&(L([...I,A,...R.slice(0,t)]),z(R.slice(t+1)),j(n))};(0,S.useEffect)(()=>{if(s.available)return s.on(e=>{let t=e;if(t.type===`picker.navigation`)switch(t.data?.direction){case`back`:Gt();break;case`forward`:Kt()}})});let Y=M?.path??A,Jt=M?.parent??(A?p(A):null);(0,S.useEffect)(()=>{s.available&&Y&&s.send({type:`fs.watch`,payload:{paths:[Y],owner:`picker`}})},[Y]),(0,S.useEffect)(()=>{if(s.available&&Y)return s.on(e=>{let t=e;t.type===`fs.changed`&&typeof t.data?.path==`string`&&m(t.data.path)===m(Y)&&oe(Y,!1).then(e=>{ht(e);let t=new Set(e.entries.map(e=>e.fullPath));P(e=>new Set([...e].filter(e=>t.has(e))))},()=>void 0)})},[Y]);let Yt=(M?.entries??[]).filter(e=>e.isDirectory||x&&(O.length===0||O.some(t=>e.name.toLowerCase().endsWith(t.toLowerCase())))),Xt=M?{...M,entries:Yt}:null,Zt=G.open&&G.query.length>0,X=(0,S.useMemo)(()=>Zt?Yt.filter(e=>de(e.name,G)).map(e=>e.fullPath):[],[Zt,Yt,G]);(0,S.useEffect)(()=>{Nt(0)},[G.query,G.matchCase,G.regex,M?.path]);let Z=X.length===0?-1:Math.min(Mt,X.length-1),Qt=(0,S.useMemo)(()=>({...G,currentPath:Z>=0?X[Z]:null}),[G,Z,X]),Q=q?.defaultView??ie(),$t=u??{mode:Q.mode,iconSize:Q.iconSize,gridSize:Q.gridSize,sort:`name`,sortDescending:!1,columns:Q.columns??[`type`,`size`,`modified`]},en=(pe??Q.showImages)&&$t.mode===`list`,tn=!x||O.length===0,nn=N.size===1?[...N][0]:null,rn=nn!==null&&(M?.entries.find(e=>e.fullPath===nn)?.isDirectory??!1),an=!d&&tn&&(rn||N.size===0&&Tt.trim().length===0),$=Tt.trim(),on=$.length>0?We($)?$:Ue(Y,$):null,sn=()=>{if(gt||vt)return;if(d){let e=$;if(e.length===0)return;if(e===`.`||e===`..`||/[<>:"/\\|?*\u0000-\u001F]/.test(e)){le(b(`the_file_name_is_not_valid`));return}let t=O[0]??st[0]??``,n=t.length>0&&!/\.[^.]*$/.test(e)?t.startsWith(`.`)?t:`.${t}`:``,r=We(e)?e+n:Ue(Y,e+n);ke([r]).then(e=>{if(!e[0]?.exists){k([r]);return}let t=M?.entries.find(e=>m(e.fullPath)===m(r));Et({path:r,size:t?.size??0,modified:t?.modified??0,created:t?.created??0})},()=>k([r]));return}let e=n?[...N]:[...N].slice(0,1);e.length>0?k(e):on!==null&&$!==v(Y)?k([on]):tn&&Y&&be([Y])},cn=(0,S.useCallback)(e=>{P(new Set(e));let t=e.length===1&&(p(e[0])!==Y||M?.entries.find(t=>t.fullPath===e[0])?.isDirectory===!0);e.length===1&&!(d&&t)?H(v(e[0])):d||H(e.length===0&&!x?v(Y):``)},[Y,x,M,d]),ln=e=>{e.length!==0&&(d?H(v(e[0])):k(e))},un=e=>{M?.entries.find(t=>t.fullPath===e)?.isDirectory?J(e):ce(e)},dn=e=>{M?.entries.find(t=>t.fullPath===e)?.isDirectory?J(e):d?H(v(e)):x&&k([e])},fn=e=>H(e),pn=async e=>{let t=It;if(Lt(null),!t||!Y)return;let n=e===null?await Ce(Y):await xe(Y,e);n.ok&&n.path!==null&&(K(e=>({...e,open:!1,query:``})),e!==null&&ct(`all`),kt(e=>e+1),window.setTimeout(()=>{zt(n.path),Vt(e=>e+1)},120))},mn=()=>{K(e=>({...e,open:!0})),jt(e=>e+1)},hn=!d&&n&&N.size>1,gn=e=>{Nt(t=>X.length===0?0:(t+e+X.length)%X.length)},_n=e=>(0,C.jsxs)(et,{children:[(0,C.jsxs)(tt,{children:[(0,C.jsx)(nt,{children:b(x||d?`file_name`:`folder_3`)}),(0,C.jsx)(it,{onChange:t=>e(t.target.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),sn())},placeholder:hn?b(`count_items_selected`,{count:N.size}):void 0,spellCheck:!1,value:Tt}),hn&&(0,C.jsx)(rt,{children:b(`count_items_selected`,{count:N.size})}),x&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(nt,{children:b(`files_of_type`)}),(0,C.jsx)(y,{onChange:e=>mt(e===`all`||e===`supported`?e:Number(e)),options:E.length>0?[...E.map((e,t)=>({value:String(t),label:ft(e)})),{value:`all`,label:`${b(`all_files`)} (*.*)`}]:[...w.length>0?[{value:`supported`,label:`${b(`supported_files`)} (${w.map(e=>`*${e}`).join(`;`)})`}]:[],{value:`all`,label:`${b(`all_files`)} (*.*)`}],value:String(D)})]})]}),(0,C.jsxs)(at,{children:[(0,C.jsx)(ot,{onClick:_,type:`button`,children:b(`cancel`)}),(0,C.jsxs)(ot,{$primary:!0,disabled:gt||vt!==null||(d?$.length===0:N.size===0&&$.length===0&&!tn),onClick:sn,type:`button`,children:[(0,C.jsx)(Fe,{size:12}),d?b(`save_as`):hn?b(`select_count_files`,{count:N.size}):b(an?`select_this_folder`:`select_this_file`)]})]}),U!==null&&(0,C.jsx)(Se,{conflicts:[{source:U.path,destination:U.path,name:v(U.path),directory:!1,sourceSize:0,sourceModified:0,sourceCreated:0,targetSize:U.size,targetModified:U.modified,targetCreated:U.created,samePath:!1,suggestedName:Ge(U.path)}],defaultAction:q?.conflictDefaultAction??f().conflictDefaultAction,move:!1,onResolve:e=>{let t=U.path;Et(null);let n=e?.[0];if(n&&n.action!==`skip`){if(n.action===`rename`){let e=n.name?.trim()??``;if(e.length===0)return;let t=Ue(Y,e);ke([t]).then(e=>{if(!e[0]?.exists){k([t]);return}let n=M?.entries.find(e=>m(e.fullPath)===m(t));Et({path:t,size:n?.size??0,modified:n?.modified??0,created:n?.created??0})},()=>k([t]))}else k([t])}},remember:q?.conflictRememberChoice??f().conflictRememberChoice,subtitle:b(`an_entry_with_that_name_already_exists`),title:b(`overwrite`)}),B&&(0,C.jsx)(l,{items:B.direction===`back`?[...I].reverse().map((e,t)=>({label:Te(e),icon:(0,C.jsx)(ge,{location:e}),tooltip:e,onSelect:()=>{V(null),qt(`back`,I.length-1-t)}})):R.map((e,t)=>({label:Te(e),icon:(0,C.jsx)(ge,{location:e}),tooltip:e,onSelect:()=>{V(null),qt(`forward`,t)}})),onClose:()=>V(null),x:B.x,y:B.y})]}),vn=(0,C.jsxs)(qe,{$inline:o,role:`dialog`,"aria-modal":!o,children:[!o&&(0,C.jsxs)(Je,{children:[(0,C.jsxs)(Ye,{children:[(0,C.jsx)(je,{size:16}),b(d?`save_as`:x?`choose_a_file`:`choose_a_folder`)]}),(0,C.jsx)(Xe,{onClick:_,title:b(`cancel`),type:`button`,children:(0,C.jsx)(ze,{size:12})})]}),(0,C.jsxs)(Ze,{children:[(0,C.jsx)(ye,{activeKind:W===`overview`?`home`:W===`gallery`?`gallery`:`files`,currentPath:Y,drives:xt,hiddenViews:x?[`recycle`,`settings`]:[`recycle`,`gallery`,`settings`],homePath:F.find(e=>e.kind===`home`)?.path??``,onNavigate:e=>J(e),onOpenView:e=>{e===`home`?(P(new Set),H(x?``:v(Y)),Dt(`overview`)):e===`gallery`&&x&&(P(new Set),H(``),Dt(`gallery`))},places:F,recent:Ct,recentLimit:10}),(0,C.jsx)(Qe,{children:W===`overview`?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Ve,{drives:xt,theme:he,historyVersion:0,homePath:F.find(e=>e.kind===`home`)?.path??``,onOpen:e=>J(e),onPick:x?e=>k([e]):void 0,selectCards:!0,onPlacesChanged:()=>void 0,onRecentCleared:()=>void 0,onSelectionChange:cn,places:F,readOnly:!0,recent:Ct,recentLimit:10,visibilityVersion:0}),_n(H)]}):W===`gallery`?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(Be,{onPick:e=>k([e]),onSelectionChange:cn,showCheckboxes:q?.showCheckboxes??f().showCheckboxes,view:{...re(),columns:[]}}),_n(H)]}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)($e,{children:[(0,C.jsx)(T,{disabled:I.length===0,onClick:Gt,onContextMenu:e=>{if(I.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();V({x:t.left,y:t.bottom+4,direction:`back`})},title:b(`back`),type:`button`,children:(0,C.jsx)(Re,{})}),(0,C.jsx)(T,{disabled:R.length===0,onClick:Kt,onContextMenu:e=>{if(R.length===0)return;e.preventDefault();let t=e.currentTarget.getBoundingClientRect();V({x:t.left,y:t.bottom+4,direction:`forward`})},title:b(`forward`),type:`button`,children:(0,C.jsx)(Ie,{})}),(0,C.jsx)(T,{disabled:!Jt,onClick:()=>Jt&&J(Jt),title:b(`up_one_level`),type:`button`,children:(0,C.jsx)(Me,{})}),(0,C.jsx)(we,{onNavigate:J,path:Y}),(0,C.jsx)(T,{onClick:e=>Lt({x:e.clientX,y:e.clientY}),title:b(`new_folder_or_file`),type:`button`,children:(0,C.jsx)(Ne,{})}),(0,C.jsx)(T,{onClick:mn,title:b(`search`),type:`button`,children:(0,C.jsx)(Pe,{})}),De.available&&(0,C.jsx)(T,{onClick:e=>De.open(e.clientX,e.clientY),title:b(`selection_menu`),type:`button`,children:(0,C.jsx)(Le,{})})]}),G.open&&(0,C.jsx)(Oe,{current:Z,focusToken:At,matchCase:G.matchCase,mode:G.mode,onClose:()=>{K(e=>({...e,open:!1,query:``})),Nt(0)},onMatchCase:()=>K(e=>({...e,matchCase:!e.matchCase})),onMode:()=>K(e=>({...e,mode:e.mode===`dim`?`hide`:`dim`})),onNext:()=>gn(1),onPrevious:()=>gn(-1),onQuery:e=>K(t=>({...t,query:e})),onRegex:()=>K(e=>({...e,regex:!e.regex})),query:G.query,regex:G.regex,total:X.length,onSelectMatches:()=>Ft(e=>e+1)}),(0,C.jsx)(_e,{allowBackgroundMenu:!0,confirmDelete:q?.confirmDelete??f().confirmDelete,enableShortcuts:!0,error:vt,find:Qt,selectMatchesToken:Pt,imageStripHeight:Ut,loading:gt,listing:Xt,onImageStripHeight:Wt,onOpen:dn,onOpenExternally:un,onOpenFile:dn,onSelectEntry:ln,onRefresh:()=>kt(e=>e+1),onSelectionChange:cn,selectionMenuId:`picker`,onSort:()=>void 0,openOnSingleClick:q?.openOnSingleClick??f().openOnSingleClick,refreshToken:Ot,pendingRename:Rt,pendingRenameToken:Bt,showCheckboxes:q?.showCheckboxes??f().showCheckboxes,showDetails:!1,showImages:en,singleSelect:!n,view:$t}),_n(fn)]})})]}),It&&(0,C.jsx)(ve,{creationOnly:!0,directory:Y,menu:{x:It.x,y:It.y,paths:[],background:!0},onClose:()=>Lt(null),onCreateFile:x?e=>void pn(e):void 0,onCreateFolder:()=>void pn(null),shortcuts:Ee()})]});return o?vn:(0,He.createPortal)((0,C.jsx)(Ke,{onPointerDown:e=>{e.target===e.currentTarget&&_()},children:vn}),document.body)}function Ue(e,t){let n=e.includes(`\\`)?`\\`:`/`;return e.endsWith(n)?e+t:e+n+t}function We(e){return/^[a-zA-Z]:[\\/]/.test(e)||e.startsWith(`\\\\`)||e.startsWith(`/`)}function Ge(e){let t=v(e),n=t.lastIndexOf(`.`);return n>0?`${t.slice(0,n)} (1)${t.slice(n)}`:`${t} (1)`}var Ke=t.div`
    position: fixed;
    inset: 0;
    z-index: 3100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(var(--bg-rgb), 0.72);
    ${u}
`,qe=t.div`
    display: flex;
    flex-direction: column;
    width: ${({$inline:e})=>e?`100%`:`min(1040px, 100%)`};
    height: ${({$inline:e})=>e?`100%`:`min(720px, 90vh)`};
    overflow: hidden;
    ${({$inline:e})=>e?``:pe}
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
`,rt=t.span`
    grid-column: 1 / -1;
    color: var(--text-muted);
    font-size: 11px;
`,it=t.input`
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
`,at=t.div`
    display: flex;
    justify-content: flex-end;
    gap: 7px;
`,ot=t.button`
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
`;function E(e){if(!e)return[];let t=e=>{let t=e.trim().replace(/^\*+/,``);return t.length===0?``:t.startsWith(`.`)?t:`.${t}`};try{let n=JSON.parse(e);return Array.isArray(n)?n.flatMap(e=>{if(typeof e!=`object`||!e)return[];let n=e,r=Array.isArray(n.extensions)?n.extensions.filter(e=>typeof e==`string`).map(t).filter((e,t,n)=>e.length>0&&n.indexOf(e)===t):[];return[{label:typeof n.label==`string`?n.label:``,extensions:r}]}):[]}catch{return[]}}function st({mode:e,save:t=!1,multiple:n,extensions:i,types:te,typeIndex:ne=0,initial:re,initialName:ae=``,defaultExtension:oe=``,lastExtension:se=``}){let ce=ee(),le=o(),[l,de]=(0,S.useState)(null),fe=a(h(l?.themeMode)),[u,pe]=(0,S.useState)({}),[d,f]=(0,S.useState)(null),[p,m]=(0,S.useState)(null),[g,v]=(0,S.useState)(null),ge=(0,S.useRef)(0);(0,S.useEffect)(()=>{s.send({type:`app.ready`})},[]),(0,S.useEffect)(()=>(c(e=>new Promise(t=>{v({id:++ge.current,prompt:e,resolve:t})})),()=>c(null)),[]),(0,S.useEffect)(()=>{ue().then(de,()=>void 0)},[]),(0,S.useEffect)(()=>{he(l?.accentColor,l?.secondaryColor,fe)},[l?.accentColor,l?.secondaryColor,fe]),(0,S.useEffect)(()=>{me(l?.timeFormat,l?.timeFormatPattern),_(l?.relativeTime,l?.relativeTimeWindowMinutes)},[l?.timeFormat,l?.timeFormatPattern,l?.relativeTime,l?.relativeTimeWindowMinutes]);let y=l?.defaultView??ie(),_e={mode:u.mode??y.mode,iconSize:u.iconSize??y.iconSize,gridSize:u.gridSize??y.gridSize,sort:`name`,sortDescending:!1,columns:d??y.columns??[`type`,`size`,`modified`]},ve=e=>pe(t=>({...t,...e}));return(0,C.jsxs)(D,{children:[(0,C.jsxs)(ct,{children:[(0,C.jsx)(lt,{children:(0,C.jsx)(x,{size:17})}),(0,C.jsx)(O,{...le,children:ce(t?`save_as`:e===`file`?`choose_a_file`:`choose_a_folder`)}),(0,C.jsx)(De,{onChange:ve,onColumns:f,onShowImages:m,showImages:p??y.showImages,view:_e}),(0,C.jsx)(ut,{children:(0,C.jsx)(k,{onClick:()=>s.send({type:`pick.cancel`}),onMouseDown:e=>e.stopPropagation(),title:ce(`cancel`),type:`button`,children:(0,C.jsx)(ze,{size:12})})})]}),(0,C.jsx)(dt,{children:(0,C.jsx)(w,{extensions:i,types:E(te),typeIndex:ne,initial:re,initialName:ae,defaultExtension:oe,lastExtension:se,inline:!0,mode:e,multiple:n,onCancel:()=>s.send({type:`pick.cancel`}),onSelect:(e,t,n)=>s.send({type:`pick.submit`,payload:{paths:e,type:t,extension:n}}),save:t,showImages:p??y.showImages,fileView:_e,theme:fe})}),g&&(0,C.jsx)(b,{action:g.prompt.action,delaySeconds:g.prompt.delaySeconds,hits:g.prompt.hits,onCancel:()=>{g.resolve(!1),v(null)},onConfirm:()=>{g.resolve(!0),v(null)},permanent:g.prompt.permanent},g.id),(0,C.jsx)(Te,{}),(0,C.jsx)(be,{}),(0,C.jsx)(r,{})]})}var D=t.div`
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
`,lt=t.span`
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
`,ut=t.div`
    display: flex;
    flex-shrink: 0;
`,k=t.button`
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
`;export{st as PickerWindow};