import{A as e,C as t,N as n,S as r,k as i}from"./dist-CUELW5RT.js";import{h as a,k as o,p as ee,w as s}from"./theme-DbwKQPV4.js";import{$ as te,Et as c,F as ne,I as re,K as ie,S as ae,X as oe,_ as l,a as se,b as ce,i as le,k as ue,n as de,rt as fe,st as pe,t as me,w as he}from"./selectionMenu-0jPBGg5c.js";import{t as ge}from"./textSearch-BsK0H2GV.js";import{D as _e,F as ve,J as ye,M as be,bt as xe,ct as Se,d as Ce,j as we,k as Te,q as Ee,v as De,yt as u}from"./Icons-DXP6ShAr.js";import{n as d,r as Oe}from"./main-Rxv5YtM3.js";var ke=o(),f=n(e()),p=t(),m=e=>(0,p.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.7,strokeLinecap:`round`,strokeLinejoin:`round`,...e,children:[(0,p.jsx)(`path`,{d:`M4 10a8 8 0 1 1 2.3 5.7`}),(0,p.jsx)(`path`,{d:`M4 4v6h6`})]});function h({onOpenLocation:e,find:t,onSearchMatches:n,selectMatchesToken:i,onShowDetails:o,onPreviewChange:c,platform:we,toolbarSlot:h,onStatusChange:y}){let x=r(),S=de(`recycle`),Qe=we===`windows`,[C,$e]=(0,f.useState)([]),[w,T]=(0,f.useState)([]),[E,D]=(0,f.useState)(!1),[et,O]=(0,f.useState)(null),[tt,nt]=(0,f.useState)(!0),[k,A]=(0,f.useState)(!1),[j,rt]=(0,f.useState)(null),[M,it]=(0,f.useState)(!1),[N,P]=(0,f.useState)(()=>new Set),[at,ot]=(0,f.useState)(null),[F,st]=(0,f.useState)(()=>{let e=ce(`yafm.recycle.sort`);return e?.column?{column:e.column,descending:e.descending===!0}:{column:`name`,descending:!1}}),[I,L]=(0,f.useState)(null),[R,z]=(0,f.useState)(null),ct=(0,f.useRef)(null),B=(0,f.useCallback)(async()=>{nt(!0),rt(null);try{$e(await oe(M))}catch(e){rt(e instanceof Error?e.message:String(e))}finally{nt(!1)}},[M]),lt=(0,f.useCallback)(async()=>{try{$e(await oe(M))}catch{}},[M]);(0,f.useEffect)(()=>{B()},[B]),(0,f.useEffect)(()=>{let e=window.setInterval(()=>void lt(),1e4);return()=>window.clearInterval(e)},[lt]),(0,f.useEffect)(()=>{M||(T([]),D(!1),O(null))},[M]),(0,f.useEffect)(()=>{P(e=>{let t=new Set(C.map(e=>e.id)),n=new Set([...e].filter(e=>t.has(e)));return n.size===e.size?e:n})},[C]);let V=(0,f.useMemo)(()=>{let e=new Set(C.map(e=>e.id));return[...C,...w.filter(t=>!e.has(t.id)).map(e=>({...e,removable:!1}))].sort((e,t)=>{let n=Ae(e,t,F.column);return F.descending?-n:n})},[C,w,F]),H=(0,f.useMemo)(()=>!t?.open||t.query.trim().length===0?V:V.filter(e=>ue(e.name,t)||ue(e.originalPath,t)),[V,t?.open,t?.query,t?.matchCase,t?.regex]),ut=t?.open&&t.query.trim().length>0?H.length===0:V.length===0,dt=(0,f.useRef)(null);ge(dt,t??null,`[data-search-block]`,n??(()=>void 0),[V]),(0,f.useEffect)(()=>{P(new Set)},[t?.open,t?.query,t?.matchCase,t?.regex]),(0,f.useEffect)(()=>{i&&P(new Set(H.map(e=>e.id)))},[i]);let U=(0,f.useMemo)(()=>V.filter(e=>N.has(e.id)),[V,N]),W=U.filter(e=>e.removable&&!e.isOrphan),G=U.filter(e=>e.removable),ft=(e,t)=>{let n=t.ctrlKey||t.metaKey;P(r=>{if(t.shiftKey&&at){let t=V.findIndex(e=>e.id===at),i=V.findIndex(t=>t.id===e.id);if(t>=0&&i>=0){let e=n?new Set(r):new Set,a=Math.min(t,i),o=Math.max(t,i);for(let t=a;t<=o;t++)e.add(V[t].id);return e}}if(n){let t=new Set(r);return t.delete(e.id)||t.add(e.id),t}return new Set([e.id])}),ot(e.id)},K=(0,f.useCallback)(()=>P(new Set(H.map(e=>e.id))),[H]),q=H.length>0&&H.every(e=>N.has(e.id)),J=(0,f.useCallback)(async()=>{let e=W.map(e=>e.id);if(e.length!==0){A(!0);try{let t=await fe(e);t.ok||await l(s(x,e.length,`restored_done_of_1_item`,`restored_done_of_total_items`,{done:t.done,total:e.length})),P(new Set),await B()}finally{A(!1)}}},[B,W,x]),pt=(0,f.useCallback)(async()=>{let e=G.map(e=>e.id);if(z(null),e.length!==0){A(!0);try{let t=await ne(e);!t.ok&&!t.cancelled&&await l(s(x,e.length,`deleted_done_of_1_item`,`deleted_done_of_total_items`,{done:t.done,total:e.length})),P(new Set),await B()}finally{A(!1)}}},[G,B,x]),mt=async()=>{z(null),A(!0);try{let e=await re(M);!e.ok&&e.failed&&await l(s(x,e.failed,`k_1_item_could_not_be_deleted`,`count_items_could_not_be_deleted`,{count:e.failed})),P(new Set),await B()}finally{A(!1)}},ht=async()=>{A(!0),O(null);try{let e=await ie();if(e.cancelled){O(`Elevation was declined — nothing was read.`);return}if(e.failed){O(`The elevated helper could not produce a report. Try again.`);return}T(e.entries),D(!0)}finally{A(!1)}},gt=async()=>{A(!0),z(null);try{await te(),T([]),D(!1),O(null),await B()}finally{A(!1)}},_t=t=>{let n=Math.max(t.originalPath.lastIndexOf(`\\`),t.originalPath.lastIndexOf(`/`));e(n>0?t.originalPath.slice(0,n):t.originalPath)},vt=e=>{navigator.clipboard.writeText(e.originalPath)},Y=(e,t)=>{e.preventDefault(),t&&!N.has(t.id)&&P(new Set([t.id])),L({x:e.clientX,y:e.clientY})};(0,f.useEffect)(()=>(me(`recycle`,N.size>0?(e,t)=>L({x:e,y:t}):null),()=>me(`recycle`,null)),[N]),(0,f.useEffect)(()=>{let e=e=>{let t=e.target;(!t||t.tagName!==`INPUT`&&t.tagName!==`TEXTAREA`&&!t.isContentEditable)&&((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`?(e.preventDefault(),K()):e.key===`delete`?(e.preventDefault(),G.length>0&&z(`delete`)):e.key===`Enter`&&W.length>0?(e.preventDefault(),J()):e.key===`Escape`&&(P(new Set),L(null)))};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[G.length,W.length,J,K]);let yt=[{label:x(`restore`),icon:(0,p.jsx)(m,{width:14,height:14}),disabled:W.length===0,onSelect:()=>void J()},{label:x(`delete_permanently`),icon:(0,p.jsx)(u,{size:14}),danger:!0,disabled:G.length===0,onSelect:()=>z(`delete`)},{label:x(`properties`),icon:(0,p.jsx)(ve,{size:14}),disabled:U.length!==1,separatorBefore:!0,onSelect:()=>{let[e]=U;e&&pe(e.id)}},{label:x(`open_original_location`),icon:(0,p.jsx)(be,{size:14}),disabled:U.length!==1,onSelect:()=>{let[e]=U;e&&_t(e)}},{label:x(`copy_original_path`),icon:(0,p.jsx)(De,{size:14}),disabled:U.length!==1,onSelect:()=>{let[e]=U;e&&vt(e)}},{label:x(`select_all`),separatorBefore:!0,onSelect:K},{label:x(`refresh`),icon:(0,p.jsx)(Se,{size:14}),onSelect:()=>void B()}],X=U.length>0?U[0]:null,Z=X?{name:X.name,path:X.contentPath||X.originalPath,isDirectory:X.isDirectory,size:X.size,modified:X.deleted,fields:[{label:x(`type`),value:x(_(X))},{label:x(`original_location`),value:X.originalPath},{label:x(`date_deleted`),value:a(X.deleted),time:X.deleted},{label:x(`size`),value:X.isDirectory?`—`:ee(X.size)},...X.owner?[{label:x(`owner`),value:X.owner}]:[],{label:x(`status`),value:X.isOrphan?x(`metadata_only`):X.removable?x(`restorable`):x(`other_profile`)}]}:null,Q=U.length>1?s(x,U.length,`k_1_item_selected`,`count_items_selected`):void 0,bt=(0,f.useRef)(``);(0,f.useEffect)(()=>{let e=`${Z?.path??``}|${Z?.modified??0}|${Q??``}`;bt.current!==e&&(bt.current=e,c?.(Z,Q))},[Z,Q,c]);let xt=tt?x(`reading`):s(x,V.length,`k_1_item`,`count_items`)+(N.size>0?` · ${x(`count_selected`,{count:N.size})}`:``);return(0,f.useEffect)(()=>{y?.(xt)},[xt,y]),(0,p.jsxs)(Me,{ref:ct,onContextMenu:e=>Y(e),children:[h&&(0,ke.createPortal)((0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(Oe,{}),(0,p.jsx)(Ne,{$on:M,onClick:()=>it(e=>!e),title:x(`show_metadata_records_whose_content_is_already_gone`),type:`button`,children:(0,p.jsx)(Te,{size:16})}),M&&Qe&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d,{disabled:k||E,onClick:()=>void ht(),title:x(E?`the_administrator_view_is_already_loaded`:`ask_for_administrator_rights_and_list_every_profile_s_leftovers`),type:`button`,children:(0,p.jsx)(Ee,{size:16})}),E&&w.length>0&&(0,p.jsx)(v,{disabled:k,onClick:()=>z(`purge`),title:x(`delete_every_orphan`),type:`button`,children:(0,p.jsx)(_e,{size:16})})]}),(0,p.jsx)(d,{disabled:k||W.length===0,onClick:()=>void J(),title:x(`restore`),type:`button`,children:(0,p.jsx)(m,{height:16,width:16})}),(0,p.jsx)(v,{disabled:k||G.length===0,onClick:()=>z(`delete`),title:x(`delete`),type:`button`,children:(0,p.jsx)(u,{size:16})}),(0,p.jsx)(v,{disabled:k||V.length===0,onClick:()=>z(`empty`),title:x(`empty`),type:`button`,children:(0,p.jsx)(xe,{size:16})}),(0,p.jsx)(d,{onClick:()=>void B(),title:x(`refresh`),type:`button`,children:(0,p.jsx)(Se,{size:16})}),S.available&&(0,p.jsx)(d,{onClick:e=>S.open(e.clientX,e.clientY),title:x(`selection_menu`),type:`button`,children:(0,p.jsx)(ye,{size:16})})]}),h),et&&(0,p.jsx)(Xe,{children:et}),j&&(0,p.jsx)(Ze,{children:j}),!j&&(0,p.jsx)(Ye,{children:(0,p.jsxs)(Pe,{ref:dt,children:[(0,p.jsxs)(Fe,{children:[(0,p.jsx)(ze,{$checked:q,$partial:!q&&N.size>0,onClick:()=>q?P(new Set):K(),title:x(q?`select_none`:`select_all`),type:`button`,children:q?(0,p.jsx)(Ce,{size:9}):N.size>0&&(0,p.jsx)(Be,{})}),(0,p.jsxs)(b,{onClick:()=>$(`name`),type:`button`,children:[x(`name`),g(F,`name`)]}),(0,p.jsxs)(b,{onClick:()=>$(`original`),type:`button`,children:[x(`original_location`),g(F,`original`)]}),(0,p.jsxs)(b,{onClick:()=>$(`deleted`),type:`button`,children:[x(`date_deleted`),g(F,`deleted`)]}),(0,p.jsxs)(b,{onClick:()=>$(`size`),type:`button`,children:[x(`size`),g(F,`size`)]}),(0,p.jsxs)(b,{onClick:()=>$(`type`),type:`button`,children:[x(`type`),g(F,`type`)]}),(0,p.jsx)(`span`,{})]}),(0,p.jsxs)(Ie,{onClick:e=>{e.target===e.currentTarget&&P(new Set)},children:[!tt&&ut&&(0,p.jsx)(Ze,{children:t?.open&&t.query.trim().length>0?x(`no_matching_items`):x(`the_recycle_bin_is_empty`)}),V.map(e=>(0,p.jsxs)(Le,{$checked:N.has(e.id),$orphan:e.isOrphan,"data-search-block":`true`,onClick:t=>ft(e,t),onContextMenu:t=>Y(t,e),onDoubleClick:()=>{P(new Set([e.id])),ot(e.id),o?.()},title:e.owner?`${e.originalPath} · ${e.owner}`:e.originalPath,children:[(0,p.jsx)(Re,{$checked:N.has(e.id),children:N.has(e.id)&&(0,p.jsx)(Ce,{size:9})}),(0,p.jsxs)(Ve,{children:[(0,p.jsx)(je,{entry:e}),(0,p.jsx)(`span`,{children:e.name}),e.isOrphan&&(0,p.jsx)(Je,{children:x(`metadata_only`)}),e.owner&&(0,p.jsx)(Je,{$other:!0,children:x(`other_profile`)})]}),(0,p.jsx)(He,{children:e.originalPath}),(0,p.jsx)(Ue,{children:(0,p.jsx)(he,{value:e.deleted})}),(0,p.jsx)(We,{children:e.isDirectory?`—`:ee(e.size)}),(0,p.jsx)(Ge,{children:x(_(e))}),(0,p.jsxs)(Ke,{children:[e.removable&&!e.isOrphan&&(0,p.jsx)(qe,{onClick:t=>{t.stopPropagation(),fe([e.id]).then(B)},title:x(`restore_to_its_original_folder`),type:`button`,children:(0,p.jsx)(m,{})}),e.removable&&(0,p.jsx)(qe,{$danger:!0,onClick:t=>{t.stopPropagation(),P(new Set([e.id])),z(`delete`)},title:e.isOrphan?x(`remove_the_leftover_record`):x(`delete_permanently`),type:`button`,children:(0,p.jsx)(u,{size:13})})]})]},e.id))]})]})}),I&&(0,p.jsx)(se,{items:yt,onClose:()=>L(null),x:I.x,y:I.y}),(0,p.jsx)(le,{confirmLabel:x(R===`empty`?`empty_the_bin`:R===`purge`?`delete_every_orphan`:`delete`),danger:!0,message:R===`empty`?s(x,V.length,`permanently_delete_1_item_this_cannot_be_undone`,`permanently_delete_count_items_this_cannot_be_undone`):R===`purge`?x(`permanently_delete_every_leftover_record_including_the_ones_owned_by_other_profiles_this_cannot_be_undone`):s(x,G.length,`permanently_delete_1_selected_item_this_cannot_be_undone`,`permanently_delete_count_selected_items_this_cannot_be_undone`),onCancel:()=>z(null),onConfirm:()=>{R===`empty`?mt():R===`purge`?gt():pt()},open:R!==null,title:x(R===`empty`?`empty_the_recycle_bin`:R===`purge`?`delete_every_orphan`:`delete_permanently`)})]});function $(e){st(t=>{let n=t.column===e?{column:e,descending:!t.descending}:{column:e,descending:e===`deleted`};return ae(`yafm.recycle.sort`,n),n})}}function Ae(e,t,n){switch(n){case`name`:return e.name.localeCompare(t.name,void 0,{numeric:!0,sensitivity:`base`});case`original`:return e.originalPath.localeCompare(t.originalPath,void 0,{numeric:!0,sensitivity:`base`});case`deleted`:return e.deleted-t.deleted;case`size`:return e.size-t.size;case`type`:return _(e).localeCompare(_(t),void 0,{sensitivity:`base`})}}function g(e,t){return e.column===t?e.descending?` ↓`:` ↑`:``}function _(e){if(e.isDirectory)return`folder`;let t=e.name.lastIndexOf(`.`);return t>0&&t<e.name.length-1?e.name.slice(t+1).toUpperCase():`file`}function je({entry:e}){let t=c(e.originalPath,e.isDirectory);return(0,p.jsx)(S,{children:t?(0,p.jsx)(`img`,{alt:``,height:18,src:t,width:18}):e.isDirectory?(0,p.jsx)(be,{}):(0,p.jsx)(we,{})})}var Me=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,Ne=i(d)`
    color: ${({$on:e})=>e?`var(--text-primary)`:`var(--text-secondary)`};
    background: ${({$on:e})=>e?`rgba(var(--accent-secondary-rgb), 0.16)`:`transparent`};
    border-color: ${({$on:e})=>e?`var(--border-color-hover)`:`transparent`};
`,v=i(d)`
    color: #fca5a5;

    &:hover:not(:disabled) {
        color: #fecaca;
        border-color: rgba(248, 113, 113, 0.5);
        background: rgba(248, 113, 113, 0.12);
    }
`,Pe=i.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
`,y=`24px minmax(0, 1.2fr) minmax(0, 1.6fr) 150px 90px 80px 58px`,Fe=i.div`
    display: grid;
    grid-template-columns: ${y};
    gap: 14px;
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--text-muted);
`,b=i.button`
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
`,Ie=i.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 8px 10px 22px;
`,Le=i.div`
    display: grid;
    grid-template-columns: ${y};
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
`,x=i.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`,Re=i.span`
    display: grid;
    place-items: center;
    width: 15px;
    height: 15px;
    border: 1px solid ${({$checked:e})=>e?`var(--border-color-focus)`:`var(--border-color-hover)`};
    border-radius: 4px;
    background: ${({$checked:e})=>e?`var(--accent-primary)`:`transparent`};
    color: #fff;
`,ze=i.button`
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
`,Be=i.span`
    width: 7px;
    height: 1.5px;
    border-radius: 1px;
    background: #fff;
`,Ve=i(x)`
    display: flex;
    align-items: center;
    gap: 9px;
`,S=i.span`
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
`,He=i(x)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Ue=i(x)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,We=i(x)`
    font-family: var(--font-sans);
    font-size: 11px;
    font-variant-numeric: tabular-nums;
    color: var(--text-muted);
`,Ge=i(x)`
    font-family: var(--font-sans);
    font-size: 11px;
    color: var(--text-muted);
`,Ke=i.span`
    display: flex;
    justify-content: flex-end;
    gap: 3px;
`,qe=i.button`
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
`,Je=i.span`
    flex-shrink: 0;
    padding: 1px 6px;
    border: 1px solid ${({$other:e})=>e?`rgba(148, 163, 184, 0.35)`:`rgba(251, 191, 36, 0.35)`};
    border-radius: 999px;
    font-family: var(--font-mono);
    font-size: 9px;
    color: ${({$other:e})=>e?`var(--text-muted)`:`#fcd34d`};
    white-space: nowrap;
`,Ye=i.div`
    display: flex;
    flex: 1;
    min-height: 0;
`,Xe=i.p`
    padding: 8px 22px;
    border-bottom: 1px solid var(--border-color);
    background: rgba(251, 191, 36, 0.08);
    font-size: 11px;
    color: #fcd34d;
`,Ze=i.p`
    padding: 42px 24px;
    font-size: 13px;
    color: var(--text-muted);
    text-align: center;
`;export{h as RecycleView};