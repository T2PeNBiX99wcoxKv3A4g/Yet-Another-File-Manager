import{M as e,O as t,S as n,k as r,x as i}from"./dist-B10j17-y.js";import{h as a,k as o,p as s,w as c}from"./theme-DIZkp4eN.js";import{$ as ee,Et as l,F as te,I as ne,K as re,S as ie,X as ae,_ as u,a as oe,b as se,i as ce,k as le,n as ue,rt as de,st as fe,t as pe,w as me}from"./selectionMenu-B6kwQ5yB.js";import{t as he}from"./textSearch-D-I3Bx05.js";import{D as ge,F as _e,K as ve,M as ye,d as be,j as xe,k as Se,q as Ce,st as we,v as Te,vt as d,yt as Ee}from"./Icons-C2oT0N0q.js";import{n as f,r as De}from"./main-B1gw6GxA.js";var Oe=o(),p=e(r()),m=n(),h=e=>(0,m.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,m.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,m.jsx)(`path`,{d:`M4 4v6h6`})]});function g({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:r,onShowDetails:o,onPreviewChange:l,platform:xe,toolbarSlot:g,onStatusChange:b}){let S=i(),C=ue(`recycle`),Ze=xe===`windows`,[w,Qe]=(0,p.useState)([]),[T,E]=(0,p.useState)([]),[D,O]=(0,p.useState)(!1),[$e,k]=(0,p.useState)(null),[et,tt]=(0,p.useState)(!0),[A,j]=(0,p.useState)(!1),[M,nt]=(0,p.useState)(null),[N,rt]=(0,p.useState)(!1),[P,F]=(0,p.useState)(()=>new Set),[it,at]=(0,p.useState)(null),[I,ot]=(0,p.useState)(()=>{let e=se(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[L,R]=(0,p.useState)(null),[z,B]=(0,p.useState)(null),st=(0,p.useRef)(null),V=(0,p.useCallback)(async()=>{tt(!0),nt(null);try{Qe(await ae(N))}catch(e){nt(e instanceof Error?e.message:String(e))}finally{tt(!1)}},[N]),ct=(0,p.useCallback)(async()=>{try{Qe(await ae(N))}catch{}},[N]);(0,p.useEffect)(()=>{V()},[V]),(0,p.useEffect)(()=>{let e=window.setInterval(()=>void ct(),1e4);return()=>window.clearInterval(e)},[ct]),(0,p.useEffect)(()=>{N||(E([]),O(!1),k(null))},[N]),(0,p.useEffect)(()=>{F(e=>{let t=new Set(w.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[w]);let H=(0,p.useMemo)(()=>{let e=new Set(w.map(e=>e.id));return[...w,...T.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=ke(e,t,I.column);return I.descending?-n:n})},[w,T,I]),U=(0,p.useMemo)(()=>!t?.open||t.query.trim().length===0?H:H.filter(e=>le(e.name,t)||le(e.originalPath,t)),[H,t?.open,t?.query,t?.matchCase,t?.regex]),lt=t?.open&&t.query.trim().length>0?U.length===0:H.length===0,ut=(0,p.useRef)(null);he(ut,t??null,`[data-search-block]`,n??(()=>void 0),[H]),(0,p.useEffect)(()=>{F(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,p.useEffect)(()=>{r&&F(new Set(U.map(e=>e.id)))},[r]);let W=(0,p.useMemo)(()=>H.filter(e=>P.has(e.id)),[H,P]),G=W.filter(e=>e.removable&&!e.isOrphan),K=W.filter(e=>e.removable),dt=(e,t)=>{let n=t.ctrlKey||t.metaKey;F(r=>{if(t.shiftKey&&it){let t=H.findIndex(e=>e.id===it),i=H.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(H[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),at(e.id)},q=(0,p.useCallback)(()=>F(new Set(U.map(e=>e.id))),[U]),J=U.length>0&&U.every(e=>P.has(e.id)),Y=(0,p.useCallback)(async()=>{let e=G.map(e=>e.id);if(e.length!==0){j(!0);try{let t=await de(e);t.ok||await u(c(S,e.length,`restored_done_of_1_item`,`restored_done_of_total_items`,{done:t.done,total:e.length})),F(new Set),await V()}finally{j(!1)}}},[V,G,S]),ft=(0,p.useCallback)(async()=>{let e=K.map(e=>e.id);if(B(null),e.length!==0){j(!0);try{let t=await te(e);!t.ok&&!t.cancelled&&await u(c(S,e.length,`deleted_done_of_1_item`,`deleted_done_of_total_items`,{done:t.done,total:e.length})),F(new Set),await V()}finally{j(!1)}}},[K,V,S]),pt=async()=>{B(null),j(!0);try{let e=await ne(N);!e.ok&&e.failed&&await u(c(S,e.failed,`k_1_item_could_not_be_deleted`,`count_items_could_not_be_deleted`,{count:e.failed})),F(new Set),await V()}finally{j(!1)}},mt=async()=>{j(!0),k(null);try{let e=await re();if(e.cancelled){k(`Elevation was declined — nothing was read.`);return}if(e.failed){k(`The elevated helper could not produce a report. Try again.`);return}E(e.entries),O(!0)}finally{j(!1)}},ht=async()=>{j(!0),B(null);try{await ee(),E([]),O(!1),k(null),await V()}finally{j(!1)}},gt=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},_t=e=>{navigator.clipboard.writeText(e.originalPath)},vt=(e,t)=>{e.preventDefault(),t&&!P.has(t.id)&&F(new Set([t.id])),R({x:e.clientX,y:e.clientY})};(0,p.useEffect)(()=>(pe(`recycle`,P.size>0?(e,t)=>R({x:e,y:t}):null),()=>pe(`recycle`,null)),[P]),(0,p.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),q()):e.key===`delete`?(e.preventDefault(),K.length>0&&B(`delete`)):e.key===`Enter`&&G.length>0?(e.preventDefault(),Y()):e.key===`Escape`&&(F(new Set),R(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[K.length,G.length,Y,q]);let yt=[{label:S(`restore`),icon:(0,m.jsx)(h,{width:14,height:14}),disabled:G.length===0,onSelect:()=>void Y()},{label:S(`delete_permanently`),icon:(0,m.jsx)(d,{size:14}),danger:!0,disabled:K.length===0,onSelect:()=>B(`delete`)},{label:S(`properties`),icon:(0,m.jsx)(_e,{size:14}),disabled:W.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=W;e&&fe(e.id)}},{label:S(`open_original_location`),icon:(0,m.jsx)(ye,{size:14}),disabled:W.length!==1,onSelect:()=>{let[e]=W;e&&gt(e)}},{label:S(`copy_original_path`),icon:(0,m.jsx)(Te,{size:14}),disabled:W.length!==1,onSelect:()=>{let[e]=W;e&&_t(e)}},{label:S(`select_all`),separatorBefore:!0,onSelect:q},{label:S(`refresh`),icon:(0,m.jsx)(we,{size:14}),onSelect:()=>void V()}],X=W.length>0?W[0]:null,Z=X?{name:X.name,path:X.contentPath||X.originalPath,isDirectory:X.isDirectory,size:X.size,modified:X.deleted,fields:[{label:S(`type`),value:S(v(X))},{label:S(`original_location`),value:X.originalPath},{label:S(`date_deleted`),value:a(X.deleted),time:X.deleted},{label:S(`size`),value:X.isDirectory?`—`:s(X.size)},...X.owner?[{label:S(`owner`),value:X.owner}]:[],{label:S(`status`),value:X.isOrphan?S(`metadata_only`):X.removable?S(`restorable`):S(`other_profile`)}]}:null,Q=W.length>1?c(S,W.length,`k_1_item_selected`,`count_items_selected`):void 0,bt=(0,p.useRef)(``);(0,p.useEffect)(()=>{let e=`${Z?.path??``}|${Z?.modified??0}|${Q??``}`;bt.current!==e&&(bt.current=e,l?.(Z,Q))},[Z,Q,l]);let xt=et?S(`reading`):c(S,H.length,`k_1_item`,`count_items`)+(P.size>0?` · ${S(`count_selected`,{count:P.size})}`:``);return(0,p.useEffect)(()=>{b?.(xt)},[xt,b]),(0,m.jsxs)(je,{ref:st,onContextMenu:e=>vt(e),children:[g&&(0,Oe.createPortal)((0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(De,{}),(0,m.jsx)(Me,{$on:N,onClick:()=>rt(e=>!e),title:S(`show_metadata_records_whose_content_is_already_gone`),type:`button`,children:(0,m.jsx)(Se,{size:16})}),N&&Ze&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f,{disabled:A||D,onClick:()=>void mt(),title:S(D?`the_administrator_view_is_already_loaded`:`ask_for_administrator_rights_and_list_every_profile_s_leftovers`),type:`button`,children:(0,m.jsx)(ve,{size:16})}),D&&T.length>0&&(0,m.jsx)(y,{disabled:A,onClick:()=>B(`purge`),title:S(`delete_every_orphan`),type:`button`,children:(0,m.jsx)(ge,{size:16})})]}),(0,m.jsx)(f,{disabled:A||G.length===0,onClick:()=>void Y(),title:S(`restore`),type:`button`,children:(0,m.jsx)(h,{height:16,width:16})}),(0,m.jsx)(y,{disabled:A||K.length===0,onClick:()=>B(`delete`),title:S(`delete`),type:`button`,children:(0,m.jsx)(d,{size:16})}),(0,m.jsx)(y,{disabled:A||H.length===0,onClick:()=>B(`empty`),title:S(`empty`),type:`button`,children:(0,m.jsx)(Ee,{size:16})}),(0,m.jsx)(f,{onClick:()=>void V(),title:S(`refresh`),type:`button`,children:(0,m.jsx)(we,{size:16})}),C.available&&(0,m.jsx)(f,{onClick:e=>C.open(e.clientX,e.clientY),title:S(`selection_menu`),type:`button`,children:(0,m.jsx)(Ce,{size:16})})]}),g),$e&&(0,m.jsx)(Ye,{children:$e}),M&&(0,m.jsx)(Xe,{children:M}),!M&&(0,m.jsx)(Je,{children:(0,m.jsxs)(Ne,{ref:ut,children:[(0,m.jsxs)(Pe,{children:[(0,m.jsx)(Re,{$checked:J,$partial:!J&&P.size>0,onClick:()=>J?F(new Set):q(),title:S(J?`select_none`:`select_all`),type:`button`,children:J?(0,m.jsx)(be,{size:9}):P.size>0&&(0,m.jsx)(ze,{})}),(0,m.jsxs)(x,{onClick:()=>$(`name`),type:`button`,children:[S(`name`),_(I,`name`)]}),(0,m.jsxs)(x,{onClick:()=>$(`original`),type:`button`,children:[S(`original_location`),_(I,`original`)]}),(0,m.jsxs)(x,{onClick:()=>$(`deleted`),type:`button`,children:[S(`date_deleted`),_(I,`deleted`)]}),(0,m.jsxs)(x,{onClick:()=>$(`size`),type:`button`,children:[S(`size`),_(I,`size`)]}),(0,m.jsxs)(x,{onClick:()=>$(`type`),type:`button`,children:[S(`type`),_(I,`type`)]}),(0,m.jsx)(`span`,{})]}),(0,m.jsxs)(Fe,{onClick:e=>{e.target===e.currentTarget&&F(new Set)},children:[!et&&lt&&(0,m.jsx)(Xe,{children:t?.open&&t.query.trim().length>0?S(`no_matching_items`):S(`the_recycle_bin_is_empty`)}),H.map(e=>(0,m.jsxs)(Ie,{$checked:P.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>dt(e,t),onContextMenu:t=>vt(t,e),onDoubleClick:()=>{F(new Set([e.id])),at(e.id),o?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,m.jsx)(Le,{$checked:P.has(e.id),children:P.has(e.id)&&(0,m.jsx)(be,{size:9})}),(0,m.jsxs)(Be,{children:[(0,m.jsx)(Ae,{entry:e}),(0,m.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,m.jsx)(qe,{children:S(`metadata_only`)}),e.owner&&(0,m.jsx)(qe,{$other:!0,children:S(`other_profile`)})]}),(0,m.jsx)(Ve,{children:e.originalPath}),(0,m.jsx)(He,{children:(0,m.jsx)(me,{value:e.deleted})}),(0,m.jsx)(Ue,{children:e.isDirectory?`—`:s(e.size)}),(0,m.jsx)(We,{children:S(v(e))}),(0,m.jsxs)(Ge,{children:[e.removable&&!e.isOrphan&&(0,m.jsx)(Ke,{onClick:t=>{t.stopPropagation(),de([e.id]).then(V)},title:S(`restore_to_its_original_folder`),type:`button`,children:(0,m.jsx)(h,{})}),e.removable&&(0,m.jsx)(Ke,{$danger:!0,onClick:t=>{t.stopPropagation(),F(new Set([e.id])),B(`delete`)},title:e.isOrphan?S(`remove_the_leftover_record`):S(`delete_permanently`),type:`button`,children:(0,m.jsx)(d,{size:13})})]})]},e.id))]})]})}),L&&(0,m.jsx)(oe,{items:yt,onClose:()=>R(null),x:L.x,y:L.y}),(0,m.jsx)(ce,{confirmLabel:S(z===`empty`?`empty_the_bin`:z===`purge`?`delete_every_orphan`:`delete`),danger:!0,message:z===`empty`?c(S,H.length,`permanently_delete_1_item_this_cannot_be_undone`,`permanently_delete_count_items_this_cannot_be_undone`):z===`purge`?S(`permanently_delete_every_leftover_record_including_the_ones_owned_by_other_profiles_this_cannot_be_undone`):c(S,K.length,`permanently_delete_1_selected_item_this_cannot_be_undone`,`permanently_delete_count_selected_items_this_cannot_be_undone`),onCancel:()=>B(null),onConfirm:()=>{z===`empty`?pt():z===`purge`?ht():ft()},open:z!==null,title:S(z===`empty`?`empty_the_recycle_bin`:z===`purge`?`delete_every_orphan`:`delete_permanently`)})]});function $(e){ot(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return ie(`yafm.recycle.sort`,n),n})}}function ke(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return v(e).localeCompare(v(t),void 0,{sensitivity:`base`})}}function _(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function v(e){if(e.isDirectory)return`folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`file`}function Ae({entry:e}){let t=l(e.originalPath,e.isDirectory);return(0,m.jsx)(C,{children:t?(0,m.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,m.jsx)(ye,{}):(0,m.jsx)(xe,{})})}var je=t.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Me=t(f)`
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`transparent`};
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`transparent`};
`,y=t(f)`
    color: #fca5a5;

    &:hover:not(:disabled) {
        color: #fecaca;
        border-color: rgba(248, 113, 113, 0.5);
        background: rgba(248, 113, 113, 0.12);
    }
`,Ne=t.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,b=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Pe=t.div`
    display: grid;
    grid-template-columns: ${b};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,x=t.button`
    padding: 0;
    border: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    text-transform: inherit;
    text-align: left;
    cursor: pointer;

    &:hover {
        color: var(--text-primary);
    }
`,Fe=t.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Ie=t.div`
    display: grid;
    grid-template-columns: ${b};
    gap: 14px;
    align-items: center;
    padding: 8px 12px;
    border: 1px solid ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.38)`:`transparent`};
    border-radius: var(--radius-sm);
    background: ${({$checked:e})=>e?`rgba(var(--accent-rgb), 0.1)`:`transparent`};
    font-size: 13px;
    color: var(--text-secondary);
    opacity: ${({$orphan:e})=>e?.72:1};
    cursor: default;
    user-select: none;

    &:hover {
        border-color: var(--border-color);
        background: var(--bg-card-hover);
        color: var(--text-primary);
        opacity: 1;
    }

    &:hover button {
        opacity: 1;
    }
`,S=t.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Le=t.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,Re=t.button`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    padding: 0;
    border: 1px solid ${({$checked:e,$partial:t})=>e||t?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e,$partial:t})=>e||t?`var(--accent-primary)`:`transparent`};
    color: #fff;
    cursor: pointer;
    transition: border-color 120ms ease, background 120ms ease;

    &:hover {
        border-color: var(--border-color-focus);
    }
`,ze=t.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Be=t(S)`
    display: flex;
    align-items: center;
    gap: 9px;
`,C=t.span`
    display: grid;
    place-items: center;
    width: 18px;
    height: 18px;
    flex-shrink: 0;

    svg {
        color: var(--text-muted);
    }

    img {
        display: block;
    }
`,Ve=t(S)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,He=t(S)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Ue=t(S)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,We=t(S)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Ge=t.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,Ke=t.button`
    display: grid;
    place-items: center;
    width: 22px;
    height: 22px;
    border: 0;
    border-radius: 5px;
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    opacity: 0;
    transition: opacity 120ms ease, background 120ms ease;

    svg {
        width: 13px;
        height: 13px;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.7;
    }

    &:hover {
        background: ${({$danger:e})=>e?`rgba(248, 113, 113, 0.2)`:`rgba(148, 163, 184, 0.2)`};
        color: ${({$danger:e})=>e?`#fca5a5`:`var(--text-primary)`};
    }
`,qe=t.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Je=t.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Ye=t.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Xe=t.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;export{g as RecycleView};